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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YoutubePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LinkPaste__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkPaste */ \"(app-pages-browser)/./src/app/room/[id]/LinkPaste.jsx\");\n/* harmony import */ var _YoutubeVideo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YoutubeVideo */ \"(app-pages-browser)/./src/app/room/[id]/YoutubeVideo.jsx\");\n/* harmony import */ var _socket_useSocketSetup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../socket/useSocketSetup */ \"(app-pages-browser)/./src/app/socket/useSocketSetup.jsx\");\n/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Chat */ \"(app-pages-browser)/./src/app/room/[id]/Chat.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction YoutubePage(param) {\n    let { roomid } = param;\n    _s();\n    (0,_socket_useSocketSetup__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(roomid);\n    const [youtubelink, Setyoutubelink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"bg-white border-gray-200 dark:bg-gray-900\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://flowbite.com/\",\n                            className: \"flex items-center space-x-3 rtl:space-x-reverse\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://flowbite.com/docs/images/logo.svg\",\n                                    className: \"h-8\",\n                                    alt: \"Flowbite Logo\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"self-center text-2xl font-semibold whitespace-nowrap dark:text-white\",\n                                    children: \"Flowbite\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            \"data-collapse-toggle\": \"navbar-default\",\n                            type: \"button\",\n                            className: \"inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600\",\n                            \"aria-controls\": \"navbar-default\",\n                            \"aria-expanded\": \"false\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sr-only\",\n                                    children: \"Open main menu\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: \"w-5 h-5\",\n                                    \"aria-hidden\": \"true\",\n                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                    fill: \"none\",\n                                    viewBox: \"0 0 17 14\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        stroke: \"currentColor\",\n                                        \"stroke-linecap\": \"round\",\n                                        \"stroke-linejoin\": \"round\",\n                                        \"stroke-width\": \"2\",\n                                        d: \"M1 1h15M1 7h15M1 13h15\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden w-full md:block md:w-auto\",\n                            id: \"navbar-default\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-span-2 row-span-1\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LinkPaste__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                youtubelink: Setyoutubelink\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 64\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Services\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Pricing\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-4 h-4/6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-3\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_YoutubeVideo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                youtubelink: youtubelink,\n                                roomid: roomid\n                            }, void 0, false, {\n                                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 46\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            roomid: roomid\n                        }, void 0, false, {\n                            fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 45\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\School\\\\Individuele\\\\ProjectCode\\\\NextFrontend\\\\my-app\\\\src\\\\app\\\\room\\\\[id]\\\\page.jsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(YoutubePage, \"zNe4PDA8YvIJTvy032SKf4YlY/k=\", false, function() {\n    return [\n        _socket_useSocketSetup__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = YoutubePage;\nvar _c;\n$RefreshReg$(_c, \"YoutubePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcm9vbS9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDRztBQUNNO0FBQ2U7QUFDL0I7QUFHWCxTQUFTSyxZQUFZLEtBQVE7UUFBUixFQUFDQyxNQUFNLEVBQUMsR0FBUjs7SUFDaENILGtFQUFjQSxDQUFDRztJQUNmLE1BQUssQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUM5QyxxQkFDSTs7MEJBQ0ksOERBQUNTO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFFQyxNQUFLOzRCQUF3QkgsV0FBVTs7OENBQ3RDLDhEQUFDSTtvQ0FBSUMsS0FBSTtvQ0FBNENMLFdBQVU7b0NBQU1NLEtBQUk7Ozs7Ozs4Q0FDekUsOERBQUNDO29DQUFLUCxXQUFVOzhDQUF1RTs7Ozs7Ozs7Ozs7O3NDQUUzRiw4REFBQ1E7NEJBQU9DLHdCQUFxQjs0QkFBaUJDLE1BQUs7NEJBQVNWLFdBQVU7NEJBQTRPVyxpQkFBYzs0QkFBaUJDLGlCQUFjOzs4Q0FDM1YsOERBQUNMO29DQUFLUCxXQUFVOzhDQUFVOzs7Ozs7OENBQzFCLDhEQUFDYTtvQ0FBSWIsV0FBVTtvQ0FBVWMsZUFBWTtvQ0FBT0MsT0FBTTtvQ0FBNkJDLE1BQUs7b0NBQU9DLFNBQVE7OENBQy9GLDRFQUFDQzt3Q0FBS0MsUUFBTzt3Q0FBZUMsa0JBQWU7d0NBQVFDLG1CQUFnQjt3Q0FBUUMsZ0JBQWE7d0NBQUlDLEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUd0Ryw4REFBQ3RCOzRCQUFJRCxXQUFVOzRCQUFtQ3dCLElBQUc7c0NBQ3JELDRFQUFDQztnQ0FBR3pCLFdBQVU7O2tEQUNWLDhEQUFDMEI7a0RBQ0QsNEVBQUN6Qjs0Q0FBSUQsV0FBVTtzREFBd0IsNEVBQUNULGtEQUFTQTtnREFBQ00sYUFBYUM7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBRS9ELDhEQUFDNEI7a0RBQ0QsNEVBQUN4Qjs0Q0FBRUMsTUFBSzs0Q0FBSUgsV0FBVTtzREFBa1A7Ozs7Ozs7Ozs7O2tEQUV4USw4REFBQzBCO2tEQUNELDRFQUFDeEI7NENBQUVDLE1BQUs7NENBQUlILFdBQVU7c0RBQWtQOzs7Ozs7Ozs7OztrREFFeFEsOERBQUMwQjtrREFDRCw0RUFBQ3hCOzRDQUFFQyxNQUFLOzRDQUFJSCxXQUFVO3NEQUFrUDs7Ozs7Ozs7Ozs7a0RBRXhRLDhEQUFDMEI7a0RBQ0QsNEVBQUN4Qjs0Q0FBRUMsTUFBSzs0Q0FBSUgsV0FBVTtzREFBa1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNcFIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUlELFdBQVU7OzRCQUFhOzBDQUFDLDhEQUFDUixxREFBWUE7Z0NBQUNLLGFBQWFBO2dDQUFhRCxRQUFRQTs7Ozs7Ozs7Ozs7O2tDQUM3RSw4REFBQ0s7d0JBQUlELFdBQVU7a0NBQWEsNEVBQUNOLDZDQUFJQTs0QkFBQ0UsUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJMUQ7R0E1Q3dCRDs7UUFDcEJGLDhEQUFjQTs7O0tBRE1FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcm9vbS9baWRdL3BhZ2UuanN4PzdhYmIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmtQYXN0ZSBmcm9tIFwiLi9MaW5rUGFzdGVcIjtcclxuaW1wb3J0IFlvdXR1YmVWaWRlbyBmcm9tIFwiLi9Zb3V0dWJlVmlkZW9cIjtcclxuaW1wb3J0IHVzZVNvY2tldFNldHVwIGZyb20gXCIuLi8uLi9zb2NrZXQvdXNlU29ja2V0U2V0dXBcIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4vQ2hhdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFlvdXR1YmVQYWdlKHtyb29taWR9KXtcclxuICAgIHVzZVNvY2tldFNldHVwKHJvb21pZCk7XHJcbiAgICBjb25zdFt5b3V0dWJlbGluaywgU2V0eW91dHViZWxpbmtdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBib3JkZXItZ3JheS0yMDAgZGFyazpiZy1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4teGwgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBteC1hdXRvIHAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Zsb3diaXRlLmNvbS9cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMgcnRsOnNwYWNlLXgtcmV2ZXJzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZmxvd2JpdGUuY29tL2RvY3MvaW1hZ2VzL2xvZ28uc3ZnXCIgY2xhc3NOYW1lPVwiaC04XCIgYWx0PVwiRmxvd2JpdGUgTG9nb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbGYtY2VudGVyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgd2hpdGVzcGFjZS1ub3dyYXAgZGFyazp0ZXh0LXdoaXRlXCI+Rmxvd2JpdGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1jb2xsYXBzZS10b2dnbGU9XCJuYXZiYXItZGVmYXVsdFwiIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0yIHctMTAgaC0xMCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDAgcm91bmRlZC1sZyBtZDpoaWRkZW4gaG92ZXI6YmctZ3JheS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktMjAwIGRhcms6dGV4dC1ncmF5LTQwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6Zm9jdXM6cmluZy1ncmF5LTYwMFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXItZGVmYXVsdFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy01IGgtNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMTcgMTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjJcIiBkPVwiTTEgMWgxNU0xIDdoMTVNMSAxM2gxNVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gdy1mdWxsIG1kOmJsb2NrIG1kOnctYXV0b1wiIGlkPVwibmF2YmFyLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gZmxleCBmbGV4LWNvbCBwLTQgbWQ6cC0wIG10LTQgYm9yZGVyIGJvcmRlci1ncmF5LTEwMCByb3VuZGVkLWxnIGJnLWdyYXktNTAgbWQ6ZmxleC1yb3cgbWQ6c3BhY2UteC04IHJ0bDpzcGFjZS14LXJldmVyc2UgbWQ6bXQtMCBtZDpib3JkZXItMCBtZDpiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIG1kOmRhcms6YmctZ3JheS05MDAgZGFyazpib3JkZXItZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgcm93LXNwYW4tMVwiPjxMaW5rUGFzdGUgeW91dHViZWxpbms9e1NldHlvdXR1YmVsaW5rfT48L0xpbmtQYXN0ZT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJsb2NrIHB5LTIgcHgtMyB0ZXh0LWdyYXktOTAwIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0xMDAgbWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQgbWQ6Ym9yZGVyLTAgbWQ6aG92ZXI6dGV4dC1ibHVlLTcwMCBtZDpwLTAgZGFyazp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6dGV4dC1ibHVlLTUwMCBkYXJrOmhvdmVyOmJnLWdyYXktNzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOmJnLXRyYW5zcGFyZW50XCI+QWJvdXQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJibG9jayBweS0yIHB4LTMgdGV4dC1ncmF5LTkwMCByb3VuZGVkIGhvdmVyOmJnLWdyYXktMTAwIG1kOmhvdmVyOmJnLXRyYW5zcGFyZW50IG1kOmJvcmRlci0wIG1kOmhvdmVyOnRleHQtYmx1ZS03MDAgbWQ6cC0wIGRhcms6dGV4dC13aGl0ZSBtZDpkYXJrOmhvdmVyOnRleHQtYmx1ZS01MDAgZGFyazpob3ZlcjpiZy1ncmF5LTcwMCBkYXJrOmhvdmVyOnRleHQtd2hpdGUgbWQ6ZGFyazpob3ZlcjpiZy10cmFuc3BhcmVudFwiPlNlcnZpY2VzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBweC0zIHRleHQtZ3JheS05MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTEwMCBtZDpob3ZlcjpiZy10cmFuc3BhcmVudCBtZDpib3JkZXItMCBtZDpob3Zlcjp0ZXh0LWJsdWUtNzAwIG1kOnAtMCBkYXJrOnRleHQtd2hpdGUgbWQ6ZGFyazpob3Zlcjp0ZXh0LWJsdWUtNTAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnRcIj5QcmljaW5nPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYmxvY2sgcHktMiBweC0zIHRleHQtZ3JheS05MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTEwMCBtZDpob3ZlcjpiZy10cmFuc3BhcmVudCBtZDpib3JkZXItMCBtZDpob3Zlcjp0ZXh0LWJsdWUtNzAwIG1kOnAtMCBkYXJrOnRleHQtd2hpdGUgbWQ6ZGFyazpob3Zlcjp0ZXh0LWJsdWUtNTAwIGRhcms6aG92ZXI6YmctZ3JheS03MDAgZGFyazpob3Zlcjp0ZXh0LXdoaXRlIG1kOmRhcms6aG92ZXI6YmctdHJhbnNwYXJlbnRcIj5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBoLTQvNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zXCI+IDxZb3V0dWJlVmlkZW8geW91dHViZWxpbms9e3lvdXR1YmVsaW5rfSByb29taWQ9e3Jvb21pZH0+PC9Zb3V0dWJlVmlkZW8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj48Q2hhdCByb29taWQ9e3Jvb21pZH0+PC9DaGF0PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmtQYXN0ZSIsIllvdXR1YmVWaWRlbyIsInVzZVNvY2tldFNldHVwIiwiQ2hhdCIsIllvdXR1YmVQYWdlIiwicm9vbWlkIiwieW91dHViZWxpbmsiLCJTZXR5b3V0dWJlbGluayIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImEiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0Iiwic3BhbiIsImJ1dHRvbiIsImRhdGEtY29sbGFwc2UtdG9nZ2xlIiwidHlwZSIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsInN0cm9rZSIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwic3Ryb2tlLXdpZHRoIiwiZCIsImlkIiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/room/[id]/page.jsx\n"));

/***/ })

});