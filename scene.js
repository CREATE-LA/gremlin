const W=1080,H=1920,FPS=25,DURATION=6.4,CONTRAST=1.8;
const SPRITE="assets/creature-atlas-r01.png";
const CELS="assets/eye-cels-r01.png";
const HANDCELS="assets/hand-cels-r01.png";
const BATATLAS="assets/bat-cels-r01.png";
const TEAR="assets/tear.png";
const PAPER="assets/paper.png";
const HANDBOX=[[84, 69, 324, 414], [546, 163, 431, 284], [1068, 197, 400, 293], [144, 553, 311, 391], [555, 630, 431, 289], [1071, 670, 384, 288]];
const BATBOX=[[29, 126, 454, 320], [516, 196, 557, 243], [1124, 195, 370, 277], [53, 553, 399, 336], [522, 649, 552, 234], [1136, 635, 348, 283]];
const CELBOX=[[75, 73, 385, 398], [583, 72, 364, 398], [1083, 73, 382, 397], [72, 566, 384, 396], [573, 566, 383, 392], [1082, 571, 384, 382]];
const EDGE=[[0.5, 0.5], [0.5, 0.5], [0.5, 0.5], [0.5, 0.5], [0.5, 0.5], [0.5, 0.5], [0.5, 0.5], [0.5303867403314917, 0.5359116022099447], [0.5386740331491713, 0.5441988950276243], [0.5, 0.5], [0.5566298342541437, 0.5773480662983426], [0.47790055248618785, 0.48204419889502764], [0.4558011049723757, 0.4723756906077348], [0.43646408839779005, 0.4599447513812155], [0.5414364640883977, 0.6284530386740331], [0.5317679558011049, 0.643646408839779], [0.5207182320441989, 0.6560773480662984], [0.511049723756906, 0.6657458563535912], [0.5013812154696132, 0.6671270718232044], [0.4930939226519337, 0.6629834254143646], [0.48204419889502764, 0.669889502762431], [0.4696132596685083, 0.6160220994475138], [0.457182320441989, 0.6988950276243094], [0.44337016574585636, 0.7058011049723757], [0.43232044198895025, 0.7058011049723757], [0.4171270718232044, 0.7016574585635359], [0.40607734806629836, 0.6919889502762431], [0.393646408839779, 0.6988950276243094], [0.3825966850828729, 0.7030386740331491], [0.3743093922651934, 0.7030386740331491], [0.3660220994475138, 0.6160220994475138], [0.35773480662983426, 0.5193370165745856], [0.34806629834254144, 0.6837016574585635], [0.3383977900552486, 0.5773480662983426], [0.4903314917127072, 0.6906077348066298], [0.32044198895027626, 0.5414364640883977], [0.49171270718232046, 0.6988950276243094], [0.30386740331491713, 0.7058011049723757], [0.2955801104972376, 0.7099447513812155], [0.2845303867403315, 0.7071823204419889], [0.2776243093922652, 0.7030386740331491], [0.2776243093922652, 0.6988950276243094], [0.27348066298342544, 0.7209944751381215], [0.2638121546961326, 0.7279005524861878], [0.2569060773480663, 0.6077348066298343], [0.25828729281767954, 0.7403314917127072], [0.24171270718232044, 0.7417127071823204], [0.23204419889502761, 0.7417127071823204], [0.22790055248618785, 0.7417127071823204], [0.2527624309392265, 0.7486187845303868], [0.2472375690607735, 0.75], [0.2541436464088398, 0.7458563535911602], [0.2541436464088398, 0.7403314917127072], [0.2472375690607735, 0.7403314917127072], [0.24171270718232044, 0.7458563535911602], [0.23204419889502761, 0.744475138121547], [0.2292817679558011, 0.7486187845303868], [0.2292817679558011, 0.7569060773480663], [0.21132596685082872, 0.7486187845303868], [0.19613259668508287, 0.7541436464088398], [0.19060773480662985, 0.7486187845303868], [0.18370165745856354, 0.7417127071823204], [0.18922651933701656, 0.7472375690607734], [0.1850828729281768, 0.7513812154696132], [0.1878453038674033, 0.7596685082872928], [0.19337016574585636, 0.7693370165745856], [0.19060773480662985, 0.7720994475138122], [0.18922651933701656, 0.7693370165745856], [0.19613259668508287, 0.7720994475138122], [0.4972375690607735, 0.7734806629834254], [0.1878453038674033, 0.7762430939226519], [0.18922651933701656, 0.7720994475138122], [0.19475138121546962, 0.7707182320441989], [0.2058011049723757, 0.7596685082872928], [0.21685082872928177, 0.7527624309392266], [0.23204419889502761, 0.7582872928176796], [0.2292817679558011, 0.7541436464088398], [0.23066298342541436, 0.7541436464088398], [0.22375690607734808, 0.7707182320441989], [0.22099447513812154, 0.7707182320441989], [0.21961325966850828, 0.7803867403314917], [0.23204419889502761, 0.7845303867403315], [0.24171270718232044, 0.7886740331491713], [0.24861878453038674, 0.7955801104972375], [0.2527624309392265, 0.7955801104972375], [0.26657458563535913, 0.7928176795580111], [0.27900552486187846, 0.7900552486187845], [0.2845303867403315, 0.7969613259668509], [0.27900552486187846, 0.8052486187845304], [0.2803867403314917, 0.8080110497237569], [0.2803867403314917, 0.81353591160221], [0.2886740331491713, 0.8093922651933702], [0.4102209944751381, 0.7955801104972375], [0.28314917127071826, 0.5138121546961326], [0.2900552486187845, 0.7900552486187845], [0.2900552486187845, 0.7776243093922652], [0.3011049723756906, 0.6201657458563536], [0.3218232044198895, 0.755524861878453], [0.34806629834254144, 0.7541436464088398], [0.3494475138121547, 0.7458563535911602], [0.35497237569060774, 0.738950276243094], [0.3660220994475138, 0.744475138121547], [0.3770718232044199, 0.7458563535911602], [0.3867403314917127, 0.6546961325966851], [0.3867403314917127, 0.7375690607734806], [0.3839779005524862, 0.7292817679558011], [0.38535911602209943, 0.7348066298342542], [0.39088397790055246, 0.7334254143646409], [0.39226519337016574, 0.7320441988950276], [0.39917127071823205, 0.7306629834254144], [0.4129834254143646, 0.6353591160220995], [0.42265193370165743, 0.7113259668508287], [0.42265193370165743, 0.6975138121546961], [0.4212707182320442, 0.6933701657458563], [0.4419889502762431, 0.6781767955801105], [0.48342541436464087, 0.6602209944751382], [0.5234806629834254, 0.6422651933701657], [0.5469613259668509, 0.6408839779005525], [0.5593922651933702, 0.6270718232044199], [0.5676795580110497, 0.6132596685082873], [0.574585635359116, 0.5773480662983426], [0.5, 0.5], [0.5, 0.5], [0.5, 0.5], [0.5, 0.5], [0.5, 0.5], [0.5, 0.5], [0.5, 0.5], [0.5, 0.5]];
const BATANCHORS=[[255,335],[795,327],[1310,327],[251,765],[800,765],[1310,760]];
const logoBody="\n  <g id=\"e\" fill=\"#0D0D0D\">\n    <g>\n      <path d=\"M0,22.14v-.06C0,8.26,12.86,0,31.26,0c15.08,0,27.07,5.7,30.1,15.28h-12.94c-2.37-4.85-9.63-6.87-16.99-6.87-10.1,0-19.13,4.28-19.13,13.67v.06c0,9.39,9.03,13.67,19.13,13.67,7.36,0,14.61-2.02,16.99-6.87h12.94c-3.03,9.57-15.04,15.28-30.13,15.28C12.83,44.22,0,35.97,0,22.14Z\"/>\n      <path d=\"M64.1.96h32.19c11.86,0,19.89,3.27,19.89,13.86v.06c0,10.64-7.99,13.91-19.85,13.91h-20.44v14.48h-11.78V.96ZM94.86,20.44c6.12,0,9-1.22,9-5.56v-.06c0-4.28-2.88-5.51-9-5.51h-18.98v11.13h18.98Z\"/>\n      <path d=\"M119.15.96h48.4v8.58h-36.62v8.1h34.89v8.58h-34.89v8.45h36.77v8.58h-48.55V.96Z\"/>\n      <path d=\"M185.39.96h15.21l22.76,42.3h-12.92l-5.58-10.38h-24.53l-5.56,10.38h-12.14L185.39.96ZM200.54,24.35l-7.95-14.9h-.06l-7.92,14.9h15.93Z\"/>\n      <path d=\"M232.59,9.55h-22.22V.96h56.25v8.59h-22.24v33.72h-11.78V9.55Z\"/>\n      <path d=\"M269.82.96h48.4v8.58h-36.62v8.1h34.89v8.58h-34.89v8.45h36.77v8.58h-48.55V.96Z\"/>\n    </g>\n    <polygon points=\"98.47 26.77 84.89 26.77 84.81 28.59 101.44 43.26 116.85 43.26 98.47 26.77\"/>\n  </g>\n";
let PANELDEFS="<image id=\"batPanel0_-1\" x=\"516\" y=\"196\" width=\"236\" height=\"243\" href=\"assets/bat-panel-0--1.png\"/><image id=\"batPanel0_1\" x=\"838\" y=\"196\" width=\"235\" height=\"243\" href=\"assets/bat-panel-0-1.png\"/><image id=\"batPanel0_0\" x=\"752\" y=\"196\" width=\"86\" height=\"243\" href=\"assets/bat-panel-0-0.png\"/><image id=\"batPanel1_-1\" x=\"522\" y=\"649\" width=\"235\" height=\"234\" href=\"assets/bat-panel-1--1.png\"/><image id=\"batPanel1_1\" x=\"843\" y=\"649\" width=\"231\" height=\"234\" href=\"assets/bat-panel-1-1.png\"/><image id=\"batPanel1_0\" x=\"757\" y=\"649\" width=\"86\" height=\"234\" href=\"assets/bat-panel-1-0.png\"/>";
const C={soft:[.5862165178571429,0,.12,1],fast:[.12,.85,.2,1],glide:[1,0,.4570498511904762,1]};
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
function ease(v,kind='soft',contrast=CONTRAST){
  v=clamp(v);let [x1,y1,x2,y2]=C[kind],lo=0,hi=1,u=v;
  const cubic=(u,a,b)=>3*(1-u)*(1-u)*u*a+3*(1-u)*u*u*b+u*u*u;
  for(let i=0;i<18;i++){u=(lo+hi)/2;if(cubic(u,x1,x2)<v)lo=u;else hi=u;}
  const y=cubic((lo+hi)/2,y1,y2);
  return y<=0?0:y>=1?1:1/(1+Math.pow((1-y)/y,contrast));
}
const ramp=(t,a,b,kind='soft')=>ease((t-a)/(b-a),kind);
const f=v=>Number(v.toFixed(3));
const spriteBox={eyes:[76,78,438,455],pupil:[649,248,116,192],left:[1090,172,396,315],right:[60,632,414,324],blink:[562,691,421,207],rays:[1072,645,431,233],raysLeft:[1072,645,202,233],raysRight:[1303,645,200,233],eyeL:[76,170,225,355],eyeR:[302,137,214,393],browL:[122,76,130,88],browR:[318,76,126,55]};
function sprite(name,x,y,w,h,extra=''){
  const b=spriteBox[name];return `<g filter="url(#marker)"><svg x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" viewBox="${b.join(' ')}" preserveAspectRatio="none" overflow="hidden" ${extra}><image href="${SPRITE}" width="1536" height="1024"/></svg></g>`;
}
const LW=713,LH=LW*44.22/318.37,LX=(W-LW)/2,LY=940-LH/2;
function logo(dy=0,rot=0,color='#0d0d0d',clip=''){
  let body=logoBody.replace(/#[0-9a-fA-F]{3,8}/g,color);
  return `<g transform="translate(0 ${f(dy)}) rotate(${f(rot)} 540 940)" ${clip?`clip-path="url(#${clip})"`:''}><svg x="${LX}" y="${LY}" width="${LW}" height="${LH}" viewBox="0 0 318.37 44.22">${body}</svg></g>`;
}
function state(t){
  t=clamp(t,0,DURATION);
  const color='charcoal';
  const rip=(.08*ramp(t,3.44,3.60,'soft')+.92*ramp(t,3.60,3.84,'fast'))*(1-ramp(t,5.44,5.68,'fast'));
  const peek=80*ease((t-1.08)/.64,'soft',1.05)*(1-ramp(t,3.36,3.44,'fast'));
  const gaze=28*ramp(t,1.92,2.16,'soft')-28*ramp(t,2.64,2.84,'soft')+36*ramp(t,4.08,4.20,'fast')-70*ramp(t,4.52,4.76,'fast')+34*ramp(t,4.92,5.08,'soft');
  const blink=ramp(t,5.12,5.16,'fast')-ramp(t,5.24,5.28,'fast');
  const rays=ramp(t,3.84,3.92,'fast')-ramp(t,4.16,4.24,'fast');
  const tension=ramp(t,3.12,3.28,'soft')-ramp(t,3.60,3.68,'fast');
  const pop=ramp(t,3.60,3.68,'fast')-ramp(t,3.76,3.92,'soft');
  return {color,rip:interaction.open===null?rip:interaction.open,peek,gaze:gaze+interaction.look,blink,rays,tension,pop};
}
function face(s,ey,q,t){
 if(interaction.reward!=='bats'&&t>=3.84)return rewardReaction(s,t);
 const look=s.gaze<-16?0:s.gaze>16?2:1;
 const redraw=Math.floor(t*12.5)%2,b=CELBOX[look+3*redraw];
 if(s.blink>.7)return sprite('blink',330,960,360,100);
 // Conspiratorial narrow eyes become startled wide eyes as the flock erupts.
 const surprise=ramp(t,4.04,4.16,'fast'),relief=ramp(t,4.96,5.12,'soft');
 const intensity=1-ramp(t,4.12,4.36,'soft');
 const sy=.62-.32*intensity+.38*surprise-.12*relief;
 const lids=`<mask id="expressionEyes" maskUnits="userSpaceOnUse" x="0" y="0" width="1080" height="1920"><rect width="1080" height="1920" fill="white"/><rect x="300" y="${f(ey-5)}" width="430" height="65" fill="black" opacity="${f(intensity)}"/></mask>`;
 const eyes=`<g transform="translate(510 975) scale(1 ${f(sy)}) translate(-510 -975)" filter="url(#boilEye)"><g filter="url(#marker)"><g filter="url(#thinEyes)" mask="url(#expressionEyes)"><svg x="310" y="${f(ey)}" width="400" height="310" viewBox="${b.join(' ')}" preserveAspectRatio="none" overflow="hidden"><image href="${CELS}" width="1536" height="1024"/></svg></g></g></g>`;
 const brows=intensity>.001?`<g opacity="${f(intensity)}" filter="url(#boilEye)"><g transform="rotate(20 404 919)">${sprite('browL',350,902,108,34)}</g><g transform="rotate(-25 606 901)">${sprite('browR',554,882,104,32)}</g></g>`:'';
 return lids+eyes+brows;

}
// A hand rolls over a real occluding letter edge. Its raised fingertips begin
// behind the logo, turn towards camera, and settle on the front of the letter.
function handLayers(side,s,t){
 if(t>=3.28)return insideHands(side,s,t);
 const left=side==='left',start=left?.40:.64,q=s.rip;
 const rise=ramp(t,start,start+.12,'fast'),elapsed=t-start;
 const releaseStart=left?5.76:5.68,release=t-releaseStart;
 if(rise<.001||release>=.46)return {behind:'',front:''};
 const center=left?310:690,squeeze=s.tension;
 let pose=t>=3.12?(t<3.20?1:0):elapsed<.16?0:elapsed<.24?1:2;
 let hw=pose===0?64:84,hh=pose===0?82:pose===1?56:62;
 let hy=pose===0?LY+14-82*rise:pose===1?LY-35:LY-22;
 let frontHeight=pose===1?21:pose===2?48:0;
 let rotate=0;
 if(release>=0){
  if(release<.12){
   pose=2;hw=84;const peel=ease(release/.12,'soft');hh=62-8*peel;hy=LY-22-8*peel;frontHeight=48;
  }else if(release<.24){
   pose=1;hw=84;hh=56;const lift=ease((release-.12)/.12,'soft');hy=LY-40-17*lift;frontHeight=Math.max(0,16-17*lift);
  }else{
   pose=0;hw=64;hh=82;const retreat=ease(clamp((release-.30)/.16),'soft');hy=LY-82+96*retreat;frontHeight=0;rotate=(left?-1:1)*12*(1-retreat);
  }
 }
 hw-=4*squeeze;
 const hx=center-hw/2,box=HANDBOX[(left?0:3)+pose];
 let hand=`<g transform="rotate(${f(rotate)} ${center} ${LY})" filter="url(#boilHand)"><g filter="url(#marker)"><svg x="${f(hx)}" y="${f(hy)}" width="${f(hw)}" height="${f(hh)}" viewBox="${box.join(' ')}" preserveAspectRatio="none" overflow="hidden"><image href="${HANDCELS}" width="1536" height="1024"/></svg></g></g>`;
 if(s.color==='neon')hand=`<g filter="url(#handInk)">${hand}</g>`;
 const travel=`translate(0 ${f(-q*190)}) rotate(${f(-q*2.3)} 540 940)`;
 const back=`<clipPath id="${side}Back"><rect x="0" y="0" width="1080" height="${LY}"/></clipPath>`;
 const frontClip=`<clipPath id="${side}Front"><rect x="0" y="${LY}" width="1080" height="${f(frontHeight)}"/></clipPath>`;
 const behind=`${back}<g transform="${travel}"><g clip-path="url(#${side}Back)">${hand}</g></g>`;
 const front=frontHeight>0?`${frontClip}<g transform="${travel}"><g clip-path="url(#${side}Front)"><g transform="translate(1 2)" filter="url(#shadow)" opacity=".55">${hand}</g>${hand}</g></g>`:'';
 const leave=1-ramp(t,3.12,3.28,'soft');
 return {behind:`<g opacity="${f(leave)}">${behind}</g>`,front:`<g opacity="${f(leave)}">${front}</g>`};
}
// Two interior grips provide the force for the tear: upper-left and lower-right.
// Fingers cross onto the paper; wrists remain inside the actual raster opening.
function insideHands(side,s,t){
 const left=side==='left',q=s.rip,center=left?330:730;
 const appear=ramp(t,3.40,3.56,'fast'),release=t-(left?5.12:5.16);
 if(q<.003||appear<.001||release>.40)return {behind:'',front:''};
 const pose=release<.12?2:release<.24?1:0;
 const size=2.6,hw=(pose===0?64:84)*size,hh=(pose===0?82:pose===1?56:62)*size;
 const hy=LY-(pose===0?82:pose===1?40:22)*size;
 const retreat=release>.12?ramp(release,.12,.32,'soft'):0;
 const tw=1030*(.72+.28*ramp(t,3.44,3.72,'fast')),tx=(1080-tw)/2;
 const u=clamp((center-tx)/tw)*128,j=Math.min(127,Math.floor(u)),k=u-j,n=left?0:1;
 const e=EDGE[j][n]+(EDGE[j+1][n]-EDGE[j][n])*k;
 const edge=940+750*q*(e-.5)+(left?1:-1)*190*retreat;
 const rotate=left?180:0,box=HANDBOX[(left?0:3)+pose];
 const opacity=appear*(1-ramp(release,.26,.36,'soft'));
 const hand=`<g opacity="${f(opacity)}" transform="translate(0 ${f(edge-LY)}) rotate(${rotate} ${center} ${LY})"><g filter="url(#boilHand)"><g filter="url(#marker)"><svg x="${f(center-hw/2)}" y="${f(hy)}" width="${f(hw)}" height="${f(hh)}" viewBox="${box.join(' ')}" preserveAspectRatio="none" overflow="hidden"><image href="${HANDCELS}" width="1536" height="1024"/></svg></g></g></g>`;
 // Original finger cel spans actual paper boundary; no wrist/forearm drawing.
 return release>=.12?{behind:`<g mask="url(#eyeInside)">${hand}</g>`,front:''}:{behind:'',front:hand};
}
function printedLogo(q,t,ink){
 const tw=1030*(.72+.28*ramp(t,3.44,3.72,'fast')),th=750*q,tx=(1080-tw)/2;
 let result=`<defs><g id="printSource">${logo(0,0,ink)}</g></defs>`;
 const bounds=[0,60,118,170,219,264,318.37];
 for(let i=0;i<6;i++){
  const x=LX+bounds[i]*LW/318.37,w=(bounds[i+1]-bounds[i])*LW/318.37,cx=x+w/2,u=clamp((cx-tx)/tw)*128,j=Math.min(127,Math.floor(u)),k=u-j;
  const edges=EDGE[j].map((v,n)=>v+(EDGE[j+1][n]-v)*k);
  for(let n=0;n<2;n++){
   const dy=th*(edges[n]-.5),id=`ink${i}_${n}`,ja=Math.max(0,j-7),jb=Math.min(128,j+7),slope=th*(EDGE[jb][n]-EDGE[ja][n])/((jb-ja)*tw/128),angle=clamp(Math.atan(slope)*180/Math.PI,-38,38);
   result+=`<clipPath id="${id}"><rect x="${f(x)}" y="0" width="${f(w+.4)}" height="1920"/></clipPath><g transform="translate(0 ${f(dy)}) rotate(${f(angle)} ${f(cx)} 940)"><g clip-path="url(#${id})"><g clip-path="url(#${n?'lower':'upper'})"><use href="#printSource"/></g></g></g>`;
  }
 }
 return result;
}
// Camera-space swarm. The flock emerges in three overlapping streams;
// perspective and depth sorting drive near-lens passes, not radial 2D endpoints.
const rnd=(i,salt=1)=>{const v=Math.sin(i*127.1+salt*311.7)*43758.5453;return v-Math.floor(v);};
const BATS=Array.from({length:18},(_,i)=>{
 const wave=Math.floor(i/6),j=i%6;
 return {id:i,rush:true,start:4.04+wave*.13+j*.026+rnd(i,2)*.012,
 duration:.78+rnd(i,3)*.08,span:280+rnd(i,4)*110,
 lane:(j-2.5)*700+(rnd(i,5)-.5)*180,drift:(rnd(i,10)-.5)*1100,
 origin:[(rnd(i,6)-.5)*380,(j-2.5)*80+(rnd(i,7)-.5)*40],
 phase:rnd(i,8)*Math.PI*2,flapHz:5.2+rnd(i,9)*2,variant:i%2};
});
function batPose(b,t){
 const age=t-b.start;if(age<0||age>b.duration)return null;
 const p=clamp(age/b.duration),u=.78*p+.22*ease(p,'glide',1.1);
 const curve=v=>{
  const q=1-v;
  const cx=q*q*q*(740+b.origin[0])+3*q*q*v*1060+3*q*v*v*(900+b.drift*.9)+v*v*v*(-1000);
  const cy=q*q*q*(940+b.origin[1])+3*q*q*v*(560+b.lane*.25)+3*q*v*v*(1060+b.lane)+v*v*v*(1080+b.lane);
  const perspective=.48+2.55*ease(clamp((v-.10)/.78),'soft',1.55);
  const zz=870/perspective;
  return [(cx-540)/perspective,(cy-944)/perspective,zz];
 };
 const [wx,wy,z]=curve(u),next=curve(Math.min(1,u+.008)),prev=curve(Math.max(0,u-.008));
 const vel=next.map((v,i)=>v-prev[i]);
 const yaw3=clamp(Math.atan2(vel[0],-vel[2]),b.rush?-.38:-1.2,b.rush?.38:1.2);
 const pitch3=clamp(Math.atan2(-vel[1],Math.hypot(vel[0],vel[2])),b.rush?-.18:-.35,b.rush?.18:.35);
 const ahead=curve(Math.min(1,u+.04)),aheadYaw=Math.atan2(ahead[0]-wx,-(ahead[2]-z));
 const angle=-24+48*ease(clamp(u/.65),'soft',1)+7*Math.sin(u*6+b.phase);
 const perspective=870/Math.max(15,z),x=540+wx*perspective,y=944+wy*perspective;
 const flap=Math.floor(Math.max(0,age)*b.flapHz*4+b.phase*2/Math.PI);
 const cel=[0,1,2,1][((flap%4)+4)%4]+3*b.variant;
 const box=BATBOX[cel],anchor=BATANCHORS[cel];
 const scale=b.span/557*perspective;
 const yaw=.82+.18*Math.cos(u*5+b.phase);
 // Exact bounds of the posed, banked sprite (not a center-only exit test).
 const rest=BATBOX[b.variant?4:1],anch=b.variant?[800,765]:[795,327];
 const temp={x,y,z,wx,wy,angle,p,yaw3,pitch3};
 const corners=[];
 for(const [x0,x1,side] of [[rest[0],anch[0]-43,-1],[anch[0]+43,rest[0]+rest[2],1],[anch[0]-43,anch[0]+43,0]]){
  for(const xx of [x0,x1])for(const yy of [rest[1],rest[1]+rest[3]])corners.push(projectBatPoint(b,temp,xx,yy,side));
 }
 const bounds={left:Math.min(...corners.map(v=>v[0])),right:Math.max(...corners.map(v=>v[0])),top:Math.min(...corners.map(v=>v[1])),bottom:Math.max(...corners.map(v=>v[1]))};
 return {x,y,z,wx,wy,yaw3,pitch3,cel,box,anchor,scale,angle,yaw,p,span:b.span*perspective,bounds,
 outside_bounds:bounds.right<0||bounds.left>W||bounds.bottom<0||bounds.top>H,behind_camera:z<=0,offscreen:z<=0||bounds.right<0||bounds.left>W||bounds.bottom<0||bounds.top>H};
}
function projectBatPoint(b,p,px,py,side){
 const anchor=b.variant?[800,765]:[795,327],unit=b.span/557;
 let x=(px-anchor[0])*unit,y=(py-anchor[1])*unit,z=0;
 if(side){
  const hx=side*43*unit,dx=x-hx;
  const flap=.95*Math.sin((p.p*b.duration)*b.flapHz*Math.PI*2+b.phase);
  x=hx+dx*Math.cos(flap);y-=Math.abs(dx)*Math.sin(flap)*.66;z+=Math.abs(dx)*Math.sin(flap)*.75;
 }
 // Turn the whole character through its bank. Different sides foreshorten.
 const yaw=p.yaw3;
 const pitch=p.pitch3;
 let xx=x*Math.cos(yaw)+z*Math.sin(yaw),zz=-x*Math.sin(yaw)+z*Math.cos(yaw);
 let yy=y*Math.cos(pitch)-zz*Math.sin(pitch);zz=y*Math.sin(pitch)+zz*Math.cos(pitch);
 const a=p.angle*Math.PI/180,rx=xx*Math.cos(a)-yy*Math.sin(a),ry=xx*Math.sin(a)+yy*Math.cos(a);
 const depth=b.rush?p.z:Math.max(15,p.z+zz),k=870/depth;
 return [540+(p.wx+rx)*k,944+(p.wy+ry)*k];
}
function triangleMatrix(src,dst){
 const [[x0,y0],[x1,y1],[x2,y2]]=src,[[u0,v0],[u1,v1],[u2,v2]]=dst;
 const den=x0*(y1-y2)+x1*(y2-y0)+x2*(y0-y1);
 const fit=(a,b,c)=>[(a*(y1-y2)+b*(y2-y0)+c*(y0-y1))/den,(a*(x2-x1)+b*(x0-x2)+c*(x1-x0))/den,(a*(x1*y2-x2*y1)+b*(x2*y0-x0*y2)+c*(x0*y1-x1*y0))/den];
 const u=fit(u0,u1,u2),v=fit(v0,v1,v2);return [u[0],v[0],u[1],v[1],u[2],v[2]].map(f).join(' ');
}
function batRig(b,p){
 const box=BATBOX[b.variant?4:1],anchor=b.variant?[800,765]:[795,327];
 const left=anchor[0]-43,right=anchor[0]+43;
 const panels=[[box[0],left,-1],[right,box[0]+box[2],1],[left,right,0]];
 let out='';let k=0;
 for(const [x0,x1,side] of panels){
  const corners=[[x0,box[1]],[x1,box[1]],[x1,box[1]+box[3]],[x0,box[1]+box[3]]];
  const dst=corners.map(([x,y])=>projectBatPoint(b,p,x,y,side));
  for(const ids of [[0,1,2],[0,2,3]]){
   const src=ids.map(i=>corners[i]),pts=ids.map(i=>dst[i]),id=`bat${b.id}p${k++}`;
   const mid=[src.reduce((v,p)=>v+p[0],0)/3,src.reduce((v,p)=>v+p[1],0)/3];
   const clipPts=src.map(([x,y])=>{const dx=x-mid[0],dy=y-mid[1],d=Math.hypot(dx,dy);return [x+.45*dx/d,y+.45*dy/d];});
   out+=`<g transform="matrix(${triangleMatrix(src,pts)})"><clipPath id="${id}" clipPathUnits="userSpaceOnUse"><path d="M${clipPts.map(v=>v.map(f).join(' ')).join('L')}Z"/></clipPath><use href="#batPanel${b.variant}_${side}" clip-path="url(#${id})"/></g>`;
  }
 }
 return out;
}
function bats(t){
 return '<g filter="url(#boilBat)"><g filter="url(#batTone)">'+BATS.map(b=>({b,p:batPose(b,t)})).filter(o=>o.p&&!o.p.offscreen).sort((a,b)=>b.p.z-a.p.z).map(({b,p})=>batRig(b,p)).join('')+'</g></g>';
}
function batAudit(){
 const rows=BATS.map(b=>{
  const samples=[];for(let n=0;n<FPS*DURATION;n++){const p=batPose(b,n/FPS);if(p)samples.push({frame:n,time:n/FPS,z:f(p.z),x:f(p.x),y:f(p.y),span:f(p.span),offscreen:p.offscreen,outside_bounds:p.outside_bounds,behind_camera:p.behind_camera,cel:p.cel,bounds:p.bounds});}
  const firstOff=samples.find(p=>p.outside_bounds),firstHidden=samples.find(p=>p.offscreen),visible=samples.filter(p=>!p.offscreen);
  return {...b,first_offscreen:firstOff?.time??null,first_hidden_sample_has_clear_bounds:firstHidden?.outside_bounds??false,max_visible_span:Math.max(...visible.map(p=>p.span)),last_sample:samples.at(-1),sample_count:samples.length};
 });
 return {count:rows.length,trigger:'Large-eye reveal during final opening',method:'24 spaced bats follow one rightward arc, grow into the lens and pass off left. Independently hinged wings, depth sorting, near-lens coverage and sweeping exits.',first_spawn:Math.min(...BATS.map(b=>b.start)),last_flight_end:Math.max(...BATS.map(b=>b.start+b.duration)),all_cross_screen_boundary_before_removal:rows.every(b=>b.first_offscreen!==null&&b.first_hidden_sample_has_clear_bounds),camera_crossing_note:'Bounds are checked at the same 25fps samples as rendering; crossing the camera plane and leaving visible bounds in one sample is valid if no visible polygon is removed.',large_foreground_passes:rows.filter(b=>b.max_visible_span>500).length,opacity_fade_used:false,bats:rows};
}
const SNAPWINDOWS=[[.40,.60],[.64,.84],[1.28,1.48],[1.64,1.76],[1.84,2.04],[2.20,2.32],[2.56,2.68],[2.88,3.00],[3.12,3.32],[3.44,4.24],[4.72,4.84],[5.04,5.32],[5.44,6.24]];
function sampleTime(time){const cadence=SNAPWINDOWS.some(([a,b])=>time>=a&&time<=b)?25:12.5;return Math.floor((time+1e-6)*cadence)/cadence;}
function svg(inputTime){
 interaction.rewardClock=inputTime;
 const filmTime=rewardFilmTime(inputTime,interaction.reward);
 const t=interaction.open===null?sampleTime(filmTime):filmTime;
 const s=state(t),q=s.rip;
 const colors={grey:'#CCCCCC',orange:'#FF6941',charcoal:'#2A2A2A',neon:'#EDFF00'};
 const ink=s.color==='charcoal'?'#CCCCCC':'#2A2A2A';
 const phase=interaction.reduced?0:Math.floor((interaction.clock??inputTime)*12.5)%4;
 const tearW=1030*(.72+.28*ramp(t,3.44,3.72,'fast')),tearH=Math.max(.1,750*q),tearX=(1080-tearW)/2,tearY=940-tearH/2;
 const seam='M0 940 '+Array.from({length:84},(_,i)=>{const x=(i+1)*13;const y=940+11*Math.sin(i*2.31)+5*Math.sin(i*7.13);return `L${x} ${f(y)}`}).join(' ');
 let defs=`<defs>${PANELDEFS}
 <image id="batAtlas" href="${BATATLAS}" width="1536" height="1024"/>
 <filter id="batTone" filterUnits="userSpaceOnUse" x="0" y="0" width="1080" height="1920" color-interpolation-filters="sRGB"><feColorMatrix values=".9294118 0 .267647 0 0 0 1 .1875 0 0 0 0 1.3125 0 0 0 0 0 1 0"/></filter>
 <filter id="paperGrain" filterUnits="userSpaceOnUse" x="0" y="0" width="1080" height="1920" color-interpolation-filters="sRGB"><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -.022 -.074 -.007 0 .103"/></filter>
 <filter id="marker" color-interpolation-filters="sRGB"><feColorMatrix values=".9294118 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"/></filter>
 <filter id="handInk" color-interpolation-filters="sRGB"><feColorMatrix values="0 0 0 0 .164706 0 0 0 0 .164706 0 0 0 0 .164706 0 0 0 1 0"/></filter><filter id="tearTone" color-interpolation-filters="sRGB"><feColorMatrix values=".1459 .4908 .0495 0 .1137 .1459 .4908 .0495 0 .1137 .1459 .4908 .0495 0 .1137 0 0 0 1 0"/></filter>
 <filter id="holeThreshold" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="6"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="discrete" tableValues="1 1 0 0"/><feFuncG type="discrete" tableValues="1 1 0 0"/><feFuncB type="discrete" tableValues="1 1 0 0"/></feComponentTransfer><feMorphology operator="erode" radius="8"/></filter>
 <mask id="eyeInside" maskUnits="userSpaceOnUse" x="0" y="0" width="1080" height="1920"><rect width="1080" height="1920" fill="black"/><image filter="url(#holeThreshold)" href="${TEAR}" x="${f(tearX)}" y="${f(tearY)}" width="${f(tearW)}" height="${f(tearH)}" preserveAspectRatio="none"/></mask>
 <filter id="paperSurfaceThreshold" color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncR type="discrete" tableValues="0 0 1 1"/><feFuncG type="discrete" tableValues="0 0 1 1"/><feFuncB type="discrete" tableValues="0 0 1 1"/></feComponentTransfer></filter>
 <mask id="inkTear" maskUnits="userSpaceOnUse" x="0" y="0" width="1080" height="1920"><rect width="1080" height="1920" fill="black"/><image filter="url(#paperSurfaceThreshold)" href="${TEAR}" x="${f(tearX)}" y="${f(tearY)}" width="${f(tearW)}" height="${f(tearH)}" preserveAspectRatio="none"/></mask><mask id="paperSurface" maskUnits="userSpaceOnUse" x="0" y="0" width="1080" height="1920"><rect width="1080" height="1920" fill="white"/><image filter="url(#paperSurfaceThreshold)" href="${TEAR}" x="${f(tearX)}" y="${f(tearY)}" width="${f(tearW)}" height="${f(tearH)}" preserveAspectRatio="none"/></mask>
 <filter id="thinEyes" x="-5%" y="-5%" width="110%" height="110%"><feMorphology in="SourceAlpha" operator="erode" radius="3.2" result="thin"/><feComposite in="SourceGraphic" in2="thin" operator="in"/></filter>
 <filter id="boilEye" x="-12%" y="-12%" width="124%" height="124%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency=".022 .018" numOctaves="2" seed="${[3,11,7,19][phase]}" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G"/></filter>
 <filter id="boilHand" x="-15%" y="-15%" width="130%" height="130%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency=".04 .035" numOctaves="1" seed="${[7,19,3,11][phase]}" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="G"/></filter>
 <filter id="boilBat" filterUnits="userSpaceOnUse" x="0" y="0" width="1080" height="1920" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency=".025 .019" numOctaves="1" seed="${[11,3,19,7][phase]}" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G"/></filter>
 <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feColorMatrix values="0 0 0 0 .165 0 0 0 0 .165 0 0 0 0 .165 0 0 0 1 0"/><feGaussianBlur stdDeviation="2.2"/></filter>
 <clipPath id="upper"><path d="${seam} L1080 0 L0 0 Z"/></clipPath><clipPath id="lower"><path d="${seam} L1080 1920 L0 1920 Z"/></clipPath>
 <clipPath id="letterWindows" transform="translate(${LX} ${LY}) scale(${LW/318.37})"><path d="M94.86,20.44c6.12,0,9-1.22,9-5.56v-.06c0-4.28-2.88-5.51-9-5.51h-18.98v12.13h18.98Z"/><path d="M200.54,24.35l-7.95-14.9h-.06l-7.92,14.9h15.93Z"/></clipPath><clipPath id="facehole"><ellipse cx="540" cy="954" rx="${Math.max(1,380*q)}" ry="${Math.max(1,185*q)}"/></clipPath></defs>`;
 let out=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 ${innerWidth>innerHeight?400:0} ${W} ${innerWidth>innerHeight?1080:H}">${defs}<rect width="1080" height="1920" fill="${colors[s.color]}"/><g filter="url(#paperGrain)"><svg width="1080" height="1920" viewBox="2 2 378 675" preserveAspectRatio="none"><image href="${PAPER}" width="1152" height="1366"/></svg></g>`;
 out+=`<g transform="translate(540 940) scale(${f(1+.025*s.tension)} ${f(1-.08*s.tension)}) translate(-540 -940)">`;
 // Intact foreground letterforms occlude the eyes until the final rip.
 const visiblePeek=Math.min(1,s.peek/80);
 const eyPeek=704+80*(1-visiblePeek);
 const ey=805+32*(1-ramp(t,3.60,3.92,'soft'))+270*ramp(t,5.36,5.56,'fast');
 const hands=interaction.idleExpression?[]:['left','right'].map(side=>{const h=handLayers(side,s,t);return interaction.reward==='surprise'?surpriseHands(h,side):h});
 if(q>.002){
   const tw=1030*(.72+.28*ramp(t,3.44,3.72,'fast')),th=750*q;
   out+=`<image filter="url(#tearTone)" href="${TEAR}" x="${f((1080-tw)/2)}" y="${f(940-th/2)}" width="${f(tw)}" height="${f(th)}" preserveAspectRatio="none"/>`;
   out+=`<g clip-path="url(#facehole)" mask="url(#eyeInside)">${face(s,ey,q,t)}</g>`;
 }
 out+=hands.map(h=>h.behind).join('');
 if(interaction.idleExpression){out+=idleEyes(interaction.idleExpression);}
 else if(s.peek>1&&t<3.44){
   const g=s.gaze*.42,rise=38*(1-visiblePeek)+9*ramp(t,2.96,3.16,'soft')*(1-ramp(t,3.30,3.44,'fast')),squint=(1-.70*ramp(t,2.92,3.16,'soft'))*(1-.97*(ramp(t,2.28,2.36,'fast')-ramp(t,2.44,2.52,'fast')));
   out+=`<g clip-path="url(#letterWindows)"><g transform="translate(0 ${f(rise+930*(1-squint))}) scale(1 ${f(squint)})" filter="url(#boilHand)"><ellipse cx="386" cy="929" rx="34" ry="22" fill="#EDFF00"/><ellipse cx="616" cy="937" rx="25" ry="24" fill="#EDFF00"/><ellipse cx="${f(386+g)}" cy="930" rx="7.5" ry="10.5" fill="#2A2A2A"/><ellipse cx="${f(616+g)}" cy="937" rx="6.5" ry="9" fill="#2A2A2A"/></g></g>`;
 }
 if(q>.002){
   // Ink is carried into the raster paper flaps and clipped by their actual
   // textured surface, rather than suspended independently outside the tear.
   out+=`<g mask="url(#paperSurface)">${printedLogo(q,t,ink)}</g>`;
 }else out+=logo(0,0,ink);
 // Front fingers are drawn after the letter, so they visibly wrap its edge.
 out+=hands.map(h=>h.front).join('');
 if(s.rays>.01){out+=`<g opacity="${f(s.rays)}" ${s.color==='neon'?'filter="url(#handInk)"':''}>${sprite('raysLeft',250,650,64,74)}${sprite('raysRight',754,650,64,74)}</g>`;}
 out+='</g>'+(interaction.reduced?'':rewards(inputTime,interaction.reward||'bats'));
 return out+'</svg>';
}
