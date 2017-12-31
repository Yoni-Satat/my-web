/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Request = __webpack_require__(1);
const ResumeView = __webpack_require__(2);

const resumeView = new ResumeView();
const requestResume = new Request("http://localhost:3000/api/resume");


const app = function() {
  const select = document.querySelector('#job-title');

  requestResume.get(function(jobs) {
    jobs.forEach(function(job) {
      const option = document.createElement('option');
      option.innerText = job.employer;
      // option.value = index;
      select.appendChild(option);
      // requestResume.post(createResumeRequestCompleted, job);
    });
  });

  const createResumeRequestCompleted = function(job) {
    resumeView.addJob(job);
  }


  console.log("Last line in app.js");
}
document.addEventListener('DOMContentLoaded', app);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const Request = function(url) {
  this.url = url;
}

Request.prototype.get = function(callback) {
  const request = new XMLHttpRequest();
  request.open('GET', this.url);
  request.addEventListener('load', function() {
    if(this.status !== 200) {
      return;
    }
    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  });
  request.send();
}

Request.prototype.post = function(callback, body) {
  const request = new XMLHttpRequest();
  request.open('POST', this.url);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', function() {
    console.log('Yoni wants to log');
    if(this.status !== 201) {
      return;
    }
    const responseBody = JSON.parse(this.responseText);
    console.log(responseBody);
    callback(responseBody);
  });
  console.log('body',body);
  request.send(JSON.stringify(body));
}

Request.prototype.delete = function(callback) {
  const request = new XMLHttpRequest();
  request.open('DELETE', this.url);
  request.addEventListener('load', function() {
    if(this.status !== 204) {
      return;
    }
    callback();
  });
  request.send();
}

module.exports = Request;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const ResumeView = function() {
  this.jobs = [];
}

ResumeView.prototype.addJob = function(job) {
  this.jobs.push(job);
  console.log(this.jobs);
}

// ResumeView.prototype.populateDropDown = function(job) {
//   const select = document.querySelector('#job-title');
//     jobs.forEach(function(job) {
//       const option = document.createElement('option');
//       option.innerText = job.role;
//       select.appendChild(option);
//     });
// }

module.exports = ResumeView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map