(function(e){function t(t){for(var a,n,i=t[0],c=t[1],l=t[2],d=0,u=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({"check~identities~share":"check~identities~share",check:"check","home~identities":"home~identities",identities:"identities",share:"share",home:"home"}[e]||e)+"."+{"check~identities~share":"a32e2fce",check:"78342bfd","home~identities":"3640cebc",identities:"87483b16",share:"91723a6e",home:"64263470"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={check:1,identities:1,share:1,home:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({"check~identities~share":"check~identities~share",check:"check","home~identities":"home~identities",identities:"identities",share:"share",home:"home"}[e]||e)+"."+{"check~identities~share":"31d6cfe0",check:"da25f29c","home~identities":"31d6cfe0",identities:"da25f29c",share:"da25f29c",home:"ab20ab1d"}[e]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===a||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete n[e],p.parentNode.removeChild(p),r(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=s);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",u.name="ChunkLoadError",u.type=a,u.request=n,r[1](u)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=d;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},1:function(e,t){},10:function(e,t){},11:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[!e.isLogging&&e.wallet?r("div",[r("b-navbar",[r("template",{slot:"brand"},[r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[r("img",{attrs:{src:"/logo.png"}})])],1),r("template",{slot:"start"},[r("b-navbar-item",{attrs:{href:"/#/"}},[e._v("Create Identity")]),r("b-navbar-item",{attrs:{href:"/#/identities"}},[e._v("My Identity")]),r("b-navbar-item",{attrs:{href:"/#/check"}},[e._v("Check Identity")])],1),r("template",{slot:"end"},[r("b-navbar-item",{attrs:{tag:"div"}},[r("div",{staticClass:"buttons"},[r("a",{staticClass:"button login-btn is-primary",on:{click:e.logout}},[r("strong",[e._v("Logout")])])])])],1)],2),r("router-view"),r("hr"),e._v("Scrypta Identity Framework is "),r("a",{attrs:{href:"https://github.com/scryptachain/scrypta-identity-framework",target:"_blank"}},[e._v("open-source")]),e._v(" project by "),r("a",{attrs:{href:"https://scrypta.foundation",target:"_blank"}},[e._v("Scrypta Foundation")]),e._v(". "),r("br"),r("br")],1):e._e(),e.wallet?e._e():r("div",[r("section",{staticClass:"hero"},[r("div",{staticClass:"hero-body",staticStyle:{padding:"0"}},[r("div",{staticClass:"container",staticStyle:{"margin-top":"50px"},attrs:{id:"create"}},[r("div",{staticClass:"card"},[r("div",{staticStyle:{padding:"50px 20px"}},[r("h1",{staticClass:"title is-1"},[e._v("Start Now")]),r("br"),r("h2",{staticClass:"subtitle"},[r("br"),e._v("You need a Scrypta Identity to enter the platform. "),r("br"),r("br"),e._v("Use "),r("a",{attrs:{href:"https://id.scryptachain.org/",target:"_blank"}},[e._v("Scrypta ID Extension")]),e._v(" or "),r("a",{on:{click:e.showCreate}},[e._v("create a new wallet")]),e._v(". "),r("br"),r("br"),r("b-upload",{attrs:{"drag-drop":""},on:{input:e.loadWalletFromFile},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}},[r("section",{staticClass:"section"},[r("div",{staticClass:"content has-text-centered"},[r("p",[e._v("Drag and drop your .sid here or click to upload")])])])])],1)])]),r("br"),e._v("Scrypta dApp Starter "),r("a",{attrs:{href:"https://github.com/scryptachain/scrypta-dapp-starter",target:"_blank"}},[e._v("open-source")]),e._v(" project by "),r("a",{attrs:{href:"https://scrypta.foundation",target:"_blank"}},[e._v("Scrypta Foundation")]),e._v(". "),r("br"),r("br")])])])]),r("b-loading",{attrs:{"is-full-page":!0,active:e.isLogging,"can-cancel":!1},on:{"update:active":function(t){e.isLogging=t}}}),r("b-modal",{attrs:{active:e.showCreateModal,"has-modal-card":"","trap-focus":"","aria-role":"dialog","aria-modal":""},on:{"update:active":function(t){e.showCreateModal=t}}},[r("form",{attrs:{action:""}},[r("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[r("header",{staticClass:"modal-card-head"},[r("p",{staticClass:"modal-card-title"},[e._v("Create new Identity")])]),r("section",{staticClass:"modal-card-body"},[r("b-field",{attrs:{label:"Insert Password"}},[r("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your main password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e.wallet?e._e():r("b-field",{attrs:{label:"Repeat password"}},[r("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Repeat password",required:""},model:{value:e.passwordrepeat,callback:function(t){e.passwordrepeat=t},expression:"passwordrepeat"}})],1)],1),e.isCreating||e.isUpdating?e._e():r("footer",{staticClass:"modal-card-foot"},[e.wallet?e._e():r("button",{staticClass:"button is-primary",staticStyle:{width:"100%"},on:{click:e.createUser}},[e._v("CREATE")])]),e.isCreating?r("footer",{staticClass:"modal-card-foot"},[r("div",{staticStyle:{"text-align":"center"}},[e._v("Creating identity, please wait...")])]):e._e()])])])],1)},o=[],s=(r("ac1f"),r("1276"),r("96cf"),r("1da1")),i=r("07c9"),c={data:function(){return{scrypta:new i(!0),address:"",wallet:"",isLogging:!0,file:[],isCreating:!1,isUpdating:!1,showCreateModal:!1,password:"",passwordrepeat:""}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,t.next=3,r.scrypta.importBrowserSID();case 3:return r.wallet=t.sent,t.next=6,r.scrypta.returnDefaultIdentity();case 6:if(r.wallet=t.sent,!(r.wallet.length>0)){t.next=17;break}return a=r.wallet.split(":"),r.address=a[0],t.next=12,r.scrypta.returnIdentity(r.address);case 12:n=t.sent,r.wallet=n,r.isLogging=!1,t.next=18;break;case 17:r.isLogging=!1;case 18:case"end":return t.stop()}}),t)})))()},methods:{loadWalletFromFile:function(){var e=this,t=e.file,r=new FileReader;r.onload=function(){var t=r.result;e.$buefy.dialog.prompt({message:"Enter wallet password",inputAttrs:{type:"password"},trapFocus:!0,onConfirm:function(){var r=Object(s["a"])(regeneratorRuntime.mark((function r(a){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.scrypta.readKey(a,t);case 2:n=r.sent,!1!==n?(e.scrypta.importPrivateKey(n.prv,a),localStorage.setItem("SID",t),location.reload()):e.$buefy.toast.open({message:"Wrong password!",type:"is-danger"});case 4:case"end":return r.stop()}}),r)})));function a(e){return r.apply(this,arguments)}return a}()})},r.readAsText(t)},showCreate:function(){var e=this;e.showCreateModal=!0},logout:function(){localStorage.setItem("SID",""),location.reload()},createUser:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e,""!==r.password?r.passwordrepeat===r.password?(r.isCreating=!0,setTimeout(Object(s["a"])(regeneratorRuntime.mark((function e(){var t,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.scrypta.createAddress(r.password,!0);case 2:return t=e.sent,e.next=5,r.scrypta.returnIdentity(t.pub);case 5:return a=e.sent,r.address=t.pub,r.wallet=a,localStorage.setItem("SID",t.walletstore),r.showCreateModal=!1,r.password="",r.passwordrepeat="",e.next=14,r.scrypta.post("/init",{address:t.pub,airdrop:!0});case 14:n=e.sent,!1===n.airdrop_tx&&r.$buefy.toast.open({message:"Sorry, airdrop was not successful!",type:"is-danger"}),r.isCreating=!1;case 17:case"end":return e.stop()}}),e)}))),500)):r.$buefy.toast.open({message:"Passwords doesn't matches.",type:"is-danger"}):r.$buefy.toast.open({message:"Write a password first!",type:"is-danger"});case 2:case"end":return t.stop()}}),t)})))()}}},l=c,d=(r("034f"),r("2877")),u=Object(d["a"])(l,n,o,!1,null,null,null),p=u.exports,f=r("9483");Object(f["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7");var h=r("8c4f");a["a"].use(h["a"]);var m=[{path:"/",name:"Home",component:function(){return Promise.all([r.e("home~identities"),r.e("home")]).then(r.bind(null,"bb51"))}},{path:"/identities",name:"Identities",component:function(){return Promise.all([r.e("check~identities~share"),r.e("home~identities"),r.e("identities")]).then(r.bind(null,"9643"))}},{path:"/share/:identity",name:"Share",component:function(){return Promise.all([r.e("check~identities~share"),r.e("share")]).then(r.bind(null,"fbd8"))}},{path:"/check",name:"Check",component:function(){return Promise.all([r.e("check~identities~share"),r.e("check")]).then(r.bind(null,"83d7"))}}],g=new h["a"]({routes:m}),v=g,b=r("289d"),w=(r("73ec"),r("e06a")),y=r.n(w),k=r("9a3e");a["a"].use(k["default"]),a["a"].component("v-gravatar",y.a),a["a"].config.productionTip=!1,a["a"].use(b["a"]),new a["a"]({router:v,render:function(e){return e(p)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},"73ec":function(e,t,r){},8:function(e,t){},"85ec":function(e,t,r){},9:function(e,t){}});
//# sourceMappingURL=app.7b3dd970.js.map