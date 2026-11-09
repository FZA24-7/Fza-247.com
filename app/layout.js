import './globals.css';import Shell from '@/components/Shell';
export const metadata={metadataBase:new URL(process.env.SITE_URL||'http://localhost:3000'),title:{default:'FZA 24/7 — AI Agency',template:'%s | FZA 24/7'},description:'FZA 24/7 builds AI products, software, mobile apps and dashboards that solve business problems and grow sales.',openGraph:{title:'FZA 24/7',type:'website'}};
export default function L({children}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}
