// The current film supplies the artwork. Interaction only controls its time.
const scene=document.querySelector('#scene'),pull=document.querySelector('#pull'),statusEl=document.querySelector('#status'),modeButton=document.querySelector('#mode'),hint=document.querySelector('#hint');
let lastDrawKey='',activePointer=null;
let mode='idle',held=false,dragged=false,startX=0,startY=0,heldAt=0,phaseAt=performance.now(),last=0,time=0,progress=0,abortFrom=0,playFrom=3.12,selected=0,lastReward='',trails=[];
const choices=['bats','ghosts','eyes','surprise'],labels=['Bats','Ghosts','Eyeballs','Surprise'];
function pick(){const name=choices[selected];interaction.reward=name;if(name==='surprise')interaction.surprisePlan=nextSurprise();lastReward=name;}
function clear(){stopStorySound();activePointer=null;restartIdle();trails=[];held=false;mode='idle';interaction.open=null;interaction.look=0;progress=0;phaseAt=performance.now();pull.setAttribute('aria-pressed','false');statusEl.textContent='Clear';}
function begin(x,y){hint.classList.add('is-dismissed');stopStorySound();noteInput();if(mode==='playing'&&interaction.reward!=='surprise'&&time>=4.04&&time<rewardEnd(interaction.reward)-.4)trails.push({time,at:performance.now(),reward:interaction.reward});trails=trails.slice(-1);interaction.reward=choices[selected];held=true;dragged=false;progress=0;startX=x;startY=y;heldAt=performance.now();mode='holding';interaction.open=0;pull.setAttribute('aria-pressed','true');}
function pullTime(q){if(interaction.reward==='bats'){let lo=3.48,hi=3.60;for(let i=0;i<14;i++){const m=(lo+hi)/2;if(CREATE_STORY.state(m).rip<q)lo=m;else hi=m}return(lo+hi)/2;}let lo=3.44,hi=3.84;for(let i=0;i<18;i++){const m=(lo+hi)/2;if(.08*ramp(m,3.44,3.60,'soft')+.92*ramp(m,3.60,3.84,'fast')<q)lo=m;else hi=m;}return(lo+hi)/2;}
function release(cancel=false){if(!held)return;held=false;pull.setAttribute('aria-pressed','false');phaseAt=performance.now();if(cancel||(dragged&&progress<.5)){mode='abort';abortFrom=progress;return;}pick();playFrom=dragged?pullTime(progress):(interaction.reward==='bats'?2.48:3.12);startStorySound(playFrom);mode='playing';interaction.open=null;statusEl.textContent=labels[choices.indexOf(interaction.reward)]+' released';}
pull.addEventListener('pointerdown',e=>{if(e.button!==0||activePointer!==null)return;e.preventDefault();activePointer=e.pointerId;pull.setPointerCapture(e.pointerId);begin(e.clientX,e.clientY);render(performance.now())});
window.addEventListener('pointermove',e=>{if(!held||e.pointerId!==activePointer)return;const d=Math.hypot(e.clientX-startX,e.clientY-startY);if(d>14)dragged=true;if(dragged)progress=clamp((d-6)/Math.min(150,innerWidth*.28));interaction.look=clamp((e.clientX/innerWidth-.5)*48,-24,24);});
pull.addEventListener('pointerup',e=>{if(e.pointerId!==activePointer)return;activePointer=null;release();render(performance.now())});pull.addEventListener('pointercancel',e=>{if(e.pointerId!==activePointer)return;activePointer=null;release(true)});pull.addEventListener('lostpointercapture',()=>{activePointer=null;release(true)});
pull.addEventListener('keydown',e=>{if([' ','Enter'].includes(e.key)){e.preventDefault();if(!e.repeat)begin(innerWidth/2,innerHeight/2)}if(e.key==='Escape')clear();});pull.addEventListener('keyup',e=>{if([' ','Enter'].includes(e.key)){e.preventDefault();release()}});pull.addEventListener('blur',()=>release(true));window.addEventListener('blur',()=>{activePointer=null;release(true)});
function suspendPlay(){clear();lastDrawKey='';}
document.addEventListener('visibilitychange',()=>{if(document.hidden)suspendPlay();else{last=0;perfPrevious=0;render(performance.now());}});window.addEventListener('pagehide',suspendPlay);window.addEventListener('pageshow',()=>{last=0;perfPrevious=0;render(performance.now());});
modeButton.onclick=()=>{selected=(selected+1)%choices.length;modeButton.textContent='Mode: '+labels[selected];statusEl.textContent=labels[selected]+' selected';};document.querySelector('#clear').onclick=clear;
for(const b of document.querySelectorAll('.sw'))b.onclick=()=>{interaction.theme=b.dataset.c;warmTheme(interaction.theme);const dark=b.dataset.c==='#2a2a2a',style=document.documentElement.style;style.setProperty('--bg',b.dataset.c);style.setProperty('--mode-accent',b.dataset.c==='#edff00'?'#ff6941':'#edff00');style.setProperty('--ink',dark?'#cccccc':'#2a2a2a');style.setProperty('--btn-fg',dark?'#2a2a2a':b.dataset.c);style.setProperty('--hov',dark?'#d9d9d9':'#262626');for(const a of document.querySelectorAll('.sw'))a.setAttribute('aria-pressed',String(a===b));};
function render(now){interaction.clock=now/1000;interaction.idleExpression=null;
if(mode==='idle'){time=1.8;interaction.open=0;interaction.idleExpression=idleAct(now);}
if(mode==='holding'){const age=(now-heldAt)/1000;interaction.open=dragged?progress:0;time=dragged?pullTime(progress):2.92+.38*(.5-.5*Math.cos(age*4));interaction.look=dragged?interaction.look:16*Math.sin(age*4);}
if(mode==='playing'){time=Math.min(rewardEnd(interaction.reward),playFrom+(now-phaseAt)/1000);interaction.open=null;interaction.look=0;if(time>=rewardEnd(interaction.reward))clear();}
if(mode==='abort'){const age=(now-phaseAt)/1000;progress=abortFrom*(1-ease(age/.45,'soft',1));interaction.open=progress;time=pullTime(progress);if(age>.5)clear();}
if(mode==='idle'&&!interaction.idleExpression)interaction.idleExpression=idleAct(now);
const drawKey=[mode,mode==='playing'?Math.floor(time*25):time.toFixed(3),interaction.open,interaction.look,interaction.theme,interaction.reward,Math.floor(now/80)%4,trails.length,mode==='idle'?now:''].join('|');if(drawKey===lastDrawKey)return;lastDrawKey=drawKey;
if(mode==='idle'&&presentIdle()){scene.dataset.mode=mode;scene.dataset.expression=interaction.idleExpression.name;return;}
trails=trails.filter(x=>x.time+(now-x.at)/1000<rewardEnd(x.reward));let art=interaction.reward==='bats'&&mode!=='idle'?CREATE_STORY.interactiveSvg(time,interaction.open):interaction.reward==='surprise'&&mode==='playing'?CREATE_STORY.surpriseSvg(time):svg(time);if(!interaction.reduced&&trails.length)art=art.replace(/<\/svg>$/,trails.map(x=>rewards(x.time+(now-x.at)/1000,x.reward)).join('')+'</svg>');if(innerWidth>innerHeight)art=art.replace('viewBox="0 0 1080 1920"','viewBox="0 400 1080 1080"');art=applyPalette(art,interaction.theme);
presentScene(preparedArt(art,interaction.theme),mode==='idle');notePresented();scene.dataset.mode=mode;scene.dataset.time=time.toFixed(3);scene.dataset.selection=choices[selected];scene.dataset.surprise=interaction.reward==='surprise'?interaction.surprisePlan?.kind||'':'';scene.dataset.reward=interaction.reward;scene.dataset.progress=progress.toFixed(3);scene.dataset.source=interaction.reward==='bats'&&mode!=='idle'?'video-v27-full-counter':interaction.reward==='surprise'&&mode==='playing'?'surprise-v34-authored':'v20-full-counter-peek-v09-alternates';scene.dataset.expression=interaction.idleExpression?.name||mode;}
function tick(now){requestAnimationFrame(tick);if(document.hidden)return;const interval=mode==='playing'?40:16;if(now-last<interval)return;last=now-((now-last)%interval);const started=performance.now();render(now);noteFrame(now,performance.now()-started)}
// Warm only the selected palette; keep decoded images for quick repeat interactions.
render(performance.now());
const warmFiles=['creature-atlas-r01','eye-cels-r01','hand-cels-r01','hand-cels-slim-r01','tear','bat-panel-0--1','bat-panel-0-0','bat-panel-0-1','bat-panel-1--1','bat-panel-1-0','bat-panel-1-1'];
const warmImages=new Map();
function warmImage(file){
 if(warmImages.has(file))return warmImages.get(file).promise;
 const image=new Image();let finish;
 const promise=new Promise(resolve=>{finish=resolve});warmImages.set(file,{image,promise});
 image.onload=()=>{if(image.decode)image.decode().catch(()=>{}).then(finish);else finish()};
 image.onerror=()=>{warmImages.delete(file);finish()};
 image.src='assets/mobile/'+file+'.webp';return promise;
}
function warmTheme(theme){return Promise.all([...warmFiles.map(f=>f+'-'+theme.slice(1)), 'holeThreshold','paperSurfaceThreshold','paperGrain'].map(warmImage));}
warmTheme(interaction.theme).then(()=>{perfSample.ready=performance.now()-perfStart;});
requestAnimationFrame(tick);
