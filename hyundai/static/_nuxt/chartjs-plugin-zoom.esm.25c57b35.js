import{a9 as In}from"./entry.829eafc5.js";import{f as k,g as S,v as Ot,h as Xt,s as ye}from"./chart.742e63cc.js";var Ce={exports:{}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(e){(function(o,r,l,a){var u=["","webkit","Moz","MS","ms","o"],c=r.createElement("div"),d="function",m=Math.round,v=Math.abs,p=Date.now;function E(t,n,i){return setTimeout(Nt(t,i),n)}function T(t,n,i){return Array.isArray(t)?(x(t,i[n],i),!0):!1}function x(t,n,i){var s;if(t)if(t.forEach)t.forEach(n,i);else if(t.length!==a)for(s=0;s<t.length;)n.call(i,t[s],s,t),s++;else for(s in t)t.hasOwnProperty(s)&&n.call(i,t[s],s,t)}function H(t,n,i){var s="DEPRECATED METHOD: "+n+`
`+i+` AT 
`;return function(){var f=new Error("get-stack-trace"),h=f&&f.stack?f.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",g=o.console&&(o.console.warn||o.console.log);return g&&g.call(o.console,s,h),t.apply(this,arguments)}}var C;typeof Object.assign!="function"?C=function(n){if(n===a||n===null)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(n),s=1;s<arguments.length;s++){var f=arguments[s];if(f!==a&&f!==null)for(var h in f)f.hasOwnProperty(h)&&(i[h]=f[h])}return i}:C=Object.assign;var jt=H(function(n,i,s){for(var f=Object.keys(i),h=0;h<f.length;)(!s||s&&n[f[h]]===a)&&(n[f[h]]=i[f[h]]),h++;return n},"extend","Use `assign`."),Fe=H(function(n,i){return jt(n,i,!0)},"merge","Use `assign`.");function A(t,n,i){var s=n.prototype,f;f=t.prototype=Object.create(s),f.constructor=t,f._super=s,i&&C(f,i)}function Nt(t,n){return function(){return t.apply(n,arguments)}}function Ct(t,n){return typeof t==d?t.apply(n&&n[0]||a,n):t}function Kt(t,n){return t===a?n:t}function ct(t,n,i){x(ht(n),function(s){t.addEventListener(s,i,!1)})}function ft(t,n,i){x(ht(n),function(s){t.removeEventListener(s,i,!1)})}function Jt(t,n){for(;t;){if(t==n)return!0;t=t.parentNode}return!1}function Z(t,n){return t.indexOf(n)>-1}function ht(t){return t.trim().split(/\s+/g)}function j(t,n,i){if(t.indexOf&&!i)return t.indexOf(n);for(var s=0;s<t.length;){if(i&&t[s][i]==n||!i&&t[s]===n)return s;s++}return-1}function dt(t){return Array.prototype.slice.call(t,0)}function Qt(t,n,i){for(var s=[],f=[],h=0;h<t.length;){var g=n?t[h][n]:t[h];j(f,g)<0&&s.push(t[h]),f[h]=g,h++}return i&&(n?s=s.sort(function(_,N){return _[n]>N[n]}):s=s.sort()),s}function mt(t,n){for(var i,s,f=n[0].toUpperCase()+n.slice(1),h=0;h<u.length;){if(i=u[h],s=i?i+f:n,s in t)return s;h++}return a}var Xe=1;function Ve(){return Xe++}function $t(t){var n=t.ownerDocument||t;return n.defaultView||n.parentWindow||o}var We=/mobile|tablet|ip(ad|hone|od)|android/i,te="ontouchstart"in o,ke=mt(o,"PointerEvent")!==a,Ze=te&&We.test(navigator.userAgent),$="touch",qe="pen",bt="mouse",Ge="kinect",Be=25,O=1,q=2,P=4,b=8,pt=1,tt=2,et=4,nt=8,it=16,L=tt|et,G=nt|it,ee=L|G,ne=["x","y"],vt=["clientX","clientY"];function D(t,n){var i=this;this.manager=t,this.callback=n,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(s){Ct(t.options.enable,[t])&&i.handler(s)},this.init()}D.prototype={handler:function(){},init:function(){this.evEl&&ct(this.element,this.evEl,this.domHandler),this.evTarget&&ct(this.target,this.evTarget,this.domHandler),this.evWin&&ct($t(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&ft(this.element,this.evEl,this.domHandler),this.evTarget&&ft(this.target,this.evTarget,this.domHandler),this.evWin&&ft($t(this.element),this.evWin,this.domHandler)}};function je(t){var n,i=t.options.inputClass;return i?n=i:ke?n=At:Ze?n=Et:te?n=Dt:n=Tt,new n(t,Ke)}function Ke(t,n,i){var s=i.pointers.length,f=i.changedPointers.length,h=n&O&&s-f===0,g=n&(P|b)&&s-f===0;i.isFirst=!!h,i.isFinal=!!g,h&&(t.session={}),i.eventType=n,Je(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function Je(t,n){var i=t.session,s=n.pointers,f=s.length;i.firstInput||(i.firstInput=ie(n)),f>1&&!i.firstMultiple?i.firstMultiple=ie(n):f===1&&(i.firstMultiple=!1);var h=i.firstInput,g=i.firstMultiple,I=g?g.center:h.center,_=n.center=oe(s);n.timeStamp=p(),n.deltaTime=n.timeStamp-h.timeStamp,n.angle=Mt(I,_),n.distance=gt(I,_),Qe(i,n),n.offsetDirection=se(n.deltaX,n.deltaY);var N=re(n.deltaTime,n.deltaX,n.deltaY);n.overallVelocityX=N.x,n.overallVelocityY=N.y,n.overallVelocity=v(N.x)>v(N.y)?N.x:N.y,n.scale=g?en(g.pointers,s):1,n.rotation=g?tn(g.pointers,s):0,n.maxPointers=i.prevInput?n.pointers.length>i.prevInput.maxPointers?n.pointers.length:i.prevInput.maxPointers:n.pointers.length,$e(i,n);var U=t.element;Jt(n.srcEvent.target,U)&&(U=n.srcEvent.target),n.target=U}function Qe(t,n){var i=n.center,s=t.offsetDelta||{},f=t.prevDelta||{},h=t.prevInput||{};(n.eventType===O||h.eventType===P)&&(f=t.prevDelta={x:h.deltaX||0,y:h.deltaY||0},s=t.offsetDelta={x:i.x,y:i.y}),n.deltaX=f.x+(i.x-s.x),n.deltaY=f.y+(i.y-s.y)}function $e(t,n){var i=t.lastInterval||n,s=n.timeStamp-i.timeStamp,f,h,g,I;if(n.eventType!=b&&(s>Be||i.velocity===a)){var _=n.deltaX-i.deltaX,N=n.deltaY-i.deltaY,U=re(s,_,N);h=U.x,g=U.y,f=v(U.x)>v(U.y)?U.x:U.y,I=se(_,N),t.lastInterval=n}else f=i.velocity,h=i.velocityX,g=i.velocityY,I=i.direction;n.velocity=f,n.velocityX=h,n.velocityY=g,n.direction=I}function ie(t){for(var n=[],i=0;i<t.pointers.length;)n[i]={clientX:m(t.pointers[i].clientX),clientY:m(t.pointers[i].clientY)},i++;return{timeStamp:p(),pointers:n,center:oe(n),deltaX:t.deltaX,deltaY:t.deltaY}}function oe(t){var n=t.length;if(n===1)return{x:m(t[0].clientX),y:m(t[0].clientY)};for(var i=0,s=0,f=0;f<n;)i+=t[f].clientX,s+=t[f].clientY,f++;return{x:m(i/n),y:m(s/n)}}function re(t,n,i){return{x:n/t||0,y:i/t||0}}function se(t,n){return t===n?pt:v(t)>=v(n)?t<0?tt:et:n<0?nt:it}function gt(t,n,i){i||(i=ne);var s=n[i[0]]-t[i[0]],f=n[i[1]]-t[i[1]];return Math.sqrt(s*s+f*f)}function Mt(t,n,i){i||(i=ne);var s=n[i[0]]-t[i[0]],f=n[i[1]]-t[i[1]];return Math.atan2(f,s)*180/Math.PI}function tn(t,n){return Mt(n[1],n[0],vt)+Mt(t[1],t[0],vt)}function en(t,n){return gt(n[0],n[1],vt)/gt(t[0],t[1],vt)}var nn={mousedown:O,mousemove:q,mouseup:P},on="mousedown",rn="mousemove mouseup";function Tt(){this.evEl=on,this.evWin=rn,this.pressed=!1,D.apply(this,arguments)}A(Tt,D,{handler:function(n){var i=nn[n.type];i&O&&n.button===0&&(this.pressed=!0),i&q&&n.which!==1&&(i=P),this.pressed&&(i&P&&(this.pressed=!1),this.callback(this.manager,i,{pointers:[n],changedPointers:[n],pointerType:bt,srcEvent:n}))}});var sn={pointerdown:O,pointermove:q,pointerup:P,pointercancel:b,pointerout:b},an={2:$,3:qe,4:bt,5:Ge},ae="pointerdown",le="pointermove pointerup pointercancel";o.MSPointerEvent&&!o.PointerEvent&&(ae="MSPointerDown",le="MSPointerMove MSPointerUp MSPointerCancel");function At(){this.evEl=ae,this.evWin=le,D.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}A(At,D,{handler:function(n){var i=this.store,s=!1,f=n.type.toLowerCase().replace("ms",""),h=sn[f],g=an[n.pointerType]||n.pointerType,I=g==$,_=j(i,n.pointerId,"pointerId");h&O&&(n.button===0||I)?_<0&&(i.push(n),_=i.length-1):h&(P|b)&&(s=!0),!(_<0)&&(i[_]=n,this.callback(this.manager,h,{pointers:i,changedPointers:[n],pointerType:g,srcEvent:n}),s&&i.splice(_,1))}});var ln={touchstart:O,touchmove:q,touchend:P,touchcancel:b},un="touchstart",cn="touchstart touchmove touchend touchcancel";function ue(){this.evTarget=un,this.evWin=cn,this.started=!1,D.apply(this,arguments)}A(ue,D,{handler:function(n){var i=ln[n.type];if(i===O&&(this.started=!0),!!this.started){var s=fn.call(this,n,i);i&(P|b)&&s[0].length-s[1].length===0&&(this.started=!1),this.callback(this.manager,i,{pointers:s[0],changedPointers:s[1],pointerType:$,srcEvent:n})}}});function fn(t,n){var i=dt(t.touches),s=dt(t.changedTouches);return n&(P|b)&&(i=Qt(i.concat(s),"identifier",!0)),[i,s]}var hn={touchstart:O,touchmove:q,touchend:P,touchcancel:b},dn="touchstart touchmove touchend touchcancel";function Et(){this.evTarget=dn,this.targetIds={},D.apply(this,arguments)}A(Et,D,{handler:function(n){var i=hn[n.type],s=mn.call(this,n,i);s&&this.callback(this.manager,i,{pointers:s[0],changedPointers:s[1],pointerType:$,srcEvent:n})}});function mn(t,n){var i=dt(t.touches),s=this.targetIds;if(n&(O|q)&&i.length===1)return s[i[0].identifier]=!0,[i,i];var f,h,g=dt(t.changedTouches),I=[],_=this.target;if(h=i.filter(function(N){return Jt(N.target,_)}),n===O)for(f=0;f<h.length;)s[h[f].identifier]=!0,f++;for(f=0;f<g.length;)s[g[f].identifier]&&I.push(g[f]),n&(P|b)&&delete s[g[f].identifier],f++;if(I.length)return[Qt(h.concat(I),"identifier",!0),I]}var pn=2500,ce=25;function Dt(){D.apply(this,arguments);var t=Nt(this.handler,this);this.touch=new Et(this.manager,t),this.mouse=new Tt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}A(Dt,D,{handler:function(n,i,s){var f=s.pointerType==$,h=s.pointerType==bt;if(!(h&&s.sourceCapabilities&&s.sourceCapabilities.firesTouchEvents)){if(f)vn.call(this,i,s);else if(h&&gn.call(this,s))return;this.callback(n,i,s)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function vn(t,n){t&O?(this.primaryTouch=n.changedPointers[0].identifier,fe.call(this,n)):t&(P|b)&&fe.call(this,n)}function fe(t){var n=t.changedPointers[0];if(n.identifier===this.primaryTouch){var i={x:n.clientX,y:n.clientY};this.lastTouches.push(i);var s=this.lastTouches,f=function(){var h=s.indexOf(i);h>-1&&s.splice(h,1)};setTimeout(f,pn)}}function gn(t){for(var n=t.srcEvent.clientX,i=t.srcEvent.clientY,s=0;s<this.lastTouches.length;s++){var f=this.lastTouches[s],h=Math.abs(n-f.x),g=Math.abs(i-f.y);if(h<=ce&&g<=ce)return!0}return!1}var he=mt(c.style,"touchAction"),de=he!==a,me="compute",pe="auto",Rt="manipulation",B="none",ot="pan-x",rt="pan-y",yt=En();function wt(t,n){this.manager=t,this.set(n)}wt.prototype={set:function(t){t==me&&(t=this.compute()),de&&this.manager.element.style&&yt[t]&&(this.manager.element.style[he]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return x(this.manager.recognizers,function(n){Ct(n.options.enable,[n])&&(t=t.concat(n.getTouchAction()))}),Tn(t.join(" "))},preventDefaults:function(t){var n=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented){n.preventDefault();return}var s=this.actions,f=Z(s,B)&&!yt[B],h=Z(s,rt)&&!yt[rt],g=Z(s,ot)&&!yt[ot];if(f){var I=t.pointers.length===1,_=t.distance<2,N=t.deltaTime<250;if(I&&_&&N)return}if(!(g&&h)&&(f||h&&i&L||g&&i&G))return this.preventSrc(n)},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function Tn(t){if(Z(t,B))return B;var n=Z(t,ot),i=Z(t,rt);return n&&i?B:n||i?n?ot:rt:Z(t,Rt)?Rt:pe}function En(){if(!de)return!1;var t={},n=o.CSS&&o.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=n?o.CSS.supports("touch-action",i):!0}),t}var Pt=1,R=2,K=4,V=8,Y=V,st=16,z=32;function F(t){this.options=C({},this.defaults,t||{}),this.id=Ve(),this.manager=null,this.options.enable=Kt(this.options.enable,!0),this.state=Pt,this.simultaneous={},this.requireFail=[]}F.prototype={defaults:{},set:function(t){return C(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(T(t,"recognizeWith",this))return this;var n=this.simultaneous;return t=xt(t,this),n[t.id]||(n[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return T(t,"dropRecognizeWith",this)?this:(t=xt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(T(t,"requireFailure",this))return this;var n=this.requireFail;return t=xt(t,this),j(n,t)===-1&&(n.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(T(t,"dropRequireFailure",this))return this;t=xt(t,this);var n=j(this.requireFail,t);return n>-1&&this.requireFail.splice(n,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var n=this,i=this.state;function s(f){n.manager.emit(f,t)}i<V&&s(n.options.event+ve(i)),s(n.options.event),t.additionalEvent&&s(t.additionalEvent),i>=V&&s(n.options.event+ve(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=z},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(z|Pt)))return!1;t++}return!0},recognize:function(t){var n=C({},t);if(!Ct(this.options.enable,[this,n])){this.reset(),this.state=z;return}this.state&(Y|st|z)&&(this.state=Pt),this.state=this.process(n),this.state&(R|K|V|st)&&this.tryEmit(n)},process:function(t){},getTouchAction:function(){},reset:function(){}};function ve(t){return t&st?"cancel":t&V?"end":t&K?"move":t&R?"start":""}function ge(t){return t==it?"down":t==nt?"up":t==tt?"left":t==et?"right":""}function xt(t,n){var i=n.manager;return i?i.get(t):t}function w(){F.apply(this,arguments)}A(w,F,{defaults:{pointers:1},attrTest:function(t){var n=this.options.pointers;return n===0||t.pointers.length===n},process:function(t){var n=this.state,i=t.eventType,s=n&(R|K),f=this.attrTest(t);return s&&(i&b||!f)?n|st:s||f?i&P?n|V:n&R?n|K:R:z}});function It(){w.apply(this,arguments),this.pX=null,this.pY=null}A(It,w,{defaults:{event:"pan",threshold:10,pointers:1,direction:ee},getTouchAction:function(){var t=this.options.direction,n=[];return t&L&&n.push(rt),t&G&&n.push(ot),n},directionTest:function(t){var n=this.options,i=!0,s=t.distance,f=t.direction,h=t.deltaX,g=t.deltaY;return f&n.direction||(n.direction&L?(f=h===0?pt:h<0?tt:et,i=h!=this.pX,s=Math.abs(t.deltaX)):(f=g===0?pt:g<0?nt:it,i=g!=this.pY,s=Math.abs(t.deltaY))),t.direction=f,i&&s>n.threshold&&f&n.direction},attrTest:function(t){return w.prototype.attrTest.call(this,t)&&(this.state&R||!(this.state&R)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var n=ge(t.direction);n&&(t.additionalEvent=this.options.event+n),this._super.emit.call(this,t)}});function Lt(){w.apply(this,arguments)}A(Lt,w,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[B]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&R)},emit:function(t){if(t.scale!==1){var n=t.scale<1?"in":"out";t.additionalEvent=this.options.event+n}this._super.emit.call(this,t)}});function zt(){F.apply(this,arguments),this._timer=null,this._input=null}A(zt,F,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[pe]},process:function(t){var n=this.options,i=t.pointers.length===n.pointers,s=t.distance<n.threshold,f=t.deltaTime>n.time;if(this._input=t,!s||!i||t.eventType&(P|b)&&!f)this.reset();else if(t.eventType&O)this.reset(),this._timer=E(function(){this.state=Y,this.tryEmit()},n.time,this);else if(t.eventType&P)return Y;return z},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Y&&(t&&t.eventType&P?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=p(),this.manager.emit(this.options.event,this._input)))}});function Ut(){w.apply(this,arguments)}A(Ut,w,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[B]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&R)}});function Ht(){w.apply(this,arguments)}A(Ht,w,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:L|G,pointers:1},getTouchAction:function(){return It.prototype.getTouchAction.call(this)},attrTest:function(t){var n=this.options.direction,i;return n&(L|G)?i=t.overallVelocity:n&L?i=t.overallVelocityX:n&G&&(i=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&v(i)>this.options.velocity&&t.eventType&P},emit:function(t){var n=ge(t.offsetDirection);n&&this.manager.emit(this.options.event+n,t),this.manager.emit(this.options.event,t)}});function St(){F.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}A(St,F,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Rt]},process:function(t){var n=this.options,i=t.pointers.length===n.pointers,s=t.distance<n.threshold,f=t.deltaTime<n.time;if(this.reset(),t.eventType&O&&this.count===0)return this.failTimeout();if(s&&f&&i){if(t.eventType!=P)return this.failTimeout();var h=this.pTime?t.timeStamp-this.pTime<n.interval:!0,g=!this.pCenter||gt(this.pCenter,t.center)<n.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,!g||!h?this.count=1:this.count+=1,this._input=t;var I=this.count%n.taps;if(I===0)return this.hasRequireFailures()?(this._timer=E(function(){this.state=Y,this.tryEmit()},n.interval,this),R):Y}return z},failTimeout:function(){return this._timer=E(function(){this.state=z},this.options.interval,this),z},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Y&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function X(t,n){return n=n||{},n.recognizers=Kt(n.recognizers,X.defaults.preset),new Yt(t,n)}X.VERSION="2.0.7",X.defaults={domEvents:!1,touchAction:me,enable:!0,inputTarget:null,inputClass:null,preset:[[Ut,{enable:!1}],[Lt,{enable:!1},["rotate"]],[Ht,{direction:L}],[It,{direction:L},["swipe"]],[St],[St,{event:"doubletap",taps:2},["tap"]],[zt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var yn=1,Te=2;function Yt(t,n){this.options=C({},X.defaults,n||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=je(this),this.touchAction=new wt(this,this.options.touchAction),Ee(this,!0),x(this.options.recognizers,function(i){var s=this.add(new i[0](i[1]));i[2]&&s.recognizeWith(i[2]),i[3]&&s.requireFailure(i[3])},this)}Yt.prototype={set:function(t){return C(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?Te:yn},recognize:function(t){var n=this.session;if(!n.stopped){this.touchAction.preventDefaults(t);var i,s=this.recognizers,f=n.curRecognizer;(!f||f&&f.state&Y)&&(f=n.curRecognizer=null);for(var h=0;h<s.length;)i=s[h],n.stopped!==Te&&(!f||i==f||i.canRecognizeWith(f))?i.recognize(t):i.reset(),!f&&i.state&(R|K|V)&&(f=n.curRecognizer=i),h++}},get:function(t){if(t instanceof F)return t;for(var n=this.recognizers,i=0;i<n.length;i++)if(n[i].options.event==t)return n[i];return null},add:function(t){if(T(t,"add",this))return this;var n=this.get(t.options.event);return n&&this.remove(n),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(T(t,"remove",this))return this;if(t=this.get(t),t){var n=this.recognizers,i=j(n,t);i!==-1&&(n.splice(i,1),this.touchAction.update())}return this},on:function(t,n){if(t!==a&&n!==a){var i=this.handlers;return x(ht(t),function(s){i[s]=i[s]||[],i[s].push(n)}),this}},off:function(t,n){if(t!==a){var i=this.handlers;return x(ht(t),function(s){n?i[s]&&i[s].splice(j(i[s],n),1):delete i[s]}),this}},emit:function(t,n){this.options.domEvents&&Pn(t,n);var i=this.handlers[t]&&this.handlers[t].slice();if(!(!i||!i.length)){n.type=t,n.preventDefault=function(){n.srcEvent.preventDefault()};for(var s=0;s<i.length;)i[s](n),s++}},destroy:function(){this.element&&Ee(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function Ee(t,n){var i=t.element;if(i.style){var s;x(t.options.cssProps,function(f,h){s=mt(i.style,h),n?(t.oldCssProps[s]=i.style[s],i.style[s]=f):i.style[s]=t.oldCssProps[s]||""}),n||(t.oldCssProps={})}}function Pn(t,n){var i=r.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=n,n.target.dispatchEvent(i)}C(X,{INPUT_START:O,INPUT_MOVE:q,INPUT_END:P,INPUT_CANCEL:b,STATE_POSSIBLE:Pt,STATE_BEGAN:R,STATE_CHANGED:K,STATE_ENDED:V,STATE_RECOGNIZED:Y,STATE_CANCELLED:st,STATE_FAILED:z,DIRECTION_NONE:pt,DIRECTION_LEFT:tt,DIRECTION_RIGHT:et,DIRECTION_UP:nt,DIRECTION_DOWN:it,DIRECTION_HORIZONTAL:L,DIRECTION_VERTICAL:G,DIRECTION_ALL:ee,Manager:Yt,Input:D,TouchAction:wt,TouchInput:Et,MouseInput:Tt,PointerEventInput:At,TouchMouseInput:Dt,SingleTouchInput:ue,Recognizer:F,AttrRecognizer:w,Tap:St,Pan:It,Swipe:Ht,Pinch:Lt,Rotate:Ut,Press:zt,on:ct,off:ft,each:x,merge:Fe,extend:jt,assign:C,inherit:A,bindFn:Nt,prefixed:mt});var xn=typeof o<"u"?o:typeof self<"u"?self:{};xn.Hammer=X,typeof a=="function"&&a.amd?a(function(){return X}):e.exports?e.exports=X:o[l]=X})(window,document,"Hammer")})(Ce);var Sn=Ce.exports;const at=In(Sn);/*!
* chartjs-plugin-zoom v2.0.1
* undefined
 * (c) 2016-2023 chartjs-plugin-zoom Contributors
 * Released under the MIT License
 */const ut=e=>e&&e.enabled&&e.modifierKey,be=(e,o)=>e&&o[e+"Key"],Gt=(e,o)=>e&&!o[e+"Key"];function W(e,o,r){return e===void 0?!0:typeof e=="string"?e.indexOf(o)!==-1:typeof e=="function"?e({chart:r}).indexOf(o)!==-1:!1}function Ft(e,o){return typeof e=="function"&&(e=e({chart:o})),typeof e=="string"?{x:e.indexOf("x")!==-1,y:e.indexOf("y")!==-1}:{x:!1,y:!1}}function _n(e,o){let r;return function(){return clearTimeout(r),r=setTimeout(e,o),o}}function On({x:e,y:o},r){const l=r.scales,a=Object.keys(l);for(let u=0;u<a.length;u++){const c=l[a[u]];if(o>=c.top&&o<=c.bottom&&e>=c.left&&e<=c.right)return c}return null}function Me(e,o,r){const{mode:l="xy",scaleMode:a,overScaleMode:u}=e||{},c=On(o,r),d=Ft(l,r),m=Ft(a,r);if(u){const p=Ft(u,r);for(const E of["x","y"])p[E]&&(m[E]=d[E],d[E]=!1)}if(c&&m[c.axis])return[c];const v=[];return k(r.scales,function(p){d[p.axis]&&v.push(p)}),v}const Vt=new WeakMap;function y(e){let o=Vt.get(e);return o||(o={originalScaleLimits:{},updatedScaleLimits:{},handlers:{},panDelta:{}},Vt.set(e,o)),o}function Nn(e){Vt.delete(e)}function Ae(e,o,r){const l=e.max-e.min,a=l*(o-1),u=e.isHorizontal()?r.x:r.y,c=Math.max(0,Math.min(1,(e.getValueForPixel(u)-e.min)/l||0)),d=1-c;return{min:a*c,max:a*d}}function Pe(e,o,r,l,a){let u=r[l];if(u==="original"){const c=e.originalScaleLimits[o.id][l];u=Ot(c.options,c.scale)}return Ot(u,a)}function Cn(e,o,r){const l=e.getValueForPixel(o),a=e.getValueForPixel(r);return{min:Math.min(l,a),max:Math.max(l,a)}}function J(e,{min:o,max:r},l,a=!1){const u=y(e.chart),{id:c,axis:d,options:m}=e,v=l&&(l[c]||l[d])||{},{minRange:p=0}=v,E=Pe(u,e,v,"min",-1/0),T=Pe(u,e,v,"max",1/0),x=a?Math.max(r-o,p):e.max-e.min,H=(x-r+o)/2;return o-=H,r+=H,o<E?(o=E,r=Math.min(E+x,T)):r>T&&(r=T,o=Math.max(T-x,E)),m.min=o,m.max=r,u.updatedScaleLimits[e.id]={min:o,max:r},e.parse(o)!==e.min||e.parse(r)!==e.max}function bn(e,o,r,l){const a=Ae(e,o,r),u={min:e.min+a.min,max:e.max-a.max};return J(e,u,l,!0)}function Mn(e,o,r,l){J(e,Cn(e,o,r),l,!0)}const xe=e=>e===0||isNaN(e)?0:e<0?Math.min(Math.round(e),-1):Math.max(Math.round(e),1);function An(e){const r=e.getLabels().length-1;e.min>0&&(e.min-=1),e.max<r&&(e.max+=1)}function Dn(e,o,r,l){const a=Ae(e,o,r);e.min===e.max&&o<1&&An(e);const u={min:e.min+xe(a.min),max:e.max-xe(a.max)};return J(e,u,l,!0)}function Rn(e){return e.isHorizontal()?e.width:e.height}function wn(e,o,r){const a=e.getLabels().length-1;let{min:u,max:c}=e;const d=Math.max(c-u,1),m=Math.round(Rn(e)/Math.max(d,10)),v=Math.round(Math.abs(o/m));let p;return o<-m?(c=Math.min(c+v,a),u=d===1?c:c-d,p=c===a):o>m&&(u=Math.max(0,u-v),c=d===1?u:u+d,p=u===0),J(e,{min:u,max:c},r)||p}const Ln={second:500,minute:30*1e3,hour:30*60*1e3,day:12*60*60*1e3,week:3.5*24*60*60*1e3,month:15*24*60*60*1e3,quarter:60*24*60*60*1e3,year:182*24*60*60*1e3};function De(e,o,r,l=!1){const{min:a,max:u,options:c}=e,d=c.time&&c.time.round,m=Ln[d]||0,v=e.getValueForPixel(e.getPixelForValue(a+m)-o),p=e.getValueForPixel(e.getPixelForValue(u+m)-o),{min:E=-1/0,max:T=1/0}=l&&r&&r[e.axis]||{};return isNaN(v)||isNaN(p)||v<E||p>T?!0:J(e,{min:v,max:p},r,l)}function Ie(e,o,r){return De(e,o,r,!0)}const Wt={category:Dn,default:bn},kt={default:Mn},Zt={category:wn,default:De,logarithmic:Ie,timeseries:Ie};function zn(e,o,r){const{id:l,options:{min:a,max:u}}=e;if(!o[l]||!r[l])return!0;const c=r[l];return c.min!==a||c.max!==u}function Se(e,o){k(e,(r,l)=>{o[l]||delete e[l]})}function Q(e,o){const{scales:r}=e,{originalScaleLimits:l,updatedScaleLimits:a}=o;return k(r,function(u){zn(u,l,a)&&(l[u.id]={min:{scale:u.min,options:u.options.min},max:{scale:u.max,options:u.options.max}})}),Se(l,r),Se(a,r),l}function _e(e,o,r,l){const a=Wt[e.type]||Wt.default;S(a,[e,o,r,l])}function Oe(e,o,r,l,a){const u=kt[e.type]||kt.default;S(u,[e,o,r,l,a])}function Un(e){const o=e.chartArea;return{x:(o.left+o.right)/2,y:(o.top+o.bottom)/2}}function Bt(e,o,r="none"){const{x:l=1,y:a=1,focalPoint:u=Un(e)}=typeof o=="number"?{x:o,y:o}:o,c=y(e),{options:{limits:d,zoom:m}}=c;Q(e,c);const v=l!==1,p=a!==1,E=Me(m,u,e);k(E||e.scales,function(T){T.isHorizontal()&&v?_e(T,l,u,d):!T.isHorizontal()&&p&&_e(T,a,u,d)}),e.update(r),S(m.onZoom,[{chart:e}])}function Re(e,o,r,l="none"){const a=y(e),{options:{limits:u,zoom:c}}=a,{mode:d="xy"}=c;Q(e,a);const m=W(d,"x",e),v=W(d,"y",e);k(e.scales,function(p){p.isHorizontal()&&m?Oe(p,o.x,r.x,u):!p.isHorizontal()&&v&&Oe(p,o.y,r.y,u)}),e.update(l),S(c.onZoom,[{chart:e}])}function Hn(e,o,r,l="none"){Q(e,y(e));const a=e.scales[o];J(a,r,void 0,!0),e.update(l)}function Yn(e,o="default"){const r=y(e),l=Q(e,r);k(e.scales,function(a){const u=a.options;l[a.id]?(u.min=l[a.id].min.options,u.max=l[a.id].max.options):(delete u.min,delete u.max)}),e.update(o),S(r.options.zoom.onZoomComplete,[{chart:e}])}function Fn(e,o){const r=e.originalScaleLimits[o];if(!r)return;const{min:l,max:a}=r;return Ot(a.options,a.scale)-Ot(l.options,l.scale)}function Xn(e){const o=y(e);let r=1,l=1;return k(e.scales,function(a){const u=Fn(o,a.id);if(u){const c=Math.round(u/(a.max-a.min)*100)/100;r=Math.min(r,c),l=Math.max(l,c)}}),r<1?r:l}function Ne(e,o,r,l){const{panDelta:a}=l,u=a[e.id]||0;ye(u)===ye(o)&&(o+=u);const c=Zt[e.type]||Zt.default;S(c,[e,o,r])?a[e.id]=0:a[e.id]=o}function we(e,o,r,l="none"){const{x:a=0,y:u=0}=typeof o=="number"?{x:o,y:o}:o,c=y(e),{options:{pan:d,limits:m}}=c,{onPan:v}=d||{};Q(e,c);const p=a!==0,E=u!==0;k(r||e.scales,function(T){T.isHorizontal()&&p?Ne(T,a,m,c):!T.isHorizontal()&&E&&Ne(T,u,m,c)}),e.update(l),S(v,[{chart:e}])}function Le(e){const o=y(e);Q(e,o);const r={};for(const l of Object.keys(e.scales)){const{min:a,max:u}=o.originalScaleLimits[l]||{min:{},max:{}};r[l]={min:a.scale,max:u.scale}}return r}function Vn(e){const o=Le(e);for(const r of Object.keys(e.scales)){const{min:l,max:a}=o[r];if(l!==void 0&&e.scales[r].min!==l||a!==void 0&&e.scales[r].max!==a)return!0}return!1}function M(e,o){const{handlers:r}=y(e),l=r[o];l&&l.target&&(l.target.removeEventListener(o,l),delete r[o])}function lt(e,o,r,l){const{handlers:a,options:u}=y(e),c=a[r];c&&c.target===o||(M(e,r),a[r]=d=>l(e,d,u),a[r].target=o,o.addEventListener(r,a[r]))}function Wn(e,o){const r=y(e);r.dragStart&&(r.dragging=!0,r.dragEnd=o,e.update("none"))}function kn(e,o){const r=y(e);!r.dragStart||o.key!=="Escape"||(M(e,"keydown"),r.dragging=!1,r.dragStart=r.dragEnd=null,e.update("none"))}function ze(e,o,r){const{onZoomStart:l,onZoomRejected:a}=r;if(l){const u=Xt(o,e);if(S(l,[{chart:e,event:o,point:u}])===!1)return S(a,[{chart:e,event:o}]),!1}}function Zn(e,o){const r=y(e),{pan:l,zoom:a={}}=r.options;if(o.button!==0||be(ut(l),o)||Gt(ut(a.drag),o))return S(a.onZoomRejected,[{chart:e,event:o}]);ze(e,o,a)!==!1&&(r.dragStart=o,lt(e,e.canvas,"mousemove",Wn),lt(e,window.document,"keydown",kn))}function Ue(e,o,r,l){const a=W(o,"x",e),u=W(o,"y",e);let{top:c,left:d,right:m,bottom:v,width:p,height:E}=e.chartArea;const T=Xt(r,e),x=Xt(l,e);a&&(d=Math.min(T.x,x.x),m=Math.max(T.x,x.x)),u&&(c=Math.min(T.y,x.y),v=Math.max(T.y,x.y));const H=m-d,C=v-c;return{left:d,top:c,right:m,bottom:v,width:H,height:C,zoomX:a&&H?1+(p-H)/p:1,zoomY:u&&C?1+(E-C)/E:1}}function qn(e,o){const r=y(e);if(!r.dragStart)return;M(e,"mousemove");const{mode:l,onZoomComplete:a,drag:{threshold:u=0}}=r.options.zoom,c=Ue(e,l,r.dragStart,o),d=W(l,"x",e)?c.width:0,m=W(l,"y",e)?c.height:0,v=Math.sqrt(d*d+m*m);if(r.dragStart=r.dragEnd=null,v<=u){r.dragging=!1,e.update("none");return}Re(e,{x:c.left,y:c.top},{x:c.right,y:c.bottom},"zoom"),setTimeout(()=>r.dragging=!1,500),S(a,[{chart:e}])}function Gn(e,o,r){if(Gt(ut(r.wheel),o)){S(r.onZoomRejected,[{chart:e,event:o}]);return}if(ze(e,o,r)!==!1&&(o.cancelable&&o.preventDefault(),o.deltaY!==void 0))return!0}function Bn(e,o){const{handlers:{onZoomComplete:r},options:{zoom:l}}=y(e);if(!Gn(e,o,l))return;const a=o.target.getBoundingClientRect(),u=1+(o.deltaY>=0?-l.wheel.speed:l.wheel.speed),c={x:u,y:u,focalPoint:{x:o.clientX-a.left,y:o.clientY-a.top}};Bt(e,c),r&&r()}function jn(e,o,r,l){r&&(y(e).handlers[o]=_n(()=>S(r,[{chart:e}]),l))}function Kn(e,o){const r=e.canvas,{wheel:l,drag:a,onZoomComplete:u}=o.zoom;l.enabled?(lt(e,r,"wheel",Bn),jn(e,"onZoomComplete",u,250)):M(e,"wheel"),a.enabled?(lt(e,r,"mousedown",Zn),lt(e,r.ownerDocument,"mouseup",qn)):(M(e,"mousedown"),M(e,"mousemove"),M(e,"mouseup"),M(e,"keydown"))}function Jn(e){M(e,"mousedown"),M(e,"mousemove"),M(e,"mouseup"),M(e,"wheel"),M(e,"click"),M(e,"keydown")}function Qn(e,o){return function(r,l){const{pan:a,zoom:u={}}=o.options;if(!a||!a.enabled)return!1;const c=l&&l.srcEvent;return c&&!o.panning&&l.pointerType==="mouse"&&(Gt(ut(a),c)||be(ut(u.drag),c))?(S(a.onPanRejected,[{chart:e,event:l}]),!1):!0}}function $n(e,o){const r=Math.abs(e.clientX-o.clientX),l=Math.abs(e.clientY-o.clientY),a=r/l;let u,c;return a>.3&&a<1.7?u=c=!0:r>l?u=!0:c=!0,{x:u,y:c}}function He(e,o,r){if(o.scale){const{center:l,pointers:a}=r,u=1/o.scale*r.scale,c=r.target.getBoundingClientRect(),d=$n(a[0],a[1]),m=o.options.zoom.mode,v={x:d.x&&W(m,"x",e)?u:1,y:d.y&&W(m,"y",e)?u:1,focalPoint:{x:l.x-c.left,y:l.y-c.top}};Bt(e,v),o.scale=r.scale}}function ti(e,o){o.options.zoom.pinch.enabled&&(o.scale=1)}function ei(e,o,r){o.scale&&(He(e,o,r),o.scale=null,S(o.options.zoom.onZoomComplete,[{chart:e}]))}function Ye(e,o,r){const l=o.delta;l&&(o.panning=!0,we(e,{x:r.deltaX-l.x,y:r.deltaY-l.y},o.panScales),o.delta={x:r.deltaX,y:r.deltaY})}function ni(e,o,r){const{enabled:l,onPanStart:a,onPanRejected:u}=o.options.pan;if(!l)return;const c=r.target.getBoundingClientRect(),d={x:r.center.x-c.left,y:r.center.y-c.top};if(S(a,[{chart:e,event:r,point:d}])===!1)return S(u,[{chart:e,event:r}]);o.panScales=Me(o.options.pan,d,e),o.delta={x:0,y:0},clearTimeout(o.panEndTimeout),Ye(e,o,r)}function ii(e,o){o.delta=null,o.panning&&(o.panEndTimeout=setTimeout(()=>o.panning=!1,500),S(o.options.pan.onPanComplete,[{chart:e}]))}const qt=new WeakMap;function oi(e,o){const r=y(e),l=e.canvas,{pan:a,zoom:u}=o,c=new at.Manager(l);u&&u.pinch.enabled&&(c.add(new at.Pinch),c.on("pinchstart",()=>ti(e,r)),c.on("pinch",d=>He(e,r,d)),c.on("pinchend",d=>ei(e,r,d))),a&&a.enabled&&(c.add(new at.Pan({threshold:a.threshold,enable:Qn(e,r)})),c.on("panstart",d=>ni(e,r,d)),c.on("panmove",d=>Ye(e,r,d)),c.on("panend",()=>ii(e,r))),qt.set(e,c)}function ri(e){const o=qt.get(e);o&&(o.remove("pinchstart"),o.remove("pinch"),o.remove("pinchend"),o.remove("panstart"),o.remove("pan"),o.remove("panend"),o.destroy(),qt.delete(e))}var si="2.0.1";function _t(e,o,r){const l=r.zoom.drag,{dragStart:a,dragEnd:u}=y(e);if(l.drawTime!==o||!u)return;const{left:c,top:d,width:m,height:v}=Ue(e,r.zoom.mode,a,u),p=e.ctx;p.save(),p.beginPath(),p.fillStyle=l.backgroundColor||"rgba(225,225,225,0.3)",p.fillRect(c,d,m,v),l.borderWidth>0&&(p.lineWidth=l.borderWidth,p.strokeStyle=l.borderColor||"rgba(225,225,225)",p.strokeRect(c,d,m,v)),p.restore()}var ui={id:"zoom",version:si,defaults:{pan:{enabled:!1,mode:"xy",threshold:10,modifierKey:null},zoom:{wheel:{enabled:!1,speed:.1,modifierKey:null},drag:{enabled:!1,drawTime:"beforeDatasetsDraw",modifierKey:null},pinch:{enabled:!1},mode:"xy"}},start:function(e,o,r){const l=y(e);l.options=r,Object.prototype.hasOwnProperty.call(r.zoom,"enabled")&&console.warn("The option `zoom.enabled` is no longer supported. Please use `zoom.wheel.enabled`, `zoom.drag.enabled`, or `zoom.pinch.enabled`."),(Object.prototype.hasOwnProperty.call(r.zoom,"overScaleMode")||Object.prototype.hasOwnProperty.call(r.pan,"overScaleMode"))&&console.warn("The option `overScaleMode` is deprecated. Please use `scaleMode` instead (and update `mode` as desired)."),at&&oi(e,r),e.pan=(a,u,c)=>we(e,a,u,c),e.zoom=(a,u)=>Bt(e,a,u),e.zoomRect=(a,u,c)=>Re(e,a,u,c),e.zoomScale=(a,u,c)=>Hn(e,a,u,c),e.resetZoom=a=>Yn(e,a),e.getZoomLevel=()=>Xn(e),e.getInitialScaleBounds=()=>Le(e),e.isZoomedOrPanned=()=>Vn(e)},beforeEvent(e){const o=y(e);if(o.panning||o.dragging)return!1},beforeUpdate:function(e,o,r){const l=y(e);l.options=r,Kn(e,r)},beforeDatasetsDraw(e,o,r){_t(e,"beforeDatasetsDraw",r)},afterDatasetsDraw(e,o,r){_t(e,"afterDatasetsDraw",r)},beforeDraw(e,o,r){_t(e,"beforeDraw",r)},afterDraw(e,o,r){_t(e,"afterDraw",r)},stop:function(e){Jn(e),at&&ri(e),Nn(e)},panFunctions:Zt,zoomFunctions:Wt,zoomRectFunctions:kt};export{ui as p};
