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
 const tr=`translate(${f(dx)} ${f(dy)}) rotate(${f(rot)} ${left?330:730} ${left?700:1170})`;const withdraw=kind==='kitten'&&!left?se(a,2.05,2.65,'soft'):0;return{behind:`<g transform="${tr}"${withdraw>0?` opacity="${f(1-withdraw)}"`:""}>${h.behind}</g>`,front:`<g transform="${tr}"${withdraw>0?` opacity="${f(1-withdraw)}"`:""}>${h.front}</g>`}}
function duckArt(a,headOnly=false){const impact=sp(a,2.52,2.57,2.62,2.78),settle=sp(a,2.79,2.9,2.94,3.08),blink=sp(a,4.05,4.13,4.16,4.23),tilt=-24*impact+13*settle-16*se(a,3.5,3.95)+22*se(a,4.35,4.95)-9*se(a,5.1,5.7);return `<g stroke="#2A2A2A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${headOnly?'':`<path d="M-73 -8 Q-51 9 -35 -2 Q-2 -37 39 -15 Q79 1 72 33 Q64 61 13 67 Q-41 69 -61 43 Q-74 25 -73 -8Z" fill="#EDFF00"/><path d="M-48 21 Q-22 4 8 12 Q35 26 21 40 Q-9 55 -42 33" fill="#EDFF00"/><path d="M-42 21 Q-19 39 7 24" fill="none" stroke-width="4"/><path d="M-44 49 Q5 67 49 47" fill="none" opacity=".25"/>`}<g transform="translate(24 -15) rotate(${f(tilt)})"><path d="M-15 18 Q-36 0 -29 -28 Q-24 -60 6 -62 Q36 -64 42 -35 Q49 -6 20 20Z" fill="#EDFF00"/><path d="M30 -30 Q64 -33 70 -20 Q61 -8 35 -11Z" fill="#FF6941"/><path d="M39 -20 L64 -20" fill="none" stroke-width="3"/><path d="M10 -36c-3 -14 13 -16 14 -2c1 13 -13 15 -14 2Z" fill="#2A2A2A" transform="translate(0 ${f(-34*blink)}) scale(1 ${f(1-.92*blink)})" stroke="none"/><path d="M-12 -43 Q-2 -50 7 -48" stroke="#cccccc" opacity=".5" fill="none" stroke-width="6"/></g></g>`}
function hatArt(a){const hit=sp(a,2.04,2.1,2.13,2.27),wobble=Math.sin((a-2.08)*13)*Math.exp(-Math.max(0,a-2.08)*3)*(a>2.08?1:0),tip=14*wobble;return `<g stroke="#2A2A2A" stroke-width="5" stroke-linejoin="round"><path d="M-84 3 Q-47 -62 ${f(-10+tip)} ${f(-159+18*hit)} Q${f(22+tip)} -105 82 1 Q7 26 -84 3Z" fill="#FF6941"/><path d="M-60 -39 Q-16 -29 54 -50 M-36 -89 Q-1 -77 22 -93" fill="none" stroke="#EDFF00" stroke-width="18"/><path d="M-57 -18 Q-40 -68 -14 -128" fill="none" stroke="#cccccc" opacity=".25" stroke-width="7"/><path d="M-84 3 Q0 28 82 1" fill="none" stroke="#EDFF00" stroke-width="14"/><path d="M${f(-10+tip)} ${f(-159+18*hit)}l-17 -7 9 -9 -4 -12 16 5 12 -8 2 13 13 5 -12 8 2 12Z" fill="#EDFF00"/></g>`}
// Real feline walk: paws keep their world-space contacts while the trunk passes over them.
// Last contacts are authored separately so stopping never drags all four feet into a pose.
const KITTEN46={start:.45,stop:3.42,from:1260,to:720,scale:1.4,floor:1305};
function kittenProgress(a){const u=clamp((a-KITTEN46.start)/(KITTEN46.stop-KITTEN46.start)),r=.13;return u<r?u*u/(2*r*(1-r)):u>1-r?1-(1-u)*(1-u)/(2*r*(1-r)):(u-r/2)/(1-r)}
function kittenRoot(a){return (KITTEN46.from-KITTEN46.to)*(1-kittenProgress(a))/KITTEN46.scale}
function kittenEase(u){u=clamp(u);return u*u*(3-2*u)}
function kittenKeys(a,keys){let p=keys[0];for(let i=1;i<keys.length;i++){const q=keys[i];if(a<q[0]){const u=kittenEase((a-p[0])/(q[0]-p[0]));return p.slice(1).map((v,j)=>sg(v,q[j+1],u))}p=q}return p.slice(1)}
function kittenFoot(a,front,near){
 // Lateral sequence: near hind, near fore, far hind, far fore (not paired diagonal trot).
 const phase=front?(near?.225:.675):(near?0:.45),first=1.15+phase,period=.9,swing=.27,rest=front?(near?-62:-53):(near?49:61),end=first+period*2;
 const target=t=>t>=end-.001?rest:kittenRoot(t)+rest-43;
 let prev=first-period*2,px=target(prev),x=px,y=near?0:-6,angle=0;
 for(let i=-1;i<3;i++){
  const land=first+period*i,next=target(land);
  if(a<land-swing)break;
  if(a<land){const u=clamp((a-(land-swing))/swing),s=kittenEase(u);x=sg(px,next,s);y-=29*Math.sin(Math.PI*u);angle=38*Math.sin(Math.PI*u);return{x:x-kittenRoot(a),y,angle,contact:false}}
  x=px=next;prev=land;
 }
 return{x:x-kittenRoot(a),y,angle,contact:true};
}
// Two rigid limb segments; elbow direction differs from the cat's backward-pointing hock.
function kittenJoint(root,tip,l1,l2,bend){const dx=tip.x-root.x,dy=tip.y-root.y,d=Math.min(l1+l2-.01,Math.max(.01,Math.hypot(dx,dy))),along=(l1*l1-l2*l2+d*d)/(2*d),side=Math.sqrt(Math.max(0,l1*l1-along*along))*bend,n=Math.hypot(dx,dy)||1;return{x:root.x+dx/n*along-dy/n*side,y:root.y+dy/n*along+dx/n*side}}
function kittenPaw(x,y,angle,color,spread=0){return `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(angle)})"><path d="M5 -11Q-1 -12 -5 -7Q-17 -6 -18 0Q-18 5 -10 5L7 5Q12 4 10 -2Z" fill="${color}" stroke="#2A2A2A" stroke-width="3"/><path d="M-11 0v3m6 -3v3" stroke="#2A2A2A" stroke-width="1.6" fill="none"/>${spread>.01?`<path d="M-16 -1l${f(-5*spread)} -4m6 3l${f(-4*spread)} -6m7 5l${f(-2*spread)} -7" stroke="#cccccc" stroke-width="2" fill="none"/>`:''}</g>`}
function kittenState(a){
 const moving=1-se(a,3.18,3.65,'soft'),phase=(a-1.1)/.9*Math.PI*2,rest=se(a,5.65,6.55,'soft'),alert=sp(a,8.02,8.24,8.72,9.04);
 // Head and trunk stay supported during the paw action. Only a small preparatory weight transfer.
 const load=sp(a,3.72,3.97,4.47,4.85),shift=4*load,breath=1.1*Math.sin(a*2.1)*(1-moving);
 const shoulder={x:-55+shift+4*Math.sin(phase-.4)*moving,y:-107+3*rest+4*Math.sin(phase)*moving+breath},hip={x:55+3*Math.sin(phase+1.2)*moving,y:-96+2*rest+2.6*Math.sin(phase+1.3)*moving+breath};
 const look=se(a,3.08,3.75,'soft'),head={x:shoulder.x-37-5*look,y:-145-6*look+2*rest+breath,angle:12*look-8*rest+5*alert};
 return{moving,phase,rest,alert,load,shoulder,hip,head};
}
function kittenCurve(u,p0,p1,p2,p3){u=clamp(u);const v=1-u;return{x:v*v*v*p0[0]+3*v*v*u*p1[0]+3*v*u*u*p2[0]+u*u*u*p3[0],y:v*v*v*p0[1]+3*v*v*u*p1[1]+3*v*u*u*p2[1]+u*u*u*p3[1]}}
function kittenStrike(a){
 let p,angle,spread=0;
 if(a<4.10){const u=kittenEase((a-3.76)/.34);p=kittenCurve(u,[-62,-7],[-59,-47],[-53,-112],[-86,-139]);angle=-105*u}
 else if(a<4.21){p={x:-86,y:-139};angle=-105}
 else if(a<4.36){const u=se(a,4.21,4.36,'fast');p=kittenCurve(u,[-86,-139],[-95,-176],[-125,-177],[-142,-150]);const flick=kittenEase((u-.63)/.32);angle=sg(-105,28,flick);spread=flick}
 else if(a<4.58){const u=se(a,4.36,4.58,'fast');p=kittenCurve(u,[-142,-150],[-126,-164],[-61,-139],[-79,-121]);angle=sg(28,-100,kittenEase(u));spread=1-clamp(u*3)}
 else{const u=kittenEase((a-4.58)/.36);p=kittenCurve(u,[-79,-121],[-66,-99],[-50,-39],[-62,-7]);angle=-100*(1-u)}
 return{...p,angle,spread};
}
function kittenLeg(a,front,near,s){
 const color=near?'#FF6941':'#b3452b',foot=kittenFoot(a,front,near),root=front?{x:s.shoulder.x+(near?0:8),y:s.shoulder.y+12}:{x:s.hip.x+(near?0:8),y:s.hip.y+4};
 let tip={x:foot.x,y:foot.y-7},angle=foot.angle,spread=0;
 if(front&&near&&a>=3.76){
  // Lift compactly, hold the flexed wrist, flick across the target, then fold back to the chest.
  const q=kittenStrike(a);tip={x:q.x,y:q.y};angle=q.angle;spread=q.spread;
 }
 let path;
 if(front){const elbow=kittenJoint(root,tip,44,65,-1);path=`M${f(root.x)} ${f(root.y)}Q${f(root.x+10)} ${f(root.y+24)} ${f(elbow.x)} ${f(elbow.y)}L${f(tip.x)} ${f(tip.y)}`}
 else{const hock={x:tip.x+15,y:tip.y-24},knee=kittenJoint(root,hock,41,42,1);path=`M${f(root.x)} ${f(root.y)}Q${f(knee.x)} ${f(knee.y-5)} ${f(knee.x)} ${f(knee.y)}L${f(hock.x)} ${f(hock.y)}L${f(tip.x)} ${f(tip.y)}`}
 return `<g data-cat-limb="${near?'near':'far'}-${front?'fore':'hind'}" stroke-linecap="round" stroke-linejoin="round"><path d="${path}" fill="none" stroke="#2A2A2A" stroke-width="${front?18:23}"/><path d="${path}" fill="none" stroke="${color}" stroke-width="${front?12:17}"/>${kittenPaw(tip.x,tip.y+5,angle,color,spread)}</g>`;
}
function kittenArt(a){
 const s=kittenState(a),{shoulder:b,hip:h,head,rest,alert,load}=s,ink='#2A2A2A';
 const tail=kittenKeys(a,[[1.1,126,-153,142,-206,118,-204],[3.55,123,-151,135,-196,116,-198],[4.02,138,-133,155,-170,142,-186],[4.38,143,-128,159,-163,140,-180],[4.9,119,-147,137,-194,117,-197],[5.65,114,-137,142,-155,128,-167],[6.55,130,-125,155,-174,133,-180],[8.1,130,-125,155,-174,133,-180],[8.35,125,-129,152,-184,124,-186],[8.8,130,-125,155,-174,133,-180]]),tailSway=3*Math.sin(s.phase*.5)*s.moving;
 const tailPath=`M${f(h.x+28)} ${f(h.y-4)}C${f(tail[0])} ${f(tail[1])} ${f(tail[2]+tailSway)} ${f(tail[3])} ${f(tail[4]+tailSway)} ${f(tail[5])}`;
 const body=`M${f(b.x-12)} ${f(b.y-15)}C${f(b.x+16)} ${f(b.y-32)} ${f(h.x-30)} ${f(h.y-31)} ${f(h.x+8)} ${f(h.y-22)}C${f(h.x+47)} ${f(h.y-18)} ${f(h.x+48)} ${f(h.y+25)} ${f(h.x+20)} ${f(h.y+42)}C${f(h.x-10)} ${f(h.y+44)} ${f(b.x+31)} ${f(b.y+55)} ${f(b.x-2)} ${f(b.y+43)}Q${f(b.x-26)} ${f(b.y+25)} ${f(b.x-12)} ${f(b.y-15)}Z`;
 const blink=sp(a,2.37,2.43,2.47,2.54)+sp(a,5.25,5.33,5.4,5.53),eye=1-.90*blink-.78*rest*(1-alert),hiss=sp(a,3.92,4.10,4.83,5.25),meow=Math.max(sp(a,3.45,3.55,3.98,4.15),sp(a,6.38,6.50,7.80,8.12),.85*hiss),ear=sp(a,3.77,3.96,4.83,5.25);
 let out=`<g stroke="${ink}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">${kittenLeg(a,false,false,s)}${kittenLeg(a,true,false,s)}<path d="${tailPath}" fill="none" stroke="${ink}" stroke-width="20"/><path d="${tailPath}" fill="none" stroke="#FF6941" stroke-width="13"/><path d="${body}" fill="#FF6941"/>`;
 // The near haunch and scapula make the leg roots part of the cat, not dangling sticks.
 out+=kittenLeg(a,false,true,s)+`<path d="M${f(h.x-8)} ${f(h.y-17)}Q${f(h.x+30)} ${f(h.y-16)} ${f(h.x+32)} ${f(h.y+11)}Q${f(h.x+31)} ${f(h.y+27)} ${f(h.x+14)} ${f(h.y+35)}" fill="#FF6941" stroke-width="3"/>`;
 out+=(a>=3.76&&a<4.94?'':kittenLeg(a,true,true,s))+`<path d="M${f(b.x-13)} ${f(b.y-20)}Q${f(b.x+7)} ${f(b.y-25)} ${f(b.x+14)} ${f(b.y-3)}L${f(b.x+7)} ${f(b.y+17)}" fill="#FF6941" stroke="none"/><path d="M-3 ${f(b.y-21)}l-2 15m22 -16l-4 17m22 -13l-4 14" fill="none" stroke-width="6" opacity=".42"/>`;
 out+=`<path d="M${f(b.x+5)} ${f(b.y-15)}Q${f(b.x-3)} ${f(b.y-49)} ${f(head.x+12)} ${f(head.y+4)}L${f(head.x+16)} ${f(head.y+27)}Q${f(b.x-32)} ${f(b.y+17)} ${f(b.x-10)} ${f(b.y+26)}Z" fill="#FF6941" stroke="none"/><g transform="translate(${f(head.x)} ${f(head.y)}) rotate(${f(head.angle)})"><path d="M-24 -16L${f(-29-5*ear)} ${f(-49+12*ear)}Q-9 -43 -2 -28Q12 -32 22 -22L${f(40+6*ear)} ${f(-42+13*ear)}L35 -7Q42 15 18 29Q-7 39 -25 24L-42 17Q-54 12 -43 1L-34 -1Z" fill="#FF6941"/><path d="M-23 -35l14 10m39 -5l-6 12" stroke="#EDFF00" stroke-width="6"/>
 <path d="M-27 -20l8 9m0 -12l5 10" stroke-width="4" opacity=".5"/>
 <g transform="translate(-18 -3) scale(1 ${f(Math.max(.08,eye))})"><path d="M-14 0Q-3 -15 11 -3Q1 10 -14 0Z" fill="#EDFF00" stroke-width="3"/><ellipse cx="-5" cy="-1" rx="3.5" ry="8" fill="${ink}" stroke="none"/><circle cx="-6" cy="-4" r="1.8" fill="#cccccc" stroke="none"/></g><path d="M-34 -3q-5 2 -6 5" fill="none" stroke-width="3"/>
 <path d="M-42 1l-6 7 8 3 3 -7Z" fill="${ink}" stroke="none"/><path d="M-39 11q4 9 13 6" fill="none" stroke-width="2.5"/><path d="M-39 15Q-34 ${f(17+13*meow)} -25 18" fill="${ink}" stroke-width="${f(2+4*meow)}"/>
 <path d="M-30 12l-28 -5m29 12l-29 3m37 -5l-3 12" fill="none" stroke-width="2.5"/><path d="M15 3q11 9 5 19" fill="none" opacity=".35" stroke-width="3"/></g>`;
 if(a>=3.76&&a<4.94)out+=kittenLeg(a,true,true,s);
 return out+'</g>';
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
  if(a>=KITTEN46.start){const x=KITTEN46.to+KITTEN46.scale*kittenRoot(a);out+=`<ellipse cx="${f(x)}" cy="${KITTEN46.floor+8}" rx="140" ry="9" fill="#2A2A2A" opacity=".17"/><g data-cat-rig="46" transform="translate(${f(x)} ${KITTEN46.floor}) scale(${KITTEN46.scale})">${kittenArt(a)}</g>`}
  const peek=sp(a,8.0,8.23,8.73,8.84);if(peek>0)out+=`<g clip-path="url(#letterWindows)"><g transform="translate(0 ${f(85*(1-peek))})"><rect x="330" y="877" width="350" height="115" fill="#EDFF00"/><path d="M395 938q-5 -10 4 -11q10 2 3 12Z M619 946q-4 -8 3 -10q8 1 3 10Z" fill="#2A2A2A"/></g></g>`;
 }
 // Keep prop details distinct when the character palette changes.
 out=out.replaceAll('#2A2A2A','#2a2a2a');
 if(interaction.theme==='#ff6941')out=out.replaceAll('#FF6941','#cccccc').replaceAll('#b3452b','#858585');
 else if(interaction.theme==='#edff00')out=out.replaceAll('#EDFF00','#cccccc');
 else if(interaction.theme==='#cccccc'&&p.kind==='party')out=out.replaceAll('#FF6941','#2a2a2a');
 return surpriseInkDefs()+`<g data-surprise-craft="34" mask="url(#s27dry)" opacity="${f(fade)}">${out}</g>`;
}
