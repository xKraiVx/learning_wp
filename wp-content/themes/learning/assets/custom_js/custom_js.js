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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/custom_js/index.js":
/*!********************************!*\
  !*** ./app/custom_js/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var animCanvases = document.querySelectorAll('.anim-canvas');
animCanvases.forEach(function (canvas, index) {
  canvas.id = 'canvas_' + index;
});

for (var i = 0; i < animCanvases.length; i++) {
  var curAnim = animCanvases[i];
  console.log(curAnim);
  /* initPaper(i, document.querySelector('.anim-canvas_' + (i + 1))); */
}

var mypapers = [];
var canv_1 = document.querySelector('.anim-canvas_1');
var canv_2 = document.querySelector('.anim-canvas_2');
var canv_3 = document.querySelector('.anim-canvas_3');
initPaper(0, canv_1);
initPaper(1, canv_2);
initPaper(2, canv_3);

function initPaper(id, canvasElement) {
  mypapers[id] = new paper.PaperScope();
  paper = mypapers[id];
  paper.setup(canvasElement);
  var points = 25;
  var length = 35;
  var path = new Path({
    strokeColor: '#E4141B',
    strokeWidth: 20,
    strokeCap: 'round'
  });
  var start = view.center / [10, 1];

  for (var i = 0; i < points; i++) {
    path.add(start + new Point(i * length, 0));
  }

  var tool = new paper.Tool();

  tool.onMouseMove = function (event) {
    path.firstSegment.point = event.point;

    for (var i = 0; i < points - 1; i++) {
      var segment = path.segments[i];
      var nextSegment = segment.next;
      var vector = segment.point - nextSegment.point;
      vector.length = length;
      nextSegment.point = segment.point - vector;
    }

    path.smooth({
      type: 'continuous'
    });
  };

  tool.onMouseDown = function (event) {
    path.fullySelected = true;
    path.strokeColor = '#e08285';
  };

  tool.onMouseUp = function (event) {
    path.fullySelected = false;
    path.strokeColor = '#e4141b';
  };
}

/***/ }),

/***/ 1:
/*!*****************************!*\
  !*** multi ./app/custom_js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OpenServer\domains\wp-learning\wp-content\themes\learning\app\custom_js */"./app/custom_js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=custom_js.js.map