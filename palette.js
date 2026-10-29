// Exact four-color palette from BUCK's Firebrand style-guide panel.
const FIREBRAND={charcoal:'#2a2a2a',gray:'#cccccc',orange:'#ff6941',neon:'#edff00'};
function characterPalette(background){
 return background===FIREBRAND.gray?{ink:FIREBRAND.orange,body:FIREBRAND.charcoal,eyes:FIREBRAND.orange}:
 background===FIREBRAND.neon?{ink:FIREBRAND.charcoal,body:FIREBRAND.orange,eyes:FIREBRAND.orange}:
 {ink:FIREBRAND.neon,body:FIREBRAND.charcoal,eyes:FIREBRAND.neon};
}
function applyPalette(art,background){
 if(background===FIREBRAND.charcoal)return art;
 const {ink,body}=characterPalette(background),light=body;
 art=art.replace('<rect width="1080" height="1920" fill="#2A2A2A"/>',`<rect width="1080" height="1920" fill="${background}"/>`).replaceAll('#CCCCCC',FIREBRAND.charcoal);
 // Recolor raster cels after their original color filter; keep source alpha/texture.
 const character=`<feColorMatrix type="saturate" values="0"/><feComponentTransfer>${['R','G','B'].map((c,i)=>{const lo=parseInt(body.slice(1+i*2,3+i*2),16)/255,hi=parseInt(ink.slice(1+i*2,3+i*2),16)/255;return `<feFunc${c} type="discrete" tableValues="${lo} ${lo} ${hi} ${hi}"/>`}).join('')}</feComponentTransfer>`;
 for(const id of ['marker','batTone'])art=art.replace(new RegExp('(<filter id="'+id+'"[^>]*>)([\\s\\S]*?)(</filter>)'),(_,a,b,c)=>a+b+character+c);
 // A light cavity separates the charcoal character on the neon background.
 const reverse=`<feComponentTransfer>${['R','G','B'].map(c=>`<feFunc${c} type="linear" slope="-1" intercept=".96"/>`).join('')}</feComponentTransfer>`;
 if(background===FIREBRAND.neon)art=art.replace(/(<filter id="tearTone"[^>]*>)([\s\S]*?)(<\/filter>)/,(_,a,b,c)=>a+b+reverse+c);
 // Counter eyes, wrists and vector ghost strokes share the raster character ink.
 art=art.replaceAll('#EDFF00',ink);
 // Keep vector body details paired with the raster character colors.
 art=art.replaceAll('fill="#2A2A2A"',`fill="${light}"`);
 return art;
}
