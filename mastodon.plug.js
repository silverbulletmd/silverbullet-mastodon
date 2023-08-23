var mod=(()=>{var W=Object.defineProperty;var ze=Object.getOwnPropertyDescriptor;var $e=Object.getOwnPropertyNames;var Le=Object.prototype.hasOwnProperty;var C=(e,t)=>{for(var r in t)W(e,r,{get:t[r],enumerable:!0})},qe=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of $e(t))!Le.call(e,o)&&o!==r&&W(e,o,{get:()=>t[o],enumerable:!(n=ze(t,o))||n.enumerable});return e};var Ue=e=>qe(W({},"__esModule",{value:!0}),e);var Jr={};C(Jr,{functionMapping:()=>Ne});function oe(e){let t=atob(e),r=t.length,n=new Uint8Array(r);for(let o=0;o<r;o++)n[o]=t.charCodeAt(o);return n}function B(e){typeof e=="string"&&(e=new TextEncoder().encode(e));let t="",r=e.byteLength;for(let n=0;n<r;n++)t+=String.fromCharCode(e[n]);return btoa(t)}async function We(e,t){return typeof e!="string"&&(t={method:e.method,headers:Object.fromEntries(e.headers.entries()),base64Body:e.body?B(new Uint8Array(await new Response(e.body).arrayBuffer())):void 0},e=e.url),syscall("sandboxFetch.fetch",e,t)}function se(){globalThis.nativeFetch=globalThis.fetch,globalThis.fetch=async function(e,t){let r=await We(e,t&&{method:t.method,headers:t.headers,base64Body:t.body?B(new Uint8Array(await new Response(t.body).arrayBuffer())):void 0});return new Response(r.base64Body?oe(r.base64Body):null,{status:r.status,headers:r.headers})}}typeof Deno>"u"&&(self.Deno={args:[],build:{arch:"x86_64"},env:{get(){}}});var Y=new Map,G=0;function R(e){self.postMessage(e)}self.syscall=async(e,...t)=>await new Promise((r,n)=>{G++,Y.set(G,{resolve:r,reject:n}),R({type:"sys",id:G,name:e,args:t})});function ie(e,t){self.addEventListener("message",r=>{(async()=>{let n=r.data;switch(n.type){case"inv":{let o=e[n.name];if(!o)throw new Error(`Function not loaded: ${n.name}`);try{let s=await Promise.resolve(o(...n.args||[]));R({type:"invr",id:n.id,result:s})}catch(s){console.error(s),R({type:"invr",id:n.id,error:s.message})}}break;case"sysr":{let o=n.id,s=Y.get(o);if(!s)throw Error("Invalid request id");Y.delete(o),n.error?s.reject(new Error(n.error)):s.resolve(n.result)}break}})().catch(console.error)}),R({type:"manifest",manifest:t})}se();var w={};C(w,{confirm:()=>pt,dispatch:()=>lt,downloadFile:()=>tt,filterBox:()=>nt,flashNotification:()=>rt,fold:()=>yt,foldAll:()=>wt,getCurrentPage:()=>Be,getCursor:()=>He,getSelection:()=>Ve,getText:()=>Ye,getUiOption:()=>dt,hidePanel:()=>st,insertAtCursor:()=>ut,insertAtPos:()=>it,moveCursor:()=>ct,navigate:()=>Ke,openUrl:()=>et,prompt:()=>ft,reloadPage:()=>Ze,reloadUI:()=>Xe,replaceRange:()=>at,save:()=>Qe,setPage:()=>Ge,setSelection:()=>Je,setUiOption:()=>mt,showPanel:()=>ot,toggleFold:()=>vt,unfold:()=>gt,unfoldAll:()=>bt,vimEx:()=>ht});typeof self>"u"&&(self={syscall:()=>{throw new Error("Not implemented here")}});var l=self.syscall;function Be(){return l("editor.getCurrentPage")}function Ge(e){return l("editor.setPage",e)}function Ye(){return l("editor.getText")}function He(){return l("editor.getCursor")}function Ve(){return l("editor.getSelection")}function Je(e,t){return l("editor.setSelection",e,t)}function Qe(){return l("editor.save")}function Ke(e,t,r=!1,n=!1){return l("editor.navigate",e,t,r,n)}function Ze(){return l("editor.reloadPage")}function Xe(){return l("editor.reloadUI")}function et(e,t=!1){return l("editor.openUrl",e,t)}function tt(e,t){return l("editor.downloadFile",e,t)}function rt(e,t="info"){return l("editor.flashNotification",e,t)}function nt(e,t,r="",n=""){return l("editor.filterBox",e,t,r,n)}function ot(e,t,r,n=""){return l("editor.showPanel",e,t,r,n)}function st(e){return l("editor.hidePanel",e)}function it(e,t){return l("editor.insertAtPos",e,t)}function at(e,t,r){return l("editor.replaceRange",e,t,r)}function ct(e,t=!1){return l("editor.moveCursor",e,t)}function ut(e){return l("editor.insertAtCursor",e)}function lt(e){return l("editor.dispatch",e)}function ft(e,t=""){return l("editor.prompt",e,t)}function pt(e){return l("editor.confirm",e)}function dt(e){return l("editor.getUiOption",e)}function mt(e,t){return l("editor.setUiOption",e,t)}function ht(e){return l("editor.vimEx",e)}function yt(){return l("editor.fold")}function gt(){return l("editor.unfold")}function vt(){return l("editor.toggleFold")}function wt(){return l("editor.foldAll")}function bt(){return l("editor.unfoldAll")}var O={};C(O,{parseMarkdown:()=>Pt});function Pt(e){return l("markdown.parseMarkdown",e)}var P={};C(P,{deleteAttachment:()=>Mt,deleteFile:()=>zt,deletePage:()=>At,getAttachmentMeta:()=>Ct,getFileMeta:()=>Dt,getPageMeta:()=>Tt,listAttachments:()=>Et,listFiles:()=>Rt,listPages:()=>_t,listPlugs:()=>jt,readAttachment:()=>It,readFile:()=>Ft,readPage:()=>St,writeAttachment:()=>kt,writeFile:()=>Nt,writePage:()=>Ot});function _t(e=!1){return l("space.listPages",e)}function Tt(e){return l("space.getPageMeta",e)}function St(e){return l("space.readPage",e)}function Ot(e,t){return l("space.writePage",e,t)}function At(e){return l("space.deletePage",e)}function jt(){return l("space.listPlugs")}function Et(){return l("space.listAttachments")}function Ct(e){return l("space.getAttachmentMeta",e)}function It(e){return l("space.readAttachment",e)}function kt(e,t){return l("space.writeAttachment",e,t)}function Mt(e){return l("space.deleteAttachment",e)}function Rt(){return l("space.listFiles")}function Ft(e){return l("space.readFile",e)}function Dt(e){return l("space.getFileMeta",e)}function Nt(e,t){return l("space.writeFile",e,t)}function zt(e){return l("space.deleteFile",e)}function H(e){if(e.children)for(let t of e.children){if(t.parent)return;t.parent=e,H(t)}}function F(e,t){if(t(e))return[e];let r=[];if(e.children)for(let n of e.children)r=[...r,...F(n,t)];return r}async function I(e,t){if(e.children){let r=e.children.slice();for(let n of r){let o=await t(n);if(o!==void 0){let s=e.children.indexOf(n);o?e.children.splice(s,1,o):e.children.splice(s,1)}else await I(n,t)}}}function ae(e,t){return F(e,t)[0]}function b(e,t){return F(e,r=>r.type===t)[0]}function ce(e,t){F(e,t)}function A(e){let t=[];if(e.text!==void 0)return e.text;for(let r of e.children)t.push(A(r));return t.join("")}var _=globalThis.syscall;var g={};C(g,{parse:()=>Ht,stringify:()=>Vt});function Ht(e){return _("yaml.parse",e)}function Vt(e){return _("yaml.stringify",e)}async function Qt(e,t){let r=await P.readPage(e),n=await O.parseMarkdown(r),o;return ce(n,s=>{if(s.type!=="FencedCode")return!1;let i=b(s,"CodeInfo");if(t&&!i||t&&!t.includes(i.children[0].text))return!1;let a=b(s,"CodeText");return a?(o=a.children[0].text,!0):!1}),o}async function D(e,t=["yaml"]){let r=await Qt(e,t);if(r!==void 0)try{return g.parse(r)}catch(n){throw console.error("YAML Page parser error",n),new Error(`YAML Error: ${n.message}`)}}var Kt="SETTINGS";async function N(e,t){try{let n=(await D(Kt,["yaml"])||{})[e];return n===void 0?t:n}catch(r){if(r.message==="Not found")return t;throw r}}async function ue(e){try{let r=(await D("SECRETS",["yaml","secrets"]))[e];if(r===void 0)throw new Error(`No such secret: ${e}`);return r}catch(t){throw t.message==="Not found"?new Error(`No such secret: ${e}`):t}}async function le(e,t){let r={};return await I(e,async n=>{if(n.type==="ListItem")return n;if(n.type==="Attribute"){let o=b(n,"AttributeName"),s=b(n,"AttributeValue");if(o&&s){let i=o.children[0].text,a=s.children[0].text;try{r[i]=await g.parse(a)}catch(c){console.error("Error parsing attribute value as YAML",a,c)}}return t?null:n}}),r}async function pe(e){let t=[],r=[];if(e.type!=="Document")throw new Error("Did not get a document");for(let n of e.children){if(n.type==="FrontMatter"){console.log("Ignoring",n);continue}n.type==="HorizontalRule"?(r.push(await fe(t)),t=[]):t.push(n)}return A({children:t}).trim().length>0&&r.push(await fe(t)),r}async function fe(e){let t={children:e},r=await le(t,!0),n=r.id;if(delete r.id,!n){let c=b(t,"NamedAnchor");c&&(n=c.children[0].text.substring(1),n.startsWith("id/")&&(n=n.substring(3)),c.children=[])}let o,s=ae(t,c=>!!c.type?.startsWith("ATXHeading"));s&&(o=s.children[1].text.trim(),s.children=[]);let i=A(t).trim();n||(n=`gen/${Zt(JSON.stringify({attributes:r,text:i}))}`);let a={id:n,text:i};return o&&(a.title=o),Object.keys(r).length>0&&(a.attributes=r),a}function Zt(e){let t=5381;for(let r=0;r<e.length;r++)t=t*33^e.charCodeAt(r);return t.toString(16)}async function de(e,t=[],r=!1){let n={};return H(e),await I(e,async o=>{if(o.type==="Hashtag"){if(o.parent&&o.parent.type==="Paragraph"){let f=o.children[0].text.substring(1);n.tags||(n.tags=[]),Array.isArray(n.tags)&&!n.tags.includes(f)&&n.tags.push(f)}return}if(o.type==="FrontMatter"){let f=o.children[1].children[0],p=A(f);try{let d=await g.parse(p),v={...d};if(n={...n,...d},t.length>0){let S=!1;for(let M of t)M in v&&(delete v[M],S=!0);S&&(f.text=await g.stringify(v))}if(Object.keys(v).length===0||r)return null}catch(d){console.warn("Could not parse frontmatter",d.message)}}if(o.type!=="FencedCode")return;let s=b(o,"CodeInfo");if(!s||s.children[0].text!=="meta")return;let i=b(o,"CodeText");if(!i)return;let a=i.children[0].text,c=g.parse(a),u={...c};if(n={...n,...c},t.length>0){let f=!1;for(let p of t)p in u&&(delete u[p],f=!0);f&&(i.children[0].text=(await g.stringify(u)).trim())}if(Object.keys(u).length===0)return null}),n.name&&(n.displayName=n.name,delete n.name),n}function Xt(e,t){var r=Object.setPrototypeOf;r?r(e,t):e.__proto__=t}function er(e,t){t===void 0&&(t=e.constructor);var r=Error.captureStackTrace;r&&r(e,t)}var tr=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(n[s]=o[s])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),j=function(e){tr(t,e);function t(r,n){var o=this.constructor,s=e.call(this,r,n)||this;return Object.defineProperty(s,"name",{value:o.name,enumerable:!1,configurable:!0}),Xt(s,o.prototype),er(s),s}return t}(Error);var h=function(){return h=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},h.apply(this,arguments)};function me(e){return e.toLowerCase()}var rr=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],nr=/[^A-Z0-9]+/gi;function T(e,t){t===void 0&&(t={});for(var r=t.splitRegexp,n=r===void 0?rr:r,o=t.stripRegexp,s=o===void 0?nr:o,i=t.transform,a=i===void 0?me:i,c=t.delimiter,u=c===void 0?" ":c,f=he(he(e,n,"$1\0$2"),s,"\0"),p=0,d=f.length;f.charAt(p)==="\0";)p++;for(;f.charAt(d-1)==="\0";)d--;return f.slice(p,d).split("\0").map(a).join(u)}function he(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce(function(n,o){return n.replace(o,r)},e)}function V(e,t){var r=e.charAt(0),n=e.substr(1).toLowerCase();return t>0&&r>="0"&&r<="9"?"_"+r+n:""+r.toUpperCase()+n}function ye(e,t){return t===void 0&&(t={}),T(e,h({delimiter:"",transform:V},t))}function or(e,t){return t===0?e.toLowerCase():V(e,t)}function ge(e,t){return t===void 0&&(t={}),ye(e,h({transform:or},t))}function z(e,t){return t===void 0&&(t={}),T(e,h({delimiter:"."},t))}var $=function(){return $=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},$.apply(this,arguments)};function L(e,t){return t===void 0&&(t={}),z(e,$({delimiter:"_"},t))}var ir=Object.create,Q=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,cr=Object.getOwnPropertyNames,ur=Object.getPrototypeOf,lr=Object.prototype.hasOwnProperty,fr=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),pr=(e,t)=>{for(var r in t)Q(e,r,{get:t[r],enumerable:!0})},J=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of cr(t))!lr.call(e,o)&&o!==r&&Q(e,o,{get:()=>t[o],enumerable:!(n=ar(t,o))||n.enumerable});return e},dr=(e,t,r)=>(J(e,t,"default"),r&&J(r,t,"default")),we=(e,t,r)=>(r=e!=null?ir(ur(e)):{},J(t||!e||!e.__esModule?Q(r,"default",{value:e,enumerable:!0}):r,e)),be=fr((e,t)=>{"use strict";t.exports=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}}),xe={};pr(xe,{default:()=>Pe});var mr=we(be());dr(xe,we(be()));var{default:ve,...hr}=mr,Pe=ve!==void 0?ve:hr;function yr(){let e,t,r=new Promise((...n)=>[e,t]=n);return Object.freeze({resolve:e,reject:t,promise:r})}function _e(e,t){let r=[],n=[],o=e((...f)=>{let p=n.shift();p?p.resolve({value:f,done:!1}):r.push(f)}),s=t?.signal,i=!1,a=null,c=()=>{o?.()},u=()=>{s?.removeEventListener("abort",c),a=new Error("Abort Error")};return s?.addEventListener("abort",u,{once:!0}),{async next(){let f=r.shift();if(f)return{value:f,done:!1};if(i)return{value:void 0,done:!0};if(a)return Promise.reject(a);let p=yr();return n.push(p),p.promise},async return(){i=!0,c();for(let f of n)f.resolve({value:void 0,done:!0});return{value:void 0,done:!0}},async throw(f){return a=f,c(),{value:void 0,done:!0}},[Symbol.asyncIterator](){return this}}}var E=class extends j{},Te=class extends j{constructor(e,t,r,n){super(e,n),this.contentType=t,this.data=r}},je=class extends j{constructor(e,t){super(e.message,t),this.statusCode=e.statusCode,this.message=e.message,this.description=e.description,this.additionalProperties=e.additionalProperties,this.details=e.details}};var Ee=class extends j{};function Ce(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r}function x(e,t,r,n){function o(s){return s instanceof r?s:new r(function(i){i(s)})}return new(r||(r=Promise))(function(s,i){function a(f){try{u(n.next(f))}catch(p){i(p)}}function c(f){try{u(n.throw(f))}catch(p){i(p)}}function u(f){f.done?s(f.value):o(f.value).then(a,c)}u((n=n.apply(e,t||[])).next())})}function Se(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function q(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),o,s=[];return o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o;function i(d){n[d]&&(o[d]=function(v){return new Promise(function(S,M){s.push([d,v,S,M])>1||a(d,v)})})}function a(d,v){try{c(n[d](v))}catch(S){p(s[0][3],S)}}function c(d){d.value instanceof m?Promise.resolve(d.value.v).then(u,f):p(s[0][2],d)}function u(d){a("next",d)}function f(d){a("throw",d)}function p(d,v){d(v),s.shift(),s.length&&a(s[0][0],s[0][1])}}function K(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof Se=="function"?Se(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(s){r[s]=e[s]&&function(i){return new Promise(function(a,c){i=e[s](i),o(a,c,i.done,i.value)})}}function o(s,i,a,c){Promise.resolve(c).then(function(u){s({value:u,done:a})},i)}}var Ie=e=>new Promise(t=>setTimeout(()=>t(),e));function gr(){}var vr=class extends j{constructor(e,t){super(`Maximum number of attempts reached: ${e}`,t)}},ns=class{constructor(e={}){this.props=e,this.attempts=0}sleep(){return x(this,void 0,void 0,function*(){if(this.attempts>=this.maxAttempts)throw new vr(this.attempts);yield Ie(this.getTimeout()),this.attempts++})}clear(){this.attempts=0}get factor(){var e;return(e=this.props.factor)!==null&&e!==void 0?e:1e3}get base(){var e;return(e=this.props.base)!==null&&e!==void 0?e:2}get maxAttempts(){var e;return(e=this.props.maxAttempts)!==null&&e!==void 0?e:Number.POSITIVE_INFINITY}getTimeout(){return this.factor*Math.pow(this.base,this.attempts)}values(){return q(this,arguments,function*(){for(;this.attempts<this.maxAttempts;)yield yield m(this.sleep())})}[Symbol.asyncIterator](){return this.values()}};var wr=e=>{let t=new Map;for(let r of e.split(",")){let n=r.match(/<([^>]+)>;\s*rel="([^"]+)"/);n&&t.set(n[2],n[1])}return t},br=class Z{constructor(t,r,n,o,s="next"){this.http=t,this.nextPath=r,this.nextParams=n,this.meta=o,this.direction=s}next(){return x(this,void 0,void 0,function*(){if(this.nextPath==null)return{done:!0,value:void 0};let t=yield this.http.request(Object.assign({method:"GET",path:this.nextPath,search:this.nextParams},this.meta)),r=this.getLink(t.headers.get("link"));return this.nextPath=r?.pathname,this.nextParams=r?.search.replace(/^\?/,""),{done:!1,value:yield t.data}})}return(t){return x(this,void 0,void 0,function*(){return this.clear(),{done:!0,value:yield t}})}throw(t){return x(this,void 0,void 0,function*(){throw this.clear(),t})}then(t=Promise.resolve.bind(Promise),r=Promise.reject.bind(Promise)){return this.next().then(n=>t(n.value),r)}values(){return this[Symbol.asyncIterator]()}getDirection(){return this.direction}setDirection(t){return new Z(this.http,this.nextPath,this.nextParams,this.meta,t)}[Symbol.asyncIterator](){return this}getLink(t){if(t==null)return;let r=wr(t).get(this.direction);if(r!=null)return new URL(r)}clear(){this.nextPath=void 0,this.nextParams=void 0}clone(){return new Z(this.http,this.nextPath,this.nextParams,this.meta,this.direction)}},xr=class{constructor(e,t={}){this.http=e,this.params=t,this.waitForMediaAttachment=r=>x(this,void 0,void 0,function*(){let n,o=AbortSignal.timeout(this.mediaTimeout);for(;n==null;){if(o.aborted)throw new Ee(`Media processing timed out of ${this.mediaTimeout}ms`);try{yield Ie(1e3);let s=yield this.http.get(`/api/v1/media/${r}`);s.url!=null&&(n=s)}catch(s){if(s instanceof je&&s.statusCode===404)continue;throw s}}return n})}dispatch(e){let t=this.toPrimitiveAction(e.type),r=this.isPrimitiveAction(e.type)?e.path:e.path+"/"+L(e.type),n=this.inferEncoding(t,r),o=Object.assign(Object.assign({},e.meta),{encoding:n});switch(t){case"fetch":return this.http.get(r,e.data,o);case"create":return r==="/api/v2/media"?this.http.post(r,e.data,o).then(s=>this.waitForMediaAttachment(s.id)):this.http.post(r,e.data,o);case"update":return this.http.patch(r,e.data,o);case"remove":return this.http.delete(r,e.data,o);case"list":return new br(this.http,r,e.data)}}isPrimitiveAction(e){switch(e){case"fetch":case"create":case"update":case"remove":case"list":return!0;default:return!1}}toPrimitiveAction(e){if(this.isPrimitiveAction(e))return e;switch(e){case"lookup":case"verify_credentials":return"fetch";case"update_credentials":return"update";default:return"create"}}inferEncoding(e,t){return e==="create"&&t==="/api/v1/accounts"||e==="update"&&t==="/api/v1/accounts/update_credentials"||e==="create"&&t==="/api/v1/email"||e==="create"&&t==="/api/v1/featured_tag"||e==="create"&&t==="/api/v1/media"||e==="create"&&t==="/api/v2/media"?"multipart-form":"json"}get mediaTimeout(){var e;return(e=this.params.mediaTimeout)!==null&&e!==void 0?e:60*1e3}};function Pr(e){return q(this,arguments,function*(){var t,r,n,o;let s=p=>x(this,void 0,void 0,function*(){if(a.return==null)throw new E("events.return is undefined");yield a.return(p)}),i=p=>x(this,void 0,void 0,function*(){if(a.return==null)throw new E("events.return is undefined");yield a.return(p)}),a=_e(p=>(e.addEventListener("message",p),e.addEventListener("error",i),e.addEventListener("close",s),()=>{e.removeEventListener("message",p),e.removeEventListener("error",i),e.removeEventListener("close",s)}));try{for(var c=!0,u=K(a),f;f=yield m(u.next()),t=f.done,!t;c=!0){o=f.value,c=!1;let[p]=o;yield yield m(p)}}catch(p){r={error:p}}finally{try{!c&&!t&&(n=u.return)&&(yield m(n.call(u)))}finally{if(r)throw r.error}}})}var os=class{constructor(e,t,r,n,o){this.connector=e,this.serializer=t,this.stream=r,this.logger=n,this.params=o}values(){var e,t,r;return q(this,arguments,function*(){var n,o,s,i;for((e=this.logger)===null||e===void 0||e.info("Subscribing to stream",this.stream);this.connector.canAcquire();){this.connection=yield m(this.connector.acquire());let f=Pr(this.connection),p=this.serializer.serialize("json",Object.assign({type:"subscribe",stream:this.stream},this.params));(t=this.logger)===null||t===void 0||t.debug("\u2191 WEBSOCKET",p),this.connection.send(p);try{for(var a=!0,c=(o=void 0,K(this.transformIntoEvents(f))),u;u=yield m(c.next()),n=u.done,!n;a=!0){i=u.value,a=!1;let d=i;this.matches(d)&&((r=this.logger)===null||r===void 0||r.debug("\u2193 WEBSOCKET",d),yield yield m(d))}}catch(d){o={error:d}}finally{try{!a&&!n&&(s=c.return)&&(yield m(s.call(c)))}finally{if(o)throw o.error}}}})}unsubscribe(){if(this.connection==null)return;let e=this.serializer.serialize("json",Object.assign({type:"unsubscribe",stream:this.stream},this.params));this.connection.send(e)}[Symbol.asyncIterator](){return this.values()}matches(e){var t;let r=(t=this.params)!==null&&t!==void 0?t:{},n=Object.values(r);return[this.stream,...n].every(o=>e.stream.includes(o))}transformIntoEvents(e){return q(this,arguments,function*(){var t,r,n,o;try{for(var s=!0,i=K(e),a;a=yield m(i.next()),t=a.done,!t;s=!0){o=a.value,s=!1;let c=o,u=yield m(this.parseMessage(c.data));yield yield m(u)}}catch(c){r={error:c}}finally{try{!s&&!t&&(n=i.return)&&(yield m(n.call(i)))}finally{if(r)throw r.error}}})}parseMessage(e){return x(this,void 0,void 0,function*(){let t=this.serializer.deserialize("json",e);if("error"in t)throw new E(t.error);let r=t.event==="delete"||t.payload==null?t.payload:this.serializer.deserialize("json",t.payload);return{stream:t.stream,event:t.event,payload:r}})}};var U=(e,t=[])=>new Proxy(gr,{get:Tr(e,t),apply:Sr(e,t)}),_r=new Set(["then","catch","finally","inspect","toString","valueOf","toJSON","constructor","prototype","length","name","caller","callee","arguments","bind","apply","call"]),Tr=(e,t)=>(r,n)=>{if(!(typeof n=="string"&&_r.has(n))&&typeof n!="symbol")return n==="$select"?U(e,[...t,n]):U(e,[...t,L(n)])},Sr=(e,t)=>(r,n,o)=>{let s=t.pop();if(s==null)throw new Error("No action specified");if(s==="$select")return U(e,[...t,...o]);let i="/"+t.join("/"),[a,c]=o;return e.dispatch({type:s,path:i,data:a,meta:c})},Or=e=>{let t=new AbortController;for(let r of e)r.addEventListener("abort",()=>t.abort(),{once:!0});return t.signal},Ar=([e,...t])=>{let r=new Headers(e);for(let n of t)for(let[o,s]of new Headers(n).entries())r.set(o,s);return r},jr=1e3*300,Er=class{constructor(e,t){this.props=e,this.serializer=t}mergeRequestInitWithDefaults(e={}){let t=Object.assign({},this.props.requestInit);{let{headers:r,signal:n}=e,o=Ce(e,["headers","signal"]);Object.assign(t,o),t.headers=this.mergeHeadersWithDefaults(r),t.signal=this.mergeAbortSignalWithDefaults(n)}return t}resolvePath(e,t){let r=new URL(e,this.props.url);return typeof t=="string"?r.search=t:t!=null&&(r.search=this.serializer.serialize("querystring",t)),r}createTimeout(){var e;return AbortSignal.timeout((e=this.props.timeout)!==null&&e!==void 0?e:jr)}mergeHeadersWithDefaults(e={}){var t,r;let n=Ar([(r=(t=this.props.requestInit)===null||t===void 0?void 0:t.headers)!==null&&r!==void 0?r:{},e]),o=new Headers(n);return this.props.accessToken&&o.set("Authorization",`Bearer ${this.props.accessToken}`),new Headers(o)}mergeAbortSignalWithDefaults(e){var t;let r=[this.createTimeout()];return!((t=this.props.requestInit)===null||t===void 0)&&t.signal&&r.push(this.props.requestInit.signal),e!=null&&r.push(e),Or(r)}};var Cr=class{get(e,t,r={}){return this.request(Object.assign({method:"GET",path:e,search:t},r)).then(n=>n.data)}post(e,t,r={}){return this.request(Object.assign({method:"POST",path:e,body:t},r)).then(n=>n.data)}delete(e,t,r={}){return this.request(Object.assign({method:"DELETE",path:e,body:t},r)).then(n=>n.data)}put(e,t,r={}){return this.request(Object.assign({method:"PUT",path:e,body:t},r)).then(n=>n.data)}patch(e,t,r={}){return this.request(Object.assign({method:"PATCH",path:e,body:t},r)).then(n=>n.data)}},Oe=e=>{var t;let r=(t=e.get("Content-Type"))===null||t===void 0?void 0:t.replace(/\s*;.*$/,"");if(typeof r=="string")switch(r){case"application/json":return"json";case"multipart/form-data":return"multipart-form";default:return}},Ir=class extends Cr{constructor(e,t,r){super(),this.serializer=e,this.config=t,this.logger=r}request(e){var t,r,n,o,s;return x(this,void 0,void 0,function*(){let i=this.createRequest(e);try{(t=this.logger)===null||t===void 0||t.info(`\u2191 ${i.method} ${i.url}`),(r=this.logger)===null||r===void 0||r.debug("	body",{encoding:e.encoding,body:e.body});let a=yield fetch(i);if(!a.ok)throw a;let c=yield a.text(),u=Oe(a.headers);if(u==null)throw new E("The server returned data with an unknown encoding.");let f=this.serializer.deserialize(u,c);return(n=this.logger)===null||n===void 0||n.info(`\u2193 ${i.method} ${i.url}`),(o=this.logger)===null||o===void 0||o.debug("	body",c),{headers:a.headers,data:f}}catch(a){throw(s=this.logger)===null||s===void 0||s.debug("HTTP failed",a),yield this.createError(a)}})}createRequest(e){let{method:t,path:r,search:n,encoding:o="json",requestInit:s={}}=e,i=this.config.resolvePath(r,n),a=this.serializer.serialize(o,e.body),c=this.config.mergeRequestInitWithDefaults(s),u=new Request(i,Object.assign({method:t,body:a},c));return typeof a=="string"&&o==="json"&&u.headers.set("Content-Type","application/json"),u}createError(e){return x(this,void 0,void 0,function*(){if(e instanceof Response){let t=Oe(e.headers);if(t==null)throw new E("The server returned data with an unknown encoding. The server may be down.");let r=this.serializer.deserialize(t,yield e.text()),{error:n,errorDescription:o,details:s}=r,i=Ce(r,["error","errorDescription","details"]);return new je({statusCode:e.status,message:n,description:o,details:s,additionalProperties:i},{cause:e})}return e!=null&&e.name==="AbortError"?new Ee("Request timed out",{cause:e}):e})}},kr=class{constructor(e){this.logLevel=e}debug(e,t){this.logLevel.satisfies("debug")&&this.log("debug",e,t)}info(e,t){this.logLevel.satisfies("info")&&this.log("info",e,t)}warn(e,t){this.logLevel.satisfies("warn")&&this.log("warn",e,t)}error(e,t){this.logLevel.satisfies("error")&&this.log("error",e,t)}},Mr=class extends kr{log(e,t,r){let n=r==null?[t]:[t,r];switch(e){case"debug":{console.debug(...n);return}case"info":{console.info(...n);return}case"warn":{console.warn(...n);return}case"error":{console.error(...n);return}}}},y=Object.freeze({DEBUG:1,INFO:2,WARN:4,ERROR:8}),Rr=class k{constructor(t){this.level=t}satisfies(t){switch(t){case"debug":return!!(this.level&y.DEBUG);case"info":return!!(this.level&y.INFO);case"warn":return!!(this.level&y.WARN);case"error":return!!(this.level&y.ERROR)}}static from(t){switch(t){case"debug":return new k(y.DEBUG|y.INFO|y.WARN|y.ERROR);case"info":return new k(y.INFO|y.WARN|y.ERROR);case"warn":return new k(y.WARN|y.ERROR);case"error":return new k(y.ERROR)}}},Fr=e=>{let t=Rr.from(e??"warn");return new Mr(t)},re=e=>typeof e=="object"&&e!==null&&e.constructor.name==="Object",X=(e,t="")=>Array.isArray(e)?e.map((r,n)=>X(r,t==""?n.toString():`${t}[${n}]`)).reduce((r,n)=>Object.assign(r,n),{}):re(e)?Object.entries(e).map(([r,n])=>X(n,t===""?r:`${t}[${r}]`)).reduce((r,n)=>Object.assign(r,n),{}):t===""?e:{[t]:e},ee=(e,t="")=>Array.isArray(e)?e.flatMap((r,n)=>ee(r,t==""?n.toString():`${t}[]`)):re(e)?Object.entries(e).flatMap(([r,n])=>ee(n,t===""?r:`${t}[${r}]`)):[[t,e]],Dr=e=>ee(e).filter(([,t])=>t!=null).map(([t,r])=>`${t}=${encodeURIComponent(r)}`).join("&"),Nr={stringify:Dr},te=(e,t)=>Array.isArray(e)?e.map(r=>te(r,t)):re(e)?Object.fromEntries(Object.entries(e).map(([r,n])=>[t(r),te(n,t)])):e,Ae=(e,t)=>te(e,r=>r.includes(":")||r.startsWith("_")?r:t(r)),zr=class{serialize(e,t){let r=Ae(t,L);switch(e){case"json":return JSON.stringify(r);case"multipart-form":{let n=new FormData;for(let[o,s]of Object.entries(X(r)))n.append(o,s);return n}case"querystring":return Nr.stringify(r);default:throw new E(`Unknown content type ${e} to serialize.`)}}deserialize(e,t){switch(e){case"json":try{return Ae(JSON.parse(t),ge)}catch{throw new Te(`Malformed JSON ${t} returned from the server.`,e,t)}default:throw new Te(`Unknown content type ${e} returned from the server.`,e,t)}}},ke=e=>{let t=new zr,r=new Er(e,t),n=Fr(e.log),o=new Ir(t,r,n),s=new xr(o);return U(s,["api"])};var $r=Object.freeze({__proto__:null}),Lr=Object.freeze({__proto__:null,Admin:$r}),qr=Object.freeze({__proto__:null}),Ur=Object.freeze({__proto__:null}),Wr=Object.freeze({__proto__:null}),Br=Object.freeze({__proto__:null,v1:Ur,v2:Wr}),Gr=Object.freeze({__proto__:null}),Yr=Object.freeze({__proto__:null}),ss=Object.freeze({__proto__:null,oauth:Yr,rest:Br,streaming:Gr,v1:Lr,v2:qr});function ne(e){return e=e.replaceAll(`
`,""),e=e.replaceAll("<p>",`

`),e.replace(/<[^>]*>?/gm,"").trim()}async function Me(e){let r=(await N("mastodon",{})).accounts[e]?.url;if(!r)throw new Error(`Mastodon server URL is not configured for ${e}.`);let o=(await ue("mastodon"))[e];if(!o)throw new Error(`Mastodon access token is not configured for ${e}.`);return ke({url:r,accessToken:o})}async function Hr(e,t){let r=await Me(e);console.log("Fetching profile info");let n=await r.v1.accounts.verifyCredentials();console.log("Fetching recent statuses");let o=await r.v1.accounts.$select(n.id).statuses.list({limit:500,excludeReblogs:!0,excludeReplies:!1}),s=new Map(o.map(c=>[c.id,c]));for(let c of o)if(c.inReplyToId){let u=s.get(c.inReplyToId);u&&(u.children=u.children??[],u.children.push(c))}console.log("Writing statuses to space");let i="";for(let c of o){let u=c;u.inReplyToId||(i=`---
$share: mastodon:${e}
`,a(u),await P.writePage(`${t}/${e}/${u.createdAt.split("T")[0]}/${u.id}`,i))}function a(c){if(i+=`---

$id/${c.id}
${ne(c.content)}

`,c.children)for(let u of c.children)a(u)}}async function Re(){let e=await N("mastodon",{}),t=await P.listPages(),r=e.pagePrefix??"mastodon";for(let n of t)n.name.startsWith(r)&&await P.deletePage(n.name);await w.flashNotification("Done cleaning!")}async function Fe(){let e=await N("mastodon",{});await w.flashNotification("Pulling statuses...");for(let t in e.accounts)await Hr(t,e.pagePrefix??"mastodon");await w.flashNotification("Done!")}async function De(e){let t=await w.getText(),r=await O.parseMarkdown(t),[n,o]=e.uri.split(":"),s=await de(r,[],!0);console.log("Frontmatter",s);let i=await Me(o),a=await pe(r);console.log("Feed items",a);let c=null;for(let u of a)if(console.log("Found status",u),u.id.startsWith("gen/")){console.log("No ID found, posting new toot!");let p=(await w.getText()).indexOf(u.text);if(!p){await w.flashNotification("Could not find status text in page","error");return}let d=await i.v1.statuses.create({status:u.text,inReplyToId:c});c=d.id,await w.dispatch({changes:[{from:p,insert:`$id/${d.id}
`}]})}else{c=u.id,console.log("Updating status",u.id);let f=await i.v1.statuses.$select(u.id).fetch();ne(f.content)!==u.text?(await i.v1.statuses.$select(u.id).update({status:u.text}),console.log("Updated status",u.id)):console.log("No change, skipping")}return!0}var Ne={pullAllStatusesCommand:Fe,cleanAllStatusesCommand:Re,updateToot:De},Vr={name:"mastodon",requiredPermissions:["fetch"],functions:{pullAllStatusesCommand:{path:"mastodon.ts:pullAllStatusesCommand",command:{name:"Mastodon: Pull All Statuses"}},cleanAllStatusesCommand:{path:"mastodon.ts:cleanAllStatusesCommand",command:{name:"Mastodon: Clean All Statuses"}},updateToot:{path:"mastodon.ts:updateToot",events:["share:mastodon"]}},assets:{}};ie(Ne,Vr);return Ue(Jr);})();
