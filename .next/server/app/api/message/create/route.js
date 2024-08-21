"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/message/create/route";
exports.ids = ["app/api/message/create/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("node:stream/web");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessage%2Fcreate%2Froute&page=%2Fapi%2Fmessage%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Fcreate%2Froute.ts&appDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessage%2Fcreate%2Froute&page=%2Fapi%2Fmessage%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Fcreate%2Froute.ts&appDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_suyash_Desktop_react_nextjs_goggins_ai_coach_app_api_message_create_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/message/create/route.ts */ \"(rsc)/./app/api/message/create/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/message/create/route\",\n        pathname: \"/api/message/create\",\n        filename: \"route\",\n        bundlePath: \"app/api/message/create/route\"\n    },\n    resolvedPagePath: \"/Users/suyash/Desktop/react/nextjs/goggins-ai-coach/app/api/message/create/route.ts\",\n    nextConfigOutput,\n    userland: _Users_suyash_Desktop_react_nextjs_goggins_ai_coach_app_api_message_create_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/message/create/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZXNzYWdlJTJGY3JlYXRlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZtZXNzYWdlJTJGY3JlYXRlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbWVzc2FnZSUyRmNyZWF0ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnN1eWFzaCUyRkRlc2t0b3AlMkZyZWFjdCUyRm5leHRqcyUyRmdvZ2dpbnMtYWktY29hY2glMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc3V5YXNoJTJGRGVza3RvcCUyRnJlYWN0JTJGbmV4dGpzJTJGZ29nZ2lucy1haS1jb2FjaCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNtQztBQUNoSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2dvZ2dpbnMtYWktY29hY2gvPzMwZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3N1eWFzaC9EZXNrdG9wL3JlYWN0L25leHRqcy9nb2dnaW5zLWFpLWNvYWNoL2FwcC9hcGkvbWVzc2FnZS9jcmVhdGUvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL21lc3NhZ2UvY3JlYXRlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbWVzc2FnZS9jcmVhdGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL21lc3NhZ2UvY3JlYXRlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3N1eWFzaC9EZXNrdG9wL3JlYWN0L25leHRqcy9nb2dnaW5zLWFpLWNvYWNoL2FwcC9hcGkvbWVzc2FnZS9jcmVhdGUvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbWVzc2FnZS9jcmVhdGUvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessage%2Fcreate%2Froute&page=%2Fapi%2Fmessage%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Fcreate%2Froute.ts&appDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/message/create/route.ts":
/*!*****************************************!*\
  !*** ./app/api/message/create/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\n\nasync function POST(req) {\n    const { message, threadId, fromUser = \"false\" } = await req.json();\n    console.log(\"from user\", {\n        message,\n        threadId\n    });\n    if (!threadId || !message) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"threadId and message are required\",\n            success: false\n        }, {\n            status: 400\n        });\n    }\n    const openai = new openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    try {\n        const threadMessage = await openai.beta.threads.messages.create(threadId, {\n            role: \"user\",\n            content: message,\n            metadata: {\n                fromUser\n            }\n        });\n        console.log(\"from openai\", threadMessage);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            message: threadMessage,\n            success: true\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Something went wrong\",\n            success: false\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21lc3NhZ2UvY3JlYXRlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUNmO0FBRXJCLGVBQWVFLEtBQUtDLEdBQVk7SUFDckMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxPQUFPLEVBQUUsR0FBRyxNQUFNSCxJQUFJSSxJQUFJO0lBRWhFQyxRQUFRQyxHQUFHLENBQUMsYUFBYTtRQUFFTDtRQUFTQztJQUFTO0lBRTdDLElBQUksQ0FBQ0EsWUFBWSxDQUFDRCxTQUFTO1FBQ3pCLE9BQU9KLGtGQUFZQSxDQUFDTyxJQUFJLENBQ3RCO1lBQUVHLE9BQU87WUFBcUNDLFNBQVM7UUFBTSxHQUM3RDtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7SUFFQSxNQUFNQyxTQUFTLElBQUlaLDhDQUFNQTtJQUV6QixJQUFJO1FBQ0YsTUFBTWEsZ0JBQWdCLE1BQU1ELE9BQU9FLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ2IsVUFBVTtZQUN4RWMsTUFBTTtZQUNOQyxTQUFTaEI7WUFDVGlCLFVBQVU7Z0JBQ1JmO1lBQ0Y7UUFDRjtRQUVBRSxRQUFRQyxHQUFHLENBQUMsZUFBZUs7UUFFM0IsT0FBT2Qsa0ZBQVlBLENBQUNPLElBQUksQ0FDdEI7WUFBRUgsU0FBU1U7WUFBZUgsU0FBUztRQUFLLEdBQ3hDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU9GLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDQTtRQUNkLE9BQU9WLGtGQUFZQSxDQUFDTyxJQUFJLENBQ3RCO1lBQUVHLE9BQU87WUFBd0JDLFNBQVM7UUFBTSxHQUNoRDtZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2dvZ2dpbnMtYWktY29hY2gvLi9hcHAvYXBpL21lc3NhZ2UvY3JlYXRlL3JvdXRlLnRzPzg0YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgT3BlbkFJIGZyb20gXCJvcGVuYWlcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgdGhyZWFkSWQsIGZyb21Vc2VyID0gXCJmYWxzZVwiIH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gIGNvbnNvbGUubG9nKFwiZnJvbSB1c2VyXCIsIHsgbWVzc2FnZSwgdGhyZWFkSWQgfSk7XG5cbiAgaWYgKCF0aHJlYWRJZCB8fCAhbWVzc2FnZSkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwidGhyZWFkSWQgYW5kIG1lc3NhZ2UgYXJlIHJlcXVpcmVkXCIsIHN1Y2Nlc3M6IGZhbHNlIH0sXG4gICAgICB7IHN0YXR1czogNDAwIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSSgpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdGhyZWFkTWVzc2FnZSA9IGF3YWl0IG9wZW5haS5iZXRhLnRocmVhZHMubWVzc2FnZXMuY3JlYXRlKHRocmVhZElkLCB7XG4gICAgICByb2xlOiBcInVzZXJcIixcbiAgICAgIGNvbnRlbnQ6IG1lc3NhZ2UsXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBmcm9tVXNlcixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcImZyb20gb3BlbmFpXCIsIHRocmVhZE1lc3NhZ2UpO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBtZXNzYWdlOiB0aHJlYWRNZXNzYWdlLCBzdWNjZXNzOiB0cnVlIH0sXG4gICAgICB7IHN0YXR1czogMjAxIH1cbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIiwgc3VjY2VzczogZmFsc2UgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJPcGVuQUkiLCJQT1NUIiwicmVxIiwibWVzc2FnZSIsInRocmVhZElkIiwiZnJvbVVzZXIiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic3VjY2VzcyIsInN0YXR1cyIsIm9wZW5haSIsInRocmVhZE1lc3NhZ2UiLCJiZXRhIiwidGhyZWFkcyIsIm1lc3NhZ2VzIiwiY3JlYXRlIiwicm9sZSIsImNvbnRlbnQiLCJtZXRhZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/message/create/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/ms","vendor-chunks/tr46","vendor-chunks/openai","vendor-chunks/web-streams-polyfill","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/event-target-shim","vendor-chunks/agentkeepalive","vendor-chunks/form-data-encoder","vendor-chunks/webidl-conversions","vendor-chunks/abort-controller","vendor-chunks/humanize-ms"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmessage%2Fcreate%2Froute&page=%2Fapi%2Fmessage%2Fcreate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmessage%2Fcreate%2Froute.ts&appDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();