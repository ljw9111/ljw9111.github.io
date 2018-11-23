(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-order></app-order>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/app-routing.module */ "./src/app/modules/app-routing.module.ts");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/material.module */ "./src/app/modules/material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/order/order.component */ "./src/app/components/order/order.component.ts");
/* harmony import */ var _components_detail_modal_detail_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/detail-modal/detail-modal.component */ "./src/app/components/detail-modal/detail-modal.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/review/review.component */ "./src/app/components/review/review.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");
/* harmony import */ var _components_tip_tip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tip/tip.component */ "./src/app/components/tip/tip.component.ts");
/* harmony import */ var _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login-modal/login-modal.component */ "./src/app/components/login-modal/login-modal.component.ts");
/* harmony import */ var _components_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/customer-info/customer-info.component */ "./src/app/components/customer-info/customer-info.component.ts");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_18__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/* Components */











/* Angular-social-login */

function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_18__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_18__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_18__["FacebookLoginProvider"]('144146963204989')
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_18__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_18__["GoogleLoginProvider"]('99696000555-dma36ee2dpca7tooidfebadh39s1gcah.apps.googleusercontent.com')
        }
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _components_order_order_component__WEBPACK_IMPORTED_MODULE_9__["OrderComponent"],
                _components_detail_modal_detail_modal_component__WEBPACK_IMPORTED_MODULE_10__["DetailModalComponent"],
                _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"],
                _components_review_review_component__WEBPACK_IMPORTED_MODULE_12__["ReviewComponent"],
                _components_products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"],
                _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_14__["PaymentComponent"],
                _components_tip_tip_component__WEBPACK_IMPORTED_MODULE_15__["TipComponent"],
                _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_16__["LoginModalComponent"],
                _components_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_17__["CustomerInfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _modules_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_18__["SocialLoginModule"]
            ],
            entryComponents: [
                _components_detail_modal_detail_modal_component__WEBPACK_IMPORTED_MODULE_10__["DetailModalComponent"],
                _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_16__["LoginModalComponent"]
            ],
            providers: [{
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_18__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cart/cart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>YOUR ORDER</h2>\n<mat-grid-list cols=\"4\" rowHeight=\"1:1\" class=\"product-cards\">\n\t<ng-container *ngFor=\"let product of order.products; let i = index\">\n\t\t<mat-grid-tile class=\"name\" (click)=\"openEditModal(product, i)\">\n\t\t\t<h4>{{ product.name }}</h4>\n\t\t\t<p>{{ (product?.choices || '') + (product?.choices && product?.memo ? ', ' : '') + (product.memo || '') }}</p>\n\t\t</mat-grid-tile>\n\t\t<mat-grid-tile class=\"price\">\n\t\t\t{{ \"$\" + (product.quantity * product.unit_price)?.toFixed(2) }}\n\t\t</mat-grid-tile>\n\t\t<mat-grid-tile class=\"quantity\">\n\t\t\t<button class=\"minusBtn\" mat-icon-button (click)=\"onClickQuantityMinus(i)\">\n\t            <mat-icon>remove_circle</mat-icon>\n\t        </button>\n\t        <button class=\"quantity-number\" mat-button [disabled]=\"true\">{{ product.quantity }}</button>\n\t        <button class=\"plusBtn\" mat-icon-button (click)=\"onClickQuantityPlus(i)\">\n\t            <mat-icon>add_circle</mat-icon>\n\t        </button>\n\t\t</mat-grid-tile>\n\t\t<mat-grid-tile class=\"remove\">\n\t\t\t<button mat-icon-button (click)=\"onClickQuantityRemove(i)\">\n\t            <mat-icon>trash</mat-icon>\n\t        </button>\n\t\t</mat-grid-tile>\n\t</ng-container>\n</mat-grid-list>\n<div class=\"total\">\n\t<div>{{ 'SUBTOTAL: $' + order?.subTotalPrice?.toFixed(2) }}</div>\n\t<div>{{ 'TAX: $' + order?.taxPrice?.toFixed(2) }}</div>\n\t<div>{{ 'TIP: $' + order?.tipPrice?.toFixed(2) }}</div>\n\t<div>{{ 'TOTAL: $' + (order?.subTotalPrice + order?.taxPrice).toFixed(2) }}</div>\n</div>\n<a mat-raised-button routerLink=\"/products\" color=\"accent\">Modify your order</a>\n<a mat-raised-button routerLink=\"/customer-info\" color=\"primary\">Proceed to checkout</a>"

/***/ }),

/***/ "./src/app/components/cart/cart.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(orderService) {
        this.orderService = orderService;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.order = this.orderService.getOrder();
    };
    CartComponent.prototype.onClickQuantityMinus = function (i) {
        this.order = this.orderService.quantityMinus(i);
    };
    CartComponent.prototype.onClickQuantityPlus = function (i) {
        this.order = this.orderService.quantityPlus(i);
    };
    CartComponent.prototype.onClickQuantityRemove = function (i) {
        this.order = this.orderService.quantityRemove(i);
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/components/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/customer-info/customer-info.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/customer-info/customer-info.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Confirm your information</h2>\n<p>Does everything below look correct?</p>\n\n<div>\n\t<h3>Contact</h3>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"First name\">\n\t</mat-form-field>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"Last name\">\n\t</mat-form-field>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"Email\">\n\t</mat-form-field>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"Phone\">\n\t</mat-form-field>\n</div>\n\n<div>\n\t<h3>Address</h3>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"Street address\">\n\t</mat-form-field>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"Apt, suite, floor (optional)\">\n\t</mat-form-field>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"City\">\n\t</mat-form-field>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"State\">\n\t</mat-form-field>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"Zip code\">\n\t</mat-form-field>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"Delivery instructions (optional)\">\n\t</mat-form-field>\n</div>\n\n<div>\n\t<button mat-raised-button routerLink=\"/review\" color=\"primary\">Continue to payment method</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/customer-info/customer-info.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/customer-info/customer-info.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/customer-info/customer-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/customer-info/customer-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerInfoComponent", function() { return CustomerInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerInfoComponent = /** @class */ (function () {
    function CustomerInfoComponent() {
    }
    CustomerInfoComponent.prototype.ngOnInit = function () {
    };
    CustomerInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-info',
            template: __webpack_require__(/*! ./customer-info.component.html */ "./src/app/components/customer-info/customer-info.component.html"),
            styles: [__webpack_require__(/*! ./customer-info.component.scss */ "./src/app/components/customer-info/customer-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerInfoComponent);
    return CustomerInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/detail-modal/detail-modal.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/detail-modal/detail-modal.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"cancelBtn\" mat-button (click)=\"dialogRef.close()\"> \n\tCLOSE\n\t<mat-icon>close</mat-icon> \n</button>\n\n<mat-grid-list cols=\"3\" rowHeight=\"1:1\">\n\t<mat-grid-tile [colspan]=\"1\" [rowspan]=\"3\">\n\t\t<img class=\"thumbnail\" [src]=\"\" />\n\t\t<div class=\"memo\">\n\t\t\t<h4>SPECIAL INSTRUCTIONS</h4>\n\t\t\t<textarea></textarea> <!-- [(ngModel)]=\"memo\" -->\n\t\t</div>\n\t</mat-grid-tile>\n\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t<h1> {{ product?.name }} </h1> \n\t\t<span [innerHtml]=\"product?.short_descriptions\"></span>\n\t\t<p [innerHtml]=\"product?.descriptions\"></p>\n\t\t<h3 class=\"price\" *ngIf=\"product?.regular_price > 0\">\n\t\t\t<s>{{ product?.sale_price ? \"$\" + product?.regular_price?.toFixed(2) : '' }}</s> {{ '$' + (product?.sale_price || product?.regular_price)?.toFixed(2) }}\n\t\t</h3>\n\t</mat-grid-tile>\n\t<mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n\t\t<button class=\"minusBtn\" mat-icon-button (click)=\"onClickQuantityMinus()\">\n\t\t    <mat-icon>remove_circle</mat-icon>\n\t\t</button>\n\t\t<button class=\"quantity\" mat-button [disabled]=\"true\">{{ product?.quantity || 1 }}</button>\n\t\t<button class=\"plusBtn\" mat-icon-button (click)=\"onClickQuantityPlus()\">\n\t\t    <mat-icon>add_circle</mat-icon>\n\t\t</button>\n\t</mat-grid-tile>\n\t<mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n\t\t<button class=\"addToCartBtn\" mat-raised-button (click)=\"onClickAddCart()\" color=\"primary\">ADD TO CART <br> {{ '$' + ((product?.quantity || 1) * product?.unit_price)?.toFixed(2) }}</button>\n\t</mat-grid-tile>\n\t<mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\">\n\t\t<!-- <h3> Choose Your {{ option.name == 'Hand Roll Lunch' ? 'First Hand Roll' : (option.name == 'Hand Roll Lunch 2nd' ? 'Second Hand Roll' : option.name) }} </h3>\n -->\n\t\t<!-- Selectbox -->\n\t\t<!-- <div class=\"roll-select\" *ngIf=\"option.type == 'Select'\">\n\t\t\t<ion-select [(ngModel)]=\"selectChoice[i]\" (ionChange)=\"onSelectChange(option, i)\">\n\t\t\t    <ion-option *ngFor=\"let choice of option?.products\" [value]=\"choice\">\n\t\t\t    \t{{ choice.name }} \n\t\t\t    \t{{ option?.is_price_added && (choice?.sale_price || choice?.regular_price) ? (' + $' + (choice?.sale_price || choice?.regular_price)?.toFixed(2)) : '' }} \n\t\t\t    </ion-option>\n\t\t\t</ion-select>\n\t\t</div>\n -->\n\t\t<!-- Checkbox -->\n\t\t<!-- <div class=\"choice-checkbox\" *ngIf=\"option.type == 'Check'\" align-items-center>\n\t\t\t<ion-col col-auto *ngFor=\"let choice of option?.products\" (click)=\"onClickChoice(choice, option)\" [ngClass]=\"{'active': choice?.is_selected}\">\n\t\t\t\t<ion-checkbox disabled=\"true\"></ion-checkbox>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<h6> {{ choice?.name }} </h6>\n\t\t\t\t\t<p> {{ option?.is_price_added && (choice?.sale_price || choice?.regular_price) ? (' + $' + (choice?.sale_price || choice?.regular_price)?.toFixed(2)) : '' }}\n\t\t\t\t\t</p>\n\t\t\t\t</ion-label>\n\t\t\t</ion-col>\n\t\t</div> -->\n\t</mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./src/app/components/detail-modal/detail-modal.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/detail-modal/detail-modal.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/detail-modal/detail-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/detail-modal/detail-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModalComponent", function() { return DetailModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DetailModalComponent = /** @class */ (function () {
    function DetailModalComponent(orderService, dialogRef, data) {
        this.orderService = orderService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DetailModalComponent.prototype.ngOnInit = function () {
        this.product = this.data;
        // Set default choice for select
        if (this.product.options.length > 0) {
            this.selectChoice = [];
            for (var i = 0; i < this.product.options.length; i++) {
                if (this.product.options[i].type === 'Select') {
                    this.selectChoice.push(this.product.options[i].products[0]);
                }
            }
        }
        // Check a default choice for min_num_choice == 1
        for (var i = 0; i < this.product.options.length; i++) {
            // ASSUME: min_num_choice is 0 or 1.
            if (this.product.options[i].min_num_choice === 1) {
                this.product.options[i].products[0].is_selected = true; // choose first choice for default choice
            }
        }
        this.computeUnitPrice();
        this.order = this.orderService.getOrder();
    };
    DetailModalComponent.prototype.onClickAddCart = function () {
        // make sure 'order' in 'orderService' always has property 'quantity'
        if (!('quantity' in this.product)) {
            this.product['quantity'] = 1;
        }
        this.product['memo'] = this.memo;
        // Compute a concatenated string for choices.
        var option_choices = [];
        var choices = [];
        for (var i = 0; i < this.product.options.length; i++) {
            for (var j = 0; j < this.product.options[i].products.length; j++) {
                if (this.product.options[i].products[j].is_selected) {
                    // 48 is category_id of "Combo"
                    choices.push((this.product.category_id === 48 ? this.product.options[i].name + ': ' : '') + this.product.options[i].products[j].name);
                    option_choices.push({
                        option_name: this.product.options[i].name,
                        choice_name: (this.product.category_id === 48 ? this.product.options[i].name + ': ' : '') + this.product.options[i].products[j].name,
                        quantity: 1
                    });
                }
            }
        }
        this.product.choices = (choices.length > 0) ? choices.toString().replace(/,/gi, ', ') : null;
        this.product.option_choices = option_choices;
        this.order = this.orderService.addCart(this.product);
        this.dialogRef.close();
    };
    DetailModalComponent.prototype.onClickQuantityMinus = function () {
        if ('quantity' in this.product && this.product.quantity > 1) {
            this.product.quantity--;
        }
    };
    DetailModalComponent.prototype.onClickQuantityPlus = function () {
        if ('quantity' in this.product) {
            this.product.quantity++;
        }
        else {
            this.product['quantity'] = 2;
        } // quantity is 1 as default
    };
    DetailModalComponent.prototype.onClickChoice = function (choice, option) {
        // We assume that max_num_choice is always 1.
        if ('is_selected' in choice && choice.is_selected) {
            if (option.min_num_choice === 0) {
                choice.is_selected = false;
            }
        }
        else {
            for (var i = 0; i < option.products.length; i++) {
                option.products[i].is_selected = false;
            }
            choice.is_selected = true;
        }
        this.computeUnitPrice();
    };
    DetailModalComponent.prototype.onSelectChange = function (option, j) {
        for (var i = 0; i < option.products.length; i++) {
            if (option.products[i].name === this.selectChoice[j].name) {
                option.products[i].is_selected = true;
            }
            else {
                option.products[i].is_selected = false;
            }
        }
        this.computeUnitPrice();
    };
    DetailModalComponent.prototype.computeUnitPrice = function () {
        this.product.unit_price = (this.product.sale_price || this.product.regular_price);
        for (var i = 0; i < this.product.options.length; i++) {
            for (var j = 0; j < this.product.options[i].products.length; j++) {
                if (this.product.options[i].products[j].is_selected && this.product.options[i].is_price_added) {
                    this.product.unit_price += (this.product.options[i].products[j].sale_price || this.product.options[i].products[j].regular_price);
                }
            }
        }
    };
    DetailModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-modal',
            template: __webpack_require__(/*! ./detail-modal.component.html */ "./src/app/components/detail-modal/detail-modal.component.html"),
            styles: [__webpack_require__(/*! ./detail-modal.component.scss */ "./src/app/components/detail-modal/detail-modal.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DetailModalComponent);
    return DetailModalComponent;
}());



/***/ }),

/***/ "./src/app/components/login-modal/login-modal.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/login-modal/login-modal.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"dialogRef.close()\"> \n\t<mat-icon>close</mat-icon> \n</button>\n\n<h1>Sign in</h1>\n\n<!-- Email/Pw Login -->\n<div>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"Email\">\n\t</mat-form-field>\n\t<mat-form-field>\n\t\t<input matInput placeholder=\"Password\">\n\t</mat-form-field>\n\t<button mat-raised-button>Sign in</button>\n</div>\n\n<!-- Social Login -->\n<div>\n\t<button mat-raised-button (click)=\"socialSignIn('google')\">Sign in with Google</button>\n\t<button mat-raised-button (click)=\"socialSignIn('facebook')\">Sign in with Facebook</button>\n</div>\n\n<!-- Sign Up -->\n<div>\n\t<button mat-raised-button>Sign up</button>\n</div>"

/***/ }),

/***/ "./src/app/components/login-modal/login-modal.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/login-modal/login-modal.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login-modal/login-modal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-modal/login-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent(customerService, dialogRef) {
        this.customerService = customerService;
        this.dialogRef = dialogRef;
    }
    LoginModalComponent.prototype.ngOnInit = function () {
    };
    LoginModalComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        this.customerService.socialSignIn(socialPlatform).then(function (customer) {
            _this.dialogRef.close();
        });
    };
    LoginModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-modal',
            template: __webpack_require__(/*! ./login-modal.component.html */ "./src/app/components/login-modal/login-modal.component.html"),
            styles: [__webpack_require__(/*! ./login-modal.component.scss */ "./src/app/components/login-modal/login-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], LoginModalComponent);
    return LoginModalComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\t<span>OITA SUSHI</span>\n\n<!-- \t<mat-nav-list>\n\t\t<a mat-list-item href=\"\"> MENU </a>\n\t\t<a mat-list-item href=\"\"> CATERING </a>\n\t\t<a mat-list-item href=\"\"> OUR STORY </a>\n\t\t<a mat-list-item href=\"\"> GALLERY </a>\n\t</mat-nav-list> -->\n\t<button mat-raised-button color=\"accent\" *ngIf=\"!customerService.isLoggedIn()\" (click)=\"openLoginModal()\">SIGN IN</button>\n\t<button mat-raised-button color=\"accent\" *ngIf=\"customerService.isLoggedIn()\" [matMenuTriggerFor]=\"menu\">Hi! {{ customerService.customer?.name }}</button>\n\t<mat-menu #menu=\"matMenu\">\n\t\t<button mat-menu-item (click)=\"customerService.signOut()\">Sign Out</button>\n\t</mat-menu>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-modal/login-modal.component */ "./src/app/components/login-modal/login-modal.component.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(dialog, customerService) {
        this.dialog = dialog;
        this.customerService = customerService;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.openLoginModal = function () {
        this.dialog.open(_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_2__["LoginModalComponent"]);
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/order/order.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/order/order.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container>\n\t<mat-drawer-content>\n\t\t<router-outlet></router-outlet>\n\t</mat-drawer-content>\n\t<mat-drawer position=\"end\" mode=\"side\" opened>\n\t\t<app-cart></app-cart>\n\t</mat-drawer>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/components/order/order.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/order/order.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-drawer-container {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/components/order/order.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/order/order.component.ts ***!
  \*****************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/components/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/components/order/order.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/components/payment/payment.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/payment/payment.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Payment information</h3>\n<form id=\"nonce-form\" novalidate>\n\t<table>\n    \t<tbody>\n    \t\t<tr>\n    \t\t\t<td>Card Number:</td>\n    \t\t\t<td><div id=\"sq-card-number\"></div></td>\n    \t\t</tr>\n    \t\t<tr>\n    \t\t\t<td>CVV:</td>\n    \t\t\t<td><div id=\"sq-cvv\"></div></td>\n    \t\t</tr>\n    \t\t<tr>\n    \t\t\t<td>Expiration Date: </td>\n    \t\t\t<td><div id=\"sq-expiration-date\"></div></td>\n    \t\t</tr>\n    \t\t<tr>\n    \t\t\t<td>Postal Code:</td>\n    \t\t\t<td><div id=\"sq-postal-code\"></div></td>\n    \t\t</tr>\n    \t\t<tr>\n    \t\t\t<td colspan=\"2\">\n    \t\t\t\t<button id=\"sq-creditcard\" class=\"button-credit-card\" (click)=\"requestCardNonce($event);\">\n    \t\t\t\t\tPay with card\n    \t\t\t\t</button>\n    \t\t\t</td>\n    \t\t</tr>\n    \t</tbody>\n\t</table>\n</form>"

/***/ }),

/***/ "./src/app/components/payment/payment.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/payment/payment.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/payment/payment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/payment/payment.component.ts ***!
  \*********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
        // this.paymentForm = new SqPaymentForm({
        // 	// Initialize the payment form elements
        // 	applicationId: 'sandbox-sq0idp-4sE3B6OBMKya9Vh0sBj4Qw',
        // 	locationId: 'CBASEHYvl-NloFETMUC_qdH4UqMgAQ',
        // 	autoBuild: false,
        // 	inputClass: 'sq-input',
        // 	// Customize the CSS for SqPaymentForm iframe elements
        // 	inputStyles: [{
        // 		fontSize: '.9em'
        // 	}],
        // 	// Initialize the credit card placeholders
        // 	cardNumber: {
        // 		elementId: 'sq-card-number',
        // 		placeholder: '•••• •••• •••• ••••'
        // 	},
        // 	cvv: {
        // 		elementId: 'sq-cvv',
        // 		placeholder: 'CVV'
        // 	},
        // 	expirationDate: {
        // 		elementId: 'sq-expiration-date',
        // 		placeholder: 'MM/YY'
        // 	},
        // 	postalCode: {
        // 		elementId: 'sq-postal-code'
        // 	},
        // 	// SqPaymentForm callback functions
        // 	callbacks: {
        // 		cardNonceResponseReceived: function(errors, nonce, cardData, billingContact, shippingContact) {
        // 			if (errors) {
        // 				// Log errors from nonce generation to the Javascript console
        // 				console.log('Encountered errors:');
        // 				errors.forEach(function(error) {
        // 					console.log('	' + error.message);
        // 				});
        // 				return;
        // 			}
        // 			alert('Nonce received: ' + nonce); /* FOR TESTING ONLY */
        // 			console.log('Nonce received: ' + nonce);
        // 		}
        // 	}
        // });
        // this.paymentForm.build();
    };
    PaymentComponent.prototype.ngOnDestroy = function () {
        // this.paymentForm.destroy();
    };
    PaymentComponent.prototype.requestCardNonce = function (event) {
        event.preventDefault();
        // this.paymentForm.requestCardNonce();
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/components/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/components/payment/payment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container>\n\t<mat-drawer position=\"start\" mode=\"side\" opened>\n\t\t<mat-list>\n\t\t\t<mat-list-item *ngFor=\"let category of all_products; let i = index\" (click)=\"onClickCategory(i)\" [ngClass]=\"i == currentCategory ? 'active' : ''\">\n\t\t\t\t<button mat-button>{{ category.name.toUpperCase() }}</button>\n\t\t\t</mat-list-item>\n\t\t\t<!-- <mat-list-item *ngFor=\"let child_category of child_categories; let i = index\">\n\t\t\t\t<button mat-button (touchstart)=\"onClickChildCategory(i)\" [ngClass]=\"i == currentChildCategory ? 'active' : ''\"> {{ child_category.name }} </button>\n\t\t\t</mat-list-item> -->\n\t\t</mat-list>\n\t</mat-drawer>\n\t<mat-drawer-content>\n\t\t<mat-grid-list cols=\"4\" rowHeight=\"200px\" class=\"product-cards\">\n\t\t\t<mat-grid-tile *ngFor=\"let product of products\">\n\t\t    \t<mat-card (click)=\"openDetailModal(product)\"> \n\t\t            <img class=\"thumbnail\" [src]=\"\" />\n\t\t            <h3 text-center>{{ product.name }}</h3>\n\t\t            <h4 text-center>\n\t\t                <s>{{ product?.sale_price ? \"$ \" + product?.regular_price?.toFixed(2) : '' }}</s> {{ product?.regular_price ? '$ ' + (product?.sale_price || product?.regular_price)?.toFixed(2) : '' }}\n\t\t            </h4>\n\t\t        </mat-card>\n\t\t    </mat-grid-tile>\n\t\t</mat-grid-list>\n\t</mat-drawer-content>\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-drawer {\n  width: 200px; }\n"

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _detail_modal_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detail-modal/detail-modal.component */ "./src/app/components/detail-modal/detail-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(orderService, dialog) {
        this.orderService = orderService;
        this.dialog = dialog;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getAllProducts().subscribe(function (data) {
            _this.all_products = data;
            if ((new Date()).getHours() > 14) {
                _this.all_products.splice(1, 1);
            } // exclude 'Lunch' after 2 PM
            _this.onClickCategory(0); // make 0th category as default
        }, function (error) { console.log(error); });
    };
    ProductsComponent.prototype.onClickCategory = function (i) {
        this.currentCategory = i;
        this.child_categories = this.all_products[i].child_categories;
        if (this.all_products[i].child_categories.length > 0) {
            this.onClickChildCategory(0);
        }
        else {
            this.products = this.all_products[i].products;
        }
    };
    ProductsComponent.prototype.onClickChildCategory = function (i) {
        this.currentChildCategory = i;
        this.products = this.all_products[this.currentCategory].child_categories[i].products;
    };
    ProductsComponent.prototype.openDetailModal = function (product) {
        this.dialog.open(_detail_modal_detail_modal_component__WEBPACK_IMPORTED_MODULE_3__["DetailModalComponent"], {
            width: '50%',
            data: JSON.parse(JSON.stringify(product)) // deep copy
        });
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/review/review.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/review/review.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Review and place order</h2>\r\n<p>Review address, payment, and tip to complete your purchase</p>\r\n\r\n<h3>Your order settings</h3>\r\n\r\n<app-payment></app-payment>\r\n\r\n<app-tip></app-tip>\r\n\r\n<button mat-raised-button color=\"warn\" (click)=\"placeOrder()\">Placing your order</button>"

/***/ }),

/***/ "./src/app/components/review/review.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/review/review.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/review/review.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/review/review.component.ts ***!
  \*******************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewComponent = /** @class */ (function () {
    function ReviewComponent(orderService) {
        this.orderService = orderService;
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent.prototype.placeOrder = function () {
        this.orderService.placeOrder();
    };
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! ./review.component.html */ "./src/app/components/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.scss */ "./src/app/components/review/review.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/components/tip/tip.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/tip/tip.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add a tip</h3>\n\n<button mat-button *ngFor=\"let tipRate of tipRates\" (click)=\"currentTipType='rate'; currentTipRate=tipRate; setTipWithRate();\" [ngClass]=\"(currentTipType=='rate' && currentTipRate==tipRate) ? 'active' : ''\">{{ tipRate*100 + '%' }}</button>\n\n<button mat-button>Custom tip:</button>\n<mat-form-field>\n\t<span matPrefix>$&nbsp;</span>\n\t<input matInput type=\"number\" min=\"0\" [(ngModel)]=\"customTipPrice\" (click)=\"currentTipType='custom'\" (change)=\"setTipWithCustom();\">\n</mat-form-field>"

/***/ }),

/***/ "./src/app/components/tip/tip.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/tip/tip.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tip/tip.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/tip/tip.component.ts ***!
  \*************************************************/
/*! exports provided: TipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipComponent", function() { return TipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TipComponent = /** @class */ (function () {
    function TipComponent(orderService) {
        this.orderService = orderService;
        this.tipRates = [0.15, 0.2, 0.25, 0.3];
        this.order = this.orderService.getOrder();
    }
    TipComponent.prototype.ngOnInit = function () {
    };
    TipComponent.prototype.setTipWithRate = function () {
        this.order.tipPrice = Number((this.currentTipRate * (this.order.subTotalPrice + this.order.taxPrice)).toFixed(2));
    };
    TipComponent.prototype.setTipWithCustom = function () {
        if (!this.customTipPrice || this.customTipPrice < 0) {
            this.customTipPrice = 0;
        }
        this.order.tipPrice = this.customTipPrice;
    };
    TipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tip',
            template: __webpack_require__(/*! ./tip.component.html */ "./src/app/components/tip/tip.component.html"),
            styles: [__webpack_require__(/*! ./tip.component.scss */ "./src/app/components/tip/tip.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], TipComponent);
    return TipComponent;
}());



/***/ }),

/***/ "./src/app/modules/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/customer-info/customer-info.component */ "./src/app/components/customer-info/customer-info.component.ts");
/* harmony import */ var _components_review_review_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/review/review.component */ "./src/app/components/review/review.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"] },
    { path: 'customer-info', component: _components_customer_info_customer_info_component__WEBPACK_IMPORTED_MODULE_3__["CustomerInfoComponent"] },
    { path: 'review', component: _components_review_review_component__WEBPACK_IMPORTED_MODULE_4__["ReviewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sandbox-sq0atb-3QWcSYYTqxulOkoo49bYNA',
        'Accept': 'application/json',
    })
};
var CustomerService = /** @class */ (function () {
    function CustomerService(http, socialAuthService) {
        this.http = http;
        this.socialAuthService = socialAuthService;
        this.customer = null;
        // TODO: customer가 깨졌을 경우를 처리해줘야 한다.
        this.customer = JSON.parse(localStorage.getItem('customer'));
    }
    CustomerService.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform === 'facebook') {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform === 'google') {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID;
        }
        return this.socialAuthService.signIn(socialPlatformProvider).then(function (customer) {
            console.log(socialPlatform + ' sign in data : ', customer);
            _this.customer = customer;
            localStorage.setItem('customer', JSON.stringify(customer));
            // if not registered, then create customer
            // this.customerService.createCustomer(userData.email);
        });
    };
    CustomerService.prototype.isLoggedIn = function () {
        return (this.customer !== null);
    };
    CustomerService.prototype.signOut = function () {
        this.socialAuthService.signOut();
        this.customer = null;
        localStorage.removeItem('customer');
    };
    CustomerService.prototype.createCustomer = function (email) {
        var newCustomer = {
            email_address: email
        };
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], angular_6_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sandbox-sq0atb-OwcSLj1O5xIHL-1aRhHjZQ',
        'Accept': 'application/json',
    })
};
var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.baseURL_server = 'https://api.oitasushi.com:7443/';
        this.order = {
            taxRate: 8.875,
            subTotalPrice: 0,
            taxPrice: 0,
            tipPrice: 0,
            order_source: null,
            products: [],
        };
    }
    OrderService.prototype.getOrder = function () {
        return this.order;
    };
    OrderService.prototype.getAllProducts = function () {
        return this.http.get(this.baseURL_server + 'api/oita/menu/category/multi/active/with_products');
    };
    OrderService.prototype.computeSubTotalAndTaxPrice = function () {
        // Compute SubTotalPrice
        this.order.subTotalPrice = 0;
        for (var i = 0; i < this.order.products.length; i++) {
            this.order.subTotalPrice += this.order.products[i].quantity * this.order.products[i].unit_price;
        }
        // Compute TaxPrice
        var tmp_taxPrice = this.order.subTotalPrice * this.order.taxRate / 100;
        this.order.taxPrice = Number((Math.round(tmp_taxPrice * 100) / 100).toFixed(2));
    };
    OrderService.prototype.addCart = function (product) {
        this.order.products.push(product);
        this.computeSubTotalAndTaxPrice();
        return this.order;
    };
    OrderService.prototype.editCart = function (product, i) {
        this.order.products[i] = product;
        this.computeSubTotalAndTaxPrice();
        return this.order;
    };
    OrderService.prototype.quantityMinus = function (i) {
        if (this.order.products[i].quantity > 1) {
            this.order.products[i].quantity--;
            this.computeSubTotalAndTaxPrice();
            return this.order;
        }
        else {
            return this.quantityRemove(i);
        }
    };
    OrderService.prototype.quantityPlus = function (i) {
        this.order.products[i].quantity++;
        this.computeSubTotalAndTaxPrice();
        return this.order;
    };
    OrderService.prototype.quantityRemove = function (i) {
        this.order.products.splice(i, 1);
        this.computeSubTotalAndTaxPrice();
        return this.order;
    };
    OrderService.prototype.sendOrderToServer = function (isCreditCard) {
        var _this = this;
        var tzoffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
        var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
        var order_items = [];
        for (var i = 0; i < this.order.products.length; i++) {
            var order_item = {
                discount: null,
                discount_rate: null,
                memo: this.order.products[i].memo,
                choices: null,
                option_choices: this.order.products[i].option_choices,
                position: null,
                product_name: this.order.products[i].name,
                quantity: this.order.products[i].quantity,
                unit_price: this.order.products[i].unit_price,
                product_id: this.order.products[i].id
            };
            order_items.push(order_item);
        }
        var orderObj = {
            billing_status: isCreditCard ? 'PAID' : 'CHECKOUT',
            credit_paid: isCreditCard ? this.order.subTotalPrice + this.order.taxPrice : null,
            customer: null,
            discount: null,
            discount_rate: null,
            memo: null,
            order_route: 'STORE_APP',
            order_source: this.order.order_source,
            ordered_date: localISOTime.replace('T', ' ').replace('Z', ''),
            serving_type: 'PICKUP',
            target_time: null,
            sub_total: this.order.subTotalPrice,
            tax: this.order.taxPrice,
            tip: this.order.tipPrice,
            total_charge: this.order.subTotalPrice + this.order.taxPrice,
            total_paid: isCreditCard ? this.order.subTotalPrice + this.order.taxPrice : null,
            order_items: order_items
        };
        console.log(orderObj);
        this.http.post(this.baseURL_server + 'api/oita/order/new', orderObj).subscribe(function (data) {
            _this.order.id = data.id;
            console.log('order http success');
            console.log(data);
            _this.clearCart();
        }, function (error) {
            _this.clearCart();
            /*let alert = this.alertCtrl.create({
                title: 'HTTP Error!',
                buttons: ['OK']
            });
            alert.present();*/
            console.log(error);
        });
    };
    OrderService.prototype.clearCart = function () {
        this.order.subTotalPrice = 0;
        this.order.taxPrice = 0;
        this.order.tipPrice = 0;
        this.order.order_source = null;
        this.order.products.splice(0, this.order.products.length);
        return this.order;
    };
    OrderService.prototype.placeOrder = function () {
        this.http.get('square/v2/customers', httpOptions).subscribe(function (data) {
            //this.http.get('https://connect.squareup.com/v2/customers', httpOptions).subscribe((data: any[]) => {
            console.log(data);
        }, function (error) { console.log(error); });
        var newClient = {
            "given_name": "Jungwoo",
            "family_name": "Lee",
            "email_address": "Amelia.Earhart@example.com",
            "address": {
                "address_line_1": "500 Electric Ave",
                "address_line_2": "Suite 600",
                "locality": "New York",
                "administrative_district_level_1": "NY",
                "postal_code": "10003",
                "country": "US"
            },
            "phone_number": "1-212-555-4240",
            "reference_id": "YOUR_REFERENCE_ID",
            "note": "a customer"
        };
        this.http.post('square/v2/customers', newClient, httpOptions).subscribe(function (data) {
            //this.http.post('https://connect.squareup.com/v2/customers', newClient, httpOptions).subscribe((data: any[]) => {
            console.log(data);
        }, function (error) { console.log(error); });
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';	// Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jungwoo Lee\Desktop\jungwoolee\Dev\Oita Website\desktop\oita-desktop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map