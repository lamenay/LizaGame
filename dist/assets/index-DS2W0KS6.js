(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function t_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mc={exports:{}},Va={},Ec={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function n_(){if(Fp)return vt;Fp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function g(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,P={};function S(N,ue,Te){this.props=N,this.context=ue,this.refs=P,this.updater=Te||M}S.prototype.isReactComponent={},S.prototype.setState=function(N,ue){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ue,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=S.prototype;function I(N,ue,Te){this.props=N,this.context=ue,this.refs=P,this.updater=Te||M}var G=I.prototype=new _;G.constructor=I,A(G,S.prototype),G.isPureReactComponent=!0;var R=Array.isArray,L=Object.prototype.hasOwnProperty,C={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(N,ue,Te){var Ke,He={},Xe=null,ee=null;if(ue!=null)for(Ke in ue.ref!==void 0&&(ee=ue.ref),ue.key!==void 0&&(Xe=""+ue.key),ue)L.call(ue,Ke)&&!F.hasOwnProperty(Ke)&&(He[Ke]=ue[Ke]);var he=arguments.length-2;if(he===1)He.children=Te;else if(1<he){for(var Ce=Array(he),et=0;et<he;et++)Ce[et]=arguments[et+2];He.children=Ce}if(N&&N.defaultProps)for(Ke in he=N.defaultProps,he)He[Ke]===void 0&&(He[Ke]=he[Ke]);return{$$typeof:s,type:N,key:Xe,ref:ee,props:He,_owner:C.current}}function b(N,ue){return{$$typeof:s,type:N.type,key:ue,ref:N.ref,props:N.props,_owner:N._owner}}function O(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function Y(N){var ue={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Te){return ue[Te]})}var K=/\/+/g;function ne(N,ue){return typeof N=="object"&&N!==null&&N.key!=null?Y(""+N.key):ue.toString(36)}function B(N,ue,Te,Ke,He){var Xe=typeof N;(Xe==="undefined"||Xe==="boolean")&&(N=null);var ee=!1;if(N===null)ee=!0;else switch(Xe){case"string":case"number":ee=!0;break;case"object":switch(N.$$typeof){case s:case e:ee=!0}}if(ee)return ee=N,He=He(ee),N=Ke===""?"."+ne(ee,0):Ke,R(He)?(Te="",N!=null&&(Te=N.replace(K,"$&/")+"/"),B(He,ue,Te,"",function(et){return et})):He!=null&&(O(He)&&(He=b(He,Te+(!He.key||ee&&ee.key===He.key?"":(""+He.key).replace(K,"$&/")+"/")+N)),ue.push(He)),1;if(ee=0,Ke=Ke===""?".":Ke+":",R(N))for(var he=0;he<N.length;he++){Xe=N[he];var Ce=Ke+ne(Xe,he);ee+=B(Xe,ue,Te,Ce,He)}else if(Ce=g(N),typeof Ce=="function")for(N=Ce.call(N),he=0;!(Xe=N.next()).done;)Xe=Xe.value,Ce=Ke+ne(Xe,he++),ee+=B(Xe,ue,Te,Ce,He);else if(Xe==="object")throw ue=String(N),Error("Objects are not valid as a React child (found: "+(ue==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ue)+"). If you meant to render a collection of children, use an array instead.");return ee}function $(N,ue,Te){if(N==null)return N;var Ke=[],He=0;return B(N,Ke,"","",function(Xe){return ue.call(Te,Xe,He++)}),Ke}function de(N){if(N._status===-1){var ue=N._result;ue=ue(),ue.then(function(Te){(N._status===0||N._status===-1)&&(N._status=1,N._result=Te)},function(Te){(N._status===0||N._status===-1)&&(N._status=2,N._result=Te)}),N._status===-1&&(N._status=0,N._result=ue)}if(N._status===1)return N._result.default;throw N._result}var ie={current:null},Q={transition:null},Z={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:Q,ReactCurrentOwner:C};function W(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:$,forEach:function(N,ue,Te){$(N,function(){ue.apply(this,arguments)},Te)},count:function(N){var ue=0;return $(N,function(){ue++}),ue},toArray:function(N){return $(N,function(ue){return ue})||[]},only:function(N){if(!O(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},vt.Component=S,vt.Fragment=n,vt.Profiler=o,vt.PureComponent=I,vt.StrictMode=r,vt.Suspense=p,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,vt.act=W,vt.cloneElement=function(N,ue,Te){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Ke=A({},N.props),He=N.key,Xe=N.ref,ee=N._owner;if(ue!=null){if(ue.ref!==void 0&&(Xe=ue.ref,ee=C.current),ue.key!==void 0&&(He=""+ue.key),N.type&&N.type.defaultProps)var he=N.type.defaultProps;for(Ce in ue)L.call(ue,Ce)&&!F.hasOwnProperty(Ce)&&(Ke[Ce]=ue[Ce]===void 0&&he!==void 0?he[Ce]:ue[Ce])}var Ce=arguments.length-2;if(Ce===1)Ke.children=Te;else if(1<Ce){he=Array(Ce);for(var et=0;et<Ce;et++)he[et]=arguments[et+2];Ke.children=he}return{$$typeof:s,type:N.type,key:He,ref:Xe,props:Ke,_owner:ee}},vt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},vt.createElement=E,vt.createFactory=function(N){var ue=E.bind(null,N);return ue.type=N,ue},vt.createRef=function(){return{current:null}},vt.forwardRef=function(N){return{$$typeof:d,render:N}},vt.isValidElement=O,vt.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:de}},vt.memo=function(N,ue){return{$$typeof:m,type:N,compare:ue===void 0?null:ue}},vt.startTransition=function(N){var ue=Q.transition;Q.transition={};try{N()}finally{Q.transition=ue}},vt.unstable_act=W,vt.useCallback=function(N,ue){return ie.current.useCallback(N,ue)},vt.useContext=function(N){return ie.current.useContext(N)},vt.useDebugValue=function(){},vt.useDeferredValue=function(N){return ie.current.useDeferredValue(N)},vt.useEffect=function(N,ue){return ie.current.useEffect(N,ue)},vt.useId=function(){return ie.current.useId()},vt.useImperativeHandle=function(N,ue,Te){return ie.current.useImperativeHandle(N,ue,Te)},vt.useInsertionEffect=function(N,ue){return ie.current.useInsertionEffect(N,ue)},vt.useLayoutEffect=function(N,ue){return ie.current.useLayoutEffect(N,ue)},vt.useMemo=function(N,ue){return ie.current.useMemo(N,ue)},vt.useReducer=function(N,ue,Te){return ie.current.useReducer(N,ue,Te)},vt.useRef=function(N){return ie.current.useRef(N)},vt.useState=function(N){return ie.current.useState(N)},vt.useSyncExternalStore=function(N,ue,Te){return ie.current.useSyncExternalStore(N,ue,Te)},vt.useTransition=function(){return ie.current.useTransition()},vt.version="18.3.1",vt}var Op;function Zf(){return Op||(Op=1,Ec.exports=n_()),Ec.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function i_(){if(Bp)return Va;Bp=1;var s=Zf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var v,x={},g=null,M=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(x[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)x[v]===void 0&&(x[v]=p[v]);return{$$typeof:e,type:d,key:g,ref:M,props:x,_owner:o.current}}return Va.Fragment=n,Va.jsx=c,Va.jsxs=c,Va}var kp;function r_(){return kp||(kp=1,Mc.exports=i_()),Mc.exports}var xe=r_(),ul={},wc={exports:{}},qn={},Tc={exports:{}},Ac={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function s_(){return zp||(zp=1,(function(s){function e(Q,Z){var W=Q.length;Q.push(Z);e:for(;0<W;){var N=W-1>>>1,ue=Q[N];if(0<o(ue,Z))Q[N]=Z,Q[W]=ue,W=N;else break e}}function n(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var Z=Q[0],W=Q.pop();if(W!==Z){Q[0]=W;e:for(var N=0,ue=Q.length,Te=ue>>>1;N<Te;){var Ke=2*(N+1)-1,He=Q[Ke],Xe=Ke+1,ee=Q[Xe];if(0>o(He,W))Xe<ue&&0>o(ee,He)?(Q[N]=ee,Q[Xe]=W,N=Xe):(Q[N]=He,Q[Ke]=W,N=Ke);else if(Xe<ue&&0>o(ee,W))Q[N]=ee,Q[Xe]=W,N=Xe;else break e}}return Z}function o(Q,Z){var W=Q.sortIndex-Z.sortIndex;return W!==0?W:Q.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var p=[],m=[],v=1,x=null,g=3,M=!1,A=!1,P=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(Q){for(var Z=n(m);Z!==null;){if(Z.callback===null)r(m);else if(Z.startTime<=Q)r(m),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=n(m)}}function R(Q){if(P=!1,G(Q),!A)if(n(p)!==null)A=!0,de(L);else{var Z=n(m);Z!==null&&ie(R,Z.startTime-Q)}}function L(Q,Z){A=!1,P&&(P=!1,_(E),E=-1),M=!0;var W=g;try{for(G(Z),x=n(p);x!==null&&(!(x.expirationTime>Z)||Q&&!Y());){var N=x.callback;if(typeof N=="function"){x.callback=null,g=x.priorityLevel;var ue=N(x.expirationTime<=Z);Z=s.unstable_now(),typeof ue=="function"?x.callback=ue:x===n(p)&&r(p),G(Z)}else r(p);x=n(p)}if(x!==null)var Te=!0;else{var Ke=n(m);Ke!==null&&ie(R,Ke.startTime-Z),Te=!1}return Te}finally{x=null,g=W,M=!1}}var C=!1,F=null,E=-1,b=5,O=-1;function Y(){return!(s.unstable_now()-O<b)}function K(){if(F!==null){var Q=s.unstable_now();O=Q;var Z=!0;try{Z=F(!0,Q)}finally{Z?ne():(C=!1,F=null)}}else C=!1}var ne;if(typeof I=="function")ne=function(){I(K)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,$=B.port2;B.port1.onmessage=K,ne=function(){$.postMessage(null)}}else ne=function(){S(K,0)};function de(Q){F=Q,C||(C=!0,ne())}function ie(Q,Z){E=S(function(){Q(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Q){Q.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,de(L))},s.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<Q?Math.floor(1e3/Q):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(Q){switch(g){case 1:case 2:case 3:var Z=3;break;default:Z=g}var W=g;g=Z;try{return Q()}finally{g=W}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Q,Z){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var W=g;g=Q;try{return Z()}finally{g=W}},s.unstable_scheduleCallback=function(Q,Z,W){var N=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?N+W:N):W=N,Q){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=W+ue,Q={id:v++,callback:Z,priorityLevel:Q,startTime:W,expirationTime:ue,sortIndex:-1},W>N?(Q.sortIndex=W,e(m,Q),n(p)===null&&Q===n(m)&&(P?(_(E),E=-1):P=!0,ie(R,W-N))):(Q.sortIndex=ue,e(p,Q),A||M||(A=!0,de(L))),Q},s.unstable_shouldYield=Y,s.unstable_wrapCallback=function(Q){var Z=g;return function(){var W=g;g=Z;try{return Q.apply(this,arguments)}finally{g=W}}}})(Ac)),Ac}var Hp;function a_(){return Hp||(Hp=1,Tc.exports=s_()),Tc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function o_(){if(Vp)return qn;Vp=1;var s=Zf(),e=a_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function g(t){return p.call(x,t)?!0:p.call(v,t)?!1:m.test(t)?x[t]=!0:(v[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function P(t,i,a,l,f,h,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new P(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new P(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new P(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new P(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new P(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new P(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new P(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new P(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new P(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,I);S[i]=new P(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,I);S[i]=new P(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,I);S[i]=new P(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new P(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new P(t,1,!1,t.toLowerCase(),null,!0,!0)});function G(t,i,a,l){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,f,l)&&(a=null),l||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),C=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),Y=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),Q=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,N;function ue(t){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var Te=!1;function Ke(t,i){if(!t||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(me){var l=me}Reflect.construct(t,[],i)}else{try{i.call()}catch(me){l=me}t.call(i.prototype)}else{try{throw Error()}catch(me){l=me}t()}}catch(me){if(me&&l&&typeof me.stack=="string"){for(var f=me.stack.split(`
`),h=l.stack.split(`
`),w=f.length-1,U=h.length-1;1<=w&&0<=U&&f[w]!==h[U];)U--;for(;1<=w&&0<=U;w--,U--)if(f[w]!==h[U]){if(w!==1||U!==1)do if(w--,U--,0>U||f[w]!==h[U]){var H=`
`+f[w].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=w&&0<=U);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ue(t):""}function He(t){switch(t.tag){case 5:return ue(t.type);case 16:return ue("Lazy");case 13:return ue("Suspense");case 19:return ue("SuspenseList");case 0:case 2:case 15:return t=Ke(t.type,!1),t;case 11:return t=Ke(t.type.render,!1),t;case 1:return t=Ke(t.type,!0),t;default:return""}}function Xe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case C:return"Portal";case b:return"Profiler";case E:return"StrictMode";case ne:return"Suspense";case B:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y:return(t.displayName||"Context")+".Consumer";case O:return(t._context.displayName||"Context")+".Provider";case K:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return i=t.displayName||null,i!==null?i:Xe(t.type)||"Memo";case de:i=t._payload,t=t._init;try{return Xe(t(i))}catch{}}return null}function ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xe(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ce(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t){var i=Ce(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){l=""+w,h.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ke(t){t._valueTracker||(t._valueTracker=et(t))}function pe(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ce(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function It(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ut(t,i){var a=i.checked;return W({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function _t(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=he(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Rt(t,i){i=i.checked,i!=null&&G(t,"checked",i,!1)}function ct(t,i){Rt(t,i);var a=he(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ht(t,i.type,a):i.hasOwnProperty("defaultValue")&&Ht(t,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function At(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ht(t,i,a){(i!=="number"||It(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var $t=Array.isArray;function Ct(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+he(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Bt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return W({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function X(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if($t(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:he(a)}}function en(t,i){var a=he(i.value),l=he(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function St(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function D(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?D(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var j,le=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(j=j||document.createElement("div"),j.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=j.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ge(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var V={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_e=["Webkit","ms","Moz","O"];Object.keys(V).forEach(function(t){_e.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),V[i]=V[t]})});function J(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||V.hasOwnProperty(t)&&V[t]?(""+i).trim():i+"px"}function oe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=J(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var ye=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ie(t,i){if(i){if(ye[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ae(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function ze(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $e=null,it=null,k=null;function Pe(t){if(t=Ra(t)){if(typeof $e!="function")throw Error(n(280));var i=t.stateNode;i&&(i=wo(i),$e(t.stateNode,t.type,i))}}function ve(t){it?k?k.push(t):k=[t]:it=t}function Me(){if(it){var t=it,i=k;if(k=it=null,Pe(t),i)for(t=0;t<i.length;t++)Pe(i[t])}}function Re(t,i){return t(i)}function Se(){}var Ye=!1;function Ve(t,i,a){if(Ye)return t(i,a);Ye=!0;try{return Re(t,i,a)}finally{Ye=!1,(it!==null||k!==null)&&(Se(),Me())}}function pt(t,i){var a=t.stateNode;if(a===null)return null;var l=wo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var dt=!1;if(d)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){dt=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{dt=!1}function cn(t,i,a,l,f,h,w,U,H){var me=Array.prototype.slice.call(arguments,3);try{i.apply(a,me)}catch(we){this.onError(we)}}var zn=!1,li=null,jn=!1,Jn=null,Qi={onError:function(t){zn=!0,li=t}};function xi(t,i,a,l,f,h,w,U,H){zn=!1,li=null,cn.apply(Qi,arguments)}function Bi(t,i,a,l,f,h,w,U,H){if(xi.apply(this,arguments),zn){if(zn){var me=li;zn=!1,li=null}else throw Error(n(198));jn||(jn=!0,Jn=me)}}function an(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Qn(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Si(t){if(an(t)!==t)throw Error(n(188))}function Hn(t){var i=t.alternate;if(!i){if(i=an(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return Si(f),t;if(h===l)return Si(f),i;h=h.sibling}throw Error(n(188))}if(a.return!==l.return)a=f,l=h;else{for(var w=!1,U=f.child;U;){if(U===a){w=!0,a=f,l=h;break}if(U===l){w=!0,l=f,a=h;break}U=U.sibling}if(!w){for(U=h.child;U;){if(U===a){w=!0,a=h,l=f;break}if(U===l){w=!0,l=h,a=f;break}U=U.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Un(t){return t=Hn(t),t!==null?Er(t):null}function Er(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Er(t);if(i!==null)return i;t=t.sibling}return null}var ki=e.unstable_scheduleCallback,er=e.unstable_cancelCallback,wr=e.unstable_shouldYield,ca=e.unstable_requestPaint,Vt=e.unstable_now,Ss=e.unstable_getCurrentPriorityLevel,yi=e.unstable_ImmediatePriority,tr=e.unstable_UserBlockingPriority,T=e.unstable_NormalPriority,z=e.unstable_LowPriority,fe=e.unstable_IdlePriority,se=null,re=null;function Oe(t){if(re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(se,t,void 0,(t.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:tt,Fe=Math.log,je=Math.LN2;function tt(t){return t>>>=0,t===0?32:31-(Fe(t)/je|0)|0}var lt=64,ht=4194304;function qe(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yt(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,w=a&268435455;if(w!==0){var U=w&~f;U!==0?l=qe(U):(h&=w,h!==0&&(l=qe(h)))}else w=a&~f,w!==0?l=qe(w):h!==0&&(l=qe(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Ue(i),f=1<<a,l|=t[a],i&=~f;return l}function tn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kt(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var w=31-Ue(h),U=1<<w,H=f[w];H===-1?((U&a)===0||(U&l)!==0)&&(f[w]=tn(U,i)):H<=i&&(t.expiredLanes|=U),h&=~U}}function Dt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hn(){var t=lt;return lt<<=1,(lt&4194240)===0&&(lt=64),t}function Ge(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function on(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ue(i),t[i]=a}function Mt(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-Ue(a),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,a&=~h}}function An(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Ue(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}var mt=0;function Mi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var nr,Pt,qt,Ei,Ut,ui=!1,wi=[],Ti=null,Tr=null,Ar=null,fa=new Map,da=new Map,Rr=[],E0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xd(t,i){switch(t){case"focusin":case"focusout":Ti=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":fa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(i.pointerId)}}function ha(t,i,a,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Ra(i),i!==null&&Pt(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function w0(t,i,a,l,f){switch(i){case"focusin":return Ti=ha(Ti,t,i,a,l,f),!0;case"dragenter":return Tr=ha(Tr,t,i,a,l,f),!0;case"mouseover":return Ar=ha(Ar,t,i,a,l,f),!0;case"pointerover":var h=f.pointerId;return fa.set(h,ha(fa.get(h)||null,t,i,a,l,f)),!0;case"gotpointercapture":return h=f.pointerId,da.set(h,ha(da.get(h)||null,t,i,a,l,f)),!0}return!1}function Sd(t){var i=jr(t.target);if(i!==null){var a=an(i);if(a!==null){if(i=a.tag,i===13){if(i=Qn(a),i!==null){t.blockedOn=i,Ut(t.priority,function(){qt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=$l(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Le=l,a.target.dispatchEvent(l),Le=null}else return i=Ra(a),i!==null&&Pt(i),t.blockedOn=a,!1;i.shift()}return!0}function yd(t,i,a){uo(t)&&a.delete(i)}function T0(){ui=!1,Ti!==null&&uo(Ti)&&(Ti=null),Tr!==null&&uo(Tr)&&(Tr=null),Ar!==null&&uo(Ar)&&(Ar=null),fa.forEach(yd),da.forEach(yd)}function pa(t,i){t.blockedOn===i&&(t.blockedOn=null,ui||(ui=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,T0)))}function ma(t){function i(f){return pa(f,t)}if(0<wi.length){pa(wi[0],t);for(var a=1;a<wi.length;a++){var l=wi[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Ti!==null&&pa(Ti,t),Tr!==null&&pa(Tr,t),Ar!==null&&pa(Ar,t),fa.forEach(i),da.forEach(i),a=0;a<Rr.length;a++)l=Rr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Rr.length&&(a=Rr[0],a.blockedOn===null);)Sd(a),a.blockedOn===null&&Rr.shift()}var ys=R.ReactCurrentBatchConfig,co=!0;function A0(t,i,a,l){var f=mt,h=ys.transition;ys.transition=null;try{mt=1,Kl(t,i,a,l)}finally{mt=f,ys.transition=h}}function R0(t,i,a,l){var f=mt,h=ys.transition;ys.transition=null;try{mt=4,Kl(t,i,a,l)}finally{mt=f,ys.transition=h}}function Kl(t,i,a,l){if(co){var f=$l(t,i,a,l);if(f===null)du(t,i,l,fo,a),xd(t,l);else if(w0(f,t,i,a,l))l.stopPropagation();else if(xd(t,l),i&4&&-1<E0.indexOf(t)){for(;f!==null;){var h=Ra(f);if(h!==null&&nr(h),h=$l(t,i,a,l),h===null&&du(t,i,l,fo,a),h===f)break;f=h}f!==null&&l.stopPropagation()}else du(t,i,l,null,a)}}var fo=null;function $l(t,i,a,l){if(fo=null,t=ze(l),t=jr(t),t!==null)if(i=an(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Qn(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return fo=t,null}function Md(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ss()){case yi:return 1;case tr:return 4;case T:case z:return 16;case fe:return 536870912;default:return 16}default:return 16}}var Cr=null,Zl=null,ho=null;function Ed(){if(ho)return ho;var t,i=Zl,a=i.length,l,f="value"in Cr?Cr.value:Cr.textContent,h=f.length;for(t=0;t<a&&i[t]===f[t];t++);var w=a-t;for(l=1;l<=w&&i[a-l]===f[h-l];l++);return ho=f.slice(t,1<l?1-l:void 0)}function po(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function mo(){return!0}function wd(){return!1}function ei(t){function i(a,l,f,h,w){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=w,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?mo:wd,this.isPropagationStopped=wd,this}return W(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),i}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=ei(Ms),ga=W({},Ms,{view:0,detail:0}),C0=ei(ga),Jl,Ql,_a,go=W({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_a&&(_a&&t.type==="mousemove"?(Jl=t.screenX-_a.screenX,Ql=t.screenY-_a.screenY):Ql=Jl=0,_a=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Td=ei(go),b0=W({},go,{dataTransfer:0}),P0=ei(b0),L0=W({},ga,{relatedTarget:0}),eu=ei(L0),N0=W({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=ei(N0),I0=W({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U0=ei(I0),F0=W({},Ms,{data:0}),Ad=ei(F0),O0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=k0[t])?!!i[t]:!1}function tu(){return z0}var H0=W({},ga,{key:function(t){if(t.key){var i=O0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=po(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?B0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?po(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?po(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V0=ei(H0),G0=W({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=ei(G0),W0=W({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),X0=ei(W0),Y0=W({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),q0=ei(Y0),K0=W({},go,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$0=ei(K0),Z0=[9,13,27,32],nu=d&&"CompositionEvent"in window,va=null;d&&"documentMode"in document&&(va=document.documentMode);var j0=d&&"TextEvent"in window&&!va,Cd=d&&(!nu||va&&8<va&&11>=va),bd=" ",Pd=!1;function Ld(t,i){switch(t){case"keyup":return Z0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function J0(t,i){switch(t){case"compositionend":return Nd(i);case"keypress":return i.which!==32?null:(Pd=!0,bd);case"textInput":return t=i.data,t===bd&&Pd?null:t;default:return null}}function Q0(t,i){if(Es)return t==="compositionend"||!nu&&Ld(t,i)?(t=Ed(),ho=Zl=Cr=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Cd&&i.locale!=="ko"?null:i.data;default:return null}}var eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!eg[t.type]:i==="textarea"}function Id(t,i,a,l){ve(l),i=yo(i,"onChange"),0<i.length&&(a=new jl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var xa=null,Sa=null;function tg(t){Jd(t,0)}function _o(t){var i=Cs(t);if(pe(i))return t}function ng(t,i){if(t==="change")return i}var Ud=!1;if(d){var iu;if(d){var ru="oninput"in document;if(!ru){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),ru=typeof Fd.oninput=="function"}iu=ru}else iu=!1;Ud=iu&&(!document.documentMode||9<document.documentMode)}function Od(){xa&&(xa.detachEvent("onpropertychange",Bd),Sa=xa=null)}function Bd(t){if(t.propertyName==="value"&&_o(Sa)){var i=[];Id(i,Sa,t,ze(t)),Ve(tg,i)}}function ig(t,i,a){t==="focusin"?(Od(),xa=i,Sa=a,xa.attachEvent("onpropertychange",Bd)):t==="focusout"&&Od()}function rg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _o(Sa)}function sg(t,i){if(t==="click")return _o(i)}function ag(t,i){if(t==="input"||t==="change")return _o(i)}function og(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ai=typeof Object.is=="function"?Object.is:og;function ya(t,i){if(Ai(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!p.call(i,f)||!Ai(t[f],i[f]))return!1}return!0}function kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zd(t,i){var a=kd(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kd(a)}}function Hd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Hd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Vd(){for(var t=window,i=It();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=It(t.document)}return i}function su(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function lg(t){var i=Vd(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Hd(a.ownerDocument.documentElement,a)){if(l!==null&&su(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=zd(a,h);var w=zd(a,l);f&&w&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ug=d&&"documentMode"in document&&11>=document.documentMode,ws=null,au=null,Ma=null,ou=!1;function Gd(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ou||ws==null||ws!==It(l)||(l=ws,"selectionStart"in l&&su(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ma&&ya(Ma,l)||(Ma=l,l=yo(au,"onSelect"),0<l.length&&(i=new jl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ws)))}function vo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Ts={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},lu={},Wd={};d&&(Wd=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function xo(t){if(lu[t])return lu[t];if(!Ts[t])return t;var i=Ts[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Wd)return lu[t]=i[a];return t}var Xd=xo("animationend"),Yd=xo("animationiteration"),qd=xo("animationstart"),Kd=xo("transitionend"),$d=new Map,Zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,i){$d.set(t,i),u(i,[t])}for(var uu=0;uu<Zd.length;uu++){var cu=Zd[uu],cg=cu.toLowerCase(),fg=cu[0].toUpperCase()+cu.slice(1);br(cg,"on"+fg)}br(Xd,"onAnimationEnd"),br(Yd,"onAnimationIteration"),br(qd,"onAnimationStart"),br("dblclick","onDoubleClick"),br("focusin","onFocus"),br("focusout","onBlur"),br(Kd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ea));function jd(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Bi(l,i,void 0,t),t.currentTarget=null}function Jd(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var w=l.length-1;0<=w;w--){var U=l[w],H=U.instance,me=U.currentTarget;if(U=U.listener,H!==h&&f.isPropagationStopped())break e;jd(f,U,me),h=H}else for(w=0;w<l.length;w++){if(U=l[w],H=U.instance,me=U.currentTarget,U=U.listener,H!==h&&f.isPropagationStopped())break e;jd(f,U,me),h=H}}}if(jn)throw t=Jn,jn=!1,Jn=null,t}function Gt(t,i){var a=i[vu];a===void 0&&(a=i[vu]=new Set);var l=t+"__bubble";a.has(l)||(Qd(i,t,2,!1),a.add(l))}function fu(t,i,a){var l=0;i&&(l|=4),Qd(a,t,l,i)}var So="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[So]){t[So]=!0,r.forEach(function(a){a!=="selectionchange"&&(dg.has(a)||fu(a,!1,t),fu(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[So]||(i[So]=!0,fu("selectionchange",!1,i))}}function Qd(t,i,a,l){switch(Md(i)){case 1:var f=A0;break;case 4:f=R0;break;default:f=Kl}a=f.bind(null,i,a,t),f=void 0,!dt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function du(t,i,a,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var U=l.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(w===4)for(w=l.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;w=w.return}for(;U!==null;){if(w=jr(U),w===null)return;if(H=w.tag,H===5||H===6){l=h=w;continue e}U=U.parentNode}}l=l.return}Ve(function(){var me=h,we=ze(a),be=[];e:{var Ee=$d.get(t);if(Ee!==void 0){var We=jl,Je=t;switch(t){case"keypress":if(po(a)===0)break e;case"keydown":case"keyup":We=V0;break;case"focusin":Je="focus",We=eu;break;case"focusout":Je="blur",We=eu;break;case"beforeblur":case"afterblur":We=eu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Td;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=P0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=X0;break;case Xd:case Yd:case qd:We=D0;break;case Kd:We=q0;break;case"scroll":We=C0;break;case"wheel":We=$0;break;case"copy":case"cut":case"paste":We=U0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=Rd}var Qe=(i&4)!==0,ln=!Qe&&t==="scroll",ae=Qe?Ee!==null?Ee+"Capture":null:Ee;Qe=[];for(var q=me,ce;q!==null;){ce=q;var Ne=ce.stateNode;if(ce.tag===5&&Ne!==null&&(ce=Ne,ae!==null&&(Ne=pt(q,ae),Ne!=null&&Qe.push(Ta(q,Ne,ce)))),ln)break;q=q.return}0<Qe.length&&(Ee=new We(Ee,Je,null,a,we),be.push({event:Ee,listeners:Qe}))}}if((i&7)===0){e:{if(Ee=t==="mouseover"||t==="pointerover",We=t==="mouseout"||t==="pointerout",Ee&&a!==Le&&(Je=a.relatedTarget||a.fromElement)&&(jr(Je)||Je[ir]))break e;if((We||Ee)&&(Ee=we.window===we?we:(Ee=we.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,We?(Je=a.relatedTarget||a.toElement,We=me,Je=Je?jr(Je):null,Je!==null&&(ln=an(Je),Je!==ln||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(We=null,Je=me),We!==Je)){if(Qe=Td,Ne="onMouseLeave",ae="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(Qe=Rd,Ne="onPointerLeave",ae="onPointerEnter",q="pointer"),ln=We==null?Ee:Cs(We),ce=Je==null?Ee:Cs(Je),Ee=new Qe(Ne,q+"leave",We,a,we),Ee.target=ln,Ee.relatedTarget=ce,Ne=null,jr(we)===me&&(Qe=new Qe(ae,q+"enter",Je,a,we),Qe.target=ce,Qe.relatedTarget=ln,Ne=Qe),ln=Ne,We&&Je)t:{for(Qe=We,ae=Je,q=0,ce=Qe;ce;ce=As(ce))q++;for(ce=0,Ne=ae;Ne;Ne=As(Ne))ce++;for(;0<q-ce;)Qe=As(Qe),q--;for(;0<ce-q;)ae=As(ae),ce--;for(;q--;){if(Qe===ae||ae!==null&&Qe===ae.alternate)break t;Qe=As(Qe),ae=As(ae)}Qe=null}else Qe=null;We!==null&&eh(be,Ee,We,Qe,!1),Je!==null&&ln!==null&&eh(be,ln,Je,Qe,!0)}}e:{if(Ee=me?Cs(me):window,We=Ee.nodeName&&Ee.nodeName.toLowerCase(),We==="select"||We==="input"&&Ee.type==="file")var nt=ng;else if(Dd(Ee))if(Ud)nt=ag;else{nt=rg;var rt=ig}else(We=Ee.nodeName)&&We.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(nt=sg);if(nt&&(nt=nt(t,me))){Id(be,nt,a,we);break e}rt&&rt(t,Ee,me),t==="focusout"&&(rt=Ee._wrapperState)&&rt.controlled&&Ee.type==="number"&&Ht(Ee,"number",Ee.value)}switch(rt=me?Cs(me):window,t){case"focusin":(Dd(rt)||rt.contentEditable==="true")&&(ws=rt,au=me,Ma=null);break;case"focusout":Ma=au=ws=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Gd(be,a,we);break;case"selectionchange":if(ug)break;case"keydown":case"keyup":Gd(be,a,we)}var st;if(nu)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Es?Ld(t,a)&&(at="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(Cd&&a.locale!=="ko"&&(Es||at!=="onCompositionStart"?at==="onCompositionEnd"&&Es&&(st=Ed()):(Cr=we,Zl="value"in Cr?Cr.value:Cr.textContent,Es=!0)),rt=yo(me,at),0<rt.length&&(at=new Ad(at,t,null,a,we),be.push({event:at,listeners:rt}),st?at.data=st:(st=Nd(a),st!==null&&(at.data=st)))),(st=j0?J0(t,a):Q0(t,a))&&(me=yo(me,"onBeforeInput"),0<me.length&&(we=new Ad("onBeforeInput","beforeinput",null,a,we),be.push({event:we,listeners:me}),we.data=st))}Jd(be,i)})}function Ta(t,i,a){return{instance:t,listener:i,currentTarget:a}}function yo(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=pt(t,a),h!=null&&l.unshift(Ta(t,h,f)),h=pt(t,i),h!=null&&l.push(Ta(t,h,f))),t=t.return}return l}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eh(t,i,a,l,f){for(var h=i._reactName,w=[];a!==null&&a!==l;){var U=a,H=U.alternate,me=U.stateNode;if(H!==null&&H===l)break;U.tag===5&&me!==null&&(U=me,f?(H=pt(a,h),H!=null&&w.unshift(Ta(a,H,U))):f||(H=pt(a,h),H!=null&&w.push(Ta(a,H,U)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var hg=/\r\n?/g,pg=/\u0000|\uFFFD/g;function th(t){return(typeof t=="string"?t:""+t).replace(hg,`
`).replace(pg,"")}function Mo(t,i,a){if(i=th(i),th(t)!==i&&a)throw Error(n(425))}function Eo(){}var hu=null,pu=null;function mu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gu=typeof setTimeout=="function"?setTimeout:void 0,mg=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,gg=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(t){return nh.resolve(null).then(t).catch(_g)}:gu;function _g(t){setTimeout(function(){throw t})}function _u(t,i){var a=i,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),ma(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);ma(i)}function Pr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function ih(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),zi="__reactFiber$"+Rs,Aa="__reactProps$"+Rs,ir="__reactContainer$"+Rs,vu="__reactEvents$"+Rs,vg="__reactListeners$"+Rs,xg="__reactHandles$"+Rs;function jr(t){var i=t[zi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[ir]||a[zi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=ih(t);t!==null;){if(a=t[zi])return a;t=ih(t)}return i}t=a,a=t.parentNode}return null}function Ra(t){return t=t[zi]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function wo(t){return t[Aa]||null}var xu=[],bs=-1;function Lr(t){return{current:t}}function Wt(t){0>bs||(t.current=xu[bs],xu[bs]=null,bs--)}function zt(t,i){bs++,xu[bs]=t.current,t.current=i}var Nr={},Rn=Lr(Nr),Vn=Lr(!1),Jr=Nr;function Ps(t,i){var a=t.type.contextTypes;if(!a)return Nr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in a)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Gn(t){return t=t.childContextTypes,t!=null}function To(){Wt(Vn),Wt(Rn)}function rh(t,i,a){if(Rn.current!==Nr)throw Error(n(168));zt(Rn,i),zt(Vn,a)}function sh(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,ee(t)||"Unknown",f));return W({},a,l)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,Jr=Rn.current,zt(Rn,t),zt(Vn,Vn.current),!0}function ah(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=sh(t,i,Jr),l.__reactInternalMemoizedMergedChildContext=t,Wt(Vn),Wt(Rn),zt(Rn,t)):Wt(Vn),zt(Vn,a)}var rr=null,Ro=!1,Su=!1;function oh(t){rr===null?rr=[t]:rr.push(t)}function Sg(t){Ro=!0,oh(t)}function Dr(){if(!Su&&rr!==null){Su=!0;var t=0,i=mt;try{var a=rr;for(mt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}rr=null,Ro=!1}catch(f){throw rr!==null&&(rr=rr.slice(t+1)),ki(yi,Dr),f}finally{mt=i,Su=!1}}return null}var Ls=[],Ns=0,Co=null,bo=0,ci=[],fi=0,Qr=null,sr=1,ar="";function es(t,i){Ls[Ns++]=bo,Ls[Ns++]=Co,Co=t,bo=i}function lh(t,i,a){ci[fi++]=sr,ci[fi++]=ar,ci[fi++]=Qr,Qr=t;var l=sr;t=ar;var f=32-Ue(l)-1;l&=~(1<<f),a+=1;var h=32-Ue(i)+f;if(30<h){var w=f-f%5;h=(l&(1<<w)-1).toString(32),l>>=w,f-=w,sr=1<<32-Ue(i)+f|a<<f|l,ar=h+t}else sr=1<<h|a<<f|l,ar=t}function yu(t){t.return!==null&&(es(t,1),lh(t,1,0))}function Mu(t){for(;t===Co;)Co=Ls[--Ns],Ls[Ns]=null,bo=Ls[--Ns],Ls[Ns]=null;for(;t===Qr;)Qr=ci[--fi],ci[fi]=null,ar=ci[--fi],ci[fi]=null,sr=ci[--fi],ci[fi]=null}var ti=null,ni=null,Kt=!1,Ri=null;function uh(t,i){var a=mi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function ch(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,ti=t,ni=Pr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,ti=t,ni=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Qr!==null?{id:sr,overflow:ar}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=mi(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,ti=t,ni=null,!0):!1;default:return!1}}function Eu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wu(t){if(Kt){var i=ni;if(i){var a=i;if(!ch(t,i)){if(Eu(t))throw Error(n(418));i=Pr(a.nextSibling);var l=ti;i&&ch(t,i)?uh(l,a):(t.flags=t.flags&-4097|2,Kt=!1,ti=t)}}else{if(Eu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Kt=!1,ti=t}}}function fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ti=t}function Po(t){if(t!==ti)return!1;if(!Kt)return fh(t),Kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!mu(t.type,t.memoizedProps)),i&&(i=ni)){if(Eu(t))throw dh(),Error(n(418));for(;i;)uh(t,i),i=Pr(i.nextSibling)}if(fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){ni=Pr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}ni=null}}else ni=ti?Pr(t.stateNode.nextSibling):null;return!0}function dh(){for(var t=ni;t;)t=Pr(t.nextSibling)}function Ds(){ni=ti=null,Kt=!1}function Tu(t){Ri===null?Ri=[t]:Ri.push(t)}var yg=R.ReactCurrentBatchConfig;function Ca(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(w){var U=f.refs;w===null?delete U[h]:U[h]=w},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Lo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function hh(t){var i=t._init;return i(t._payload)}function ph(t){function i(ae,q){if(t){var ce=ae.deletions;ce===null?(ae.deletions=[q],ae.flags|=16):ce.push(q)}}function a(ae,q){if(!t)return null;for(;q!==null;)i(ae,q),q=q.sibling;return null}function l(ae,q){for(ae=new Map;q!==null;)q.key!==null?ae.set(q.key,q):ae.set(q.index,q),q=q.sibling;return ae}function f(ae,q){return ae=Hr(ae,q),ae.index=0,ae.sibling=null,ae}function h(ae,q,ce){return ae.index=ce,t?(ce=ae.alternate,ce!==null?(ce=ce.index,ce<q?(ae.flags|=2,q):ce):(ae.flags|=2,q)):(ae.flags|=1048576,q)}function w(ae){return t&&ae.alternate===null&&(ae.flags|=2),ae}function U(ae,q,ce,Ne){return q===null||q.tag!==6?(q=gc(ce,ae.mode,Ne),q.return=ae,q):(q=f(q,ce),q.return=ae,q)}function H(ae,q,ce,Ne){var nt=ce.type;return nt===F?we(ae,q,ce.props.children,Ne,ce.key):q!==null&&(q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===de&&hh(nt)===q.type)?(Ne=f(q,ce.props),Ne.ref=Ca(ae,q,ce),Ne.return=ae,Ne):(Ne=tl(ce.type,ce.key,ce.props,null,ae.mode,Ne),Ne.ref=Ca(ae,q,ce),Ne.return=ae,Ne)}function me(ae,q,ce,Ne){return q===null||q.tag!==4||q.stateNode.containerInfo!==ce.containerInfo||q.stateNode.implementation!==ce.implementation?(q=_c(ce,ae.mode,Ne),q.return=ae,q):(q=f(q,ce.children||[]),q.return=ae,q)}function we(ae,q,ce,Ne,nt){return q===null||q.tag!==7?(q=ls(ce,ae.mode,Ne,nt),q.return=ae,q):(q=f(q,ce),q.return=ae,q)}function be(ae,q,ce){if(typeof q=="string"&&q!==""||typeof q=="number")return q=gc(""+q,ae.mode,ce),q.return=ae,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case L:return ce=tl(q.type,q.key,q.props,null,ae.mode,ce),ce.ref=Ca(ae,null,q),ce.return=ae,ce;case C:return q=_c(q,ae.mode,ce),q.return=ae,q;case de:var Ne=q._init;return be(ae,Ne(q._payload),ce)}if($t(q)||Z(q))return q=ls(q,ae.mode,ce,null),q.return=ae,q;Lo(ae,q)}return null}function Ee(ae,q,ce,Ne){var nt=q!==null?q.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return nt!==null?null:U(ae,q,""+ce,Ne);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:return ce.key===nt?H(ae,q,ce,Ne):null;case C:return ce.key===nt?me(ae,q,ce,Ne):null;case de:return nt=ce._init,Ee(ae,q,nt(ce._payload),Ne)}if($t(ce)||Z(ce))return nt!==null?null:we(ae,q,ce,Ne,null);Lo(ae,ce)}return null}function We(ae,q,ce,Ne,nt){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return ae=ae.get(ce)||null,U(q,ae,""+Ne,nt);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case L:return ae=ae.get(Ne.key===null?ce:Ne.key)||null,H(q,ae,Ne,nt);case C:return ae=ae.get(Ne.key===null?ce:Ne.key)||null,me(q,ae,Ne,nt);case de:var rt=Ne._init;return We(ae,q,ce,rt(Ne._payload),nt)}if($t(Ne)||Z(Ne))return ae=ae.get(ce)||null,we(q,ae,Ne,nt,null);Lo(q,Ne)}return null}function Je(ae,q,ce,Ne){for(var nt=null,rt=null,st=q,at=q=0,Sn=null;st!==null&&at<ce.length;at++){st.index>at?(Sn=st,st=null):Sn=st.sibling;var Lt=Ee(ae,st,ce[at],Ne);if(Lt===null){st===null&&(st=Sn);break}t&&st&&Lt.alternate===null&&i(ae,st),q=h(Lt,q,at),rt===null?nt=Lt:rt.sibling=Lt,rt=Lt,st=Sn}if(at===ce.length)return a(ae,st),Kt&&es(ae,at),nt;if(st===null){for(;at<ce.length;at++)st=be(ae,ce[at],Ne),st!==null&&(q=h(st,q,at),rt===null?nt=st:rt.sibling=st,rt=st);return Kt&&es(ae,at),nt}for(st=l(ae,st);at<ce.length;at++)Sn=We(st,ae,at,ce[at],Ne),Sn!==null&&(t&&Sn.alternate!==null&&st.delete(Sn.key===null?at:Sn.key),q=h(Sn,q,at),rt===null?nt=Sn:rt.sibling=Sn,rt=Sn);return t&&st.forEach(function(Vr){return i(ae,Vr)}),Kt&&es(ae,at),nt}function Qe(ae,q,ce,Ne){var nt=Z(ce);if(typeof nt!="function")throw Error(n(150));if(ce=nt.call(ce),ce==null)throw Error(n(151));for(var rt=nt=null,st=q,at=q=0,Sn=null,Lt=ce.next();st!==null&&!Lt.done;at++,Lt=ce.next()){st.index>at?(Sn=st,st=null):Sn=st.sibling;var Vr=Ee(ae,st,Lt.value,Ne);if(Vr===null){st===null&&(st=Sn);break}t&&st&&Vr.alternate===null&&i(ae,st),q=h(Vr,q,at),rt===null?nt=Vr:rt.sibling=Vr,rt=Vr,st=Sn}if(Lt.done)return a(ae,st),Kt&&es(ae,at),nt;if(st===null){for(;!Lt.done;at++,Lt=ce.next())Lt=be(ae,Lt.value,Ne),Lt!==null&&(q=h(Lt,q,at),rt===null?nt=Lt:rt.sibling=Lt,rt=Lt);return Kt&&es(ae,at),nt}for(st=l(ae,st);!Lt.done;at++,Lt=ce.next())Lt=We(st,ae,at,Lt.value,Ne),Lt!==null&&(t&&Lt.alternate!==null&&st.delete(Lt.key===null?at:Lt.key),q=h(Lt,q,at),rt===null?nt=Lt:rt.sibling=Lt,rt=Lt);return t&&st.forEach(function(e_){return i(ae,e_)}),Kt&&es(ae,at),nt}function ln(ae,q,ce,Ne){if(typeof ce=="object"&&ce!==null&&ce.type===F&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:e:{for(var nt=ce.key,rt=q;rt!==null;){if(rt.key===nt){if(nt=ce.type,nt===F){if(rt.tag===7){a(ae,rt.sibling),q=f(rt,ce.props.children),q.return=ae,ae=q;break e}}else if(rt.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===de&&hh(nt)===rt.type){a(ae,rt.sibling),q=f(rt,ce.props),q.ref=Ca(ae,rt,ce),q.return=ae,ae=q;break e}a(ae,rt);break}else i(ae,rt);rt=rt.sibling}ce.type===F?(q=ls(ce.props.children,ae.mode,Ne,ce.key),q.return=ae,ae=q):(Ne=tl(ce.type,ce.key,ce.props,null,ae.mode,Ne),Ne.ref=Ca(ae,q,ce),Ne.return=ae,ae=Ne)}return w(ae);case C:e:{for(rt=ce.key;q!==null;){if(q.key===rt)if(q.tag===4&&q.stateNode.containerInfo===ce.containerInfo&&q.stateNode.implementation===ce.implementation){a(ae,q.sibling),q=f(q,ce.children||[]),q.return=ae,ae=q;break e}else{a(ae,q);break}else i(ae,q);q=q.sibling}q=_c(ce,ae.mode,Ne),q.return=ae,ae=q}return w(ae);case de:return rt=ce._init,ln(ae,q,rt(ce._payload),Ne)}if($t(ce))return Je(ae,q,ce,Ne);if(Z(ce))return Qe(ae,q,ce,Ne);Lo(ae,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,q!==null&&q.tag===6?(a(ae,q.sibling),q=f(q,ce),q.return=ae,ae=q):(a(ae,q),q=gc(ce,ae.mode,Ne),q.return=ae,ae=q),w(ae)):a(ae,q)}return ln}var Is=ph(!0),mh=ph(!1),No=Lr(null),Do=null,Us=null,Au=null;function Ru(){Au=Us=Do=null}function Cu(t){var i=No.current;Wt(No),t._currentValue=i}function bu(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Fs(t,i){Do=t,Au=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Wn=!0),t.firstContext=null)}function di(t){var i=t._currentValue;if(Au!==t)if(t={context:t,memoizedValue:i,next:null},Us===null){if(Do===null)throw Error(n(308));Us=t,Do.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return i}var ts=null;function Pu(t){ts===null?ts=[t]:ts.push(t)}function gh(t,i,a,l){var f=i.interleaved;return f===null?(a.next=a,Pu(i)):(a.next=f.next,f.next=a),i.interleaved=a,or(t,l)}function or(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Ir=!1;function Lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _h(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ur(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(bt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,or(t,a)}return f=l.interleaved,f===null?(i.next=i,Pu(l)):(i.next=f.next,f.next=i),l.interleaved=i,or(t,a)}function Io(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,An(t,a)}}function vh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?f=h=w:h=h.next=w,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Uo(t,i,a,l){var f=t.updateQueue;Ir=!1;var h=f.firstBaseUpdate,w=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var H=U,me=H.next;H.next=null,w===null?h=me:w.next=me,w=H;var we=t.alternate;we!==null&&(we=we.updateQueue,U=we.lastBaseUpdate,U!==w&&(U===null?we.firstBaseUpdate=me:U.next=me,we.lastBaseUpdate=H))}if(h!==null){var be=f.baseState;w=0,we=me=H=null,U=h;do{var Ee=U.lane,We=U.eventTime;if((l&Ee)===Ee){we!==null&&(we=we.next={eventTime:We,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Je=t,Qe=U;switch(Ee=i,We=a,Qe.tag){case 1:if(Je=Qe.payload,typeof Je=="function"){be=Je.call(We,be,Ee);break e}be=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=Qe.payload,Ee=typeof Je=="function"?Je.call(We,be,Ee):Je,Ee==null)break e;be=W({},be,Ee);break e;case 2:Ir=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,Ee=f.effects,Ee===null?f.effects=[U]:Ee.push(U))}else We={eventTime:We,lane:Ee,tag:U.tag,payload:U.payload,callback:U.callback,next:null},we===null?(me=we=We,H=be):we=we.next=We,w|=Ee;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;Ee=U,U=Ee.next,Ee.next=null,f.lastBaseUpdate=Ee,f.shared.pending=null}}while(!0);if(we===null&&(H=be),f.baseState=H,f.firstBaseUpdate=me,f.lastBaseUpdate=we,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);rs|=w,t.lanes=w,t.memoizedState=be}}function xh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var ba={},Hi=Lr(ba),Pa=Lr(ba),La=Lr(ba);function ns(t){if(t===ba)throw Error(n(174));return t}function Nu(t,i){switch(zt(La,i),zt(Pa,t),zt(Hi,ba),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=y(i,t)}Wt(Hi),zt(Hi,i)}function Os(){Wt(Hi),Wt(Pa),Wt(La)}function Sh(t){ns(La.current);var i=ns(Hi.current),a=y(i,t.type);i!==a&&(zt(Pa,t),zt(Hi,a))}function Du(t){Pa.current===t&&(Wt(Hi),Wt(Pa))}var Zt=Lr(0);function Fo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Iu=[];function Uu(){for(var t=0;t<Iu.length;t++)Iu[t]._workInProgressVersionPrimary=null;Iu.length=0}var Oo=R.ReactCurrentDispatcher,Fu=R.ReactCurrentBatchConfig,is=0,jt=null,pn=null,vn=null,Bo=!1,Na=!1,Da=0,Mg=0;function Cn(){throw Error(n(321))}function Ou(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!Ai(t[a],i[a]))return!1;return!0}function Bu(t,i,a,l,f,h){if(is=h,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Oo.current=t===null||t.memoizedState===null?Ag:Rg,t=a(l,f),Na){h=0;do{if(Na=!1,Da=0,25<=h)throw Error(n(301));h+=1,vn=pn=null,i.updateQueue=null,Oo.current=Cg,t=a(l,f)}while(Na)}if(Oo.current=Ho,i=pn!==null&&pn.next!==null,is=0,vn=pn=jt=null,Bo=!1,i)throw Error(n(300));return t}function ku(){var t=Da!==0;return Da=0,t}function Vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?jt.memoizedState=vn=t:vn=vn.next=t,vn}function hi(){if(pn===null){var t=jt.alternate;t=t!==null?t.memoizedState:null}else t=pn.next;var i=vn===null?jt.memoizedState:vn.next;if(i!==null)vn=i,pn=t;else{if(t===null)throw Error(n(310));pn=t,t={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},vn===null?jt.memoizedState=vn=t:vn=vn.next=t}return vn}function Ia(t,i){return typeof i=="function"?i(t):i}function zu(t){var i=hi(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=pn,f=l.baseQueue,h=a.pending;if(h!==null){if(f!==null){var w=f.next;f.next=h.next,h.next=w}l.baseQueue=f=h,a.pending=null}if(f!==null){h=f.next,l=l.baseState;var U=w=null,H=null,me=h;do{var we=me.lane;if((is&we)===we)H!==null&&(H=H.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),l=me.hasEagerState?me.eagerState:t(l,me.action);else{var be={lane:we,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};H===null?(U=H=be,w=l):H=H.next=be,jt.lanes|=we,rs|=we}me=me.next}while(me!==null&&me!==h);H===null?w=l:H.next=U,Ai(l,i.memoizedState)||(Wn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=H,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do h=f.lane,jt.lanes|=h,rs|=h,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Hu(t){var i=hi(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do h=t(h,w.action),w=w.next;while(w!==f);Ai(h,i.memoizedState)||(Wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function yh(){}function Mh(t,i){var a=jt,l=hi(),f=i(),h=!Ai(l.memoizedState,f);if(h&&(l.memoizedState=f,Wn=!0),l=l.queue,Vu(Th.bind(null,a,l,t),[t]),l.getSnapshot!==i||h||vn!==null&&vn.memoizedState.tag&1){if(a.flags|=2048,Ua(9,wh.bind(null,a,l,f,i),void 0,null),xn===null)throw Error(n(349));(is&30)!==0||Eh(a,i,f)}return f}function Eh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function wh(t,i,a,l){i.value=a,i.getSnapshot=l,Ah(i)&&Rh(t)}function Th(t,i,a){return a(function(){Ah(i)&&Rh(t)})}function Ah(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!Ai(t,a)}catch{return!0}}function Rh(t){var i=or(t,1);i!==null&&Li(i,t,1,-1)}function Ch(t){var i=Vi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},i.queue=t,t=t.dispatch=Tg.bind(null,jt,t),[i.memoizedState,t]}function Ua(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function bh(){return hi().memoizedState}function ko(t,i,a,l){var f=Vi();jt.flags|=t,f.memoizedState=Ua(1|i,a,void 0,l===void 0?null:l)}function zo(t,i,a,l){var f=hi();l=l===void 0?null:l;var h=void 0;if(pn!==null){var w=pn.memoizedState;if(h=w.destroy,l!==null&&Ou(l,w.deps)){f.memoizedState=Ua(i,a,h,l);return}}jt.flags|=t,f.memoizedState=Ua(1|i,a,h,l)}function Ph(t,i){return ko(8390656,8,t,i)}function Vu(t,i){return zo(2048,8,t,i)}function Lh(t,i){return zo(4,2,t,i)}function Nh(t,i){return zo(4,4,t,i)}function Dh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ih(t,i,a){return a=a!=null?a.concat([t]):null,zo(4,4,Dh.bind(null,i,t),a)}function Gu(){}function Uh(t,i){var a=hi();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Ou(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Fh(t,i){var a=hi();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Ou(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Oh(t,i,a){return(is&21)===0?(t.baseState&&(t.baseState=!1,Wn=!0),t.memoizedState=a):(Ai(a,i)||(a=hn(),jt.lanes|=a,rs|=a,t.baseState=!0),i)}function Eg(t,i){var a=mt;mt=a!==0&&4>a?a:4,t(!0);var l=Fu.transition;Fu.transition={};try{t(!1),i()}finally{mt=a,Fu.transition=l}}function Bh(){return hi().memoizedState}function wg(t,i,a){var l=kr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},kh(t))zh(i,a);else if(a=gh(t,i,a,l),a!==null){var f=On();Li(a,t,l,f),Hh(a,i,l)}}function Tg(t,i,a){var l=kr(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(kh(t))zh(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var w=i.lastRenderedState,U=h(w,a);if(f.hasEagerState=!0,f.eagerState=U,Ai(U,w)){var H=i.interleaved;H===null?(f.next=f,Pu(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}a=gh(t,i,f,l),a!==null&&(f=On(),Li(a,t,l,f),Hh(a,i,l))}}function kh(t){var i=t.alternate;return t===jt||i!==null&&i===jt}function zh(t,i){Na=Bo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Hh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,An(t,a)}}var Ho={readContext:di,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},Ag={readContext:di,useCallback:function(t,i){return Vi().memoizedState=[t,i===void 0?null:i],t},useContext:di,useEffect:Ph,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,ko(4194308,4,Dh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return ko(4194308,4,t,i)},useInsertionEffect:function(t,i){return ko(4,2,t,i)},useMemo:function(t,i){var a=Vi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=Vi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=wg.bind(null,jt,t),[l.memoizedState,t]},useRef:function(t){var i=Vi();return t={current:t},i.memoizedState=t},useState:Ch,useDebugValue:Gu,useDeferredValue:function(t){return Vi().memoizedState=t},useTransition:function(){var t=Ch(!1),i=t[0];return t=Eg.bind(null,t[1]),Vi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=jt,f=Vi();if(Kt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),xn===null)throw Error(n(349));(is&30)!==0||Eh(l,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,Ph(Th.bind(null,l,h,t),[t]),l.flags|=2048,Ua(9,wh.bind(null,l,h,a,i),void 0,null),a},useId:function(){var t=Vi(),i=xn.identifierPrefix;if(Kt){var a=ar,l=sr;a=(l&~(1<<32-Ue(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Da++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Mg++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Rg={readContext:di,useCallback:Uh,useContext:di,useEffect:Vu,useImperativeHandle:Ih,useInsertionEffect:Lh,useLayoutEffect:Nh,useMemo:Fh,useReducer:zu,useRef:bh,useState:function(){return zu(Ia)},useDebugValue:Gu,useDeferredValue:function(t){var i=hi();return Oh(i,pn.memoizedState,t)},useTransition:function(){var t=zu(Ia)[0],i=hi().memoizedState;return[t,i]},useMutableSource:yh,useSyncExternalStore:Mh,useId:Bh,unstable_isNewReconciler:!1},Cg={readContext:di,useCallback:Uh,useContext:di,useEffect:Vu,useImperativeHandle:Ih,useInsertionEffect:Lh,useLayoutEffect:Nh,useMemo:Fh,useReducer:Hu,useRef:bh,useState:function(){return Hu(Ia)},useDebugValue:Gu,useDeferredValue:function(t){var i=hi();return pn===null?i.memoizedState=t:Oh(i,pn.memoizedState,t)},useTransition:function(){var t=Hu(Ia)[0],i=hi().memoizedState;return[t,i]},useMutableSource:yh,useSyncExternalStore:Mh,useId:Bh,unstable_isNewReconciler:!1};function Ci(t,i){if(t&&t.defaultProps){i=W({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Wu(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:W({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Vo={isMounted:function(t){return(t=t._reactInternals)?an(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=On(),f=kr(t),h=lr(l,f);h.payload=i,a!=null&&(h.callback=a),i=Ur(t,h,f),i!==null&&(Li(i,t,f,l),Io(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=On(),f=kr(t),h=lr(l,f);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Ur(t,h,f),i!==null&&(Li(i,t,f,l),Io(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=On(),l=kr(t),f=lr(a,l);f.tag=2,i!=null&&(f.callback=i),i=Ur(t,f,l),i!==null&&(Li(i,t,l,a),Io(i,t,l))}};function Vh(t,i,a,l,f,h,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,w):i.prototype&&i.prototype.isPureReactComponent?!ya(a,l)||!ya(f,h):!0}function Gh(t,i,a){var l=!1,f=Nr,h=i.contextType;return typeof h=="object"&&h!==null?h=di(h):(f=Gn(i)?Jr:Rn.current,l=i.contextTypes,h=(l=l!=null)?Ps(t,f):Nr),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Vo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Wh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Vo.enqueueReplaceState(i,i.state,null)}function Xu(t,i,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Lu(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=di(h):(h=Gn(i)?Jr:Rn.current,f.context=Ps(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Wu(t,i,h,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Vo.enqueueReplaceState(f,f.state,null),Uo(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,i){try{var a="",l=i;do a+=He(l),l=l.return;while(l);var f=a}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Yu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function qu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var bg=typeof WeakMap=="function"?WeakMap:Map;function Xh(t,i,a){a=lr(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){$o||($o=!0,lc=l),qu(t,i)},a}function Yh(t,i,a){a=lr(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){qu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){qu(t,i),typeof l!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function qh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new bg;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),t=Gg.bind(null,t,i,a),i.then(t,t))}function Kh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function $h(t,i,a,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=lr(-1,1),i.tag=2,Ur(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Pg=R.ReactCurrentOwner,Wn=!1;function Fn(t,i,a,l){i.child=t===null?mh(i,null,a,l):Is(i,t.child,a,l)}function Zh(t,i,a,l,f){a=a.render;var h=i.ref;return Fs(i,f),l=Bu(t,i,a,l,h,f),a=ku(),t!==null&&!Wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,ur(t,i,f)):(Kt&&a&&yu(i),i.flags|=1,Fn(t,i,l,f),i.child)}function jh(t,i,a,l,f){if(t===null){var h=a.type;return typeof h=="function"&&!mc(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Jh(t,i,h,l,f)):(t=tl(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var w=h.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(w,l)&&t.ref===i.ref)return ur(t,i,f)}return i.flags|=1,t=Hr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Jh(t,i,a,l,f){if(t!==null){var h=t.memoizedProps;if(ya(h,l)&&t.ref===i.ref)if(Wn=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Wn=!0);else return i.lanes=t.lanes,ur(t,i,f)}return Ku(t,i,a,l,f)}function Qh(t,i,a){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(zs,ii),ii|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,zt(zs,ii),ii|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,zt(zs,ii),ii|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,zt(zs,ii),ii|=l;return Fn(t,i,f,a),i.child}function ep(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Ku(t,i,a,l,f){var h=Gn(a)?Jr:Rn.current;return h=Ps(i,h),Fs(i,f),a=Bu(t,i,a,l,h,f),l=ku(),t!==null&&!Wn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,ur(t,i,f)):(Kt&&l&&yu(i),i.flags|=1,Fn(t,i,a,f),i.child)}function tp(t,i,a,l,f){if(Gn(a)){var h=!0;Ao(i)}else h=!1;if(Fs(i,f),i.stateNode===null)Wo(t,i),Gh(i,a,l),Xu(i,a,l,f),l=!0;else if(t===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var H=w.context,me=a.contextType;typeof me=="object"&&me!==null?me=di(me):(me=Gn(a)?Jr:Rn.current,me=Ps(i,me));var we=a.getDerivedStateFromProps,be=typeof we=="function"||typeof w.getSnapshotBeforeUpdate=="function";be||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==l||H!==me)&&Wh(i,w,l,me),Ir=!1;var Ee=i.memoizedState;w.state=Ee,Uo(i,l,w,f),H=i.memoizedState,U!==l||Ee!==H||Vn.current||Ir?(typeof we=="function"&&(Wu(i,a,we,l),H=i.memoizedState),(U=Ir||Vh(i,a,U,l,Ee,H,me))?(be||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=H),w.props=l,w.state=H,w.context=me,l=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,_h(t,i),U=i.memoizedProps,me=i.type===i.elementType?U:Ci(i.type,U),w.props=me,be=i.pendingProps,Ee=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=di(H):(H=Gn(a)?Jr:Rn.current,H=Ps(i,H));var We=a.getDerivedStateFromProps;(we=typeof We=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==be||Ee!==H)&&Wh(i,w,l,H),Ir=!1,Ee=i.memoizedState,w.state=Ee,Uo(i,l,w,f);var Je=i.memoizedState;U!==be||Ee!==Je||Vn.current||Ir?(typeof We=="function"&&(Wu(i,a,We,l),Je=i.memoizedState),(me=Ir||Vh(i,a,me,l,Ee,Je,H)||!1)?(we||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,Je,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,Je,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Je),w.props=l,w.state=Je,w.context=H,l=me):(typeof w.componentDidUpdate!="function"||U===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&Ee===t.memoizedState||(i.flags|=1024),l=!1)}return $u(t,i,a,l,h,f)}function $u(t,i,a,l,f,h){ep(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return f&&ah(i,a,!1),ur(t,i,h);l=i.stateNode,Pg.current=i;var U=w&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=Is(i,t.child,null,h),i.child=Is(i,null,U,h)):Fn(t,i,U,h),i.memoizedState=l.state,f&&ah(i,a,!0),i.child}function np(t){var i=t.stateNode;i.pendingContext?rh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&rh(t,i.context,!1),Nu(t,i.containerInfo)}function ip(t,i,a,l,f){return Ds(),Tu(f),i.flags|=256,Fn(t,i,a,l),i.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function rp(t,i,a){var l=i.pendingProps,f=Zt.current,h=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=t!==null&&t.memoizedState===null?!1:(f&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),zt(Zt,f&1),t===null)return wu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,h?(l=i.mode,h=i.child,w={mode:"hidden",children:w},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=w):h=nl(w,l,0,null),t=ls(t,l,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=ju(a),i.memoizedState=Zu,t):Ju(i,w));if(f=t.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return Lg(t,i,w,l,U,f,a);if(h){h=l.fallback,w=i.mode,f=t.child,U=f.sibling;var H={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=H,i.deletions=null):(l=Hr(f,H),l.subtreeFlags=f.subtreeFlags&14680064),U!==null?h=Hr(U,h):(h=ls(h,w,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,w=t.child.memoizedState,w=w===null?ju(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},h.memoizedState=w,h.childLanes=t.childLanes&~a,i.memoizedState=Zu,l}return h=t.child,t=h.sibling,l=Hr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Ju(t,i){return i=nl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Go(t,i,a,l){return l!==null&&Tu(l),Is(i,t.child,null,a),t=Ju(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Lg(t,i,a,l,f,h,w){if(a)return i.flags&256?(i.flags&=-257,l=Yu(Error(n(422))),Go(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=nl({mode:"visible",children:l.children},f,0,null),h=ls(h,f,w,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&Is(i,t.child,null,w),i.child.memoizedState=ju(w),i.memoizedState=Zu,h);if((i.mode&1)===0)return Go(t,i,w,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=Yu(h,l,void 0),Go(t,i,w,l)}if(U=(w&t.childLanes)!==0,Wn||U){if(l=xn,l!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|w))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,or(t,f),Li(l,t,f,-1))}return pc(),l=Yu(Error(n(421))),Go(t,i,w,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=Wg.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,ni=Pr(f.nextSibling),ti=i,Kt=!0,Ri=null,t!==null&&(ci[fi++]=sr,ci[fi++]=ar,ci[fi++]=Qr,sr=t.id,ar=t.overflow,Qr=i),i=Ju(i,l.children),i.flags|=4096,i)}function sp(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),bu(t.return,i,a)}function Qu(t,i,a,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=f)}function ap(t,i,a){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(Fn(t,i,l.children,a),l=Zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sp(t,a,i);else if(t.tag===19)sp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(zt(Zt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Fo(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Qu(i,!1,f,a,h);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Fo(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}Qu(i,!0,a,null,h);break;case"together":Qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function ur(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),rs|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Hr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Hr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Ng(t,i,a){switch(i.tag){case 3:np(i),Ds();break;case 5:Sh(i);break;case 1:Gn(i.type)&&Ao(i);break;case 4:Nu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;zt(No,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(zt(Zt,Zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?rp(t,i,a):(zt(Zt,Zt.current&1),t=ur(t,i,a),t!==null?t.sibling:null);zt(Zt,Zt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return ap(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),zt(Zt,Zt.current),l)break;return null;case 22:case 23:return i.lanes=0,Qh(t,i,a)}return ur(t,i,a)}var op,ec,lp,up;op=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ec=function(){},lp=function(t,i,a,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,ns(Hi.current);var h=null;switch(a){case"input":f=ut(t,f),l=ut(t,l),h=[];break;case"select":f=W({},f,{value:void 0}),l=W({},l,{value:void 0}),h=[];break;case"textarea":f=Bt(t,f),l=Bt(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Eo)}Ie(a,l);var w;a=null;for(me in f)if(!l.hasOwnProperty(me)&&f.hasOwnProperty(me)&&f[me]!=null)if(me==="style"){var U=f[me];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(o.hasOwnProperty(me)?h||(h=[]):(h=h||[]).push(me,null));for(me in l){var H=l[me];if(U=f!=null?f[me]:void 0,l.hasOwnProperty(me)&&H!==U&&(H!=null||U!=null))if(me==="style")if(U){for(w in U)!U.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&U[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(h||(h=[]),h.push(me,a)),a=H;else me==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(h=h||[]).push(me,H)):me==="children"?typeof H!="string"&&typeof H!="number"||(h=h||[]).push(me,""+H):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(o.hasOwnProperty(me)?(H!=null&&me==="onScroll"&&Gt("scroll",t),h||U===H||(h=[])):(h=h||[]).push(me,H))}a&&(h=h||[]).push("style",a);var me=h;(i.updateQueue=me)&&(i.flags|=4)}},up=function(t,i,a,l){a!==l&&(i.flags|=4)};function Fa(t,i){if(!Kt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function bn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function Dg(t,i,a){var l=i.pendingProps;switch(Mu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(i),null;case 1:return Gn(i.type)&&To(),bn(i),null;case 3:return l=i.stateNode,Os(),Wt(Vn),Wt(Rn),Uu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Po(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ri!==null&&(fc(Ri),Ri=null))),ec(t,i),bn(i),null;case 5:Du(i);var f=ns(La.current);if(a=i.type,t!==null&&i.stateNode!=null)lp(t,i,a,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return bn(i),null}if(t=ns(Hi.current),Po(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[zi]=i,l[Aa]=h,t=(i.mode&1)!==0,a){case"dialog":Gt("cancel",l),Gt("close",l);break;case"iframe":case"object":case"embed":Gt("load",l);break;case"video":case"audio":for(f=0;f<Ea.length;f++)Gt(Ea[f],l);break;case"source":Gt("error",l);break;case"img":case"image":case"link":Gt("error",l),Gt("load",l);break;case"details":Gt("toggle",l);break;case"input":_t(l,h),Gt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Gt("invalid",l);break;case"textarea":X(l,h),Gt("invalid",l)}Ie(a,h),f=null;for(var w in h)if(h.hasOwnProperty(w)){var U=h[w];w==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&Mo(l.textContent,U,t),f=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&Mo(l.textContent,U,t),f=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&Gt("scroll",l)}switch(a){case"input":ke(l),At(l,h,!0);break;case"textarea":ke(l),St(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Eo)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(a,{is:l.is}):(t=w.createElement(a),a==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,a),t[zi]=i,t[Aa]=l,op(t,i,!1,!1),i.stateNode=t;e:{switch(w=Ae(a,l),a){case"dialog":Gt("cancel",t),Gt("close",t),f=l;break;case"iframe":case"object":case"embed":Gt("load",t),f=l;break;case"video":case"audio":for(f=0;f<Ea.length;f++)Gt(Ea[f],t);f=l;break;case"source":Gt("error",t),f=l;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),f=l;break;case"details":Gt("toggle",t),f=l;break;case"input":_t(t,l),f=ut(t,l),Gt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=W({},l,{value:void 0}),Gt("invalid",t);break;case"textarea":X(t,l),f=Bt(t,l),Gt("invalid",t);break;default:f=l}Ie(a,f),U=f;for(h in U)if(U.hasOwnProperty(h)){var H=U[h];h==="style"?oe(t,H):h==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&le(t,H)):h==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&ge(t,H):typeof H=="number"&&ge(t,""+H):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?H!=null&&h==="onScroll"&&Gt("scroll",t):H!=null&&G(t,h,H,w))}switch(a){case"input":ke(t),At(t,l,!1);break;case"textarea":ke(t),St(t);break;case"option":l.value!=null&&t.setAttribute("value",""+he(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?Ct(t,!!l.multiple,h,!1):l.defaultValue!=null&&Ct(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Eo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bn(i),null;case 6:if(t&&i.stateNode!=null)up(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=ns(La.current),ns(Hi.current),Po(i)){if(l=i.stateNode,a=i.memoizedProps,l[zi]=i,(h=l.nodeValue!==a)&&(t=ti,t!==null))switch(t.tag){case 3:Mo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mo(l.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[zi]=i,i.stateNode=l}return bn(i),null;case 13:if(Wt(Zt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Kt&&ni!==null&&(i.mode&1)!==0&&(i.flags&128)===0)dh(),Ds(),i.flags|=98560,h=!1;else if(h=Po(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[zi]=i}else Ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),h=!1}else Ri!==null&&(fc(Ri),Ri=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Zt.current&1)!==0?mn===0&&(mn=3):pc())),i.updateQueue!==null&&(i.flags|=4),bn(i),null);case 4:return Os(),ec(t,i),t===null&&wa(i.stateNode.containerInfo),bn(i),null;case 10:return Cu(i.type._context),bn(i),null;case 17:return Gn(i.type)&&To(),bn(i),null;case 19:if(Wt(Zt),h=i.memoizedState,h===null)return bn(i),null;if(l=(i.flags&128)!==0,w=h.rendering,w===null)if(l)Fa(h,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=Fo(t),w!==null){for(i.flags|=128,Fa(h,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,t=l,h.flags&=14680066,w=h.alternate,w===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=w.childLanes,h.lanes=w.lanes,h.child=w.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=w.memoizedProps,h.memoizedState=w.memoizedState,h.updateQueue=w.updateQueue,h.type=w.type,t=w.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return zt(Zt,Zt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Vt()>Hs&&(i.flags|=128,l=!0,Fa(h,!1),i.lanes=4194304)}else{if(!l)if(t=Fo(w),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Fa(h,!0),h.tail===null&&h.tailMode==="hidden"&&!w.alternate&&!Kt)return bn(i),null}else 2*Vt()-h.renderingStartTime>Hs&&a!==1073741824&&(i.flags|=128,l=!0,Fa(h,!1),i.lanes=4194304);h.isBackwards?(w.sibling=i.child,i.child=w):(a=h.last,a!==null?a.sibling=w:i.child=w,h.last=w)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Vt(),i.sibling=null,a=Zt.current,zt(Zt,l?a&1|2:a&1),i):(bn(i),null);case 22:case 23:return hc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(ii&1073741824)!==0&&(bn(i),i.subtreeFlags&6&&(i.flags|=8192)):bn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Ig(t,i){switch(Mu(i),i.tag){case 1:return Gn(i.type)&&To(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Os(),Wt(Vn),Wt(Rn),Uu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Du(i),null;case 13:if(Wt(Zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ds()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Wt(Zt),null;case 4:return Os(),null;case 10:return Cu(i.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var Xo=!1,Pn=!1,Ug=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function ks(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){nn(t,i,l)}else a.current=null}function tc(t,i,a){try{a()}catch(l){nn(t,i,l)}}var cp=!1;function Fg(t,i){if(hu=co,t=Vd(),su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var w=0,U=-1,H=-1,me=0,we=0,be=t,Ee=null;t:for(;;){for(var We;be!==a||f!==0&&be.nodeType!==3||(U=w+f),be!==h||l!==0&&be.nodeType!==3||(H=w+l),be.nodeType===3&&(w+=be.nodeValue.length),(We=be.firstChild)!==null;)Ee=be,be=We;for(;;){if(be===t)break t;if(Ee===a&&++me===f&&(U=w),Ee===h&&++we===l&&(H=w),(We=be.nextSibling)!==null)break;be=Ee,Ee=be.parentNode}be=We}a=U===-1||H===-1?null:{start:U,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(pu={focusedElem:t,selectionRange:a},co=!1,Ze=i;Ze!==null;)if(i=Ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ze=t;else for(;Ze!==null;){i=Ze;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var Qe=Je.memoizedProps,ln=Je.memoizedState,ae=i.stateNode,q=ae.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:Ci(i.type,Qe),ln);ae.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var ce=i.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ne){nn(i,i.return,Ne)}if(t=i.sibling,t!==null){t.return=i.return,Ze=t;break}Ze=i.return}return Je=cp,cp=!1,Je}function Oa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&tc(i,a,h)}f=f.next}while(f!==l)}}function Yo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function nc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function fp(t){var i=t.alternate;i!==null&&(t.alternate=null,fp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[zi],delete i[Aa],delete i[vu],delete i[vg],delete i[xg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dp(t){return t.tag===5||t.tag===3||t.tag===4}function hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ic(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Eo));else if(l!==4&&(t=t.child,t!==null))for(ic(t,i,a),t=t.sibling;t!==null;)ic(t,i,a),t=t.sibling}function rc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(rc(t,i,a),t=t.sibling;t!==null;)rc(t,i,a),t=t.sibling}var Mn=null,bi=!1;function Fr(t,i,a){for(a=a.child;a!==null;)pp(t,i,a),a=a.sibling}function pp(t,i,a){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 5:Pn||ks(a,i);case 6:var l=Mn,f=bi;Mn=null,Fr(t,i,a),Mn=l,bi=f,Mn!==null&&(bi?(t=Mn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Mn.removeChild(a.stateNode));break;case 18:Mn!==null&&(bi?(t=Mn,a=a.stateNode,t.nodeType===8?_u(t.parentNode,a):t.nodeType===1&&_u(t,a),ma(t)):_u(Mn,a.stateNode));break;case 4:l=Mn,f=bi,Mn=a.stateNode.containerInfo,bi=!0,Fr(t,i,a),Mn=l,bi=f;break;case 0:case 11:case 14:case 15:if(!Pn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,w=h.destroy;h=h.tag,w!==void 0&&((h&2)!==0||(h&4)!==0)&&tc(a,i,w),f=f.next}while(f!==l)}Fr(t,i,a);break;case 1:if(!Pn&&(ks(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(U){nn(a,i,U)}Fr(t,i,a);break;case 21:Fr(t,i,a);break;case 22:a.mode&1?(Pn=(l=Pn)||a.memoizedState!==null,Fr(t,i,a),Pn=l):Fr(t,i,a);break;default:Fr(t,i,a)}}function mp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Ug),i.forEach(function(l){var f=Xg.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function Pi(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var h=t,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:Mn=U.stateNode,bi=!1;break e;case 3:Mn=U.stateNode.containerInfo,bi=!0;break e;case 4:Mn=U.stateNode.containerInfo,bi=!0;break e}U=U.return}if(Mn===null)throw Error(n(160));pp(h,w,f),Mn=null,bi=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(me){nn(f,i,me)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)gp(i,t),i=i.sibling}function gp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pi(i,t),Gi(t),l&4){try{Oa(3,t,t.return),Yo(3,t)}catch(Qe){nn(t,t.return,Qe)}try{Oa(5,t,t.return)}catch(Qe){nn(t,t.return,Qe)}}break;case 1:Pi(i,t),Gi(t),l&512&&a!==null&&ks(a,a.return);break;case 5:if(Pi(i,t),Gi(t),l&512&&a!==null&&ks(a,a.return),t.flags&32){var f=t.stateNode;try{ge(f,"")}catch(Qe){nn(t,t.return,Qe)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,w=a!==null?a.memoizedProps:h,U=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&Rt(f,h),Ae(U,w);var me=Ae(U,h);for(w=0;w<H.length;w+=2){var we=H[w],be=H[w+1];we==="style"?oe(f,be):we==="dangerouslySetInnerHTML"?le(f,be):we==="children"?ge(f,be):G(f,we,be,me)}switch(U){case"input":ct(f,h);break;case"textarea":en(f,h);break;case"select":var Ee=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var We=h.value;We!=null?Ct(f,!!h.multiple,We,!1):Ee!==!!h.multiple&&(h.defaultValue!=null?Ct(f,!!h.multiple,h.defaultValue,!0):Ct(f,!!h.multiple,h.multiple?[]:"",!1))}f[Aa]=h}catch(Qe){nn(t,t.return,Qe)}}break;case 6:if(Pi(i,t),Gi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(Qe){nn(t,t.return,Qe)}}break;case 3:if(Pi(i,t),Gi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ma(i.containerInfo)}catch(Qe){nn(t,t.return,Qe)}break;case 4:Pi(i,t),Gi(t);break;case 13:Pi(i,t),Gi(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(oc=Vt())),l&4&&mp(t);break;case 22:if(we=a!==null&&a.memoizedState!==null,t.mode&1?(Pn=(me=Pn)||we,Pi(i,t),Pn=me):Pi(i,t),Gi(t),l&8192){if(me=t.memoizedState!==null,(t.stateNode.isHidden=me)&&!we&&(t.mode&1)!==0)for(Ze=t,we=t.child;we!==null;){for(be=Ze=we;Ze!==null;){switch(Ee=Ze,We=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:Oa(4,Ee,Ee.return);break;case 1:ks(Ee,Ee.return);var Je=Ee.stateNode;if(typeof Je.componentWillUnmount=="function"){l=Ee,a=Ee.return;try{i=l,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(Qe){nn(l,a,Qe)}}break;case 5:ks(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){xp(be);continue}}We!==null?(We.return=Ee,Ze=We):xp(be)}we=we.sibling}e:for(we=null,be=t;;){if(be.tag===5){if(we===null){we=be;try{f=be.stateNode,me?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=be.stateNode,H=be.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=J("display",w))}catch(Qe){nn(t,t.return,Qe)}}}else if(be.tag===6){if(we===null)try{be.stateNode.nodeValue=me?"":be.memoizedProps}catch(Qe){nn(t,t.return,Qe)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===t)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===t)break e;for(;be.sibling===null;){if(be.return===null||be.return===t)break e;we===be&&(we=null),be=be.return}we===be&&(we=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:Pi(i,t),Gi(t),l&4&&mp(t);break;case 21:break;default:Pi(i,t),Gi(t)}}function Gi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(dp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ge(f,""),l.flags&=-33);var h=hp(t);rc(t,h,f);break;case 3:case 4:var w=l.stateNode.containerInfo,U=hp(t);ic(t,U,w);break;default:throw Error(n(161))}}catch(H){nn(t,t.return,H)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Og(t,i,a){Ze=t,_p(t)}function _p(t,i,a){for(var l=(t.mode&1)!==0;Ze!==null;){var f=Ze,h=f.child;if(f.tag===22&&l){var w=f.memoizedState!==null||Xo;if(!w){var U=f.alternate,H=U!==null&&U.memoizedState!==null||Pn;U=Xo;var me=Pn;if(Xo=w,(Pn=H)&&!me)for(Ze=f;Ze!==null;)w=Ze,H=w.child,w.tag===22&&w.memoizedState!==null?Sp(f):H!==null?(H.return=w,Ze=H):Sp(f);for(;h!==null;)Ze=h,_p(h),h=h.sibling;Ze=f,Xo=U,Pn=me}vp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,Ze=h):vp(t)}}function vp(t){for(;Ze!==null;){var i=Ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Pn||Yo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Pn)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Ci(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&xh(i,h,l);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}xh(i,w,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var me=i.alternate;if(me!==null){var we=me.memoizedState;if(we!==null){var be=we.dehydrated;be!==null&&ma(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Pn||i.flags&512&&nc(i)}catch(Ee){nn(i,i.return,Ee)}}if(i===t){Ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ze=a;break}Ze=i.return}}function xp(t){for(;Ze!==null;){var i=Ze;if(i===t){Ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ze=a;break}Ze=i.return}}function Sp(t){for(;Ze!==null;){var i=Ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Yo(4,i)}catch(H){nn(i,a,H)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(H){nn(i,f,H)}}var h=i.return;try{nc(i)}catch(H){nn(i,h,H)}break;case 5:var w=i.return;try{nc(i)}catch(H){nn(i,w,H)}}}catch(H){nn(i,i.return,H)}if(i===t){Ze=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ze=U;break}Ze=i.return}}var Bg=Math.ceil,qo=R.ReactCurrentDispatcher,sc=R.ReactCurrentOwner,pi=R.ReactCurrentBatchConfig,bt=0,xn=null,fn=null,En=0,ii=0,zs=Lr(0),mn=0,Ba=null,rs=0,Ko=0,ac=0,ka=null,Xn=null,oc=0,Hs=1/0,cr=null,$o=!1,lc=null,Or=null,Zo=!1,Br=null,jo=0,za=0,uc=null,Jo=-1,Qo=0;function On(){return(bt&6)!==0?Vt():Jo!==-1?Jo:Jo=Vt()}function kr(t){return(t.mode&1)===0?1:(bt&2)!==0&&En!==0?En&-En:yg.transition!==null?(Qo===0&&(Qo=hn()),Qo):(t=mt,t!==0||(t=window.event,t=t===void 0?16:Md(t.type)),t)}function Li(t,i,a,l){if(50<za)throw za=0,uc=null,Error(n(185));on(t,a,l),((bt&2)===0||t!==xn)&&(t===xn&&((bt&2)===0&&(Ko|=a),mn===4&&zr(t,En)),Yn(t,l),a===1&&bt===0&&(i.mode&1)===0&&(Hs=Vt()+500,Ro&&Dr()))}function Yn(t,i){var a=t.callbackNode;kt(t,i);var l=yt(t,t===xn?En:0);if(l===0)a!==null&&er(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&er(a),i===1)t.tag===0?Sg(Mp.bind(null,t)):oh(Mp.bind(null,t)),gg(function(){(bt&6)===0&&Dr()}),a=null;else{switch(Mi(l)){case 1:a=yi;break;case 4:a=tr;break;case 16:a=T;break;case 536870912:a=fe;break;default:a=T}a=Pp(a,yp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function yp(t,i){if(Jo=-1,Qo=0,(bt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Vs()&&t.callbackNode!==a)return null;var l=yt(t,t===xn?En:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=el(t,l);else{i=l;var f=bt;bt|=2;var h=wp();(xn!==t||En!==i)&&(cr=null,Hs=Vt()+500,as(t,i));do try{Hg();break}catch(U){Ep(t,U)}while(!0);Ru(),qo.current=h,bt=f,fn!==null?i=0:(xn=null,En=0,i=mn)}if(i!==0){if(i===2&&(f=Dt(t),f!==0&&(l=f,i=cc(t,f))),i===1)throw a=Ba,as(t,0),zr(t,l),Yn(t,Vt()),a;if(i===6)zr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!kg(f)&&(i=el(t,l),i===2&&(h=Dt(t),h!==0&&(l=h,i=cc(t,h))),i===1))throw a=Ba,as(t,0),zr(t,l),Yn(t,Vt()),a;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:os(t,Xn,cr);break;case 3:if(zr(t,l),(l&130023424)===l&&(i=oc+500-Vt(),10<i)){if(yt(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){On(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=gu(os.bind(null,t,Xn,cr),i);break}os(t,Xn,cr);break;case 4:if(zr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var w=31-Ue(l);h=1<<w,w=i[w],w>f&&(f=w),l&=~h}if(l=f,l=Vt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Bg(l/1960))-l,10<l){t.timeoutHandle=gu(os.bind(null,t,Xn,cr),l);break}os(t,Xn,cr);break;case 5:os(t,Xn,cr);break;default:throw Error(n(329))}}}return Yn(t,Vt()),t.callbackNode===a?yp.bind(null,t):null}function cc(t,i){var a=ka;return t.current.memoizedState.isDehydrated&&(as(t,i).flags|=256),t=el(t,i),t!==2&&(i=Xn,Xn=a,i!==null&&fc(i)),t}function fc(t){Xn===null?Xn=t:Xn.push.apply(Xn,t)}function kg(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],h=f.getSnapshot;f=f.value;try{if(!Ai(h(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function zr(t,i){for(i&=~ac,i&=~Ko,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Ue(i),l=1<<a;t[a]=-1,i&=~l}}function Mp(t){if((bt&6)!==0)throw Error(n(327));Vs();var i=yt(t,0);if((i&1)===0)return Yn(t,Vt()),null;var a=el(t,i);if(t.tag!==0&&a===2){var l=Dt(t);l!==0&&(i=l,a=cc(t,l))}if(a===1)throw a=Ba,as(t,0),zr(t,i),Yn(t,Vt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,os(t,Xn,cr),Yn(t,Vt()),null}function dc(t,i){var a=bt;bt|=1;try{return t(i)}finally{bt=a,bt===0&&(Hs=Vt()+500,Ro&&Dr())}}function ss(t){Br!==null&&Br.tag===0&&(bt&6)===0&&Vs();var i=bt;bt|=1;var a=pi.transition,l=mt;try{if(pi.transition=null,mt=1,t)return t()}finally{mt=l,pi.transition=a,bt=i,(bt&6)===0&&Dr()}}function hc(){ii=zs.current,Wt(zs)}function as(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,mg(a)),fn!==null)for(a=fn.return;a!==null;){var l=a;switch(Mu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&To();break;case 3:Os(),Wt(Vn),Wt(Rn),Uu();break;case 5:Du(l);break;case 4:Os();break;case 13:Wt(Zt);break;case 19:Wt(Zt);break;case 10:Cu(l.type._context);break;case 22:case 23:hc()}a=a.return}if(xn=t,fn=t=Hr(t.current,null),En=ii=i,mn=0,Ba=null,ac=Ko=rs=0,Xn=ka=null,ts!==null){for(i=0;i<ts.length;i++)if(a=ts[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,h=a.pending;if(h!==null){var w=h.next;h.next=f,l.next=w}a.pending=l}ts=null}return t}function Ep(t,i){do{var a=fn;try{if(Ru(),Oo.current=Ho,Bo){for(var l=jt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Bo=!1}if(is=0,vn=pn=jt=null,Na=!1,Da=0,sc.current=null,a===null||a.return===null){mn=1,Ba=i,fn=null;break}e:{var h=t,w=a.return,U=a,H=i;if(i=En,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=H,we=U,be=we.tag;if((we.mode&1)===0&&(be===0||be===11||be===15)){var Ee=we.alternate;Ee?(we.updateQueue=Ee.updateQueue,we.memoizedState=Ee.memoizedState,we.lanes=Ee.lanes):(we.updateQueue=null,we.memoizedState=null)}var We=Kh(w);if(We!==null){We.flags&=-257,$h(We,w,U,h,i),We.mode&1&&qh(h,me,i),i=We,H=me;var Je=i.updateQueue;if(Je===null){var Qe=new Set;Qe.add(H),i.updateQueue=Qe}else Je.add(H);break e}else{if((i&1)===0){qh(h,me,i),pc();break e}H=Error(n(426))}}else if(Kt&&U.mode&1){var ln=Kh(w);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),$h(ln,w,U,h,i),Tu(Bs(H,U));break e}}h=H=Bs(H,U),mn!==4&&(mn=2),ka===null?ka=[h]:ka.push(h),h=w;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var ae=Xh(h,H,i);vh(h,ae);break e;case 1:U=H;var q=h.type,ce=h.stateNode;if((h.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Or===null||!Or.has(ce)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ne=Yh(h,U,i);vh(h,Ne);break e}}h=h.return}while(h!==null)}Ap(a)}catch(nt){i=nt,fn===a&&a!==null&&(fn=a=a.return);continue}break}while(!0)}function wp(){var t=qo.current;return qo.current=Ho,t===null?Ho:t}function pc(){(mn===0||mn===3||mn===2)&&(mn=4),xn===null||(rs&268435455)===0&&(Ko&268435455)===0||zr(xn,En)}function el(t,i){var a=bt;bt|=2;var l=wp();(xn!==t||En!==i)&&(cr=null,as(t,i));do try{zg();break}catch(f){Ep(t,f)}while(!0);if(Ru(),bt=a,qo.current=l,fn!==null)throw Error(n(261));return xn=null,En=0,mn}function zg(){for(;fn!==null;)Tp(fn)}function Hg(){for(;fn!==null&&!wr();)Tp(fn)}function Tp(t){var i=bp(t.alternate,t,ii);t.memoizedProps=t.pendingProps,i===null?Ap(t):fn=i,sc.current=null}function Ap(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Dg(a,i,ii),a!==null){fn=a;return}}else{if(a=Ig(a,i),a!==null){a.flags&=32767,fn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{mn=6,fn=null;return}}if(i=i.sibling,i!==null){fn=i;return}fn=i=t}while(i!==null);mn===0&&(mn=5)}function os(t,i,a){var l=mt,f=pi.transition;try{pi.transition=null,mt=1,Vg(t,i,a,l)}finally{pi.transition=f,mt=l}return null}function Vg(t,i,a,l){do Vs();while(Br!==null);if((bt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(Mt(t,h),t===xn&&(fn=xn=null,En=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Zo||(Zo=!0,Pp(T,function(){return Vs(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=pi.transition,pi.transition=null;var w=mt;mt=1;var U=bt;bt|=4,sc.current=null,Fg(t,a),gp(a,t),lg(pu),co=!!hu,pu=hu=null,t.current=a,Og(a),ca(),bt=U,mt=w,pi.transition=h}else t.current=a;if(Zo&&(Zo=!1,Br=t,jo=f),h=t.pendingLanes,h===0&&(Or=null),Oe(a.stateNode),Yn(t,Vt()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if($o)throw $o=!1,t=lc,lc=null,t;return(jo&1)!==0&&t.tag!==0&&Vs(),h=t.pendingLanes,(h&1)!==0?t===uc?za++:(za=0,uc=t):za=0,Dr(),null}function Vs(){if(Br!==null){var t=Mi(jo),i=pi.transition,a=mt;try{if(pi.transition=null,mt=16>t?16:t,Br===null)var l=!1;else{if(t=Br,Br=null,jo=0,(bt&6)!==0)throw Error(n(331));var f=bt;for(bt|=4,Ze=t.current;Ze!==null;){var h=Ze,w=h.child;if((Ze.flags&16)!==0){var U=h.deletions;if(U!==null){for(var H=0;H<U.length;H++){var me=U[H];for(Ze=me;Ze!==null;){var we=Ze;switch(we.tag){case 0:case 11:case 15:Oa(8,we,h)}var be=we.child;if(be!==null)be.return=we,Ze=be;else for(;Ze!==null;){we=Ze;var Ee=we.sibling,We=we.return;if(fp(we),we===me){Ze=null;break}if(Ee!==null){Ee.return=We,Ze=Ee;break}Ze=We}}}var Je=h.alternate;if(Je!==null){var Qe=Je.child;if(Qe!==null){Je.child=null;do{var ln=Qe.sibling;Qe.sibling=null,Qe=ln}while(Qe!==null)}}Ze=h}}if((h.subtreeFlags&2064)!==0&&w!==null)w.return=h,Ze=w;else e:for(;Ze!==null;){if(h=Ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Oa(9,h,h.return)}var ae=h.sibling;if(ae!==null){ae.return=h.return,Ze=ae;break e}Ze=h.return}}var q=t.current;for(Ze=q;Ze!==null;){w=Ze;var ce=w.child;if((w.subtreeFlags&2064)!==0&&ce!==null)ce.return=w,Ze=ce;else e:for(w=q;Ze!==null;){if(U=Ze,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Yo(9,U)}}catch(nt){nn(U,U.return,nt)}if(U===w){Ze=null;break e}var Ne=U.sibling;if(Ne!==null){Ne.return=U.return,Ze=Ne;break e}Ze=U.return}}if(bt=f,Dr(),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(se,t)}catch{}l=!0}return l}finally{mt=a,pi.transition=i}}return!1}function Rp(t,i,a){i=Bs(a,i),i=Xh(t,i,1),t=Ur(t,i,1),i=On(),t!==null&&(on(t,1,i),Yn(t,i))}function nn(t,i,a){if(t.tag===3)Rp(t,t,a);else for(;i!==null;){if(i.tag===3){Rp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Or===null||!Or.has(l))){t=Bs(a,t),t=Yh(i,t,1),i=Ur(i,t,1),t=On(),i!==null&&(on(i,1,t),Yn(i,t));break}}i=i.return}}function Gg(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=On(),t.pingedLanes|=t.suspendedLanes&a,xn===t&&(En&a)===a&&(mn===4||mn===3&&(En&130023424)===En&&500>Vt()-oc?as(t,0):ac|=a),Yn(t,i)}function Cp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ht,ht<<=1,(ht&130023424)===0&&(ht=4194304)));var a=On();t=or(t,i),t!==null&&(on(t,i,a),Yn(t,a))}function Wg(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Cp(t,a)}function Xg(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Cp(t,a)}var bp;bp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Vn.current)Wn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Wn=!1,Ng(t,i,a);Wn=(t.flags&131072)!==0}else Wn=!1,Kt&&(i.flags&1048576)!==0&&lh(i,bo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Wo(t,i),t=i.pendingProps;var f=Ps(i,Rn.current);Fs(i,a),f=Bu(null,i,l,t,f,a);var h=ku();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gn(l)?(h=!0,Ao(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Lu(i),f.updater=Vo,i.stateNode=f,f._reactInternals=i,Xu(i,l,t,a),i=$u(null,i,l,!0,h,a)):(i.tag=0,Kt&&h&&yu(i),Fn(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Wo(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=qg(l),t=Ci(l,t),f){case 0:i=Ku(null,i,l,t,a);break e;case 1:i=tp(null,i,l,t,a);break e;case 11:i=Zh(null,i,l,t,a);break e;case 14:i=jh(null,i,l,Ci(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ci(l,f),Ku(t,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ci(l,f),tp(t,i,l,f,a);case 3:e:{if(np(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,_h(t,i),Uo(i,l,null,a);var w=i.memoizedState;if(l=w.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=Bs(Error(n(423)),i),i=ip(t,i,l,a,f);break e}else if(l!==f){f=Bs(Error(n(424)),i),i=ip(t,i,l,a,f);break e}else for(ni=Pr(i.stateNode.containerInfo.firstChild),ti=i,Kt=!0,Ri=null,a=mh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ds(),l===f){i=ur(t,i,a);break e}Fn(t,i,l,a)}i=i.child}return i;case 5:return Sh(i),t===null&&wu(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,w=f.children,mu(l,f)?w=null:h!==null&&mu(l,h)&&(i.flags|=32),ep(t,i),Fn(t,i,w,a),i.child;case 6:return t===null&&wu(i),null;case 13:return rp(t,i,a);case 4:return Nu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Is(i,null,l,a):Fn(t,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ci(l,f),Zh(t,i,l,f,a);case 7:return Fn(t,i,i.pendingProps,a),i.child;case 8:return Fn(t,i,i.pendingProps.children,a),i.child;case 12:return Fn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,w=f.value,zt(No,l._currentValue),l._currentValue=w,h!==null)if(Ai(h.value,w)){if(h.children===f.children&&!Vn.current){i=ur(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){w=h.child;for(var H=U.firstContext;H!==null;){if(H.context===l){if(h.tag===1){H=lr(-1,a&-a),H.tag=2;var me=h.updateQueue;if(me!==null){me=me.shared;var we=me.pending;we===null?H.next=H:(H.next=we.next,we.next=H),me.pending=H}}h.lanes|=a,H=h.alternate,H!==null&&(H.lanes|=a),bu(h.return,a,i),U.lanes|=a;break}H=H.next}}else if(h.tag===10)w=h.type===i.type?null:h.child;else if(h.tag===18){if(w=h.return,w===null)throw Error(n(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),bu(w,a,i),w=h.sibling}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===i){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}Fn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Fs(i,a),f=di(f),l=l(f),i.flags|=1,Fn(t,i,l,a),i.child;case 14:return l=i.type,f=Ci(l,i.pendingProps),f=Ci(l.type,f),jh(t,i,l,f,a);case 15:return Jh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:Ci(l,f),Wo(t,i),i.tag=1,Gn(l)?(t=!0,Ao(i)):t=!1,Fs(i,a),Gh(i,l,f),Xu(i,l,f,a),$u(null,i,l,!0,t,a);case 19:return ap(t,i,a);case 22:return Qh(t,i,a)}throw Error(n(156,i.tag))};function Pp(t,i){return ki(t,i)}function Yg(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(t,i,a,l){return new Yg(t,i,a,l)}function mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qg(t){if(typeof t=="function")return mc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===K)return 11;if(t===$)return 14}return 2}function Hr(t,i){var a=t.alternate;return a===null?(a=mi(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function tl(t,i,a,l,f,h){var w=2;if(l=t,typeof t=="function")mc(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case F:return ls(a.children,f,h,i);case E:w=8,f|=8;break;case b:return t=mi(12,a,i,f|2),t.elementType=b,t.lanes=h,t;case ne:return t=mi(13,a,i,f),t.elementType=ne,t.lanes=h,t;case B:return t=mi(19,a,i,f),t.elementType=B,t.lanes=h,t;case ie:return nl(a,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:w=10;break e;case Y:w=9;break e;case K:w=11;break e;case $:w=14;break e;case de:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=mi(w,a,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function ls(t,i,a,l){return t=mi(7,t,l,i),t.lanes=a,t}function nl(t,i,a,l){return t=mi(22,t,l,i),t.elementType=ie,t.lanes=a,t.stateNode={isHidden:!1},t}function gc(t,i,a){return t=mi(6,t,null,i),t.lanes=a,t}function _c(t,i,a){return i=mi(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Kg(t,i,a,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ge(0),this.expirationTimes=Ge(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ge(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function vc(t,i,a,l,f,h,w,U,H){return t=new Kg(t,i,a,U,H),i===1?(i=1,h===!0&&(i|=8)):i=0,h=mi(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lu(h),t}function $g(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Lp(t){if(!t)return Nr;t=t._reactInternals;e:{if(an(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Gn(a))return sh(t,a,i)}return i}function Np(t,i,a,l,f,h,w,U,H){return t=vc(a,l,!0,t,f,h,w,U,H),t.context=Lp(null),a=t.current,l=On(),f=kr(a),h=lr(l,f),h.callback=i??null,Ur(a,h,f),t.current.lanes=f,on(t,f,l),Yn(t,l),t}function il(t,i,a,l){var f=i.current,h=On(),w=kr(f);return a=Lp(a),i.context===null?i.context=a:i.pendingContext=a,i=lr(h,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ur(f,i,w),t!==null&&(Li(t,f,w,h),Io(t,f,w)),w}function rl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function xc(t,i){Dp(t,i),(t=t.alternate)&&Dp(t,i)}function Zg(){return null}var Ip=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sc(t){this._internalRoot=t}sl.prototype.render=Sc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));il(t,i,null,null)},sl.prototype.unmount=Sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;ss(function(){il(null,t,null,null)}),i[ir]=null}};function sl(t){this._internalRoot=t}sl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ei();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Rr.length&&i!==0&&i<Rr[a].priority;a++);Rr.splice(a,0,t),a===0&&Sd(t)}};function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function al(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Up(){}function jg(t,i,a,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var me=rl(w);h.call(me)}}var w=Np(i,l,t,0,null,!1,!1,"",Up);return t._reactRootContainer=w,t[ir]=w.current,wa(t.nodeType===8?t.parentNode:t),ss(),w}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var U=l;l=function(){var me=rl(H);U.call(me)}}var H=vc(t,0,!1,null,null,!1,!1,"",Up);return t._reactRootContainer=H,t[ir]=H.current,wa(t.nodeType===8?t.parentNode:t),ss(function(){il(i,H,a,l)}),H}function ol(t,i,a,l,f){var h=a._reactRootContainer;if(h){var w=h;if(typeof f=="function"){var U=f;f=function(){var H=rl(w);U.call(H)}}il(i,w,t,f)}else w=jg(a,i,t,f,l);return rl(w)}nr=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=qe(i.pendingLanes);a!==0&&(An(i,a|1),Yn(i,Vt()),(bt&6)===0&&(Hs=Vt()+500,Dr()))}break;case 13:ss(function(){var l=or(t,1);if(l!==null){var f=On();Li(l,t,1,f)}}),xc(t,1)}},Pt=function(t){if(t.tag===13){var i=or(t,134217728);if(i!==null){var a=On();Li(i,t,134217728,a)}xc(t,134217728)}},qt=function(t){if(t.tag===13){var i=kr(t),a=or(t,i);if(a!==null){var l=On();Li(a,t,i,l)}xc(t,i)}},Ei=function(){return mt},Ut=function(t,i){var a=mt;try{return mt=t,i()}finally{mt=a}},$e=function(t,i,a){switch(i){case"input":if(ct(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=wo(l);if(!f)throw Error(n(90));pe(l),ct(l,f)}}}break;case"textarea":en(t,a);break;case"select":i=a.value,i!=null&&Ct(t,!!a.multiple,i,!1)}},Re=dc,Se=ss;var Jg={usingClientEntryPoint:!1,Events:[Ra,Cs,wo,ve,Me,dc]},Ha={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qg={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Un(t),t===null?null:t.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||Zg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{se=ll.inject(Qg),re=ll}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jg,qn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(i))throw Error(n(200));return $g(t,i,null,a)},qn.createRoot=function(t,i){if(!yc(t))throw Error(n(299));var a=!1,l="",f=Ip;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=vc(t,1,!1,null,null,a,!1,l,f),t[ir]=i.current,wa(t.nodeType===8?t.parentNode:t),new Sc(i)},qn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Un(i),t=t===null?null:t.stateNode,t},qn.flushSync=function(t){return ss(t)},qn.hydrate=function(t,i,a){if(!al(i))throw Error(n(200));return ol(null,t,i,!0,a)},qn.hydrateRoot=function(t,i,a){if(!yc(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,f=!1,h="",w=Ip;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Np(i,null,t,1,a??null,f,!1,h,w),t[ir]=i.current,wa(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new sl(i)},qn.render=function(t,i,a){if(!al(i))throw Error(n(200));return ol(null,t,i,!1,a)},qn.unmountComponentAtNode=function(t){if(!al(t))throw Error(n(40));return t._reactRootContainer?(ss(function(){ol(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1},qn.unstable_batchedUpdates=dc,qn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!al(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ol(t,i,a,!1,l)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var Gp;function l_(){if(Gp)return wc.exports;Gp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wc.exports=o_(),wc.exports}var Wp;function u_(){if(Wp)return ul;Wp=1;var s=l_();return ul.createRoot=s.createRoot,ul.hydrateRoot=s.hydrateRoot,ul}var c_=u_();const f_=t_(c_);var Dn=Zf();function d_({onSelect:s}){return xe.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900",children:[xe.jsx("h1",{className:"text-6xl font-bold text-white mb-4 animate-pulse",children:"⚔️ Лиза vs Даша ⚔️"}),xe.jsx("p",{className:"text-xl text-gray-300 mb-12",children:"3D Шутер 1 на 1"}),xe.jsx("h2",{className:"text-3xl text-white mb-8",children:"Выбери персонажа:"}),xe.jsxs("div",{className:"flex gap-12",children:[xe.jsxs("button",{onClick:()=>s("lisa"),className:"group flex flex-col items-center p-8 bg-gradient-to-b from-pink-600 to-pink-800 rounded-2xl border-4 border-pink-400 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50",children:[xe.jsx("div",{className:"text-8xl mb-4 group-hover:animate-bounce",children:"👧"}),xe.jsx("span",{className:"text-3xl font-bold text-white",children:"Лиза"}),xe.jsx("span",{className:"text-pink-200 mt-2",children:"Девочка-воин"}),xe.jsx("div",{className:"mt-4 text-sm text-pink-300",children:"❤️ HP: 100 | 🏃 Скорость: Средняя"})]}),xe.jsxs("button",{onClick:()=>s("dasha"),className:"group flex flex-col items-center p-8 bg-gradient-to-b from-orange-600 to-orange-800 rounded-2xl border-4 border-orange-400 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50",children:[xe.jsx("div",{className:"text-8xl mb-4 group-hover:animate-bounce",children:"🐱"}),xe.jsx("span",{className:"text-3xl font-bold text-white",children:"Даша"}),xe.jsx("span",{className:"text-orange-200 mt-2",children:"Кошка-снайпер"}),xe.jsx("div",{className:"mt-4 text-sm text-orange-300",children:"❤️ HP: 80 | 🏃 Скорость: Быстрая"})]})]}),xe.jsxs("div",{className:"mt-12 text-gray-400 text-center",children:[xe.jsx("p",{className:"mb-2",children:"🎮 Управление:"}),xe.jsx("p",{children:"WASD - движение | Мышь - прицел | ЛКМ - стрельба | R - перезарядка"})]})]})}function h_({onSelect:s,onBack:e}){const n=[{key:"ak",stats:Ja.ak,desc:"Автоматический режим. Зажми ЛКМ для непрерывной стрельбы!"},{key:"shotgun",stats:Ja.shotgun,desc:"8 дробинок за выстрел! Огромный урон вблизи."},{key:"pistol",stats:Ja.pistol,desc:"Надёжный пистолет. Точный и быстрый."},{key:"sniper",stats:Ja.sniper,desc:"Один выстрел — одно убийство. Огромный урон."}];return xe.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900",children:[xe.jsx("h2",{className:"text-4xl font-bold text-white mb-4",children:"🔫 Выбери оружие"}),xe.jsx("p",{className:"text-gray-300 mb-8",children:"Каждое оружие уникально — выбирай с умом!"}),xe.jsx("div",{className:"grid grid-cols-2 gap-6 max-w-3xl px-4",children:n.map(({key:r,stats:o,desc:u})=>xe.jsxs("button",{onClick:()=>s(r),className:"group flex flex-col items-center p-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-xl border-2 border-gray-500 hover:border-yellow-400 hover:scale-105 transition-all duration-200",children:[xe.jsx("div",{className:"text-5xl mb-3",children:o.emoji}),xe.jsx("span",{className:"text-2xl font-bold text-white mb-1",children:o.name}),xe.jsx("p",{className:"text-xs text-yellow-300 mb-3 text-center italic",children:u}),xe.jsxs("div",{className:"text-sm text-gray-300 space-y-1 text-left w-full",children:[xe.jsxs("div",{className:"flex justify-between",children:[xe.jsx("span",{children:"💥 Урон:"}),xe.jsx("span",{className:"text-white font-bold",children:o.damage})]}),xe.jsxs("div",{className:"flex justify-between",children:[xe.jsx("span",{children:"⚡ Скорострельность:"}),xe.jsxs("span",{className:"text-white font-bold",children:[o.fireRate,"мс"]})]}),xe.jsxs("div",{className:"flex justify-between",children:[xe.jsx("span",{children:"🎯 Разброс:"}),xe.jsxs("span",{className:"text-white font-bold",children:[(o.spread*100).toFixed(1),"%"]})]}),xe.jsxs("div",{className:"flex justify-between",children:[xe.jsx("span",{children:"🔢 Пуль за выстрел:"}),xe.jsx("span",{className:"text-white font-bold",children:o.bulletsPerShot})]}),r==="ak"&&xe.jsx("div",{className:"text-green-400 text-xs mt-2 font-bold",children:"⚡ АВТОМАТИЧЕСКИЙ ОГОНЬ"})]})]},r))}),xe.jsx("button",{onClick:e,className:"mt-8 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors",children:"← Назад"})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jf="186",p_=0,Xp=1,m_=2,Nl=1,Hm=2,Za=3,gs=0,Zn=1,gr=2,xr=0,Qa=1,Yp=2,qp=3,Kp=4,g_=5,na=100,__=101,v_=102,x_=103,S_=104,y_=200,M_=201,E_=202,w_=203,Vm=204,Gm=205,T_=206,A_=207,R_=208,C_=209,b_=210,P_=211,L_=212,N_=213,D_=214,of=0,lf=1,uf=2,eo=3,cf=4,ff=5,df=6,hf=7,Jf=0,I_=1,U_=2,$i=0,Wm=1,Xm=2,Ym=3,qm=4,Km=5,$m=6,Zm=7,jm=300,_s=301,aa=302,Rc=303,Cc=304,Xl=306,pf=1e3,vr=1001,mf=1002,wn=1003,F_=1004,cl=1005,In=1006,bc=1007,ps=1008,ai=1009,Jm=1010,Qm=1011,to=1012,Qf=1013,Zi=1014,qi=1015,ji=1016,ed=1017,td=1018,no=1020,e0=35902,t0=35899,n0=1021,i0=1022,Fi=1023,Mr=1026,ms=1027,r0=1028,nd=1029,vs=1030,id=1031,rd=1033,Dl=33776,Il=33777,Ul=33778,Fl=33779,gf=35840,_f=35841,vf=35842,xf=35843,Sf=36196,yf=37492,Mf=37496,Ef=37488,wf=37489,Bl=37490,Tf=37491,Af=37808,Rf=37809,Cf=37810,bf=37811,Pf=37812,Lf=37813,Nf=37814,Df=37815,If=37816,Uf=37817,Ff=37818,Of=37819,Bf=37820,kf=37821,zf=36492,Hf=36494,Vf=36495,Gf=36283,Wf=36284,kl=36285,Xf=36286,O_=3200,Yf=0,B_=1,$r="",_i="srgb",zl="srgb-linear",Hl="linear",Ft="srgb",Pc=7680,k_=519,z_=512,H_=513,V_=514,sd=515,G_=516,W_=517,ad=518,X_=519,Y_=35044,$p="300 es",Ki=2e3,io=2001;function q_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function K_(){const s=Vl("canvas");return s.style.display="block",s}const Zp={};function jp(...s){const e="THREE."+s.shift();console.log(e,...s)}function s0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ot(...s){s=s0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Nt(...s){s=s0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function ra(...s){const e=s.join(" ");e in Zp||(Zp[e]=!0,ot(...s))}function $_(s,e,n){return new Promise(function(r,o){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const Z_={[of]:lf,[uf]:df,[cf]:hf,[eo]:ff,[lf]:of,[df]:uf,[hf]:cf,[ff]:eo};class xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,qf=180/Math.PI;function so(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[n&63|128]+Ln[n>>8&255]+"-"+Ln[n>>16&255]+Ln[n>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function wt(s,e,n){return Math.max(e,Math.min(n,s))}function j_(s,e){return(s%e+e)%e}function Nc(s,e,n){return(1-n)*s+n*e}function Ga(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pd=class pd{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*o+e.x,this.y=u*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pd.prototype.isVector2=!0;let xt=pd;class la{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,c,d){let p=r[o+0],m=r[o+1],v=r[o+2],x=r[o+3],g=u[c+0],M=u[c+1],A=u[c+2],P=u[c+3];if(x!==P||p!==g||m!==M||v!==A){let S=p*g+m*M+v*A+x*P;S<0&&(g=-g,M=-M,A=-A,P=-P,S=-S);let _=1-d;if(S<.9995){const I=Math.acos(S),G=Math.sin(I);_=Math.sin(_*I)/G,d=Math.sin(d*I)/G,p=p*_+g*d,m=m*_+M*d,v=v*_+A*d,x=x*_+P*d}else{p=p*_+g*d,m=m*_+M*d,v=v*_+A*d,x=x*_+P*d;const I=1/Math.sqrt(p*p+m*m+v*v+x*x);p*=I,m*=I,v*=I,x*=I}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,o,u,c){const d=r[o],p=r[o+1],m=r[o+2],v=r[o+3],x=u[c],g=u[c+1],M=u[c+2],A=u[c+3];return e[n]=d*A+v*x+p*M-m*g,e[n+1]=p*A+v*g+m*x-d*M,e[n+2]=m*A+v*M+d*g-p*x,e[n+3]=v*A-d*x-p*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(o/2),x=d(u/2),g=p(r/2),M=p(o/2),A=p(u/2);switch(c){case"XYZ":this._x=g*v*x+m*M*A,this._y=m*M*x-g*v*A,this._z=m*v*A+g*M*x,this._w=m*v*x-g*M*A;break;case"YXZ":this._x=g*v*x+m*M*A,this._y=m*M*x-g*v*A,this._z=m*v*A-g*M*x,this._w=m*v*x+g*M*A;break;case"ZXY":this._x=g*v*x-m*M*A,this._y=m*M*x+g*v*A,this._z=m*v*A+g*M*x,this._w=m*v*x-g*M*A;break;case"ZYX":this._x=g*v*x-m*M*A,this._y=m*M*x+g*v*A,this._z=m*v*A-g*M*x,this._w=m*v*x+g*M*A;break;case"YZX":this._x=g*v*x+m*M*A,this._y=m*M*x+g*v*A,this._z=m*v*A-g*M*x,this._w=m*v*x-g*M*A;break;case"XZY":this._x=g*v*x-m*M*A,this._y=m*M*x-g*v*A,this._z=m*v*A+g*M*x,this._w=m*v*x+g*M*A;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],c=n[1],d=n[5],p=n[9],m=n[2],v=n[6],x=n[10],g=r+d+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-p)*M,this._y=(u-m)*M,this._z=(c-o)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(v-p)/M,this._x=.25*M,this._y=(o+c)/M,this._z=(u+m)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-m)/M,this._x=(o+c)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(c-o)/M,this._x=(u+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,c=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+c*d+o*m-u*p,this._y=o*v+c*p+u*d-r*m,this._z=u*v+c*m+r*p-o*d,this._w=c*v-r*d-o*p-u*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,u=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,u=-u,c=-c,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,n=Math.sin(n*m)/v,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const md=class md{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*o-d*r),v=2*(d*n-u*o),x=2*(u*r-c*n);return this.x=n+p*m+c*x-d*v,this.y=r+p*v+d*m-u*x,this.z=o+p*x+u*v-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this.z=wt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this.z=wt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,c=n.x,d=n.y,p=n.z;return this.x=o*p-u*d,this.y=u*c-r*p,this.z=r*d-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};md.prototype.isVector3=!0;let te=md;const Dc=new te,Jp=new la,gd=class gd{constructor(e,n,r,o,u,c,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,d,p,m)}set(e,n,r,o,u,c,d,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=c,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],d=r[3],p=r[6],m=r[1],v=r[4],x=r[7],g=r[2],M=r[5],A=r[8],P=o[0],S=o[3],_=o[6],I=o[1],G=o[4],R=o[7],L=o[2],C=o[5],F=o[8];return u[0]=c*P+d*I+p*L,u[3]=c*S+d*G+p*C,u[6]=c*_+d*R+p*F,u[1]=m*P+v*I+x*L,u[4]=m*S+v*G+x*C,u[7]=m*_+v*R+x*F,u[2]=g*P+M*I+A*L,u[5]=g*S+M*G+A*C,u[8]=g*_+M*R+A*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*c*v-n*d*m-r*u*v+r*d*p+o*u*m-o*c*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],v=e[8],x=v*c-d*m,g=d*p-v*u,M=m*u-c*p,A=n*x+r*g+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/A;return e[0]=x*P,e[1]=(o*m-v*r)*P,e[2]=(d*r-o*c)*P,e[3]=g*P,e[4]=(v*n-o*p)*P,e[5]=(o*u-d*n)*P,e[6]=M*P,e[7]=(r*p-m*n)*P,e[8]=(c*n-r*u)*P,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,c,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*c+m*d)+c+e,-o*m,o*p,-o*(-m*c+p*d)+d+n,0,0,1),this}scale(e,n){return ra("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ic.makeScale(e,n)),this}rotate(e){return ra("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ic.makeRotation(-e)),this}translate(e,n){return ra("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ic.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gd.prototype.isMatrix3=!0;let ft=gd;const Ic=new ft,Qp=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J_(){const s={enabled:!0,workingColorSpace:zl,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ft&&(o.r=Sr(o.r),o.g=Sr(o.g),o.b=Sr(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ft&&(o.r=sa(o.r),o.g=sa(o.g),o.b=sa(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===$r?Hl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return ra("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return ra("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[zl]:{primaries:e,whitePoint:r,transfer:Hl,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const Et=J_();function Sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function sa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Gs;class Q_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Gs===void 0&&(Gs=Vl("canvas")),Gs.width=e.width,Gs.height=e.height;const o=Gs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Gs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=Sr(u[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Sr(n[r]/255)*255):n[r]=Sr(n[r]);return{data:n,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ev=0;class od{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?u.push(Uc(o[c].image)):u.push(Uc(o[c]))}else u=Uc(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function Uc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Q_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let tv=0;const Fc=new te;class kn extends xs{constructor(e=kn.DEFAULT_IMAGE,n=kn.DEFAULT_MAPPING,r=vr,o=vr,u=In,c=ps,d=Fi,p=ai,m=kn.DEFAULT_ANISOTROPY,v=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=so(),this.name="",this.source=new od(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ot(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pf:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pf:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=jm;kn.DEFAULT_ANISOTROPY=1;const _d=class _d{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const p=e.elements,m=p[0],v=p[4],x=p[8],g=p[1],M=p[5],A=p[9],P=p[2],S=p[6],_=p[10];if(Math.abs(v-g)<.01&&Math.abs(x-P)<.01&&Math.abs(A-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+P)<.1&&Math.abs(A+S)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const G=(m+1)/2,R=(M+1)/2,L=(_+1)/2,C=(v+g)/4,F=(x+P)/4,E=(A+S)/4;return G>R&&G>L?G<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(G),o=C/r,u=F/r):R>L?R<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(R),r=C/o,u=E/o):L<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(L),r=F/u,o=E/u),this.set(r,o,u,n),this}let I=Math.sqrt((S-A)*(S-A)+(x-P)*(x-P)+(g-v)*(g-v));return Math.abs(I)<.001&&(I=1),this.x=(S-A)/I,this.y=(x-P)/I,this.z=(g-v)/I,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=wt(this.x,e.x,n.x),this.y=wt(this.y,e.y,n.y),this.z=wt(this.z,e.z,n.z),this.w=wt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=wt(this.x,e,n),this.y=wt(this.y,e,n),this.z=wt(this.z,e,n),this.w=wt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_d.prototype.isVector4=!0;let Qt=_d;class nv extends xs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Qt(0,0,e,n),this.scissorTest=!1,this.viewport=new Qt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},u=new kn(o),c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new od(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends nv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class a0 extends kn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iv extends kn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Wl=class Wl{constructor(e,n,r,o,u,c,d,p,m,v,x,g,M,A,P,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,d,p,m,v,x,g,M,A,P,S)}set(e,n,r,o,u,c,d,p,m,v,x,g,M,A,P,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=u,_[5]=c,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=x,_[14]=g,_[3]=M,_[7]=A,_[11]=P,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ws.setFromMatrixColumn(e,0).length(),u=1/Ws.setFromMatrixColumn(e,1).length(),c=1/Ws.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const g=c*v,M=c*x,A=d*v,P=d*x;n[0]=p*v,n[4]=-p*x,n[8]=m,n[1]=M+A*m,n[5]=g-P*m,n[9]=-d*p,n[2]=P-g*m,n[6]=A+M*m,n[10]=c*p}else if(e.order==="YXZ"){const g=p*v,M=p*x,A=m*v,P=m*x;n[0]=g+P*d,n[4]=A*d-M,n[8]=c*m,n[1]=c*x,n[5]=c*v,n[9]=-d,n[2]=M*d-A,n[6]=P+g*d,n[10]=c*p}else if(e.order==="ZXY"){const g=p*v,M=p*x,A=m*v,P=m*x;n[0]=g-P*d,n[4]=-c*x,n[8]=A+M*d,n[1]=M+A*d,n[5]=c*v,n[9]=P-g*d,n[2]=-c*m,n[6]=d,n[10]=c*p}else if(e.order==="ZYX"){const g=c*v,M=c*x,A=d*v,P=d*x;n[0]=p*v,n[4]=A*m-M,n[8]=g*m+P,n[1]=p*x,n[5]=P*m+g,n[9]=M*m-A,n[2]=-m,n[6]=d*p,n[10]=c*p}else if(e.order==="YZX"){const g=c*p,M=c*m,A=d*p,P=d*m;n[0]=p*v,n[4]=P-g*x,n[8]=A*x+M,n[1]=x,n[5]=c*v,n[9]=-d*v,n[2]=-m*v,n[6]=M*x+A,n[10]=g-P*x}else if(e.order==="XZY"){const g=c*p,M=c*m,A=d*p,P=d*m;n[0]=p*v,n[4]=-x,n[8]=m*v,n[1]=g*x+P,n[5]=c*v,n[9]=M*x-A,n[2]=A*x-M,n[6]=d*v,n[10]=P*x+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rv,e,sv)}lookAt(e,n,r){const o=this.elements;return ri.subVectors(e,n),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Gr.crossVectors(r,ri),Gr.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Gr.crossVectors(r,ri)),Gr.normalize(),fl.crossVectors(ri,Gr),o[0]=Gr.x,o[4]=fl.x,o[8]=ri.x,o[1]=Gr.y,o[5]=fl.y,o[9]=ri.y,o[2]=Gr.z,o[6]=fl.z,o[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],d=r[4],p=r[8],m=r[12],v=r[1],x=r[5],g=r[9],M=r[13],A=r[2],P=r[6],S=r[10],_=r[14],I=r[3],G=r[7],R=r[11],L=r[15],C=o[0],F=o[4],E=o[8],b=o[12],O=o[1],Y=o[5],K=o[9],ne=o[13],B=o[2],$=o[6],de=o[10],ie=o[14],Q=o[3],Z=o[7],W=o[11],N=o[15];return u[0]=c*C+d*O+p*B+m*Q,u[4]=c*F+d*Y+p*$+m*Z,u[8]=c*E+d*K+p*de+m*W,u[12]=c*b+d*ne+p*ie+m*N,u[1]=v*C+x*O+g*B+M*Q,u[5]=v*F+x*Y+g*$+M*Z,u[9]=v*E+x*K+g*de+M*W,u[13]=v*b+x*ne+g*ie+M*N,u[2]=A*C+P*O+S*B+_*Q,u[6]=A*F+P*Y+S*$+_*Z,u[10]=A*E+P*K+S*de+_*W,u[14]=A*b+P*ne+S*ie+_*N,u[3]=I*C+G*O+R*B+L*Q,u[7]=I*F+G*Y+R*$+L*Z,u[11]=I*E+G*K+R*de+L*W,u[15]=I*b+G*ne+R*ie+L*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],c=e[1],d=e[5],p=e[9],m=e[13],v=e[2],x=e[6],g=e[10],M=e[14],A=e[3],P=e[7],S=e[11],_=e[15],I=p*M-m*g,G=d*M-m*x,R=d*g-p*x,L=c*M-m*v,C=c*g-p*v,F=c*x-d*v;return n*(P*I-S*G+_*R)-r*(A*I-S*L+_*C)+o*(A*G-P*L+_*F)-u*(A*R-P*C+S*F)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[1],c=e[5],d=e[9],p=e[2],m=e[6],v=e[10];return n*(c*v-d*m)-r*(u*v-d*p)+o*(u*m-c*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],v=e[8],x=e[9],g=e[10],M=e[11],A=e[12],P=e[13],S=e[14],_=e[15],I=n*d-r*c,G=n*p-o*c,R=n*m-u*c,L=r*p-o*d,C=r*m-u*d,F=o*m-u*p,E=v*P-x*A,b=v*S-g*A,O=v*_-M*A,Y=x*S-g*P,K=x*_-M*P,ne=g*_-M*S,B=I*ne-G*K+R*Y+L*O-C*b+F*E;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/B;return e[0]=(d*ne-p*K+m*Y)*$,e[1]=(o*K-r*ne-u*Y)*$,e[2]=(P*F-S*C+_*L)*$,e[3]=(g*C-x*F-M*L)*$,e[4]=(p*O-c*ne-m*b)*$,e[5]=(n*ne-o*O+u*b)*$,e[6]=(S*R-A*F-_*G)*$,e[7]=(v*F-g*R+M*G)*$,e[8]=(c*K-d*O+m*E)*$,e[9]=(r*O-n*K-u*E)*$,e[10]=(A*C-P*R+_*I)*$,e[11]=(x*R-v*C-M*I)*$,e[12]=(d*b-c*Y-p*E)*$,e[13]=(n*Y-r*b+o*E)*$,e[14]=(P*G-A*L-S*I)*$,e[15]=(v*L-x*G+g*I)*$,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,c=e.x,d=e.y,p=e.z,m=u*c,v=u*d;return this.set(m*c+r,m*d-o*p,m*p+o*d,0,m*d+o*p,v*d+r,v*p-o*c,0,m*p-o*d,v*p+o*c,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,c){return this.set(1,r,u,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,c=n._y,d=n._z,p=n._w,m=u+u,v=c+c,x=d+d,g=u*m,M=u*v,A=u*x,P=c*v,S=c*x,_=d*x,I=p*m,G=p*v,R=p*x,L=r.x,C=r.y,F=r.z;return o[0]=(1-(P+_))*L,o[1]=(M+R)*L,o[2]=(A-G)*L,o[3]=0,o[4]=(M-R)*C,o[5]=(1-(g+_))*C,o[6]=(S+I)*C,o[7]=0,o[8]=(A+G)*F,o[9]=(S-I)*F,o[10]=(1-(g+P))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),n.identity(),this;let c=Ws.set(o[0],o[1],o[2]).length();const d=Ws.set(o[4],o[5],o[6]).length(),p=Ws.set(o[8],o[9],o[10]).length();u<0&&(c=-c),Ni.copy(this);const m=1/c,v=1/d,x=1/p;return Ni.elements[0]*=m,Ni.elements[1]*=m,Ni.elements[2]*=m,Ni.elements[4]*=v,Ni.elements[5]*=v,Ni.elements[6]*=v,Ni.elements[8]*=x,Ni.elements[9]*=x,Ni.elements[10]*=x,n.setFromRotationMatrix(Ni),r.x=c,r.y=d,r.z=p,this}makePerspective(e,n,r,o,u,c,d=Ki,p=!1){const m=this.elements,v=2*u/(n-e),x=2*u/(r-o),g=(n+e)/(n-e),M=(r+o)/(r-o);let A,P;if(p)A=u/(c-u),P=c*u/(c-u);else if(d===Ki)A=-(c+u)/(c-u),P=-2*c*u/(c-u);else if(d===io)A=-c/(c-u),P=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=x,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=P,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,u,c,d=Ki,p=!1){const m=this.elements,v=2/(n-e),x=2/(r-o),g=-(n+e)/(n-e),M=-(r+o)/(r-o);let A,P;if(p)A=1/(c-u),P=c/(c-u);else if(d===Ki)A=-2/(c-u),P=-(c+u)/(c-u);else if(d===io)A=-1/(c-u),P=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=x,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=A,m[14]=P,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Wl.prototype.isMatrix4=!0;let sn=Wl;const Ws=new te,Ni=new sn,rv=new te(0,0,0),sv=new te(1,1,1),Gr=new te,fl=new te,ri=new te,tm=new sn,nm=new la;class Zr{constructor(e=0,n=0,r=0,o=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],c=o[4],d=o[8],p=o[1],m=o[5],v=o[9],x=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-wt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class o0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let av=0;const im=new te,Xs=new la,fr=new sn,dl=new te,Wa=new te,ov=new te,lv=new la,rm=new te(1,0,0),sm=new te(0,1,0),am=new te(0,0,1),om={type:"added"},uv={type:"removed"},Ys={type:"childadded",child:null},Oc={type:"childremoved",child:null};class Tn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new te,n=new Zr,r=new la,o=new te(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new ft}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xs.setFromAxisAngle(e,n),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,n){return Xs.setFromAxisAngle(e,n),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(rm,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(am,e)}translateOnAxis(e,n){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rm,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?dl.copy(e):dl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(Wa,dl,this.up):fr.lookAt(dl,Wa,this.up),this.quaternion.setFromRotationMatrix(fr),o&&(fr.extractRotation(o.matrixWorld),Xs.setFromRotationMatrix(fr),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(om),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(uv),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(om),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,ov),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,lv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,u=this.matrix.elements;u[12]+=n-u[0]*n-u[4]*r-u[8]*o,u[13]+=r-u[1]*n-u[5]*r-u[9]*o,u[14]+=o-u[2]*n-u[6]*r-u[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const u=this.children;for(let c=0,d=u.length;c<d;c++)u[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const x=p[m];u(e.shapes,x)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(u(e.animations,p))}}if(n){const d=c(e.geometries),p=c(e.materials),m=c(e.textures),v=c(e.images),x=c(e.shapes),g=c(e.skeletons),M=c(e.animations),A=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function c(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Tn.DEFAULT_UP=new te(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _r extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cv={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,c=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const P of e.hand.values()){const S=n.getJointPose(P,r),_=this._getHandJoint(m,P);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],g=v.position.distanceTo(x.position),M=.02,A=.005;m.inputState.pinching&&g>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(cv)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new _r;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},hl={h:0,s:0,l:0};function kc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Tt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Et.workingColorSpace){if(e=j_(e,1),n=wt(n,0,1),r=wt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=kc(c,u,e+1/3),this.g=kc(c,u,e),this.b=kc(c,u,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,n=_i){function r(u){u!==void 0&&parseFloat(u)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_i){const r=l0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Et.workingToColorSpace(Nn.copy(this),e),Math.round(wt(Nn.r*255,0,255))*65536+Math.round(wt(Nn.g*255,0,255))*256+Math.round(wt(Nn.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(Nn.copy(this),n);const r=Nn.r,o=Nn.g,u=Nn.b,c=Math.max(r,o,u),d=Math.min(r,o,u);let p,m;const v=(d+c)/2;if(d===c)p=0,m=0;else{const x=c-d;switch(m=v<=.5?x/(c+d):x/(2-c-d),c){case r:p=(o-u)/x+(o<u?6:0);break;case o:p=(u-r)/x+2;break;case u:p=(r-o)/x+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(Nn.copy(this),n),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=_i){Et.workingToColorSpace(Nn.copy(this),e);const n=Nn.r,r=Nn.g,o=Nn.b;return e!==_i?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+n,Wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Wr),e.getHSL(hl);const r=Nc(Wr.h,hl.h,n),o=Nc(Wr.s,hl.s,n),u=Nc(Wr.l,hl.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Tt;Tt.NAMES=l0;class fv extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Di=new te,dr=new te,zc=new te,hr=new te,qs=new te,Ks=new te,lm=new te,Hc=new te,Vc=new te,Gc=new te,Wc=new Qt,Xc=new Qt,Yc=new Qt;class Ui{constructor(e=new te,n=new te,r=new te){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Di.subVectors(e,n),o.cross(Di);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){Di.subVectors(o,n),dr.subVectors(r,n),zc.subVectors(e,n);const c=Di.dot(Di),d=Di.dot(dr),p=Di.dot(zc),m=dr.dot(dr),v=dr.dot(zc),x=c*m-d*d;if(x===0)return u.set(0,0,0),null;const g=1/x,M=(m*p-d*v)*g,A=(c*v-d*p)*g;return u.set(1-M-A,A,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,n,r,o,u,c,d,p){return this.getBarycoord(e,n,r,o,hr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,hr.x),p.addScaledVector(c,hr.y),p.addScaledVector(d,hr.z),p)}static getInterpolatedAttribute(e,n,r,o,u,c){return Wc.setScalar(0),Xc.setScalar(0),Yc.setScalar(0),Wc.fromBufferAttribute(e,n),Xc.fromBufferAttribute(e,r),Yc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Wc,u.x),c.addScaledVector(Xc,u.y),c.addScaledVector(Yc,u.z),c}static isFrontFacing(e,n,r,o){return Di.subVectors(r,n),dr.subVectors(e,n),Di.cross(dr).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Di.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return Ui.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let c,d;qs.subVectors(o,r),Ks.subVectors(u,r),Hc.subVectors(e,r);const p=qs.dot(Hc),m=Ks.dot(Hc);if(p<=0&&m<=0)return n.copy(r);Vc.subVectors(e,o);const v=qs.dot(Vc),x=Ks.dot(Vc);if(v>=0&&x<=v)return n.copy(o);const g=p*x-v*m;if(g<=0&&p>=0&&v<=0)return c=p/(p-v),n.copy(r).addScaledVector(qs,c);Gc.subVectors(e,u);const M=qs.dot(Gc),A=Ks.dot(Gc);if(A>=0&&M<=A)return n.copy(u);const P=M*m-p*A;if(P<=0&&m>=0&&A<=0)return d=m/(m-A),n.copy(r).addScaledVector(Ks,d);const S=v*A-M*x;if(S<=0&&x-v>=0&&M-A>=0)return lm.subVectors(u,o),d=(x-v)/(x-v+(M-A)),n.copy(o).addScaledVector(lm,d);const _=1/(S+P+g);return c=P*_,d=g*_,n.copy(r).addScaledVector(qs,c).addScaledVector(Ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ao{constructor(e=new te(1/0,1/0,1/0),n=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ii):Ii.fromBufferAttribute(u,c),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pl.copy(r.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),ml.subVectors(this.max,Xa),$s.subVectors(e.a,Xa),Zs.subVectors(e.b,Xa),js.subVectors(e.c,Xa),Xr.subVectors(Zs,$s),Yr.subVectors(js,Zs),us.subVectors($s,js);let n=[0,-Xr.z,Xr.y,0,-Yr.z,Yr.y,0,-us.z,us.y,Xr.z,0,-Xr.x,Yr.z,0,-Yr.x,us.z,0,-us.x,-Xr.y,Xr.x,0,-Yr.y,Yr.x,0,-us.y,us.x,0];return!qc(n,$s,Zs,js,ml)||(n=[1,0,0,0,1,0,0,0,1],!qc(n,$s,Zs,js,ml))?!1:(gl.crossVectors(Xr,Yr),n=[gl.x,gl.y,gl.z],qc(n,$s,Zs,js,ml))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pr=[new te,new te,new te,new te,new te,new te,new te,new te],Ii=new te,pl=new ao,$s=new te,Zs=new te,js=new te,Xr=new te,Yr=new te,us=new te,Xa=new te,ml=new te,gl=new te,cs=new te;function qc(s,e,n,r,o){for(let u=0,c=s.length-3;u<=c;u+=3){cs.fromArray(s,u);const d=o.x*Math.abs(cs.x)+o.y*Math.abs(cs.y)+o.z*Math.abs(cs.z),p=e.dot(cs),m=n.dot(cs),v=r.dot(cs);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const dn=new te,_l=new xt;let dv=0;class yr extends xs{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Y_,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)_l.fromBufferAttribute(this,n),_l.applyMatrix3(e),this.setXY(n,_l.x,_l.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix3(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyMatrix4(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.applyNormalMatrix(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)dn.fromBufferAttribute(this,n),dn.transformDirection(e),this.setXYZ(n,dn.x,dn.y,dn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ga(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Kn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ga(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ga(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ga(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ga(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),r=Kn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),r=Kn(r,this.array),o=Kn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=Kn(n,this.array),r=Kn(r,this.array),o=Kn(o,this.array),u=Kn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class u0 extends yr{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class c0 extends yr{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class un extends yr{constructor(e,n,r){super(new Float32Array(e),n,r)}}const hv=new ao,Ya=new te,Kc=new te;class ld{constructor(e=new te,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):hv.setFromPoints(e).getCenter(r);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);const n=Ya.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ya,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(Kc)),this.expandByPoint(Ya.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pv=0;const gi=new sn,$c=new Tn,Js=new te,si=new ao,qa=new ao,yn=new te;class oi extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pv++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q_(e)?c0:u0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,n,r){return gi.makeTranslation(e,n,r),this.applyMatrix4(gi),this}scale(e,n,r){return gi.makeScale(e,n,r),this.applyMatrix4(gi),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new un(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];si.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ld);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const d=n[u];qa.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(si.min,qa.min),si.expandByPoint(yn),yn.addVectors(si.max,qa.max),si.expandByPoint(yn)):(si.expandByPoint(qa.min),si.expandByPoint(qa.max))}si.getCenter(r);let o=0;for(let u=0,c=e.count;u<c;u++)yn.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(yn));if(n)for(let u=0,c=n.length;u<c;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)yn.fromBufferAttribute(d,m),p&&(Js.fromBufferAttribute(e,m),yn.add(Js)),o=Math.max(o,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new yr(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],p=[];for(let E=0;E<r.count;E++)d[E]=new te,p[E]=new te;const m=new te,v=new te,x=new te,g=new xt,M=new xt,A=new xt,P=new te,S=new te;function _(E,b,O){m.fromBufferAttribute(r,E),v.fromBufferAttribute(r,b),x.fromBufferAttribute(r,O),g.fromBufferAttribute(u,E),M.fromBufferAttribute(u,b),A.fromBufferAttribute(u,O),v.sub(m),x.sub(m),M.sub(g),A.sub(g);const Y=1/(M.x*A.y-A.x*M.y);isFinite(Y)&&(P.copy(v).multiplyScalar(A.y).addScaledVector(x,-M.y).multiplyScalar(Y),S.copy(x).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(Y),d[E].add(P),d[b].add(P),d[O].add(P),p[E].add(S),p[b].add(S),p[O].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let E=0,b=I.length;E<b;++E){const O=I[E],Y=O.start,K=O.count;for(let ne=Y,B=Y+K;ne<B;ne+=3)_(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const G=new te,R=new te,L=new te,C=new te;function F(E){L.fromBufferAttribute(o,E),C.copy(L);const b=d[E];G.copy(b),G.sub(L.multiplyScalar(L.dot(b))).normalize(),R.crossVectors(C,b);const Y=R.dot(p[E])<0?-1:1;c.setXYZW(E,G.x,G.y,G.z,Y)}for(let E=0,b=I.length;E<b;++E){const O=I[E],Y=O.start,K=O.count;for(let ne=Y,B=Y+K;ne<B;ne+=3)F(e.getX(ne+0)),F(e.getX(ne+1)),F(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new yr(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new te,u=new te,c=new te,d=new te,p=new te,m=new te,v=new te,x=new te;if(e)for(let g=0,M=e.count;g<M;g+=3){const A=e.getX(g+0),P=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(n,A),u.fromBufferAttribute(n,P),c.fromBufferAttribute(n,S),v.subVectors(c,u),x.subVectors(o,u),v.cross(x),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,P),m.fromBufferAttribute(r,S),d.add(v),p.add(v),m.add(v),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(P,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),u.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),v.subVectors(c,u),x.subVectors(o,u),v.cross(x),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)yn.fromBufferAttribute(e,n),yn.normalize(),e.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,x=d.normalized,g=new m.constructor(p.length*v);let M=0,A=0;for(let P=0,S=p.length;P<S;P++){d.isInterleavedBufferAttribute?M=p[P]*d.data.stride+d.offset:M=p[P]*v;for(let _=0;_<v;_++)g[A++]=m[M++]}return new yr(g,v,x)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new oi,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,x=m.length;v<x;v++){const g=m[v],M=e(g,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let x=0,g=m.length;x<g;x++){const M=m[x];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],x=u[m];for(let g=0,M=x.length;g<M;g++)v.push(x[g].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,v=c.length;m<v;m++){const x=c[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new te,mv=new te,gv=new ft;class Kr{constructor(e=new te(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Zc.subVectors(r,n).cross(mv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(Zc),u=this.normal.dot(o);if(u===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(c<0||c>1)?null:n.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||gv.getNormalMatrix(e),o=this.coplanarPoint(Zc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let _v=0;class oo extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Qa,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vm,this.blendDst=Gm,this.blendEquation=na,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pc,this.stencilZFail=Pc,this.stencilZPass=Pc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ot(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(u=>u.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const d in u){const p=u[d];delete p.metadata,c.push(p)}return c}if(n){const u=o(e.textures),c=o(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Kr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new xt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mr=new te,jc=new te,vl=new te,xl=new te;class vv{constructor(e=new te,n=new te(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,n),mr.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){jc.copy(e).add(n).multiplyScalar(.5),vl.copy(n).sub(e).normalize(),xl.copy(this.origin).sub(jc);const u=e.distanceTo(n)*.5,c=-this.direction.dot(vl),d=xl.dot(this.direction),p=-xl.dot(vl),m=xl.lengthSq(),v=Math.abs(1-c*c);let x,g,M,A;if(v>0)if(x=c*p-d,g=c*d-p,A=u*v,x>=0)if(g>=-A)if(g<=A){const P=1/v;x*=P,g*=P,M=x*(x+c*g+2*d)+g*(c*x+g+2*p)+m}else g=u,x=Math.max(0,-(c*g+d)),M=-x*x+g*(g+2*p)+m;else g=-u,x=Math.max(0,-(c*g+d)),M=-x*x+g*(g+2*p)+m;else g<=-A?(x=Math.max(0,-(-c*u+d)),g=x>0?-u:Math.min(Math.max(-u,-p),u),M=-x*x+g*(g+2*p)+m):g<=A?(x=0,g=Math.min(Math.max(-u,-p),u),M=g*(g+2*p)+m):(x=Math.max(0,-(c*u+d)),g=x>0?u:Math.min(Math.max(-u,-p),u),M=-x*x+g*(g+2*p)+m);else g=c>0?-u:u,x=Math.max(0,-(c*g+d)),M=-x*x+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(jc).addScaledVector(vl,g),M}intersectSphere(e,n){if(e.radius<0)return null;mr.subVectors(e.center,this.origin);const r=mr.dot(this.direction),o=mr.dot(mr)-r*r,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,c,d,p;const m=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),v>=0?(u=(e.min.y-g.y)*v,c=(e.max.y-g.y)*v):(u=(e.max.y-g.y)*v,c=(e.min.y-g.y)*v),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),x>=0?(d=(e.min.z-g.z)*x,p=(e.max.z-g.z)*x):(d=(e.max.z-g.z)*x,p=(e.min.z-g.z)*x),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,n,r,o,u){const c=this.origin,d=this.direction,p=d.x,m=d.y,v=d.z,x=e.x-c.x,g=e.y-c.y,M=e.z-c.z,A=n.x-c.x,P=n.y-c.y,S=n.z-c.z,_=r.x-c.x,I=r.y-c.y,G=r.z-c.z,R=Math.abs(p),L=Math.abs(m),C=Math.abs(v);let F,E,b,O,Y,K,ne,B,$,de,ie,Q;if(R>=L&&R>=C?(b=p,K=x,$=A,Q=_,p>=0?(F=m,E=v,O=g,Y=M,ne=P,B=S,de=I,ie=G):(F=v,E=m,O=M,Y=g,ne=S,B=P,de=G,ie=I)):L>=C?(b=m,K=g,$=P,Q=I,m>=0?(F=v,E=p,O=M,Y=x,ne=S,B=A,de=G,ie=_):(F=p,E=v,O=x,Y=M,ne=A,B=S,de=_,ie=G)):(b=v,K=M,$=S,Q=G,v>=0?(F=p,E=m,O=x,Y=g,ne=A,B=P,de=_,ie=I):(F=m,E=p,O=g,Y=x,ne=P,B=A,de=I,ie=_)),b===0)return null;const Z=F/b,W=E/b,N=1/b,ue=O-Z*K,Te=Y-W*K,Ke=ne-Z*$,He=B-W*$,Xe=de-Z*Q,ee=ie-W*Q,he=Xe*He-ee*Ke,Ce=ue*ee-Te*Xe,et=Ke*Te-He*ue;if(o){if(he<0||Ce<0||et<0)return null}else if((he<0||Ce<0||et<0)&&(he>0||Ce>0||et>0))return null;const ke=he+Ce+et;if(ke===0)return null;const pe=N*(he*K+Ce*$+et*Q);return(ke>0?pe<0:pe>0)?null:this.at(pe/ke,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $n extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=Jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const um=new sn,fs=new vv,Sl=new ld,cm=new te,yl=new te,Ml=new te,El=new te,Jc=new te,wl=new te,fm=new te,Tl=new te;class De extends Tn{constructor(e=new oi,n=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(u&&d){wl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],x=u[p];v!==0&&(Jc.fromBufferAttribute(x,e),c?wl.addScaledVector(Jc,v):wl.addScaledVector(Jc.sub(n),v))}n.add(wl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(u),fs.copy(e.ray).recast(e.near),!(Sl.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Sl,cm)===null||fs.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(um.copy(u).invert(),fs.copy(e.ray).applyMatrix4(um),!(r.boundingBox!==null&&fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,fs)))}_computeIntersections(e,n,r){let o;const u=this.geometry,c=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,g=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(c))for(let A=0,P=g.length;A<P;A++){const S=g[A],_=c[S.materialIndex],I=Math.max(S.start,M.start),G=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let R=I,L=G;R<L;R+=3){const C=d.getX(R),F=d.getX(R+1),E=d.getX(R+2);o=Al(this,_,e,r,m,v,x,C,F,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),P=Math.min(d.count,M.start+M.count);for(let S=A,_=P;S<_;S+=3){const I=d.getX(S),G=d.getX(S+1),R=d.getX(S+2);o=Al(this,c,e,r,m,v,x,I,G,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let A=0,P=g.length;A<P;A++){const S=g[A],_=c[S.materialIndex],I=Math.max(S.start,M.start),G=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let R=I,L=G;R<L;R+=3){const C=R,F=R+1,E=R+2;o=Al(this,_,e,r,m,v,x,C,F,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),P=Math.min(p.count,M.start+M.count);for(let S=A,_=P;S<_;S+=3){const I=S,G=S+1,R=S+2;o=Al(this,c,e,r,m,v,x,I,G,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function xv(s,e,n,r,o,u,c,d){let p;if(e.side===Zn?p=r.intersectTriangle(c,u,o,!0,d):p=r.intersectTriangle(o,u,c,e.side===gs,d),p===null)return null;Tl.copy(d),Tl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Tl);return m<n.near||m>n.far?null:{distance:m,point:Tl.clone(),object:s}}function Al(s,e,n,r,o,u,c,d,p,m){s.getVertexPosition(d,yl),s.getVertexPosition(p,Ml),s.getVertexPosition(m,El);const v=xv(s,e,n,r,yl,Ml,El,fm);if(v){const x=new te;Ui.getBarycoord(fm,yl,Ml,El,x),o&&(v.uv=Ui.getInterpolatedAttribute(o,d,p,m,x,new xt)),u&&(v.uv1=Ui.getInterpolatedAttribute(u,d,p,m,x,new xt)),c&&(v.normal=Ui.getInterpolatedAttribute(c,d,p,m,x,new te),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new te,materialIndex:0};Ui.getNormal(yl,Ml,El,g.normal),v.face=g,v.barycoord=x}return v}class Sv extends kn{constructor(e=null,n=1,r=1,o,u,c,d,p,m=wn,v=wn,x,g){super(null,c,d,p,m,v,o,u,x,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ds=new ld,yv=new xt(.5,.5),Rl=new te;class ud{constructor(e=new Kr,n=new Kr,r=new Kr,o=new Kr,u=new Kr,c=new Kr){this.planes=[e,n,r,o,u,c]}set(e,n,r,o,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(u),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ki,r=!1){const o=this.planes,u=e.elements,c=u[0],d=u[1],p=u[2],m=u[3],v=u[4],x=u[5],g=u[6],M=u[7],A=u[8],P=u[9],S=u[10],_=u[11],I=u[12],G=u[13],R=u[14],L=u[15];if(o[0].setComponents(m-c,M-v,_-A,L-I).normalize(),o[1].setComponents(m+c,M+v,_+A,L+I).normalize(),o[2].setComponents(m+d,M+x,_+P,L+G).normalize(),o[3].setComponents(m-d,M-x,_-P,L-G).normalize(),r)o[4].setComponents(p,g,S,R).normalize(),o[5].setComponents(m-p,M-g,_-S,L-R).normalize();else if(o[4].setComponents(m-p,M-g,_-S,L-R).normalize(),n===Ki)o[5].setComponents(m+p,M+g,_+S,L+R).normalize();else if(n===io)o[5].setComponents(p,g,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const n=yv.distanceTo(e.center);return ds.radius=.7071067811865476+n,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Rl.x=o.normal.x>0?e.max.x:e.min.x,Rl.y=o.normal.y>0?e.max.y:e.min.y,Rl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class f0 extends kn{constructor(e=[],n=_s,r,o,u,c,d,p,m,v){super(e,n,r,o,u,c,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ro extends kn{constructor(e,n,r=Zi,o,u,c,d=wn,p=wn,m,v=Mr,x=1){if(v!==Mr&&v!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:x};super(g,o,u,c,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new od(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Mv extends ro{constructor(e,n=Zi,r=_s,o,u,c=wn,d=wn,p,m=Mr){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,n,r,o,u,c,d,p,m),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class d0 extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rn extends oi{constructor(e=1,n=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const d=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],m=[],v=[],x=[];let g=0,M=0;A("z","y","x",-1,-1,r,n,e,c,u,0),A("z","y","x",1,-1,r,n,-e,c,u,1),A("x","z","y",1,1,e,r,n,o,c,2),A("x","z","y",1,-1,e,r,-n,o,c,3),A("x","y","z",1,-1,e,n,r,o,u,4),A("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(p),this.setAttribute("position",new un(m,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(x,2));function A(P,S,_,I,G,R,L,C,F,E,b){const O=R/F,Y=L/E,K=R/2,ne=L/2,B=C/2,$=F+1,de=E+1;let ie=0,Q=0;const Z=new te;for(let W=0;W<de;W++){const N=W*Y-ne;for(let ue=0;ue<$;ue++){const Te=ue*O-K;Z[P]=Te*I,Z[S]=N*G,Z[_]=B,m.push(Z.x,Z.y,Z.z),Z[P]=0,Z[S]=0,Z[_]=C>0?1:-1,v.push(Z.x,Z.y,Z.z),x.push(ue/F),x.push(1-W/E),ie+=1}}for(let W=0;W<E;W++)for(let N=0;N<F;N++){const ue=g+N+$*W,Te=g+N+$*(W+1),Ke=g+(N+1)+$*(W+1),He=g+(N+1)+$*W;p.push(ue,Te,He),p.push(Te,Ke,He),Q+=6}d.addGroup(M,Q,b),M+=Q,g+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cd extends oi{constructor(e=1,n=1,r=4,o=8,u=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:n,capSegments:r,radialSegments:o,heightSegments:u},n=Math.max(0,n),r=Math.max(1,Math.floor(r)),o=Math.max(3,Math.floor(o)),u=Math.max(1,Math.floor(u));const c=[],d=[],p=[],m=[],v=n/2,x=Math.PI/2*e,g=n,M=2*x+g,A=r*2+u,P=o+1,S=new te,_=new te;for(let I=0;I<=A;I++){let G=0,R=0,L=0,C=0;if(I<=r){const b=I/r,O=b*Math.PI/2;R=-v-e*Math.cos(O),L=e*Math.sin(O),C=-e*Math.cos(O),G=b*x}else if(I<=r+u){const b=(I-r)/u;R=-v+b*n,L=e,C=0,G=x+b*g}else{const b=(I-r-u)/r,O=b*Math.PI/2;R=v+e*Math.sin(O),L=e*Math.cos(O),C=e*Math.sin(O),G=x+g+b*x}const F=Math.max(0,Math.min(1,G/M));let E=0;I===0?E=.5/o:I===A&&(E=-.5/o);for(let b=0;b<=o;b++){const O=b/o,Y=O*Math.PI*2,K=Math.sin(Y),ne=Math.cos(Y);_.x=-L*ne,_.y=R,_.z=L*K,d.push(_.x,_.y,_.z),S.set(-L*ne,C,L*K),S.normalize(),p.push(S.x,S.y,S.z),m.push(O+E,F)}if(I>0){const b=(I-1)*P;for(let O=0;O<o;O++){const Y=b+O,K=b+O+1,ne=I*P+O,B=I*P+O+1;c.push(Y,K,ne),c.push(K,B,ne)}}}this.setIndex(c),this.setAttribute("position",new un(d,3)),this.setAttribute("normal",new un(p,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class fd extends oi{constructor(e=1,n=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:o},n=Math.max(3,n);const u=[],c=[],d=[],p=[],m=new te,v=new xt;c.push(0,0,0),d.push(0,0,1),p.push(.5,.5);for(let x=0,g=3;x<=n;x++,g+=3){const M=r+x/n*o;m.x=e*Math.cos(M),m.y=e*Math.sin(M),c.push(m.x,m.y,m.z),d.push(0,0,1),v.x=(c[g]/e+1)/2,v.y=(c[g+1]/e+1)/2,p.push(v.x,v.y)}for(let x=1;x<=n;x++)u.push(x,x+1,0);this.setIndex(u),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jt extends oi{constructor(e=1,n=1,r=1,o=32,u=1,c=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:u,openEnded:c,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),u=Math.floor(u);const v=[],x=[],g=[],M=[];let A=0;const P=[],S=r/2;let _=0;I(),c===!1&&(e>0&&G(!0),n>0&&G(!1)),this.setIndex(v),this.setAttribute("position",new un(x,3)),this.setAttribute("normal",new un(g,3)),this.setAttribute("uv",new un(M,2));function I(){const R=new te,L=new te;let C=0;const F=(n-e)/r;for(let E=0;E<=u;E++){const b=[],O=E/u,Y=O*(n-e)+e;for(let K=0;K<=o;K++){const ne=K/o,B=ne*p+d,$=Math.sin(B),de=Math.cos(B);L.x=Y*$,L.y=-O*r+S,L.z=Y*de,x.push(L.x,L.y,L.z),R.set($,F,de).normalize(),g.push(R.x,R.y,R.z),M.push(ne,1-O),b.push(A++)}P.push(b)}for(let E=0;E<o;E++)for(let b=0;b<u;b++){const O=P[b][E],Y=P[b+1][E],K=P[b+1][E+1],ne=P[b][E+1];(e>0||b!==0)&&(v.push(O,Y,ne),C+=3),(n>0||b!==u-1)&&(v.push(Y,K,ne),C+=3)}m.addGroup(_,C,0),_+=C}function G(R){const L=A,C=new xt,F=new te;let E=0;const b=R===!0?e:n,O=R===!0?1:-1;for(let K=1;K<=o;K++)x.push(0,S*O,0),g.push(0,O,0),M.push(.5,.5),A++;const Y=A;for(let K=0;K<=o;K++){const B=K/o*p+d,$=Math.cos(B),de=Math.sin(B);F.x=b*de,F.y=S*O,F.z=b*$,x.push(F.x,F.y,F.z),g.push(0,O,0),C.x=$*.5+.5,C.y=de*.5*O+.5,M.push(C.x,C.y),A++}for(let K=0;K<o;K++){const ne=L+K,B=Y+K;R===!0?v.push(B,B+1,ne):v.push(B+1,B,ne),E+=3}m.addGroup(_,E,R===!0?1:2),_+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gl extends Jt{constructor(e=1,n=1,r=32,o=1,u=!1,c=0,d=Math.PI*2){super(0,e,n,r,o,u,c,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:u,thetaStart:c,thetaLength:d}}static fromJSON(e){return new Gl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lo extends oi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,c=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,v=p+1,x=e/d,g=n/p,M=[],A=[],P=[],S=[];for(let _=0;_<v;_++){const I=_*g-c;for(let G=0;G<m;G++){const R=G*x-u;A.push(R,-I,0),P.push(0,0,1),S.push(G/d),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let I=0;I<d;I++){const G=I+m*_,R=I+m*(_+1),L=I+1+m*(_+1),C=I+1+m*_;M.push(G,R,C),M.push(R,L,C)}this.setIndex(M),this.setAttribute("position",new un(A,3)),this.setAttribute("normal",new un(P,3)),this.setAttribute("uv",new un(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xt extends oi{constructor(e=1,n=32,r=16,o=0,u=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:u,thetaStart:c,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(c+d,Math.PI);let m=0;const v=[],x=new te,g=new te,M=[],A=[],P=[],S=[];for(let _=0;_<=r;_++){const I=[],G=_/r,R=c+G*d,L=e*Math.cos(R),C=Math.sqrt(e*e-L*L);let F=0;_===0&&c===0?F=.5/n:_===r&&p===Math.PI&&(F=-.5/n);for(let E=0;E<=n;E++){const b=E/n,O=o+b*u;x.x=-C*Math.cos(O),x.y=L,x.z=C*Math.sin(O),A.push(x.x,x.y,x.z),g.copy(x).normalize(),P.push(g.x,g.y,g.z),S.push(b+F,1-G),I.push(m++)}v.push(I)}for(let _=0;_<r;_++)for(let I=0;I<n;I++){const G=v[_][I+1],R=v[_][I],L=v[_+1][I],C=v[_+1][I+1];(_!==0||c>0)&&M.push(G,R,C),(_!==r-1||p<Math.PI)&&M.push(R,L,C)}this.setIndex(M),this.setAttribute("position",new un(A,3)),this.setAttribute("normal",new un(P,3)),this.setAttribute("uv",new un(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function oa(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(dm(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(dm(o[0])){const u=[];for(let c=0,d=o.length;c<d;c++)u[c]=o[c].clone();e[n][r]=u}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Bn(s){const e={};for(let n=0;n<s.length;n++){const r=oa(s[n]);for(const o in r)e[o]=r[o]}return e}function dm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ev(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function h0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const wv={clone:oa,merge:Bn};var Tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tv,this.fragmentShader=Av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=Ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Tt().setHex(o.value);break;case"v2":this.uniforms[r].value=new xt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new te().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Qt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ft().fromArray(o.value);break;case"m4":this.uniforms[r].value=new sn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Rv extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ot extends oo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yf,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=Jf,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cv extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bv extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dd extends Tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Pv extends dd{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Qc=new sn,hm=new te,pm=new te;class Lv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ud,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(hm),pm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(pm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,r,o){Qc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Qc,e.coordinateSystem,e.reversedDepth);const u=this._frameExtents,c=o?o.z/u.x:1,d=o?o.w/u.y:1,p=o?o.x/u.x:0,m=o?o.y/u.y:0;e.coordinateSystem===io||e.reversedDepth?n.set(.5*c,0,0,.5*c+p,0,.5*d,0,.5*d+m,0,0,1,0,0,0,0,1):n.set(.5*c,0,0,.5*c+p,0,.5*d,0,.5*d+m,0,0,.5,.5,0,0,0,1),n.multiply(Qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Cl=new te,bl=new la,Wi=new te;class p0 extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Cl,bl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,bl,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Cl,bl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Cl,bl,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qr=new te,mm=new xt,gm=new xt;class vi extends p0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qf*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,n){return this.getViewBounds(e,mm,gm),n.subVectors(gm,mm)}setViewOffset(e,n,r,o,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*r/m,o*=c.width/p,r*=c.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class hd extends p0{constructor(e=-1,n=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Nv extends Lv{constructor(){super(new hd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dv extends dd{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new Nv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Iv extends dd{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qs=-90,ea=1;class Uv extends Tn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new vi(Qs,ea,e,n);o.layers=this.layers,this.add(o);const u=new vi(Qs,ea,e,n);u.layers=this.layers,this.add(u);const c=new vi(Qs,ea,e,n);c.layers=this.layers,this.add(c);const d=new vi(Qs,ea,e,n);d.layers=this.layers,this.add(d);const p=new vi(Qs,ea,e,n);p.layers=this.layers,this.add(p);const m=new vi(Qs,ea,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,c,d,p]=n;for(const m of n)this.remove(m);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===io)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,p,m,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const P=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=P,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,v),e.setRenderTarget(x,g,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Fv extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const vd=class vd{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const u=this.elements;return u[0]=e,u[2]=n,u[1]=r,u[3]=o,this}};vd.prototype.isMatrix2=!0;let _m=vd;function vm(s,e,n,r){const o=Ov(r);switch(n){case n0:return s*e;case r0:return s*e/o.components*o.byteLength;case nd:return s*e/o.components*o.byteLength;case vs:return s*e*2/o.components*o.byteLength;case id:return s*e*2/o.components*o.byteLength;case i0:return s*e*3/o.components*o.byteLength;case Fi:return s*e*4/o.components*o.byteLength;case rd:return s*e*4/o.components*o.byteLength;case Dl:case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _f:case xf:return Math.max(s,16)*Math.max(e,8)/4;case gf:case vf:return Math.max(s,8)*Math.max(e,8)/2;case Sf:case yf:case Ef:case wf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Mf:case Bl:case Tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Df:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case kf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zf:case Hf:case Vf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Gf:case Wf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kl:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ov(s){switch(s){case ai:case Jm:return{byteLength:1,components:1};case to:case Qm:case ji:return{byteLength:2,components:1};case ed:case td:return{byteLength:2,components:4};case Zi:case Qf:case qi:return{byteLength:4,components:1};case e0:case t0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jf}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function m0(){let s=null,e=!1,n=null,r=null;function o(u,c){r=s.requestAnimationFrame(o),n(u,c)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function Bv(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,x=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const v=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,v);else{x.sort((M,A)=>M.start-A.start);let g=0;for(let M=1;M<x.length;M++){const A=x[g],P=x[M];P.start<=A.start+A.count+1?A.count=Math.max(A.count,P.start+P.count-A.start):(++g,x[g]=P)}x.length=g+1;for(let M=0,A=x.length;M<A;M++){const P=x[M];s.bufferSubData(m,P.start*v.BYTES_PER_ELEMENT,v,P.start,P.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:u,update:c}}var kv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ux=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",gx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ax=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Lx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ox=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$x=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,mS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_S=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,MS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ES=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ny=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ry=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ay=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_y=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:kv,alphahash_pars_fragment:zv,alphamap_fragment:Hv,alphamap_pars_fragment:Vv,alphatest_fragment:Gv,alphatest_pars_fragment:Wv,aomap_fragment:Xv,aomap_pars_fragment:Yv,batching_pars_vertex:qv,batching_vertex:Kv,begin_vertex:$v,beginnormal_vertex:Zv,bsdfs:jv,iridescence_fragment:Jv,bumpmap_pars_fragment:Qv,clipping_planes_fragment:ex,clipping_planes_pars_fragment:tx,clipping_planes_pars_vertex:nx,clipping_planes_vertex:ix,color_fragment:rx,color_pars_fragment:sx,color_pars_vertex:ax,color_vertex:ox,common:lx,cube_uv_reflection_fragment:ux,defaultnormal_vertex:cx,displacementmap_pars_vertex:fx,displacementmap_vertex:dx,emissivemap_fragment:hx,emissivemap_pars_fragment:px,colorspace_fragment:mx,colorspace_pars_fragment:gx,envmap_fragment:_x,envmap_common_pars_fragment:vx,envmap_pars_fragment:xx,envmap_pars_vertex:Sx,envmap_physical_pars_fragment:Lx,envmap_vertex:yx,fog_vertex:Mx,fog_pars_vertex:Ex,fog_fragment:wx,fog_pars_fragment:Tx,gradientmap_pars_fragment:Ax,lightmap_pars_fragment:Rx,lights_lambert_fragment:Cx,lights_lambert_pars_fragment:bx,lights_pars_begin:Px,lights_toon_fragment:Nx,lights_toon_pars_fragment:Dx,lights_phong_fragment:Ix,lights_phong_pars_fragment:Ux,lights_physical_fragment:Fx,lights_physical_pars_fragment:Ox,lights_fragment_begin:Bx,lights_fragment_maps:kx,lights_fragment_end:zx,lightprobes_pars_fragment:Hx,logdepthbuf_fragment:Vx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:Xx,map_fragment:Yx,map_pars_fragment:qx,map_particle_fragment:Kx,map_particle_pars_fragment:$x,metalnessmap_fragment:Zx,metalnessmap_pars_fragment:jx,morphinstance_vertex:Jx,morphcolor_vertex:Qx,morphnormal_vertex:eS,morphtarget_pars_vertex:tS,morphtarget_vertex:nS,normal_fragment_begin:iS,normal_fragment_maps:rS,normal_pars_fragment:sS,normal_pars_vertex:aS,normal_vertex:oS,normalmap_pars_fragment:lS,clearcoat_normal_fragment_begin:uS,clearcoat_normal_fragment_maps:cS,clearcoat_pars_fragment:fS,iridescence_pars_fragment:dS,opaque_fragment:hS,packing:pS,premultiplied_alpha_fragment:mS,project_vertex:gS,dithering_fragment:_S,dithering_pars_fragment:vS,roughnessmap_fragment:xS,roughnessmap_pars_fragment:SS,shadowmap_pars_fragment:yS,shadowmap_pars_vertex:MS,shadowmap_vertex:ES,shadowmask_pars_fragment:wS,skinbase_vertex:TS,skinning_pars_vertex:AS,skinning_vertex:RS,skinnormal_vertex:CS,specularmap_fragment:bS,specularmap_pars_fragment:PS,tonemapping_fragment:LS,tonemapping_pars_fragment:NS,transmission_fragment:DS,transmission_pars_fragment:IS,uv_pars_fragment:US,uv_pars_vertex:FS,uv_vertex:OS,worldpos_vertex:BS,background_vert:kS,background_frag:zS,backgroundCube_vert:HS,backgroundCube_frag:VS,cube_vert:GS,cube_frag:WS,depth_vert:XS,depth_frag:YS,distance_vert:qS,distance_frag:KS,equirect_vert:$S,equirect_frag:ZS,linedashed_vert:jS,linedashed_frag:JS,meshbasic_vert:QS,meshbasic_frag:ey,meshlambert_vert:ty,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:ry,meshnormal_vert:sy,meshnormal_frag:ay,meshphong_vert:oy,meshphong_frag:ly,meshphysical_vert:uy,meshphysical_frag:cy,meshtoon_vert:fy,meshtoon_frag:dy,points_vert:hy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:_y,sprite_frag:vy},Be={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Yi={basic:{uniforms:Bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Bn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Bn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Tt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Bn([Be.points,Be.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Bn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Bn([Be.common,Be.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Bn([Be.sprite,Be.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Bn([Be.common,Be.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Bn([Be.lights,Be.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Yi.physical={uniforms:Bn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Pl={r:0,b:0,g:0},xy=new sn,g0=new ft;g0.set(-1,0,0,0,1,0,0,0,1);function Sy(s,e,n,r,o,u){const c=new Tt(0);let d=o===!0?0:1,p,m,v=null,x=0,g=null;function M(I){let G=I.isScene===!0?I.background:null;if(G&&G.isTexture){const R=I.backgroundBlurriness>0;G=e.get(G,R)}return G}function A(I){let G=!1;const R=M(I);R===null?S(c,d):R&&R.isColor&&(S(R,1),G=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(s.autoClear||G)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function P(I,G){const R=M(G);R&&(R.isCubeTexture||R.mapping===Xl)?(m===void 0&&(m=new De(new rn(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:oa(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.backgroundBlurriness.value=G.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(xy.makeRotationFromEuler(G.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(g0),m.material.toneMapped=Et.getTransfer(R.colorSpace)!==Ft,(v!==R||x!==R.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=R,x=R.version,g=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new De(new lo(2,2),new Ji({name:"BackgroundMaterial",uniforms:oa(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=G.backgroundIntensity,p.material.toneMapped=Et.getTransfer(R.colorSpace)!==Ft,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||x!==R.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=R,x=R.version,g=s.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function S(I,G){I.getRGB(Pl,h0(s)),n.buffers.color.setClear(Pl.r,Pl.g,Pl.b,G,u)}function _(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(I,G=1){c.set(I),d=G,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,S(c,d)},render:A,addToRenderList:P,dispose:_}}function yy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let u=o,c=!1;function d(Y,K,ne,B,$){let de=!1;const ie=x(Y,B,ne,K);u!==ie&&(u=ie,m(u.object)),de=M(Y,B,ne,$),de&&A(Y,B,ne,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(de||c)&&(c=!1,R(Y,K,ne,B),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function p(){return s.createVertexArray()}function m(Y){return s.bindVertexArray(Y)}function v(Y){return s.deleteVertexArray(Y)}function x(Y,K,ne,B){const $=B.wireframe===!0;let de=r[K.id];de===void 0&&(de={},r[K.id]=de);const ie=Y.isInstancedMesh===!0?Y.id:0;let Q=de[ie];Q===void 0&&(Q={},de[ie]=Q);let Z=Q[ne.id];Z===void 0&&(Z={},Q[ne.id]=Z);let W=Z[$];return W===void 0&&(W=g(p()),Z[$]=W),W}function g(Y){const K=[],ne=[],B=[];for(let $=0;$<n;$++)K[$]=0,ne[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ne,attributeDivisors:B,object:Y,attributes:{},index:null}}function M(Y,K,ne,B){const $=u.attributes,de=K.attributes;let ie=0;const Q=ne.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const N=$[Z];let ue=de[Z];if(ue===void 0&&(Z==="instanceMatrix"&&Y.instanceMatrix&&(ue=Y.instanceMatrix),Z==="instanceColor"&&Y.instanceColor&&(ue=Y.instanceColor)),N===void 0||N.attribute!==ue||ue&&N.data!==ue.data)return!0;ie++}return u.attributesNum!==ie||u.index!==B}function A(Y,K,ne,B){const $={},de=K.attributes;let ie=0;const Q=ne.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let N=de[Z];N===void 0&&(Z==="instanceMatrix"&&Y.instanceMatrix&&(N=Y.instanceMatrix),Z==="instanceColor"&&Y.instanceColor&&(N=Y.instanceColor));const ue={};ue.attribute=N,N&&N.data&&(ue.data=N.data),$[Z]=ue,ie++}u.attributes=$,u.attributesNum=ie,u.index=B}function P(){const Y=u.newAttributes;for(let K=0,ne=Y.length;K<ne;K++)Y[K]=0}function S(Y){_(Y,0)}function _(Y,K){const ne=u.newAttributes,B=u.enabledAttributes,$=u.attributeDivisors;ne[Y]=1,B[Y]===0&&(s.enableVertexAttribArray(Y),B[Y]=1),$[Y]!==K&&(s.vertexAttribDivisor(Y,K),$[Y]=K)}function I(){const Y=u.newAttributes,K=u.enabledAttributes;for(let ne=0,B=K.length;ne<B;ne++)K[ne]!==Y[ne]&&(s.disableVertexAttribArray(ne),K[ne]=0)}function G(Y,K,ne,B,$,de,ie){ie===!0?s.vertexAttribIPointer(Y,K,ne,$,de):s.vertexAttribPointer(Y,K,ne,B,$,de)}function R(Y,K,ne,B){P();const $=B.attributes,de=ne.getAttributes(),ie=K.defaultAttributeValues;for(const Q in de){const Z=de[Q];if(Z.location>=0){let W=$[Q];if(W===void 0&&(Q==="instanceMatrix"&&Y.instanceMatrix&&(W=Y.instanceMatrix),Q==="instanceColor"&&Y.instanceColor&&(W=Y.instanceColor)),W!==void 0){const N=W.normalized,ue=W.itemSize,Te=e.get(W);if(Te===void 0)continue;const Ke=Te.buffer,He=Te.type,Xe=Te.bytesPerElement,ee=He===s.INT||He===s.UNSIGNED_INT||W.gpuType===Qf;if(W.isInterleavedBufferAttribute){const he=W.data,Ce=he.stride,et=W.offset;if(he.isInstancedInterleavedBuffer){for(let ke=0;ke<Z.locationSize;ke++)_(Z.location+ke,he.meshPerAttribute);Y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ke=0;ke<Z.locationSize;ke++)S(Z.location+ke);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let ke=0;ke<Z.locationSize;ke++)G(Z.location+ke,ue/Z.locationSize,He,N,Ce*Xe,(et+ue/Z.locationSize*ke)*Xe,ee)}else{if(W.isInstancedBufferAttribute){for(let he=0;he<Z.locationSize;he++)_(Z.location+he,W.meshPerAttribute);Y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let he=0;he<Z.locationSize;he++)S(Z.location+he);s.bindBuffer(s.ARRAY_BUFFER,Ke);for(let he=0;he<Z.locationSize;he++)G(Z.location+he,ue/Z.locationSize,He,N,ue*Xe,ue/Z.locationSize*he*Xe,ee)}}else if(ie!==void 0){const N=ie[Q];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Z.location,N);break;case 3:s.vertexAttrib3fv(Z.location,N);break;case 4:s.vertexAttrib4fv(Z.location,N);break;default:s.vertexAttrib1fv(Z.location,N)}}}}I()}function L(){b();for(const Y in r){const K=r[Y];for(const ne in K){const B=K[ne];for(const $ in B){const de=B[$];for(const ie in de)v(de[ie].object),delete de[ie];delete B[$]}}delete r[Y]}}function C(Y){if(r[Y.id]===void 0)return;const K=r[Y.id];for(const ne in K){const B=K[ne];for(const $ in B){const de=B[$];for(const ie in de)v(de[ie].object),delete de[ie];delete B[$]}}delete r[Y.id]}function F(Y){for(const K in r){const ne=r[K];for(const B in ne){const $=ne[B];if($[Y.id]===void 0)continue;const de=$[Y.id];for(const ie in de)v(de[ie].object),delete de[ie];delete $[Y.id]}}}function E(Y){for(const K in r){const ne=r[K],B=Y.isInstancedMesh===!0?Y.id:0,$=ne[B];if($!==void 0){for(const de in $){const ie=$[de];for(const Q in ie)v(ie[Q].object),delete ie[Q];delete $[de]}delete ne[B],Object.keys(ne).length===0&&delete r[K]}}}function b(){O(),c=!0,u!==o&&(u=o,m(u.object))}function O(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:b,resetDefaultState:O,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:P,enableAttribute:S,disableUnusedAttributes:I}}function My(s,e,n){let r;function o(p){r=p}function u(p,m){s.drawArrays(r,p,m),n.update(m,r,1)}function c(p,m,v){v!==0&&(s.drawArraysInstanced(r,p,m,v),n.update(m,r,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,v);let g=0;for(let M=0;M<v;M++)g+=m[M];n.update(g,r,1)}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=d}function Ey(s,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Fi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const E=F===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ai&&F!==qi&&!E&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(ot("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const x=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),G=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),C=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:A,maxTextureSize:P,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:I,maxVaryings:G,maxFragmentUniforms:R,maxSamples:L,samples:C}}function wy(s){const e=this;let n=null,r=0,o=!1,u=!1;const c=new Kr,d=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||r!==0||o;return o=g,r=x.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,g){n=v(x,g,0)},this.setState=function(x,g,M){const A=x.clippingPlanes,P=x.clipIntersection,S=x.clipShadows,_=s.get(x);if(!o||A===null||A.length===0||u&&!S)u?v(null):m();else{const I=u?0:r,G=I*4;let R=_.clippingState||null;p.value=R,R=v(A,g,G,M);for(let L=0;L!==G;++L)R[L]=n[L];_.clippingState=R,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,g,M,A){const P=x!==null?x.length:0;let S=null;if(P!==0){if(S=p.value,A!==!0||S===null){const _=M+P*4,I=g.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<_)&&(S=new Float32Array(_));for(let G=0,R=M;G!==P;++G,R+=4)c.copy(x[G]).applyMatrix4(I,d),c.normal.toArray(S,R),S[R+3]=c.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,S}}const ia=4,Ty=6,Ay=20,Ry=256,Ka=new hd,xm=new Tt;let ef=null,tf=0,nf=0,rf=!1;const Cy=new te,hs=new te;class Sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,u={}){const{size:c=256,position:d=Cy}=u;ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ef,tf,nf),this._renderer.xr.enabled=rf,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===_s||e.mapping===aa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:ji,format:Fi,colorSpace:zl,depthBuffer:!1},o=ym(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,n,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=by(u)),this._blurMaterial=Ly(u,e,n),this._ggxMaterial=Py(u,e,n)}return o}_compileMaterial(e){const n=new De(new oi,e);this._renderer.compile(n,Ka)}_sceneToCubeUV(e,n,r,o,u){const p=new vi(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(xm),x.toneMapping=$i,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new De(new rn,new $n({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,S=P.material;let _=!1;const I=e.background;I?I.isColor&&(S.color.copy(I),e.background=null,_=!0):(S.color.copy(xm),_=!0);for(let G=0;G<6;G++){const R=G%3;R===0?(p.up.set(0,m[G],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[G],u.y,u.z)):R===1?(p.up.set(0,0,m[G]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[G],u.z)):(p.up.set(0,m[G],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[G]));const L=this._cubeSize;ta(o,R*L,G>2?L:0,L,L),x.setRenderTarget(o),_&&x.render(P,p),x.render(e,p)}x.toneMapping=M,x.autoClear=g,e.background=I}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===_s||e.mapping===aa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mm());const u=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;ta(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,Ka)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const p=c.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),x=Math.sqrt(m*m-v*v),g=m*1.25,M=x*g,{_lodMax:A}=this,P=this._sizeLods[r],S=3*P*(r>A-ia?r-A+ia:0),_=4*(this._cubeSize-P);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=A-n,ta(u,S,_,3*P,2*P),o.setRenderTarget(u),o.render(d,Ka),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=A-r,ta(e,S,_,3*P,2*P),o.setRenderTarget(e),o.render(d,Ka)}_blur(e,n,r,o){const u=this._pingPongRenderTarget,c=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,u,n,r,c),this._blurPass(u,e,r,r,c)}_blurPass(e,n,r,o,u){const c=this._renderer,d=this._blurMaterial,p=this._lodMeshes[o];p.material=d;const m=d.uniforms;m.envMap.value=e.texture,m.sigma.value=u,m.mipInt.value=this._lodMax-r;const v=this._sizeLods[o],x=3*v*(o>this._lodMax-ia?o-this._lodMax+ia:0),g=4*(this._cubeSize-v);ta(n,x,g,3*v,2*v),c.setRenderTarget(n),c.render(p,Ka)}}function by(s){const e=[],n=[];let r=s;const o=s-ia+1+Ty;for(let u=0;u<o;u++){const c=Math.pow(2,r);e.push(c);const d=1/(c-2),p=-d,m=1+d,v=[p,p,m,p,m,m,p,p,m,m,p,m],x=6,g=6,M=3,A=new Float32Array(M*g*x),P=new Float32Array(M*g*x);for(let _=0;_<x;_++){const I=_%3*2/3-1,G=_>2?0:-1,R=[I,G,0,I+2/3,G,0,I+2/3,G+1,0,I,G,0,I+2/3,G+1,0,I,G+1,0];A.set(R,M*g*_);for(let L=0;L<g;L++){const C=v[L*2]*2-1,F=v[L*2+1]*2-1;_===0?hs.set(1,F,C):_===1?hs.set(-C,1,-F):_===2?hs.set(-C,F,1):_===3?hs.set(-1,F,-C):_===4?hs.set(-C,-1,F):hs.set(C,F,-1),hs.toArray(P,(_*g+L)*M)}}const S=new oi;S.setAttribute("position",new yr(A,M)),S.setAttribute("outputDirection",new yr(P,M)),n.push(new De(S,null)),r>ia&&r--}return{lodMeshes:n,sizeLods:e}}function ym(s,e,n){const r=new Oi(s,e,n);return r.texture.mapping=Xl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ta(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function Py(s,e,n){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ry,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Ly(s,e,n){return new Ji({name:"SphericalGaussianBlur",defines:{SAMPLES:Ay,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Mm(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Em(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Yl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class _0 extends Oi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new f0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new rn(5,5,5),u=new Ji({name:"CubemapFromEquirect",uniforms:oa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:xr});u.uniforms.tEquirect.value=n;const c=new De(o,u),d=n.minFilter;return n.minFilter===ps&&(n.minFilter=In),new Uv(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(u)}}function Ny(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?c(g):u(g)}function u(g){if(g&&g.isTexture){const M=g.mapping;if(M===Rc||M===Cc)if(e.has(g)){const A=e.get(g).texture;return d(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const P=new _0(A.height);return P.fromEquirectangularTexture(s,g),e.set(g,P),g.addEventListener("dispose",m),d(P.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const M=g.mapping,A=M===Rc||M===Cc,P=M===_s||M===aa;if(A||P){let S=n.get(g);const _=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new Sm(s)),S=A?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),S.texture;if(S!==void 0)return S.texture;{const I=g.image;return A&&I&&I.height>0||P&&I&&p(I)?(r===null&&(r=new Sm(s)),S=A?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function d(g,M){return M===Rc?g.mapping=_s:M===Cc&&(g.mapping=aa),g}function p(g){let M=0;const A=6;for(let P=0;P<A;P++)g[P]!==void 0&&M++;return M===A}function m(g){const M=g.target;M.removeEventListener("dispose",m);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const A=n.get(M);A!==void 0&&(n.delete(M),A.dispose())}function x(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function Dy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&ra("WebGLRenderer: "+r+" extension not supported."),o}}}function Iy(s,e,n,r){const o={},u=new WeakMap;function c(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",c),delete o[g.id];const M=u.get(g);M&&(e.remove(M),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(x,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,n.memory.geometries++),g}function p(x){const g=x.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function m(x){const g=[],M=x.index,A=x.attributes.position;let P=0;if(A===void 0)return;if(M!==null){const I=M.array;P=M.version;for(let G=0,R=I.length;G<R;G+=3){const L=I[G+0],C=I[G+1],F=I[G+2];g.push(L,C,C,F,F,L)}}else{const I=A.array;P=A.version;for(let G=0,R=I.length/3-1;G<R;G+=3){const L=G+0,C=G+1,F=G+2;g.push(L,C,C,F,F,L)}}const S=new(A.count>=65535?c0:u0)(g,1);S.version=P;const _=u.get(x);_&&e.remove(_),u.set(x,S)}function v(x){const g=u.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&m(x)}else m(x);return u.get(x)}return{get:d,update:p,getWireframeAttribute:v}}function Uy(s,e,n){let r;function o(x){r=x}let u,c;function d(x){u=x.type,c=x.bytesPerElement}function p(x,g){s.drawElements(r,g,u,x*c),n.update(g,r,1)}function m(x,g,M){M!==0&&(s.drawElementsInstanced(r,g,u,x*c,M),n.update(g,r,M))}function v(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,x,0,M);let P=0;for(let S=0;S<M;S++)P+=g[S];n.update(P,r,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function Fy(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:Nt("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Oy(s,e,n){const r=new WeakMap,o=new Qt;function u(c,d,p){const m=c.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==x){let O=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",O)};var M=O;g!==void 0&&g.texture.dispose();const A=d.morphAttributes.position!==void 0,P=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],G=d.morphAttributes.color||[];let R=0;A===!0&&(R=1),P===!0&&(R=2),S===!0&&(R=3);let L=d.attributes.position.count*R,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*C*4*x),E=new a0(F,L,C,x);E.type=qi,E.needsUpdate=!0;const b=R*4;for(let Y=0;Y<x;Y++){const K=_[Y],ne=I[Y],B=G[Y],$=L*C*4*Y;for(let de=0;de<K.count;de++){const ie=de*b;A===!0&&(o.fromBufferAttribute(K,de),F[$+ie+0]=o.x,F[$+ie+1]=o.y,F[$+ie+2]=o.z,F[$+ie+3]=0),P===!0&&(o.fromBufferAttribute(ne,de),F[$+ie+4]=o.x,F[$+ie+5]=o.y,F[$+ie+6]=o.z,F[$+ie+7]=0),S===!0&&(o.fromBufferAttribute(B,de),F[$+ie+8]=o.x,F[$+ie+9]=o.y,F[$+ie+10]=o.z,F[$+ie+11]=B.itemSize===4?o.w:1)}}g={count:x,texture:E,size:new xt(L,C)},r.set(d,g),d.addEventListener("dispose",O)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let A=0;for(let S=0;S<m.length;S++)A+=m[S];const P=d.morphTargetsRelative?1:1-A;p.getUniforms().setValue(s,"morphTargetBaseInfluence",P),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function By(s,e,n,r,o){let u=new WeakMap;function c(m){const v=o.render.frame,x=m.geometry,g=e.get(m,x);if(u.get(g)!==v&&(e.update(g),u.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==v&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),u.set(m,v))),m.isSkinnedMesh){const M=m.skeleton;u.get(M)!==v&&(M.update(),u.set(M,v))}return g}function d(){u=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:c,dispose:d}}const ky={[Wm]:"LINEAR_TONE_MAPPING",[Xm]:"REINHARD_TONE_MAPPING",[Ym]:"CINEON_TONE_MAPPING",[qm]:"ACES_FILMIC_TONE_MAPPING",[$m]:"AGX_TONE_MAPPING",[Zm]:"NEUTRAL_TONE_MAPPING",[Km]:"CUSTOM_TONE_MAPPING"};function zy(s,e,n,r,o,u){const c=new Oi(e,n,{type:s,depthBuffer:o,stencilBuffer:u,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,p=null;const m=new oi;m.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new un([0,2,0,0,2,0],2));const v=new Rv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new De(m,v),g=new hd(-1,1,1,-1,0,1);let M=null,A=null,P=!1,S,_=null,I=[],G=!1;this.setSize=function(R,L){c.setSize(R,L),d!==null&&d.setSize(R,L),p!==null&&p.setSize(R,L);for(let C=0;C<I.length;C++){const F=I[C];F.setSize&&F.setSize(R,L)}},this.setEffects=function(R){I=R,G=I.length>0&&I[0].isRenderPass===!0;const L=c.width,C=c.height;I.length>0&&d===null&&(d=new Oi(L,C,{type:ji,depthBuffer:!1,stencilBuffer:!1}),p=new Oi(L,C,{type:ji,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<I.length;F++){const E=I[F];E.setSize&&E.setSize(L,C)}},this.begin=function(R,L){if(P||R.toneMapping===$i&&I.length===0)return!1;if(_=L,L!==null){const C=L.width,F=L.height;(c.width!==C||c.height!==F)&&this.setSize(C,F)}return G===!1&&R.setRenderTarget(c),S=R.toneMapping,R.toneMapping=$i,!0},this.hasRenderPass=function(){return G},this.end=function(R,L){R.toneMapping=S,P=!0;let C=c,F=d;for(let E=0;E<I.length;E++){const b=I[E];b.enabled!==!1&&(b.render(R,F,C,L),b.needsSwap!==!1&&(C=F,F=F===d?p:d))}if(M!==R.outputColorSpace||A!==R.toneMapping){M=R.outputColorSpace,A=R.toneMapping,v.defines={},Et.getTransfer(M)===Ft&&(v.defines.SRGB_TRANSFER="");const E=ky[A];E&&(v.defines[E]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=C.texture,R.setRenderTarget(_),R.render(x,g),_=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),p!==null&&p.dispose(),m.dispose(),v.dispose()}}const v0=new kn,Kf=new ro(1,1),x0=new a0,S0=new iv,y0=new f0,wm=[],Tm=[],Am=new Float32Array(16),Rm=new Float32Array(9),Cm=new Float32Array(4);function ua(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let u=wm[o];if(u===void 0&&(u=new Float32Array(o),wm[o]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(u,d)}return u}function gn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function _n(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function ql(s,e){let n=Tm[e];n===void 0&&(n=new Int32Array(e),Tm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Hy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function Vy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;s.uniform2fv(this.addr,e),_n(n,e)}}function Gy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(gn(n,e))return;s.uniform3fv(this.addr,e),_n(n,e)}}function Wy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;s.uniform4fv(this.addr,e),_n(n,e)}}function Xy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(n,e)}else{if(gn(n,r))return;Cm.set(r),s.uniformMatrix2fv(this.addr,!1,Cm),_n(n,r)}}function Yy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(n,e)}else{if(gn(n,r))return;Rm.set(r),s.uniformMatrix3fv(this.addr,!1,Rm),_n(n,r)}}function qy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(gn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(n,e)}else{if(gn(n,r))return;Am.set(r),s.uniformMatrix4fv(this.addr,!1,Am),_n(n,r)}}function Ky(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function $y(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;s.uniform2iv(this.addr,e),_n(n,e)}}function Zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;s.uniform3iv(this.addr,e),_n(n,e)}}function jy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;s.uniform4iv(this.addr,e),_n(n,e)}}function Jy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Qy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(gn(n,e))return;s.uniform2uiv(this.addr,e),_n(n,e)}}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(gn(n,e))return;s.uniform3uiv(this.addr,e),_n(n,e)}}function tM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(gn(n,e))return;s.uniform4uiv(this.addr,e),_n(n,e)}}function nM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let u;this.type===s.SAMPLER_2D_SHADOW?(Kf.compareFunction=n.isReversedDepthBuffer()?ad:sd,u=Kf):u=v0,n.setTexture2D(e||u,o)}function iM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||S0,o)}function rM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||y0,o)}function sM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||x0,o)}function aM(s){switch(s){case 5126:return Hy;case 35664:return Vy;case 35665:return Gy;case 35666:return Wy;case 35674:return Xy;case 35675:return Yy;case 35676:return qy;case 5124:case 35670:return Ky;case 35667:case 35671:return $y;case 35668:case 35672:return Zy;case 35669:case 35673:return jy;case 5125:return Jy;case 36294:return Qy;case 36295:return eM;case 36296:return tM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return iM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return sM}}function oM(s,e){s.uniform1fv(this.addr,e)}function lM(s,e){const n=ua(e,this.size,2);s.uniform2fv(this.addr,n)}function uM(s,e){const n=ua(e,this.size,3);s.uniform3fv(this.addr,n)}function cM(s,e){const n=ua(e,this.size,4);s.uniform4fv(this.addr,n)}function fM(s,e){const n=ua(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function dM(s,e){const n=ua(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function hM(s,e){const n=ua(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function pM(s,e){s.uniform1iv(this.addr,e)}function mM(s,e){s.uniform2iv(this.addr,e)}function gM(s,e){s.uniform3iv(this.addr,e)}function _M(s,e){s.uniform4iv(this.addr,e)}function vM(s,e){s.uniform1uiv(this.addr,e)}function xM(s,e){s.uniform2uiv(this.addr,e)}function SM(s,e){s.uniform3uiv(this.addr,e)}function yM(s,e){s.uniform4uiv(this.addr,e)}function MM(s,e,n){const r=this.cache,o=e.length,u=ql(n,o);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));let c;this.type===s.SAMPLER_2D_SHADOW?c=Kf:c=v0;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||c,u[d])}function EM(s,e,n){const r=this.cache,o=e.length,u=ql(n,o);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||S0,u[c])}function wM(s,e,n){const r=this.cache,o=e.length,u=ql(n,o);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||y0,u[c])}function TM(s,e,n){const r=this.cache,o=e.length,u=ql(n,o);gn(r,u)||(s.uniform1iv(this.addr,u),_n(r,u));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||x0,u[c])}function AM(s){switch(s){case 5126:return oM;case 35664:return lM;case 35665:return uM;case 35666:return cM;case 35674:return fM;case 35675:return dM;case 35676:return hM;case 5124:case 35670:return pM;case 35667:case 35671:return mM;case 35668:case 35672:return gM;case 35669:case 35673:return _M;case 5125:return vM;case 36294:return xM;case 36295:return SM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return TM}}class RM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=aM(n.type)}}class CM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AM(n.type)}}class bM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const d=o[u];d.setValue(e,n[d.id],r)}}}const sf=/(\w+)(\])?(\[|\.)?/g;function bm(s,e){s.seq.push(e),s.map[e.id]=e}function PM(s,e,n){const r=s.name,o=r.length;for(sf.lastIndex=0;;){const u=sf.exec(r),c=sf.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===o){bm(n,m===void 0?new RM(d,s,e):new CM(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new bM(d),bm(n,x)),n=x}}}class Ol{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(n,c),p=e.getUniformLocation(n,d.name);PM(d,p,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,c=n.length;u!==c;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function Pm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const LM=37297;let NM=0;function DM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=o;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Lm=new ft;function IM(s){Et._getMatrix(Lm,Et.workingColorSpace,s);const e=`mat3( ${Lm.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case Hl:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Nm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+DM(s.getShaderSource(e),d)}else return u}function UM(s,e){const n=IM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const FM={[Wm]:"Linear",[Xm]:"Reinhard",[Ym]:"Cineon",[qm]:"ACESFilmic",[$m]:"AgX",[Zm]:"Neutral",[Km]:"Custom"};function OM(s,e){const n=FM[e];return n===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ll=new te;function BM(){Et.getLuminanceCoefficients(Ll);const s=Ll.x.toFixed(4),e=Ll.y.toFixed(4),n=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function zM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function HM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=s.getActiveAttrib(e,o),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function ja(s){return s!==""}function Dm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(s){return s.replace(VM,WM)}const GM=new Map;function WM(s,e){let n=gt[e];if(n===void 0){const r=GM.get(e);if(r!==void 0)n=gt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $f(n)}const XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(s){return s.replace(XM,YM)}function YM(s,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Fm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qM={[Nl]:"SHADOWMAP_TYPE_PCF",[Za]:"SHADOWMAP_TYPE_VSM"};function KM(s){return qM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $M={[_s]:"ENVMAP_TYPE_CUBE",[aa]:"ENVMAP_TYPE_CUBE",[Xl]:"ENVMAP_TYPE_CUBE_UV"};function ZM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":$M[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const jM={[aa]:"ENVMAP_MODE_REFRACTION"};function JM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":jM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QM={[Jf]:"ENVMAP_BLENDING_MULTIPLY",[I_]:"ENVMAP_BLENDING_MIX",[U_]:"ENVMAP_BLENDING_ADD"};function eE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":QM[s.combine]||"ENVMAP_BLENDING_NONE"}function tE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function nE(s,e,n,r){const o=s.getContext(),u=n.defines;let c=n.vertexShader,d=n.fragmentShader;const p=KM(n),m=ZM(n),v=JM(n),x=eE(n),g=tE(n),M=kM(n),A=zM(u),P=o.createProgram();let S,_,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(ja).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(ja).join(`
`),_.length>0&&(_+=`
`)):(S=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),_=[Fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?gt.tonemapping_pars_fragment:"",n.toneMapping!==$i?OM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,UM("linearToOutputTexel",n.outputColorSpace),BM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ja).join(`
`)),c=$f(c),c=Dm(c,n),c=Im(c,n),d=$f(d),d=Dm(d,n),d=Im(d,n),c=Um(c),d=Um(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===$p?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$p?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const G=I+S+c,R=I+_+d,L=Pm(o,o.VERTEX_SHADER,G),C=Pm(o,o.FRAGMENT_SHADER,R);o.attachShader(P,L),o.attachShader(P,C),n.index0AttributeName!==void 0?o.bindAttribLocation(P,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(P,0,"position"),o.linkProgram(P);function F(Y){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(P)||"",ne=o.getShaderInfoLog(L)||"",B=o.getShaderInfoLog(C)||"",$=K.trim(),de=ne.trim(),ie=B.trim();let Q=!0,Z=!0;if(o.getProgramParameter(P,o.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,P,L,C);else{const W=Nm(o,L,"vertex"),N=Nm(o,C,"fragment");Nt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(P,o.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+$+`
`+W+`
`+N)}else $!==""?ot("WebGLProgram: Program Info Log:",$):(de===""||ie==="")&&(Z=!1);Z&&(Y.diagnostics={runnable:Q,programLog:$,vertexShader:{log:de,prefix:S},fragmentShader:{log:ie,prefix:_}})}o.deleteShader(L),o.deleteShader(C),E=new Ol(o,P),b=HM(o,P)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=o.getProgramParameter(P,LM)),O},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(P),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NM++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=L,this.fragmentShader=C,this}let iE=0;class rE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new sE(e),n.set(e,r)),r}}class sE{constructor(e){this.id=iE++,this.code=e,this.usedTimes=0}}function aE(s){return s===vs||s===Bl||s===kl}function oE(s,e,n,r,o,u){const c=new o0,d=new rE,p=new Set,m=[],v=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return p.add(E),E===0?"uv":`uv${E}`}function P(E,b,O,Y,K,ne){const B=Y.fog,$=K.geometry,de=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?Y.environment:null,ie=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Q=e.get(E.envMap||de,ie),Z=Q&&Q.mapping===Xl?Q.image.height:null,W=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&ot("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const N=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=N!==void 0?N.length:0;let Te=0;$.morphAttributes.position!==void 0&&(Te=1),$.morphAttributes.normal!==void 0&&(Te=2),$.morphAttributes.color!==void 0&&(Te=3);let Ke,He,Xe,ee;if(W){const pt=Yi[W];Ke=pt.vertexShader,He=pt.fragmentShader}else{Ke=E.vertexShader,He=E.fragmentShader;const pt=d.getVertexShaderStage(E),dt=d.getFragmentShaderStage(E);d.update(E,pt,dt),Xe=pt.id,ee=dt.id}const he=s.getRenderTarget(),Ce=s.state.buffers.depth.getReversed(),et=K.isInstancedMesh===!0,ke=K.isBatchedMesh===!0,pe=!!E.map,It=!!E.matcap,ut=!!Q,_t=!!E.aoMap,Rt=!!E.lightMap,ct=!!E.bumpMap&&E.wireframe===!1,At=!!E.normalMap,Ht=!!E.displacementMap,$t=!!E.emissiveMap,Ct=!!E.metalnessMap,Bt=!!E.roughnessMap,X=E.anisotropy>0,en=E.clearcoat>0,St=E.dispersion>0,D=E.retroreflectivity>0,y=E.iridescence>0,j=E.sheen>0,le=E.transmission>0,ge=X&&!!E.anisotropyMap,V=en&&!!E.clearcoatMap,_e=en&&!!E.clearcoatNormalMap,J=en&&!!E.clearcoatRoughnessMap,oe=y&&!!E.iridescenceMap,ye=y&&!!E.iridescenceThicknessMap,Ie=j&&!!E.sheenColorMap,Ae=j&&!!E.sheenRoughnessMap,Le=!!E.specularMap,ze=!!E.specularColorMap,$e=!!E.specularIntensityMap,it=le&&!!E.transmissionMap,k=le&&!!E.thicknessMap,Pe=!!E.gradientMap,ve=!!E.alphaMap,Me=E.alphaTest>0,Re=!!E.alphaHash,Se=!!E.extensions;let Ye=$i;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ye=s.toneMapping);const Ve={shaderID:W,shaderType:E.type,shaderName:E.name,vertexShader:Ke,fragmentShader:He,defines:E.defines,customVertexShaderID:Xe,customFragmentShaderID:ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:ke,batchingColor:ke&&K._colorsTexture!==null,instancing:et,instancingColor:et&&K.instanceColor!==null,instancingMorph:et&&K.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:pe,matcap:It,envMap:ut,envMapMode:ut&&Q.mapping,envMapCubeUVHeight:Z,aoMap:_t,lightMap:Rt,bumpMap:ct,normalMap:At,displacementMap:Ht,emissiveMap:$t,normalMapObjectSpace:At&&E.normalMapType===B_,normalMapTangentSpace:At&&E.normalMapType===Yf,packedNormalMap:At&&E.normalMapType===Yf&&aE(E.normalMap.format),metalnessMap:Ct,roughnessMap:Bt,anisotropy:X,anisotropyMap:ge,clearcoat:en,clearcoatMap:V,clearcoatNormalMap:_e,clearcoatRoughnessMap:J,dispersion:St,retroreflection:D,iridescence:y,iridescenceMap:oe,iridescenceThicknessMap:ye,sheen:j,sheenColorMap:Ie,sheenRoughnessMap:Ae,specularMap:Le,specularColorMap:ze,specularIntensityMap:$e,transmission:le,transmissionMap:it,thicknessMap:k,gradientMap:Pe,opaque:E.transparent===!1&&E.blending===Qa&&E.alphaToCoverage===!1,alphaMap:ve,alphaTest:Me,alphaHash:Re,combine:E.combine,mapUv:pe&&A(E.map.channel),aoMapUv:_t&&A(E.aoMap.channel),lightMapUv:Rt&&A(E.lightMap.channel),bumpMapUv:ct&&A(E.bumpMap.channel),normalMapUv:At&&A(E.normalMap.channel),displacementMapUv:Ht&&A(E.displacementMap.channel),emissiveMapUv:$t&&A(E.emissiveMap.channel),metalnessMapUv:Ct&&A(E.metalnessMap.channel),roughnessMapUv:Bt&&A(E.roughnessMap.channel),anisotropyMapUv:ge&&A(E.anisotropyMap.channel),clearcoatMapUv:V&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:_e&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&A(E.sheenRoughnessMap.channel),specularMapUv:Le&&A(E.specularMap.channel),specularColorMapUv:ze&&A(E.specularColorMap.channel),specularIntensityMapUv:$e&&A(E.specularIntensityMap.channel),transmissionMapUv:it&&A(E.transmissionMap.channel),thicknessMapUv:k&&A(E.thicknessMap.channel),alphaMapUv:ve&&A(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(At||X),vertexNormals:!!$.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!$.attributes.uv&&(pe||ve),fog:!!B,useFog:E.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||$.attributes.normal===void 0&&At===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ce,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,decodeVideoTexture:pe&&E.map.isVideoTexture===!0&&Et.getTransfer(E.map.colorSpace)===Ft,decodeVideoTextureEmissive:$t&&E.emissiveMap.isVideoTexture===!0&&Et.getTransfer(E.emissiveMap.colorSpace)===Ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gr,flipSided:E.side===Zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Se&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&E.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ve.vertexUv1s=p.has(1),Ve.vertexUv2s=p.has(2),Ve.vertexUv3s=p.has(3),p.clear(),Ve}function S(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const O in E.defines)b.push(O),b.push(E.defines[O]);return E.isRawShaderMaterial===!1&&(_(b,E),I(b,E),b.push(s.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function _(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numSunLights),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numSunLightShadows),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function I(E,b){c.disableAll(),b.instancing&&c.enable(0),b.instancingColor&&c.enable(1),b.instancingMorph&&c.enable(2),b.matcap&&c.enable(3),b.envMap&&c.enable(4),b.normalMapObjectSpace&&c.enable(5),b.normalMapTangentSpace&&c.enable(6),b.clearcoat&&c.enable(7),b.iridescence&&c.enable(8),b.alphaTest&&c.enable(9),b.vertexColors&&c.enable(10),b.vertexAlphas&&c.enable(11),b.vertexUv1s&&c.enable(12),b.vertexUv2s&&c.enable(13),b.vertexUv3s&&c.enable(14),b.vertexTangents&&c.enable(15),b.anisotropy&&c.enable(16),b.alphaHash&&c.enable(17),b.batching&&c.enable(18),b.dispersion&&c.enable(19),b.retroreflection&&c.enable(24),b.batchingColor&&c.enable(20),b.gradientMap&&c.enable(21),b.packedNormalMap&&c.enable(22),b.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),b.fog&&c.enable(0),b.useFog&&c.enable(1),b.flatShading&&c.enable(2),b.logarithmicDepthBuffer&&c.enable(3),b.reversedDepthBuffer&&c.enable(4),b.skinning&&c.enable(5),b.morphTargets&&c.enable(6),b.morphNormals&&c.enable(7),b.morphColors&&c.enable(8),b.premultipliedAlpha&&c.enable(9),b.shadowMapEnabled&&c.enable(10),b.doubleSided&&c.enable(11),b.flipSided&&c.enable(12),b.useDepthPacking&&c.enable(13),b.dithering&&c.enable(14),b.transmission&&c.enable(15),b.sheen&&c.enable(16),b.opaque&&c.enable(17),b.pointsUvs&&c.enable(18),b.decodeVideoTexture&&c.enable(19),b.decodeVideoTextureEmissive&&c.enable(20),b.alphaToCoverage&&c.enable(21),b.numLightProbeGrids>0&&c.enable(22),b.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function G(E){const b=M[E.type];let O;if(b){const Y=Yi[b];O=wv.clone(Y.uniforms)}else O=E.uniforms;return O}function R(E,b){let O=v.get(b);return O!==void 0?++O.usedTimes:(O=new nE(s,b,E,o),m.push(O),v.set(b,O)),O}function L(E){if(--E.usedTimes===0){const b=m.indexOf(E);m[b]=m[m.length-1],m.pop(),v.delete(E.cacheKey),E.destroy()}}function C(E){d.remove(E)}function F(){d.dispose()}return{getParameters:P,getProgramCacheKey:S,getUniforms:G,acquireProgram:R,releaseProgram:L,releaseShaderCache:C,programs:m,dispose:F}}function lE(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function o(c,d,p){s.get(c)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function uE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Om(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Bm(){const s=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function c(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function d(g,M,A,P,S,_){let I=s[e];return I===void 0?(I={id:g.id,object:g,geometry:M,material:A,materialVariant:c(g),groupOrder:P,renderOrder:g.renderOrder,z:S,group:_},s[e]=I):(I.id=g.id,I.object=g,I.geometry=M,I.material=A,I.materialVariant=c(g),I.groupOrder=P,I.renderOrder=g.renderOrder,I.z=S,I.group=_),e++,I}function p(g,M,A,P,S,_,I){I.reversedDepth===!0&&(S=-S);const G=d(g,M,A,P,S,_);A.transmission>0?r.push(G):A.transparent===!0?o.push(G):n.push(G)}function m(g,M,A,P,S,_){const I=d(g,M,A,P,S,_);A.transmission>0?r.unshift(I):A.transparent===!0?o.unshift(I):n.unshift(I)}function v(g,M){n.length>1&&n.sort(g||uE),r.length>1&&r.sort(M||Om),o.length>1&&o.sort(M||Om)}function x(){for(let g=e,M=s.length;g<M;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:p,unshift:m,finish:x,sort:v}}function cE(){let s=new WeakMap;function e(r,o){const u=s.get(r);let c;return u===void 0?(c=new Bm,s.set(r,[c])):o>=u.length?(c=new Bm,u.push(c)):c=u[o],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function fE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new te,color:new Tt};break;case"SpotLight":n={position:new te,direction:new te,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new te,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new te,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new te,halfWidth:new te,halfHeight:new te};break}return s[e.id]=n,n}}}function dE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let hE=0;function pE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function mE(s){const e=new fE,n=dE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new te);const o=new te,u=new sn,c=new sn;function d(m){let v=0,x=0,g=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let M=0,A=0,P=0,S=0,_=0,I=0,G=0,R=0,L=0,C=0,F=0,E=0,b=0,O=0;m.sort(pE);for(let K=0,ne=m.length;K<ne;K++){const B=m[K],$=B.color,de=B.intensity,ie=B.distance;let Q=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===vs?Q=B.shadow.map.texture:Q=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=$.r*de,x+=$.g*de,g+=$.b*de;else if(B.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(B.sh.coefficients[Z],de);O++}else if(B.isSunLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const W=B.shadow,N=n.get(B);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),r.sunShadow[A]=N,r.sunShadowMap[A]=Q;const ue=W.getViewportCount();for(let Te=0;Te<ue;Te++)r.sunShadowMatrix[P+Te]=W.getMatrix(Te),r.sunShadowCascade[P+Te]=W._cascadeData[Te];P+=ue,A++}r.sun[M]=Z,M++}else if(B.isDirectionalLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const W=B.shadow,N=n.get(B);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,r.directionalShadow[S]=N,r.directionalShadowMap[S]=Q,r.directionalShadowMatrix[S]=B.shadow.matrix,L++}r.directional[S]=Z,S++}else if(B.isSpotLight){const Z=e.get(B);Z.position.setFromMatrixPosition(B.matrixWorld),Z.color.copy($).multiplyScalar(de),Z.distance=ie,Z.coneCos=Math.cos(B.angle),Z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Z.decay=B.decay,r.spot[I]=Z;const W=B.shadow;if(B.map&&(r.spotLightMap[E]=B.map,E++,W.updateMatrices(B),B.castShadow&&b++),r.spotLightMatrix[I]=W.matrix,B.castShadow){const N=n.get(B);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,r.spotShadow[I]=N,r.spotShadowMap[I]=Q,F++}I++}else if(B.isRectAreaLight){const Z=e.get(B);Z.color.copy($).multiplyScalar(de),Z.halfWidth.set(B.width*.5,0,0),Z.halfHeight.set(0,B.height*.5,0),r.rectArea[G]=Z,G++}else if(B.isPointLight){const Z=e.get(B);if(Z.color.copy(B.color).multiplyScalar(B.intensity),Z.distance=B.distance,Z.decay=B.decay,B.castShadow){const W=B.shadow,N=n.get(B);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,N.shadowCameraNear=W.camera.near,N.shadowCameraFar=W.camera.far,r.pointShadow[_]=N,r.pointShadowMap[_]=Q,r.pointShadowMatrix[_]=B.shadow.matrix,C++}r.point[_]=Z,_++}else if(B.isHemisphereLight){const Z=e.get(B);Z.skyColor.copy(B.color).multiplyScalar(de),Z.groundColor.copy(B.groundColor).multiplyScalar(de),r.hemi[R]=Z,R++}}G>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=g;const Y=r.hash;(Y.sunLength!==M||Y.directionalLength!==S||Y.pointLength!==_||Y.spotLength!==I||Y.rectAreaLength!==G||Y.hemiLength!==R||Y.numSunShadows!==A||Y.numDirectionalShadows!==L||Y.numPointShadows!==C||Y.numSpotShadows!==F||Y.numSpotMaps!==E||Y.numLightProbes!==O)&&(r.sun.length=M,r.directional.length=S,r.spot.length=I,r.rectArea.length=G,r.point.length=_,r.hemi.length=R,r.sunShadow.length=A,r.sunShadowMap.length=A,r.sunShadowMatrix.length=P,r.sunShadowCascade.length=P,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.directionalShadowMatrix.length=L,r.pointShadow.length=C,r.pointShadowMap.length=C,r.pointShadowMatrix.length=C,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+E-b,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=O,Y.sunLength=M,Y.directionalLength=S,Y.pointLength=_,Y.spotLength=I,Y.rectAreaLength=G,Y.hemiLength=R,Y.numSunShadows=A,Y.numDirectionalShadows=L,Y.numPointShadows=C,Y.numSpotShadows=F,Y.numSpotMaps=E,Y.numLightProbes=O,r.version=hE++)}function p(m,v){let x=0,g=0,M=0,A=0,P=0,S=0;const _=v.matrixWorldInverse;for(let I=0,G=m.length;I<G;I++){const R=m[I];if(R.isSunLight){const L=r.sun[x];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(_),x++}else if(R.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),g++}else if(R.isSpotLight){const L=r.spot[A];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(_),A++}else if(R.isRectAreaLight){const L=r.rectArea[P];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(_),c.identity(),u.copy(R.matrixWorld),u.premultiply(_),c.extractRotation(u),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),P++}else if(R.isPointLight){const L=r.point[M];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(_),M++}else if(R.isHemisphereLight){const L=r.hemi[S];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(_),S++}}}return{setup:d,setupView:p,state:r}}function km(s){const e=new mE(s),n=[],r=[],o=[];function u(g){x.camera=g,n.length=0,r.length=0,o.length=0}function c(g){n.push(g)}function d(g){r.push(g)}function p(g){o.push(g)}function m(){e.setup(n)}function v(g){e.setupView(n,g)}const x={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:x,setupLights:m,setupLightsView:v,pushLight:c,pushShadow:d,pushLightProbeGrid:p}}function gE(s){let e=new WeakMap;function n(o,u=0){const c=e.get(o);let d;return c===void 0?(d=new km(s),e.set(o,[d])):u>=c.length?(d=new km(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const _E=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xE=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],SE=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],zm=new sn,$a=new te,af=new te;function yE(s,e,n){let r=new ud;const o=new xt,u=new xt,c=new Qt,d=new Cv,p=new bv,m={},v=n.maxTextureSize,x={[gs]:Zn,[Zn]:gs,[gr]:gr},g=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:_E,fragmentShader:vE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const A=new oi;A.setAttribute("position",new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new De(A,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let _=this.type;this.render=function(C,F,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||C.length===0)return;this.type===Hm&&(ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nl);const b=s.getRenderTarget(),O=s.getActiveCubeFace(),Y=s.getActiveMipmapLevel(),K=s.state;K.setBlending(xr),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ne=_!==this.type;ne&&F.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach($=>$.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,$=C.length;B<$;B++){const de=C[B],ie=de.shadow;if(ie===void 0){ot("WebGLShadowMap:",de,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;o.copy(ie.mapSize);const Q=ie.getFrameExtents();o.multiply(Q),u.copy(ie.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(u.x=Math.floor(v/Q.x),o.x=u.x*Q.x,ie.mapSize.x=u.x),o.y>v&&(u.y=Math.floor(v/Q.y),o.y=u.y*Q.y,ie.mapSize.y=u.y));const Z=s.state.buffers.depth.getReversed();if(ie.camera._reversedDepth=Z,ie.map===null||ne===!0){if(ie.map!==null&&(ie.map.depthTexture!==null&&(ie.map.depthTexture.dispose(),ie.map.depthTexture=null),ie.map.dispose()),this.type===Za){if(de.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ie.map=new Oi(o.x,o.y,{format:vs,type:ji,minFilter:In,magFilter:In,generateMipmaps:!1}),ie.map.texture.name=de.name+".shadowMap",ie.map.depthTexture=new ro(o.x,o.y,qi),ie.map.depthTexture.name=de.name+".shadowMapDepth",ie.map.depthTexture.format=Mr,ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=wn,ie.map.depthTexture.magFilter=wn}else de.isPointLight?(ie.map=new _0(o.x),ie.map.depthTexture=new Mv(o.x,Zi)):(ie.map=new Oi(o.x,o.y),ie.map.depthTexture=new ro(o.x,o.y,Zi)),ie.map.depthTexture.name=de.name+".shadowMap",ie.map.depthTexture.format=Mr,this.type===Nl?(ie.map.depthTexture.compareFunction=Z?ad:sd,ie.map.depthTexture.minFilter=In,ie.map.depthTexture.magFilter=In):(ie.map.depthTexture.compareFunction=null,ie.map.depthTexture.minFilter=wn,ie.map.depthTexture.magFilter=wn);ie.camera.updateProjectionMatrix()}ie.map.isWebGLCubeRenderTarget!==!0&&(ie.map.width!==o.x||ie.map.height!==o.y)&&ie.map.setSize(o.x,o.y);const W=ie.map.isWebGLCubeRenderTarget?6:ie.getViewportCount();de.isPointLight!==!0&&ie.updateMatrices(de,E);for(let N=0;N<W;N++){const ue=ie.getCamera(N);if(de.isPointLight){const Te=ie.camera,Ke=ie.matrix,He=de.distance||Te.far;He!==Te.far&&(Te.far=He,Te.updateProjectionMatrix()),$a.setFromMatrixPosition(de.matrixWorld),Te.position.copy($a),af.copy(Te.position),af.add(xE[N]),Te.up.copy(SE[N]),Te.lookAt(af),Te.updateMatrixWorld(),Ke.makeTranslation(-$a.x,-$a.y,-$a.z),zm.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),ie._frustum.setFromProjectionMatrix(zm,Te.coordinateSystem,Te.reversedDepth)}if(ie.map.isWebGLCubeRenderTarget)s.setRenderTarget(ie.map,N),s.clear();else{N===0&&(s.setRenderTarget(ie.map),s.clear());const Te=ie.getViewport(N);c.set(u.x*Te.x,u.y*Te.y,u.x*Te.z,u.y*Te.w),K.viewport(c)}r=ie.getFrustum(N),R(F,E,ue,de,this.type)}ie.isPointLightShadow!==!0&&this.type===Za&&I(ie,E),ie.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(b,O,Y)};function I(C,F){const E=e.update(P);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,M.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),C.mapPass===null?C.mapPass=new Oi(o.x,o.y,{format:vs,type:ji}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),g.uniforms.shadow_pass.value=C.map.depthTexture,g.uniforms.resolution.value.set(C.map.width,C.map.height),g.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(F,null,E,g,P,null),M.uniforms.shadow_pass.value=C.mapPass.texture,M.uniforms.resolution.value.set(C.map.width,C.map.height),M.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(F,null,E,M,P,null)}function G(C,F,E,b){let O=null;const Y=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(Y!==void 0)O=Y;else if(O=E.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=O.uuid,ne=F.uuid;let B=m[K];B===void 0&&(B={},m[K]=B);let $=B[ne];$===void 0&&($=O.clone(),B[ne]=$,F.addEventListener("dispose",L)),O=$}if(O.visible=F.visible,O.wireframe=F.wireframe,b===Za?O.side=F.shadowSide!==null?F.shadowSide:F.side:O.side=F.shadowSide!==null?F.shadowSide:x[F.side],O.alphaMap=F.alphaMap,O.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,O.map=F.map,O.clipShadows=F.clipShadows,O.clippingPlanes=F.clippingPlanes,O.clipIntersection=F.clipIntersection,O.displacementMap=F.displacementMap,O.displacementScale=F.displacementScale,O.displacementBias=F.displacementBias,O.wireframeLinewidth=F.wireframeLinewidth,O.linewidth=F.linewidth,E.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const K=s.properties.get(O);K.light=E}return O}function R(C,F,E,b,O){if(C.visible===!1)return;if(C.layers.test(F.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&O===Za)&&(!C.frustumCulled||C.intersectsFrustum(r))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const ne=e.update(C),B=C.material;if(Array.isArray(B)){const $=ne.groups;for(let de=0,ie=$.length;de<ie;de++){const Q=$[de],Z=B[Q.materialIndex];if(Z&&Z.visible){const W=G(C,Z,b,O);C.onBeforeShadow(s,C,F,E,ne,W,Q),s.renderBufferDirect(E,null,ne,W,C,Q),C.onAfterShadow(s,C,F,E,ne,W,Q)}}}else if(B.visible){const $=G(C,B,b,O);C.onBeforeShadow(s,C,F,E,ne,$,null),s.renderBufferDirect(E,null,ne,$,C,null),C.onAfterShadow(s,C,F,E,ne,$,null)}}const K=C.children;for(let ne=0,B=K.length;ne<B;ne++)R(K[ne],F,E,b,O)}function L(C){C.target.removeEventListener("dispose",L);for(const E in m){const b=m[E],O=C.target.uuid;O in b&&(b[O].dispose(),delete b[O])}}}function ME(s,e){function n(){let k=!1;const Pe=new Qt;let ve=null;const Me=new Qt(0,0,0,0);return{setMask:function(Re){ve!==Re&&!k&&(s.colorMask(Re,Re,Re,Re),ve=Re)},setLocked:function(Re){k=Re},setClear:function(Re,Se,Ye,Ve,pt){pt===!0&&(Re*=Ve,Se*=Ve,Ye*=Ve),Pe.set(Re,Se,Ye,Ve),Me.equals(Pe)===!1&&(s.clearColor(Re,Se,Ye,Ve),Me.copy(Pe))},reset:function(){k=!1,ve=null,Me.set(-1,0,0,0)}}}function r(){let k=!1,Pe=!1,ve=null,Me=null,Re=null;return{setReversed:function(Se){if(Pe!==Se){const Ye=e.get("EXT_clip_control");Se?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Pe=Se;const Ve=Re;Re=null,this.setClear(Ve)}},getReversed:function(){return Pe},setTest:function(Se){Se?he(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(Se){ve!==Se&&!k&&(s.depthMask(Se),ve=Se)},setFunc:function(Se){if(Pe&&(Se=Z_[Se]),Me!==Se){switch(Se){case of:s.depthFunc(s.NEVER);break;case lf:s.depthFunc(s.ALWAYS);break;case uf:s.depthFunc(s.LESS);break;case eo:s.depthFunc(s.LEQUAL);break;case cf:s.depthFunc(s.EQUAL);break;case ff:s.depthFunc(s.GEQUAL);break;case df:s.depthFunc(s.GREATER);break;case hf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Me=Se}},setLocked:function(Se){k=Se},setClear:function(Se){Re!==Se&&(Re=Se,Pe&&(Se=1-Se),s.clearDepth(Se))},reset:function(){k=!1,ve=null,Me=null,Re=null,Pe=!1}}}function o(){let k=!1,Pe=null,ve=null,Me=null,Re=null,Se=null,Ye=null,Ve=null,pt=null;return{setTest:function(dt){k||(dt?he(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(dt){Pe!==dt&&!k&&(s.stencilMask(dt),Pe=dt)},setFunc:function(dt,Yt,cn){(ve!==dt||Me!==Yt||Re!==cn)&&(s.stencilFunc(dt,Yt,cn),ve=dt,Me=Yt,Re=cn)},setOp:function(dt,Yt,cn){(Se!==dt||Ye!==Yt||Ve!==cn)&&(s.stencilOp(dt,Yt,cn),Se=dt,Ye=Yt,Ve=cn)},setLocked:function(dt){k=dt},setClear:function(dt){pt!==dt&&(s.clearStencil(dt),pt=dt)},reset:function(){k=!1,Pe=null,ve=null,Me=null,Re=null,Se=null,Ye=null,Ve=null,pt=null}}}const u=new n,c=new r,d=new o,p=new WeakMap,m=new WeakMap;let v={},x={},g={},M=new WeakMap,A=[],P=null,S=!1,_=null,I=null,G=null,R=null,L=null,C=null,F=null,E=new Tt(0,0,0),b=0,O=!1,Y=null,K=null,ne=null,B=null,$=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,Q=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),ie=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),ie=Q>=2);let W=null,N={};const ue=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),Ke=new Qt().fromArray(ue),He=new Qt().fromArray(Te);function Xe(k,Pe,ve,Me){const Re=new Uint8Array(4),Se=s.createTexture();s.bindTexture(k,Se),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<ve;Ye++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Me,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(Pe+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return Se}const ee={};ee[s.TEXTURE_2D]=Xe(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=Xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=Xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=Xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),he(s.DEPTH_TEST),c.setFunc(eo),ct(!1),At(Xp),he(s.CULL_FACE),_t(xr);function he(k){v[k]!==!0&&(s.enable(k),v[k]=!0)}function Ce(k){v[k]!==!1&&(s.disable(k),v[k]=!1)}function et(k,Pe){return g[k]!==Pe?(s.bindFramebuffer(k,Pe),g[k]=Pe,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ke(k,Pe){let ve=A,Me=!1;if(k){ve=M.get(Pe),ve===void 0&&(ve=[],M.set(Pe,ve));const Re=k.textures;if(ve.length!==Re.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,Ye=Re.length;Se<Ye;Se++)ve[Se]=s.COLOR_ATTACHMENT0+Se;ve.length=Re.length,Me=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Me=!0);Me&&s.drawBuffers(ve)}function pe(k){return P!==k?(s.useProgram(k),P=k,!0):!1}const It={[na]:s.FUNC_ADD,[__]:s.FUNC_SUBTRACT,[v_]:s.FUNC_REVERSE_SUBTRACT};It[x_]=s.MIN,It[S_]=s.MAX;const ut={[y_]:s.ZERO,[M_]:s.ONE,[E_]:s.SRC_COLOR,[Vm]:s.SRC_ALPHA,[b_]:s.SRC_ALPHA_SATURATE,[R_]:s.DST_COLOR,[T_]:s.DST_ALPHA,[w_]:s.ONE_MINUS_SRC_COLOR,[Gm]:s.ONE_MINUS_SRC_ALPHA,[C_]:s.ONE_MINUS_DST_COLOR,[A_]:s.ONE_MINUS_DST_ALPHA,[P_]:s.CONSTANT_COLOR,[L_]:s.ONE_MINUS_CONSTANT_COLOR,[N_]:s.CONSTANT_ALPHA,[D_]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(k,Pe,ve,Me,Re,Se,Ye,Ve,pt,dt){if(k===xr){S===!0&&(Ce(s.BLEND),S=!1);return}if(S===!1&&(he(s.BLEND),S=!0),k!==g_){if(k!==_||dt!==O){if((I!==na||L!==na)&&(s.blendEquation(s.FUNC_ADD),I=na,L=na),dt)switch(k){case Qa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yp:s.blendFunc(s.ONE,s.ONE);break;case qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Nt("WebGLState: Invalid blending: ",k);break}else switch(k){case Qa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case qp:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kp:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",k);break}G=null,R=null,C=null,F=null,E.set(0,0,0),b=0,_=k,O=dt}return}Re=Re||Pe,Se=Se||ve,Ye=Ye||Me,(Pe!==I||Re!==L)&&(s.blendEquationSeparate(It[Pe],It[Re]),I=Pe,L=Re),(ve!==G||Me!==R||Se!==C||Ye!==F)&&(s.blendFuncSeparate(ut[ve],ut[Me],ut[Se],ut[Ye]),G=ve,R=Me,C=Se,F=Ye),(Ve.equals(E)===!1||pt!==b)&&(s.blendColor(Ve.r,Ve.g,Ve.b,pt),E.copy(Ve),b=pt),_=k,O=!1}function Rt(k,Pe){k.side===gr?Ce(s.CULL_FACE):he(s.CULL_FACE);let ve=k.side===Zn;Pe&&(ve=!ve),ct(ve),k.blending===Qa&&k.transparent===!1?_t(xr):_t(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),u.setMask(k.colorWrite);const Me=k.stencilWrite;d.setTest(Me),Me&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),$t(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(k){Y!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),Y=k)}function At(k){k!==p_?(he(s.CULL_FACE),k!==K&&(k===Xp?s.cullFace(s.BACK):k===m_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),K=k}function Ht(k){k!==ne&&(ie&&s.lineWidth(k),ne=k)}function $t(k,Pe,ve){k?(he(s.POLYGON_OFFSET_FILL),(B!==Pe||$!==ve)&&(B=Pe,$=ve,c.getReversed()&&(Pe=-Pe),s.polygonOffset(Pe,ve))):Ce(s.POLYGON_OFFSET_FILL)}function Ct(k){k?he(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function Bt(k){k===void 0&&(k=s.TEXTURE0+de-1),W!==k&&(s.activeTexture(k),W=k)}function X(k,Pe,ve){ve===void 0&&(W===null?ve=s.TEXTURE0+de-1:ve=W);let Me=N[ve];Me===void 0&&(Me={type:void 0,texture:void 0},N[ve]=Me),(Me.type!==k||Me.texture!==Pe)&&(W!==ve&&(s.activeTexture(ve),W=ve),s.bindTexture(k,Pe||ee[k]),Me.type=k,Me.texture=Pe)}function en(){const k=N[W];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function St(){try{s.compressedTexImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function y(){try{s.texSubImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function j(){try{s.texSubImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function V(){try{s.texStorage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function _e(){try{s.texStorage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function J(){try{s.texImage2D(...arguments)}catch(k){Nt("WebGLState:",k)}}function oe(){try{s.texImage3D(...arguments)}catch(k){Nt("WebGLState:",k)}}function ye(k){return x[k]!==void 0?x[k]:s.getParameter(k)}function Ie(k,Pe){x[k]!==Pe&&(s.pixelStorei(k,Pe),x[k]=Pe)}function Ae(k){Ke.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ke.copy(k))}function Le(k){He.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),He.copy(k))}function ze(k,Pe){let ve=m.get(Pe);ve===void 0&&(ve=new WeakMap,m.set(Pe,ve));let Me=ve.get(k);Me===void 0&&(Me=s.getUniformBlockIndex(Pe,k.name),ve.set(k,Me))}function $e(k,Pe){const Me=m.get(Pe).get(k);p.get(Pe)!==Me&&(s.uniformBlockBinding(Pe,Me,k.__bindingPointIndex),p.set(Pe,Me))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},x={},W=null,N={},g={},M=new WeakMap,A=[],P=null,S=!1,_=null,I=null,G=null,R=null,L=null,C=null,F=null,E=new Tt(0,0,0),b=0,O=!1,Y=null,K=null,ne=null,B=null,$=null,Ke.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:he,disable:Ce,bindFramebuffer:et,drawBuffers:ke,useProgram:pe,setBlending:_t,setMaterial:Rt,setFlipSided:ct,setCullFace:At,setLineWidth:Ht,setPolygonOffset:$t,setScissorTest:Ct,activeTexture:Bt,bindTexture:X,unbindTexture:en,compressedTexImage2D:St,compressedTexImage3D:D,texImage2D:J,texImage3D:oe,pixelStorei:Ie,getParameter:ye,updateUBOMapping:ze,uniformBlockBinding:$e,texStorage2D:V,texStorage3D:_e,texSubImage2D:y,texSubImage3D:j,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:Ae,viewport:Le,reset:it}}function EE(s,e,n,r,o,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new xt,v=new WeakMap,x=new Set;let g;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(D,y){return A?new OffscreenCanvas(D,y):Vl("canvas")}function S(D,y,j){let le=1;const ge=St(D);if((ge.width>j||ge.height>j)&&(le=j/Math.max(ge.width,ge.height)),le<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const V=Math.floor(le*ge.width),_e=Math.floor(le*ge.height);g===void 0&&(g=P(V,_e));const J=y?P(V,_e):g;return J.width=V,J.height=_e,J.getContext("2d").drawImage(D,0,0,V,_e),ot("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+V+"x"+_e+")."),J}else return"data"in D&&ot("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function _(D){return D.generateMipmaps}function I(D){s.generateMipmap(D)}function G(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(D,y,j,le,ge,V=!1){if(D!==null){if(s[D]!==void 0)return s[D];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let _e;le&&(_e=e.get("EXT_texture_norm16"),_e||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===s.RED&&(j===s.FLOAT&&(J=s.R32F),j===s.HALF_FLOAT&&(J=s.R16F),j===s.UNSIGNED_BYTE&&(J=s.R8),j===s.UNSIGNED_SHORT&&_e&&(J=_e.R16_EXT),j===s.SHORT&&_e&&(J=_e.R16_SNORM_EXT)),y===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(J=s.R8UI),j===s.UNSIGNED_SHORT&&(J=s.R16UI),j===s.UNSIGNED_INT&&(J=s.R32UI),j===s.BYTE&&(J=s.R8I),j===s.SHORT&&(J=s.R16I),j===s.INT&&(J=s.R32I)),y===s.RG&&(j===s.FLOAT&&(J=s.RG32F),j===s.HALF_FLOAT&&(J=s.RG16F),j===s.UNSIGNED_BYTE&&(J=s.RG8),j===s.UNSIGNED_SHORT&&_e&&(J=_e.RG16_EXT),j===s.SHORT&&_e&&(J=_e.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(J=s.RG8UI),j===s.UNSIGNED_SHORT&&(J=s.RG16UI),j===s.UNSIGNED_INT&&(J=s.RG32UI),j===s.BYTE&&(J=s.RG8I),j===s.SHORT&&(J=s.RG16I),j===s.INT&&(J=s.RG32I)),y===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(J=s.RGB8UI),j===s.UNSIGNED_SHORT&&(J=s.RGB16UI),j===s.UNSIGNED_INT&&(J=s.RGB32UI),j===s.BYTE&&(J=s.RGB8I),j===s.SHORT&&(J=s.RGB16I),j===s.INT&&(J=s.RGB32I)),y===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),j===s.UNSIGNED_INT&&(J=s.RGBA32UI),j===s.BYTE&&(J=s.RGBA8I),j===s.SHORT&&(J=s.RGBA16I),j===s.INT&&(J=s.RGBA32I)),y===s.RGB&&(j===s.UNSIGNED_SHORT&&_e&&(J=_e.RGB16_EXT),j===s.SHORT&&_e&&(J=_e.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),y===s.RGBA){const oe=V?Hl:Et.getTransfer(ge);j===s.FLOAT&&(J=s.RGBA32F),j===s.HALF_FLOAT&&(J=s.RGBA16F),j===s.UNSIGNED_BYTE&&(J=oe===Ft?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&_e&&(J=_e.RGBA16_EXT),j===s.SHORT&&_e&&(J=_e.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function L(D,y){let j;return D?y===null||y===Zi||y===no?j=s.DEPTH24_STENCIL8:y===qi?j=s.DEPTH32F_STENCIL8:y===to&&(j=s.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Zi||y===no?j=s.DEPTH_COMPONENT24:y===qi?j=s.DEPTH_COMPONENT32F:y===to&&(j=s.DEPTH_COMPONENT16),j}function C(D,y){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==In?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function F(D){const y=D.target;y.removeEventListener("dispose",F),b(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&x.delete(y)}function E(D){const y=D.target;y.removeEventListener("dispose",E),Y(y)}function b(D){const y=r.get(D);if(y.__webglInit===void 0)return;const j=D.source,le=M.get(j);if(le){const ge=le[y.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&O(D),Object.keys(le).length===0&&M.delete(j)}r.remove(D)}function O(D){const y=r.get(D);s.deleteTexture(y.__webglTexture);const j=D.source,le=M.get(j);delete le[y.__cacheKey],c.memory.textures--}function Y(D){const y=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(y.__webglFramebuffer[le]))for(let ge=0;ge<y.__webglFramebuffer[le].length;ge++)s.deleteFramebuffer(y.__webglFramebuffer[le][ge]);else s.deleteFramebuffer(y.__webglFramebuffer[le]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[le])}else{if(Array.isArray(y.__webglFramebuffer))for(let le=0;le<y.__webglFramebuffer.length;le++)s.deleteFramebuffer(y.__webglFramebuffer[le]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let le=0;le<y.__webglColorRenderbuffer.length;le++)y.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[le]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const j=D.textures;for(let le=0,ge=j.length;le<ge;le++){const V=r.get(j[le]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),c.memory.textures--),r.remove(j[le])}r.remove(D)}let K=0;function ne(){K=0}function B(){return K}function $(D){K=D}function de(){const D=K;return D>=o.maxTextures&&ot("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+o.maxTextures),K+=1,D}function ie(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function Q(D,y){const j=r.get(D);if(D.isVideoTexture&&X(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&j.__version!==D.version){const le=D.image;if(le===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(j,D,y);return}}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+y)}function Z(D,y){const j=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){Ce(j,D,y);return}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+y)}function W(D,y){const j=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){Ce(j,D,y);return}n.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+y)}function N(D,y){const j=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&j.__version!==D.version){et(j,D,y);return}n.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+y)}const ue={[pf]:s.REPEAT,[vr]:s.CLAMP_TO_EDGE,[mf]:s.MIRRORED_REPEAT},Te={[wn]:s.NEAREST,[F_]:s.NEAREST_MIPMAP_NEAREST,[cl]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[bc]:s.LINEAR_MIPMAP_NEAREST,[ps]:s.LINEAR_MIPMAP_LINEAR},Ke={[z_]:s.NEVER,[X_]:s.ALWAYS,[H_]:s.LESS,[sd]:s.LEQUAL,[V_]:s.EQUAL,[ad]:s.GEQUAL,[G_]:s.GREATER,[W_]:s.NOTEQUAL};function He(D,y){if(y.type===qi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===In||y.magFilter===bc||y.magFilter===cl||y.magFilter===ps||y.minFilter===In||y.minFilter===bc||y.minFilter===cl||y.minFilter===ps)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ue[y.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ue[y.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ue[y.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Te[y.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Te[y.minFilter]),y.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,Ke[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===wn||y.minFilter!==cl&&y.minFilter!==ps||y.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function Xe(D,y){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",F));const le=y.source;let ge=M.get(le);ge===void 0&&(ge={},M.set(le,ge));const V=ie(y);if(V!==D.__cacheKey){ge[V]===void 0&&(ge[V]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,j=!0),ge[V].usedTimes++;const _e=ge[D.__cacheKey];_e!==void 0&&(ge[D.__cacheKey].usedTimes--,_e.usedTimes===0&&O(y)),D.__cacheKey=V,D.__webglTexture=ge[V].texture}return j}function ee(D,y,j){return Math.floor(Math.floor(D/j)/y)}function he(D,y,j,le){const V=D.updateRanges;if(V.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,j,le,y.data);else{V.sort((Ie,Ae)=>Ie.start-Ae.start);let _e=0;for(let Ie=1;Ie<V.length;Ie++){const Ae=V[_e],Le=V[Ie],ze=Ae.start+Ae.count,$e=ee(Le.start,y.width,4),it=ee(Ae.start,y.width,4);Le.start<=ze+1&&$e===it&&ee(Le.start+Le.count-1,y.width,4)===$e?Ae.count=Math.max(Ae.count,Le.start+Le.count-Ae.start):(++_e,V[_e]=Le)}V.length=_e+1;const J=n.getParameter(s.UNPACK_ROW_LENGTH),oe=n.getParameter(s.UNPACK_SKIP_PIXELS),ye=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Ie=0,Ae=V.length;Ie<Ae;Ie++){const Le=V[Ie],ze=Math.floor(Le.start/4),$e=Math.ceil(Le.count/4),it=ze%y.width,k=Math.floor(ze/y.width),Pe=$e,ve=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,it),n.pixelStorei(s.UNPACK_SKIP_ROWS,k),n.texSubImage2D(s.TEXTURE_2D,0,it,k,Pe,ve,j,le,y.data)}D.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,J),n.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(s.UNPACK_SKIP_ROWS,ye)}}function Ce(D,y,j){let le=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(le=s.TEXTURE_3D);const ge=Xe(D,y),V=y.source;n.bindTexture(le,D.__webglTexture,s.TEXTURE0+j);const _e=r.get(V);if(V.version!==_e.__version||ge===!0){if(n.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ve=Et.getPrimaries(Et.workingColorSpace),Me=y.colorSpace===$r?null:Et.getPrimaries(y.colorSpace),Re=y.colorSpace===$r||ve===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let oe=S(y.image,!1,o.maxTextureSize);oe=en(y,oe);const ye=u.convert(y.format,y.colorSpace),Ie=u.convert(y.type);let Ae=R(y.internalFormat,ye,Ie,y.normalized,y.colorSpace,y.isVideoTexture);He(le,y);let Le;const ze=y.mipmaps,$e=y.isVideoTexture!==!0,it=_e.__version===void 0||ge===!0,k=V.dataReady,Pe=C(y,oe);if(y.isDepthTexture)Ae=L(y.format===ms,y.type),it&&($e?n.texStorage2D(s.TEXTURE_2D,1,Ae,oe.width,oe.height):n.texImage2D(s.TEXTURE_2D,0,Ae,oe.width,oe.height,0,ye,Ie,null));else if(y.isDataTexture)if(ze.length>0){$e&&it&&n.texStorage2D(s.TEXTURE_2D,Pe,Ae,ze[0].width,ze[0].height);for(let ve=0,Me=ze.length;ve<Me;ve++)Le=ze[ve],$e?k&&n.texSubImage2D(s.TEXTURE_2D,ve,0,0,Le.width,Le.height,ye,Ie,Le.data):n.texImage2D(s.TEXTURE_2D,ve,Ae,Le.width,Le.height,0,ye,Ie,Le.data);y.generateMipmaps=!1}else $e?(it&&n.texStorage2D(s.TEXTURE_2D,Pe,Ae,oe.width,oe.height),k&&he(y,oe,ye,Ie)):n.texImage2D(s.TEXTURE_2D,0,Ae,oe.width,oe.height,0,ye,Ie,oe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){$e&&it&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Ae,ze[0].width,ze[0].height,oe.depth);for(let ve=0,Me=ze.length;ve<Me;ve++)if(Le=ze[ve],y.format!==Fi)if(ye!==null)if($e){if(k)if(y.layerUpdates.size>0){const Re=vm(Le.width,Le.height,y.format,y.type);for(const Se of y.layerUpdates){const Ye=Le.data.subarray(Se*Re/Le.data.BYTES_PER_ELEMENT,(Se+1)*Re/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,Se,Le.width,Le.height,1,ye,Ye)}}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Le.width,Le.height,oe.depth,ye,Le.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,Ae,Le.width,Le.height,oe.depth,0,Le.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?k&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Le.width,Le.height,oe.depth,ye,Ie,Le.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ve,Ae,Le.width,Le.height,oe.depth,0,ye,Ie,Le.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{$e&&it&&n.texStorage2D(s.TEXTURE_2D,Pe,Ae,ze[0].width,ze[0].height);for(let ve=0,Me=ze.length;ve<Me;ve++)Le=ze[ve],y.format!==Fi?ye!==null?$e?k&&n.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Le.width,Le.height,ye,Le.data):n.compressedTexImage2D(s.TEXTURE_2D,ve,Ae,Le.width,Le.height,0,Le.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?k&&n.texSubImage2D(s.TEXTURE_2D,ve,0,0,Le.width,Le.height,ye,Ie,Le.data):n.texImage2D(s.TEXTURE_2D,ve,Ae,Le.width,Le.height,0,ye,Ie,Le.data)}else if(y.isDataArrayTexture)if($e){if(it&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Ae,oe.width,oe.height,oe.depth),k)if(y.layerUpdates.size>0){const ve=vm(oe.width,oe.height,y.format,y.type);for(const Me of y.layerUpdates){const Re=oe.data.subarray(Me*ve/oe.data.BYTES_PER_ELEMENT,(Me+1)*ve/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Me,oe.width,oe.height,1,ye,Ie,Re)}y.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ye,Ie,oe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,ye,Ie,oe.data);else if(y.isData3DTexture)$e?(it&&n.texStorage3D(s.TEXTURE_3D,Pe,Ae,oe.width,oe.height,oe.depth),k&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ye,Ie,oe.data)):n.texImage3D(s.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,ye,Ie,oe.data);else if(y.isFramebufferTexture){if(it)if($e)n.texStorage2D(s.TEXTURE_2D,Pe,Ae,oe.width,oe.height);else{let ve=oe.width,Me=oe.height;for(let Re=0;Re<Pe;Re++)n.texImage2D(s.TEXTURE_2D,Re,Ae,ve,Me,0,ye,Ie,null),ve>>=1,Me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const ve=s.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),oe.parentNode!==ve){ve.appendChild(oe),x.add(y),ve.onpaint=Me=>{const Re=Me.changedElements;for(const Se of x)Re.includes(Se.image)&&(Se.needsUpdate=!0)},ve.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,oe);else{const Re=s.RGBA,Se=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Re,Se,Ye,oe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ze.length>0){if($e&&it){const ve=St(ze[0]);n.texStorage2D(s.TEXTURE_2D,Pe,Ae,ve.width,ve.height)}for(let ve=0,Me=ze.length;ve<Me;ve++)Le=ze[ve],$e?k&&n.texSubImage2D(s.TEXTURE_2D,ve,0,0,ye,Ie,Le):n.texImage2D(s.TEXTURE_2D,ve,Ae,ye,Ie,Le);y.generateMipmaps=!1}else if($e){if(it){const ve=St(oe);n.texStorage2D(s.TEXTURE_2D,Pe,Ae,ve.width,ve.height)}k&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye,Ie,oe)}else n.texImage2D(s.TEXTURE_2D,0,Ae,ye,Ie,oe);_(y)&&I(le),_e.__version=V.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function et(D,y,j){if(y.image.length!==6)return;const le=Xe(D,y),ge=y.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+j);const V=r.get(ge);if(ge.version!==V.__version||le===!0){n.activeTexture(s.TEXTURE0+j);const _e=Et.getPrimaries(Et.workingColorSpace),J=y.colorSpace===$r?null:Et.getPrimaries(y.colorSpace),oe=y.colorSpace===$r||_e===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const ye=y.isCompressedTexture||y.image[0].isCompressedTexture,Ie=y.image[0]&&y.image[0].isDataTexture,Ae=[];for(let Se=0;Se<6;Se++)!ye&&!Ie?Ae[Se]=S(y.image[Se],!0,o.maxCubemapSize):Ae[Se]=Ie?y.image[Se].image:y.image[Se],Ae[Se]=en(y,Ae[Se]);const Le=Ae[0],ze=u.convert(y.format,y.colorSpace),$e=u.convert(y.type),it=R(y.internalFormat,ze,$e,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,Pe=V.__version===void 0||le===!0,ve=ge.dataReady;let Me=C(y,Le);He(s.TEXTURE_CUBE_MAP,y);let Re;if(ye){k&&Pe&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Me,it,Le.width,Le.height);for(let Se=0;Se<6;Se++){Re=Ae[Se].mipmaps;for(let Ye=0;Ye<Re.length;Ye++){const Ve=Re[Ye];y.format!==Fi?ze!==null?k?ve&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,0,0,Ve.width,Ve.height,ze,Ve.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,it,Ve.width,Ve.height,0,Ve.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,0,0,Ve.width,Ve.height,ze,$e,Ve.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye,it,Ve.width,Ve.height,0,ze,$e,Ve.data)}}}else{if(Re=y.mipmaps,k&&Pe){Re.length>0&&Me++;const Se=St(Ae[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Me,it,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ie){k?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ae[Se].width,Ae[Se].height,ze,$e,Ae[Se].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,it,Ae[Se].width,Ae[Se].height,0,ze,$e,Ae[Se].data);for(let Ye=0;Ye<Re.length;Ye++){const pt=Re[Ye].image[Se].image;k?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,0,0,pt.width,pt.height,ze,$e,pt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,it,pt.width,pt.height,0,ze,$e,pt.data)}}else{k?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ze,$e,Ae[Se]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,it,ze,$e,Ae[Se]);for(let Ye=0;Ye<Re.length;Ye++){const Ve=Re[Ye];k?ve&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,0,0,ze,$e,Ve.image[Se]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ye+1,it,ze,$e,Ve.image[Se])}}}_(y)&&I(s.TEXTURE_CUBE_MAP),V.__version=ge.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function ke(D,y,j,le,ge,V){const _e=u.convert(j.format,j.colorSpace),J=u.convert(j.type),oe=R(j.internalFormat,_e,J,j.normalized,j.colorSpace),ye=r.get(y),Ie=r.get(j);if(Ie.__renderTarget=y,!ye.__hasExternalTextures){const Ae=Math.max(1,y.width>>V),Le=Math.max(1,y.height>>V);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?n.texImage3D(ge,V,oe,Ae,Le,y.depth,0,_e,J,null):n.texImage2D(ge,V,oe,Ae,Le,0,_e,J,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),Bt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,ge,Ie.__webglTexture,0,Ct(y)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,ge,Ie.__webglTexture,V),n.bindFramebuffer(s.FRAMEBUFFER,null)}function pe(D,y,j){if(s.bindRenderbuffer(s.RENDERBUFFER,D),y.depthBuffer){const le=y.depthTexture,ge=le&&le.isDepthTexture?le.type:null,V=L(y.stencilBuffer,ge),_e=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Bt(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(y),V,y.width,y.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(y),V,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,V,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,D)}else{const le=y.textures;for(let ge=0;ge<le.length;ge++){const V=le[ge],_e=u.convert(V.format,V.colorSpace),J=u.convert(V.type),oe=R(V.internalFormat,_e,J,V.normalized,V.colorSpace);Bt(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(y),oe,y.width,y.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(y),oe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,oe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(D,y,j){const le=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(y.depthTexture);if(ge.__renderTarget=y,(!ge.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),le){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),He(s.TEXTURE_CUBE_MAP,y.depthTexture);const ye=u.convert(y.depthTexture.format),Ie=u.convert(y.depthTexture.type);let Ae;y.depthTexture.format===Mr?Ae=s.DEPTH_COMPONENT24:y.depthTexture.format===ms&&(Ae=s.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ae,y.width,y.height,0,ye,Ie,null)}}else Q(y.depthTexture,0);const V=ge.__webglTexture,_e=Ct(y),J=le?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,oe=y.depthTexture.format===ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Mr)Bt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,J,V,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,oe,J,V,0);else if(y.depthTexture.format===ms)Bt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,J,V,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,oe,J,V,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(D){const y=r.get(D),j=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const le=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),le){const ge=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,le.removeEventListener("dispose",ge)};le.addEventListener("dispose",ge),y.__depthDisposeCallback=ge}y.__boundDepthTexture=le}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(j)for(let le=0;le<6;le++)It(y.__webglFramebuffer[le],D,le);else{const le=D.texture.mipmaps;le&&le.length>0?It(y.__webglFramebuffer[0],D,0):It(y.__webglFramebuffer,D,0)}else if(j){y.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[le]),y.__webglDepthbuffer[le]===void 0)y.__webglDepthbuffer[le]=s.createRenderbuffer(),pe(y.__webglDepthbuffer[le],D,!1);else{const ge=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer[le];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,V)}}else{const le=D.texture.mipmaps;if(le&&le.length>0?n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),pe(y.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,V)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(D,y,j){const le=r.get(D);y!==void 0&&ke(le.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&ut(D)}function Rt(D){const y=D.texture,j=r.get(D),le=r.get(y);D.addEventListener("dispose",E);const ge=D.textures,V=D.isWebGLCubeRenderTarget===!0,_e=ge.length>1;if(_e||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=y.version,c.memory.textures++),V){j.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer[J]=[];for(let oe=0;oe<y.mipmaps.length;oe++)j.__webglFramebuffer[J][oe]=s.createFramebuffer()}else j.__webglFramebuffer[J]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)j.__webglFramebuffer[J]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(_e)for(let J=0,oe=ge.length;J<oe;J++){const ye=r.get(ge[J]);ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&Bt(D)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let J=0;J<ge.length;J++){const oe=ge[J];j.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[J]);const ye=u.convert(oe.format,oe.colorSpace),Ie=u.convert(oe.type),Ae=R(oe.internalFormat,ye,Ie,oe.normalized,oe.colorSpace,D.isXRRenderTarget===!0),Le=Ct(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Ae,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,j.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),pe(j.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){n.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),He(s.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)ke(j.__webglFramebuffer[J][oe],D,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe);else ke(j.__webglFramebuffer[J],D,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);_(y)&&I(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let J=0,oe=ge.length;J<oe;J++){const ye=ge[J],Ie=r.get(ye);let Ae=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,Ie.__webglTexture),He(Ae,ye),ke(j.__webglFramebuffer,D,ye,s.COLOR_ATTACHMENT0+J,Ae,0),_(ye)&&I(Ae)}n.unbindTexture()}else{let J=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(J=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(J,le.__webglTexture),He(J,y),y.mipmaps&&y.mipmaps.length>0)for(let oe=0;oe<y.mipmaps.length;oe++)ke(j.__webglFramebuffer[oe],D,y,s.COLOR_ATTACHMENT0,J,oe);else ke(j.__webglFramebuffer,D,y,s.COLOR_ATTACHMENT0,J,0);_(y)&&I(J),n.unbindTexture()}D.depthBuffer&&ut(D)}function ct(D){const y=D.textures;for(let j=0,le=y.length;j<le;j++){const ge=y[j];if(_(ge)){const V=G(D),_e=r.get(ge).__webglTexture;n.bindTexture(V,_e),I(V),n.unbindTexture()}}}const At=[],Ht=[];function $t(D){if(D.samples>0){if(Bt(D)===!1){const y=D.textures,j=D.width,le=D.height;let ge=s.COLOR_BUFFER_BIT;const V=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=r.get(D),J=y.length>1;if(J)for(let ye=0;ye<y.length;ye++)n.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const oe=D.texture.mipmaps;oe&&oe.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ye=0;ye<y.length;ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);const Ie=r.get(y[ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ie,0)}s.blitFramebuffer(0,0,j,le,0,0,j,le,ge,s.NEAREST),p===!0&&(At.length=0,Ht.length=0,At.push(s.COLOR_ATTACHMENT0+ye),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(At.push(V),Ht.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,At))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let ye=0;ye<y.length;ye++){n.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,_e.__webglColorRenderbuffer[ye]);const Ie=r.get(y[ye]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,Ie,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&p){const y=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ct(D){return Math.min(o.maxSamples,D.samples)}function Bt(D){const y=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function X(D){const y=c.render.frame;v.get(D)!==y&&(v.set(D,y),D.update())}function en(D,y){const j=D.colorSpace,le=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==zl&&j!==$r&&(Et.getTransfer(j)===Ft?(le!==Fi||ge!==ai)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",j)),y}function St(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=de,this.resetTextureUnits=ne,this.getTextureUnits=B,this.setTextureUnits=$,this.setTexture2D=Q,this.setTexture2DArray=Z,this.setTexture3D=W,this.setTextureCube=N,this.rebindTextures=_t,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function wE(s,e){function n(r,o=$r){let u;const c=Et.getTransfer(o);if(r===ai)return s.UNSIGNED_BYTE;if(r===ed)return s.UNSIGNED_SHORT_4_4_4_4;if(r===td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===e0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===t0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Jm)return s.BYTE;if(r===Qm)return s.SHORT;if(r===to)return s.UNSIGNED_SHORT;if(r===Qf)return s.INT;if(r===Zi)return s.UNSIGNED_INT;if(r===qi)return s.FLOAT;if(r===ji)return s.HALF_FLOAT;if(r===n0)return s.ALPHA;if(r===i0)return s.RGB;if(r===Fi)return s.RGBA;if(r===Mr)return s.DEPTH_COMPONENT;if(r===ms)return s.DEPTH_STENCIL;if(r===r0)return s.RED;if(r===nd)return s.RED_INTEGER;if(r===vs)return s.RG;if(r===id)return s.RG_INTEGER;if(r===rd)return s.RGBA_INTEGER;if(r===Dl||r===Il||r===Ul||r===Fl)if(c===Ft)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Dl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Il)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ul)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Dl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Il)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ul)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gf||r===_f||r===vf||r===xf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===gf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_f)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sf||r===yf||r===Mf||r===Ef||r===wf||r===Bl||r===Tf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Sf||r===yf)return c===Ft?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Mf)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ef)return u.COMPRESSED_R11_EAC;if(r===wf)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Bl)return u.COMPRESSED_RG11_EAC;if(r===Tf)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Af||r===Rf||r===Cf||r===bf||r===Pf||r===Lf||r===Nf||r===Df||r===If||r===Uf||r===Ff||r===Of||r===Bf||r===kf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Af)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rf)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cf)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bf)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pf)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lf)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nf)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Df)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===If)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uf)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ff)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Of)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bf)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kf)return c===Ft?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zf||r===Hf||r===Vf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===zf)return c===Ft?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gf||r===Wf||r===kl||r===Xf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Gf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Wf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kl)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===no?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const TE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new d0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ji({vertexShader:TE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new De(new lo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CE extends xs{constructor(e,n){super();const r=this;let o=null,u=1,c=null,d="local-floor",p=1,m=null,v=null,x=null,g=null,M=null,A=null;const P=typeof XRWebGLBinding<"u",S=new RE,_={},I=n.getContextAttributes();let G=null,R=null;const L=[],C=[],F=new xt;let E=null,b=null;const O=new vi;O.viewport=new Qt;const Y=new vi;Y.viewport=new Qt;const K=[O,Y],ne=new Fv;let B=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=L[ee];return he===void 0&&(he=new Bc,L[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=L[ee];return he===void 0&&(he=new Bc,L[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=L[ee];return he===void 0&&(he=new Bc,L[ee]=he),he.getHandSpace()};function de(ee){const he=C.indexOf(ee.inputSource);if(he===-1)return;const Ce=L[he];Ce!==void 0&&(Ce.update(ee.inputSource,ee.frame,m||c),Ce.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ie(){o.removeEventListener("select",de),o.removeEventListener("selectstart",de),o.removeEventListener("selectend",de),o.removeEventListener("squeeze",de),o.removeEventListener("squeezestart",de),o.removeEventListener("squeezeend",de),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",Q);for(let ee=0;ee<L.length;ee++){const he=C[ee];he!==null&&(C[ee]=null,L[ee].disconnect(he))}B=null,$=null,S.reset();for(const ee in _)delete _[ee];if(e.setRenderTarget(G),M=null,g=null,x=null,o=null,R=null,Xe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),b!==null){const ee=b.camera;ee.fov=b.fov,ee.zoom=b.zoom,ee.updateProjectionMatrix(),b=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){u=ee,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(ee){m=ee},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&P&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(G=e.getRenderTarget(),o.addEventListener("select",de),o.addEventListener("selectstart",de),o.addEventListener("selectend",de),o.addEventListener("squeeze",de),o.addEventListener("squeezestart",de),o.addEventListener("squeezeend",de),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",Q),I.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,et=null,ke=null;I.depth&&(ke=I.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ce=I.stencil?ms:Mr,et=I.stencil?no:Zi);const pe={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:u};x=this.getBinding(),g=x.createProjectionLayer(pe),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Oi(g.textureWidth,g.textureHeight,{format:Fi,type:ai,depthTexture:new ro(g.textureWidth,g.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Ce={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(o,n,Ce),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new Oi(M.framebufferWidth,M.framebufferHeight,{format:Fi,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await o.requestReferenceSpace(d),Xe.setContext(o),Xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Q(ee){for(let he=0;he<ee.removed.length;he++){const Ce=ee.removed[he],et=C.indexOf(Ce);et>=0&&(C[et]=null,L[et].disconnect(Ce))}for(let he=0;he<ee.added.length;he++){const Ce=ee.added[he];let et=C.indexOf(Ce);if(et===-1){for(let pe=0;pe<L.length;pe++)if(pe>=C.length){C.push(Ce),et=pe;break}else if(C[pe]===null){C[pe]=Ce,et=pe;break}if(et===-1)break}const ke=L[et];ke&&ke.connect(Ce)}}const Z=new te,W=new te;function N(ee,he,Ce){Z.setFromMatrixPosition(he.matrixWorld),W.setFromMatrixPosition(Ce.matrixWorld);const et=Z.distanceTo(W),ke=he.projectionMatrix.elements,pe=Ce.projectionMatrix.elements,It=ke[14]/(ke[10]-1),ut=ke[14]/(ke[10]+1),_t=(ke[9]+1)/ke[5],Rt=(ke[9]-1)/ke[5],ct=(ke[8]-1)/ke[0],At=(pe[8]+1)/pe[0],Ht=It*ct,$t=It*At,Ct=et/(-ct+At),Bt=Ct*-ct;if(he.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Bt),ee.translateZ(Ct),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ke[10]===-1)ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const X=It+Ct,en=ut+Ct,St=Ht-Bt,D=$t+(et-Bt),y=_t*ut/en*X,j=Rt*ut/en*X;ee.projectionMatrix.makePerspective(St,D,y,j,X,en),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ue(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let he=ee.near,Ce=ee.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(Ce=S.depthFar)),ne.near=Y.near=O.near=he,ne.far=Y.far=O.far=Ce,(B!==ne.near||$!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),B=ne.near,$=ne.far),ne.layers.mask=ee.layers.mask|6,O.layers.mask=ne.layers.mask&-5,Y.layers.mask=ne.layers.mask&-3;const et=ee.parent,ke=ne.cameras;ue(ne,et);for(let pe=0;pe<ke.length;pe++)ue(ke[pe],et);ke.length===2?N(ne,O,Y):ne.projectionMatrix.copy(O.projectionMatrix),b===null&&ee.isPerspectiveCamera&&(b={camera:ee,fov:ee.fov,zoom:ee.zoom}),Te(ee,ne,et)};function Te(ee,he,Ce){Ce===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(Ce.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=qf*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(ee){p=ee,g!==null&&(g.fixedFoveation=ee),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ee)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ne)},this.getCameraTexture=function(ee){return _[ee]};let Ke=null;function He(ee,he){if(v=he.getViewerPose(m||c),A=he,v!==null){const Ce=v.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let et=!1;Ce.length!==ne.cameras.length&&(ne.cameras.length=0,et=!0);for(let ut=0;ut<Ce.length;ut++){const _t=Ce[ut];let Rt=null;if(M!==null)Rt=M.getViewport(_t);else{const At=x.getViewSubImage(g,_t);Rt=At.viewport,ut===0&&(e.setRenderTargetTextures(R,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(R))}let ct=K[ut];ct===void 0&&(ct=new vi,ct.layers.enable(ut),ct.viewport=new Qt,K[ut]=ct),ct.matrix.fromArray(_t.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(_t.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ut===0&&(ne.matrix.copy(ct.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),et===!0&&ne.cameras.push(ct)}const ke=o.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&P){x=r.getBinding();const ut=x.getDepthInformation(Ce[0]);ut&&ut.isValid&&ut.texture&&S.init(ut,o.renderState)}if(ke&&ke.includes("camera-access")&&P){e.state.unbindTexture(),x=r.getBinding();for(let ut=0;ut<Ce.length;ut++){const _t=Ce[ut].camera;if(_t){let Rt=_[_t];Rt||(Rt=new d0,_[_t]=Rt);const ct=x.getCameraImage(_t);Rt.sourceTexture=ct}}}}for(let Ce=0;Ce<L.length;Ce++){const et=C[Ce],ke=L[Ce];et!==null&&ke!==void 0&&ke.update(et,he,m||c)}Ke&&Ke(ee,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),A=null}const Xe=new m0;Xe.setAnimationLoop(He),this.setAnimationLoop=function(ee){Ke=ee},this.dispose=function(){}}}const bE=new sn,M0=new ft;M0.set(-1,0,0,0,1,0,0,0,1);function PE(s,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,h0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function o(S,_,I,G,R){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?u(S,_):_.isMeshLambertMaterial?(u(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(u(S,_),x(S,_)):_.isMeshPhongMaterial?(u(S,_),v(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(u(S,_),g(S,_),_.isMeshPhysicalMaterial&&M(S,_,R)):_.isMeshMatcapMaterial?(u(S,_),A(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),P(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(c(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?p(S,_,I,G):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Zn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Zn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const I=e.get(_),G=I.envMap,R=I.envMapRotation;G&&(S.envMap.value=G,S.envMapRotation.value.setFromMatrix4(bE.makeRotationFromEuler(R)).transpose(),G.isCubeTexture&&G.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(M0),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function c(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,I,G){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*I,S.scale.value=G*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function g(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,I){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Zn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.retroreflectivity>0&&(S.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,_){_.matcap&&(S.matcap.value=_.matcap)}function P(S,_){const I=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function LE(s,e,n,r){let o={},u={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,L){const C=L.program;r.uniformBlockBinding(R,C)}function m(R,L){let C=o[R.id];C===void 0&&(S(R),C=v(R),o[R.id]=C,R.addEventListener("dispose",I));const F=L.program;r.updateUBOMapping(R,F);const E=e.render.frame;u[R.id]!==E&&(g(R),u[R.id]=E)}function v(R){const L=x();R.__bindingPointIndex=L;const C=s.createBuffer(),F=R.__size,E=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,F,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function x(){for(let R=0;R<d;R++)if(c.indexOf(R)===-1)return c.push(R),R;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const L=o[R.id],C=R.uniforms,F=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let E=0,b=C.length;E<b;E++){const O=C[E];if(Array.isArray(O))for(let Y=0,K=O.length;Y<K;Y++)M(O[Y],E,Y,F);else M(O,E,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,L,C,F){if(P(R,L,C,F)===!0){const E=R.__offset,b=R.value;if(Array.isArray(b)){let O=0;for(let Y=0;Y<b.length;Y++){const K=b[Y],ne=_(K);A(K,R.__data,O),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(O+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(b,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,R.__data)}}function A(R,L,C){typeof R=="number"||typeof R=="boolean"?L[0]=R:R.isMatrix3?(L[0]=R.elements[0],L[1]=R.elements[1],L[2]=R.elements[2],L[3]=0,L[4]=R.elements[3],L[5]=R.elements[4],L[6]=R.elements[5],L[7]=0,L[8]=R.elements[6],L[9]=R.elements[7],L[10]=R.elements[8],L[11]=0):ArrayBuffer.isView(R)?L.set(new R.constructor(R.buffer,R.byteOffset,L.length)):R.toArray(L,C)}function P(R,L,C,F){const E=R.value,b=L+"_"+C;if(F[b]===void 0)return typeof E=="number"||typeof E=="boolean"?F[b]=E:ArrayBuffer.isView(E)?F[b]=E.slice():F[b]=E.clone(),!0;{const O=F[b];if(typeof E=="number"||typeof E=="boolean"){if(O!==E)return F[b]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(O.equals(E)===!1)return O.copy(E),!0}}return!1}function S(R){const L=R.uniforms;let C=0;const F=16;for(let b=0,O=L.length;b<O;b++){const Y=Array.isArray(L[b])?L[b]:[L[b]];for(let K=0,ne=Y.length;K<ne;K++){const B=Y[K],$=Array.isArray(B.value)?B.value:[B.value];for(let de=0,ie=$.length;de<ie;de++){const Q=$[de],Z=_(Q),W=C%F,N=W%Z.boundary,ue=W+N;C+=N,ue!==0&&F-ue<Z.storage&&(C+=F-ue),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=C,C+=Z.storage}}}const E=C%F;return E>0&&(C+=F-E),R.__size=C,R.__cache={},this}function _(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(L.boundary=16,L.storage=R.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",R),L}function I(R){const L=R.target;L.removeEventListener("dispose",I);const C=c.indexOf(L.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete u[L.id]}function G(){for(const R in o)s.deleteBuffer(o[R]);c=[],o={},u={}}return{bind:p,update:m,dispose:G}}const NE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function DE(){return Xi===null&&(Xi=new Sv(NE,16,16,vs,ji),Xi.name="DFG_LUT",Xi.minFilter=In,Xi.magFilter=In,Xi.wrapS=vr,Xi.wrapT=vr,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class IE{constructor(e={}){const{canvas:n=K_(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ai}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=c;const P=M,S=new Set([rd,id,nd]),_=new Set([ai,Zi,to,no,ed,td]),I=new Uint32Array(4),G=new Int32Array(4),R=new te;let L=null,C=null;const F=[],E=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let Y=!1,K=null,ne=null,B=null,$=null;this._outputColorSpace=_i;let de=0,ie=0,Q=null,Z=-1,W=null;const N=new Qt,ue=new Qt;let Te=null;const Ke=new Tt(0);let He=0,Xe=n.width,ee=n.height,he=1,Ce=null,et=null;const ke=new Qt(0,0,Xe,ee),pe=new Qt(0,0,Xe,ee);let It=!1;const ut=new ud;let _t=!1,Rt=!1;const ct=new sn,At=new te,Ht=new Qt,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Bt(){return Q===null?he:1}let X=r;function en(T,z){return n.getContext(T,z)}let St,D,y,j,le,ge,V,_e,J,oe,ye,Ie,Ae,Le,ze,$e,it,k,Pe,ve,Me,Re,Se;try{const T={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jf}`),n.addEventListener("webglcontextlost",pt,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",Yt,!1),X===null){const z="webgl2";if(X=en(z,T),X===null)throw en(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(T){throw n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",Yt,!1),Nt("WebGLRenderer: "+T.message),T}function Ye(){St=new Dy(X),St.init(),Me=new wE(X,St),D=new Ey(X,St,e,Me),y=new ME(X,St),D.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),ne=X.createFramebuffer(),B=X.createFramebuffer(),$=X.createFramebuffer(),j=new Fy(X),le=new lE,ge=new EE(X,St,y,le,D,Me,j),V=new Ny(O),_e=new Bv(X),Re=new yy(X,_e),J=new Iy(X,_e,j,Re),oe=new By(X,J,_e,Re,j),k=new Oy(X,D,ge),ze=new wy(le),ye=new oE(O,V,St,D,Re,ze),Ie=new PE(O,le),Ae=new cE,Le=new gE(St),it=new Sy(O,V,y,oe,A,p),$e=new yE(O,oe,D),Se=new LE(X,j,D,y),Pe=new My(X,St,j),ve=new Uy(X,St,j),j.programs=ye.programs,O.capabilities=D,O.extensions=St,O.properties=le,O.renderLists=Ae,O.shadowMap=$e,O.state=y,O.info=j}P!==ai&&(b=new zy(P,n.width,n.height,d,o,u));const Ve=new CE(O,X);this.xr=Ve,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=St.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=St.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(T){T!==void 0&&(he=T,this.setSize(Xe,ee,!1))},this.getSize=function(T){return T.set(Xe,ee)},this.setSize=function(T,z,fe=!0){if(Ve.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=T,ee=z,n.width=Math.floor(T*he),n.height=Math.floor(z*he),fe===!0&&(n.style.width=T+"px",n.style.height=z+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(Xe*he,ee*he).floor()},this.setDrawingBufferSize=function(T,z,fe){Xe=T,ee=z,he=fe,n.width=Math.floor(T*fe),n.height=Math.floor(z*fe),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(P===ai){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(ke)},this.setViewport=function(T,z,fe,se){T.isVector4?ke.set(T.x,T.y,T.z,T.w):ke.set(T,z,fe,se),y.viewport(N.copy(ke).multiplyScalar(he).round())},this.getScissor=function(T){return T.copy(pe)},this.setScissor=function(T,z,fe,se){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,z,fe,se),y.scissor(ue.copy(pe).multiplyScalar(he).round())},this.getScissorTest=function(){return It},this.setScissorTest=function(T){y.setScissorTest(It=T)},this.setOpaqueSort=function(T){Ce=T},this.setTransparentSort=function(T){et=T},this.getClearColor=function(T){return T.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,fe=!0){let se=0;if(T){let re=!1;if(Q!==null){const Oe=Q.texture.format;re=S.has(Oe)}if(re){const Oe=Q.texture.type,Ue=_.has(Oe),Fe=it.getClearColor(),je=it.getClearAlpha(),tt=Fe.r,lt=Fe.g,ht=Fe.b;Ue?(I[0]=tt,I[1]=lt,I[2]=ht,I[3]=je,X.clearBufferuiv(X.COLOR,0,I)):(G[0]=tt,G[1]=lt,G[2]=ht,G[3]=je,X.clearBufferiv(X.COLOR,0,G))}else se|=X.COLOR_BUFFER_BIT}z&&(se|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(se|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&X.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),K=T},this.dispose=function(){n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",Yt,!1),it.dispose(),Ae.dispose(),Le.dispose(),le.dispose(),V.dispose(),oe.dispose(),Re.dispose(),Se.dispose(),ye.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",xi),Ve.removeEventListener("sessionend",Bi),an.stop()};function pt(T){T.preventDefault(),jp("WebGLRenderer: Context Lost."),Y=!0}function dt(){jp("WebGLRenderer: Context Restored."),Y=!1;const T=j.autoReset,z=$e.enabled,fe=$e.autoUpdate,se=$e.needsUpdate,re=$e.type;Ye(),j.autoReset=T,$e.enabled=z,$e.autoUpdate=fe,$e.needsUpdate=se,$e.type=re}function Yt(T){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function cn(T){const z=T.target;z.removeEventListener("dispose",cn),zn(z)}function zn(T){li(T),le.remove(T)}function li(T){const z=le.get(T).programs;z!==void 0&&(z.forEach(function(fe){ye.releaseProgram(fe)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,fe,se,re,Oe){z===null&&(z=$t);const Ue=re.isMesh&&re.matrixWorld.determinantAffine()<0,Fe=Vt(T,z,fe,se,re);y.setMaterial(se,Ue);let je=fe.index,tt=1;if(se.wireframe===!0){if(je=J.getWireframeAttribute(fe),je===void 0)return;tt=2}const lt=fe.drawRange,ht=fe.attributes.position;let qe=lt.start*tt,yt=(lt.start+lt.count)*tt;Oe!==null&&(qe=Math.max(qe,Oe.start*tt),yt=Math.min(yt,(Oe.start+Oe.count)*tt)),je!==null?(qe=Math.max(qe,0),yt=Math.min(yt,je.count)):ht!=null&&(qe=Math.max(qe,0),yt=Math.min(yt,ht.count));const tn=yt-qe;if(tn<0||tn===1/0)return;Re.setup(re,se,Fe,fe,je);let kt,Dt=Pe;if(je!==null&&(kt=_e.get(je),Dt=ve,Dt.setIndex(kt)),re.isMesh)se.wireframe===!0?(y.setLineWidth(se.wireframeLinewidth*Bt()),Dt.setMode(X.LINES)):Dt.setMode(X.TRIANGLES);else if(re.isLine){let hn=se.linewidth;hn===void 0&&(hn=1),y.setLineWidth(hn*Bt()),re.isLineSegments?Dt.setMode(X.LINES):re.isLineLoop?Dt.setMode(X.LINE_LOOP):Dt.setMode(X.LINE_STRIP)}else re.isPoints?Dt.setMode(X.POINTS):re.isSprite&&Dt.setMode(X.TRIANGLES);if(re.isBatchedMesh)if(St.get("WEBGL_multi_draw"))Dt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const hn=re._multiDrawStarts,Ge=re._multiDrawCounts,on=re._multiDrawCount,Mt=je?_e.get(je).bytesPerElement:1,An=le.get(se).currentProgram.getUniforms();for(let mt=0;mt<on;mt++)An.setValue(X,"_gl_DrawID",mt),Dt.render(hn[mt]/Mt,Ge[mt])}else if(re.isInstancedMesh)Dt.renderInstances(qe,tn,re.count);else if(fe.isInstancedBufferGeometry){const hn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ge=Math.min(fe.instanceCount,hn);Dt.renderInstances(qe,tn,Ge)}else Dt.render(qe,tn)};function jn(T,z,fe,se){K!==null&&T.isNodeMaterial&&K.setObject(se,T),_t===!0&&ze.setState(T,fe,!1),T.transparent===!0&&T.side===gr&&T.forceSinglePass===!1?(T.side=Zn,T.needsUpdate=!0,ki(T,z,se),T.side=gs,T.needsUpdate=!0,ki(T,z,se),T.side=gr):ki(T,z,se)}this.compile=function(T,z,fe=null){fe===null&&(fe=T),K!==null&&K.renderStart(T,z,fe),C=Le.get(fe),C.init(z),E.push(C),fe.traverseVisible(function(re){re.isLight&&re.layers.test(z.layers)&&(C.pushLight(re),re.castShadow&&C.pushShadow(re))}),T!==fe&&T.traverseVisible(function(re){re.isLight&&re.layers.test(z.layers)&&(C.pushLight(re),re.castShadow&&C.pushShadow(re))}),C.setupLights(),K!==null&&K.updateLights(C.state.lightsArray),Rt=this.localClippingEnabled,_t=ze.init(this.clippingPlanes,Rt),_t===!0&&ze.setGlobalState(this.clippingPlanes,z),K!==null&&$e.render(C.state.shadowsArray,fe,z);const se=new Set;return T.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Oe=re.material;if(Oe)if(Array.isArray(Oe))for(let Ue=0;Ue<Oe.length;Ue++){const Fe=Oe[Ue];jn(Fe,fe,z,re),se.add(Fe)}else jn(Oe,fe,z,re),se.add(Oe)}),C=E.pop(),K!==null&&K.renderEnd(),se},this.compileAsync=function(T,z,fe=null){const se=this.compile(T,z,fe);return new Promise(re=>{function Oe(){if(se.forEach(function(Ue){const je=le.get(Ue).currentProgram;(je===void 0||je.isReady())&&se.delete(Ue)}),se.size===0){re(T);return}setTimeout(Oe,10)}St.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Jn=null;function Qi(T){Jn&&Jn(T)}function xi(){an.stop()}function Bi(){an.start()}const an=new m0;an.setAnimationLoop(Qi),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(T){Jn=T,Ve.setAnimationLoop(T),T===null?an.stop():an.start()},Ve.addEventListener("sessionstart",xi),Ve.addEventListener("sessionend",Bi),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;K!==null&&K.renderStart(T,z);const fe=Ve.enabled===!0&&Ve.isPresenting===!0,se=b!==null&&(Q===null||fe)&&b.begin(O,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(z),z=Ve.getCamera()),T.isScene===!0&&T.onBeforeRender(O,T,z,Q),C=Le.get(T,E.length),C.init(z),C.state.textureUnits=ge.getTextureUnits(),E.push(C),ct.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ut.setFromProjectionMatrix(ct,Ki,z.reversedDepth),Rt=this.localClippingEnabled,_t=ze.init(this.clippingPlanes,Rt),L=Ae.get(T,F.length),L.init(),F.push(L),Ve.enabled===!0&&Ve.isPresenting===!0){const Ue=O.xr.getDepthSensingMesh();Ue!==null&&Qn(Ue,z,-1/0,O.sortObjects)}Qn(T,z,0,O.sortObjects),L.finish(),K!==null&&K.updateLights(C.state.lightsArray),O.sortObjects===!0&&L.sort(Ce,et),Ct=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,Ct&&it.addToRenderList(L,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&ze.beginShadows();const re=C.state.shadowsArray;if($e.render(re,T,z),_t===!0&&ze.endShadows(),(se&&b.hasRenderPass())===!1){const Ue=L.opaque,Fe=L.transmissive;if(C.setupLights(),z.isArrayCamera){const je=z.cameras;if(Fe.length>0)for(let tt=0,lt=je.length;tt<lt;tt++){const ht=je[tt];Hn(Ue,Fe,T,ht)}Ct&&it.render(T);for(let tt=0,lt=je.length;tt<lt;tt++){const ht=je[tt];Si(L,T,ht,ht.viewport)}}else Fe.length>0&&Hn(Ue,Fe,T,z),Ct&&it.render(T),Si(L,T,z)}Q!==null&&ie===0&&(ge.updateMultisampleRenderTarget(Q),ge.updateRenderTargetMipmap(Q)),se&&b.end(O),T.isScene===!0&&T.onAfterRender(O,T,z),Re.resetDefaultState(),Z=-1,W=null,E.pop(),E.length>0?(C=E[E.length-1],ge.setTextureUnits(C.state.textureUnits),_t===!0&&ze.setGlobalState(O.clippingPlanes,C.state.camera)):C=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,K!==null&&K.renderEnd()};function Qn(T,z,fe,se){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)fe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLightProbeGrid)C.pushLightProbeGrid(T);else if(T.isLight)C.pushLight(T),T.castShadow&&C.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(ut)){se&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ct);const Ue=oe.update(T),Fe=T.material;Fe.visible&&L.push(T,Ue,Fe,fe,Ht.z,null,z)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(ut))){const Ue=oe.update(T),Fe=T.material;if(se&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ht.copy(Ue.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(ct)),Array.isArray(Fe)){const je=Ue.groups;for(let tt=0,lt=je.length;tt<lt;tt++){const ht=je[tt],qe=Fe[ht.materialIndex];qe&&qe.visible&&L.push(T,Ue,qe,fe,Ht.z,ht,z)}}else Fe.visible&&L.push(T,Ue,Fe,fe,Ht.z,null,z)}}const Oe=T.children;for(let Ue=0,Fe=Oe.length;Ue<Fe;Ue++)Qn(Oe[Ue],z,fe,se)}function Si(T,z,fe,se){const{opaque:re,transmissive:Oe,transparent:Ue}=T;C.setupLightsView(fe),_t===!0&&ze.setGlobalState(O.clippingPlanes,fe),se&&y.viewport(N.copy(se)),re.length>0&&Un(re,z,fe),Oe.length>0&&Un(Oe,z,fe),Ue.length>0&&Un(Ue,z,fe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Hn(T,z,fe,se){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[se.id]===void 0){const qe=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[se.id]=new Oi(1,1,{generateMipmaps:!0,type:qe?ji:ai,minFilter:ps,samples:Math.max(4,D.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Oe=C.state.transmissionRenderTarget[se.id],Ue=se.viewport||N;Oe.setSize(Ue.z*O.transmissionResolutionScale,Ue.w*O.transmissionResolutionScale);const Fe=O.getRenderTarget(),je=O.getActiveCubeFace(),tt=O.getActiveMipmapLevel();O.setRenderTarget(Oe),O.getClearColor(Ke),He=O.getClearAlpha(),He<1&&O.setClearColor(16777215,.5),O.clear(),Ct&&it.render(fe);const lt=O.toneMapping;O.toneMapping=$i;const ht=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),C.setupLightsView(se),_t===!0&&ze.setGlobalState(O.clippingPlanes,se),Un(T,fe,se),ge.updateMultisampleRenderTarget(Oe),ge.updateRenderTargetMipmap(Oe),St.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let yt=0,tn=z.length;yt<tn;yt++){const kt=z[yt],{object:Dt,geometry:hn,material:Ge,group:on}=kt;if(Ge.side===gr&&Dt.layers.test(se.layers)){const Mt=Ge.side;Ge.side=Zn,Ge.needsUpdate=!0,Er(Dt,fe,se,hn,Ge,on),Ge.side=Mt,Ge.needsUpdate=!0,qe=!0}}qe===!0&&(ge.updateMultisampleRenderTarget(Oe),ge.updateRenderTargetMipmap(Oe))}O.setRenderTarget(Fe,je,tt),O.setClearColor(Ke,He),ht!==void 0&&(se.viewport=ht),O.toneMapping=lt}function Un(T,z,fe){const se=z.isScene===!0?z.overrideMaterial:null;for(let re=0,Oe=T.length;re<Oe;re++){const Ue=T[re],{object:Fe,geometry:je,group:tt}=Ue;let lt=Ue.material;lt.allowOverride===!0&&se!==null&&(lt=se),Fe.layers.test(fe.layers)&&Er(Fe,z,fe,je,lt,tt)}}function Er(T,z,fe,se,re,Oe){K!==null&&re.isNodeMaterial&&K.setObject(T,re),T.onBeforeRender(O,z,fe,se,re,Oe),T.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),re.onBeforeRender(O,z,fe,se,T,Oe),re.transparent===!0&&re.side===gr&&re.forceSinglePass===!1?(re.side=Zn,re.needsUpdate=!0,O.renderBufferDirect(fe,z,se,re,T,Oe),re.side=gs,re.needsUpdate=!0,O.renderBufferDirect(fe,z,se,re,T,Oe),re.side=gr):O.renderBufferDirect(fe,z,se,re,T,Oe),T.onAfterRender(O,z,fe,se,re,Oe)}function ki(T,z,fe){z.isScene!==!0&&(z=$t);const se=le.get(T),re=C.state.lights,Oe=C.state.shadowsArray,Ue=re.state.version,Fe=ye.getParameters(T,re.state,Oe,z,fe,C.state.lightProbeGridArray),je=ye.getProgramCacheKey(Fe);let tt=se.programs;se.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,se.fog=z.fog;const lt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;se.envMap=V.get(T.envMap||se.environment,lt),se.envMapRotation=se.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,tt===void 0&&(T.addEventListener("dispose",cn),tt=new Map,se.programs=tt);let ht=tt.get(je);if(ht!==void 0){if(se.currentProgram===ht&&se.lightsStateVersion===Ue)return wr(T,Fe),ht}else Fe.uniforms=ye.getUniforms(T),K!==null&&T.isNodeMaterial&&K.build(T,fe,Fe),T.onBeforeCompile(Fe,O),ht=ye.acquireProgram(Fe,je),tt.set(je,ht),se.uniforms=Fe.uniforms;const qe=se.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qe.clippingPlanes=ze.uniform),wr(T,Fe),se.needsLights=yi(T),se.lightsStateVersion=Ue,se.needsLights&&(qe.ambientLightColor.value=re.state.ambient,qe.lightProbe.value=re.state.probe,qe.sunLights.value=re.state.sun,qe.sunLightShadows.value=re.state.sunShadow,qe.directionalLights.value=re.state.directional,qe.directionalLightShadows.value=re.state.directionalShadow,qe.spotLights.value=re.state.spot,qe.spotLightShadows.value=re.state.spotShadow,qe.rectAreaLights.value=re.state.rectArea,qe.ltc_1.value=re.state.rectAreaLTC1,qe.ltc_2.value=re.state.rectAreaLTC2,qe.pointLights.value=re.state.point,qe.pointLightShadows.value=re.state.pointShadow,qe.hemisphereLights.value=re.state.hemi,qe.sunShadowMatrix.value=re.state.sunShadowMatrix,qe.sunShadowCascade.value=re.state.sunShadowCascade,qe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,qe.spotLightMatrix.value=re.state.spotLightMatrix,qe.spotLightMap.value=re.state.spotLightMap,qe.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=C.state.lightProbeGridArray.length>0,se.currentProgram=ht,se.uniformsList=null,ht}function er(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Ol.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function wr(T,z){const fe=le.get(T);fe.outputColorSpace=z.outputColorSpace,fe.batching=z.batching,fe.batchingColor=z.batchingColor,fe.instancing=z.instancing,fe.instancingColor=z.instancingColor,fe.instancingMorph=z.instancingMorph,fe.skinning=z.skinning,fe.morphTargets=z.morphTargets,fe.morphNormals=z.morphNormals,fe.morphColors=z.morphColors,fe.morphTargetsCount=z.morphTargetsCount,fe.numClippingPlanes=z.numClippingPlanes,fe.numIntersection=z.numClipIntersection,fe.vertexAlphas=z.vertexAlphas,fe.vertexTangents=z.vertexTangents,fe.toneMapping=z.toneMapping}function ca(T,z){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;R.setFromMatrixPosition(z.matrixWorld);for(let fe=0,se=T.length;fe<se;fe++){const re=T[fe];if(re.texture!==null&&re.boundingBox.containsPoint(R))return re}return null}function Vt(T,z,fe,se,re){z.isScene!==!0&&(z=$t),ge.resetTextureUnits();const Oe=z.fog,Ue=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?z.environment:null,Fe=Q===null?O.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Et.workingColorSpace,je=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,tt=V.get(se.envMap||Ue,je),lt=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ht=!!fe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),qe=!!fe.morphAttributes.position,yt=!!fe.morphAttributes.normal,tn=!!fe.morphAttributes.color;let kt=$i;se.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(kt=O.toneMapping);const Dt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,hn=Dt!==void 0?Dt.length:0,Ge=le.get(se),on=C.state.lights;if(_t===!0&&(Rt===!0||T!==W)){const Ut=T===W&&se.id===Z;ze.setState(se,T,Ut)}let Mt=!1;se.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==on.state.version||Ge.outputColorSpace!==Fe||re.isBatchedMesh&&Ge.batching===!1||!re.isBatchedMesh&&Ge.batching===!0||re.isBatchedMesh&&Ge.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&Ge.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&Ge.instancing===!1||!re.isInstancedMesh&&Ge.instancing===!0||re.isSkinnedMesh&&Ge.skinning===!1||!re.isSkinnedMesh&&Ge.skinning===!0||re.isInstancedMesh&&Ge.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ge.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ge.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ge.instancingMorph===!1&&re.morphTexture!==null||Ge.envMap!==tt||se.fog===!0&&Ge.fog!==Oe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ze.numPlanes||Ge.numIntersection!==ze.numIntersection)||Ge.vertexAlphas!==lt||Ge.vertexTangents!==ht||Ge.morphTargets!==qe||Ge.morphNormals!==yt||Ge.morphColors!==tn||Ge.toneMapping!==kt||Ge.morphTargetsCount!==hn||!!Ge.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Ge.__version=se.version);let An=Ge.currentProgram;Mt===!0&&(An=ki(se,z,re),K&&se.isNodeMaterial&&K.onUpdateProgram(se,An,Ge));let mt=!1,Mi=!1,nr=!1;const Pt=An.getUniforms(),qt=Ge.uniforms;if(y.useProgram(An.program)&&(mt=!0,Mi=!0,nr=!0),se.id!==Z&&(Z=se.id,Mi=!0),Ge.needsLights){const Ut=ca(C.state.lightProbeGridArray,re);Ge.lightProbeGrid!==Ut&&(Ge.lightProbeGrid=Ut,Mi=!0)}if(mt||W!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Pt.setValue(X,"projectionMatrix",T.projectionMatrix),Pt.setValue(X,"viewMatrix",T.matrixWorldInverse);const ui=Pt.map.cameraPosition;ui!==void 0&&ui.setValue(X,At.setFromMatrixPosition(T.matrixWorld)),D.logarithmicDepthBuffer&&Pt.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Pt.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),W!==T&&(W=T,Mi=!0,nr=!0)}if(Ge.needsLights&&(on.state.sunShadowMap.length>0&&Pt.setValue(X,"sunShadowMap",on.state.sunShadowMap,ge),on.state.directionalShadowMap.length>0&&Pt.setValue(X,"directionalShadowMap",on.state.directionalShadowMap,ge),on.state.spotShadowMap.length>0&&Pt.setValue(X,"spotShadowMap",on.state.spotShadowMap,ge),on.state.pointShadowMap.length>0&&Pt.setValue(X,"pointShadowMap",on.state.pointShadowMap,ge)),re.isSkinnedMesh){Pt.setOptional(X,re,"bindMatrix"),Pt.setOptional(X,re,"bindMatrixInverse");const Ut=re.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Pt.setValue(X,"boneTexture",Ut.boneTexture,ge))}re.isBatchedMesh&&(Pt.setOptional(X,re,"batchingTexture"),Pt.setValue(X,"batchingTexture",re._matricesTexture,ge),Pt.setOptional(X,re,"batchingIdTexture"),Pt.setValue(X,"batchingIdTexture",re._indirectTexture,ge),Pt.setOptional(X,re,"batchingColorTexture"),re._colorsTexture!==null&&Pt.setValue(X,"batchingColorTexture",re._colorsTexture,ge));const Ei=fe.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&k.update(re,fe,An),(Mi||Ge.receiveShadow!==re.receiveShadow)&&(Ge.receiveShadow=re.receiveShadow,Pt.setValue(X,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&z.environment!==null&&(qt.envMapIntensity.value=z.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=DE()),Mi){if(Pt.setValue(X,"toneMappingExposure",O.toneMappingExposure),Ge.needsLights&&Ss(qt,nr),Oe&&se.fog===!0&&Ie.refreshFogUniforms(qt,Oe),Ie.refreshMaterialUniforms(qt,se,he,ee,C.state.transmissionRenderTarget[T.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ut=Ge.lightProbeGrid;qt.probesSH.value=Ut.texture,qt.probesMin.value.copy(Ut.boundingBox.min),qt.probesMax.value.copy(Ut.boundingBox.max),qt.probesResolution.value.copy(Ut.resolution)}Ol.upload(X,er(Ge),qt,ge)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ol.upload(X,er(Ge),qt,ge),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Pt.setValue(X,"center",re.center),Pt.setValue(X,"modelViewMatrix",re.modelViewMatrix),Pt.setValue(X,"normalMatrix",re.normalMatrix),Pt.setValue(X,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const Ut=se.uniformsGroups;for(let ui=0,wi=Ut.length;ui<wi;ui++){const Ti=Ut[ui];Se.update(Ti,An),Se.bind(Ti,An)}}return An}function Ss(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.sunLights.needsUpdate=z,T.sunLightShadows.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function yi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return de},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,z,fe){const se=le.get(T);se.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),le.get(T.texture).__webglTexture=z,le.get(T.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:fe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const fe=le.get(T);fe.__webglFramebuffer=z,fe.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,fe=0){Q=T,de=z,ie=fe;let se=null,re=!1,Oe=!1;if(T){const Fe=le.get(T);if(Fe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(X.FRAMEBUFFER,Fe.__webglFramebuffer),N.copy(T.viewport),ue.copy(T.scissor),Te=T.scissorTest,y.viewport(N),y.scissor(ue),y.setScissorTest(Te),Z=-1;return}else if(Fe.__webglFramebuffer===void 0)ge.setupRenderTarget(T);else if(Fe.__hasExternalTextures)ge.rebindTextures(T,le.get(T.texture).__webglTexture,le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const lt=T.depthTexture;if(Fe.__boundDepthTexture!==lt){if(lt!==null&&le.has(lt)&&(T.width!==lt.image.width||T.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(T)}}const je=T.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Oe=!0);const tt=le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(tt[z])?se=tt[z][fe]:se=tt[z],re=!0):T.samples>0&&ge.useMultisampledRTT(T)===!1?se=le.get(T).__webglMultisampledFramebuffer:Array.isArray(tt)?se=tt[fe]:se=tt,N.copy(T.viewport),ue.copy(T.scissor),Te=T.scissorTest}else N.copy(ke).multiplyScalar(he).floor(),ue.copy(pe).multiplyScalar(he).floor(),Te=It;if(fe!==0&&(se=ne),y.bindFramebuffer(X.FRAMEBUFFER,se)&&y.drawBuffers(T,se),y.viewport(N),y.scissor(ue),y.setScissorTest(Te),re){const Fe=le.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+z,Fe.__webglTexture,fe)}else if(Oe){const Fe=z;for(let je=0;je<T.textures.length;je++){const tt=le.get(T.textures[je]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+je,tt.__webglTexture,fe,Fe)}}else if(T!==null&&fe!==0){const Fe=le.get(T.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Fe.__webglTexture,fe)}Z=-1};function tr(T){const z=le.get(T);return(z.__readFormat!==T.format||z.__readType!==T.type)&&(z.__readFormat=T.format,z.__readType=T.type,z.__formatReadable=D.textureFormatReadable(T.format),z.__typeReadable=D.textureTypeReadable(T.type)),z}this.readRenderTargetPixels=function(T,z,fe,se,re,Oe,Ue,Fe=0){if(!(T&&T.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(je=je[Ue]),je){y.bindFramebuffer(X.FRAMEBUFFER,je);try{const tt=T.textures[Fe],lt=tt.format,ht=tt.type;T.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Fe);const qe=tr(tt);if(qe.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-se&&fe>=0&&fe<=T.height-re&&X.readPixels(z,fe,se,re,Me.convert(lt),Me.convert(ht),Oe)}finally{const tt=Q!==null?le.get(Q).__webglFramebuffer:null;y.bindFramebuffer(X.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(T,z,fe,se,re,Oe,Ue,Fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(je=je[Ue]),je)if(z>=0&&z<=T.width-se&&fe>=0&&fe<=T.height-re){y.bindFramebuffer(X.FRAMEBUFFER,je);const tt=T.textures[Fe],lt=tt.format,ht=tt.type;T.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Fe);const qe=tr(tt);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,yt),X.bufferData(X.PIXEL_PACK_BUFFER,Oe.byteLength,X.STREAM_READ),X.readPixels(z,fe,se,re,Me.convert(lt),Me.convert(ht),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const tn=Q!==null?le.get(Q).__webglFramebuffer:null;y.bindFramebuffer(X.FRAMEBUFFER,tn);const kt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await $_(X,kt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,yt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Oe),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(yt),X.deleteSync(kt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,fe=0){const se=Math.pow(2,-fe),re=Math.floor(T.image.width*se),Oe=Math.floor(T.image.height*se),Ue=z!==null?z.x:0,Fe=z!==null?z.y:0;ge.setTexture2D(T,0),X.copyTexSubImage2D(X.TEXTURE_2D,fe,0,0,Ue,Fe,re,Oe),y.unbindTexture()},this.copyTextureToTexture=function(T,z,fe=null,se=null,re=0,Oe=0){let Ue,Fe,je,tt,lt,ht,qe,yt,tn;const kt=T.isCompressedTexture?T.mipmaps[Oe]:T.image;if(fe!==null)Ue=fe.max.x-fe.min.x,Fe=fe.max.y-fe.min.y,je=fe.isBox3?fe.max.z-fe.min.z:1,tt=fe.min.x,lt=fe.min.y,ht=fe.isBox3?fe.min.z:0;else{const qt=Math.pow(2,-re);Ue=Math.floor(kt.width*qt),Fe=Math.floor(kt.height*qt),T.isDataArrayTexture?je=kt.depth:T.isData3DTexture?je=Math.floor(kt.depth*qt):je=1,tt=0,lt=0,ht=0}se!==null?(qe=se.x,yt=se.y,tn=se.z):(qe=0,yt=0,tn=0);const Dt=Me.convert(z.format),hn=Me.convert(z.type);let Ge;z.isData3DTexture?(ge.setTexture3D(z,0),Ge=X.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ge.setTexture2DArray(z,0),Ge=X.TEXTURE_2D_ARRAY):(ge.setTexture2D(z,0),Ge=X.TEXTURE_2D),y.activeTexture(X.TEXTURE0),y.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(X.UNPACK_ALIGNMENT,z.unpackAlignment);const on=y.getParameter(X.UNPACK_ROW_LENGTH),Mt=y.getParameter(X.UNPACK_IMAGE_HEIGHT),An=y.getParameter(X.UNPACK_SKIP_PIXELS),mt=y.getParameter(X.UNPACK_SKIP_ROWS),Mi=y.getParameter(X.UNPACK_SKIP_IMAGES);y.pixelStorei(X.UNPACK_ROW_LENGTH,kt.width),y.pixelStorei(X.UNPACK_IMAGE_HEIGHT,kt.height),y.pixelStorei(X.UNPACK_SKIP_PIXELS,tt),y.pixelStorei(X.UNPACK_SKIP_ROWS,lt),y.pixelStorei(X.UNPACK_SKIP_IMAGES,ht);const nr=T.isDataArrayTexture||T.isData3DTexture,Pt=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const qt=le.get(T),Ei=le.get(z),Ut=le.get(qt.__renderTarget),ui=le.get(Ei.__renderTarget);y.bindFramebuffer(X.READ_FRAMEBUFFER,Ut.__webglFramebuffer),y.bindFramebuffer(X.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let wi=0;wi<je;wi++)nr&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,le.get(T).__webglTexture,re,ht+wi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,le.get(z).__webglTexture,Oe,tn+wi)),X.blitFramebuffer(tt,lt,Ue,Fe,qe,yt,Ue,Fe,X.DEPTH_BUFFER_BIT,X.NEAREST);y.bindFramebuffer(X.READ_FRAMEBUFFER,null),y.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(re!==0||T.isRenderTargetTexture||le.has(T)){const qt=le.get(T),Ei=le.get(z);y.bindFramebuffer(X.READ_FRAMEBUFFER,B),y.bindFramebuffer(X.DRAW_FRAMEBUFFER,$);for(let Ut=0;Ut<je;Ut++)nr?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,qt.__webglTexture,re,ht+Ut):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,qt.__webglTexture,re),Pt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ei.__webglTexture,Oe,tn+Ut):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ei.__webglTexture,Oe),re!==0?X.blitFramebuffer(tt,lt,Ue,Fe,qe,yt,Ue,Fe,X.COLOR_BUFFER_BIT,X.NEAREST):Pt?X.copyTexSubImage3D(Ge,Oe,qe,yt,tn+Ut,tt,lt,Ue,Fe):X.copyTexSubImage2D(Ge,Oe,qe,yt,tt,lt,Ue,Fe);y.bindFramebuffer(X.READ_FRAMEBUFFER,null),y.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pt?T.isDataTexture||T.isData3DTexture?X.texSubImage3D(Ge,Oe,qe,yt,tn,Ue,Fe,je,Dt,hn,kt.data):z.isCompressedArrayTexture?X.compressedTexSubImage3D(Ge,Oe,qe,yt,tn,Ue,Fe,je,Dt,kt.data):X.texSubImage3D(Ge,Oe,qe,yt,tn,Ue,Fe,je,Dt,hn,kt):T.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Oe,qe,yt,Ue,Fe,Dt,hn,kt.data):T.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Oe,qe,yt,kt.width,kt.height,Dt,kt.data):X.texSubImage2D(X.TEXTURE_2D,Oe,qe,yt,Ue,Fe,Dt,hn,kt);y.pixelStorei(X.UNPACK_ROW_LENGTH,on),y.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Mt),y.pixelStorei(X.UNPACK_SKIP_PIXELS,An),y.pixelStorei(X.UNPACK_SKIP_ROWS,mt),y.pixelStorei(X.UNPACK_SKIP_IMAGES,Mi),Oe===0&&z.generateMipmaps&&X.generateMipmap(Ge),y.unbindTexture()},this.initRenderTarget=function(T){le.get(T).__webglFramebuffer===void 0&&ge.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ge.setTextureCube(T,0):T.isData3DTexture?ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ge.setTexture2DArray(T,0):ge.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){de=0,ie=0,Q=null,y.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}function UE({playerCharacter:s,playerWeapon:e,onBackToMenu:n}){const r=Dn.useRef(null),[o,u]=Dn.useState(s==="lisa"?100:80),[c,d]=Dn.useState(s==="lisa"?80:100),[p,m]=Dn.useState(null),[v,x]=Dn.useState(e==="shotgun"?8:e==="sniper"?5:e==="pistol"?12:30),[g,M]=Dn.useState(!1),[A,P]=Dn.useState(!1),[S,_]=Dn.useState(!1),[I,G]=Dn.useState(0),[R,L]=Dn.useState(!1),C=Ja[e],F=s==="lisa"?"dasha":"lisa",E=s==="lisa"?100:80,b=F==="lisa"?100:80,O=s==="lisa"?10:14,Y=Dn.useCallback(()=>{P(!0),setTimeout(()=>P(!1),150)},[]),K=Dn.useCallback(()=>{_(!0),setTimeout(()=>_(!1),200)},[]);return Dn.useEffect(()=>{if(!r.current)return;const ne=r.current,B=new fv;B.background=new Tt(7058393);const $=new vi(75,window.innerWidth/window.innerHeight,.1,500),de=new IE({antialias:!0});de.setSize(window.innerWidth,window.innerHeight),de.setPixelRatio(Math.min(window.devicePixelRatio,2)),de.shadowMap.enabled=!0,de.shadowMap.type=Hm,ne.appendChild(de.domElement),B.add(new Iv(16777215,.6));const ie=new Dv(16772829,1);ie.position.set(30,80,40),ie.castShadow=!0,ie.shadow.mapSize.set(2048,2048),ie.shadow.camera.near=1,ie.shadow.camera.far=200,ie.shadow.camera.left=-80,ie.shadow.camera.right=80,ie.shadow.camera.top=80,ie.shadow.camera.bottom=-80,B.add(ie),B.add(new Pv(8900331,4033600,.3));const Q=new De(new lo(200,200),new Ot({color:4885567}));Q.rotation.x=-Math.PI/2,Q.receiveShadow=!0,B.add(Q);const Z=[],W=(V,_e,J,oe,ye,Ie)=>{const Ae=new De(new rn(J,oe,ye),new Ot({color:Ie}));Ae.position.set(V,oe/2,_e),Ae.castShadow=!0,Ae.receiveShadow=!0,B.add(Ae),Z.push({mesh:Ae,min:new te(V-J/2,0,_e-ye/2),max:new te(V+J/2,oe,_e+ye/2)})};W(-25,-25,10,8,10,9136404),W(25,25,10,8,10,9136404),W(-25,25,8,5,8,6908265),W(25,-25,8,5,8,6908265),W(0,0,5,4,5,10506797),W(-40,0,3,3,15,5597999),W(40,0,3,3,15,5597999),W(0,-40,15,3,3,5597999),W(0,40,15,3,3,5597999),W(-10,-10,3,2,3,14596231),W(10,10,3,2,3,14596231),W(-10,15,2,1.5,2,14596231),W(10,-15,2,1.5,2,14596231),W(-35,-35,4,3,4,4868682),W(35,35,4,3,4,4868682),W(35,-35,4,3,4,4868682),W(-35,35,4,3,4,4868682),W(0,-90,200,10,5,3815994),W(0,90,200,10,5,3815994),W(-90,0,5,10,200,3815994),W(90,0,5,10,200,3815994);const N=(V,_e)=>{const J=new De(new Jt(.3,.4,3,6),new Ot({color:6636321}));J.position.set(V,1.5,_e),J.castShadow=!0,B.add(J);const oe=new De(new Xt(2,8,6),new Ot({color:2263842}));oe.position.set(V,4,_e),oe.castShadow=!0,B.add(oe)};[[-50,-50],[50,50],[-50,50],[50,-50],[-60,0],[60,0],[0,-60],[0,60]].forEach(([V,_e])=>N(V,_e));const ue=()=>{const V=new _r,_e=new Ot({color:16738740}),J=new Ot({color:16777215}),oe=new Ot({color:16767916}),ye=new Ot({color:7483191}),Ie=new Jt(.12,.11,.7,8),Ae=new De(Ie,_e);Ae.position.set(-.15,.35,0),Ae.castShadow=!0,V.add(Ae);const Le=new De(Ie,_e);Le.position.set(.15,.35,0),Le.castShadow=!0,V.add(Le);const ze=new Ot({color:16777215}),$e=new rn(.14,.08,.22),it=new De($e,ze);it.position.set(-.15,.04,.03),V.add(it);const k=new De($e,ze);k.position.set(.15,.04,.03),V.add(k);const Pe=new De(new Jt(.28,.3,.7,8),J);Pe.position.y=1.05,Pe.castShadow=!0,V.add(Pe);const ve=new De(new Jt(.31,.31,.06,8),new Ot({color:16716947}));ve.position.y=.72,V.add(ve);const Me=new Jt(.07,.07,.55,8),Re=new De(Me,oe);Re.position.set(-.38,1.05,.1),Re.rotation.x=-.3,V.add(Re);const Se=new De(Me,oe);Se.position.set(.38,1.05,.15),Se.rotation.x=-.5,V.add(Se);const Ye=new De(new Jt(.08,.1,.12,8),oe);Ye.position.y=1.46,V.add(Ye);const Ve=new De(new Xt(.25,12,10),oe);Ve.position.y=1.72,Ve.castShadow=!0,V.add(Ve);const pt=new De(new Xt(.28,10,8),ye);pt.position.set(0,1.78,-.03),pt.scale.set(1,.9,1.1),V.add(pt);const dt=new De(new rn(.4,.1,.15),ye);dt.position.set(0,1.88,.15),V.add(dt);const Yt=new De(new Jt(.15,.08,.6,8),ye);Yt.position.set(0,1.45,-.2),V.add(Yt);const cn=new De(new Jt(.06,.04,.35,6),ye);cn.position.set(-.22,1.55,0),cn.rotation.z=.15,V.add(cn);const zn=new De(new Jt(.06,.04,.35,6),ye);zn.position.set(.22,1.55,0),zn.rotation.z=-.15,V.add(zn);const li=new $n({color:2245802}),jn=new $n({color:16777215}),Jn=new Xt(.04,6,6),Qi=new Xt(.055,6,6),xi=new De(Qi,jn);xi.position.set(-.09,1.74,.2),V.add(xi);const Bi=new De(Jn,li);Bi.position.set(-.09,1.74,.23),V.add(Bi);const an=new De(Qi,jn);an.position.set(.09,1.74,.2),V.add(an);const Qn=new De(Jn,li);Qn.position.set(.09,1.74,.23),V.add(Qn);const Si=new De(new rn(.08,.02,.02),new $n({color:16729190}));Si.position.set(0,1.64,.23),V.add(Si);const Hn=new _r;Hn.add(new De(new rn(.06,.06,.4),new Ot({color:2236962})));const Un=new De(new Jt(.015,.015,.25,6),new Ot({color:1710618}));return Un.rotation.x=Math.PI/2,Un.position.z=.3,Hn.add(Un),Hn.position.set(.38,.95,.35),Hn.rotation.x=-.3,V.add(Hn),V},Te=()=>{const V=new _r,_e=new Ot({color:4008735}),J=new Ot({color:9133628}),oe=new Ot({color:12883306}),ye=new Ot({color:1710618}),Ie=new De(new cd(.3,.5,8,12),J);Ie.position.y=.9,Ie.castShadow=!0,V.add(Ie);const Ae=new De(new Xt(.15,6,6),_e);Ae.position.set(.15,1,.2),Ae.scale.set(1,1.5,.5),V.add(Ae);const Le=new De(new Xt(.12,6,6),ye);Le.position.set(-.18,.85,.15),Le.scale.set(1,1.3,.5),V.add(Le);const ze=new De(new Xt(.18,8,6),oe);ze.position.set(0,.75,.2),ze.scale.set(1,1.2,.7),V.add(ze);const $e=new Jt(.07,.06,.5,8),it=new Xt(.08,6,6),k=new De($e,J);k.position.set(-.15,.25,.1),k.castShadow=!0,V.add(k);const Pe=new De(it,_e);Pe.position.set(-.15,.04,.12),Pe.scale.set(1,.6,1.2),V.add(Pe);const ve=new De($e,J);ve.position.set(.15,.25,.1),ve.castShadow=!0,V.add(ve);const Me=new De(it,_e);Me.position.set(.15,.04,.12),Me.scale.set(1,.6,1.2),V.add(Me);const Re=new Jt(.08,.07,.5,8),Se=new De(Re,J);Se.position.set(-.15,.25,-.1),Se.castShadow=!0,V.add(Se);const Ye=new De(it,_e);Ye.position.set(-.15,.04,-.1),Ye.scale.set(1,.6,1.2),V.add(Ye);const Ve=new De(Re,J);Ve.position.set(.15,.25,-.1),Ve.castShadow=!0,V.add(Ve);const pt=new De(it,_e);pt.position.set(.15,.04,-.1),pt.scale.set(1,.6,1.2),V.add(pt);const dt=new De(new Xt(.28,12,10),J);dt.position.y=1.5,dt.scale.set(1,.9,.95),dt.castShadow=!0,V.add(dt);const Yt=new De(new Xt(.15,8,6),_e);Yt.position.set(0,1.6,-.1),Yt.scale.set(1.2,.8,.8),V.add(Yt);const cn=new De(new Xt(.12,8,6),oe);cn.position.set(0,1.42,.2),cn.scale.set(1.2,.8,.8),V.add(cn);const zn=new De(new Xt(.035,6,6),new Ot({color:16746632}));zn.position.set(0,1.46,.28),V.add(zn);const li=new $n({color:4508740}),jn=new $n({color:0}),Jn=new De(new Xt(.07,8,6),new $n({color:15663086}));Jn.position.set(-.12,1.54,.2),V.add(Jn);const Qi=new De(new Xt(.06,8,6),li);Qi.position.set(-.12,1.54,.24),V.add(Qi);const xi=new De(new Xt(.03,6,6),jn);xi.position.set(-.12,1.54,.27),xi.scale.set(.5,1,.5),V.add(xi);const Bi=new De(new Xt(.07,8,6),new $n({color:15663086}));Bi.position.set(.12,1.54,.2),V.add(Bi);const an=new De(new Xt(.06,8,6),li);an.position.set(.12,1.54,.24),V.add(an);const Qn=new De(new Xt(.03,6,6),jn);Qn.position.set(.12,1.54,.27),Qn.scale.set(.5,1,.5),V.add(Qn);const Si=new Gl(.1,.22,4),Hn=new De(Si,J);Hn.position.set(-.16,1.78,.02),Hn.rotation.z=.2,V.add(Hn);const Un=new De(Si,J);Un.position.set(.16,1.78,.02),Un.rotation.z=-.2,V.add(Un);const Er=new Ot({color:16755370}),ki=new Gl(.05,.12,4),er=new De(ki,Er);er.position.set(-.16,1.76,.05),er.rotation.z=.2,V.add(er);const wr=new De(ki,Er);wr.position.set(.16,1.76,.05),wr.rotation.z=-.2,V.add(wr);const ca=new $n({color:13421772}),Vt=new Jt(.003,.002,.2,4);for(let T=-1;T<=1;T+=2)for(let z=0;z<3;z++){const fe=new De(Vt,ca);fe.position.set(T*.15,1.43+z*.03,.25),fe.rotation.z=Math.PI/2+T*(.1+z*.1),V.add(fe)}for(let T=0;T<8;T++){const z=T/8,fe=new De(new Xt(.05-z*.02,6,6),T%2===0?J:_e),se=z*Math.PI*.6;fe.position.set(Math.sin(se)*.1,.8+z*.8,-.3-Math.cos(se)*.3),V.add(fe)}const Ss=new De(new rn(.08,.5,.3),ye);Ss.position.set(0,1,-.15),V.add(Ss);const yi=new _r;yi.add(new De(new rn(.06,.06,.35),new Ot({color:2236962})));const tr=new De(new Jt(.015,.015,.2,6),new Ot({color:1710618}));return tr.rotation.x=Math.PI/2,tr.position.z=.25,yi.add(tr),yi.position.set(0,.85,.35),yi.rotation.x=-.2,V.add(yi),V},Ke=V=>V?ue():Te(),He=Ke(s==="lisa");He.position.set(-40,0,-40),B.add(He);const Xe=Ke(F==="lisa");Xe.position.set(40,0,40),B.add(Xe);const ee=new _r,he=new Ot({color:1710618});if(e==="ak"){ee.add(new De(new rn(.05,.06,.5),he));const V=new De(new Jt(.012,.012,.3,6),he);V.rotation.x=Math.PI/2,V.position.z=.35,ee.add(V);const _e=new De(new rn(.03,.12,.04),new Ot({color:3355443}));_e.position.set(0,-.08,.05),_e.rotation.x=.2,ee.add(_e);const J=new De(new rn(.04,.05,.15),new Ot({color:6636321}));J.position.z=-.3,ee.add(J)}else if(e==="shotgun"){ee.add(new De(new rn(.06,.07,.55),he));const V=new De(new Jt(.018,.018,.35,8),he);V.rotation.x=Math.PI/2,V.position.set(-.015,.01,.4),ee.add(V);const _e=new De(new Jt(.018,.018,.35,8),he);_e.rotation.x=Math.PI/2,_e.position.set(.015,.01,.4),ee.add(_e);const J=new De(new rn(.05,.04,.12),new Ot({color:6636321}));J.position.set(0,-.04,.15),ee.add(J);const oe=new De(new rn(.05,.06,.2),new Ot({color:9127187}));oe.position.z=-.35,ee.add(oe)}else if(e==="pistol"){ee.add(new De(new rn(.035,.04,.2),he));const V=new De(new Jt(.008,.008,.08,6),he);V.rotation.x=Math.PI/2,V.position.z=.12,ee.add(V);const _e=new De(new rn(.03,.08,.04),new Ot({color:4863784}));_e.position.set(0,-.05,-.05),_e.rotation.x=.3,ee.add(_e)}else if(e==="sniper"){ee.add(new De(new rn(.04,.05,.7),he));const V=new De(new Jt(.01,.015,.4,8),he);V.rotation.x=Math.PI/2,V.position.z=.5,ee.add(V);const _e=new De(new Jt(.025,.025,.15,8),new Ot({color:3355443}));_e.rotation.x=Math.PI/2,_e.position.set(0,.05,.1),ee.add(_e);const J=new De(new fd(.024,8),new $n({color:4491519}));J.position.set(0,.05,.18),ee.add(J);const oe=new De(new rn(.04,.07,.2),new Ot({color:6636321}));oe.position.z=-.4,ee.add(oe)}ee.position.set(.25,-.2,-.4),$.add(ee),B.add($);const Ce=new $n({color:16776960,transparent:!0,opacity:0}),et=new De(new Xt(.06,6,6),Ce);et.position.set(.25,-.18,-.75),$.add(et);const ke=e==="shotgun"?8:e==="sniper"?5:e==="pistol"?12:30,pe={bullets:[],keys:{},yaw:Math.PI*.75,pitch:0,lastShot:0,botLastShot:0,playerHP:E,botHP:b,ammo:ke,maxAmmo:ke,isReloading:!1,reloadStart:0,playerPos:new te(-40,0,-40),botPos:new te(40,0,40),botStrafeDir:1,botStrafeTimer:0,gameOver:!1,weaponBob:0,recoilOffset:0,isMouseDown:!1},It=(V,_e)=>{for(const J of Z){const oe=Math.max(J.min.x,Math.min(V.x,J.max.x)),ye=Math.max(J.min.z,Math.min(V.z,J.max.z)),Ie=V.x-oe,Ae=V.z-ye;if(Ie*Ie+Ae*Ae<_e*_e)return!0}return!1},ut=V=>{pe.keys[V.key.toLowerCase()]=!0,V.key.toLowerCase()==="r"&&!pe.isReloading&&pe.ammo<pe.maxAmmo&&(pe.isReloading=!0,pe.reloadStart=Date.now(),M(!0))},_t=V=>{pe.keys[V.key.toLowerCase()]=!1};let Rt=window.innerWidth/2,ct=window.innerHeight/2,At=!1;const Ht=V=>{if(!At||pe.gameOver)return;const _e=V.clientX-Rt,J=V.clientY-ct;Rt=V.clientX,ct=V.clientY,pe.yaw-=_e*.003,pe.pitch-=J*.003,pe.pitch=Math.max(-1.2,Math.min(1.2,pe.pitch))},$t=V=>{V.button===0&&(pe.isMouseDown=!0,pe.gameOver||(At||(At=!0,Rt=V.clientX,ct=V.clientY,L(!0)),St()))},Ct=V=>{V.button===0&&(pe.isMouseDown=!1)},Bt=()=>{document.pointerLockElement===de.domElement&&(At=!0,L(!0))},X=()=>{try{de.domElement.requestPointerLock()}catch{}At=!0,L(!0)},en=V=>V.preventDefault();document.addEventListener("keydown",ut),document.addEventListener("keyup",_t),document.addEventListener("mousemove",Ht),document.addEventListener("mousedown",$t),document.addEventListener("mouseup",Ct),document.addEventListener("pointerlockchange",Bt),de.domElement.addEventListener("click",X),de.domElement.addEventListener("contextmenu",en);function St(){if(pe.gameOver)return;const V=Date.now();if(pe.isReloading)return;if(pe.ammo<=0){pe.isReloading=!0,pe.reloadStart=V,M(!0);return}if(V-pe.lastShot<C.fireRate)return;pe.lastShot=V,pe.ammo--,x(pe.ammo),pe.recoilOffset=e==="sniper"?.12:e==="shotgun"?.08:.04,pe.pitch+=e==="sniper"?.025:e==="shotgun"?.015:.005,Ce.opacity=1;const _e=new te(0,0,-1);_e.applyQuaternion($.quaternion);for(let J=0;J<C.bulletsPerShot;J++){const oe=new De(new Xt(e==="sniper"?.03:.04,4,4),new $n({color:e==="sniper"?4521983:16777028}));oe.position.copy(pe.playerPos),oe.position.y+=1.6;const ye=_e.clone();ye.x+=(Math.random()-.5)*C.spread,ye.y+=(Math.random()-.5)*C.spread,ye.z+=(Math.random()-.5)*C.spread,ye.normalize().multiplyScalar(e==="sniper"?4:2.5),B.add(oe),pe.bullets.push({mesh:oe,velocity:ye,life:80,isPlayer:!0,damage:C.damage})}}function D(){if(pe.gameOver)return;const V=Date.now();if(V-pe.botLastShot<C.fireRate*2)return;pe.botLastShot=V;const _e=new te().subVectors(new te(pe.playerPos.x,pe.playerPos.y+1.2,pe.playerPos.z),new te(pe.botPos.x,pe.botPos.y+1.2,pe.botPos.z)).normalize();for(let J=0;J<C.bulletsPerShot;J++){const oe=new De(new Xt(.04,4,4),new $n({color:16729156}));oe.position.copy(pe.botPos),oe.position.y+=1.2;const ye=_e.clone();ye.x+=(Math.random()-.5)*C.spread*2.5,ye.y+=(Math.random()-.5)*C.spread*2.5,ye.z+=(Math.random()-.5)*C.spread*2.5,ye.normalize().multiplyScalar(2),B.add(oe),pe.bullets.push({mesh:oe,velocity:ye,life:80,isPlayer:!1,damage:C.damage})}}let y=0,j=0;const le=V=>{j=requestAnimationFrame(le);const _e=Math.min((V-y)/1e3,.05);if(y=V,pe.gameOver){de.render(B,$);return}pe.isMouseDown&&At&&e==="ak"&&St(),pe.isReloading&&Date.now()-pe.reloadStart>2e3&&(pe.isReloading=!1,pe.ammo=pe.maxAmmo,M(!1),x(pe.maxAmmo));const J=new te(0,0,-1);J.applyAxisAngle(new te(0,1,0),pe.yaw),J.y=0,J.normalize();const oe=new te(1,0,0);oe.applyAxisAngle(new te(0,1,0),pe.yaw),oe.y=0,oe.normalize();const ye=new te;let Ie=!1;if((pe.keys.w||pe.keys.ц)&&(ye.add(J),Ie=!0),(pe.keys.s||pe.keys.ы)&&(ye.sub(J),Ie=!0),(pe.keys.d||pe.keys.в)&&(ye.add(oe),Ie=!0),(pe.keys.a||pe.keys.ф)&&(ye.sub(oe),Ie=!0),Ie&&ye.length()>0){ye.normalize();const Me=pe.playerPos.clone().add(ye.multiplyScalar(O*_e));if(Me.x=Math.max(-85,Math.min(85,Me.x)),Me.z=Math.max(-85,Math.min(85,Me.z)),!It(Me,.6))pe.playerPos.copy(Me);else{const Re=pe.playerPos.clone();Re.x=Me.x,It(Re,.6)||(pe.playerPos.x=Me.x);const Se=pe.playerPos.clone();Se.z=Me.z,It(Se,.6)||(pe.playerPos.z=Me.z)}pe.weaponBob+=_e*8}He.position.copy(pe.playerPos),He.rotation.y=pe.yaw,$.position.set(pe.playerPos.x,pe.playerPos.y+1.7,pe.playerPos.z),$.rotation.order="YXZ",$.rotation.y=pe.yaw,$.rotation.x=pe.pitch;const Ae=Ie?Math.sin(pe.weaponBob)*.01:0,Le=Ie?Math.abs(Math.cos(pe.weaponBob))*.008:0;ee.position.set(.25+Ae,-.2+Le,-.4+pe.recoilOffset),pe.recoilOffset*=.88,Ce.opacity>0&&(Ce.opacity-=_e*15,Ce.opacity<0&&(Ce.opacity=0));const ze=new te().subVectors(pe.playerPos,pe.botPos),$e=ze.length(),it=F==="lisa"?7:11;pe.botStrafeTimer+=_e,pe.botStrafeTimer>2+Math.random()*2&&(pe.botStrafeDir*=-1,pe.botStrafeTimer=0);const k=e==="sniper"?35:e==="shotgun"?8:18,Pe=new te;$e>k+8?Pe.add(ze.clone().normalize().multiplyScalar(.7)):$e<k-8&&Pe.add(ze.clone().normalize().multiplyScalar(-.5));const ve=new te(-ze.z,0,ze.x).normalize();if(Pe.add(ve.multiplyScalar(pe.botStrafeDir*.4)),Pe.length()>0){Pe.normalize();const Me=pe.botPos.clone().add(Pe.multiplyScalar(it*_e));Me.x=Math.max(-85,Math.min(85,Me.x)),Me.z=Math.max(-85,Math.min(85,Me.z)),It(Me,.6)||pe.botPos.copy(Me)}Xe.position.copy(pe.botPos),Xe.rotation.y=Math.atan2(pe.playerPos.x-pe.botPos.x,pe.playerPos.z-pe.botPos.z),$e<55&&$e>3&&D();for(let Me=pe.bullets.length-1;Me>=0;Me--){const Re=pe.bullets[Me];if(Re.mesh.position.add(Re.velocity),Re.life--,Re.life<=0){B.remove(Re.mesh),pe.bullets.splice(Me,1);continue}if(!Re.isPlayer){const Se=new te(pe.playerPos.x,pe.playerPos.y+1.2,pe.playerPos.z);if(Re.mesh.position.distanceTo(Se)<1){pe.playerHP-=Re.damage,u(Math.max(0,pe.playerHP)),K(),B.remove(Re.mesh),pe.bullets.splice(Me,1),pe.playerHP<=0&&(pe.gameOver=!0,m("lose"),document.exitPointerLock());continue}}if(Re.isPlayer){const Se=new te(pe.botPos.x,pe.botPos.y+1.2,pe.botPos.z);if(Re.mesh.position.distanceTo(Se)<1){pe.botHP-=Re.damage,d(Math.max(0,pe.botHP)),Y(),B.remove(Re.mesh),pe.bullets.splice(Me,1),pe.botHP<=0&&(pe.gameOver=!0,G(Ye=>Ye+1),m("win"),document.exitPointerLock());continue}}}de.render(B,$)};j=requestAnimationFrame(le);const ge=()=>{$.aspect=window.innerWidth/window.innerHeight,$.updateProjectionMatrix(),de.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ge),()=>{cancelAnimationFrame(j),document.removeEventListener("keydown",ut),document.removeEventListener("keyup",_t),document.removeEventListener("mousemove",Ht),document.removeEventListener("mousedown",$t),document.removeEventListener("mouseup",Ct),document.removeEventListener("pointerlockchange",Bt),window.removeEventListener("resize",ge),de.domElement.removeEventListener("click",X),de.domElement.removeEventListener("contextmenu",en),ne.contains(de.domElement)&&ne.removeChild(de.domElement),de.dispose()}},[]),xe.jsxs("div",{className:"relative w-full h-full select-none overflow-hidden",children:[xe.jsx("div",{ref:r,className:"w-full h-full",style:{cursor:R?"none":"pointer"}}),R&&!p&&xe.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none z-10",children:xe.jsxs("div",{className:"relative w-8 h-8",children:[xe.jsxs("div",{className:"absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2",children:[xe.jsx("div",{className:"absolute left-0 w-2 h-[2px] bg-white/90"}),xe.jsx("div",{className:"absolute right-0 w-2 h-[2px] bg-white/90"})]}),xe.jsxs("div",{className:"absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2",children:[xe.jsx("div",{className:"absolute top-0 w-[2px] h-2 bg-white/90"}),xe.jsx("div",{className:"absolute bottom-0 w-[2px] h-2 bg-white/90"})]}),xe.jsx("div",{className:"absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"})]})}),A&&xe.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none z-20",children:xe.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 30 30",children:[xe.jsx("line",{x1:"8",y1:"8",x2:"13",y2:"13",stroke:"white",strokeWidth:"2"}),xe.jsx("line",{x1:"22",y1:"8",x2:"17",y2:"13",stroke:"white",strokeWidth:"2"}),xe.jsx("line",{x1:"8",y1:"22",x2:"13",y2:"17",stroke:"white",strokeWidth:"2"}),xe.jsx("line",{x1:"22",y1:"22",x2:"17",y2:"17",stroke:"white",strokeWidth:"2"})]})}),S&&xe.jsx("div",{className:"absolute inset-0 pointer-events-none z-20",children:xe.jsx("div",{className:"w-full h-full border-[12px] border-red-500/60"})}),xe.jsx("div",{className:"absolute bottom-6 left-6 pointer-events-none z-10",children:xe.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/10",children:[xe.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[xe.jsx("span",{className:"text-2xl",children:s==="lisa"?"👧":"🐱"}),xe.jsxs("div",{children:[xe.jsx("div",{className:"text-white font-bold text-sm",children:s==="lisa"?"Лиза":"Даша"}),xe.jsx("div",{className:"text-xs text-gray-400",children:"ВЫ"})]})]}),xe.jsx("div",{className:"w-44 h-3 bg-gray-800 rounded-full overflow-hidden",children:xe.jsx("div",{className:"h-full rounded-full transition-all duration-300",style:{width:`${o/E*100}%`,background:o>50?"linear-gradient(90deg, #22c55e, #4ade80)":o>25?"linear-gradient(90deg, #eab308, #facc15)":"linear-gradient(90deg, #ef4444, #f87171)"}})}),xe.jsxs("div",{className:"text-white text-xs mt-1 font-mono",children:["❤️ ",Math.max(0,o)," / ",E]})]})}),xe.jsx("div",{className:"absolute top-6 right-6 pointer-events-none z-10",children:xe.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/10",children:[xe.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[xe.jsx("span",{className:"text-2xl",children:F==="lisa"?"👧":"🐱"}),xe.jsxs("div",{children:[xe.jsx("div",{className:"text-white font-bold text-sm",children:F==="lisa"?"Лиза":"Даша"}),xe.jsx("div",{className:"text-xs text-red-400",children:"БОТ"})]})]}),xe.jsx("div",{className:"w-44 h-3 bg-gray-800 rounded-full overflow-hidden",children:xe.jsx("div",{className:"h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-300",style:{width:`${c/b*100}%`}})}),xe.jsxs("div",{className:"text-white text-xs mt-1 font-mono",children:["❤️ ",Math.max(0,c)," / ",b]})]})}),xe.jsx("div",{className:"absolute bottom-6 right-6 pointer-events-none z-10",children:xe.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-right",children:[xe.jsxs("div",{className:"text-white font-bold text-lg flex items-center justify-end gap-2",children:[xe.jsx("span",{children:C.emoji}),xe.jsx("span",{children:C.name})]}),xe.jsx("div",{className:"text-2xl font-mono font-bold mt-1",style:{color:v>10?"#4ade80":v>0?"#facc15":"#ef4444"},children:g?xe.jsx("span",{className:"text-yellow-400 animate-pulse text-lg",children:"⟳ Перезарядка..."}):xe.jsxs(xe.Fragment,{children:[v," ",xe.jsxs("span",{className:"text-gray-500 text-base",children:["/ ",e==="shotgun"?8:e==="sniper"?5:e==="pistol"?12:30]})]})}),xe.jsx("div",{className:"text-xs text-gray-400 mt-1",children:"R — перезарядка"}),e==="ak"&&xe.jsx("div",{className:"text-xs text-green-400 mt-1",children:"⚡ Автоматический"})]})}),xe.jsx("div",{className:"absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-10",children:xe.jsx("div",{className:"bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10",children:xe.jsxs("div",{className:"flex gap-4 text-xs text-gray-300",children:[xe.jsxs("span",{children:[xe.jsx("kbd",{className:"bg-gray-700 px-1.5 py-0.5 rounded text-white",children:"WASD"})," Движение"]}),xe.jsxs("span",{children:[xe.jsx("kbd",{className:"bg-gray-700 px-1.5 py-0.5 rounded text-white",children:"Мышь"})," Камера"]}),xe.jsxs("span",{children:[xe.jsx("kbd",{className:"bg-gray-700 px-1.5 py-0.5 rounded text-white",children:"ЛКМ"})," Стрельба"]})]})})}),xe.jsx("button",{onClick:()=>{document.exitPointerLock(),n()},className:"absolute top-6 left-6 px-4 py-2 bg-black/70 backdrop-blur-sm text-white rounded-lg hover:bg-red-600 transition-colors z-30 border border-white/10 text-sm",children:"← Меню"}),!R&&!p&&xe.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-40",children:xe.jsxs("div",{className:"bg-black/80 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 max-w-md",children:[xe.jsx("h3",{className:"text-2xl font-bold text-white mb-4",children:"🎮 Готов к бою!"}),xe.jsxs("p",{className:"text-gray-300 mb-2",children:["Вы: ",s==="lisa"?"👧 Лиза":"🐱 Даша"]}),xe.jsxs("p",{className:"text-gray-300 mb-2",children:["Противник: ",F==="lisa"?"👧 Лиза":"🐱 Даша"]}),xe.jsxs("p",{className:"text-gray-300 mb-4",children:["Оружие: ",C.emoji," ",C.name]}),xe.jsx("p",{className:"text-yellow-400 text-lg animate-pulse",children:"👆 Кликните в любом месте чтобы начать"}),xe.jsx("p",{className:"text-gray-500 text-xs mt-3",children:"Двигайте мышь для поворота камеры"})]})}),p&&xe.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/80 z-50",children:xe.jsxs("div",{className:"text-center",children:[p==="win"?xe.jsxs(xe.Fragment,{children:[xe.jsx("div",{className:"text-8xl mb-4",children:"🏆"}),xe.jsx("h2",{className:"text-5xl font-bold text-green-400 mb-2",children:"ПОБЕДА!"}),xe.jsxs("p",{className:"text-xl text-gray-300 mb-2",children:["Вы победили ",F==="lisa"?"Лизу":"Дашу","!"]})]}):xe.jsxs(xe.Fragment,{children:[xe.jsx("div",{className:"text-8xl mb-4",children:"💀"}),xe.jsx("h2",{className:"text-5xl font-bold text-red-400 mb-2",children:"ПОРАЖЕНИЕ"}),xe.jsxs("p",{className:"text-xl text-gray-300 mb-2",children:[F==="lisa"?"Лиза":"Даша"," победила вас!"]})]}),xe.jsxs("p",{className:"text-gray-400 mb-8",children:["Убийств: ",I]}),xe.jsx("button",{onClick:n,className:"px-8 py-3 bg-blue-600 text-white rounded-xl text-xl hover:bg-blue-500 transition-colors font-bold",children:"🏠 В меню"})]})})]})}const Ja={ak:{name:"Автомат",damage:12,fireRate:80,spread:.025,bulletsPerShot:1,emoji:"🔫"},shotgun:{name:"Дробовик",damage:10,fireRate:900,spread:.12,bulletsPerShot:8,emoji:"💥"},pistol:{name:"Пистолет",damage:22,fireRate:350,spread:.015,bulletsPerShot:1,emoji:"🔫"},sniper:{name:"Снайперка",damage:90,fireRate:1800,spread:.003,bulletsPerShot:1,emoji:"🎯"}};function FE(){const[s,e]=Dn.useState("menu"),[n,r]=Dn.useState("lisa"),[o,u]=Dn.useState("ak"),c=m=>{r(m),e("weapon")},d=m=>{u(m),e("game")},p=()=>{e("menu")};return xe.jsxs("div",{className:"w-full h-screen overflow-hidden bg-gray-900",children:[s==="menu"&&xe.jsx(d_,{onSelect:c}),s==="weapon"&&xe.jsx(h_,{onSelect:d,onBack:()=>e("menu")}),s==="game"&&xe.jsx(UE,{playerCharacter:n,playerWeapon:o,onBackToMenu:p})]})}f_.createRoot(document.getElementById("root")).render(xe.jsx(FE,{}));
