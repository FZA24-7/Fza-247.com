import {NextResponse} from 'next/server';import {getContent,saveContent} from '@/lib/content';
export const GET=async()=>NextResponse.json(await getContent());
export async function PUT(r){const c=await r.json();if(!c.services||!c.team||!c.site)return NextResponse.json({error:'Invalid'},{status:400});await saveContent(c);return NextResponse.json({ok:1})}
