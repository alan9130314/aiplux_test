(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9909dea2"],{"21bb":function(t,s,e){"use strict";e("2dad")},"2dad":function(t,s,e){},bb51:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home"},[e("p",[t._v("登入狀態： "+t._s(t.$store.state.loginState))]),""!=t.$store.state.user.username?e("p",[t._v("UserName : "+t._s(t.$store.state.user.username))]):e("p",[t._v("尚未登入")]),e("p",[t._v("token : "+t._s(t.$store.state.token))]),e("br"),e("a",{staticClass:"btn btn-secondary mb-3",attrs:{href:"#",role:"button"},on:{click:function(s){return s.preventDefault(),t.getPosts.apply(null,arguments)}}},[t._v("Get Posts")]),e("PostForm")],1)},a=[],n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"PostForm"},[t._v(" PostForm "),e("br"),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},t._l(t.$store.state.posts,(function(s){return e("div",{key:s.id,staticClass:"col-3 mb-3"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body text-start"},[e("label",{staticClass:"form-label"},[t._v("id : "+t._s(s.id))]),e("br"),e("label",{staticClass:"form-label"},[t._v("userId : "+t._s(s.userId))]),e("br"),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label"},[t._v("title : ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:s.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text",name:"",id:""},domProps:{value:s.title},on:{input:function(e){e.target.composing||t.$set(s,"title",e.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(e){return t.updatePost(s.id)}}},[t._v("更新")])])])])})),0)])])},r=[],i={name:"PostFom",components:{},methods:{updatePost:function(t){this.$http.patch("https://jsonplaceholder.typicode.com/posts/1",{id:this.$store.state.posts[t-1].id,title:this.$store.state.posts[t-1].title,body:this.$store.state.posts[t-1].body,userId:this.$store.state.posts[t-1].userId}).then((function(t){console.log(t.data)})).catch((function(t){console.log("error",t)}))}}},l=i,c=e("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null),d=u.exports,p={name:"Home",components:{PostForm:d},data:function(){return{}},methods:{getPosts:function(){var t=this;this.$http.get("https://jsonplaceholder.typicode.com/posts").then((function(s){t.$store.commit("createPosts",s.data)}))}}},m=p,b=(e("21bb"),Object(c["a"])(m,o,a,!1,null,null,null));s["default"]=b.exports}}]);
//# sourceMappingURL=chunk-9909dea2.59595ffd.js.map