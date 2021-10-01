(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7d3bcd0"],{"206d":function(t,e,r){"use strict";r("4413")},2638:function(t,e,r){"use strict";t.exports=t=>"undefined"!==typeof Blob&&(t instanceof Blob||"[object Blob]"===Object.prototype.toString.call(t))},4413:function(t,e,r){},"694b":function(t,e,r){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,o,s;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(o=n;0!==o--;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(s=Object.keys(e),n=s.length,n!==Object.keys(r).length)return!1;for(o=n;0!==o--;)if(!Object.prototype.hasOwnProperty.call(r,s[o]))return!1;for(o=n;0!==o--;){var i=s[o];if(!t(e[i],r[i]))return!1}return!0}return e!==e&&r!==r}},"94db":function(t,e,r){"use strict";var n=r("da0c"),o=r("c786"),s=["get","post","head","delete","patch","put","options","list"];function i(){return function(t){var e=this;if(3!==arguments.length)return new Promise((function(r,o){n(e,r,o,t)}));n(e,arguments[0],arguments[1],arguments[2])}.bind(this)}function a(){return s.reduce((function(t,e){return t[e]=[],t}),{})}function u(){c.call(this),f.call(this)}function c(){this.handlers=a()}function f(){this.history=a()}function l(t,e){if(u.call(this),!t)throw new Error("Please provide an instance of axios to mock");this.axiosInstance=t,this.originalAdapter=t.defaults.adapter,this.delayResponse=e&&e.delayResponse>0?e.delayResponse:null,this.onNoMatch=e&&e.onNoMatch||null,t.defaults.adapter=this.adapter.call(this)}function d(t,e,r){for(var n=-1,s=0;s<e[t].length;s+=1){var i=e[t][s],a=7===i.length,u=i[0]instanceof RegExp&&r[0]instanceof RegExp?String(i[0])===String(r[0]):i[0]===r[0],c=u&&o.isEqual(i[1],r[1])&&o.isEqual(i[2],r[2]);c&&!a&&(n=s)}return n}function p(t,e,r){if("any"===t)s.forEach((function(t){e[t].push(r)}));else{var n=d(t,e,r);n>-1&&r.length<7?e[t].splice(n,1,r):e[t].push(r)}}l.prototype.adapter=i,l.prototype.restore=function(){this.axiosInstance&&(this.axiosInstance.defaults.adapter=this.originalAdapter,this.axiosInstance=void 0)},l.prototype.reset=u,l.prototype.resetHandlers=c,l.prototype.resetHistory=f,s.concat("any").forEach((function(t){var e="on"+t.charAt(0).toUpperCase()+t.slice(1);l.prototype[e]=function(e,r,n){var s=this;e=void 0===e?/.*/:e;function i(o,i,a){var u=[e,r,n,o,i,a];return p(t,s.handlers,u),s}function a(o,i,a){var u=[e,r,n,o,i,a,!0];return p(t,s.handlers,u),s}return{reply:i,replyOnce:a,passThrough:function(){var n=[e,r];return p(t,s.handlers,n),s},abortRequest:function(){return i((function(t){var e=o.createAxiosError("Request aborted",t,void 0,"ECONNABORTED");return Promise.reject(e)}))},abortRequestOnce:function(){return a((function(t){var e=o.createAxiosError("Request aborted",t,void 0,"ECONNABORTED");return Promise.reject(e)}))},networkError:function(){return i((function(t){var e=o.createAxiosError("Network Error",t);return Promise.reject(e)}))},networkErrorOnce:function(){return a((function(t){var e=o.createAxiosError("Network Error",t);return Promise.reject(e)}))},timeout:function(){return i((function(t){var e=o.createAxiosError(t.timeoutErrorMessage||"timeout of "+t.timeout+"ms exceeded",t,void 0,"ECONNABORTED");return Promise.reject(e)}))},timeoutOnce:function(){return a((function(t){var e=o.createAxiosError(t.timeoutErrorMessage||"timeout of "+t.timeout+"ms exceeded",t,void 0,"ECONNABORTED");return Promise.reject(e)}))}}}})),t.exports=l,t.exports.default=l},a55b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Navbar"),r("div",{staticClass:"Login"},[r("p",[t._v("請先登入")]),r("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.Login.apply(null,arguments)}}},[r("div",{staticClass:"mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.user.username,expression:"$store.state.user.username"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"User Name"},domProps:{value:t.$store.state.user.username},on:{input:function(e){e.target.composing||t.$set(t.$store.state.user,"username",e.target.value)}}})]),r("div",{staticClass:"mb-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.user.password,expression:"$store.state.user.password"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.$store.state.user.password},on:{input:function(e){e.target.composing||t.$set(t.$store.state.user,"password",e.target.value)}}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("登入")])])])],1)},o=[],s=r("d178"),i={name:"Login",components:{Navbar:s["a"]},data:function(){return{}},methods:{Login:function(){var t=this,e=r("bc3a"),n=r("94db"),o=new n(e);o.onPost("/api/v1/login",{params:{user:{username:"test",password:"test"}}}).reply(200,{user:{id:1,username:"test",email:"test@aiplux.com"},token:"fake-token"}),this.$http.post("/api/v1/login",{params:{user:{username:this.$store.state.user.username,password:this.$store.state.user.password}}}).then((function(e){localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("token",e.data.token),t.$store.commit("Login"),t.$router.push("/"),o.restore()})).catch((function(t){alert("登入失敗 ".concat(t))}))}}},a=i,u=(r("206d"),r("2877")),c=Object(u["a"])(a,n,o,!1,null,null,null);e["default"]=c.exports},a6b2:function(t,e){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&null!=t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},c786:function(t,e,r){"use strict";var n=r("bc3a"),o=r("694b"),s=r("a6b2"),i=r("2638"),a=Object.prototype.toString,u=!!n.create().defaults.headers;function c(t,e){for(var r=t.length,n=0;n<r;n++){var o=t[n];if(e(o))return o}}function f(t){return"[object Function]"===a.call(t)}function l(t){return null!==t&&"object"===typeof t}function d(t){return l(t)&&f(t.pipe)}function p(t){return"[object ArrayBuffer]"===a.call(t)}function h(t,e){return t?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):e}function m(t,e,r,n,o,s,i){return c(t[e.toLowerCase()],(function(t){return"string"===typeof t[0]?(v(r,t[0])||v(h(i,r),t[0]))&&g(e,n,o,t[1])&&b(s,t[2]):t[0]instanceof RegExp?(t[0].test(r)||t[0].test(h(i,r)))&&g(e,n,o,t[1])&&b(s,t[2]):void 0}))}function v(t,e){var r="/"===t[0]?t.substr(1):t,n="/"===e[0]?e.substr(1):e;return r===n}function g(t,e,r,n){var o=["delete","get","head","options"];if(o.indexOf(t.toLowerCase())>=0){var s=n?n.params:void 0;return b(r,s)}return y(e,n)}function b(t,e){return void 0===e||("function"===typeof e.asymmetricMatch?e.asymmetricMatch(t):o(t,e))}function y(t,e){if(void 0===e)return!0;var r;try{r=JSON.parse(t)}catch(n){}return b(r||t,e)}function E(t,e){Object.keys(t.handlers).forEach((function(r){var n=t.handlers[r].indexOf(e);n>-1&&t.handlers[r].splice(n,1)}))}function O(t,e,r,n){if(n>0)setTimeout(O,n,t,e,r);else if(u||r.config&&r.config.validateStatus)if(!r.config.validateStatus||r.config.validateStatus(r.status))t(r);else{if(!u)return e(r);e(x("Request failed with status code "+r.status,r.config,r))}else r.status>=200&&r.status<300?t(r):e(r)}function x(t,e,r,n){var o=new Error(t);return o.isAxiosError=!0,o.config=e,void 0!==r&&(o.response=r),void 0!==n&&(o.code=n),o.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},o}function w(t){var e="Could not find mock for: \n"+JSON.stringify(t,["method","url"],2),r=new Error(e);return r.isCouldNotFindMockError=!0,r.url=t.url,r.method=t.method,r}t.exports={find:c,findHandler:m,purgeIfReplyOnce:E,settle:O,isStream:d,isArrayBuffer:p,isFunction:f,isObjectOrArray:l,isBuffer:s,isBlob:i,isEqual:o,createAxiosError:x,createCouldNotFindMockError:w}},da0c:function(t,e,r){"use strict";var n=r("c786");function o(t){return n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isBlob(t)?t:n.isObjectOrArray(t)?JSON.parse(JSON.stringify(t)):t}function s(t,e){return{status:t[0],data:o(t[1]),headers:t[2],config:e,request:{responseURL:e.url}}}function i(t,e,r,o){var i=o.url||"";o.baseURL&&i.substr(0,o.baseURL.length)===o.baseURL&&(i=i.slice(o.baseURL.length)),delete o.adapter,t.history[o.method].push(o);var a=n.findHandler(t.handlers,o.method,i,o.data,o.params,o.headers,o.baseURL);if(a)if(7===a.length&&n.purgeIfReplyOnce(t,a),2===a.length)t.originalAdapter(o).then(e,r);else if("function"!==typeof a[3])n.settle(e,r,s(a.slice(3),o),t.delayResponse);else{var u=a[3](o);"function"!==typeof u.then?n.settle(e,r,s(u,o),t.delayResponse):u.then((function(i){i.config&&i.status?n.settle(e,r,s([i.status,i.data,i.headers],i.config),0):n.settle(e,r,s(i,o),t.delayResponse)}),(function(e){t.delayResponse>0?setTimeout((function(){r(e)}),t.delayResponse):r(e)}))}else switch(t.onNoMatch){case"passthrough":t.originalAdapter(o).then(e,r);break;case"throwException":throw n.createCouldNotFindMockError(o);default:n.settle(e,r,{status:404,config:o},t.delayResponse)}}t.exports=i}}]);
//# sourceMappingURL=chunk-d7d3bcd0.dafc634b.js.map