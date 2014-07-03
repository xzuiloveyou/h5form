/* h5form v0.2.1
 * homepage: https://github.com/gucong3000/h5form
 */
!function(a,b,c){"use strict";var d=b.querySelector?b.documentMode:7,e=b.scripts||b.querySelector("script"),f="color:gray; opacity:1;",g=b.documentElement.children[0],h="uniqueID"in b,i="placeholder",j=a.h5form||{},k=a.jQuery,l,m;function n(a){return a=b.createElement(a),g.insertBefore(a,g.firstChild),a}function o(b,c,d){a.addEventListener(b,c,d)}function p(a,c){l||(l=n("style"));var d=a+"{"+c+"}";try{l.appendChild(b.createTextNode(d))}catch(e){try{l.styleSheet.addRule(a,c)}catch(e){l.styleSheet.cssText+=d}}}function q(a,b){return b in a?a[b]:!!a.attributes[b]}function r(a){return a&&/^submit$/i.test(a.type)&&a.form&&!(q(a,"formNoValidate")||q(a.form,"noValidate"))}function s(a,b){b=b||"focus",a&&a[b]&&setTimeout(function(){a[b]()},0)}function t(a){return e?e.replace(/[^\/]+$/,a):void 0}e=e[e.length-1];try{j=j||eval.call(a,e.innerHTML)||{}}catch(u){}a.h5form=j,e=e.getAttribute("src",2)||"";try{b.querySelector(":invalid"),m=!0}catch(u){}m?(o("invalid",function(a){a.cancelBubble||(a.preventDefault(),k&&(a.stopPropagation(),a.stopImmediatePropagation(),k(a.target).trigger("invalid")))},!0),d&&h||(setTimeout(function(){o("click",function(a){var b=a.target;a.defaultPrevented||1!==a.which||!r(b)||b.form.checkValidity()||(a.preventDefault(),s(b.form.querySelector(":invalid:not(:disabled)")))},!1)},200),p(("netscape"in a?"::-moz-":"::-webkit-input-")+i,f))):(k&&k.extend(k.expr[":"],{invalid:function(a){return a.validity&&!a.validity.valid},valid:function(a){return a.validity&&a.validity.valid}}),b.attachEvent("onclick",function(){var a=event,b=a.returnValue,d=a.srcElement,e=d.form,f,g,h,i;if((b||b===c)&&r(d)){for(i=0,g=e.elements;i<g.length;i++)h=g[i],h.validity&&!h.validity.valid&&(f||(f=!0,s(h)),s(h,"checkValidity"));f&&(a.returnValue=!f)}})),d&&(9>d?(j.htc=j.htc||t("h5form.htc"),j.htc&&p("form,input,select,textarea","behavior: url("+j.htc+");")):h&&(j.js=j.js||t("h5form.el.js"),!j.js||a.ValidityState&&!/^\[.*\]$/.test(a.ValidityState)||(n("script").src=j.js))),j.addStyleRule=p,a.netscape||a.chrome||a.opera||(j[i]=j[i]||t(i+".js"),j[i]&&"string"==typeof j[i]&&(n("script").src=j[i]))}(this,document);