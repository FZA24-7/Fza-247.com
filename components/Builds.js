const G=({on,children})=><g style={{opacity:on?1:0,transform:on?'none':'translateY(16px)',transition:'all .6s'}}>{children}</g>;
const Pill=({x,y,t})=><><rect className="ac" x={x-45} y={y-9} width="90" height="18" rx="9"/><text x={x} y={y+3.5} textAnchor="middle">{t}</text></>;
const N=[[295,150],[247,232],[153,232],[105,150],[153,68],[247,68]];
const V={
d:s=><><G on={s>=1}><rect x="30" y="30" width="70" height="240"/><rect x="110" y="30" width="260" height="36"/><path d="M40 55H90M40 75H90M40 95H80"/></G>
 <G on={s>=2}><rect className="fl" x="110" y="76" width="125" height="70"/><rect className="fl" x="245" y="76" width="125" height="70"/></G>
 <G on={s>=3}>{[40,70,50,95,80,110].map((h,j)=><rect key={j} className="ac" x={120+j*40} y={270-h} width="26" height={h}/>)}</G><G on={s>=4}><Pill x={315} y={48} t="LIVE ✓"/></G></>,
'fza-ai-tutor':s=><><G on={s>=1}><rect x="30" y="30" width="105" height="240"/><path d="M42 55H122M42 75H122M42 95H100M42 115H115"/><rect x="145" y="30" width="225" height="30"/></G>
 <G on={s>=2}><rect className="fl" x="155" y="75" width="150" height="40" rx="8"/><rect className="fl" x="215" y="125" width="145" height="40" rx="8"/><circle className="ac" cx="160" cy="45" r="8"/></G>
 <G on={s>=3}><circle cx="200" cy="225" r="30"/><path className="ln" d="M200 195A30 30 0 1 1 172 238"/><path d="M250 205H355M250 225H335M250 245H345"/></G><G on={s>=4}><Pill x={320} y={45} t="SMART ✓"/><text x="200" y="229" textAnchor="middle">A+</text></G></>,
'fza-claude-application':s=><><G on={s>=1}><rect x="30" y="30" width="340" height="30"/><rect x="40" y="228" width="270" height="32" rx="16"/></G>
 <G on={s>=2}><rect className="fl" x="50" y="80" width="150" height="34" rx="10"/><rect className="fl" x="190" y="125" width="170" height="34" rx="10"/><rect className="fl" x="50" y="170" width="190" height="34" rx="10"/></G>
 <G on={s>=3}>{[62,76,90].map(x=><circle key={x} className="ac" cx={x} cy="244" r="4"/>)}<rect x="45" y="38" width="50" height="14" rx="7"/><rect x="105" y="38" width="50" height="14" rx="7"/></G>
 <G on={s>=4}><circle className="ac" cx="338" cy="244" r="17"/><Pill x={315} y={45} t="CLAUDE ✓"/></G></>,
'fza-omniverse':s=><><G on={s>=1}><circle cx="200" cy="150" r="95"/><circle cx="200" cy="150" r="26"/>{N.map(([x,y],i)=><circle key={i} cx={x} cy={y} r="16"/>)}</G>
 <G on={s>=2}><path d="M200 150L295 150M200 150L247 232M200 150L153 232M200 150L105 150M200 150L153 68M200 150L247 68"/></G>
 <G on={s>=3}>{N.map(([x,y],i)=><circle key={i} className="ac" cx={x} cy={y} r="16"/>)}</G><G on={s>=4}><circle className="ac" cx="200" cy="150" r="26"/><text x="200" y="154" textAnchor="middle">AIO</text><Pill x={330} y={42} t="AIO ✓"/></G></>,
'fza-dukan-ai':s=><><G on={s>=1}><rect x="60" y="45" width="280" height="40"/><rect x="70" y="85" width="260" height="175"/></G>
 <G on={s>=2}><path d="M105 45V85M150 45V85M195 45V85M240 45V85M285 45V85M85 140H165M235 140H315M85 185H165M235 185H315"/><rect x="175" y="190" width="50" height="70"/></G>
 <G on={s>=3}><rect className="fl" x="60" y="45" width="280" height="40"/>{[[90,120],[120,120],[245,120],[280,120],[95,165],[250,165]].map(([x,y])=><rect key={x+y} className="ac" x={x} y={y} width="20" height="20"/>)}</G><G on={s>=4}><Pill x={200} y={66} t="OPEN ✓"/></G></>,
'fza-forex-dashboard':s=><><G on={s>=1}><path d="M40 60H360M40 110H360M40 160H360M40 210H360M40 260H360M40 40V260"/></G>
 <G on={s>=2}><path d="M70 120V200M110 100V170M150 130V210M190 90V160M230 110V180M270 70V140M310 60V120"/></G>
 <G on={s>=3}>{[[62,140,40],[102,115,40],[142,150,40],[182,105,40],[222,125,35],[262,85,40],[302,75,35]].map(([x,y,h],i)=><rect key={x} className={i%2?'fl':'ac'} x={x} y={y} width="16" height={h}/>)}</G>
 <G on={s>=4}><path className="ln" d="M40 220L110 180L190 150L270 100L350 70"/><Pill x={320} y={45} t="LIVE ✓"/></G></>,
'fza-psx-dashboard':s=><><G on={s>=1}><rect x="30" y="30" width="340" height="24"/><rect x="30" y="64" width="140" height="206"/><path d="M30 94H170M30 124H170M30 154H170M30 184H170M30 214H170M30 244H170"/></G>
 <G on={s>=2}>{[[100,40],[130,60],[160,50],[190,70],[220,45]].map(([y,w])=><rect key={y} className="fl" x="36" y={y} width={w} height="18"/>)}</G>
 <G on={s>=3}><path className="ac" style={{opacity:.25}} d="M185 240L220 200L255 215L290 160L325 130L360 100V260H185Z"/><path className="ln" d="M185 240L220 200L255 215L290 160L325 130L360 100"/></G><G on={s>=4}><Pill x={315} y={42} t="PSX ▲"/></G></>,
'fza-shopflow-ai':s=><><G on={s>=1}>{[35,115,195,275].map(x=><rect key={x} x={x} y="110" width="60" height="60"/>)}</G>
 <G on={s>=2}><path d="M95 140H115M175 140H195M255 140H275M50 200H350L260 250H140Z"/></G>
 <G on={s>=3}>{[35,115,195].map(x=><rect key={x} className="fl" x={x} y="110" width="60" height="60"/>)}{[[120,215],[170,225],[230,215],[200,238]].map(([x,y])=><circle key={x} className="ac" cx={x} cy={y} r="6"/>)}</G>
 <G on={s>=4}><rect className="ac" x="275" y="110" width="60" height="60"/><text x="305" y="144" textAnchor="middle">SALE</text><Pill x={200} y={60} t="SALE ✓"/></G></>,
'fza-retailflow-pos':s=><><G on={s>=1}><rect x="40" y="35" width="200" height="130" rx="6"/><rect x="270" y="35" width="95" height="200"/>{[48,96,144,192].flatMap(x=>[185,222].map(y=><rect key={x+y} x={x} y={y} width="40" height="30"/>))}</G>
 <G on={s>=2}><path d="M55 60H200M55 85H180M55 110H190M55 135H150M280 60H355M280 80H345M280 100H355M280 120H340"/></G>
 <G on={s>=3}>{[48,96,144,192].flatMap(x=>[185,222].map(y=><rect key={x+y} className="fl" x={x} y={y} width="40" height="30"/>))}<rect className="fl" x="150" y="140" width="80" height="18"/></G>
 <G on={s>=4}><rect className="ac" x="280" y="150" width="75" height="14"/><Pill x={150} y={48} t="PAID ✓"/></G></>};
export default function Build({slug,st,q}){return <svg viewBox="0 0 400 300" className="bp"><rect x="20" y="20" width="360" height="260" className="frame" style={{strokeDashoffset:1500-Math.min(1,q*6)*1500}}/>{(V[slug]||V.d)(st)}</svg>}
