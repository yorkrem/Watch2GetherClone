"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/room/[id]/page",{

/***/ "(app-pages-browser)/./src/app/room/[id]/page.jsx":
/*!************************************!*\
  !*** ./src/app/room/[id]/page.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YoutubePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LinkPaste__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkPaste */ \"(app-pages-browser)/./src/app/room/[id]/LinkPaste.jsx\");\n/* harmony import */ var _YoutubeVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YoutubeVideo */ \"(app-pages-browser)/./src/app/room/[id]/YoutubeVideo.jsx\");\n/* harmony import */ var _socket_useSocketSetup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socket/useSocketSetup */ \"(app-pages-browser)/./src/app/socket/useSocketSetup.jsx\");\n/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chat */ \"(app-pages-browser)/./src/app/room/[id]/Chat.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction YoutubePage(params) {\n    _s();\n    const [youtubelink, Setyoutubelink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [roomid, setRoomId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(params.params.id);\n    (0,_socket_useSocketSetup__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(roomid);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-white border-gray-200 dark:bg-gray-900\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://flowbite.com/\",\n                            className: \"flex items-center space-x-3 rtl:space-x-reverse\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://flowbite.com/docs/images/logo.svg\",\n                                    className: \"h-8\",\n                                    alt: \"Flowbite Logo\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"self-center text-2xl font-semibold whitespace-nowrap dark:text-white\",\n                                    children: \"Flowbite\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            \"data-collapse-toggle\": \"navbar-default\",\n                            type: \"button\",\n                            className: \"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600\",\n                            \"aria-controls\": \"navbar-default\",\n                            \"aria-expanded\": \"false\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sr-only\",\n                                    children: \"Open main menu\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: \"w-5 h-5\",\n                                    \"aria-hidden\": \"true\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 17 14\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        stroke: \"currentColor\",\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        \"stroke-width\": \"2\",\n                                        d: \"M1 1h15M1 7h15M1 13h15\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden w-full md:block md:w-auto\",\n                            id: \"navbar-default\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-span-2 row-span-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LinkPaste__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                youtubelink: Setyoutubelink\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 64\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Services\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Pricing\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 h-4/6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-3\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_YoutubeVideo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                youtubelink: youtubelink,\n                                roomid: params.id\n                            }, void 0, false, {\n                                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 46\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            roomid: params.id\n                        }, void 0, false, {\n                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 45\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(YoutubePage, \"lXSzfF4m8vusJZx3PCic2wGPr5Q=\", false, function() {\n    return [\n        _socket_useSocketSetup__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = YoutubePage;\nvar _c;\n$RefreshReg$(_c, \"YoutubePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcm9vbS9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDUjtBQUNNO0FBQ2U7QUFDL0I7QUFHWCxTQUFTTSxZQUFZQyxNQUFNOztJQUN0QyxNQUFLLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFDOUMsTUFBSyxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDTSxPQUFPQSxNQUFNLENBQUNLLEVBQUU7SUFDcERSLGtFQUFjQSxDQUFDTTtJQUNmLHFCQUNJOzswQkFDSSw4REFBQ0c7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDWCw4REFBQ0U7NEJBQUVDLE1BQUs7NEJBQXdCSCxXQUFVOzs4Q0FDdEMsOERBQUNJO29DQUFJQyxLQUFJO29DQUE0Q0wsV0FBVTtvQ0FBTU0sS0FBSTs7Ozs7OzhDQUN6RSw4REFBQ0M7b0NBQUtQLFdBQVU7OENBQXVFOzs7Ozs7Ozs7Ozs7c0NBRTNGLDhEQUFDUTs0QkFBT0Msd0JBQXFCOzRCQUFpQkMsTUFBSzs0QkFBU1YsV0FBVTs0QkFBNE9XLGlCQUFjOzRCQUFpQkMsaUJBQWM7OzhDQUMzViw4REFBQ0w7b0NBQUtQLFdBQVU7OENBQVU7Ozs7Ozs4Q0FDMUIsOERBQUNhO29DQUFJYixXQUFVO29DQUFVYyxlQUFZO29DQUFPQyxPQUFNO29DQUE2QkMsTUFBSztvQ0FBT0MsU0FBUTs4Q0FDL0YsNEVBQUNDO3dDQUFLQyxRQUFPO3dDQUFlQyxrQkFBZTt3Q0FBUUMsbUJBQWdCO3dDQUFRQyxnQkFBYTt3Q0FBSUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR3RHLDhEQUFDdEI7NEJBQUlELFdBQVU7NEJBQW1DRixJQUFHO3NDQUNyRCw0RUFBQzBCO2dDQUFHeEIsV0FBVTs7a0RBQ1YsOERBQUN5QjtrREFDRCw0RUFBQ3hCOzRDQUFJRCxXQUFVO3NEQUF3Qiw0RUFBQ1osa0RBQVNBO2dEQUFDTSxhQUFhQzs7Ozs7Ozs7Ozs7Ozs7OztrREFFL0QsOERBQUM4QjtrREFDRCw0RUFBQ3ZCOzRDQUFFQyxNQUFLOzRDQUFJSCxXQUFVO3NEQUFrUDs7Ozs7Ozs7Ozs7a0RBRXhRLDhEQUFDeUI7a0RBQ0QsNEVBQUN2Qjs0Q0FBRUMsTUFBSzs0Q0FBSUgsV0FBVTtzREFBa1A7Ozs7Ozs7Ozs7O2tEQUV4USw4REFBQ3lCO2tEQUNELDRFQUFDdkI7NENBQUVDLE1BQUs7NENBQUlILFdBQVU7c0RBQWtQOzs7Ozs7Ozs7OztrREFFeFEsOERBQUN5QjtrREFDRCw0RUFBQ3ZCOzRDQUFFQyxNQUFLOzRDQUFJSCxXQUFVO3NEQUFrUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1wUiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBSUQsV0FBVTs7NEJBQWE7MENBQUMsOERBQUNYLHFEQUFZQTtnQ0FBQ0ssYUFBYUE7Z0NBQWFFLFFBQVFILE9BQU9LLEVBQUU7Ozs7Ozs7Ozs7OztrQ0FDdEYsOERBQUNHO3dCQUFJRCxXQUFVO2tDQUFhLDRFQUFDVCw2Q0FBSUE7NEJBQUNLLFFBQVFILE9BQU9LLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkU7R0E3Q3dCTjs7UUFHcEJGLDhEQUFjQTs7O0tBSE1FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcm9vbS9baWRdL3BhZ2UuanN4PzdhYmIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGlua1Bhc3RlIGZyb20gXCIuL0xpbmtQYXN0ZVwiO1xyXG5pbXBvcnQgWW91dHViZVZpZGVvIGZyb20gXCIuL1lvdXR1YmVWaWRlb1wiO1xyXG5pbXBvcnQgdXNlU29ja2V0U2V0dXAgZnJvbSBcIi4uLy4uL3NvY2tldC91c2VTb2NrZXRTZXR1cFwiO1xyXG5pbXBvcnQgQ2hhdCBmcm9tIFwiLi9DaGF0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWW91dHViZVBhZ2UocGFyYW1zKXtcclxuICAgIGNvbnN0W3lvdXR1YmVsaW5rLCBTZXR5b3V0dWJlbGlua10gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3Rbcm9vbWlkLCBzZXRSb29tSWRdID0gdXNlU3RhdGUocGFyYW1zLnBhcmFtcy5pZClcclxuICAgIHVzZVNvY2tldFNldHVwKHJvb21pZCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYm9yZGVyLWdyYXktMjAwIGRhcms6YmctZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLXhsIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXgtYXV0byBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mbG93Yml0ZS5jb20vXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHJ0bDpzcGFjZS14LXJldmVyc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Zsb3diaXRlLmNvbS9kb2NzL2ltYWdlcy9sb2dvLnN2Z1wiIGNsYXNzTmFtZT1cImgtOFwiIGFsdD1cIkZsb3diaXRlIExvZ29cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxmLWNlbnRlciB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHdoaXRlc3BhY2Utbm93cmFwIGRhcms6dGV4dC13aGl0ZVwiPkZsb3diaXRlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtY29sbGFwc2UtdG9nZ2xlPVwibmF2YmFyLWRlZmF1bHRcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiB3LTEwIGgtMTAganVzdGlmeS1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNTAwIHJvdW5kZWQtbGcgbWQ6aGlkZGVuIGhvdmVyOmJnLWdyYXktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTIwMCBkYXJrOnRleHQtZ3JheS00MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmZvY3VzOnJpbmctZ3JheS02MDBcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyLWRlZmF1bHRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cInctNSBoLTVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDE3IDE0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIyXCIgZD1cIk0xIDFoMTVNMSA3aDE1TTEgMTNoMTVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHctZnVsbCBtZDpibG9jayBtZDp3LWF1dG9cIiBpZD1cIm5hdmJhci1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIGZsZXggZmxleC1jb2wgcC00IG1kOnAtMCBtdC00IGJvcmRlciBib3JkZXItZ3JheS0xMDAgcm91bmRlZC1sZyBiZy1ncmF5LTUwIG1kOmZsZXgtcm93IG1kOnNwYWNlLXgtOCBydGw6c3BhY2UteC1yZXZlcnNlIG1kOm10LTAgbWQ6Ym9yZGVyLTAgbWQ6Ymctd2hpdGUgZGFyazpiZy1ncmF5LTgwMCBtZDpkYXJrOmJnLWdyYXktOTAwIGRhcms6Ym9yZGVyLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIHJvdy1zcGFuLTFcIj48TGlua1Bhc3RlIHlvdXR1YmVsaW5rPXtTZXR5b3V0dWJlbGlua30+PC9MaW5rUGFzdGU+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweS0yIHB4LTMgdGV4dC1ncmF5LTkwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMTAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IG1kOmJvcmRlci0wIG1kOmhvdmVyOnRleHQtYmx1ZS03MDAgbWQ6cC0wIGRhcms6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOnRleHQtYmx1ZS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgbWQ6ZGFyazpob3ZlcjpiZy10cmFuc3BhcmVudFwiPkFib3V0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBweC0zIHRleHQtZ3JheS05MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTEwMCBtZDpob3ZlcjpiZy10cmFuc3BhcmVudCBtZDpib3JkZXItMCBtZDpob3Zlcjp0ZXh0LWJsdWUtNzAwIG1kOnAtMCBkYXJrOnRleHQtd2hpdGUgbWQ6ZGFyazpob3Zlcjp0ZXh0LWJsdWUtNTAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnRcIj5TZXJ2aWNlczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcHgtMyB0ZXh0LWdyYXktOTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0xMDAgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgbWQ6Ym9yZGVyLTAgbWQ6aG92ZXI6dGV4dC1ibHVlLTcwMCBtZDpwLTAgZGFyazp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6dGV4dC1ibHVlLTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50XCI+UHJpY2luZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcHgtMyB0ZXh0LWdyYXktOTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0xMDAgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgbWQ6Ym9yZGVyLTAgbWQ6aG92ZXI6dGV4dC1ibHVlLTcwMCBtZDpwLTAgZGFyazp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6dGV4dC1ibHVlLTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50XCI+Q29udGFjdDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgaC00LzZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tM1wiPiA8WW91dHViZVZpZGVvIHlvdXR1YmVsaW5rPXt5b3V0dWJlbGlua30gcm9vbWlkPXtwYXJhbXMuaWR9PjwvWW91dHViZVZpZGVvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+PENoYXQgcm9vbWlkPXtwYXJhbXMuaWR9PjwvQ2hhdD48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rUGFzdGUiLCJZb3V0dWJlVmlkZW8iLCJ1c2VTb2NrZXRTZXR1cCIsIkNoYXQiLCJZb3V0dWJlUGFnZSIsInBhcmFtcyIsInlvdXR1YmVsaW5rIiwiU2V0eW91dHViZWxpbmsiLCJyb29taWQiLCJzZXRSb29tSWQiLCJpZCIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0Iiwic3BhbiIsImJ1dHRvbiIsImRhdGEtY29sbGFwc2UtdG9nZ2xlIiwidHlwZSIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsInN0cm9rZSIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwic3Ryb2tlLXdpZHRoIiwiZCIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/room/[id]/page.jsx\n"));

/***/ })

});