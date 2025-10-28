(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_map_map_module_ts"],{

/***/ 49059:
/*!***************************************************!*\
  !*** ./src/app/tabpage/map/map-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageRoutingModule": () => (/* binding */ MapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.page */ 98080);




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_0__.MapPage
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapPageRoutingModule);



/***/ }),

/***/ 14295:
/*!*******************************************!*\
  !*** ./src/app/tabpage/map/map.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPageModule": () => (/* binding */ MapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map-routing.module */ 49059);
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page */ 98080);







let MapPageModule = class MapPageModule {
};
MapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _map_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapPageRoutingModule
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_1__.MapPage]
    })
], MapPageModule);



/***/ }),

/***/ 98080:
/*!*****************************************!*\
  !*** ./src/app/tabpage/map/map.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapPage": () => (/* binding */ MapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./map.page.html */ 88730);
/* harmony import */ var _map_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.page.scss */ 67313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _map_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.model */ 59937);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/routes.service */ 11763);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);











let MapPage = class MapPage {
    constructor(route, utilService, routesService) {
        this.route = route;
        this.utilService = utilService;
        this.routesService = routesService;
        this.infoWindow = new google.maps.InfoWindow();
        this.stops = [];
        this.swiperParams = {
            slidesPerView: 1,
            initialSlide: 0,
            // spaceBetween: 2
        };
        this.route.queryParams.subscribe(params => {
            if (params && params.route) {
                this.routeId = params.route;
            }
            else {
                const routeId = localStorage.getItem('activeRouteId');
                if (routeId !== 'null') {
                    this.routeId = routeId;
                }
            }
        });
    }
    ionViewWillEnter() {
        setTimeout(() => {
            this.initMap(null);
        }, 1000);
        // navigator.geolocation.getCurrentPosition(
        //   (position: any) => {
        //     this.initMap({
        //       latitude: position.coords.latitude,
        //       longitude: position.coords.longitude
        //     });
        //   }, () => {
        //     this.initMap(null);
        //   }, {
        //   enableHighAccuracy: true,
        //   timeout: 10000,
        //   maximumAge: 0
        // });
    }
    ngOnInit() {
    }
    getStops() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilService.showLoading();
            this.routesService.getStops(this.routeId).subscribe((res) => {
                this.utilService.dismissLoading();
                this.stops = lodash__WEBPACK_IMPORTED_MODULE_5__.sortBy(res, ['XCSGNUM_0']);
                this.setMarker();
            }, (err) => {
                this.utilService.dismissLoading();
                this.utilService.showErrorCall(err);
            });
        });
    }
    initMap(location) {
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
                center: location ? { lat: Number(location.latitude), lng: Number(location.longitude) } : { lat: 0, lng: 0 },
                styles: _map_model__WEBPACK_IMPORTED_MODULE_2__.MAP_STYLES,
            });
        }
        if (this.routeId) {
            this.getStops();
        }
        // google.maps.event.addListenerOnce(this.googleMap, 'idle', () => {
        // })
    }
    setMarker() {
        const icon = {
            url: 'assets/images/pin.png',
            // size: new google.maps.Size(38, 38),
            // scaledSize: new google.maps.Size(38, 38),
            labelOrigin: new google.maps.Point(16, 12)
        };
        // const homeIcon= 'data:image/jpeg;base64,assets/icon/favicon.png';
        const homeIcon = 'assets/images/home.png';
        const homearker = new google.maps.Marker({
            position: { lat: Number(this.stops[0].X10A_FCYGEOY_0), lng: Number(this.stops[0].X10A_FCYGEOX_0) },
            map: this.googleMap,
            icon: homeIcon,
            label: {
                text: ' ',
                fontSize: "15px",
                fontWeight: "bold",
                color: '#ffffff',
            },
        });
        this.stops.map((mt, index) => {
            if (this.googleMap) {
                const marker = new google.maps.Marker({
                    position: { lat: Number(mt.XX10A_BPGEOY_0), lng: Number(mt.XX10A_BPGEOX_0) },
                    map: this.googleMap,
                    icon: icon,
                    label: {
                        text: index + 1 + '',
                        fontSize: "15px",
                        fontWeight: "bold",
                        color: '#ffffff',
                    },
                    title: mt.XBPNAME_0
                });
                marker.addListener("click", () => {
                    this.slides.slideTo(index, 0);
                    this.googleMap.setZoom(15);
                    this.googleMap.setCenter(marker.getPosition());
                    this.infoWindow.close();
                    // marker.setIcon("assets/images/location-marker-change.png");
                    this.infoWindow.setContent(marker.getTitle());
                    this.infoWindow.open(marker.getMap(), marker);
                });
            }
            return mt;
        });
        if (this.stops && this.stops.length > 0) {
            if (this.stops.length === 1) {
                this.googleMap.setCenter({ lat: Number(this.stops[0].XX10A_BPGEOY_0), lng: Number(this.stops[0].XX10A_BPGEOX_0) });
            }
            else {
                this.stops[0].type = 'start';
                this.stops[this.stops.length - 1].type = 'end';
                // const start = _.find(this.stops, { type: 'start' });
                const start = this.stops[0];
                const end = lodash__WEBPACK_IMPORTED_MODULE_5__.find(this.stops, { type: 'end' });
                const waypoints = lodash__WEBPACK_IMPORTED_MODULE_5__.filter(this.stops, (task) => {
                    return task.type !== 'end';
                }).map(task => {
                    return { location: { lat: Number(task.XX10A_BPGEOY_0), lng: Number(task.XX10A_BPGEOX_0) } };
                });
                let request = {
                    origin: { lat: Number(start.X10A_FCYGEOY_0), lng: Number(start.X10A_FCYGEOX_0) },
                    waypoints,
                    destination: { lat: Number(end.XX10A_BPGEOY_0), lng: Number(end.XX10A_BPGEOX_0) },
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
    }
    sliderChanges(event) {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.slides.getActiveIndex().then(index => {
                this.currentIndex = index;
            });
            this.currentEvent = this.stops[this.currentIndex];
            // if (this.currentEvent) {
            //   this.marker.setIcon("assets/images/location-marker-change.png");
            // }
            this.googleMap.setCenter({ lat: Number(this.currentEvent.XX10A_BPGEOY_0), lng: Number((_a = this.currentEvent) === null || _a === void 0 ? void 0 : _a.XX10A_BPGEOX_0) });
        });
    }
};
MapPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_4__.RoutesService }
];
MapPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSlides, { static: false },] }]
};
MapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-map',
        template: _raw_loader_map_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_map_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapPage);



/***/ }),

/***/ 67313:
/*!*******************************************!*\
  !*** ./src/app/tabpage/map/map.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".google-map {\n  position: relative;\n}\n\n.map-slides {\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n  width: calc(100%);\n}\n\n.map-slides .ion-slides .swiper-slide.swiper-slide-active ion-card {\n  border-style: solid;\n  border-color: var(--ion-color-primary);\n}\n\n.map-slides .ion-slides .slide-card {\n  width: 80%;\n  height: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUdNO0VBQ0UsbUJBQUE7RUFDQSxzQ0FBQTtBQURSOztBQUtJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFITiIsImZpbGUiOiJtYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvb2dsZS1tYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1hcC1zbGlkZXMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUpO1xyXG5cclxuICAuaW9uLXNsaWRlcyB7XHJcbiAgICAuc3dpcGVyLXNsaWRlLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZS1jYXJkIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 88730:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabpage/map/map.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div id=\"map_canvas\" class=\"google-map h-100\"></div>\r\n  <div class=\"map-slides\">\r\n    <ion-slides class=\"ion-slides\" [options]=\"swiperParams\" (ionSlideDidChange)=\"sliderChanges($event)\">\r\n      <ion-slide *ngFor=\"let sd of stops\">\r\n        <ion-card class=\"slide-card\">\r\n          <ion-card-header>\r\n            <ion-card-subtitle>{{ sd.XBPNAME_0 }}</ion-card-subtitle>\r\n          </ion-card-header>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_map_map_module_ts.js.map