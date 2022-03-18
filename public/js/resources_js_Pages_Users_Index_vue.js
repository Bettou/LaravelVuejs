"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Users_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue */ "./node_modules/@inertiajs/inertia-vue/dist/index.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Link: _inertiajs_inertia_vue__WEBPACK_IMPORTED_MODULE_0__.Link
  },
  data: function data() {
    return {
      drawer: true,
      items: [{
        title: 'Home',
        icon: 'mdi-home-city',
        route: '/home'
      }, {
        title: 'My Account',
        icon: 'mdi-account'
      }, {
        title: 'Users',
        icon: 'mdi-account-group-outline',
        route: '/users'
      }, {
        title: 'Roles',
        icon: 'mdi-table',
        route: '/roles'
      }],
      mini: true
    };
  },
  watch: {
    '$page.props.flash': function $pagePropsFlash(flash) {
      if (flash.success) {
        this.$toast.success(flash.success);
      }

      if (flash.info) {
        this.$toast.info(flash.success);
      }

      if (flash.error) {
        this.$toast.error(flash.success);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Layouts/Admin */ "./resources/js/Layouts/Admin.vue");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: _Layouts_Admin__WEBPACK_IMPORTED_MODULE_0__["default"],
  data: function data() {
    return {
      search: '',
      page: 1,
      pageCount: 0,
      itemsPerPage: 100,
      headers: [{
        text: 'ID',
        value: 'id'
      }, {
        text: 'Nom',
        value: 'name'
      }, {
        text: 'E-Mail',
        value: 'email'
      }, {
        text: 'Roles',
        value: 'roles'
      }, {
        text: 'Permissions',
        value: 'permissions'
      }, {
        text: 'Action',
        value: 'actions'
      }]
    };
  },
  methods: {
    remove: function remove(id) {
      var _this = this;

      this.$confirm('voulez vous supprimez?', {
        buttonTrueText: 'Oui',
        buttonFalseText: 'Non',
        color: 'warning',
        icon: 'warning',
        title: 'Warning',
        width: 360
      }).then(function (res) {
        if (res) {
          _this.$inertia["delete"]('users/' + id);

          return true;
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Layouts/Admin.vue":
/*!****************************************!*\
  !*** ./resources/js/Layouts/Admin.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Admin_vue_vue_type_template_id_eb3fb40a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Admin.vue?vue&type=template&id=eb3fb40a& */ "./resources/js/Layouts/Admin.vue?vue&type=template&id=eb3fb40a&");
/* harmony import */ var _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Admin.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/Admin.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Admin_vue_vue_type_template_id_eb3fb40a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Admin_vue_vue_type_template_id_eb3fb40a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/Admin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Users/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Users/Index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5cc3d152& */ "./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Users/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/Admin.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Layouts/Admin.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Layouts/Admin.vue?vue&type=template&id=eb3fb40a&":
/*!***********************************************************************!*\
  !*** ./resources/js/Layouts/Admin.vue?vue&type=template&id=eb3fb40a& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_eb3fb40a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_eb3fb40a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Admin_vue_vue_type_template_id_eb3fb40a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Admin.vue?vue&type=template&id=eb3fb40a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=template&id=eb3fb40a&");


/***/ }),

/***/ "./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5cc3d152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=5cc3d152& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=template&id=eb3fb40a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/Admin.vue?vue&type=template&id=eb3fb40a& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c("v-app-bar", { attrs: { color: "primary", app: "" } }),
      _vm._v(" "),
      _c(
        "v-navigation-drawer",
        {
          attrs: { app: "", "mini-variant": _vm.mini, permanent: "" },
          on: {
            "update:miniVariant": function ($event) {
              _vm.mini = $event
            },
            "update:mini-variant": function ($event) {
              _vm.mini = $event
            },
          },
          model: {
            value: _vm.drawer,
            callback: function ($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer",
          },
        },
        [
          _c(
            "v-list-item",
            { staticClass: "px-2" },
            [
              _c(
                "v-list-item-avatar",
                [
                  _c("v-img", {
                    attrs: {
                      src: "https://randomuser.me/api/portraits/men/85.jpg",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-list-item-title", [_vm._v("John Leider")]),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  on: {
                    click: function ($event) {
                      $event.stopPropagation()
                      _vm.mini = !_vm.mini
                    },
                  },
                },
                [_c("v-icon", [_vm._v("mdi-chevron-left")])],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list",
            { attrs: { dense: "", shaped: "" } },
            _vm._l(_vm.items, function (item) {
              return _c(
                "Link",
                {
                  key: item.title,
                  staticStyle: { "text-decoration": "none" },
                  attrs: { href: item.route },
                },
                [
                  _c(
                    "v-list-item",
                    {
                      class:
                        _vm.$page.url == item.route ? "primary lighten-4" : "",
                      attrs: { link: "", "active-class": "primary--text" },
                    },
                    [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [_c("v-list-item-title", [_vm._v(_vm._s(item.title))])],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            }),
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-main", [_c("v-container", [_vm._t("default")], 2)], 1),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Users/Index.vue?vue&type=template&id=5cc3d152& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { attrs: { flat: "" } },
    [
      _c(
        "v-card-text",
        [
          _c(
            "v-toolbar",
            { attrs: { dark: "", dense: "", color: "primary" } },
            [
              _c("v-icon", { attrs: { left: "" } }, [
                _vm._v(" mdi-account-multiple "),
              ]),
              _vm._v(" "),
              _c("v-toolbar-title", [
                _vm._v("\n\n            Liste des utilisateurs\n          "),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "NavigationBtn",
            {
              staticClass: "ma-3",
              attrs: { href: "/users/create", color: "success" },
            },
            [
              _c("v-icon", { attrs: { left: "" } }, [
                _vm._v("mdi-plus-circle"),
              ]),
              _vm._v("\n          Ajouter\n        "),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-data-table", {
            attrs: {
              headers: _vm.headers,
              page: _vm.page,
              "items-per-page": _vm.itemsPerPage,
              "hide-default-footer": "",
              search: _vm.search,
              items: _vm.$page.props.users,
            },
            on: {
              "update:page": function ($event) {
                _vm.page = $event
              },
              "page-count": function ($event) {
                _vm.pageCount = $event
              },
            },
            scopedSlots: _vm._u([
              {
                key: "top",
                fn: function () {
                  return [
                    _c(
                      "v-toolbar",
                      { attrs: { flat: "" } },
                      [
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("v-text-field", {
                          attrs: {
                            dense: "",
                            solo: "",
                            outlined: "",
                            placeholder: "Rechercher",
                          },
                          model: {
                            value: _vm.search,
                            callback: function ($$v) {
                              _vm.search = $$v
                            },
                            expression: "search",
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                },
                proxy: true,
              },
              {
                key: "item.roles",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-chip-group",
                      { attrs: { column: "" } },
                      _vm._l(item.roles, function (role) {
                        return _c(
                          "v-chip",
                          {
                            key: role.id,
                            attrs: {
                              outlined: "",
                              small: "",
                              label: "",
                              color: "success",
                            },
                          },
                          [_vm._v(_vm._s(role.name))]
                        )
                      }),
                      1
                    ),
                  ]
                },
              },
              {
                key: "item.permissions",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-chip-group",
                      { attrs: { column: "" } },
                      _vm._l(item.permissions, function (permission) {
                        return _c(
                          "v-chip",
                          {
                            key: permission.id,
                            attrs: {
                              outlined: "",
                              small: "",
                              label: "",
                              color: "success",
                            },
                          },
                          [_vm._v(_vm._s(permission.name))]
                        )
                      }),
                      1
                    ),
                  ]
                },
              },
              {
                key: "item.actions",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _c(
                      "Navigation-Btn",
                      {
                        attrs: {
                          icon: "",
                          href: "/users/" + item.id + "/edit",
                        },
                      },
                      [
                        _c("v-icon", { attrs: { color: "warning" } }, [
                          _vm._v("mdi-pencil"),
                        ]),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function ($event) {
                            return _vm.remove(item.id)
                          },
                        },
                      },
                      [
                        _c(
                          "v-icon",
                          {
                            attrs: {
                              type: "button",
                              as: "button",
                              color: "error",
                            },
                          },
                          [_vm._v("mdi-delete")]
                        ),
                      ],
                      1
                    ),
                  ]
                },
              },
            ]),
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center pt-2" },
            [
              _c("v-pagination", {
                attrs: { length: _vm.pageCount },
                model: {
                  value: _vm.page,
                  callback: function ($$v) {
                    _vm.page = $$v
                  },
                  expression: "page",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);