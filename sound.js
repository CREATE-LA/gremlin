// One player prevents overlapping rewards and preserves mobile gesture playback.
const storyAudio=document.querySelector('#score');
const soundButton=document.querySelector('#sound');
const scores={bats:'story-v45.m4a',ghosts:'ghosts-v49.m4a',eyes:'eyes-v49.m4a',duck:'surprise-duck-v49.m4a',party:'surprise-party-v49.m4a',kitten:'surprise-kitten-v49.m4a'};
let storySound=false,soundGeneration=0,pendingSound=null;
function stopStorySound(){soundGeneration++;pendingSound=null;storyAudio.pause();}
function syncStorySound(){
 const pending=pendingSound;
 if(!pending||pending.generation!==soundGeneration||!storySound||storyAudio.readyState<1)return;
 // Loading or resuming must catch up to the picture, including on a slow phone.
 const position=pending.time+(performance.now()-pending.started)/1000;
 if(Number.isFinite(storyAudio.duration)&&position>=storyAudio.duration){stopStorySound();return;}
 if(Math.abs(storyAudio.currentTime-position)>.08){
  try{storyAudio.currentTime=Math.max(0,position);}catch{ /* Retry at loadedmetadata/playing. */ }
 }
}
storyAudio.addEventListener('loadedmetadata',syncStorySound);
storyAudio.addEventListener('playing',syncStorySound);
// Some mobile decoders settle behind the requested seek after playback begins.
storyAudio.addEventListener('timeupdate',syncStorySound);
function startStorySound(t){
 stopStorySound();if(!storySound)return;
 const kind=interaction.reward==='surprise'?interaction.surprisePlan?.kind:interaction.reward;
 if(!Object.hasOwn(scores,kind))return;
 const src='assets/'+scores[kind]+'?v=49.4';
 pendingSound={generation:soundGeneration,time:t,started:performance.now()};
 if(storyAudio.getAttribute('src')!==src)storyAudio.src=src;
 syncStorySound();
 // Keep play() in the tap/key gesture. Never defer it to a loading callback.
 storyAudio.play().catch(()=>{});
}
soundButton.onclick=()=>{
 storySound=!storySound;
 soundButton.setAttribute('aria-pressed',String(storySound));
 soundButton.setAttribute('aria-label',storySound?'Turn sound off':'Turn sound on');
 soundButton.style.opacity=storySound?'1':'.45';
 if(storySound&&mode==='playing')startStorySound(playFrom+(performance.now()-phaseAt)/1000);else stopStorySound();
};
soundButton.style.opacity='.45';
