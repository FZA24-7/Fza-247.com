'use client';
import {useRouter} from 'next/navigation';import {celebrate} from '@/lib/celebrate';
export default function CLink({href,children,className,...r}){const rt=useRouter();
 return <a href={href} className={className} {...r} onClick={e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;e.preventDefault();celebrate(e.clientX||innerWidth/2,e.clientY||innerHeight/2);setTimeout(()=>rt.push(href),900)}}>{children}</a>}
