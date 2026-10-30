const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const code=fs.readFileSync('analytics.js','utf8');
function run({url='https://create-la.github.io/gremlin/',privacy={},token='a'.repeat(32),blocked=false}={}){
 const scripts=[];
 const document={createElement(name){assert.equal(name,'script');return {setAttribute(k,v){this[k]=v;}}},head:{appendChild(s){if(blocked)throw Error('Blocked');scripts.push(s);}}};
 for(const key of ['cookie','referrer'])Object.defineProperty(document,key,{get(){throw Error('Unexpected '+key+' access');},set(){throw Error('Unexpected '+key+' write');}});
 const context={location:new URL(url),navigator:privacy,document};
 for(const key of ['localStorage','sessionStorage','indexedDB'])Object.defineProperty(context,key,{get(){throw Error('Unexpected storage '+key);}});
 vm.runInNewContext(code.replace(/const TOKEN='[^']*';/,`const TOKEN='${token}';`),context);
 return scripts;
}
assert.match(code,/const TOKEN='[a-f0-9]{32}';/,'Release must have a verified public site token');
const [tag]=run();assert.equal(tag.type,'module');assert.equal(tag.src,'https://static.cloudflareinsights.com/beacon.min.js');assert.equal(tag.async,true);
assert.deepEqual(JSON.parse(tag['data-cf-beacon']),{token:'a'.repeat(32),spa:false});
assert.equal(run({token:''}).length,0);
for(const url of ['http://localhost:8767/','https://preview.trycloudflare.com/','https://create-la.github.io/other/','http://create-la.github.io/gremlin/'])assert.equal(run({url}).length,0);
for(const privacy of [{globalPrivacyControl:true},{doNotTrack:'1'}])assert.equal(run({privacy}).length,0);
assert.equal(run({url:'https://create-la.github.io/gremlin/index.html'}).length,1);
assert.doesNotThrow(()=>run({blocked:true}));assert.doesNotThrow(()=>tag.onerror());
assert(!/googletagmanager|google-analytics|analytics-choice|analytics-settings/.test(fs.readFileSync('index.html','utf8')));
console.log('Cookie-free loader: production scope, privacy signals, no storage/UI access, async loading and blocked-network fallback passed. Provider data receipt requires live verification.');
