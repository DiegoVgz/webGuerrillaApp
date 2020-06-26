(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["match-match-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>match</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n</ion-content>\n");

/***/ }),

/***/ "./src/app/match/match-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/match/match-routing.module.ts ***!
  \***********************************************/
/*! exports provided: MatchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPageRoutingModule", function() { return MatchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _match_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match.page */ "./src/app/match/match.page.ts");




const routes = [
    {
        path: '',
        component: _match_page__WEBPACK_IMPORTED_MODULE_3__["MatchPage"]
    }
];
let MatchPageRoutingModule = class MatchPageRoutingModule {
};
MatchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MatchPageRoutingModule);



/***/ }),

/***/ "./src/app/match/match.module.ts":
/*!***************************************!*\
  !*** ./src/app/match/match.module.ts ***!
  \***************************************/
/*! exports provided: MatchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPageModule", function() { return MatchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _match_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./match-routing.module */ "./src/app/match/match-routing.module.ts");
/* harmony import */ var _match_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./match.page */ "./src/app/match/match.page.ts");







let MatchPageModule = class MatchPageModule {
};
MatchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _match_routing_module__WEBPACK_IMPORTED_MODULE_5__["MatchPageRoutingModule"]
        ],
        declarations: [_match_page__WEBPACK_IMPORTED_MODULE_6__["MatchPage"]]
    })
], MatchPageModule);



/***/ }),

/***/ "./src/app/match/match.page.scss":
/*!***************************************!*\
  !*** ./src/app/match/match.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGNoL21hdGNoLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/match/match.page.ts":
/*!*************************************!*\
  !*** ./src/app/match/match.page.ts ***!
  \*************************************/
/*! exports provided: MatchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPage", function() { return MatchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MatchPage = class MatchPage {
    constructor() { }
    ngOnInit() {
    }
};
MatchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-match',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./match.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./match.page.scss */ "./src/app/match/match.page.scss")).default]
    })
], MatchPage);



/***/ })

}]);
//# sourceMappingURL=match-match-module-es2015.js.map