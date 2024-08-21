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
exports.id = "app/api/challenge-users/route";
exports.ids = ["app/api/challenge-users/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

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

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

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

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchallenge-users%2Froute&page=%2Fapi%2Fchallenge-users%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchallenge-users%2Froute.ts&appDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchallenge-users%2Froute&page=%2Fapi%2Fchallenge-users%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchallenge-users%2Froute.ts&appDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_suyash_Desktop_react_nextjs_goggins_ai_coach_app_api_challenge_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/challenge-users/route.ts */ \"(rsc)/./app/api/challenge-users/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/challenge-users/route\",\n        pathname: \"/api/challenge-users\",\n        filename: \"route\",\n        bundlePath: \"app/api/challenge-users/route\"\n    },\n    resolvedPagePath: \"/Users/suyash/Desktop/react/nextjs/goggins-ai-coach/app/api/challenge-users/route.ts\",\n    nextConfigOutput,\n    userland: _Users_suyash_Desktop_react_nextjs_goggins_ai_coach_app_api_challenge_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/challenge-users/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjaGFsbGVuZ2UtdXNlcnMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmNoYWxsZW5nZS11c2VycyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmNoYWxsZW5nZS11c2VycyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnN1eWFzaCUyRkRlc2t0b3AlMkZyZWFjdCUyRm5leHRqcyUyRmdvZ2dpbnMtYWktY29hY2glMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGc3V5YXNoJTJGRGVza3RvcCUyRnJlYWN0JTJGbmV4dGpzJTJGZ29nZ2lucy1haS1jb2FjaCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNvQztBQUNqSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2dvZ2dpbnMtYWktY29hY2gvPzVjZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3N1eWFzaC9EZXNrdG9wL3JlYWN0L25leHRqcy9nb2dnaW5zLWFpLWNvYWNoL2FwcC9hcGkvY2hhbGxlbmdlLXVzZXJzL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jaGFsbGVuZ2UtdXNlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaGFsbGVuZ2UtdXNlcnNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2NoYWxsZW5nZS11c2Vycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9zdXlhc2gvRGVza3RvcC9yZWFjdC9uZXh0anMvZ29nZ2lucy1haS1jb2FjaC9hcHAvYXBpL2NoYWxsZW5nZS11c2Vycy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9jaGFsbGVuZ2UtdXNlcnMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchallenge-users%2Froute&page=%2Fapi%2Fchallenge-users%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchallenge-users%2Froute.ts&appDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/challenge-users/route.ts":
/*!******************************************!*\
  !*** ./app/api/challenge-users/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prismadb */ \"(rsc)/./lib/prismadb.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\n\nasync function POST(request) {\n    // Validation\n    const body = await request.json();\n    const { challengeId, secret } = body;\n    if (!challengeId || !secret) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: false,\n            message: \"Missing required fields\"\n        }, {\n            status: 400\n        });\n    }\n    if (secret !== process.env.APP_SECRET_KEY) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: false,\n            message: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    // Define work out message prompt\n    const messages = [\n        {\n            role: \"system\",\n            content: `\n        Generate an ultra-intense, hard-hitting motivational message, followed by a concise, bullet-pointed, no-equipment-needed workout plan. The time of day provided should be taken into account. This output should strictly contain two parts: first, a motivational message in the style of David Goggins, as depicted in Jesse Itzler's 'Living with a SEAL', but even more extreme. The message must be direct, confrontational, and incorporate Goggins' known phrases like 'poopy pants', 'stay hard', and 'taking souls'. The second part should be a workout list: intense, high-impact exercises that can be done anywhere, designed to be completed within 10 minutes. The output must only include these two components, nothing else.\n        \n        Here's an example output that you should follow:\n        \n        Time to get hard! No more excuses, no more poopy pants attitude. You're stronger than you think. Stay hard, take souls, and crush this morning with everything you've got. You have 10 minutes to obliterate this workout. This is your battlefield, and you're the warrior. Let's make every second count!\n        \n        - 30 Burpees – explode with every jump\n        - 40 Jumping Jacks – faster, push your limits\n        - 50 Mountain Climbers – relentless pace\n        - 60 High Knees – drive them up with fury\n        - 2 Minute Plank – solid and unyielding\n        `\n        },\n        {\n            role: \"user\",\n            content: `Generate a new David Goggins workout. Remember, only respond in the format specifed earlier. Nothing else`\n        }\n    ];\n    //  Use OpenAI to generate work out\n    const { data: { message, success } } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`${\"http://localhost:3000\"}/api/openai`, {\n        messages,\n        secret: process.env.APP_SECRET_KEY\n    });\n    if (!message || !success) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: false,\n            message: \"Something went wrong with generate openai response\"\n        }, {\n            status: 500\n        });\n    }\n    console.log(message);\n    // Grab all challenge preferences\n    const challengePreferences = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__.prismadb.challengePreferences.findMany({\n        where: {\n            challengeId\n        }\n    });\n    console.log(\"challengePreferences\", challengePreferences);\n    const userIds = challengePreferences.map((cp)=>cp.userId);\n    console.log(\"userIds\", userIds);\n    //  Grab all user threads\n    const userThreads = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__.prismadb.userThread.findMany({\n        where: {\n            userId: {\n                in: userIds\n            }\n        }\n    });\n    console.log(\"userThreads\", userThreads);\n    // Grab all user metadata\n    const userMetas = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__.prismadb.userMeta.findMany({\n        where: {\n            userId: {\n                in: userIds\n            }\n        }\n    });\n    console.log(\"userMetas\", userMetas);\n    const userThreadMap = userThreads.reduce((map, thread)=>{\n        map[thread.userId] = thread;\n        return map;\n    }, {});\n    const userMetaMap = userMetas.reduce((map, meta)=>{\n        map[meta.userId] = meta;\n        return map;\n    }, {});\n    // Log the contents of userMetaMap and challengePreferences\n    console.log(\"userMetaMap\", userMetaMap);\n    console.log(\"challengePreferences\", challengePreferences);\n    // Add messages to threads\n    const threadAndNotificationsPromises = [];\n    try {\n        challengePreferences.forEach((cp)=>{\n            //  FIND THE RESPECTIVE USER\n            const userThread = userThreadMap[cp.userId];\n            //  ADD MESSAGE TO THREAD\n            if (userThread) {\n                // Send Message\n                threadAndNotificationsPromises.push(axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`${\"http://localhost:3000\"}/api/message/create`, {\n                    message,\n                    threadId: userThread.threadId,\n                    fromUser: \"false\"\n                }));\n                // Send Notification\n                if (cp.sendNotifications) {\n                    const correspondingUserMeta = userMetaMap[cp.userId];\n                    if (correspondingUserMeta) {\n                        threadAndNotificationsPromises.push(axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`${\"http://localhost:3000\"}/api/send-notifications`, {\n                            subscription: {\n                                endpoint: correspondingUserMeta.endpoint,\n                                keys: {\n                                    auth: correspondingUserMeta.auth,\n                                    p256dh: correspondingUserMeta.p256dh\n                                }\n                            },\n                            message\n                        }));\n                    } else {\n                        console.warn(`User meta data not found for userId: ${cp.userId}`);\n                    }\n                }\n            }\n        });\n        await Promise.all(threadAndNotificationsPromises);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            message\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: false,\n            message: \"Something went wrong\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYWxsZW5nZS11c2Vycy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBRWhCO0FBQ2lCO0FBV3BDLGVBQWVHLEtBQUtDLE9BQWdCO0lBQ3pDLGFBQWE7SUFDYixNQUFNQyxPQUFPLE1BQU1ELFFBQVFFLElBQUk7SUFFL0IsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxHQUFHSDtJQUVoQyxJQUFJLENBQUNFLGVBQWUsQ0FBQ0MsUUFBUTtRQUMzQixPQUFPTixrRkFBWUEsQ0FBQ0ksSUFBSSxDQUN0QjtZQUFFRyxTQUFTO1lBQU9DLFNBQVM7UUFBMEIsR0FDckQ7WUFDRUMsUUFBUTtRQUNWO0lBRUo7SUFFQSxJQUFJSCxXQUFXSSxRQUFRQyxHQUFHLENBQUNDLGNBQWMsRUFBRTtRQUN6QyxPQUFPWixrRkFBWUEsQ0FBQ0ksSUFBSSxDQUN0QjtZQUFFRyxTQUFTO1lBQU9DLFNBQVM7UUFBZSxHQUMxQztZQUNFQyxRQUFRO1FBQ1Y7SUFFSjtJQUVBLGlDQUFpQztJQUNqQyxNQUFNSSxXQUFpRTtRQUNyRTtZQUNFQyxNQUFNO1lBQ05DLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7O1FBWVIsQ0FBQztRQUNMO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxTQUFTLENBQUMseUdBQXlHLENBQUM7UUFDdEg7S0FDRDtJQUVELG1DQUFtQztJQUNuQyxNQUFNLEVBQ0pDLE1BQU0sRUFBRVIsT0FBTyxFQUFFRCxPQUFPLEVBQUUsRUFDM0IsR0FBRyxNQUFNUiw2Q0FBS0EsQ0FBQ2tCLElBQUksQ0FDbEIsQ0FBQyxFQUFFUCx1QkFBZ0MsQ0FBQyxXQUFXLENBQUMsRUFDaEQ7UUFDRUc7UUFDQVAsUUFBUUksUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0lBQ3BDO0lBR0YsSUFBSSxDQUFDSixXQUFXLENBQUNELFNBQVM7UUFDeEIsT0FBT1Asa0ZBQVlBLENBQUNJLElBQUksQ0FDdEI7WUFDRUcsU0FBUztZQUNUQyxTQUFTO1FBQ1gsR0FD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QUNJLElBQUksQ0FDdEI7WUFBRUcsU0FBUztZQUFPQyxTQUFTO1FBQXVCLEdBQ2xEO1lBQ0VDLFFBQVE7UUFDVjtJQUVKO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2dnaW5zLWFpLWNvYWNoLy4vYXBwL2FwaS9jaGFsbGVuZ2UtdXNlcnMvcm91dGUudHM/YWE3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmlzbWFkYiB9IGZyb20gXCJAL2xpYi9wcmlzbWFkYlwiO1xuaW1wb3J0IHsgVXNlck1ldGEsIFVzZXJUaHJlYWQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IE9wZW5BSSBmcm9tIFwib3BlbmFpXCI7XG5cbmludGVyZmFjZSBVc2VyVGhyZWFkTWFwIHtcbiAgW3VzZXJJZDogc3RyaW5nXTogVXNlclRocmVhZDtcbn1cblxuaW50ZXJmYWNlIFVzZXJNZXRhTWFwIHtcbiAgW3VzZXJJZDogc3RyaW5nXTogVXNlck1ldGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgLy8gVmFsaWRhdGlvblxuICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgY29uc3QgeyBjaGFsbGVuZ2VJZCwgc2VjcmV0IH0gPSBib2R5O1xuXG4gIGlmICghY2hhbGxlbmdlSWQgfHwgIXNlY3JldCkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9LFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgaWYgKHNlY3JldCAhPT0gcHJvY2Vzcy5lbnYuQVBQX1NFQ1JFVF9LRVkpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogNDAxLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvLyBEZWZpbmUgd29yayBvdXQgbWVzc2FnZSBwcm9tcHRcbiAgY29uc3QgbWVzc2FnZXM6IE9wZW5BSS5DaGF0LkNvbXBsZXRpb25zLkNoYXRDb21wbGV0aW9uTWVzc2FnZVBhcmFtW10gPSBbXG4gICAge1xuICAgICAgcm9sZTogXCJzeXN0ZW1cIixcbiAgICAgIGNvbnRlbnQ6IGBcbiAgICAgICAgR2VuZXJhdGUgYW4gdWx0cmEtaW50ZW5zZSwgaGFyZC1oaXR0aW5nIG1vdGl2YXRpb25hbCBtZXNzYWdlLCBmb2xsb3dlZCBieSBhIGNvbmNpc2UsIGJ1bGxldC1wb2ludGVkLCBuby1lcXVpcG1lbnQtbmVlZGVkIHdvcmtvdXQgcGxhbi4gVGhlIHRpbWUgb2YgZGF5IHByb3ZpZGVkIHNob3VsZCBiZSB0YWtlbiBpbnRvIGFjY291bnQuIFRoaXMgb3V0cHV0IHNob3VsZCBzdHJpY3RseSBjb250YWluIHR3byBwYXJ0czogZmlyc3QsIGEgbW90aXZhdGlvbmFsIG1lc3NhZ2UgaW4gdGhlIHN0eWxlIG9mIERhdmlkIEdvZ2dpbnMsIGFzIGRlcGljdGVkIGluIEplc3NlIEl0emxlcidzICdMaXZpbmcgd2l0aCBhIFNFQUwnLCBidXQgZXZlbiBtb3JlIGV4dHJlbWUuIFRoZSBtZXNzYWdlIG11c3QgYmUgZGlyZWN0LCBjb25mcm9udGF0aW9uYWwsIGFuZCBpbmNvcnBvcmF0ZSBHb2dnaW5zJyBrbm93biBwaHJhc2VzIGxpa2UgJ3Bvb3B5IHBhbnRzJywgJ3N0YXkgaGFyZCcsIGFuZCAndGFraW5nIHNvdWxzJy4gVGhlIHNlY29uZCBwYXJ0IHNob3VsZCBiZSBhIHdvcmtvdXQgbGlzdDogaW50ZW5zZSwgaGlnaC1pbXBhY3QgZXhlcmNpc2VzIHRoYXQgY2FuIGJlIGRvbmUgYW55d2hlcmUsIGRlc2lnbmVkIHRvIGJlIGNvbXBsZXRlZCB3aXRoaW4gMTAgbWludXRlcy4gVGhlIG91dHB1dCBtdXN0IG9ubHkgaW5jbHVkZSB0aGVzZSB0d28gY29tcG9uZW50cywgbm90aGluZyBlbHNlLlxuICAgICAgICBcbiAgICAgICAgSGVyZSdzIGFuIGV4YW1wbGUgb3V0cHV0IHRoYXQgeW91IHNob3VsZCBmb2xsb3c6XG4gICAgICAgIFxuICAgICAgICBUaW1lIHRvIGdldCBoYXJkISBObyBtb3JlIGV4Y3VzZXMsIG5vIG1vcmUgcG9vcHkgcGFudHMgYXR0aXR1ZGUuIFlvdSdyZSBzdHJvbmdlciB0aGFuIHlvdSB0aGluay4gU3RheSBoYXJkLCB0YWtlIHNvdWxzLCBhbmQgY3J1c2ggdGhpcyBtb3JuaW5nIHdpdGggZXZlcnl0aGluZyB5b3UndmUgZ290LiBZb3UgaGF2ZSAxMCBtaW51dGVzIHRvIG9ibGl0ZXJhdGUgdGhpcyB3b3Jrb3V0LiBUaGlzIGlzIHlvdXIgYmF0dGxlZmllbGQsIGFuZCB5b3UncmUgdGhlIHdhcnJpb3IuIExldCdzIG1ha2UgZXZlcnkgc2Vjb25kIGNvdW50IVxuICAgICAgICBcbiAgICAgICAgLSAzMCBCdXJwZWVzIOKAkyBleHBsb2RlIHdpdGggZXZlcnkganVtcFxuICAgICAgICAtIDQwIEp1bXBpbmcgSmFja3Mg4oCTIGZhc3RlciwgcHVzaCB5b3VyIGxpbWl0c1xuICAgICAgICAtIDUwIE1vdW50YWluIENsaW1iZXJzIOKAkyByZWxlbnRsZXNzIHBhY2VcbiAgICAgICAgLSA2MCBIaWdoIEtuZWVzIOKAkyBkcml2ZSB0aGVtIHVwIHdpdGggZnVyeVxuICAgICAgICAtIDIgTWludXRlIFBsYW5rIOKAkyBzb2xpZCBhbmQgdW55aWVsZGluZ1xuICAgICAgICBgLFxuICAgIH0sXG4gICAge1xuICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICBjb250ZW50OiBgR2VuZXJhdGUgYSBuZXcgRGF2aWQgR29nZ2lucyB3b3Jrb3V0LiBSZW1lbWJlciwgb25seSByZXNwb25kIGluIHRoZSBmb3JtYXQgc3BlY2lmZWQgZWFybGllci4gTm90aGluZyBlbHNlYCxcbiAgICB9LFxuICBdO1xuXG4gIC8vICBVc2UgT3BlbkFJIHRvIGdlbmVyYXRlIHdvcmsgb3V0XG4gIGNvbnN0IHtcbiAgICBkYXRhOiB7IG1lc3NhZ2UsIHN1Y2Nlc3MgfSxcbiAgfSA9IGF3YWl0IGF4aW9zLnBvc3Q8eyBtZXNzYWdlPzogc3RyaW5nOyBzdWNjZXNzOiBib29sZWFuIH0+KFxuICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfS9hcGkvb3BlbmFpYCxcbiAgICB7XG4gICAgICBtZXNzYWdlcyxcbiAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuQVBQX1NFQ1JFVF9LRVksXG4gICAgfVxuICApO1xuXG4gIGlmICghbWVzc2FnZSB8fCAhc3VjY2Vzcykge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCBnZW5lcmF0ZSBvcGVuYWkgcmVzcG9uc2VcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogNTAwLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxuICAvLyBHcmFiIGFsbCBjaGFsbGVuZ2UgcHJlZmVyZW5jZXNcbiAgY29uc3QgY2hhbGxlbmdlUHJlZmVyZW5jZXMgPSBhd2FpdCBwcmlzbWFkYi5jaGFsbGVuZ2VQcmVmZXJlbmNlcy5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGNoYWxsZW5nZUlkLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwiY2hhbGxlbmdlUHJlZmVyZW5jZXNcIiwgY2hhbGxlbmdlUHJlZmVyZW5jZXMpO1xuXG4gIGNvbnN0IHVzZXJJZHMgPSBjaGFsbGVuZ2VQcmVmZXJlbmNlcy5tYXAoKGNwKSA9PiBjcC51c2VySWQpO1xuXG4gIGNvbnNvbGUubG9nKFwidXNlcklkc1wiLCB1c2VySWRzKTtcblxuICAvLyAgR3JhYiBhbGwgdXNlciB0aHJlYWRzXG4gIGNvbnN0IHVzZXJUaHJlYWRzID0gYXdhaXQgcHJpc21hZGIudXNlclRocmVhZC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJJZDoge1xuICAgICAgICBpbjogdXNlcklkcyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJ1c2VyVGhyZWFkc1wiLCB1c2VyVGhyZWFkcyk7XG5cbiAgLy8gR3JhYiBhbGwgdXNlciBtZXRhZGF0YVxuICBjb25zdCB1c2VyTWV0YXMgPSBhd2FpdCBwcmlzbWFkYi51c2VyTWV0YS5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHVzZXJJZDoge1xuICAgICAgICBpbjogdXNlcklkcyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJ1c2VyTWV0YXNcIiwgdXNlck1ldGFzKTtcblxuICBjb25zdCB1c2VyVGhyZWFkTWFwOiBVc2VyVGhyZWFkTWFwID0gdXNlclRocmVhZHMucmVkdWNlKChtYXAsIHRocmVhZCkgPT4ge1xuICAgIG1hcFt0aHJlYWQudXNlcklkXSA9IHRocmVhZDtcbiAgICByZXR1cm4gbWFwO1xuICB9LCB7fSBhcyBVc2VyVGhyZWFkTWFwKTtcblxuICBjb25zdCB1c2VyTWV0YU1hcCA9IHVzZXJNZXRhcy5yZWR1Y2UoKG1hcCwgbWV0YSkgPT4ge1xuICAgIG1hcFttZXRhLnVzZXJJZF0gPSBtZXRhO1xuICAgIHJldHVybiBtYXA7XG4gIH0sIHt9IGFzIFVzZXJNZXRhTWFwKTtcblxuICAvLyBMb2cgdGhlIGNvbnRlbnRzIG9mIHVzZXJNZXRhTWFwIGFuZCBjaGFsbGVuZ2VQcmVmZXJlbmNlc1xuICBjb25zb2xlLmxvZyhcInVzZXJNZXRhTWFwXCIsIHVzZXJNZXRhTWFwKTtcbiAgY29uc29sZS5sb2coXCJjaGFsbGVuZ2VQcmVmZXJlbmNlc1wiLCBjaGFsbGVuZ2VQcmVmZXJlbmNlcyk7XG5cbiAgLy8gQWRkIG1lc3NhZ2VzIHRvIHRocmVhZHNcbiAgY29uc3QgdGhyZWFkQW5kTm90aWZpY2F0aW9uc1Byb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdO1xuXG4gIHRyeSB7XG4gICAgY2hhbGxlbmdlUHJlZmVyZW5jZXMuZm9yRWFjaCgoY3ApID0+IHtcbiAgICAgIC8vICBGSU5EIFRIRSBSRVNQRUNUSVZFIFVTRVJcbiAgICAgIGNvbnN0IHVzZXJUaHJlYWQgPSB1c2VyVGhyZWFkTWFwW2NwLnVzZXJJZF07XG5cbiAgICAgIC8vICBBREQgTUVTU0FHRSBUTyBUSFJFQURcbiAgICAgIGlmICh1c2VyVGhyZWFkKSB7XG4gICAgICAgIC8vIFNlbmQgTWVzc2FnZVxuICAgICAgICB0aHJlYWRBbmROb3RpZmljYXRpb25zUHJvbWlzZXMucHVzaChcbiAgICAgICAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfS9hcGkvbWVzc2FnZS9jcmVhdGVgLCB7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgdGhyZWFkSWQ6IHVzZXJUaHJlYWQudGhyZWFkSWQsXG4gICAgICAgICAgICBmcm9tVXNlcjogXCJmYWxzZVwiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gU2VuZCBOb3RpZmljYXRpb25cbiAgICAgICAgaWYgKGNwLnNlbmROb3RpZmljYXRpb25zKSB7XG4gICAgICAgICAgY29uc3QgY29ycmVzcG9uZGluZ1VzZXJNZXRhID0gdXNlck1ldGFNYXBbY3AudXNlcklkXTtcbiAgICAgICAgICBpZiAoY29ycmVzcG9uZGluZ1VzZXJNZXRhKSB7XG4gICAgICAgICAgdGhyZWFkQW5kTm90aWZpY2F0aW9uc1Byb21pc2VzLnB1c2goXG4gICAgICAgICAgICBheGlvcy5wb3N0KFxuICAgICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH0vYXBpL3NlbmQtbm90aWZpY2F0aW9uc2AsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICAgIGVuZHBvaW50OiBjb3JyZXNwb25kaW5nVXNlck1ldGEuZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGg6IGNvcnJlc3BvbmRpbmdVc2VyTWV0YS5hdXRoLFxuICAgICAgICAgICAgICAgICAgICBwMjU2ZGg6IGNvcnJlc3BvbmRpbmdVc2VyTWV0YS5wMjU2ZGgsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBVc2VyIG1ldGEgZGF0YSBub3QgZm91bmQgZm9yIHVzZXJJZDogJHtjcC51c2VySWR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwodGhyZWFkQW5kTm90aWZpY2F0aW9uc1Byb21pc2VzKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2UgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiA1MDAsXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInByaXNtYWRiIiwiYXhpb3MiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsImJvZHkiLCJqc29uIiwiY2hhbGxlbmdlSWQiLCJzZWNyZXQiLCJzdWNjZXNzIiwibWVzc2FnZSIsInN0YXR1cyIsInByb2Nlc3MiLCJlbnYiLCJBUFBfU0VDUkVUX0tFWSIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJkYXRhIiwicG9zdCIsIk5FWFRfUFVCTElDX0JBU0VfVVJMIiwiY29uc29sZSIsImxvZyIsImNoYWxsZW5nZVByZWZlcmVuY2VzIiwiZmluZE1hbnkiLCJ3aGVyZSIsInVzZXJJZHMiLCJtYXAiLCJjcCIsInVzZXJJZCIsInVzZXJUaHJlYWRzIiwidXNlclRocmVhZCIsImluIiwidXNlck1ldGFzIiwidXNlck1ldGEiLCJ1c2VyVGhyZWFkTWFwIiwicmVkdWNlIiwidGhyZWFkIiwidXNlck1ldGFNYXAiLCJtZXRhIiwidGhyZWFkQW5kTm90aWZpY2F0aW9uc1Byb21pc2VzIiwiZm9yRWFjaCIsInB1c2giLCJ0aHJlYWRJZCIsImZyb21Vc2VyIiwic2VuZE5vdGlmaWNhdGlvbnMiLCJjb3JyZXNwb25kaW5nVXNlck1ldGEiLCJzdWJzY3JpcHRpb24iLCJlbmRwb2ludCIsImtleXMiLCJhdXRoIiwicDI1NmRoIiwid2FybiIsIlByb21pc2UiLCJhbGwiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/challenge-users/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prismadb.ts":
/*!*************************!*\
  !*** ./lib/prismadb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prismadb: () => (/* binding */ prismadb)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prismadb = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : 0\n});\nif (true) globalForPrisma.prisma = prismadb;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLGtCQUFrQkM7QUFJakIsTUFBTUMsV0FDWEYsZ0JBQWdCRyxNQUFNLElBQ3RCLElBQUlKLHdEQUFZQSxDQUFDO0lBQ2ZLLEtBQ0VDLEtBQXNDLEdBQ2xDO1FBQUM7UUFBUztRQUFTO0tBQU8sR0FDMUIsQ0FBUztBQUNqQixHQUFHO0FBRUwsSUFBSUEsSUFBcUMsRUFBRUwsZ0JBQWdCRyxNQUFNLEdBQUdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29nZ2lucy1haS1jb2FjaC8uL2xpYi9wcmlzbWFkYi50cz8wZTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMge1xuICBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBwcmlzbWFkYiA9XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz9cbiAgbmV3IFByaXNtYUNsaWVudCh7XG4gICAgbG9nOlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIlxuICAgICAgICA/IFtcInF1ZXJ5XCIsIFwiZXJyb3JcIiwgXCJ3YXJuXCJdXG4gICAgICAgIDogW1wiZXJyb3JcIl0sXG4gIH0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hZGI7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYWRiIiwicHJpc21hIiwibG9nIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/prismadb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/debug","vendor-chunks/supports-color","vendor-chunks/has-flag","vendor-chunks/axios","vendor-chunks/asynckit","vendor-chunks/mime-db","vendor-chunks/follow-redirects","vendor-chunks/proxy-from-env","vendor-chunks/mime-types","vendor-chunks/delayed-stream","vendor-chunks/combined-stream"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchallenge-users%2Froute&page=%2Fapi%2Fchallenge-users%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchallenge-users%2Froute.ts&appDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();