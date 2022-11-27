/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_buttonBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/buttonBlock */ \"./modules/buttonBlock.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ \"./modules/form.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/burger */ \"./modules/burger.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n\r\n\r\n\r\n \r\n \r\n\r\n\r\n(0,_modules_buttonBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = ()=> {\r\n    const accordeon = () => {\r\n        const accordeon = document.querySelector('.accord__content');\r\n        const element = document.querySelectorAll('.accord__element');\r\n        const elementContent = document.querySelectorAll('.accord__element-content');\r\n     \r\n        accordeon.addEventListener('click', (e) => {\r\n           if (e.target.closest('.accord__element')) {\r\n              const elementBtn = e.target.closest('.accord__element');\r\n              element.forEach((elem, i) => {\r\n                 if (elem === elementBtn && elementContent[i].style.display === '') {\r\n                    elem.classList.add('active');\r\n                    elementContent[i].style.display = 'block';\r\n\r\n                    \r\n                 } else if (elem === elementBtn && elementContent[i].style.display === 'block') {\r\n                    elem.classList.remove('active');\r\n                    elementContent[i].style.display = '';\r\n                 } else {\r\n                    elem.classList.remove('active');\r\n                    elementContent[i].style.display = '';\r\n                 };\r\n              });\r\n           };\r\n        });\r\n     }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/burger.js":
/*!***************************!*\
  !*** ./modules/burger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst burger = () => {\r\n    const burgerMenu = document.querySelector('.burger-menu');\r\n    const burgerMenuClose = document.querySelector('.burger-menu__close');\r\n    const burgerMenuOpen = document.querySelector('.header-block__ico-menu');\r\n    const body = document.querySelector('body');\r\n    const overlay = document.querySelector('.overlay');\r\n\r\n\r\n    burgerMenuOpen.addEventListener('click', () => {\r\n        burgerMenu.style.display='block';\r\n        body.classList.add('overlay');\r\n    });\r\n    burgerMenuClose.addEventListener('click', () => {\r\n        burgerMenu.style.display='none';\r\n        body.classList.remove('overlay');\r\n    });\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack:///./modules/burger.js?");

/***/ }),

/***/ "./modules/buttonBlock.js":
/*!********************************!*\
  !*** ./modules/buttonBlock.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst buttonBlock = () => {\r\n const button = document.querySelector('.button-block__button');\r\n\r\n button.addEventListener('click', ()=> {\r\n    button.style.background = 'linear-gradient(206.57deg, #DD80ED 0%, #3D28E3 83.33%';\r\n    const buttonClick = () => {\r\n        button.setAttribute('disabled', true)\r\n        button.style.background = '#CBCBCC';\r\n    }\r\n\r\n    setTimeout(buttonClick, 1000)\r\n    })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonBlock);\n\n//# sourceURL=webpack:///./modules/buttonBlock.js?");

/***/ }),

/***/ "./modules/form.js":
/*!*************************!*\
  !*** ./modules/form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst form = () => {\r\n   const input = document.querySelector('.UI__input');\r\n   const hint = document.querySelector('.UI__hint');\r\n   const error = document.querySelector('.UI__error');\r\n   console.dir(input);\r\n\r\n   input.addEventListener('input', (event)=> {\r\n\r\n      if(event.target.value !== \"\"){\r\n         hint.style.opacity = \"1\";\r\n      } else{\r\n         hint.style.opacity = \"0\";\r\n         error.style.opacity = '0';\r\n      }\r\n   });\r\n\r\n   input.addEventListener('change', (event)=> {\r\n      event.preventDefault();\r\n   \r\n    if (!input.value.includes('@') && !input.value == '') {\r\n      input.classList.add('UI__input_error'); \r\n      hint.classList.add('UI__hint_error'); \r\n      error.classList.add('UI__hint_error'); \r\n      error.style.opacity = '1';\r\n    } else if(input.value.includes('@') || input.value == '') {\r\n      input.classList.remove('UI__input_error'); \r\n      hint.classList.remove('UI__hint_error'); \r\n      error.classList.remove('UI__hint_error'); \r\n      error.style.opacity = '0';\r\n    }\r\n\r\n   }\r\n);\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack:///./modules/form.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menu = document.querySelector('.menu');\r\n\r\n    menu.addEventListener('click', (e) => {\r\n \r\n       const eTarget = e.target.closest('a[href*=\"#\"]');\r\n\r\n          // Плавно перемещаемся к выбранному блоку из списка меню\r\n        if (eTarget && menu.contains(e.target)) {\r\n          e.preventDefault();\r\n          const block = e.target.getAttribute('href');\r\n          document.querySelector(block).scrollIntoView({\r\n             behavior: 'smooth',\r\n             block: 'start'\r\n          });\r\n       } \r\n    });\r\n };\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;