import {NextResponse} from 'next/server';import {set} from '@/lib/store';
export async function POST(r){const {data}=await r.json().catch(()=>({}));const m=/^data:(image\/(?:jpeg|png|webp));base64,([A-Za-z0-9+/=]+)$/.exec(data||'');
 if(!m||m[2].length>600000)return NextResponse.json({error:'Bad image'},{status:400});
 const id=crypto.randomUUID();await set('img-'+id,{t:m[1],b:m[2]});return NextResponse.json({url:'/api/img/'+id})}
