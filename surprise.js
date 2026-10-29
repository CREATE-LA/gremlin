// Three authored comic reversals. The surprise is the joke, not a normal reward shuffle.
let surpriseBag=[],previousSurprise='';
function nextSurprise(){
 if(!surpriseBag.length){surpriseBag=['duck','party','kitten'];for(let i=2;i>0;i--){const j=Math.floor(Math.random()*(i+1));[surpriseBag[i],surpriseBag[j]]=[surpriseBag[j],surpriseBag[i]];}if(surpriseBag[0]===previousSurprise)[surpriseBag[0],surpriseBag[1]]=[surpriseBag[1],surpriseBag[0]];}
 const kind=surpriseBag.shift();previousSurprise=kind;return {kind};
}
function surpriseAge(t){return Math.max(0,t-3.12);}
function surpriseFilmTime(t){
 const a=surpriseAge(t),kind=interaction.surprisePlan?.kind||'duck';
 const close=kind==='duck'?5.05:kind==='party'?5.65:4.05,duration=kind==='party'?.9:.3;
 if(a>=close)return 5.44+.26*ramp(a,close,close+duration,kind==='party'?'soft':'fast');
 return 3.12+.98*ramp(a,0,.85,'fast');
}
function duckArt(headOnly=false){
 const body=headOnly?'':`<path d="M-58 4 Q-45 30 -20 15 Q-10 -5 20 -2 Q58 0 61 29 Q55 61 0 61 Q-52 56 -58 4Z" fill="#EDFF00"/><path d="M-27 27 Q-5 46 24 28" fill="none" stroke="#2A2A2A" stroke-width="4"/>`;
 return `<g stroke="#2A2A2A" stroke-width="4" stroke-linejoin="round">${body}<path d="M8 12 Q-16 -3 -9 -27 Q-4 -52 23 -50 Q49 -48 49 -23 Q47 -2 31 12Z" fill="#EDFF00"/><path d="M42 -23 Q76 -25 77 -12 Q64 -4 44 -9Z" fill="#FF6941"/><circle cx="30" cy="-28" r="5" fill="#2A2A2A" stroke="none"/><circle cx="31" cy="-30" r="1.5" fill="#cccccc" stroke="none"/></g>`;
}
function partyHat(){return `<g stroke="#2A2A2A" stroke-width="5" stroke-linejoin="round"><path d="M-83 0 L-6 -160 L85 0 Q0 25 -83 0Z" fill="#FF6941"/><path d="M-55 -51 L32 -96 M-28 -103 L5 -122" stroke="#EDFF00" stroke-width="16"/><circle cx="-6" cy="-164" r="18" fill="#EDFF00"/><path d="M-83 0 Q0 25 85 0" fill="none" stroke="#EDFF00" stroke-width="13"/></g>`;}
function kittenArt(a,sleep=false){
 const tail=12*Math.sin(a*4),meow=idlePulse(a,2.58,2.65,2.88,3.0,'fast');
 if(sleep)return `<g stroke="#2A2A2A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="0" cy="22" rx="68" ry="37" fill="#FF6941"/><path d="M-52 9 L-61 -30 L-30 -13 Q-13 -27 7 -12 L32 -31 L31 9 Q31 47 -11 48 Q-52 45 -52 9Z" fill="#FF6941"/><path d="M-39 17 q9 9 18 0 M-8 17 q9 9 18 0 M65 13 Q99 65 -8 50" fill="none"/><path d="M-18 28 l10 0 -5 7Z" fill="#2A2A2A"/></g>`;
 return `<g stroke="#2A2A2A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><path d="M44 20 Q100 ${-35+tail} 69 -57" fill="none" stroke="#FF6941" stroke-width="18"/><ellipse cx="0" cy="23" rx="48" ry="35" fill="#FF6941"/><path d="M-32 38 v24 M28 38 v24" stroke="#FF6941" stroke-width="17"/><path d="M-43 -12 L-47 -56 L-15 -37 Q5 -44 22 -33 L48 -54 L44 -9 Q43 28 0 30 Q-43 27 -43 -12Z" fill="#FF6941"/><path d="M-33 -35 l13 9 M33 -35 l-10 10" stroke="#EDFF00" stroke-width="5"/><ellipse cx="-19" cy="-9" rx="8" ry="11" fill="#2A2A2A"/><ellipse cx="19" cy="-9" rx="8" ry="11" fill="#2A2A2A"/><circle cx="-16" cy="-13" r="3" fill="#cccccc" stroke="none"/><circle cx="22" cy="-13" r="3" fill="#cccccc" stroke="none"/><path d="M-6 5 h12 l-6 7Z" fill="#2A2A2A"/><ellipse cx="0" cy="18" rx="${f(3+5*meow)}" ry="${f(2+9*meow)}" fill="#2A2A2A"/><path d="M-30 7 l-29 -8 M-30 15 l-28 5 M30 7 l29 -8 M30 15 l28 5" fill="none" stroke-width="3"/></g>`;
}
function surpriseReaction(){
 const a=surpriseAge(interaction.rewardClock??3.12),kind=interaction.surprisePlan?.kind||'duck';
 let mood='menace',dy=0,dx=0,lookX=0,lookY=0;
 if(kind==='duck'){
  if(a>=2.05&&a<3.15){mood='noticed';lookX=28;lookY=35;}
  if(a>=3.15){mood='mortified';lookY=0;}
  dy=210*ramp(a,4.75,5.18,'fast');
 }else if(kind==='party'){
  if(a>=1.8&&a<2.45){mood='noticed';lookY=-35;}
  if(a>=2.45)mood='deadpan';
  dy=220*ramp(a,4.3,5.8,'soft');
 }else{
  if(a>=1.8&&a<2.7){mood='noticed';lookX=34;lookY=40;}
  if(a>=2.7){mood='terror';dx=9*Math.sin(a*55);}
  dy=330*ramp(a,3.6,4.1,'fast');
 }
 let eyes='',mouth='',brows='';
 for(let i=0;i<2;i++){
  const x=i?655:405,side=i?1:-1;
  let shape='',pupilR=13,py=lookY,px=lookX;
  if(mood==='menace')shape=`<path d="M-104 -43 Q0 ${i?-55:26} 104 -20 Q100 57 0 58 Q-107 57 -104 -43Z"/>`;
  else if(mood==='deadpan'){shape='<path d="M-106 -6 L106 -6 Q96 35 0 35 Q-98 35 -106 -6Z"/>';pupilR=12;py=13;}
  else{const rx=mood==='terror'?118:mood==='mortified'?98:100,ry=mood==='terror'?116:mood==='mortified'?98:88;shape=`<ellipse rx="${rx}" ry="${ry}"/>`;pupilR=mood==='terror'?7:mood==='mortified'?9:13;}
  eyes+=`<g transform="translate(${x} 925)" fill="#2A2A2A" stroke="#EDFF00" stroke-width="10">${shape}<circle cx="${f(px)}" cy="${f(py)}" r="${pupilR}" fill="#EDFF00" stroke="none"/></g>`;
  const by=mood==='terror'?786:mood==='deadpan'?866:mood==='mortified'?797:815,tilt=mood==='menace'?-side*48:mood==='mortified'?-side*30:mood==='terror'?-side*28:0;
  brows+=`<path d="M${x-91} ${by+tilt} Q${x} ${by-16} ${x+91} ${by-tilt}" fill="none" stroke="#EDFF00" stroke-width="12" stroke-linecap="round"/>`;
 }
 if(mood==='menace')mouth='<path d="M448 1033 Q530 1084 612 1033 L592 1103 Q530 1130 468 1103Z M466 1043 l18 45 21 -26 M559 1064 l20 24 17 -43" fill="#2A2A2A" stroke="#EDFF00" stroke-width="9" stroke-linejoin="round"/>';
 else if(mood==='terror')mouth='<ellipse cx="530" cy="1070" rx="48" ry="70" fill="#2A2A2A" stroke="#EDFF00" stroke-width="10"/>';
 else if(mood==='mortified')mouth='<path d="M485 1065 Q530 1034 575 1065 M495 1061 l12 13 14 -15 14 14 14 -15 14 13" fill="none" stroke="#EDFF00" stroke-width="9" stroke-linecap="round"/><g fill="#FF6941" opacity=".75"><ellipse cx="350" cy="1024" rx="32" ry="13"/><ellipse cx="710" cy="1024" rx="32" ry="13"/></g>';
 else if(mood==='deadpan')mouth='<path d="M482 1053 L578 1053" stroke="#EDFF00" stroke-width="11" stroke-linecap="round"/>';
 else mouth='<ellipse cx="530" cy="1060" rx="25" ry="36" fill="#2A2A2A" stroke="#EDFF00" stroke-width="9"/>';
 return `<g data-emotion="${mood}" transform="translate(${f(dx)} ${f(dy)})">${eyes}${brows}${mouth}</g>`;
}
function surpriseScene(t){
 const p=interaction.surprisePlan;if(!p)return '';const a=surpriseAge(t),fade=1-ramp(a,8.4,9.0,'soft');let out='';
 if(p.kind==='duck'){
  if(a>=1.4&&a<5.45){const drop=ramp(a,1.4,2.05,'soft'),bounce=idlePulse(a,2.05,2.16,2.25,2.45,'fast'),y=1010+310*drop-20*bounce;out+=`<g opacity="${f(ramp(a,1.4,1.52,'fast')*(1-ramp(a,5.05,5.4,'fast')))}" transform="translate(710 ${f(y)}) rotate(${f(-12*(1-drop))}) scale(1.1 ${f(1.1-.18*bounce)})">${duckArt()}</g>`;}
  const peek=idlePulse(a,6.2,6.55,8.0,8.35,'soft');if(peek>0)out+=`<g clip-path="url(#letterWindows)"><g transform="translate(600 ${f(954+45*(1-peek))}) scale(.72)">${duckArt(true)}</g></g>`;
 }else if(p.kind==='party'){
  if(a>=1.15){const drop=ramp(a,1.15,1.85,'fast'),settle=10*Math.sin((a-1.85)*18)*(1-ramp(a,1.85,2.25,'soft')),fall=ramp(a,4.4,6.3,'soft');const y=420+390*drop+Math.max(0,settle)+80*fall;out+=`<g transform="translate(530 ${f(y)}) rotate(${f(-8+15*fall)}) scale(.88)">${partyHat()}</g>`;}
  const horn=idlePulse(a,2.05,2.15,2.8,3.1,'fast');if(horn>0)out+=`<g transform="translate(530 1060)"><path d="M0 0 l${f(145*horn)} 10" stroke="#FF6941" stroke-width="17" stroke-linecap="round"/><path d="M${f(145*horn)} 10 q28 -30 15 -44 q-26 -10 -25 13" stroke="#EDFF00" stroke-width="10" fill="none"/></g>`;
  for(let i=0;i<12;i++){const b=a-2.08-i*.035;if(b<0||b>2.2)continue;const x=530+Math.sin(i*7)*b*150,y=750-80*b+150*b*b;out+=`<rect x="-5" y="-9" width="10" height="18" fill="${i%2?'#FF6941':'#EDFF00'}" opacity="${f(1-ramp(b,1.6,2.2,'soft'))}" transform="translate(${f(x)} ${f(y)}) rotate(${f(i*30+b*150)})"/>`;}
 }else{
  if(a>=1.15){const walk=ramp(a,1.15,2.55,'soft'),curl=ramp(a,4.6,5.1,'soft'),x=1100-520*walk,y=1290+Math.sin(a*22)*4*(1-walk);out+=`<g transform="translate(${f(x)} ${f(y)}) scale(1.1)">${kittenArt(a,curl>.5)}</g>`;}
  const peek=idlePulse(a,6.15,6.4,6.85,6.97,'fast');if(peek>0){out+=`<g clip-path="url(#letterWindows)" opacity="${f(peek)}"><rect x="330" y="890" width="350" height="95" fill="#EDFF00"/><circle cx="396" cy="935" r="4" fill="#2A2A2A"/><circle cx="616" cy="939" r="3" fill="#2A2A2A"/></g>`;}
 }
 return `<g opacity="${f(fade)}">${out}</g>`;
}
