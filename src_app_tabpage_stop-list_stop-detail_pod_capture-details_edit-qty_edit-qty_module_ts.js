(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_stop-list_stop-detail_pod_capture-details_edit-qty_edit-qty_module_ts"],{

/***/ 82055:
/*!*******************************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/pod/capture-details/edit-qty/edit-qty-routing.module.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditQtyPageRoutingModule": () => (/* binding */ EditQtyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _edit_qty_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-qty.page */ 29845);




const routes = [
    {
        path: '',
        component: _edit_qty_page__WEBPACK_IMPORTED_MODULE_0__.EditQtyPage
    }
];
let EditQtyPageRoutingModule = class EditQtyPageRoutingModule {
};
EditQtyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditQtyPageRoutingModule);



/***/ }),

/***/ 20383:
/*!***********************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/pod/capture-details/edit-qty/edit-qty.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditQtyPageModule": () => (/* binding */ EditQtyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _edit_qty_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-qty-routing.module */ 82055);
/* harmony import */ var _edit_qty_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-qty.page */ 29845);







let EditQtyPageModule = class EditQtyPageModule {
};
EditQtyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_qty_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditQtyPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_edit_qty_page__WEBPACK_IMPORTED_MODULE_1__.EditQtyPage]
    })
], EditQtyPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_stop-list_stop-detail_pod_capture-details_edit-qty_edit-qty_module_ts.js.map