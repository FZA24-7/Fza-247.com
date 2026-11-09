'use client';
import {useState} from 'react';
export default function L(){const [e,setE]=useState('');
 async function go(ev){ev.preventDefault();const d=Object.fromEntries(new FormData(ev.target));const r=await fetch('/api/admin/login',{method:'POST',body:JSON.stringify(d)});
  if(r.ok)location.href='/admin';else setE((await r.json()).error)}
 return <section className="sec"><h1 className="h1">Owner login</h1><form onSubmit={go} className="form"><input name="user" placeholder="Username" autoComplete="username" required/><input name="password" type="password" placeholder="Password" autoComplete="current-password" required/><button className="btn">Sign in</button><em>{e}</em></form></section>}
