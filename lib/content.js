import {get,set} from './store';
export const getContent=()=>get('content');
export const saveContent=c=>set('content',c);
export const getMessages=()=>get('messages',[]);
export const addMessage=async x=>{const a=await getMessages();a.unshift(x);await set('messages',a.slice(0,500))};
export const delMessage=async i=>{const a=await getMessages();a.splice(i,1);await set('messages',a)};
