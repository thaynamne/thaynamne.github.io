(function (root) {
  'use strict';
  var html = document.documentElement;
  var base = html.getAttribute('data-art-base') || '../../assets/game-art/';
  if (base.slice(-1) !== '/') base += '/';
  document.body.classList.add('has-art');

  function el(id) { return document.getElementById(id); }

  function flashOk() {
    var img = el('ok-stamp');
    if (!img) return;
    img.src = base + 'celebrate-ok.webp';
    img.alt = 'Giỏi lắm!';
    img.classList.add('on');
    clearTimeout(flashOk._t);
    flashOk._t = setTimeout(function () { img.classList.remove('on'); }, 1400);
  }

  function showWin(kind) {
    var img = el('win-art');
    if (!img) return;
    var perfect = kind === 'xuat-sac' || kind === true;
    img.src = base + (perfect ? 'celebrate-xuat-sac.webp' : 'celebrate-ok.webp');
    img.alt = perfect ? 'Xuất sắc!' : 'Giỏi lắm!';
    img.classList.add('on');
    var modal = document.getElementById('modal');
    if (modal) modal.classList.add('has-win-art');
  }

  root.GameArt = { base: base, flashOk: flashOk, showWin: showWin };
})(window);
