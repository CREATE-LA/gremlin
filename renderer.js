// Retain SVG/image nodes so decoded textures survive animation frames.
const sceneScratch=document.createElement('div');let mountedIdle=false,idleMarkup='',lastViewport='';
function syncNode(oldNode,newNode){
 if(oldNode.nodeType!==newNode.nodeType||oldNode.nodeName!==newNode.nodeName){oldNode.replaceWith(newNode.cloneNode(true));return;}
 if(oldNode.nodeType!==1){if(oldNode.nodeValue!==newNode.nodeValue)oldNode.nodeValue=newNode.nodeValue;return;}
 for(const a of [...oldNode.attributes])if(!newNode.hasAttribute(a.name))oldNode.removeAttribute(a.name);
 for(const a of newNode.attributes)if(oldNode.getAttribute(a.name)!==a.value)oldNode.setAttribute(a.name,a.value);
 let i=0;for(;i<newNode.childNodes.length;i++){const n=newNode.childNodes[i],o=oldNode.childNodes[i];if(!o)oldNode.appendChild(n.cloneNode(true));else if(!o.isEqualNode(n))syncNode(o,n);}
 while(oldNode.childNodes.length>i)oldNode.lastChild.remove();
}
function preparedArt(art,theme){
 const tone=theme.slice(1);
 art=art.replace(/filter="url\(#(holeThreshold|paperSurfaceThreshold)\)" href="assets\/tear.png"/g,(_,id)=>`href="assets/mobile/${id}.webp"`);
 art=art.replaceAll('assets/paper.png','assets/mobile/paperGrain.webp');
 art=art.replace(/assets\/(creature-atlas-r01|eye-cels-r01|hand-cels-r01|hand-cels-slim-r01|tear|bat-panel-[^" ]+)\.png/g,(_,name)=>`assets/mobile/${name}-${tone}.webp`);
 art=art.replace(/assets\/(?!mobile\/)([^" ]+)\.png/g,'assets/mobile/$1.webp');
 art=art.replace(/ filter="url\(#(?:marker|batTone|tearTone|paperGrain|boilEye|boilHand|boilBat)\)"/g,'');
 return art.replace(/<filter id="(?:marker|batTone|tearTone|paperGrain|boilEye|boilHand|boilBat|holeThreshold|paperSurfaceThreshold)"[\s\S]*?<\/filter>/g,'');
}
function presentScene(art,isIdle){
 sceneScratch.innerHTML=art;const next=sceneScratch.firstElementChild;
 if(scene.firstElementChild)syncNode(scene.firstElementChild,next);else{scene.appendChild(next.cloneNode(true));scene.dataset.rootMounts=String(Number(scene.dataset.rootMounts||0)+1);}
 mountedIdle=isIdle;idleMarkup='';lastViewport=innerWidth+':'+innerHeight+':'+interaction.theme;
}
function presentIdle(){
 if(!mountedIdle||lastViewport!==innerWidth+':'+innerHeight+':'+interaction.theme)return false;
 const markup=idleEyes(interaction.idleExpression);if(markup===idleMarkup)return true;
 sceneScratch.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg">${markup}</svg>`;
 const old=scene.querySelector('#idle-eyes');if(!old)return false;
 syncNode(old,sceneScratch.firstElementChild.firstElementChild);idleMarkup=markup;return true;
}
