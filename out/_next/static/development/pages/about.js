(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\about.js"],{

/***/ "./components/pages/projects/Intro.js":
/*!********************************************!*\
  !*** ./components/pages/projects/Intro.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_languageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../contexts/languageContext */ "./contexts/languageContext.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\badeu\\hrdyjan1\\projects\\jan-hrdy-official\\components\\pages\\projects\\Intro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Intro = function Intro(_ref) {
  var header = _ref.header,
      subHeader = _ref.subHeader,
      render = _ref.render;

  var _useComplexLanguageMe = Object(_contexts_languageContext__WEBPACK_IMPORTED_MODULE_1__["useComplexLanguageMethod"])(),
      t = _useComplexLanguageMe.t;

  var renderElement = typeof render === 'function' ? render : function () {};
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, t(header)), __jsx("div", {
    className: "intro-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, t(subHeader)), renderElement()));
};

/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

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


var _aboutPageTranslation, _mainPageTranslation, _objectSpread2, _objectSpread3, _languageStrings, _languageReducerType;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var languageStatus = {
  CZECH: 'CZECH',
  ENGLISH: 'ENGLISH'
};
var ENGLISH = languageStatus.ENGLISH,
    CZECH = languageStatus.CZECH;
var aboutPageTranslation = (_aboutPageTranslation = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_aboutPageTranslation, ENGLISH, {
  aboutDescription: "Here we are, self-description. Brilliant. I'll be brief. I feel like a regular human being, living a normal life. There only a few deviations from others. People find me to be an upbeat, self-motivated team player with excellent creative skills. For the past several years I have worked in tech. I consider myself as a frontend engineer. My primary goal is creating web or mobile apps. Most of the time I work with ReactJS, which means JavaScript obviously. My experience includes successfully creating app logic, connecting APIs, cooperate with Frontend libraries, be responsible for testing. I have an updated bunch of GitHub open-source issues.",
  lifeWithTech: 'Life in Tech',
  lifeWithoutTech: 'Normal bio life'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_aboutPageTranslation, CZECH, {
  aboutDescription: 'Je to tady, popsat sám sebe. Budu se snažit být stručný. Vnímám sám sebe jako úplné normální lidskou bytost, která žije normální život. Existuje však pár odlišností od průměrného člověka. Lidé mě často považují za pozitivního týmového hráče s vynikajícími tvůrčími schopnostmi. Posledních několik let jsem pracoval v oblasti IT. Považuji se za "fronendistu". Mým hlavním cílem je tvorba webových nebo mobilních aplikací. Většinu času jsem pracuji s ReactJS, což samozřejmě znamená JavaScript. Moje zkušenost zahrnují návrh i úspěšnou tvorbu logiky aplikací, propojení API, napojení optimálních knihoven či odpovědnost za testování. Jsem zapojený do open-source komunity vývojář na GitHubu. Mimo jiné občas přispívám na fórum pro programátory (StackOverflow), takže bacha, od koho kopírujete.',
  lifeWithTech: 'Život spojený s IT',
  lifeWithoutTech: 'Normální běžný život'
}), _aboutPageTranslation);
var mainPageTranslation = (_mainPageTranslation = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_mainPageTranslation, ENGLISH, {
  homePageDescription: 'Once again, welcome to my personal website. You are now on the home page. Here are a few different categories that characterize the main part of my life.',
  homePageSection1Heading: 'What can you find on this website?',
  homePageSection1Description: 'Occasionally, there may be someone in the vast community of people browsing the Internet who has just found themselves on this web page. Well, this is a personal website about myself. You can find out some information about projects I am part of, my contact and a few other things.',
  homePageSection2Heading: 'My Current job',
  homePageSection2Description: 'From summer 2019 I am employed at a company aimed at creating web apps for other businesses. We are called Netvor. If you are curious about more stuffs you can visit our website.',
  homePageSection3Heading: 'Me and Programming',
  homePageSection3Description: 'I made my way to computer technology at university. I started my studies at CTU, where I learned the basics over time. At the beginning, I created web applications. Later I devoted more server parts. I started using several basic programming tools or libraries. I got to mobile development for a while. The moment I came across React Native, I was amazed at how graceful and easy it was to create mobile apps. Since then I have lived mostly in a world dominated by JavaScript and ReactJS-related technologies. The greatest joy makes me create the logic of the application, I usually move styling to the last place.',
  homePageSection4Heading: 'Projects I am part of',
  homePageSection4Description: 'Well, there are a few projects I have been involved in, mainly because people often find me to be an upbeat, self-motivated team player with excellent creative skills. Most of them are connected with IT stuffs. My experience also includes video production and sports event organizer. If you want to know more, just visit "Projects Page".',
  homePageSection5Heading: 'Who am I?',
  homePageSection5Description: 'I feel like a regular human being, living a normal life. I consider myself a frontend engineer based in the capital of The Czech Republic. I enjoy turning complex problems into simple, beautiful and intuitive web and mobile apps. When I\'m not programming, committing code or reading about new library features, you\'ll find me eating, playing the guitar or do some sports pieces of stuff. If you want to know more, just visit "About Page"',
  homePageSection6Heading: 'App settings',
  homePageSection6Description: 'There are a small number of different varieties of this website. Feel free to switch the language, change the current theme. Wau there is a dark and light mode, of course. If you prefer no silence, just toggle music off. If you want to know more, just visit "Settings."',
  homePageSection7Heading: 'Current project',
  homePageSection7Description: 'The current project we are working on is called Notify. It is a mobile application designed to make it easier for us to be together, without worrying about strange notifications or regular reminders. Notify also works on the principle of connecting more people.',
  homePageSection8Heading: 'Join our group of friends',
  homePageSection8Description: "What a life without friends and a lot of fun. I appreciate the moments spent with my loved ones. The friendly atmosphere makes me feel good. We have been meeting with friends over the card Bang game almost every Friday. I also often play basketball or supporting my favorite team in the NBA. Boston Celtics! I'm also very grateful for a great girlfriend and a fantastic little pug.",
  homePageSection9Heading: 'Contact',
  homePageSection9Description: 'Probably the last part you have been searching for is a way to contact me. Only two steps. Switch to page: "About", then scroll down. Easy, right? I would recommend you use email clients.'
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_mainPageTranslation, CZECH, {
  homePageDescription: 'Ještě jednou, vítejte na mém osobním webu. Nyní jste se ocitli na domovské stránce. Zde je několik různých kategorií, které se snaží charakterizovat hlavní části celého webu.',
  homePageSection1Heading: 'Co vás na těchto stránkách čeká a nemine?',
  homePageSection1Description: 'Občas se stane, že na tyto stránky zavítá někdo, kdo by se rád rychle dozvěděl, co lze najít na těchto stránkách, tak přátelé, tento web reprezentuje mé vlastní osobní portfolio. Můžete se zde dozvědět několik informací o projektech, kterých jsem součástí, zjistit, jak mě kontaktovat a mnohé další.',
  homePageSection2Heading: 'Moje aktuální práce',
  homePageSection2Description: 'Je mi velkou ctí sdělit Vám, že aktuálně jsem zaměstnaný v úžasné firmě, která řeší tvorbu webových a mobilních aplikací. Funguji zde jako Frontendový specialista. Mojí hlavní náplní je čistě JavaScript. Konkrétně React JS. Sídlíme v Praze a říkáme si Netvor',
  homePageSection3Heading: 'Programování',
  homePageSection3Description: 'Na cestu počítačových technologií jsem se dostal až na vysoké škole. Začal jsem studium na ČVUT, kde jsem si postupem času osvojil základy. na počátku jsem tvořil webové aplikace. Později jsem se věnoval více serverové části. Začal jsem využívat několik základních programátorských nástrojů či knihoven. Dostal jsem se na čas i k mobilnímu vývoji. Ve chvíli, kdy jsem narazil na React Native jsem byl ohromen, s jakou ladností a lehkostí lze tvořit mobilní aplikace. Od té doby žiji převážně ve světě, kde dominuje jazyk JavaScript a technologie spojené s ReactJS. Největší radost mi dělá tvořit logiku aplikace, stylování posouvám většinou na poslední místo.',
  homePageSection4Heading: 'Projekty',
  homePageSection4Description: 'Pracoval jsem v životě už na několika různorodých projektech. Do většiny projektů jsem se zapojil, hlavně proto, že mě lidé často považují za pozitivního, týmového hráče s vynikajícími tvůrčími schopnostmi. Většina z mých konexí je spojena se světem IT. Mezi mé zkušenosti patří také video produkce nebo organizace sportovních akcí. Pokud se chcete dozvědět více, navštivte stránku "Projekty"',
  homePageSection5Heading: 'Co jsem zač?',
  homePageSection5Description: 'Cítím se jako normální člověk, žijící normální život. Také se mimo jiné považuji za frontendistu žijícím v hlavním městě České republiky. Baví mě proměnit složité problémy v jednoduché, tvořit krásné a intuitivní webové nebo mobilní aplikace. Pokud zrovna nepřidávám na server pár řádků kódu nebo netvořím logiku aplikace, tak mě nejspíš najdete někde, kde buď jím, hraji na kytaru nebo dělám něco sportovního. Pokud se chcete dozvědět o mě více, stačí navštívit stránku "O mě"',
  homePageSection6Heading: 'Úpravy podle vás',
  homePageSection6Description: 'Tato webová stránka obsahuje několik různých variant. Neváhejte a využijte toho. Lze například přepnout jazyk, změňte aktuální vzhled. Wau můžete zvolit buď tmavý či světlý režim. Pokud dáváte přednost procházení stránek bez možných zvuků, tak lze na webu vypnout hudbu. Pokud se chcete dozvědět více, stačí navštívit sekci "Nastavení".',
  homePageSection7Heading: 'Aktuální projekt',
  homePageSection7Description: 'Aktuální projekt, na kterém pracujeme se jmenuje Notify. Jde o mobilní aplikaci, které nám má usnadnit společné bytí, kdy se nemusíme starat o různé prapodivné upozornění či pravidelné připomínky. Notify funguje i na principu spojení více lidí.',
  homePageSection8Heading: 'Připoj se do naší party',
  homePageSection8Description: 'Jaký by byl život bez přátel. Oceňuji chvíle strávené se svými blízkými. Díky přátelské atmosféře se cítím dobře. Téměř každý pátek se scházíme s přáteli u karetní hry Bang. Často také hraji basketbal nebo sleduji utkání mého oblíbeného týmu v NBA. Boston Celtics! Jsem také velmi vděčný za skvělou přítelkyni a fantastického malého mopsíka.',
  homePageSection9Heading: 'Otázky a chyby',
  homePageSection9Description: 'Nebývá to zvykem, ale někdy se mezi Vámi vyskytne někdo, kdo má otázku, kterou by chtěl ode mě zodpovědět. Občas se také stane, že někdo najde chybu na těchto stránkách. Nebývá to časté, ale můžete se to stát. V takovýchto případech stačí navštívit stránku: "O mně", kde najde sekci kontakt, kde si můžete vybrat, jakou cestou se se mnou spojit. Budu rád za případné dotazy, či upozornění na chybu.'
}), _mainPageTranslation);
var languageStrings = (_languageStrings = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_languageStrings, ENGLISH, _objectSpread((_objectSpread2 = {
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
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "projects", 'Projects'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "projectsDescription", 'Here is a list of projects I have participated in.'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "name", 'Name'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "type", 'Type'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "search", 'Search'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "about", 'About Me'), _objectSpread2), mainPageTranslation.ENGLISH, {}, aboutPageTranslation.ENGLISH)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_languageStrings, CZECH, _objectSpread((_objectSpread3 = {
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
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "projects", 'Projekty'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "projectsDescription", 'Zde je uveden seznam projektů, na kterých jsem se podílel.'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "name", 'Název'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "type", 'Typ'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "search", 'Vyhledat'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "about", 'O mě'), _objectSpread3), mainPageTranslation.CZECH, {}, aboutPageTranslation.CZECH)), _languageStrings);
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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5Cabout.js!./":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5Cabout.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/about", function() {
      var mod = __webpack_require__(/*! ./pages/about.js */ "./pages/about.js")
      if(true) {
        module.hot.accept(/*! ./pages/about.js */ "./pages/about.js", function() {
          if(!next.router.components["/about"]) return
          var updatedPage = __webpack_require__(/*! ./pages/about.js */ "./pages/about.js")
          next.router.update("/about", updatedPage)
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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_languageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/languageContext */ "./contexts/languageContext.js");
/* harmony import */ var _components_pages_projects_Intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/pages/projects/Intro */ "./components/pages/projects/Intro.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\badeu\\hrdyjan1\\projects\\jan-hrdy-official\\pages\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var bonusSection = function bonusSection() {
  var _useComplexLanguageMe = Object(_contexts_languageContext__WEBPACK_IMPORTED_MODULE_1__["useComplexLanguageMethod"])(),
      t = _useComplexLanguageMe.t;

  return __jsx("section", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "online",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "big",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Online"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, t('lifeWithTech'))), __jsx("p", {
    className: "offline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "big",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Offline"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "small",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, t('lifeWithoutTech'))));
};

function About() {
  return __jsx("div", {
    id: "page-about-id",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "about-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_components_pages_projects_Intro__WEBPACK_IMPORTED_MODULE_2__["default"], {
    header: "about",
    subHeader: "aboutDescription",
    render: bonusSection,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("ul", {
    className: "timeline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "direction-r",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flag-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "hexa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "flag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Lorem ipsum."), __jsx("span", {
    className: "time-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, "Feb 2015"))), __jsx("div", {
    className: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate exercitation deserunt proident."))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "direction-l",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flag-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "hexa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "flag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "Lorem ipsum Anim."), __jsx("span", {
    className: "time-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, "Dec 2014"))), __jsx("div", {
    className: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "Lorem ipsum In ut sit in dolor nisi ex magna eu anim anim tempor dolore aliquip enim cupidatat laborum dolore."))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "direction-r",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flag-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "hexa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "flag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, "Lorem Occaecat."), __jsx("span", {
    className: "time-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, "July 2014"))), __jsx("div", {
    className: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, "Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident fugiat pariatur cillum cupidatat reprehenderit sit id dolor consectetur ut."))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "direction-l",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flag-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "hexa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "flag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, "Lorem ipsum."), __jsx("span", {
    className: "time-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, "Feb 2015"))), __jsx("div", {
    className: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, "Lorem ipsum Nisi labore aute do aute culpa magna nulla voluptate exercitation deserunt proident."))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "direction-r",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flag-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "hexa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: "flag",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, "Lorem ipsum Anim."), __jsx("span", {
    className: "time-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 19
    }
  }, "Dec 2014"))), __jsx("div", {
    className: "desc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, "Lorem ipsum In ut sit in dolor nisi ex magna eu anim anim tempor dolore aliquip enim cupidatat laborum dolore.")))), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, "Contact"), __jsx("div", {
    className: "social-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "mailto:hrdyjan1@gmail.com\"",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }, __jsx("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "envelope",
    className: "fab",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }
  }, __jsx("path", {
    fill: "currentColor",
    d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  })))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/jan.hrdy/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 15
    }
  }, __jsx("svg", {
    className: "fab",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fab",
    "data-icon": "instagram",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, __jsx("path", {
    fill: "currentColor",
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  })))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/hrdyjan1/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fab",
    "data-icon": "github",
    className: "fab",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 496 512",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, __jsx("path", {
    fill: "currentColor",
    d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  })))), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://wa.me/420606347567",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, __jsx("svg", {
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fab",
    "data-icon": "whatsapp",
    className: "fab",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }, __jsx("path", {
    fill: "currentColor",
    d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

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

/***/ 4:
/*!*******************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5Cabout.js ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5Cabout.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5Cabout.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[4,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=about.js.map