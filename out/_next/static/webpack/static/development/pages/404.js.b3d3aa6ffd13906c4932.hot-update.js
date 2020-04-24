webpackHotUpdate("static\\development\\pages\\404.js",{

/***/ "./components/pages/projects/Clock.js":
/*!********************************************!*\
  !*** ./components/pages/projects/Clock.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\badeu\\hrdyjan1\\projects\\jan-hrdy-official\\components\\pages\\projects\\Clock.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var rotate = function rotate(hr, mn, sc) {
  return function (finalHour, finalMinute, finalSecond) {
    var deg = 6;
    var day = new Date();
    var hh = (finalHour !== null && finalHour !== void 0 ? finalHour : day.getHours()) * 30;
    var mm = (finalMinute !== null && finalMinute !== void 0 ? finalMinute : day.getMinutes()) * deg;
    var ss = (finalSecond !== null && finalSecond !== void 0 ? finalSecond : day.getSeconds()) * deg;
    hr.style.transform = "rotateZ(".concat(hh + mm / 12, "deg)");
    mn.style.transform = "rotateZ(".concat(mm, "deg)");
    sc.style.transform = "rotateZ(".concat(ss, "deg)");
  };
};

var Clock = function Clock(_ref) {
  var staticDate = _ref.staticDate,
      shouldStartOnClickClock = _ref.shouldStartOnClickClock;

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isClickedOnClock = _useState2[0],
      setClickedOnClock = _useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var interval;
    var hr = document.getElementById('hr');
    var mn = document.getElementById('mn');
    var sc = document.getElementById('sc');
    var rotation = rotate(hr, mn, sc);

    if (staticDate && !shouldStartOnClickClock) {
      rotation(staticDate === null || staticDate === void 0 ? void 0 : staticDate.hr, staticDate === null || staticDate === void 0 ? void 0 : staticDate.mn, staticDate === null || staticDate === void 0 ? void 0 : staticDate.sc);
    } else {
      interval = setInterval(rotation);
    }

    return function () {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [staticDate, shouldStartOnClickClock]);
  return __jsx("div", {
    className: "clock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hour",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "hr",
    id: "hr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "min",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mn",
    id: "mn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "sec",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "sc",
    id: "sc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Clock);

/***/ })

})
//# sourceMappingURL=404.js.b3d3aa6ffd13906c4932.hot-update.js.map