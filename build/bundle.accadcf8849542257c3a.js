(()=>{var e={911:()=>{document.getElementById("generate-btn").addEventListener("click",(function(){fetch("/generate-haiku",{method:"POST",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{document.getElementById("haiku-output").innerText=e.haiku,console.log(e.haiku),function(e){const t=new SpeechSynthesisUtterance(e);t.rate=.8,t.pitch=.8,-1!=navigator.userAgent.indexOf("Chrome")?t.voice=speechSynthesis.getVoices()[33]:-1!=navigator.userAgent.indexOf("Safari")?t.voice=speechSynthesis.getVoices()[32]:t.voice=speechSynthesis.getVoices()[33],window.speechSynthesis.speak(t)}(e.haiku)})).catch((e=>{console.error("Error:",e)}))}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(911)})()})();
//# sourceMappingURL=bundle.accadcf8849542257c3a.js.map