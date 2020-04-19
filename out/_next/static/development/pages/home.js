(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\home.js"],{

/***/ "./config/translation.js":
/*!*******************************!*\
  !*** ./config/translation.js ***!
  \*******************************/
/*! exports provided: languageStrings, languageStatus, languageReducerType, defaultLanguage, initializeLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageStrings", function() { return languageStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageStatus", function() { return languageStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languageReducerType", function() { return languageReducerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLanguage", function() { return defaultLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeLanguage", function() { return initializeLanguage; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


var _ENGLISH, _CZECH, _languageStrings, _languageReducerType;

var languageStatus = {
  CZECH: 'CZECH',
  ENGLISH: 'ENGLISH'
};
var ENGLISH = languageStatus.ENGLISH,
    CZECH = languageStatus.CZECH;
var languageStrings = (_languageStrings = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_languageStrings, ENGLISH, (_ENGLISH = {
  home: 'Home',
  // Main Navigation
  about: 'About',
  // Main Navigation
  projects: 'Projects',
  // Main Navigation
  settings: 'Settings',
  // Main Navigation, Modal
  close: 'Close',
  // Modal
  tryToReload: 'Try to reload.',
  // Loading page
  loading: 'Loading',
  // Loading page
  welcome: 'Welcome',
  // Welcome page
  textIntroPart1: 'This app is a personal website of myself, ',
  // Welcome page
  textIntroPart2: ' Feel free to move here as you like. If you are interested in projects, that I am part of, than click',
  // Welcome page
  here: 'here',
  // Welcome page - introText
  feelFree: 'Feel free',
  // Welcome page - button
  toEnter: 'to enter',
  // Welcome page - button
  homePageText: 'This is home page.',
  // Home page - button
  aboutPageText: 'This is about page.'
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ENGLISH, "projects", 'Projects'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ENGLISH, "projectsDescription", 'Here is a list of projects I have participated in.'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ENGLISH, "name", 'Name'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ENGLISH, "type", 'Type'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ENGLISH, "search", 'Search'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ENGLISH, "about", 'About Me'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ENGLISH, "aboutDescription", 'Description'), _ENGLISH)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_languageStrings, CZECH, (_CZECH = {
  home: 'Domů',
  about: 'O mě',
  projects: 'Projekty',
  settings: 'Nastavení',
  close: 'Zavřít',
  tryToReload: 'Zkuste znovu načíst.',
  loading: 'Načítání',
  welcome: 'Vítejte',
  textIntroPart1: 'Tato aplikace reprezentuje mé osobní stránky. Zdraví Vás ',
  textIntroPart2: ' Je mi ctí, že jste zavítali přímo sem. Pokud Vás zajímá nějáký projekt, na kterém jsem se podílel, tak prosím kliknětě',
  here: 'zde',
  feelFree: 'Neváhejte',
  toEnter: 'vstoupit',
  homePageText: 'Toto je domovská stránka.',
  aboutPageText: 'Tato stránka je o mně.'
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_CZECH, "projects", 'Projekty'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_CZECH, "projectsDescription", 'Zde je uveden seznam projektů, na kterých jsem se podílel.'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_CZECH, "name", 'Název'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_CZECH, "type", 'Typ'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_CZECH, "search", 'Vyhledat'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_CZECH, "about", 'O mě'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_CZECH, "aboutDescription", 'Popis'), _CZECH)), _languageStrings);
var languageReducerType = (_languageReducerType = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_languageReducerType, languageStatus.CZECH, languageStatus.CZECH), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_languageReducerType, languageStatus.ENGLISH, languageStatus.ENGLISH), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_languageReducerType, "TOGGLE", 'TOGGLE'), _languageReducerType);
var defaultLanguage = languageStatus.ENGLISH;

var initializeLanguage = function initializeLanguage(status) {
  return {
    status: languageStatus[status] || defaultLanguage
  };
};



/***/ }),

/***/ "./contexts/languageContext.js":
/*!*************************************!*\
  !*** ./contexts/languageContext.js ***!
  \*************************************/
/*! exports provided: LanguageProvider, useLanguageState, useLanguageDispatch, useLanguageMethod, useComplexLanguageMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageProvider", function() { return LanguageProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLanguageState", function() { return useLanguageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLanguageDispatch", function() { return useLanguageDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLanguageMethod", function() { return useLanguageMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComplexLanguageMethod", function() { return useComplexLanguageMethod; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/localStorage */ "./utils/localStorage.js");
/* harmony import */ var _config_translation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/translation */ "./config/translation.js");


var _jsxFileName = "C:\\Users\\badeu\\hrdyjan1\\projects\\jan-hrdy-official\\contexts\\languageContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var LanguageStateContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext();
var LanguageDispatchContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext();

function languageReducer(state, action) {
  switch (action.type) {
    case _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageReducerType"].TOGGLE:
      return {
        status: state.status === _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageStatus"].CZECH ? _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageStatus"].ENGLISH : _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageStatus"].CZECH
      };

    case _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageReducerType"].CZECH:
      return {
        status: _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageStatus"].CZECH
      };

    case _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageReducerType"].ENGLISH:
      return {
        status: _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageStatus"].ENGLISH
      };

    default:
      {
        throw new Error("Unhandled action type in LanguageReducer: ".concat(action.type));
      }
  }
}

function LanguageProvider(_ref) {
  var children = _ref.children,
      language = _ref.language;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2___default.a.useReducer(languageReducer, Object(_config_translation__WEBPACK_IMPORTED_MODULE_4__["initializeLanguage"])(language)),
      _React$useReducer2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var isCzechLanguage = state.status === _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageStatus"].CZECH;
  var isEnglishLanguage = state.status === _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageStatus"].ENGLISH;
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_3__["enhanceLocalStorage"])(_utils_localStorage__WEBPACK_IMPORTED_MODULE_3__["localStorageType"].LANGUAGE, state.status);
  }, [state.status]);
  return __jsx(LanguageStateContext.Provider, {
    value: _objectSpread({}, state, {
      isCzechLanguage: isCzechLanguage,
      isEnglishLanguage: isEnglishLanguage,
      nextStatus: isCzechLanguage ? _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageStatus"].ENGLISH : _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageStatus"].CZECH
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(LanguageDispatchContext.Provider, {
    value: dispatch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, children));
}

function useLanguageState() {
  var context = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(LanguageStateContext);

  if (context === undefined) {
    throw new Error('useLanguageState must be used within a LanguageProvider');
  }

  return context;
}

function useLanguageDispatch() {
  var context = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(LanguageDispatchContext);

  if (context === undefined) {
    throw new Error('useLanguageDispatch must be used within a LanguageProvider');
  }

  return context;
}

function useLanguageMethod() {
  var dispatch = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(LanguageDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useLanguageDispatch must be used within a LLanguageProvider');
  }

  var toggle = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function () {
    return dispatch({
      type: _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageReducerType"].TOGGLE
    });
  }, [dispatch]);
  return {
    toggle: toggle
  };
}

function useComplexLanguageMethod() {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.useContext(LanguageStateContext),
      status = _React$useContext.status;

  var t = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (key) {
    var currentLanguage = status;
    var translatedString = _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageStrings"][currentLanguage][key];

    if (!translatedString) {
      console.warn("Translation '".concat(key, "' for currentLanguage '").concat(currentLanguage, "' not found."));
    }

    return translatedString || _config_translation__WEBPACK_IMPORTED_MODULE_4__["languageStrings"][_config_translation__WEBPACK_IMPORTED_MODULE_4__["defaultLanguage"]][key] || key || '';
  }, [status]);
  return {
    t: t
  };
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhome&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5Chome.js!./":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhome&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5Chome.js ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/home", function() {
      var mod = __webpack_require__(/*! ./pages/home.js */ "./pages/home.js")
      if(true) {
        module.hot.accept(/*! ./pages/home.js */ "./pages/home.js", function() {
          if(!next.router.components["/home"]) return
          var updatedPage = __webpack_require__(/*! ./pages/home.js */ "./pages/home.js")
          next.router.update("/home", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_languageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/languageContext */ "./contexts/languageContext.js");
var _jsxFileName = "C:\\Users\\badeu\\hrdyjan1\\projects\\jan-hrdy-official\\pages\\home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  var _useComplexLanguageMe = Object(_contexts_languageContext__WEBPACK_IMPORTED_MODULE_1__["useComplexLanguageMethod"])(),
      t = _useComplexLanguageMe.t;

  return __jsx("div", {
    id: "page-home-id",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("section", {
    className: "c-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "c-section__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("nobr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, "Home")), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "The box-shadow property enables you to cast a drop shadow from the frame of almost any element. If a border-radius is specified on the element with a box shadow."))), __jsx("ul", {
    className: "c-services",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: "c-services__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "First"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "We leverage the concept of mobile-first design. Through our work, we focus on designing an experience that works across different screen sizes.")), __jsx("li", {
    className: "c-services__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Second"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your product. From there, we can take it further and fix all issues.")), __jsx("li", {
    className: "c-services__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Third"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "We are Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we\u2019re happy to do so.")), __jsx("li", {
    className: "c-services__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "UX Consultation"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "If you don\u2019t know what kind of service to request from us, don\u2019t worry. We can help and see what fits your business and your budget.")), __jsx("li", {
    className: "c-services__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, "Mobile Apps Design"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "To reach more customers and the goals of your business, a mobile application is necessary these days. We will work on the app design from scratch to final tested prototype.")), __jsx("li", {
    className: "c-services__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Six"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "It\u2019s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more.", ' ')), __jsx("li", {
    className: "c-services__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Seven"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "It\u2019s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more.", ' ')), __jsx("li", {
    className: "c-services__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Eight"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, "It\u2019s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more.")), __jsx("li", {
    className: "c-services__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Nine"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, "It\u2019s important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more.", ' ')))), __jsx("div", {
    className: "spaceDown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./utils/localStorage.js":
/*!*******************************!*\
  !*** ./utils/localStorage.js ***!
  \*******************************/
/*! exports provided: getItems, enhanceLocalStorage, localStorageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enhanceLocalStorage", function() { return enhanceLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageType", function() { return localStorageType; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var localStorageType = {
  THEME: 'THEME',
  LANGUAGE: 'LANGUAGE',
  SOUND: 'SOUND'
};

var getItems = function getItems(items) {
  if (Array.isArray(items)) {
    return items.reduce(function (result, item) {
      return _objectSpread({}, result, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item, localStorage.getItem(item)));
    }, {});
  } else if (typeof items === 'string') {
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, items, localStorage.getItem(items));
  }

  return {};
};

var enhanceLocalStorage = function enhanceLocalStorage(itemName, itemValue) {
  localStorage.setItem(itemName, itemValue);
};



/***/ }),

/***/ 2:
/*!*****************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fhome&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5Chome.js ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fhome&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5Chome.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fhome&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5Chome.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=home.js.map