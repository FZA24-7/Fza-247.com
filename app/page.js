import Link from 'next/link';import Work from '@/components/Work';import {getContent} from '@/lib/content';
export const dynamic='force-dynamic';
export default async function Home(){const c=await getContent();return <>
 <section className="hero"><div className="meta"><span>FZA 24/7 · AI AGENCY</span><span>ALWAYS ON</span></div>
  <h1>{c.site.tagline}</h1><p className="lead">{c.site.sub}</p>
  <div className="row"><Link className="btn" href="/contact">Start a project →</Link><Link className="btn ghost" href="/services">Explore services</Link></div>
  <div className="stats"><div><b>100%</b>client satisfaction</div><div><b>{c.services.length}+</b>products shipped</div><div><b>24/7</b>support</div></div></section>
 <Work items={c.services}/>
 <section className="sec rv"><h2 className="sub">Problems solved. Sales grown.</h2><p className="lead">We work side by side with our clients — and they stay because they see their problems get solved.</p><div><Link className="btn" href="/contact">Book a call →</Link></div></section></>}
