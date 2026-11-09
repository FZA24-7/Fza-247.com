import {get} from '@/lib/store';
export async function GET(_,{params}){const {id}=await params;if(!/^[\w-]+$/.test(id))return new Response('',{status:400});
 const i=await get('img-'+id);if(!i)return new Response('',{status:404});
 return new Response(Buffer.from(i.b,'base64'),{headers:{'Content-Type':i.t,'Cache-Control':'public,max-age=31536000,immutable'}})}
