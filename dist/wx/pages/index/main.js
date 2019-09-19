require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(16);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5dc3cb1e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(22);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5dc3cb1e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5dc3cb1e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dc3cb1e", Component.options)
  } else {
    hotAPI.reload("data-v-5dc3cb1e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: '三体',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },

  methods: {
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      if (global.mpvuePlatform === 'wx') {
        global.mpvue.switchTab({ url: url });
      } else {
        global.mpvue.navigateTo({ url: url });
      }
    },
    clickHandle: function clickHandle(ev) {
      console.log('clickHandle:', ev);
      // throw {message: 'custom test'}
    }
  },

  created: function created() {
    // let app = getApp()
  }
});

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "containerBox",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.clickHandle
    }
  }, [_c('div', {
    staticClass: "userinfo",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.bindViewTap
    }
  }, [_c('i-avatar', {
    attrs: {
      "src": "/static/images/banner.jpg",
      "size": "large",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "userinfo-nickname"
  }, [_c('card', {
    attrs: {
      "text": _vm.userInfo.nickName,
      "mpcomid": '1'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('i-grid', {
    attrs: {
      "mpcomid": '14'
    }
  }, [_c('i-grid-item', {
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('a', {
    staticClass: "counter",
    attrs: {
      "href": "/pages/counter/main"
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('i-avatar', {
    attrs: {
      "src": "/static/images/redAn.jpg",
      "size": "small",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '4'
    }
  }, [_vm._v("红岸工程")])], 1)]), _vm._v(" "), _c('i-grid-item', {
    attrs: {
      "mpcomid": '9'
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '7'
    }
  }, [_c('i-avatar', {
    attrs: {
      "src": "/static/images/user.png",
      "size": "small",
      "mpcomid": '6'
    }
  })], 1), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '8'
    }
  }, [_vm._v("古筝行动")])], 1), _vm._v(" "), _c('i-grid-item', {
    attrs: {
      "mpcomid": '13'
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '11'
    }
  }, [_c('i-avatar', {
    attrs: {
      "src": "/static/images/user.png",
      "size": "small",
      "mpcomid": '10'
    }
  })], 1), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '12'
    }
  }, [_vm._v("面壁计划")])], 1)], 1), _vm._v(" "), _c('i-grid', {
    attrs: {
      "mpcomid": '27'
    }
  }, [_c('i-grid-item', {
    attrs: {
      "mpcomid": '18'
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '16'
    }
  }, [_c('i-avatar', {
    attrs: {
      "src": "/static/images/user.png",
      "size": "small",
      "mpcomid": '15'
    }
  })], 1), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '17'
    }
  }, [_vm._v("黑暗森林")])], 1), _vm._v(" "), _c('i-grid-item', {
    attrs: {
      "mpcomid": '22'
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '20'
    }
  }, [_c('i-avatar', {
    attrs: {
      "src": "/static/images/user.png",
      "size": "small",
      "mpcomid": '19'
    }
  })], 1), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '21'
    }
  }, [_vm._v("阶梯计划")])], 1), _vm._v(" "), _c('i-grid-item', {
    attrs: {
      "mpcomid": '26'
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '24'
    }
  }, [_c('i-avatar', {
    attrs: {
      "src": "/static/images/user.png",
      "size": "small",
      "mpcomid": '23'
    }
  })], 1), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '25'
    }
  }, [_vm._v("执剑人")])], 1)], 1), _vm._v(" "), _c('i-grid', {
    attrs: {
      "mpcomid": '40'
    }
  }, [_c('i-grid-item', {
    attrs: {
      "mpcomid": '31'
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '29'
    }
  }, [_c('i-avatar', {
    attrs: {
      "src": "/static/images/user.png",
      "size": "small",
      "mpcomid": '28'
    }
  })], 1), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '30'
    }
  }, [_vm._v("黑域计划")])], 1), _vm._v(" "), _c('i-grid-item', {
    attrs: {
      "mpcomid": '35'
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '33'
    }
  }, [_c('i-avatar', {
    attrs: {
      "src": "/static/images/user.png",
      "size": "small",
      "mpcomid": '32'
    }
  })], 1), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '34'
    }
  }, [_vm._v("光速飞船")])], 1), _vm._v(" "), _c('i-grid-item', {
    attrs: {
      "mpcomid": '39'
    }
  }, [_c('i-grid-icon', {
    attrs: {
      "mpcomid": '37'
    }
  }, [_c('i-avatar', {
    attrs: {
      "src": "/static/images/user.png",
      "size": "small",
      "mpcomid": '36'
    }
  })], 1), _vm._v(" "), _c('i-grid-label', {
    attrs: {
      "mpcomid": '38'
    }
  }, [_vm._v("掩体计划")])], 1)], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5dc3cb1e", esExports)
  }
}

/***/ })

},[15]);