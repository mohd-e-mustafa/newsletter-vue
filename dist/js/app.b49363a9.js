(function(e){function t(t){for(var n,a,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);h&&h(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==s[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9cd90880"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={about:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"47f7ff79"}[e]+".css",s=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],h.parentNode.removeChild(h),r(o)},h.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(h);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}s[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var h=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0f0f":function(e,t,r){},"21bb":function(e,t,r){"use strict";r("2dad")},"2d95":function(e,t,r){"use strict";r("9afd")},"2dad":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view")],1)},s=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("h1",[e._v("Newsletter")]),r("div",{attrs:{id:"nav"}},[r("div",{staticClass:"right"},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)])])},i=[],c={name:"Header"},u=c,l=(r("2d95"),r("2877")),f=Object(l["a"])(u,o,i,!1,null,"41e0fa1f",null),h=f.exports,p={name:"App",components:{Header:h}},d=p,v=(r("5c0b"),Object(l["a"])(d,a,s,!1,null,null,null)),m=v.exports,g=(r("d3b7"),r("8c4f")),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("News",{attrs:{apiKey:e.apiKey}})],1)},w=[],y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"search"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"searchbar"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.fetchSearchNews(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchword,expression:"searchword"}],attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.searchword},on:{input:function(t){t.target.composing||(e.searchword=t.target.value)}}})]),r("div",{staticClass:"search-icons"},[e.isBusy?r("i",{staticClass:"fas fa-spinner fa-spin"}):r("i",{staticClass:"fas fa-search",on:{click:e.fetchSearchNews}}),r("i",{staticClass:"fas fa-times",on:{click:e.fetchTopNews}})])]),r("div",{staticClass:"result-list"},e._l(e.articles,(function(t,n){return r("article",{key:n,on:{click:function(r){return e.navTo(t.url)}}},[r("header",[t.urlToImage?r("img",{staticClass:"rounded",attrs:{src:t.urlToImage,alt:""}}):r("i",{staticClass:"fas fa-image"})]),r("section",{domProps:{innerHTML:e._s(t.title)}}),e._m(0,!0)])})),0),r("div",{ref:"infinitescrolltrigger",attrs:{id:"scroll-trigger"}},[e.showloader?r("i",{staticClass:"fas fa-spinner fa-spin"}):e._e()])])])},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",[r("i",{staticClass:"fas fa-chevron-right"})])}],P=(r("4160"),r("159b"),{props:["apiKey"],data:function(){return{apiUrl:"",isBusy:!1,showloader:!1,currentPage:1,totalResults:0,maxPerPage:20,searchword:"",articles:[],country:"us"}},computed:{pageCount:function(){return Math.ceil(this.totalResults/this.maxPerPage)}},methods:{navTo:function(e){window.open(e)},resetData:function(){this.currentPage=1,this.articles=[]},fetchSearchNews:function(){""!==this.searchword?(this.apiUrl="https://newsapi.org/v2/everything?q="+this.searchword+"&pageSize="+this.maxPerPage+"&apiKey="+this.apiKey,this.isBusy=!0,this.resetData(),this.fetchData()):this.fetchTopNews()},fetchTopNews:function(){this.apiUrl="https://newsapi.org/v2/top-headlines?country="+this.country+"&pageSize="+this.maxPerPage+"&apiKey="+this.apiKey,this.isBusy=!0,this.searchword="",this.resetData(),this.fetchData()},fetchData:function(){var e=this,t=new Request(this.apiUrl+"&page="+this.currentPage);fetch(t).then((function(e){return e.json()})).then((function(t){e.totalResults=t.totalResults,t.articles.forEach((function(t){e.articles.push(t)})),e.isBusy=!1,e.showloader=!1})).catch((function(e){console.log(e)}))},scrollTrigger:function(){var e=this,t=new IntersectionObserver((function(t){t.forEach((function(t){t.intersectionRatio>0&&e.currentPage<e.pageCount&&(e.showloader=!0,e.currentPage+=1,e.fetchData())}))}));t.observe(this.$refs.infinitescrolltrigger)}},created:function(){this.fetchTopNews()},mounted:function(){this.scrollTrigger()}}),C=P,T=(r("8b88"),Object(l["a"])(C,y,_,!1,null,"60db5c43",null)),x=T.exports,O={name:"app",data:function(){return{apiKey:"565891068abe4e80a7ed5c4b6bf73815"}},components:{News:x}},j=O,E=(r("21bb"),Object(l["a"])(j,b,w,!1,null,null,null)),N=E.exports;n["a"].use(g["a"]);var S=new g["a"]({routes:[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]});n["a"].config.productionTip=!1,new n["a"]({router:S,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"8b88":function(e,t,r){"use strict";r("0f0f")},"9afd":function(e,t,r){},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.b49363a9.js.map