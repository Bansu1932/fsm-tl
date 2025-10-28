(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_routes_routes_module_ts"],{

/***/ 37046:
/*!*********************************************************!*\
  !*** ./src/app/tabpage/routes/routes-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesPageRoutingModule": () => (/* binding */ RoutesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _routes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes.page */ 23791);




const routes = [
    {
        path: '',
        component: _routes_page__WEBPACK_IMPORTED_MODULE_0__.RoutesPage
    }
];
let RoutesPageRoutingModule = class RoutesPageRoutingModule {
};
RoutesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RoutesPageRoutingModule);



/***/ }),

/***/ 69124:
/*!*************************************************!*\
  !*** ./src/app/tabpage/routes/routes.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesPageModule": () => (/* binding */ RoutesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _routes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes-routing.module */ 37046);
/* harmony import */ var _routes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.page */ 23791);







let RoutesPageModule = class RoutesPageModule {
};
RoutesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _routes_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoutesPageRoutingModule
        ],
        declarations: [_routes_page__WEBPACK_IMPORTED_MODULE_1__.RoutesPage]
    })
], RoutesPageModule);



/***/ }),

/***/ 23791:
/*!***********************************************!*\
  !*** ./src/app/tabpage/routes/routes.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesPage": () => (/* binding */ RoutesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_routes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./routes.page.html */ 52439);
/* harmony import */ var _routes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes.page.scss */ 50241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/routes.service */ 11763);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/events */ 20579);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ 37556);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);











let RoutesPage = class RoutesPage {
    constructor(utilService, routesService, route, router, events, authService) {
        this.utilService = utilService;
        this.routesService = routesService;
        this.route = route;
        this.router = router;
        this.events = events;
        this.authService = authService;
        this.routes = [];
        this.route.queryParams.subscribe(params => {
            // const driverId = localStorage.getItem('podDriverId');
            // if (params && params.code) {
            //   this.utilService.setStorageData('driverCode', params.code);
            //   this.code = params.code;
            //   this.getRoutes();
            // } else {
            //   this.code = driverId;
            //   this.getRoutes();
            // }
            const driverId = localStorage.getItem('podDriverId');
            if (params && params.code) {
                if (params.code == driverId) {
                    this.utilService.setStorageData('driverCode', params.code);
                    this.code = params.code;
                    this.getRoutes();
                }
                else {
                    this.authService.logout();
                }
            }
            else {
                this.code = driverId;
                this.getRoutes();
            }
        });
        // });
    }
    ngOnInit() {
    }
    getRoutes() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilService.showLoading();
            this.routesService.getRoutes(this.code).subscribe((res) => {
                this.completeWidgets();
                if (res) {
                    this.routes = res;
                    this.utilService.setStorageData('routes', this.routes);
                    localStorage.removeItem('activeRouteId');
                    this.events.publish('routeId:change', null);
                    // localStorage.setItem('activeRouteId', this.routes[0]?.XDRN_0);
                    if (navigator.onLine || this.utilService.isOnline) {
                        this.getStops();
                    }
                }
            }, (err) => {
                this.completeWidgets();
                this.utilService.showErrorCall(err);
            });
        });
    }
    getStops() {
        var _a;
        let stops = [];
        for (let i = 0; i < this.routes.length; i++) {
            this.routesService.getStops((_a = this.routes[i]) === null || _a === void 0 ? void 0 : _a.XDRN_0).subscribe((resp) => {
                var _a;
                for (let index = 0; index < resp.length; index++) {
                    resp[index].routeId = (_a = this.routes[i]) === null || _a === void 0 ? void 0 : _a.XDRN_0;
                    // const findex = _.findIndex(stops, { XDOCNUM_0: resp[index]?.XDOCNUM_0, routeId: this.routes[i]?.XDRN_0 });
                    // if (findex < 0) {
                    stops.push(resp[index]);
                    // } else {
                    //   stops[findex] = resp[index];
                    // }
                }
                if (i === this.routes.length - 1) {
                    this.stopsData = stops;
                    this.documentsNPods();
                    this.utilService.setStorageData('stops', stops);
                }
            }, (err) => {
                this.utilService.showErrorCall(err);
            });
        }
    }
    documentsNPods() {
        this.utilService.getStorageData('documentinfo').then(documentinfo => {
            var _a;
            if (!documentinfo) {
                documentinfo = [];
            }
            if (this.stopsData.length > 0) {
                for (let index = 0; index < this.stopsData.length; index++) {
                    this.routesService.getStopsDetails((_a = this.stopsData[index]) === null || _a === void 0 ? void 0 : _a.XDOCNUM_0).subscribe((resp) => {
                        var _a;
                        for (let index = 0; index < resp.length; index++) {
                            const findex = lodash__WEBPACK_IMPORTED_MODULE_4__.findIndex(documentinfo, { XDOCNUM_0: (_a = resp[index]) === null || _a === void 0 ? void 0 : _a.XDOCNUM_0 });
                            if (findex < 0) {
                                documentinfo.push(resp[index]);
                            }
                            else {
                                documentinfo[findex] = resp[index];
                            }
                        }
                        this.utilService.setStorageData('documentinfo', documentinfo);
                    }, (err) => {
                        this.utilService.showErrorCall(err);
                    });
                }
            }
        });
        this.utilService.getStorageData('documentdet').then(documentdet => {
            var _a;
            if (!documentdet) {
                documentdet = [];
            }
            if (this.stopsData.length > 0) {
                for (let index = 0; index < this.stopsData.length; index++) {
                    this.routesService.getDocumentDetails((_a = this.stopsData[index]) === null || _a === void 0 ? void 0 : _a.XDOCNUM_0).subscribe((resp) => {
                        var _a;
                        for (let index = 0; index < resp.length; index++) {
                            const findex = lodash__WEBPACK_IMPORTED_MODULE_4__.findIndex(documentdet, { XDOCNUM_0: (_a = resp[index]) === null || _a === void 0 ? void 0 : _a.XDOCNUM_0 });
                            if (findex < 0) {
                                documentdet.push(resp[index]);
                            }
                            else {
                                documentdet[findex] = resp[index];
                            }
                        }
                        this.utilService.setStorageData('documentdet', documentdet);
                    }, (err) => {
                        this.utilService.showErrorCall(err);
                    });
                }
            }
        });
        this.utilService.getStorageData('poddet').then(poddet => {
            var _a;
            if (!poddet) {
                poddet = [];
            }
            if (this.stopsData.length > 0) {
                for (let index = 0; index < this.stopsData.length; index++) {
                    this.routesService.getPod((_a = this.stopsData[index]) === null || _a === void 0 ? void 0 : _a.XDOCNUM_0).subscribe((resp) => {
                        var _a;
                        for (let index = 0; index < resp.length; index++) {
                            const findex = lodash__WEBPACK_IMPORTED_MODULE_4__.findIndex(poddet, { XDOCNUM_0: (_a = resp[index]) === null || _a === void 0 ? void 0 : _a.XDOCNUM_0 });
                            if (findex < 0) {
                                poddet.push(resp[index]);
                            }
                            else {
                                poddet[findex] = resp[index];
                            }
                        }
                        this.utilService.setStorageData('poddet', poddet);
                    }, (err) => {
                        this.utilService.showErrorCall(err);
                    });
                }
            }
        });
        // this.utilService.getStorageData('podrep').then(podrep => {
        //   if (!podrep) {
        //     podrep = [];
        //   }
        //   if (this.stopsData.length > 0) {
        //     for (let index = 0; index < this.stopsData.length; index++) {
        //       this.routesService.getPodReport(this.stopsData[index]?.XDOCNUM_0).subscribe((resp: any) => {
        //         this.podRep = resp;
        //         for (let index = 0; index < resp.length; index++) {
        //           podrep.push(resp[index]);
        //         }
        //         this.utilService.setStorageData('podrep', podrep);
        //       }, (err: any) => {
        //         this.utilService.showErrorCall(err);
        //       });
        //     }
        //   }
        // });
    }
    onStart(route, index) {
        localStorage.setItem('activeRouteId', route.XDRN_0);
        this.events.publish('routeId:change', route.XDRN_0);
        this.router.navigate(['/tabs/stop-list'], { queryParams: { route: route.XDRN_0 } });
    }
    logout() {
        this.utilService.showConfirmationPopup('Logout', 'Are you sure you want to logout?', cb => {
            if (cb == 1) {
                this.authService.logout();
            }
        });
        // this.utilService.showConfirmationPopup('Logout', 'Are you sure you want to logout?', cb => {
        //   if (cb == 1) {
        //     this.authService.logout();
        //   }
        // });
    }
    doRefresh(event) {
        this.getRoutes();
    }
    completeWidgets() {
        this.utilService.dismissLoading();
        if (this.pullToRefresh) {
            this.pullToRefresh.complete();
        }
    }
};
RoutesPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__.RoutesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_events__WEBPACK_IMPORTED_MODULE_5__.Events },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService }
];
RoutesPage.propDecorators = {
    pullToRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonRefresher,] }]
};
RoutesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-routes',
        template: _raw_loader_routes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_routes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RoutesPage);



/***/ }),

/***/ 50241:
/*!*************************************************!*\
  !*** ./src/app/tabpage/routes/routes.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3V0ZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 52439:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabpage/routes/routes.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>#{{ code }} {{ routes[0]?.XDRIVERNAM_0 }}</ion-title>\r\n    <ion-icon (click)=\"logout()\" size=\"large\" slot=\"end\" name=\"log-out-outline\"></ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content color=\"tertiary\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content color=\"tertiary\"></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-row class=\"ion-margin-bottom\">\r\n    <ion-col *ngFor=\"let item of routes; let i=index\" size-md=\"6\" class=\"ion-no-padding\">\r\n      <ion-card class=\"mb-0\">\r\n        <ion-card-header color=\"dark\" class=\"p-8\">\r\n          <ion-row>\r\n            <ion-col size=\"7\">\r\n              <ion-card-subtitle>{{ item.XDLVDAT_0 | date:'mediumDate' }}</ion-card-subtitle>\r\n              <ion-card-subtitle>{{ item.XFCY_0 }} {{ item.XFCYDES_0 }}</ion-card-subtitle>\r\n              <ion-card-title class=\"fs-12\">{{ item.XDRN_0 }}</ion-card-title>\r\n            </ion-col>\r\n            <ion-col size=\"5\">\r\n              <ion-chip color=\"warning\" class=\"float-right\" *ngIf=\"item.XROUTSTAT_0 == 1\">\r\n                <ion-label>Active</ion-label>\r\n              </ion-chip>\r\n              <ion-chip color=\"danger\" class=\"float-right\" *ngIf=\"item.XROUTSTAT_0 == 2\">\r\n                <ion-label>In-Progress</ion-label>\r\n              </ion-chip>\r\n              <ion-chip color=\"success\" class=\"float-right\" *ngIf=\"item.XROUTSTAT_0 == 3\">\r\n                <ion-label>Completed</ion-label>\r\n              </ion-chip>\r\n              <ion-chip color=\"secondary\" class=\"float-right\" *ngIf=\"item.XROUTSTAT_0 == 4\">\r\n                <ion-label>Checked-In</ion-label>\r\n              </ion-chip>\r\n              <ion-chip color=\"secondary\" class=\"float-right\" *ngIf=\"item.XROUTSTAT_0 == 5\">\r\n                <ion-label>Checked-Out</ion-label>\r\n              </ion-chip>\r\n              <ion-chip color=\"danger\" class=\"float-right\" *ngIf=\"item.XROUTSTAT_0 == 6\">\r\n                <ion-label>Cancelled</ion-label>\r\n              </ion-chip>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-header>\r\n        <ion-card-content class=\"ion-no-padding\">\r\n          <ion-item lines=\"full\" class=\"fs-14\">\r\n            <ion-label color=\"primary\"><b>Trip</b></ion-label>\r\n            <ion-label color=\"dark\">{{ item.XTRIP_0 }}</ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"full\" class=\"fs-14\">\r\n            <ion-label color=\"primary\"><b>Total Stops</b></ion-label>\r\n            <ion-label color=\"dark\">{{ item.DocCount }}</ion-label>\r\n          </ion-item>\r\n          <ion-button color=\"primary\" class=\"ion-margin\" expand=\"block\" (click)=\"onStart(item, i)\">\r\n            <ion-icon slot=\"start\" name=\"navigate-outline\"></ion-icon>View Route\r\n          </ion-button>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_routes_routes_module_ts.js.map