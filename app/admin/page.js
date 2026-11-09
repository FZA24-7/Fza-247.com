'use client';
import {useEffect,useState} from 'react';
const up=async f=>{const im=await new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.src=URL.createObjectURL(f)});
 const s=Math.min(1,640/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*s;c.height=im.height*s;c.getContext('2d').drawImage(im,0,0,c.width,c.height);
 const r=await fetch('/api/admin/upload',{method:'POST',body:JSON.stringify({data:c.toDataURL('image/jpeg',.8)})});if(!r.ok)throw 0;return(await r.json()).url};
const F=({l,v,on,area})=><label className="fld"><small>{l}</small>{area?<textarea rows="4" value={v||''} onChange={e=>on(e.target.value)}/>:<input value={v||''} onChange={e=>on(e.target.value)}/>}</label>;
const Pic=({v,on})=><div className="fld"><small>Photo (upload)</small>{v&&<img src={v} className="thumb" alt=""/>}<input type="file" accept="image/*" onChange={async e=>{const f=e.target.files[0];if(f)try{on(await up(f))}catch{alert('Upload failed')}}}/></div>;
const Person=({p,on})=>{const s=k=>v=>on({...p,[k]:v});return <><F l="Name" v={p.name} on={s('name')}/><F l="Role / title" v={p.role} on={s('role')}/><F l="Description" v={p.bio} on={s('bio')} area/><F l="LinkedIn URL" v={p.linkedin} on={s('linkedin')}/><Pic v={p.image} on={s('image')}/></>};
const mv=(a,i,d)=>{const b=[...a],j=i+d;if(j<0||j>=b.length)return b;[b[i],b[j]]=[b[j],b[i]];return b};
export default function D(){const [c,setC]=useState(null),[tab,setTab]=useState('Services'),[msg,setM]=useState([]),[st,setSt]=useState('');
 const load=()=>{fetch('/api/admin/content').then(r=>r.json()).then(setC);fetch('/api/admin/messages').then(r=>r.json()).then(setM)};useEffect(load,[]);
 const upd=(k,v)=>{setC({...c,[k]:v});setSt('Unsaved changes')};
 const list=(k,blank,Item)=><>{c[k].map((x,i)=><div className="card" key={i}><div className="row"><b>#{i+1}</b><button className="btn sm ghost" onClick={()=>upd(k,mv(c[k],i,-1))}>↑</button><button className="btn sm ghost" onClick={()=>upd(k,mv(c[k],i,1))}>↓</button><button className="btn sm ghost" onClick={()=>confirm('Remove?')&&upd(k,c[k].filter((_,j)=>j!==i))}>Remove</button></div><Item x={x} on={v=>upd(k,c[k].map((y,j)=>j===i?v:y))}/></div>)}<button className="btn sm" onClick={()=>upd(k,[...c[k],blank])}>+ Add</button></>;
 async function save(){const n={...c,services:c.services.map(s=>({...s,slug:(s.slug||s.name).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''),features:(s.features||[]).filter(f=>f.trim())}))};
  const r=await fetch('/api/admin/content',{method:'PUT',body:JSON.stringify(n)});if(r.ok){setC(n);setSt('Saved ✓ — live on the site')}else setSt('Save failed')}
 async function del(i){await fetch('/api/admin/messages',{method:'DELETE',body:JSON.stringify({i})});load()}
 async function out(){await fetch('/api/admin/logout',{method:'POST'});location.href='/admin/login'}
 if(!c)return <section className="sec">Loading…</section>;
 return <section className="sec"><h1 className="h1">Dashboard</h1>
 <div className="row">{['Services','Team','Founder','CEO','Site','Messages'].map(x=><button key={x} className={'btn sm'+(tab===x?'':' ghost')} onClick={()=>setTab(x)}>{x}{x==='Messages'?` (${msg.length})`:''}</button>)}<button className="btn sm ghost" onClick={out}>Log out</button></div>
 <div className="row savebar"><button className="btn" onClick={save}>Save all changes</button><em>{st}</em></div>
 {tab==='Services'&&list('services',{slug:'',name:'New service',tag:'AI · NEW',summary:'',description:'',features:['']},({x,on})=>{const s=k=>v=>on({...x,[k]:v});return <><F l="Name" v={x.name} on={s('name')}/><F l="URL slug (e.g. fza-omniverse)" v={x.slug} on={s('slug')}/><F l="Tag" v={x.tag} on={s('tag')}/><F l="Short summary" v={x.summary} on={s('summary')}/><F l="Full description (shown on its page)" v={x.description} on={s('description')} area/><F l="Features (one per line)" v={(x.features||[]).join('\n')} on={v=>on({...x,features:v.split('\n')})} area/></>})}
 {tab==='Team'&&list('team',{name:'',role:'',bio:'',linkedin:'',image:''},({x,on})=><Person p={x} on={on}/>)}
 {tab==='Founder'&&<div className="card"><Person p={c.founder} on={v=>upd('founder',v)}/></div>}
 {tab==='CEO'&&<div className="card"><Person p={c.ceo} on={v=>upd('ceo',v)}/></div>}
 {tab==='Site'&&<div className="card"><F l="Hero headline" v={c.site.tagline} on={v=>upd('site',{...c.site,tagline:v})}/><F l="Hero sub-text" v={c.site.sub} on={v=>upd('site',{...c.site,sub:v})} area/><F l="Contact email" v={c.site.email} on={v=>upd('site',{...c.site,email:v})}/></div>}
 {tab==='Messages'&&(msg.length?msg.map((m,i)=><div key={i} className="card"><small>{m.at} · {m.email}</small><h3>{m.name}</h3><p>{m.message}</p><button className="btn sm ghost" onClick={()=>del(i)}>Delete</button></div>):<p className="lead">No messages yet.</p>)}</section>}
