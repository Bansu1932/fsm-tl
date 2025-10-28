(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_ors_ors_module_ts"],{

/***/ 41531:
/*!*******************************************!*\
  !*** ./src/app/ors/ors-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrsPageRoutingModule": () => (/* binding */ OrsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ors_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ors.page */ 45494);




const routes = [
    {
        path: '',
        component: _ors_page__WEBPACK_IMPORTED_MODULE_0__.OrsPage
    }
];
let OrsPageRoutingModule = class OrsPageRoutingModule {
};
OrsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrsPageRoutingModule);



/***/ }),

/***/ 33429:
/*!***********************************!*\
  !*** ./src/app/ors/ors.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrsPageModule": () => (/* binding */ OrsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ors_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ors-routing.module */ 41531);
/* harmony import */ var _ors_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ors.page */ 45494);







let OrsPageModule = class OrsPageModule {
};
OrsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ors_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrsPageRoutingModule
        ],
        declarations: [_ors_page__WEBPACK_IMPORTED_MODULE_1__.OrsPage]
    })
], OrsPageModule);



/***/ }),

/***/ 45494:
/*!*********************************!*\
  !*** ./src/app/ors/ors.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrsPage": () => (/* binding */ OrsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ors_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ors.page.html */ 80070);
/* harmony import */ var _ors_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ors.page.scss */ 20306);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/util.service */ 67241);
/* harmony import */ var _tabpage_map_map_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabpage/map/map.model */ 59937);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_routes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/routes.service */ 11763);









let OrsPage = class OrsPage {
    constructor(http, utilService, routeService) {
        this.http = http;
        this.utilService = utilService;
        this.routeService = routeService;
    }
    ngOnInit() {
        this.initMap();
    }
    initMap() {
        this.directionsService = new google.maps.DirectionsService({
            optimizeWaypoints: true
        });
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            polylineOptions: {
                strokeColor: "#009e71",
                strokeWeight: 7,
            }
        });
        if (!this.googleMap) {
            this.googleMap = new google.maps.Map(document.getElementById('map_canvas'), {
                mapTypeControl: false,
                streetViewControl: false,
                zoom: 10,
                center: { lat: 21.1702, lng: 72.8311 },
                styles: _tabpage_map_map_model__WEBPACK_IMPORTED_MODULE_3__.MAP_STYLES,
            });
        }
    }
    getRoute() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilService.showLoading();
            this.routeService.oprimizeRoute().subscribe((res) => {
                this.utilService.dismissLoading();
                if (res && res.code == 0) {
                    this.orsResult = res;
                    this.setMarker();
                }
                else {
                    this.utilService.showErrorCall(res);
                }
            }, (err) => {
                this.utilService.dismissLoading();
                this.utilService.showErrorCall(err);
            });
        });
    }
    setMarker() {
        const icon = {
            url: 'assets/images/pin.png',
            labelOrigin: new google.maps.Point(16, 12)
        };
        const homeIcon = 'assets/images/home.png';
        const stops = this.orsResult.routes[0].steps;
        const homearker = new google.maps.Marker({
            position: { lat: Number(stops[0].location[1]), lng: Number(stops[0].location[0]) },
            map: this.googleMap,
            icon: homeIcon,
            label: {
                text: ' ',
                fontSize: "15px",
                fontWeight: "bold",
                color: '#ffffff',
            },
        });
        const homeInfoWindow = new google.maps.InfoWindow();
        homeInfoWindow.setContent('<b>Start : ' + moment__WEBPACK_IMPORTED_MODULE_4__(new Date(stops[0].arrival * 1000)).format('DD/MM/YYYY hh:mm A') + '</b><br>' +
            '<b>End : ' + moment__WEBPACK_IMPORTED_MODULE_4__(new Date(stops[stops.length - 1].arrival * 1000)).format('DD/MM/YYYY hh:mm A') + '</b>');
        homeInfoWindow.open(homearker.getMap(), homearker);
        stops.map((mt, index) => {
            if (this.googleMap && index != stops.length - 1 && index != 0) {
                const marker = new google.maps.Marker({
                    position: { lat: Number(mt.location[1]), lng: Number(mt.location[0]) },
                    map: this.googleMap,
                    icon: icon,
                    label: {
                        text: index + '',
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: '#ffffff',
                    },
                    title: mt.XBPNAME_0
                });
                const infoWindow = new google.maps.InfoWindow();
                infoWindow.setContent('<b>Doc Id: ' + mt.id + '</b><br>' +
                    '<b>Customer: John Doe</b><br>' +
                    '<b>Type: ' + mt.type + '</b><br>' +
                    '<b>Arrival : ' + moment__WEBPACK_IMPORTED_MODULE_4__(new Date(mt.arrival * 1000)).format('DD/MM/YYYY hh:mm A') + '</b><br>' +
                    '<b>Service Time: ' + ((mt.service / 60) | 0) + ' min</b><br>' +
                    '<b>Departure : ' + moment__WEBPACK_IMPORTED_MODULE_4__(new Date((mt.arrival + mt.service) * 1000)).format('DD/MM/YYYY hh:mm A') + '</b><br>');
                infoWindow.open(marker.getMap(), marker);
            }
            return mt;
        });
        if (stops && stops.length > 0) {
            const start = stops[0];
            const end = stops[stops.length - 1];
            const waypoints = [];
            for (let i = 1; i < stops.length - 1; i++) {
                waypoints.push({
                    location: { lat: stops[i].location[1], lng: stops[i].location[0] }
                });
            }
            let request = {
                origin: { lat: Number(start.location[1]), lng: Number(start.location[0]) },
                waypoints,
                destination: { lat: Number(end.location[1]), lng: Number(end.location[0]) },
                travelMode: google.maps.DirectionsTravelMode.DRIVING
            };
            this.directionsService.route(request, (response, status) => {
                if (status == google.maps.DirectionsStatus.OK) {
                    this.directionsDisplay.setDirections(response);
                    this.directionsDisplay.setMap(this.googleMap);
                    this.directionsDisplay.setOptions({ suppressMarkers: true });
                }
            });
        }
    }
};
OrsPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService },
    { type: _services_routes_service__WEBPACK_IMPORTED_MODULE_5__.RoutesService }
];
OrsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-ors',
        template: _raw_loader_ors_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ors_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrsPage);



/***/ }),

/***/ 20306:
/*!***********************************!*\
  !*** ./src/app/ors/ors.page.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 80070:
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ors/ors.page.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div id=\"map_canvas\" class=\"google-map h-100\"></div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button (click)=\"getRoute()\" expand=\"full\">\r\n      Get Route\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_ors_ors_module_ts.js.map