function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n \n<ion-router-outlet id=\"main\"></ion-router-outlet>\n<ion-header>\n  <ion-toolbar>\n    <ion-button (click)=\"openEnd()\">\n      <ion-icon  name=\"menu\"></ion-icon>\n    </ion-button>  \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<ion-menu side=\"start\"  contentId=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"#e20d0d\">\n      <ion-title style=\"color:#e20d0d;\">Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item (click)=\"goToMenu()\">Profile</ion-item>\n      <ion-item (click)=\"goToRanking()\">Ranking</ion-item>\n      <ion-item (click)=\"goToSettings()\">Settings</ion-item>\n      <ion-item (click)=\"goOut()\">Logout</ion-item>\n      <ion-item (click)=\"openEnd()\">Close</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<h1 class=\"title\">Diego</h1>\n\n<div class=\"content2\">\n<ion-row style=\"outline-color:white\" >\n    <ion-col><ion-label>Oil</ion-label></ion-col>\n    <ion-col><ion-label>3</ion-label></ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col><ion-label>Money</ion-label></ion-col>\n  <ion-col><ion-label>3</ion-label></ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col><ion-label>People</ion-label></ion-col>\n  <ion-col><ion-label>3</ion-label></ion-col>\n</ion-row>\n\n</div>\n<div class=\"content3\">\n  <ion-row>\n    <ion-col><ion-label>{{this.actual}}</ion-label></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col><ion-button (click)=\"showDefense()\">Defense</ion-button></ion-col>\n    <ion-col><ion-button (click)=\"showOffense()\">Offense</ion-button></ion-col>\n  </ion-row>\n\n  <div *ngIf=\"this.offense\" class=\"content4\">\n    <ion-row style=\"background-color:#1f1f1f ; color:rgba(245, 245, 245, 0.973)\">\n      <ion-col><ion-label>Units</ion-label></ion-col>\n      <ion-col><ion-label>Quantity</ion-label></ion-col>\n      <ion-col><ion-label>Buy</ion-label></ion-col>\n      </ion-row>\n    <br>\n    <ion-row>\n    <ion-col><ion-label>Assault</ion-label></ion-col>\n    <ion-col><ion-label>3</ion-label></ion-col>\n    <ion-col><ion-button >+</ion-button></ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col><ion-label>Tanks</ion-label></ion-col>\n      <ion-col><ion-label>3</ion-label></ion-col>\n      <ion-col><ion-button class=\"button\">+</ion-button></ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n        <ion-col><ion-label>Engineer</ion-label></ion-col>\n        <ion-col><ion-label>3</ion-label></ion-col>\n        <ion-col><ion-button >+</ion-button></ion-col>\n    </ion-row>\n   \n  </div>\n  <div *ngIf=\"this.defense\" class=\"content4\">\n    <ion-row style=\"background-color:#1f1f1f ; color:rgba(245, 245, 245, 0.973)\">\n      <ion-col><ion-label>Units</ion-label></ion-col>\n      <ion-col><ion-label>Quantity</ion-label></ion-col>\n      <ion-col><ion-label>Buy</ion-label></ion-col>\n      </ion-row>\n    <br>\n    <ion-row>\n      <ion-col><ion-label>Bunkers</ion-label></ion-col>\n      <ion-col><ion-label>3</ion-label></ion-col>\n      <ion-col><ion-button >+</ion-button></ion-col>\n    </ion-row>\n   \n  </div>\n</div>\n\n</ion-content>\n\n\n";
    /***/
  },

  /***/
  "./src/app/menu/menu-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/menu/menu-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: MenuPageRoutingModule */

  /***/
  function srcAppMenuMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function () {
      return MenuPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/menu/menu.page.ts");

    var routes = [{
      path: '',
      component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
    }];

    var MenuPageRoutingModule = function MenuPageRoutingModule() {
      _classCallCheck(this, MenuPageRoutingModule);
    };

    MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MenuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/menu/menu.module.ts":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.module.ts ***!
    \*************************************/

  /*! exports provided: MenuPageModule */

  /***/
  function srcAppMenuMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
      return MenuPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./menu-routing.module */
    "./src/app/menu/menu-routing.module.ts");
    /* harmony import */


    var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menu.page */
    "./src/app/menu/menu.page.ts");

    var MenuPageModule = function MenuPageModule() {
      _classCallCheck(this, MenuPageModule);
    };

    MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]],
      declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })], MenuPageModule);
    /***/
  },

  /***/
  "./src/app/menu/menu.page.scss":
  /*!*************************************!*\
    !*** ./src/app/menu/menu.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-custom-menu {\n  --width: 500px;\n}\n\n.title {\n  text-align: center;\n  margin-top: 2%;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXGRpZWdvXFxEZXNrdG9wXFx3ZWItZ3VlcnJpbGxhLWFwcFxcd2ViR3VlcnJpbGxhQXBwL3NyY1xcYXBwXFxtZW51XFxtZW51LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVudS9tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFRTtFQUVFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktY3VzdG9tLW1lbnUge1xyXG4gICAgLS13aWR0aDogNTAwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGV7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iLCIubXktY3VzdG9tLW1lbnUge1xuICAtLXdpZHRoOiA1MDBweDtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/menu/menu.page.ts":
  /*!***********************************!*\
    !*** ./src/app/menu/menu.page.ts ***!
    \***********************************/

  /*! exports provided: MenuPage */

  /***/
  function srcAppMenuMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
      return MenuPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MenuPage = /*#__PURE__*/function () {
      function MenuPage(menu, router) {
        _classCallCheck(this, MenuPage);

        this.menu = menu;
        this.router = router;
        this.offense = true;
        this.defense = false;
        this.actual = 'Offense';
      }

      _createClass(MenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.offense = true;
        }
      }, {
        key: "showOffense",
        value: function showOffense() {
          this.defense = false;
          this.offense = true;
          this.actual = 'Offense';
        }
      }, {
        key: "showDefense",
        value: function showDefense() {
          this.offense = false;
          this.defense = true;
          this.actual = 'Defense';
        }
      }, {
        key: "openEnd",
        value: function openEnd() {
          this.menu.close('start');
          this.menu.enable(true, 'start');
          this.menu.open('start');
          this.menu.close('start');
        }
      }, {
        key: "goToRanking",
        value: function goToRanking() {
          this.router.navigate(['/ranking']);
        }
      }, {
        key: "goToSettings",
        value: function goToSettings() {
          this.router.navigate(['/connect']);
        }
      }, {
        key: "goToMenu",
        value: function goToMenu() {
          this.router.navigate(['/menu']);
        }
      }, {
        key: "goOut",
        value: function goOut() {
          this.router.navigate(['/home']);
        }
      }]);

      return MenuPage;
    }();

    MenuPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./menu.page.scss */
      "./src/app/menu/menu.page.scss"))["default"]]
    })], MenuPage);
    /***/
  }
}]);
//# sourceMappingURL=menu-menu-module-es5.js.map