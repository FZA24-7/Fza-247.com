'use client';
import {useState} from 'react';
export default function Img({src,alt}){const [bad,setBad]=useState(false);
 return bad?<div className="ph">{alt.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>:<img src={src} alt={alt} onError={()=>setBad(true)}/>}
