'use client';
import {useEffect,useRef} from 'react';
export default function Contours(){const r=useRef();
 useEffect(()=>{const c=r.current,g=c.getContext('2d');let w,h,mx=.5,my=.5,t=0,id;
  const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight};rs();addEventListener('resize',rs);
  const mv=e=>{mx=e.clientX/w;my=e.clientY/h};addEventListener('mousemove',mv);
  const draw=()=>{t+=.008;g.clearRect(0,0,w,h);const cx=w*.72+(mx-.5)*60,cy=h*.5+(my-.5)*40;
   for(let k=0;k<18;k++){g.beginPath();for(let i=0;i<=120;i++){const a=i/120*Math.PI*2,R=50+k*(Math.min(w,h)/34)+Math.sin(3*a+t+k*.3)*14+Math.cos(5*a-t*1.3)*9+(mx-.5)*k*6;
    const x=cx+Math.cos(a)*R*1.25,y=cy+Math.sin(a)*R;i?g.lineTo(x,y):g.moveTo(x,y)}
    g.strokeStyle=k%5===0?'rgba(91,123,255,.7)':'rgba(120,140,255,.22)';g.lineWidth=k%5===0?1.5:1;g.stroke()}
   id=requestAnimationFrame(draw)};draw();
  return()=>{cancelAnimationFrame(id);removeEventListener('resize',rs);removeEventListener('mousemove',mv)}},[]);
 return <canvas ref={r} className="contours"/>}
