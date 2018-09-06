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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thirdparty_waypoints_min__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thirdparty_waypoints_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__thirdparty_waypoints_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thirdparty_jquery_counterup__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__thirdparty_jquery_counterup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__thirdparty_jquery_counterup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thirdparty_owl_carousel__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thirdparty_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__thirdparty_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thirdparty_jquery_elevatezoom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thirdparty_jquery_elevatezoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__thirdparty_jquery_elevatezoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thirdparty_particles__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thirdparty_particles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__thirdparty_particles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__thirdparty_app__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__thirdparty_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__thirdparty_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__thirdparty_theme__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__thirdparty_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__thirdparty_theme__);
// Define globally exposed module objects
/* eslint-disable */

// Define local components
/*
import navigation from './components/navigation';
import content from './components/content';
import sitemap from './components/sitemap';
import search from './components/search';
import form from './components/form';
import img from './components/img';

navigation();
content();
sitemap();
search();
form();
img();

<script type="text/javascript" src="js/jquery.min.js"></script> <!-- jquery library js -->
  <script type="text/javascript" src="js/bootstrap.min.js"></script> <!-- bootstrap js -->
  <script type="text/javascript" src="js/waypoints.min.js"></script> <!-- facts count js -->
  <script type="text/javascript" src="js/jquery.counterup.js"></script> <!-- facts count js-->
  <script type="text/javascript" src="js/owl.carousel.js"></script> <!-- owl carousel js-->
  <script type="text/javascript" src="js/jquery.elevatezoom.js"></script> <!-- image zoom js-->
  <script type="text/javascript" src="js/particles.js"></script> <!-- particales js-->
  <script type="text/javascript" src="js/app.js"></script> <!-- particales js-->
  <script type="text/javascript" src="js/theme.js"></script> <!-- custom js -->

*/









__WEBPACK_IMPORTED_MODULE_0__thirdparty_waypoints_min___default()();
__WEBPACK_IMPORTED_MODULE_1__thirdparty_jquery_counterup___default()();
__WEBPACK_IMPORTED_MODULE_2__thirdparty_owl_carousel___default()();
__WEBPACK_IMPORTED_MODULE_3__thirdparty_jquery_elevatezoom___default()();
__WEBPACK_IMPORTED_MODULE_4__thirdparty_particles___default()();
__WEBPACK_IMPORTED_MODULE_5__thirdparty_app___default()();
__WEBPACK_IMPORTED_MODULE_6__thirdparty_theme___default()();

/* eslint-enable */

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function () {
  var t = [].indexOf || function (t) {
    for (var e = 0, n = this.length; e < n; e++) {
      if (e in this && this[e] === t) return e;
    }return -1;
  },
      e = [].slice;(function (t, e) {
    if (true) {
      return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (n) {
        return e(n, t);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
      return e(t.jQuery, t);
    }
  })(this, function (n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;i = n(r);c = t.call(r, "ontouchstart") >= 0;s = { horizontal: {}, vertical: {} };f = 1;a = {};u = "waypoints-context-id";p = "resize.waypoints";y = "scroll.waypoints";v = 1;w = "waypoints-waypoint-ids";g = "waypoint";m = "waypoints";o = function () {
      function t(t) {
        var e = this;this.$element = t;this.element = t[0];this.didResize = false;this.didScroll = false;this.id = "context" + f++;this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };this.waypoints = { horizontal: {}, vertical: {} };t.data(u, this.id);a[this.id] = this;t.bind(y, function () {
          var t;if (!(e.didScroll || c)) {
            e.didScroll = true;t = function t() {
              e.doScroll();return e.didScroll = false;
            };return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });t.bind(p, function () {
          var t;if (!e.didResize) {
            e.didResize = true;t = function t() {
              n[m]("refresh");return e.didResize = false;
            };return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }t.prototype.doScroll = function () {
        var t,
            e = this;t = { horizontal: { newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }n.each(t, function (t, r) {
          var i, o, l;l = [];o = r.newScroll > r.oldScroll;i = o ? r.forward : r.backward;n.each(e.waypoints[t], function (t, e) {
            var n, i;if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });l.sort(function (t, e) {
            return t.offset - e.offset;
          });if (!o) {
            l.reverse();
          }return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });return this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll };
      };t.prototype.refresh = function () {
        var t,
            e,
            r,
            i = this;r = n.isWindow(this.element);e = this.$element.offset();this.doScroll();t = { horizontal: { contextOffset: r ? 0 : e.left, contextScroll: r ? 0 : this.oldScroll.x, contextDimension: this.$element.width(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: r ? 0 : e.top, contextScroll: r ? 0 : this.oldScroll.y, contextDimension: r ? n[m]("viewportHeight") : this.$element.height(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;i = r.options.offset;l = r.offset;o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil(e.contextDimension * i / 100);
              }
            }r.offset = o - e.contextOffset + e.contextScroll - i;if (r.options.onlyOnScroll && l != null || !r.enabled) {
              return;
            }if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };t.prototype.checkEmpty = function () {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(" "));return delete a[this.id];
        }
      };return t;
    }();l = function () {
      function t(t, e, r) {
        var i, o;r = n.extend({}, n.fn[g].defaults, r);if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;t = n[m]("viewportHeight");if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }return t - n(this).outerHeight();
          };
        }this.$element = t;this.element = t[0];this.axis = r.horizontal ? "horizontal" : "vertical";this.callback = r.handler;this.context = e;this.enabled = r.enabled;this.id = "waypoints" + v++;this.offset = null;this.options = r;e.waypoints[this.axis][this.id] = this;s[this.axis][this.id] = this;i = (o = t.data(w)) != null ? o : [];i.push(this.id);t.data(w, i);
      }t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }if (this.callback != null) {
          this.callback.apply(this.element, t);
        }if (this.options.triggerOnce) {
          return this.destroy();
        }
      };t.prototype.disable = function () {
        return this.enabled = false;
      };t.prototype.enable = function () {
        this.context.refresh();return this.enabled = true;
      };t.prototype.destroy = function () {
        delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty();
      };t.getWaypointsByElement = function (t) {
        var e, r;r = n(t).data(w);if (!r) {
          return [];
        }e = n.extend({}, s.horizontal, s.vertical);return n.map(r, function (t) {
          return e[t];
        });
      };return t;
    }();d = { init: function init(t, e) {
        var r;if (e == null) {
          e = {};
        }if ((r = e.handler) == null) {
          e.handler = t;
        }this.each(function () {
          var t, r, i, s;t = n(this);i = (s = e.context) != null ? s : n.fn[g].defaults.context;if (!n.isWindow(i)) {
            i = t.closest(i);
          }i = n(i);r = a[i.data(u)];if (!r) {
            r = new o(i);
          }return new l(t, r, e);
        });n[m]("refresh");return this;
      }, disable: function disable() {
        return d._invoke(this, "disable");
      }, enable: function enable() {
        return d._invoke(this, "enable");
      }, destroy: function destroy() {
        return d._invoke(this, "destroy");
      }, prev: function prev(t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      }, next: function next(t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      }, _traverse: function _traverse(t, e, i) {
        var o, l;if (t == null) {
          t = "vertical";
        }if (e == null) {
          e = r;
        }l = h.aggregate(e);o = [];this.each(function () {
          var e;e = n.inArray(this, l[t]);return i(o, e, l[t]);
        });return this.pushStack(o);
      }, _invoke: function _invoke(t, e) {
        t.each(function () {
          var t;t = l.getWaypointsByElement(this);return n.each(t, function (t, n) {
            n[e]();return true;
          });
        });return this;
      } };n.fn[g] = function () {
      var t, r;r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return n.error("The " + r + " method does not exist in jQuery Waypoints.");
      }
    };n.fn[g].defaults = { context: r, continuous: true, enabled: true, horizontal: false, offset: 0, triggerOnce: false };h = { refresh: function refresh() {
        return n.each(a, function (t, e) {
          return e.refresh();
        });
      }, viewportHeight: function viewportHeight() {
        var t;return (t = r.innerHeight) != null ? t : i.height();
      }, aggregate: function aggregate(t) {
        var e, r, i;e = s;if (t) {
          e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
        }if (!e) {
          return [];
        }r = { horizontal: [], vertical: [] };n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });i.sort(function (t, e) {
            return t.offset - e.offset;
          });r[t] = n.map(i, function (t) {
            return t.element;
          });return r[t] = n.unique(r[t]);
        });return r;
      }, above: function above(t) {
        if (t == null) {
          t = r;
        }return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      }, below: function below(t) {
        if (t == null) {
          t = r;
        }return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      }, left: function left(t) {
        if (t == null) {
          t = r;
        }return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      }, right: function right(t) {
        if (t == null) {
          t = r;
        }return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      }, enable: function enable() {
        return h._invoke("enable");
      }, disable: function disable() {
        return h._invoke("disable");
      }, destroy: function destroy() {
        return h._invoke("destroy");
      }, extendFn: function extendFn(t, e) {
        return d[t] = e;
      }, _invoke: function _invoke(t) {
        var e;e = n.extend({}, s.vertical, s.horizontal);return n.each(e, function (e, n) {
          n[t]();return true;
        });
      }, _filter: function _filter(t, e, r) {
        var i, o;i = a[n(t).data(u)];if (!i) {
          return [];
        }o = [];n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });o.sort(function (t, e) {
          return t.offset - e.offset;
        });return n.map(o, function (t) {
          return t.element;
        });
      } };n[m] = function () {
      var t, n;n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };return i.load(function () {
      return n[m]("refresh");
    });
  });
}).call(this);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {!function (t) {
  "use strict";
  t.fn.counterUp = function (e) {
    var n = t.extend({ time: 400, delay: 10 }, e);return this.each(function () {
      var e = t(this),
          u = n,
          a = function a() {
        var t = [],
            n = u.time / u.delay,
            a = e.text(),
            r = /[0-9]+,[0-9]+/.test(a);a = a.replace(/,/g, "");for (var o = (/^[0-9]+$/.test(a), /^[0-9]+\.[0-9]+$/.test(a)), c = o ? (a.split(".")[1] || []).length : 0, i = n; i >= 1; i--) {
          var s = parseInt(a / n * i);if (o && (s = parseFloat(a / n * i).toFixed(c)), r) for (; /(\d+)(\d{3})/.test(s.toString());) {
            s = s.toString().replace(/(\d+)(\d{3})/, "$1,$2");
          }t.unshift(s);
        }e.data("counterup-nums", t), e.text("0");var d = function d() {
          e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), u.delay) : (delete e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null));
        };e.data("counterup-func", d), setTimeout(e.data("counterup-func"), u.delay);
      };e.waypoint(a, { offset: "100%", triggerOnce: !0 });
    });
  };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, jQuery) {!function (t, e, i, s) {
  function n(e, i) {
    this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, u), this.e = t.extend({}, g), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function (t, e) {
      this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this);
    }, this)), t.each(n.Pipe, t.proxy(function (e, i) {
      this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
    }, this)), this.setup(), this.initialize();
  }function o(t) {
    if (t.touches !== s) return { x: t.touches[0].pageX, y: t.touches[0].pageY };if (t.touches === s) {
      if (t.pageX !== s) return { x: t.pageX, y: t.pageY };if (t.pageX === s) return { x: t.clientX, y: t.clientY };
    }
  }function r(t) {
    var e,
        s,
        n = i.createElement("div"),
        o = t;for (e in o) {
      if (s = o[e], "undefined" != typeof n.style[s]) return n = null, [s, e];
    }return [!1];
  }function a() {
    return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1];
  }function h() {
    return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
  }function l() {
    return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0];
  }function c() {
    return "ontouchstart" in e || !!navigator.msMaxTouchPoints;
  }function d() {
    return e.navigator.msPointerEnabled;
  }var p, u, g;p = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, u = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, g = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, n.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, n.Width = { Default: "default", Inner: "inner", Outer: "outer" }, n.Plugins = {}, n.Pipe = [{ filter: ["width", "items", "settings"], run: function run(t) {
      t.current = this._items && this._items[this.relative(this._current)];
    } }, { filter: ["items", "settings"], run: function run() {
      var t = this._clones,
          e = this.$stage.children(".cloned");(e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = []);
    } }, { filter: ["items", "settings"], run: function run() {
      var t,
          e,
          i = this._clones,
          s = this._items,
          n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;for (t = 0, e = Math.abs(n / 2); e > t; t++) {
        n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")));
      }
    } }, { filter: ["width", "items", "settings"], run: function run() {
      var t,
          e,
          i,
          s = this.settings.rtl ? 1 : -1,
          n = (this.width() / this.settings.items).toFixed(3),
          o = 0;for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) {
        t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o);
      }
    } }, { filter: ["width", "items", "settings"], run: function run() {
      var e,
          i,
          s = (this.width() / this.settings.items).toFixed(3),
          n = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" };if (this.$stage.css(n), n = { width: this.settings.autoWidth ? "auto" : s - this.settings.margin }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function (t) {
        return t > 1;
      }).length > 0) for (e = 0, i = this._coordinates.length; i > e; e++) {
        n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
      } else this.$stage.children().css(n);
    } }, { filter: ["width", "items", "settings"], run: function run(t) {
      t.current && this.reset(this.$stage.children().index(t.current));
    } }, { filter: ["position"], run: function run() {
      this.animate(this.coordinates(this._current));
    } }, { filter: ["width", "position", "items", "settings"], run: function run() {
      var t,
          e,
          i,
          s,
          n = this.settings.rtl ? 1 : -1,
          o = 2 * this.settings.stagePadding,
          r = this.coordinates(this.current()) + o,
          a = r + this.width() * n,
          h = [];for (i = 0, s = this._coordinates.length; s > i; i++) {
        t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
      }this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass));
    } }], n.prototype.initialize = function () {
    if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
      var e, i, n;if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1;
    }this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized");
  }, n.prototype.setup = function () {
    var e = this.viewport(),
        i = this.options.responsive,
        s = -1,
        n = null;i ? (t.each(i, function (t) {
      e >= t && t > s && (s = Number(t));
    }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function (t, e) {
      return e.replace(/\b owl-responsive-\S+/g, "");
    }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", { property: { name: "settings", value: n } }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }));
  }, n.prototype.optionsLogic = function () {
    this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
  }, n.prototype.prepare = function (e) {
    var i = this.trigger("prepare", { content: e });return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", { content: i.data }), i.data;
  }, n.prototype.update = function () {
    for (var e = 0, i = this._pipe.length, s = t.proxy(function (t) {
      return this[t];
    }, this._invalidated), n = {}; i > e;) {
      (this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
    }this._invalidated = {};
  }, n.prototype.width = function (t) {
    switch (t = t || n.Width.Default) {case n.Width.Inner:case n.Width.Outer:
        return this._width;default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin;}
  }, n.prototype.refresh = function () {
    if (0 === this._items.length) return !1;new Date().getTime();this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed");
  }, n.prototype.eventsCall = function () {
    this.e._onDragStart = t.proxy(function (t) {
      this.onDragStart(t);
    }, this), this.e._onDragMove = t.proxy(function (t) {
      this.onDragMove(t);
    }, this), this.e._onDragEnd = t.proxy(function (t) {
      this.onDragEnd(t);
    }, this), this.e._onResize = t.proxy(function (t) {
      this.onResize(t);
    }, this), this.e._transitionEnd = t.proxy(function (t) {
      this.transitionEnd(t);
    }, this), this.e._preventClick = t.proxy(function (t) {
      this.preventClick(t);
    }, this);
  }, n.prototype.onThrottledResize = function () {
    e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
  }, n.prototype.onResize = function () {
    return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1;
  }, n.prototype.eventsRouter = function (t) {
    var e = t.type;"mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t);
  }, n.prototype.internalEvents = function () {
    var i = (c(), d());this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function (t) {
      this.eventsRouter(t);
    }, this)), this.$stage.on("dragstart", function () {
      return !1;
    }), this.$stage.get(0).onselectstart = function () {
      return !1;
    }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function (t) {
      this.eventsRouter(t);
    }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this));
  }, n.prototype.onDragStart = function (s) {
    var n, r, a, h;if (n = s.originalEvent || s || e.event, 3 === n.which || this.state.isTouch) return !1;if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = new Date().getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) h = this.getTransformProperty(), this.drag.offsetX = h, this.animate(h), this.state.inMotion = !0;else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function (t) {
      this.eventsRouter(t);
    }, this));
  }, n.prototype.onDragMove = function (t) {
    var i, n, r, a, h, l;this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), h = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), l = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + l), h + l)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)));
  }, n.prototype.onDragEnd = function (e) {
    var s, n, o;if (this.state.isTouch) {
      if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;this.drag.endTime = new Date().getTime(), s = this.drag.endTime - this.drag.startTime, n = Math.abs(this.drag.distance), (n > 3 || s > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents");
    }
  }, n.prototype.removeClick = function (i) {
    this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function () {
      t(i).off("click.preventClick");
    }, 300);
  }, n.prototype.preventClick = function (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick");
  }, n.prototype.getTransformProperty = function () {
    var t, i;return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12];
  }, n.prototype.closest = function (e) {
    var i = -1,
        s = 30,
        n = this.width(),
        o = this.coordinates();return this.settings.freeDrag || t.each(o, t.proxy(function (t, r) {
      return e > r - s && r + s > e ? i = t : this.op(e, "<", r) && this.op(e, ">", o[t + 1] || r - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i;
    }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i;
  }, n.prototype.animate = function (e) {
    this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + e + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: e + "px" }) : this.$stage.animate({ left: e }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function () {
      this.state.inMotion && this.transitionEnd();
    }, this));
  }, n.prototype.current = function (t) {
    if (t === s) return this._current;if (0 === this._items.length) return s;if (t = this.normalize(t), this._current !== t) {
      var e = this.trigger("change", { property: { name: "position", value: t } });e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
    }return this._current;
  }, n.prototype.invalidate = function (t) {
    this._invalidated[t] = !0;
  }, n.prototype.reset = function (t) {
    t = this.normalize(t), t !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]));
  }, n.prototype.normalize = function (e, i) {
    var n = i ? this._items.length : this._items.length + this._clones.length;return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e));
  }, n.prototype.relative = function (t) {
    return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0);
  }, n.prototype.maximum = function (t) {
    var e,
        i,
        s,
        n = 0,
        o = this.settings;if (t) return this._items.length - 1;if (!o.loop && o.center) e = this._items.length - 1;else if (o.loop || o.center) {
      if (o.loop || o.center) e = this._items.length + o.items;else {
        if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width(); (s = this.coordinates(n)) && !(s * revert >= i);) {
          e = ++n;
        }
      }
    } else e = this._items.length - o.items;return e;
  }, n.prototype.minimum = function (t) {
    return t ? 0 : this._clones.length / 2;
  }, n.prototype.items = function (t) {
    return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]);
  }, n.prototype.mergers = function (t) {
    return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]);
  }, n.prototype.clones = function (e) {
    var i = this._clones.length / 2,
        n = i + this._items.length,
        o = function o(t) {
      return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2;
    };return e === s ? t.map(this._clones, function (t, e) {
      return o(e);
    }) : t.map(this._clones, function (t, i) {
      return t === e ? o(i) : null;
    });
  }, n.prototype.speed = function (t) {
    return t !== s && (this._speed = t), this._speed;
  }, n.prototype.coordinates = function (e) {
    var i = null;return e === s ? t.map(this._coordinates, t.proxy(function (t, e) {
      return this.coordinates(e);
    }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i);
  }, n.prototype.duration = function (t, e, i) {
    return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed);
  }, n.prototype.to = function (i, s) {
    if (this.settings.loop) {
      var n = i - this.relative(this.current()),
          o = this.current(),
          r = this.current(),
          a = this.current() + n,
          h = 0 > r - a ? !0 : !1,
          l = this._clones.length + this._items.length;a < this.settings.items && h === !1 ? (o = r + this._items.length, this.reset(o)) : a >= l - this.settings.items && h === !0 && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function () {
        this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update();
      }, this), 30);
    } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update();
  }, n.prototype.next = function (t) {
    t = t || !1, this.to(this.relative(this.current()) + 1, t);
  }, n.prototype.prev = function (t) {
    t = t || !1, this.to(this.relative(this.current()) - 1, t);
  }, n.prototype.transitionEnd = function (t) {
    return t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"));
  }, n.prototype.viewport = function () {
    var s;if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();else if (e.innerWidth) s = e.innerWidth;else {
      if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";s = i.documentElement.clientWidth;
    }return s;
  }, n.prototype.replace = function (e) {
    this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
      return 1 === this.nodeType;
    }).each(t.proxy(function (t, e) {
      e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1);
    }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
  }, n.prototype.add = function (t, e) {
    e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", { content: t, position: e }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: t, position: e });
  }, n.prototype.remove = function (t) {
    t = this.normalize(t, !0), t !== s && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t }));
  }, n.prototype.addTriggerableEvents = function () {
    var e = t.proxy(function (e, i) {
      return t.proxy(function (t) {
        t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]));
      }, this);
    }, this);t.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, t.proxy(function (t, i) {
      this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"));
    }, this));
  }, n.prototype.watchVisibility = function () {
    function i(t) {
      return t.offsetWidth > 0 && t.offsetHeight > 0;
    }function s() {
      i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile));
    }i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(s, this), 500));
  }, n.prototype.preloadAutoWidthImages = function (e) {
    var i, s, n, o;i = 0, s = this, e.each(function (r, a) {
      n = t(a), o = new Image(), o.onload = function () {
        i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize());
      }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina");
    });
  }, n.prototype.destroy = function () {
    this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);for (var s in this._plugins) {
      this._plugins[s].destroy();
    }(this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {}, this.$stage.off("dragstart", function () {
      return !1;
    })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap();
  }, n.prototype.op = function (t, e, i) {
    var s = this.settings.rtl;switch (e) {case "<":
        return s ? t > i : i > t;case ">":
        return s ? i > t : t > i;case ">=":
        return s ? i >= t : t >= i;case "<=":
        return s ? t >= i : i >= t;}
  }, n.prototype.on = function (t, e, i, s) {
    t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i);
  }, n.prototype.off = function (t, e, i, s) {
    t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i);
  }, n.prototype.trigger = function (e, i, s) {
    var n = { item: { count: this._items.length, index: this.current() } },
        o = t.camelCase(t.grep(["on", e, s], function (t) {
      return t;
    }).join("-").toLowerCase()),
        r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, n, i));return this._supress[e] || (t.each(this._plugins, function (t, e) {
      e.onTrigger && e.onTrigger(r);
    }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r;
  }, n.prototype.suppress = function (e) {
    t.each(e, t.proxy(function (t, e) {
      this._supress[e] = !0;
    }, this));
  }, n.prototype.release = function (e) {
    t.each(e, t.proxy(function (t, e) {
      delete this._supress[e];
    }, this));
  }, n.prototype.browserSupport = function () {
    if (this.support3d = l(), this.support3d) {
      this.transformVendor = h();var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "";
    }this.state.orientation = e.orientation;
  }, t.fn.owlCarousel = function (e) {
    return this.each(function () {
      t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e));
    });
  }, t.fn.owlCarousel.Constructor = n;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (t, e, i, s) {
  var n = function n(e) {
    this._core = e, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel": t.proxy(function (e) {
        if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function (t, e) {
          this.load(e);
        }, this); n++ < s;) {
          this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a);
        }
      }, this) }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };n.Defaults = { lazyLoad: !1 }, n.prototype.load = function (i) {
    var s = this._core.$stage.children().eq(i),
        n = s && s.find(".owl-lazy");!n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function (i, s) {
      var n,
          o = t(s),
          r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");this._core.trigger("load", { element: o, url: r }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function () {
        o.css("opacity", 1), this._core.trigger("loaded", { element: o, url: r }, "lazy");
      }, this)).attr("src", r) : (n = new Image(), n.onload = t.proxy(function () {
        o.css({ "background-image": "url(" + r + ")", opacity: "1" }), this._core.trigger("loaded", { element: o, url: r }, "lazy");
      }, this), n.src = r);
    }, this)), this._loaded.push(s.get(0)));
  }, n.prototype.destroy = function () {
    var t, e;for (t in this.handlers) {
      this._core.$element.off(t, this.handlers[t]);
    }for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (t, e, i, s) {
  var n = function n(e) {
    this._core = e, this._handlers = { "initialized.owl.carousel": t.proxy(function () {
        this._core.settings.autoHeight && this.update();
      }, this), "changed.owl.carousel": t.proxy(function (t) {
        this._core.settings.autoHeight && "position" == t.property.name && this.update();
      }, this), "loaded.owl.lazy": t.proxy(function (t) {
        this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update();
      }, this) }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers);
  };n.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, n.prototype.update = function () {
    this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass);
  }, n.prototype.destroy = function () {
    var t, e;for (t in this._handlers) {
      this._core.$element.off(t, this._handlers[t]);
    }for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (t, e, i, s) {
  var n = function n(e) {
    this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = { "resize.owl.carousel": t.proxy(function (t) {
        this._core.settings.video && !this.isInFullScreen() && t.preventDefault();
      }, this), "refresh.owl.carousel changed.owl.carousel": t.proxy(function (t) {
        this._playing && this.stop();
      }, this), "prepared.owl.carousel": t.proxy(function (e) {
        var i = t(e.content).find(".owl-video");i.length && (i.css("display", "none"), this.fetch(i, t(e.content)));
      }, this) }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (t) {
      this.play(t);
    }, this));
  };n.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, n.prototype.fetch = function (t, e) {
    var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
        s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
        n = t.attr("data-width") || this._core.settings.videoWidth,
        o = t.attr("data-height") || this._core.settings.videoHeight,
        r = t.attr("href");if (!r) throw new Error("Missing video URL.");if (s = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), s[3].indexOf("youtu") > -1) i = "youtube";else {
      if (!(s[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");i = "vimeo";
    }s = s[6], this._videos[r] = { type: i, id: s, width: n, height: o }, e.attr("data-video", r), this.thumbnail(t, this._videos[r]);
  }, n.prototype.thumbnail = function (e, i) {
    var s,
        n,
        o,
        r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
        a = e.find("img"),
        h = "src",
        l = "",
        c = this._core.settings,
        d = function d(t) {
      n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + h + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n);
    };return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (h = "data-src", l = "owl-lazy"), a.length ? (d(a.attr(h)), a.remove(), !1) : void ("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(o)) : "vimeo" === i.type && t.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function success(t) {
        o = t[0].thumbnail_large, d(o);
      } }));
  }, n.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null;
  }, n.prototype.play = function (e) {
    this._core.trigger("play", null, "video"), this._playing && this.stop();var i,
        s,
        n = t(e.target || e.srcElement),
        o = n.closest("." + this._core.settings.itemClass),
        r = this._videos[o.attr("data-video")],
        a = r.width || "100%",
        h = r.height || this._core.$stage.height();"youtube" === r.type ? i = '<iframe width="' + a + '" height="' + h + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, s = t('<div style="height:' + h + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s);
  }, n.prototype.isInFullScreen = function () {
    var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), s && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0;
  }, n.prototype.destroy = function () {
    var t, e;this._core.$element.off("click.owl.video");for (t in this._handlers) {
      this._core.$element.off(t, this._handlers[t]);
    }for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.Video = n;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (t, e, i, s) {
  var n = function n(e) {
    this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = { "change.owl.carousel": t.proxy(function (t) {
        "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value);
      }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (t) {
        this.swapping = "translated" == t.type;
      }, this), "translate.owl.carousel": t.proxy(function (t) {
        this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
      }, this) }, this.core.$element.on(this.handlers);
  };n.Defaults = { animateOut: !1, animateIn: !1 }, n.prototype.swap = function () {
    if (1 === this.core.settings.items && this.core.support3d) {
      this.core.speed(0);var e,
          i = t.proxy(this.clear, this),
          s = this.core.$stage.children().eq(this.previous),
          n = this.core.$stage.children().eq(this.next),
          o = this.core.settings.animateIn,
          r = this.core.settings.animateOut;this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({ left: e + "px" }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i));
    }
  }, n.prototype.clear = function (e) {
    t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd();
  }, n.prototype.destroy = function () {
    var t, e;for (t in this.handlers) {
      this.core.$element.off(t, this.handlers[t]);
    }for (e in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[e] && (this[e] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.Animate = n;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (t, e, i, s) {
  var n = function n(e) {
    this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": t.proxy(function () {
        this.autoplay();
      }, this), "play.owl.autoplay": t.proxy(function (t, e, i) {
        this.play(e, i);
      }, this), "stop.owl.autoplay": t.proxy(function () {
        this.stop();
      }, this), "mouseover.owl.autoplay": t.proxy(function () {
        this.core.settings.autoplayHoverPause && this.pause();
      }, this), "mouseleave.owl.autoplay": t.proxy(function () {
        this.core.settings.autoplayHoverPause && this.autoplay();
      }, this) }, this.core.$element.on(this.handlers);
  };n.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, n.prototype.autoplay = function () {
    this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function () {
      this.play();
    }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval);
  }, n.prototype.play = function (t, s) {
    return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed);
  }, n.prototype.stop = function () {
    e.clearInterval(this.interval);
  }, n.prototype.pause = function () {
    e.clearInterval(this.interval);
  }, n.prototype.destroy = function () {
    var t, i;e.clearInterval(this.interval);for (t in this.handlers) {
      this.core.$element.off(t, this.handlers[t]);
    }for (i in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[i] && (this[i] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (t, e, i, s) {
  "use strict";
  var n = function n(e) {
    this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": t.proxy(function (e) {
        this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
      }, this), "add.owl.carousel": t.proxy(function (e) {
        this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"));
      }, this), "remove.owl.carousel prepared.owl.carousel": t.proxy(function (t) {
        this._core.settings.dotsData && this._templates.splice(t.position, 1);
      }, this), "change.owl.carousel": t.proxy(function (t) {
        if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
          var e = this._core.current(),
              i = this._core.maximum(),
              s = this._core.minimum();t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value;
        }
      }, this), "changed.owl.carousel": t.proxy(function (t) {
        "position" == t.property.name && this.draw();
      }, this), "refreshed.owl.carousel": t.proxy(function () {
        this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation");
      }, this) }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers);
  };n.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, n.prototype.initialize = function () {
    var e,
        i,
        s = this._core.settings;s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function (e) {
      var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();e.preventDefault(), this.to(i, s.dotsSpeed);
    }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function (t) {
      this.prev(s.navSpeed);
    }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function (t) {
      this.next(s.navSpeed);
    }, this));for (i in this._overrides) {
      this._core[i] = t.proxy(this[i], this);
    }
  }, n.prototype.destroy = function () {
    var t, e, i, s;for (t in this._handlers) {
      this.$element.off(t, this._handlers[t]);
    }for (e in this._controls) {
      this._controls[e].remove();
    }for (s in this.overides) {
      this._core[s] = this._overrides[s];
    }for (i in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[i] && (this[i] = null);
    }
  }, n.prototype.update = function () {
    var t,
        e,
        i,
        s = this._core.settings,
        n = this._core.clones().length / 2,
        o = n + this._core.items().length,
        r = s.center || s.autoWidth || s.dotData ? 1 : s.dotsEach || s.items;if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)), s.dots || "page" == s.slideBy) for (this._pages = [], t = n, e = 0, i = 0; o > t; t++) {
      (e >= r || 0 === e) && (this._pages.push({ start: t - n, end: t - n + r - 1 }), e = 0, ++i), e += this._core.mergers(this._core.relative(t));
    }
  }, n.prototype.draw = function () {
    var e,
        i,
        s = "",
        n = this._core.settings,
        o = (this._core.$stage.children(), this._core.relative(this._core.current()));if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
      if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
        for (i = 0; i < this._controls.$indicators.children().length; i++) {
          s += this._templates[this._core.relative(i)];
        }this._controls.$indicators.html(s);
      } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active");
    }this._controls.$indicators.toggle(n.dots);
  }, n.prototype.onTrigger = function (e) {
    var i = this._core.settings;e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items) };
  }, n.prototype.current = function () {
    var e = this._core.relative(this._core.current());return t.grep(this._pages, function (t) {
      return t.start <= e && t.end >= e;
    }).pop();
  }, n.prototype.getPosition = function (e) {
    var i,
        s,
        n = this._core.settings;return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i;
  }, n.prototype.next = function (e) {
    t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
  }, n.prototype.prev = function (e) {
    t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
  }, n.prototype.to = function (e, i, s) {
    var n;s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i));
  }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document), function (t, e, i, s) {
  "use strict";
  var n = function n(i) {
    this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": t.proxy(function () {
        "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation");
      }, this), "prepared.owl.carousel": t.proxy(function (e) {
        var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[i] = e.content;
      }, this) }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function () {
      var t = e.location.hash.substring(1),
          i = this._core.$stage.children(),
          s = this._hashes[t] && i.index(this._hashes[t]) || 0;return t ? void this._core.to(s, !1, !0) : !1;
    }, this));
  };n.Defaults = { URLhashListener: !1 }, n.prototype.destroy = function () {
    var i, s;t(e).off("hashchange.owl.navigation");for (i in this._handlers) {
      this._core.$element.off(i, this._handlers[i]);
    }for (s in Object.getOwnPropertyNames(this)) {
      "function" != typeof this[s] && (this[s] = null);
    }
  }, t.fn.owlCarousel.Constructor.Plugins.Hash = n;
}(window.Zepto || __webpack_provided_window_dot_jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {"function" != typeof Object.create && (Object.create = function (o) {
  function e() {}return e.prototype = o, new e();
}), function (o, e, i, t) {
  var n = { init: function init(e, i) {
      var t = this;t.elem = i, t.$elem = o(i), t.imageSrc = t.$elem.data("zoom-image") ? t.$elem.data("zoom-image") : t.$elem.attr("src"), t.options = o.extend({}, o.fn.elevateZoom.options, e), t.options.tint && (t.options.lensColour = "none", t.options.lensOpacity = "1"), "inner" == t.options.zoomType && (t.options.showLens = !1), t.$elem.parent().removeAttr("title").removeAttr("alt"), t.zoomImage = t.imageSrc, t.refresh(1), o("#" + t.options.gallery + " a").click(function (e) {
        return t.options.galleryActiveClass && (o("#" + t.options.gallery + " a").removeClass(t.options.galleryActiveClass), o(this).addClass(t.options.galleryActiveClass)), e.preventDefault(), o(this).data("zoom-image") ? t.zoomImagePre = o(this).data("zoom-image") : t.zoomImagePre = o(this).data("image"), t.swaptheimage(o(this).data("image"), t.zoomImagePre), !1;
      });
    }, refresh: function refresh(o) {
      var e = this;setTimeout(function () {
        e.fetch(e.imageSrc);
      }, o || e.options.refresh);
    }, fetch: function fetch(o) {
      var e = this,
          i = new Image();i.onload = function () {
        e.largeWidth = i.width, e.largeHeight = i.height, e.startZoom(), e.currentImage = e.imageSrc, e.options.onZoomedImageLoaded(e.$elem);
      }, i.src = o;
    }, startZoom: function startZoom() {
      var e = this;if (e.nzWidth = e.$elem.width(), e.nzHeight = e.$elem.height(), e.isWindowActive = !1, e.isLensActive = !1, e.isTintActive = !1, e.overWindow = !1, e.options.imageCrossfade && (e.zoomWrap = e.$elem.wrap('<div style="height:' + e.nzHeight + "px;width:" + e.nzWidth + 'px;" class="zoomWrapper" />'), e.$elem.css("position", "absolute")), e.zoomLock = 1, e.scrollingLock = !1, e.changeBgSize = !1, e.currentZoomLevel = e.options.zoomLevel, e.nzOffset = e.$elem.offset(), e.widthRatio = e.largeWidth / e.currentZoomLevel / e.nzWidth, e.heightRatio = e.largeHeight / e.currentZoomLevel / e.nzHeight, "window" == e.options.zoomType && (e.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(e.options.zoomWindowBgColour) + ";width: " + String(e.options.zoomWindowWidth) + "px;height: " + String(e.options.zoomWindowHeight) + "px;float: left;background-size: " + e.largeWidth / e.currentZoomLevel + "px " + e.largeHeight / e.currentZoomLevel + "px;display: none;z-index:100;border: " + String(e.options.borderSize) + "px solid " + e.options.borderColour + ";background-repeat: no-repeat;position: absolute;"), "inner" == e.options.zoomType) {
        var i = e.$elem.css("border-left-width");e.zoomWindowStyle = "overflow: hidden;margin-left: " + String(i) + ";margin-top: " + String(i) + ";background-position: 0px 0px;width: " + String(e.nzWidth) + "px;height: " + String(e.nzHeight) + "px;px;float: left;display: none;cursor:" + e.options.cursor + ";px solid " + e.options.borderColour + ";background-repeat: no-repeat;position: absolute;";
      }"window" == e.options.zoomType && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.largeWidth < e.options.zoomWindowWidth ? lensWidth = e.nzWidth : lensWidth = e.options.zoomWindowWidth / e.widthRatio, e.lensStyle = "background-position: 0px 0px;width: " + String(e.options.zoomWindowWidth / e.widthRatio) + "px;height: " + String(e.options.zoomWindowHeight / e.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + e.options.lensOpacity + ";filter: alpha(opacity = " + 100 * e.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + e.options.lensColour + ";cursor:" + e.options.cursor + ";border: " + e.options.lensBorderSize + "px solid " + e.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;"), e.tintStyle = "display: block;position: absolute;background-color: " + e.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + e.nzWidth + "px;height: " + e.nzHeight + "px;", e.lensRound = "", "lens" == e.options.zoomType && (e.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(e.options.borderSize) + "px solid " + e.options.borderColour + ";width:" + String(e.options.lensSize) + "px;height:" + String(e.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;"), "round" == e.options.lensShape && (e.lensRound = "border-top-left-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-top-right-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-bottom-left-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-bottom-right-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;"), e.zoomContainer = o('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + e.nzOffset.left + "px;top:" + e.nzOffset.top + "px;height:" + e.nzHeight + "px;width:" + e.nzWidth + 'px;"></div>'), o("body").append(e.zoomContainer), e.options.containLensZoom && "lens" == e.options.zoomType && e.zoomContainer.css("overflow", "hidden"), "inner" != e.options.zoomType && (e.zoomLens = o("<div class='zoomLens' style='" + e.lensStyle + e.lensRound + "'>&nbsp;</div>").appendTo(e.zoomContainer).click(function () {
        e.$elem.trigger("click");
      }), e.options.tint && (e.tintContainer = o("<div/>").addClass("tintContainer"), e.zoomTint = o("<div class='zoomTint' style='" + e.tintStyle + "'></div>"), e.zoomLens.wrap(e.tintContainer), e.zoomTintcss = e.zoomLens.after(e.zoomTint), e.zoomTintImage = o('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + e.nzWidth + "px; height: " + e.nzHeight + 'px;" src="' + e.imageSrc + '">').appendTo(e.zoomLens).click(function () {
        e.$elem.trigger("click");
      }))), isNaN(e.options.zoomWindowPosition) ? e.zoomWindow = o("<div style='z-index:999;left:" + e.windowOffsetLeft + "px;top:" + e.windowOffsetTop + "px;" + e.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function () {
        e.$elem.trigger("click");
      }) : e.zoomWindow = o("<div style='z-index:999;left:" + e.windowOffsetLeft + "px;top:" + e.windowOffsetTop + "px;" + e.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(e.zoomContainer).click(function () {
        e.$elem.trigger("click");
      }), e.zoomWindowContainer = o("<div/>").addClass("zoomWindowContainer").css("width", e.options.zoomWindowWidth), e.zoomWindow.wrap(e.zoomWindowContainer), "lens" == e.options.zoomType && e.zoomLens.css({ backgroundImage: "url('" + e.imageSrc + "')" }), "window" == e.options.zoomType && e.zoomWindow.css({ backgroundImage: "url('" + e.imageSrc + "')" }), "inner" == e.options.zoomType && e.zoomWindow.css({ backgroundImage: "url('" + e.imageSrc + "')" }), e.$elem.bind("touchmove", function (o) {
        o.preventDefault();var i = o.originalEvent.touches[0] || o.originalEvent.changedTouches[0];e.setPosition(i);
      }), e.zoomContainer.bind("touchmove", function (o) {
        "inner" == e.options.zoomType && e.showHideWindow("show"), o.preventDefault();var i = o.originalEvent.touches[0] || o.originalEvent.changedTouches[0];e.setPosition(i);
      }), e.zoomContainer.bind("touchend", function (o) {
        e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide");
      }), e.$elem.bind("touchend", function (o) {
        e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide");
      }), e.options.showLens && (e.zoomLens.bind("touchmove", function (o) {
        o.preventDefault();var i = o.originalEvent.touches[0] || o.originalEvent.changedTouches[0];e.setPosition(i);
      }), e.zoomLens.bind("touchend", function (o) {
        e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide");
      })), e.$elem.bind("mousemove", function (o) {
        0 == e.overWindow && e.setElements("show"), (e.lastX !== o.clientX || e.lastY !== o.clientY) && (e.setPosition(o), e.currentLoc = o), e.lastX = o.clientX, e.lastY = o.clientY;
      }), e.zoomContainer.bind("mousemove", function (o) {
        0 == e.overWindow && e.setElements("show"), (e.lastX !== o.clientX || e.lastY !== o.clientY) && (e.setPosition(o), e.currentLoc = o), e.lastX = o.clientX, e.lastY = o.clientY;
      }), "inner" != e.options.zoomType && e.zoomLens.bind("mousemove", function (o) {
        (e.lastX !== o.clientX || e.lastY !== o.clientY) && (e.setPosition(o), e.currentLoc = o), e.lastX = o.clientX, e.lastY = o.clientY;
      }), e.options.tint && "inner" != e.options.zoomType && e.zoomTint.bind("mousemove", function (o) {
        (e.lastX !== o.clientX || e.lastY !== o.clientY) && (e.setPosition(o), e.currentLoc = o), e.lastX = o.clientX, e.lastY = o.clientY;
      }), "inner" == e.options.zoomType && e.zoomWindow.bind("mousemove", function (o) {
        (e.lastX !== o.clientX || e.lastY !== o.clientY) && (e.setPosition(o), e.currentLoc = o), e.lastX = o.clientX, e.lastY = o.clientY;
      }), e.zoomContainer.add(e.$elem).mouseenter(function () {
        0 == e.overWindow && e.setElements("show");
      }).mouseleave(function () {
        e.scrollLock || (e.setElements("hide"), e.options.onDestroy(e.$elem));
      }), "inner" != e.options.zoomType && e.zoomWindow.mouseenter(function () {
        e.overWindow = !0, e.setElements("hide");
      }).mouseleave(function () {
        e.overWindow = !1;
      }), 1 != e.options.zoomLevel, e.options.minZoomLevel ? e.minZoomLevel = e.options.minZoomLevel : e.minZoomLevel = 2 * e.options.scrollZoomIncrement, e.options.scrollZoom && e.zoomContainer.add(e.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (i) {
        e.scrollLock = !0, clearTimeout(o.data(this, "timer")), o.data(this, "timer", setTimeout(function () {
          e.scrollLock = !1;
        }, 250));var t = i.originalEvent.wheelDelta || -1 * i.originalEvent.detail;return i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault(), t / 120 > 0 ? e.currentZoomLevel >= e.minZoomLevel && e.changeZoomLevel(e.currentZoomLevel - e.options.scrollZoomIncrement) : e.options.maxZoomLevel ? e.currentZoomLevel <= e.options.maxZoomLevel && e.changeZoomLevel(parseFloat(e.currentZoomLevel) + e.options.scrollZoomIncrement) : e.changeZoomLevel(parseFloat(e.currentZoomLevel) + e.options.scrollZoomIncrement), !1;
      });
    }, setElements: function setElements(o) {
      var e = this;return e.options.zoomEnabled ? ("show" == o && e.isWindowSet && ("inner" == e.options.zoomType && e.showHideWindow("show"), "window" == e.options.zoomType && e.showHideWindow("show"), e.options.showLens && e.showHideLens("show"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("show")), void ("hide" == o && ("window" == e.options.zoomType && e.showHideWindow("hide"), e.options.tint || e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && e.showHideTint("hide")))) : !1;
    }, setPosition: function setPosition(o) {
      var e = this;return e.options.zoomEnabled ? (e.nzHeight = e.$elem.height(), e.nzWidth = e.$elem.width(), e.nzOffset = e.$elem.offset(), e.options.tint && "inner" != e.options.zoomType && (e.zoomTint.css({ top: 0 }), e.zoomTint.css({ left: 0 })), e.options.responsive && !e.options.scrollZoom && e.options.showLens && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.largeWidth < e.options.zoomWindowWidth ? lensWidth = e.nzWidth : lensWidth = e.options.zoomWindowWidth / e.widthRatio, e.widthRatio = e.largeWidth / e.nzWidth, e.heightRatio = e.largeHeight / e.nzHeight, "lens" != e.options.zoomType && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.nzWidth < e.options.zoomWindowHeight / e.heightRatio ? lensWidth = e.nzWidth : lensWidth = String(e.options.zoomWindowWidth / e.widthRatio), e.zoomLens.css("width", lensWidth), e.zoomLens.css("height", lensHeight), e.options.tint && (e.zoomTintImage.css("width", e.nzWidth), e.zoomTintImage.css("height", e.nzHeight))), "lens" == e.options.zoomType && e.zoomLens.css({ width: String(e.options.lensSize) + "px", height: String(e.options.lensSize) + "px" })), e.zoomContainer.css({ top: e.nzOffset.top }), e.zoomContainer.css({ left: e.nzOffset.left }), e.mouseLeft = parseInt(o.pageX - e.nzOffset.left), e.mouseTop = parseInt(o.pageY - e.nzOffset.top), "window" == e.options.zoomType && (e.Etoppos = e.mouseTop < e.zoomLens.height() / 2, e.Eboppos = e.mouseTop > e.nzHeight - e.zoomLens.height() / 2 - 2 * e.options.lensBorderSize, e.Eloppos = e.mouseLeft < 0 + e.zoomLens.width() / 2, e.Eroppos = e.mouseLeft > e.nzWidth - e.zoomLens.width() / 2 - 2 * e.options.lensBorderSize), "inner" == e.options.zoomType && (e.Etoppos = e.mouseTop < e.nzHeight / 2 / e.heightRatio, e.Eboppos = e.mouseTop > e.nzHeight - e.nzHeight / 2 / e.heightRatio, e.Eloppos = e.mouseLeft < 0 + e.nzWidth / 2 / e.widthRatio, e.Eroppos = e.mouseLeft > e.nzWidth - e.nzWidth / 2 / e.widthRatio - 2 * e.options.lensBorderSize), e.mouseLeft < 0 || e.mouseTop < 0 || e.mouseLeft > e.nzWidth || e.mouseTop > e.nzHeight ? void e.setElements("hide") : (e.options.showLens && (e.lensLeftPos = String(Math.floor(e.mouseLeft - e.zoomLens.width() / 2)), e.lensTopPos = String(Math.floor(e.mouseTop - e.zoomLens.height() / 2))), e.Etoppos && (e.lensTopPos = 0), e.Eloppos && (e.windowLeftPos = 0, e.lensLeftPos = 0, e.tintpos = 0), "window" == e.options.zoomType && (e.Eboppos && (e.lensTopPos = Math.max(e.nzHeight - e.zoomLens.height() - 2 * e.options.lensBorderSize, 0)), e.Eroppos && (e.lensLeftPos = e.nzWidth - e.zoomLens.width() - 2 * e.options.lensBorderSize)), "inner" == e.options.zoomType && (e.Eboppos && (e.lensTopPos = Math.max(e.nzHeight - 2 * e.options.lensBorderSize, 0)), e.Eroppos && (e.lensLeftPos = e.nzWidth - e.nzWidth - 2 * e.options.lensBorderSize)), "lens" == e.options.zoomType && (e.windowLeftPos = String(-1 * ((o.pageX - e.nzOffset.left) * e.widthRatio - e.zoomLens.width() / 2)), e.windowTopPos = String(-1 * ((o.pageY - e.nzOffset.top) * e.heightRatio - e.zoomLens.height() / 2)), e.zoomLens.css({ backgroundPosition: e.windowLeftPos + "px " + e.windowTopPos + "px" }), e.changeBgSize && (e.nzHeight > e.nzWidth ? ("lens" == e.options.zoomType && e.zoomLens.css({ "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px" }), e.zoomWindow.css({ "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px" })) : ("lens" == e.options.zoomType && e.zoomLens.css({ "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px" }), e.zoomWindow.css({ "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px" })), e.changeBgSize = !1), e.setWindowPostition(o)), e.options.tint && "inner" != e.options.zoomType && e.setTintPosition(o), "window" == e.options.zoomType && e.setWindowPostition(o), "inner" == e.options.zoomType && e.setWindowPostition(o), e.options.showLens && (e.fullwidth && "lens" != e.options.zoomType && (e.lensLeftPos = 0), e.zoomLens.css({ left: e.lensLeftPos + "px", top: e.lensTopPos + "px" })), void 0)) : !1;
    }, showHideWindow: function showHideWindow(o) {
      var e = this;"show" == o && (e.isWindowActive || (e.options.zoomWindowFadeIn ? e.zoomWindow.stop(!0, !0, !1).fadeIn(e.options.zoomWindowFadeIn) : e.zoomWindow.show(), e.isWindowActive = !0)), "hide" == o && e.isWindowActive && (e.options.zoomWindowFadeOut ? e.zoomWindow.stop(!0, !0).fadeOut(e.options.zoomWindowFadeOut, function () {
        e.loop && (clearInterval(e.loop), e.loop = !1);
      }) : e.zoomWindow.hide(), e.isWindowActive = !1);
    }, showHideLens: function showHideLens(o) {
      var e = this;"show" == o && (e.isLensActive || (e.options.lensFadeIn ? e.zoomLens.stop(!0, !0, !1).fadeIn(e.options.lensFadeIn) : e.zoomLens.show(), e.isLensActive = !0)), "hide" == o && e.isLensActive && (e.options.lensFadeOut ? e.zoomLens.stop(!0, !0).fadeOut(e.options.lensFadeOut) : e.zoomLens.hide(), e.isLensActive = !1);
    }, showHideTint: function showHideTint(o) {
      var e = this;"show" == o && (e.isTintActive || (e.options.zoomTintFadeIn ? e.zoomTint.css({ opacity: e.options.tintOpacity }).animate().stop(!0, !0).fadeIn("slow") : (e.zoomTint.css({ opacity: e.options.tintOpacity }).animate(), e.zoomTint.show()), e.isTintActive = !0)), "hide" == o && e.isTintActive && (e.options.zoomTintFadeOut ? e.zoomTint.stop(!0, !0).fadeOut(e.options.zoomTintFadeOut) : e.zoomTint.hide(), e.isTintActive = !1);
    }, setLensPostition: function setLensPostition(o) {}, setWindowPostition: function setWindowPostition(e) {
      var i = this;if (isNaN(i.options.zoomWindowPosition)) i.externalContainer = o("#" + i.options.zoomWindowPosition), i.externalContainerWidth = i.externalContainer.width(), i.externalContainerHeight = i.externalContainer.height(), i.externalContainerOffset = i.externalContainer.offset(), i.windowOffsetTop = i.externalContainerOffset.top, i.windowOffsetLeft = i.externalContainerOffset.left;else switch (i.options.zoomWindowPosition) {case 1:
          i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = +i.nzWidth;break;case 2:
          i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.options.zoomWindowHeight / 2 - i.nzHeight / 2), i.windowOffsetLeft = i.nzWidth);break;case 3:
          i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - 2 * i.options.borderSize, i.windowOffsetLeft = i.nzWidth;break;case 4:
          i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = i.nzWidth;break;case 5:
          i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - 2 * i.options.borderSize;break;case 6:
          i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = -1 * (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + 2 * i.options.borderSize));break;case 7:
          i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = 0;break;case 8:
          i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);break;case 9:
          i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - 2 * i.options.borderSize, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);break;case 10:
          i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.options.zoomWindowHeight / 2 - i.nzHeight / 2), i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize));break;case 11:
          i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);break;case 12:
          i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);break;case 13:
          i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = 0;break;case 14:
          i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = -1 * (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + 2 * i.options.borderSize));break;case 15:
          i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - 2 * i.options.borderSize;break;case 16:
          i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = i.nzWidth;break;default:
          i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = i.nzWidth;}i.isWindowSet = !0, i.windowOffsetTop = i.windowOffsetTop + i.options.zoomWindowOffety, i.windowOffsetLeft = i.windowOffsetLeft + i.options.zoomWindowOffetx, i.zoomWindow.css({ top: i.windowOffsetTop }), i.zoomWindow.css({ left: i.windowOffsetLeft }), "inner" == i.options.zoomType && (i.zoomWindow.css({ top: 0 }), i.zoomWindow.css({ left: 0 })), i.windowLeftPos = String(-1 * ((e.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2)), i.windowTopPos = String(-1 * ((e.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2)), i.Etoppos && (i.windowTopPos = 0), i.Eloppos && (i.windowLeftPos = 0), i.Eboppos && (i.windowTopPos = -1 * (i.largeHeight / i.currentZoomLevel - i.zoomWindow.height())), i.Eroppos && (i.windowLeftPos = -1 * (i.largeWidth / i.currentZoomLevel - i.zoomWindow.width())), i.fullheight && (i.windowTopPos = 0), i.fullwidth && (i.windowLeftPos = 0), ("window" == i.options.zoomType || "inner" == i.options.zoomType) && (1 == i.zoomLock && (i.widthRatio <= 1 && (i.windowLeftPos = 0), i.heightRatio <= 1 && (i.windowTopPos = 0)), "window" == i.options.zoomType && (i.largeHeight < i.options.zoomWindowHeight && (i.windowTopPos = 0), i.largeWidth < i.options.zoomWindowWidth && (i.windowLeftPos = 0)), i.options.easing ? (i.xp || (i.xp = 0), i.yp || (i.yp = 0), i.loop || (i.loop = setInterval(function () {
        i.xp += (i.windowLeftPos - i.xp) / i.options.easingAmount, i.yp += (i.windowTopPos - i.yp) / i.options.easingAmount, i.scrollingLock ? (clearInterval(i.loop), i.xp = i.windowLeftPos, i.yp = i.windowTopPos, i.xp = -1 * ((e.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2), i.yp = -1 * ((e.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2), i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" })) : ("lens" != i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvalueheight + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" })), i.changeBgSize = !1), i.zoomWindow.css({ backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px" }), i.scrollingLock = !1, i.loop = !1) : Math.round(Math.abs(i.xp - i.windowLeftPos) + Math.abs(i.yp - i.windowTopPos)) < 1 ? (clearInterval(i.loop), i.zoomWindow.css({ backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px" }), i.loop = !1) : (i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" })) : ("lens" != i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" })), i.changeBgSize = !1), i.zoomWindow.css({ backgroundPosition: i.xp + "px " + i.yp + "px" }));
      }, 16))) : (i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" })) : ("lens" == i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" }), i.largeHeight / i.newvaluewidth < i.options.zoomWindowHeight ? i.zoomWindow.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" }) : i.zoomWindow.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" })), i.changeBgSize = !1), i.zoomWindow.css({ backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px" })));
    }, setTintPosition: function setTintPosition(o) {
      var e = this;e.nzOffset = e.$elem.offset(), e.tintpos = String(-1 * (o.pageX - e.nzOffset.left - e.zoomLens.width() / 2)), e.tintposy = String(-1 * (o.pageY - e.nzOffset.top - e.zoomLens.height() / 2)), e.Etoppos && (e.tintposy = 0), e.Eloppos && (e.tintpos = 0), e.Eboppos && (e.tintposy = -1 * (e.nzHeight - e.zoomLens.height() - 2 * e.options.lensBorderSize)), e.Eroppos && (e.tintpos = -1 * (e.nzWidth - e.zoomLens.width() - 2 * e.options.lensBorderSize)), e.options.tint && (e.fullheight && (e.tintposy = 0), e.fullwidth && (e.tintpos = 0), e.zoomTintImage.css({ left: e.tintpos + "px" }), e.zoomTintImage.css({ top: e.tintposy + "px" }));
    }, swaptheimage: function swaptheimage(e, i) {
      var t = this,
          n = new Image();t.options.loadingIcon && (t.spinner = o("<div style=\"background: url('" + t.options.loadingIcon + "') no-repeat center;height:" + t.nzHeight + "px;width:" + t.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), t.$elem.after(t.spinner)), t.options.onImageSwap(t.$elem), n.onload = function () {
        t.largeWidth = n.width, t.largeHeight = n.height, t.zoomImage = i, t.zoomWindow.css({ "background-size": t.largeWidth + "px " + t.largeHeight + "px" }), t.swapAction(e, i);
      }, n.src = i;
    }, swapAction: function swapAction(e, i) {
      var t = this,
          n = new Image();if (n.onload = function () {
        t.nzHeight = n.height, t.nzWidth = n.width, t.options.onImageSwapComplete(t.$elem), t.doneCallback();
      }, n.src = e, t.currentZoomLevel = t.options.zoomLevel, t.options.maxZoomLevel = !1, "lens" == t.options.zoomType && t.zoomLens.css({ backgroundImage: "url('" + i + "')" }), "window" == t.options.zoomType && t.zoomWindow.css({ backgroundImage: "url('" + i + "')" }), "inner" == t.options.zoomType && t.zoomWindow.css({ backgroundImage: "url('" + i + "')" }), t.currentImage = i, t.options.imageCrossfade) {
        var s = t.$elem,
            h = s.clone();if (t.$elem.attr("src", e), t.$elem.after(h), h.stop(!0).fadeOut(t.options.imageCrossfade, function () {
          o(this).remove();
        }), t.$elem.width("auto").removeAttr("width"), t.$elem.height("auto").removeAttr("height"), s.fadeIn(t.options.imageCrossfade), t.options.tint && "inner" != t.options.zoomType) {
          var a = t.zoomTintImage,
              d = a.clone();t.zoomTintImage.attr("src", i), t.zoomTintImage.after(d), d.stop(!0).fadeOut(t.options.imageCrossfade, function () {
            o(this).remove();
          }), a.fadeIn(t.options.imageCrossfade), t.zoomTint.css({ height: t.$elem.height() }), t.zoomTint.css({ width: t.$elem.width() });
        }t.zoomContainer.css("height", t.$elem.height()), t.zoomContainer.css("width", t.$elem.width()), "inner" == t.options.zoomType && (t.options.constrainType || (t.zoomWrap.parent().css("height", t.$elem.height()), t.zoomWrap.parent().css("width", t.$elem.width()), t.zoomWindow.css("height", t.$elem.height()), t.zoomWindow.css("width", t.$elem.width()))), t.options.imageCrossfade && (t.zoomWrap.css("height", t.$elem.height()), t.zoomWrap.css("width", t.$elem.width()));
      } else t.$elem.attr("src", e), t.options.tint && (t.zoomTintImage.attr("src", i), t.zoomTintImage.attr("height", t.$elem.height()), t.zoomTintImage.css({ height: t.$elem.height() }), t.zoomTint.css({ height: t.$elem.height() })), t.zoomContainer.css("height", t.$elem.height()), t.zoomContainer.css("width", t.$elem.width()), t.options.imageCrossfade && (t.zoomWrap.css("height", t.$elem.height()), t.zoomWrap.css("width", t.$elem.width()));t.options.constrainType && ("height" == t.options.constrainType && (t.zoomContainer.css("height", t.options.constrainSize), t.zoomContainer.css("width", "auto"), t.options.imageCrossfade ? (t.zoomWrap.css("height", t.options.constrainSize), t.zoomWrap.css("width", "auto"), t.constwidth = t.zoomWrap.width()) : (t.$elem.css("height", t.options.constrainSize), t.$elem.css("width", "auto"), t.constwidth = t.$elem.width()), "inner" == t.options.zoomType && (t.zoomWrap.parent().css("height", t.options.constrainSize), t.zoomWrap.parent().css("width", t.constwidth), t.zoomWindow.css("height", t.options.constrainSize), t.zoomWindow.css("width", t.constwidth)), t.options.tint && (t.tintContainer.css("height", t.options.constrainSize), t.tintContainer.css("width", t.constwidth), t.zoomTint.css("height", t.options.constrainSize), t.zoomTint.css("width", t.constwidth), t.zoomTintImage.css("height", t.options.constrainSize), t.zoomTintImage.css("width", t.constwidth))), "width" == t.options.constrainType && (t.zoomContainer.css("height", "auto"), t.zoomContainer.css("width", t.options.constrainSize), t.options.imageCrossfade ? (t.zoomWrap.css("height", "auto"), t.zoomWrap.css("width", t.options.constrainSize), t.constheight = t.zoomWrap.height()) : (t.$elem.css("height", "auto"), t.$elem.css("width", t.options.constrainSize), t.constheight = t.$elem.height()), "inner" == t.options.zoomType && (t.zoomWrap.parent().css("height", t.constheight), t.zoomWrap.parent().css("width", t.options.constrainSize), t.zoomWindow.css("height", t.constheight), t.zoomWindow.css("width", t.options.constrainSize)), t.options.tint && (t.tintContainer.css("height", t.constheight), t.tintContainer.css("width", t.options.constrainSize), t.zoomTint.css("height", t.constheight), t.zoomTint.css("width", t.options.constrainSize), t.zoomTintImage.css("height", t.constheight), t.zoomTintImage.css("width", t.options.constrainSize))));
    }, doneCallback: function doneCallback() {
      var o = this;o.options.loadingIcon && o.spinner.hide(), o.nzOffset = o.$elem.offset(), o.nzWidth = o.$elem.width(), o.nzHeight = o.$elem.height(), o.currentZoomLevel = o.options.zoomLevel, o.widthRatio = o.largeWidth / o.nzWidth, o.heightRatio = o.largeHeight / o.nzHeight, "window" == o.options.zoomType && (o.nzHeight < o.options.zoomWindowWidth / o.widthRatio ? lensHeight = o.nzHeight : lensHeight = String(o.options.zoomWindowHeight / o.heightRatio), o.options.zoomWindowWidth < o.options.zoomWindowWidth ? lensWidth = o.nzWidth : lensWidth = o.options.zoomWindowWidth / o.widthRatio, o.zoomLens && (o.zoomLens.css("width", lensWidth), o.zoomLens.css("height", lensHeight)));
    }, getCurrentImage: function getCurrentImage() {
      var o = this;return o.zoomImage;
    }, getGalleryList: function getGalleryList() {
      var e = this;return e.gallerylist = [], e.options.gallery ? o("#" + e.options.gallery + " a").each(function () {
        var i = "";o(this).data("zoom-image") ? i = o(this).data("zoom-image") : o(this).data("image") && (i = o(this).data("image")), i == e.zoomImage ? e.gallerylist.unshift({ href: "" + i, title: o(this).find("img").attr("title") }) : e.gallerylist.push({ href: "" + i, title: o(this).find("img").attr("title") });
      }) : e.gallerylist.push({ href: "" + e.zoomImage, title: o(this).find("img").attr("title") }), e.gallerylist;
    }, changeZoomLevel: function changeZoomLevel(o) {
      var e = this;e.scrollingLock = !0, e.newvalue = parseFloat(o).toFixed(2), newvalue = parseFloat(o).toFixed(2), maxheightnewvalue = e.largeHeight / (e.options.zoomWindowHeight / e.nzHeight * e.nzHeight), maxwidthtnewvalue = e.largeWidth / (e.options.zoomWindowWidth / e.nzWidth * e.nzWidth), "inner" != e.options.zoomType && (maxheightnewvalue <= newvalue ? (e.heightRatio = e.largeHeight / maxheightnewvalue / e.nzHeight, e.newvalueheight = maxheightnewvalue, e.fullheight = !0) : (e.heightRatio = e.largeHeight / newvalue / e.nzHeight, e.newvalueheight = newvalue, e.fullheight = !1), maxwidthtnewvalue <= newvalue ? (e.widthRatio = e.largeWidth / maxwidthtnewvalue / e.nzWidth, e.newvaluewidth = maxwidthtnewvalue, e.fullwidth = !0) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, e.newvaluewidth = newvalue, e.fullwidth = !1), "lens" == e.options.zoomType && (maxheightnewvalue <= newvalue ? (e.fullwidth = !0, e.newvaluewidth = maxheightnewvalue) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, e.newvaluewidth = newvalue, e.fullwidth = !1))), "inner" == e.options.zoomType && (maxheightnewvalue = parseFloat(e.largeHeight / e.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(e.largeWidth / e.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (e.heightRatio = e.largeHeight / newvalue / e.nzHeight, newvalue > maxheightnewvalue ? e.newvalueheight = maxheightnewvalue : e.newvalueheight = newvalue, e.fullheight = !0) : (e.heightRatio = e.largeHeight / newvalue / e.nzHeight, newvalue > maxheightnewvalue ? e.newvalueheight = maxheightnewvalue : e.newvalueheight = newvalue, e.fullheight = !1), maxwidthtnewvalue <= newvalue ? (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, newvalue > maxwidthtnewvalue ? e.newvaluewidth = maxwidthtnewvalue : e.newvaluewidth = newvalue, e.fullwidth = !0) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, e.newvaluewidth = newvalue, e.fullwidth = !1)), scrcontinue = !1, "inner" == e.options.zoomType && (e.nzWidth >= e.nzHeight && (e.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, e.fullheight = !0, e.fullwidth = !0)), e.nzHeight > e.nzWidth && (e.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, e.fullheight = !0, e.fullwidth = !0))), "inner" != e.options.zoomType && (scrcontinue = !0), scrcontinue && (e.zoomLock = 0, e.changeZoom = !0, e.options.zoomWindowHeight / e.heightRatio <= e.nzHeight && (e.currentZoomLevel = e.newvalueheight, "lens" != e.options.zoomType && "inner" != e.options.zoomType && (e.changeBgSize = !0, e.zoomLens.css({ height: String(e.options.zoomWindowHeight / e.heightRatio) + "px" })), ("lens" == e.options.zoomType || "inner" == e.options.zoomType) && (e.changeBgSize = !0)), e.options.zoomWindowWidth / e.widthRatio <= e.nzWidth && ("inner" != e.options.zoomType && e.newvaluewidth > e.newvalueheight && (e.currentZoomLevel = e.newvaluewidth), "lens" != e.options.zoomType && "inner" != e.options.zoomType && (e.changeBgSize = !0, e.zoomLens.css({ width: String(e.options.zoomWindowWidth / e.widthRatio) + "px" })), ("lens" == e.options.zoomType || "inner" == e.options.zoomType) && (e.changeBgSize = !0)), "inner" == e.options.zoomType && (e.changeBgSize = !0, e.nzWidth > e.nzHeight && (e.currentZoomLevel = e.newvaluewidth), e.nzHeight > e.nzWidth && (e.currentZoomLevel = e.newvaluewidth))), e.setPosition(e.currentLoc);
    }, closeAll: function closeAll() {
      self.zoomWindow && self.zoomWindow.hide(), self.zoomLens && self.zoomLens.hide(), self.zoomTint && self.zoomTint.hide();
    }, changeState: function changeState(o) {
      var e = this;"enable" == o && (e.options.zoomEnabled = !0), "disable" == o && (e.options.zoomEnabled = !1);
    } };o.fn.elevateZoom = function (e) {
    return this.each(function () {
      var i = Object.create(n);i.init(e, this), o.data(this, "elevateZoom", i);
    });
  }, o.fn.elevateZoom.options = { zoomActivation: "hover", zoomEnabled: !0, preloading: 1, zoomLevel: 1, scrollZoom: !1, scrollZoomIncrement: .1, minZoomLevel: !1, maxZoomLevel: !1, easing: !1, easingAmount: 12, lensSize: 200, zoomWindowWidth: 400, zoomWindowHeight: 400, zoomWindowOffetx: 0, zoomWindowOffety: 0, zoomWindowPosition: 1, zoomWindowBgColour: "#fff", lensFadeIn: !1, lensFadeOut: !1, debug: !1, zoomWindowFadeIn: !1, zoomWindowFadeOut: !1, zoomWindowAlwaysShow: !1, zoomTintFadeIn: !1, zoomTintFadeOut: !1, borderSize: 4, showLens: !0, borderColour: "#888", lensBorderSize: 1, lensBorderColour: "#000", lensShape: "square", zoomType: "window", containLensZoom: !1, lensColour: "white", lensOpacity: .4, lenszoom: !1, tint: !1, tintColour: "#333", tintOpacity: .4, gallery: !1, galleryActiveClass: "zoomGalleryActive", imageCrossfade: !1, constrainType: !1, constrainSize: !1, loadingIcon: !1, cursor: "default", responsive: !0, onComplete: o.noop, onDestroy: function onDestroy() {}, onZoomedImageLoaded: function onZoomedImageLoaded() {}, onImageSwap: o.noop, onImageSwapComplete: o.noop
  };
}(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}function isInArray(e, a) {
  return a.indexOf(e) > -1;
}var pJS = function pJS(e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");this.pJS = { canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight }, particles: { number: { value: 400, density: { enable: !0, value_area: 800 } }, color: { value: "#fff" }, shape: { type: "circle", stroke: { width: 0, color: "#ff0000" }, polygon: { nb_sides: 5 }, image: { src: "", width: 100, height: 100 } }, opacity: { value: 1, random: !1, anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 } }, size: { value: 20, random: !1, anim: { enable: !1, speed: 20, size_min: 0, sync: !1 } }, line_linked: { enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1 }, move: { enable: !0, speed: 2, direction: "none", random: !1, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 } }, array: [] }, interactivity: { detect_on: "canvas", events: { onhover: { enable: !0, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 }, modes: { grab: { distance: 100, line_linked: { opacity: 1 } }, bubble: { distance: 200, size: 80, duration: .4 }, repulse: { distance: 200, duration: .4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }, mouse: {} }, retina_detect: !1, fn: { interact: {}, modes: {}, vendors: {} }, tmp: {} };var i = this.pJS;a && Object.deepExtend(i, a), i.tmp.obj = { size_value: i.particles.size.value, size_anim_speed: i.particles.size.anim.speed, move_speed: i.particles.move.speed, line_linked_distance: i.particles.line_linked.distance, line_linked_width: i.particles.line_linked.width, mode_grab_distance: i.interactivity.modes.grab.distance, mode_bubble_distance: i.interactivity.modes.bubble.distance, mode_bubble_size: i.interactivity.modes.bubble.size, mode_repulse_distance: i.interactivity.modes.repulse.distance }, i.fn.retinaInit = function () {
    i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio;
  }, i.fn.canvasInit = function () {
    i.canvas.ctx = i.canvas.el.getContext("2d");
  }, i.fn.canvasSize = function () {
    i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
      i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles();
    });
  }, i.fn.canvasPaint = function () {
    i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.canvasClear = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.particle = function (e, a, t) {
    if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == _typeof(e.value)) {
      if (e.value instanceof Array) {
        var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];this.color.rgb = hexToRgb(s);
      } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
    } else "random" == e.value ? this.color.rgb = { r: Math.floor(256 * Math.random()) + 0, g: Math.floor(256 * Math.random()) + 0, b: Math.floor(256 * Math.random()) + 0 } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));var n = {};switch (i.particles.move.direction) {case "top":
        n = { x: 0, y: -1 };break;case "top-right":
        n = { x: .5, y: -.5 };break;case "right":
        n = { x: 1, y: -0 };break;case "bottom-right":
        n = { x: .5, y: .5 };break;case "bottom":
        n = { x: 0, y: 1 };break;case "bottom-left":
        n = { x: -.5, y: 1 };break;case "left":
        n = { x: -1, y: 0 };break;case "top-left":
        n = { x: -.5, y: -.5 };break;default:
        n = { x: 0, y: 0 };}i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;var r = i.particles.shape.type;if ("object" == (typeof r === "undefined" ? "undefined" : _typeof(r))) {
      if (r instanceof Array) {
        var c = r[Math.floor(Math.random() * r.length)];this.shape = c;
      }
    } else this.shape = r;if ("image" == this.shape) {
      var o = i.particles.shape;this.img = { src: o.image.src, ratio: o.image.width / o.image.height }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1));
    }
  }, i.fn.particle.prototype.draw = function () {
    function e() {
      i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio);
    }var a = this;if (void 0 != a.radius_bubble) var t = a.radius_bubble;else var t = a.radius;if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;else var s = a.opacity;if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {case "circle":
        i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);break;case "edge":
        i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);break;case "triangle":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);break;case "polygon":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);break;case "star":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);break;case "image":
        if ("svg" == i.tmp.img_type) var r = a.img.obj;else var r = i.tmp.img_obj;r && e();}i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill();
  }, i.fn.particlesCreate = function () {
    for (var e = 0; e < i.particles.number.value; e++) {
      i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value));
    }
  }, i.fn.particlesUpdate = function () {
    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];if (i.particles.move.enable) {
        var t = i.particles.move.speed / 2;a.x += a.vx * t, a.y += a.vy * t;
      }if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = { x_left: a.radius, x_right: i.canvas.w, y_top: a.radius, y_bottom: i.canvas.h };else var s = { x_left: -a.radius, x_right: i.canvas.w + a.radius, y_top: -a.radius, y_bottom: i.canvas.h + a.radius };switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {case "bounce":
          a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy);}if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable) for (var n = e + 1; n < i.particles.array.length; n++) {
        var r = i.particles.array[n];i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
      }
    }
  }, i.fn.particlesDraw = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];a.draw();
    }
  }, i.fn.particlesEmpty = function () {
    i.particles.array = [];
  }, i.fn.particlesRefresh = function () {
    cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start();
  }, i.fn.interact.linkParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);if (n <= i.particles.line_linked.distance) {
      var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;if (r > 0) {
        var c = i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
      }
    }
  }, i.fn.interact.attractParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);if (n <= i.particles.line_linked.distance) {
      var r = t / (1e3 * i.particles.move.attract.rotateX),
          c = s / (1e3 * i.particles.move.attract.rotateY);e.vx -= r, e.vy -= c, a.vx += r, a.vy += c;
    }
  }, i.fn.interact.bounceParticles = function (e, a) {
    var t = e.x - a.x,
        i = e.y - a.y,
        s = Math.sqrt(t * t + i * i),
        n = e.radius + a.radius;n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy);
  }, i.fn.modes.pushParticles = function (e, a) {
    i.tmp.pushing = !0;for (var t = 0; e > t; t++) {
      i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, { x: a ? a.pos_x : Math.random() * i.canvas.w, y: a ? a.pos_y : Math.random() * i.canvas.h })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1);
    }
  }, i.fn.modes.removeParticles = function (e) {
    i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw();
  }, i.fn.modes.bubbleParticle = function (e) {
    function a() {
      e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
    }function t(a, t, s, n, c) {
      if (a != t) if (i.tmp.bubble_duration_end) {
        if (void 0 != s) {
          var o = n - p * (n - a) / i.interactivity.modes.bubble.duration,
              l = a - o;d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else if (r <= i.interactivity.modes.bubble.distance) {
        if (void 0 != s) var v = s;else var v = n;if (v != a) {
          var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;"size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0);
    }if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
      var s = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(s * s + n * n),
          c = 1 - r / i.interactivity.modes.bubble.distance;if (r <= i.interactivity.modes.bubble.distance) {
        if (c >= 0 && "mousemove" == i.interactivity.status) {
          if (i.interactivity.modes.bubble.size != i.particles.size.value) if (i.interactivity.modes.bubble.size > i.particles.size.value) {
            var o = e.radius + i.interactivity.modes.bubble.size * c;o >= 0 && (e.radius_bubble = o);
          } else {
            var l = e.radius - i.interactivity.modes.bubble.size,
                o = e.radius - l * c;o > 0 ? e.radius_bubble = o : e.radius_bubble = 0;
          }if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value) if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
            var v = i.interactivity.modes.bubble.opacity * c;v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          } else {
            var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          }
        }
      } else a();"mouseleave" == i.interactivity.status && a();
    } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
      if (i.tmp.bubble_clicking) {
        var s = e.x - i.interactivity.mouse.click_pos_x,
            n = e.y - i.interactivity.mouse.click_pos_y,
            r = Math.sqrt(s * s + n * n),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1);
      }i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
    }
  }, i.fn.modes.repulseParticle = function (e) {
    function a() {
      var a = Math.atan2(d, p);if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) {
        var t = { x: e.x + e.vx, y: e.y + e.vy };t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy);
      }
    }if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
      var t = e.x - i.interactivity.mouse.pos_x,
          s = e.y - i.interactivity.mouse.pos_y,
          n = Math.sqrt(t * t + s * s),
          r = { x: t / n, y: s / n },
          c = i.interactivity.modes.repulse.distance,
          o = 100,
          l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
          v = { x: e.x + r.x * l, y: e.y + r.y * l };"bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y);
    } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode)) if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
      var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
          p = i.interactivity.mouse.click_pos_x - e.x,
          d = i.interactivity.mouse.click_pos_y - e.y,
          m = p * p + d * d,
          u = -c / m * 1;c >= m && a();
    } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
  }, i.fn.modes.grabParticle = function (e) {
    if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
      var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t);if (s <= i.interactivity.modes.grab.distance) {
        var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;if (n > 0) {
          var r = i.particles.line_linked.color_rgb_line;i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
        }
      }
    }
  }, i.fn.vendors.eventsListeners = function () {
    "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
      if (i.interactivity.el == window) var a = e.clientX,
          t = e.clientY;else var a = e.offsetX || e.clientX,
          t = e.offsetY || e.clientY;i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove";
    }), i.interactivity.el.addEventListener("mouseleave", function (e) {
      i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave";
    })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
      if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = new Date().getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {case "push":
          i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);break;case "remove":
          i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);break;case "bubble":
          i.tmp.bubble_clicking = !0;break;case "repulse":
          i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
            i.tmp.repulse_clicking = !1;
          }, 1e3 * i.interactivity.modes.repulse.duration);}
    });
  }, i.fn.vendors.densityAutoParticles = function () {
    if (i.particles.number.density.enable) {
      var e = i.canvas.el.width * i.canvas.el.height / 1e3;i.tmp.retina && (e /= 2 * i.canvas.pxratio);var a = e * i.particles.number.value / i.particles.number.density.value_area,
          t = i.particles.array.length - a;0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t);
    }
  }, i.fn.vendors.checkOverlap = function (e, a) {
    for (var t = 0; t < i.particles.array.length; t++) {
      var s = i.particles.array[t],
          n = e.x - s.x,
          r = e.y - s.y,
          c = Math.sqrt(n * n + r * r);c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e));
    }
  }, i.fn.vendors.createSvgImg = function (e) {
    var a = i.tmp.source_svg,
        t = /#([0-9A-F]{3,6})/gi,
        s = a.replace(t, function (a, t, i, s) {
      if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";return n;
    }),
        n = new Blob([s], { type: "image/svg+xml;charset=utf-8" }),
        r = window.URL || window.webkitURL || window,
        c = r.createObjectURL(n),
        o = new Image();o.addEventListener("load", function () {
      e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++;
    }), o.src = c;
  }, i.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null;
  }, i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
    var r = s * n,
        c = s / n,
        o = 180 * (c - 2) / c,
        l = Math.PI - Math.PI * o / 180;e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);for (var v = 0; r > v; v++) {
      e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
    }e.fill(), e.restore();
  }, i.fn.vendors.exportImg = function () {
    window.open(i.canvas.el.toDataURL("image/png"), "_blank");
  }, i.fn.vendors.loadImg = function (e) {
    if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src) {
      if ("svg" == e) {
        var a = new XMLHttpRequest();a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) {
          4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0));
        }, a.send();
      } else {
        var t = new Image();t.addEventListener("load", function () {
          i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw();
        }), t.src = i.particles.shape.image.src;
      }
    } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0;
  }, i.fn.vendors.draw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame));
  }, i.fn.vendors.checkBeforeDraw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw());
  }, i.fn.vendors.init = function () {
    i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color);
  }, i.fn.vendors.start = function () {
    isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw();
  }, i.fn.vendors.eventsListeners(), i.fn.vendors.start();
};Object.deepExtend = function (e, a) {
  for (var t in a) {
    a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];
  }return e;
}, window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  };
}(), window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}(), window.pJSDom = [], window.particlesJS = function (e, a) {
  "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");var t = document.getElementById(e),
      i = "particles-js-canvas-el",
      s = t.getElementsByClassName(i);if (s.length) for (; s.length > 0;) {
    t.removeChild(s[0]);
  }var n = document.createElement("canvas");n.className = i, n.style.width = "100%", n.style.height = "100%";var r = document.getElementById(e).appendChild(n);null != r && pJSDom.push(new pJS(e, a));
}, window.particlesJS.load = function (e, a, t) {
  var i = new XMLHttpRequest();i.open("GET", a), i.onreadystatechange = function (a) {
    if (4 == i.readyState) if (200 == i.status) {
      var s = JSON.parse(a.currentTarget.response);window.particlesJS(e, s), t && t();
    } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found");
  }, i.send();
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#666" },
    "shape": {
      "type": "circle",
      "stroke": { "width": 0, "color": "#000000" },
      "polygon": { "nb_sides": 5 },
      "image": { "src": "img/github.svg", "width": 100, "height": 100 }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }
    },
    "size": { "value": 5, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
    "line_linked": { "enable": true, "distance": 150, "color": "#666", "opacity": 0.4, "width": 1 },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" },
      "resize": true
    },
    "modes": {
      "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
      "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
      "repulse": { "distance": 200 },
      "push": { "particles_nb": 4 },
      "remove": { "particles_nb": 2 }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#ECECEC",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {!function (e) {
  "use strict";

  jQuery(window).load(function () {
    e("#zoom-01").elevateZoom({
      gallery: "gallery-01",
      zoomType: "lens",
      lensShape: "round",
      lensSize: 200,
      galleryActiveClass: "active",
      imageCrossfade: !0
    }), e("#zoom-01").on("click", function (a) {
      var t = e("#zoom-01").data("elevateZoom");
      return e.fancybox(t.getGalleryList()), !1;
    });
  }), e("#home-slider").owlCarousel({
    loop: !0,
    items: 1,
    dots: !1,
    nav: !0,
    autoHeight: !1,
    touchDrag: !0,
    mouseDrag: !0,
    margin: 0,
    autoplay: !0,
    slideSpeed: 300,
    navText: ["", ""],
    responsive: {
      0: { items: 1, nav: !1, dots: !1 },
      600: { items: 1, nav: !1, dots: !1 },
      768: { items: 1, nav: !0 },
      1100: { items: 1, nav: !0 }
    }
  }), e("#testimonial-slider").owlCarousel({
    loop: !0,
    items: 1,
    dots: !1,
    nav: !0,
    autoHeight: !1,
    touchDrag: !0,
    mouseDrag: !0,
    margin: 0,
    autoplay: !0,
    slideSpeed: 300,
    navText: ["", ""],
    responsive: {
      0: { items: 1, nav: !1, dots: !1 },
      600: { items: 1, nav: !1, dots: !1 },
      768: { items: 1, nav: !1 },
      1100: { items: 1, nav: !0 }
    }
  }), e("#clients-slider").owlCarousel({
    loop: !0,
    items: 6,
    dots: !1,
    nav: !1,
    autoHeight: !1,
    touchDrag: !0,
    mouseDrag: !0,
    margin: 30,
    autoplay: !1,
    slideSpeed: 300,
    navText: ["", ""],
    responsive: {
      0: { items: 1, nav: !1, dots: !1 },
      600: { items: 3, nav: !1, dots: !1 },
      768: { items: 4, nav: !1 },
      1100: { items: 6, nav: !1 }
    }
  }), e("#about-slider").owlCarousel({
    loop: !0,
    items: 1,
    nav: !1,
    dots: !0,
    autoHeight: !1,
    touchDrag: !0,
    mouseDrag: !0,
    margin: 0,
    autoplay: !0,
    slideSpeed: 300,
    navText: ["", ""],
    responsive: {
      0: { items: 1, nav: !1, dots: !1 },
      600: { items: 1, nav: !1, dots: !1 },
      768: { items: 1, nav: !1, dots: !0 },
      1100: { items: 1, nav: !1 }
    }
  }), e("#say-slider").owlCarousel({
    loop: !0,
    items: 1,
    dots: !0,
    nav: !1,
    autoHeight: !1,
    touchDrag: !0,
    mouseDrag: !1,
    margin: 0,
    autoplay: !0,
    slideSpeed: 100,
    navText: ["", ""],
    responsive: {
      0: { items: 1, nav: !1, dots: !1 },
      600: { items: 1, nav: !1, dots: !1 },
      768: { items: 1, nav: !1 },
      1100: { items: 1, nav: !1 }
    }
  }), e(".counter").length && e(".counter").counterUp({ delay: 20, time: 2e3 }), e(window).scroll(function () {
    e(".navbar").offset().top > 250 ? e(".main-nav-bar").addClass("top-nav-collapse") : e(".main-nav-bar").removeClass("top-nav-collapse");
  }), e(function () {
    function a() {
      var a = e(window).width();
      if (a > 767) {
        var t;
        e(".dropdown").hover(function () {
          clearTimeout(t), e(this).addClass("open");
        }, function () {
          var a = e(this);
          t = setTimeout(function () {
            a.removeClass("open");
          }, 50);
        });
      }
    }

    a(), e(window).resize(a);
  }), e(".btn-video-play").on("click", function () {
    e(".video-item .video-preview").append(video_url), e(this).hide();
  }), e(function () {
    e(".filter-design").on("click", function () {
      e(".branding, .creative").fadeOut(400), e(".design").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-design").addClass("active");
    }), e(".filter-branding").on("click", function () {
      e(".design, .creative").fadeOut(400), e(".branding").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-branding").addClass("active");
    }), e(".filter-creative").on("click", function () {
      e(".design, .branding").fadeOut(400), e(".creative").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-creative").addClass("active");
    }), e(".filter-all").on("click", function () {
      e(".design, .branding, .creative").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-all").addClass("active");
    });
  }), e(function () {
    e(".filter-new").on("click", function () {
      e(".poster, .banner, .calander, .bc").fadeOut(400), e(".new").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-new").addClass("active");
    }), e(".filter-poster").on("click", function () {
      e(".new, .banner, .calander, .bc").fadeOut(400), e(".poster").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-poster").addClass("active");
    }), e(".filter-banner").on("click", function () {
      e(".new, .poster, .calander, .bc").fadeOut(400), e(".banner").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-banner").addClass("active");
    }), e(".filter-calander").on("click", function () {
      e(".new, .poster, .banner, .bc").fadeOut(400), e(".calander").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-calander").addClass("active");
    }), e(".filter-bc").on("click", function () {
      e(".new, .poster, .banner, .calander").fadeOut(400), e(".bc").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-bc").addClass("active");
    }), e(".filter-all-products").on("click", function () {
      e(".new, .poster, .banner, .calander, .bc").fadeIn(400), e(".filter-nav li a").removeClass("active"), e(".filter-all-products").addClass("active");
    });
  }), e(".rating input").change(function () {
    var a = e(this);
    e(".rating .selected").removeClass("selected"), a.closest("label").addClass("selected");
  }), e(window).load(function () {
    e(".status").fadeOut(), e(".preloader").delay(350).fadeOut("slow");
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);
