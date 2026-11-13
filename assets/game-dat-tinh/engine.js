/* Dat tinh engine — SGK Toán 3 & Toán 5 Kết nối tri thức
   Cộng / trừ: nhớ cộng vào số trừ ở hàng bên trái (không dùng từ "mượn").
   Nhân: nhân như số tự nhiên, rồi đặt dấu phẩy theo tổng chữ số thập phân.
   Chia: số bị chia trái, số chia phải, thương dưới vạch; dấu phẩy ở thương
   viết trước khi hạ chữ số thập phân đầu tiên.
*/
(function (root) {
  'use strict';

  function digitsOf(n) {
    return String(n).split('').map(Number);
  }
  function randInt(a, b) {
    return a + Math.floor(Math.random() * (b - a + 1));
  }
  function fmtInt(n) {
    var s = String(n);
    var out = '';
    for (var i = 0; i < s.length; i++) {
      if (i && (s.length - i) % 3 === 0) out += ' ';
      out += s[i];
    }
    return out;
  }
  function parseVN(s) {
    if (s && typeof s === 'object' && s.intPart != null) return s;
    s = String(s).trim().replace(/\s/g, '').replace('.', ',');
    var neg = false;
    if (s.charAt(0) === '-') { neg = true; s = s.slice(1); }
    var parts = s.split(',');
    var intPart = parts[0] || '0';
    var fracPart = parts[1] || '';
    while (intPart.length > 1 && intPart.charAt(0) === '0' && intPart !== '0') intPart = intPart.slice(1);
    var value = Number(intPart + fracPart) / Math.pow(10, fracPart.length);
    if (neg) value = -value;
    return { intPart: intPart, fracPart: fracPart, places: fracPart.length, value: value, text: fracPart.length ? intPart + ',' + fracPart : intPart };
  }
  function fmtDec(intPart, fracPart, places) {
    if (places == null) places = (fracPart || '').length;
    var f = (fracPart || '');
    while (f.length < places) f += '0';
    if (places === 0) return String(Number(intPart));
    return String(Number(intPart)) + ',' + f;
  }
  function fromValue(val, places) {
    var sign = val < 0 ? -1 : 1;
    var v = Math.abs(val);
    var pow = Math.pow(10, places || 0);
    var rounded = Math.round(v * pow + 1e-10);
    var intPart = String(Math.floor(rounded / pow));
    var frac = places ? String(rounded % pow).padStart(places, '0') : '';
    return { intPart: intPart, fracPart: frac, places: places || 0, value: sign * rounded / pow, text: fmtDec(intPart, frac, places || 0) };
  }
  function prettyNum(p) {
    if (typeof p === 'string' || typeof p === 'number') p = parseVN(p);
    var i = fmtInt(Number(p.intPart));
    return p.places ? i + ',' + p.fracPart : i;
  }

  /* ---------- column alignment ---------- */
  function alignOperands(nums, places) {
    var parsed = nums.map(function (n) { return typeof n === 'object' && n.intPart != null ? n : parseVN(n); });
    var maxInt = 0, maxFrac = places == null ? 0 : places;
    parsed.forEach(function (p) {
      if (p.intPart.length > maxInt) maxInt = p.intPart.length;
      if (p.fracPart.length > maxFrac) maxFrac = p.fracPart.length;
    });
    if (places != null) maxFrac = places;
    var rows = parsed.map(function (p) {
      var added = maxFrac - p.fracPart.length;
      var intDigits = p.intPart.padStart(maxInt, '0').split('').map(Number);
      var fracDigits = (p.fracPart + '0'.repeat(added)).split('').map(Number);
      if (maxFrac === 0) fracDigits = [];
      return {
        parsed: p,
        intDigits: intDigits,
        fracDigits: fracDigits,
        added: added,
        digits: intDigits.concat(fracDigits) // length maxInt+maxFrac
      };
    });
    return { parsed: parsed, rows: rows, maxInt: maxInt, maxFrac: maxFrac, width: maxInt + maxFrac };
  }

  function emptyGrid(rows, cols) {
    var g = [];
    for (var r = 0; r < rows; r++) {
      g[r] = [];
      for (var c = 0; c < cols; c++) g[r][c] = null;
    }
    return g;
  }
  function place(grid, r, c, rec) {
    grid[r][c] = Object.assign({ r: r, c: c }, rec);
  }

  /* Column index mapping: 0 = operator, then digits with optional comma after maxInt */
  function colMap(maxInt, maxFrac) {
    // physical columns: 0 = op, 1..maxInt = int digits, (comma), frac digits
    var map = []; // map[digitIndex] = physical col
    var p = 1;
    for (var i = 0; i < maxInt; i++) { map.push(p); p++; }
    var commaCol = -1;
    if (maxFrac > 0) { commaCol = p; p++; }
    for (var f = 0; f < maxFrac; f++) { map.push(p); p++; }
    return { map: map, commaCol: commaCol, physCols: p, opCol: 0 };
  }

  function writeDigitRow(grid, r, digits, cm, opts) {
    opts = opts || {};
    digits.forEach(function (d, i) {
      var c = cm.map[i];
      var isLead = true;
      for (var k = 0; k <= i; k++) if (digits[k] !== 0) { /* later */ }
      var leadingZero = true;
      for (var k2 = 0; k2 <= i; k2++) {
        if (k2 < cm.map.length && (k2 < (opts.intLen || digits.length) ? digits[k2] !== 0 : true)) {
          if (k2 <= i && digits[k2] !== 0) leadingZero = (function () {
            for (var t = 0; t <= i; t++) if (t < (opts.intLen || 999) && digits[t] !== 0) return t > i || (t === i && d === 0 && i !== digits.length - 1);
            return true;
          })();
          break;
        }
      }
      // simpler leading-zero: in integer part, zeros before first nonzero are blank (except last digit)
    });
  }

  function isLeadZero(digits, i, intLen) {
    if (i >= intLen) return false; // fractional zeros are real (including trailing added)
    if (i === intLen - 1 && intLen + (digits.length - intLen) === 1) return false;
    for (var k = 0; k <= i; k++) {
      if (k < intLen && digits[k] !== 0) return false;
    }
    // all integer digits up to i are 0
    // if the whole number is 0 and this is the ones place, show 0
    var allZero = digits.every(function (d) { return d === 0; });
    if (allZero && i === intLen - 1) return false;
    return true;
  }

  /* ---------- ADD ---------- */
  function buildAdd(nums, opts) {
    opts = opts || {};
    var al = alignOperands(nums, opts.places);
    var width = al.width, maxInt = al.maxInt, maxFrac = al.maxFrac;
    var colsD = al.rows.map(function (r) { return r.digits; });
    var carryInto = [];
    var result = [];
    var carry = 0;
    var i;
    for (i = 0; i < width; i++) { carryInto[i] = 0; result[i] = 0; }
    for (i = width - 1; i >= 0; i--) {
      carryInto[i] = carry;
      var s = carry;
      for (var r = 0; r < colsD.length; r++) s += colsD[r][i];
      result[i] = s % 10;
      carry = Math.floor(s / 10);
    }
    var leadCarry = carry; // extra high digit
    var cm = colMap(maxInt + (leadCarry ? 1 : 0), maxFrac);
    // If leadCarry, we need to shift all digit indices by +1
    if (leadCarry) {
      al.rows.forEach(function (row) {
        row.intDigits = [0].concat(row.intDigits);
        row.digits = row.intDigits.concat(row.fracDigits);
      });
      carryInto = [leadCarry].concat(carryInto);
      result = [leadCarry].concat(result);
      maxInt += 1;
      width += 1;
      colsD = al.rows.map(function (row) { return row.digits; });
    }
    cm = colMap(maxInt, maxFrac);
    var nOp = al.rows.length;
    var carryRow = 0;
    var firstOp = 1;
    var resultRow = firstOp + nOp;
    var lineAfter = firstOp + nOp - 1;
    var rows = resultRow + 1;
    var cols = cm.physCols;
    var grid = emptyGrid(rows, cols);
    var order = [];

    function putComma(r, given) {
      if (cm.commaCol < 0) return;
      place(grid, r, cm.commaCol, { value: ',', role: 'comma', given: !!given, fill: !given, hint: 'Viết dấu phẩy thẳng cột với dấu phẩy của các số hạng.', kind: 'phay' });
    }

    // carry row
    for (i = 0; i < width; i++) {
      if (!carryInto[i]) continue;
      var hintCol = placeName(i, maxInt, maxFrac);
      place(grid, carryRow, cm.map[i], {
        value: carryInto[i],
        role: 'carry',
        given: false,
        fill: true,
        small: true,
        hint: 'Nhớ ' + carryInto[i] + ' từ hàng bên phải, viết ' + carryInto[i] + ' ở ' + hintCol + '.',
        kind: 'nho'
      });
    }

    // operand rows
    al.rows.forEach(function (row, ri) {
      var r = firstOp + ri;
      if (ri === nOp - 1) {
        place(grid, r, cm.opCol, { value: '+', role: 'op', given: true, fill: false, hint: '' });
      }
      row.digits.forEach(function (d, i) {
        var ghost = (i >= maxInt) && (i >= maxInt + (row.fracDigits.length - row.added)) && row.added > 0 && (i >= row.digits.length - row.added);
        // ghost = trailing zeros we added in the fractional part
        var addedStart = maxInt + (row.parsed.fracPart.length);
        ghost = maxFrac > 0 && i >= addedStart;
        var lead = isLeadZero(row.digits, i, maxInt);
        if (lead && !ghost) return; // leave empty
        place(grid, r, cm.map[i], {
          value: d,
          role: 'operand',
          given: true,
          fill: false,
          ghost: ghost,
          hint: ''
        });
      });
      putComma(r, true);
    });

    // result + fill order right-to-left
    function colHintAdd(i) {
      var parts = [];
      var carryIn = carryInto[i];
      al.rows.forEach(function (row) {
        if (isLeadZero(row.digits, i, maxInt) && !(maxFrac > 0 && i >= maxInt + row.parsed.fracPart.length)) {
          // skip leading blanks unless ghost 0
          if (!(maxFrac > 0 && i >= maxInt + row.parsed.fracPart.length)) return;
        }
        parts.push(String(row.digits[i]));
      });
      if (carryIn) parts.push('nhớ ' + carryIn);
      var sum = (carryIn || 0);
      al.rows.forEach(function (row) { sum += row.digits[i]; });
      var spoken;
      if (parts.length === 0) spoken = String(sum);
      else if (parts.length === 1 && !carryIn) spoken = parts[0];
      else spoken = parts.join(' cộng ');
      if (sum >= 10) return spoken + ' bằng ' + sum + ', viết ' + result[i] + ' nhớ ' + Math.floor(sum / 10) + '.';
      return spoken + ' bằng ' + sum + ', viết ' + result[i] + '.';
    }

    for (i = width - 1; i >= 0; i--) {
      var leadRes = isLeadZero(result, i, maxInt);
      if (leadRes) continue;
      var hint = colHintAdd(i);
      place(grid, resultRow, cm.map[i], {
        value: result[i],
        role: 'result',
        given: false,
        fill: true,
        hint: hint,
        kind: 'viet'
      });
      order.push({ r: resultRow, c: cm.map[i], kind: 'viet' });
      // after writing this digit, fill the carry that was PRODUCED into the left column (carryInto[i-1] or lead)
      if (i > 0 && carryInto[i] === 0 && false) { /* noop */ }
      var produced = (function () {
        var s = carryInto[i];
        al.rows.forEach(function (row) { s += row.digits[i]; });
        return Math.floor(s / 10);
      })();
      if (produced && i > 0) {
        var cr = grid[carryRow][cm.map[i - 1]];
        if (cr && cr.fill) order.push({ r: carryRow, c: cm.map[i - 1], kind: 'nho' });
      } else if (produced && i === 0) {
        // lead carry already is result[0] when we shifted — no separate carry cell for the leftmost extra digit
      }
    }
    putComma(resultRow, true);

    var aTxt = al.parsed.map(prettyNum);
    var sumVal = al.parsed.reduce(function (s, p) { return s + p.value; }, 0);
    var sumP = fromValue(sumVal, maxFrac);
    // strip trailing zeros in display of result text
    var resultText = aTxt.join(' + ') + ' = ' + prettyTrim(sumP, maxFrac);
    return finishColumn('add', grid, rows, cols, order, resultText, aTxt.join(' + '), { maxInt: maxInt, maxFrac: maxFrac, cm: cm, lineAfter: lineAfter });
  }

  function prettyTrim(p, minPlaces) {
    var f = p.fracPart || '';
    if (!f) return fmtInt(Number(p.intPart));
    // keep at least the problem's alignment? For the sentence, drop useless trailing zeros
    while (f.length && f.charAt(f.length - 1) === '0' && f.length > (minPlaces ? 0 : 0)) {
      // For 4,50 + ... = 4,5 we can say 4,5; but 1,0 from 2,5+(-) keep if needed
      // Always trim trailing zeros in the spoken result, except keep one if number is like 3,0 from exact .0? Trim all.
      f = f.slice(0, -1);
    }
    if (!f) return fmtInt(Number(p.intPart));
    return fmtInt(Number(p.intPart)) + ',' + f;
  }

  function placeName(i, maxInt, maxFrac) {
    var offset = i - (maxInt - 1); // 0 = ones
    var names = { '-4': 'hàng chục nghìn', '-3': 'hàng nghìn', '-2': 'hàng trăm', '-1': 'hàng chục', '0': 'hàng đơn vị', '1': 'hàng phần mười', '2': 'hàng phần trăm', '3': 'hàng phần nghìn' };
    return names[String(offset)] || 'hàng bên trái';
  }

  /* ---------- SUB ---------- */
  function buildSub(a, b, opts) {
    opts = opts || {};
    var al = alignOperands([a, b], opts.places);
    var width = al.width, maxInt = al.maxInt, maxFrac = al.maxFrac;
    var top = al.rows[0].digits;
    var bot = al.rows[1].digits;
    var nhoAt = [], borrowAt = [], result = [], nho = 0, i;
    for (i = width - 1; i >= 0; i--) {
      nhoAt[i] = nho;
      var bb = bot[i] + nho;
      if (top[i] < bb) {
        borrowAt[i] = true;
        result[i] = top[i] + 10 - bb;
        nho = 1;
      } else {
        borrowAt[i] = false;
        result[i] = top[i] - bb;
        nho = 0;
      }
    }
    var cm = colMap(maxInt, maxFrac);
    var firstOp = 0;
    var resultRow = 2;
    var lineAfter = 1;
    var rows = 3;
    var cols = cm.physCols;
    var grid = emptyGrid(rows, cols);
    var order = [];

    function putComma(r) {
      if (cm.commaCol < 0) return;
      place(grid, r, cm.commaCol, { value: ',', role: 'comma', given: true, fill: false, hint: 'Viết dấu phẩy thẳng cột với dấu phẩy của số bị trừ.', kind: 'phay' });
    }

    al.rows.forEach(function (row, ri) {
      var r = firstOp + ri;
      if (ri === 1) place(grid, r, cm.opCol, { value: '−', role: 'op', given: true, fill: false, hint: '' });
      row.digits.forEach(function (d, i) {
        var addedStart = maxInt + row.parsed.fracPart.length;
        var ghost = maxFrac > 0 && i >= addedStart;
        var lead = isLeadZero(row.digits, i, maxInt);
        if (lead && !ghost) return;
        place(grid, r, cm.map[i], {
          value: d,
          role: ri === 0 ? 'minuend' : 'subtrahend',
          given: true,
          fill: false,
          ghost: ghost,
          hint: ''
        });
      });
      putComma(r);
    });

    // nho marks: small 1 on subtrahend row, same column (superimposed visually via a flag, or a tiny cell above)
    // We'll put nho as a small fill cell in a dedicated "nho" overlay on the subtrahend digit: use property nhoValue on the existing cell AND a fillable small mark stored as grid nho row? 
    // Simpler: add nho as fillable small digits on the subtrahend row using a sibling — store on the cell as fillNho.
    // The renderer will show a small input above the subtrahend digit.
    // We'll also put standalone small cells in a virtual way: use role 'nho' in the same cell coordinates but as extra.
    // Cleanest: grid cells on subtrahend get .nhoTarget = 1, and we add entries in `marks` list for fill order.
    var marks = [];

    function subHint(i) {
      var carryIn = nhoAt[i];
      var botVal = bot[i] + carryIn;
      var name = placeName(i, maxInt, maxFrac);
      var left = top[i];
      var pieces = [];
      if (carryIn) {
        pieces.push('Số nhớ 1 cộng thêm vào chữ số ' + bot[i] + ' của số trừ: ' + bot[i] + ' thêm 1 bằng ' + botVal + '.');
      }
      if (borrowAt[i]) {
        pieces.push((carryIn ? '' : '') + left + ' trừ ' + botVal + ' không trừ được. Lấy 1' + left + ' trừ ' + botVal + ' bằng ' + result[i] + ', viết ' + result[i] + ' nhớ 1.');
        if (i > 0) pieces.push('Số nhớ 1 được cộng thêm vào chữ số của số trừ ở hàng bên trái.');
      } else {
        pieces.push(left + ' trừ ' + botVal + ' bằng ' + result[i] + ', viết ' + result[i] + '.');
      }
      return pieces.join(' ');
    }

    for (i = width - 1; i >= 0; i--) {
      var leadRes = isLeadZero(result, i, maxInt);
      if (leadRes) continue;
      var hint = subHint(i);
      place(grid, resultRow, cm.map[i], {
        value: result[i],
        role: 'result',
        given: false,
        fill: true,
        hint: hint,
        kind: 'viet'
      });
      order.push({ r: resultRow, c: cm.map[i], kind: 'viet' });
      // nho written on the LEFT subtrahend digit after this borrow
      if (borrowAt[i] && i > 0) {
        var cLeft = cm.map[i - 1];
        var subCell = grid[1][cLeft];
        // If left subtrahend cell doesn't exist (leading blank), create a 0 ghost + nho, or just the nho mark
        if (!subCell) {
          place(grid, 1, cLeft, { value: bot[i - 1], role: 'subtrahend', given: true, fill: false, hint: '', hideDigit: true });
          subCell = grid[1][cLeft];
        }
        subCell.nho = 1;
        subCell.nhoHint = 'Viết nhớ 1, cộng thêm vào chữ số ' + bot[i - 1] + ' của số trừ ở ' + placeName(i - 1, maxInt, maxFrac) + '.';
        marks.push({ r: 1, c: cLeft, kind: 'nho', value: 1, hint: subCell.nhoHint });
        order.push({ r: 1, c: cLeft, kind: 'nho', mark: true });
      }
    }
    putComma(resultRow);

    var diff = al.parsed[0].value - al.parsed[1].value;
    var dp = fromValue(diff, maxFrac);
    var resultText = prettyNum(al.parsed[0]) + ' − ' + prettyNum(al.parsed[1]) + ' = ' + prettyTrim(dp, maxFrac);
    var tab = finishColumn('sub', grid, rows, cols, order, resultText, prettyNum(al.parsed[0]) + ' − ' + prettyNum(al.parsed[1]), { maxInt: maxInt, maxFrac: maxFrac, cm: cm, lineAfter: lineAfter, marks: marks });
    return tab;
  }

  /* ---------- MUL ---------- */
  function buildMul(a, b, opts) {
    opts = opts || {};
    var A = typeof a === 'object' && a.intPart != null ? a : parseVN(a);
    var B = typeof b === 'object' && b.intPart != null ? b : parseVN(b);
    var places = A.places + B.places;
    var ia = Number(A.intPart + A.fracPart); // strip comma
    var ib = Number(B.intPart + B.fracPart);
    var prod = ia * ib;
    var prodStr = String(prod);
    // final display with comma placed `places` digits from the right
    var pretty;
    if (places === 0) pretty = fmtInt(prod);
    else {
      var raw = prodStr.padStart(places + 1, '0'); // at least one int digit
      pretty = raw.slice(0, raw.length - places) + ',' + raw.slice(raw.length - places);
      pretty = pretty.replace(/^0+(\d)/, '$1'); // keep 0,xx
      if (pretty.charAt(0) === ',') pretty = '0' + pretty;
      // pretty currently may have no thousand spaces — OK
    }

    // Factors shown WITH commas (SGK)
    var top = glyphNum(A);
    var bot = glyphNum(B);
    // Product as integer digits first, then we also have comma + maybe leading 0 in the result row
    var resultGlyphs = pretty.replace(/\s/g, '').split(''); // includes comma

    // Width: enough for factors (with commas) and result
    // Align everything to the RIGHT (ones of integer product aligned). For decimals, align by the rightmost digit (not by comma).
    // SGK keeps commas in factors; the product's digits sit as if multiplying whole numbers, then comma is inserted.
    // Practical alignment: right-align the raw integer strings of factors and integer product, then insert comma columns into each row at the right positions.

    // Simpler visual used in class:
    //   1 , 2
    // × 0 , 4
    // -------
    //   0 , 4 8
    // Right-align by last digit; commas sit in their natural place in each number (may not share a column — that's OK for mul).
    // OR right-align last digits, commas float.

    var topRaw = String(ia).split('');
    var botRaw = String(ib).split('');
    var prodRaw = String(prod).split('');
    // carries produced when multiplying ia * ib (ib is usually 1 digit for our game; if more, do single-row only when ib < 10)
    if (ib >= 10) {
      return buildMulLong(A, B, ia, ib, places, pretty);
    }
    // 1-digit multiplier (ib is 1..9 after stripping; 0,4 → 4)
    var m = ib;
    var carries = []; // carry INTO each position of ia, right-aligned to topRaw
    var resDigits = [];
    var c = 0;
    var i;
    for (i = topRaw.length - 1; i >= 0; i--) {
      carries[i] = c;
      var s = Number(topRaw[i]) * m + c;
      resDigits[i] = s % 10;
      c = Math.floor(s / 10);
    }
    if (c) {
      topRaw = [''].concat(topRaw);
      carries = [c].concat(carries);
      resDigits = [c].concat(resDigits);
      // leading empty on top
    }
    // Now build displayed rows with commas inserted from the right of each original number
    function withCommaFromRight(rawArr, fracPlaces, leadBlank) {
      // rawArr may have a leading '' for carry column
      var cells = rawArr.slice();
      if (fracPlaces > 0) {
        var idx = cells.length - fracPlaces;
        if (idx < 0) {
          while (idx < 0) { cells.unshift('0'); idx++; }
        }
        cells.splice(idx, 0, ',');
      }
      return cells;
    }
    // Integer product digits (resDigits) — then insert comma `places` from right, add 0 if needed
    var prodCells = resDigits.map(String);
    if (places > 0) {
      while (prodCells.length < places) prodCells.unshift('0');
      var at = prodCells.length - places;
      if (at === 0) { prodCells.unshift('0'); at = 1; }
      prodCells.splice(at, 0, ',');
    }

    var topCells = withCommaFromRight(topRaw, A.places);
    var botCells = withCommaFromRight(botRaw.map(String), B.places);
    // pad left to same width
    var widthG = Math.max(topCells.length, botCells.length, prodCells.length);
    function padL(arr) { while (arr.length < widthG) arr.unshift(''); return arr; }
    padL(topCells); padL(botCells); padL(prodCells);
    var carryCells = [];
    // map carries onto the visual top row (skip comma slots)
    // We'll place carries above the product/factor digit columns (not comma).
    // Align carry array to topRaw which may have leading ''.
    // Visual carry row: same width, carry sits above the digit it goes INTO (the current top digit).
    var carryVis = new Array(widthG).fill('');
    (function () {
      // Walk topCells from right, skip commas, pair with topRaw from right
      var raw = topRaw.slice();
      var ci = raw.length - 1;
      for (var k = widthG - 1; k >= 0; k--) {
        if (topCells[k] === ',') continue;
        if (ci < 0) break;
        if (carries[ci]) carryVis[k] = String(carries[ci]);
        ci--;
      }
    })();

    var rowsN = 4; // carry, top, bot, result (line is between bot and result)
    var colsN = widthG + 1; // + op col
    var grid = emptyGrid(rowsN, colsN);
    var order = [];
    var lineRow = 3;
    // Actually rows: 0 carry, 1 top, 2 bot, 3 result; line drawn under row 2
    function putGlyphs(r, arr, role, given, isBot) {
      if (isBot) place(grid, r, 0, { value: '×', role: 'op', given: true, fill: false, hint: '' });
      arr.forEach(function (ch, i) {
        var c = i + 1;
        if (ch === '' || ch == null) return;
        if (ch === ',') {
          place(grid, r, c, { value: ',', role: 'comma', given: true, fill: false, hint: '' });
          return;
        }
        place(grid, r, c, { value: Number(ch), role: role, given: given, fill: !given, hint: '', ghost: false });
      });
    }
    carryVis.forEach(function (ch, i) {
      if (!ch) return;
      place(grid, 0, i + 1, {
        value: Number(ch),
        role: 'carry',
        given: false,
        fill: true,
        small: true,
        hint: 'Nhớ ' + ch + ', viết ' + ch + '.',
        kind: 'nho'
      });
    });
    putGlyphs(1, topCells, 'operand', true, false);
    putGlyphs(2, botCells, 'operand', true, true);

    // hints for each product digit, right to left, plus comma and leading 0
    // Pair prodCells with multiplication steps of topRaw * m
    function mulHints() {
      var list = [];
      var cIn = 0;
      var original = String(ia).split('');
      for (var k = original.length - 1; k >= 0; k--) {
        var d = Number(original[k]);
        var s = d * m + cIn;
        var write = s % 10;
        var nho = Math.floor(s / 10);
        var h = d + ' nhân ' + m + (cIn ? ' thêm nhớ ' + cIn : '') + ' bằng ' + s + ', viết ' + write + (nho ? ' nhớ ' + nho : '') + '.';
        list.push({ write: write, nho: nho, hint: h, cIn: cIn });
        cIn = nho;
      }
      if (cIn) list.push({ write: cIn, nho: 0, hint: 'Viết ' + cIn + ' (số nhớ còn lại).', lead: true });
      return list;
    }
    var steps = mulHints();
    // Fill order: product digits from right to left (skip comma), and after each digit write carry into the left; then comma (and leading 0 if it was added as part of placing comma)
    var stepIdx = 0;
    for (var k = widthG - 1; k >= 0; k--) {
      var ch = prodCells[k];
      if (ch === ',') {
        place(grid, 3, k + 1, {
          value: ',',
          role: 'comma',
          given: false,
          fill: true,
          hint: places === 1
            ? 'Đếm tất cả ' + places + ' chữ số ở phần thập phân của hai thừa số. Từ phải sang trái, đặt dấu phẩy để tách ' + places + ' chữ số.'
            : 'Đếm tất cả ' + places + ' chữ số ở phần thập phân của hai thừa số. Từ phải sang trái, đặt dấu phẩy để tách ' + places + ' chữ số.',
          kind: 'phay'
        });
        continue;
      }
      if (ch === '' || ch == null) continue;
      var st = steps[stepIdx];
      var hint;
      var isLeadZeroWrite = false;
      if (st && st.write === Number(ch)) {
        hint = st.hint;
        stepIdx++;
      } else {
        // leading 0 written because there was no integer digit
        hint = 'Phần nguyên chưa có chữ số nào nên viết 0 trước dấu phẩy.';
        isLeadZeroWrite = true;
      }
      place(grid, 3, k + 1, {
        value: Number(ch),
        role: 'result',
        given: false,
        fill: true,
        hint: hint,
        kind: isLeadZeroWrite ? 'viet' : 'viet'
      });
      order.push({ r: 3, c: k + 1, kind: 'viet' });
      // carry produced goes above the NEXT left digit of the top (skip comma)
      if (st && st.nho) {
        // find carry cell to the left
        for (var L = k - 1; L >= 0; L--) {
          if (prodCells[L] === ',') continue;
          var cr = grid[0][L + 1];
          if (cr && cr.fill) order.push({ r: 0, c: L + 1, kind: 'nho' });
          break;
        }
      }
    }
    // Add comma into order: after the `places` digits from the right have been written, before leftover leading digits? 
    // SGK: multiply first as whole numbers, THEN place comma. So order should be: all integer product digits (right to left) including leading product digits, then place comma (and write 0 if needed).
    // Recompute order more carefully.
    order = [];
    var digitCells = [];
    var commaCell = null;
    var leadZeroCell = null;
    for (k = widthG - 1; k >= 0; k--) {
      var cell = grid[3][k + 1];
      if (!cell) continue;
      if (cell.role === 'comma') commaCell = { r: 3, c: k + 1, kind: 'phay' };
      else if (cell.hint && cell.hint.indexOf('Phần nguyên chưa có') === 0) leadZeroCell = { r: 3, c: k + 1, kind: 'viet' };
      else digitCells.push({ r: 3, c: k + 1, kind: 'viet' }); // already right-to-left
    }
    // digitCells is right-to-left already (we walked right to left)
    // Interleave carries: after each product digit, the carry to its left
    var built = [];
    digitCells.forEach(function (o) {
      built.push(o);
      // carry above a column to the left
      for (var L = o.c - 1; L >= 1; L--) {
        if (grid[3][L] && grid[3][L].role === 'comma') continue;
        if (grid[0][L] && grid[0][L].fill) built.push({ r: 0, c: L, kind: 'nho' });
        break;
      }
    });
    if (commaCell) built.push(commaCell);
    if (leadZeroCell) built.push(leadZeroCell);
    // If lead zero is to the left of comma, the above is correct (digits, comma, 0). But 0 might have been included as a digit after comma? No, lead 0 is before comma.
    // For 0,48: cells [0] [,] [4] [8]. Walk RtoL: 8, 4, comma, 0. digitCells = [8,4], leadZero=0, comma. built = 8, (carry), 4, (carry), comma, 0. Perfect.

    var resultText = prettyNum(A) + ' × ' + prettyNum(B) + ' = ' + pretty.replace(/(\d)(?=(\d{3})+(,|$))/g, '$1 ');
    // if pretty already has comma, just use it
    resultText = prettyNum(A) + ' × ' + prettyNum(B) + ' = ' + pretty;
    var note = places > 0
      ? (ia + ' × ' + ib + ' = ' + prod + '. Đếm tất cả ' + places + ' chữ số ở phần thập phân của hai thừa số; từ phải sang trái, đặt dấu phẩy tách ' + places + ' chữ số' + (pretty.indexOf('0,') === 0 ? '. Phần nguyên chưa có chữ số nên viết 0 trước dấu phẩy' : '') + ': ' + pretty + '.')
      : null;
    var tab = finishColumn('mul', grid, rowsN, colsN, built, resultText, prettyNum(A) + ' × ' + prettyNum(B), { maxInt: 0, maxFrac: places, lineRow: 3, note: note, places: places });
    // line should be under row 2 (bot), before result row 3. Use lineAfter = 2
    tab.lineAfter = 2;
    return tab;
  }

  function glyphNum(P) {
    var s = P.places ? (P.intPart + ',' + P.fracPart) : P.intPart;
    return s.split('');
  }

  function padLeft(arr, w) {
    var a = arr.slice();
    while (a.length < w) a.unshift('');
    return a;
  }
  function countAddCarries(a, b) {
    var n = 0, c = 0;
    a = Math.abs(Number(a) || 0); b = Math.abs(Number(b) || 0);
    do {
      var t = (a % 10) + (b % 10) + c;
      if (t >= 10) { n++; c = 1; } else c = 0;
      a = Math.floor(a / 10); b = Math.floor(b / 10);
    } while (a > 0 || b > 0 || c);
    return n;
  }
  function countSubBorrows(a, b) {
    var n = 0, borrow = 0;
    a = Math.abs(Number(a) || 0); b = Math.abs(Number(b) || 0);
    do {
      var da = (a % 10) - borrow;
      var db = b % 10;
      if (da < db) { n++; borrow = 1; } else borrow = 0;
      a = Math.floor(a / 10); b = Math.floor(b / 10);
    } while (a > 0 || b > 0);
    return n;
  }
  function countMulCarries(a, d) {
    var n = 0, c = 0;
    a = Math.abs(Number(a) || 0); d = Number(d) || 0;
    while (a > 0) {
      var s = (a % 10) * d + c;
      c = Math.floor(s / 10);
      if (c) n++;
      a = Math.floor(a / 10);
    }
    return n;
  }
  function qWithZero(minLen, maxLen) {
    var len = randInt(minLen, maxLen);
    var s = String(randInt(1, 9));
    for (var i = 1; i < len; i++) s += String(randInt(0, 9));
    var pos = randInt(1, len - 1);
    s = s.slice(0, pos) + '0' + s.slice(pos + 1);
    if (s.charAt(0) === '0') s = String(randInt(1, 9)) + s.slice(1);
    return Number(s);
  }

  function buildMulLong(A, B, ia, ib, places, pretty) {
    var botDigits = String(ib).split('').map(Number);
    var nBot = botDigits.length;
    var partials = [];
    var s, i, k;
    for (s = 0; s < nBot; s++) {
      var d = botDigits[nBot - 1 - s];
      partials.push({ d: d, shift: s, val: ia * d, digits: String(ia * d).split('') });
    }
    var prod = ia * ib;
    var prodDigits = String(prod).split('');
    if (places > 0) {
      while (prodDigits.length < places) prodDigits.unshift('0');
      if (prodDigits.length === places) prodDigits.unshift('0');
    }
    function factorDigits(intVal, pl) {
      var ds = String(intVal).split('');
      if (pl > 0 && ds.length <= pl) {
        while (ds.length < pl) ds.unshift('0');
        ds.unshift('0');
      }
      return ds;
    }
    var intW = Math.max(String(ia).length, String(ib).length, prodDigits.length, factorDigits(ia, A.places).length, factorDigits(ib, B.places).length);
    partials.forEach(function (p) { intW = Math.max(intW, p.digits.length + p.shift); });

    var partInts = partials.map(function (p) {
      var a = p.digits.slice();
      for (i = 0; i < p.shift; i++) a.push('');
      return padLeft(a, intW);
    });
    var prodInt = padLeft(prodDigits, intW);
    var nPart = partials.length;
    var rA = 0, rB = 1, rP0 = 2, rCarry = 2 + nPart, rRes = 3 + nPart;
    var rowsN = rRes + 1;
    var colsN = intW + 1;
    var grid = emptyGrid(rowsN, colsN);

    function placeFactor(r, intVal, pl, isBot) {
      var ds = factorDigits(intVal, pl);
      var start = intW - ds.length;
      if (isBot) place(grid, r, 0, { value: '×', role: 'op', given: true, fill: false, hint: '' });
      ds.forEach(function (ch, idx) {
        var c = start + idx + 1;
        var fromRight = ds.length - idx;
        place(grid, r, c, {
          value: Number(ch),
          role: 'operand',
          given: true,
          fill: false,
          hint: '',
          commaBefore: pl > 0 && fromRight === pl
        });
      });
    }
    placeFactor(rA, ia, A.places, false);
    placeFactor(rB, ib, B.places, true);

    var order = [];
    partials.forEach(function (p, pi) {
      var r = rP0 + pi;
      var arr = partInts[pi];
      var hintBase = ia + ' nhân ' + p.d + ' bằng ' + p.val;
      if (p.shift) hintBase += ', viết lệch sang trái ' + p.shift + ' cột';
      arr.forEach(function (ch, idx) {
        if (ch === '' || ch == null) return;
        place(grid, r, idx + 1, {
          value: Number(ch),
          role: 'partial',
          given: false,
          fill: true,
          hint: hintBase + ', viết ' + ch + '.',
          kind: 'viet'
        });
      });
      for (i = intW - 1; i >= 0; i--) {
        if (arr[i] === '' || arr[i] == null) continue;
        order.push({ r: r, c: i + 1, kind: 'viet' });
      }
    });

    var addSteps = [];
    var carryIn = 0;
    for (i = intW - 1; i >= 0; i--) {
      var sum = carryIn;
      var parts = [];
      partInts.forEach(function (arr) {
        if (arr[i] !== '' && arr[i] != null) { sum += Number(arr[i]); parts.push(String(arr[i])); }
      });
      var write = sum % 10;
      var nho = Math.floor(sum / 10);
      addSteps.push({ i: i, write: write, nho: nho, carryIn: carryIn, parts: parts, sum: sum });
      carryIn = nho;
    }
    var firstFracCol = places > 0 ? (intW - places + 1) : null;
    for (i = 0; i < intW; i++) {
      var ch = prodInt[i];
      if (ch === '' || ch == null) continue;
      var c = i + 1;
      var st = null;
      for (k = 0; k < addSteps.length; k++) if (addSteps[k].i === i) st = addSteps[k];
      var isLeadZero = places > 0 && Number(ch) === 0 && firstFracCol && c < firstFracCol && pretty.indexOf('0,') === 0 && i === (function () {
        for (var t = 0; t < intW; t++) if (prodInt[t] !== '' && prodInt[t] != null) return t;
        return 0;
      })();
      var hint;
      if (isLeadZero) {
        hint = 'Phần nguyên chưa có chữ số nào nên viết 0 trước dấu phẩy.';
      } else if (st) {
        var expr = (st.parts.length ? st.parts.join(' + ') : '0') + (st.carryIn ? ' thêm nhớ ' + st.carryIn : '');
        hint = expr + ' bằng ' + st.sum + ', viết ' + st.write + (st.nho ? ' nhớ ' + st.nho : '') + '.';
      } else {
        hint = 'Viết ' + ch + '.';
      }
      place(grid, rRes, c, {
        value: Number(ch),
        role: 'result',
        given: false,
        fill: true,
        hint: hint,
        kind: 'viet',
        commaBefore: places > 0 && c === firstFracCol
      });
    }
    addSteps.forEach(function (st) {
      if (!st.nho) return;
      var destI = st.i - 1;
      if (destI < 0) return;
      place(grid, rCarry, destI + 1, {
        value: st.nho,
        role: 'carry',
        given: false,
        fill: true,
        small: true,
        hint: 'Nhớ ' + st.nho + ', viết ' + st.nho + '.',
        kind: 'nho'
      });
    });

    var leadZeroOrd = null;
    var digitOrders = [];
    for (i = intW - 1; i >= 0; i--) {
      if (!grid[rRes][i + 1]) continue;
      var cellR = grid[rRes][i + 1];
      var o = { r: rRes, c: i + 1, kind: 'viet' };
      if (cellR.hint && cellR.hint.indexOf('Phần nguyên chưa có') === 0) leadZeroOrd = o;
      else digitOrders.push(o);
    }
    digitOrders.forEach(function (o) {
      order.push(o);
      var L = o.c - 1;
      if (L >= 1 && grid[rCarry][L] && grid[rCarry][L].fill) order.push({ r: rCarry, c: L, kind: 'nho' });
    });
    if (places > 0 && firstFracCol && grid[rRes][firstFracCol]) {
      grid[rRes][firstFracCol].phayHint = ia + ' × ' + ib + ' = ' + prod + '. Đếm tất cả ' + places + ' chữ số ở phần thập phân của hai thừa số; từ phải sang trái, đặt dấu phẩy tách ' + places + ' chữ số.';
      order.push({ r: rRes, c: firstFracCol, kind: 'phay', mark: 'phay' });
    }
    if (leadZeroOrd) order.push(leadZeroOrd);

    // Drop the add-carry row when there is nothing to write there.
    var carryUsed = false;
    for (i = 0; i < colsN; i++) if (grid[rCarry][i]) carryUsed = true;
    if (!carryUsed) {
      grid.splice(rCarry, 1);
      rowsN--;
      order.forEach(function (o) { if (o.r > rCarry) o.r--; });
      rRes--;
    }
    var resultText = prettyNum(A) + ' × ' + prettyNum(B) + ' = ' + pretty;
    var note = ia + ' × ' + ib + ' = ' + prod + '. Đếm tất cả ' + places + ' chữ số ở phần thập phân của hai thừa số; từ phải sang trái, đặt dấu phẩy tách ' + places + ' chữ số' + (pretty.indexOf('0,') === 0 ? '. Phần nguyên chưa có chữ số nên viết 0 trước dấu phẩy' : '') + ': ' + pretty + '.';
    var lastPartial = rP0 + nPart - 1;
    if (!carryUsed && lastPartial >= rCarry) lastPartial--;
    return finishColumn('mul', grid, rowsN, colsN, order, resultText, prettyNum(A) + ' × ' + prettyNum(B), {
      maxInt: 0, maxFrac: places, note: note, places: places,
      lineAfter: rB,
      linesAfter: [rB, lastPartial]
    });
  }


  function finishColumn(kind, grid, rows, cols, order, resultText, prompt, extra) {
    extra = extra || {};
    return {
      layout: 'column',
      kind: kind,
      prompt: prompt,
      resultText: resultText,
      rows: rows,
      cols: cols,
      grid: grid,
      order: order,
      lineAfter: extra.lineAfter != null ? extra.lineAfter : (extra.lineRow != null ? extra.lineRow - 1 : rows - 2),
      linesAfter: extra.linesAfter || null,
      note: extra.note || '',
      marks: extra.marks || [],
      maxFrac: extra.maxFrac || 0,
      rewrite: extra.rewrite || null
    };
  }

  /* ---------- INTEGER DIVISION (Grade 3, same as game-chia) ---------- */
  function buildDivInt(dividend, divisor) {
    dividend = Number(dividend);
    divisor = Number(divisor);
    var divDigits = digitsOf(dividend);
    var n = divDigits.length;
    var qDigits = [], steps = [];
    var pos = 0, current = 0, begun = false;
    while (pos < n) {
      current = current * 10 + divDigits[pos];
      var endIndex = pos;
      pos += 1;
      if (!begun && current < divisor && pos < n) continue;
      begun = true;
      var q = Math.floor(current / divisor);
      var product = q * divisor;
      var remainder = current - product;
      var bringDown = pos < n ? divDigits[pos] : null;
      var width = String(current).length;
      var startIndex = endIndex - (width - 1);
      qDigits.push(q);
      steps.push({ partial: current, startIndex: startIndex, endIndex: endIndex, q: q, product: product, remainder: remainder, bringDown: bringDown });
      current = remainder;
    }
    var quotient = qDigits.reduce(function (a, d) { return a * 10 + d; }, 0);
    var rem = steps.length ? steps[steps.length - 1].remainder : dividend;
    var qLen = qDigits.length;
    var colsLeft = n;
    var colsRight = Math.max(qLen, 1);
    var cols = colsLeft + colsRight;
    var rows = 1 + 2 * steps.length;
    var grid = emptyGrid(rows, cols);
    function placeNum(r, value, endCol, role, stepIndex, hint) {
      var ds = digitsOf(value);
      var startCol = endCol - (ds.length - 1);
      ds.forEach(function (d, i) {
        var c = startCol + i;
        if (c < 0 || c >= colsLeft) return;
        place(grid, r, c, { value: d, role: role, stepIndex: stepIndex, hint: hint, given: false, fill: true, kind: role === 'product' ? 'nhan' : 'tru' });
      });
    }
    divDigits.forEach(function (d, c) {
      place(grid, 0, c, { value: d, role: 'dividend', given: true, fill: false, hint: '' });
    });
    digitsOf(divisor).forEach(function (d, i) {
      place(grid, 0, colsLeft + i, { value: d, role: 'divisor', given: true, fill: false, hint: '' });
    });
    var order = [];
    steps.forEach(function (st, si) {
      var productRow = si === 0 ? 1 : 2 * si + 1;
      var remRow = productRow + 1;
      var chiaHint = st.q === 0
        ? (st.partial + ' chia ' + divisor + ' được 0, viết 0 vào thương. Nhớ viết 0, không được bỏ qua nhé!')
        : (st.partial + ' chia ' + divisor + ' được ' + st.q + ', viết ' + st.q + ' vào thương.');
      var nhanHint = st.q + ' nhân ' + divisor + ' bằng ' + st.product + ', viết ' + st.product + '.';
      var truHint = st.partial + ' trừ ' + st.product + ' bằng ' + st.remainder + ', viết ' + st.remainder + '.';
      var haHint = st.bringDown != null ? ('Hạ ' + st.bringDown + ' xuống, viết ' + st.bringDown + ', được ' + (st.remainder * 10 + st.bringDown) + '.') : '';
      var qCol = colsLeft + si + (colsRight - qLen);
      place(grid, 1, qCol, { value: st.q, role: 'quotient', stepIndex: si, hint: chiaHint, given: false, fill: true, kind: 'chia' });
      order.push({ r: 1, c: qCol, kind: 'chia' });
      placeNum(productRow, st.product, st.endIndex, 'product', si, nhanHint);
      digitsOf(st.product).forEach(function (_, i) {
        var c = st.endIndex - (digitsOf(st.product).length - 1) + i;
        if (grid[productRow][c]) { grid[productRow][c].kind = 'nhan'; order.push({ r: productRow, c: c, kind: 'nhan' }); }
      });
      placeNum(remRow, st.remainder, st.endIndex, 'remainder', si, truHint);
      digitsOf(st.remainder).forEach(function (_, i) {
        var c = st.endIndex - (digitsOf(st.remainder).length - 1) + i;
        if (grid[remRow][c]) { grid[remRow][c].kind = 'tru'; order.push({ r: remRow, c: c, kind: 'tru' }); }
      });
      if (st.bringDown != null) {
        var c = st.endIndex + 1;
        place(grid, remRow, c, { value: st.bringDown, role: 'bringdown', stepIndex: si, hint: haHint, given: false, fill: true, kind: 'ha' });
        order.push({ r: remRow, c: c, kind: 'ha' });
      }
    });
    var resultText = rem === 0
      ? (dividend + ' : ' + divisor + ' = ' + quotient)
      : (dividend + ' : ' + divisor + ' = ' + quotient + ' dư ' + rem);
    return {
      layout: 'div',
      kind: 'div',
      prompt: dividend + ' : ' + divisor,
      resultText: resultText,
      rows: rows,
      cols: cols,
      colsLeft: colsLeft,
      colsRight: colsRight,
      grid: grid,
      order: order,
      dividend: dividend,
      divisor: divisor,
      quotient: quotient,
      remainder: rem,
      qDigits: qDigits,
      steps: steps,
      exact: rem === 0
    };
  }

  /* ---------- DECIMAL DIVISION ---------- */
  function shiftCommaRight(p, k) {
    var s = p.intPart + p.fracPart;
    var zerosToAdd = k - p.fracPart.length;
    if (zerosToAdd > 0) s += '0'.repeat(zerosToAdd);
    var fracLen = Math.max(0, p.fracPart.length - k);
    var intLen = s.length - fracLen;
    if (intLen <= 0) {
      s = s.padStart(fracLen + 1, '0');
      intLen = 1;
    }
    var intPart = String(Number(s.slice(0, intLen))); // strip lead zeros
    var fracPart = s.slice(intLen);
    // If we shifted past all frac digits, frac is empty
    return { intPart: intPart, fracPart: fracPart, places: fracPart.length, value: Number(intPart + (fracPart ? '.' + fracPart : '')), text: fracPart ? intPart + ',' + fracPart : intPart };
  }

  function buildDivDec(dividend, divisor, opts) {
    opts = opts || {};
    var A = typeof dividend === 'object' && dividend.intPart != null ? dividend : parseVN(dividend);
    var B = typeof divisor === 'object' && divisor.intPart != null ? divisor : parseVN(divisor);
    var rewrite = null;
    if (B.places > 0) {
      var k = B.places;
      var factor = Math.pow(10, k);
      var A2 = shiftCommaRight(A, k);
      var B2 = shiftCommaRight(B, k);
      rewrite = {
        note: 'Số chia có ' + k + ' chữ số ở phần thập phân, nên nhân cả số bị chia và số chia với ' + fmtInt(factor) + '. ' + prettyNum(A) + ' : ' + prettyNum(B) + ' = ' + prettyNum(A2) + ' : ' + prettyNum(B2) + '.',
        from: prettyNum(A) + ' : ' + prettyNum(B),
        to: prettyNum(A2) + ' : ' + prettyNum(B2),
        factor: factor
      };
      A = A2;
      B = B2;
    }
    var N = Number(B.intPart); // divisor is now a natural number
    if (B.places !== 0) {
      // shouldn't happen after shift
      N = Number(B.intPart + B.fracPart) / Math.pow(10, B.places);
    }
    N = Number(B.intPart); // natural
    if (!N || N < 1) throw new Error('bad divisor');

    // Digit stream of dividend
    var intDigits = A.intPart.split('').map(Number);
    var fracDigits = A.fracPart.split('').map(Number);
    var dPlacesOrig = fracDigits.length;
    var base = intDigits.concat(fracDigits);
    var originLen = base.length;
    var intLen = intDigits.length;

    // Long division, may append extra zeros (for natural÷natural decimal quotient)
    var maxExtra = opts.maxExtra != null ? opts.maxExtra : 4;
    var steps = [];
    var idx = 0, rem = 0, extraZeros = 0, guard = 0;
    var appended = [];
    while (guard++ < 24) {
      if (idx >= base.length) {
        if (rem === 0) break;
        if (extraZeros >= maxExtra) break;
        extraZeros++;
        base.push(0);
        appended.push(base.length - 1);
      }
      var digit = base[idx];
      var endIndex = idx;
      var broughtNew = idx >= originLen;
      idx++;
      rem = rem * 10 + digit;
      if (steps.length === 0 && rem < N && endIndex < intLen - 1) {
        continue; // absorb more integer digits (no leading zero in integer quotient yet)
      }
      var q = Math.floor(rem / N);
      var product = q * N;
      var left = rem;
      rem = left - product;
      steps.push({
        partial: left,
        endIndex: endIndex,
        q: q,
        product: product,
        remainder: rem,
        brought: digit,
        appended: broughtNew,
        inFrac: endIndex >= intLen
      });
      if (rem === 0 && idx >= base.length) break;
    }
    // Build quotient string with comma after the integer-part steps
    // Integer q digits: steps whose endIndex is still in the integer part (endIndex < intLen)
    // After the last integer step (or if first step already in frac, write 0 then comma)
    var qInt = [];
    var qFrac = [];
    steps.forEach(function (st) {
      if (st.endIndex < intLen) qInt.push(st.q);
      else qFrac.push(st.q);
    });
    if (qInt.length === 0) qInt = [0];
    var qstr = qInt.join('');
    if (qFrac.length) qstr += ',' + qFrac.join('');

    // Glyphs of dividend (may include added comma + zeros)
    var glyphs = intDigits.map(String);
    var commaAt = -1;
    if (dPlacesOrig > 0 || extraZeros > 0 || qFrac.length > 0) {
      commaAt = glyphs.length;
      glyphs.push(',');
      var fracShown = base.slice(intLen).map(String);
      glyphs = glyphs.concat(fracShown);
    }
    function gcol(baseIndex) {
      if (commaAt >= 0 && baseIndex >= intLen) return baseIndex + 1;
      return baseIndex;
    }

    var colsLeft = glyphs.length;
    // quotient glyphs
    var qGlyphs = qstr.split('');
    var colsRight = Math.max(qGlyphs.length, String(N).length);
    var cols = colsLeft + colsRight;
    var rows = 1 + 2 * steps.length;
    var grid = emptyGrid(rows, cols);

    // Row 0 dividend | divisor
    glyphs.forEach(function (ch, c) {
      if (ch === ',') place(grid, 0, c, { value: ',', role: 'comma', given: true, fill: false, hint: '' });
      else place(grid, 0, c, { value: Number(ch), role: 'dividend', given: true, fill: false, hint: '', ghost: c > commaAt && (c - commaAt - 1) >= dPlacesOrig });
    });
    String(N).split('').forEach(function (d, i) {
      place(grid, 0, colsLeft + i, { value: Number(d), role: 'divisor', given: true, fill: false, hint: '' });
    });
    if (commaAt >= 0) {
      for (var rr = 1; rr < rows; rr++) {
        place(grid, rr, commaAt, { value: ',', role: 'comma', given: true, fill: false, hint: '' });
      }
    }

    var order = [];
    var wroteComma = false;
    var firstFracStep = steps.findIndex(function (st) { return st.endIndex >= intLen; });

    function placeNum(r, value, endBaseIndex, role, hint, kind) {
      var ds = String(value).split('');
      var endCol = gcol(endBaseIndex);
      // skip comma when placing digits
      var colsUsed = [];
      var c = endCol;
      for (var t = ds.length - 1; t >= 0; t--) {
        while (c >= 0 && glyphs[c] === ',') c--;
        colsUsed.unshift({ c: c, ch: ds[t] });
        c--;
      }
      colsUsed.forEach(function (u) {
        if (u.c < 0 || u.c >= colsLeft) return;
        place(grid, r, u.c, { value: Number(u.ch), role: role, given: false, fill: true, hint: hint, kind: kind });
      });
      return colsUsed;
    }

    steps.forEach(function (st, si) {
      var productRow = si === 0 ? 1 : 2 * si + 1;
      var remRow = productRow + 1;
      var chiaHint = st.q === 0
        ? (st.partial + ' chia ' + N + ' được 0, viết 0 vào thương.')
        : (st.partial + ' chia ' + N + ' được ' + st.q + ', viết ' + st.q + ' vào thương.');
      var nhanHint = st.q + ' nhân ' + N + ' bằng ' + st.product + ', viết ' + st.product + '.';
      var truHint = st.partial + ' trừ ' + st.product + ' bằng ' + st.remainder + ', viết ' + st.remainder + '.';

      // Quotient digit column: align under the current endCol on the RIGHT side
      // All quotient glyphs sit on row 1, starting at colsLeft, left-aligned
      // We'll place the full qGlyphs on row 1 and make them fillable, in order.
      // Better: place each q digit as we go.
      // Map: integer q digits first, then comma, then frac q digits.

      st._si = si;
    });

    // Place quotient cells on row 1
    var qStart = colsLeft;
    qGlyphs.forEach(function (ch, i) {
      var c = qStart + i;
      if (ch === ',') {
        place(grid, 1, c, {
          value: ',',
          role: 'comma',
          given: false,
          fill: true,
          hint: 'Viết dấu phẩy ở thương trước khi hạ chữ số thập phân đầu tiên.',
          kind: 'phay'
        });
      } else {
        place(grid, 1, c, {
          value: Number(ch),
          role: 'quotient',
          given: false,
          fill: true,
          hint: '',
          kind: 'chia'
        });
      }
    });

    // Now fill hints for quotient digits in step order, and build order
    var qDigitCursor = 0; // index in qGlyphs skipping comma until we need it
    // We need: for integer steps, place next numeric q glyph; BEFORE first frac step, place comma; then frac q digits.

    function nextQCol(wantComma) {
      if (wantComma) {
        for (var i = 0; i < qGlyphs.length; i++) if (qGlyphs[i] === ',') return qStart + i;
        return null;
      }
      while (qDigitCursor < qGlyphs.length && qGlyphs[qDigitCursor] === ',') qDigitCursor++;
      if (qDigitCursor >= qGlyphs.length) return null;
      var c = qStart + qDigitCursor;
      qDigitCursor++;
      return c;
    }

    var commaInserted = false;
    steps.forEach(function (st, si) {
      var productRow = si === 0 ? 1 : 2 * si + 1;
      var remRow = productRow + 1;
      var isFrac = st.endIndex >= intLen;

      if (isFrac && !commaInserted && qGlyphs.indexOf(',') >= 0) {
        var cc = nextQCol(true);
        if (cc != null) {
          if (grid[1][cc]) {
            // already has hint
          }
          order.push({ r: 1, c: cc, kind: 'phay' });
        }
        commaInserted = true;
      }

      var chiaHint = st.q === 0
        ? (st.partial + ' chia ' + N + ' được 0, viết 0 vào thương.')
        : (st.partial + ' chia ' + N + ' được ' + st.q + ', viết ' + st.q + ' vào thương.');
      var qc = nextQCol(false);
      if (qc != null && grid[1][qc]) {
        grid[1][qc].hint = chiaHint;
        grid[1][qc].stepIndex = si;
        order.push({ r: 1, c: qc, kind: 'chia' });
      }

      var nhanHint = st.q + ' nhân ' + N + ' bằng ' + st.product + ', viết ' + st.product + '.';
      var truHint = st.partial + ' trừ ' + st.product + ' bằng ' + st.remainder + ', viết ' + st.remainder + '.';
      var used = placeNum(productRow, st.product, st.endIndex, 'product', nhanHint, 'nhan');
      used.forEach(function (u) { if (u.c >= 0) order.push({ r: productRow, c: u.c, kind: 'nhan' }); });
      var usedR = placeNum(remRow, st.remainder, st.endIndex, 'remainder', truHint, 'tru');
      usedR.forEach(function (u) { if (u.c >= 0) order.push({ r: remRow, c: u.c, kind: 'tru' }); });

      // If the next digit is the first decimal digit, write the comma in
      // the quotient BEFORE bringing that digit down (SGK).
      if (si < steps.length - 1 && steps[si + 1].endIndex >= intLen && !commaInserted && qGlyphs.indexOf(',') >= 0) {
        var ccEarly = nextQCol(true);
        if (ccEarly != null) order.push({ r: 1, c: ccEarly, kind: 'phay' });
        commaInserted = true;
      }

      // bring down next digit
      if (si < steps.length - 1) {
        var nxt = steps[si + 1];
        var bdCol = gcol(nxt.endIndex);
        var bdHint;
        if (nxt.appended) {
          bdHint = 'Viết thêm 0 rồi hạ 0 xuống.';
          if (nxt.endIndex === intLen && dPlacesOrig === 0) {
            bdHint = 'Viết dấu phẩy ở thương, viết thêm 0 ở số bị chia rồi hạ 0 xuống.';
          }
        } else if (nxt.inFrac && !st.inFrac) {
          bdHint = 'Hạ ' + nxt.brought + ' xuống (chữ số thập phân đầu tiên), viết ' + nxt.brought + '.';
        } else {
          bdHint = 'Hạ ' + nxt.brought + ' xuống, viết ' + nxt.brought + '.';
        }
        if (glyphs[bdCol] !== ',') {
          place(grid, remRow, bdCol, { value: nxt.brought, role: 'bringdown', given: false, fill: true, hint: bdHint, kind: 'ha' });
          order.push({ r: remRow, c: bdCol, kind: 'ha' });
        }
      } else if (st.remainder === 0) {
        // final remainder already placed
      }
    });
    // If first step is already in the fractional part (e.g. 0,26), we should have written 0 and comma first
    // Handle qInt = [0] when all steps are in frac: firstQ is 0 under ones, then comma, then frac digits.
    // Our nextQCol order: we insert comma only when isFrac. Before first frac step, we still nextQCol the 0. Good:
    // steps all inFrac: first step isFrac, we insert comma FIRST then 0? WRONG.
    // We need 0 first, then comma, then frac digits? For 2,08:8=0,26:
    // int digits [2], frac [0,8]. First: 2 < 8, absorb? endIndex 0 is last integer (intLen-1=0), so we DON'T continue absorbing. 2/8=0, write 0, then comma, hạ 0, etc.
    // Order should be: write 0 (integer quotient), write comma, hạ 0...
    // My code: first step endIndex 0 < intLen 1, not isFrac, so write q=0 first, comma later. Good.

    // For 5:2=2,5: int [5], no frac originally. First 5/2=2 rem 1, then append 0. Second step endIndex=1 >= intLen=1, isFrac, insert comma then q=5. Good.

    var resultText = prettyNum(parseVN(dividend)) + ' : ' + prettyNum(parseVN(divisor)) + ' = ' + qstr;
    if (rewrite) {
      resultText = rewrite.from + ' = ' + rewrite.to + ' = ' + qstr;
    }
    return {
      layout: 'div',
      kind: 'div',
      prompt: prettyNum(parseVN(dividend)) + ' : ' + prettyNum(parseVN(divisor)),
      resultText: resultText,
      rows: rows,
      cols: cols,
      colsLeft: colsLeft,
      colsRight: colsRight,
      grid: grid,
      order: order,
      qstr: qstr,
      rewrite: rewrite,
      steps: steps
    };
  }

  /* ---------- generators ---------- */
  function uniqueKey(tab) { return tab.prompt; }

  function pick(arr) { return arr[randInt(0, arr.length - 1)]; }

  function genAddG3(level, avoid) {
    var a, b, tries = 0, loose = false;
    while (tries++ < 800) {
      if (tries > 300) loose = true;
      if (level === 1) {
        a = randInt(15, 89); b = randInt(15, 99 - Math.min(10, a));
        if (a + b > 99) continue;
        if (!loose && ((a % 10) + (b % 10) < 10) && Math.random() < 0.7) continue;
      } else if (level === 2) {
        a = randInt(108, 799); b = randInt(16, 999 - a);
        if (a + b > 999) continue;
        if (!loose && ((a % 10) + (b % 10) < 10) && ((Math.floor(a / 10) % 10) + (Math.floor(b / 10) % 10) < 10) && Math.random() < 0.8) continue;
      } else if (level === 3) {
        a = randInt(1020, 7999); b = randInt(108, 10000 - a);
        if (a + b > 10000) continue;
        if (!loose && ((a % 10) + (b % 10) < 10) && Math.random() < 0.7) continue;
      } else if (level === 4) {
        if (Math.random() < 0.55) {
          a = randInt(1024, 9876); b = randInt(1024, 100000 - a);
          if (b < 1000) continue;
        } else {
          a = randInt(10000, 89999); b = randInt(1000, 100000 - a);
        }
        if (a + b > 100000) continue;
        if (!loose && countAddCarries(a, b) < 2) continue;
      } else {
        a = randInt(12000, 89999); b = randInt(10000, 100000 - a);
        if (a + b > 100000) continue;
        if (!loose && countAddCarries(a, b) < 3) continue;
      }
      var tab = buildAdd([a, b]);
      if (avoid && avoid.has(tab.prompt)) continue;
      return tab;
    }
    return buildAdd(level === 1 ? [47, 28] : level === 2 ? [478, 256] : level === 3 ? [4708, 2567] : level === 4 ? [4708, 3567] : [87654, 12348]);
  }

  function hasSubNho(a, b) {
    var s = String(Math.max(a, b)).length;
    var A = String(a).padStart(s, '0');
    var B = String(b).padStart(s, '0');
    for (var i = 0; i < s; i++) if (Number(A[i]) < Number(B[i])) return true;
    return false;
  }

  function genSubG3(level, avoid) {
    var a, b, tries = 0, loose = false;
    while (tries++ < 900) {
      if (tries > 350) loose = true;
      if (level === 1) {
        a = randInt(20, 99); b = randInt(10, a - 1);
        if (!loose && !hasSubNho(a, b) && Math.random() < 0.8) continue;
      } else if (level === 2) {
        a = randInt(130, 999); b = randInt(15, a - 1);
        if (b < 10) continue;
        if (!hasSubNho(a, b)) continue;
      } else if (level === 3) {
        if (Math.random() < 0.35) {
          a = pick([1000, 2000, 3000, 4000, 5000, 2005, 1010, 3004, 10000]);
          b = randInt(108, Math.min(a - 1, 4876));
        } else {
          a = randInt(1100, 9999); b = randInt(108, a - 1);
        }
        if (a > 10000 || a - b < 1) continue;
        if (!hasSubNho(a, b)) continue;
      } else if (level === 4) {
        if (Math.random() < 0.4) {
          a = pick([10000, 20000, 30000, 40000, 50000, 10001, 20005, 10100, 30004, 11000, 10010, 20000]);
          b = randInt(1234, Math.min(a - 1, 8765));
        } else if (Math.random() < 0.5) {
          a = randInt(2048, 9999); b = randInt(1024, a - 1);
        } else {
          a = randInt(10000, 99999); b = randInt(1234, a - 1);
        }
        if (a - b < 1) continue;
        if (!loose && countSubBorrows(a, b) < 2) continue;
      } else {
        if (Math.random() < 0.55) {
          a = pick([10000, 20000, 30000, 40000, 50000, 100000, 20000, 10100, 20005, 30004, 10001, 11000, 10010, 80000, 100000]);
          b = randInt(1234, Math.min(a - 1, 45678));
        } else {
          a = randInt(10000, 99999); b = randInt(1024, a - 1);
        }
        if (a - b < 1) continue;
        if (!loose && countSubBorrows(a, b) < 3) continue;
      }
      var tab = buildSub(a, b);
      if (avoid && avoid.has(tab.prompt)) continue;
      return tab;
    }
    return buildSub(level === 1 ? [52, 18] : level === 2 ? [503, 278] : level === 3 ? [1000, 457] : level === 4 ? [10000, 4567] : [10000, 4567]);
  }

  function genMulG3(level, avoid) {
    var a, b, tries = 0, loose = false;
    while (tries++ < 800) {
      if (tries > 300) loose = true;
      if (level === 1) { a = randInt(12, 49); b = randInt(2, 5); }
      else if (level === 2) { a = randInt(16, 89); b = randInt(6, 9); }
      else if (level === 3) { a = randInt(108, 798); b = randInt(3, 9); }
      else if (level === 4) {
        a = Math.random() < 0.5 ? randInt(1024, 9876) : randInt(10235, 87654);
        b = randInt(3, 9);
        if (!loose && countMulCarries(a, b) < 2) continue;
      } else {
        a = randInt(10235, 98765);
        b = randInt(6, 9);
        if (!loose && countMulCarries(a, b) < 3) continue;
      }
      if (level <= 3 && (a % 10) * b < 10 && Math.random() < 0.6 && !loose) continue;
      var tab = buildMul(a, b);
      if (avoid && avoid.has(tab.prompt)) continue;
      return tab;
    }
    return buildMul(level >= 5 ? [24680, 7] : level === 4 ? [2468, 7] : level === 3 ? [246, 3] : [24, 3]);
  }

  function genDivG3(level, avoid) {
    var tries = 0, loose = false;
    while (tries++ < 900) {
      if (tries > 350) loose = true;
      var divisor, dividend, q, rem, takeTwo;
      divisor = randInt(2, 9);
      takeTwo = Math.random() < 0.4;
      if (level === 1) {
        rem = 0;
        if (takeTwo) {
          q = randInt(4, 9);
          dividend = q * divisor;
          if (dividend < 10 || dividend > 99) continue;
          if (Math.floor(dividend / 10) >= divisor) continue;
        } else {
          q = randInt(11, 49);
          if (String(q).indexOf('0') !== -1) continue;
          dividend = q * divisor;
          if (dividend < 10 || dividend > 99) continue;
          if (Math.floor(dividend / 10) < divisor) continue;
        }
      } else if (level === 2) {
        if (takeTwo) {
          q = randInt(2, 9);
          rem = randInt(1, divisor - 1);
          dividend = q * divisor + rem;
          if (dividend < 10 || dividend > 99) continue;
          if (Math.floor(dividend / 10) >= divisor) continue;
        } else {
          q = randInt(10, 49);
          rem = randInt(1, divisor - 1);
          dividend = q * divisor + rem;
          if (dividend < 10 || dividend > 99) continue;
          if (Math.floor(dividend / 10) < divisor) continue;
        }
      } else if (level === 3) {
        rem = Math.random() < 0.5 ? 0 : randInt(1, divisor - 1);
        if (takeTwo) {
          q = randInt(12, 99);
          dividend = q * divisor + rem;
          if (dividend < 100 || dividend > 999) continue;
          if (Number(String(dividend)[0]) >= divisor) continue;
        } else {
          q = randInt(101, Math.floor(999 / divisor));
          if (q < 100) continue;
          dividend = q * divisor + rem;
          if (dividend < 100 || dividend > 999) continue;
          if (Number(String(dividend)[0]) < divisor) continue;
          if (Math.random() < 0.5 && String(q).indexOf('0') === -1) continue;
        }
      } else if (level === 4) {
        rem = Math.random() < 0.5 ? 0 : randInt(1, divisor - 1);
        if (takeTwo) {
          q = randInt(100, 999);
          dividend = q * divisor + rem;
          if (dividend < 1000 || dividend > 9999) continue;
          if (Number(String(dividend)[0]) >= divisor) continue;
        } else {
          q = randInt(1000, Math.floor(9999 / divisor));
          dividend = q * divisor + rem;
          if (dividend < 1000 || dividend > 9999) continue;
        }
      } else {
        rem = Math.random() < 0.45 ? 0 : randInt(1, divisor - 1);
        q = qWithZero(Math.random() < 0.45 ? 3 : 4, Math.random() < 0.5 ? 4 : 5);
        if (String(q).indexOf('0') < 0) continue;
        dividend = q * divisor + rem;
        if (dividend < 1000 || dividend > 99999) continue;
      }
      var tab = buildDivInt(dividend, divisor);
      if (avoid && avoid.has(tab.prompt)) continue;
      return tab;
    }
    return buildDivInt(level >= 5 ? 4104 : level === 4 ? 2016 : level === 3 ? 416 : level === 2 ? 45 : 84, level >= 5 ? 4 : level === 4 ? 8 : level === 3 ? 4 : level === 2 ? 2 : 4);
  }

  function dec(intPart, frac) { return parseVN(String(intPart) + ',' + frac); }

  function fracStr(n, p) {
    return String(n).padStart(p, '0');
  }

  function genAddG5(level, avoid) {
    var tries = 0, A, B, loose = false;
    while (tries++ < 900) {
      if (tries > 350) loose = true;
      if (level === 1) {
        A = parseVN(randInt(1, 8) + ',' + randInt(1, 9));
        B = parseVN(randInt(1, 8) + ',' + randInt(1, 9));
        if (A.value + B.value >= 20) continue;
        if (!loose && (Number(A.fracPart) + Number(B.fracPart) < 10) && Math.random() < 0.7) continue;
      } else if (level === 2) {
        A = parseVN(randInt(2, 15) + ',' + randInt(1, 9));
        B = parseVN(randInt(1, 9) + ',' + randInt(10, 99));
        if (A.value + B.value >= 30) continue;
      } else if (level === 3) {
        if (Math.random() < 0.4) {
          A = parseVN(String(randInt(8, 25)));
          B = parseVN(randInt(1, 8) + ',' + randInt(10, 99));
        } else {
          A = parseVN(randInt(1, 12) + ',' + randInt(10, 99));
          B = parseVN(randInt(1, 9) + ',' + randInt(10, 99));
        }
        if (A.value + B.value >= 40) continue;
      } else if (level === 4) {
        var v = randInt(0, 3);
        if (v === 0) {
          A = parseVN(randInt(1, 20) + ',' + randInt(100, 999));
          B = parseVN(randInt(1, 15) + ',' + randInt(1, 9));
        } else if (v === 1) {
          A = parseVN(randInt(2, 25) + ',' + randInt(1, 9) + '0');
          B = parseVN(randInt(1, 12) + ',' + randInt(10, 99));
        } else if (v === 2) {
          A = parseVN(randInt(10, 40) + ',' + randInt(10, 99));
          B = parseVN(randInt(1, 9) + ',' + randInt(100, 999));
        } else {
          A = parseVN(String(randInt(8, 30)));
          B = parseVN(randInt(1, 9) + ',' + randInt(100, 999));
        }
        if (A.value + B.value >= 80) continue;
      } else {
        if (Math.random() < 0.5) {
          A = parseVN(randInt(5, 40) + ',' + randInt(100, 9999));
          B = parseVN(randInt(1, 20) + ',' + randInt(10, 99));
        } else {
          A = parseVN(randInt(10, 50) + ',' + randInt(100, 999));
          B = parseVN(String(randInt(4, 25)));
        }
        if (A.value + B.value >= 120) continue;
      }
      var tab = buildAdd([A, B]);
      if (avoid && avoid.has(tab.prompt)) continue;
      return tab;
    }
    return buildAdd(level === 1 ? ['2,7', '1,5'] : level === 2 ? ['5,8', '2,35'] : level === 3 ? ['2,75', '1,48'] : level === 4 ? ['12,8', '3,475'] : ['15,075', '8,6']);
  }

  function genSubG5(level, avoid) {
    var tries = 0, A, B, loose = false;
    while (tries++ < 900) {
      if (tries > 350) loose = true;
      if (level === 1) {
        A = parseVN(randInt(3, 9) + ',' + randInt(2, 9));
        B = parseVN(randInt(1, 5) + ',' + randInt(1, 9));
        if (A.value <= B.value) continue;
      } else if (level === 2) {
        A = parseVN(randInt(4, 15) + ',' + randInt(1, 9));
        B = parseVN(randInt(1, 8) + ',' + randInt(10, 99));
        if (A.value <= B.value) continue;
      } else if (level === 3) {
        if (Math.random() < 0.4) {
          A = parseVN(String(randInt(8, 25)));
          B = parseVN(randInt(1, 7) + ',' + randInt(10, 99));
        } else {
          A = parseVN(randInt(5, 18) + ',' + randInt(10, 99));
          B = parseVN(randInt(1, 9) + ',' + randInt(10, 99));
        }
        if (A.value <= B.value) continue;
      } else if (level === 4) {
        var v = randInt(0, 3);
        if (v === 0) {
          A = parseVN(randInt(8, 30) + ',' + randInt(1, 9));
          B = parseVN(randInt(1, 7) + ',' + randInt(100, 999));
        } else if (v === 1) {
          A = parseVN(String(randInt(10, 40)));
          B = parseVN(randInt(1, 9) + ',' + randInt(100, 999));
        } else if (v === 2) {
          A = parseVN(randInt(8, 25) + ',' + randInt(1, 9) + '0');
          B = parseVN(randInt(1, 7) + ',' + randInt(10, 99));
        } else {
          A = parseVN(randInt(10, 35) + ',' + randInt(100, 999));
          B = parseVN(randInt(1, 9) + ',' + randInt(10, 99));
        }
        if (A.value <= B.value) continue;
      } else {
        if (Math.random() < 0.45) {
          A = parseVN(pick(['10', '20', '30', '15', '25', '12', '18', '40']));
          B = parseVN(randInt(1, 9) + ',' + randInt(100, 9999));
        } else {
          A = parseVN(randInt(10, 40) + ',' + fracStr(randInt(0, 99), 2) + '0');
          B = parseVN(randInt(1, 9) + ',' + randInt(100, 999));
        }
        if (A.value <= B.value) continue;
      }
      var tab = buildSub(A, B);
      if (avoid && avoid.has(tab.prompt)) continue;
      return tab;
    }
    return buildSub(level === 1 ? ['5,3', '2,8'] : level === 2 ? ['5,8', '2,35'] : level === 3 ? ['15', '4,72'] : level === 4 ? ['20', '6,375'] : ['10', '3,456']);
  }

  function genMulG5(level, avoid) {
    var tries = 0, A, B, loose = false;
    while (tries++ < 900) {
      if (tries > 350) loose = true;
      if (level === 1) {
        A = parseVN(randInt(1, 9) + ',' + randInt(1, 9));
        B = parseVN(String(randInt(2, 9)));
      } else if (level === 2) {
        A = parseVN(randInt(1, 8) + ',' + randInt(1, 9));
        B = parseVN('0,' + randInt(2, 9));
      } else if (level === 3) {
        if (Math.random() < 0.5) {
          A = parseVN(randInt(1, 9) + ',' + randInt(10, 99));
          B = parseVN(String(randInt(2, 8)));
        } else {
          A = parseVN(randInt(1, 8) + ',' + randInt(10, 99));
          B = parseVN('0,' + randInt(2, 8));
        }
      } else if (level === 4) {
        if (Math.random() < 0.5) {
          A = parseVN(randInt(1, 20) + ',' + randInt(100, 999));
          B = parseVN(String(randInt(2, 9)));
        } else {
          A = parseVN(randInt(2, 15) + ',' + randInt(100, 999));
          B = parseVN('0,' + randInt(2, 9));
        }
      } else {
        // Two decimals, second factor has 2+ significant digits after stripping the comma
        if (Math.random() < 0.5) {
          A = parseVN(randInt(1, 9) + ',' + randInt(10, 99));
          B = parseVN(randInt(1, 9) + ',' + randInt(1, 9));
        } else {
          A = parseVN(randInt(1, 9) + ',' + randInt(10, 99));
          B = parseVN('0,' + randInt(12, 98));
        }
        var ib = Number(String(B.intPart) + B.fracPart);
        if (ib < 10 || ib > 99) continue;
      }
      var tab = buildMul(A, B);
      if (avoid && avoid.has(tab.prompt)) continue;
      return tab;
    }
    return buildMul(level === 1 ? '1,2' : level === 2 ? '1,2' : level === 3 ? '1,25' : level === 4 ? '3,125' : '3,25', level === 1 ? 4 : level === 5 ? '0,48' : '0,4');
  }

  function exactDivDec(qText, dText) {
    var Q = parseVN(qText);
    var D = parseVN(dText);
    var qu = Number(Q.intPart + Q.fracPart);
    var du = Number(D.intPart + D.fracPart);
    var dendU = qu * du;
    var pl = (Q.places || 0) + (D.places || 0);
    var dend = fromValue(dendU / Math.pow(10, pl), pl);
    return buildDivDec(dend, D);
  }

  function genDivG5(level, avoid) {
    var tries = 0;
    while (tries++ < 900) {
      var tab;
      if (level === 1) {
        var N = pick([2, 3, 4, 5, 6, 8]);
        var places = pick([1, 2]);
        var qInt = randInt(1, 8);
        var qFrac = places === 1 ? randInt(1, 9) : randInt(10, 99);
        if (places === 2 && qFrac % 10 === 0) continue;
        var qUnits = qInt * Math.pow(10, places) + qFrac;
        var dendUnits = qUnits * N;
        var pow = Math.pow(10, places);
        var dend = fromValue(dendUnits / pow, places);
        if (String(dend.intPart) === 'NaN' || dend.places !== places) continue;
        tab = buildDivDec(dend, parseVN(String(N)));
      } else if (level === 2) {
        var N2 = pick([2, 4, 5, 6, 8]);
        var q2 = pick(['0,5', '0,25', '0,2', '1,5', '2,5', '1,25', '0,4', '2,25', '3,5', '0,8', '1,2', '0,75', '1,75', '3,25', '4,5', '0,125', '2,4', '1,8', '0,6', '5,5', '6,25', '7,5']);
        var Q = parseVN(q2);
        var dend2 = Math.round(Q.value * N2 * 1000) / 1000;
        if (Math.abs(dend2 - Math.round(dend2)) > 1e-9 && String(dend2).length > 6) continue;
        if (dend2 < 1 || dend2 > 80) continue;
        if (Math.abs(dend2 / N2 - Q.value) > 1e-9) continue;
        // keep dividend looking like a natural when it's an integer
        var dendObj = Math.abs(dend2 - Math.round(dend2)) < 1e-9 ? parseVN(String(Math.round(dend2))) : fromValue(dend2, 3);
        tab = buildDivDec(dendObj, parseVN(String(N2)));
      } else if (level === 3) {
        var d3 = pick(['0,2', '0,4', '0,5', '0,8', '0,6', '1,5', '1,2', '0,3', '2,5', '1,6', '0,25', '0,15']);
        var q3 = pick(['2', '3', '4', '5', '6', '8', '9', '10', '12', '15', '16', '18', '20', '24', '25', '1', '7', '1,5', '2,5', '1,2', '0,8']);
        tab = exactDivDec(q3, d3);
      } else if (level === 4) {
        if (Math.random() < 0.55) {
          var N4 = pick([2, 3, 4, 5, 6, 8]);
          var pl4 = pick([2, 3]);
          var qI = randInt(1, 12);
          var qF = pl4 === 2 ? randInt(10, 99) : randInt(100, 999);
          if (qF % 10 === 0) continue;
          var qU = qI * Math.pow(10, pl4) + qF;
          var dU = qU * N4;
          var dend4 = fromValue(dU / Math.pow(10, pl4), pl4);
          tab = buildDivDec(dend4, parseVN(String(N4)));
        } else {
          var d4 = pick(['0,4', '0,5', '0,8', '0,25', '1,5', '0,6', '1,25']);
          var q4 = pick(['3', '4', '5', '6', '8', '12', '1,5', '2,4', '3,2', '1,25', '6,4', '2,5']);
          tab = exactDivDec(q4, d4);
        }
      } else {
        // Thử thách: extra 0s in the quotient, or divide by a 2-decimal-place number
        if (Math.random() < 0.5) {
          var extra = pick([
            ['5', '8'], ['1', '8'], ['7', '8'], ['3', '8'], ['9', '8'],
            ['13', '8'], ['11', '8'], ['15', '8'], ['21', '8'], ['23', '8'],
            ['1', '4'], ['3', '4'], ['5', '4'], ['7', '4'], ['9', '4'],
            ['1', '16'], ['3', '16'], ['5', '16'], ['7', '16'], ['9', '16'],
            ['11', '16'], ['13', '16'], ['15', '16'],
            ['1', '5'], ['2', '5'], ['3', '5'], ['7', '5'], ['9', '5'],
            ['1', '25'], ['3', '25'], ['7', '25'], ['9', '25'],
            ['7', '20'], ['9', '20'], ['11', '20'], ['13', '20'], ['17', '20'], ['19', '20'],
            ['1', '40'], ['3', '40'], ['7', '40'],
            ['3', '2'], ['5', '2'], ['7', '2'], ['9', '2'], ['11', '2'],
            ['5', '16'], ['19', '8'], ['27', '8'], ['29', '8'], ['31', '8']
          ]);
          tab = buildDivDec(extra[0], extra[1]);
        } else {
          var d5 = pick(['0,35', '0,25', '0,15', '0,12', '0,16', '0,24', '0,45', '0,75', '1,25', '0,05', '0,08', '0,32']);
          var q5 = pick(['2', '3', '4', '5', '6', '7', '8', '9', '10', '12', '14', '15', '16', '18', '20', '21', '24', '25', '1,5', '2,5']);
          tab = exactDivDec(q5, d5);
        }
      }
      if (!tab || (avoid && avoid.has(tab.prompt))) continue;
      return tab;
    }
    if (level === 1) return buildDivDec('14,4', '6');
    if (level === 2) return buildDivDec('5', '2');
    if (level === 3) return buildDivDec('18', '0,6');
    if (level === 4) return buildDivDec('12,375', '5');
    return buildDivDec('7,35', '0,35');
  }

  var CLASSICS = {
    '3-add-1': [[47, 28], [36, 18], [59, 27], [48, 35], [67, 28], [19, 47]],
    '3-add-2': [[478, 256], [509, 187], [367, 245], [628, 197], [456, 389]],
    '3-add-3': [[4708, 2567], [5809, 1728], [3064, 2598], [1678, 2459], [4097, 2506]],
    '3-add-4': [[4708, 3567], [8907, 1568], [12345, 6789], [25008, 1796], [45678, 3219]],
    '3-add-5': [[87654, 12348], [56789, 43210], [90807, 916], [65432, 17890], [34567, 65432]],
    '3-sub-1': [[52, 18], [70, 34], [63, 27], [81, 46], [90, 27]],
    '3-sub-2': [[503, 278], [640, 275], [812, 456], [701, 328], [930, 475]],
    '3-sub-3': [[1000, 457], [2005, 378], [5010, 2638], [3004, 1578], [1010, 246]],
    '3-sub-4': [[10000, 4567], [20000, 3456], [10001, 2345], [40500, 1786], [8765, 4098]],
    '3-sub-5': [[10000, 4567], [100000, 2468], [20005, 3789], [10100, 2567], [80000, 45678]],
    '3-mul-1': [[24, 3], [16, 4], [35, 2], [28, 3], [47, 2]],
    '3-mul-2': [[28, 6], [47, 8], [36, 7], [54, 9], [69, 6]],
    '3-mul-3': [[246, 3], [158, 6], [407, 5], [329, 7], [518, 4]],
    '3-mul-4': [[2468, 7], [1357, 6], [4096, 8], [25789, 4], [3084, 9]],
    '3-mul-5': [[24680, 7], [13579, 8], [40816, 9], [35791, 6], [52047, 8]],
    '3-div-1': [[84, 4], [22, 2], [96, 3], [16, 2], [24, 3], [28, 4], [36, 3], [48, 4]],
    '3-div-2': [[45, 2], [41, 4], [33, 2], [13, 2], [17, 3], [19, 4], [29, 3], [37, 5]],
    '3-div-3': [[416, 4], [515, 5], [156, 3], [128, 4], [208, 2], [217, 5], [309, 3], [248, 4]],
    '3-div-4': [[2016, 8], [4104, 4], [1232, 4], [3072, 6], [2505, 5], [1836, 6], [1408, 4], [2916, 9]],
    '3-div-5': [[4104, 4], [8016, 8], [5005, 5], [1205, 5], [2004, 4], [3006, 3], [1015, 5], [1608, 4], [7209, 9], [4056, 8]],
    '5-add-1': [['2,7', '1,5'], ['3,6', '2,8'], ['4,5', '3,7'], ['6,4', '1,8'], ['5,9', '2,3']],
    '5-add-2': [['5,8', '2,35'], ['4,6', '1,25'], ['7,4', '3,18'], ['9,2', '0,75'], ['3,5', '2,08']],
    '5-add-3': [['2,75', '1,48'], ['15', '4,72'], ['8,6', '3,75'], ['12', '5,38'], ['6,09', '2,47']],
    '5-add-4': [['12,8', '3,475'], ['5,80', '2,35'], ['20', '6,375'], ['7,4', '3,185'], ['15,6', '0,075']],
    '5-add-5': [['15,075', '8,6'], ['20,05', '8,367'], ['9,008', '3,75'], ['30', '12,456'], ['18,7', '5,089']],
    '5-sub-1': [['5,3', '2,8'], ['6,2', '3,7'], ['8,1', '4,5'], ['9,4', '2,8'], ['7,1', '3,6']],
    '5-sub-2': [['5,8', '2,35'], ['7,4', '3,16'], ['9,2', '4,58'], ['8,5', '2,07'], ['6,3', '1,48']],
    '5-sub-3': [['15', '4,72'], ['20', '6,38'], ['8,05', '3,67'], ['12', '5,29'], ['18', '7,45']],
    '5-sub-4': [['20', '6,375'], ['8,5', '3,275'], ['15,80', '4,67'], ['12', '3,085'], ['9,4', '2,175']],
    '5-sub-5': [['10', '3,456'], ['20,05', '8,367'], ['15', '7,089'], ['30', '12,456'], ['18,7', '9,082']],
    '5-mul-1': [['1,2', '4'], ['2,5', '3'], ['3,6', '2'], ['4,8', '5'], ['1,7', '6']],
    '5-mul-2': [['1,2', '0,4'], ['2,5', '0,3'], ['1,6', '0,5'], ['3,2', '0,6'], ['2,4', '0,8']],
    '5-mul-3': [['1,25', '0,4'], ['2,15', '6'], ['3,25', '0,8'], ['1,75', '4'], ['4,08', '5']],
    '5-mul-4': [['3,125', '0,4'], ['12,375', '8'], ['2,456', '7'], ['5,075', '0,6'], ['1,208', '9']],
    '5-mul-5': [['3,25', '0,48'], ['2,15', '1,4'], ['1,25', '0,16'], ['7,5', '1,2'], ['4,25', '0,36']],
    '5-div-1': [['14,4', '6'], ['2,08', '8'], ['4,04', '4'], ['12,6', '6'], ['3,15', '5'], ['9,6', '3']],
    '5-div-2': [['5', '2'], ['1', '4'], ['9', '6'], ['3', '4'], ['15', '4'], ['7', '2'], ['11', '4'], ['1', '8']],
    '5-div-3': [['18', '0,6'], ['7,5', '0,25'], ['15', '0,5'], ['2,4', '0,6'], ['12', '0,4'], ['9', '0,3'], ['3,6', '0,4']],
    '5-div-4': [['12,375', '5'], ['4,056', '8'], ['18,75', '5'], ['2,4', '0,16'], ['6,25', '0,5'], ['9,375', '3']],
    '5-div-5': [['7,35', '0,35'], ['5', '8'], ['1', '8'], ['7,5', '0,25'], ['8,4', '0,12'], ['2,25', '0,15'], ['6,25', '0,25'], ['1', '16']]
  };

  var BUILDERS = {
    '3': { add: function (p) { return buildAdd(p); }, sub: function (p) { return buildSub(p[0], p[1]); }, mul: function (p) { return buildMul(p[0], p[1]); }, div: function (p) { return buildDivInt(p[0], p[1]); } },
    '5': { add: function (p) { return buildAdd(p); }, sub: function (p) { return buildSub(p[0], p[1]); }, mul: function (p) { return buildMul(p[0], p[1]); }, div: function (p) { return buildDivDec(p[0], p[1]); } }
  };
  var GENS = {
    '3': { add: genAddG3, sub: genSubG3, mul: genMulG3, div: genDivG3 },
    '5': { add: genAddG5, sub: genSubG5, mul: genMulG5, div: genDivG5 }
  };

  function generateLevel(grade, op, level, count) {
    count = count || 35;
    grade = String(grade);
    var avoid = new Set();
    var out = [];
    var key = grade + '-' + op + '-' + level;
    var classics = (CLASSICS[key] || []).slice();
    for (var i = classics.length - 1; i > 0; i--) {
      var j = randInt(0, i);
      var tmp = classics[i]; classics[i] = classics[j]; classics[j] = tmp;
    }
    var builder = BUILDERS[grade][op];
    for (var c = 0; c < classics.length && out.length < count; c++) {
      try {
        var tab = builder(classics[c]);
        if (avoid.has(tab.prompt)) continue;
        avoid.add(tab.prompt);
        out.push(tab);
      } catch (e) { /* skip bad classic */ }
    }
    var gen = GENS[grade][op];
    var guard = 0;
    while (out.length < count && guard++ < 4000) {
      var t = gen(level, avoid);
      if (!t || avoid.has(t.prompt)) continue;
      avoid.add(t.prompt);
      out.push(t);
    }
    for (i = out.length - 1; i > 0; i--) {
      j = randInt(0, i); tmp = out[i]; out[i] = out[j]; out[j] = tmp;
    }
    return out;
  }

  function ascii(tab) {
    if (tab.layout === 'div') {
      var lines = [];
      for (var r = 0; r < tab.rows; r++) {
        var left = '', right = '';
        for (var c = 0; c < tab.colsLeft; c++) left += tab.grid[r][c] == null ? ' ' : String(tab.grid[r][c].value);
        for (c = tab.colsLeft; c < tab.cols; c++) right += tab.grid[r][c] == null ? ' ' : String(tab.grid[r][c].value);
        lines.push(left + '|' + right);
      }
      if (tab.rewrite) lines.unshift('[' + tab.rewrite.note + ']');
      return lines.join('\n');
    }
    var out = [];
    for (var r = 0; r < tab.rows; r++) {
      var row = '';
      for (var c = 0; c < tab.cols; c++) {
        var cell = tab.grid[r][c];
        if (!cell) row += ' ';
        else row += String(cell.value);
        if (cell && cell.nho) row += '¹';
      }
      out.push(row);
    }
    return out.join('\n');
  }


  function enrichHints(tab) {
    function setHints(cell) {
      if (!cell || !cell.fill) return;
      var h = cell.hint || '';
      var k = cell.kind;
      if (k === 'chia') {
        var m = h.match(/(\d+) chia (\d+) được (\d+)/);
        if (m) {
          var takeTwo = m[1].length > 1 && Number(m[1][0]) < Number(m[2]);
          cell.hints = [
            takeTwo
              ? (m[1][0] + ' nhỏ hơn ' + m[2] + ', nên lấy ' + m[1] + ' chia ' + m[2] + '. Được mấy?')
              : (m[1] + ' chia ' + m[2] + ' được mấy? Em nhìn bảng nhân ' + m[2] + '.'),
            m[2] + ' nhân mấy gần ' + m[1] + ' nhất mà không vượt quá ' + m[1] + '?',
            h
          ];
        }
      } else if (k === 'nhan') {
        var m = h.match(/(\d+) nhân (\d+)(?: thêm nhớ (\d+))? bằng (\d+)/);
        if (m) {
          cell.hints = [
            m[1] + ' nhân ' + m[2] + (m[3] ? ' thêm nhớ ' + m[3] : '') + ' bằng mấy?',
            m[1] + ' nhân ' + m[2] + (m[3] ? ' thêm nhớ ' + m[3] : '') + ' bằng ' + m[4] + '.',
            h
          ];
        }
      } else if (k === 'tru') {
        var m = h.match(/(\d+) trừ (\d+) bằng (\d+)/);
        if (m) {
          cell.hints = [
            m[1] + ' trừ ' + m[2] + ' bằng mấy? Nhớ: số dư phải bé hơn số chia.',
            m[1] + ' trừ ' + m[2] + ' bằng ' + m[3] + '.',
            h + (tab.divisor != null && Number(m[3]) < Number(tab.divisor) ? ' Số dư ' + m[3] + ' đã bé hơn số chia ' + tab.divisor + '.' : '')
          ];
        }
      } else if (k === 'ha') {
        var m = h.match(/Hạ (\d+)/);
        var got = h.match(/được (\d+)/);
        if (m) {
          var g = got ? got[1] : m[1];
          cell.hints = [
            'Em hạ chữ số tiếp theo xuống, được số mới nào?',
            'Hạ ' + m[1] + ' xuống, được ' + g + '.',
            h.indexOf('được') >= 0 ? h : ('Hạ ' + m[1] + ' xuống, viết ' + m[1] + (got ? ', được ' + g : '') + '.')
          ];
        }
      } else if (k === 'nho') {
        cell.hints = [
          'Có nhớ sang hàng bên trái không? Nhớ bao nhiêu?',
          h.replace(/, viết.*$/, '.'),
          h
        ];
      } else if (k === 'phay') {
        if (tab.kind === 'mul') {
          cell.hints = [
            'Đếm tất cả các chữ số ở phần thập phân của hai thừa số. Đặt dấu phẩy tách bao nhiêu chữ số, từ phải sang trái?',
            h || 'Từ phải sang trái, đặt dấu phẩy theo tổng số chữ số thập phân.',
            h
          ];
        } else {
          cell.hints = [
            'Đến lúc viết dấu phẩy ở đâu?',
            'Viết dấu phẩy ở thương trước khi hạ chữ số thập phân đầu tiên.',
            h || 'Viết dấu phẩy ở thương trước khi hạ chữ số thập phân đầu tiên.'
          ];
        }
      } else if (k === 'viet') {
        // cộng / trừ / nhân result digit
        var m1 = h.match(/^(.*?) bằng (\d+), viết (\d+)(?: nhớ (\d+))?/);
        if (m1) {
          cell.hints = [
            m1[1] + ' bằng mấy?',
            m1[1] + ' bằng ' + m1[2] + '.' + (m1[4] ? ' Viết ' + m1[3] + ' nhớ ' + m1[4] + '.' : ''),
            h
          ];
        }
      }
      if (!cell.hints || !cell.hints.length) cell.hints = [h || 'Em xem lại bước này nhé.', h || '', h || 'Viết ' + cell.value + '.'];
      if (!cell.hint) cell.hint = cell.hints[2] || h;
    }
    if (tab.grid) {
      for (var r = 0; r < tab.rows; r++) {
        for (var c = 0; c < tab.cols; c++) {
          setHints(tab.grid[r][c]);
          var cellP = tab.grid[r][c];
          if (cellP && cellP.phayHint) {
            cellP.phayHints = [
              'Đếm tất cả các chữ số ở phần thập phân của hai thừa số. Đặt dấu phẩy tách bao nhiêu chữ số, từ phải sang trái?',
              cellP.phayHint,
              cellP.phayHint
            ];
          }
        }
      }
    }
    if (tab.kind === 'div') {
      if (tab.remainder) {
        tab.checkLine = 'Thử lại: ' + tab.quotient + ' × ' + tab.divisor + ' + ' + tab.remainder + ' = ' + tab.dividend + '.';
      } else if (tab.dividend != null) {
        tab.checkLine = 'Thử lại: ' + tab.quotient + ' × ' + tab.divisor + ' = ' + tab.dividend + '.';
      } else if (tab.qstr) {
        tab.checkLine = 'Thử lại: ' + tab.prompt + ' = ' + tab.qstr + '.';
      }
    } else {
      tab.checkLine = tab.resultText + '.';
    }
    return tab;
  }

  function explainWrong(tab, cell, typed) {
    if (!cell) return 'Em thử lại nhé.';
    var exp = cell.value;
    var k = cell.kind;
    if (k === 'chia') {
      return 'Em dò lại bảng nhân, chọn thương nhỏ hơn nếu tích đang lớn hơn số bị chia.';
    }
    if (k === 'nhan') {
      if (Number(typed) > Number(exp)) return 'Tích lớn hơn rồi, em tính lại phép nhân nhé!';
      return 'Em tính lại phép nhân (nhớ cộng số nhớ nếu có).';
    }
    if (k === 'tru') {
      if (tab.divisor != null && Number(typed) >= Number(tab.divisor)) {
        return 'Số dư chưa bé hơn số chia, em chia thêm được nữa.';
      }
      return 'Em tính lại phép trừ nhé.';
    }
    if (k === 'ha') return 'Hạ đúng chữ số thẳng cột với chữ số của số bị chia.';
    if (k === 'nho') return 'Khi tổng từ 10 trở lên (hoặc không trừ được), ta nhớ 1 sang hàng bên trái.';
    if (k === 'phay') {
      if (tab.kind === 'mul') return 'Đếm tổng số chữ số ở phần thập phân của hai thừa số, rồi đặt dấu phẩy từ phải sang trái.';
      return 'Hãy đặt dấu phẩy đúng chỗ — với phép chia, viết dấu phẩy ở thương trước khi hạ chữ số thập phân đầu tiên.';
    }
    if (k === 'viet') return 'Em tính lại cột này từ phải sang trái nhé.';
    return 'Em thử lại nhé.';
  }

  root.DatTinh = {
    parseVN: parseVN,
    fromValue: fromValue,
    buildAdd: function (a, b) { return enrichHints(buildAdd(a, b)); },
    buildSub: function (a, b, c) { return enrichHints(buildSub(a, b, c)); },
    buildMul: function (a, b, c) { return enrichHints(buildMul(a, b, c)); },
    buildDivInt: function (a, b) { return enrichHints(buildDivInt(a, b)); },
    buildDivDec: function (a, b, c) { return enrichHints(buildDivDec(a, b, c)); },
    generateLevel: function (g, o, l, n) {
      var set = generateLevel(g, o, l, n);
      set.forEach(enrichHints);
      return set;
    },
    enrichHints: enrichHints,
    explainWrong: explainWrong,
    ascii: ascii,
    fmtInt: fmtInt,
    prettyNum: prettyNum,
    PROBLEMS_PER_LEVEL: 35
  };
  if (typeof module !== 'undefined') module.exports = root.DatTinh;
})(typeof window !== 'undefined' ? window : global);
