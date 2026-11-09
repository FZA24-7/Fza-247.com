'use client';
import {useEffect,useRef,useState} from 'react';
const T="FZA 24/7 is an AI agency. We design, build and ship software, mobile apps and dashboards that solve real business problems and grow your sales — working side by side with every client until the problem is gone.";
export default function Intro(){const r=useRef(),[p,setP]=useState(0);
 useEffect(()=>{const f=()=>{const b=r.current.getBoundingClientRect();setP(Math.min(1,Math.max(0,(innerHeight*.85-b.top)/(b.height*.8))))};f();addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
 const w=T.split(' ');
 return <section id="intro" ref={r} className="intro2"><div className="meta"><span>00 · INTRODUCTION</span><span>WHO WE ARE</span></div>
 <p className="words">{w.map((x,i)=><span key={i} className={i/w.length<p?'lit':''}>{x} </span>)}</p>
 <div className="pillars">{[['01','Solve','We find the real business problem first.'],['02','Build','Software, apps and dashboards — built end to end.'],['03','Grow','Everything we ship is aimed at your sales.']].map(([n,t,d],i)=><div key={n} className="pill rv" style={{transitionDelay:i*120+'ms'}}><i className="draw"/><small>{n}</small><h3>{t}</h3><p>{d}</p></div>)}</div></section>}
