!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=16)}([function(t,e,r){"use strict";var n=r(7),o=r(19),i=Object.prototype.toString;function s(t){return"[object Array]"===i.call(t)}function a(t){return null!==t&&"object"==typeof t}function c(t){return"[object Function]"===i.call(t)}function u(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),s(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===i.call(t)},isBuffer:o,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===i.call(t)},isFile:function(t){return"[object File]"===i.call(t)},isBlob:function(t){return"[object Blob]"===i.call(t)},isFunction:c,isStream:function(t){return a(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function t(){var e={};function r(r,n){"object"==typeof e[n]&&"object"==typeof r?e[n]=t(e[n],r):e[n]=r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return e},deepMerge:function t(){var e={};function r(r,n){"object"==typeof e[n]&&"object"==typeof r?e[n]=t(e[n],r):e[n]="object"==typeof r?t({},r):r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return e},extend:function(t,e,r){return u(e,(function(e,o){t[o]=r&&"function"==typeof e?n(e,r):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(5);e.default=class{constructor(){this.cart=new o.default,this.product=new n.default}mount(){this.product.request(),this.addEvent()}addEvent(){document.addEventListener("click",t=>{let e=t.target,r=this.product.elements.filter(t=>t.id==e.getAttribute("data-id"));e.classList.contains("add")&&this.cart.addToCart(r[0]),e.classList.contains("remove")&&this.cart.removeFromCart(r[0])})}}},function(t,e,r){"use strict";r.r(e);var n=r(3),o=r(4);e.default=class{constructor(){this.products="",this.elements=[]}async request(){let t=document.getElementById("products");return(await n.default.get()).data.products.forEach(t=>{let e=new o.default(t);this.products+=e.template(),this.elements.push(t)}),t.insertAdjacentHTML("afterbegin",this.products),this.elements}}},function(t,e,r){"use strict";r.r(e);var n=r(15);const o=r.n(n).a.create({baseURL:"http://api-desafio-front.justdigital.com.br/"});e.default=o},function(t,e,r){"use strict";r.r(e);e.default=class{constructor(t){this.id=t.id,this.title=t.title,this.picture=t.picture,this.brand=t.brand,this.memory=t.memory,this.chipType=t.chipType,this.price=t.price,this.description=t.description,this.quantity=t.quantity}get currentPrice(){return(this.price-.2*this.price).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}get oldPrice(){return this.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}template(){return`\n      <section class="product" id="${this.id}">\n          <figure class="product__image">\n              <img src="${this.picture}" alt="${this.brand}"/>\n          </figure>\n          <section class="product__info">\n              <section class="product__title">\n                  <p class="title">${this.title}</p>\n                  <ul class="features">\n                      <li>${this.chipType}</li>\n                      <li>${this.memory}</li>\n                  </ul>\n              </section>\n              <section class="product__price">\n                  <p class="price">${this.currentPrice}</p>\n                  <p class="oldPrice"><small><del>${this.oldPrice}</del></small></p>\n              </section>\n          </section>\n          <section class="product__actions">\n              <button class="button bookmark">♥</button>\n              <button type="button" class="button add" data-id="${this.id}">Add to Cart</button>\n              <button class="button compare">♣</button>\n          </section>\n      </section>\n      `}}},function(t,e,r){"use strict";r.r(e);e.default=class{constructor(){this.cart=[]}addToCart(t){let e=document.querySelector("#qtd"),r=[];this.cart.push(t),new Set(this.cart).forEach(t=>{let e=this.cart.filter(e=>e.id===t.id).length;r.push({el:t,qtd:e})}),e.textContent=this.cart.length,this.renderCart(r)}removeFromCart(t){let e=document.querySelector("#qtd"),r=[],n=this.cart.findIndex(e=>e.id===t.id);this.cart.splice(n,1),new Set(this.cart).forEach(t=>{let e=this.cart.filter(e=>e.id===t.id).length;r.push({el:t,qtd:e})}),e.textContent=this.cart.length,this.renderCart(r)}clearRender(){document.querySelector("#cart").innerHTML=""}renderCart(t){let e="",r=document.querySelector("#cart");t.length>0?t.forEach(t=>{this.clearRender();let r=(t.el.price-.2*t.el.price).toLocaleString("pt-BR",{style:"currency",currency:"BRL"});e+=`\n            <section class="bag">\n                <section class="bag__item" data-id="${t.el.id}">\n                    <figure>\n                        <img src="${t.el.picture}" />\n                    </figure>\n                    <ul class="bag__info">\n                        <li>${t.el.title}</li>\n                        <li>${r}</li>\n                    </ul>\n                    <section class="bag__actions">\n                        <button class="add" data-id="${t.el.id}">+</button>\n                        <span>${t.qtd}</span>\n                        <button class="remove" data-id="${t.el.id}">-</button>\n                    </section>\n                </section>\n            </section>`}):this.clearRender(),r.insertAdjacentHTML("afterbegin",e)}}},function(t,e,r){"use strict";function n(){Array.from(document.querySelectorAll("img")).forEach(t=>{t.addEventListener("error",()=>{this.setAttribute("src","./../../assets/chibi-naruto.png")})})}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},function(t,e,r){"use strict";var n=r(0);function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(n.isURLSearchParams(e))i=e.toString();else{var s=[];n.forEach(e,(function(t,e){null!=t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))})))})),i=s.join("&")}if(i){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,r){"use strict";(function(e){var n=r(0),o=r(25),i={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,c={adapter:(void 0!==e&&"[object process]"===Object.prototype.toString.call(e)?a=r(11):"undefined"!=typeof XMLHttpRequest&&(a=r(11)),a),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){c.headers[t]=n.merge(i)})),t.exports=c}).call(this,r(24))},function(t,e,r){"use strict";var n=r(0),o=r(26),i=r(8),s=r(28),a=r(29),c=r(12);t.exports=function(t){return new Promise((function(e,u){var f=t.data,l=t.headers;n.isFormData(f)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(t.auth){var p=t.auth.username||"",h=t.auth.password||"";l.Authorization="Basic "+btoa(p+":"+h)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,n={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:t,request:d};o(e,u,n),d=null}},d.onabort=function(){d&&(u(c("Request aborted",t,"ECONNABORTED",d)),d=null)},d.onerror=function(){u(c("Network Error",t,null,d)),d=null},d.ontimeout=function(){u(c("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},n.isStandardBrowserEnv()){var m=r(30),y=(t.withCredentials||a(t.url))&&t.xsrfCookieName?m.read(t.xsrfCookieName):void 0;y&&(l[t.xsrfHeaderName]=y)}if("setRequestHeader"in d&&n.forEach(l,(function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete l[e]:d.setRequestHeader(e,t)})),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){d&&(d.abort(),u(t),d=null)})),void 0===f&&(f=null),d.send(f)}))}},function(t,e,r){"use strict";var n=r(27);t.exports=function(t,e,r,o,i){var s=new Error(t);return n(s,e,r,o,i)}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e){e=e||{};var r={};return n.forEach(["url","method","params","data"],(function(t){void 0!==e[t]&&(r[t]=e[t])})),n.forEach(["headers","auth","proxy"],(function(o){n.isObject(e[o])?r[o]=n.deepMerge(t[o],e[o]):void 0!==e[o]?r[o]=e[o]:n.isObject(t[o])?r[o]=n.deepMerge(t[o]):void 0!==t[o]&&(r[o]=t[o])})),n.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(n){void 0!==e[n]?r[n]=e[n]:void 0!==t[n]&&(r[n]=t[n])})),r}},function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},function(t,e,r){t.exports=r(18)},function(t,e,r){r(17),r(3),r(5),r(1),r(2),r(4),t.exports=r(6)},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(6);const i=new n.default;document.addEventListener("DOMContentLoaded",()=>{i.mount(),setTimeout(()=>{Object(o.default)()},200)},!1)},function(t,e,r){"use strict";var n=r(0),o=r(7),i=r(20),s=r(13);function a(t){var e=new i(t),r=o(i.prototype.request,e);return n.extend(r,i.prototype,e),n.extend(r,e),r}var c=a(r(10));c.Axios=i,c.create=function(t){return a(s(c.defaults,t))},c.Cancel=r(14),c.CancelToken=r(33),c.isCancel=r(9),c.all=function(t){return Promise.all(t)},c.spread=r(34),t.exports=c,t.exports.default=c},function(t,e){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&null!=t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},function(t,e,r){"use strict";var n=r(0),o=r(8),i=r(21),s=r(22),a=r(13);function c(t){this.defaults=t,this.interceptors={request:new i,response:new i}}c.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=a(this.defaults,t)).method=t.method?t.method.toLowerCase():"get";var e=[s,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)r=r.then(e.shift(),e.shift());return r},c.prototype.getUri=function(t){return t=a(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){c.prototype[t]=function(e,r){return this.request(n.merge(r||{},{method:t,url:e}))}})),n.forEach(["post","put","patch"],(function(t){c.prototype[t]=function(e,r,o){return this.request(n.merge(o||{},{method:t,url:e,data:r}))}})),t.exports=c},function(t,e,r){"use strict";var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},function(t,e,r){"use strict";var n=r(0),o=r(23),i=r(9),s=r(10),a=r(31),c=r(32);function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return u(t),t.baseURL&&!a(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||s.adapter)(t).then((function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e,r){return n.forEach(r,(function(r){t=r(t,e)})),t}},function(t,e){var r,n,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(r===setTimeout)return setTimeout(t,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(t){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(t){n=s}}();var c,u=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&p())}function p(){if(!f){var t=a(d);f=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,f=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new h(t,e)),1!==u.length||f||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,r){"use strict";var n=r(0);t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},function(t,e,r){"use strict";var n=r(12);t.exports=function(t,e,r){var o=r.config.validateStatus;!o||o(r.status)?t(r):e(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},function(t,e,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,s={};return t?(n.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),r=n.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([r]):s[e]?s[e]+", "+r:r}})),s):s}},function(t,e,r){"use strict";var n=r(0);t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}},function(t,e,r){"use strict";var n=r(0);t.exports=n.isStandardBrowserEnv()?{write:function(t,e,r,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,r){"use strict";var n=r(14);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}}]);