(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_tabpage_module_ts"],{

/***/ 19141:
/*!***************************************************!*\
  !*** ./src/app/tabpage/tabpage-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPageRoutingModule": () => (/* binding */ TabPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabpage_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabpage.page */ 56715);




const routes = [
    {
        path: '',
        component: _tabpage_page__WEBPACK_IMPORTED_MODULE_0__.TabPage,
        children: [{
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_tabpage_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 82163)).then(m => m.DashboardPageModule)
            },
            {
                path: 'routes',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabpage_routes_routes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./routes/routes.module */ 69124)).then(m => m.RoutesPageModule)
            },
            {
                path: 'completed-routes',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabpage_completed-routes_completed-routes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./completed-routes/completed-routes.module */ 16116)).then(m => m.CompletedRoutesPageModule)
            },
            {
                path: 'stop-list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("src_app_tabpage_stop-list_stop-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stop-list/stop-list.module */ 81360)).then(m => m.StopListPageModule)
            },
            {
                path: 'map',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tabpage_map_map_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./map/map.module */ 14295)).then(m => m.MapPageModule)
            },
            {
                path: '',
                redirectTo: 'routes',
                pathMatch: 'full'
            }]
    }
];
let TabPageRoutingModule = class TabPageRoutingModule {
};
TabPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabPageRoutingModule);



/***/ }),

/***/ 77582:
/*!*******************************************!*\
  !*** ./src/app/tabpage/tabpage.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPageModule": () => (/* binding */ TabPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tabpage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabpage-routing.module */ 19141);
/* harmony import */ var _tabpage_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabpage.page */ 56715);







let TabPageModule = class TabPageModule {
};
TabPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabpage_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabPageRoutingModule
        ],
        declarations: [_tabpage_page__WEBPACK_IMPORTED_MODULE_1__.TabPage]
    })
], TabPageModule);



/***/ }),

/***/ 56715:
/*!*****************************************!*\
  !*** ./src/app/tabpage/tabpage.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabPage": () => (/* binding */ TabPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabpage_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabpage.page.html */ 19163);
/* harmony import */ var _tabpage_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabpage.page.scss */ 99467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/events */ 20579);





let TabPage = class TabPage {
    constructor(events) {
        this.events = events;
        this.routeId = null;
        this.events.subscribe("routeId:change", (id) => {
            this.routeId = id;
        });
    }
    ngOnInit() {
    }
};
TabPage.ctorParameters = () => [
    { type: _services_events__WEBPACK_IMPORTED_MODULE_2__.Events }
];
TabPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabpage',
        template: _raw_loader_tabpage_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabpage_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabPage);



/***/ }),

/***/ 99467:
/*!*******************************************!*\
  !*** ./src/app/tabpage/tabpage.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-tab-bar {\n  height: 70px;\n}\nion-tab-bar ion-tab-button {\n  background: var(--ion-color-primary-tint);\n}\nion-tab-bar ion-tab-button.tab-selected {\n  background: var(--ion-color-primary-shade);\n}\nion-tab-bar ion-tab-button ion-icon {\n  font-size: 24px;\n}\nion-tab-bar ion-tab-button ion-label {\n  font-size: 14px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKO0FBQ0k7RUFDSSx5Q0FBQTtBQUNSO0FBQ1E7RUFDSSwwQ0FBQTtBQUNaO0FBRVE7RUFDSSxlQUFBO0FBQVo7QUFHUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQURaIiwiZmlsZSI6InRhYnBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1iYXIge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG5cclxuICAgIGlvbi10YWItYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcclxuXHJcbiAgICAgICAgJi50YWItc2VsZWN0ZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 19163:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabpage/tabpage.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n  <ion-tab-bar slot=\"top\" color=\"primary\">\r\n    <ion-tab-button tab=\"routes\">\r\n      <ion-icon name=\"calendar-outline\"></ion-icon>\r\n      <ion-label>Routes</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"map\" [disabled]=\"!routeId\">\r\n      <ion-icon name=\"map-outline\"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"stop-list\" [disabled]=\"!routeId\">\r\n      <ion-icon name=\"list-outline\"></ion-icon>\r\n      <ion-label>Stops</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"completed-routes\">\r\n      <ion-icon name=\"calendar-outline\"></ion-icon>\r\n      <ion-label>Completed Routes</ion-label>\r\n    </ion-tab-button>\r\n    <!-- <ion-tab-button tab=\"dashboard\">\r\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n      <ion-label>Summary</ion-label>\r\n    </ion-tab-button> -->\r\n  </ion-tab-bar>\r\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_tabpage_module_ts.js.map