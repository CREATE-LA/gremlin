// The quiet music bed keeps its place while each reward has one synced FX player.
const storyAudio=document.querySelector('#score');
const musicAudio=document.querySelector('#music');
const soundButton=document.querySelector('#sound');
const scores={bats:'story-v45.m4a',ghosts:'ghosts-fx-v55.m4a',eyes:'eyes-fx-v55.m4a',duck:'duck-fx-v55.m4a',party:'party-fx-v55.m4a',kitten:'kitten-fx-v55.m4a'};
let storySound=true,soundGeneration=0,pendingSound=null,musicPending=false,musicGeneration=0,soundSuspended=false;
function stopStorySound(){soundGeneration++;pendingSound=null;storyAudio.pause();storyAudio.setAttribute('data-playback','stopped');}
function stopMusic(){musicGeneration++;musicPending=false;musicAudio.pause();}
function startMusic(){
 if(!storySound||soundSuspended||document.hidden||musicPending||!musicAudio.paused)return;
 const generation=++musicGeneration;musicPending=true;
 musicAudio.play().then(()=>{
  if(generation!==musicGeneration)return;
  musicPending=false;
  if(!storySound||soundSuspended||document.hidden)stopMusic();
 }).catch(()=>{if(generation===musicGeneration)musicPending=false;}); // Mobile autoplay can wait for the first tap.
}
// Align once when starting/retrying. Seeking during playing/timeupdate interrupts
// mobile AAC decoding and can create an endless seek → playing → seek loop.
function syncStorySound(){
 const pending=pendingSound;
 if(!pending||pending.generation!==soundGeneration||!storySound||pending.aligned||storyAudio.readyState<1)return;
 const position=pending.time+(performance.now()-pending.started)/1000;
 if(Number.isFinite(storyAudio.duration)&&position>=storyAudio.duration){stopStorySound();return;}
 try{
  if(Math.abs(storyAudio.currentTime-position)>.08)storyAudio.currentTime=Math.max(0,position);
  pending.aligned=true;
 }catch{}
}
storyAudio.addEventListener('loadedmetadata',syncStorySound);
// Keep the effects request pending if a browser rejects the first pointer event.
// Retry synchronously on touchend/click/keyup, which mobile media policies recognize.
function playPendingEffects(){
 const pending=pendingSound;
 if(!pending||pending.generation!==soundGeneration||!storySound||soundSuspended||document.hidden)return;
 pending.aligned=false;
 syncStorySound();
 if(pendingSound!==pending)return;
 storyAudio.setAttribute('data-playback','starting');
 storyAudio.play().then(()=>{
  if(pendingSound!==pending)return;
  storyAudio.setAttribute('data-playback','playing');
  storyAudio.removeAttribute('data-playback-error');
 }).catch(error=>{
  if(pendingSound!==pending)return;
  storyAudio.setAttribute('data-playback','blocked');
  storyAudio.setAttribute('data-playback-error',error.name||'PlaybackError');
 });
}
function startStorySound(t){
 stopStorySound();if(!storySound||soundSuspended||document.hidden)return;
 const kind=interaction.reward==='surprise'?interaction.surprisePlan?.kind:interaction.reward;
 if(!Object.hasOwn(scores,kind))return;
 const src='assets/'+scores[kind]+'?v=55.4';
 pendingSound={generation:soundGeneration,time:t,started:performance.now(),aligned:false};
 if(storyAudio.getAttribute('src')!==src)storyAudio.src=src;
 playPendingEffects();
 startMusic();
}
soundButton.onclick=()=>{
 storySound=!storySound;
 soundButton.setAttribute('aria-pressed',String(storySound));
 soundButton.setAttribute('aria-label',storySound?'Turn sound off':'Turn sound on');
 soundButton.style.opacity=storySound?'1':'.45';
 if(storySound){startMusic();if(mode==='playing')startStorySound(playFrom+(performance.now()-phaseAt)/1000);}
 else{stopStorySound();stopMusic();}
};
function unlockMusic(event){
 // The sound button owns its toggle; do not start audio just before muting it.
 if(event.target===soundButton||soundButton.contains(event.target))return;
 if(pendingSound&&storyAudio.paused)playPendingEffects();
 startMusic();
}
for(const event of ['pointerup','touchend','click','keydown','keyup'])document.addEventListener(event,unlockMusic,{passive:true});
function suspendSound(){soundSuspended=true;stopStorySound();stopMusic();}
function resumeSound(){soundSuspended=false;startMusic();}
document.addEventListener('visibilitychange',()=>document.hidden?suspendSound():resumeSound());
window.addEventListener('pagehide',suspendSound);
window.addEventListener('pageshow',resumeSound);
soundButton.style.opacity='1';
startMusic();
