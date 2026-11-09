import {SignJWT,jwtVerify} from 'jose';
const k=()=>new TextEncoder().encode(process.env.JWT_SECRET||'');
export const sign=()=>new SignJWT({role:'owner'}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('2h').sign(k());
export const verify=async t=>{try{if(!process.env.JWT_SECRET||!t)return false;await jwtVerify(t,k());return true}catch{return false}};
