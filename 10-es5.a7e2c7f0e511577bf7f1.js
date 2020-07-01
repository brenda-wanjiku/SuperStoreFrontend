function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,r):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{BK1B:function(t,r,e){"use strict";e.r(r),e.d(r,"scopeCss",(function(){return A}));var n=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",o=new RegExp("(-shadowcsshost"+n,"gim"),s=new RegExp("(-shadowcsscontext"+n,"gim"),c=new RegExp("(-shadowcssslotted"+n,"gim"),a=/-shadowcsshost-no-combinator([^\s]*)/,i=[/::shadow/g,/::content/g],u=/-shadowcsshost/gim,l=/:host/gim,h=/::slotted/gim,p=/:host-context/gim,f=/\/\*\s*[\s\S]*?\*\//g,d=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,g=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,m=/([{}])/g,v=function(t,r){var e=w(t),n=0;return e.escapedString.replace(g,(function(){var t=arguments.length<=2?void 0:arguments[2],o="",s=arguments.length<=4?void 0:arguments[4],c="";s&&s.startsWith("{%BLOCK%")&&(o=e.blocks[n++],s=s.substring("%BLOCK%".length+1),c="{");var a=r({selector:t,content:o});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(a.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(c).concat(a.content).concat(s)}))},w=function(t){for(var r=t.split(m),e=[],n=[],o=0,s=[],c=0;c<r.length;c++){var a=r[c];"}"===a&&o--,o>0?s.push(a):(s.length>0&&(n.push(s.join("")),e.push("%BLOCK%"),s=[]),e.push(a)),"{"===a&&o++}return s.length>0&&(n.push(s.join("")),e.push("%BLOCK%")),{escapedString:e.join(""),blocks:n}},b=function(t,r,e){return t.replace(r,(function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(r[2]){for(var o=r[2].split(","),s=[],c=0;c<o.length;c++){var a=o[c].trim();if(!a)break;s.push(e("-shadowcsshost-no-combinator",a,r[3]))}return s.join(",")}return"-shadowcsshost-no-combinator"+r[3]}))},y=function(t,r,e){return t+r.replace("-shadowcsshost","")+e},_=function(t,r,e){return r.indexOf("-shadowcsshost")>-1?y(t,r,e):t+r+e+", "+r+" "+t+e},A=function(t,r,e){var n=r+"-h",g=r+"-s",m=t.match(d)||[];t=t.replace(f,"");var w=[];if(e){var A=function(t){var r="/*!@___".concat(w.length,"___*/");return w.push({placeholder:r,comment:"/*!@".concat(t.selector,"*/")}),t.selector=r+t.selector,t};t=v(t,(function(t){return"@"!==t.selector[0]?A(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=v(t.content,A),t):t}))}var x=function(t,r,e,n,f){return t=function(t){return i.reduce((function(t,r){return t.replace(r," ")}),t)}(t=function(t,r){return t.replace(c,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){var o=e[2].trim();return"."+r+" > "+o+e[3]}return"-shadowcsshost-no-combinator"+e[3]}))}(t=function(t){return b(t,s,_)}(t=function(t){return b(t,o,y)}(t=t.replace(p,"-shadowcsscontext").replace(l,"-shadowcsshost").replace(h,"-shadowcssslotted"))),n)),r&&(t=function t(r,e,n,o,s){return v(r,(function(r){var s=r.selector,c=r.content;return"@"!==r.selector[0]?s=function(t,r,e,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():function(t,r){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(r).test(t)}(t,r)?function(t,r,e){for(var n,o="."+(r=r.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),s=function(t){var n=t.trim();if(!n)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)n=function(t,r,e){if(u.lastIndex=0,u.test(t)){var n="."+e;return t.replace(a,(function(t,r){return r.replace(/([^:]*)(:*)(.*)/,(function(t,r,e,o){return r+n+e+o}))})).replace(u,n+" ")}return r+" "+t}(t,r,e);else{var s=t.replace(u,"");if(s.length>0){var c=s.match(/([^:]*)(:*)(.*)/);c&&(n=c[1]+o+c[2]+c[3])}}return n},c=function(t){var r=[],e=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var o="__ph-".concat(e,"__");return r.push(n),e++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,o){var s="__ph-".concat(e,"__");return r.push(o),e++,n+s})),placeholders:r}}(t),i="",l=0,h=/( |>|\+|~(?!=))\s*/g,p=!((t=c.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(n=h.exec(t));){var f=n[1],d=t.slice(l,n.index).trim();p=p||d.indexOf("-shadowcsshost-no-combinator")>-1,i+="".concat(p?s(d):d," ").concat(f," "),l=h.lastIndex}var g,m=t.substring(l);return i+=(p=p||m.indexOf("-shadowcsshost-no-combinator")>-1)?s(m):m,g=c.placeholders,i.replace(/__ph-(\d+)__/g,(function(t,r){return g[+r]}))}(t,r,e).trim():t.trim()})).join(", ")}(r.selector,e,n,o):(r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document"))&&(c=t(r.content,e,n,o)),{selector:s.replace(/\s{2,}/g," ").trim(),content:c}}))}(t,r,e,n)),(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+e)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim()}(t,r,n,g);return t=[x].concat(_toConsumableArray(m)).join("\n"),e&&w.forEach((function(r){var e=r.placeholder,n=r.comment;t=t.replace(e,n)})),t}}}]);