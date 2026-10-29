const perfSample={frames:0,slow:0,max:0,draw:0,maxDraw:0,ready:0,input:0,response:0},perfStart=performance.now();let perfPrevious=0,perfNext=0,perfInput=0;
function noteInput(){perfInput=performance.now();perfSample.input++;}
function noteFrame(now,drawMs){if(perfPrevious){const gap=now-perfPrevious;perfSample.max=Math.max(perfSample.max,gap);if(gap>55)perfSample.slow++;}perfPrevious=now;perfSample.frames++;perfSample.draw+=drawMs;perfSample.maxDraw=Math.max(perfSample.maxDraw,drawMs);if(perfInput){perfSample.response=performance.now()-perfInput;perfInput=0;}if(now>perfNext){document.querySelector('#scene').dataset.perf=JSON.stringify({...perfSample,elapsed:now-perfStart,averageDraw:perfSample.draw/perfSample.frames});perfNext=now+500;}}

function notePresented(){if(perfInput){perfSample.response=performance.now()-perfInput;perfInput=0;}}
