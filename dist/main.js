(()=>{"use strict";var n={331:(n,t,e)=>{e.d(t,{A:()=>g});var o=e(755),r=e.n(o),i=e(508),a=e.n(i),c=e(527),s=e.n(c),l=new URL(e(25),e.b),d=new URL(e(214),e.b),u=new URL(e(137),e.b),p=a()(r()),f=s()(l),h=s()(d),m=s()(u);p.push([n.id,`* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: monospace;\n  font-size: 125%;\n  background-image: url(${f});\n  background-position: top;\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n  background-color: rgba(3, 8, 12);\n  min-width: fit-content;\n}\n\n.link {\n  text-decoration: none;\n  color: inherit;\n}\n\n.heading {\n  color: white;\n  width: fit-content;\n  margin: auto;\n  padding: 24px;\n}\n\n.sub-heading {\n  text-decoration: underline;\n}\n\n.container {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  color: white;\n  text-align: center;\n  max-width: 1920px;\n  min-width: max-content;\n  margin: auto;\n  margin-top: 4%;\n}\n\n.game {\n  width: fit-content;\n}\n\n.instructions,\n.ships-list-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 24px;\n  width: 20%;\n  min-width: 320px;\n  max-width: 400px;\n}\n\n.ships-list {\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  margin-bottom: 24px;\n  padding: 0;\n  list-style-type: none;\n}\n\n.sunk-ship {\n  text-decoration: line-through;\n  color: darkgray;\n}\n\n.restart-button {\n  font-family: "Roboto Mono", monospace;\n  width: fit-content;\n  margin: 0 auto;\n  color: white;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  border: 1px solid white;\n  padding: 0.5rem;\n}\n\n.restart-button:hover {\n  border: 1.5px solid white;\n  cursor: pointer;\n}\n\n.table {\n  border-spacing: 0px;\n}\n\n.coord {\n  border: 0.5px black solid;\n  width: 40px;\n  height: 40px;\n  cursor: crosshair;\n}\n\n.hit {\n  background: url(${h}) no-repeat center;\n  background-size: 30px;\n}\n\n.miss {\n  background: url(${m}) no-repeat center;\n  background-size: 30px;\n}\n\n.th {\n  padding: 10px;\n}\n\n.coord-log {\n  margin-bottom: 24px;\n}\n\n.log-message {\n  margin-bottom: 24px;\n}\n`,""]);const g=p},508:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",o=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),o&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),o&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},527:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},755:n=>{n.exports=function(n){return n[1]}},960:n=>{var t=[];function e(n){for(var e=-1,o=0;o<t.length;o++)if(t[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=r(f,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var s=o(n,r),l=0;l<i.length;l++){var d=e(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},443:n=>{var t={};n.exports=function(n,e){var o=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},628:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},120:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},81:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var r=void 0!==e.layer;r&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,r&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},849:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},25:(n,t,e)=>{n.exports=e.p+"1687bcf564c40fb1ef36.jpg"},214:(n,t,e)=>{n.exports=e.p+"eee754303cfac13fa00b.png"},137:(n,t,e)=>{n.exports=e.p+"835e56a5142f2e723e33.png"}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(960),t=e.n(n),o=e(81),r=e.n(o),i=e(443),a=e.n(i),c=e(120),s=e.n(c),l=e(628),d=e.n(l),u=e(849),p=e.n(u),f=e(331),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),t()(f.A,h),f.A&&f.A.locals&&f.A.locals;const m=document.getElementById("table"),g=document.getElementById("coord-nums"),x=document.getElementById("ships-list"),b=document.getElementsByClassName("coord"),v=document.getElementById("coord-log"),y=document.getElementById("log-message"),w=document.getElementById("game-over"),E=document.getElementById("restart-button"),T=["A","B","C","D","E","F","G","H","I","J"],k=[],M=[],C=[{name:"Carrier",size:5,location:[]},{name:"Battleship",size:4,location:[]},{name:"Cruiser",size:3,location:[]},{name:"Submarine",size:3,location:[]},{name:"Destroyer",size:2,location:[]}];let I=document.querySelectorAll(".ship-item"),L=0;function S(n){const t=[];for(let e=1;e<11;e++){const o=document.createElement("td");o.classList.add("coord"),o.id=`${n}${e}`,t.push(o)}return t}function z(n,t,e){const o=Math.floor(2*Math.random());0===o?function(n,t){const e=t[Math.floor(10*Math.random())],o=Math.floor(Math.random()*(10-n.size))+1;for(let t=0;t<n.size;t++)n.location.push(e+(o+t))}(n,t):1===o&&function(n,t){const e=Math.floor(10*Math.random())+1,o=Math.floor(Math.random()*(10-n.size));for(let r=0;r<n.size;r++)n.location.push(t[o+r]+e)}(n,t),function(n,t){for(const e of n.location)if(t.includes(e))return!0;return!1}(n,e)?(n.location=[],z(n,t,e)):n.location.forEach((n=>e.push(n)))}function A(){removeEventListener("click",(n=>$(n,C)))}function $(n,t){const e=n.currentTarget.id,o=document.getElementById(e);M.length===t.length?A():function(n,t){for(const e of t)if(n===e)return!0;return!1}(e,k)?(y.innerText="You have already shot this coordinate. Please select another coordinate!",v.innerText=`Coordinate: ${e}`):(function(n,t){for(const e of t)for(const t of e.location)if(n===t)return!0;return!1}(e,t)?(o.classList.add("hit"),y.innerText="You hit a ship!"):(o.classList.add("miss"),y.innerText="Missed!"),v.innerText=`Coordinate: ${e}`,L++,k.push(e),function(n,t,e,o,r){for(const i of n){const n=[];for(const t of i.location)for(const o of e)t===o&&n.push(t);n.length!==i.size||o.includes(i.name)||(o.push(i.name),t.forEach((n=>{i.name===n.innerText&&n.classList.add("sunk-ship")})),r.innerText=`You sunk the ${i.name}.`)}}(t,I,k,M,y),M.length===t.length&&(w.innerText=`You have completed the game. It took you ${L} shots. Restart the game to play again.`))}(function(n,t,e){(function(n){const t=document.createElement("th");t.classList.add("th"),n.appendChild(t);for(let t=1;t<11;t++){const e=document.createElement("th");e.classList.add("th"),e.innerText=t.toString(),n.appendChild(e)}})(n),function(n,t){for(let e=0;e<10;e++){const o=n[e],r=document.createElement("tr");r.id=o;const i=document.createElement("th");i.classList.add("th"),i.innerText=o,r.appendChild(i);const a=S(o);for(const n of a)r.appendChild(n);t.appendChild(r)}}(t,e)})(g,T,m),I=function(n){for(const t of n){const n=document.createElement("li");n.classList.add("ship-item"),n.innerText=t.name,x.appendChild(n)}return document.querySelectorAll(".ship-item")}(C),function(n,t,e){n.forEach((n=>z(n,t,e)))}(C,T,[]),function(n,t){for(const e of t)e.onclick=t=>$(t,n)}(C,b),E.onclick=()=>location.reload()})()})();