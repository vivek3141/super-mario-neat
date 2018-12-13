(function(){var h;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={pa:!0},ia={};try{ia.__proto__=ha;fa=ia.pa;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea;
function n(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
var ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},la="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ma(a,b){if(b){for(var c=la,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}}
function na(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
function oa(){oa=function(){};
la.Symbol||(la.Symbol=pa)}
var pa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function qa(){oa();var a=la.Symbol.iterator;a||(a=la.Symbol.iterator=la.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ra(aa(this))}});
qa=function(){}}
function ra(a){qa();a={next:a};a[la.Symbol.iterator]=function(){return this};
return a}
ma("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=na(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
ma("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=na(this,a,"startsWith");a+="";for(var e=b.length,f=a.length,g=Math.max(0,Math.min(c|0,b.length)),k=0;k<f&&g<e;)if(b[g++]!=a[k++])return!1;return k>=f}});
function p(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var sa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)p(d,e)&&(a[e]=d[e])}return a};
ma("Object.assign",function(a){return a||sa});
ma("WeakMap",function(a){function b(a){this.b=(g+=Math.random()+1).toString();if(a){a=ba(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){p(a,f)||ka(a,f,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(u){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(a,b){d(a);if(!p(a,f))throw Error("WeakMap key fail: "+a);a[f][this.b]=b;return this};
b.prototype.get=function(a){return p(a,f)?a[f][this.b]:void 0};
b.prototype.has=function(a){return p(a,f)&&p(a[f],this.b)};
b.prototype["delete"]=function(a){return p(a,f)&&p(a[f],this.b)?delete a[f][this.b]:!1};
return b});
ma("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return ra(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&p(a.f,c))for(var e=0;e<d.length;e++){var k=d[e];if(b!==b&&k.key!==k.key||b===k.key)return{id:c,list:d,index:e,o:k}}return{id:c,list:d,index:-1,o:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=ba(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ba([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(da){return!1}}())return a;
qa();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.o?c.o.value=b:(c.o={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.o),this.b.previous.next=c.o,this.b.previous=c.o,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.o&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.o.previous.next=a.o.next,a.o.next.previous=a.o.previous,a.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).o};
e.prototype.get=function(a){return(a=d(this,a).o)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
ma("Set",function(a){function b(a){this.b=new Map;if(a){a=ba(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ba([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
qa();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
ma("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
ma("String.prototype.includes",function(a){return a?a:function(a,c){return-1!==na(this,a,"includes").indexOf(a,c||0)}});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var q=this;function r(a){return void 0!==a}
function t(a){return"string"==typeof a}
function v(a,b,c){a=a.split(".");c=c||q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&r(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var ta=/^[\w+/_-]+[=]{0,2}$/,ua=null;function w(a,b){for(var c=a.split("."),d=b||q,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function va(){}
function wa(a){a.ca=void 0;a.getInstance=function(){return a.ca?a.ca:a.ca=new a}}
function xa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function x(a){return"array"==xa(a)}
function ya(a){var b=xa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function za(a){return"function"==xa(a)}
function y(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var Aa="closure_uid_"+(1E9*Math.random()>>>0),Ba=0;function Ca(a,b,c){return a.call.apply(a.bind,arguments)}
function Da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function z(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z=Ca:z=Da;return z.apply(null,arguments)}
function Ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var A=Date.now||function(){return+new Date};
function B(a,b){v(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Fa=document,D=window;function E(a){if(Error.captureStackTrace)Error.captureStackTrace(this,E);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
C(E,Error);E.prototype.name="CustomError";var Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(t(a))return t(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ha=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=t(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var k=f[g];
b.call(void 0,k,g,a)&&(d[e++]=k)}return d},Ia=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=t(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ja=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function Ka(a,b){a:{var c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function La(a,b){var c=Ga(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ma(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Na(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ya(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Oa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Pa(a){if(!Qa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ra,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Sa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ta,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ua,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Va,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Wa,"&#0;"));return a}
var Ra=/&/g,Sa=/</g,Ta=/>/g,Ua=/"/g,Va=/'/g,Wa=/\x00/g,Qa=/[\x00&<>"']/;function Xa(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ya;a:{var Za=q.navigator;if(Za){var $a=Za.userAgent;if($a){Ya=$a;break a}}Ya=""}function G(a){return-1!=Ya.indexOf(a)}
;function ab(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function bb(a,b){var c=ya(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function cb(a){var b=db,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function eb(a){for(var b in a)return!1;return!0}
function fb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function gb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function hb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var ib="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ib.length;f++)c=ib[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function kb(a){kb[" "](a);return a}
kb[" "]=va;var lb=G("Opera"),mb=G("Trident")||G("MSIE"),nb=G("Edge"),ob=G("Gecko")&&!(-1!=Ya.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),pb=-1!=Ya.toLowerCase().indexOf("webkit")&&!G("Edge");function qb(){var a=q.document;return a?a.documentMode:void 0}
var rb;a:{var sb="",tb=function(){var a=Ya;if(ob)return/rv:([^\);]+)(\)|;)/.exec(a);if(nb)return/Edge\/([\d\.]+)/.exec(a);if(mb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pb)return/WebKit\/(\S+)/.exec(a);if(lb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
tb&&(sb=tb?tb[1]:"");if(mb){var ub=qb();if(null!=ub&&ub>parseFloat(sb)){rb=String(ub);break a}}rb=sb}var vb=rb,wb;var xb=q.document;wb=xb&&mb?qb()||("CSS1Compat"==xb.compatMode?parseInt(vb,10):5):void 0;var yb=null,zb=null;function Ab(a){this.b=a||{cookie:""}}
h=Ab.prototype;h.isEnabled=function(){return navigator.cookieEnabled};
h.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');r(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(A()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
h.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Oa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
h.remove=function(a,b,c){var d=r(this.get(a));this.set(a,"",0,b,c);return d};
h.isEmpty=function(){return!this.b.cookie};
h.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Oa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Bb=new Ab("undefined"==typeof document?null:document);function Cb(a){var b=w("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if(t(a))return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||q.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&a.constructor instanceof
Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Db[b]?b=Db[b]:(b=String(b),Db[b]||(c=/function\s+([^\(]+)/m.exec(b),Db[b]=c?c[1]:"[Anonymous]"),b=Db[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Db={};function Eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Fb=!mb||9<=Number(wb);function Gb(){this.b="";this.f=Hb}
Gb.prototype.J=!0;Gb.prototype.I=function(){return this.b};
Gb.prototype.ba=!0;Gb.prototype.Y=function(){return 1};
function Ib(a){return a instanceof Gb&&a.constructor===Gb&&a.f===Hb?a.b:"type_error:TrustedResourceUrl"}
var Hb={};function H(){this.b="";this.f=Jb}
H.prototype.J=!0;H.prototype.I=function(){return this.b};
H.prototype.ba=!0;H.prototype.Y=function(){return 1};
function Kb(a){return a instanceof H&&a.constructor===H&&a.f===Jb?a.b:"type_error:SafeUrl"}
var Lb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Mb(a){if(a instanceof H)return a;a="object"==typeof a&&a.J?a.I():String(a);Lb.test(a)||(a="about:invalid#zClosurez");return Nb(a)}
var Jb={};function Nb(a){var b=new H;b.b=a;return b}
Nb("about:blank");function Ob(){this.b="";this.g=Pb;this.f=null}
Ob.prototype.ba=!0;Ob.prototype.Y=function(){return this.f};
Ob.prototype.J=!0;Ob.prototype.I=function(){return this.b};
var Pb={};function Qb(a,b){var c=new Ob;c.b=a;c.f=b;return c}
Qb("<!DOCTYPE html>",0);Qb("",0);Qb("<br>",0);function Rb(a,b){var c=b instanceof H?b:Mb(b);a.href=Kb(c)}
function Sb(a,b){a.src=Ib(b);if(null===ua)b:{var c=q.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&ta.test(c)){ua=c;break b}ua=""}c=ua;c&&a.setAttribute("nonce",c)}
;function Tb(a,b){this.x=r(a)?a:0;this.y=r(b)?b:0}
h=Tb.prototype;h.clone=function(){return new Tb(this.x,this.y)};
h.equals=function(a){return a instanceof Tb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
h.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
h.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
h.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Ub(a,b){this.width=a;this.height=b}
h=Ub.prototype;h.clone=function(){return new Ub(this.width,this.height)};
h.aspectRatio=function(){return this.width/this.height};
h.isEmpty=function(){return!(this.width*this.height)};
h.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
h.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
h.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Vb(a){var b=document;return t(a)?b.getElementById(a):a}
function Wb(a,b){ab(b,function(b,d){b&&"object"==typeof b&&b.J&&(b=b.I());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Xb.hasOwnProperty(d)?a.setAttribute(Xb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Xb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Yb(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Fb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Pa(g.name),'"');if(g.type){f.push(' type="',Pa(g.type),'"');var k={};jb(k,g);delete k.type;g=k}f.push(">");f=f.join("")}f=e.createElement(f);g&&(t(g)?f.className=g:x(g)?f.className=g.join(" "):Wb(f,g));2<d.length&&Zb(e,f,d);return f}
function Zb(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!ya(f)||y(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(y(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(za(f)){g="function"==typeof f.item;break a}}g=!1}F(g?Ma(f):f,d)}}}
function $b(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function ac(a){bc();var b=new Gb;b.b=a;return b}
var bc=va;function cc(){var a=dc;try{var b;if(b=!!a&&null!=a.location.href)a:{try{kb(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
function ec(a){var b=fc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function gc(){var a=[];ec(function(b){a.push(b)});
return a}
var fc={Ra:"allow-forms",Sa:"allow-modals",Ta:"allow-orientation-lock",Ua:"allow-pointer-lock",Va:"allow-popups",Wa:"allow-popups-to-escape-sandbox",Xa:"allow-presentation",Ya:"allow-same-origin",Za:"allow-scripts",ab:"allow-top-navigation",bb:"allow-top-navigation-by-user-activation"},hc=Eb(function(){return gc()});
function ic(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};F(hc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function jc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var kc=!!window.google_async_iframe_id,dc=kc&&window.parent||window;var lc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){return a?decodeURI(a):a}
function J(a,b){return b.match(lc)[a]||null}
function mc(a,b,c){if(x(b))for(var d=0;d<b.length;d++)mc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function nc(a){var b=[],c;for(c in a)mc(c,a[c],b);return b.join("&")}
function oc(a,b){var c=nc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var pc=null;function qc(){var a=q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):A()}
function rc(){var a=void 0===a?q:a;return(a=a.performance)&&a.now?a.now():null}
;function sc(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var K=q.performance,tc=!!(K&&K.mark&&K.measure&&K.clearMarks),uc=Eb(function(){var a;if(a=tc){var b;if(null===pc){pc="";try{a="";try{a=q.top.location.hash}catch(c){a=q.location.hash}a&&(pc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=pc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function vc(){var a=wc;this.events=[];this.f=a||q;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=uc()||(null!=b?b:1>Math.random())}
vc.prototype.disable=function(){this.b=!1;this.events!=this.f.google_js_reporting_queue&&(uc()&&F(this.events,xc),this.events.length=0)};
function xc(a){a&&K&&uc()&&(K.clearMarks("goog_"+a.uniqueId+"_start"),K.clearMarks("goog_"+a.uniqueId+"_end"))}
vc.prototype.start=function(a,b){if(!this.b)return null;var c=rc()||qc();c=new sc(a,b,c);var d="goog_"+c.uniqueId+"_start";K&&uc()&&K.mark(d);return c};
vc.prototype.end=function(a){if(this.b&&"number"==typeof a.value){var b=rc()||qc();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";K&&uc()&&K.mark(b);this.b&&this.events.push(a)}};if(kc&&!cc()){var yc="."+Fa.domain;try{for(;2<yc.split(".").length&&!cc();)Fa.domain=yc=yc.substr(yc.indexOf(".")+1),dc=window.parent}catch(a){}cc()||(dc=window)}var wc=dc,zc=new vc;if("complete"==wc.document.readyState)wc.google_measure_js_timing||zc.disable();else if(zc.b){var Ac=function(){wc.google_measure_js_timing||zc.disable()},Bc=wc;
Bc.addEventListener&&Bc.addEventListener("load",Ac,!1)};var Cc=(new Date).getTime();function Dc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ec(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],k=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=k^d&(f^k);var u=1518500249}else m=d^f^k,u=1859775393;else 60>c?(m=d&f|k&(d|f),u=2400959708):(m=d^f^k,u=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+u+b[c]&4294967295;l=k;k=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+k&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[m++]=a[d++],u++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>m?c(k,56-m):c(k,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],k=[128],l=1;64>l;++l)k[l]=0;var m,u;a();return{reset:a,update:c,digest:d,ra:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Fc(a,b,c){var d=[],e=[];if(1==(x(c)?2:1))return e=[b,a],F(d,function(a){e.push(a)}),Gc(e.join(" "));
var f=[],g=[];F(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(a){e.push(a)});
a=Gc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Gc(a){var b=Ec();b.update(a);return b.ra().toLowerCase()}
;function Hc(a){var b=Dc(String(q.location.href)),c=q.__OVERRIDE_SID;null==c&&(c=(new Ab(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?q.__SAPISID:q.__APISID,null==b&&(b=(new Ab(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(q.location.href);return d&&b&&c?[c,Fc(Dc(d),b,a||null)].join(" "):null}return null}
;function Ic(a,b){this.g=a;this.h=b;this.f=0;this.b=null}
Ic.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Jc(a,b){a.h(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Kc(a){q.setTimeout(function(){throw a;},0)}
var Lc;
function Mc(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=z(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(r(c.next)){c=c.next;var a=c.ga;c.ga=null;a()}};
return function(a){d.next={ga:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}}
;function Nc(){this.f=this.b=null}
var Pc=new Ic(function(){return new Oc},function(a){a.reset()});
Nc.prototype.add=function(a,b){var c=Pc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Nc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Oc(){this.next=this.scope=this.b=null}
Oc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Oc.prototype.reset=function(){this.next=this.scope=this.b=null};function Qc(a,b){Rc||Sc();Tc||(Rc(),Tc=!0);Uc.add(a,b)}
var Rc;function Sc(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);Rc=function(){a.then(Vc)}}else Rc=function(){var a=Vc;
!za(q.setImmediate)||q.Window&&q.Window.prototype&&!G("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(Lc||(Lc=Mc()),Lc(a)):q.setImmediate(a)}}
var Tc=!1,Uc=new Nc;function Vc(){for(var a;a=Uc.remove();){try{a.b.call(a.scope)}catch(b){Kc(b)}Jc(Pc,a)}Tc=!1}
;function Wc(){this.f=-1}
;function Xc(){this.f=64;this.b=[];this.j=[];this.u=[];this.h=[];this.h[0]=128;for(var a=1;a<this.f;++a)this.h[a]=0;this.i=this.g=0;this.reset()}
C(Xc,Wc);Xc.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.g=0};
function Yc(a,b,c){c||(c=0);var d=a.u;if(t(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],k=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var m=1518500249}else f=c^g^k,m=1859775393;else 60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+k&4294967295;a.b[4]=a.b[4]+l&4294967295}
Xc.prototype.update=function(a,b){if(null!=a){r(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.g;d<b;){if(0==f)for(;d<=c;)Yc(this,a,d),d+=this.f;if(t(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){Yc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){Yc(this,e);f=0;break}}this.g=f;this.i+=b}};
Xc.prototype.digest=function(){var a=[],b=8*this.i;56>this.g?this.update(this.h,56-this.g):this.update(this.h,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;Yc(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function L(){this.f=this.f;this.u=this.u}
L.prototype.f=!1;L.prototype.dispose=function(){this.f||(this.f=!0,this.l())};
function Zc(a,b){a.f?r(void 0)?b.call(void 0):b():(a.u||(a.u=[]),a.u.push(r(void 0)?z(b,void 0):b))}
L.prototype.l=function(){if(this.u)for(;this.u.length;)this.u.shift()()};
function $c(a){a&&"function"==typeof a.dispose&&a.dispose()}
function ad(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ya(d)?ad.apply(null,d):$c(d)}}
;function bd(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function cd(a,b){if(a.classList)var c=a.classList.contains(b);else c=bd(a),c=0<=Ga(c,b);return c}
function dd(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):cd(a,"inverted-hdpi")&&(a.className=Ha(bd(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var ed="StopIteration"in q?q.StopIteration:{message:"StopIteration",stack:""};function fd(){}
fd.prototype.next=function(){throw ed;};
fd.prototype.F=function(){return this};
function gd(a){if(a instanceof fd)return a;if("function"==typeof a.F)return a.F(!1);if(ya(a)){var b=0,c=new fd;c.next=function(){for(;;){if(b>=a.length)throw ed;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function hd(a,b){if(ya(a))try{F(a,b,void 0)}catch(c){if(c!==ed)throw c;}else{a=gd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==ed)throw c;}}}
function id(a){if(ya(a))return Ma(a);a=gd(a);var b=[];hd(a,function(a){b.push(a)});
return b}
;function jd(a,b){this.g={};this.b=[];this.h=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof jd)for(c=kd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function kd(a){ld(a);return a.b.concat()}
h=jd.prototype;h.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||md;ld(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function md(a,b){return a===b}
h.isEmpty=function(){return 0==this.f};
h.clear=function(){this.g={};this.h=this.f=this.b.length=0};
h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.h++,this.b.length>2*this.f&&ld(this),!0):!1};
function ld(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.h++);this.g[a]=b};
h.forEach=function(a,b){for(var c=kd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
h.clone=function(){return new jd(this)};
h.F=function(a){ld(this);var b=0,c=this.h,d=this,e=new fd;e.next=function(){if(c!=d.h)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw ed;var e=d.b[b++];return a?e:d.g[e]};
return e};function nd(a){var b=[];od(new pd,a,b);return b.join("")}
function pd(){}
function od(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(x(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),od(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),qd(d,c),c.push(":"),od(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":qd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var rd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},sd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function qd(a,b){b.push('"',a.replace(sd,function(a){var b=rd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),rd[a]=b);return b}),'"')}
;function td(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function M(a){this.b=0;this.u=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=va)try{var b=this;a.call(void 0,function(a){ud(b,2,a)},function(a){ud(b,3,a)})}catch(c){ud(this,3,c)}}
function vd(){this.next=this.context=this.onRejected=this.f=this.b=null;this.g=!1}
vd.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.g=!1};
var wd=new Ic(function(){return new vd},function(a){a.reset()});
function xd(a,b,c){var d=wd.get();d.f=a;d.onRejected=b;d.context=c;return d}
function yd(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return zd(this,za(a)?a:null,za(b)?b:null,c)};
M.prototype.$goog_Thenable=!0;function Ad(a,b){return zd(a,null,b,void 0)}
M.prototype.cancel=function(a){0==this.b&&Qc(function(){var b=new Bd(a);Cd(this,b)},this)};
function Cd(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.g||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Cd(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Ed(c),Fd(c,e,3,b)))}a.g=null}else ud(a,3,b)}
function Gd(a,b){a.f||2!=a.b&&3!=a.b||Hd(a);a.h?a.h.next=b:a.f=b;a.h=b}
function zd(a,b,c,d){var e=xd(null,null,null);e.b=new M(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!r(e)&&b instanceof Bd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Gd(a,e);return e.b}
M.prototype.w=function(a){this.b=0;ud(this,2,a)};
M.prototype.B=function(a){this.b=0;ud(this,3,a)};
function ud(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.w,f=a.B;if(d instanceof M){Gd(d,xd(e||va,f||null,a));var g=!0}else if(td(d))d.then(e,f,a),g=!0;else{if(y(d))try{var k=d.then;if(za(k)){Id(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}g||(a.u=c,a.b=b,a.g=null,Hd(a),3!=b||c instanceof Bd||Jd(a,c))}}
function Id(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Hd(a){a.j||(a.j=!0,Qc(a.m,a))}
function Ed(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
M.prototype.m=function(){for(var a;a=Ed(this);)Fd(this,a,this.b,this.u);this.j=!1};
function Fd(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Kd(b,c,d);else try{b.g?b.f.call(b.context):Kd(b,c,d)}catch(e){Ld.call(null,e)}Jc(wd,b)}
function Kd(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Jd(a,b){a.i=!0;Qc(function(){a.i&&Ld.call(null,b)})}
var Ld=Kc;function Bd(a){E.call(this,a)}
C(Bd,E);Bd.prototype.name="cancel";function N(a){L.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.g={};this.m=!!a}
C(N,L);h=N.prototype;h.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Md(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Ka(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
h.L=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.b[a+1]=va):(c&&La(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
h.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Nd(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.L(c)}}return 0!=e}return!1};
function Nd(a,b,c){Qc(function(){a.apply(b,c)})}
h.clear=function(a){if(a){var b=this.g[a];b&&(F(b,this.L,this),delete this.g[a])}else this.b.length=0,this.g={}};
h.l=function(){N.A.l.call(this);this.clear();this.h.length=0};function Od(a){this.b=a}
Od.prototype.set=function(a,b){r(b)?this.b.set(a,nd(b)):this.b.remove(a)};
Od.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Od.prototype.remove=function(a){this.b.remove(a)};function Pd(a){this.b=a}
C(Pd,Od);function Qd(a){this.data=a}
function Rd(a){return!r(a)||a instanceof Qd?a:new Qd(a)}
Pd.prototype.set=function(a,b){Pd.A.set.call(this,a,Rd(b))};
Pd.prototype.f=function(a){a=Pd.A.get.call(this,a);if(!r(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Pd.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!r(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Sd(a){this.b=a}
C(Sd,Pd);Sd.prototype.set=function(a,b,c){if(b=Rd(b)){if(c){if(c<A()){Sd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=A()}Sd.A.set.call(this,a,b)};
Sd.prototype.f=function(a){var b=Sd.A.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<A()||c&&c>A())Sd.prototype.remove.call(this,a);else return b}};function Td(){}
;function Ud(){}
C(Ud,Td);Ud.prototype.clear=function(){var a=id(this.F(!0)),b=this;F(a,function(a){b.remove(a)})};function Vd(a){this.b=a}
C(Vd,Ud);h=Vd.prototype;h.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
h.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
h.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeItem(a)};
h.F=function(a){var b=0,c=this.b,d=new fd;d.next=function(){if(b>=c.length)throw ed;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){this.b.clear()};
h.key=function(a){return this.b.key(a)};function Wd(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
C(Wd,Vd);function Xd(a,b){this.f=a;this.b=null;if(mb&&!(9<=Number(wb))){Yd||(Yd=new jd);this.b=Yd.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Yd.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
C(Xd,Ud);var Zd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Yd=null;function $d(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Zd[a]})}
h=Xd.prototype;h.isAvailable=function(){return!!this.b};
h.set=function(a,b){this.b.setAttribute($d(a),b);ae(this)};
h.get=function(a){a=this.b.getAttribute($d(a));if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
h.remove=function(a){this.b.removeAttribute($d(a));ae(this)};
h.F=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new fd;d.next=function(){if(b>=c.length)throw ed;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
h.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ae(this)};
function ae(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function be(a,b){this.f=a;this.b=b+"::"}
C(be,Ud);be.prototype.set=function(a,b){this.f.set(this.b+a,b)};
be.prototype.get=function(a){return this.f.get(this.b+a)};
be.prototype.remove=function(a){this.f.remove(this.b+a)};
be.prototype.F=function(a){var b=this.f.F(!0),c=this,d=new fd;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function ce(){this.f=[];this.b=-1}
ce.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
ce.prototype.get=function(a){return!!this.f[a]};
function de(a){-1==a.b&&(a.b=Ja(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;function ee(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var O=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var fe=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",fe,void 0);function P(a){ee(fe,arguments)}
function Q(a,b){return a in fe?fe[a]:b}
function ge(a){return Q(a,void 0)}
function he(){return Q("PLAYER_CONFIG",{})}
;function ie(){var a=je;w("yt.ads.biscotti.getId_")||v("yt.ads.biscotti.getId_",a,void 0)}
function ke(a){v("yt.ads.biscotti.lastId_",a,void 0)}
;function le(a){var b=me;a=void 0===a?w("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(ne(b),oe(b));b.ca_type="image";a&&(b.bid=a);return b}
function ne(a){var b={};b.dt=Cc;b.flash="0";a:{try{var c=a.b.top.location.href}catch(f){a=2;break a}a=c?c===a.f.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?D:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!D.navigator&&"unknown"!==typeof D.navigator.javaEnabled&&!!D.navigator.javaEnabled&&D.navigator.javaEnabled();D.screen&&(b.u_h=D.screen.height,b.u_w=D.screen.width,b.u_ah=D.screen.availHeight,b.u_aw=D.screen.availWidth,b.u_cd=D.screen.colorDepth);
D.navigator&&D.navigator.plugins&&(b.u_nplug=D.navigator.plugins.length);D.navigator&&D.navigator.mimeTypes&&(b.u_nmime=D.navigator.mimeTypes.length);return b}
function oe(a){var b=a.b;try{var c=b.screenX;var d=b.screenY}catch(da){}try{var e=b.outerWidth;var f=b.outerHeight}catch(da){}try{var g=b.innerWidth;var k=b.innerHeight}catch(da){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.b.top;try{var l=(c||window).document,m="CSS1Compat"==l.compatMode?l.documentElement:l.body;var u=(new Ub(m.clientWidth,m.clientHeight)).round()}catch(da){u=new Ub(-12245933,-12245933)}l=u;u={};m=new ce;q.SVGElement&&
q.document.createElementNS&&m.set(0);c=ic();c["allow-top-navigation-by-user-activation"]&&m.set(1);c["allow-popups-to-escape-sandbox"]&&m.set(2);q.crypto&&q.crypto.subtle&&m.set(3);m=de(m);u.bc=m;u.bih=l.height;u.biw=l.width;u.brdim=b.join();a=a.f;return u.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,u.wgl=!!D.WebGLRenderingContext,u}
var me=new function(){var a=window.document;this.b=window;this.f=a};A();function pe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){R(b)}}:a}
function R(a,b,c,d,e){var f=w("yt.logging.errors.log");f?f(a,b,c,d,e):(f=Q("ERRORS",[]),f.push([a,b,c,d,e]),P("ERRORS",f))}
function qe(a){R(a,"WARNING",void 0,void 0,void 0)}
;function S(a){return Q("EXPERIMENT_FLAGS",{})[a]}
;var re=r(XMLHttpRequest)?function(){return new XMLHttpRequest}:r(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function se(){if(!re)return null;var a=re();return"open"in a?a:null}
function te(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){za(a)&&(a=pe(a));return window.setTimeout(a,b)}
function U(a){window.clearTimeout(a)}
;function ue(a){var b=[];ab(a,function(a,d){var c=encodeURIComponent(String(d)),f;x(a)?f=a:f=[a];F(f,function(a){""==a?b.push(c):b.push(c+"="+encodeURIComponent(String(a)))})});
return b.join("&")}
function ve(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?x(b[f])?Na(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function we(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ve(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return oc(a,e)+d}
;var xe={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ye="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
ze=!1;
function Ae(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(1,a),e=I(J(3,a));d&&e?(d=c,c=a.match(lc),d=d.match(lc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?I(J(3,c))==e&&(Number(J(4,c))||null)==(Number(J(4,a))||null):!0;d=!!S("web_ajax_ignore_global_headers_if_set");for(var f in xe)e=Q(xe[f]),!e||!c&&!Be(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Be(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();S("pass_biscotti_id_in_header_ajax")&&(c||Be(a,"X-YouTube-Ad-Signals"))&&
(f=le(void 0),b["X-YouTube-Ad-Signals"]=ue(f));return b}
function Ce(a){var b=window.location.search,c=I(J(3,a)),d=I(J(5,a));d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ve(b),f={};F(ye,function(a){e[a]&&(f[a]=e[a])});
return we(a,f||{},!1)}
function Be(a,b){var c=Q("CORS_HEADER_WHITELIST")||{},d=I(J(3,a));return d?(c=c[d])?0<=Ga(c,b):!1:!0}
function De(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ee(a,b);var d=Fe(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&U(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||q;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ea&&b.ea.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.ia&&0<b.timeout&&(f=T(function(){e||(e=!0,U(f),b.ia.call(b.context||q))},b.timeout))}else Ge(a,b)}
function Ge(a,b){var c=b.format||"JSON";a=Ee(a,b);var d=Fe(a,b),e=!1,f,g=He(a,function(a){if(!e){e=!0;f&&U(f);var d=te(a),g=null,k=400<=a.status&&500>a.status,da=500<=a.status&&600>a.status;if(d||k||da)g=Ie(c,a,b.hb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};k=b.context||q;d?b.onSuccess&&b.onSuccess.call(k,a,g):b.onError&&b.onError.call(k,a,g);b.ea&&b.ea.call(k,a,g)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.M&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),U(f),b.M.call(b.context||q,g))},b.timeout));
return g}
function Ee(a,b){b.wa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.Qa;d&&(d[c]&&delete d[c],a=we(a,d||{},!0));return a}
function Fe(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=ge("XSRF_FIELD_NAME"),k;b.headers&&(k=b.headers["Content-Type"]);b.ib||I(J(3,a))&&!b.withCredentials&&I(J(3,a))!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&t(e)&&(e=ve(e),jb(e,f),e=b.ja&&"JSON"==b.ja?JSON.stringify(e):nc(e));f=e||f&&!eb(f);!ze&&f&&"POST"!=b.method&&(ze=!0,R(Error("AJAX request with postData should use POST")));
return e}
function Ie(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Je(b):null)d={},F(b.getElementsByTagName("*"),function(a){d[a.tagName]=Ke(a)})}c&&Le(d);
return d}
function Le(a){if(y(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Qb(a[b],null);a[c]=d}else Le(a[b])}}
function Je(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ke(a){var b="";F(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Me(a,b){b.method="POST";b.C||(b.C={});Ge(a,b)}
function He(a,b,c,d,e,f,g){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&pe(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=se();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=Ce(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ae(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var Ne={},Oe=0;
function Pe(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Ya,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.J?a.I():String(a),Lb.test(a)||(a="about:invalid#zClosurez"),a=Nb(a)),b=Kb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Ob?a=b:(d="object"==typeof b,a=null,d&&b.ba&&(a=b.Y()),b=Pa(d&&b.J?b.I():String(b)),a=Qb(b,a)),a=encodeURIComponent(String(nd(a instanceof Ob&&a.constructor===Ob&&a.g===Pb?a.b:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=
Yb("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?He(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?He(a,b,"GET","",d):Qe(a,b))}
function Qe(a,b){var c=new Image,d=""+Oe++;Ne[d]=c;c.onload=c.onerror=function(){b&&Ne[d]&&b();delete Ne[d]};
c.src=a}
;var Re={},Se=0;
function Te(a,b,c,d,e,f){f=f||{};f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(!(!a||!e||5<=Se||(c=a.stacktrace,d=a.columnNumber,a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params).substr(0,500)),a=Cb(a),c=c||a.stack,e=a.lineNumber.toString(),isNaN(e)||isNaN(d)||(e=e+":"+d),window.yterr&&za(window.yterr)&&window.yterr(a),
Re[a.message]||0<=c.indexOf("/YouTubeCenter.js")||0<=c.indexOf("/mytube.js")))){b={Qa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:e,level:b,"client.name":f.name},C:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(b["client.version"]=f.version);c&&(b.C.stack=c);for(var g in f)b.C["client."+g]=f[g];if(g=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var k in g)b.C[k]=g[k];Ge(Q("ECATCHER_REPORT_HOST","")+"/error_204",b);Re[a.message]=
!0;Se++}}
;var Ue=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};v("yt.msgs_",Ue,void 0);function Ve(a){ee(Ue,arguments)}
;function We(a){a&&(a.dataset?a.dataset[Xe("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ye(a,b){return a?a.dataset?a.dataset[Xe(b)]:a.getAttribute("data-"+b):null}
var Ze={};function Xe(a){return Ze[a]||(Ze[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var $e=w("ytPubsubPubsubInstance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.L;N.prototype.publish=N.prototype.K;N.prototype.clear=N.prototype.clear;v("ytPubsubPubsubInstance",$e,void 0);var af=w("ytPubsubPubsubSubscribedKeys")||{};v("ytPubsubPubsubSubscribedKeys",af,void 0);var bf=w("ytPubsubPubsubTopicToKeys")||{};v("ytPubsubPubsubTopicToKeys",bf,void 0);var cf=w("ytPubsubPubsubIsSynchronous")||{};v("ytPubsubPubsubIsSynchronous",cf,void 0);
function df(a,b){var c=ef();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){af[d]&&b.apply(window,c)};
try{cf[a]?f():T(f,0)}catch(g){R(g)}},void 0);
af[d]=!0;bf[a]||(bf[a]=[]);bf[a].push(d);return d}return 0}
function ff(a){var b=ef();b&&("number"==typeof a?a=[a]:t(a)&&(a=[parseInt(a,10)]),F(a,function(a){b.unsubscribeByKey(a);delete af[a]}))}
function gf(a,b){var c=ef();c&&c.publish.apply(c,arguments)}
function hf(a){var b=ef();if(b)if(b.clear(a),a)jf(a);else for(var c in bf)jf(c)}
function ef(){return w("ytPubsubPubsubInstance")}
function jf(a){bf[a]&&(a=bf[a],F(a,function(a){af[a]&&delete af[a]}),a.length=0)}
;var kf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,lf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function mf(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(kf,""),c=c.replace(lf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else nf(a,b,c)}
function nf(a,b,c){c=void 0===c?null:c;var d=of(a),e=document.getElementById(d),f=e&&Ye(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=df(d,b),b=""+(b[Aa]||(b[Aa]=++Ba)),pf[b]=f),g||(e=qf(a,d,function(){Ye(e,"loaded")||(We(e),gf(d),T(Ea(hf,d),0))},c)))}
function qf(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Sb(e,ac(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function rf(a){a=of(a);var b=document.getElementById(a);b&&(hf(a),b.parentNode.removeChild(b))}
function sf(a,b){if(a&&b){var c=""+(b[Aa]||(b[Aa]=++Ba));(c=pf[c])&&ff(c)}}
function of(a){var b=document.createElement("a");Rb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Xa(a)}
var pf={};function tf(){}
function uf(a,b){return vf(a,1,b)}
;function wf(){}
n(wf,tf);function vf(a,b,c){isNaN(c)&&(c=void 0);var d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function xf(a){if(!isNaN(a)){var b=w("yt.scheduler.instance.cancelJob");b?b(a):U(a)}}
wf.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
wf.prototype.pause=function(){var a=w("yt.scheduler.instance.pause");a&&a()};
wa(wf);wf.getInstance();var yf=[],zf=!1;function Af(){if("1"!=bb(he(),"args","privembed")){var a=function(){zf=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
mf("//static.doubleclick.net/instream/ad_status.js",a);yf.push(uf(function(){zf||"google_ad_status"in window||(sf("//static.doubleclick.net/instream/ad_status.js",a),zf=!0,P("DCLKSTAT",3))},5E3))}}
function Bf(){return parseInt(Q("DCLKSTAT",0),10)}
;function Cf(){this.f=!1;this.b=null}
Cf.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.f=!0,mf(b,function(){f.f=!1;window.botguard?Df(f,c,d):(rf(b),qe(Error("Unable to load Botguard from "+b)))},e)):a&&(eval(a),window.botguard?Df(this,c,d):qe(Error("Unable to load Botguard from JS")))};
function Df(a,b,c){try{a.b=new botguard.bg(b)}catch(d){qe(d)}c&&c(b)}
Cf.prototype.dispose=function(){this.b=null};var Ef=new Cf,Ff=!1,Gf=0,Hf="";function If(a){S("botguard_periodic_refresh")?Gf=O():S("botguard_always_refresh")&&(Hf=a)}
function Jf(a){if(a){if(Ef.f)return!1;if(S("botguard_periodic_refresh"))return 72E5<O()-Gf;if(S("botguard_always_refresh"))return Hf!=a}else return!1;return!Ff}
function Kf(){return!!Ef.b}
function Lf(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Ef.b?Ef.b.invoke(void 0,void 0,a):null}
;var Mf=0;v("ytDomDomGetNextId",w("ytDomDomGetNextId")||function(){return++Mf},void 0);var Nf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Of(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Nf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function Pf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
Of.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Of.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Of.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var db=w("ytEventsEventsListeners")||{};v("ytEventsEventsListeners",db,void 0);var Qf=w("ytEventsEventsCounter")||{count:0};v("ytEventsEventsCounter",Qf,void 0);
function Rf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return cb(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=y(e[4])&&y(d)&&gb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Sf=Eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Rf(a,b,c,d);if(e)return e;e=++Qf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Of(d);if(!$b(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Of(b);
b.currentTarget=a;return c.call(a,b)};
g=pe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Sf()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);db[e]=[a,b,c,g,d];return e}
function Tf(a){a&&("string"==typeof a&&(a=[a]),F(a,function(a){if(a in db){var b=db[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Sf()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete db[a]}}))}
;function Uf(a){this.w=a;this.b=null;this.i=0;this.m=null;this.j=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.h=0;this.D=V(window,"mousemove",z(this.G,this));a=z(this.B,this);za(a)&&(a=pe(a));this.H=window.setInterval(a,25)}
C(Uf,L);Uf.prototype.G=function(a){r(a.b)||Pf(a);var b=a.b;r(a.f)||Pf(a);this.b=new Tb(b,a.f)};
Uf.prototype.B=function(){if(this.b){var a=O();if(0!=this.i){var b=this.m,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.g[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.w();this.j=d}this.i=a;this.m=this.b;this.h=(this.h+1)%4}};
Uf.prototype.l=function(){window.clearInterval(this.H);Tf(this.D)};var Vf={};function Wf(a){var b=void 0===a?{}:a;a=void 0===b.b?!0:b.b;b=void 0===b.f?!1:b.f;if(null==w("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?A()-Math.max(c,0):-1;v("_lact",c,window);v("_fact",c,window);-1==c&&Xf();V(document,"keydown",Xf);V(document,"keyup",Xf);V(document,"mousedown",Xf);V(document,"mouseup",Xf);a&&(b?V(window,"touchmove",function(){Yf("touchmove",200)},{passive:!0}):(V(window,"resize",function(){Yf("resize",200)}),V(window,"scroll",function(){Yf("scroll",200)})));
new Uf(function(){Yf("mouse",100)});
V(document,"touchstart",Xf,{passive:!0});V(document,"touchend",Xf,{passive:!0})}}
function Yf(a,b){Vf[a]||(Vf[a]=!0,uf(function(){Xf();Vf[a]=!1},b))}
function Xf(){null==w("_lact",window)&&Wf();var a=A();v("_lact",a,window);-1==w("_fact",window)&&v("_fact",a,window);(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
function Zf(){var a=w("_lact",window);return null==a?-1:Math.max(A()-a,0)}
;var $f=Math.pow(2,16)-1,ag=null,bg=0,cg={log_event:"events",log_interaction:"interactions"},dg=Object.create(null);dg.log_event="GENERIC_EVENT_LOGGING";dg.log_interaction="INTERACTION_LOGGING";var eg=new Set(["log_event"]),fg={},gg=0,hg=0,W=w("ytLoggingTransportLogPayloadsQueue_")||{};v("ytLoggingTransportLogPayloadsQueue_",W,void 0);var ig=w("ytLoggingTransportTokensToCttTargetIds_")||{};v("ytLoggingTransportTokensToCttTargetIds_",ig,void 0);var jg=w("ytLoggingTransportDispatchedStats_")||{};
v("ytLoggingTransportDispatchedStats_",jg,void 0);v("ytytLoggingTransportCapturedTime_",w("ytLoggingTransportCapturedTime_")||{},void 0);function kg(){U(gg);U(hg);hg=0;if(!eb(W)){for(var a in W){var b=fg[a];b&&(lg(a,b),delete W[a])}eb(W)||mg()}}
function mg(){S("web_gel_timeout_cap")&&!hg&&(hg=T(kg,3E4));U(gg);gg=T(kg,Q("LOGGING_BATCH_TIMEOUT",1E4))}
function ng(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function lg(a,b){var c=cg[a],d=jg[a]||{};jg[a]=d;var e=Math.round(O());for(m in W[a]){var f=b.b;f={client:{hl:f.za,gl:f.ya,clientName:f.xa,clientVersion:f.innertubeContextClientVersion}};var g=window.devicePixelRatio;g&&1!=g&&(f.client.screenDensityFloat=String(g));Q("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(f.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});f={context:f};f[c]=ng(a,m);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=ig[m])a:{var k=
m;if(g.videoId)var l="VIDEO";else if(g.playlistId)l="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:k,scope:l}]}delete ig[m];f.requestTimeMs=e;if(g=ge("EVENT_ID"))l=(Q("BATCH_CLIENT_COUNTER",void 0)||0)+1,l>$f&&(l=1),P("BATCH_CLIENT_COUNTER",l),g={serializedEventId:g,clientCounter:l},f.serializedClientEventId=g,ag&&bg&&S("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:ag,
roundtripMs:bg}),ag=g,bg=0;og(b,a,f,{retry:eg.has(a),onSuccess:pg.bind(this,O())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var m=d.diffCount||0;d.averageTimeBetweenDispatchesMs=m?(d.averageTimeBetweenDispatchesMs*m+c)/(m+1):c;d.diffCount=m+1}d.previousDispatchMs=e}
function pg(a){bg=Math.round(O()-a)}
;function qg(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||O());f[a]=b;f.context={lastActivityMs:String(d?-1:Zf())};e?(a={},e.videoId?a.videoId=e.videoId:e.playlistId&&(a.playlistId=e.playlistId),ig[e.token]=a,e=ng("log_event",e.token)):e=ng("log_event");e.push(f);c&&(fg.log_event=new c);e.length>=(Number(S("web_logging_max_batch")||0)||20)?kg():mg()}
;function rg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.eb||Q("AUTHORIZATION"))||(a?b="Bearer "+w("gapi.auth.getToken")().cb:b=Hc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
function sg(a){a=Object.assign({},a);delete a.Authorization;var b=Hc();if(b){var c=new Xc;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!yb)for(yb={},zb={},c=0;65>c;c++)yb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),zb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=zb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,k=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,u=f>>2;f=(f&3)<<4|k>>4;k=(k&15)<<2|m>>
6;m&=63;l||(m=64,g||(k=64));d.push(c[u],c[f],c[k],c[m])}a.hash=d.join("")}return a}
;function tg(a,b,c,d){Bb.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function ug(){var a=new Wd;(a=a.isAvailable()?new be(a,"yt.innertube"):null)||(a=new Xd("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new Sd(a):null;this.f=document.domain||window.location.hostname}
ug.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,A()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(nd(b))}catch(f){return}else e=escape(b);tg(a,e,c,this.f)};
ug.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=Bb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ug.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;Bb.remove(""+a,"/",void 0===b?"youtube.com":b)};var vg=new ug;function wg(a,b,c,d){if(d)return null;d=vg.get("nextId",!0)||1;var e=vg.get("requests",!0)||{};e[d]={method:a,request:b,authState:sg(c),requestTime:Math.round(O())};vg.set("nextId",d+1,86400,!0);vg.set("requests",e,86400,!0);return d}
function xg(a){var b=vg.get("requests",!0)||{};delete b[a];vg.set("requests",b,86400,!0)}
function yg(a){var b=vg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(O())-d.requestTime)){var e=d.authState,f=sg(rg(!1));gb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(O())),og(a,d.method,e,{}));delete b[c]}}vg.set("requests",b,86400,!0)}}
;function zg(a){var b=this;this.b=a||{innertubeApiKey:ge("INNERTUBE_API_KEY"),innertubeApiVersion:ge("INNERTUBE_API_VERSION"),xa:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:ge("INNERTUBE_CONTEXT_CLIENT_VERSION"),za:ge("INNERTUBE_CONTEXT_HL"),ya:ge("INNERTUBE_CONTEXT_GL"),Aa:ge("INNERTUBE_HOST_OVERRIDE")||"",Ba:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};vf(function(){yg(b)},0,5E3)}
function og(a,b,c,d){!Q("VISITOR_DATA")&&.01>Math.random()&&R(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,ja:"JSON",M:function(){d.M()},
ia:d.M,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
ha:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
jb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.Aa;g&&(f=g);g=a.b.Ba||!1;var k=rg(g,f,d);Object.assign(e.headers,k);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=""+f+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey,m;if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=wg(b,c,k,g))){var u=e.onSuccess,da=e.ha;e.onSuccess=function(a,b){xg(m);u(a,b)};
c.ha=function(a,b){xg(m);da(a,b)}}try{S("use_fetch_for_op_xhr")?De(l,e):Me(l,e)}catch(Dd){if("InvalidAccessError"==Dd)m&&(xg(m),m=0),R(Error("An extension is blocking network request."),"WARNING");
else throw Dd;}m&&vf(function(){yg(a)},0,5E3)}
;var Ag=A().toString();
function Bg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=A();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ag)for(a=1,b=0;b<Ag.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ag.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Cg=w("ytLoggingTimeDocumentNonce_")||Bg();v("ytLoggingTimeDocumentNonce_",Cg,void 0);function Dg(a){this.b=a}
function Eg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=Eg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
var Fg=1;function Gg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Hg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ig(a){return Q(Hg(void 0===a?0:a),void 0)}
v("yt.logging.screen.getRootVeType",Ig,void 0);function Jg(){var a=Ig(0),b;a?b=new Dg({veType:a,youtubeData:void 0}):b=null;return b}
function Kg(a){a=void 0===a?0:a;var b=Q(Gg(a));b||0!=a||(b=Q("EVENT_ID"));return b?b:null}
v("yt.logging.screen.getCurrentCsn",Kg,void 0);function Lg(a,b,c){c=void 0===c?0:c;if(a!==Q(Gg(c))||b!==Q(Hg(c)))P(Gg(c),a),P(Hg(c),b),0==c&&(b=function(){setTimeout(function(){a&&qg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Cg,clientScreenNonce:a},zg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
v("yt.logging.screen.setCurrentScreen",Lg,void 0);function Mg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=I(J(3,window.location.href));f&&e.push(f);f=I(J(3,d));if(0<=Ga(e,f)||!f&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(e=document.createElement("a"),Rb(e,d),d=e.href),d){f=d.match(lc);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||Kg();if(k){var k=
parseInt(k,10);isFinite(k)&&0<k&&(d="ST-"+Xa(d).toString(36),b=b?nc(b):"",tg(d,b,k||5))}else k="ST-"+Xa(d).toString(36),b=b?nc(b):"",tg(k,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var u=void 0===u?window:u;c=u.location;a=oc(a,l)+m;a=a instanceof H?a:Mb(a);c.href=Kb(a)}return!0}
;function Ng(a,b,c){a={csn:a,parentVe:Eg(b),childVes:Ia(c,function(a){return Eg(a)})};
qg("visualElementAttached",a,zg)}
;function Og(a){a=a||{};this.url=a.url||"";this.args=a.args||hb(Pg);this.assets=a.assets||{};this.attrs=a.attrs||hb(Qg);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Pg={enablejsapi:1},Qg={};Og.prototype.clone=function(){var a=new Og,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==xa(c)?hb(c):c}return a};function Rg(){L.call(this);this.b=[]}
n(Rg,L);Rg.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.gb)}L.prototype.l.call(this)};var Sg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Tg(a){a=a||"";if(window.spf){var b=a.match(Sg);spf.style.load(a,b?b[1]:"",void 0)}else Ug(a)}
function Ug(a){var b=Vg(a),c=document.getElementById(b),d=c&&Ye(c,"loaded");d||c&&!d||(c=Wg(a,b,function(){Ye(c,"loaded")||(We(c),gf(b),T(Ea(hf,b),0))}))}
function Wg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=ac(a);d.rel="stylesheet";d.href=Ib(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Vg(a){var b=document.createElement("A");a=Nb(a);Rb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Xa(b)}
;function Xg(a,b){L.call(this);this.j=this.T=a;this.D=b;this.m=!1;this.api={};this.P=this.B=null;this.G=new N;Zc(this,Ea($c,this.G));this.h={};this.N=this.R=this.g=this.X=this.b=null;this.H=!1;this.i=this.w=null;this.U={};this.na=["onReady"];this.W=null;this.fa=NaN;this.O={};Yg(this);this.V("WATCH_LATER_VIDEO_ADDED",this.Da.bind(this));this.V("WATCH_LATER_VIDEO_REMOVED",this.Ea.bind(this));this.V("onAdAnnounce",this.qa.bind(this));this.oa=new Rg(this);Zc(this,Ea($c,this.oa))}
n(Xg,L);h=Xg.prototype;
h.da=function(a){if(!this.f){a instanceof Og||(a=new Og(a));this.X=a;this.b=a.clone();this.g=this.b.attrs.id||this.g;"video-player"==this.g&&(this.g=this.D,this.b.attrs.id=this.D);this.j.id==this.g&&(this.g+="-player",this.b.attrs.id=this.g);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.D;this.R||(this.R=Zg(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.j.style.width=jc(Number(a)||a);if(a=this.b.attrs.height)this.j.style.height=jc(Number(a)||
a);$g(this);this.m&&ah(this)}};
h.ta=function(){return this.X};
function ah(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.api.loadVideoByPlayerVars(a.b.args):a.api.cueVideoByPlayerVars(a.b.args))}
function bh(a){var b=!0,c=ch(a);c&&a.b&&(a=a.b,b=Ye(c,"version")==a.assets.js);return b&&!!w("yt.player.Application.create")}
function $g(a){if(!a.f&&!a.H){var b=bh(a);if(b&&"html5"==(ch(a)?"html5":null))a.N="html5",a.m||dh(a);else if(eh(a),a.N="html5",b&&a.i)a.T.appendChild(a.i),dh(a);else{a.b.loaded=!0;var c=!1;a.w=function(){c=!0;var b=a.b.clone();w("yt.player.Application.create")(a.T,b);dh(a)};
a.H=!0;b?a.w():(mf(a.b.assets.js,a.w),Tg(a.b.assets.css),fh(a)&&!c&&v("yt.player.Application.create",null,void 0))}}}
function ch(a){var b=Vb(a.g);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.g));return b}
function dh(a){if(!a.f){var b=ch(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.H=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||gh(a)):a.fa=T(function(){dh(a)},50)}}
function gh(a){Yg(a);a.m=!0;var b=ch(a);b.addEventListener&&(a.B=hh(a,b,"addEventListener"));b.removeEventListener&&(a.P=hh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=hh(a,b,e))}for(var f in a.h)a.B(f,a.h[f]);ah(a);a.R&&a.R(a.api);a.G.K("onReady",a.api)}
function hh(a,b,c){var d=b[c];return function(){try{return a.W=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.W=e,qe(e))}}}
function Yg(a){a.m=!1;if(a.P)for(var b in a.h)a.P(b,a.h[b]);for(var c in a.O)U(parseInt(c,10));a.O={};a.B=null;a.P=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.V.bind(a);a.api.removeEventListener=a.Ha.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.ua.bind(a);a.api.getPlayerType=a.va.bind(a);a.api.getCurrentVideoConfig=a.ta.bind(a);a.api.loadNewVideoConfig=a.da.bind(a);a.api.isReady=a.Ca.bind(a)}
h.Ca=function(){return this.m};
h.V=function(a,b){var c=this,d=Zg(this,b);if(d){if(!(0<=Ga(this.na,a)||this.h[a])){var e=ih(this,a);this.B&&this.B(a,e)}this.G.subscribe(a,d);"onReady"==a&&this.m&&T(function(){d(c.api)},0)}};
h.Ha=function(a,b){if(!this.f){var c=Zg(this,b);c&&Md(this.G,a,c)}};
function Zg(a,b){var c=b;if("string"==typeof b){if(a.U[b])return a.U[b];c=function(){var a=w(b);a&&a.apply(q,arguments)};
a.U[b]=c}return c?c:null}
function ih(a,b){var c="ytPlayer"+b+a.D;a.h[b]=c;q[c]=function(c){var d=T(function(){if(!a.f){a.G.K(b,c);var e=a.O,g=String(d);g in e&&delete e[g]}},0);
fb(a.O,String(d))};
return c}
h.qa=function(a){gf("a11y-announce",a)};
h.Da=function(a){gf("WATCH_LATER_VIDEO_ADDED",a)};
h.Ea=function(a){gf("WATCH_LATER_VIDEO_REMOVED",a)};
h.va=function(){return this.N||(ch(this)?"html5":null)};
h.ua=function(){return this.W};
function eh(a){a.cancel();Yg(a);a.N=null;a.b&&(a.b.loaded=!1);var b=ch(a);b&&(bh(a)||!fh(a)?a.i=b:(b&&b.destroy&&b.destroy(),a.i=null));for(a=a.T;b=a.firstChild;)a.removeChild(b)}
h.cancel=function(){this.w&&sf(this.b.assets.js,this.w);U(this.fa);this.H=!1};
h.l=function(){eh(this);if(this.i&&this.b&&this.i.destroy)try{this.i.destroy()}catch(b){R(b)}this.U=null;for(var a in this.h)q[this.h[a]]=null;this.X=this.b=this.api=null;delete this.T;delete this.j;L.prototype.l.call(this)};
function fh(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var jh={},kh="player_uid_"+(1E9*Math.random()>>>0);function lh(a){var b="player";b=t(b)?Vb(b):b;var c=kh+"_"+(b[Aa]||(b[Aa]=++Ba)),d=jh[c];if(d)return d.da(a),d.api;d=new Xg(b,c);jh[c]=d;gf("player-added",d.api);Zc(d,Ea(mh,d));T(function(){d.da(a)},0);
return d.api}
function mh(a){delete jh[a.D]}
;function nh(a,b,c){var d=zg;Q("ytLoggingEventsDefaultDisabled",!1)&&zg==zg&&(d=null);qg(a,b,d,c,void 0)}
;var oh=w("ytLoggingLatencyUsageStats_")||{};v("ytLoggingLatencyUsageStats_",oh,void 0);var ph=0;function qh(a){oh[a]=oh[a]||{count:0};var b=oh[a];b.count++;b.time=O();ph||(ph=vf(rh,0,5E3));return 10<b.count?(11==b.count&&Te(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function rh(){var a=O(),b;for(b in oh)6E4<a-oh[b].time&&delete oh[b];ph=0}
;function sh(a,b){this.version=a;this.args=b}
;function th(a){this.topic=a}
th.prototype.toString=function(){return this.topic};var uh=w("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.L;N.prototype.publish=N.prototype.K;N.prototype.clear=N.prototype.clear;v("ytPubsub2Pubsub2Instance",uh,void 0);v("ytPubsub2Pubsub2SubscribedKeys",w("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);v("ytPubsub2Pubsub2TopicToKeys",w("ytPubsub2Pubsub2TopicToKeys")||{},void 0);v("ytPubsub2Pubsub2IsAsync",w("ytPubsub2Pubsub2IsAsync")||{},void 0);
v("ytPubsub2Pubsub2SkipSubKey",null,void 0);function vh(a,b){var c=w("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function wh(){var a=Q("TIMING_TICK_EXPIRATION");a||(a={},P("TIMING_TICK_EXPIRATION",a));return a}
function xh(){var a=wh(),b;for(b in a)xf(a[b]);P("TIMING_TICK_EXPIRATION",{})}
;function yh(a,b){sh.call(this,1,arguments)}
n(yh,sh);function zh(a,b){sh.call(this,1,arguments)}
n(zh,sh);var Ah=new th("aft-recorded"),Bh=new th("timing-sent");var Ch={vc:!0},Y={},Dh=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id=
"kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_ad_pr="prerollAllowed",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",
Y.preloaded="tvInfo.isPreloaded",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Eh="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
Fh="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" "),Gh={},Hh=(Gh.yt_pt="LATENCY_PLAYER_",Gh.yt_vst="VIDEO_STREAM_TYPE_",Gh),Ih=!1;
function Jh(){var a=Kh().info.yt_lt="hot_bg";Lh().info_yt_lt=a;if(Mh())if("yt_lt"in Dh){var b=Dh.yt_lt;0<=Ga(Fh,b)&&(a=!!a);"yt_lt"in Hh&&(a=Hh.yt_lt+a.toUpperCase());var c=a;if(Mh()){a={};b=b.split(".");for(var d=a,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=c;c=Nh();b=Object.keys(a).join("");qh("info_"+b+"_"+c)||(a.clientActionNonce=c,nh("latencyActionInfo",a))}}else 0<=Ga(Eh,"yt_lt")||R(Error("Unknown label yt_lt logged with GEL CSI."))}
function Oh(){var a=Ph();if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
z(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||va,X);function Nh(){var a=Kh().nonce;a||(a=Bg(),Kh().nonce=a);return a}
function Ph(){return Kh().tick}
function Lh(){var a=Kh();"gel"in a||(a.gel={});return a.gel}
function Kh(){var a;(a=w("ytcsi.data_"))||(a={tick:{},info:{}},B("ytcsi.data_",a));return a}
function Qh(){var a=Ph(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Kh().info.yt_pvis}
function Mh(){return!!S("csi_on_gel")||!!Kh().useGel}
function Rh(){xh();if(!Mh()){var a=Ph(),b=Kh().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&x(a[f])){var d=f.slice(1);if(d in Ch){var e=Ia(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}e=Q("CSI_SERVICE_NAME","youtube");var f={v:2,s:e,action:Q("TIMING_ACTION",void 0)};d=Jh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var g=window.location.protocol+w("ytplayer.config.assets.js");(g=X.getEntriesByName?X.getEntriesByName(g)[0]:null)?b.h5jse=Math.round(b.h5jse-g.responseEnd):delete b.h5jse}a.aft=Oh();Qh()&&"youtube"==e&&(Jh(),e=a.vc,g=a.pbs,delete a.aft,b.aft=Math.round(g-e));for(var k in b)"_"!=k.charAt(0)&&(f[k]=b[k]);a.ps=O();k={};e=[];for(var l in a)"_"!=
l.charAt(0)&&(g=Math.round(a[l]-c),k[l]=g,e.push(l+"."+g));f.rt=e.join(",");(a=w("ytdebug.logTiming"))&&a(f,k);Sh(f,!!b.ap);vh(Bh,new zh(k.aft+(d||0),void 0))}}
function Sh(a,b){if(S("debug_csi_data")){var c=w("yt.timing.csiData");c||(c=[],v("yt.timing.csiData",c,void 0));c.push({page:location.href,time:new Date,args:a})}c="";for(var d in a)c+="&"+d+"="+a[d];d="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var e=void 0===e?"":e;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(d,e)||Pe(d,void 0,void 0,void 0,e)}catch(f){Pe(d,void 0,void 0,void 0,e)}}else Pe(d);B("yt.timing.pingSent_",!0)}
;function Th(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Uh(a,b,c){t(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Vh(a)}
function Vh(a,b,c){if(y(a)){b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Wh(a,b,c,d){if(y(a)&&!x(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};t(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
;function Xh(a){L.call(this);this.b=a;this.b.subscribe("command",this.ka,this);this.g={};this.i=!1}
C(Xh,L);h=Xh.prototype;h.start=function(){this.i||this.f||(this.i=!0,Yh(this.b,"RECEIVING"))};
h.ka=function(a,b,c){if(this.i&&!this.f){var d=b||{};switch(a){case "addEventListener":t(d.event)&&(a=d.event,a in this.g||(b=z(this.Ja,this,a),this.g[a]=b,this.addEventListener(a,b)));break;case "removeEventListener":t(d.event)&&Zh(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=this.h.handleExternalCall(a,$h(a,b||{}),c||null),(b=ai(a,b))&&this.i&&!this.f&&Yh(this.b,a,b))}}};
h.Ja=function(a,b){this.i&&!this.f&&Yh(this.b,a,this.Z(a,b))};
h.Z=function(a,b){if(null!=b)return{value:b}};
function Zh(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
h.l=function(){var a=this.b;a.f||Md(a.b,"command",this.ka,this);this.b=null;for(var b in this.g)Zh(this,b);Xh.A.l.call(this)};function bi(a,b){Xh.call(this,b);this.h=a;this.start()}
C(bi,Xh);bi.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
bi.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function $h(a,b){switch(a){case "loadVideoById":return b=Vh(b),[b];case "cueVideoById":return b=Vh(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Wh(b),[b];case "cuePlaylist":return b=Wh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function ai(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
bi.prototype.Z=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return bi.A.Z.call(this,a,b)};
bi.prototype.l=function(){bi.A.l.call(this);delete this.h};function ci(a,b,c,d){L.call(this);this.g=b||null;this.w="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=z(this.B,this);window.addEventListener("message",this.m)}
n(ci,L);ci.prototype.B=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.g&&a.source!=this.g)&&t(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.w=a.origin);this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Ga(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
ci.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=nd(a);c.postMessage(d,this.w)}catch(e){R(e,"WARNING")}}};
ci.prototype.l=function(){window.removeEventListener("message",this.m);L.prototype.l.call(this)};function di(a,b,c){ci.call(this,a,b,c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(di,ci);function ei(){var a=this.f=new di(!!Q("WIDGET_ID_ENFORCE")),b=z(this.Ga,this);a.i=b;a.j=null;this.f.channel="widget";if(a=Q("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
h=ei.prototype;h.Ga=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,fi(this,a)),this.i[a]=!0)):this.ma(a,b,c)};
h.ma=function(){};
function fi(a,b){return z(function(a){this.sendMessage(b,a)},a)}
h.addEventListener=function(){};
h.sa=function(){this.j=!0;this.sendMessage("initialDelivery",this.aa());this.sendMessage("onReady");F(this.h,this.la,this);this.h=[]};
h.aa=function(){return null};
function gi(a,b){a.sendMessage("infoDelivery",b)}
h.la=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
h.sendMessage=function(a,b){this.la({event:a,info:void 0==b?null:b})};
h.dispose=function(){this.f=null};function hi(a){ei.call(this);this.b=a;this.g=[];this.addEventListener("onReady",z(this.Fa,this));this.addEventListener("onVideoProgress",z(this.Na,this));this.addEventListener("onVolumeChange",z(this.Oa,this));this.addEventListener("onApiChange",z(this.Ia,this));this.addEventListener("onPlaybackQualityChange",z(this.Ka,this));this.addEventListener("onPlaybackRateChange",z(this.La,this));this.addEventListener("onStateChange",z(this.Ma,this));this.addEventListener("onWebglSettingsChanged",z(this.Pa,
this))}
C(hi,ei);h=hi.prototype;h.ma=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&Th(a)){var d=b;if(y(d[0])&&!x(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Vh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Uh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Wh.apply(window,d)}d=e}b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);Th(a)&&gi(this,this.aa())}};
h.Fa=function(){var a=z(this.sa,this);this.f.b=a};
h.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
h.aa=function(){if(!this.b)return null;var a=this.b.getApiInterface();La(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var k=this.b[e]();b[f]=k}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=A()/1E3;return b};
h.Ma=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getVideoUrl&&(a.videoUrl=
this.b.getVideoUrl());this.b.getVideoContentRect&&(a.videoContentRect=this.b.getVideoContentRect());this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getPlaylist&&(a.playlist=this.b.getPlaylist());this.b.getPlaylistIndex&&(a.playlistIndex=this.b.getPlaylistIndex());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());gi(this,a)};
h.Ka=function(a){gi(this,{playbackQuality:a})};
h.La=function(a){gi(this,{playbackRate:a})};
h.Ia=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,k=f.length;g<k;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
h.Oa=function(){gi(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
h.Na=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());gi(this,a)};
h.Pa=function(){var a={sphericalProperties:this.b.getSphericalProperties()};gi(this,a)};
h.dispose=function(){hi.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function ii(a){a=void 0===a?!1:a;L.call(this);this.b=new N(a);Zc(this,Ea($c,this.b))}
C(ii,L);ii.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
ii.prototype.i=function(a,b){this.f||this.b.K.apply(this.b,arguments)};function ji(a,b,c){ii.call(this);this.g=a;this.h=b;this.j=c}
C(ji,ii);function Yh(a,b,c){if(!a.f){var d=a.g;d.f||a.h!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(nd(a),d.h))}}
ji.prototype.l=function(){this.h=this.g=null;ji.A.l.call(this)};function ki(a,b,c){L.call(this);this.b=a;this.h=c;this.i=V(window,"message",z(this.j,this));this.g=new ji(this,a,b);Zc(this,Ea($c,this.g))}
C(ki,L);ki.prototype.j=function(a){var b;if(b=!this.f)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,t(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.g,c.f||c.i("command",b.command,b.data,a.origin))}};
ki.prototype.l=function(){Tf(this.i);this.b=null;ki.A.l.call(this)};function li(){var a=hb(mi),b;return Ad(new M(function(c,d){a.onSuccess=function(a){te(a)?c(a):d(new ni("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new ni("Unknown request error","net.unknown",a))};
a.M=function(a){d(new ni("Request timed out","net.timeout",a))};
b=Ge("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof Bd&&b.abort();
return yd(a)})}
function ni(a,b){E.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(ni,E);function oi(){this.f=0;this.b=null}
oi.prototype.then=function(a,b,c){return 1===this.f&&a?(a=a.call(c,this.b),td(a)?a:pi(a)):2===this.f&&b?(a=b.call(c,this.b),td(a)?a:qi(a)):this};
oi.prototype.getValue=function(){return this.b};
oi.prototype.$goog_Thenable=!0;function qi(a){var b=new oi;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function pi(a){var b=new oi;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function ri(a){E.call(this,a.message||a.description||a.name);this.isMissing=a instanceof si;this.isTimeout=a instanceof ni&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Bd}
n(ri,E);ri.prototype.name="BiscottiError";function si(){E.call(this,"Biscotti ID is missing from server")}
n(si,E);si.prototype.name="BiscottiMissingError";var mi={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ti=null;function je(){if("1"===bb(he(),"args","privembed"))return yd(Error("Biscotti ID is not available in private embed mode"));ti||(ti=Ad(li().then(ui),function(a){return vi(2,a)}));
return ti}
function ui(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new si;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new si;a=a.id;ke(a);ti=pi(a);wi(18E5,2);return a}
function vi(a,b){var c=new ri(b);ke("");ti=qi(c);0<a&&wi(12E4,a-1);throw c;}
function wi(a,b){T(function(){Ad(li().then(ui,function(a){return vi(b,a)}),va)},a)}
function xi(){try{var a=w("yt.ads.biscotti.getId_");return a?a():je()}catch(b){return yd(b)}}
;function yi(a){if("1"!==bb(he(),"args","privembed")){a&&ie();try{xi().then(function(a){a=le(a);a.bsq=zi++;Me("//www.youtube.com/ad_data_204",{wa:!1,C:a,withCredentials:!0})},function(){}),T(yi,18E5)}catch(b){R(b)}}}
var zi=0;var Z=w("ytglobal.prefsUserPrefsPrefs_")||{};v("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Ai(){this.b=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Bb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
h=Ai.prototype;h.get=function(a,b){Bi(a);Ci(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
h.set=function(a,b){Bi(a);Ci(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
h.remove=function(a){Bi(a);Ci(a);delete Z[a]};
h.save=function(){tg(this.b,this.dump(),63072E3)};
h.clear=function(){for(var a in Z)delete Z[a]};
h.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Ci(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Bi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Di(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
wa(Ai);var Ei=null,Fi=null,Gi=null,Hi={};function Ii(a){var b=a.id;a=a.ve_type;var c=Fg++;a=new Dg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Hi[b]=a;b=Kg();c=Jg();b&&c&&Ng(b,c,[a])}
function Ji(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Lg(b,a),a=Jg()))for(var c in Hi){var d=Hi[c];d&&Ng(b,a,[d])}}
function Ki(a){Hi[a.id]=new Dg({trackingParams:a.tracking_params})}
function Li(a){var b=Kg();a=Hi[a.id];b&&a&&qg("visualElementGestured",{csn:b,ve:Eg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},zg)}
function Mi(a){a=a.ids;var b=Kg();if(b)for(var c=0;c<a.length;c++){var d=Hi[a[c]];d&&qg("visualElementShown",{csn:b,ve:Eg(d),eventType:1},zg)}}
function Ni(){var a=Ei;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;v("yt.setConfig",P,void 0);v("yt.config.set",P,void 0);v("yt.setMsg",Ve,void 0);v("yt.msgs.set",Ve,void 0);v("yt.logging.errors.log",Te,void 0);
v("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);yi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");Ei=a=lh(a);a.addEventListener("onScreenChanged",Ji);a.addEventListener("onLogClientVeCreated",Ii);a.addEventListener("onLogServerVeCreated",Ki);a.addEventListener("onLogVeClicked",Li);a.addEventListener("onLogVesShown",
Mi);a.addEventListener("onReady",Ni);b=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?Gi=new hi(a):Q("ENABLE_POST_API")&&t(b)&&t(c)&&(Fi=new ki(window.parent,b,c),Gi=new bi(a,Fi.g));c=ge("BG_P");Jf(c)&&(Q("BG_I")||Q("BG_IU"))&&(Ff=!0,Ef.initialize(Q("BG_I",null),Q("BG_IU",null),c,If,void 0));Af()},void 0);
v("yt.www.watch.ads.restrictioncookie.spr",function(a){Pe(a+"mac_204?action_fcts=1");return!0},void 0);
var Oi=pe(function(){var a="ol";X.mark&&(0==a.lastIndexOf("mark_",0)||(a="mark_"+a),X.mark(a));a=Ph();var b=O();a.ol&&(a._ol=a._ol||[a.ol],a._ol.push(b));a.ol=b;a=wh();if(b=a.ol)xf(b),a.ol=0;Lh().tick_ol=void 0;O();Mh()?(a=Nh(),qh("tick_ol_"+a)||nh("latencyActionTicked",{tickName:"ol",clientActionNonce:a},void 0),a=!0):a=!1;if(a=!a)a=!w("yt.timing.pingSent_");if(a&&(b=Q("TIMING_ACTION",void 0),a=Ph(),w("ytglobal.timingready_")&&b&&a._start&&(b=Oh()))){Ih||(vh(Ah,new yh(Math.round(b-a._start),void 0)),
Ih=!0);b=!0;var c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Rh()}a=Ai.getInstance();c=!!((Di("f"+(Math.floor(119/31)+1))||0)&67108864);b=1<window.devicePixelRatio;document.body&&cd(document.body,"exp-invert-logo")&&(b&&!cd(document.body,"inverted-hdpi")?(d=document.body,d.classList?d.classList.add("inverted-hdpi"):cd(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")):!b&&cd(document.body,"inverted-hdpi")&&dd());
c!=b&&(c="f"+(Math.floor(119/31)+1),d=Di(c)||0,d=b?d|67108864:d&-67108865,0==d?delete Z[c]:Z[c]=d.toString(16).toString(),a.save())}),Pi=pe(function(){var a=Ei;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&Ef.dispose();a=0;for(var b=yf.length;a<b;a++)xf(yf[a]);yf.length=0;rf("//static.doubleclick.net/instream/ad_status.js");zf=!1;P("DCLKSTAT",0);ad(Gi,Fi);if(a=Ei)a.removeEventListener("onScreenChanged",Ji),a.removeEventListener("onLogClientVeCreated",Ii),a.removeEventListener("onLogServerVeCreated",Ki),a.removeEventListener("onLogVeClicked",Li),a.removeEventListener("onLogVesShown",Mi),a.removeEventListener("onReady",Ni),a.destroy();Hi=
{}});
window.addEventListener?(window.addEventListener("load",Oi),window.addEventListener("unload",Pi)):window.attachEvent&&(window.attachEvent("onload",Oi),window.attachEvent("onunload",Pi));B("yt.abuse.player.botguardInitialized",w("yt.abuse.player.botguardInitialized")||Kf);B("yt.abuse.player.invokeBotguard",w("yt.abuse.player.invokeBotguard")||Lf);B("yt.abuse.dclkstatus.checkDclkStatus",w("yt.abuse.dclkstatus.checkDclkStatus")||Bf);B("yt.player.exports.navigate",w("yt.player.exports.navigate")||Mg);
B("yt.util.activity.init",w("yt.util.activity.init")||Wf);B("yt.util.activity.getTimeSinceActive",w("yt.util.activity.getTimeSinceActive")||Zf);B("yt.util.activity.setTimestamp",w("yt.util.activity.setTimestamp")||Xf);}).call(this);
