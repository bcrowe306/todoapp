(function(e){function t(t){for(var o,r,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-da312716":"536df9a9","chunk-2ba27fc6":"57f387da","chunk-b0efde56":"3b2f8c63","chunk-f3d83652":"99366180",about:"a81c4d0c","chunk-4ebe3713":"f4188f4e","chunk-5784493c":"25a9ac87"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-da312716":1,"chunk-2ba27fc6":1,"chunk-b0efde56":1,"chunk-f3d83652":1,"chunk-4ebe3713":1,"chunk-5784493c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{"chunk-da312716":"29c51e76","chunk-2ba27fc6":"af984da9","chunk-b0efde56":"083c8403","chunk-f3d83652":"68e83598",about:"31d6cfe0","chunk-4ebe3713":"ba5bb1a4","chunk-5784493c":"ba5bb1a4"}[e]+".css",a=c.p+o,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=o,delete r[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-system-bar",{attrs:{color:"blue lighten-1",app:""}},[n("v-spacer")],1),n("v-main",[n("router-view")],1)],1)},a=[],u={name:"App",data:function(){return{drawer:null,links:[["mdi-inbox-arrow-down","Inbox"],["mdi-send","Send"],["mdi-delete","Trash"],["mdi-alert-octagon","Spam"]]}}},i=u,c=n("2877"),s=n("6544"),l=n.n(s),d=n("7496"),f=n("f6c4"),p=n("2fa4"),h=n("afd9"),m=Object(c["a"])(i,r,a,!1,null,null,null),v=m.exports;l()(m,{VApp:d["a"],VMain:f["a"],VSpacer:p["a"],VSystemBar:h["a"]});var g=n("9483");Object(g["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var b=n("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-navigation-drawer",{attrs:{app:""}},[n("v-sheet",{staticClass:"pa-4 white--text",attrs:{color:"deep-orange lighten-2"}},[n("v-avatar",{staticClass:"mb-4",attrs:{color:"blue darken-1",size:"64"}},[n("span",{staticClass:"text-h5"},[e._v(e._s(e.$store.state.user.email.substring(0,2).toUpperCase()))])]),n("div",[e._v(e._s(e.$store.state.user.email))])],1),n("v-divider"),n("v-list",{attrs:{dense:""}},[e._l(e.links_nav,(function(t,o){return n("v-list-item",{key:o,attrs:{to:t.path,link:""}},[n("v-list-item-icon",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.label))])],1)],1)})),n("v-divider"),n("v-list-item",{attrs:{link:""},on:{click:function(t){return t.preventDefault(),e.logout.apply(null,arguments)}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-logout")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Logout")])],1)],1)],2)],1),n("router-view")],1)},w=[],y={name:"Home",components:{},data:function(){return{links_nav:[{icon:"mdi-inbox-arrow-down",label:"ToDos",path:"/"},{icon:"mdi-send",label:"Profile",path:"/profile"}]}},methods:{logout:function(){this.$auth.logout(),this.$router.push("/login")}}},S=y,_=n("8212"),E=n("ce7e"),P=n("132d"),T=n("8860"),A=n("da13"),O=n("5d23"),j=n("34c3"),x=n("f774"),I=n("8dd9"),V=Object(c["a"])(S,k,w,!1,null,null,null),C=V.exports;l()(V,{VAvatar:_["a"],VDivider:E["a"],VIcon:P["a"],VList:T["a"],VListItem:A["a"],VListItemContent:O["a"],VListItemIcon:j["a"],VListItemTitle:O["c"],VNavigationDrawer:x["a"],VSheet:I["a"]});var L=n("2f62");o["a"].use(L["a"]);var N=new L["a"].Store({state:{user:!1},mutations:{SET_USER:function(e,t){e.user=t}},actions:{},modules:{}}),$=(n("e9c4"),{token:{get:function(){return localStorage.getItem("token")},set:function(e){localStorage.setItem("token",e)},remove:function(){localStorage.removeItem("token")}},user:{get:function(){return JSON.parse(localStorage.getItem("user"))},set:function(e){var t=JSON.stringify(e);localStorage.setItem("user",t)},remove:function(){localStorage.removeItem("user")}}}),B=n("bc3a"),U=n.n(B),D=null;D=U.a.create({}),D.defaults.headers.common={Authorization:"Bearer "+$.token.get()},D.interceptors.response.use((function(e){return 401===e.status&&($.token.remove(),$.user.remove()),e})),D.interceptors.request.use((function(e){return e.headers.Authorization="Bearer "+$.token.get(),e}));var z=D;function M(e,t,n){var o=$.token.get();return N.state.user?(n(),null!=o?z.post("/auth/user",null,{headers:{Authorization:"Bearer "+o}}).then((function(e){var t=e.data;return N.commit("SET_USER",t),n()})).catch((function(e){return N.commit("SET_USER",!1),console.log(e.message),n("/login")})):n("/login")):null!=o?z.post("/auth/user",null,{headers:{Authorization:"Bearer "+o}}).then((function(e){var t=e.data;return N.commit("SET_USER",t),n()})).catch((function(e){return N.commit("SET_USER",!1),console.log(e.message),n("/login")})):n("/login")}o["a"].use(b["a"]);var R=[{path:"/",name:"Home",component:C,beforeEnter:M,redirect:"/todos",children:[{path:"/profile",name:"Profile",component:function(){return Promise.all([n.e("chunk-da312716"),n.e("chunk-2ba27fc6")]).then(n.bind(null,"c66d"))},beforeEnter:M},{path:"/todos",name:"Todos",component:function(){return Promise.all([n.e("chunk-da312716"),n.e("chunk-b0efde56")]).then(n.bind(null,"75cf"))},beforeEnter:M},{path:"/newtodo",name:"New Todo",component:function(){return Promise.all([n.e("chunk-da312716"),n.e("chunk-f3d83652"),n.e("chunk-4ebe3713")]).then(n.bind(null,"ad02"))},beforeEnter:M},{path:"/todos/:_id",name:"Edit Todo",component:function(){return Promise.all([n.e("chunk-da312716"),n.e("chunk-f3d83652"),n.e("chunk-5784493c")]).then(n.bind(null,"fd53"))},beforeEnter:M}]},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-da312716"),n.e("chunk-f3d83652"),n.e("about")]).then(n.bind(null,"a55b"))}},{path:"/signup",name:"Signup",component:function(){return Promise.all([n.e("chunk-da312716"),n.e("chunk-f3d83652"),n.e("about")]).then(n.bind(null,"34c3b"))}}],q=new b["a"]({mode:"history",base:"/",routes:R}),J=q,F=n("f309");o["a"].use(F["a"]);var H=new F["a"]({}),K={login:function(e){return new Promise((function(t,n){z.post("/auth/login",{email:e.email,password:e.password}).then((function(e){if(200===e.status)return $.user.set(e.data.user),$.token.set(e.data.token),t(e.data)})).catch((function(e){return n(e)}))}))},signup:function(e){return z.post("/auth/signup",e).then((function(e){return e.data}))},logout:function(){$.token.remove(),$.user.remove()}},G={select:function(e){return z.get("/api/todos/".concat(e)).then((function(e){return e.data}))},selectAll:function(){return z.get("/api/todos").then((function(e){return e.data}))},insert:function(e){return z.post("/api/todos",e).then((function(e){return e.data}))},update:function(e,t){return z.put("/api/todos/".concat(e),t).then((function(e){return e.data}))},delete:function(e){return z.delete("/api/todos/".concat(e)).then((function(e){return e.data}))}},Q=n("2ef0"),W=n.n(Q);o["a"].config.productionTip=!1,o["a"].prototype.$http=z,o["a"].prototype.$todos=G,o["a"].prototype.$auth=K,o["a"].prototype.$_=W.a,new o["a"]({router:J,store:N,vuetify:H,render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.de6cbf51.js.map