/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {
    box-sizing: border-box;
}
* {
    margin: 0;
}
body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
}
input, button, textarea, select {
    font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}
#root, #__next {
    isolation: isolate;
}
body {
    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}`, "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;IACI,SAAS;AACb;AACA;IACI,gBAAgB;IAChB,mCAAmC;AACvC;AACA;IACI,cAAc;IACd,eAAe;AACnB;AACA;IACI,aAAa;AACjB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kIAAkI;AACtI","sourcesContent":["*, *::before, *::after {\r\n    box-sizing: border-box;\r\n}\r\n* {\r\n    margin: 0;\r\n}\r\nbody {\r\n    line-height: 1.5;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\nimg, picture, video, canvas, svg {\r\n    display: block;\r\n    max-width: 100%;\r\n}\r\ninput, button, textarea, select {\r\n    font: inherit;\r\n}\r\np, h1, h2, h3, h4, h5, h6 {\r\n    overflow-wrap: break-word;\r\n}\r\n#root, #__next {\r\n    isolation: isolate;\r\n}\r\nbody {\r\n    font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*set colors*/
:root {
    --primary-accent: #d9b061;
    --secondary-accent: #d9c4a9;
    --background: #bbaf9f;
    --heavy-brown: #745239;
    --accent: #3f0d0c;
}
body { background-color: var(--background); }
.header p, .footer p { color: var(--primary-accent); }
.header, .footer { background-color: var(--accent); }
.mainWelcome { background-color: var(--heavy-brown); }
.foodContainer { background-color: var(--heavy-brown);}

body::-webkit-scrollbar { 
    width: 7px;
}
body::-webkit-scrollbar-thumb {
    background-color: var(--accent);
    border-radius: 2px;
    border: 1px solid black;
}
body::-webkit-scrollbar-track {
    background-color: var(--secondary-accent);
    width: 5px;
}

body { width: 100%; }
.header, .main, .footer { width: 100%; }
.main {padding-bottom: 2.5rem;}

/*set the positions of header and footer*/
.header {
    position: sticky;
    top: 0;
    height: 3.5rem;
}
.footer {
    bottom: 0;
    height: 1.5rem;
}

/*align header items*/
.header {
    display: flex;
    justify-content: space-between;
}
.header nav {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
}

/*set font size in header*/
.header { font-size: 0.8rem; font-weight: 500; }
.header p { font-size: 1.3rem; }

/*regarding images and credits*/
.imageContainer, .imageSection { 
    position: relative; 
    display: inline-block;
}
.mainWelcome .imageContainer img {
    display: block;
    max-height: 35rem;
    border-radius: 1rem;
}
/*position credits in bottom right corner and style them*/
.creditText {
    position: absolute;
    bottom: 0; right: 0;
    color: #e2e2e2;
    text-decoration: none;
    border-top-left-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    font-size: 0.8rem;
    z-index: 1;
}
.header, .footer { z-index: 3; }

/*welcome image*/
.mainWelcome {
    display: grid;
    justify-content: center;
    padding: 1rem;
    box-shadow: 0px 8px 24px 0px #42445a;
}

/*menu header*/
.mainMenu header {
    display: flex;
    justify-content: center;
}
.mainMenu header nav {
    display: flex;
    gap: 2rem;
    padding: 1rem;
}

/*menu headline text*/
.mainMenu .headline {
    display: flex;
    justify-content: start;
    padding-left: 2rem;
    color: var(--accent);
}


/*menu*/
.menuContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    padding: 2rem;
}

/*menu cards*/
.foodContainer {
    padding: 0.3rem;
    border-radius: 10px;
    color: var(--accent);
    box-shadow: 5px 10px 30px 0 #42445a;
}
.foodContainer .title {
    font-size: 1.4rem;
    font-weight: 500;
}
.foodContainer .description {
    font-size: 1rem;
    font-weight: 400;
}

.imageSection img {
    max-height: 300px;
    border-radius: 10px;
}

.imageSection {
    display: grid;
    place-content: center center;
}

.textSection {
    padding: 0.6rem;
}

/*button styling*/
button {
    border-style: solid;
    border-color: var(--heavy-brown);
    background-color: var(--accent);
    color: var(--primary-accent);
    border-radius: 10px;
    padding: 0.7rem;
}
button { transition: 0.05s; }
button:hover { transform: scale(1.1); }
button:active { transform: scale(1.05); }
.header button { padding: 0.5rem 1rem; }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,aAAa;AACb;IACI,yBAAyB;IACzB,2BAA2B;IAC3B,qBAAqB;IACrB,sBAAsB;IACtB,iBAAiB;AACrB;AACA,OAAO,mCAAmC,EAAE;AAC5C,uBAAuB,4BAA4B,EAAE;AACrD,mBAAmB,+BAA+B,EAAE;AACpD,eAAe,oCAAoC,EAAE;AACrD,iBAAiB,oCAAoC,CAAC;;AAEtD;IACI,UAAU;AACd;AACA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,yCAAyC;IACzC,UAAU;AACd;;AAEA,OAAO,WAAW,EAAE;AACpB,0BAA0B,WAAW,EAAE;AACvC,OAAO,sBAAsB,CAAC;;AAE9B,yCAAyC;AACzC;IACI,gBAAgB;IAChB,MAAM;IACN,cAAc;AAClB;AACA;IACI,SAAS;IACT,cAAc;AAClB;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,8BAA8B;AAClC;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA,0BAA0B;AAC1B,UAAU,iBAAiB,EAAE,gBAAgB,EAAE;AAC/C,YAAY,iBAAiB,EAAE;;AAE/B,+BAA+B;AAC/B;IACI,kBAAkB;IAClB,qBAAqB;AACzB;AACA;IACI,cAAc;IACd,iBAAiB;IACjB,mBAAmB;AACvB;AACA,yDAAyD;AACzD;IACI,kBAAkB;IAClB,SAAS,EAAE,QAAQ;IACnB,cAAc;IACd,qBAAqB;IACrB,2BAA2B;IAC3B,oCAAoC;IACpC,YAAY;IACZ,iBAAiB;IACjB,UAAU;AACd;AACA,mBAAmB,UAAU,EAAE;;AAE/B,gBAAgB;AAChB;IACI,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,oCAAoC;AACxC;;AAEA,cAAc;AACd;IACI,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,SAAS;IACT,aAAa;AACjB;;AAEA,qBAAqB;AACrB;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,oBAAoB;AACxB;;;AAGA,OAAO;AACP;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;IACT,aAAa;AACjB;;AAEA,aAAa;AACb;IACI,eAAe;IACf,mBAAmB;IACnB,oBAAoB;IACpB,mCAAmC;AACvC;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,eAAe;AACnB;;AAEA,iBAAiB;AACjB;IACI,mBAAmB;IACnB,gCAAgC;IAChC,+BAA+B;IAC/B,4BAA4B;IAC5B,mBAAmB;IACnB,eAAe;AACnB;AACA,SAAS,iBAAiB,EAAE;AAC5B,eAAe,qBAAqB,EAAE;AACtC,gBAAgB,sBAAsB,EAAE;AACxC,iBAAiB,oBAAoB,EAAE","sourcesContent":["/*set colors*/\r\n:root {\r\n    --primary-accent: #d9b061;\r\n    --secondary-accent: #d9c4a9;\r\n    --background: #bbaf9f;\r\n    --heavy-brown: #745239;\r\n    --accent: #3f0d0c;\r\n}\r\nbody { background-color: var(--background); }\r\n.header p, .footer p { color: var(--primary-accent); }\r\n.header, .footer { background-color: var(--accent); }\r\n.mainWelcome { background-color: var(--heavy-brown); }\r\n.foodContainer { background-color: var(--heavy-brown);}\r\n\r\nbody::-webkit-scrollbar { \r\n    width: 7px;\r\n}\r\nbody::-webkit-scrollbar-thumb {\r\n    background-color: var(--accent);\r\n    border-radius: 2px;\r\n    border: 1px solid black;\r\n}\r\nbody::-webkit-scrollbar-track {\r\n    background-color: var(--secondary-accent);\r\n    width: 5px;\r\n}\r\n\r\nbody { width: 100%; }\r\n.header, .main, .footer { width: 100%; }\r\n.main {padding-bottom: 2.5rem;}\r\n\r\n/*set the positions of header and footer*/\r\n.header {\r\n    position: sticky;\r\n    top: 0;\r\n    height: 3.5rem;\r\n}\r\n.footer {\r\n    bottom: 0;\r\n    height: 1.5rem;\r\n}\r\n\r\n/*align header items*/\r\n.header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.header nav {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n/*set font size in header*/\r\n.header { font-size: 0.8rem; font-weight: 500; }\r\n.header p { font-size: 1.3rem; }\r\n\r\n/*regarding images and credits*/\r\n.imageContainer, .imageSection { \r\n    position: relative; \r\n    display: inline-block;\r\n}\r\n.mainWelcome .imageContainer img {\r\n    display: block;\r\n    max-height: 35rem;\r\n    border-radius: 1rem;\r\n}\r\n/*position credits in bottom right corner and style them*/\r\n.creditText {\r\n    position: absolute;\r\n    bottom: 0; right: 0;\r\n    color: #e2e2e2;\r\n    text-decoration: none;\r\n    border-top-left-radius: 5px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    padding: 5px;\r\n    font-size: 0.8rem;\r\n    z-index: 1;\r\n}\r\n.header, .footer { z-index: 3; }\r\n\r\n/*welcome image*/\r\n.mainWelcome {\r\n    display: grid;\r\n    justify-content: center;\r\n    padding: 1rem;\r\n    box-shadow: 0px 8px 24px 0px #42445a;\r\n}\r\n\r\n/*menu header*/\r\n.mainMenu header {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.mainMenu header nav {\r\n    display: flex;\r\n    gap: 2rem;\r\n    padding: 1rem;\r\n}\r\n\r\n/*menu headline text*/\r\n.mainMenu .headline {\r\n    display: flex;\r\n    justify-content: start;\r\n    padding-left: 2rem;\r\n    color: var(--accent);\r\n}\r\n\r\n\r\n/*menu*/\r\n.menuContainer {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n    gap: 3rem;\r\n    padding: 2rem;\r\n}\r\n\r\n/*menu cards*/\r\n.foodContainer {\r\n    padding: 0.3rem;\r\n    border-radius: 10px;\r\n    color: var(--accent);\r\n    box-shadow: 5px 10px 30px 0 #42445a;\r\n}\r\n.foodContainer .title {\r\n    font-size: 1.4rem;\r\n    font-weight: 500;\r\n}\r\n.foodContainer .description {\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n}\r\n\r\n.imageSection img {\r\n    max-height: 300px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.imageSection {\r\n    display: grid;\r\n    place-content: center center;\r\n}\r\n\r\n.textSection {\r\n    padding: 0.6rem;\r\n}\r\n\r\n/*button styling*/\r\nbutton {\r\n    border-style: solid;\r\n    border-color: var(--heavy-brown);\r\n    background-color: var(--accent);\r\n    color: var(--primary-accent);\r\n    border-radius: 10px;\r\n    padding: 0.7rem;\r\n}\r\nbutton { transition: 0.05s; }\r\nbutton:hover { transform: scale(1.1); }\r\nbutton:active { transform: scale(1.05); }\r\n.header button { padding: 0.5rem 1rem; }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/appetizers/aloo-tikki.jpg":
/*!**********************************************!*\
  !*** ./src/assets/appetizers/aloo-tikki.jpg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/20cbac42b78d57aeb37d9f9ed8d55f2c.jpg");

/***/ }),

/***/ "./src/assets/appetizers/pakoras.jpg":
/*!*******************************************!*\
  !*** ./src/assets/appetizers/pakoras.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/c64c5fdc127fa0b5c94a72b3b37ac0b1.jpg");

/***/ }),

/***/ "./src/assets/appetizers/paneer-tikka.jpg":
/*!************************************************!*\
  !*** ./src/assets/appetizers/paneer-tikka.jpg ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/2daa18fea7db157755b7b8ec2b248424.jpg");

/***/ }),

/***/ "./src/assets/appetizers/samosas.jpg":
/*!*******************************************!*\
  !*** ./src/assets/appetizers/samosas.jpg ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/7e6685d7fe13b4613f90cc075d938394.jpg");

/***/ }),

/***/ "./src/assets/desserts/gulab-jamun.jpg":
/*!*********************************************!*\
  !*** ./src/assets/desserts/gulab-jamun.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/b1d3b69c5ad90d2414d720cd95af5f02.jpg");

/***/ }),

/***/ "./src/assets/desserts/jalebi.jpg":
/*!****************************************!*\
  !*** ./src/assets/desserts/jalebi.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/8295258c4658869a0fff1084a3ca54de.jpg");

/***/ }),

/***/ "./src/assets/desserts/mango-lassi.jpg":
/*!*********************************************!*\
  !*** ./src/assets/desserts/mango-lassi.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/ec4cc8a439dda325e00d3354ca5c3f5e.jpg");

/***/ }),

/***/ "./src/assets/desserts/rasgulla.jpg":
/*!******************************************!*\
  !*** ./src/assets/desserts/rasgulla.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/6522d822fd0c7c40117c9d0df308a266.jpg");

/***/ }),

/***/ "./src/assets/dinner-image.jpg":
/*!*************************************!*\
  !*** ./src/assets/dinner-image.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/ae88a0704b6edbb258b4ef688e32e60c.jpg");

/***/ }),

/***/ "./src/assets/main-courses/butter-chicken.jpg":
/*!****************************************************!*\
  !*** ./src/assets/main-courses/butter-chicken.jpg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/ee1236f680cb5244dc21950f3348a214.jpg");

/***/ }),

/***/ "./src/assets/main-courses/chole-bhature.jpg":
/*!***************************************************!*\
  !*** ./src/assets/main-courses/chole-bhature.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/e73fd24cdc36ef51c727f7579ec0ef33.jpg");

/***/ }),

/***/ "./src/assets/main-courses/dal-tadka.jpg":
/*!***********************************************!*\
  !*** ./src/assets/main-courses/dal-tadka.jpg ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/96c7e324985d3c3e6009b0b96b08e4af.jpg");

/***/ }),

/***/ "./src/assets/main-courses/lamb-rogan-josh.jpg":
/*!*****************************************************!*\
  !*** ./src/assets/main-courses/lamb-rogan-josh.jpg ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/4aaae35f29f7a7b740f036607e20095d.jpg");

/***/ }),

/***/ "./src/assets/main-courses/palak-paneer.jpg":
/*!**************************************************!*\
  !*** ./src/assets/main-courses/palak-paneer.jpg ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/a64eafe8f7455fb74876cbe25bf28d5b.jpg");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooter: () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    return footer;
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader(){
    const header = document.createElement('header');
    header.classList.add('header');

    // create three buttons
    const nav1 = document.createElement('nav');
    const tab1 = [['Home'], ['Menu'], ['About']];
    for(let i = 0; i < tab1.length; i++){
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.innerHTML = tab1[i][0];

        div.appendChild(button);
        nav1.appendChild(div);
        header.appendChild(nav1);
    }

    // create a logo in the middle
    const nav2 = document.createElement('nav');
    const logo = document.createElement('div');
    const logoText = document.createElement('p');
    logoText.innerHTML = 'Welcome to our restaurant';
    logo.appendChild(logoText);
    nav2.appendChild(logo);
    header.appendChild(nav2);

    // create a sign in and order button
    const nav3 = document.createElement('nav'); 
    const tab2 = [['Sign In'], ['Order']];
    for(let i = 0; i < tab2.length; i++){
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.innerHTML = tab2[i][0];

        div.appendChild(button);
        nav3.appendChild(div);
        header.appendChild(nav3);
    }

    return header;
}

/***/ }),

/***/ "./src/images.js":
/*!***********************!*\
  !*** ./src/images.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCredit: () => (/* binding */ createCredit),
/* harmony export */   createImage: () => (/* binding */ createImage)
/* harmony export */ });
function createImage(image){
    // use the imported image
    const imageSrc = new Image();
    imageSrc.src = image;
    imageSrc.loading = 'lazy';
    return imageSrc;
}

function createCredit(title, link){
    // text to credit image
    const imageCreditText = document.createElement('a');
    const imageCreditLink = document.createTextNode(title);
    imageCreditText.appendChild(imageCreditLink);
    imageCreditText.classList.add('creditText');
    imageCreditText.title = title;
    imageCreditText.href = link;
    imageCreditText.target = '_blank';
    imageCreditText.rel = 'noopener noreferrer';

    return imageCreditText;
}

/***/ }),

/***/ "./src/main-menu-mainCourses.js":
/*!**************************************!*\
  !*** ./src/main-menu-mainCourses.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appetizers: () => (/* binding */ appetizers),
/* harmony export */   createMainCourses: () => (/* binding */ createMainCourses),
/* harmony export */   desserts: () => (/* binding */ desserts),
/* harmony export */   mainCourses: () => (/* binding */ mainCourses)
/* harmony export */ });
/* harmony import */ var _assets_main_courses_butter_chicken_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/main-courses/butter-chicken.jpg */ "./src/assets/main-courses/butter-chicken.jpg");
/* harmony import */ var _assets_main_courses_palak_paneer_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/main-courses/palak-paneer.jpg */ "./src/assets/main-courses/palak-paneer.jpg");
/* harmony import */ var _assets_main_courses_chole_bhature_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/main-courses/chole-bhature.jpg */ "./src/assets/main-courses/chole-bhature.jpg");
/* harmony import */ var _assets_main_courses_lamb_rogan_josh_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/main-courses/lamb-rogan-josh.jpg */ "./src/assets/main-courses/lamb-rogan-josh.jpg");
/* harmony import */ var _assets_main_courses_dal_tadka_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/main-courses/dal-tadka.jpg */ "./src/assets/main-courses/dal-tadka.jpg");
/* harmony import */ var _assets_appetizers_samosas_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/appetizers/samosas.jpg */ "./src/assets/appetizers/samosas.jpg");
/* harmony import */ var _assets_appetizers_pakoras_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/appetizers/pakoras.jpg */ "./src/assets/appetizers/pakoras.jpg");
/* harmony import */ var _assets_appetizers_paneer_tikka_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/appetizers/paneer-tikka.jpg */ "./src/assets/appetizers/paneer-tikka.jpg");
/* harmony import */ var _assets_appetizers_aloo_tikki_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/appetizers/aloo-tikki.jpg */ "./src/assets/appetizers/aloo-tikki.jpg");
/* harmony import */ var _assets_desserts_gulab_jamun_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/desserts/gulab-jamun.jpg */ "./src/assets/desserts/gulab-jamun.jpg");
/* harmony import */ var _assets_desserts_rasgulla_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/desserts/rasgulla.jpg */ "./src/assets/desserts/rasgulla.jpg");
/* harmony import */ var _assets_desserts_jalebi_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/desserts/jalebi.jpg */ "./src/assets/desserts/jalebi.jpg");
/* harmony import */ var _assets_desserts_mango_lassi_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/desserts/mango-lassi.jpg */ "./src/assets/desserts/mango-lassi.jpg");
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images.js */ "./src/images.js");



















function createMainCourses(tab){
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    for(let i = 0; i < tab.length; i++){
        //create all containers
        const foodContainer = document.createElement('div');
        const imageSection = document.createElement('section');
        const textSection = document.createElement('section');
        const title = document.createElement('h1');
        const description = document.createElement('h2');

        //add classes to them
        foodContainer.classList.add('foodContainer');
        imageSection.classList.add('imageSection');
        textSection.classList.add('textSection');
        title.classList.add('title');
        description.classList.add('description');
        
        //add all informations to them
        title.innerHTML = tab[i]['title'];
        description.innerHTML = tab[i]['description'];
        const imageSrc = tab[i]['image'];
        const imageCreditText = (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createCredit)(tab[i]['creditText'], tab[i]['creditLink']);
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('imageContainer');

        //structure them
        imageContainer.appendChild(imageSrc);
        imageContainer.appendChild(imageCreditText);
        imageSection.appendChild(imageContainer);
        textSection.appendChild(title);
        textSection.appendChild(description);
        foodContainer.appendChild(imageSection);
        foodContainer.appendChild(textSection);
        menuContainer.appendChild(foodContainer);
    }
    
    return menuContainer;
}


const mainCourses = [
    {
        title: 'Butter Chicken', 
        description: 'Tender chicken pieces simmered in a rich, creamy tomato-based sauce with a blend of spices, served with naan or rice', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_main_courses_butter_chicken_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]), 
        creditText: 'Image by timolina on Freepik', 
        creditLink: 'https://www.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine-top-view_6572208.htm#fromView=search&page=1&position=0&uuid=5158a7bb-3002-4b4d-9e30-37fdbcc8599d'
    },
    {
        title: 'Chole Bhature', 
        description: 'Spicy chickpea curry served with deep-fried bread (bhature) and a side of pickles and onions', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_main_courses_chole_bhature_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]), 
        creditText: 'Image by freepik', 
        creditLink: 'https://www.freepik.com/free-photo/pita-spicy-indian-food_5622270.htm#fromView=search&page=1&position=0&uuid=a8cc8544-bc06-413e-a410-5d7ad3685555'
    },
    {
        title: 'Palak Paneer', 
        description: 'Indian cottage cheese cooked in a spiced spinach gravy, a vegetarian delight served with roti or paratha', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_main_courses_palak_paneer_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]), 
        creditText: 'Image by freepik', 
        creditLink: 'https://www.freepik.com/free-photo/top-view-pakistani-food-arrangement_12144194.htm#fromView=search&page=1&position=2&uuid=26cea397-9382-4258-b2b6-9907d5f01712'
    },
    {
        title: 'Lamb Rogan Josh', 
        description: 'Slow-cooked lamb in a fragrant and spicy sauce with yogurt, tomatoes, and aromatic spices, paired with basmati rice or naan', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_main_courses_lamb_rogan_josh_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]), 
        creditText: 'Image by freepik', 
        creditLink: 'https://www.freepik.com/free-photo/tasty-pakistani-dish-view_12144207.htm#fromView=search&page=1&position=2&uuid=3be4dc03-f393-4e39-9a5d-52262459e3b3'
    },
    {
        title: 'Dal Tadka', 
        description: 'Yellow lentils cooked with onions, tomatoes, and a tempering of cumin, garlic, and ghee, served with steamed rice or roti', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_main_courses_dal_tadka_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]), 
        creditText: 'Image by KamranAydinov on Freepik', 
        creditLink: 'https://www.freepik.com/free-photo/lentil-soup-white-bowl_7874497.htm#fromView=search&page=1&position=1&uuid=73183bc7-02f8-4766-8d46-e5ada9d034bc'
    }
]

const appetizers = [
    {
        title: 'Samosas', 
        description: 'Crispy pastry filled with spiced potatoes, peas, and cumin seeds, served with mint chutney', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_appetizers_samosas_jpg__WEBPACK_IMPORTED_MODULE_5__["default"]), 
        creditText: 'Photo by Karthikeyan Anand', 
        creditLink: 'https://www.pexels.com/photo/delicious-fried-samosa-in-a-wicker-tray-14477873/'
    },
    {
        title: 'Pakoras', 
        description: 'Assorted vegetables (onions, potatoes, spinach) dipped in a spiced gram flour batter and deep-fried, accompanied by tamarind chutney', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_appetizers_pakoras_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]), 
        creditText: 'Image by ArtificialOG from Pixabay', 
        creditLink: 'https://pixabay.com/photos/pakora-indian-food-indian-kitchen-3856054/'
    },
    {
        title: 'Paneer Tikka', 
        description: 'Marinated cubes of paneer (Indian cottage cheese) grilled to perfection with bell peppers and onions, served with a side of mint yogurt sauce', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_appetizers_paneer_tikka_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]), 
        creditText: 'Image by ArtificialOG from Pixabay', 
        creditLink: 'https://pixabay.com/photos/tandoori-chicken-tikka-indian-food-3856045/'
    },
    {
        title: 'Aloo Tikki', 
        description: 'Spiced potato patties served with tamarind and cilantro-mint chutneys', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_appetizers_aloo_tikki_jpg__WEBPACK_IMPORTED_MODULE_8__["default"]), 
        creditText: 'Image by freepik', 
        creditLink: 'https://www.freepik.com/free-photo/delicious-boneless-chicken-sauce-arrangement_35022709.htm#fromView=search&page=1&position=10&uuid=4c8ede54-d0d7-4d3d-bdda-770924cf2795'
    }
]

const desserts = [
    {
        title: 'Gulab Jamun', 
        description: 'Soft, deep-fried milk-based dumplings soaked in a fragrant sugar syrup, often garnished with cardamom and rose water', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_desserts_gulab_jamun_jpg__WEBPACK_IMPORTED_MODULE_9__["default"]), 
        creditText: 'Image by Imran from Pixabay ', 
        creditLink: 'https://pixabay.com/photos/indian-sweet-gulab-jamun-indian-371357/'
    },
    {
        title: 'Mango Lassi', 
        description: 'A refreshing yogurt-based drink blended with ripe mangoes, perfect for cooling off after a spicy meal', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_desserts_mango_lassi_jpg__WEBPACK_IMPORTED_MODULE_12__["default"]), 
        creditText: 'Photo by SimplyArt4794 ', 
        creditLink: 'https://www.pexels.com/photo/glasses-of-delicious-mango-lassi-on-round-wooden-board-14509267/'
    },
    {
        title: 'Jalebi', 
        description: 'Sweet, crispy spiral-shaped treats made from fermented dough, deep-fried and soaked in sugar syrup, served warm', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_desserts_jalebi_jpg__WEBPACK_IMPORTED_MODULE_11__["default"]), 
        creditText: 'Photo by Saveurs Secretes ', 
        creditLink: 'https://www.pexels.com/photo/jalebi-on-a-stainless-plate-5831655/'
    },
    {
        title: 'Rasgulla', 
        description: 'Light and spongy cheese balls soaked in a sweet syrup, made from chenna (curdled milk) and flavored with cardamom', 
        image: (0,_images_js__WEBPACK_IMPORTED_MODULE_13__.createImage)(_assets_desserts_rasgulla_jpg__WEBPACK_IMPORTED_MODULE_10__["default"]), 
        creditText: 'Image by Vikram Gautam from Pixabay', 
        creditLink: 'https://pixabay.com/photos/laddu-sweets-mithai-diwali-dessert-6258444/'
    }
]


/***/ }),

/***/ "./src/main-menu.js":
/*!**************************!*\
  !*** ./src/main-menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMainMenu: () => (/* binding */ createMainMenu)
/* harmony export */ });
/* harmony import */ var _main_menu_mainCourses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-menu-mainCourses */ "./src/main-menu-mainCourses.js");


function createMainMenu(){
    const mainMenu = document.createElement('div');
    mainMenu.classList.add('mainMenu');

    /*add buttons to header*/
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const tab = ['Main Courses', 'Appetizers', 'Desserts'];
    for(let i = 0; i < tab.length; i++){
        const button = document.createElement('button');
        button.innerHTML = tab[i];

        nav.appendChild(button);
        header.appendChild(nav);
    }

    /*create a headline text to show which category is currently showing */
    const headline = document.createElement('nav');
    const selectedCategory = document.createElement('h1');
    headline.appendChild(selectedCategory);
    headline.classList.add('headline');

    mainMenu.appendChild(header);
    selectedCategory.innerHTML = tab[0];
    mainMenu.appendChild(headline);
    mainMenu.appendChild((0,_main_menu_mainCourses__WEBPACK_IMPORTED_MODULE_0__.createMainCourses)(_main_menu_mainCourses__WEBPACK_IMPORTED_MODULE_0__.mainCourses)); // as default put MainCourses

    /*add a way to select specific menu category*/
    const buttons = header.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // if there's already a menu created, delete it
            document.querySelectorAll('.menuContainer').forEach(el => el.remove());

            if(button.innerHTML == tab[0]) {
                mainMenu.appendChild((0,_main_menu_mainCourses__WEBPACK_IMPORTED_MODULE_0__.createMainCourses)(_main_menu_mainCourses__WEBPACK_IMPORTED_MODULE_0__.mainCourses));
                selectedCategory.innerHTML = tab[0];
            } 
            else if (button.innerHTML == tab[1]) {
                mainMenu.appendChild((0,_main_menu_mainCourses__WEBPACK_IMPORTED_MODULE_0__.createMainCourses)(_main_menu_mainCourses__WEBPACK_IMPORTED_MODULE_0__.appetizers));
                selectedCategory.innerHTML = tab[1];
            }
            else if (button.innerHTML == tab[2]) {
                mainMenu.appendChild((0,_main_menu_mainCourses__WEBPACK_IMPORTED_MODULE_0__.createMainCourses)(_main_menu_mainCourses__WEBPACK_IMPORTED_MODULE_0__.desserts));
                selectedCategory.innerHTML = tab[2];
            }
        });
    });
    
    return mainMenu;
}

/***/ }),

/***/ "./src/main-welcome.js":
/*!*****************************!*\
  !*** ./src/main-welcome.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMainWelcome: () => (/* binding */ createMainWelcome)
/* harmony export */ });
/* harmony import */ var _assets_dinner_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/dinner-image.jpg */ "./src/assets/dinner-image.jpg");
/* harmony import */ var _images_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images.js */ "./src/images.js");




function createMainWelcome(){
    const mainWelcome = document.createElement('div');
    mainWelcome.classList.add('mainWelcome');

    // use the imported image
    const myBgImage = (0,_images_js__WEBPACK_IMPORTED_MODULE_1__.createImage)(_assets_dinner_image_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);

    // create a container for the image
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer')

    // text to credit image
    const imageCreditText = (0,_images_js__WEBPACK_IMPORTED_MODULE_1__.createCredit)('Photo by Chan Walrus', 'https://www.pexels.com/photo/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545/');
    
    imageContainer.appendChild(imageCreditText);
    imageContainer.appendChild(myBgImage);
    mainWelcome.appendChild(imageContainer);

    return mainWelcome;
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMain: () => (/* binding */ createMain)
/* harmony export */ });
/* harmony import */ var _main_welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-welcome */ "./src/main-welcome.js");
/* harmony import */ var _main_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-menu */ "./src/main-menu.js");



function createMain(){
    const main = document.createElement('main');
    main.classList.add('main');

    main.appendChild((0,_main_welcome__WEBPACK_IMPORTED_MODULE_0__.createMainWelcome)());
    main.appendChild((0,_main_menu__WEBPACK_IMPORTED_MODULE_1__.createMainMenu)());

    return main;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/footer.js");






const body = document.querySelector('body');
const bodyContent = document.createElement('div');
bodyContent.classList.add('bodyContent');
body.appendChild(bodyContent);

bodyContent.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_2__.createHeader)());
bodyContent.appendChild((0,_main__WEBPACK_IMPORTED_MODULE_3__.createMain)());
bodyContent.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__.createFooter)());
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDQztBQUNtQjtBQUNKO0FBQ0k7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFZO0FBQ3BDLHdCQUF3QixpREFBVTtBQUNsQyx3QkFBd0IscURBQVksSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvYXBwZXRpemVycy9hbG9vLXRpa2tpLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2FwcGV0aXplcnMvcGFrb3Jhcy5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9hcHBldGl6ZXJzL3BhbmVlci10aWtrYS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9hcHBldGl6ZXJzL3NhbW9zYXMuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvZGVzc2VydHMvZ3VsYWItamFtdW4uanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvZGVzc2VydHMvamFsZWJpLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2Rlc3NlcnRzL21hbmdvLWxhc3NpLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2Rlc3NlcnRzL3Jhc2d1bGxhLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL2Rpbm5lci1pbWFnZS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tYWluLWNvdXJzZXMvYnV0dGVyLWNoaWNrZW4uanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWFpbi1jb3Vyc2VzL2Nob2xlLWJoYXR1cmUuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hc3NldHMvbWFpbi1jb3Vyc2VzL2RhbC10YWRrYS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fzc2V0cy9tYWluLWNvdXJzZXMvbGFtYi1yb2dhbi1qb3NoLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYXNzZXRzL21haW4tY291cnNlcy9wYWxhay1wYW5lZXIuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yZXNldC5jc3M/ZWRlMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi1tZW51LW1haW5Db3Vyc2VzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tYWluLW1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21haW4td2VsY29tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuYm9keSB7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG59XHJcbnAsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxufVxyXG4jcm9vdCwgI19fbmV4dCB7XHJcbiAgICBpc29sYXRpb246IGlzb2xhdGU7XHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrSUFBa0k7QUFDdElcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG59XFxyXFxuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxucCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbiNyb290LCAjX19uZXh0IHtcXHJcXG4gICAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKnNldCBjb2xvcnMqL1xyXG46cm9vdCB7XHJcbiAgICAtLXByaW1hcnktYWNjZW50OiAjZDliMDYxO1xyXG4gICAgLS1zZWNvbmRhcnktYWNjZW50OiAjZDljNGE5O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjYmJhZjlmO1xyXG4gICAgLS1oZWF2eS1icm93bjogIzc0NTIzOTtcclxuICAgIC0tYWNjZW50OiAjM2YwZDBjO1xyXG59XHJcbmJvZHkgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTsgfVxyXG4uaGVhZGVyIHAsIC5mb290ZXIgcCB7IGNvbG9yOiB2YXIoLS1wcmltYXJ5LWFjY2VudCk7IH1cclxuLmhlYWRlciwgLmZvb3RlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7IH1cclxuLm1haW5XZWxjb21lIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhdnktYnJvd24pOyB9XHJcbi5mb29kQ29udGFpbmVyIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhdnktYnJvd24pO31cclxuXHJcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXHJcbiAgICB3aWR0aDogN3B4O1xyXG59XHJcbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktYWNjZW50KTtcclxuICAgIHdpZHRoOiA1cHg7XHJcbn1cclxuXHJcbmJvZHkgeyB3aWR0aDogMTAwJTsgfVxyXG4uaGVhZGVyLCAubWFpbiwgLmZvb3RlciB7IHdpZHRoOiAxMDAlOyB9XHJcbi5tYWluIHtwYWRkaW5nLWJvdHRvbTogMi41cmVtO31cclxuXHJcbi8qc2V0IHRoZSBwb3NpdGlvbnMgb2YgaGVhZGVyIGFuZCBmb290ZXIqL1xyXG4uaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBoZWlnaHQ6IDMuNXJlbTtcclxufVxyXG4uZm9vdGVyIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4vKmFsaWduIGhlYWRlciBpdGVtcyovXHJcbi5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uaGVhZGVyIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi8qc2V0IGZvbnQgc2l6ZSBpbiBoZWFkZXIqL1xyXG4uaGVhZGVyIHsgZm9udC1zaXplOiAwLjhyZW07IGZvbnQtd2VpZ2h0OiA1MDA7IH1cclxuLmhlYWRlciBwIHsgZm9udC1zaXplOiAxLjNyZW07IH1cclxuXHJcbi8qcmVnYXJkaW5nIGltYWdlcyBhbmQgY3JlZGl0cyovXHJcbi5pbWFnZUNvbnRhaW5lciwgLmltYWdlU2VjdGlvbiB7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubWFpbldlbGNvbWUgLmltYWdlQ29udGFpbmVyIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC1oZWlnaHQ6IDM1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG4vKnBvc2l0aW9uIGNyZWRpdHMgaW4gYm90dG9tIHJpZ2h0IGNvcm5lciBhbmQgc3R5bGUgdGhlbSovXHJcbi5jcmVkaXRUZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDsgcmlnaHQ6IDA7XHJcbiAgICBjb2xvcjogI2UyZTJlMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4uaGVhZGVyLCAuZm9vdGVyIHsgei1pbmRleDogMzsgfVxyXG5cclxuLyp3ZWxjb21lIGltYWdlKi9cclxuLm1haW5XZWxjb21lIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDI0cHggMHB4ICM0MjQ0NWE7XHJcbn1cclxuXHJcbi8qbWVudSBoZWFkZXIqL1xyXG4ubWFpbk1lbnUgaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ubWFpbk1lbnUgaGVhZGVyIG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLyptZW51IGhlYWRsaW5lIHRleHQqL1xyXG4ubWFpbk1lbnUgLmhlYWRsaW5lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbn1cclxuXHJcblxyXG4vKm1lbnUqL1xyXG4ubWVudUNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDNyZW07XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4vKm1lbnUgY2FyZHMqL1xyXG4uZm9vZENvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwLjNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCAzMHB4IDAgIzQyNDQ1YTtcclxufVxyXG4uZm9vZENvbnRhaW5lciAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5mb29kQ29udGFpbmVyIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uaW1hZ2VTZWN0aW9uIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5pbWFnZVNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0U2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjZyZW07XHJcbn1cclxuXHJcbi8qYnV0dG9uIHN0eWxpbmcqL1xyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGVhdnktYnJvd24pO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWFjY2VudCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMC43cmVtO1xyXG59XHJcbmJ1dHRvbiB7IHRyYW5zaXRpb246IDAuMDVzOyB9XHJcbmJ1dHRvbjpob3ZlciB7IHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxyXG5idXR0b246YWN0aXZlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxyXG4uaGVhZGVyIGJ1dHRvbiB7IHBhZGRpbmc6IDAuNXJlbSAxcmVtOyB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGFBQWE7QUFDYjtJQUNJLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7QUFDQSxPQUFPLG1DQUFtQyxFQUFFO0FBQzVDLHVCQUF1Qiw0QkFBNEIsRUFBRTtBQUNyRCxtQkFBbUIsK0JBQStCLEVBQUU7QUFDcEQsZUFBZSxvQ0FBb0MsRUFBRTtBQUNyRCxpQkFBaUIsb0NBQW9DLENBQUM7O0FBRXREO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLFVBQVU7QUFDZDs7QUFFQSxPQUFPLFdBQVcsRUFBRTtBQUNwQiwwQkFBMEIsV0FBVyxFQUFFO0FBQ3ZDLE9BQU8sc0JBQXNCLENBQUM7O0FBRTlCLHlDQUF5QztBQUN6QztJQUNJLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sY0FBYztBQUNsQjtBQUNBO0lBQ0ksU0FBUztJQUNULGNBQWM7QUFDbEI7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQSwwQkFBMEI7QUFDMUIsVUFBVSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRTtBQUMvQyxZQUFZLGlCQUFpQixFQUFFOztBQUUvQiwrQkFBK0I7QUFDL0I7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBLHlEQUF5RDtBQUN6RDtJQUNJLGtCQUFrQjtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQSxtQkFBbUIsVUFBVSxFQUFFOztBQUUvQixnQkFBZ0I7QUFDaEI7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUEsY0FBYztBQUNkO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7O0FBR0EsT0FBTztBQUNQO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQSxhQUFhO0FBQ2I7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0EsU0FBUyxpQkFBaUIsRUFBRTtBQUM1QixlQUFlLHFCQUFxQixFQUFFO0FBQ3RDLGdCQUFnQixzQkFBc0IsRUFBRTtBQUN4QyxpQkFBaUIsb0JBQW9CLEVBQUVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypzZXQgY29sb3JzKi9cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tcHJpbWFyeS1hY2NlbnQ6ICNkOWIwNjE7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LWFjY2VudDogI2Q5YzRhOTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kOiAjYmJhZjlmO1xcclxcbiAgICAtLWhlYXZ5LWJyb3duOiAjNzQ1MjM5O1xcclxcbiAgICAtLWFjY2VudDogIzNmMGQwYztcXHJcXG59XFxyXFxuYm9keSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpOyB9XFxyXFxuLmhlYWRlciBwLCAuZm9vdGVyIHAgeyBjb2xvcjogdmFyKC0tcHJpbWFyeS1hY2NlbnQpOyB9XFxyXFxuLmhlYWRlciwgLmZvb3RlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7IH1cXHJcXG4ubWFpbldlbGNvbWUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWF2eS1icm93bik7IH1cXHJcXG4uZm9vZENvbnRhaW5lciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYXZ5LWJyb3duKTt9XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIgeyBcXHJcXG4gICAgd2lkdGg6IDdweDtcXHJcXG59XFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1hY2NlbnQpO1xcclxcbiAgICB3aWR0aDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHsgd2lkdGg6IDEwMCU7IH1cXHJcXG4uaGVhZGVyLCAubWFpbiwgLmZvb3RlciB7IHdpZHRoOiAxMDAlOyB9XFxyXFxuLm1haW4ge3BhZGRpbmctYm90dG9tOiAyLjVyZW07fVxcclxcblxcclxcbi8qc2V0IHRoZSBwb3NpdGlvbnMgb2YgaGVhZGVyIGFuZCBmb290ZXIqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGhlaWdodDogMy41cmVtO1xcclxcbn1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyphbGlnbiBoZWFkZXIgaXRlbXMqL1xcclxcbi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcbi5oZWFkZXIgbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKnNldCBmb250IHNpemUgaW4gaGVhZGVyKi9cXHJcXG4uaGVhZGVyIHsgZm9udC1zaXplOiAwLjhyZW07IGZvbnQtd2VpZ2h0OiA1MDA7IH1cXHJcXG4uaGVhZGVyIHAgeyBmb250LXNpemU6IDEuM3JlbTsgfVxcclxcblxcclxcbi8qcmVnYXJkaW5nIGltYWdlcyBhbmQgY3JlZGl0cyovXFxyXFxuLmltYWdlQ29udGFpbmVyLCAuaW1hZ2VTZWN0aW9uIHsgXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuLm1haW5XZWxjb21lIC5pbWFnZUNvbnRhaW5lciBpbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWF4LWhlaWdodDogMzVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcbi8qcG9zaXRpb24gY3JlZGl0cyBpbiBib3R0b20gcmlnaHQgY29ybmVyIGFuZCBzdHlsZSB0aGVtKi9cXHJcXG4uY3JlZGl0VGV4dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwOyByaWdodDogMDtcXHJcXG4gICAgY29sb3I6ICNlMmUyZTI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcbi5oZWFkZXIsIC5mb290ZXIgeyB6LWluZGV4OiAzOyB9XFxyXFxuXFxyXFxuLyp3ZWxjb21lIGltYWdlKi9cXHJcXG4ubWFpbldlbGNvbWUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyNHB4IDBweCAjNDI0NDVhO1xcclxcbn1cXHJcXG5cXHJcXG4vKm1lbnUgaGVhZGVyKi9cXHJcXG4ubWFpbk1lbnUgaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5tYWluTWVudSBoZWFkZXIgbmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKm1lbnUgaGVhZGxpbmUgdGV4dCovXFxyXFxuLm1haW5NZW51IC5oZWFkbGluZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qbWVudSovXFxyXFxuLm1lbnVDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKm1lbnUgY2FyZHMqL1xcclxcbi5mb29kQ29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMzBweCAwICM0MjQ0NWE7XFxyXFxufVxcclxcbi5mb29kQ29udGFpbmVyIC50aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4uZm9vZENvbnRhaW5lciAuZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZVNlY3Rpb24gaW1nIHtcXHJcXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZVNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXIgY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dFNlY3Rpb24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjZyZW07XFxyXFxufVxcclxcblxcclxcbi8qYnV0dG9uIHN0eWxpbmcqL1xcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taGVhdnktYnJvd24pO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1hY2NlbnQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjdyZW07XFxyXFxufVxcclxcbmJ1dHRvbiB7IHRyYW5zaXRpb246IDAuMDVzOyB9XFxyXFxuYnV0dG9uOmhvdmVyIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxyXFxuYnV0dG9uOmFjdGl2ZSB7IHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7IH1cXHJcXG4uaGVhZGVyIGJ1dHRvbiB7IHBhZGRpbmc6IDAuNXJlbSAxcmVtOyB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzIwY2JhYzQyYjc4ZDU3YWViMzdkOWY5ZWQ4ZDU1ZjJjLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYzY0YzVmZGMxMjdmYTBiNWM5NGE3MmIzYjM3YWMwYjEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy8yZGFhMThmZWE3ZGIxNTc3NTViN2I4ZWMyYjI0ODQyNC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzdlNjY4NWQ3ZmUxM2I0NjEzZjkwY2MwNzVkOTM4Mzk0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYjFkM2I2OWM1YWQ5MGQyNDE0ZDcyMGNkOTVhZjVmMDIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy84Mjk1MjU4YzQ2NTg4NjlhMGZmZjEwODRhM2NhNTRkZS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2VjNGNjOGE0MzlkZGEzMjVlMDBkMzM1NGNhNWMzZjVlLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvNjUyMmQ4MjJmZDBjN2M0MDExN2M5ZDBkZjMwOGEyNjYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9hZTg4YTA3MDRiNmVkYmIyNThiNGVmNjg4ZTMyZTYwYy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2VlMTIzNmY2ODBjYjUyNDRkYzIxOTUwZjMzNDhhMjE0LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZTczZmQyNGNkYzM2ZWY1MWM3MjdmNzU3OWVjMGVmMzMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy85NmM3ZTMyNDk4NWQzYzNlNjAwOWIwYjk2YjA4ZTRhZi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzRhYWFlMzVmMjlmN2E3Yjc0MGYwMzY2MDdlMjAwOTVkLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYTY0ZWFmZThmNzQ1NWZiNzQ4NzZjYmUyNWJmMjhkNWIuanBnXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG5cclxuICAgIHJldHVybiBmb290ZXI7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgdGhyZWUgYnV0dG9uc1xyXG4gICAgY29uc3QgbmF2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgY29uc3QgdGFiMSA9IFtbJ0hvbWUnXSwgWydNZW51J10sIFsnQWJvdXQnXV07XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFiMS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IHRhYjFbaV1bMF07XHJcblxyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgICAgIG5hdjEuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2MSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlIGEgbG9nbyBpbiB0aGUgbWlkZGxlXHJcbiAgICBjb25zdCBuYXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxvZ29UZXh0LmlubmVySFRNTCA9ICdXZWxjb21lIHRvIG91ciByZXN0YXVyYW50JztcclxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xyXG4gICAgbmF2Mi5hcHBlbmRDaGlsZChsb2dvKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYyKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYSBzaWduIGluIGFuZCBvcmRlciBidXR0b25cclxuICAgIGNvbnN0IG5hdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTsgXHJcbiAgICBjb25zdCB0YWIyID0gW1snU2lnbiBJbiddLCBbJ09yZGVyJ11dO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhYjIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSB0YWIyW2ldWzBdO1xyXG5cclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICBuYXYzLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdjMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2UoaW1hZ2Upe1xyXG4gICAgLy8gdXNlIHRoZSBpbXBvcnRlZCBpbWFnZVxyXG4gICAgY29uc3QgaW1hZ2VTcmMgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlU3JjLnNyYyA9IGltYWdlO1xyXG4gICAgaW1hZ2VTcmMubG9hZGluZyA9ICdsYXp5JztcclxuICAgIHJldHVybiBpbWFnZVNyYztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNyZWRpdCh0aXRsZSwgbGluayl7XHJcbiAgICAvLyB0ZXh0IHRvIGNyZWRpdCBpbWFnZVxyXG4gICAgY29uc3QgaW1hZ2VDcmVkaXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY29uc3QgaW1hZ2VDcmVkaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xyXG4gICAgaW1hZ2VDcmVkaXRUZXh0LmFwcGVuZENoaWxkKGltYWdlQ3JlZGl0TGluayk7XHJcbiAgICBpbWFnZUNyZWRpdFRleHQuY2xhc3NMaXN0LmFkZCgnY3JlZGl0VGV4dCcpO1xyXG4gICAgaW1hZ2VDcmVkaXRUZXh0LnRpdGxlID0gdGl0bGU7XHJcbiAgICBpbWFnZUNyZWRpdFRleHQuaHJlZiA9IGxpbms7XHJcbiAgICBpbWFnZUNyZWRpdFRleHQudGFyZ2V0ID0gJ19ibGFuayc7XHJcbiAgICBpbWFnZUNyZWRpdFRleHQucmVsID0gJ25vb3BlbmVyIG5vcmVmZXJyZXInO1xyXG5cclxuICAgIHJldHVybiBpbWFnZUNyZWRpdFRleHQ7XHJcbn0iLCJpbXBvcnQgYnV0dGVyQ2hpY2tlbiBmcm9tICcuL2Fzc2V0cy9tYWluLWNvdXJzZXMvYnV0dGVyLWNoaWNrZW4uanBnJztcclxuaW1wb3J0IHBhbGFrUGFuZWVyIGZyb20gJy4vYXNzZXRzL21haW4tY291cnNlcy9wYWxhay1wYW5lZXIuanBnJztcclxuaW1wb3J0IGNob2xlQmhhdHVyZSBmcm9tICcuL2Fzc2V0cy9tYWluLWNvdXJzZXMvY2hvbGUtYmhhdHVyZS5qcGcnO1xyXG5pbXBvcnQgbGFtYlJvZ2FuSm9zaCBmcm9tICcuL2Fzc2V0cy9tYWluLWNvdXJzZXMvbGFtYi1yb2dhbi1qb3NoLmpwZyc7XHJcbmltcG9ydCBkYWxUYWRrYSBmcm9tICcuL2Fzc2V0cy9tYWluLWNvdXJzZXMvZGFsLXRhZGthLmpwZyc7XHJcblxyXG5pbXBvcnQgc2Ftb3NhcyBmcm9tICcuL2Fzc2V0cy9hcHBldGl6ZXJzL3NhbW9zYXMuanBnJztcclxuaW1wb3J0IHBha29yYXMgZnJvbSAnLi9hc3NldHMvYXBwZXRpemVycy9wYWtvcmFzLmpwZyc7XHJcbmltcG9ydCBwYW5lZXJUaWtrYSBmcm9tICcuL2Fzc2V0cy9hcHBldGl6ZXJzL3BhbmVlci10aWtrYS5qcGcnO1xyXG5pbXBvcnQgYWxvb1Rpa2tpIGZyb20gJy4vYXNzZXRzL2FwcGV0aXplcnMvYWxvby10aWtraS5qcGcnO1xyXG5cclxuaW1wb3J0IGd1bGFiSmFtdW4gZnJvbSAnLi9hc3NldHMvZGVzc2VydHMvZ3VsYWItamFtdW4uanBnJztcclxuaW1wb3J0IHJhc2d1bGxhIGZyb20gJy4vYXNzZXRzL2Rlc3NlcnRzL3Jhc2d1bGxhLmpwZyc7XHJcbmltcG9ydCBqYWxlYmkgZnJvbSAnLi9hc3NldHMvZGVzc2VydHMvamFsZWJpLmpwZyc7XHJcbmltcG9ydCBtYW5nb0xhc3NpIGZyb20gJy4vYXNzZXRzL2Rlc3NlcnRzL21hbmdvLWxhc3NpLmpwZyc7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVJbWFnZSB9IGZyb20gJy4vaW1hZ2VzLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlQ3JlZGl0IH0gZnJvbSAnLi9pbWFnZXMuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1haW5Db3Vyc2VzKHRhYil7XHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnVDb250YWluZXInKTtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFiLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAvL2NyZWF0ZSBhbGwgY29udGFpbmVyc1xyXG4gICAgICAgIGNvbnN0IGZvb2RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpbWFnZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdGV4dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuXHJcbiAgICAgICAgLy9hZGQgY2xhc3NlcyB0byB0aGVtXHJcbiAgICAgICAgZm9vZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb29kQ29udGFpbmVyJyk7XHJcbiAgICAgICAgaW1hZ2VTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ltYWdlU2VjdGlvbicpO1xyXG4gICAgICAgIHRleHRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RleHRTZWN0aW9uJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vYWRkIGFsbCBpbmZvcm1hdGlvbnMgdG8gdGhlbVxyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRhYltpXVsndGl0bGUnXTtcclxuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSB0YWJbaV1bJ2Rlc2NyaXB0aW9uJ107XHJcbiAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSB0YWJbaV1bJ2ltYWdlJ107XHJcbiAgICAgICAgY29uc3QgaW1hZ2VDcmVkaXRUZXh0ID0gY3JlYXRlQ3JlZGl0KHRhYltpXVsnY3JlZGl0VGV4dCddLCB0YWJbaV1bJ2NyZWRpdExpbmsnXSk7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWFnZUNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICAvL3N0cnVjdHVyZSB0aGVtXHJcbiAgICAgICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VTcmMpO1xyXG4gICAgICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlQ3JlZGl0VGV4dCk7XHJcbiAgICAgICAgaW1hZ2VTZWN0aW9uLmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcclxuICAgICAgICB0ZXh0U2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgdGV4dFNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VTZWN0aW9uKTtcclxuICAgICAgICBmb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRTZWN0aW9uKTtcclxuICAgICAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvb2RDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gbWVudUNvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBtYWluQ291cnNlcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0J1dHRlciBDaGlja2VuJywgXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUZW5kZXIgY2hpY2tlbiBwaWVjZXMgc2ltbWVyZWQgaW4gYSByaWNoLCBjcmVhbXkgdG9tYXRvLWJhc2VkIHNhdWNlIHdpdGggYSBibGVuZCBvZiBzcGljZXMsIHNlcnZlZCB3aXRoIG5hYW4gb3IgcmljZScsIFxyXG4gICAgICAgIGltYWdlOiBjcmVhdGVJbWFnZShidXR0ZXJDaGlja2VuKSwgXHJcbiAgICAgICAgY3JlZGl0VGV4dDogJ0ltYWdlIGJ5IHRpbW9saW5hIG9uIEZyZWVwaWsnLCBcclxuICAgICAgICBjcmVkaXRMaW5rOiAnaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vZnJlZS1waG90by9jdXJyeS13aXRoLWNoaWNrZW4tb25pb25zLWluZGlhbi1mb29kLWFzaWFuLWN1aXNpbmUtdG9wLXZpZXdfNjU3MjIwOC5odG0jZnJvbVZpZXc9c2VhcmNoJnBhZ2U9MSZwb3NpdGlvbj0wJnV1aWQ9NTE1OGE3YmItMzAwMi00YjRkLTllMzAtMzdmZGJjYzg1OTlkJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Nob2xlIEJoYXR1cmUnLCBcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NwaWN5IGNoaWNrcGVhIGN1cnJ5IHNlcnZlZCB3aXRoIGRlZXAtZnJpZWQgYnJlYWQgKGJoYXR1cmUpIGFuZCBhIHNpZGUgb2YgcGlja2xlcyBhbmQgb25pb25zJywgXHJcbiAgICAgICAgaW1hZ2U6IGNyZWF0ZUltYWdlKGNob2xlQmhhdHVyZSksIFxyXG4gICAgICAgIGNyZWRpdFRleHQ6ICdJbWFnZSBieSBmcmVlcGlrJywgXHJcbiAgICAgICAgY3JlZGl0TGluazogJ2h0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vcGl0YS1zcGljeS1pbmRpYW4tZm9vZF81NjIyMjcwLmh0bSNmcm9tVmlldz1zZWFyY2gmcGFnZT0xJnBvc2l0aW9uPTAmdXVpZD1hOGNjODU0NC1iYzA2LTQxM2UtYTQxMC01ZDdhZDM2ODU1NTUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUGFsYWsgUGFuZWVyJywgXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdJbmRpYW4gY290dGFnZSBjaGVlc2UgY29va2VkIGluIGEgc3BpY2VkIHNwaW5hY2ggZ3JhdnksIGEgdmVnZXRhcmlhbiBkZWxpZ2h0IHNlcnZlZCB3aXRoIHJvdGkgb3IgcGFyYXRoYScsIFxyXG4gICAgICAgIGltYWdlOiBjcmVhdGVJbWFnZShwYWxha1BhbmVlciksIFxyXG4gICAgICAgIGNyZWRpdFRleHQ6ICdJbWFnZSBieSBmcmVlcGlrJywgXHJcbiAgICAgICAgY3JlZGl0TGluazogJ2h0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vdG9wLXZpZXctcGFraXN0YW5pLWZvb2QtYXJyYW5nZW1lbnRfMTIxNDQxOTQuaHRtI2Zyb21WaWV3PXNlYXJjaCZwYWdlPTEmcG9zaXRpb249MiZ1dWlkPTI2Y2VhMzk3LTkzODItNDI1OC1iMmI2LTk5MDdkNWYwMTcxMidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdMYW1iIFJvZ2FuIEpvc2gnLCBcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Nsb3ctY29va2VkIGxhbWIgaW4gYSBmcmFncmFudCBhbmQgc3BpY3kgc2F1Y2Ugd2l0aCB5b2d1cnQsIHRvbWF0b2VzLCBhbmQgYXJvbWF0aWMgc3BpY2VzLCBwYWlyZWQgd2l0aCBiYXNtYXRpIHJpY2Ugb3IgbmFhbicsIFxyXG4gICAgICAgIGltYWdlOiBjcmVhdGVJbWFnZShsYW1iUm9nYW5Kb3NoKSwgXHJcbiAgICAgICAgY3JlZGl0VGV4dDogJ0ltYWdlIGJ5IGZyZWVwaWsnLCBcclxuICAgICAgICBjcmVkaXRMaW5rOiAnaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vZnJlZS1waG90by90YXN0eS1wYWtpc3RhbmktZGlzaC12aWV3XzEyMTQ0MjA3Lmh0bSNmcm9tVmlldz1zZWFyY2gmcGFnZT0xJnBvc2l0aW9uPTImdXVpZD0zYmU0ZGMwMy1mMzkzLTRlMzktOWE1ZC01MjI2MjQ1OWUzYjMnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRGFsIFRhZGthJywgXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdZZWxsb3cgbGVudGlscyBjb29rZWQgd2l0aCBvbmlvbnMsIHRvbWF0b2VzLCBhbmQgYSB0ZW1wZXJpbmcgb2YgY3VtaW4sIGdhcmxpYywgYW5kIGdoZWUsIHNlcnZlZCB3aXRoIHN0ZWFtZWQgcmljZSBvciByb3RpJywgXHJcbiAgICAgICAgaW1hZ2U6IGNyZWF0ZUltYWdlKGRhbFRhZGthKSwgXHJcbiAgICAgICAgY3JlZGl0VGV4dDogJ0ltYWdlIGJ5IEthbXJhbkF5ZGlub3Ygb24gRnJlZXBpaycsIFxyXG4gICAgICAgIGNyZWRpdExpbms6ICdodHRwczovL3d3dy5mcmVlcGlrLmNvbS9mcmVlLXBob3RvL2xlbnRpbC1zb3VwLXdoaXRlLWJvd2xfNzg3NDQ5Ny5odG0jZnJvbVZpZXc9c2VhcmNoJnBhZ2U9MSZwb3NpdGlvbj0xJnV1aWQ9NzMxODNiYzctMDJmOC00NzY2LThkNDYtZTVhZGE5ZDAzNGJjJ1xyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgYXBwZXRpemVycyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1NhbW9zYXMnLCBcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0NyaXNweSBwYXN0cnkgZmlsbGVkIHdpdGggc3BpY2VkIHBvdGF0b2VzLCBwZWFzLCBhbmQgY3VtaW4gc2VlZHMsIHNlcnZlZCB3aXRoIG1pbnQgY2h1dG5leScsIFxyXG4gICAgICAgIGltYWdlOiBjcmVhdGVJbWFnZShzYW1vc2FzKSwgXHJcbiAgICAgICAgY3JlZGl0VGV4dDogJ1Bob3RvIGJ5IEthcnRoaWtleWFuIEFuYW5kJywgXHJcbiAgICAgICAgY3JlZGl0TGluazogJ2h0dHBzOi8vd3d3LnBleGVscy5jb20vcGhvdG8vZGVsaWNpb3VzLWZyaWVkLXNhbW9zYS1pbi1hLXdpY2tlci10cmF5LTE0NDc3ODczLydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdQYWtvcmFzJywgXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBc3NvcnRlZCB2ZWdldGFibGVzIChvbmlvbnMsIHBvdGF0b2VzLCBzcGluYWNoKSBkaXBwZWQgaW4gYSBzcGljZWQgZ3JhbSBmbG91ciBiYXR0ZXIgYW5kIGRlZXAtZnJpZWQsIGFjY29tcGFuaWVkIGJ5IHRhbWFyaW5kIGNodXRuZXknLCBcclxuICAgICAgICBpbWFnZTogY3JlYXRlSW1hZ2UocGFrb3JhcyksIFxyXG4gICAgICAgIGNyZWRpdFRleHQ6ICdJbWFnZSBieSBBcnRpZmljaWFsT0cgZnJvbSBQaXhhYmF5JywgXHJcbiAgICAgICAgY3JlZGl0TGluazogJ2h0dHBzOi8vcGl4YWJheS5jb20vcGhvdG9zL3Bha29yYS1pbmRpYW4tZm9vZC1pbmRpYW4ta2l0Y2hlbi0zODU2MDU0LydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdQYW5lZXIgVGlra2EnLCBcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ01hcmluYXRlZCBjdWJlcyBvZiBwYW5lZXIgKEluZGlhbiBjb3R0YWdlIGNoZWVzZSkgZ3JpbGxlZCB0byBwZXJmZWN0aW9uIHdpdGggYmVsbCBwZXBwZXJzIGFuZCBvbmlvbnMsIHNlcnZlZCB3aXRoIGEgc2lkZSBvZiBtaW50IHlvZ3VydCBzYXVjZScsIFxyXG4gICAgICAgIGltYWdlOiBjcmVhdGVJbWFnZShwYW5lZXJUaWtrYSksIFxyXG4gICAgICAgIGNyZWRpdFRleHQ6ICdJbWFnZSBieSBBcnRpZmljaWFsT0cgZnJvbSBQaXhhYmF5JywgXHJcbiAgICAgICAgY3JlZGl0TGluazogJ2h0dHBzOi8vcGl4YWJheS5jb20vcGhvdG9zL3RhbmRvb3JpLWNoaWNrZW4tdGlra2EtaW5kaWFuLWZvb2QtMzg1NjA0NS8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnQWxvbyBUaWtraScsIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnU3BpY2VkIHBvdGF0byBwYXR0aWVzIHNlcnZlZCB3aXRoIHRhbWFyaW5kIGFuZCBjaWxhbnRyby1taW50IGNodXRuZXlzJywgXHJcbiAgICAgICAgaW1hZ2U6IGNyZWF0ZUltYWdlKGFsb29UaWtraSksIFxyXG4gICAgICAgIGNyZWRpdFRleHQ6ICdJbWFnZSBieSBmcmVlcGlrJywgXHJcbiAgICAgICAgY3JlZGl0TGluazogJ2h0dHBzOi8vd3d3LmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vZGVsaWNpb3VzLWJvbmVsZXNzLWNoaWNrZW4tc2F1Y2UtYXJyYW5nZW1lbnRfMzUwMjI3MDkuaHRtI2Zyb21WaWV3PXNlYXJjaCZwYWdlPTEmcG9zaXRpb249MTAmdXVpZD00YzhlZGU1NC1kMGQ3LTRkM2QtYmRkYS03NzA5MjRjZjI3OTUnXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBkZXNzZXJ0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0d1bGFiIEphbXVuJywgXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdTb2Z0LCBkZWVwLWZyaWVkIG1pbGstYmFzZWQgZHVtcGxpbmdzIHNvYWtlZCBpbiBhIGZyYWdyYW50IHN1Z2FyIHN5cnVwLCBvZnRlbiBnYXJuaXNoZWQgd2l0aCBjYXJkYW1vbSBhbmQgcm9zZSB3YXRlcicsIFxyXG4gICAgICAgIGltYWdlOiBjcmVhdGVJbWFnZShndWxhYkphbXVuKSwgXHJcbiAgICAgICAgY3JlZGl0VGV4dDogJ0ltYWdlIGJ5IEltcmFuIGZyb20gUGl4YWJheSAnLCBcclxuICAgICAgICBjcmVkaXRMaW5rOiAnaHR0cHM6Ly9waXhhYmF5LmNvbS9waG90b3MvaW5kaWFuLXN3ZWV0LWd1bGFiLWphbXVuLWluZGlhbi0zNzEzNTcvJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ01hbmdvIExhc3NpJywgXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBIHJlZnJlc2hpbmcgeW9ndXJ0LWJhc2VkIGRyaW5rIGJsZW5kZWQgd2l0aCByaXBlIG1hbmdvZXMsIHBlcmZlY3QgZm9yIGNvb2xpbmcgb2ZmIGFmdGVyIGEgc3BpY3kgbWVhbCcsIFxyXG4gICAgICAgIGltYWdlOiBjcmVhdGVJbWFnZShtYW5nb0xhc3NpKSwgXHJcbiAgICAgICAgY3JlZGl0VGV4dDogJ1Bob3RvIGJ5IFNpbXBseUFydDQ3OTQgJywgXHJcbiAgICAgICAgY3JlZGl0TGluazogJ2h0dHBzOi8vd3d3LnBleGVscy5jb20vcGhvdG8vZ2xhc3Nlcy1vZi1kZWxpY2lvdXMtbWFuZ28tbGFzc2ktb24tcm91bmQtd29vZGVuLWJvYXJkLTE0NTA5MjY3LydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdKYWxlYmknLCBcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1N3ZWV0LCBjcmlzcHkgc3BpcmFsLXNoYXBlZCB0cmVhdHMgbWFkZSBmcm9tIGZlcm1lbnRlZCBkb3VnaCwgZGVlcC1mcmllZCBhbmQgc29ha2VkIGluIHN1Z2FyIHN5cnVwLCBzZXJ2ZWQgd2FybScsIFxyXG4gICAgICAgIGltYWdlOiBjcmVhdGVJbWFnZShqYWxlYmkpLCBcclxuICAgICAgICBjcmVkaXRUZXh0OiAnUGhvdG8gYnkgU2F2ZXVycyBTZWNyZXRlcyAnLCBcclxuICAgICAgICBjcmVkaXRMaW5rOiAnaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9waG90by9qYWxlYmktb24tYS1zdGFpbmxlc3MtcGxhdGUtNTgzMTY1NS8nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnUmFzZ3VsbGEnLCBcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xpZ2h0IGFuZCBzcG9uZ3kgY2hlZXNlIGJhbGxzIHNvYWtlZCBpbiBhIHN3ZWV0IHN5cnVwLCBtYWRlIGZyb20gY2hlbm5hIChjdXJkbGVkIG1pbGspIGFuZCBmbGF2b3JlZCB3aXRoIGNhcmRhbW9tJywgXHJcbiAgICAgICAgaW1hZ2U6IGNyZWF0ZUltYWdlKHJhc2d1bGxhKSwgXHJcbiAgICAgICAgY3JlZGl0VGV4dDogJ0ltYWdlIGJ5IFZpa3JhbSBHYXV0YW0gZnJvbSBQaXhhYmF5JywgXHJcbiAgICAgICAgY3JlZGl0TGluazogJ2h0dHBzOi8vcGl4YWJheS5jb20vcGhvdG9zL2xhZGR1LXN3ZWV0cy1taXRoYWktZGl3YWxpLWRlc3NlcnQtNjI1ODQ0NC8nXHJcbiAgICB9XHJcbl1cclxuIiwiaW1wb3J0IHsgY3JlYXRlTWFpbkNvdXJzZXMsIG1haW5Db3Vyc2VzLCBhcHBldGl6ZXJzLCBkZXNzZXJ0cyB9IGZyb20gXCIuL21haW4tbWVudS1tYWluQ291cnNlc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1haW5NZW51KCl7XHJcbiAgICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbk1lbnUnKTtcclxuXHJcbiAgICAvKmFkZCBidXR0b25zIHRvIGhlYWRlciovXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgY29uc3QgdGFiID0gWydNYWluIENvdXJzZXMnLCAnQXBwZXRpemVycycsICdEZXNzZXJ0cyddO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhYi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IHRhYltpXTtcclxuXHJcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XHJcbiAgICB9XHJcblxyXG4gICAgLypjcmVhdGUgYSBoZWFkbGluZSB0ZXh0IHRvIHNob3cgd2hpY2ggY2F0ZWdvcnkgaXMgY3VycmVudGx5IHNob3dpbmcgKi9cclxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGhlYWRsaW5lLmFwcGVuZENoaWxkKHNlbGVjdGVkQ2F0ZWdvcnkpO1xyXG4gICAgaGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnaGVhZGxpbmUnKTtcclxuXHJcbiAgICBtYWluTWVudS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgc2VsZWN0ZWRDYXRlZ29yeS5pbm5lckhUTUwgPSB0YWJbMF07XHJcbiAgICBtYWluTWVudS5hcHBlbmRDaGlsZChoZWFkbGluZSk7XHJcbiAgICBtYWluTWVudS5hcHBlbmRDaGlsZChjcmVhdGVNYWluQ291cnNlcyhtYWluQ291cnNlcykpOyAvLyBhcyBkZWZhdWx0IHB1dCBNYWluQ291cnNlc1xyXG5cclxuICAgIC8qYWRkIGEgd2F5IHRvIHNlbGVjdCBzcGVjaWZpYyBtZW51IGNhdGVnb3J5Ki9cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBoZWFkZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3MgYWxyZWFkeSBhIG1lbnUgY3JlYXRlZCwgZGVsZXRlIGl0XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51Q29udGFpbmVyJykuZm9yRWFjaChlbCA9PiBlbC5yZW1vdmUoKSk7XHJcblxyXG4gICAgICAgICAgICBpZihidXR0b24uaW5uZXJIVE1MID09IHRhYlswXSkge1xyXG4gICAgICAgICAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvdXJzZXMobWFpbkNvdXJzZXMpKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnkuaW5uZXJIVE1MID0gdGFiWzBdO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIGlmIChidXR0b24uaW5uZXJIVE1MID09IHRhYlsxXSkge1xyXG4gICAgICAgICAgICAgICAgbWFpbk1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvdXJzZXMoYXBwZXRpemVycykpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeS5pbm5lckhUTUwgPSB0YWJbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoYnV0dG9uLmlubmVySFRNTCA9PSB0YWJbMl0pIHtcclxuICAgICAgICAgICAgICAgIG1haW5NZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1haW5Db3Vyc2VzKGRlc3NlcnRzKSk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5LmlubmVySFRNTCA9IHRhYlsyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIHJldHVybiBtYWluTWVudTtcclxufSIsImltcG9ydCBiZ0ltYWdlIGZyb20gJy4vYXNzZXRzL2Rpbm5lci1pbWFnZS5qcGcnO1xyXG5pbXBvcnQgeyBjcmVhdGVJbWFnZSB9IGZyb20gJy4vaW1hZ2VzLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlQ3JlZGl0IH0gZnJvbSAnLi9pbWFnZXMuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1haW5XZWxjb21lKCl7XHJcbiAgICBjb25zdCBtYWluV2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbldlbGNvbWUuY2xhc3NMaXN0LmFkZCgnbWFpbldlbGNvbWUnKTtcclxuXHJcbiAgICAvLyB1c2UgdGhlIGltcG9ydGVkIGltYWdlXHJcbiAgICBjb25zdCBteUJnSW1hZ2UgPSBjcmVhdGVJbWFnZShiZ0ltYWdlKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgYSBjb250YWluZXIgZm9yIHRoZSBpbWFnZVxyXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ29udGFpbmVyJylcclxuXHJcbiAgICAvLyB0ZXh0IHRvIGNyZWRpdCBpbWFnZVxyXG4gICAgY29uc3QgaW1hZ2VDcmVkaXRUZXh0ID0gY3JlYXRlQ3JlZGl0KCdQaG90byBieSBDaGFuIFdhbHJ1cycsICdodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL3doaXRlLWFuZC1icm93bi1jb29rZWQtZGlzaC1vbi13aGl0ZS1jZXJhbWljLWJvd2xzLTk1ODU0NS8nKTtcclxuICAgIFxyXG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VDcmVkaXRUZXh0KTtcclxuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG15QmdJbWFnZSk7XHJcbiAgICBtYWluV2VsY29tZS5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIG1haW5XZWxjb21lO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlTWFpbldlbGNvbWUgfSBmcm9tICcuL21haW4td2VsY29tZSc7XHJcbmltcG9ydCB7IGNyZWF0ZU1haW5NZW51IH0gZnJvbSAnLi9tYWluLW1lbnUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1haW4oKXtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1haW5XZWxjb21lKCkpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNYWluTWVudSgpKTtcclxuXHJcbiAgICByZXR1cm4gbWFpbjtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vcmVzZXQuY3NzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVNYWluIH0gZnJvbSAnLi9tYWluJztcclxuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3QgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuYm9keUNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYm9keUNvbnRlbnQnKTtcclxuYm9keS5hcHBlbmRDaGlsZChib2R5Q29udGVudCk7XHJcblxyXG5ib2R5Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbmJvZHlDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XHJcbmJvZHlDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=