'use client';
import {useState,useEffect,useRef} from 'react';
export default function C(){const [s,setS]=useState(''),m=useRef();
 useEffect(()=>{const p=new URLSearchParams(location.search).get('product');if(p&&m.current)m.current.value=`I'm interested in ${p}.`},[]);
 async function go(e){e.preventDefault();const f=e.target,d=Object.fromEntries(new FormData(f));setS('Sending…');
  const r=await fetch('/api/contact',{method:'POST',body:JSON.stringify(d)});setS(r.ok?"Sent — we'll reply shortly.":'Please check the fields.');if(r.ok)f.reset()}
 return <section className="sec"><h1 className="h1">Contact us</h1><p className="lead">Tell us what you need. We reply fast — we're 24/7.</p>
 <form onSubmit={go} className="form"><input name="name" placeholder="Your name" required/><input name="email" type="email" placeholder="Email" required/><textarea name="message" rows="6" placeholder="Your brief" ref={m} required/><button className="btn">Send brief →</button><em>{s}</em></form></section>}
