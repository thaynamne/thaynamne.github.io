(function(){
const root=document.getElementById('app'), grade=window.LESSON_DATA;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const total=grade.subjects.reduce((n,s)=>n+s.units.reduce((m,u)=>m+u.questions.length,0),0);
let score=0, done=0, curSub=0, curWeek=0;
const state={}; // id -> {done:1, good:bool, picked:oi|value}
const TYPE_NAME={choice:'Trắc nghiệm',fill:'Điền vào chỗ trống',tf:'Đúng hay Sai'};
const qtype=q=>q.type||'choice';
const norm=s=>String(s).trim().toLowerCase().replace(/\s+/g,' ').replace(/[.\u2024]$/,'');
function normNum(s){s=String(s).trim().replace(/\s/g,'');if(/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(s))s=s.replace(/\./g,'').replace(',','.');else s=s.replace(',','.');return s}
function fillOK(val,q){const cands=[q.answerText].concat(q.accept||[]);const v=norm(val);for(const c of cands){if(norm(c)===v)return true;const nv=normNum(val),nc=normNum(c);if(nv!==''&&nc!==''&&!isNaN(parseFloat(nv))&&!isNaN(parseFloat(nc))&&parseFloat(nv)===parseFloat(nc))return true}return false}
function header(){return `<a class="back" href="../">← Trang chọn lớp</a><header class="hero"><div class="eyebrow">THẦY NAM NÈ! · BÀI LUYỆN TẬP THAM KHẢO</div><h1>${esc(grade.title)}</h1><p>${esc(grade.intro)}</p><div class="note"><b>Lưu ý:</b> Bài luyện tập soạn theo Phân phối chương trình SGK Kết nối tri thức (Tiếng Anh: Global Success), chia theo tuần. PPCT của từng trường có thể lệch ±1 tuần — em cứ chọn tuần gần nhất với bài đang học ở lớp nhé. Hãy nhờ người lớn hỗ trợ khi cần.</div></header>
<div class="panel"><div class="score" id="score">⭐ Điểm: ${score} / ${total}</div> <span class="tiny" id="progress">Đã làm: ${done} / ${total}</span> <button class="reset" id="reset">Làm lại từ đầu</button>
<div class="tabs" role="tablist">${grade.subjects.map((s,i)=>`<button class="tab${i===curSub?' active':''}" data-sub="${i}">${esc(s.name)}</button>`).join('')}</div>
<div class="tiny" id="subdesc">${esc(grade.subjects[curSub].desc)}</div>
<div class="weeks">${grade.subjects[curSub].units.map((u,i)=>{const allDone=u.questions.every((q,qi)=>state[`q${curSub}_${i}_${qi}`]);return `<button class="weekbtn${i===curWeek?' active':''}${allDone?' done':''}" data-week="${i}" title="${esc(u.title)}">${i+1}${allDone?' ✓':''}</button>`}).join('')}</div></div>`}
function questionHTML(q,si,ui,qi){
 const id=`q${si}_${ui}_${qi}`, st=state[id], t=qtype(q);
 let body='';
 if(t==='fill'){
   const parts=String(q.prompt).split('___');
   const promptHTML=esc(parts[0])+`<input class="fillin" data-fill="${id}" type="text" autocomplete="off" value="${st?esc(st.value):''}" ${st?'disabled':''} aria-label="Điền đáp án">`+(parts[1]?esc(parts.slice(1).join('___')):'');
   body=`<h3>${qi+1}. ${promptHTML}</h3><div class="fillrow">${st?'':`<button class="check" data-check="${id}">Kiểm tra</button>`}</div>`;
 } else {
   body=`<h3>${qi+1}. ${esc(q.prompt)}</h3><div class="opts${t==='tf'?' tf':''}">${q.options.map((o,oi)=>{let cls='choice';if(st){if(oi===q.answer)cls+=' correct';else if(oi===st.picked)cls+=' incorrect'}return `<button class="${cls}" data-answer="${oi}" data-q="${id}" ${st?'disabled':''}>${esc(o)}</button>`}).join('')}</div>`;
 }
 return `<article class="question" data-id="${id}"><span class="badge b-${t}">${TYPE_NAME[t]}</span>${body}<p class="feedback" aria-live="polite">${st?(st.good?'Chính xác! Giỏi lắm! 🎉':'Chưa đúng lần này — mình cùng xem lại nhé.'):''}</p><div class="tiny why" ${st?'':'hidden'}>${esc(q.why)}</div></article>`;
}
function render(){
 const s=grade.subjects[curSub], u=s.units[curWeek];
 let html=header()+`<section class="subject"><h2>${esc(s.name)} · ${esc(u.title)}</h2>`;
 html+=u.questions.map((q,qi)=>questionHTML(q,curSub,curWeek,qi)).join('');
 html+=`<div class="navrow">${curWeek>0?`<button class="navbtn" data-goweek="${curWeek-1}">← Tuần ${curWeek}</button>`:'<span></span>'}${curWeek<s.units.length-1?`<button class="navbtn" data-goweek="${curWeek+1}">Tuần ${curWeek+2} →</button>`:''}</div></section><div class="footer">Thầy Nam Nè! · Cùng học từng chút một 💛</div>`;
 root.innerHTML=html; bind();
}
function bind(){
 root.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{curSub=+b.dataset.sub;curWeek=0;render();window.scrollTo({top:0,behavior:'smooth'})}));
 root.querySelectorAll('.weekbtn').forEach(b=>b.addEventListener('click',()=>{curWeek=+b.dataset.week;render();document.querySelector('.subject').scrollIntoView({behavior:'smooth'})}));
 root.querySelectorAll('[data-goweek]').forEach(b=>b.addEventListener('click',()=>{curWeek=+b.dataset.goweek;render();document.querySelector('.subject').scrollIntoView({behavior:'smooth'})}));
 root.querySelector('#reset').addEventListener('click',()=>{score=0;done=0;for(const k in state)delete state[k];render();window.scrollTo({top:0,behavior:'smooth'})});
 root.querySelectorAll('.question').forEach(card=>{
   const id=card.dataset.id; if(state[id])return;
   card.querySelectorAll('.choice').forEach(btn=>btn.addEventListener('click',()=>{
     const [_,si,ui,qi]=id.split('_').map(Number); const q=grade.subjects[si].units[ui].questions[qi];
     const good=+btn.dataset.answer===q.answer; state[id]={done:1,good,picked:+btn.dataset.answer}; done++; if(good)score++;
     refreshPanel(); rerenderCard(card,id);
   }));
   const chk=card.querySelector('[data-check]');
   if(chk)chk.addEventListener('click',()=>{
     const [_,si,ui,qi]=id.split('_').map(Number); const q=grade.subjects[si].units[ui].questions[qi];
     const inp=card.querySelector('.fillin'); const val=inp.value;
     if(!String(val).trim()){card.querySelector('.feedback').textContent='Em hãy điền đáp án vào chỗ trống trước nhé.';return}
     const good=fillOK(val,q); state[id]={done:1,good,value:val}; done++; if(good)score++;
     refreshPanel(); rerenderCard(card,id);
   });
   const inp=card.querySelector('.fillin');
   if(inp)inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();const c=card.querySelector('[data-check]');if(c)c.click()}});
 });
}
function rerenderCard(card,id){const [_,si,ui,qi]=id.split('_').map(Number);const q=grade.subjects[si].units[ui].questions[qi];const tmp=document.createElement('div');tmp.innerHTML=questionHTML(q,si,ui,qi);card.replaceWith(tmp.firstChild);
 // cập nhật dấu ✓ trên lưới tuần nếu làm xong cả tuần
 const u=grade.subjects[si].units[ui]; if(u.questions.every((qq,qqi)=>state[`q${si}_${ui}_${qqi}`])){const wb=root.querySelector(`.weekbtn[data-week="${ui}"]`);if(wb){wb.classList.add('done');wb.textContent=`${ui+1} ✓`}}}
function refreshPanel(){const sc=root.querySelector('#score'),pr=root.querySelector('#progress');if(sc)sc.textContent=`⭐ Điểm: ${score} / ${total}`;if(pr)pr.textContent=`Đã làm: ${done} / ${total}`}
render();
})();
