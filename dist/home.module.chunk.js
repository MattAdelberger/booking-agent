webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/routes/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/routes/home/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
];
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/routes/home/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\r\n    <div class=\"jumbotron\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-4\">\r\n                <div class=\"text-center\">\r\n                    <img alt=\"Angular\" class=\"img-responsive center-block home-logo\" src=\"assets/img/angular.svg\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-9 col-md-8 home-text\">\r\n                <h1>Angle</h1>\r\n                <p>Bootstrap Admin Template + <strong>Angular5</strong>\r\n                    <br> <small>One framework. Mobile & desktop.</small>\r\n                </p>\r\n                <p><a class=\"btn btn-primary btn-lg\" href=\"https://angular.io/\" target=\"_blank\">Learn more</a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h3>Angular-cli</h3></div>\r\n                <div class=\"panel-body\">\r\n                    A Webpack powered command line interface with tons of utilities. Serve and build your project with a single command.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h3>Router</h3></div>\r\n                <div class=\"panel-body\">\r\n                    Powerful and modern routes definitions. Easily declare routes and nested routes with components association.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h3>Generators</h3></div>\r\n                <div class=\"panel-body\">\r\n                    Angular-CLI tool provides generators to create components, services, directives and pipe from the command line.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h3>Modularized</h3></div>\r\n                <div class=\"panel-body\">\r\n                    This project has been carefully designed to provide modules for Core, Layout, Shared and Routed components.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h3>Environments</h3></div>\r\n                <div class=\"panel-body\">\r\n                    Ready to work with multiple environments, from first stage development through test and production.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"panel b\">\r\n                <div class=\"panel-heading\">\r\n                    <h3>Style Guide</h3></div>\r\n                <div class=\"panel-body\">\r\n                    Better practices for Code organization and Project structure based on the official Angular style guide.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/home/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n.home-container {\n  margin: 0 auto;\n  max-width: 970px; }\n  .home-container .home-logo {\n    width: 240px; }\n  @media only screen and (max-width: 768px) {\n    .home-container .home-text {\n      text-align: center; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/routes/home/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/routes/home/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/routes/home/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map