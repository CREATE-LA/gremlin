const idlePulse=(t,a,b,c,d,kind="soft")=>ramp(t,a,b,kind)*(1-ramp(t,c,d,kind));
// The film's opening performance, played at its native 25fps cadence.
let idleEpoch=null;
function restartIdle(){idleEpoch=null;}
function idleAct(now){
 if(idleEpoch===null)idleEpoch=now;
 const frame=Math.floor(Math.max(0,now-idleEpoch)/40)%80;
 // Play .80–2.48 verbatim; use the film's quick dip to return to hiding.
 const t=frame<42?(20+frame)/25:frame<46?(83+frame-42)/25:3.48;
 return {t,name:frame>=46?'hide':t<1.28?'peek':t<1.60?'glance':t<1.80?'blink':t<2.48?'idea':'hide'};
}
function idleEyes(a){
 const eyes=CREATE_STORY.peekEyes(a.t)
  .replaceAll('#EDFF00',characterPalette(interaction.theme).eyes)
  .replaceAll(' filter="url(#boilHand)"','');
 return '<g id="idle-eyes">'+eyes+'</g>';
}
