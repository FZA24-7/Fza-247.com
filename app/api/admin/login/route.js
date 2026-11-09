import bcrypt from 'bcryptjs';import {NextResponse} from 'next/server';import {sign} from '@/lib/auth';
const tries=new Map();
export async function POST(r){const ip=r.headers.get('x-forwarded-for')||'x',t=tries.get(ip)||{n:0,at:Date.now()};
 if(Date.now()-t.at>9e5){t.n=0;t.at=Date.now()} if(t.n>=5)return NextResponse.json({error:'Too many attempts. Try later.'},{status:429});
 const {user,password}=await r.json().catch(()=>({}));
 const ok=user===process.env.ADMIN_USER&&process.env.ADMIN_PASSWORD_HASH&&await bcrypt.compare(String(password||''),process.env.ADMIN_PASSWORD_HASH);
 if(!ok){t.n++;tries.set(ip,t);await new Promise(s=>setTimeout(s,700));return NextResponse.json({error:'Invalid credentials'},{status:401})}
 tries.delete(ip);const res=NextResponse.json({ok:1});
 res.cookies.set('fza_session',await sign(),{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/',maxAge:7200});return res}
