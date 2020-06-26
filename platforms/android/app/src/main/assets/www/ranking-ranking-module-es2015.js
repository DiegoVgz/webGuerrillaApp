(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ranking-ranking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ranking/ranking.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ranking/ranking.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n <ion-router-outlet id=\"main\"></ion-router-outlet>\n\n<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"openEnd()\">\n      <ion-icon  name=\"menu\"></ion-icon>\n    </ion-button>  \n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content #pageTop>\n\n  <ion-menu side=\"start\"  id=\"menu\"  contentId=\"main\">\n    <ion-header>\n      <ion-toolbar color=\"#e20d0d\">\n        <ion-title style=\"color:#e20d0d;\">Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-item (click)=\"goToMenu()\">Profile</ion-item>\n        <ion-item (click)=\"goToRanking()\">Ranking</ion-item>\n        <ion-item (click)=\"goToSettings()\">Settings</ion-item>\n        <ion-item (click)=\"goOut()\">Logout</ion-item>\n        <ion-item (click)=\"openEnd()\">Close</ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n\n\n\n<ion-item>\n  <ion-col><h1 class=\"title\">Ranking</h1></ion-col>\n  <ion-col><h1 class=\"title\"></h1></ion-col>\n  <ion-col><ion-icon (click)=\"refresh()\" name=\"refresh-outline\"></ion-icon></ion-col>\n\n</ion-item>\n\n<ion-row style=\"background-color:rgba(245, 245, 245, 0.856) ; color:#080808\">\n  <ion-col><ion-label>Rank</ion-label></ion-col>\n  <ion-col><ion-label>Guerrilla</ion-label></ion-col>\n  <ion-col><ion-label>Action</ion-label></ion-col>\n</ion-row>\n\n\n  <ion-list>\n\n  <ion-item *ngFor=\"let item of items\">\n    <ion-col><ion-label>{{item}}</ion-label></ion-col> <ion-col><ion-label>Guerrilla</ion-label></ion-col><ion-col><ion-button>Attack</ion-button></ion-col>\n  </ion-item>\n  \n\n  </ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"crescent\"\n      loadingText=\"Loading...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/ranking/ranking-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ranking/ranking-routing.module.ts ***!
  \***************************************************/
/*! exports provided: RankingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingPageRoutingModule", function() { return RankingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ranking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ranking.page */ "./src/app/ranking/ranking.page.ts");




const routes = [
    {
        path: '',
        component: _ranking_page__WEBPACK_IMPORTED_MODULE_3__["RankingPage"]
    }
];
let RankingPageRoutingModule = class RankingPageRoutingModule {
};
RankingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RankingPageRoutingModule);



/***/ }),

/***/ "./src/app/ranking/ranking.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ranking/ranking.module.ts ***!
  \*******************************************/
/*! exports provided: RankingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingPageModule", function() { return RankingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ranking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ranking-routing.module */ "./src/app/ranking/ranking-routing.module.ts");
/* harmony import */ var _ranking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ranking.page */ "./src/app/ranking/ranking.page.ts");







let RankingPageModule = class RankingPageModule {
};
RankingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ranking_routing_module__WEBPACK_IMPORTED_MODULE_5__["RankingPageRoutingModule"]
        ],
        declarations: [_ranking_page__WEBPACK_IMPORTED_MODULE_6__["RankingPage"]]
    })
], RankingPageModule);



/***/ }),

/***/ "./src/app/ranking/ranking.page.scss":
/*!*******************************************!*\
  !*** ./src/app/ranking/ranking.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list {\n  overflow-y: scroll !important;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.imgItem {\n  align-items: center;\n  align-content: center;\n  align-self: center;\n  text-align: center;\n  width: 20%;\n  height: 20%;\n  margin-left: 40%;\n  margin-right: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFua2luZy9DOlxcVXNlcnNcXGRpZWdvXFxEZXNrdG9wXFx3ZWItZ3VlcnJpbGxhLWFwcFxcd2ViR3VlcnJpbGxhQXBwL3NyY1xcYXBwXFxyYW5raW5nXFxyYW5raW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmFua2luZy9yYW5raW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDZCQUFBO0FDQUo7O0FESUE7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNGSjs7QURLRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNKSjs7QURPRTtFQUNFLHFCQUFBO0FDSko7O0FET0U7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcmFua2luZy9yYW5raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IFxyXG57XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcclxufTtcclxuXHJcblxyXG4jY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIFxyXG4gICAgY29sb3I6ICM4YzhjOGM7XHJcbiAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWdJdGVte1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwJTtcclxuICBcclxuICB9XHJcbiIsImlvbi1saXN0IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaW1nSXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMjAlO1xuICBtYXJnaW4tbGVmdDogNDAlO1xuICBtYXJnaW4tcmlnaHQ6IDQwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ranking/ranking.page.ts":
/*!*****************************************!*\
  !*** ./src/app/ranking/ranking.page.ts ***!
  \*****************************************/
/*! exports provided: RankingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingPage", function() { return RankingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let RankingPage = class RankingPage {
    constructor(menu, router) {
        this.menu = menu;
        this.router = router;
        this.items = [];
        this.data = [];
        this.counter = 0;
        this.fillData();
        this.addFirst();
    }
    ngOnInit() {
    }
    openEnd() {
        this.pageTop.scrollToTop();
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
    fillData() {
        for (let i = 1; i <= 100; i++) {
            this.data.push(i);
        }
    }
    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();
            console.log('Done1 :' + this.items.length);
            console.log('Done2 :' + this.data.length);
            if (this.items.length == this.data.length) {
                event.target.disabled = true;
            }
            else {
                this.addMoreItems();
            }
        }, 1000);
    }
    addMoreItems() {
        if (this.items.length + 10 > this.data.length) {
            for (let i = this.items.length + 1; i <= this.data.length; i++) {
                this.items.push(this.data[this.counter]);
                this.counter++;
            }
        }
        else {
            for (let i = 1; i <= 10; i++) {
                this.items.push(this.data[this.counter]);
                this.counter++;
            }
        }
    }
    addFirst() {
        for (let i = 0; i < 25; i++) {
            this.items.push(this.data[this.counter]);
            this.counter++;
        }
    }
    refresh() {
        this.items = [];
        this.data = [];
        this.counter = 0;
        this.fillData();
        this.addFirst();
    }
};
RankingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], RankingPage.prototype, "infiniteScroll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pageTop')
], RankingPage.prototype, "pageTop", void 0);
RankingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ranking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ranking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ranking/ranking.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ranking.page.scss */ "./src/app/ranking/ranking.page.scss")).default]
    })
], RankingPage);



/***/ })

}]);
//# sourceMappingURL=ranking-ranking-module-es2015.js.map