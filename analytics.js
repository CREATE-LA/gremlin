// Cookie-free traffic and performance analytics. No prompt or persistent visitor ID.
// Public beacon token for Create Advertising; this is not an API credential.
(()=>{
 const TOKEN='bf525303cc7b4843ba0b418935a845c4';
 const production=location.protocol==='https:'&&location.hostname==='create-la.github.io'&&['/gremlin/','/gremlin/index.html'].includes(location.pathname);
 if(!production||navigator.globalPrivacyControl===true||navigator.doNotTrack==='1'||!/^[a-f0-9]{32}$/.test(TOKEN))return;
 // A blocked analytics request must never affect playing, animation, or sound.
 try{
  const script=document.createElement('script');
  script.type='module';
  script.async=true;
  script.src='https://static.cloudflareinsights.com/beacon.min.js';
  script.setAttribute('data-cf-beacon',JSON.stringify({token:TOKEN,spa:false}));
  script.onerror=()=>{};
  document.head.appendChild(script);
 }catch{}
})();
