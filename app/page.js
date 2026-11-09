import Link from 'next/link';import Work from '@/components/Work';import Intro from '@/components/Intro';import ProductCard from '@/components/ProductCard';import {getContent} from '@/lib/content';
export const dynamic='force-dynamic';
export default async function Home(){const c=await getContent();return <>
 <section className="hero"><div className="meta"><span>FZA 24/7 · AI AGENCY</span><span>ALWAYS ON</span></div>
  <h1>{c.site.tagline}</h1><p className="lead">{c.site.sub}</p>
  <div className="row"><Link className="btn" href="/contact">Start a project →</Link><Link className="btn ghost" href="#intro">Scroll to explore ↓</Link></div>
  <div className="stats"><div><b>100%</b>client satisfaction</div><div><b>{c.services.length}+</b>products shipped</div><div><b>24/7</b>support</div></div></section>
 <Intro/><Work items={c.services}/>
 <section className="sec"><div className="meta"><span>OUR PRODUCTS</span><span>HOVER · CLICK TO OPEN</span></div><h2 className="h1 rv">Products, ready to deploy.</h2>
  <div className="pgrid">{c.services.map((s,i)=><ProductCard key={s.slug} s={s} i={i}/>)}</div>
  <div className="center"><Link className="btn" href="/contact">Need something custom? Talk to us →</Link></div></section></>}
