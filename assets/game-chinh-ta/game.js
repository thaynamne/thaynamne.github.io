(function (root) {
  'use strict';
  var PROBLEMS_PER_LEVEL = 35;
  var MODE_META = {
    chu: { name: 'Điền chữ', cls: 'md-chu', short: 'Điền chữ còn thiếu vào từ.' },
    tu: { name: 'Điền từ', cls: 'md-tu', short: 'Chọn từ đúng để điền vào câu.' },
    dau: { name: 'Điền dấu', cls: 'md-dau', short: 'Điền dấu thanh hoặc dấu câu.' }
  };
  var LEVEL_TEXT = {
    chu: {
      1: { name: 'Mức 1', desc: 'Phân biệt s/x và ch/tr trong những từ quen thuộc.' },
      2: { name: 'Mức 2', desc: 'Phân biệt l/n, r/d/gi, c/k.' },
      3: { name: 'Mức 3', desc: 'Phân biệt g/gh, ng/ngh và vần ăn/ăng, an/ang.' },
      4: { name: 'Mức 4', desc: 'Vần oai/oay, uôn/uông, iêu/ươu, ui/uôi.' },
      5: { name: 'Thử thách', desc: 'Luyện lẫn nhiều kiểu chữ, từ hơi dài hơn.' }
    },
    tu: {
      1: { name: 'Mức 1', desc: 'Chọn từ đúng trong cặp dễ: sương/xương, chăm/trăm, lo/no…' },
      2: { name: 'Mức 2', desc: 'Thêm các cặp r/d/gi, c/k, g/gh trong câu ngắn.' },
      3: { name: 'Mức 3', desc: 'Từ gần âm hơn, câu dài hơn một chút.' },
      4: { name: 'Mức 4', desc: 'Điền từ vào câu kể hoặc đoạn ngắn.' },
      5: { name: 'Thử thách', desc: 'Cặp từ dễ nhầm, cần đọc kỹ nghĩa của câu.' }
    },
    dau: {
      1: { name: 'Mức 1', desc: 'Điền dấu chấm, chấm hỏi, chấm than ở cuối câu.' },
      2: { name: 'Mức 2', desc: 'Thêm dấu phẩy và hai chấm.' },
      3: { name: 'Mức 3', desc: 'Dấu thanh hỏi / ngã trong từ có ngữ cảnh rõ.' },
      4: { name: 'Mức 4', desc: 'Các dấu thanh: sắc, huyền, hỏi, ngã, nặng.' },
      5: { name: 'Thử thách', desc: 'Lẫn dấu thanh và dấu câu trong câu dài hơn.' }
    }
  };
  var TAG_LABEL = {
    's/x': 'Phân biệt s / x',
    'ch/tr': 'Phân biệt ch / tr',
    'l/n': 'Phân biệt l / n',
    'r/d/gi': 'Phân biệt r / d / gi',
    'c/k': 'Phân biệt c / k',
    'g/gh': 'Phân biệt g / gh',
    'ng/ngh': 'Phân biệt ng / ngh',
    'ăn/ăng': 'Vần ăn / ăng',
    'an/ang': 'Vần an / ang',
    'oai/oay': 'Vần oai / oay',
    'uôn/uông': 'Vần uôn / uông',
    'iêu/ươu': 'Vần iêu / ươu',
    'ui/uôi': 'Vần ui / uôi',
    'tu': 'Điền từ vào câu',
    'dau-cau': 'Dấu câu',
    'dau-thanh': 'Dấu thanh'
  };

  var cfg = {};
  var state = {
    screen: 'home',
    mode: null,
    level: 1,
    problems: [],
    index: 0,
    item: null,
    picked: '',
    status: '',
    mistakes: 0,
    hintTier: 0,
    maxHintTier: 0,
    tried: {},
    score: 0,
    stars: [],
    muted: false,
    doneProblem: false,
    waitingWrong: false,
    audio: null,
    wantedCount: PROBLEMS_PER_LEVEL
  };

  function $(id) { return document.getElementById(id); }
  function escapeHtml(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
    });
  }
  function ensureAudio() {
    if (!state.audio) {
      try { state.audio = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { state.audio = null; }
    }
    if (state.audio && state.audio.state === 'suspended') state.audio.resume();
  }
  function tone(freq, dur, type, gain) {
    if (state.muted || !state.audio) return;
    var ctx = state.audio, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || 'sine'; o.frequency.value = freq;
    g.gain.value = gain || 0.07;
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.connect(g); g.connect(ctx.destination);
    o.start(); o.stop(ctx.currentTime + dur);
  }
  function sndOk() { tone(660, 0.12); setTimeout(function () { tone(880, 0.14); }, 70); }
  function sndBad() { tone(180, 0.18, 'square', 0.05); }
  function sndWin() { [523, 659, 784, 1046].forEach(function (f, i) { setTimeout(function () { tone(f, 0.2); }, i * 120); }); }

  function showScreen(name) {
    state.screen = name;
    $('screen-home').classList.toggle('on', name === 'home');
    $('screen-levels').classList.toggle('on', name === 'levels');
    $('screen-play').classList.toggle('on', name === 'play');
    if (name !== 'play') $('overlay').classList.remove('on');
  }

  function starsForProblem() {
    var s = 3;
    if (state.mistakes >= 3) s -= 2;
    else if (state.mistakes >= 1) s -= 1;
    if (state.maxHintTier >= 3) s -= 2;
    else if (state.maxHintTier >= 2) s -= 1;
    if (s < 1) s = 1;
    return s;
  }
  function starString(n, max) {
    max = max || 3;
    var t = '';
    for (var i = 0; i < max; i++) t += i < n ? '★' : '☆';
    return t;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }
  function answersOf(item) {
    var list = [item.answer].concat(item.alsoAccept || []);
    return list.map(function (x) { return String(x); });
  }
  function isCorrect(item, val) {
    return answersOf(item).indexOf(String(val)) >= 0;
  }
  function pickBank(mode, level, n, forcedIds) {
    var bank = (root.ChinhTaContent && root.ChinhTaContent[mode] && root.ChinhTaContent[mode][level]) || [];
    var out = [];
    var seen = {};
    if (forcedIds && forcedIds.length) {
      forcedIds.forEach(function (key) {
        var it = bank.find(function (x) { return x.id === key || x.word === key || x.stem === key || (x.answer && x.word === key); });
        if (!it) it = bank.find(function (x) { return (x.word && x.word === key) || (x.stem && x.stem.indexOf(key) >= 0) || x.prompt === key; });
        if (it && !seen[it.id]) { out.push(it); seen[it.id] = true; }
      });
    }
    shuffle(bank).forEach(function (it) {
      if (out.length >= n) return;
      if (seen[it.id]) return;
      seen[it.id] = true;
      out.push(it);
    });
    return out.slice(0, n);
  }

  function updateScore() {
    var n = state.problems.length;
    $('chip-progress').textContent = 'Bài ' + (state.index + 1) + ' / ' + n;
    $('chip-score').textContent = '⭐ ' + state.score;
  }

  function renderStem(item, fill, cls) {
    var stem = item.stem || '___';
    var parts = String(stem).split('___');
    var html = '';
    var shown = fill == null || fill === '' ? '?' : fill;
    parts.forEach(function (p, i) {
      if (p) html += '<span class="txt">' + escapeHtml(p) + '</span>';
      if (i < parts.length - 1) {
        html += '<span class="blank ' + (cls || 'sel') + '">' + escapeHtml(shown) + '</span>';
      }
    });
    return html;
  }

  function updateHintPreview() {
    if (state.doneProblem || state.waitingWrong) return;
    $('hint-text').innerHTML = '<span class="ask">Đọc câu gợi ý rồi chọn đáp án đúng nhé! Bấm Gợi ý nếu cần (gợi ý có 3 tầng).</span>';
  }

  function showHint() {
    if (state.doneProblem || state.waitingWrong) return;
    var item = state.item;
    if (!item) return;
    state.hintTier = Math.min(3, (state.hintTier || 0) + 1);
    if (state.hintTier > state.maxHintTier) state.maxHintTier = state.hintTier;
    var hints = item.hints || [];
    var text = hints[state.hintTier - 1] || hints[hints.length - 1] || 'Em đọc lại câu gợi ý nhé.';
    var tag = state.hintTier === 1 ? 'Gợi ý' : state.hintTier === 2 ? 'Gợi ý thêm' : 'Đáp án bài này';
    $('hint-text').innerHTML = '<strong>' + tag + ':</strong> ' + escapeHtml(text);
  }

  function paintChoices() {
    var item = state.item;
    var box = $('choices');
    var choices = item.choices.slice();
    if (!state.doneProblem && !state.waitingWrong) choices = shuffle(choices);
    var n = choices.length;
    box.className = 'choices' + (n <= 1 ? ' cols-1' : n === 3 ? ' cols-3' : n >= 5 ? ' cols-5' : '');
    box.innerHTML = choices.map(function (ch) {
      var cls = 'choice';
      if (state.waitingWrong && String(ch) === String(state.picked)) cls += ' bad';
      if (state.doneProblem && isCorrect(item, ch)) cls += ' ok';
      return '<button class="' + cls + '" type="button" data-v="' + escapeHtml(ch) + '"' +
        (state.doneProblem || state.waitingWrong ? ' disabled' : '') + '>' + escapeHtml(ch) + '</button>';
    }).join('');
    box.querySelectorAll('.choice').forEach(function (btn) {
      btn.addEventListener('click', function () {
        ensureAudio();
        choose(btn.getAttribute('data-v'));
      });
    });
  }

  function paintItem() {
    var item = state.item;
    var meta = LEVEL_TEXT[state.mode][state.level];
    $('lv-name').textContent = MODE_META[state.mode].name + ' · ' + meta.name;
    $('prompt').textContent = MODE_META[state.mode].name;
    $('tag-pill').textContent = TAG_LABEL[item.tag] || item.tag || '';
    $('clue').textContent = item.prompt || '';
    var fill = state.doneProblem ? item.answer : (state.waitingWrong ? state.picked : '');
    var cls = state.doneProblem ? 'ok' : (state.waitingWrong ? 'bad' : 'sel');
    $('word-line').innerHTML = renderStem(item, fill, cls);
    $('word-line').className = item.kind === 'punct' || (item.stem && item.stem.length > 24) ? 'word-line sentence' : 'word-line';
    if (state.doneProblem) {
      $('result-line').textContent = starString(starsForProblem()) + '  ' + (item.word ? item.word : item.answer);
    } else {
      $('result-line').textContent = '';
    }
    paintChoices();
  }

  function choose(val) {
    if (state.doneProblem || !state.item || state.waitingWrong) return;
    var item = state.item;
    if (isCorrect(item, val)) {
      state.status = 'ok';
      state.picked = item.answer;
      if (!state.tried['q']) state.score += 10;
      else state.score += 5;
      sndOk();
      state.hintTier = 0;
      completeProblem();
    } else {
      state.status = 'bad';
      state.picked = val;
      state.tried['q'] = true;
      state.mistakes += 1;
      state.waitingWrong = true;
      sndBad();
      var msg = (item.wrong && item.wrong[val]) || ('Từ hoặc dấu “' + val + '” chưa đúng với câu này.');
      $('hint-text').innerHTML = '<strong>Chưa đúng:</strong> ' + escapeHtml(msg);
      paintItem();
      setTimeout(function () {
        if (state.waitingWrong) {
          state.waitingWrong = false;
          state.picked = '';
          state.status = '';
          paintItem();
          updateHintPreview();
        }
      }, 1600);
    }
  }

  function completeProblem() {
    state.doneProblem = true;
    var s = starsForProblem();
    state.stars[state.index] = s;
    $('btn-next').classList.add('on');
    $('btn-next').textContent = state.index + 1 >= state.problems.length ? 'Xem kết quả 🎉' : 'Bài tiếp theo →';
    var done = itemDoneText(state.item);
    $('hint-text').innerHTML = '<strong>Giỏi lắm!</strong> ' + escapeHtml(done);
    paintItem();
    updateScore();
    sndWin();
    if (window.GameArt) GameArt.flashOk();
    var rl = $('result-line');
    if (rl) rl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function itemDoneText(item) {
    if (item.word) return 'Từ đúng là “' + item.word + '”.';
    if (item.kind === 'punct') return 'Dấu câu đúng là “' + item.answer + '”.';
    return 'Đáp án đúng là “' + item.answer + '”.';
  }

  function nextProblem() {
    if (state.index + 1 >= state.problems.length) { finishLevel(); return; }
    loadProblem(state.index + 1);
  }

  function finishLevel() {
    var totalStars = state.stars.reduce(function (a, b) { return a + (b || 0); }, 0);
    var n = state.problems.length;
    var maxStars = n * 3;
    var title, msg;
    if (totalStars === maxStars) {
      title = 'Xuất sắc!';
      msg = 'Em làm hoàn hảo, không sai bước nào! ' + totalStars + ' / ' + maxStars + ' sao · Điểm ' + state.score + '.';
    } else if (totalStars >= n * 2) {
      title = 'Giỏi lắm!';
      msg = 'Mức ' + state.level + ': ' + totalStars + ' / ' + maxStars + ' sao · Điểm ' + state.score + '. Càng ít sai, càng nhiều sao.';
    } else {
      title = 'Cố lên, em làm được!';
      msg = 'Mức ' + state.level + ': ' + totalStars + ' / ' + maxStars + ' sao · Điểm ' + state.score + '. Làm lại để bớt sai và được nhiều sao hơn nhé.';
    }
    $('win-title').textContent = title;
    $('win-stars').textContent = starString(Math.round(totalStars / n));
    $('win-text').textContent = msg;
    var actions = $('win-actions');
    actions.innerHTML = '';
    function addBtn(cls, label, fn) {
      var b = document.createElement('button');
      b.className = cls; b.type = 'button'; b.textContent = label;
      b.addEventListener('click', fn);
      actions.appendChild(b);
    }
    if (state.level < 5) {
      var nxt = LEVEL_TEXT[state.mode][state.level + 1];
      addBtn('btn-nextlv', 'Chơi ' + ((nxt && nxt.name) || ('Mức ' + (state.level + 1))), function () {
        $('overlay').classList.remove('on'); startLevel(state.mode, state.level + 1);
      });
    }
    addBtn('btn-again', 'Chơi lại mức này', function () {
      $('overlay').classList.remove('on'); startLevel(state.mode, state.level);
    });
    addBtn('btn-home', 'Về trang chọn mức', function () {
      $('overlay').classList.remove('on');
      renderLevels(state.mode);
    });
    burstConfetti();
    if (window.GameArt) GameArt.showWin(title === 'Xuất sắc!');
    $('overlay').classList.add('on');
    sndWin();
  }

  function burstConfetti() {
    var box = $('confetti');
    box.innerHTML = '';
    var colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#9B59B6', '#ff8e8e'];
    for (var i = 0; i < 36; i++) {
      var el = document.createElement('i');
      el.style.left = (Math.random() * 100) + '%';
      el.style.background = colors[i % colors.length];
      el.style.animationDelay = (Math.random() * 0.4) + 's';
      el.style.animationDuration = (1.2 + Math.random() * 0.8) + 's';
      box.appendChild(el);
    }
  }

  function loadProblem(i) {
    state.index = i;
    state.item = state.problems[i];
    state.picked = '';
    state.status = '';
    state.mistakes = 0;
    state.hintTier = 0;
    state.maxHintTier = 0;
    state.tried = {};
    state.doneProblem = false;
    state.waitingWrong = false;
    $('btn-next').classList.remove('on');
    updateScore();
    updateHintPreview();
    paintItem();
    window.scrollTo(0, 0);
    var body = $('play-body');
    if (body) body.scrollTop = 0;
    var play = $('screen-play');
    if (play) play.scrollTop = 0;
  }

  function startLevel(mode, level, forced) {
    ensureAudio();
    state.mode = mode;
    state.level = Number(level);
    state.score = 0;
    state.stars = [];
    var n = state.wantedCount || PROBLEMS_PER_LEVEL;
    state.problems = pickBank(mode, state.level, n, forced);
    showScreen('play');
    loadProblem(0);
  }

  function renderHome() {
    var host = $('modes');
    host.innerHTML = ['chu', 'tu', 'dau'].map(function (op) {
      var m = MODE_META[op];
      return '<button class="mode-btn ' + m.cls + '" data-op="' + op + '" type="button"><h2>' + m.name + '</h2><p>' + m.short + '</p></button>';
    }).join('');
    host.querySelectorAll('.mode-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { renderLevels(btn.getAttribute('data-op')); });
    });
    if (cfg.backLabel) {
      document.querySelectorAll('.back-hub').forEach(function (a) {
        if (a.id === 'btn-back-levels') return;
        a.href = cfg.back;
        a.textContent = cfg.backLabel;
      });
    }
  }

  function renderLevels(mode) {
    state.mode = mode;
    var box = $('levels-list');
    var texts = LEVEL_TEXT[mode];
    $('levels-title').textContent = MODE_META[mode].name;
    var note = $('levels-note');
    if (!note) {
      note = document.createElement('p');
      note.id = 'levels-note';
      note.className = 'levels-note';
      box.parentNode.insertBefore(note, box);
    }
    note.textContent = 'Mỗi mức có 35 bài. Em chọn mức nào cũng được — không cần mở khóa.';
    var levels = [1, 2, 3, 4, 5];
    box.innerHTML = levels.map(function (lv) {
      var t = texts[lv];
      return '<button class="level-btn lv' + lv + '" data-level="' + lv + '" type="button"><div class="num">' + lv + '</div><div><h2>' + t.name + '</h2><p>' + t.desc + '</p></div></button>';
    }).join('');
    box.querySelectorAll('.level-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { startLevel(mode, +btn.getAttribute('data-level')); });
    });
    showScreen('levels');
  }

  function bind() {
    $('btn-back').addEventListener('click', function () { renderLevels(state.mode); });
    $('btn-back-levels').addEventListener('click', function () { showScreen('home'); });
    $('btn-hint').addEventListener('click', function () { ensureAudio(); showHint(); });
    $('btn-next').addEventListener('click', nextProblem);
    $('btn-mute').addEventListener('click', function () {
      state.muted = !state.muted;
      $('btn-mute').textContent = state.muted ? '🔇' : '🔊';
    });
  }

  function parseQuery() {
    var q = new URLSearchParams(location.search);
    var muc = Number(q.get('muc') || '');
    var nQ = Number(q.get('n') || q.get('so') || '');
    state.wantedCount = (nQ >= 1 && nQ <= 35) ? nQ : PROBLEMS_PER_LEVEL;
    var op = q.get('op') || '';
    if (op === 'chu' || op === 'tu' || op === 'dau') {
      /* ok */
    } else op = '';
    var only = q.get('only') || q.get('p') || '';
    var forced = [];
    if (only) only.split(';').forEach(function (x) { if (x.trim()) forced.push(x.trim()); });
    if (op && muc >= 1 && muc <= 5) startLevel(op, muc, forced);
  }

  function boot(options) {
    cfg = Object.assign({ back: '../', backLabel: '← Về trang lớp 3', brand: 'THẦY NAM NÈ!' }, options || {});
    document.querySelectorAll('.brand-text').forEach(function (el) { el.textContent = cfg.brand; });
    var back = document.querySelector('#screen-home .back-hub');
    if (back) { back.href = cfg.back; back.textContent = cfg.backLabel; }
    renderHome();
    bind();
    parseQuery();
  }

  root.ChinhTaGame = {
    boot: boot,
    startLevel: startLevel,
    choose: choose,
    showHint: showHint,
    state: state,
    starsForProblem: function () { return starsForProblem(); }
  };
})(typeof window !== 'undefined' ? window : this);
