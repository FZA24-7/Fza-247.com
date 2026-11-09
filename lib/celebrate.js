export function celebrate(x,y){
 const c=document.createElement('canvas');c.style.cssText='position:fixed;inset:0;z-index:300;pointer-events:none';c.width=innerWidth;c.height=innerHeight;document.body.appendChild(c);const g=c.getContext('2d');
 const col=['#5b7bff','#ecece6','#ffd166','#ef476f','#06d6a0'];
 const ps=Array.from({length:150},()=>{const a=Math.random()*Math.PI*2,v=6+Math.random()*13;return{x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-7,s:5+Math.random()*7,r:Math.random()*6,c:col[Math.random()*5|0],l:1}});
 let n=0;(function f(){g.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.vy+=.35;p.vx*=.985;p.x+=p.vx;p.y+=p.vy;p.r+=.2;p.l-=.011;g.save();g.globalAlpha=Math.max(p.l,0);g.translate(p.x,p.y);g.rotate(p.r);g.fillStyle=p.c;g.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);g.restore()});if(++n<110)requestAnimationFrame(f);else c.remove()})();
 try{const A=new(window.AudioContext||window.webkitAudioContext)(),t=A.currentTime;
  [523.25,659.25,783.99,1046.5].forEach((fr,i)=>{const o=A.createOscillator(),gn=A.createGain(),s=t+i*.07;o.type='triangle';o.frequency.value=fr;gn.gain.setValueAtTime(.0001,s);gn.gain.exponentialRampToValueAtTime(.25,s+.02);gn.gain.exponentialRampToValueAtTime(.0001,s+.5);o.connect(gn);gn.connect(A.destination);o.start(s);o.stop(s+.55)});
  const b=A.createBuffer(1,A.sampleRate*.15,A.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length)**3;
  const s=A.createBufferSource(),gp=A.createGain();gp.gain.value=.3;s.buffer=b;s.connect(gp);gp.connect(A.destination);s.start(t)}catch{}}
