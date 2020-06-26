(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["connect-connect-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/connect.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/connect/connect.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-router-outlet id=\"main\"></ion-router-outlet>\n<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"openEnd()\">\n      <ion-icon  name=\"menu\"></ion-icon>\n    </ion-button>  \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  \n<ion-menu side=\"start\" contentId=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"#e20d0d\">\n      <ion-title style=\"color:#e20d0d;\">Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item (click)=\"goToMenu()\">Profile</ion-item>\n      <ion-item (click)=\"goToRanking()\">Ranking</ion-item>\n      <ion-item (click)=\"goToSettings()\">Settings</ion-item>\n      <ion-item (click)=\"goOut()\">Logout</ion-item>\n      <ion-item (click)=\"openEnd()\">Close</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n  <h1 class=\"title\">\n    Settings\n  </h1>\n\n    <div class=\"content\">\n   \n     <ion-item>\n      <ion-input type=\"text\" placeholder=\"ip\"></ion-input>\n     </ion-item>\n       \n     <br>\n     <br>\n     \n        <ion-button >Connect</ion-button>\n     \n\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/connect/connect-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/connect/connect-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ConnectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectPageRoutingModule", function() { return ConnectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _connect_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect.page */ "./src/app/connect/connect.page.ts");




const routes = [
    {
        path: '',
        component: _connect_page__WEBPACK_IMPORTED_MODULE_3__["ConnectPage"]
    }
];
let ConnectPageRoutingModule = class ConnectPageRoutingModule {
};
ConnectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConnectPageRoutingModule);



/***/ }),

/***/ "./src/app/connect/connect.module.ts":
/*!*******************************************!*\
  !*** ./src/app/connect/connect.module.ts ***!
  \*******************************************/
/*! exports provided: ConnectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectPageModule", function() { return ConnectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _connect_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connect-routing.module */ "./src/app/connect/connect-routing.module.ts");
/* harmony import */ var _connect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connect.page */ "./src/app/connect/connect.page.ts");







let ConnectPageModule = class ConnectPageModule {
};
ConnectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _connect_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConnectPageRoutingModule"]
        ],
        declarations: [_connect_page__WEBPACK_IMPORTED_MODULE_6__["ConnectPage"]]
    })
], ConnectPageModule);



/***/ }),

/***/ "./src/app/connect/connect.page.scss":
/*!*******************************************!*\
  !*** ./src/app/connect/connect.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.imgItem {\n  align-items: center;\n  align-content: center;\n  align-self: center;\n  text-align: center;\n  width: 20%;\n  height: 20%;\n  margin-left: 40%;\n  margin-right: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ubmVjdC9DOlxcVXNlcnNcXGRpZWdvXFxEZXNrdG9wXFx3ZWItZ3VlcnJpbGxhLWFwcFxcd2ViR3VlcnJpbGxhQXBwL3NyY1xcYXBwXFxjb25uZWN0XFxjb25uZWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29ubmVjdC9jb25uZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZKOztBREtFO0VBQ0UscUJBQUE7QUNGSjs7QURLRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb25uZWN0L2Nvbm5lY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuaW1nSXRlbXtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MCU7XHJcbiAgXHJcbiAgfSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaW1nSXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMjAlO1xuICBtYXJnaW4tbGVmdDogNDAlO1xuICBtYXJnaW4tcmlnaHQ6IDQwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/connect/connect.page.ts":
/*!*****************************************!*\
  !*** ./src/app/connect/connect.page.ts ***!
  \*****************************************/
/*! exports provided: ConnectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectPage", function() { return ConnectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ConnectPage = class ConnectPage {
    constructor(menu, router) {
        this.menu = menu;
        this.router = router;
    }
    ngOnInit() {
    }
    openEnd() {
        this.menu.close('start');
        this.menu.enable(true, 'start');
        this.menu.open('start');
        this.menu.close('start');
    }
    goToRanking() {
        this.router.navigate(['/ranking']);
    }
    goToSettings() {
        this.router.navigate(['/connect']);
    }
    goToMenu() {
        this.router.navigate(['/menu']);
    }
    goOut() {
        this.router.navigate(['/home']);
    }
};
ConnectPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ConnectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-connect',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./connect.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/connect/connect.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./connect.page.scss */ "./src/app/connect/connect.page.scss")).default]
    })
], ConnectPage);



/***/ })

}]);
//# sourceMappingURL=connect-connect-module-es2015.js.map