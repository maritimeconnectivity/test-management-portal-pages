"use strict";
(self["webpackChunkmanagement_portal_clr"] = self["webpackChunkmanagement_portal_clr"] || []).push([["src_app_landing_landing_module_ts"],{

/***/ 2119:
/*!***************************************************!*\
  !*** ./src/app/landing/landing-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingRoutingModule: () => (/* binding */ LandingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 59655);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.component */ 5255);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 41391);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42391);





const routes = [{
  path: '',
  component: _landing_component__WEBPACK_IMPORTED_MODULE_0__.LandingComponent,
  children: [{
    path: 'login',
    component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
  }, {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: 'login'
  }]
}];
/**
 * a router component for landing module
 */
class LandingRoutingModule {
  static #_ = this.ɵfac = function LandingRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LandingRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: LandingRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LandingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5255:
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 42391);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 59655);


/**
 * a component for landing module
 */
class LandingComponent {
  static #_ = this.ɵfac = function LandingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LandingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LandingComponent,
    selectors: [["mp-landing"]],
    decls: 1,
    vars: 0,
    template: function LandingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 3254:
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingModule: () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 41391);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 59655);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component */ 5255);
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-routing.module */ 2119);
/* harmony import */ var _common_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/shared/shared.module */ 87224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 42391);






class LandingModule {
  static #_ = this.ɵfac = function LandingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LandingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: LandingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_common_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__.LandingRoutingModule, _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LandingModule, {
    declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent],
    imports: [_common_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__.LandingRoutingModule, _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent]
  });
})();

/***/ }),

/***/ 41391:
/*!**************************************************!*\
  !*** ./src/app/landing/login/login.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 18540);
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @clr/angular */ 99758);
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.config */ 26060);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 52525);
/* harmony import */ var src_app_common_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/languages */ 2376);
/* harmony import */ var src_app_common_translateHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/translateHelper */ 73673);
/* harmony import */ var src_app_common_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/shared/shared.module */ 87224);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ 8160);
/* harmony import */ var src_app_common_menuType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/menuType */ 93644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 75322);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 16339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 42391);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/auth.service */ 89809);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 95550);
/* harmony import */ var src_app_backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/backend-api/identity-registry */ 64886);
/* harmony import */ var _components_item_form_item_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/item-form/item-form.component */ 36880);

















const _c0 = ["regInfoModal"];
const _c1 = ["wizard"];
const _forTrack0 = ($index, $item) => $item.code;
function LoginComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_For_12_Template_div_click_0_listener() {
      const option_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.changeLang(option_r3.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](option_r3.name);
  }
}
function LoginComponent_ng_template_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "register.termsOfUse.title"));
  }
}
function LoginComponent_ng_template_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "register.enterInfo.title"));
  }
}
function LoginComponent_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "You need to agree the terms of use.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function LoginComponent_Conditional_111_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "clr-alert", 40)(1, "clr-alert-item")(2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "clr-alert-item")(5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("clrAlertType", "danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Something went wrong. If you have this message consistently please contact to ", ctx_r3.adminEmail, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("ERROR: ", ctx_r3.errMessage, "");
  }
}
function LoginComponent_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, LoginComponent_Conditional_111_Conditional_0_Template, 7, 3, "clr-alert", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "app-item-form", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("submitEvent", function LoginComponent_Conditional_111_Template_app_item_form_submitEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r3.submit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r3.submissionFailed ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isForNew", ctx_r3.isForNew)("itemType", ctx_r3.itemType)("item", ctx_r3.item)("mrnPrefix", ctx_r3.mrnPrefix);
  }
}
function LoginComponent_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "clr-alert", 40)(1, "clr-alert-item")(2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Data successfully submitted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("clrAlertType", "success");
  }
}
function LoginComponent_ng_template_113_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "clr-wizard-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "custom-next");
  }
}
function LoginComponent_ng_template_113_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function LoginComponent_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "clr-wizard-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, LoginComponent_ng_template_113_Conditional_2_Template, 2, 1, "clr-wizard-button", 35)(3, LoginComponent_ng_template_113_Conditional_3_Template, 2, 0, "button", 45);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "custom-previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](ctx_r3.submitted ? 2 : 3);
  }
}
function LoginComponent_ng_template_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, "register.summary.title"));
  }
}
class LoginComponent {
  constructor(authService, translate, organizationService) {
    this.authService = authService;
    this.translate = translate;
    this.organizationService = organizationService;
    this.langs = src_app_common_languages__WEBPACK_IMPORTED_MODULE_2__.languages;
    this.footerLink = src_app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.FOOTER_LINK;
    this.footerName = src_app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.FOOTER_NAME;
    this.environmentName = src_app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.ENVIRONMENT_NAME.toUpperCase();
    this.serviceProviderName = src_app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.MP_NAME;
    this.serviceYear = src_app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.MP_YEAR ?? new Date().getFullYear();
    this.currentLang = "en-GB";
    this.currentLangName = "English";
    this.loggedIn = false;
    this.version = src_app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.MP_VERSION;
    this.logo_img = src_app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.LOGO_IMG;
    this.wizardOpen = false;
    this.termsOfUse = src_app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.TERMS_OF_USE;
    this.size = "lg";
    this.regInfoOpened = false;
    this.regInputOpened = false;
    this.agreed = false;
    this.submitted = false;
    this.submissionFailed = false;
    this.nextText = "Agree";
    this.isForNew = true;
    this.itemType = src_app_common_menuType__WEBPACK_IMPORTED_MODULE_6__.ItemType.OrgCandidate;
    this.mrnPrefix = 'urn:mrn:mcp:org:' + src_app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.IDP_NAMESPACE + ':';
    this.item = {
      name: "",
      email: "",
      address: "",
      country: "",
      mrn: "",
      url: ""
    };
    this.contactEmail = "";
    this.adminEmail = src_app_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.MP_CONTACT;
    this.errMessage = "";
    (0,src_app_common_translateHelper__WEBPACK_IMPORTED_MODULE_3__.addLangs)(translate);
    this.loadLang();
    this.item.mrn = this.mrnPrefix;
  }
  ngOnInit() {
    this.updateLoggedIn();
  }
  updateLoggedIn() {
    this.authService.isAuthenticated().then(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }
  logIn() {
    var _this = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.authService.login();
      _this.updateLoggedIn();
    })();
  }
  logOut() {
    var _this2 = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.authService.logout();
      _this2.updateLoggedIn();
    })();
  }
  loadLang() {
    var _this3 = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.currentLang = (0,src_app_common_translateHelper__WEBPACK_IMPORTED_MODULE_3__.loadLang)(_this3.translate);
      _this3.currentLangName = (0,src_app_common_translateHelper__WEBPACK_IMPORTED_MODULE_3__.getLang)(_this3.currentLang);
    })();
  }
  changeLang(lang) {
    var _this4 = this;
    return (0,_home_runner_work_management_portal_clr_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      (0,src_app_common_translateHelper__WEBPACK_IMPORTED_MODULE_3__.changeLang)(_this4.translate, lang);
      _this4.loadLang();
    })();
  }
  /**
   * it triggers opening the registration dialog up
   */
  createRegisterDialog() {
    //this.dialogService.open(RegisterDialogComponent);
  }
  /**
   * it triggers opening the process dialog up
   */
  createProcessDialog() {
    //this.dialogService.open(ProcessDialogComponent);
  }
  openRegInfoModal() {
    this.regInfoModal?.open();
  }
  openWizard() {
    this.wizard?.reset();
    this.wizard?.open();
    this.agreed = false;
    this.submitted = false;
    this.item = {
      name: "",
      email: "",
      address: "",
      country: "",
      mrn: this.mrnPrefix,
      url: ""
    };
  }
  agree() {
    this.agreed = true;
  }
  submit(item) {
    this.organizationService.applyOrganization(item).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.catchError)(err => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)(err);
    })).subscribe(res => {
      this.contactEmail = item.email || "";
      this.submitted = true;
    }, err => {
      this.submissionFailed = true;
      this.errMessage = err.error.message;
      console.log(err);
    });
  }
  doCustomClick(buttonType) {
    if ('custom-next' === buttonType) {
      this.wizard?.next();
    }
    if ('custom-previous' === buttonType) {
      this.wizard?.previous();
    }
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_8__.OrganizationControllerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    viewQuery: function LoginComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.regInfoModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.wizard = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 119,
    vars: 66,
    consts: [["regInfoModal", ""], ["wizard", ""], [1, "login-wrapper"], [1, "login"], [1, "login-header"], [1, "top-logo"], ["height", "100%", "alt", "Logo", 3, "src"], [1, "actions"], ["clrDropdownTrigger", "", 1, "btn", "btn-link", "btn-sm"], ["shape", "angle", "direction", "down"], ["aria-label", "option.code", "clrDropdownItem", ""], [1, "login-body"], [1, "title"], [1, "hint"], [1, "login-group"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-warning-outline", 3, "click"], ["href", "javascript://", 1, "signup", 3, "click"], [1, "login-footer"], [1, "copyright"], ["target", "_blank", 1, "text-white", 3, "href"], [3, "clrModalOpenChange", "clrModalOpen", "clrModalSize"], [1, "modal-title"], [1, "modal-body"], [1, "clr-timeline"], [1, "clr-timeline-step"], [1, "clr-timeline-step-header"], ["role", "img", "shape", "circle", "aria-label", "Not started"], [1, "clr-timeline-step-body"], [1, "clr-timeline-step-title"], [1, "clr-timeline-step-description"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["clrWizardSize", "xl", 3, "clrWizardOpenChange", "clrWizardOpen"], [3, "type"], [3, "click", "type"], ["clrPageTitle", ""], [3, "clrWizardPageCustomButton"], [3, "isForNew", "itemType", "item", "mrnPrefix"], [3, "clrAlertType"], ["clrPageButtons", ""], ["aria-label", "option.code", "clrDropdownItem", "", 3, "click"], [3, "submitEvent", "isForNew", "itemType", "item", "mrnPrefix"], [1, "alert-text"], ["disabled", "", 1, "btn", "btn-primary"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "form", 3)(2, "div", 4)(3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 7)(6, "clr-dropdown")(7, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "cds-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "clr-dropdown-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeaterCreate"](11, LoginComponent_For_12_Template, 2, 1, "div", 10, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 11)(14, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 14)(21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.logIn());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.openWizard());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.openRegInfoModal());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 18)(31, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "clr-modal", 21, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("clrModalOpenChange", function LoginComponent_Template_clr_modal_clrModalOpenChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.regInfoOpened, $event) || (ctx.regInfoOpened = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "div", 23)(41, "ul", 24)(42, "li", 25)(43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Step 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](45, "cds-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 28)(47, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "li", 25)(54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Step 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](56, "cds-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 28)(58, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "li", 25)(65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "Step 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "cds-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "div", 28)(69, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "li", 25)(76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "Step 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](78, "cds-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "div", 28)(80, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "div", 31)(87, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_87_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.regInfoOpened = false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_89_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.regInfoOpened = false);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](90, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "clr-wizard", 34, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayListener"]("clrWizardOpenChange", function LoginComponent_Template_clr_wizard_clrWizardOpenChange_91_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayBindingSet"](ctx.wizardOpen, $event) || (ctx.wizardOpen = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "clr-wizard-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "clr-wizard-button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "clr-wizard-button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](99, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "clr-wizard-button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_Template_clr_wizard_button_click_100_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.agree());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "clr-wizard-button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "clr-wizard-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](105, LoginComponent_ng_template_105_Template, 2, 3, "ng-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](108, "clr-wizard-page", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("clrWizardPageCustomButton", function LoginComponent_Template_clr_wizard_page_clrWizardPageCustomButton_108_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx.doCustomClick($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](109, LoginComponent_ng_template_109_Template, 2, 3, "ng-template", 37)(110, LoginComponent_Conditional_110_Template, 2, 0, "p")(111, LoginComponent_Conditional_111_Template, 2, 5, "app-item-form", 39)(112, LoginComponent_Conditional_112_Template, 4, 1, "clr-alert", 40)(113, LoginComponent_ng_template_113_Template, 4, 2, "ng-template", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "clr-wizard-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](115, LoginComponent_ng_template_115_Template, 2, 3, "ng-template", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx.logo_img, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" Lang: ", ctx.currentLangName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrepeater"](ctx.langs);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 34, "landing.title.serviceName"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx.environmentName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](19, 36, "landing.title.environmentName"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](23, 38, "landing.button.login"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 40, "landing.button.register"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](29, 42, "landing.button.registerInfo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("2024 ", ctx.serviceProviderName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("href", ctx.footerLink, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.footerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("clrModalOpen", ctx.regInfoOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("clrModalSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](39, 44, "registrationProcess.title"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](49, 46, "registrationProcess.step1.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](52, 48, "registrationProcess.step1.content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](60, 50, "registrationProcess.step2.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](63, 52, "registrationProcess.step2.content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](71, 54, "registrationProcess.step3.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](74, 56, "registrationProcess.step3.content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](82, 58, "registrationProcess.step4.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](85, 60, "registrationProcess.step4.content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtwoWayProperty"]("clrWizardOpen", ctx.wizardOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](95, 62, "register.title"), "", ctx.environmentName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "next");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.nextText);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", "finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.termsOfUse);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵconditional"](!ctx.agreed ? 110 : ctx.agreed && !ctx.submitted ? 111 : 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](118, 64, "register.summary.content"), "", ctx.contactEmail, ".");
      }
    },
    dependencies: [_clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrSelectModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, src_app_common_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrModalModule, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrModal, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrModalBody, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.CdsIconCustomTag, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrDropdownModule, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrDropdown, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrDropdownMenu, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrDropdownTrigger, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrDropdownItem, src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule, _components_item_form_item_form_component__WEBPACK_IMPORTED_MODULE_9__.ItemFormComponent, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrAlertModule, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrAlert, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrAlertItem, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrAlertText, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrWizardModule, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrWizard, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrWizardPage, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrWizardButton, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrWizardTitle, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrWizardPageTitle, _clr_angular__WEBPACK_IMPORTED_MODULE_14__.ClrWizardPageButtons],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap);@import url(https://fonts.googleapis.com/css2?family=Staatliches&display=swap);.login-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    height: 100%;\n    background: url(\"/assets/images/sea_anim.svg\");\n    background-size: 100%;\n    background-position: calc(580*(1rem/var(--cds-global-base))) 800;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGFuZGluZy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw4Q0FBOEM7SUFDOUMscUJBQXFCO0lBQ3JCLGdFQUFnRTtJQUNoRSw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U3RhYXRsaWNoZXMmZGlzcGxheT1zd2FwJyk7XG5cbi5sb2dpbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9zZWFfYW5pbS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoNTgwKigxcmVtL3ZhcigtLWNkcy1nbG9iYWwtYmFzZSkpKSA4MDA7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_landing_landing_module_ts.js.map