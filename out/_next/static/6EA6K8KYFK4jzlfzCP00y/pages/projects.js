(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},D85t:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("RHEb")}])},Dzko:function(e,t){e.exports="/_next/static/images/gigworker-9a4d177853975110b1c0e6024700f864.jpg"},P6C5:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("70F4"),a=o.a.createElement;t.a=function(e){var t=e.header,n=e.subHeader,r=e.render,c=Object(i.b)().t,s="function"===typeof r?r:function(){};return a(o.a.Fragment,null,a("h1",null,c(t)),a("div",{className:"intro-section"},a("h2",null,c(n)),s()))}},RHEb:function(e,t,n){"use strict";n.r(t),n.d(t,"searchTypes",(function(){return Z})),n.d(t,"getSuggestionsFromArray",(function(){return te}));var r=n("rePB"),o=n("a3WO");var i=n("BsWD");function a(e){return function(e){if(Array.isArray(e))return Object(o.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n("q1tI"),s=n.n(c),u=n("mrSG"),l=n("K9Ia"),p=n("8g8A"),f=function(e){function t(t){var n=e.call(this)||this;return n._value=t,n}return u.a(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),t.prototype._subscribe=function(t){var n=e.prototype._subscribe.call(this,t);return n&&!n.closed&&t.next(this._value),n},t.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new p.a;return this._value},t.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},t}(l.a),h=n("FFOo"),d=n("h9Dq"),v=new(n("CS9Q").a)(d.a);function b(e,t){return void 0===t&&(t=v),function(n){return n.lift(new y(e,t))}}var y=function(){function e(e,t){this.dueTime=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new m(e,this.dueTime,this.scheduler))},e}(),m=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.dueTime=n,o.scheduler=r,o.debouncedSubscription=null,o.lastValue=null,o.hasValue=!1,o}return u.a(t,e),t.prototype._next=function(e){this.clearDebounce(),this.lastValue=e,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(g,this.dueTime,this))},t.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},t.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var e=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(e)}},t.prototype.clearDebounce=function(){var e=this.debouncedSubscription;null!==e&&(this.remove(e),e.unsubscribe(),this.debouncedSubscription=null)},t}(h.a);function g(e){e.debouncedNext()}function w(e,t){return function(n){return n.lift(new j(e,t))}}var j=function(){function e(e,t){this.compare=e,this.keySelector=t}return e.prototype.call=function(e,t){return t.subscribe(new k(e,this.compare,this.keySelector))},e}(),k=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.keySelector=r,o.hasKey=!1,"function"===typeof n&&(o.compare=n),o}return u.a(t,e),t.prototype.compare=function(e,t){return e===t},t.prototype._next=function(e){var t;try{var n=this.keySelector;t=n?n(e):e}catch(o){return this.destination.error(o)}var r=!1;if(this.hasKey)try{r=(0,this.compare)(this.key,t)}catch(o){return this.destination.error(o)}else this.hasKey=!0;r||(this.key=t,this.destination.next(e))},t}(h.a),x=n("67Y/"),O=n("ODXe"),R=n("P6C5"),E=n("wx14"),T=n("wUKa"),N=n.n(T),S=n("ZObQ"),C=n.n(S),L=n("Dzko"),_=n.n(L),z={1587045210872:{type:"Web App",title:"Kanban",subTitle:"Helper for agile development",description:"This project is for training purposes only, using the technologies used with React. Specifically, it is Redux",year:"2020",technologies:["React, Redux, Normalizer, Lodash, Reselect"],href:"/projects/kanban",src:N.a},1587045213421:{type:"Web App",title:"Starwars List",subTitle:"Star Wars character finder",description:"A simple application only to test the combination of two technologies: Redux and Redux Observable",year:"2020",technologies:["React, Redux, Redux Observable, RxJS"],href:"/projects/starwars",src:C.a},1587414508969:{type:"Web App",title:"Gigworker",subTitle:"Find you Gig.",description:"All your favorite companies, all in one place. Online gig opportunity in US.",year:"2020",technologies:["React, Redux, Redux Observable, RxJS"],href:"/projects/starwars",src:_.a}},V={1587045210872:{type:"Webov\xe1 aplikace",title:"Kanban",subTitle:"Pom\u016fcka na agiln\xed v\xfdvoj",description:"Tento projekt slou\u017e\xed pouze pro \xfa\u010dely zau\u010den\xed k pou\u017eit\xed technologi\xed pou\u017e\xedvan\xfdch spole\u010dn\u011b s Reactem. Konkr\xe9tn\u011b se jedn\xe1 o Redux.",year:"2020",technologies:["React, Redux, Normalizer, Lodash, Reselect"],href:"/projects/kanban",src:N.a},1587045213421:{type:"Webov\xe1 aplikace",title:"Star Wars seznam",subTitle:"Vyhled\xe1va\u010d jmen postav ze starwars",description:"Jednoduch\xe1 aplikace pouze pro zkou\u0161ku spojenen\xed dvou technologi\xed: Redux a Redux Observable",year:"2020",technologies:["React, Redux, Redux Observable, RxJS"],href:"/projects/starwars",src:C.a},1587414508969:{type:"Webov\xe1 aplikace",title:"Gigworker",subTitle:"Najdi si vlastn\xed melouch.",description:"Posl\xe1n\xedm Gigworkeru je sd\xedlet cenn\xe9 informace o chvilkov\xfdch volno\u010dasov\xfdch prac\xedch nab\xedzen\xfdch na internetu. Melouchy jsem pro v\u0161echny, od za\u010d\xe1te\u010dn\xedk\u016f, kte\u0159\xed cht\u011bj\xed za\u010d\xedt s drobn\xfdm p\u0159iv\xfdd\u011blkem, a\u017e po veter\xe1ny z gigantick\xfdch firem, kte\u0159\xed se sna\u017e\xed roz\u0161\xed\u0159it svou \u0159\xed\u0161i.",year:"2020",technologies:["React, Redux, Redux Observable, RxJS"],href:"/projects/starwars",src:_.a}},P={entities:z,results:Object.keys(z)},W={entities:V,results:Object.keys(V)},D=P.entities,M=(P.results,W.entities),U=(W.results,n("YFqc")),F=n.n(U),K=n("70F4"),A=s.a.createElement,H=s.a.memo((function(e){var t=e.projects,n=(Object(K.b)().t,Object(K.d)().isCzechLanguage?M:D);return A("section",{className:"basic-grid"},t.map((function(e){var t=n[e],r=t.href.toLowerCase().includes("http"),o=r?{target:"_blank"}:{},i=r?{prefetch:!1}:{};return A(F.a,Object(E.a)({key:e,href:t.href},i),A("a",Object(E.a)({className:"card-anchor"},o),A("div",{className:"card"},A("div",{className:"post-module"},A("div",{className:"post-thumbnail"},A("div",{className:"date"},A("p",{className:"day"},t.year)),A("img",{src:t.src})),A("div",{className:"post-content"},A("div",{className:"category"},t.type),A("h3",{className:"title"},t.title),A("h4",{className:"sub_title"},t.subTitle),A("p",{className:"description"},t.description),A("div",{className:"post-meta"},t.technologies.map((function(e){return A("span",{key:e,className:"timestamp"},e)}))))))))})))})),I=s.a.createElement,q=function(e){var t=e.searchTypeValue,n=void 0===t?Z.title:t,r=e.changeSearchTypeValue,o=Object(K.b)().t;if(n!==Z.title&&n!==Z.type)return null;var i=function(e){n!==e&&r(e)},a=function(){return i(Z.title)},c=function(){return i(Z.type)};return I(s.a.Fragment,null,I("input",{id:"name-id",name:"action",type:"radio",value:"name",checked:n===Z.title,onChange:a}),I("label",{htmlFor:"name-id",onClick:a},o("name")),I("input",{id:"type-id",name:"action",type:"radio",value:"type",checked:n===Z.type,onChange:c}),I("label",{htmlFor:"type-id",onClick:c},o("type")),I("div",{id:"arrow"}))},J=s.a.createElement,B=function(e){var t=e.innerHTML,n=e.onclick,r=void 0===n?function(){}:n,o=document.createElement("li");return o.style.transition="opacity .5s linear",o.getBoundingClientRect(),o.style.opacity=1,o.innerHTML=t,o.onclick=r,o},X=function(e){var t=e.getSuggestions,n=e.subject$,r=s.a.useState(""),o=Object(O.a)(r,2),i=o[0],a=o[1],c=s.a.useState([]),u=Object(O.a)(c,2),l=u[0],p=u[1],f=s.a.useState(Z.title),h=Object(O.a)(f,2),d=h[0],v=h[1],b=s.a.useState(!1),y=Object(O.a)(b,2),m=y[0],g=y[1],w=s.a.useRef(null),j=s.a.useRef(null),k=Object(K.b)().t,x=Object(K.d)().isCzechLanguage,E=x?M:D,T=function(e){a(e),n.next(e)},N=s.a.useCallback((function(e){var t=e.target.value;return T(t)}),[T,a]),S=function(e){w.current.classList.add("hidden"),e&&(w.current.innerHTML="")},C=function(){m||g(!0)},L=function(e){"UL"===e.target.tagName||"LI"===e.target.tagName||"INPUT"===e.target.tagName||m&&g(!1)};return s.a.useEffect((function(){m?function(){S(!0);var e=i.toLowerCase();if(0===l.length){var t="Whoah! <strong>".concat(e,"</strong> is not in the index");w.current.appendChild(B({innerHTML:t}))}else if(l.length>0)for(var n=function(e){var t=e.property,n=e.hashMap;return e.ids.map((function(e){return n[e][t]})).filter((function(e,t,n){return n.indexOf(e)===t}))}({property:d,hashMap:E,ids:l}),r=function(t){var r=n[t].toLowerCase(),o="<strong>".concat(e,"</strong>"),i=r.replace(e,o);w.current.appendChild(B({onclick:function(){return T(r)},innerHTML:i}))},o=0;o<n.length&&o<5;o++)r(o);"term-list"!==w.current.className&&(w.current.className="term-list")}():S()}),[m,l]),s.a.useEffect((function(){var e=document.getElementsByTagName("body")[0];return e.addEventListener("click",L),j.current.addEventListener("focusin",C),j.current.addEventListener("keyup",C),function(){e.removeEventListener("click",L),j.current.removeEventListener("focusin",C),j.current.removeEventListener("keyup",C)}}),[L,C]),s.a.useEffect((function(){console.log("searchTypeValue",d);var e=t(n,d).subscribe((function(e){p(e)}),(function(e){console.error(e)}));return function(){return e.unsubscribe()}}),[d,t,n]),s.a.useEffect((function(){a("")}),[x]),J("div",{id:"project-container"},J(R.a,{header:"projects",subHeader:"projectsDescription"}),J("div",{className:"wrapper-search"},J(q,{searchTypeValue:d,changeSearchTypeValue:v}),J("input",{type:"text",id:"searchBox",ref:j,autoComplete:"off",className:"search-field",value:i,onChange:N,placeholder:"".concat(k("search"),"...")})),J("ul",{ref:w,id:"searchResults",className:"term-list hidden"}),J(H,{projects:l}))},G=n("44Ds"),Q=n.n(G),Y=s.a.createElement,Z={title:"title",type:"type"},$=function(e){return Object.keys(e)[0]},ee=function(e){return function(t,n){var r=$(n);return n[r].toLowerCase().includes(e.toLowerCase())?[].concat(a(t),[r]):t}},te=function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Z.title,o=e.results,i=e.entities,a=Q()((function(e){return Object.entries(i).map((function(t){return Object(r.a)({},t[0],t[1][e])}))}));return t.pipe(b(200),w(),Object(x.a)((function(e){return console.log("searchValue",e),e&&""!==e?a(n).reduce(ee(e),[]):o})))}};t.default=function(){var e=Object(K.d)().isCzechLanguage,t=te(e?W:P),n=new f("");return Y("div",{id:"page-project-id"},Y(X,{getSuggestions:t,subject$:n}))}},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},YFqc:function(e,t,n){e.exports=n("cTJO")},ZObQ:function(e,t){e.exports="/_next/static/images/starwars-b2712462500a4bb7cbd0f8b40b3b80fd.jpg"},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),i=n("tCBg"),a=n("T0f4"),c=n("48fX");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var u=n("AroE"),l=n("7KCV");t.__esModule=!0,t.default=void 0;var p,f=l(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=u(n("nOHt"));function b(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,m=window.IntersectionObserver,g={};function w(){return p||(m?p=new m((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){c(u,e);var t,n=(t=u,function(){var e,n=a(t);if(s()){var r=a(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function u(e){var t;return r(this,u),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:b(e),as:t?b(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),a=i.href,c=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var s=window.location.pathname;a=(0,h.resolve)(s,a),c=c?(0,h.resolve)(s,c):a,e.preventDefault();var u=t.props.scroll;null==u&&(u=c.indexOf("#")<0),v.default[t.props.replace?"replace":"push"](a,c,{shallow:t.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(u,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var i=f.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),f.default.cloneElement(i,a)}}]),u}(f.Component);t.default=j},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},wUKa:function(e,t){e.exports="/_next/static/images/kanban-4ff59bfd5548e273d7169b4a0f2f955b.png"},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["D85t",0,1,2,3,6,4]]]);