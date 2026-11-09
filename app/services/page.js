import Link from 'next/link';import {getContent} from '@/lib/content';
export const dynamic='force-dynamic';export const metadata={title:'Services'};
export default async function S(){const c=await getContent();return <section className="sec"><h1 className="h1">Services & products</h1><p className="lead">Ready-made solutions, customised to your needs.</p>
 <div className="cards">{c.services.map((s,i)=><Link key={s.slug} href={'/services/'+s.slug} className="card rv"><small>{String(i+1).padStart(2,'0')} · {s.tag}</small><h3>{s.name}</h3><p>{s.summary}</p><span>Explore →</span></Link>)}</div>
 <div className="center"><Link className="btn" href="/contact">Need something custom? Talk to us →</Link></div></section>}
