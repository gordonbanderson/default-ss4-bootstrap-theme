/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../vendor/bramdeleeuw/cookieconsent/javascript/src/cookieconsent.js":
/*!*********************************************************************************!*\
  !*** /var/www/vendor/bramdeleeuw/cookieconsent/javascript/src/cookieconsent.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookieConsent; });
class CookieConsent {
  constructor() {
    this.cookieName = 'CookieConsent';
    this.cookieJar = [];
    this.consent = [];
    let cookies = document.cookie ? document.cookie.split('; ') : [];

    for (let i = 0; i < cookies.length; i++) {
      let parts = cookies[i].split('=');
      let key = parts[0];
      this.cookieJar[key] = parts.slice(1).join('=');
    }

    this.consent = this.isSet() ? decodeURIComponent(this.cookieJar[this.cookieName]).split(',') : [];
  }

  isSet() {
    return this.cookieJar[this.cookieName] !== undefined;
  }

  check(group) {
    return this.consent.indexOf(group) !== -1;
  }

  pushToDataLayer() {
    if (typeof dataLayer !== 'undefined') {
      if (this.check('Prefrences')) {
        dataLayer.push({
          'event': 'cookieconsent_preferences'
        });
      }

      if (this.check('Analytics')) {
        dataLayer.push({
          'event': 'cookieconsent_analytics'
        });
      }

      if (this.check('Marketing')) {
        dataLayer.push({
          'event': 'cookieconsent_marketing'
        });
      }
    }
  }

}

/***/ }),

/***/ "./src/js/components/cookieconsentpopup.js":
/*!*************************************************!*\
  !*** ./src/js/components/cookieconsentpopup.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_bramdeleeuw_cookieconsent_javascript_src_cookieconsent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../vendor/bramdeleeuw/cookieconsent/javascript/src/cookieconsent */ "../../vendor/bramdeleeuw/cookieconsent/javascript/src/cookieconsent.js");
/* eslint-disable */


/* eslint-enable */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  console.log('Cookie consent T1');
  var consent = new _vendor_bramdeleeuw_cookieconsent_javascript_src_cookieconsent__WEBPACK_IMPORTED_MODULE_1__["default"]();

  if (!consent.isSet()) {
    console.log('Cookie consent T2');
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#cookieConsentModal').modal();
    alert('show cookie modal');
  }

  console.log('Cookie consent T3');
});

/***/ }),

/***/ "./src/js/components/initialiser.js":
/*!******************************************!*\
  !*** ./src/js/components/initialiser.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  // timeago
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("time.timeago").timeago();
  }); // slider

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.flexslider').flexslider({
    animation: "slide",
    prevText: "<i class='fa fa-arrow-left'></i>",
    nextText: "<i class='fa fa-arrow-right'></i>"
  });
});

/***/ }),

/***/ "./src/js/components/lazysizes.js":
/*!****************************************!*\
  !*** ./src/js/components/lazysizes.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/* eslint-enable */

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var lazy = function lazy() {
    document.addEventListener('lazyloaded', function (e) {
      e.target.parentNode.parentNode.classList.add('image-loaded');
      e.target.parentNode.parentNode.classList.remove('loading');
    });
  };

  lazy();
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _thirdparty_loadtwitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thirdparty/loadtwitter */ "./src/js/thirdparty/loadtwitter.js");
/* harmony import */ var _thirdparty_rendertweets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thirdparty/rendertweets */ "./src/js/thirdparty/rendertweets.js");
/* harmony import */ var _components_lazysizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/lazysizes */ "./src/js/components/lazysizes.js");
/* harmony import */ var _components_initialiser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/initialiser */ "./src/js/components/initialiser.js");
/* harmony import */ var _components_cookieconsentpopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cookieconsentpopup */ "./src/js/components/cookieconsentpopup.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_5__);
// Define globally exposed module objects

/* eslint-disable */



 //import cookieconsent from '../../../../vendor/bramdeleeuw/cookieconsent/javascript/src/cookieconsent.js';



Object(_components_lazysizes__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_thirdparty_loadtwitter__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_thirdparty_rendertweets__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_components_initialiser__WEBPACK_IMPORTED_MODULE_3__["default"])(); //cookieconsent();

Object(_components_cookieconsentpopup__WEBPACK_IMPORTED_MODULE_4__["default"])();
/* eslint-enable */

/***/ }),

/***/ "./src/js/thirdparty/loadtwitter.js":
/*!******************************************!*\
  !*** ./src/js/thirdparty/loadtwitter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  // see https://dev.twitter.com/web/javascript/loading
  console.log('**** loadtwitter default function ****');

  window.twttr = function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];

    t.ready = function (f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs");
});

/***/ }),

/***/ "./src/js/thirdparty/rendertweets.js":
/*!*******************************************!*\
  !*** ./src/js/thirdparty/rendertweets.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  twttr.ready(function (twttr) {
    console.log('Twitter ready');
    var tweets = document.getElementsByClassName("tweet");
    var i;

    for (i = 0; i < tweets.length; i++) {
      var tweet = tweets[i];
      var id = tweet.getAttribute("tweetID");
      console.log('Loading ', id);
      twttr.widgets.createTweet(id, tweet, {
        conversation: 'none',
        // or all
        cards: 'visible',
        // or visible
        linkColor: '#cc0000',
        // default is blue
        theme: 'light',
        // or dark,
        'align': 'center'
      });
    }

    twttr.events.bind('loaded', function (event) {
      console.log('Loaded');
      event.widgets.forEach(function (widget) {
        console.log("Created widget", widget.id);
      });
    });
  });
});

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map