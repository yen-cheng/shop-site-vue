(function(t){function e(e){for(var o,r,i=e[0],l=e[1],c=e[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(o=!1)}o&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},s={app:0},n=[];function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("add-header"),a("router-view")],1)])},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-dark navbar-expand-lg bg-dark"},[a("span",{staticClass:"navbar-brand"},[t._v("My Shop")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/",tag:"li","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("Home")])]),a("router-link",{staticClass:"nav-item",attrs:{to:"/products",tag:"li","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("商品一覧")])]),a("router-link",{staticClass:"nav-item",attrs:{to:"/todolist",tag:"li","active-class":"active"}},[a("a",{staticClass:"nav-link"},[t._v("代辦事項")])])],1),a("div",{staticClass:"ml-auto"},[a("router-link",{staticClass:"btn btn-outline-light",attrs:{to:"/signup",tag:"a"}},[t._v("新規登録")]),a("router-link",{staticClass:"btn btn-outline-light ml-1",attrs:{to:"/login",tag:"a"}},[t._v("ログイン")])],1)])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("2877"),c={},d=Object(l["a"])(c,r,i,!1,null,null,null),u=d.exports,p={components:{addHeader:u}},v=p,m=Object(l["a"])(v,s,n,!1,null,null,null),f=m.exports,b=a("8c4f"),g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",{staticClass:"text-center"},[t._v("Home")])])}],_={},C=Object(l["a"])(_,g,h,!1,null,null,null),y=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"card-columns mt-5"},t._l(t.products.data,(function(t){return a("product-card",{attrs:{product:t}})})),1),a("div",{staticClass:"row mb-3 justify-content-center"},[a("div",{staticClass:"column col-3"},[a("router-link",{staticClass:"btn btn-block btn-dark",attrs:{to:"/addProduct",tag:"a"}},[t._v("Add New Product")])],1)])])},x=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:t.product.imgUrl,alt:""}}),a("div",{staticClass:"card-body"},[a("h3",{staticClass:"card-title"},[t._v(t._s(t.product.title))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.product.description))])]),a("div",{staticClass:"card-footer text-info d-flex justify-content-between"},[t._v("$"+t._s(t.product.price)+" "),a("button",{staticClass:"btn btn-dark btn-sm",on:{click:function(e){return e.preventDefault(),t.goProductDetail(t.product.id)}}},[t._v("詳細")]),a("button",{staticClass:"btn btn-dark btn-sm"},[t._v("カート")])])])},T=[],D={props:["product"],methods:{goProductDetail:function(t){var e="/product/"+t;this.$router.push({path:e})}}},E=D,j=Object(l["a"])(E,k,T,!1,null,null,null),P=j.exports,O=a("bc3a"),N=a.n(O),S={created:function(){var t=this;N.a.get("/admin/products").then((function(e){console.log(e),t.products.data=e.data.data,t.products.count=e.data.data.length})).catch((function(t){console.log(t)}))},components:{productCard:P},data:function(){return{products:{data:[],count:0}}}},M=S,A=Object(l["a"])(M,w,x,!1,null,null,null),L=A.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",{staticClass:"text-center"},[t._v(t._s(t.pid))]),a("router-view")],1)},R=[],I={data:function(){return{pid:this.$route.params.id}}},H=I,F=Object(l["a"])(H,U,R,!1,null,null,null),J=F.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._v(" Edit product page ")])},B=[],Q={},z=Object(l["a"])(Q,q,B,!1,null,null,null),G=z.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container border rounded p-5 mt-3",staticStyle:{"max-width":"800px"}},[t._m(0),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"productName"}},[t._v("商品名 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.title,expression:"product.title"}],staticClass:"form-control",attrs:{readonly:t.checked,type:"text",id:"productName"},domProps:{value:t.product.title},on:{input:function(e){e.target.composing||t.$set(t.product,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"price"}},[t._v("金額 ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],staticClass:"form-control",attrs:{readonly:t.checked,type:"text",id:"price"},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"photoUrl"}},[t._v("画像リンク ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.imgUrl,expression:"product.imgUrl"}],staticClass:"form-control",attrs:{readonly:t.checked,type:"text",id:"photoUrl"},domProps:{value:t.product.imgUrl},on:{input:function(e){e.target.composing||t.$set(t.product,"imgUrl",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("商品紹介 ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"form-control",attrs:{readonly:t.checked,type:"text",id:"description",row:"3"},domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}})]),a("div",{staticClass:"d-flex justify-content-around"},[a("button",{staticClass:"btn btn-dark",on:{click:function(e){e.preventDefault(),t.checked=!0}}},[t._v("チェック")]),a("button",{staticClass:"btn btn-dark",attrs:{disabled:!t.checked},on:{click:function(e){e.preventDefault(),t.checked=!1}}},[t._v("修正")]),a("button",{staticClass:"btn btn-dark",attrs:{disabled:!t.checked},on:{click:function(e){return e.preventDefault(),t.addProduct(e)}}},[t._v("追加")])])]),a("ul",{directives:[{name:"show",rawName:"v-show",value:t.checked,expression:"checked"}],staticClass:"list-group mt-5"},[a("li",{staticClass:"list-group-item"},[t._v("商品名： "+t._s(t.product.title))]),a("li",{staticClass:"list-group-item"},[t._v("金額： $"+t._s(t.product.price))]),a("li",{staticClass:"list-group-item"},[t._v("リンク："),a("br"),t._v(t._s(t.product.imgUrl))]),a("li",{staticClass:"list-group-item"},[t._v("説明："),a("br"),t._v(t._s(t.product.description))])])])},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"text-center mt-3"},[a("strong",[t._v("商品情報入力")])])}],W={data:function(){return{product:{title:"",price:0,imgUrl:"",description:""},checked:!1}},methods:{addProduct:function(){var t=this;N.a.post("/admin/product",this.product).then((function(e){console.log(e),t.$router.push({path:"/products"})})).catch((function(t){console.log(t)}))}}},X=W,Y=Object(l["a"])(X,K,V,!1,null,null,null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container border rounded mt-3 p-5",staticStyle:{"max-width":"500px"}},[a("h3",{staticClass:"text-center mb-3"},[t._v("ログイン")]),a("form",[a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email"}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"}})]),a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"rememberMe"}}),a("label",{staticClass:"form-check-label",attrs:{for:"rememberMe"}},[t._v("Remember Me")])]),a("input",{staticClass:"btn btn-dark btn-block mt-3",attrs:{type:"submit",value:"Login"}})])])}],at={},ot=Object(l["a"])(at,tt,et,!1,null,null,null),st=ot.exports,nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container border rounded mt-3 p-5",staticStyle:{"max-width":"500px"}},[a("h3",{staticClass:"text-center mb-3"},[t._v("新規登録")]),a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"userId"}},[t._v("ユーザID")]),a("input",{staticClass:"form-control",attrs:{type:"text",id:"userId",placeholder:"ユーザID"}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Eメール")]),a("input",{staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"Email"}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"password"}},[t._v("パスワード")]),a("input",{staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"passwordAgain",id:"passwordAgain",placeholder:"Password"}})]),a("input",{staticClass:"btn btn-dark btn-block mt-3",attrs:{type:"submit",value:"申請"}})])])}],it={},lt=Object(l["a"])(it,nt,rt,!1,null,null,null),ct=lt.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container border rounded mt-3 p-5",staticStyle:{"max-width":"1000px"}},[t._m(0),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-10"},[a("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[a("div",{staticClass:"tab-pane fade show active",attrs:{id:"nav-basic",role:"tabpanel","aria-labelledby":"nav-basic-tab"}},[a("ol",{staticClass:"list-group"},t._l(t.todoLists,(function(e){return a("app-todo",{attrs:{todo:e},on:{reload:t.reloadTodo}})})),1)]),a("div",{staticClass:"tab-pane fade",attrs:{id:"nav-feature",role:"tabpanel","aria-labelledby":"nav-feature-tab"}},[t._v("...")]),a("div",{staticClass:"tab-pane fade",attrs:{id:"nav-complete",role:"tabpanel","aria-labelledby":"nav-complete-tab"}},[t._v("complete")])])])]),t._m(1),a("add-todo",{staticClass:"modal fade",attrs:{id:"addTodoModal",tabindex:"-1",role:"dialog","aria-labelledby":"addTodoModalLabel","aria-hidden":"true"},on:{reload:t.reloadTodo}})],1)},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-md-center"},[a("div",{staticClass:"col-10"},[a("nav",[a("div",{staticClass:"nav nav-tabs justify-content-center",attrs:{id:"nav-tab",role:"tablist"}},[a("a",{staticClass:"nav-item nav-link active",attrs:{id:"nav-basic-tab","data-toggle":"tab",href:"#nav-basic",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[t._v("基本功能")]),a("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-feature-tab","data-toggle":"tab",href:"#nav-feature",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}},[t._v("特色功能")]),a("a",{staticClass:"nav-item nav-link",attrs:{id:"nav-complete-tab","data-toggle":"tab",href:"#nav-complete",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}},[t._v("完成功能")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-5 justify-content-center"},[a("div",{staticClass:"col-3 text-center"},[a("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-toggle":"modal","data-target":"#addTodoModal"}},[t._v(" Add ")])])])}],pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-group-item d-flex justify-content-between align-items-center"},[t._v(" "+t._s(t.todo.content)+" "),a("div",["0"==t.todo.status?a("span",{staticClass:"badge badge-secondary badge-pill mr-3"},[t._v("未完成")]):"1"==t.todo.status?a("span",{staticClass:"badge badge-primary badge-pill mr-3"},[t._v("進行中")]):a("span",{staticClass:"badge badge-success badge-pill mr-3"},[t._v("已完成")]),a("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"buttonAction"}},[a("button",{staticClass:"btn btn-sm btn-dark badge-pill",attrs:{type:"button","data-toggle":"modal","data-target":"#todoDetailModal"+t.id}},[t._v(" 詳細")]),a("button",{staticClass:"btn btn-sm btn-dark",attrs:{type:"button"}},[t._v("切換狀態")]),a("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"},on:{click:t.deleteTodo}},[t._v("刪除")])])]),a("todo-detail",{staticClass:"modal fade",attrs:{todo:t.todo,id:"todoDetailModal"+t.id,tabindex:"-1",role:"dialog","aria-labelledby":"todoDetailModalLabel","aria-hidden":"true"},on:{invokeReloadTodo:t.invokeReloadTodo}})],1)},vt=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[t.contentEdit?a("input",{directives:[{name:"model",rawName:"v-model",value:t.todoDetail.content,expression:"todoDetail.content"},{name:"focus",rawName:"v-focus"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.todoDetail.content},on:{blur:function(e){t.contentEdit=!1},input:function(e){e.target.composing||t.$set(t.todoDetail,"content",e.target.value)}}}):a("h5",{staticClass:"modal-title",on:{click:function(e){t.contentEdit=!0}}},[t._v(t._s(t.todoDetail.content))]),"0"==t.todoDetail.status?a("span",{staticClass:"badge badge-secondary badge-pill mt-3 ml-5"},[t._v("未完成")]):"1"==t.todoDetail.status?a("span",{staticClass:"badge badge-primary badge-pill mt-3 ml-5"},[t._v("進行中")]):a("span",{staticClass:"badge badge-success badge-pill mt-3 ml-5"},[t._v("已完成")]),t._m(0)]),a("div",{staticClass:"modal-body"},[t.detailEdit?a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.todoDetail.detail,expression:"todoDetail.detail"},{name:"focus",rawName:"v-focus"}],attrs:{cols:"60",rows:"4"},domProps:{value:t.todoDetail.detail},on:{blur:function(e){t.detailEdit=!1},input:function(e){e.target.composing||t.$set(t.todoDetail,"detail",e.target.value)}}}):a("div",{on:{click:function(e){t.detailEdit=!0}}},[a("p",[t._v(t._s(t.todoDetail.detail))]),a("p",{staticClass:"samll text-muted"},[t._v("クリックして編集")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"type"}},[t._v("Type")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.todoDetail.type,expression:"todoDetail.type"}],staticClass:"form-control",attrs:{id:"type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.todoDetail,"type",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"1"},domProps:{selected:"1"==t.todoDetail.type}},[t._v("基本功能")]),a("option",{attrs:{value:"2"},domProps:{selected:"2"==t.todoDetail.type}},[t._v("特色功能")]),a("option",{attrs:{value:"3"},domProps:{selected:"3"==t.todoDetail.type}},[t._v("障害改善")])])]),a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"type"}},[t._v("Status")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.todoDetail.status,expression:"todoDetail.status"}],staticClass:"form-control",attrs:{id:"type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.todoDetail,"status",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0"},domProps:{selected:"0"==t.todoDetail.status}},[t._v("未進行")]),a("option",{attrs:{value:"1"},domProps:{selected:"1"==t.todoDetail.status}},[t._v("進行中")]),a("option",{attrs:{value:"2"},domProps:{selected:"2"==t.todoDetail.status}},[t._v("已完成")])])])])]),a("div",{staticClass:"modal-footer justify-content-between"},[a("button",{staticClass:"btn btn-sm btn-danger",attrs:{type:"button"}},[t._v("刪除")]),a("div",[a("button",{staticClass:"btn btn-secondary mr-1",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.saveChange}},[t._v("Save")])])])])])])},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],bt={props:["todo"],data:function(){return{todoDetail:this.todo,contentEdit:!1,detailEdit:!1}},directives:{focus:{inserted:function(t){t.focus()}}},methods:{saveChange:function(){var t=this,e="#todoDetailModal"+this.todoDetail.id;console.log(this.todoDetail);var a="/admin/todolist/"+this.todoDetail.id;N.a.put(a,this.todoDetail).then((function(e){console.log("Edit todo success!"),t.$emit("invokeReloadTodo")})).catch((function(t){console.log(t)})),$(e).modal("hide")}}},gt=bt,ht=Object(l["a"])(gt,mt,ft,!1,null,null,null),_t=ht.exports,Ct=(a("1157"),{components:{todoDetail:_t},props:["todo"],data:function(){return{id:this.todo.id}},methods:{deleteTodo:function(){var t=this;N.a.delete("/admin/todolist/"+this.todo.id).then((function(e){console.log("delete todo success!"),t.invokeReloadTodo()})).catch((function(t){return console.log(t)}))},invokeReloadTodo:function(){this.$emit("reload")}}}),yt=Ct,wt=Object(l["a"])(yt,pt,vt,!1,null,null,null),xt=wt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"content"}},[t._v("Content")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo.content,expression:"newTodo.content"}],staticClass:"form-control",attrs:{type:"text",id:"content"},domProps:{value:t.newTodo.content},on:{input:function(e){e.target.composing||t.$set(t.newTodo,"content",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"detail"}},[t._v("Detail")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newTodo.detail,expression:"newTodo.detail"}],staticClass:"form-control",attrs:{id:"detail",cols:"30",rows:"10"},domProps:{value:t.newTodo.detail},on:{input:function(e){e.target.composing||t.$set(t.newTodo,"detail",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"type"}},[t._v("Type")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newTodo.type,expression:"newTodo.type"}],staticClass:"form-control",attrs:{id:"type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newTodo,"type",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"1",selected:""}},[t._v("基本功能")]),a("option",{attrs:{value:"2"}},[t._v("特色功能")]),a("option",{attrs:{value:"3"}},[t._v("障害改善")])])]),a("div",{staticClass:"form-group col"},[a("label",{attrs:{for:"type"}},[t._v("Status")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.newTodo.status,expression:"newTodo.status"}],staticClass:"form-control",attrs:{id:"type"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newTodo,"status",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0",selected:""}},[t._v("未進行")]),a("option",{attrs:{value:"1"}},[t._v("進行中")]),a("option",{attrs:{value:"2"}},[t._v("已完成")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.addTodo}},[t._v("Save")])])])])])},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("New Todo")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],$t={data:function(){return{newTodo:{content:"",detail:"",type:"",status:""}}},methods:{addTodo:function(){var t=this,e={content:this.newTodo.content,detail:this.newTodo.detail,type:this.newTodo.type,status:this.newTodo.status};N.a.post("/admin/todolist",e).then((function(e){t.newTodo.content="",t.newTodo.detail="",t.newTodo.type="",t.newTodo.status="",t.$emit("reload")})).catch((function(t){return console.log(t)}))}}},Dt=$t,Et=Object(l["a"])(Dt,kt,Tt,!1,null,null,null),jt=Et.exports,Pt={created:function(){var t=this;N.a.get("/admin/todolists").then((function(e){console.log(e),t.todoLists=e.data.data})).catch((function(t){console.log(t)}))},components:{appTodo:xt,addTodo:jt},data:function(){return{todoLists:[]}},methods:{reloadTodo:function(){var t=this;N.a.get("/admin/todolists").then((function(e){console.log(e),t.todoLists=e.data.data,console.log(t.todoLists)})).catch((function(t){console.log(t)}))}}},Ot=Pt,Nt=Object(l["a"])(Ot,dt,ut,!1,null,null,null),St=Nt.exports;o["a"].use(b["a"]);var Mt=[{path:"/",name:"home",component:y},{path:"/products",name:"products",component:L},{path:"/product/:id",name:"productDetail",component:J,children:[{path:"edit",component:G}]},{path:"/addProduct",name:"addProduct",component:Z},{path:"/login",name:"login",component:st},{path:"/signup",name:"signup",component:ct},{path:"/todolist",name:"todolist",component:St},{path:"*",redirect:"/"}],At=new b["a"]({routes:Mt,mode:"history"}),Lt=At,Ut=a("2f62");o["a"].use(Ut["a"]);var Rt=new Ut["a"].Store({state:{products:{data:[],count:0},todoList:{data:[]}},mutations:{},actions:{},modules:{}}),It=a("9483");Object(It["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});a("4989"),a("ab8b");window.$=window.jQuery=a("1157"),o["a"].config.productionTip=!1,N.a.defaults.baseURL="http://localhost:3000",new o["a"]({router:Lt,store:Rt,render:function(t){return t(f)}}).$mount("#app")}});
//# sourceMappingURL=app.dfea7b1b.js.map