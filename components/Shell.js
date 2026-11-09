'use client';
import {useEffect,useState} from 'react';import Link from 'next/link';import {usePathname} from 'next/navigation';import Contours from './Contours';
const nav=[['01','Work','/#work'],['02','Services','/services'],['03','About','/about'],['04','Contact','/contact']];
export default function Shell({children}){
 const [intro,setIntro]=useState(true),[out,setOut]=useState(false),[xy,setXY]=useState([0,0]),[sc,setSc]=useState(0),[hv,setHv]=useState(false),[mo,setMo]=useState(false),path=usePathname();
 useEffect(()=>{if(sessionStorage.fza){setIntro(false);return}
  const a=setTimeout(()=>setOut(true),2000),b=setTimeout(()=>{setIntro(false);sessionStorage.fza=1},2800);return()=>{clearTimeout(a);clearTimeout(b)}},[]);
 useEffect(()=>{const s=document.documentElement.style;
  const m=e=>{s.setProperty('--x',e.clientX+'px');s.setProperty('--y',e.clientY+'px');setXY([e.clientX,e.clientY]);setHv(!!e.target.closest?.('a,button,input,textarea'))};
  const sl=()=>setSc(Math.round(scrollY/Math.max(1,document.body.scrollHeight-innerHeight)*100));
  addEventListener('mousemove',m);addEventListener('scroll',sl);return()=>{removeEventListener('mousemove',m);removeEventListener('scroll',sl)}},[]);
 useEffect(()=>{const o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.15});
  const t=setTimeout(()=>document.querySelectorAll('.rv').forEach(el=>o.observe(el)),50);return()=>{clearTimeout(t);o.disconnect()}},[path,intro]);
 return <>
  {intro&&<div className={'intro'+(out?' out':'')}><h1>FZA 24/7<i/></h1></div>}
  <Contours/><div className="grid"/><div className="glow"/><div className="hx"/><div className="vx"/>
  <div className={'cur'+(hv?' big':'')} style={{transform:`translate(${xy[0]}px,${xy[1]}px)`}}/><div className="coord" style={{transform:`translate(${xy[0]+14}px,${xy[1]+14}px)`}}>X {String(xy[0]).padStart(4,'0')} · Y {String(xy[1]).padStart(4,'0')}</div>
  <div className="prog" style={{width:sc+'%'}}><b>{sc}%</b></div>
  <header className="nav"><Link href="/" className="logo"><img src="/logo.png" alt="" onError={e=>e.currentTarget.style.display='none'}/><b>FZA 24/7</b><span>/ AI AGENCY</span></Link>
   <nav className={mo?"open":""}>{nav.map(([n,l,h])=><Link key={l} href={h} onClick={()=>setMo(false)}><small>{n}</small> {l}</Link>)}</nav><Link href="/contact" className="btn sm">Let's talk</Link><button className="burger" aria-label="Menu" onClick={()=>setMo(!mo)}>☰</button></header>
  <main>{children}</main>
  <footer className="foot"><div className="cta rv"><h2>Got a brief that needs to move? <Link href="/contact">Let's talk.</Link></h2></div><div className="mega">FZA 24/7.</div><p>© 2026 FZA 24/7 · <Link href="/services">Services</Link> · <Link href="/about">About</Link> · <Link href="/contact">Contact</Link></p></footer></>}
