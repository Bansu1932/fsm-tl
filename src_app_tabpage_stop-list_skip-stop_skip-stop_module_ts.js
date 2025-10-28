(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_stop-list_skip-stop_skip-stop_module_ts"],{

/***/ 62500:
/*!*************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/skip-stop/skip-stop-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkipStopPageRoutingModule": () => (/* binding */ SkipStopPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _skip_stop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skip-stop.page */ 45714);




const routes = [
    {
        path: '',
        component: _skip_stop_page__WEBPACK_IMPORTED_MODULE_0__.SkipStopPage
    }
];
let SkipStopPageRoutingModule = class SkipStopPageRoutingModule {
};
SkipStopPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SkipStopPageRoutingModule);



/***/ }),

/***/ 97965:
/*!*****************************************************************!*\
  !*** ./src/app/tabpage/stop-list/skip-stop/skip-stop.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkipStopPageModule": () => (/* binding */ SkipStopPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _skip_stop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skip-stop-routing.module */ 62500);
/* harmony import */ var _skip_stop_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skip-stop.page */ 45714);







let SkipStopPageModule = class SkipStopPageModule {
};
SkipStopPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _skip_stop_routing_module__WEBPACK_IMPORTED_MODULE_0__.SkipStopPageRoutingModule
        ],
        declarations: [_skip_stop_page__WEBPACK_IMPORTED_MODULE_1__.SkipStopPage]
    })
], SkipStopPageModule);



/***/ }),

/***/ 45714:
/*!***************************************************************!*\
  !*** ./src/app/tabpage/stop-list/skip-stop/skip-stop.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkipStopPage": () => (/* binding */ SkipStopPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_skip_stop_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./skip-stop.page.html */ 91649);
/* harmony import */ var _skip_stop_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skip-stop.page.scss */ 84767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/routes.service */ 11763);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);








let SkipStopPage = class SkipStopPage {
    constructor(utilService, routesService, route, router) {
        this.utilService = utilService;
        this.routesService = routesService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.skipstopModel = {
            reason: '',
            comment: '',
        };
        this.route.queryParams.subscribe(params => {
            if (params && params.docNo) {
                this.docNo = params.docNo;
                this.cus_name = params.cus_name;
                this.cus_code = params.cus_code;
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilService.showLoading();
            this.routesService.skipReason().subscribe((resp) => {
                this.skipReasons = resp;
                this.utilService.dismissLoading();
            }, (err) => {
                this.utilService.dismissLoading();
                this.utilService.showErrorCall(err);
            });
        });
    }
    onSubmit(form) {
        this.submitted = true;
        if (form.valid) {
            this.utilService.showConfirmationPopup('Confirmation', 'Are you sure you want to skip this stop.', (cb) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (cb == 1) {
                    this.skipstopModel.doc = this.docNo;
                    this.skipstopModel.latitude = src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService.currentPos.lat;
                    this.skipstopModel.longitude = src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService.currentPos.lng;
                    const datetime = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DDTHH:mm:ss');
                    this.skipstopModel.datetime = datetime;
                    yield this.utilService.showLoading();
                    this.routesService.postSkipRoute(this.skipstopModel).subscribe((resp) => {
                        this.utilService.dismissLoading();
                        // this.updateArray();
                        let routeId = localStorage.getItem('activeRouteId');
                        this.router.navigate(['/tabs/stop-list'], { queryParams: { route: routeId } });
                    }, (err) => {
                        this.utilService.dismissLoading();
                        this.utilService.showErrorCall(err);
                    });
                }
            }));
        }
    }
};
SkipStopPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__.RoutesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
SkipStopPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-skip-stop',
        template: _raw_loader_skip_stop_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_skip_stop_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SkipStopPage);



/***/ }),

/***/ 84767:
/*!*****************************************************************!*\
  !*** ./src/app/tabpage/stop-list/skip-stop/skip-stop.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header-title {\n  display: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraXAtc3RvcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6InNraXAtc3RvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 91649:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabpage/stop-list/skip-stop/skip-stop.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"header-title\">{{ cus_name }} - {{ docNo }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" color=\"tertiary\">\r\n  <form #skipstopForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(skipstopForm)\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-text>\r\n          <h6 class=\"mt-3 pb-1\">Choose a reason</h6>\r\n        </ion-text>\r\n        <ion-item lines=\"full\">\r\n          <ion-label [hidden]=\"skipstopModel.reason\">Select Reason</ion-label>\r\n          <ion-select [ngClass]=\"{'full-width': skipstopModel.reason}\" name=\"reason\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\" [(ngModel)]=\"skipstopModel.reason\"\r\n            #reason=\"ngModel\" required>\r\n            <ion-select-option *ngFor=\"let item of skipReasons\" [value]=\"item.IDENT2_0\">{{ item.TEXTE_0 }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-text *ngIf=\"submitted && reason.invalid\">\r\n          <p class=\"error-msg\" *ngIf=\"reason.invalid && reason.errors.required\">\r\n            Select reason.\r\n          </p>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-text>\r\n          <h6 class=\"mt-3 pb-1\">Why are you skipping this stop?</h6>\r\n        </ion-text>\r\n        <ion-item lines=\"full\">\r\n          <ion-textarea name=\"comment\" placeholder=\"Enter here...\" rows=\"4\" [(ngModel)]=\"skipstopModel.comment\"\r\n            #comment=\"ngModel\" required></ion-textarea>\r\n        </ion-item>\r\n        <ion-text *ngIf=\"submitted && comment.invalid\">\r\n          <p class=\"error-msg\" *ngIf=\"comment.invalid && comment.errors.required\">\r\n            Reason for skipping this stop is required.\r\n          </p>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button type=\"submit\" color=\"warning\" expand=\"block\" shape=\"round\" class=\"mt-3\">\r\n      Skip This Stop\r\n    </ion-button>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_stop-list_skip-stop_skip-stop_module_ts.js.map