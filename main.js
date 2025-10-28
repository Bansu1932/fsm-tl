(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/guards/auth.guard */ 87618);
/* harmony import */ var _shared_guards_guest_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/guards/guest.guard */ 47299);





const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule),
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./auth/login/login.module */ 28990)).then(m => m.LoginPageModule),
        canActivate: [_shared_guards_guest_guard__WEBPACK_IMPORTED_MODULE_1__.GuestGuard]
    },
    {
        path: 'configuration',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-soap___ivy_ngcc___fesm2015_ngx-soap_js"), __webpack_require__.e("src_app_configuration_configuration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./configuration/configuration.module */ 55062)).then(m => m.ConfigurationPageModule),
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabpage_tabpage_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabpage/tabpage.module */ 77582)).then(m => m.TabPageModule),
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'ors',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_moment_moment_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_ors_ors_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ors/ors.module */ 33429)).then(m => m.OrsPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/routes.service */ 11763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ 75592);
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/util.service */ 67241);
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/events */ 20579);
/* harmony import */ var bn_ng_idle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bn-ng-idle */ 41695);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ 37556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ 38605);












let AppComponent = class AppComponent {
    constructor(utilService, events, network, bnIdle, authService, router, storage, routesService) {
        this.utilService = utilService;
        this.events = events;
        this.network = network;
        this.bnIdle = bnIdle;
        this.authService = authService;
        this.router = router;
        this.storage = storage;
        this.routesService = routesService;
        if (this.network.type === 'none') {
            this.utilService.setOnline(false);
        }
        else {
            this.utilService.setOnline(true);
        }
        this.network.onDisconnect().subscribe(() => {
            console.log('network disconnected');
            this.events.publish('network:change', false);
            if (this.utilService.isOnline) {
                this.utilService.showToast('Internet Disconnected');
            }
            this.utilService.setOnline(false);
        });
        this.network.onConnect().subscribe(() => {
            console.log('network connected');
            this.events.publish('network:change', true);
            if (!this.utilService.isOnline) {
                this.utilService.showToast('Internet Connected');
            }
            this.utilService.setOnline(true);
        });
    }
    ngAfterViewInit() {
        this.checkPermission();
        // this.authService.setTimeOut.subscribe(res => {
        //   if (res) {
        //     this.driverID = res;
        //     if (this.driverID) {
        //       const x: Subscription = this.routesService.getTimeOut().subscribe({
        //         next: (res) => {
        //           this.timeOut = res.data[0].VALEUR_0;
        //           let a = this.bnIdle.startWatching(this.timeOut * 60).subscribe((isTimedOut: boolean) => {
        //             if (isTimedOut) {
        //               this.bnIdle.stopTimer();
        //               a.unsubscribe();
        //               this.authService.logout();
        //             }
        //           });
        //         },
        //         complete: () => x.unsubscribe()
        //       });
        //     }
        //   }
        // });
        // this.driverID = localStorage.getItem('podDriverId');
        // if (this.driverID) {
        //   const y: Subscription = this.routesService.getTimeOut().subscribe({
        //     next: (res) => {
        //       if (res.status === 1) {
        //         this.timeOut = res.data[0].VALEUR_0;
        //         let b = this.bnIdle.startWatching(this.timeOut * 60).subscribe((isTimedOut: boolean) => {
        //           if (isTimedOut) {
        //             this.bnIdle.stopTimer();
        //             b.unsubscribe();
        //             this.authService.logout();
        //           }
        //         });
        //       }
        //     }, complete: () => y.unsubscribe()
        //   })
        // }
    }
    getLocation() {
        if (navigator.geolocation) {
            const options = {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            };
            navigator.geolocation.getCurrentPosition((position) => {
                if (position && position.coords) {
                    _services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService.currentPos = {
                        lat: (position.coords.latitude) ? position.coords.latitude : 0,
                        lng: (position.coords.longitude) ? position.coords.longitude : 0
                    };
                }
            }, err => {
                console.log(err);
            }, options);
            navigator.geolocation.watchPosition((position) => {
                if (position && position.coords) {
                    _services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService.currentPos = {
                        lat: (position.coords.latitude) ? position.coords.latitude : 0,
                        lng: (position.coords.longitude) ? position.coords.longitude : 0
                    };
                }
            }, err => {
                console.log(err);
            }, options);
        }
        else {
            console.log('The location is not supported by this browser.');
        }
    }
    checkPermission() {
        navigator.permissions && navigator.permissions.query({ name: 'geolocation' })
            .then((PermissionStatus) => {
            if (PermissionStatus.state == 'granted') {
                this.getLocation();
            }
            else if (PermissionStatus.state == 'prompt') {
                // prompt - not yet grated or denied
                this.utilService.showConfirmationPopup('Location Alert', 'Please start your GPS', (cb) => {
                    if (cb) {
                        this.getLocation();
                    }
                });
            }
            else {
                //denied
                this.utilService.showAlert('Location Alert', '', 'Permission denied.');
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService },
    { type: _services_events__WEBPACK_IMPORTED_MODULE_5__.Events },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__.Network },
    { type: bn_ng_idle__WEBPACK_IMPORTED_MODULE_7__.BnNgIdleService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_9__.Storage },
    { type: src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__.RoutesService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 72249);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ 75592);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 52635);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @digitalascetic/ngx-pica */ 69094);
/* harmony import */ var bn_ng_idle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! bn-ng-idle */ 41695);
















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot({
                mode: 'ios'
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_11__.NgxPicaModule,
            _ionic_storage__WEBPACK_IMPORTED_MODULE_12__.IonicStorageModule.forRoot(),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy },
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__.Network,
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera,
            bn_ng_idle__WEBPACK_IMPORTED_MODULE_15__.BnNgIdleService
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 37556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.service */ 67241);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.service */ 5620);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ 20579);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _routes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.service */ 11763);









let AuthService = class AuthService {
    constructor(router, storage, utilService, events, commonService, routesService) {
        this.router = router;
        this.storage = storage;
        this.utilService = utilService;
        this.events = events;
        this.commonService = commonService;
        this.routesService = routesService;
        this.timer = null;
        this.setTimeOut = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
        this.timeCalculate = false;
        this.userSub = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    }
    handleInactivityTime() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const events = [
                'mousedown',
                'mousemove',
                'keydown',
                'keyup',
                'input',
                'scroll',
                'touchstart',
                'touchend',
                'touchcancel',
                'touchmove',
                'click'
            ];
            events.forEach(name => {
                document.addEventListener(name, (e) => {
                    this.resetTimer();
                }, true);
            });
        });
    }
    resetTimer(active = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let last_active = sessionStorage.getItem('app.last_active');
            if (this.timeCalculate == false) {
                sessionStorage.setItem('app.last_active', new Date().getTime().toString());
            }
            this.timer = setInterval(() => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                let last_active = sessionStorage.getItem('app.last_active');
                if (last_active) {
                    last_active = Number(last_active);
                    const diff = (Number(new Date().getTime()) - last_active);
                    if (diff > (this.timeOut * 60 * 1000)) {
                        if (!this.timeCalculate) {
                            this.timeCalculate = true;
                            clearInterval(this.timer);
                            this.logout();
                        }
                    }
                }
                else {
                    clearInterval(this.timer);
                }
            }), 1000);
            // })
        });
    }
    login(data) {
        // if (!this.isCallingApi) {
        // this.isCallingApi = true;
        this.utilService.showLoading('Verifying login details, please wait...').then(res => {
            this.commonService.post('/VerifyLogin', data).subscribe((res) => {
                this.utilService.dismissLoading();
                if (res.status == 0) {
                    this.utilService.showToastError(res.message);
                }
                else if (res.status == 2) {
                    this.utilService.showToast(res.message);
                }
                else if (res && res.status == 1) {
                    this.routesService.getTimeOut().subscribe(resp => {
                        this.timeOut = resp.data[0].VALEUR_0;
                        this.handleInactivityTime();
                        setTimeout(() => {
                            document.getElementById('ion-content').click();
                        }, 1000);
                        this.setTimeOut.next(res.data[0].XUSER_0);
                        this.storeAndProceed(res.data[0].XUSER_0, false);
                        this.utilService.showToastSucccess('Logged in successfully.');
                    });
                }
            });
        }, error => {
            // this.isCallingApi = false;
            this.utilService.dismissLoading();
            if (error.error && error.error.message === 'Unauthorised') {
                this.utilService.showToast('Invalid username or password, please try again');
            }
            else {
                this.utilService.showErrorCall(error);
            }
        });
        // }
    }
    autologout(expireTime) {
        this.clearTimeout = setTimeout(() => {
            this.logout();
        }, expireTime);
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilService.showLoading();
            const driverID = localStorage.getItem('podDriverId');
            const params = {
                driverId: driverID
            };
            this.commonService.post('/VerifyLogout', params).subscribe((res) => {
                setTimeout(() => {
                    this.utilService.dismissLoading();
                }, 1000);
                if (res.status == 1) {
                    this.timeCalculate = false;
                    localStorage.clear();
                    this.storage.clear();
                    sessionStorage.removeItem('app.last_active');
                    this.events.publish("user:logout", true);
                    this.router.navigateByUrl('/login');
                    this.utilService.showToastSucccess(res.message);
                    if (this.clearTimeout) {
                        clearTimeout(this.clearTimeout);
                    }
                }
            }, (err) => {
                this.utilService.dismissLoading();
                this.utilService.showErrorCall(err);
            });
            // window.dispatchEvent(new CustomEvent('user:logout'));
        });
    }
    socialLogin(data) {
        if (!data.email) {
            data.email = data.fb_id + '@facebook.com';
        }
        const model = data;
        model.name = data.first_name + ' ' + data.last_name;
        model.social_type = 1;
        model.social_account_id = data.id;
        this.utilService.showLoading('Verifying social login details, please wait...').then(res => {
            this.commonService.postWithFormData('/api/socialLogin', model).subscribe((res) => {
                this.isCallingApi = false;
                this.utilService.dismissLoading();
                if (res && res.data && res.data.token) {
                    this.storeAndProceed(res);
                }
            }, error => {
                this.isCallingApi = false;
                this.utilService.dismissLoading();
                if (error.error && error.error.message === 'Unauthorised') {
                    this.utilService.showToast('Invalid username or password, please try again');
                }
                else {
                    this.utilService.showErrorCall(error);
                }
            });
        });
    }
    storeAndProceed(data, noNeedDashView = false, path = '') {
        this.utilService.setStorageData('user', data).then(res => {
            if (noNeedDashView) {
                this.router.navigate([path], { replaceUrl: false });
            }
            else {
                this.gotoDashBoard(data);
            }
        });
        localStorage.setItem('podDriverId', data);
    }
    gotoDashBoard(data) {
        this.router.navigate(['/tabs/routes'], { queryParams: { code: data } });
        this.events.publish("user:login", true);
        // window.dispatchEvent(new CustomEvent('user:login'));
    }
    registerUser(data) {
        this.utilService.showLoading('Signing up, please wait ...').then(() => {
            this.commonService.post('/api/register', data).subscribe((res) => {
                this.utilService.dismissLoading();
                if (res && res.data && res.data.token) {
                    this.storeAndProceed(res.data);
                }
            }, error => {
                this.utilService.dismissLoading();
                this.utilService.showErrorCall(error);
            });
        });
    }
    sendForgotPasswordLink(data) {
        this.utilService.showLoading();
        this.commonService.postWithFormData(`/api/forgotpassword`, data).subscribe((res) => {
            this.utilService.dismissLoading();
            this.utilService.showAlert('', 'Password recovery email sent', ` A message(OTP) has been sent to ${data.email} with instructions to reset your password.`, () => {
                this.router.navigate(['/change-password'], { queryParams: { otp: res.data.token, email: data.email } });
            });
        }, err => {
            console.log(err);
            this.utilService.dismissLoading();
            this.utilService.showErrorCall(err);
        });
    }
    resetPassword(data) {
        this.utilService.showLoading();
        this.commonService.postWithFormData(`/api/reset-password`, data).subscribe((res) => {
            this.utilService.dismissLoading();
            this.utilService.showAlert('Congratulations', '', 'Your password changed Successfully. To use app please login.', () => {
                this.router.navigate(['/login'], { replaceUrl: true });
            }, 'Login now');
        }, err => {
            console.log(err);
            this.utilService.dismissLoading();
            this.utilService.showErrorCall(err);
        });
    }
};
AuthService.isLockScreen = false;
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_0__.UtilService },
    { type: _events__WEBPACK_IMPORTED_MODULE_2__.Events },
    { type: _common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService },
    { type: _routes_service__WEBPACK_IMPORTED_MODULE_3__.RoutesService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 5620:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 92340);







let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
        this._adminHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
    }
    getAdminHeaders() {
        if (window.localStorage.getItem('token')) {
            this._adminHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
                // 'id_token': 'Bearer ' + window.localStorage.getItem('id_token'),
            });
        }
        else {
            this._adminHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            });
        }
        return this._adminHeaders;
    }
    get(url, params) {
        let queryStr = '';
        if (params) {
            Object.keys(params).forEach(key => {
                if (!params[key]) {
                    delete params[key];
                }
            });
            const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams({
                fromObject: params
            });
            queryStr = httpParams.toString();
        }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + url + (queryStr
            ? '?' + queryStr : ''), { headers: this.getAdminHeaders() })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }));
    }
    getById(url, id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + url + id, { headers: this.getAdminHeaders() })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }));
    }
    post(url, data, isLogin) {
        // let headers: any;
        // if (isLogin) {
        //     headers = new HttpHeaders({ 'Authorization': 'Bearer ' + window.localStorage.getItem('id_token') });
        // } else {
        //     headers = this.getAdminHeaders();
        // }
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + url, data, { headers: this.getAdminHeaders() })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }));
    }
    postWithFormData(url, data) {
        const userHeaders = lodash__WEBPACK_IMPORTED_MODULE_0__.clone(this._adminHeaders);
        delete userHeaders['Content-Type'];
        const hdrs = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Authorization': 'Bearer ' + window.localStorage.getItem('access_token'),
            'id_token': 'Bearer ' + window.localStorage.getItem('id_token')
        });
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + url, data, { headers: hdrs })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }));
    }
    put(url, data, id) {
        if (typeof data === 'object' && data.id) {
            delete data.id;
        }
        if (id) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + url + '/' + id, data, { headers: this.getAdminHeaders() })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
            }));
        }
        else {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + url, data, { headers: this.getAdminHeaders() })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
            }));
        }
    }
    putWithFormData(url, data) {
        const userHeaders = lodash__WEBPACK_IMPORTED_MODULE_0__.clone(this._adminHeaders);
        userHeaders.delete('Content-Type');
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + url, data, { headers: userHeaders })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }));
    }
    putWithProgress(url, data) {
        const userHeaders = lodash__WEBPACK_IMPORTED_MODULE_0__.clone(this._adminHeaders);
        userHeaders.delete('Content-Type');
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + url, data, {
            headers: userHeaders,
            observe: 'events',
            reportProgress: true,
        });
    }
    postWithProgress(url, data) {
        const userHeaders = lodash__WEBPACK_IMPORTED_MODULE_0__.clone(this._adminHeaders);
        userHeaders.delete('Content-Type');
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + url, data, {
            headers: userHeaders,
            observe: 'events',
            reportProgress: true,
        });
    }
    delete(url) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.host + url, { headers: this.getAdminHeaders() })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
        }));
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
CommonService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ 20579:
/*!************************************!*\
  !*** ./src/app/services/events.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Events": () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);



/*  */
/**
 * https://medium.com/wizpanda/dealing-with-breaking-change-in-ionic-5-db3ba711dfcd
 * A custom Events service just like Ionic 3 Events https://ionicframework.com/docs/v3/api/util/Events/ which got removed in Ionic 5.
 *
 * @author Shashank Agrawal
 */
let Events = class Events {
    constructor() {
        this.channels = {};
    }
    /**
     * Subscribe to a topic and provide a single handler/observer.
     * @param topic The name of the topic to subscribe to.
     * @param observer The observer or callback function to listen when changes are published.
     *
     * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
     */
    subscribe(topic, observer) {
        if (!this.channels[topic]) {
            this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }
        return this.channels[topic].subscribe(observer);
    }
    /**
     * Publish some data to the subscribers of the given topic.
     * @param topic The name of the topic to emit data to.
     * @param data data in any format to pass on.
     */
    publish(topic, data) {
        const subject = this.channels[topic];
        if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
        }
        subject.next(data);
    }
    /**
     * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
     * destroy the observable of the topic using this method.
     * @param topic The name of the topic to destroy.
     */
    destroy(topic) {
        const subject = this.channels[topic];
        if (!subject) {
            return;
        }
        subject.complete();
        delete this.channels[topic];
    }
};
Events = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], Events);



/***/ }),

/***/ 11763:
/*!********************************************!*\
  !*** ./src/app/services/routes.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesService": () => (/* binding */ RoutesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 41439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 23815);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.service */ 5620);
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.service */ 67241);






let RoutesService = class RoutesService {
    constructor(commonService, utilService) {
        this.commonService = commonService;
        this.utilService = utilService;
    }
    oprimizeRoute() {
        return this.commonService.get('/optimize');
    }
    getRoutes(ID, type = null) {
        if (!navigator.onLine || !this.utilService.isOnline) {
            try {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.defer)(() => {
                    if (type === 'completed') {
                        return this.utilService.getStorageData('completedRoutes');
                    }
                    else {
                        return this.utilService.getStorageData('routes');
                    }
                });
            }
            catch (error) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
            }
        }
        else {
            return this.commonService.get(`/Routes/${ID}?type=${type}`);
        }
    }
    getStops(routeId) {
        if (!navigator.onLine || !this.utilService.isOnline) {
            try {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.defer)(() => {
                    return this.utilService.getStorageData('stops').then(stops => {
                        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(stops, { routeId });
                    });
                });
            }
            catch (error) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
            }
        }
        else {
            return this.commonService.get('/Stops/' + routeId);
        }
    }
    getStopsDetails(stopId) {
        if (!navigator.onLine || !this.utilService.isOnline) {
            try {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.defer)(() => {
                    return this.utilService.getStorageData('documentinfo').then(documentinfo => {
                        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(documentinfo, { XDOCNUM_0: stopId });
                    });
                });
            }
            catch (error) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
            }
        }
        else {
            return this.commonService.get('/Documentinfo/' + stopId);
        }
    }
    getDocumentDetails(detailDetId) {
        if (!navigator.onLine || !this.utilService.isOnline) {
            try {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.defer)(() => {
                    return this.utilService.getStorageData('documentdet').then(documentdet => {
                        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(documentdet, { XDOCNUM_0: detailDetId });
                    });
                });
            }
            catch (error) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
            }
        }
        else {
            return this.commonService.get('/DocumentDet/' + detailDetId);
        }
    }
    getPod(podId) {
        if (!navigator.onLine || !this.utilService.isOnline) {
            try {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.defer)(() => {
                    return this.utilService.getStorageData('poddet').then(poddet => {
                        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(poddet, { XDOCNUM_0: podId });
                    });
                });
            }
            catch (error) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
            }
        }
        else {
            return this.commonService.get('/PODDet/' + podId);
        }
    }
    getPodReport(podRepId) {
        if (!navigator.onLine || !this.utilService.isOnline) {
            try {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.defer)(() => {
                    return this.utilService.getStorageData('podrep').then(podrep => {
                        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(podrep, { XDOCNUM_0: podRepId });
                    });
                });
            }
            catch (error) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([]);
            }
        }
        else {
            return this.commonService.get('/PODRep/' + podRepId);
        }
    }
    getStartRoute(startRouteId) {
        return this.commonService.post('/DocSta', startRouteId);
    }
    postSkipRoute(params) {
        return this.commonService.post('/DocSkip', params);
    }
    postCancelRoute(params) {
        return this.commonService.post('/CancelPOD', params);
    }
    postStatus(params) {
        return this.commonService.post('/PODStatus', params);
    }
    validateDelivery(params) {
        return this.commonService.post('/delivery-validation', params);
    }
    postCheckIn(params) {
        return this.commonService.post('/CheckIn', params);
    }
    docReschedule(params) {
        return this.commonService.post('/DocRes', params);
    }
    postCheckOut(params) {
        return this.commonService.post('/CheckOut', params);
    }
    customerAvailable(params) {
        return this.commonService.post('/Custavail', params);
    }
    skipReason() {
        return this.commonService.get('/SkipReasons');
    }
    cancelReasons() {
        return this.commonService.get('/CancelReasons');
    }
    rescheduleReasons() {
        return this.commonService.get('/ReschedReasons');
    }
    incidentReasons() {
        return this.commonService.get('/IncidentReasons');
    }
    getTimeOut() {
        return this.commonService.get('/TimeOut');
    }
};
RoutesService.ctorParameters = () => [
    { type: _common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService },
    { type: _util_service__WEBPACK_IMPORTED_MODULE_2__.UtilService }
];
RoutesService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({ providedIn: 'root' })
], RoutesService);



/***/ }),

/***/ 67241:
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 38605);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/camera */ 37673);
/* harmony import */ var _digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @digitalascetic/ngx-pica */ 69094);








let UtilService = class UtilService {
    constructor(router, alertCtrl, actionSheetCtrl, loadingCtrl, toastCtrl, storage, ngZone, _ngxPicaService) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.ngZone = ngZone;
        this._ngxPicaService = _ngxPicaService;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host;
        this.pictureUrl = '';
        // public fileTransfer: FileTransferObject;
        this.loader = null;
        this.isOnline = true;
        this.myImage = null;
        this.toBase64 = (file) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
        });
        this.pictureUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.host + 'uploads/';
        // this.fileTransfer = this.transfer.create();
    }
    setOnline(flag) {
        this.isOnline = flag;
    }
    showToast(message = 'Something went wrong. Please try again later.') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 3000
            });
            toast.present();
        });
    }
    showAlert(title, subTitle, message, callback, buttonText = 'Ok') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                subHeader: subTitle,
                message,
                backdropDismiss: false,
                buttons: [{
                        text: buttonText,
                        role: 'cancel',
                        handler: (blah) => {
                            if (callback) {
                                callback();
                            }
                        }
                    }]
            });
            yield alert.present();
        });
    }
    showConfirmationPopup(title, msg, callback, buttonText = ['Yes', 'No']) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: msg,
                buttons: [
                    {
                        text: buttonText[1],
                        role: 'cancel',
                        handler: (blah) => {
                            callback(0);
                        }
                    }, {
                        text: buttonText[0],
                        handler: () => {
                            callback(1);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    showLoading(message = 'Please wait') {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadingCtrl.create({
                message,
                animated: true
            }).then(loader => {
                this.loader = loader;
                this.loader.present();
            });
        });
    }
    showToastSucccess(message = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 3000,
                color: "success",
                position: "top",
            });
            toast.present();
        });
    }
    showToastError(message = "") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message,
                duration: 3000,
                color: "danger",
            });
            toast.present();
        });
    }
    dismissLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (this.loader) {
                this.loader.dismiss();
            }
        });
    }
    showImageActionSheet(isDocSelection, callback) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const options = [
                {
                    text: 'Load From Library',
                    handler: () => {
                        callback(_capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Photos);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: () => {
                        callback(_capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Camera);
                    }
                },
            ];
            // if (isDocSelection) {
            //   options.push({
            //     text: 'Select Document',
            //     handler: () => {
            //       callback(3);
            //     }
            //   });
            // }
            options.push({
                text: 'Cancel',
                role: 'cancel'
            });
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Select Source',
                buttons: options
            });
            yield actionSheet.present();
        });
    }
    pickCamera(type, callback) {
        if (type === _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraSource.Camera) {
            const cameraInput = document.getElementById('cameraInput');
            cameraInput.click();
            cameraInput.onchange = (ev) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                if (ev.target['files'][0]) {
                    this.resizeImage(ev.target['files'][0], callback);
                }
            });
        }
        else {
            _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.Camera.getPhoto({
                quality: 100,
                allowEditing: true,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__.CameraResultType.DataUrl,
                source: type,
            })
                .then((ImageData) => {
                const file = this.dataURItoBlob(ImageData.dataUrl);
                this.resizeImage(file, callback);
                // callback(ImageData.dataUrl.split(',')[1]);
            })
                .catch((err) => {
            });
        }
    }
    resizeImage(file, callback) {
        this._ngxPicaService.resizeImage(file, 300, 300, { aspectRatio: { keepAspectRatio: true }, quality: 0.3, exifOptions: { forceExifOrientation: false } })
            .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const base64 = yield this.toBase64(res);
            callback(base64.split(',')[1]);
        }));
    }
    showErrorCall(err, showErrToast = false, errMsg) {
        if (err.status === 401) {
            this.logout();
        }
        if (err.error) {
            try {
                const errBody = err.error;
                errMsg = errBody.message;
                if (typeof errMsg === 'object') {
                    let errTypes = [];
                    Object.keys(errMsg).forEach(key => {
                        errTypes = errTypes.concat(errMsg[key]);
                    });
                    errMsg = errTypes.join(',');
                }
            }
            catch (error) {
                this.showToast();
            }
        }
        else {
            this.showToast();
        }
        if (errMsg) {
            this.showToast(errMsg);
        }
        else {
            this.showToast(errMsg);
        }
    }
    logout() {
        this.showAlert('Alert', 'Your session is expired due to inactive use.', 'Please tap Login to continue.', () => {
            localStorage.clear();
            this.storage.clear();
            this.router.navigate(['/login'], { replaceUrl: true });
            window.dispatchEvent(new CustomEvent('user:logout'));
        }, 'Login');
    }
    dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
            byteString = unescape(dataURI.split(',')[1]);
        }
        // separate out the mime component
        const mimeString = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        // write the bytes of the string to a typed array
        const ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
    }
    setStorageData(key, value) {
        return this.storage.set(key, value);
    }
    getStorageData(key) {
        return this.storage.get(key);
    }
    formatNumber(value) {
        if (!value) {
            return '';
        }
        const regex = /[-+*/()=,\s]/g;
        value = value.replace(regex, '');
        const parts = value.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    }
    redirectToBrowser(link) {
        window.open(link, '_system');
    }
};
UtilService.currentPos = {
    lat: 0,
    lng: 0
};
UtilService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone },
    { type: _digitalascetic_ngx_pica__WEBPACK_IMPORTED_MODULE_7__.NgxPicaService }
];
UtilService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], UtilService);



/***/ }),

/***/ 87618:
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _services_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/events */ 20579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 37556);





let AuthGuard = class AuthGuard {
    constructor(router, events, _auth) {
        this.router = router;
        this.events = events;
        this._auth = _auth;
    }
    canActivate() {
        try {
            const data = localStorage.getItem("podDriverId");
            if (data && data !== "null") {
                this.events.publish("user:login", true);
                return true;
            }
        }
        catch (err) {
            this.events.publish("user:logout", true);
            this.router.navigateByUrl("/login");
            return false;
        }
        this.events.publish("user:logout", true);
        this.router.navigateByUrl("/login");
        return false;
        // return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _services_events__WEBPACK_IMPORTED_MODULE_0__.Events },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: "root",
    })
], AuthGuard);



/***/ }),

/***/ 47299:
/*!**********************************************!*\
  !*** ./src/app/shared/guards/guest.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuestGuard": () => (/* binding */ GuestGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/events */ 20579);




let GuestGuard = class GuestGuard {
    constructor(events, router) {
        this.events = events;
        this.router = router;
    }
    canActivate() {
        try {
            let data;
            data = localStorage.getItem('podDriverId');
            if (data && data !== "null") {
                this.events.publish("user:login", true);
                this.router.navigate(['/tabs/routes'], { queryParams: { code: data } });
                return false;
            }
        }
        catch (err) {
            this.events.publish("user:logout", true);
            return true;
        }
        this.events.publish("user:logout", true);
        return true;
    }
};
GuestGuard.ctorParameters = () => [
    { type: src_app_services_events__WEBPACK_IMPORTED_MODULE_0__.Events },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
GuestGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GuestGuard);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    host: 'https://podnodejs.tema-systems.com:8074/api',
    soap: 'https://tms.tema-systems.com',
    soapUsername: 'TESTUSER',
    soapPassword: 'TU@123*',
    soapLanguage: 'ENG',
    soapPoolAlias: 'DEMOPOD'
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 32404);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		79437,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		18025,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		64262,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		58206,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		24297,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app id=\"ion-content\">\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n<input type=\"file\" accept=\"image/*\" id=\"cameraInput\" capture style=\"display: none;\">");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map