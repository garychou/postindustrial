(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{114:function(t,r,e){},244:function(t,r,e){"use strict";var n=e(121)(!0);e(60)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,r=this._t,e=this._i;return e>=r.length?{value:void 0,done:!0}:(t=n(r,e),this._i+=t.length,{value:t,done:!1})}))},245:function(t,r,e){"use strict";var n=e(32),a=e(13),o=e(33),s=e(246),i=e(247),c=e(35),u=e(248),l=e(249);a(a.S+a.F*!e(250)((function(t){Array.from(t)})),"Array",{from:function(t){var r,e,a,f,d=o(t),v="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,y=void 0!==h,p=0,w=l(d);if(y&&(h=n(h,m>2?arguments[2]:void 0,2)),null==w||v==Array&&i(w))for(e=new v(r=c(d.length));r>p;p++)u(e,p,y?h(d[p],p):d[p]);else for(f=w.call(d),e=new v;!(a=f.next()).done;p++)u(e,p,y?s(f,h,[a.value,p],!0):a.value);return e.length=p,e}})},246:function(t,r,e){var n=e(19);t.exports=function(t,r,e,a){try{return a?r(n(e)[0],e[1]):r(e)}catch(r){var o=t.return;throw void 0!==o&&n(o.call(t)),r}}},247:function(t,r,e){var n=e(30),a=e(12)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||o[a]===t)}},248:function(t,r,e){"use strict";var n=e(21),a=e(29);t.exports=function(t,r,e){r in t?n.f(t,r,a(0,e)):t[r]=e}},249:function(t,r,e){var n=e(123),a=e(12)("iterator"),o=e(30);t.exports=e(20).getIteratorMethod=function(t){if(null!=t)return t[a]||t["@@iterator"]||o[n(t)]}},250:function(t,r,e){var n=e(12)("iterator"),a=!1;try{var o=[7][n]();o.return=function(){a=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!a)return!1;var e=!1;try{var o=[7],s=o[n]();s.next=function(){return{done:e=!0}},o[n]=function(){return s},t(o)}catch(t){}return e}},251:function(t,r,e){"use strict";var n=e(13),a=e(43)(0),o=e(36)([].forEach,!0);n(n.P+n.F*!o,"Array",{forEach:function(t){return a(this,t,arguments[1])}})},252:function(t,r,e){"use strict";var n=e(114);e.n(n).a},26:function(t,r,e){},268:function(t,r,e){"use strict";e.r(r);e(244),e(245),e(54),e(251),e(26);var n={components:{Layout:e(117).default},props:[""],data:function(){return{}},computed:{},mounted:function(){var t=document.getElementsByTagName("BLOCKQUOTE"),r=document.querySelectorAll("#year5 p, #year5 ul"),e=document.querySelectorAll("blockquote p"),n=document.querySelectorAll("#year5 h2"),a=document.querySelectorAll(".year5 p a");Array.from(r).forEach((function(t){t.classList.add("f5","f4-ns","lh-copy","measure","center")})),Array.from(t).forEach((function(t){console.log(t),t.classList.add("ph0","f3","f1-ns","measure-narrow","tc","bl0","center")})),Array.from(e).forEach((function(t){t.className="",t.classList.add("fw9","lh-title","lh-title-ns","athelas","mv4","mv5-ns","center")})),Array.from(n).forEach((function(t){t.className="",t.classList.add("tc","pv4","pv5-ns","mt5","f3","fw7","measure","center","avenir","lh-title")})),Array.from(a).forEach((function(t){t.classList.add("link","dim")}))},methods:{}},a=(e(252),e(0)),o=Object(a.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("Layout",[e("template",{slot:"page-top"},[e("div",{staticClass:"w-100 mw9 center pa3 pa4-ns measure avenir f4 f3-ns"},[e("h1",{staticClass:"mb4 f-subheadline f-headline-ns"},[t._v("\n        "+t._s(t.$frontmatter.title)+"\n      ")]),t._v(" "),e("div",{staticClass:"w-100 mw9 measure avenir f4 f3-ns mid-purple"},[e("Content",{attrs:{"slot-key":"header"}})],1),t._v(" "),e("div",{staticClass:"w-100 mw9 measure-wide avenir f5"},[e("Content",{attrs:{"slot-key":"details"}})],1)]),t._v(" "),e("div",{staticClass:"w-100 mw9 center pa3 pa4-ns avenir",attrs:{id:"year5"}},[e("div",{staticClass:"body center"},[e("Content",{attrs:{"slot-key":"paul"}}),t._v(" "),e("Content",{attrs:{"slot-key":"body"}})],1)]),t._v(" "),e("div",{staticClass:"w-100 mw9 center pa3 pa5-ns avenir",attrs:{id:"footer"}},[e("div",{staticClass:"measure-wide center"},[e("Content",{attrs:{"slot-key":"footer"}})],1)])])],2)}),[],!1,null,null,null);r.default=o.exports}}]);