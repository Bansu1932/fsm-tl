(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_stop-list_stop-detail_document-detail_notes-detail_notes-detail_module_ts"],{

/***/ 17216:
/*!***********************************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/document-detail/notes-detail/notes-detail-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotesDetailPageRoutingModule": () => (/* binding */ NotesDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _notes_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-detail.page */ 5167);




const routes = [
    {
        path: '',
        component: _notes_detail_page__WEBPACK_IMPORTED_MODULE_0__.NotesDetailPage
    }
];
let NotesDetailPageRoutingModule = class NotesDetailPageRoutingModule {
};
NotesDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotesDetailPageRoutingModule);



/***/ }),

/***/ 80538:
/*!***************************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/document-detail/notes-detail/notes-detail.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotesDetailPageModule": () => (/* binding */ NotesDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _notes_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-detail-routing.module */ 17216);
/* harmony import */ var _notes_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-detail.page */ 5167);







let NotesDetailPageModule = class NotesDetailPageModule {
};
NotesDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _notes_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotesDetailPageRoutingModule
        ],
        declarations: [_notes_detail_page__WEBPACK_IMPORTED_MODULE_1__.NotesDetailPage]
    })
], NotesDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_stop-list_stop-detail_document-detail_notes-detail_notes-detail_module_ts.js.map