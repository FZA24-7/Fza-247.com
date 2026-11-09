import {NextResponse} from 'next/server';import {getMessages,delMessage} from '@/lib/content';
export const GET=async()=>NextResponse.json(await getMessages());
export async function DELETE(r){const {i}=await r.json();await delMessage(+i);return NextResponse.json({ok:1})}
