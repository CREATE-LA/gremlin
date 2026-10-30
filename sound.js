// The quiet music bed keeps its place while each reward has one synced FX player.
const storyAudio=document.querySelector('#score');
const musicAudio=document.querySelector('#music');
const soundButton=document.querySelector('#sound');
const scores={bats:'story-v45.m4a',ghosts:'ghosts-fx-v55.m4a',eyes:'eyes-fx-v55.m4a',duck:'duck-fx-v55.m4a',party:'party-fx-v55.m4a',kitten:'kitten-fx-v55.m4a'};
let storySound=true,soundGeneration=0,pendingSound=null,musicPending=false,soundSuspended=false;
function stopStorySound(){soundGeneration++;pendingSound=null;storyAudio.pause();}
function startMusic(){
 if(!storySound||soundSuspended||document.hidden||musicPending||!musicAudio.paused)return;
 musicPending=true;
 musicAudio.play().then(()=>{
  musicPending=false;
  if(!storySound||soundSuspended||document.hidden)musicAudio.pause();
 }).catch(()=>{musicPending=false;}); // Mobile autoplay can wait for the first tap.
}
function syncStorySound(){
 const pending=pendingSound;
 if(!pending||pending.generation!==soundGeneration||!storySound||storyAudio.readyState<1)return;
 const position=pending.time+(performance.now()-pending.started)/1000;
 if(Number.isFinite(storyAudio.duration)&&position>=storyAudio.duration){stopStorySound();return;}
 if(Math.abs(storyAudio.currentTime-position)>.08){try{storyAudio.currentTime=Math.max(0,position);}catch{}}
}
storyAudio.addEventListener('loadedmetadata',syncStorySound);
storyAudio.addEventListener('playing',syncStorySound);
storyAudio.addEventListener('timeupdate',syncStorySound);
function startStorySound(t){
 stopStorySound();if(!storySound||soundSuspended||document.hidden)return;
 startMusic();
 const kind=interaction.reward==='surprise'?interaction.surprisePlan?.kind:interaction.reward;
 if(!Object.hasOwn(scores,kind))return;
 const src='assets/'+scores[kind]+'?v=55.4';
 pendingSound={generation:soundGeneration,time:t,started:performance.now()};
 if(storyAudio.getAttribute('src')!==src)storyAudio.src=src;
 syncStorySound();
 storyAudio.play().catch(()=>{});
}
soundButton.onclick=()=>{
 storySound=!storySound;
 soundButton.setAttribute('aria-pressed',String(storySound));
 soundButton.setAttribute('aria-label',storySound?'Turn sound off':'Turn sound on');
 soundButton.style.opacity=storySound?'1':'.45';
 if(storySound){startMusic();if(mode==='playing')startStorySound(playFrom+(performance.now()-phaseAt)/1000);}
 else{stopStorySound();musicAudio.pause();}
};
function unlockMusic(event){
 // The sound button owns its toggle; do not start audio just before muting it.
 if(event.target===soundButton||soundButton.contains(event.target))return;
 startMusic();
}
for(const event of ['pointerup','touchend','click','keydown'])document.addEventListener(event,unlockMusic,{passive:true});
function suspendSound(){soundSuspended=true;stopStorySound();musicAudio.pause();}
function resumeSound(){soundSuspended=false;startMusic();}
document.addEventListener('visibilitychange',()=>document.hidden?suspendSound():resumeSound());
window.addEventListener('pagehide',suspendSound);
window.addEventListener('pageshow',resumeSound);
soundButton.style.opacity='1';
startMusic();
