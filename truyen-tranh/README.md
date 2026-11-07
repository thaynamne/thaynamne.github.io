# Comic readers

- `tap1.html`, `tap2.html`, `tap3.html`, `stem.html` share `reader.js`, `reader.css`, and `games.js`.
- `p00.jpg` is the cover; `p01.jpg` is printed page 1. Use only the existing optimized JPEGs.
- Page turns use a two-faced sheet with CSS perspective and Web Animations `rotateY`, not an image-swap transition. Edges, horizontal swipes, buttons and keyboard arrows all call the same guarded animation. One portrait page is visible at a time. Reduced-motion readers get an immediate turn.
- `COMIC_GAMES` maps printed page numbers to multiple-choice quizzes, checklists and revealable tips. Quiz answers are rotated deterministically. Correct answers and checklists persist in localStorage on this browser only; resetting affects only the current page. No login, uploads, tracking or scoring server.
- Craft instructions retain adult-help / scissors / hot-glue safety notices. All readers are free; cover art is unchanged.

## Regression checks

On mobile (390 px) and desktop (1280 px), verify:
1. Next / previous show an actual rotating sheet mid-turn; page count updates after the turn. First/last bounds disable the appropriate controls.
2. Tap both edges, swipe left/right, use keyboard arrows. Vertical scrolling must remain available.
3. Use the activity chooser to visit every game page. Try a wrong answer, retry correctly, close/reopen, reset; toggle all checklist steps; open every tip.
4. Modal keeps focus and closes with its button or Escape. Underlying book must not turn while playing.
5. No horizontal overflow or JavaScript errors. All JPEGs, CSS and JS load on GitHub Pages.

Printed-game mapping:
- Tập 1: p03 pencil; p05 lotus; p09 four riddles; p10 four-step pop-up card and three tips.
- Tập 2: p03 comb; p09 six riddles (includes the requested extra foot riddle and comb) and reflection checklist; p10 four-step kind-words jar and three calming tips.
- Tập 3: p03 shirt; p06 future; p09 shoes, snail, name, age plus reflection checklist; p10 four-step queue tickets and three tips.
- STEM: p04 bridge; p07 monkey; p10 glue; p14 triangle; p17 five riddles and five-item reflection checklist; p18 five-step model bridge and three teamwork tips. Extra safety/teamwork/apology reveals on p05/p08/p11.
