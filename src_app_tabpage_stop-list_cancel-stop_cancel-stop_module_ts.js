(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_stop-list_cancel-stop_cancel-stop_module_ts"],{

/***/ 17700:
/*!*****************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/cancel-stop/cancel-stop-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelStopPageRoutingModule": () => (/* binding */ CancelStopPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cancel_stop_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-stop.page */ 47791);




const routes = [
    {
        path: '',
        component: _cancel_stop_page__WEBPACK_IMPORTED_MODULE_0__.CancelStopPage
    }
];
let CancelStopPageRoutingModule = class CancelStopPageRoutingModule {
};
CancelStopPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CancelStopPageRoutingModule);



/***/ }),

/***/ 47158:
/*!*********************************************************************!*\
  !*** ./src/app/tabpage/stop-list/cancel-stop/cancel-stop.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelStopPageModule": () => (/* binding */ CancelStopPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cancel_stop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel-stop-routing.module */ 17700);
/* harmony import */ var _cancel_stop_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-stop.page */ 47791);







let CancelStopPageModule = class CancelStopPageModule {
};
CancelStopPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cancel_stop_routing_module__WEBPACK_IMPORTED_MODULE_0__.CancelStopPageRoutingModule
        ],
        declarations: [_cancel_stop_page__WEBPACK_IMPORTED_MODULE_1__.CancelStopPage]
    })
], CancelStopPageModule);



/***/ }),

/***/ 47791:
/*!*******************************************************************!*\
  !*** ./src/app/tabpage/stop-list/cancel-stop/cancel-stop.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelStopPage": () => (/* binding */ CancelStopPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cancel_stop_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cancel-stop.page.html */ 65225);
/* harmony import */ var _cancel_stop_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancel-stop.page.scss */ 63132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/routes.service */ 11763);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-soap */ 92720);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);










const callcontent = `
      <codeLang xsi:type="xsd:string">${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.soapLanguage}</codeLang>
      <poolAlias xsi:type="xsd:string">${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.soapPoolAlias}</poolAlias>
      <poolId xsi:type="xsd:string">?</poolId>
      <requestConfig xsi:type="xsd:string">?</requestConfig>
`;
let CancelStopPage = class CancelStopPage {
    constructor(utilService, router, route, routesService, soap) {
        this.utilService = utilService;
        this.router = router;
        this.route = route;
        this.routesService = routesService;
        this.soap = soap;
        this.submitted = false;
        this.cancelstopModel = {
            cancel_type: 'cancel',
            comment: '',
        };
        this.reschedstopModel = {
            cancel_type: 'reschedule',
            comment: '',
        };
        this.displayType = '';
        this.minDateTime = moment__WEBPACK_IMPORTED_MODULE_4__().add(1, 'day').format();
        this.maxDateTime = moment__WEBPACK_IMPORTED_MODULE_4__().add(10, 'year').format();
        this.isCustVal = true;
        this.route.queryParams.subscribe(params => {
            if (params && params.docNo) {
                this.docNo = params.docNo;
                this.displayType = params.displayType;
                this.cus_name = params.cus_name;
                this.cus_code = params.cus_code;
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.displayType == 'cancelStop') {
                this.getCancelReasons();
            }
            if (this.displayType == 'rescheduleStop') {
                this.rescheduleReasons();
                this.customerAvailable();
            }
        });
    }
    getCancelReasons() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilService.showLoading();
            this.routesService.cancelReasons().subscribe((resp) => {
                this.cancelReasons = resp;
                this.utilService.dismissLoading();
            }, (err) => {
                this.utilService.dismissLoading();
                this.utilService.showErrorCall(err);
            });
        });
    }
    rescheduleReasons() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilService.showLoading();
            this.routesService.rescheduleReasons().subscribe((resp) => {
                this.reschedReasons = resp;
                this.utilService.dismissLoading();
            }, (err) => {
                this.utilService.dismissLoading();
                this.utilService.showErrorCall(err);
            });
        });
    }
    checkCusVal() {
        const dateDay = moment__WEBPACK_IMPORTED_MODULE_4__(this.reschedstopModel.reschedule_date).day();
        // let objectKey = Object.keys(this.custAvail);
        let objectVal = Object.values(this.custAvail);
        if (dateDay == 0) {
            if (objectVal[6] == 2) {
                this.isCustVal = true;
            }
            else if (objectVal[6] == 1) {
                this.isCustVal = false;
            }
        }
        else {
            if (objectVal[dateDay - 1] == 2) {
                this.isCustVal = true;
            }
            else if (objectVal[dateDay - 1] == 1) {
                this.isCustVal = false;
            }
        }
    }
    customerAvailable() {
        const params = { CustCode: this.cus_code };
        this.routesService.customerAvailable(params).subscribe((resp) => {
            this.custAvail = resp[0];
        }, (err) => {
            this.utilService.showErrorCall(err);
        });
    }
    onSubmit(form) {
        this.submitted = true;
        if (form.valid) {
            if (this.displayType == 'cancelStop') {
                this.utilService.showConfirmationPopup('Confirmation', 'Are you sure you want to cancel this stop', (cb) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    if (cb == 1) {
                        this.cancelstopModel.doc = this.docNo;
                        const datetime = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DDTHH:mm:ss');
                        let routeId = localStorage.getItem('activeRouteId');
                        this.cancelstopModel.datetime = datetime;
                        this.cancelstopModel.route_no = routeId;
                        yield this.utilService.showLoading();
                        this.routesService.postCancelRoute(this.cancelstopModel).subscribe((resp) => {
                            this.utilService.dismissLoading();
                            this.router.navigate(['/tabs/stop-list'], { queryParams: { route: routeId } });
                        }, (err) => {
                            this.utilService.dismissLoading();
                            this.utilService.showErrorCall(err);
                        });
                    }
                }));
            }
            if (this.displayType == 'rescheduleStop') {
                if (this.isCustVal) {
                    this.utilService.showConfirmationPopup('Confirmation', 'Are you sure you want to reschedule this stop', (cb) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        if (cb == 1) {
                            const params = {
                                doc: this.docNo,
                                datetime: moment__WEBPACK_IMPORTED_MODULE_4__(this.reschedstopModel.reschedule_date).format('YYYY-MM-DDTHH:mm:ss')
                            };
                            this.routesService.docReschedule(params).subscribe((resp) => {
                            }, (err) => {
                                this.utilService.showErrorCall(err);
                            });
                            const soapDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.reschedstopModel.reschedule_date).format('YYYYMMDD');
                            let value = `
            <![CDATA[<PARAM>
              <GRP ID="SDH1_1">
                <FLD NAME="DLVDAT" TYPE="Date">${soapDate}</FLD>
              </GRP>
            </PARAM>]]>`;
                            yield this.utilService.showLoading();
                            this.soap.createClient(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.soap + '/soap-wsdl/syracuse/collaboration/syracuse/CAdxWebServiceXmlCC?wsdl', {
                                attributesKey: 'attributes', valueKey: '$value', xmlKey: '$xml'
                            }).then(client => {
                                client.setSecurity(new ngx_soap__WEBPACK_IMPORTED_MODULE_7__.security.BasicAuthSecurity(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.soapUsername, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.soapPassword, ''));
                                client.call('modify', {
                                    callContext: {
                                        $xml: callcontent,
                                        attributes: {
                                            'xsi:type': "wss:CAdxCallContext"
                                        },
                                    },
                                    publicName: {
                                        attributes: {
                                            'xsi:type': "xsd:string"
                                        },
                                        $value: 'XX10ASDH'
                                    },
                                    objectKeys: {
                                        attributes: {
                                            "xsi:type": "wss:ArrayOfCAdxParamKeyValue",
                                            "soapenc:arrayType": "wss:CAdxParamKeyValue[]",
                                        },
                                        key: {
                                            $value: 'SDHNUM'
                                        },
                                        value: {
                                            $value: `${this.docNo}`
                                        },
                                    },
                                    objectXml: {
                                        attributes: {
                                            "xsi:type": "xsd:string"
                                        },
                                        $xml: value
                                    }
                                }).subscribe((res) => {
                                    this.utilService.dismissLoading();
                                    let routeId = localStorage.getItem('activeRouteId');
                                    this.router.navigate(['/tabs/stop-list'], { queryParams: { route: routeId } });
                                }, err => {
                                    console.log(err);
                                    this.utilService.showToast();
                                    this.utilService.dismissLoading();
                                });
                            }).catch(err => {
                                console.log(err);
                                this.utilService.showToast();
                                this.utilService.dismissLoading();
                            });
                        }
                    }));
                }
            }
        }
    }
};
CancelStopPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__.RoutesService },
    { type: ngx_soap__WEBPACK_IMPORTED_MODULE_7__.NgxSoapService }
];
CancelStopPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cancel-stop',
        template: _raw_loader_cancel_stop_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cancel_stop_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CancelStopPage);



/***/ }),

/***/ 63132:
/*!*********************************************************************!*\
  !*** ./src/app/tabpage/stop-list/cancel-stop/cancel-stop.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header-title {\n  display: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmNlbC1zdG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJmaWxlIjoiY2FuY2VsLXN0b3AucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59Il19 */");

/***/ }),

/***/ 65225:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabpage/stop-list/cancel-stop/cancel-stop.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"header-title\">{{ cus_name }} - {{ docNo }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\" color=\"tertiary\">\r\n  <form #cancelstopForm=\"ngForm\" novalidate (ngSubmit)=\"onSubmit(cancelstopForm)\">\r\n    <ion-row>\r\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" *ngIf=\"displayType == 'rescheduleStop'\">\r\n        <ion-text>\r\n          <h6 class=\"mt-3 pb-1\">Reason</h6>\r\n        </ion-text>\r\n        <ion-item lines=\"full\" class=\"mt-2\">\r\n          <ion-label [hidden]=\"reschedstopModel.reason\">Select Reason</ion-label>\r\n          <ion-select [ngClass]=\"{'full-width': reschedstopModel.reason}\" class=\"\" name=\"reason\" value=\"brown\"\r\n            okText=\"Okay\" cancelText=\"Dismiss\" [(ngModel)]=\"reschedstopModel.reason\" #reason=\"ngModel\" required>\r\n            <ion-select-option *ngFor=\"let item of reschedReasons\" [value]=\"item.IDENT2_0\">{{ item.TEXTE_0 }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-text *ngIf=\"submitted && reason.invalid\">\r\n          <p class=\"error-msg\" *ngIf=\"reason.invalid && reason.errors.required\">\r\n            Select reason.\r\n          </p>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size-md=\"6\" *ngIf=\"displayType == 'rescheduleStop'\">\r\n        <ion-text>\r\n          <h6 class=\"mt-3 pb-1\">Reschedule Date</h6>\r\n        </ion-text>\r\n        <ion-item lines=\"full\" class=\"mt-2\">\r\n          <ion-label [hidden]=\"reschedstopModel.reschedule_date\">Select Date</ion-label>\r\n          <ion-datetime style=\"padding-inline-start:0px\" (ionChange)=\"checkCusVal()\" [min]='minDateTime'\r\n            [max]=\"maxDateTime\" name=\"date\" display-format=\"DD.MM.YYYY\" [(ngModel)]=\"reschedstopModel.reschedule_date\"\r\n            #rescheduleDate=\"ngModel\" required></ion-datetime>\r\n        </ion-item>\r\n        <ion-text *ngIf=\"submitted && rescheduleDate.invalid\">\r\n          <p class=\"error-msg\" *ngIf=\"rescheduleDate.invalid && rescheduleDate.errors.required\">\r\n            Select date and time.\r\n          </p>\r\n        </ion-text>\r\n        <ion-text *ngIf=\"!isCustVal\">\r\n          <p class=\"error-msg\">\r\n            Select valid date.\r\n          </p>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" *ngIf=\"displayType == 'cancelStop'\">\r\n        <ion-text>\r\n          <h6 class=\"mt-3 pb-1\">Reason</h6>\r\n        </ion-text>\r\n        <ion-item lines=\"full\" class=\"mt-2\">\r\n          <ion-label [hidden]=\"cancelstopModel.reason\">Select Reason</ion-label>\r\n          <ion-select [ngClass]=\"{'full-width': cancelstopModel.reason}\" name=\"reason\" value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\"\r\n            [(ngModel)]=\"cancelstopModel.reason\" #reason=\"ngModel\" required>\r\n            <ion-select-option *ngFor=\"let item of cancelReasons\" [value]=\"item.IDENT2_0\">{{ item.TEXTE_0 }}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-text *ngIf=\"submitted && reason.invalid\">\r\n          <p class=\"error-msg\" *ngIf=\"reason.invalid && reason.errors.required\">\r\n            Select reason.\r\n          </p>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" *ngIf=\"displayType == 'rescheduleStop'\">\r\n        <ion-text>\r\n          <h6 class=\"mt-3 pb-1\">Comment</h6>\r\n        </ion-text>\r\n        <ion-item lines=\"full\">\r\n          <ion-textarea name=\"comment\" placeholder=\"Enter here...\" rows=\"4\" [(ngModel)]=\"reschedstopModel.comment\"\r\n            #comment=\"ngModel\" required></ion-textarea>\r\n        </ion-item>\r\n        <ion-text *ngIf=\"submitted && comment.invalid\">\r\n          <p class=\"error-msg\" *ngIf=\"comment.invalid && comment.errors.required\">\r\n            Reason for rescheduleling comment is required.\r\n          </p>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" *ngIf=\"displayType == 'cancelStop'\">\r\n        <ion-text>\r\n          <h6 class=\"mt-3 pb-1\">Comment</h6>\r\n        </ion-text>\r\n        <ion-item lines=\"full\">\r\n          <ion-textarea name=\"comment\" placeholder=\"Enter here...\" rows=\"4\" [(ngModel)]=\"cancelstopModel.comment\"\r\n            #comment=\"ngModel\" required></ion-textarea>\r\n        </ion-item>\r\n        <ion-text *ngIf=\"submitted && comment.invalid\">\r\n          <p class=\"error-msg\" *ngIf=\"comment.invalid && comment.errors.required\">\r\n            Reason for cancelling comment is required.\r\n          </p>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-button [disabled]=\"!isCustVal\" type=\"submit\" color=\"warning\" expand=\"block\" shape=\"round\" class=\"mt-3\">\r\n      Confirm\r\n    </ion-button>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_stop-list_cancel-stop_cancel-stop_module_ts.js.map