if(!self.define){let s,e={};const i=(i,a)=>(i=new URL(i+".js",a).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(a,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let r={};const o=s=>i(s,n),t={module:{uri:n},exports:r,require:o};e[n]=Promise.all(a.map((s=>t[s]||o(s)))).then((s=>(l(...s),r)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/beacon.c7eb882c.js",revision:null},{url:"assets/BeaconSession.de65afdb.js",revision:null},{url:"assets/DAppClient.b8edc6f3.js",revision:null},{url:"assets/index.1f9787af.css",revision:null},{url:"assets/index.9798b06d.js",revision:null},{url:"assets/index.cf1cc042.js",revision:null},{url:"assets/la/css/line-awesome.css",revision:"9d2fc77cbfee5bb6495477c39729b5b2"},{url:"assets/la/css/line-awesome.min.css",revision:"73db02545cf13e8c82b51b62782df0d6"},{url:"assets/LedgerDialog.d05014cf.js",revision:null},{url:"assets/LedgerDialog.d69a9c8c.css",revision:null},{url:"assets/LedgerSession.aa661399.js",revision:null},{url:"assets/main.24e8a7db.js",revision:null},{url:"assets/RemoteSignerDialog.228da96e.js",revision:null},{url:"assets/RemoteSignerDialog.91bbe4be.css",revision:null},{url:"assets/RemoteSignerSession.bbaea2b8.js",revision:null},{url:"assets/rules.1fad3738.js",revision:null},{url:"assets/SessionBase.5a6a7ef4.js",revision:null},{url:"assets/sl/sl.css",revision:"34b947a047c0ad887417521ad792e491"},{url:"assets/styles/beacon.css",revision:"205c86c1867b0d6e241a0b855a98b59a"},{url:"assets/taquito-beacon-wallet.es6.b0ec825d.js",revision:null},{url:"assets/taquito-http-utils.es6.9e4fbe23.js",revision:null},{url:"assets/taquito-utils.es6.89aee103.js",revision:null},{url:"assets/taquito.2b044309.js",revision:null},{url:"assets/taquito.es6.4f6d6b95.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"8999f5a06c06361b4e5f1f0a046707e8"},{url:"icon/favicon.png",revision:"343f982e78e2b2455621beeba1e624bd"},{url:"icon/favicon.svg",revision:"fbe432bbd084b7297058845cad32dac0"},{url:"icon/android-chrome-192x192.png",revision:"ec3032e34d6700d18cb4afb8334d3af0"},{url:"icon/android-chrome-512x512.png",revision:"d37d40c89b873bed9df894efe252c4f6"},{url:"icon/android-chrome-maskable-192x192.png",revision:"9eace9afd9a967e8528153c6ff59e47f"},{url:"icon/android-chrome-maskable-512x512.png",revision:"39cebf112ce614a50c2359e28a0e1798"},{url:"assets/svg/beacon-wallet-full.svg",revision:"aa5eaef937caf51ce228544d83d45910"},{url:"assets/svg/beacon-wallet-icon.svg",revision:"27b26d084d73260e65b155b7d0341e7d"},{url:"assets/svg/beacon.svg",revision:"944018ec47b40ed55234afbcd5c67398"},{url:"assets/svg/discord.svg",revision:"ca9bed5d3bafb49b5ae082239efc80b3"},{url:"assets/svg/ledger-wallet-full.svg",revision:"2446864b2a8a4a3b04f0ba75e3ca66e0"},{url:"assets/svg/ledger-wallet-icon.svg",revision:"abd9cbe58fbaa717244d205e2570f548"},{url:"assets/svg/logo-notext.svg",revision:"99e3137115d8c6065994384e7888dbdf"},{url:"assets/svg/logo.svg",revision:"52e6388d64b2febdf5dd6257f1ec17c4"},{url:"assets/svg/telegram.svg",revision:"156b323288a81fb57b0cae8da7910a7b"},{url:"assets/svg/tezgov.svg",revision:"5dcb797deb0af921246e5273e316335f"},{url:"assets/svg/twitter.svg",revision:"8a58a8b198118aef710c88474146b986"},{url:"assets/font/Lato-Light.ttf",revision:"2bcc211c05fc425a57b2767a4cdcf174"},{url:"assets/font/Lato-Thin.ttf",revision:"7ab0bc06eecc1b75f8708aba3d3b044a"},{url:"manifest.webmanifest",revision:"0ac36edc06a3bdf683775f765d526b58"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
