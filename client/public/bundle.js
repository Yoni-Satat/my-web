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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const Resume = function(options) {
  this.empEx = [];
}

Resume.prototype.getEmployer = function() {
  resume.forEach(function(employer) {
    console.log(employer);
  });
}

module.exports = Resume;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


const ResumeView = __webpack_require__(2);




const app = function() {
  console.log("hello world");
}
document.addEventListener('DOMContentLoaded', app);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Resume = __webpack_require__(0);

const resume = new Resume([
  {
    "employer": "British Gas, Edinburgh",
    "role": "Customer Service Agent",
    "description": "Working with pay as you go customers over the phone to resolve issues with their service such as lost top-up cards or keys, bill queries, faulty meters and refunds. Creating sales opportunities for the sales team to achieve business growth.",
    "date": "May 2016 - October 2016"
  },
  {
    "employer": "Lloyds Banking Group, Edinburgh",
    "role": "Customer Service Agent",
    "description": "Serving Retail Business Banking customers from all of the UK over the phone. Liaising between customers and the bank to achieve the best and fairest outcome for the customers. Being the First contact for the customers to help & assist with their day to day tasks such as making payments, setting up new payments, stopping cheque etc. Promoting other bank services to meet customer's needs. Logging complaints for customers and work to get full resolution.  Assisting Team Coaches and  Line Manager with training for new colleagues.  Health & Safety rep and stationery orders on a voluntary basis.",
    "date": "2014 -  April 2016"
  },
  {
    "employer": "Three Birds Restaurant, Edinburgh",
    "role": "Sous Chef",
    "description": "Assistant manager to head chef, Running the kitchen on a day to day basis and reporting to the head chef and owners. Ordering, food cost management, HACCP sheets generated daily. Help source suppliers and build good relationships with them.  Creating menu specials on a day to day basis.",
    "date": "2012 - 2014"
  },
  {
    "employer": "The Dogs Restaurant, Edinburgh",
    "role": "Sous Chef",
    "description": "(Moved to Edinburgh due to spouses enrolment in a three year PhD program at Edinburgh University). Started as a Commis Chef eventually being to promoted to Head Chef. Ordering, food cost management, HACCP generated daily. Supplier Liaisons and Negotiations. Setting up seasonal menu changes and weekly specials. Training junior members of the kitchen and trainees from JET and Right Track training programme Awards received while working in the dogs: Michelin Bib Gourmand 2009, Best value restaurant in the UK from the Which Good Food Guide 2010, Placed No. 64 out of 100 top UK restaurants in the National Restaurant Awards 2010.",
    "date": "2009 - 2012"
  },
  {
    "employer": "Tel Yosef Hummus Shop, Israel",
    "role": "Owner Manager",
    "description": "Ground Up restaurant creation including Location, menu design, restaurant layout, etc.  Pricing GP and cash flow management.  Sourcing suppliers. Recruitment, training staff. Advertising and promotion business management. Able to run any area in the restaurant.",
    "date": "2007 - 2009"
  },
  {
    "employer": "Grafikal Screen Printing and Merchandise, Israel",
    "role": "Owner Manager",
    "description": "Managing a team of 10 employees. Sourcing new suppliers, build and maintain strong relationship with them.  Customers service.  Cash flow management and payment collections.  Planning and Building marketing strategies and advertising to support company sales. Recruitment for all sections of the company. Able to fill in any section in the company including IT, printing, setting up orders etc.",
    "date": "1996 - 2009"
  }

]);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map