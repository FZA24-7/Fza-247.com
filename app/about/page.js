import Link from 'next/link';import Img from '@/components/Img';import {getContent} from '@/lib/content';
export const dynamic='force-dynamic';export const metadata={title:'About'};
const Card=({p})=><div className="person rv"><Img src={p.image} alt={p.name}/><h3>{p.name}</h3><small>{p.role}</small><p>{p.bio}</p>{p.linkedin&&<a href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}</div>;
export default async function A(){const c=await getContent();return <section className="sec"><h1 className="h1">About FZA 24/7</h1>
 <p className="lead">An AI agency delivering software, mobile apps and dashboards that solve business problems.</p>
 <h2 className="sub">Founder & CEO</h2><div className="cards"><Card p={c.founder}/><Card p={c.ceo}/></div>
 <h2 className="sub">Our Team</h2><div className="cards">{c.team.map((t,i)=><Card key={i} p={t}/>)}</div>
 <div className="center"><Link className="btn" href="/contact">Work with us →</Link></div></section>}
