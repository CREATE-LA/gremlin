const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
(async()=>{
let now=0;const docEvents={},winEvents={};
function player(block=false){return {attrs:{},events:{},plays:0,readyState:0,duration:NaN,currentTime:0,paused:true,block,
 setAttribute(k,v){this.attrs[k]=v},removeAttribute(k){delete this.attrs[k]},addEventListener(n,f){this.events[n]=f},getAttribute(n){return this.attrs[n]??null},
 set src(v){this.attrs.src=v;this.readyState=0;this.duration=NaN;this.currentTime=0},get src(){return this.attrs.src},
 pause(){this.paused=true},play(){this.plays++;if(this.block)return Promise.reject(new Error('Autoplay blocked'));this.paused=false;return Promise.resolve()}}}
const audio=player(),music=player(true),button={style:{},attrs:{},contains:()=>false,setAttribute(k,v){this.attrs[k]=v}};
const document={hidden:false,querySelector:s=>s==='#score'?audio:s==='#music'?music:button,addEventListener(n,f){docEvents[n]=f}};
const context=vm.createContext({document,window:{addEventListener(n,f){winEvents[n]=f}},performance:{now:()=>now},interaction:{reward:'bats'},mode:'idle',playFrom:0,phaseAt:0,console});
vm.runInContext(fs.readFileSync(__dirname+'/../../sound.js','utf8'),context);const run=s=>vm.runInContext(s,context);const settle=async()=>{await Promise.resolve();await Promise.resolve()};
assert.equal(music.plays,1,'default enabled attempts music autoplay');assert.equal(button.style.opacity,'1');await settle();assert(music.paused,'blocked autoplay is caught');
music.block=false;docEvents.touchend({target:{}});await settle();assert(!music.paused,'first touch starts music without sound toggle');music.currentTime=4;
docEvents.click({target:{}});assert.equal(music.plays,2,'no duplicate music player/restart');
run('startStorySound(2.48)');assert.equal(audio.plays,1);assert.equal(audio.src,'assets/story-v45.m4a?v=55.4');now=700;audio.readyState=1;audio.duration=8.682667;audio.events.loadedmetadata();assert(Math.abs(audio.currentTime-3.18)<.001,'late metadata catches up');
run('stopStorySound()');const before=audio.currentTime;now=1200;audio.events.playing?.();assert.equal(audio.currentTime,before);assert(audio.paused);assert(!music.paused&&music.currentTime===4,'Clear stops FX only, music stays continuous');
for(const kind of ['bats','ghosts','eyes','duck','party','kitten']){context.interaction.reward=['duck','party','kitten'].includes(kind)?'surprise':kind;context.interaction.surprisePlan={kind};run('startStorySound(3.12)');assert(audio.src.includes(kind==='bats'?'story':kind));assert(!audio.paused);assert(!music.paused)}
now+=500;audio.readyState=1;audio.duration=14;audio.events.loadedmetadata();assert(Math.abs(audio.currentTime-3.62)<.001);const settled=audio.currentTime;now+=20;audio.events.playing?.();assert.equal(audio.currentTime,settled,'no seek/playing loop');
context.mode='playing';context.playFrom=6.5;context.phaseAt=now;button.onclick();assert(audio.paused&&music.paused,'mute pauses both');docEvents.click({target:button});assert(music.paused,'toggle gesture cannot re-enable muted music');button.onclick();await settle();assert(!audio.paused&&!music.paused);assert.equal(music.currentTime,4,'unmute keeps music position');assert(Math.abs(audio.currentTime-6.5)<.001);
// Mobile decoders can report >80ms of startup/seek latency. Once aligned,
// playing/timeupdate must never keep seeking and interrupting the audible stream.
await settle();
for(let i=0;i<20;i++){
 now+=160;const decoderTime=audio.currentTime+.04;audio.currentTime=decoderTime;
 audio.events.playing?.();audio.events.timeupdate?.();await settle();
 assert.equal(audio.currentTime,decoderTime,'decoder latency must not cause repeated corrective seeks');
}

// Late play-promise completion must not re-seek an already aligned stream.
const nativeEffectsPlay=audio.play;let resolveSlowStart;
audio.play=function(){this.plays++;this.paused=false;return new Promise(resolve=>{resolveSlowStart=resolve})};
run('startStorySound(3.12)');audio.readyState=1;audio.duration=14;audio.events.loadedmetadata();
const initialAlignment=audio.currentTime;now+=300;resolveSlowStart();await settle();
assert.equal(audio.currentTime,initialAlignment,'slow play resolution must not add a corrective seek');
now+=300;audio.events.loadedmetadata();assert.equal(audio.currentTime,initialAlignment,'metadata can align each attempt only once');
audio.play=nativeEffectsPlay;
document.hidden=true;docEvents.visibilitychange();assert(audio.paused&&music.paused);run('startStorySound(0)');assert(audio.paused);document.hidden=false;docEvents.visibilitychange();await settle();assert(!music.paused&&audio.paused,'return resumes bed, never stale FX');
winEvents.pagehide();assert(music.paused);winEvents.pageshow();await settle();assert(!music.paused);
run('stopStorySound()');const count=audio.plays;audio.events.loadedmetadata();audio.events.playing?.();audio.events.timeupdate?.();assert.equal(audio.plays,count);
context.interaction.reward='__proto__';run('startStorySound(0)');assert.equal(audio.plays,count);
// A pending autoplay resolution cannot undo a mute/page suspension.
music.pause();run('startMusic()');button.onclick();await settle();assert(music.paused&&audio.paused);assert.equal(button.attrs['aria-pressed'],'false');
// Real regression: background music works while the first effects play is denied.
button.onclick();await settle();assert(!music.paused);
context.interaction.reward='ghosts';audio.block=true;
run('startStorySound(3.12)');await settle();
assert(audio.paused&&!music.paused);assert.equal(audio.attrs['data-playback'],'blocked');
now+=250;audio.block=false;audio.readyState=1;audio.duration=14;
docEvents.touchend({target:{}});await settle();
assert(!audio.paused,'touchend recovers blocked FX independently of music');
assert.equal(audio.attrs['data-playback'],'playing');assert(!audio.attrs['data-playback-error']);
assert(Math.abs(audio.currentTime-3.37)<.001,'recovered FX catch up instead of restarting');
run('stopStorySound()');const playsAfterClear=audio.plays;docEvents.click({target:{}});await settle();assert.equal(audio.plays,playsAfterClear,'Clear cancels retry');
// A stale rejection after Clear must not restore a blocked state or replay old FX.
audio.block=true;run('startStorySound(3.12);stopStorySound()');await settle();assert.equal(audio.attrs['data-playback'],'stopped');
// A pending play promise must not block a new resume after a page interruption.
await settle();music.pause();const originalMusicPlay=music.play;let rejectInterrupted;
music.play=function(){this.plays++;return new Promise((resolve,reject)=>{rejectInterrupted=reject})};
run('startMusic()');document.hidden=true;docEvents.visibilitychange();
music.play=originalMusicPlay;document.hidden=false;docEvents.visibilitychange();await settle();
assert(!music.paused,'returning to the page retries music even while the old play promise is pending');
rejectInterrupted(new Error('Interrupted old start'));await settle();assert(!music.paused,'stale play rejection must not disturb resumed music');
const html=fs.readFileSync(__dirname+'/../../index.html','utf8');assert(html.includes('id="music" src="assets/music-bed-v55.m4a" loop'));assert(html.includes('aria-label="Turn sound off" aria-pressed="true"'));
console.log('Audio lifecycle passed: default on, blocked-autoplay first-tap recovery, continuous bed, all rewards, initial alignment without ongoing seeks, slow decoders, mute races, visibility, Clear and asset allowlist.');
})().catch(e=>{console.error(e);process.exitCode=1});
