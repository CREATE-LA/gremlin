// Authored animation: the prop causes the acting, then the aftermath lands the joke.
let surpriseBag=[],previousSurprise='';
function nextSurprise(){if(!surpriseBag.length){surpriseBag=['duck','party','kitten'];for(let i=2;i>0;i--){const j=Math.floor(Math.random()*(i+1));[surpriseBag[i],surpriseBag[j]]=[surpriseBag[j],surpriseBag[i]]}if(surpriseBag[0]===previousSurprise)[surpriseBag[0],surpriseBag[1]]=[surpriseBag[1],surpriseBag[0]]}previousSurprise=surpriseBag.shift();return{kind:previousSurprise}}
function surpriseAge(t){return Math.max(0,t-3.12)}
function sg(a,b,u){return a+(b-a)*u}
function se(t,a,b,kind='fast'){return ease((t-a)/(b-a),kind,1)}
function sp(t,a,b,c,d){return se(t,a,b,'fast')*(1-se(t,c,d,'soft'))}
function surpriseFilmTime(t){const a=surpriseAge(t),kind=interaction.surprisePlan?.kind||'duck',close=kind==='duck'?6.65:kind==='party'?6.75:4.80,span=kind==='party'?1.1:kind==='kitten'?.48:.38;if(a>=close)return 5.10+.60*se(a,close,close+span,kind==='party'?'soft':'fast');return 3.12+.98*se(a,0,.70,'soft')}
const S27_BASE={x:0,y:0,sx:1,sy:1,rot:0,wide:94,top:56,bottom:60,slant:0,lid:0,gx:0,gy:0,pupil:15,brow:0,browH:22,mw:66,mt:10,mb:40,skew:0,teeth:0,blush:0,blink:0,joy:0,fang:0};
const S27_POSES={
 coil:{y:27,sx:.91,sy:.79,top:26,bottom:32,slant:30,lid:.8,brow:-36,browH:17,mw:75,mb:16,teeth:1},
 scare:{y:-12,sx:1.26,sy:1.22,top:34,bottom:55,slant:30,lid:.7,brow:-42,browH:25,mw:107,mb:70,teeth:1},
 smug:{rot:-4,top:35,bottom:43,slant:11,lid:.65,gx:18,gy:7,brow:-17,mw:83,mb:34,skew:14,teeth:.65},
 notice:{x:14,y:8,rot:5,top:70,bottom:77,gx:38,gy:37,pupil:13,brow:8,browH:26,mw:25,mt:15,mb:38},
 flinch:{y:-20,sx:1.07,sy:1.11,top:101,bottom:94,pupil:8,brow:19,browH:27,mw:47,mt:20,mb:57},
 embarrassed:{x:-13,y:12,sx:.96,sy:.92,rot:-8,top:79,bottom:72,pupil:10,brow:27,browH:22,mw:43,mt:0,mb:9,skew:-8,teeth:1,blush:1},
 glance:{x:15,rot:6,top:54,bottom:61,gx:43,gy:38,pupil:14,brow:19,mw:33,mt:0,mb:8,blush:.8},
 cringe:{y:33,sx:.92,sy:.87,top:62,bottom:70,gx:0,pupil:10,brow:33,mw:54,mt:3,mb:14,teeth:1,blush:1},
 lookup:{rot:-3,top:68,bottom:70,gy:-38,pupil:14,brow:4,browH:32,mw:24,mt:13,mb:30},
 squashed:{y:25,sx:1.08,sy:.82,top:12,bottom:23,blink:.75,brow:0,browH:14,mw:40,mb:8},
 deadpan:{y:12,rot:3,top:12,bottom:26,lid:.95,gy:10,pupil:14,brow:0,browH:23,mw:50,mt:0,mb:2},
 sigh:{y:25,rot:6,sx:.97,sy:.93,top:6,bottom:20,lid:1,gy:8,pupil:14,brow:3,mw:22,mt:2,mb:14},
 recoil:{x:-62,y:-18,rot:-16,sx:1.22,sy:1.22,wide:103,top:111,bottom:100,gx:33,gy:25,pupil:6,brow:27,browH:20,mw:60,mt:25,mb:85},
 terror:{x:-46,y:2,rot:-12,wide:103,top:102,bottom:91,gx:33,gy:26,pupil:7,brow:29,browH:23,mw:51,mt:28,mb:71},
 brave:{x:12,y:19,rot:6,top:26,bottom:36,lid:.8,gx:37,gy:25,pupil:15,brow:-27,mw:55,mt:0,mb:12,teeth:.5},
 catShock:{x:-55,y:-30,rot:-20,sx:1.28,sy:1.3,wide:106,top:120,bottom:108,gx:34,gy:32,pupil:4,brow:39,browH:26,mw:74,mt:42,mb:104},
 retreat:{y:295,sx:.68,sy:1.16,top:80,bottom:78,pupil:7,brow:32,mw:43,mt:22,mb:57},
 fondDuck:{x:0,y:23,rot:9,sx:1.02,sy:.95,top:98,bottom:90,gx:27,gy:33,pupil:27,brow:30,browH:20,mw:91,mt:-19,mb:49,blush:1},
 partyJoy:{y:13,rot:-7,sx:1.05,sy:1.02,top:65,bottom:65,gx:0,gy:0,pupil:22,brow:20,mw:93,mt:-12,mb:60,joy:.68,blush:.55},
 giggle:{y:28,rot:9,sx:1.06,sy:.94,top:70,bottom:60,brow:28,mw:98,mt:-16,mb:60,joy:1,blush:1},
 fondKitten:{x:-7,y:18,rot:8,sx:1.04,sy:1.02,top:105,bottom:96,gx:0,gy:32,pupil:30,brow:30,browH:20,mw:81,mt:-16,mb:42,blush:.9},
 nuzzle:{x:-14,y:35,rot:14,sx:1.03,sy:.94,top:78,bottom:70,gx:0,gy:20,pupil:25,brow:30,mw:81,mt:-14,mb:43,joy:.86,blush:1},
 spotted:{y:-16,rot:0,sx:1.01,sy:1.08,wide:100,top:111,bottom:103,gx:0,gy:0,pupil:5,brow:25,browH:22,mw:18,mt:12,mb:28,blush:.85},
 reset:{y:29,sx:1.11,sy:.77,top:14,bottom:22,slant:32,lid:.9,pupil:8,brow:-42,browH:21,mw:72,mt:0,mb:12,teeth:.5},
 bluff:{y:-15,sx:1.25,sy:1.20,wide:97,top:28,bottom:59,slant:35,lid:1,gx:0,gy:3,pupil:9,brow:-45,browH:24,mw:111,mt:8,mb:68,fang:1},
 meanHold:{y:-6,sx:1.13,sy:1.07,top:25,bottom:48,slant:33,lid:1,gx:0,gy:6,pupil:11,brow:-44,browH:24,mw:100,mt:7,mb:48,fang:1},
 meanExit:{y:295,sx:.95,sy:1.04,top:25,bottom:48,slant:33,lid:1,pupil:11,brow:-44,browH:24,mw:100,mt:7,mb:48,fang:1},
 slump:{y:260,rot:9,sx:.92,sy:1,top:10,bottom:19,lid:1,pupil:13,brow:0,mw:40,mb:2}
};
const S27_TRACKS={
 duck:[[0,'coil'],[.65,'scare',.15],[1.18,'smug',.25],[2.56,'flinch',.10],[2.88,'notice',.18],[3.67,'embarrassed',.12],[4.30,'fondDuck',.5],[4.75,'giggle',.35],[5.13,'spotted',.16,'fast'],[5.46,'reset',.18,'soft'],[5.67,'bluff',.18,'fast'],[6.0,'meanHold',.25,'soft'],[6.99,'meanExit',.26,'soft']],
 party:[[0,'coil'],[.65,'scare',.15],[1.15,'smug',.2],[1.58,'lookup',.14],[2.07,'squashed',.08],[2.24,'flinch',.12],[2.6,'lookup',.18],[3.55,'deadpan',.72],[4.35,'partyJoy',.5],[4.85,'giggle',.35],[5.25,'spotted',.16,'fast'],[5.60,'reset',.18,'soft'],[5.79,'bluff',.16,'fast'],[6.13,'meanHold',.26,'soft'],[7.1,'meanExit',.34,'soft']],
 kitten:[[0,'coil'],[.65,'scare',.15],[1.2,'smug',.22],[2.8,'notice',.23],[3.85,'fondKitten',.38],[4.38,'catShock',.07,'fast'],[4.67,'terror',.10,'fast'],[5.03,'retreat',.25,'fast']]
};
function surprisePose(a,kind){const tr=S27_TRACKS[kind]||S27_TRACKS.duck;let p={...S27_BASE,...S27_POSES[tr[0][1]]};for(let i=1;i<tr.length;i++){const k=tr[i],q={...S27_BASE,...S27_POSES[k[1]]};if(a<k[0]){const duration=Math.min(k[0]-tr[i-1][0],k[3]?k[2]:Math.max(.32,k[2]||.3)),u=se(a,k[0]-duration,k[0],k[3]||'soft');return Object.fromEntries(Object.keys(p).map(n=>[n,sg(p[n],q[n],u)]))}p=q}return p}
function surpriseInkDefs(){return `<defs><pattern id="s27grain" width="83" height="71" patternUnits="userSpaceOnUse"><rect width="83" height="71" fill="white"/>${Array.from({length:22},(_,i)=>`<path d="M${(i*31)%83} ${(i*47)%71}l${1+i%3} ${i%2?1:-1}" stroke="black" stroke-opacity="${i%3===0?.29:.13}" stroke-width="${i%2?1.2:2}"/>`).join('')}</pattern><mask id="s27dry" maskUnits="userSpaceOnUse" x="0" y="0" width="1080" height="1920"><rect width="1080" height="1920" fill="url(#s27grain)"/></mask></defs>`}
function surpriseReaction(){const a=surpriseAge(interaction.rewardClock??3.12),kind=interaction.surprisePlan?.kind||'duck',p=surprisePose(a+.07,kind),body=surprisePose(a-.07,kind),mouthPose=surprisePose(a-.035,kind);let out='';
 if(kind==='duck'){for(const q of [p,body]){q.x*=-1;q.rot*=-1;q.gx*=-1}}
 const thought=kind==='duck'?sp(a,3.6,3.95,4.10,4.35):kind==='party'?sp(a,4.25,4.7,4.85,5.25):sp(a,4.3,4.65,4.9,5.35);
 body.rot+=kind==='duck'?-3*thought:kind==='party'?5*thought:-7*thought;body.x+=kind==='kitten'?-18*thought:0;body.y+=kind==='party'?12*thought:0;
 const shockStart=kind==='duck'?2.55:kind==='party'?2.08:4.28,shockAge=a-shockStart,shock=shockAge>0&&shockAge<.7?Math.sin(shockAge*19)*Math.exp(-shockAge*5):0;body.sy+=.07*shock;body.sx-=.045*shock;body.rot+=(kind==='kitten'?-5:3)*shock;
 const breathe=kind==='party'?sp(a,3.65,4.05,4.15,4.65):sp(a,1.12,1.65,1.8,2.35);body.sy+=.025*breathe;body.sx-=.015*breathe;
 const blink=kind==='duck'?sp(a,3.28,3.34,3.38,3.46):kind==='party'?sp(a,3.72,3.79,3.84,3.94):0;
 for(let i=0;i<2;i++){const side=i?1:-1,rx=p.wide*(i?.95:1),top=p.top*(i?.92:1)*(1-.94*blink),bottom=p.bottom*(i?1.03:1)*(1-.94*blink),tilt=side*p.slant,flat=p.lid;
 const round=[-rx,0,-rx-8,-top*.67,-rx*.45,-top-5,1,-top,rx*.46,-top-3,rx+7,-top*.51,rx,6,rx-1,bottom*.8,rx*.38,bottom+4,-5,bottom,-rx*.68,bottom,-rx-5,bottom*.55,-rx,0];
 const hood=[-rx,-8+tilt,-rx*.68,-8+tilt,-rx*.35,-6+tilt*.5,1,-3,rx*.35,-tilt*.4,rx*.68,-5-tilt,rx,-5-tilt,rx-1,bottom*.8,rx*.38,bottom+4,-5,bottom,-rx*.68,bottom,-rx-5,bottom*.55,-rx,-8+tilt];
 const happy=[-rx,14,-rx,-28,-rx*.5,-67,4,-65,rx*.6,-65,rx,-21,rx,14,rx*.6,-19,rx*.25,-25,-3,-24,-rx*.55,-23,-rx*.85,-10,-rx,14];
 const pts=round.map((v,k)=>sg(sg(v,hood[k],flat),happy[k],p.joy));
 const path=`M${f(pts[0])} ${f(pts[1])} `+[2,8,14,20].map(k=>'C'+pts.slice(k,k+6).map(f).join(' ')).join(' ')+'Z';
 const cx=i?643:414,cy=925+(i?4:-4),by=-top-p.browH,bt=-side*p.brow;
 out+=`<g transform="translate(${cx} ${cy}) rotate(${f(side*(3-p.lid*5))})"><defs><clipPath id="s27eye${i}"><path d="${path}"/></clipPath></defs><path d="${path}" fill="none" stroke="#EDFF00" stroke-width="12" stroke-linecap="round"/><g opacity="${f(1-p.joy)}" clip-path="url(#s27eye${i})"><path d="M${f(p.gx-p.pupil)} ${f(p.gy)}c-2 ${f(-p.pupil*1.2)} ${f(p.pupil*1.6)} ${f(-p.pupil*1.5)} ${f(p.pupil*2)} -2 c4 ${f(p.pupil*1.5)} ${f(-p.pupil*1.7)} ${f(p.pupil*1.6)} ${f(-p.pupil*2)} 2Z" fill="#EDFF00"/></g><path d="M-76 ${f(by+bt)} Q-4 ${f(by-20)} 75 ${f(by-bt)} Q8 ${f(by-7)} -76 ${f(by+bt+9)}Z" fill="#EDFF00"/></g>`;
 }
 const my=1036,mw=mouthPose.mw,mt=mouthPose.mt,mb=mouthPose.mb;
 out+=`<path d="M${f(530-mw)} ${my} C${f(530-mw*.8)} ${f(my-mt-6)} ${f(530+mw*.75)} ${f(my-mt+p.skew)} ${f(530+mw)} ${f(my+p.skew)} C${f(530+mw*.72)} ${f(my+mb)} ${f(530-mw*.7)} ${f(my+mb+5)} ${f(530-mw)} ${my}Z" fill="none" stroke="#EDFF00" stroke-width="10" stroke-linejoin="round"/>`;
 if(p.teeth>.01)out+=`<g opacity="${f(p.teeth)}" fill="none" stroke="#EDFF00" stroke-width="7" stroke-linejoin="round"><path d="M${f(530-mw*.72)} 1040 l${f(mw*.18)} ${f(mb*.6)} l${f(mw*.23)} ${f(-mb*.48)} M${f(530+mw*.25)} ${f(1040+p.skew*.4)}l${f(mw*.2)} ${f(mb*.55)} l${f(mw*.21)} ${f(-mb*.6)}"/></g>`;
 if(p.fang>.01)out+=`<g fill="#EDFF00" opacity="${f(p.fang)}"><path d="M${f(530-mw*.74)} 1033 L${f(530-mw*.47)} ${f(1038+mb*.70)} L${f(530-mw*.25)} 1031Z M${f(530+mw*.28)} 1030 L${f(530+mw*.50)} ${f(1036+mb*.66)} L${f(530+mw*.76)} 1034Z"/></g>`;
 out+=`<g opacity="${f(p.blush*.7)}" stroke="#FF6941" stroke-width="7" stroke-linecap="round"><path d="M345 1013l-7 13m24 -9l-6 14m338 -18l-7 13m24 -9l-6 14"/></g>`;
 if(kind==='kitten'){const sweat=sp(a,4.4,4.6,4.82,5.15);out+=`<path d="M795 865 Q830 918 802 923 Q778 918 795 865Z" fill="#EDFF00" opacity="${f(Math.min(1,sweat))}" transform="translate(0 ${f(26*se(a,4.4,5.5))})"/>`}
 return `<g data-emotion="${kind}" filter="url(#boilEye)" mask="url(#s27dry)" transform="translate(${f(530+body.x)} ${f(970+body.y)}) rotate(${f(body.rot)}) scale(${f(body.sx)} ${f(body.sy)}) translate(-530 -970)">${out}</g>`;
}
function surpriseHands(h,side){const a=surpriseAge(interaction.rewardClock??3.12),kind=interaction.surprisePlan?.kind||'duck';let rot=0,dy=0,dx=0;const left=side==='left';if(kind==='duck'){const flinch=sp(a,2.5,2.58,2.65,2.9);rot=(left?-5:9)*flinch;dy=(left?-7:12)*flinch}else if(kind==='party'){dy=8*sp(a,2.05,2.1,2.16,2.32);rot=(left?-3:4)*sp(a,4.6,4.9,6.2,6.7)}else{const panic=sp(a,4.25,4.36,4.48,4.85);rot=(left?-9:12)*panic;dy=(left?-18:16)*panic;dx=(left?-8:9)*panic}const puffAt=kind==='duck'?5.49:kind==='party'?5.63:5.65,puff=sp(a,puffAt,puffAt+.13,puffAt+.20,puffAt+.46);rot+=(left?-7:7)*puff;dy+=(left?-10:10)*puff;
 const tr=`translate(${f(dx)} ${f(dy)}) rotate(${f(rot)} ${left?330:730} ${left?700:1170})`;const withdraw=kind==='kitten'&&!left?se(a,1.60,2.05,'soft'):0;return{behind:`<g transform="${tr}"${withdraw>0?` opacity="${f(1-withdraw)}"`:""}>${h.behind}</g>`,front:`<g transform="${tr}"${withdraw>0?` opacity="${f(1-withdraw)}"`:""}>${h.front}</g>`}}
function duckArt(a,headOnly=false){const impact=sp(a,2.52,2.57,2.62,2.78),settle=sp(a,2.79,2.9,2.94,3.08),blink=sp(a,4.05,4.13,4.16,4.23),tilt=-24*impact+13*settle-16*se(a,3.5,3.95)+22*se(a,4.35,4.95)-9*se(a,5.1,5.7);return `<g stroke="#2A2A2A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${headOnly?'':`<path d="M-73 -8 Q-51 9 -35 -2 Q-2 -37 39 -15 Q79 1 72 33 Q64 61 13 67 Q-41 69 -61 43 Q-74 25 -73 -8Z" fill="#EDFF00"/><path d="M-48 21 Q-22 4 8 12 Q35 26 21 40 Q-9 55 -42 33" fill="#EDFF00"/><path d="M-42 21 Q-19 39 7 24" fill="none" stroke-width="4"/><path d="M-44 49 Q5 67 49 47" fill="none" opacity=".25"/>`}<g transform="translate(24 -15) rotate(${f(tilt)})"><path d="M-15 18 Q-36 0 -29 -28 Q-24 -60 6 -62 Q36 -64 42 -35 Q49 -6 20 20Z" fill="#EDFF00"/><path d="M30 -30 Q64 -33 70 -20 Q61 -8 35 -11Z" fill="#FF6941"/><path d="M39 -20 L64 -20" fill="none" stroke-width="3"/><path d="M10 -36c-3 -14 13 -16 14 -2c1 13 -13 15 -14 2Z" fill="#2A2A2A" transform="translate(0 ${f(-34*blink)}) scale(1 ${f(1-.92*blink)})" stroke="none"/><path d="M-12 -43 Q-2 -50 7 -48" stroke="#cccccc" opacity=".5" fill="none" stroke-width="6"/></g></g>`}
function hatArt(a){const hit=sp(a,2.04,2.1,2.13,2.27),wobble=Math.sin((a-2.08)*13)*Math.exp(-Math.max(0,a-2.08)*3)*(a>2.08?1:0),tip=14*wobble;return `<g stroke="#2A2A2A" stroke-width="5" stroke-linejoin="round"><path d="M-84 3 Q-47 -62 ${f(-10+tip)} ${f(-159+18*hit)} Q${f(22+tip)} -105 82 1 Q7 26 -84 3Z" fill="#FF6941"/><path d="M-60 -39 Q-16 -29 54 -50 M-36 -89 Q-1 -77 22 -93" fill="none" stroke="#EDFF00" stroke-width="18"/><path d="M-57 -18 Q-40 -68 -14 -128" fill="none" stroke="#cccccc" opacity=".25" stroke-width="7"/><path d="M-84 3 Q0 28 82 1" fill="none" stroke="#EDFF00" stroke-width="14"/><path d="M${f(-10+tip)} ${f(-159+18*hit)}l-17 -7 9 -9 -4 -12 16 5 12 -8 2 13 13 5 -12 8 2 12Z" fill="#EDFF00"/></g>`}
// Restore the original cute character. The four run poses follow the supplied cat GIF.
const KITTEN48={start:.65,stop:2.90,from:1180,to:660,scale:1.35,y:1280,floor:1389};
function kittenProgress(a){const u=clamp((a-KITTEN48.start)/(KITTEN48.stop-KITTEN48.start)),r=.13;return u<r?u*u/(2*r*(1-r)):u>1-r?1-(1-u)*(1-u)/(2*r*(1-r)):(u-r/2)/(1-r)}
function kittenKeys(a,keys){let p=keys[0];for(let i=1;i<keys.length;i++){const q=keys[i];if(a<q[0]){let u=clamp((a-p[0])/(q[0]-p[0]));u=u*u*(3-2*u);return p.slice(1).map((v,j)=>sg(v,q[j+1],u))}p=q}return p.slice(1)}
function kittenGait(a){const cycle=kittenProgress(a)*3,v=cycle%1,active=1-se(a,2.77,3.10,'soft'),bob=kittenKeys(v,[[0,0],[.17,0],[.42,24],[.62,30],[.83,8],[.93,0],[1,0]])[0]*active;return{cycle,active,bob};}
function kittenPaw(x,y,angle,color){return `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(angle)})"><path d="M-6 -8 Q-14 -10 -19 -3 Q-24 4 -18 9 Q-13 13 -8 10 Q-3 13 2 10 Q12 12 12 4 Q11 -5 6 -9Z" fill="${color}" stroke="#2A2A2A" stroke-width="3"/><path d="M-13 3l-1 5m8 -4v5" fill="none" stroke="#2A2A2A" stroke-width="1.8"/></g>`;}
function kittenFoot(a,front,near,gait){
 const v=(gait.cycle+(near?0:.045))%1,stride=(KITTEN48.from-KITTEN48.to)/(3*KITTEN48.scale);let x,y,angle;
 if(front){
  if(v>=.88||v<.16){const z=v>=.88?v-.88:v+.12;x=-36+stride*(z-.12);y=74+gait.bob;angle=0;}
  else [x,y,angle]=kittenKeys(v,[[.16,-31,74,0],[.34,-65,45,15],[.58,-14,38,-35],[.76,-54,49,22],[.88,-36-stride*.12,74+gait.bob,0]]);
 }else{
  if(v>=.04&&v<.30){x=25+stride*(v-.04);y=74+gait.bob;angle=0;}
  else [x,y,angle]=kittenKeys(v,[[0,40,74,0],[.04,25,74+gait.bob,0],[.30,25+stride*.26,74,0],[.45,66,40,-22],[.66,16,46,30],[.88,35,64,10],[1,40,74,0]]);
 }
 return{x:sg(front?-36:40,x,gait.active),y:sg(74,y,gait.active),angle:angle*gait.active};
}
function kittenSwat(a){return kittenKeys(a,[[3.70,-36,74,0,-45,51],[3.96,-49,5,-72,-47,30],[4.19,-55,-9,-98,-49,18],[4.34,-77,-28,20,-60,5],[4.43,-70,-20,0,-55,8],[4.60,-48,8,-68,-46,30],[4.92,-36,74,0,-44,52]]);}
function kittenArt(a){
 const gait=kittenGait(a),walk=gait.active,phase=gait.cycle*Math.PI*2,curl=se(a,6.2,7.6,'soft'),swat=sp(a,4.20,4.34,4.43,4.65),cock=sp(a,3.70,3.96,4.19,4.34),headTilt=-13*se(a,2.85,3.5)+10*se(a,5.15,5.65)+18*curl+3*Math.sin(phase)*walk-8*swat,blink=sp(a,3.20,3.26,3.30,3.38),hiss=sp(a,3.92,4.10,4.83,5.25),meow=Math.max(sp(a,3.45,3.55,3.98,4.15),sp(a,6.38,6.50,7.80,8.12),.85*hiss);let backLegs='',frontLegs='',raisedPaw='';
 for(let i=0;i<4;i++){
  const near=i>=2,front=i%2===0,x=front?-36:40,y=front?18:(near?40:33),foot=kittenFoot(a,front,near,gait);
  let footX=sg(foot.x,front?-25:34,curl),footY=sg(foot.y,49,curl),angle=foot.angle,kneeX=x+(front?-8:18)+(footX-x)*.35,kneeY=sg(51,footY-17,.55);
  const raised=front&&near&&a>=3.70&&a<4.92;
  if(raised)[footX,footY,angle,kneeX,kneeY]=kittenSwat(a);
  const color=near?'#FF6941':'#b3452b';
  const leg=`<g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M${x} ${y-5} Q${f(kneeX)} ${f(kneeY)} ${f(footX)} ${f(footY-2)}" stroke="#2A2A2A" stroke-width="17"/><path d="M${x} ${y-5} Q${f(kneeX)} ${f(kneeY)} ${f(footX)} ${f(footY-2)}" stroke="${color}" stroke-width="11"/></g>${kittenPaw(footX,footY,angle,color)}`;
  if(raised)raisedPaw=leg;else if(near)frontLegs+=leg;else backLegs+=leg;
 }
 const air=gait.bob/24,land=sp(a,2.82,2.91,2.97,3.14)+.45*sp(a,4.59,4.75,4.82,5.02);
 const tailAngle=18*Math.sin(phase*.4)*walk+14*Math.sin((a-2.8)*2.8)*(1-walk)*(1-curl)+17*se(a,3.78,4.35)+18*sp(a,8.15,8.45,8.55,8.9),tailCurl=85*curl,ear=10*sp(a,3.92,4.10,4.83,5.25)-8*sp(a,6.42,6.62,6.85,7.15),wake=sp(a,8.3,8.57,8.70,9.1);
 return `<g transform="translate(0 68) scale(${f(1+.07*land)} ${f(1-.08*land)}) translate(0 -68)" stroke="#2A2A2A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${backLegs}${frontLegs}<path d="M42 28 C${f(103-tailCurl*.2)} ${f(11-tailAngle)} ${f(83-tailCurl)} ${f(-76+tailCurl)} ${f(61-tailCurl)} ${f(-60+tailCurl)}" fill="none" stroke="#2A2A2A" stroke-width="23"/><path d="M42 28 C${f(103-tailCurl*.2)} ${f(11-tailAngle)} ${f(83-tailCurl)} ${f(-76+tailCurl)} ${f(61-tailCurl)} ${f(-60+tailCurl)}" fill="none" stroke="#FF6941" stroke-width="15"/>
 <path d="M-52 30 Q${f(-59+8*curl)} ${f(-3-10*curl)} -21 ${f(-14-7*curl)} Q14 ${f(-25-10*curl)} 42 ${f(-3-9*curl)} Q${f(66+10*curl)} 12 ${f(61+8*curl)} 37 Q31 ${f(65-3*curl)} -17 54 Q-47 52 -52 30Z" fill="#FF6941"/><path d="M27 -5l-3 16m20 -7l-2 16" fill="none" opacity=".4" stroke-width="7"/>
 <g transform="translate(${f(-8-18*curl-24*walk)} ${f(-20+40*curl)}) rotate(${f(headTilt)})"><path d="M-43 -1 Q-48 -10 ${f(-50-ear*.3)} ${f(-50+ear*.5)} L-16 -34 Q6 -42 24 -28 L${f(51+ear*.3)} ${f(-46+ear)} Q52 -18 47 -2 Q49 39 0 43 Q-42 39 -43 -1Z" fill="#FF6941"/><path d="M-40 -34 L-25 -24 M40 -31 L28 -22" stroke="#EDFF00" stroke-width="7"/>
 <path d="M-7 -28l-1 11m13 -10l-2 11" stroke-width="6" opacity=".5"/>
 ${[-1,1].map(side=>`<g transform="translate(${side*21} 4)"><path d="M-10 0 C-12 -18 11 -20 12 -2 C13 18 -10 17 -10 0Z" fill="#2A2A2A" transform="scale(1 ${f((1-.94*curl+.55*curl*wake)*(1-.9*blink))})"/><path d="M-3 -6l3 -3" stroke="#cccccc" stroke-width="4" opacity="${f(1-curl)}"/></g>`).join('')}
 <path d="M-7 19Q0 15 8 19L1 26Z" fill="#2A2A2A"/><path d="M1 26q-2 10 -12 4m12 -4q3 9 12 2" fill="none" stroke-width="3"/><path d="M-5 28Q1 ${f(25+20*meow)} 8 28" fill="#2A2A2A" stroke-width="${f(3+8*meow)}"/>
 <path d="M-34 16l-27 -6m29 14l-29 3m94 -10l25 -8m-24 17l28 2" fill="none" stroke-width="3"/></g><path d="M60 35 Q${f(70-10*curl)} ${f(43+20*curl)} ${f(34-48*curl)} ${f(48+7*curl)} Q${f(10-48*curl)} ${f(50-4*curl)} ${f(4-53*curl)} ${f(40-8*curl)}" fill="none" opacity="${f(curl)}" stroke-width="22" stroke="#2A2A2A"/><path d="M60 35 Q${f(70-10*curl)} ${f(43+20*curl)} ${f(34-48*curl)} ${f(48+7*curl)} Q${f(10-48*curl)} ${f(50-4*curl)} ${f(4-53*curl)} ${f(40-8*curl)}" fill="none" opacity="${f(curl)}" stroke-width="14" stroke="#FF6941"/>${raisedPaw}</g>`;
}
function surpriseScene(t){const p=interaction.surprisePlan;if(!p)return '';const a=surpriseAge(t),fade=1-se(a,10.05,10.65,'soft');let out='';
 if(p.kind==='duck'){
  if(a>=1.75&&a<7.25){const d=clamp((a-1.75)/.80),u=d*d,age=a-2.55,bounce=age<0?0:age<.40?62*Math.sin(age/.40*Math.PI):age<.68?18*Math.sin((age-.40)/.28*Math.PI):0,squash=sp(a,2.53,2.57,2.62,2.72),stretch=sp(a,2.15,2.4,2.48,2.53),x=sg(330,350,d),y=sg(1090,1282,u)-bounce,roll=sg(-40,0,d)+20*Math.sin(age*13)*Math.exp(-Math.max(0,age)*4)*(age>0?1:0),bye=clamp((a-6.75)/.48);out+=`<g opacity="${f(1-se(bye,.65,1))}" transform="translate(${f(x+260*bye)} ${f(y+70-80*bye+200*bye*bye)}) rotate(${f(roll+220*bye)}) scale(${f(1.08+.28*squash-.10*stretch)} ${f(1.08-.32*squash+.14*stretch)}) translate(0 -70)">${duckArt(a)}</g>`}
  const peek=sp(a,8.0,8.28,9.68,9.95);if(peek>0)out+=`<g clip-path="url(#letterWindows)"><g transform="translate(599 ${f(960+50*(1-peek))}) scale(.45)">${duckArt(a,true)}</g></g>`;
 }else if(p.kind==='party'){
  if(a>=1.25){const u=clamp((a-1.25)/.83),hit=sp(a,2.06,2.10,2.14,2.29),release=se(a,6.6,7.6,'soft'),head=surprisePose(a-.07,'party'),wobble=a>2.08?Math.sin((a-2.08)*14)*Math.exp(-(a-2.08)*3):0,settle=a>2.08&&a<2.55?-32*Math.sin((a-2.08)/.47*Math.PI):0;out+=`<g transform="translate(${f(540+25*(1-u)+Math.sin(u*Math.PI)*35+5*wobble)} ${f(420+390*u*u+22*hit+settle+82*release+head.y*.35*(1-release))}) rotate(${f(-20*(1-u)+8*wobble+12*release+head.rot*.65*(1-release))}) scale(1 ${f(1-.1*hit)})">${hatArt(a)}</g>`}
  if(a>=2.88&&a<5.7){const unroll=se(a,2.88,3.02),limp=se(a,3.45,4.1,'soft'),disappear=se(a,5.35,5.7),len=145*unroll*(1-.6*disappear),sag=70*limp;out+=`<g opacity="${f(1-disappear)}" transform="translate(530 1045)"><path d="M0 0Q${f(len*.5)} ${f(-8+sag*.2)} ${f(len)} ${f(6+sag)}" fill="none" stroke="#2A2A2A" stroke-width="20"/><path d="M0 0Q${f(len*.5)} ${f(-8+sag*.2)} ${f(len)} ${f(6+sag)}" fill="none" stroke="#FF6941" stroke-width="14"/><path d="M${f(len)} ${f(6+sag)}q24 -12 14 -28q-20 -8 -18 10" fill="none" stroke="#EDFF00" stroke-width="9"/></g>`}
  for(let i=0;i<16;i++){const b=a-2.94-i*.025;if(b<0||b>2.9)continue;const x=530+Math.sin(i*2.6)*170*b/(1+b*.5)+Math.sin(b*4+i)*13,y=780-180*b+135*b*b;out+=`<path d="M-5 -10l10 3 2 17 -11 -3Z" fill="${i%2?'#FF6941':'#EDFF00'}" opacity="${f(1-se(b,2.1,2.9,'soft'))}" transform="translate(${f(x)} ${f(y)}) rotate(${f(i*47+b*140)}) scale(${f(.2+.8*Math.abs(Math.cos(b*8+i)))} 1)"/>`}
 }else{
  if(a>=KITTEN48.start){const gait=kittenGait(a),rise=sp(a,3.86,4.20,4.43,4.76),x=sg(KITTEN48.from,KITTEN48.to,kittenProgress(a)),y=KITTEN48.y-KITTEN48.scale*gait.bob-20*rise+15*se(a,6.2,7.6,'soft');out+=`<ellipse cx="${f(x)}" cy="${KITTEN48.floor}" rx="${f(78-12*gait.bob/30)}" ry="8" fill="#2A2A2A" opacity=".17"/><g data-cat-rig="48" transform="translate(${f(x)} ${f(y)}) scale(${KITTEN48.scale})">${kittenArt(a)}</g>`}
  const peek=sp(a,8.0,8.23,8.73,8.84);if(peek>0)out+=`<g clip-path="url(#letterWindows)"><g transform="translate(0 ${f(85*(1-peek))})"><rect x="330" y="877" width="350" height="115" fill="#EDFF00"/><path d="M395 938q-5 -10 4 -11q10 2 3 12Z M619 946q-4 -8 3 -10q8 1 3 10Z" fill="#2A2A2A"/></g></g>`;
 }
 // Keep prop details distinct when the character palette changes.
 out=out.replaceAll('#2A2A2A','#2a2a2a');
 if(interaction.theme==='#ff6941')out=out.replaceAll('#FF6941','#cccccc').replaceAll('#b3452b','#858585');
 else if(interaction.theme==='#edff00')out=out.replaceAll('#EDFF00','#cccccc');
 else if(interaction.theme==='#cccccc'&&p.kind==='party')out=out.replaceAll('#FF6941','#2a2a2a');
 return surpriseInkDefs()+`<g data-surprise-craft="34" mask="url(#s27dry)" opacity="${f(fade)}">${out}</g>`;
}
