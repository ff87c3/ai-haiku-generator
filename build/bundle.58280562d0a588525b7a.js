(()=>{var e={374:()=>{document.getElementById("generate-btn-eng").addEventListener("click",(function(){const e=document.getElementById("haiku-output");e.classList.remove("vertical-text"),e.innerHTML="✴︎",fetch("/api/haiku-serverless-eng",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{document.getElementById("haiku-output").innerText=e.haiku,console.log(e.haiku),function(e){const t=new SpeechSynthesisUtterance(e);t.lang="en-GB";const n=window.speechSynthesis.getVoices().filter((e=>e.lang.startsWith("en")&&e.name.includes("Female")))[0];n&&(t.voice=n),t.rate=.8,t.pitch=.8,window.speechSynthesis.speak(t)}(e.haiku)})).catch((e=>{console.error("Error:",e)}))}))},550:()=>{document.getElementById("generate-btn-jp").addEventListener("click",(function(){const e=document.getElementById("haiku-output");e.classList.add("vertical-text"),e.innerHTML="✴︎",fetch("/api/haiku-serverless-jp",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{const t=e.haiku.replace(/ /g,"<br>");document.getElementById("haiku-output").innerText=t,console.log(e.haiku),function(e){const t=new SpeechSynthesisUtterance(e);t.lang="ja-JP";const n=window.speechSynthesis.getVoices().find((e=>"ja-JP"===e.lang));n&&(t.voice=n),t.rate=.6,window.speechSynthesis.speak(t)}(e.haiku)})).catch((e=>{console.error("Error:",e)}))}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(374),n(550)})()})();