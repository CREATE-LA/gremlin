const storyAudio=new Audio('assets/story27.mp3');storyAudio.preload='metadata';let storySound=false;
const surpriseAudio=Object.fromEntries(['duck','party','kitten'].map(kind=>{const audio=new Audio(`assets/surprise-${kind}-v${kind==='kitten'?34:27}.mp3`);audio.preload='metadata';return[kind,audio]}));
const soundButton=document.querySelector('#sound');
function stopStorySound(){storyAudio.pause();Object.values(surpriseAudio).forEach(audio=>audio.pause());}
function startStorySound(t){stopStorySound();if(!storySound)return;const audio=interaction.reward==='bats'?storyAudio:interaction.reward==='surprise'?surpriseAudio[interaction.surprisePlan?.kind]:null;if(!audio)return;try{audio.currentTime=t;}catch{}audio.play().catch(()=>{});}
soundButton.onclick=()=>{storySound=!storySound;soundButton.setAttribute('aria-pressed',String(storySound));soundButton.setAttribute('aria-label',storySound?'Turn sound off':'Turn sound on');soundButton.style.opacity=storySound?'1':'.45';if(storySound&&mode==='playing')startStorySound(time);else stopStorySound();};soundButton.style.opacity='.45';
