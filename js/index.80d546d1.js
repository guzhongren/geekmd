(function(t){function e(e){for(var a,o,c=e[0],s=e[1],u=e[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={index:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/geekmd/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"2e76":function(t,e,n){"use strict";var a=n("78bc"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("28dd"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vue-drawer-layout",{ref:"drawer",attrs:{"drawer-width":300,enable:!1,animatable:!0,"z-index":0,"drawable-distance":Math.floor(200/3),"content-drawable":!0,backdrop:!0,"backdrop-opacity-range":[0,.4]},on:{"mask-click":t.handleToggleDrawer}},[n("div",{staticClass:"drawer",staticStyle:{height:"100vh"},attrs:{slot:"drawer"},slot:"drawer"},[n("sidebar")],1),n("div",{staticClass:"drawer-content",attrs:{slot:"content"},slot:"content"},[n("header",{staticClass:"drawer-content-header",on:{click:t.handleToggleDrawer}},[n("span",{staticClass:"drawer-content-title menu_item"},[t._v("极客MD编辑器")])]),n("markdown")],1)])],1)},o=[],c=(n("b0c0"),n("9f12")),s=n("53fe"),u=n("8b83"),l=n("c65a"),d=n("c03e"),p=n("f77e"),f=n("2fe1"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-container",attrs:{id:"markdown"}},[n("header",[n("div",{staticClass:"menu_group right"},[n("button",{staticClass:"menu_item",on:{click:t.reset}},[t._v("重置")]),n("button",{ref:"button",staticClass:"menu_item"},[t._v("复制")]),n("button",{staticClass:"menu_item",class:{active:1===t.viewState.length&&"edit"===t.viewState[0]},on:{click:function(e){t.viewState=["edit"]}}},[t._v("仅编辑 ")]),n("button",{staticClass:"menu_item",class:{active:1===t.viewState.length&&"preview"===t.viewState[0]},on:{click:function(e){t.viewState=["preview"]}}},[t._v("仅预览 ")]),n("button",{staticClass:"menu_item",class:{active:t.viewState.indexOf("edit")>=0&&t.viewState.indexOf("preview")>=0},on:{click:function(e){t.viewState=["edit","preview"]}}},[t._v("编辑|预览 ")])])]),t.viewState.indexOf("edit")>=0?n("div",{staticClass:"markdown-input-section section"},[n("div",{staticClass:"markdown-input-container"},[t.showSubjectInput?n("div",{staticClass:"subject-input"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rawEmailSubjectInput,expression:"rawEmailSubjectInput"}],attrs:{id:"emailSubject",type:"text",placeholder:"请输入邮件主题"},domProps:{value:t.rawEmailSubjectInput},on:{input:function(e){e.target.composing||(t.rawEmailSubjectInput=e.target.value)}}})]):t._e(),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rawInputMd,expression:"rawInputMd"}],ref:"inputTextArea",staticClass:"edit-text-area content",attrs:{autocomplete:"off"},domProps:{value:t.rawInputMd},on:{scroll:t.onInputScroll,input:function(e){e.target.composing||(t.rawInputMd=e.target.value)}}})])]):t._e(),t.viewState.indexOf("preview")>=0?n("Preview",{ref:"preview",attrs:{subject:t.rawEmailSubjectInput,content:t.rawInputMd}}):t._e()],1)},g=[],h=(n("99af"),n("4160"),n("0d03"),n("d3b7"),n("25f0"),n("159b"),n("60a3")),m=n("b311"),b=n.n(m),w=n("b012"),y=n.n(w),S=n("d4cd"),j=n("1487"),k=n("362d"),O=n.n(k),_=n("54f6"),x=n.n(_),I=n("7ba6"),T=n.n(I),C=n("ff97"),E=n.n(C),A=n("5121"),M=n.n(A),H=n("e6f9"),P=n.n(H),D=n("4bb9"),$=n.n(D),N=n("be03"),L=n.n(N),R=n("2d46"),U=n.n(R),F=n("5316"),J=n.n(F),z=n("8a99"),B=n.n(z),G=S({html:!0,xhtmlOut:!0,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight:function(t){return Object(j["highlightAuto"])(t).value}});G.use(O.a).use(T.a).use(x.a).use(E.a).use(M.a).use(P.a).use($.a).use(L.a).use(J.a).use(B.a,{dataType:!1,figcaption:!0,tabindex:!1,link:!0,figcaption_open:"div class='figcaption'",figure_open:"div class='figure'",figcaption_close:"div",figure_close:"div"}).use(U.a),G.renderer.rules.table_open=function(){return'<table class="table">'};var V,q,W,K,Q,X,Y,Z,tt,et,nt=G,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"html-preview-section section"},[n("div",{ref:"parsedHtmlNode",staticClass:"html-preview-content content"},[n("div",{staticClass:"mail-container"},[n("div",{staticClass:"content-container"},[n("div",{staticClass:"content-header"},[n("div",{staticClass:"title",domProps:{innerHTML:t._s(t.emailSubject()||"<空主题>")}})]),n("div",{staticClass:"content-body",domProps:{innerHTML:t._s(t.parsedHtml())}}),n("div",{staticClass:"content-footer"})]),n("div",{staticClass:"copyright-info"})])])])},rt=[],it=(n("ac1f"),n("5319"),n("1276"),V=Object(h["a"])({props:{subject:String,content:String}}),V((W=function(t){function e(){var t,n;Object(c["a"])(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=Object(u["a"])(this,(t=Object(l["a"])(e)).call.apply(t,[this].concat(r))),n.pageUrl=window.location.origin,n}return Object(d["a"])(e,t),Object(s["a"])(e,[{key:"previewHtmlNode",value:function(){return this.$refs.parsedHtmlNode}},{key:"emailSubject",value:function(){if(this.subject){var t=this.subject.split("\n");return'<div class="sub-title">'.concat(t[0],"</div>").concat(t[1]||"")}return"< 空主题 >"}},{key:"parsedHtml",value:function(){if(this.content){var t=e.parseRawMd(this.content);return nt.render(t)}return'<p style="margin-top: 100px;text-align: center;color: #5e6772">内容为空</p>'}}],[{key:"parseRawMd",value:function(t){return t.replace("\n","\r\n\n")}}]),e}(h["b"]),q=W))||q),ot=it,ct=n("2877"),st=Object(ct["a"])(ot,at,rt,!1,null,"271deb03",null),ut=st.exports,lt=function(){function t(e){Object(c["a"])(this,t),this.inputTextArea=e}return Object(s["a"])(t,[{key:"insertTextAtCursor",value:function(t){var e=this;return this.inputTextArea.focus(),new Promise((function(n){var a=document.execCommand("insertText",!1,t);if(!a&&"function"===typeof e.inputTextArea.setRangeText){var r=e.inputTextArea.selectionStart;e.inputTextArea.setRangeText(t),e.inputTextArea.selectionStart=r+t.length,e.inputTextArea.selectionEnd=r+t.length;var i=document.createEvent("UIEvent");i.initEvent("input",!0,!1),e.inputTextArea.dispatchEvent(i)}n(e.inputTextArea.value),e.inputTextArea.focus()}))}}],[{key:"syncElementScrolling",value:function(t,e){var n=e;n.scrollTop=(t.scrollTop+t.offsetHeight)/t.scrollHeight*e.scrollHeight-e.offsetHeight,n.scrollTop*=t.scrollTop/(t.scrollHeight-t.offsetHeight)}}]),t}(),dt=function(){function t(e){Object(c["a"])(this,t),this.id=e.id,this.alt=e.alt,this.data=e.data}return Object(s["a"])(t,[{key:"id",set:function(t){this.id=t}}]),t}(),pt=function(){function t(){Object(c["a"])(this,t),this.name="tech-radar",this.repo="".concat(window.location.protocol,"//").concat(window.location.hostname,":").concat(window.location.port,"/themes")}return Object(s["a"])(t,[{key:"useRepo",value:function(t){return this.repo=t,this}},{key:"useTheme",value:function(t){return this.name=t,this}},{key:"getImageSrc",value:function(t){return"".concat(this.path("image"),"/").concat(t)}},{key:"path",value:function(t){return"".concat(this.repo,"/").concat(t)}}]),t}(),ft=(K=Object(h["a"])({components:{Preview:ut}}),K((X=function(t){function e(){var t,n;Object(c["a"])(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=Object(u["a"])(this,(t=Object(l["a"])(e)).call.apply(t,[this].concat(r))),n.viewState=["edit","preview"],n.rawInputMd="",n.rawEmailSubjectInput="极客MD编辑器\n用Markdown写邮件",n.editHelper=null,n.imageStorage=[],n.showSubjectInput=!0,n.themeService=new pt,n}return Object(d["a"])(e,t),Object(s["a"])(e,[{key:"reset",value:function(){localStorage.removeItem("md.images"),localStorage.removeItem("md.emailSubjectInput"),localStorage.removeItem("md.content"),this.loadDefaultContent()}},{key:"mounted",value:function(){this.editHelper=new lt(this.$refs.inputTextArea),this.loadDefaultContent(),this.registerEvents()}},{key:"loadDefaultContent",value:function(){var t=this;try{this.imageStorage=JSON.parse(localStorage.getItem("md.images")||"[]")}catch(a){this.imageStorage=[]}this.imageStorage&&this.imageStorage.constructor===Array&&this.imageStorage.length>0?this.imageStorage.forEach((function(t){nt.image_add("".concat(t.id),t.data)})):this.imageStorage=[];var e=localStorage.getItem("md.emailSubjectInput");e&&(this.rawEmailSubjectInput=e);var n=localStorage.getItem("md.content");n?this.rawInputMd=n:this.$http.get("/data/example.md").then((function(e){t.rawInputMd=e.body}))}},{key:"registerEvents",value:function(){var t=this,n=this;this.$watch("rawEmailSubjectInput",(function(t){y()((function(){return localStorage.setItem("md.emailSubjectInput",t)}),500)()})),this.$watch("rawInputMd",(function(t){t||(n.imageStorage=[]),y()((function(){return localStorage.setItem("md.content",t)}),1e3)()})),this.$watch("imageStorage",(function(t){y()((function(){return localStorage.setItem("md.images",JSON.stringify(t))}),1e3)()}));var a=this.$refs.button,r=new b.a(a,{target:function(){return t.$refs.preview.previewHtmlNode()}});r.on("success",e.onCopy),r.on("error",e.onError);var i=this.$refs.inputTextArea;i.addEventListener("paste",(function(e){var n=e.clipboardData;if(n){var a=n.items;if(!a)return;for(var r=n.types||[],i=null,o=0;o<r.length;o+=1)if("Files"===r[o]){i=a[o];break}if(i&&"file"===i.kind){e.preventDefault(),e.stopPropagation();var c=i.getAsFile(),s=new FileReader;s.onload=function(){if(s){var e=s.result.toString()||"",n=new dt({id:0,alt:"图片描述",data:e});t.addImage(n),t.editHelper.insertTextAtCursor("\n![".concat(n.alt,"](").concat(n.id,")\n\n")||!1).then((function(e){t.rawInputMd=e}))}},c&&s.readAsDataURL(c)}}}))}},{key:"addImage",value:function(t){t.id("./images/".concat("".concat((new Date).getTime(),"_").concat(this.imageStorage.length,1),".pic")),this.imageStorage.push(t),nt.image_add("".concat(t.id),t.data)}},{key:"onInputScroll",value:function(t){this.$refs.preview&&(this.showSubjectInput=t.target.scrollTop<=10,lt.syncElementScrolling(t.srcElement,this.$refs.preview.previewHtmlNode()))}}],[{key:"onCopy",value:function(){alert("复制成功!")}},{key:"onError",value:function(){alert("复制失败")}}]),e}(h["b"]),Q=X))||Q),vt=ft,gt=(n("2e76"),Object(ct["a"])(vt,v,g,!1,null,null,null)),ht=gt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[t.isLoggedIn?n("div",[n("img",{staticStyle:{"border-radius":"50px"},attrs:{src:t.user.avatar_url,alt:"",width:"100"}}),n("div",[t._v(t._s(t.user.name))])]):n("a",{attrs:{href:"#"},on:{click:t.login}},[t._v("请登录")])])},bt=[],wt=n("0262"),yt=n.n(wt),St=n("f121"),jt=Object(h["a"])((Z=function(t){function e(){var t,n;Object(c["a"])(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return n=Object(u["a"])(this,(t=Object(l["a"])(e)).call.apply(t,[this].concat(r))),n.isLoggedIn=!1,n.user={},n}return Object(d["a"])(e,t),Object(s["a"])(e,[{key:"mounted",value:function(){var t=this,e=localStorage.getItem("access_token");if(e){var n=new yt.a({token:e}),a=n.getUser();a.getProfile().then((function(e){t.user=e.data,t.isLoggedIn=!0,n.getRepo(t.user.login,"geekmd-files").getDetails().catch((function(t){404===t.response.status&&a.createRepo({name:"geekmd-files",description:"Files generated by GeekMD",private:!0})}))})).catch((function(){t.isLoggedIn=!1}))}}},{key:"login",value:function(){var t=360,e=600,n=(window.screen.availHeight-30-e)/2,a=(window.screen.availWidth-10-t)/2,r="https://github.com/login/oauth/authorize?client_id=".concat(St["a"].get("GITHUB_CLIENT_ID"),"&scope=repo&redirect_uri=").concat(St["a"].get("HOME_URL"),"/auth");window.open(r,"newwindow","height=".concat(e,", width=").concat(t,", top=").concat(n,", left=").concat(a,", toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no, titlebar=no"))}}]),e}(h["b"]),Y=Z))||Y,kt=jt,Ot=Object(ct["a"])(kt,mt,bt,!1,null,"2673224e",null),_t=Ot.exports;a["a"].component(p["DrawerLayout"].name,p["DrawerLayout"]);var xt=(tt=Object(f["b"])({components:{markdown:ht,sidebar:_t}}),tt(et=function(t){function e(){return Object(c["a"])(this,e),Object(u["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(d["a"])(e,t),Object(s["a"])(e,[{key:"handleToggleDrawer",value:function(){this.$refs.drawer.toggle()}}]),e}(a["a"]))||et),It=xt,Tt=(n("5c0b"),Object(ct["a"])(It,i,o,!1,null,null,null)),Ct=Tt.exports,Et=n("9483");Object(Et["a"])("".concat("/geekmd/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,a["a"].use(r["a"]),new a["a"]({render:function(t){return t(Ct)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"78bc":function(t,e,n){},"9c0c":function(t,e,n){},f121:function(t,e,n){"use strict";var a={get:function(t){return Object({NODE_ENV:"production",BASE_URL:"/geekmd/"})["VUE_APP_".concat(t)]}};e["a"]=a}});