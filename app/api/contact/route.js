import {NextResponse} from 'next/server';import {addMessage} from '@/lib/content';
export async function POST(r){const b=await r.json().catch(()=>({}));const c=k=>String(b[k]||'').slice(0,2000);
 if(!c('name')||!/^\S+@\S+\.\S+$/.test(c('email'))||!c('message'))return NextResponse.json({error:'Fill all fields'},{status:400});
 await addMessage({name:c('name'),email:c('email'),message:c('message'),at:new Date().toISOString()});return NextResponse.json({ok:1})}
