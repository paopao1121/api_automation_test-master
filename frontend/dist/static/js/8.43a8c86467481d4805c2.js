webpackJsonp([8],{"6zzn":function(t,e){},"9yQR":function(t,e){},KoVV:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mvHQ"),r=a.n(i),o=a("P9l9"),n=a("7t+N"),s=a.n(n),c={name:"api-form",data:function(){return{radio:""}},methods:{handleDel:function(){var t=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){var e=t;s.a.ajax({type:"post",url:o.z+"/api/api/del_api",async:!0,data:r()({project_id:Number(t.$route.params.project_id),ids:[t.$route.params.api_id]}),headers:{"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(t){"999999"===t.code?(e.$message({message:"删除成功",center:!0,type:"success"}),e.$router.push({name:"接口列表",params:{project_id:e.$route.params.project_id}})):e.$message.error({message:t.msg,center:!0})}})}).catch(function(){})},showNavi:function(t){this.radio=t}},mounted:function(){this.radio=this.$route.name}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("router-link",{staticStyle:{"text-decoration":"none",color:"aliceblue"},attrs:{to:{name:"接口列表",params:{project_id:this.$route.params.project_id}}}},[a("el-button",{staticClass:"return-list"},[a("i",{staticClass:"el-icon-d-arrow-left",staticStyle:{"margin-right":"5px"}}),t._v("接口列表")])],1),t._v(" "),a("el-radio-group",{staticStyle:{"margin-left":"50px"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"基础信息",params:{project_id:this.$route.params.project_id,api_id:this.$route.params.api_id}}},nativeOn:{click:function(e){return t.showNavi("基础信息")}}},[a("el-radio-button",{attrs:{label:"基础信息"}},[a("div",{staticStyle:{width:"80px"}},[t._v("基础信息")])])],1),t._v(" "),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"测试",params:{project_id:this.$route.params.project_id,api_id:this.$route.params.api_id}}},nativeOn:{click:function(e){return t.showNavi("测试")}}},[a("el-radio-button",{attrs:{label:"测试"}},[a("div",{staticStyle:{width:"80px"}},[t._v("测试")])])],1),t._v(" "),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"历史",params:{project_id:this.$route.params.project_id,api_id:this.$route.params.api_id}}},nativeOn:{click:function(e){return t.showNavi("历史")}}},[a("el-radio-button",{attrs:{label:"历史"}},[a("div",{staticStyle:{width:"80px"}},[t._v("历史")])])],1),t._v(" "),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"修改",params:{project_id:this.$route.params.project_id,api_id:this.$route.params.api_id}}},nativeOn:{click:function(e){return t.showNavi("修改")}}},[a("el-radio-button",{attrs:{label:"修改"}},[a("div",{staticStyle:{width:"80px"}},[t._v("修改")])])],1),t._v(" "),a("el-radio-button",{attrs:{label:"删除"},nativeOn:{click:function(e){return t.handleDel(e)}}},[a("div",{staticStyle:{width:"80px"}},[t._v("删除")])])],1),t._v(" "),a("div",{staticStyle:{"margin-left":"10px","margin-right":"20px"}},[a("router-view")],1)],1)},staticRenderFns:[]};var l=a("VU/8")(c,d,!1,function(t){a("6zzn"),a("9yQR")},"data-v-602f07ed",null);e.default=l.exports}});
//# sourceMappingURL=8.43a8c86467481d4805c2.js.map