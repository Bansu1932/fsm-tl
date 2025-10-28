(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_stop-list_stop-list_module_ts"],{

/***/ 54947:
/*!***************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-list-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopListPageRoutingModule": () => (/* binding */ StopListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _stop_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stop-list.page */ 11640);




const routes = [
    {
        path: '',
        component: _stop_list_page__WEBPACK_IMPORTED_MODULE_0__.StopListPage
    },
    {
        path: 'stop-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tabpage_stop-list_stop-detail_stop-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./stop-detail/stop-detail.module */ 19109)).then(m => m.StopDetailPageModule)
    },
    {
        path: 'skip-stop',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabpage_stop-list_skip-stop_skip-stop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./skip-stop/skip-stop.module */ 97965)).then(m => m.SkipStopPageModule)
    },
    {
        path: 'cancel-stop',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-soap___ivy_ngcc___fesm2015_ngx-soap_js"), __webpack_require__.e("src_app_tabpage_stop-list_cancel-stop_cancel-stop_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cancel-stop/cancel-stop.module */ 47158)).then(m => m.CancelStopPageModule)
    }
];
let StopListPageRoutingModule = class StopListPageRoutingModule {
};
StopListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StopListPageRoutingModule);



/***/ }),

/***/ 81360:
/*!*******************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-list.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopListPageModule": () => (/* binding */ StopListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _stop_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stop-list-routing.module */ 54947);
/* harmony import */ var _stop_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stop-list.page */ 11640);







let StopListPageModule = class StopListPageModule {
};
StopListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stop_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.StopListPageRoutingModule
        ],
        declarations: [_stop_list_page__WEBPACK_IMPORTED_MODULE_1__.StopListPage]
    })
], StopListPageModule);



/***/ }),

/***/ 11640:
/*!*****************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-list.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StopListPage": () => (/* binding */ StopListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_stop_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./stop-list.page.html */ 19872);
/* harmony import */ var _stop_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stop-list.page.scss */ 15892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/routes.service */ 11763);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);










let StopListPage = class StopListPage {
    constructor(router, utilService, routesService, route) {
        this.router = router;
        this.utilService = utilService;
        this.routesService = routesService;
        this.route = route;
        this.isFuture = false;
        this.isPrevious = false;
        this.isCheckedIn = false;
        this.isCheckedOut = false;
        this.isStopActive = false;
        this.isPreviousChecked = false;
        this.isAllDeparture = false;
        this.stopType = 'To-Do';
        this.checkedModel = {
            checkedIn: '',
            checkedOut: ''
        };
        this.route.queryParams.subscribe(params => {
            if (params && params.route) {
                this.routeId = params.route;
                this.stopType = 'To-Do';
                this.getStops();
            }
            else {
                if (localStorage.getItem('activeRouteId')) {
                    this.routeId = localStorage.getItem('activeRouteId');
                    this.stopType = 'To-Do';
                    this.getStops();
                }
            }
        });
    }
    ngOnInit() {
        this.stopType = 'To-Do';
    }
    scroll() {
        var _a;
        (_a = this.content) === null || _a === void 0 ? void 0 : _a.scrollToTop(0);
    }
    getStops() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilService.showLoading();
            this.routesService.getStops(this.routeId).subscribe((res) => {
                var _a, _b, _c, _d, _e;
                this.completeWidgets();
                this.stops = lodash__WEBPACK_IMPORTED_MODULE_4__.sortBy(res, 'XCSGNUM_0');
                if (((_a = this.stops[0]) === null || _a === void 0 ? void 0 : _a.XCKINTIM_0.length) > 1) {
                    this.isCheckedIn = true;
                    let checkInDate = moment__WEBPACK_IMPORTED_MODULE_5__((_b = this.stops[0]) === null || _b === void 0 ? void 0 : _b.XCKINDAT_0).format('YYYY-MM-DD');
                    let checkInDateTime = new Date(checkInDate + ' ' + ((_c = this.stops[0]) === null || _c === void 0 ? void 0 : _c.XCKINTIM_0));
                    this.checkedModel.checkedIn = checkInDateTime;
                }
                else {
                    this.isCheckedIn = false;
                }
                const isAllDelivered = lodash__WEBPACK_IMPORTED_MODULE_4__.filter(this.stops, (isAllCom) => {
                    return isAllCom.XSTATUS_0 == 6 && isAllCom.XCKOTTIM_0.length > 1;
                });
                if (this.stops.length == isAllDelivered.length) {
                    this.isCheckedOut = true;
                    let checkOutDate = moment__WEBPACK_IMPORTED_MODULE_5__((_d = this.stops[0]) === null || _d === void 0 ? void 0 : _d.XCKOTDAT_0).format('YYYY-MM-DD');
                    let checkOutDateTime = new Date(checkOutDate + ' ' + ((_e = this.stops[0]) === null || _e === void 0 ? void 0 : _e.XCKOTTIM_0));
                    this.checkedModel.checkedOut = checkOutDateTime;
                }
                else {
                    this.isCheckedOut = false;
                }
                const isAnyStopActive = lodash__WEBPACK_IMPORTED_MODULE_4__.filter(this.stops, { XISACTIVDOC_0: 2 });
                if (isAnyStopActive.length > 0) {
                    this.isStopActive = true;
                }
                else {
                    this.isStopActive = false;
                }
                const isAllStopDeparture = lodash__WEBPACK_IMPORTED_MODULE_4__.filter(this.stops, { XDEPTIM_0: " " });
                if (isAllStopDeparture.length > 0) {
                    this.isAllDeparture = false;
                }
                else {
                    this.isAllDeparture = true;
                }
                this.searchedStops = lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep(this.stops);
                // this.stopType = 'To-Do';
                this.filterStopsByStatus();
            }, (err) => {
                this.completeWidgets();
                this.utilService.showErrorCall(err);
            });
        });
    }
    checkValidation(callback) {
        this.utilService.getStorageData('routes').then((routes) => {
            const route = lodash__WEBPACK_IMPORTED_MODULE_4__.find(routes, { XDRN_0: this.routeId });
            this.isFuture = route.XDLVDAT_0 > new Date();
            const isAnyStopActive = lodash__WEBPACK_IMPORTED_MODULE_4__.filter(this.stops, { XISACTIVDOC_0: 2 });
            if (isAnyStopActive.length > 0) {
                this.isStopActive = true;
            }
            else {
                this.isStopActive = false;
            }
            if (route.XTRIP_0 == 1) {
                this.isPrevious = true;
            }
            else {
                let previousTrip = lodash__WEBPACK_IMPORTED_MODULE_4__.find(routes, { XTRIP_0: route.XTRIP_0 - 1, XDLVDAT_0: route.XDLVDAT_0 });
                this.isPrevious = (previousTrip && (previousTrip.XROUTSTAT_0 == 5)) ? true : false;
                // let previousRoutes = _.find(routes, { XTRIP_0: route.XTRIP_0 - 1 });
                // this.isPreviousChecked = (previousRoutes && previousRoutes?.XROUTSTAT_0 == 2) ? true : false;
            }
            callback();
        });
    }
    stopDetails(docNo, docIndex) {
        if (this.isCheckedIn) {
            this.checkValidation(() => {
                if (!this.isFuture) {
                    if (this.isPrevious) {
                        let preStopCom = lodash__WEBPACK_IMPORTED_MODULE_4__.find(this.stops, { XCSGNUM_0: docIndex - 1 });
                        if (this.stops[0].Sequence === '2') {
                            if (preStopCom && ((preStopCom === null || preStopCom === void 0 ? void 0 : preStopCom.XSTATUS_0) !== 6 || (preStopCom === null || preStopCom === void 0 ? void 0 : preStopCom.XDEPTIM_0) == ' ')) {
                                this.utilService.showToast('Complete above stops first.');
                                return false;
                            }
                            else {
                                this.router.navigate(['/tabs/stop-list/stop-detail'], { queryParams: { stop: docNo } });
                            }
                        }
                        else if (this.stops[0].Sequence === '1') {
                            this.router.navigate(['/tabs/stop-list/stop-detail'], { queryParams: { stop: docNo } });
                        }
                    }
                    else {
                        this.utilService.showToast('Complete previous trip first.');
                    }
                }
                else {
                    this.utilService.showToast('Future routs not allowed.');
                }
            });
        }
        else {
            this.utilService.showToast('Please check-in first.');
        }
    }
    skipStop(event, docNo, docIndex) {
        event.preventDefault();
        event.stopPropagation();
        if (this.isCheckedIn) {
            this.checkValidation(() => {
                if (!this.isFuture) {
                    if (this.isStopActive) {
                        this.utilService.showToast('Complete active stop fisrt.');
                    }
                    else {
                        if (this.isPrevious) {
                            let preStopCom = lodash__WEBPACK_IMPORTED_MODULE_4__.find(this.stops, { XCSGNUM_0: docIndex - 1 });
                            if (this.stops[0].Sequence === '2') {
                                if (preStopCom && ((preStopCom === null || preStopCom === void 0 ? void 0 : preStopCom.XSTATUS_0) !== 6 || (preStopCom === null || preStopCom === void 0 ? void 0 : preStopCom.XDEPTIM_0) == ' ')) {
                                    this.utilService.showToast('Complete above stops first.');
                                    return false;
                                }
                                else {
                                    this.currentStop = lodash__WEBPACK_IMPORTED_MODULE_4__.find(this.stops, { XDOCNUM_0: docNo });
                                    if (this.currentStop.XSTATUS_0 == 1 || this.currentStop.XSTATUS_0 == 5 || this.currentStop.XSTATUS_0 == 6) {
                                        this.utilService.showToast('Already skipped!');
                                    }
                                    else {
                                        this.router.navigate(['/tabs/stop-list/skip-stop'], { queryParams: { docNo } });
                                    }
                                }
                            }
                            else if (this.stops[0].Sequence === '1') {
                                this.currentStop = lodash__WEBPACK_IMPORTED_MODULE_4__.find(this.stops, { XDOCNUM_0: docNo });
                                if (this.currentStop.XSTATUS_0 == 1 || this.currentStop.XSTATUS_0 == 5 || this.currentStop.XSTATUS_0 == 6) {
                                    this.utilService.showToast('Already skipped!');
                                }
                                else {
                                    this.router.navigate(['/tabs/stop-list/skip-stop'], { queryParams: { docNo } });
                                }
                            }
                            // this.currentStop = _.find(this.stops, { XDOCNUM_0: docNo });
                            // if (this.currentStop.XSTATUS_0 == 1 || this.currentStop.XSTATUS_0 == 5 || this.currentStop.XSTATUS_0 == 6) {
                            //   this.utilService.showToast('Already skipped!');
                            // } else {
                            //   this.router.navigate(['/tabs/stop-list/skip-stop'], { queryParams: { docNo } });
                            // }
                        }
                        else {
                            this.utilService.showToast('Complete previous trip first.');
                        }
                    }
                }
                else {
                    this.utilService.showToast('Future routs not allowed.');
                }
            });
        }
        else {
            this.utilService.showToast('Please check-in first.');
        }
    }
    cancelStop(event, docNo, docIndex) {
        event.preventDefault();
        event.stopPropagation();
        if (this.isCheckedIn) {
            this.checkValidation(() => {
                if (!this.isFuture) {
                    if (this.isPrevious) {
                        let preStopCom = lodash__WEBPACK_IMPORTED_MODULE_4__.find(this.stops, { XCSGNUM_0: docIndex - 1 });
                        if (this.stops[0].Sequence === '2') {
                            if (preStopCom && ((preStopCom === null || preStopCom === void 0 ? void 0 : preStopCom.XSTATUS_0) !== 6 || (preStopCom === null || preStopCom === void 0 ? void 0 : preStopCom.XDEPTIM_0) == ' ')) {
                                this.utilService.showToast('Complete above stops first.');
                                return false;
                            }
                            else {
                                this.currentStop = lodash__WEBPACK_IMPORTED_MODULE_4__.find(this.stops, { XDOCNUM_0: docNo });
                                if (this.currentStop.XSTATUS_0 == 1 || this.currentStop.XSTATUS_0 == 5 || this.currentStop.XSTATUS_0 == 6) {
                                    this.utilService.showToast('Already cancelled!');
                                }
                                else {
                                    this.router.navigate(['/tabs/stop-list/cancel-stop'], { queryParams: { docNo, displayType: "cancelStop" }, });
                                }
                            }
                        }
                        else if (this.stops[0].Sequence === '1') {
                            this.currentStop = lodash__WEBPACK_IMPORTED_MODULE_4__.find(this.stops, { XDOCNUM_0: docNo });
                            if (this.currentStop.XSTATUS_0 == 1 || this.currentStop.XSTATUS_0 == 5 || this.currentStop.XSTATUS_0 == 6) {
                                this.utilService.showToast('Already cancelled!');
                            }
                            else {
                                this.router.navigate(['/tabs/stop-list/cancel-stop'], { queryParams: { docNo, displayType: "cancelStop" } });
                            }
                        }
                    }
                    else {
                        this.utilService.showToast('Complete previous trip first.');
                    }
                }
                else {
                    this.utilService.showToast('Future routs not allowed.');
                }
            });
        }
        else {
            this.utilService.showToast('Please check-in first.');
        }
    }
    searchStops() {
        if (this.search) {
            let filter;
            if (this.stopType == 'To-Do') {
                filter = lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep(this.searchedToDo);
            }
            else if (this.stopType == 'Active') {
                filter = lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep(this.searchedActive);
            }
            else if (this.stopType == 'Delivered') {
                filter = lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep(this.searchedDeliverd);
            }
            const searchedData = lodash__WEBPACK_IMPORTED_MODULE_4__.filter(filter, (data) => {
                return data.XDOCNUM_0.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
                    data.XBPNAME_0.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
                    data.XBPCORD_0.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
                    data.XCTY_0.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
            });
            this.todoStops = searchedData;
            this.activeStops = searchedData;
            this.deliverdStops = searchedData;
        }
        else {
            if (this.stopType == 'To-Do') {
                this.todoStops = lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep(this.searchedToDo);
            }
            else if (this.stopType == 'Active') {
                this.activeStops = lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep(this.searchedActive);
            }
            else if (this.stopType == 'Delivered') {
                this.deliverdStops = lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep(this.searchedDeliverd);
            }
        }
    }
    filterStopsByStatus() {
        this.search = '';
        const cloneRoutes = lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep(this.stops);
        if (this.stopType == 'To-Do') {
            this.todoStops = lodash__WEBPACK_IMPORTED_MODULE_4__.filter(cloneRoutes, (stop => {
                return (stop.XSTATUS_0 !== 1 && stop.XSTATUS_0 !== 6) && stop.XISACTIVDOC_0 != 2;
            }));
            this.searchedToDo = lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep(this.todoStops);
        }
        else if (this.stopType == 'Active') {
            this.activeStops = lodash__WEBPACK_IMPORTED_MODULE_4__.filter(cloneRoutes, (stop => {
                return (stop.XISACTIVDOC_0 == 2 || stop.XSTATUS_0 == 6) && stop.XDEPTIM_0 == ' ';
            }));
            this.searchedActive = lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep(this.activeStops);
        }
        else if (this.stopType == 'Delivered') {
            this.deliverdStops = lodash__WEBPACK_IMPORTED_MODULE_4__.filter(cloneRoutes, (stop => {
                return stop.XSTATUS_0 == 6 && stop.XDEPTIM_0.length > 1;
            }));
            const dateTimeData = this.deliverdStops.map((item, index) => {
                let deliveredDate = moment__WEBPACK_IMPORTED_MODULE_5__(item.XFINDAT_0).format('YYYY-MM-DD');
                let deliveredDateTime = new Date(deliveredDate + ' ' + item.XFINTIME_0);
                const data = Object.assign({}, item);
                data.DLDATTIM = String(deliveredDateTime);
                return data;
            });
            this.deliverdStops = dateTimeData;
            this.searchedDeliverd = lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep(this.deliverdStops);
        }
        this.scroll();
    }
    checkIn() {
        this.checkValidation(() => {
            var _a;
            if (this.isPrevious) {
                if (((_a = this.stops[0].XCKINTIM_0) === null || _a === void 0 ? void 0 : _a.length) > 1) {
                    this.utilService.showToast('Already checked-in.');
                }
                else {
                    const params = {
                        doc: this.routeId,
                        datetime: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DDTHH:mm:ss')
                    };
                    this.utilService.showConfirmationPopup('Check In', 'Are you sure you want to check in?', cb => {
                        if (cb == 1) {
                            this.routesService.postCheckIn(params).subscribe((res) => {
                                this.isCheckedIn = true;
                                this.checkedModel.checkedIn = new Date();
                                this.utilService.showToastSucccess('Checked-In Successfully at ' + this.stops[0].XFCYDES_0 + '(' + this.stops[0].XSTOFCY_0 + ')');
                            }, (err) => {
                                this.isCheckedIn = false;
                                this.utilService.showErrorCall(err);
                            });
                        }
                    });
                }
            }
            else {
                this.utilService.showToast('Please complete the Route for Previous Trip.');
            }
        });
    }
    checkOut() {
        var _a;
        const isAllDelivered = lodash__WEBPACK_IMPORTED_MODULE_4__.filter(this.stops, { XSTATUS_0: 6 });
        if (this.stops.length == isAllDelivered.length && this.isAllDeparture) {
            if (((_a = this.stops[0].XCKOTTIM_0) === null || _a === void 0 ? void 0 : _a.length) > 1) {
                this.utilService.showToast('Already checked-out.');
            }
            else {
                const params = {
                    doc: this.routeId,
                    datetime: moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY-MM-DDTHH:mm:ss')
                };
                this.utilService.showConfirmationPopup('Check Out', 'Are you sure you want to check out?', cb => {
                    if (cb == 1) {
                        this.routesService.postCheckOut(params).subscribe((res) => {
                            this.isCheckedOut = true;
                            this.checkedModel.checkedOut = new Date();
                            this.utilService.showToastSucccess('Stop checked-out successfully.');
                        }, (err) => {
                            this.utilService.showErrorCall(err);
                        });
                    }
                });
            }
        }
        else {
            this.utilService.showToast('Please complete all the documents in the Route.');
        }
    }
    ionViewDidLeave() {
        this.search = '';
    }
    doRefresh(event) {
        this.getStops();
    }
    completeWidgets() {
        this.utilService.dismissLoading();
        if (this.pullToRefresh) {
            this.pullToRefresh.complete();
        }
    }
};
StopListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__.RoutesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
StopListPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonContent, { static: false },] }],
    pullToRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRefresher,] }]
};
StopListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-stop-list',
        template: _raw_loader_stop_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_stop_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StopListPage);



/***/ }),

/***/ 15892:
/*!*******************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-list.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".stop-list {\n  width: 100%;\n  position: relative;\n}\n.stop-list .list-data {\n  min-height: 145px;\n}\n.stop-list .todo-list-data {\n  min-height: 101px;\n}\n.stop-list .stop-progress-bar {\n  width: 140px !important;\n}\n.stop-list .chipmt {\n  margin-top: 22px;\n}\n.stop-list .bs-wizard {\n  position: absolute;\n  top: 16px;\n  left: 35px;\n  z-index: 1;\n}\n.stop-list .bs-wizard .bs-wizard-step {\n  padding: 0;\n  position: relative;\n  min-height: 169px;\n}\n.stop-list .bs-wizard .bs-wizard-step .bs-wizard-dot {\n  width: 64px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: var(--ion-color-primary-tint);\n  border-radius: 15px;\n  color: var(--ion-color-light);\n  padding: 3px 0;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n}\n.stop-list .bs-wizard .bs-wizard-step .bs-wizard-dot img {\n  max-width: 30% !important;\n}\n.stop-list .bs-wizard .bs-wizard-step .progress {\n  position: absolute;\n  border-radius: 0px;\n  height: 100%;\n  box-shadow: none;\n  width: 6px;\n  left: 29px;\n  top: 15px;\n  margin-top: 0 !important;\n  animation: moveline 1s;\n  animation-fill-mode: forwards;\n}\n.stop-list .bs-wizard .check-in {\n  padding: 0;\n  position: relative;\n  min-height: 130px;\n}\n.stop-list .bs-wizard .bs-wizard-step.todo-steps {\n  min-height: 127px !important;\n}\n.stop-list .bs-wizard .bs-wizard-step.isSkip {\n  min-height: 168px !important;\n}\n.bs-wizard > .bs-wizard-step > .progress > .progress-bar {\n  width: 0px;\n  box-shadow: none;\n  background: var(--ion-color-primary-tint);\n}\n.bs-wizard > .bs-wizard-step.complete > .progress > .progress-bar {\n  width: 100%;\n}\n.bs-wizard > .bs-wizard-step.active > .progress > .progress-bar {\n  width: 100%;\n  height: 0px;\n}\n.bs-wizard > .bs-wizard-step:first-child.active > .progress > .progress-bar {\n  width: 0%;\n}\n.bs-wizard > .bs-wizard-step:last-child.active > .progress > .progress-bar {\n  width: 100%;\n}\n.bs-wizard > .bs-wizard-step:last-child > .progress {\n  display: none !important;\n}\n@keyframes moveline {\n  from {\n    height: 0px;\n  }\n  to {\n    height: 100%;\n  }\n}\n.no-stops {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3AtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7QUFDSjtBQUVFO0VBQ0UsaUJBQUE7QUFBSjtBQUdFO0VBQ0UsdUJBQUE7QUFESjtBQUlFO0VBQ0UsZ0JBQUE7QUFGSjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFISjtBQUtJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFITjtBQUtNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQUtRO0VBQ0UseUJBQUE7QUFIVjtBQU9NO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUxSO0FBU0k7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVBOO0FBVUk7RUFDRSw0QkFBQTtBQVJOO0FBV0k7RUFDRSw0QkFBQTtBQVROO0FBY0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQVhGO0FBY0E7RUFDRSxXQUFBO0FBWEY7QUFjQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBWEY7QUFjQTtFQUNFLFNBQUE7QUFYRjtBQWNBO0VBQ0UsV0FBQTtBQVhGO0FBY0E7RUFDRSx3QkFBQTtBQVhGO0FBY0E7RUFDRTtJQUNFLFdBQUE7RUFYRjtFQWNBO0lBQ0UsWUFBQTtFQVpGO0FBQ0Y7QUFlQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWJGIiwiZmlsZSI6InN0b3AtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RvcC1saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5saXN0LWRhdGEge1xyXG4gICAgbWluLWhlaWdodDogMTQ1cHg7XHJcbiAgfVxyXG5cclxuICAudG9kby1saXN0LWRhdGEge1xyXG4gICAgbWluLWhlaWdodDogMTAxcHg7XHJcbiAgfVxyXG5cclxuICAuc3RvcC1wcm9ncmVzcy1iYXIge1xyXG4gICAgd2lkdGg6IDE0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2hpcG10IHtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgfVxyXG5cclxuICAuYnMtd2l6YXJkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTZweDtcclxuICAgIGxlZnQ6IDM1cHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIC5icy13aXphcmQtc3RlcCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWluLWhlaWdodDogMTY5cHg7XHJcblxyXG4gICAgICAuYnMtd2l6YXJkLWRvdCB7XHJcbiAgICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgIGxlZnQ6IDI5cHg7XHJcbiAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBhbmltYXRpb246IG1vdmVsaW5lIDFzO1xyXG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrLWluIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnMtd2l6YXJkLXN0ZXAudG9kby1zdGVwcyB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEyN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJzLXdpemFyZC1zdGVwLmlzU2tpcCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDE2OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnMtd2l6YXJkPi5icy13aXphcmQtc3RlcD4ucHJvZ3Jlc3M+LnByb2dyZXNzLWJhciB7XHJcbiAgd2lkdGg6IDBweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xyXG59XHJcblxyXG4uYnMtd2l6YXJkPi5icy13aXphcmQtc3RlcC5jb21wbGV0ZT4ucHJvZ3Jlc3M+LnByb2dyZXNzLWJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5icy13aXphcmQ+LmJzLXdpemFyZC1zdGVwLmFjdGl2ZT4ucHJvZ3Jlc3M+LnByb2dyZXNzLWJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5icy13aXphcmQ+LmJzLXdpemFyZC1zdGVwOmZpcnN0LWNoaWxkLmFjdGl2ZT4ucHJvZ3Jlc3M+LnByb2dyZXNzLWJhciB7XHJcbiAgd2lkdGg6IDAlO1xyXG59XHJcblxyXG4uYnMtd2l6YXJkPi5icy13aXphcmQtc3RlcDpsYXN0LWNoaWxkLmFjdGl2ZT4ucHJvZ3Jlc3M+LnByb2dyZXNzLWJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5icy13aXphcmQ+LmJzLXdpemFyZC1zdGVwOmxhc3QtY2hpbGQ+LnByb2dyZXNzIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZWxpbmUge1xyXG4gIGZyb20ge1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ubm8tc3RvcHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIGlvbi1yZWZyZXNoZXIge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcblxyXG4vLyAgIGlvbi1yZWZyZXNoZXItY29udGVudCB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xyXG5cclxuLy8gICAgIC5yZWZyZXNoZXItcHVsbGluZyB7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyB9XHJcbiJdfQ== */");

/***/ }),

/***/ 19872:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabpage/stop-list/stop-list.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title color=\"tertiary\" class=\"ion-no-padding\">{{ routeId }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content color=\"tertiary\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-searchbar class=\"pb-0\" [(ngModel)]=\"search\" placeholder=\"Search\" debounce=500 (ionChange)=\"searchStops()\">\r\n  </ion-searchbar>\r\n  <ion-segment color=\"primary\" [(ngModel)]=\"stopType\" (ionChange)=\"filterStopsByStatus()\">\r\n    <ion-segment-button value=\"To-Do\">\r\n      <ion-label><b>To-Do</b></ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"Active\">\r\n      <ion-label><b>Active</b></ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"Delivered\">\r\n      <ion-label><b>Delivered</b></ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <div class=\"stop-list\" *ngIf=\"todoStops?.length > 0 && stopType == 'To-Do'\">\r\n    <div class=\"bs-wizard\">\r\n      <!-- complete, active, disabled -->\r\n      <div class=\"bs-wizard-step todo-steps check-in\">\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar\"></div>\r\n        </div>\r\n        <p class=\"bs-wizard-dot\"><img src=\"assets/images/check-in.png\"></p>\r\n      </div>\r\n      <div [ngClass]=\"(item.XSTATUS_0 == 5)? 'isSkip':'todo-steps'\" class=\"bs-wizard-step\" *ngFor=\"let item of todoStops\">\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar\"></div>\r\n        </div>\r\n        <p class=\"bs-wizard-dot\">{{ item.XCSGNUM_0 }}</p>\r\n      </div>\r\n      <div class=\"bs-wizard-step todo-steps\">\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar\"></div>\r\n        </div>\r\n        <p class=\"bs-wizard-dot\"><img src=\"assets/images/check-out.png\"></p>\r\n      </div>\r\n    </div>\r\n    <ion-card>\r\n      <ion-card-content class=\"p-5\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"3\" class=\"stop-progress-bar\"></ion-col>\r\n            <ion-col size=\"9\" class=\"pt-0\">\r\n              <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n                <ion-icon slot=\"end\" name=\"home\" color=\"secondary\"></ion-icon>\r\n                <ion-label class=\"mt-0 mb-0\">\r\n                  <h2 class=\"fs-18\"><b>{{ todoStops[0].XSTOFCY_0 }}</b></h2>\r\n                  <p>{{ todoStops[0].XFCYDES_0 }}</p>\r\n                  <ion-button *ngIf=\"!isCheckedIn\" (click)=\"checkIn()\" fill=\"outline\" color=\"success\"\r\n                    class=\"ion-margin-top mb-0\">\r\n                    <ion-label>Check In</ion-label>\r\n                  </ion-button>\r\n                  <ion-chip class=\"ml-0 mb-0\" *ngIf=\"isCheckedIn\" color=\"success\">\r\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n                    <ion-label>{{ checkedModel.checkedIn | date: 'dd-MM-yyyy HH:mm' }}</ion-label>\r\n                  </ion-chip>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card *ngFor=\"let item of todoStops\" (click)=\"stopDetails(item.XDOCNUM_0, item.XCSGNUM_0)\">\r\n      <ion-card-content class=\"p-5 todo-list-data\">\r\n        <ion-grid class=\"pb-0\">\r\n          <ion-row>\r\n            <ion-col size=\"3\" class=\"stop-progress-bar\"></ion-col>\r\n            <ion-col size=\"9\" class=\"pb-0\">\r\n              <ion-card-subtitle class=\"mb-0\">{{ item.XBPCORD_0 }} <br> {{ item.XBPNAME_0 }} <br>\r\n                {{ (item.XCTY_0)?(item.XCTY_0): '-' }}\r\n              </ion-card-subtitle>\r\n              <ion-label>\r\n                <p class=\"my-8 text-dark\">{{ item.XDOCNUM_0 }}</p>\r\n              </ion-label>\r\n              <!-- <ion-button *ngIf=\"item.XSTATUS_0 !== 5 && item.XSTATUS_0 !== 6\" fill=\"outline\" color=\"warning\"\r\n                class=\"mb-0 ion-margin-end\" size=\"small\" (click)=\"skipStop($event, item.XDOCNUM_0, item.XCSGNUM_0)\">\r\n                <ion-icon name=\"arrow-redo-outline\"></ion-icon>\r\n                <ion-label>Skip</ion-label>\r\n              </ion-button> -->\r\n              <ion-chip color=\"warning\" *ngIf=\"item.XSTATUS_0 == 5\">\r\n                <ion-label>Skipped</ion-label>\r\n                <ion-icon name=\"arrow-redo-outline\"></ion-icon>\r\n              </ion-chip>\r\n              <!-- <ion-button *ngIf=\"item.XSTATUS_0 !== 1 && item.XSTATUS_0 !== 5 && item.XSTATUS_0 !== 6\" fill=\"outline\"\r\n                color=\"danger\" class=\"mb-0\" size=\"small\" (click)=\"cancelStop($event, item.XDOCNUM_0, item.XCSGNUM_0)\">\r\n                <ion-icon name=\"close-outline\"></ion-icon>\r\n                <ion-label>Cancel</ion-label>\r\n              </ion-button> -->\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-content class=\"p-5\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"3\" class=\"stop-progress-bar\"></ion-col>\r\n            <ion-col size=\"9\" class=\"pt-0\">\r\n              <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n                <ion-icon slot=\"end\" name=\"home\" color=\"secondary\"></ion-icon>\r\n                <ion-label class=\"mt-0 mb-0\">\r\n                  <h2 class=\"fs-18\"><b>{{ todoStops[0].XSTOFCY_0 }}</b></h2>\r\n                  <p>{{ todoStops[0].XFCYDES_0 }}</p>\r\n                  <ion-button *ngIf=\"!isCheckedOut\" (click)=\"checkOut()\" fill=\"outline\" color=\"success\"\r\n                    class=\"ion-margin-top mb-0\">\r\n                    <ion-label>Check Out</ion-label>\r\n                  </ion-button>\r\n                  <ion-chip class=\"ml-0\" *ngIf=\"isCheckedOut\" color=\"success\">\r\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n                    <ion-label>{{ todoStops[0].XCKOTDAT_0 | date: 'dd-MM-yyyy HH:mm' }}</ion-label>\r\n                  </ion-chip>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"stop-list\" *ngIf=\"activeStops?.length > 0 && stopType == 'Active'\">\r\n    <!-- <div class=\"bs-wizard\">\r\n      <div class=\"bs-wizard-step\" *ngFor=\"let item of activeStops\">\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar\"></div>\r\n        </div>\r\n        <p class=\"bs-wizard-dot\">{{ item.XCSGNUM_0 }}</p>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"bs-wizard\">\r\n      <div class=\"bs-wizard-step\" *ngFor=\"let item of activeStops\">\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar\"></div>\r\n        </div>\r\n        <p class=\"bs-wizard-dot\">{{ item.XCSGNUM_0 }}</p>\r\n      </div>\r\n    </div>\r\n    <ion-card *ngFor=\"let item of activeStops\" (click)=\"stopDetails(item.XDOCNUM_0, item.XCSGNUM_0)\">\r\n      <ion-card-content class=\"p-5 list-data\">\r\n        <ion-grid class=\"pb-0\">\r\n          <ion-row>\r\n            <ion-col size=\"3\" class=\"stop-progress-bar\"></ion-col>\r\n            <ion-col size=\"9\" class=\"pb-0\">\r\n              <ion-card-subtitle class=\"mb-0\">{{ item.XBPCORD_0 }} <br> {{ item.XBPNAME_0 }} <br>\r\n                {{ (item.XCTY_0)?(item.XCTY_0): '-' }}\r\n              </ion-card-subtitle>\r\n              <ion-label>\r\n                <p class=\"my-8 text-dark\">{{ item.XDOCNUM_0 }}</p>\r\n              </ion-label>\r\n              <ion-chip *ngIf=\"item.XISACTIVDOC_0 == 2 || item.XDEPTIM_0 == ' '\" color=\"warning\">\r\n                <ion-label>In Progress</ion-label>\r\n              </ion-chip>\r\n              <!-- <ion-chip *ngIf=\"item.XSTATUS_0 == 6\" color=\"success\">\r\n                <ion-label>Delivered</ion-label>\r\n                <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n              </ion-chip> -->\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"stop-list\" *ngIf=\"deliverdStops?.length > 0 && stopType == 'Delivered'\">\r\n    <div class=\"bs-wizard\">\r\n      <div class=\"bs-wizard-step check-in\">\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar\"></div>\r\n        </div>\r\n        <p class=\"bs-wizard-dot\"><img src=\"assets/images/check-in.png\"></p>\r\n      </div>\r\n      <div class=\"bs-wizard-step\" *ngFor=\"let item of deliverdStops\">\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar\"></div>\r\n        </div>\r\n        <p class=\"bs-wizard-dot\">{{ item.XCSGNUM_0 }}</p>\r\n      </div>\r\n      <div class=\"bs-wizard-step\">\r\n        <div class=\"progress\">\r\n          <div class=\"progress-bar\"></div>\r\n        </div>\r\n        <p class=\"bs-wizard-dot\"><img src=\"assets/images/check-out.png\"></p>\r\n      </div>\r\n    </div>\r\n    <ion-card>\r\n      <ion-card-content class=\"p-5\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"3\" class=\"stop-progress-bar\"></ion-col>\r\n            <ion-col size=\"9\" class=\"pt-0\">\r\n              <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n                <ion-icon slot=\"end\" name=\"home\" color=\"secondary\"></ion-icon>\r\n                <ion-label class=\"mt-0 mb-0\">\r\n                  <h2 class=\"fs-18\"><b>{{ deliverdStops[0].XSTOFCY_0 }}</b></h2>\r\n                  <p>{{ deliverdStops[0].XFCYDES_0 }}</p>\r\n                  <ion-button *ngIf=\"!isCheckedIn\" (click)=\"checkIn()\" fill=\"outline\" color=\"success\"\r\n                    class=\"ion-margin-top mb-0\">\r\n                    <ion-label>Check In</ion-label>\r\n                  </ion-button>\r\n                  <ion-chip class=\"ml-0 mb-0\" *ngIf=\"isCheckedIn\" color=\"success\">\r\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n                    <ion-label>{{ checkedModel?.checkedIn | date: 'dd-MM-yyyy HH:mm' }}</ion-label>\r\n                  </ion-chip>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card *ngFor=\"let item of deliverdStops\" (click)=\"stopDetails(item.XDOCNUM_0, item.XCSGNUM_0)\">\r\n      <ion-card-content class=\"p-5 list-data\">\r\n        <ion-grid class=\"pb-0\">\r\n          <ion-row>\r\n            <ion-col size=\"3\" class=\"stop-progress-bar\"></ion-col>\r\n            <ion-col size=\"9\" class=\"pb-0\">\r\n              <ion-card-subtitle class=\"mb-0\">{{ item.XBPCORD_0 }} <br> {{ item.XBPNAME_0 }} <br>\r\n                {{ (item.XCTY_0)?(item.XCTY_0): '-' }}\r\n              </ion-card-subtitle>\r\n              <ion-label>\r\n                <p class=\"my-8 text-dark\">{{ item.XDOCNUM_0 }}</p>\r\n              </ion-label>\r\n              <ion-chip color=\"success\" *ngIf=\"item.XSTATUS_0 == 6\">\r\n                <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n                <ion-label>{{ item.DLDATTIM | date: 'dd-MM-yyyy HH:mm' }}</ion-label>\r\n                <!-- {{ item.XFINDAT_0 + ' ' + item.XFINTIME_0 | date: 'dd-MM-yyyy HH:mm' }} -->\r\n              </ion-chip>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-content class=\"p-5\">\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col size=\"3\" class=\"stop-progress-bar\"></ion-col>\r\n            <ion-col size=\"9\" class=\"pt-0\">\r\n              <ion-item lines=\"none\" class=\"ion-no-padding\">\r\n                <ion-icon slot=\"end\" name=\"home\" color=\"secondary\"></ion-icon>\r\n                <ion-label class=\"mt-0 mb-0\">\r\n                  <h2 class=\"fs-18\"><b>{{ deliverdStops[0].XSTOFCY_0 }}</b></h2>\r\n                  <p>{{ deliverdStops[0].XFCYDES_0 }}</p>\r\n                  <ion-button *ngIf=\"!isCheckedOut\" (click)=\"checkOut()\" fill=\"outline\" color=\"success\"\r\n                    class=\"ion-margin-top mb-0\">\r\n                    <ion-label>Check Out</ion-label>\r\n                  </ion-button>\r\n                  <ion-chip class=\"ml-0\" *ngIf=\"isCheckedOut\" color=\"success\">\r\n                    <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n                    <ion-label>{{ checkedModel.checkedOut | date: 'dd-MM-yyyy HH:mm' }}</ion-label>\r\n                  </ion-chip>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n  <div class=\"ion-text-center no-stops\" *ngIf=\"todoStops?.length == 0 && stopType == 'To-Do'\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <b>Oops no stops found!</b>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"ion-text-center no-stops\" *ngIf=\"activeStops?.length == 0 && stopType == 'Active'\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <b>Oops no stops found!</b>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"ion-text-center no-stops\" *ngIf=\"deliverdStops?.length == 0 && stopType == 'Delivered'\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <b>Oops no stops found!</b>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_stop-list_stop-list_module_ts.js.map