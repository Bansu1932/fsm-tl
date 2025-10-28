(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_stop-list_stop-detail_pod-report_pod-report_module_ts"],{

/***/ 50971:
/*!***************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/pod-report/pod-report-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodReportPageRoutingModule": () => (/* binding */ PodReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pod_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pod-report.page */ 85640);




const routes = [
    {
        path: '',
        component: _pod_report_page__WEBPACK_IMPORTED_MODULE_0__.PodReportPage
    }
];
let PodReportPageRoutingModule = class PodReportPageRoutingModule {
};
PodReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PodReportPageRoutingModule);



/***/ }),

/***/ 7156:
/*!*******************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/pod-report/pod-report.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodReportPageModule": () => (/* binding */ PodReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pod_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pod-report-routing.module */ 50971);
/* harmony import */ var _pod_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pod-report.page */ 85640);







let PodReportPageModule = class PodReportPageModule {
};
PodReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pod_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.PodReportPageRoutingModule
        ],
        declarations: [_pod_report_page__WEBPACK_IMPORTED_MODULE_1__.PodReportPage]
    })
], PodReportPageModule);



/***/ }),

/***/ 85640:
/*!*****************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/pod-report/pod-report.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PodReportPage": () => (/* binding */ PodReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pod_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pod-report.page.html */ 39005);
/* harmony import */ var _pod_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pod-report.page.scss */ 99711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-soap */ 92720);
/* harmony import */ var src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/routes.service */ 11763);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);









const callcontent = `
      <codeLang xsi:type="xsd:string">${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.soapLanguage}</codeLang>
      <poolAlias xsi:type="xsd:string">${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.soapPoolAlias}</poolAlias>
      <poolId xsi:type="xsd:string">?</poolId>
      <requestConfig xsi:type="xsd:string">?</requestConfig>
`;
let PodReportPage = class PodReportPage {
    constructor(routesService, route, utilService, soap) {
        this.routesService = routesService;
        this.route = route;
        this.utilService = utilService;
        this.soap = soap;
        this.podReportDetails = [];
        this.route.queryParams.subscribe(params => {
            if (params && params.podrep) {
                this.podReportId = params.podrep;
                this.getPodRepData();
            }
            else {
                const stopId = localStorage.getItem('activeRouteId');
                if (stopId !== 'null') {
                    this.podReportId = stopId;
                    this.getPodRepData();
                }
            }
        });
    }
    ngOnInit() {
    }
    getPodRepData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilService.showLoading();
            this.routesService.getPodReport(this.podReportId).subscribe((resp) => {
                this.utilService.dismissLoading();
                this.podReportDetails = resp;
            }, (err) => {
                this.utilService.dismissLoading();
                this.utilService.showErrorCall(err);
            });
        });
    }
    sendMail() {
        this.utilService.showConfirmationPopup('Confirmation', 'Are you sure you want to sent mail?', (cb) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (cb == 1) {
                let value = `
      <![CDATA[<PARAM>
        <FLD NAME='I_XPODNUM'>${this.podReportDetails[0].XPODREF_0}</FLD>
        <FLD NAME='I_XSDHNUM'>${this.podReportDetails[0].XDOCNUM_0}</FLD> 
        <FLD NAME='I_XCUS'>${this.podReportDetails[0].XBPCORD_0}</FLD>
        <FLD NAME='I_XEXTEMAIL'>bharath.e@tema-systems.com</FLD>
      </PARAM>]]>
        `;
                yield this.utilService.showLoading();
                this.soap.createClient(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.soap + '/soap-wsdl/syracuse/collaboration/syracuse/CAdxWebServiceXmlCC?wsdl', {
                    attributesKey: 'attributes', valueKey: '$value', xmlKey: '$xml'
                }).then(client => {
                    client.setSecurity(new ngx_soap__WEBPACK_IMPORTED_MODULE_6__.security.BasicAuthSecurity(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.soapUsername, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.soapPassword, ''));
                    client.call('run', {
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
                            $value: 'X10AWRKREP'
                        },
                        inputXml: {
                            attributes: {
                                'xsi:type': "xsd:string"
                            },
                            $xml: value
                        }
                    }).subscribe((res) => {
                        this.utilService.showToast('Mail sent successfully.');
                        this.utilService.dismissLoading();
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
};
PodReportPage.ctorParameters = () => [
    { type: src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__.RoutesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: ngx_soap__WEBPACK_IMPORTED_MODULE_6__.NgxSoapService }
];
PodReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-pod-report',
        template: _raw_loader_pod_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pod_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PodReportPage);



/***/ }),

/***/ 99711:
/*!*******************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/pod-report/pod-report.page.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2QtcmVwb3J0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 39005:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabpage/stop-list/stop-detail/pod-report/pod-report.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>POD Report</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"tertiary\">\r\n  <ion-row>\r\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" size-xl=\"6\">\r\n      <ion-card class=\"m-3 h-100\">\r\n        <ion-card-content class=\"p-2\">\r\n          <table class=\"table table-sm table-borderless font-weight-bold mb-0 fs-12\">\r\n            <tr>\r\n              <th class=\"text-muted\">POD Reference:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.XPODREF_0 }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Shipment ID:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.XDOCNUM_0 }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Shipment Date:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.XSHIDAT_0 | date: 'dd-MM-YYYY' }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Delivery Date:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.XDLVDAT_0 | date: 'dd-MM-YYYY' }}</td>\r\n            </tr>\r\n          </table>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" size-xl=\"6\">\r\n      <ion-card class=\"m-3 h-100\">\r\n        <ion-card-content class=\"p-2\">\r\n          <table class=\"table table-sm table-borderless font-weight-bold mb-0 fs-12\">\r\n            <tr>\r\n              <th class=\"text-muted\">Site:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.XSALFCY_0 }},{{ podReportDetails[0]?.FCYNAM_0 }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Site Address:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.BPAADDLIG_0 }}\r\n                <p class=\"fs-12\">\r\n                  {{ (podReportDetails[0]?.BPAADDLIG_1_0== \" \")? '' : podReportDetails[0]?.BPAADDLIG_1_0+',' }}\r\n                  {{ (podReportDetails[0]?.BPAADDLIG_2_0== \" \")? '': podReportDetails[0]?.BPAADDLIG_2_0 }}\r\n                </p>\r\n                {{ podReportDetails[0]?.CTY_0 }},{{ podReportDetails[0]?.SAT_0 }},{{ podReportDetails[0]?.POSCOD_0 }}\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Carrier:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.BPTNUM_0 }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Carrier Description:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.XBPTNAM_0}}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Carrier Contact:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.XTEL_0 }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Carrier Email:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.XWEB_0 }}</td>\r\n            </tr>\r\n          </table>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" size-xl=\"6\">\r\n      <ion-card class=\"m-3 h-100\">\r\n        <ion-card-content class=\"p-2\">\r\n          <table class=\"table table-sm table-borderless font-weight-bold mb-0 fs-12\">\r\n            <tr>\r\n              <th class=\"text-muted\">Customer:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.XBPCORD_0 }}, {{ podReportDetails[0]?.XBPNAME_0 }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Customer Address:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.XBPAADDLIG_0 }}\r\n                <p class=\"fs-12\">\r\n                  {{ (podReportDetails[0]?.XBPAADDLIG_1_0== \" \")? '': podReportDetails[0]?.XBPAADDLIG_1_0+',' }}\r\n                  {{ (podReportDetails[0]?.XBPAADDLIG_2_0==  \" \")? '': podReportDetails[0]?.XBPAADDLIG_2_0 }} <br>\r\n                </p>\r\n                {{ podReportDetails[0]?.XCTY_0 }},{{ podReportDetails[0]?.XPOSCOD_0 }} <br>\r\n                {{ podReportDetails[0]?.XCRY_0 }} </td>\r\n            </tr>\r\n          </table>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" size-xl=\"6\">\r\n      <ion-card class=\"m-3 h-100\">\r\n        <ion-card-content class=\"p-0\">\r\n          <table class=\"table table-sm table-borderless font-weight-bold mb-0 fs-12\">\r\n            <thead class=\"thead-dark\">\r\n              <tr>\r\n                <th class=\"align-middle pl-2\">Product Desc</th>\r\n                <th class=\"align-middle\">Original Qty</th>\r\n                <th class=\"align-middle\">Delivered Qty</th>\r\n                <th class=\"align-middle pr-2\">Units</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of podReportDetails\">\r\n                <td class=\"align-middle pl-2\">\r\n                  <span>{{ item.ITMREF_0 }} <br> {{ item.DES_0 }}</span>\r\n                </td>\r\n                <td class=\"align-middle\">{{ item.QTY_0 }}</td>\r\n                <td class=\"align-middle\">{{ item.QTY_0 }}</td>\r\n                <td class=\"align-middle pr-2\">{{ item.SAU_0 }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" size-xl=\"6\">\r\n      <ion-card class=\"m-3 h-100\">\r\n        <ion-card-content class=\"p-2\">\r\n          <table class=\"table table-sm table-borderless font-weight-bold mb-0 fs-12\">\r\n            <tr>\r\n              <th class=\"text-muted\">Net Weight:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.DSPTOTWEI_0 }} {{ podReportDetails[0]?.DSPWEU_0 }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Gross Weight:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.DSPTOTWEI_0 }} {{ podReportDetails[0]?.DSPWEU_0 }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Volume:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.DSPTOTVOL_0 }} {{ podReportDetails[0]?.DSPVOU_0 }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Total Original Qty:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.DSPTOTQTY_0 }} {{ podReportDetails[0]?.SAU_0 }}</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Total Delivery Qty:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.DSPTOTQTY_0 }} {{ podReportDetails[0]?.SAU_0 }}</td>\r\n            </tr>\r\n          </table>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"6\" size-lg=\"6\" size-xl=\"6\">\r\n      <ion-card class=\"m-3\">\r\n        <ion-card-content class=\"p-2\">\r\n          <table class=\"table table-sm table-borderless font-weight-bold mb-0 fs-12\">\r\n            <tr>\r\n              <th class=\"text-muted\">Driver:</th>\r\n              <td width=\"58%\">{{ podReportDetails[0]?.DRIVER_0 }} {{ podReportDetails[0]?.XDRIVERN_0 }}</td>\r\n            </tr>\r\n            <!-- <tr>\r\n              <th class=\"text-muted\">Vehicle ID:</th>\r\n              <td width=\"58%\">AU011-01 TFG 569</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Signature Name:</th>\r\n              <td width=\"58%\">Bharath</td>\r\n            </tr>\r\n            <tr>\r\n              <th class=\"text-muted\">Signature:</th>\r\n              <td width=\"58%\"></td>\r\n            </tr> -->\r\n          </table>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-button color=\"success\" expand=\"block\" (click)=\"sendMail()\">\r\n      <b>Send mail</b>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_stop-list_stop-detail_pod-report_pod-report_module_ts.js.map