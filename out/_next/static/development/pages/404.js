(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\404.js"],{

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
      renderBottom = _ref.renderBottom,
      renderMiddle = _ref.renderMiddle;

  var _useComplexLanguageMe = Object(_contexts_languageContext__WEBPACK_IMPORTED_MODULE_1__["useComplexLanguageMethod"])(),
      t = _useComplexLanguageMe.t;

  var renderBottomElement = typeof renderBottom === 'function' ? renderBottom : function () {};
  var renderMiddleElement = typeof renderMiddle === 'function' ? renderMiddle : function () {};
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, t(header)), renderMiddleElement(), __jsx("div", {
    className: "intro-section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, t(subHeader)), renderBottomElement()));
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
  lifeWithoutTech: 'Normal bio life',
  // Timeline sections
  timeline1Date: '15 July 1996',
  timeline1Heading: 'Birth',
  timeline1Description: 'I was born in the south of the Czech Republic as a first child in family of teachers.',
  timeline2Date: '1996-2011',
  timeline2Heading: 'Childhood',
  timeline2Description: 'As I grow up, I was constantly in touch with two activities, music and sport. Most of my family are musicians, so playing the guitar and listening to The Beatles is part of my life. Regarding sports activities , ever since I am able to walk I do some sports pieces of stuff.',
  timeline3Date: '2015',
  timeline3Heading: 'University',
  timeline3Description: 'At the beginning of summer 2015, I successfully completed grammar school and found a perfect girlfriend. Then I started university life. I had chosen to attend CTU in Prague. This was a complex introduction to IT, including basics of programming, databases, system commands and so on.',
  timeline4Date: '2016',
  timeline4Heading: 'First web attempts',
  timeline4Description: 'The moment the outside world learned that I had something to do with programming, they started bombarding me with orders for websites.',
  timeline5Date: '2017',
  timeline5Heading: 'Mobile Developer',
  timeline5Description: 'Before I got a good look, I got a job offer at Definity Systems as a mobile developer. It was quite challenging at first. I did not have enough experience, but I learned quickly and soon began to work fully with the development team. We wrote applications in Xamarin for various Czech companies.',
  timeline6Date: '2019',
  timeline6Heading: 'Graduated in university',
  timeline6Description: "After exhaustive writing of my bachelor's thesis, which was represented by a mobile application to React Native, I completed college. I received mark B from the final state examination.",
  timeline7Date: '2019',
  timeline7Heading: 'Web developer',
  timeline7Description: 'In summer 2019 I have changed my employer. I was lucky. When I fell more in love with React a new opportunity has come to Prague. I got an offer to work in the company name Netvor. We develop a web app using React and PHP.',
  timeline8Date: '2019',
  timeline8Heading: 'Sweet little pug',
  timeline8Description: "During the last couple, I had a great idea to enrich our young couple with another member. So our little pack has grown and now we're three. For me, it means more dog joys and worries in life."
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_aboutPageTranslation, CZECH, {
  aboutDescription: 'Je to tady, popsat sám sebe. Budu se snažit být stručný. Vnímám sám sebe jako úplně normální lidskou bytost, která žije normální život. Existuje však pár odlišností od průměrného člověka. Lidé mě často považují za pozitivního týmového hráče s vynikajícími tvůrčími schopnostmi. Posledních několik let jsem pracoval v oblasti IT. Považuji se za "fronendistu". Mým hlavním cílem je tvorba webových nebo mobilních aplikací. Většinu času pracuji s ReactJS, což samozřejmě znamená JavaScript. Mezi mé zkušenosti patří návrh softwarové architektury, tvorba vnitřní logiky, propojení s API, využívání optimálních knihoven či zodpovídat za testování aplikace. Jsem zapojený do open-source komunity vývojářů na GitHubu. Mimo jiné občas přispívám na fórum pro programátory (StackOverflow), takže bacha, od koho kopírujete.',
  lifeWithTech: 'Život spojený s IT',
  lifeWithoutTech: 'Normální běžný život',
  timeline1Date: '15 Červenec 1996',
  timeline1Heading: 'Narození',
  timeline1Description: 'Narodil jsem se v Jižních Čechách do učitelské rodiny, tudíž mi školní výchova začala dříve než ostatním. A jsem za to rád.',
  timeline2Date: '1996-2011',
  timeline2Heading: 'Dětství',
  timeline2Description: 'Už v útlém věku jsem se propojil s hudbou a sportem. Bez nich si nedokážu představit život. Většina rodiny jsou sportovní/hudební nadšenci, takže není divu, že jsme na jedné trase. Už od dětství hraji na kytaru. Mojí hudební mantrou je britská kapela The Beatles. Co se sportu týká, začínal jsem u fotbalu, skončil jsem u basketbalu.',
  timeline3Date: '2015',
  timeline3Heading: 'Vysokoškolský život',
  timeline3Description: 'Začátkem léta 2015 jsem úspěšně dokončil gymnázium a našel perfektní přítelkyni. Poté jsem začal studovat na vysoké škole. Vybral jsem si ČVUT v Praze. Jednalo se o komplexní úvod do světa IT, včetně základů programování, databází, systémových příkazů atd.',
  timeline4Date: '2016',
  timeline4Heading: 'První IT zakázky',
  timeline4Description: 'Ve chvíli, kdy se okolní svět dozvěděl, že mám něco do činění s programováním, také mě začal bombardovat zakázkami na webové stránky.',
  timeline5Date: '2017',
  timeline5Heading: 'Mobilní vývojář',
  timeline5Description: 'Než jsem se pořádně rozkoukal, tak jsem dostal nabídku práce ve firmě Definity Systems jako mobilní vývojář. Z počátku to bylo dosti náročné. Neměl jsem dostatek zkušeností, ale učil jsem se rychle a brzy jsem začal naplno spolupracovat s vývojářským týmem. Psali jsme aplikace v Xamarinu pro různé české firmy.',
  timeline6Date: '2019',
  timeline6Heading: 'Bakalář',
  timeline6Description: 'Po vyčerpávajícím sepsání bakalářské práce, kterou reprezentovala mobilní aplikace v React Native, jsem úspěšně dostudoval vysokou školu. Od státní závěrečné zkoušky jsem si odnesl známku B.',
  timeline7Date: '2019',
  timeline7Heading: 'Webový vývojář',
  timeline7Description: 'V létě 2019 jsem změnil svého zaměstnavatele. Měl jsem štěstí. Když jsem propadl kouzlu React JS přišla z Prahy nová příležitost. Dostal jsem nabídku pracovat ve společnosti Netvor. Vyvíjíme zde webovou aplikaci pomocí Reactu a PHP.',
  timeline8Date: '2019',
  timeline8Heading: 'Malý mopsík',
  timeline8Description: 'Během posledních pár mi přišel výborný nápad obohatit naší mladý pár o dalšího člena. Tudíž se naše malá smečka rozrostla a nyní jsme na to tři. Pro mě to znamená více psích radostí a starostí v životě.'
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
  homePageSection5Description: 'Cítím se jako normální člověk, žijící normální život. Také se mimo jiné považuji za frontendistu žijícím v hlavním městě České republiky. Baví mě proměnit složité problémy v jednoduché, tvořit krásné a intuitivní webové nebo mobilní aplikace. Pokud zrovna nepřidávám na server pár řádků kódu nebo netvořím logiku aplikace, tak mě nejspíš najdete někde, kde buď jím, hraji na kytaru nebo dělám něco sportovního. Pokud se chcete dozvědět o mně více, stačí navštívit stránku "O mně"',
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
  textIntroPart2: ' Feel free to move here as you like. If you are interested in projects, that I am part of, then click',
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
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "projects", 'Projects'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "projectsDescription", 'Here is a list of projects I have participated in 2020.'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "name", 'Name'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "type", 'Type'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "search", 'Search'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "about", 'About Me'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread2, "description404", 'Oops, there is nothing in there.'), _objectSpread2), mainPageTranslation.ENGLISH, {}, aboutPageTranslation.ENGLISH)), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_languageStrings, CZECH, _objectSpread((_objectSpread3 = {
  home: 'Domů',
  about: 'O mně',
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
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "projects", 'Projekty'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "projectsDescription", 'Zde je uveden seznam projektů, na kterých jsem se podílel v roce 2020.'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "name", 'Název'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "type", 'Typ'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "search", 'Vyhledat'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "about", 'O mně'), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, "description404", 'Ups,tady nic není.'), _objectSpread3), mainPageTranslation.CZECH, {}, aboutPageTranslation.CZECH)), _languageStrings);
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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F404&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5C404.js!./":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F404&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5C404.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/404", function() {
      var mod = __webpack_require__(/*! ./pages/404.js */ "./pages/404.js")
      if(true) {
        module.hot.accept(/*! ./pages/404.js */ "./pages/404.js", function() {
          if(!next.router.components["/404"]) return
          var updatedPage = __webpack_require__(/*! ./pages/404.js */ "./pages/404.js")
          next.router.update("/404", updatedPage)
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



var Clock = function Clock() {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var deg = 6;
    var hr = document.getElementById('hr');
    var mn = document.getElementById('mn');
    var sc = document.getElementById('sc');
    var interval = setInterval(function () {
      var day = new Date();
      var hh = day.getHours() * 30;
      var mm = day.getMinutes() * deg;
      var ss = day.getSeconds() * deg;
      hr.style.transform = "rotateZ(".concat(hh + mm / 12, "deg)");
      mn.style.transform = "rotateZ(".concat(mm, "deg)");
      sc.style.transform = "rotateZ(".concat(ss, "deg)");
    });
    return function () {
      clearInterval(interval);
    };
  }, []);
  return __jsx("div", {
    className: "clock",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "hour",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "hr",
    id: "hr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "min",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mn",
    id: "mn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "sec",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "sc",
    id: "sc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(Clock, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx(_components_pages_projects_Intro__WEBPACK_IMPORTED_MODULE_1__["default"], {
    header: "404",
    subHeader: "description404",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Page404);

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

/***/ 3:
/*!***************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F404&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5C404.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F404&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5C404.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F404&absolutePagePath=C%3A%5CUsers%5Cbadeu%5Chrdyjan1%5Cprojects%5Cjan-hrdy-official%5Cpages%5C404.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=404.js.map