(function(t){function e(e){for(var r,d,i=e[0],u=e[1],o=e[2],c=0,f=[];c<i.length;c++)d=i[c],Object.prototype.hasOwnProperty.call(a,d)&&a[d]&&f.push(a[d][0]),a[d]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(s.splice(e--,1),t=d(d.s=n[0]))}return t}var r={},a={app:0},s=[];function d(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=t,d.c=r,d.d=function(t,e,n){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)d.d(n,r,function(e){return t[e]}.bind(null,r));return n},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var o=0;o<i.length;o++)e(i[o]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("new-student-form",{on:{"student-added":t.newStudentAdded}}),n("student-table",{attrs:{students:t.students},on:{"student-arrived-or-left":t.studentArrivedOrLeft,"delete-student":t.studentDeleted}}),n("student-message",{attrs:{student:t.mostRecentStudent}})],1)},s=[],d=(n("a15b"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.length>0,expression:"errors.length > 0"}],staticClass:"alert alert-danger"},t._l(t.errors,(function(e){return n("li",{key:e},[t._v(t._s(e))])})),0),n("div",{staticClass:"card add-student m-2 p-2"},[n("h4",{staticClass:"card-title"},[t._v("Add new student")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newStudentName,expression:"newStudentName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:t.newStudentName},on:{input:function(e){e.target.composing||(t.newStudentName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"starID"}},[t._v("Star ID")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newStarID,expression:"newStarID",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"starID"},domProps:{value:t.newStarID},on:{input:function(e){e.target.composing||(t.newStarID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("button",{staticClass:"btn btn-primary",on:{click:t.addStudent}},[t._v("Add")])])])}),i=[],u={name:"NewStudentForm",data:function(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName||this.errors.push("Student name is required"),this.newStarID||this.errors.push("StarID is required"),0==this.errors.length){var t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}},o=u,l=n("2877"),c=Object(l["a"])(o,d,i,!1,null,"b6b8cb14",null),f=c.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.student.name,expression:"student.name"}]},[t.student.present?n("div",{staticClass:"alert alert-dark"},[t._v(" Welcome, "+t._s(t.student.name)+" ")]):n("div",{staticClass:"alert alert-primary"},[t._v(" Goodbye, "+t._s(t.student.name)+". See you later! ")])])])},m=[],v={name:"StudentMessage",props:{student:Object}},h=v,b=Object(l["a"])(h,p,m,!1,null,"a3d40a5c",null),S=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card student-list m-2 p-2"},[n("h4",{staticClass:"card-title"},[t._v("Student List")]),n("div",{staticClass:"edit-table-toggle form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editTable,expression:"editTable"}],staticClass:"form-check",attrs:{id:"edit-table",type:"checkbox"},domProps:{checked:Array.isArray(t.editTable)?t._i(t.editTable,null)>-1:t.editTable},on:{change:function(e){var n=t.editTable,r=e.target,a=!!r.checked;if(Array.isArray(n)){var s=null,d=t._i(n,s);r.checked?d<0&&(t.editTable=n.concat([s])):d>-1&&(t.editTable=n.slice(0,d).concat(n.slice(d+1)))}else t.editTable=a}}}),n("label",{staticClass:"form-check-label",attrs:{for:"edit-table"}},[t._v("Edit table?")])]),n("div",{attrs:{id:"student-table"}},[n("table",{staticClass:"table"},[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("StarID")]),n("th",[t._v("Present?")]),n("th",{directives:[{name:"show",rawName:"v-show",value:t.editTable,expression:"editTable"}]},[t._v("Delete")])]),t._l(t.students,(function(e){return n("student-row",{key:e.starID,attrs:{student:e,edit:t.editTable},on:{"student-arrived-or-left":t.arrivedOrleft,"delete-student":t.deleteStudent}})}))],2)])])])},A=[],y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{class:{present:t.student.present,absent:!t.student.present}},[r("td",[t._v(t._s(t.student.name))]),r("td",[t._v(t._s(t.student.starID))]),r("td",[r("input",{attrs:{type:"checkbox"},domProps:{checked:t.student.present},on:{change:function(e){return t.arrivedOrLeft(t.student,e.srcElement.checked)}}})]),r("td",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}]},[r("img",{attrs:{src:n("ed3a")},on:{click:t.deleteStudent}})])])},x=[],T={name:"StudentRow",props:{student:Object,edit:Boolean},methods:{arrivedOrLeft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(){confirm("Delete ".concat(this.student.name,"?"))&&this.$emit("delete-student",this.student)}}},g=T,D=(n("e2c6"),Object(l["a"])(g,y,x,!1,null,"0110c82a",null)),O=D.exports,N={name:"StudentTable",components:{StudentRow:O},data:function(){return{editTable:!1}},props:{students:Array},methods:{arrivedOrleft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(t){this.$emit("delete-student",t)}}},F=N,j=Object(l["a"])(F,w,A,!1,null,"63378903",null),U=j.exports,H={name:"app",data:function(){return{students:[],message:"",name:""}},components:{NewStudentForm:f,StudentTable:U,StudentMessage:S},mounted:function(){this.UpdateStudents()},methods:{newStudentAdded:function(t){var e=this;this.$student_api.addStudent(t).then((function(t){e.UpdateStudents()})).catch((function(t){var e=t.response.data.join(",");alert("Error adding student,",e)}))},studentArrivedOrLeft:function(t){var e=this;this.$student_api.UpdateStudent(t).then((function(){e.name=t.name,e.message=t.present?"Welcome, ":"Goodbye, ",e.UpdateStudents()}))},studentDeleted:function(t){var e=this;this.$$student_api.deleteStudent(t).then((function(){e.UpdateStudents()}))},UpdateStudents:function(){var t=this;this.$student_api.getAllStudents().then((function(e){t.students=e}))}}},J=H,C=Object(l["a"])(J,a,s,!1,null,null,null),I=C.exports,R=n("5f5b"),k=n("bc3a"),P=n.n(k),G="/api/students",L={getAllStudents:function(){return P.a.get(G).then((function(t){return t.data}))},addStudent:function(t){return P.a.post(G,t).then((function(t){return t.data}))},updateStudent:function(t){return P.a.patch("".concat(G,"/").concat(t.id),t).then((function(t){return t.data}))},deleteStudent:function(t){return P.a.delete("".concat(G,"/").concat(t.id),t).then((function(t){return t.data}))}};n("f9e3"),n("2dd8");r["default"].use(R["a"]),r["default"].config.productionTip=!1,r["default"].prototype.$student_api=L,new r["default"]({render:function(t){return t(I)}}).$mount("#app")},"94a3":function(t,e,n){},e2c6:function(t,e,n){"use strict";n("94a3")},ed3a:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.3d188227.js.map