var Hm=Object.defineProperty;var Wu=n=>{throw TypeError(n)};var Wm=(n,e,t)=>e in n?Hm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ke=(n,e,t)=>Wm(n,typeof e!="symbol"?e+"":e,t),Km=(n,e,t)=>e.has(n)||Wu("Cannot "+t);var Ku=(n,e,t)=>e.has(n)?Wu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var ji=(n,e,t)=>(Km(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Re={},xr=[],Bt=()=>{},Gf=()=>!1,qo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),zo=n=>n.startsWith("onUpdate:"),ot=Object.assign,Hl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Gm=Object.prototype.hasOwnProperty,ve=(n,e)=>Gm.call(n,e),re=Array.isArray,Dr=n=>ai(n)==="[object Map]",Ho=n=>ai(n)==="[object Set]",Gu=n=>ai(n)==="[object Date]",ae=n=>typeof n=="function",Oe=n=>typeof n=="string",Wt=n=>typeof n=="symbol",Ie=n=>n!==null&&typeof n=="object",Qf=n=>(Ie(n)||ae(n))&&ae(n.then)&&ae(n.catch),Jf=Object.prototype.toString,ai=n=>Jf.call(n),Qm=n=>ai(n).slice(8,-1),Yf=n=>ai(n)==="[object Object]",Wl=n=>Oe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ds=zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Jm=/-\w/g,Rt=Wo(n=>n.replace(Jm,e=>e.slice(1).toUpperCase())),Ym=/\B([A-Z])/g,Bn=Wo(n=>n.replace(Ym,"-$1").toLowerCase()),Xf=Wo(n=>n.charAt(0).toUpperCase()+n.slice(1)),La=Wo(n=>n?`on${Xf(n)}`:""),Mt=(n,e)=>!Object.is(n,e),no=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Zf=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Ko=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Qu;const Go=()=>Qu||(Qu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kl(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Oe(r)?t_(r):Kl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Oe(n)||Ie(n))return n}const Xm=/;(?![^(]*\))/g,Zm=/:([^]+)/,e_=/\/\*[^]*?\*\//g;function t_(n){const e={};return n.replace(e_,"").split(Xm).forEach(t=>{if(t){const r=t.split(Zm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ws(n){let e="";if(Oe(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=Ws(n[t]);r&&(e+=r+" ")}else if(Ie(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const n_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",r_=zl(n_);function ed(n){return!!n||n===""}function s_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=li(n[r],e[r]);return t}function li(n,e){if(n===e)return!0;let t=Gu(n),r=Gu(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Wt(n),r=Wt(e),t||r)return n===e;if(t=re(n),r=re(e),t||r)return t&&r?s_(n,e):!1;if(t=Ie(n),r=Ie(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!li(n[o],e[o]))return!1}}return String(n)===String(e)}function i_(n,e){return n.findIndex(t=>li(t,e))}const td=n=>!!(n&&n.__v_isRef===!0),il=n=>Oe(n)?n:n==null?"":re(n)||Ie(n)&&(n.toString===Jf||!ae(n.toString))?td(n)?il(n.value):JSON.stringify(n,nd,2):String(n),nd=(n,e)=>td(e)?nd(n,e.value):Dr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Fa(r,i)+" =>"]=s,t),{})}:Ho(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Fa(t))}:Wt(e)?Fa(e):Ie(e)&&!re(e)&&!Yf(e)?String(e):e,Fa=(n,e="")=>{var t;return Wt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tt;class o_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=tt,!e&&tt&&(this.index=(tt.scopes||(tt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=tt;try{return tt=this,e()}finally{tt=t}}}on(){++this._on===1&&(this.prevScope=tt,tt=this)}off(){if(this._on>0&&--this._on===0){if(tt===this)tt=this.prevScope;else{let e=tt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function a_(){return tt}let Se;const Ua=new WeakSet;class rd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tt&&tt.active&&tt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ua.has(this)&&(Ua.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||id(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ju(this),od(this);const e=Se,t=St;Se=this,St=!0;try{return this.fn()}finally{ad(this),Se=e,St=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jl(e);this.deps=this.depsTail=void 0,Ju(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ua.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ol(this)&&this.run()}get dirty(){return ol(this)}}let sd=0,Vs,Os;function id(n,e=!1){if(n.flags|=8,e){n.next=Os,Os=n;return}n.next=Vs,Vs=n}function Gl(){sd++}function Ql(){if(--sd>0)return;if(Os){let e=Os;for(Os=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Vs;){let e=Vs;for(Vs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function od(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ad(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Jl(r),l_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function ol(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ld(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ks)||(n.globalVersion=Ks,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ol(n))))return;n.flags|=2;const e=n.dep,t=Se,r=St;Se=n,St=!0;try{od(n);const s=n.fn(n._value);(e.version===0||Mt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Se=t,St=r,ad(n),n.flags&=-3}}function Jl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Jl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function l_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let St=!0;const cd=[];function un(){cd.push(St),St=!1}function hn(){const n=cd.pop();St=n===void 0?!0:n}function Ju(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Se;Se=void 0;try{e()}finally{Se=t}}}let Ks=0;class c_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Se||!St||Se===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Se)t=this.activeLink=new c_(Se,this),Se.deps?(t.prevDep=Se.depsTail,Se.depsTail.nextDep=t,Se.depsTail=t):Se.deps=Se.depsTail=t,ud(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Se.depsTail,t.nextDep=void 0,Se.depsTail.nextDep=t,Se.depsTail=t,Se.deps===t&&(Se.deps=r)}return t}trigger(e){this.version++,Ks++,this.notify(e)}notify(e){Gl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ql()}}}function ud(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ud(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const al=new WeakMap,rr=Symbol(""),ll=Symbol(""),Gs=Symbol("");function rt(n,e,t){if(St&&Se){let r=al.get(n);r||al.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Yl),s.map=r,s.key=t),s.track()}}function rn(n,e,t,r,s,i){const o=al.get(n);if(!o){Ks++;return}const l=c=>{c&&c.trigger()};if(Gl(),e==="clear")o.forEach(l);else{const c=re(n),h=c&&Wl(t);if(c&&t==="length"){const d=Number(r);o.forEach((g,m)=>{(m==="length"||m===Gs||!Wt(m)&&m>=d)&&l(g)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),h&&l(o.get(Gs)),e){case"add":c?h&&l(o.get("length")):(l(o.get(rr)),Dr(n)&&l(o.get(ll)));break;case"delete":c||(l(o.get(rr)),Dr(n)&&l(o.get(ll)));break;case"set":Dr(n)&&l(o.get(rr));break}}Ql()}function Ar(n){const e=ye(n);return e===n?e:(rt(e,"iterate",Gs),wt(n)?e:e.map(Pt))}function Qo(n){return rt(n=ye(n),"iterate",Gs),n}function Vt(n,e){return fn(n)?Br(sr(n)?Pt(e):e):Pt(e)}const u_={__proto__:null,[Symbol.iterator](){return Ba(this,Symbol.iterator,n=>Vt(this,n))},concat(...n){return Ar(this).concat(...n.map(e=>re(e)?Ar(e):e))},entries(){return Ba(this,"entries",n=>(n[1]=Vt(this,n[1]),n))},every(n,e){return en(this,"every",n,e,void 0,arguments)},filter(n,e){return en(this,"filter",n,e,t=>t.map(r=>Vt(this,r)),arguments)},find(n,e){return en(this,"find",n,e,t=>Vt(this,t),arguments)},findIndex(n,e){return en(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return en(this,"findLast",n,e,t=>Vt(this,t),arguments)},findLastIndex(n,e){return en(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return en(this,"forEach",n,e,void 0,arguments)},includes(...n){return $a(this,"includes",n)},indexOf(...n){return $a(this,"indexOf",n)},join(n){return Ar(this).join(n)},lastIndexOf(...n){return $a(this,"lastIndexOf",n)},map(n,e){return en(this,"map",n,e,void 0,arguments)},pop(){return ys(this,"pop")},push(...n){return ys(this,"push",n)},reduce(n,...e){return Yu(this,"reduce",n,e)},reduceRight(n,...e){return Yu(this,"reduceRight",n,e)},shift(){return ys(this,"shift")},some(n,e){return en(this,"some",n,e,void 0,arguments)},splice(...n){return ys(this,"splice",n)},toReversed(){return Ar(this).toReversed()},toSorted(n){return Ar(this).toSorted(n)},toSpliced(...n){return Ar(this).toSpliced(...n)},unshift(...n){return ys(this,"unshift",n)},values(){return Ba(this,"values",n=>Vt(this,n))}};function Ba(n,e,t){const r=Qo(n),s=r[e]();return r!==n&&!wt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const h_=Array.prototype;function en(n,e,t,r,s,i){const o=Qo(n),l=o!==n&&!wt(n),c=o[e];if(c!==h_[e]){const g=c.apply(n,i);return l?Pt(g):g}let h=t;o!==n&&(l?h=function(g,m){return t.call(this,Vt(n,g),m,n)}:t.length>2&&(h=function(g,m){return t.call(this,g,m,n)}));const d=c.call(o,h,r);return l&&s?s(d):d}function Yu(n,e,t,r){const s=Qo(n),i=s!==n&&!wt(n);let o=t,l=!1;s!==n&&(i?(l=r.length===0,o=function(h,d,g){return l&&(l=!1,h=Vt(n,h)),t.call(this,h,Vt(n,d),g,n)}):t.length>3&&(o=function(h,d,g){return t.call(this,h,d,g,n)}));const c=s[e](o,...r);return l?Vt(n,c):c}function $a(n,e,t){const r=ye(n);rt(r,"iterate",Gs);const s=r[e](...t);return(s===-1||s===!1)&&tc(t[0])?(t[0]=ye(t[0]),r[e](...t)):s}function ys(n,e,t=[]){un(),Gl();const r=ye(n)[e].apply(n,t);return Ql(),hn(),r}const f_=zl("__proto__,__v_isRef,__isVue"),hd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wt));function d_(n){Wt(n)||(n=String(n));const e=ye(this);return rt(e,"has",n),e.hasOwnProperty(n)}class fd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?I_:md:i?gd:pd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){let c;if(o&&(c=u_[t]))return c;if(t==="hasOwnProperty")return d_}const l=Reflect.get(e,t,it(e)?e:r);if((Wt(t)?hd.has(t):f_(t))||(s||rt(e,"get",t),i))return l;if(it(l)){const c=o&&Wl(t)?l:l.value;return s&&Ie(c)?ul(c):c}return Ie(l)?s?ul(l):Zl(l):l}}class dd extends fd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const o=re(e)&&Wl(t);if(!this._isShallow){const h=fn(i);if(!wt(r)&&!fn(r)&&(i=ye(i),r=ye(r)),!o&&it(i)&&!it(r))return h||(i.value=r),!0}const l=o?Number(t)<e.length:ve(e,t),c=Reflect.set(e,t,r,it(e)?e:s);return e===ye(s)&&(l?Mt(r,i)&&rn(e,"set",t,r):rn(e,"add",t,r)),c}deleteProperty(e,t){const r=ve(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&rn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Wt(t)||!hd.has(t))&&rt(e,"has",t),r}ownKeys(e){return rt(e,"iterate",re(e)?"length":rr),Reflect.ownKeys(e)}}class p_ extends fd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const g_=new dd,m_=new p_,__=new dd(!0);const cl=n=>n,qi=n=>Reflect.getPrototypeOf(n);function y_(n,e,t){return function(...r){const s=this.__v_raw,i=ye(s),o=Dr(i),l=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,h=s[n](...r),d=t?cl:e?Br:Pt;return!e&&rt(i,"iterate",c?ll:rr),ot(Object.create(h),{next(){const{value:g,done:m}=h.next();return m?{value:g,done:m}:{value:l?[d(g[0]),d(g[1])]:d(g),done:m}}})}}function zi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function v_(n,e){const t={get(s){const i=this.__v_raw,o=ye(i),l=ye(s);n||(Mt(s,l)&&rt(o,"get",s),rt(o,"get",l));const{has:c}=qi(o),h=e?cl:n?Br:Pt;if(c.call(o,s))return h(i.get(s));if(c.call(o,l))return h(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!n&&rt(ye(s),"iterate",rr),s.size},has(s){const i=this.__v_raw,o=ye(i),l=ye(s);return n||(Mt(s,l)&&rt(o,"has",s),rt(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=ye(l),h=e?cl:n?Br:Pt;return!n&&rt(c,"iterate",rr),l.forEach((d,g)=>s.call(i,h(d),h(g),o))}};return ot(t,n?{add:zi("add"),set:zi("set"),delete:zi("delete"),clear:zi("clear")}:{add(s){const i=ye(this),o=qi(i),l=ye(s),c=!e&&!wt(s)&&!fn(s)?l:s;return o.has.call(i,c)||Mt(s,c)&&o.has.call(i,s)||Mt(l,c)&&o.has.call(i,l)||(i.add(c),rn(i,"add",c,c)),this},set(s,i){!e&&!wt(i)&&!fn(i)&&(i=ye(i));const o=ye(this),{has:l,get:c}=qi(o);let h=l.call(o,s);h||(s=ye(s),h=l.call(o,s));const d=c.call(o,s);return o.set(s,i),h?Mt(i,d)&&rn(o,"set",s,i):rn(o,"add",s,i),this},delete(s){const i=ye(this),{has:o,get:l}=qi(i);let c=o.call(i,s);c||(s=ye(s),c=o.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&rn(i,"delete",s,void 0),h},clear(){const s=ye(this),i=s.size!==0,o=s.clear();return i&&rn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=y_(s,n,e)}),t}function Xl(n,e){const t=v_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ve(t,s)&&s in r?t:r,s,i)}const E_={get:Xl(!1,!1)},T_={get:Xl(!1,!0)},w_={get:Xl(!0,!1)};const pd=new WeakMap,gd=new WeakMap,md=new WeakMap,I_=new WeakMap;function A_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b_(n){return n.__v_skip||!Object.isExtensible(n)?0:A_(Qm(n))}function Zl(n){return fn(n)?n:ec(n,!1,g_,E_,pd)}function R_(n){return ec(n,!1,__,T_,gd)}function ul(n){return ec(n,!0,m_,w_,md)}function ec(n,e,t,r,s){if(!Ie(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=b_(n);if(i===0)return n;const o=s.get(n);if(o)return o;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function sr(n){return fn(n)?sr(n.__v_raw):!!(n&&n.__v_isReactive)}function fn(n){return!!(n&&n.__v_isReadonly)}function wt(n){return!!(n&&n.__v_isShallow)}function tc(n){return n?!!n.__v_raw:!1}function ye(n){const e=n&&n.__v_raw;return e?ye(e):n}function S_(n){return!ve(n,"__v_skip")&&Object.isExtensible(n)&&Zf(n,"__v_skip",!0),n}const Pt=n=>Ie(n)?Zl(n):n,Br=n=>Ie(n)?ul(n):n;function it(n){return n?n.__v_isRef===!0:!1}function An(n){return P_(n,!1)}function P_(n,e){return it(n)?n:new k_(n,e)}class k_{constructor(e,t){this.dep=new Yl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ye(e),this._value=t?e:Pt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||wt(e)||fn(e);e=r?e:ye(e),Mt(e,t)&&(this._rawValue=e,this._value=r?e:Pt(e),this.dep.trigger())}}function C_(n){return it(n)?n.value:n}const x_={get:(n,e,t)=>e==="__v_raw"?n:C_(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return it(s)&&!it(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function _d(n){return sr(n)?n:new Proxy(n,x_)}class D_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Yl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return id(this,!0),!0}get value(){const e=this.dep.track();return ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function V_(n,e,t=!1){let r,s;return ae(n)?r=n:(r=n.get,s=n.set),new D_(r,s,t)}const Hi={},go=new WeakMap;let Zn;function O_(n,e=!1,t=Zn){if(t){let r=go.get(t);r||go.set(t,r=[]),r.push(n)}}function N_(n,e,t=Re){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=t,h=z=>s?z:wt(z)||s===!1||s===0?sn(z,1):sn(z);let d,g,m,I,x=!1,C=!1;if(it(n)?(g=()=>n.value,x=wt(n)):sr(n)?(g=()=>h(n),x=!0):re(n)?(C=!0,x=n.some(z=>sr(z)||wt(z)),g=()=>n.map(z=>{if(it(z))return z.value;if(sr(z))return h(z);if(ae(z))return c?c(z,2):z()})):ae(n)?e?g=c?()=>c(n,2):n:g=()=>{if(m){un();try{m()}finally{hn()}}const z=Zn;Zn=d;try{return c?c(n,3,[I]):n(I)}finally{Zn=z}}:g=Bt,e&&s){const z=g,ce=s===!0?1/0:s;g=()=>sn(z(),ce)}const D=a_(),K=()=>{d.stop(),D&&D.active&&Hl(D.effects,d)};if(i&&e){const z=e;e=(...ce)=>{z(...ce),K()}}let U=C?new Array(n.length).fill(Hi):Hi;const W=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const ce=d.run();if(s||x||(C?ce.some((_e,A)=>Mt(_e,U[A])):Mt(ce,U))){m&&m();const _e=Zn;Zn=d;try{const A=[ce,U===Hi?void 0:C&&U[0]===Hi?[]:U,I];U=ce,c?c(e,3,A):e(...A)}finally{Zn=_e}}}else d.run()};return l&&l(W),d=new rd(g),d.scheduler=o?()=>o(W,!1):W,I=z=>O_(z,!1,d),m=d.onStop=()=>{const z=go.get(d);if(z){if(c)c(z,4);else for(const ce of z)ce();go.delete(d)}},e?r?W(!0):U=d.run():o?o(W.bind(null,!0),!0):d.run(),K.pause=d.pause.bind(d),K.resume=d.resume.bind(d),K.stop=K,K}function sn(n,e=1/0,t){if(e<=0||!Ie(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,it(n))sn(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)sn(n[r],e,t);else if(Ho(n)||Dr(n))n.forEach(r=>{sn(r,e,t)});else if(Yf(n)){for(const r in n)sn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&sn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ci(n,e,t,r){try{return r?n(...r):n()}catch(s){Jo(s,e,t)}}function Kt(n,e,t,r){if(ae(n)){const s=ci(n,e,t,r);return s&&Qf(s)&&s.catch(i=>{Jo(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Kt(n[i],e,t,r));return s}}function Jo(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Re;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](n,c,h)===!1)return}l=l.parent}if(i){un(),ci(i,null,10,[n,c,h]),hn();return}}M_(n,t,s,r,o)}function M_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const ut=[];let Dt=-1;const Vr=[];let Rn=null,Rr=0;const yd=Promise.resolve();let mo=null;function vd(n){const e=mo||yd;return n?e.then(this?n.bind(this):n):e}function L_(n){let e=Dt+1,t=ut.length;for(;e<t;){const r=e+t>>>1,s=ut[r],i=Qs(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function nc(n){if(!(n.flags&1)){const e=Qs(n),t=ut[ut.length-1];!t||!(n.flags&2)&&e>=Qs(t)?ut.push(n):ut.splice(L_(e),0,n),n.flags|=1,Ed()}}function Ed(){mo||(mo=yd.then(wd))}function F_(n){re(n)?Vr.push(...n):Rn&&n.id===-1?Rn.splice(Rr+1,0,n):n.flags&1||(Vr.push(n),n.flags|=1),Ed()}function Xu(n,e,t=Dt+1){for(;t<ut.length;t++){const r=ut[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;ut.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Td(n){if(Vr.length){const e=[...new Set(Vr)].sort((t,r)=>Qs(t)-Qs(r));if(Vr.length=0,Rn){Rn.push(...e);return}for(Rn=e,Rr=0;Rr<Rn.length;Rr++){const t=Rn[Rr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Rn=null,Rr=0}}const Qs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wd(n){try{for(Dt=0;Dt<ut.length;Dt++){const e=ut[Dt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dt<ut.length;Dt++){const e=ut[Dt];e&&(e.flags&=-2)}Dt=-1,ut.length=0,Td(),mo=null,(ut.length||Vr.length)&&wd()}}let Tt=null,Id=null;function _o(n){const e=Tt;return Tt=n,Id=n&&n.type.__scopeId||null,e}function U_(n,e=Tt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&ch(-1);const i=_o(e);let o;try{o=n(...s)}finally{_o(i),r._d&&ch(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function br(n,e){if(Tt===null)return n;const t=ea(Tt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Re]=e[s];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&sn(o),r.push({dir:i,instance:t,value:o,oldValue:void 0,arg:l,modifiers:c}))}return n}function Yn(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(un(),Kt(c,t,8,[n.el,l,n,e]),hn())}}function B_(n,e){if(ht){let t=ht.provides;const r=ht.parent&&ht.parent.provides;r===t&&(t=ht.provides=Object.create(r)),t[n]=e}}function ro(n,e,t=!1){const r=$y();if(r||Or){let s=Or?Or._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ae(e)?e.call(r&&r.proxy):e}}const $_=Symbol.for("v-scx"),j_=()=>ro($_);function ja(n,e,t){return Ad(n,e,t)}function Ad(n,e,t=Re){const{immediate:r,deep:s,flush:i,once:o}=t,l=ot({},t),c=e&&r||!e&&i!=="post";let h;if(Ys){if(i==="sync"){const I=j_();h=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=Bt,I.resume=Bt,I.pause=Bt,I}}const d=ht;l.call=(I,x,C)=>Kt(I,d,x,C);let g=!1;i==="post"?l.scheduler=I=>{ft(I,d&&d.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(I,x)=>{x?I():nc(I)}),l.augmentJob=I=>{e&&(I.flags|=4),g&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const m=N_(n,e,l);return Ys&&(h?h.push(m):c&&m()),m}function q_(n,e,t){const r=this.proxy,s=Oe(n)?n.includes(".")?bd(r,n):()=>r[n]:n.bind(r,r);let i;ae(e)?i=e:(i=e.handler,t=e);const o=ui(this),l=Ad(s,i.bind(r),t);return o(),l}function bd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const z_=Symbol("_vte"),H_=n=>n.__isTeleport,W_=Symbol("_leaveCb");function rc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,rc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Rd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Zu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const yo=new WeakMap;function Ns(n,e,t,r,s=!1){if(re(n)){n.forEach((C,D)=>Ns(C,e&&(re(e)?e[D]:e),t,r,s));return}if(Ms(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ns(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ea(r.component):r.el,o=s?null:i,{i:l,r:c}=n,h=e&&e.r,d=l.refs===Re?l.refs={}:l.refs,g=l.setupState,m=ye(g),I=g===Re?Gf:C=>Zu(d,C)?!1:ve(m,C),x=(C,D)=>!(D&&Zu(d,D));if(h!=null&&h!==c){if(eh(e),Oe(h))d[h]=null,I(h)&&(g[h]=null);else if(it(h)){const C=e;x(h,C.k)&&(h.value=null),C.k&&(d[C.k]=null)}}if(ae(c))ci(c,l,12,[o,d]);else{const C=Oe(c),D=it(c);if(C||D){const K=()=>{if(n.f){const U=C?I(c)?g[c]:d[c]:x()||!n.k?c.value:d[n.k];if(s)re(U)&&Hl(U,i);else if(re(U))U.includes(i)||U.push(i);else if(C)d[c]=[i],I(c)&&(g[c]=d[c]);else{const W=[i];x(c,n.k)&&(c.value=W),n.k&&(d[n.k]=W)}}else C?(d[c]=o,I(c)&&(g[c]=o)):D&&(x(c,n.k)&&(c.value=o),n.k&&(d[n.k]=o))};if(o){const U=()=>{K(),yo.delete(n)};U.id=-1,yo.set(n,U),ft(U,t)}else eh(n),K()}}}function eh(n){const e=yo.get(n);e&&(e.flags|=8,yo.delete(n))}Go().requestIdleCallback;Go().cancelIdleCallback;const Ms=n=>!!n.type.__asyncLoader,Sd=n=>n.type.__isKeepAlive;function K_(n,e){Pd(n,"a",e)}function G_(n,e){Pd(n,"da",e)}function Pd(n,e,t=ht){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Yo(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Sd(s.parent.vnode)&&Q_(r,e,t,s),s=s.parent}}function Q_(n,e,t,r){const s=Yo(e,n,r,!0);Cd(()=>{Hl(r[e],s)},t)}function Yo(n,e,t=ht,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{un();const l=ui(t),c=Kt(e,t,n,o);return l(),hn(),c});return r?s.unshift(i):s.push(i),i}}const _n=n=>(e,t=ht)=>{(!Ys||n==="sp")&&Yo(n,(...r)=>e(...r),t)},J_=_n("bm"),kd=_n("m"),Y_=_n("bu"),X_=_n("u"),Z_=_n("bum"),Cd=_n("um"),ey=_n("sp"),ty=_n("rtg"),ny=_n("rtc");function ry(n,e=ht){Yo("ec",n,e)}const sy=Symbol.for("v-ndc");function iy(n,e,t,r){let s;const i=t,o=re(n);if(o||Oe(n)){const l=o&&sr(n);let c=!1,h=!1;l&&(c=!wt(n),h=fn(n),n=Qo(n)),s=new Array(n.length);for(let d=0,g=n.length;d<g;d++)s[d]=e(c?h?Br(Pt(n[d])):Pt(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Ie(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(n[d],d,c,i)}}else s=[];return s}const hl=n=>n?Jd(n)?ea(n):hl(n.parent):null,Ls=ot(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>hl(n.parent),$root:n=>hl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Dd(n),$forceUpdate:n=>n.f||(n.f=()=>{nc(n.update)}),$nextTick:n=>n.n||(n.n=vd.bind(n.proxy)),$watch:n=>q_.bind(n)}),qa=(n,e)=>n!==Re&&!n.__isScriptSetup&&ve(n,e),oy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=n;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(qa(r,e))return o[e]=1,r[e];if(s!==Re&&ve(s,e))return o[e]=2,s[e];if(ve(i,e))return o[e]=3,i[e];if(t!==Re&&ve(t,e))return o[e]=4,t[e];fl&&(o[e]=0)}}const h=Ls[e];let d,g;if(h)return e==="$attrs"&&rt(n.attrs,"get",""),h(n);if((d=l.__cssModules)&&(d=d[e]))return d;if(t!==Re&&ve(t,e))return o[e]=4,t[e];if(g=c.config.globalProperties,ve(g,e))return g[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return qa(s,e)?(s[e]=t,!0):r!==Re&&ve(r,e)?(r[e]=t,!0):ve(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(t[l]||n!==Re&&l[0]!=="$"&&ve(n,l)||qa(e,l)||ve(i,l)||ve(r,l)||ve(Ls,l)||ve(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ve(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function th(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let fl=!0;function ay(n){const e=Dd(n),t=n.proxy,r=n.ctx;fl=!1,e.beforeCreate&&nh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:g,mounted:m,beforeUpdate:I,updated:x,activated:C,deactivated:D,beforeDestroy:K,beforeUnmount:U,destroyed:W,unmounted:z,render:ce,renderTracked:_e,renderTriggered:A,errorCaptured:_,serverPrefetch:E,expose:T,inheritAttrs:b,components:S,directives:v,filters:pt}=e;if(h&&ly(h,r,null),o)for(const Ee in o){const de=o[Ee];ae(de)&&(r[Ee]=de.bind(t))}if(s){const Ee=s.call(t,t);Ie(Ee)&&(n.data=Zl(Ee))}if(fl=!0,i)for(const Ee in i){const de=i[Ee],At=ae(de)?de.bind(t,t):ae(de.get)?de.get.bind(t,t):Bt,zn=!ae(de)&&ae(de.set)?de.set.bind(t):Bt,Jt=Xd({get:At,set:zn});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:Fe=>Jt.value=Fe})}if(l)for(const Ee in l)xd(l[Ee],r,t,Ee);if(c){const Ee=ae(c)?c.call(t):c;Reflect.ownKeys(Ee).forEach(de=>{B_(de,Ee[de])})}d&&nh(d,n,"c");function qe(Ee,de){re(de)?de.forEach(At=>Ee(At.bind(t))):de&&Ee(de.bind(t))}if(qe(J_,g),qe(kd,m),qe(Y_,I),qe(X_,x),qe(K_,C),qe(G_,D),qe(ry,_),qe(ny,_e),qe(ty,A),qe(Z_,U),qe(Cd,z),qe(ey,E),re(T))if(T.length){const Ee=n.exposed||(n.exposed={});T.forEach(de=>{Object.defineProperty(Ee,de,{get:()=>t[de],set:At=>t[de]=At,enumerable:!0})})}else n.exposed||(n.exposed={});ce&&n.render===Bt&&(n.render=ce),b!=null&&(n.inheritAttrs=b),S&&(n.components=S),v&&(n.directives=v),E&&Rd(n)}function ly(n,e,t=Bt){re(n)&&(n=dl(n));for(const r in n){const s=n[r];let i;Ie(s)?"default"in s?i=ro(s.from||r,s.default,!0):i=ro(s.from||r):i=ro(s),it(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function nh(n,e,t){Kt(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function xd(n,e,t,r){let s=r.includes(".")?bd(t,r):()=>t[r];if(Oe(n)){const i=e[n];ae(i)&&ja(s,i)}else if(ae(n))ja(s,n.bind(t));else if(Ie(n))if(re(n))n.forEach(i=>xd(i,e,t,r));else{const i=ae(n.handler)?n.handler.bind(t):e[n.handler];ae(i)&&ja(s,i,n)}}function Dd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>vo(c,h,o,!0)),vo(c,e,o)),Ie(e)&&i.set(e,c),c}function vo(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&vo(n,i,t,!0),s&&s.forEach(o=>vo(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const l=cy[o]||t&&t[o];n[o]=l?l(n[o],e[o]):e[o]}return n}const cy={data:rh,props:sh,emits:sh,methods:bs,computed:bs,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:bs,directives:bs,watch:hy,provide:rh,inject:uy};function rh(n,e){return e?n?function(){return ot(ae(n)?n.call(this,this):n,ae(e)?e.call(this,this):e)}:e:n}function uy(n,e){return bs(dl(n),dl(e))}function dl(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ct(n,e){return n?[...new Set([].concat(n,e))]:e}function bs(n,e){return n?ot(Object.create(null),n,e):e}function sh(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:ot(Object.create(null),th(n),th(e??{})):e}function hy(n,e){if(!n)return e;if(!e)return n;const t=ot(Object.create(null),n);for(const r in e)t[r]=ct(n[r],e[r]);return t}function Vd(){return{app:null,config:{isNativeTag:Gf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fy=0;function dy(n,e){return function(r,s=null){ae(r)||(r=ot({},r)),s!=null&&!Ie(s)&&(s=null);const i=Vd(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:fy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ky,get config(){return i.config},set config(d){},use(d,...g){return o.has(d)||(d&&ae(d.install)?(o.add(d),d.install(h,...g)):ae(d)&&(o.add(d),d(h,...g))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,g){return g?(i.components[d]=g,h):i.components[d]},directive(d,g){return g?(i.directives[d]=g,h):i.directives[d]},mount(d,g,m){if(!c){const I=h._ceVNode||ir(r,s);return I.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(I,d,m),c=!0,h._container=d,d.__vue_app__=h,ea(I.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Kt(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,g){return i.provides[d]=g,h},runWithContext(d){const g=Or;Or=h;try{return d()}finally{Or=g}}};return h}}let Or=null;const py=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Rt(e)}Modifiers`]||n[`${Bn(e)}Modifiers`];function gy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Re;let s=t;const i=e.startsWith("update:"),o=i&&py(r,e.slice(7));o&&(o.trim&&(s=t.map(d=>Oe(d)?d.trim():d)),o.number&&(s=t.map(Ko)));let l,c=r[l=La(e)]||r[l=La(Rt(e))];!c&&i&&(c=r[l=La(Bn(e))]),c&&Kt(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Kt(h,n,6,s)}}const my=new WeakMap;function Od(n,e,t=!1){const r=t?my:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},l=!1;if(!ae(n)){const c=h=>{const d=Od(h,e,!0);d&&(l=!0,ot(o,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Ie(n)&&r.set(n,null),null):(re(i)?i.forEach(c=>o[c]=null):ot(o,i),Ie(n)&&r.set(n,o),o)}function Xo(n,e){return!n||!qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(n,e[0].toLowerCase()+e.slice(1))||ve(n,Bn(e))||ve(n,e))}function ih(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:g,data:m,setupState:I,ctx:x,inheritAttrs:C}=n,D=_o(n);let K,U;try{if(t.shapeFlag&4){const z=s||r,ce=z;K=Nt(h.call(ce,z,d,g,I,m,x)),U=l}else{const z=e;K=Nt(z.length>1?z(g,{attrs:l,slots:o,emit:c}):z(g,null)),U=e.props?l:_y(l)}}catch(z){Fs.length=0,Jo(z,n,1),K=ir($r)}let W=K;if(U&&C!==!1){const z=Object.keys(U),{shapeFlag:ce}=W;z.length&&ce&7&&(i&&z.some(zo)&&(U=yy(U,i)),W=jr(W,U,!1,!0))}return t.dirs&&(W=jr(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(t.dirs):t.dirs),t.transition&&rc(W,t.transition),K=W,_o(D),K}const _y=n=>{let e;for(const t in n)(t==="class"||t==="style"||qo(t))&&((e||(e={}))[t]=n[t]);return e},yy=(n,e)=>{const t={};for(const r in n)(!zo(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function vy(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?oh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const m=d[g];if(Nd(o,r,m)&&!Xo(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?oh(r,o,h):!0:!!o;return!1}function oh(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Nd(e,n,i)&&!Xo(t,i))return!0}return!1}function Nd(n,e,t){const r=n[t],s=e[t];return t==="style"&&Ie(r)&&Ie(s)?!li(r,s):r!==s}function Ey({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const Md={},Ld=()=>Object.create(Md),Fd=n=>Object.getPrototypeOf(n)===Md;function Ty(n,e,t,r=!1){const s={},i=Ld();n.propsDefaults=Object.create(null),Ud(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:R_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function wy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,l=ye(s),[c]=n.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let g=0;g<d.length;g++){let m=d[g];if(Xo(n.emitsOptions,m))continue;const I=e[m];if(c)if(ve(i,m))I!==i[m]&&(i[m]=I,h=!0);else{const x=Rt(m);s[x]=pl(c,l,x,I,n,!1)}else I!==i[m]&&(i[m]=I,h=!0)}}}else{Ud(n,e,s,i)&&(h=!0);let d;for(const g in l)(!e||!ve(e,g)&&((d=Bn(g))===g||!ve(e,d)))&&(c?t&&(t[g]!==void 0||t[d]!==void 0)&&(s[g]=pl(c,l,g,void 0,n,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!ve(e,g))&&(delete i[g],h=!0)}h&&rn(n.attrs,"set","")}function Ud(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ds(c))continue;const h=e[c];let d;s&&ve(s,d=Rt(c))?!i||!i.includes(d)?t[d]=h:(l||(l={}))[d]=h:Xo(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=ye(t),h=l||Re;for(let d=0;d<i.length;d++){const g=i[d];t[g]=pl(s,c,g,h[g],n,!ve(h,g))}}return o}function pl(n,e,t,r,s,i){const o=n[t];if(o!=null){const l=ve(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ae(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=ui(s);r=h[t]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Bn(t))&&(r=!0))}return r}const Iy=new WeakMap;function Bd(n,e,t=!1){const r=t?Iy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},l=[];let c=!1;if(!ae(n)){const d=g=>{c=!0;const[m,I]=Bd(g,e,!0);ot(o,m),I&&l.push(...I)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!c)return Ie(n)&&r.set(n,xr),xr;if(re(i))for(let d=0;d<i.length;d++){const g=Rt(i[d]);ah(g)&&(o[g]=Re)}else if(i)for(const d in i){const g=Rt(d);if(ah(g)){const m=i[d],I=o[g]=re(m)||ae(m)?{type:m}:ot({},m),x=I.type;let C=!1,D=!0;if(re(x))for(let K=0;K<x.length;++K){const U=x[K],W=ae(U)&&U.name;if(W==="Boolean"){C=!0;break}else W==="String"&&(D=!1)}else C=ae(x)&&x.name==="Boolean";I[0]=C,I[1]=D,(C||ve(I,"default"))&&l.push(g)}}const h=[o,l];return Ie(n)&&r.set(n,h),h}function ah(n){return n[0]!=="$"&&!Ds(n)}const sc=n=>n==="_"||n==="_ctx"||n==="$stable",ic=n=>re(n)?n.map(Nt):[Nt(n)],Ay=(n,e,t)=>{if(e._n)return e;const r=U_((...s)=>ic(e(...s)),t);return r._c=!1,r},$d=(n,e,t)=>{const r=n._ctx;for(const s in n){if(sc(s))continue;const i=n[s];if(ae(i))e[s]=Ay(s,i,r);else if(i!=null){const o=ic(i);e[s]=()=>o}}},jd=(n,e)=>{const t=ic(e);n.slots.default=()=>t},qd=(n,e,t)=>{for(const r in e)(t||!sc(r))&&(n[r]=e[r])},by=(n,e,t)=>{const r=n.slots=Ld();if(n.vnode.shapeFlag&32){const s=e._;s?(qd(r,e,t),t&&Zf(r,"_",s,!0)):$d(e,r)}else e&&jd(n,e)},Ry=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Re;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:qd(s,e,t):(i=!e.$stable,$d(e,s)),o=e}else e&&(jd(n,e),o={default:1});if(i)for(const l in s)!sc(l)&&o[l]==null&&delete s[l]},ft=xy;function Sy(n){return Py(n)}function Py(n,e){const t=Go();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:g,nextSibling:m,setScopeId:I=Bt,insertStaticContent:x}=n,C=(y,w,k,M=null,V=null,N=null,q=void 0,j=null,B=!!w.dynamicChildren)=>{if(y===w)return;y&&!Ts(y,w)&&(M=Yt(y),Fe(y,V,N,!0),y=null),w.patchFlag===-2&&(B=!1,w.dynamicChildren=null);const{type:O,ref:Y,shapeFlag:H}=w;switch(O){case Zo:D(y,w,k,M);break;case $r:K(y,w,k,M);break;case Ha:y==null&&U(w,k,M,q);break;case Ot:S(y,w,k,M,V,N,q,j,B);break;default:H&1?ce(y,w,k,M,V,N,q,j,B):H&6?v(y,w,k,M,V,N,q,j,B):(H&64||H&128)&&O.process(y,w,k,M,V,N,q,j,B,Ct)}Y!=null&&V?Ns(Y,y&&y.ref,N,w||y,!w):Y==null&&y&&y.ref!=null&&Ns(y.ref,null,N,y,!0)},D=(y,w,k,M)=>{if(y==null)r(w.el=l(w.children),k,M);else{const V=w.el=y.el;w.children!==y.children&&h(V,w.children)}},K=(y,w,k,M)=>{y==null?r(w.el=c(w.children||""),k,M):w.el=y.el},U=(y,w,k,M)=>{[y.el,y.anchor]=x(y.children,w,k,M,y.el,y.anchor)},W=({el:y,anchor:w},k,M)=>{let V;for(;y&&y!==w;)V=m(y),r(y,k,M),y=V;r(w,k,M)},z=({el:y,anchor:w})=>{let k;for(;y&&y!==w;)k=m(y),s(y),y=k;s(w)},ce=(y,w,k,M,V,N,q,j,B)=>{if(w.type==="svg"?q="svg":w.type==="math"&&(q="mathml"),y==null)_e(w,k,M,V,N,q,j,B);else{const O=y.el&&y.el._isVueCE?y.el:null;try{O&&O._beginPatch(),E(y,w,V,N,q,j,B)}finally{O&&O._endPatch()}}},_e=(y,w,k,M,V,N,q,j)=>{let B,O;const{props:Y,shapeFlag:H,transition:Q,dirs:Z}=y;if(B=y.el=o(y.type,N,Y&&Y.is,Y),H&8?d(B,y.children):H&16&&_(y.children,B,null,M,V,za(y,N),q,j),Z&&Yn(y,null,M,"created"),A(B,y,y.scopeId,q,M),Y){for(const oe in Y)oe!=="value"&&!Ds(oe)&&i(B,oe,null,Y[oe],N,M);"value"in Y&&i(B,"value",null,Y.value,N),(O=Y.onVnodeBeforeMount)&&xt(O,M,y)}Z&&Yn(y,null,M,"beforeMount");const ee=ky(V,Q);ee&&Q.beforeEnter(B),r(B,w,k),((O=Y&&Y.onVnodeMounted)||ee||Z)&&ft(()=>{try{O&&xt(O,M,y),ee&&Q.enter(B),Z&&Yn(y,null,M,"mounted")}finally{}},V)},A=(y,w,k,M,V)=>{if(k&&I(y,k),M)for(let N=0;N<M.length;N++)I(y,M[N]);if(V){let N=V.subTree;if(w===N||Kd(N.type)&&(N.ssContent===w||N.ssFallback===w)){const q=V.vnode;A(y,q,q.scopeId,q.slotScopeIds,V.parent)}}},_=(y,w,k,M,V,N,q,j,B=0)=>{for(let O=B;O<y.length;O++){const Y=y[O]=j?nn(y[O]):Nt(y[O]);C(null,Y,w,k,M,V,N,q,j)}},E=(y,w,k,M,V,N,q)=>{const j=w.el=y.el;let{patchFlag:B,dynamicChildren:O,dirs:Y}=w;B|=y.patchFlag&16;const H=y.props||Re,Q=w.props||Re;let Z;if(k&&Xn(k,!1),(Z=Q.onVnodeBeforeUpdate)&&xt(Z,k,w,y),Y&&Yn(w,y,k,"beforeUpdate"),k&&Xn(k,!0),(H.innerHTML&&Q.innerHTML==null||H.textContent&&Q.textContent==null)&&d(j,""),O?T(y.dynamicChildren,O,j,k,M,za(w,V),N):q||de(y,w,j,null,k,M,za(w,V),N,!1),B>0){if(B&16)b(j,H,Q,k,V);else if(B&2&&H.class!==Q.class&&i(j,"class",null,Q.class,V),B&4&&i(j,"style",H.style,Q.style,V),B&8){const ee=w.dynamicProps;for(let oe=0;oe<ee.length;oe++){const me=ee[oe],xe=H[me],Me=Q[me];(Me!==xe||me==="value")&&i(j,me,xe,Me,V,k)}}B&1&&y.children!==w.children&&d(j,w.children)}else!q&&O==null&&b(j,H,Q,k,V);((Z=Q.onVnodeUpdated)||Y)&&ft(()=>{Z&&xt(Z,k,w,y),Y&&Yn(w,y,k,"updated")},M)},T=(y,w,k,M,V,N,q)=>{for(let j=0;j<w.length;j++){const B=y[j],O=w[j],Y=B.el&&(B.type===Ot||!Ts(B,O)||B.shapeFlag&198)?g(B.el):k;C(B,O,Y,null,M,V,N,q,!0)}},b=(y,w,k,M,V)=>{if(w!==k){if(w!==Re)for(const N in w)!Ds(N)&&!(N in k)&&i(y,N,w[N],null,V,M);for(const N in k){if(Ds(N))continue;const q=k[N],j=w[N];q!==j&&N!=="value"&&i(y,N,j,q,V,M)}"value"in k&&i(y,"value",w.value,k.value,V)}},S=(y,w,k,M,V,N,q,j,B)=>{const O=w.el=y?y.el:l(""),Y=w.anchor=y?y.anchor:l("");let{patchFlag:H,dynamicChildren:Q,slotScopeIds:Z}=w;Z&&(j=j?j.concat(Z):Z),y==null?(r(O,k,M),r(Y,k,M),_(w.children||[],k,Y,V,N,q,j,B)):H>0&&H&64&&Q&&y.dynamicChildren&&y.dynamicChildren.length===Q.length?(T(y.dynamicChildren,Q,k,V,N,q,j),(w.key!=null||V&&w===V.subTree)&&zd(y,w,!0)):de(y,w,k,Y,V,N,q,j,B)},v=(y,w,k,M,V,N,q,j,B)=>{w.slotScopeIds=j,y==null?w.shapeFlag&512?V.ctx.activate(w,k,M,q,B):pt(w,k,M,V,N,q,B):vn(y,w,B)},pt=(y,w,k,M,V,N,q)=>{const j=y.component=By(y,M,V);if(Sd(y)&&(j.ctx.renderer=Ct),jy(j,!1,q),j.asyncDep){if(V&&V.registerDep(j,qe,q),!y.el){const B=j.subTree=ir($r);K(null,B,w,k),y.placeholder=B.el}}else qe(j,y,w,k,V,N,q)},vn=(y,w,k)=>{const M=w.component=y.component;if(vy(y,w,k))if(M.asyncDep&&!M.asyncResolved){Ee(M,w,k);return}else M.next=w,M.update();else w.el=y.el,M.vnode=w},qe=(y,w,k,M,V,N,q)=>{const j=()=>{if(y.isMounted){let{next:H,bu:Q,u:Z,parent:ee,vnode:oe}=y;{const Ye=Hd(y);if(Ye){H&&(H.el=oe.el,Ee(y,H,q)),Ye.asyncDep.then(()=>{ft(()=>{y.isUnmounted||O()},V)});return}}let me=H,xe;Xn(y,!1),H?(H.el=oe.el,Ee(y,H,q)):H=oe,Q&&no(Q),(xe=H.props&&H.props.onVnodeBeforeUpdate)&&xt(xe,ee,H,oe),Xn(y,!0);const Me=ih(y),vt=y.subTree;y.subTree=Me,C(vt,Me,g(vt.el),Yt(vt),y,V,N),H.el=Me.el,me===null&&Ey(y,Me.el),Z&&ft(Z,V),(xe=H.props&&H.props.onVnodeUpdated)&&ft(()=>xt(xe,ee,H,oe),V)}else{let H;const{el:Q,props:Z}=w,{bm:ee,m:oe,parent:me,root:xe,type:Me}=y,vt=Ms(w);Xn(y,!1),ee&&no(ee),!vt&&(H=Z&&Z.onVnodeBeforeMount)&&xt(H,me,w),Xn(y,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(Me,y.parent?y.parent.type:void 0);const Ye=y.subTree=ih(y);C(null,Ye,k,M,y,V,N),w.el=Ye.el}if(oe&&ft(oe,V),!vt&&(H=Z&&Z.onVnodeMounted)){const Ye=w;ft(()=>xt(H,me,Ye),V)}(w.shapeFlag&256||me&&Ms(me.vnode)&&me.vnode.shapeFlag&256)&&y.a&&ft(y.a,V),y.isMounted=!0,w=k=M=null}};y.scope.on();const B=y.effect=new rd(j);y.scope.off();const O=y.update=B.run.bind(B),Y=y.job=B.runIfDirty.bind(B);Y.i=y,Y.id=y.uid,B.scheduler=()=>nc(Y),Xn(y,!0),O()},Ee=(y,w,k)=>{w.component=y;const M=y.vnode.props;y.vnode=w,y.next=null,wy(y,w.props,M,k),Ry(y,w.children,k),un(),Xu(y),hn()},de=(y,w,k,M,V,N,q,j,B=!1)=>{const O=y&&y.children,Y=y?y.shapeFlag:0,H=w.children,{patchFlag:Q,shapeFlag:Z}=w;if(Q>0){if(Q&128){zn(O,H,k,M,V,N,q,j,B);return}else if(Q&256){At(O,H,k,M,V,N,q,j,B);return}}Z&8?(Y&16&&Wn(O,V,N),H!==O&&d(k,H)):Y&16?Z&16?zn(O,H,k,M,V,N,q,j,B):Wn(O,V,N,!0):(Y&8&&d(k,""),Z&16&&_(H,k,M,V,N,q,j,B))},At=(y,w,k,M,V,N,q,j,B)=>{y=y||xr,w=w||xr;const O=y.length,Y=w.length,H=Math.min(O,Y);let Q;for(Q=0;Q<H;Q++){const Z=w[Q]=B?nn(w[Q]):Nt(w[Q]);C(y[Q],Z,k,null,V,N,q,j,B)}O>Y?Wn(y,V,N,!0,!1,H):_(w,k,M,V,N,q,j,B,H)},zn=(y,w,k,M,V,N,q,j,B)=>{let O=0;const Y=w.length;let H=y.length-1,Q=Y-1;for(;O<=H&&O<=Q;){const Z=y[O],ee=w[O]=B?nn(w[O]):Nt(w[O]);if(Ts(Z,ee))C(Z,ee,k,null,V,N,q,j,B);else break;O++}for(;O<=H&&O<=Q;){const Z=y[H],ee=w[Q]=B?nn(w[Q]):Nt(w[Q]);if(Ts(Z,ee))C(Z,ee,k,null,V,N,q,j,B);else break;H--,Q--}if(O>H){if(O<=Q){const Z=Q+1,ee=Z<Y?w[Z].el:M;for(;O<=Q;)C(null,w[O]=B?nn(w[O]):Nt(w[O]),k,ee,V,N,q,j,B),O++}}else if(O>Q)for(;O<=H;)Fe(y[O],V,N,!0),O++;else{const Z=O,ee=O,oe=new Map;for(O=ee;O<=Q;O++){const ze=w[O]=B?nn(w[O]):Nt(w[O]);ze.key!=null&&oe.set(ze.key,O)}let me,xe=0;const Me=Q-ee+1;let vt=!1,Ye=0;const En=new Array(Me);for(O=0;O<Me;O++)En[O]=0;for(O=Z;O<=H;O++){const ze=y[O];if(xe>=Me){Fe(ze,V,N,!0);continue}let Et;if(ze.key!=null)Et=oe.get(ze.key);else for(me=ee;me<=Q;me++)if(En[me-ee]===0&&Ts(ze,w[me])){Et=me;break}Et===void 0?Fe(ze,V,N,!0):(En[Et-ee]=O+1,Et>=Ye?Ye=Et:vt=!0,C(ze,w[Et],k,null,V,N,q,j,B),xe++)}const is=vt?Cy(En):xr;for(me=is.length-1,O=Me-1;O>=0;O--){const ze=ee+O,Et=w[ze],Ri=w[ze+1],vr=ze+1<Y?Ri.el||Wd(Ri):M;En[O]===0?C(null,Et,k,vr,V,N,q,j,B):vt&&(me<0||O!==is[me]?Jt(Et,k,vr,2):me--)}}},Jt=(y,w,k,M,V=null)=>{const{el:N,type:q,transition:j,children:B,shapeFlag:O}=y;if(O&6){Jt(y.component.subTree,w,k,M);return}if(O&128){y.suspense.move(w,k,M);return}if(O&64){q.move(y,w,k,Ct);return}if(q===Ot){r(N,w,k);for(let H=0;H<B.length;H++)Jt(B[H],w,k,M);r(y.anchor,w,k);return}if(q===Ha){W(y,w,k);return}if(M!==2&&O&1&&j)if(M===0)j.beforeEnter(N),r(N,w,k),ft(()=>j.enter(N),V);else{const{leave:H,delayLeave:Q,afterLeave:Z}=j,ee=()=>{y.ctx.isUnmounted?s(N):r(N,w,k)},oe=()=>{N._isLeaving&&N[W_](!0),H(N,()=>{ee(),Z&&Z()})};Q?Q(N,ee,oe):oe()}else r(N,w,k)},Fe=(y,w,k,M=!1,V=!1)=>{const{type:N,props:q,ref:j,children:B,dynamicChildren:O,shapeFlag:Y,patchFlag:H,dirs:Q,cacheIndex:Z,memo:ee}=y;if(H===-2&&(V=!1),j!=null&&(un(),Ns(j,null,k,y,!0),hn()),Z!=null&&(w.renderCache[Z]=void 0),Y&256){w.ctx.deactivate(y);return}const oe=Y&1&&Q,me=!Ms(y);let xe;if(me&&(xe=q&&q.onVnodeBeforeUnmount)&&xt(xe,w,y),Y&6)Hn(y.component,k,M);else{if(Y&128){y.suspense.unmount(k,M);return}oe&&Yn(y,null,w,"beforeUnmount"),Y&64?y.type.remove(y,w,k,Ct,M):O&&!O.hasOnce&&(N!==Ot||H>0&&H&64)?Wn(O,w,k,!1,!0):(N===Ot&&H&384||!V&&Y&16)&&Wn(B,w,k),M&&Ue(y)}const Me=ee!=null&&Z==null;(me&&(xe=q&&q.onVnodeUnmounted)||oe||Me)&&ft(()=>{xe&&xt(xe,w,y),oe&&Yn(y,null,w,"unmounted"),Me&&(y.el=null)},k)},Ue=y=>{const{type:w,el:k,anchor:M,transition:V}=y;if(w===Ot){wa(k,M);return}if(w===Ha){z(y);return}const N=()=>{s(k),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(y.shapeFlag&1&&V&&!V.persisted){const{leave:q,delayLeave:j}=V,B=()=>q(k,N);j?j(y.el,N,B):B()}else N()},wa=(y,w)=>{let k;for(;y!==w;)k=m(y),s(y),y=k;s(w)},Hn=(y,w,k)=>{const{bum:M,scope:V,job:N,subTree:q,um:j,m:B,a:O}=y;lh(B),lh(O),M&&no(M),V.stop(),N&&(N.flags|=8,Fe(q,y,w,k)),j&&ft(j,w),ft(()=>{y.isUnmounted=!0},w)},Wn=(y,w,k,M=!1,V=!1,N=0)=>{for(let q=N;q<y.length;q++)Fe(y[q],w,k,M,V)},Yt=y=>{if(y.shapeFlag&6)return Yt(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=m(y.anchor||y.el),k=w&&w[z_];return k?m(k):w};let rs=!1;const bi=(y,w,k)=>{let M;y==null?w._vnode&&(Fe(w._vnode,null,null,!0),M=w._vnode.component):C(w._vnode||null,y,w,null,null,null,k),w._vnode=y,rs||(rs=!0,Xu(M),Td(),rs=!1)},Ct={p:C,um:Fe,m:Jt,r:Ue,mt:pt,mc:_,pc:de,pbc:T,n:Yt,o:n};return{render:bi,hydrate:void 0,createApp:dy(bi)}}function za({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Xn({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ky(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function zd(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=nn(s[i]),l.el=o.el),!t&&l.patchFlag!==-2&&zd(o,l)),l.type===Zo&&(l.patchFlag===-1&&(l=s[i]=nn(l)),l.el=o.el),l.type===$r&&!l.el&&(l.el=o.el)}}function Cy(n){const e=n.slice(),t=[0];let r,s,i,o,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)l=i+o>>1,n[t[l]]<h?i=l+1:o=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function Hd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hd(e)}function lh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Wd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Wd(e.subTree):null}const Kd=n=>n.__isSuspense;function xy(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):F_(n)}const Ot=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),$r=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),Fs=[];let _t=null;function vs(n=!1){Fs.push(_t=n?null:[])}function Dy(){Fs.pop(),_t=Fs[Fs.length-1]||null}let Js=1;function ch(n,e=!1){Js+=n,n<0&&_t&&e&&(_t.hasOnce=!0)}function Vy(n){return n.dynamicChildren=Js>0?_t||xr:null,Dy(),Js>0&&_t&&_t.push(n),n}function Es(n,e,t,r,s,i){return Vy(le(n,e,t,r,s,i,!0))}function Gd(n){return n?n.__v_isVNode===!0:!1}function Ts(n,e){return n.type===e.type&&n.key===e.key}const Qd=({key:n})=>n??null,so=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Oe(n)||it(n)||ae(n)?{i:Tt,r:n,k:e,f:!!t}:n:null);function le(n,e=null,t=null,r=0,s=null,i=n===Ot?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Qd(e),ref:e&&so(e),scopeId:Id,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return l?(oc(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Oe(t)?8:16),Js>0&&!o&&_t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_t.push(c),c}const ir=Oy;function Oy(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===sy)&&(n=$r),Gd(n)){const l=jr(n,e,!0);return t&&oc(l,t),Js>0&&!i&&_t&&(l.shapeFlag&6?_t[_t.indexOf(n)]=l:_t.push(l)),l.patchFlag=-2,l}if(Wy(n)&&(n=n.__vccOpts),e){e=Ny(e);let{class:l,style:c}=e;l&&!Oe(l)&&(e.class=Ws(l)),Ie(c)&&(tc(c)&&!re(c)&&(c=ot({},c)),e.style=Kl(c))}const o=Oe(n)?1:Kd(n)?128:H_(n)?64:Ie(n)?4:ae(n)?2:0;return le(n,e,t,r,s,o,i,!0)}function Ny(n){return n?tc(n)||Fd(n)?ot({},n):n:null}function jr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=n,h=e?Ly(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Qd(h),ref:e&&e.ref?t&&i?re(i)?i.concat(so(e)):[i,so(e)]:so(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ot?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&jr(n.ssContent),ssFallback:n.ssFallback&&jr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&rc(d,c.clone(d)),d}function My(n=" ",e=0){return ir(Zo,null,n,e)}function Nt(n){return n==null||typeof n=="boolean"?ir($r):re(n)?ir(Ot,null,n.slice()):Gd(n)?nn(n):ir(Zo,null,String(n))}function nn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:jr(n)}function oc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),oc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Fd(e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:Tt},t=32):(e=String(e),r&64?(t=16,e=[My(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ly(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ws([e.class,r.class]));else if(s==="style")e.style=Kl([e.style,r.style]);else if(qo(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!zo(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function xt(n,e,t,r=null){Kt(n,e,7,[t,r])}const Fy=Vd();let Uy=0;function By(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Fy,i={uid:Uy++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new o_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bd(r,s),emitsOptions:Od(r,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gy.bind(null,i),n.ce&&n.ce(i),i}let ht=null;const $y=()=>ht||Tt;let Eo,gl;{const n=Go(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Eo=e("__VUE_INSTANCE_SETTERS__",t=>ht=t),gl=e("__VUE_SSR_SETTERS__",t=>Ys=t)}const ui=n=>{const e=ht;return Eo(n),n.scope.on(),()=>{n.scope.off(),Eo(e)}},uh=()=>{ht&&ht.scope.off(),Eo(null)};function Jd(n){return n.vnode.shapeFlag&4}let Ys=!1;function jy(n,e=!1,t=!1){e&&gl(e);const{props:r,children:s}=n.vnode,i=Jd(n);Ty(n,r,i,e),by(n,s,t||e);const o=i?qy(n,e):void 0;return e&&gl(!1),o}function qy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,oy);const{setup:r}=t;if(r){un();const s=n.setupContext=r.length>1?Hy(n):null,i=ui(n),o=ci(r,n,0,[n.props,s]),l=Qf(o);if(hn(),i(),(l||n.sp)&&!Ms(n)&&Rd(n),l){if(o.then(uh,uh),e)return o.then(c=>{hh(n,c)}).catch(c=>{Jo(c,n,0)});n.asyncDep=o}else hh(n,o)}else Yd(n)}function hh(n,e,t){ae(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ie(e)&&(n.setupState=_d(e)),Yd(n)}function Yd(n,e,t){const r=n.type;n.render||(n.render=r.render||Bt);{const s=ui(n);un();try{ay(n)}finally{hn(),s()}}}const zy={get(n,e){return rt(n,"get",""),n[e]}};function Hy(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,zy),slots:n.slots,emit:n.emit,expose:e}}function ea(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_d(S_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ls)return Ls[t](n)},has(e,t){return t in e||t in Ls}})):n.proxy}function Wy(n){return ae(n)&&"__vccOpts"in n}const Xd=(n,e)=>V_(n,e,Ys),Ky="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ml;const fh=typeof window<"u"&&window.trustedTypes;if(fh)try{ml=fh.createPolicy("vue",{createHTML:n=>n})}catch{}const Zd=ml?n=>ml.createHTML(n):n=>n,Gy="http://www.w3.org/2000/svg",Qy="http://www.w3.org/1998/Math/MathML",tn=typeof document<"u"?document:null,dh=tn&&tn.createElement("template"),Jy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?tn.createElementNS(Gy,n):e==="mathml"?tn.createElementNS(Qy,n):t?tn.createElement(n,{is:t}):tn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>tn.createTextNode(n),createComment:n=>tn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>tn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{dh.innerHTML=Zd(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=dh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Yy=Symbol("_vtc");function Xy(n,e,t){const r=n[Yy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ph=Symbol("_vod"),Zy=Symbol("_vsh"),ev=Symbol(""),tv=/(?:^|;)\s*display\s*:/;function nv(n,e,t){const r=n.style,s=Oe(t);let i=!1;if(t&&!s){if(e)if(Oe(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&Rs(r,l,"")}else for(const o in e)t[o]==null&&Rs(r,o,"");for(const o in t){o==="display"&&(i=!0);const l=t[o];l!=null?sv(n,o,!Oe(e)&&e?e[o]:void 0,l)||Rs(r,o,l):Rs(r,o,"")}}else if(s){if(e!==t){const o=r[ev];o&&(t+=";"+o),r.cssText=t,i=tv.test(t)}}else e&&n.removeAttribute("style");ph in n&&(n[ph]=i?r.display:"",n[Zy]&&(r.display="none"))}const gh=/\s*!important$/;function Rs(n,e,t){if(re(t))t.forEach(r=>Rs(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=rv(n,e);gh.test(t)?n.setProperty(Bn(r),t.replace(gh,""),"important"):n[r]=t}}const mh=["Webkit","Moz","ms"],Wa={};function rv(n,e){const t=Wa[e];if(t)return t;let r=Rt(e);if(r!=="filter"&&r in n)return Wa[e]=r;r=Xf(r);for(let s=0;s<mh.length;s++){const i=mh[s]+r;if(i in n)return Wa[e]=i}return e}function sv(n,e,t,r){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Oe(r)&&t===r}const _h="http://www.w3.org/1999/xlink";function yh(n,e,t,r,s,i=r_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(_h,e.slice(6,e.length)):n.setAttributeNS(_h,e,t):t==null||i&&!ed(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Wt(t)?String(t):t)}function vh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Zd(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=ed(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function tr(n,e,t,r){n.addEventListener(e,t,r)}function iv(n,e,t,r){n.removeEventListener(e,t,r)}const Eh=Symbol("_vei");function ov(n,e,t,r,s=null){const i=n[Eh]||(n[Eh]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=av(e);if(r){const h=i[e]=uv(r,s);tr(n,l,h,c)}else o&&(iv(n,l,o,c),i[e]=void 0)}}const Th=/(?:Once|Passive|Capture)$/;function av(n){let e;if(Th.test(n)){e={};let r;for(;r=n.match(Th);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Bn(n.slice(2)),e]}let Ka=0;const lv=Promise.resolve(),cv=()=>Ka||(lv.then(()=>Ka=0),Ka=Date.now());function uv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Kt(hv(r,t.value),e,5,[r])};return t.value=n,t.attached=cv(),t}function hv(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,fv=(n,e,t,r,s,i)=>{const o=s==="svg";e==="class"?Xy(n,r,o):e==="style"?nv(n,t,r):qo(e)?zo(e)||ov(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dv(n,e,r,o))?(vh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yh(n,e,r,o,i,e!=="value")):n._isVueCE&&(pv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Oe(r)))?vh(n,Rt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),yh(n,e,r,o))};function dv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&wh(e)&&ae(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wh(e)&&Oe(t)?!1:e in n}function pv(n,e){const t=n._def.props;if(!t)return!1;const r=Rt(e);return Array.isArray(t)?t.some(s=>Rt(s)===r):Object.keys(t).some(s=>Rt(s)===r)}const To=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>no(e,t):e};function gv(n){n.target.composing=!0}function Ih(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Nr=Symbol("_assign");function Ah(n,e,t){return e&&(n=n.trim()),t&&(n=Ko(n)),n}const ws={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Nr]=To(s);const i=r||s.props&&s.props.type==="number";tr(n,e?"change":"input",o=>{o.target.composing||n[Nr](Ah(n.value,t,i))}),(t||i)&&tr(n,"change",()=>{n.value=Ah(n.value,t,i)}),e||(tr(n,"compositionstart",gv),tr(n,"compositionend",Ih),tr(n,"change",Ih))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},o){if(n[Nr]=To(o),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?Ko(n.value):n.value,c=e??"";if(l===c)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c)}},mv={deep:!0,created(n,{value:e,modifiers:{number:t}},r){const s=Ho(e);tr(n,"change",()=>{const i=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?Ko(wo(o)):wo(o));n[Nr](n.multiple?s?new Set(i):i:i[0]),n._assigning=!0,vd(()=>{n._assigning=!1})}),n[Nr]=To(r)},mounted(n,{value:e}){bh(n,e)},beforeUpdate(n,e,t){n[Nr]=To(t)},updated(n,{value:e}){n._assigning||bh(n,e)}};function bh(n,e){const t=n.multiple,r=re(e);if(!(t&&!r&&!Ho(e))){for(let s=0,i=n.options.length;s<i;s++){const o=n.options[s],l=wo(o);if(t)if(r){const c=typeof l;c==="string"||c==="number"?o.selected=e.some(h=>String(h)===String(l)):o.selected=i_(e,l)>-1}else o.selected=e.has(l);else if(li(wo(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function wo(n){return"_value"in n?n._value:n.value}const _v={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Rh=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=Bn(s.key);if(e.some(o=>o===i||_v[o]===i))return n(s)})},yv=ot({patchProp:fv},Jy);let Sh;function vv(){return Sh||(Sh=Sy(yv))}const Ev=(...n)=>{const e=vv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=wv(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Tv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Tv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function wv(n){return Oe(n)?document.querySelector(n):n}function ac(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let gr=ac();function ep(n){gr=n}const tp=/[&<>"']/,Iv=new RegExp(tp.source,"g"),np=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Av=new RegExp(np.source,"g"),bv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ph=n=>bv[n];function mt(n,e){if(e){if(tp.test(n))return n.replace(Iv,Ph)}else if(np.test(n))return n.replace(Av,Ph);return n}const Rv=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Sv(n){return n.replace(Rv,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Pv=/(^|[^\[])\^/g;function Ae(n,e){let t=typeof n=="string"?n:n.source;e=e||"";const r={replace:(s,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(Pv,"$1"),t=t.replace(s,o),r},getRegex:()=>new RegExp(t,e)};return r}function kh(n){try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const Us={exec:()=>null};function Ch(n,e){const t=n.replace(/\|/g,(i,o,l)=>{let c=!1,h=o;for(;--h>=0&&l[h]==="\\";)c=!c;return c?"|":" |"}),r=t.split(/ \|/);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(/\\\|/g,"|");return r}function Wi(n,e,t){const r=n.length;if(r===0)return"";let s=0;for(;s<r&&n.charAt(r-s-1)===e;)s++;return n.slice(0,r-s)}function kv(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let r=0;r<n.length;r++)if(n[r]==="\\")r++;else if(n[r]===e[0])t++;else if(n[r]===e[1]&&(t--,t<0))return r;return-1}function xh(n,e,t,r){const s=e.href,i=e.title?mt(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){r.state.inLink=!0;const l={type:"link",raw:t,href:s,title:i,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,l}return{type:"image",raw:t,href:s,title:i,text:mt(o)}}function Cv(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const r=t[1];return e.split(`
`).map(s=>{const i=s.match(/^\s+/);if(i===null)return s;const[o]=i;return o.length>=r.length?s.slice(r.length):s}).join(`
`)}class Io{constructor(e){ke(this,"options");ke(this,"rules");ke(this,"lexer");this.options=e||gr}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const r=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?r:Wi(r,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const r=t[0],s=Cv(r,t[3]||"");return{type:"code",raw:r,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let r=t[2].trim();if(/#$/.test(r)){const s=Wi(r,"#");(this.options.pedantic||!s||/ $/.test(s))&&(r=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let r=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);r=Wi(r.replace(/^ *>[ \t]?/gm,""),`
`);const s=this.lexer.state.top;this.lexer.state.top=!0;const i=this.lexer.blockTokens(r);return this.lexer.state.top=s,{type:"blockquote",raw:t[0],tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r=t[1].trim();const s=r.length>1,i={type:"list",raw:"",ordered:s,start:s?+r.slice(0,-1):"",loose:!1,items:[]};r=s?`\\d{1,9}\\${r.slice(-1)}`:`\\${r}`,this.options.pedantic&&(r=s?r:"[*+-]");const o=new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);let l="",c="",h=!1;for(;e;){let d=!1;if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let g=t[2].split(`
`,1)[0].replace(/^\t+/,K=>" ".repeat(3*K.length)),m=e.split(`
`,1)[0],I=0;this.options.pedantic?(I=2,c=g.trimStart()):(I=t[2].search(/[^ ]/),I=I>4?1:I,c=g.slice(I),I+=t[1].length);let x=!1;if(!g&&/^ *$/.test(m)&&(l+=m+`
`,e=e.substring(m.length+1),d=!0),!d){const K=new RegExp(`^ {0,${Math.min(3,I-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),U=new RegExp(`^ {0,${Math.min(3,I-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),W=new RegExp(`^ {0,${Math.min(3,I-1)}}(?:\`\`\`|~~~)`),z=new RegExp(`^ {0,${Math.min(3,I-1)}}#`);for(;e;){const ce=e.split(`
`,1)[0];if(m=ce,this.options.pedantic&&(m=m.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),W.test(m)||z.test(m)||K.test(m)||U.test(e))break;if(m.search(/[^ ]/)>=I||!m.trim())c+=`
`+m.slice(I);else{if(x||g.search(/[^ ]/)>=4||W.test(g)||z.test(g)||U.test(g))break;c+=`
`+m}!x&&!m.trim()&&(x=!0),l+=ce+`
`,e=e.substring(ce.length+1),g=m.slice(I)}}i.loose||(h?i.loose=!0:/\n *\n *$/.test(l)&&(h=!0));let C=null,D;this.options.gfm&&(C=/^\[[ xX]\] /.exec(c),C&&(D=C[0]!=="[ ] ",c=c.replace(/^\[[ xX]\] +/,""))),i.items.push({type:"list_item",raw:l,task:!!C,checked:D,loose:!1,text:c,tokens:[]}),i.raw+=l}i.items[i.items.length-1].raw=l.trimEnd(),i.items[i.items.length-1].text=c.trimEnd(),i.raw=i.raw.trimEnd();for(let d=0;d<i.items.length;d++)if(this.lexer.state.top=!1,i.items[d].tokens=this.lexer.blockTokens(i.items[d].text,[]),!i.loose){const g=i.items[d].tokens.filter(I=>I.type==="space"),m=g.length>0&&g.some(I=>/\n.*\n/.test(I.raw));i.loose=m}if(i.loose)for(let d=0;d<i.items.length;d++)i.items[d].loose=!0;return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const r=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:r,raw:t[0],href:s,title:i}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const r=Ch(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),i=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(r.length===s.length){for(const l of s)/^ *-+: *$/.test(l)?o.align.push("right"):/^ *:-+: *$/.test(l)?o.align.push("center"):/^ *:-+ *$/.test(l)?o.align.push("left"):o.align.push(null);for(const l of r)o.header.push({text:l,tokens:this.lexer.inline(l)});for(const l of i)o.rows.push(Ch(l,o.header.length).map(c=>({text:c,tokens:this.lexer.inline(c)})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const r=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:r,tokens:this.lexer.inline(r)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:mt(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const r=t[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const o=Wi(r.slice(0,-1),"\\");if((r.length-o.length)%2===0)return}else{const o=kv(t[2],"()");if(o>-1){const c=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let s=t[2],i="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],i=o[3])}else i=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(r)?s=s.slice(1):s=s.slice(1,-1)),xh(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){const s=(r[2]||r[1]).replace(/\s+/g," "),i=t[s.toLowerCase()];if(!i){const o=r[0].charAt(0);return{type:"text",raw:o,text:o}}return xh(r,i,r[0],this.lexer)}}emStrong(e,t,r=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&r.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!r||this.rules.inline.punctuation.exec(r)){const o=[...s[0]].length-1;let l,c,h=o,d=0;const g=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(g.lastIndex=0,t=t.slice(-1*e.length+o);(s=g.exec(t))!=null;){if(l=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!l)continue;if(c=[...l].length,s[3]||s[4]){h+=c;continue}else if((s[5]||s[6])&&o%3&&!((o+c)%3)){d+=c;continue}if(h-=c,h>0)continue;c=Math.min(c,c+h+d);const m=[...s[0]][0].length,I=e.slice(0,o+s.index+m+c);if(Math.min(o,c)%2){const C=I.slice(1,-1);return{type:"em",raw:I,text:C,tokens:this.lexer.inlineTokens(C)}}const x=I.slice(2,-2);return{type:"strong",raw:I,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let r=t[2].replace(/\n/g," ");const s=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return s&&i&&(r=r.substring(1,r.length-1)),r=mt(r,!0),{type:"codespan",raw:t[0],text:r}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let r,s;return t[2]==="@"?(r=mt(t[1]),s="mailto:"+r):(r=mt(t[1]),s=r),{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(e){var r;let t;if(t=this.rules.inline.url.exec(e)){let s,i;if(t[2]==="@")s=mt(t[0]),i="mailto:"+s;else{let o;do o=t[0],t[0]=((r=this.rules.inline._backpedal.exec(t[0]))==null?void 0:r[0])??"";while(o!==t[0]);s=mt(t[0]),t[1]==="www."?i="http://"+t[0]:i=t[0]}return{type:"link",raw:t[0],text:s,href:i,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let r;return this.lexer.state.inRawBlock?r=t[0]:r=mt(t[0]),{type:"text",raw:t[0],text:r}}}}const xv=/^(?: *(?:\n|$))+/,Dv=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Vv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ov=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,rp=/(?:[*+-]|\d{1,9}[.)])/,sp=Ae(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,rp).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),lc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Nv=/^[^\n]+/,cc=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Mv=Ae(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",cc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Lv=Ae(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,rp).getRegex(),ta="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",uc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Fv=Ae("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",uc).replace("tag",ta).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ip=Ae(lc).replace("hr",hi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ta).getRegex(),Uv=Ae(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ip).getRegex(),hc={blockquote:Uv,code:Dv,def:Mv,fences:Vv,heading:Ov,hr:hi,html:Fv,lheading:sp,list:Lv,newline:xv,paragraph:ip,table:Us,text:Nv},Dh=Ae("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",hi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ta).getRegex(),Bv={...hc,table:Dh,paragraph:Ae(lc).replace("hr",hi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Dh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ta).getRegex()},$v={...hc,html:Ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",uc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Us,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ae(lc).replace("hr",hi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",sp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},op=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,jv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ap=/^( {2,}|\\)\n(?!\s*$)/,qv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,fi="\\p{P}\\p{S}",zv=Ae(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,fi).getRegex(),Hv=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Wv=Ae(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,fi).getRegex(),Kv=Ae("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,fi).getRegex(),Gv=Ae("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,fi).getRegex(),Qv=Ae(/\\([punct])/,"gu").replace(/punct/g,fi).getRegex(),Jv=Ae(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Yv=Ae(uc).replace("(?:-->|$)","-->").getRegex(),Xv=Ae("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Yv).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ao=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Zv=Ae(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ao).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),lp=Ae(/^!?\[(label)\]\[(ref)\]/).replace("label",Ao).replace("ref",cc).getRegex(),cp=Ae(/^!?\[(ref)\](?:\[\])?/).replace("ref",cc).getRegex(),eE=Ae("reflink|nolink(?!\\()","g").replace("reflink",lp).replace("nolink",cp).getRegex(),fc={_backpedal:Us,anyPunctuation:Qv,autolink:Jv,blockSkip:Hv,br:ap,code:jv,del:Us,emStrongLDelim:Wv,emStrongRDelimAst:Kv,emStrongRDelimUnd:Gv,escape:op,link:Zv,nolink:cp,punctuation:zv,reflink:lp,reflinkSearch:eE,tag:Xv,text:qv,url:Us},tE={...fc,link:Ae(/^!?\[(label)\]\((.*?)\)/).replace("label",Ao).getRegex(),reflink:Ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ao).getRegex()},_l={...fc,escape:Ae(op).replace("])","~|])").getRegex(),url:Ae(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},nE={..._l,br:Ae(ap).replace("{2,}","*").getRegex(),text:Ae(_l.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ki={normal:hc,gfm:Bv,pedantic:$v},Is={normal:fc,gfm:_l,breaks:nE,pedantic:tE};class Lt{constructor(e){ke(this,"tokens");ke(this,"options");ke(this,"state");ke(this,"tokenizer");ke(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||gr,this.options.tokenizer=this.options.tokenizer||new Io,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:Ki.normal,inline:Is.normal};this.options.pedantic?(t.block=Ki.pedantic,t.inline=Is.pedantic):this.options.gfm&&(t.block=Ki.gfm,this.options.breaks?t.inline=Is.breaks:t.inline=Is.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ki,inline:Is}}static lex(e,t){return new Lt(t).lex(e)}static lexInline(e,t){return new Lt(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const r=this.inlineQueue[t];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(l,c,h)=>c+"    ".repeat(h.length));let r,s,i,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(l=>(r=l.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length),r.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+r.raw,s.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const c=e.slice(1);let h;this.options.extensions.startBlock.forEach(d=>{h=d.call({lexer:this},c),typeof h=="number"&&h>=0&&(l=Math.min(l,h))}),l<1/0&&l>=0&&(i=e.substring(0,l+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){s=t[t.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r),o=i.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+r.raw,s.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(r);continue}if(e){const l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r,s,i,o=e,l,c,h;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(l=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)d.includes(l[0].slice(l[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(l=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,l.index)+"["+"a".repeat(l[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(l=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,l.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(c||(h=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(r=d.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))){if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),s=t[t.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length),s=t[t.length-1],s&&r.type==="text"&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,o,h)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}if(i=e,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const g=e.slice(1);let m;this.options.extensions.startInline.forEach(I=>{m=I.call({lexer:this},g),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(i=e.substring(0,d+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(h=r.raw.slice(-1)),c=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=r.raw,s.text+=r.text):t.push(r);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return t}}class bo{constructor(e){ke(this,"options");this.options=e||gr}code(e,t,r){var i;const s=(i=(t||"").match(/^\S*/))==null?void 0:i[0];return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+mt(s)+'">'+(r?e:mt(e,!0))+`</code></pre>
`:"<pre><code>"+(r?e:mt(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,r){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,r){const s=t?"ol":"ul",i=t&&r!==1?' start="'+r+'"':"";return"<"+s+i+`>
`+e+"</"+s+`>
`}listitem(e,t,r){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){const s=kh(e);if(s===null)return r;e=s;let i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+r+"</a>",i}image(e,t,r){const s=kh(e);if(s===null)return r;e=s;let i=`<img src="${e}" alt="${r}"`;return t&&(i+=` title="${t}"`),i+=">",i}text(e){return e}}class dc{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Ft{constructor(e){ke(this,"options");ke(this,"renderer");ke(this,"textRenderer");this.options=e||gr,this.options.renderer=this.options.renderer||new bo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new dc}static parse(e,t){return new Ft(t).parse(e)}static parseInline(e,t){return new Ft(t).parseInline(e)}parse(e,t=!0){let r="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const o=i,l=this.options.extensions.renderers[o.type].call({parser:this},o);if(l!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){r+=l||"";continue}}switch(i.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{const o=i;r+=this.renderer.heading(this.parseInline(o.tokens),o.depth,Sv(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=i;r+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=i;let l="",c="";for(let d=0;d<o.header.length;d++)c+=this.renderer.tablecell(this.parseInline(o.header[d].tokens),{header:!0,align:o.align[d]});l+=this.renderer.tablerow(c);let h="";for(let d=0;d<o.rows.length;d++){const g=o.rows[d];c="";for(let m=0;m<g.length;m++)c+=this.renderer.tablecell(this.parseInline(g[m].tokens),{header:!1,align:o.align[m]});h+=this.renderer.tablerow(c)}r+=this.renderer.table(l,h);continue}case"blockquote":{const o=i,l=this.parse(o.tokens);r+=this.renderer.blockquote(l);continue}case"list":{const o=i,l=o.ordered,c=o.start,h=o.loose;let d="";for(let g=0;g<o.items.length;g++){const m=o.items[g],I=m.checked,x=m.task;let C="";if(m.task){const D=this.renderer.checkbox(!!I);h?m.tokens.length>0&&m.tokens[0].type==="paragraph"?(m.tokens[0].text=D+" "+m.tokens[0].text,m.tokens[0].tokens&&m.tokens[0].tokens.length>0&&m.tokens[0].tokens[0].type==="text"&&(m.tokens[0].tokens[0].text=D+" "+m.tokens[0].tokens[0].text)):m.tokens.unshift({type:"text",text:D+" "}):C+=D+" "}C+=this.parse(m.tokens,h),d+=this.renderer.listitem(C,x,!!I)}r+=this.renderer.list(d,l,c);continue}case"html":{const o=i;r+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=i;r+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=i,l=o.tokens?this.parseInline(o.tokens):o.text;for(;s+1<e.length&&e[s+1].type==="text";)o=e[++s],l+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);r+=t?this.renderer.paragraph(l):l;continue}default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}parseInline(e,t){t=t||this.renderer;let r="";for(let s=0;s<e.length;s++){const i=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]){const o=this.options.extensions.renderers[i.type].call({parser:this},i);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=o||"";continue}}switch(i.type){case"escape":{const o=i;r+=t.text(o.text);break}case"html":{const o=i;r+=t.html(o.text);break}case"link":{const o=i;r+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{const o=i;r+=t.image(o.href,o.title,o.text);break}case"strong":{const o=i;r+=t.strong(this.parseInline(o.tokens,t));break}case"em":{const o=i;r+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{const o=i;r+=t.codespan(o.text);break}case"br":{r+=t.br();break}case"del":{const o=i;r+=t.del(this.parseInline(o.tokens,t));break}case"text":{const o=i;r+=t.text(o.text);break}default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}}class Bs{constructor(e){ke(this,"options");this.options=e||gr}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}ke(Bs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var pr,yl,up;class rE{constructor(...e){Ku(this,pr);ke(this,"defaults",ac());ke(this,"options",this.setOptions);ke(this,"parse",ji(this,pr,yl).call(this,Lt.lex,Ft.parse));ke(this,"parseInline",ji(this,pr,yl).call(this,Lt.lexInline,Ft.parseInline));ke(this,"Parser",Ft);ke(this,"Renderer",bo);ke(this,"TextRenderer",dc);ke(this,"Lexer",Lt);ke(this,"Tokenizer",Io);ke(this,"Hooks",Bs);this.use(...e)}walkTokens(e,t){var s,i;let r=[];for(const o of e)switch(r=r.concat(t.call(this,o)),o.type){case"table":{const l=o;for(const c of l.header)r=r.concat(this.walkTokens(c.tokens,t));for(const c of l.rows)for(const h of c)r=r.concat(this.walkTokens(h.tokens,t));break}case"list":{const l=o;r=r.concat(this.walkTokens(l.items,t));break}default:{const l=o;(i=(s=this.defaults.extensions)==null?void 0:s.childTokens)!=null&&i[l.type]?this.defaults.extensions.childTokens[l.type].forEach(c=>{const h=l[c].flat(1/0);r=r.concat(this.walkTokens(h,t))}):l.tokens&&(r=r.concat(this.walkTokens(l.tokens,t)))}}return r}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(r=>{const s={...r};if(s.async=this.defaults.async||s.async||!1,r.extensions&&(r.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const o=t.renderers[i.name];o?t.renderers[i.name]=function(...l){let c=i.renderer.apply(this,l);return c===!1&&(c=o.apply(this,l)),c}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[i.level];o?o.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),s.extensions=t),r.renderer){const i=this.defaults.renderer||new bo(this.defaults);for(const o in r.renderer){if(!(o in i))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const l=o,c=r.renderer[l],h=i[l];i[l]=(...d)=>{let g=c.apply(i,d);return g===!1&&(g=h.apply(i,d)),g||""}}s.renderer=i}if(r.tokenizer){const i=this.defaults.tokenizer||new Io(this.defaults);for(const o in r.tokenizer){if(!(o in i))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const l=o,c=r.tokenizer[l],h=i[l];i[l]=(...d)=>{let g=c.apply(i,d);return g===!1&&(g=h.apply(i,d)),g}}s.tokenizer=i}if(r.hooks){const i=this.defaults.hooks||new Bs;for(const o in r.hooks){if(!(o in i))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const l=o,c=r.hooks[l],h=i[l];Bs.passThroughHooks.has(o)?i[l]=d=>{if(this.defaults.async)return Promise.resolve(c.call(i,d)).then(m=>h.call(i,m));const g=c.call(i,d);return h.call(i,g)}:i[l]=(...d)=>{let g=c.apply(i,d);return g===!1&&(g=h.apply(i,d)),g}}s.hooks=i}if(r.walkTokens){const i=this.defaults.walkTokens,o=r.walkTokens;s.walkTokens=function(l){let c=[];return c.push(o.call(this,l)),i&&(c=c.concat(i.call(this,l))),c}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Lt.lex(e,t??this.defaults)}parser(e,t){return Ft.parse(e,t??this.defaults)}}pr=new WeakSet,yl=function(e,t){return(r,s)=>{const i={...s},o={...this.defaults,...i};this.defaults.async===!0&&i.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const l=ji(this,pr,up).call(this,!!o.silent,!!o.async);if(typeof r>"u"||r===null)return l(new Error("marked(): input parameter is undefined or null"));if(typeof r!="string")return l(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(r):r).then(c=>e(c,o)).then(c=>o.hooks?o.hooks.processAllTokens(c):c).then(c=>o.walkTokens?Promise.all(this.walkTokens(c,o.walkTokens)).then(()=>c):c).then(c=>t(c,o)).then(c=>o.hooks?o.hooks.postprocess(c):c).catch(l);try{o.hooks&&(r=o.hooks.preprocess(r));let c=e(r,o);o.hooks&&(c=o.hooks.processAllTokens(c)),o.walkTokens&&this.walkTokens(c,o.walkTokens);let h=t(c,o);return o.hooks&&(h=o.hooks.postprocess(h)),h}catch(c){return l(c)}}},up=function(e,t){return r=>{if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const s="<p>An error occurred:</p><pre>"+mt(r.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(r);throw r}};const ar=new rE;function Te(n,e){return ar.parse(n,e)}Te.options=Te.setOptions=function(n){return ar.setOptions(n),Te.defaults=ar.defaults,ep(Te.defaults),Te};Te.getDefaults=ac;Te.defaults=gr;Te.use=function(...n){return ar.use(...n),Te.defaults=ar.defaults,ep(Te.defaults),Te};Te.walkTokens=function(n,e){return ar.walkTokens(n,e)};Te.parseInline=ar.parseInline;Te.Parser=Ft;Te.parser=Ft.parse;Te.Renderer=bo;Te.TextRenderer=dc;Te.Lexer=Lt;Te.lexer=Lt.lex;Te.Tokenizer=Io;Te.Hooks=Bs;Te.parse=Te;Te.options;Te.setOptions;Te.use;Te.walkTokens;Te.parseInline;Ft.parse;Lt.lex;var Vh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},sE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},fp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,l=o?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,I=h&63;c||(I=64,o||(m=64)),r.push(t[d],t[g],t[m],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(hp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new iE;const m=i<<2|l>>4;if(r.push(m),h!==64){const I=l<<4&240|h>>2;if(r.push(I),g!==64){const x=h<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oE=function(n){const e=hp(n);return fp.encodeByteArray(e,!0)},Ro=function(n){return oE(n).replace(/\./g,"")},dp=function(n){try{return fp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=()=>aE().__FIREBASE_DEFAULTS__,cE=()=>{if(typeof process>"u"||typeof Vh>"u")return;const n=Vh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&dp(n[1]);return e&&JSON.parse(e)},na=()=>{try{return lE()||cE()||uE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pp=n=>{var e,t;return(t=(e=na())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hE=n=>{const e=pp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},gp=()=>{var n;return(n=na())===null||n===void 0?void 0:n.config},mp=n=>{var e;return(e=na())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ro(JSON.stringify(t)),Ro(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function gE(){var n;const e=(n=na())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _E(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vE(){const n=at();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function EE(){return!gE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TE(){try{return typeof indexedDB=="object"}catch{return!1}}function wE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE="FirebaseError";class yn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=IE,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,di.prototype.create)}}class di{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?AE(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new yn(s,l,r)}}function AE(n,e){return n.replace(bE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bE=/\{\$([^}]+)}/g;function RE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function So(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Oh(i)&&Oh(o)){if(!So(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Oh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ss(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ps(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function SE(n,e){const t=new PE(n,e);return t.subscribe.bind(t)}class PE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");kE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ga),s.error===void 0&&(s.error=Ga),s.complete===void 0&&(s.complete=Ga);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ga(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n){return n&&n._delegate?n._delegate:n}class lr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new fE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DE(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xE(n){return n===er?void 0:n}function DE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new CE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const OE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},NE=he.INFO,ME={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},LE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ME[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pc{constructor(e){this.name=e,this._logLevel=NE,this._logHandler=LE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const FE=(n,e)=>e.some(t=>n instanceof t);let Nh,Mh;function UE(){return Nh||(Nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BE(){return Mh||(Mh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _p=new WeakMap,vl=new WeakMap,yp=new WeakMap,Qa=new WeakMap,gc=new WeakMap;function $E(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Dn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_p.set(t,n)}).catch(()=>{}),gc.set(e,n),e}function jE(n){if(vl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});vl.set(n,e)}let El={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qE(n){El=n(El)}function zE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ja(this),e,...t);return yp.set(r,e.sort?e.sort():[e]),Dn(r)}:BE().includes(n)?function(...e){return n.apply(Ja(this),e),Dn(_p.get(this))}:function(...e){return Dn(n.apply(Ja(this),e))}}function HE(n){return typeof n=="function"?zE(n):(n instanceof IDBTransaction&&jE(n),FE(n,UE())?new Proxy(n,El):n)}function Dn(n){if(n instanceof IDBRequest)return $E(n);if(Qa.has(n))return Qa.get(n);const e=HE(n);return e!==n&&(Qa.set(n,e),gc.set(e,n)),e}const Ja=n=>gc.get(n);function WE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),l=Dn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Dn(o.result),c.oldVersion,c.newVersion,Dn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const KE=["get","getKey","getAll","getAllKeys","count"],GE=["put","add","delete","clear"],Ya=new Map;function Lh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ya.get(e))return Ya.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=GE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||KE.includes(t)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return Ya.set(e,i),i}qE(n=>({...n,get:(e,t,r)=>Lh(e,t)||n.get(e,t,r),has:(e,t)=>!!Lh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(JE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function JE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tl="@firebase/app",Fh="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn=new pc("@firebase/app"),YE="@firebase/app-compat",XE="@firebase/analytics-compat",ZE="@firebase/analytics",eT="@firebase/app-check-compat",tT="@firebase/app-check",nT="@firebase/auth",rT="@firebase/auth-compat",sT="@firebase/database",iT="@firebase/data-connect",oT="@firebase/database-compat",aT="@firebase/functions",lT="@firebase/functions-compat",cT="@firebase/installations",uT="@firebase/installations-compat",hT="@firebase/messaging",fT="@firebase/messaging-compat",dT="@firebase/performance",pT="@firebase/performance-compat",gT="@firebase/remote-config",mT="@firebase/remote-config-compat",_T="@firebase/storage",yT="@firebase/storage-compat",vT="@firebase/firestore",ET="@firebase/vertexai-preview",TT="@firebase/firestore-compat",wT="firebase",IT="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="[DEFAULT]",AT={[Tl]:"fire-core",[YE]:"fire-core-compat",[ZE]:"fire-analytics",[XE]:"fire-analytics-compat",[tT]:"fire-app-check",[eT]:"fire-app-check-compat",[nT]:"fire-auth",[rT]:"fire-auth-compat",[sT]:"fire-rtdb",[iT]:"fire-data-connect",[oT]:"fire-rtdb-compat",[aT]:"fire-fn",[lT]:"fire-fn-compat",[cT]:"fire-iid",[uT]:"fire-iid-compat",[hT]:"fire-fcm",[fT]:"fire-fcm-compat",[dT]:"fire-perf",[pT]:"fire-perf-compat",[gT]:"fire-rc",[mT]:"fire-rc-compat",[_T]:"fire-gcs",[yT]:"fire-gcs-compat",[vT]:"fire-fst",[TT]:"fire-fst-compat",[ET]:"fire-vertex","fire-js":"fire-js",[wT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Map,bT=new Map,Il=new Map;function Uh(n,e){try{n.container.addComponent(e)}catch(t){dn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qr(n){const e=n.name;if(Il.has(e))return dn.debug(`There were multiple attempts to register component ${e}.`),!1;Il.set(e,n);for(const t of Po.values())Uh(t,n);for(const t of bT.values())Uh(t,n);return!0}function mc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ut(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new di("app","Firebase",RT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=IT;function vp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Vn.create("bad-app-name",{appName:String(s)});if(t||(t=gp()),!t)throw Vn.create("no-options");const i=Po.get(s);if(i){if(So(t,i.options)&&So(r,i.config))return i;throw Vn.create("duplicate-app",{appName:s})}const o=new VE(s);for(const c of Il.values())o.addComponent(c);const l=new ST(t,r,o);return Po.set(s,l),l}function Ep(n=wl){const e=Po.get(n);if(!e&&n===wl&&gp())return vp();if(!e)throw Vn.create("no-app",{appName:n});return e}function On(n,e,t){var r;let s=(r=AT[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dn.warn(l.join(" "));return}qr(new lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="firebase-heartbeat-database",kT=1,Xs="firebase-heartbeat-store";let Xa=null;function Tp(){return Xa||(Xa=WE(PT,kT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vn.create("idb-open",{originalErrorMessage:n.message})})),Xa}async function CT(n){try{const t=(await Tp()).transaction(Xs),r=await t.objectStore(Xs).get(wp(n));return await t.done,r}catch(e){if(e instanceof yn)dn.warn(e.message);else{const t=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dn.warn(t.message)}}}async function Bh(n,e){try{const r=(await Tp()).transaction(Xs,"readwrite");await r.objectStore(Xs).put(e,wp(n)),await r.done}catch(t){if(t instanceof yn)dn.warn(t.message);else{const r=Vn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dn.warn(r.message)}}}function wp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=1024,DT=30*24*60*60*1e3;class VT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new NT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$h();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=DT}),this._storage.overwrite(this._heartbeatsCache))}catch(r){dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$h(),{heartbeatsToSend:r,unsentEntries:s}=OT(this._heartbeatsCache.heartbeats),i=Ro(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return dn.warn(t),""}}}function $h(){return new Date().toISOString().substring(0,10)}function OT(n,e=xT){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),jh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),jh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class NT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TE()?wE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await CT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jh(n){return Ro(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(n){qr(new lr("platform-logger",e=>new QE(e),"PRIVATE")),qr(new lr("heartbeat",e=>new VT(e),"PRIVATE")),On(Tl,Fh,n),On(Tl,Fh,"esm2017"),On("fire-js","")}MT("");var LT="firebase",FT="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */On(LT,FT,"app");function _c(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Ip(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UT=Ip,Ap=new di("auth","Firebase",Ip());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new pc("@firebase/auth");function BT(n,...e){ko.logLevel<=he.WARN&&ko.warn(`Auth (${Xr}): ${n}`,...e)}function io(n,...e){ko.logLevel<=he.ERROR&&ko.error(`Auth (${Xr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n,...e){throw yc(n,...e)}function $t(n,...e){return yc(n,...e)}function bp(n,e,t){const r=Object.assign(Object.assign({},UT()),{[e]:t});return new di("auth","Firebase",r).create(e,{appName:n.name})}function cn(n){return bp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ap.create(n,...e)}function te(n,e,...t){if(!n)throw yc(e,...t)}function on(n){const e="INTERNAL ASSERTION FAILED: "+n;throw io(e),new Error(e)}function pn(n,e){n||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function $T(){return qh()==="http:"||qh()==="https:"}function qh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($T()||_E()||"connection"in navigator)?navigator.onLine:!0}function qT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t){this.shortDelay=e,this.longDelay=t,pn(t>e,"Short delay should be less than long delay!"),this.isMobile=pE()||yE()}get(){return jT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n,e){pn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT=new gi(3e4,6e4);function $n(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function jn(n,e,t,r,s={}){return Sp(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=pi(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return mE()||(h.referrerPolicy="no-referrer"),Rp.fetch()(Pp(n,n.config.apiHost,t,l),h)})}async function Sp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},zT),e);try{const s=new KT(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gi(n,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bp(n,d,h);kt(n,d)}}catch(s){if(s instanceof yn)throw s;kt(n,"network-request-failed",{message:String(s)})}}async function mi(n,e,t,r,s={}){const i=await jn(n,e,t,r,s);return"mfaPendingCredential"in i&&kt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Pp(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?vc(n.config,s):`${n.config.apiScheme}://${s}`}function WT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class KT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r($t(this.auth,"network-request-failed")),HT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=$t(n,e,r);return s.customData._tokenResponse=t,s}function zh(n){return n!==void 0&&n.enterprise!==void 0}class GT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return WT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function QT(n,e){return jn(n,"GET","/v2/recaptchaConfig",$n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(n,e){return jn(n,"POST","/v1/accounts:delete",e)}async function kp(n,e){return jn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YT(n,e=!1){const t=Qe(n),r=await t.getIdToken(e),s=Ec(r);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$s(Za(s.auth_time)),issuedAtTime:$s(Za(s.iat)),expirationTime:$s(Za(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Za(n){return Number(n)*1e3}function Ec(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const s=dp(t);return s?JSON.parse(s):(io("Failed to decode base64 JWT payload"),null)}catch(s){return io("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hh(n){const e=Ec(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof yn&&XT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function XT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$s(this.lastLoginAt),this.creationTime=$s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Zs(n,kp(t,{idToken:r}));te(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Cp(i.providerUserInfo):[],l=tw(n.providerData,o),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new bl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function ew(n){const e=Qe(n);await Co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Cp(n){return n.map(e=>{var{providerId:t}=e,r=_c(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(n,e){const t=await Sp(n,{},async()=>{const r=pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Pp(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Rp.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rw(n,e){return jn(n,"POST","/v2/accounts:revokeToken",$n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Hh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await nw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Mr;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=_c(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return YT(this,e)}reload(){return ew(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(cn(this.auth));const e=await this.getIdToken();return await Zs(this,JT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,l,c,h,d;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,I=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(l=t.tenantId)!==null&&l!==void 0?l:void 0,D=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,K=(h=t.createdAt)!==null&&h!==void 0?h:void 0,U=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:W,emailVerified:z,isAnonymous:ce,providerData:_e,stsTokenManager:A}=t;te(W&&A,e,"internal-error");const _=Mr.fromJSON(this.name,A);te(typeof W=="string",e,"internal-error"),bn(g,e.name),bn(m,e.name),te(typeof z=="boolean",e,"internal-error"),te(typeof ce=="boolean",e,"internal-error"),bn(I,e.name),bn(x,e.name),bn(C,e.name),bn(D,e.name),bn(K,e.name),bn(U,e.name);const E=new an({uid:W,auth:e,email:m,emailVerified:z,displayName:g,isAnonymous:ce,photoURL:x,phoneNumber:I,tenantId:C,stsTokenManager:_,createdAt:K,lastLoginAt:U});return _e&&Array.isArray(_e)&&(E.providerData=_e.map(T=>Object.assign({},T))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,t,r=!1){const s=new Mr;s.updateFromServerResponse(t);const i=new an({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Co(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Cp(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Mr;l.updateFromIdToken(r);const c=new an({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=new Map;function ln(n){pn(n instanceof Function,"Expected a class definition");let e=Wh.get(n);return e?(pn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xp.type="NONE";const Kh=xp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n,e,t){return`firebase:${n}:${e}:${t}`}class Lr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=oo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Lr(ln(Kh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||ln(Kh);const o=oo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(o);if(d){const g=an._fromJSON(e,d);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Lr(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Lr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Np(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lp(e))return"Blackberry";if(Fp(e))return"Webos";if(Vp(e))return"Safari";if((e.includes("chrome/")||Op(e))&&!e.includes("edge/"))return"Chrome";if(Mp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dp(n=at()){return/firefox\//i.test(n)}function Vp(n=at()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Op(n=at()){return/crios\//i.test(n)}function Np(n=at()){return/iemobile/i.test(n)}function Mp(n=at()){return/android/i.test(n)}function Lp(n=at()){return/blackberry/i.test(n)}function Fp(n=at()){return/webos/i.test(n)}function Tc(n=at()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sw(n=at()){var e;return Tc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iw(){return vE()&&document.documentMode===10}function Up(n=at()){return Tc(n)||Mp(n)||Fp(n)||Lp(n)||/windows phone/i.test(n)||Np(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(n,e=[]){let t;switch(n){case"Browser":t=Gh(at());break;case"Worker":t=`${Gh(at())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(n,e={}){return jn(n,"GET","/v2/passwordPolicy",$n(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=6;class cw{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:lw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qh(this),this.idTokenSubscription=new Qh(this),this.beforeStateQueue=new ow(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ap,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ln(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await kp(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Co(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(cn(this));const t=e?Qe(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aw(this),t=new cw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new di("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await rw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ln(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[ln(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&BT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function mr(n){return Qe(n)}class Qh{constructor(e){this.auth=e,this.observer=null,this.addObserver=SE(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hw(n){ra=n}function $p(n){return ra.loadJS(n)}function fw(){return ra.recaptchaEnterpriseScript}function dw(){return ra.gapiScript}function pw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const gw="recaptcha-enterprise",mw="NO_RECAPTCHA";class _w{constructor(e){this.type=gw,this.auth=mr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{QT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new GT(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;zh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(mw)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!t&&zh(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=fw();c.length!==0&&(c+=l),$p(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Jh(n,e,t,r=!1){const s=new _w(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Rl(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Jh(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jh(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(n,e){const t=mc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(So(i,e??{}))return s;kt(s,"already-initialized")}return t.initialize({options:e})}function vw(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ln);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ew(n,e,t){const r=mr(n);te(r._canInitEmulator,r,"emulator-config-failed"),te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=jp(e),{host:o,port:l}=Tw(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ww()}function jp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Tw(n){const e=jp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Yh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Yh(o)}}}function Yh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ww(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,t){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}async function Iw(n,e){return jn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(n,e){return mi(n,"POST","/v1/accounts:signInWithPassword",$n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(n,e){return mi(n,"POST","/v1/accounts:signInWithEmailLink",$n(n,e))}async function Rw(n,e){return mi(n,"POST","/v1/accounts:signInWithEmailLink",$n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends wc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ei(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ei(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rl(e,t,"signInWithPassword",Aw);case"emailLink":return bw(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rl(e,r,"signUpPassword",Iw);case"emailLink":return Rw(e,{idToken:t,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n,e){return mi(n,"POST","/v1/accounts:signInWithIdp",$n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="http://localhost";class cr extends wc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=_c(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new cr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Fr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}buildRequest(){const e={requestUri:Sw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kw(n){const e=Ss(Ps(n)).link,t=e?Ss(Ps(e)).deep_link_id:null,r=Ss(Ps(n)).deep_link_id;return(r?Ss(Ps(r)).link:null)||r||t||e||n}class Ic{constructor(e){var t,r,s,i,o,l;const c=Ss(Ps(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,g=Pw((s=c.mode)!==null&&s!==void 0?s:null);te(h&&d&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=kw(e);try{return new Ic(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.providerId=Zr.PROVIDER_ID}static credential(e,t){return ei._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ic.parseLink(t);return te(r,"argument-error"),ei._fromEmailAndCode(e,r.code,r.tenantId)}}Zr.PROVIDER_ID="password";Zr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends qp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends _i{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends _i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Pn.credential(t,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends _i{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends _i{constructor(){super("twitter.com")}static credential(e,t){return cr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Cn.credential(t,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(n,e){return mi(n,"POST","/v1/accounts:signUp",$n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await an._fromIdTokenResponse(e,r,s),o=Xh(r);return new ur({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Xh(r);return new ur({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Xh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends yn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new xo(e,t,r,s)}}function zp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(n,i,e,r):i})}async function xw(n,e,t=!1){const r=await Zs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ur._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(n,e,t=!1){const{auth:r}=n;if(Ut(r.app))return Promise.reject(cn(r));const s="reauthenticate";try{const i=await Zs(n,zp(r,s,e,n),t);te(i.idToken,r,"internal-error");const o=Ec(i.idToken);te(o,r,"internal-error");const{sub:l}=o;return te(n.uid===l,r,"user-mismatch"),ur._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(n,e,t=!1){if(Ut(n.app))return Promise.reject(cn(n));const r="signIn",s=await zp(n,r,e),i=await ur._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Vw(n,e){return Hp(mr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wp(n){const e=mr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ow(n,e,t){if(Ut(n.app))return Promise.reject(cn(n));const r=mr(n),o=await Rl(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Cw).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Wp(n),c}),l=await ur._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Nw(n,e,t){return Ut(n.app)?Promise.reject(cn(n)):Vw(Qe(n),Zr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wp(n),r})}function Mw(n,e,t,r){return Qe(n).onIdTokenChanged(e,t,r)}function Lw(n,e,t){return Qe(n).beforeAuthStateChanged(e,t)}function Fw(n,e,t,r){return Qe(n).onAuthStateChanged(e,t,r)}function Uw(n){return Qe(n).signOut()}const Do="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Do,"1"),this.storage.removeItem(Do),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=1e3,$w=10;class Gp extends Kp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Up(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);iw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,$w):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gp.type="LOCAL";const jw=Gp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp extends Kp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qp.type="SESSION";const Jp=Qp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(t.origin,i)),c=await qw(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Ac("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function Hw(n){jt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function Ww(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Gw(){return Yp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="firebaseLocalStorageDb",Qw=1,Vo="firebaseLocalStorage",Zp="fbase_key";class yi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ia(n,e){return n.transaction([Vo],e?"readwrite":"readonly").objectStore(Vo)}function Jw(){const n=indexedDB.deleteDatabase(Xp);return new yi(n).toPromise()}function Sl(){const n=indexedDB.open(Xp,Qw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Vo,{keyPath:Zp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Vo)?e(r):(r.close(),await Jw(),e(await Sl()))})})}async function Zh(n,e,t){const r=ia(n,!0).put({[Zp]:e,value:t});return new yi(r).toPromise()}async function Yw(n,e){const t=ia(n,!1).get(e),r=await new yi(t).toPromise();return r===void 0?null:r.value}function ef(n,e){const t=ia(n,!0).delete(e);return new yi(t).toPromise()}const Xw=800,Zw=3;class eg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Zw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sa._getInstance(Gw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ww(),!this.activeServiceWorker)return;this.sender=new zw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Kw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sl();return await Zh(e,Do,"1"),await ef(e,Do),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Yw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ef(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ia(s,!1).getAll();return new yi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eg.type="LOCAL";const eI=eg;new gi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(n,e){return e?ln(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc extends wc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nI(n){return Hp(n.auth,new bc(n),n.bypassAuthState)}function rI(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),Dw(t,new bc(n),n.bypassAuthState)}async function sI(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),xw(t,new bc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nI;case"linkViaPopup":case"linkViaRedirect":return sI;case"reauthViaPopup":case"reauthViaRedirect":return rI;default:kt(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=new gi(2e3,1e4);class Cr extends tg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Cr.currentPopupAction&&Cr.currentPopupAction.cancel(),Cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=Ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iI.get())};e()}}Cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI="pendingRedirect",ao=new Map;class aI extends tg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const r=await lI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lI(n,e){const t=hI(e),r=uI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function cI(n,e){ao.set(n._key(),e)}function uI(n){return ln(n._redirectPersistence)}function hI(n){return oo(oI,n.config.apiKey,n.name)}async function fI(n,e,t=!1){if(Ut(n.app))return Promise.reject(cn(n));const r=mr(n),s=tI(r,e),o=await new aI(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=10*60*1e3;class pI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ng(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError($t(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dI&&this.cachedEventUids.clear(),this.cachedEventUids.has(tf(e))}saveEventToCache(e){this.cachedEventUids.add(tf(e)),this.lastProcessedEventTime=Date.now()}}function tf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ng({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ng(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mI(n,e={}){return jn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yI=/^https?/;async function vI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mI(n);for(const t of e)try{if(EI(t))return}catch{}kt(n,"unauthorized-domain")}function EI(n){const e=Al(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!yI.test(t))return!1;if(_I.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=new gi(3e4,6e4);function nf(){const n=jt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function wI(n){return new Promise((e,t)=>{var r,s,i;function o(){nf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nf(),t($t(n,"network-request-failed"))},timeout:TI.get()})}if(!((s=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=jt().gapi)===null||i===void 0)&&i.load)o();else{const l=pw("iframefcb");return jt()[l]=()=>{gapi.load?o():t($t(n,"network-request-failed"))},$p(`${dw()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw lo=null,e})}let lo=null;function II(n){return lo=lo||wI(n),lo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=new gi(5e3,15e3),bI="__/auth/iframe",RI="emulator/auth/iframe",SI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kI(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vc(e,RI):`https://${n.config.authDomain}/${bI}`,r={apiKey:e.apiKey,appName:n.name,v:Xr},s=PI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${pi(r).slice(1)}`}async function CI(n){const e=await II(n),t=jt().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:kI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=$t(n,"network-request-failed"),l=jt().setTimeout(()=>{i(o)},AI.get());function c(){jt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DI=500,VI=600,OI="_blank",NI="http://localhost";class rf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MI(n,e,t,r=DI,s=VI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},xI),{width:r.toString(),height:s.toString(),top:i,left:o}),h=at().toLowerCase();t&&(l=Op(h)?OI:t),Dp(h)&&(e=e||NI,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[I,x])=>`${m}${I}=${x},`,"");if(sw(h)&&l!=="_self")return LI(e||"",l),new rf(null);const g=window.open(e||"",l,d);te(g,n,"popup-blocked");try{g.focus()}catch{}return new rf(g)}function LI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="__/auth/handler",UI="emulator/auth/handler",BI=encodeURIComponent("fac");async function sf(n,e,t,r,s,i){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Xr,eventId:s};if(e instanceof qp){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",RE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))o[d]=g}if(e instanceof _i){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${BI}=${encodeURIComponent(c)}`:"";return`${$I(n)}?${pi(l).slice(1)}${h}`}function $I({config:n}){return n.emulator?vc(n,UI):`https://${n.authDomain}/${FI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="webStorageSupport";class jI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jp,this._completeRedirectFn=fI,this._overrideRedirectResult=cI}async _openPopup(e,t,r,s){var i;pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await sf(e,t,r,Al(),s);return MI(e,o,Ac())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await sf(e,t,r,Al(),s);return Hw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await CI(e),r=new pI(e);return t.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(el,{type:el},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[el];o!==void 0&&t(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Up()||Vp()||Tc()}}const qI=jI;var of="@firebase/auth",af="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WI(n){qr(new lr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bp(n)},h=new uw(r,s,i,c);return vw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),qr(new lr("auth-internal",e=>{const t=mr(e.getProvider("auth").getImmediate());return(r=>new zI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(of,af,HI(n)),On(of,af,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=5*60,GI=mp("authIdTokenMaxAge")||KI;let lf=null;const QI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>GI)return;const s=t==null?void 0:t.token;lf!==s&&(lf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function JI(n=Ep()){const e=mc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=yw(n,{popupRedirectResolver:qI,persistence:[eI,jw,Jp]}),r=mp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=QI(i.toString());Lw(t,o,()=>o(t.currentUser)),Mw(t,l=>o(l))}}const s=pp("auth");return s&&Ew(t,`http://${s}`),t}function YI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}hw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=$t("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",YI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WI("Browser");var cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,rg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function E(){}E.prototype=_.prototype,A.D=_.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(T,b,S){for(var v=Array(arguments.length-2),pt=2;pt<arguments.length;pt++)v[pt-2]=arguments[pt];return _.prototype[b].apply(T,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,_,E){E||(E=0);var T=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)T[b]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(b=0;16>b;++b)T[b]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=A.g[0],E=A.g[1],b=A.g[2];var S=A.g[3],v=_+(S^E&(b^S))+T[0]+3614090360&4294967295;_=E+(v<<7&4294967295|v>>>25),v=S+(b^_&(E^b))+T[1]+3905402710&4294967295,S=_+(v<<12&4294967295|v>>>20),v=b+(E^S&(_^E))+T[2]+606105819&4294967295,b=S+(v<<17&4294967295|v>>>15),v=E+(_^b&(S^_))+T[3]+3250441966&4294967295,E=b+(v<<22&4294967295|v>>>10),v=_+(S^E&(b^S))+T[4]+4118548399&4294967295,_=E+(v<<7&4294967295|v>>>25),v=S+(b^_&(E^b))+T[5]+1200080426&4294967295,S=_+(v<<12&4294967295|v>>>20),v=b+(E^S&(_^E))+T[6]+2821735955&4294967295,b=S+(v<<17&4294967295|v>>>15),v=E+(_^b&(S^_))+T[7]+4249261313&4294967295,E=b+(v<<22&4294967295|v>>>10),v=_+(S^E&(b^S))+T[8]+1770035416&4294967295,_=E+(v<<7&4294967295|v>>>25),v=S+(b^_&(E^b))+T[9]+2336552879&4294967295,S=_+(v<<12&4294967295|v>>>20),v=b+(E^S&(_^E))+T[10]+4294925233&4294967295,b=S+(v<<17&4294967295|v>>>15),v=E+(_^b&(S^_))+T[11]+2304563134&4294967295,E=b+(v<<22&4294967295|v>>>10),v=_+(S^E&(b^S))+T[12]+1804603682&4294967295,_=E+(v<<7&4294967295|v>>>25),v=S+(b^_&(E^b))+T[13]+4254626195&4294967295,S=_+(v<<12&4294967295|v>>>20),v=b+(E^S&(_^E))+T[14]+2792965006&4294967295,b=S+(v<<17&4294967295|v>>>15),v=E+(_^b&(S^_))+T[15]+1236535329&4294967295,E=b+(v<<22&4294967295|v>>>10),v=_+(b^S&(E^b))+T[1]+4129170786&4294967295,_=E+(v<<5&4294967295|v>>>27),v=S+(E^b&(_^E))+T[6]+3225465664&4294967295,S=_+(v<<9&4294967295|v>>>23),v=b+(_^E&(S^_))+T[11]+643717713&4294967295,b=S+(v<<14&4294967295|v>>>18),v=E+(S^_&(b^S))+T[0]+3921069994&4294967295,E=b+(v<<20&4294967295|v>>>12),v=_+(b^S&(E^b))+T[5]+3593408605&4294967295,_=E+(v<<5&4294967295|v>>>27),v=S+(E^b&(_^E))+T[10]+38016083&4294967295,S=_+(v<<9&4294967295|v>>>23),v=b+(_^E&(S^_))+T[15]+3634488961&4294967295,b=S+(v<<14&4294967295|v>>>18),v=E+(S^_&(b^S))+T[4]+3889429448&4294967295,E=b+(v<<20&4294967295|v>>>12),v=_+(b^S&(E^b))+T[9]+568446438&4294967295,_=E+(v<<5&4294967295|v>>>27),v=S+(E^b&(_^E))+T[14]+3275163606&4294967295,S=_+(v<<9&4294967295|v>>>23),v=b+(_^E&(S^_))+T[3]+4107603335&4294967295,b=S+(v<<14&4294967295|v>>>18),v=E+(S^_&(b^S))+T[8]+1163531501&4294967295,E=b+(v<<20&4294967295|v>>>12),v=_+(b^S&(E^b))+T[13]+2850285829&4294967295,_=E+(v<<5&4294967295|v>>>27),v=S+(E^b&(_^E))+T[2]+4243563512&4294967295,S=_+(v<<9&4294967295|v>>>23),v=b+(_^E&(S^_))+T[7]+1735328473&4294967295,b=S+(v<<14&4294967295|v>>>18),v=E+(S^_&(b^S))+T[12]+2368359562&4294967295,E=b+(v<<20&4294967295|v>>>12),v=_+(E^b^S)+T[5]+4294588738&4294967295,_=E+(v<<4&4294967295|v>>>28),v=S+(_^E^b)+T[8]+2272392833&4294967295,S=_+(v<<11&4294967295|v>>>21),v=b+(S^_^E)+T[11]+1839030562&4294967295,b=S+(v<<16&4294967295|v>>>16),v=E+(b^S^_)+T[14]+4259657740&4294967295,E=b+(v<<23&4294967295|v>>>9),v=_+(E^b^S)+T[1]+2763975236&4294967295,_=E+(v<<4&4294967295|v>>>28),v=S+(_^E^b)+T[4]+1272893353&4294967295,S=_+(v<<11&4294967295|v>>>21),v=b+(S^_^E)+T[7]+4139469664&4294967295,b=S+(v<<16&4294967295|v>>>16),v=E+(b^S^_)+T[10]+3200236656&4294967295,E=b+(v<<23&4294967295|v>>>9),v=_+(E^b^S)+T[13]+681279174&4294967295,_=E+(v<<4&4294967295|v>>>28),v=S+(_^E^b)+T[0]+3936430074&4294967295,S=_+(v<<11&4294967295|v>>>21),v=b+(S^_^E)+T[3]+3572445317&4294967295,b=S+(v<<16&4294967295|v>>>16),v=E+(b^S^_)+T[6]+76029189&4294967295,E=b+(v<<23&4294967295|v>>>9),v=_+(E^b^S)+T[9]+3654602809&4294967295,_=E+(v<<4&4294967295|v>>>28),v=S+(_^E^b)+T[12]+3873151461&4294967295,S=_+(v<<11&4294967295|v>>>21),v=b+(S^_^E)+T[15]+530742520&4294967295,b=S+(v<<16&4294967295|v>>>16),v=E+(b^S^_)+T[2]+3299628645&4294967295,E=b+(v<<23&4294967295|v>>>9),v=_+(b^(E|~S))+T[0]+4096336452&4294967295,_=E+(v<<6&4294967295|v>>>26),v=S+(E^(_|~b))+T[7]+1126891415&4294967295,S=_+(v<<10&4294967295|v>>>22),v=b+(_^(S|~E))+T[14]+2878612391&4294967295,b=S+(v<<15&4294967295|v>>>17),v=E+(S^(b|~_))+T[5]+4237533241&4294967295,E=b+(v<<21&4294967295|v>>>11),v=_+(b^(E|~S))+T[12]+1700485571&4294967295,_=E+(v<<6&4294967295|v>>>26),v=S+(E^(_|~b))+T[3]+2399980690&4294967295,S=_+(v<<10&4294967295|v>>>22),v=b+(_^(S|~E))+T[10]+4293915773&4294967295,b=S+(v<<15&4294967295|v>>>17),v=E+(S^(b|~_))+T[1]+2240044497&4294967295,E=b+(v<<21&4294967295|v>>>11),v=_+(b^(E|~S))+T[8]+1873313359&4294967295,_=E+(v<<6&4294967295|v>>>26),v=S+(E^(_|~b))+T[15]+4264355552&4294967295,S=_+(v<<10&4294967295|v>>>22),v=b+(_^(S|~E))+T[6]+2734768916&4294967295,b=S+(v<<15&4294967295|v>>>17),v=E+(S^(b|~_))+T[13]+1309151649&4294967295,E=b+(v<<21&4294967295|v>>>11),v=_+(b^(E|~S))+T[4]+4149444226&4294967295,_=E+(v<<6&4294967295|v>>>26),v=S+(E^(_|~b))+T[11]+3174756917&4294967295,S=_+(v<<10&4294967295|v>>>22),v=b+(_^(S|~E))+T[2]+718787259&4294967295,b=S+(v<<15&4294967295|v>>>17),v=E+(S^(b|~_))+T[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+S&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var E=_-this.blockSize,T=this.B,b=this.h,S=0;S<_;){if(b==0)for(;S<=E;)s(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<_;)if(T[b++]=A.charCodeAt(S++),b==this.blockSize){s(this,T),b=0;break}}else for(;S<_;)if(T[b++]=A[S++],b==this.blockSize){s(this,T),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var E=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=E&255,E/=256;for(this.u(A),A=Array(16),_=E=0;4>_;++_)for(var T=0;32>T;T+=8)A[E++]=this.g[_]>>>T&255;return A};function i(A,_){var E=l;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=_(A)}function o(A,_){this.h=_;for(var E=[],T=!0,b=A.length-1;0<=b;b--){var S=A[b]|0;T&&S==_||(E[b]=S,T=!1)}this.g=E}var l={};function c(A){return-128<=A&&128>A?i(A,function(_){return new o([_|0],0>_?-1:0)}):new o([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return g;if(0>A)return D(h(-A));for(var _=[],E=1,T=0;A>=E;T++)_[T]=A/E|0,E*=4294967296;return new o(_,0)}function d(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return D(d(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),T=g,b=0;b<A.length;b+=8){var S=Math.min(8,A.length-b),v=parseInt(A.substring(b,b+S),_);8>S?(S=h(Math.pow(_,S)),T=T.j(S).add(h(v))):(T=T.j(E),T=T.add(h(v)))}return T}var g=c(0),m=c(1),I=c(16777216);n=o.prototype,n.m=function(){if(C(this))return-D(this).m();for(var A=0,_=1,E=0;E<this.g.length;E++){var T=this.i(E);A+=(0<=T?T:4294967296+T)*_,_*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(x(this))return"0";if(C(this))return"-"+D(this).toString(A);for(var _=h(Math.pow(A,6)),E=this,T="";;){var b=z(E,_).g;E=K(E,b.j(_));var S=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=b,x(E))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function x(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function C(A){return A.h==-1}n.l=function(A){return A=K(this,A),C(A)?-1:x(A)?0:1};function D(A){for(var _=A.g.length,E=[],T=0;T<_;T++)E[T]=~A.g[T];return new o(E,~A.h).add(m)}n.abs=function(){return C(this)?D(this):this},n.add=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],T=0,b=0;b<=_;b++){var S=T+(this.i(b)&65535)+(A.i(b)&65535),v=(S>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);T=v>>>16,S&=65535,v&=65535,E[b]=v<<16|S}return new o(E,E[E.length-1]&-2147483648?-1:0)};function K(A,_){return A.add(D(_))}n.j=function(A){if(x(this)||x(A))return g;if(C(this))return C(A)?D(this).j(D(A)):D(D(this).j(A));if(C(A))return D(this.j(D(A)));if(0>this.l(I)&&0>A.l(I))return h(this.m()*A.m());for(var _=this.g.length+A.g.length,E=[],T=0;T<2*_;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<A.g.length;b++){var S=this.i(T)>>>16,v=this.i(T)&65535,pt=A.i(b)>>>16,vn=A.i(b)&65535;E[2*T+2*b]+=v*vn,U(E,2*T+2*b),E[2*T+2*b+1]+=S*vn,U(E,2*T+2*b+1),E[2*T+2*b+1]+=v*pt,U(E,2*T+2*b+1),E[2*T+2*b+2]+=S*pt,U(E,2*T+2*b+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new o(E,0)};function U(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function W(A,_){this.g=A,this.h=_}function z(A,_){if(x(_))throw Error("division by zero");if(x(A))return new W(g,g);if(C(A))return _=z(D(A),_),new W(D(_.g),D(_.h));if(C(_))return _=z(A,D(_)),new W(D(_.g),_.h);if(30<A.g.length){if(C(A)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var E=m,T=_;0>=T.l(A);)E=ce(E),T=ce(T);var b=_e(E,1),S=_e(T,1);for(T=_e(T,2),E=_e(E,2);!x(T);){var v=S.add(T);0>=v.l(A)&&(b=b.add(E),S=v),T=_e(T,1),E=_e(E,1)}return _=K(A,b.j(_)),new W(b,_)}for(b=g;0<=A.l(_);){for(E=Math.max(1,Math.floor(A.m()/_.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(E),v=S.j(_);C(v)||0<v.l(A);)E-=T,S=h(E),v=S.j(_);x(S)&&(S=m),b=b.add(S),A=K(A,v)}return new W(b,A)}n.A=function(A){return z(this,A).h},n.and=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)&A.i(T);return new o(E,this.h&A.h)},n.or=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)|A.i(T);return new o(E,this.h|A.h)},n.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)^A.i(T);return new o(E,this.h^A.h)};function ce(A){for(var _=A.g.length+1,E=[],T=0;T<_;T++)E[T]=A.i(T)<<1|A.i(T-1)>>>31;return new o(E,A.h)}function _e(A,_){var E=_>>5;_%=32;for(var T=A.g.length-E,b=[],S=0;S<T;S++)b[S]=0<_?A.i(S+E)>>>_|A.i(S+E+1)<<32-_:A.i(S+E);return new o(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,or=o}).apply(typeof cf<"u"?cf:typeof self<"u"?self:typeof window<"u"?window:{});var Qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sg,ks,ig,co,Pl,og,ag,lg;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qi=="object"&&Qi];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var R=a[p];if(!(R in f))break e;f=f[R]}a=a[a.length-1],p=f[a],u=u(p),u!=p&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,p=!1,R={next:function(){if(!p&&f<a.length){var P=f++;return{value:u(P,a[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function g(a,u,f){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),a.apply(u,R)}}return function(){return a.apply(u,arguments)}}function m(a,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,m.apply(null,arguments)}function I(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function x(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(p,R,P){for(var $=Array(arguments.length-2),be=2;be<arguments.length;be++)$[be-2]=arguments[be];return u.prototype[R].apply(p,$)}}function C(a){const u=a.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=a[p];return f}return[]}function D(a,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(c(p)){const R=a.length||0,P=p.length||0;a.length=R+P;for(let $=0;$<P;$++)a[R+$]=p[$]}else a.push(p)}}class K{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(a){return/^[\s\xa0]*$/.test(a)}function W(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function z(a){return z[" "](a),a}z[" "]=function(){};var ce=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function _e(a,u,f){for(const p in a)u.call(f,a[p],p,a)}function A(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function _(a){const u={};for(const f in a)u[f]=a[f];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let f,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(f in p)a[f]=p[f];for(let P=0;P<E.length;P++)f=E[P],Object.prototype.hasOwnProperty.call(p,f)&&(a[f]=p[f])}}function b(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function S(a){l.setTimeout(()=>{throw a},0)}function v(){var a=At;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class pt{constructor(){this.h=this.g=null}add(u,f){const p=vn.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var vn=new K(()=>new qe,a=>a.reset());class qe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,de=!1,At=new pt,zn=()=>{const a=l.Promise.resolve(void 0);Ee=()=>{a.then(Jt)}};var Jt=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(f){S(f)}var u=vn;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}de=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var wa=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function Hn(a,u){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ce){e:{try{z(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Wn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Hn.aa.h.call(this)}}x(Hn,Ue);var Wn={2:"touch",3:"pen",4:"mouse"};Hn.prototype.h=function(){Hn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Yt="closure_listenable_"+(1e6*Math.random()|0),rs=0;function bi(a,u,f,p,R){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=R,this.key=++rs,this.da=this.fa=!1}function Ct(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ss(a){this.src=a,this.g={},this.h=0}ss.prototype.add=function(a,u,f,p,R){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var $=w(a,u,p,R);return-1<$?(u=a[$],f||(u.fa=!1)):(u=new bi(u,this.src,P,!!p,R),u.fa=f,a.push(u)),u};function y(a,u){var f=u.type;if(f in a.g){var p=a.g[f],R=Array.prototype.indexOf.call(p,u,void 0),P;(P=0<=R)&&Array.prototype.splice.call(p,R,1),P&&(Ct(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function w(a,u,f,p){for(var R=0;R<a.length;++R){var P=a[R];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==p)return R}return-1}var k="closure_lm_"+(1e6*Math.random()|0),M={};function V(a,u,f,p,R){if(Array.isArray(u)){for(var P=0;P<u.length;P++)V(a,u[P],f,p,R);return null}return f=Z(f),a&&a[Yt]?a.K(u,f,h(p)?!!p.capture:!1,R):N(a,u,f,!1,p,R)}function N(a,u,f,p,R,P){if(!u)throw Error("Invalid event type");var $=h(R)?!!R.capture:!!R,be=H(a);if(be||(a[k]=be=new ss(a)),f=be.add(u,f,p,$,P),f.proxy)return f;if(p=q(),f.proxy=p,p.src=a,p.listener=f,a.addEventListener)wa||(R=$),R===void 0&&(R=!1),a.addEventListener(u.toString(),p,R);else if(a.attachEvent)a.attachEvent(O(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function a(f){return u.call(a.src,a.listener,f)}const u=Y;return a}function j(a,u,f,p,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)j(a,u[P],f,p,R);else p=h(p)?!!p.capture:!!p,f=Z(f),a&&a[Yt]?(a=a.i,u=String(u).toString(),u in a.g&&(P=a.g[u],f=w(P,f,p,R),-1<f&&(Ct(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete a.g[u],a.h--)))):a&&(a=H(a))&&(u=a.g[u.toString()],a=-1,u&&(a=w(u,f,p,R)),(f=-1<a?u[a]:null)&&B(f))}function B(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Yt])y(u.i,a);else{var f=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(f,p,a.capture):u.detachEvent?u.detachEvent(O(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=H(u))?(y(f,a),f.h==0&&(f.src=null,u[k]=null)):Ct(a)}}}function O(a){return a in M?M[a]:M[a]="on"+a}function Y(a,u){if(a.da)a=!0;else{u=new Hn(u,this);var f=a.listener,p=a.ha||a.src;a.fa&&B(a),a=f.call(p,u)}return a}function H(a){return a=a[k],a instanceof ss?a:null}var Q="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(a){return typeof a=="function"?a:(a[Q]||(a[Q]=function(u){return a.handleEvent(u)}),a[Q])}function ee(){Fe.call(this),this.i=new ss(this),this.M=this,this.F=null}x(ee,Fe),ee.prototype[Yt]=!0,ee.prototype.removeEventListener=function(a,u,f,p){j(this,a,u,f,p)};function oe(a,u){var f,p=a.F;if(p)for(f=[];p;p=p.F)f.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new Ue(u,a);else if(u instanceof Ue)u.target=u.target||a;else{var R=u;u=new Ue(p,a),T(u,R)}if(R=!0,f)for(var P=f.length-1;0<=P;P--){var $=u.g=f[P];R=me($,p,!0,u)&&R}if($=u.g=a,R=me($,p,!0,u)&&R,R=me($,p,!1,u)&&R,f)for(P=0;P<f.length;P++)$=u.g=f[P],R=me($,p,!1,u)&&R}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],p=0;p<f.length;p++)Ct(f[p]);delete a.g[u],a.h--}}this.F=null},ee.prototype.K=function(a,u,f,p){return this.i.add(String(a),u,!1,f,p)},ee.prototype.L=function(a,u,f,p){return this.i.add(String(a),u,!0,f,p)};function me(a,u,f,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,P=0;P<u.length;++P){var $=u[P];if($&&!$.da&&$.capture==f){var be=$.listener,He=$.ha||$.src;$.fa&&y(a.i,$),R=be.call(He,p)!==!1&&R}}return R&&!p.defaultPrevented}function xe(a,u,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function Me(a){a.g=xe(()=>{a.g=null,a.i&&(a.i=!1,Me(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class vt extends Fe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Me(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(a){Fe.call(this),this.h=a,this.g={}}x(Ye,Fe);var En=[];function is(a){_e(a.g,function(u,f){this.g.hasOwnProperty(f)&&B(u)},a),a.g={}}Ye.prototype.N=function(){Ye.aa.N.call(this),is(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ze=l.JSON.stringify,Et=l.JSON.parse,Ri=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function vr(){}vr.prototype.h=null;function tu(a){return a.h||(a.h=a.i())}function nu(){}var os={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ia(){Ue.call(this,"d")}x(Ia,Ue);function Aa(){Ue.call(this,"c")}x(Aa,Ue);var Kn={},ru=null;function Si(){return ru=ru||new ee}Kn.La="serverreachability";function su(a){Ue.call(this,Kn.La,a)}x(su,Ue);function as(a){const u=Si();oe(u,new su(u))}Kn.STAT_EVENT="statevent";function iu(a,u){Ue.call(this,Kn.STAT_EVENT,a),this.stat=u}x(iu,Ue);function lt(a){const u=Si();oe(u,new iu(u,a))}Kn.Ma="timingevent";function ou(a,u){Ue.call(this,Kn.Ma,a),this.size=u}x(ou,Ue);function ls(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function cs(){this.g=!0}cs.prototype.xa=function(){this.g=!1};function wm(a,u,f,p,R,P){a.info(function(){if(a.g)if(P)for(var $="",be=P.split("&"),He=0;He<be.length;He++){var pe=be[He].split("=");if(1<pe.length){var Xe=pe[0];pe=pe[1];var Ze=Xe.split("_");$=2<=Ze.length&&Ze[1]=="type"?$+(Xe+"="+pe+"&"):$+(Xe+"=redacted&")}}else $=null;else $=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+f+`
`+$})}function Im(a,u,f,p,R,P,$){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+f+`
`+P+" "+$})}function Er(a,u,f,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+bm(a,f)+(p?" "+p:"")})}function Am(a,u){a.info(function(){return"TIMEOUT: "+u})}cs.prototype.info=function(){};function bm(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var p=f[a];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var $=1;$<R.length;$++)R[$]=""}}}}return ze(f)}catch{return u}}var Pi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},au={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ba;function ki(){}x(ki,vr),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},ba=new ki;function Tn(a,u,f,p){this.j=a,this.i=u,this.l=f,this.R=p||1,this.U=new Ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new lu}function lu(){this.i=null,this.g="",this.h=!1}var cu={},Ra={};function Sa(a,u,f){a.L=1,a.v=Vi(Xt(u)),a.m=f,a.P=!0,uu(a,null)}function uu(a,u){a.F=Date.now(),Ci(a),a.A=Xt(a.v);var f=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Au(f.i,"t",p),a.C=0,f=a.j.J,a.h=new lu,a.g=ju(a.j,f?u:null,!a.m),0<a.O&&(a.M=new vt(m(a.Y,a,a.g),a.O)),u=a.U,f=a.g,p=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(En[0]=R.toString()),R=En);for(var P=0;P<R.length;P++){var $=V(f,R[P],p||u.handleEvent,!1,u.h||u);if(!$)break;u.g[$.key]=$}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),as(),wm(a.i,a.u,a.A,a.l,a.R,a.m)}Tn.prototype.ca=function(a){a=a.target;const u=this.M;u&&Zt(a)==3?u.j():this.Y(a)},Tn.prototype.Y=function(a){try{if(a==this.g)e:{const Ze=Zt(this.g);var u=this.g.Ba();const Ir=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||xu(this.g)))){this.J||Ze!=4||u==7||(u==8||0>=Ir?as(3):as(2)),Pa(this);var f=this.g.Z();this.X=f;t:if(hu(this)){var p=xu(this.g);a="";var R=p.length,P=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gn(this),us(this);var $="";break t}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,a+=this.h.i.decode(p[u],{stream:!(P&&u==R-1)});p.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,Im(this.i,this.u,this.A,this.l,this.R,Ze,f),this.o){if(this.T&&!this.K){t:{if(this.g){var be,He=this.g;if((be=He.g?He.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(be)){var pe=be;break t}}pe=null}if(f=pe)Er(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ka(this,f);else{this.o=!1,this.s=3,lt(12),Gn(this),us(this);break e}}if(this.P){f=!0;let bt;for(;!this.J&&this.C<$.length;)if(bt=Rm(this,$),bt==Ra){Ze==4&&(this.s=4,lt(14),f=!1),Er(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==cu){this.s=4,lt(15),Er(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else Er(this.i,this.l,bt,null),ka(this,bt);if(hu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||$.length!=0||this.h.h||(this.s=1,lt(16),f=!1),this.o=this.o&&f,!f)Er(this.i,this.l,$,"[Invalid Chunked Response]"),Gn(this),us(this);else if(0<$.length&&!this.W){this.W=!0;var Xe=this.j;Xe.g==this&&Xe.ba&&!Xe.M&&(Xe.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Na(Xe),Xe.M=!0,lt(11))}}else Er(this.i,this.l,$,null),ka(this,$);Ze==4&&Gn(this),this.o&&!this.J&&(Ze==4?Fu(this.j,this):(this.o=!1,Ci(this)))}else qm(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Gn(this),us(this)}}}catch{}finally{}};function hu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Rm(a,u){var f=a.C,p=u.indexOf(`
`,f);return p==-1?Ra:(f=Number(u.substring(f,p)),isNaN(f)?cu:(p+=1,p+f>u.length?Ra:(u=u.slice(p,p+f),a.C=p+f,u)))}Tn.prototype.cancel=function(){this.J=!0,Gn(this)};function Ci(a){a.S=Date.now()+a.I,fu(a,a.I)}function fu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ls(m(a.ba,a),u)}function Pa(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Tn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Am(this.i,this.A),this.L!=2&&(as(),lt(17)),Gn(this),this.s=2,us(this)):fu(this,this.S-a)};function us(a){a.j.G==0||a.J||Fu(a.j,a)}function Gn(a){Pa(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,is(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function ka(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Ca(f.h,a))){if(!a.K&&Ca(f.h,a)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ui(f),Li(f);else break e;Oa(f),lt(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=ls(m(f.Za,f),6e3));if(1>=gu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Jn(f,11)}else if((a.K||f.g==a)&&Ui(f),!U(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let pe=R[u];if(f.T=pe[0],pe=pe[1],f.G==2)if(pe[0]=="c"){f.K=pe[1],f.ia=pe[2];const Xe=pe[3];Xe!=null&&(f.la=Xe,f.j.info("VER="+f.la));const Ze=pe[4];Ze!=null&&(f.Aa=Ze,f.j.info("SVER="+f.Aa));const Ir=pe[5];Ir!=null&&typeof Ir=="number"&&0<Ir&&(p=1.5*Ir,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const bt=a.g;if(bt){const $i=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var P=p.h;P.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(xa(P,P.h),P.h=null))}if(p.D){const Ma=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ma&&(p.ya=Ma,Pe(p.I,p.D,Ma))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var $=a;if(p.qa=$u(p,p.J?p.ia:null,p.W),$.K){mu(p.h,$);var be=$,He=p.L;He&&(be.I=He),be.B&&(Pa(be),Ci(be)),p.g=$}else Mu(p);0<f.i.length&&Fi(f)}else pe[0]!="stop"&&pe[0]!="close"||Jn(f,7);else f.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Jn(f,7):Va(f):pe[0]!="noop"&&f.l&&f.l.ta(pe),f.v=0)}}as(4)}catch{}}var Sm=class{constructor(a,u){this.g=a,this.map=u}};function du(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function pu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function gu(a){return a.h?1:a.g?a.g.size:0}function Ca(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function xa(a,u){a.g?a.g.add(u):a.h=u}function mu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}du.prototype.cancel=function(){if(this.i=_u(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function _u(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return C(a.i)}function Pm(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,p=0;p<f;p++)u.push(a[p]);return u}u=[],f=0;for(p in a)u[f++]=a[p];return u}function km(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const p in a)u[f++]=p;return u}}}function yu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=km(a),p=Pm(a),R=p.length,P=0;P<R;P++)u.call(void 0,p[P],f&&f[P],a)}var vu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cm(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var p=a[f].indexOf("="),R=null;if(0<=p){var P=a[f].substring(0,p);R=a[f].substring(p+1)}else P=a[f];u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Qn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Qn){this.h=a.h,xi(this,a.j),this.o=a.o,this.g=a.g,Di(this,a.s),this.l=a.l;var u=a.i,f=new ds;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Eu(this,f),this.m=a.m}else a&&(u=String(a).match(vu))?(this.h=!1,xi(this,u[1]||"",!0),this.o=hs(u[2]||""),this.g=hs(u[3]||"",!0),Di(this,u[4]),this.l=hs(u[5]||"",!0),Eu(this,u[6]||"",!0),this.m=hs(u[7]||"")):(this.h=!1,this.i=new ds(null,this.h))}Qn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(fs(u,Tu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(fs(u,Tu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(fs(f,f.charAt(0)=="/"?Vm:Dm,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",fs(f,Nm)),a.join("")};function Xt(a){return new Qn(a)}function xi(a,u,f){a.j=f?hs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Di(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Eu(a,u,f){u instanceof ds?(a.i=u,Mm(a.i,a.h)):(f||(u=fs(u,Om)),a.i=new ds(u,a.h))}function Pe(a,u,f){a.i.set(u,f)}function Vi(a){return Pe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function hs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fs(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,xm),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function xm(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Tu=/[#\/\?@]/g,Dm=/[#\?:]/g,Vm=/[#\?]/g,Om=/[#\?@]/g,Nm=/#/g;function ds(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function wn(a){a.g||(a.g=new Map,a.h=0,a.i&&Cm(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=ds.prototype,n.add=function(a,u){wn(this),this.i=null,a=Tr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function wu(a,u){wn(a),u=Tr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Iu(a,u){return wn(a),u=Tr(a,u),a.g.has(u)}n.forEach=function(a,u){wn(this),this.g.forEach(function(f,p){f.forEach(function(R){a.call(u,R,p,this)},this)},this)},n.na=function(){wn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const R=a[p];for(let P=0;P<R.length;P++)f.push(u[p])}return f},n.V=function(a){wn(this);let u=[];if(typeof a=="string")Iu(this,a)&&(u=u.concat(this.g.get(Tr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},n.set=function(a,u){return wn(this),this.i=null,a=Tr(this,a),Iu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Au(a,u,f){wu(a,u),0<f.length&&(a.i=null,a.g.set(Tr(a,u),C(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const P=encodeURIComponent(String(p)),$=this.V(p);for(p=0;p<$.length;p++){var R=P;$[p]!==""&&(R+="="+encodeURIComponent(String($[p]))),a.push(R)}}return this.i=a.join("&")};function Tr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Mm(a,u){u&&!a.j&&(wn(a),a.i=null,a.g.forEach(function(f,p){var R=p.toLowerCase();p!=R&&(wu(this,p),Au(this,R,f))},a)),a.j=u}function Lm(a,u){const f=new cs;if(l.Image){const p=new Image;p.onload=I(In,f,"TestLoadImage: loaded",!0,u,p),p.onerror=I(In,f,"TestLoadImage: error",!1,u,p),p.onabort=I(In,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=I(In,f,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function Fm(a,u){const f=new cs,p=new AbortController,R=setTimeout(()=>{p.abort(),In(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?In(f,"TestPingServer: ok",!0,u):In(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),In(f,"TestPingServer: error",!1,u)})}function In(a,u,f,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(f)}catch{}}function Um(){this.g=new Ri}function Bm(a,u,f){const p=f||"";try{yu(a,function(R,P){let $=R;h(R)&&($=ze(R)),u.push(p+P+"="+encodeURIComponent($))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function Oi(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Oi,vr),Oi.prototype.g=function(){return new Ni(this.l,this.j)},Oi.prototype.i=function(a){return function(){return a}}({});function Ni(a,u){ee.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ni,ee),n=Ni.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,gs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function bu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?ps(this):gs(this),this.readyState==3&&bu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,ps(this))},n.Qa=function(a){this.g&&(this.response=a,ps(this))},n.ga=function(){this.g&&ps(this)};function ps(a){a.readyState=4,a.l=null,a.j=null,a.v=null,gs(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function gs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ru(a){let u="";return _e(a,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function Da(a,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Ru(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Pe(a,u,f))}function Ve(a){ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ve,ee);var $m=/^https?$/i,jm=["POST","PUT"];n=Ve.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ba.g(),this.v=this.o?tu(this.o):tu(ba),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(P){Su(this,P);return}if(a=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)f.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())f.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(jm,u,void 0))||p||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,$]of f)this.g.setRequestHeader(P,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cu(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){Su(this,P)}};function Su(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Pu(a),Mi(a)}function Pu(a){a.A||(a.A=!0,oe(a,"complete"),oe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,oe(this,"complete"),oe(this,"abort"),Mi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mi(this,!0)),Ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ku(this):this.bb())},n.bb=function(){ku(this)};function ku(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Zt(a)!=4||a.Z()!=2)){if(a.u&&Zt(a)==4)xe(a.Ea,0,a);else if(oe(a,"readystatechange"),Zt(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=$===0){var R=String(a.D).match(vu)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!$m.test(R?R.toLowerCase():"")}f=p}if(f)oe(a,"complete"),oe(a,"success");else{a.m=6;try{var P=2<Zt(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",Pu(a)}}finally{Mi(a)}}}}function Mi(a,u){if(a.g){Cu(a);const f=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||oe(a,"ready");try{f.onreadystatechange=p}catch{}}}function Cu(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Zt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Et(u)}};function xu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function qm(a){const u={};a=(a.g&&2<=Zt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(U(a[p]))continue;var f=b(a[p]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[R]||[];u[R]=P,P.push(f)}A(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Du(a){this.Aa=0,this.i=[],this.j=new cs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ms("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ms("baseRetryDelayMs",5e3,a),this.cb=ms("retryDelaySeedMs",1e4,a),this.Wa=ms("forwardChannelMaxRetries",2,a),this.wa=ms("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new du(a&&a.concurrentRequestLimit),this.Da=new Um,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Du.prototype,n.la=8,n.G=1,n.connect=function(a,u,f,p){lt(0),this.W=a,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=$u(this,null,this.W),Fi(this)};function Va(a){if(Vu(a),a.G==3){var u=a.U++,f=Xt(a.I);if(Pe(f,"SID",a.K),Pe(f,"RID",u),Pe(f,"TYPE","terminate"),_s(a,f),u=new Tn(a,a.j,u),u.L=2,u.v=Vi(Xt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=ju(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ci(u)}Bu(a)}function Li(a){a.g&&(Na(a),a.g.cancel(),a.g=null)}function Vu(a){Li(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ui(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Fi(a){if(!pu(a.h)&&!a.s){a.s=!0;var u=a.Ga;Ee||zn(),de||(Ee(),de=!0),At.add(u,a),a.B=0}}function zm(a,u){return gu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ls(m(a.Ga,a,u),Uu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Tn(this,this.j,a);let P=this.o;if(this.S&&(P?(P=_(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Nu(this,R,u),f=Xt(this.I),Pe(f,"RID",a),Pe(f,"CVER",22),this.D&&Pe(f,"X-HTTP-Session-Id",this.D),_s(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(Ru(P)))+"&"+u:this.m&&Da(f,this.m,P)),xa(this.h,R),this.Ua&&Pe(f,"TYPE","init"),this.P?(Pe(f,"$req",u),Pe(f,"SID","null"),R.T=!0,Sa(R,f,null)):Sa(R,f,u),this.G=2}}else this.G==3&&(a?Ou(this,a):this.i.length==0||pu(this.h)||Ou(this))};function Ou(a,u){var f;u?f=u.l:f=a.U++;const p=Xt(a.I);Pe(p,"SID",a.K),Pe(p,"RID",f),Pe(p,"AID",a.T),_s(a,p),a.m&&a.o&&Da(p,a.m,a.o),f=new Tn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Nu(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),xa(a.h,f),Sa(f,p,u)}function _s(a,u){a.H&&_e(a.H,function(f,p){Pe(u,p,f)}),a.l&&yu({},function(f,p){Pe(u,p,f)})}function Nu(a,u,f){f=Math.min(a.i.length,f);var p=a.l?m(a.l.Na,a.l,a):null;e:{var R=a.i;let P=-1;for(;;){const $=["count="+f];P==-1?0<f?(P=R[0].g,$.push("ofs="+P)):P=0:$.push("ofs="+P);let be=!0;for(let He=0;He<f;He++){let pe=R[He].g;const Xe=R[He].map;if(pe-=P,0>pe)P=Math.max(0,R[He].g-100),be=!1;else try{Bm(Xe,$,"req"+pe+"_")}catch{p&&p(Xe)}}if(be){p=$.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,p}function Mu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Ee||zn(),de||(Ee(),de=!0),At.add(u,a),a.v=0}}function Oa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ls(m(a.Fa,a),Uu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Lu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ls(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Li(this),Lu(this))};function Na(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Lu(a){a.g=new Tn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Xt(a.qa);Pe(u,"RID","rpc"),Pe(u,"SID",a.K),Pe(u,"AID",a.T),Pe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Pe(u,"TO",a.ja),Pe(u,"TYPE","xmlhttp"),_s(a,u),a.m&&a.o&&Da(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Vi(Xt(u)),f.m=null,f.P=!0,uu(f,a)}n.Za=function(){this.C!=null&&(this.C=null,Li(this),Oa(this),lt(19))};function Ui(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Fu(a,u){var f=null;if(a.g==u){Ui(a),Na(a),a.g=null;var p=2}else if(Ca(a.h,u))f=u.D,mu(a.h,u),p=1;else return;if(a.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=a.B;p=Si(),oe(p,new ou(p,f)),Fi(a)}else Mu(a);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&zm(a,u)||p==2&&Oa(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),R){case 1:Jn(a,5);break;case 4:Jn(a,10);break;case 3:Jn(a,6);break;default:Jn(a,2)}}}function Uu(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function Jn(a,u){if(a.j.info("Error code "+u),u==2){var f=m(a.fb,a),p=a.Xa;const R=!p;p=new Qn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||xi(p,"https"),Vi(p),R?Lm(p.toString(),f):Fm(p.toString(),f)}else lt(2);a.G=0,a.l&&a.l.sa(u),Bu(a),Vu(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Bu(a){if(a.G=0,a.ka=[],a.l){const u=_u(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function $u(a,u,f){var p=f instanceof Qn?Xt(f):new Qn(f);if(p.g!="")u&&(p.g=u+"."+p.g),Di(p,p.s);else{var R=l.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var P=new Qn(null);p&&xi(P,p),u&&(P.g=u),R&&Di(P,R),f&&(P.l=f),p=P}return f=a.D,u=a.ya,f&&u&&Pe(p,f,u),Pe(p,"VER",a.la),_s(a,p),p}function ju(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ve(new Oi({eb:f})):new Ve(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function qu(){}n=qu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Bi(){}Bi.prototype.g=function(a,u){return new gt(a,u)};function gt(a,u){ee.call(this),this.g=new Du(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!U(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new wr(this)}x(gt,ee),gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Va(this.g)},gt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ze(a),a=f);u.i.push(new Sm(u.Ya++,a)),u.G==3&&Fi(u)},gt.prototype.N=function(){this.g.l=null,delete this.j,Va(this.g),delete this.g,gt.aa.N.call(this)};function zu(a){Ia.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}x(zu,Ia);function Hu(){Aa.call(this),this.status=1}x(Hu,Aa);function wr(a){this.g=a}x(wr,qu),wr.prototype.ua=function(){oe(this.g,"a")},wr.prototype.ta=function(a){oe(this.g,new zu(a))},wr.prototype.sa=function(a){oe(this.g,new Hu)},wr.prototype.ra=function(){oe(this.g,"b")},Bi.prototype.createWebChannel=Bi.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,lg=function(){return new Bi},ag=function(){return Si()},og=Kn,Pl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pi.NO_ERROR=0,Pi.TIMEOUT=8,Pi.HTTP_ERROR=6,co=Pi,au.COMPLETE="complete",ig=au,nu.EventType=os,os.OPEN="a",os.CLOSE="b",os.ERROR="c",os.MESSAGE="d",ee.prototype.listen=ee.prototype.K,ks=nu,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,sg=Ve}).apply(typeof Qi<"u"?Qi:typeof self<"u"?self:typeof window<"u"?window:{});const uf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new pc("@firebase/firestore");function As(){return hr.logLevel}function G(n,...e){if(hr.logLevel<=he.DEBUG){const t=e.map(Rc);hr.debug(`Firestore (${es}): ${n}`,...t)}}function gn(n,...e){if(hr.logLevel<=he.ERROR){const t=e.map(Rc);hr.error(`Firestore (${es}): ${n}`,...t)}}function zr(n,...e){if(hr.logLevel<=he.WARN){const t=e.map(Rc);hr.warn(`Firestore (${es}): ${n}`,...t)}}function Rc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(n="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+n;throw gn(e),new Error(e)}function we(n,e){n||ne()}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends yn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(nt.UNAUTHENTICATED))}shutdown(){}}class ZI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eA{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){we(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new cg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new nt(e)}}class tA{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nA{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new tA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){we(this.o===void 0);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(we(typeof t.token=="string"),this.R=t.token,new rA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=iA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(n,e){return n<e?-1:n>e?1:0}function Hr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new J(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $e.fromMillis(Date.now())}static fromDate(e){return $e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new $e(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new $e(0,0))}static max(){return new se(new $e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,r){t===void 0?t=0:t>e.length&&ne(),r===void 0?r=e.length-t:r>e.length-t&&ne(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ti.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ti?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ce extends ti{construct(e,t,r){return new Ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ce(t)}static emptyPath(){return new Ce([])}}const oA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends ti{construct(e,t,r){return new Ke(e,t,r)}static isValidIdentifier(e){return oA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new J(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ce.fromString(e))}static fromName(e){return new X(Ce.fromString(e).popFirst(5))}static empty(){return new X(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ce(e.slice()))}}function aA(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new $e(t+1,0):new $e(t,r));return new Ln(s,X.empty(),e)}function lA(n){return new Ln(n.readTime,n.key,-1)}class Ln{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ln(se.min(),X.empty(),-1)}static max(){return new Ln(se.max(),X.empty(),-1)}}function cA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ge(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==uA)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,r)=>{t(e)})}static reject(e){return new L((t,r)=>{r(e)})}static waitFor(e){return new L((t,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next(s=>s?L.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,t){return new L((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function fA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ei(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Sc.oe=-1;function oa(n){return n==null}function Oo(n){return n===0&&1/n==-1/0}function dA(n){return typeof n=="number"&&Number.isInteger(n)&&!Oo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _r(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function hg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t){this.comparator=e,this.root=t||We.EMPTY}insert(e,t){return new De(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new We(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,t,r,s,i){return this}insert(e,t,r){return new We(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ff(this.data.getIterator())}getIteratorFrom(e){return new ff(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ge(this.comparator);return t.data=e,t}}class ff{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new yt([])}unionWith(e){let t=new Ge(Ke.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new yt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fg("Invalid base64 string: "+i):i}}(e);return new Je(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const pA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fn(n){if(we(!!n),typeof n=="string"){let e=0;const t=pA.exec(n);if(we(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(n.seconds),nanos:Ne(n.nanos)}}function Ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fr(n){return typeof n=="string"?Je.fromBase64String(n):Je.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function kc(n){const e=n.mapValue.fields.__previous_value__;return Pc(e)?kc(e):e}function ni(n){const e=Fn(n.mapValue.fields.__local_write_time__.timestampValue);return new $e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(e,t,r,s,i,o,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class ri{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={mapValue:{}};function dr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pc(n)?4:_A(n)?9007199254740991:mA(n)?10:11:ne()}function Gt(n,e){if(n===e)return!0;const t=dr(n);if(t!==dr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ni(n).isEqual(ni(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Fn(s.timestampValue),l=Fn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return fr(s.bytesValue).isEqual(fr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ne(s.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ne(s.integerValue)===Ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ne(s.doubleValue),l=Ne(i.doubleValue);return o===l?Oo(o)===Oo(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return Hr(n.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(hf(o)!==hf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!Gt(o[c],l[c])))return!1;return!0}(n,e);default:return ne()}}function si(n,e){return(n.values||[]).find(t=>Gt(t,e))!==void 0}function Wr(n,e){if(n===e)return 0;const t=dr(n),r=dr(e);if(t!==r)return ge(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ge(n.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ne(i.integerValue||i.doubleValue),c=Ne(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return df(n.timestampValue,e.timestampValue);case 4:return df(ni(n),ni(e));case 5:return ge(n.stringValue,e.stringValue);case 6:return function(i,o){const l=fr(i),c=fr(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ge(l[h],c[h]);if(d!==0)return d}return ge(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ge(Ne(i.latitude),Ne(o.latitude));return l!==0?l:ge(Ne(i.longitude),Ne(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return pf(n.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const g=i.fields||{},m=o.fields||{},I=(l=g.value)===null||l===void 0?void 0:l.arrayValue,x=(c=m.value)===null||c===void 0?void 0:c.arrayValue,C=ge(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0);return C!==0?C:pf(I,x)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Yi.mapValue&&o===Yi.mapValue)return 0;if(i===Yi.mapValue)return 1;if(o===Yi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const m=ge(c[g],d[g]);if(m!==0)return m;const I=Wr(l[c[g]],h[d[g]]);if(I!==0)return I}return ge(c.length,d.length)}(n.mapValue,e.mapValue);default:throw ne()}}function df(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ge(n,e);const t=Fn(n),r=Fn(e),s=ge(t.seconds,r.seconds);return s!==0?s:ge(t.nanos,r.nanos)}function pf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Wr(t[s],r[s]);if(i)return i}return ge(t.length,r.length)}function Kr(n){return kl(n)}function kl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Fn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return fr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return X.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=kl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${kl(t.fields[o])}`;return s+"}"}(n.mapValue):ne()}function Cl(n){return!!n&&"integerValue"in n}function Cc(n){return!!n&&"arrayValue"in n}function gf(n){return!!n&&"nullValue"in n}function mf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function uo(n){return!!n&&"mapValue"in n}function mA(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function js(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return _r(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=js(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=js(n.arrayValue.values[t]);return e}return Object.assign({},n)}function _A(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!uo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=js(t)}setAll(e){let t=Ke.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}o?r[l.lastSegment()]=js(o):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());uo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){_r(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new dt(js(this.value))}}function dg(n){const e=[];return _r(n.fields,(t,r)=>{const s=new Ke([t]);if(uo(r)){const i=dg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t,r,s,i,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new st(e,0,se.min(),se.min(),se.min(),dt.empty(),0)}static newFoundDocument(e,t,r,s){return new st(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new st(e,2,t,se.min(),se.min(),dt.empty(),0)}static newUnknownDocument(e,t){return new st(e,3,t,se.min(),se.min(),dt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){this.position=e,this.inclusive=t}}function _f(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),t.key):r=Wr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function yf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Gt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t="asc"){this.field=e,this.dir=t}}function yA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{}class Be extends pg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new EA(e,t,r):t==="array-contains"?new IA(e,r):t==="in"?new AA(e,r):t==="not-in"?new bA(e,r):t==="array-contains-any"?new RA(e,r):new Be(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new TA(e,r):new wA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Wr(t,this.value)):t!==null&&dr(this.value)===dr(t)&&this.matchesComparison(Wr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends pg{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Qt(e,t)}matches(e){return gg(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gg(n){return n.op==="and"}function mg(n){return vA(n)&&gg(n)}function vA(n){for(const e of n.filters)if(e instanceof Qt)return!1;return!0}function xl(n){if(n instanceof Be)return n.field.canonicalString()+n.op.toString()+Kr(n.value);if(mg(n))return n.filters.map(e=>xl(e)).join(",");{const e=n.filters.map(t=>xl(t)).join(",");return`${n.op}(${e})`}}function _g(n,e){return n instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.field.isEqual(s.field)&&Gt(r.value,s.value)}(n,e):n instanceof Qt?function(r,s){return s instanceof Qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&_g(o,s.filters[l]),!0):!1}(n,e):void ne()}function yg(n){return n instanceof Be?function(t){return`${t.field.canonicalString()} ${t.op} ${Kr(t.value)}`}(n):n instanceof Qt?function(t){return t.op.toString()+" {"+t.getFilters().map(yg).join(" ,")+"}"}(n):"Filter"}class EA extends Be{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class TA extends Be{constructor(e,t){super(e,"in",t),this.keys=vg("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class wA extends Be{constructor(e,t){super(e,"not-in",t),this.keys=vg("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>X.fromName(r.referenceValue))}class IA extends Be{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cc(t)&&si(t.arrayValue,this.value)}}class AA extends Be{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&si(this.value.arrayValue,t)}}class bA extends Be{constructor(e,t){super(e,"not-in",t)}matches(e){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!si(this.value.arrayValue,t)}}class RA extends Be{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>si(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,t=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function vf(n,e=null,t=[],r=[],s=null,i=null,o=null){return new SA(n,e,t,r,s,i,o)}function xc(n){const e=ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>xl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Kr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Kr(r)).join(",")),e.ue=t}return e.ue}function Dc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!yA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!_g(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!yf(n.startAt,e.startAt)&&yf(n.endAt,e.endAt)}function Dl(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function PA(n,e,t,r,s,i,o,l){return new aa(n,e,t,r,s,i,o,l)}function Eg(n){return new aa(n)}function Ef(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function kA(n){return n.collectionGroup!==null}function qs(n){const e=ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ge(Ke.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Mo(i,r))}),t.has(Ke.keyField().canonicalString())||e.ce.push(new Mo(Ke.keyField(),r))}return e.ce}function qt(n){const e=ie(n);return e.le||(e.le=CA(e,qs(n))),e.le}function CA(n,e){if(n.limitType==="F")return vf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Mo(s.field,i)});const t=n.endAt?new No(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new No(n.startAt.position,n.startAt.inclusive):null;return vf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Vl(n,e,t){return new aa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function la(n,e){return Dc(qt(n),qt(e))&&n.limitType===e.limitType}function Tg(n){return`${xc(qt(n))}|lt:${n.limitType}`}function Sr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>yg(s)).join(", ")}]`),oa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Kr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Kr(s)).join(",")),`Target(${r})`}(qt(n))}; limitType=${n.limitType})`}function ca(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=_f(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,qs(r),s)||r.endAt&&!function(o,l,c){const h=_f(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,qs(r),s))}(n,e)}function xA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function wg(n){return(e,t)=>{let r=!1;for(const s of qs(n)){const i=DA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function DA(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Wr(c,h):ne()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_r(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return hg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=new De(X.comparator);function mn(){return VA}const Ig=new De(X.comparator);function Cs(...n){let e=Ig;for(const t of n)e=e.insert(t.key,t);return e}function Ag(n){let e=Ig;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function nr(){return zs()}function bg(){return zs()}function zs(){return new ts(n=>n.toString(),(n,e)=>n.isEqual(e))}const OA=new De(X.comparator),NA=new Ge(X.comparator);function ue(...n){let e=NA;for(const t of n)e=e.add(t);return e}const MA=new Ge(ge);function LA(){return MA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oo(e)?"-0":e}}function Rg(n){return{integerValue:""+n}}function FA(n,e){return dA(e)?Rg(e):Vc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this._=void 0}}function UA(n,e,t){return n instanceof Lo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Pc(i)&&(i=kc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof ii?Pg(n,e):n instanceof oi?kg(n,e):function(s,i){const o=Sg(s,i),l=Tf(o)+Tf(s.Pe);return Cl(o)&&Cl(s.Pe)?Rg(l):Vc(s.serializer,l)}(n,e)}function BA(n,e,t){return n instanceof ii?Pg(n,e):n instanceof oi?kg(n,e):t}function Sg(n,e){return n instanceof Fo?function(r){return Cl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Lo extends ua{}class ii extends ua{constructor(e){super(),this.elements=e}}function Pg(n,e){const t=Cg(e);for(const r of n.elements)t.some(s=>Gt(s,r))||t.push(r);return{arrayValue:{values:t}}}class oi extends ua{constructor(e){super(),this.elements=e}}function kg(n,e){let t=Cg(e);for(const r of n.elements)t=t.filter(s=>!Gt(s,r));return{arrayValue:{values:t}}}class Fo extends ua{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Tf(n){return Ne(n.integerValue||n.doubleValue)}function Cg(n){return Cc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function $A(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ii&&s instanceof ii||r instanceof oi&&s instanceof oi?Hr(r.elements,s.elements,Gt):r instanceof Fo&&s instanceof Fo?Gt(r.Pe,s.Pe):r instanceof Lo&&s instanceof Lo}(n.transform,e.transform)}class jA{constructor(e,t){this.version=e,this.transformResults=t}}class zt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ho(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ha{}function xg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Vg(n.key,zt.none()):new Ti(n.key,n.data,zt.none());{const t=n.data,r=dt.empty();let s=new Ge(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new qn(n.key,r,new yt(s.toArray()),zt.none())}}function qA(n,e,t){n instanceof Ti?function(s,i,o){const l=s.value.clone(),c=If(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof qn?function(s,i,o){if(!ho(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=If(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Dg(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Hs(n,e,t,r){return n instanceof Ti?function(i,o,l,c){if(!ho(i.precondition,o))return l;const h=i.value.clone(),d=Af(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof qn?function(i,o,l,c){if(!ho(i.precondition,o))return l;const h=Af(i.fieldTransforms,c,o),d=o.data;return d.setAll(Dg(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,o,l){return ho(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function zA(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Sg(r.transform,s||null);i!=null&&(t===null&&(t=dt.empty()),t.set(r.field,i))}return t||null}function wf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Hr(r,s,(i,o)=>$A(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ti extends ha{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qn extends ha{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Dg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function If(n,e,t){const r=new Map;we(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,BA(o,l,t[s]))}return r}function Af(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,UA(i,o,e))}return r}class Vg extends ha{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HA extends ha{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qA(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Hs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Hs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=t.has(s.key)?null:l;const c=xg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ue())}isEqual(e){return this.batchId===e.batchId&&Hr(this.mutations,e.mutations,(t,r)=>wf(t,r))&&Hr(this.baseMutations,e.baseMutations,(t,r)=>wf(t,r))}}class Oc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){we(e.mutations.length===r.length);let s=function(){return OA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Oc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,fe;function QA(n){switch(n){default:return ne();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function Og(n){if(n===void 0)return gn("GRPC error has no .code"),F.UNKNOWN;switch(n){case Le.OK:return F.OK;case Le.CANCELLED:return F.CANCELLED;case Le.UNKNOWN:return F.UNKNOWN;case Le.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Le.INTERNAL:return F.INTERNAL;case Le.UNAVAILABLE:return F.UNAVAILABLE;case Le.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Le.NOT_FOUND:return F.NOT_FOUND;case Le.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Le.ABORTED:return F.ABORTED;case Le.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Le.DATA_LOSS:return F.DATA_LOSS;default:return ne()}}(fe=Le||(Le={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new or([4294967295,4294967295],0);function bf(n){const e=JA().encode(n),t=new rg;return t.update(e),new Uint8Array(t.digest())}function Rf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new or([t,r],0),new or([s,i],0)]}class Nc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new xs(`Invalid padding: ${t}`);if(r<0)throw new xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new xs(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=or.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(or.fromNumber(r)));return s.compare(YA)===1&&(s=new or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=bf(e),[r,s]=Rf(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nc(i,s,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=bf(e),[r,s]=Rf(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,wi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new fa(se.min(),s,new De(ge),mn(),ue())}}class wi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new wi(r,t,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Ng{constructor(e,t){this.targetId=e,this.me=t}}class Mg{constructor(e,t,r=Je.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Sf{constructor(){this.fe=0,this.ge=kf(),this.pe=Je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ue(),t=ue(),r=ue();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ne()}}),new wi(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=kf()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class XA{constructor(e){this.Le=e,this.Be=new Map,this.ke=mn(),this.qe=Pf(),this.Qe=new De(ge)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:ne()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Dl(i))if(r===0){const o=new X(i.path);this.Ue(t,o,st.newNoDocument(o,se.min()))}else we(r===1);else{const o=this.Ye(t);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,l;try{o=fr(r).toUint8Array()}catch(c){if(c instanceof fg)return zr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Nc(o,s,i)}catch(c){return zr(c instanceof xs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Dl(l.target)){const c=new X(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,st.newNoDocument(c,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=ue();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new fa(e,t,this.Qe,this.ke,r);return this.ke=mn(),this.qe=Pf(),this.Qe=new De(ge),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Sf,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ge(ge),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Sf),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Pf(){return new De(X.comparator)}function kf(){return new De(X.comparator)}const ZA={asc:"ASCENDING",desc:"DESCENDING"},eb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tb={and:"AND",or:"OR"};class nb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ol(n,e){return n.useProto3Json||oa(e)?e:{value:e}}function Uo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function rb(n,e){return Uo(n,e.toTimestamp())}function Ht(n){return we(!!n),se.fromTimestamp(function(t){const r=Fn(t);return new $e(r.seconds,r.nanos)}(n))}function Mc(n,e){return Nl(n,e).canonicalString()}function Nl(n,e){const t=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Fg(n){const e=Ce.fromString(n);return we(qg(e)),e}function Ml(n,e){return Mc(n.databaseId,e.path)}function tl(n,e){const t=Fg(e);if(t.get(1)!==n.databaseId.projectId)throw new J(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(Bg(t))}function Ug(n,e){return Mc(n.databaseId,e)}function sb(n){const e=Fg(n);return e.length===4?Ce.emptyPath():Bg(e)}function Ll(n){return new Ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bg(n){return we(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Cf(n,e,t){return{name:Ml(n,e),fields:t.value.mapValue.fields}}function ib(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(we(d===void 0||typeof d=="string"),Je.fromBase64String(d||"")):(we(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Je.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?F.UNKNOWN:Og(h.code);return new J(d,h.message||"")}(o);t=new Mg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=tl(n,r.document.name),i=Ht(r.document.updateTime),o=r.document.createTime?Ht(r.document.createTime):se.min(),l=new dt({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new fo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=tl(n,r.document),i=r.readTime?Ht(r.readTime):se.min(),o=st.newNoDocument(s,i),l=r.removedTargetIds||[];t=new fo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=tl(n,r.document),i=r.removedTargetIds||[];t=new fo([],i,s,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new GA(s,i),l=r.targetId;t=new Ng(l,o)}}return t}function ob(n,e){let t;if(e instanceof Ti)t={update:Cf(n,e.key,e.value)};else if(e instanceof Vg)t={delete:Ml(n,e.key)};else if(e instanceof qn)t={update:Cf(n,e.key,e.data),updateMask:gb(e.fieldMask)};else{if(!(e instanceof HA))return ne();t={verify:Ml(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Lo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ii)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ne()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:rb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne()}(n,e.precondition)),t}function ab(n,e){return n&&n.length>0?(we(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?Ht(s.updateTime):Ht(i);return o.isEqual(se.min())&&(o=Ht(i)),new jA(o,s.transformResults||[])}(t,e))):[]}function lb(n,e){return{documents:[Ug(n,e.path)]}}function cb(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ug(n,s);const i=function(h){if(h.length!==0)return jg(Qt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Pr(m.field),direction:fb(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Ol(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function ub(n){let e=sb(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){we(r===1);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(g){const m=$g(g);return m instanceof Qt&&mg(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(g){return g.map(m=>function(x){return new Mo(kr(x.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(m))}(t.orderBy));let l=null;t.limit&&(l=function(g){let m;return m=typeof g=="object"?g.value:g,oa(m)?null:m}(t.limit));let c=null;t.startAt&&(c=function(g){const m=!!g.before,I=g.values||[];return new No(I,m)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const m=!g.before,I=g.values||[];return new No(I,m)}(t.endAt)),PA(e,s,o,i,l,"F",c,h)}function hb(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function $g(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=kr(t.unaryFilter.field);return Be.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=kr(t.unaryFilter.field);return Be.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(t.unaryFilter.field);return Be.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=kr(t.unaryFilter.field);return Be.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(n):n.fieldFilter!==void 0?function(t){return Be.create(kr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Qt.create(t.compositeFilter.filters.map(r=>$g(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne()}}(t.compositeFilter.op))}(n):ne()}function fb(n){return ZA[n]}function db(n){return eb[n]}function pb(n){return tb[n]}function Pr(n){return{fieldPath:n.canonicalString()}}function kr(n){return Ke.fromServerFormat(n.fieldPath)}function jg(n){return n instanceof Be?function(t){if(t.op==="=="){if(mf(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NAN"}};if(gf(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(mf(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NAN"}};if(gf(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(t.field),op:db(t.op),value:t.value}}}(n):n instanceof Qt?function(t){const r=t.getFilters().map(s=>jg(s));return r.length===1?r[0]:{compositeFilter:{op:pb(t.op),filters:r}}}(n):ne()}function gb(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function qg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t,r,s,i=se.min(),o=se.min(),l=Je.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.ct=e}}function _b(n){const e=ub({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(){this.un=new vb}addToCollectionParentIndex(e,t){return this.un.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Ln.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Ln.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class vb{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ge(Ce.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ge(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Gr(0)}static kn(){return new Gr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.changes=new ts(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Hs(r.mutation,s,yt.empty(),$e.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ue()){const s=nr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Cs();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=nr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ue()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,s){let i=mn();const o=zs(),l=function(){return zs()}();return t.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof qn)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Hs(d.mutation,h,d.mutation.getFieldMask(),$e.now())):o.set(h.key,yt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),t.forEach((h,d)=>{var g;return l.set(h,new Tb(d,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const r=zs();let s=new De((o,l)=>o-l),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||yt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const g=(s.get(l.batchId)||ue()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,g=bg();d.forEach(m=>{if(!i.has(m)){const I=xg(t.get(m),r.get(m));I!==null&&g.set(m,I),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):kA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):L.resolve(nr());let l=-1,c=i;return o.next(h=>L.forEach(h,(d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ue())).next(d=>({batchId:l,changes:Ag(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(r=>{let s=Cs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Cs();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(g,m){return new aa(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,st.newInvalidDocument(d)))});let l=Cs();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Hs(d.mutation,h,yt.empty(),$e.now()),ca(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return L.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ht(s.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:_b(s.bundledQuery),readTime:Ht(s.readTime)}}(t)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.overlays=new De(X.comparator),this.Ir=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=nr();return L.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),L.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const s=nr(),i=t.length+1,o=new X(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new De((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=nr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=nr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return L.resolve(l)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KA(t,r));let i=this.Ir.get(t);i===void 0&&(i=ue(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this.Tr=new Ge(je.Er),this.dr=new Ge(je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new je(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new je(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new X(new Ce([])),r=new je(t,e),s=new je(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new X(new Ce([])),r=new je(t,e),s=new je(t,e+1);let i=ue();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new je(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return X.comparator(e.key,t.key)||ge(e.wr,t.wr)}static Ar(e,t){return ge(e.wr,t.wr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ge(je.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WA(i,t,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new je(t,0),s=new je(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ge(ge);return t.forEach(s=>{const i=new je(s,0),o=new je(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new je(new X(i),0);let l=new Ge(ge);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){we(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(t.mutations,s=>{const i=new je(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new je(t,0),s=this.br.firstAfterOrEqual(r);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.Mr=e,this.docs=function(){return new De(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():st.newInvalidDocument(t))}getEntries(e,t){let r=mn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=mn();const o=t.path,l=new X(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||cA(lA(d),r)<=0||(s.has(d.key)||ca(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ne()}Or(e,t){return L.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Pb(this)}getSize(e){return L.resolve(this.size)}}class Pb extends Eb{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),L.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e){this.persistence=e,this.Nr=new ts(t=>xc(t),Dc),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lc,this.targetCount=0,this.kr=Gr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),L.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Gr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Kn(t),L.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),L.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Sc(0),this.Kr=!1,this.Kr=!0,this.$r=new bb,this.referenceDelegate=e(this),this.Ur=new kb(this),this.indexManager=new yb,this.remoteDocumentCache=function(s){return new Sb(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new mb(t),this.Gr=new Ib(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ab,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new Rb(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const s=new xb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class xb extends hA{constructor(e){super(),this.currentSequenceNumber=e}}class Fc{constructor(e){this.persistence=e,this.Jr=new Lc,this.Yr=null}static Zr(e){return new Fc(e)}get Xr(){if(this.Yr)return this.Yr;throw ne()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),L.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const s=X.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,se.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return L.or([()=>L.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ue(),s=ue();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Uc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return EE()?8:fA(at())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Db;return this.Xi(e,t,o).next(l=>{if(i.result=l,this.zi)return this.es(e,t,o,l.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(As()<=he.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Sr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(As()<=he.DEBUG&&G("QueryEngine","Query:",Sr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(As()<=he.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Sr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(t))):L.resolve())}Yi(e,t){if(Ef(t))return L.resolve(null);let r=qt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Vl(t,null,"F"),r=qt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(t,l);return this.ns(t,h,o,c.readTime)?this.Yi(e,Vl(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,r,s){return Ef(t)||s.isEqual(se.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?L.resolve(null):(As()<=he.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Sr(t)),this.rs(e,o,t,aA(s,-1)).next(l=>l))})}ts(e,t){let r=new Ge(wg(e));return t.forEach((s,i)=>{ca(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return As()<=he.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Sr(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ln.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new De(ge),this._s=new ts(i=>xc(i),Dc),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wb(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Nb(n,e,t,r){return new Ob(n,e,t,r)}async function zg(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=ue();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function Mb(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const g=h.batch,m=g.keys();let I=L.resolve();return m.forEach(x=>{I=I.next(()=>d.getEntry(c,x)).next(C=>{const D=h.docVersions.get(x);we(D!==null),C.version.compareTo(D)<0&&(g.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),d.addEntry(C)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ue();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Hg(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Lb(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((d,g)=>{const m=s.get(g);if(!m)return;l.push(t.Ur.removeMatchingKeys(i,d.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(i,d.addedDocuments,g)));let I=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?I=I.withResumeToken(Je.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(g,I),function(C,D,K){return C.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(m,I,d)&&l.push(t.Ur.updateTargetData(i,I))});let c=mn(),h=ue();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(Fb(i,o,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(se.min())){const d=t.Ur.getLastRemoteSnapshotVersion(i).next(g=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.os=s,i))}function Fb(n,e,t){let r=ue(),s=ue();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=mn();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(se.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function Ub(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Bb(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Fl(n,e,t){const r=ie(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ei(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function xf(n,e,t){const r=ie(n);let s=se.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const g=ie(c),m=g._s.get(d);return m!==void 0?L.resolve(g.os.get(m)):g.Ur.getTargetData(h,d)}(r,o,qt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:se.min(),t?i:ue())).next(l=>($b(r,xA(e),l),{documents:l,Ts:i})))}function $b(n,e,t){let r=n.us.get(e)||se.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class Df{constructor(){this.activeTargetIds=LA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jb{constructor(){this.so=new Df,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Df,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi=null;function nl(){return Xi===null?Xi=function(){return 268435456+Math.round(2147483648*Math.random())}():Xi++,"0x"+Xi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class Wb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const l=nl(),c=this.xo(t,r.toUriEncodedString());G("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,c,h,s).then(d=>(G("RestConnection",`Received RPC '${t}' ${l}: `,d),d),d=>{throw zr("RestConnection",`RPC '${t}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(t,r,s,i,o,l){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=zb[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=nl();return new Promise((o,l)=>{const c=new sg;c.setWithCredentials(!0),c.listenOnce(ig.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case co.NO_ERROR:const d=c.getResponseJson();G(et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case co.TIMEOUT:G(et,`RPC '${e}' ${i} timed out`),l(new J(F.DEADLINE_EXCEEDED,"Request time out"));break;case co.HTTP_ERROR:const g=c.getStatus();if(G(et,`RPC '${e}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const I=m==null?void 0:m.error;if(I&&I.status&&I.message){const x=function(D){const K=D.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(K)>=0?K:F.UNKNOWN}(I.status);l(new J(x,I.message))}else l(new J(F.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new J(F.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{G(et,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);G(et,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=nl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lg(),l=ag(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");G(et,`Creating RPC '${e}' stream ${s}: ${d}`,c);const g=o.createWebChannel(d,c);let m=!1,I=!1;const x=new Hb({Io:D=>{I?G(et,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(G(et,`Opening RPC '${e}' stream ${s} transport.`),g.open(),m=!0),G(et,`RPC '${e}' stream ${s} sending:`,D),g.send(D))},To:()=>g.close()}),C=(D,K,U)=>{D.listen(K,W=>{try{U(W)}catch(z){setTimeout(()=>{throw z},0)}})};return C(g,ks.EventType.OPEN,()=>{I||(G(et,`RPC '${e}' stream ${s} transport opened.`),x.yo())}),C(g,ks.EventType.CLOSE,()=>{I||(I=!0,G(et,`RPC '${e}' stream ${s} transport closed`),x.So())}),C(g,ks.EventType.ERROR,D=>{I||(I=!0,zr(et,`RPC '${e}' stream ${s} transport errored:`,D),x.So(new J(F.UNAVAILABLE,"The operation could not be completed")))}),C(g,ks.EventType.MESSAGE,D=>{var K;if(!I){const U=D.data[0];we(!!U);const W=U,z=W.error||((K=W[0])===null||K===void 0?void 0:K.error);if(z){G(et,`RPC '${e}' stream ${s} received error:`,z);const ce=z.status;let _e=function(E){const T=Le[E];if(T!==void 0)return Og(T)}(ce),A=z.message;_e===void 0&&(_e=F.INTERNAL,A="Unknown error status: "+ce+" with message "+z.message),I=!0,x.So(new J(_e,A)),g.close()}else G(et,`RPC '${e}' stream ${s} received:`,U),x.bo(U)}}),C(l,og.STAT_EVENT,D=>{D.stat===Pl.PROXY?G(et,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Pl.NOPROXY&&G(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function rl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(n){return new nb(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,t,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Wg(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(gn(t.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new J(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Kb extends Kg{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=ib(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?Ht(o.readTime):se.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Ll(this.serializer),t.addTarget=function(i,o){let l;const c=o.target;if(l=Dl(c)?{documents:lb(i,c)}:{query:cb(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Lg(i,o.resumeToken);const h=Ol(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=Uo(i,o.snapshotVersion.toTimestamp());const h=Ol(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=hb(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Ll(this.serializer),t.removeTarget=e,this.a_(t)}}class Gb extends Kg{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return we(!!e.streamToken),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){we(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=ab(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Ll(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ob(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new J(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Nl(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(F.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Nl(t,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Jb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(gn(t),this.D_=!1):G("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{yr(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ie(c);h.L_.add(4),await Ii(h),h.q_.set("Unknown"),h.L_.delete(4),await pa(h)}(this))})}),this.q_=new Jb(r,s)}}async function pa(n){if(yr(n))for(const e of n.B_)await e(!0)}async function Ii(n){for(const e of n.B_)await e(!1)}function Gg(n,e){const t=ie(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),qc(t)?jc(t):ns(t).r_()&&$c(t,e))}function Bc(n,e){const t=ie(n),r=ns(t);t.N_.delete(e),r.r_()&&Qg(t,e),t.N_.size===0&&(r.r_()?r.o_():yr(t)&&t.q_.set("Unknown"))}function $c(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ns(n).A_(e)}function Qg(n,e){n.Q_.xe(e),ns(n).R_(e)}function jc(n){n.Q_=new XA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ns(n).start(),n.q_.v_()}function qc(n){return yr(n)&&!ns(n).n_()&&n.N_.size>0}function yr(n){return ie(n).L_.size===0}function Jg(n){n.Q_=void 0}async function Xb(n){n.q_.set("Online")}async function Zb(n){n.N_.forEach((e,t)=>{$c(n,e)})}async function e0(n,e){Jg(n),qc(n)?(n.q_.M_(e),jc(n)):n.q_.set("Unknown")}async function t0(n,e,t){if(n.q_.set("Online"),e instanceof Mg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bo(n,r)}else if(e instanceof fo?n.Q_.Ke(e):e instanceof Ng?n.Q_.He(e):n.Q_.We(e),!t.isEqual(se.min()))try{const r=await Hg(n.localStore);t.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(Je.EMPTY_BYTE_STRING,d.snapshotVersion)),Qg(i,c);const g=new xn(d.target,c,h,d.sequenceNumber);$c(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Bo(n,r)}}async function Bo(n,e,t){if(!Ei(e))throw e;n.L_.add(1),await Ii(n),n.q_.set("Offline"),t||(t=()=>Hg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await pa(n)})}function Yg(n,e){return e().catch(t=>Bo(n,t,e))}async function ga(n){const e=ie(n),t=Un(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;n0(e);)try{const s=await Ub(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,r0(e,s)}catch(s){await Bo(e,s)}Xg(e)&&Zg(e)}function n0(n){return yr(n)&&n.O_.length<10}function r0(n,e){n.O_.push(e);const t=Un(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Xg(n){return yr(n)&&!Un(n).n_()&&n.O_.length>0}function Zg(n){Un(n).start()}async function s0(n){Un(n).p_()}async function i0(n){const e=Un(n);for(const t of n.O_)e.m_(t.mutations)}async function o0(n,e,t){const r=n.O_.shift(),s=Oc.from(r,e,t);await Yg(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ga(n)}async function a0(n,e){e&&Un(n).V_&&await async function(r,s){if(function(o){return QA(o)&&o!==F.ABORTED}(s.code)){const i=r.O_.shift();Un(r).s_(),await Yg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ga(r)}}(n,e),Xg(n)&&Zg(n)}async function Of(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=yr(t);t.L_.add(3),await Ii(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await pa(t)}async function l0(n,e){const t=ie(n);e?(t.L_.delete(2),await pa(t)):e||(t.L_.add(2),await Ii(t),t.q_.set("Unknown"))}function ns(n){return n.K_||(n.K_=function(t,r,s){const i=ie(t);return i.w_(),new Kb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Xb.bind(null,n),Ro:Zb.bind(null,n),mo:e0.bind(null,n),d_:t0.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),qc(n)?jc(n):n.q_.set("Unknown")):(await n.K_.stop(),Jg(n))})),n.K_}function Un(n){return n.U_||(n.U_=function(t,r,s){const i=ie(t);return i.w_(),new Gb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:s0.bind(null,n),mo:a0.bind(null,n),f_:i0.bind(null,n),g_:o0.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await ga(n)):(await n.U_.stop(),n.O_.length>0&&(G("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,l=new zc(e,t,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hc(n,e){if(gn("AsyncQueue",`${e}: ${n}`),Ei(n))return new J(F.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=Cs(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Ur(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ur)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this.W_=new De(X.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ne():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Qr{constructor(e,t,r,s,i,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Qr(e,t,Ur.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&la(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class u0{constructor(){this.queries=Mf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=Mf(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new J(F.ABORTED,"Firestore shutting down"))}}function Mf(){return new ts(n=>Tg(n),la)}async function h0(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new c0,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const l=Hc(o,`Initialization of query '${Sr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Wc(t)}async function f0(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function d0(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Wc(t)}function p0(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Wc(n){n.Y_.forEach(e=>{e.next()})}var Ul,Lf;(Lf=Ul||(Ul={})).ea="default",Lf.Cache="cache";class g0{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ul.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e){this.key=e}}class tm{constructor(e){this.key=e}}class m0{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ue(),this.mutatedKeys=ue(),this.Aa=wg(e),this.Ra=new Ur(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Nf,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,g)=>{const m=s.get(d),I=ca(this.query,g)?g:null,x=!!m&&this.mutatedKeys.has(m.key),C=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let D=!1;m&&I?m.data.isEqual(I.data)?x!==C&&(r.track({type:3,doc:I}),D=!0):this.ga(m,I)||(r.track({type:2,doc:I}),D=!0,(c&&this.Aa(I,c)>0||h&&this.Aa(I,h)<0)&&(l=!0)):!m&&I?(r.track({type:0,doc:I}),D=!0):m&&!I&&(r.track({type:1,doc:m}),D=!0,(c||h)&&(l=!0)),D&&(I?(o=o.add(I),i=C?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,g)=>function(I,x){const C=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return C(I)-C(x)}(d.type,g.type)||this.Aa(d.doc,g.doc)),this.pa(r),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new Qr(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Nf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ue(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new tm(r))}),this.da.forEach(r=>{e.has(r)||t.push(new em(r))}),t}ba(e){this.Ta=e.Ts,this.da=ue();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Qr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class _0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class y0{constructor(e){this.key=e,this.va=!1}}class v0{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ts(l=>Tg(l),la),this.Ma=new Map,this.xa=new Set,this.Oa=new De(X.comparator),this.Na=new Map,this.La=new Lc,this.Ba={},this.ka=new Map,this.qa=Gr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function E0(n,e,t=!0){const r=am(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await nm(r,e,t,!0),s}async function T0(n,e){const t=am(n);await nm(t,e,!0,!1)}async function nm(n,e,t,r){const s=await Bb(n.localStore,qt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await w0(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Gg(n.remoteStore,s),l}async function w0(n,e,t,r,s){n.Ka=(g,m,I)=>async function(C,D,K,U){let W=D.view.ma(K);W.ns&&(W=await xf(C.localStore,D.query,!1).then(({documents:A})=>D.view.ma(A,W)));const z=U&&U.targetChanges.get(D.targetId),ce=U&&U.targetMismatches.get(D.targetId)!=null,_e=D.view.applyChanges(W,C.isPrimaryClient,z,ce);return Uf(C,D.targetId,_e.wa),_e.snapshot}(n,g,m,I);const i=await xf(n.localStore,e,!0),o=new m0(e,i.Ts),l=o.ma(i.documents),c=wi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(l,n.isPrimaryClient,c);Uf(n,t,h.wa);const d=new _0(e,t,o);return n.Fa.set(e,d),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function I0(n,e,t){const r=ie(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!la(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Bc(r.remoteStore,s.targetId),Bl(r,s.targetId)}).catch(vi)):(Bl(r,s.targetId),await Fl(r.localStore,s.targetId,!0))}async function A0(n,e){const t=ie(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Bc(t.remoteStore,r.targetId))}async function b0(n,e,t){const r=D0(n);try{const s=await function(o,l){const c=ie(o),h=$e.now(),d=l.reduce((I,x)=>I.add(x.key),ue());let g,m;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let x=mn(),C=ue();return c.cs.getEntries(I,d).next(D=>{x=D,x.forEach((K,U)=>{U.isValidDocument()||(C=C.add(K))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,x)).next(D=>{g=D;const K=[];for(const U of l){const W=zA(U,g.get(U.key).overlayedDocument);W!=null&&K.push(new qn(U.key,W,dg(W.value.mapValue),zt.exists(!0)))}return c.mutationQueue.addMutationBatch(I,h,K,l)}).next(D=>{m=D;const K=D.applyToLocalDocumentSet(g,C);return c.documentOverlayCache.saveOverlays(I,D.batchId,K)})}).then(()=>({batchId:m.batchId,changes:Ag(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new De(ge)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,t),await Ai(r,s.changes),await ga(r.remoteStore)}catch(s){const i=Hc(s,"Failed to persist write");t.reject(i)}}async function rm(n,e){const t=ie(n);try{const r=await Lb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(we(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?we(o.va):s.removedDocuments.size>0&&(we(o.va),o.va=!1))}),await Ai(t,r,e)}catch(r){await vi(r)}}function Ff(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ie(o);c.onlineState=l;let h=!1;c.queries.forEach((d,g)=>{for(const m of g.j_)m.Z_(l)&&(h=!0)}),h&&Wc(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function R0(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new De(X.comparator);o=o.insert(i,st.newNoDocument(i,se.min()));const l=ue().add(i),c=new fa(se.min(),new Map,new De(ge),o,l);await rm(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),Kc(r)}else await Fl(r.localStore,e,!1).then(()=>Bl(r,e,t)).catch(vi)}async function S0(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await Mb(t.localStore,e);im(t,r,null),sm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ai(t,s)}catch(s){await vi(s)}}async function P0(n,e,t){const r=ie(n);try{const s=await function(o,l){const c=ie(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(g=>(we(g!==null),d=g.keys(),c.mutationQueue.removeMutationBatch(h,g))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);im(r,e,t),sm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ai(r,s)}catch(s){await vi(s)}}function sm(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function im(n,e,t){const r=ie(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Bl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||om(n,r)})}function om(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Bc(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Kc(n))}function Uf(n,e,t){for(const r of t)r instanceof em?(n.La.addReference(r.key,e),k0(n,r)):r instanceof tm?(G("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||om(n,r.key)):ne()}function k0(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(G("SyncEngine","New document in limbo: "+t),n.xa.add(r),Kc(n))}function Kc(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new X(Ce.fromString(e)),r=n.qa.next();n.Na.set(r,new y0(t)),n.Oa=n.Oa.insert(t,r),Gg(n.remoteStore,new xn(qt(Eg(t.path)),r,"TargetPurposeLimboResolution",Sc.oe))}}async function Ai(n,e,t){const r=ie(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,t).then(h=>{var d;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Uc.Wi(c.targetId,h);i.push(g)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const d=ie(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>L.forEach(h,m=>L.forEach(m.$i,I=>d.persistence.referenceDelegate.addReference(g,m.targetId,I)).next(()=>L.forEach(m.Ui,I=>d.persistence.referenceDelegate.removeReference(g,m.targetId,I)))))}catch(g){if(!Ei(g))throw g;G("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const I=d.os.get(m),x=I.snapshotVersion,C=I.withLastLimboFreeSnapshotVersion(x);d.os=d.os.insert(m,C)}}}(r.localStore,i))}async function C0(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await zg(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new J(F.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ai(t,r.hs)}}function x0(n,e){const t=ie(n),r=t.Na.get(e);if(r&&r.va)return ue().add(r.key);{let s=ue();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const l=t.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function am(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=x0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=R0.bind(null,e),e.Ca.d_=d0.bind(null,e.eventManager),e.Ca.$a=p0.bind(null,e.eventManager),e}function D0(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=S0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=P0.bind(null,e),e}class $o{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=da(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Nb(this.persistence,new Vb,e.initialUser,this.serializer)}Ga(e){return new Cb(Fc.Zr,this.serializer)}Wa(e){return new jb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$o.provider={build:()=>new $o};class $l{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ff(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=C0.bind(null,this.syncEngine),await l0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new u0}()}createDatastore(e){const t=da(e.databaseInfo.databaseId),r=function(i){return new Wb(i)}(e.databaseInfo);return function(i,o,l,c){return new Qb(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,l){return new Yb(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Ff(this.syncEngine,t,0),function(){return Vf.D()?new Vf:new qb}())}createSyncEngine(e,t){return function(s,i,o,l,c,h,d){const g=new v0(s,i,o,l,c,h);return d&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ie(s);G("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Ii(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$l.provider={build:()=>new $l};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):gn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=nt.UNAUTHENTICATED,this.clientId=ug.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{G("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(G("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Hc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sl(n,e){n.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Bf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await N0(n);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Of(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Of(e.remoteStore,s)),n._onlineComponents=e}async function N0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await sl(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;zr("Error using user provided cache. Falling back to memory cache: "+t),await sl(n,new $o)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await sl(n,new $o);return n._offlineComponents}async function lm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await Bf(n,n._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await Bf(n,new $l))),n._onlineComponents}function M0(n){return lm(n).then(e=>e.syncEngine)}async function L0(n){const e=await lm(n),t=e.eventManager;return t.onListen=E0.bind(null,e.syncEngine),t.onUnlisten=I0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=T0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=A0.bind(null,e.syncEngine),t}function F0(n,e,t={}){const r=new Nn;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new V0({next:m=>{d.Za(),o.enqueueAndForget(()=>f0(i,g)),m.fromCache&&c.source==="server"?h.reject(new J(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),g=new g0(l,d,{includeMetadataChanges:!0,_a:!0});return h0(i,g)}(await L0(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(n,e,t){if(!t)throw new J(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function U0(n,e,t,r){if(e===!0&&r===!0)throw new J(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function jf(n){if(!X.isDocumentKey(n))throw new J(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qf(n){if(X.isDocumentKey(n))throw new J(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ne()}function Jr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gc(n);throw new J(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}U0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ma{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XI;switch(r.type){case"firstParty":return new nA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=$f.get(t);r&&(G("ComponentProvider","Removing Datastore"),$f.delete(t),r.terminate())}(this),Promise.resolve()}}function B0(n,e,t,r={}){var s;const i=(n=Jr(n,ma))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=nt.MOCK_USER;else{l=dE(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new J(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new nt(h)}n._authCredentials=new ZI(new cg(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _a(this.firestore,e,this._query)}}class It{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class Mn extends _a{constructor(e,t,r){super(e,t,Eg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new X(e))}withConverter(e){return new Mn(this.firestore,e,this._path)}}function Hf(n,e,...t){if(n=Qe(n),um("collection","path",e),n instanceof ma){const r=Ce.fromString(e,...t);return qf(r),new Mn(n,null,r)}{if(!(n instanceof It||n instanceof Mn))throw new J(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return qf(r),new Mn(n.firestore,null,r)}}function jl(n,e,...t){if(n=Qe(n),arguments.length===1&&(e=ug.newId()),um("doc","path",e),n instanceof ma){const r=Ce.fromString(e,...t);return jf(r),new It(n,null,new X(r))}{if(!(n instanceof It||n instanceof Mn))throw new J(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return jf(r),new It(n.firestore,n instanceof Mn?n.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Wg(this,"async_queue_retry"),this.Vu=()=>{const r=rl();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=rl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=rl();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Nn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ei(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw gn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=zc.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ne()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class ya extends ma{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Wf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wf(e),this._firestoreClient=void 0,await e}}}function $0(n,e){const t=typeof n=="object"?n:Ep(),r=typeof n=="string"?n:"(default)",s=mc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=hE("firestore");i&&B0(s,...i)}return s}function hm(n){if(n._terminated)throw new J(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||j0(n),n._firestoreClient}function j0(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,d){return new gA(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,cm(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new O0(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Yr(Je.fromBase64String(e))}catch(t){throw new J(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Yr(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=/^__.*__$/;class z0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ti(e,this.data,t,this.fieldTransforms)}}class fm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new qn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function dm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class Xc{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Xc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return jo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(dm(this.Cu)&&q0.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class H0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||da(e)}Qu(e,t,r,s=!1){return new Xc({Cu:e,methodName:t,qu:r,path:Ke.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pm(n){const e=n._freezeSettings(),t=da(n._databaseId);return new H0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function W0(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Zc("Data must be an object, but it was:",o,r);const l=gm(r,o);let c,h;if(i.merge)c=new yt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const m=ql(e,g,t);if(!o.contains(m))throw new J(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);_m(d,m)||d.push(m)}c=new yt(d),h=o.fieldTransforms.filter(g=>c.covers(g.field))}else c=null,h=o.fieldTransforms;return new z0(new dt(l),c,h)}class Ea extends Qc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ea}}function K0(n,e,t,r){const s=n.Qu(1,e,t);Zc("Data must be an object, but it was:",s,r);const i=[],o=dt.empty();_r(r,(c,h)=>{const d=eu(e,c,t);h=Qe(h);const g=s.Nu(d);if(h instanceof Ea)i.push(d);else{const m=Ta(h,g);m!=null&&(i.push(d),o.set(d,m))}});const l=new yt(i);return new fm(o,l,s.fieldTransforms)}function G0(n,e,t,r,s,i){const o=n.Qu(1,e,t),l=[ql(e,r,t)],c=[s];if(i.length%2!=0)throw new J(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(ql(e,i[m])),c.push(i[m+1]);const h=[],d=dt.empty();for(let m=l.length-1;m>=0;--m)if(!_m(h,l[m])){const I=l[m];let x=c[m];x=Qe(x);const C=o.Nu(I);if(x instanceof Ea)h.push(I);else{const D=Ta(x,C);D!=null&&(h.push(I),d.set(I,D))}}const g=new yt(h);return new fm(d,g,o.fieldTransforms)}function Ta(n,e){if(mm(n=Qe(n)))return Zc("Unsupported field value:",e,n),gm(n,e);if(n instanceof Qc)return function(r,s){if(!dm(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=Ta(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return FA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=$e.fromDate(r);return{timestampValue:Uo(s.serializer,i)}}if(r instanceof $e){const i=new $e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uo(s.serializer,i)}}if(r instanceof Jc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Yr)return{bytesValue:Lg(s.serializer,r._byteString)};if(r instanceof It){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Mc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Yc)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Vc(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Gc(r)}`)}(n,e)}function gm(n,e){const t={};return hg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_r(n,(r,s)=>{const i=Ta(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function mm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $e||n instanceof Jc||n instanceof Yr||n instanceof It||n instanceof Qc||n instanceof Yc)}function Zc(n,e,t){if(!mm(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Gc(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function ql(n,e,t){if((e=Qe(e))instanceof va)return e._internalPath;if(typeof e=="string")return eu(n,e);throw jo("Field path arguments must be of type string or ",n,!1,void 0,t)}const Q0=new RegExp("[~\\*/\\[\\]]");function eu(n,e,t){if(e.search(Q0)>=0)throw jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new va(...e.split("."))._internalPath}catch{throw jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function jo(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new J(F.INVALID_ARGUMENT,l+n+c)}function _m(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new J0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class J0 extends ym{data(){return super.data()}}function vm(n,e){return typeof e=="string"?eu(n,e):e instanceof va?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class X0{convertValue(e,t="none"){switch(dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ne()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _r(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ne(o.doubleValue));return new Yc(i)}convertGeoPoint(e){return new Jc(Ne(e.latitude),Ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=kc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ni(e));default:return null}}convertTimestamp(e){const t=Fn(e);return new $e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ce.fromString(e);we(qg(r));const s=new ri(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eR extends ym{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(vm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class po extends eR{data(e={}){return super.data(e)}}class tR{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Zi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new po(this._firestore,this._userDataWriter,r.key,r,new Zi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new po(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new po(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:nR(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function nR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}class rR extends X0{constructor(e){super(),this.firestore=e}convertBytes(e){return new Yr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,t)}}function sR(n){n=Jr(n,_a);const e=Jr(n.firestore,ya),t=hm(e),r=new rR(e);return Y0(n._query),F0(t,n._query).then(s=>new tR(e,r,n,s))}function Kf(n,e,t,...r){n=Jr(n,It);const s=Jr(n.firestore,ya),i=pm(s);let o;return o=typeof(e=Qe(e))=="string"||e instanceof va?G0(i,"updateDoc",n._key,e,t,r):K0(i,"updateDoc",n._key,e),Em(s,[o.toMutation(n._key,zt.exists(!0))])}function iR(n,e){const t=Jr(n.firestore,ya),r=jl(n),s=Z0(n.converter,e);return Em(t,[W0(pm(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function Em(n,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>b0(await M0(r),s,i)),i.promise}(hm(n),e)}(function(e,t=!0){(function(s){es=s})(Xr),qr(new lr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ya(new eA(r.getProvider("auth-internal")),new sA(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),On(uf,"4.7.3",e),On(uf,"4.7.3","esm2017")})();const oR={apiKey:"AIzaSyDRL1O07fHiurMgp89lN54jrx1WqxHPpX4",authDomain:"lernzettel-app-855c8.firebaseapp.com",projectId:"lernzettel-app-855c8",storageBucket:"lernzettel-app-855c8.appspot.com",messagingSenderId:"488095938572",appId:"1:488095938572:web:57963507aec59907755629"},Tm=vp(oR),eo=JI(Tm),to=$0(Tm),aR=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},lR={name:"App",setup(){const n=An(null),e=An(""),t=An(""),r=An([]),s=An(""),i=An(!1),o=An(null),l=An({title:"",content:"",tag:"Deutsch"}),c=Xd(()=>{if(!s.value.trim())return r.value;const U=s.value.toLowerCase();return r.value.filter(W=>W.title.toLowerCase().includes(U)||W.content.toLowerCase().includes(U)||W.tag.toLowerCase().includes(U))});async function h(){try{await Ow(eo,e.value,t.value)}catch(U){alert(U.message)}}async function d(){try{await Nw(eo,e.value,t.value)}catch(U){alert(U.message)}}async function g(){await Uw(eo),location.reload()}async function m(){const U=await sR(Hf(to,"posts"));r.value=[],U.forEach(W=>{const z=W.data();z.deleted||r.value.push({id:W.id,...z})})}function I(){i.value=!0,o.value=null,l.value={title:"",content:"",tag:"Deutsch"}}function x(){i.value=!1,o.value=null,l.value={title:"",content:"",tag:"Deutsch"}}async function C(){if(!(!l.value.title||!l.value.content))try{o.value?(await Kf(jl(to,"posts",o.value),{title:l.value.title,content:l.value.content,tag:l.value.tag}),o.value=null):await iR(Hf(to,"posts"),{title:l.value.title,content:l.value.content,tag:l.value.tag,deleted:!1,date:Date.now()}),x(),m()}catch(U){alert(U.message)}}async function D(U){await Kf(jl(to,"posts",U),{deleted:!0}),m()}function K(U){l.value={title:U.title,content:U.content,tag:U.tag},o.value=U.id,i.value=!0}return kd(()=>{Fw(eo,U=>{console.log("AUTH:",U),U?(n.value=U,m()):n.value=null})}),{user:n,email:e,password:t,posts:r,searchQuery:s,modalOpen:i,editingId:o,form:l,filteredPosts:c,register:h,login:d,logout:g,loadPosts:m,openModal:I,closeModal:x,savePost:C,deletePost:D,editPost:K,marked:Te}}},cR={key:0,class:"auth-screen"},uR={class:"auth-container"},hR={key:1,class:"app-container"},fR={class:"glass"},dR={id:"posts"},pR=["innerHTML"],gR=["onClick"],mR=["onClick"],_R={class:"modal-content glass"},yR={class:"editor-container"},vR=["innerHTML"];function ER(n,e,t,r,s,i){return vs(),Es("div",null,[r.user?(vs(),Es("div",hR,[le("header",fR,[e[15]||(e[15]=le("h1",null,"📚",-1)),br(le("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>r.searchQuery=o),placeholder:"Suchen..."},null,512),[[ws,r.searchQuery]]),le("button",{onClick:e[7]||(e[7]=(...o)=>r.logout&&r.logout(...o))},"Logout")]),le("main",dR,[(vs(!0),Es(Ot,null,iy(r.filteredPosts,o=>(vs(),Es("div",{key:o.id,class:"card glass"},[le("h3",null,il(o.title),1),le("div",{innerHTML:r.marked.parse(o.content||"")},null,8,pR),le("span",{class:Ws(["tag",o.tag])},il(o.tag),3),e[16]||(e[16]=le("br",null,null,-1)),le("button",{onClick:l=>r.editPost(o)},"✏️",8,gR),le("button",{onClick:l=>r.deletePost(o.id)},"🗑️",8,mR)]))),128))]),le("button",{class:"fab",onClick:e[8]||(e[8]=(...o)=>r.openModal&&r.openModal(...o))},"+"),le("div",{class:Ws(["modal",{hidden:!r.modalOpen}])},[le("div",_R,[e[18]||(e[18]=le("h3",null,"Markdown Editor",-1)),br(le("input",{"onUpdate:modelValue":e[9]||(e[9]=o=>r.form.title=o),placeholder:"Titel"},null,512),[[ws,r.form.title]]),le("div",yR,[br(le("textarea",{"onUpdate:modelValue":e[10]||(e[10]=o=>r.form.content=o),placeholder:"# Überschrift"},null,512),[[ws,r.form.content]]),le("div",{id:"preview",innerHTML:r.marked.parse(r.form.content||"")},null,8,vR)]),br(le("select",{"onUpdate:modelValue":e[11]||(e[11]=o=>r.form.tag=o)},[...e[17]||(e[17]=[le("option",null,"Deutsch",-1),le("option",null,"Englisch",-1),le("option",null,"Mathe",-1),le("option",null,"Spanisch",-1),le("option",null,"Physik",-1),le("option",null,"Informatik",-1),le("option",null,"Bio",-1),le("option",null,"Geo",-1),le("option",null,"Geschichte",-1)])],512),[[mv,r.form.tag]]),le("button",{onClick:e[12]||(e[12]=(...o)=>r.savePost&&r.savePost(...o))},"Speichern"),le("button",{onClick:e[13]||(e[13]=(...o)=>r.closeModal&&r.closeModal(...o))},"Abbrechen")])],2)])):(vs(),Es("div",cR,[le("div",uR,[e[14]||(e[14]=le("h2",null,"Login",-1)),br(le("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),placeholder:"Email",onKeyup:e[1]||(e[1]=Rh((...o)=>r.login&&r.login(...o),["enter"]))},null,544),[[ws,r.email]]),br(le("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.password=o),type:"password",placeholder:"Passwort",onKeyup:e[3]||(e[3]=Rh((...o)=>r.login&&r.login(...o),["enter"]))},null,544),[[ws,r.password]]),le("button",{onClick:e[4]||(e[4]=(...o)=>r.register&&r.register(...o))},"Registrieren"),le("button",{onClick:e[5]||(e[5]=(...o)=>r.login&&r.login(...o))},"Login")])]))])}const TR=aR(lR,[["render",ER]]);Ev(TR).mount("#app");
