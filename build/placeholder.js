/* h5form v0.2.3
 * homepage: http://gucong3000.github.io/h5form/
 */
!function(a,b,c){"use strict";var d=a.h5form||(a.h5form={}),e=d.addStyleRule,f="placeholder",g="data-"+f+(new Date).getTime()+Math.random(),h="DOMAttrModified",i=a.parseInt,j,k={},l="normal",m="static",n="px",o=a.getComputedStyle?function(b){return a.getComputedStyle(b,null)}:0;function p(a){return/^text(area)?|password|email|search|tel|url$/i.test(a.type)}function q(a,b){a.uniqueID?k[a.uniqueID]=b:a[g]=b}function r(a){var b;return a.uniqueID?(b=k[a.uniqueID],k[a.uniqueID]=b||!0):(b=a[g],a[g]=b||!0),b}function s(a){return a.runtimeStyle||a.style}function t(a){return a.currentStyle||o(a)}function u(a,b){a&&[].slice.call(a,0).forEach(b)}function v(a,b,c,d){a.addEventListener(b,c,!!d)}function w(c){var d=t(c),e=r(c),g,k=function(a,b,d){v(d||c,a,b,!0)},w=function(){var a=c[f];e&&e.tagName||!a||(e=b.createElement(f),e.onmousedown=function(){return setTimeout(function(){c.focus()},1),!1},q(c,e)),e&&e.tagName&&(e.innerHTML=a||"")},x=function(){if(clearTimeout(g),e&&e.tagName){var f=e.innerHTML&&!c.value&&p(c),h=s(e),j=c.parentNode,k=j&&(c.offsetHeight||c.offsetWidth);h.display=f&&k?"block":"none",k?f&&(g=setTimeout(function(){d.position===m&&t(j).position===m&&(s(c).position="relative"),j===c.offsetParent&&!b.querySelector&&/^normal$/i.test(t(j).zoom)&&(s(j).zoom=1),h.maxWidth=o&&!/^auto$/.test(d.width)?d.width:c.clientWidth-i(d.paddingLeft)-i(d.paddingRight)+n,h.width="XMLHttpRequest"in a&&"left"===d.textAlign?"auto":h.maxWidth,h.left=c.offsetLeft+c.clientLeft+n,h.top=c.offsetTop+c.clientTop+n,y("marginLeft","paddingLeft"),y("marginTop","paddingTop"),/^input$/i.test(c.tagName)?(h.whiteSpace="nowrap",h.wordBreak=l,o?h.lineHeight=o(c).height:y("lineHeight")):(h.whiteSpace=l,h.wordBreak="break-all",y("lineHeight")),y("textAlign"),y("textIndent"),y("fontFamily"),y("fontSize"),c.nextSibling?j.insertBefore(e,c.nextSibling):j.appendChild(e)},0)):g=setTimeout(x,50)}},y=function(a,b){try{s(e)[a]=t(c)[b||a]}catch(d){}};if(e){if(j)return}else try{u(["input","change","keypress",h],function(a){k(a,function(){setTimeout(function(){w(),x()},0)})}),u(["resize","scroll"],function(b){k(b,x,a)})}catch(z){a.attachEvent("onresize",x),c.attachEvent("onpropertychange",function(){var a=event.propName;setTimeout(function(){switch(a){case f:w();default:x()}},0)})}w(),x()}function x(){u(b.querySelectorAll("input,textarea"),w)}if(!d[f]||!d[f].call){e&&(e(f,"position:absolute;cursor:text;color:gray;padding:0;border:0;overflow:hidden;-ms-user-select:none;user-select:none;pointer-events:none;"),e("textarea","overflow: auto;"));try{/interactive|complete/.test(b.readyState)?x():v(b,"DOMContentLoaded",x),setInterval(x,200),e&&u([":-ms-input-","::-webkit-input-"],function(a){e(a+f,"color:transparent !important;")}),j=function(){var a=b.documentElement,c=a.id;function d(){a.removeEventListener(h,d,!1),j=!0}return a.addEventListener(h,d,!1),a.id="mass",a.id=c,j}()}catch(y){}d[f]=w}}(this,document);