(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bf513dd"],{"159b":function(t,e,a){var n=a("da84"),i=a("fdbc"),s=a("17c2"),r=a("9112");for(var o in i){var c=n[o],l=c&&c.prototype;if(l&&l.forEach!==s)try{r(l,"forEach",s)}catch(d){l.forEach=s}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,i=a("b301");t.exports=i("forEach")?function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},6296:function(t,e,a){"use strict";var n=a("ff0e"),i=a.n(n);i.a},8418:function(t,e,a){"use strict";var n=a("c04e"),i=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var r=n(e);r in t?i.f(t,r,s(0,a)):t[r]=a}},a07a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"header__content",staticStyle:{position:"relative",overflow:"hidden"}},[a("Decorate"),a("div",{staticClass:"container"},[a("div",{staticClass:"he-row"},[a("div",{staticClass:"header_left"},[a("div",{staticClass:"logo"},[a("Icon",{attrs:{type:"md-cube"}})],1),t._m(0)]),a("div",{staticClass:"header__control"},[a("RadioGroup",{attrs:{type:"button"},on:{"on-change":t.handleOnChange},model:{value:t.qurey,callback:function(e){t.qurey=e},expression:"qurey"}},[a("Radio",{attrs:{label:"全部"}}),a("Radio",{attrs:{label:"我创建的"}}),a("Radio",{attrs:{label:"已收藏的"}})],1),a("Button",{staticStyle:{"margin-left":"60px"},attrs:{shape:"circle",icon:"ios-power-outline"},on:{click:t.handleServer}})],1)])])],1),a("section",[a("div",[a("transition",{attrs:{name:"fade"}},[t.projectData.length?a("ul",{staticClass:"box"},t._l(t.projectData,(function(e,n){return a("li",{key:e.bid+n},[a("div",{staticClass:"icon"},["1"!==e.collect?a("Icon",{attrs:{type:"ios-star-outline",size:"26"},on:{click:function(a){return t.handleStar(e.bid,"1")}}}):a("Icon",{attrs:{type:"ios-star",size:"26"},on:{click:function(a){return t.handleStar(e.bid,"0")}}})],1),a("h2",{on:{click:function(a){return t.handleHref(e)}}},[t._v(t._s(e.projectName))]),a("p",[a("Icon",{attrs:{type:"ios-code-working",size:"20"}}),a("span",[t._v(t._s(e.version))])],1),a("p",[a("Icon",{attrs:{type:"ios-settings-outline",size:"18"}}),a("span",[t._v(t._s("0"==e.mode?"静态部署":"自动部署"))])],1),a("p",[a("Icon",{attrs:{type:"ios-time-outline",size:"18"}}),a("span",[t._v(t._s(e.time))])],1),a("div",{staticClass:"description"},[t._v(t._s(e.remark))]),a("div",{staticClass:"bottom-list"},[a("Tooltip",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.href,expression:"item.href",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"border-r-no",attrs:{content:"复制链接",placement:"top"}},[a("Icon",{attrs:{type:"ios-link",size:"20"}})],1),t.user.bid==e.authorId?a("Tooltip",{staticClass:"border-r-no",attrs:{content:"删除",placement:"top"},nativeOn:{click:function(a){return t.handleDelete(e)}}},[a("Icon",{attrs:{type:"ios-trash",size:"20"}})],1):t._e(),a("Tooltip",{staticClass:"border-r-no",attrs:{content:"部署列表",placement:"top"},nativeOn:{click:function(a){return t.handleRouter("/tablePage",e.key)}}},[a("Icon",{attrs:{type:"ios-list-box-outline",size:"20"}})],1),a("Tooltip",{attrs:{content:"更新项目",placement:"top"},nativeOn:{click:function(a){return t.handleRouter("/addpage",e.key,e)}}},[a("Icon",{attrs:{type:"md-repeat",size:"20"}})],1)],1)])})),0):t._e()]),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.projectData.length,expression:"!projectData.length"}],staticClass:"placeholder"},[a("p",[t._v("ヾ(^∀^)ﾉ")]),a("p",[t._v(" 暂无内容哦，快去 "),a("router-link",{attrs:{to:"/addpage"}},[t._v("创建项目")]),t._v("吧！ ")],1)]),a("div",{staticClass:"em-add",on:{click:function(e){return t.handleRouter("/addpage")}}},[a("Icon",{attrs:{type:"md-add"}})],1),a("Modal",{attrs:{width:"360"},on:{"on-cancel":t.handleCancel},model:{value:t.isDelete,callback:function(e){t.isDelete=e},expression:"isDelete"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"ios-information-circle"}}),a("span",[t._v("系统提示")])],1),a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v(" 出于某些原因，删除也许会失败。但如果你执意删除，必须知道此操作无法撤消，这将永久删除。 "),a("br"),t._v("请输入项目名称以进行确认。 ")]),a("Select",{staticStyle:{width:"98%","margin-top":"15px"},on:{"on-change":t.handleSearch},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}},t._l(t.projectNameArr,(function(e,n){return a("Option",{key:e.key+n,attrs:{value:e.key}},[t._v(t._s(e.projectName))])})),1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"error",size:"large",long:"",disabled:t.buttonDisabled},on:{click:t.handleDelModal}},[t._v("确认删除")])],1)])],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header__info"},[a("span",[a("h2",[t._v("工作台")]),a("p",[t._v("这里将展示你的个人项目，当然也包括协同项目。")])])])}],s=(a("baa5"),a("fb6a"),a("b0c0"),a("159b"),a("f9a9")),r={components:{Decorate:s["a"]},name:"projecrtlist",data:function(){return{projectData:[],qurey:"我创建的",authorId:"",root:"",collect:"",key:"",keyInput:"",projectNameArr:[],isDelete:!1,buttonDisabled:!0,user:{}}},mounted:function(){this.$Message.destroy(),this.user=this.$store.state.variable.info,this.authorId=this.user.bid,"admin"===this.user.name&&(this.authorId="",this.collect="",this.qurey="全部"),this.handleGetData()},methods:{handleGetData:function(){var t=this,e={idDeployment:"yes"};this.authorId&&(e.authorId=this.authorId),this.collect&&(e.collect=this.collect),this.key&&(e.key=this.key),this.$axios.get("/api/deploy/edition/get",{params:e}).then((function(e){if(e.data.result){var a=e.data.list;a.forEach((function(e){var a=t.$url;if(""==e.port)a=t.$url+e.webUrl+"/index.html";else{var n=t.$url.slice(0,t.$url.lastIndexOf(":")+1);a=n+e.port}e.href=a})),t.projectData=a,t.projectNameArr=e.data.project,t.$store.commit("setProjectTitleArr",e.data.project)}else t.$Message["error"]({background:!0,content:"数据请求失败！"})})).catch((function(t){}))},handleOnChange:function(t){switch(this.authorId="",this.collect="",this.handleCancel(),t){case"我创建的":this.authorId=this.user.bid;break;case"已收藏的":this.collect="1";break;default:break}this.handleGetData()},handleServer:function(){var t=this;this.$axios.post("/api/service/operation/open",this.$qs.stringify({port:"all"})).then((function(e){t.$Message.destroy(),e.data.result?t.$Modal.success({title:"系统提示",content:"所有端口服务已重启成功！"}):t.$Message["error"]({background:!0,content:"操作失败！"})})).catch((function(t){}))},handleStar:function(t,e){var a=this;this.$axios.post("/api/deploy/edition/update",this.$qs.stringify({bid:t,collect:e})).then((function(t){var n="1"==e?"收藏成功！":"已取消收藏！";a.$Message.destroy(),t.data.result?(a.$Message["success"]({background:!0,content:n}),a.handleGetData()):a.$Message["error"]({background:!0,content:"操作失败！"})})).catch((function(t){}))},handleSearch:function(t){t&&this.keyInput===t?this.buttonDisabled=!1:this.buttonDisabled=!0},handleCancel:function(){this.key="",this.keyInput="",this.buttonDisabled=!0},handleDelModal:function(){var t=this;this.$Message.destroy(),this.$axios.post("/api/deploy/edition/delete",this.$qs.stringify({key:this.keyInput,vi:"1",root:this.root})).then((function(e){e.data.result?(t.$Message["success"]({background:!0,content:"删除成功！"}),t.isDelete=!1,t.handleCancel(),t.handleGetData()):t.$Message["error"]({background:!0,content:"删除失败！"})})).catch((function(t){}))},handleDelete:function(t){this.isDelete=!0,this.keyInput=t.key,this.root=t.root},handleRouter:function(t,e,a){this.$router.push({path:t,query:{bid:e}})},handleHref:function(t){var e=window.open();e.opener=null,e.location=t.href,e.target="_blank"},onCopy:function(){this.$Message.destroy(),this.$Message["success"]({background:!0,content:"链接地址已复制到粘贴板！"})},onError:function(){this.$Message.destroy(),this.$Message["success"]({background:!0,content:"复制失败！"})}}},o=r,c=(a("6296"),a("2877")),l=Object(c["a"])(o,n,i,!1,null,"c2ec5622",null);e["default"]=l.exports},b0c0:function(t,e,a){var n=a("83ab"),i=a("9bf2").f,s=Function.prototype,r=s.toString,o=/^\s*function ([^ (]*)/,c="name";!n||c in s||i(s,c,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})},b301:function(t,e,a){"use strict";var n=a("d039");t.exports=function(t,e){var a=[][t];return!a||!n((function(){a.call(null,e||function(){throw 1},1)}))}},baa5:function(t,e,a){var n=a("23e7"),i=a("e58c");n({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},e58c:function(t,e,a){"use strict";var n=a("fc6a"),i=a("a691"),s=a("50c4"),r=a("b301"),o=Math.min,c=[].lastIndexOf,l=!!c&&1/[1].lastIndexOf(1,-0)<0,d=r("lastIndexOf");t.exports=l||d?function(t){if(l)return c.apply(this,arguments)||0;var e=n(this),a=s(e.length),r=a-1;for(arguments.length>1&&(r=o(r,i(arguments[1]))),r<0&&(r=a+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}:c},f9a9:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spots"},[a("span",{staticClass:"decorate",staticStyle:{background:"rgb(201, 27, 0)",width:"51px",height:"51px","margin-top":"-25.5px","margin-left":"-25.5px",top:"55.6675%",left:"5%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(23, 90, 171)",width:"28px",height:"28px","margin-top":"-14px","margin-left":"-14px",top:"10.2246%",left:"15%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(233, 34, 36)",width:"37px",height:"37px","margin-top":"-18.5px","margin-left":"-18.5px",top:"71.9133%",left:"25%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(0, 62, 135)",width:"47px",height:"47px","margin-top":"-23.5px","margin-left":"-23.5px",top:"22.8839%",left:"35%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(0, 135, 231)",width:"31px",height:"31px","margin-top":"-15.5px","margin-left":"-15.5px",top:"5.09172%",left:"45%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(23, 90, 171)",width:"52px",height:"52px","margin-top":"-26px","margin-left":"-26px",top:"32.1525%",left:"55%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(255, 86, 0)",width:"29px",height:"29px","margin-top":"-14.5px","margin-left":"-14.5px",top:"46.8035%",left:"65%"}}),a("span",{staticClass:"decorate",staticStyle:{width:"44px",height:"44px","margin-top":"-22px","margin-left":"-22px",top:"97.8537%",left:"75%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(201, 27, 0)",width:"43px",height:"43px","margin-top":"-21.5px","margin-left":"-21.5px",top:"30.7088%",left:"85%"}}),a("span",{staticClass:"decorate",staticStyle:{width:"27px",height:"27px","margin-top":"-13.5px","margin-left":"-13.5px",top:"7.43497%",left:"95%"}})])}],s=a("2877"),r={},o=Object(s["a"])(r,n,i,!1,null,null,null);e["a"]=o.exports},fb6a:function(t,e,a){"use strict";var n=a("23e7"),i=a("861d"),s=a("e8b5"),r=a("23cb"),o=a("50c4"),c=a("fc6a"),l=a("8418"),d=a("1dde"),p=a("b622"),u=p("species"),h=[].slice,f=Math.max;n({target:"Array",proto:!0,forced:!d("slice")},{slice:function(t,e){var a,n,d,p=c(this),g=o(p.length),b=r(t,g),v=r(void 0===e?g:e,g);if(s(p)&&(a=p.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?i(a)&&(a=a[u],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(p,b,v);for(n=new(void 0===a?Array:a)(f(v-b,0)),d=0;b<v;b++,d++)b in p&&l(n,d,p[b]);return n.length=d,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},ff0e:function(t,e,a){}}]);