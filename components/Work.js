'use client';
import { useEffect, useRef, useState } from 'react'; import CLink from './CLink';
import Build from './Builds';
const ST=['Discovery','Wireframe','UI design','Development','Launch'];
const G=({on,children})=><g style={{opacity:on?1:0,transform:on?'none':'translateY(16px)',transition:'all .6s'}}>{children}</g>;
export default function Work({items}){const [i,setI]=useState(0),[pr,setPr]=useState([]),r=useRef([]);
 useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setI(+e.target.dataset.i)),{rootMargin:'-45% 0px -45% 0px'});r.current.forEach(x=>x&&o.observe(x));
  const f=()=>setPr(r.current.map(el=>{if(!el)return 0;const b=el.getBoundingClientRect();return Math.min(1,Math.max(0,(innerHeight*.2-b.top)/(b.height-innerHeight*.55)))}));f();addEventListener('scroll',f);return()=>{o.disconnect();removeEventListener('scroll',f)}},[]);
 const p=n=>String(n).padStart(2,'0');
 return <section id="work" className="work"><div className="stick"><div className="big">{p(i+1)}<span>/{p(items.length)}</span></div><small>{items[i].tag}</small><h3>{items[i].name}</h3><p>{items[i].summary}</p><CLink className="btn" href={'/services/'+items[i].slug}>View solution →</CLink></div>
 <div className="rail">{items.map((s,k)=>{const q=pr[k]||0,st=Math.min(4,Math.floor(q*5));return <div key={s.slug} data-i={k} ref={el=>r.current[k]=el} className={'panel'+(k===i?' on':'')}><div className="pin">
  <small>{p(k+1)} · BUILD SEQUENCE</small><h2>{s.name}</h2>
     <Build slug={s.slug} st={st} q={q} />

  <div className="bar"><i style={{width:Math.round(q*100)+'%'}}/></div>
  <ol className="steps">{ST.map((t,j)=><li key={t} className={j<st?'done':j===st?'cur':''}>{p(j+1)} {t}</li>)}</ol><small>BUILD {Math.round(q*100)}%</small></div></div>})}</div></section>}
