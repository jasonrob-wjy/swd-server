(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c1327fea"],{"159b":function(t,e,a){var i=a("da84"),n=a("fdbc"),o=a("17c2"),r=a("9112");for(var s in n){var c=i[s],l=c&&c.prototype;if(l&&l.forEach!==o)try{r(l,"forEach",o)}catch(d){l.forEach=o}}},"17c2":function(t,e,a){"use strict";var i=a("b727").forEach,n=a("b301");t.exports=n("forEach")?function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1cd8":function(t,e,a){"use strict";var i=a("555a"),n=a.n(i);n.a},"3d80":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"header__content",staticStyle:{position:"relative",overflow:"hidden"}},[a("Decorate"),a("div",{staticClass:"container"},[a("div",{staticClass:"he-row"},[a("div",{staticClass:"header_left"},[a("div",{staticClass:"logo"},[a("Icon",{attrs:{type:"ios-list-box"}})],1),a("div",{staticClass:"header__info"},[a("span",[a("h2",[t._v("部署列表")]),a("p",[t._v("这里将展示所有的"+t._s(t.$route.query.title)+"项目，可以根据需求切换不同的版本进行部署发布。")])])])])])])],1),a("section",[a("div",[a("div",[a("div",{staticClass:"content"},[a("Table",{attrs:{border:"",columns:t.columns,data:t.content},scopedSlots:t._u([{key:"author",fn:function(e){var i=e.row;return[a("div",{staticClass:"author"},[a("img",{attrs:{src:t.$url+i.url,alt:i.author}}),a("span",[t._v(t._s(i.author))])])]}},{key:"projectName",fn:function(e){var i=e.row;return[a("Tooltip",{attrs:{"max-width":"200",content:i.projectName,placement:"top"}},[a("span",{staticClass:"nowrap"},[t._v(t._s(i.projectName))])])]}},{key:"version",fn:function(e){var i=e.row;return[a("span",{staticStyle:{color:"#FAB67B"}},[t._v(t._s(i.version))])]}},{key:"idDeployment",fn:function(e){var i=e.row;return["yes"==i.idDeployment?a("span",{staticStyle:{color:"#6CD1A7"}},[t._v("已部署")]):a("span",{staticStyle:{color:"#EC6C73"}},[t._v("未部署")])]}},{key:"remark",fn:function(e){var i=e.row;return[a("Tooltip",{attrs:{"max-width":"200",content:i.remark,placement:"top"}},[a("span",{staticClass:"nowrap"},[t._v(t._s(i.remark))])])]}},{key:"webUrl",fn:function(e){var i=e.row;return["yes"==i.idDeployment?a("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:i.href,expression:"row.href",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"copy1"},[t._v("复制链接")]):a("span",{staticClass:"copy2"},[t._v("复制链接")])]}},{key:"mode",fn:function(e){var i=e.row;return[a("span",[t._v(t._s("1"!=i.mode?"静态部署":"自动部署"))])]}},{key:"action",fn:function(e){var i=e.row;return[a("div",{staticClass:"error-bot"},["yes"==i.idDeployment?a("Button",{attrs:{type:"success",size:"small"},on:{click:function(e){return t.handleShow(i)}}},[t._v("访问")]):a("Button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleDeploy(i)}}},[t._v("部署")]),t.user.bid==i.authorId?a("Button",{attrs:{type:"error",size:"small",disabled:"yes"==i.idDeployment},on:{click:function(e){return t.handleDelecte(i)}}},[t._v("删除")]):t._e()],1)]}}])})],1),a("div",{staticClass:"page"},[a("Page",{staticClass:"page-warp",attrs:{"prev-text":"上一页","next-text":"下一页","show-elevator":"","show-total":"",total:t.total,"show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changeSizePage}})],1)])])]),a("Modal",{attrs:{width:"360"},on:{"on-cancel":t.handleCancel},model:{value:t.isModel,callback:function(e){t.isModel=e},expression:"isModel"}},[a("p",{staticStyle:{color:"#f60","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"ios-information-circle"}}),a("span",[t._v("系统提示")])],1),a("div",{staticStyle:{"text-align":"center"}},[a("p",[t._v("此记录删除后将无法恢复，是否执行此次删除操作？")])]),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{attrs:{type:"error",size:"large",long:"",loading:t.modal_loading},on:{click:t.handleDelecteModal}},[t._v("确认删除")])],1)])],1)},n=[],o=(a("baa5"),a("fb6a"),a("b0c0"),a("159b"),a("f9a9")),r={components:{Decorate:o["a"]},name:"tablePage",data:function(){return{pageNo:1,pageSize:10,total:10,isModel:!1,modal_loading:!1,columns:[{title:"项目名称",width:180,slot:"projectName"},{title:"发布者",width:160,slot:"author"},{title:"版本号",width:100,slot:"version"},{title:"状态",width:80,slot:"idDeployment"},{title:"部署模式",width:100,slot:"mode"},{title:"描述",slot:"remark"},{title:"创建时间",width:170,key:"time"},{title:"访问链接",width:110,slot:"webUrl"},{title:"操作",slot:"action",align:"center",width:150}],data6:[{name:"John Brown",age:18,address:"New York No. 1 Lake Park"}],content:[],itemData:{},isOpen:!0,cityList1:[],cityList2:[{name:"已部署",value:"yes"},{name:"未部署",value:"no"}],titleVal:"",authorVal:"",publishVal:"",user:{},typeArr:[],cityList3:[],classVal:""}},props:{msg:String},mounted:function(){this.user=this.$store.state.variable.info,this.handleGetData()},methods:{handleGetData:function(){var t=this,e={pageNo:this.pageNo,pageSize:this.pageSize,accurate:1,key:this.$route.query.bid};this.$axios.get("/api/deploy/edition/get",{params:e}).then((function(e){if(e.data.result){var a=e.data.list;a.forEach((function(e){var a=t.$url;if(""==e.port)a=t.$url+e.webUrl+"/index.html";else{var i=t.$url.slice(0,t.$url.lastIndexOf(":")+1);a=i+e.port}e.href=a})),t.content=a,t.total=e.data.total}else t.$Message["error"]({background:!0,content:"数据请求失败！"})})).catch((function(t){}))},handleDeploy:function(t){var e=this;if("admin"===this.user.name)this.$Notice.destroy(),this.$Notice.error({title:"系统温馨提示",desc:"您不是注册用户，请注册登录后操作！"});else{this.$Message.destroy(),this.$Message.loading({content:"项目部署中，请稍后...",duration:0});var a={root:t.root,version:t.version,catalog:t.catalog,bid:t.bid,projectName:t.projectName,key:t.key};this.$axios.post("/api/deploy/edition/transfer",this.$qs.stringify(a)).then((function(t){e.$Message.destroy(),t.data.result?(e.$Message["success"]({background:!0,content:"项目部署成功！"}),e.handleGetData()):e.$Message["error"]({background:!0,content:"项目部署失败！"})})).catch((function(t){this.$Message.destroy(),this.$Message["error"]({background:!0,content:"项目部署失败！"})}))}},changePage:function(t){this.pageNo=t,this.handleGetData()},changeSizePage:function(t){this.pageSize=t,this.handleGetData()},handleShow:function(t){var e=window.open();e.opener=null,e.location=t.href,e.target="_blank"},handleCancel:function(){this.isModel=!1},handleDelecte:function(t){this.itemData=t,this.isModel=!0},handleDelecteModal:function(){var t=this;this.$Message.destroy(),this.modal_loading=!0;var e={bid:this.itemData.bid,root:this.itemData.root,version:this.itemData.version,catalog:this.itemData.catalog};this.$axios.post("/api/deploy/edition/delete",this.$qs.stringify(e)).then((function(e){e.data.result?t.handleGetData():t.$Message["error"]({background:!0,content:"数据删除失败！"}),t.modal_loading=!1,t.isModel=!1})).catch((function(t){}))},onCopy:function(){this.$Message.destroy(),this.$Message["success"]({background:!0,content:"复制成功！"})},onError:function(){this.$Message.destroy(),this.$Message["success"]({background:!0,content:"复制失败！"})}}},s=r,c=(a("9aac"),a("1cd8"),a("2877")),l=Object(c["a"])(s,i,n,!1,null,"7fc4a690",null);e["default"]=l.exports},"555a":function(t,e,a){},8418:function(t,e,a){"use strict";var i=a("c04e"),n=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var r=i(e);r in t?n.f(t,r,o(0,a)):t[r]=a}},"86ba":function(t,e,a){},"9aac":function(t,e,a){"use strict";var i=a("86ba"),n=a.n(i);n.a},b0c0:function(t,e,a){var i=a("83ab"),n=a("9bf2").f,o=Function.prototype,r=o.toString,s=/^\s*function ([^ (]*)/,c="name";!i||c in o||n(o,c,{configurable:!0,get:function(){try{return r.call(this).match(s)[1]}catch(t){return""}}})},b301:function(t,e,a){"use strict";var i=a("d039");t.exports=function(t,e){var a=[][t];return!a||!i((function(){a.call(null,e||function(){throw 1},1)}))}},baa5:function(t,e,a){var i=a("23e7"),n=a("e58c");i({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},e58c:function(t,e,a){"use strict";var i=a("fc6a"),n=a("a691"),o=a("50c4"),r=a("b301"),s=Math.min,c=[].lastIndexOf,l=!!c&&1/[1].lastIndexOf(1,-0)<0,d=r("lastIndexOf");t.exports=l||d?function(t){if(l)return c.apply(this,arguments)||0;var e=i(this),a=o(e.length),r=a-1;for(arguments.length>1&&(r=s(r,n(arguments[1]))),r<0&&(r=a+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}:c},f9a9:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spots"},[a("span",{staticClass:"decorate",staticStyle:{background:"rgb(201, 27, 0)",width:"51px",height:"51px","margin-top":"-25.5px","margin-left":"-25.5px",top:"55.6675%",left:"5%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(23, 90, 171)",width:"28px",height:"28px","margin-top":"-14px","margin-left":"-14px",top:"10.2246%",left:"15%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(233, 34, 36)",width:"37px",height:"37px","margin-top":"-18.5px","margin-left":"-18.5px",top:"71.9133%",left:"25%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(0, 62, 135)",width:"47px",height:"47px","margin-top":"-23.5px","margin-left":"-23.5px",top:"22.8839%",left:"35%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(0, 135, 231)",width:"31px",height:"31px","margin-top":"-15.5px","margin-left":"-15.5px",top:"5.09172%",left:"45%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(23, 90, 171)",width:"52px",height:"52px","margin-top":"-26px","margin-left":"-26px",top:"32.1525%",left:"55%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(255, 86, 0)",width:"29px",height:"29px","margin-top":"-14.5px","margin-left":"-14.5px",top:"46.8035%",left:"65%"}}),a("span",{staticClass:"decorate",staticStyle:{width:"44px",height:"44px","margin-top":"-22px","margin-left":"-22px",top:"97.8537%",left:"75%"}}),a("span",{staticClass:"decorate",staticStyle:{background:"rgb(201, 27, 0)",width:"43px",height:"43px","margin-top":"-21.5px","margin-left":"-21.5px",top:"30.7088%",left:"85%"}}),a("span",{staticClass:"decorate",staticStyle:{width:"27px",height:"27px","margin-top":"-13.5px","margin-left":"-13.5px",top:"7.43497%",left:"95%"}})])}],o=a("2877"),r={},s=Object(o["a"])(r,i,n,!1,null,null,null);e["a"]=s.exports},fb6a:function(t,e,a){"use strict";var i=a("23e7"),n=a("861d"),o=a("e8b5"),r=a("23cb"),s=a("50c4"),c=a("fc6a"),l=a("8418"),d=a("1dde"),p=a("b622"),u=p("species"),h=[].slice,f=Math.max;i({target:"Array",proto:!0,forced:!d("slice")},{slice:function(t,e){var a,i,d,p=c(this),g=s(p.length),m=r(t,g),v=r(void 0===e?g:e,g);if(o(p)&&(a=p.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?n(a)&&(a=a[u],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(p,m,v);for(i=new(void 0===a?Array:a)(f(v-m,0)),d=0;m<v;m++,d++)m in p&&l(i,d,p[m]);return i.length=d,i}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);