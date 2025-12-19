(self["webpackChunkmanagement_portal_clr"] = self["webpackChunkmanagement_portal_clr"] || []).push([["main"],{

/***/ 64258:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule),
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 97820);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ 74956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17858);
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




const routes = [{
  path: 'pages',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 25143)).then(m => m.PagesModule),
  canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.authGuard]
}, {
  path: '',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_landing_landing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./landing/landing.module */ 77119)).then(m => m.LandingModule)
}
//*
//{ path: '', redirectTo: 'pages', pathMatch: 'full' },
//{ path: '**', redirectTo: 'pages' },
//*/
];
const config = {
  useHash: false
};
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, config), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 97596:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_assets_js_wasm_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/assets/js/wasm_exec.js */ 15418);
/* harmony import */ var src_assets_js_wasm_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_assets_js_wasm_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 97820);
/* harmony import */ var gramli_angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gramli-angular-notifier */ 84369);




class AppComponent {
  constructor() {
    this.title = 'management-portal-clr';
  }
  ngOnInit() {
    const go = new Go();
    WebAssembly.instantiateStreaming(fetch(window.location.origin + "/assets/wasm/main.wasm"), go.importObject).then(result => {
      console.log("Loaded WASM");
      go.run(result.instance).then(() => console.log("Finished"));
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet")(1, "notifier-container");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, gramli_angular_notifier__WEBPACK_IMPORTED_MODULE_3__.NotifierContainerComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 22769:
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConfig: () => (/* binding */ AppConfig)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 45824);
/* harmony import */ var _common_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/version */ 58386);
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class AppConfig {
  static _initialize() {
    AppConfig.IR_BASE_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.irBasePath.replace(/\/$/, '');
    AppConfig.SR_BASE_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hasServiceRegistry ? _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.srBasePath.replace(/\/$/, '') : '';
    AppConfig.ENVIRONMENT_TITLE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.environmentTitle;
    AppConfig.IDP_NAMESPACE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.idpNamespace;
    AppConfig.HAS_SERVICE_REGISTRY = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hasServiceRegistry;
    AppConfig.OIDC_BASE_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidcBasePath.replace(/\/$/, '');
    AppConfig.ENVIRONMENT_NAME = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.environmentName;
    AppConfig.IR_PROVIDER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.irProvider;
    AppConfig.IR_CONTACT = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.irContact;
    AppConfig.SR_PROVIDER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.srProvider;
    AppConfig.SR_CONTACT = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.srContact;
    AppConfig.HAS_MSR_LEDGER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hasMSRLedger;
    AppConfig.LEDGER_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.hasMSRLedger ? _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ledgerPath : '';
    AppConfig.MP_PROVIDER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mpProvider;
    AppConfig.MP_NAME = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mpName;
    AppConfig.TERMS_OF_USE = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.termsOfUse;
    AppConfig.MP_CONTACT = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mpContact;
    AppConfig.MP_VERSION = _common_version__WEBPACK_IMPORTED_MODULE_1__.mpVersion;
    AppConfig.MP_YEAR = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mpYear;
    AppConfig.FOOTER_NAME = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.footerName;
    AppConfig.FOOTER_LINK = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.footerLink;
    AppConfig.LOGO_IMG = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.logoImg;
  }
}
AppConfig._initialize();

/***/ }),

/***/ 86763:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17858);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 59851);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 53888);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 64258);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 97596);
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @clr/angular */ 48149);
/* harmony import */ var _backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backend-api/identity-registry */ 68937);
/* harmony import */ var _backend_api_service_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backend-api/service-registry */ 65392);
/* harmony import */ var _backend_api_secom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backend-api/secom */ 77410);
/* harmony import */ var _auth_auth_init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.init */ 82619);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! keycloak-angular */ 19232);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 28695);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/http-loader */ 38633);
/* harmony import */ var gramli_angular_notifier__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! gramli-angular-notifier */ 84369);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ 22769);
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.interceptor */ 30858);
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



















// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(http);
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.APP_INITIALIZER,
      useFactory: _auth_auth_init__WEBPACK_IMPORTED_MODULE_5__.initializeKeycloak,
      multi: true,
      deps: [keycloak_angular__WEBPACK_IMPORTED_MODULE_10__.KeycloakService]
    }, {
      provide: _backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__.BASE_PATH,
      useValue: _app_config__WEBPACK_IMPORTED_MODULE_6__.AppConfig.IR_BASE_PATH
    }, {
      provide: _backend_api_service_registry__WEBPACK_IMPORTED_MODULE_3__.BASE_PATH,
      useValue: _app_config__WEBPACK_IMPORTED_MODULE_6__.AppConfig.SR_BASE_PATH
    }, {
      provide: _backend_api_secom__WEBPACK_IMPORTED_MODULE_4__.BASE_PATH,
      useValue: _app_config__WEBPACK_IMPORTED_MODULE_6__.AppConfig.SR_BASE_PATH
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
      useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__.AuthInterceptor,
      multi: true
    }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.withInterceptorsFromDi)())],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, gramli_angular_notifier__WEBPACK_IMPORTED_MODULE_14__.NotifierModule, _clr_angular__WEBPACK_IMPORTED_MODULE_15__.ClarityModule, _backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__.ApiModule, _backend_api_service_registry__WEBPACK_IMPORTED_MODULE_3__.ApiModule, _backend_api_secom__WEBPACK_IMPORTED_MODULE_4__.ApiModule, keycloak_angular__WEBPACK_IMPORTED_MODULE_10__.KeycloakAngularModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
      }
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, gramli_angular_notifier__WEBPACK_IMPORTED_MODULE_14__.NotifierModule, _clr_angular__WEBPACK_IMPORTED_MODULE_15__.ClarityModule, _backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__.ApiModule, _backend_api_service_registry__WEBPACK_IMPORTED_MODULE_3__.ApiModule, _backend_api_secom__WEBPACK_IMPORTED_MODULE_4__.ApiModule, keycloak_angular__WEBPACK_IMPORTED_MODULE_10__.KeycloakAngularModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule]
  });
})();

/***/ }),

/***/ 74956:
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 4383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 97820);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 34954);




const authGuard = /*#__PURE__*/function () {
  var _ref = (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (route, state) {
    const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
    const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    const authenticated = yield authService.isAuthenticated();
    if (!authenticated) {
      yield router.navigate(['/login']);
      return false;
    }
    return authenticated;
  });
  return function authGuard(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 82619:
/*!***********************************!*\
  !*** ./src/app/auth/auth.init.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeKeycloak: () => (/* binding */ initializeKeycloak)
/* harmony export */ });
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.config */ 22769);
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const initializeKeycloak = keycloak => {
  return () => keycloak.init({
    config: {
      url: _app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.OIDC_BASE_PATH + '/auth/',
      realm: 'MCP',
      clientId: 'MCP-Portal'
    },
    enableBearerInterceptor: true,
    bearerPrefix: 'Bearer',
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html',
      checkLoginIframe: false
    }
  });
};

/***/ }),

/***/ 30858:
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 62176);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 37303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 97820);




class AuthInterceptor {
  constructor(router) {
    this.router = router;
  }
  intercept(req, next) {
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
      if (error.status === 401) {
        // Redirect to the login page
        this.router.navigate(['/login']);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
    }));
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}

/***/ }),

/***/ 57582:
/*!*****************************************!*\
  !*** ./src/app/auth/auth.permission.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthPermission: () => (/* binding */ AuthPermission),
/* harmony export */   AuthPermissionForMSR: () => (/* binding */ AuthPermissionForMSR),
/* harmony export */   PermissionResolver: () => (/* binding */ PermissionResolver),
/* harmony export */   hasAdminPermissionInMIR: () => (/* binding */ hasAdminPermissionInMIR),
/* harmony export */   rolesToPermission: () => (/* binding */ rolesToPermission)
/* harmony export */ });
/* harmony import */ var _backend_api_identity_registry_model_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend-api/identity-registry/model/role */ 30747);
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var RoleNameEnum = _backend_api_identity_registry_model_role__WEBPACK_IMPORTED_MODULE_0__.Role.RoleNameEnum;
var AuthPermission;
(function (AuthPermission) {
  AuthPermission[AuthPermission["User"] = 1] = "User";
  AuthPermission[AuthPermission["OrgAdmin"] = 2] = "OrgAdmin";
  AuthPermission[AuthPermission["SiteAdmin"] = 4] = "SiteAdmin";
  AuthPermission[AuthPermission["UserAdmin"] = 8] = "UserAdmin";
  AuthPermission[AuthPermission["VesselAdmin"] = 16] = "VesselAdmin";
  AuthPermission[AuthPermission["ServiceAdmin"] = 32] = "ServiceAdmin";
  AuthPermission[AuthPermission["DeviceAdmin"] = 64] = "DeviceAdmin";
  AuthPermission[AuthPermission["MMSAdmin"] = 128] = "MMSAdmin";
  AuthPermission[AuthPermission["ApproveOrg"] = 256] = "ApproveOrg";
  AuthPermission[AuthPermission["EntityAdmin"] = 512] = "EntityAdmin";
})(AuthPermission || (AuthPermission = {}));
var AuthPermissionForMSR;
(function (AuthPermissionForMSR) {
  AuthPermissionForMSR[AuthPermissionForMSR["User"] = 1] = "User";
  AuthPermissionForMSR[AuthPermissionForMSR["OrgServiceAdmin"] = 2] = "OrgServiceAdmin";
  AuthPermissionForMSR[AuthPermissionForMSR["LedgerAdmin"] = 4] = "LedgerAdmin";
  AuthPermissionForMSR[AuthPermissionForMSR["MSRAdmin"] = 8] = "MSRAdmin";
})(AuthPermissionForMSR || (AuthPermissionForMSR = {}));
const rolesToPermission = roles => {
  let permission = AuthPermission.User;
  if (!roles) {
    return permission;
  }
  for (const roleString of roles) {
    switch (roleString) {
      case RoleNameEnum.ORGADMIN:
        {
          permission = permission | AuthPermission.OrgAdmin;
          break;
        }
      case RoleNameEnum.SITEADMIN:
        {
          permission = permission | AuthPermission.SiteAdmin;
          break;
        }
      case RoleNameEnum.USERADMIN:
        {
          permission = permission | AuthPermission.UserAdmin;
          break;
        }
      case RoleNameEnum.DEVICEADMIN:
        {
          permission = permission | AuthPermission.DeviceAdmin;
          break;
        }
      case RoleNameEnum.VESSELADMIN:
        {
          permission = permission | AuthPermission.VesselAdmin;
          break;
        }
      case RoleNameEnum.SERVICEADMIN:
        {
          permission = permission | AuthPermission.ServiceAdmin;
          break;
        }
      case RoleNameEnum.ENTITYADMIN:
        {
          permission = permission | AuthPermission.EntityAdmin;
          break;
        }
      case RoleNameEnum.MMSADMIN:
        {
          permission = permission | AuthPermission.MMSAdmin;
          break;
        }
      case RoleNameEnum.APPROVEORG:
        {
          permission = permission | AuthPermission.ApproveOrg;
          break;
        }
      default:
        permission = permission | AuthPermission.User;
    }
  }
  return permission;
};
class PermissionResolver {
  static isSiteAdmin(permission) {
    return (permission & AuthPermission.SiteAdmin) > 0;
  }
  static isOrgAdmin(permission) {
    return (permission & AuthPermission.OrgAdmin) > 0 || this.isSiteAdmin(permission);
  }
  static isEntityAdmin(permission) {
    return (permission & AuthPermission.EntityAdmin) > 0 || this.isOrgAdmin(permission);
  }
  static isUserAdmin(permission) {
    return (permission & AuthPermission.UserAdmin) > 0 || this.isEntityAdmin(permission);
  }
  static isVesselAdmin(permission) {
    return (permission & AuthPermission.VesselAdmin) > 0 || this.isEntityAdmin(permission);
  }
  static isDeviceAdmin(permission) {
    return (permission & AuthPermission.DeviceAdmin) > 0 || this.isEntityAdmin(permission);
  }
  static isServiceAdmin(permission) {
    return (permission & AuthPermission.ServiceAdmin) > 0 || this.isEntityAdmin(permission);
  }
  static canApproveOrg(permission) {
    return (permission & AuthPermission.ApproveOrg) > 0 || this.isSiteAdmin(permission);
  }
  static isMSRAdmin(roles) {
    return roles && roles.length > 0 && roles.includes('admin');
  }
  static isLedgerAdmin(roles) {
    return roles && roles.length > 0 && roles.includes('ledger_admin');
  }
  static isOrgServiceAdmin(roles) {
    return roles && roles.length > 0 && roles.includes('service_admin');
  }
}
const hasAdminPermissionInMIR = (myPermission, permissionRole) => {
  switch (permissionRole) {
    case AuthPermission.User:
      return true;
    case AuthPermission.SiteAdmin:
      return PermissionResolver.isSiteAdmin(myPermission);
    case AuthPermission.OrgAdmin:
      return PermissionResolver.isOrgAdmin(myPermission);
    case AuthPermission.ApproveOrg:
      return PermissionResolver.canApproveOrg(myPermission);
    case AuthPermission.EntityAdmin:
      return PermissionResolver.isEntityAdmin(myPermission);
    case AuthPermission.ServiceAdmin:
      return PermissionResolver.isServiceAdmin(myPermission);
    case AuthPermission.DeviceAdmin:
      return PermissionResolver.isDeviceAdmin(myPermission);
    case AuthPermission.VesselAdmin:
      return PermissionResolver.isVesselAdmin(myPermission);
    case AuthPermission.UserAdmin:
      return PermissionResolver.isUserAdmin(myPermission);
    default:
      return false;
  }
};

/***/ }),

/***/ 34954:
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 4383);
/* harmony import */ var _auth_permission__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.permission */ 57582);
/* harmony import */ var _common_menuType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/menuType */ 82287);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 24394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 17858);
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! keycloak-angular */ 19232);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 97820);
/* harmony import */ var _common_shared_item_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/shared/item-manager.service */ 84192);








class AuthService {
  constructor(keycloakService, router, itemManagerService) {
    this.keycloakService = keycloakService;
    this.router = router;
    this.itemManagerService = itemManagerService;
    this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
    this.protectFromEmptyToken = () => {
      const tokenParsed = this.keycloakService.getKeycloakInstance().tokenParsed;
      if (!tokenParsed) {
        this.router.navigate(['/login']);
        throw new Error('User is not authenticated');
      }
    };
  }
  login() {
    var _this = this;
    return (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = window.location;
      yield _this.keycloakService.login({
        redirectUri: url.protocol + '//' + url.host + '/pages'
      });
      // Check authentication status after login
      //this.isAuthenticated();
    })();
  }
  setAuthenticated(isAuthenticated) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
  logout() {
    var _this2 = this;
    return (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = window.location;
      yield _this2.keycloakService.logout(url.protocol + '//' + url.host + '/login');
      _this2.itemManagerService.clearRolesContext();
    })();
  }
  isAuthenticated() {
    var _this3 = this;
    return (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const authenticated = yield _this3.keycloakService.isLoggedIn();
      _this3.setAuthenticated(authenticated);
      return Promise.resolve(authenticated);
    })();
  }
  getToken() {
    var _this4 = this;
    return (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.protectFromEmptyToken();
      return _this4.keycloakService.getToken();
    })();
  }
  getOrgMrnFromToken() {
    var _this5 = this;
    return (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.protectFromEmptyToken();
      return _this5.keycloakService.getKeycloakInstance().tokenParsed["org"];
    })();
  }
  getUserNameFromToken() {
    var _this6 = this;
    return (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.protectFromEmptyToken();
      return _this6.keycloakService.getKeycloakInstance().tokenParsed["name"];
    })();
  }
  getUserMrnFromToken() {
    var _this7 = this;
    return (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.protectFromEmptyToken();
      return _this7.keycloakService.getKeycloakInstance().tokenParsed["mrn"];
    })();
  }
  getUserRolesFromToken() {
    var _this8 = this;
    return (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.protectFromEmptyToken();
      return _this8.keycloakService.getKeycloakInstance().tokenParsed["roles"];
    })();
  }
  getUserPermissionsFromToken() {
    var _this9 = this;
    return (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.protectFromEmptyToken();
      return _this9.keycloakService.getKeycloakInstance().tokenParsed["permissions"];
    })();
  }
  getUserPermission(rolesInOrg) {
    if (!rolesInOrg || rolesInOrg.length === 0) {
      return _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.User;
    }
    return (0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.rolesToPermission)(rolesInOrg);
  }
  hasSiteAdminPermission(rolesInOrg) {
    return (0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)((0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.rolesToPermission)(rolesInOrg), _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.SiteAdmin);
  }
  hasApproveOrgPermission(rolesInOrg) {
    return (0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)((0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.rolesToPermission)(rolesInOrg), _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.ApproveOrg);
  }
  hasPermission(context, rolesInOrg, mcpcontext, forMyOrg = false) {
    this.protectFromEmptyToken();
    if (mcpcontext === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.MCPComponentContext.MSR) {
      return true;
    }
    if (!this.keycloakService.isLoggedIn()) {
      return false;
    }
    const permission = this.getUserPermission(rolesInOrg);
    if (!permission) {
      return false;
    }
    if ((0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.SiteAdmin)) {
      // super admin
      return true;
    } else if (context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.User) {
      return (0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.UserAdmin);
    } else if (context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.Device) {
      return (0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.DeviceAdmin);
    } else if (context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.Vessel) {
      return (0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.VesselAdmin);
    } else if (context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.MMS) {
      return (0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.MMSAdmin);
    } else if (context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.Service) {
      return (0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.ServiceAdmin);
    } else if (forMyOrg && context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.Organization || context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.Role) {
      // for my own organization management
      return (0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.OrgAdmin);
    } else if (context === _common_menuType__WEBPACK_IMPORTED_MODULE_2__.ItemType.Organization) {
      return (0,_auth_permission__WEBPACK_IMPORTED_MODULE_1__.hasAdminPermissionInMIR)(permission, _auth_permission__WEBPACK_IMPORTED_MODULE_1__.AuthPermission.SiteAdmin);
    } else {
      return false;
    }
  }
  convertPermissionToRoles(permission, rolesInOrg) {
    const roles = [];
    for (const role of rolesInOrg) {
      if (permission.includes(role.permission)) {
        roles.push(role.roleName);
      }
    }
    return roles;
  }
  static #_ = this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_6__.KeycloakService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_common_shared_item_manager_service__WEBPACK_IMPORTED_MODULE_3__.ItemManagerService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 96099:
/*!*************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiModule: () => (/* binding */ ApiModule)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 21167);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _api_agentController_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/agentController.service */ 17838);
/* harmony import */ var _api_certificateController_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/certificateController.service */ 75060);
/* harmony import */ var _api_deviceController_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/deviceController.service */ 60675);
/* harmony import */ var _api_logoController_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/logoController.service */ 37090);
/* harmony import */ var _api_mmsController_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/mmsController.service */ 87064);
/* harmony import */ var _api_organizationController_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/organizationController.service */ 67202);
/* harmony import */ var _api_roleController_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/roleController.service */ 18357);
/* harmony import */ var _api_serviceController_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/serviceController.service */ 58496);
/* harmony import */ var _api_userController_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/userController.service */ 34618);
/* harmony import */ var _api_vesselController_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/vesselController.service */ 47499);
/* harmony import */ var _api_vesselImageController_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api/vesselImageController.service */ 40244);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../app.config */ 22769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 17858);
















class ApiModule {
  static forRoot(configurationFactory) {
    return {
      ngModule: ApiModule,
      providers: [{
        provide: _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration,
        useFactory: configurationFactory
      }]
    };
  }
  constructor(parentModule, http) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
    }
  }
  static #_ = this.ɵfac = function ApiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient, 8));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: ApiModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    providers: [_api_agentController_service__WEBPACK_IMPORTED_MODULE_1__.AgentControllerService, _api_certificateController_service__WEBPACK_IMPORTED_MODULE_2__.CertificateControllerService, _api_deviceController_service__WEBPACK_IMPORTED_MODULE_3__.DeviceControllerService, _api_logoController_service__WEBPACK_IMPORTED_MODULE_4__.LogoControllerService, _api_mmsController_service__WEBPACK_IMPORTED_MODULE_5__.MmsControllerService, {
      provide: _api_organizationController_service__WEBPACK_IMPORTED_MODULE_6__.OrganizationControllerService,
      useFactory: http => {
        return new _api_organizationController_service__WEBPACK_IMPORTED_MODULE_6__.OrganizationControllerService(http, _app_config__WEBPACK_IMPORTED_MODULE_12__.AppConfig.IR_BASE_PATH, new _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration());
      },
      deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient]
    }, _api_roleController_service__WEBPACK_IMPORTED_MODULE_7__.RoleControllerService, _api_serviceController_service__WEBPACK_IMPORTED_MODULE_8__.ServiceControllerService, _api_userController_service__WEBPACK_IMPORTED_MODULE_9__.UserControllerService, _api_vesselController_service__WEBPACK_IMPORTED_MODULE_10__.VesselControllerService, _api_vesselImageController_service__WEBPACK_IMPORTED_MODULE_11__.VesselImageControllerService]
  });
}

/***/ }),

/***/ 17838:
/*!******************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/agentController.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentControllerService: () => (/* binding */ AgentControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 66117);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 82300);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 21167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17858);







class AgentControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createAgent(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createAgent.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createAgent.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/agent`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteAgent(orgMrn, agentId, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteAgent.');
    }
    if (agentId === null || agentId === undefined) {
      throw new Error('Required parameter agentId was null or undefined when calling deleteAgent.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/agent/${encodeURIComponent(String(agentId))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getActingOnBehalfOf(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getActingOnBehalfOf.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/acting-on-behalf-of`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getAgent(orgMrn, agentId, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getAgent.');
    }
    if (agentId === null || agentId === undefined) {
      throw new Error('Required parameter agentId was null or undefined when calling getAgent.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/agent/${encodeURIComponent(String(agentId))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getAgents(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getAgents.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/agents`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateAgent(body, orgMrn, agentId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateAgent.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateAgent.');
    }
    if (agentId === null || agentId === undefined) {
      throw new Error('Required parameter agentId was null or undefined when calling updateAgent.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/agent/${encodeURIComponent(String(agentId))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function AgentControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AgentControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AgentControllerService,
    factory: AgentControllerService.ɵfac
  });
}

/***/ }),

/***/ 69970:
/*!**********************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/api.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIS: () => (/* binding */ APIS),
/* harmony export */   AgentControllerService: () => (/* reexport safe */ _agentController_service__WEBPACK_IMPORTED_MODULE_0__.AgentControllerService),
/* harmony export */   CertificateControllerService: () => (/* reexport safe */ _certificateController_service__WEBPACK_IMPORTED_MODULE_1__.CertificateControllerService),
/* harmony export */   DeviceControllerService: () => (/* reexport safe */ _deviceController_service__WEBPACK_IMPORTED_MODULE_2__.DeviceControllerService),
/* harmony export */   LogoControllerService: () => (/* reexport safe */ _logoController_service__WEBPACK_IMPORTED_MODULE_3__.LogoControllerService),
/* harmony export */   MmsControllerService: () => (/* reexport safe */ _mmsController_service__WEBPACK_IMPORTED_MODULE_4__.MmsControllerService),
/* harmony export */   OrganizationControllerService: () => (/* reexport safe */ _organizationController_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationControllerService),
/* harmony export */   RoleControllerService: () => (/* reexport safe */ _roleController_service__WEBPACK_IMPORTED_MODULE_6__.RoleControllerService),
/* harmony export */   ServiceControllerService: () => (/* reexport safe */ _serviceController_service__WEBPACK_IMPORTED_MODULE_7__.ServiceControllerService),
/* harmony export */   UserControllerService: () => (/* reexport safe */ _userController_service__WEBPACK_IMPORTED_MODULE_8__.UserControllerService),
/* harmony export */   VesselControllerService: () => (/* reexport safe */ _vesselController_service__WEBPACK_IMPORTED_MODULE_9__.VesselControllerService),
/* harmony export */   VesselImageControllerService: () => (/* reexport safe */ _vesselImageController_service__WEBPACK_IMPORTED_MODULE_10__.VesselImageControllerService)
/* harmony export */ });
/* harmony import */ var _agentController_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agentController.service */ 17838);
/* harmony import */ var _certificateController_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./certificateController.service */ 75060);
/* harmony import */ var _deviceController_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deviceController.service */ 60675);
/* harmony import */ var _logoController_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logoController.service */ 37090);
/* harmony import */ var _mmsController_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mmsController.service */ 87064);
/* harmony import */ var _organizationController_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organizationController.service */ 67202);
/* harmony import */ var _roleController_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roleController.service */ 18357);
/* harmony import */ var _serviceController_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./serviceController.service */ 58496);
/* harmony import */ var _userController_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userController.service */ 34618);
/* harmony import */ var _vesselController_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vesselController.service */ 47499);
/* harmony import */ var _vesselImageController_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vesselImageController.service */ 40244);






















const APIS = [_agentController_service__WEBPACK_IMPORTED_MODULE_0__.AgentControllerService, _certificateController_service__WEBPACK_IMPORTED_MODULE_1__.CertificateControllerService, _deviceController_service__WEBPACK_IMPORTED_MODULE_2__.DeviceControllerService, _logoController_service__WEBPACK_IMPORTED_MODULE_3__.LogoControllerService, _mmsController_service__WEBPACK_IMPORTED_MODULE_4__.MmsControllerService, _organizationController_service__WEBPACK_IMPORTED_MODULE_5__.OrganizationControllerService, _roleController_service__WEBPACK_IMPORTED_MODULE_6__.RoleControllerService, _serviceController_service__WEBPACK_IMPORTED_MODULE_7__.ServiceControllerService, _userController_service__WEBPACK_IMPORTED_MODULE_8__.UserControllerService, _vesselController_service__WEBPACK_IMPORTED_MODULE_9__.VesselControllerService, _vesselImageController_service__WEBPACK_IMPORTED_MODULE_10__.VesselImageControllerService];

/***/ }),

/***/ 75060:
/*!************************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/certificateController.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificateControllerService: () => (/* binding */ CertificateControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ 82300);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ 21167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17858);






class CertificateControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  getCRL(caAlias, observe = 'body', reportProgress = false) {
    if (caAlias === null || caAlias === undefined) {
      throw new Error('Required parameter caAlias was null or undefined when calling getCRL.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/x-pem-file'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/certificates/crl/${encodeURIComponent(String(caAlias))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOCSP(caAlias, ocspRequest, observe = 'body', reportProgress = false) {
    if (caAlias === null || caAlias === undefined) {
      throw new Error('Required parameter caAlias was null or undefined when calling getOCSP.');
    }
    if (ocspRequest === null || ocspRequest === undefined) {
      throw new Error('Required parameter ocspRequest was null or undefined when calling getOCSP.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/ocsp-response'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/certificates/ocsp/${encodeURIComponent(String(caAlias))}/${encodeURIComponent(String(ocspRequest))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  postOCSP(body, caAlias, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling postOCSP.');
    }
    if (caAlias === null || caAlias === undefined) {
      throw new Error('Required parameter caAlias was null or undefined when calling postOCSP.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/ocsp-response'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/ocsp-request'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/certificates/ocsp/${encodeURIComponent(String(caAlias))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function CertificateControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CertificateControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: CertificateControllerService,
    factory: CertificateControllerService.ɵfac
  });
}

/***/ }),

/***/ 60675:
/*!*******************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/deviceController.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceControllerService: () => (/* binding */ DeviceControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 66117);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 82300);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 21167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17858);







class DeviceControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createDevice(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createDevice.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createDevice.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteDevice(orgMrn, deviceMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteDevice.');
    }
    if (deviceMrn === null || deviceMrn === undefined) {
      throw new Error('Required parameter deviceMrn was null or undefined when calling deleteDevice.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device/${encodeURIComponent(String(deviceMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getDevice(orgMrn, deviceMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getDevice.');
    }
    if (deviceMrn === null || deviceMrn === undefined) {
      throw new Error('Required parameter deviceMrn was null or undefined when calling getDevice.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device/${encodeURIComponent(String(deviceMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getDeviceCert(orgMrn, deviceMrn, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getDeviceCert.');
    }
    if (deviceMrn === null || deviceMrn === undefined) {
      throw new Error('Required parameter deviceMrn was null or undefined when calling getDeviceCert.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getDeviceCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device/${encodeURIComponent(String(deviceMrn))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganizationDevices(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationDevices.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/devices`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newDeviceCertFromCsr(body, orgMrn, deviceMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newDeviceCertFromCsr.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newDeviceCertFromCsr.');
    }
    if (deviceMrn === null || deviceMrn === undefined) {
      throw new Error('Required parameter deviceMrn was null or undefined when calling newDeviceCertFromCsr.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device/${encodeURIComponent(String(deviceMrn))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeDeviceCert(body, orgMrn, deviceMrn, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeDeviceCert.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeDeviceCert.');
    }
    if (deviceMrn === null || deviceMrn === undefined) {
      throw new Error('Required parameter deviceMrn was null or undefined when calling revokeDeviceCert.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeDeviceCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device/${encodeURIComponent(String(deviceMrn))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateDevice(body, orgMrn, deviceMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateDevice.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateDevice.');
    }
    if (deviceMrn === null || deviceMrn === undefined) {
      throw new Error('Required parameter deviceMrn was null or undefined when calling updateDevice.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/device/${encodeURIComponent(String(deviceMrn))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function DeviceControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DeviceControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: DeviceControllerService,
    factory: DeviceControllerService.ɵfac
  });
}

/***/ }),

/***/ 37090:
/*!*****************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/logoController.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoControllerService: () => (/* binding */ LogoControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ 82300);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ 21167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17858);






class LogoControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createLogoPost(orgMrn, body, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createLogoPost.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['image/png', 'image/jpeg'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/logo`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteLogo(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteLogo.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/logo`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getLogo(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getLogo.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['image/png', 'application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/logo`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateLogoPut(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateLogoPut.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateLogoPut.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['image/png', 'image/jpeg'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/logo`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function LogoControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LogoControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: LogoControllerService,
    factory: LogoControllerService.ɵfac
  });
}

/***/ }),

/***/ 87064:
/*!****************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/mmsController.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MmsControllerService: () => (/* binding */ MmsControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 66117);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 82300);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 21167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17858);







class MmsControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createMMS(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createMMS.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createMMS.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteMMS(orgMrn, mmsMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteMMS.');
    }
    if (mmsMrn === null || mmsMrn === undefined) {
      throw new Error('Required parameter mmsMrn was null or undefined when calling deleteMMS.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms/${encodeURIComponent(String(mmsMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getMMS(orgMrn, mmsMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getMMS.');
    }
    if (mmsMrn === null || mmsMrn === undefined) {
      throw new Error('Required parameter mmsMrn was null or undefined when calling getMMS.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms/${encodeURIComponent(String(mmsMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getMMSCert(orgMrn, mmsMrn, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getMMSCert.');
    }
    if (mmsMrn === null || mmsMrn === undefined) {
      throw new Error('Required parameter mmsMrn was null or undefined when calling getMMSCert.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getMMSCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms/${encodeURIComponent(String(mmsMrn))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganizationMMSes(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationMMSes.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mmses`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newMMSCertFromCsr(body, orgMrn, mmsMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newMMSCertFromCsr.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newMMSCertFromCsr.');
    }
    if (mmsMrn === null || mmsMrn === undefined) {
      throw new Error('Required parameter mmsMrn was null or undefined when calling newMMSCertFromCsr.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms/${encodeURIComponent(String(mmsMrn))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeMMSCert(body, orgMrn, mmsMrn, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeMMSCert.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeMMSCert.');
    }
    if (mmsMrn === null || mmsMrn === undefined) {
      throw new Error('Required parameter mmsMrn was null or undefined when calling revokeMMSCert.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeMMSCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms/${encodeURIComponent(String(mmsMrn))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateMMS(body, orgMrn, mmsMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateMMS.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateMMS.');
    }
    if (mmsMrn === null || mmsMrn === undefined) {
      throw new Error('Required parameter mmsMrn was null or undefined when calling updateMMS.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/mms/${encodeURIComponent(String(mmsMrn))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function MmsControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || MmsControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: MmsControllerService,
    factory: MmsControllerService.ɵfac
  });
}

/***/ }),

/***/ 67202:
/*!*************************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/organizationController.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationControllerService: () => (/* binding */ OrganizationControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 66117);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 82300);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 21167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17858);







class OrganizationControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  applyOrganization(body, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling applyOrganization.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/apply`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  approveOrganization(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling approveOrganization.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/approve`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteOrg(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteOrg.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrgCert(orgMrn, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrgCert.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getOrgCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganization(page, size, sort, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/orgs`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganization1(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrganization1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganizationById(orgId, observe = 'body', reportProgress = false) {
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling getOrganizationById.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/id/${encodeURIComponent(String(orgId))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getUnapprovedOrganizations(page, size, sort, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/unapprovedorgs`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newOrgCertFromCsr(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newOrgCertFromCsr.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newOrgCertFromCsr.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeOrgCert(body, orgMrn, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeOrgCert.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeOrgCert.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeOrgCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateOrganization(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateOrganization.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateOrganization.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function OrganizationControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || OrganizationControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: OrganizationControllerService,
    factory: OrganizationControllerService.ɵfac
  });
}

/***/ }),

/***/ 18357:
/*!*****************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/roleController.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleControllerService: () => (/* binding */ RoleControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ 82300);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ 21167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17858);






class RoleControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createRole(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createRole.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createRole.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteRole(orgMrn, roleId, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteRole.');
    }
    if (roleId === null || roleId === undefined) {
      throw new Error('Required parameter roleId was null or undefined when calling deleteRole.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/${encodeURIComponent(String(roleId))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getAvailableRoles(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getAvailableRoles.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/available-roles`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getMyRole(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getMyRole.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/myroles`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getRole(orgMrn, roleId, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getRole.');
    }
    if (roleId === null || roleId === undefined) {
      throw new Error('Required parameter roleId was null or undefined when calling getRole.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/${encodeURIComponent(String(roleId))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getRoles(orgMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getRoles.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/roles`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateRole(body, orgMrn, roleId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateRole.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateRole.');
    }
    if (roleId === null || roleId === undefined) {
      throw new Error('Required parameter roleId was null or undefined when calling updateRole.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/role/${encodeURIComponent(String(roleId))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function RoleControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RoleControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: RoleControllerService,
    factory: RoleControllerService.ɵfac
  });
}

/***/ }),

/***/ 58496:
/*!********************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/serviceController.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceControllerService: () => (/* binding */ ServiceControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 66117);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 82300);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 21167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17858);







class ServiceControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createService(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createService.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createService.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteService(orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteService.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling deleteService.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling deleteService.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteService1(orgMrn, serviceMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteService1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling deleteService1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganizationServices(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationServices.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/services`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getService(orgMrn, serviceMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getService.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getService.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceCert(orgMrn, serviceMrn, version, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceCert.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceCert.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling getServiceCert.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getServiceCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceCert1(orgMrn, serviceMrn, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceCert1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceCert1.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getServiceCert1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceJbossXml(orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceJbossXml.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceJbossXml.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling getServiceJbossXml.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/jbossxml`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceJbossXml1(orgMrn, serviceMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceJbossXml1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceJbossXml1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/jbossxml`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceKeycloakJson(orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceKeycloakJson.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceKeycloakJson.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling getServiceKeycloakJson.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/keycloakjson`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceKeycloakJson1(orgMrn, serviceMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceKeycloakJson1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceKeycloakJson1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/keycloakjson`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServiceVersion(orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServiceVersion.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServiceVersion.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling getServiceVersion.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getServices(orgMrn, serviceMrn, pageable, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getServices.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling getServices.');
    }
    if (pageable === null || pageable === undefined) {
      throw new Error('Required parameter pageable was null or undefined when calling getServices.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (pageable !== undefined && pageable !== null) {
      queryParameters = queryParameters.set('pageable', pageable);
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/services/${encodeURIComponent(String(serviceMrn))}`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  migrateServiceMrn(body, orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling migrateServiceMrn.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling migrateServiceMrn.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling migrateServiceMrn.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling migrateServiceMrn.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('patch', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/migrate`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newServiceCertFromCsr(body, orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newServiceCertFromCsr.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newServiceCertFromCsr.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling newServiceCertFromCsr.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling newServiceCertFromCsr.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newServiceCertFromCsr1(body, orgMrn, serviceMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newServiceCertFromCsr1.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newServiceCertFromCsr1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling newServiceCertFromCsr1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeServiceCert(body, orgMrn, serviceMrn, version, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeServiceCert.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeServiceCert.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling revokeServiceCert.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling revokeServiceCert.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeServiceCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeServiceCert1(body, orgMrn, serviceMrn, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeServiceCert1.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeServiceCert1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling revokeServiceCert1.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeServiceCert1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateService(body, orgMrn, serviceMrn, version, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateService.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateService.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling updateService.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling updateService.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}/${encodeURIComponent(String(version))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateService1(body, orgMrn, serviceMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateService1.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateService1.');
    }
    if (serviceMrn === null || serviceMrn === undefined) {
      throw new Error('Required parameter serviceMrn was null or undefined when calling updateService1.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/service/${encodeURIComponent(String(serviceMrn))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function ServiceControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ServiceControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ServiceControllerService,
    factory: ServiceControllerService.ɵfac
  });
}

/***/ }),

/***/ 34618:
/*!*****************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/userController.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserControllerService: () => (/* binding */ UserControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 66117);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 82300);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 21167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17858);







class UserControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createUser(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createUser.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createUser.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteUser(orgMrn, userMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteUser.');
    }
    if (userMrn === null || userMrn === undefined) {
      throw new Error('Required parameter userMrn was null or undefined when calling deleteUser.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user/${encodeURIComponent(String(userMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganizationUsers(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationUsers.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/users`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getUser(orgMrn, userMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getUser.');
    }
    if (userMrn === null || userMrn === undefined) {
      throw new Error('Required parameter userMrn was null or undefined when calling getUser.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user/${encodeURIComponent(String(userMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getUserCert(orgMrn, userMrn, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getUserCert.');
    }
    if (userMrn === null || userMrn === undefined) {
      throw new Error('Required parameter userMrn was null or undefined when calling getUserCert.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getUserCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user/${encodeURIComponent(String(userMrn))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newUserCertFromCsr(body, orgMrn, userMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newUserCertFromCsr.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newUserCertFromCsr.');
    }
    if (userMrn === null || userMrn === undefined) {
      throw new Error('Required parameter userMrn was null or undefined when calling newUserCertFromCsr.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user/${encodeURIComponent(String(userMrn))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeUserCert(body, orgMrn, userMrn, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeUserCert.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeUserCert.');
    }
    if (userMrn === null || userMrn === undefined) {
      throw new Error('Required parameter userMrn was null or undefined when calling revokeUserCert.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeUserCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user/${encodeURIComponent(String(userMrn))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateUser(body, orgMrn, userMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateUser.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateUser.');
    }
    if (userMrn === null || userMrn === undefined) {
      throw new Error('Required parameter userMrn was null or undefined when calling updateUser.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/user/${encodeURIComponent(String(userMrn))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function UserControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UserControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: UserControllerService,
    factory: UserControllerService.ɵfac
  });
}

/***/ }),

/***/ 47499:
/*!*******************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/vesselController.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VesselControllerService: () => (/* binding */ VesselControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 66117);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 82300);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 21167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17858);







class VesselControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createVessel(body, orgMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createVessel.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createVessel.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteVessel(orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteVessel.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling deleteVessel.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getOrganizationVessels(orgMrn, page, size, sort, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getOrganizationVessels.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessels`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getVessel(orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getVessel.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling getVessel.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getVesselCert(orgMrn, vesselMrn, serialNumber, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getVesselCert.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling getVesselCert.');
    }
    if (serialNumber === null || serialNumber === undefined) {
      throw new Error('Required parameter serialNumber was null or undefined when calling getVesselCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/certificate/${encodeURIComponent(String(serialNumber))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getVesselServices(orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getVesselServices.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling getVesselServices.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/services`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  newVesselCertFromCsr(body, orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling newVesselCertFromCsr.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling newVesselCertFromCsr.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling newVesselCertFromCsr.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json', 'application/pem-certificate-chain'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/x-pem-file', 'text/plain'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/certificate/issue-new/csr`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  revokeVesselCert(body, orgMrn, vesselMrn, certId, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling revokeVesselCert.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling revokeVesselCert.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling revokeVesselCert.');
    }
    if (certId === null || certId === undefined) {
      throw new Error('Required parameter certId was null or undefined when calling revokeVesselCert.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/certificate/${encodeURIComponent(String(certId))}/revoke`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateVessel(body, orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateVessel.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateVessel.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling updateVessel.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function VesselControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || VesselControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: VesselControllerService,
    factory: VesselControllerService.ɵfac
  });
}

/***/ }),

/***/ 40244:
/*!************************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/api/vesselImageController.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VesselImageControllerService: () => (/* binding */ VesselImageControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ 82300);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ 21167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17858);






class VesselImageControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'https://test-api.maritimeconnectivity.net';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createVesselImagePost(orgMrn, vesselMrn, body, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling createVesselImagePost.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling createVesselImagePost.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['image/png', 'image/jpeg'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/vesselImage`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteVesselImage(orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling deleteVesselImage.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling deleteVesselImage.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/vesselImage`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getVesselImage(orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling getVesselImage.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling getVesselImage.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['image/png', 'application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/vesselImage`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateVesselImagePut(body, orgMrn, vesselMrn, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateVesselImagePut.');
    }
    if (orgMrn === null || orgMrn === undefined) {
      throw new Error('Required parameter orgMrn was null or undefined when calling updateVesselImagePut.');
    }
    if (vesselMrn === null || vesselMrn === undefined) {
      throw new Error('Required parameter vesselMrn was null or undefined when calling updateVesselImagePut.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['*/*'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['image/png', 'image/jpeg'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/oidc/api/org/${encodeURIComponent(String(orgMrn))}/vessel/${encodeURIComponent(String(vesselMrn))}/vesselImage`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function VesselImageControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || VesselImageControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: VesselImageControllerService,
    factory: VesselImageControllerService.ɵfac
  });
}

/***/ }),

/***/ 21167:
/*!****************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/configuration.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Configuration: () => (/* binding */ Configuration)
/* harmony export */ });
class Configuration {
  constructor(configurationParameters = {}) {
    this.apiKeys = configurationParameters.apiKeys;
    this.username = configurationParameters.username;
    this.password = configurationParameters.password;
    this.accessToken = configurationParameters.accessToken;
    this.basePath = configurationParameters.basePath;
    this.withCredentials = configurationParameters.withCredentials;
  }
  /**
   * Select the correct content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param contentTypes - the array of content types that are available for selection
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderContentType(contentTypes) {
    if (contentTypes.length == 0) {
      return undefined;
    }
    let type = contentTypes.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return contentTypes[0];
    }
    return type;
  }
  /**
   * Select the correct accept content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param accepts - the array of content types that are available for selection.
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderAccept(accepts) {
    if (accepts.length == 0) {
      return undefined;
    }
    let type = accepts.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return accepts[0];
    }
    return type;
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
    return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
  }
}

/***/ }),

/***/ 66117:
/*!**********************************************************!*\
  !*** ./src/app/backend-api/identity-registry/encoder.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomHttpUrlEncodingCodec: () => (/* binding */ CustomHttpUrlEncodingCodec)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 68947);

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpUrlEncodingCodec {
  encodeKey(k) {
    k = super.encodeKey(k);
    return k.replace(/\+/gi, '%2B');
  }
  encodeValue(v) {
    v = super.encodeValue(v);
    return v.replace(/\+/gi, '%2B');
  }
}

/***/ }),

/***/ 68937:
/*!********************************************************!*\
  !*** ./src/app/backend-api/identity-registry/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIS: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.APIS),
/* harmony export */   AgentControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.AgentControllerService),
/* harmony export */   AllowedAgentRole: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.AllowedAgentRole),
/* harmony export */   ApiModule: () => (/* reexport safe */ _api_module__WEBPACK_IMPORTED_MODULE_4__.ApiModule),
/* harmony export */   BASE_PATH: () => (/* reexport safe */ _variables__WEBPACK_IMPORTED_MODULE_2__.BASE_PATH),
/* harmony export */   COLLECTION_FORMATS: () => (/* reexport safe */ _variables__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_FORMATS),
/* harmony export */   CertificateControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.CertificateControllerService),
/* harmony export */   CertificateRevocation: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.CertificateRevocation),
/* harmony export */   Configuration: () => (/* reexport safe */ _configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration),
/* harmony export */   DeviceControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.DeviceControllerService),
/* harmony export */   IdentityProviderAttribute: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.IdentityProviderAttribute),
/* harmony export */   LogoControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.LogoControllerService),
/* harmony export */   MmsControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.MmsControllerService),
/* harmony export */   Organization: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.Organization),
/* harmony export */   OrganizationControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.OrganizationControllerService),
/* harmony export */   Role: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.Role),
/* harmony export */   RoleControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.RoleControllerService),
/* harmony export */   Service: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.Service),
/* harmony export */   ServiceControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.ServiceControllerService),
/* harmony export */   UserControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.UserControllerService),
/* harmony export */   VesselAttribute: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.VesselAttribute),
/* harmony export */   VesselControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.VesselControllerService),
/* harmony export */   VesselImageControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.VesselImageControllerService)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ 69970);
/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ 94517);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ 82300);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ 21167);
/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ 96099);






/***/ }),

/***/ 70590:
/*!**************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/agent.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 24470:
/*!*************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/allowedAgentRole.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllowedAgentRole: () => (/* binding */ AllowedAgentRole)
/* harmony export */ });
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var AllowedAgentRole;
(function (AllowedAgentRole) {
  AllowedAgentRole.RoleNameEnum = {
    ORGADMIN: 'ROLE_ORG_ADMIN',
    ENTITYADMIN: 'ROLE_ENTITY_ADMIN',
    USERADMIN: 'ROLE_USER_ADMIN',
    VESSELADMIN: 'ROLE_VESSEL_ADMIN',
    SERVICEADMIN: 'ROLE_SERVICE_ADMIN',
    DEVICEADMIN: 'ROLE_DEVICE_ADMIN',
    MMSADMIN: 'ROLE_MMS_ADMIN',
    USER: 'ROLE_USER'
  };
})(AllowedAgentRole || (AllowedAgentRole = {}));

/***/ }),

/***/ 77540:
/*!********************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/certificate.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 56024:
/*!******************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/certificateRevocation.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CertificateRevocation: () => (/* binding */ CertificateRevocation)
/* harmony export */ });
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var CertificateRevocation;
(function (CertificateRevocation) {
  CertificateRevocation.RevocationReasonEnum = {
    Unspecified: 'unspecified',
    Keycompromise: 'keycompromise',
    Cacompromise: 'cacompromise',
    Affiliationchanged: 'affiliationchanged',
    Superseded: 'superseded',
    Cessationofoperation: 'cessationofoperation',
    Certificatehold: 'certificatehold',
    Removefromcrl: 'removefromcrl',
    Privilegewithdrawn: 'privilegewithdrawn',
    Aacompromise: 'aacompromise'
  };
})(CertificateRevocation || (CertificateRevocation = {}));

/***/ }),

/***/ 22645:
/*!***************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/device.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 44790:
/*!**********************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/identityProviderAttribute.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IdentityProviderAttribute: () => (/* binding */ IdentityProviderAttribute)
/* harmony export */ });
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var IdentityProviderAttribute;
(function (IdentityProviderAttribute) {
  IdentityProviderAttribute.AttributeNameEnum = {
    ImportUrlValidateSignatureSigningCertificateSingleLogoutServiceUrlPostBindingResponsePostBindingAuthnRequestSingleSignOnServiceUrlWantAuthnRequestsSignedUserInfoUrlTokenUrlAuthorizationUrlLogoutUrlIssuerPublicKeySignatureVerifierClientIdClientSecretproviderTypeFirstNameAttrLastNameAttrEmailAttrUsernameAttrPermissionsAttr: 'importUrl, validateSignature, signingCertificate, singleLogoutServiceUrl, postBindingResponse, postBindingAuthnRequest, singleSignOnServiceUrl, wantAuthnRequestsSigned, userInfoUrl, tokenUrl, authorizationUrl, logoutUrl, issuer, publicKeySignatureVerifier, clientId, clientSecret,providerType, firstNameAttr, lastNameAttr, emailAttr, usernameAttr, permissionsAttr'
  };
})(IdentityProviderAttribute || (IdentityProviderAttribute = {}));

/***/ }),

/***/ 46240:
/*!************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/mMS.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 94517:
/*!***************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/models.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllowedAgentRole: () => (/* reexport safe */ _allowedAgentRole__WEBPACK_IMPORTED_MODULE_1__.AllowedAgentRole),
/* harmony export */   CertificateRevocation: () => (/* reexport safe */ _certificateRevocation__WEBPACK_IMPORTED_MODULE_3__.CertificateRevocation),
/* harmony export */   IdentityProviderAttribute: () => (/* reexport safe */ _identityProviderAttribute__WEBPACK_IMPORTED_MODULE_5__.IdentityProviderAttribute),
/* harmony export */   Organization: () => (/* reexport safe */ _organization__WEBPACK_IMPORTED_MODULE_9__.Organization),
/* harmony export */   Role: () => (/* reexport safe */ _role__WEBPACK_IMPORTED_MODULE_19__.Role),
/* harmony export */   Service: () => (/* reexport safe */ _service__WEBPACK_IMPORTED_MODULE_20__.Service),
/* harmony export */   VesselAttribute: () => (/* reexport safe */ _vesselAttribute__WEBPACK_IMPORTED_MODULE_25__.VesselAttribute)
/* harmony export */ });
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agent */ 70590);
/* harmony import */ var _allowedAgentRole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allowedAgentRole */ 24470);
/* harmony import */ var _certificate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./certificate */ 77540);
/* harmony import */ var _certificateRevocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./certificateRevocation */ 56024);
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device */ 22645);
/* harmony import */ var _identityProviderAttribute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identityProviderAttribute */ 44790);
/* harmony import */ var _mMS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mMS */ 46240);
/* harmony import */ var _orgMrnLogoBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./orgMrnLogoBody */ 59433);
/* harmony import */ var _orgMrnLogoBody1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orgMrnLogoBody1 */ 7394);
/* harmony import */ var _organization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./organization */ 8156);
/* harmony import */ var _pageAgent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pageAgent */ 18459);
/* harmony import */ var _pageDevice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pageDevice */ 82734);
/* harmony import */ var _pageMMS__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pageMMS */ 73265);
/* harmony import */ var _pageOrganization__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pageOrganization */ 59367);
/* harmony import */ var _pageService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pageService */ 94873);
/* harmony import */ var _pageUser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pageUser */ 52447);
/* harmony import */ var _pageVessel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pageVessel */ 13702);
/* harmony import */ var _pageable__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pageable */ 74368);
/* harmony import */ var _pageableObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pageableObject */ 84351);
/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./role */ 30747);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service */ 96048);
/* harmony import */ var _servicePatch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./servicePatch */ 53700);
/* harmony import */ var _sortObject__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sortObject */ 73408);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user */ 56620);
/* harmony import */ var _vessel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./vessel */ 16321);
/* harmony import */ var _vesselAttribute__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./vesselAttribute */ 16833);
/* harmony import */ var _vesselMrnVesselImageBody__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./vesselMrnVesselImageBody */ 41127);
/* harmony import */ var _vesselMrnVesselImageBody1__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./vesselMrnVesselImageBody1 */ 87524);





























/***/ }),

/***/ 59433:
/*!***********************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/orgMrnLogoBody.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 7394:
/*!************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/orgMrnLogoBody1.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 8156:
/*!*********************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/organization.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Organization: () => (/* binding */ Organization)
/* harmony export */ });
var Organization;
(function (Organization) {
  Organization.FederationTypeEnum = {
    TestIdp: 'test-idp',
    OwnIdp: 'own-idp',
    ExternalIdp: 'external-idp'
  };
})(Organization || (Organization = {}));

/***/ }),

/***/ 18459:
/*!******************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageAgent.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 82734:
/*!*******************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageDevice.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 73265:
/*!****************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageMMS.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 59367:
/*!*************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageOrganization.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 94873:
/*!********************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageService.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 52447:
/*!*****************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageUser.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 13702:
/*!*******************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageVessel.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 74368:
/*!*****************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageable.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 84351:
/*!***********************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/pageableObject.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 30747:
/*!*************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/role.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Role: () => (/* binding */ Role)
/* harmony export */ });
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var Role;
(function (Role) {
  let RoleNameEnum;
  (function (RoleNameEnum) {
    RoleNameEnum["SITEADMIN"] = "ROLE_SITE_ADMIN";
    RoleNameEnum["ORGADMIN"] = "ROLE_ORG_ADMIN";
    RoleNameEnum["USER"] = "ROLE_USER";
    RoleNameEnum["ENTITYADMIN"] = "ROLE_ENTITY_ADMIN";
    RoleNameEnum["USERADMIN"] = "ROLE_USER_ADMIN";
    RoleNameEnum["VESSELADMIN"] = "ROLE_VESSEL_ADMIN";
    RoleNameEnum["SERVICEADMIN"] = "ROLE_SERVICE_ADMIN";
    RoleNameEnum["APPROVEORG"] = "ROLE_APPROVE_ORG";
    RoleNameEnum["DEVICEADMIN"] = "ROLE_DEVICE_ADMIN";
    RoleNameEnum["MMSADMIN"] = "ROLE_MMS_ADMIN";
  })(RoleNameEnum = Role.RoleNameEnum || (Role.RoleNameEnum = {}));
  ;
})(Role || (Role = {}));

/***/ }),

/***/ 96048:
/*!****************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Service: () => (/* binding */ Service)
/* harmony export */ });
var Service;
(function (Service) {
  Service.OidcAccessTypeEnum = {
    PublicBearerOnlyConfidential: 'public, bearer-only, confidential'
  };
})(Service || (Service = {}));

/***/ }),

/***/ 53700:
/*!*********************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/servicePatch.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 73408:
/*!*******************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/sortObject.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 56620:
/*!*************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/user.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 16321:
/*!***************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/vessel.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 16833:
/*!************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/vesselAttribute.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VesselAttribute: () => (/* binding */ VesselAttribute)
/* harmony export */ });
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var VesselAttribute;
(function (VesselAttribute) {
  VesselAttribute.AttributeNameEnum = {
    ImoNumber: 'imo-number',
    MmsiNumber: 'mmsi-number',
    Callsign: 'callsign',
    Flagstate: 'flagstate',
    AisClass: 'ais-class',
    PortOfRegister: 'port-of-register'
  };
})(VesselAttribute || (VesselAttribute = {}));

/***/ }),

/***/ 41127:
/*!*********************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/vesselMrnVesselImageBody.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 87524:
/*!**********************************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/model/vesselMrnVesselImageBody1.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Identity Registry API
 * The MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.<br>Two versions of the API are available - one that requires authentication using OpenID Connect and one that requires authentication using a X.509 client certificate.<br>The OpenAPI descriptions for the two versions are available <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-oidc\">here</a> and <a href=\"https://test-api-x509.maritimeconnectivity.net/v3/api-docs/mcp-idreg-x509\">here</a>.<br>Additionally, a SECOM based API is also available for which the OpenAPI description can be found <a href=\"https://test-api.maritimeconnectivity.net/v3/api-docs/mcp-idreg-secom\">here</a>.
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@maritimeconnectivity.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 82300:
/*!************************************************************!*\
  !*** ./src/app/backend-api/identity-registry/variables.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_PATH: () => (/* binding */ BASE_PATH),
/* harmony export */   COLLECTION_FORMATS: () => (/* binding */ COLLECTION_FORMATS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17858);

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('basePath');
const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
};

/***/ }),

/***/ 1086:
/*!*************************************************!*\
  !*** ./src/app/backend-api/secom/api.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiModule: () => (/* binding */ ApiModule)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 84144);
/* harmony import */ var _api_ping_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/ping.service */ 12616);
/* harmony import */ var _api_sECOM_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/sECOM.service */ 7901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17858);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 68947);





class ApiModule {
  static forRoot(configurationFactory) {
    return {
      ngModule: ApiModule,
      providers: [{
        provide: _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration,
        useFactory: configurationFactory
      }]
    };
  }
  constructor(parentModule, http) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
    }
  }
  static #_ = this.ɵfac = function ApiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient, 8));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: ApiModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    providers: [_api_ping_service__WEBPACK_IMPORTED_MODULE_1__.PingService, _api_sECOM_service__WEBPACK_IMPORTED_MODULE_2__.SECOMService]
  });
}

/***/ }),

/***/ 89977:
/*!**********************************************!*\
  !*** ./src/app/backend-api/secom/api/api.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIS: () => (/* binding */ APIS),
/* harmony export */   PingService: () => (/* reexport safe */ _ping_service__WEBPACK_IMPORTED_MODULE_0__.PingService),
/* harmony export */   SECOMService: () => (/* reexport safe */ _sECOM_service__WEBPACK_IMPORTED_MODULE_1__.SECOMService)
/* harmony export */ });
/* harmony import */ var _ping_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ping.service */ 12616);
/* harmony import */ var _sECOM_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sECOM.service */ 7901);




const APIS = [_ping_service__WEBPACK_IMPORTED_MODULE_0__.PingService, _sECOM_service__WEBPACK_IMPORTED_MODULE_1__.SECOMService];

/***/ }),

/***/ 12616:
/*!*******************************************************!*\
  !*** ./src/app/backend-api/secom/api/ping.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PingService: () => (/* binding */ PingService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../variables */ 53515);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration */ 84144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17858);






class PingService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = '/';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  v2PingGet(observe = 'body', reportProgress = false) {
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/secom/v2/ping`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function PingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_0__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: PingService,
    factory: PingService.ɵfac
  });
}

/***/ }),

/***/ 7901:
/*!********************************************************!*\
  !*** ./src/app/backend-api/secom/api/sECOM.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SECOMService: () => (/* binding */ SECOMService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 30710);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 53515);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 84144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17858);







class SECOMService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = '';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  v2RetrieveResultsTransactionIdGet(transactionId, observe = 'body', reportProgress = false) {
    if (transactionId === null || transactionId === undefined) {
      throw new Error('Required parameter transactionId was null or undefined when calling v2RetrieveResultsTransactionIdGet.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/secom/v2/retrieveResults/${encodeURIComponent(String(transactionId))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  v2SearchServiceGet(name, status, version, keywords, description, specificationId, designId, instanceId, organisationId, mmsi, imo, serviceType, unlocode, endpointUri, dataProductType, localOnly, geometry, includeXml, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (name !== undefined && name !== null) {
      queryParameters = queryParameters.set('name', name);
    }
    if (status !== undefined && status !== null) {
      queryParameters = queryParameters.set('status', status);
    }
    if (version !== undefined && version !== null) {
      queryParameters = queryParameters.set('version', version);
    }
    if (keywords) {
      keywords.forEach(element => {
        queryParameters = queryParameters.append('keywords', element);
      });
    }
    if (description !== undefined && description !== null) {
      queryParameters = queryParameters.set('description', description);
    }
    if (specificationId !== undefined && specificationId !== null) {
      queryParameters = queryParameters.set('specificationId', specificationId);
    }
    if (designId !== undefined && designId !== null) {
      queryParameters = queryParameters.set('designId', designId);
    }
    if (instanceId !== undefined && instanceId !== null) {
      queryParameters = queryParameters.set('instanceId', instanceId);
    }
    if (organisationId !== undefined && organisationId !== null) {
      queryParameters = queryParameters.set('organisationId', organisationId);
    }
    if (mmsi !== undefined && mmsi !== null) {
      queryParameters = queryParameters.set('mmsi', mmsi);
    }
    if (imo !== undefined && imo !== null) {
      queryParameters = queryParameters.set('imo', imo);
    }
    if (serviceType !== undefined && serviceType !== null) {
      queryParameters = queryParameters.set('serviceType', serviceType);
    }
    if (unlocode !== undefined && unlocode !== null) {
      queryParameters = queryParameters.set('unlocode', unlocode);
    }
    if (endpointUri !== undefined && endpointUri !== null) {
      queryParameters = queryParameters.set('endpointUri', endpointUri);
    }
    if (dataProductType !== undefined && dataProductType !== null) {
      queryParameters = queryParameters.set('dataProductType', dataProductType);
    }
    if (localOnly !== undefined && localOnly !== null) {
      queryParameters = queryParameters.set('localOnly', localOnly);
    }
    if (geometry !== undefined && geometry !== null) {
      queryParameters = queryParameters.set('geometry', geometry);
    }
    if (includeXml !== undefined && includeXml !== null) {
      queryParameters = queryParameters.set('includeXml', includeXml);
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/secom/v2/searchService`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  search(body, observe = 'body', reportProgress = false) {
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    console.log('Base path is:', this.basePath);
    return this.httpClient.request('post', `${this.basePath}/api/secom/v2/searchService`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  v2UpdateServiceInstanceIdPut(instanceId, body, observe = 'body', reportProgress = false) {
    if (instanceId === null || instanceId === undefined) {
      throw new Error('Required parameter instanceId was null or undefined when calling v2UpdateServiceInstanceIdPut.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/v2/updateService/${encodeURIComponent(String(instanceId))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  v2UploadResultsTransactionIdPost(transactionId, body, observe = 'body', reportProgress = false) {
    if (transactionId === null || transactionId === undefined) {
      throw new Error('Required parameter transactionId was null or undefined when calling v2UploadResultsTransactionIdPost.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/v2/uploadResults/${encodeURIComponent(String(transactionId))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function SECOMService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SECOMService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: SECOMService,
    factory: SECOMService.ɵfac
  });
}

/***/ }),

/***/ 84144:
/*!****************************************************!*\
  !*** ./src/app/backend-api/secom/configuration.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Configuration: () => (/* binding */ Configuration)
/* harmony export */ });
class Configuration {
  constructor(configurationParameters = {}) {
    this.apiKeys = configurationParameters.apiKeys;
    this.username = configurationParameters.username;
    this.password = configurationParameters.password;
    this.accessToken = configurationParameters.accessToken;
    this.basePath = configurationParameters.basePath;
    this.withCredentials = configurationParameters.withCredentials;
  }
  /**
   * Select the correct content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param contentTypes - the array of content types that are available for selection
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderContentType(contentTypes) {
    if (contentTypes.length == 0) {
      return undefined;
    }
    let type = contentTypes.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return contentTypes[0];
    }
    return type;
  }
  /**
   * Select the correct accept content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param accepts - the array of content types that are available for selection.
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderAccept(accepts) {
    if (accepts.length == 0) {
      return undefined;
    }
    let type = accepts.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return accepts[0];
    }
    return type;
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
    return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
  }
}

/***/ }),

/***/ 30710:
/*!**********************************************!*\
  !*** ./src/app/backend-api/secom/encoder.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomHttpUrlEncodingCodec: () => (/* binding */ CustomHttpUrlEncodingCodec)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 68947);

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpUrlEncodingCodec {
  encodeKey(k) {
    k = super.encodeKey(k);
    return k.replace(/\+/gi, '%2B');
  }
  encodeValue(v) {
    v = super.encodeValue(v);
    return v.replace(/\+/gi, '%2B');
  }
}

/***/ }),

/***/ 77410:
/*!********************************************!*\
  !*** ./src/app/backend-api/secom/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIS: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.APIS),
/* harmony export */   ApiModule: () => (/* reexport safe */ _api_module__WEBPACK_IMPORTED_MODULE_4__.ApiModule),
/* harmony export */   BASE_PATH: () => (/* reexport safe */ _variables__WEBPACK_IMPORTED_MODULE_2__.BASE_PATH),
/* harmony export */   COLLECTION_FORMATS: () => (/* reexport safe */ _variables__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_FORMATS),
/* harmony export */   Configuration: () => (/* reexport safe */ _configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration),
/* harmony export */   PingService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.PingService),
/* harmony export */   SECOMService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.SECOMService),
/* harmony export */   SecomDataProductTypeEnum: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.SecomDataProductTypeEnum)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ 89977);
/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ 50676);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ 53515);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ 84144);
/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ 1086);






/***/ }),

/***/ 25674:
/*!************************************************!*\
  !*** ./src/app/backend-api/secom/model/crs.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 51573:
/*!******************************************************************!*\
  !*** ./src/app/backend-api/secom/model/defaultResponseObject.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// @ts-ignore
/**
 * MSR Interface definitions
 * Compliant with IEC 63173-2:2025 SECOM version 2
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 24160:
/*!**************************************************************!*\
  !*** ./src/app/backend-api/secom/model/inlineResponse200.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * MSR Interface definitions
 * Compliant with IEC 63173-2:2025 SECOM version 2
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 50676:
/*!***************************************************!*\
  !*** ./src/app/backend-api/secom/model/models.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecomDataProductTypeEnum: () => (/* reexport safe */ _secomDataProductTypeEnum__WEBPACK_IMPORTED_MODULE_10__.SecomDataProductTypeEnum)
/* harmony export */ });
/* harmony import */ var _crs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crs */ 25674);
/* harmony import */ var _defaultResponseObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultResponseObject */ 51573);
/* harmony import */ var _inlineResponse200__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inlineResponse200 */ 24160);
/* harmony import */ var _organization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization */ 51153);
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties */ 35423);
/* harmony import */ var _searchFilterObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchFilterObject */ 19823);
/* harmony import */ var _searchMessageObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchMessageObject */ 17860);
/* harmony import */ var _searchObjectResult__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./searchObjectResult */ 35036);
/* harmony import */ var _searchParameters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searchParameters */ 48398);
/* harmony import */ var _searchResult__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./searchResult */ 7071);
/* harmony import */ var _secomDataProductTypeEnum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./secomDataProductTypeEnum */ 18847);
/* harmony import */ var _updateServiceObject__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./updateServiceObject */ 66819);













/***/ }),

/***/ 51153:
/*!*********************************************************!*\
  !*** ./src/app/backend-api/secom/model/organization.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * MSR Interface definitions
 * Compliant with IEC 63173-2:2025 SECOM version 2
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 35423:
/*!*******************************************************!*\
  !*** ./src/app/backend-api/secom/model/properties.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * MSR Interface definitions
 * Compliant with IEC 63173-2:2025 SECOM version 2
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 19823:
/*!***************************************************************!*\
  !*** ./src/app/backend-api/secom/model/searchFilterObject.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 17860:
/*!****************************************************************!*\
  !*** ./src/app/backend-api/secom/model/searchMessageObject.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 35036:
/*!***************************************************************!*\
  !*** ./src/app/backend-api/secom/model/searchObjectResult.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * MSR Interface definitions
 * Compliant with IEC 63173-2:2025 SECOM version 2
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 48398:
/*!*************************************************************!*\
  !*** ./src/app/backend-api/secom/model/searchParameters.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * MSR Interface definitions
 * Compliant with IEC 63173-2:2025 SECOM version 2
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 7071:
/*!*********************************************************!*\
  !*** ./src/app/backend-api/secom/model/searchResult.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 18847:
/*!*********************************************************************!*\
  !*** ./src/app/backend-api/secom/model/secomDataProductTypeEnum.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecomDataProductTypeEnum: () => (/* binding */ SecomDataProductTypeEnum)
/* harmony export */ });
/**
 * MSR Interface definitions
 * Compliant with IEC 63173-2:2025 SECOM version 2
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
const SecomDataProductTypeEnum = {
  S57: 'S57',
  S101: 'S101',
  S102: 'S102',
  S104: 'S104',
  S111: 'S111',
  S122: 'S122',
  S123: 'S123',
  S124: 'S124',
  S125: 'S125',
  S126: 'S126',
  S127: 'S127',
  S128: 'S128',
  S129: 'S129',
  S210: 'S210',
  S211: 'S211',
  S212: 'S212',
  S401: 'S401',
  S402: 'S402',
  S411: 'S411',
  S412: 'S412',
  S413: 'S413',
  S414: 'S414',
  S421: 'S421',
  RTZ: 'RTZ',
  EPC: 'EPC',
  OTHER: 'OTHER'
};

/***/ }),

/***/ 66819:
/*!****************************************************************!*\
  !*** ./src/app/backend-api/secom/model/updateServiceObject.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * MSR Interface definitions
 * Compliant with IEC 63173-2:2025 SECOM version 2
 *
 * OpenAPI spec version: v2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 53515:
/*!************************************************!*\
  !*** ./src/app/backend-api/secom/variables.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_PATH: () => (/* binding */ BASE_PATH),
/* harmony export */   COLLECTION_FORMATS: () => (/* binding */ COLLECTION_FORMATS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17858);

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('basePath');
const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
};

/***/ }),

/***/ 27180:
/*!************************************************************!*\
  !*** ./src/app/backend-api/service-registry/api.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiModule: () => (/* binding */ ApiModule)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 95154);
/* harmony import */ var _api_docController_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/docController.service */ 4300);
/* harmony import */ var _api_instanceController_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/instanceController.service */ 60077);
/* harmony import */ var _api_xmlController_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/xmlController.service */ 92379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17858);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 68947);






class ApiModule {
  static forRoot(configurationFactory) {
    return {
      ngModule: ApiModule,
      providers: [{
        provide: _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration,
        useFactory: configurationFactory
      }]
    };
  }
  constructor(parentModule, http) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
    }
  }
  static #_ = this.ɵfac = function ApiModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient, 8));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ApiModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [_api_docController_service__WEBPACK_IMPORTED_MODULE_1__.DocControllerService, _api_instanceController_service__WEBPACK_IMPORTED_MODULE_2__.InstanceControllerService, _api_xmlController_service__WEBPACK_IMPORTED_MODULE_3__.XmlControllerService]
  });
}

/***/ }),

/***/ 29383:
/*!*********************************************************!*\
  !*** ./src/app/backend-api/service-registry/api/api.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIS: () => (/* binding */ APIS),
/* harmony export */   DocControllerService: () => (/* reexport safe */ _docController_service__WEBPACK_IMPORTED_MODULE_0__.DocControllerService),
/* harmony export */   InstanceControllerService: () => (/* reexport safe */ _instanceController_service__WEBPACK_IMPORTED_MODULE_1__.InstanceControllerService),
/* harmony export */   XmlControllerService: () => (/* reexport safe */ _xmlController_service__WEBPACK_IMPORTED_MODULE_2__.XmlControllerService)
/* harmony export */ });
/* harmony import */ var _docController_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docController.service */ 4300);
/* harmony import */ var _instanceController_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instanceController.service */ 60077);
/* harmony import */ var _xmlController_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./xmlController.service */ 92379);






const APIS = [_docController_service__WEBPACK_IMPORTED_MODULE_0__.DocControllerService, _instanceController_service__WEBPACK_IMPORTED_MODULE_1__.InstanceControllerService, _xmlController_service__WEBPACK_IMPORTED_MODULE_2__.XmlControllerService];

/***/ }),

/***/ 4300:
/*!***************************************************************************!*\
  !*** ./src/app/backend-api/service-registry/api/docController.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocControllerService: () => (/* binding */ DocControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 69536);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 35189);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 95154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17858);







class DocControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'http://localhost:8444';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createDoc(body, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createDoc.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/api/docs`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteDoc(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteDoc.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/api/docs/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getDoc(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getDoc.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/docs/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getDocs(page, size, sort, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/docs`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateDoc(body, id, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateDoc.');
    }
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateDoc.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/api/docs/${encodeURIComponent(String(id))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function DocControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DocControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: DocControllerService,
    factory: DocControllerService.ɵfac
  });
}

/***/ }),

/***/ 60077:
/*!********************************************************************************!*\
  !*** ./src/app/backend-api/service-registry/api/instanceController.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceControllerService: () => (/* binding */ InstanceControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 69536);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 35189);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 95154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17858);







class InstanceControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'http://localhost:8444';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createInstance(body, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createInstance.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/api/instances`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteInstance(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteInstance.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/api/instances/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getInstance(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getInstance.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/instances/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getInstanceByMRNAndVersion(mrn, version, observe = 'body', reportProgress = false) {
    if (mrn === null || mrn === undefined) {
      throw new Error('Required parameter mrn was null or undefined when calling getInstanceByMRNAndVersion.');
    }
    if (version === null || version === undefined) {
      throw new Error('Required parameter version was null or undefined when calling getInstanceByMRNAndVersion.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/instances/mrn/${encodeURIComponent(String(mrn))}/${encodeURIComponent(String(version))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getInstances(page, size, sort, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/instances`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getInstancesByMRN(mrn, observe = 'body', reportProgress = false) {
    if (mrn === null || mrn === undefined) {
      throw new Error('Required parameter mrn was null or undefined when calling getInstancesByMRN.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/instances/mrn/${encodeURIComponent(String(mrn))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateInstance(body, id, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateInstance.');
    }
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateInstance.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/api/instances/${encodeURIComponent(String(id))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateInstanceStatus(id, status, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateInstanceStatus.');
    }
    if (status === null || status === undefined) {
      throw new Error('Required parameter status was null or undefined when calling updateInstanceStatus.');
    }
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (status !== undefined && status !== null) {
      queryParameters = queryParameters.set('status', status);
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('put', `${this.basePath}/api/instances/${encodeURIComponent(String(id))}/status`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function InstanceControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || InstanceControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: InstanceControllerService,
    factory: InstanceControllerService.ɵfac
  });
}

/***/ }),

/***/ 92379:
/*!***************************************************************************!*\
  !*** ./src/app/backend-api/service-registry/api/xmlController.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XmlControllerService: () => (/* binding */ XmlControllerService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../encoder */ 69536);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../variables */ 35189);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configuration */ 95154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 17858);







class XmlControllerService {
  constructor(httpClient, basePath, configuration) {
    this.httpClient = httpClient;
    this.basePath = 'http://localhost:8444';
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration();
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }
  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes) {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
  createXml(body, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling createXml.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/api/xmls`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  deleteXml(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteXml.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = [];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('delete', `${this.basePath}/api/xmls/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getAllXmls(page, size, sort, observe = 'body', reportProgress = false) {
    let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams({
      encoder: new _encoder__WEBPACK_IMPORTED_MODULE_0__.CustomHttpUrlEncodingCodec()
    });
    if (page !== undefined && page !== null) {
      queryParameters = queryParameters.set('page', page);
    }
    if (size !== undefined && size !== null) {
      queryParameters = queryParameters.set('size', size);
    }
    if (sort) {
      sort.forEach(element => {
        queryParameters = queryParameters.append('sort', element);
      });
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/xmls`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getG1128Schema(schema, observe = 'body', reportProgress = false) {
    if (schema === null || schema === undefined) {
      throw new Error('Required parameter schema was null or undefined when calling getG1128Schema.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/xml'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/xmls/schemas/${encodeURIComponent(String(schema))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  getXml(id, observe = 'body', reportProgress = false) {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling getXml.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = [];
    return this.httpClient.request('get', `${this.basePath}/api/xmls/${encodeURIComponent(String(id))}`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  updateXml(body, id, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling updateXml.');
    }
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling updateXml.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/json'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('put', `${this.basePath}/api/xmls/${encodeURIComponent(String(id))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  validateXmlWithG1128Schema(body, schema, observe = 'body', reportProgress = false) {
    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling validateXmlWithG1128Schema.');
    }
    if (schema === null || schema === undefined) {
      throw new Error('Required parameter schema was null or undefined when calling validateXmlWithG1128Schema.');
    }
    let headers = this.defaultHeaders;
    // to determine the Accept header
    let httpHeaderAccepts = ['application/json'];
    const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }
    // to determine the Content-Type header
    const consumes = ['application/xml'];
    const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }
    return this.httpClient.request('post', `${this.basePath}/api/xmls/validate/${encodeURIComponent(String(schema))}`, {
      body: body,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
  static #_ = this.ɵfac = function XmlControllerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || XmlControllerService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_1__.BASE_PATH, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration, 8));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: XmlControllerService,
    factory: XmlControllerService.ɵfac
  });
}

/***/ }),

/***/ 95154:
/*!***************************************************************!*\
  !*** ./src/app/backend-api/service-registry/configuration.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Configuration: () => (/* binding */ Configuration)
/* harmony export */ });
class Configuration {
  constructor(configurationParameters = {}) {
    this.apiKeys = configurationParameters.apiKeys;
    this.username = configurationParameters.username;
    this.password = configurationParameters.password;
    this.accessToken = configurationParameters.accessToken;
    this.basePath = configurationParameters.basePath;
    this.withCredentials = configurationParameters.withCredentials;
  }
  /**
   * Select the correct content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param contentTypes - the array of content types that are available for selection
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderContentType(contentTypes) {
    if (contentTypes.length == 0) {
      return undefined;
    }
    let type = contentTypes.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return contentTypes[0];
    }
    return type;
  }
  /**
   * Select the correct accept content-type to use for a request.
   * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
   * If no content type is found return the first found type if the contentTypes is not empty
   * @param accepts - the array of content types that are available for selection.
   * @returns the selected content-type or <code>undefined</code> if no selection could be made.
   */
  selectHeaderAccept(accepts) {
    if (accepts.length == 0) {
      return undefined;
    }
    let type = accepts.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return accepts[0];
    }
    return type;
  }
  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  isJsonMime(mime) {
    const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
    return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
  }
}

/***/ }),

/***/ 69536:
/*!*********************************************************!*\
  !*** ./src/app/backend-api/service-registry/encoder.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomHttpUrlEncodingCodec: () => (/* binding */ CustomHttpUrlEncodingCodec)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 68947);

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpUrlEncodingCodec {
  encodeKey(k) {
    k = super.encodeKey(k);
    return k.replace(/\+/gi, '%2B');
  }
  encodeValue(v) {
    v = super.encodeValue(v);
    return v.replace(/\+/gi, '%2B');
  }
}

/***/ }),

/***/ 65392:
/*!*******************************************************!*\
  !*** ./src/app/backend-api/service-registry/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APIS: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.APIS),
/* harmony export */   ApiModule: () => (/* reexport safe */ _api_module__WEBPACK_IMPORTED_MODULE_4__.ApiModule),
/* harmony export */   BASE_PATH: () => (/* reexport safe */ _variables__WEBPACK_IMPORTED_MODULE_2__.BASE_PATH),
/* harmony export */   COLLECTION_FORMATS: () => (/* reexport safe */ _variables__WEBPACK_IMPORTED_MODULE_2__.COLLECTION_FORMATS),
/* harmony export */   Configuration: () => (/* reexport safe */ _configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration),
/* harmony export */   DocControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.DocControllerService),
/* harmony export */   InstanceControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.InstanceControllerService),
/* harmony export */   InstanceDto: () => (/* reexport safe */ _model_models__WEBPACK_IMPORTED_MODULE_1__.InstanceDto),
/* harmony export */   XmlControllerService: () => (/* reexport safe */ _api_api__WEBPACK_IMPORTED_MODULE_0__.XmlControllerService)
/* harmony export */ });
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ 29383);
/* harmony import */ var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/models */ 37178);
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables */ 35189);
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ 95154);
/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.module */ 27180);






/***/ }),

/***/ 4682:
/*!******************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/coordinate.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: Nikolaos.Vastardis@gla-rad.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 19931:
/*!**************************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/coordinateSequence.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: Nikolaos.Vastardis@gla-rad.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 53349:
/*!*********************************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/coordinateSequenceFactory.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: Nikolaos.Vastardis@gla-rad.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 56831:
/*!**************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/docDto.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: Nikolaos.Vastardis@gla-rad.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 23588:
/*!****************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/envelope.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: Nikolaos.Vastardis@gla-rad.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 97296:
/*!****************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/geometry.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 24840:
/*!***********************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/geometryFactory.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 21542:
/*!*******************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/instanceDto.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceDto: () => (/* binding */ InstanceDto)
/* harmony export */ });
var InstanceDto;
(function (InstanceDto) {
  InstanceDto.StatusEnum = {
    PROVISIONAL: 'PROVISIONAL',
    RELEASED: 'RELEASED',
    DEPRECATED: 'DEPRECATED',
    DELETED: 'DELETED'
  };
  InstanceDto.DataProductTypeEnum = {
    OTHER: 'OTHER',
    S57: 'S57',
    S101: 'S101',
    S102: 'S102',
    S104: 'S104',
    S111: 'S111',
    S122: 'S122',
    S123: 'S123',
    S124: 'S124',
    S125: 'S125',
    S126: 'S126',
    S127: 'S127',
    S128: 'S128',
    S129: 'S129',
    S131: 'S131',
    S201: 'S201',
    S210: 'S210',
    S211: 'S211',
    S212: 'S212',
    S401: 'S401',
    S402: 'S402',
    S411: 'S411',
    S412: 'S412',
    S413: 'S413',
    S414: 'S414',
    S421: 'S421',
    RTZ: 'RTZ',
    EPC: 'EPC'
  };
})(InstanceDto || (InstanceDto = {}));

/***/ }),

/***/ 37178:
/*!**************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/models.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceDto: () => (/* reexport safe */ _instanceDto__WEBPACK_IMPORTED_MODULE_7__.InstanceDto)
/* harmony export */ });
/* harmony import */ var _coordinate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinate */ 4682);
/* harmony import */ var _coordinateSequence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coordinateSequence */ 19931);
/* harmony import */ var _coordinateSequenceFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coordinateSequenceFactory */ 53349);
/* harmony import */ var _docDto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docDto */ 56831);
/* harmony import */ var _envelope__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./envelope */ 23588);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geometry */ 97296);
/* harmony import */ var _geometryFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geometryFactory */ 24840);
/* harmony import */ var _instanceDto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./instanceDto */ 21542);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./point */ 54624);
/* harmony import */ var _precisionModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./precisionModel */ 76589);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./type */ 62060);
/* harmony import */ var _xmlDto__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./xmlDto */ 30250);













/***/ }),

/***/ 54624:
/*!*************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/point.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 76589:
/*!**********************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/precisionModel.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 62060:
/*!************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/type.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: Nikolaos.Vastardis@gla-rad.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 30250:
/*!**************************************************************!*\
  !*** ./src/app/backend-api/service-registry/model/xmlDto.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Maritime Connectivity Platform Service Registry API
 * Maritime Connectivity Platform Service Registry, developed by the MCC MSR WG
 *
 * OpenAPI spec version: 0.0.8
 * Contact: Nikolaos.Vastardis@gla-rad.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


/***/ }),

/***/ 35189:
/*!***********************************************************!*\
  !*** ./src/app/backend-api/service-registry/variables.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_PATH: () => (/* binding */ BASE_PATH),
/* harmony export */   COLLECTION_FORMATS: () => (/* binding */ COLLECTION_FORMATS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 17858);

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('basePath');
const COLLECTION_FORMATS = {
  'csv': ',',
  'tsv': '   ',
  'ssv': ' ',
  'pipes': '|'
};

/***/ }),

/***/ 71832:
/*!*****************************************!*\
  !*** ./src/app/common/columnForMenu.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColumnForResource: () => (/* binding */ ColumnForResource)
/* harmony export */ });
/* harmony import */ var _countryOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countryOptions */ 14252);
/* harmony import */ var _timeConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeConverter */ 43277);
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * a json format for both ngx-smart-table and ngx-editable-form articulating how the corresponding interface should work
 */
const ColumnForResource = {
  device: {
    id: {
      title: 'ID',
      type: 'number',
      description: 'identifier'
    },
    mrn: {
      title: 'MRN',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      immutable: true,
      required: true,
      shortIdType: 'device',
      error: "Please enter a valid MCP MRN, respecting the format 'urn:mrn:mcp:<entity_type>:<id_provider_id>:<org_id>:<unique_id>'"
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of device',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true
    },
    permissions: {
      title: 'Permissions',
      type: 'string',
      description: 'List of permissions assigned by the organization',
      visibleFrom: ['edit', 'detail', 'edit', 'edit-new']
    },
    mrnSubsidiary: {
      title: 'Subsidiary MRN',
      type: 'string',
      description: 'Additional MRN assigned to entity',
      visibleFrom: ['detail', 'edit', 'edit-new']
    },
    homeMMSUrl: {
      title: 'Home MMS URL',
      type: 'string',
      description: 'URL of home MMS'
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      description: 'Time of creation',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail']
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      description: 'Time of last update',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail', 'list']
    }
  },
  organization: {
    id: {
      title: 'ID',
      type: 'number'
    },
    logo: {
      title: 'Logo',
      type: 'image',
      allowedExtensions: ['.jpg', '.png'],
      visibleFrom: ['detail', 'edit']
    },
    mrn: {
      title: 'MRN',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      immutable: true,
      required: true,
      shortIdType: 'organization',
      error: "Please enter a valid MCP MRN, respecting the format 'urn:mrn:mcp:<entity_type>:<id_provider_id>:<org_id>'"
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of organization',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true
    },
    mrnSubsidiary: {
      title: 'Subsidiary MRN',
      type: 'string',
      description: 'Additional MRN assigned to entity',
      visibleFrom: ['detail', 'edit', 'edit-new']
    },
    homeMMSUrl: {
      title: 'Home MMS URL',
      type: 'string',
      description: 'URL of home MMS'
    },
    email: {
      title: 'e-mail',
      type: 'string',
      description: 'Contact e-mail',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true,
      error: "Please enter a valid email address"
    },
    url: {
      title: 'URL',
      type: 'string',
      description: 'URL of organization',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true,
      error: "Please enter a valid URL"
    },
    address: {
      title: 'Address',
      type: 'string',
      description: 'Address of organization',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    country: {
      title: 'Country',
      type: 'string',
      description: 'Country that organization belongs to',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      options: _countryOptions__WEBPACK_IMPORTED_MODULE_0__.countryOptions,
      required: true
    },
    federationType: {
      title: 'Federation type',
      type: 'string',
      description: 'OpenID Connect federation type',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      immutable: true
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      description: 'Time of creation',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail']
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      description: 'Time of last update',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail', 'list']
    }
  },
  service: {
    id: {
      title: 'ID',
      type: 'number'
    },
    mrn: {
      title: 'MRN',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      immutable: true,
      required: true,
      shortIdType: 'service',
      error: "Please enter a valid MCP MRN, respecting the format 'urn:mrn:mcp:<entity_type>:<id_provider_id>:<org_id>:<unique_id>'"
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of service',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true
    },
    permissions: {
      title: 'Permissions',
      type: 'string',
      description: 'List of permissions assigned by the organization',
      visibleFrom: ['edit', 'detail', 'edit', 'edit-new']
    },
    mrnSubsidiary: {
      title: 'Subsidiary MRN',
      type: 'string',
      description: 'Additional MRN assigned to entity',
      visibleFrom: ['detail', 'edit', 'edit-new']
    },
    homeMMSUrl: {
      title: 'Home MMS URL',
      type: 'string',
      description: 'URL of home MMS'
    },
    instanceVersion: {
      title: 'Instance version',
      type: 'string',
      description: 'Version of service instance',
      immutable: true
    },
    certDomainName: {
      title: 'Certificate domain name',
      type: 'string',
      description: 'The domain name the service will be available on. Used in the issued certificates for the service.',
      visibleFrom: ['detail', 'edit', 'edit-new']
    },
    oidcClientId: {
      title: 'OIDC client ID',
      type: 'string',
      description: 'OpenID Connect client ID',
      visibleFrom: ['detail', 'edit']
    },
    oidcClientSecret: {
      title: 'OIDC client secret',
      type: 'string',
      description: 'OpenID Connect client secret',
      visibleFrom: ['detail', 'edit']
    },
    oidcAccessType: {
      title: 'Access type',
      type: 'string',
      description: 'OpenID Connect access type',
      options: [{
        title: 'public',
        value: 'public',
        showField: {
          key: 'oidcRedirectUri',
          value: true
        }
      }, {
        title: 'bearer-only',
        value: 'bearer-only',
        showField: {
          key: 'oidcRedirectUri',
          value: false
        }
      }, {
        title: 'confidential',
        value: 'confidential',
        showField: {
          key: 'oidcRedirectUri',
          value: true
        }
      }],
      visibleFrom: ['detail', 'edit']
    },
    oidcRedirectUri: {
      title: 'OIDC redirect URI',
      type: 'string',
      description: 'OpenID Connect client redirect URI',
      visibleFrom: ['detail', 'edit']
    },
    vessel: {
      title: 'Vessel',
      type: 'vessel',
      description: 'Correlated vessel',
      visibleFrom: ['detail', 'edit']
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      description: 'Time of creation',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail']
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      description: 'Time of last update',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail', 'list']
    }
  },
  user: {
    id: {
      title: 'ID',
      type: 'number'
    },
    mrn: {
      title: 'MRN',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      immutable: true,
      required: true,
      shortIdType: 'user',
      error: "Please enter a valid MCP MRN, respecting the format 'urn:mrn:mcp:<entity_type>:<id_provider_id>:<org_id>:<unique_id>'"
    },
    firstName: {
      title: 'First name',
      type: 'string',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true
    },
    lastName: {
      title: 'Last name',
      type: 'string',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true
    },
    email: {
      title: 'e-mail',
      type: 'string',
      description: 'Contact e-mail',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      immutable: true,
      required: true,
      error: "Please enter a valid email address"
    },
    permissions: {
      title: 'Permissions',
      type: 'string',
      description: 'List of permissions assigned by the organization',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new']
    },
    mrnSubsidiary: {
      title: 'Subsidiary MRN',
      type: 'string',
      description: 'Additional MRN assigned to entity',
      visibleFrom: ['detail', 'edit', 'edit-new']
    },
    homeMMSUrl: {
      title: 'Home MMS URL',
      type: 'string',
      description: 'URL of home MMS'
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      description: 'Time of creation',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail']
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      description: 'Time of last update',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail', 'list']
    }
  },
  vessel: {
    id: {
      title: 'ID',
      type: 'number'
    },
    logo: {
      title: 'Logo',
      type: 'image',
      allowedExtensions: ['.jpg', '.png'],
      visibleFrom: ['detail', 'edit']
    },
    mrn: {
      title: 'MRN',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      immutable: true,
      required: true,
      shortIdType: 'vessel',
      error: "Please enter a valid MCP MRN, respecting the format 'urn:mrn:mcp:<entity_type>:<id_provider_id>:<org_id>:<unique_id>'"
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of device',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true
    },
    permissions: {
      title: 'Permissions',
      type: 'string',
      description: 'List of permissions assigned by the organization',
      visibleFrom: ['detail', 'edit', 'edit-new']
    },
    // vessel specific
    imoNumber: {
      title: 'IMO number',
      type: 'string',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    mmsiNumber: {
      title: 'MMSI number',
      type: 'string',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    callsign: {
      title: 'Call sign',
      type: 'string',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    flagstate: {
      title: 'Flag state',
      type: 'string',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    aisClass: {
      title: 'AIS class',
      type: 'string',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    portOfRegister: {
      title: 'Port of register',
      type: 'string',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    mrnSubsidiary: {
      title: 'Subsidiary MRN',
      type: 'string',
      description: 'Additional MRN assigned to entity',
      visibleFrom: ['detail', 'edit', 'edit-new']
    },
    homeMMSUrl: {
      title: 'Home MMS URL',
      type: 'string',
      description: 'URL of home MMS'
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      description: 'Time of creation',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail']
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      description: 'Time of last update',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail', 'list']
    }
  },
  role: {
    id: {
      title: 'ID',
      type: 'number'
    },
    permission: {
      title: 'Permission',
      type: 'string',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true
    },
    roleName: {
      title: 'Role name',
      type: 'string',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      options: [{
        title: 'ROLE_SITE_ADMIN',
        value: 'ROLE_SITE_ADMIN'
      }, {
        title: 'ROLE_ORG_ADMIN',
        value: 'ROLE_ORG_ADMIN'
      }, {
        title: 'ROLE_USER',
        value: 'ROLE_USER'
      }, {
        title: 'ROLE_ENTITY_ADMIN',
        value: 'ROLE_ENTITY_ADMIN'
      }, {
        title: 'ROLE_USER_ADMIN',
        value: 'ROLE_USER_ADMIN'
      }, {
        title: 'ROLE_VESSEL_ADMIN',
        value: 'ROLE_VESSEL_ADMIN'
      }, {
        title: 'ROLE_SERVICE_ADMIN',
        value: 'ROLE_SERVICE_ADMIN'
      }, {
        title: 'ROLE_APPROVE_ORG',
        value: 'ROLE_APPROVE_ORG'
      }, {
        title: 'ROLE_DEVICE_ADMIN',
        value: 'ROLE_DEVICE_ADMIN'
      }, {
        title: 'ROLE_MMS_ADMIN',
        value: 'ROLE_MMS_ADMIN'
      }],
      required: true
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      description: 'Time of creation',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail']
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      description: 'Time of last update',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail', 'list']
    }
  },
  orgcandidate: {
    id: {
      title: 'ID',
      type: 'number'
    },
    mrn: {
      title: 'MRN',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      shortIdType: 'organization',
      immutable: true,
      required: true,
      error: "Please enter a valid MCP MRN, respecting the format 'urn:mrn:mcp:<entity_type>:<id_provider_id>:<org_id>'"
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of organization',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true
    },
    mrnSubsidiary: {
      title: 'Subsidiary MRN',
      type: 'string',
      description: 'Additional MRN assigned to entity',
      visibleFrom: ['detail', 'edit']
    },
    homeMMSUrl: {
      title: 'Home MMS URL',
      type: 'string',
      description: 'URL of home MMS'
    },
    email: {
      title: 'e-mail',
      type: 'string',
      description: 'Contact e-mail',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true,
      error: "Please enter a valid email address"
    },
    url: {
      title: 'URL',
      type: 'string',
      description: 'URL of organization',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true,
      error: "Please enter a valid URL"
    },
    address: {
      title: 'Address',
      type: 'string',
      description: 'Address of organization',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    country: {
      title: 'Country',
      type: 'string',
      description: 'Country that organization belongs to',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      options: _countryOptions__WEBPACK_IMPORTED_MODULE_0__.countryOptions,
      required: true
    },
    federationType: {
      title: 'Federation type',
      type: 'string',
      description: 'OpenID Connect federation type',
      visibleFrom: ['detail', 'edit'],
      immutable: true
    },
    createdAt: {
      title: 'Created at',
      type: 'string',
      description: 'Time of creation',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail']
    },
    updatedAt: {
      title: 'Updated at',
      type: 'string',
      description: 'Time of last update',
      filter: false,
      valuePrepareFunction: timestamp => {
        return (0,_timeConverter__WEBPACK_IMPORTED_MODULE_1__.convertTime)(timestamp);
      },
      immutable: true,
      visibleFrom: ['detail', 'list']
    }
  },
  instance: {
    id: {
      title: 'ID',
      type: 'number'
    },
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of service instance',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true
    },
    version: {
      title: 'Version',
      type: 'string',
      description: 'Version of service instance',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true
    },
    serviceTypeValue: {
      title: 'Service type',
      type: 'string',
      description: 'Service type of service instance',
      visibleFrom: ['list']
    },
    serviceType: {
      title: 'Service type',
      type: 'stringArray',
      options: [{
        title: 'MS 1 - VTS Information service (INS)',
        value: 'VTSInformationService'
      }, {
        title: 'MS 2 - VTS Navigational assistance service (NAS)',
        value: 'VTSNavigationalAssistanceService'
      }, {
        title: 'MS 3 - Traffic organization service (TOS)',
        value: 'TrafficOrganizationService'
      }, {
        title: 'MS 4 - Port support service (PSS)',
        value: 'PortSupportService'
      }, {
        title: 'MS 5 - Maritime safety information (MSI) service',
        value: 'MaritimeSafetyInformationService'
      }, {
        title: 'MS 6 - Pilotage service',
        value: 'PilotageService'
      }, {
        title: 'MS 7 - Tug service',
        value: 'TugService'
      }, {
        title: 'MS 8 - Vessel shore reporting',
        value: 'VesselShoreReporting'
      }, {
        title: 'MS 9 - Telemedical assistance service (TMAS)',
        value: 'TelemedicalAssistanceService'
      }, {
        title: 'MS 10 - Maritime assistance service (MAS)',
        value: 'MaritimeAssistanceService'
      }, {
        title: 'MS 11 - Nautical chart service',
        value: 'NauticalChartService'
      }, {
        title: 'MS 12 - Nautical publications service',
        value: 'NauticalPublicationsService'
      }, {
        title: 'MS 13 - Ice navigation service',
        value: 'IceNavigationService'
      }, {
        title: 'MS 14 - Meteorological information service',
        value: 'MeteorologicalInformationService'
      }, {
        title: 'MS 15 - Real-time hydrographic and environmental information services',
        value: 'RealTimeHydrographicAndEnvironmentalInformationServices'
      }, {
        title: 'MS 16 - Search and rescue (SAR) service',
        value: 'SearchAndRescueService'
      }, {
        title: 'Other',
        value: 'other:etc'
      }],
      description: 'The service type shall reflect the associated operational service type provided according to defined types',
      visibleFrom: ['detail', 'edit', 'edit-new']
    },
    dataProductTypeValue: {
      title: 'Data product type',
      type: 'string',
      description: 'Data product type of service instance',
      visibleFrom: ['list']
    },
    dataProductType: {
      title: 'Data product type',
      type: 'stringArray',
      options: [{
        title: 'S-57 Electronic Navigational Chart (ENC)',
        value: 'S57'
      }, {
        title: 'S-101 Electronic Navigational Chart (ENC)',
        value: 'S101'
      }, {
        title: 'S-102 Bathymetric Surface',
        value: 'S102'
      }, {
        title: 'S-104 Water Level Information for Surface Navigation',
        value: 'S104'
      }, {
        title: 'S-111 Surface Currents',
        value: 'S111'
      }, {
        title: 'S-122 Marine Protected Areas (MPAs)',
        value: 'S122'
      }, {
        title: 'S-123 Marine Radio Services',
        value: 'S123'
      }, {
        title: 'S-124 Navigational Warnings',
        value: 'S124'
      }, {
        title: 'S-125 Marine Navigational Services',
        value: 'S125'
      }, {
        title: 'S-126 Marine Physical Environment',
        value: 'S126'
      }, {
        title: 'S-127 Marine Traffic Management',
        value: 'S127'
      }, {
        title: 'S-128 Catalogue of Nautical Products',
        value: 'S128'
      }, {
        title: 'S-129 Under Keel Clearance Management (UKCM)',
        value: 'S129'
      }, {
        title: 'S-131 Marine Harbour Infrastructure',
        value: 'S131'
      }, {
        title: 'S-210 Inter-VTS Exchange Format',
        value: 'S210'
      }, {
        title: 'S-211 Port Call Message Format',
        value: 'S211'
      }, {
        title: 'S-212 VTS Digital Information Service',
        value: 'S212'
      }, {
        title: 'S-401 Inland ENC',
        value: 'S401'
      }, {
        title: 'S-402 Bathymetric Contour Overlay for Inland ENC',
        value: 'S402'
      }, {
        title: 'S-411 Sea Ice Information',
        value: 'S411'
      }, {
        title: 'S-412 Weather Overlay',
        value: 'S412'
      }, {
        title: 'S-413 Marine Weather Conditions',
        value: 'S413'
      }, {
        title: 'S-414 Marine Weather Observations',
        value: 'S414'
      }, {
        title: 'S-421 Route Plan',
        value: 'S421'
      }, {
        title: 'Route Plan',
        value: 'RTZ'
      }, {
        title: 'Electronic Port Clearance',
        value: 'EPC'
      }, {
        title: 'Other data types not covered in this table',
        value: 'OTHER'
      }],
      description: 'Data product type defined in IEC 63173-2 SECOM standard',
      visibleFrom: ['detail', 'edit', 'edit-new']
    },
    status: {
      title: 'Status',
      type: 'string',
      options: [{
        title: 'Provisional',
        value: 'PROVISIONAL'
      }, {
        title: 'Released',
        value: 'RELEASED'
      }, {
        title: 'Deprecated',
        value: 'DEPRECATED'
      }, {
        title: 'Deleted',
        value: 'DELETED'
      }],
      visibleFrom: ['detail', 'list', 'edit', 'edit-new'],
      required: true
    },
    endpointUri: {
      title: 'Endpoint URI',
      type: 'string',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    endpointType: {
      title: 'Endpoint type',
      type: 'string',
      visibleFrom: []
    },
    organizationId: {
      title: 'Organization ID',
      type: 'string',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    keywords: {
      title: 'Keywords',
      type: 'stringArray',
      placeholder: 'Please enter keyword',
      visibleFrom: ['detail', 'list', 'edit', 'edit-new']
    },
    instanceId: {
      title: 'Instance ID',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      placeholder: 'urn:mrn:',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      error: "Please enter a valid MCP MRN, respecting the format 'urn:mrn:mcp:<entity_type>:<id_provider_id>:<org_id>'",
      required: true
    },
    implementsServiceDesign: {
      title: 'Technical design ID',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      placeholder: 'urn:mrn:',
      visibleFrom: ['detail', 'edit', 'edit-new']
    },
    implementsServiceDesignVersion: {
      title: 'Technical design version',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'edit', 'edit-new']
    },
    comment: {
      title: 'Comment',
      type: 'string',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    geometryContentType: {
      title: 'Geometry content type',
      type: 'string',
      visibleFrom: []
    },
    geometry: {
      title: 'Geometry',
      type: 'object',
      visibleFrom: []
    },
    unlocode: {
      title: 'Unlocode',
      type: 'string',
      placeholder: 'Please enter UN/LOCODE',
      visibleFrom: []
    },
    mmsi: {
      title: 'MMSI',
      type: 'string',
      visibleFrom: []
    },
    imo: {
      title: 'IMO number',
      type: 'string',
      visibleFrom: []
    },
    instanceAsXml: {
      title: 'Instance as XML',
      type: 'file',
      visibleFrom: ['detail']
    },
    instanceAsXmlName: {
      title: 'Instance as XML',
      type: 'xml',
      visibleFrom: ['edit', 'edit-new']
    },
    instanceAsDocId: {
      title: 'Instance as DocId',
      type: 'number'
    },
    instanceAsDoc: {
      title: 'Instance as document',
      type: 'file',
      visibleFrom: ['detail']
    },
    instanceAsDocName: {
      title: 'Instance as document',
      type: 'file',
      visibleFrom: ['edit', 'edit-new']
    },
    ledgerRequestId: {
      title: 'Ledger Request ID',
      type: 'number'
    },
    ledgerRequestStatus: {
      title: 'Ledger Request status',
      type: 'string',
      options: [{
        title: 'Inactive',
        value: 'INACTIVE'
      }, {
        title: 'Created',
        value: 'CREATED'
      }, {
        title: 'Vetting',
        value: 'VETTING'
      }, {
        title: 'Vetted',
        value: 'VETTED'
      }, {
        title: 'Requesting',
        value: 'REQUESTING'
      }, {
        title: 'Succeeded',
        value: 'SUCCEEDED'
      }, {
        title: 'Failed',
        value: 'FAILED'
      }, {
        title: 'Rejected',
        value: 'REJECTED'
      }],
      visibleFrom: []
    },
    docIds: {
      title: 'Related documents',
      type: 'fileArray',
      filter: false,
      visibleFrom: []
    },
    publishedAt: {
      title: 'Created at',
      type: 'string',
      description: 'Time of creation',
      filter: false,
      immutable: true,
      visibleFrom: []
    },
    lastUpdatedAt: {
      title: 'Updated at',
      type: 'string',
      description: 'Time of last update',
      filter: false,
      immutable: true,
      visibleFrom: ['detail']
    }
  },
  searchobjectresult: {
    instanceId: {
      title: "Instance ID",
      type: "string",
      description: "MCP MRN as unique identifier",
      placeholder: "urn:mrn:",
      visibleFrom: ["detail", "edit", "edit-new"]
    },
    name: {
      title: "Name",
      type: "string",
      description: "Name of service instance",
      visibleFrom: ["detail", "list", "edit", "edit-new"]
    },
    version: {
      title: "Version",
      type: "string",
      description: "Version of service instance",
      visibleFrom: ["detail", "list", "edit", "edit-new"]
    },
    status: {
      title: "Status",
      type: "string",
      options: [{
        title: "Provisional",
        value: "PROVISIONAL"
      }, {
        title: "Released",
        value: "RELEASED"
      }, {
        title: "Deprecated",
        value: "DEPRECATED"
      }, {
        title: "Deleted",
        value: "DELETED"
      }],
      visibleFrom: ["detail", "list", "edit", "edit-new"]
    },
    description: {
      title: "Description",
      type: "string",
      visibleFrom: ["detail", "edit", "edit-new"]
    },
    dataProductType: {
      title: "Data product type",
      type: "string",
      options: [{
        title: 'S-57 Electronic Navigational Chart (ENC)',
        value: 'S57'
      }, {
        title: 'S-101 Electronic Navigational Chart (ENC)',
        value: 'S101'
      }, {
        title: 'S-102 Bathymetric Surface',
        value: 'S102'
      }, {
        title: 'S-104 Water Level Information for Surface Navigation',
        value: 'S104'
      }, {
        title: 'S-111 Surface Currents',
        value: 'S111'
      }, {
        title: 'S-122 Marine Protected Areas (MPAs)',
        value: 'S122'
      }, {
        title: 'S-123 Marine Radio Services',
        value: 'S123'
      }, {
        title: 'S-124 Navigational Warnings',
        value: 'S124'
      }, {
        title: 'S-125 Marine Navigational Services',
        value: 'S125'
      }, {
        title: 'S-126 Marine Physical Environment',
        value: 'S126'
      }, {
        title: 'S-127 Marine Traffic Management',
        value: 'S127'
      }, {
        title: 'S-128 Catalogue of Nautical Products',
        value: 'S128'
      }, {
        title: 'S-129 Under Keel Clearance Management (UKCM)',
        value: 'S129'
      }, {
        title: 'S-131 Marine Harbour Infrastructure',
        value: 'S131'
      }, {
        title: 'S-210 Inter-VTS Exchange Format',
        value: 'S210'
      }, {
        title: 'S-211 Port Call Message Format',
        value: 'S211'
      }, {
        title: 'S-212 VTS Digital Information Service',
        value: 'S212'
      }, {
        title: 'S-401 Inland ENC',
        value: 'S401'
      }, {
        title: 'S-402 Bathymetric Contour Overlay for Inland ENC',
        value: 'S402'
      }, {
        title: 'S-411 Sea Ice Information',
        value: 'S411'
      }, {
        title: 'S-412 Weather Overlay',
        value: 'S412'
      }, {
        title: 'S-413 Marine Weather Conditions',
        value: 'S413'
      }, {
        title: 'S-414 Marine Weather Observations',
        value: 'S414'
      }, {
        title: 'S-421 Route Plan',
        value: 'S421'
      }, {
        title: 'Route Plan',
        value: 'RTZ'
      }, {
        title: 'Electronic Port Clearance',
        value: 'EPC'
      }, {
        title: 'Other data types not covered in this table',
        value: 'OTHER'
      }],
      description: "Data product type defined in IEC 63173-2 SECOM standard",
      visibleFrom: ["detail", "edit", "edit-new"]
    },
    organizationId: {
      title: "Organization ID",
      type: "string",
      visibleFrom: ["detail", "edit", "edit-new"]
    },
    endpointUri: {
      title: "Endpoint URI",
      type: "string",
      visibleFrom: ["detail", "edit", "edit-new"]
    },
    endpointType: {
      title: "Endpoint type",
      type: "string",
      visibleFrom: []
    },
    keywords: {
      title: "Keywords",
      type: "stringArray",
      placeholder: "Please enter keyword",
      visibleFrom: ["detail", "list", "edit", "edit-new"]
    },
    unlocode: {
      title: "Unlocode",
      type: "string",
      placeholder: "Please enter UN/LOCODE",
      visibleFrom: []
    },
    instanceAsXml: {
      title: "Instance as XML",
      type: "file",
      visibleFrom: []
    },
    publishedAt: {
      title: "Created at",
      type: "string",
      description: "Time of creation",
      filter: false,
      immutable: true,
      visibleFrom: []
    },
    lastUpdatedAt: {
      title: "Updated at",
      type: "string",
      description: "Time of last update",
      filter: false,
      immutable: true,
      visibleFrom: ["detail"]
    },
    comment: {
      title: "Comment",
      type: "string",
      description: "Comment description",
      visibleFrom: ["detail", "edit", "edit-new"],
      required: true
    },
    mmsi: {
      title: "MMSI",
      type: "string",
      visibleFrom: []
    },
    imo: {
      title: "IMO number",
      type: "string",
      visibleFrom: []
    },
    geometry: {
      title: "Geometry",
      type: "object",
      visibleFrom: []
    },
    sourceMSR: {
      title: "Source MSR",
      type: "string",
      visibleFrom: ["detail", "list", "edit", "edit-new"]
    }
  },
  newOrganization: {
    orgMrn: {
      title: 'Maritime Resource Name (MRN) for organization',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true,
      shortIdType: 'organization',
      error: "Please enter a valid MCP MRN, respecting the format 'urn:mrn:mcp:<entity_type>:<id_provider_id>:<org_id>'"
    },
    orgName: {
      title: 'Organization name',
      type: 'string',
      description: 'Name of organization',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    orgEmail: {
      title: 'Organization contact e-mail',
      type: 'string',
      description: 'Contact e-mail',
      placeholder: 'non-personal email, e.g., info@example.org',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    orgUrl: {
      title: 'URL of organization',
      type: 'string',
      description: 'URL of organization',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    orgAddress: {
      title: 'Address of organization',
      type: 'string',
      description: 'Address of organization',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      required: true
    },
    orgCountry: {
      title: 'Country of organization',
      type: 'stringArray',
      description: 'Country that organization belongs to',
      visibleFrom: ['detail', 'edit', 'edit-new'],
      options: _countryOptions__WEBPACK_IMPORTED_MODULE_0__.countryOptions,
      required: true
    }
  },
  ledgerInstance: {
    name: {
      title: 'Name',
      type: 'string',
      description: 'Name of service instance',
      visibleFrom: ['list']
    },
    mrn: {
      title: 'MRN',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['list'],
      error: "Please enter a valid MCP MRN, respecting the format 'urn:mrn:mcp:<entity_type>:<id_provider_id>:<org_id>'"
    },
    version: {
      title: 'Version',
      type: 'string',
      description: 'Version of service instance',
      visibleFrom: ['list']
    },
    keywords: {
      title: 'Keywords',
      type: 'string',
      visibleFrom: ['list']
    },
    coverageArea: {
      title: 'Coverage ',
      type: 'string'
    },
    status: {
      title: 'Status',
      type: 'string',
      options: [{
        title: 'Provisional',
        value: 'PROVISIONAL'
      }, {
        title: 'Released',
        value: 'RELEASED'
      }, {
        title: 'Deprecated',
        value: 'DEPRECATED'
      }, {
        title: 'Deleted',
        value: 'DELETED'
      }],
      visibleFrom: ['list']
    },
    implementsDesignMRN: {
      title: 'Technical design ID',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['list'],
      shortIdType: 'design',
      immutable: true
    },
    implementsDesignVersion: {
      title: 'Technical design version',
      type: 'string',
      description: 'MCP MRN as unique identifer',
      visibleFrom: ['list']
    },
    msrName: {
      title: 'MSR Name of register',
      type: 'string',
      visibleFrom: ['list']
    },
    msrUrl: {
      title: 'MSR URL of register',
      type: 'string',
      visibleFrom: ['list']
    }
  }
};

/***/ }),

/***/ 14252:
/*!******************************************!*\
  !*** ./src/app/common/countryOptions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   countryOptions: () => (/* binding */ countryOptions)
/* harmony export */ });
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * country information collection for the country select menu
 */
const countryOptions = [{
  code: "AF",
  code3: "AFG",
  title: "Afghanistan",
  value: "Afghanistan"
}, {
  code: "AL",
  code3: "ALB",
  title: "Albania",
  value: "Albania"
}, {
  code: "DZ",
  code3: "DZA",
  title: "Algeria",
  value: "Algeria"
}, {
  code: "AS",
  code3: "ASM",
  title: "American Samoa",
  value: "American Samoa"
}, {
  code: "AD",
  code3: "AND",
  title: "Andorra",
  value: "Andorra"
}, {
  code: "AO",
  code3: "AGO",
  title: "Angola",
  value: "Angola"
}, {
  code: "AI",
  code3: "AIA",
  title: "Anguilla",
  value: "Anguilla"
}, {
  code: "AQ",
  code3: "ATA",
  title: "Antarctica",
  value: "Antarctica"
}, {
  code: "AG",
  code3: "ATG",
  title: "Antigua and Barbuda",
  value: "Antigua and Barbuda"
}, {
  code: "AR",
  code3: "ARG",
  title: "Argentina",
  value: "Argentina"
}, {
  code: "AM",
  code3: "ARM",
  title: "Armenia",
  value: "Armenia"
}, {
  code: "AW",
  code3: "ABW",
  title: "Aruba",
  value: "Aruba"
}, {
  code: "AU",
  code3: "AUS",
  title: "Australia",
  value: "Australia"
}, {
  code: "AT",
  code3: "AUT",
  title: "Austria",
  value: "Austria"
}, {
  code: "AZ",
  code3: "AZE",
  title: "Azerbaijan",
  value: "Azerbaijan"
}, {
  code: "BS",
  code3: "BHS",
  title: "Bahamas (the)",
  value: "Bahamas (the)"
}, {
  code: "BH",
  code3: "BHR",
  title: "Bahrain",
  value: "Bahrain"
}, {
  code: "BD",
  code3: "BGD",
  title: "Bangladesh",
  value: "Bangladesh"
}, {
  code: "BB",
  code3: "BRB",
  title: "Barbados",
  value: "Barbados"
}, {
  code: "BY",
  code3: "BLR",
  title: "Belarus",
  value: "Belarus"
}, {
  code: "BE",
  code3: "BEL",
  title: "Belgium",
  value: "Belgium"
}, {
  code: "BZ",
  code3: "BLZ",
  title: "Belize",
  value: "Belize"
}, {
  code: "BJ",
  code3: "BEN",
  title: "Benin",
  value: "Benin"
}, {
  code: "BM",
  code3: "BMU",
  title: "Bermuda",
  value: "Bermuda"
}, {
  code: "BT",
  code3: "BTN",
  title: "Bhutan",
  value: "Bhutan"
}, {
  code: "BO",
  code3: "BOL",
  title: "Bolivia (Plurinational State of)",
  value: "Bolivia (Plurinational State of)"
}, {
  code: "BQ",
  code3: "BES",
  title: "Bonaire, Sint Eustatius and Saba",
  value: "Bonaire, Sint Eustatius and Saba"
}, {
  code: "BA",
  code3: "BIH",
  title: "Bosnia and Herzegovina",
  value: "Bosnia and Herzegovina"
}, {
  code: "BW",
  code3: "BWA",
  title: "Botswana",
  value: "Botswana"
}, {
  code: "BV",
  code3: "BVT",
  title: "Bouvet Island",
  value: "Bouvet Island"
}, {
  code: "BR",
  code3: "BRA",
  title: "Brazil",
  value: "Brazil"
}, {
  code: "IO",
  code3: "IOT",
  title: "British Indian Ocean Territory (the)",
  value: "British Indian Ocean Territory (the)"
}, {
  code: "BN",
  code3: "BRN",
  title: "Brunei Darussalam",
  value: "Brunei Darussalam"
}, {
  code: "BG",
  code3: "BGR",
  title: "Bulgaria",
  value: "Bulgaria"
}, {
  code: "BF",
  code3: "BFA",
  title: "Burkina Faso",
  value: "Burkina Faso"
}, {
  code: "BI",
  code3: "BDI",
  title: "Burundi",
  value: "Burundi"
}, {
  code: "CV",
  code3: "CPV",
  title: "Cabo Verde",
  value: "Cabo Verde"
}, {
  code: "KH",
  code3: "KHM",
  title: "Cambodia",
  value: "Cambodia"
}, {
  code: "CM",
  code3: "CMR",
  title: "Cameroon",
  value: "Cameroon"
}, {
  code: "CA",
  code3: "CAN",
  title: "Canada",
  value: "Canada"
}, {
  code: "KY",
  code3: "CYM",
  title: "Cayman Islands (the)",
  value: "Cayman Islands (the)"
}, {
  code: "CF",
  code3: "CAF",
  title: "Central African Republic (the)",
  value: "Central African Republic (the)"
}, {
  code: "TD",
  code3: "TCD",
  title: "Chad",
  value: "Chad"
}, {
  code: "CL",
  code3: "CHL",
  title: "Chile",
  value: "Chile"
}, {
  code: "CN",
  code3: "CHN",
  title: "China",
  value: "China"
}, {
  code: "CX",
  code3: "CXR",
  title: "Christmas Island",
  value: "Christmas Island"
}, {
  code: "CC",
  code3: "CCK",
  title: "Cocos (Keeling) Islands (the)",
  value: "Cocos (Keeling) Islands (the)"
}, {
  code: "CO",
  code3: "COL",
  title: "Colombia",
  value: "Colombia"
}, {
  code: "KM",
  code3: "COM",
  title: "Comoros (the)",
  value: "Comoros (the)"
}, {
  code: "CD",
  code3: "COD",
  title: "Congo (the Democratic Republic of the)",
  value: "Congo (the Democratic Republic of the)"
}, {
  code: "CG",
  code3: "COG",
  title: "Congo (the)",
  value: "Congo (the)"
}, {
  code: "CK",
  code3: "COK",
  title: "Cook Islands (the)",
  value: "Cook Islands (the)"
}, {
  code: "CR",
  code3: "CRI",
  title: "Costa Rica",
  value: "Costa Rica"
}, {
  code: "HR",
  code3: "HRV",
  title: "Croatia",
  value: "Croatia"
}, {
  code: "CU",
  code3: "CUB",
  title: "Cuba",
  value: "Cuba"
}, {
  code: "CW",
  code3: "CUW",
  title: "Curaçao",
  value: "Curaçao"
}, {
  code: "CY",
  code3: "CYP",
  title: "Cyprus",
  value: "Cyprus"
}, {
  code: "CZ",
  code3: "CZE",
  title: "Czechia",
  value: "Czechia"
}, {
  code: "CI",
  code3: "CIV",
  title: "Côte d'Ivoire",
  value: "Côte d'Ivoire"
}, {
  code: "DK",
  code3: "DNK",
  title: "Denmark",
  value: "Denmark"
}, {
  code: "DJ",
  code3: "DJI",
  title: "Djibouti",
  value: "Djibouti"
}, {
  code: "DM",
  code3: "DMA",
  title: "Dominica",
  value: "Dominica"
}, {
  code: "DO",
  code3: "DOM",
  title: "Dominican Republic (the)",
  value: "Dominican Republic (the)"
}, {
  code: "EC",
  code3: "ECU",
  title: "Ecuador",
  value: "Ecuador"
}, {
  code: "EG",
  code3: "EGY",
  title: "Egypt",
  value: "Egypt"
}, {
  code: "SV",
  code3: "SLV",
  title: "El Salvador",
  value: "El Salvador"
}, {
  code: "GQ",
  code3: "GNQ",
  title: "Equatorial Guinea",
  value: "Equatorial Guinea"
}, {
  code: "ER",
  code3: "ERI",
  title: "Eritrea",
  value: "Eritrea"
}, {
  code: "EE",
  code3: "EST",
  title: "Estonia",
  value: "Estonia"
}, {
  code: "SZ",
  code3: "SWZ",
  title: "Eswatini",
  value: "Eswatini"
}, {
  code: "ET",
  code3: "ETH",
  title: "Ethiopia",
  value: "Ethiopia"
}, {
  code: "FK",
  code3: "FLK",
  title: "Falkland Islands (the) [Malvinas]",
  value: "Falkland Islands (the) [Malvinas]"
}, {
  code: "FO",
  code3: "FRO",
  title: "Faroe Islands (the)",
  value: "Faroe Islands (the)"
}, {
  code: "FJ",
  code3: "FJI",
  title: "Fiji",
  value: "Fiji"
}, {
  code: "FI",
  code3: "FIN",
  title: "Finland",
  value: "Finland"
}, {
  code: "FR",
  code3: "FRA",
  title: "France",
  value: "France"
}, {
  code: "GF",
  code3: "GUF",
  title: "French Guiana",
  value: "French Guiana"
}, {
  code: "PF",
  code3: "PYF",
  title: "French Polynesia",
  value: "French Polynesia"
}, {
  code: "TF",
  code3: "ATF",
  title: "French Southern Territories (the)",
  value: "French Southern Territories (the)"
}, {
  code: "GA",
  code3: "GAB",
  title: "Gabon",
  value: "Gabon"
}, {
  code: "GM",
  code3: "GMB",
  title: "Gambia (the)",
  value: "Gambia (the)"
}, {
  code: "GE",
  code3: "GEO",
  title: "Georgia",
  value: "Georgia"
}, {
  code: "DE",
  code3: "DEU",
  title: "Germany",
  value: "Germany"
}, {
  code: "GH",
  code3: "GHA",
  title: "Ghana",
  value: "Ghana"
}, {
  code: "GI",
  code3: "GIB",
  title: "Gibraltar",
  value: "Gibraltar"
}, {
  code: "GR",
  code3: "GRC",
  title: "Greece",
  value: "Greece"
}, {
  code: "GL",
  code3: "GRL",
  title: "Greenland",
  value: "Greenland"
}, {
  code: "GD",
  code3: "GRD",
  title: "Grenada",
  value: "Grenada"
}, {
  code: "GP",
  code3: "GLP",
  title: "Guadeloupe",
  value: "Guadeloupe"
}, {
  code: "GU",
  code3: "GUM",
  title: "Guam",
  value: "Guam"
}, {
  code: "GT",
  code3: "GTM",
  title: "Guatemala",
  value: "Guatemala"
}, {
  code: "GG",
  code3: "GGY",
  title: "Guernsey",
  value: "Guernsey"
}, {
  code: "GN",
  code3: "GIN",
  title: "Guinea",
  value: "Guinea"
}, {
  code: "GW",
  code3: "GNB",
  title: "Guinea-Bissau",
  value: "Guinea-Bissau"
}, {
  code: "GY",
  code3: "GUY",
  title: "Guyana",
  value: "Guyana"
}, {
  code: "HT",
  code3: "HTI",
  title: "Haiti",
  value: "Haiti"
}, {
  code: "HM",
  code3: "HMD",
  title: "Heard Island and McDonald Islands",
  value: "Heard Island and McDonald Islands"
}, {
  code: "VA",
  code3: "VAT",
  title: "Holy See (the)",
  value: "Holy See (the)"
}, {
  code: "HN",
  code3: "HND",
  title: "Honduras",
  value: "Honduras"
}, {
  code: "HK",
  code3: "HKG",
  title: "Hong Kong",
  value: "Hong Kong"
}, {
  code: "HU",
  code3: "HUN",
  title: "Hungary",
  value: "Hungary"
}, {
  code: "IS",
  code3: "ISL",
  title: "Iceland",
  value: "Iceland"
}, {
  code: "IN",
  code3: "IND",
  title: "India",
  value: "India"
}, {
  code: "ID",
  code3: "IDN",
  title: "Indonesia",
  value: "Indonesia"
}, {
  code: "IR",
  code3: "IRN",
  title: "Iran (Islamic Republic of)",
  value: "Iran (Islamic Republic of)"
}, {
  code: "IQ",
  code3: "IRQ",
  title: "Iraq",
  value: "Iraq"
}, {
  code: "IE",
  code3: "IRL",
  title: "Ireland",
  value: "Ireland"
}, {
  code: "IM",
  code3: "IMN",
  title: "Isle of Man",
  value: "Isle of Man"
}, {
  code: "IL",
  code3: "ISR",
  title: "Israel",
  value: "Israel"
}, {
  code: "IT",
  code3: "ITA",
  title: "Italy",
  value: "Italy"
}, {
  code: "JM",
  code3: "JAM",
  title: "Jamaica",
  value: "Jamaica"
}, {
  code: "JP",
  code3: "JPN",
  title: "Japan",
  value: "Japan"
}, {
  code: "JE",
  code3: "JEY",
  title: "Jersey",
  value: "Jersey"
}, {
  code: "JO",
  code3: "JOR",
  title: "Jordan",
  value: "Jordan"
}, {
  code: "KZ",
  code3: "KAZ",
  title: "Kazakhstan",
  value: "Kazakhstan"
}, {
  code: "KE",
  code3: "KEN",
  title: "Kenya",
  value: "Kenya"
}, {
  code: "KI",
  code3: "KIR",
  title: "Kiribati",
  value: "Kiribati"
}, {
  code: "KP",
  code3: "PRK",
  title: "Korea (the Democratic People's Republic of)",
  value: "Korea (the Democratic People's Republic of)"
}, {
  code: "KR",
  code3: "KOR",
  title: "Korea (the Republic of)",
  value: "Korea (the Republic of)"
}, {
  code: "KW",
  code3: "KWT",
  title: "Kuwait",
  value: "Kuwait"
}, {
  code: "KG",
  code3: "KGZ",
  title: "Kyrgyzstan",
  value: "Kyrgyzstan"
}, {
  code: "LA",
  code3: "LAO",
  title: "Lao People's Democratic Republic (the)",
  value: "Lao People's Democratic Republic (the)"
}, {
  code: "LV",
  code3: "LVA",
  title: "Latvia",
  value: "Latvia"
}, {
  code: "LB",
  code3: "LBN",
  title: "Lebanon",
  value: "Lebanon"
}, {
  code: "LS",
  code3: "LSO",
  title: "Lesotho",
  value: "Lesotho"
}, {
  code: "LR",
  code3: "LBR",
  title: "Liberia",
  value: "Liberia"
}, {
  code: "LY",
  code3: "LBY",
  title: "Libya",
  value: "Libya"
}, {
  code: "LI",
  code3: "LIE",
  title: "Liechtenstein",
  value: "Liechtenstein"
}, {
  code: "LT",
  code3: "LTU",
  title: "Lithuania",
  value: "Lithuania"
}, {
  code: "LU",
  code3: "LUX",
  title: "Luxembourg",
  value: "Luxembourg"
}, {
  code: "MO",
  code3: "MAC",
  title: "Macao",
  value: "Macao"
}, {
  code: "MG",
  code3: "MDG",
  title: "Madagascar",
  value: "Madagascar"
}, {
  code: "MW",
  code3: "MWI",
  title: "Malawi",
  value: "Malawi"
}, {
  code: "MY",
  code3: "MYS",
  title: "Malaysia",
  value: "Malaysia"
}, {
  code: "MV",
  code3: "MDV",
  title: "Maldives",
  value: "Maldives"
}, {
  code: "ML",
  code3: "MLI",
  title: "Mali",
  value: "Mali"
}, {
  code: "MT",
  code3: "MLT",
  title: "Malta",
  value: "Malta"
}, {
  code: "MH",
  code3: "MHL",
  title: "Marshall Islands (the)",
  value: "Marshall Islands (the)"
}, {
  code: "MQ",
  code3: "MTQ",
  title: "Martinique",
  value: "Martinique"
}, {
  code: "MR",
  code3: "MRT",
  title: "Mauritania",
  value: "Mauritania"
}, {
  code: "MU",
  code3: "MUS",
  title: "Mauritius",
  value: "Mauritius"
}, {
  code: "YT",
  code3: "MYT",
  title: "Mayotte",
  value: "Mayotte"
}, {
  code: "MX",
  code3: "MEX",
  title: "Mexico",
  value: "Mexico"
}, {
  code: "FM",
  code3: "FSM",
  title: "Micronesia (Federated States of)",
  value: "Micronesia (Federated States of)"
}, {
  code: "MD",
  code3: "MDA",
  title: "Moldova (the Republic of)",
  value: "Moldova (the Republic of)"
}, {
  code: "MC",
  code3: "MCO",
  title: "Monaco",
  value: "Monaco"
}, {
  code: "MN",
  code3: "MNG",
  title: "Mongolia",
  value: "Mongolia"
}, {
  code: "ME",
  code3: "MNE",
  title: "Montenegro",
  value: "Montenegro"
}, {
  code: "MS",
  code3: "MSR",
  title: "Montserrat",
  value: "Montserrat"
}, {
  code: "MA",
  code3: "MAR",
  title: "Morocco",
  value: "Morocco"
}, {
  code: "MZ",
  code3: "MOZ",
  title: "Mozambique",
  value: "Mozambique"
}, {
  code: "MM",
  code3: "MMR",
  title: "Myanmar",
  value: "Myanmar"
}, {
  code: "NA",
  code3: "NAM",
  title: "Namibia",
  value: "Namibia"
}, {
  code: "NR",
  code3: "NRU",
  title: "Nauru",
  value: "Nauru"
}, {
  code: "NP",
  code3: "NPL",
  title: "Nepal",
  value: "Nepal"
}, {
  code: "NL",
  code3: "NLD",
  title: "Netherlands (the)",
  value: "Netherlands (the)"
}, {
  code: "NC",
  code3: "NCL",
  title: "New Caledonia",
  value: "New Caledonia"
}, {
  code: "NZ",
  code3: "NZL",
  title: "New Zealand",
  value: "New Zealand"
}, {
  code: "NI",
  code3: "NIC",
  title: "Nicaragua",
  value: "Nicaragua"
}, {
  code: "NE",
  code3: "NER",
  title: "Niger (the)",
  value: "Niger (the)"
}, {
  code: "NG",
  code3: "NGA",
  title: "Nigeria",
  value: "Nigeria"
}, {
  code: "NU",
  code3: "NIU",
  title: "Niue",
  value: "Niue"
}, {
  code: "NF",
  code3: "NFK",
  title: "Norfolk Island",
  value: "Norfolk Island"
}, {
  code: "MP",
  code3: "MNP",
  title: "Northern Mariana Islands (the)",
  value: "Northern Mariana Islands (the)"
}, {
  code: "NO",
  code3: "NOR",
  title: "Norway",
  value: "Norway"
}, {
  code: "OM",
  code3: "OMN",
  title: "Oman",
  value: "Oman"
}, {
  code: "PK",
  code3: "PAK",
  title: "Pakistan",
  value: "Pakistan"
}, {
  code: "PW",
  code3: "PLW",
  title: "Palau",
  value: "Palau"
}, {
  code: "PS",
  code3: "PSE",
  title: "Palestine, State of",
  value: "Palestine, State of"
}, {
  code: "PA",
  code3: "PAN",
  title: "Panama",
  value: "Panama"
}, {
  code: "PG",
  code3: "PNG",
  title: "Papua New Guinea",
  value: "Papua New Guinea"
}, {
  code: "PY",
  code3: "PRY",
  title: "Paraguay",
  value: "Paraguay"
}, {
  code: "PE",
  code3: "PER",
  title: "Peru",
  value: "Peru"
}, {
  code: "PH",
  code3: "PHL",
  title: "Philippines (the)",
  value: "Philippines (the)"
}, {
  code: "PN",
  code3: "PCN",
  title: "Pitcairn",
  value: "Pitcairn"
}, {
  code: "PL",
  code3: "POL",
  title: "Poland",
  value: "Poland"
}, {
  code: "PT",
  code3: "PRT",
  title: "Portugal",
  value: "Portugal"
}, {
  code: "PR",
  code3: "PRI",
  title: "Puerto Rico",
  value: "Puerto Rico"
}, {
  code: "QA",
  code3: "QAT",
  title: "Qatar",
  value: "Qatar"
}, {
  code: "MK",
  code3: "MKD",
  title: "Republic of North Macedonia",
  value: "Republic of North Macedonia"
}, {
  code: "RO",
  code3: "ROU",
  title: "Romania",
  value: "Romania"
}, {
  code: "RU",
  code3: "RUS",
  title: "Russian Federation (the)",
  value: "Russian Federation (the)"
}, {
  code: "RW",
  code3: "RWA",
  title: "Rwanda",
  value: "Rwanda"
}, {
  code: "RE",
  code3: "REU",
  title: "Réunion",
  value: "Réunion"
}, {
  code: "BL",
  code3: "BLM",
  title: "Saint Barthélemy",
  value: "Saint Barthélemy"
}, {
  code: "SH",
  code3: "SHN",
  title: "Saint Helena, Ascension and Tristan da Cunha",
  value: "Saint Helena, Ascension and Tristan da Cunha"
}, {
  code: "KN",
  code3: "KNA",
  title: "Saint Kitts and Nevis",
  value: "Saint Kitts and Nevis"
}, {
  code: "LC",
  code3: "LCA",
  title: "Saint Lucia",
  value: "Saint Lucia"
}, {
  code: "MF",
  code3: "MAF",
  title: "Saint Martin (French part)",
  value: "Saint Martin (French part)"
}, {
  code: "PM",
  code3: "SPM",
  title: "Saint Pierre and Miquelon",
  value: "Saint Pierre and Miquelon"
}, {
  code: "VC",
  code3: "VCT",
  title: "Saint Vincent and the Grenadines",
  value: "Saint Vincent and the Grenadines"
}, {
  code: "WS",
  code3: "WSM",
  title: "Samoa",
  value: "Samoa"
}, {
  code: "SM",
  code3: "SMR",
  title: "San Marino",
  value: "San Marino"
}, {
  code: "ST",
  code3: "STP",
  title: "Sao Tome and Principe",
  value: "Sao Tome and Principe"
}, {
  code: "SA",
  code3: "SAU",
  title: "Saudi Arabia",
  value: "Saudi Arabia"
}, {
  code: "SN",
  code3: "SEN",
  title: "Senegal",
  value: "Senegal"
}, {
  code: "RS",
  code3: "SRB",
  title: "Serbia",
  value: "Serbia"
}, {
  code: "SC",
  code3: "SYC",
  title: "Seychelles",
  value: "Seychelles"
}, {
  code: "SL",
  code3: "SLE",
  title: "Sierra Leone",
  value: "Sierra Leone"
}, {
  code: "SG",
  code3: "SGP",
  title: "Singapore",
  value: "Singapore"
}, {
  code: "SX",
  code3: "SXM",
  title: "Sint Maarten (Dutch part)",
  value: "Sint Maarten (Dutch part)"
}, {
  code: "SK",
  code3: "SVK",
  title: "Slovakia",
  value: "Slovakia"
}, {
  code: "SI",
  code3: "SVN",
  title: "Slovenia",
  value: "Slovenia"
}, {
  code: "SB",
  code3: "SLB",
  title: "Solomon Islands",
  value: "Solomon Islands"
}, {
  code: "SO",
  code3: "SOM",
  title: "Somalia",
  value: "Somalia"
}, {
  code: "ZA",
  code3: "ZAF",
  title: "South Africa",
  value: "South Africa"
}, {
  code: "GS",
  code3: "SGS",
  title: "South Georgia and the South Sandwich Islands",
  value: "South Georgia and the South Sandwich Islands"
}, {
  code: "SS",
  code3: "SSD",
  title: "South Sudan",
  value: "South Sudan"
}, {
  code: "ES",
  code3: "ESP",
  title: "Spain",
  value: "Spain"
}, {
  code: "LK",
  code3: "LKA",
  title: "Sri Lanka",
  value: "Sri Lanka"
}, {
  code: "SD",
  code3: "SDN",
  title: "Sudan (the)",
  value: "Sudan (the)"
}, {
  code: "SR",
  code3: "SUR",
  title: "Surititle",
  value: "Surititle"
}, {
  code: "SJ",
  code3: "SJM",
  title: "Svalbard and Jan Mayen",
  value: "Svalbard and Jan Mayen"
}, {
  code: "SE",
  code3: "SWE",
  title: "Sweden",
  value: "Sweden"
}, {
  code: "CH",
  code3: "CHE",
  title: "Switzerland",
  value: "Switzerland"
}, {
  code: "SY",
  code3: "SYR",
  title: "Syrian Arab Republic",
  value: "Syrian Arab Republic"
}, {
  code: "TW",
  code3: "TWN",
  title: "Taiwan",
  value: "Taiwan"
}, {
  code: "TJ",
  code3: "TJK",
  title: "Tajikistan",
  value: "Tajikistan"
}, {
  code: "TZ",
  code3: "TZA",
  title: "Tanzania, United Republic of",
  value: "Tanzania, United Republic of"
}, {
  code: "TH",
  code3: "THA",
  title: "Thailand",
  value: "Thailand"
}, {
  code: "TL",
  code3: "TLS",
  title: "Timor-Leste",
  value: "Timor-Leste"
}, {
  code: "TG",
  code3: "TGO",
  title: "Togo",
  value: "Togo"
}, {
  code: "TK",
  code3: "TKL",
  title: "Tokelau",
  value: "Tokelau"
}, {
  code: "TO",
  code3: "TON",
  title: "Tonga",
  value: "Tonga"
}, {
  code: "TT",
  code3: "TTO",
  title: "Trinidad and Tobago",
  value: "Trinidad and Tobago"
}, {
  code: "TN",
  code3: "TUN",
  title: "Tunisia",
  value: "Tunisia"
}, {
  code: "TR",
  code3: "TUR",
  title: "Turkey",
  value: "Turkey"
}, {
  code: "TM",
  code3: "TKM",
  title: "Turkmenistan",
  value: "Turkmenistan"
}, {
  code: "TC",
  code3: "TCA",
  title: "Turks and Caicos Islands (the)",
  value: "Turks and Caicos Islands (the)"
}, {
  code: "TV",
  code3: "TUV",
  title: "Tuvalu",
  value: "Tuvalu"
}, {
  code: "UG",
  code3: "UGA",
  title: "Uganda",
  value: "Uganda"
}, {
  code: "UA",
  code3: "UKR",
  title: "Ukraine",
  value: "Ukraine"
}, {
  code: "AE",
  code3: "ARE",
  title: "United Arab Emirates (the)",
  value: "United Arab Emirates (the)"
}, {
  code: "GB",
  code3: "GBR",
  title: "United Kingdom of Great Britain and Northern Ireland (the)",
  value: "United Kingdom of Great Britain and Northern Ireland (the)"
}, {
  code: "UM",
  code3: "UMI",
  title: "United States Minor Outlying Islands (the)",
  value: "United States Minor Outlying Islands (the)"
}, {
  code: "US",
  code3: "USA",
  title: "United States of America (the)",
  value: "United States of America (the)"
}, {
  code: "UY",
  code3: "URY",
  title: "Uruguay",
  value: "Uruguay"
}, {
  code: "UZ",
  code3: "UZB",
  title: "Uzbekistan",
  value: "Uzbekistan"
}, {
  code: "VU",
  code3: "VUT",
  title: "Vanuatu",
  value: "Vanuatu"
}, {
  code: "VE",
  code3: "VEN",
  title: "Venezuela (Bolivarian Republic of)",
  value: "Venezuela (Bolivarian Republic of)"
}, {
  code: "VN",
  code3: "VNM",
  title: "Viet Nam",
  value: "Viet Nam"
}, {
  code: "VG",
  code3: "VGB",
  title: "Virgin Islands (British)",
  value: "Virgin Islands (British)"
}, {
  code: "VI",
  code3: "VIR",
  title: "Virgin Islands (U.S.)",
  value: "Virgin Islands (U.S.)"
}, {
  code: "WF",
  code3: "WLF",
  title: "Wallis and Futuna",
  value: "Wallis and Futuna"
}, {
  code: "EH",
  code3: "ESH",
  title: "Western Sahara",
  value: "Western Sahara"
}, {
  code: "YE",
  code3: "YEM",
  title: "Yemen",
  value: "Yemen"
}, {
  code: "ZM",
  code3: "ZMB",
  title: "Zambia",
  value: "Zambia"
}, {
  code: "ZW",
  code3: "ZWE",
  title: "Zimbabwe",
  value: "Zimbabwe"
}, {
  code: "AX",
  code3: "ALA",
  title: "Åland Islands",
  value: "Åland Islands"
}];

/***/ }),

/***/ 91232:
/*!*****************************************!*\
  !*** ./src/app/common/dataformatter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatData: () => (/* binding */ formatData),
/* harmony export */   formatInstanceData: () => (/* binding */ formatInstanceData),
/* harmony export */   formatVesselToUpload: () => (/* binding */ formatVesselToUpload)
/* harmony export */ });
/* harmony import */ var _backend_api_identity_registry_model_vesselAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../backend-api/identity-registry/model/vesselAttribute */ 16833);
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const formatData = data => {
  const menuData = {}; // Add type annotation for menuData
  for (const key in data) {
    if (key === "attributes") {
      // for vessel
      for (const attr_key in data[key]) {
        const attributeName = camel2snake(data[key][attr_key].attributeName);
        if (Object.values(_backend_api_identity_registry_model_vesselAttribute__WEBPACK_IMPORTED_MODULE_0__.VesselAttribute.AttributeNameEnum).find(e => e === attributeName)) {
          menuData[snake2camel(attributeName)] = data[key][attr_key].attributeValue;
        }
      }
    } else {
      menuData[key] = data[key];
    }
  }
  return menuData;
};
const formatInstanceData = data => {
  const menuData = {}; // Add type annotation for menuData
  for (const key in data) {
    menuData[key] = data[key];
  }
  return menuData;
};
const formatVesselToUpload = vesselData => {
  const attributes = [];
  for (const key in vesselData) {
    const attributeName = camel2snake(key);
    if (Object.values(_backend_api_identity_registry_model_vesselAttribute__WEBPACK_IMPORTED_MODULE_0__.VesselAttribute.AttributeNameEnum).find(e => e === attributeName)) {
      attributes.push({
        createdAt: new Date(),
        updatedAt: new Date(),
        attributeName: attributeName,
        attributeValue: vesselData[key]
      });
      delete vesselData[key];
    }
  }
  vesselData["attributes"] = attributes;
  return vesselData;
};
const snake2camel = input => input.split("-").reduce((res, word, i) => i === 0 ? word.toLowerCase() : `${res}${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`, "");
const camel2snake = str => str.replace(/[A-Z]/g, constter => `-${constter.toLowerCase()}`);

/***/ }),

/***/ 56521:
/*!****************************************!*\
  !*** ./src/app/common/filterObject.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendUpdatedAttributes: () => (/* binding */ appendUpdatedAttributes),
/* harmony export */   filterUndefinedAttributes: () => (/* binding */ filterUndefinedAttributes),
/* harmony export */   migrateVesselAttributes: () => (/* binding */ migrateVesselAttributes)
/* harmony export */ });
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const filterUndefinedAttributes = entity => Object.fromEntries(Object.entries(entity).filter(([key, value]) => value !== undefined && typeof value === 'string' ? value.toString().length > 0 : true));
const appendUpdatedAttributes = (original, updates, attributes) => {
  const updatedItem = {
    ...original
  };
  for (const key in updates) {
    if (attributes.hasOwnProperty(key)) {
      updatedItem[key] = updates[key];
    }
  }
  return updatedItem;
};
const migrateVesselAttributes = item => {
  return {
    ...item,
    ...item.attributes.reduce((acc, attr) => ({
      ...acc,
      [attr.attributeName.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
      })]: attr.attributeValue
    }), {})
  };
};

/***/ }),

/***/ 42780:
/*!********************************************!*\
  !*** ./src/app/common/itemPreprocessor.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preprocess: () => (/* binding */ preprocess),
/* harmony export */   preprocessToShow: () => (/* binding */ preprocessToShow),
/* harmony export */   preprocessToUpload: () => (/* binding */ preprocessToUpload)
/* harmony export */ });
/* harmony import */ var _columnForMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columnForMenu */ 71832);
/* harmony import */ var _dataformatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataformatter */ 91232);
/* harmony import */ var _filterObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterObject */ 56521);
/* harmony import */ var _menuType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menuType */ 82287);
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




const preprocess = (item, itemType) => {
  if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_3__.ItemType.Vessel) {
    return (0,_filterObject__WEBPACK_IMPORTED_MODULE_2__.migrateVesselAttributes)(item);
  } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_3__.ItemType.Instance) {
    // when we receive the data from the backend, we need to convert the array to object for serviceType and dataProductType
    // store the list of values
    let serviceTypeStringArray = item.serviceTypes;
    let dataProductTypeStringArray = item.dataProductType;
    console.log("preprocess instance", item);
    console.log("item.serviceTypes is ", item.serviceTypes);
    if (item.serviceTypes && !Array.isArray(item.serviceTypes) || !item.serviceTypes.every(type => typeof type === 'string')) {
      // if the serviceType is already an array of object, we convert it to an array of string
      serviceTypeStringArray = item.serviceTypes.map(e => e.value);
    } else if (item.serviceTypes) {
      // if the serviceType is an array of string, we convert it to an array of object
      // then convert the array of string to object
      serviceTypeStringArray = item.serviceTypes; // save this for later
      // actual conversion
      item.serviceTypes = item.serviceTypes ? Array.isArray(item.serviceTypes) ? item.serviceTypes.map(_serviceType => {
        const filtered = _columnForMenu__WEBPACK_IMPORTED_MODULE_0__.ColumnForResource[itemType].serviceType.options.filter(o => o.value === _serviceType);
        // if we don't find the value, we set it to other
        return filtered.length > 0 ? filtered.pop() : {
          value: _serviceType,
          title: 'Other'
        };
      }) : [] : [];
    } else {
      serviceTypeStringArray = [];
    }
    if (item.dataProductType && !Array.isArray(item.dataProductType) || !item.dataProductType.every(type => typeof type === 'string')) {
      // if the dataProductType is already an array of object, we convert it to an array of string
      dataProductTypeStringArray = item.dataProductType.map(e => e.value);
    } else if (item.dataProductType) {
      // if the dataProductType is an array of string, we convert it to an array of object
      // then convert the array of string to object
      dataProductTypeStringArray = item.dataProductType; // save this for later
      // actual conversion
      item.dataProductType = item.dataProductType ? Array.isArray(item.dataProductType) ? item.dataProductType.map(_dataProductType => {
        const filtered = _columnForMenu__WEBPACK_IMPORTED_MODULE_0__.ColumnForResource[itemType].dataProductType.options.filter(o => o.value === _dataProductType);
        // if we don't find the value, we set it to other
        return filtered.length > 0 ? filtered.pop() : {
          value: _dataProductType,
          title: 'Other'
        };
      }) : [] : [];
    } else {
      dataProductTypeStringArray = [];
    }
    item.keywords = item.keywords ? item.keywords.filter(e => e.length > 0) : [];
    return {
      ...item,
      serviceTypeValue: serviceTypeStringArray ? Array.isArray(serviceTypeStringArray) ? serviceTypeStringArray.join(", ") : serviceTypeStringArray : "",
      dataProductTypeValue: dataProductTypeStringArray ? Array.isArray(dataProductTypeStringArray) ? dataProductTypeStringArray.join(", ") : dataProductTypeStringArray : ""
    };
  }
  return item;
};
const preprocessToUpload = (item, itemType) => {
  if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_3__.ItemType.Vessel) {
    return (0,_dataformatter__WEBPACK_IMPORTED_MODULE_1__.formatVesselToUpload)(item);
  } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_3__.ItemType.Instance) {
    return {
      ...item,
      dataProductType: item["dataProductType"] && Array.isArray(item["dataProductType"]) ? item["dataProductType"].map(d => d.value).filter(d => d !== undefined) : [],
      serviceType: item["serviceType"] && Array.isArray(item["serviceType"]) ? item["serviceType"].map(d => d.value).filter(d => d !== undefined) : [],
      instanceAsDoc: typeof item.instanceAsDoc === 'string' ? null : item.instanceAsDoc,
      instanceAsXml: typeof item.instanceAsXml === 'string' ? null : item.instanceAsXml,
      comment: item.comment ? item.comment : '',
      keywords: typeof item.keywords === 'string' ? item.keywords.length > 0 ? item.keywords.split(",") : [] : item.keywords
    };
  }
  return item;
};
const preprocessToShow = (item, itemType) => {
  if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_3__.ItemType.Instance) {
    item.instanceAsDocName = item.instanceAsDoc ? '' : undefined;
    if (!item.instanceAsXmlName || item.instanceAsXmlName.length === 0) {
      item.instanceAsXmlName = item.instanceAsXml ? '' : undefined;
    }
  }
  return item;
};

/***/ }),

/***/ 82287:
/*!************************************!*\
  !*** ./src/app/common/menuType.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityType: () => (/* binding */ EntityType),
/* harmony export */   EntityTypes: () => (/* binding */ EntityTypes),
/* harmony export */   ItemType: () => (/* binding */ ItemType),
/* harmony export */   MCPComponentContext: () => (/* binding */ MCPComponentContext),
/* harmony export */   MIRItemType: () => (/* binding */ MIRItemType),
/* harmony export */   MenuTypeIconNames: () => (/* binding */ MenuTypeIconNames),
/* harmony export */   MenuTypeNames: () => (/* binding */ MenuTypeNames),
/* harmony export */   MrnAttributeInMSR: () => (/* binding */ MrnAttributeInMSR),
/* harmony export */   itemTypeToString: () => (/* binding */ itemTypeToString),
/* harmony export */   timestampKeys: () => (/* binding */ timestampKeys)
/* harmony export */ });
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * enum for menu types being used for routing
 */
var ItemType;
(function (ItemType) {
  ItemType["None"] = "none";
  ItemType["Device"] = "device";
  ItemType["Organization"] = "organization";
  ItemType["Service"] = "service";
  ItemType["User"] = "user";
  ItemType["Vessel"] = "vessel";
  ItemType["MMS"] = "mms";
  ItemType["Role"] = "role";
  ItemType["Agent"] = "agent";
  ItemType["Instance"] = "instance";
  ItemType["Design"] = "design";
  ItemType["InstanceOfOrg"] = "instanceorg";
  ItemType["OrgCandidate"] = "orgcandidate";
  ItemType["LedgerInstance"] = "ledgerInstance";
  ItemType["Certificate"] = "certificate";
  ItemType["SearchObjectResult"] = "searchobjectresult";
})(ItemType || (ItemType = {}));
/**
 * scope of resource type in MIR
 */
const MIRItemType = [ItemType.Device, ItemType.Vessel, ItemType.User, ItemType.Service, ItemType.Role, ItemType.Agent];
const timestampKeys = ['start', 'end', 'revokedAt', 'createdAt', 'updatedAt'];
/**
 * enum of MCP entity types. Entity is a subset of resource.
 */
var EntityType;
(function (EntityType) {
  EntityType["Device"] = "device";
  EntityType["Organization"] = "organization";
  EntityType["Service"] = "service";
  EntityType["User"] = "user";
  EntityType["Vessel"] = "vessel";
  EntityType["MMS"] = "mms";
})(EntityType || (EntityType = {}));
var MrnAttributeInMSR;
(function (MrnAttributeInMSR) {
  MrnAttributeInMSR["Instance"] = "instanceId";
  MrnAttributeInMSR["Design"] = "implementsServiceDesign";
})(MrnAttributeInMSR || (MrnAttributeInMSR = {}));
var MCPComponentContext;
(function (MCPComponentContext) {
  MCPComponentContext["MIR"] = "MIR";
  MCPComponentContext["MSR"] = "MSR";
})(MCPComponentContext || (MCPComponentContext = {}));
/**
 * scope of MCP entity types
 */
const EntityTypes = [EntityType.Device, EntityType.Organization, EntityType.Service, EntityType.User, EntityType.Vessel, EntityType.MMS];
/**
 * readable names for MenuTypes
 */
const MenuTypeNames = {
  vessel: 'vessel',
  device: 'device',
  user: 'user',
  organization: 'organization',
  service: 'service',
  role: 'role',
  agent: 'agent',
  mms: 'mms',
  instance: 'service instance',
  instanceorg: 'service instance',
  orgcandidate: 'unapproved organization',
  orgsvc: 'owned service'
};
/**
 * icon names for each MenuType
 */
const MenuTypeIconNames = {
  vessel: 'ship',
  device: 'hdd',
  user: 'user',
  organization: 'flag',
  service: 'cog',
  role: 'id-badge',
  agent: 'user',
  mms: 'forward',
  instance: 'compass',
  instanceorg: 'compass',
  orgcandidate: 'clipboard'
};
const capitalize = s => s[0].toUpperCase() + s.slice(1);
const itemTypeToString = itemType => {
  if (itemType === ItemType.Instance || itemType === ItemType.SearchObjectResult) {
    return 'Service instance';
  } else if (itemType === ItemType.OrgCandidate) {
    return 'Organization candidate';
  }
  return capitalize(itemType.toString());
};

/***/ }),

/***/ 84192:
/*!*******************************************************!*\
  !*** ./src/app/common/shared/item-manager.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemManagerService: () => (/* binding */ ItemManagerService)
/* harmony export */ });
/* harmony import */ var _home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 4383);
/* harmony import */ var _menuType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menuType */ 82287);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 96321);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68011);
/* harmony import */ var src_app_backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/backend-api/identity-registry */ 68937);
/* harmony import */ var _itemPreprocessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../itemPreprocessor */ 42780);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 68947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17858);
/* harmony import */ var src_app_backend_api_service_registry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/backend-api/service-registry */ 65392);
/* harmony import */ var src_app_backend_api_secom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/backend-api/secom */ 77410);











class ItemManagerService {
  constructor(deviceService, organizationService, userService, serviceService, vesselService, roleService, instanceService, secomService, xmlService, pingService, http) {
    var _this = this;
    this.deviceService = deviceService;
    this.organizationService = organizationService;
    this.userService = userService;
    this.serviceService = serviceService;
    this.vesselService = vesselService;
    this.roleService = roleService;
    this.instanceService = instanceService;
    this.secomService = secomService;
    this.xmlService = xmlService;
    this.pingService = pingService;
    this.http = http;
    this.rolesInOrg = [];
    this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders();
    this.checkMsrAvailability = /*#__PURE__*/(0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.pingService.v2PingGet('response'));
        console.log("stauts code from ping msr: ", res.status);
        return res.status === 200;
      } catch (e) {
        console.error('MSR not available:', e);
        return false;
      }
    });
    this.fetchListOfData = /*#__PURE__*/function () {
      var _ref2 = (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (itemType, orgMrn, pageNumber, elementsPerPage, secomSearchFilterobj, xactId) {
        let page;
        if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Instance) {
          page = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.instanceService.getInstances(pageNumber, elementsPerPage, [], 'response'));
          const totalElements = parseInt(page.headers.get('X-Total-Count')) || 0;
          return {
            data: page.body.map(i => (0,_itemPreprocessor__WEBPACK_IMPORTED_MODULE_3__.preprocess)(i, itemType)),
            totalPages: Math.ceil(totalElements / elementsPerPage),
            totalElements
          };
        } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.SearchObjectResult && secomSearchFilterobj) {
          page = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.secomService.search(secomSearchFilterobj, 'response'));
          const newXactId = page.body?.transactionId ?? undefined;
          const totalElements = parseInt(page.headers.get('X-Total-Count')) || 10;
          console.log("Total elements from header: ", page.body?.services.length);
          return {
            data: (page.body?.services).map(i => (0,_itemPreprocessor__WEBPACK_IMPORTED_MODULE_3__.preprocess)(i, itemType)),
            totalPages: Math.ceil(totalElements / elementsPerPage),
            totalElements,
            transactionId: newXactId
          };
          // Case: we want to call retrievereults with xactId only
        } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.SearchObjectResult && xactId) {
          page = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.secomService.v2RetrieveResultsTransactionIdGet(xactId, 'response'));
          const services = page.body?.services ?? [];
          const totalHeader = page.headers.get('X-Total-Count');
          const totalElements = (totalHeader ? parseInt(totalHeader, 10) : services.length) || 0;
          return {
            data: services.map(i => (0,_itemPreprocessor__WEBPACK_IMPORTED_MODULE_3__.preprocess)(i, itemType)),
            totalPages: Math.ceil(totalElements / elementsPerPage || 1),
            totalElements
          };
        } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Device) {
          page = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.deviceService.getOrganizationDevices(orgMrn, pageNumber, elementsPerPage));
        } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Organization) {
          page = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.organizationService.getOrganization(pageNumber, elementsPerPage));
        } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.User) {
          page = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.userService.getOrganizationUsers(orgMrn, pageNumber, elementsPerPage));
        } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Service) {
          page = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.serviceService.getOrganizationServices(orgMrn, pageNumber, elementsPerPage));
        } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Vessel) {
          page = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.vesselService.getOrganizationVessels(orgMrn, pageNumber, elementsPerPage));
        } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.OrgCandidate) {
          page = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.organizationService.getUnapprovedOrganizations(pageNumber, elementsPerPage));
        } else {
          throw new Error('Invalid entity type');
        }
        return {
          data: Array.isArray(page) ? page.map(i => (0,_itemPreprocessor__WEBPACK_IMPORTED_MODULE_3__.preprocess)(i, itemType)) : page.content.map(i => (0,_itemPreprocessor__WEBPACK_IMPORTED_MODULE_3__.preprocess)(i, itemType)),
          totalPages: page.totalPages,
          totalElements: page.totalElements
        };
      });
      return function (_x, _x2, _x3, _x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.fetchAllRolesInOrg = /*#__PURE__*/function () {
      var _ref3 = (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (orgMrn) {
        return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.roleService.getRoles(orgMrn));
      });
      return function (_x7) {
        return _ref3.apply(this, arguments);
      };
    }();
    this.fetchMyRolesInOrg = /*#__PURE__*/function () {
      var _ref4 = (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (orgMrn) {
        if (_this.rolesInOrg.length === 0) {
          const roles = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.roleService.getMyRole(orgMrn));
          _this.rolesInOrg = roles.map(role => role);
        }
        return _this.rolesInOrg;
      });
      return function (_x8) {
        return _ref4.apply(this, arguments);
      };
    }();
    this.clearRolesContext = () => {
      this.rolesInOrg = [];
    };
    this.fetchSingleData = /*#__PURE__*/function () {
      var _ref5 = (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (itemType, orgMrn, id, instanceVersion) {
        try {
          let item;
          if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Device) {
            item = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.deviceService.getDevice(orgMrn, id));
          } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Organization) {
            item = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.organizationService.getOrganization1(id));
          } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.User) {
            item = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.userService.getUser(orgMrn, id));
          } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Service) {
            if (instanceVersion && instanceVersion.length > 0) {
              item = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.serviceService.getServiceVersion(orgMrn, id, instanceVersion));
            } else {
              item = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.serviceService.getService(orgMrn, id));
            }
          } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Vessel) {
            item = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.vesselService.getVessel(orgMrn, id));
          } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Role) {
            item = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.roleService.getRole(orgMrn, parseInt(id)));
          } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Instance && instanceVersion) {
            item = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.instanceService.getInstanceByMRNAndVersion(id, instanceVersion));
          } else {
            return {};
          }
          return (0,_itemPreprocessor__WEBPACK_IMPORTED_MODULE_3__.preprocess)(item, itemType);
        } catch (error) {
          console.error('Error fetching data:', error);
          return {};
        }
      });
      return function (_x9, _x10, _x11, _x12) {
        return _ref5.apply(this, arguments);
      };
    }();
    this.registerData = (itemType, body, orgMrn) => {
      if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.User) {
        return this.userService.createUser(body, orgMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Device) {
        return this.deviceService.createDevice(body, orgMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Vessel) {
        return this.vesselService.createVessel(body, orgMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Service) {
        return this.serviceService.createService(body, orgMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Organization) {
        return this.organizationService.applyOrganization(body);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Role) {
        return this.roleService.createRole(body, orgMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Instance) {
        return this.instanceService.createInstance(body);
      }
      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable();
    };
    this.updateData = (itemType, body, orgMrn, entityMrn, version, numberId) => {
      if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.User) {
        return this.userService.updateUser(body, orgMrn, entityMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Device) {
        return this.deviceService.updateDevice(body, orgMrn, entityMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Vessel) {
        return this.vesselService.updateVessel(body, orgMrn, entityMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Service) {
        if (version) {
          return this.serviceService.updateService(body, orgMrn, entityMrn, version);
        } else {
          return this.serviceService.updateService1(body, orgMrn, entityMrn);
        }
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Organization || itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.OrgCandidate) {
        return this.organizationService.updateOrganization(body, entityMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Role && numberId) {
        return this.roleService.updateRole(body, orgMrn, numberId);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Instance && numberId) {
        return this.instanceService.updateInstance(Object.assign({}, body, {
          id: numberId
        }), numberId);
      }
      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable();
    };
    this.deleteData = (itemType, orgMrn, entityMrn, version, numberId) => {
      if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.User) {
        return this.userService.deleteUser(orgMrn, entityMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Device) {
        return this.deviceService.deleteDevice(orgMrn, entityMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Vessel) {
        return this.vesselService.deleteVessel(orgMrn, entityMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Service) {
        if (version) {
          return this.serviceService.deleteService(orgMrn, entityMrn, version);
        } else {
          return this.serviceService.deleteService1(orgMrn, entityMrn);
        }
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Organization || itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.OrgCandidate) {
        return this.organizationService.deleteOrg(entityMrn);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Role && numberId) {
        return this.roleService.deleteRole(orgMrn, numberId);
      } else if (itemType === _menuType__WEBPACK_IMPORTED_MODULE_1__.ItemType.Instance && numberId) {
        return this.instanceService.deleteInstance(numberId);
      }
      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable();
    };
    this.migrate = (newServiceMrn, orgMrn, serviceMrn, instanceVersion) => {
      return this.serviceService.migrateServiceMrn({
        mrn: newServiceMrn
      }, orgMrn, serviceMrn, instanceVersion);
    };
    this.approve = orgMrn => {
      return this.organizationService.approveOrganization(orgMrn);
    };
    this.createRole = (role, orgMrn) => {
      return this.roleService.createRole(role, orgMrn);
    };
    this.createUser = (user, orgMrn) => {
      return this.userService.createUser(user, orgMrn);
    };
    this.verifyG1128Xml = xml => {
      return this.xmlService.validateXmlWithG1128Schema(xml, 'INSTANCE');
    };
    this.createXml = xmlDto => {
      return this.xmlService.createXml(xmlDto);
    };
    this.updateXml = (xmlDto, id) => {
      return this.xmlService.updateXml(xmlDto, id);
    };
  }
  //Checks API availability through the OpenAPI spec
  checkMirAvailability(url) {
    var _this2 = this;
    return (0,_home_oliver_IdeaProjects_management_portal_clr_node_modules_pnpm_babel_runtime_7_25_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const headers = _this2.defaultHeaders.set('Accept', '*/*');
        const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this2.http.get(url, {
          headers,
          withCredentials: false
        }));
        return !!response?.info?.version;
      } catch (error) {
        return false;
      }
    })();
  }
  static #_ = this.ɵfac = function ItemManagerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ItemManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__.DeviceControllerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__.OrganizationControllerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__.UserControllerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__.ServiceControllerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__.VesselControllerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_backend_api_identity_registry__WEBPACK_IMPORTED_MODULE_2__.RoleControllerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_backend_api_service_registry__WEBPACK_IMPORTED_MODULE_4__.InstanceControllerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_backend_api_secom__WEBPACK_IMPORTED_MODULE_5__.SECOMService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_backend_api_service_registry__WEBPACK_IMPORTED_MODULE_4__.XmlControllerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_backend_api_secom__WEBPACK_IMPORTED_MODULE_5__.PingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: ItemManagerService,
    factory: ItemManagerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 43277:
/*!*****************************************!*\
  !*** ./src/app/common/timeConverter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTime: () => (/* binding */ convertTime)
/* harmony export */ });
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const convertTime = s => {
  return new Date(s).toLocaleString();
};

/***/ }),

/***/ 58386:
/*!***********************************!*\
  !*** ./src/app/common/version.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mpVersion: () => (/* binding */ mpVersion)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../package.json */ 8330);

const mpVersion = _package_json__WEBPACK_IMPORTED_MODULE_0__.version;

/***/ }),

/***/ 45824:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/*
 * Copyright (c) 2025 Maritime Connectivity Platform Consortium
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const environment = {
  production: false,
  irBasePath: 'https://test-api.maritimeconnectivity.net',
  irProvider: 'MCP Consortium',
  irContact: 'info@maritimeconnectivity.net',
  oidcBasePath: 'https://test-maritimeid.maritimeconnectivity.net',
  hasServiceRegistry: true,
  srBasePath: 'https://msr-test.maritimeconnectivity.net',
  srProvider: 'MCP Consortium',
  srContact: 'info@maritimeconnectivity.net',
  hasMSRLedger: false,
  ledgerPath: 'https://test-ledger.maritimeconnectivity.net',
  mpProvider: 'MCP Consortium',
  mpContact: 'info@maritimeconnectivity.net',
  environmentTitle: 'MCC Testbed TEST',
  mpName: 'MCC MCP Testbed',
  mpYear: '2025',
  termsOfUse: 'By applying for access to the MCP testbed, you agree not to store any personal information on the platform such as names and email addresses. Please use generic names, such as \'John Doe\' and generic email addresses such as \'info@company.com\'. It does need to be a working email address though, since access will be granted through this email address. Furthermore, if anyone chooses to federate an identity registry into the MCP testbed, this should only contain test data - not actual personal information. This is due to the European Union General Data Protection Regulation (GDPR). For more information, contact the MCC secretariat.',
  idpNamespace: 'mcc-test',
  environmentName: 'test',
  footerName: 'Maritime Connectivity Platform Consortium',
  footerLink: 'https://maritimeconnectivity.net',
  logoImg: 'assets/images/logo.svg',
  loginBgImg: ''
};

/***/ }),

/***/ 76525:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 59851);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 86763);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 15418:
/*!************************************!*\
  !*** ./src/assets/js/wasm_exec.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Copyright 2018 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.



var _asyncToGenerator = (__webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/asyncToGenerator.js */ 61417)["default"]);
(() => {
  const enosys = () => {
    const err = new Error("not implemented");
    err.code = "ENOSYS";
    return err;
  };
  if (!globalThis.fs) {
    let outputBuf = "";
    globalThis.fs = {
      constants: {
        O_WRONLY: -1,
        O_RDWR: -1,
        O_CREAT: -1,
        O_TRUNC: -1,
        O_APPEND: -1,
        O_EXCL: -1,
        O_DIRECTORY: -1
      },
      // unused
      writeSync(fd, buf) {
        outputBuf += decoder.decode(buf);
        const nl = outputBuf.lastIndexOf("\n");
        if (nl != -1) {
          console.log(outputBuf.substring(0, nl));
          outputBuf = outputBuf.substring(nl + 1);
        }
        return buf.length;
      },
      write(fd, buf, offset, length, position, callback) {
        if (offset !== 0 || length !== buf.length || position !== null) {
          callback(enosys());
          return;
        }
        const n = this.writeSync(fd, buf);
        callback(null, n);
      },
      chmod(path, mode, callback) {
        callback(enosys());
      },
      chown(path, uid, gid, callback) {
        callback(enosys());
      },
      close(fd, callback) {
        callback(enosys());
      },
      fchmod(fd, mode, callback) {
        callback(enosys());
      },
      fchown(fd, uid, gid, callback) {
        callback(enosys());
      },
      fstat(fd, callback) {
        callback(enosys());
      },
      fsync(fd, callback) {
        callback(null);
      },
      ftruncate(fd, length, callback) {
        callback(enosys());
      },
      lchown(path, uid, gid, callback) {
        callback(enosys());
      },
      link(path, link, callback) {
        callback(enosys());
      },
      lstat(path, callback) {
        callback(enosys());
      },
      mkdir(path, perm, callback) {
        callback(enosys());
      },
      open(path, flags, mode, callback) {
        callback(enosys());
      },
      read(fd, buffer, offset, length, position, callback) {
        callback(enosys());
      },
      readdir(path, callback) {
        callback(enosys());
      },
      readlink(path, callback) {
        callback(enosys());
      },
      rename(from, to, callback) {
        callback(enosys());
      },
      rmdir(path, callback) {
        callback(enosys());
      },
      stat(path, callback) {
        callback(enosys());
      },
      symlink(path, link, callback) {
        callback(enosys());
      },
      truncate(path, length, callback) {
        callback(enosys());
      },
      unlink(path, callback) {
        callback(enosys());
      },
      utimes(path, atime, mtime, callback) {
        callback(enosys());
      }
    };
  }
  if (!globalThis.process) {
    globalThis.process = {
      getuid() {
        return -1;
      },
      getgid() {
        return -1;
      },
      geteuid() {
        return -1;
      },
      getegid() {
        return -1;
      },
      getgroups() {
        throw enosys();
      },
      pid: -1,
      ppid: -1,
      umask() {
        throw enosys();
      },
      cwd() {
        throw enosys();
      },
      chdir() {
        throw enosys();
      }
    };
  }
  if (!globalThis.path) {
    globalThis.path = {
      resolve(...pathSegments) {
        return pathSegments.join("/");
      }
    };
  }
  if (!globalThis.crypto) {
    throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
  }
  if (!globalThis.performance) {
    throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
  }
  if (!globalThis.TextEncoder) {
    throw new Error("globalThis.TextEncoder is not available, polyfill required");
  }
  if (!globalThis.TextDecoder) {
    throw new Error("globalThis.TextDecoder is not available, polyfill required");
  }
  const encoder = new TextEncoder("utf-8");
  const decoder = new TextDecoder("utf-8");
  globalThis.Go = class {
    constructor() {
      this.argv = ["js"];
      this.env = {};
      this.exit = code => {
        if (code !== 0) {
          console.warn("exit code:", code);
        }
      };
      this._exitPromise = new Promise(resolve => {
        this._resolveExitPromise = resolve;
      });
      this._pendingEvent = null;
      this._scheduledTimeouts = new Map();
      this._nextCallbackTimeoutID = 1;
      const setInt64 = (addr, v) => {
        this.mem.setUint32(addr + 0, v, true);
        this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
      };
      const setInt32 = (addr, v) => {
        this.mem.setUint32(addr + 0, v, true);
      };
      const getInt64 = addr => {
        const low = this.mem.getUint32(addr + 0, true);
        const high = this.mem.getInt32(addr + 4, true);
        return low + high * 4294967296;
      };
      const loadValue = addr => {
        const f = this.mem.getFloat64(addr, true);
        if (f === 0) {
          return undefined;
        }
        if (!isNaN(f)) {
          return f;
        }
        const id = this.mem.getUint32(addr, true);
        return this._values[id];
      };
      const storeValue = (addr, v) => {
        const nanHead = 0x7FF80000;
        if (typeof v === "number" && v !== 0) {
          if (isNaN(v)) {
            this.mem.setUint32(addr + 4, nanHead, true);
            this.mem.setUint32(addr, 0, true);
            return;
          }
          this.mem.setFloat64(addr, v, true);
          return;
        }
        if (v === undefined) {
          this.mem.setFloat64(addr, 0, true);
          return;
        }
        let id = this._ids.get(v);
        if (id === undefined) {
          id = this._idPool.pop();
          if (id === undefined) {
            id = this._values.length;
          }
          this._values[id] = v;
          this._goRefCounts[id] = 0;
          this._ids.set(v, id);
        }
        this._goRefCounts[id]++;
        let typeFlag = 0;
        switch (typeof v) {
          case "object":
            if (v !== null) {
              typeFlag = 1;
            }
            break;
          case "string":
            typeFlag = 2;
            break;
          case "symbol":
            typeFlag = 3;
            break;
          case "function":
            typeFlag = 4;
            break;
        }
        this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
        this.mem.setUint32(addr, id, true);
      };
      const loadSlice = addr => {
        const array = getInt64(addr + 0);
        const len = getInt64(addr + 8);
        return new Uint8Array(this._inst.exports.mem.buffer, array, len);
      };
      const loadSliceOfValues = addr => {
        const array = getInt64(addr + 0);
        const len = getInt64(addr + 8);
        const a = new Array(len);
        for (let i = 0; i < len; i++) {
          a[i] = loadValue(array + i * 8);
        }
        return a;
      };
      const loadString = addr => {
        const saddr = getInt64(addr + 0);
        const len = getInt64(addr + 8);
        return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
      };
      const testCallExport = (a, b) => {
        this._inst.exports.testExport0();
        return this._inst.exports.testExport(a, b);
      };
      const timeOrigin = Date.now() - performance.now();
      this.importObject = {
        _gotest: {
          add: (a, b) => a + b,
          callExport: testCallExport
        },
        gojs: {
          // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
          // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
          // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
          // This changes the SP, thus we have to update the SP used by the imported function.

          // func wasmExit(code int32)
          "runtime.wasmExit": sp => {
            sp >>>= 0;
            const code = this.mem.getInt32(sp + 8, true);
            this.exited = true;
            delete this._inst;
            delete this._values;
            delete this._goRefCounts;
            delete this._ids;
            delete this._idPool;
            this.exit(code);
          },
          // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
          "runtime.wasmWrite": sp => {
            sp >>>= 0;
            const fd = getInt64(sp + 8);
            const p = getInt64(sp + 16);
            const n = this.mem.getInt32(sp + 24, true);
            fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
          },
          // func resetMemoryDataView()
          "runtime.resetMemoryDataView": sp => {
            sp >>>= 0;
            this.mem = new DataView(this._inst.exports.mem.buffer);
          },
          // func nanotime1() int64
          "runtime.nanotime1": sp => {
            sp >>>= 0;
            setInt64(sp + 8, (timeOrigin + performance.now()) * 1000000);
          },
          // func walltime() (sec int64, nsec int32)
          "runtime.walltime": sp => {
            sp >>>= 0;
            const msec = new Date().getTime();
            setInt64(sp + 8, msec / 1000);
            this.mem.setInt32(sp + 16, msec % 1000 * 1000000, true);
          },
          // func scheduleTimeoutEvent(delay int64) int32
          "runtime.scheduleTimeoutEvent": sp => {
            sp >>>= 0;
            const id = this._nextCallbackTimeoutID;
            this._nextCallbackTimeoutID++;
            this._scheduledTimeouts.set(id, setTimeout(() => {
              this._resume();
              while (this._scheduledTimeouts.has(id)) {
                // for some reason Go failed to register the timeout event, log and try again
                // (temporary workaround for https://github.com/golang/go/issues/28975)
                console.warn("scheduleTimeoutEvent: missed timeout event");
                this._resume();
              }
            }, getInt64(sp + 8)));
            this.mem.setInt32(sp + 16, id, true);
          },
          // func clearTimeoutEvent(id int32)
          "runtime.clearTimeoutEvent": sp => {
            sp >>>= 0;
            const id = this.mem.getInt32(sp + 8, true);
            clearTimeout(this._scheduledTimeouts.get(id));
            this._scheduledTimeouts.delete(id);
          },
          // func getRandomData(r []byte)
          "runtime.getRandomData": sp => {
            sp >>>= 0;
            crypto.getRandomValues(loadSlice(sp + 8));
          },
          // func finalizeRef(v ref)
          "syscall/js.finalizeRef": sp => {
            sp >>>= 0;
            const id = this.mem.getUint32(sp + 8, true);
            this._goRefCounts[id]--;
            if (this._goRefCounts[id] === 0) {
              const v = this._values[id];
              this._values[id] = null;
              this._ids.delete(v);
              this._idPool.push(id);
            }
          },
          // func stringVal(value string) ref
          "syscall/js.stringVal": sp => {
            sp >>>= 0;
            storeValue(sp + 24, loadString(sp + 8));
          },
          // func valueGet(v ref, p string) ref
          "syscall/js.valueGet": sp => {
            sp >>>= 0;
            const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
            sp = this._inst.exports.getsp() >>> 0; // see comment above
            storeValue(sp + 32, result);
          },
          // func valueSet(v ref, p string, x ref)
          "syscall/js.valueSet": sp => {
            sp >>>= 0;
            Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
          },
          // func valueDelete(v ref, p string)
          "syscall/js.valueDelete": sp => {
            sp >>>= 0;
            Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
          },
          // func valueIndex(v ref, i int) ref
          "syscall/js.valueIndex": sp => {
            sp >>>= 0;
            storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
          },
          // valueSetIndex(v ref, i int, x ref)
          "syscall/js.valueSetIndex": sp => {
            sp >>>= 0;
            Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
          },
          // func valueCall(v ref, m string, args []ref) (ref, bool)
          "syscall/js.valueCall": sp => {
            sp >>>= 0;
            try {
              const v = loadValue(sp + 8);
              const m = Reflect.get(v, loadString(sp + 16));
              const args = loadSliceOfValues(sp + 32);
              const result = Reflect.apply(m, v, args);
              sp = this._inst.exports.getsp() >>> 0; // see comment above
              storeValue(sp + 56, result);
              this.mem.setUint8(sp + 64, 1);
            } catch (err) {
              sp = this._inst.exports.getsp() >>> 0; // see comment above
              storeValue(sp + 56, err);
              this.mem.setUint8(sp + 64, 0);
            }
          },
          // func valueInvoke(v ref, args []ref) (ref, bool)
          "syscall/js.valueInvoke": sp => {
            sp >>>= 0;
            try {
              const v = loadValue(sp + 8);
              const args = loadSliceOfValues(sp + 16);
              const result = Reflect.apply(v, undefined, args);
              sp = this._inst.exports.getsp() >>> 0; // see comment above
              storeValue(sp + 40, result);
              this.mem.setUint8(sp + 48, 1);
            } catch (err) {
              sp = this._inst.exports.getsp() >>> 0; // see comment above
              storeValue(sp + 40, err);
              this.mem.setUint8(sp + 48, 0);
            }
          },
          // func valueNew(v ref, args []ref) (ref, bool)
          "syscall/js.valueNew": sp => {
            sp >>>= 0;
            try {
              const v = loadValue(sp + 8);
              const args = loadSliceOfValues(sp + 16);
              const result = Reflect.construct(v, args);
              sp = this._inst.exports.getsp() >>> 0; // see comment above
              storeValue(sp + 40, result);
              this.mem.setUint8(sp + 48, 1);
            } catch (err) {
              sp = this._inst.exports.getsp() >>> 0; // see comment above
              storeValue(sp + 40, err);
              this.mem.setUint8(sp + 48, 0);
            }
          },
          // func valueLength(v ref) int
          "syscall/js.valueLength": sp => {
            sp >>>= 0;
            setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
          },
          // valuePrepareString(v ref) (ref, int)
          "syscall/js.valuePrepareString": sp => {
            sp >>>= 0;
            const str = encoder.encode(String(loadValue(sp + 8)));
            storeValue(sp + 16, str);
            setInt64(sp + 24, str.length);
          },
          // valueLoadString(v ref, b []byte)
          "syscall/js.valueLoadString": sp => {
            sp >>>= 0;
            const str = loadValue(sp + 8);
            loadSlice(sp + 16).set(str);
          },
          // func valueInstanceOf(v ref, t ref) bool
          "syscall/js.valueInstanceOf": sp => {
            sp >>>= 0;
            this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
          },
          // func copyBytesToGo(dst []byte, src ref) (int, bool)
          "syscall/js.copyBytesToGo": sp => {
            sp >>>= 0;
            const dst = loadSlice(sp + 8);
            const src = loadValue(sp + 32);
            if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
              this.mem.setUint8(sp + 48, 0);
              return;
            }
            const toCopy = src.subarray(0, dst.length);
            dst.set(toCopy);
            setInt64(sp + 40, toCopy.length);
            this.mem.setUint8(sp + 48, 1);
          },
          // func copyBytesToJS(dst ref, src []byte) (int, bool)
          "syscall/js.copyBytesToJS": sp => {
            sp >>>= 0;
            const dst = loadValue(sp + 8);
            const src = loadSlice(sp + 16);
            if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
              this.mem.setUint8(sp + 48, 0);
              return;
            }
            const toCopy = src.subarray(0, dst.length);
            dst.set(toCopy);
            setInt64(sp + 40, toCopy.length);
            this.mem.setUint8(sp + 48, 1);
          },
          "debug": value => {
            console.log(value);
          }
        }
      };
    }
    run(instance) {
      var _this = this;
      return _asyncToGenerator(function* () {
        if (!(instance instanceof WebAssembly.Instance)) {
          throw new Error("Go.run: WebAssembly.Instance expected");
        }
        _this._inst = instance;
        _this.mem = new DataView(_this._inst.exports.mem.buffer);
        _this._values = [
        // JS values that Go currently has references to, indexed by reference id
        NaN, 0, null, true, false, globalThis, _this];
        _this._goRefCounts = new Array(_this._values.length).fill(Infinity); // number of references that Go has to a JS value, indexed by reference id
        _this._ids = new Map([
        // mapping from JS values to reference ids
        [0, 1], [null, 2], [true, 3], [false, 4], [globalThis, 5], [_this, 6]]);
        _this._idPool = []; // unused ids that have been garbage collected
        _this.exited = false; // whether the Go program has exited

        // Pass command line arguments and environment variables to WebAssembly by writing them to the linear memory.
        let offset = 4096;
        const strPtr = str => {
          const ptr = offset;
          const bytes = encoder.encode(str + "\0");
          new Uint8Array(_this.mem.buffer, offset, bytes.length).set(bytes);
          offset += bytes.length;
          if (offset % 8 !== 0) {
            offset += 8 - offset % 8;
          }
          return ptr;
        };
        const argc = _this.argv.length;
        const argvPtrs = [];
        _this.argv.forEach(arg => {
          argvPtrs.push(strPtr(arg));
        });
        argvPtrs.push(0);
        const keys = Object.keys(_this.env).sort();
        keys.forEach(key => {
          argvPtrs.push(strPtr(`${key}=${_this.env[key]}`));
        });
        argvPtrs.push(0);
        const argv = offset;
        argvPtrs.forEach(ptr => {
          _this.mem.setUint32(offset, ptr, true);
          _this.mem.setUint32(offset + 4, 0, true);
          offset += 8;
        });

        // The linker guarantees global data starts from at least wasmMinDataAddr.
        // Keep in sync with cmd/link/internal/ld/data.go:wasmMinDataAddr.
        const wasmMinDataAddr = 4096 + 8192;
        if (offset >= wasmMinDataAddr) {
          throw new Error("total length of command line and environment variables exceeds limit");
        }
        _this._inst.exports.run(argc, argv);
        if (_this.exited) {
          _this._resolveExitPromise();
        }
        yield _this._exitPromise;
      })();
    }
    _resume() {
      if (this.exited) {
        throw new Error("Go program has already exited");
      }
      this._inst.exports.resume();
      if (this.exited) {
        this._resolveExitPromise();
      }
    }
    _makeFuncWrapper(id) {
      const go = this;
      return function () {
        const event = {
          id: id,
          this: this,
          args: arguments
        };
        go._pendingEvent = event;
        go._resume();
        return event.result;
      };
    }
  };
})();

/***/ }),

/***/ 71132:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 26037:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8330:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"management-portal-clr","version":"0.6.8","license":"Apache license 2.0","repository":{"type":"git","url":"git+https://github.com/maritimeconnectivity/management-portal-clr.git"},"bugs":{"url":"https://github.com/maritimeconnectivity/management-portal-clr/issues"},"scripts":{"ng":"ng","start":"ng serve","prebuild":"npm run build:go","build":"ng build","build:go":"cd go && GOOS=js GOARCH=wasm go build -o ../src/assets/wasm/main.wasm && cp $(go env GOROOT)/lib/wasm/wasm_exec.js ../src/assets/js/wasm_exec.js","watch":"ng build --watch --configuration development","test":"ng test","lint":"ng lint"},"private":true,"dependencies":{"@angular/animations":"^18.2.3","@angular/common":"^18.2.3","@angular/compiler":"^18.2.3","@angular/core":"^18.2.3","@angular/forms":"^18.2.3","@angular/platform-browser":"^18.2.3","@angular/platform-browser-dynamic":"^18.2.3","@angular/router":"^18.2.3","@bluehalo/ngx-leaflet":"^18.0.2","@bluehalo/ngx-leaflet-draw":"^18.0.4","@cds/core":"^6.13.0","@clr/angular":"^17.3.0","@clr/icons":"^13.0.2","@clr/ui":"^17.3.0","@ngx-translate/core":"^15.0.0","@ngx-translate/http-loader":"^8.0.0","@swimlane/ngx-charts":"^20.5.0","@terraformer/wkt":"^2.2.1","@turf/boolean-point-in-polygon":"^7.2.0","@turf/turf":"^7.2.0","asn1js":"^3.0.5","d3-scale":"^4.0.2","d3-selection":"^3.0.0","d3-shape":"^3.2.0","file-saver":"^2.0.5","gramli-angular-notifier":"^16.0.2","jszip":"^3.10.1","keycloak-angular":"^16.0.1","keycloak-js":"^25.0.5","leaflet":"^1.9.4","leaflet-draw":"^1.0.2","lucene-query-string-builder":"^1.0.8","rxjs":"~7.8.0","shortid":"^2.2.16","tslib":"^2.3.0","zone.js":"^0.14.10"},"devDependencies":{"@angular-devkit/build-angular":"^18.2.3","@angular/cli":"^18.2.3","@types/d3-scale":"^4.0.8","@types/d3-selection":"^3.0.11","@types/d3-shape":"^3.1.6","@types/file-saver":"^2.0.7","@types/geojson":"^7946.0.14","@types/golang-wasm-exec":"^1.15.2","@types/jasmine":"~4.3.0","@types/leaflet":"^1.9.14","@types/leaflet-draw":"^1.0.11","@types/lucene-query-string-builder":"^1.0.0","@types/terraformer__wkt":"^2.0.3","@types/turf":"^3.5.32","angular-cli-ghpages":"2.0.3","angular-eslint":"18.3.1","eslint":"^9.9.1","jasmine-core":"~4.5.0","karma":"~6.4.0","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.2.0","karma-jasmine":"~5.1.0","karma-jasmine-html-reporter":"~2.0.0","typescript":"~5.5","typescript-eslint":"8.2.0"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(76525)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map