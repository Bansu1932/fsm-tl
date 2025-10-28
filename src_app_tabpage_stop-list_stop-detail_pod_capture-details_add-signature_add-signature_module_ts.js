(self["webpackChunkcap"] = self["webpackChunkcap"] || []).push([["src_app_tabpage_stop-list_stop-detail_pod_capture-details_add-signature_add-signature_module_ts"],{

/***/ 75042:
/*!*********************************************************************************************!*\
  !*** ./node_modules/ionic-rating-component/__ivy_ngcc__/fesm2015/ionic-rating-component.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicRatingComponent": () => (/* binding */ IonicRatingComponent),
/* harmony export */   "IonicRatingComponentModule": () => (/* binding */ IonicRatingComponentModule),
/* harmony export */   "IonicRatingService": () => (/* binding */ IonicRatingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 78675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);











const _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
const _c1 = function (a0, a1) { return { "color": a0, "font-size": a1 }; };
function IonicRatingComponent_ion_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IonicRatingComponent_ion_button_1_Template_ion_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changeRating($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", index_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r0.fontSize, ctx_r0.fontSize));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx_r0.halfStar === "true" && ctx_r0.rating - index_r1 > 0 && ctx_r0.rating - index_r1 <= 0.5 ? ctx_r0.halfIcon : index_r1 < ctx_r0.Math.round(ctx_r0.parseFloat(ctx_r0.rating)) ? ctx_r0.activeIcon : ctx_r0.defaultIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c1, ctx_r0.halfStar === "false" && index_r1 < ctx_r0.Math.round(ctx_r0.parseFloat(ctx_r0.rating)) || ctx_r0.halfStar === "true" && index_r1 < ctx_r0.parseFloat(ctx_r0.rating) ? ctx_r0.activeColor : ctx_r0.defaultColor, ctx_r0.fontSize));
} }
let IonicRatingService = class IonicRatingService {
    constructor() {
        this.starRatingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.topicSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    publishStartRatingChanged(value) {
        this.starRatingSubject.next(value);
    }
    getStartRatingChangedObservable() {
        return this.starRatingSubject;
    }
    publishTopic(topic, value) {
        this.topicSubject.next({ topic, value });
    }
    getTopicObservable(key) {
        return this.topicSubject[key];
    }
};
IonicRatingService.ɵfac = function IonicRatingService_Factory(t) { return new (t || IonicRatingService)(); };
IonicRatingService.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function IonicRatingService_Factory() { return new IonicRatingService(); }, token: IonicRatingService, providedIn: "root" });

var IonicRatingComponent_1;
let IonicRatingComponent = IonicRatingComponent_1 = class IonicRatingComponent {
    constructor(ionicRatingService) {
        this.ionicRatingService = ionicRatingService;
        this.iconsArray = [];
        this.ratingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.readonly = 'false';
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'star';
        this.defaultIcon = 'star-outline';
        this.halfIcon = 'star-half';
        this.halfStar = 'false';
        this.maxRating = 5;
        this.fontSize = '28px';
        this.eventInfo = (() => {
            const id = new Date().getTime();
            const topic = `star-rating:${id}:changed`;
            return {
                topic,
            };
        })();
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    set rating(val) {
        this._rating = val;
        if (this.onChange) {
            this.onChange(val);
        }
    }
    get rating() {
        return this._rating;
    }
    ngOnInit() {
        this.rating = this.rating || 3; //default after input`s initialization
        for (let i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    }
    writeValue(obj) {
        this.rating = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    }
    changeRating(event) {
        if (this.readonly && this.readonly === 'true')
            return;
        // event is different for firefox and chrome
        let id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === 'true') {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // subscribe this event to get the changed value in your parent compoanent
        this.ionicRatingService.publishStartRatingChanged(this.rating);
        this.ionicRatingService.publishTopic(this.eventInfo.topic, this.rating);
        // unique event
        this.ratingChanged.emit(this.rating);
    }
};
IonicRatingComponent.ɵfac = function IonicRatingComponent_Factory(t) { return new (t || IonicRatingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](IonicRatingService)); };
IonicRatingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IonicRatingComponent, selectors: [["ionic-rating-component"]], inputs: { readonly: "readonly", activeColor: "activeColor", defaultColor: "defaultColor", activeIcon: "activeIcon", defaultIcon: "defaultIcon", halfIcon: "halfIcon", halfStar: "halfStar", maxRating: "maxRating", fontSize: "fontSize", rating: "rating" }, outputs: { ratingChanged: "ratingChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                useExisting: IonicRatingComponent_1,
                multi: true
            },
        ])], decls: 2, vars: 1, consts: [[1, "ionic5-star-rating"], ["size", "large", "fill", "clear", "class", "rate-button", 3, "ngStyle", "id", "click", 4, "ngFor", "ngForOf"], ["size", "large", "fill", "clear", 1, "rate-button", 3, "ngStyle", "id", "click"], [3, "ngStyle", "name"]], template: function IonicRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IonicRatingComponent_ion_button_1_Template, 2, 10, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.iconsArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon], styles: [".rate-button[_ngcontent-%COMP%] {\n            --padding-bottom:0;\n            --padding-end:0;\n            --padding-start:0;\n            --padding-top:0;\n    }"] });
IonicRatingComponent.ctorParameters = () => [
    { type: IonicRatingService }
];
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "rating", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()
], IonicRatingComponent.prototype, "ratingChanged", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "readonly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "activeColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "defaultColor", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "activeIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "defaultIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "halfIcon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "halfStar", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "maxRating", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()
], IonicRatingComponent.prototype, "fontSize", void 0);

let IonicRatingComponentModule = class IonicRatingComponentModule {
};
IonicRatingComponentModule.ɵfac = function IonicRatingComponentModule_Factory(t) { return new (t || IonicRatingComponentModule)(); };
IonicRatingComponentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IonicRatingComponentModule });
IonicRatingComponentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IonicRatingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IonicRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ionic-rating-component',
                template: `
    <div class="ionic5-star-rating">
      <ion-button size="large" fill="clear" class="rate-button" [ngStyle]="{'width' : fontSize, 'height' : fontSize}" *ngFor="let index of iconsArray" id="{{index}}" (click)="changeRating($event)">
        <ion-icon [ngStyle]="{'color': ((halfStar === 'false' && index < this.Math.round(this.parseFloat(rating))) || (halfStar === 'true' && index < this.parseFloat(rating))) ? activeColor : defaultColor, 'font-size' : fontSize }" name="{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}"></ion-icon>
      </ion-button>
    </div>
  `,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NG_VALUE_ACCESSOR,
                        useExisting: IonicRatingComponent_1,
                        multi: true
                    },
                ],
                styles: [`
    .rate-button {
            --padding-bottom:0;
            --padding-end:0;
            --padding-start:0;
            --padding-top:0;
    }
  `]
            }]
    }], function () { return [{ type: IonicRatingService }]; }, { ratingChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], activeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], defaultColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], activeIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], defaultIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], halfIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], halfStar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxRating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], fontSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IonicRatingComponentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [IonicRatingComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
                ],
                exports: [IonicRatingComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IonicRatingComponentModule, { declarations: function () { return [IonicRatingComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule]; }, exports: function () { return [IonicRatingComponent]; } }); })();

/*
 * Public API Surface of ionic-rating
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ionic-rating-component.js.map

/***/ }),

/***/ 16380:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/pod/capture-details/add-signature/add-signature-routing.module.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSignaturePageRoutingModule": () => (/* binding */ AddSignaturePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _add_signature_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-signature.page */ 4280);




const routes = [
    {
        path: '',
        component: _add_signature_page__WEBPACK_IMPORTED_MODULE_0__.AddSignaturePage
    }
];
let AddSignaturePageRoutingModule = class AddSignaturePageRoutingModule {
};
AddSignaturePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddSignaturePageRoutingModule);



/***/ }),

/***/ 20162:
/*!*********************************************************************************************************!*\
  !*** ./src/app/tabpage/stop-list/stop-detail/pod/capture-details/add-signature/add-signature.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSignaturePageModule": () => (/* binding */ AddSignaturePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_signature_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-signature-routing.module */ 16380);
/* harmony import */ var _add_signature_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-signature.page */ 4280);
/* harmony import */ var ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-rating-component */ 75042);








let AddSignaturePageModule = class AddSignaturePageModule {
};
AddSignaturePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ionic_rating_component__WEBPACK_IMPORTED_MODULE_7__.IonicRatingComponentModule,
            _add_signature_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddSignaturePageRoutingModule
        ],
        declarations: [_add_signature_page__WEBPACK_IMPORTED_MODULE_1__.AddSignaturePage]
    })
], AddSignaturePageModule);



/***/ }),

/***/ 78675:
/*!*************!*\
  !*** tslib ***!
  \*************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);
//# sourceMappingURL=src_app_tabpage_stop-list_stop-detail_pod_capture-details_add-signature_add-signature_module_ts.js.map