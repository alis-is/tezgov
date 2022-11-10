import{P as De,_ as Ke}from"./main.24e8a7db.js";var Me={exports:{}},S={exports:{}},He=function(r,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return r.apply(t,n)}},Te=He,I=Object.prototype.toString;function ee(e){return Array.isArray(e)}function Z(e){return typeof e>"u"}function Ze(e){return e!==null&&!Z(e)&&e.constructor!==null&&!Z(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}function qe(e){return I.call(e)==="[object ArrayBuffer]"}function Ue(e){return I.call(e)==="[object FormData]"}function Se(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&qe(e.buffer),r}function er(e){return typeof e=="string"}function rr(e){return typeof e=="number"}function Be(e){return e!==null&&typeof e=="object"}function H(e){if(I.call(e)!=="[object Object]")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}function tr(e){return I.call(e)==="[object Date]"}function nr(e){return I.call(e)==="[object File]"}function sr(e){return I.call(e)==="[object Blob]"}function Fe(e){return I.call(e)==="[object Function]"}function ir(e){return Be(e)&&Fe(e.pipe)}function ar(e){return I.call(e)==="[object URLSearchParams]"}function or(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function ur(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function re(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),ee(e))for(var t=0,s=e.length;t<s;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function U(){var e={};function r(n,i){H(e[i])&&H(n)?e[i]=U(e[i],n):H(n)?e[i]=U({},n):ee(n)?e[i]=n.slice():e[i]=n}for(var t=0,s=arguments.length;t<s;t++)re(arguments[t],r);return e}function fr(e,r,t){return re(r,function(n,i){t&&typeof n=="function"?e[i]=Te(n,t):e[i]=n}),e}function cr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}var h={isArray:ee,isArrayBuffer:qe,isBuffer:Ze,isFormData:Ue,isArrayBufferView:Se,isString:er,isNumber:rr,isObject:Be,isPlainObject:H,isUndefined:Z,isDate:tr,isFile:nr,isBlob:sr,isFunction:Fe,isStream:ir,isURLSearchParams:ar,isStandardBrowserEnv:ur,forEach:re,merge:U,extend:fr,trim:or,stripBOM:cr},w=h;function ue(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ge=function(r,t,s){if(!t)return r;var n;if(s)n=s(t);else if(w.isURLSearchParams(t))n=t.toString();else{var i=[];w.forEach(t,function(l,d){l===null||typeof l>"u"||(w.isArray(l)?d=d+"[]":l=[l],w.forEach(l,function(a){w.isDate(a)?a=a.toISOString():w.isObject(a)&&(a=JSON.stringify(a)),i.push(ue(d)+"="+ue(a))}))}),n=i.join("&")}if(n){var o=r.indexOf("#");o!==-1&&(r=r.slice(0,o)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},lr=h;function F(){this.handlers=[]}F.prototype.use=function(r,t,s){return this.handlers.push({fulfilled:r,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};F.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};F.prototype.forEach=function(r){lr.forEach(this.handlers,function(s){s!==null&&r(s)})};var dr=F,pr=h,hr=function(r,t){pr.forEach(r,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[i])})},$e=function(r,t,s,n,i){return r.config=t,s&&(r.code=s),r.request=n,r.response=i,r.isAxiosError=!0,r.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},r},je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Er=$e,Ge=function(r,t,s,n,i){var o=new Error(r);return Er(o,t,s,n,i)},Rr=Ge,mr=function(r,t,s){var n=s.config.validateStatus;!s.status||!n||n(s.status)?r(s):t(Rr("Request failed with status code "+s.status,s.config,null,s.request,s))},Y,fe;function vr(){if(fe)return Y;fe=1;var e=h;return Y=e.isStandardBrowserEnv()?function(){return{write:function(s,n,i,o,u,l){var d=[];d.push(s+"="+encodeURIComponent(n)),e.isNumber(i)&&d.push("expires="+new Date(i).toGMTString()),e.isString(o)&&d.push("path="+o),e.isString(u)&&d.push("domain="+u),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(s){var n=document.cookie.match(new RegExp("(^|;\\s*)("+s+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(s){this.write(s,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Y}var Nr=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},Ir=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},yr=Nr,Pr=Ir,Lr=function(r,t){return r&&!yr(t)?Pr(r,t):t},k,ce;function wr(){if(ce)return k;ce=1;var e=h,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return k=function(s){var n={},i,o,u;return s&&e.forEach(s.split(`
`),function(d){if(u=d.indexOf(":"),i=e.trim(d.substr(0,u)).toLowerCase(),o=e.trim(d.substr(u+1)),i){if(n[i]&&r.indexOf(i)>=0)return;i==="set-cookie"?n[i]=(n[i]?n[i]:[]).concat([o]):n[i]=n[i]?n[i]+", "+o:o}}),n},k}var V,le;function Or(){if(le)return V;le=1;var e=h;return V=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a"),n;function i(o){var u=o;return t&&(s.setAttribute("href",u),u=s.href),s.setAttribute("href",u),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:s.pathname.charAt(0)==="/"?s.pathname:"/"+s.pathname}}return n=i(window.location.href),function(u){var l=e.isString(u)?i(u):u;return l.protocol===n.protocol&&l.host===n.host}}():function(){return function(){return!0}}(),V}var C,de;function g(){if(de)return C;de=1;function e(r){this.message=r}return e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,C=e,C}var Q,pe;function he(){if(pe)return Q;pe=1;var e=h,r=mr,t=vr(),s=ge,n=Lr,i=wr(),o=Or(),u=Ge,l=je,d=g();return Q=function(a){return new Promise(function(E,b){var x=a.data,A=a.headers,_=a.responseType,P;function se(){a.cancelToken&&a.cancelToken.unsubscribe(P),a.signal&&a.signal.removeEventListener("abort",P)}e.isFormData(x)&&delete A["Content-Type"];var c=new XMLHttpRequest;if(a.auth){var Xe=a.auth.username||"",We=a.auth.password?unescape(encodeURIComponent(a.auth.password)):"";A.Authorization="Basic "+btoa(Xe+":"+We)}var ie=n(a.baseURL,a.url);c.open(a.method.toUpperCase(),s(ie,a.params,a.paramsSerializer),!0),c.timeout=a.timeout;function ae(){if(!!c){var m="getAllResponseHeaders"in c?i(c.getAllResponseHeaders()):null,L=!_||_==="text"||_==="json"?c.responseText:c.response,y={data:L,status:c.status,statusText:c.statusText,headers:m,config:a,request:c};r(function(G){E(G),se()},function(G){b(G),se()},y),c=null}}if("onloadend"in c?c.onloadend=ae:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(ae)},c.onabort=function(){!c||(b(u("Request aborted",a,"ECONNABORTED",c)),c=null)},c.onerror=function(){b(u("Network Error",a,null,c)),c=null},c.ontimeout=function(){var L=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded",y=a.transitional||l;a.timeoutErrorMessage&&(L=a.timeoutErrorMessage),b(u(L,a,y.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",c)),c=null},e.isStandardBrowserEnv()){var oe=(a.withCredentials||o(ie))&&a.xsrfCookieName?t.read(a.xsrfCookieName):void 0;oe&&(A[a.xsrfHeaderName]=oe)}"setRequestHeader"in c&&e.forEach(A,function(L,y){typeof x>"u"&&y.toLowerCase()==="content-type"?delete A[y]:c.setRequestHeader(y,L)}),e.isUndefined(a.withCredentials)||(c.withCredentials=!!a.withCredentials),_&&_!=="json"&&(c.responseType=a.responseType),typeof a.onDownloadProgress=="function"&&c.addEventListener("progress",a.onDownloadProgress),typeof a.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",a.onUploadProgress),(a.cancelToken||a.signal)&&(P=function(m){!c||(b(!m||m&&m.type?new d("canceled"):m),c.abort(),c=null)},a.cancelToken&&a.cancelToken.subscribe(P),a.signal&&(a.signal.aborted?P():a.signal.addEventListener("abort",P))),x||(x=null),c.send(x)})},Q}var p=h,Ee=hr,br=$e,xr=je,Ar={"Content-Type":"application/x-www-form-urlencoded"};function Re(e,r){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function _r(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=he()),e}function Mr(e,r,t){if(p.isString(e))try{return(r||JSON.parse)(e),p.trim(e)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(e)}var $={transitional:xr,adapter:_r(),transformRequest:[function(r,t){return Ee(t,"Accept"),Ee(t,"Content-Type"),p.isFormData(r)||p.isArrayBuffer(r)||p.isBuffer(r)||p.isStream(r)||p.isFile(r)||p.isBlob(r)?r:p.isArrayBufferView(r)?r.buffer:p.isURLSearchParams(r)?(Re(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString()):p.isObject(r)||t&&t["Content-Type"]==="application/json"?(Re(t,"application/json"),Mr(r)):r}],transformResponse:[function(r){var t=this.transitional||$.transitional,s=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!s&&this.responseType==="json";if(i||n&&p.isString(r)&&r.length)try{return JSON.parse(r)}catch(o){if(i)throw o.name==="SyntaxError"?br(o,this,"E_JSON_PARSE"):o}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(r){$.headers[r]={}});p.forEach(["post","put","patch"],function(r){$.headers[r]=p.merge(Ar)});var te=$,Hr=h,qr=te,Br=function(r,t,s){var n=this||qr;return Hr.forEach(s,function(o){r=o.call(n,r,t)}),r},J,me;function Ye(){return me||(me=1,J=function(r){return!!(r&&r.__CANCEL__)}),J}var ve=h,X=Br,Fr=Ye(),gr=te,$r=g();function W(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $r("canceled")}var jr=function(r){W(r),r.headers=r.headers||{},r.data=X.call(r,r.data,r.headers,r.transformRequest),r.headers=ve.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),ve.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||gr.adapter;return t(r).then(function(n){return W(r),n.data=X.call(r,n.data,n.headers,r.transformResponse),n},function(n){return Fr(n)||(W(r),n&&n.response&&(n.response.data=X.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},R=h,ke=function(r,t){t=t||{};var s={};function n(f,a){return R.isPlainObject(f)&&R.isPlainObject(a)?R.merge(f,a):R.isPlainObject(a)?R.merge({},a):R.isArray(a)?a.slice():a}function i(f){if(R.isUndefined(t[f])){if(!R.isUndefined(r[f]))return n(void 0,r[f])}else return n(r[f],t[f])}function o(f){if(!R.isUndefined(t[f]))return n(void 0,t[f])}function u(f){if(R.isUndefined(t[f])){if(!R.isUndefined(r[f]))return n(void 0,r[f])}else return n(void 0,t[f])}function l(f){if(f in t)return n(r[f],t[f]);if(f in r)return n(void 0,r[f])}var d={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return R.forEach(Object.keys(r).concat(Object.keys(t)),function(a){var N=d[a]||i,E=N(a);R.isUndefined(E)&&N!==l||(s[a]=E)}),s},z,Ne;function Ve(){return Ne||(Ne=1,z={version:"0.26.1"}),z}var Gr=Ve().version,ne={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){ne[e]=function(s){return typeof s===e||"a"+(r<1?"n ":" ")+e}});var Ie={};ne.transitional=function(r,t,s){function n(i,o){return"[Axios v"+Gr+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return function(i,o,u){if(r===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!Ie[o]&&(Ie[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(i,o,u):!0}};function Yr(e,r,t){if(typeof e!="object")throw new TypeError("options must be an object");for(var s=Object.keys(e),n=s.length;n-- >0;){var i=s[n],o=r[i];if(o){var u=e[i],l=u===void 0||o(u,i,e);if(l!==!0)throw new TypeError("option "+i+" must be "+l);continue}if(t!==!0)throw Error("Unknown option "+i)}}var kr={assertOptions:Yr,validators:ne},Ce=h,Vr=ge,ye=dr,Pe=jr,j=ke,Qe=kr,O=Qe.validators;function M(e){this.defaults=e,this.interceptors={request:new ye,response:new ye}}M.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=j(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var s=t.transitional;s!==void 0&&Qe.assertOptions(s,{silentJSONParsing:O.transitional(O.boolean),forcedJSONParsing:O.transitional(O.boolean),clarifyTimeoutError:O.transitional(O.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(t)===!1||(i=i&&E.synchronous,n.unshift(E.fulfilled,E.rejected))});var o=[];this.interceptors.response.forEach(function(E){o.push(E.fulfilled,E.rejected)});var u;if(!i){var l=[Pe,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var d=t;n.length;){var f=n.shift(),a=n.shift();try{d=f(d)}catch(N){a(N);break}}try{u=Pe(d)}catch(N){return Promise.reject(N)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};M.prototype.getUri=function(r){return r=j(this.defaults,r),Vr(r.url,r.params,r.paramsSerializer).replace(/^\?/,"")};Ce.forEach(["delete","get","head","options"],function(r){M.prototype[r]=function(t,s){return this.request(j(s||{},{method:r,url:t,data:(s||{}).data}))}});Ce.forEach(["post","put","patch"],function(r){M.prototype[r]=function(t,s,n){return this.request(j(n||{},{method:r,url:t,data:s}))}});var Cr=M,D,Le;function Qr(){if(Le)return D;Le=1;var e=g();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(o){s=o});var n=this;this.promise.then(function(i){if(!!n._listeners){var o,u=n._listeners.length;for(o=0;o<u;o++)n._listeners[o](i);n._listeners=null}}),this.promise.then=function(i){var o,u=new Promise(function(l){n.subscribe(l),o=l}).then(i);return u.cancel=function(){n.unsubscribe(o)},u},t(function(o){n.reason||(n.reason=new e(o),s(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(s){if(this.reason){s(this.reason);return}this._listeners?this._listeners.push(s):this._listeners=[s]},r.prototype.unsubscribe=function(s){if(!!this._listeners){var n=this._listeners.indexOf(s);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var s,n=new r(function(o){s=o});return{token:n,cancel:s}},D=r,D}var K,we;function Jr(){return we||(we=1,K=function(r){return function(s){return r.apply(null,s)}}),K}var T,Oe;function Xr(){if(Oe)return T;Oe=1;var e=h;return T=function(t){return e.isObject(t)&&t.isAxiosError===!0},T}var be=h,Wr=He,q=Cr,zr=ke,Dr=te;function Je(e){var r=new q(e),t=Wr(q.prototype.request,r);return be.extend(t,q.prototype,r),be.extend(t,r),t.create=function(n){return Je(zr(e,n))},t}var v=Je(Dr);v.Axios=q;v.Cancel=g();v.CancelToken=Qr();v.isCancel=Ye();v.VERSION=Ve().version;v.all=function(r){return Promise.all(r)};v.spread=Jr();v.isAxiosError=Xr();S.exports=v;S.exports.default=v;(function(e){e.exports=S.exports})(Me);const xe=De(Me.exports);function Kr(e,r,t,s){function n(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function u(f){try{d(s.next(f))}catch(a){o(a)}}function l(f){try{d(s.throw(f))}catch(a){o(a)}}function d(f){f.done?i(f.value):n(f.value).then(u,l)}d((s=s.apply(e,r||[])).next())})}var Ae;(function(e){e[e.CONTINUE=100]="CONTINUE",e[e.SWITCHING_PROTOCOLS=101]="SWITCHING_PROTOCOLS",e[e.PROCESSING=102]="PROCESSING",e[e.OK=200]="OK",e[e.CREATED=201]="CREATED",e[e.ACCEPTED=202]="ACCEPTED",e[e.NON_AUTHORITATIVE_INFORMATION=203]="NON_AUTHORITATIVE_INFORMATION",e[e.NO_CONTENT=204]="NO_CONTENT",e[e.RESET_CONTENT=205]="RESET_CONTENT",e[e.PARTIAL_CONTENT=206]="PARTIAL_CONTENT",e[e.MULTI_STATUS=207]="MULTI_STATUS",e[e.ALREADY_REPORTED=208]="ALREADY_REPORTED",e[e.IM_USED=226]="IM_USED",e[e.MULTIPLE_CHOICES=300]="MULTIPLE_CHOICES",e[e.MOVED_PERMANENTLY=301]="MOVED_PERMANENTLY",e[e.FOUND=302]="FOUND",e[e.SEE_OTHER=303]="SEE_OTHER",e[e.NOT_MODIFIED=304]="NOT_MODIFIED",e[e.USE_PROXY=305]="USE_PROXY",e[e.SWITCH_PROXY=306]="SWITCH_PROXY",e[e.TEMPORARY_REDIRECT=307]="TEMPORARY_REDIRECT",e[e.PERMANENT_REDIRECT=308]="PERMANENT_REDIRECT",e[e.BAD_REQUEST=400]="BAD_REQUEST",e[e.UNAUTHORIZED=401]="UNAUTHORIZED",e[e.PAYMENT_REQUIRED=402]="PAYMENT_REQUIRED",e[e.FORBIDDEN=403]="FORBIDDEN",e[e.NOT_FOUND=404]="NOT_FOUND",e[e.METHOD_NOT_ALLOWED=405]="METHOD_NOT_ALLOWED",e[e.NOT_ACCEPTABLE=406]="NOT_ACCEPTABLE",e[e.PROXY_AUTHENTICATION_REQUIRED=407]="PROXY_AUTHENTICATION_REQUIRED",e[e.REQUEST_TIMEOUT=408]="REQUEST_TIMEOUT",e[e.CONFLICT=409]="CONFLICT",e[e.GONE=410]="GONE",e[e.LENGTH_REQUIRED=411]="LENGTH_REQUIRED",e[e.PRECONDITION_FAILED=412]="PRECONDITION_FAILED",e[e.PAYLOAD_TOO_LARGE=413]="PAYLOAD_TOO_LARGE",e[e.URI_TOO_LONG=414]="URI_TOO_LONG",e[e.UNSUPPORTED_MEDIA_TYPE=415]="UNSUPPORTED_MEDIA_TYPE",e[e.RANGE_NOT_SATISFIABLE=416]="RANGE_NOT_SATISFIABLE",e[e.EXPECTATION_FAILED=417]="EXPECTATION_FAILED",e[e.I_AM_A_TEAPOT=418]="I_AM_A_TEAPOT",e[e.MISDIRECTED_REQUEST=421]="MISDIRECTED_REQUEST",e[e.UNPROCESSABLE_ENTITY=422]="UNPROCESSABLE_ENTITY",e[e.LOCKED=423]="LOCKED",e[e.FAILED_DEPENDENCY=424]="FAILED_DEPENDENCY",e[e.UPGRADE_REQUIRED=426]="UPGRADE_REQUIRED",e[e.PRECONDITION_REQUIRED=428]="PRECONDITION_REQUIRED",e[e.TOO_MANY_REQUESTS=429]="TOO_MANY_REQUESTS",e[e.REQUEST_HEADER_FIELDS_TOO_LARGE=431]="REQUEST_HEADER_FIELDS_TOO_LARGE",e[e.UNAVAILABLE_FOR_LEGAL_REASONS=451]="UNAVAILABLE_FOR_LEGAL_REASONS",e[e.INTERNAL_SERVER_ERROR=500]="INTERNAL_SERVER_ERROR",e[e.NOT_IMPLEMENTED=501]="NOT_IMPLEMENTED",e[e.BAD_GATEWAY=502]="BAD_GATEWAY",e[e.SERVICE_UNAVAILABLE=503]="SERVICE_UNAVAILABLE",e[e.GATEWAY_TIMEOUT=504]="GATEWAY_TIMEOUT",e[e.HTTP_VERSION_NOT_SUPPORTED=505]="HTTP_VERSION_NOT_SUPPORTED",e[e.VARIANT_ALSO_NEGOTIATES=506]="VARIANT_ALSO_NEGOTIATES",e[e.INSUFFICIENT_STORAGE=507]="INSUFFICIENT_STORAGE",e[e.LOOP_DETECTED=508]="LOOP_DETECTED",e[e.NOT_EXTENDED=510]="NOT_EXTENDED",e[e.NETWORK_AUTHENTICATION_REQUIRED=511]="NETWORK_AUTHENTICATION_REQUIRED"})(Ae||(Ae={}));const Tr=typeof process<"u"&&process.versions!=null&&process.versions.node!=null,_e=Tr?void 0:Ke(()=>import("./index.9798b06d.js"),["assets/index.9798b06d.js","assets/main.24e8a7db.js","assets/index.1f9787af.css"]).then(e=>e.default).catch(()=>{});var B;(function(e){e.TEXT="text",e.JSON="json"})(B||(B={}));class Zr extends Error{constructor(r,t,s,n,i){super(r),this.message=r,this.status=t,this.statusText=s,this.body=n,this.url=i,this.name="HttpResponse"}}class Ur extends Error{constructor(r){super(r),this.message=r,this.name="HttpRequestFailed"}}class et{constructor(r=3e4){this.timeout=r}serialize(r){if(!r)return"";const t=[];for(const n in r)if(r.hasOwnProperty(n)&&typeof r[n]<"u"){const i=typeof r[n].toJSON=="function"?r[n].toJSON():r[n];if(i===null){t.push(encodeURIComponent(n));continue}if(Array.isArray(i)){i.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))});continue}t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}const s=t.join("&");return s?`?${s}`:""}createRequest({url:r,method:t,timeout:s=this.timeout,query:n,headers:i={},json:o=!0},u){return Kr(this,void 0,void 0,function*(){let l,d;i["Content-Type"]||(i["Content-Type"]="application/json"),o?l=B.JSON:(l=B.TEXT,d=[f=>f]);try{const f=_e&&(yield _e);return(yield xe.request({url:r+this.serialize(n),method:t!=null?t:"GET",headers:i,responseType:l,transformResponse:d,timeout:s,data:u,adapter:f})).data}catch(f){if(xe.isAxiosError(f)&&f.response){let a;throw typeof f.response.data=="object"?a=JSON.stringify(f.response.data):a=f.response.data,new Zr(`Http error response: (${f.response.status}) ${a}`,f.response.status,f.response.statusText,a,r+this.serialize(n))}else throw new Ur(`${t} ${r+this.serialize(n)} ${String(f)}`)}})}}export{et as H,Ae as S,Zr as a,Lr as b,ge as c,xe as d,mr as s,h as u};
