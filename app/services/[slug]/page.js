import Link from 'next/link';import {notFound} from 'next/navigation';import {getContent} from '@/lib/content';
export const dynamic='force-dynamic';
export async function generateMetadata({params}){const {slug}=await params;const s=(await getContent()).services.find(x=>x.slug===slug);return s?{title:s.name,description:s.summary}:{}}
export default async function P({params}){const {slug}=await params;const s=(await getContent()).services.find(x=>x.slug===slug);if(!s)notFound();
 return <section className="sec"><small>{s.tag}</small><h1 className="h1">{s.name}</h1><p className="lead">{s.summary}</p>{s.description&&<p className="desc">{s.description}</p>}
 <div className="cards">{s.features.map(f=><div key={f} className="card rv"><h3>{f}</h3></div>)}</div>
 <div className="row"><Link className="btn" href={'/contact?product='+encodeURIComponent(s.name)}>Get {s.name} →</Link><Link className="btn ghost" href="/services">All services</Link></div></section>}
