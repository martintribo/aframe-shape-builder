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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/aframe-gridhelper-component/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/aframe-gridhelper-component/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("if (typeof AFRAME === 'undefined') {\n  throw new Error('Component attempted to register before AFRAME was available.');\n}\n\n/**\n * GridHelper component for A-Frame.\n */\nAFRAME.registerComponent('gridhelper', {\n  schema: {\n    size: { default: 5 },\n    divisions: { default: 10 },\n    colorCenterLine: {default: 'red'},\n    colorGrid: {default: 'black'}\n  },\n\n  /**\n   * Called once when component is attached. Generally for initial setup.\n   */\n  init: function () {\n    var scene = this.el.object3D;\n    var data = this.data;\n\n    var size = data.size;\n    var divisions = data.divisions;\n    var colorCenterLine = data.colorCenterLine;\n    var colorGrid = data.colorGrid;\n\n    var gridHelper = new THREE.GridHelper( size, divisions, colorCenterLine, colorGrid );\n    gridHelper.name = \"gridHelper\";\n    scene.add(gridHelper);\n  },\n  remove: function () {\n    var scene = this.el.object3D;\n    scene.remove(scene.getObjectByName(\"gridHelper\"));\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/aframe-gridhelper-component/index.js?");

/***/ }),

/***/ "./src/builder-container.mjs":
/*!***********************************!*\
  !*** ./src/builder-container.mjs ***!
  \***********************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nAFRAME.registerComponent('builder-container', {\r\n    init: function () {\r\n        this.el.childNodes.forEach(node => {\r\n            if (node instanceof HTMLElement) {\r\n                node.setAttribute('builder-node', '');\r\n            }\r\n        });\r\n    }\r\n  });\n\n//# sourceURL=webpack:///./src/builder-container.mjs?");

/***/ }),

/***/ "./src/builder-node.mjs":
/*!******************************!*\
  !*** ./src/builder-node.mjs ***!
  \******************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nAFRAME.registerComponent('builder-node', {\r\n    init: function () {\r\n        this.el.addEventListener('mouseenter', () => {\r\n            this.el.setAttribute('color', 'red');\r\n        });\r\n        var grid = document.createElement('a-entity');\r\n        grid.setAttribute('gridhelper', '');\r\n        this.el.appendChild(grid);\r\n    }\r\n  });\n\n//# sourceURL=webpack:///./src/builder-node.mjs?");

/***/ }),

/***/ "./src/index.mjs":
/*!***********************!*\
  !*** ./src/index.mjs ***!
  \***********************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var aframe_gridhelper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aframe-gridhelper-component */ \"./node_modules/aframe-gridhelper-component/index.js\");\n/* harmony import */ var _builder_container_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builder-container.mjs */ \"./src/builder-container.mjs\");\n/* harmony import */ var _builder_node_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./builder-node.mjs */ \"./src/builder-node.mjs\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.mjs?");

/***/ })

/******/ });