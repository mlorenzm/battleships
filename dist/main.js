(()=>{"use strict";var t={192:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(81),o=r.n(n),a=r(645),s=r.n(a)()(o());s.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap);"]),s.push([t.id,'.main{display:flex;flex-direction:row;justify-content:space-around;align-items:center;flex:1 1 auto}.container{display:flex;flex-direction:column;gap:2rem;align-items:center}.board-container{display:grid;grid-template-columns:repeat(10, 1fr);grid-template-rows:repeat(10, 1fr);grid-column-gap:0px;grid-row-gap:0px}.board-container div{border:1px solid #2a2a2a;width:2rem;height:2rem}.board-container div:hover{background-color:#b8b8b8;cursor:pointer}.title{font-size:3rem}*{box-sizing:border-box;padding:0;margin:0;border:0;font-family:"Roboto",sans-serif}body{height:100vh;display:flex}',""]);const i=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);n&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function r(t){for(var r=-1,n=0;n<e.length;n++)if(e[n].identifier===t){r=n;break}return r}function n(t,n){for(var a={},s=[],i=0;i<t.length;i++){var c=t[i],l=n.base?c[0]+n.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var h=r(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(p);else{var f=o(p,n);n.byIndex=i,e.splice(i,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var a=n(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var i=r(a[s]);e[i].references--}for(var c=n(t,o),l=0;l<a.length;l++){var d=r(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:t=>{var e={};t.exports=function(t,r){var n=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nc=void 0,(()=>{var t=r(379),e=r.n(t),n=r(795),o=r.n(n),a=r(569),s=r.n(a),i=r(565),c=r.n(i),l=r(216),d=r.n(l),u=r(589),h=r.n(u),p=r(192),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;class m{constructor(t){this.length=t,this.hits=0}hit(){this.hits<this.length&&this.hits++}isSunk(){return this.hits==this.length}getLength(){return this.length}}class g{constructor(){this.board=this.createBoard(),this.ships=this.createShipFleet(),this.missedShots=[]}createBoard(){let t=[],e=[];for(let r=0;r<10;r++){for(let t=0;t<10;t++)e.push({shipName:void 0,shipIndex:void 0});t.push(e),e=[]}return t}getBoard(){return this.board}getMissedShots(){return this.missedShots}createShipFleet(){const t=[],e=[1,1,1,1,2,2,2,3,3,4];for(let r=0;r<e.length;r++){const n=new m(e[r]);t.push(n)}return t}placeShip(t,e,r){if(this.placementIsLegal(t,e,r.getLength()))for(let n=0;n<r.getLength();n++)this.board[t][e+n].shipIndex=n,this.board[t][e+n].shipName=r}placementIsLegal(t,e,r){if(t>10||t<0||e>10||e<0||e+r>10)return!1;for(let n=e;n<e+r;n++)if(null!=this.board[t][n].shipName)return!1;return!0}receiveAttack(t,e){null!=this.board[t][e].shipName?this.board[t][e].shipName.hit():this.missedShots.push([t,e])}allShipsSunk(){let t=!0;return this.board.forEach((e=>{e.forEach((e=>{e.shipName&&0==e.shipName.isSunk()&&(t=!1)}))})),t}}class v{constructor(){this.turn=!0,this.board=new g}getTurn(){return this.turn}toggleTurn(){0==this.turn?this.turn=!0:this.turn=!1}getBoard(){return this.board}attackEnemyBoard(t,e,r){this.getTurn()&&r.board.receiveAttack(t,e),this.toggleTurn(),r.toggleTurn()}}class b extends v{constructor(){super(),this.attacks=[],this.turn=!1}randomAttack(t){const e=Math.floor(10*Math.random()),r=Math.floor(10*Math.random()),n=[e,r];JSON.stringify(this.attacks).includes(JSON.stringify(n))?this.randomAttack(t):this.attackEnemyBoard(e,r,t)}}const y=t=>{const e=document.getElementById(t);for(let t=0;t<=9;t++)for(let r=0;r<=9;r++){const n=document.createElement("div");n.dataset.x=t,n.dataset.y=r,n.addEventListener("click",(()=>[parseInt(n.dataset.x),parseInt(n.dataset.y)])),e.appendChild(n)}};(()=>{const t=new v;(t=>{const e=t.board.createShipFleet();for(;e.length>0;){const r=e.shift();console.log(r);let n=0,o=0;t.board.placeShip(n,o,r),o++}})(t),new b,y("player"),y("computer"),console.log(t.getBoard())})()})()})();