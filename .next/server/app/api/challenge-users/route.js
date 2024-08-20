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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prismadb */ \"(rsc)/./lib/prismadb.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\n\nasync function POST(request) {\n    // Validation\n    const body = await request.json();\n    const { challengeId, secret } = body;\n    if (!challengeId || !secret) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: false,\n            message: \"Missing required fields\"\n        }, {\n            status: 400\n        });\n    }\n    if (secret !== process.env.APP_SECRET_KEY) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: false,\n            message: \"Unauthorized\"\n        }, {\n            status: 401\n        });\n    }\n    // Define work out message prompt\n    const messages = [\n        {\n            role: \"system\",\n            content: `\n        Generate an ultra-intense, hard-hitting motivational message, followed by a concise, bullet-pointed, no-equipment-needed workout plan. The time of day provided should be taken into account. This output should strictly contain two parts: first, a motivational message in the style of David Goggins, as depicted in Jesse Itzler's 'Living with a SEAL', but even more extreme. The message must be direct, confrontational, and incorporate Goggins' known phrases like 'poopy pants', 'stay hard', and 'taking souls'. The second part should be a workout list: intense, high-impact exercises that can be done anywhere, designed to be completed within 10 minutes. The output must only include these two components, nothing else.\n        \n        Here's an example output that you should follow:\n        \n        Time to get hard! No more excuses, no more poopy pants attitude. You're stronger than you think. Stay hard, take souls, and crush this morning with everything you've got. You have 10 minutes to obliterate this workout. This is your battlefield, and you're the warrior. Let's make every second count!\n        \n        - 30 Burpees – explode with every jump\n        - 40 Jumping Jacks – faster, push your limits\n        - 50 Mountain Climbers – relentless pace\n        - 60 High Knees – drive them up with fury\n        - 2 Minute Plank – solid and unyielding\n        `\n        },\n        {\n            role: \"user\",\n            content: `Generate a new David Goggins workout. Remember, only respond in the format specifed earlier. Nothing else`\n        }\n    ];\n    //  Use OpenAI to generate work out\n    const { data: { message, success } } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`${\"http://localhost:3000\"}/api/openai`, {\n        messages,\n        secret: process.env.APP_SECRET_KEY\n    });\n    if (!message || !success) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: false,\n            message: \"Something went wrong with generate openai response\"\n        }, {\n            status: 500\n        });\n    }\n    console.log(message);\n    // Grab all challenge preferences\n    const challengePreferences = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__.prismadb.challengePreferences.findMany({\n        where: {\n            challengeId\n        }\n    });\n    console.log(\"challengePreferences\", challengePreferences);\n    const userIds = challengePreferences.map((cp)=>cp.userId);\n    console.log(\"userIds\", userIds);\n    //  Grab all user threads\n    const userThreads = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__.prismadb.userThread.findMany({\n        where: {\n            userId: {\n                in: userIds\n            }\n        }\n    });\n    console.log(\"userThreads\", userThreads);\n    // Grab all user metadata\n    const userMetas = await _lib_prismadb__WEBPACK_IMPORTED_MODULE_0__.prismadb.userMeta.findMany({\n        where: {\n            userId: {\n                in: userIds\n            }\n        }\n    });\n    console.log(\"userMetas\", userMetas);\n    const userThreadMap = userThreads.reduce((map, thread)=>{\n        map[thread.userId] = thread;\n        return map;\n    }, {});\n    const userMetaMap = userMetas.reduce((map, meta)=>{\n        map[meta.userId] = meta;\n        return map;\n    }, {});\n    // Add messages to threads\n    const threadAndNotificationsPromises = [];\n    try {\n        challengePreferences.forEach((cp)=>{\n            //  FIND THE RESPECTIVE USER\n            const userThread = userThreadMap[cp.userId];\n            //  ADD MESSAGE TO THREAD\n            if (userThread) {\n                // Send Message\n                threadAndNotificationsPromises.push(axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`${\"http://localhost:3000\"}/api/message/create`, {\n                    message,\n                    threadId: userThread.threadId,\n                    fromUser: \"false\"\n                }));\n                // Send Notification\n                if (cp.sendNotifications) {\n                    const correspondingUserMeta = userMetaMap[cp.userId];\n                    threadAndNotificationsPromises.push(axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`${\"http://localhost:3000\"}/api/send-notifications`, {\n                        subscription: {\n                            endpoint: correspondingUserMeta.endpoint,\n                            keys: {\n                                auth: correspondingUserMeta.auth,\n                                p256dh: correspondingUserMeta.p256dh\n                            }\n                        },\n                        message\n                    }));\n                }\n            }\n        });\n        await Promise.all(threadAndNotificationsPromises);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            message\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            success: false,\n            message: \"Something went wrong\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYWxsZW5nZS11c2Vycy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBDO0FBRWhCO0FBQ2lCO0FBV3BDLGVBQWVHLEtBQUtDLE9BQWdCO0lBQ3pDLGFBQWE7SUFDYixNQUFNQyxPQUFPLE1BQU1ELFFBQVFFLElBQUk7SUFFL0IsTUFBTSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRSxHQUFHSDtJQUVoQyxJQUFJLENBQUNFLGVBQWUsQ0FBQ0MsUUFBUTtRQUMzQixPQUFPTixrRkFBWUEsQ0FBQ0ksSUFBSSxDQUN0QjtZQUFFRyxTQUFTO1lBQU9DLFNBQVM7UUFBMEIsR0FDckQ7WUFDRUMsUUFBUTtRQUNWO0lBRUo7SUFFQSxJQUFJSCxXQUFXSSxRQUFRQyxHQUFHLENBQUNDLGNBQWMsRUFBRTtRQUN6QyxPQUFPWixrRkFBWUEsQ0FBQ0ksSUFBSSxDQUN0QjtZQUFFRyxTQUFTO1lBQU9DLFNBQVM7UUFBZSxHQUMxQztZQUNFQyxRQUFRO1FBQ1Y7SUFFSjtJQUVBLGlDQUFpQztJQUNqQyxNQUFNSSxXQUFpRTtRQUNyRTtZQUNFQyxNQUFNO1lBQ05DLFNBQVMsQ0FBQzs7Ozs7Ozs7Ozs7O1FBWVIsQ0FBQztRQUNMO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxTQUFTLENBQUMseUdBQXlHLENBQUM7UUFDdEg7S0FDRDtJQUVELG1DQUFtQztJQUNuQyxNQUFNLEVBQ0pDLE1BQU0sRUFBRVIsT0FBTyxFQUFFRCxPQUFPLEVBQUUsRUFDM0IsR0FBRyxNQUFNUiw2Q0FBS0EsQ0FBQ2tCLElBQUksQ0FDbEIsQ0FBQyxFQUFFUCx1QkFBZ0MsQ0FBQyxXQUFXLENBQUMsRUFDaEQ7UUFDRUc7UUFDQVAsUUFBUUksUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0lBQ3BDO0lBR0YsSUFBSSxDQUFDSixXQUFXLENBQUNELFNBQVM7UUFDeEIsT0FBT1Asa0ZBQVlBLENBQUNJLElBQUksQ0FDdEI7WUFDRUcsU0FBUztZQUNUQyxTQUFTO1FBQ1gsR0FDQTtZQUNFQyxRQUFRO1FBQ1Y7SUFFSjtJQUVBVSxRQUFRQyxHQUFHLENBQUNaO0lBRVosaUNBQWlDO0lBQ2pDLE1BQU1hLHVCQUF1QixNQUFNdkIsbURBQVFBLENBQUN1QixvQkFBb0IsQ0FBQ0MsUUFBUSxDQUFDO1FBQ3hFQyxPQUFPO1lBQ0xsQjtRQUNGO0lBQ0Y7SUFFQWMsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QkM7SUFFcEMsTUFBTUcsVUFBVUgscUJBQXFCSSxHQUFHLENBQUMsQ0FBQ0MsS0FBT0EsR0FBR0MsTUFBTTtJQUUxRFIsUUFBUUMsR0FBRyxDQUFDLFdBQVdJO0lBRXZCLHlCQUF5QjtJQUN6QixNQUFNSSxjQUFjLE1BQU05QixtREFBUUEsQ0FBQytCLFVBQVUsQ0FBQ1AsUUFBUSxDQUFDO1FBQ3JEQyxPQUFPO1lBQ0xJLFFBQVE7Z0JBQ05HLElBQUlOO1lBQ047UUFDRjtJQUNGO0lBRUFMLFFBQVFDLEdBQUcsQ0FBQyxlQUFlUTtJQUUzQix5QkFBeUI7SUFDekIsTUFBTUcsWUFBWSxNQUFNakMsbURBQVFBLENBQUNrQyxRQUFRLENBQUNWLFFBQVEsQ0FBQztRQUNqREMsT0FBTztZQUNMSSxRQUFRO2dCQUNORyxJQUFJTjtZQUNOO1FBQ0Y7SUFDRjtJQUVBTCxRQUFRQyxHQUFHLENBQUMsYUFBYVc7SUFFekIsTUFBTUUsZ0JBQStCTCxZQUFZTSxNQUFNLENBQUMsQ0FBQ1QsS0FBS1U7UUFDNURWLEdBQUcsQ0FBQ1UsT0FBT1IsTUFBTSxDQUFDLEdBQUdRO1FBQ3JCLE9BQU9WO0lBQ1QsR0FBRyxDQUFDO0lBRUosTUFBTVcsY0FBY0wsVUFBVUcsTUFBTSxDQUFDLENBQUNULEtBQUtZO1FBQ3pDWixHQUFHLENBQUNZLEtBQUtWLE1BQU0sQ0FBQyxHQUFHVTtRQUNuQixPQUFPWjtJQUNULEdBQUcsQ0FBQztJQUVKLDBCQUEwQjtJQUMxQixNQUFNYSxpQ0FBaUQsRUFBRTtJQUV6RCxJQUFJO1FBQ0ZqQixxQkFBcUJrQixPQUFPLENBQUMsQ0FBQ2I7WUFDNUIsNEJBQTRCO1lBQzVCLE1BQU1HLGFBQWFJLGFBQWEsQ0FBQ1AsR0FBR0MsTUFBTSxDQUFDO1lBRTNDLHlCQUF5QjtZQUN6QixJQUFJRSxZQUFZO2dCQUNkLGVBQWU7Z0JBQ2ZTLCtCQUErQkUsSUFBSSxDQUNqQ3pDLDZDQUFLQSxDQUFDa0IsSUFBSSxDQUFDLENBQUMsRUFBRVAsdUJBQWdDLENBQUMsbUJBQW1CLENBQUMsRUFBRTtvQkFDbkVGO29CQUNBaUMsVUFBVVosV0FBV1ksUUFBUTtvQkFDN0JDLFVBQVU7Z0JBQ1o7Z0JBR0Ysb0JBQW9CO2dCQUNwQixJQUFJaEIsR0FBR2lCLGlCQUFpQixFQUFFO29CQUN4QixNQUFNQyx3QkFBd0JSLFdBQVcsQ0FBQ1YsR0FBR0MsTUFBTSxDQUFDO29CQUNwRFcsK0JBQStCRSxJQUFJLENBQ2pDekMsNkNBQUtBLENBQUNrQixJQUFJLENBQ1IsQ0FBQyxFQUFFUCx1QkFBZ0MsQ0FBQyx1QkFBdUIsQ0FBQyxFQUM1RDt3QkFDRW1DLGNBQWM7NEJBQ1pDLFVBQVVGLHNCQUFzQkUsUUFBUTs0QkFDeENDLE1BQU07Z0NBQ0pDLE1BQU1KLHNCQUFzQkksSUFBSTtnQ0FDaENDLFFBQVFMLHNCQUFzQkssTUFBTTs0QkFDdEM7d0JBQ0Y7d0JBQ0F6QztvQkFDRjtnQkFHTjtZQUNGO1FBQ0Y7UUFFQSxNQUFNMEMsUUFBUUMsR0FBRyxDQUFDYjtRQUVsQixPQUFPdEMsa0ZBQVlBLENBQUNJLElBQUksQ0FBQztZQUFFSTtRQUFRLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3RELEVBQUUsT0FBTzJDLE9BQU87UUFDZGpDLFFBQVFpQyxLQUFLLENBQUNBO1FBQ2QsT0FBT3BELGtGQUFZQSxDQUFDSSxJQUFJLENBQ3RCO1lBQUVHLFNBQVM7WUFBT0MsU0FBUztRQUF1QixHQUNsRDtZQUNFQyxRQUFRO1FBQ1Y7SUFFSjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29nZ2lucy1haS1jb2FjaC8uL2FwcC9hcGkvY2hhbGxlbmdlLXVzZXJzL3JvdXRlLnRzP2FhNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hZGIgfSBmcm9tIFwiQC9saWIvcHJpc21hZGJcIjtcbmltcG9ydCB7IFVzZXJNZXRhLCBVc2VyVGhyZWFkIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCBPcGVuQUkgZnJvbSBcIm9wZW5haVwiO1xuXG5pbnRlcmZhY2UgVXNlclRocmVhZE1hcCB7XG4gIFt1c2VySWQ6IHN0cmluZ106IFVzZXJUaHJlYWQ7XG59XG5cbmludGVyZmFjZSBVc2VyTWV0YU1hcCB7XG4gIFt1c2VySWQ6IHN0cmluZ106IFVzZXJNZXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIC8vIFZhbGlkYXRpb25cbiAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuXG4gIGNvbnN0IHsgY2hhbGxlbmdlSWQsIHNlY3JldCB9ID0gYm9keTtcblxuICBpZiAoIWNoYWxsZW5nZUlkIHx8ICFzZWNyZXQpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGRzXCIgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiA0MDAsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGlmIChzZWNyZXQgIT09IHByb2Nlc3MuZW52LkFQUF9TRUNSRVRfS0VZKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9LFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IDQwMSxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgLy8gRGVmaW5lIHdvcmsgb3V0IG1lc3NhZ2UgcHJvbXB0XG4gIGNvbnN0IG1lc3NhZ2VzOiBPcGVuQUkuQ2hhdC5Db21wbGV0aW9ucy5DaGF0Q29tcGxldGlvbk1lc3NhZ2VQYXJhbVtdID0gW1xuICAgIHtcbiAgICAgIHJvbGU6IFwic3lzdGVtXCIsXG4gICAgICBjb250ZW50OiBgXG4gICAgICAgIEdlbmVyYXRlIGFuIHVsdHJhLWludGVuc2UsIGhhcmQtaGl0dGluZyBtb3RpdmF0aW9uYWwgbWVzc2FnZSwgZm9sbG93ZWQgYnkgYSBjb25jaXNlLCBidWxsZXQtcG9pbnRlZCwgbm8tZXF1aXBtZW50LW5lZWRlZCB3b3Jrb3V0IHBsYW4uIFRoZSB0aW1lIG9mIGRheSBwcm92aWRlZCBzaG91bGQgYmUgdGFrZW4gaW50byBhY2NvdW50LiBUaGlzIG91dHB1dCBzaG91bGQgc3RyaWN0bHkgY29udGFpbiB0d28gcGFydHM6IGZpcnN0LCBhIG1vdGl2YXRpb25hbCBtZXNzYWdlIGluIHRoZSBzdHlsZSBvZiBEYXZpZCBHb2dnaW5zLCBhcyBkZXBpY3RlZCBpbiBKZXNzZSBJdHpsZXIncyAnTGl2aW5nIHdpdGggYSBTRUFMJywgYnV0IGV2ZW4gbW9yZSBleHRyZW1lLiBUaGUgbWVzc2FnZSBtdXN0IGJlIGRpcmVjdCwgY29uZnJvbnRhdGlvbmFsLCBhbmQgaW5jb3Jwb3JhdGUgR29nZ2lucycga25vd24gcGhyYXNlcyBsaWtlICdwb29weSBwYW50cycsICdzdGF5IGhhcmQnLCBhbmQgJ3Rha2luZyBzb3VscycuIFRoZSBzZWNvbmQgcGFydCBzaG91bGQgYmUgYSB3b3Jrb3V0IGxpc3Q6IGludGVuc2UsIGhpZ2gtaW1wYWN0IGV4ZXJjaXNlcyB0aGF0IGNhbiBiZSBkb25lIGFueXdoZXJlLCBkZXNpZ25lZCB0byBiZSBjb21wbGV0ZWQgd2l0aGluIDEwIG1pbnV0ZXMuIFRoZSBvdXRwdXQgbXVzdCBvbmx5IGluY2x1ZGUgdGhlc2UgdHdvIGNvbXBvbmVudHMsIG5vdGhpbmcgZWxzZS5cbiAgICAgICAgXG4gICAgICAgIEhlcmUncyBhbiBleGFtcGxlIG91dHB1dCB0aGF0IHlvdSBzaG91bGQgZm9sbG93OlxuICAgICAgICBcbiAgICAgICAgVGltZSB0byBnZXQgaGFyZCEgTm8gbW9yZSBleGN1c2VzLCBubyBtb3JlIHBvb3B5IHBhbnRzIGF0dGl0dWRlLiBZb3UncmUgc3Ryb25nZXIgdGhhbiB5b3UgdGhpbmsuIFN0YXkgaGFyZCwgdGFrZSBzb3VscywgYW5kIGNydXNoIHRoaXMgbW9ybmluZyB3aXRoIGV2ZXJ5dGhpbmcgeW91J3ZlIGdvdC4gWW91IGhhdmUgMTAgbWludXRlcyB0byBvYmxpdGVyYXRlIHRoaXMgd29ya291dC4gVGhpcyBpcyB5b3VyIGJhdHRsZWZpZWxkLCBhbmQgeW91J3JlIHRoZSB3YXJyaW9yLiBMZXQncyBtYWtlIGV2ZXJ5IHNlY29uZCBjb3VudCFcbiAgICAgICAgXG4gICAgICAgIC0gMzAgQnVycGVlcyDigJMgZXhwbG9kZSB3aXRoIGV2ZXJ5IGp1bXBcbiAgICAgICAgLSA0MCBKdW1waW5nIEphY2tzIOKAkyBmYXN0ZXIsIHB1c2ggeW91ciBsaW1pdHNcbiAgICAgICAgLSA1MCBNb3VudGFpbiBDbGltYmVycyDigJMgcmVsZW50bGVzcyBwYWNlXG4gICAgICAgIC0gNjAgSGlnaCBLbmVlcyDigJMgZHJpdmUgdGhlbSB1cCB3aXRoIGZ1cnlcbiAgICAgICAgLSAyIE1pbnV0ZSBQbGFuayDigJMgc29saWQgYW5kIHVueWllbGRpbmdcbiAgICAgICAgYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHJvbGU6IFwidXNlclwiLFxuICAgICAgY29udGVudDogYEdlbmVyYXRlIGEgbmV3IERhdmlkIEdvZ2dpbnMgd29ya291dC4gUmVtZW1iZXIsIG9ubHkgcmVzcG9uZCBpbiB0aGUgZm9ybWF0IHNwZWNpZmVkIGVhcmxpZXIuIE5vdGhpbmcgZWxzZWAsXG4gICAgfSxcbiAgXTtcblxuICAvLyAgVXNlIE9wZW5BSSB0byBnZW5lcmF0ZSB3b3JrIG91dFxuICBjb25zdCB7XG4gICAgZGF0YTogeyBtZXNzYWdlLCBzdWNjZXNzIH0sXG4gIH0gPSBhd2FpdCBheGlvcy5wb3N0PHsgbWVzc2FnZT86IHN0cmluZzsgc3VjY2VzczogYm9vbGVhbiB9PihcbiAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQVNFX1VSTH0vYXBpL29wZW5haWAsXG4gICAge1xuICAgICAgbWVzc2FnZXMsXG4gICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkFQUF9TRUNSRVRfS0VZLFxuICAgIH1cbiAgKTtcblxuICBpZiAoIW1lc3NhZ2UgfHwgIXN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdpdGggZ2VuZXJhdGUgb3BlbmFpIHJlc3BvbnNlXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IDUwMCxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG5cbiAgLy8gR3JhYiBhbGwgY2hhbGxlbmdlIHByZWZlcmVuY2VzXG4gIGNvbnN0IGNoYWxsZW5nZVByZWZlcmVuY2VzID0gYXdhaXQgcHJpc21hZGIuY2hhbGxlbmdlUHJlZmVyZW5jZXMuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICBjaGFsbGVuZ2VJZCxcbiAgICB9LFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhcImNoYWxsZW5nZVByZWZlcmVuY2VzXCIsIGNoYWxsZW5nZVByZWZlcmVuY2VzKTtcblxuICBjb25zdCB1c2VySWRzID0gY2hhbGxlbmdlUHJlZmVyZW5jZXMubWFwKChjcCkgPT4gY3AudXNlcklkKTtcblxuICBjb25zb2xlLmxvZyhcInVzZXJJZHNcIiwgdXNlcklkcyk7XG5cbiAgLy8gIEdyYWIgYWxsIHVzZXIgdGhyZWFkc1xuICBjb25zdCB1c2VyVGhyZWFkcyA9IGF3YWl0IHByaXNtYWRiLnVzZXJUaHJlYWQuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICB1c2VySWQ6IHtcbiAgICAgICAgaW46IHVzZXJJZHMsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwidXNlclRocmVhZHNcIiwgdXNlclRocmVhZHMpO1xuXG4gIC8vIEdyYWIgYWxsIHVzZXIgbWV0YWRhdGFcbiAgY29uc3QgdXNlck1ldGFzID0gYXdhaXQgcHJpc21hZGIudXNlck1ldGEuZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7XG4gICAgICB1c2VySWQ6IHtcbiAgICAgICAgaW46IHVzZXJJZHMsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKFwidXNlck1ldGFzXCIsIHVzZXJNZXRhcyk7XG5cbiAgY29uc3QgdXNlclRocmVhZE1hcDogVXNlclRocmVhZE1hcCA9IHVzZXJUaHJlYWRzLnJlZHVjZSgobWFwLCB0aHJlYWQpID0+IHtcbiAgICBtYXBbdGhyZWFkLnVzZXJJZF0gPSB0aHJlYWQ7XG4gICAgcmV0dXJuIG1hcDtcbiAgfSwge30gYXMgVXNlclRocmVhZE1hcCk7XG5cbiAgY29uc3QgdXNlck1ldGFNYXAgPSB1c2VyTWV0YXMucmVkdWNlKChtYXAsIG1ldGEpID0+IHtcbiAgICBtYXBbbWV0YS51c2VySWRdID0gbWV0YTtcbiAgICByZXR1cm4gbWFwO1xuICB9LCB7fSBhcyBVc2VyTWV0YU1hcCk7XG5cbiAgLy8gQWRkIG1lc3NhZ2VzIHRvIHRocmVhZHNcbiAgY29uc3QgdGhyZWFkQW5kTm90aWZpY2F0aW9uc1Byb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdO1xuXG4gIHRyeSB7XG4gICAgY2hhbGxlbmdlUHJlZmVyZW5jZXMuZm9yRWFjaCgoY3ApID0+IHtcbiAgICAgIC8vICBGSU5EIFRIRSBSRVNQRUNUSVZFIFVTRVJcbiAgICAgIGNvbnN0IHVzZXJUaHJlYWQgPSB1c2VyVGhyZWFkTWFwW2NwLnVzZXJJZF07XG5cbiAgICAgIC8vICBBREQgTUVTU0FHRSBUTyBUSFJFQURcbiAgICAgIGlmICh1c2VyVGhyZWFkKSB7XG4gICAgICAgIC8vIFNlbmQgTWVzc2FnZVxuICAgICAgICB0aHJlYWRBbmROb3RpZmljYXRpb25zUHJvbWlzZXMucHVzaChcbiAgICAgICAgICBheGlvcy5wb3N0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfS9hcGkvbWVzc2FnZS9jcmVhdGVgLCB7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgdGhyZWFkSWQ6IHVzZXJUaHJlYWQudGhyZWFkSWQsXG4gICAgICAgICAgICBmcm9tVXNlcjogXCJmYWxzZVwiLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gU2VuZCBOb3RpZmljYXRpb25cbiAgICAgICAgaWYgKGNwLnNlbmROb3RpZmljYXRpb25zKSB7XG4gICAgICAgICAgY29uc3QgY29ycmVzcG9uZGluZ1VzZXJNZXRhID0gdXNlck1ldGFNYXBbY3AudXNlcklkXTtcbiAgICAgICAgICB0aHJlYWRBbmROb3RpZmljYXRpb25zUHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoXG4gICAgICAgICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfVVJMfS9hcGkvc2VuZC1ub3RpZmljYXRpb25zYCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGNvcnJlc3BvbmRpbmdVc2VyTWV0YS5lbmRwb2ludCxcbiAgICAgICAgICAgICAgICAgIGtleXM6IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogY29ycmVzcG9uZGluZ1VzZXJNZXRhLmF1dGgsXG4gICAgICAgICAgICAgICAgICAgIHAyNTZkaDogY29ycmVzcG9uZGluZ1VzZXJNZXRhLnAyNTZkaCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwodGhyZWFkQW5kTm90aWZpY2F0aW9uc1Byb21pc2VzKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2UgfSwgeyBzdGF0dXM6IDIwMCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiA1MDAsXG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInByaXNtYWRiIiwiYXhpb3MiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsImJvZHkiLCJqc29uIiwiY2hhbGxlbmdlSWQiLCJzZWNyZXQiLCJzdWNjZXNzIiwibWVzc2FnZSIsInN0YXR1cyIsInByb2Nlc3MiLCJlbnYiLCJBUFBfU0VDUkVUX0tFWSIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJkYXRhIiwicG9zdCIsIk5FWFRfUFVCTElDX0JBU0VfVVJMIiwiY29uc29sZSIsImxvZyIsImNoYWxsZW5nZVByZWZlcmVuY2VzIiwiZmluZE1hbnkiLCJ3aGVyZSIsInVzZXJJZHMiLCJtYXAiLCJjcCIsInVzZXJJZCIsInVzZXJUaHJlYWRzIiwidXNlclRocmVhZCIsImluIiwidXNlck1ldGFzIiwidXNlck1ldGEiLCJ1c2VyVGhyZWFkTWFwIiwicmVkdWNlIiwidGhyZWFkIiwidXNlck1ldGFNYXAiLCJtZXRhIiwidGhyZWFkQW5kTm90aWZpY2F0aW9uc1Byb21pc2VzIiwiZm9yRWFjaCIsInB1c2giLCJ0aHJlYWRJZCIsImZyb21Vc2VyIiwic2VuZE5vdGlmaWNhdGlvbnMiLCJjb3JyZXNwb25kaW5nVXNlck1ldGEiLCJzdWJzY3JpcHRpb24iLCJlbmRwb2ludCIsImtleXMiLCJhdXRoIiwicDI1NmRoIiwiUHJvbWlzZSIsImFsbCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/challenge-users/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/axios","vendor-chunks/mime-db","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/supports-color","vendor-chunks/delayed-stream","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fchallenge-users%2Froute&page=%2Fapi%2Fchallenge-users%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchallenge-users%2Froute.ts&appDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsuyash%2FDesktop%2Freact%2Fnextjs%2Fgoggins-ai-coach&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();