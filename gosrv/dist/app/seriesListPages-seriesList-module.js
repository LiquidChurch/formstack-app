(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["seriesListPages-seriesList-module"],{

/***/ "2nez":
/*!****************************************************!*\
  !*** ./src/app/seriesListPages/seriesList.page.ts ***!
  \****************************************************/
/*! exports provided: SeriesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesListPage", function() { return SeriesListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller */ "bgAL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function SeriesListPage_div_0_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-action", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const series_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/series/" + series_r6.uri);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", series_r6.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SeriesListPage_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Liquid Church Group Guides ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SeriesListPage_div_0_div_2_div_7_Template, 5, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r4 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.headerImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r4);
} }
function SeriesListPage_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SeriesListPage_div_0_div_2_Template, 8, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.seriesList));
} }
function SeriesListPage_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SeriesListPage {
    constructor(seriesListController) {
        this.seriesListController = seriesListController;
        this.hasLoaded = false;
    }
    ngOnInit() {
        this.seriesListController.loadSeriesList().then(value => { setTimeout(() => { this.hasLoaded = true; }, 0); });
        this.seriesList = this.seriesListController.getSeriesList();
        this.headerImage = "https://lqd.imgix.net/website-heros/groupguides-img0-12.jpg?ar=16%3A9&fit=crop&w=828&auto=format";
        console.log(this.seriesList);
    }
}
SeriesListPage.ɵfac = function SeriesListPage_Factory(t) { return new (t || SeriesListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_controller__WEBPACK_IMPORTED_MODULE_1__["SeriesListController"])); };
SeriesListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeriesListPage, selectors: [["ng-component"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["pageLoading", ""], [4, "ngIf"], [1, "header-img", 3, "src"], [1, "form-body"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "guide-img", 3, "src"]], template: function SeriesListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SeriesListPage_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SeriesListPage_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasLoaded)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".header-img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left:-24px;\n  border-radius:12px;\n}\n\n.guide-img[_ngcontent-%COMP%] {\n  height: 206px;\n  object-fit: scale-down;\n  width: 366px;\n  vertical-align: bottom;\n  margin-bottom: -26px;\n  border-radius: 12px;\n}\n\n.guide-img[_ngcontent-%COMP%]:hover{\n  filter: brightness(0.7);\n  border: #FFF;\n  border-width: 3px;\n  border-style: solid;\n  height: 212px;\n  width: 372px;\n  margin-left: -3px;\n  margin-right: -3px;\n  margin-top: -3px;\n  margin-bottom: -29px;\n  border-radius: 16px;  \n}\n\n.guide-text[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.guide-body[_ngcontent-%COMP%] {\n  max-width: 90vw;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -26px;\n}\n\n.form-body[_ngcontent-%COMP%] {\n  display:flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.form-card[_ngcontent-%COMP%] {\n  flex: 1 0 calc(50% - 1rem);\n  margin: 0 0rem;\n  text-align:center;\n}\n\n.note-card[_ngcontent-%COMP%] {\n  flex: 1 0 calc(50% - 1rem);\n  margin: 0 0;\n  width: 828px;\n}\n\n.guide-link[_ngcontent-%COMP%] {\n  color: #009DD1;\n  cursor: pointer;\n  border-radius: 1em;\n  font-weight:400;\n}\n\n.guide-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0,0,0,0.1)\n}\n\n@media (max-width: 899px) {\n  .guide-img[_ngcontent-%COMP%] {\n    width: 366px;\n    margin-bottom: -30px;\n  }\n  \n  .guide-img[_ngcontent-%COMP%]:hover {\n    margin-bottom:-33px;\n  }\n  \n  .note-card[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n}\n\n@media (max-width: 766px) {\n  .header-img[_ngcontent-%COMP%] {\n    margin-right:-40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VyaWVzTGlzdFBhZ2VzL3Nlcmllc0xpc3QuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZXJpZXNMaXN0UGFnZXMvc2VyaWVzTGlzdC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDotMjRweDtcbiAgYm9yZGVyLXJhZGl1czoxMnB4O1xufVxuXG4uZ3VpZGUtaW1nIHtcbiAgaGVpZ2h0OiAyMDZweDtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgd2lkdGg6IDM2NnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBtYXJnaW4tYm90dG9tOiAtMjZweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLmd1aWRlLWltZzpob3ZlcntcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNyk7XG4gIGJvcmRlcjogI0ZGRjtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMjEycHg7XG4gIHdpZHRoOiAzNzJweDtcbiAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gIG1hcmdpbi1yaWdodDogLTNweDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbiAgbWFyZ2luLWJvdHRvbTogLTI5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7ICBcbn1cblxuLmd1aWRlLXRleHQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uZ3VpZGUtYm9keSB7XG4gIG1heC13aWR0aDogOTB2dztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTI2cHg7XG59XG5cbi5mb3JtLWJvZHkge1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3JtLWNhcmQge1xuICBmbGV4OiAxIDAgY2FsYyg1MCUgLSAxcmVtKTtcbiAgbWFyZ2luOiAwIDByZW07XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4ubm90ZS1jYXJkIHtcbiAgZmxleDogMSAwIGNhbGMoNTAlIC0gMXJlbSk7XG4gIG1hcmdpbjogMCAwO1xuICB3aWR0aDogODI4cHg7XG59XG5cbi5ndWlkZS1saW5rIHtcbiAgY29sb3I6ICMwMDlERDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBmb250LXdlaWdodDo0MDA7XG59XG5cbi5ndWlkZS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpXG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg5OXB4KSB7XG4gIC5ndWlkZS1pbWcge1xuICAgIHdpZHRoOiAzNjZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbiAgfVxuICBcbiAgLmd1aWRlLWltZzpob3ZlciB7XG4gICAgbWFyZ2luLWJvdHRvbTotMzNweDtcbiAgfVxuICBcbiAgLm5vdGUtY2FyZCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2NnB4KSB7XG4gIC5oZWFkZXItaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6LTQwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeriesListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './seriesList.page.html',
                styleUrls: ['./seriesList.css']
            }]
    }], function () { return [{ type: _controller__WEBPACK_IMPORTED_MODULE_1__["SeriesListController"] }]; }, null); })();


/***/ }),

/***/ "idvj":
/*!******************************************************!*\
  !*** ./src/app/seriesListPages/seriesList.module.ts ***!
  \******************************************************/
/*! exports provided: SeriesListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesListModule", function() { return SeriesListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _seriesList_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seriesList.routes */ "zAvx");
/* harmony import */ var _seriesList_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seriesList.page */ "2nez");








class SeriesListModule {
}
SeriesListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SeriesListModule });
SeriesListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SeriesListModule_Factory(t) { return new (t || SeriesListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_seriesList_routes__WEBPACK_IMPORTED_MODULE_4__["SeriesListRoutes"]),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SeriesListModule, { declarations: [_seriesList_page__WEBPACK_IMPORTED_MODULE_5__["SeriesListPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeriesListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _seriesList_page__WEBPACK_IMPORTED_MODULE_5__["SeriesListPage"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_seriesList_routes__WEBPACK_IMPORTED_MODULE_4__["SeriesListRoutes"]),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsModule"],
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "zAvx":
/*!******************************************************!*\
  !*** ./src/app/seriesListPages/seriesList.routes.ts ***!
  \******************************************************/
/*! exports provided: SeriesListRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesListRoutes", function() { return SeriesListRoutes; });
/* harmony import */ var _seriesList_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seriesList.page */ "2nez");

const SeriesListRoutes = [
    { path: '', component: _seriesList_page__WEBPACK_IMPORTED_MODULE_0__["SeriesListPage"] }
];


/***/ })

}]);
//# sourceMappingURL=seriesListPages-seriesList-module.js.map