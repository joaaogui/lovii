(function(e){function t(t){for(var n,s,u=t[0],i=t[1],c=t[2],l=0,p=[];l<u.length;l++)s=u[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);v&&v(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9bb06ea1"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(e);var c=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,r[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var v=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"41ac":function(e,t,r){},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"669f":function(e,t,r){},"78eb":function(e,t,r){"use strict";var n=r("41ac"),o=r.n(n);o.a},"8a83":function(e,t,r){"use strict";var n=r("669f"),o=r.n(n);o.a},"9c0c":function(e,t,r){},a419:function(e,t,r){e.exports=r.p+"img/lovii_redondo.0fb4cff2.png"},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"app"}},[r("v-main",[r("v-container",{staticClass:"no-gutters pa-0",attrs:{fluid:""}},[r("router-view")],1)],1)],1)},a=[],s=(r("5c0b"),r("2877")),u=r("6544"),i=r.n(u),c=r("7496"),l=r("a523"),v=r("f6c4"),p={},f=Object(s["a"])(p,o,a,!1,null,null,null),h=f.exports;i()(f,{VApp:c["a"],VContainer:l["a"],VMain:v["a"]});var g=r("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7");var b=r("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-row",{staticClass:"logo no-gutters"},[n("v-col",[n("v-img",{staticClass:"logo-image",attrs:{"max-height":"80vh",contain:"",src:r("a419")}})],1)],1),n("v-row",{staticClass:"photos no-gutters"},[n("v-col",[e._v(" sdsd ")])],1)],1)},m=[],_=r("d4ec"),j=r("262e"),w=r("2caf"),k=r("9ab4"),y=r("60a3"),O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},x=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],C=function(e){Object(j["a"])(r,e);var t=Object(w["a"])(r);function r(){return Object(_["a"])(this,r),t.apply(this,arguments)}return r}(y["c"]);Object(k["a"])([Object(y["b"])()],C.prototype,"msg",void 0),C=Object(k["a"])([y["a"]],C);var E=C,P=E,$=(r("8a83"),Object(s["a"])(P,O,x,!1,null,"ac518ea4",null)),S=$.exports,A=function(e){Object(j["a"])(r,e);var t=Object(w["a"])(r);function r(){return Object(_["a"])(this,r),t.apply(this,arguments)}return r}(y["c"]);A=Object(k["a"])([Object(y["a"])({components:{HelloWorld:S}})],A);var T=A,V=T,M=(r("78eb"),r("62ad")),F=r("adda"),L=r("0fd9"),N=Object(s["a"])(V,d,m,!1,null,"1600decf",null),I=N.exports;i()(N,{VCol:M["a"],VImg:F["a"],VRow:L["a"]}),n["a"].use(b["a"]);var q=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],H=new b["a"]({routes:q}),J=H,z=r("2f62");n["a"].use(z["a"]);var B=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),D=r("f309");n["a"].use(D["a"]);var R=new D["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:J,store:B,vuetify:R,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.edd813c9.js.map