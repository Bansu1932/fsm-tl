(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_stop-list_stop-detail_pod_pod_module_ts"],{

/***/ 69035:
/*!*************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/pod/pod-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodPageRoutingModule": () => (/* binding */ PodPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pod_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pod.page */ 1034);




const routes = [
    {
        path: '',
        component: _pod_page__WEBPACK_IMPORTED_MODULE_0__.PodPage
    },
    {
        path: 'capture-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-soap___ivy_ngcc___fesm2015_ngx-soap_js"), __webpack_require__.e("src_app_tabpage_stop-list_stop-detail_pod_capture-details_capture-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./capture-details/capture-details.module */ 2533)).then(m => m.CaptureDetailsPageModule)
    }
];
let PodPageRoutingModule = class PodPageRoutingModule {
};
PodPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PodPageRoutingModule);



/***/ }),

/***/ 54562:
/*!*****************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/pod/pod.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodPageModule": () => (/* binding */ PodPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pod_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pod-routing.module */ 69035);
/* harmony import */ var _pod_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pod.page */ 1034);







let PodPageModule = class PodPageModule {
};
PodPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pod_routing_module__WEBPACK_IMPORTED_MODULE_0__.PodPageRoutingModule
        ],
        declarations: [_pod_page__WEBPACK_IMPORTED_MODULE_1__.PodPage]
    })
], PodPageModule);



/***/ }),

/***/ 1034:
/*!***************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/pod/pod.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodPage": () => (/* binding */ PodPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pod_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pod.page.html */ 81694);
/* harmony import */ var _pod_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pod.page.scss */ 23375);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/routes.service */ 11763);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 35758);










let PodPage = class PodPage {
    constructor(routesService, route, utilService, router) {
        this.routesService = routesService;
        this.route = route;
        this.utilService = utilService;
        this.router = router;
        this.pod = [];
        this.podModel = {
            confirm_arrival: '',
            start_unload: '',
            delivery: '',
            end_unload: '',
            departure: ''
        };
        this.route.queryParams.subscribe(params => {
            if (params && params.poddet) {
                this.podId = params.poddet;
                this.getPod();
            }
        });
    }
    ngOnInit() {
    }
    getPod() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let routeId = localStorage.getItem('activeRouteId');
            yield this.utilService.showLoading();
            (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)({
                pod: this.routesService.getPod(this.podId),
                currentStop: this.routesService.getStops(routeId)
            }).subscribe(resp => {
                var _a, _b, _c, _d, _e, _f;
                this.utilService.dismissLoading();
                this.pod = resp.pod;
                this.currentStop = lodash__WEBPACK_IMPORTED_MODULE_5__.find(resp.currentStop, { XDOCNUM_0: this.podId });
                if (((_b = (_a = this.currentStop) === null || _a === void 0 ? void 0 : _a.XARRTIM_0) === null || _b === void 0 ? void 0 : _b.length) > 1) {
                    let arrDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentStop.XARRVDAT_0).format('YYYY-MM-DD');
                    let arrDateTime = new Date(arrDate + ' ' + this.currentStop.XARRTIM_0);
                    this.podModel.confirm_arrival = arrDateTime;
                }
                if (((_c = this.currentStop) === null || _c === void 0 ? void 0 : _c.XSTARTULTIM_0.length) > 1) {
                    let startUnDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentStop.XSTARTULDAT_0).format('YYYY-MM-DD');
                    let startUnDateTime = new Date(startUnDate + ' ' + this.currentStop.XSTARTULTIM_0);
                    this.podModel.start_unload = startUnDateTime;
                }
                if (((_d = this.currentStop) === null || _d === void 0 ? void 0 : _d.XSTATUS_0) == 6) {
                    let deliveredDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentStop.XFINDAT_0).format('YYYY-MM-DD');
                    let deliveredDateTime = new Date(deliveredDate + ' ' + this.currentStop.XFINTIME_0);
                    this.podModel.delivery = 'Delivered';
                    this.deliverDateTime = deliveredDateTime;
                }
                if (((_e = this.currentStop) === null || _e === void 0 ? void 0 : _e.XENDULTIM_0.length) > 1) {
                    let endUnDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentStop.XENDULDAT_0).format('YYYY-MM-DD');
                    let endUnDateTime = new Date(endUnDate + ' ' + this.currentStop.XENDULTIM_0);
                    this.podModel.end_unload = endUnDateTime;
                }
                if (((_f = this.currentStop) === null || _f === void 0 ? void 0 : _f.XDEPTIM_0.length) > 1) {
                    let departureDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.currentStop.XDEPDAT_0).format('YYYY-MM-DD');
                    let departureDateTime = new Date(departureDate + ' ' + this.currentStop.XDEPTIM_0);
                    this.podModel.departure = departureDateTime;
                }
            }, (err) => {
                this.utilService.dismissLoading();
                this.utilService.showErrorCall(err);
            });
        });
    }
    setDate(type) {
        switch (type) {
            case 'confirm_arrival':
                this.updatePODStatus(type);
                break;
            case 'start_unload':
                if (this.podModel.confirm_arrival) {
                    this.updatePODStatus(type);
                }
                else {
                    this.utilService.showToast('Please complete above step first.');
                }
                break;
            case 'end_unload':
                if (this.podModel.delivery && this.podModel.confirm_arrival && this.podModel.start_unload) {
                    this.updatePODStatus(type);
                }
                else {
                    this.utilService.showToast('Please complete above step first.');
                }
                break;
            case 'departure':
                if (this.podModel.delivery && this.podModel.confirm_arrival && this.podModel.start_unload && this.podModel.end_unload) {
                    this.updatePODStatus(type);
                }
                else {
                    this.utilService.showToast('Please complete above step first.');
                }
                break;
        }
    }
    updatePODStatus(type) {
        if (!this.podModel[type]) {
            this.utilService.showConfirmationPopup('Confirmation', 'Are you sure you want to ' + type.replace('_', ' ') + '?', (cb) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                if (cb == 1) {
                    this.postParams = {
                        doc: this.podId,
                        status_type: type,
                        datetime: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DDTHH:mm:ss')
                    };
                    if (type == 'confirm_arrival') {
                        if (src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService.currentPos.lat && src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService.currentPos.lng) {
                            this.postParams.latitude = src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService.currentPos.lat;
                            this.postParams.longitude = src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService.currentPos.lng;
                        }
                        else {
                            this.utilService.showToast();
                            return false;
                        }
                    }
                    if (type == 'confirm_arrival' || type == 'departure') {
                        this.postParams.route_no = localStorage.getItem('activeRouteId');
                    }
                    yield this.utilService.showLoading();
                    this.routesService.postStatus(this.postParams).subscribe((resp) => {
                        this.utilService.dismissLoading();
                        this.podModel[type] = new Date();
                        if (type == 'departure') {
                            this.router.navigate(['/tabs/stop-list']);
                        }
                    }, (err) => {
                        this.utilService.dismissLoading();
                        this.utilService.showErrorCall(err);
                    });
                }
            }));
        }
        else {
            this.utilService.showToast('Already Completed!');
        }
    }
    delivery() {
        // if (this.podModel.start_unload) {
        if (this.currentStop.XSTATUS_0 == 6) {
            this.utilService.showToast('Product already delivered!');
        }
        else {
            const podId = this.podId;
            this.router.navigate(['/tabs/stop-list/stop-detail/pod/capture-details'], { queryParams: { podId } });
        }
        // }
        // else {
        //   this.utilService.showToast('Please complete above step first.');
        // }
    }
};
PodPage.ctorParameters = () => [
    { type: src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_3__.RoutesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
PodPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-pod',
        template: _raw_loader_pod_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pod_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PodPage);



/***/ }),

/***/ 23375:
/*!*****************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/pod/pod.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 81694:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabpage/stop-list/stop-detail/pod/pod.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>POD</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"tertiary\" *ngFor=\"let item of pod\">\r\n  <ion-card class=\"m-3\">\r\n    <ion-card-content class=\"p-2\">\r\n      <table class=\"table table-sm table-borderless mb-0 fs-14\">\r\n        <tr>\r\n          <th>\r\n            <ion-label color=\"primary\">Customer</ion-label>\r\n          </th>\r\n          <td><b>{{ item.XBPCORD_0 }} - {{ item.XBPNAME_0 }}</b></td>\r\n        </tr>\r\n        <tr>\r\n          <th>\r\n            <ion-label color=\"primary\">Document</ion-label>\r\n          </th>\r\n          <td><b>{{ item.XDOCNUM_0 }}</b></td>\r\n        </tr>\r\n        <tr>\r\n          <th>\r\n            <ion-label color=\"primary\">Total Qty</ion-label>\r\n          </th>\r\n          <td><b>{{ (item.TQTY_0)?(item.TQTY_0): '0' }} {{ item.SAU_0 }}</b></td>\r\n        </tr>\r\n        <tr>\r\n          <th>\r\n            <ion-label color=\"primary\">Weight</ion-label>\r\n          </th>\r\n          <td><b>{{ (item.DSPTOTWEI_0)?(item.DSPTOTWEI_0): '0' }} {{ item.DSPWEU_0 }}</b></td>\r\n        </tr>\r\n        <tr>\r\n          <th>\r\n            <ion-label color=\"primary\">Volume</ion-label>\r\n          </th>\r\n          <td><b>{{ (item.DSPTOTVOL_0)?(item.DSPTOTVOL_0): '0' }} {{ item.DSPVOU_0 }}</b></td>\r\n        </tr>\r\n        <!-- <tr>\r\n          <th>ETA</th>\r\n          <td class=\"text-info\"><b>19:27</b></td>\r\n        </tr>\r\n        <tr>\r\n          <th>ETD</th>\r\n          <td class=\"text-info\"><b>19:48</b></td>\r\n        </tr> -->\r\n      </table>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <!-- <ion-card class=\"m-3\">\r\n    <ion-card-content class=\"p-0\">\r\n      <ion-row>\r\n        <ion-col size=\"5\" class=\"ion-text-center bg-light\" (click)=\"setDate('confirm_arrival')\">\r\n          <img src=\"assets/images/arrival.png\" alt=\"\" width=\"40px\">\r\n          <ion-text color=\"primary\">\r\n            <p class=\"pt-1\"><b>Confirm Arrival</b></p>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"7\" class=\"d-flex-center\">\r\n          <ion-chip color=\"success\" *ngIf=\"podModel.confirm_arrival\">\r\n            <ion-label>{{ podModel.confirm_arrival | date: 'dd-MM-yyyy HH:mm' }}</ion-label>\r\n            <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card class=\"m-3\">\r\n    <ion-card-content class=\"p-0\">\r\n      <ion-row>\r\n        <ion-col size=\"5\" class=\"ion-text-center bg-light\" (click)=\"setDate('start_unload')\">\r\n          <img src=\"assets/images/start-unload.png\" alt=\"\" width=\"40px\">\r\n          <ion-text color=\"primary\">\r\n            <p class=\"pt-1\"><b>Start Unload</b></p>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"7\" class=\"d-flex-center\">\r\n          <ion-chip color=\"success\" *ngIf=\"podModel.start_unload\">\r\n            <ion-label> {{ podModel.start_unload | date: 'dd-MM-yyyy HH:mm' }} </ion-label>\r\n            <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card> -->\r\n  <ion-card class=\"m-3\">\r\n    <ion-card-content class=\"p-0\">\r\n      <ion-row>\r\n        <ion-col (click)=\"delivery()\" size=\"5\" class=\"ion-text-center bg-light\">\r\n          <img src=\"assets/images/delivery.png\" alt=\"\" width=\"40px\">\r\n          <ion-text color=\"primary\">\r\n            <p class=\"pt-1\"><b>Delivery</b></p>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"7\" class=\"d-flex-center\">\r\n          <ion-chip color=\"success\" *ngIf=\"podModel.delivery\">\r\n            <ion-label> {{ deliverDateTime | date: 'dd-MM-yyyy HH:mm'}} </ion-label>\r\n            <!-- {{ podModel.delivery }} <br>  -->\r\n            <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <!-- <ion-card class=\"m-3\">\r\n    <ion-card-content class=\"p-0\">\r\n      <ion-row>\r\n        <ion-col size=\"5\" class=\"ion-text-center bg-light\" (click)=\"setDate('end_unload')\">\r\n          <img src=\"assets/images/complete-unload.png\" alt=\"\" width=\"40px\">\r\n          <ion-text color=\"primary\">\r\n            <p class=\"pt-1\"><b>End Unload</b></p>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"7\" class=\"d-flex-center\">\r\n          <ion-chip color=\"success\" *ngIf=\"podModel.end_unload\">\r\n            <ion-label> {{ podModel.end_unload | date: 'dd-MM-yyyy HH:mm' }} </ion-label>\r\n            <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card class=\"m-3\">\r\n    <ion-card-content class=\"p-0\">\r\n      <ion-row>\r\n        <ion-col size=\"5\" class=\"ion-text-center bg-light\" (click)=\"setDate('departure')\">\r\n          <img src=\"assets/images/departure.png\" alt=\"\" width=\"40px\">\r\n          <ion-text color=\"primary\">\r\n            <p class=\"pt-1\"><b>Departure</b></p>\r\n          </ion-text>\r\n        </ion-col>\r\n        <ion-col size=\"7\" class=\"d-flex-center\">\r\n          <ion-chip color=\"success\" *ngIf=\"podModel.departure\">\r\n            <ion-label> {{ podModel.departure | date: 'dd-MM-yyyy HH:mm' }} </ion-label>\r\n            <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n          </ion-chip>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card> -->\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_stop-list_stop-detail_pod_pod_module_ts.js.map