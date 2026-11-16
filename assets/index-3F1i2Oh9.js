var s_=s=>{throw TypeError(s)};var ba=(s,e,t)=>e.has(s)?s_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t);function o_(s,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in s)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function cg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var fd={exports:{}},Ta={},hd={exports:{}},Ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function a_(){if(Wm)return Ut;Wm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function m(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,P={};function y(I,ae,Te){this.props=I,this.context=ae,this.refs=P,this.updater=Te||S}y.prototype.isReactComponent={},y.prototype.setState=function(I,ae){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ae,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function _(){}_.prototype=y.prototype;function A(I,ae,Te){this.props=I,this.context=ae,this.refs=P,this.updater=Te||S}var z=A.prototype=new _;z.constructor=A,b(z,y.prototype),z.isPureReactComponent=!0;var C=Array.isArray,N=Object.prototype.hasOwnProperty,D={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(I,ae,Te){var qe,Ye={},Ke=null,ce=null;if(ae!=null)for(qe in ae.ref!==void 0&&(ce=ae.ref),ae.key!==void 0&&(Ke=""+ae.key),ae)N.call(ae,qe)&&!F.hasOwnProperty(qe)&&(Ye[qe]=ae[qe]);var pe=arguments.length-2;if(pe===1)Ye.children=Te;else if(1<pe){for(var Ae=Array(pe),at=0;at<pe;at++)Ae[at]=arguments[at+2];Ye.children=Ae}if(I&&I.defaultProps)for(qe in pe=I.defaultProps,pe)Ye[qe]===void 0&&(Ye[qe]=pe[qe]);return{$$typeof:s,type:I,key:Ke,ref:ce,props:Ye,_owner:D.current}}function L(I,ae){return{$$typeof:s,type:I.type,key:ae,ref:I.ref,props:I.props,_owner:I._owner}}function k(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function H(I){var ae={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Te){return ae[Te]})}var $=/\/+/g;function te(I,ae){return typeof I=="object"&&I!==null&&I.key!=null?H(""+I.key):ae.toString(36)}function X(I,ae,Te,qe,Ye){var Ke=typeof I;(Ke==="undefined"||Ke==="boolean")&&(I=null);var ce=!1;if(I===null)ce=!0;else switch(Ke){case"string":case"number":ce=!0;break;case"object":switch(I.$$typeof){case s:case e:ce=!0}}if(ce)return ce=I,Ye=Ye(ce),I=qe===""?"."+te(ce,0):qe,C(Ye)?(Te="",I!=null&&(Te=I.replace($,"$&/")+"/"),X(Ye,ae,Te,"",function(at){return at})):Ye!=null&&(k(Ye)&&(Ye=L(Ye,Te+(!Ye.key||ce&&ce.key===Ye.key?"":(""+Ye.key).replace($,"$&/")+"/")+I)),ae.push(Ye)),1;if(ce=0,qe=qe===""?".":qe+":",C(I))for(var pe=0;pe<I.length;pe++){Ke=I[pe];var Ae=qe+te(Ke,pe);ce+=X(Ke,ae,Te,Ae,Ye)}else if(Ae=m(I),typeof Ae=="function")for(I=Ae.call(I),pe=0;!(Ke=I.next()).done;)Ke=Ke.value,Ae=qe+te(Ke,pe++),ce+=X(Ke,ae,Te,Ae,Ye);else if(Ke==="object")throw ae=String(I),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.");return ce}function ie(I,ae,Te){if(I==null)return I;var qe=[],Ye=0;return X(I,qe,"","",function(Ke){return ae.call(Te,Ke,Ye++)}),qe}function me(I){if(I._status===-1){var ae=I._result;ae=ae(),ae.then(function(Te){(I._status===0||I._status===-1)&&(I._status=1,I._result=Te)},function(Te){(I._status===0||I._status===-1)&&(I._status=2,I._result=Te)}),I._status===-1&&(I._status=0,I._result=ae)}if(I._status===1)return I._result.default;throw I._result}var se={current:null},ee={transition:null},K={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:ee,ReactCurrentOwner:D};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Ut.Children={map:ie,forEach:function(I,ae,Te){ie(I,function(){ae.apply(this,arguments)},Te)},count:function(I){var ae=0;return ie(I,function(){ae++}),ae},toArray:function(I){return ie(I,function(ae){return ae})||[]},only:function(I){if(!k(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Ut.Component=y,Ut.Fragment=t,Ut.Profiler=o,Ut.PureComponent=A,Ut.StrictMode=i,Ut.Suspense=f,Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Ut.act=Z,Ut.cloneElement=function(I,ae,Te){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var qe=b({},I.props),Ye=I.key,Ke=I.ref,ce=I._owner;if(ae!=null){if(ae.ref!==void 0&&(Ke=ae.ref,ce=D.current),ae.key!==void 0&&(Ye=""+ae.key),I.type&&I.type.defaultProps)var pe=I.type.defaultProps;for(Ae in ae)N.call(ae,Ae)&&!F.hasOwnProperty(Ae)&&(qe[Ae]=ae[Ae]===void 0&&pe!==void 0?pe[Ae]:ae[Ae])}var Ae=arguments.length-2;if(Ae===1)qe.children=Te;else if(1<Ae){pe=Array(Ae);for(var at=0;at<Ae;at++)pe[at]=arguments[at+2];qe.children=pe}return{$$typeof:s,type:I.type,key:Ye,ref:Ke,props:qe,_owner:ce}},Ut.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},Ut.createElement=E,Ut.createFactory=function(I){var ae=E.bind(null,I);return ae.type=I,ae},Ut.createRef=function(){return{current:null}},Ut.forwardRef=function(I){return{$$typeof:d,render:I}},Ut.isValidElement=k,Ut.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:me}},Ut.memo=function(I,ae){return{$$typeof:h,type:I,compare:ae===void 0?null:ae}},Ut.startTransition=function(I){var ae=ee.transition;ee.transition={};try{I()}finally{ee.transition=ae}},Ut.unstable_act=Z,Ut.useCallback=function(I,ae){return se.current.useCallback(I,ae)},Ut.useContext=function(I){return se.current.useContext(I)},Ut.useDebugValue=function(){},Ut.useDeferredValue=function(I){return se.current.useDeferredValue(I)},Ut.useEffect=function(I,ae){return se.current.useEffect(I,ae)},Ut.useId=function(){return se.current.useId()},Ut.useImperativeHandle=function(I,ae,Te){return se.current.useImperativeHandle(I,ae,Te)},Ut.useInsertionEffect=function(I,ae){return se.current.useInsertionEffect(I,ae)},Ut.useLayoutEffect=function(I,ae){return se.current.useLayoutEffect(I,ae)},Ut.useMemo=function(I,ae){return se.current.useMemo(I,ae)},Ut.useReducer=function(I,ae,Te){return se.current.useReducer(I,ae,Te)},Ut.useRef=function(I){return se.current.useRef(I)},Ut.useState=function(I){return se.current.useState(I)},Ut.useSyncExternalStore=function(I,ae,Te){return se.current.useSyncExternalStore(I,ae,Te)},Ut.useTransition=function(){return se.current.useTransition()},Ut.version="18.3.1",Ut}var jm;function nh(){return jm||(jm=1,hd.exports=a_()),hd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function l_(){if(Xm)return Ta;Xm=1;var s=nh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,h){var g,v={},m=null,S=null;h!==void 0&&(m=""+h),f.key!==void 0&&(m=""+f.key),f.ref!==void 0&&(S=f.ref);for(g in f)i.call(f,g)&&!l.hasOwnProperty(g)&&(v[g]=f[g]);if(d&&d.defaultProps)for(g in f=d.defaultProps,f)v[g]===void 0&&(v[g]=f[g]);return{$$typeof:e,type:d,key:m,ref:S,props:v,_owner:o.current}}return Ta.Fragment=t,Ta.jsx=c,Ta.jsxs=c,Ta}var $m;function c_(){return $m||($m=1,fd.exports=l_()),fd.exports}var R=c_(),Xl={},pd={exports:{}},Si={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function u_(){return Ym||(Ym=1,(function(s){function e(ee,K){var Z=ee.length;ee.push(K);e:for(;0<Z;){var I=Z-1>>>1,ae=ee[I];if(0<o(ae,K))ee[I]=K,ee[Z]=ae,Z=I;else break e}}function t(ee){return ee.length===0?null:ee[0]}function i(ee){if(ee.length===0)return null;var K=ee[0],Z=ee.pop();if(Z!==K){ee[0]=Z;e:for(var I=0,ae=ee.length,Te=ae>>>1;I<Te;){var qe=2*(I+1)-1,Ye=ee[qe],Ke=qe+1,ce=ee[Ke];if(0>o(Ye,Z))Ke<ae&&0>o(ce,Ye)?(ee[I]=ce,ee[Ke]=Z,I=Ke):(ee[I]=Ye,ee[qe]=Z,I=qe);else if(Ke<ae&&0>o(ce,Z))ee[I]=ce,ee[Ke]=Z,I=Ke;else break e}}return K}function o(ee,K){var Z=ee.sortIndex-K.sortIndex;return Z!==0?Z:ee.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var f=[],h=[],g=1,v=null,m=3,S=!1,b=!1,P=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(ee){for(var K=t(h);K!==null;){if(K.callback===null)i(h);else if(K.startTime<=ee)i(h),K.sortIndex=K.expirationTime,e(f,K);else break;K=t(h)}}function C(ee){if(P=!1,z(ee),!b)if(t(f)!==null)b=!0,me(N);else{var K=t(h);K!==null&&se(C,K.startTime-ee)}}function N(ee,K){b=!1,P&&(P=!1,_(E),E=-1),S=!0;var Z=m;try{for(z(K),v=t(f);v!==null&&(!(v.expirationTime>K)||ee&&!H());){var I=v.callback;if(typeof I=="function"){v.callback=null,m=v.priorityLevel;var ae=I(v.expirationTime<=K);K=s.unstable_now(),typeof ae=="function"?v.callback=ae:v===t(f)&&i(f),z(K)}else i(f);v=t(f)}if(v!==null)var Te=!0;else{var qe=t(h);qe!==null&&se(C,qe.startTime-K),Te=!1}return Te}finally{v=null,m=Z,S=!1}}var D=!1,F=null,E=-1,L=5,k=-1;function H(){return!(s.unstable_now()-k<L)}function $(){if(F!==null){var ee=s.unstable_now();k=ee;var K=!0;try{K=F(!0,ee)}finally{K?te():(D=!1,F=null)}}else D=!1}var te;if(typeof A=="function")te=function(){A($)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ie=X.port2;X.port1.onmessage=$,te=function(){ie.postMessage(null)}}else te=function(){y($,0)};function me(ee){F=ee,D||(D=!0,te())}function se(ee,K){E=y(function(){ee(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ee){ee.callback=null},s.unstable_continueExecution=function(){b||S||(b=!0,me(N))},s.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<ee?Math.floor(1e3/ee):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(ee){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var Z=m;m=K;try{return ee()}finally{m=Z}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ee,K){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var Z=m;m=ee;try{return K()}finally{m=Z}},s.unstable_scheduleCallback=function(ee,K,Z){var I=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?I+Z:I):Z=I,ee){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Z+ae,ee={id:g++,callback:K,priorityLevel:ee,startTime:Z,expirationTime:ae,sortIndex:-1},Z>I?(ee.sortIndex=Z,e(h,ee),t(f)===null&&ee===t(h)&&(P?(_(E),E=-1):P=!0,se(C,Z-I))):(ee.sortIndex=ae,e(f,ee),b||S||(b=!0,me(N))),ee},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(ee){var K=m;return function(){var Z=m;m=K;try{return ee.apply(this,arguments)}finally{m=Z}}}})(gd)),gd}var qm;function d_(){return qm||(qm=1,md.exports=u_()),md.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function f_(){if(Km)return Si;Km=1;var s=nh(),e=d_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function m(n){return f.call(v,n)?!0:f.call(g,n)?!1:h.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,r,a,u){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,r,a,u){if(r===null||typeof r>"u"||S(n,r,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function P(n,r,a,u,p,x,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=x,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new P(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new P(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new P(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new P(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new P(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new P(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new P(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new P(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new P(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(_,A);y[r]=new P(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(_,A);y[r]=new P(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(_,A);y[r]=new P(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new P(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new P(n,1,!1,n.toLowerCase(),null,!0,!0)});function z(n,r,a,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(b(r,a,p,u)&&(a=null),u||p===null?m(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(r=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(r):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,r,a):n.setAttribute(r,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),D=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),H=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),ee=Symbol.iterator;function K(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,I;function ae(n){if(I===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+n}var Te=!1;function qe(n,r){if(!n||Te)return"";Te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var u=he}Reflect.construct(n,[],r)}else{try{r.call()}catch(he){u=he}n.call(r.prototype)}else{try{throw Error()}catch(he){u=he}n()}}catch(he){if(he&&u&&typeof he.stack=="string"){for(var p=he.stack.split(`
`),x=u.stack.split(`
`),T=p.length-1,B=x.length-1;1<=T&&0<=B&&p[T]!==x[B];)B--;for(;1<=T&&0<=B;T--,B--)if(p[T]!==x[B]){if(T!==1||B!==1)do if(T--,B--,0>B||p[T]!==x[B]){var V=`
`+p[T].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=T&&0<=B);break}}}finally{Te=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ae(n):""}function Ye(n){switch(n.tag){case 5:return ae(n.type);case 16:return ae("Lazy");case 13:return ae("Suspense");case 19:return ae("SuspenseList");case 0:case 2:case 15:return n=qe(n.type,!1),n;case 11:return n=qe(n.type.render,!1),n;case 1:return n=qe(n.type,!0),n;default:return""}}function Ke(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case D:return"Portal";case L:return"Profiler";case E:return"StrictMode";case te:return"Suspense";case X:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case $:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return r=n.displayName||null,r!==null?r:Ke(n.type)||"Memo";case me:r=n._payload,n=n._init;try{return Ke(n(r))}catch{}}return null}function ce(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ke(r);case 8:return r===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function at(n){var r=Ae(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,x=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,x.call(this,T)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ve(n){n._valueTracker||(n._valueTracker=at(n))}function Rt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),u="";return n&&(u=Ae(n)?n.checked?"true":"false":n.value),n=u,n!==a?(r.setValue(n),!0):!1}function sn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Tt(n,r){var a=r.checked;return Z({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function kt(n,r){var a=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;a=pe(r.value!=null?r.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Zt(n,r){r=r.checked,r!=null&&z(n,"checked",r,!1)}function Mt(n,r){Zt(n,r);var a=pe(r.value),u=r.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?cn(n,r.type,a):r.hasOwnProperty("defaultValue")&&cn(n,r.type,pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Xt(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function cn(n,r,a){(r!=="number"||sn(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var gn=Array.isArray;function $t(n,r,a,u){if(n=n.options,r){r={};for(var p=0;p<a.length;p++)r["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=r.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),r=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function on(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Y(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(gn(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:pe(a)}}function wn(n,r){var a=pe(r.value),u=pe(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function Ht(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?U(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var J,le=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,a,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(J=J||document.createElement("div"),J.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=J.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function fe(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Ne.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ee[r]=Ee[n]})});function ge(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+r).trim():r+"px"}function _e(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=ge(a,r[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var Ie=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tt(n,r){if(r){if(Ie[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ue(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function it(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ut=null,ht=null,j=null;function ve(n){if(n=ca(n)){if(typeof ut!="function")throw Error(t(280));var r=n.stateNode;r&&(r=al(r),ut(n.stateNode,n.type,r))}}function xe(n){ht?j?j.push(n):j=[n]:ht=n}function ye(){if(ht){var n=ht,r=j;if(j=ht=null,ve(n),r)for(n=0;n<r.length;n++)ve(r[n])}}function ke(n,r){return n(r)}function Me(){}var Je=!1;function Ze(n,r,a){if(Je)return n(r,a);Je=!0;try{return ke(n,r,a)}finally{Je=!1,(ht!==null||j!==null)&&(Me(),ye())}}function Vt(n,r){var a=n.stateNode;if(a===null)return null;var u=al(a);if(u===null)return null;a=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var yt=!1;if(d)try{var Gt={};Object.defineProperty(Gt,"passive",{get:function(){yt=!0}}),window.addEventListener("test",Gt,Gt),window.removeEventListener("test",Gt,Gt)}catch{yt=!1}function xn(n,r,a,u,p,x,T,B,V){var he=Array.prototype.slice.call(arguments,3);try{r.apply(a,he)}catch(we){this.onError(we)}}var Hi=!1,Vi=null,Sr=!1,Gi=null,$o={onError:function(n){Hi=!0,Vi=n}};function Wi(n,r,a,u,p,x,T,B,V){Hi=!1,Vi=null,xn.apply($o,arguments)}function Mr(n,r,a,u,p,x,T,B,V){if(Wi.apply(this,arguments),Hi){if(Hi){var he=Vi;Hi=!1,Vi=null}else throw Error(t(198));Sr||(Sr=!0,Gi=he)}}function An(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function hi(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ss(n){if(An(n)!==n)throw Error(t(188))}function Er(n){var r=n.alternate;if(!r){if(r=An(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,u=r;;){var p=a.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===a)return Ss(p),n;if(x===u)return Ss(p),r;x=x.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=x;else{for(var T=!1,B=p.child;B;){if(B===a){T=!0,a=p,u=x;break}if(B===u){T=!0,u=p,a=x;break}B=B.sibling}if(!T){for(B=x.child;B;){if(B===a){T=!0,a=x,u=p;break}if(B===u){T=!0,u=x,a=p;break}B=B.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function br(n){return n=Er(n),n!==null?$r(n):null}function $r(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=$r(n);if(r!==null)return r;n=n.sibling}return null}var Tr=e.unstable_scheduleCallback,Ms=e.unstable_cancelCallback,Qs=e.unstable_shouldYield,Yo=e.unstable_requestPaint,an=e.unstable_now,Ka=e.unstable_getCurrentPriorityLevel,Es=e.unstable_ImmediatePriority,bs=e.unstable_UserBlockingPriority,w=e.unstable_NormalPriority,W=e.unstable_LowPriority,de=e.unstable_IdlePriority,re=null,Q=null;function Fe(n){if(Q&&typeof Q.onCommitFiberRoot=="function")try{Q.onCommitFiberRoot(re,n,void 0,(n.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:et,Oe=Math.log,je=Math.LN2;function et(n){return n>>>=0,n===0?32:31-(Oe(n)/je|0)|0}var gt=64,_t=4194304;function Ge(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Lt(n,r){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,x=n.pingedLanes,T=a&268435455;if(T!==0){var B=T&~p;B!==0?u=Ge(B):(x&=T,x!==0&&(u=Ge(x)))}else T=a&~p,T!==0?u=Ge(T):x!==0&&(u=Ge(x));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,x=r&-r,p>=x||p===16&&(x&4194240)!==0))return r;if((u&4)!==0&&(u|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)a=31-Be(r),p=1<<a,u|=n[a],r&=~p;return u}function At(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jt(n,r){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var T=31-Be(x),B=1<<T,V=p[T];V===-1?((B&a)===0||(B&u)!==0)&&(p[T]=At(B,r)):V<=r&&(n.expiredLanes|=B),x&=~B}}function Wt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function tn(){var n=gt;return gt<<=1,(gt&4194240)===0&&(gt=64),n}function ze(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function hn(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Be(r),n[r]=a}function Pt(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Be(a),x=1<<p;r[p]=0,u[p]=-1,n[p]=-1,a&=~x}}function In(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var u=31-Be(a),p=1<<u;p&r|n[u]&r&&(n[u]|=r),a&=~p}}var O=0;function Pn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ji,Ft,nn,pi,Qt,mi=!1,ii=[],ri=null,Xi=null,$i=null,Yr=new Map,qr=new Map,Yi=[],Za="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qo(n,r){switch(n){case"focusin":case"focusout":ri=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Yr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":qr.delete(r.pointerId)}}function Kr(n,r,a,u,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:r,domEventName:a,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},r!==null&&(r=ca(r),r!==null&&Ft(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function eo(n,r,a,u,p){switch(r){case"focusin":return ri=Kr(ri,n,r,a,u,p),!0;case"dragenter":return Xi=Kr(Xi,n,r,a,u,p),!0;case"mouseover":return $i=Kr($i,n,r,a,u,p),!0;case"pointerover":var x=p.pointerId;return Yr.set(x,Kr(Yr.get(x)||null,n,r,a,u,p)),!0;case"gotpointercapture":return x=p.pointerId,qr.set(x,Kr(qr.get(x)||null,n,r,a,u,p)),!0}return!1}function Ko(n){var r=Ts(n.target);if(r!==null){var a=An(r);if(a!==null){if(r=a.tag,r===13){if(r=hi(a),r!==null){n.blockedOn=r,Qt(n.priority,function(){nn(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Zr(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=bt(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);De=u,a.target.dispatchEvent(u),De=null}else return r=ca(a),r!==null&&Ft(r),n.blockedOn=a,!1;r.shift()}return!0}function Zo(n,r,a){Zr(n)&&a.delete(r)}function Ja(){mi=!1,ri!==null&&Zr(ri)&&(ri=null),Xi!==null&&Zr(Xi)&&(Xi=null),$i!==null&&Zr($i)&&($i=null),Yr.forEach(Zo),qr.forEach(Zo)}function ne(n,r){n.blockedOn===r&&(n.blockedOn=null,mi||(mi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ja)))}function Se(n){function r(p){return ne(p,n)}if(0<ii.length){ne(ii[0],n);for(var a=1;a<ii.length;a++){var u=ii[a];u.blockedOn===n&&(u.blockedOn=null)}}for(ri!==null&&ne(ri,n),Xi!==null&&ne(Xi,n),$i!==null&&ne($i,n),Yr.forEach(r),qr.forEach(r),a=0;a<Yi.length;a++)u=Yi[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Yi.length&&(a=Yi[0],a.blockedOn===null);)Ko(a),a.blockedOn===null&&Yi.shift()}var Ce=C.ReactCurrentBatchConfig,Pe=!0;function We(n,r,a,u){var p=O,x=Ce.transition;Ce.transition=null;try{O=1,xt(n,r,a,u)}finally{O=p,Ce.transition=x}}function ft(n,r,a,u){var p=O,x=Ce.transition;Ce.transition=null;try{O=4,xt(n,r,a,u)}finally{O=p,Ce.transition=x}}function xt(n,r,a,u){if(Pe){var p=bt(n,r,a,u);if(p===null)nu(n,r,u,st,a),qo(n,u);else if(eo(p,n,r,a,u))u.stopPropagation();else if(qo(n,u),r&4&&-1<Za.indexOf(n)){for(;p!==null;){var x=ca(p);if(x!==null&&ji(x),x=bt(n,r,a,u),x===null&&nu(n,r,u,st,a),x===p)break;p=x}p!==null&&u.stopPropagation()}else nu(n,r,u,null,a)}}var st=null;function bt(n,r,a,u){if(st=null,n=it(u),n=Ts(n),n!==null)if(r=An(n),r===null)n=null;else if(a=r.tag,a===13){if(n=hi(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return st=n,null}function Yt(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ka()){case Es:return 1;case bs:return 4;case w:case W:return 16;case de:return 536870912;default:return 16}default:return 16}}var wt=null,rn=null,Mn=null;function Ot(){if(Mn)return Mn;var n,r=rn,a=r.length,u,p="value"in wt?wt.value:wt.textContent,x=p.length;for(n=0;n<a&&r[n]===p[n];n++);var T=a-n;for(u=1;u<=T&&r[a-u]===p[x-u];u++);return Mn=p.slice(n,1<u?1-u:void 0)}function lt(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function vt(){return!0}function si(){return!1}function $n(n){function r(a,u,p,x,T){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=T,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(x):x[B]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?vt:si,this.isPropagationStopped=si,this}return Z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vt)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vt)},persist:function(){},isPersistent:vt}),r}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qi=$n(oi),Jo=Z({},oi,{view:0,detail:0}),Nx=$n(Jo),Vc,Gc,Qo,Qa=Z({},Jo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qo&&(Qo&&n.type==="mousemove"?(Vc=n.screenX-Qo.screenX,Gc=n.screenY-Qo.screenY):Gc=Vc=0,Qo=n),Vc)},movementY:function(n){return"movementY"in n?n.movementY:Gc}}),Dh=$n(Qa),Dx=Z({},Qa,{dataTransfer:0}),Ix=$n(Dx),Ux=Z({},Jo,{relatedTarget:0}),Wc=$n(Ux),kx=Z({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=$n(kx),Ox=Z({},oi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Bx=$n(Ox),zx=Z({},oi,{data:0}),Ih=$n(zx),Hx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wx(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Gx[n])?!!r[n]:!1}function jc(){return Wx}var jx=Z({},Jo,{key:function(n){if(n.key){var r=Hx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=lt(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Vx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(n){return n.type==="keypress"?lt(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?lt(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Xx=$n(jx),$x=Z({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=$n($x),Yx=Z({},Jo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),qx=$n(Yx),Kx=Z({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zx=$n(Kx),Jx=Z({},Qa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=$n(Jx),ev=[9,13,27,32],Xc=d&&"CompositionEvent"in window,ea=null;d&&"documentMode"in document&&(ea=document.documentMode);var tv=d&&"TextEvent"in window&&!ea,kh=d&&(!Xc||ea&&8<ea&&11>=ea),Fh=" ",Oh=!1;function Bh(n,r){switch(n){case"keyup":return ev.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var to=!1;function nv(n,r){switch(n){case"compositionend":return zh(r);case"keypress":return r.which!==32?null:(Oh=!0,Fh);case"textInput":return n=r.data,n===Fh&&Oh?null:n;default:return null}}function iv(n,r){if(to)return n==="compositionend"||!Xc&&Bh(n,r)?(n=Ot(),Mn=rn=wt=null,to=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return kh&&r.locale!=="ko"?null:r.data;default:return null}}var rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!rv[n.type]:r==="textarea"}function Vh(n,r,a,u){xe(u),r=rl(r,"onChange"),0<r.length&&(a=new qi("onChange","change",null,a,u),n.push({event:a,listeners:r}))}var ta=null,na=null;function sv(n){op(n,0)}function el(n){var r=oo(n);if(Rt(r))return n}function ov(n,r){if(n==="change")return r}var Gh=!1;if(d){var $c;if(d){var Yc="oninput"in document;if(!Yc){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),Yc=typeof Wh.oninput=="function"}$c=Yc}else $c=!1;Gh=$c&&(!document.documentMode||9<document.documentMode)}function jh(){ta&&(ta.detachEvent("onpropertychange",Xh),na=ta=null)}function Xh(n){if(n.propertyName==="value"&&el(na)){var r=[];Vh(r,na,n,it(n)),Ze(sv,r)}}function av(n,r,a){n==="focusin"?(jh(),ta=r,na=a,ta.attachEvent("onpropertychange",Xh)):n==="focusout"&&jh()}function lv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return el(na)}function cv(n,r){if(n==="click")return el(r)}function uv(n,r){if(n==="input"||n==="change")return el(r)}function dv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ki=typeof Object.is=="function"?Object.is:dv;function ia(n,r){if(Ki(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),u=Object.keys(r);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!f.call(r,p)||!Ki(n[p],r[p]))return!1}return!0}function $h(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yh(n,r){var a=$h(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=r&&u>=r)return{node:a,offset:r-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$h(a)}}function qh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?qh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Kh(){for(var n=window,r=sn();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=sn(n.document)}return r}function qc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function fv(n){var r=Kh(),a=n.focusedElem,u=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&qh(a.ownerDocument.documentElement,a)){if(u!==null&&qc(a)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!n.extend&&x>u&&(p=u,u=x,x=p),p=Yh(a,x);var T=Yh(a,u);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),x>u?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var hv=d&&"documentMode"in document&&11>=document.documentMode,no=null,Kc=null,ra=null,Zc=!1;function Zh(n,r,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zc||no==null||no!==sn(u)||(u=no,"selectionStart"in u&&qc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ra&&ia(ra,u)||(ra=u,u=rl(Kc,"onSelect"),0<u.length&&(r=new qi("onSelect","select",null,r,a),n.push({event:r,listeners:u}),r.target=no)))}function tl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var io={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Jc={},Jh={};d&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function nl(n){if(Jc[n])return Jc[n];if(!io[n])return n;var r=io[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Jh)return Jc[n]=r[a];return n}var Qh=nl("animationend"),ep=nl("animationiteration"),tp=nl("animationstart"),np=nl("transitionend"),ip=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(n,r){ip.set(n,r),l(r,[n])}for(var Qc=0;Qc<rp.length;Qc++){var eu=rp[Qc],pv=eu.toLowerCase(),mv=eu[0].toUpperCase()+eu.slice(1);Jr(pv,"on"+mv)}Jr(Qh,"onAnimationEnd"),Jr(ep,"onAnimationIteration"),Jr(tp,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(np,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function sp(n,r,a){var u=n.type||"unknown-event";n.currentTarget=a,Mr(u,r,void 0,n),n.currentTarget=null}function op(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var x=void 0;if(r)for(var T=u.length-1;0<=T;T--){var B=u[T],V=B.instance,he=B.currentTarget;if(B=B.listener,V!==x&&p.isPropagationStopped())break e;sp(p,B,he),x=V}else for(T=0;T<u.length;T++){if(B=u[T],V=B.instance,he=B.currentTarget,B=B.listener,V!==x&&p.isPropagationStopped())break e;sp(p,B,he),x=V}}}if(Sr)throw n=Gi,Sr=!1,Gi=null,n}function un(n,r){var a=r[lu];a===void 0&&(a=r[lu]=new Set);var u=n+"__bubble";a.has(u)||(ap(r,n,2,!1),a.add(u))}function tu(n,r,a){var u=0;r&&(u|=4),ap(a,n,u,r)}var il="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[il]){n[il]=!0,i.forEach(function(a){a!=="selectionchange"&&(gv.has(a)||tu(a,!1,n),tu(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[il]||(r[il]=!0,tu("selectionchange",!1,r))}}function ap(n,r,a,u){switch(Yt(r)){case 1:var p=We;break;case 4:p=ft;break;default:p=xt}a=p.bind(null,r,a,n),p=void 0,!yt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,a,{capture:!0,passive:p}):n.addEventListener(r,a,!0):p!==void 0?n.addEventListener(r,a,{passive:p}):n.addEventListener(r,a,!1)}function nu(n,r,a,u,p){var x=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var B=u.stateNode.containerInfo;if(B===p||B.nodeType===8&&B.parentNode===p)break;if(T===4)for(T=u.return;T!==null;){var V=T.tag;if((V===3||V===4)&&(V=T.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;T=T.return}for(;B!==null;){if(T=Ts(B),T===null)return;if(V=T.tag,V===5||V===6){u=x=T;continue e}B=B.parentNode}}u=u.return}Ze(function(){var he=x,we=it(a),Re=[];e:{var be=ip.get(n);if(be!==void 0){var Xe=qi,nt=n;switch(n){case"keypress":if(lt(a)===0)break e;case"keydown":case"keyup":Xe=Xx;break;case"focusin":nt="focus",Xe=Wc;break;case"focusout":nt="blur",Xe=Wc;break;case"beforeblur":case"afterblur":Xe=Wc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=Dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=Ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=qx;break;case Qh:case ep:case tp:Xe=Fx;break;case np:Xe=Zx;break;case"scroll":Xe=Nx;break;case"wheel":Xe=Qx;break;case"copy":case"cut":case"paste":Xe=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=Uh}var ot=(r&4)!==0,Cn=!ot&&n==="scroll",oe=ot?be!==null?be+"Capture":null:be;ot=[];for(var q=he,ue;q!==null;){ue=q;var Le=ue.stateNode;if(ue.tag===5&&Le!==null&&(ue=Le,oe!==null&&(Le=Vt(q,oe),Le!=null&&ot.push(aa(q,Le,ue)))),Cn)break;q=q.return}0<ot.length&&(be=new Xe(be,nt,null,a,we),Re.push({event:be,listeners:ot}))}}if((r&7)===0){e:{if(be=n==="mouseover"||n==="pointerover",Xe=n==="mouseout"||n==="pointerout",be&&a!==De&&(nt=a.relatedTarget||a.fromElement)&&(Ts(nt)||nt[wr]))break e;if((Xe||be)&&(be=we.window===we?we:(be=we.ownerDocument)?be.defaultView||be.parentWindow:window,Xe?(nt=a.relatedTarget||a.toElement,Xe=he,nt=nt?Ts(nt):null,nt!==null&&(Cn=An(nt),nt!==Cn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(Xe=null,nt=he),Xe!==nt)){if(ot=Dh,Le="onMouseLeave",oe="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(ot=Uh,Le="onPointerLeave",oe="onPointerEnter",q="pointer"),Cn=Xe==null?be:oo(Xe),ue=nt==null?be:oo(nt),be=new ot(Le,q+"leave",Xe,a,we),be.target=Cn,be.relatedTarget=ue,Le=null,Ts(we)===he&&(ot=new ot(oe,q+"enter",nt,a,we),ot.target=ue,ot.relatedTarget=Cn,Le=ot),Cn=Le,Xe&&nt)t:{for(ot=Xe,oe=nt,q=0,ue=ot;ue;ue=ro(ue))q++;for(ue=0,Le=oe;Le;Le=ro(Le))ue++;for(;0<q-ue;)ot=ro(ot),q--;for(;0<ue-q;)oe=ro(oe),ue--;for(;q--;){if(ot===oe||oe!==null&&ot===oe.alternate)break t;ot=ro(ot),oe=ro(oe)}ot=null}else ot=null;Xe!==null&&lp(Re,be,Xe,ot,!1),nt!==null&&Cn!==null&&lp(Re,Cn,nt,ot,!0)}}e:{if(be=he?oo(he):window,Xe=be.nodeName&&be.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&be.type==="file")var ct=ov;else if(Hh(be))if(Gh)ct=uv;else{ct=lv;var pt=av}else(Xe=be.nodeName)&&Xe.toLowerCase()==="input"&&(be.type==="checkbox"||be.type==="radio")&&(ct=cv);if(ct&&(ct=ct(n,he))){Vh(Re,ct,a,we);break e}pt&&pt(n,be,he),n==="focusout"&&(pt=be._wrapperState)&&pt.controlled&&be.type==="number"&&cn(be,"number",be.value)}switch(pt=he?oo(he):window,n){case"focusin":(Hh(pt)||pt.contentEditable==="true")&&(no=pt,Kc=he,ra=null);break;case"focusout":ra=Kc=no=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,Zh(Re,a,we);break;case"selectionchange":if(hv)break;case"keydown":case"keyup":Zh(Re,a,we)}var mt;if(Xc)e:{switch(n){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else to?Bh(n,a)&&(St="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(kh&&a.locale!=="ko"&&(to||St!=="onCompositionStart"?St==="onCompositionEnd"&&to&&(mt=Ot()):(wt=we,rn="value"in wt?wt.value:wt.textContent,to=!0)),pt=rl(he,St),0<pt.length&&(St=new Ih(St,n,null,a,we),Re.push({event:St,listeners:pt}),mt?St.data=mt:(mt=zh(a),mt!==null&&(St.data=mt)))),(mt=tv?nv(n,a):iv(n,a))&&(he=rl(he,"onBeforeInput"),0<he.length&&(we=new Ih("onBeforeInput","beforeinput",null,a,we),Re.push({event:we,listeners:he}),we.data=mt))}op(Re,r)})}function aa(n,r,a){return{instance:n,listener:r,currentTarget:a}}function rl(n,r){for(var a=r+"Capture",u=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Vt(n,a),x!=null&&u.unshift(aa(n,x,p)),x=Vt(n,r),x!=null&&u.push(aa(n,x,p))),n=n.return}return u}function ro(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lp(n,r,a,u,p){for(var x=r._reactName,T=[];a!==null&&a!==u;){var B=a,V=B.alternate,he=B.stateNode;if(V!==null&&V===u)break;B.tag===5&&he!==null&&(B=he,p?(V=Vt(a,x),V!=null&&T.unshift(aa(a,V,B))):p||(V=Vt(a,x),V!=null&&T.push(aa(a,V,B)))),a=a.return}T.length!==0&&n.push({event:r,listeners:T})}var xv=/\r\n?/g,vv=/\u0000|\uFFFD/g;function cp(n){return(typeof n=="string"?n:""+n).replace(xv,`
`).replace(vv,"")}function sl(n,r,a){if(r=cp(r),cp(n)!==r&&a)throw Error(t(425))}function ol(){}var iu=null,ru=null;function su(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,_v=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,yv=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(n){return up.resolve(null).then(n).catch(Sv)}:ou;function Sv(n){setTimeout(function(){throw n})}function au(n,r){var a=r,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),Se(r);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);Se(r)}function Qr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function dp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var so=Math.random().toString(36).slice(2),cr="__reactFiber$"+so,la="__reactProps$"+so,wr="__reactContainer$"+so,lu="__reactEvents$"+so,Mv="__reactListeners$"+so,Ev="__reactHandles$"+so;function Ts(n){var r=n[cr];if(r)return r;for(var a=n.parentNode;a;){if(r=a[wr]||a[cr]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=dp(n);n!==null;){if(a=n[cr])return a;n=dp(n)}return r}n=a,a=n.parentNode}return null}function ca(n){return n=n[cr]||n[wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function oo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function al(n){return n[la]||null}var cu=[],ao=-1;function es(n){return{current:n}}function dn(n){0>ao||(n.current=cu[ao],cu[ao]=null,ao--)}function ln(n,r){ao++,cu[ao]=n.current,n.current=r}var ts={},Yn=es(ts),gi=es(!1),ws=ts;function lo(n,r){var a=n.type.contextTypes;if(!a)return ts;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in a)p[x]=r[x];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function xi(n){return n=n.childContextTypes,n!=null}function ll(){dn(gi),dn(Yn)}function fp(n,r,a){if(Yn.current!==ts)throw Error(t(168));ln(Yn,r),ln(gi,a)}function hp(n,r,a){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,ce(n)||"Unknown",p));return Z({},a,u)}function cl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ts,ws=Yn.current,ln(Yn,n),ln(gi,gi.current),!0}function pp(n,r,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=hp(n,r,ws),u.__reactInternalMemoizedMergedChildContext=n,dn(gi),dn(Yn),ln(Yn,n)):dn(gi),ln(gi,a)}var Cr=null,ul=!1,uu=!1;function mp(n){Cr===null?Cr=[n]:Cr.push(n)}function bv(n){ul=!0,mp(n)}function ns(){if(!uu&&Cr!==null){uu=!0;var n=0,r=O;try{var a=Cr;for(O=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Cr=null,ul=!1}catch(p){throw Cr!==null&&(Cr=Cr.slice(n+1)),Tr(Es,ns),p}finally{O=r,uu=!1}}return null}var co=[],uo=0,dl=null,fl=0,Ni=[],Di=0,Cs=null,Rr=1,Ar="";function Rs(n,r){co[uo++]=fl,co[uo++]=dl,dl=n,fl=r}function gp(n,r,a){Ni[Di++]=Rr,Ni[Di++]=Ar,Ni[Di++]=Cs,Cs=n;var u=Rr;n=Ar;var p=32-Be(u)-1;u&=~(1<<p),a+=1;var x=32-Be(r)+p;if(30<x){var T=p-p%5;x=(u&(1<<T)-1).toString(32),u>>=T,p-=T,Rr=1<<32-Be(r)+p|a<<p|u,Ar=x+n}else Rr=1<<x|a<<p|u,Ar=n}function du(n){n.return!==null&&(Rs(n,1),gp(n,1,0))}function fu(n){for(;n===dl;)dl=co[--uo],co[uo]=null,fl=co[--uo],co[uo]=null;for(;n===Cs;)Cs=Ni[--Di],Ni[Di]=null,Ar=Ni[--Di],Ni[Di]=null,Rr=Ni[--Di],Ni[Di]=null}var Ti=null,wi=null,pn=!1,Zi=null;function xp(n,r){var a=Fi(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function vp(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Ti=n,wi=Qr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Ti=n,wi=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Cs!==null?{id:Rr,overflow:Ar}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Fi(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,Ti=n,wi=null,!0):!1;default:return!1}}function hu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function pu(n){if(pn){var r=wi;if(r){var a=r;if(!vp(n,r)){if(hu(n))throw Error(t(418));r=Qr(a.nextSibling);var u=Ti;r&&vp(n,r)?xp(u,a):(n.flags=n.flags&-4097|2,pn=!1,Ti=n)}}else{if(hu(n))throw Error(t(418));n.flags=n.flags&-4097|2,pn=!1,Ti=n}}}function _p(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ti=n}function hl(n){if(n!==Ti)return!1;if(!pn)return _p(n),pn=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!su(n.type,n.memoizedProps)),r&&(r=wi)){if(hu(n))throw yp(),Error(t(418));for(;r;)xp(n,r),r=Qr(r.nextSibling)}if(_p(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){wi=Qr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}wi=null}}else wi=Ti?Qr(n.stateNode.nextSibling):null;return!0}function yp(){for(var n=wi;n;)n=Qr(n.nextSibling)}function fo(){wi=Ti=null,pn=!1}function mu(n){Zi===null?Zi=[n]:Zi.push(n)}var Tv=C.ReactCurrentBatchConfig;function ua(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,x=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(T){var B=p.refs;T===null?delete B[x]:B[x]=T},r._stringRef=x,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function pl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Sp(n){var r=n._init;return r(n._payload)}function Mp(n){function r(oe,q){if(n){var ue=oe.deletions;ue===null?(oe.deletions=[q],oe.flags|=16):ue.push(q)}}function a(oe,q){if(!n)return null;for(;q!==null;)r(oe,q),q=q.sibling;return null}function u(oe,q){for(oe=new Map;q!==null;)q.key!==null?oe.set(q.key,q):oe.set(q.index,q),q=q.sibling;return oe}function p(oe,q){return oe=us(oe,q),oe.index=0,oe.sibling=null,oe}function x(oe,q,ue){return oe.index=ue,n?(ue=oe.alternate,ue!==null?(ue=ue.index,ue<q?(oe.flags|=2,q):ue):(oe.flags|=2,q)):(oe.flags|=1048576,q)}function T(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function B(oe,q,ue,Le){return q===null||q.tag!==6?(q=od(ue,oe.mode,Le),q.return=oe,q):(q=p(q,ue),q.return=oe,q)}function V(oe,q,ue,Le){var ct=ue.type;return ct===F?we(oe,q,ue.props.children,Le,ue.key):q!==null&&(q.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===me&&Sp(ct)===q.type)?(Le=p(q,ue.props),Le.ref=ua(oe,q,ue),Le.return=oe,Le):(Le=Ol(ue.type,ue.key,ue.props,null,oe.mode,Le),Le.ref=ua(oe,q,ue),Le.return=oe,Le)}function he(oe,q,ue,Le){return q===null||q.tag!==4||q.stateNode.containerInfo!==ue.containerInfo||q.stateNode.implementation!==ue.implementation?(q=ad(ue,oe.mode,Le),q.return=oe,q):(q=p(q,ue.children||[]),q.return=oe,q)}function we(oe,q,ue,Le,ct){return q===null||q.tag!==7?(q=ks(ue,oe.mode,Le,ct),q.return=oe,q):(q=p(q,ue),q.return=oe,q)}function Re(oe,q,ue){if(typeof q=="string"&&q!==""||typeof q=="number")return q=od(""+q,oe.mode,ue),q.return=oe,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case N:return ue=Ol(q.type,q.key,q.props,null,oe.mode,ue),ue.ref=ua(oe,null,q),ue.return=oe,ue;case D:return q=ad(q,oe.mode,ue),q.return=oe,q;case me:var Le=q._init;return Re(oe,Le(q._payload),ue)}if(gn(q)||K(q))return q=ks(q,oe.mode,ue,null),q.return=oe,q;pl(oe,q)}return null}function be(oe,q,ue,Le){var ct=q!==null?q.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return ct!==null?null:B(oe,q,""+ue,Le);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case N:return ue.key===ct?V(oe,q,ue,Le):null;case D:return ue.key===ct?he(oe,q,ue,Le):null;case me:return ct=ue._init,be(oe,q,ct(ue._payload),Le)}if(gn(ue)||K(ue))return ct!==null?null:we(oe,q,ue,Le,null);pl(oe,ue)}return null}function Xe(oe,q,ue,Le,ct){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return oe=oe.get(ue)||null,B(q,oe,""+Le,ct);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case N:return oe=oe.get(Le.key===null?ue:Le.key)||null,V(q,oe,Le,ct);case D:return oe=oe.get(Le.key===null?ue:Le.key)||null,he(q,oe,Le,ct);case me:var pt=Le._init;return Xe(oe,q,ue,pt(Le._payload),ct)}if(gn(Le)||K(Le))return oe=oe.get(ue)||null,we(q,oe,Le,ct,null);pl(q,Le)}return null}function nt(oe,q,ue,Le){for(var ct=null,pt=null,mt=q,St=q=0,Hn=null;mt!==null&&St<ue.length;St++){mt.index>St?(Hn=mt,mt=null):Hn=mt.sibling;var qt=be(oe,mt,ue[St],Le);if(qt===null){mt===null&&(mt=Hn);break}n&&mt&&qt.alternate===null&&r(oe,mt),q=x(qt,q,St),pt===null?ct=qt:pt.sibling=qt,pt=qt,mt=Hn}if(St===ue.length)return a(oe,mt),pn&&Rs(oe,St),ct;if(mt===null){for(;St<ue.length;St++)mt=Re(oe,ue[St],Le),mt!==null&&(q=x(mt,q,St),pt===null?ct=mt:pt.sibling=mt,pt=mt);return pn&&Rs(oe,St),ct}for(mt=u(oe,mt);St<ue.length;St++)Hn=Xe(mt,oe,St,ue[St],Le),Hn!==null&&(n&&Hn.alternate!==null&&mt.delete(Hn.key===null?St:Hn.key),q=x(Hn,q,St),pt===null?ct=Hn:pt.sibling=Hn,pt=Hn);return n&&mt.forEach(function(ds){return r(oe,ds)}),pn&&Rs(oe,St),ct}function ot(oe,q,ue,Le){var ct=K(ue);if(typeof ct!="function")throw Error(t(150));if(ue=ct.call(ue),ue==null)throw Error(t(151));for(var pt=ct=null,mt=q,St=q=0,Hn=null,qt=ue.next();mt!==null&&!qt.done;St++,qt=ue.next()){mt.index>St?(Hn=mt,mt=null):Hn=mt.sibling;var ds=be(oe,mt,qt.value,Le);if(ds===null){mt===null&&(mt=Hn);break}n&&mt&&ds.alternate===null&&r(oe,mt),q=x(ds,q,St),pt===null?ct=ds:pt.sibling=ds,pt=ds,mt=Hn}if(qt.done)return a(oe,mt),pn&&Rs(oe,St),ct;if(mt===null){for(;!qt.done;St++,qt=ue.next())qt=Re(oe,qt.value,Le),qt!==null&&(q=x(qt,q,St),pt===null?ct=qt:pt.sibling=qt,pt=qt);return pn&&Rs(oe,St),ct}for(mt=u(oe,mt);!qt.done;St++,qt=ue.next())qt=Xe(mt,oe,St,qt.value,Le),qt!==null&&(n&&qt.alternate!==null&&mt.delete(qt.key===null?St:qt.key),q=x(qt,q,St),pt===null?ct=qt:pt.sibling=qt,pt=qt);return n&&mt.forEach(function(r_){return r(oe,r_)}),pn&&Rs(oe,St),ct}function Cn(oe,q,ue,Le){if(typeof ue=="object"&&ue!==null&&ue.type===F&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case N:e:{for(var ct=ue.key,pt=q;pt!==null;){if(pt.key===ct){if(ct=ue.type,ct===F){if(pt.tag===7){a(oe,pt.sibling),q=p(pt,ue.props.children),q.return=oe,oe=q;break e}}else if(pt.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===me&&Sp(ct)===pt.type){a(oe,pt.sibling),q=p(pt,ue.props),q.ref=ua(oe,pt,ue),q.return=oe,oe=q;break e}a(oe,pt);break}else r(oe,pt);pt=pt.sibling}ue.type===F?(q=ks(ue.props.children,oe.mode,Le,ue.key),q.return=oe,oe=q):(Le=Ol(ue.type,ue.key,ue.props,null,oe.mode,Le),Le.ref=ua(oe,q,ue),Le.return=oe,oe=Le)}return T(oe);case D:e:{for(pt=ue.key;q!==null;){if(q.key===pt)if(q.tag===4&&q.stateNode.containerInfo===ue.containerInfo&&q.stateNode.implementation===ue.implementation){a(oe,q.sibling),q=p(q,ue.children||[]),q.return=oe,oe=q;break e}else{a(oe,q);break}else r(oe,q);q=q.sibling}q=ad(ue,oe.mode,Le),q.return=oe,oe=q}return T(oe);case me:return pt=ue._init,Cn(oe,q,pt(ue._payload),Le)}if(gn(ue))return nt(oe,q,ue,Le);if(K(ue))return ot(oe,q,ue,Le);pl(oe,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,q!==null&&q.tag===6?(a(oe,q.sibling),q=p(q,ue),q.return=oe,oe=q):(a(oe,q),q=od(ue,oe.mode,Le),q.return=oe,oe=q),T(oe)):a(oe,q)}return Cn}var ho=Mp(!0),Ep=Mp(!1),ml=es(null),gl=null,po=null,gu=null;function xu(){gu=po=gl=null}function vu(n){var r=ml.current;dn(ml),n._currentValue=r}function _u(n,r,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===a)break;n=n.return}}function mo(n,r){gl=n,gu=po=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(vi=!0),n.firstContext=null)}function Ii(n){var r=n._currentValue;if(gu!==n)if(n={context:n,memoizedValue:r,next:null},po===null){if(gl===null)throw Error(t(308));po=n,gl.dependencies={lanes:0,firstContext:n}}else po=po.next=n;return r}var As=null;function yu(n){As===null?As=[n]:As.push(n)}function bp(n,r,a,u){var p=r.interleaved;return p===null?(a.next=a,yu(r)):(a.next=p.next,p.next=a),r.interleaved=a,Pr(n,u)}function Pr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var is=!1;function Su(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Lr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function rs(n,r,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(jt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,Pr(n,a)}return p=u.interleaved,p===null?(r.next=r,yu(u)):(r.next=p.next,p.next=r),u.interleaved=r,Pr(n,a)}function xl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,In(n,a)}}function wp(n,r){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?p=x=T:x=x.next=T,a=a.next}while(a!==null);x===null?p=x=r:x=x.next=r}else p=x=r;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function vl(n,r,a,u){var p=n.updateQueue;is=!1;var x=p.firstBaseUpdate,T=p.lastBaseUpdate,B=p.shared.pending;if(B!==null){p.shared.pending=null;var V=B,he=V.next;V.next=null,T===null?x=he:T.next=he,T=V;var we=n.alternate;we!==null&&(we=we.updateQueue,B=we.lastBaseUpdate,B!==T&&(B===null?we.firstBaseUpdate=he:B.next=he,we.lastBaseUpdate=V))}if(x!==null){var Re=p.baseState;T=0,we=he=V=null,B=x;do{var be=B.lane,Xe=B.eventTime;if((u&be)===be){we!==null&&(we=we.next={eventTime:Xe,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var nt=n,ot=B;switch(be=r,Xe=a,ot.tag){case 1:if(nt=ot.payload,typeof nt=="function"){Re=nt.call(Xe,Re,be);break e}Re=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=ot.payload,be=typeof nt=="function"?nt.call(Xe,Re,be):nt,be==null)break e;Re=Z({},Re,be);break e;case 2:is=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,be=p.effects,be===null?p.effects=[B]:be.push(B))}else Xe={eventTime:Xe,lane:be,tag:B.tag,payload:B.payload,callback:B.callback,next:null},we===null?(he=we=Xe,V=Re):we=we.next=Xe,T|=be;if(B=B.next,B===null){if(B=p.shared.pending,B===null)break;be=B,B=be.next,be.next=null,p.lastBaseUpdate=be,p.shared.pending=null}}while(!0);if(we===null&&(V=Re),p.baseState=V,p.firstBaseUpdate=he,p.lastBaseUpdate=we,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else x===null&&(p.shared.lanes=0);Ns|=T,n.lanes=T,n.memoizedState=Re}}function Cp(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var da={},ur=es(da),fa=es(da),ha=es(da);function Ps(n){if(n===da)throw Error(t(174));return n}function Mu(n,r){switch(ln(ha,r),ln(fa,n),ln(ur,da),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:M(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=M(r,n)}dn(ur),ln(ur,r)}function go(){dn(ur),dn(fa),dn(ha)}function Rp(n){Ps(ha.current);var r=Ps(ur.current),a=M(r,n.type);r!==a&&(ln(fa,n),ln(ur,a))}function Eu(n){fa.current===n&&(dn(ur),dn(fa))}var vn=es(0);function _l(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var bu=[];function Tu(){for(var n=0;n<bu.length;n++)bu[n]._workInProgressVersionPrimary=null;bu.length=0}var yl=C.ReactCurrentDispatcher,wu=C.ReactCurrentBatchConfig,Ls=0,_n=null,Un=null,Bn=null,Sl=!1,pa=!1,ma=0,wv=0;function qn(){throw Error(t(321))}function Cu(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Ki(n[a],r[a]))return!1;return!0}function Ru(n,r,a,u,p,x){if(Ls=x,_n=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,yl.current=n===null||n.memoizedState===null?Pv:Lv,n=a(u,p),pa){x=0;do{if(pa=!1,ma=0,25<=x)throw Error(t(301));x+=1,Bn=Un=null,r.updateQueue=null,yl.current=Nv,n=a(u,p)}while(pa)}if(yl.current=bl,r=Un!==null&&Un.next!==null,Ls=0,Bn=Un=_n=null,Sl=!1,r)throw Error(t(300));return n}function Au(){var n=ma!==0;return ma=0,n}function dr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bn===null?_n.memoizedState=Bn=n:Bn=Bn.next=n,Bn}function Ui(){if(Un===null){var n=_n.alternate;n=n!==null?n.memoizedState:null}else n=Un.next;var r=Bn===null?_n.memoizedState:Bn.next;if(r!==null)Bn=r,Un=n;else{if(n===null)throw Error(t(310));Un=n,n={memoizedState:Un.memoizedState,baseState:Un.baseState,baseQueue:Un.baseQueue,queue:Un.queue,next:null},Bn===null?_n.memoizedState=Bn=n:Bn=Bn.next=n}return Bn}function ga(n,r){return typeof r=="function"?r(n):r}function Pu(n){var r=Ui(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Un,p=u.baseQueue,x=a.pending;if(x!==null){if(p!==null){var T=p.next;p.next=x.next,x.next=T}u.baseQueue=p=x,a.pending=null}if(p!==null){x=p.next,u=u.baseState;var B=T=null,V=null,he=x;do{var we=he.lane;if((Ls&we)===we)V!==null&&(V=V.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),u=he.hasEagerState?he.eagerState:n(u,he.action);else{var Re={lane:we,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};V===null?(B=V=Re,T=u):V=V.next=Re,_n.lanes|=we,Ns|=we}he=he.next}while(he!==null&&he!==x);V===null?T=u:V.next=B,Ki(u,r.memoizedState)||(vi=!0),r.memoizedState=u,r.baseState=T,r.baseQueue=V,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do x=p.lane,_n.lanes|=x,Ns|=x,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Lu(n){var r=Ui(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,x=r.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do x=n(x,T.action),T=T.next;while(T!==p);Ki(x,r.memoizedState)||(vi=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),a.lastRenderedState=x}return[x,u]}function Ap(){}function Pp(n,r){var a=_n,u=Ui(),p=r(),x=!Ki(u.memoizedState,p);if(x&&(u.memoizedState=p,vi=!0),u=u.queue,Nu(Dp.bind(null,a,u,n),[n]),u.getSnapshot!==r||x||Bn!==null&&Bn.memoizedState.tag&1){if(a.flags|=2048,xa(9,Np.bind(null,a,u,p,r),void 0,null),zn===null)throw Error(t(349));(Ls&30)!==0||Lp(a,r,p)}return p}function Lp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=_n.updateQueue,r===null?(r={lastEffect:null,stores:null},_n.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function Np(n,r,a,u){r.value=a,r.getSnapshot=u,Ip(r)&&Up(n)}function Dp(n,r,a){return a(function(){Ip(r)&&Up(n)})}function Ip(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Ki(n,a)}catch{return!0}}function Up(n){var r=Pr(n,1);r!==null&&tr(r,n,1,-1)}function kp(n){var r=dr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:n},r.queue=n,n=n.dispatch=Av.bind(null,_n,n),[r.memoizedState,n]}function xa(n,r,a,u){return n={tag:n,create:r,destroy:a,deps:u,next:null},r=_n.updateQueue,r===null?(r={lastEffect:null,stores:null},_n.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,r.lastEffect=n)),n}function Fp(){return Ui().memoizedState}function Ml(n,r,a,u){var p=dr();_n.flags|=n,p.memoizedState=xa(1|r,a,void 0,u===void 0?null:u)}function El(n,r,a,u){var p=Ui();u=u===void 0?null:u;var x=void 0;if(Un!==null){var T=Un.memoizedState;if(x=T.destroy,u!==null&&Cu(u,T.deps)){p.memoizedState=xa(r,a,x,u);return}}_n.flags|=n,p.memoizedState=xa(1|r,a,x,u)}function Op(n,r){return Ml(8390656,8,n,r)}function Nu(n,r){return El(2048,8,n,r)}function Bp(n,r){return El(4,2,n,r)}function zp(n,r){return El(4,4,n,r)}function Hp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Vp(n,r,a){return a=a!=null?a.concat([n]):null,El(4,4,Hp.bind(null,r,n),a)}function Du(){}function Gp(n,r){var a=Ui();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Cu(r,u[1])?u[0]:(a.memoizedState=[n,r],n)}function Wp(n,r){var a=Ui();r=r===void 0?null:r;var u=a.memoizedState;return u!==null&&r!==null&&Cu(r,u[1])?u[0]:(n=n(),a.memoizedState=[n,r],n)}function jp(n,r,a){return(Ls&21)===0?(n.baseState&&(n.baseState=!1,vi=!0),n.memoizedState=a):(Ki(a,r)||(a=tn(),_n.lanes|=a,Ns|=a,n.baseState=!0),r)}function Cv(n,r){var a=O;O=a!==0&&4>a?a:4,n(!0);var u=wu.transition;wu.transition={};try{n(!1),r()}finally{O=a,wu.transition=u}}function Xp(){return Ui().memoizedState}function Rv(n,r,a){var u=ls(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},$p(n))Yp(r,a);else if(a=bp(n,r,a,u),a!==null){var p=li();tr(a,n,u,p),qp(a,r,u)}}function Av(n,r,a){var u=ls(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if($p(n))Yp(r,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var T=r.lastRenderedState,B=x(T,a);if(p.hasEagerState=!0,p.eagerState=B,Ki(B,T)){var V=r.interleaved;V===null?(p.next=p,yu(r)):(p.next=V.next,V.next=p),r.interleaved=p;return}}catch{}finally{}a=bp(n,r,p,u),a!==null&&(p=li(),tr(a,n,u,p),qp(a,r,u))}}function $p(n){var r=n.alternate;return n===_n||r!==null&&r===_n}function Yp(n,r){pa=Sl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function qp(n,r,a){if((a&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,a|=u,r.lanes=a,In(n,a)}}var bl={readContext:Ii,useCallback:qn,useContext:qn,useEffect:qn,useImperativeHandle:qn,useInsertionEffect:qn,useLayoutEffect:qn,useMemo:qn,useReducer:qn,useRef:qn,useState:qn,useDebugValue:qn,useDeferredValue:qn,useTransition:qn,useMutableSource:qn,useSyncExternalStore:qn,useId:qn,unstable_isNewReconciler:!1},Pv={readContext:Ii,useCallback:function(n,r){return dr().memoizedState=[n,r===void 0?null:r],n},useContext:Ii,useEffect:Op,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,Ml(4194308,4,Hp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return Ml(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ml(4,2,n,r)},useMemo:function(n,r){var a=dr();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var u=dr();return r=a!==void 0?a(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Rv.bind(null,_n,n),[u.memoizedState,n]},useRef:function(n){var r=dr();return n={current:n},r.memoizedState=n},useState:kp,useDebugValue:Du,useDeferredValue:function(n){return dr().memoizedState=n},useTransition:function(){var n=kp(!1),r=n[0];return n=Cv.bind(null,n[1]),dr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var u=_n,p=dr();if(pn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),zn===null)throw Error(t(349));(Ls&30)!==0||Lp(u,r,a)}p.memoizedState=a;var x={value:a,getSnapshot:r};return p.queue=x,Op(Dp.bind(null,u,x,n),[n]),u.flags|=2048,xa(9,Np.bind(null,u,x,a,r),void 0,null),a},useId:function(){var n=dr(),r=zn.identifierPrefix;if(pn){var a=Ar,u=Rr;a=(u&~(1<<32-Be(u)-1)).toString(32)+a,r=":"+r+"R"+a,a=ma++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=wv++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Lv={readContext:Ii,useCallback:Gp,useContext:Ii,useEffect:Nu,useImperativeHandle:Vp,useInsertionEffect:Bp,useLayoutEffect:zp,useMemo:Wp,useReducer:Pu,useRef:Fp,useState:function(){return Pu(ga)},useDebugValue:Du,useDeferredValue:function(n){var r=Ui();return jp(r,Un.memoizedState,n)},useTransition:function(){var n=Pu(ga)[0],r=Ui().memoizedState;return[n,r]},useMutableSource:Ap,useSyncExternalStore:Pp,useId:Xp,unstable_isNewReconciler:!1},Nv={readContext:Ii,useCallback:Gp,useContext:Ii,useEffect:Nu,useImperativeHandle:Vp,useInsertionEffect:Bp,useLayoutEffect:zp,useMemo:Wp,useReducer:Lu,useRef:Fp,useState:function(){return Lu(ga)},useDebugValue:Du,useDeferredValue:function(n){var r=Ui();return Un===null?r.memoizedState=n:jp(r,Un.memoizedState,n)},useTransition:function(){var n=Lu(ga)[0],r=Ui().memoizedState;return[n,r]},useMutableSource:Ap,useSyncExternalStore:Pp,useId:Xp,unstable_isNewReconciler:!1};function Ji(n,r){if(n&&n.defaultProps){r=Z({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function Iu(n,r,a,u){r=n.memoizedState,a=a(u,r),a=a==null?r:Z({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Tl={isMounted:function(n){return(n=n._reactInternals)?An(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var u=li(),p=ls(n),x=Lr(u,p);x.payload=r,a!=null&&(x.callback=a),r=rs(n,x,p),r!==null&&(tr(r,n,p,u),xl(r,n,p))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var u=li(),p=ls(n),x=Lr(u,p);x.tag=1,x.payload=r,a!=null&&(x.callback=a),r=rs(n,x,p),r!==null&&(tr(r,n,p,u),xl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=li(),u=ls(n),p=Lr(a,u);p.tag=2,r!=null&&(p.callback=r),r=rs(n,p,u),r!==null&&(tr(r,n,u,a),xl(r,n,u))}};function Kp(n,r,a,u,p,x,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,x,T):r.prototype&&r.prototype.isPureReactComponent?!ia(a,u)||!ia(p,x):!0}function Zp(n,r,a){var u=!1,p=ts,x=r.contextType;return typeof x=="object"&&x!==null?x=Ii(x):(p=xi(r)?ws:Yn.current,u=r.contextTypes,x=(u=u!=null)?lo(n,p):ts),r=new r(a,x),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Tl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),r}function Jp(n,r,a,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,u),r.state!==n&&Tl.enqueueReplaceState(r,r.state,null)}function Uu(n,r,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},Su(n);var x=r.contextType;typeof x=="object"&&x!==null?p.context=Ii(x):(x=xi(r)?ws:Yn.current,p.context=lo(n,x)),p.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Iu(n,r,x,a),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Tl.enqueueReplaceState(p,p.state,null),vl(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function xo(n,r){try{var a="",u=r;do a+=Ye(u),u=u.return;while(u);var p=a}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:r,stack:p,digest:null}}function ku(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function Fu(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Dv=typeof WeakMap=="function"?WeakMap:Map;function Qp(n,r,a){a=Lr(-1,a),a.tag=3,a.payload={element:null};var u=r.value;return a.callback=function(){Nl||(Nl=!0,Ju=u),Fu(n,r)},a}function em(n,r,a){a=Lr(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;a.payload=function(){return u(p)},a.callback=function(){Fu(n,r)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){Fu(n,r),typeof u!="function"&&(os===null?os=new Set([this]):os.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),a}function tm(n,r,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Dv;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(a)||(p.add(a),n=$v.bind(null,n,r,a),r.then(n,n))}function nm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function im(n,r,a,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Lr(-1,1),r.tag=2,rs(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Iv=C.ReactCurrentOwner,vi=!1;function ai(n,r,a,u){r.child=n===null?Ep(r,null,a,u):ho(r,n.child,a,u)}function rm(n,r,a,u,p){a=a.render;var x=r.ref;return mo(r,p),u=Ru(n,r,a,u,x,p),a=Au(),n!==null&&!vi?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Nr(n,r,p)):(pn&&a&&du(r),r.flags|=1,ai(n,r,u,p),r.child)}function sm(n,r,a,u,p){if(n===null){var x=a.type;return typeof x=="function"&&!sd(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=x,om(n,r,x,u,p)):(n=Ol(a.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(x=n.child,(n.lanes&p)===0){var T=x.memoizedProps;if(a=a.compare,a=a!==null?a:ia,a(T,u)&&n.ref===r.ref)return Nr(n,r,p)}return r.flags|=1,n=us(x,u),n.ref=r.ref,n.return=r,r.child=n}function om(n,r,a,u,p){if(n!==null){var x=n.memoizedProps;if(ia(x,u)&&n.ref===r.ref)if(vi=!1,r.pendingProps=u=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(vi=!0);else return r.lanes=n.lanes,Nr(n,r,p)}return Ou(n,r,a,u,p)}function am(n,r,a){var u=r.pendingProps,p=u.children,x=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ln(_o,Ci),Ci|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,ln(_o,Ci),Ci|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:a,ln(_o,Ci),Ci|=u}else x!==null?(u=x.baseLanes|a,r.memoizedState=null):u=a,ln(_o,Ci),Ci|=u;return ai(n,r,p,a),r.child}function lm(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Ou(n,r,a,u,p){var x=xi(a)?ws:Yn.current;return x=lo(r,x),mo(r,p),a=Ru(n,r,a,u,x,p),u=Au(),n!==null&&!vi?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Nr(n,r,p)):(pn&&u&&du(r),r.flags|=1,ai(n,r,a,p),r.child)}function cm(n,r,a,u,p){if(xi(a)){var x=!0;cl(r)}else x=!1;if(mo(r,p),r.stateNode===null)Cl(n,r),Zp(r,a,u),Uu(r,a,u,p),u=!0;else if(n===null){var T=r.stateNode,B=r.memoizedProps;T.props=B;var V=T.context,he=a.contextType;typeof he=="object"&&he!==null?he=Ii(he):(he=xi(a)?ws:Yn.current,he=lo(r,he));var we=a.getDerivedStateFromProps,Re=typeof we=="function"||typeof T.getSnapshotBeforeUpdate=="function";Re||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==u||V!==he)&&Jp(r,T,u,he),is=!1;var be=r.memoizedState;T.state=be,vl(r,u,T,p),V=r.memoizedState,B!==u||be!==V||gi.current||is?(typeof we=="function"&&(Iu(r,a,we,u),V=r.memoizedState),(B=is||Kp(r,a,B,u,be,V,he))?(Re||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=V),T.props=u,T.state=V,T.context=he,u=B):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{T=r.stateNode,Tp(n,r),B=r.memoizedProps,he=r.type===r.elementType?B:Ji(r.type,B),T.props=he,Re=r.pendingProps,be=T.context,V=a.contextType,typeof V=="object"&&V!==null?V=Ii(V):(V=xi(a)?ws:Yn.current,V=lo(r,V));var Xe=a.getDerivedStateFromProps;(we=typeof Xe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==Re||be!==V)&&Jp(r,T,u,V),is=!1,be=r.memoizedState,T.state=be,vl(r,u,T,p);var nt=r.memoizedState;B!==Re||be!==nt||gi.current||is?(typeof Xe=="function"&&(Iu(r,a,Xe,u),nt=r.memoizedState),(he=is||Kp(r,a,he,u,be,nt,V)||!1)?(we||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,nt,V),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,nt,V)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&be===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&be===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=nt),T.props=u,T.state=nt,T.context=V,u=he):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&be===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&be===n.memoizedState||(r.flags|=1024),u=!1)}return Bu(n,r,a,u,x,p)}function Bu(n,r,a,u,p,x){lm(n,r);var T=(r.flags&128)!==0;if(!u&&!T)return p&&pp(r,a,!1),Nr(n,r,x);u=r.stateNode,Iv.current=r;var B=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&T?(r.child=ho(r,n.child,null,x),r.child=ho(r,null,B,x)):ai(n,r,B,x),r.memoizedState=u.state,p&&pp(r,a,!0),r.child}function um(n){var r=n.stateNode;r.pendingContext?fp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&fp(n,r.context,!1),Mu(n,r.containerInfo)}function dm(n,r,a,u,p){return fo(),mu(p),r.flags|=256,ai(n,r,a,u),r.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function Hu(n){return{baseLanes:n,cachePool:null,transitions:null}}function fm(n,r,a){var u=r.pendingProps,p=vn.current,x=!1,T=(r.flags&128)!==0,B;if((B=T)||(B=n!==null&&n.memoizedState===null?!1:(p&2)!==0),B?(x=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),ln(vn,p&1),n===null)return pu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=u.children,n=u.fallback,x?(u=r.mode,x=r.child,T={mode:"hidden",children:T},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=T):x=Bl(T,u,0,null),n=ks(n,u,a,null),x.return=r,n.return=r,x.sibling=n,r.child=x,r.child.memoizedState=Hu(a),r.memoizedState=zu,n):Vu(r,T));if(p=n.memoizedState,p!==null&&(B=p.dehydrated,B!==null))return Uv(n,r,T,u,B,p,a);if(x){x=u.fallback,T=r.mode,p=n.child,B=p.sibling;var V={mode:"hidden",children:u.children};return(T&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=V,r.deletions=null):(u=us(p,V),u.subtreeFlags=p.subtreeFlags&14680064),B!==null?x=us(B,x):(x=ks(x,T,a,null),x.flags|=2),x.return=r,u.return=r,u.sibling=x,r.child=u,u=x,x=r.child,T=n.child.memoizedState,T=T===null?Hu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},x.memoizedState=T,x.childLanes=n.childLanes&~a,r.memoizedState=zu,u}return x=n.child,n=x.sibling,u=us(x,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=a),u.return=r,u.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=u,r.memoizedState=null,u}function Vu(n,r){return r=Bl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function wl(n,r,a,u){return u!==null&&mu(u),ho(r,n.child,null,a),n=Vu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Uv(n,r,a,u,p,x,T){if(a)return r.flags&256?(r.flags&=-257,u=ku(Error(t(422))),wl(n,r,T,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(x=u.fallback,p=r.mode,u=Bl({mode:"visible",children:u.children},p,0,null),x=ks(x,p,T,null),x.flags|=2,u.return=r,x.return=r,u.sibling=x,r.child=u,(r.mode&1)!==0&&ho(r,n.child,null,T),r.child.memoizedState=Hu(T),r.memoizedState=zu,x);if((r.mode&1)===0)return wl(n,r,T,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var B=u.dgst;return u=B,x=Error(t(419)),u=ku(x,u,void 0),wl(n,r,T,u)}if(B=(T&n.childLanes)!==0,vi||B){if(u=zn,u!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|T))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,Pr(n,p),tr(u,n,p,-1))}return rd(),u=ku(Error(t(421))),wl(n,r,T,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Yv.bind(null,n),p._reactRetry=r,null):(n=x.treeContext,wi=Qr(p.nextSibling),Ti=r,pn=!0,Zi=null,n!==null&&(Ni[Di++]=Rr,Ni[Di++]=Ar,Ni[Di++]=Cs,Rr=n.id,Ar=n.overflow,Cs=r),r=Vu(r,u.children),r.flags|=4096,r)}function hm(n,r,a){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),_u(n.return,r,a)}function Gu(n,r,a,u,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=a,x.tailMode=p)}function pm(n,r,a){var u=r.pendingProps,p=u.revealOrder,x=u.tail;if(ai(n,r,u.children,a),u=vn.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hm(n,a,r);else if(n.tag===19)hm(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(ln(vn,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(a=r.child,p=null;a!==null;)n=a.alternate,n!==null&&_l(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=r.child,r.child=null):(p=a.sibling,a.sibling=null),Gu(r,!1,p,a,x);break;case"backwards":for(a=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&_l(n)===null){r.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Gu(r,!0,a,null,x);break;case"together":Gu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Cl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Nr(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),Ns|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=us(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=us(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function kv(n,r,a){switch(r.tag){case 3:um(r),fo();break;case 5:Rp(r);break;case 1:xi(r.type)&&cl(r);break;case 4:Mu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;ln(ml,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(ln(vn,vn.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?fm(n,r,a):(ln(vn,vn.current&1),n=Nr(n,r,a),n!==null?n.sibling:null);ln(vn,vn.current&1);break;case 19:if(u=(a&r.childLanes)!==0,(n.flags&128)!==0){if(u)return pm(n,r,a);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ln(vn,vn.current),u)break;return null;case 22:case 23:return r.lanes=0,am(n,r,a)}return Nr(n,r,a)}var mm,Wu,gm,xm;mm=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Wu=function(){},gm=function(n,r,a,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,Ps(ur.current);var x=null;switch(a){case"input":p=Tt(n,p),u=Tt(n,u),x=[];break;case"select":p=Z({},p,{value:void 0}),u=Z({},u,{value:void 0}),x=[];break;case"textarea":p=on(n,p),u=on(n,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ol)}tt(a,u);var T;a=null;for(he in p)if(!u.hasOwnProperty(he)&&p.hasOwnProperty(he)&&p[he]!=null)if(he==="style"){var B=p[he];for(T in B)B.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(o.hasOwnProperty(he)?x||(x=[]):(x=x||[]).push(he,null));for(he in u){var V=u[he];if(B=p!=null?p[he]:void 0,u.hasOwnProperty(he)&&V!==B&&(V!=null||B!=null))if(he==="style")if(B){for(T in B)!B.hasOwnProperty(T)||V&&V.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in V)V.hasOwnProperty(T)&&B[T]!==V[T]&&(a||(a={}),a[T]=V[T])}else a||(x||(x=[]),x.push(he,a)),a=V;else he==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,B=B?B.__html:void 0,V!=null&&B!==V&&(x=x||[]).push(he,V)):he==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(he,""+V):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(o.hasOwnProperty(he)?(V!=null&&he==="onScroll"&&un("scroll",n),x||B===V||(x=[])):(x=x||[]).push(he,V))}a&&(x=x||[]).push("style",a);var he=x;(r.updateQueue=he)&&(r.flags|=4)}},xm=function(n,r,a,u){a!==u&&(r.flags|=4)};function va(n,r){if(!pn)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Kn(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(r)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,r}function Fv(n,r,a){var u=r.pendingProps;switch(fu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kn(r),null;case 1:return xi(r.type)&&ll(),Kn(r),null;case 3:return u=r.stateNode,go(),dn(gi),dn(Yn),Tu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(hl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Zi!==null&&(td(Zi),Zi=null))),Wu(n,r),Kn(r),null;case 5:Eu(r);var p=Ps(ha.current);if(a=r.type,n!==null&&r.stateNode!=null)gm(n,r,a,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Kn(r),null}if(n=Ps(ur.current),hl(r)){u=r.stateNode,a=r.type;var x=r.memoizedProps;switch(u[cr]=r,u[la]=x,n=(r.mode&1)!==0,a){case"dialog":un("cancel",u),un("close",u);break;case"iframe":case"object":case"embed":un("load",u);break;case"video":case"audio":for(p=0;p<sa.length;p++)un(sa[p],u);break;case"source":un("error",u);break;case"img":case"image":case"link":un("error",u),un("load",u);break;case"details":un("toggle",u);break;case"input":kt(u,x),un("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},un("invalid",u);break;case"textarea":Y(u,x),un("invalid",u)}tt(a,x),p=null;for(var T in x)if(x.hasOwnProperty(T)){var B=x[T];T==="children"?typeof B=="string"?u.textContent!==B&&(x.suppressHydrationWarning!==!0&&sl(u.textContent,B,n),p=["children",B]):typeof B=="number"&&u.textContent!==""+B&&(x.suppressHydrationWarning!==!0&&sl(u.textContent,B,n),p=["children",""+B]):o.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&un("scroll",u)}switch(a){case"input":Ve(u),Xt(u,x,!0);break;case"textarea":Ve(u),Ht(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=ol)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(a,{is:u.is}):(n=T.createElement(a),a==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,a),n[cr]=r,n[la]=u,mm(n,r,!1,!1),r.stateNode=n;e:{switch(T=Ue(a,u),a){case"dialog":un("cancel",n),un("close",n),p=u;break;case"iframe":case"object":case"embed":un("load",n),p=u;break;case"video":case"audio":for(p=0;p<sa.length;p++)un(sa[p],n);p=u;break;case"source":un("error",n),p=u;break;case"img":case"image":case"link":un("error",n),un("load",n),p=u;break;case"details":un("toggle",n),p=u;break;case"input":kt(n,u),p=Tt(n,u),un("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=Z({},u,{value:void 0}),un("invalid",n);break;case"textarea":Y(n,u),p=on(n,u),un("invalid",n);break;default:p=u}tt(a,p),B=p;for(x in B)if(B.hasOwnProperty(x)){var V=B[x];x==="style"?_e(n,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&le(n,V)):x==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&fe(n,V):typeof V=="number"&&fe(n,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?V!=null&&x==="onScroll"&&un("scroll",n):V!=null&&z(n,x,V,T))}switch(a){case"input":Ve(n),Xt(n,u,!1);break;case"textarea":Ve(n),Ht(n);break;case"option":u.value!=null&&n.setAttribute("value",""+pe(u.value));break;case"select":n.multiple=!!u.multiple,x=u.value,x!=null?$t(n,!!u.multiple,x,!1):u.defaultValue!=null&&$t(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ol)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Kn(r),null;case 6:if(n&&r.stateNode!=null)xm(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(a=Ps(ha.current),Ps(ur.current),hl(r)){if(u=r.stateNode,a=r.memoizedProps,u[cr]=r,(x=u.nodeValue!==a)&&(n=Ti,n!==null))switch(n.tag){case 3:sl(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&sl(u.nodeValue,a,(n.mode&1)!==0)}x&&(r.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[cr]=r,r.stateNode=u}return Kn(r),null;case 13:if(dn(vn),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(pn&&wi!==null&&(r.mode&1)!==0&&(r.flags&128)===0)yp(),fo(),r.flags|=98560,x=!1;else if(x=hl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[cr]=r}else fo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Kn(r),x=!1}else Zi!==null&&(td(Zi),Zi=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(vn.current&1)!==0?kn===0&&(kn=3):rd())),r.updateQueue!==null&&(r.flags|=4),Kn(r),null);case 4:return go(),Wu(n,r),n===null&&oa(r.stateNode.containerInfo),Kn(r),null;case 10:return vu(r.type._context),Kn(r),null;case 17:return xi(r.type)&&ll(),Kn(r),null;case 19:if(dn(vn),x=r.memoizedState,x===null)return Kn(r),null;if(u=(r.flags&128)!==0,T=x.rendering,T===null)if(u)va(x,!1);else{if(kn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=_l(n),T!==null){for(r.flags|=128,va(x,!1),u=T.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=a,a=r.child;a!==null;)x=a,n=u,x.flags&=14680066,T=x.alternate,T===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=T.childLanes,x.lanes=T.lanes,x.child=T.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=T.memoizedProps,x.memoizedState=T.memoizedState,x.updateQueue=T.updateQueue,x.type=T.type,n=T.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return ln(vn,vn.current&1|2),r.child}n=n.sibling}x.tail!==null&&an()>yo&&(r.flags|=128,u=!0,va(x,!1),r.lanes=4194304)}else{if(!u)if(n=_l(T),n!==null){if(r.flags|=128,u=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),va(x,!0),x.tail===null&&x.tailMode==="hidden"&&!T.alternate&&!pn)return Kn(r),null}else 2*an()-x.renderingStartTime>yo&&a!==1073741824&&(r.flags|=128,u=!0,va(x,!1),r.lanes=4194304);x.isBackwards?(T.sibling=r.child,r.child=T):(a=x.last,a!==null?a.sibling=T:r.child=T,x.last=T)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=an(),r.sibling=null,a=vn.current,ln(vn,u?a&1|2:a&1),r):(Kn(r),null);case 22:case 23:return id(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Ci&1073741824)!==0&&(Kn(r),r.subtreeFlags&6&&(r.flags|=8192)):Kn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Ov(n,r){switch(fu(r),r.tag){case 1:return xi(r.type)&&ll(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return go(),dn(gi),dn(Yn),Tu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Eu(r),null;case 13:if(dn(vn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));fo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return dn(vn),null;case 4:return go(),null;case 10:return vu(r.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var Rl=!1,Zn=!1,Bv=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function vo(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){En(n,r,u)}else a.current=null}function ju(n,r,a){try{a()}catch(u){En(n,r,u)}}var vm=!1;function zv(n,r){if(iu=Pe,n=Kh(),qc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var T=0,B=-1,V=-1,he=0,we=0,Re=n,be=null;t:for(;;){for(var Xe;Re!==a||p!==0&&Re.nodeType!==3||(B=T+p),Re!==x||u!==0&&Re.nodeType!==3||(V=T+u),Re.nodeType===3&&(T+=Re.nodeValue.length),(Xe=Re.firstChild)!==null;)be=Re,Re=Xe;for(;;){if(Re===n)break t;if(be===a&&++he===p&&(B=T),be===x&&++we===u&&(V=T),(Xe=Re.nextSibling)!==null)break;Re=be,be=Re.parentNode}Re=Xe}a=B===-1||V===-1?null:{start:B,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(ru={focusedElem:n,selectionRange:a},Pe=!1,Qe=r;Qe!==null;)if(r=Qe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Qe=n;else for(;Qe!==null;){r=Qe;try{var nt=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var ot=nt.memoizedProps,Cn=nt.memoizedState,oe=r.stateNode,q=oe.getSnapshotBeforeUpdate(r.elementType===r.type?ot:Ji(r.type,ot),Cn);oe.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var ue=r.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){En(r,r.return,Le)}if(n=r.sibling,n!==null){n.return=r.return,Qe=n;break}Qe=r.return}return nt=vm,vm=!1,nt}function _a(n,r,a){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&ju(r,a,x)}p=p.next}while(p!==u)}}function Al(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==r)}}function Xu(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function _m(n){var r=n.alternate;r!==null&&(n.alternate=null,_m(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[cr],delete r[la],delete r[lu],delete r[Mv],delete r[Ev])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ym(n){return n.tag===5||n.tag===3||n.tag===4}function Sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ym(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $u(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=ol));else if(u!==4&&(n=n.child,n!==null))for($u(n,r,a),n=n.sibling;n!==null;)$u(n,r,a),n=n.sibling}function Yu(n,r,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Yu(n,r,a),n=n.sibling;n!==null;)Yu(n,r,a),n=n.sibling}var Gn=null,Qi=!1;function ss(n,r,a){for(a=a.child;a!==null;)Mm(n,r,a),a=a.sibling}function Mm(n,r,a){if(Q&&typeof Q.onCommitFiberUnmount=="function")try{Q.onCommitFiberUnmount(re,a)}catch{}switch(a.tag){case 5:Zn||vo(a,r);case 6:var u=Gn,p=Qi;Gn=null,ss(n,r,a),Gn=u,Qi=p,Gn!==null&&(Qi?(n=Gn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Gn.removeChild(a.stateNode));break;case 18:Gn!==null&&(Qi?(n=Gn,a=a.stateNode,n.nodeType===8?au(n.parentNode,a):n.nodeType===1&&au(n,a),Se(n)):au(Gn,a.stateNode));break;case 4:u=Gn,p=Qi,Gn=a.stateNode.containerInfo,Qi=!0,ss(n,r,a),Gn=u,Qi=p;break;case 0:case 11:case 14:case 15:if(!Zn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,T=x.destroy;x=x.tag,T!==void 0&&((x&2)!==0||(x&4)!==0)&&ju(a,r,T),p=p.next}while(p!==u)}ss(n,r,a);break;case 1:if(!Zn&&(vo(a,r),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(B){En(a,r,B)}ss(n,r,a);break;case 21:ss(n,r,a);break;case 22:a.mode&1?(Zn=(u=Zn)||a.memoizedState!==null,ss(n,r,a),Zn=u):ss(n,r,a);break;default:ss(n,r,a)}}function Em(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Bv),r.forEach(function(u){var p=qv.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function er(n,r){var a=r.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var x=n,T=r,B=T;e:for(;B!==null;){switch(B.tag){case 5:Gn=B.stateNode,Qi=!1;break e;case 3:Gn=B.stateNode.containerInfo,Qi=!0;break e;case 4:Gn=B.stateNode.containerInfo,Qi=!0;break e}B=B.return}if(Gn===null)throw Error(t(160));Mm(x,T,p),Gn=null,Qi=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(he){En(p,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)bm(r,n),r=r.sibling}function bm(n,r){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(er(r,n),fr(n),u&4){try{_a(3,n,n.return),Al(3,n)}catch(ot){En(n,n.return,ot)}try{_a(5,n,n.return)}catch(ot){En(n,n.return,ot)}}break;case 1:er(r,n),fr(n),u&512&&a!==null&&vo(a,a.return);break;case 5:if(er(r,n),fr(n),u&512&&a!==null&&vo(a,a.return),n.flags&32){var p=n.stateNode;try{fe(p,"")}catch(ot){En(n,n.return,ot)}}if(u&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,T=a!==null?a.memoizedProps:x,B=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{B==="input"&&x.type==="radio"&&x.name!=null&&Zt(p,x),Ue(B,T);var he=Ue(B,x);for(T=0;T<V.length;T+=2){var we=V[T],Re=V[T+1];we==="style"?_e(p,Re):we==="dangerouslySetInnerHTML"?le(p,Re):we==="children"?fe(p,Re):z(p,we,Re,he)}switch(B){case"input":Mt(p,x);break;case"textarea":wn(p,x);break;case"select":var be=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var Xe=x.value;Xe!=null?$t(p,!!x.multiple,Xe,!1):be!==!!x.multiple&&(x.defaultValue!=null?$t(p,!!x.multiple,x.defaultValue,!0):$t(p,!!x.multiple,x.multiple?[]:"",!1))}p[la]=x}catch(ot){En(n,n.return,ot)}}break;case 6:if(er(r,n),fr(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(ot){En(n,n.return,ot)}}break;case 3:if(er(r,n),fr(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Se(r.containerInfo)}catch(ot){En(n,n.return,ot)}break;case 4:er(r,n),fr(n);break;case 13:er(r,n),fr(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Zu=an())),u&4&&Em(n);break;case 22:if(we=a!==null&&a.memoizedState!==null,n.mode&1?(Zn=(he=Zn)||we,er(r,n),Zn=he):er(r,n),fr(n),u&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!we&&(n.mode&1)!==0)for(Qe=n,we=n.child;we!==null;){for(Re=Qe=we;Qe!==null;){switch(be=Qe,Xe=be.child,be.tag){case 0:case 11:case 14:case 15:_a(4,be,be.return);break;case 1:vo(be,be.return);var nt=be.stateNode;if(typeof nt.componentWillUnmount=="function"){u=be,a=be.return;try{r=u,nt.props=r.memoizedProps,nt.state=r.memoizedState,nt.componentWillUnmount()}catch(ot){En(u,a,ot)}}break;case 5:vo(be,be.return);break;case 22:if(be.memoizedState!==null){Cm(Re);continue}}Xe!==null?(Xe.return=be,Qe=Xe):Cm(Re)}we=we.sibling}e:for(we=null,Re=n;;){if(Re.tag===5){if(we===null){we=Re;try{p=Re.stateNode,he?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(B=Re.stateNode,V=Re.memoizedProps.style,T=V!=null&&V.hasOwnProperty("display")?V.display:null,B.style.display=ge("display",T))}catch(ot){En(n,n.return,ot)}}}else if(Re.tag===6){if(we===null)try{Re.stateNode.nodeValue=he?"":Re.memoizedProps}catch(ot){En(n,n.return,ot)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===n)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===n)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===n)break e;we===Re&&(we=null),Re=Re.return}we===Re&&(we=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:er(r,n),fr(n),u&4&&Em(n);break;case 21:break;default:er(r,n),fr(n)}}function fr(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(ym(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(fe(p,""),u.flags&=-33);var x=Sm(n);Yu(n,x,p);break;case 3:case 4:var T=u.stateNode.containerInfo,B=Sm(n);$u(n,B,T);break;default:throw Error(t(161))}}catch(V){En(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Hv(n,r,a){Qe=n,Tm(n)}function Tm(n,r,a){for(var u=(n.mode&1)!==0;Qe!==null;){var p=Qe,x=p.child;if(p.tag===22&&u){var T=p.memoizedState!==null||Rl;if(!T){var B=p.alternate,V=B!==null&&B.memoizedState!==null||Zn;B=Rl;var he=Zn;if(Rl=T,(Zn=V)&&!he)for(Qe=p;Qe!==null;)T=Qe,V=T.child,T.tag===22&&T.memoizedState!==null?Rm(p):V!==null?(V.return=T,Qe=V):Rm(p);for(;x!==null;)Qe=x,Tm(x),x=x.sibling;Qe=p,Rl=B,Zn=he}wm(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,Qe=x):wm(n)}}function wm(n){for(;Qe!==null;){var r=Qe;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Zn||Al(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Zn)if(a===null)u.componentDidMount();else{var p=r.elementType===r.type?a.memoizedProps:Ji(r.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Cp(r,x,u);break;case 3:var T=r.updateQueue;if(T!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Cp(r,T,a)}break;case 5:var B=r.stateNode;if(a===null&&r.flags&4){a=B;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var we=he.memoizedState;if(we!==null){var Re=we.dehydrated;Re!==null&&Se(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Zn||r.flags&512&&Xu(r)}catch(be){En(r,r.return,be)}}if(r===n){Qe=null;break}if(a=r.sibling,a!==null){a.return=r.return,Qe=a;break}Qe=r.return}}function Cm(n){for(;Qe!==null;){var r=Qe;if(r===n){Qe=null;break}var a=r.sibling;if(a!==null){a.return=r.return,Qe=a;break}Qe=r.return}}function Rm(n){for(;Qe!==null;){var r=Qe;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Al(4,r)}catch(V){En(r,a,V)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(V){En(r,p,V)}}var x=r.return;try{Xu(r)}catch(V){En(r,x,V)}break;case 5:var T=r.return;try{Xu(r)}catch(V){En(r,T,V)}}}catch(V){En(r,r.return,V)}if(r===n){Qe=null;break}var B=r.sibling;if(B!==null){B.return=r.return,Qe=B;break}Qe=r.return}}var Vv=Math.ceil,Pl=C.ReactCurrentDispatcher,qu=C.ReactCurrentOwner,ki=C.ReactCurrentBatchConfig,jt=0,zn=null,Ln=null,Wn=0,Ci=0,_o=es(0),kn=0,ya=null,Ns=0,Ll=0,Ku=0,Sa=null,_i=null,Zu=0,yo=1/0,Dr=null,Nl=!1,Ju=null,os=null,Dl=!1,as=null,Il=0,Ma=0,Qu=null,Ul=-1,kl=0;function li(){return(jt&6)!==0?an():Ul!==-1?Ul:Ul=an()}function ls(n){return(n.mode&1)===0?1:(jt&2)!==0&&Wn!==0?Wn&-Wn:Tv.transition!==null?(kl===0&&(kl=tn()),kl):(n=O,n!==0||(n=window.event,n=n===void 0?16:Yt(n.type)),n)}function tr(n,r,a,u){if(50<Ma)throw Ma=0,Qu=null,Error(t(185));hn(n,a,u),((jt&2)===0||n!==zn)&&(n===zn&&((jt&2)===0&&(Ll|=a),kn===4&&cs(n,Wn)),yi(n,u),a===1&&jt===0&&(r.mode&1)===0&&(yo=an()+500,ul&&ns()))}function yi(n,r){var a=n.callbackNode;Jt(n,r);var u=Lt(n,n===zn?Wn:0);if(u===0)a!==null&&Ms(a),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(a!=null&&Ms(a),r===1)n.tag===0?bv(Pm.bind(null,n)):mp(Pm.bind(null,n)),yv(function(){(jt&6)===0&&ns()}),a=null;else{switch(Pn(u)){case 1:a=Es;break;case 4:a=bs;break;case 16:a=w;break;case 536870912:a=de;break;default:a=w}a=Om(a,Am.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function Am(n,r){if(Ul=-1,kl=0,(jt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(So()&&n.callbackNode!==a)return null;var u=Lt(n,n===zn?Wn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Fl(n,u);else{r=u;var p=jt;jt|=2;var x=Nm();(zn!==n||Wn!==r)&&(Dr=null,yo=an()+500,Is(n,r));do try{jv();break}catch(B){Lm(n,B)}while(!0);xu(),Pl.current=x,jt=p,Ln!==null?r=0:(zn=null,Wn=0,r=kn)}if(r!==0){if(r===2&&(p=Wt(n),p!==0&&(u=p,r=ed(n,p))),r===1)throw a=ya,Is(n,0),cs(n,u),yi(n,an()),a;if(r===6)cs(n,u);else{if(p=n.current.alternate,(u&30)===0&&!Gv(p)&&(r=Fl(n,u),r===2&&(x=Wt(n),x!==0&&(u=x,r=ed(n,x))),r===1))throw a=ya,Is(n,0),cs(n,u),yi(n,an()),a;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Us(n,_i,Dr);break;case 3:if(cs(n,u),(u&130023424)===u&&(r=Zu+500-an(),10<r)){if(Lt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){li(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=ou(Us.bind(null,n,_i,Dr),r);break}Us(n,_i,Dr);break;case 4:if(cs(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var T=31-Be(u);x=1<<T,T=r[T],T>p&&(p=T),u&=~x}if(u=p,u=an()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Vv(u/1960))-u,10<u){n.timeoutHandle=ou(Us.bind(null,n,_i,Dr),u);break}Us(n,_i,Dr);break;case 5:Us(n,_i,Dr);break;default:throw Error(t(329))}}}return yi(n,an()),n.callbackNode===a?Am.bind(null,n):null}function ed(n,r){var a=Sa;return n.current.memoizedState.isDehydrated&&(Is(n,r).flags|=256),n=Fl(n,r),n!==2&&(r=_i,_i=a,r!==null&&td(r)),n}function td(n){_i===null?_i=n:_i.push.apply(_i,n)}function Gv(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],x=p.getSnapshot;p=p.value;try{if(!Ki(x(),p))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function cs(n,r){for(r&=~Ku,r&=~Ll,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-Be(r),u=1<<a;n[a]=-1,r&=~u}}function Pm(n){if((jt&6)!==0)throw Error(t(327));So();var r=Lt(n,0);if((r&1)===0)return yi(n,an()),null;var a=Fl(n,r);if(n.tag!==0&&a===2){var u=Wt(n);u!==0&&(r=u,a=ed(n,u))}if(a===1)throw a=ya,Is(n,0),cs(n,r),yi(n,an()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Us(n,_i,Dr),yi(n,an()),null}function nd(n,r){var a=jt;jt|=1;try{return n(r)}finally{jt=a,jt===0&&(yo=an()+500,ul&&ns())}}function Ds(n){as!==null&&as.tag===0&&(jt&6)===0&&So();var r=jt;jt|=1;var a=ki.transition,u=O;try{if(ki.transition=null,O=1,n)return n()}finally{O=u,ki.transition=a,jt=r,(jt&6)===0&&ns()}}function id(){Ci=_o.current,dn(_o)}function Is(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,_v(a)),Ln!==null)for(a=Ln.return;a!==null;){var u=a;switch(fu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ll();break;case 3:go(),dn(gi),dn(Yn),Tu();break;case 5:Eu(u);break;case 4:go();break;case 13:dn(vn);break;case 19:dn(vn);break;case 10:vu(u.type._context);break;case 22:case 23:id()}a=a.return}if(zn=n,Ln=n=us(n.current,null),Wn=Ci=r,kn=0,ya=null,Ku=Ll=Ns=0,_i=Sa=null,As!==null){for(r=0;r<As.length;r++)if(a=As[r],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,x=a.pending;if(x!==null){var T=x.next;x.next=p,u.next=T}a.pending=u}As=null}return n}function Lm(n,r){do{var a=Ln;try{if(xu(),yl.current=bl,Sl){for(var u=_n.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Sl=!1}if(Ls=0,Bn=Un=_n=null,pa=!1,ma=0,qu.current=null,a===null||a.return===null){kn=1,ya=r,Ln=null;break}e:{var x=n,T=a.return,B=a,V=r;if(r=Wn,B.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var he=V,we=B,Re=we.tag;if((we.mode&1)===0&&(Re===0||Re===11||Re===15)){var be=we.alternate;be?(we.updateQueue=be.updateQueue,we.memoizedState=be.memoizedState,we.lanes=be.lanes):(we.updateQueue=null,we.memoizedState=null)}var Xe=nm(T);if(Xe!==null){Xe.flags&=-257,im(Xe,T,B,x,r),Xe.mode&1&&tm(x,he,r),r=Xe,V=he;var nt=r.updateQueue;if(nt===null){var ot=new Set;ot.add(V),r.updateQueue=ot}else nt.add(V);break e}else{if((r&1)===0){tm(x,he,r),rd();break e}V=Error(t(426))}}else if(pn&&B.mode&1){var Cn=nm(T);if(Cn!==null){(Cn.flags&65536)===0&&(Cn.flags|=256),im(Cn,T,B,x,r),mu(xo(V,B));break e}}x=V=xo(V,B),kn!==4&&(kn=2),Sa===null?Sa=[x]:Sa.push(x),x=T;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var oe=Qp(x,V,r);wp(x,oe);break e;case 1:B=V;var q=x.type,ue=x.stateNode;if((x.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(os===null||!os.has(ue)))){x.flags|=65536,r&=-r,x.lanes|=r;var Le=em(x,B,r);wp(x,Le);break e}}x=x.return}while(x!==null)}Im(a)}catch(ct){r=ct,Ln===a&&a!==null&&(Ln=a=a.return);continue}break}while(!0)}function Nm(){var n=Pl.current;return Pl.current=bl,n===null?bl:n}function rd(){(kn===0||kn===3||kn===2)&&(kn=4),zn===null||(Ns&268435455)===0&&(Ll&268435455)===0||cs(zn,Wn)}function Fl(n,r){var a=jt;jt|=2;var u=Nm();(zn!==n||Wn!==r)&&(Dr=null,Is(n,r));do try{Wv();break}catch(p){Lm(n,p)}while(!0);if(xu(),jt=a,Pl.current=u,Ln!==null)throw Error(t(261));return zn=null,Wn=0,kn}function Wv(){for(;Ln!==null;)Dm(Ln)}function jv(){for(;Ln!==null&&!Qs();)Dm(Ln)}function Dm(n){var r=Fm(n.alternate,n,Ci);n.memoizedProps=n.pendingProps,r===null?Im(n):Ln=r,qu.current=null}function Im(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=Fv(a,r,Ci),a!==null){Ln=a;return}}else{if(a=Ov(a,r),a!==null){a.flags&=32767,Ln=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{kn=6,Ln=null;return}}if(r=r.sibling,r!==null){Ln=r;return}Ln=r=n}while(r!==null);kn===0&&(kn=5)}function Us(n,r,a){var u=O,p=ki.transition;try{ki.transition=null,O=1,Xv(n,r,a,u)}finally{ki.transition=p,O=u}return null}function Xv(n,r,a,u){do So();while(as!==null);if((jt&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(Pt(n,x),n===zn&&(Ln=zn=null,Wn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Dl||(Dl=!0,Om(w,function(){return So(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=ki.transition,ki.transition=null;var T=O;O=1;var B=jt;jt|=4,qu.current=null,zv(n,a),bm(a,n),fv(ru),Pe=!!iu,ru=iu=null,n.current=a,Hv(a),Yo(),jt=B,O=T,ki.transition=x}else n.current=a;if(Dl&&(Dl=!1,as=n,Il=p),x=n.pendingLanes,x===0&&(os=null),Fe(a.stateNode),yi(n,an()),r!==null)for(u=n.onRecoverableError,a=0;a<r.length;a++)p=r[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(Nl)throw Nl=!1,n=Ju,Ju=null,n;return(Il&1)!==0&&n.tag!==0&&So(),x=n.pendingLanes,(x&1)!==0?n===Qu?Ma++:(Ma=0,Qu=n):Ma=0,ns(),null}function So(){if(as!==null){var n=Pn(Il),r=ki.transition,a=O;try{if(ki.transition=null,O=16>n?16:n,as===null)var u=!1;else{if(n=as,as=null,Il=0,(jt&6)!==0)throw Error(t(331));var p=jt;for(jt|=4,Qe=n.current;Qe!==null;){var x=Qe,T=x.child;if((Qe.flags&16)!==0){var B=x.deletions;if(B!==null){for(var V=0;V<B.length;V++){var he=B[V];for(Qe=he;Qe!==null;){var we=Qe;switch(we.tag){case 0:case 11:case 15:_a(8,we,x)}var Re=we.child;if(Re!==null)Re.return=we,Qe=Re;else for(;Qe!==null;){we=Qe;var be=we.sibling,Xe=we.return;if(_m(we),we===he){Qe=null;break}if(be!==null){be.return=Xe,Qe=be;break}Qe=Xe}}}var nt=x.alternate;if(nt!==null){var ot=nt.child;if(ot!==null){nt.child=null;do{var Cn=ot.sibling;ot.sibling=null,ot=Cn}while(ot!==null)}}Qe=x}}if((x.subtreeFlags&2064)!==0&&T!==null)T.return=x,Qe=T;else e:for(;Qe!==null;){if(x=Qe,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:_a(9,x,x.return)}var oe=x.sibling;if(oe!==null){oe.return=x.return,Qe=oe;break e}Qe=x.return}}var q=n.current;for(Qe=q;Qe!==null;){T=Qe;var ue=T.child;if((T.subtreeFlags&2064)!==0&&ue!==null)ue.return=T,Qe=ue;else e:for(T=q;Qe!==null;){if(B=Qe,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Al(9,B)}}catch(ct){En(B,B.return,ct)}if(B===T){Qe=null;break e}var Le=B.sibling;if(Le!==null){Le.return=B.return,Qe=Le;break e}Qe=B.return}}if(jt=p,ns(),Q&&typeof Q.onPostCommitFiberRoot=="function")try{Q.onPostCommitFiberRoot(re,n)}catch{}u=!0}return u}finally{O=a,ki.transition=r}}return!1}function Um(n,r,a){r=xo(a,r),r=Qp(n,r,1),n=rs(n,r,1),r=li(),n!==null&&(hn(n,1,r),yi(n,r))}function En(n,r,a){if(n.tag===3)Um(n,n,a);else for(;r!==null;){if(r.tag===3){Um(r,n,a);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(os===null||!os.has(u))){n=xo(a,n),n=em(r,n,1),r=rs(r,n,1),n=li(),r!==null&&(hn(r,1,n),yi(r,n));break}}r=r.return}}function $v(n,r,a){var u=n.pingCache;u!==null&&u.delete(r),r=li(),n.pingedLanes|=n.suspendedLanes&a,zn===n&&(Wn&a)===a&&(kn===4||kn===3&&(Wn&130023424)===Wn&&500>an()-Zu?Is(n,0):Ku|=a),yi(n,r)}function km(n,r){r===0&&((n.mode&1)===0?r=1:(r=_t,_t<<=1,(_t&130023424)===0&&(_t=4194304)));var a=li();n=Pr(n,r),n!==null&&(hn(n,r,a),yi(n,a))}function Yv(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),km(n,a)}function qv(n,r){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),km(n,a)}var Fm;Fm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||gi.current)vi=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return vi=!1,kv(n,r,a);vi=(n.flags&131072)!==0}else vi=!1,pn&&(r.flags&1048576)!==0&&gp(r,fl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Cl(n,r),n=r.pendingProps;var p=lo(r,Yn.current);mo(r,a),p=Ru(null,r,u,n,p,a);var x=Au();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,xi(u)?(x=!0,cl(r)):x=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Su(r),p.updater=Tl,r.stateNode=p,p._reactInternals=r,Uu(r,u,n,a),r=Bu(null,r,u,!0,x,a)):(r.tag=0,pn&&x&&du(r),ai(null,r,p,a),r=r.child),r;case 16:u=r.elementType;e:{switch(Cl(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=Zv(u),n=Ji(u,n),p){case 0:r=Ou(null,r,u,n,a);break e;case 1:r=cm(null,r,u,n,a);break e;case 11:r=rm(null,r,u,n,a);break e;case 14:r=sm(null,r,u,Ji(u.type,n),a);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ji(u,p),Ou(n,r,u,p,a);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ji(u,p),cm(n,r,u,p,a);case 3:e:{if(um(r),n===null)throw Error(t(387));u=r.pendingProps,x=r.memoizedState,p=x.element,Tp(n,r),vl(r,u,null,a);var T=r.memoizedState;if(u=T.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){p=xo(Error(t(423)),r),r=dm(n,r,u,a,p);break e}else if(u!==p){p=xo(Error(t(424)),r),r=dm(n,r,u,a,p);break e}else for(wi=Qr(r.stateNode.containerInfo.firstChild),Ti=r,pn=!0,Zi=null,a=Ep(r,null,u,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fo(),u===p){r=Nr(n,r,a);break e}ai(n,r,u,a)}r=r.child}return r;case 5:return Rp(r),n===null&&pu(r),u=r.type,p=r.pendingProps,x=n!==null?n.memoizedProps:null,T=p.children,su(u,p)?T=null:x!==null&&su(u,x)&&(r.flags|=32),lm(n,r),ai(n,r,T,a),r.child;case 6:return n===null&&pu(r),null;case 13:return fm(n,r,a);case 4:return Mu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=ho(r,null,u,a):ai(n,r,u,a),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ji(u,p),rm(n,r,u,p,a);case 7:return ai(n,r,r.pendingProps,a),r.child;case 8:return ai(n,r,r.pendingProps.children,a),r.child;case 12:return ai(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,x=r.memoizedProps,T=p.value,ln(ml,u._currentValue),u._currentValue=T,x!==null)if(Ki(x.value,T)){if(x.children===p.children&&!gi.current){r=Nr(n,r,a);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var B=x.dependencies;if(B!==null){T=x.child;for(var V=B.firstContext;V!==null;){if(V.context===u){if(x.tag===1){V=Lr(-1,a&-a),V.tag=2;var he=x.updateQueue;if(he!==null){he=he.shared;var we=he.pending;we===null?V.next=V:(V.next=we.next,we.next=V),he.pending=V}}x.lanes|=a,V=x.alternate,V!==null&&(V.lanes|=a),_u(x.return,a,r),B.lanes|=a;break}V=V.next}}else if(x.tag===10)T=x.type===r.type?null:x.child;else if(x.tag===18){if(T=x.return,T===null)throw Error(t(341));T.lanes|=a,B=T.alternate,B!==null&&(B.lanes|=a),_u(T,a,r),T=x.sibling}else T=x.child;if(T!==null)T.return=x;else for(T=x;T!==null;){if(T===r){T=null;break}if(x=T.sibling,x!==null){x.return=T.return,T=x;break}T=T.return}x=T}ai(n,r,p.children,a),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,mo(r,a),p=Ii(p),u=u(p),r.flags|=1,ai(n,r,u,a),r.child;case 14:return u=r.type,p=Ji(u,r.pendingProps),p=Ji(u.type,p),sm(n,r,u,p,a);case 15:return om(n,r,r.type,r.pendingProps,a);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:Ji(u,p),Cl(n,r),r.tag=1,xi(u)?(n=!0,cl(r)):n=!1,mo(r,a),Zp(r,u,p),Uu(r,u,p,a),Bu(null,r,u,!0,n,a);case 19:return pm(n,r,a);case 22:return am(n,r,a)}throw Error(t(156,r.tag))};function Om(n,r){return Tr(n,r)}function Kv(n,r,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fi(n,r,a,u){return new Kv(n,r,a,u)}function sd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Zv(n){if(typeof n=="function")return sd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===ie)return 14}return 2}function us(n,r){var a=n.alternate;return a===null?(a=Fi(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Ol(n,r,a,u,p,x){var T=2;if(u=n,typeof n=="function")sd(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case F:return ks(a.children,p,x,r);case E:T=8,p|=8;break;case L:return n=Fi(12,a,r,p|2),n.elementType=L,n.lanes=x,n;case te:return n=Fi(13,a,r,p),n.elementType=te,n.lanes=x,n;case X:return n=Fi(19,a,r,p),n.elementType=X,n.lanes=x,n;case se:return Bl(a,p,x,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:T=10;break e;case H:T=9;break e;case $:T=11;break e;case ie:T=14;break e;case me:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Fi(T,a,r,p),r.elementType=n,r.type=u,r.lanes=x,r}function ks(n,r,a,u){return n=Fi(7,n,u,r),n.lanes=a,n}function Bl(n,r,a,u){return n=Fi(22,n,u,r),n.elementType=se,n.lanes=a,n.stateNode={isHidden:!1},n}function od(n,r,a){return n=Fi(6,n,null,r),n.lanes=a,n}function ad(n,r,a){return r=Fi(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Jv(n,r,a,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ze(0),this.expirationTimes=ze(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ze(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function ld(n,r,a,u,p,x,T,B,V){return n=new Jv(n,r,a,B,V),r===1?(r=1,x===!0&&(r|=8)):r=0,x=Fi(3,null,null,r),n.current=x,x.stateNode=n,x.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(x),n}function Qv(n,r,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:u==null?null:""+u,children:n,containerInfo:r,implementation:a}}function Bm(n){if(!n)return ts;n=n._reactInternals;e:{if(An(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(xi(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(xi(a))return hp(n,a,r)}return r}function zm(n,r,a,u,p,x,T,B,V){return n=ld(a,u,!0,n,p,x,T,B,V),n.context=Bm(null),a=n.current,u=li(),p=ls(a),x=Lr(u,p),x.callback=r??null,rs(a,x,p),n.current.lanes=p,hn(n,p,u),yi(n,u),n}function zl(n,r,a,u){var p=r.current,x=li(),T=ls(p);return a=Bm(a),r.context===null?r.context=a:r.pendingContext=a,r=Lr(x,T),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=rs(p,r,T),n!==null&&(tr(n,p,T,x),xl(n,p,T)),T}function Hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function cd(n,r){Hm(n,r),(n=n.alternate)&&Hm(n,r)}function e_(){return null}var Vm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ud(n){this._internalRoot=n}Vl.prototype.render=ud.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));zl(n,r,null,null)},Vl.prototype.unmount=ud.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ds(function(){zl(null,n,null,null)}),r[wr]=null}};function Vl(n){this._internalRoot=n}Vl.prototype.unstable_scheduleHydration=function(n){if(n){var r=pi();n={blockedOn:null,target:n,priority:r};for(var a=0;a<Yi.length&&r!==0&&r<Yi[a].priority;a++);Yi.splice(a,0,n),a===0&&Ko(n)}};function dd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function t_(n,r,a,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var he=Hl(T);x.call(he)}}var T=zm(r,u,n,0,null,!1,!1,"",Gm);return n._reactRootContainer=T,n[wr]=T.current,oa(n.nodeType===8?n.parentNode:n),Ds(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var B=u;u=function(){var he=Hl(V);B.call(he)}}var V=ld(n,0,!1,null,null,!1,!1,"",Gm);return n._reactRootContainer=V,n[wr]=V.current,oa(n.nodeType===8?n.parentNode:n),Ds(function(){zl(r,V,a,u)}),V}function Wl(n,r,a,u,p){var x=a._reactRootContainer;if(x){var T=x;if(typeof p=="function"){var B=p;p=function(){var V=Hl(T);B.call(V)}}zl(r,T,n,p)}else T=t_(a,r,n,p,u);return Hl(T)}ji=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ge(r.pendingLanes);a!==0&&(In(r,a|1),yi(r,an()),(jt&6)===0&&(yo=an()+500,ns()))}break;case 13:Ds(function(){var u=Pr(n,1);if(u!==null){var p=li();tr(u,n,1,p)}}),cd(n,1)}},Ft=function(n){if(n.tag===13){var r=Pr(n,134217728);if(r!==null){var a=li();tr(r,n,134217728,a)}cd(n,134217728)}},nn=function(n){if(n.tag===13){var r=ls(n),a=Pr(n,r);if(a!==null){var u=li();tr(a,n,r,u)}cd(n,r)}},pi=function(){return O},Qt=function(n,r){var a=O;try{return O=n,r()}finally{O=a}},ut=function(n,r,a){switch(r){case"input":if(Mt(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var u=a[r];if(u!==n&&u.form===n.form){var p=al(u);if(!p)throw Error(t(90));Rt(u),Mt(u,p)}}}break;case"textarea":wn(n,a);break;case"select":r=a.value,r!=null&&$t(n,!!a.multiple,r,!1)}},ke=nd,Me=Ds;var n_={usingClientEntryPoint:!1,Events:[ca,oo,al,xe,ye,nd]},Ea={findFiberByHostInstance:Ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i_={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=br(n),n===null?null:n.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||e_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{re=jl.inject(i_),Q=jl}catch{}}return Si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n_,Si.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(r))throw Error(t(200));return Qv(n,r,null,a)},Si.createRoot=function(n,r){if(!dd(n))throw Error(t(299));var a=!1,u="",p=Vm;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=ld(n,1,!1,null,null,a,!1,u,p),n[wr]=r.current,oa(n.nodeType===8?n.parentNode:n),new ud(r)},Si.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=br(r),n=n===null?null:n.stateNode,n},Si.flushSync=function(n){return Ds(n)},Si.hydrate=function(n,r,a){if(!Gl(r))throw Error(t(200));return Wl(null,n,r,!0,a)},Si.hydrateRoot=function(n,r,a){if(!dd(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,x="",T=Vm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),r=zm(r,null,n,1,a??null,p,!1,x,T),n[wr]=r.current,oa(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,p]:r.mutableSourceEagerHydrationData.push(a,p);return new Vl(r)},Si.render=function(n,r,a){if(!Gl(r))throw Error(t(200));return Wl(null,n,r,!1,a)},Si.unmountComponentAtNode=function(n){if(!Gl(n))throw Error(t(40));return n._reactRootContainer?(Ds(function(){Wl(null,null,n,!1,function(){n._reactRootContainer=null,n[wr]=null})}),!0):!1},Si.unstable_batchedUpdates=nd,Si.unstable_renderSubtreeIntoContainer=function(n,r,a,u){if(!Gl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Wl(n,r,a,!1,u)},Si.version="18.3.1-next-f1338f8080-20240426",Si}var Zm;function h_(){if(Zm)return pd.exports;Zm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),pd.exports=f_(),pd.exports}var Jm;function p_(){if(Jm)return Xl;Jm=1;var s=h_();return Xl.createRoot=s.createRoot,Xl.hydrateRoot=s.hydrateRoot,Xl}var m_=p_();const g_=cg(m_);var dt=nh();function x_({onSelect:s,coins:e,onOpenCases:t,onMultiplayer:i,onDifficultySelect:o}){const l=typeof window<"u"&&(/Android|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent)||"ontouchstart"in window&&window.innerWidth<1024);return R.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-y-auto overflow-x-hidden p-4",children:[R.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[R.jsx("div",{className:"absolute w-72 md:w-96 h-72 md:h-96 bg-purple-500/20 rounded-full blur-3xl -top-24 -left-24 animate-pulse"}),R.jsx("div",{className:"absolute w-72 md:w-96 h-72 md:h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-24 -right-24 animate-pulse",style:{animationDelay:"1s"}}),R.jsx("div",{className:"absolute w-48 md:w-64 h-48 md:h-64 bg-pink-500/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse",style:{animationDelay:"2s"}})]}),R.jsxs("div",{className:"relative z-10 w-full max-w-4xl flex items-center justify-between mb-4 md:mb-6",children:[R.jsxs("div",{className:"flex items-center gap-2 bg-purple-900/60 border border-purple-400/40 rounded-full px-3 py-1 backdrop-blur-md",children:[R.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),R.jsx("span",{className:"text-xs font-semibold tracking-wider text-purple-200",children:"v2.0 • MOBILE READY"})]}),R.jsxs("div",{className:"bg-gradient-to-r from-yellow-600/40 to-amber-600/40 backdrop-blur-md border border-yellow-500/50 rounded-2xl px-4 py-1.5 shadow-lg shadow-yellow-500/20 flex items-center gap-2",children:[R.jsx("span",{className:"text-xl md:text-2xl",children:"💰"}),R.jsxs("div",{children:[R.jsx("div",{className:"text-[10px] text-yellow-300 uppercase tracking-wider font-semibold",children:"Баланс"}),R.jsx("div",{className:"text-base md:text-xl text-yellow-400 font-extrabold leading-tight",children:e})]})]})]}),R.jsxs("div",{className:"relative z-10 flex flex-col items-center w-full max-w-4xl",children:[R.jsxs("div",{className:"mb-4 md:mb-6 text-center",children:[R.jsx("h1",{className:"text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 mb-1 tracking-tight drop-shadow-md",children:"BATTLE ARENA"}),R.jsx("p",{className:"text-xs sm:text-sm md:text-base text-gray-300 font-light tracking-widest uppercase",children:"3D Экшен Шутер • ПК & Смартфоны"})]}),R.jsx("h2",{className:"text-lg sm:text-2xl text-white mb-3 md:mb-5 font-bold",children:"Выбери персонажа:"}),R.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5 w-full mb-5 md:mb-7",children:[R.jsxs("button",{onClick:()=>s("lisa"),className:"group relative flex flex-row sm:flex-col items-center justify-between sm:justify-center p-4 md:p-6 bg-gradient-to-br from-pink-600/70 to-pink-900/80 backdrop-blur-md rounded-2xl md:rounded-3xl border-2 border-pink-400/50 hover:border-pink-300 active:scale-95 sm:hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/40 overflow-hidden text-left sm:text-center",children:[R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"}),R.jsxs("div",{className:"flex sm:flex-col items-center gap-3 sm:gap-2 relative z-10",children:[R.jsx("div",{className:"text-4xl sm:text-6xl md:text-7xl group-hover:scale-110 transition-transform drop-shadow-2xl",children:"👧"}),R.jsxs("div",{children:[R.jsx("span",{className:"text-xl sm:text-2xl font-bold text-white drop-shadow-lg block",children:"Лиза"}),R.jsx("span",{className:"text-[11px] text-pink-200 sm:hidden",children:"Сбалансированный боец"})]})]}),R.jsxs("div",{className:"relative z-10 text-xs sm:text-sm text-pink-100 space-y-0.5 sm:space-y-1 sm:mt-3 bg-black/20 sm:bg-transparent rounded-lg p-2 sm:p-0",children:[R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{children:"❤️"})," HP: ",R.jsx("b",{children:"100"})]}),R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{children:"🏃"})," Скорость: ",R.jsx("b",{children:"Норм."})]}),R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{children:"👗"})," Розовый стиль"]})]})]}),R.jsxs("button",{onClick:()=>s("dasha"),className:"group relative flex flex-row sm:flex-col items-center justify-between sm:justify-center p-4 md:p-6 bg-gradient-to-br from-orange-600/70 to-amber-900/80 backdrop-blur-md rounded-2xl md:rounded-3xl border-2 border-orange-400/50 hover:border-orange-300 active:scale-95 sm:hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/40 overflow-hidden text-left sm:text-center",children:[R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"}),R.jsxs("div",{className:"flex sm:flex-col items-center gap-3 sm:gap-2 relative z-10",children:[R.jsx("div",{className:"text-4xl sm:text-6xl md:text-7xl group-hover:scale-110 transition-transform drop-shadow-2xl",children:"🐱"}),R.jsxs("div",{children:[R.jsx("span",{className:"text-xl sm:text-2xl font-bold text-white drop-shadow-lg block",children:"Даша"}),R.jsx("span",{className:"text-[11px] text-orange-200 sm:hidden",children:"Ловкая и быстрая кошка"})]})]}),R.jsxs("div",{className:"relative z-10 text-xs sm:text-sm text-orange-100 space-y-0.5 sm:space-y-1 sm:mt-3 bg-black/20 sm:bg-transparent rounded-lg p-2 sm:p-0",children:[R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{children:"❤️"})," HP: ",R.jsx("b",{children:"80"})]}),R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{children:"🏃"})," Скорость: ",R.jsx("b",{children:"Высокая"})]}),R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{children:"🐾"})," Хвостик & ушки"]})]})]}),R.jsxs("button",{onClick:()=>s("aidar"),className:"group relative flex flex-row sm:flex-col items-center justify-between sm:justify-center p-4 md:p-6 bg-gradient-to-br from-gray-700/80 to-slate-900/90 backdrop-blur-md rounded-2xl md:rounded-3xl border-2 border-gray-500/50 hover:border-gray-300 active:scale-95 sm:hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-500/40 overflow-hidden text-left sm:text-center",children:[R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"}),R.jsxs("div",{className:"flex sm:flex-col items-center gap-3 sm:gap-2 relative z-10",children:[R.jsx("div",{className:"text-4xl sm:text-6xl md:text-7xl group-hover:scale-110 transition-transform drop-shadow-2xl",children:"🧑"}),R.jsxs("div",{children:[R.jsx("span",{className:"text-xl sm:text-2xl font-bold text-white drop-shadow-lg block",children:"Айдар"}),R.jsx("span",{className:"text-[11px] text-gray-300 sm:hidden",children:"Тяжелый бронированный танк"})]})]}),R.jsxs("div",{className:"relative z-10 text-xs sm:text-sm text-gray-200 space-y-0.5 sm:space-y-1 sm:mt-3 bg-black/20 sm:bg-transparent rounded-lg p-2 sm:p-0",children:[R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{children:"❤️"})," HP: ",R.jsx("b",{children:"120"})]}),R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{children:"🏃"})," Скорость: ",R.jsx("b",{children:"Танк"})]}),R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{children:"🖤"})," Чёрное худи"]})]})]})]}),R.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-4 w-full mb-4",children:[R.jsx("button",{onClick:o,className:"group relative py-3 px-2 sm:px-6 bg-gradient-to-r from-emerald-600/80 to-green-600/80 backdrop-blur-md text-white rounded-xl sm:rounded-2xl text-xs sm:text-base md:text-lg font-bold active:scale-95 sm:hover:scale-105 transition-all shadow-md border border-green-400/50 text-center",children:R.jsxs("span",{className:"relative z-10 flex items-center justify-center gap-1 sm:gap-2",children:[R.jsx("span",{children:"⚙️"}),R.jsx("span",{className:"hidden xs:inline",children:"Сложность"}),R.jsx("span",{className:"xs:hidden",children:"Бот"})]})}),R.jsx("button",{onClick:t,className:"group relative py-3 px-2 sm:px-6 bg-gradient-to-r from-amber-600/80 to-orange-600/80 backdrop-blur-md text-white rounded-xl sm:rounded-2xl text-xs sm:text-base md:text-lg font-bold active:scale-95 sm:hover:scale-105 transition-all shadow-md border border-yellow-400/50 text-center",children:R.jsxs("span",{className:"relative z-10 flex items-center justify-center gap-1 sm:gap-2",children:[R.jsx("span",{children:"📦"}),R.jsx("span",{children:"Кейсы"})]})}),R.jsx("button",{onClick:i,className:"group relative py-3 px-2 sm:px-6 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-md text-white rounded-xl sm:rounded-2xl text-xs sm:text-base md:text-lg font-bold active:scale-95 sm:hover:scale-105 transition-all shadow-md border border-blue-400/50 text-center",children:R.jsxs("span",{className:"relative z-10 flex items-center justify-center gap-1 sm:gap-2",children:[R.jsx("span",{children:"🌐"}),R.jsx("span",{className:"hidden xs:inline",children:"Мультиплеер"}),R.jsx("span",{className:"xs:hidden",children:"Сеть"})]})})]}),R.jsx("div",{className:"bg-slate-900/60 border border-slate-700/50 rounded-xl p-3 text-gray-300 text-center max-w-lg w-full text-xs sm:text-sm backdrop-blur-sm",children:l?R.jsxs("div",{className:"space-y-1",children:[R.jsx("p",{className:"font-semibold text-cyan-300",children:"📱 Управление на телефоне:"}),R.jsx("p",{className:"text-[11px] sm:text-xs text-gray-300",children:"Левая зона — стик бега • Правая зона — обзор • 🔴 — стрельба • ⟳ — перезарядка • ⚡ — спринт"})]}):R.jsxs("div",{className:"space-y-1",children:[R.jsx("p",{className:"font-semibold text-purple-300",children:"🎮 Управление на ПК:"}),R.jsx("p",{className:"text-[11px] sm:text-xs text-gray-300",children:"WASD — движение • Shift — спринт • Мышь — прицел • ЛКМ — стрельба • R — перезарядка"})]})})]})]})}function Qm({onSelect:s,onBack:e,coins:t}){const i=Object.entries(Cc),o=l=>{switch(l){case"ak":return"from-amber-600 to-orange-700";case"shotgun":return"from-red-600 to-rose-700";case"pistol":return"from-gray-600 to-slate-700";case"sniper":return"from-blue-600 to-indigo-700";case"smg":return"from-yellow-600 to-amber-700";case"rpg":return"from-purple-600 to-pink-700";case"minigun":return"from-orange-600 to-red-700";case"crossbow":return"from-green-600 to-emerald-700"}};return R.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-between bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-y-auto overflow-x-hidden p-4",children:[R.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[R.jsx("div",{className:"absolute w-72 md:w-96 h-72 md:h-96 bg-blue-500/15 rounded-full blur-3xl -top-32 -left-32 animate-pulse"}),R.jsx("div",{className:"absolute w-72 md:w-96 h-72 md:h-96 bg-cyan-500/15 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse",style:{animationDelay:"1s"}})]}),R.jsxs("div",{className:"relative z-10 flex flex-col items-center max-w-6xl w-full my-auto",children:[R.jsxs("div",{className:"flex items-center justify-between w-full mb-3 md:mb-5",children:[R.jsx("button",{onClick:e,className:"px-3 py-1.5 md:px-5 md:py-2 bg-slate-800/80 backdrop-blur-md text-white rounded-xl active:scale-95 hover:bg-slate-700 transition border border-slate-600/50 text-xs md:text-sm font-semibold",children:"← В меню"}),R.jsx("div",{className:"bg-yellow-600/30 border border-yellow-500/50 rounded-xl px-4 py-1.5 backdrop-blur-md",children:R.jsxs("span",{className:"text-yellow-400 font-extrabold text-sm md:text-base",children:["💰 ",t," монет"]})})]}),R.jsx("h2",{className:"text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 mb-1 text-center",children:"ВЫБОР ОРУЖИЯ"}),R.jsx("p",{className:"text-xs md:text-sm text-gray-400 mb-4 text-center",children:"Выбери ствол для сокрушительного боя"}),R.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 md:gap-4 w-full mb-4",children:i.map(([l,c])=>{const d=t<c.price&&c.price>0,f=o(l);return R.jsxs("button",{onClick:()=>!d&&s(l),disabled:d,className:`group relative flex flex-col items-center p-3 md:p-5 bg-gradient-to-br ${f}/75 backdrop-blur-md rounded-2xl border-2 transition-all duration-200 overflow-hidden text-center ${d?"border-gray-700/60 opacity-55 cursor-not-allowed grayscale":"border-white/25 hover:border-white active:scale-95 sm:hover:scale-105 hover:shadow-xl"}`,children:[R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"}),R.jsxs("div",{className:"relative z-10 w-full flex flex-col items-center",children:[R.jsx("div",{className:"text-3xl md:text-5xl mb-1.5 group-hover:scale-110 transition-transform drop-shadow-xl",children:c.emoji}),R.jsx("span",{className:"text-sm md:text-lg font-bold text-white drop-shadow-md mb-1 leading-tight",children:c.name}),c.price>0&&R.jsxs("div",{className:`text-[11px] md:text-xs font-bold mb-1.5 px-2 py-0.5 rounded-full ${d?"bg-red-950/80 text-red-300 border border-red-500/40":"bg-yellow-950/80 text-yellow-300 border border-yellow-500/40"}`,children:[d?"🔒":"✅"," ",c.price," 💰"]}),c.price===0&&R.jsx("div",{className:"text-[11px] md:text-xs text-emerald-300 font-bold mb-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40",children:"✓ Бесплатно"}),R.jsxs("div",{className:"text-[10px] md:text-xs text-white/90 space-y-0.5 text-left bg-black/30 rounded-lg p-1.5 md:p-2 w-full",children:[R.jsxs("div",{className:"flex justify-between",children:[R.jsx("span",{children:"💥 Урон:"}),R.jsx("span",{className:"font-bold text-amber-300",children:c.damage})]}),R.jsxs("div",{className:"flex justify-between",children:[R.jsx("span",{children:"⚡ Скоростр.:"}),R.jsxs("span",{className:"font-bold text-cyan-300",children:[c.fireRate,"мс"]})]}),R.jsxs("div",{className:"flex justify-between",children:[R.jsx("span",{children:"🔢 Дробь:"}),R.jsx("span",{className:"font-bold text-purple-300",children:c.bulletsPerShot})]})]})]})]},l)})})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ih="186",v_=0,e0=1,__=2,mc=1,ug=2,Ia=3,Xs=0,ui=1,zr=2,Vr=0,Fa=1,t0=2,n0=3,i0=4,y_=5,ko=100,S_=101,M_=102,E_=103,b_=104,T_=200,w_=201,C_=202,R_=203,dg=204,fg=205,A_=206,P_=207,L_=208,N_=209,D_=210,I_=211,U_=212,k_=213,F_=214,tf=0,nf=1,rf=2,Ha=3,sf=4,of=5,af=6,lf=7,Fc=0,O_=1,B_=2,vr=0,hg=1,pg=2,mg=3,rh=4,gg=5,xg=6,vg=7,_g=300,$s=301,Vo=302,xd=303,vd=304,Oc=306,cf=1e3,Hr=1001,uf=1002,jn=1003,z_=1004,$l=1005,ti=1006,_d=1007,Ws=1008,Li=1009,yg=1010,Sg=1011,Va=1012,sh=1013,_r=1014,gr=1015,yr=1016,oh=1017,ah=1018,Ga=1020,Mg=35902,Eg=35899,bg=1021,Tg=1022,or=1023,jr=1026,js=1027,wg=1028,lh=1029,Ys=1030,ch=1031,uh=1033,gc=33776,xc=33777,vc=33778,_c=33779,df=35840,ff=35841,hf=35842,pf=35843,mf=36196,gf=37492,xf=37496,vf=37488,_f=37489,Rc=37490,yf=37491,Sf=37808,Mf=37809,Ef=37810,bf=37811,Tf=37812,wf=37813,Cf=37814,Rf=37815,Af=37816,Pf=37817,Lf=37818,Nf=37819,Df=37820,If=37821,Uf=36492,kf=36494,Ff=36495,Of=36283,Bf=36284,Ac=36285,zf=36286,H_=3200,Pc=0,V_=1,vs="",Bi="srgb",Lc="srgb-linear",Nc="linear",en="srgb",yd=7680,G_=519,W_=512,j_=513,X_=514,dh=515,$_=516,Y_=517,fh=518,q_=519,K_=35044,r0="300 es",xr=2e3,Wa=2001;function Z_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Dc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function J_(){const s=Dc("canvas");return s.style.display="block",s}const s0={};function o0(...s){const e="THREE."+s.shift();console.log(e,...s)}function Cg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Et(...s){s=Cg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Kt(...s){s=Cg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Bo(...s){const e=s.join(" ");e in s0||(s0[e]=!0,Et(...s))}function Q_(s,e,t){return new Promise(function(i,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}const ey={[tf]:nf,[rf]:af,[sf]:lf,[Ha]:of,[nf]:tf,[af]:rf,[lf]:sf,[of]:Ha};class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sd=Math.PI/180,Hf=180/Math.PI;function $a(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jn[s&255]+Jn[s>>8&255]+Jn[s>>16&255]+Jn[s>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[t&63|128]+Jn[t>>8&255]+"-"+Jn[t>>16&255]+Jn[t>>24&255]+Jn[i&255]+Jn[i>>8&255]+Jn[i>>16&255]+Jn[i>>24&255]).toLowerCase()}function zt(s,e,t){return Math.max(e,Math.min(t,s))}function ty(s,e){return(s%e+e)%e}function Md(s,e,t){return(1-t)*s+t*e}function wa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Rh=class Rh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*o+e.x,this.y=l*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rh.prototype.isVector2=!0;let It=Rh;class Wo{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,l,c,d){let f=i[o+0],h=i[o+1],g=i[o+2],v=i[o+3],m=l[c+0],S=l[c+1],b=l[c+2],P=l[c+3];if(v!==P||f!==m||h!==S||g!==b){let y=f*m+h*S+g*b+v*P;y<0&&(m=-m,S=-S,b=-b,P=-P,y=-y);let _=1-d;if(y<.9995){const A=Math.acos(y),z=Math.sin(A);_=Math.sin(_*A)/z,d=Math.sin(d*A)/z,f=f*_+m*d,h=h*_+S*d,g=g*_+b*d,v=v*_+P*d}else{f=f*_+m*d,h=h*_+S*d,g=g*_+b*d,v=v*_+P*d;const A=1/Math.sqrt(f*f+h*h+g*g+v*v);f*=A,h*=A,g*=A,v*=A}}e[t]=f,e[t+1]=h,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,o,l,c){const d=i[o],f=i[o+1],h=i[o+2],g=i[o+3],v=l[c],m=l[c+1],S=l[c+2],b=l[c+3];return e[t]=d*b+g*v+f*S-h*m,e[t+1]=f*b+g*m+h*v-d*S,e[t+2]=h*b+g*S+d*m-f*v,e[t+3]=g*b-d*v-f*m-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,h=d(i/2),g=d(o/2),v=d(l/2),m=f(i/2),S=f(o/2),b=f(l/2);switch(c){case"XYZ":this._x=m*g*v+h*S*b,this._y=h*S*v-m*g*b,this._z=h*g*b+m*S*v,this._w=h*g*v-m*S*b;break;case"YXZ":this._x=m*g*v+h*S*b,this._y=h*S*v-m*g*b,this._z=h*g*b-m*S*v,this._w=h*g*v+m*S*b;break;case"ZXY":this._x=m*g*v-h*S*b,this._y=h*S*v+m*g*b,this._z=h*g*b+m*S*v,this._w=h*g*v-m*S*b;break;case"ZYX":this._x=m*g*v-h*S*b,this._y=h*S*v+m*g*b,this._z=h*g*b-m*S*v,this._w=h*g*v+m*S*b;break;case"YZX":this._x=m*g*v+h*S*b,this._y=h*S*v+m*g*b,this._z=h*g*b-m*S*v,this._w=h*g*v-m*S*b;break;case"XZY":this._x=m*g*v-h*S*b,this._y=h*S*v-m*g*b,this._z=h*g*b+m*S*v,this._w=h*g*v+m*S*b;break;default:Et("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],l=t[8],c=t[1],d=t[5],f=t[9],h=t[2],g=t[6],v=t[10],m=i+d+v;if(m>0){const S=.5/Math.sqrt(m+1);this._w=.25/S,this._x=(g-f)*S,this._y=(l-h)*S,this._z=(c-o)*S}else if(i>d&&i>v){const S=2*Math.sqrt(1+i-d-v);this._w=(g-f)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+h)/S}else if(d>v){const S=2*Math.sqrt(1+d-i-v);this._w=(l-h)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(f+g)/S}else{const S=2*Math.sqrt(1+v-i-d);this._w=(c-o)/S,this._x=(l+h)/S,this._y=(f+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,l=e._z,c=e._w,d=t._x,f=t._y,h=t._z,g=t._w;return this._x=i*g+c*d+o*h-l*f,this._y=o*g+c*f+l*d-i*h,this._z=l*g+c*h+i*f-o*d,this._w=c*g-i*d-o*f-l*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(i=-i,o=-o,l=-l,c=-c,d=-d);let f=1-t;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);f=Math.sin(f*h)/g,t=Math.sin(t*h)/g,this._x=this._x*f+i*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+i*t,this._y=this._y*f+o*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ah=class Ah{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(a0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(a0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*o,this.y=l[1]*t+l[4]*i+l[7]*o,this.z=l[2]*t+l[5]*i+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,l=e.x,c=e.y,d=e.z,f=e.w,h=2*(c*o-d*i),g=2*(d*t-l*o),v=2*(l*i-c*t);return this.x=t+f*h+c*v-d*g,this.y=i+f*g+d*h-l*v,this.z=o+f*v+l*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*o,this.y=l[1]*t+l[5]*i+l[9]*o,this.z=l[2]*t+l[6]*i+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this.z=zt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this.z=zt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*c-i*f,this.z=i*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ed.copy(this).projectOnVector(e),this.sub(Ed)}reflect(e){return this.sub(Ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ah.prototype.isVector3=!0;let G=Ah;const Ed=new G,a0=new Wo,Ph=class Ph{constructor(e,t,i,o,l,c,d,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,l,c,d,f,h)}set(e,t,i,o,l,c,d,f,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=l,g[5]=f,g[6]=i,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,l=this.elements,c=i[0],d=i[3],f=i[6],h=i[1],g=i[4],v=i[7],m=i[2],S=i[5],b=i[8],P=o[0],y=o[3],_=o[6],A=o[1],z=o[4],C=o[7],N=o[2],D=o[5],F=o[8];return l[0]=c*P+d*A+f*N,l[3]=c*y+d*z+f*D,l[6]=c*_+d*C+f*F,l[1]=h*P+g*A+v*N,l[4]=h*y+g*z+v*D,l[7]=h*_+g*C+v*F,l[2]=m*P+S*A+b*N,l[5]=m*y+S*z+b*D,l[8]=m*_+S*C+b*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],g=e[8];return t*c*g-t*d*h-i*l*g+i*d*f+o*l*h-o*c*f}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],g=e[8],v=g*c-d*h,m=d*f-g*l,S=h*l-c*f,b=t*v+i*m+o*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/b;return e[0]=v*P,e[1]=(o*h-g*i)*P,e[2]=(d*i-o*c)*P,e[3]=m*P,e[4]=(g*t-o*f)*P,e[5]=(o*l-d*t)*P,e[6]=S*P,e[7]=(i*f-h*t)*P,e[8]=(c*t-i*l)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,l,c,d){const f=Math.cos(l),h=Math.sin(l);return this.set(i*f,i*h,-i*(f*c+h*d)+c+e,-o*h,o*f,-o*(-h*c+f*d)+d+t,0,0,1),this}scale(e,t){return Bo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bd.makeScale(e,t)),this}rotate(e){return Bo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bd.makeRotation(-e)),this}translate(e,t){return Bo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ph.prototype.isMatrix3=!0;let Ct=Ph;const bd=new Ct,l0=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c0=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ny(){const s={enabled:!0,workingColorSpace:Lc,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===en&&(o.r=Gr(o.r),o.g=Gr(o.g),o.b=Gr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===en&&(o.r=zo(o.r),o.g=zo(o.g),o.b=zo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===vs?Nc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Lc]:{primaries:e,whitePoint:i,transfer:Nc,toXYZ:l0,fromXYZ:c0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:e,whitePoint:i,transfer:en,toXYZ:l0,fromXYZ:c0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),s}const Bt=ny();function Gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Mo;class iy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Mo===void 0&&(Mo=Dc("canvas")),Mo.width=e.width,Mo.height=e.height;const o=Mo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=Mo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Gr(l[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gr(t[i]/255)*255):t[i]=Gr(t[i]);return{data:t,width:e.width,height:e.height}}else return Et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ry=0;class hh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(Td(o[c].image)):l.push(Td(o[c]))}else l=Td(o);i.url=l}return t||(e.images[this.uuid]=i),i}}function Td(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Et("Texture: Unable to serialize Texture."),{})}let sy=0;const wd=new G;class di extends qs{constructor(e=di.DEFAULT_IMAGE,t=di.DEFAULT_MAPPING,i=Hr,o=Hr,l=ti,c=Ws,d=or,f=Li,h=di.DEFAULT_ANISOTROPY,g=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=$a(),this.name="",this.source=new hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=f,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Et(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cf:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case uf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cf:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case uf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}di.DEFAULT_IMAGE=null;di.DEFAULT_MAPPING=_g;di.DEFAULT_ANISOTROPY=1;const Lh=class Lh{constructor(e=0,t=0,i=0,o=1){this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,l;const f=e.elements,h=f[0],g=f[4],v=f[8],m=f[1],S=f[5],b=f[9],P=f[2],y=f[6],_=f[10];if(Math.abs(g-m)<.01&&Math.abs(v-P)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(v+P)<.1&&Math.abs(b+y)<.1&&Math.abs(h+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const z=(h+1)/2,C=(S+1)/2,N=(_+1)/2,D=(g+m)/4,F=(v+P)/4,E=(b+y)/4;return z>C&&z>N?z<.01?(i=0,o=.707106781,l=.707106781):(i=Math.sqrt(z),o=D/i,l=F/i):C>N?C<.01?(i=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),i=D/o,l=E/o):N<.01?(i=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),i=F/l,o=E/l),this.set(i,o,l,t),this}let A=Math.sqrt((y-b)*(y-b)+(v-P)*(v-P)+(m-g)*(m-g));return Math.abs(A)<.001&&(A=1),this.x=(y-b)/A,this.y=(v-P)/A,this.z=(m-g)/A,this.w=Math.acos((h+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=zt(this.x,e.x,t.x),this.y=zt(this.y,e.y,t.y),this.z=zt(this.z,e.z,t.z),this.w=zt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=zt(this.x,e,t),this.y=zt(this.y,e,t),this.z=zt(this.z,e,t),this.w=zt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(zt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lh.prototype.isVector4=!0;let Sn=Lh;class oy extends qs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Sn(0,0,e,t),this.scissorTest=!1,this.viewport=new Sn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:i.depth},l=new di(o),c=i.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ti,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new hh(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends oy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Rg extends di{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=jn,this.minFilter=jn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ay extends di{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=jn,this.minFilter=jn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const kc=class kc{constructor(e,t,i,o,l,c,d,f,h,g,v,m,S,b,P,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,l,c,d,f,h,g,v,m,S,b,P,y)}set(e,t,i,o,l,c,d,f,h,g,v,m,S,b,P,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=o,_[1]=l,_[5]=c,_[9]=d,_[13]=f,_[2]=h,_[6]=g,_[10]=v,_[14]=m,_[3]=S,_[7]=b,_[11]=P,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,o=1/Eo.setFromMatrixColumn(e,0).length(),l=1/Eo.setFromMatrixColumn(e,1).length(),c=1/Eo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,l=e.z,c=Math.cos(i),d=Math.sin(i),f=Math.cos(o),h=Math.sin(o),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const m=c*g,S=c*v,b=d*g,P=d*v;t[0]=f*g,t[4]=-f*v,t[8]=h,t[1]=S+b*h,t[5]=m-P*h,t[9]=-d*f,t[2]=P-m*h,t[6]=b+S*h,t[10]=c*f}else if(e.order==="YXZ"){const m=f*g,S=f*v,b=h*g,P=h*v;t[0]=m+P*d,t[4]=b*d-S,t[8]=c*h,t[1]=c*v,t[5]=c*g,t[9]=-d,t[2]=S*d-b,t[6]=P+m*d,t[10]=c*f}else if(e.order==="ZXY"){const m=f*g,S=f*v,b=h*g,P=h*v;t[0]=m-P*d,t[4]=-c*v,t[8]=b+S*d,t[1]=S+b*d,t[5]=c*g,t[9]=P-m*d,t[2]=-c*h,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const m=c*g,S=c*v,b=d*g,P=d*v;t[0]=f*g,t[4]=b*h-S,t[8]=m*h+P,t[1]=f*v,t[5]=P*h+m,t[9]=S*h-b,t[2]=-h,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const m=c*f,S=c*h,b=d*f,P=d*h;t[0]=f*g,t[4]=P-m*v,t[8]=b*v+S,t[1]=v,t[5]=c*g,t[9]=-d*g,t[2]=-h*g,t[6]=S*v+b,t[10]=m-P*v}else if(e.order==="XZY"){const m=c*f,S=c*h,b=d*f,P=d*h;t[0]=f*g,t[4]=-v,t[8]=h*g,t[1]=m*v+P,t[5]=c*g,t[9]=S*v-b,t[2]=b*v-S,t[6]=d*g,t[10]=P*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ly,e,cy)}lookAt(e,t,i){const o=this.elements;return Ri.subVectors(e,t),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),fs.crossVectors(i,Ri),fs.lengthSq()===0&&(Math.abs(i.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),fs.crossVectors(i,Ri)),fs.normalize(),Yl.crossVectors(Ri,fs),o[0]=fs.x,o[4]=Yl.x,o[8]=Ri.x,o[1]=fs.y,o[5]=Yl.y,o[9]=Ri.y,o[2]=fs.z,o[6]=Yl.z,o[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,l=this.elements,c=i[0],d=i[4],f=i[8],h=i[12],g=i[1],v=i[5],m=i[9],S=i[13],b=i[2],P=i[6],y=i[10],_=i[14],A=i[3],z=i[7],C=i[11],N=i[15],D=o[0],F=o[4],E=o[8],L=o[12],k=o[1],H=o[5],$=o[9],te=o[13],X=o[2],ie=o[6],me=o[10],se=o[14],ee=o[3],K=o[7],Z=o[11],I=o[15];return l[0]=c*D+d*k+f*X+h*ee,l[4]=c*F+d*H+f*ie+h*K,l[8]=c*E+d*$+f*me+h*Z,l[12]=c*L+d*te+f*se+h*I,l[1]=g*D+v*k+m*X+S*ee,l[5]=g*F+v*H+m*ie+S*K,l[9]=g*E+v*$+m*me+S*Z,l[13]=g*L+v*te+m*se+S*I,l[2]=b*D+P*k+y*X+_*ee,l[6]=b*F+P*H+y*ie+_*K,l[10]=b*E+P*$+y*me+_*Z,l[14]=b*L+P*te+y*se+_*I,l[3]=A*D+z*k+C*X+N*ee,l[7]=A*F+z*H+C*ie+N*K,l[11]=A*E+z*$+C*me+N*Z,l[15]=A*L+z*te+C*se+N*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],l=e[12],c=e[1],d=e[5],f=e[9],h=e[13],g=e[2],v=e[6],m=e[10],S=e[14],b=e[3],P=e[7],y=e[11],_=e[15],A=f*S-h*m,z=d*S-h*v,C=d*m-f*v,N=c*S-h*g,D=c*m-f*g,F=c*v-d*g;return t*(P*A-y*z+_*C)-i*(b*A-y*N+_*D)+o*(b*z-P*N+_*F)-l*(b*C-P*D+y*F)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],o=e[8],l=e[1],c=e[5],d=e[9],f=e[2],h=e[6],g=e[10];return t*(c*g-d*h)-i*(l*g-d*f)+o*(l*h-c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],d=e[5],f=e[6],h=e[7],g=e[8],v=e[9],m=e[10],S=e[11],b=e[12],P=e[13],y=e[14],_=e[15],A=t*d-i*c,z=t*f-o*c,C=t*h-l*c,N=i*f-o*d,D=i*h-l*d,F=o*h-l*f,E=g*P-v*b,L=g*y-m*b,k=g*_-S*b,H=v*y-m*P,$=v*_-S*P,te=m*_-S*y,X=A*te-z*$+C*H+N*k-D*L+F*E;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/X;return e[0]=(d*te-f*$+h*H)*ie,e[1]=(o*$-i*te-l*H)*ie,e[2]=(P*F-y*D+_*N)*ie,e[3]=(m*D-v*F-S*N)*ie,e[4]=(f*k-c*te-h*L)*ie,e[5]=(t*te-o*k+l*L)*ie,e[6]=(y*C-b*F-_*z)*ie,e[7]=(g*F-m*C+S*z)*ie,e[8]=(c*$-d*k+h*E)*ie,e[9]=(i*k-t*$-l*E)*ie,e[10]=(b*D-P*C+_*A)*ie,e[11]=(v*C-g*D-S*A)*ie,e[12]=(d*L-c*H-f*E)*ie,e[13]=(t*H-i*L+o*E)*ie,e[14]=(P*z-b*N-y*A)*ie,e[15]=(g*N-v*z+m*A)*ie,this}scale(e){const t=this.elements,i=e.x,o=e.y,l=e.z;return t[0]*=i,t[4]*=o,t[8]*=l,t[1]*=i,t[5]*=o,t[9]*=l,t[2]*=i,t[6]*=o,t[10]*=l,t[3]*=i,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),l=1-i,c=e.x,d=e.y,f=e.z,h=l*c,g=l*d;return this.set(h*c+i,h*d-o*f,h*f+o*d,0,h*d+o*f,g*d+i,g*f-o*c,0,h*f-o*d,g*f+o*c,l*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,l,c){return this.set(1,i,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,h=l+l,g=c+c,v=d+d,m=l*h,S=l*g,b=l*v,P=c*g,y=c*v,_=d*v,A=f*h,z=f*g,C=f*v,N=i.x,D=i.y,F=i.z;return o[0]=(1-(P+_))*N,o[1]=(S+C)*N,o[2]=(b-z)*N,o[3]=0,o[4]=(S-C)*D,o[5]=(1-(m+_))*D,o[6]=(y+A)*D,o[7]=0,o[8]=(b+z)*F,o[9]=(y-A)*F,o[10]=(1-(m+P))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return i.set(1,1,1),t.identity(),this;let c=Eo.set(o[0],o[1],o[2]).length();const d=Eo.set(o[4],o[5],o[6]).length(),f=Eo.set(o[8],o[9],o[10]).length();l<0&&(c=-c),nr.copy(this);const h=1/c,g=1/d,v=1/f;return nr.elements[0]*=h,nr.elements[1]*=h,nr.elements[2]*=h,nr.elements[4]*=g,nr.elements[5]*=g,nr.elements[6]*=g,nr.elements[8]*=v,nr.elements[9]*=v,nr.elements[10]*=v,t.setFromRotationMatrix(nr),i.x=c,i.y=d,i.z=f,this}makePerspective(e,t,i,o,l,c,d=xr,f=!1){const h=this.elements,g=2*l/(t-e),v=2*l/(i-o),m=(t+e)/(t-e),S=(i+o)/(i-o);let b,P;if(f)b=l/(c-l),P=c*l/(c-l);else if(d===xr)b=-(c+l)/(c-l),P=-2*c*l/(c-l);else if(d===Wa)b=-c/(c-l),P=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=P,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,o,l,c,d=xr,f=!1){const h=this.elements,g=2/(t-e),v=2/(i-o),m=-(t+e)/(t-e),S=-(i+o)/(i-o);let b,P;if(f)b=1/(c-l),P=c/(c-l);else if(d===xr)b=-2/(c-l),P=-(c+l)/(c-l);else if(d===Wa)b=-1/(c-l),P=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=b,h[14]=P,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};kc.prototype.isMatrix4=!0;let Tn=kc;const Eo=new G,nr=new Tn,ly=new G(0,0,0),cy=new G(1,1,1),fs=new G,Yl=new G,Ri=new G,u0=new Tn,d0=new Wo;class Xr{constructor(e=0,t=0,i=0,o=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,l=o[0],c=o[4],d=o[8],f=o[1],h=o[5],g=o[9],v=o[2],m=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(zt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-zt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:Et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return u0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return d0.setFromEuler(this),this.setFromQuaternion(d0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class Ag{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uy=0;const f0=new G,bo=new Wo,Ir=new Tn,ql=new G,Ca=new G,dy=new G,fy=new Wo,h0=new G(1,0,0),p0=new G(0,1,0),m0=new G(0,0,1),g0={type:"added"},hy={type:"removed"},To={type:"childadded",child:null},Cd={type:"childremoved",child:null};class Xn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new G,t=new Xr,i=new Wo,o=new G(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Tn},normalMatrix:{value:new Ct}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ag,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.multiply(bo),this}rotateOnWorldAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.premultiply(bo),this}rotateX(e){return this.rotateOnAxis(h0,e)}rotateY(e){return this.rotateOnAxis(p0,e)}rotateZ(e){return this.rotateOnAxis(m0,e)}translateOnAxis(e,t){return f0.copy(e).applyQuaternion(this.quaternion),this.position.add(f0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(h0,e)}translateY(e){return this.translateOnAxis(p0,e)}translateZ(e){return this.translateOnAxis(m0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ir.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ql.copy(e):ql.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ir.lookAt(Ca,ql,this.up):Ir.lookAt(ql,Ca,this.up),this.quaternion.setFromRotationMatrix(Ir),o&&(Ir.extractRotation(o.matrixWorld),bo.setFromRotationMatrix(Ir),this.quaternion.premultiply(bo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(g0),To.child=e,this.dispatchEvent(To),To.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hy),Cd.child=e,this.dispatchEvent(Cd),Cd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(g0),To.child=e,this.dispatchEvent(To),To.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*i-l[8]*o,l[13]+=i-l[1]*t-l[5]*i-l[9]*o,l[14]+=o-l[2]*t-l[6]*i-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let h=0,g=f.length;h<g;h++){const v=f[h];l(e.shapes,v)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,h=this.material.length;f<h;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),h=c(e.textures),g=c(e.images),v=c(e.shapes),m=c(e.skeletons),S=c(e.animations),b=c(e.nodes);d.length>0&&(i.geometries=d),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),g.length>0&&(i.images=g),v.length>0&&(i.shapes=v),m.length>0&&(i.skeletons=m),S.length>0&&(i.animations=S),b.length>0&&(i.nodes=b)}return i.object=o,i;function c(d){const f=[];for(const h in d){const g=d[h];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Xn.DEFAULT_UP=new G(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bn extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const py={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,l=null,c=null;const d=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const P of e.hand.values()){const y=t.getJointPose(P,i),_=this._getHandJoint(h,P);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=g.position.distanceTo(v.position),S=.02,b=.005;h.inputState.pinching&&m>S+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=S-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(py)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function Ad(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Bt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=Bt.workingColorSpace){if(e=ty(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=Ad(c,l,e+1/3),this.g=Ad(c,l,e),this.b=Ad(c,l,e-1/3)}return Bt.colorSpaceToWorking(this,o),this}setStyle(e,t=Bi){function i(l){l!==void 0&&parseFloat(l)<1&&Et("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Et("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);Et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bi){const i=Pg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bi){return Bt.workingToColorSpace(Qn.copy(this),e),Math.round(zt(Qn.r*255,0,255))*65536+Math.round(zt(Qn.g*255,0,255))*256+Math.round(zt(Qn.b*255,0,255))}getHexString(e=Bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(Qn.copy(this),t);const i=Qn.r,o=Qn.g,l=Qn.b,c=Math.max(i,o,l),d=Math.min(i,o,l);let f,h;const g=(d+c)/2;if(d===c)f=0,h=0;else{const v=c-d;switch(h=g<=.5?v/(c+d):v/(2-c-d),c){case i:f=(o-l)/v+(o<l?6:0);break;case o:f=(l-i)/v+2;break;case l:f=(i-o)/v+4;break}f/=6}return e.h=f,e.s=h,e.l=g,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(Qn.copy(this),t),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=Bi){Bt.workingToColorSpace(Qn.copy(this),e);const t=Qn.r,i=Qn.g,o=Qn.b;return e!==Bi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(Kl);const i=Md(hs.h,Kl.h,t),o=Md(hs.s,Kl.s,t),l=Md(hs.l,Kl.l,t);return this.setHSL(i,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*o,this.g=l[1]*t+l[4]*i+l[7]*o,this.b=l[2]*t+l[5]*i+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qn=new Dt;Dt.NAMES=Pg;class ph{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Dt(e),this.near=t,this.far=i}clone(){return new ph(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class my extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ir=new G,Ur=new G,Pd=new G,kr=new G,wo=new G,Co=new G,x0=new G,Ld=new G,Nd=new G,Dd=new G,Id=new Sn,Ud=new Sn,kd=new Sn;class sr{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),ir.subVectors(e,t),o.cross(ir);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,i,o,l){ir.subVectors(o,t),Ur.subVectors(i,t),Pd.subVectors(e,t);const c=ir.dot(ir),d=ir.dot(Ur),f=ir.dot(Pd),h=Ur.dot(Ur),g=Ur.dot(Pd),v=c*h-d*d;if(v===0)return l.set(0,0,0),null;const m=1/v,S=(h*f-d*g)*m,b=(c*g-d*f)*m;return l.set(1-S-b,b,S)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,kr)===null?!1:kr.x>=0&&kr.y>=0&&kr.x+kr.y<=1}static getInterpolation(e,t,i,o,l,c,d,f){return this.getBarycoord(e,t,i,o,kr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,kr.x),f.addScaledVector(c,kr.y),f.addScaledVector(d,kr.z),f)}static getInterpolatedAttribute(e,t,i,o,l,c){return Id.setScalar(0),Ud.setScalar(0),kd.setScalar(0),Id.fromBufferAttribute(e,t),Ud.fromBufferAttribute(e,i),kd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Id,l.x),c.addScaledVector(Ud,l.y),c.addScaledVector(kd,l.z),c}static isFrontFacing(e,t,i,o){return ir.subVectors(i,t),Ur.subVectors(e,t),ir.cross(Ur).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),Ur.subVectors(this.a,this.b),ir.cross(Ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,l){return sr.getInterpolation(e,this.a,this.b,this.c,t,i,o,l)}containsPoint(e){return sr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,l=this.c;let c,d;wo.subVectors(o,i),Co.subVectors(l,i),Ld.subVectors(e,i);const f=wo.dot(Ld),h=Co.dot(Ld);if(f<=0&&h<=0)return t.copy(i);Nd.subVectors(e,o);const g=wo.dot(Nd),v=Co.dot(Nd);if(g>=0&&v<=g)return t.copy(o);const m=f*v-g*h;if(m<=0&&f>=0&&g<=0)return c=f/(f-g),t.copy(i).addScaledVector(wo,c);Dd.subVectors(e,l);const S=wo.dot(Dd),b=Co.dot(Dd);if(b>=0&&S<=b)return t.copy(l);const P=S*h-f*b;if(P<=0&&h>=0&&b<=0)return d=h/(h-b),t.copy(i).addScaledVector(Co,d);const y=g*b-S*v;if(y<=0&&v-g>=0&&S-b>=0)return x0.subVectors(l,o),d=(v-g)/(v-g+(S-b)),t.copy(o).addScaledVector(x0,d);const _=1/(y+P+m);return c=P*_,d=m*_,t.copy(i).addScaledVector(wo,c).addScaledVector(Co,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ya{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,rr):rr.fromBufferAttribute(l,c),rr.applyMatrix4(e.matrixWorld),this.expandByPoint(rr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zl.copy(i.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ra),Jl.subVectors(this.max,Ra),Ro.subVectors(e.a,Ra),Ao.subVectors(e.b,Ra),Po.subVectors(e.c,Ra),ps.subVectors(Ao,Ro),ms.subVectors(Po,Ao),Fs.subVectors(Ro,Po);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Fs.z,Fs.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Fs.z,0,-Fs.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Fs.y,Fs.x,0];return!Fd(t,Ro,Ao,Po,Jl)||(t=[1,0,0,0,1,0,0,0,1],!Fd(t,Ro,Ao,Po,Jl))?!1:(Ql.crossVectors(ps,ms),t=[Ql.x,Ql.y,Ql.z],Fd(t,Ro,Ao,Po,Jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fr=[new G,new G,new G,new G,new G,new G,new G,new G],rr=new G,Zl=new Ya,Ro=new G,Ao=new G,Po=new G,ps=new G,ms=new G,Fs=new G,Ra=new G,Jl=new G,Ql=new G,Os=new G;function Fd(s,e,t,i,o){for(let l=0,c=s.length-3;l<=c;l+=3){Os.fromArray(s,l);const d=o.x*Math.abs(Os.x)+o.y*Math.abs(Os.y)+o.z*Math.abs(Os.z),f=e.dot(Os),h=t.dot(Os),g=i.dot(Os);if(Math.max(-Math.max(f,h,g),Math.min(f,h,g))>d)return!1}return!0}const Nn=new G,ec=new It;let gy=0;class Wr extends qs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=K_,this.updateRanges=[],this.gpuType=gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ec.fromBufferAttribute(this,t),ec.applyMatrix3(e),this.setXY(t,ec.x,ec.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix3(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Mi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Mi(t,this.array),i=Mi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Mi(t,this.array),i=Mi(i,this.array),o=Mi(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,l){return e*=this.itemSize,this.normalized&&(t=Mi(t,this.array),i=Mi(i,this.array),o=Mi(o,this.array),l=Mi(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Lg extends Wr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ng extends Wr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mn extends Wr{constructor(e,t,i){super(new Float32Array(e),t,i)}}const xy=new Ya,Aa=new G,Od=new G;class mh{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xy.setFromPoints(e).getCenter(i);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);const t=Aa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Aa,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Od)),this.expandByPoint(Aa.copy(e.center).sub(Od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vy=0;const Oi=new Tn,Bd=new Xn,Lo=new G,Ai=new Ya,Pa=new Ya,Vn=new G;class bi extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z_(e)?Ng:Lg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new Ct().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,i){return Oi.makeTranslation(e,t,i),this.applyMatrix4(Oi),this}scale(e,t,i){return Oi.makeScale(e,t,i),this.applyMatrix4(Oi),this}lookAt(e){return Bd.lookAt(e),Bd.updateMatrix(),this.applyMatrix4(Bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new mn(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const l=t[i];Ai.setFromBufferAttribute(l),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];Pa.setFromBufferAttribute(d),this.morphTargetsRelative?(Vn.addVectors(Ai.min,Pa.min),Ai.expandByPoint(Vn),Vn.addVectors(Ai.max,Pa.max),Ai.expandByPoint(Vn)):(Ai.expandByPoint(Pa.min),Ai.expandByPoint(Pa.max))}Ai.getCenter(i);let o=0;for(let l=0,c=e.count;l<c;l++)Vn.fromBufferAttribute(e,l),o=Math.max(o,i.distanceToSquared(Vn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)Vn.fromBufferAttribute(d,h),f&&(Lo.fromBufferAttribute(e,h),Vn.add(Lo)),o=Math.max(o,i.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Wr(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const d=[],f=[];for(let E=0;E<i.count;E++)d[E]=new G,f[E]=new G;const h=new G,g=new G,v=new G,m=new It,S=new It,b=new It,P=new G,y=new G;function _(E,L,k){h.fromBufferAttribute(i,E),g.fromBufferAttribute(i,L),v.fromBufferAttribute(i,k),m.fromBufferAttribute(l,E),S.fromBufferAttribute(l,L),b.fromBufferAttribute(l,k),g.sub(h),v.sub(h),S.sub(m),b.sub(m);const H=1/(S.x*b.y-b.x*S.y);isFinite(H)&&(P.copy(g).multiplyScalar(b.y).addScaledVector(v,-S.y).multiplyScalar(H),y.copy(v).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(H),d[E].add(P),d[L].add(P),d[k].add(P),f[E].add(y),f[L].add(y),f[k].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let E=0,L=A.length;E<L;++E){const k=A[E],H=k.start,$=k.count;for(let te=H,X=H+$;te<X;te+=3)_(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const z=new G,C=new G,N=new G,D=new G;function F(E){N.fromBufferAttribute(o,E),D.copy(N);const L=d[E];z.copy(L),z.sub(N.multiplyScalar(N.dot(L))).normalize(),C.crossVectors(D,L);const H=C.dot(f[E])<0?-1:1;c.setXYZW(E,z.x,z.y,z.z,H)}for(let E=0,L=A.length;E<L;++E){const k=A[E],H=k.start,$=k.count;for(let te=H,X=H+$;te<X;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Wr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,S=i.count;m<S;m++)i.setXYZ(m,0,0,0);const o=new G,l=new G,c=new G,d=new G,f=new G,h=new G,g=new G,v=new G;if(e)for(let m=0,S=e.count;m<S;m+=3){const b=e.getX(m+0),P=e.getX(m+1),y=e.getX(m+2);o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,P),c.fromBufferAttribute(t,y),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),d.fromBufferAttribute(i,b),f.fromBufferAttribute(i,P),h.fromBufferAttribute(i,y),d.add(g),f.add(g),h.add(g),i.setXYZ(b,d.x,d.y,d.z),i.setXYZ(P,f.x,f.y,f.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,S=t.count;m<S;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,l),v.subVectors(o,l),g.cross(v),i.setXYZ(m+0,g.x,g.y,g.z),i.setXYZ(m+1,g.x,g.y,g.z),i.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vn.fromBufferAttribute(e,t),Vn.normalize(),e.setXYZ(t,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function e(d,f){const h=d.array,g=d.itemSize,v=d.normalized,m=new h.constructor(f.length*g);let S=0,b=0;for(let P=0,y=f.length;P<y;P++){d.isInterleavedBufferAttribute?S=f[P]*d.data.stride+d.offset:S=f[P]*g;for(let _=0;_<g;_++)m[b++]=h[S++]}return new Wr(m,g,v)}if(this.index===null)return Et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,i=this.index.array,o=this.attributes;for(const d in o){const f=o[d],h=e(f,i);t.setAttribute(d,h)}const l=this.morphAttributes;for(const d in l){const f=[],h=l[d];for(let g=0,v=h.length;g<v;g++){const m=h[g],S=e(m,i);f.push(S)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const h=c[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],g=[];for(let v=0,m=h.length;v<m;v++){const S=h[v];g.push(S.toJSON(e.data))}g.length>0&&(o[f]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const l=e.morphAttributes;for(const h in l){const g=[],v=l[h];for(let m=0,S=v.length;m<S;m++)g.push(v[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zd=new G,_y=new G,yy=new Ct;class xs{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=zd.subVectors(i,t).cross(_y.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const o=e.delta(zd),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||yy.getNormalMatrix(e),o=this.coplanarPoint(zd).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Sy=0;class jo extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=Fa,this.side=Xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dg,this.blendDst=fg,this.blendEquation=ko,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yd,this.stencilZFail=yd,this.stencilZPass=yd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Et(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector2&&i&&i.isVector2||o&&o.isEuler&&i&&i.isEuler||o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new xs().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new It().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let l=0;l!==o;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Or=new G,Hd=new G,tc=new G,nc=new G;class My{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Or.copy(this.origin).addScaledVector(this.direction,t),Or.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Hd.copy(e).add(t).multiplyScalar(.5),tc.copy(t).sub(e).normalize(),nc.copy(this.origin).sub(Hd);const l=e.distanceTo(t)*.5,c=-this.direction.dot(tc),d=nc.dot(this.direction),f=-nc.dot(tc),h=nc.lengthSq(),g=Math.abs(1-c*c);let v,m,S,b;if(g>0)if(v=c*f-d,m=c*d-f,b=l*g,v>=0)if(m>=-b)if(m<=b){const P=1/g;v*=P,m*=P,S=v*(v+c*m+2*d)+m*(c*v+m+2*f)+h}else m=l,v=Math.max(0,-(c*m+d)),S=-v*v+m*(m+2*f)+h;else m=-l,v=Math.max(0,-(c*m+d)),S=-v*v+m*(m+2*f)+h;else m<=-b?(v=Math.max(0,-(-c*l+d)),m=v>0?-l:Math.min(Math.max(-l,-f),l),S=-v*v+m*(m+2*f)+h):m<=b?(v=0,m=Math.min(Math.max(-l,-f),l),S=m*(m+2*f)+h):(v=Math.max(0,-(c*l+d)),m=v>0?l:Math.min(Math.max(-l,-f),l),S=-v*v+m*(m+2*f)+h);else m=c>0?-l:l,v=Math.max(0,-(c*m+d)),S=-v*v+m*(m+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Hd).addScaledVector(tc,m),S}intersectSphere(e,t){if(e.radius<0)return null;Or.subVectors(e.center,this.origin);const i=Or.dot(this.direction),o=Or.dot(Or)-i*i,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),d=i-c,f=i+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,l,c,d,f;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(l=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(l=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),i>c||l>o||((l>i||isNaN(i))&&(i=l),(c<o||isNaN(o))&&(o=c),v>=0?(d=(e.min.z-m.z)*v,f=(e.max.z-m.z)*v):(d=(e.max.z-m.z)*v,f=(e.min.z-m.z)*v),i>f||d>o)||((d>i||i!==i)&&(i=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Or)!==null}intersectTriangle(e,t,i,o,l){const c=this.origin,d=this.direction,f=d.x,h=d.y,g=d.z,v=e.x-c.x,m=e.y-c.y,S=e.z-c.z,b=t.x-c.x,P=t.y-c.y,y=t.z-c.z,_=i.x-c.x,A=i.y-c.y,z=i.z-c.z,C=Math.abs(f),N=Math.abs(h),D=Math.abs(g);let F,E,L,k,H,$,te,X,ie,me,se,ee;if(C>=N&&C>=D?(L=f,$=v,ie=b,ee=_,f>=0?(F=h,E=g,k=m,H=S,te=P,X=y,me=A,se=z):(F=g,E=h,k=S,H=m,te=y,X=P,me=z,se=A)):N>=D?(L=h,$=m,ie=P,ee=A,h>=0?(F=g,E=f,k=S,H=v,te=y,X=b,me=z,se=_):(F=f,E=g,k=v,H=S,te=b,X=y,me=_,se=z)):(L=g,$=S,ie=y,ee=z,g>=0?(F=f,E=h,k=v,H=m,te=b,X=P,me=_,se=A):(F=h,E=f,k=m,H=v,te=P,X=b,me=A,se=_)),L===0)return null;const K=F/L,Z=E/L,I=1/L,ae=k-K*$,Te=H-Z*$,qe=te-K*ie,Ye=X-Z*ie,Ke=me-K*ee,ce=se-Z*ee,pe=Ke*Ye-ce*qe,Ae=ae*ce-Te*Ke,at=qe*Te-Ye*ae;if(o){if(pe<0||Ae<0||at<0)return null}else if((pe<0||Ae<0||at<0)&&(pe>0||Ae>0||at>0))return null;const Ve=pe+Ae+at;if(Ve===0)return null;const Rt=I*(pe*$+Ae*ie+at*ee);return(Ve>0?Rt<0:Rt>0)?null:this.at(Rt/Ve,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vs extends jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const v0=new Tn,Bs=new My,ic=new mh,_0=new G,rc=new G,sc=new G,oc=new G,Vd=new G,ac=new G,y0=new G,lc=new G;class $e extends Xn{constructor(e=new bi,t=new Vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){ac.set(0,0,0);for(let f=0,h=l.length;f<h;f++){const g=d[f],v=l[f];g!==0&&(Vd.fromBufferAttribute(v,e),c?ac.addScaledVector(Vd,g):ac.addScaledVector(Vd.sub(t),g))}t.add(ac)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(l),Bs.copy(e.ray).recast(e.near),!(ic.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(ic,_0)===null||Bs.origin.distanceToSquared(_0)>(e.far-e.near)**2))&&(v0.copy(l).invert(),Bs.copy(e.ray).applyMatrix4(v0),!(i.boundingBox!==null&&Bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,i){let o;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,m=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(c))for(let b=0,P=m.length;b<P;b++){const y=m[b],_=c[y.materialIndex],A=Math.max(y.start,S.start),z=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let C=A,N=z;C<N;C+=3){const D=d.getX(C),F=d.getX(C+1),E=d.getX(C+2);o=cc(this,_,e,i,h,g,v,D,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,S.start),P=Math.min(d.count,S.start+S.count);for(let y=b,_=P;y<_;y+=3){const A=d.getX(y),z=d.getX(y+1),C=d.getX(y+2);o=cc(this,c,e,i,h,g,v,A,z,C),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(c))for(let b=0,P=m.length;b<P;b++){const y=m[b],_=c[y.materialIndex],A=Math.max(y.start,S.start),z=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=A,N=z;C<N;C+=3){const D=C,F=C+1,E=C+2;o=cc(this,_,e,i,h,g,v,D,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const b=Math.max(0,S.start),P=Math.min(f.count,S.start+S.count);for(let y=b,_=P;y<_;y+=3){const A=y,z=y+1,C=y+2;o=cc(this,c,e,i,h,g,v,A,z,C),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Ey(s,e,t,i,o,l,c,d){let f;if(e.side===ui?f=i.intersectTriangle(c,l,o,!0,d):f=i.intersectTriangle(o,l,c,e.side===Xs,d),f===null)return null;lc.copy(d),lc.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(lc);return h<t.near||h>t.far?null:{distance:h,point:lc.clone(),object:s}}function cc(s,e,t,i,o,l,c,d,f,h){s.getVertexPosition(d,rc),s.getVertexPosition(f,sc),s.getVertexPosition(h,oc);const g=Ey(s,e,t,i,rc,sc,oc,y0);if(g){const v=new G;sr.getBarycoord(y0,rc,sc,oc,v),o&&(g.uv=sr.getInterpolatedAttribute(o,d,f,h,v,new It)),l&&(g.uv1=sr.getInterpolatedAttribute(l,d,f,h,v,new It)),c&&(g.normal=sr.getInterpolatedAttribute(c,d,f,h,v,new G),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const m={a:d,b:f,c:h,normal:new G,materialIndex:0};sr.getNormal(rc,sc,oc,m.normal),g.face=m,g.barycoord=v}return g}class by extends di{constructor(e=null,t=1,i=1,o,l,c,d,f,h=jn,g=jn,v,m){super(null,c,d,f,h,g,o,l,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zs=new mh,Ty=new It(.5,.5),uc=new G;class gh{constructor(e=new xs,t=new xs,i=new xs,o=new xs,l=new xs,c=new xs){this.planes=[e,t,i,o,l,c]}set(e,t,i,o,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(i),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xr,i=!1){const o=this.planes,l=e.elements,c=l[0],d=l[1],f=l[2],h=l[3],g=l[4],v=l[5],m=l[6],S=l[7],b=l[8],P=l[9],y=l[10],_=l[11],A=l[12],z=l[13],C=l[14],N=l[15];if(o[0].setComponents(h-c,S-g,_-b,N-A).normalize(),o[1].setComponents(h+c,S+g,_+b,N+A).normalize(),o[2].setComponents(h+d,S+v,_+P,N+z).normalize(),o[3].setComponents(h-d,S-v,_-P,N-z).normalize(),i)o[4].setComponents(f,m,y,C).normalize(),o[5].setComponents(h-f,S-m,_-y,N-C).normalize();else if(o[4].setComponents(h-f,S-m,_-y,N-C).normalize(),t===xr)o[5].setComponents(h+f,S+m,_+y,N+C).normalize();else if(t===Wa)o[5].setComponents(f,m,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const t=Ty.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(uc.x=o.normal.x>0?e.max.x:e.min.x,uc.y=o.normal.y>0?e.max.y:e.min.y,uc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dg extends di{constructor(e=[],t=$s,i,o,l,c,d,f,h,g){super(e,t,i,o,l,c,d,f,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ja extends di{constructor(e,t,i=_r,o,l,c,d=jn,f=jn,h,g=jr,v=1){if(g!==jr&&g!==js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,l,c,d,f,g,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class wy extends ja{constructor(e,t=_r,i=$s,o,l,c=jn,d=jn,f,h=jr){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,i,o,l,c,d,f,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ig extends di{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fn extends bi{constructor(e=1,t=1,i=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:l,depthSegments:c};const d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const f=[],h=[],g=[],v=[];let m=0,S=0;b("z","y","x",-1,-1,i,t,e,c,l,0),b("z","y","x",1,-1,i,t,-e,c,l,1),b("x","z","y",1,1,e,i,t,o,c,2),b("x","z","y",1,-1,e,i,-t,o,c,3),b("x","y","z",1,-1,e,t,i,o,l,4),b("x","y","z",-1,-1,e,t,-i,o,l,5),this.setIndex(f),this.setAttribute("position",new mn(h,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(v,2));function b(P,y,_,A,z,C,N,D,F,E,L){const k=C/F,H=N/E,$=C/2,te=N/2,X=D/2,ie=F+1,me=E+1;let se=0,ee=0;const K=new G;for(let Z=0;Z<me;Z++){const I=Z*H-te;for(let ae=0;ae<ie;ae++){const Te=ae*k-$;K[P]=Te*A,K[y]=I*z,K[_]=X,h.push(K.x,K.y,K.z),K[P]=0,K[y]=0,K[_]=D>0?1:-1,g.push(K.x,K.y,K.z),v.push(ae/F),v.push(1-Z/E),se+=1}}for(let Z=0;Z<E;Z++)for(let I=0;I<F;I++){const ae=m+I+ie*Z,Te=m+I+ie*(Z+1),qe=m+(I+1)+ie*(Z+1),Ye=m+(I+1)+ie*Z;f.push(ae,Te,Ye),f.push(Te,qe,Ye),ee+=6}d.addGroup(S,ee,L),S+=ee,m+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xh extends bi{constructor(e=1,t=1,i=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:o,heightSegments:l},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const c=[],d=[],f=[],h=[],g=t/2,v=Math.PI/2*e,m=t,S=2*v+m,b=i*2+l,P=o+1,y=new G,_=new G;for(let A=0;A<=b;A++){let z=0,C=0,N=0,D=0;if(A<=i){const L=A/i,k=L*Math.PI/2;C=-g-e*Math.cos(k),N=e*Math.sin(k),D=-e*Math.cos(k),z=L*v}else if(A<=i+l){const L=(A-i)/l;C=-g+L*t,N=e,D=0,z=v+L*m}else{const L=(A-i-l)/i,k=L*Math.PI/2;C=g+e*Math.sin(k),N=e*Math.cos(k),D=e*Math.sin(k),z=v+m+L*v}const F=Math.max(0,Math.min(1,z/S));let E=0;A===0?E=.5/o:A===b&&(E=-.5/o);for(let L=0;L<=o;L++){const k=L/o,H=k*Math.PI*2,$=Math.sin(H),te=Math.cos(H);_.x=-N*te,_.y=C,_.z=N*$,d.push(_.x,_.y,_.z),y.set(-N*te,D,N*$),y.normalize(),f.push(y.x,y.y,y.z),h.push(k+E,F)}if(A>0){const L=(A-1)*P;for(let k=0;k<o;k++){const H=L+k,$=L+k+1,te=A*P+k,X=A*P+k+1;c.push(H,$,te),c.push($,X,te)}}}this.setIndex(c),this.setAttribute("position",new mn(d,3)),this.setAttribute("normal",new mn(f,3)),this.setAttribute("uv",new mn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class vh extends bi{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const l=[],c=[],d=[],f=[],h=new G,g=new It;c.push(0,0,0),d.push(0,0,1),f.push(.5,.5);for(let v=0,m=3;v<=t;v++,m+=3){const S=i+v/t*o;h.x=e*Math.cos(S),h.y=e*Math.sin(S),c.push(h.x,h.y,h.z),d.push(0,0,1),g.x=(c[m]/e+1)/2,g.y=(c[m+1]/e+1)/2,f.push(g.x,g.y)}for(let v=1;v<=t;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(d,3)),this.setAttribute("uv",new mn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Rn extends bi{constructor(e=1,t=1,i=1,o=32,l=1,c=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:f};const h=this;o=Math.floor(o),l=Math.floor(l);const g=[],v=[],m=[],S=[];let b=0;const P=[],y=i/2;let _=0;A(),c===!1&&(e>0&&z(!0),t>0&&z(!1)),this.setIndex(g),this.setAttribute("position",new mn(v,3)),this.setAttribute("normal",new mn(m,3)),this.setAttribute("uv",new mn(S,2));function A(){const C=new G,N=new G;let D=0;const F=(t-e)/i;for(let E=0;E<=l;E++){const L=[],k=E/l,H=k*(t-e)+e;for(let $=0;$<=o;$++){const te=$/o,X=te*f+d,ie=Math.sin(X),me=Math.cos(X);N.x=H*ie,N.y=-k*i+y,N.z=H*me,v.push(N.x,N.y,N.z),C.set(ie,F,me).normalize(),m.push(C.x,C.y,C.z),S.push(te,1-k),L.push(b++)}P.push(L)}for(let E=0;E<o;E++)for(let L=0;L<l;L++){const k=P[L][E],H=P[L+1][E],$=P[L+1][E+1],te=P[L][E+1];(e>0||L!==0)&&(g.push(k,H,te),D+=3),(t>0||L!==l-1)&&(g.push(H,$,te),D+=3)}h.addGroup(_,D,0),_+=D}function z(C){const N=b,D=new It,F=new G;let E=0;const L=C===!0?e:t,k=C===!0?1:-1;for(let $=1;$<=o;$++)v.push(0,y*k,0),m.push(0,k,0),S.push(.5,.5),b++;const H=b;for(let $=0;$<=o;$++){const X=$/o*f+d,ie=Math.cos(X),me=Math.sin(X);F.x=L*me,F.y=y*k,F.z=L*ie,v.push(F.x,F.y,F.z),m.push(0,k,0),D.x=ie*.5+.5,D.y=me*.5*k+.5,S.push(D.x,D.y),b++}for(let $=0;$<o;$++){const te=N+$,X=H+$;C===!0?g.push(X,X+1,te):g.push(X+1,X,te),E+=3}h.addGroup(_,E,C===!0?1:2),_+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oa extends Rn{constructor(e=1,t=1,i=32,o=1,l=!1,c=0,d=Math.PI*2){super(0,e,t,i,o,l,c,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:o,openEnded:l,thetaStart:c,thetaLength:d}}static fromJSON(e){return new Oa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _h extends bi{constructor(e=[],t=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:o};const l=[],c=[];d(o),h(i),g(),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(l.slice(),3)),this.setAttribute("uv",new mn(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(A){const z=new G,C=new G,N=new G;for(let D=0;D<t.length;D+=3)S(t[D+0],z),S(t[D+1],C),S(t[D+2],N),f(z,C,N,A)}function f(A,z,C,N){const D=N+1,F=[];for(let E=0;E<=D;E++){F[E]=[];const L=A.clone().lerp(C,E/D),k=z.clone().lerp(C,E/D),H=D-E;for(let $=0;$<=H;$++)$===0&&E===D?F[E][$]=L:F[E][$]=L.clone().lerp(k,$/H)}for(let E=0;E<D;E++)for(let L=0;L<2*(D-E)-1;L++){const k=Math.floor(L/2);L%2===0?(m(F[E][k+1]),m(F[E+1][k]),m(F[E][k])):(m(F[E][k+1]),m(F[E+1][k+1]),m(F[E+1][k]))}}function h(A){const z=new G;for(let C=0;C<l.length;C+=3)z.x=l[C+0],z.y=l[C+1],z.z=l[C+2],z.normalize().multiplyScalar(A),l[C+0]=z.x,l[C+1]=z.y,l[C+2]=z.z}function g(){const A=new G;for(let z=0;z<l.length;z+=3){A.x=l[z+0],A.y=l[z+1],A.z=l[z+2];const C=y(A)/2/Math.PI+.5,N=_(A)/Math.PI+.5;c.push(C,1-N)}b(),v()}function v(){for(let A=0;A<c.length;A+=6){const z=c[A+0],C=c[A+2],N=c[A+4],D=Math.max(z,C,N),F=Math.min(z,C,N);D>.9&&F<.1&&(z<.2&&(c[A+0]+=1),C<.2&&(c[A+2]+=1),N<.2&&(c[A+4]+=1))}}function m(A){l.push(A.x,A.y,A.z)}function S(A,z){const C=A*3;z.x=e[C+0],z.y=e[C+1],z.z=e[C+2]}function b(){const A=new G,z=new G,C=new G,N=new G,D=new It,F=new It,E=new It;for(let L=0,k=0;L<l.length;L+=9,k+=6){A.set(l[L+0],l[L+1],l[L+2]),z.set(l[L+3],l[L+4],l[L+5]),C.set(l[L+6],l[L+7],l[L+8]),D.set(c[k+0],c[k+1]),F.set(c[k+2],c[k+3]),E.set(c[k+4],c[k+5]),N.copy(A).add(z).add(C).divideScalar(3);const H=y(N);P(D,k+0,A,H),P(F,k+2,z,H),P(E,k+4,C,H)}}function P(A,z,C,N){N<0&&A.x===1&&(c[z]=A.x-1),C.x===0&&C.z===0&&(c[z]=N/2/Math.PI+.5)}function y(A){return Math.atan2(A.z,-A.x)}function _(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.vertices,e.indices,e.radius,e.detail)}}class yh extends _h{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,o=1/i,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-i,0,-o,i,0,o,-i,0,o,i,-o,-i,0,-o,i,0,o,-i,0,o,i,0,-i,0,-o,i,0,-o,-i,0,o,i,0,o],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,c,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yh(e.radius,e.detail)}}class qa extends bi{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const l=e/2,c=t/2,d=Math.floor(i),f=Math.floor(o),h=d+1,g=f+1,v=e/d,m=t/f,S=[],b=[],P=[],y=[];for(let _=0;_<g;_++){const A=_*m-c;for(let z=0;z<h;z++){const C=z*v-l;b.push(C,-A,0),P.push(0,0,1),y.push(z/d),y.push(1-_/f)}}for(let _=0;_<f;_++)for(let A=0;A<d;A++){const z=A+h*_,C=A+h*(_+1),N=A+1+h*(_+1),D=A+1+h*_;S.push(z,C,D),S.push(C,N,D)}this.setIndex(S),this.setAttribute("position",new mn(b,3)),this.setAttribute("normal",new mn(P,3)),this.setAttribute("uv",new mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pi extends bi{constructor(e=1,t=32,i=16,o=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const f=Math.min(c+d,Math.PI);let h=0;const g=[],v=new G,m=new G,S=[],b=[],P=[],y=[];for(let _=0;_<=i;_++){const A=[],z=_/i,C=c+z*d,N=e*Math.cos(C),D=Math.sqrt(e*e-N*N);let F=0;_===0&&c===0?F=.5/t:_===i&&f===Math.PI&&(F=-.5/t);for(let E=0;E<=t;E++){const L=E/t,k=o+L*l;v.x=-D*Math.cos(k),v.y=N,v.z=D*Math.sin(k),b.push(v.x,v.y,v.z),m.copy(v).normalize(),P.push(m.x,m.y,m.z),y.push(L+F,1-z),A.push(h++)}g.push(A)}for(let _=0;_<i;_++)for(let A=0;A<t;A++){const z=g[_][A+1],C=g[_][A],N=g[_+1][A],D=g[_+1][A+1];(_!==0||c>0)&&S.push(z,C,D),(_!==i-1||f<Math.PI)&&S.push(C,N,D)}this.setIndex(S),this.setAttribute("position",new mn(b,3)),this.setAttribute("normal",new mn(P,3)),this.setAttribute("uv",new mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Go(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];if(S0(o))o.isRenderTargetTexture?(Et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone();else if(Array.isArray(o))if(S0(o[0])){const l=[];for(let c=0,d=o.length;c<d;c++)l[c]=o[c].clone();e[t][i]=l}else e[t][i]=o.slice();else e[t][i]=o}}return e}function ci(s){const e={};for(let t=0;t<s.length;t++){const i=Go(s[t]);for(const o in i)e[o]=i[o]}return e}function S0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Cy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ug(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const Ry={clone:Go,merge:ci};var Ay=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ay,this.fragmentShader=Py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Go(e.uniforms),this.uniformsGroups=Cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const o=e.uniforms[i];switch(this.uniforms[i]={},o.type){case"t":this.uniforms[i].value=t[o.value]||null;break;case"c":this.uniforms[i].value=new Dt().setHex(o.value);break;case"v2":this.uniforms[i].value=new It().fromArray(o.value);break;case"v3":this.uniforms[i].value=new G().fromArray(o.value);break;case"v4":this.uniforms[i].value=new Sn().fromArray(o.value);break;case"m3":this.uniforms[i].value=new Ct().fromArray(o.value);break;case"m4":this.uniforms[i].value=new Tn().fromArray(o.value);break;default:this.uniforms[i].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ly extends lr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yn extends jo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Dt(16777215),this.specular=new Dt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=Fc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gd extends jo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=Fc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ny extends jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dy extends jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sh extends Xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Iy extends Sh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wd=new Tn,M0=new G,E0=new G;class Uy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new Tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gh,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;M0.setFromMatrixPosition(e.matrixWorld),t.position.copy(M0),E0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(E0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,o){Wd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Wd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,c=o?o.z/l.x:1,d=o?o.w/l.y:1,f=o?o.x/l.x:0,h=o?o.y/l.y:0;e.coordinateSystem===Wa||e.reversedDepth?t.set(.5*c,0,0,.5*c+f,0,.5*d,0,.5*d+h,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+f,0,.5*d,0,.5*d+h,0,0,.5,.5,0,0,0,1),t.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dc=new G,fc=new Wo,hr=new G;class kg extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=xr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dc,fc,hr),hr.x===1&&hr.y===1&&hr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,fc,hr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(dc,fc,hr),hr.x===1&&hr.y===1&&hr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,fc,hr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gs=new G,b0=new It,T0=new It;class zi extends kg{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hf*2*Math.atan(Math.tan(Sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,b0,T0),t.subVectors(T0,b0)}setViewOffset(e,t,i,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sd*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/f,t-=c.offsetY*i/h,o*=c.width/f,i*=c.height/h}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Mh extends kg{constructor(e=-1,t=1,i=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=i-e,c=i+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,d-=g*this.view.offsetY,f=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ky extends Uy{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fy extends Sh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.target=new Xn,this.shadow=new ky}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Oy extends Sh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const No=-90,Do=1;class By extends Xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new zi(No,Do,e,t);o.layers=this.layers,this.add(o);const l=new zi(No,Do,e,t);l.layers=this.layers,this.add(l);const c=new zi(No,Do,e,t);c.layers=this.layers,this.add(c);const d=new zi(No,Do,e,t);d.layers=this.layers,this.add(d);const f=new zi(No,Do,e,t);f.layers=this.layers,this.add(f);const h=new zi(No,Do,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,l,c,d,f]=t;for(const h of t)this.remove(h);if(e===xr)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,h,g]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const P=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=P,e.setRenderTarget(i,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,m,S),e.xr.enabled=b,i.texture.needsPMREMUpdate=!0}}class zy extends zi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Nh=class Nh{constructor(e,t,i,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=i,l[3]=o,this}};Nh.prototype.isMatrix2=!0;let w0=Nh;function C0(s,e,t,i){const o=Hy(i);switch(t){case bg:return s*e;case wg:return s*e/o.components*o.byteLength;case lh:return s*e/o.components*o.byteLength;case Ys:return s*e*2/o.components*o.byteLength;case ch:return s*e*2/o.components*o.byteLength;case Tg:return s*e*3/o.components*o.byteLength;case or:return s*e*4/o.components*o.byteLength;case uh:return s*e*4/o.components*o.byteLength;case gc:case xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vc:case _c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ff:case pf:return Math.max(s,16)*Math.max(e,8)/4;case df:case hf:return Math.max(s,8)*Math.max(e,8)/2;case mf:case gf:case vf:case _f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xf:case Rc:case yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case wf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Df:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case If:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Uf:case kf:case Ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Of:case Bf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ac:case zf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hy(s){switch(s){case Li:case yg:return{byteLength:1,components:1};case Va:case Sg:case yr:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case _r:case sh:case gr:return{byteLength:4,components:1};case Mg:case Eg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?Et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fg(){let s=null,e=!1,t=null,i=null;function o(l,c){i=s.requestAnimationFrame(o),t(l,c)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Vy(s){const e=new WeakMap;function t(d,f){const h=d.array,g=d.usage,v=h.byteLength,m=s.createBuffer();s.bindBuffer(f,m),s.bufferData(f,h,g),d.onUploadCallback();let S;if(h instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=s.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=s.SHORT;else if(h instanceof Uint32Array)S=s.UNSIGNED_INT;else if(h instanceof Int32Array)S=s.INT;else if(h instanceof Int8Array)S=s.BYTE;else if(h instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:v}}function i(d,f,h){const g=f.array,v=f.updateRanges;if(s.bindBuffer(h,d),v.length===0)s.bufferSubData(h,0,g);else{v.sort((S,b)=>S.start-b.start);let m=0;for(let S=1;S<v.length;S++){const b=v[m],P=v[S];P.start<=b.start+b.count+1?b.count=Math.max(b.count,P.start+P.count-b.start):(++m,v[m]=P)}v.length=m+1;for(let S=0,b=v.length;S<b;S++){const P=v[S];s.bufferSubData(h,P.start*g.BYTES_PER_ELEMENT,g,P.start,P.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,f));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,d,f),h.version=d.version}}return{get:o,remove:l,update:c}}var Gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wy=`#ifdef USE_ALPHAHASH
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
#endif`,jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qy=`#ifdef USE_AOMAP
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
#endif`,Ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zy=`#ifdef USE_BATCHING
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
#endif`,Jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nS=`#ifdef USE_IRIDESCENCE
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
#endif`,iS=`#ifdef USE_BUMPMAP
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
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fS=`#define PI 3.141592653589793
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
} // validated`,hS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pS=`vec3 transformedNormal = objectNormal;
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
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_S="gl_FragColor = linearToOutputTexel( gl_FragColor );",yS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SS=`#ifdef USE_ENVMAP
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
#endif`,MS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
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
#endif`,bS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PS=`#ifdef USE_GRADIENTMAP
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
}`,LS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,US=`#ifdef USE_ENVMAP
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
#endif`,kS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zS=`PhysicalMaterial material;
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
#endif`,HS=`uniform sampler2D dfgLUT;
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
}`,VS=`
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
#endif`,GS=`#if defined( RE_IndirectDiffuse )
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
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,XS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QS=`#if defined( USE_POINTS_UV )
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
#endif`,eM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sM=`#ifdef USE_MORPHTARGETS
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
#endif`,oM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fM=`#ifdef USE_NORMALMAP
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
#endif`,hM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RM=`float getShadowMask() {
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
}`,AM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
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
#endif`,LM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NM=`#ifdef USE_SKINNING
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
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FM=`#ifdef USE_TRANSMISSION
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
#endif`,OM=`#ifdef USE_TRANSMISSION
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
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
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
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`#include <common>
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
}`,KM=`#if DEPTH_PACKING == 3200
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
}`,ZM=`#define DISTANCE
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
}`,JM=`#define DISTANCE
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
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#include <common>
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
}`,r1=`uniform vec3 diffuse;
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
}`,s1=`#define LAMBERT
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
}`,o1=`#define LAMBERT
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
}`,a1=`#define MATCAP
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
}`,l1=`#define MATCAP
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
}`,c1=`#define NORMAL
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
}`,u1=`#define NORMAL
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
}`,d1=`#define PHONG
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
}`,f1=`#define PHONG
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
}`,h1=`#define STANDARD
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
}`,p1=`#define STANDARD
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
}`,m1=`#define TOON
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
}`,g1=`#define TOON
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
}`,x1=`uniform float size;
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
}`,v1=`uniform vec3 diffuse;
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
}`,_1=`#include <common>
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
}`,y1=`uniform vec3 color;
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
}`,S1=`uniform float rotation;
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
}`,M1=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Gy,alphahash_pars_fragment:Wy,alphamap_fragment:jy,alphamap_pars_fragment:Xy,alphatest_fragment:$y,alphatest_pars_fragment:Yy,aomap_fragment:qy,aomap_pars_fragment:Ky,batching_pars_vertex:Zy,batching_vertex:Jy,begin_vertex:Qy,beginnormal_vertex:eS,bsdfs:tS,iridescence_fragment:nS,bumpmap_pars_fragment:iS,clipping_planes_fragment:rS,clipping_planes_pars_fragment:sS,clipping_planes_pars_vertex:oS,clipping_planes_vertex:aS,color_fragment:lS,color_pars_fragment:cS,color_pars_vertex:uS,color_vertex:dS,common:fS,cube_uv_reflection_fragment:hS,defaultnormal_vertex:pS,displacementmap_pars_vertex:mS,displacementmap_vertex:gS,emissivemap_fragment:xS,emissivemap_pars_fragment:vS,colorspace_fragment:_S,colorspace_pars_fragment:yS,envmap_fragment:SS,envmap_common_pars_fragment:MS,envmap_pars_fragment:ES,envmap_pars_vertex:bS,envmap_physical_pars_fragment:US,envmap_vertex:TS,fog_vertex:wS,fog_pars_vertex:CS,fog_fragment:RS,fog_pars_fragment:AS,gradientmap_pars_fragment:PS,lightmap_pars_fragment:LS,lights_lambert_fragment:NS,lights_lambert_pars_fragment:DS,lights_pars_begin:IS,lights_toon_fragment:kS,lights_toon_pars_fragment:FS,lights_phong_fragment:OS,lights_phong_pars_fragment:BS,lights_physical_fragment:zS,lights_physical_pars_fragment:HS,lights_fragment_begin:VS,lights_fragment_maps:GS,lights_fragment_end:WS,lightprobes_pars_fragment:jS,logdepthbuf_fragment:XS,logdepthbuf_pars_fragment:$S,logdepthbuf_pars_vertex:YS,logdepthbuf_vertex:qS,map_fragment:KS,map_pars_fragment:ZS,map_particle_fragment:JS,map_particle_pars_fragment:QS,metalnessmap_fragment:eM,metalnessmap_pars_fragment:tM,morphinstance_vertex:nM,morphcolor_vertex:iM,morphnormal_vertex:rM,morphtarget_pars_vertex:sM,morphtarget_vertex:oM,normal_fragment_begin:aM,normal_fragment_maps:lM,normal_pars_fragment:cM,normal_pars_vertex:uM,normal_vertex:dM,normalmap_pars_fragment:fM,clearcoat_normal_fragment_begin:hM,clearcoat_normal_fragment_maps:pM,clearcoat_pars_fragment:mM,iridescence_pars_fragment:gM,opaque_fragment:xM,packing:vM,premultiplied_alpha_fragment:_M,project_vertex:yM,dithering_fragment:SM,dithering_pars_fragment:MM,roughnessmap_fragment:EM,roughnessmap_pars_fragment:bM,shadowmap_pars_fragment:TM,shadowmap_pars_vertex:wM,shadowmap_vertex:CM,shadowmask_pars_fragment:RM,skinbase_vertex:AM,skinning_pars_vertex:PM,skinning_vertex:LM,skinnormal_vertex:NM,specularmap_fragment:DM,specularmap_pars_fragment:IM,tonemapping_fragment:UM,tonemapping_pars_fragment:kM,transmission_fragment:FM,transmission_pars_fragment:OM,uv_pars_fragment:BM,uv_pars_vertex:zM,uv_vertex:HM,worldpos_vertex:VM,background_vert:GM,background_frag:WM,backgroundCube_vert:jM,backgroundCube_frag:XM,cube_vert:$M,cube_frag:YM,depth_vert:qM,depth_frag:KM,distance_vert:ZM,distance_frag:JM,equirect_vert:QM,equirect_frag:e1,linedashed_vert:t1,linedashed_frag:n1,meshbasic_vert:i1,meshbasic_frag:r1,meshlambert_vert:s1,meshlambert_frag:o1,meshmatcap_vert:a1,meshmatcap_frag:l1,meshnormal_vert:c1,meshnormal_frag:u1,meshphong_vert:d1,meshphong_frag:f1,meshphysical_vert:h1,meshphysical_frag:p1,meshtoon_vert:m1,meshtoon_frag:g1,points_vert:x1,points_frag:v1,shadow_vert:_1,shadow_frag:y1,sprite_vert:S1,sprite_frag:M1},He={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},mr={basic:{uniforms:ci([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ci([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ci([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ci([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ci([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ci([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ci([He.points,He.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ci([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ci([He.common,He.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ci([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ci([He.sprite,He.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:ci([He.common,He.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:ci([He.lights,He.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};mr.physical={uniforms:ci([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const hc={r:0,b:0,g:0},E1=new Tn,Og=new Ct;Og.set(-1,0,0,0,1,0,0,0,1);function b1(s,e,t,i,o,l){const c=new Dt(0);let d=o===!0?0:1,f,h,g=null,v=0,m=null;function S(A){let z=A.isScene===!0?A.background:null;if(z&&z.isTexture){const C=A.backgroundBlurriness>0;z=e.get(z,C)}return z}function b(A){let z=!1;const C=S(A);C===null?y(c,d):C&&C.isColor&&(y(C,1),z=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||z)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function P(A,z){const C=S(z);C&&(C.isCubeTexture||C.mapping===Oc)?(h===void 0&&(h=new $e(new fn(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Go(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E1.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Og),h.material.toneMapped=Bt.getTransfer(C.colorSpace)!==en,(g!==C||v!==C.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,g=C,v=C.version,m=s.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(f===void 0&&(f=new $e(new qa(2,2),new lr({name:"BackgroundMaterial",uniforms:Go(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:Xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=C,f.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,f.material.toneMapped=Bt.getTransfer(C.colorSpace)!==en,C.matrixAutoUpdate===!0&&C.updateMatrix(),f.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||m!==s.toneMapping)&&(f.material.needsUpdate=!0,g=C,v=C.version,m=s.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null))}function y(A,z){A.getRGB(hc,Ug(s)),t.buffers.color.setClear(hc.r,hc.g,hc.b,z,l)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,z=1){c.set(A),d=z,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(A){d=A,y(c,d)},render:b,addToRenderList:P,dispose:_}}function T1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=m(null);let l=o,c=!1;function d(H,$,te,X,ie){let me=!1;const se=v(H,X,te,$);l!==se&&(l=se,h(l.object)),me=S(H,X,te,ie),me&&b(H,X,te,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(me||c)&&(c=!1,C(H,$,te,X),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function f(){return s.createVertexArray()}function h(H){return s.bindVertexArray(H)}function g(H){return s.deleteVertexArray(H)}function v(H,$,te,X){const ie=X.wireframe===!0;let me=i[$.id];me===void 0&&(me={},i[$.id]=me);const se=H.isInstancedMesh===!0?H.id:0;let ee=me[se];ee===void 0&&(ee={},me[se]=ee);let K=ee[te.id];K===void 0&&(K={},ee[te.id]=K);let Z=K[ie];return Z===void 0&&(Z=m(f()),K[ie]=Z),Z}function m(H){const $=[],te=[],X=[];for(let ie=0;ie<t;ie++)$[ie]=0,te[ie]=0,X[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:te,attributeDivisors:X,object:H,attributes:{},index:null}}function S(H,$,te,X){const ie=l.attributes,me=$.attributes;let se=0;const ee=te.getAttributes();for(const K in ee)if(ee[K].location>=0){const I=ie[K];let ae=me[K];if(ae===void 0&&(K==="instanceMatrix"&&H.instanceMatrix&&(ae=H.instanceMatrix),K==="instanceColor"&&H.instanceColor&&(ae=H.instanceColor)),I===void 0||I.attribute!==ae||ae&&I.data!==ae.data)return!0;se++}return l.attributesNum!==se||l.index!==X}function b(H,$,te,X){const ie={},me=$.attributes;let se=0;const ee=te.getAttributes();for(const K in ee)if(ee[K].location>=0){let I=me[K];I===void 0&&(K==="instanceMatrix"&&H.instanceMatrix&&(I=H.instanceMatrix),K==="instanceColor"&&H.instanceColor&&(I=H.instanceColor));const ae={};ae.attribute=I,I&&I.data&&(ae.data=I.data),ie[K]=ae,se++}l.attributes=ie,l.attributesNum=se,l.index=X}function P(){const H=l.newAttributes;for(let $=0,te=H.length;$<te;$++)H[$]=0}function y(H){_(H,0)}function _(H,$){const te=l.newAttributes,X=l.enabledAttributes,ie=l.attributeDivisors;te[H]=1,X[H]===0&&(s.enableVertexAttribArray(H),X[H]=1),ie[H]!==$&&(s.vertexAttribDivisor(H,$),ie[H]=$)}function A(){const H=l.newAttributes,$=l.enabledAttributes;for(let te=0,X=$.length;te<X;te++)$[te]!==H[te]&&(s.disableVertexAttribArray(te),$[te]=0)}function z(H,$,te,X,ie,me,se){se===!0?s.vertexAttribIPointer(H,$,te,ie,me):s.vertexAttribPointer(H,$,te,X,ie,me)}function C(H,$,te,X){P();const ie=X.attributes,me=te.getAttributes(),se=$.defaultAttributeValues;for(const ee in me){const K=me[ee];if(K.location>=0){let Z=ie[ee];if(Z===void 0&&(ee==="instanceMatrix"&&H.instanceMatrix&&(Z=H.instanceMatrix),ee==="instanceColor"&&H.instanceColor&&(Z=H.instanceColor)),Z!==void 0){const I=Z.normalized,ae=Z.itemSize,Te=e.get(Z);if(Te===void 0)continue;const qe=Te.buffer,Ye=Te.type,Ke=Te.bytesPerElement,ce=Ye===s.INT||Ye===s.UNSIGNED_INT||Z.gpuType===sh;if(Z.isInterleavedBufferAttribute){const pe=Z.data,Ae=pe.stride,at=Z.offset;if(pe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<K.locationSize;Ve++)_(K.location+Ve,pe.meshPerAttribute);H.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ve=0;Ve<K.locationSize;Ve++)y(K.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let Ve=0;Ve<K.locationSize;Ve++)z(K.location+Ve,ae/K.locationSize,Ye,I,Ae*Ke,(at+ae/K.locationSize*Ve)*Ke,ce)}else{if(Z.isInstancedBufferAttribute){for(let pe=0;pe<K.locationSize;pe++)_(K.location+pe,Z.meshPerAttribute);H.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let pe=0;pe<K.locationSize;pe++)y(K.location+pe);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let pe=0;pe<K.locationSize;pe++)z(K.location+pe,ae/K.locationSize,Ye,I,ae*Ke,ae/K.locationSize*pe*Ke,ce)}}else if(se!==void 0){const I=se[ee];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(K.location,I);break;case 3:s.vertexAttrib3fv(K.location,I);break;case 4:s.vertexAttrib4fv(K.location,I);break;default:s.vertexAttrib1fv(K.location,I)}}}}A()}function N(){L();for(const H in i){const $=i[H];for(const te in $){const X=$[te];for(const ie in X){const me=X[ie];for(const se in me)g(me[se].object),delete me[se];delete X[ie]}}delete i[H]}}function D(H){if(i[H.id]===void 0)return;const $=i[H.id];for(const te in $){const X=$[te];for(const ie in X){const me=X[ie];for(const se in me)g(me[se].object),delete me[se];delete X[ie]}}delete i[H.id]}function F(H){for(const $ in i){const te=i[$];for(const X in te){const ie=te[X];if(ie[H.id]===void 0)continue;const me=ie[H.id];for(const se in me)g(me[se].object),delete me[se];delete ie[H.id]}}}function E(H){for(const $ in i){const te=i[$],X=H.isInstancedMesh===!0?H.id:0,ie=te[X];if(ie!==void 0){for(const me in ie){const se=ie[me];for(const ee in se)g(se[ee].object),delete se[ee];delete ie[me]}delete te[X],Object.keys(te).length===0&&delete i[$]}}}function L(){k(),c=!0,l!==o&&(l=o,h(l.object))}function k(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:L,resetDefaultState:k,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:P,enableAttribute:y,disableUnusedAttributes:A}}function w1(s,e,t){let i;function o(f){i=f}function l(f,h){s.drawArrays(i,f,h),t.update(h,i,1)}function c(f,h,g){g!==0&&(s.drawArraysInstanced(i,f,h,g),t.update(h,i,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,h,0,g);let m=0;for(let S=0;S<g;S++)m+=h[S];t.update(m,i,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function C1(s,e,t,i){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==or&&i.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const E=F===yr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Li&&F!==gr&&!E&&i.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function f(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=f(h);g!==h&&(Et("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&Et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),z=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:S,maxVertexTextures:b,maxTextureSize:P,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:A,maxVaryings:z,maxFragmentUniforms:C,maxSamples:N,samples:D}}function R1(s){const e=this;let t=null,i=0,o=!1,l=!1;const c=new xs,d=new Ct,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const S=v.length!==0||m||i!==0||o;return o=m,i=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,m){t=g(v,m,0)},this.setState=function(v,m,S){const b=v.clippingPlanes,P=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!o||b===null||b.length===0||l&&!y)l?g(null):h();else{const A=l?0:i,z=A*4;let C=_.clippingState||null;f.value=C,C=g(b,m,z,S);for(let N=0;N!==z;++N)C[N]=t[N];_.clippingState=C,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=A}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(v,m,S,b){const P=v!==null?v.length:0;let y=null;if(P!==0){if(y=f.value,b!==!0||y===null){const _=S+P*4,A=m.matrixWorldInverse;d.getNormalMatrix(A),(y===null||y.length<_)&&(y=new Float32Array(_));for(let z=0,C=S;z!==P;++z,C+=4)c.copy(v[z]).applyMatrix4(A,d),c.normal.toArray(y,C),y[C+3]=c.constant}f.value=y,f.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,y}}const Fo=4,A1=6,P1=20,L1=256,La=new Mh,R0=new Dt;let jd=null,Xd=0,$d=0,Yd=!1;const N1=new G,Hs=new G;class A0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,l={}){const{size:c=256,position:d=N1}=l;jd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,i,o,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jd,Xd,$d),this._renderer.xr.enabled=Yd,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),$d=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:yr,format:or,colorSpace:Lc,depthBuffer:!1},o=P0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P0(e,t,i);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=D1(l)),this._blurMaterial=U1(l,e,t),this._ggxMaterial=I1(l,e,t)}return o}_compileMaterial(e){const t=new $e(new bi,e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,i,o,l){const f=new zi(90,1,t,i),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,S=v.toneMapping;v.getClearColor(R0),v.toneMapping=vr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new fn,new Vs({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));const P=this._backgroundBox,y=P.material;let _=!1;const A=e.background;A?A.isColor&&(y.color.copy(A),e.background=null,_=!0):(y.color.copy(R0),_=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(f.up.set(0,h[z],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+g[z],l.y,l.z)):C===1?(f.up.set(0,0,h[z]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+g[z],l.z)):(f.up.set(0,h[z],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+g[z]));const N=this._cubeSize;Io(o,C*N,z>2?N:0,N,N),v.setRenderTarget(o),_&&v.render(P,f),v.render(e,f)}v.toneMapping=S,v.autoClear=m,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===$s||e.mapping===Vo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=N0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Io(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,La)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[i];d.material=c;const f=c.uniforms,h=i/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),m=h*1.25,S=v*m,{_lodMax:b}=this,P=this._sizeLods[i],y=3*P*(i>b-Fo?i-b+Fo:0),_=4*(this._cubeSize-P);f.envMap.value=e.texture,f.roughness.value=S,f.mipInt.value=b-t,Io(l,y,_,3*P,2*P),o.setRenderTarget(l),o.render(d,La),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=b-i,Io(e,y,_,3*P,2*P),o.setRenderTarget(e),o.render(d,La)}_blur(e,t,i,o){const l=this._pingPongRenderTarget,c=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,i,c),this._blurPass(l,e,i,i,c)}_blurPass(e,t,i,o,l){const c=this._renderer,d=this._blurMaterial,f=this._lodMeshes[o];f.material=d;const h=d.uniforms;h.envMap.value=e.texture,h.sigma.value=l,h.mipInt.value=this._lodMax-i;const g=this._sizeLods[o],v=3*g*(o>this._lodMax-Fo?o-this._lodMax+Fo:0),m=4*(this._cubeSize-g);Io(t,v,m,3*g,2*g),c.setRenderTarget(t),c.render(f,La)}}function D1(s){const e=[],t=[];let i=s;const o=s-Fo+1+A1;for(let l=0;l<o;l++){const c=Math.pow(2,i);e.push(c);const d=1/(c-2),f=-d,h=1+d,g=[f,f,h,f,h,h,f,f,h,h,f,h],v=6,m=6,S=3,b=new Float32Array(S*m*v),P=new Float32Array(S*m*v);for(let _=0;_<v;_++){const A=_%3*2/3-1,z=_>2?0:-1,C=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];b.set(C,S*m*_);for(let N=0;N<m;N++){const D=g[N*2]*2-1,F=g[N*2+1]*2-1;_===0?Hs.set(1,F,D):_===1?Hs.set(-D,1,-F):_===2?Hs.set(-D,F,1):_===3?Hs.set(-1,F,-D):_===4?Hs.set(-D,-1,F):Hs.set(D,F,-1),Hs.toArray(P,(_*m+N)*S)}}const y=new bi;y.setAttribute("position",new Wr(b,S)),y.setAttribute("outputDirection",new Wr(P,S)),t.push(new $e(y,null)),i>Fo&&i--}return{lodMeshes:t,sizeLods:e}}function P0(s,e,t){const i=new ar(s,e,t);return i.texture.mapping=Oc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Io(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function I1(s,e,t){return new lr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function U1(s,e,t){return new lr({name:"SphericalGaussianBlur",defines:{SAMPLES:P1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function L0(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function N0(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vr,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Bg extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Dg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new fn(5,5,5),l=new lr({name:"CubemapFromEquirect",uniforms:Go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ui,blending:Vr});l.uniforms.tEquirect.value=t;const c=new $e(o,l),d=t.minFilter;return t.minFilter===Ws&&(t.minFilter=ti),new By(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(l)}}function k1(s){let e=new WeakMap,t=new WeakMap,i=null;function o(m,S=!1){return m==null?null:S?c(m):l(m)}function l(m){if(m&&m.isTexture){const S=m.mapping;if(S===xd||S===vd)if(e.has(m)){const b=e.get(m).texture;return d(b,m.mapping)}else{const b=m.image;if(b&&b.height>0){const P=new Bg(b.height);return P.fromEquirectangularTexture(s,m),e.set(m,P),m.addEventListener("dispose",h),d(P.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const S=m.mapping,b=S===xd||S===vd,P=S===$s||S===Vo;if(b||P){let y=t.get(m);const _=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==_)return i===null&&(i=new A0(s)),y=b?i.fromEquirectangular(m,y):i.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const A=m.image;return b&&A&&A.height>0||P&&A&&f(A)?(i===null&&(i=new A0(s)),y=b?i.fromEquirectangular(m):i.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function d(m,S){return S===xd?m.mapping=$s:S===vd&&(m.mapping=Vo),m}function f(m){let S=0;const b=6;for(let P=0;P<b;P++)m[P]!==void 0&&S++;return S===b}function h(m){const S=m.target;S.removeEventListener("dispose",h);const b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function g(m){const S=m.target;S.removeEventListener("dispose",g);const b=t.get(S);b!==void 0&&(t.delete(S),b.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:v}}function F1(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=s.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Bo("WebGLRenderer: "+i+" extension not supported."),o}}}function O1(s,e,t,i){const o={},l=new WeakMap;function c(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const b in m.attributes)e.remove(m.attributes[b]);m.removeEventListener("dispose",c),delete o[m.id];const S=l.get(m);S&&(e.remove(S),l.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function d(v,m){return o[m.id]===!0||(m.addEventListener("dispose",c),o[m.id]=!0,t.memory.geometries++),m}function f(v){const m=v.attributes;for(const S in m)e.update(m[S],s.ARRAY_BUFFER)}function h(v){const m=[],S=v.index,b=v.attributes.position;let P=0;if(b===void 0)return;if(S!==null){const A=S.array;P=S.version;for(let z=0,C=A.length;z<C;z+=3){const N=A[z+0],D=A[z+1],F=A[z+2];m.push(N,D,D,F,F,N)}}else{const A=b.array;P=b.version;for(let z=0,C=A.length/3-1;z<C;z+=3){const N=z+0,D=z+1,F=z+2;m.push(N,D,D,F,F,N)}}const y=new(b.count>=65535?Ng:Lg)(m,1);y.version=P;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function g(v){const m=l.get(v);if(m){const S=v.index;S!==null&&m.version<S.version&&h(v)}else h(v);return l.get(v)}return{get:d,update:f,getWireframeAttribute:g}}function B1(s,e,t){let i;function o(v){i=v}let l,c;function d(v){l=v.type,c=v.bytesPerElement}function f(v,m){s.drawElements(i,m,l,v*c),t.update(m,i,1)}function h(v,m,S){S!==0&&(s.drawElementsInstanced(i,m,l,v*c,S),t.update(m,i,S))}function g(v,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,l,v,0,S);let P=0;for(let y=0;y<S;y++)P+=m[y];t.update(P,i,1)}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=h,this.renderMultiDraw=g}function z1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Kt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function H1(s,e,t){const i=new WeakMap,o=new Sn;function l(c,d,f){const h=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let m=i.get(d);if(m===void 0||m.count!==v){let k=function(){E.dispose(),i.delete(d),d.removeEventListener("dispose",k)};var S=k;m!==void 0&&m.texture.dispose();const b=d.morphAttributes.position!==void 0,P=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let C=0;b===!0&&(C=1),P===!0&&(C=2),y===!0&&(C=3);let N=d.attributes.position.count*C,D=1;N>e.maxTextureSize&&(D=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*D*4*v),E=new Rg(F,N,D,v);E.type=gr,E.needsUpdate=!0;const L=C*4;for(let H=0;H<v;H++){const $=_[H],te=A[H],X=z[H],ie=N*D*4*H;for(let me=0;me<$.count;me++){const se=me*L;b===!0&&(o.fromBufferAttribute($,me),F[ie+se+0]=o.x,F[ie+se+1]=o.y,F[ie+se+2]=o.z,F[ie+se+3]=0),P===!0&&(o.fromBufferAttribute(te,me),F[ie+se+4]=o.x,F[ie+se+5]=o.y,F[ie+se+6]=o.z,F[ie+se+7]=0),y===!0&&(o.fromBufferAttribute(X,me),F[ie+se+8]=o.x,F[ie+se+9]=o.y,F[ie+se+10]=o.z,F[ie+se+11]=X.itemSize===4?o.w:1)}}m={count:v,texture:E,size:new It(N,D)},i.set(d,m),d.addEventListener("dispose",k)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const P=d.morphTargetsRelative?1:1-b;f.getUniforms().setValue(s,"morphTargetBaseInfluence",P),f.getUniforms().setValue(s,"morphTargetInfluences",h)}f.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function V1(s,e,t,i,o){let l=new WeakMap;function c(h){const g=o.render.frame,v=h.geometry,m=e.get(h,v);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),l.get(h)!==g&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,g))),h.isSkinnedMesh){const S=h.skeleton;l.get(S)!==g&&(S.update(),l.set(S,g))}return m}function d(){l=new WeakMap}function f(h){const g=h.target;g.removeEventListener("dispose",f),i.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:d}}const G1={[hg]:"LINEAR_TONE_MAPPING",[pg]:"REINHARD_TONE_MAPPING",[mg]:"CINEON_TONE_MAPPING",[rh]:"ACES_FILMIC_TONE_MAPPING",[xg]:"AGX_TONE_MAPPING",[vg]:"NEUTRAL_TONE_MAPPING",[gg]:"CUSTOM_TONE_MAPPING"};function W1(s,e,t,i,o,l){const c=new ar(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,f=null;const h=new bi;h.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new mn([0,2,0,0,2,0],2));const g=new Ly({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new $e(h,g),m=new Mh(-1,1,1,-1,0,1);let S=null,b=null,P=!1,y,_=null,A=[],z=!1;this.setSize=function(C,N){c.setSize(C,N),d!==null&&d.setSize(C,N),f!==null&&f.setSize(C,N);for(let D=0;D<A.length;D++){const F=A[D];F.setSize&&F.setSize(C,N)}},this.setEffects=function(C){A=C,z=A.length>0&&A[0].isRenderPass===!0;const N=c.width,D=c.height;A.length>0&&d===null&&(d=new ar(N,D,{type:yr,depthBuffer:!1,stencilBuffer:!1}),f=new ar(N,D,{type:yr,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<A.length;F++){const E=A[F];E.setSize&&E.setSize(N,D)}},this.begin=function(C,N){if(P||C.toneMapping===vr&&A.length===0)return!1;if(_=N,N!==null){const D=N.width,F=N.height;(c.width!==D||c.height!==F)&&this.setSize(D,F)}return z===!1&&C.setRenderTarget(c),y=C.toneMapping,C.toneMapping=vr,!0},this.hasRenderPass=function(){return z},this.end=function(C,N){C.toneMapping=y,P=!0;let D=c,F=d;for(let E=0;E<A.length;E++){const L=A[E];L.enabled!==!1&&(L.render(C,F,D,N),L.needsSwap!==!1&&(D=F,F=F===d?f:d))}if(S!==C.outputColorSpace||b!==C.toneMapping){S=C.outputColorSpace,b=C.toneMapping,g.defines={},Bt.getTransfer(S)===en&&(g.defines.SRGB_TRANSFER="");const E=G1[b];E&&(g.defines[E]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(_),C.render(v,m),_=null,P=!1},this.isCompositing=function(){return P},this.dispose=function(){c.dispose(),d!==null&&d.dispose(),f!==null&&f.dispose(),h.dispose(),g.dispose()}}const zg=new di,Vf=new ja(1,1),Hg=new Rg,Vg=new ay,Gg=new Dg,D0=[],I0=[],U0=new Float32Array(16),k0=new Float32Array(9),F0=new Float32Array(4);function Xo(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let l=D0[o];if(l===void 0&&(l=new Float32Array(o),D0[o]=l),e!==0){i.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(l,d)}return l}function Fn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function On(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function zc(s,e){let t=I0[e];t===void 0&&(t=new Int32Array(e),I0[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function j1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function X1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;s.uniform2fv(this.addr,e),On(t,e)}}function $1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Fn(t,e))return;s.uniform3fv(this.addr,e),On(t,e)}}function Y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;s.uniform4fv(this.addr,e),On(t,e)}}function q1(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Fn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),On(t,e)}else{if(Fn(t,i))return;F0.set(i),s.uniformMatrix2fv(this.addr,!1,F0),On(t,i)}}function K1(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Fn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),On(t,e)}else{if(Fn(t,i))return;k0.set(i),s.uniformMatrix3fv(this.addr,!1,k0),On(t,i)}}function Z1(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Fn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),On(t,e)}else{if(Fn(t,i))return;U0.set(i),s.uniformMatrix4fv(this.addr,!1,U0),On(t,i)}}function J1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;s.uniform2iv(this.addr,e),On(t,e)}}function eE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;s.uniform3iv(this.addr,e),On(t,e)}}function tE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;s.uniform4iv(this.addr,e),On(t,e)}}function nE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function iE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;s.uniform2uiv(this.addr,e),On(t,e)}}function rE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;s.uniform3uiv(this.addr,e),On(t,e)}}function sE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;s.uniform4uiv(this.addr,e),On(t,e)}}function oE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Vf.compareFunction=t.isReversedDepthBuffer()?fh:dh,l=Vf):l=zg,t.setTexture2D(e||l,o)}function aE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Vg,o)}function lE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||Gg,o)}function cE(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Hg,o)}function uE(s){switch(s){case 5126:return j1;case 35664:return X1;case 35665:return $1;case 35666:return Y1;case 35674:return q1;case 35675:return K1;case 35676:return Z1;case 5124:case 35670:return J1;case 35667:case 35671:return Q1;case 35668:case 35672:return eE;case 35669:case 35673:return tE;case 5125:return nE;case 36294:return iE;case 36295:return rE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return cE}}function dE(s,e){s.uniform1fv(this.addr,e)}function fE(s,e){const t=Xo(e,this.size,2);s.uniform2fv(this.addr,t)}function hE(s,e){const t=Xo(e,this.size,3);s.uniform3fv(this.addr,t)}function pE(s,e){const t=Xo(e,this.size,4);s.uniform4fv(this.addr,t)}function mE(s,e){const t=Xo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function gE(s,e){const t=Xo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function xE(s,e){const t=Xo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vE(s,e){s.uniform1iv(this.addr,e)}function _E(s,e){s.uniform2iv(this.addr,e)}function yE(s,e){s.uniform3iv(this.addr,e)}function SE(s,e){s.uniform4iv(this.addr,e)}function ME(s,e){s.uniform1uiv(this.addr,e)}function EE(s,e){s.uniform2uiv(this.addr,e)}function bE(s,e){s.uniform3uiv(this.addr,e)}function TE(s,e){s.uniform4uiv(this.addr,e)}function wE(s,e,t){const i=this.cache,o=e.length,l=zc(t,o);Fn(i,l)||(s.uniform1iv(this.addr,l),On(i,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Vf:c=zg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,l[d])}function CE(s,e,t){const i=this.cache,o=e.length,l=zc(t,o);Fn(i,l)||(s.uniform1iv(this.addr,l),On(i,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Vg,l[c])}function RE(s,e,t){const i=this.cache,o=e.length,l=zc(t,o);Fn(i,l)||(s.uniform1iv(this.addr,l),On(i,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Gg,l[c])}function AE(s,e,t){const i=this.cache,o=e.length,l=zc(t,o);Fn(i,l)||(s.uniform1iv(this.addr,l),On(i,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Hg,l[c])}function PE(s){switch(s){case 5126:return dE;case 35664:return fE;case 35665:return hE;case 35666:return pE;case 35674:return mE;case 35675:return gE;case 35676:return xE;case 5124:case 35670:return vE;case 35667:case 35671:return _E;case 35668:case 35672:return yE;case 35669:case 35673:return SE;case 5125:return ME;case 36294:return EE;case 36295:return bE;case 36296:return TE;case 35678:case 36198:case 36298:case 36306:case 35682:return wE;case 35679:case 36299:case 36307:return CE;case 35680:case 36300:case 36308:case 36293:return RE;case 36289:case 36303:case 36311:case 36292:return AE}}class LE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uE(t.type)}}class NE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PE(t.type)}}class DE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const d=o[l];d.setValue(e,t[d.id],i)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function O0(s,e){s.seq.push(e),s.map[e.id]=e}function IE(s,e,t){const i=s.name,o=i.length;for(qd.lastIndex=0;;){const l=qd.exec(i),c=qd.lastIndex;let d=l[1];const f=l[2]==="]",h=l[3];if(f&&(d=d|0),h===void 0||h==="["&&c+2===o){O0(t,h===void 0?new LE(d,s,e):new NE(d,s,e));break}else{let v=t.map[d];v===void 0&&(v=new DE(d),O0(t,v)),t=v}}}class yc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const d=e.getActiveUniform(t,c),f=e.getUniformLocation(t,d.name);IE(d,f,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,i,o){const l=this.map[t];l!==void 0&&l.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=i[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function B0(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const UE=37297;let kE=0;function FE(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const d=c+1;i.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return i.join(`
`)}const z0=new Ct;function OE(s){Bt._getMatrix(z0,Bt.workingColorSpace,s);const e=`mat3( ${z0.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(s)){case Nc:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return Et("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function H0(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+FE(s.getShaderSource(e),d)}else return l}function BE(s,e){const t=OE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zE={[hg]:"Linear",[pg]:"Reinhard",[mg]:"Cineon",[rh]:"ACESFilmic",[xg]:"AgX",[vg]:"Neutral",[gg]:"Custom"};function HE(s,e){const t=zE[e];return t===void 0?(Et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pc=new G;function VE(){Bt.getLuminanceCoefficients(pc);const s=pc.x.toFixed(4),e=pc.y.toFixed(4),t=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function WE(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jE(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const l=s.getActiveAttrib(e,o),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function Ua(s){return s!==""}function V0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function G0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(s){return s.replace(XE,YE)}const $E=new Map;function YE(s,e){let t=Nt[e];if(t===void 0){const i=$E.get(e);if(i!==void 0)t=Nt[i],Et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gf(t)}const qE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W0(s){return s.replace(qE,KE)}function KE(s,e,t,i){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function j0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const ZE={[mc]:"SHADOWMAP_TYPE_PCF",[Ia]:"SHADOWMAP_TYPE_VSM"};function JE(s){return ZE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QE={[$s]:"ENVMAP_TYPE_CUBE",[Vo]:"ENVMAP_TYPE_CUBE",[Oc]:"ENVMAP_TYPE_CUBE_UV"};function eb(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":QE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const tb={[Vo]:"ENVMAP_MODE_REFRACTION"};function nb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":tb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ib={[Fc]:"ENVMAP_BLENDING_MULTIPLY",[O_]:"ENVMAP_BLENDING_MIX",[B_]:"ENVMAP_BLENDING_ADD"};function rb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ib[s.combine]||"ENVMAP_BLENDING_NONE"}function sb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ob(s,e,t,i){const o=s.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=JE(t),h=eb(t),g=nb(t),v=rb(t),m=sb(t),S=GE(t),b=WE(l),P=o.createProgram();let y,_,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ua).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ua).join(`
`),_.length>0&&(_+=`
`)):(y=[j0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),_=[j0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vr?"#define TONE_MAPPING":"",t.toneMapping!==vr?Nt.tonemapping_pars_fragment:"",t.toneMapping!==vr?HE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,BE("linearToOutputTexel",t.outputColorSpace),VE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),c=Gf(c),c=V0(c,t),c=G0(c,t),d=Gf(d),d=V0(d,t),d=G0(d,t),c=W0(c),d=W0(d),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===r0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===r0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const z=A+y+c,C=A+_+d,N=B0(o,o.VERTEX_SHADER,z),D=B0(o,o.FRAGMENT_SHADER,C);o.attachShader(P,N),o.attachShader(P,D),t.index0AttributeName!==void 0?o.bindAttribLocation(P,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(P,0,"position"),o.linkProgram(P);function F(H){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(P)||"",te=o.getShaderInfoLog(N)||"",X=o.getShaderInfoLog(D)||"",ie=$.trim(),me=te.trim(),se=X.trim();let ee=!0,K=!0;if(o.getProgramParameter(P,o.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,P,N,D);else{const Z=H0(o,N,"vertex"),I=H0(o,D,"fragment");Kt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(P,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ie+`
`+Z+`
`+I)}else ie!==""?Et("WebGLProgram: Program Info Log:",ie):(me===""||se==="")&&(K=!1);K&&(H.diagnostics={runnable:ee,programLog:ie,vertexShader:{log:me,prefix:y},fragmentShader:{log:se,prefix:_}})}o.deleteShader(N),o.deleteShader(D),E=new yc(o,P),L=jE(o,P)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=o.getProgramParameter(P,UE)),k},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kE++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=N,this.fragmentShader=D,this}let ab=0;class lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(i)===!1&&(o.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cb(e),t.set(e,i)),i}}class cb{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}}function ub(s){return s===Ys||s===Rc||s===Ac}function db(s,e,t,i,o,l){const c=new Ag,d=new lb,f=new Set,h=[],g=new Map,v=i.logarithmicDepthBuffer;let m=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return f.add(E),E===0?"uv":`uv${E}`}function P(E,L,k,H,$,te){const X=H.fog,ie=$.geometry,me=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,se=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,ee=e.get(E.envMap||me,se),K=ee&&ee.mapping===Oc?ee.image.height:null,Z=S[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&Et("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const I=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ae=I!==void 0?I.length:0;let Te=0;ie.morphAttributes.position!==void 0&&(Te=1),ie.morphAttributes.normal!==void 0&&(Te=2),ie.morphAttributes.color!==void 0&&(Te=3);let qe,Ye,Ke,ce;if(Z){const Vt=mr[Z];qe=Vt.vertexShader,Ye=Vt.fragmentShader}else{qe=E.vertexShader,Ye=E.fragmentShader;const Vt=d.getVertexShaderStage(E),yt=d.getFragmentShaderStage(E);d.update(E,Vt,yt),Ke=Vt.id,ce=yt.id}const pe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),at=$.isInstancedMesh===!0,Ve=$.isBatchedMesh===!0,Rt=!!E.map,sn=!!E.matcap,Tt=!!ee,kt=!!E.aoMap,Zt=!!E.lightMap,Mt=!!E.bumpMap&&E.wireframe===!1,Xt=!!E.normalMap,cn=!!E.displacementMap,gn=!!E.emissiveMap,$t=!!E.metalnessMap,on=!!E.roughnessMap,Y=E.anisotropy>0,wn=E.clearcoat>0,Ht=E.dispersion>0,U=E.retroreflectivity>0,M=E.iridescence>0,J=E.sheen>0,le=E.transmission>0,fe=Y&&!!E.anisotropyMap,Ee=wn&&!!E.clearcoatMap,Ne=wn&&!!E.clearcoatNormalMap,ge=wn&&!!E.clearcoatRoughnessMap,_e=M&&!!E.iridescenceMap,Ie=M&&!!E.iridescenceThicknessMap,tt=J&&!!E.sheenColorMap,Ue=J&&!!E.sheenRoughnessMap,De=!!E.specularMap,it=!!E.specularColorMap,ut=!!E.specularIntensityMap,ht=le&&!!E.transmissionMap,j=le&&!!E.thicknessMap,ve=!!E.gradientMap,xe=!!E.alphaMap,ye=E.alphaTest>0,ke=!!E.alphaHash,Me=!!E.extensions;let Je=vr;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Je=s.toneMapping);const Ze={shaderID:Z,shaderType:E.type,shaderName:E.name,vertexShader:qe,fragmentShader:Ye,defines:E.defines,customVertexShaderID:Ke,customFragmentShaderID:ce,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ve,batchingColor:Ve&&$._colorsTexture!==null,instancing:at,instancingColor:at&&$.instanceColor!==null,instancingMorph:at&&$.morphTexture!==null,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Rt,matcap:sn,envMap:Tt,envMapMode:Tt&&ee.mapping,envMapCubeUVHeight:K,aoMap:kt,lightMap:Zt,bumpMap:Mt,normalMap:Xt,displacementMap:cn,emissiveMap:gn,normalMapObjectSpace:Xt&&E.normalMapType===V_,normalMapTangentSpace:Xt&&E.normalMapType===Pc,packedNormalMap:Xt&&E.normalMapType===Pc&&ub(E.normalMap.format),metalnessMap:$t,roughnessMap:on,anisotropy:Y,anisotropyMap:fe,clearcoat:wn,clearcoatMap:Ee,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ge,dispersion:Ht,retroreflection:U,iridescence:M,iridescenceMap:_e,iridescenceThicknessMap:Ie,sheen:J,sheenColorMap:tt,sheenRoughnessMap:Ue,specularMap:De,specularColorMap:it,specularIntensityMap:ut,transmission:le,transmissionMap:ht,thicknessMap:j,gradientMap:ve,opaque:E.transparent===!1&&E.blending===Fa&&E.alphaToCoverage===!1,alphaMap:xe,alphaTest:ye,alphaHash:ke,combine:E.combine,mapUv:Rt&&b(E.map.channel),aoMapUv:kt&&b(E.aoMap.channel),lightMapUv:Zt&&b(E.lightMap.channel),bumpMapUv:Mt&&b(E.bumpMap.channel),normalMapUv:Xt&&b(E.normalMap.channel),displacementMapUv:cn&&b(E.displacementMap.channel),emissiveMapUv:gn&&b(E.emissiveMap.channel),metalnessMapUv:$t&&b(E.metalnessMap.channel),roughnessMapUv:on&&b(E.roughnessMap.channel),anisotropyMapUv:fe&&b(E.anisotropyMap.channel),clearcoatMapUv:Ee&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&b(E.sheenRoughnessMap.channel),specularMapUv:De&&b(E.specularMap.channel),specularColorMapUv:it&&b(E.specularColorMap.channel),specularIntensityMapUv:ut&&b(E.specularIntensityMap.channel),transmissionMapUv:ht&&b(E.transmissionMap.channel),thicknessMapUv:j&&b(E.thicknessMap.channel),alphaMapUv:xe&&b(E.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Xt||Y),vertexNormals:!!ie.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ie.attributes.uv&&(Rt||xe),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ie.attributes.normal===void 0&&Xt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ae,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:ie.attributes.position!==void 0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Te,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,decodeVideoTexture:Rt&&E.map.isVideoTexture===!0&&Bt.getTransfer(E.map.colorSpace)===en,decodeVideoTextureEmissive:gn&&E.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(E.emissiveMap.colorSpace)===en,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zr,flipSided:E.side===ui,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Me&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&E.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ze.vertexUv1s=f.has(1),Ze.vertexUv2s=f.has(2),Ze.vertexUv3s=f.has(3),f.clear(),Ze}function y(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)L.push(k),L.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(_(L,E),A(L,E),L.push(s.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function _(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function A(E,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.retroreflection&&c.enable(24),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),L.packedNormalMap&&c.enable(22),L.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),L.numLightProbeGrids>0&&c.enable(22),L.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function z(E){const L=S[E.type];let k;if(L){const H=mr[L];k=Ry.clone(H.uniforms)}else k=E.uniforms;return k}function C(E,L){let k=g.get(L);return k!==void 0?++k.usedTimes:(k=new ob(s,L,E,o),h.push(k),g.set(L,k)),k}function N(E){if(--E.usedTimes===0){const L=h.indexOf(E);h[L]=h[h.length-1],h.pop(),g.delete(E.cacheKey),E.destroy()}}function D(E){d.remove(E)}function F(){d.dispose()}return{getParameters:P,getProgramCacheKey:y,getUniforms:z,acquireProgram:C,releaseProgram:N,releaseShaderCache:D,programs:h,dispose:F}}function fb(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function i(c){s.delete(c)}function o(c,d,f){s.get(c)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:l}}function hb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function X0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function $0(){const s=[];let e=0;const t=[],i=[],o=[];function l(){e=0,t.length=0,i.length=0,o.length=0}function c(m){let S=0;return m.isInstancedMesh&&(S+=2),m.isSkinnedMesh&&(S+=1),S}function d(m,S,b,P,y,_){let A=s[e];return A===void 0?(A={id:m.id,object:m,geometry:S,material:b,materialVariant:c(m),groupOrder:P,renderOrder:m.renderOrder,z:y,group:_},s[e]=A):(A.id=m.id,A.object=m,A.geometry=S,A.material=b,A.materialVariant=c(m),A.groupOrder=P,A.renderOrder=m.renderOrder,A.z=y,A.group=_),e++,A}function f(m,S,b,P,y,_,A){A.reversedDepth===!0&&(y=-y);const z=d(m,S,b,P,y,_);b.transmission>0?i.push(z):b.transparent===!0?o.push(z):t.push(z)}function h(m,S,b,P,y,_){const A=d(m,S,b,P,y,_);b.transmission>0?i.unshift(A):b.transparent===!0?o.unshift(A):t.unshift(A)}function g(m,S){t.length>1&&t.sort(m||hb),i.length>1&&i.sort(S||X0),o.length>1&&o.sort(S||X0)}function v(){for(let m=e,S=s.length;m<S;m++){const b=s[m];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:i,transparent:o,init:l,push:f,unshift:h,finish:v,sort:g}}function pb(){let s=new WeakMap;function e(i,o){const l=s.get(i);let c;return l===void 0?(c=new $0,s.set(i,[c])):o>=l.length?(c=new $0,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function mb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Dt};break;case"SpotLight":t={position:new G,direction:new G,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":t={color:new Dt,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=t,t}}}function gb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let xb=0;function vb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function _b(s){const e=new mb,t=gb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new G);const o=new G,l=new Tn,c=new Tn;function d(h){let g=0,v=0,m=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let S=0,b=0,P=0,y=0,_=0,A=0,z=0,C=0,N=0,D=0,F=0,E=0,L=0,k=0;h.sort(vb);for(let $=0,te=h.length;$<te;$++){const X=h[$],ie=X.color,me=X.intensity,se=X.distance;let ee=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===Ys?ee=X.shadow.map.texture:ee=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)g+=ie.r*me,v+=ie.g*me,m+=ie.b*me;else if(X.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(X.sh.coefficients[K],me);k++}else if(X.isSunLight){const K=e.get(X);if(K.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const Z=X.shadow,I=t.get(X);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[b]=I,i.sunShadowMap[b]=ee;const ae=Z.getViewportCount();for(let Te=0;Te<ae;Te++)i.sunShadowMatrix[P+Te]=Z.getMatrix(Te),i.sunShadowCascade[P+Te]=Z._cascadeData[Te];P+=ae,b++}i.sun[S]=K,S++}else if(X.isDirectionalLight){const K=e.get(X);if(K.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const Z=X.shadow,I=t.get(X);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.directionalShadow[y]=I,i.directionalShadowMap[y]=ee,i.directionalShadowMatrix[y]=X.shadow.matrix,N++}i.directional[y]=K,y++}else if(X.isSpotLight){const K=e.get(X);K.position.setFromMatrixPosition(X.matrixWorld),K.color.copy(ie).multiplyScalar(me),K.distance=se,K.coneCos=Math.cos(X.angle),K.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),K.decay=X.decay,i.spot[A]=K;const Z=X.shadow;if(X.map&&(i.spotLightMap[E]=X.map,E++,Z.updateMatrices(X),X.castShadow&&L++),i.spotLightMatrix[A]=Z.matrix,X.castShadow){const I=t.get(X);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,i.spotShadow[A]=I,i.spotShadowMap[A]=ee,F++}A++}else if(X.isRectAreaLight){const K=e.get(X);K.color.copy(ie).multiplyScalar(me),K.halfWidth.set(X.width*.5,0,0),K.halfHeight.set(0,X.height*.5,0),i.rectArea[z]=K,z++}else if(X.isPointLight){const K=e.get(X);if(K.color.copy(X.color).multiplyScalar(X.intensity),K.distance=X.distance,K.decay=X.decay,X.castShadow){const Z=X.shadow,I=t.get(X);I.shadowIntensity=Z.intensity,I.shadowBias=Z.bias,I.shadowNormalBias=Z.normalBias,I.shadowRadius=Z.radius,I.shadowMapSize=Z.mapSize,I.shadowCameraNear=Z.camera.near,I.shadowCameraFar=Z.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=ee,i.pointShadowMatrix[_]=X.shadow.matrix,D++}i.point[_]=K,_++}else if(X.isHemisphereLight){const K=e.get(X);K.skyColor.copy(X.color).multiplyScalar(me),K.groundColor.copy(X.groundColor).multiplyScalar(me),i.hemi[C]=K,C++}}z>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=m;const H=i.hash;(H.sunLength!==S||H.directionalLength!==y||H.pointLength!==_||H.spotLength!==A||H.rectAreaLength!==z||H.hemiLength!==C||H.numSunShadows!==b||H.numDirectionalShadows!==N||H.numPointShadows!==D||H.numSpotShadows!==F||H.numSpotMaps!==E||H.numLightProbes!==k)&&(i.sun.length=S,i.directional.length=y,i.spot.length=A,i.rectArea.length=z,i.point.length=_,i.hemi.length=C,i.sunShadow.length=b,i.sunShadowMap.length=b,i.sunShadowMatrix.length=P,i.sunShadowCascade.length=P,i.directionalShadow.length=N,i.directionalShadowMap.length=N,i.directionalShadowMatrix.length=N,i.pointShadow.length=D,i.pointShadowMap.length=D,i.pointShadowMatrix.length=D,i.spotShadow.length=F,i.spotShadowMap.length=F,i.spotLightMatrix.length=F+E-L,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=k,H.sunLength=S,H.directionalLength=y,H.pointLength=_,H.spotLength=A,H.rectAreaLength=z,H.hemiLength=C,H.numSunShadows=b,H.numDirectionalShadows=N,H.numPointShadows=D,H.numSpotShadows=F,H.numSpotMaps=E,H.numLightProbes=k,i.version=xb++)}function f(h,g){let v=0,m=0,S=0,b=0,P=0,y=0;const _=g.matrixWorldInverse;for(let A=0,z=h.length;A<z;A++){const C=h[A];if(C.isSunLight){const N=i.sun[v];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(_),v++}else if(C.isDirectionalLight){const N=i.directional[m];N.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(_),m++}else if(C.isSpotLight){const N=i.spot[b];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(_),b++}else if(C.isRectAreaLight){const N=i.rectArea[P];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(_),c.identity(),l.copy(C.matrixWorld),l.premultiply(_),c.extractRotation(l),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),P++}else if(C.isPointLight){const N=i.point[S];N.position.setFromMatrixPosition(C.matrixWorld),N.position.applyMatrix4(_),S++}else if(C.isHemisphereLight){const N=i.hemi[y];N.direction.setFromMatrixPosition(C.matrixWorld),N.direction.transformDirection(_),y++}}}return{setup:d,setupView:f,state:i}}function Y0(s){const e=new _b(s),t=[],i=[],o=[];function l(m){v.camera=m,t.length=0,i.length=0,o.length=0}function c(m){t.push(m)}function d(m){i.push(m)}function f(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:h,setupLightsView:g,pushLight:c,pushShadow:d,pushLightProbeGrid:f}}function yb(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let d;return c===void 0?(d=new Y0(s),e.set(o,[d])):l>=c.length?(d=new Y0(s),c.push(d)):d=c[l],d}function i(){e=new WeakMap}return{get:t,dispose:i}}const Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mb=`uniform sampler2D shadow_pass;
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
}`,Eb=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],bb=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],q0=new Tn,Na=new G,Kd=new G;function Tb(s,e,t){let i=new gh;const o=new It,l=new It,c=new Sn,d=new Ny,f=new Dy,h={},g=t.maxTextureSize,v={[Xs]:ui,[ui]:Xs,[zr]:zr},m=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Sb,fragmentShader:Mb}),S=m.clone();S.defines.HORIZONTAL_PASS=1;const b=new bi;b.setAttribute("position",new Wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new $e(b,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let _=this.type;this.render=function(D,F,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===ug&&(Et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mc);const L=s.getRenderTarget(),k=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Vr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const te=_!==this.type;te&&F.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(ie=>ie.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,ie=D.length;X<ie;X++){const me=D[X],se=me.shadow;if(se===void 0){Et("WebGLShadowMap:",me,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;o.copy(se.mapSize);const ee=se.getFrameExtents();o.multiply(ee),l.copy(se.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/ee.x),o.x=l.x*ee.x,se.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/ee.y),o.y=l.y*ee.y,se.mapSize.y=l.y));const K=s.state.buffers.depth.getReversed();if(se.camera._reversedDepth=K,se.map===null||te===!0){if(se.map!==null&&(se.map.depthTexture!==null&&(se.map.depthTexture.dispose(),se.map.depthTexture=null),se.map.dispose()),this.type===Ia){if(me.isPointLight){Et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}se.map=new ar(o.x,o.y,{format:Ys,type:yr,minFilter:ti,magFilter:ti,generateMipmaps:!1}),se.map.texture.name=me.name+".shadowMap",se.map.depthTexture=new ja(o.x,o.y,gr),se.map.depthTexture.name=me.name+".shadowMapDepth",se.map.depthTexture.format=jr,se.map.depthTexture.compareFunction=null,se.map.depthTexture.minFilter=jn,se.map.depthTexture.magFilter=jn}else me.isPointLight?(se.map=new Bg(o.x),se.map.depthTexture=new wy(o.x,_r)):(se.map=new ar(o.x,o.y),se.map.depthTexture=new ja(o.x,o.y,_r)),se.map.depthTexture.name=me.name+".shadowMap",se.map.depthTexture.format=jr,this.type===mc?(se.map.depthTexture.compareFunction=K?fh:dh,se.map.depthTexture.minFilter=ti,se.map.depthTexture.magFilter=ti):(se.map.depthTexture.compareFunction=null,se.map.depthTexture.minFilter=jn,se.map.depthTexture.magFilter=jn);se.camera.updateProjectionMatrix()}se.map.isWebGLCubeRenderTarget!==!0&&(se.map.width!==o.x||se.map.height!==o.y)&&se.map.setSize(o.x,o.y);const Z=se.map.isWebGLCubeRenderTarget?6:se.getViewportCount();me.isPointLight!==!0&&se.updateMatrices(me,E);for(let I=0;I<Z;I++){const ae=se.getCamera(I);if(me.isPointLight){const Te=se.camera,qe=se.matrix,Ye=me.distance||Te.far;Ye!==Te.far&&(Te.far=Ye,Te.updateProjectionMatrix()),Na.setFromMatrixPosition(me.matrixWorld),Te.position.copy(Na),Kd.copy(Te.position),Kd.add(Eb[I]),Te.up.copy(bb[I]),Te.lookAt(Kd),Te.updateMatrixWorld(),qe.makeTranslation(-Na.x,-Na.y,-Na.z),q0.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),se._frustum.setFromProjectionMatrix(q0,Te.coordinateSystem,Te.reversedDepth)}if(se.map.isWebGLCubeRenderTarget)s.setRenderTarget(se.map,I),s.clear();else{I===0&&(s.setRenderTarget(se.map),s.clear());const Te=se.getViewport(I);c.set(l.x*Te.x,l.y*Te.y,l.x*Te.z,l.y*Te.w),$.viewport(c)}i=se.getFrustum(I),C(F,E,ae,me,this.type)}se.isPointLightShadow!==!0&&this.type===Ia&&A(se,E),se.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(L,k,H)};function A(D,F){const E=e.update(P);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null?D.mapPass=new ar(o.x,o.y,{format:Ys,type:yr}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),m.uniforms.shadow_pass.value=D.map.depthTexture,m.uniforms.resolution.value.set(D.map.width,D.map.height),m.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(F,null,E,m,P,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value.set(D.map.width,D.map.height),S.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(F,null,E,S,P,null)}function z(D,F,E,L){let k=null;const H=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(H!==void 0)k=H;else if(k=E.isPointLight===!0?f:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=k.uuid,te=F.uuid;let X=h[$];X===void 0&&(X={},h[$]=X);let ie=X[te];ie===void 0&&(ie=k.clone(),X[te]=ie,F.addEventListener("dispose",N)),k=ie}if(k.visible=F.visible,k.wireframe=F.wireframe,L===Ia?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:v[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,E.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const $=s.properties.get(k);$.light=E}return k}function C(D,F,E,L,k){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&k===Ia)&&(!D.frustumCulled||D.intersectsFrustum(i))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const te=e.update(D),X=D.material;if(Array.isArray(X)){const ie=te.groups;for(let me=0,se=ie.length;me<se;me++){const ee=ie[me],K=X[ee.materialIndex];if(K&&K.visible){const Z=z(D,K,L,k);D.onBeforeShadow(s,D,F,E,te,Z,ee),s.renderBufferDirect(E,null,te,Z,D,ee),D.onAfterShadow(s,D,F,E,te,Z,ee)}}}else if(X.visible){const ie=z(D,X,L,k);D.onBeforeShadow(s,D,F,E,te,ie,null),s.renderBufferDirect(E,null,te,ie,D,null),D.onAfterShadow(s,D,F,E,te,ie,null)}}const $=D.children;for(let te=0,X=$.length;te<X;te++)C($[te],F,E,L,k)}function N(D){D.target.removeEventListener("dispose",N);for(const E in h){const L=h[E],k=D.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}}function wb(s,e){function t(){let j=!1;const ve=new Sn;let xe=null;const ye=new Sn(0,0,0,0);return{setMask:function(ke){xe!==ke&&!j&&(s.colorMask(ke,ke,ke,ke),xe=ke)},setLocked:function(ke){j=ke},setClear:function(ke,Me,Je,Ze,Vt){Vt===!0&&(ke*=Ze,Me*=Ze,Je*=Ze),ve.set(ke,Me,Je,Ze),ye.equals(ve)===!1&&(s.clearColor(ke,Me,Je,Ze),ye.copy(ve))},reset:function(){j=!1,xe=null,ye.set(-1,0,0,0)}}}function i(){let j=!1,ve=!1,xe=null,ye=null,ke=null;return{setReversed:function(Me){if(ve!==Me){const Je=e.get("EXT_clip_control");Me?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),ve=Me;const Ze=ke;ke=null,this.setClear(Ze)}},getReversed:function(){return ve},setTest:function(Me){Me?pe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Me){xe!==Me&&!j&&(s.depthMask(Me),xe=Me)},setFunc:function(Me){if(ve&&(Me=ey[Me]),ye!==Me){switch(Me){case tf:s.depthFunc(s.NEVER);break;case nf:s.depthFunc(s.ALWAYS);break;case rf:s.depthFunc(s.LESS);break;case Ha:s.depthFunc(s.LEQUAL);break;case sf:s.depthFunc(s.EQUAL);break;case of:s.depthFunc(s.GEQUAL);break;case af:s.depthFunc(s.GREATER);break;case lf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ye=Me}},setLocked:function(Me){j=Me},setClear:function(Me){ke!==Me&&(ke=Me,ve&&(Me=1-Me),s.clearDepth(Me))},reset:function(){j=!1,xe=null,ye=null,ke=null,ve=!1}}}function o(){let j=!1,ve=null,xe=null,ye=null,ke=null,Me=null,Je=null,Ze=null,Vt=null;return{setTest:function(yt){j||(yt?pe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(yt){ve!==yt&&!j&&(s.stencilMask(yt),ve=yt)},setFunc:function(yt,Gt,xn){(xe!==yt||ye!==Gt||ke!==xn)&&(s.stencilFunc(yt,Gt,xn),xe=yt,ye=Gt,ke=xn)},setOp:function(yt,Gt,xn){(Me!==yt||Je!==Gt||Ze!==xn)&&(s.stencilOp(yt,Gt,xn),Me=yt,Je=Gt,Ze=xn)},setLocked:function(yt){j=yt},setClear:function(yt){Vt!==yt&&(s.clearStencil(yt),Vt=yt)},reset:function(){j=!1,ve=null,xe=null,ye=null,ke=null,Me=null,Je=null,Ze=null,Vt=null}}}const l=new t,c=new i,d=new o,f=new WeakMap,h=new WeakMap;let g={},v={},m={},S=new WeakMap,b=[],P=null,y=!1,_=null,A=null,z=null,C=null,N=null,D=null,F=null,E=new Dt(0,0,0),L=0,k=!1,H=null,$=null,te=null,X=null,ie=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,ee=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(K)[1]),se=ee>=1):K.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),se=ee>=2);let Z=null,I={};const ae=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),qe=new Sn().fromArray(ae),Ye=new Sn().fromArray(Te);function Ke(j,ve,xe,ye){const ke=new Uint8Array(4),Me=s.createTexture();s.bindTexture(j,Me),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<xe;Je++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(ve,0,s.RGBA,1,1,ye,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(ve+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return Me}const ce={};ce[s.TEXTURE_2D]=Ke(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=Ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=Ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=Ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),pe(s.DEPTH_TEST),c.setFunc(Ha),Mt(!1),Xt(e0),pe(s.CULL_FACE),kt(Vr);function pe(j){g[j]!==!0&&(s.enable(j),g[j]=!0)}function Ae(j){g[j]!==!1&&(s.disable(j),g[j]=!1)}function at(j,ve){return m[j]!==ve?(s.bindFramebuffer(j,ve),m[j]=ve,j===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=ve),j===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ve(j,ve){let xe=b,ye=!1;if(j){xe=S.get(ve),xe===void 0&&(xe=[],S.set(ve,xe));const ke=j.textures;if(xe.length!==ke.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Je=ke.length;Me<Je;Me++)xe[Me]=s.COLOR_ATTACHMENT0+Me;xe.length=ke.length,ye=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,ye=!0);ye&&s.drawBuffers(xe)}function Rt(j){return P!==j?(s.useProgram(j),P=j,!0):!1}const sn={[ko]:s.FUNC_ADD,[S_]:s.FUNC_SUBTRACT,[M_]:s.FUNC_REVERSE_SUBTRACT};sn[E_]=s.MIN,sn[b_]=s.MAX;const Tt={[T_]:s.ZERO,[w_]:s.ONE,[C_]:s.SRC_COLOR,[dg]:s.SRC_ALPHA,[D_]:s.SRC_ALPHA_SATURATE,[L_]:s.DST_COLOR,[A_]:s.DST_ALPHA,[R_]:s.ONE_MINUS_SRC_COLOR,[fg]:s.ONE_MINUS_SRC_ALPHA,[N_]:s.ONE_MINUS_DST_COLOR,[P_]:s.ONE_MINUS_DST_ALPHA,[I_]:s.CONSTANT_COLOR,[U_]:s.ONE_MINUS_CONSTANT_COLOR,[k_]:s.CONSTANT_ALPHA,[F_]:s.ONE_MINUS_CONSTANT_ALPHA};function kt(j,ve,xe,ye,ke,Me,Je,Ze,Vt,yt){if(j===Vr){y===!0&&(Ae(s.BLEND),y=!1);return}if(y===!1&&(pe(s.BLEND),y=!0),j!==y_){if(j!==_||yt!==k){if((A!==ko||N!==ko)&&(s.blendEquation(s.FUNC_ADD),A=ko,N=ko),yt)switch(j){case Fa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case t0:s.blendFunc(s.ONE,s.ONE);break;case n0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case i0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Kt("WebGLState: Invalid blending: ",j);break}else switch(j){case Fa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case t0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case n0:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case i0:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",j);break}z=null,C=null,D=null,F=null,E.set(0,0,0),L=0,_=j,k=yt}return}ke=ke||ve,Me=Me||xe,Je=Je||ye,(ve!==A||ke!==N)&&(s.blendEquationSeparate(sn[ve],sn[ke]),A=ve,N=ke),(xe!==z||ye!==C||Me!==D||Je!==F)&&(s.blendFuncSeparate(Tt[xe],Tt[ye],Tt[Me],Tt[Je]),z=xe,C=ye,D=Me,F=Je),(Ze.equals(E)===!1||Vt!==L)&&(s.blendColor(Ze.r,Ze.g,Ze.b,Vt),E.copy(Ze),L=Vt),_=j,k=!1}function Zt(j,ve){j.side===zr?Ae(s.CULL_FACE):pe(s.CULL_FACE);let xe=j.side===ui;ve&&(xe=!xe),Mt(xe),j.blending===Fa&&j.transparent===!1?kt(Vr):kt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),l.setMask(j.colorWrite);const ye=j.stencilWrite;d.setTest(ye),ye&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),gn(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(j){H!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),H=j)}function Xt(j){j!==v_?(pe(s.CULL_FACE),j!==$&&(j===e0?s.cullFace(s.BACK):j===__?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),$=j}function cn(j){j!==te&&(se&&s.lineWidth(j),te=j)}function gn(j,ve,xe){j?(pe(s.POLYGON_OFFSET_FILL),(X!==ve||ie!==xe)&&(X=ve,ie=xe,c.getReversed()&&(ve=-ve),s.polygonOffset(ve,xe))):Ae(s.POLYGON_OFFSET_FILL)}function $t(j){j?pe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function on(j){j===void 0&&(j=s.TEXTURE0+me-1),Z!==j&&(s.activeTexture(j),Z=j)}function Y(j,ve,xe){xe===void 0&&(Z===null?xe=s.TEXTURE0+me-1:xe=Z);let ye=I[xe];ye===void 0&&(ye={type:void 0,texture:void 0},I[xe]=ye),(ye.type!==j||ye.texture!==ve)&&(Z!==xe&&(s.activeTexture(xe),Z=xe),s.bindTexture(j,ve||ce[j]),ye.type=j,ye.texture=ve)}function wn(){const j=I[Z];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Ht(){try{s.compressedTexImage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function M(){try{s.texSubImage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function J(){try{s.texSubImage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function Ee(){try{s.texStorage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function Ne(){try{s.texStorage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function ge(){try{s.texImage2D(...arguments)}catch(j){Kt("WebGLState:",j)}}function _e(){try{s.texImage3D(...arguments)}catch(j){Kt("WebGLState:",j)}}function Ie(j){return v[j]!==void 0?v[j]:s.getParameter(j)}function tt(j,ve){v[j]!==ve&&(s.pixelStorei(j,ve),v[j]=ve)}function Ue(j){qe.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),qe.copy(j))}function De(j){Ye.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Ye.copy(j))}function it(j,ve){let xe=h.get(ve);xe===void 0&&(xe=new WeakMap,h.set(ve,xe));let ye=xe.get(j);ye===void 0&&(ye=s.getUniformBlockIndex(ve,j.name),xe.set(j,ye))}function ut(j,ve){const ye=h.get(ve).get(j);f.get(ve)!==ye&&(s.uniformBlockBinding(ve,ye,j.__bindingPointIndex),f.set(ve,ye))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},v={},Z=null,I={},m={},S=new WeakMap,b=[],P=null,y=!1,_=null,A=null,z=null,C=null,N=null,D=null,F=null,E=new Dt(0,0,0),L=0,k=!1,H=null,$=null,te=null,X=null,ie=null,qe.set(0,0,s.canvas.width,s.canvas.height),Ye.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:pe,disable:Ae,bindFramebuffer:at,drawBuffers:Ve,useProgram:Rt,setBlending:kt,setMaterial:Zt,setFlipSided:Mt,setCullFace:Xt,setLineWidth:cn,setPolygonOffset:gn,setScissorTest:$t,activeTexture:on,bindTexture:Y,unbindTexture:wn,compressedTexImage2D:Ht,compressedTexImage3D:U,texImage2D:ge,texImage3D:_e,pixelStorei:tt,getParameter:Ie,updateUBOMapping:it,uniformBlockBinding:ut,texStorage2D:Ee,texStorage3D:Ne,texSubImage2D:M,texSubImage3D:J,compressedTexSubImage2D:le,compressedTexSubImage3D:fe,scissor:Ue,viewport:De,reset:ht}}function Cb(s,e,t,i,o,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new It,g=new WeakMap,v=new Set;let m;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(U,M){return b?new OffscreenCanvas(U,M):Dc("canvas")}function y(U,M,J){let le=1;const fe=Ht(U);if((fe.width>J||fe.height>J)&&(le=J/Math.max(fe.width,fe.height)),le<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ee=Math.floor(le*fe.width),Ne=Math.floor(le*fe.height);m===void 0&&(m=P(Ee,Ne));const ge=M?P(Ee,Ne):m;return ge.width=Ee,ge.height=Ne,ge.getContext("2d").drawImage(U,0,0,Ee,Ne),Et("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Ee+"x"+Ne+")."),ge}else return"data"in U&&Et("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),U;return U}function _(U){return U.generateMipmaps}function A(U){s.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(U,M,J,le,fe,Ee=!1){if(U!==null){if(s[U]!==void 0)return s[U];Et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ne;le&&(Ne=e.get("EXT_texture_norm16"),Ne||Et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=M;if(M===s.RED&&(J===s.FLOAT&&(ge=s.R32F),J===s.HALF_FLOAT&&(ge=s.R16F),J===s.UNSIGNED_BYTE&&(ge=s.R8),J===s.UNSIGNED_SHORT&&Ne&&(ge=Ne.R16_EXT),J===s.SHORT&&Ne&&(ge=Ne.R16_SNORM_EXT)),M===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ge=s.R8UI),J===s.UNSIGNED_SHORT&&(ge=s.R16UI),J===s.UNSIGNED_INT&&(ge=s.R32UI),J===s.BYTE&&(ge=s.R8I),J===s.SHORT&&(ge=s.R16I),J===s.INT&&(ge=s.R32I)),M===s.RG&&(J===s.FLOAT&&(ge=s.RG32F),J===s.HALF_FLOAT&&(ge=s.RG16F),J===s.UNSIGNED_BYTE&&(ge=s.RG8),J===s.UNSIGNED_SHORT&&Ne&&(ge=Ne.RG16_EXT),J===s.SHORT&&Ne&&(ge=Ne.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ge=s.RG8UI),J===s.UNSIGNED_SHORT&&(ge=s.RG16UI),J===s.UNSIGNED_INT&&(ge=s.RG32UI),J===s.BYTE&&(ge=s.RG8I),J===s.SHORT&&(ge=s.RG16I),J===s.INT&&(ge=s.RG32I)),M===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),J===s.UNSIGNED_INT&&(ge=s.RGB32UI),J===s.BYTE&&(ge=s.RGB8I),J===s.SHORT&&(ge=s.RGB16I),J===s.INT&&(ge=s.RGB32I)),M===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),J===s.UNSIGNED_INT&&(ge=s.RGBA32UI),J===s.BYTE&&(ge=s.RGBA8I),J===s.SHORT&&(ge=s.RGBA16I),J===s.INT&&(ge=s.RGBA32I)),M===s.RGB&&(J===s.UNSIGNED_SHORT&&Ne&&(ge=Ne.RGB16_EXT),J===s.SHORT&&Ne&&(ge=Ne.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),M===s.RGBA){const _e=Ee?Nc:Bt.getTransfer(fe);J===s.FLOAT&&(ge=s.RGBA32F),J===s.HALF_FLOAT&&(ge=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ge=_e===en?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Ne&&(ge=Ne.RGBA16_EXT),J===s.SHORT&&Ne&&(ge=Ne.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function N(U,M){let J;return U?M===null||M===_r||M===Ga?J=s.DEPTH24_STENCIL8:M===gr?J=s.DEPTH32F_STENCIL8:M===Va&&(J=s.DEPTH24_STENCIL8,Et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===_r||M===Ga?J=s.DEPTH_COMPONENT24:M===gr?J=s.DEPTH_COMPONENT32F:M===Va&&(J=s.DEPTH_COMPONENT16),J}function D(U,M){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==jn&&U.minFilter!==ti?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function F(U){const M=U.target;M.removeEventListener("dispose",F),L(M),M.isVideoTexture&&g.delete(M),M.isHTMLTexture&&v.delete(M)}function E(U){const M=U.target;M.removeEventListener("dispose",E),H(M)}function L(U){const M=i.get(U);if(M.__webglInit===void 0)return;const J=U.source,le=S.get(J);if(le){const fe=le[M.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&k(U),Object.keys(le).length===0&&S.delete(J)}i.remove(U)}function k(U){const M=i.get(U);s.deleteTexture(M.__webglTexture);const J=U.source,le=S.get(J);delete le[M.__cacheKey],c.memory.textures--}function H(U){const M=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let fe=0;fe<M.__webglFramebuffer[le].length;fe++)s.deleteFramebuffer(M.__webglFramebuffer[le][fe]);else s.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)s.deleteFramebuffer(M.__webglFramebuffer[le]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const J=U.textures;for(let le=0,fe=J.length;le<fe;le++){const Ee=i.get(J[le]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),c.memory.textures--),i.remove(J[le])}i.remove(U)}let $=0;function te(){$=0}function X(){return $}function ie(U){$=U}function me(){const U=$;return U>=o.maxTextures&&Et("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+o.maxTextures),$+=1,U}function se(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function ee(U,M){const J=i.get(U);if(U.isVideoTexture&&Y(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const le=U.image;if(le===null)Et("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Et("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(J,U,M);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+M)}function K(U,M){const J=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Ae(J,U,M);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+M)}function Z(U,M){const J=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){Ae(J,U,M);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+M)}function I(U,M){const J=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&J.__version!==U.version){at(J,U,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+M)}const ae={[cf]:s.REPEAT,[Hr]:s.CLAMP_TO_EDGE,[uf]:s.MIRRORED_REPEAT},Te={[jn]:s.NEAREST,[z_]:s.NEAREST_MIPMAP_NEAREST,[$l]:s.NEAREST_MIPMAP_LINEAR,[ti]:s.LINEAR,[_d]:s.LINEAR_MIPMAP_NEAREST,[Ws]:s.LINEAR_MIPMAP_LINEAR},qe={[W_]:s.NEVER,[q_]:s.ALWAYS,[j_]:s.LESS,[dh]:s.LEQUAL,[X_]:s.EQUAL,[fh]:s.GEQUAL,[$_]:s.GREATER,[Y_]:s.NOTEQUAL};function Ye(U,M){if(M.type===gr&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ti||M.magFilter===_d||M.magFilter===$l||M.magFilter===Ws||M.minFilter===ti||M.minFilter===_d||M.minFilter===$l||M.minFilter===Ws)&&Et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,ae[M.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,ae[M.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,ae[M.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Te[M.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Te[M.minFilter]),M.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,qe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jn||M.minFilter!==$l&&M.minFilter!==Ws||M.type===gr&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ke(U,M){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",F));const le=M.source;let fe=S.get(le);fe===void 0&&(fe={},S.set(le,fe));const Ee=se(M);if(Ee!==U.__cacheKey){fe[Ee]===void 0&&(fe[Ee]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),fe[Ee].usedTimes++;const Ne=fe[U.__cacheKey];Ne!==void 0&&(fe[U.__cacheKey].usedTimes--,Ne.usedTimes===0&&k(M)),U.__cacheKey=Ee,U.__webglTexture=fe[Ee].texture}return J}function ce(U,M,J){return Math.floor(Math.floor(U/J)/M)}function pe(U,M,J,le){const Ee=U.updateRanges;if(Ee.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,J,le,M.data);else{Ee.sort((tt,Ue)=>tt.start-Ue.start);let Ne=0;for(let tt=1;tt<Ee.length;tt++){const Ue=Ee[Ne],De=Ee[tt],it=Ue.start+Ue.count,ut=ce(De.start,M.width,4),ht=ce(Ue.start,M.width,4);De.start<=it+1&&ut===ht&&ce(De.start+De.count-1,M.width,4)===ut?Ue.count=Math.max(Ue.count,De.start+De.count-Ue.start):(++Ne,Ee[Ne]=De)}Ee.length=Ne+1;const ge=t.getParameter(s.UNPACK_ROW_LENGTH),_e=t.getParameter(s.UNPACK_SKIP_PIXELS),Ie=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let tt=0,Ue=Ee.length;tt<Ue;tt++){const De=Ee[tt],it=Math.floor(De.start/4),ut=Math.ceil(De.count/4),ht=it%M.width,j=Math.floor(it/M.width),ve=ut,xe=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(s.UNPACK_SKIP_ROWS,j),t.texSubImage2D(s.TEXTURE_2D,0,ht,j,ve,xe,J,le,M.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ge),t.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function Ae(U,M,J){let le=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=s.TEXTURE_3D);const fe=Ke(U,M),Ee=M.source;t.bindTexture(le,U.__webglTexture,s.TEXTURE0+J);const Ne=i.get(Ee);if(Ee.version!==Ne.__version||fe===!0){if(t.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const xe=Bt.getPrimaries(Bt.workingColorSpace),ye=M.colorSpace===vs?null:Bt.getPrimaries(M.colorSpace),ke=M.colorSpace===vs||xe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let _e=y(M.image,!1,o.maxTextureSize);_e=wn(M,_e);const Ie=l.convert(M.format,M.colorSpace),tt=l.convert(M.type);let Ue=C(M.internalFormat,Ie,tt,M.normalized,M.colorSpace,M.isVideoTexture);Ye(le,M);let De;const it=M.mipmaps,ut=M.isVideoTexture!==!0,ht=Ne.__version===void 0||fe===!0,j=Ee.dataReady,ve=D(M,_e);if(M.isDepthTexture)Ue=N(M.format===js,M.type),ht&&(ut?t.texStorage2D(s.TEXTURE_2D,1,Ue,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,Ue,_e.width,_e.height,0,Ie,tt,null));else if(M.isDataTexture)if(it.length>0){ut&&ht&&t.texStorage2D(s.TEXTURE_2D,ve,Ue,it[0].width,it[0].height);for(let xe=0,ye=it.length;xe<ye;xe++)De=it[xe],ut?j&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,De.width,De.height,Ie,tt,De.data):t.texImage2D(s.TEXTURE_2D,xe,Ue,De.width,De.height,0,Ie,tt,De.data);M.generateMipmaps=!1}else ut?(ht&&t.texStorage2D(s.TEXTURE_2D,ve,Ue,_e.width,_e.height),j&&pe(M,_e,Ie,tt)):t.texImage2D(s.TEXTURE_2D,0,Ue,_e.width,_e.height,0,Ie,tt,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ut&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,Ue,it[0].width,it[0].height,_e.depth);for(let xe=0,ye=it.length;xe<ye;xe++)if(De=it[xe],M.format!==or)if(Ie!==null)if(ut){if(j)if(M.layerUpdates.size>0){const ke=C0(De.width,De.height,M.format,M.type);for(const Me of M.layerUpdates){const Je=De.data.subarray(Me*ke/De.data.BYTES_PER_ELEMENT,(Me+1)*ke/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,Me,De.width,De.height,1,Ie,Je)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,De.width,De.height,_e.depth,Ie,De.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Ue,De.width,De.height,_e.depth,0,De.data,0,0);else Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?j&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,De.width,De.height,_e.depth,Ie,tt,De.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,Ue,De.width,De.height,_e.depth,0,Ie,tt,De.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ut&&ht&&t.texStorage2D(s.TEXTURE_2D,ve,Ue,it[0].width,it[0].height);for(let xe=0,ye=it.length;xe<ye;xe++)De=it[xe],M.format!==or?Ie!==null?ut?j&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,De.width,De.height,Ie,De.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,Ue,De.width,De.height,0,De.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?j&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,De.width,De.height,Ie,tt,De.data):t.texImage2D(s.TEXTURE_2D,xe,Ue,De.width,De.height,0,Ie,tt,De.data)}else if(M.isDataArrayTexture)if(ut){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,Ue,_e.width,_e.height,_e.depth),j)if(M.layerUpdates.size>0){const xe=C0(_e.width,_e.height,M.format,M.type);for(const ye of M.layerUpdates){const ke=_e.data.subarray(ye*xe/_e.data.BYTES_PER_ELEMENT,(ye+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,_e.width,_e.height,1,Ie,tt,ke)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ie,tt,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,_e.width,_e.height,_e.depth,0,Ie,tt,_e.data);else if(M.isData3DTexture)ut?(ht&&t.texStorage3D(s.TEXTURE_3D,ve,Ue,_e.width,_e.height,_e.depth),j&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ie,tt,_e.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,_e.width,_e.height,_e.depth,0,Ie,tt,_e.data);else if(M.isFramebufferTexture){if(ht)if(ut)t.texStorage2D(s.TEXTURE_2D,ve,Ue,_e.width,_e.height);else{let xe=_e.width,ye=_e.height;for(let ke=0;ke<ve;ke++)t.texImage2D(s.TEXTURE_2D,ke,Ue,xe,ye,0,Ie,tt,null),xe>>=1,ye>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){const xe=s.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),_e.parentNode!==xe){xe.appendChild(_e),v.add(M),xe.onpaint=ye=>{const ke=ye.changedElements;for(const Me of v)ke.includes(Me.image)&&(Me.needsUpdate=!0)},xe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,_e);else{const ke=s.RGBA,Me=s.RGBA,Je=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ke,Me,Je,_e)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(it.length>0){if(ut&&ht){const xe=Ht(it[0]);t.texStorage2D(s.TEXTURE_2D,ve,Ue,xe.width,xe.height)}for(let xe=0,ye=it.length;xe<ye;xe++)De=it[xe],ut?j&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ie,tt,De):t.texImage2D(s.TEXTURE_2D,xe,Ue,Ie,tt,De);M.generateMipmaps=!1}else if(ut){if(ht){const xe=Ht(_e);t.texStorage2D(s.TEXTURE_2D,ve,Ue,xe.width,xe.height)}j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,tt,_e)}else t.texImage2D(s.TEXTURE_2D,0,Ue,Ie,tt,_e);_(M)&&A(le),Ne.__version=Ee.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function at(U,M,J){if(M.image.length!==6)return;const le=Ke(U,M),fe=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+J);const Ee=i.get(fe);if(fe.version!==Ee.__version||le===!0){t.activeTexture(s.TEXTURE0+J);const Ne=Bt.getPrimaries(Bt.workingColorSpace),ge=M.colorSpace===vs?null:Bt.getPrimaries(M.colorSpace),_e=M.colorSpace===vs||Ne===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,Ue=[];for(let Me=0;Me<6;Me++)!Ie&&!tt?Ue[Me]=y(M.image[Me],!0,o.maxCubemapSize):Ue[Me]=tt?M.image[Me].image:M.image[Me],Ue[Me]=wn(M,Ue[Me]);const De=Ue[0],it=l.convert(M.format,M.colorSpace),ut=l.convert(M.type),ht=C(M.internalFormat,it,ut,M.normalized,M.colorSpace),j=M.isVideoTexture!==!0,ve=Ee.__version===void 0||le===!0,xe=fe.dataReady;let ye=D(M,De);Ye(s.TEXTURE_CUBE_MAP,M);let ke;if(Ie){j&&ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,ht,De.width,De.height);for(let Me=0;Me<6;Me++){ke=Ue[Me].mipmaps;for(let Je=0;Je<ke.length;Je++){const Ze=ke[Je];M.format!==or?it!==null?j?xe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,Ze.width,Ze.height,it,Ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,ht,Ze.width,Ze.height,0,Ze.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,Ze.width,Ze.height,it,ut,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,ht,Ze.width,Ze.height,0,it,ut,Ze.data)}}}else{if(ke=M.mipmaps,j&&ve){ke.length>0&&ye++;const Me=Ht(Ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,ht,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(tt){j?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ue[Me].width,Ue[Me].height,it,ut,Ue[Me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ht,Ue[Me].width,Ue[Me].height,0,it,ut,Ue[Me].data);for(let Je=0;Je<ke.length;Je++){const Vt=ke[Je].image[Me].image;j?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,Vt.width,Vt.height,it,ut,Vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,ht,Vt.width,Vt.height,0,it,ut,Vt.data)}}else{j?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,it,ut,Ue[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ht,it,ut,Ue[Me]);for(let Je=0;Je<ke.length;Je++){const Ze=ke[Je];j?xe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,it,ut,Ze.image[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,ht,it,ut,Ze.image[Me])}}}_(M)&&A(s.TEXTURE_CUBE_MAP),Ee.__version=fe.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Ve(U,M,J,le,fe,Ee){const Ne=l.convert(J.format,J.colorSpace),ge=l.convert(J.type),_e=C(J.internalFormat,Ne,ge,J.normalized,J.colorSpace),Ie=i.get(M),tt=i.get(J);if(tt.__renderTarget=M,!Ie.__hasExternalTextures){const Ue=Math.max(1,M.width>>Ee),De=Math.max(1,M.height>>Ee);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,Ee,_e,Ue,De,M.depth,0,Ne,ge,null):t.texImage2D(fe,Ee,_e,Ue,De,0,Ne,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),on(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,le,fe,tt.__webglTexture,0,$t(M)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,le,fe,tt.__webglTexture,Ee),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(U,M,J){if(s.bindRenderbuffer(s.RENDERBUFFER,U),M.depthBuffer){const le=M.depthTexture,fe=le&&le.isDepthTexture?le.type:null,Ee=N(M.stencilBuffer,fe),Ne=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;on(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(M),Ee,M.width,M.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(M),Ee,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,U)}else{const le=M.textures;for(let fe=0;fe<le.length;fe++){const Ee=le[fe],Ne=l.convert(Ee.format,Ee.colorSpace),ge=l.convert(Ee.type),_e=C(Ee.internalFormat,Ne,ge,Ee.normalized,Ee.colorSpace);on(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(M),_e,M.width,M.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(M),_e,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,_e,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function sn(U,M,J){const le=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=i.get(M.depthTexture);if(fe.__renderTarget=M,(!fe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Ye(s.TEXTURE_CUBE_MAP,M.depthTexture);const Ie=l.convert(M.depthTexture.format),tt=l.convert(M.depthTexture.type);let Ue;M.depthTexture.format===jr?Ue=s.DEPTH_COMPONENT24:M.depthTexture.format===js&&(Ue=s.DEPTH24_STENCIL8);for(let De=0;De<6;De++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ue,M.width,M.height,0,Ie,tt,null)}}else ee(M.depthTexture,0);const Ee=fe.__webglTexture,Ne=$t(M),ge=le?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,_e=M.depthTexture.format===js?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===jr)on(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ge,Ee,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,_e,ge,Ee,0);else if(M.depthTexture.format===js)on(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ge,Ee,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,_e,ge,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Tt(U){const M=i.get(U),J=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const le=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const fe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",fe)};le.addEventListener("dispose",fe),M.__depthDisposeCallback=fe}M.__boundDepthTexture=le}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if(J)for(let le=0;le<6;le++)sn(M.__webglFramebuffer[le],U,le);else{const le=U.texture.mipmaps;le&&le.length>0?sn(M.__webglFramebuffer[0],U,0):sn(M.__webglFramebuffer,U,0)}else if(J){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=s.createRenderbuffer(),Rt(M.__webglDepthbuffer[le],U,!1);else{const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer[le];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Ee)}}else{const le=U.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Rt(M.__webglDepthbuffer,U,!1);else{const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Ee)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(U,M,J){const le=i.get(U);M!==void 0&&Ve(le.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Tt(U)}function Zt(U){const M=U.texture,J=i.get(U),le=i.get(M);U.addEventListener("dispose",E);const fe=U.textures,Ee=U.isWebGLCubeRenderTarget===!0,Ne=fe.length>1;if(Ne||(le.__webglTexture===void 0&&(le.__webglTexture=s.createTexture()),le.__version=M.version,c.memory.textures++),Ee){J.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer[ge]=[];for(let _e=0;_e<M.mipmaps.length;_e++)J.__webglFramebuffer[ge][_e]=s.createFramebuffer()}else J.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){J.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)J.__webglFramebuffer[ge]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let ge=0,_e=fe.length;ge<_e;ge++){const Ie=i.get(fe[ge]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),c.memory.textures++)}if(U.samples>0&&on(U)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ge=0;ge<fe.length;ge++){const _e=fe[ge];J.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[ge]);const Ie=l.convert(_e.format,_e.colorSpace),tt=l.convert(_e.type),Ue=C(_e.internalFormat,Ie,tt,_e.normalized,_e.colorSpace,U.isXRRenderTarget===!0),De=$t(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Ue,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,J.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt(J.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(s.TEXTURE_CUBE_MAP,le.__webglTexture),Ye(s.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Ve(J.__webglFramebuffer[ge][_e],U,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else Ve(J.__webglFramebuffer[ge],U,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(M)&&A(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let ge=0,_e=fe.length;ge<_e;ge++){const Ie=fe[ge],tt=i.get(Ie);let Ue=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ue,tt.__webglTexture),Ye(Ue,Ie),Ve(J.__webglFramebuffer,U,Ie,s.COLOR_ATTACHMENT0+ge,Ue,0),_(Ie)&&A(Ue)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ge=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,le.__webglTexture),Ye(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let _e=0;_e<M.mipmaps.length;_e++)Ve(J.__webglFramebuffer[_e],U,M,s.COLOR_ATTACHMENT0,ge,_e);else Ve(J.__webglFramebuffer,U,M,s.COLOR_ATTACHMENT0,ge,0);_(M)&&A(ge),t.unbindTexture()}U.depthBuffer&&Tt(U)}function Mt(U){const M=U.textures;for(let J=0,le=M.length;J<le;J++){const fe=M[J];if(_(fe)){const Ee=z(U),Ne=i.get(fe).__webglTexture;t.bindTexture(Ee,Ne),A(Ee),t.unbindTexture()}}}const Xt=[],cn=[];function gn(U){if(U.samples>0){if(on(U)===!1){const M=U.textures,J=U.width,le=U.height;let fe=s.COLOR_BUFFER_BIT;const Ee=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=i.get(U),ge=M.length>1;if(ge)for(let Ie=0;Ie<M.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const _e=U.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ie=0;Ie<M.length;Ie++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);const tt=i.get(M[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,J,le,0,0,J,le,fe,s.NEAREST),f===!0&&(Xt.length=0,cn.length=0,Xt.push(s.COLOR_ATTACHMENT0+Ie),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Xt.push(Ee),cn.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,cn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Xt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Ie=0;Ie<M.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ie]);const tt=i.get(M[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,tt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&f){const M=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function $t(U){return Math.min(o.maxSamples,U.samples)}function on(U){const M=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Y(U){const M=c.render.frame;g.get(U)!==M&&(g.set(U,M),U.update())}function wn(U,M){const J=U.colorSpace,le=U.format,fe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==Lc&&J!==vs&&(Bt.getTransfer(J)===en?(le!==or||fe!==Li)&&Et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",J)),M}function Ht(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=me,this.resetTextureUnits=te,this.getTextureUnits=X,this.setTextureUnits=ie,this.setTexture2D=ee,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=I,this.rebindTextures=kt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=on,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rb(s,e){function t(i,o=vs){let l;const c=Bt.getTransfer(o);if(i===Li)return s.UNSIGNED_BYTE;if(i===oh)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ah)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Mg)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Eg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===yg)return s.BYTE;if(i===Sg)return s.SHORT;if(i===Va)return s.UNSIGNED_SHORT;if(i===sh)return s.INT;if(i===_r)return s.UNSIGNED_INT;if(i===gr)return s.FLOAT;if(i===yr)return s.HALF_FLOAT;if(i===bg)return s.ALPHA;if(i===Tg)return s.RGB;if(i===or)return s.RGBA;if(i===jr)return s.DEPTH_COMPONENT;if(i===js)return s.DEPTH_STENCIL;if(i===wg)return s.RED;if(i===lh)return s.RED_INTEGER;if(i===Ys)return s.RG;if(i===ch)return s.RG_INTEGER;if(i===uh)return s.RGBA_INTEGER;if(i===gc||i===xc||i===vc||i===_c)if(c===en)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===gc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===gc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===df||i===ff||i===hf||i===pf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===df)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ff)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mf||i===gf||i===xf||i===vf||i===_f||i===Rc||i===yf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===mf||i===gf)return c===en?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===xf)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===vf)return l.COMPRESSED_R11_EAC;if(i===_f)return l.COMPRESSED_SIGNED_R11_EAC;if(i===Rc)return l.COMPRESSED_RG11_EAC;if(i===yf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sf||i===Mf||i===Ef||i===bf||i===Tf||i===wf||i===Cf||i===Rf||i===Af||i===Pf||i===Lf||i===Nf||i===Df||i===If)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===Sf)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mf)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ef)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bf)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tf)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wf)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cf)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rf)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Af)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pf)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lf)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Nf)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Df)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===If)return c===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Uf||i===kf||i===Ff)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===Uf)return c===en?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ff)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Of||i===Bf||i===Ac||i===zf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===Of)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Bf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ac)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ga?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const Ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pb=`
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

}`;class Lb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ig(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new lr({vertexShader:Ab,fragmentShader:Pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nb extends qs{constructor(e,t){super();const i=this;let o=null,l=1,c=null,d="local-floor",f=1,h=null,g=null,v=null,m=null,S=null,b=null;const P=typeof XRWebGLBinding<"u",y=new Lb,_={},A=t.getContextAttributes();let z=null,C=null;const N=[],D=[],F=new It;let E=null,L=null;const k=new zi;k.viewport=new Sn;const H=new zi;H.viewport=new Sn;const $=[k,H],te=new zy;let X=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let pe=N[ce];return pe===void 0&&(pe=new Rd,N[ce]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ce){let pe=N[ce];return pe===void 0&&(pe=new Rd,N[ce]=pe),pe.getGripSpace()},this.getHand=function(ce){let pe=N[ce];return pe===void 0&&(pe=new Rd,N[ce]=pe),pe.getHandSpace()};function me(ce){const pe=D.indexOf(ce.inputSource);if(pe===-1)return;const Ae=N[pe];Ae!==void 0&&(Ae.update(ce.inputSource,ce.frame,h||c),Ae.dispatchEvent({type:ce.type,data:ce.inputSource}))}function se(){o.removeEventListener("select",me),o.removeEventListener("selectstart",me),o.removeEventListener("selectend",me),o.removeEventListener("squeeze",me),o.removeEventListener("squeezestart",me),o.removeEventListener("squeezeend",me),o.removeEventListener("end",se),o.removeEventListener("inputsourceschange",ee);for(let ce=0;ce<N.length;ce++){const pe=D[ce];pe!==null&&(D[ce]=null,N[ce].disconnect(pe))}X=null,ie=null,y.reset();for(const ce in _)delete _[ce];if(e.setRenderTarget(z),S=null,m=null,v=null,o=null,C=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),L!==null){const ce=L.camera;ce.fov=L.fov,ce.zoom=L.zoom,ce.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){l=ce,i.isPresenting===!0&&Et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){d=ce,i.isPresenting===!0&&Et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ce){h=ce},this.getBaseLayer=function(){return m!==null?m:S},this.getBinding=function(){return v===null&&P&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(ce){if(o=ce,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",me),o.addEventListener("selectstart",me),o.addEventListener("selectend",me),o.addEventListener("squeeze",me),o.addEventListener("squeezestart",me),o.addEventListener("squeezeend",me),o.addEventListener("end",se),o.addEventListener("inputsourceschange",ee),A.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),P&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,at=null,Ve=null;A.depth&&(Ve=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=A.stencil?js:jr,at=A.stencil?Ga:_r);const Rt={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:l};v=this.getBinding(),m=v.createProjectionLayer(Rt),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new ar(m.textureWidth,m.textureHeight,{format:or,type:Li,depthTexture:new ja(m.textureWidth,m.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const Ae={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,Ae),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new ar(S.framebufferWidth,S.framebufferHeight,{format:or,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await o.requestReferenceSpace(d),Ke.setContext(o),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ee(ce){for(let pe=0;pe<ce.removed.length;pe++){const Ae=ce.removed[pe],at=D.indexOf(Ae);at>=0&&(D[at]=null,N[at].disconnect(Ae))}for(let pe=0;pe<ce.added.length;pe++){const Ae=ce.added[pe];let at=D.indexOf(Ae);if(at===-1){for(let Rt=0;Rt<N.length;Rt++)if(Rt>=D.length){D.push(Ae),at=Rt;break}else if(D[Rt]===null){D[Rt]=Ae,at=Rt;break}if(at===-1)break}const Ve=N[at];Ve&&Ve.connect(Ae)}}const K=new G,Z=new G;function I(ce,pe,Ae){K.setFromMatrixPosition(pe.matrixWorld),Z.setFromMatrixPosition(Ae.matrixWorld);const at=K.distanceTo(Z),Ve=pe.projectionMatrix.elements,Rt=Ae.projectionMatrix.elements,sn=Ve[14]/(Ve[10]-1),Tt=Ve[14]/(Ve[10]+1),kt=(Ve[9]+1)/Ve[5],Zt=(Ve[9]-1)/Ve[5],Mt=(Ve[8]-1)/Ve[0],Xt=(Rt[8]+1)/Rt[0],cn=sn*Mt,gn=sn*Xt,$t=at/(-Mt+Xt),on=$t*-Mt;if(pe.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(on),ce.translateZ($t),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),Ve[10]===-1)ce.projectionMatrix.copy(pe.projectionMatrix),ce.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Y=sn+$t,wn=Tt+$t,Ht=cn-on,U=gn+(at-on),M=kt*Tt/wn*Y,J=Zt*Tt/wn*Y;ce.projectionMatrix.makePerspective(Ht,U,M,J,Y,wn),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function ae(ce,pe){pe===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(pe.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(o===null)return;let pe=ce.near,Ae=ce.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(Ae=y.depthFar)),te.near=H.near=k.near=pe,te.far=H.far=k.far=Ae,(X!==te.near||ie!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),X=te.near,ie=te.far),te.layers.mask=ce.layers.mask|6,k.layers.mask=te.layers.mask&-5,H.layers.mask=te.layers.mask&-3;const at=ce.parent,Ve=te.cameras;ae(te,at);for(let Rt=0;Rt<Ve.length;Rt++)ae(Ve[Rt],at);Ve.length===2?I(te,k,H):te.projectionMatrix.copy(k.projectionMatrix),L===null&&ce.isPerspectiveCamera&&(L={camera:ce,fov:ce.fov,zoom:ce.zoom}),Te(ce,te,at)};function Te(ce,pe,Ae){Ae===null?ce.matrix.copy(pe.matrixWorld):(ce.matrix.copy(Ae.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(pe.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(pe.projectionMatrix),ce.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Hf*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(m===null&&S===null))return f},this.setFoveation=function(ce){f=ce,m!==null&&(m.fixedFoveation=ce),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ce)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(te)},this.getCameraTexture=function(ce){return _[ce]};let qe=null;function Ye(ce,pe){if(g=pe.getViewerPose(h||c),b=pe,g!==null){const Ae=g.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let at=!1;Ae.length!==te.cameras.length&&(te.cameras.length=0,at=!0);for(let Tt=0;Tt<Ae.length;Tt++){const kt=Ae[Tt];let Zt=null;if(S!==null)Zt=S.getViewport(kt);else{const Xt=v.getViewSubImage(m,kt);Zt=Xt.viewport,Tt===0&&(e.setRenderTargetTextures(C,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(C))}let Mt=$[Tt];Mt===void 0&&(Mt=new zi,Mt.layers.enable(Tt),Mt.viewport=new Sn,$[Tt]=Mt),Mt.matrix.fromArray(kt.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(kt.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Tt===0&&(te.matrix.copy(Mt.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),at===!0&&te.cameras.push(Mt)}const Ve=o.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&P){v=i.getBinding();const Tt=v.getDepthInformation(Ae[0]);Tt&&Tt.isValid&&Tt.texture&&y.init(Tt,o.renderState)}if(Ve&&Ve.includes("camera-access")&&P){e.state.unbindTexture(),v=i.getBinding();for(let Tt=0;Tt<Ae.length;Tt++){const kt=Ae[Tt].camera;if(kt){let Zt=_[kt];Zt||(Zt=new Ig,_[kt]=Zt);const Mt=v.getCameraImage(kt);Zt.sourceTexture=Mt}}}}for(let Ae=0;Ae<N.length;Ae++){const at=D[Ae],Ve=N[Ae];at!==null&&Ve!==void 0&&Ve.update(at,pe,h||c)}qe&&qe(ce,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),b=null}const Ke=new Fg;Ke.setAnimationLoop(Ye),this.setAnimationLoop=function(ce){qe=ce},this.dispose=function(){}}}const Db=new Tn,Wg=new Ct;Wg.set(-1,0,0,0,1,0,0,0,1);function Ib(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function i(y,_){_.color.getRGB(y.fogColor.value,Ug(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,A,z,C){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(y,_):_.isMeshLambertMaterial?(l(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),g(y,_),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(y,_),m(y,_),_.isMeshPhysicalMaterial&&S(y,_,C)):_.isMeshMatcapMaterial?(l(y,_),b(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),P(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(c(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?f(y,_,A,z):_.isSpriteMaterial?h(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===ui&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===ui&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const A=e.get(_),z=A.envMap,C=A.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Wg),y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function c(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function f(y,_,A,z){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*A,y.scale.value=z*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function m(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,A){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ui&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.retroreflectivity>0&&(y.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function P(y,_){const A=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Ub(s,e,t,i){let o={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(C,N){const D=N.program;i.uniformBlockBinding(C,D)}function h(C,N){let D=o[C.id];D===void 0&&(y(C),D=g(C),o[C.id]=D,C.addEventListener("dispose",A));const F=N.program;i.updateUBOMapping(C,F);const E=e.render.frame;l[C.id]!==E&&(m(C),l[C.id]=E)}function g(C){const N=v();C.__bindingPointIndex=N;const D=s.createBuffer(),F=C.__size,E=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,F,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,D),D}function v(){for(let C=0;C<d;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const N=o[C.id],D=C.uniforms,F=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let E=0,L=D.length;E<L;E++){const k=D[E];if(Array.isArray(k))for(let H=0,$=k.length;H<$;H++)S(k[H],E,H,F);else S(k,E,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,N,D,F){if(P(C,N,D,F)===!0){const E=C.__offset,L=C.value;if(Array.isArray(L)){let k=0;for(let H=0;H<L.length;H++){const $=L[H],te=_($);b($,C.__data,k),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(k+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(L,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,C.__data)}}function b(C,N,D){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,D)}function P(C,N,D,F){const E=C.value,L=N+"_"+D;if(F[L]===void 0)return typeof E=="number"||typeof E=="boolean"?F[L]=E:ArrayBuffer.isView(E)?F[L]=E.slice():F[L]=E.clone(),!0;{const k=F[L];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return F[L]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(k.equals(E)===!1)return k.copy(E),!0}}return!1}function y(C){const N=C.uniforms;let D=0;const F=16;for(let L=0,k=N.length;L<k;L++){const H=Array.isArray(N[L])?N[L]:[N[L]];for(let $=0,te=H.length;$<te;$++){const X=H[$],ie=Array.isArray(X.value)?X.value:[X.value];for(let me=0,se=ie.length;me<se;me++){const ee=ie[me],K=_(ee),Z=D%F,I=Z%K.boundary,ae=Z+I;D+=I,ae!==0&&F-ae<K.storage&&(D+=F-ae),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=D,D+=K.storage}}}const E=D%F;return E>0&&(D+=F-E),C.__size=D,C.__cache={},this}function _(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?Et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):Et("WebGLRenderer: Unsupported uniform value type.",C),N}function A(C){const N=C.target;N.removeEventListener("dispose",A);const D=c.indexOf(N.__bindingPointIndex);c.splice(D,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function z(){for(const C in o)s.deleteBuffer(o[C]);c=[],o={},l={}}return{bind:f,update:h,dispose:z}}const kb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pr=null;function Fb(){return pr===null&&(pr=new by(kb,16,16,Ys,yr),pr.name="DFG_LUT",pr.minFilter=ti,pr.magFilter=ti,pr.wrapS=Hr,pr.wrapT=Hr,pr.generateMipmaps=!1,pr.needsUpdate=!0),pr}class Ob{constructor(e={}){const{canvas:t=J_(),context:i=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:S=Li}=e;this.isWebGLRenderer=!0;let b;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=i.getContextAttributes().alpha}else b=c;const P=S,y=new Set([uh,ch,lh]),_=new Set([Li,_r,Va,Ga,oh,ah]),A=new Uint32Array(4),z=new Int32Array(4),C=new G;let N=null,D=null;const F=[],E=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let H=!1,$=null,te=null,X=null,ie=null;this._outputColorSpace=Bi;let me=0,se=0,ee=null,K=-1,Z=null;const I=new Sn,ae=new Sn;let Te=null;const qe=new Dt(0);let Ye=0,Ke=t.width,ce=t.height,pe=1,Ae=null,at=null;const Ve=new Sn(0,0,Ke,ce),Rt=new Sn(0,0,Ke,ce);let sn=!1;const Tt=new gh;let kt=!1,Zt=!1;const Mt=new Tn,Xt=new G,cn=new Sn,gn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function on(){return ee===null?pe:1}let Y=i;function wn(w,W){return t.getContext(w,W)}let Ht,U,M,J,le,fe,Ee,Ne,ge,_e,Ie,tt,Ue,De,it,ut,ht,j,ve,xe,ye,ke,Me;try{const w={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ih}`),t.addEventListener("webglcontextlost",Vt,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Gt,!1),Y===null){const W="webgl2";if(Y=wn(W,w),Y===null)throw wn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(w){throw t.removeEventListener("webglcontextlost",Vt,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Gt,!1),Kt("WebGLRenderer: "+w.message),w}function Je(){Ht=new F1(Y),Ht.init(),ye=new Rb(Y,Ht),U=new C1(Y,Ht,e,ye),M=new wb(Y,Ht),U.reversedDepthBuffer&&m&&M.buffers.depth.setReversed(!0),te=Y.createFramebuffer(),X=Y.createFramebuffer(),ie=Y.createFramebuffer(),J=new z1(Y),le=new fb,fe=new Cb(Y,Ht,M,le,U,ye,J),Ee=new k1(k),Ne=new Vy(Y),ke=new T1(Y,Ne),ge=new O1(Y,Ne,J,ke),_e=new V1(Y,ge,Ne,ke,J),j=new H1(Y,U,fe),it=new R1(le),Ie=new db(k,Ee,Ht,U,ke,it),tt=new Ib(k,le),Ue=new pb,De=new yb(Ht),ht=new b1(k,Ee,M,_e,b,f),ut=new Tb(k,_e,U),Me=new Ub(Y,J,U,M),ve=new w1(Y,Ht,J),xe=new B1(Y,Ht,J),J.programs=Ie.programs,k.capabilities=U,k.extensions=Ht,k.properties=le,k.renderLists=Ue,k.shadowMap=ut,k.state=M,k.info=J}P!==Li&&(L=new W1(P,t.width,t.height,d,o,l));const Ze=new Nb(k,Y);this.xr=Ze,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const w=Ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(w){w!==void 0&&(pe=w,this.setSize(Ke,ce,!1))},this.getSize=function(w){return w.set(Ke,ce)},this.setSize=function(w,W,de=!0){if(Ze.isPresenting){Et("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=w,ce=W,t.width=Math.floor(w*pe),t.height=Math.floor(W*pe),de===!0&&(t.style.width=w+"px",t.style.height=W+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(Ke*pe,ce*pe).floor()},this.setDrawingBufferSize=function(w,W,de){Ke=w,ce=W,pe=de,t.width=Math.floor(w*de),t.height=Math.floor(W*de),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(P===Li){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){Et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Ve)},this.setViewport=function(w,W,de,re){w.isVector4?Ve.set(w.x,w.y,w.z,w.w):Ve.set(w,W,de,re),M.viewport(I.copy(Ve).multiplyScalar(pe).round())},this.getScissor=function(w){return w.copy(Rt)},this.setScissor=function(w,W,de,re){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,W,de,re),M.scissor(ae.copy(Rt).multiplyScalar(pe).round())},this.getScissorTest=function(){return sn},this.setScissorTest=function(w){M.setScissorTest(sn=w)},this.setOpaqueSort=function(w){Ae=w},this.setTransparentSort=function(w){at=w},this.getClearColor=function(w){return w.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,de=!0){let re=0;if(w){let Q=!1;if(ee!==null){const Fe=ee.texture.format;Q=y.has(Fe)}if(Q){const Fe=ee.texture.type,Be=_.has(Fe),Oe=ht.getClearColor(),je=ht.getClearAlpha(),et=Oe.r,gt=Oe.g,_t=Oe.b;Be?(A[0]=et,A[1]=gt,A[2]=_t,A[3]=je,Y.clearBufferuiv(Y.COLOR,0,A)):(z[0]=et,z[1]=gt,z[2]=_t,z[3]=je,Y.clearBufferiv(Y.COLOR,0,z))}else re|=Y.COLOR_BUFFER_BIT}W&&(re|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),$=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Vt,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Gt,!1),ht.dispose(),Ue.dispose(),De.dispose(),le.dispose(),Ee.dispose(),_e.dispose(),ke.dispose(),Me.dispose(),Ie.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Wi),Ze.removeEventListener("sessionend",Mr),An.stop()};function Vt(w){w.preventDefault(),o0("WebGLRenderer: Context Lost."),H=!0}function yt(){o0("WebGLRenderer: Context Restored."),H=!1;const w=J.autoReset,W=ut.enabled,de=ut.autoUpdate,re=ut.needsUpdate,Q=ut.type;Je(),J.autoReset=w,ut.enabled=W,ut.autoUpdate=de,ut.needsUpdate=re,ut.type=Q}function Gt(w){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function xn(w){const W=w.target;W.removeEventListener("dispose",xn),Hi(W)}function Hi(w){Vi(w),le.remove(w)}function Vi(w){const W=le.get(w).programs;W!==void 0&&(W.forEach(function(de){Ie.releaseProgram(de)}),w.isShaderMaterial&&Ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,de,re,Q,Fe){W===null&&(W=gn);const Be=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Oe=an(w,W,de,re,Q);M.setMaterial(re,Be);let je=de.index,et=1;if(re.wireframe===!0){if(je=ge.getWireframeAttribute(de),je===void 0)return;et=2}const gt=de.drawRange,_t=de.attributes.position;let Ge=gt.start*et,Lt=(gt.start+gt.count)*et;Fe!==null&&(Ge=Math.max(Ge,Fe.start*et),Lt=Math.min(Lt,(Fe.start+Fe.count)*et)),je!==null?(Ge=Math.max(Ge,0),Lt=Math.min(Lt,je.count)):_t!=null&&(Ge=Math.max(Ge,0),Lt=Math.min(Lt,_t.count));const At=Lt-Ge;if(At<0||At===1/0)return;ke.setup(Q,re,Oe,de,je);let Jt,Wt=ve;if(je!==null&&(Jt=Ne.get(je),Wt=xe,Wt.setIndex(Jt)),Q.isMesh)re.wireframe===!0?(M.setLineWidth(re.wireframeLinewidth*on()),Wt.setMode(Y.LINES)):Wt.setMode(Y.TRIANGLES);else if(Q.isLine){let tn=re.linewidth;tn===void 0&&(tn=1),M.setLineWidth(tn*on()),Q.isLineSegments?Wt.setMode(Y.LINES):Q.isLineLoop?Wt.setMode(Y.LINE_LOOP):Wt.setMode(Y.LINE_STRIP)}else Q.isPoints?Wt.setMode(Y.POINTS):Q.isSprite&&Wt.setMode(Y.TRIANGLES);if(Q.isBatchedMesh)if(Ht.get("WEBGL_multi_draw"))Wt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const tn=Q._multiDrawStarts,ze=Q._multiDrawCounts,hn=Q._multiDrawCount,Pt=je?Ne.get(je).bytesPerElement:1,In=le.get(re).currentProgram.getUniforms();for(let O=0;O<hn;O++)In.setValue(Y,"_gl_DrawID",O),Wt.render(tn[O]/Pt,ze[O])}else if(Q.isInstancedMesh)Wt.renderInstances(Ge,At,Q.count);else if(de.isInstancedBufferGeometry){const tn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,ze=Math.min(de.instanceCount,tn);Wt.renderInstances(Ge,At,ze)}else Wt.render(Ge,At)};function Sr(w,W,de,re){$!==null&&w.isNodeMaterial&&$.setObject(re,w),kt===!0&&it.setState(w,de,!1),w.transparent===!0&&w.side===zr&&w.forceSinglePass===!1?(w.side=ui,w.needsUpdate=!0,Tr(w,W,re),w.side=Xs,w.needsUpdate=!0,Tr(w,W,re),w.side=zr):Tr(w,W,re)}this.compile=function(w,W,de=null){de===null&&(de=w),$!==null&&$.renderStart(w,W,de),D=De.get(de),D.init(W),E.push(D),de.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),w!==de&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(D.pushLight(Q),Q.castShadow&&D.pushShadow(Q))}),D.setupLights(),$!==null&&$.updateLights(D.state.lightsArray),Zt=this.localClippingEnabled,kt=it.init(this.clippingPlanes,Zt),kt===!0&&it.setGlobalState(this.clippingPlanes,W),$!==null&&ut.render(D.state.shadowsArray,de,W);const re=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Fe=Q.material;if(Fe)if(Array.isArray(Fe))for(let Be=0;Be<Fe.length;Be++){const Oe=Fe[Be];Sr(Oe,de,W,Q),re.add(Oe)}else Sr(Fe,de,W,Q),re.add(Fe)}),D=E.pop(),$!==null&&$.renderEnd(),re},this.compileAsync=function(w,W,de=null){const re=this.compile(w,W,de);return new Promise(Q=>{function Fe(){if(re.forEach(function(Be){const je=le.get(Be).currentProgram;(je===void 0||je.isReady())&&re.delete(Be)}),re.size===0){Q(w);return}setTimeout(Fe,10)}Ht.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Gi=null;function $o(w){Gi&&Gi(w)}function Wi(){An.stop()}function Mr(){An.start()}const An=new Fg;An.setAnimationLoop($o),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(w){Gi=w,Ze.setAnimationLoop(w),w===null?An.stop():An.start()},Ze.addEventListener("sessionstart",Wi),Ze.addEventListener("sessionend",Mr),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;$!==null&&$.renderStart(w,W);const de=Ze.enabled===!0&&Ze.isPresenting===!0,re=L!==null&&(ee===null||de)&&L.begin(k,ee);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(W),W=Ze.getCamera()),w.isScene===!0&&w.onBeforeRender(k,w,W,ee),D=De.get(w,E.length),D.init(W),D.state.textureUnits=fe.getTextureUnits(),E.push(D),Mt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Tt.setFromProjectionMatrix(Mt,xr,W.reversedDepth),Zt=this.localClippingEnabled,kt=it.init(this.clippingPlanes,Zt),N=Ue.get(w,F.length),N.init(),F.push(N),Ze.enabled===!0&&Ze.isPresenting===!0){const Be=k.xr.getDepthSensingMesh();Be!==null&&hi(Be,W,-1/0,k.sortObjects)}hi(w,W,0,k.sortObjects),N.finish(),$!==null&&$.updateLights(D.state.lightsArray),k.sortObjects===!0&&N.sort(Ae,at),$t=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,$t&&ht.addToRenderList(N,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),kt===!0&&it.beginShadows();const Q=D.state.shadowsArray;if(ut.render(Q,w,W),kt===!0&&it.endShadows(),(re&&L.hasRenderPass())===!1){const Be=N.opaque,Oe=N.transmissive;if(D.setupLights(),W.isArrayCamera){const je=W.cameras;if(Oe.length>0)for(let et=0,gt=je.length;et<gt;et++){const _t=je[et];Er(Be,Oe,w,_t)}$t&&ht.render(w);for(let et=0,gt=je.length;et<gt;et++){const _t=je[et];Ss(N,w,_t,_t.viewport)}}else Oe.length>0&&Er(Be,Oe,w,W),$t&&ht.render(w),Ss(N,w,W)}ee!==null&&se===0&&(fe.updateMultisampleRenderTarget(ee),fe.updateRenderTargetMipmap(ee)),re&&L.end(k),w.isScene===!0&&w.onAfterRender(k,w,W),ke.resetDefaultState(),K=-1,Z=null,E.pop(),E.length>0?(D=E[E.length-1],fe.setTextureUnits(D.state.textureUnits),kt===!0&&it.setGlobalState(k.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?N=F[F.length-1]:N=null,$!==null&&$.renderEnd()};function hi(w,W,de,re){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)de=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLightProbeGrid)D.pushLightProbeGrid(w);else if(w.isLight)D.pushLight(w),w.castShadow&&D.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Tt)){re&&cn.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Mt);const Be=_e.update(w),Oe=w.material;Oe.visible&&N.push(w,Be,Oe,de,cn.z,null,W)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Tt))){const Be=_e.update(w),Oe=w.material;if(re&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),cn.copy(w.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),cn.copy(Be.boundingSphere.center)),cn.applyMatrix4(w.matrixWorld).applyMatrix4(Mt)),Array.isArray(Oe)){const je=Be.groups;for(let et=0,gt=je.length;et<gt;et++){const _t=je[et],Ge=Oe[_t.materialIndex];Ge&&Ge.visible&&N.push(w,Be,Ge,de,cn.z,_t,W)}}else Oe.visible&&N.push(w,Be,Oe,de,cn.z,null,W)}}const Fe=w.children;for(let Be=0,Oe=Fe.length;Be<Oe;Be++)hi(Fe[Be],W,de,re)}function Ss(w,W,de,re){const{opaque:Q,transmissive:Fe,transparent:Be}=w;D.setupLightsView(de),kt===!0&&it.setGlobalState(k.clippingPlanes,de),re&&M.viewport(I.copy(re)),Q.length>0&&br(Q,W,de),Fe.length>0&&br(Fe,W,de),Be.length>0&&br(Be,W,de),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Er(w,W,de,re){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[re.id]===void 0){const Ge=Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[re.id]=new ar(1,1,{generateMipmaps:!0,type:Ge?yr:Li,minFilter:Ws,samples:Math.max(4,U.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}const Fe=D.state.transmissionRenderTarget[re.id],Be=re.viewport||I;Fe.setSize(Be.z*k.transmissionResolutionScale,Be.w*k.transmissionResolutionScale);const Oe=k.getRenderTarget(),je=k.getActiveCubeFace(),et=k.getActiveMipmapLevel();k.setRenderTarget(Fe),k.getClearColor(qe),Ye=k.getClearAlpha(),Ye<1&&k.setClearColor(16777215,.5),k.clear(),$t&&ht.render(de);const gt=k.toneMapping;k.toneMapping=vr;const _t=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),D.setupLightsView(re),kt===!0&&it.setGlobalState(k.clippingPlanes,re),br(w,de,re),fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Lt=0,At=W.length;Lt<At;Lt++){const Jt=W[Lt],{object:Wt,geometry:tn,material:ze,group:hn}=Jt;if(ze.side===zr&&Wt.layers.test(re.layers)){const Pt=ze.side;ze.side=ui,ze.needsUpdate=!0,$r(Wt,de,re,tn,ze,hn),ze.side=Pt,ze.needsUpdate=!0,Ge=!0}}Ge===!0&&(fe.updateMultisampleRenderTarget(Fe),fe.updateRenderTargetMipmap(Fe))}k.setRenderTarget(Oe,je,et),k.setClearColor(qe,Ye),_t!==void 0&&(re.viewport=_t),k.toneMapping=gt}function br(w,W,de){const re=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Fe=w.length;Q<Fe;Q++){const Be=w[Q],{object:Oe,geometry:je,group:et}=Be;let gt=Be.material;gt.allowOverride===!0&&re!==null&&(gt=re),Oe.layers.test(de.layers)&&$r(Oe,W,de,je,gt,et)}}function $r(w,W,de,re,Q,Fe){$!==null&&Q.isNodeMaterial&&$.setObject(w,Q),w.onBeforeRender(k,W,de,re,Q,Fe),w.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(k,W,de,re,w,Fe),Q.transparent===!0&&Q.side===zr&&Q.forceSinglePass===!1?(Q.side=ui,Q.needsUpdate=!0,k.renderBufferDirect(de,W,re,Q,w,Fe),Q.side=Xs,Q.needsUpdate=!0,k.renderBufferDirect(de,W,re,Q,w,Fe),Q.side=zr):k.renderBufferDirect(de,W,re,Q,w,Fe),w.onAfterRender(k,W,de,re,Q,Fe)}function Tr(w,W,de){W.isScene!==!0&&(W=gn);const re=le.get(w),Q=D.state.lights,Fe=D.state.shadowsArray,Be=Q.state.version,Oe=Ie.getParameters(w,Q.state,Fe,W,de,D.state.lightProbeGridArray),je=Ie.getProgramCacheKey(Oe);let et=re.programs;re.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,re.fog=W.fog;const gt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;re.envMap=Ee.get(w.envMap||re.environment,gt),re.envMapRotation=re.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",xn),et=new Map,re.programs=et);let _t=et.get(je);if(_t!==void 0){if(re.currentProgram===_t&&re.lightsStateVersion===Be)return Qs(w,Oe),_t}else Oe.uniforms=Ie.getUniforms(w),$!==null&&w.isNodeMaterial&&$.build(w,de,Oe),w.onBeforeCompile(Oe,k),_t=Ie.acquireProgram(Oe,je),et.set(je,_t),re.uniforms=Oe.uniforms;const Ge=re.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=it.uniform),Qs(w,Oe),re.needsLights=Es(w),re.lightsStateVersion=Be,re.needsLights&&(Ge.ambientLightColor.value=Q.state.ambient,Ge.lightProbe.value=Q.state.probe,Ge.sunLights.value=Q.state.sun,Ge.sunLightShadows.value=Q.state.sunShadow,Ge.directionalLights.value=Q.state.directional,Ge.directionalLightShadows.value=Q.state.directionalShadow,Ge.spotLights.value=Q.state.spot,Ge.spotLightShadows.value=Q.state.spotShadow,Ge.rectAreaLights.value=Q.state.rectArea,Ge.ltc_1.value=Q.state.rectAreaLTC1,Ge.ltc_2.value=Q.state.rectAreaLTC2,Ge.pointLights.value=Q.state.point,Ge.pointLightShadows.value=Q.state.pointShadow,Ge.hemisphereLights.value=Q.state.hemi,Ge.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ge.sunShadowCascade.value=Q.state.sunShadowCascade,Ge.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ge.spotLightMatrix.value=Q.state.spotLightMatrix,Ge.spotLightMap.value=Q.state.spotLightMap,Ge.pointShadowMatrix.value=Q.state.pointShadowMatrix),re.lightProbeGrid=D.state.lightProbeGridArray.length>0,re.currentProgram=_t,re.uniformsList=null,_t}function Ms(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=yc.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Qs(w,W){const de=le.get(w);de.outputColorSpace=W.outputColorSpace,de.batching=W.batching,de.batchingColor=W.batchingColor,de.instancing=W.instancing,de.instancingColor=W.instancingColor,de.instancingMorph=W.instancingMorph,de.skinning=W.skinning,de.morphTargets=W.morphTargets,de.morphNormals=W.morphNormals,de.morphColors=W.morphColors,de.morphTargetsCount=W.morphTargetsCount,de.numClippingPlanes=W.numClippingPlanes,de.numIntersection=W.numClipIntersection,de.vertexAlphas=W.vertexAlphas,de.vertexTangents=W.vertexTangents,de.toneMapping=W.toneMapping}function Yo(w,W){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;C.setFromMatrixPosition(W.matrixWorld);for(let de=0,re=w.length;de<re;de++){const Q=w[de];if(Q.texture!==null&&Q.boundingBox.containsPoint(C))return Q}return null}function an(w,W,de,re,Q){W.isScene!==!0&&(W=gn),fe.resetTextureUnits();const Fe=W.fog,Be=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?W.environment:null,Oe=ee===null?k.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Bt.workingColorSpace,je=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,et=Ee.get(re.envMap||Be,je),gt=re.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,_t=!!de.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ge=!!de.morphAttributes.position,Lt=!!de.morphAttributes.normal,At=!!de.morphAttributes.color;let Jt=vr;re.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Jt=k.toneMapping);const Wt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,tn=Wt!==void 0?Wt.length:0,ze=le.get(re),hn=D.state.lights;if(kt===!0&&(Zt===!0||w!==Z)){const Qt=w===Z&&re.id===K;it.setState(re,w,Qt)}let Pt=!1;re.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==hn.state.version||ze.outputColorSpace!==Oe||Q.isBatchedMesh&&ze.batching===!1||!Q.isBatchedMesh&&ze.batching===!0||Q.isBatchedMesh&&ze.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&ze.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&ze.instancing===!1||!Q.isInstancedMesh&&ze.instancing===!0||Q.isSkinnedMesh&&ze.skinning===!1||!Q.isSkinnedMesh&&ze.skinning===!0||Q.isInstancedMesh&&ze.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ze.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ze.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ze.instancingMorph===!1&&Q.morphTexture!==null||ze.envMap!==et||re.fog===!0&&ze.fog!==Fe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==it.numPlanes||ze.numIntersection!==it.numIntersection)||ze.vertexAlphas!==gt||ze.vertexTangents!==_t||ze.morphTargets!==Ge||ze.morphNormals!==Lt||ze.morphColors!==At||ze.toneMapping!==Jt||ze.morphTargetsCount!==tn||!!ze.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,ze.__version=re.version);let In=ze.currentProgram;Pt===!0&&(In=Tr(re,W,Q),$&&re.isNodeMaterial&&$.onUpdateProgram(re,In,ze));let O=!1,Pn=!1,ji=!1;const Ft=In.getUniforms(),nn=ze.uniforms;if(M.useProgram(In.program)&&(O=!0,Pn=!0,ji=!0),re.id!==K&&(K=re.id,Pn=!0),ze.needsLights){const Qt=Yo(D.state.lightProbeGridArray,Q);ze.lightProbeGrid!==Qt&&(ze.lightProbeGrid=Qt,Pn=!0)}if(O||Z!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ft.setValue(Y,"projectionMatrix",w.projectionMatrix),Ft.setValue(Y,"viewMatrix",w.matrixWorldInverse);const mi=Ft.map.cameraPosition;mi!==void 0&&mi.setValue(Y,Xt.setFromMatrixPosition(w.matrixWorld)),U.logarithmicDepthBuffer&&Ft.setValue(Y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ft.setValue(Y,"isOrthographic",w.isOrthographicCamera===!0),Z!==w&&(Z=w,Pn=!0,ji=!0)}if(ze.needsLights&&(hn.state.sunShadowMap.length>0&&Ft.setValue(Y,"sunShadowMap",hn.state.sunShadowMap,fe),hn.state.directionalShadowMap.length>0&&Ft.setValue(Y,"directionalShadowMap",hn.state.directionalShadowMap,fe),hn.state.spotShadowMap.length>0&&Ft.setValue(Y,"spotShadowMap",hn.state.spotShadowMap,fe),hn.state.pointShadowMap.length>0&&Ft.setValue(Y,"pointShadowMap",hn.state.pointShadowMap,fe)),Q.isSkinnedMesh){Ft.setOptional(Y,Q,"bindMatrix"),Ft.setOptional(Y,Q,"bindMatrixInverse");const Qt=Q.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Ft.setValue(Y,"boneTexture",Qt.boneTexture,fe))}Q.isBatchedMesh&&(Ft.setOptional(Y,Q,"batchingTexture"),Ft.setValue(Y,"batchingTexture",Q._matricesTexture,fe),Ft.setOptional(Y,Q,"batchingIdTexture"),Ft.setValue(Y,"batchingIdTexture",Q._indirectTexture,fe),Ft.setOptional(Y,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ft.setValue(Y,"batchingColorTexture",Q._colorsTexture,fe));const pi=de.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&j.update(Q,de,In),(Pn||ze.receiveShadow!==Q.receiveShadow)&&(ze.receiveShadow=Q.receiveShadow,Ft.setValue(Y,"receiveShadow",Q.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&W.environment!==null&&(nn.envMapIntensity.value=W.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Fb()),Pn){if(Ft.setValue(Y,"toneMappingExposure",k.toneMappingExposure),ze.needsLights&&Ka(nn,ji),Fe&&re.fog===!0&&tt.refreshFogUniforms(nn,Fe),tt.refreshMaterialUniforms(nn,re,pe,ce,D.state.transmissionRenderTarget[w.id]),ze.needsLights&&ze.lightProbeGrid){const Qt=ze.lightProbeGrid;nn.probesSH.value=Qt.texture,nn.probesMin.value.copy(Qt.boundingBox.min),nn.probesMax.value.copy(Qt.boundingBox.max),nn.probesResolution.value.copy(Qt.resolution)}yc.upload(Y,Ms(ze),nn,fe)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(yc.upload(Y,Ms(ze),nn,fe),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ft.setValue(Y,"center",Q.center),Ft.setValue(Y,"modelViewMatrix",Q.modelViewMatrix),Ft.setValue(Y,"normalMatrix",Q.normalMatrix),Ft.setValue(Y,"modelMatrix",Q.matrixWorld),re.uniformsGroups!==void 0){const Qt=re.uniformsGroups;for(let mi=0,ii=Qt.length;mi<ii;mi++){const ri=Qt[mi];Me.update(ri,In),Me.bind(ri,In)}}return In}function Ka(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.sunLights.needsUpdate=W,w.sunLightShadows.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function Es(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return me},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(w,W,de){const re=le.get(w);re.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),le.get(w.texture).__webglTexture=W,le.get(w.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:de,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const de=le.get(w);de.__webglFramebuffer=W,de.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,de=0){ee=w,me=W,se=de;let re=null,Q=!1,Fe=!1;if(w){const Oe=le.get(w);if(Oe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(Y.FRAMEBUFFER,Oe.__webglFramebuffer),I.copy(w.viewport),ae.copy(w.scissor),Te=w.scissorTest,M.viewport(I),M.scissor(ae),M.setScissorTest(Te),K=-1;return}else if(Oe.__webglFramebuffer===void 0)fe.setupRenderTarget(w);else if(Oe.__hasExternalTextures)fe.rebindTextures(w,le.get(w.texture).__webglTexture,le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const gt=w.depthTexture;if(Oe.__boundDepthTexture!==gt){if(gt!==null&&le.has(gt)&&(w.width!==gt.image.width||w.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(w)}}const je=w.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Fe=!0);const et=le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(et[W])?re=et[W][de]:re=et[W],Q=!0):w.samples>0&&fe.useMultisampledRTT(w)===!1?re=le.get(w).__webglMultisampledFramebuffer:Array.isArray(et)?re=et[de]:re=et,I.copy(w.viewport),ae.copy(w.scissor),Te=w.scissorTest}else I.copy(Ve).multiplyScalar(pe).floor(),ae.copy(Rt).multiplyScalar(pe).floor(),Te=sn;if(de!==0&&(re=te),M.bindFramebuffer(Y.FRAMEBUFFER,re)&&M.drawBuffers(w,re),M.viewport(I),M.scissor(ae),M.setScissorTest(Te),Q){const Oe=le.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,de)}else if(Fe){const Oe=W;for(let je=0;je<w.textures.length;je++){const et=le.get(w.textures[je]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+je,et.__webglTexture,de,Oe)}}else if(w!==null&&de!==0){const Oe=le.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oe.__webglTexture,de)}K=-1};function bs(w){const W=le.get(w);return(W.__readFormat!==w.format||W.__readType!==w.type)&&(W.__readFormat=w.format,W.__readType=w.type,W.__formatReadable=U.textureFormatReadable(w.format),W.__typeReadable=U.textureTypeReadable(w.type)),W}this.readRenderTargetPixels=function(w,W,de,re,Q,Fe,Be,Oe=0){if(!(w&&w.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(je=je[Be]),je){M.bindFramebuffer(Y.FRAMEBUFFER,je);try{const et=w.textures[Oe],gt=et.format,_t=et.type;w.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe);const Ge=bs(et);if(Ge.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ge.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-re&&de>=0&&de<=w.height-Q&&Y.readPixels(W,de,re,Q,ye.convert(gt),ye.convert(_t),Fe)}finally{const et=ee!==null?le.get(ee).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(w,W,de,re,Q,Fe,Be,Oe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Be!==void 0&&(je=je[Be]),je)if(W>=0&&W<=w.width-re&&de>=0&&de<=w.height-Q){M.bindFramebuffer(Y.FRAMEBUFFER,je);const et=w.textures[Oe],gt=et.format,_t=et.type;w.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe);const Ge=bs(et);if(Ge.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ge.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Lt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Lt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Fe.byteLength,Y.STREAM_READ),Y.readPixels(W,de,re,Q,ye.convert(gt),ye.convert(_t),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const At=ee!==null?le.get(ee).__webglFramebuffer:null;M.bindFramebuffer(Y.FRAMEBUFFER,At);const Jt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Q_(Y,Jt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Lt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Fe),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Lt),Y.deleteSync(Jt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,de=0){const re=Math.pow(2,-de),Q=Math.floor(w.image.width*re),Fe=Math.floor(w.image.height*re),Be=W!==null?W.x:0,Oe=W!==null?W.y:0;fe.setTexture2D(w,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,de,0,0,Be,Oe,Q,Fe),M.unbindTexture()},this.copyTextureToTexture=function(w,W,de=null,re=null,Q=0,Fe=0){let Be,Oe,je,et,gt,_t,Ge,Lt,At;const Jt=w.isCompressedTexture?w.mipmaps[Fe]:w.image;if(de!==null)Be=de.max.x-de.min.x,Oe=de.max.y-de.min.y,je=de.isBox3?de.max.z-de.min.z:1,et=de.min.x,gt=de.min.y,_t=de.isBox3?de.min.z:0;else{const nn=Math.pow(2,-Q);Be=Math.floor(Jt.width*nn),Oe=Math.floor(Jt.height*nn),w.isDataArrayTexture?je=Jt.depth:w.isData3DTexture?je=Math.floor(Jt.depth*nn):je=1,et=0,gt=0,_t=0}re!==null?(Ge=re.x,Lt=re.y,At=re.z):(Ge=0,Lt=0,At=0);const Wt=ye.convert(W.format),tn=ye.convert(W.type);let ze;W.isData3DTexture?(fe.setTexture3D(W,0),ze=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(fe.setTexture2DArray(W,0),ze=Y.TEXTURE_2D_ARRAY):(fe.setTexture2D(W,0),ze=Y.TEXTURE_2D),M.activeTexture(Y.TEXTURE0),M.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),M.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),M.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);const hn=M.getParameter(Y.UNPACK_ROW_LENGTH),Pt=M.getParameter(Y.UNPACK_IMAGE_HEIGHT),In=M.getParameter(Y.UNPACK_SKIP_PIXELS),O=M.getParameter(Y.UNPACK_SKIP_ROWS),Pn=M.getParameter(Y.UNPACK_SKIP_IMAGES);M.pixelStorei(Y.UNPACK_ROW_LENGTH,Jt.width),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Jt.height),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,et),M.pixelStorei(Y.UNPACK_SKIP_ROWS,gt),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,_t);const ji=w.isDataArrayTexture||w.isData3DTexture,Ft=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const nn=le.get(w),pi=le.get(W),Qt=le.get(nn.__renderTarget),mi=le.get(pi.__renderTarget);M.bindFramebuffer(Y.READ_FRAMEBUFFER,Qt.__webglFramebuffer),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let ii=0;ii<je;ii++)ji&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(w).__webglTexture,Q,_t+ii),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,le.get(W).__webglTexture,Fe,At+ii)),Y.blitFramebuffer(et,gt,Be,Oe,Ge,Lt,Be,Oe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||le.has(w)){const nn=le.get(w),pi=le.get(W);M.bindFramebuffer(Y.READ_FRAMEBUFFER,X),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ie);for(let Qt=0;Qt<je;Qt++)ji?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,nn.__webglTexture,Q,_t+Qt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,nn.__webglTexture,Q),Ft?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,pi.__webglTexture,Fe,At+Qt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,pi.__webglTexture,Fe),Q!==0?Y.blitFramebuffer(et,gt,Be,Oe,Ge,Lt,Be,Oe,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ft?Y.copyTexSubImage3D(ze,Fe,Ge,Lt,At+Qt,et,gt,Be,Oe):Y.copyTexSubImage2D(ze,Fe,Ge,Lt,et,gt,Be,Oe);M.bindFramebuffer(Y.READ_FRAMEBUFFER,null),M.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ft?w.isDataTexture||w.isData3DTexture?Y.texSubImage3D(ze,Fe,Ge,Lt,At,Be,Oe,je,Wt,tn,Jt.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(ze,Fe,Ge,Lt,At,Be,Oe,je,Wt,Jt.data):Y.texSubImage3D(ze,Fe,Ge,Lt,At,Be,Oe,je,Wt,tn,Jt):w.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Fe,Ge,Lt,Be,Oe,Wt,tn,Jt.data):w.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Fe,Ge,Lt,Jt.width,Jt.height,Wt,Jt.data):Y.texSubImage2D(Y.TEXTURE_2D,Fe,Ge,Lt,Be,Oe,Wt,tn,Jt);M.pixelStorei(Y.UNPACK_ROW_LENGTH,hn),M.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Pt),M.pixelStorei(Y.UNPACK_SKIP_PIXELS,In),M.pixelStorei(Y.UNPACK_SKIP_ROWS,O),M.pixelStorei(Y.UNPACK_SKIP_IMAGES,Pn),Fe===0&&W.generateMipmaps&&Y.generateMipmap(ze),M.unbindTexture()},this.initRenderTarget=function(w){le.get(w).__webglFramebuffer===void 0&&fe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?fe.setTextureCube(w,0):w.isData3DTexture?fe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?fe.setTexture2DArray(w,0):fe.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){me=0,se=0,ee=null,M.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}}class Bb{constructor(){this.ctx=null}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playShoot(e){try{if(this.init(),!this.ctx)return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),o=this.ctx.createGain();i.connect(o),o.connect(this.ctx.destination),e==="sniper"||e==="rpg"?(i.type="sawtooth",i.frequency.setValueAtTime(140,t),i.frequency.exponentialRampToValueAtTime(30,t+.3),o.gain.setValueAtTime(.4,t),o.gain.exponentialRampToValueAtTime(.01,t+.35),i.start(t),i.stop(t+.35)):e==="shotgun"?(i.type="square",i.frequency.setValueAtTime(180,t),i.frequency.exponentialRampToValueAtTime(40,t+.25),o.gain.setValueAtTime(.35,t),o.gain.exponentialRampToValueAtTime(.01,t+.25),i.start(t),i.stop(t+.25)):(i.type="triangle",i.frequency.setValueAtTime(320,t),i.frequency.exponentialRampToValueAtTime(60,t+.1),o.gain.setValueAtTime(.25,t),o.gain.exponentialRampToValueAtTime(.01,t+.1),i.start(t),i.stop(t+.1))}catch{}}playHit(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.connect(i),i.connect(this.ctx.destination),t.type="sine",t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(1200,e+.08),i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.08),t.start(e),t.stop(e+.08)}catch{}}playKill(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.connect(i),i.connect(this.ctx.destination),t.type="triangle",t.frequency.setValueAtTime(440,e),t.frequency.setValueAtTime(660,e+.08),t.frequency.setValueAtTime(880,e+.16),i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.3),t.start(e),t.stop(e+.3)}catch{}}playHurt(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.connect(i),i.connect(this.ctx.destination),t.type="sawtooth",t.frequency.setValueAtTime(120,e),t.frequency.exponentialRampToValueAtTime(40,e+.18),i.gain.setValueAtTime(.35,e),i.gain.exponentialRampToValueAtTime(.01,e+.18),t.start(e),t.stop(e+.18)}catch{}}playPickup(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.connect(i),i.connect(this.ctx.destination),t.type="sine",t.frequency.setValueAtTime(523.25,e),t.frequency.setValueAtTime(659.25,e+.09),t.frequency.setValueAtTime(783.99,e+.18),i.gain.setValueAtTime(.25,e),i.gain.exponentialRampToValueAtTime(.01,e+.28),t.start(e),t.stop(e+.28)}catch{}}playReload(){try{if(this.init(),!this.ctx)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.connect(i),i.connect(this.ctx.destination),t.type="triangle",t.frequency.setValueAtTime(200,e),t.frequency.setValueAtTime(400,e+.12),i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.01,e+.25),t.start(e),t.stop(e+.25)}catch{}}}const Br=new Bb;function K0({playerCharacter:s,playerWeapon:e,onBackToMenu:t,addCoins:i,equippedSkin:o,network:l,difficulty:c="medium"}){const d=!!l,f=dt.useRef(null),h=typeof window<"u"&&(/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window&&window.innerWidth<1024),v={easy:{accuracy:.15,dodgeChance:.1,reactionTime:1.5},medium:{accuracy:.08,dodgeChance:.3,reactionTime:1},hard:{accuracy:.03,dodgeChance:.6,reactionTime:.5}}[c],m=ve=>ve==="lisa"?{hp:100,speed:10,name:"Лиза",emoji:"👧"}:ve==="dasha"?{hp:80,speed:14,name:"Даша",emoji:"🐱"}:{hp:120,speed:7.5,name:"Айдар",emoji:"🧑"},S=ve=>{switch(ve){case"pistol":return 1400;case"smg":return 1600;case"ak":return 2e3;case"crossbow":return 1800;case"shotgun":return 2500;case"sniper":return 3e3;case"rpg":return 3500;case"minigun":return 4200;default:return 2e3}},b=m(s),P=e==="shotgun"?8:e==="sniper"?5:e==="pistol"?12:e==="rpg"?3:e==="minigun"?100:e==="crossbow"?1:30,y=Cc[e],_=["ak","shotgun","pistol","sniper","smg","rpg","minigun","crossbow"],A=_[Math.floor(Math.random()*_.length)],z=_[Math.floor(Math.random()*_.length)],C=["lisa","dasha","aidar"].filter(ve=>ve!==s),N=C[0],D=C[1],F=m(N),E=m(D),[L,k]=dt.useState(b.hp),[H,$]=dt.useState(100),[te,X]=dt.useState(!1),[ie,me]=dt.useState(F.hp),[se,ee]=dt.useState(E.hp),[K,Z]=dt.useState(null),[I,ae]=dt.useState(P),[Te,qe]=dt.useState(!1),[Ye,Ke]=dt.useState(!1),[ce,pe]=dt.useState(!1),[Ae,at]=dt.useState(0),[Ve,Rt]=dt.useState(0),[sn,Tt]=dt.useState(0),[kt,Zt]=dt.useState(0),[Mt,Xt]=dt.useState(!0),[cn,gn]=dt.useState(0),[$t]=dt.useState(new Map),[on,Y]=dt.useState([]),[wn,Ht]=dt.useState({x:0,z:0,yaw:0}),[U,M]=dt.useState([]),[J,le]=dt.useState([]),fe=dt.useRef({active:!1,startX:0,startY:0,curX:0,curY:0,touchId:null}),Ee=dt.useRef({active:!1,lastX:0,lastY:0,touchId:null}),[Ne,ge]=dt.useState(null),_e=dt.useRef(!1),Ie=dt.useRef(!1),tt=dt.useRef(()=>{}),Ue=dt.useRef(()=>{}),De=dt.useCallback(()=>{Ke(!0),setTimeout(()=>Ke(!1),150)},[]),it=dt.useCallback(()=>{pe(!0),setTimeout(()=>pe(!1),200)},[]),ut=dt.useCallback((ve,xe)=>{const ye=Date.now()+Math.random(),ke=window.innerWidth/2+(Math.random()-.5)*120,Me=window.innerHeight/2-40+(Math.random()-.5)*60;le(Je=>[...Je.slice(-6),{id:ye,text:ve,color:xe,x:ke,y:Me,opacity:1}]),setTimeout(()=>{le(Je=>Je.filter(Ze=>Ze.id!==ye))},1200)},[]),ht=dt.useCallback(ve=>{const xe=Date.now()+Math.random();M(ye=>[...ye.slice(-3),{id:xe,text:ve,time:Date.now()}]),setTimeout(()=>{M(ye=>ye.filter(ke=>ke.id!==xe))},3500)},[]);dt.useEffect(()=>{const ve=document.body.style.touchAction,xe=document.body.style.overflow;return document.body.style.touchAction="none",document.body.style.overflow="hidden",()=>{document.body.style.touchAction=ve,document.body.style.overflow=xe}},[]),dt.useEffect(()=>{if(!f.current)return;const ve=f.current,xe=Date.now(),ye=new my,ke=new Pi(400,32,32),Me=new lr({uniforms:{topColor:{value:new Dt(30719)},bottomColor:{value:new Dt(16777215)},offset:{value:33},exponent:{value:.6}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `,side:ui}),Je=new $e(ke,Me);ye.add(Je);const Ze=new Gd({color:16777215,transparent:!0,opacity:.8}),Vt=h?8:16;for(let ne=0;ne<Vt;ne++){const Se=new bn,Ce=3+Math.floor(Math.random()*3);for(let Pe=0;Pe<Ce;Pe++){const We=new $e(new Pi(3+Math.random()*4,8,6),Ze);We.position.set((Math.random()-.5)*8,(Math.random()-.5)*2,(Math.random()-.5)*4),We.scale.y=.6,Se.add(We)}Se.position.set((Math.random()-.5)*300,50+Math.random()*30,(Math.random()-.5)*300),ye.add(Se)}h||(ye.fog=new ph(8900331,60,160));const yt=new zi(75,window.innerWidth/window.innerHeight,.1,500),Gt=new Ob({antialias:!h,powerPreference:"high-performance"});Gt.setSize(window.innerWidth,window.innerHeight),Gt.setPixelRatio(Math.min(window.devicePixelRatio,h?1.5:2)),Gt.shadowMap.enabled=!h,h||(Gt.shadowMap.type=ug),Gt.toneMapping=rh,Gt.toneMappingExposure=.88,ve.appendChild(Gt.domElement),ye.add(new Oy(16777215,.6));const xn=new Fy(16774630,.85);xn.position.set(50,100,30),h||(xn.castShadow=!0,xn.shadow.mapSize.set(1024,1024),xn.shadow.camera.near=1,xn.shadow.camera.far=200,xn.shadow.camera.left=-80,xn.shadow.camera.right=80,xn.shadow.camera.top=80,xn.shadow.camera.bottom=-80),ye.add(xn),ye.add(new Iy(8900331,4033600,.5));const Hi=new qa(200,200,40,40),Vi=Hi.attributes.position;for(let ne=0;ne<Vi.count;ne++){const Se=Vi.getX(ne),Ce=Vi.getY(ne);Vi.setZ(ne,Math.sin(Se*.1)*Math.cos(Ce*.1)*.3+Math.random()*.05)}Hi.computeVertexNormals();const Sr=new Gd({color:4885567}),Gi=new $e(Hi,Sr);Gi.rotation.x=-Math.PI/2,Gi.receiveShadow=!h,ye.add(Gi);const $o=new Gd({color:4028981});for(let ne=0;ne<30;ne++){const Se=new $e(new vh(1+Math.random()*2,8),$o);Se.rotation.x=-Math.PI/2,Se.position.set((Math.random()-.5)*180,.01,(Math.random()-.5)*180),ye.add(Se)}const Wi=[],Mr=(ne,Se,Ce,Pe,We,ft,xt)=>{const st=new yn({color:ft}),bt=new $e(new fn(Ce,Pe,We),st);bt.position.set(ne,Pe/2,Se),bt.castShadow=!h,bt.receiveShadow=!h,ye.add(bt);const Yt=new Oa(Math.max(Ce,We)*.7,Pe*.4,4),wt=new $e(Yt,new yn({color:xt}));wt.position.set(ne,Pe+Pe*.2,Se),wt.rotation.y=Math.PI/4,wt.castShadow=!h,ye.add(wt);const rn=new $e(new fn(Ce*.25,Pe*.5,.1),new yn({color:6636321}));rn.position.set(ne,Pe*.25,Se+We/2+.05),ye.add(rn),Wi.push({min:new G(ne-Ce/2,0,Se-We/2),max:new G(ne+Ce/2,Pe,Se+We/2)})};Mr(-25,-25,10,8,10,13808780,9109504),Mr(25,25,10,8,10,16119260,3100495),Mr(-25,25,8,6,8,16770244,8388608),Mr(25,-25,8,6,8,14596231,6908265);const An=(ne,Se,Ce,Pe)=>{const We=new yn({color:9127187});for(let wt=0;wt<Ce;wt++){const rn=new $e(new fn(.2,2,.2),We);rn.position.set(ne+wt*1.5*Math.cos(Pe),1,Se+wt*1.5*Math.sin(Pe)),ye.add(rn)}const ft=new $e(new fn(Ce*1.5,.1,.1),We);ft.position.set(ne+Ce*1.5*Math.cos(Pe)/2,1.5,Se+Ce*1.5*Math.sin(Pe)/2),ft.rotation.y=-Pe,ye.add(ft);const xt=Math.min(ne,ne+Ce*1.5*Math.cos(Pe))-.5,st=Math.max(ne,ne+Ce*1.5*Math.cos(Pe))+.5,bt=Math.min(Se,Se+Ce*1.5*Math.sin(Pe))-.5,Yt=Math.max(Se,Se+Ce*1.5*Math.sin(Pe))+.5;Wi.push({min:new G(xt,0,bt),max:new G(st,2,Yt)})};An(-40,0,8,0),An(40,0,8,0),An(0,-40,8,Math.PI/2),An(0,40,8,Math.PI/2);const hi=(ne,Se,Ce)=>{const Pe=new yh(Ce,0),We=new yn({color:6908265,flatShading:!0}),ft=new $e(Pe,We);ft.position.set(ne,Ce*.6,Se),ft.rotation.set(Math.random(),Math.random(),Math.random()),ye.add(ft),Wi.push({min:new G(ne-Ce,0,Se-Ce),max:new G(ne+Ce,Ce*1.2,Se+Ce)})};hi(0,0,3),hi(-10,-10,1.5),hi(10,10,1.5),hi(-35,-35,2.5),hi(35,35,2.5),hi(35,-35,2.5),hi(-35,35,2.5);const Ss=new yn({color:3815994}),Er=(ne,Se,Ce,Pe,We)=>{const ft=new $e(new fn(Ce,Pe,We),Ss);ft.position.set(ne,Pe/2,Se),ye.add(ft),Wi.push({min:new G(ne-Ce/2,0,Se-We/2),max:new G(ne+Ce/2,Pe,Se+We/2)})};Er(0,-90,200,12,5),Er(0,90,200,12,5),Er(-90,0,5,12,200),Er(90,0,5,12,200);const br=(ne,Se)=>{const Ce=new $e(new Rn(.3,.4,4,6),new yn({color:6044190}));Ce.position.set(ne,2,Se),ye.add(Ce);const Pe=new yn({color:2980397}),We=new $e(new Pi(1.8,6,6),Pe);We.position.set(ne,4.8,Se),ye.add(We)};[[-50,-50],[50,50],[-50,50],[50,-50],[-60,0],[60,0],[0,-60],[0,60]].forEach(([ne,Se])=>br(ne,Se));const $r=[],Tr=new fn(.9,.9,.9),Ms=new yn({color:1096065,emissive:366185,emissiveIntensity:.5}),Qs=new fn(.7,.25,.95),Yo=new fn(.25,.7,.95),an=new Vs({color:16777215});[new G(-15,.8,-15),new G(15,.8,15),new G(0,.8,-30),new G(0,.8,30)].forEach(ne=>{const Se=new bn,Ce=new $e(Tr,Ms),Pe=new $e(Qs,an),We=new $e(Yo,an);Se.add(Ce,Pe,We),Se.position.copy(ne),ye.add(Se),$r.push({mesh:Se,position:ne,active:!0,respawnTime:0})});const Es=()=>{const ne=new bn,Se=new yn({color:16738740}),Ce=new yn({color:16777215}),Pe=new yn({color:16767916}),We=new yn({color:7483191}),ft=new bn;ft.position.set(-.14,.7,0);const xt=new $e(new Rn(.11,.1,.7,8),Se);xt.position.y=-.35,ft.add(xt),ne.add(ft);const st=new bn;st.position.set(.14,.7,0);const bt=new $e(new Rn(.11,.1,.7,8),Se);bt.position.y=-.35,st.add(bt),ne.add(st);const Yt=new $e(new Rn(.26,.28,.65,8),Ce);Yt.position.y=1.02,ne.add(Yt);const wt=new bn;wt.position.set(-.35,1.25,0);const rn=new $e(new Rn(.06,.06,.5,8),Pe);rn.position.y=-.25,wt.add(rn),ne.add(wt);const Mn=new bn;Mn.position.set(.35,1.25,0);const Ot=new $e(new Rn(.06,.06,.5,8),Pe);Ot.position.y=-.25,Mn.add(Ot),ne.add(Mn);const lt=new $e(new Pi(.23,10,8),Pe);lt.position.y=1.65,ne.add(lt);const vt=new $e(new Pi(.26,8,8),We);return vt.position.set(0,1.72,-.03),vt.scale.set(1,.9,1.1),ne.add(vt),{group:ne,leftLeg:ft,rightLeg:st,leftArm:wt,rightArm:Mn}},bs=()=>{const ne=new bn,Se=new yn({color:9133628}),Ce=new yn({color:4008735}),Pe=new $e(new xh(.28,.45,6,8),Se);Pe.position.y=.85,ne.add(Pe);const We=new Rn(.06,.05,.45,6),ft=new bn;ft.position.set(-.13,.45,.09);const xt=new $e(We,Se);xt.position.y=-.22,ft.add(xt),ne.add(ft);const st=new bn;st.position.set(.13,.45,.09);const bt=new $e(We,Se);bt.position.y=-.22,st.add(bt),ne.add(st);const Yt=new $e(new Pi(.26,10,8),Se);Yt.position.y=1.42,ne.add(Yt);const wt=new Oa(.09,.2,4),rn=new $e(wt,Se);rn.position.set(-.15,1.7,.02),rn.rotation.z=.2,ne.add(rn);const Mn=new $e(wt,Se);Mn.position.set(.15,1.7,.02),Mn.rotation.z=-.2,ne.add(Mn);const Ot=new $e(new Rn(.04,.02,.6,6),Ce);Ot.position.set(0,.9,-.3),Ot.rotation.x=-.5,ne.add(Ot);const lt=new bn;lt.position.set(-.13,.45,.09),lt.add(new $e(We,Se)),ne.add(lt);const vt=new bn;return vt.position.set(.13,.45,.09),vt.add(new $e(We,Se)),ne.add(vt),{group:ne,leftLeg:ft,rightLeg:st,leftArm:lt,rightArm:vt}},w=()=>{const ne=new bn,Se=new yn({color:15254430}),Ce=new yn({color:1710618}),Pe=new yn({color:1118481}),We=new yn({color:6044190}),ft=new bn;ft.position.set(-.14,.71,0);const xt=new $e(new Rn(.18,.2,.7,8),Pe);xt.position.y=-.35,ft.add(xt),ne.add(ft);const st=new bn;st.position.set(.14,.71,0);const bt=new $e(new Rn(.18,.2,.7,8),Pe);bt.position.y=-.35,st.add(bt),ne.add(st);const Yt=new $e(new Rn(.32,.35,.75,8),Ce);Yt.position.y=1.05,ne.add(Yt);const wt=new Rn(.07,.06,.55,8),rn=new bn;rn.position.set(-.37,1.27,0);const Mn=new $e(wt,Ce);Mn.position.y=-.27,rn.add(Mn),ne.add(rn);const Ot=new bn;Ot.position.set(.37,1.27,0);const lt=new $e(wt,Ce);lt.position.y=-.27,Ot.add(lt),ne.add(Ot);const vt=new $e(new Pi(.22,10,8),Se);vt.position.y=1.67,ne.add(vt);const si=new $e(new Pi(.25,8,8),We);return si.position.set(0,1.74,-.02),si.scale.set(1.05,.85,1.05),ne.add(si),{group:ne,leftLeg:ft,rightLeg:st,leftArm:rn,rightArm:Ot}},W=ne=>ne==="lisa"?Es():ne==="dasha"?bs():w(),de=(ne,Se)=>{for(const Ce of Wi){const Pe=Math.max(Ce.min.x,Math.min(ne.x,Ce.max.x)),We=Math.max(Ce.min.z,Math.min(ne.z,Ce.max.z));if((ne.x-Pe)**2+(ne.z-We)**2<Se*Se)return!0}return!1},re=(ne,Se)=>{const Ce=new G().subVectors(Se,ne),Pe=Ce.length();Ce.normalize();const We=Math.ceil(Pe/2);for(let ft=1;ft<We;ft++){const xt=new G().lerpVectors(ne,Se,ft/We);for(const st of Wi)if(xt.x>=st.min.x&&xt.x<=st.max.x&&xt.z>=st.min.z&&xt.z<=st.max.z&&xt.y>=st.min.y&&xt.y<=st.max.y)return!1}return!0},Q=()=>{let ne,Se=0;do ne=new G((Math.random()-.5)*140,0,(Math.random()-.5)*140),Se++;while(de(ne,2)&&Se<50);return ne},Fe=Q(),Oe=W(s).group;Oe.position.copy(Fe),Oe.visible=!1,ye.add(Oe);let je=Q();for(;je.distanceTo(Fe)<28;)je=Q();const et=W(N),gt=et.group;gt.position.copy(je),ye.add(gt);let _t=Q();for(;_t.distanceTo(Fe)<28||_t.distanceTo(je)<28;)_t=Q();const Ge=W(D),Lt=Ge.group;Lt.position.copy(_t),ye.add(Lt);const At=new bn,Jt=o?Oo.find(ne=>ne.id===o):null,Wt=Jt?Jt.color:2236962,tn=new yn({color:Wt,shininess:60,emissive:Wt,emissiveIntensity:Jt?.3:0}),ze=new yn({color:1579032,shininess:80}),hn=new yn({color:6636321,shininess:30});if(e==="ak"){At.add(new $e(new fn(.05,.055,.5),tn));const ne=new $e(new Rn(.011,.011,.3,8),ze);ne.rotation.x=Math.PI/2,ne.position.z=.35,At.add(ne);const Se=new $e(new fn(.03,.12,.04),ze);Se.position.set(0,-.08,.05),Se.rotation.x=.15,At.add(Se);const Ce=new $e(new fn(.04,.05,.15),hn);Ce.position.set(0,0,-.3),At.add(Ce)}else if(e==="shotgun"){At.add(new $e(new fn(.055,.065,.55),tn));const ne=new $e(new Rn(.016,.016,.35,8),ze);ne.rotation.x=Math.PI/2,ne.position.set(-.013,.01,.4);const Se=new $e(new Rn(.016,.016,.35,8),ze);Se.rotation.x=Math.PI/2,Se.position.set(.013,.01,.4),At.add(ne,Se)}else if(e==="pistol"){At.add(new $e(new fn(.03,.035,.18),tn));const ne=new $e(new fn(.025,.07,.035),hn);ne.position.set(0,-.05,-.04),ne.rotation.x=.2,At.add(ne)}else if(e==="sniper"){At.add(new $e(new fn(.035,.045,.7),tn));const ne=new $e(new Rn(.025,.025,.15,8),ze);ne.rotation.x=Math.PI/2,ne.position.set(0,.05,.1),At.add(ne)}else if(e==="smg"){At.add(new $e(new fn(.04,.05,.35),tn));const ne=new $e(new fn(.025,.1,.03),ze);ne.position.set(0,-.07,0),At.add(ne)}else if(e==="rpg"){At.add(new $e(new Rn(.04,.04,.6,8),tn));const ne=new $e(new Oa(.04,.12,8),new yn({color:9109504}));ne.rotation.x=Math.PI/2,ne.position.z=.35,At.add(ne)}else if(e==="minigun"){At.add(new $e(new fn(.06,.06,.3),tn));for(let ne=0;ne<6;ne++){const Se=new $e(new Rn(.008,.008,.4,6),ze);Se.rotation.x=Math.PI/2,Se.position.set(Math.cos(ne*Math.PI/3)*.025,Math.sin(ne*Math.PI/3)*.025,.2),At.add(Se)}}else At.add(new $e(new fn(.03,.03,.5),tn));At.position.set(.22,-.18,-.35),yt.add(At),ye.add(yt);const Pt=new Vs({color:16776960,transparent:!0,opacity:0}),In=new $e(new Pi(.05,6,6),Pt);In.position.set(.22,-.16,-.7),yt.add(In);const O={bullets:[],particles:[],keys:{},yaw:Math.PI*.75,pitch:0,lastShot:0,playerHP:b.hp,stamina:100,isSprinting:!1,isReloading:!1,reloadStart:0,playerPos:Fe.clone(),bot1Pos:je.clone(),bot2Pos:_t.clone(),bot1HP:F.hp,bot2HP:E.hp,bot1LastShot:0,bot2LastShot:0,bot1StrafeDir:1,bot1StrafeTimer:0,bot2StrafeDir:1,bot2StrafeTimer:0,gameOver:!1,weaponBob:0,recoilOffset:0,cameraShake:0,isMouseDown:!1,isLocked:h,ammo:P,maxAmmo:P,walkCycle:0,shotsFired:0,shotsHit:0},Pn={x:0,y:0},ji=(ne,Se=16755200,Ce=6)=>{const Pe=new fn(.04,.04,.04),We=new Vs({color:Se});for(let ft=0;ft<Ce;ft++){const xt=new $e(Pe,We);xt.position.copy(ne);const st=new G((Math.random()-.5)*3,Math.random()*3+1,(Math.random()-.5)*3);ye.add(xt),O.particles.push({mesh:xt,velocity:st,life:.4,maxLife:.4})}};function Ft(){if(O.gameOver||!h&&!O.isLocked)return;const ne=Date.now();if(O.isReloading||O.ammo<=0){O.ammo<=0&&!O.isReloading&&nn();return}if(ne-O.lastShot<y.fireRate)return;O.lastShot=ne,O.ammo--,ae(O.ammo),O.shotsFired++,Rt(O.shotsFired),Br.playShoot(e),O.recoilOffset=e==="sniper"||e==="rpg"?.12:e==="shotgun"?.08:.04,O.pitch+=e==="sniper"||e==="rpg"?.025:e==="shotgun"?.015:.005,Pt.opacity=1;const Se=new G(0,0,-1).applyQuaternion(yt.quaternion);for(let Ce=0;Ce<y.bulletsPerShot;Ce++){const Pe=new $e(new Pi(e==="rpg"?.08:.035,4,4),new Vs({color:e==="sniper"?4521983:e==="rpg"?16729088:16777028}));Pe.position.copy(O.playerPos),Pe.position.y+=1.6;const We=Se.clone();We.x+=(Math.random()-.5)*y.spread,We.y+=(Math.random()-.5)*y.spread,We.z+=(Math.random()-.5)*y.spread,We.normalize().multiplyScalar(e==="sniper"||e==="rpg"?4:2.5),ye.add(Pe),O.bullets.push({mesh:Pe,velocity:We,life:80,ownerId:"player",damage:y.damage})}}function nn(){O.isReloading||O.ammo>=O.maxAmmo||(O.isReloading=!0,O.reloadStart=Date.now(),qe(!0),Br.playReload())}tt.current=Ft,Ue.current=nn;function pi(ne,Se,Ce,Pe){if(O.gameOver||Math.random()<1-v.accuracy*10)return;const We=Date.now(),ft=ne==="bot1"?"bot1LastShot":"bot2LastShot";if(We-O[ft]<Pe.fireRate*(2.2+v.reactionTime))return;O[ft]=We;const xt=new G(Ce.x,Ce.y+1.2,Ce.z).sub(new G(Se.x,Se.y+1.2,Se.z)).normalize();for(let st=0;st<Pe.bulletsPerShot;st++){const bt=new $e(new Pi(.035,4,4),new Vs({color:ne==="bot1"?16737860:16729343}));bt.position.copy(Se),bt.position.y+=1.2;const Yt=Pe.spread*(2.5-v.accuracy*10),wt=xt.clone();wt.x+=(Math.random()-.5)*Yt,wt.y+=(Math.random()-.5)*Yt,wt.z+=(Math.random()-.5)*Yt,wt.normalize().multiplyScalar(2),ye.add(bt),O.bullets.push({mesh:bt,velocity:wt,life:80,ownerId:ne,damage:Pe.damage})}}function Qt(ne){if(O.bot1HP<=0)return;const Se=Cc[A],Ce=[{pos:O.playerPos,id:"player"}];O.bot2HP>0&&Ce.push({pos:O.bot2Pos,id:"bot2"});let Pe=Ce[0],We=1/0;for(const Ot of Ce){const lt=O.bot1Pos.distanceTo(Ot.pos);lt<We&&(We=lt,Pe=Ot)}if(We>80)return;const ft=new G().subVectors(Pe.pos,O.bot1Pos),xt=ft.length();O.bot1StrafeTimer+=ne,O.bot1StrafeTimer>1.5+Math.random()*2&&(O.bot1StrafeDir*=-1,O.bot1StrafeTimer=0);const st=new G,bt=A==="sniper"?35:A==="shotgun"?8:18;xt>bt+8?st.add(ft.clone().normalize().multiplyScalar(.8)):xt<bt-8&&st.add(ft.clone().normalize().multiplyScalar(-.6));const Yt=new G(-ft.z,0,ft.x).normalize();st.add(Yt.multiplyScalar(O.bot1StrafeDir*.5)),Math.random()<v.dodgeChance*.03&&st.add(new G((Math.random()-.5)*2,0,(Math.random()-.5)*2));let wt=!1;if(st.length()>0){st.normalize();const Ot=O.bot1Pos.clone().add(st.multiplyScalar(F.speed*ne));Ot.x=Math.max(-85,Math.min(85,Ot.x)),Ot.z=Math.max(-85,Math.min(85,Ot.z)),de(Ot,.6)||(O.bot1Pos.copy(Ot),wt=!0)}wt&&(O.walkCycle+=ne*8,et.leftLeg.rotation.x=Math.sin(O.walkCycle)*.6,et.rightLeg.rotation.x=-Math.sin(O.walkCycle)*.6);const rn=new G(O.bot1Pos.x,O.bot1Pos.y+1.5,O.bot1Pos.z),Mn=new G(Pe.pos.x,Pe.pos.y+1.2,Pe.pos.z);xt<55&&xt>3&&re(rn,Mn)&&pi("bot1",O.bot1Pos,Pe.pos,Se)}function mi(ne){if(O.bot2HP<=0)return;const Se=Cc[z],Ce=[{pos:O.playerPos,id:"player"}];O.bot1HP>0&&Ce.push({pos:O.bot1Pos,id:"bot1"});let Pe=Ce[0],We=1/0;for(const Ot of Ce){const lt=O.bot2Pos.distanceTo(Ot.pos);lt<We&&(We=lt,Pe=Ot)}if(We>80)return;const ft=new G().subVectors(Pe.pos,O.bot2Pos),xt=ft.length();O.bot2StrafeTimer+=ne,O.bot2StrafeTimer>1.5+Math.random()*2&&(O.bot2StrafeDir*=-1,O.bot2StrafeTimer=0);const st=new G,bt=z==="sniper"?35:z==="shotgun"?8:18;xt>bt+8?st.add(ft.clone().normalize().multiplyScalar(.8)):xt<bt-8&&st.add(ft.clone().normalize().multiplyScalar(-.6));const Yt=new G(-ft.z,0,ft.x).normalize();st.add(Yt.multiplyScalar(O.bot2StrafeDir*.5)),Math.random()<v.dodgeChance*.03&&st.add(new G((Math.random()-.5)*2,0,(Math.random()-.5)*2));let wt=!1;if(st.length()>0){st.normalize();const Ot=O.bot2Pos.clone().add(st.multiplyScalar(E.speed*ne));Ot.x=Math.max(-85,Math.min(85,Ot.x)),Ot.z=Math.max(-85,Math.min(85,Ot.z)),de(Ot,.6)||(O.bot2Pos.copy(Ot),wt=!0)}wt&&(O.walkCycle+=ne*8,Ge.leftLeg.rotation.x=Math.sin(O.walkCycle+Math.PI)*.6,Ge.rightLeg.rotation.x=-Math.sin(O.walkCycle+Math.PI)*.6);const rn=new G(O.bot2Pos.x,O.bot2Pos.y+1.5,O.bot2Pos.z),Mn=new G(Pe.pos.x,Pe.pos.y+1.2,Pe.pos.z);xt<55&&xt>3&&re(rn,Mn)&&pi("bot2",O.bot2Pos,Pe.pos,Se)}let ii=window.innerWidth/2,ri=window.innerHeight/2;const Xi=ne=>{O.keys[ne.key.toLowerCase()]=!0,ne.key==="Shift"&&(O.isSprinting=!0,X(!0)),ne.key.toLowerCase()==="r"&&!O.isReloading&&O.ammo<O.maxAmmo&&nn()},$i=ne=>{O.keys[ne.key.toLowerCase()]=!1,ne.key==="Shift"&&(O.isSprinting=!1,X(!1))},Yr=ne=>{!O.isLocked||O.gameOver||(document.pointerLockElement===Gt.domElement?(O.yaw-=ne.movementX*.002,O.pitch-=ne.movementY*.002):(O.yaw-=(ne.clientX-ii)*.003,O.pitch-=(ne.clientY-ri)*.003,ii=ne.clientX,ri=ne.clientY),O.pitch=Math.max(-1.2,Math.min(1.2,O.pitch)))},qr=ne=>{if(ne.button===0&&!O.gameOver){if(!O.isLocked&&!h){O.isLocked=!0,Xt(!1),ii=ne.clientX,ri=ne.clientY;try{Gt.domElement.requestPointerLock()}catch{}return}O.isMouseDown=!0,Ft()}},Yi=ne=>{ne.button===0&&(O.isMouseDown=!1)},Za=()=>{!h&&document.pointerLockElement!==Gt.domElement&&O.isLocked&&(Xt(!0),O.isLocked=!1)};document.addEventListener("keydown",Xi),document.addEventListener("keyup",$i),document.addEventListener("mousemove",Yr),document.addEventListener("mousedown",qr),document.addEventListener("mouseup",Yi),document.addEventListener("pointerlockchange",Za);const qo=ne=>{if(!O.gameOver){Mt&&(Xt(!1),O.isLocked=!0);for(let Se=0;Se<ne.changedTouches.length;Se++){const Ce=ne.changedTouches[Se],Pe=Ce.clientX,We=Ce.clientY;if(Pe<window.innerWidth*.45&&!fe.current.active)fe.current={active:!0,startX:Pe,startY:We,curX:Pe,curY:We,touchId:Ce.identifier},ge({x:Pe,y:We});else if(Pe>=window.innerWidth*.45&&!Ee.current.active){const ft=ne.target;if(ft&&ft.closest("button"))continue;Ee.current={active:!0,lastX:Pe,lastY:We,touchId:Ce.identifier}}}}},Kr=ne=>{for(let Se=0;Se<ne.changedTouches.length;Se++){const Ce=ne.changedTouches[Se];if(fe.current.active&&Ce.identifier===fe.current.touchId){const Pe=Ce.clientX-fe.current.startX,We=Ce.clientY-fe.current.startY,ft=Math.hypot(Pe,We),xt=50,st=Math.atan2(We,Pe),bt=Math.min(ft,xt);Pn.x=Math.cos(st)*(bt/xt),Pn.y=Math.sin(st)*(bt/xt),ge({x:fe.current.startX+Math.cos(st)*bt,y:fe.current.startY+Math.sin(st)*bt})}if(Ee.current.active&&Ce.identifier===Ee.current.touchId){const Pe=Ce.clientX-Ee.current.lastX,We=Ce.clientY-Ee.current.lastY;O.yaw-=Pe*.004,O.pitch-=We*.004,O.pitch=Math.max(-1.2,Math.min(1.2,O.pitch)),Ee.current.lastX=Ce.clientX,Ee.current.lastY=Ce.clientY}}},eo=ne=>{for(let Se=0;Se<ne.changedTouches.length;Se++){const Ce=ne.changedTouches[Se];fe.current.touchId===Ce.identifier&&(fe.current.active=!1,fe.current.touchId=null,Pn.x=0,Pn.y=0,ge(null)),Ee.current.touchId===Ce.identifier&&(Ee.current.active=!1,Ee.current.touchId=null)}};ve.addEventListener("touchstart",qo,{passive:!1}),ve.addEventListener("touchmove",Kr,{passive:!1}),ve.addEventListener("touchend",eo),ve.addEventListener("touchcancel",eo);let Ko=0,Zr=0;const Zo=ne=>{Zr=requestAnimationFrame(Zo);const Se=Math.min((ne-Ko)/1e3,.05);if(Ko=ne,O.gameOver){Gt.render(ye,yt);return}Zt(Math.floor((Date.now()-xe)/1e3)),(O.isMouseDown||_e.current)&&(e==="ak"||e==="smg"||e==="minigun")&&Ft();const Ce=S(e);O.isReloading&&Date.now()-O.reloadStart>Ce&&(O.isReloading=!1,O.ammo=O.maxAmmo,qe(!1),ae(O.maxAmmo));const Pe=O.isSprinting||Ie.current;Pe&&O.stamina>0?O.stamina=Math.max(0,O.stamina-Se*40):O.stamina=Math.min(100,O.stamina+Se*25),$(Math.floor(O.stamina));const We=Pe&&O.stamina>5,ft=b.speed*(We?1.55:1),xt=new G(0,0,-1).applyAxisAngle(new G(0,1,0),O.yaw);xt.y=0,xt.normalize();const st=new G(1,0,0).applyAxisAngle(new G(0,1,0),O.yaw);st.y=0,st.normalize();const bt=new G;let Yt=!1;if((O.keys.w||O.keys.ц||O.keys.arrowup)&&(bt.add(xt),Yt=!0),(O.keys.s||O.keys.ы||O.keys.arrowdown)&&(bt.sub(xt),Yt=!0),(O.keys.d||O.keys.в||O.keys.arrowright)&&(bt.add(st),Yt=!0),(O.keys.a||O.keys.ф||O.keys.arrowleft)&&(bt.sub(st),Yt=!0),(Math.abs(Pn.x)>.05||Math.abs(Pn.y)>.05)&&(bt.add(st.clone().multiplyScalar(Pn.x)),bt.add(xt.clone().multiplyScalar(-Pn.y)),Yt=!0),Yt&&bt.length()>0){bt.normalize();const lt=O.playerPos.clone().add(bt.multiplyScalar(ft*Se));if(lt.x=Math.max(-85,Math.min(85,lt.x)),lt.z=Math.max(-85,Math.min(85,lt.z)),!de(lt,.6))O.playerPos.copy(lt);else{const vt=O.playerPos.clone();vt.x=lt.x,de(vt,.6)||(O.playerPos.x=lt.x);const si=O.playerPos.clone();si.z=lt.z,de(si,.6)||(O.playerPos.z=lt.z)}O.weaponBob+=Se*(We?12:8)}let wt=0,rn=0;O.cameraShake>0&&(wt=(Math.random()-.5)*O.cameraShake,rn=(Math.random()-.5)*O.cameraShake,O.cameraShake=Math.max(0,O.cameraShake-Se*2)),yt.position.set(O.playerPos.x+wt,O.playerPos.y+1.7+rn,O.playerPos.z),yt.rotation.order="YXZ",yt.rotation.y=O.yaw,yt.rotation.x=O.pitch;const Mn=Yt?Math.sin(O.weaponBob)*.008:0,Ot=Yt?Math.abs(Math.cos(O.weaponBob))*.006:0;if(At.position.set(.22+Mn,-.18+Ot,-.35+O.recoilOffset),O.recoilOffset*=.86,Pt.opacity>0&&(Pt.opacity-=Se*15,Pt.opacity<0&&(Pt.opacity=0)),$r.forEach(lt=>{if(lt.active){if(lt.mesh.rotation.y+=Se*1.5,lt.mesh.position.y=lt.position.y+Math.sin(ne*.003)*.15,O.playerPos.distanceTo(lt.position)<2&&O.playerHP<b.hp){lt.active=!1,lt.mesh.visible=!1,lt.respawnTime=Date.now()+15e3;const vt=Math.min(25,b.hp-O.playerHP);O.playerHP+=vt,k(O.playerHP),Br.playPickup(),ut(`+${vt} HP`,"#10b981")}}else Date.now()>lt.respawnTime&&(lt.active=!0,lt.mesh.visible=!0)}),Qt(Se),gt.position.copy(O.bot1Pos),O.bot1HP>0){const lt=O.playerPos.distanceTo(O.bot1Pos)<(O.bot2HP>0?O.bot2Pos.distanceTo(O.bot1Pos):1/0)?O.playerPos:O.bot2Pos;gt.rotation.y=Math.atan2(lt.x-O.bot1Pos.x,lt.z-O.bot1Pos.z)}if(mi(Se),Lt.position.copy(O.bot2Pos),O.bot2HP>0){const lt=O.playerPos.distanceTo(O.bot2Pos)<(O.bot1HP>0?O.bot1Pos.distanceTo(O.bot2Pos):1/0)?O.playerPos:O.bot1Pos;Lt.rotation.y=Math.atan2(lt.x-O.bot2Pos.x,lt.z-O.bot2Pos.z)}for(let lt=O.bullets.length-1;lt>=0;lt--){const vt=O.bullets[lt];if(vt.mesh.position.add(vt.velocity),vt.life--,vt.life<=0){ye.remove(vt.mesh),O.bullets.splice(lt,1);continue}const si=[{p:new G(O.playerPos.x,O.playerPos.y+1.2,O.playerPos.z),id:"player"},{p:new G(O.bot1Pos.x,O.bot1Pos.y+1.2,O.bot1Pos.z),id:"bot1"},{p:new G(O.bot2Pos.x,O.bot2Pos.y+1.2,O.bot2Pos.z),id:"bot2"}];let $n=!1;for(const oi of si)if(!(vt.ownerId===oi.id||oi.id==="bot1"&&O.bot1HP<=0||oi.id==="bot2"&&O.bot2HP<=0)&&vt.mesh.position.distanceTo(oi.p)<1){if(ji(vt.mesh.position,oi.id==="player"?16711748:65484,8),oi.id==="player"){if(O.playerHP-=vt.damage,k(Math.max(0,O.playerHP)),it(),Br.playHurt(),O.cameraShake=.25,O.playerHP<=0){O.gameOver=!0,Z("lose");try{document.exitPointerLock()}catch{}}}else oi.id==="bot1"?(O.bot1HP-=vt.damage,me(Math.max(0,O.bot1HP)),vt.ownerId==="player"&&(O.shotsHit++,Tt(O.shotsHit),De(),Br.playHit(),ut(`-${vt.damage}`,"#f59e0b"),O.bot1HP<=0&&(Br.playKill(),at(qi=>qi+1),i(100),gn(qi=>qi+100),ht(`🎯 Вы уничтожили ${F.name}! (+100 💰)`)))):oi.id==="bot2"&&(O.bot2HP-=vt.damage,ee(Math.max(0,O.bot2HP)),vt.ownerId==="player"&&(O.shotsHit++,Tt(O.shotsHit),De(),Br.playHit(),ut(`-${vt.damage}`,"#f59e0b"),O.bot2HP<=0&&(Br.playKill(),at(qi=>qi+1),i(100),gn(qi=>qi+100),ht(`🎯 Вы уничтожили ${E.name}! (+100 💰)`))));ye.remove(vt.mesh),O.bullets.splice(lt,1),$n=!0;break}}for(let lt=O.particles.length-1;lt>=0;lt--){const vt=O.particles[lt];vt.mesh.position.add(vt.velocity.clone().multiplyScalar(Se)),vt.velocity.y-=9.8*Se,vt.life-=Se;const si=Math.max(0,vt.life/vt.maxLife);vt.mesh.scale.set(si,si,si),vt.life<=0&&(ye.remove(vt.mesh),O.particles.splice(lt,1))}if(O.bot1HP<=0&&O.bot2HP<=0&&!O.gameOver){O.gameOver=!0,Z("win"),Br.playKill();try{document.exitPointerLock()}catch{}}Math.floor(ne)%6===0&&(Ht({x:O.playerPos.x,z:O.playerPos.z,yaw:O.yaw}),Y([{id:"bot1",x:O.bot1Pos.x,z:O.bot1Pos.z,alive:O.bot1HP>0,color:"#ef4444"},{id:"bot2",x:O.bot2Pos.x,z:O.bot2Pos.z,alive:O.bot2HP>0,color:"#a855f7"}])),Gt.render(ye,yt)};Zr=requestAnimationFrame(Zo);const Ja=()=>{yt.aspect=window.innerWidth/window.innerHeight,yt.updateProjectionMatrix(),Gt.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Ja),()=>{cancelAnimationFrame(Zr),document.removeEventListener("keydown",Xi),document.removeEventListener("keyup",$i),document.removeEventListener("mousemove",Yr),document.removeEventListener("mousedown",qr),document.removeEventListener("mouseup",Yi),document.removeEventListener("pointerlockchange",Za),ve.removeEventListener("touchstart",qo),ve.removeEventListener("touchmove",Kr),ve.removeEventListener("touchend",eo),ve.removeEventListener("touchcancel",eo),window.removeEventListener("resize",Ja),ve.contains(Gt.domElement)&&ve.removeChild(Gt.domElement),Gt.dispose()}},[]);const j=Ve>0?Math.round(sn/Ve*100):0;return R.jsxs("div",{className:"relative w-full h-full select-none overflow-hidden touch-none",children:[R.jsx("div",{ref:f,className:"w-full h-full",style:{cursor:Mt&&!h?"pointer":"none"}}),J.map(ve=>R.jsx("div",{className:"absolute pointer-events-none font-black text-xl md:text-2xl drop-shadow-md animate-bounce z-30",style:{left:ve.x,top:ve.y,color:ve.color},children:ve.text},ve.id)),R.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 flex flex-col gap-1.5 pointer-events-none z-30 w-full max-w-sm px-4",children:U.map(ve=>R.jsx("div",{className:"bg-black/80 backdrop-blur-md border border-yellow-500/60 text-yellow-300 font-bold px-4 py-1.5 rounded-full text-xs md:text-sm text-center shadow-lg animate-pulse",children:ve.text},ve.id))}),!K&&R.jsxs("div",{className:"absolute top-16 left-4 pointer-events-none z-20",children:[R.jsxs("div",{className:"relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-slate-950/80 border-2 border-cyan-500/50 backdrop-blur-md overflow-hidden shadow-xl",children:[R.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[R.jsx("div",{className:"w-full h-[1px] bg-cyan-500/20"}),R.jsx("div",{className:"absolute h-full w-[1px] bg-cyan-500/20"}),R.jsx("div",{className:"w-12 h-12 rounded-full border border-cyan-500/20"})]}),R.jsx("div",{className:"absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 z-10",style:{transform:`translate(-50%, -50%) rotate(${wn.yaw}rad)`},children:R.jsx("div",{className:"w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[8px] border-b-emerald-400 drop-shadow"})}),on.map(ve=>{if(!ve.alive)return null;const xe=(ve.x+100)/200*100,ye=(ve.z+100)/200*100;return R.jsx("div",{className:"absolute w-2.5 h-2.5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping",style:{left:`${xe}%`,top:`${ye}%`,backgroundColor:ve.color}},ve.id)})]}),R.jsx("div",{className:"text-[10px] text-cyan-300 font-mono text-center mt-1",children:"РАДАР АРЕНЫ"})]}),Mt&&!K&&R.jsx("div",{onClick:()=>Xt(!1),className:"absolute inset-0 flex items-center justify-center bg-black/75 backdrop-blur-md z-40 cursor-pointer p-4",children:R.jsxs("div",{className:"bg-slate-900/90 border-2 border-cyan-400/50 rounded-3xl p-6 md:p-8 text-center max-w-sm w-full shadow-2xl",children:[R.jsx("h3",{className:"text-2xl md:text-3xl font-black text-white mb-2",children:"⚔️ ГОТОВ К БОЮ!"}),R.jsx("p",{className:"text-sm text-cyan-300 font-semibold mb-4",children:"Лиза vs Даша vs Айдар"}),R.jsxs("div",{className:"bg-black/40 rounded-xl p-3 text-left space-y-1 text-xs text-gray-300 mb-5",children:[R.jsxs("div",{children:["👤 Вы: ",R.jsxs("span",{className:"font-bold text-white",children:[b.emoji," ",b.name]})]}),R.jsxs("div",{children:["🔫 Оружие: ",R.jsxs("span",{className:"font-bold text-white",children:[y.emoji," ",y.name]})]}),R.jsxs("div",{children:["🎯 Сложность: ",R.jsx("span",{className:"font-bold text-white uppercase",children:c})]})]}),R.jsx("div",{className:"py-3 px-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl text-white font-extrabold text-base md:text-lg animate-pulse shadow-lg",children:h?"👆 НАЖМИ ДЛЯ СТАРТА":"🖱️ КЛИКНИ ДЛЯ СТАРТА"}),R.jsx("p",{className:"text-[11px] text-gray-400 mt-3",children:h?"Поддерживается сенсорный джойстик":"ESC для выхода из прицела"})]})}),!Mt&&!K&&R.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none z-10",children:R.jsxs("div",{className:"relative w-8 h-8",children:[R.jsxs("div",{className:"absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2",children:[R.jsx("div",{className:"absolute left-0 w-2.5 h-[2px] bg-white/90"}),R.jsx("div",{className:"absolute right-0 w-2.5 h-[2px] bg-white/90"})]}),R.jsxs("div",{className:"absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2",children:[R.jsx("div",{className:"absolute top-0 w-[2px] h-2.5 bg-white/90"}),R.jsx("div",{className:"absolute bottom-0 w-[2px] h-2.5 bg-white/90"})]}),R.jsx("div",{className:"absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"}),Te&&R.jsx("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:R.jsx("div",{className:"bg-amber-500/90 text-black text-xs font-black px-3 py-1 rounded-full animate-pulse shadow-lg",children:"⟳ ПЕРЕЗАРЯДКА..."})}),!Te&&I<=5&&I>0&&R.jsx("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:R.jsx("div",{className:"bg-red-500/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full",children:"⚠️ МАЛО ПАТРОНОВ"})}),!Te&&I===0&&R.jsx("div",{className:"absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap",children:R.jsx("div",{className:"bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full animate-bounce shadow-lg",children:"🔫 ПУСТО! ПЕРЕЗАРЯДИ"})})]})}),Ye&&R.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none z-20",children:R.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 30 30",children:[R.jsx("line",{x1:"7",y1:"7",x2:"13",y2:"13",stroke:"#f43f5e",strokeWidth:"3"}),R.jsx("line",{x1:"23",y1:"7",x2:"17",y2:"13",stroke:"#f43f5e",strokeWidth:"3"}),R.jsx("line",{x1:"7",y1:"23",x2:"13",y2:"17",stroke:"#f43f5e",strokeWidth:"3"}),R.jsx("line",{x1:"23",y1:"23",x2:"17",y2:"17",stroke:"#f43f5e",strokeWidth:"3"})]})}),ce&&R.jsx("div",{className:"absolute inset-0 pointer-events-none z-20",children:R.jsx("div",{className:"w-full h-full border-[10px] md:border-[16px] border-red-600/70"})}),R.jsx("div",{className:"absolute bottom-4 left-4 pointer-events-none z-20 max-w-[220px]",children:R.jsxs("div",{className:"bg-slate-950/80 backdrop-blur-md rounded-2xl p-3 border border-white/10 shadow-xl",children:[R.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[R.jsx("span",{className:"text-2xl",children:b.emoji}),R.jsxs("div",{children:[R.jsx("div",{className:"text-white font-extrabold text-sm",children:b.name}),R.jsx("div",{className:"text-[10px] text-emerald-400 font-bold uppercase",children:"ВЫ"})]})]}),R.jsx("div",{className:"w-full h-3 bg-slate-800 rounded-full overflow-hidden mb-1",children:R.jsx("div",{className:"h-full rounded-full transition-all duration-200",style:{width:`${Math.max(0,L/b.hp*100)}%`,background:L>50?"linear-gradient(90deg, #10b981, #34d399)":L>25?"linear-gradient(90deg, #f59e0b, #fbbf24)":"linear-gradient(90deg, #ef4444, #f87171)"}})}),R.jsxs("div",{className:"flex justify-between text-[11px] text-white font-mono font-bold mb-1.5",children:[R.jsxs("span",{children:["❤️ ",Math.max(0,L)," / ",b.hp]}),R.jsxs("span",{children:["+",cn," 💰"]})]}),R.jsx("div",{className:"w-full h-1.5 bg-slate-800 rounded-full overflow-hidden",children:R.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-blue-400 transition-all duration-100",style:{width:`${H}%`}})}),R.jsx("div",{className:"text-[9px] text-cyan-300 font-mono mt-0.5",children:"⚡ ВЫНОСЛИВОСТЬ"})]})}),R.jsxs("div",{className:"absolute top-4 right-4 pointer-events-none z-20 flex flex-col gap-1.5",children:[R.jsxs("div",{className:"bg-slate-950/80 backdrop-blur-md rounded-xl p-2 md:p-2.5 border border-white/10 shadow-lg min-w-[130px] md:min-w-[160px]",children:[R.jsxs("div",{className:"flex items-center justify-between text-xs mb-1",children:[R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{children:m(N).emoji}),R.jsx("span",{className:"text-white font-bold",children:F.name})]}),R.jsxs("span",{className:"text-[10px] text-red-400 font-mono font-bold",children:[Math.max(0,ie)," HP"]})]}),R.jsx("div",{className:"w-full h-2 bg-slate-800 rounded-full overflow-hidden",children:R.jsx("div",{className:"h-full bg-gradient-to-r from-red-600 to-rose-400 transition-all duration-200",style:{width:`${Math.max(0,ie/F.hp*100)}%`}})})]}),R.jsxs("div",{className:"bg-slate-950/80 backdrop-blur-md rounded-xl p-2 md:p-2.5 border border-white/10 shadow-lg min-w-[130px] md:min-w-[160px]",children:[R.jsxs("div",{className:"flex items-center justify-between text-xs mb-1",children:[R.jsxs("div",{className:"flex items-center gap-1.5",children:[R.jsx("span",{children:m(D).emoji}),R.jsx("span",{className:"text-white font-bold",children:E.name})]}),R.jsxs("span",{className:"text-[10px] text-purple-400 font-mono font-bold",children:[Math.max(0,se)," HP"]})]}),R.jsx("div",{className:"w-full h-2 bg-slate-800 rounded-full overflow-hidden",children:R.jsx("div",{className:"h-full bg-gradient-to-r from-purple-600 to-indigo-400 transition-all duration-200",style:{width:`${Math.max(0,se/E.hp*100)}%`}})})]})]}),!h&&R.jsx("div",{className:"absolute bottom-4 right-4 pointer-events-none z-20",children:R.jsxs("div",{className:"bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-right shadow-xl",children:[R.jsxs("div",{className:"text-white font-black text-base flex items-center justify-end gap-2",children:[R.jsx("span",{children:y.emoji}),R.jsx("span",{children:y.name})]}),R.jsx("div",{className:"text-3xl font-mono font-black mt-1",style:{color:I>8?"#34d399":I>0?"#f59e0b":"#ef4444"},children:Te?R.jsx("span",{className:"text-yellow-400 animate-pulse text-lg",children:"⟳ Зарядка..."}):R.jsxs(R.Fragment,{children:[I," ",R.jsxs("span",{className:"text-gray-500 text-lg",children:["/ ",P]})]})}),R.jsx("div",{className:"text-[11px] text-gray-400 mt-0.5",children:"Клавиша R — перезарядка"})]})}),R.jsx("button",{onClick:()=>{try{document.exitPointerLock()}catch{}t()},className:"absolute top-4 left-4 px-3.5 py-1.5 bg-slate-950/80 backdrop-blur-md text-white rounded-xl active:scale-95 hover:bg-rose-700 transition z-30 border border-white/15 text-xs md:text-sm font-semibold",children:"← Меню"}),d&&R.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none z-20",children:R.jsx("div",{className:"bg-blue-950/90 backdrop-blur-md rounded-full px-4 py-1 border border-cyan-400/50 shadow-lg",children:R.jsxs("p",{className:"text-cyan-300 text-xs font-bold",children:["🌐 Сетевая игра • Онлайн: ",$t.size+1]})})}),h&&!Mt&&!K&&R.jsxs(R.Fragment,{children:[Ne&&R.jsx("div",{className:"absolute pointer-events-none z-30 w-16 h-16 rounded-full border-2 border-cyan-400/60 bg-cyan-500/20 -translate-x-1/2 -translate-y-1/2",style:{left:Ne.x,top:Ne.y},children:R.jsx("div",{className:"absolute inset-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"})}),R.jsxs("div",{className:"absolute bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-auto",children:[R.jsxs("div",{className:"bg-black/75 backdrop-blur-md px-3 py-1 rounded-xl border border-white/15 text-right font-mono font-black text-sm",children:[R.jsx("span",{className:"text-white mr-1.5",children:y.emoji}),R.jsx("span",{style:{color:I>5?"#34d399":I>0?"#f59e0b":"#ef4444"},children:Te?"⟳...":`${I}/${P}`})]}),R.jsxs("div",{className:"flex items-center gap-3",children:[R.jsx("button",{onTouchStart:ve=>{ve.stopPropagation(),Ie.current=!0,X(!0)},onTouchEnd:ve=>{ve.stopPropagation(),Ie.current=!1,X(!1)},className:`w-14 h-14 rounded-full border-2 flex items-center justify-center font-black text-xl shadow-xl active:scale-90 transition ${te?"bg-cyan-500 border-cyan-300 text-black":"bg-slate-900/80 border-cyan-500/60 text-cyan-300"}`,children:"⚡"}),R.jsx("button",{onTouchStart:ve=>{ve.stopPropagation(),Ue.current()},className:"w-14 h-14 rounded-full bg-slate-900/80 border-2 border-yellow-500/60 text-yellow-300 flex items-center justify-center font-black text-2xl shadow-xl active:scale-90 transition",children:"⟳"}),R.jsx("button",{onTouchStart:ve=>{ve.stopPropagation(),_e.current=!0,tt.current()},onTouchEnd:ve=>{ve.stopPropagation(),_e.current=!1},className:"w-20 h-20 rounded-full bg-gradient-to-br from-rose-600 to-red-700 border-3 border-rose-300 text-white flex items-center justify-center font-black text-3xl shadow-2xl active:scale-90 transition",children:"🔴"})]})]})]}),K&&R.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/85 backdrop-blur-lg z-50 p-4",children:R.jsxs("div",{className:"bg-slate-900/90 border-2 border-white/20 rounded-3xl p-6 md:p-8 text-center max-w-md w-full shadow-2xl",children:[K==="win"?R.jsxs(R.Fragment,{children:[R.jsx("div",{className:"text-7xl mb-2 animate-bounce",children:"🏆"}),R.jsx("h2",{className:"text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-1",children:"ПОБЕДА!"}),R.jsx("p",{className:"text-gray-300 text-sm mb-4",children:"Вы очистили всю арену!"})]}):R.jsxs(R.Fragment,{children:[R.jsx("div",{className:"text-7xl mb-2 animate-pulse",children:"💀"}),R.jsx("h2",{className:"text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-600 mb-1",children:"ПОРАЖЕНИЕ"}),R.jsx("p",{className:"text-gray-300 text-sm mb-4",children:"Вас уничтожили в бою!"})]}),R.jsxs("div",{className:"bg-black/50 rounded-2xl p-4 border border-white/10 space-y-2 mb-6 text-sm text-left",children:[R.jsxs("div",{className:"flex justify-between text-gray-300",children:[R.jsx("span",{children:"Уничтожено ботов:"}),R.jsxs("span",{className:"font-bold text-white",children:["🎯 ",Ae]})]}),R.jsxs("div",{className:"flex justify-between text-gray-300",children:[R.jsx("span",{children:"Меткость стрельбы:"}),R.jsxs("span",{className:"font-bold text-cyan-300",children:[j,"%"]})]}),R.jsxs("div",{className:"flex justify-between text-gray-300",children:[R.jsx("span",{children:"Время выживания:"}),R.jsxs("span",{className:"font-bold text-purple-300",children:[kt," сек."]})]}),R.jsxs("div",{className:"flex justify-between text-gray-300 pt-1 border-t border-white/10",children:[R.jsx("span",{children:"Заработано монет:"}),R.jsxs("span",{className:"font-extrabold text-yellow-400",children:["+",cn," 💰"]})]})]}),R.jsx("button",{onClick:t,className:"w-full py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl text-lg font-black active:scale-95 hover:scale-105 transition shadow-xl border border-cyan-400/50",children:"🏠 Вернуться в меню"})]})})]})}function Z0(){const s=Math.random()*100;let e;return s<6?e=Oo.filter(t=>t.rarity==="legendary"):s<22?e=Oo.filter(t=>t.rarity==="epic"):s<52?e=Oo.filter(t=>t.rarity==="rare"):e=Oo.filter(t=>t.rarity==="common"),e[Math.floor(Math.random()*e.length)]}const Zd={common:"from-gray-600 to-gray-700 border-gray-400",rare:"from-blue-600 to-blue-700 border-blue-400",epic:"from-purple-600 to-purple-700 border-purple-400",legendary:"from-yellow-500 to-orange-600 border-yellow-400"},zb={common:"Обычный",rare:"Редкий",epic:"Эпический",legendary:"Легендарный"},Hb={common:"",rare:"shadow-blue-500/50",epic:"shadow-purple-500/50",legendary:"shadow-yellow-500/50"};function Vb({coins:s,ownedSkins:e,equippedSkin:t,spendCoins:i,addSkin:o,setEquippedSkin:l,onBack:c}){const[d,f]=dt.useState(!1),[h,g]=dt.useState(null),[v,m]=dt.useState(!1),[S,b]=dt.useState([]),P=()=>{if(s<Uo||!i(Uo))return;m(!0),f(!0),g(null);const y=[];for(let A=0;A<20;A++)y.push(Z0());const _=Z0();y[15]=_,b(y),setTimeout(()=>{m(!1),g(_),o(_.id)},3e3)};return R.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-between bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-y-auto overflow-x-hidden p-4",children:[R.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[R.jsx("div",{className:"absolute w-72 md:w-96 h-72 md:h-96 bg-purple-500/15 rounded-full blur-3xl -top-32 -right-32 animate-pulse"}),R.jsx("div",{className:"absolute w-72 md:w-96 h-72 md:h-96 bg-amber-500/15 rounded-full blur-3xl -bottom-32 -left-32 animate-pulse",style:{animationDelay:"1s"}})]}),R.jsxs("div",{className:"relative z-10 flex flex-col items-center max-w-4xl w-full my-auto",children:[R.jsxs("div",{className:"flex items-center justify-between w-full mb-3 md:mb-5",children:[R.jsx("button",{onClick:c,className:"px-3 py-1.5 md:px-5 md:py-2 bg-slate-800/80 backdrop-blur-md text-white rounded-xl active:scale-95 hover:bg-slate-700 transition border border-slate-600/50 text-xs md:text-sm font-semibold",children:"← В меню"}),R.jsx("div",{className:"bg-yellow-600/30 border border-yellow-500/50 rounded-xl px-4 py-1.5 backdrop-blur-md",children:R.jsxs("span",{className:"text-yellow-400 font-extrabold text-sm md:text-base",children:["💰 ",s," монет"]})})]}),R.jsx("h2",{className:"text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-300 to-amber-500 mb-1 text-center",children:"КЕЙСЫ СО СКИНАМИ"}),R.jsx("p",{className:"text-xs md:text-sm text-gray-400 mb-4 text-center",children:"Выбей легендарный скин на оружие"}),d&&R.jsxs("div",{className:"mb-6 w-full max-w-xl",children:[R.jsxs("div",{className:"relative overflow-hidden h-24 md:h-28 bg-black/60 rounded-2xl border-2 border-yellow-500/50 backdrop-blur-md",children:[R.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-yellow-400 z-10 shadow-lg shadow-yellow-400/80"}),R.jsx("div",{className:`flex gap-2 absolute top-1/2 -translate-y-1/2 transition-all ${v?"duration-[3000ms]":"duration-0"} ease-out`,style:{left:v?"-2200px":"0px"},children:S.map((y,_)=>R.jsxs("div",{className:`w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center rounded-xl border-2 bg-gradient-to-br ${Zd[y.rarity]} shadow-lg flex-shrink-0`,children:[R.jsx("span",{className:"text-2xl md:text-3xl",children:y.emoji}),R.jsx("span",{className:"text-[10px] md:text-xs text-white font-bold mt-0.5 text-center px-1 truncate w-full",children:y.name})]},_))})]}),h&&!v&&R.jsx("div",{className:"mt-4 text-center animate-bounce",children:R.jsxs("div",{className:`inline-block p-4 md:p-6 rounded-2xl border-4 bg-gradient-to-br ${Zd[h.rarity]} shadow-2xl ${Hb[h.rarity]}`,children:[R.jsx("div",{className:"text-5xl md:text-6xl mb-2",children:h.emoji}),R.jsx("div",{className:"text-xl md:text-2xl font-bold text-white",children:h.name}),R.jsx("div",{className:"text-xs text-white/80 mt-0.5",children:zb[h.rarity]})]})})]}),!d&&R.jsx("button",{onClick:P,disabled:s<Uo,className:`group relative px-6 md:px-10 py-3 md:py-5 rounded-2xl text-base md:text-xl font-bold transition-all overflow-hidden ${s>=Uo?"bg-gradient-to-r from-yellow-500 to-amber-600 text-white active:scale-95 sm:hover:scale-105 shadow-xl shadow-yellow-500/40 border-2 border-yellow-300/60":"bg-slate-800 text-gray-500 cursor-not-allowed border-2 border-slate-700"}`,children:R.jsxs("span",{className:"relative z-10 flex items-center gap-2",children:[R.jsx("span",{children:"📦"}),R.jsxs("span",{children:["Открыть кейс (",Uo," 💰)"]})]})}),d&&!v&&h&&R.jsx("button",{onClick:()=>{f(!1),g(null)},className:"mt-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl active:scale-95 sm:hover:scale-105 transition-all border border-blue-400/50 text-sm font-semibold",children:"Забрать скин"}),R.jsxs("div",{className:"mt-6 w-full",children:[R.jsxs("h3",{className:"text-sm md:text-lg text-white mb-2.5 font-bold flex items-center justify-between",children:[R.jsx("span",{children:"🎨 Коллекция скинов:"}),R.jsx("span",{className:"text-xs text-gray-400",children:"Нажми чтобы надеть/снять"})]}),e.length===0?R.jsxs("p",{className:"text-gray-400 text-center text-xs md:text-sm py-4 bg-black/20 rounded-xl",children:["У вас пока нет скинов. Откройте кейс за ",Uo," монет!"]}):R.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2",children:e.map((y,_)=>{const A=Oo.find(C=>C.id===y);if(!A)return null;const z=t===y;return R.jsxs("button",{onClick:()=>l(z?null:y),className:`flex flex-col items-center p-2 rounded-xl border-2 bg-gradient-to-br ${Zd[A.rarity]} ${z?"ring-2 md:ring-4 ring-white scale-105 shadow-xl":"active:scale-95 hover:scale-105"} transition-all shadow-md`,children:[R.jsx("span",{className:"text-2xl md:text-3xl",children:A.emoji}),R.jsx("span",{className:"text-[10px] text-white font-bold mt-0.5 truncate w-full text-center",children:A.name}),z&&R.jsx("span",{className:"text-[9px] text-emerald-300 font-bold mt-0.5",children:"✓ Надет"})]},_)})})]})]})]})}class Gb{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return Wb(e).buffer}}function Wb(s){let e=0;for(const o of s)e+=o.byteLength;const t=new Uint8Array(e);let i=0;for(const o of s){const l=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);t.set(l,i),i+=o.byteLength}return t}function jg(s){return new jb(s).unpack()}function Xg(s){const e=new Xb,t=e.pack(s);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class jb{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,o="",l,c;for(;i<e;)l=t[i],l<160?(c=l,i++):(l^192)<32?(c=(l&31)<<6|t[i+1]&63,i+=2):(l^224)<16?(c=(l&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(c=(l&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),o+=String.fromCodePoint(c);return this.index+=e,o}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const o=this.unpack();t[o]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,o=e&8388607|8388608;return(t===0?1:-1)*o*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,o=(e>>20&2047)-1023,c=(e&1048575|1048576)*2**(o-20)+t*2**(o-52);return(i===0?1:-1)*c}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Xb{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=o=>{if(o<t){const l=this.pack(e[o]);return l instanceof Promise?l.then(()=>i(o+1)):i(o+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),o=e/2**i-1,l=Math.floor(o*2**52),c=2**32,d=t<<31|i+1023<<20|l/c&1048575,f=l%c;this._bufferBuilder.append(203),this.pack_int32(d),this.pack_int32(f)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const o=l=>{if(l<t.length){const c=t[l];if(e.hasOwnProperty(c)){this.pack(c);const d=this.pack(e[c]);if(d instanceof Promise)return d.then(()=>o(l+1))}return o(l+1)}};return o(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new Gb,this._textEncoder=new TextEncoder}}let $g=!0,Yg=!0;function ka(s,e,t){const i=s.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function Ks(s,e,t){if(!s.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Eh("Unable to polyfill events");return}const o=s.RTCPeerConnection.prototype,l=o.addEventListener;o.addEventListener=function(d,f){if(d!==e)return l.apply(this,arguments);const h=g=>{const v=t(g);v&&(f.handleEvent?f.handleEvent(v):f(v))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(f,h),l.apply(this,[d,h])};const c=o.removeEventListener;o.removeEventListener=function(d,f){if(d!==e||!this._eventMap||!this._eventMap[e])return c.apply(this,arguments);if(!this._eventMap[e].has(f))return c.apply(this,arguments);const h=this._eventMap[e].get(f);return this._eventMap[e].delete(f),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,c.apply(this,[d,h])},Object.defineProperty(o,"on"+e,{get(){return this["_on"+e]},set(d){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),d&&this.addEventListener(e,this["_on"+e]=d)},enumerable:!0,configurable:!0})}function $b(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):($g=s,s?"adapter.js logging disabled":"adapter.js logging enabled")}function Yb(s){return typeof s!="boolean"?new Error("Argument type: "+typeof s+". Please use a boolean."):(Yg=!s,"adapter.js deprecation warnings "+(s?"disabled":"enabled"))}function Eh(){if(typeof window=="object"){if($g)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function bh(s,e){Yg&&console.warn(s+" is deprecated, please use "+e+" instead.")}function qb(s){const e={browser:null,version:null};if(typeof s>"u"||!s.navigator||!s.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=s;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(o=>o.brand==="Chromium");if(i){const o=parseInt(i.version,10);if(o>=90)return{browser:"chrome",version:o}}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(ka(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||s.isSecureContext===!1&&s.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(ka(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(s.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(ka(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=s.RTCRtpTransceiver&&"currentDirection"in s.RTCRtpTransceiver.prototype,e._safariVersion=ka(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function J0(s){return Object.prototype.toString.call(s)==="[object Object]"}function qg(s){return J0(s)?Object.keys(s).reduce(function(e,t){const i=J0(s[t]),o=i?qg(s[t]):s[t],l=i&&!Object.keys(o).length;return o===void 0||l?e:Object.assign(e,{[t]:o})},{}):s}function Wf(s,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?Wf(s,s.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(o=>{Wf(s,s.get(o),t)})}))}function Q0(s,e,t){const i=t?"outbound-rtp":"inbound-rtp",o=new Map;if(e===null)return o;const l=[];return s.forEach(c=>{c.type==="track"&&c.trackIdentifier===e.id&&l.push(c)}),l.forEach(c=>{s.forEach(d=>{d.type===i&&d.trackId===c.id&&Wf(s,d,o)})}),o}const eg=Eh;function Kg(s,e){if(e.version>=64)return;const t=s&&s.navigator;if(!t.mediaDevices)return;const i=function(d){if(typeof d!="object"||d.mandatory||d.optional)return d;const f={};return Object.keys(d).forEach(h=>{if(h==="require"||h==="advanced"||h==="mediaSource")return;const g=typeof d[h]=="object"?d[h]:{ideal:d[h]};g.exact!==void 0&&typeof g.exact=="number"&&(g.min=g.max=g.exact);const v=function(m,S){return m?m+S.charAt(0).toUpperCase()+S.slice(1):S==="deviceId"?"sourceId":S};if(g.ideal!==void 0){f.optional=f.optional||[];let m={};typeof g.ideal=="number"?(m[v("min",h)]=g.ideal,f.optional.push(m),m={},m[v("max",h)]=g.ideal,f.optional.push(m)):(m[v("",h)]=g.ideal,f.optional.push(m))}g.exact!==void 0&&typeof g.exact!="number"?(f.mandatory=f.mandatory||{},f.mandatory[v("",h)]=g.exact):["min","max"].forEach(m=>{g[m]!==void 0&&(f.mandatory=f.mandatory||{},f.mandatory[v(m,h)]=g[m])})}),d.advanced&&(f.optional=(f.optional||[]).concat(d.advanced)),f},o=function(d,f){if(e.version>=61)return f(d);if(d=JSON.parse(JSON.stringify(d)),d&&typeof d.audio=="object"){const h=function(g,v,m){v in g&&!(m in g)&&(g[m]=g[v],delete g[v])};d=JSON.parse(JSON.stringify(d)),h(d.audio,"autoGainControl","googAutoGainControl"),h(d.audio,"noiseSuppression","googNoiseSuppression"),d.audio=i(d.audio)}if(d&&typeof d.video=="object"){let h=d.video.facingMode;h=h&&(typeof h=="object"?h:{ideal:h});const g=e.version<66;if(h&&(h.exact==="user"||h.exact==="environment"||h.ideal==="user"||h.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!g)){delete d.video.facingMode;let v;if(h.exact==="environment"||h.ideal==="environment"?v=["back","rear"]:(h.exact==="user"||h.ideal==="user")&&(v=["front"]),v)return t.mediaDevices.enumerateDevices().then(m=>{m=m.filter(b=>b.kind==="videoinput");let S=m.find(b=>v.some(P=>b.label.toLowerCase().includes(P)));return!S&&m.length&&v.includes("back")&&(S=m[m.length-1]),S&&(d.video.deviceId=h.exact?{exact:S.deviceId}:{ideal:S.deviceId}),d.video=i(d.video),eg("chrome: "+JSON.stringify(d)),f(d)})}d.video=i(d.video)}return eg("chrome: "+JSON.stringify(d)),f(d)},l=function(d){return e.version>=64?d:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[d.name]||d.name,message:d.message,constraint:d.constraint||d.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},c=function(d,f,h){o(d,g=>{t.webkitGetUserMedia(g,f,v=>{h&&h(l(v))})})};if(t.getUserMedia=c.bind(t),t.mediaDevices.getUserMedia){const d=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(f){return o(f,h=>d(h).then(g=>{if(h.audio&&!g.getAudioTracks().length||h.video&&!g.getVideoTracks().length)throw g.getTracks().forEach(v=>{v.stop()}),new DOMException("","NotFoundError");return g},g=>Promise.reject(l(g))))}}}function Zg(s){s.MediaStream=s.MediaStream||s.webkitMediaStream}function Jg(s,e){if(!(e.version>102))if(typeof s=="object"&&s.RTCPeerConnection&&!("ontrack"in s.RTCPeerConnection.prototype)){Object.defineProperty(s.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(i){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=i)},enumerable:!0,configurable:!0});const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=o=>{o.stream.addEventListener("addtrack",l=>{let c;s.RTCPeerConnection.prototype.getReceivers?c=this.getReceivers().find(f=>f.track&&f.track.id===l.track.id):c={track:l.track};const d=new Event("track");d.track=l.track,d.receiver=c,d.transceiver={receiver:c},d.streams=[o.stream],this.dispatchEvent(d)}),o.stream.getTracks().forEach(l=>{let c;s.RTCPeerConnection.prototype.getReceivers?c=this.getReceivers().find(f=>f.track&&f.track.id===l.id):c={track:l};const d=new Event("track");d.track=l,d.receiver=c,d.transceiver={receiver:c},d.streams=[o.stream],this.dispatchEvent(d)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Ks(s,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Qg(s){if(typeof s=="object"&&s.RTCPeerConnection&&!("getSenders"in s.RTCPeerConnection.prototype)&&"createDTMFSender"in s.RTCPeerConnection.prototype){const e=function(o,l){return{track:l,get dtmf(){return this._dtmf===void 0&&(l.kind==="audio"?this._dtmf=o.createDTMFSender(l):this._dtmf=null),this._dtmf},_pc:o}};if(!s.RTCPeerConnection.prototype.getSenders){s.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const o=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(d,f){let h=o.apply(this,arguments);return h||(h=e(this,d),this._senders.push(h)),h};const l=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(d){l.apply(this,arguments);const f=this._senders.indexOf(d);f!==-1&&this._senders.splice(f,1)}}const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(l){this._senders=this._senders||[],t.apply(this,[l]),l.getTracks().forEach(c=>{this._senders.push(e(this,c))})};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(l){this._senders=this._senders||[],i.apply(this,[l]),l.getTracks().forEach(c=>{const d=this._senders.find(f=>f.track===c);d&&this._senders.splice(this._senders.indexOf(d),1)})}}else if(typeof s=="object"&&s.RTCPeerConnection&&"getSenders"in s.RTCPeerConnection.prototype&&"createDTMFSender"in s.RTCPeerConnection.prototype&&s.RTCRtpSender&&!("dtmf"in s.RTCRtpSender.prototype)){const e=s.RTCPeerConnection.prototype.getSenders;s.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(o=>o._pc=this),i},Object.defineProperty(s.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function ex(s,e){if(e.version>=67||!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender&&s.RTCRtpReceiver))return;if(!("getStats"in s.RTCRtpSender.prototype)){const i=s.RTCPeerConnection.prototype.getSenders;i&&(s.RTCPeerConnection.prototype.getSenders=function(){const c=i.apply(this,[]);return c.forEach(d=>d._pc=this),c});const o=s.RTCPeerConnection.prototype.addTrack;o&&(s.RTCPeerConnection.prototype.addTrack=function(){const c=o.apply(this,arguments);return c._pc=this,c}),s.RTCRtpSender.prototype.getStats=function(){const c=this;return this._pc.getStats().then(d=>Q0(d,c.track,!0))}}if(!("getStats"in s.RTCRtpReceiver.prototype)){const i=s.RTCPeerConnection.prototype.getReceivers;i&&(s.RTCPeerConnection.prototype.getReceivers=function(){const l=i.apply(this,[]);return l.forEach(c=>c._pc=this),l}),Ks(s,"track",o=>(o.receiver._pc=o.srcElement,o)),s.RTCRtpReceiver.prototype.getStats=function(){const l=this;return this._pc.getStats().then(c=>Q0(c,l.track,!1))}}if(!("getStats"in s.RTCRtpSender.prototype&&"getStats"in s.RTCRtpReceiver.prototype))return;const t=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof s.MediaStreamTrack){const o=arguments[0];let l,c,d;return this.getSenders().forEach(f=>{f.track===o&&(l?d=!0:l=f)}),this.getReceivers().forEach(f=>(f.track===o&&(c?d=!0:c=f),f.track===o)),d||l&&c?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):l?l.getStats():c?c.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function tx(s){s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(c=>this._shimmedLocalStreams[c][0])};const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addTrack=function(c,d){if(!d)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const f=e.apply(this,arguments);return this._shimmedLocalStreams[d.id]?this._shimmedLocalStreams[d.id].indexOf(f)===-1&&this._shimmedLocalStreams[d.id].push(f):this._shimmedLocalStreams[d.id]=[d,f],f};const t=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(c){this._shimmedLocalStreams=this._shimmedLocalStreams||{},c.getTracks().forEach(h=>{if(this.getSenders().find(v=>v.track===h))throw new DOMException("Track already exists.","InvalidAccessError")});const d=this.getSenders();t.apply(this,arguments);const f=this.getSenders().filter(h=>d.indexOf(h)===-1);this._shimmedLocalStreams[c.id]=[c].concat(f)};const i=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(c){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[c.id],i.apply(this,arguments)};const o=s.RTCPeerConnection.prototype.removeTrack;s.RTCPeerConnection.prototype.removeTrack=function(c){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},c&&Object.keys(this._shimmedLocalStreams).forEach(d=>{const f=this._shimmedLocalStreams[d].indexOf(c);f!==-1&&this._shimmedLocalStreams[d].splice(f,1),this._shimmedLocalStreams[d].length===1&&delete this._shimmedLocalStreams[d]}),o.apply(this,arguments)}}function nx(s,e){if(!s.RTCPeerConnection)return;if(s.RTCPeerConnection.prototype.addTrack&&e.version>=65)return tx(s);const t=s.RTCPeerConnection.prototype.getLocalStreams;s.RTCPeerConnection.prototype.getLocalStreams=function(){const g=t.apply(this);return this._reverseStreams=this._reverseStreams||{},g.map(v=>this._reverseStreams[v.id])};const i=s.RTCPeerConnection.prototype.addStream;s.RTCPeerConnection.prototype.addStream=function(g){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},g.getTracks().forEach(v=>{if(this.getSenders().find(S=>S.track===v))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[g.id]){const v=new s.MediaStream(g.getTracks());this._streams[g.id]=v,this._reverseStreams[v.id]=g,g=v}i.apply(this,[g])};const o=s.RTCPeerConnection.prototype.removeStream;s.RTCPeerConnection.prototype.removeStream=function(g){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},o.apply(this,[this._streams[g.id]||g]),delete this._reverseStreams[this._streams[g.id]?this._streams[g.id].id:g.id],delete this._streams[g.id]},s.RTCPeerConnection.prototype.addTrack=function(g,v){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const m=[].slice.call(arguments,1);if(m.length!==1||!m[0].getTracks().find(P=>P===g))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(P=>P.track===g))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const b=this._streams[v.id];if(b)b.addTrack(g),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const P=new s.MediaStream([g]);this._streams[v.id]=P,this._reverseStreams[P.id]=v,this.addStream(P)}return this.getSenders().find(P=>P.track===g)};function l(h,g){let v=g.sdp;return Object.keys(h._reverseStreams||[]).forEach(m=>{const S=h._reverseStreams[m],b=h._streams[S.id];v=v.replace(new RegExp(b.id,"g"),S.id)}),new RTCSessionDescription({type:g.type,sdp:v})}function c(h,g){let v=g.sdp;return Object.keys(h._reverseStreams||[]).forEach(m=>{const S=h._reverseStreams[m],b=h._streams[S.id];v=v.replace(new RegExp(S.id,"g"),b.id)}),new RTCSessionDescription({type:g.type,sdp:v})}["createOffer","createAnswer"].forEach(function(h){const g=s.RTCPeerConnection.prototype[h],v={[h](){const m=arguments;return arguments.length&&typeof arguments[0]=="function"?g.apply(this,[b=>{const P=l(this,b);m[0].apply(null,[P])},b=>{m[1]&&m[1].apply(null,b)},arguments[2]]):g.apply(this,arguments).then(b=>l(this,b))}};s.RTCPeerConnection.prototype[h]=v[h]});const d=s.RTCPeerConnection.prototype.setLocalDescription;s.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?d.apply(this,arguments):(arguments[0]=c(this,arguments[0]),d.apply(this,arguments))};const f=Object.getOwnPropertyDescriptor(s.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(s.RTCPeerConnection.prototype,"localDescription",{get(){const h=f.get.apply(this);return h.type===""?h:l(this,h)}}),s.RTCPeerConnection.prototype.removeTrack=function(g){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!g._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(g._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let m;Object.keys(this._streams).forEach(S=>{this._streams[S].getTracks().find(P=>g.track===P)&&(m=this._streams[S])}),m&&(m.getTracks().length===1?this.removeStream(this._reverseStreams[m.id]):m.removeTrack(g.track),this.dispatchEvent(new Event("negotiationneeded")))}}function jf(s,e){!s.RTCPeerConnection&&s.webkitRTCPeerConnection&&(s.RTCPeerConnection=s.webkitRTCPeerConnection),s.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=s.RTCPeerConnection.prototype[t],o={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=o[t]})}function ix(s,e){e.version>102||Ks(s,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const tg=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:ix,shimAddTrackRemoveTrack:nx,shimAddTrackRemoveTrackWithNative:tx,shimGetSendersWithDtmf:Qg,shimGetUserMedia:Kg,shimMediaStream:Zg,shimOnTrack:Jg,shimPeerConnection:jf,shimSenderReceiverGetStats:ex},Symbol.toStringTag,{value:"Module"}));function rx(s,e){const t=s&&s.navigator;if(!t.mediaDevices)return;const i=s&&s.MediaStreamTrack;if(t.getUserMedia=function(o,l,c){bh("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(o).then(l,c)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const o=function(c,d,f){d in c&&!(f in c)&&(c[f]=c[d],delete c[d])},l=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(c){return typeof c=="object"&&typeof c.audio=="object"&&(c=JSON.parse(JSON.stringify(c)),o(c.audio,"autoGainControl","mozAutoGainControl"),o(c.audio,"noiseSuppression","mozNoiseSuppression")),l(c)},i&&i.prototype.getSettings){const c=i.prototype.getSettings;i.prototype.getSettings=function(){const d=c.apply(this,arguments);return o(d,"mozAutoGainControl","autoGainControl"),o(d,"mozNoiseSuppression","noiseSuppression"),d}}if(i&&i.prototype.applyConstraints){const c=i.prototype.applyConstraints;i.prototype.applyConstraints=function(d){return this.kind==="audio"&&typeof d=="object"&&(d=JSON.parse(JSON.stringify(d)),o(d,"autoGainControl","mozAutoGainControl"),o(d,"noiseSuppression","mozNoiseSuppression")),c.apply(this,[d])}}}}function Kb(s,e){s.navigator.mediaDevices&&(s.navigator.mediaDevices&&"getDisplayMedia"in s.navigator.mediaDevices||(s.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const o=new DOMException("getDisplayMedia without video constraints is undefined");return o.name="NotFoundError",o.code=8,Promise.reject(o)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,s.navigator.mediaDevices.getUserMedia(i)}))}function sx(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Xf(s,e){typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||(!s.RTCPeerConnection&&s.mozRTCPeerConnection&&(s.RTCPeerConnection=s.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=s.RTCPeerConnection.prototype[t],o={[t](){return arguments[0]=new(t==="addIceCandidate"?s.RTCIceCandidate:s.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};s.RTCPeerConnection.prototype[t]=o[t]}))}function ox(s,e){if(typeof s!="object"||!(s.RTCPeerConnection||s.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=s.RTCPeerConnection.prototype.getStats;s.RTCPeerConnection.prototype.getStats=function(){const[l,c,d]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):i.apply(this,[l||null]).then(f=>{if(e.version<53&&!c)try{f.forEach(h=>{h.type=t[h.type]||h.type})}catch(h){if(h.name!=="TypeError")throw h;f.forEach((g,v)=>{f.set(v,Object.assign({},g,{type:t[g.type]||g.type}))})}return f}).then(c,d)}}function ax(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpSender.prototype)return;const e=s.RTCPeerConnection.prototype.getSenders;e&&(s.RTCPeerConnection.prototype.getSenders=function(){const o=e.apply(this,[]);return o.forEach(l=>l._pc=this),o});const t=s.RTCPeerConnection.prototype.addTrack;t&&(s.RTCPeerConnection.prototype.addTrack=function(){const o=t.apply(this,arguments);return o._pc=this,o}),s.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function lx(s){if(!(typeof s=="object"&&s.RTCPeerConnection&&s.RTCRtpSender)||s.RTCRtpSender&&"getStats"in s.RTCRtpReceiver.prototype)return;const e=s.RTCPeerConnection.prototype.getReceivers;e&&(s.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(o=>o._pc=this),i}),Ks(s,"track",t=>(t.receiver._pc=t.srcElement,t)),s.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function cx(s){!s.RTCPeerConnection||"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){bh("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function ux(s){s.DataChannel&&!s.RTCDataChannel&&(s.RTCDataChannel=s.DataChannel)}function dx(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.addTransceiver;t&&(s.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let o=arguments[1]&&arguments[1].sendEncodings;o===void 0&&(o=[]),o=[...o];const l=o.length>0;l&&o.forEach(d=>{if("rid"in d&&!/^[a-z0-9]{0,16}$/i.test(d.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in d&&!(parseFloat(d.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in d&&!(parseFloat(d.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const c=t.apply(this,arguments);if(l){const{sender:d}=c,f=d.getParameters();(!("encodings"in f)||f.encodings.length===1&&Object.keys(f.encodings[0]).length===0)&&(f.encodings=o,d.sendEncodings=o,this.setParametersPromises.push(d.setParameters(f).then(()=>{delete d.sendEncodings}).catch(()=>{delete d.sendEncodings})))}return c})}function fx(s,e){if(!(typeof s=="object"&&s.RTCRtpSender)||e.version>=110)return;const t=s.RTCRtpSender.prototype.getParameters;t&&(s.RTCRtpSender.prototype.getParameters=function(){const o=t.apply(this,arguments);return"encodings"in o||(o.encodings=[].concat(this.sendEncodings||[{}])),o})}function hx(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}function px(s,e){if(!(typeof s=="object"&&s.RTCPeerConnection)||e.version>=110)return;const t=s.RTCPeerConnection.prototype.createAnswer;s.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>t.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):t.apply(this,arguments)}}const ng=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:dx,shimCreateAnswer:px,shimCreateOffer:hx,shimGetDisplayMedia:Kb,shimGetParameters:fx,shimGetStats:ox,shimGetUserMedia:rx,shimOnTrack:sx,shimPeerConnection:Xf,shimRTCDataChannel:ux,shimReceiverGetStats:lx,shimRemoveStream:cx,shimSenderGetStats:ax},Symbol.toStringTag,{value:"Module"}));function mx(s){if(!(typeof s!="object"||!s.RTCPeerConnection)){if("getLocalStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in s.RTCPeerConnection.prototype)){const e=s.RTCPeerConnection.prototype.addTrack;s.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(o=>e.call(this,o,i)),i.getVideoTracks().forEach(o=>e.call(this,o,i))},s.RTCPeerConnection.prototype.addTrack=function(i,...o){return o&&o.forEach(l=>{this._localStreams?this._localStreams.includes(l)||this._localStreams.push(l):this._localStreams=[l]}),e.apply(this,arguments)}}"removeStream"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const o=t.getTracks();this.getSenders().forEach(l=>{o.includes(l.track)&&this.removeTrack(l)})})}}function gx(s){if(!(typeof s!="object"||!s.RTCPeerConnection)&&("getRemoteStreams"in s.RTCPeerConnection.prototype||(s.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in s.RTCPeerConnection.prototype))){Object.defineProperty(s.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(o=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(o))return;this._remoteStreams.push(o);const l=new Event("addstream");l.stream=o,this.dispatchEvent(l)})})}});const e=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(o){o.streams.forEach(l=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(l)>=0)return;i._remoteStreams.push(l);const c=new Event("addstream");c.stream=l,i.dispatchEvent(c)})}),e.apply(i,arguments)}}}function xx(s){if(typeof s!="object"||!s.RTCPeerConnection)return;const e=s.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,o=e.setLocalDescription,l=e.setRemoteDescription,c=e.addIceCandidate;e.createOffer=function(h,g){const v=arguments.length>=2?arguments[2]:arguments[0],m=t.apply(this,[v]);return g?(m.then(h,g),Promise.resolve()):m},e.createAnswer=function(h,g){const v=arguments.length>=2?arguments[2]:arguments[0],m=i.apply(this,[v]);return g?(m.then(h,g),Promise.resolve()):m};let d=function(f,h,g){const v=o.apply(this,[f]);return g?(v.then(h,g),Promise.resolve()):v};e.setLocalDescription=d,d=function(f,h,g){const v=l.apply(this,[f]);return g?(v.then(h,g),Promise.resolve()):v},e.setRemoteDescription=d,d=function(f,h,g){const v=c.apply(this,[f]);return g?(v.then(h,g),Promise.resolve()):v},e.addIceCandidate=d}function vx(s){const e=s&&s.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=o=>i(_x(o))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(i,o,l){e.mediaDevices.getUserMedia(i).then(o,l)}).bind(e))}function _x(s){return s&&s.video!==void 0?Object.assign({},s,{video:qg(s.video)}):s}function yx(s){if(!s.RTCPeerConnection)return;const e=s.RTCPeerConnection;s.RTCPeerConnection=function(i,o){if(i&&i.iceServers){const l=[];for(let c=0;c<i.iceServers.length;c++){let d=i.iceServers[c];d.urls===void 0&&d.url?(bh("RTCIceServer.url","RTCIceServer.urls"),d=JSON.parse(JSON.stringify(d)),d.urls=d.url,delete d.url,l.push(d)):l.push(i.iceServers[c])}i.iceServers=l}return new e(i,o)},s.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(s.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Sx(s){typeof s=="object"&&s.RTCTrackEvent&&"receiver"in s.RTCTrackEvent.prototype&&!("transceiver"in s.RTCTrackEvent.prototype)&&Object.defineProperty(s.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Mx(s){const e=s.RTCPeerConnection.prototype.createOffer;s.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const o=this.getTransceivers().find(c=>c.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&o?o.direction==="sendrecv"?o.setDirection?o.setDirection("sendonly"):o.direction="sendonly":o.direction==="recvonly"&&(o.setDirection?o.setDirection("inactive"):o.direction="inactive"):i.offerToReceiveAudio===!0&&!o&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const l=this.getTransceivers().find(c=>c.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&l?l.direction==="sendrecv"?l.setDirection?l.setDirection("sendonly"):l.direction="sendonly":l.direction==="recvonly"&&(l.setDirection?l.setDirection("inactive"):l.direction="inactive"):i.offerToReceiveVideo===!0&&!l&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function Ex(s){typeof s!="object"||s.AudioContext||(s.AudioContext=s.webkitAudioContext)}const ig=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Ex,shimCallbacksAPI:xx,shimConstraints:_x,shimCreateOfferLegacy:Mx,shimGetUserMedia:vx,shimLocalStreamsAPI:mx,shimRTCIceServerUrls:yx,shimRemoteStreamsAPI:gx,shimTrackEventTransceiver:Sx},Symbol.toStringTag,{value:"Module"}));var Jd={exports:{}},rg;function Zb(){return rg||(rg=1,(function(s){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(i=>i.trim())},e.splitSections=function(t){return t.split(`
m=`).map((o,l)=>(l>0?"m="+o:o).trim()+`\r
`)},e.getDescription=function(t){const i=e.splitSections(t);return i&&i[0]},e.getMediaSections=function(t){const i=e.splitSections(t);return i.shift(),i},e.matchPrefix=function(t,i){return e.splitLines(t).filter(o=>o.indexOf(i)===0)},e.parseCandidate=function(t){let i;t.indexOf("a=candidate:")===0?i=t.substring(12).split(" "):i=t.substring(10).split(" ");const o={foundation:i[0],component:{1:"rtp",2:"rtcp"}[i[1]]||i[1],protocol:i[2].toLowerCase(),priority:parseInt(i[3],10),ip:i[4],address:i[4],port:parseInt(i[5],10),type:i[7]};for(let l=8;l<i.length;l+=2)switch(i[l]){case"raddr":o.relatedAddress=i[l+1];break;case"rport":o.relatedPort=parseInt(i[l+1],10);break;case"tcptype":o.tcpType=i[l+1];break;case"ufrag":o.ufrag=i[l+1],o.usernameFragment=i[l+1];break;default:o[i[l]]===void 0&&(o[i[l]]=i[l+1]);break}return o},e.writeCandidate=function(t){const i=[];i.push(t.foundation);const o=t.component;o==="rtp"?i.push(1):o==="rtcp"?i.push(2):i.push(o),i.push(t.protocol.toUpperCase()),i.push(t.priority),i.push(t.address||t.ip),i.push(t.port);const l=t.type;return i.push("typ"),i.push(l),l!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(i.push("raddr"),i.push(t.relatedAddress),i.push("rport"),i.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(i.push("tcptype"),i.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(i.push("ufrag"),i.push(t.usernameFragment||t.ufrag)),"candidate:"+i.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let i=t.substring(9).split(" ");const o={payloadType:parseInt(i.shift(),10)};return i=i[0].split("/"),o.name=i[0],o.clockRate=parseInt(i[1],10),o.channels=i.length===3?parseInt(i[2],10):1,o.numChannels=o.channels,o},e.writeRtpMap=function(t){let i=t.payloadType;t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType);const o=t.channels||t.numChannels||1;return"a=rtpmap:"+i+" "+t.name+"/"+t.clockRate+(o!==1?"/"+o:"")+`\r
`},e.parseExtmap=function(t){const i=t.substring(9).split(" ");return{id:parseInt(i[0],10),direction:i[0].indexOf("/")>0?i[0].split("/")[1]:"sendrecv",uri:i[1],attributes:i.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const i={};let o;const l=t.substring(t.indexOf(" ")+1).split(";");for(let c=0;c<l.length;c++)o=l[c].trim().split("="),i[o[0].trim()]=o[1];return i},e.writeFmtp=function(t){let i="",o=t.payloadType;if(t.preferredPayloadType!==void 0&&(o=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const l=[];Object.keys(t.parameters).forEach(c=>{t.parameters[c]!==void 0?l.push(c+"="+t.parameters[c]):l.push(c)}),i+="a=fmtp:"+o+" "+l.join(";")+`\r
`}return i},e.parseRtcpFb=function(t){const i=t.substring(t.indexOf(" ")+1).split(" ");return{type:i.shift(),parameter:i.join(" ")}},e.writeRtcpFb=function(t){let i="",o=t.payloadType;return t.preferredPayloadType!==void 0&&(o=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(l=>{i+="a=rtcp-fb:"+o+" "+l.type+(l.parameter&&l.parameter.length?" "+l.parameter:"")+`\r
`}),i},e.parseSsrcMedia=function(t){const i=t.indexOf(" "),o={ssrc:parseInt(t.substring(7,i),10)},l=t.indexOf(":",i);return l>-1?(o.attribute=t.substring(i+1,l),o.value=t.substring(l+1)):o.attribute=t.substring(i+1),o},e.parseSsrcGroup=function(t){const i=t.substring(13).split(" ");return{semantics:i.shift(),ssrcs:i.map(o=>parseInt(o,10))}},e.getMid=function(t){const i=e.matchPrefix(t,"a=mid:")[0];if(i)return i.substring(6)},e.parseFingerprint=function(t){const i=t.substring(14).split(" ");return{algorithm:i[0].toLowerCase(),value:i[1].toUpperCase()}},e.getDtlsParameters=function(t,i){return{role:"auto",fingerprints:e.matchPrefix(t+i,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,i){let o="a=setup:"+i+`\r
`;return t.fingerprints.forEach(l=>{o+="a=fingerprint:"+l.algorithm+" "+l.value+`\r
`}),o},e.parseCryptoLine=function(t){const i=t.substring(9).split(" ");return{tag:parseInt(i[0],10),cryptoSuite:i[1],keyParams:i[2],sessionParams:i.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const i=t.substring(7).split("|");return{keyMethod:"inline",keySalt:i[0],lifeTime:i[1],mkiValue:i[2]?i[2].split(":")[0]:void 0,mkiLength:i[2]?i[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,i){return e.matchPrefix(t+i,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,i){const o=e.matchPrefix(t+i,"a=ice-ufrag:")[0],l=e.matchPrefix(t+i,"a=ice-pwd:")[0];return o&&l?{usernameFragment:o.substring(12),password:l.substring(10)}:null},e.writeIceParameters=function(t){let i="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(i+=`a=ice-lite\r
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},l=e.splitLines(t)[0].split(" ");i.profile=l[2];for(let d=3;d<l.length;d++){const f=l[d],h=e.matchPrefix(t,"a=rtpmap:"+f+" ")[0];if(h){const g=e.parseRtpMap(h),v=e.matchPrefix(t,"a=fmtp:"+f+" ");switch(g.parameters=v.length?e.parseFmtp(v[0]):{},g.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+f+" ").map(e.parseRtcpFb),i.codecs.push(g),g.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(g.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(d=>{i.headerExtensions.push(e.parseExtmap(d))});const c=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(d=>{c.forEach(f=>{d.rtcpFeedback.find(g=>g.type===f.type&&g.parameter===f.parameter)||d.rtcpFeedback.push(f)})}),i},e.writeRtpDescription=function(t,i){let o="";o+="m="+t+" ",o+=i.codecs.length>0?"9":"0",o+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",o+=i.codecs.map(c=>c.preferredPayloadType!==void 0?c.preferredPayloadType:c.payloadType).join(" ")+`\r
`,o+=`c=IN IP4 0.0.0.0\r
`,o+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(c=>{o+=e.writeRtpMap(c),o+=e.writeFmtp(c),o+=e.writeRtcpFb(c)});let l=0;return i.codecs.forEach(c=>{c.maxptime>l&&(l=c.maxptime)}),l>0&&(o+="a=maxptime:"+l+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(c=>{o+=e.writeExtmap(c)}),o},e.parseRtpEncodingParameters=function(t){const i=[],o=e.parseRtpParameters(t),l=o.fecMechanisms.indexOf("RED")!==-1,c=o.fecMechanisms.indexOf("ULPFEC")!==-1,d=e.matchPrefix(t,"a=ssrc:").map(m=>e.parseSsrcMedia(m)).filter(m=>m.attribute==="cname"),f=d.length>0&&d[0].ssrc;let h;const g=e.matchPrefix(t,"a=ssrc-group:FID").map(m=>m.substring(17).split(" ").map(b=>parseInt(b,10)));g.length>0&&g[0].length>1&&g[0][0]===f&&(h=g[0][1]),o.codecs.forEach(m=>{if(m.name.toUpperCase()==="RTX"&&m.parameters.apt){let S={ssrc:f,codecPayloadType:parseInt(m.parameters.apt,10)};f&&h&&(S.rtx={ssrc:h}),i.push(S),l&&(S=JSON.parse(JSON.stringify(S)),S.fec={ssrc:f,mechanism:c?"red+ulpfec":"red"},i.push(S))}}),i.length===0&&f&&i.push({ssrc:f});let v=e.matchPrefix(t,"b=");return v.length&&(v[0].indexOf("b=TIAS:")===0?v=parseInt(v[0].substring(7),10):v[0].indexOf("b=AS:")===0?v=parseInt(v[0].substring(5),10)*1e3*.95-2e3*8:v=void 0,i.forEach(m=>{m.maxBitrate=v})),i},e.parseRtcpParameters=function(t){const i={},o=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname")[0];o&&(i.cname=o.value,i.ssrc=o.ssrc);const l=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=l.length>0,i.compound=l.length===0;const c=e.matchPrefix(t,"a=rtcp-mux");return i.mux=c.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
`),t.mux&&(i+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(i+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),i},e.parseMsid=function(t){let i;const o=e.matchPrefix(t,"a=msid:");if(o.length===1)return i=o[0].substring(7).split(" "),{stream:i[0],track:i[1]};const l=e.matchPrefix(t,"a=ssrc:").map(c=>e.parseSsrcMedia(c)).filter(c=>c.attribute==="msid");if(l.length>0)return i=l[0].value.split(" "),{stream:i[0],track:i[1]}},e.parseSctpDescription=function(t){const i=e.parseMLine(t),o=e.matchPrefix(t,"a=max-message-size:");let l;o.length>0&&(l=parseInt(o[0].substring(19),10)),isNaN(l)&&(l=65536);const c=e.matchPrefix(t,"a=sctp-port:");if(c.length>0)return{port:parseInt(c[0].substring(12),10),protocol:i.fmt,maxMessageSize:l};const d=e.matchPrefix(t,"a=sctpmap:");if(d.length>0){const f=d[0].substring(10).split(" ");return{port:parseInt(f[0],10),protocol:f[1],maxMessageSize:l}}},e.writeSctpDescription=function(t,i){let o=[];return t.protocol!=="DTLS/SCTP"?o=["m="+t.kind+" 9 "+t.protocol+" "+i.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+i.port+`\r
`]:o=["m="+t.kind+" 9 "+t.protocol+" "+i.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+i.port+" "+i.protocol+` 65535\r
`],i.maxMessageSize!==void 0&&o.push("a=max-message-size:"+i.maxMessageSize+`\r
`),o.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,i,o){let l;const c=i!==void 0?i:2;return t?l=t:l=e.generateSessionId(),`v=0\r
o=`+(o||"thisisadapterortc")+" "+l+" "+c+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,i){const o=e.splitLines(t);for(let l=0;l<o.length;l++)switch(o[l]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return o[l].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const o=e.splitLines(t)[0].substring(2).split(" ");return{kind:o[0],port:parseInt(o[1],10),protocol:o[2],fmt:o.slice(3).join(" ")}},e.parseOLine=function(t){const o=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:o[0],sessionId:o[1],sessionVersion:parseInt(o[2],10),netType:o[3],addressType:o[4],address:o[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let o=0;o<i.length;o++)if(i[o].length<2||i[o].charAt(1)!=="=")return!1;return!0},s.exports=e})(Jd)),Jd.exports}var bx=Zb();const Ho=cg(bx),Jb=o_({__proto__:null,default:Ho},[bx]);function Sc(s){if(!s.RTCIceCandidate||s.RTCIceCandidate&&"foundation"in s.RTCIceCandidate.prototype)return;const e=s.RTCIceCandidate;s.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const o=new e(i),l=Ho.parseCandidate(i.candidate);for(const c in l)c in o||Object.defineProperty(o,c,{value:l[c]});return o.toJSON=function(){return{candidate:o.candidate,sdpMid:o.sdpMid,sdpMLineIndex:o.sdpMLineIndex,usernameFragment:o.usernameFragment}},o}return new e(i)},s.RTCIceCandidate.prototype=e.prototype,Ks(s,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new s.RTCIceCandidate(t.candidate),writable:"false"}),t))}function $f(s){!s.RTCIceCandidate||s.RTCIceCandidate&&"relayProtocol"in s.RTCIceCandidate.prototype||Ks(s,"icecandidate",e=>{if(e.candidate){const t=Ho.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Mc(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>102||e.browser==="firefox"&&e.version>=113)return;"sctp"in s.RTCPeerConnection.prototype||Object.defineProperty(s.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(d){if(!d||!d.sdp)return!1;const f=Ho.splitSections(d.sdp);return f.shift(),f.some(h=>{const g=Ho.parseMLine(h);return g&&g.kind==="application"&&g.protocol.indexOf("SCTP")!==-1})},i=function(d){const f=d.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(f===null||f.length<2)return-1;const h=parseInt(f[1],10);return h!==h?-1:h},o=function(d){let f=65536;return e.browser==="firefox"&&(e.version<57?d===-1?f=16384:f=2147483637:e.version<60?f=e.version===57?65535:65536:f=2147483637),f},l=function(d,f){let h=65536;e.browser==="firefox"&&e.version===57&&(h=65535);const g=Ho.matchPrefix(d.sdp,"a=max-message-size:");return g.length>0?h=parseInt(g[0].substring(19),10):e.browser==="firefox"&&f!==-1&&(h=2147483637),h},c=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:f}=this.getConfiguration();f==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const f=i(arguments[0]),h=o(f),g=l(arguments[0],f);let v;h===0&&g===0?v=Number.POSITIVE_INFINITY:h===0||g===0?v=Math.max(h,g):v=Math.min(h,g);const m={};Object.defineProperty(m,"maxMessageSize",{get(){return v}}),this._sctp=m}return c.apply(this,arguments)}}function Ec(s,e){if(!(s.RTCPeerConnection&&"createDataChannel"in s.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>=149||e.browser==="firefox"&&e.version>60)return;function t(o,l){const c=o.send;o.send=function(){const f=arguments[0],h=f.length||f.size||f.byteLength;if(o.readyState==="open"&&l.sctp&&h>l.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+l.sctp.maxMessageSize+" bytes)");return c.apply(o,arguments)}}const i=s.RTCPeerConnection.prototype.createDataChannel;s.RTCPeerConnection.prototype.createDataChannel=function(){const l=i.apply(this,arguments);return t(l,this),l},Ks(s,"datachannel",o=>(t(o.channel,o.target),o))}function Yf(s){if(!s.RTCPeerConnection||"connectionState"in s.RTCPeerConnection.prototype)return;const e=s.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=o=>{const l=o.target;if(l._lastConnectionState!==l.connectionState){l._lastConnectionState=l.connectionState;const c=new Event("connectionstatechange",o);l.dispatchEvent(c)}return o},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function qf(s,e){if(!s.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=s.RTCPeerConnection.prototype.setRemoteDescription;s.RTCPeerConnection.prototype.setRemoteDescription=function(o){if(o&&o.sdp&&o.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const l=o.sdp.split(`
`).filter(c=>c.trim()!=="a=extmap-allow-mixed").join(`
`);s.RTCSessionDescription&&o instanceof s.RTCSessionDescription?arguments[0]=new s.RTCSessionDescription({type:o.type,sdp:l}):o.sdp=l}return t.apply(this,arguments)}}function bc(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(s.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Tc(s,e){if(!(s.RTCPeerConnection&&s.RTCPeerConnection.prototype))return;const t=s.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(s.RTCPeerConnection.prototype.setLocalDescription=function(){let o=arguments[0]||{};if(typeof o!="object"||o.type&&o.sdp)return t.apply(this,arguments);if(o={type:o.type,sdp:o.sdp},!o.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":o.type="offer";break;default:o.type="answer";break}return o.sdp||o.type!=="offer"&&o.type!=="answer"?t.apply(this,[o]):(o.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(c=>t.apply(this,[c]))})}const Qb=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:qf,shimAddIceCandidateNullOrEmpty:bc,shimConnectionState:Yf,shimMaxMessageSize:Mc,shimParameterlessSetLocalDescription:Tc,shimRTCIceCandidate:Sc,shimRTCIceCandidateRelayProtocol:$f,shimSendThrowTypeError:Ec},Symbol.toStringTag,{value:"Module"}));function eT({window:s}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Eh,i=qb(s),o={browserDetails:i,commonShim:Qb,extractVersion:ka,disableLog:$b,disableWarnings:Yb,sdp:Jb};switch(i.browser){case"chrome":if(!tg||!jf||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),o;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),o;t("adapter.js shimming chrome."),o.browserShim=tg,bc(s,i),Tc(s),Kg(s,i),Zg(s),jf(s,i),Jg(s,i),nx(s,i),Qg(s),ex(s,i),ix(s,i),Sc(s),$f(s),Yf(s),Mc(s,i),Ec(s,i),qf(s,i);break;case"firefox":if(!ng||!Xf||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),o;t("adapter.js shimming firefox."),o.browserShim=ng,bc(s,i),Tc(s),rx(s,i),Xf(s,i),ox(s,i),sx(s),cx(s),ax(s),lx(s),ux(s),dx(s,i),fx(s,i),hx(s,i),px(s,i),Sc(s),Yf(s),Mc(s,i),Ec(s,i);break;case"safari":if(!ig||!e.shimSafari)return t("Safari shim is not included in this adapter release."),o;t("adapter.js shimming safari."),o.browserShim=ig,bc(s,i),Tc(s),yx(s),Mx(s),xx(s),mx(s),gx(s),Sx(s),vx(s),Ex(s),Sc(s),$f(s),Mc(s,i),Ec(s,i),qf(s,i);break;default:t("Unsupported browser!");break}return o}const sg=eT({window:typeof window>"u"?void 0:window});function Zs(s,e,t,i){Object.defineProperty(s,e,{get:t,set:i,enumerable:!0,configurable:!0})}class Tx{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,o=Math.ceil(i/this.chunkedMTU);let l=0,c=0;for(;c<i;){const d=Math.min(i,c+this.chunkedMTU),f=e.slice(c,d),h={__peerData:this._dataCount,n:l,data:f,total:o};t.push(h),c=d,l++}return this._dataCount++,t}}}function tT(s){let e=0;for(const o of s)e+=o.byteLength;const t=new Uint8Array(e);let i=0;for(const o of s)t.set(o,i),i+=o.byteLength;return t}const Qd=sg.default||sg,Da=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const s=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(s)?s==="chrome"?e>=this.minChromeVersion:s==="firefox"?e>=this.minFirefoxVersion:s==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return Qd.browserDetails.browser}getVersion(){return Qd.browserDetails.version||0}isUnifiedPlanSupported(){const s=this.getBrowser(),e=Qd.browserDetails.version||0;if(s==="chrome"&&e<this.minChromeVersion)return!1;if(s==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},nT=s=>!s||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(s),wx=()=>Math.random().toString(36).slice(2),og={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class iT extends Tx{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(o){o.target&&t(o.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=og,this.browser=Da.getBrowser(),this.browserVersion=Da.getVersion(),this.pack=Xg,this.unpack=jg,this.supports=(function(){const t={browser:Da.isBrowserSupported(),webRTC:Da.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(og),t.audioVideo=!0;let o;try{o=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!o.ordered;try{o.binaryType="blob",t.binaryBlob=!Da.isIOS}catch{}}catch{}finally{o&&o.close()}}catch{}finally{i&&i.close()}return t})(),this.validateId=nT,this.randomToken=wx}}const Ei=new iT,rT="PeerJS: ";class sT{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[rT,...t];for(const o in i)i[o]instanceof Error&&(i[o]="("+i[o].name+") "+i[o].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var rt=new sT,Th={},oT=Object.prototype.hasOwnProperty,fi="~";function Xa(){}Object.create&&(Xa.prototype=Object.create(null),new Xa().__proto__||(fi=!1));function aT(s,e,t){this.fn=s,this.context=e,this.once=t||!1}function Cx(s,e,t,i,o){if(typeof t!="function")throw new TypeError("The listener must be a function");var l=new aT(t,i||s,o),c=fi?fi+e:e;return s._events[c]?s._events[c].fn?s._events[c]=[s._events[c],l]:s._events[c].push(l):(s._events[c]=l,s._eventsCount++),s}function wc(s,e){--s._eventsCount===0?s._events=new Xa:delete s._events[e]}function ni(){this._events=new Xa,this._eventsCount=0}ni.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)oT.call(t,i)&&e.push(fi?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};ni.prototype.listeners=function(e){var t=fi?fi+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var o=0,l=i.length,c=new Array(l);o<l;o++)c[o]=i[o].fn;return c};ni.prototype.listenerCount=function(e){var t=fi?fi+e:e,i=this._events[t];return i?i.fn?1:i.length:0};ni.prototype.emit=function(e,t,i,o,l,c){var d=fi?fi+e:e;if(!this._events[d])return!1;var f=this._events[d],h=arguments.length,g,v;if(f.fn){switch(f.once&&this.removeListener(e,f.fn,void 0,!0),h){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,t),!0;case 3:return f.fn.call(f.context,t,i),!0;case 4:return f.fn.call(f.context,t,i,o),!0;case 5:return f.fn.call(f.context,t,i,o,l),!0;case 6:return f.fn.call(f.context,t,i,o,l,c),!0}for(v=1,g=new Array(h-1);v<h;v++)g[v-1]=arguments[v];f.fn.apply(f.context,g)}else{var m=f.length,S;for(v=0;v<m;v++)switch(f[v].once&&this.removeListener(e,f[v].fn,void 0,!0),h){case 1:f[v].fn.call(f[v].context);break;case 2:f[v].fn.call(f[v].context,t);break;case 3:f[v].fn.call(f[v].context,t,i);break;case 4:f[v].fn.call(f[v].context,t,i,o);break;default:if(!g)for(S=1,g=new Array(h-1);S<h;S++)g[S-1]=arguments[S];f[v].fn.apply(f[v].context,g)}}return!0};ni.prototype.on=function(e,t,i){return Cx(this,e,t,i,!1)};ni.prototype.once=function(e,t,i){return Cx(this,e,t,i,!0)};ni.prototype.removeListener=function(e,t,i,o){var l=fi?fi+e:e;if(!this._events[l])return this;if(!t)return wc(this,l),this;var c=this._events[l];if(c.fn)c.fn===t&&(!o||c.once)&&(!i||c.context===i)&&wc(this,l);else{for(var d=0,f=[],h=c.length;d<h;d++)(c[d].fn!==t||o&&!c[d].once||i&&c[d].context!==i)&&f.push(c[d]);f.length?this._events[l]=f.length===1?f[0]:f:wc(this,l)}return this};ni.prototype.removeAllListeners=function(e){var t;return e?(t=fi?fi+e:e,this._events[t]&&wc(this,t)):(this._events=new Xa,this._eventsCount=0),this};ni.prototype.off=ni.prototype.removeListener;ni.prototype.addListener=ni.prototype.on;ni.prefixed=fi;ni.EventEmitter=ni;Th=ni;var Js={};Zs(Js,"ConnectionType",()=>ys);Zs(Js,"PeerErrorType",()=>Dn);Zs(Js,"BaseConnectionErrorType",()=>Kf);Zs(Js,"DataConnectionErrorType",()=>wh);Zs(Js,"SerializationType",()=>Hc);Zs(Js,"SocketEventType",()=>_s);Zs(Js,"ServerMessageType",()=>ei);var ys=(function(s){return s.Data="data",s.Media="media",s})({}),Dn=(function(s){return s.BrowserIncompatible="browser-incompatible",s.Disconnected="disconnected",s.InvalidID="invalid-id",s.InvalidKey="invalid-key",s.Network="network",s.PeerUnavailable="peer-unavailable",s.SslUnavailable="ssl-unavailable",s.ServerError="server-error",s.SocketError="socket-error",s.SocketClosed="socket-closed",s.UnavailableID="unavailable-id",s.WebRTC="webrtc",s})({}),Kf=(function(s){return s.NegotiationFailed="negotiation-failed",s.ConnectionClosed="connection-closed",s})({}),wh=(function(s){return s.NotOpenYet="not-open-yet",s.MessageToBig="message-too-big",s})({}),Hc=(function(s){return s.Binary="binary",s.BinaryUTF8="binary-utf8",s.JSON="json",s.None="raw",s})({}),_s=(function(s){return s.Message="message",s.Disconnected="disconnected",s.Error="error",s.Close="close",s})({}),ei=(function(s){return s.Heartbeat="HEARTBEAT",s.Candidate="CANDIDATE",s.Offer="OFFER",s.Answer="ANSWER",s.Open="OPEN",s.Error="ERROR",s.IdTaken="ID-TAKEN",s.InvalidKey="INVALID-KEY",s.Leave="LEAVE",s.Expire="EXPIRE",s})({});const Rx="1.5.5";class lT extends Th.EventEmitter{constructor(e,t,i,o,l,c=5e3){super(),this.pingInterval=c,this._disconnected=!0,this._messagesQueue=[];const d=e?"wss://":"ws://";this._baseUrl=d+t+":"+i+o+"peerjs?key="+l}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+Rx),this._disconnected=!1,this._socket.onmessage=o=>{let l;try{l=JSON.parse(o.data),rt.log("Server message received:",l)}catch{rt.log("Invalid server message",o.data);return}this.emit(_s.Message,l)},this._socket.onclose=o=>{this._disconnected||(rt.log("Socket closed.",o),this._cleanup(),this._disconnected=!0,this.emit(_s.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),rt.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){rt.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:ei.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(_s.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Ax{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===ys.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,o={ordered:!!e.reliable},l=t.createDataChannel(i.label,o);i._initializeDataChannel(l),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){rt.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,o=this.connection.type,l=this.connection.provider;rt.log("Listening for ICE candidates."),e.onicecandidate=c=>{!c.candidate||!c.candidate.candidate||(rt.log(`Received ICE candidates for ${t}:`,c.candidate),l.socket.send({type:ei.Candidate,payload:{candidate:c.candidate,type:o,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":rt.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Kf.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":rt.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Kf.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":rt.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},rt.log("Listening for data channel"),e.ondatachannel=c=>{rt.log("Received data channel");const d=c.channel;l.getConnection(t,i)._initializeDataChannel(d)},rt.log("Listening for remote stream"),e.ontrack=c=>{rt.log("Received remote stream");const d=c.streams[0],f=l.getConnection(t,i);if(f.type===ys.Media){const h=f;this._addStreamToMediaConnection(d,h)}}}cleanup(){rt.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const o=this.connection.dataChannel;o&&(i=!!o.readyState&&o.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);rt.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),rt.log("Set localDescription:",i,`for:${this.connection.peer}`);let o={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===ys.Data){const l=this.connection;o={...o,label:l.label,reliable:l.reliable,serialization:l.serialization}}t.socket.send({type:ei.Offer,payload:o,dst:this.connection.peer})}catch(o){o!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(Dn.WebRTC,o),rt.log("Failed to setLocalDescription, ",o))}}catch(i){t.emitError(Dn.WebRTC,i),rt.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();rt.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),rt.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:ei.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(o){t.emitError(Dn.WebRTC,o),rt.log("Failed to setLocalDescription, ",o)}}catch(i){t.emitError(Dn.WebRTC,i),rt.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,o=this.connection.provider;rt.log("Setting remote description",t);const l=this;try{await i.setRemoteDescription(t),rt.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await l._makeAnswer()}catch(c){o.emitError(Dn.WebRTC,c),rt.log("Failed to setRemoteDescription, ",c)}}async handleCandidate(e){rt.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),rt.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(Dn.WebRTC,t),rt.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(rt.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return rt.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){rt.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class Px extends Th.EventEmitter{emitError(e,t){rt.error("Error:",t),this.emit("error",new cT(`${e}`,t))}}class cT extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class Lx extends Px{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}var Jf;const Ba=class Ba extends Lx{get type(){return ys.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||Ba.ID_PREFIX+Ei.randomToken(),this._negotiator=new Ax(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{rt.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{rt.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){rt.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case ei.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case ei.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:rt.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){rt.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const o of i)this.handleMessage(o);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};Jf=new WeakMap,ba(Ba,Jf,Ba.ID_PREFIX="mc_");let Ic=Ba;class uT{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:o,path:l,key:c}=this._options,d=new URL(`${t}://${i}:${o}${l}${c}/${e}`);return d.searchParams.set("ts",`${Date.now()}${Math.random()}`),d.searchParams.set("version",Rx),fetch(d.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){rt.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Ei.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Ei.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw rt.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}var Qf,eh;const Gs=class Gs extends Lx{get type(){return ys.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||Gs.ID_PREFIX+wx(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Ax(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{rt.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{rt.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{rt.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(wh.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case ei.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case ei.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:rt.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}};Qf=new WeakMap,eh=new WeakMap,ba(Gs,Qf,Gs.ID_PREFIX="dc_"),ba(Gs,eh,Gs.MAX_BUFFERED_AMOUNT=8388608);let Uc=Gs;class Ch extends Uc{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>Uc.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return rt.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e!=null&&e.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class ef extends Ch{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new Tx,this.serialization=Hc.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=jg(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const o=tT(i.data);this._handleDataMessage({data:o})}}_send(e,t){const i=Xg(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);rt.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class dT extends Ch{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=Hc.None}}class fT extends Ch{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=Ei.chunkedMTU){this.emitError(wh.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=Hc.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var th;const za=class za extends Px{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:dT,json:fT,binary:ef,"binary-utf8":ef,default:ef},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:Ei.CLOUD_HOST,port:Ei.CLOUD_PORT,path:"/",key:za.DEFAULT_KEY,token:Ei.randomToken(),config:Ei.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Ei.CLOUD_HOST?this._options.secure=Ei.isSecure():this._options.host==Ei.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&rt.setLogFunction(this._options.logFunction),rt.logLevel=this._options.debug||0,this._api=new uT(t),this._socket=this._createServerConnection(),!Ei.supports.audioVideo&&!Ei.supports.data){this._delayedAbort(Dn.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!Ei.validateId(i)){this._delayedAbort(Dn.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(o=>this._initialize(o)).catch(o=>this._abort(Dn.ServerError,o))}_createServerConnection(){const e=new lT(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(_s.Message,t=>{this._handleMessage(t)}),e.on(_s.Error,t=>{this._abort(Dn.SocketError,t)}),e.on(_s.Disconnected,()=>{this.disconnected||(this.emitError(Dn.Network,"Lost connection to server."),this.disconnect())}),e.on(_s.Close,()=>{this.disconnected||this._abort(Dn.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,o=e.src;switch(t){case ei.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case ei.Error:this._abort(Dn.ServerError,i.msg);break;case ei.IdTaken:this._abort(Dn.UnavailableID,`ID "${this.id}" is taken`);break;case ei.InvalidKey:this._abort(Dn.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case ei.Leave:rt.log(`Received leave message from ${o}`),this._cleanupPeer(o),this._connections.delete(o);break;case ei.Expire:this.emitError(Dn.PeerUnavailable,`Could not connect to peer ${o}`);break;case ei.Offer:{const l=i.connectionId;let c=this.getConnection(o,l);if(c&&(c.close(),rt.warn(`Offer received for existing Connection ID:${l}`)),i.type===ys.Media){const f=new Ic(o,this,{connectionId:l,_payload:i,metadata:i.metadata});c=f,this._addConnection(o,c),this.emit("call",f)}else if(i.type===ys.Data){const f=new this._serializers[i.serialization](o,this,{connectionId:l,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});c=f,this._addConnection(o,c),this.emit("connection",f)}else{rt.warn(`Received malformed connection type:${i.type}`);return}const d=this._getMessages(l);for(const f of d)c.handleMessage(f);break}default:{if(!i){rt.warn(`You received a malformed message from ${o} of type ${t}`);return}const l=i.connectionId,c=this.getConnection(o,l);c&&c.peerConnection?c.handleMessage(e):l?this._storeMessage(l,e):rt.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){rt.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Dn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){rt.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Dn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){rt.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const o=new Ic(e,this,{...i,_stream:t});return this._addConnection(e,o),o}_addConnection(e,t){rt.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const o of i)if(o.connectionId===t)return o;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){rt.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(rt.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;rt.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)rt.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)rt.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(Dn.ServerError,t))}};th=new WeakMap,ba(za,th,za.DEFAULT_KEY="peerjs");let Zf=za;var ag=Zf;class lg{constructor(){this.peer=null,this.connections=new Map,this.isHost=!1,this.roomId="",this.onMessageCallback=null,this.onConnectCallback=null,this.onDisconnectCallback=null,this.lastSendTime=0,this.sendInterval=50}createRoom(){return new Promise((e,t)=>{this.isHost=!0,this.roomId="battle-"+Math.random().toString(36).substring(2,8),this.peer=new ag(this.roomId,{debug:0,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]}}),this.peer.on("open",i=>{console.log("Room created:",i),e(i)}),this.peer.on("connection",i=>{this.setupConnection(i)}),this.peer.on("error",i=>{console.error("Peer error:",i),t(i)})})}joinRoom(e){return new Promise((t,i)=>{this.isHost=!1,this.roomId=e,this.peer=new ag({debug:0,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]}}),this.peer.on("open",o=>{console.log("Connected as:",o);const l=this.peer.connect(e,{reliable:!0});this.setupConnection(l),l.on("open",()=>{t(o)}),l.on("error",c=>{i(c)})}),this.peer.on("error",o=>{console.error("Peer error:",o),i(o)}),setTimeout(()=>{i(new Error("Connection timeout"))},1e4)})}setupConnection(e){this.connections.set(e.peer,e),e.on("open",()=>{console.log("Connection opened with:",e.peer),this.onConnectCallback&&this.onConnectCallback(e.peer)}),e.on("data",t=>{const i=t;this.onMessageCallback&&this.onMessageCallback(e.peer,i)}),e.on("close",()=>{console.log("Connection closed with:",e.peer),this.connections.delete(e.peer),this.onDisconnectCallback&&this.onDisconnectCallback(e.peer)}),e.on("error",t=>{console.error("Connection error:",t)})}send(e){const t=Date.now();if(!(e.type==="position"&&t-this.lastSendTime<this.sendInterval))if(e.type==="position"&&(this.lastSendTime=t),this.isHost)this.connections.forEach(i=>{i.open&&i.send(e)});else{const i=this.connections.values().next().value;i&&i.open&&i.send(e)}}sendTo(e,t){const i=this.connections.get(e);i&&i.open&&i.send(t)}broadcast(e,t){this.connections.forEach((i,o)=>{o!==e&&i.open&&i.send(t)})}onMessage(e){this.onMessageCallback=e}onConnect(e){this.onConnectCallback=e}onDisconnect(e){this.onDisconnectCallback=e}getIsHost(){return this.isHost}getRoomId(){return this.roomId}getConnectedPeers(){return Array.from(this.connections.keys())}disconnect(){this.connections.forEach(e=>e.close()),this.connections.clear(),this.peer&&(this.peer.destroy(),this.peer=null)}}function hT({onBack:s,onGameStart:e}){const[t,i]=dt.useState("select"),[o,l]=dt.useState(""),[c,d]=dt.useState(""),[f,h]=dt.useState(""),[g,v]=dt.useState(""),[m,S]=dt.useState(null),[b,P]=dt.useState([]),y=async()=>{h("Создание комнаты..."),v("");const C=new lg;try{const N=await C.createRoom();l(N),S(C),h("Комната создана! Ждем второго игрока..."),C.onConnect(D=>{P(F=>[...F,D]),h("Игрок подключился! Можно начинать.")}),C.onDisconnect(D=>{P(F=>F.filter(E=>E!==D)),h("Игрок отключился.")})}catch(N){v("Ошибка создания комнаты: "+N.message)}},_=async()=>{if(!c.trim()){v("Введите ID комнаты");return}h("Подключение к хосту..."),v("");const C=new lg;try{await C.joinRoom(c.trim()),S(C),h("Успешно подключено!"),setTimeout(()=>{e(C,!1)},1e3)}catch(N){v("Ошибка подключения: "+N.message)}},A=()=>{m&&e(m,!0)},z=()=>{navigator.clipboard.writeText(o),h("ID скопирован в буфер!")};return dt.useEffect(()=>()=>{m&&m.disconnect()},[m]),R.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-between bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 relative overflow-y-auto overflow-x-hidden p-4",children:[R.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[R.jsx("div",{className:"absolute w-72 md:w-96 h-72 md:h-96 bg-cyan-500/15 rounded-full blur-3xl -top-32 -left-32 animate-pulse"}),R.jsx("div",{className:"absolute w-72 md:w-96 h-72 md:h-96 bg-blue-500/15 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse",style:{animationDelay:"1s"}})]}),R.jsxs("div",{className:"relative z-10 flex flex-col items-center max-w-xl w-full my-auto",children:[R.jsx("h2",{className:"text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 mb-2 text-center",children:"🌐 СЕТЕВОЙ БОЙ (P2P)"}),R.jsx("p",{className:"text-xs sm:text-sm text-gray-300 mb-6 text-center",children:"Сразись с другом прямо в браузере"}),t==="select"&&R.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-xs",children:[R.jsxs("button",{onClick:()=>i("create"),className:"py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl text-base sm:text-lg font-bold active:scale-95 sm:hover:scale-105 transition-all shadow-xl shadow-green-600/30 border border-green-400/50 flex items-center justify-center gap-2",children:[R.jsx("span",{children:"🏠"}),R.jsx("span",{children:"Создать комнату"})]}),R.jsxs("button",{onClick:()=>i("join"),className:"py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl text-base sm:text-lg font-bold active:scale-95 sm:hover:scale-105 transition-all shadow-xl shadow-blue-600/30 border border-blue-400/50 flex items-center justify-center gap-2",children:[R.jsx("span",{children:"🔗"}),R.jsx("span",{children:"Войти по ID"})]}),R.jsx("button",{onClick:s,className:"py-2.5 px-6 bg-slate-800/80 backdrop-blur-md text-white rounded-xl active:scale-95 hover:bg-slate-700 transition border border-slate-600/50 text-sm font-semibold mt-2",children:"← Назад в меню"})]}),t==="create"&&R.jsxs("div",{className:"flex flex-col items-center gap-4 w-full",children:[o?R.jsxs("div",{className:"bg-slate-900/90 backdrop-blur-md rounded-2xl p-5 md:p-6 border-2 border-emerald-500/50 shadow-2xl w-full",children:[R.jsx("h3",{className:"text-lg md:text-xl text-white mb-3 font-bold text-center",children:"Комната готова!"}),R.jsxs("div",{className:"bg-black/50 rounded-xl p-3 mb-3 border border-emerald-500/30 text-center",children:[R.jsx("p",{className:"text-gray-400 text-xs mb-1",children:"Отправь этот ID другу:"}),R.jsx("p",{className:"text-xl md:text-2xl font-mono text-emerald-400 font-black break-all select-all",children:o})]}),R.jsx("button",{onClick:z,className:"w-full py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl active:scale-95 sm:hover:scale-105 transition mb-3 border border-blue-400/50 font-bold text-sm",children:"📋 Скопировать ID"}),R.jsx("p",{className:"text-gray-300 mb-3 text-center text-xs md:text-sm",children:f}),b.length>0&&R.jsx("div",{className:"mb-3 bg-black/40 rounded-xl p-2.5 text-xs text-center text-emerald-300",children:"✓ Игрок готов к бою!"}),R.jsx("button",{onClick:A,disabled:b.length===0,className:`w-full py-3 rounded-xl font-bold transition text-base ${b.length>0?"bg-gradient-to-r from-emerald-600 to-green-600 text-white active:scale-95 shadow-lg border border-emerald-400/50":"bg-slate-800 text-gray-500 cursor-not-allowed border border-slate-700"}`,children:"🎮 Начать битву"})]}):R.jsx("button",{onClick:y,className:"py-4 px-8 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl text-lg font-bold active:scale-95 sm:hover:scale-105 transition shadow-xl border border-green-400/50",children:"Начать создание"}),R.jsx("button",{onClick:()=>{i("select"),m&&m.disconnect()},className:"py-2 px-6 bg-slate-800/80 backdrop-blur-md text-white rounded-xl active:scale-95 hover:bg-slate-700 transition border border-slate-600/50 text-sm font-semibold",children:"← Назад"})]}),t==="join"&&R.jsxs("div",{className:"flex flex-col items-center gap-4 w-full",children:[R.jsxs("div",{className:"bg-slate-900/90 backdrop-blur-md rounded-2xl p-5 md:p-6 border-2 border-blue-500/50 shadow-2xl w-full",children:[R.jsx("input",{type:"text",value:c,onChange:C=>d(C.target.value),placeholder:"Вставь ID комнаты",className:"w-full px-4 py-3 bg-black/50 text-white text-center rounded-xl border border-gray-600 focus:border-cyan-400 focus:outline-none mb-3 font-mono text-sm sm:text-base"}),R.jsx("button",{onClick:_,className:"w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl text-base font-bold active:scale-95 sm:hover:scale-105 transition border border-blue-400/50 shadow-lg",children:"Подключиться"}),f&&R.jsx("p",{className:"text-gray-300 mt-3 text-center text-xs md:text-sm",children:f}),g&&R.jsx("p",{className:"text-red-400 mt-3 text-center text-xs md:text-sm font-semibold",children:g})]}),R.jsx("button",{onClick:()=>{i("select"),m&&m.disconnect()},className:"py-2 px-6 bg-slate-800/80 backdrop-blur-md text-white rounded-xl active:scale-95 hover:bg-slate-700 transition border border-slate-600/50 text-sm font-semibold",children:"← Назад"})]}),g&&t==="create"&&R.jsx("p",{className:"text-red-400 mt-3 text-xs md:text-sm text-center",children:g})]})]})}function pT({onSelect:s,onBack:e,currentDifficulty:t}){const i=[{key:"easy",name:"Легкий",emoji:"😊",description:"Боты промахиваются, медленно целятся",color:"from-green-600 to-emerald-600",borderColor:"border-green-400",shadowColor:"shadow-green-500/30",stats:{accuracy:"Низкая",dodge:"Редко",reaction:"Медленно"}},{key:"medium",name:"Средний",emoji:"😐",description:"Сбалансированный вызов для большинства игроков",color:"from-yellow-600 to-orange-600",borderColor:"border-yellow-400",shadowColor:"shadow-yellow-500/30",stats:{accuracy:"Средняя",dodge:"Иногда",reaction:"Нормально"}},{key:"hard",name:"Сложный",emoji:"😈",description:"Боты бьют без пощады, быстро уворачиваются",color:"from-red-600 to-rose-600",borderColor:"border-red-400",shadowColor:"shadow-red-500/30",stats:{accuracy:"Высокая",dodge:"Часто",reaction:"Быстро"}}];return R.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-y-auto overflow-x-hidden p-4",children:[R.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[R.jsx("div",{className:"absolute w-72 md:w-96 h-72 md:h-96 bg-indigo-500/20 rounded-full blur-3xl -top-32 -right-32 animate-pulse"}),R.jsx("div",{className:"absolute w-72 md:w-96 h-72 md:h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-32 -left-32 animate-pulse",style:{animationDelay:"1s"}})]}),R.jsxs("div",{className:"relative z-10 flex flex-col items-center max-w-4xl w-full my-auto",children:[R.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 mb-2 text-center",children:"СЛОЖНОСТЬ БОТОВ"}),R.jsx("p",{className:"text-xs sm:text-sm text-gray-300 mb-6 text-center",children:"Выбери под свой скилл"}),R.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 w-full mb-6",children:i.map(o=>R.jsxs("button",{onClick:()=>s(o.key),className:`group relative flex flex-col items-center p-4 md:p-6 bg-gradient-to-br ${o.color}/80 backdrop-blur-md rounded-2xl md:rounded-3xl border-3 ${t===o.key?"border-white scale-[1.02] shadow-2xl":`${o.borderColor}/40 hover:border-white/70`} active:scale-95 sm:hover:scale-105 transition-all duration-300 overflow-hidden`,children:[R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"}),t===o.key&&R.jsx("div",{className:"absolute top-3 right-3 bg-white text-black px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-black tracking-wider uppercase",children:"✓ Выбрано"}),R.jsxs("div",{className:"relative z-10 w-full flex flex-col items-center",children:[R.jsx("div",{className:"text-4xl sm:text-6xl md:text-7xl mb-2 group-hover:scale-110 transition-transform drop-shadow-xl",children:o.emoji}),R.jsx("span",{className:"text-xl md:text-2xl font-bold text-white drop-shadow-md mb-1",children:o.name}),R.jsx("p",{className:"text-xs text-white/80 mb-3 text-center",children:o.description}),R.jsxs("div",{className:"space-y-1 text-[11px] md:text-xs text-white/90 bg-black/25 rounded-xl p-2.5 w-full",children:[R.jsxs("div",{className:"flex justify-between",children:[R.jsx("span",{children:"🎯 Меткость:"}),R.jsx("span",{className:"font-bold",children:o.stats.accuracy})]}),R.jsxs("div",{className:"flex justify-between",children:[R.jsx("span",{children:"💨 Увороты:"}),R.jsx("span",{className:"font-bold",children:o.stats.dodge})]}),R.jsxs("div",{className:"flex justify-between",children:[R.jsx("span",{children:"⚡ Реакция:"}),R.jsx("span",{className:"font-bold",children:o.stats.reaction})]})]})]})]},o.key))}),R.jsx("button",{onClick:e,className:"px-6 py-2.5 bg-slate-800/80 backdrop-blur-md text-white rounded-xl active:scale-95 hover:bg-slate-700 transition border border-slate-600/50 text-sm font-semibold",children:"← Назад в меню"})]})]})}const Cc={ak:{name:"Автомат",damage:12,fireRate:80,spread:.025,bulletsPerShot:1,emoji:"🔫",price:0},shotgun:{name:"Дробовик",damage:10,fireRate:900,spread:.12,bulletsPerShot:8,emoji:"💥",price:0},pistol:{name:"Пистолет",damage:22,fireRate:350,spread:.015,bulletsPerShot:1,emoji:"🔫",price:0},sniper:{name:"Снайперка",damage:90,fireRate:1800,spread:.003,bulletsPerShot:1,emoji:"🎯",price:0},smg:{name:"ПП",damage:8,fireRate:60,spread:.04,bulletsPerShot:1,emoji:"⚡",price:500},rpg:{name:"РПГ",damage:150,fireRate:2500,spread:.01,bulletsPerShot:1,emoji:"🚀",price:1e3},minigun:{name:"Миниган",damage:10,fireRate:40,spread:.05,bulletsPerShot:1,emoji:"🔥",price:1500},crossbow:{name:"Арбалет",damage:60,fireRate:1200,spread:.005,bulletsPerShot:1,emoji:"🏹",price:800}},Oo=[{id:"gold",name:"Золотой",color:16766720,rarity:"legendary",emoji:"✨"},{id:"neon",name:"Неоновый",color:65535,rarity:"epic",emoji:"💎"},{id:"fire",name:"Огненный",color:16729344,rarity:"epic",emoji:"🔥"},{id:"ice",name:"Ледяной",color:8900331,rarity:"rare",emoji:"❄️"},{id:"forest",name:"Лесной",color:2263842,rarity:"rare",emoji:"🌲"},{id:"shadow",name:"Теневой",color:3092271,rarity:"common",emoji:"🌑"},{id:"plasma",name:"Плазменный",color:9699539,rarity:"legendary",emoji:"⚡"},{id:"rusty",name:"Ржавый",color:9127187,rarity:"common",emoji:"🔧"}],Uo=200;function mT(){const[s,e]=dt.useState("menu"),[t,i]=dt.useState("lisa"),[o,l]=dt.useState("ak"),[c,d]=dt.useState(()=>{const k=localStorage.getItem("coins");return k?parseInt(k):0}),[f,h]=dt.useState(()=>{const k=localStorage.getItem("skins");return k?JSON.parse(k):[]}),[g,v]=dt.useState(()=>localStorage.getItem("equippedSkin")||null),[m,S]=dt.useState(null),[b,P]=dt.useState(!1),[y,_]=dt.useState("medium");dt.useEffect(()=>{localStorage.setItem("coins",c.toString())},[c]),dt.useEffect(()=>{localStorage.setItem("skins",JSON.stringify(f))},[f]),dt.useEffect(()=>{g?localStorage.setItem("equippedSkin",g):localStorage.removeItem("equippedSkin")},[g]);const A=k=>d(H=>H+k),z=k=>c>=k?(d(H=>H-k),!0):!1,C=k=>h(H=>[...H,k]),N=k=>{i(k),e("weapon")},D=k=>{l(k),e("game")},F=()=>{m&&(m.disconnect(),S(null)),e("menu")},E=(k,H)=>{S(k),P(H),e("mp_weapon")},L=k=>{l(k),e("mp_game")};return R.jsxs("div",{className:"w-full h-screen overflow-hidden bg-gray-900",children:[s==="menu"&&R.jsx(x_,{onSelect:N,coins:c,onOpenCases:()=>e("cases"),onMultiplayer:()=>e("multiplayer"),onDifficultySelect:()=>e("difficulty")}),s==="weapon"&&R.jsx(Qm,{onSelect:D,onBack:()=>e("menu"),coins:c}),s==="game"&&R.jsx(K0,{playerCharacter:t,playerWeapon:o,onBackToMenu:F,addCoins:A,equippedSkin:g,difficulty:y}),s==="cases"&&R.jsx(Vb,{coins:c,ownedSkins:f,equippedSkin:g,spendCoins:z,addSkin:C,setEquippedSkin:v,onBack:()=>e("menu")}),s==="difficulty"&&R.jsx(pT,{onSelect:k=>{_(k),e("menu")},onBack:()=>e("menu"),currentDifficulty:y}),s==="multiplayer"&&R.jsx(hT,{onBack:()=>e("menu"),onGameStart:E}),s==="mp_weapon"&&R.jsx(Qm,{onSelect:L,onBack:()=>e("multiplayer"),coins:c}),s==="mp_game"&&m&&R.jsx(K0,{playerCharacter:t,playerWeapon:o,onBackToMenu:F,addCoins:A,equippedSkin:g,network:m,isHost:b})]})}g_.createRoot(document.getElementById("root")).render(R.jsx(mT,{}));
