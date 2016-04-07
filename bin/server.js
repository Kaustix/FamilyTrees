/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _bodyParser = __webpack_require__(2);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _morgan = __webpack_require__(3);

	var _morgan2 = _interopRequireDefault(_morgan);

	var _database = __webpack_require__(4);

	var Database = _interopRequireWildcard(_database);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Database.Connect();

	var port = process.env.port || 8080;
	var app = (0, _express2.default)();

	app.use(_bodyParser2.default.urlencoded({ extended: true }));
	app.use(_bodyParser2.default.json());
	app.use((0, _morgan2.default)('dev'));

	app.use(function (req, res, next) {
	    res.setHeader("Access-Control-Allow-Origin", "*");
	    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
	    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
	    next();
	});

	app.listen(port, function () {
	    console.log("Listening on Port: " + port);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Connect = Connect;

	var _config = __webpack_require__(5);

	var _config2 = _interopRequireDefault(_config);

	var _mongoose = __webpack_require__(7);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Connect() {
	    _mongoose2.default.connect(_config2.default.connectionString);

	    var db = _mongoose2.default.connection;

	    db.on("error", console.error.bind(console, "Database Connection Error:"));
	    db.once("open", function () {
	        console.log("Database Connected");
	    });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _config = __webpack_require__(6);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var env = process.env.NODE_ENV || "development"; ///**
	// * Millis conversions cheat sheet:
	// * 1 second: 1000
	// * 1 minute: 60000
	// * 10 minutes: 600000
	// * 30 minutes: 1800000
	// * 1 hour: 3600000
	// * 12 hours: 43200000
	// * 24 hours: 86400000
	// * 1 week: 604800000
	// */

	var config = _config2.default[env];

	exports.default = config;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
		"development": {
			"connectionString": "mongodb://admin:asdf123!@ds019480.mlab.com:19480/familytrees",
			"jwtSecret": "",
			"tokenExpiry": 86400000,
			"googleAuth": {
				"clientID": "",
				"clientSecret": "",
				"callBackUrl": ""
			}
		},
		"production": {
			"connectionString": "",
			"jwtSecret": "",
			"tokenExpiry": 86400000
		}
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ }
/******/ ]);