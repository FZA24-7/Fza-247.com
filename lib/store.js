import fs from 'fs/promises';
const U=process.env.UPSTASH_REDIS_REST_URL,T=process.env.UPSTASH_REDIS_REST_TOKEN,D=process.cwd()+'/data/';
const rq=async c=>(await(await fetch(U,{method:'POST',headers:{Authorization:'Bearer '+T},body:JSON.stringify(c)})).json()).result;
export const get=async(k,d)=>{if(U){const v=await rq(['GET',k]);if(v)return JSON.parse(v)}try{return JSON.parse(await fs.readFile(D+k+'.json','utf8'))}catch{return d}};
export const set=async(k,v)=>{if(U)return rq(['SET',k,JSON.stringify(v)]);await fs.writeFile(D+k+'.json',JSON.stringify(v,null,2))};
