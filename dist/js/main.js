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

/***/ "./src/js/components/initialiser.js":
/*!******************************************!*\
  !*** ./src/js/components/initialiser.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable */\n\n/* eslint-enable */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"time.timeago\").timeago();\n  });\n});\n\n//# sourceURL=webpack:///./src/js/components/initialiser.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _thirdparty_loadtwitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thirdparty/loadtwitter */ \"./src/js/thirdparty/loadtwitter.js\");\n/* harmony import */ var _thirdparty_rendertweets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thirdparty/rendertweets */ \"./src/js/thirdparty/rendertweets.js\");\n/* harmony import */ var _components_initialiser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/initialiser */ \"./src/js/components/initialiser.js\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_3__);\n// Define globally exposed module objects\n\n/* eslint-disable */\n\n\n\n\nObject(_thirdparty_loadtwitter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_thirdparty_rendertweets__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_components_initialiser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n/* eslint-enable */\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/thirdparty/loadtwitter.js":
/*!******************************************!*\
  !*** ./src/js/thirdparty/loadtwitter.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  // see https://dev.twitter.com/web/javascript/loading\n  console.log('**** loadtwitter default function ****');\n\n  window.twttr = function (d, s, id) {\n    var js,\n        fjs = d.getElementsByTagName(s)[0],\n        t = window.twttr || {};\n    if (d.getElementById(id)) return t;\n    js = d.createElement(s);\n    js.id = id;\n    js.src = \"https://platform.twitter.com/widgets.js\";\n    fjs.parentNode.insertBefore(js, fjs);\n    t._e = [];\n\n    t.ready = function (f) {\n      t._e.push(f);\n    };\n\n    return t;\n  }(document, \"script\", \"twitter-wjs\");\n});\n\n//# sourceURL=webpack:///./src/js/thirdparty/loadtwitter.js?");

/***/ }),

/***/ "./src/js/thirdparty/rendertweets.js":
/*!*******************************************!*\
  !*** ./src/js/thirdparty/rendertweets.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  twttr.ready(function (twttr) {\n    console.log('Twitter ready');\n    var tweets = document.getElementsByClassName(\"tweet\");\n    var i;\n\n    for (i = 0; i < tweets.length; i++) {\n      var tweet = tweets[i];\n      var id = tweet.getAttribute(\"tweetID\");\n      console.log('Loading ', id);\n      twttr.widgets.createTweet(id, tweet, {\n        conversation: 'none',\n        // or all\n        cards: 'visible',\n        // or visible\n        linkColor: '#cc0000',\n        // default is blue\n        theme: 'light',\n        // or dark,\n        'align': 'center'\n      });\n    }\n\n    twttr.events.bind('loaded', function (event) {\n      console.log('Loaded');\n      event.widgets.forEach(function (widget) {\n        console.log(\"Created widget\", widget.id);\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/js/thirdparty/rendertweets.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });