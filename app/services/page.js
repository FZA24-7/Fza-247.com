import Link from 'next/link';import ProductCard from '@/components/ProductCard';import {getContent} from '@/lib/content';
export const dynamic='force-dynamic';export const metadata={title:'Services'};
export default async function S(){const c=await getContent();return <section className="sec"><h1 className="h1">Services & products</h1><p className="lead">Ready-made solutions, customised to your needs.</p>
 <div className="pgrid">{c.services.map((s,i)=><ProductCard key={s.slug} s={s} i={i}/>)}</div>
 <div className="center"><Link className="btn" href="/contact">Need something custom? Talk to us →</Link></div></section>}
