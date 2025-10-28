(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_stop-list_stop-detail_document-detail_document-detail_module_ts"],{

/***/ 40027:
/*!*************************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/document-detail/document-detail-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentDetailPageRoutingModule": () => (/* binding */ DocumentDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _document_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-detail.page */ 86277);




const routes = [
    {
        path: '',
        component: _document_detail_page__WEBPACK_IMPORTED_MODULE_0__.DocumentDetailPage
    },
    {
        path: 'notes-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabpage_stop-list_stop-detail_document-detail_notes-detail_notes-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notes-detail/notes-detail.module */ 80538)).then(m => m.NotesDetailPageModule)
    }
];
let DocumentDetailPageRoutingModule = class DocumentDetailPageRoutingModule {
};
DocumentDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DocumentDetailPageRoutingModule);



/***/ }),

/***/ 53372:
/*!*****************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/document-detail/document-detail.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentDetailPageModule": () => (/* binding */ DocumentDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _document_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-detail-routing.module */ 40027);
/* harmony import */ var _document_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-detail.page */ 86277);







let DocumentDetailPageModule = class DocumentDetailPageModule {
};
DocumentDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _document_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocumentDetailPageRoutingModule
        ],
        declarations: [_document_detail_page__WEBPACK_IMPORTED_MODULE_1__.DocumentDetailPage]
    })
], DocumentDetailPageModule);



/***/ }),

/***/ 86277:
/*!***************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/document-detail/document-detail.page.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentDetailPage": () => (/* binding */ DocumentDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_document_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./document-detail.page.html */ 61335);
/* harmony import */ var _document_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-detail.page.scss */ 3449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/routes.service */ 11763);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ 67241);
/* harmony import */ var _notes_detail_notes_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes-detail/notes-detail.page */ 5167);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-soap */ 92720);











const callcontent = `
      <codeLang xsi:type="xsd:string">${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.soapLanguage}</codeLang>
      <poolAlias xsi:type="xsd:string">${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.soapPoolAlias}</poolAlias>
      <poolId xsi:type="xsd:string">?</poolId>
      <requestConfig xsi:type="xsd:string">?</requestConfig>
`;
let DocumentDetailPage = class DocumentDetailPage {
    constructor(routesService, route, utilService, modalController, soap) {
        this.routesService = routesService;
        this.route = route;
        this.utilService = utilService;
        this.modalController = modalController;
        this.soap = soap;
        this.documentDetails = [];
        this.route.queryParams.subscribe(params => {
            if (params && params.document) {
                this.detailDetId = params.document;
                this.getDocumentDetails();
            }
        });
    }
    ngOnInit() {
    }
    getDocumentDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.utilService.showLoading();
            this.routesService.getDocumentDetails(this.detailDetId).subscribe((resp) => {
                this.documentDetails = resp;
                this.notesEditor(this.documentDetails[0].TEXTE1_0, 1);
                this.notesEditor(this.documentDetails[0].TEXTE2_0, 2);
                this.utilService.dismissLoading();
            }, (err) => {
                this.utilService.dismissLoading();
                this.utilService.showErrorCall(err);
            });
        });
    }
    notesEditor(text, type) {
        let value = `
         <![CDATA[<PARAM>
      <FLD NAME="I_XNOTE" TYPE="Char">${text}</FLD>
      </PARAM>]]>`;
        this.soap.createClient(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.soap + '/soap-wsdl/syracuse/collaboration/syracuse/CAdxWebServiceXmlCC?wsdl', {
            attributesKey: 'attributes', valueKey: '$value', xmlKey: '$xml'
        }).then(client => {
            client.setSecurity(new ngx_soap__WEBPACK_IMPORTED_MODULE_7__.security.BasicAuthSecurity(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.soapUsername, src_environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.soapPassword, ''));
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
                    $value: 'XRICHTEXTC'
                },
                inputXml: {
                    attributes: {
                        'xsi:type': "xsd:string"
                    },
                    $xml: value
                }
            }).subscribe((res) => {
                var _a;
                this.utilService.dismissLoading();
                if ((_a = res.result.runReturn.resultXml) === null || _a === void 0 ? void 0 : _a.$value) {
                    const result = res.result.runReturn.resultXml.$value.RESULT.GRP.FLD;
                    if (result[1].$value) {
                        if (type == 1) {
                            this.documentDetails[0].text1 = result[1].$value;
                        }
                        else {
                            this.documentDetails[0].text2 = result[1].$value;
                        }
                    }
                    else {
                        if (text && text.trim() !== "") {
                            this.utilService.showToast(result[1].$value);
                        }
                    }
                }
                else {
                    this.utilService.showToast(res.result.runReturn.messages[0].message);
                }
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
    notesModal(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _notes_detail_notes_detail_page__WEBPACK_IMPORTED_MODULE_4__.NotesDetailPage,
                componentProps: { docData: item }
            });
            yield modal.present();
            const data = yield modal.onDidDismiss();
            if (data && data.data) {
            }
        });
    }
};
DocumentDetailPage.ctorParameters = () => [
    { type: src_app_services_routes_service__WEBPACK_IMPORTED_MODULE_2__.RoutesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: ngx_soap__WEBPACK_IMPORTED_MODULE_7__.NgxSoapService }
];
DocumentDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-document-detail',
        template: _raw_loader_document_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_document_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DocumentDetailPage);



/***/ }),

/***/ 5167:
/*!*************************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/document-detail/notes-detail/notes-detail.page.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotesDetailPage": () => (/* binding */ NotesDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_notes_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notes-detail.page.html */ 78062);
/* harmony import */ var _notes_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-detail.page.scss */ 26179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let NotesDetailPage = class NotesDetailPage {
    constructor(modalController, params) {
        var _a, _b;
        this.modalController = modalController;
        this.params = params;
        this.note1 = '';
        this.note2 = '';
        this.docData = params.get('docData');
        this.note1 = (_a = this.docData) === null || _a === void 0 ? void 0 : _a.text1;
        this.note2 = (_b = this.docData) === null || _b === void 0 ? void 0 : _b.text2;
    }
    ngOnInit() {
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
NotesDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams }
];
NotesDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-notes-detail',
        template: _raw_loader_notes_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notes_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotesDetailPage);



/***/ }),

/***/ 3449:
/*!*****************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/document-detail/document-detail.page.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 26179:
/*!***************************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/document-detail/notes-detail/notes-detail.page.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rlcy1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 61335:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabpage/stop-list/stop-detail/document-detail/document-detail.page.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Document Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content color=\"tertiary\">\r\n  <ng-container *ngIf=\"documentDetails.length > 0\">\r\n    <ion-item lines=\"full\">\r\n      <ion-icon slot=\"start\" name=\"ticket-outline\"></ion-icon>\r\n      <ion-label>\r\n        <h2>\r\n          <span *ngIf=\"documentDetails[0].XDOCTYP_0 == 1\">Sales Delivery</span>\r\n          <span *ngIf=\"documentDetails[0].XDOCTYP_0 == 2\">Customer Returns</span>\r\n          <span *ngIf=\"documentDetails[0].XDOCTYP_0 == 3\">Pre Receipt</span>\r\n        </h2>\r\n        <ion-text color=\"medium\">\r\n          <p>{{ documentDetails[0].XDOCNUM_0 }}</p>\r\n        </ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\r\n      <ion-label>\r\n        <h2>\r\n          <span *ngIf=\"documentDetails[0].XDOCTYP_0 !== 3\">Customer</span>\r\n          <span *ngIf=\"documentDetails[0].XDOCTYP_0 == 3\">Supplier</span>\r\n        </h2>\r\n        <ion-text color=\"medium\">\r\n          <p>{{ documentDetails[0].XBPCORD_0 }} - {{ documentDetails[0].XBPNAME_0 }}</p>\r\n        </ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\">\r\n      <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\r\n      <ion-label>\r\n        <h2>Date</h2>\r\n        <ion-text color=\"medium\">\r\n          <p>{{ documentDetails[0].XDLVDAT_0 | date: \"dd-MM-y\"}}</p>\r\n        </ion-text>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" (click)=\"notesModal(documentDetails[0])\">\r\n      <ion-icon slot=\"start\" name=\"document-outline\"></ion-icon>\r\n      <ion-label>\r\n        <h2>Notes</h2>\r\n        <ion-text color=\"medium\">\r\n          <p>{{ documentDetails[0].text1 }} {{ documentDetails[0].text2 }}</p>\r\n        </ion-text>\r\n      </ion-label>\r\n      <ion-icon size=\"small\" slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item lines=\"full\" *ngFor=\"let item of documentDetails\">\r\n      <ion-label>\r\n        <h2>{{ item.ITMREF_0 }}</h2>\r\n        <div class=\"d-flex justify-content-between pt-1\">\r\n          <ion-text color=\"medium\">\r\n            <p>{{ item.DES_0 }} {{ item.SAU_0 }}</p>\r\n          </ion-text>\r\n          <p>Qty: {{ item.QTY_0 }} {{ item.SAU_0 }}</p>\r\n        </div>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ng-container>\r\n</ion-content>");

/***/ }),

/***/ 78062:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabpage/stop-list/stop-detail/document-detail/notes-detail/notes-detail.page.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar color=\"dark\">\r\n    <ion-title>Notes</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"closeModal()\">\r\n        <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <ion-card class=\"m-3\">\r\n    <ion-card-content class=\"p-0\"> -->\r\n  <!-- <ion-item lines=\"none\"> -->\r\n  <div class=\"m-5\">\r\n    <ion-label color=\"primary\">\r\n      <h2>Customer Shipment Text</h2>\r\n    </ion-label>\r\n    <p>{{ note2 }}</p>\r\n    <ion-label color=\"primary\">\r\n      <h2>Sales Order Header Text</h2>\r\n    </ion-label>\r\n    <p>{{ note1 }}</p>\r\n  </div>\r\n  <!-- </ion-item>\r\n    </ion-card-content> -->\r\n  <!-- </ion-card> -->\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_stop-list_stop-detail_document-detail_document-detail_module_ts.js.map