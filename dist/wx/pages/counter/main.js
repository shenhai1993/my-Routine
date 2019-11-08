require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(28),r=n.n(o),u=n(220);new r.a(u.a).$mount()},220:function(e,t,n){"use strict";var o=n(222),r=n(225),u=!1;var c=function(e){u||n(221)},s=n(21)(o.a,r.a,c,null,null);s.options.__file="src\\pages\\counter\\index.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.a=s.exports},221:function(e,t){},222:function(e,t,n){"use strict";var o=n(223);t.a={computed:{count:function(){return o.a.state.count}},methods:{increment:function(){o.a.commit("increment")},decrement:function(){o.a.commit("decrement")}}}},223:function(e,t,n){"use strict";var o=n(28),r=n.n(o),u=n(224);r.a.use(u.a);var c=new u.a.Store({state:{count:0},mutations:{increment:function(e){e.count+=1},decrement:function(e){e.count-=1}}});t.a=c},225:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"counter-warp"},[n("p",[e._v("Vuex counter："+e._s(e.count))]),e._v(" "),n("p",[n("button",{attrs:{eventid:"0"},on:{click:e.increment}},[e._v("+")]),e._v(" "),n("button",{attrs:{eventid:"1"},on:{click:e.decrement}},[e._v("-")])],1)],1)};o._withStripped=!0;var r={render:o,staticRenderFns:[]};t.a=r}},[219]);