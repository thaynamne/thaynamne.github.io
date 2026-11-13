(function (root) {
  'use strict';
  var T = root.DatTinh;
  var DEFAULTS = {
    grade: 3,
    onlyOp: null,
    title: 'Điền số vào phép tính đặt tính',
    subtitle: 'Kết nối tri thức',
    back: '../',
    backLabel: '← Về trang lớp',
    padComma: false,
    brand: 'THẦY NAM NÈ!'
  };

  var OP_META = {
    add: { name: 'Cộng', cls: 'md-add', verb: 'cộng' },
    sub: { name: 'Trừ', cls: 'md-sub', verb: 'trừ' },
    mul: { name: 'Nhân', cls: 'md-mul', verb: 'nhân' },
    div: { name: 'Chia', cls: 'md-div', verb: 'chia' }
  };

  var LEVEL_TEXT = {
    3: {
      add: {
        1: { name: 'Mức 1', desc: 'Số có 2 chữ số, có nhớ (trong phạm vi 100).' },
        2: { name: 'Mức 2', desc: 'Số có 3 chữ số, có nhớ (trong phạm vi 1 000).' },
        3: { name: 'Mức 3', desc: 'Trong phạm vi 10 000, có nhớ.' },
        4: { name: 'Mức 4', desc: 'Số có 4–5 chữ số, nhiều lần nhớ (trong phạm vi 100 000).' },
        5: { name: 'Thử thách', desc: 'Cộng số có 5 chữ số, nhớ nhiều lần liên tiếp.' }
      },
      sub: {
        1: { name: 'Mức 1', desc: 'Số có 2 chữ số, có nhớ. Nhớ 1 cộng vào số trừ ở hàng bên trái.' },
        2: { name: 'Mức 2', desc: 'Số có 3 chữ số, có nhớ (trong phạm vi 1 000).' },
        3: { name: 'Mức 3', desc: 'Trong phạm vi 10 000, có nhớ (kể cả qua số 0).' },
        4: { name: 'Mức 4', desc: 'Số có 4–5 chữ số, nhiều lần nhớ (kể cả 10 000 − 4 567).' },
        5: { name: 'Thử thách', desc: 'Trừ số có 5 chữ số, nhớ qua nhiều số 0.' }
      },
      mul: {
        1: { name: 'Mức 1', desc: 'Số có 2 chữ số nhân với số có 1 chữ số.' },
        2: { name: 'Mức 2', desc: 'Số có 2 chữ số nhân với 6, 7, 8, 9 (có nhớ).' },
        3: { name: 'Mức 3', desc: 'Số có 3 chữ số nhân với số có 1 chữ số, có nhớ.' },
        4: { name: 'Mức 4', desc: 'Số có 4–5 chữ số nhân với số có 1 chữ số, nhớ nhiều lần.' },
        5: { name: 'Thử thách', desc: 'Số có 5 chữ số nhân với 6, 7, 8, 9, nhớ nhiều lần.' }
      },
      div: {
        1: { name: 'Mức 1', desc: 'Chia hết, số bị chia có 2 chữ số (có dạng lấy 2 chữ số đầu).' },
        2: { name: 'Mức 2', desc: 'Phép chia có dư, kể cả dạng lấy 2 chữ số đầu.' },
        3: { name: 'Mức 3', desc: 'Số bị chia có 3 chữ số, có số 0 trong thương hoặc lấy 2 chữ số đầu.' },
        4: { name: 'Mức 4', desc: 'Số bị chia có 4 chữ số chia cho số có 1 chữ số.' },
        5: { name: 'Thử thách', desc: 'Số bị chia có 4–5 chữ số, có số 0 trong thương và có dư.' }
      }
    },
    5: {
      add: {
        1: { name: 'Mức 1', desc: 'Cộng số thập phân cùng số chữ số ở phần thập phân, có nhớ.' },
        2: { name: 'Mức 2', desc: 'Khác số chữ số ở phần thập phân — viết thêm 0 cho thẳng cột dấu phẩy.' },
        3: { name: 'Mức 3', desc: 'Có nhớ qua dấu phẩy, số hạng có thể là số tự nhiên.' },
        4: { name: 'Mức 4', desc: 'Nhiều chữ số thập phân, khác độ dài — viết thêm 0 cho thẳng cột.' },
        5: { name: 'Thử thách', desc: 'Số thập phân dài, nhớ nhiều lần qua dấu phẩy.' }
      },
      sub: {
        1: { name: 'Mức 1', desc: 'Trừ số thập phân cùng số chữ số ở phần thập phân, có nhớ.' },
        2: { name: 'Mức 2', desc: 'Khác số chữ số ở phần thập phân — viết thêm 0 cho thẳng cột dấu phẩy.' },
        3: { name: 'Mức 3', desc: 'Có nhớ qua dấu phẩy (ví dụ 15 − 4,72).' },
        4: { name: 'Mức 4', desc: 'Nhiều chữ số thập phân, khác độ dài — viết thêm 0 cho thẳng cột.' },
        5: { name: 'Thử thách', desc: 'Trừ số thập phân dài, nhớ qua nhiều số 0 và dấu phẩy.' }
      },
      mul: {
        1: { name: 'Mức 1', desc: 'Số thập phân nhân số tự nhiên có 1 chữ số.' },
        2: { name: 'Mức 2', desc: 'Nhân hai số thập phân (1 chữ số ở phần thập phân).' },
        3: { name: 'Mức 3', desc: 'Nhiều chữ số ở phần thập phân; đặt dấu phẩy theo tổng số chữ số.' },
        4: { name: 'Mức 4', desc: 'Số thập phân có nhiều chữ số nhân với số có 1 chữ số, rồi đặt dấu phẩy.' },
        5: { name: 'Thử thách', desc: 'Nhân hai số thập phân có nhiều chữ số (đặt tính như số tự nhiên, rồi đặt dấu phẩy).' }
      },
      div: {
        1: { name: 'Mức 1', desc: 'Số thập phân : số tự nhiên. Viết dấu phẩy ở thương trước khi hạ.' },
        2: { name: 'Mức 2', desc: 'Số tự nhiên : số tự nhiên, thương là số thập phân.' },
        3: { name: 'Mức 3', desc: 'Chia cho số thập phân (đổi phép rồi đặt tính).' },
        4: { name: 'Mức 4', desc: 'Số thập phân dài hơn; có thể phải đổi phép hoặc hạ thêm 0.' },
        5: { name: 'Thử thách', desc: 'Chia phải hạ thêm 0, hoặc chia cho số thập phân có 2 chữ số (ví dụ 7,35 : 0,35).' }
      }
    }
  };

  var KIND_NAME = { chia: 'Chia', nhan: 'Nhân', tru: 'Trừ', ha: 'Hạ', nho: 'Nhớ', phay: 'Dấu phẩy', viet: 'Viết' };

  var cfg = {};
  var state = {
    screen: 'home',
    op: null,
    level: 1,
    problems: [],
    index: 0,
    tab: null,
    status: {},
    values: {},
    selected: null,
    mistakes: 0,
    hintTier: 0,
    maxHintTier: 0,
    tried: {},
    score: 0,
    stars: [],
    muted: false,
    doneProblem: false,
    audio: null,
    waitingWrong: false
  };

  function $(id) { return document.getElementById(id); }
  function cellKey(r, c) { return r + ',' + c; }
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

  function firstOpen() {
    if (!state.tab) return null;
    for (var i = 0; i < state.tab.order.length; i++) {
      var o = state.tab.order[i];
      var k = cellKey(o.r, o.c) + (o.mark ? ':nho' : '');
      if (state.status[k] !== 'ok') return o;
    }
    return null;
  }

  function isCurrent(o, r, c, mark) {
    if (!o) return false;
    var om = o.mark || '';
    var mm = mark === true ? 'nho' : (mark || '');
    return o.r === r && o.c === c && om === mm;
  }

  function selectCurrent() {
    var o = firstOpen();
    state.selected = o ? { r: o.r, c: o.c, mark: !!o.mark } : null;
    state.hintTier = 0;
    paintBoard();
    updateHintPreview();
  }

  function showScreen(name) {
    state.screen = name;
    $('screen-home').classList.toggle('on', name === 'home');
    $('screen-levels').classList.toggle('on', name === 'levels');
    $('screen-play').classList.toggle('on', name === 'play');
    if (name !== 'play') $('overlay').classList.remove('on');
  }

  function updateHintPreview() {
    var el = $('hint-text');
    var open = firstOpen();
    var kind = open && (open.kind || (state.tab.grid[open.r][open.c] && state.tab.grid[open.r][open.c].kind));
    document.querySelectorAll('#step-bar .pill').forEach(function (p) {
      p.classList.toggle('on', p.getAttribute('data-kind') === kind);
    });
    if (state.doneProblem) {
      var check = state.tab.checkLine ? ' ' + escapeHtml(state.tab.checkLine) : '';
      el.innerHTML = '<strong>Giỏi lắm!</strong> ' + escapeHtml(state.tab.resultText) + (check ? '<br>' + check : '');
      return;
    }
    if (state.waitingWrong) return;
    var labels = {
      chia: 'Em đang làm bước <strong>Chia</strong>.',
      nhan: 'Em đang làm bước <strong>Nhân</strong>.',
      tru: 'Em đang làm bước <strong>Trừ</strong>.',
      ha: 'Em đang làm bước <strong>Hạ</strong>.',
      nho: 'Em viết số <strong>nhớ</strong>.',
      phay: 'Em viết <strong>dấu phẩy</strong>.',
      viet: 'Em viết chữ số kết quả của cột này.'
    };
    el.innerHTML = '<span class="ask">' + (labels[kind] || 'Điền số vào ô đang sáng.') + ' Bấm Gợi ý nếu cần (gợi ý có 3 tầng).</span>';
  }

  function showHint() {
    if (state.doneProblem || state.waitingWrong) return;
    var open = firstOpen();
    if (!open) return;
    var cell = state.tab.grid[open.r][open.c];
    var hints;
    if (open.mark === 'phay') hints = (cell && cell.phayHints) || [cell && cell.phayHint];
    else hints = (cell && cell.hints) || [cell && cell.hint];
    state.hintTier = Math.min(3, (state.hintTier || 0) + 1);
    if (state.hintTier > state.maxHintTier) state.maxHintTier = state.hintTier;
    var text = hints[state.hintTier - 1] || hints[hints.length - 1] || cell.hint;
    var tag = state.hintTier === 1 ? 'Gợi ý' : state.hintTier === 2 ? 'Gợi ý thêm' : 'Đáp án bước này';
    $('hint-text').innerHTML = '<strong>' + tag + ':</strong> ' + escapeHtml(text);
    document.querySelectorAll('#step-bar .pill').forEach(function (p) {
      p.classList.toggle('on', p.getAttribute('data-kind') === open.kind || p.getAttribute('data-kind') === (cell && cell.kind));
    });
  }

  function expectedValue(o) {
    var cell = state.tab.grid[o.r][o.c];
    if (o.mark === 'phay' || o.kind === 'phay') return ',';
    if (o.mark) return 1;
    return cell.value;
  }

  function sameValue(typed, expected) {
    if (expected === ',' || expected === 'phay') {
      return typed === ',' || typed === '.' || typed === 'phẩy';
    }
    return String(typed) === String(expected);
  }

  function inputDigit(d) {
    if (state.doneProblem || !state.tab || state.waitingWrong) return;
    var open = firstOpen();
    if (!open) return;
    var cell = state.tab.grid[open.r][open.c];
    var k = cellKey(open.r, open.c) + (open.mark ? ':nho' : '');
    var exp = expectedValue(open);
    if (sameValue(d, exp)) {
      state.status[k] = 'ok';
      state.values[k] = String(exp === ',' ? ',' : exp);
      if (!state.tried[k]) state.score += 10;
      else state.score += 5;
      sndOk();
      state.hintTier = 0;
      paintBoard();
      updateScore();
      if (!firstOpen()) completeProblem();
      else { selectCurrent(); }
    } else {
      state.status[k] = 'bad';
      state.values[k] = String(d);
      state.tried[k] = true;
      state.mistakes += 1;
      state.waitingWrong = true;
      sndBad();
      var wrongCell = open.mark === 'phay' ? { kind: 'phay', value: ',' } : (open.mark ? { kind: 'nho', value: 1 } : cell);
      var msg = T.explainWrong ? T.explainWrong(state.tab, wrongCell, d) : 'Chưa đúng, em thử lại nhé.';
      $('hint-text').innerHTML = '<strong>Chưa đúng:</strong> ' + escapeHtml(msg);
      paintBoard();
      setTimeout(function () {
        if (state.status[k] === 'bad') {
          state.status[k] = '';
          state.values[k] = '';
          state.waitingWrong = false;
          paintBoard();
          updateHintPreview();
        }
      }, 1600);
    }
  }

  function clearDigit() {
    if (state.doneProblem || state.waitingWrong) return;
    var open = firstOpen();
    if (!open) return;
    var k = cellKey(open.r, open.c) + (open.mark ? ':nho' : '');
    if (state.status[k] === 'ok') return;
    state.status[k] = '';
    state.values[k] = '';
    paintBoard();
  }

  function starsForProblem() {
    // 3 stars by default. -1 for 1–2 mistakes, -2 for 3+ mistakes.
    // Hint tier 1 (nudge) is free; tier 2 −1 star; tier 3 −2 stars.
    // Minimum 1 star once the problem is finished.
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

  function completeProblem() {
    state.doneProblem = true;
    var s = starsForProblem();
    state.stars[state.index] = s;
    var extra = state.tab.checkLine ? ' · ' + state.tab.checkLine : '';
    $('result-line').textContent = starString(s) + '  ' + state.tab.resultText;
    $('btn-next').classList.add('on');
    $('btn-next').textContent = state.index + 1 >= state.problems.length ? 'Xem kết quả 🎉' : 'Bài tiếp theo →';
    var check = state.tab.checkLine ? '<br>' + escapeHtml(state.tab.checkLine) : '';
    $('hint-text').innerHTML = '<strong>Giỏi lắm!</strong> ' + escapeHtml(state.tab.resultText) + check;
    updateScore();
    sndWin();
    if (window.GameArt) GameArt.flashOk();
    var rl = $('result-line') || $('hint-text');
    if (rl) rl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    var next = $('btn-next');
    if (next) next.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
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
      var nxt = LEVEL_TEXT[cfg.grade][state.op][state.level + 1];
      addBtn('btn-nextlv', 'Chơi ' + ((nxt && nxt.name) || ('Mức ' + (state.level + 1))), function () {
        $('overlay').classList.remove('on'); startLevel(state.op, state.level + 1);
      });
    }
    addBtn('btn-again', 'Chơi lại mức này', function () {
      $('overlay').classList.remove('on'); startLevel(state.op, state.level);
    });
    addBtn('btn-home', cfg.onlyOp ? 'Về trang chọn mức' : 'Về trang chọn phép', function () {
      $('overlay').classList.remove('on');
      showScreen(cfg.onlyOp ? 'levels' : 'home');
      if (cfg.onlyOp) renderLevels(cfg.onlyOp);
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

  function prodLineVisible(tab, r, c) {
    // Show subtraction line under a product only after that product is filled
    // (i.e. the Trừ step for that product has been reached or passed).
    var cell = tab.grid[r][c];
    if (!cell || cell.role !== 'product') return false;
    var k = cellKey(r, c);
    if (state.status[k] === 'ok') return true;
    var open = firstOpen();
    if (!open) return true;
    // If we've reached any trừ cell on this product's rem row, show the line
    for (var i = 0; i < tab.order.length; i++) {
      var o = tab.order[i];
      if (state.status[cellKey(o.r, o.c) + (o.mark ? ':nho' : '')] === 'ok') continue;
      // first unfinished: if it's trừ on the row below this product, show line
      if (o.kind === 'tru' && o.r === r + 1) return true;
      return false;
    }
    return false;
  }

  function paintBoard() {
    var tab = state.tab;
    var board = $('board');
    var span = (tab.colsLeft && tab.colsRight) ? (tab.colsLeft + tab.colsRight) : (tab.cols || 0);
    var tight = (tab.cols >= 6 || tab.rows >= 7 || span >= 6);
    var tight2 = (tab.cols >= 8 || tab.rows >= 9 || span >= 8);
    $('screen-play').classList.toggle('tight', tight || tight2);
    $('screen-play').classList.toggle('tight2', tight2);
    var open = firstOpen();
    var html = '';
    if (tab.layout === 'div') {
      board.className = 'board div';
      board.style.setProperty('--left', tab.colsLeft);
      board.style.setProperty('--right', tab.colsRight);
      board.style.setProperty('--rows', tab.rows);
      board.style.removeProperty('--ccols');
      html += '<div class="vbar" style="grid-row:1 / -1;grid-column:' + (tab.colsLeft + 1) + '"></div>';
      html += '<div class="div-line" style="grid-row:1;grid-column:' + (tab.colsLeft + 2) + ' / -1"></div>';
      for (var r = 0; r < tab.rows; r++) {
        for (var c = 0; c < tab.cols; c++) {
          if (!tab.grid[r][c]) continue;
          html += cellHtml(tab, r, c, open, c < tab.colsLeft ? c + 1 : c + 2);
        }
      }
    } else {
      var ccols = tab.cols - 1;
      board.className = 'board column';
      board.style.setProperty('--ccols', ccols);
      board.style.setProperty('--rows', tab.rows);
      board.style.removeProperty('--left');
      board.style.removeProperty('--right');
      var lineAfter = tab.lineAfter != null ? tab.lineAfter : tab.rows - 2;
      var lines = tab.linesAfter && tab.linesAfter.length ? tab.linesAfter : [lineAfter];
      for (r = 0; r < tab.rows; r++) {
        for (c = 0; c < tab.cols; c++) {
          if (!tab.grid[r][c]) continue;
          html += cellHtml(tab, r, c, open, c + 1);
        }
        if (lines.indexOf(r) >= 0) {
          html += '<div class="hline" style="grid-row:' + (r + 1) + ';grid-column:1 / -1;align-self:end;margin-bottom:-2px"></div>';
        }
      }
    }
    board.innerHTML = html;
  }

  function cellHtml(tab, r, c, open, col) {
    var cell = tab.grid[r][c];
    if (!cell) return '';
    var style = 'grid-row:' + (r + 1) + ';grid-column:' + col;
    var k = cellKey(r, c);
    var classes = ['cell'];
    var text = '';
    var extra = '';
    if (cell.hideDigit) classes.push('hide-digit');
    if (cell.role === 'op') { classes.push('op'); text = String(cell.value); }
    else if (cell.role === 'comma') {
      classes.push('comma');
      if (cell.given) { classes.push('given'); text = ','; }
      else {
        classes.push('fill');
        var st = state.status[k];
        var locked = !(open && isCurrent(open, r, c, false));
        if (st === 'ok') { classes.push('ok'); text = ','; }
        else if (st === 'bad') { classes.push('bad'); text = state.values[k] === '.' ? ',' : (state.values[k] || ''); }
        else if (locked) { classes.push('locked'); }
        else { classes.push('sel'); }
      }
    } else if (cell.role === 'carry' || cell.small) {
      classes.push('small', 'carry', 'fill');
      st = state.status[k];
      locked = !(open && isCurrent(open, r, c, false));
      if (st === 'ok') { classes.push('ok'); text = String(cell.value); }
      else if (st === 'bad') { classes.push('bad'); text = state.values[k] || ''; }
      else if (locked) { classes.push('locked'); }
      else { classes.push('sel'); }
    } else if (cell.given) {
      classes.push('given');
      if (cell.ghost) classes.push('ghost');
      if (!cell.hideDigit) text = String(cell.value);
    } else if (cell.fill) {
      classes.push('fill');
      st = state.status[k];
      locked = !(open && isCurrent(open, r, c, false));
      if (st === 'ok') { classes.push('ok'); text = String(cell.value); }
      else if (st === 'bad') { classes.push('bad'); text = state.values[k] || ''; }
      else if (locked) { classes.push('locked'); }
      else { classes.push('sel'); }
    }
    if (cell.role === 'product' && prodLineVisible(tab, r, c)) classes.push('prodline');
    // nho mark on subtrahend
    if (cell.nho) {
      var mk = k + ':nho';
      var mst = state.status[mk];
      var mcls = 'nho-mark';
      var mtxt = '';
      var mCur = open && isCurrent(open, r, c, true);
      if (mst === 'ok') { mcls += ' ok'; mtxt = '1'; }
      else if (mst === 'bad') { mcls += ' bad'; mtxt = state.values[mk] || ''; }
      else if (mCur) { mcls += ' sel'; }
      extra = '<span class="' + mcls + '" data-mark="nho" data-r="' + r + '" data-c="' + c + '">' + escapeHtml(mtxt) + '</span>';
    }
    if (cell.commaBefore && cell.given) {
      extra += '<span class="comma-float" aria-hidden="true">,</span>';
    }
    var hasPhay = false;
    if (tab.order) {
      for (var pi = 0; pi < tab.order.length; pi++) {
        if (tab.order[pi].r === r && tab.order[pi].c === c && tab.order[pi].mark === 'phay') { hasPhay = true; break; }
      }
    }
    if (hasPhay) {
      var pk = k + ':phay';
      var pst = state.status[pk];
      var pcls = 'phay-mark';
      var ptxt = '';
      var pCur = open && isCurrent(open, r, c, 'phay');
      if (pst === 'ok') { pcls += ' ok'; ptxt = ','; }
      else if (pst === 'bad') { pcls += ' bad'; ptxt = state.values[pk] || ''; }
      else if (pCur) { pcls += ' sel'; }
      extra += '<span class="' + pcls + '" data-mark="phay" data-r="' + r + '" data-c="' + c + '">' + escapeHtml(ptxt) + '</span>';
    }
    var label = cell.role + (cell.fill ? '' : '');
    return '<div class="' + classes.join(' ') + '" style="' + style + '" data-r="' + r + '" data-c="' + c + '" data-role="' + (cell.role || '') + '" aria-label="' + escapeHtml(label) + '">' + escapeHtml(text) + extra + '</div>';
  }

  function updateScore() {
    var n = state.problems.length;
    $('chip-progress').textContent = 'Bài ' + (state.index + 1) + ' / ' + n;
    $('chip-score').textContent = '⭐ ' + state.score;
  }

  function loadProblem(i) {
    state.index = i;
    state.tab = state.problems[i];
    state.status = {};
    state.values = {};
    state.selected = null;
    state.mistakes = 0;
    state.hintTier = 0;
    state.maxHintTier = 0;
    state.tried = {};
    state.doneProblem = false;
    state.waitingWrong = false;
    $('result-line').textContent = '';
    $('btn-next').classList.remove('on');
    $('prompt').innerHTML = 'Đặt tính: <span>' + escapeHtml(state.tab.prompt) + '</span>';
    var meta = LEVEL_TEXT[cfg.grade][state.op][state.level];
    $('lv-name').textContent = OP_META[state.op].name + ' · ' + meta.name;
    var rw = $('rewrite');
    if (state.tab.rewrite && state.tab.rewrite.note) {
      rw.style.display = 'block';
      rw.textContent = state.tab.rewrite.note;
    } else { rw.style.display = 'none'; rw.textContent = ''; }
    var note = $('note-under');
    if (state.tab.note) { note.style.display = 'block'; note.textContent = state.tab.note; }
    else { note.style.display = 'none'; note.textContent = ''; }
    // step bar: chia for div, nho/viet for column
    var bar = $('step-bar');
    if (state.tab.kind === 'div') {
      bar.innerHTML = '<span class="pill chia" data-kind="chia">Chia</span><span class="pill nhan" data-kind="nhan">Nhân</span><span class="pill tru" data-kind="tru">Trừ</span><span class="pill ha" data-kind="ha">Hạ</span>';
    } else {
      bar.innerHTML = '<span class="pill viet" data-kind="viet" style="background:#4D96FF">Viết</span><span class="pill nho" data-kind="nho" style="background:#e0674a">Nhớ</span>' +
        (cfg.padComma ? '<span class="pill phay" data-kind="phay" style="background:#9B59B6">Dấu phẩy</span>' : '');
    }
    paintBoard();
    updateScore();
    updateHintPreview();
    // scroll to top so title/score stay visible
    window.scrollTo(0, 0);
    var body = $('play-body');
    if (body) body.scrollTop = 0;
    var card = document.querySelector('.board-scroll');
    if (card) card.scrollTop = 0;
    document.getElementById('screen-play').scrollTop = 0;
    var pb = document.getElementById('play-body');
    if (pb) pb.scrollTop = 0;
  }

  function startLevel(op, level, forced) {
    ensureAudio();
    state.op = op;
    state.level = Number(level);
    state.score = 0;
    state.stars = [];
    var n = state.wantedCount || 35;
    if (forced && forced.length) {
      var rest = T.generateLevel(cfg.grade, op, state.level, n);
      var tabs = forced.map(function (p) {
        if (op === 'add') return T.buildAdd(p);
        if (op === 'sub') return T.buildSub(p[0], p[1]);
        if (op === 'mul') return T.buildMul(p[0], p[1]);
        if (cfg.grade === 5) return T.buildDivDec(p[0], p[1]);
        return T.buildDivInt(p[0], p[1]);
      });
      var keys = {};
      tabs.forEach(function (t) { keys[t.prompt] = true; });
      rest.forEach(function (t) {
        if (tabs.length >= n || keys[t.prompt]) return;
        tabs.push(t);
      });
      state.problems = tabs.slice(0, n);
    } else {
      state.problems = T.generateLevel(cfg.grade, op, state.level, n);
    }
    showScreen('play');
    loadProblem(0);
  }

  function renderHome() {
    var host = $('modes');
    if (!host) return;
    if (cfg.onlyOp) return;
    host.innerHTML = ['add', 'sub', 'mul', 'div'].map(function (op) {
      var m = OP_META[op];
      return '<button class="mode-btn ' + m.cls + '" data-op="' + op + '" type="button"><h2>' + m.name + '</h2><p>' +
        (cfg.grade === 5
          ? 'Số thập phân · Toán 5'
          : 'Đặt tính ' + m.verb + ' · Toán 3') +
        '</p></button>';
    }).join('');
    host.querySelectorAll('.mode-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { renderLevels(btn.getAttribute('data-op')); });
    });
  }

  function renderLevels(op) {
    state.op = op;
    var box = $('levels-list');
    var texts = LEVEL_TEXT[cfg.grade][op];
    $('levels-title').textContent = OP_META[op].name;
    var note = $('levels-note');
    if (!note) {
      note = document.createElement('p');
      note.id = 'levels-note';
      note.className = 'levels-note';
      box.parentNode.insertBefore(note, box);
    }
    note.textContent = 'Mỗi mức có 35 bài. Em chọn mức nào cũng được — không cần mở khóa.';
    var levels = Object.keys(texts).map(Number).sort(function (a, b) { return a - b; });
    box.innerHTML = levels.map(function (lv) {
      var t = texts[lv];
      return '<button class="level-btn lv' + lv + '" data-level="' + lv + '" type="button"><div class="num">' + lv + '</div><div><h2>' + t.name + '</h2><p>' + t.desc + '</p></div></button>';
    }).join('');
    box.querySelectorAll('.level-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { startLevel(op, +btn.getAttribute('data-level')); });
    });
    showScreen('levels');
  }

  function bind() {
    $('btn-back').addEventListener('click', function () {
      if (cfg.onlyOp) showScreen('levels');
      else showScreen('home');
    });
    $('btn-back-levels').addEventListener('click', function () {
      if (cfg.onlyOp) {
        // stay? or go to class page
        window.location.href = cfg.back;
      } else showScreen('home');
    });
    $('btn-hint').addEventListener('click', function () { ensureAudio(); showHint(); });
    $('btn-next').addEventListener('click', nextProblem);
    $('btn-mute').addEventListener('click', function () {
      state.muted = !state.muted;
      $('btn-mute').textContent = state.muted ? '🔇' : '🔊';
    });
    document.querySelectorAll('#pad .pad-key').forEach(function (k) {
      k.addEventListener('click', function () {
        ensureAudio();
        var v = k.getAttribute('data-k');
        if (v === 'del') clearDigit();
        else inputDigit(v);
      });
    });
    document.addEventListener('keydown', function (ev) {
      if (state.screen !== 'play') return;
      if (ev.key >= '0' && ev.key <= '9') { ev.preventDefault(); ensureAudio(); inputDigit(ev.key); }
      else if (ev.key === ',' || ev.key === '.') { ev.preventDefault(); ensureAudio(); inputDigit(','); }
      else if (ev.key === 'Backspace') { ev.preventDefault(); clearDigit(); }
      else if (ev.key === 'Enter' && state.doneProblem) { ev.preventDefault(); nextProblem(); }
    });
  }

  function parseQuery() {
    var q = new URLSearchParams(location.search);
    var muc = Number(q.get('muc') || '');
    var nQ = Number(q.get('n') || q.get('so') || '');
    state.wantedCount = (nQ >= 1 && nQ <= 35) ? nQ : 35;
    var op = q.get('op') || cfg.onlyOp || '';
    var only = q.get('only') || q.get('p') || '';
    var forced = [];
    if (only) {
      only.split(';').forEach(function (pair) {
        pair = String(pair).trim();
        if (!pair) return;
        // URLSearchParams turns + into a space, so "47+28" arrives as "47 28".
        if (pair.indexOf(':') >= 0) forced.push(pair.split(':'));
        else if (pair.indexOf('x') >= 0 || pair.indexOf('×') >= 0) forced.push(pair.split(/[x×]/));
        else if (pair.indexOf('+') >= 0) forced.push(pair.split('+'));
        else if (/\s/.test(pair) && (op === 'add' || op === 'mul')) forced.push(pair.split(/\s+/));
        else if (pair.indexOf('-') >= 0 || pair.indexOf('−') >= 0) {
          // "15-4,72" or "52-18" — split on the first minus only
          var m = pair.match(/^(.+?)\s*[-−]\s*(.+)$/);
          if (m) forced.push([m[1], m[2]]);
        } else {
          var p = pair.split(',');
          if (p.length === 2 && /^\d+$/.test(p[0]) && /^\d+$/.test(p[1])) forced.push(p);
        }
      });
    }
    if (op && muc >= 1 && muc <= 5) startLevel(op, muc, forced);
    else if (cfg.onlyOp && muc >= 1 && muc <= 5) startLevel(cfg.onlyOp, muc, forced);
    else if (cfg.onlyOp) renderLevels(cfg.onlyOp);
  }

  function boot(options) {
    var playRoot = document.getElementById('screen-play');
    var side = playRoot && playRoot.querySelector('.side');
    if (playRoot && side && side.parentElement !== playRoot) playRoot.appendChild(side);

    cfg = Object.assign({}, DEFAULTS, options || {});
    if (cfg.grade === 5) cfg.padComma = true;
    document.title = cfg.title + ' — Thầy Nam Nè!';
    $('home-title').textContent = cfg.title;
    $('home-sub').innerHTML = escapeHtml(cfg.subtitle);
    document.querySelectorAll('.brand-text').forEach(function (el) { el.textContent = cfg.brand; });
    document.querySelectorAll('.back-hub').forEach(function (a) { a.href = cfg.back; a.textContent = cfg.backLabel; });
    if (cfg.padComma) $('pad-comma').style.display = '';
    else $('pad-comma').style.display = 'none';
    if (cfg.onlyOp) {
      $('modes-wrap').style.display = 'none';
      renderLevels(cfg.onlyOp);
    } else {
      renderHome();
    }
    bind();
    parseQuery();
  }

  root.DatTinhGame = {
    boot: boot,
    startLevel: startLevel,
    loadProblem: loadProblem,
    inputDigit: inputDigit,
    showHint: showHint,
    firstOpen: firstOpen,
    state: state,
    starsForProblem: function () { return starsForProblem(); }
  };
})(window);
