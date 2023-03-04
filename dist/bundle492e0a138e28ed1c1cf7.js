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

/***/ "./modules/createList.js":
/*!*******************************!*\
  !*** ./modules/createList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getSavedTodoItems() {\n  var savedData = localStorage.getItem('todoItems');\n  return savedData ? JSON.parse(savedData) : [];\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSavedTodoItems);\n\n//# sourceURL=webpack://to-do-list/./modules/createList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_createList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/createList.js */ \"./modules/createList.js\");\n\nvar todoListItem = document.querySelector('.activity');\nvar todoList = document.getElementsByClassName('todo-list')[0];\nvar clearButton = document.querySelector('.clear');\nvar todoItems = [];\nfunction saveTodoItems() {\n  localStorage.setItem('todoItems', JSON.stringify(todoItems));\n}\nfunction fixindex() {\n  for (var i = 0; i < todoItems.length; i += 1) {\n    todoItems[i].index = i;\n  }\n  saveTodoItems();\n}\nfunction checkboxCheck() {\n  var checkboxes = document.querySelectorAll('.checkbox');\n  for (var i = 0; i < checkboxes.length; i += 1) {\n    if (checkboxes[i].checked) {\n      todoItems[i].completed = true;\n    }\n  }\n  return todoItems;\n}\nfunction addTodo(todo) {\n  var todolistObj = {\n    description: todo,\n    completed: false,\n    index: todoItems.length\n  };\n  todoItems.push(todolistObj);\n  saveTodoItems();\n}\nfunction editItem(label) {\n  var editItem = document.querySelectorAll('.edit-item');\n  label.contentEditable = true;\n  label.addEventListener('blur', function () {\n    for (var i = 0; i < editItem.length; i += 1) {\n      todoItems[i].description = editItem[i].innerText;\n    }\n    saveTodoItems();\n  });\n}\ntodoItems = (0,_modules_createList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nfunction displayTodoItems() {\n  todoList.innerHTML = '';\n  for (var i = 0; i < todoItems.length; i += 1) {\n    var todoItem = todoItems[i];\n    var item = document.createElement('li');\n    item.classList.add('list-item');\n    var checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    checkbox.checked = todoItem.completed;\n    checkbox.classList.add('checkbox');\n    var label = document.createElement('label');\n    label.htmlFor = 'checkbox';\n    label.innerText = todoItem.description;\n    label.classList.add('edit-item');\n    var icon = document.createElement('i');\n    icon.className = 'fas fa-ellipsis-v';\n    item.appendChild(checkbox);\n    item.appendChild(label);\n    item.appendChild(icon);\n    var itemId = todoItem.index;\n    item.setAttribute('data-id', itemId);\n    todoList.appendChild(item);\n    editItem(label);\n  }\n  fixindex();\n}\nfunction deleteTodoItem() {\n  for (var i = todoItems.length - 1; i >= 0; i -= 1) {\n    if (todoItems[i].completed === true) {\n      todoItems.splice(i, 1);\n    }\n  }\n  saveTodoItems();\n  displayTodoItems();\n}\ndisplayTodoItems();\ntodoListItem.addEventListener('keydown', function (event) {\n  if (event.keyCode === 13) {\n    addTodo(todoListItem.value);\n    todoListItem.value = '';\n    event.preventDefault();\n    displayTodoItems();\n  }\n});\nclearButton.addEventListener('click', function () {\n  checkboxCheck();\n  deleteTodoItem();\n});\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;