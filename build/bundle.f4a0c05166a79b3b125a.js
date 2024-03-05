(()=>{"use strict";var e={864:()=>{const e=document.getElementById("generate-btn-de");e&&e.addEventListener("click",(function(){const e=document.getElementById("loader"),n=document.getElementById("haiku-output");speechSynthesis.cancel(),e&&(e.style.display="block"),n&&(n.innerHTML="",n.classList.remove("vertical-text"),n.classList.remove("fade-blur"),n.classList.add("flipped-text")),fetch("/api/haiku-serverless-de",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((t=>{console.log(t.haiku),e&&(e.style.display="none"),null==n||n.classList.add("fade-blur");const o=function(e){return e.split("\n").slice(0,3).join("\n")}(t.haiku);n&&(n.innerText=o),function(e){const n=document.getElementById("current-word"),t=document.getElementById("haiku-output");let o="";if(t){const e=t.innerHTML;if(e){const t=e.split("<br>");t&&t.forEach((e=>{const t=new SpeechSynthesisUtterance(e);t.rate=.8,t.pitch=.8,t.lang="de-DE",t.onboundary=t=>{"word"===t.name&&(o=e.substring(t.charIndex,t.charIndex+t.charLength),n&&(n.innerHTML=o))},window.speechSynthesis.speak(t),t.onend=()=>{n&&(n.innerHTML="")}}))}}}()})).catch((e=>{console.error("Error:",e)}))}))},332:()=>{const e=document.getElementById("generate-btn-en");e&&e.addEventListener("click",(function(){const e=document.getElementById("loader"),n=document.getElementById("haiku-output");speechSynthesis.cancel(),e&&(e.style.display="block"),n&&(n.innerHTML="",n.classList.remove("vertical-text"),n.classList.remove("fade-blur"),n.classList.add("flipped-text")),fetch("/api/haiku-serverless-en",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((t=>{console.log(t.haiku),e&&(e.style.display="none"),null==n||n.classList.add("fade-blur");const o=function(e){return e.split("\n").slice(0,3).join("\n")}(t.haiku);n&&(n.innerText=o),function(e){const n=document.getElementById("current-word"),t=document.getElementById("haiku-output");let o="";if(t){const e=t.innerHTML;if(e){const t=e.split("<br>");t&&t.forEach(((e,t)=>{const r=new SpeechSynthesisUtterance(e);r.rate=.8,r.pitch=.8,r.lang="en-GB",r.onboundary=t=>{"word"===t.name&&(o=e.substring(t.charIndex,t.charIndex+t.charLength),n&&(n.innerHTML=o))},window.speechSynthesis.speak(r),r.onend=()=>{n&&(n.innerHTML="")}}))}}}()})).catch((e=>{console.error("Error:",e)}))}))},631:()=>{const e=document.getElementById("generate-btn-fr");e&&e.addEventListener("click",(function(){const e=document.getElementById("loader"),n=document.getElementById("haiku-output");speechSynthesis.cancel(),e&&(e.style.display="block"),n&&(n.innerHTML="",n.classList.remove("vertical-text"),n.classList.remove("fade-blur"),n.classList.add("flipped-text")),fetch("/api/haiku-serverless-fr",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((t=>{console.log(t.haiku),e&&(e.style.display="none"),null==n||n.classList.add("fade-blur");const o=function(e){return e.split("\n").slice(0,3).join("\n")}(t.haiku);n&&(n.innerText=o),function(e){const n=document.getElementById("current-word"),t=document.getElementById("haiku-output");let o="";if(t){const e=t.innerHTML;if(e){const t=e.split("<br>");t&&t.forEach(((e,t)=>{const r=new SpeechSynthesisUtterance(e);r.rate=.8,r.pitch=.8,r.lang="fr-FR",r.onboundary=t=>{"word"===t.name&&(o=e.substring(t.charIndex,t.charIndex+t.charLength),n&&(n.innerHTML=o))},window.speechSynthesis.speak(r),r.onend=()=>{n&&(n.innerHTML="")}}))}}}()})).catch((e=>{console.error("Error:",e)}))}))},757:()=>{const e=document.getElementById("generate-btn-jp");if(e){function n(e){const n=document.getElementById("current-word"),t=document.getElementById("haiku-output");let o="";if(t){const e=t.innerHTML;if(e){const t=e.split("<br>");t&&t.forEach((e=>{const t=new SpeechSynthesisUtterance(e);t.rate=.8,t.pitch=.8,t.lang="ja-JP",t.onboundary=t=>{"word"===t.name&&(o=e.substring(t.charIndex,t.charIndex+t.charLength),n&&(n.innerHTML=o))},window.speechSynthesis.speak(t),t.onend=()=>{n&&(n.innerHTML="")}}))}}}e.addEventListener("click",(function(){const e=document.getElementById("loader"),t=document.getElementById("haiku-output");speechSynthesis.cancel(),e&&(e.style.display="block"),t&&(t.innerHTML="",t.classList.add("vertical-text"),t.classList.remove("fade-blur"),t.classList.add("flipped-text")),fetch("/api/haiku-serverless-jp",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((o=>{console.log(o.haiku),e&&(e.style.display="none"),null==t||t.classList.add("fade-blur");const r=function(e){return e.split("\n").slice(0,3).join("\n")}(o.haiku);t&&(t.innerText=r),n()})).catch((e=>{console.error("Error:",e)}))}))}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var s=n[o]={exports:{}};return e[o](s,s.exports,t),s.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t(332),t(757),t(631),t(864)})();