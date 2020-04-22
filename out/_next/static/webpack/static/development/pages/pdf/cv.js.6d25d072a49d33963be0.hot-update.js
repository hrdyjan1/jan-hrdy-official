webpackHotUpdate("static\\development\\pages\\pdf\\cv.js",{

/***/ "./pages/pdf/cv.js":
/*!*************************!*\
  !*** ./pages/pdf/cv.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-pdf */ "./node_modules/react-pdf/dist/entry.js");
/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_pdf__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\badeu\\hrdyjan1\\projects\\jan-hrdy-official\\pages\\pdf\\cv.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import cvpdf from '../../public/pdfs/CV.pdf'

var cv = function cv() {
  return __jsx(react_pdf__WEBPACK_IMPORTED_MODULE_1__["Document"], {
    file: {
      url: "/pdfs/CV.pdf"
    },
    onLoadError: function onLoadError(e) {
      return console.log("Error while loading document! " + e.message);
    },
    onSourceError: function onSourceError(e) {
      return console.log("Error while loading document! " + e.message);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(react_pdf__WEBPACK_IMPORTED_MODULE_1__["Page"], {
    pageNumber: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (cv);

/***/ })

})
//# sourceMappingURL=cv.js.6d25d072a49d33963be0.hot-update.js.map