// Bats retain the original film choreography. Other modes have their own physics.
function rewardEnd(mode){return mode==='bats'?8.68:mode==='surprise'?14.0:9.8;}
function rewardFilmTime(t,mode){if(mode==='surprise')return surpriseFilmTime(t);return mode==='bats'||t<=4.25?t:Math.min(6.4,4.25+(t-4.25)*.48);}
function ghostShape(){return `<path d="M-43 43 Q-56 5 -36 -31 Q-17 -61 13 -53 Q49 -45 46 -5 Q44 19 61 39 Q40 33 29 46 Q12 32 -3 47 Q-20 34 -43 43Z" fill="#2A2A2A" stroke="#EDFF00" stroke-width="4" stroke-linejoin="round"/><ellipse cx="-12" cy="-14" rx="5" ry="10" fill="#EDFF00"/><ellipse cx="16" cy="-17" rx="5" ry="10" fill="#EDFF00"/><ellipse cx="6" cy="13" rx="8" ry="12" fill="#EDFF00"/>`;}
function ballPose(age,i){
 const a=age-i*.13;if(a<0||a>5.5)return null;
 const r=65+(i%3)*14,floor=1450+(i%3)*55,drop=.46+i*.018,gravity=2400;
 let y=960,impact=0,segment=a;
 if(a<drop)y=960+(floor-r-960)*(a/drop)**2;
 else{segment=a-drop;let duration=1.15,settled=true;
  for(let b=0;b<6;b++){if(segment<duration){y=floor-r-gravity*segment*(duration-segment)/2;impact=Math.max(0,1-segment/.085);settled=false;break;}segment-=duration;duration*=.84;}
  if(settled)y=floor-r;
 }
 const dir=i%2?1:-1,travel=dir*(310*a+22*a*a),left=r+25,right=1080-r-25,span=right-left;
 const raw=540+(i-2)*29+travel-left,wrapped=((raw%(span*2))+span*2)%(span*2);
 const x=left+(wrapped<span?wrapped:span*2-wrapped),wall=Math.min(x-left,right-x),wallSquash=Math.max(0,1-wall/14)*.14;
 const squash=impact*.25;
 return {x,y,r,sx:1+squash-wallSquash,sy:1-squash+wallSquash,rot:travel/r*180/Math.PI,opacity:1-ramp(a,4.75,5.3,'soft'),floor,height:Math.max(0,floor-r-y)};
}
function ghostPose(age,i){
 const a=age-i*.18;if(a<0||a>4.85)return null;
 const starts=[[220,1250],[850,760],[790,1390],[250,650],[540,1120]],start=starts[i],side=i%2?1:-1;
 const reveal=ramp(a,0,.38,'soft'),u=clamp((a-.32)/3.85),arc=Math.sin(u*Math.PI),sweep=Math.sin(u*Math.PI*2+i*.35);
 const x=start[0]+side*390*Math.sin(u*Math.PI*1.6)+100*sweep;
 const y=start[1]-u*550-180*Math.sin(u*Math.PI*2)+Math.sin(a*5+i)*12;
 const rush=idlePulse(a,2.15,2.85,3.25,4.15,'soft'),exit=ramp(a,3.9,4.8,'fast');
 return {a,x:x+side*exit*380,y:y-exit*470,scale:(1.3+i*.18)+rush*(2.5+i*.3)+.5*arc,alpha:reveal*(1-exit),bank:side*(22*Math.cos(u*Math.PI*1.6))+8*Math.sin(a*3+i),reveal};
}
function rewards(t,mode){
 if(mode==='surprise')return surpriseScene(t);
 if(mode==='bats')return window.CREATE_STORY?CREATE_STORY.rewards(t):bats(t);
 const age=t-4.04;if(age<0||age>5.76)return '';
 let out='';
 if(mode==='eyes'){
  for(let i=0;i<5;i++){const p=ballPose(age,i);if(!p)continue;const {x,y,r,sx,sy,rot,opacity,floor,height}=p;
   out+=`<g opacity="${f(opacity)}"><ellipse cx="${f(x)}" cy="${floor+8}" rx="${f(r*.82*(1-.4*Math.min(1,height/400)))}" ry="9" fill="#2a2a2a" opacity=".5"/><g transform="translate(${f(x)} ${f(y+r*(1-sy))}) scale(${f(sx)} ${f(sy)}) rotate(${f(rot)})"><circle r="${r}" fill="#cccccc" stroke="#2a2a2a" stroke-width="5"/><path d="M${-r*.9} -8 l18 5 -10 12 M${r*.85} 14 l-18 -6 8 -15" fill="none" stroke="#FF6941" stroke-width="3"/><ellipse cx="${r*.19}" cy="0" rx="${r*.49}" ry="${r*.60}" fill="${characterPalette(interaction.theme).eyes}" stroke="#2a2a2a" stroke-width="4"/><ellipse cx="${r*.24}" cy="0" rx="${r*.22}" ry="${r*.37}" fill="#2a2a2a"/><circle cx="${r*.30}" cy="${-r*.16}" r="${r*.09}" fill="#cccccc"/></g></g>`;
  }
 }else{
  for(let i=0;i<5;i++){const p=ghostPose(age,i);if(!p)continue;const {a,x,y,scale,alpha,bank,reveal}=p;
   const glow=Math.max(0,1-ramp(a,.15,.7,'soft'))*.5;
   out+=`<ellipse cx="${f(x)}" cy="${f(y+70)}" rx="${f(45+130*reveal)}" ry="${f(8+20*reveal)}" fill="none" stroke="#EDFF00" stroke-width="4" opacity="${f(glow)}"/>`;
   out+=`<g opacity="${f(alpha)}" transform="translate(${f(x)} ${f(y)}) rotate(${f(bank)}) scale(${f(scale)})"><g transform="skewX(${f(7*Math.sin(a*6+i))})">${ghostShape()}</g></g>`;
  }
 }
 return `<g filter="url(#boilBat)">${out}</g>`;
}
function rewardReaction(s,t){
 if(interaction.reward==='surprise')return surpriseReaction();
 const age=(interaction.rewardClock??t)-4.04,ghost=interaction.reward==='ghosts',hit=Math.max(0,Math.sin(Math.max(0,age-.6)*13))*(1-ramp(age,2.1,2.9,'soft'));
 const alarm=ramp(age,ghost?.15:0,ghost?.45:.25,'fast');
 const ry=ghost?28+57*alarm:48+26*alarm-48*hit;
 const down=ghost?30*ramp(age,1.1,1.6,'fast'):20+18*Math.sin(age*5);
 const xlook=ghost?26*Math.sin(age*4):34*Math.sin(age*6);
 const eye=(x,side)=>`<ellipse cx="${x}" cy="${f(930+down)}" rx="${ghost?76:69}" ry="${f(Math.max(8,ry))}" fill="#EDFF00"/><ellipse cx="${f(x+(ghost?xlook:side*xlook))}" cy="${f(940+down)}" rx="${ghost?10:17}" ry="${f(Math.min(26,ry*.55))}" fill="#2A2A2A"/>`;
 const mouth=ghost?`<ellipse cx="520" cy="1050" rx="${f(14+20*alarm)}" ry="${f(9+38*alarm)}" fill="#EDFF00"/><ellipse cx="520" cy="1050" rx="16" ry="30" fill="#2A2A2A"/>`:`<path d="M470 1040 Q520 ${f(1015+55*hit)} 570 1040" fill="none" stroke="#EDFF00" stroke-width="9" stroke-linecap="round"/>`;
 return `<g filter="url(#boilEye)">${eye(410,-1)}${eye(620,1)}${mouth}<path d="M340 ${f(835-20*alarm)} l120 ${ghost?-22:22} M560 ${f(835-20*alarm)} l120 ${ghost?22:-22}" stroke="#EDFF00" stroke-width="11" stroke-linecap="round" fill="none"/></g>`;
}
