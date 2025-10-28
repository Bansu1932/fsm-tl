(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_stop-list_stop-detail_stop-detail_module_ts"],{

/***/ 31:
/*!******************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/action-popover/action-popover.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionPopoverComponent": () => (/* binding */ ActionPopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_action_popover_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./action-popover.component.html */ 25899);
/* harmony import */ var _action_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action-popover.component.scss */ 37966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ 67241);







let ActionPopoverComponent = class ActionPopoverComponent {
    constructor(router, popoverController, utilService) {
        this.router = router;
        this.popoverController = popoverController;
        this.utilService = utilService;
        this.currentStop = [];
    }
    ngOnInit() {
    }
    showPreview() {
        if (this.status == 6) {
            this.popoverController.dismiss();
            this.router.navigate(['/tabs/stop-list/stop-detail/pod-report'], { queryParams: { podrep: this.stopId } });
        }
        else {
            this.utilService.showToast('First complete product delivery.');
        }
    }
    skipStop() {
        if (this.isActiveStop) {
            this.utilService.showToast('Complete active stop fisrt.');
        }
        else {
            this.popoverController.dismiss();
            this.router.navigate(['/tabs/stop-list/skip-stop'], { queryParams: { docNo: this.stopId, cus_name: this.cus_name, cus_code: this.cus_code } });
        }
    }
    cancelStop() {
        this.popoverController.dismiss();
        this.router.navigate(['/tabs/stop-list/cancel-stop'], { queryParams: { docNo: this.stopId, displayType: "cancelStop", cus_name: this.cus_name, cus_code: this.cus_code } });
    }
    rescheduleStop() {
        this.popoverController.dismiss();
        this.router.navigate(['/tabs/stop-list/cancel-stop'], { queryParams: { docNo: this.stopId, displayType: 'rescheduleStop', cus_name: this.cus_name, cus_code: this.cus_code } });
    }
};
ActionPopoverComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService }
];
ActionPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-action-popover',
        template: _raw_loader_action_popover_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_action_popover_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActionPopoverComponent);



/***/ }),

/***/ 72218:
/*!*****************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/stop-detail-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopDetailPageRoutingModule": () => (/* binding */ StopDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _stop_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stop-detail.page */ 35043);




const routes = [
    {
        path: '',
        component: _stop_detail_page__WEBPACK_IMPORTED_MODULE_0__.StopDetailPage
    },
    {
        path: 'document-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-soap___ivy_ngcc___fesm2015_ngx-soap_js"), __webpack_require__.e("src_app_tabpage_stop-list_stop-detail_document-detail_document-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./document-detail/document-detail.module */ 53372)).then(m => m.DocumentDetailPageModule)
    },
    {
        path: 'pod',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabpage_stop-list_stop-detail_pod_pod_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pod/pod.module */ 54562)).then(m => m.PodPageModule)
    },
    {
        path: 'pod-report',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-soap___ivy_ngcc___fesm2015_ngx-soap_js"), __webpack_require__.e("src_app_tabpage_stop-list_stop-detail_pod-report_pod-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pod-report/pod-report.module */ 7156)).then(m => m.PodReportPageModule)
    }
];
let StopDetailPageRoutingModule = class StopDetailPageRoutingModule {
};
StopDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StopDetailPageRoutingModule);



/***/ }),

/***/ 19109:
/*!*********************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/stop-detail.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopDetailPageModule": () => (/* binding */ StopDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _stop_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stop-detail-routing.module */ 72218);
/* harmony import */ var _stop_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stop-detail.page */ 35043);
/* harmony import */ var _action_popover_action_popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action-popover/action-popover.component */ 31);








let StopDetailPageModule = class StopDetailPageModule {
};
StopDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _stop_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.StopDetailPageRoutingModule
        ],
        declarations: [_stop_detail_page__WEBPACK_IMPORTED_MODULE_1__.StopDetailPage, _action_popover_action_popover_component__WEBPACK_IMPORTED_MODULE_2__.ActionPopoverComponent]
    })
], StopDetailPageModule);



/***/ }),

/***/ 35043:
/*!*******************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/stop-detail.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopDetailPage": () => (/* binding */ StopDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_stop_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stop-detail.page.html */ 42580);
/* harmony import */ var _stop_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stop-detail.page.scss */ 5514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/routes.service */ 11763);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var _map_map_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../map/map.model */ 59937);
/* harmony import */ var _action_popover_action_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-popover/action-popover.component */ 31);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 35758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5304);














let StopDetailPage = class StopDetailPage {
    constructor(popoverController, routesService, route, utilService, router) {
        this.popoverController = popoverController;
        this.routesService = routesService;
        this.route = route;
        this.utilService = utilService;
        this.router = router;
        this.stopsDetails = [];
        this.stopList = [];
        this.isStopActive = false;
        this.route.queryParams.subscribe(params => {
            if (params && params.stop) {
                this.utilService.setStorageData('stopId', params.stop);
                this.stopId = params.stop;
                this.getStopsWithList();
            }
        });
    }
    ngOnInit() { }
    getStopsWithList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            let routeId = localStorage.getItem('activeRouteId');
            yield this.utilService.showLoading();
            (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.forkJoin)({
                stopDetails: this.routesService.getStopsDetails(this.stopId),
                stopList: this.routesService.getStops(routeId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(null)))
            }).subscribe(resp => {
                this.utilService.dismissLoading();
                this.stopsDetails = resp.stopDetails;
                this.initMap();
                const isAnyStopActive = lodash__WEBPACK_IMPORTED_MODULE_7__.filter(resp.stopList, { XISACTIVDOC_0: 2 });
                if (isAnyStopActive.length > 0) {
                    this.isStopActive = true;
                }
                else {
                    this.isStopActive = false;
                }
                this.stopList = lodash__WEBPACK_IMPORTED_MODULE_7__.sortBy(resp.stopList, 'XCSGNUM_0');
                this.selectedStop = lodash__WEBPACK_IMPORTED_MODULE_7__.find(resp.stopList, { XDOCNUM_0: this.stopId });
            }, (err) => {
                this.utilService.dismissLoading();
                this.utilService.showErrorCall(err);
            });
        });
    }
    onPODClick(docNo) {
        var _a, _b;
        const activeStop = ((_a = lodash__WEBPACK_IMPORTED_MODULE_7__.find(this.stopList, { XDOCNUM_0: docNo })) === null || _a === void 0 ? void 0 : _a.XISACTIVDOC_0) == 0;
        if (this.isStopActive && activeStop) {
            this.utilService.showToast('Complete active stop fisrt.');
        }
        else {
            if (((_b = this.selectedStop) === null || _b === void 0 ? void 0 : _b.XCSGNUM_0) > 1) {
                const previousDocNo = this.selectedStop.XCSGNUM_0 - 1;
                let preStop = lodash__WEBPACK_IMPORTED_MODULE_7__.find(this.stopList, { XCSGNUM_0: previousDocNo });
                if (preStop && preStop.XSTATUS_0 !== 5 && preStop.XSTATUS_0 !== 6 && preStop.Sequence === '2') {
                    this.utilService.showToast('Complete above stops first.');
                    return false;
                }
                else {
                    this.router.navigate(['/tabs/stop-list/stop-detail/pod'], { queryParams: { poddet: docNo } });
                }
            }
            else {
                this.router.navigate(['/tabs/stop-list/stop-detail/pod'], { queryParams: { poddet: docNo } });
            }
        }
    }
    startRoute() {
        if (this.selectedStop.XCSGNUM_0 > 1) {
            const previousDocNo = this.selectedStop.XCSGNUM_0 - 1;
            let preStop = lodash__WEBPACK_IMPORTED_MODULE_7__.find(this.stopList, { XCSGNUM_0: previousDocNo });
            if (preStop && preStop.XSTATUS_0 !== 5 && preStop.XSTATUS_0 !== 6 && preStop.Sequence === '2') {
                this.utilService.showToast('Complete above stops first.');
                return false;
            }
            else {
                this.commonStartRouteCheck();
            }
        }
        else {
            this.commonStartRouteCheck();
        }
    }
    commonStartRouteCheck() {
        if (this.selectedStop.XSTATUS_0 == 4 || this.selectedStop.XSTATUS_0 == 6) {
            this.utilService.showToast('Route is already started!');
        }
        else {
            this.utilService.showConfirmationPopup('Confirmation', 'Are you sure you want to start route?', cb => {
                if (cb == 1) {
                    const params = {
                        datetime: moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DDTHH:mm:ss'),
                        doc: this.selectedStop.XDOCNUM_0
                    };
                    this.routesService.getStartRoute(params).subscribe((resp) => {
                        if ((navigator.platform.indexOf("iPhone") != -1) ||
                            (navigator.platform.indexOf("iPad") != -1) ||
                            (navigator.platform.indexOf("iPod") != -1)) {
                            window.open("maps://maps.google.com/maps?daddr=" + this.selectedStop.XX10A_BPGEOY_0 + "," + this.selectedStop.XX10A_BPGEOX_0 + "&amp;ll=");
                        }
                        else {
                            window.open("https://maps.google.com/maps?daddr=" + this.selectedStop.XX10A_BPGEOY_0 + "," + this.selectedStop.XX10A_BPGEOX_0 + "&saddr=Your Location");
                        }
                    }, (err) => {
                        this.utilService.showErrorCall(err);
                    });
                }
            });
        }
    }
    initMap() {
        if (!this.googleMap) {
            this.googleMap = new google.maps.Map(document.getElementById('detailMapCanvas'), {
                mapTypeControl: false,
                streetViewControl: false,
                zoom: 15,
                center: { lat: Number(this.stopsDetails[0].XX10A_BPGEOY_0), lng: Number(this.stopsDetails[0].XX10A_BPGEOX_0) },
                styles: _map_map_model__WEBPACK_IMPORTED_MODULE_4__.MAP_STYLES
            });
            this.marker = new google.maps.Marker({
                map: this.googleMap,
                position: { lat: Number(this.stopsDetails[0].XX10A_BPGEOY_0), lng: Number(this.stopsDetails[0].XX10A_BPGEOX_0) },
                icon: 'assets/images/pin-green.png',
            });
        }
    }
    presentPopover(ev, docNo, cus_name, cus_code) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const activeStop = ((_a = lodash__WEBPACK_IMPORTED_MODULE_7__.find(this.stopList, { XDOCNUM_0: docNo })) === null || _a === void 0 ? void 0 : _a.XISACTIVDOC_0) == 0;
            let checkActiveStop;
            if (this.isStopActive && activeStop) {
                checkActiveStop = true;
            }
            else {
                checkActiveStop = false;
            }
            const popover = yield this.popoverController.create({
                component: _action_popover_action_popover_component__WEBPACK_IMPORTED_MODULE_5__.ActionPopoverComponent,
                event: ev,
                translucent: false,
                componentProps: {
                    status: this.selectedStop.XSTATUS_0,
                    stopId: this.selectedStop.XDOCNUM_0,
                    isActiveStop: checkActiveStop,
                    cus_name: cus_name,
                    cus_code: cus_code
                }
            });
            yield popover.present();
        });
    }
    skipStop(docNo) {
        var _a;
        const activeStop = lodash__WEBPACK_IMPORTED_MODULE_7__.find(this.stopList, { XDOCNUM_0: docNo }).XISACTIVDOC_0 == 0;
        if (this.isStopActive && activeStop) {
            this.utilService.showToast('Complete active stop fisrt.');
        }
        else {
            if (((_a = this.selectedStop) === null || _a === void 0 ? void 0 : _a.XCSGNUM_0) > 1) {
                const previousDocNo = this.selectedStop.XCSGNUM_0 - 1;
                let preStop = lodash__WEBPACK_IMPORTED_MODULE_7__.find(this.stopList, { XCSGNUM_0: previousDocNo });
                if (preStop && preStop.XSTATUS_0 !== 5 && preStop.XSTATUS_0 !== 6 && preStop.Sequence === '2') {
                    this.utilService.showToast('Complete above stops first.');
                    return false;
                }
                else {
                    if (this.selectedStop.XSTATUS_0 == 5 || this.selectedStop.XSTATUS_0 == 6) {
                        this.utilService.showToast('Already skipped!');
                    }
                    else {
                        const docNo = this.stopsDetails[0].XDOCNUM_0;
                        this.router.navigate(['/tabs/stop-list/skip-stop'], { queryParams: { docNo } });
                    }
                }
            }
            else {
                if (this.selectedStop.XSTATUS_0 == 5 || this.selectedStop.XSTATUS_0 == 6) {
                    this.utilService.showToast('Already skipped!');
                }
                else {
                    const docNo = this.stopsDetails[0].XDOCNUM_0;
                    this.router.navigate(['/tabs/stop-list/skip-stop'], { queryParams: { docNo } });
                }
            }
        }
    }
    tel() {
        window.location.href = `tel:${this.stopsDetails[0].XMOB_0}`;
    }
    mail() {
        window.location.href = `mailto:${this.stopsDetails[0].XWEB_0}`;
    }
};
StopDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.PopoverController },
    { type: src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__.RoutesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router }
];
StopDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-stop-detail',
        template: _raw_loader_stop_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stop_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StopDetailPage);



/***/ }),

/***/ 37966:
/*!********************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/action-popover/action-popover.component.scss ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb24tcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 5514:
/*!*********************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/stop-detail.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".map-section {\n  height: 30vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3AtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzdG9wLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLXNlY3Rpb24ge1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG59Il19 */");

/***/ }),

/***/ 25899:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabpage/stop-list/stop-detail/action-popover/action-popover.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-list>\r\n  <ion-item button (click)=\"showPreview()\">Preview / Email</ion-item>\r\n  <ion-item button *ngIf=\"status !== 5 && status !== 6\" (click)=\"skipStop()\">Skip</ion-item>\r\n  <ion-item button *ngIf=\"status !== 6\" (click)=\"cancelStop()\">Cancel</ion-item>\r\n  <ion-item button *ngIf=\"status !== 6\" (click)=\"rescheduleStop()\">Reschedule</ion-item>\r\n  <!-- <ion-item button>Reschedule</ion-item> -->\r\n</ion-list>\r\n");

/***/ }),

/***/ 42580:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabpage/stop-list/stop-detail/stop-detail.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ stopsDetails[0]?.XDOCNUM_0 }}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"presentPopover($event, stopsDetails[0]?.XDOCNUM_0, stopsDetails[0]?.XBPNAME_0, stopsDetails[0]?.XBPCORD_0)\">\r\n        <ion-icon class=\"fs-20\" slot=\"icon-only\" name=\"ellipsis-vertical\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"tertiary\">\r\n  <div id=\"detailMapCanvas\" class=\"map-section\"></div>\r\n  <ion-item color=\"primary\" lines=\"none\" *ngFor=\"let item of stopsDetails\"\r\n    [routerLink]=\"['/tabs/stop-list/stop-detail/document-detail']\" [queryParams]=\"{document: item.XDOCNUM_0}\">\r\n    <ion-icon slot=\"start\" name=\"document-text-outline\"></ion-icon>\r\n    <ion-label>Document Details</ion-label>\r\n  </ion-item>\r\n  <ion-card class=\"m-3\" *ngFor=\"let item of stopsDetails\">\r\n    <ion-card-content class=\"py-2\">\r\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n        <ion-icon slot=\"start\" name=\"home-outline\" color=\"primary\" class=\"fs-20\"></ion-icon>\r\n        <ion-text>\r\n          <p class=\"fs-16\">\r\n            {{ item.XBPCORD_0 }} - {{ item.XBPNAME_0 }}\r\n          </p>\r\n        </ion-text>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n        <ion-icon (click)=\"tel()\" slot=\"start\" name=\"call-outline\" color=\"primary\" class=\"fs-20\"></ion-icon>\r\n        <ion-text>\r\n          <p class=\"fs-16\">{{ (item.XMOB_0)==\" \"? '-': item.XMOB_0 }}</p>\r\n        </ion-text>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n        <ion-icon (click)=\"mail()\" slot=\"start\" name=\"mail-outline\" color=\"primary\" class=\"fs-20\"></ion-icon>\r\n        <ion-text>\r\n          <p class=\"fs-16\">{{ (item.XWEB_0)== \" \"? '-': item.XWEB_0 }}</p>\r\n        </ion-text>\r\n      </ion-item>\r\n      <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n        <ion-icon slot=\"start\" name=\"location-outline\" color=\"primary\" class=\"fs-20\"></ion-icon>\r\n        <ion-text>\r\n          <p class=\"fs-16\">\r\n            {{ item.XBPAADDLIG_0 }} {{ item.XBPAADDLIG_1 }} {{ item.XBPAADDLIG_2 }} {{ item.XPOSCOD_0 }}\r\n            {{ item.XCTY_0 }} {{ item.XCRY_0 }}\r\n          </p>\r\n        </ion-text>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-row class=\"px-2\">\r\n    <ion-col size=\"6\" *ngIf=\"selectedStop && selectedStop.XSTATUS_0 !== 5 && selectedStop.XSTATUS_0 !== 6\">\r\n      <ion-button color=\"warning\" expand=\"block\" class=\"mt-0\" (click)=\"skipStop(stopsDetails[0].XDOCNUM_0)\">\r\n        <ion-icon name=\"arrow-redo-outline\"></ion-icon>\r\n        <ion-label class=\"pl-1\">Skip</ion-label>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col *ngIf=\"selectedStop && selectedStop.XSTATUS_0 !== 6\"\r\n      [size]=\"(selectedStop && selectedStop.XSTATUS_0 == 5) ? 12: 6 \">\r\n      <ion-button (click)=\"startRoute()\" color=\"secondary\" expand=\"block\" class=\"mt-0\">\r\n        <ion-icon name=\"navigate-outline\"></ion-icon>\r\n        <ion-label class=\"pl-1\">Start Route</ion-label>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"12\" *ngIf=\"stopsDetails.length > 0\">\r\n      <ion-button color=\"dark\" expand=\"block\" class=\"mt-0\" (click)=\"onPODClick(stopsDetails[0].XDOCNUM_0)\">\r\n        <ion-icon name=\"checkmark-done-outline\"></ion-icon>\r\n        <ion-label class=\"pl-1\">POD</ion-label>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_stop-list_stop-detail_stop-detail_module_ts.js.map