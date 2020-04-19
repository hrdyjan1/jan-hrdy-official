webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./components/pages/projects/Default.js":
/*!**********************************************!*\
  !*** ./components/pages/projects/Default.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pages/projects */ "./pages/projects.js");
/* harmony import */ var _Intro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Intro */ "./components/pages/projects/Intro.js");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List */ "./components/pages/projects/List.js");
/* harmony import */ var _SearchType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchType */ "./components/pages/projects/SearchType.js");
/* harmony import */ var _contexts_languageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../contexts/languageContext */ "./contexts/languageContext.js");
/* harmony import */ var _config_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config/projects */ "./config/projects.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\badeu\\hrdyjan1\\projects\\jan-hrdy-official\\components\\pages\\projects\\Default.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var MAX_INPUT_SUGGESTIONS = 5;

var getUniquePropertyValuesFromHashMap = function getUniquePropertyValuesFromHashMap(_ref) {
  var property = _ref.property,
      hashMap = _ref.hashMap,
      ids = _ref.ids;
  return ids.map(function (id) {
    return hashMap[id][property];
  }).filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
};

var createSuggestionElements = function createSuggestionElements(_ref2) {
  var innerHTML = _ref2.innerHTML,
      _ref2$onclick = _ref2.onclick,
      onclick = _ref2$onclick === void 0 ? function () {} : _ref2$onclick;
  var li = document.createElement('li');
  li.style.transition = 'opacity .5s linear';
  li.getBoundingClientRect();
  li.style.opacity = 1;
  li.innerHTML = innerHTML;
  li.onclick = onclick;
  return li;
};

var Default = function Default(_ref3) {
  var getSuggestions = _ref3.getSuggestions,
      subject$ = _ref3.subject$;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      searchValue = _React$useState2[0],
      setSearchValue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      suggestions = _React$useState4[0],
      setSuggestions = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(_pages_projects__WEBPACK_IMPORTED_MODULE_2__["searchTypes"].title),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      searchTypeValue = _React$useState6[0],
      setSearchTypeValue = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      isFocused = _React$useState8[0],
      setFocused = _React$useState8[1];

  var ulRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  var inputRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  var _useComplexLanguageMe = Object(_contexts_languageContext__WEBPACK_IMPORTED_MODULE_6__["useComplexLanguageMethod"])(),
      t = _useComplexLanguageMe.t;

  var changeSearchValue = function changeSearchValue(value) {
    setSearchValue(value);
    subject$.next(value);
  };

  var changeInputValue = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (_ref4) {
    var value = _ref4.target.value;
    return changeSearchValue(value);
  }, [changeSearchValue, setSearchValue]); // Clear visible suggesting results

  var hideResults = function hideResults(shouldClear) {
    ulRef.current.classList.add('hidden');

    if (shouldClear) {
      ulRef.current.innerHTML = '';
    }
  }; // Focused on input


  var setFocusOn = function setFocusOn() {
    if (!isFocused) {
      setFocused(true);
    }
  }; // Focused off input


  var setFocusOff = function setFocusOff() {
    if (isFocused) {
      setFocused(false);
    }
  };

  var handleShowingSuggestions = function handleShowingSuggestions() {
    hideResults(true);
    var searchValueLower = searchValue.toLowerCase();

    if (suggestions.length === 0) {
      var innerHTML = "Whoah! <strong>".concat(searchValueLower, "</strong> is not in the index");
      ulRef.current.appendChild(createSuggestionElements({
        innerHTML: innerHTML
      }));
    } else if (suggestions.length > 0) {
      var obj = {
        property: searchTypeValue,
        hashMap: _config_projects__WEBPACK_IMPORTED_MODULE_7__["entities"],
        ids: suggestions
      };
      var uniqueSuggestionNames = getUniquePropertyValuesFromHashMap(obj);

      var _loop = function _loop(i) {
        var nameOfSuggestion = uniqueSuggestionNames[i];
        var nameOfSuggestionLowerCase = nameOfSuggestion.toLowerCase();
        var replacedValue = "<strong>".concat(searchValueLower, "</strong>");
        var innerHTML = nameOfSuggestionLowerCase.replace(searchValueLower, replacedValue);

        var onclick = function onclick() {
          return changeSearchValue(nameOfSuggestionLowerCase);
        };

        ulRef.current.appendChild(createSuggestionElements({
          onclick: onclick,
          innerHTML: innerHTML
        }));
      };

      for (var i = 0; i < uniqueSuggestionNames.length && i < MAX_INPUT_SUGGESTIONS; i++) {
        _loop(i);
      }
    }

    if (ulRef.current.className !== 'term-list') {
      ulRef.current.className = 'term-list';
    }
  };

  var handleClearingSuggestions = function handleClearingSuggestions(event) {
    var isClickedOnSuggestionBar = event.target.tagName === 'UL' || event.target.tagName === 'LI' || event.target.tagName === 'INPUT';

    if (!isClickedOnSuggestionBar) {
      setFocusOff();
    }
  }; // Handled suggestions


  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    if (isFocused) {
      handleShowingSuggestions();
    } else {
      hideResults();
    }
  }, [isFocused, suggestions]); // Handled focus on input

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var body = document.getElementsByTagName('body')[0];
    body.addEventListener('click', handleClearingSuggestions);
    inputRef.current.addEventListener('focusin', setFocusOn);
    inputRef.current.addEventListener('keyup', setFocusOn);
    return function () {
      body.removeEventListener('click', handleClearingSuggestions);
      inputRef.current.removeEventListener('focusin', setFocusOn);
      inputRef.current.removeEventListener('keyup', setFocusOn);
    };
  }, [handleClearingSuggestions, setFocusOn]); // Handled new suggestions from "API"

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var subscription = getSuggestions(subject$, searchTypeValue).subscribe(function (newSuggestions) {
      setSuggestions(newSuggestions);
    }, function (error) {
      console.error(error);
    });
    return function () {
      return subscription.unsubscribe();
    };
  }, [searchTypeValue, getSuggestions, subject$]);
  return __jsx("div", {
    id: "project-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, __jsx(_Intro__WEBPACK_IMPORTED_MODULE_3__["default"], {
    header: "projects",
    subHeader: "projectsDescription",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "wrapper-search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, __jsx(_SearchType__WEBPACK_IMPORTED_MODULE_5__["default"], {
    searchTypeValue: searchTypeValue,
    changeSearchTypeValue: setSearchTypeValue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }), __jsx("input", {
    // autoFocus
    type: "text",
    id: "searchBox",
    ref: inputRef,
    autoComplete: "off",
    className: "search-field",
    value: searchValue,
    onChange: changeInputValue,
    placeholder: "".concat(t('search'), "..."),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  })), __jsx("ul", {
    ref: ulRef,
    id: "searchResults",
    className: "term-list hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }
  }), __jsx(_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    projects: suggestions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Default);

/***/ })

})
//# sourceMappingURL=projects.js.fe4043a7d27d859353a0.hot-update.js.map