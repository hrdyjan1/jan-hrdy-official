webpackHotUpdate("static\\development\\pages\\404.js",{

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_pages_projects_Intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/pages/projects/Intro */ "./components/pages/projects/Intro.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\badeu\\hrdyjan1\\projects\\jan-hrdy-official\\pages\\404.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var rotate = function rotate(hr, mn, sc) {
  return function (finalHour, finalMinute, finalSecond) {
    var deg = 6;
    var day = new Date();
    console.log('timer');
    var hh = (finalHour || day.getHours()) * 30;
    var mm = (finalMinute || day.getMinutes()) * deg;
    var ss = (finalSecond || day.getSeconds()) * deg;
    hr.style.transform = "rotateZ(".concat(hh + mm / 12, "deg)");
    mn.style.transform = "rotateZ(".concat(mm, "deg)");
    sc.style.transform = "rotateZ(".concat(ss, "deg)");
  };
};

var Clock = function Clock(_ref) {
  var _ref$staticDate = _ref.staticDate,
      staticDate = _ref$staticDate === void 0 ? {} : _ref$staticDate;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var interval;
    var hr = document.getElementById('hr');
    var mn = document.getElementById('mn');
    var sc = document.getElementById('sc');
    var rotation = rotate(hr, mn, sc);

    if (staticDate) {
      rotation(staticDate.hr, staticDate.mn, staticDate.sc);
    } else {
      interval = setInterval(function () {
        rotation();
      });
    }

    return function () {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [staticDate]);
  return __jsx("div", {
    className: "clock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hour",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "hr",
    id: "hr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "min",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mn",
    id: "mn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "sec",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "sc",
    id: "sc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })));
};

var Page404 = function Page404() {
  return __jsx("div", {
    id: "page-404-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(Clock, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }), __jsx(_components_pages_projects_Intro__WEBPACK_IMPORTED_MODULE_1__["default"], {
    header: "404",
    subHeader: "description404",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Page404);

/***/ })

})
//# sourceMappingURL=404.js.1b99eef85f0ac9826153.hot-update.js.map