# FZA upgrade patch — only 2 changes (per-service builds + slower smooth scroll)
Nothing here overwrites your existing files except the new `components/Builds.js`.
Back up first (git commit or copy your folder).

## 1. Add the new file
Copy `components/Builds.js` into your project's `components/` folder.

## 2. components/Work.js (2 edits)
a) Add the import next to your CLink import:
```js
import Build from './Builds';
```
b) Delete the old `const G=...` line (if present) and replace the whole `<svg viewBox="0 0 400 300" className="bp"> ... </svg>` block with:
```jsx
<Build slug={s.slug} st={st} q={q}/>
```
(`s`, `st`, `q` already exist inside the `items.map` in Work.js.)

## 3. components/Shell.js (1 addition)
Paste this block directly ABOVE the effect that starts with `useEffect(()=>{const s=document.documentElement.style;`.
To make scrolling slower/faster change `.5` (distance per wheel notch) and `.065` (smoothness; lower = softer).
```js
 useEffect(()=>{if(matchMedia('(pointer:coarse)').matches)return;let t=scrollY,c=scrollY,run=false,id;
  const mx=()=>document.documentElement.scrollHeight-innerHeight;
  const tick=()=>{c+=(t-c)*.065;if(Math.abs(t-c)<.5){c=t;run=false}else id=requestAnimationFrame(tick);scrollTo({top:c,behavior:'instant'})};
  const wh=e=>{if(e.ctrlKey||e.target.closest?.('textarea'))return;e.preventDefault();t=Math.max(0,Math.min(mx(),t+e.deltaY*.5));if(!run){run=true;c=scrollY;id=requestAnimationFrame(tick)}};
  const sc=()=>{if(!run)t=c=scrollY};
  addEventListener('wheel',wh,{passive:false});addEventListener('scroll',sc);return()=>{cancelAnimationFrame(id);removeEventListener('wheel',wh);removeEventListener('scroll',sc)}},[]);
```

## 4. app/globals.css (append at the very end)
```css
.bp .ln{fill:none;stroke:var(--ac);stroke-width:4}.panel{height:230vh}@media(max-width:800px){.panel{height:150vh}}
```
Then run `npm run dev` and test, then deploy.
