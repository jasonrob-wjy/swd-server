(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f41c589"],{"1e69":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shell-box"},[s("div",{staticClass:"panel-shell"},[s("div",{staticClass:"output-view"},[t._v('☺ Welcome to the web command line tool "quit"：退出、"clear"：清屏".')]),s("br"),s("div",{staticClass:"shell-view"},[s("span",{staticClass:"prompt"},[t._v(">")]),t._v(" "+t._s()+" "),s("span",{staticClass:"input"},[s("span",{staticClass:"left"}),s("span",{staticClass:"cursor",domProps:{innerHTML:t._s(t.html)}}),s("span",{staticClass:"right"})])])])])},l=[],i=(s("99af"),s("c975"),s("b0c0"),s("ac1f"),s("5319"),s("498a"),s("1157")),a=s.n(i),r=s("c46f"),c={data:function(){return{html:"&nbsp;",isOk:!1,socket:null,timer:null,mas:""}},mounted:function(){var t=this;this.$nextTick((function(){t.handleInit()}))},methods:{template_output:function(t){return'<div class="output-view '.concat(this.isOk?"":"pass",'"><span class="').concat(t.classVal,'">').concat(t.separate,'</span>&nbsp;<span class="').concat(t.classVal,'">').concat(t.value,"</span></div>")},handleInit:function(){var t=this,e=[],s=0,n=a()(".shell-box .left"),l=a()(".shell-box .right"),i=a()(".shell-box .cursor"),c=a()(".shell-box .shell-view"),h=a()(".shell-box .input .left"),o="",u="",p="",f="",d=!1;this.timer=setInterval((function(){i.toggleClass("blink")}),1e3),a()(document).keypress((function(t){32===t.which?n.append("&nbsp;"):13!==t.which&&n.append(String.fromCharCode(t.which))})),this.addTemplate("Please enter the login password!"),a()(document).keydown((function(m){if(13===m.which){var x=a.a.trim(h.text()),b=!0;""!==x&&(e.push(x),e=r["a"].uniq(e)),e.length>0&&(s=e.length-1),"help"===x?'Type JavaScript syntax for interactive console, or type "clear" to clear terminal.':"clear"===x?(c.siblings().remove(),b=!1):"quit"===x?t.handleRouter():t.isOk?t.$socket.send(x.replace(" "," ")):t.handleSubmit(x),n.text(""),i.html("&nbsp;"),l.text(""),b&&c.before(t.template_output({separate:"$",value:x,classVal:"cmd-class"}))}else if(8===m.which){if(m.preventDefault(),o=n.text(),0===o.length)return;o=o.substring(0,o.length-1),n.text(o)}else if(37===m.which){if(o=n.text(),p=l.text(),u=i.text(),f="",0===o.length)return;f=o.substring(o.length-1,o.length),o=o.substring(0,o.length-1),"&nbsp;"===i.html()&&0===p.length&&""!==a.a.trim(f)||(p=u+p),n.text(o),i.text(f),l.text(p)}else if(39===m.which){if(o=n.text(),p=l.text(),u=i.text(),d=!1,0===p.length){if("&nbsp;"===i.html())return;d=!0}o+=u,d?(i.html("&nbsp;"),p=""):(i.text(p.substring(0,1)),p=p.substring(1)),n.text(o),l.text(p)}else if(38===m.which){if(s<0)return;n.text(e[s]),s--,i.html("&nbsp;"),l.text("")}else if(40===m.which)s>=e.length-1?n.text(""):(s++,n.text(e[s])),i.html("&nbsp;"),l.text("");else if(46===m.which){if(p=l.text(),0===p.length){if("&nbsp;"===i.html())return;d=!0}d?i.html("&nbsp;"):(i.text(p.substring(0,1)),l.text(p.substring(1)))}else if(35===m.which){p=l.text(),u=i.text();var g=h.text();if(0===p.length&&0===a.a.trim(u).length)return;n.text(g),i.html("&nbsp;"),l.text("")}else if(36===m.which){o=n.text();var v=h.text();if(0===o.length)return;n.text(""),i.text(v.substring(0,1)),l.text(v.substring(1,v.length))}else 85===m.which&&m.ctrlKey?(m.preventDefault(),n.text("")):76===m.which&&m.ctrlKey&&(m.preventDefault(),c.siblings().remove())})),t.$socket.on("message",(function(e){t.addTemplate(e)}))},addTemplate:function(t){var e=t.indexOf("successfully")>-1,s=t.indexOf("rror")>-1?"error":e?"":"info";a()(".shell-box .shell-view").before(this.template_output({separate:e?"√":"&gt;",value:t,classVal:s})+"<br class=".concat(this.isOk?"":"pass",">"))},handleRouter:function(){this.$router.push({path:"/"})},handleSubmit:function(t){var e=this,s=this.$store.state.variable.info,n={name:s.name,pass:t,shell:"yes"};this.$axios.post("/api/person/user/login",this.$qs.stringify(n)).then((function(t){t.data.result?(e.isOk=!0,a()(".pass").remove(),e.addTemplate("You have successfully logged in，Web command line tool connected successfully!")):(e.addTemplate("Wrong password, please input again!"),e.isOk=!1)})).catch((function(t){this.isOk=!1}))}},beforeDestroy:function(){window.clearInterval(this.timer),window.location.reload()}},h=c,o=(s("5128"),s("2877")),u=Object(o["a"])(h,n,l,!1,null,null,null);e["default"]=u.exports},5128:function(t,e,s){"use strict";var n=s("8fe0"),l=s.n(n);l.a},"8fe0":function(t,e,s){}}]);