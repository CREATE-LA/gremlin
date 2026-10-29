const idlePulse=(t,a,b,c,d,kind="soft")=>ramp(t,a,b,kind)*(1-ramp(t,c,d,kind));
// Peeking performance from film v22, not the revealed character's face.
let idleEpoch=null;
function restartIdle(){idleEpoch=null;}
function idleAct(now){
 if(idleEpoch===null)idleEpoch=now;
 const elapsed=((now-idleEpoch)/1000)%7.6;
 // Preserve native arrival, glance and blink speeds; extend readable holds only.
 const keys=[[0,.80],[.52,1.32],[1.40,1.32],[1.84,1.76],[2.60,1.76],[3.22,2.38],[4.65,2.38],[5.77,3.50],[7.60,3.50]];
 let t=3.5;
 for(let j=1;j<keys.length;j++)if(elapsed<keys[j][0]){const[a,x]=keys[j-1],[b,y]=keys[j];t=x+(y-x)*(elapsed-a)/(b-a);break;}
 const gaze=24*idlePulse(t,1.14,1.28,1.42,1.54);
 return {t,gaze,name:t<1.28?'peek':t<1.60?'glance':t<1.80?'blink':t<2.48?'idea':t<3.34?'effort':'hide'};
}
function idleEyes(a){return '<g id="idle-eyes">'+videoPeekEyes({gaze:a.gaze},a.t).replaceAll('#EDFF00',characterPalette(interaction.theme).eyes)+'</g>';}
function videoPeekEyes(s,t){
 const finale=t>=7.32,hide=1-ramp(t,3.34,3.48,'fast');
 const finalVisible=idlePulse(t,7.46,7.58,7.84,7.96,'fast');
 const effort=idlePulse(t,2.88,3.04,3.12,3.30),idea=idlePulse(t,1.82,1.98,2.22,2.38);
 let out='';
 for(let i=0;i<2;i++){
  if(finale&&i)continue;
  const visible=finale?finalVisible:ramp(t,i?1.28:.88,i?1.32:.96,'fast')*hide;
  const cx=i?616:386,cy=(i?937:929)+24*(1-visible),rx=90;
  const lid=Math.max(.06,1-.70*effort-(i?.65:.25)*idea);
  const blink=idlePulse(t,1.60,1.64,1.68,1.76,'fast');
  out+=`<g opacity="${f(visible)}" transform="translate(${cx} ${f(cy)})" fill="#EDFF00"><ellipse rx="${rx}" ry="${f(65*lid*(1-.94*blink))}"/><ellipse cx="${f(s.gaze*.42)}" cy="0" rx="7" ry="${f(12*lid)}" fill="#2A2A2A"/></g>`;
 }
 return `<g clip-path="url(#letterWindows)">${out}</g>`;
}
