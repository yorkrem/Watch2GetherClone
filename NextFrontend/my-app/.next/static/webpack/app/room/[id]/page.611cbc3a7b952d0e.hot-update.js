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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YoutubePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LinkPaste__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkPaste */ \"(app-pages-browser)/./src/app/room/[id]/LinkPaste.jsx\");\n/* harmony import */ var _YoutubeVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YoutubeVideo */ \"(app-pages-browser)/./src/app/room/[id]/YoutubeVideo.jsx\");\n/* harmony import */ var _socket_useSocketSetup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socket/useSocketSetup */ \"(app-pages-browser)/./src/app/socket/useSocketSetup.jsx\");\n/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chat */ \"(app-pages-browser)/./src/app/room/[id]/Chat.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction YoutubePage(params) {\n    _s();\n    const [youtubelink, Setyoutubelink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,_socket_useSocketSetup__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(params.id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-white border-gray-200 dark:bg-gray-900\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://flowbite.com/\",\n                            className: \"flex items-center space-x-3 rtl:space-x-reverse\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://flowbite.com/docs/images/logo.svg\",\n                                    className: \"h-8\",\n                                    alt: \"Flowbite Logo\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"self-center text-2xl font-semibold whitespace-nowrap dark:text-white\",\n                                    children: \"Flowbite\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            \"data-collapse-toggle\": \"navbar-default\",\n                            type: \"button\",\n                            className: \"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600\",\n                            \"aria-controls\": \"navbar-default\",\n                            \"aria-expanded\": \"false\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sr-only\",\n                                    children: \"Open main menu\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: \"w-5 h-5\",\n                                    \"aria-hidden\": \"true\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 17 14\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        stroke: \"currentColor\",\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        \"stroke-width\": \"2\",\n                                        d: \"M1 1h15M1 7h15M1 13h15\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden w-full md:block md:w-auto\",\n                            id: \"navbar-default\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-span-2 row-span-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LinkPaste__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                youtubelink: Setyoutubelink\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 64\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Services\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Pricing\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 h-4/6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-3\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_YoutubeVideo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                youtubelink: youtubelink,\n                                roomid: params.id\n                            }, void 0, false, {\n                                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 46\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            roomid: roomid\n                        }, void 0, false, {\n                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 45\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(YoutubePage, \"CgMX5CtCOUMqRjj8Ng1tMN3m1sk=\", false, function() {\n    return [\n        _socket_useSocketSetup__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = YoutubePage;\nvar _c;\n$RefreshReg$(_c, \"YoutubePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcm9vbS9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNEM7QUFDUjtBQUNNO0FBQ2U7QUFDL0I7QUFHWCxTQUFTTSxZQUFZQyxNQUFNOztJQUN0QyxNQUFLLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFDOUNHLGtFQUFjQSxDQUFDRyxPQUFPRyxFQUFFO0lBQ3hCLHFCQUNJOzswQkFDSSw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDWCw4REFBQ0U7NEJBQUVDLE1BQUs7NEJBQXdCSCxXQUFVOzs4Q0FDdEMsOERBQUNJO29DQUFJQyxLQUFJO29DQUE0Q0wsV0FBVTtvQ0FBTU0sS0FBSTs7Ozs7OzhDQUN6RSw4REFBQ0M7b0NBQUtQLFdBQVU7OENBQXVFOzs7Ozs7Ozs7Ozs7c0NBRTNGLDhEQUFDUTs0QkFBT0Msd0JBQXFCOzRCQUFpQkMsTUFBSzs0QkFBU1YsV0FBVTs0QkFBNE9XLGlCQUFjOzRCQUFpQkMsaUJBQWM7OzhDQUMzViw4REFBQ0w7b0NBQUtQLFdBQVU7OENBQVU7Ozs7Ozs4Q0FDMUIsOERBQUNhO29DQUFJYixXQUFVO29DQUFVYyxlQUFZO29DQUFPQyxPQUFNO29DQUE2QkMsTUFBSztvQ0FBT0MsU0FBUTs4Q0FDL0YsNEVBQUNDO3dDQUFLQyxRQUFPO3dDQUFlQyxrQkFBZTt3Q0FBUUMsbUJBQWdCO3dDQUFRQyxnQkFBYTt3Q0FBSUMsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR3RHLDhEQUFDdEI7NEJBQUlELFdBQVU7NEJBQW1DRixJQUFHO3NDQUNyRCw0RUFBQzBCO2dDQUFHeEIsV0FBVTs7a0RBQ1YsOERBQUN5QjtrREFDRCw0RUFBQ3hCOzRDQUFJRCxXQUFVO3NEQUF3Qiw0RUFBQ1Ysa0RBQVNBO2dEQUFDTSxhQUFhQzs7Ozs7Ozs7Ozs7Ozs7OztrREFFL0QsOERBQUM0QjtrREFDRCw0RUFBQ3ZCOzRDQUFFQyxNQUFLOzRDQUFJSCxXQUFVO3NEQUFrUDs7Ozs7Ozs7Ozs7a0RBRXhRLDhEQUFDeUI7a0RBQ0QsNEVBQUN2Qjs0Q0FBRUMsTUFBSzs0Q0FBSUgsV0FBVTtzREFBa1A7Ozs7Ozs7Ozs7O2tEQUV4USw4REFBQ3lCO2tEQUNELDRFQUFDdkI7NENBQUVDLE1BQUs7NENBQUlILFdBQVU7c0RBQWtQOzs7Ozs7Ozs7OztrREFFeFEsOERBQUN5QjtrREFDRCw0RUFBQ3ZCOzRDQUFFQyxNQUFLOzRDQUFJSCxXQUFVO3NEQUFrUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1wUiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBSUQsV0FBVTs7NEJBQWE7MENBQUMsOERBQUNULHFEQUFZQTtnQ0FBQ0ssYUFBYUE7Z0NBQWE4QixRQUFRL0IsT0FBT0csRUFBRTs7Ozs7Ozs7Ozs7O2tDQUN0Riw4REFBQ0c7d0JBQUlELFdBQVU7a0NBQWEsNEVBQUNQLDZDQUFJQTs0QkFBQ2lDLFFBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFEO0dBNUN3QmhDOztRQUVwQkYsOERBQWNBOzs7S0FGTUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yb29tL1tpZF0vcGFnZS5qc3g/N2FiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rUGFzdGUgZnJvbSBcIi4vTGlua1Bhc3RlXCI7XHJcbmltcG9ydCBZb3V0dWJlVmlkZW8gZnJvbSBcIi4vWW91dHViZVZpZGVvXCI7XHJcbmltcG9ydCB1c2VTb2NrZXRTZXR1cCBmcm9tIFwiLi4vLi4vc29ja2V0L3VzZVNvY2tldFNldHVwXCI7XHJcbmltcG9ydCBDaGF0IGZyb20gXCIuL0NoYXRcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBZb3V0dWJlUGFnZShwYXJhbXMpe1xyXG4gICAgY29uc3RbeW91dHViZWxpbmssIFNldHlvdXR1YmVsaW5rXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICB1c2VTb2NrZXRTZXR1cChwYXJhbXMuaWQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlci1ncmF5LTIwMCBkYXJrOmJnLWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNjcmVlbi14bCBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG14LWF1dG8gcC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZmxvd2JpdGUuY29tL1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMyBydGw6c3BhY2UteC1yZXZlcnNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9mbG93Yml0ZS5jb20vZG9jcy9pbWFnZXMvbG9nby5zdmdcIiBjbGFzc05hbWU9XCJoLThcIiBhbHQ9XCJGbG93Yml0ZSBMb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZi1jZW50ZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCB3aGl0ZXNwYWNlLW5vd3JhcCBkYXJrOnRleHQtd2hpdGVcIj5GbG93Yml0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLWNvbGxhcHNlLXRvZ2dsZT1cIm5hdmJhci1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBwLTIgdy0xMCBoLTEwIGp1c3RpZnktY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTUwMCByb3VuZGVkLWxnIG1kOmhpZGRlbiBob3ZlcjpiZy1ncmF5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JheS0yMDAgZGFyazp0ZXh0LWdyYXktNDAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpmb2N1czpyaW5nLWdyYXktNjAwXCIgYXJpYS1jb250cm9scz1cIm5hdmJhci1kZWZhdWx0XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJ3LTUgaC01XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAxNyAxNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIGQ9XCJNMSAxaDE1TTEgN2gxNU0xIDEzaDE1XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiB3LWZ1bGwgbWQ6YmxvY2sgbWQ6dy1hdXRvXCIgaWQ9XCJuYXZiYXItZGVmYXVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBmbGV4IGZsZXgtY29sIHAtNCBtZDpwLTAgbXQtNCBib3JkZXIgYm9yZGVyLWdyYXktMTAwIHJvdW5kZWQtbGcgYmctZ3JheS01MCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTggcnRsOnNwYWNlLXgtcmV2ZXJzZSBtZDptdC0wIG1kOmJvcmRlci0wIG1kOmJnLXdoaXRlIGRhcms6YmctZ3JheS04MDAgbWQ6ZGFyazpiZy1ncmF5LTkwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiByb3ctc3Bhbi0xXCI+PExpbmtQYXN0ZSB5b3V0dWJlbGluaz17U2V0eW91dHViZWxpbmt9PjwvTGlua1Bhc3RlPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBweC0zIHRleHQtZ3JheS05MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTEwMCBtZDpob3ZlcjpiZy10cmFuc3BhcmVudCBtZDpib3JkZXItMCBtZDpob3Zlcjp0ZXh0LWJsdWUtNzAwIG1kOnAtMCBkYXJrOnRleHQtd2hpdGUgbWQ6ZGFyazpob3Zlcjp0ZXh0LWJsdWUtNTAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnRcIj5BYm91dDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcHgtMyB0ZXh0LWdyYXktOTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0xMDAgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgbWQ6Ym9yZGVyLTAgbWQ6aG92ZXI6dGV4dC1ibHVlLTcwMCBtZDpwLTAgZGFyazp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6dGV4dC1ibHVlLTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50XCI+U2VydmljZXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweS0yIHB4LTMgdGV4dC1ncmF5LTkwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMTAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IG1kOmJvcmRlci0wIG1kOmhvdmVyOnRleHQtYmx1ZS03MDAgbWQ6cC0wIGRhcms6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOnRleHQtYmx1ZS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgbWQ6ZGFyazpob3ZlcjpiZy10cmFuc3BhcmVudFwiPlByaWNpbmc8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweS0yIHB4LTMgdGV4dC1ncmF5LTkwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMTAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IG1kOmJvcmRlci0wIG1kOmhvdmVyOnRleHQtYmx1ZS03MDAgbWQ6cC0wIGRhcms6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOnRleHQtYmx1ZS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgbWQ6ZGFyazpob3ZlcjpiZy10cmFuc3BhcmVudFwiPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGgtNC82XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTNcIj4gPFlvdXR1YmVWaWRlbyB5b3V0dWJlbGluaz17eW91dHViZWxpbmt9IHJvb21pZD17cGFyYW1zLmlkfT48L1lvdXR1YmVWaWRlbz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPjxDaGF0IHJvb21pZD17cm9vbWlkfT48L0NoYXQ+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlua1Bhc3RlIiwiWW91dHViZVZpZGVvIiwidXNlU29ja2V0U2V0dXAiLCJDaGF0IiwiWW91dHViZVBhZ2UiLCJwYXJhbXMiLCJ5b3V0dWJlbGluayIsIlNldHlvdXR1YmVsaW5rIiwiaWQiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsInNwYW4iLCJidXR0b24iLCJkYXRhLWNvbGxhcHNlLXRvZ2dsZSIsInR5cGUiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1leHBhbmRlZCIsInN2ZyIsImFyaWEtaGlkZGVuIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInBhdGgiLCJzdHJva2UiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsInN0cm9rZS13aWR0aCIsImQiLCJ1bCIsImxpIiwicm9vbWlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/room/[id]/page.jsx\n"));

/***/ })

});