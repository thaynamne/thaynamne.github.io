'use strict';
(() => {
 const $=id=>document.getElementById(id),slug=document.body.dataset.book,total=Number(document.body.dataset.total);
 const book=$('book'),page=$('page'),sheet=$('turn'),dialog=$('game-dialog'),play=$('play'),jump=$('activities');
 const games=window.COMIC_GAMES[slug];let current=0,busy=false,start=null;
 let saved={};const storageKey='comic-games-v2-'+slug;
 try{saved=JSON.parse(localStorage.getItem(storageKey)||'{}')||{};}catch(_){}
 const save=()=>{try{localStorage.setItem(storageKey,JSON.stringify(saved));}catch(_){}};
 const src=p=>`${slug}/p${String(p).padStart(2,'0')}.jpg`;
 const label=p=>p===0?'Bìa trước':p===total-1?'Bìa sau':`Trang truyện ${p}`;
 function sync(){
  $('count').textContent=`Trang ${current+1} / ${total}`;
  page.alt=document.querySelector('h1').textContent+' — '+label(current);
  for(const id of ['prev','edge-prev'])$(id).disabled=busy||current===0;
  for(const id of ['next','edge-next'])$(id).disabled=busy||current===total-1;
  play.hidden=!games[current];play.disabled=busy;
  play.textContent=games[current]?.some(g=>g.kind==='quiz')?'🎮 Chơi câu đố':'✨ Chơi ngay';
  jump.value=games[current]?String(current):'';jump.disabled=busy;
  for(const p of [current-1,current+1])if(p>=0&&p<total){const im=new Image();im.src=src(p);}
 }
 async function go(target){
  if(busy||target===current||target<0||target>=total||dialog.open)return;
  busy=true;sync();$('load-status').textContent='';
  const image=new Image();image.src=src(target);
  try{await image.decode();}catch(_){busy=false;sync();$('load-status').textContent='Trang chưa tải được. Em bấm lật lại nhé!';return;}
  const forward=target>current,old=src(current);
  const front=sheet.querySelector('.front img'),rear=sheet.querySelector('.rear img');
  front.src=forward?old:src(target);rear.src=forward?src(target):old;
  page.src=forward?src(target):old;
  sheet.hidden=false;
  const duration=matchMedia('(prefers-reduced-motion: reduce)').matches?1:760;
  // Rotate an actual two-faced sheet around its spine, never just swap the visible image.
  const frames=forward?[{transform:'rotateY(0deg)',filter:'brightness(1)'},{transform:'rotateY(-80deg)',filter:'brightness(.82)',offset:.48},{transform:'rotateY(-180deg)',filter:'brightness(1)'}]:[{transform:'rotateY(-180deg)',filter:'brightness(1)'},{transform:'rotateY(-80deg)',filter:'brightness(.82)',offset:.52},{transform:'rotateY(0deg)',filter:'brightness(1)'}];
  try{await sheet.animate(frames,{duration,easing:'cubic-bezier(.4,.02,.2,1)',fill:'forwards'}).finished;}catch(_){}
  current=target;page.src=src(current);sheet.hidden=true;sheet.getAnimations().forEach(a=>a.cancel());busy=false;sync();
 }
 $('prev').onclick=$('edge-prev').onclick=()=>go(current-1);
 $('next').onclick=$('edge-next').onclick=()=>go(current+1);
 book.addEventListener('pointerdown',e=>{if(e.isPrimary)start={x:e.clientX,y:e.clientY};});
 book.addEventListener('pointerup',e=>{if(!start)return;const dx=e.clientX-start.x,dy=e.clientY-start.y;start=null;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.35){go(current+(dx<0?1:-1));}});
 book.addEventListener('pointercancel',()=>{start=null;});
 document.addEventListener('keydown',e=>{if(dialog.open||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||e.altKey||e.ctrlKey||e.metaKey)return;if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();go(current+(e.key==='ArrowRight'?1:-1));}});
 for(const p of Object.keys(games)){const o=document.createElement('option');o.value=p;o.textContent=`Trang ${p} · ${games[p].map(g=>g.title).join(' + ')}`;jump.append(o);}
 jump.onchange=()=>{if(jump.value!=='')go(Number(jump.value));};
 const node=(tag,text,cls)=>{const el=document.createElement(tag);if(text)el.textContent=text;if(cls)el.className=cls;return el;};
 function render(){
  const content=$('game-content');content.replaceChildren();$('game-title').textContent=games[current].some(g=>g.kind==='quiz')?'Chơi câu đố':'Góc sáng tạo';$('game-page').textContent=label(current)+' · '+document.querySelector('h1').textContent;
  games[current].forEach((g,gi)=>{
   const card=node('section','', 'game-card');card.append(node('h3',g.title));content.append(card);
   if(g.kind==='quiz')g.questions.forEach((q,qi)=>{
    const key=`${current}-${gi}-q${qi}`,box=node('section','', 'game-card');box.append(node('h3',`${qi+1}. ${q.text}`));
    const choices=node('div','','options'),feedback=node('p','','feedback');feedback.setAttribute('role','status');
    const options=[...q.options]; // Deterministic rotation: correct answer isn't always first.
    const offset=(current+qi)%options.length;options.push(...options.splice(0,offset));
    options.forEach(text=>{const btn=node('button',text,'option');btn.type='button';choices.append(btn);if(saved[key]){btn.disabled=true;if(text===q.answer)btn.classList.add('correct');}
     btn.onclick=()=>{if(text===q.answer){saved[key]=true;save();btn.classList.add('correct');feedback.textContent='🌟 Đúng rồi! Em giỏi lắm!';if(q.answer==='Con cua')feedback.textContent+=' “Càng” là chiếc càng của cua: càng to thì con cua nhỏ (theo câu đố vui).';choices.querySelectorAll('button').forEach(b=>b.disabled=true);box.classList.remove('sparkle');void box.offsetWidth;box.classList.add('sparkle');}else{btn.classList.add('retry');feedback.textContent='💛 Gần rồi! Em suy nghĩ thêm và thử đáp án khác nhé.';}};
    });if(saved[key])feedback.textContent='⭐ Em đã giải được câu này!';box.append(choices,feedback);card.append(box);
   });
   if(g.kind==='check'){
    if(g.safety)card.append(node('p',g.safety,'safety'));
    const progress=node('p','','progress');progress.setAttribute('role','status');const inputs=[];
    const update=()=>{const n=inputs.filter(i=>i.checked).length;progress.textContent=n===g.items.length?'🌟 Hoàn thành rồi! Em thật tuyệt!':`Đã hoàn thành ${n} / ${g.items.length} · Chạm vào ô em đã làm nhé!`;};
    g.items.forEach((text,i)=>{const key=`${current}-${gi}-c${i}`,row=node('label','','check-row'),input=node('input');input.type='checkbox';input.checked=!!saved[key];inputs.push(input);input.onchange=()=>{saved[key]=input.checked;save();update();};row.append(input,node('span',`${i+1}. ${text}`));card.append(row);});card.append(progress);update();
   }
   if(g.kind==='tips')g.items.forEach(([title,text])=>{const d=node('details'),s=node('summary','✨ '+title);d.append(s,node('p',text));card.append(d);});
  });
 }
 play.onclick=()=>{render();dialog.showModal();};$('close-game').onclick=()=>dialog.close();
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 $('reset-game').onclick=()=>{for(const key of Object.keys(saved))if(key.startsWith(`${current}-`))delete saved[key];save();render();};
 sync();
})();
