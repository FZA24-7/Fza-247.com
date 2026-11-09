'use client';
import CLink from './CLink';
export default function ProductCard({s,i}){
 const mm=e=>{const el=e.currentTarget,r=el.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;el.style.setProperty('--mx',x+'px');el.style.setProperty('--my',y+'px');el.style.transform=`perspective(800px) rotateX(${(y/r.height-.5)*-9}deg) rotateY(${(x/r.width-.5)*9}deg) translateY(-6px)`};
 return <div className="rv" style={{transitionDelay:(i%4)*90+'ms'}}><CLink href={'/services/'+s.slug} className="pcard" onMouseMove={mm} onMouseLeave={e=>e.currentTarget.style.transform=''}>
  <b className="c1"/><b className="c2"/><b className="c3"/><b className="c4"/>
  <small>{String(i+1).padStart(2,'0')} · {s.tag}</small><h3>{s.name}</h3><p>{s.summary}</p>
  <div className="bars">{[40,70,50,90,65,100].map((h,k)=><i key={k} style={{'--h':h+'%',transitionDelay:k*40+'ms'}}/>)}</div><span className="go">Open product <em>→</em></span></CLink></div>}
