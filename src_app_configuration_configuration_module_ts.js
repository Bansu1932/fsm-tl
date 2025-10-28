(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_configuration_configuration_module_ts"],{

/***/ 98951:
/*!***************************************************************!*\
  !*** ./src/app/configuration/configuration-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPageRoutingModule": () => (/* binding */ ConfigurationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _configuration_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration.page */ 66024);




const routes = [
    {
        path: '',
        component: _configuration_page__WEBPACK_IMPORTED_MODULE_0__.ConfigurationPage
    }
];
let ConfigurationPageRoutingModule = class ConfigurationPageRoutingModule {
};
ConfigurationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfigurationPageRoutingModule);



/***/ }),

/***/ 55062:
/*!*******************************************************!*\
  !*** ./src/app/configuration/configuration.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPageModule": () => (/* binding */ ConfigurationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-routing.module */ 98951);
/* harmony import */ var _configuration_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration.page */ 66024);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-soap */ 92720);









let ConfigurationPageModule = class ConfigurationPageModule {
};
ConfigurationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            ngx_soap__WEBPACK_IMPORTED_MODULE_8__.NgxSoapModule,
            _configuration_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigurationPageRoutingModule
        ],
        declarations: [_configuration_page__WEBPACK_IMPORTED_MODULE_1__.ConfigurationPage]
    })
], ConfigurationPageModule);



/***/ }),

/***/ 66024:
/*!*****************************************************!*\
  !*** ./src/app/configuration/configuration.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationPage": () => (/* binding */ ConfigurationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_configuration_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./configuration.page.html */ 37269);
/* harmony import */ var _configuration_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration.page.scss */ 81549);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-soap */ 92720);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);








const callcontent = `<poolAlias xsi:type="xsd:string">PRODDEMO</poolAlias>
       <poolId xsi:type="xsd:string">?</poolId>
       <requestConfig xsi:type="xsd:string">?</requestConfig>`;
const value = `
            <![CDATA[<PARAM>
            <FLD NAME="XIPADD" TYPE="Char">125.18.84.155</FLD>
           <FLD NAME="XPODPORT" TYPE="Integer">8124</FLD>
           <FLD NAME="XPODPOOL" TYPE="Char">PRODDEMO</FLD>
           <FLD NAME="XADSUSR" TYPE="Char">TESTUSER</FLD>
           <FLD NAME="XADSPWD" TYPE="Char">TU@123*</FLD>
            </PARAM>]]>
`;
let ConfigurationPage = class ConfigurationPage {
    constructor(navCtrl, httpClient, soap) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.soap = soap;
        this.json = {
            RESULT: {
                GRP: [
                    {
                        ID: "GRP1",
                        I_XSDHNUM: "SWBDE0120070",
                        I_XPODREF: "POD-SWBDE0120070",
                        I_XLOCLAT: 48.56,
                        I_XLOCLOG: 47.66,
                        I_XNOTE: "Testing Notes",
                        I_XSIGNAME: "Bharath",
                        I_XSIG: "Blob",
                        I_XMACADD: "4A:21:56:97",
                        I_XDEVICEID: "4A:21:56:97"
                    },
                    {
                        ID: "GRP4",
                        O_XFLG: 2,
                        O_XMSG: "Delivered!!!",
                    },
                ],
                TAB: [{
                        DIM: 99,
                        ID: "GRP2",
                        SIZE: "2",
                        LIN: [
                            {
                                NUM: 1,
                                I_XSDDLIN: 1000,
                                I_XITMREF: "BMS001",
                                I_XDLVQTY: 1,
                                I_XPODQTY: 1
                            },
                            {
                                NUM: 2,
                                I_XSDDLIN: 2000,
                                I_XITMREF: "BMS002",
                                I_XDLVQTY: 1,
                                I_XPODQTY: 1
                            }
                        ]
                    },
                    {
                        DIM: 6,
                        ID: "GRP3",
                        SIZE: "1",
                        LIN: [
                            {
                                NUM: 1,
                                I_XIMG: "Blob",
                            },
                            {
                                NUM: 2,
                                I_XIMG: "64 Bit",
                            }
                        ]
                    }
                ],
            }
        };
        this.param = {
            param: [
                {
                    XIPADD: "125.18.84.155",
                    XPODPORT: 8124,
                    XPODPOOL: "PRODDEMO",
                    XADSUSR: "TESTUSER",
                    XADSPWD: ""
                }
            ]
        };
        this.dataType = {
            I_XSDHNUM: "Char",
            I_XPODREF: "Char",
            I_XLOCLAT: "Char",
            I_XLOCLOG: "Char",
            I_XNOTE: "Char",
            I_XSIGNAME: "Char",
            I_XSIG: "Blob",
            I_XMACADD: "Char",
            I_XDEVICEID: "Char",
            O_XFLG: "Integer",
            O_XMSG: "Char",
            I_XSDDLIN: "Integer",
            I_XITMREF: "Char",
            I_XDLVQTY: "Decimal",
            I_XPODQTY: "Decimal",
            I_XIMG: "Blob"
        };
        this.submitted = false;
        this.configurationModel = {};
    }
    ngOnInit() {
        this.callSoapRequest();
    }
    jsonToXml() {
        for (let result in this.json) {
            const GROUP = this.json.RESULT.GRP;
            const TAB = this.json.RESULT.TAB;
            let RESULTTAG = "<" + result + ">";
            if (GROUP.length > 0) {
                let GRPTag = '';
                for (let i = 0; i < GROUP.length; i++) {
                    let grp = GROUP[i];
                    GRPTag += "\n\t<GRP ID=\"" + grp.ID + "\"";
                    let FLDTag = '';
                    for (let gData in grp) {
                        if (gData !== 'ID') {
                            FLDTag += "\n\t\t<FLD ";
                            FLDTag += "NAME=\"" + gData + "\"" + " TYPE=\"" + this.dataType[gData] + "\">" + grp[gData] + "</FLD>";
                        }
                    }
                    GRPTag += ">" + FLDTag + "\n\t" + "</GRP>";
                }
                RESULTTAG += GRPTag;
            }
            if (TAB.length > 0) {
                let TABTag = '';
                for (let tabLin in TAB) {
                    let LIN = TAB[tabLin].LIN;
                    TABTag += "\n\t<TAB DIM=\"" + TAB[tabLin].DIM + "\"" + " ID=\"" + TAB[tabLin].ID + "\"" + " SIZE=\"" + TAB[tabLin].SIZE + "\"";
                    if (LIN.length > 0) {
                        let LINTag = '';
                        for (let j = 0; j < LIN.length; j++) {
                            let tab = LIN[j];
                            LINTag += "\n\t\t<LIN NUM=\"" + tab.NUM + "\"";
                            let FLDTag = '';
                            for (let tData in tab) {
                                if (tData !== 'NUM') {
                                    FLDTag += "\n\t\t\t<FLD ";
                                    FLDTag += "NAME=\"" + tData + "\"" + " TYPE=\"" + this.dataType[tData] + "\">" + tab[tData] + "</FLD>";
                                }
                            }
                            LINTag += ">" + FLDTag + "\n\t\t" + "</LIN>";
                        }
                        TABTag += ">" + LINTag + "\n\t</TAB>";
                    }
                }
                return RESULTTAG + TABTag + "\n</" + result + ">";
            }
        }
    }
    callSoapRequest() {
        this.soap.createClient('assets/delivery.wsdl', {
            attributesKey: 'attributes', valueKey: '$value', xmlKey: '$xml'
        })
            .then(client => {
            client.setSecurity(new ngx_soap__WEBPACK_IMPORTED_MODULE_3__.security.BasicAuthSecurity(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.soapUsername, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.soapPassword, ''));
            client.call('run', {
                callContext: {
                    $xml: callcontent,
                    attributes: {
                        'xsi:type': 'wss:CAdxCallContext'
                    },
                },
                publicName: {
                    attributes: {
                        'xsi:type': "xsd:string"
                    },
                    $value: 'X10ACONFIG'
                },
                inputXml: {
                    attributes: {
                        'xsi:type': "xsd:string"
                    },
                    $xml: value
                }
            }).subscribe(res => {
                // client.call('run', body).subscribe(res => {
                // }).subscribe(res => {
            }, err => console.log(err));
        })
            .catch(err => console.log(err));
    }
    onSubmit(form) {
        this.submitted = true;
        if (form.valid) {
            this.navCtrl.back();
        }
    }
};
ConfigurationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: ngx_soap__WEBPACK_IMPORTED_MODULE_3__.NgxSoapService }
];
ConfigurationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-configuration',
        template: _raw_loader_configuration_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_configuration_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfigurationPage);



/***/ }),

/***/ 81549:
/*!*******************************************************!*\
  !*** ./src/app/configuration/configuration.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 37269:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configuration/configuration.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"medium\">\r\n    <ion-buttons slot=\"start\" class=\"back-btn\">\r\n      <ion-back-button color=\"light\" text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Configuration</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding-vertical\">\r\n  <div class=\"form-section mb-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 col-md-6 col-lg-4 offset-md-3 offset-lg-4\">\r\n        <ion-grid class=\"ion-no-padding\">\r\n          <form #configurationForm=\"ngForm\" novalidate class=\"px-4\" (ngSubmit)=\"onSubmit(configurationForm)\">\r\n            <ion-item class=\"ion-no-padding\">\r\n              <ion-label position=\"stacked\">X3 POD IP</ion-label>\r\n              <ion-input name=\"podip\" placeholder=\"Enter X3 POD IP\" type=\"text\" [(ngModel)]=\"configurationModel.pod_ip\" #pod_ip=\"ngModel\" required>\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-text *ngIf=\"submitted && pod_ip.invalid\">\r\n              <p class=\"error-msg\" *ngIf=\"pod_ip.invalid && pod_ip.errors.required\">\r\n                X3 POD IP is required\r\n              </p>\r\n            </ion-text>\r\n            <ion-item class=\"ion-no-padding\">\r\n              <ion-label position=\"stacked\">X3 Port</ion-label>\r\n              <ion-input name=\"port\" placeholder=\"Enter X3 Port\" type=\"text\" [(ngModel)]=\"configurationModel.port\" #port=\"ngModel\" required>\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-text *ngIf=\"submitted && port.invalid\">\r\n              <p class=\"error-msg\" *ngIf=\"port.invalid && port.errors.required\">\r\n                X3 Port is required\r\n              </p>\r\n            </ion-text>\r\n            <ion-item class=\"ion-no-padding\">\r\n              <ion-label position=\"stacked\">Pool Alias</ion-label>\r\n              <ion-input name=\"pool_alias\" placeholder=\"Enter Pool Alias\" type=\"text\" [(ngModel)]=\"configurationModel.pool_alias\" #pool_alias=\"ngModel\"\r\n                required>\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-text *ngIf=\"submitted && pool_alias.invalid\">\r\n              <p class=\"error-msg\" *ngIf=\"pool_alias.invalid && pool_alias.errors.required\">\r\n                Pool Alias is required\r\n              </p>\r\n            </ion-text>\r\n            <ion-item class=\"ion-no-padding\">\r\n              <ion-label position=\"stacked\">Folder Username</ion-label>\r\n              <ion-input name=\"folder_username\" placeholder=\"Enter Folder Username\" type=\"text\" [(ngModel)]=\"configurationModel.folder_username\"\r\n                #folder_username=\"ngModel\" required>\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-text *ngIf=\"submitted && folder_username.invalid\">\r\n              <p class=\"error-msg\" *ngIf=\"folder_username.invalid && folder_username.errors.required\">\r\n                Folder Username is required\r\n              </p>\r\n            </ion-text>\r\n            <ion-item class=\"ion-no-padding\">\r\n              <ion-label position=\"stacked\">Folder Password</ion-label>\r\n              <ion-input name=\"folder_password\" placeholder=\"Enter Folder Password\" type=\"password\" [(ngModel)]=\"configurationModel.folder_password\"\r\n                #folder_password=\"ngModel\" required>\r\n              </ion-input>\r\n            </ion-item>\r\n            <ion-text *ngIf=\"submitted && folder_password.invalid\">\r\n              <p class=\"error-msg\" *ngIf=\"folder_password.invalid && folder_password.errors.required\">\r\n                Folder Password is required\r\n              </p>\r\n            </ion-text>\r\n            <ion-row>\r\n              <ion-col size=\"6\" class=\"pr-1\">\r\n                <ion-button color=\"danger\" shape=\"round\" expand=\"block\" class=\"ion-margin-vertical\"\r\n                  type=\"reset\">\r\n                  Reset\r\n                </ion-button>\r\n              </ion-col>\r\n              <ion-col size=\"6\" class=\"pl-1\">\r\n                <ion-button shape=\"round\" expand=\"block\" class=\"ion-margin-vertical\" type=\"submit\">\r\n                  Submit\r\n                </ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </form>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_configuration_configuration_module_ts.js.map