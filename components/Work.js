'use client';
import {useEffect,useRef,useState} from 'react';import CLink from './CLink';
const ST=['Discovery','Wireframe','UI design','Development','Launch'];
const G=({on,children})=><g style={{opacity:on?1:0,transform:on?'none':'translateY(16px)',transition:'all .6s'}}>{children}</g>;
export default function Work({items}){const [i,setI]=useState(0),[pr,setPr]=useState([]),r=useRef([]);
 useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setI(+e.target.dataset.i)),{rootMargin:'-45% 0px -45% 0px'});r.current.forEach(x=>x&&o.observe(x));
  const f=()=>setPr(r.current.map(el=>{if(!el)return 0;const b=el.getBoundingClientRect();return Math.min(1,Math.max(0,(innerHeight*.2-b.top)/(b.height-innerHeight*.55)))}));f();addEventListener('scroll',f);return()=>{o.disconnect();removeEventListener('scroll',f)}},[]);
 const p=n=>String(n).padStart(2,'0');
 return <section id="work" className="work"><div className="stick"><div className="big">{p(i+1)}<span>/{p(items.length)}</span></div><small>{items[i].tag}</small><h3>{items[i].name}</h3><p>{items[i].summary}</p><CLink className="btn" href={'/services/'+items[i].slug}>View solution →</CLink></div>
 <div className="rail">{items.map((s,k)=>{const q=pr[k]||0,st=Math.min(4,Math.floor(q*5));return <div key={s.slug} data-i={k} ref={el=>r.current[k]=el} className={'panel'+(k===i?' on':'')}><div className="pin">
  <small>{p(k+1)} · BUILD SEQUENCE</small><h2>{s.name}</h2>
  <svg viewBox="0 0 400 300" className="bp"><rect x="20" y="20" width="360" height="260" className="frame" style={{strokeDashoffset:1500-Math.min(1,q*6)*1500}}/>
   <G on={st>=1}><rect x="30" y="30" width="70" height="240"/><rect x="110" y="30" width="260" height="36"/><path d="M40 55H90M40 75H90M40 95H80"/></G>
   <G on={st>=2}><rect className="fl" x="110" y="76" width="125" height="70"/><rect className="fl" x="245" y="76" width="125" height="70"/><circle className="ac" cx="125" cy="48" r="8"/></G>
   <G on={st>=3}>{[40,70,50,95,80,110].map((h,j)=><rect key={j} className="ac" x={120+j*40} y={270-h} width="26" height={h}/>)}</G>
   <G on={st>=4}><rect className="ac" x="270" y="40" width="90" height="18" rx="9"/><text x="315" y="53" textAnchor="middle">LIVE ✓</text></G></svg>
  <div className="bar"><i style={{width:Math.round(q*100)+'%'}}/></div>
  <ol className="steps">{ST.map((t,j)=><li key={t} className={j<st?'done':j===st?'cur':''}>{p(j+1)} {t}</li>)}</ol><small>BUILD {Math.round(q*100)}%</small></div></div>})}</div></section>}
