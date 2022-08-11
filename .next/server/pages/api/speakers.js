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
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n// import { data } from \"../../../SpeakerData\";\n\n\nconst { promisify  } = __webpack_require__(/*! util */ \"util\");\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\nconst delay = (ms)=>new Promise((resolve)=>{\n        setTimeout(resolve, ms);\n    })\n;\nasync function handler(req, res) {\n    // res.status(200).send(JSON.stringify(data, null, 2));\n    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n    try {\n        const readFileData = await readFile(jsonFile);\n        await delay(1000);\n        const speakers = JSON.parse(readFileData).speakers;\n        if (speakers) {\n            res.setHeader(\"Content-Type\", \"application/json\");\n            res.status(200).send(JSON.stringify(speakers, null, 2));\n            console.log(\"GET /api/speakers status: 200\");\n        }\n    } catch (error) {\n        console.log(\"/api/speakers error\", error);\n        res.status(404).send(\"File not Found on server\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSwrQ0FBK0M7QUFDdkI7QUFDSjtBQUVwQixNQUFNLEVBQUVFLFNBQVMsR0FBRSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFNLENBQUM7QUFDckMsTUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNELG9EQUFXLENBQUM7QUFDdkMsTUFBTUksS0FBSyxHQUFHLENBQUNDLEVBQUUsR0FBSyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxHQUFLO1FBQUVDLFVBQVUsQ0FBQ0QsT0FBTyxFQUFFRixFQUFFLENBQUM7S0FBRSxDQUFDO0FBQUM7QUFHN0QsZUFBZUksT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1Qyx1REFBdUQ7SUFFdkQsTUFBTUMsUUFBUSxHQUFHYixtREFBWSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUM7SUFDOUMsSUFBSTtRQUNBLE1BQU1jLFlBQVksR0FBRyxNQUFNVixRQUFRLENBQUNTLFFBQVEsQ0FBQztRQUM3QyxNQUFNUixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsTUFBTVUsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsWUFBWSxDQUFDLENBQUNDLFFBQVE7UUFDbEQsSUFBSUEsUUFBUSxFQUFFO1lBQ1ZILEdBQUcsQ0FBQ00sU0FBUyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2xETixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDSixJQUFJLENBQUNLLFNBQVMsQ0FBQ04sUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hETyxPQUFPLENBQUNDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ2hEO0tBQ0osQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDWkYsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLEVBQUVDLEtBQUssQ0FBQyxDQUFDO1FBQzFDWixHQUFHLENBQUNPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7S0FDcEQ7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbmluZy1yZWFjdC8uL3BhZ2VzL2FwaS9zcGVha2Vycy9pbmRleC5qcz83ZDlhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5cclxuY29uc3QgeyBwcm9taXNpZnkgfSA9IHJlcXVpcmUoXCJ1dGlsXCIpO1xyXG5jb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XHJcbmNvbnN0IGRlbGF5ID0gKG1zKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSB9KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICAvLyByZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSk7XHJcblxyXG4gICAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoXCIuL1wiLCBcImRiLmpzb25cIik7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcclxuICAgICAgICBhd2FpdCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCBzcGVha2VycyA9IEpTT04ucGFyc2UocmVhZEZpbGVEYXRhKS5zcGVha2VycztcclxuICAgICAgICBpZiAoc3BlYWtlcnMpIHtcclxuICAgICAgICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHNwZWFrZXJzLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0VUIC9hcGkvc3BlYWtlcnMgc3RhdHVzOiAyMDBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi9hcGkvc3BlYWtlcnMgZXJyb3JcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKFwiRmlsZSBub3QgRm91bmQgb24gc2VydmVyXCIpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInBhdGgiLCJmcyIsInByb21pc2lmeSIsInJlcXVpcmUiLCJyZWFkRmlsZSIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwianNvbkZpbGUiLCJyZWFkRmlsZURhdGEiLCJzcGVha2VycyIsIkpTT04iLCJwYXJzZSIsInNldEhlYWRlciIsInN0YXR1cyIsInNlbmQiLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/speakers/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();