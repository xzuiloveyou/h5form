/* h5form v0.2.1
 * homepage: http://gucong3000.github.io/h5form/
 */
!function(a,b,c){"use strict";var d=a.h5form||(a.h5form={}),e=d.addStyleRule,f="placeholder",g="data-"+f+(new Date).getTime()+Math.random(),h="DOMAttrModified",i=a.parseInt,j,k={},l="normal",m="static",n="px",o=a.getComputedStyle?function(b){return a.getComputedStyle(b,null)}:0;function p(a){return/^text(area)?|password|email|search|tel|url$/i.test(a.type)}function q(a,b){a.uniqueID?k[a.uniqueID]=b:a[g]=b}function r(a){var b;return a.uniqueID?(b=k[a.uniqueID],k[a.uniqueID]=b||!0):(b=a[g],a[g]=b||!0),b}function s(a){return a.runtimeStyle||a.style}function t(a){return a.currentStyle||o(a)}function u(a,b){a&&[].slice.call(a,0).forEach(b)}function v(a,b,c,d){a.addEventListener(b,c,!!d)}function w(c){var d=["resize","scroll"],e=t(c),g=r(c),k,w=function(a,b,d){v(d||c,a,b,!0)},x=function(){var a=c[f];g&&g.tagName||!a||(g=b.createElement(f),g.onmousedown=function(){return setTimeout(function(){c.focus()},1),!1},q(c,g)),g&&g.tagName&&(g.innerHTML=a||"")},y=function(){if(clearTimeout(k),g&&g.tagName){var b=g.innerHTML&&!c.value&&p(c),d=s(g),f=c.parentNode,h=f&&(c.offsetHeight||c.offsetWidth);d.display=b&&h?"block":"none",h?b&&(e.position===m&&t(f).position===m?(s(c).position="relative",k=setTimeout(y,0)):(d.maxWidth=o&&!/^auto$/.test(e.width)?e.width:c.clientWidth-i(e.paddingLeft)-i(e.paddingRight)+n,d.width="XMLHttpRequest"in a&&"left"===e.textAlign?"auto":d.maxWidth,d.left=c.offsetLeft+c.clientLeft+n,d.top=c.offsetTop+c.clientTop+n,z("marginLeft","paddingLeft"),z("marginTop","paddingTop"),/^input$/i.test(c.tagName)?(d.whiteSpace="nowrap",d.wordBreak=l,o?d.lineHeight=o(c).height:z("lineHeight")):(d.whiteSpace=l,d.wordBreak="break-all",z("lineHeight")),z("textAlign"),z("textIndent"),z("fontFamily"),z("fontSize"),c.nextSibling?f.insertBefore(g,c.nextSibling):f.appendChild(g))):k=setTimeout(y,50)}},z=function(a,b){try{s(g)[a]=t(c)[b||a]}catch(d){}};if(g){if(j)return}else try{u(["input","change","keypress",h],function(a){w(a,function(){setTimeout(function(){x(),y()},0)})}),e.resize&&!/^none$/.test(e.resize),u(d,function(b){w(b,y,a)})}catch(A){a.attachEvent("onresize",y),c.attachEvent("onpropertychange",function(){var a=event.propName;setTimeout(function(){switch(a){case f:x();default:y()}},0)})}x(),y()}function x(){u(b.querySelectorAll("input,textarea"),w)}if(!d[f]||!d[f].call){e&&(e(f,"position:absolute;cursor:text;color:gray;padding:0;border:0;overflow:hidden;-ms-user-select:none;user-select:none;pointer-events:none;"),e("textarea","overflow: auto;"));try{v(b,"DOMContentLoaded",x),setInterval(x,200),e&&u([":-ms-input-","::-webkit-input-"],function(a){e(a+f,"color:transparent !important;")}),j=function(){var a=b.documentElement,c=a.id;function d(){a.removeEventListener(h,d,!1),j=!0}return a.addEventListener(h,d,!1),a.id="mass",a.id=c,j}()}catch(y){}d[f]=w}}(this,document);