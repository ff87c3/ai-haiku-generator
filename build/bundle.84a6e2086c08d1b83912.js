(()=>{"use strict";var e={864:()=>{const e=document.getElementById("generate-btn-de"),n=document.getElementById("loader"),t=document.getElementById("haiku-output"),r=document.getElementById("current-word");e&&e.addEventListener("click",(function(){speechSynthesis.cancel(),n&&(n.style.display="block"),t&&(t.innerHTML="",t.classList.remove("vertical-text"),t.classList.remove("fade-blur"),t.classList.add("flipped-text")),fetch("/api/haiku-serverless-de",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log(e.haiku),n&&(n.style.display="none"),null==t||t.classList.add("fade-blur");const o=function(e){return e.split("\n").slice(0,3).join("\n")}(e.haiku);t&&(t.innerText=o),function(e){let n="";if(t){const e=t.innerHTML;if(e){const t=e.split("<br>");t&&t.forEach((e=>{const t=new SpeechSynthesisUtterance(e);t.rate=.8,t.pitch=.8,t.lang="de-DE",t.onboundary=t=>{"word"===t.name&&(n=e.substring(t.charIndex,t.charIndex+t.charLength),r&&(r.innerHTML=n))},window.speechSynthesis.speak(t),t.onend=()=>{r&&(r.innerHTML="")}}))}}}()})).catch((e=>{console.error("Error:",e)}))}))},332:()=>{const e=document.getElementById("generate-btn-en");e&&e.addEventListener("click",(function(){speechSynthesis.cancel(),loader&&(loader.style.display="block"),haikuContainer&&(haikuContainer.innerHTML="",haikuContainer.classList.remove("vertical-text"),haikuContainer.classList.remove("fade-blur"),haikuContainer.classList.add("flipped-text")),fetch("/api/haiku-serverless-en",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log(e.haiku),loader&&(loader.style.display="none"),null===haikuContainer||void 0===haikuContainer||haikuContainer.classList.add("fade-blur");const n=function(e){return e.split("\n").slice(0,3).join("\n")}(e.haiku);haikuContainer&&(haikuContainer.innerText=n),function(e){let n="";if(haikuContainer){const e=haikuContainer.innerHTML;if(e){const t=e.split("<br>");t&&t.forEach(((e,t)=>{const r=new SpeechSynthesisUtterance(e);r.rate=.8,r.pitch=.8,r.lang="en-GB",r.onboundary=t=>{"word"===t.name&&(n=e.substring(t.charIndex,t.charIndex+t.charLength),currentWordContainer&&(currentWordContainer.innerHTML=n))},window.speechSynthesis.speak(r),r.onend=()=>{currentWordContainer&&(currentWordContainer.innerHTML="")}}))}}}()})).catch((e=>{console.error("Error:",e)}))}))},631:()=>{const e=document.getElementById("generate-btn-fr");e&&e.addEventListener("click",(function(){speechSynthesis.cancel(),loader&&(loader.style.display="block"),haikuContainer&&(haikuContainer.innerHTML="",haikuContainer.classList.remove("vertical-text"),haikuContainer.classList.remove("fade-blur"),haikuContainer.classList.add("flipped-text")),fetch("/api/haiku-serverless-fr",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log(e.haiku),loader&&(loader.style.display="none"),null===haikuContainer||void 0===haikuContainer||haikuContainer.classList.add("fade-blur");const n=function(e){return e.split("\n").slice(0,3).join("\n")}(e.haiku);haikuContainer&&(haikuContainer.innerText=n),function(e){let n="";if(haikuContainer){const e=haikuContainer.innerHTML;if(e){const t=e.split("<br>");t&&t.forEach(((e,t)=>{const r=new SpeechSynthesisUtterance(e);r.rate=.8,r.pitch=.8,r.lang="fr-FR",r.onboundary=t=>{"word"===t.name&&(n=e.substring(t.charIndex,t.charIndex+t.charLength),currentWordContainer&&(currentWordContainer.innerHTML=n))},window.speechSynthesis.speak(r),r.onend=()=>{currentWordContainer&&(currentWordContainer.innerHTML="")}}))}}}()})).catch((e=>{console.error("Error:",e)}))}))},757:()=>{const e=document.getElementById("generate-btn-jp");if(e){function n(e){let n="";if(haikuContainer){const e=haikuContainer.innerHTML;if(e){const t=e.split("<br>");t&&t.forEach((e=>{const t=new SpeechSynthesisUtterance(e);t.rate=.8,t.pitch=.8,t.lang="ja-JP",t.onboundary=t=>{"word"===t.name&&(n=e.substring(t.charIndex,t.charIndex+t.charLength),currentWordContainer&&(currentWordContainer.innerHTML=n))},window.speechSynthesis.speak(t),t.onend=()=>{currentWordContainer&&(currentWordContainer.innerHTML="")}}))}}}e.addEventListener("click",(function(){speechSynthesis.cancel(),loader&&(loader.style.display="block"),haikuContainer&&(haikuContainer.innerHTML="",haikuContainer.classList.add("vertical-text"),haikuContainer.classList.remove("fade-blur"),haikuContainer.classList.add("flipped-text")),fetch("/api/haiku-serverless-jp",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log(e.haiku),loader&&(loader.style.display="none"),null===haikuContainer||void 0===haikuContainer||haikuContainer.classList.add("fade-blur");const t=function(e){return e.split("\n").slice(0,3).join("\n")}(e.haiku);haikuContainer&&(haikuContainer.innerText=t),n()})).catch((e=>{console.error("Error:",e)}))}))}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t(332),t(757),t(631),t(864)})();