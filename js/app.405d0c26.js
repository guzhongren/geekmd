(function(t){function e(e){for(var a,o,c=e[0],s=e[1],u=e[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1:function(t,e){},"2e76":function(t,e,n){"use strict";var a=n("e73f"),i=n.n(a);i.a},"5c0b":function(t,e,n){"use strict";var a=n("e332"),i=n.n(a);i.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=n("28dd"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("markdown")],1)},o=[],c=n("d225"),s=n("308d"),u=n("6bb5"),l=n("4e2b"),d=n("9ab4"),p=n("60a3"),f=n("2fe1"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-container",attrs:{id:"markdown"}},[n("header",[n("span",{staticClass:"title menu_item"},[t._v("极客MD编辑器")]),n("div",{staticClass:"menu_group right"},[n("button",{ref:"button",staticClass:"menu_item"},[t._v("复制")]),n("button",{staticClass:"menu_item",class:{active:1===t.viewState.length&&"edit"===t.viewState[0]},on:{click:function(e){t.viewState=["edit"]}}},[t._v("仅编辑\n      ")]),n("button",{staticClass:"menu_item",class:{active:1===t.viewState.length&&"preview"===t.viewState[0]},on:{click:function(e){t.viewState=["preview"]}}},[t._v("仅预览\n      ")]),n("button",{staticClass:"menu_item",class:{active:t.viewState.indexOf("edit")>=0&&t.viewState.indexOf("preview")>=0},on:{click:function(e){t.viewState=["edit","preview"]}}},[t._v("编辑|预览\n      ")]),n("button",{staticClass:"menu_item",on:{click:t.reset}},[t._v("重置")])])]),t.viewState.indexOf("edit")>=0?n("div",{staticClass:"markdown-input-section section"},[n("div",{staticClass:"markdown-input-container"},[t.showSubjectInput?n("div",{staticClass:"subject-input"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rawEmailSubjectInput,expression:"rawEmailSubjectInput"}],attrs:{id:"emailSubject",type:"text",placeholder:"请输入邮件主题"},domProps:{value:t.rawEmailSubjectInput},on:{input:function(e){e.target.composing||(t.rawEmailSubjectInput=e.target.value)}}})]):t._e(),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rawInputMd,expression:"rawInputMd"}],ref:"inputTextArea",staticClass:"edit-text-area content",attrs:{autocomplete:"off"},domProps:{value:t.rawInputMd},on:{scroll:t.onInputScroll,input:function(e){e.target.composing||(t.rawInputMd=e.target.value)}}})])]):t._e(),t.viewState.indexOf("preview")>=0?n("div",{staticClass:"html-preview-section section"},[n("div",{ref:"parsedHtmlNode",staticClass:"html-preview-content content"},[n("div",{staticClass:"mail-container"},[n("div",{staticClass:"content-container"},[n("div",{staticClass:"content-header",style:t.background()},[n("div",{staticClass:"title",domProps:{innerHTML:t._s(t.emailSubject()||"<空主题>")}})]),n("div",{staticClass:"content-body",domProps:{innerHTML:t._s(t.parsedHtml())}}),n("div",{staticClass:"content-footer"})]),n("div",{staticClass:"copyright-info"},[t._v("\n          本邮件自豪地采用“"),n("a",{attrs:{href:t.pageUrl}},[t._v("极客MD")]),t._v("”编辑并排版\n        ")])])])]):t._e()])},m=[],g=(n("a481"),n("28a5"),n("6b54"),n("ac6a"),n("b0b4")),h=n("b311"),b=n.n(h),w=n("b012"),S=n.n(w),y=n("d4cd"),j=(n("096b"),n("1487")),x=n("362d"),k=n.n(x),I=n("54f6"),O=n.n(I),_=n("7ba6"),C=n.n(_),T=n("ff97"),E=n.n(T),M=n("5121"),A=n.n(M),H=n("e6f9"),P=n.n(H),$=n("4bb9"),D=n.n($),N=n("be03"),R=n.n(N),F=n("2d46"),J=n.n(F),L=n("5316"),U=n.n(L),q=n("15e0"),B=n.n(q);console.log(y["tokens"]);var z=y({html:!0,xhtmlOut:!0,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight:function(t){return Object(j["highlightAuto"])(t).value}});z.use(k.a).use(C.a).use(O.a).use(E.a).use(A.a).use(P.a).use(D.a).use(R.a).use(U.a).use(B.a,{dataType:!1,figcaption:!0,tabindex:!1,link:!1}).use(J.a);var G=z,K=function(){function t(e){Object(c["a"])(this,t),this.inputTextArea=e}return Object(g["a"])(t,[{key:"insertTextAtCursor",value:function(t){var e=this;return this.inputTextArea.focus(),new Promise(function(n){var a=document.execCommand("insertText",!1,t);if(!a&&"function"===typeof e.inputTextArea.setRangeText){var i=e.inputTextArea.selectionStart;e.inputTextArea.setRangeText(t),e.inputTextArea.selectionStart=e.inputTextArea.selectionEnd=i+t.length;var r=document.createEvent("UIEvent");r.initEvent("input",!0,!1),e.inputTextArea.dispatchEvent(r)}n(e.inputTextArea.value),e.inputTextArea.focus()})}},{key:"syncElementScrolling",value:function(t,e){e.scrollTop=(t.scrollTop+t.offsetHeight)/t.scrollHeight*e.scrollHeight-e.offsetHeight,e.scrollTop*=t.scrollTop/(t.scrollHeight-t.offsetHeight)}}]),t}(),Q=function t(e){Object(c["a"])(this,t),this.id=e.id,this.alt=e.alt,this.data=e.data},V=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.viewState=["edit","preview"],t.rawInputMd="",t.rawEmailSubjectInput="极客MD编辑器\n用Markdown写邮件",t.editHelper=null,t.imageStorage=[],t.showSubjectInput=!0,t.pageUrl=location.origin,t}return Object(l["a"])(e,t),Object(g["a"])(e,[{key:"reset",value:function(){localStorage.removeItem("md.images"),localStorage.removeItem("md.emailSubjectInput"),localStorage.removeItem("md.content"),this.loadDefaultContent()}},{key:"mounted",value:function(){this.editHelper=new K(this.$refs.inputTextArea),this.loadDefaultContent(),this.registerEvents()}},{key:"loadDefaultContent",value:function(){var t=this;try{this.imageStorage=JSON.parse(localStorage.getItem("md.images")||"[]")}catch(a){this.imageStorage=[]}this.imageStorage&&this.imageStorage.constructor===Array&&this.imageStorage.length>0?this.imageStorage.forEach(function(t){G.image_add("".concat(t.id),t.data)}):this.imageStorage=[];var e=localStorage.getItem("md.emailSubjectInput");e&&(this.rawEmailSubjectInput=e);var n=localStorage.getItem("md.content");n?this.rawInputMd=n:this.$http.get("/data/example.md").then(function(e){t.rawInputMd=e.body})}},{key:"registerEvents",value:function(){var t=this,e=this;this.$watch("rawEmailSubjectInput",function(t){S()(function(){return localStorage.setItem("md.emailSubjectInput",t)},500)()}),this.$watch("rawInputMd",function(t){t||(e.imageStorage=[]),S()(function(){return localStorage.setItem("md.content",t)},1e3)()}),this.$watch("imageStorage",function(t){S()(function(){return localStorage.setItem("md.images",JSON.stringify(t))},1e3)()});var n=this.$refs.parsedHtmlNode,a=this.$refs.button,i=new b.a(a,{target:function(){return n}});i.on("success",this.onCopy),i.on("error",this.onError);var r=this.$refs.inputTextArea;r.addEventListener("paste",function(e){var n=e.clipboardData;if(n){var a=n.items;if(!a)return;for(var i=n.types||[],r=null,o=0;o<i.length;o++)if("Files"===i[o]){r=a[o];break}if(r&&"file"===r.kind){e.preventDefault(),e.stopPropagation();var c=r.getAsFile(),s=new FileReader;s.onload=function(){if(s){var e=s.result.toString()||"",n=new Q({id:0,alt:"图片描述",data:e});t.addImage(n),t.editHelper.insertTextAtCursor("\n![".concat(n.alt,"](").concat(n.id,")\n\n")||!1).then(function(e){return t.rawInputMd=e})}},c&&s.readAsDataURL(c)}}})}},{key:"addImage",value:function(t){t.id="./images/".concat((new Date).getTime()+"_"+this.imageStorage.length+1,".pic"),this.imageStorage.push(t),G.image_add("".concat(t.id),t.data)}},{key:"background",value:function(){var t="".concat(location.protocol,"//").concat(location.hostname,":").concat(location.port);return{backgroundImage:'url("'.concat(t,'/themes/tech-radar/images/header.png")')}}},{key:"emailSubject",value:function(){if(this.rawEmailSubjectInput){var t=this.rawEmailSubjectInput.split("\n");return'<div class="sub-title">'.concat(t[0],"</div>").concat(t[1]||"")}return"< 空主题 >"}},{key:"parsedHtml",value:function(){if(this.rawInputMd){var t=this.parseRawMd(this.rawInputMd);return G.render(t)}return'<p style="margin-top: 100px;text-align: center;color: #5e6772">内容为空</p>'}},{key:"onInputScroll",value:function(t){this.showSubjectInput=t.target.scrollTop<=10,this.editHelper.syncElementScrolling(t.srcElement,this.$refs.parsedHtmlNode)}},{key:"onCopy",value:function(t){alert("复制成功!")}},{key:"onError",value:function(t){alert("复制失败")}},{key:"parseRawMd",value:function(t){return t.replace("\n","\r\n\n")}}]),e}(p["b"]);V=Object(d["a"])([p["a"]],V);var W=V,X=W,Y=(n("2e76"),n("2877")),Z=Object(Y["a"])(X,v,m,!1,null,null,null),tt=Z.exports,et=function(t){function e(){return Object(c["a"])(this,e),Object(s["a"])(this,Object(u["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(p["b"]);et=Object(d["a"])([Object(f["b"])({components:{markdown:tt}})],et);var nt=et,at=nt,it=(n("5c0b"),Object(Y["a"])(at,r,o,!1,null,null,null)),rt=it.exports,ot=n("9483");Object(ot["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,a["a"].use(i["a"]),new a["a"]({render:function(t){return t(rt)}}).$mount("#app")},e332:function(t,e,n){},e73f:function(t,e,n){}});