(function(t){function e(e){for(var o,n,r=e[0],l=e[1],c=e[2],d=0,u=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);m&&m(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],o=!0,n=1;n<i.length;n++){var r=i[n];0!==s[r]&&(o=!1)}o&&(a.splice(e--,1),t=l(l.s=i[0]))}return t}var o={},n={app:0},s={app:0},a=[];function r(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-4b3046d4":"5f0e3f8a"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(t){var e=[],i={"chunk-4b3046d4":1};n[t]?e.push(n[t]):0!==n[t]&&i[t]&&e.push(n[t]=new Promise((function(e,i){for(var o="css/"+({}[t]||t)+"."+{"chunk-4b3046d4":"c2fac771"}[t]+".css",s=l.p+o,a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var c=a[r],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===o||d===s))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){c=u[r],d=c.getAttribute("data-href");if(d===o||d===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||s,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete n[t],m.parentNode.removeChild(m),i(a)},m.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[t]=0})));var o=s[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,i){o=s[t]=[e,i]}));e.push(o[2]=a);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(m);var i=s[t];if(0!==i){if(i){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",u.name="ChunkLoadError",u.type=o,u.request=n,i[1](u)}s[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(i,o,function(e){return t[e]}.bind(null,o));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/itprojects/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var m=d;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"016b":function(t,e,i){"use strict";var o=i("52db"),n=i.n(o);n.a},"0993":function(t,e,i){"use strict";var o=i("313a"),n=i.n(o);n.a},2172:function(t,e,i){"use strict";var o=i("b1d9"),n=i.n(o);n.a},"22df":function(t,e,i){"use strict";var o=i("5c94"),n=i.n(o);n.a},"313a":function(t,e,i){},4631:function(t,e,i){"use strict";var o=i("94ec"),n=i.n(o);n.a},"52db":function(t,e,i){},5669:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);var o=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-view")},s=[],a=i("2877"),r={},l=Object(a["a"])(r,n,s,!1,null,null,null),c=l.exports,d=i("2f62"),u=i("ec26"),m={createTodo({commit:t},e){const i=Object(u["a"])(),o={title:e,list:[],id:i};t("ADD_TODO",o)},setStateList({commit:t},e){t("SET_STATE_LIST",e)},deleteTodo({commit:t},e){t("DELETE_TODO",e)},deleteTodoItem({commit:t,getters:e},i){const{list:o,id:n,title:s}=e.CURRENT_TODO,a=[...o];a.splice(i,1),t("CLEAN_OVER"),t("CURRENT_BAMP",{list:a,id:n,title:s}),t("REDO_EDIT")},addTodoItem({commit:t,getters:e},i){const{id:o,title:n,list:s}=e.CURRENT_TODO;t("CLEAN_OVER"),t("REDO_EDIT"),t("CURRENT_BAMP",{list:[...s,i],id:o,title:n})},changeTodoItem({commit:t,getters:e},i){const{id:o,title:n,list:s}=e.CURRENT_TODO;t("CLEAN_OVER"),t("REDO_EDIT"),t("CURRENT_BAMP",{id:o,title:n,list:[...s]}),t("CHANGE_TODO_ITEM",i)},nextStep({commit:t,state:e}){e.editHistory.current!==e.editHistory.list.length-1&&t("REDO_EDIT")},backStep({commit:t,state:e}){0!==e.editHistory.current&&t("UNDO_EDIT")},setEditing({commit:t,getters:e},i){const o=e.getTodoById(i);t("SET_EDITING",o)},cancelEdits({commit:t}){t("CANCEL_EDIT")},saveEdits({commit:t,state:e,getters:i},o){const n=i.getTodoIndexById(o);t("SAVE_EDIT",n),t("CANCEL_EDIT")}},p={ADD_TODO(t,e){t.list.push(e)},SET_STATE_LIST(t,e){t.list=e},DELETE_TODO(t,e){const i=t.list.findIndex(t=>t.id===e);t.list.splice(i,1)},CHANGE_TODO_ITEM(t,{updateComplete:e,updateName:i,updateTitle:o,index:n}){const{list:s,current:a}=t.editHistory,r=s[a];n>=0&&r.list.splice(n,1,{name:i,complete:e}),o&&(r.title=o)},SET_EDITING(t,e){t.editHistory.list.push(e)},CANCEL_EDIT(t){t.editHistory.current=0,t.editHistory.list=[]},REDO_EDIT(t){t.editHistory.current++},UNDO_EDIT(t){t.editHistory.current--},CURRENT_BAMP(t,e){t.editHistory.list.push(e)},SAVE_EDIT(t,e){t.list.splice(e,1,t.editHistory.list[t.editHistory.current])},CLEAN_OVER(t){t.editHistory.list.splice(t.editHistory.current+1)}},f={getTodoById:t=>e=>t.list.find(t=>t.id===e),CURRENT_TODO(t){return t.editHistory.list[t.editHistory.current]},getTodoIndexById:t=>e=>t.list.findIndex(t=>t.id===e),LIST:t=>t.list,ADDITIONAL_LIST(t){const e=[];return t.list.forEach(t=>{const{list:i,id:o,title:n}=t,s=i.slice(0,2),a=i.length-s.length;let r="";0===s.length&&(r="empty"),1===a&&(r="...1 item"),a>1&&(r=`...${a} items`),t.list.push(),e.push({id:o,title:n,list:[...s,{complete:!1,name:r}]})}),e}};const h=JSON.parse(localStorage.getItem("list"))||[];var T=function(){return{list:h,editHistory:{current:0,list:[]}}};o["a"].use(d["a"]);const v=new d["a"].Store({state:T,actions:m,mutations:p,getters:f});v.subscribe((t,e)=>{const i=JSON.stringify(e.list);localStorage.setItem("list",i)});var _=v,b=i("8c4f"),E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("layout-default",[i("div",{staticClass:"todo-list"},[t.ADDITIONAL_LIST.length?t._l(t.ADDITIONAL_LIST,(function(e){return i("div",{key:e.id,staticClass:"todo"},[i("todo",{attrs:{todo:e}}),i("hr"),i("div",{staticClass:"button-group"},[i("router-link",{staticClass:"link button",attrs:{to:{name:"Edit",params:{id:e.id}}}},[t._v("Go to edit")]),i("tl-confirm",[i("button",{staticClass:"button button-warning"},[t._v("Delete")])])],1)],1)})):i("div",{staticClass:"nothingtodo"},[i("h2",[t._v("Nothing yet...")]),i("p",[t._v("You can add a new one by entering its name in the field below and clicking on the button")])])],2),i("form",{staticClass:"add-form"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],attrs:{type:"text",placeholder:"Enter todo name"},domProps:{value:t.newTodo},on:{input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}),i("button",{staticClass:"button btn-primary button-add-todo",on:{click:t.addTodo}},[t._v("Add new Todo")])])])},C=[],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper-confirm"},[i("div",{staticClass:"slot",on:{click:function(e){t.visible=!0}}},[t._t("default")],2),t.visible?[i("transition",{attrs:{name:"confirm"}},[i("div",{staticClass:"confirm"},[i("div",{staticClass:"title"},[t._v(t._s(t.textTitle))]),i("div",{staticClass:"buttons"},[i("span",{staticClass:"button-no",attrs:{role:"button"},on:{click:t.cancel}},[t._v(t._s(t.textCancel))]),i("span",{staticClass:"button-ok",attrs:{role:"button"},on:{click:t.confirm}},[t._v(t._s(t.textConfirm))])])])])]:t._e()],2)},g=[],O={props:{textCancel:{type:String,default:"No"},textConfirm:{type:String,default:"Yes"},textTitle:{type:String,default:"Are you sure?"}},data(){return{visible:!1}},methods:{cancel(){this.$emit("cancel"),this.visible=!1},confirm(){this.$emit("confirm"),this.visible=!1},click(){console.log("children click")}}},I=O,D=(i("2172"),Object(a["a"])(I,y,g,!1,null,"3294da30",null)),k=D.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"modal"}},[i("div",{staticClass:"wrapper",class:t.modalType},[i("div",{ref:"modal",staticClass:"inner"},[i("div",{staticClass:"header"},[i("div",{staticClass:"title"},[t._v(t._s(t.title))])]),i("div",{staticClass:"content"},[t._t("content")],2),i("div",{staticClass:"footer"},[t._t("footer")],2)])])])},x=[],N={props:{title:String,modalType:{type:String,default:"primary",validator(t){return["warning","primary"].includes(t)}}}},S=N,A=(i("7237"),Object(a["a"])(S,w,x,!1,null,"7dcd00b0",null)),R=A.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"wrapper-container"},[i("header",[i("tl-header")],1),i("main",[t._t("default")],2)])])},L=[],$={components:{"tl-header":()=>i.e("chunk-4b3046d4").then(i.bind(null,"15e2"))}},H=$,P=(i("ae98"),Object(a["a"])(H,j,L,!1,null,"2cbc3c5e",null)),M=P.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.todo?i("div",{staticClass:"wrapper-todo"},[i("todo-title",{staticClass:"title",attrs:{title:t.todoTitle}}),i("hr"),i("ul",{staticClass:"list"},t._l(t.todoList,(function(t,e){return i("todo-item",{key:e,attrs:{item:t}})})),1)],1):t._e()},B=[],V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper-todo-title"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.editMode,expression:"!editMode"}],staticClass:"title"},[i("h2",{staticClass:"name"},[t._v(t._s(t.title))]),t.editable?i("button",{staticClass:"button button-primary",on:{click:function(e){return t.handleEditTitle(!0)}}},[t._v("Edit")]):t._e()]),t.editable?i("div",{directives:[{name:"show",rawName:"v-show",value:t.editMode,expression:"editMode"}],staticClass:"edit-title"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.inputEditTitle,expression:"inputEditTitle"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.inputEditTitle},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleEditTitle(!1)},input:function(e){e.target.composing||(t.inputEditTitle=e.target.value)}}}),i("button",{staticClass:"button button-primary",on:{click:function(e){return t.handleEditTitle(!1)}}},[t._v("Save")])]):t._e()])},G=[],q={props:{editable:{type:Boolean,default:!1},title:String},data(){return{inputEditTitle:"",editMode:!1}},methods:{handleEditTitle(t){t?(this.editMode=!0,this.inputEditTitle=this.title):(this.$emit("update:title",this.inputEditTitle),this.editMode=!1,this.editTitle="")}}},J=q,Y=(i("4631"),Object(a["a"])(J,V,G,!1,null,"23dd22e7",null)),F=Y.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"item relative",class:{complete:t.item.complete}},[t.editable?i("input",{staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:t.item.complete},on:{change:function(e){return t.$emit("complete")}}}):t._e(),i("span",[t._v(t._s(t.item.name))])])},z=[],Q={props:{editable:{type:Boolean,default:!1},item:{type:Object,required:!0}}},W=Q,X=(i("efa4"),Object(a["a"])(W,K,z,!1,null,"0865ea1f",null)),Z=X.exports,tt={components:{TodoTitle:F,TodoItem:Z},props:{todo:{type:Object,require:!0}},computed:{todoList(){return this.todo.list},todoTitle(){return this.todo.title}}},et=tt,it=(i("0993"),Object(a["a"])(et,U,B,!1,null,"80536576",null)),ot=it.exports,nt={components:{"layout-default":M,"tl-confirm":k,"tl-modal":R,todo:ot},data(){return{newTodo:"",modalAdd:!1}},methods:{...Object(d["b"])(["deleteTodo","createTodo"]),addTodo(){this.createTodo(this.newTodo),this.newTodo="",this.modalAdd=!1}},computed:{...Object(d["c"])(["ADDITIONAL_LIST"])}},st=nt,at=(i("016b"),Object(a["a"])(st,E,C,!1,null,"6ef96cd2",null)),rt=at.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("layout-default",{staticClass:"relative"},[t.CURRENT_TODO?i("div",{staticClass:"todo-info"},[i("div",{staticClass:"top-buttons"},[i("i",{staticClass:"fas fa-chevron-left back",on:{click:function(e){return t.$router.push("/")}}}),i("i",{staticClass:"fas fa-cog settings",on:{click:function(e){t.editTools=!t.editTools}}})]),i("todo-title",{staticClass:"todo-title",attrs:{title:t.CURRENT_TODO.title,editable:!0},on:{"update:title":function(e){return t.changeTodoItem({updateTitle:e})}}}),i("hr"),i("div",{staticClass:"list"},[i("ul",t._l(t.CURRENT_TODO.list,(function(e,o){return i("todo-item",{key:o,attrs:{item:e,editable:!0},on:{complete:function(i){return t.completeTodoItem(e,o)}}})})),1)])],1):t._e(),i("div",{staticClass:"add-todo"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.todoItem,expression:"todoItem"}],domProps:{value:t.todoItem},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addItem(e)},input:function(e){e.target.composing||(t.todoItem=e.target.value)}}}),i("button",{staticClass:"button btn-primary",attrs:{type:"submit"},on:{click:t.addItem}},[t._v("Add")])]),i("transition",{attrs:{name:"edit"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.editTools,expression:"editTools"}],staticClass:"edit-todo"},[i("i",{staticClass:"fas fa-times-circle icon",attrs:{title:"Cancel"},on:{click:t.cancel}}),i("i",{staticClass:"fas fa-save icon",attrs:{title:"Save"},on:{click:t.save}}),i("i",{staticClass:"fas fa-undo icon",attrs:{title:"Undo"},on:{click:t.backStep}}),i("i",{staticClass:"fas fa-redo icon",attrs:{title:"Redo"},on:{click:t.nextStep}}),i("i",{staticClass:"fas fa-trash icon",attrs:{title:"Delete"},on:{click:t.handleDeleteTodo}})])])],1)},ct=[],dt={components:{"layout-default":M,"tl-modal":R,"todo-title":F,"todo-item":Z},props:["id"],data(){return{todoItem:"",modalDelete:!1,modalCancel:!1,modalEdit:!1,editTools:!1}},mounted(){this.setEditing(this.id)},methods:{...Object(d["b"])(["addTodoItem","setEditing","nextStep","backStep","saveEdits","cancelEdits","deleteTodo","changeTodoItem"]),addItem(){this.todoItem&&(this.addTodoItem({name:this.todoItem,complete:!1}),this.todoItem="")},save(){this.saveEdits(this.id),this.$router.push("/")},cancel(){this.$nextTick(()=>this.modalCancel=!0)},handleDeleteTodo(){this.$nextTick(()=>this.modalDelete=!0)},answerCancel(t){this.modalCancel=!1,t&&this.$nextTick(()=>{this.cancelEdits(),this.$router.push("/")})},answerDelete(t){this.modalDelete=!1,t&&this.$nextTick(()=>{this.deleteTodo(this.id),this.$router.push("/")})},completeTodoItem(t,e){this.changeTodoItem({updateComplete:!t.complete,updateName:t.name,index:e})}},computed:{...Object(d["c"])(["CURRENT_TODO"])},beforeDestroy(){this.cancelEdits()}},ut=dt,mt=(i("22df"),Object(a["a"])(ut,lt,ct,!1,null,"032172c0",null)),pt=mt.exports;o["a"].use(b["a"]);const ft=new b["a"]({routes:[{path:"/",name:"Index",component:rt},{path:"/:id",name:"Edit",component:pt,props:!0}]});var ht=ft;i("5669"),i("e3d4"),i("c7e6");o["a"].config.productionTip=!1,new o["a"]({store:_,router:ht,render:t=>t(c)}).$mount("#app")},"5b46":function(t,e,i){},"5c94":function(t,e,i){},7237:function(t,e,i){"use strict";var o=i("5b46"),n=i.n(o);n.a},"7b77":function(t,e,i){},"94ec":function(t,e,i){},ae98:function(t,e,i){"use strict";var o=i("c728"),n=i.n(o);n.a},b1d9:function(t,e,i){},c728:function(t,e,i){},c7e6:function(t,e,i){},e3d4:function(t,e,i){},efa4:function(t,e,i){"use strict";var o=i("7b77"),n=i.n(o);n.a}});
//# sourceMappingURL=app.849b45ce.js.map