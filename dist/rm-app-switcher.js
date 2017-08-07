(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["rm-app-switcher"] = factory(require("angular"));
	else
		root["rm-app-switcher"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(4);

	var _angular2 = _interopRequireDefault(_angular);

	var _rmAppSwitcherDirective = __webpack_require__(2);

	var _rmAppSwitcherDirective2 = _interopRequireDefault(_rmAppSwitcherDirective);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('relaymark.app-switcher', []).directive('rmAppSwitcher', _rmAppSwitcherDirective2.default.createInstance).name;

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rmAppSwitcher = __webpack_require__(1);

	var _rmAppSwitcher2 = _interopRequireDefault(_rmAppSwitcher);

	var _rmAppSwitcher3 = __webpack_require__(3);

	var _rmAppSwitcher4 = _interopRequireDefault(_rmAppSwitcher3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var rmAppSwitcher = function () {
	  function rmAppSwitcher($document) {
	    _classCallCheck(this, rmAppSwitcher);

	    this.restrict = 'E';
	    this.templateUrl = _rmAppSwitcher4.default;
	    this.transclude = true;
	    this.replace = true;
	    this.scope = true;
	    this.controllerAs = 'ctrl';
	    this.bindToController = {
	      rmAppList: '='
	    };

	    /* @ngInject */
	    this.controller = function ($scope, $filter) {
	      var self = this;
	      self.showDropdown = false;
	    };
	    this.controller.$inject = ["$scope", "$filter"];

	    this.link = function (scope, element, attrs) {
	      scope.rmAppList = [{
	        icon: 'icon-directory',
	        name: 'Directory',
	        url: 'http://beta.relaymark.com/'
	      }, {
	        icon: 'icon-community',
	        name: 'Community',
	        url: 'http://beta.community.relaymark.com/'
	      }, {
	        icon: 'icon-analytics',
	        name: 'Analytics',
	        url: 'http://go.relaymark.com/'
	      }];

	      $document.bind('click', function (event) {
	        var isClickedElementChildOfPopup = element.find(event.target).length > 0;

	        if (isClickedElementChildOfPopup) return;

	        scope.showDropdown = false;
	        scope.$apply();
	      });
	    };
	  }

	  _createClass(rmAppSwitcher, null, [{
	    key: 'createInstance',
	    value: function createInstance($document) {
	      rmAppSwitcher.instance = new rmAppSwitcher($document);
	      return rmAppSwitcher.instance;
	    }
	  }]);

	  return rmAppSwitcher;
	}();

	exports.default = rmAppSwitcher;

	rmAppSwitcher.createInstance.$inject = ['$document'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	var path = 'D:/ProjetGit/Relaymark.AppSwitcher/src/rm-app-switcher.html';
	var html = "<div class=\"rm-app-switcher\"  ng-class=\"{'rm-app-switcher-open': showDropdown}\">\r\n    <div ng-click=\"showDropdown = !showDropdown\" class=\"rm-app-switcher-button\"></div>\r\n    <div class=\"rm-app-switcher-dropdown\">\r\n        <ul > \r\n            <li ng-repeat=\"rmApp in rmAppList\">\r\n                <a href=\"{{rmApp.url}}\">\r\n                    <div class=\"rm-app-switcher-icon {{rmApp.icon}}\"></div>\r\n                    <div class=\"rm-app-switcher-title\" ng-bind=\"rmApp.name\"></div>\r\n                </a>\r\n            </li> \r\n        </ul> \r\n    </div>\r\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;