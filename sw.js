const CACHE='stride-app-4d1d8085c5f2cc16',ASSETS=["./.nojekyll","./app.b15b283c1a0e.js","./assets/library.json","./index.html","./install.js","./manifest.webmanifest","./mockup/Exercises-Dataset-LICENSE.txt","./mockup/Exercises-Dataset-NOTICE.txt","./mockup/MuscleMap-LICENSE.txt","./production.css","./review/app.css","./review/assets/stride-favicon.png","./review/assets/stride-icon-192.png","./review/assets/stride-icon-512.png","./review/assets/stride-touch-icon.png","./review/benchmarks/README.md","./review/vendor/LUCIDE-LICENSE","./review/vendor/lucide.min.js"],BASE=new URL('./',self.location.href),ALLOWED=new Set(ASSETS.map(p=>new URL(p,BASE).href));
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('stride-app-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{const r=event.request,url=new URL(r.url);if(r.method!=='GET'||url.origin!==BASE.origin||!url.pathname.startsWith(BASE.pathname))return;
 if(r.mode==='navigate'){event.respondWith(fetch(r).catch(()=>caches.match(new URL('index.html',BASE).href)));return;}
 if(!ALLOWED.has(url.href))return;
 event.respondWith(caches.match(r).then(cached=>cached||fetch(r).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(r,copy));}return response;})));
});
