// Authored animation: the prop causes the acting, then the aftermath lands the joke.
let surpriseBag=[],previousSurprise='';
function nextSurprise(){if(!surpriseBag.length){surpriseBag=['duck','party','kitten'];for(let i=2;i>0;i--){const j=Math.floor(Math.random()*(i+1));[surpriseBag[i],surpriseBag[j]]=[surpriseBag[j],surpriseBag[i]]}if(surpriseBag[0]===previousSurprise)[surpriseBag[0],surpriseBag[1]]=[surpriseBag[1],surpriseBag[0]]}previousSurprise=surpriseBag.shift();return{kind:previousSurprise}}
function surpriseAge(t){return Math.max(0,t-3.12)}
function sg(a,b,u){return a+(b-a)*u}
function se(t,a,b,kind='fast'){return ease((t-a)/(b-a),kind,1)}
function sp(t,a,b,c,d){return se(t,a,b,'fast')*(1-se(t,c,d,'soft'))}
function surpriseFilmTime(t){const a=surpriseAge(t),kind=interaction.surprisePlan?.kind||'duck',close=kind==='duck'?6.65:kind==='party'?6.75:5.35,span=kind==='party'?1.1:.38;if(a>=close)return 5.10+.60*se(a,close,close+span,kind==='party'?'soft':'fast');return 3.12+.98*se(a,0,.70,'soft')}
const S27_BASE={x:0,y:0,sx:1,sy:1,rot:0,wide:94,top:56,bottom:60,slant:0,lid:0,gx:0,gy:0,pupil:15,brow:0,browH:22,mw:66,mt:10,mb:40,skew:0,teeth:0,blush:0,blink:0};
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
 retreat:{y:295,sx:.68,sy:1.16,top:80,bottom:78,pupil:7,brow:32,mw:43,mt:22,mb:57},
 slump:{y:260,rot:9,sx:.92,sy:1,top:10,bottom:19,lid:1,pupil:13,brow:0,mw:40,mb:2}
};
const S27_TRACKS={
 duck:[[0,'coil'],[.65,'scare',.15],[1.18,'smug',.25],[2.56,'flinch',.10],[2.88,'notice',.18],[3.67,'embarrassed',.12],[4.3,'glance',.16],[4.91,'cringe',.11],[6.32,'coil',.42],[6.8,'retreat',.17]],
 party:[[0,'coil'],[.65,'scare',.15],[1.15,'smug',.2],[1.58,'lookup',.14],[2.07,'squashed',.08],[2.24,'flinch',.12],[2.6,'lookup',.18],[3.55,'deadpan',.72],[4.65,'sigh',.35],[5.08,'deadpan',.18],[7.1,'slump',1.25]],
 kitten:[[0,'coil'],[.65,'scare',.15],[1.2,'smug',.22],[2.15,'notice',.23],[3.25,'recoil',.11],[3.52,'terror',.15],[4.38,'brave',.26],[4.80,'recoil',.09],[5.24,'coil',.10],[5.58,'retreat',.13]]
};
function surprisePose(a,kind){const tr=S27_TRACKS[kind]||S27_TRACKS.duck;let p={...S27_BASE,...S27_POSES[tr[0][1]]};for(let i=1;i<tr.length;i++){const k=tr[i],q={...S27_BASE,...S27_POSES[k[1]]};if(a<k[0]){const duration=Math.min(k[0]-tr[i-1][0],Math.max(.32,k[2]||.3)),u=se(a,k[0]-duration,k[0],'soft');return Object.fromEntries(Object.keys(p).map(n=>[n,sg(p[n],q[n],u)]))}p=q}return p}
function surpriseInkDefs(){return `<defs><pattern id="s27grain" width="83" height="71" patternUnits="userSpaceOnUse"><rect width="83" height="71" fill="white"/>${Array.from({length:22},(_,i)=>`<path d="M${(i*31)%83} ${(i*47)%71}l${1+i%3} ${i%2?1:-1}" stroke="black" stroke-opacity="${i%3===0?.29:.13}" stroke-width="${i%2?1.2:2}"/>`).join('')}</pattern><mask id="s27dry" maskUnits="userSpaceOnUse" x="0" y="0" width="1080" height="1920"><rect width="1080" height="1920" fill="url(#s27grain)"/></mask></defs>`}
function surpriseReaction(){const a=surpriseAge(interaction.rewardClock??3.12),kind=interaction.surprisePlan?.kind||'duck',p=surprisePose(a+.07,kind),body=surprisePose(a-.07,kind),mouthPose=surprisePose(a-.035,kind);let out='';
 if(kind==='duck'){for(const q of [p,body]){q.x*=-1;q.rot*=-1;q.gx*=-1}}
 const thought=kind==='duck'?sp(a,3.6,3.95,4.10,4.35):kind==='party'?sp(a,4.25,4.7,4.85,5.25):sp(a,3.2,3.55,3.8,4.25);
 body.rot+=kind==='duck'?-3*thought:kind==='party'?5*thought:-7*thought;body.x+=kind==='kitten'?-18*thought:0;body.y+=kind==='party'?12*thought:0;
 const shockStart=kind==='duck'?2.55:kind==='party'?2.08:3.18,shockAge=a-shockStart,shock=shockAge>0&&shockAge<.7?Math.sin(shockAge*19)*Math.exp(-shockAge*5):0;body.sy+=.07*shock;body.sx-=.045*shock;body.rot+=(kind==='kitten'?-5:3)*shock;
 const breathe=kind==='party'?sp(a,3.65,4.05,4.15,4.65):sp(a,1.12,1.65,1.8,2.35);body.sy+=.025*breathe;body.sx-=.015*breathe;
 const blink=kind==='duck'?sp(a,3.28,3.34,3.38,3.46):kind==='party'?sp(a,3.72,3.79,3.84,3.94):0;
 for(let i=0;i<2;i++){const side=i?1:-1,rx=p.wide*(i?.95:1),top=p.top*(i?.92:1)*(1-.94*blink),bottom=p.bottom*(i?1.03:1)*(1-.94*blink),tilt=side*p.slant,flat=p.lid;
 const round=[-rx,0,-rx-8,-top*.67,-rx*.45,-top-5,1,-top,rx*.46,-top-3,rx+7,-top*.51,rx,6,rx-1,bottom*.8,rx*.38,bottom+4,-5,bottom,-rx*.68,bottom,-rx-5,bottom*.55,-rx,0];
 const hood=[-rx,-8+tilt,-rx*.68,-8+tilt,-rx*.35,-6+tilt*.5,1,-3,rx*.35,-tilt*.4,rx*.68,-5-tilt,rx,-5-tilt,rx-1,bottom*.8,rx*.38,bottom+4,-5,bottom,-rx*.68,bottom,-rx-5,bottom*.55,-rx,-8+tilt];
 const pts=round.map((v,k)=>sg(v,hood[k],flat));
 const path=`M${f(pts[0])} ${f(pts[1])} `+[2,8,14,20].map(k=>'C'+pts.slice(k,k+6).map(f).join(' ')).join(' ')+'Z';
 const cx=i?643:414,cy=925+(i?4:-4),by=-top-p.browH,bt=-side*p.brow;
 out+=`<g transform="translate(${cx} ${cy}) rotate(${f(side*(3-p.lid*5))})"><defs><clipPath id="s27eye${i}"><path d="${path}"/></clipPath></defs><path d="${path}" fill="none" stroke="#EDFF00" stroke-width="12" stroke-linecap="round"/><g clip-path="url(#s27eye${i})"><path d="M${f(p.gx-p.pupil)} ${f(p.gy)}c-2 ${f(-p.pupil*1.2)} ${f(p.pupil*1.6)} ${f(-p.pupil*1.5)} ${f(p.pupil*2)} -2 c4 ${f(p.pupil*1.5)} ${f(-p.pupil*1.7)} ${f(p.pupil*1.6)} ${f(-p.pupil*2)} 2Z" fill="#EDFF00"/></g><path d="M-76 ${f(by+bt)} Q-4 ${f(by-20)} 75 ${f(by-bt)} Q8 ${f(by-7)} -76 ${f(by+bt+9)}Z" fill="#EDFF00"/></g>`;
 }
 const my=1036,mw=mouthPose.mw,mt=mouthPose.mt,mb=mouthPose.mb;
 out+=`<path d="M${f(530-mw)} ${my} C${f(530-mw*.8)} ${f(my-mt-6)} ${f(530+mw*.75)} ${f(my-mt+p.skew)} ${f(530+mw)} ${f(my+p.skew)} C${f(530+mw*.72)} ${f(my+mb)} ${f(530-mw*.7)} ${f(my+mb+5)} ${f(530-mw)} ${my}Z" fill="none" stroke="#EDFF00" stroke-width="10" stroke-linejoin="round"/>`;
 if(p.teeth>.01)out+=`<g opacity="${f(p.teeth)}" fill="none" stroke="#EDFF00" stroke-width="7" stroke-linejoin="round"><path d="M${f(530-mw*.72)} 1040 l${f(mw*.18)} ${f(mb*.6)} l${f(mw*.23)} ${f(-mb*.48)} M${f(530+mw*.25)} ${f(1040+p.skew*.4)}l${f(mw*.2)} ${f(mb*.55)} l${f(mw*.21)} ${f(-mb*.6)}"/></g>`;
 out+=`<g opacity="${f(p.blush*.7)}" stroke="#FF6941" stroke-width="7" stroke-linecap="round"><path d="M345 1013l-7 13m24 -9l-6 14m338 -18l-7 13m24 -9l-6 14"/></g>`;
 if(kind==='kitten'){const sweat=sp(a,3.3,3.5,4.2,4.45)+sp(a,4.8,4.95,5.15,5.4);out+=`<path d="M795 865 Q830 918 802 923 Q778 918 795 865Z" fill="#EDFF00" opacity="${f(Math.min(1,sweat))}" transform="translate(0 ${f(26*se(a,3.3,4.4))})"/>`}
 return `<g data-emotion="${kind}" filter="url(#boilEye)" mask="url(#s27dry)" transform="translate(${f(530+body.x)} ${f(970+body.y)}) rotate(${f(body.rot)}) scale(${f(body.sx)} ${f(body.sy)}) translate(-530 -970)">${out}</g>`;
}
function surpriseHands(h,side){const a=surpriseAge(interaction.rewardClock??3.12),kind=interaction.surprisePlan?.kind||'duck';let rot=0,dy=0,dx=0;const left=side==='left';if(kind==='duck'){const flinch=sp(a,2.5,2.58,2.65,2.9);rot=(left?-5:9)*flinch;dy=(left?-7:12)*flinch}else if(kind==='party'){dy=8*sp(a,2.05,2.1,2.16,2.32);rot=(left?-3:4)*sp(a,4.6,4.9,6.2,6.7)}else{const panic=sp(a,3.13,3.25,3.38,3.75)+sp(a,4.7,4.8,5.03,5.3);rot=(left?-9:12)*panic;dy=(left?-18:16)*panic;dx=(left?-8:9)*panic}const tr=`translate(${f(dx)} ${f(dy)}) rotate(${f(rot)} ${left?330:730} ${left?700:1170})`;return{behind:`<g transform="${tr}">${h.behind}</g>`,front:`<g transform="${tr}">${h.front}</g>`}}
function duckArt(a,headOnly=false){const impact=sp(a,2.52,2.57,2.62,2.78),settle=sp(a,2.79,2.9,2.94,3.08),blink=sp(a,4.05,4.13,4.16,4.23),tilt=-24*impact+13*settle-16*se(a,3.5,3.95)+22*se(a,4.35,4.95)-9*se(a,5.1,5.7);return `<g stroke="#2A2A2A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${headOnly?'':`<path d="M-73 -8 Q-51 9 -35 -2 Q-2 -37 39 -15 Q79 1 72 33 Q64 61 13 67 Q-41 69 -61 43 Q-74 25 -73 -8Z" fill="#EDFF00"/><path d="M-48 21 Q-22 4 8 12 Q35 26 21 40 Q-9 55 -42 33" fill="#EDFF00"/><path d="M-42 21 Q-19 39 7 24" fill="none" stroke-width="4"/><path d="M-44 49 Q5 67 49 47" fill="none" opacity=".25"/>`}<g transform="translate(24 -15) rotate(${f(tilt)})"><path d="M-15 18 Q-36 0 -29 -28 Q-24 -60 6 -62 Q36 -64 42 -35 Q49 -6 20 20Z" fill="#EDFF00"/><path d="M30 -30 Q64 -33 70 -20 Q61 -8 35 -11Z" fill="#FF6941"/><path d="M39 -20 L64 -20" fill="none" stroke-width="3"/><path d="M10 -36c-3 -14 13 -16 14 -2c1 13 -13 15 -14 2Z" fill="#2A2A2A" transform="translate(0 ${f(-34*blink)}) scale(1 ${f(1-.92*blink)})" stroke="none"/><path d="M-12 -43 Q-2 -50 7 -48" stroke="#cccccc" opacity=".5" fill="none" stroke-width="6"/></g></g>`}
function hatArt(a){const hit=sp(a,2.04,2.1,2.13,2.27),wobble=Math.sin((a-2.08)*13)*Math.exp(-Math.max(0,a-2.08)*3)*(a>2.08?1:0),tip=14*wobble;return `<g stroke="#2A2A2A" stroke-width="5" stroke-linejoin="round"><path d="M-84 3 Q-47 -62 ${f(-10+tip)} ${f(-159+18*hit)} Q${f(22+tip)} -105 82 1 Q7 26 -84 3Z" fill="#FF6941"/><path d="M-60 -39 Q-16 -29 54 -50 M-36 -89 Q-1 -77 22 -93" fill="none" stroke="#EDFF00" stroke-width="18"/><path d="M-57 -18 Q-40 -68 -14 -128" fill="none" stroke="#cccccc" opacity=".25" stroke-width="7"/><path d="M-84 3 Q0 28 82 1" fill="none" stroke="#EDFF00" stroke-width="14"/><path d="M${f(-10+tip)} ${f(-159+18*hit)}l-17 -7 9 -9 -4 -12 16 5 12 -8 2 13 13 5 -12 8 2 12Z" fill="#EDFF00"/></g>`}
function kittenProgress(a){const u=clamp((a-1.2)/1.6);return u-Math.sin(u*Math.PI*2)/(Math.PI*2)}
function kittenArt(a){const walk=1-se(a,2.53,2.8,'soft'),phase=clamp((a-1.2)/1.6)*4*Math.PI*2,curl=se(a,5.9,7.4,'soft'),headTilt=-13*se(a,2.75,3.1)+10*se(a,4.3,4.7)+18*curl+6*Math.sin(phase*.5)*walk,meow=sp(a,3.10,3.18,3.33,3.45)+.65*sp(a,4.68,4.76,4.85,4.96);let legs='';
 for(let i=0;i<4;i++){const v=((phase/(Math.PI*2)+[0,.5,.75,.25][i])%1+1)%1,x=(i%2?38:-38),y=29+(i<2?-6:5),contact=v<.62,step=contact?-22+44*v/.62:22-44*se(v,.62,1,'soft'),lift=contact?0:20*Math.sin((v-.62)/.38*Math.PI),stride=step*walk*(1-curl),footY=sg(68-lift*walk,44,curl),footX=sg(x+stride,i%2?33:-23,curl);legs+=`<path d="M${x} ${y}Q${f(sg(x+stride*.55,footX,.4*curl))} ${f(sg(52-lift*.6,39,curl))} ${f(footX)} ${f(footY)}q-15 9 -22 0" fill="none" stroke="${i<2?'#b3452b':'#FF6941'}" stroke-width="17" stroke-linecap="round"/>`}
 const bound=clamp((a-1.2)/1.6)*4,bphase=bound%1,air=Math.sin(bphase*Math.PI)*(a<2.8?1:0),land=sp(a,2.78,2.83,2.87,3.04);
 const tailAngle=18*Math.sin(phase*.4)*walk+14*Math.sin((a-2.8)*2.8)*(1-walk)*(1-curl)+17*se(a,2.9,3.25)+18*sp(a,8.15,8.45,8.55,8.9),tailCurl=85*curl,ear=10*sp(a,3.04,3.28,3.37,3.72)-8*sp(a,4.60,4.78,4.86,5.12),wake=sp(a,8.3,8.57,8.70,9.1);
 return `<g transform="translate(0 68) scale(${f(1-.08*air+.13*land)} ${f(1+.09*air-.15*land)}) translate(0 -68)" stroke="#2A2A2A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">${legs}<path d="M42 28 C${f(103-tailCurl*.2)} ${f(11-tailAngle)} ${f(83-tailCurl)} ${f(-76+tailCurl)} ${f(61-tailCurl)} ${f(-60+tailCurl)}" fill="none" stroke="#2A2A2A" stroke-width="23"/><path d="M42 28 C${f(103-tailCurl*.2)} ${f(11-tailAngle)} ${f(83-tailCurl)} ${f(-76+tailCurl)} ${f(61-tailCurl)} ${f(-60+tailCurl)}" fill="none" stroke="#FF6941" stroke-width="15"/>
 <path d="M-52 30 Q${f(-59+8*curl)} ${f(-3-10*curl)} -21 ${f(-14-7*curl)} Q14 ${f(-25-10*curl)} 42 ${f(-3-9*curl)} Q${f(66+10*curl)} 12 ${f(61+8*curl)} 37 Q31 ${f(65-3*curl)} -17 54 Q-47 52 -52 30Z" fill="#FF6941"/><path d="M27 -5l-3 16m20 -7l-2 16" fill="none" opacity=".4" stroke-width="7"/>
 <g transform="translate(${f(-8-18*curl)} ${f(-20+40*curl)}) rotate(${f(headTilt)})"><path d="M-43 -1 Q-48 -10 ${f(-50-ear*.3)} ${f(-50+ear*.5)} L-16 -34 Q6 -42 24 -28 L${f(51+ear*.3)} ${f(-46+ear)} Q52 -18 47 -2 Q49 39 0 43 Q-42 39 -43 -1Z" fill="#FF6941"/><path d="M-40 -34 L-25 -24 M40 -31 L28 -22" stroke="#EDFF00" stroke-width="7"/>
 <path d="M-7 -28l-1 11m13 -10l-2 11" stroke-width="6" opacity=".5"/>
 ${[-1,1].map(side=>`<g transform="translate(${side*21} 4)"><path d="M-10 0 C-12 -18 11 -20 12 -2 C13 18 -10 17 -10 0Z" fill="#2A2A2A" transform="scale(1 ${f(1-.94*curl+.55*curl*wake)})"/><path d="M-3 -6l3 -3" stroke="#cccccc" stroke-width="4" opacity="${f(1-curl)}"/></g>`).join('')}
 <path d="M-7 19Q0 15 8 19L1 26Z" fill="#2A2A2A"/><path d="M1 26q-2 10 -12 4m12 -4q3 9 12 2" fill="none" stroke-width="3"/><path d="M-5 28Q1 ${f(25+20*meow)} 8 28" fill="#2A2A2A" stroke-width="${f(3+8*meow)}"/>
 <path d="M-34 16l-27 -6m29 14l-29 3m94 -10l25 -8m-24 17l28 2" fill="none" stroke-width="3"/></g><path d="M60 35 Q${f(70-10*curl)} ${f(43+20*curl)} ${f(34-48*curl)} ${f(48+7*curl)} Q${f(10-48*curl)} ${f(50-4*curl)} ${f(4-53*curl)} ${f(40-8*curl)}" fill="none" opacity="${f(curl)}" stroke-width="22" stroke="#2A2A2A"/><path d="M60 35 Q${f(70-10*curl)} ${f(43+20*curl)} ${f(34-48*curl)} ${f(48+7*curl)} Q${f(10-48*curl)} ${f(50-4*curl)} ${f(4-53*curl)} ${f(40-8*curl)}" fill="none" opacity="${f(curl)}" stroke-width="14" stroke="#FF6941"/></g>`;
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
  if(a>=1.2){const walk=kittenProgress(a),settled=se(a,2.53,2.8),x=1090-520*walk,y=1280-38*Math.abs(Math.sin(clamp((a-1.2)/1.6)*4*Math.PI))*(a<2.8?1:0)+15*se(a,5.9,7.4,'soft');out+=`<g transform="translate(${f(x)} ${f(y)}) scale(1.35)">${kittenArt(a)}</g>`}
  const peek=sp(a,8.0,8.23,8.73,8.84);if(peek>0)out+=`<g clip-path="url(#letterWindows)"><g transform="translate(0 ${f(85*(1-peek))})"><rect x="330" y="877" width="350" height="115" fill="#EDFF00"/><path d="M395 938q-5 -10 4 -11q10 2 3 12Z M619 946q-4 -8 3 -10q8 1 3 10Z" fill="#2A2A2A"/></g></g>`;
 }
 // Keep prop details distinct when the character palette changes.
 out=out.replaceAll('#2A2A2A','#2a2a2a');
 if(interaction.theme==='#ff6941')out=out.replaceAll('#FF6941','#cccccc');
 else if(interaction.theme==='#edff00')out=out.replaceAll('#EDFF00','#cccccc');
 else if(interaction.theme==='#cccccc'&&p.kind==='party')out=out.replaceAll('#FF6941','#2a2a2a');
 return surpriseInkDefs()+`<g data-surprise-craft="32" mask="url(#s27dry)" opacity="${f(fade)}">${out}</g>`;
}
