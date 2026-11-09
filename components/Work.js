'use client';
import {useEffect,useRef,useState} from 'react';import Link from 'next/link';
export default function Work({items}){const [i,setI]=useState(0),r=useRef([]);
 useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setI(+e.target.dataset.i)),{rootMargin:'-45% 0px -45% 0px'});r.current.forEach(x=>x&&o.observe(x));return()=>o.disconnect()},[]);
 const p=n=>String(n).padStart(2,'0');
 return <section id="work" className="work"><div className="stick"><div className="big">{p(i+1)}<span>/{p(items.length)}</span></div><small>{items[i].tag}</small><h3>{items[i].name}</h3><p>{items[i].summary}</p><Link className="btn" href={'/services/'+items[i].slug}>View solution →</Link></div>
 <div className="rail">{items.map((s,k)=><div key={s.slug} data-i={k} ref={el=>r.current[k]=el} className={'panel'+(k===i?' on':'')}><small>{p(k+1)}</small><h2>{s.name}</h2></div>)}</div></section>}
