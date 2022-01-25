(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+G0P":
/*!**************************************!*\
  !*** ./src/app/pipes/pipe.module.ts ***!
  \**************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "pFkP");



class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [___WEBPACK_IMPORTED_MODULE_1__["SafeHtmlPipe"],
        ___WEBPACK_IMPORTED_MODULE_1__["SafeUrlPipe"],
        ___WEBPACK_IMPORTED_MODULE_1__["BibleRefPipe"]], exports: [___WEBPACK_IMPORTED_MODULE_1__["SafeHtmlPipe"],
        ___WEBPACK_IMPORTED_MODULE_1__["SafeUrlPipe"],
        ___WEBPACK_IMPORTED_MODULE_1__["BibleRefPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                declarations: [
                    ___WEBPACK_IMPORTED_MODULE_1__["SafeHtmlPipe"],
                    ___WEBPACK_IMPORTED_MODULE_1__["SafeUrlPipe"],
                    ___WEBPACK_IMPORTED_MODULE_1__["BibleRefPipe"],
                ],
                exports: [
                    ___WEBPACK_IMPORTED_MODULE_1__["SafeHtmlPipe"],
                    ___WEBPACK_IMPORTED_MODULE_1__["SafeUrlPipe"],
                    ___WEBPACK_IMPORTED_MODULE_1__["BibleRefPipe"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cabox/workspace/formstackApp/ngapp/src/main.ts */"zUnb");


/***/ }),

/***/ "3Y/1":
/*!**************************************************!*\
  !*** ./src/app/controller/session.controller.ts ***!
  \**************************************************/
/*! exports provided: SessionController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionController", function() { return SessionController; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql */ "R+F0");




class SessionController {
    constructor(getSessionGQL) {
        this.getSessionGQL = getSessionGQL;
    }
    callSession() {
        return new Promise(resolve => {
            this.session = this.getSessionGQL.watch()
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.data.sessionDetail));
            this.session.subscribe(() => {
                resolve("success");
            });
        });
    }
    getSession() {
        return this.session;
    }
}
SessionController.ɵfac = function SessionController_Factory(t) { return new (t || SessionController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_2__["GetSessionGQL"])); };
SessionController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionController, factory: SessionController.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _graphql__WEBPACK_IMPORTED_MODULE_2__["GetSessionGQL"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DEmI":
/*!************************************************!*\
  !*** ./src/app/graphql/seriesField.graphql.ts ***!
  \************************************************/
/*! exports provided: GetSeriesByUriGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSeriesByUriGQL", function() { return GetSeriesByUriGQL; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);




class GetSeriesByUriGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Query"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a `
    query seriesByUri($seriesUri: String!) {
	    seriesByUri(uri: $seriesUri) {
        id
        name
        uri
        imageUrl
        year
        forms {
          id
          type
          formstackId
          name
          uri
          imageUrl
          seriesUri
          part
        }
      }
    }`;
    }
}
GetSeriesByUriGQL.ɵfac = function GetSeriesByUriGQL_Factory(t) { return ɵGetSeriesByUriGQL_BaseFactory(t || GetSeriesByUriGQL); };
GetSeriesByUriGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetSeriesByUriGQL, factory: GetSeriesByUriGQL.ɵfac, providedIn: 'root' });
const ɵGetSeriesByUriGQL_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GetSeriesByUriGQL);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetSeriesByUriGQL, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "FMP8":
/*!****************************************!*\
  !*** ./src/app/pipes/bibleRef.pipe.ts ***!
  \****************************************/
/*! exports provided: BibleRefPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibleRefPipe", function() { return BibleRefPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class BibleRefPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        var test = value.replace(/(?:\d\s*)?[A-Z]?[a-z]+\s*\d+(?:[:-]\d+)(,\d+)*(?:\s*-\s*\d+)?/gi, function (passage) {
            let book = passage.match(/(?:\d\s*)?[A-Z]?[a-z]+/g);
            if (book == null || book[0].length <= 3) {
                return passage;
            }
            let urlBook = book[0].replace(/\s/g, "").substring(0, 3).toUpperCase();
            switch (urlBook) {
                case "EZE":
                    urlBook = "EZK";
                    break;
                case "MAR":
                    urlBook = "MRK";
                    break;
                case "NAH":
                    urlBook = "NAM";
                    break;
                case "JOE":
                    urlBook = "JOL";
                    break;
                case "JOH":
                    urlBook = "JHN";
                    break;
                case "1JO":
                    urlBook = "1JN";
                    break;
                case "2JO":
                    urlBook = "2JN";
                    break;
                case "3JO":
                    urlBook = "3JN";
                    break;
                case "JAM":
                    urlBook = "JAS";
                    break;
                case "JUD":
                    urlBook = "JDG";
                    break;
                case "SOL":
                    urlBook = "SNG";
                    break;
                case "PHI":
                    urlBook = "PHP";
                    break;
                case "PHI":
                    urlBook = "PHM";
                    break;
                default:
                    break;
            }
            let verse = passage.match(/\d+(?:[:-]\d+)(,\d+)*(?:\s*-\s*\d+)?/g);
            if (verse == null) {
                return passage;
            }
            let urlVerse = verse[0].replace(/[:]/g, ".");
            return '<a href="https://bible.com/bible/111/' + urlBook + '.' + urlVerse + '" >' + passage + '</a>';
        });
        return test;
    }
}
BibleRefPipe.ɵfac = function BibleRefPipe_Factory(t) { return new (t || BibleRefPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
BibleRefPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "bibleRef", type: BibleRefPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BibleRefPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'bibleRef'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "FQL7":
/*!***********************************************!*\
  !*** ./src/app/graphql/entryField.graphql.ts ***!
  \***********************************************/
/*! exports provided: PostEntryGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEntryGQL", function() { return PostEntryGQL; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);




class PostEntryGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Query"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a `
    mutation postEntry($input: EntryInput!) {
      entrySave(input: $input) {
        fieldId
        entry
      }
    }`;
    }
}
PostEntryGQL.ɵfac = function PostEntryGQL_Factory(t) { return ɵPostEntryGQL_BaseFactory(t || PostEntryGQL); };
PostEntryGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostEntryGQL, factory: PostEntryGQL.ɵfac, providedIn: 'root' });
const ɵPostEntryGQL_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PostEntryGQL);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostEntryGQL, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "R+F0":
/*!**********************************!*\
  !*** ./src/app/graphql/index.ts ***!
  \**********************************/
/*! exports provided: GetFieldDetailGQL, GetSessionGQL, PostEntryGQL, GetSeriesByUriGQL, GetFormByUriGQL, GetSeriesListGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fieldField_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fieldField.graphql */ "a8JA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFieldDetailGQL", function() { return _fieldField_graphql__WEBPACK_IMPORTED_MODULE_0__["GetFieldDetailGQL"]; });

/* harmony import */ var _sessionUser_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionUser.graphql */ "g0ij");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSessionGQL", function() { return _sessionUser_graphql__WEBPACK_IMPORTED_MODULE_1__["GetSessionGQL"]; });

/* harmony import */ var _entryField_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entryField.graphql */ "FQL7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostEntryGQL", function() { return _entryField_graphql__WEBPACK_IMPORTED_MODULE_2__["PostEntryGQL"]; });

/* harmony import */ var _seriesField_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seriesField.graphql */ "DEmI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSeriesByUriGQL", function() { return _seriesField_graphql__WEBPACK_IMPORTED_MODULE_3__["GetSeriesByUriGQL"]; });

/* harmony import */ var _formField_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formField.graphql */ "THFF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFormByUriGQL", function() { return _formField_graphql__WEBPACK_IMPORTED_MODULE_4__["GetFormByUriGQL"]; });

/* harmony import */ var _seriesListField_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seriesListField.graphql */ "xgsT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSeriesListGQL", function() { return _seriesListField_graphql__WEBPACK_IMPORTED_MODULE_5__["GetSeriesListGQL"]; });









/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'ngapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 0, consts: [["center", ""], ["fixed", ""], [2, "margin-bottom", "0px", "border", "none", "width", "100%"], [2, "padding", "0px", "overflow", "hidden"], ["size", "small", "fullWidth", "", 2, "background-color", "#28343E"], [2, "height", "30px", "padding-left", "0px", "justify-content", "flex-start"], ["href", "https://liquidchurch.com"], [1, "header-icon"], [1, "header-logo"], [2, "border", "none", "padding-right", "5px", "justify-content", "flex-end"], [1, "header-title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nb-action", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Liquid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Church ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nb-action", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Group Guides");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbActionsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbActionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["h1 {\n  font-size: 1.75rem;\n}\n\n.header-icon[_ngcontent-%COMP%] {\n  background: url(\"/assets/liquid-logo.png\") transparent 5px 50% no-repeat;\n  background-size: 30px 30px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 58px;\n  height: 30px;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-left: -20px;\n  font-size: 2em;\n  font-weight: 400;\n  color: #14A7E0;\n  \n  font-family: \"Lato\", sans-serif;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-left: -20px;\n  font-size: 2em;\n  font-weight: 400;\n  color: #14A7E0;\n  \n  font-family: \"Lato\", sans-serif;\n  white-space: nowrap;\n}\n\n.header-name[_ngcontent-%COMP%] {\n  display: contents;\n  vertical-align: middle;\n  \n  font-family: \"Roboto\", sans-serif;\n}\n\n@media (max-width: 40rem) {\n  .header-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 766px) {\n  .header-icon[_ngcontent-%COMP%] {\n    margin-left: -6px;\n  }\n}\n\n@media (max-width: 459px) {\n  .header-icon[_ngcontent-%COMP%] {\n    width: 36px;\n  }\n\n  .header-logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.nb-layout-header[_ngcontent-%COMP%]   nav.fixed[_ngcontent-%COMP%] {\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Esa0JBQUE7QUFBRjs7QUFJQTtFQUNFLHdFQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7RUFDQSwrQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxREFBQTtFQUNBLGlDQUFBO0FBRkY7O0FBS0E7RUFDRTtJQUNFLGFBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0U7SUFDRSxpQkFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLFdBQUE7RUFKRjs7RUFNQTtJQUNFLGFBQUE7RUFIRjtBQUNGOztBQU1tQjtFQUNqQixZQUFBO0FBSkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBoMSB7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cbn1cblxuLmhlYWRlci1pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2xpcXVpZC1sb2dvLnBuZycpIHRyYW5zcGFyZW50IDVweCA1MCUgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogNThweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uaGVhZGVyLWxvZ28ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0Oi0yMHB4O1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMxNEE3RTA7XG4gIC8qIFVzZSB0aGUgUm9ib3RvIGZvbnQgdGhhdCBpcyBsb2FkZWQgaW4gdGhlIDxoZWFkPiAqL1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDotMjBweDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMTRBN0UwO1xuICAvKiBVc2UgdGhlIFJvYm90byBmb250IHRoYXQgaXMgbG9hZGVkIGluIHRoZSA8aGVhZD4gKi9cbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuXG4uaGVhZGVyLW5hbWUge1xuICBkaXNwbGF5OiBjb250ZW50cztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLyogVXNlIHRoZSBSb2JvdG8gZm9udCB0aGF0IGlzIGxvYWRlZCBpbiB0aGUgPGhlYWQ+ICovXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQwcmVtKSB7XG4gIC5oZWFkZXItbmFtZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY2cHgpIHtcbiAgLmhlYWRlci1pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDU5cHgpIHtcbiAgLmhlYWRlci1pY29uIHtcbiAgICB3aWR0aDogMzZweDtcbiAgfVxuICAuaGVhZGVyLWxvZ28ge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxufVxuXG4ubmItbGF5b3V0LWhlYWRlciB7bmF2LmZpeGVkIHtcbiAgaGVpZ2h0OjE1cHg7XG59fVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "THFF":
/*!**********************************************!*\
  !*** ./src/app/graphql/formField.graphql.ts ***!
  \**********************************************/
/*! exports provided: GetFormByUriGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFormByUriGQL", function() { return GetFormByUriGQL; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);




class GetFormByUriGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Query"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a `
    query formByUri($formUri: String!) {
	    formByUri(uri: $formUri) {
        id
        type
        formstackId
        name
        uri
        imageUrl
        seriesUri
        part
      }
    }`;
    }
}
GetFormByUriGQL.ɵfac = function GetFormByUriGQL_Factory(t) { return ɵGetFormByUriGQL_BaseFactory(t || GetFormByUriGQL); };
GetFormByUriGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetFormByUriGQL, factory: GetFormByUriGQL.ɵfac, providedIn: 'root' });
const ɵGetFormByUriGQL_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GetFormByUriGQL);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetFormByUriGQL, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "aceb");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/eva-icons */ "tR1z");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-angular/http */ "E21e");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controller */ "bgAL");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/pipe.module */ "+G0P");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _controller__WEBPACK_IMPORTED_MODULE_12__["FieldsController"],
        _controller__WEBPACK_IMPORTED_MODULE_12__["SessionController"],
        _controller__WEBPACK_IMPORTED_MODULE_12__["SeriesController"],
        _controller__WEBPACK_IMPORTED_MODULE_12__["SeriesListController"],
        _controller__WEBPACK_IMPORTED_MODULE_12__["FormController"],
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_7__["APOLLO_OPTIONS"],
            useFactory(httpLink) {
                return {
                    cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_9__["InMemoryCache"](),
                    link: httpLink.create({
                        uri: '../query',
                    }),
                };
            },
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpLink"]],
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsModule"],
            _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsModule"],
        _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_4__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsModule"],
                    _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_13__["PipesModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"],
                ],
                providers: [
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
                    _controller__WEBPACK_IMPORTED_MODULE_12__["FieldsController"],
                    _controller__WEBPACK_IMPORTED_MODULE_12__["SessionController"],
                    _controller__WEBPACK_IMPORTED_MODULE_12__["SeriesController"],
                    _controller__WEBPACK_IMPORTED_MODULE_12__["SeriesListController"],
                    _controller__WEBPACK_IMPORTED_MODULE_12__["FormController"],
                    {
                        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_7__["APOLLO_OPTIONS"],
                        useFactory(httpLink) {
                            return {
                                cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_9__["InMemoryCache"](),
                                link: httpLink.create({
                                    uri: '../query',
                                }),
                            };
                        },
                        deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpLink"]],
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a65m":
/*!***************************************!*\
  !*** ./src/app/pipes/safeUrl.pipe.ts ***!
  \***************************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dompurify */ "wMS7");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        const sanitizedContent = dompurify__WEBPACK_IMPORTED_MODULE_1___default.a.sanitize(value);
        return this.sanitizer.bypassSecurityTrustResourceUrl(sanitizedContent);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
SafeUrlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeUrl", type: SafeUrlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeUrlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeUrl'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "a8JA":
/*!***********************************************!*\
  !*** ./src/app/graphql/fieldField.graphql.ts ***!
  \***********************************************/
/*! exports provided: GetFieldDetailGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFieldDetailGQL", function() { return GetFieldDetailGQL; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);




class GetFieldDetailGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Query"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a `
    query getFields($formId: String!) {
	    fieldsByFormstackID(formstackID: $formId) {
        fieldId
        label
        description
        name
        type
        sectionText
        sort
        required
        defaultValue
        isLeader
        entry {
          fieldId
          entry
        }
      }
    }`;
    }
}
GetFieldDetailGQL.ɵfac = function GetFieldDetailGQL_Factory(t) { return ɵGetFieldDetailGQL_BaseFactory(t || GetFieldDetailGQL); };
GetFieldDetailGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetFieldDetailGQL, factory: GetFieldDetailGQL.ɵfac, providedIn: 'root' });
const ɵGetFieldDetailGQL_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GetFieldDetailGQL);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetFieldDetailGQL, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "bgAL":
/*!*************************************!*\
  !*** ./src/app/controller/index.ts ***!
  \*************************************/
/*! exports provided: FieldsController, SessionController, SeriesController, FormController, SeriesListController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fields_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields.controller */ "iuot");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldsController", function() { return _fields_controller__WEBPACK_IMPORTED_MODULE_0__["FieldsController"]; });

/* harmony import */ var _session_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session.controller */ "3Y/1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionController", function() { return _session_controller__WEBPACK_IMPORTED_MODULE_1__["SessionController"]; });

/* harmony import */ var _series_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./series.controller */ "nhUJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeriesController", function() { return _series_controller__WEBPACK_IMPORTED_MODULE_2__["SeriesController"]; });

/* harmony import */ var _form_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.controller */ "x9hK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormController", function() { return _form_controller__WEBPACK_IMPORTED_MODULE_3__["FormController"]; });

/* harmony import */ var _seriesList_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./seriesList.controller */ "rx3R");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeriesListController", function() { return _seriesList_controller__WEBPACK_IMPORTED_MODULE_4__["SeriesListController"]; });








/***/ }),

/***/ "g0ij":
/*!************************************************!*\
  !*** ./src/app/graphql/sessionUser.graphql.ts ***!
  \************************************************/
/*! exports provided: GetSessionGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSessionGQL", function() { return GetSessionGQL; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);




class GetSessionGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Query"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a `
    query GetSession {
      sessionDetail {
        sessionToken
        status
        userID
        expiration
      }
    }`;
    }
}
GetSessionGQL.ɵfac = function GetSessionGQL_Factory(t) { return ɵGetSessionGQL_BaseFactory(t || GetSessionGQL); };
GetSessionGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetSessionGQL, factory: GetSessionGQL.ɵfac, providedIn: 'root' });
const ɵGetSessionGQL_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GetSessionGQL);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetSessionGQL, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "iuot":
/*!*************************************************!*\
  !*** ./src/app/controller/fields.controller.ts ***!
  \*************************************************/
/*! exports provided: FieldsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsController", function() { return FieldsController; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql */ "R+F0");





class FieldsController {
    constructor(apollo, getFieldDetailGQL, postEntryGQL) {
        this.apollo = apollo;
        this.getFieldDetailGQL = getFieldDetailGQL;
        this.postEntryGQL = postEntryGQL;
    }
    getFormFields(formId) {
        this.formId = formId;
        return new Promise(resolve => {
            this.fields = this.getFieldDetailGQL.watch({ formId: formId })
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.data.fieldsByFormstackID));
            this.fields.subscribe(() => {
                resolve("success");
            });
        });
    }
    getFields() {
        return this.fields;
    }
    updateEntry(entry) {
        return new Promise(resolve => {
            this.apollo
                .mutate({
                mutation: this.postEntryGQL.document,
                variables: { input: entry },
                update: (store, { data: { entrySave } }) => {
                    let data;
                    data = store.readQuery({ query: this.getFieldDetailGQL.document, variables: { formId: this.formId } });
                    var j = data.fieldsByFormstackID.map(function (e) { return e.fieldId; }).indexOf(entrySave.fieldId);
                    let newData;
                    newData = JSON.parse(JSON.stringify(data));
                    newData.getForm[j].entry = entrySave;
                    store.writeQuery({ query: this.getFieldDetailGQL.document, data: newData });
                }
            })
                .subscribe(() => {
                resolve("success");
            });
        });
    }
}
FieldsController.ɵfac = function FieldsController_Factory(t) { return new (t || FieldsController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_3__["GetFieldDetailGQL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_3__["PostEntryGQL"])); };
FieldsController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FieldsController, factory: FieldsController.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldsController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }, { type: _graphql__WEBPACK_IMPORTED_MODULE_3__["GetFieldDetailGQL"] }, { type: _graphql__WEBPACK_IMPORTED_MODULE_3__["PostEntryGQL"] }]; }, null); })();


/***/ }),

/***/ "nhUJ":
/*!*************************************************!*\
  !*** ./src/app/controller/series.controller.ts ***!
  \*************************************************/
/*! exports provided: SeriesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesController", function() { return SeriesController; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql */ "R+F0");





class SeriesController {
    constructor(apollo, getSeriesByUriGQL) {
        this.apollo = apollo;
        this.getSeriesByUriGQL = getSeriesByUriGQL;
    }
    getSeriesByUri(uri) {
        this.seriesUri = uri;
        return new Promise(resolve => {
            this.series = this.getSeriesByUriGQL.watch({ seriesUri: this.seriesUri })
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.data.seriesByUri));
            this.series.subscribe(() => {
                resolve("success");
            });
        });
    }
    getSeries() {
        return this.series;
    }
}
SeriesController.ɵfac = function SeriesController_Factory(t) { return new (t || SeriesController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_3__["GetSeriesByUriGQL"])); };
SeriesController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SeriesController, factory: SeriesController.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeriesController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }, { type: _graphql__WEBPACK_IMPORTED_MODULE_3__["GetSeriesByUriGQL"] }]; }, null); })();


/***/ }),

/***/ "pFkP":
/*!********************************!*\
  !*** ./src/app/pipes/index.ts ***!
  \********************************/
/*! exports provided: SafeHtmlPipe, SafeUrlPipe, BibleRefPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _safeHtml_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safeHtml.pipe */ "qbjE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return _safeHtml_pipe__WEBPACK_IMPORTED_MODULE_0__["SafeHtmlPipe"]; });

/* harmony import */ var _safeUrl_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safeUrl.pipe */ "a65m");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return _safeUrl_pipe__WEBPACK_IMPORTED_MODULE_1__["SafeUrlPipe"]; });

/* harmony import */ var _bibleRef_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bibleRef.pipe */ "FMP8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BibleRefPipe", function() { return _bibleRef_pipe__WEBPACK_IMPORTED_MODULE_2__["BibleRefPipe"]; });






/***/ }),

/***/ "qbjE":
/*!****************************************!*\
  !*** ./src/app/pipes/safeHtml.pipe.ts ***!
  \****************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dompurify */ "wMS7");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        const sanitizedContent = dompurify__WEBPACK_IMPORTED_MODULE_1___default.a.sanitize(value);
        return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "rx3R":
/*!*****************************************************!*\
  !*** ./src/app/controller/seriesList.controller.ts ***!
  \*****************************************************/
/*! exports provided: SeriesListController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesListController", function() { return SeriesListController; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql */ "R+F0");





class SeriesListController {
    constructor(apollo, getSeriesListGQL) {
        this.apollo = apollo;
        this.getSeriesListGQL = getSeriesListGQL;
    }
    loadSeriesList() {
        return new Promise(resolve => {
            this.seriesList = this.getSeriesListGQL.watch()
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.data.seriesList));
            this.seriesList.subscribe(() => {
                resolve("success");
            });
        });
    }
    getSeriesList() {
        return this.seriesList;
    }
}
SeriesListController.ɵfac = function SeriesListController_Factory(t) { return new (t || SeriesListController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_3__["GetSeriesListGQL"])); };
SeriesListController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SeriesListController, factory: SeriesListController.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeriesListController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"] }, { type: _graphql__WEBPACK_IMPORTED_MODULE_3__["GetSeriesListGQL"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: '', loadChildren: './seriesListPages/seriesList.module#SeriesListModule' },
    { path: 'form', loadChildren: './formPages/form.module#FormModule' },
    { path: 'series', loadChildren: './seriesPages/series.module#SeriesModule' },
    { path: 'guide', loadChildren: './guidePages/guide.module#GuideModule' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: 'reload',
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        onSameUrlNavigation: 'reload',
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x9hK":
/*!***********************************************!*\
  !*** ./src/app/controller/form.controller.ts ***!
  \***********************************************/
/*! exports provided: FormController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormController", function() { return FormController; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql */ "R+F0");




class FormController {
    constructor(getFormByUriGQL) {
        this.getFormByUriGQL = getFormByUriGQL;
    }
    getFormByUri(uri) {
        this.formUri = uri;
        return new Promise(resolve => {
            this.form = this.getFormByUriGQL.watch({ formUri: this.formUri })
                .valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.data.formByUri));
            this.form.subscribe(() => {
                resolve("success");
            });
        });
    }
    getForm() {
        return this.form;
    }
}
FormController.ɵfac = function FormController_Factory(t) { return new (t || FormController)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_graphql__WEBPACK_IMPORTED_MODULE_2__["GetFormByUriGQL"])); };
FormController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormController, factory: FormController.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _graphql__WEBPACK_IMPORTED_MODULE_2__["GetFormByUriGQL"] }]; }, null); })();


/***/ }),

/***/ "xgsT":
/*!****************************************************!*\
  !*** ./src/app/graphql/seriesListField.graphql.ts ***!
  \****************************************************/
/*! exports provided: GetSeriesListGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSeriesListGQL", function() { return GetSeriesListGQL; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);




class GetSeriesListGQL extends apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Query"] {
    constructor() {
        super(...arguments);
        this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a `
    query seriesList {
	    seriesList {
        id
        name
        uri
        imageUrl
        year
      }
    }`;
    }
}
GetSeriesListGQL.ɵfac = function GetSeriesListGQL_Factory(t) { return ɵGetSeriesListGQL_BaseFactory(t || GetSeriesListGQL); };
GetSeriesListGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetSeriesListGQL, factory: GetSeriesListGQL.ɵfac, providedIn: 'root' });
const ɵGetSeriesListGQL_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GetSeriesListGQL);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetSeriesListGQL, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./formPages/form.module": [
		"lbNB",
		"default~formPages-form-module~guidePages-guide-module",
		"formPages-form-module"
	],
	"./guidePages/guide.module": [
		"mQtE",
		"default~formPages-form-module~guidePages-guide-module",
		"guidePages-guide-module"
	],
	"./seriesListPages/seriesList.module": [
		"idvj",
		"seriesListPages-seriesList-module"
	],
	"./seriesPages/series.module": [
		"tiTW",
		"seriesPages-series-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map