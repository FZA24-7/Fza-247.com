import {NextResponse} from 'next/server';
export async function POST(){const r=NextResponse.json({ok:1});r.cookies.delete('fza_session');return r}
