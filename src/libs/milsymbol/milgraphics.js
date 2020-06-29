(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("milgraphics", [], factory);
	else if(typeof exports === 'object')
		exports["milgraphics"] = factory();
	else
		root["ms"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(I,E){ true?module.exports=E():"function"==typeof define&&define.amd?define("milsymbol",[],E):"object"==typeof exports?exports.milsymbol=E():I.ms=E()}(this,function(){return function(I){function E(R){if(t[R])return t[R].exports;var C=t[R]={i:R,l:!1,exports:{}};return I[R].call(C.exports,C,C.exports,E),C.l=!0,C.exports}var t={};return E.m=I,E.c=t,E.i=function(I){return I},E.d=function(I,t,R){E.o(I,t)||Object.defineProperty(I,t,{configurable:!1,enumerable:!0,get:R})},E.n=function(I){var t=I&&I.__esModule?function(){return I.default}:function(){return I};return E.d(t,"a",t),t},E.o=function(I,E){return Object.prototype.hasOwnProperty.call(I,E)},E.p="",E(E.s=58)}([function(I,E,t){"use strict";/*! 
==========================================================================================

The MIT License (MIT)

Copyright (c) 2017 Måns Beckman - www.spatialillusions.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

------------------------------------------------------------------------------------------

For updates and more information go to http://www.spatialillusions.com

==========================================================================================
*/
var R=new function(){this._colorModes={},this._dashArrays={pending:"4,4",anticipated:"8,12",feintDummy:"8,8"},this._hqStafLength=100,this._iconCache={},this._iconParts=[],this._labelCache={},this._labelOverrides={},this._letterSIDCicons=[],this._numberSIDCicons=[],this._STD2525=!0,this._svgNS="http://www.w3.org/2000/svg",this._symbolParts=[],this.autoSVG=!1,this.version="1.1.0","object"==typeof console&&console.info("milsymbol.js "+this.version+" - Copyright (c) 2017 Måns Beckman  http://www.spatialillusions.com"),"undefined"==typeof parseXML&&(window.parseXML=function(I,E){E=E||document;var t=(new DOMParser).parseFromString(I,"text/xml");return E.adoptNode(t.documentElement)})};R._scale=function(I,E){return{type:"translate",x:100-100*I,y:100-100*I,draw:[{type:"scale",factor:I,draw:[E]}]}},R._translate=function(I,E,t){return{type:"translate",x:I,y:E,draw:[t]}},R.addIconParts=function(I){return"function"==typeof I&&(this._iconParts=this._iconParts.concat(I)),R},R.addLabelOverrides=function(I,E){return"function"==typeof I&&(this._labelOverrides.hasOwnProperty(E)||(this._labelOverrides[E]=[]),this._labelOverrides[E]=this._labelOverrides[E].concat(I)),R},R.addSIDCicons=function(I,E){return"function"==typeof I&&(this["_"+E+"SIDCicons"]=this["_"+E+"SIDCicons"].concat(I)),R},R.addSymbolPart=function(I){return"function"==typeof I&&R.setSymbolParts(R.getSymbolParts().concat(I)),R},R.BBox=t(59),R.ColorMode=function(I,E,t,R,C){var A={};return A.Civilian=I,A.Friend=E,A.Hostile=t,A.Neutral=R,A.Unknown=C,A},R.getColorMode=function(I){var E=this._colorModes[I];return new R.ColorMode(E.Civilian,E.Friend,E.Hostile,E.Neutral,E.Unknown)},R.getDashArrays=function(){return this._dashArrays},R.getHqStafLength=function(){return this._hqStafLength},R.getSymbolParts=function(){return this._symbolParts.slice(0)},R.getVersion=function(){return this.version},R.outline=function(I,E,t,C){var A;if(Array.isArray(I)){A=[];for(var e in I)A.push(R.outline(I[e],E,t,C))}else{A={};for(var S in I)-1==["fill","fillopacity"].indexOf(S)&&(A[S]=I[S]);if("translate"==I.type||"rotate"==I.type||"scale"==I.type){A.draw=[];for(var T in I.draw)A.draw.push(R.outline(I.draw[T],E,t,C))}else A.strokewidth=0!=A.stroke?Number(A.strokewidth||t)+2*E:2*E,A.stroke=C,A.fill=!1,A.linecap="round"}return A},R.setAutoSVG=function(I){return this.autoSVG=I,this.autoSVG},R.setColorMode=function(I,E){return this._colorModes[I]={},this._colorModes[I].Hostile=E.Hostile,this._colorModes[I].Friend=E.Friend,this._colorModes[I].Neutral=E.Neutral,this._colorModes[I].Unknown=E.Unknown,this._colorModes[I].Civilian=E.Civilian,this._colorModes[I]},R.setDashArrays=function(I,E,t){return this._dashArrays.pending=I,this._dashArrays.anticipated=E,this._dashArrays.feintDummy=t,this._dashArrays},R.setHqStafLength=function(I){return this._hqStafLength=I,this._hqStafLength},R.setSymbolParts=function(I){return this._symbolParts=I,R},R.setStandard=t(60),R.addMarkerParts=function(I){console.warn("addMarkerParts() is deprecated and should not be used, use addSymbolPart() instead."),R.addSymbolPart(I)},R.bboxMax=function(I,E){return console.warn("bboxMax() is deprecated and should not be used, use BBox.merge() instead."),I.merge(E)},R.buildingBlock=function(I,E,t){return console.warn("buildingBlock() is deprecated and should not be used."),1==I.length&&Array.isArray(I[0])&&(I=I[0]),1==E.length&&Array.isArray(E[0])&&(E=E[0]),{pre:I,post:E,bbox:t}},R.addLetterLabelOverrides=function(I){console.warn("addLetterLabelOverrides() is deprecated and should not be used, use addLabelOverrides() instead."),"function"==typeof I&&(this._labelOverrides.hasOwnProperty("letter")||(this._labelOverrides.letter=[]),this._labelOverrides.letter=this._labelOverrides.letter.concat(I))},R.addLetterSIDCicons=function(I){console.warn("addLetterSIDCicons() is deprecated and should not be used, use addSIDCicons() instead."),"function"==typeof I&&(this._letterSIDCicons=this._letterSIDCicons.concat(I))},R.addNumberLabelOverrides=function(I){console.warn("addNumberLabelOverrides() is deprecated and should not be used, use addLabelOverrides() instead."),"function"==typeof I&&(this._labelOverrides.hasOwnProperty("number")||(this._labelOverrides.number=[]),this._labelOverrides.number=this._labelOverrides.number.concat(I))},R.addNumberSIDCicons=function(I){console.warn("addNumberSIDCicons() is deprecated and should not be used, use addSIDCicons() instead."),"function"==typeof I&&(this._numberSIDCicons=this._numberSIDCicons.concat(I))},R.bbox=function(I){return console.warn("bbox() is deprecated and should not be used, use BBox() instead."),R.BBox(I)},R.colorMode=function(I,E,t,C,A){return console.warn("colorMode() is deprecated and should not be used, use ColorMode() instead."),R.ColorMode(I,E,t,C,A)},R.getMarkerParts=function(){return console.warn("getMarkerParts() is deprecated and should not be used, use getSymbolParts() instead."),R.getSymbolParts()},R.setMarkerParts=function(I){return console.warn("setMarkerParts() is deprecated and should not be used, use setSymbolParts() instead."),R.setSymbolParts(I),R},I.exports=R},function(I,E,t){var R=t(0);I.exports=new R.ColorMode("black","black","black","black","black")},function(I,E,t){var R=t(0);I.exports=new R.ColorMode("rgb(80,0,80)","rgb(0,107,140)","rgb(200,0,0)","rgb(0,160,0)","rgb(225,220,0)")},function(I,E,t){var R=t(0);I.exports=new R.ColorMode("rgb(255,0,255)","rgb(0, 255, 255)","rgb(255, 0, 0)","rgb(0, 255, 0)","rgb(255, 255, 0)")},function(I,E,t){var R=t(0);I.exports=new R.ColorMode("rgb(255,0,255)","rgb(0, 255, 255)","rgb(255, 0, 0)","rgb(0, 255, 0)","rgb(255, 255, 0)")},function(I,E,t){var R=t(0);I.exports=new R.ColorMode("rgb(255,161,255)","rgb(128,224,255)","rgb(255,128,128)","rgb(170,255,170)","rgb(255,255,128)")},function(I,E,t){var R=t(0);I.exports=new R.ColorMode("rgb(128,0,128)","rgb(0,168,220)","rgb(255,48,49)","rgb(0,226,110)","rgb(255,255,0)")},function(I,E,t){var R=t(0);I.exports=new R.ColorMode(!1,!1,!1,!1,!1)},function(I,E,t){var R=t(0);I.exports=new R.ColorMode("rgb(239, 239, 239)","rgb(239, 239, 239)","rgb(239, 239, 239)","rgb(239, 239, 239)","rgb(239, 239, 239)")},function(I,E,t){var R=t(0);I.exports=new R.ColorMode("white","white","white","white","white")},function(I,E){I.exports=function(I,E,t,R,C,A){function e(I){if("object"==typeof I){if(Array.isArray(I)){for(var E=0;E<I.length;E++)e.call(this,I[E]);return}return I.icon=!0,"text"==I.type&&(I.hasOwnProperty("fontfamily")||(I.fontfamily="Arial"),I.hasOwnProperty("fontweight")||(I.fontweight="bold"),I.hasOwnProperty("textanchor")||(I.textanchor="middle"),I.hasOwnProperty("stroke")||(I.stroke=!1)),I.hasOwnProperty("fill")||(I.fill=T),void(I.hasOwnProperty("stroke")||(I.stroke=T))}}var S=E.affiliation||"Friend",T=t.iconColor[S],N=(E.numberSIDC,{});N["2525B.STN"]={type:"path",fill:!1,d:"m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60 m 35.411,-4.824 a 42.8324,42.8324 0 0 1 -47.888,15.56 42.8324,42.8324 0 0 1 -29.5964,-40.7361 42.8324,42.8324 0 0 1 29.5966,-40.736 42.8324,42.8324 0 0 1 47.8878,15.56"},N["2525B.STN.PKT"]=[{type:"path",fill:!1,d:"m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60"},{type:"text",stroke:!1,x:100,y:145,fontsize:30,text:"PK"}],N["2525B.STN.ASWSHP"]=[{type:"path",fill:!1,d:"m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60"},{type:"text",stroke:!1,x:100,y:145,fontsize:30,text:"AS"}],N["2525B.NCBTT.STN"]=[{type:"path",fill:!1,d:"m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60"},{type:"text",stroke:!1,x:100,y:145,fontsize:30,text:"NC"}],N["2525B.STN.RSC"]=[{type:"path",fill:!1,d:"m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60"},{type:"text",stroke:!1,x:100,y:145,fontsize:30,text:"RS"}],N["2525B.SUB.STN"]=[{type:"path",d:"m 70,85 60,0 0,30 -60,0 z m 30,-15 0,60"},{type:"text",stroke:!1,x:100,y:145,fontsize:30,text:"SS"}],N["2525B.ASWSUB"]={type:"path",d:"m 80,85 40,0 0,-20 -40,0 z m 20,-30 0,40 m -40,15 15,15 50,0 15,-15 -15,-15 -50,0 z"};for(var G in N)N.hasOwnProperty(G)&&(e.call(this,N[G]),I[G]=N[G])}},function(I,E){I.exports=function(I,E,t,R,C,A){function e(I){if("object"==typeof I){if(Array.isArray(I)){for(var E=0;E<I.length;E++)e.call(this,I[E]);return}return I.icon=!0,I.hasOwnProperty("fill")||(I.fill=T),void(I.hasOwnProperty("stroke")||(I.stroke=T))}}var S=E.affiliation||"Friend",T="Hostile"!=S||C?t.iconColor[S]:"rgb(255, 0, 0)",N=E.numberSIDC,G={};G["TP.DESTROY"]=R||N?[{type:"path",fill:!1,d:"m 0,45 85,46.75 m 30,16.5 85,46.75 M 0,155 85,108.25 M 115,91.75 200,45"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"D"}]:{type:"path",fill:!1,strokedasharray:"12,5",d:"M 0,155 200,45 M 0,45 200,155"},G["TP.INTERDICT"]=R||N?[{type:"path",fill:!1,d:"m 194.203,65.6674 5.49,-20.4904 -20.49,-5.4904 M 115,91.75 200,45 M 0,155 85,108.25 M 185,85 l 15,15 -15,15 m -70,-15 85,0 m -200,0 85,0"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"I"}]:{type:"path",fill:!1,d:"m 0,100 200,0 M 0,155 200,45.2 M 185,85 l 15,15 -15,15 m 9.2,-49.3 5.5,-20.5 -20.5,-5.5"},G["TP.NEUTRALIZE"]=R||N?[{type:"path",fill:!1,d:"M 115,108.25 200,155 M 0,45 85,91.75"},{type:"path",fill:!1,strokedasharray:"12,5",d:"M 115,91.75 200,45 M 0,155 85,108.25"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"N"}]:[{type:"path",fill:!1,d:"M 0,45 200,155"},{type:"path",fill:!1,strokedasharray:"12,5",d:"M 0,155 200,45"}],G["TP.DATUM"]=[{type:"path",stroke:!1,d:"m 100,50 0,50 50,0 C 150,72.3858 127.614,50 100,50 Z m 0,50 -50,0 c 0,27.614 22.3858,50 50,50 z"},{type:"circle",fill:!1,cx:100,cy:100,r:50}],G["TP.BRIEF CONTACT"]=[{type:"path",d:"m 65,0 70,0 m -35,80 0,-80 m 0,100 -45,-20 90,0 z"},{type:"text",stroke:!1,textanchor:"middle",x:75,y:55,fontsize:45,text:"B"},{type:"text",stroke:!1,textanchor:"middle",x:125,y:55,fontsize:45,text:"C"}],G["TP.LOST CONTACT"]=[{type:"path",d:"m 65,0 70,0 m -35,80 0,-80 m 0,100 -45,-20 90,0 z"},{type:"text",stroke:!1,textanchor:"middle",x:75,y:55,fontsize:45,text:"L"},{type:"text",stroke:!1,textanchor:"middle",x:125,y:55,fontsize:45,text:"C"}],G["TP.SINKER"]=[{type:"path",fill:!1,d:"m 100,15 0,65 M 60,15 80,0 100,15 120,0 140,15"},{type:"path",d:"M 100,100 55,80 145,80 Z"}],G["TP.SONOBUOY"]=[{type:"path",fill:!1,d:"M 100,60 l 0,-35 10,10 0,-45"},{type:"circle",fill:!1,cx:100,cy:100,r:40}],G["TP.SONOBUOY PATTERN CENTER"]=[G["TP.SONOBUOY"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"P"}],G["TP.SONOBUOY DIFAR"]=[G["TP.SONOBUOY"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"D"}],G["TP.SONOBUOY LOFAR"]=[G["TP.SONOBUOY"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"L"}],G["TP.SONOBUOY CASS"]=[G["TP.SONOBUOY"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"C"}],G["TP.SONOBUOY DICASS"]=[G["TP.SONOBUOY"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"S"}],G["TP.SONOBUOY BT"]=[G["TP.SONOBUOY"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"B"}],G["TP.SONOBUOY ANM"]=[G["TP.SONOBUOY"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"A"}],G["TP.SONOBUOY VLAD"]=[G["TP.SONOBUOY"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"V"}],G["TP.SONOBUOY ATAC"]=[G["TP.SONOBUOY"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"T"}],G["TP.SONOBUOY RO"]=[G["TP.SONOBUOY"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"R"}],G["TP.SONOBUOY KINGPIN"]=[G["TP.SONOBUOY"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"K"}],G["TP.SONOBUOY EXPIRED"]=[G["TP.SONOBUOY"],{type:"path",fill:!1,d:"M 40,60 l 120,80 M 40,140 l 120,-80"}],G["TP.SEARCH"]={type:"path",d:"m 80,80 20,20 -20,20 40,0 -20,-20 20,-20 z M 50,150 150,50 M 50,50 150,150"},G["TP.SEARCH AREA"]=[G["TP.SEARCH"],R||N?[{type:"text",stroke:!1,textanchor:"middle",x:60,y:115,fontsize:45,text:"S"},{type:"text",stroke:!1,textanchor:"middle",x:140,y:115,fontsize:45,text:"A"}]:{type:"text",stroke:!1,textanchor:"end",x:75,y:115,fontsize:40,text:"SA"}],G["TP.DIP POSITION"]=[G["TP.SEARCH"],R||N?[{type:"text",stroke:!1,textanchor:"middle",x:60,y:115,fontsize:45,text:"D"},{type:"text",stroke:!1,textanchor:"middle",x:140,y:115,fontsize:45,text:"P"}]:{type:"text",stroke:!1,textanchor:"end",x:75,y:115,fontsize:40,text:"DIP"}],G["TP.SEARCH CENTER"]={type:"path",stroke:!1,d:"m 100,100 -50,10 0,-20 z m 0,0 10,50 -20,0 z m 0,0 50,-10 0,20 z m 0,0 -10,-50 20,0 z"},G["TP.REFERENCE POINT"]=[{type:"path",fill:!1,d:"M 160,160 40,160 40,40 160,40 Z"},{type:"circle",cx:100,cy:100,r:15}],G["TP.NAVIGATIONAL REFERENCE"]=!N&&R?{type:"path",fill:!1,d:"M 160,160 40,160 40,40 160,40 Z M 160,160 40,40 M 40,160 160,40"}:{type:"path",fill:!1,d:"M 160,160 40,40 M 40,160 160,40"},G["TP.SPECIAL POINT"]=[G["TP.NAVIGATIONAL REFERENCE"],{type:"circle",cx:100,cy:100,r:15}],G["TP.DLRP"]=[G["TP.SPECIAL POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:150,fontsize:40,text:"D"}],G["TP.POINT OF INTENDED MOVEMENT"]=[G["TP.REFERENCE POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:150,fontsize:40,text:"P"}],G["TP.MARSHALL POINT"]=[G["TP.REFERENCE POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:150,fontsize:40,text:"M"}],G["TP.REFERENCE POINT WAYPOINT"]=[G["TP.REFERENCE POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:150,fontsize:40,text:"W"}],G["TP.CORRIDOR TAB"]=[G["TP.REFERENCE POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:150,fontsize:40,text:"C"}],G["TP.POINT OF INTEREST"]=[{type:"path",d:"M 129.021,41.957 C 121.48,49.9458 110.986,54.4816 100,54.5 89.0432,54.4928 78.569,49.9914 71.0234,42.0469 L 100,100 Z"},{type:"circle",fill:!1,cx:100,cy:15,r:40}],G["TP.AIM POINT"]=[{type:"circle",cx:100,cy:100,r:15},{type:"circle",cx:100,cy:100,r:35,fill:!1},{type:"circle",cx:100,cy:100,r:45,fill:!1}],G["TP.DROP POINT"]={type:"path",fill:!1,d:"m 130,100 0,-40 m -60,40 0,-40 m 60,40 0,0 c 0,8.284 -6.716,15 -15,15 -8.284,0 -15,-6.716 -15,-15 m 0,0 0,0 c 0,8.284 -6.7157,15 -15,15 -8.2843,0 -15,-6.716 -15,-15 m 30,-40 0,40"},G["TP.ENTRY POINT"]={type:"path",fill:!1,d:"m 100,100 0,-50 m -35,15 35,35 35,-35 m -85,35 100,0"},G["TP.GROUND ZERO"]={type:"path",stroke:!1,d:"M 100 28 C 100 28 65.4398 29.8261 61.6543 55 C 60.2826 64.1213 75.0115 70.4884 82.2363 71.6543 C 89.4611 72.8201 91.7277 55.3462 98.5098 56.0371 L 93 90 C 93 90 70 90 67 97 C 65.0304 101.596 100 100 100 100 C 100 100 134.97 101.596 133 97 C 130 90 107 90 107 90 L 101.49 56.0371 C 108.272 55.3462 110.539 72.8201 117.764 71.6543 C 124.988 70.4884 139.718 64.1213 138.346 55 C 134.56 29.8261 100 28 100 28 z"},G["TP.MSL DETECT POINT"]={type:"path",d:"m 95,100 0,-55 -10,0 15,-15 15,15 -10,0 0,55 m -55,0 100,0"},G["TP.IMPACT POINT"]={type:"path",d:"m 50,100 40,-10 10,-40 10,40 40,10 -40,10 -10,40 -10,-40 -40,-10"},G["TP.PREDICTED IMPACT POINT"]={type:"path",fill:!1,strokedasharray:"12,5",d:"m 50,100 40,-10 10,-40 10,40 40,10 -40,10 -10,40 -10,-40 -40,-10"},G["TP.FORMATION"]={type:"path",fill:!1,d:"m 100,50 0,100 m -50,-50 100,0"},G["TP.HARBOR"]={type:"path",fill:!1,d:"M 80,140 50,60 150,60 120,140"},G["TP.HARBOR POINT Q"]=[G["TP.HARBOR"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"Q"}],G["TP.HARBOR POINT A"]=[G["TP.HARBOR"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"A"}],G["TP.HARBOR POINT Y"]=[G["TP.HARBOR"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"Y"}],G["TP.HARBOR POINT X"]=[G["TP.HARBOR"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"X"}],G["TP.ROUTE"]={type:"path",fill:!1,d:"m 138.484,76.82 c 0,-7.4823 6.066,-13.5478 13.548,-13.548 7.483,-3e-4 13.549,6.0653 13.549,13.548 m -27.097,0 0,0 c 0,6.9484 -5.634,12.5807 -12.582,12.58 -6.948,-4e-4 -12.58,-5.6324 -12.58,-12.58 m -27.097,0 c 2e-4,-7.4823 6.0657,-13.5478 13.548,-13.548 7.483,-3e-4 13.549,6.0653 13.549,13.548 m -79.3554,0 c 2e-4,-7.4824 6.066,-13.548 13.5484,-13.548 7.4824,0 13.5482,6.0656 13.5484,13.548 m 25.1616,0 0,0 C 86.2246,83.7681 80.5918,89.4003 73.6437,89.4 66.696,89.3998 61.0638,83.7677 61.0634,76.82 m 77.4206,47.328 c 0,-7.482 6.066,-13.548 13.548,-13.548 7.483,0 13.549,6.065 13.549,13.548 m -27.097,0 0,0 c 0,6.948 -5.634,12.581 -12.582,12.58 -6.948,0 -12.58,-5.632 -12.58,-12.58 m -27.097,0 c 2e-4,-7.482 6.0657,-13.548 13.548,-13.548 7.483,0 13.549,6.065 13.549,13.548 m -79.3554,0 c 2e-4,-7.482 6.066,-13.548 13.5484,-13.548 7.4824,0 13.5482,6.066 13.5484,13.548 m 25.1616,0 0,0 c -4e-4,6.948 -5.6332,12.58 -12.5813,12.58 -6.9477,0 -12.5799,-5.632 -12.5803,-12.58 m -27.0968,-23.664 132.5184,0"},G["TP.ROUTE RENDEZVOUS"]=[G["TP.ROUTE"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:170,fontsize:45,text:"R"}],G["TP.ROUTE DIVERSIONS"]=[G["TP.ROUTE"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:170,fontsize:45,text:"D"}],G["TP.ROUTE WAYPOINT"]=[G["TP.ROUTE"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:170,fontsize:45,text:"W"}],G["TP.ROUTE PIM"]=[G["TP.ROUTE"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:170,fontsize:45,text:"M"}],G["TP.ROUTE POINT R"]=[G["TP.ROUTE"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:170,fontsize:45,text:"P"}],G["TP.AIR CONTROL"]={type:"path",fill:!1,d:"m 140,165 0,-130 m -80,0 0,130"},G["TP.AIR CONTROL POINT"]=[G["TP.AIR CONTROL"],{type:"circle",cx:100,cy:100,r:15}],G["TP.COMBAT AIR PATROL (CAP)"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"C"}],G["TP.AIRBORNE EARLY WARNING (AEW)"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"W"}],G["TP.TANKING"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:N||R?115:155,fontsize:45,text:"K"},N||R?[]:{type:"circle",cx:100,cy:100,r:15}],G["TP.FIXED WING"]=[G["TP.AIR CONTROL"],N||R?[{type:"text",stroke:!1,textanchor:"middle",x:100,y:75,fontsize:32,text:"ASW"},{type:"path",d:"m 100,81.3203 c -1.5135,-0 -2.5365,2.6426 -2.5365,2.6426 l -0.1365,14.1465 -28.3641,29.9996 0.1484,4.604 28.5162,-18.748 -0.2929,24.43 -6.3073,6.017 -0.096,3.766 8.0313,-3.524 1.0312,3.326 0,0.02 0,-0.01 0,0.01 0,-0.02 1.0312,-3.326 8.031,3.524 -0.09,-3.766 -6.309,-6.017 -0.293,-24.43 28.518,18.748 0.146,-4.604 -28.364,-29.9996 -0.136,-14.1465 c 0,0 -1.014,-2.6416 -2.528,-2.6426 z",stroke:!1}]:[{type:"text",stroke:!1,textanchor:"middle",x:100,y:155,fontsize:45,text:"F"},{type:"circle",cx:100,cy:100,r:15}]],G["TP.ROTARY WING"]=[G["TP.AIR CONTROL"],N||R?[{type:"text",stroke:!1,textanchor:"middle",x:100,y:75,fontsize:32,text:"ASW"},{type:"path",d:"m 65,80 0,40 70,-40 0,40 -70,-40",stroke:!1}]:[{type:"text",stroke:!1,textanchor:"middle",x:100,y:155,fontsize:45,text:"H"},{type:"circle",cx:100,cy:100,r:15}]],G["TP.SUCAP - FIXED WING"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:75,fontsize:32,text:"SUW"},{type:"path",d:"m 100,81.3203 c -1.5135,-0 -2.5365,2.6426 -2.5365,2.6426 l -0.1365,14.1465 -28.3641,29.9996 0.1484,4.604 28.5162,-18.748 -0.2929,24.43 -6.3073,6.017 -0.096,3.766 8.0313,-3.524 1.0312,3.326 0,0.02 0,-0.01 0,0.01 0,-0.02 1.0312,-3.326 8.031,3.524 -0.09,-3.766 -6.309,-6.017 -0.293,-24.43 28.518,18.748 0.146,-4.604 -28.364,-29.9996 -0.136,-14.1465 c 0,0 -1.014,-2.6416 -2.528,-2.6426 z",stroke:!1}],G["TP.SUCAP - ROTARY WING"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:75,fontsize:32,text:"ASW"},{type:"path",d:"m 65,80 0,40 70,-40 0,40 -70,-40",stroke:!1}],G["TP.MIW - FIXED WING"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:75,fontsize:32,text:"MIW"},{type:"path",d:"m 100,81.3203 c -1.5135,-0 -2.5365,2.6426 -2.5365,2.6426 l -0.1365,14.1465 -28.3641,29.9996 0.1484,4.604 28.5162,-18.748 -0.2929,24.43 -6.3073,6.017 -0.096,3.766 8.0313,-3.524 1.0312,3.326 0,0.02 0,-0.01 0,0.01 0,-0.02 1.0312,-3.326 8.031,3.524 -0.09,-3.766 -6.309,-6.017 -0.293,-24.43 28.518,18.748 0.146,-4.604 -28.364,-29.9996 -0.136,-14.1465 c 0,0 -1.014,-2.6416 -2.528,-2.6426 z",stroke:!1}],G["TP.MIW - ROTARY WING"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:75,fontsize:32,text:"MIW"},{type:"path",d:"m 65,80 0,40 70,-40 0,40 -70,-40",stroke:!1}],G["TP.STRIKE IP"]=[G["TP.AIR CONTROL"],N||R?{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"S"}:[{type:"text",stroke:!1,textanchor:"middle",x:100,y:155,fontsize:45,text:"S"},{type:"circle",cx:100,cy:100,r:15}]],G["TP.CORRIDOR TAB POINT"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:155,fontsize:45,text:"C"},{type:"circle",cx:100,cy:100,r:15}],G["TP.TACAN"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:N||R?115:155,fontsize:45,text:"T"},N||R?[]:{type:"circle",cx:100,cy:100,r:15}],G["TP.TOMCAT"]=[G["TP.AIR CONTROL"],N||R?{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"TC"}:[{type:"text",stroke:!1,textanchor:"middle",x:100,y:155,fontsize:45,text:"O"},{type:"circle",cx:100,cy:100,r:15}]],G["TP.RESCUE"]=[G["TP.AIR CONTROL"],N||R?{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"RC"}:[{type:"text",stroke:!1,textanchor:"middle",x:100,y:155,fontsize:45,text:"R"},{type:"circle",cx:100,cy:100,r:15}]],G["TP.REPLENISH"]=[G["TP.AIR CONTROL"],N||R?{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"RP"}:[{type:"text",stroke:!1,textanchor:"middle",x:100,y:155,fontsize:45,text:"F"},{type:"circle",cx:100,cy:100,r:15}]],G["TP.MARSHALL"]=[G["TP.AIR CONTROL"],N||R?{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"M"}:[{type:"text",stroke:!1,textanchor:"middle",x:100,y:155,fontsize:45,text:"M"},{type:"circle",cx:100,cy:100,r:15}]],G["TP.UNMANNED AERIAL SYSTEM"]=[G["TP.AIR CONTROL"],{type:"path",stroke:!1,d:"m 70,85 30,15 30,-15 0,15 -30,15 -30,-15 z"}],G["TP.VTUA"]=[G["TP.AIR CONTROL"],{type:"path",stroke:!1,d:"m 70,95 30,15 30,-15 0,30 -30,-15 -30,15 z m 0,-25 30,15 30,-15 0,15 -30,15 -30,-15 z"}],G["TP.ORBIT"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"O"}],G["TP.ORBIT - FIGURE EIGHT"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"O"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:150,fontsize:40,text:"F8"}],G["TP.ORBIT - RACE TRACK"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"O"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:150,fontsize:40,text:"RT"}],G["TP.ORBIT - RANDOM, CLOSED"]=[G["TP.AIR CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"O"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:150,fontsize:40,text:"RC"}],G["TP.ACTION POINT"]={type:"path",fill:!1,d:"m 60,45 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z"},G["TP.ACTION CHECK POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"CKP"}],G["TP.CONTACT POINT"]={type:"path",fill:!1,d:"m 100,100 0,-35 -45,0 0,-75 90,0 0,75 -45,0"},G["TP.COORDINATION POINT"]=[{type:"path",fill:!1,d:"m 65,135 70,-70 m -70,0 70,70"},{type:"circle",fill:!1,cx:100,cy:100,r:50}],G["TP.DECISION POINT"]={type:"path",fill:!1,d:"M 99.9998,25.5886 117.061,76.5192 170.77,77.0054 127.604,108.968 143.738,160.2 100,129.024 56.2624,160.2 72.3967,108.968 29.2306,77.0059 82.9403,76.5192 Z"},G["TP.ACTION LINKUP POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"LU"}],G["TP.ACTION PASSAGE POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"PP"}],G["TP.ACTION RALLY POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"RLY"}],G["TP.ACTION RELEASE POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"RP"}],G["TP.ACTION START POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"SP"}],G["TP.ACTION AMNESTY POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"AMN"}],G["TP.WAYPOINT"]={type:"path",fill:!1,strokewidth:8,d:"m 65,135 70,-70 m -70,0 70,70"},G["TP.COMBATANT STATION"]=[G["TP.WAYPOINT"],{type:"text",stroke:!1,textanchor:"end",x:75,y:115,fontsize:40,text:"CBT"}],G["TP.PICKET STATION"]=[G["TP.WAYPOINT"],{type:"text",stroke:!1,textanchor:"end",x:75,y:115,fontsize:40,text:"PKT"}],G["TP.ASW SHIP STATION"]=[G["TP.WAYPOINT"],{type:"text",stroke:!1,textanchor:"end",x:75,y:115,fontsize:40,text:"ASW"}],G["TP.REPLENISHMENT AT SEA (RAS) STATION"]=[G["TP.WAYPOINT"],{type:"text",stroke:!1,textanchor:"end",x:75,y:115,fontsize:40,text:"RAS"}],G["TP.RESCUE STATION"]=[G["TP.WAYPOINT"],{type:"text",stroke:!1,textanchor:"end",x:75,y:115,fontsize:40,text:"RSC"}],G["TP.SUBMARINE STATION"]=[G["TP.WAYPOINT"],{type:"text",stroke:!1,textanchor:"end",x:75,y:115,fontsize:40,text:"SUB"}],G["TP.ASW SUBMARINE STATION"]=[G["TP.WAYPOINT"],{type:"text",stroke:!1,textanchor:"end",x:75,y:115,fontsize:40,text:"ASW/SUB"}],G["TP.SEA SURFACE CONTROL"]={type:"path",fill:!1,d:"m 30,60 140,0 m -140,80 140,0"},G["TP.SEA SURFACE CONTROL STATION"]=[G["TP.SEA SURFACE CONTROL"],{type:"circle",cx:100,cy:100,r:15}],G["TP.(USV) CONTROL STATION"]=[G["TP.SEA SURFACE CONTROL"],{type:"path",stroke:!1,d:"m 100,115 45,-20 0,-15 -45,20 -45,-20 0,15 z"}],G["TP.(USV)"]=[G["TP.SEA SURFACE CONTROL"],{type:"path",stroke:!1,d:"m 55,100 45,20 45,-20 0,15 -45,20 -45,-20 z"}],G["TP.(RMV) USV CONTROL STATION"]=[G["TP.(USV)"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:95,fontsize:40,text:"RMV"}],G["TP.USV - ASW CONTROL STATION"]=[G["TP.(USV)"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:95,fontsize:40,text:"ASW"}],G["TP.USV - SUW CONTROL STATION"]=[G["TP.(USV)"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:95,fontsize:40,text:"SUW"}],G["TP.USV - MIW CONTROL STATION"]=[G["TP.(USV)"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:95,fontsize:40,text:"MIW"}],G["TP.ASW CONTROL STATION"]=[G["TP.SEA SURFACE CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"ASW"}],G["TP.SUW CONTROL STATION"]=[G["TP.SEA SURFACE CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"SUW"}],G["TP.MIW CONTROL STATION"]=[G["TP.SEA SURFACE CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"MIW"}],G["TP.PICKET CONTROL STATION"]=[G["TP.SEA SURFACE CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"PK"}],G["TP.RENDEZVOUS CONTROL POINT"]=[G["TP.SEA SURFACE CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"RZ"}],G["TP.RESCUE CONTROL POINT"]=[G["TP.SEA SURFACE CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"RS"}],G["TP.REPLENISHMENT CONTROL POINT"]=[G["TP.SEA SURFACE CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"RP"}],G["TP.NONCOMBATANT CONTROL STATION"]=[G["TP.SEA SURFACE CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,text:"NC"}],G["TP.SUB SURFACE CONTROL"]=[{type:"path",fill:!1,d:"m 30,140 140,0"},{type:"path",fill:!1,strokedasharray:"12,4",d:"m 30,60 140,0"}],G["TP.SUB SURFACE CONTROL STATION"]=[G["TP.SUB SURFACE CONTROL"],{type:"circle",cx:100,cy:100,r:15}],G["TP.(UUV) CONTROL STATION"]=[G["TP.SUB SURFACE CONTROL"],{type:"path",stroke:!1,d:"m 100,115 45,-20 0,-15 -45,20 -45,-20 0,15 z"}],G["TP.(UUV)"]=[G["TP.SUB SURFACE CONTROL"],{type:"path",stroke:!1,d:"m 55,100 45,20 45,-20 0,15 -45,20 -45,-20 z"}],G["TP.UUV - ASW CONTROL STATION"]=[G["TP.(UUV)"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:95,fontsize:40,text:"ASW"}],G["TP.UUV - SUW CONTROL STATION"]=[G["TP.(UUV)"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:95,fontsize:40,text:"SUW"}],G["TP.UUV - MIW CONTROL STATION"]=[G["TP.(UUV)"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:95,fontsize:40,text:"MIW"}],G["TP.SUBMARINE CONTROL STATION"]=[G["TP.SUB SURFACE CONTROL"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:130,fontsize:35,text:"SS"},{type:"path",d:"m 75,95 0,-20 50,0 0,20 z m 25,-30 0,40"}],G["TP.ASW SUBMARINE CONTROL STATION"]=[G["TP.SUB SURFACE CONTROL"],{type:"path",d:"m 68.75,105 -12.5,12.5 12.5,12.5 62.5,0 12.5,-12.5 -12.5,-12.5 z M 75,95 l 0,-20 50,0 0,20 z m 25,-30 0,40"}],G["TP.AIR CONTROL POINT (ACP)"]=[{type:"circle",fill:!1,cx:100,cy:100,r:50},{type:"text",stroke:!1,textanchor:"middle",x:100,y:90,fontsize:30,text:"ACP"}],G["TP.COMMUNICATIONS CHECKPOINT"]=[{type:"circle",fill:!1,cx:100,cy:100,r:50},{type:"text",stroke:!1,textanchor:"middle",x:100,y:90,fontsize:30,text:"CCP"}],G["TP.PULL-UP POINT"]=[{type:"circle",fill:!1,cx:100,cy:100,r:50},{type:"text",stroke:!1,textanchor:"start",x:160,y:115,fontsize:40,text:"PUP"},{type:"path",fill:!1,d:"m 65,80 0,40 70,-40 0,40 z"}],G["TP.DOWNED AIRCREW PICKUP POINT"]=[G["TP.ACTION POINT"],{type:"circle",cx:100,cy:-35,r:12},{type:"path",fill:!1,d:"m 75,35 50,0 m -25,-45 0,45 m -30,-75 30,30 30,-30"}],G["TP.DUMMY MINEFIELD"]=[{type:"path",fill:!1,d:"m 75,100 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z m 70,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -35,0 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z m -70,-40 0,80 120,0 0,-80 z"},{type:"path",fill:!1,strokedasharray:"15,10",d:"M 160,60 100,-5 M 40,60 100,-5"}],G["TP.TARGET REFERENCE"]={type:"path",fill:!1,d:"m 50,100 100,0 m -50,-50 0,100"},G["TP.OBSERVATION POST/OUTPOST"]={type:"path",fill:!1,d:"m 100,45 47.6,82.5 -95.2,0 z"},G["TP.COMBAT OUTPOST"]={type:"path",fill:!1,d:"m 140,140 0,-12.5 m -16,12.5 0,-12.5 m -16,12.5 0,-12.5 m -48.0001,12.5 3e-4,-12.5 m 15.9993,12.5 4e-4,-12.501 m 16,12.501 3e-4,-12.5 m -46.43,-12.493 10.8256,6.25 m -2.8256,-20.107 10.8256,6.251 m -2.8257,-20.1071 10.8257,6.2506 m 13.1743,-47.8198 10.8257,6.2506 m -18.8253,7.6056 10.8256,6.2506 m -18.826,7.606 10.8257,6.2506 M 114.43,45.725 l -10.826,6.25 m 18.826,7.6064 -10.826,6.25 m 18.826,7.6064 -10.826,6.25 m 34.826,35.3192 -10.826,6.25 m 2.826,-20.106 -10.826,6.25 m 2.826,-20.1068 -10.826,6.25 M 99.9998,45 l 47.6312,82.5 -95.2623,0 z"},G["TP.OBSERVATION POST/RECONNAISSANCE"]={type:"path",fill:!1,d:"M 52.3687,127.5 123.816,86.2499 M 99.9998,45 l 47.6312,82.5 -95.2623,0 z"},G["TP.FORWARD OBSERVER POSITION"]=[G["TP.OBSERVATION POST/RECONNAISSANCE"],{type:"path",d:"m 115,100 c 0,8.284 -6.716,15 -15,15 -8.2843,0 -15,-6.716 -15,-15 0,-8.2843 6.7157,-15 15,-15 8.284,0 15,6.7157 15,15 z"}],G["TP.SENSOR OUTPOST"]={type:"path",fill:!1,d:"m 61.1738,112.25 23.6601,0 m 30.3321,0 23.66,0 M 80,105 l 10,15 20,0 10,-15 z m 19.9998,-60 47.6312,82.5 -95.2623,0 z"},G["TP.CBRN OBSERVATION POST"]=[{type:"path",fill:!1,d:"m 99.9998,45 47.6312,82.5 -95.2623,0 z M 88,119 c 2.1824,-13.288 7.7157,-24.22 22,-29 m 1.829,29 C 109.664,105.712 104.173,94.78 90,90 M 52.3687,127.5 123.816,86.2499"},{type:"path",d:"m 91,92 c 0,2.7614 -2.2386,5 -5,5 -2.7614,0 -5,-2.2386 -5,-5 0,-2.7614 2.2386,-5 5,-5 2.7614,0 5,2.2386 5,5 z m 28.011,0 c 0,2.7678 -2.243,5.0117 -5.011,5.012 -2.768,-3e-4 -5.011,-2.2442 -5.011,-5.012 0,-2.7676 2.243,-5.0112 5.011,-5.0115 2.768,3e-4 5.011,2.2439 5.011,5.0115 z"}],G["TP.POINT OF DEPARTURE"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"PD"}],G["TP.FIXED AND PREFABRICATED"]={type:"path",d:"m 60,100 40,-65 40,65 z"},G["TP.TETRAHEDRONS"]={type:"path",fill:!1,d:"m 60,100 40,-65 40,65"},G["TP.TETRAHEDRONS MOVABLE"]={type:"path",fill:!1,d:"m 60,100 40,-65 40,65 z"},G["TP.BOOBY TRAP"]={type:"path",fill:!1,d:"M 77.2413,87.9311 100,50 122.781,87.9687 M 130,100 c 0,10.24 -13.431,18.541 -30,18.541 -16.5685,0 -30,-8.301 -30,-18.541 0,-10.2399 13.4315,-18.541 30,-18.541 16.569,0 30,8.3011 30,18.541 z"},G["TP.UNSPECIFIED MINE"]={type:"path",fill:!1,d:"m 129,100 c 0,16.016 -12.984,29 -29,29 -16.0163,0 -29,-12.984 -29,-29 0,-16.0163 12.9837,-29 29,-29 16.016,0 29,12.9837 29,29 z"},G["TP.ANTITANK MINE (AT)"]={type:"path",d:"m 129,100 c 0,16.016 -12.984,29 -29,29 -16.0163,0 -29,-12.984 -29,-29 0,-16.0163 12.9837,-29 29,-29 16.016,0 29,12.9837 29,29 z"},G["TP.(AT) ANTIHANDLING DEVICE"]=[G["TP.ANTITANK MINE (AT)"],{type:"path",fill:!1,d:"m 100,130 0,65 15,-15"}],G["TP.(AT) DIRECTIONAL"]=[G["TP.ANTITANK MINE (AT)"],{type:"path",fill:!1,strokedasharray:"5,5",d:"m 100,70 0,-60"},{type:"path",fill:!1,d:"m 90,20 10,-10 10,10"}],G["TP.ANTIPERSONNEL (AP) MINES"]=[G["TP.ANTITANK MINE (AT)"],{type:"path",fill:!1,d:"m 50,50 29.5,29.5 m 41,0 L 150,50"}],G["TP.WIDE AREA MINES"]=[G["TP.ANTITANK MINE (AT)"],{type:"path",fill:!1,d:"m 50,110 25,40 12,-24 M 113,126 125,150 150,110"}],G["TP.PLANNED MINEFIELD"]=[{type:"path",fill:!1,strokedasharray:"15,15",d:"m 40,65 0,70 120,0 0,-70 z"},{type:"path",fill:!1,d:"m 75,100 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z m 70,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -35,0 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z"}],G["TP.MINEFIELDS STATIC"]={type:"path",fill:!1,d:"m 40,65 0,70 120,0 0,-70 z m 70,35 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z m 35,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -70,0 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z"},E.notpresent&&(G["TP.MINEFIELDS STATIC"]=G["TP.PLANNED MINEFIELD"]),G["TP.ANTITANK (AT) MINEFIELD"]=[{type:"path",fill:!1,d:"m 40,65 0,70 120,0 0,-70 z"},{type:"path",d:"m 75,100 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z m 70,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -35,0 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z"}],G["TP.SCATTERABLE MINES"]=[G["TP.MINEFIELDS STATIC"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:60,fontsize:35,text:"S"}],G["TP.ANTIPERSONNEL (AP) MINEFIELD"]=[{type:"text",stroke:!1,textanchor:"middle",x:100,y:60,fontsize:35,text:"+S"},{type:"path",fill:!1,d:"m 40,65 0,70 120,0 0,-70 z"},{type:"path",d:"M 72.0703,92.9297 80,82.3622 m -30,0 7.9297,10.5675 m 49.1403,0 7.93,-10.5675 m -30,0 7.9297,10.5675 m 49.1403,0 7.93,-10.5675 m -30,0 7.93,10.5675 M 110,100 c 0,5.523 -4.477,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z m 35,0 c 0,5.523 -4.477,10 -10,10 -5.523,0 -10,-4.477 -10,-10 0,-5.5228 4.477,-10 10,-10 5.523,0 10,4.4772 10,10 z m -70,0 c 0,5.523 -4.4772,10 -10,10 -5.5228,0 -10,-4.477 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.5228,0 10,4.4772 10,10 z"}],G["TP.SCATTERABLE MINEFIELD WITH SELF-DESTRUCT"]=[G["TP.ANTITANK (AT) MINEFIELD"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:60,fontsize:35,text:"S"}],G["TP.VOLCANO MINEFIELD"]=[G["TP.ANTITANK (AT) MINEFIELD"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:60,fontsize:35,text:"V"}],G["TP.TOWER LOW"]=[{type:"circle",stroke:!1,cx:100,cy:100,r:7},{type:"path",fill:!1,strokewidth:8,d:"m 75,105 25,-65 25,65"}],G["TP.TOWER HIGH"]=[{type:"circle",stroke:!1,cx:100,cy:100,r:7},{type:"path",fill:!1,strokewidth:8,d:"m 100,40 c 2.358,31.6754 7.162,59.2531 25,64.999 M 100,40 c -2.358,31.6754 -7.1624,59.2531 -25,65"}],G["TP.ENGINEER REGULATING POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"ERP"}],G["TP.EARTHWORK/FORTIFICATION"]={type:"path",d:"m 65,65 0,70 70,0 0,-70 -70,0z"},G["TP.FORT"]={type:"path",fill:!1,d:"m 135,65 15,-15 m -15,85 15,15 M 65,135 50,150 m 15,-85 0,70 70,0 0,-70 -70,0 -15,-15"},G["TP.SURFACE SHELTER"]={type:"path",d:"m 135,135 15,0 m -100,0 15,0 m 0,-70 0,70 70,0 0,-70 -70,0"},G["TP.UNDERGROUND SHELTER"]={type:"path",d:"m 135,65 15,0 m -100,0 15,0 m 0,70 0,-70 70,0 0,70 -70,0"},G["TP.NUCLEAR DETONATIONS GROUND ZERO"]=[{type:"path",fill:!C&&"rgb(255,255,0)",d:"m 85,25 0,75 30,0 0,-75 m -50,0 c 0,-50 70,-50 70,0 z"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:75,fontsize:35,text:"N"}],G["TP.NUCLEAR DETONATIONS GROUND ZERO PLANNED"]=[{type:"path",strokedasharray:"5,5",fill:!C&&"rgb(255,255,0)",d:"m 85,25 0,75 30,0 0,-75 m -50,0 c 0,-50 70,-50 70,0 z"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:75,fontsize:35,text:"N"}],G["TP.NUCLEAR FALLOUT PRODUCING"]=[{type:"path",fill:!1,d:"m 120,85 -15,15 m -25,0 40,-35 M 80,80 120,40 M 80,55 115,25 M 80,40 95,25 m -40,0 c 0,-60 90,-60 90,0 z m 25,0 0,75 40,0 0,-75"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:75,fontsize:35,text:"N"}],G["TP.RELEASE EVENTS BIOLOGICAL"]=[{type:"path",fill:!C&&"rgb(255,255,0)",d:"m 85,-15 0,60 -25,55 80,0 -25,-55 0,-60 z"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:85,fontsize:35,text:"B"},{type:"text",stroke:!1,textanchor:"end",x:50,y:60,fontsize:35,text:"BIO"}],G["TP.RELEASE EVENTS CHEMICAL"]=[{type:"path",fill:!C&&"rgb(255,255,0)",d:"m 85,-15 0,59.0625 C 75.7313,49.4137 70.0154,59.2975 70,70 c 0,16.5685 13.4315,30 30,30 16.569,0 30,-13.4315 30,-30 -0.01,-10.7067 -5.728,-20.5959 -15,-25.9492 L 115,-15 Z"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:80,fontsize:35,text:"C"},{type:"text",stroke:!1,textanchor:"end",x:50,y:60,fontsize:35,text:"CML"}],G["TP.DECON SITE/POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"DCN"}],G["TP.ALTERNATE DECON SITE/POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"DCN"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,text:"ALT"}],G["TP.DECON SITE/POINT (TROOPS)"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"DCN"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,text:"T"}],G["TP.DECON SITE/POINT (EQUIPMENT)"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"DCN"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,text:"E"}],G["TP.DECON SITE/POINT (EQUIPMENT AND TROOPS)"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"DCN"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,text:"E/T"}],G["TP.DECON SITE/POINT (OPERATIONAL DECONTAMINATION)"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"DCN"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,text:"O"}],G["TP.DECON SITE/POINT (THOROUGH DECONTAMINATION)"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"DCN"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,text:"TH"}],G["TP.DECON POINT (MAIN) EQUIPMENT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"DCN"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,text:"(M)E"}],G["TP.DECON POINT (FORWARD) TROOPS"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"DCN"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,text:"(F)T"}],G["TP.POINT/SINGLE TARGET"]={type:"path",fill:!1,d:"m 50,100 100,0 m -50,-50 0,100"},G["TP.NUCLEAR TARGET"]={type:"path",fill:!1,d:"m 90,100 -40,0 m 50,10 0,40 m 10,-50 40,0 m -50,-10 0,-40 m 2.5,50 c 0,1.381 -1.119,2.5 -2.5,2.5 -1.3807,0 -2.5,-1.119 -2.5,-2.5 0,-1.3807 1.1193,-2.5 2.5,-2.5 1.381,0 2.5,1.1193 2.5,2.5 z"},G["TP.FIRE SUPPORT STATION"]={type:"path",fill:!1,d:"M 50,50 150,150 M 50,150 150,50"},G["TP.SURVEY CONTROL POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"SCP"}],G["TP.FIRING POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"FP"}],G["TP.RELOAD POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"RLP"}],G["TP.HIDE POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"HP"}],G["TP.LAUNCH POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"LP"}],G["TP.AMBULANCE EXCHANGE POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"AXP"}],G["TP.CANNIBALIZATION POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"CAN"}],G["TP.CASUALTY COLLECTION POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"CCP"}],G["TP.CIVILIAN COLLECTION POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"CIV"}],G["TP.DETAINEE COLLECTION POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"DET"}],G["TP.EPW COLLECTION POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"EPW"}],G["TP.LOGISTICS RELEASE POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"LRP"}],G["TP.MAINTENANCE COLLECTION POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"MCP"}],G["TP.REARM, REFUEL AND RESUPPLY POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"R3P"}],G["TP.REFUEL ON THE MOVE POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"ROM"}],G["TP.TRAFFIC CONTROL POST"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"TCP"}],G["TP.TRAILER TRANSFER POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"TTP"}],G["TP.UNIT MAINTENANCE COLLECTION POINT"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:25,text:"UMCP"}],G["TP.SUPPLY POINT"]={type:"path",fill:!1,d:"m 60,30 80,0 m -80,15 80,0 m -40,55 -40,-55 0,-105 80,0 0,105 z"},G["TP.SP CLASS I"]=[G["TP.SUPPLY POINT"],{type:"path",fill:!1,d:"m 115,-50 c -45,5 -45,65 0,70 -20,-25 -20,-50 0,-70 z"}],G["TP.SP CLASS II"]=[G["TP.SUPPLY POINT"],{type:"path",stroke:!1,d:"m 101.143,3.91602 q 3.662,-0.26368 4.746,-1.08399 1.084,-0.84961 1.084,-4.33594 l 0,-26.68949 q 0,-3.3105 -1.084,-4.248 -1.084,-0.9668 -4.746,-1.1426 l 0,-1.1133 17.753,0 0,1.1133 q -3.662,0.1758 -4.746,1.1426 -1.084,0.9375 -1.084,4.248 l 0,26.68949 q 0,3.48633 1.084,4.33594 1.084,0.82031 4.746,1.08399 l 0,1.08398 -17.753,0 0,-1.08398 z m 8.877,-38.61332 0,0 z M 81.1035,3.91602 q 3.6621,-0.26368 4.7461,-1.08399 1.084,-0.84961 1.084,-4.33594 l 0,-26.68949 q 0,-3.3105 -1.084,-4.248 -1.084,-0.9668 -4.7461,-1.1426 l 0,-1.1133 17.7539,0 0,1.1133 q -3.6621,0.1758 -4.7461,1.1426 -1.084,0.9375 -1.084,4.248 l 0,26.68949 q 0,3.48633 1.084,4.33594 1.084,0.82031 4.7461,1.08399 l 0,1.08398 -17.7539,0 0,-1.08398 z m 8.877,-38.61332 0,0 z"}],G["TP.SP CLASS III"]=[G["TP.SUPPLY POINT"],{type:"path",fill:!1,d:"m 100,20 0,-30 -20,-40 40,0 -20,40"}],G["TP.SP CLASS IV"]=[G["TP.SUPPLY POINT"],{type:"path",fill:!1,d:"m 100,-40 0,20 m -25,10 0,-30 50,0 0,30"}],G["TP.SP CLASS V"]=[G["TP.SUPPLY POINT"],{type:"path",fill:!1,d:"m 80,15 0,-50 c 0,-20 40,-20 40,0 l 0,50 m -50,0 60,0"}],G["TP.SP CLASS VI"]=[G["TP.SUPPLY POINT"],{type:"path",fill:!1,d:"m 75,-20 50,0 m -25,15 15,25 m -15,-50 0,25 -20,25 m 30,-60 c 0,5.5228 -4.477,10 -10,10 -5.5228,0 -10,-4.4772 -10,-10 0,-5.5228 4.4772,-10 10,-10 5.523,0 10,4.4772 10,10 z"}];G["TP.SP CLASS VII"]=[G["TP.SUPPLY POINT"],{type:"path",fill:!1,d:"m 85,-25 c 10,-10 20,-10 30,0"},{type:"path",d:"m 129.6,-20 c 0,5.3019 -4.298,9.5999 -9.6,9.5998 -5.302,10e-5 -9.6,-4.2979 -9.6,-9.5998 0,-5.3019 4.298,-9.5999 9.6,-9.5998 5.302,-1e-4 9.6,4.2979 9.6,9.5998 z m -40.4886,0 c 0,5.0321 -4.0793,9.1114 -9.1114,9.1114 -5.0321,0 -9.1114,-4.0793 -9.1114,-9.1114 0,-5.0321 4.0793,-9.1114 9.1114,-9.1114 5.0321,0 9.1114,4.0793 9.1114,9.1114 z"}],G["TP.SP CLASS VIII"]=[G["TP.SUPPLY POINT"],{type:"path",fill:!1,d:"m 60,-15 80,0 m -40,-45 0,90"}],G["TP.SP CLASS IX"]=[G["TP.SUPPLY POINT"],{type:"path",fill:!1,d:"m 121.213,-36.2132 -7.08,7.0802 M 85.8669,-0.866982 78.7868,6.2132 m 0,-42.4264 7.0801,7.0802 m 28.2661,28.266018 7.08,7.080182 M 100,-45 l 0,10 m 0,40 0,10 m -30,-30 10,0 m 40,0 10,0 m -10,0 c 0,11.04569 -8.954,20 -20,20 -11.0457,0 -20,-8.95431 -20,-20 0,-11.0457 8.9543,-20 20,-20 11.046,0 20,8.9543 20,20 z"}],G["TP.SP CLASS X"]=[G["TP.SUPPLY POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-10,fontsize:40,text:"CA"}],G["TP.AMMUNITION SUPPLY POINT (ASP)"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"ASP"}],G["TP.AMMUNITION TRANSFER POINT (ATP)"]=[G["TP.ACTION POINT"],{type:"text",stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,text:"ATP"}],G["TP.DITCHED AIRCRAFT"]={type:"path",d:"m 145,120 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 10,10 25,-30 -10,-10 10,-10 20,20 -10,35 -15,-15 -15,15 z"},G["TP.PERSON IN WATER"]={type:"path",d:"m 105,110 10,-10 0,-15 5,0 0,20 -10,10 z m -10,0 -10,-10 0,-15 -5,0 0,20 10,10 z m 5,-5 0,-10 -5,0 -5,-5 0,-10 5,-5 10,0 5,5 0,10 -5,5 -5,0 m -15,25 15,-15 m 45,15 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 45,15 -15,-15"},G["TP.DISTRESSED VESSEL"]={type:"path",d:"m 120,65 -20,20 20,-20 m -5,55 -35,-35 0,-20 45,45 z m -30,0 -15,-15 m -15,15 15,-15 m 45,15 15,-15 m 15,15 -15,-15 m -45,15 15,-15"},G["TP.SEA MINELIKE"]={type:"path",d:"M 75,75 55,55 m 45,-15 0,25 m 25,10 20,-20 m -80,60 0,-30 20,-20 30,0 20,20 0,30 -20,20 -30,0 z"},G["TP.ICEBERG"]={type:"path",d:"m 75,100 25,-30 25,30 -5,15 -5,-5 -15,20 -15,-20 -5,5 z m -15,0 80,0"},G["TP.OIL RIG/PLATFORM"]=[{type:"path",d:"m 55,100 0,-50 m 75,50 0,40 m 20,-40 0,40 m -115,0 0,-40 130,0",fill:!1},{type:"path",d:"m 55,100 0,-15 25,0 0,15 z"}],G["TP.BOTTOM RETURN"]={type:"path",d:"m 50,100 15,-35 15,30 20,-55 20,55 15,-35 15,40 z"},G["TP.INSTALLATION/MANMADE"]={type:"path",fill:!1,d:"m 50,100 15,-35 15,30 20,-55 20,55 15,-35 15,40 z"},G["TP.WRECK, NON DANGEROUS"]={type:"path",fill:!1,d:"m 135,85 0,30 m -85,-15 100,0 m -85,-15 0,30 m 35,-40 0,50"},G["TP.WRECK, DANGEROUS"]=[G["TP.WRECK, NON DANGEROUS"],{type:"path",strokedasharray:"5,5",fill:!1,d:"m 156.547,100 c 0,16.382 -25.162,29.662 -56.202,29.662 -31.0395,0 -56.2019,-13.28 -56.2017,-29.662 0,-16.3818 25.1624,-29.6618 56.2017,-29.6618 31.039,-1e-4 56.202,13.28 56.202,29.6618 z"}],G["TP.MARINE LIFE"]={type:"path",stroke:!1,d:"m 132,75 0,50 83,-37.5 0,25 L 132,75 m -32,25 25.5,-25 0,50 z"},G["TP.SEA ANOMALY"]={type:"path",fill:!1,d:"M 150,80 130,35 100,100 70,35 50,80 m 0,20 20,-45 30,65 30,-65 20,45"},G["TP.FIX ACOUSTIC"]={type:"path",fill:!1,d:"M 50,150 150,50 M 50,50 150,150 m -50,-100 0,100"},G["TP.FIX ELECTRO-MAGNETIC"]={type:"path",fill:!1,d:"m 50,90 15,20 5,-20 15,20 5,-20 20,20 5,-20 15,20 5,-20 15,20 M 50,150 150,50 M 50,50 150,150 m -50,-100 0,100"},G["TP.FIX ELECTRO-OPTICAL"]={type:"path",fill:!1,d:"m 150,100 c 0,6.904 -22.386,12.5 -50,12.5 -27.6142,0 -50,-5.596 -50,-12.5 0,-6.9036 22.3858,-12.5 50,-12.5 27.614,0 50,5.5964 50,12.5 z M 50,150 150,50 M 50,50 150,150 m -50,-100 0,100"},G["TP.FIRE"]={type:"text",stroke:!1,fill:t.iconColor[S],textanchor:"middle",x:100,y:115,fontsize:35,text:"FIRE"},G["TP.INDIRECT FIRE"]={type:"path",stroke:t.iconColor[S],fill:!1,d:"m 100,60 0,80 m -40,-40 80,0"},G["TP.AMBUSH"]={type:"path",stroke:t.iconColor[S],fill:!1,d:"m 77.5,106 20,0 m -20,-12 20,0 M 75,82 95,82 m -20,36 20,0 m -25,12 20,0 M 70,70 90,70 M 80,60 c 25,15 25,65 0,80 m 45,-50 10,10 -10,10 m -25,-10 35,0"},G["TP.ROAD BLOCK"]={type:"path",stroke:t.iconColor[S],fill:!1,d:"m 73,133 60,-60 m -66,54 60,-60 m -54,0 60,60 m -66,-54 60,60"},G["TP.ROAD BLOCK (UNDER CONSTRUCTION)"]=[{type:"path",stroke:t.iconColor[S],fill:!1,strokedasharray:"5,5",d:"m 73,67 60,60 m -66,-54 60,60"},{type:"path",stroke:t.iconColor[S],fill:!1,d:"M 73,133 133,73 M 67,127 127,67"}];for(var O in G)G.hasOwnProperty(O)&&(e.call(this,G[O]),I[O]=G[O])}},function(I,E){I.exports=function(I){I["G-T-D-----"]={},I["G-T-I-----"]={},I["G-T-N-----"]={},I["G-G-GPUUD-"]={},I["G-G-GPUUB-"]={},I["G-G-GPUUL-"]={},I["G-G-GPUUS-"]={},I["G-G-GPUY--"]={},I["G-G-GPUYP-"]={},I["G-G-GPUYD-"]={},I["G-G-GPUYL-"]={},I["G-G-GPUYC-"]={},I["G-G-GPUYS-"]={},I["G-G-GPUYB-"]={},I["G-G-GPUYA-"]={},I["G-G-GPUYV-"]={},I["G-G-GPUYT-"]={},I["G-G-GPUYR-"]={},I["G-G-GPUYK-"]={},I["G-G-GPUYX-"]={},I["G-G-GPUS--"]={},I["G-G-GPUSA-"]={},I["G-G-GPUSD-"]={},I["G-G-GPUSC-"]={},I["G-G-GPR---"]={},I["G-G-GPRN--"]={},I["G-G-GPRS--"]={},I["G-G-GPRD--"]={},I["G-G-GPRP--"]={},I["G-G-GPRM--"]={},I["G-G-GPRW--"]={},I["G-G-GPRC--"]={},I["G-G-GPRI--"]={uniqueDesignation:{stroke:!1,textanchor:"middle",x:100,y:30,fontsize:45,fontweight:"bold"}},I["G-G-GPWA--"]={},I["G-G-GPWD--"]={},I["G-G-GPWE--"]={},I["G-G-GPWG--"]={},I["G-G-GPWM--"]={},I["G-G-GPWI--"]={},I["G-G-GPWP--"]={},I["G-G-GPF---"]={},I["G-G-GPH---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,fontweight:"bold"}},I["G-G-GPHQ--"]={},I["G-G-GPHA--"]={},I["G-G-GPHY--"]={},I["G-G-GPHX--"]={},I["G-G-GPO---"]={},I["G-G-GPOZ--"]={},I["G-G-GPOD--"]={},I["G-G-GPOW--"]={},I["G-G-GPOP--"]={},I["G-G-GPOR--"]={},I["G-G-GPA---"]={},I["G-G-GPAP--"]={},I["G-G-GPAW--"]={},I["G-G-GPAK--"]={},I["G-G-GPAA--"]={},I["G-G-GPAH--"]={},I["G-G-GPAB--"]={},I["G-G-GPAC--"]={},I["G-G-GPAD--"]={},I["G-G-GPAE--"]={},I["G-G-GPAS--"]={},I["G-G-GPAT--"]={},I["G-G-GPAO--"]={},I["G-G-GPAR--"]={},I["G-G-GPAL--"]={},I["G-G-GPAF--"]={},I["G-G-GPAG--"]={},I["G-G-GPAI--"]={},I["G-G-GPAJ--"]={},I["G-G-GPAM--"]={},I["G-G-GPAN--"]={},I["G-G-GPP---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},additionalInformation1:{stroke:!1,textanchor:"middle",x:100,y:-20,fontsize:35,fontweight:"bold"},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-G-GPPK--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-G-GPPC--"]={uniqueDesignation:{stroke:!1,textanchor:"middle",x:100,y:40,fontsize:45,fontweight:"bold"}},I["G-G-GPPO--"]={},I["G-G-GPPD--"]={uniqueDesignation:{stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,fontweight:"bold"}},I["G-G-GPPL--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-G-GPPP--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-G-GPPR--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-G-GPPE--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-G-GPPS--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-G-GPPA--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-G-GPPW--"]={uniqueDesignation:{stroke:!1,textanchor:"start",x:140,y:125,fontsize:70}},I["G-G-GPC---"]={},I["G-G-GPCU--"]={},I["G-G-GPCUR-"]={},I["G-G-GPCUA-"]={},I["G-G-GPCUS-"]={},I["G-G-GPCUM-"]={},I["G-G-GPCA--"]={},I["G-G-GPCS--"]={},I["G-G-GPCM--"]={},I["G-G-GPCP--"]={},I["G-G-GPCR--"]={},I["G-G-GPCC--"]={},I["G-G-GPCE--"]={},I["G-G-GPCN--"]={},I["G-G-GPB---"]={},I["G-G-GPBU--"]={},I["G-G-GPBUA-"]={},I["G-G-GPBUS-"]={},I["G-G-GPBUM-"]={},I["G-G-GPBS--"]={},I["G-G-GPBSA-"]={},I["G-G-APP---"]={uniqueDesignation:{stroke:!1,textanchor:"middle",x:100,y:135,fontsize:45,fontweight:"bold"}},I["G-G-APC---"]={uniqueDesignation:{stroke:!1,textanchor:"middle",x:100,y:135,fontsize:45,fontweight:"bold"}},I["G-G-APU---"]={},I["G-G-APD---"]={},I["G-G-PN----"]={},I["G-G-DPT---"]={uniqueDesignation:{stroke:!1,textanchor:"start",x:115,y:85,fontsize:45,fontweight:"bold"}},I["G-G-DPO---"]={},I["G-G-DPOC--"]={},I["G-G-DPOR--"]={},I["G-G-DPOF--"]={},I["G-G-DPOS--"]={},I["G-G-DPON--"]={},I["G-G-OPP---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-M-OAOF--"]={},I["G-M-OAOM--"]={},I["G-M-OAOP--"]={},I["G-M-OB----"]={},I["G-M-OMU---"]={},I["G-M-OMT---"]={},I["G-M-OMD---"]={},I["G-M-OME---"]={},I["G-M-OMP---"]={},I["G-M-OMW---"]={},I["G-M-OFS---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:55,fontsize:40},hostile:[{stroke:!1,textanchor:"end",x:35,y:110,fontsize:30,fontweight:"bold"},{stroke:!1,textanchor:"start",x:165,y:110,fontsize:30,fontweight:"bold"}],dtg:{stroke:!1,textanchor:"middle",x:100,y:175,fontsize:40}},I["G-M-OHTL--"]={altitudeDepth:{stroke:!1,textanchor:"start",x:120,y:60,fontsize:40,fontweight:"bold"}},I["G-M-OHTH--"]={altitudeDepth:{stroke:!1,textanchor:"start",x:115,y:60,fontsize:40,fontweight:"bold"}},I["G-M-BCP---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-M-SE----"]={},I["G-M-SF----"]={},I["G-M-SS----"]={},I["G-M-SU----"]={},I["G-M-NZ----"]={additionalInformation:{stroke:!1,textanchor:"start",x:150,y:20,fontsize:35},dtg:{stroke:!1,textanchor:"end",x:50,y:20,fontsize:35},hostile:{stroke:!1,textanchor:"start",x:150,y:100,fontsize:35},location:{stroke:!1,textanchor:"middle",x:100,y:140,fontsize:35},quantity:{stroke:!1,textanchor:"middle",x:100,y:-25,fontsize:35},type:{stroke:!1,textanchor:"end",x:50,y:60,fontsize:35},uniqueDesignation:{stroke:!1,textanchor:"end",x:50,y:100,fontsize:35}},I["G-M-NF----"]={},I["G-M-NEB---"]={additionalInformation:{stroke:!1,textanchor:"start",x:150,y:20,fontsize:35},dtg:{stroke:!1,textanchor:"end",x:50,y:20,fontsize:35},hostile:{stroke:!1,textanchor:"start",x:150,y:100,fontsize:35},location:{stroke:!1,textanchor:"middle",x:100,y:140,fontsize:35},quantity:{stroke:!1,textanchor:"middle",x:100,y:-25,fontsize:35},uniqueDesignation:{stroke:!1,textanchor:"end",x:50,y:100,fontsize:35}},I["G-M-NEC---"]={additionalInformation:{stroke:!1,textanchor:"start",x:150,y:20,fontsize:35},dtg:{stroke:!1,textanchor:"end",x:50,y:20,fontsize:35},hostile:{stroke:!1,textanchor:"start",x:150,y:100,fontsize:35},location:{stroke:!1,textanchor:"middle",x:100,y:140,fontsize:35},quantity:{stroke:!1,textanchor:"middle",x:100,y:-25,fontsize:35},uniqueDesignation:{stroke:!1,textanchor:"end",x:50,y:100,fontsize:35}},I["G-M-NDP---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-M-NDA---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-M-NDT---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-M-NDE---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-M-NDB---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-M-NDO---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-M-NDD---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-F-PTS---"]={additionalInformation:{stroke:!1,textanchor:"start",x:120,y:145,fontsize:40},altitudeDepth:{stroke:!1,textanchor:"end",x:80,y:145,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:120,y:80,fontsize:40}},I["G-F-PTN---"]={uniqueDesignation:{stroke:!1,textanchor:"start",x:120,y:80,fontsize:40,fontweight:"bold"}},I["G-F-PCF---"]={uniqueDesignation:{stroke:!1,textanchor:"start",x:125,y:115,fontsize:40,fontweight:"bold"}},I["G-F-PCS---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-F-PCB---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-F-PCR---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-F-PCH---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-F-PCL---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PX----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PC----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PY----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PT----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PD----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PE----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PL----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PM----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PR----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PU----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PO----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PI----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PN----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PS----"]={},I["G-S-PSZ---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PSA---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PSB---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PSC---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PSD---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PSE---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PSF---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PSG---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PSH---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PSI---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PSJ---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PA----"]={},I["G-S-PAS---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-S-PAT---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-O-ED----"]={},I["G-O-EP----"]={},I["G-O-EV----"]={},I["G-O-HM----"]={},I["G-O-HI----"]={},I["G-O-HO----"]={},I["G-O-SB----"]={},I["G-O-SBM---"]={},I["G-O-SBN---"]={},I["G-O-SBW---"]={},I["G-O-SBX---"]={},I["G-O-SM----"]={},I["G-O-SS----"]={},I["G-O-FA----"]={},I["G-O-FE----"]={},I["G-O-FO----"]={}}},function(I,E){I.exports=function(I){I["G-T-GD----"]={},I["G-T-GI----"]={},I["G-T-GN----"]={},I["G-C-MGPFE-"]={},I["G-C-MGPFA-"]={},I["G-C-MGPFO-"]={},I["G-C-MGPI--"]={uniqueDesignation:{stroke:!1,textanchor:"middle",x:100,y:30,fontsize:45,fontweight:"bold"}},I["G-C-MAAP--"]={uniqueDesignation:{stroke:!1,textanchor:"middle",x:100,y:135,fontsize:45,fontweight:"bold"}},I["G-C-MAAC--"]={uniqueDesignation:{stroke:!1,textanchor:"middle",x:100,y:135,fontsize:45,fontweight:"bold"}},I["G-C-MAAU--"]={},I["G-C-MAAD--"]={},I["G-C-MDN---"]={},I["G-C-MMPT--"]={uniqueDesignation:{stroke:!1,textanchor:"start",x:115,y:85,fontsize:45,fontweight:"bold"}},I["G-C-MMPO--"]={},I["G-C-MMPOC-"]={},I["G-C-MMPOR-"]={},I["G-C-MMPOF-"]={},I["G-C-MMPOS-"]={},I["G-C-MMPON-"]={},I["G-C-MMPON-"]={},I["G-C-MMPON-"]={},I["G-C-MOPD--"]={},I["G-C-BOATD-"]={},I["G-C-BOAB--"]={},I["G-C-BOAMA-"]={},I["G-C-BOAMT-"]={},I["G-C-BOAMD-"]={},I["G-C-BOAMC-"]={},I["G-C-BOAMU-"]={},I["G-C-BOAMN-"]={},I["G-C-BOAIP-"]={},I["G-C-BOAIC-"]={},I["G-C-BOAIN-"]={},I["G-C-BOAIS-"]={dtg:{stroke:!1,textanchor:"middle",x:100,y:165,fontsize:30,fontweight:"bold"}},I["G-C-BOAIH-"]={dtg:{stroke:!1,textanchor:"middle",x:100,y:165,fontsize:30,fontweight:"bold"}},I["G-C-BOAID-"]={dtg:{stroke:!1,textanchor:"middle",x:100,y:165,fontsize:30,fontweight:"bold"}},I["G-C-BOAV--"]={dtg:{stroke:!1,textanchor:"middle",x:100,y:165,fontsize:30,fontweight:"bold"}},I["G-C-BYCG--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-BSE---"]={},I["G-C-BSF---"]={},I["G-C-BSH---"]={},I["G-C-BSU---"]={},I["G-C-BWN---"]={additionalInformation:{stroke:!1,textanchor:"start",x:150,y:20,fontsize:35},dtg:{stroke:!1,textanchor:"end",x:50,y:20,fontsize:35},hostile:{stroke:!1,textanchor:"start",x:150,y:100,fontsize:35},location:{stroke:!1,textanchor:"middle",x:100,y:140,fontsize:35},quantity:{stroke:!1,textanchor:"middle",x:100,y:-25,fontsize:35},type:{stroke:!1,textanchor:"end",x:50,y:60,fontsize:35},uniqueDesignation:{stroke:!1,textanchor:"end",x:50,y:100,fontsize:35}},I["G-C-BWE---"]={additionalInformation:{stroke:!1,textanchor:"start",x:150,y:20,fontsize:35},dtg:{stroke:!1,textanchor:"end",x:50,y:20,fontsize:35},hostile:{stroke:!1,textanchor:"start",x:150,y:100,fontsize:35},location:{stroke:!1,textanchor:"middle",x:100,y:140,fontsize:35},quantity:{stroke:!1,textanchor:"middle",x:100,y:-25,fontsize:35},type:{stroke:!1,textanchor:"end",x:50,y:60,fontsize:35},uniqueDesignation:{stroke:!1,textanchor:"end",x:50,y:100,fontsize:35}},I["G-C-BWI---"]={additionalInformation:{stroke:!1,textanchor:"start",x:150,y:20,fontsize:35},dtg:{stroke:!1,textanchor:"end",x:50,y:20,fontsize:35},hostile:{stroke:!1,textanchor:"start",x:150,y:100,fontsize:35},location:{stroke:!1,textanchor:"middle",x:100,y:140,fontsize:35},quantity:{stroke:!1,textanchor:"middle",x:100,y:-25,fontsize:35},type:{stroke:!1,textanchor:"end",x:50,y:60,fontsize:35},uniqueDesignation:{stroke:!1,textanchor:"end",x:50,y:100,fontsize:35}},I["G-C-BWF---"]={additionalInformation:{stroke:!1,textanchor:"start",x:150,y:20,fontsize:35},dtg:{stroke:!1,textanchor:"end",x:50,y:20,fontsize:35},hostile:{stroke:!1,textanchor:"start",x:150,y:100,fontsize:35},location:{stroke:!1,textanchor:"middle",x:100,y:140,fontsize:35},quantity:{stroke:!1,textanchor:"middle",x:100,y:-25,fontsize:35},type:{stroke:!1,textanchor:"end",x:50,y:60,fontsize:35},uniqueDesignation:{stroke:!1,textanchor:"end",x:50,y:100,fontsize:35}},I["G-C-BWP---"]={},I["G-C-BWDP--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-BWDA--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-BWDT--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-BWDE--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-BWDS--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-BWDO--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-BWDG--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-BWDEM-"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-BWDTF-"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-FSTP--"]={additionalInformation:{stroke:!1,textanchor:"start",x:120,y:145,fontsize:40},altitudeDepth:{stroke:!1,textanchor:"end",x:80,y:145,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:120,y:80,fontsize:40}},I["G-C-FSS---"]={uniqueDesignation:{stroke:!1,textanchor:"start",x:125,y:115,fontsize:40,fontweight:"bold"}},I["G-C-FAU---"]={uniqueDesignation:{stroke:!1,textanchor:"start",x:120,y:80,fontsize:40,fontweight:"bold"}},I["G-C-SPA---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPC---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPY---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPT---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPD---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPE---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPL---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPM---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPR---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPU---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPO---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPI---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPN---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPQT--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPQA--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPQB--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPQC--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPQD--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPQE--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPQF--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPQG--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPQH--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPQI--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPQJ--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:-30,fontsize:40},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPMA--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-SPMT--"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-OX----"]={},I["G-C-OXRN--"]={},I["G-C-OXRD--"]={},I["G-C-OXUD--"]={},I["G-C-OXUB--"]={},I["G-C-OXUL--"]={},I["G-C-OXUS--"]={},I["G-C-OXWA--"]={},I["G-C-OXWD--"]={},I["G-C-OXWE--"]={},I["G-C-OXWG--"]={},I["G-C-OXWM--"]={},I["G-C-OXWI--"]={},I["G-C-OXWP--"]={},I["G-C-OXY---"]={},I["G-C-OXYP--"]={},I["G-C-OXYD--"]={},I["G-C-OXYL--"]={},I["G-C-OXYC--"]={},I["G-C-OXYS--"]={},I["G-C-OXYB--"]={},I["G-C-OXYA--"]={},I["G-C-OXYV--"]={},I["G-C-OXYT--"]={},I["G-C-OXYR--"]={},I["G-C-OXYK--"]={},I["G-C-OXN---"]={},I["G-C-OXH---"]={},I["G-C-OXHQ--"]={},I["G-C-OXHA--"]={},I["G-C-OXHY--"]={},I["G-C-OXHX--"]={},I["G-C-OXR---"]={},I["G-C-OXRR--"]={},I["G-C-OXRD--"]={},I["G-C-OXRW--"]={},I["G-C-OXRP--"]={},I["G-C-OXRT--"]={},I["G-C-OXSTC-"]={dtg:{stroke:!1,textanchor:"start",x:140,y:92,fontsize:30,fontweight:"bold"},dtg1:{stroke:!1,textanchor:"start",x:140,y:128,fontsize:30,fontweight:"bold"}},I["G-C-OXSTCP"]={dtg:{stroke:!1,textanchor:"start",x:140,y:92,fontsize:30,fontweight:"bold"},dtg1:{stroke:!1,textanchor:"start",x:140,y:128,fontsize:30,fontweight:"bold"}},I["G-C-OXSTCA"]={dtg:{stroke:!1,textanchor:"start",x:140,y:92,fontsize:30,fontweight:"bold"},dtg1:{stroke:!1,textanchor:"start",x:140,y:128,fontsize:30,fontweight:"bold"}},I["G-C-OXSTR-"]={dtg:{stroke:!1,textanchor:"start",x:140,y:92,fontsize:30,fontweight:"bold"},dtg1:{stroke:!1,textanchor:"start",x:140,y:128,fontsize:30,fontweight:"bold"}},I["G-C-OXSTH-"]={dtg:{stroke:!1,textanchor:"start",x:140,y:92,fontsize:30,fontweight:"bold"},dtg1:{stroke:!1,textanchor:"start",x:140,y:128,fontsize:30,fontweight:"bold"}},I["G-C-OXSTS-"]={dtg:{stroke:!1,textanchor:"start",x:140,y:92,fontsize:30,fontweight:"bold"},dtg1:{stroke:!1,textanchor:"start",x:140,y:128,fontsize:30,fontweight:"bold"}},I["G-C-OXSTSA"]={dtg:{stroke:!1,textanchor:"start",x:140,y:92,fontsize:30,fontweight:"bold"},dtg1:{stroke:!1,textanchor:"start",x:140,y:128,fontsize:30,fontweight:"bold"}},I["G-C-OXS---"]={},I["G-C-OXSA--"]={},I["G-C-OXSD--"]={},I["G-C-OXSC--"]={},I["G-C-OXAC--"]={},I["G-C-OXAA--"]={},I["G-C-OXAT--"]={},I["G-C-OXAK--"]={},I["G-C-OXAF--"]={},I["G-C-OXAH--"]={},I["G-C-OXAO--"]={},I["G-C-OXAR--"]={},I["G-C-OXAP--"]={},I["G-C-OXAM--"]={},I["G-C-OXAS--"]={},I["G-C-OXAD--"]={},I["G-C-OG----"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-OGC---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},uniqueDesignation1:{stroke:!1,textanchor:"middle",x:100,y:10,fontsize:35,fontweight:"bold"},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-OGP---"]={uniqueDesignation:{stroke:!1,textanchor:"middle",x:100,y:40,fontsize:45,fontweight:"bold"}},I["G-C-OGT---"]={},I["G-C-OGD---"]={uniqueDesignation:{stroke:!1,textanchor:"middle",x:100,y:115,fontsize:45,fontweight:"bold"}},I["G-C-OGL---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-OGN---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-OGR---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-OGS---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-OGI---"]={additionalInformation:{stroke:!1,textanchor:"middle",x:100,y:-70,fontsize:40},hostile:{stroke:!1,textanchor:"start",x:150,y:45,fontsize:40},uniqueDesignation:{stroke:!1,textanchor:"start",x:150,y:0,fontsize:80},dtg:{stroke:!1,textanchor:"end",x:50,y:-30,fontsize:40},dtg1:{stroke:!1,textanchor:"end",x:50,y:10,fontsize:40}},I["G-C-OGW---"]={uniqueDesignation:{stroke:!1,textanchor:"start",x:140,y:125,fontsize:70}},I["G-O-VA----"]={},I["G-O-VR----"]={},I["G-O-VE----"]={},I["G-O-VB----"]={},I["G-O-VY----"]={},I["G-O-VD----"]={},I["G-O-VI----"]={},I["G-O-VM----"]={},I["G-O-VK----"]={},I["G-O-VS----"]={},I["G-O-VP----"]={},I["G-O-VU----"]={},I["G-O-VC----"]={},I["G-O-VH----"]={},I["G-O-VF----"]={},I["G-O-VO----"]={},I["G-O-VL----"]={},I["G-O-VX----"]={},I["G-O-VZ----"]={},I["G-O-LB----"]={},I["G-O-LG----"]={},I["G-O-LW----"]={},I["G-O-PR----"]={},I["G-O-PRB---"]={},I["G-O-PT----"]={},I["G-O-PC----"]={},I["G-O-PCU---"]={},I["G-O-PD----"]={},I["G-O-PM----"]={},I["G-O-PH----"]={},I["G-O-PHY---"]={},I["G-O-PHW---"]={},I["G-O-PHG---"]={},I["G-O-PHT---"]={},I["G-O-PG----"]={},I["G-O-PS----"]={},I["G-O-PF----"]={},I["G-O-PI----"]={},I["G-O-PE----"]={},I["G-O-PX----"]={},I["G-O-PJV---"]={},I["G-O-PJA---"]={},I["G-O-PJB---"]={};I["G-O-PK----"]={},I["G-O-PA----"]={},I["G-O-PO----"]={},I["G-O-IR----"]={},I["G-O-IS----"]={},I["G-O-IG----"]={},I["G-O-IV----"]={},I["G-O-IK----"]={},I["G-O-ID----"]={},I["G-O-IF----"]={}}},function(I,E,t){var R=t(0);I.exports=function(I,E){var t={},C={};for(var A in R._letterSIDCicons)R._letterSIDCicons.hasOwnProperty(A)&&R._letterSIDCicons[A].call(this,t,C,I,E);return{icons:t,bbox:C}}},function(I,E,t){t(0);I.exports=function(I,E,t,R){I["S-S-S-----"]=t["2525B.STN"],I["S-S-SP----"]=t["2525B.STN.PKT"],I["S-S-SA----"]=t["2525B.STN.ASWSHP"],I["S-S-NN----"]=t["2525B.NCBTT.STN"],I["S-S-NNR---"]=t["2525B.STN.RSC"],I["S-U-SS----"]=t["2525B.SUB.STN"],I["S-U-SSA---"]=t["2525B.ASWSUB"],I["G-O-SBWD--"]=t["TP.WRECK, DANGEROUS"],E["G-O-SBXD--"]={x1:35,x2:165,y1:70,y2:130}}},function(I,E,t){t(0);I.exports=function(I,E,t,R){I["S-A-------"]=[],I["S-A-M-----"]=[t["AR.I.MILITARY"]],I["S-A-MF----"]=[t["AR.I.FF.MILITARY FIXED WING"]],I["S-A-MFB---"]=[t["AR.I.BOMBER"]],I["S-A-MFF---"]=[t["AR.I.FIGHTER"]],I["S-A-MFFI--"]=[t["AR.I.FIGHTER INTERCEPTOR"]],I["S-A-MFT---"]=[t["AR.I.TRAINER"]],I["S-A-MFA---"]=[t["AR.I.ATTACK/STRIKE"]],I["S-A-MFL---"]=[t["AR.I.VSTOL"]],I["S-A-MFK---"]=[t["AR.I.TANKER"]],I["S-A-MFKB--"]=[t["AR.I.TANKER"],t["AIR.M1.BOOM-ONLY"]],I["S-A-MFKD--"]=[t["AR.I.TANKER"],t["AIR.M1.DROUGE-ONLY"]],I["S-A-MFC---"]=[t["AR.I.CARGO"]],I["S-A-MFCL--"]=[t["AR.I.CARGO"],t["AIR.M2.LIGHT"]],I["S-A-MFCM--"]=[t["AR.I.CARGO"],t["AIR.M2.MEDIUM"]],I["S-A-MFCH--"]=[t["AR.I.CARGO"],t["AIR.M2.HEAVY"]],I["S-A-MFJ---"]=[t["AR.I.JAMMER / ELECTRONIC COUNTER-MEASURES"]],I["S-A-MFO---"]=[t["AR.I.MEDICAL EVACUATION"]],I["S-A-MFR---"]=[t["AR.I.RECONNAISSANCE"]],I["S-A-MFRW--"]=[t["AR.I.AIRBORNE EARLY WARNING"]],I["S-A-MFRZ--"]=[t["AR.I.ELECTRONIC SUPPORT MEASURES"]],I["S-A-MFRX--"]=[(R?t["AR.I.2525 PHOTOGRAPHIC"]:t["AR.I.RECONNAISSANCE"],t["AIR.M2.PHOTOGRAPHIC"])],I["S-A-MFP---"]=[t["AR.I.PATROL"]],I["S-A-MFPN--"]=[t["AR.I.ANTISURFACE WARFARE"]],I["S-A-MFPM--"]=[t["AR.I.MINE COUNTERMEASURES"]],I["S-A-MFU---"]=[t["AR.I.UTILITY"]],I["S-A-MFUL--"]=[t["AR.I.UTILITY"],t["AIR.M2.LIGHT"]],I["S-A-MFUM--"]=[t["AR.I.UTILITY"],t["AIR.M2.MEDIUM"]],I["S-A-MFUH--"]=[t["AR.I.UTILITY"],t["AIR.M2.HEAVY"]],I["S-A-MFY---"]=[t["AR.I.COMMUNICATIONS"]],I["S-A-MFH---"]=[t["AR.I.PERSONNEL RECOVERY"]],I["S-A-MFD---"]=[t["AR.I.AIRBORNE COMMAND POST"]],I["S-A-MFQ---"]=[t["AR.I.UNMANNED AERIAL VEHICLE"]],I["S-A-MFQA--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.ATTACK"]],I["S-A-MFQB--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.BOMBER"]],I["S-A-MFQC--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.CARGO"]],I["S-A-MFQD--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.AIRBORNE COMMAND POST"]],I["S-A-MFQF--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.FIGHTER"]],I["S-A-MFQH--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.COMBAT SEARCH AND RESCUE"]],I["S-A-MFQJ--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES"]],I["S-A-MFQK--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.TANKER"]],I["S-A-MFQL--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.VSTOL"]],I["S-A-MFQM--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.SPECIAL OPERATIONS FORCES"]],I["S-A-MFQI--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.MINE COUNTERMEASURES"]],I["S-A-MFQN--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.ANTISURFACE WARFARE"]],I["S-A-MFQP--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.PATROL"]],I["S-A-MFQR--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.RECONNAISSANCE"]],I["S-A-MFQRW-"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.AIRBORNE EARLY WARNING"]],I["S-A-MFQRZ-"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.ELECTRONIC SURVEILLANCE MEASURES"]],I["S-A-MFQRX-"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.PHOTOGRAPHIC"]],I["S-A-MFQS--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.ANTISUBMARINE WARFARE"]],I["S-A-MFQT--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.TRAINER"]],I["S-A-MFQU--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.UTILITY"]],I["S-A-MFQY--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.COMMUNICATIONS"]],I["S-A-MFQO--"]=[t["AR.I.UNMANNED AERIAL VEHICLE"],t["AIR.M1.MEDEVAC"]],I["S-A-MFS---"]=[t["AR.I.ANTISUBMARINE WARFARE"]],I["S-A-MFM---"]=[t["AR.I.SPECIAL OPERATIONS FORCES"]],I["S-A-MH----"]=[t["AR.I.MILITARY ROTARY WING"]],I["S-A-MHA---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.ATTACK"]],I["S-A-MHS---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.ANTISUBMARINE WARFARE"]],I["S-A-MHU---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.UTILITY"]],I["S-A-MHUL--"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.UTILITY"],t["AIR.M2.LIGHT"]],I["S-A-MHUM--"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.UTILITY"],t["AIR.M2.MEDIUM"]],I["S-A-MHUH--"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.UTILITY"],t["AIR.M2.HEAVY"]],I["S-A-MHI---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.MINE COUNTERMEASURES"]],I["S-A-MHH---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.COMBAT SEARCH AND RESCUE"]],I["S-A-MHR---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.RECONNAISSANCE"]],I["S-A-MHQ---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.UNMANNED AERIAL VEHICLE"]],I["S-A-MHC---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.CARGO"]],I["S-A-MHCL--"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.CARGO"],t["AIR.M2.LIGHT"]],I["S-A-MHCM--"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.CARGO"],t["AIR.M2.MEDIUM"]],I["S-A-MHCH--"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.CARGO"],t["AIR.M2.HEAVY"]],I["S-A-MHT---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.TRAINER"]],I["S-A-MHO---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.MEDEVAC"]],I["S-A-MHM---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"]],I["S-A-MHD---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.AIRBORNE COMMAND POST"]],I["S-A-MHK---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.TANKER"]],I["S-A-MHJ---"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES"]],I["S-A-ML----"]=[t["AR.I.FF.MILITARY BALLOON"]],I["S-A-MV----"]=[t["AR.I.VIP"]],I["S-A-ME----"]=[t["AR.I.ESCORT"]],I["S-A-W-----"]=[t["AIR.MISSILE.ICON"]],I["S-A-WM----"]=[t["AIR.MISSILE.ICON"]],I["S-A-WMS---"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.M1.SURFACE"],t["AIR.MISSILE.M2.LAUNCHED"]],I["S-A-WMSS--"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.M1.SURFACE"],t["AIR.MISSILE.M2.SURFACE"]],I["S-A-WMSA--"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.M1.SURFACE"],t["AIR.MISSILE.M2.AIR"]],I["S-A-WMSU--"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.M1.SURFACE"],t["AIR.MISSILE.M2.SUBSURFACE"]],I["S-A-WMSB--"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.IC.ANTIBALLISTIC MISSILE"]],I["S-A-WMA---"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.M1.AIR"],t["AIR.MISSILE.M2.LAUNCHED"]],I["S-A-WMAS--"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.M1.AIR"],t["AIR.MISSILE.M2.SURFACE"]],I["S-A-WMAA--"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.M1.AIR"],t["AIR.MISSILE.M2.AIR"]],I["S-A-WMAP--"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.M1.AIR"],t["AIR.MISSILE.M2.SPACE"]],I["S-A-WMU---"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.M1.SUBSURFACE"],t["AIR.MISSILE.M2.SURFACE"]],I["S-A-WML---"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.M1.LAND"],t["AIR.MISSILE.M2.AIR"]],I["S-A-WMCM--"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.M1.CRUISE"],t["AIR.MISSILE.M2.MISSILE"]],I["S-A-WMB---"]=[t["AIR.MISSILE.ICON"],t["AIR.MISSILE.M1.BALLISTIC"],t["AIR.MISSILE.M2.MISSILE"]],I["S-A-WB----"]=[t["AIR.MISSILE.IC.BOMB"]],I["S-A-WD----"]=[t["AR.I.AIR DECOY"]],I["S-A-C-----"]=[t["AR.I.CIVILIAN"]],I["S-A-CF----"]=[t["AR.I.FF.CIVILIAN FIXED WING"]],I["S-A-CH----"]=[t["AR.I.FF.CIVILIAN ROTARY WING"]],I["S-A-CL----"]=[t["AR.I.FF.CIVILIAN BALLOON"]]}},function(I,E,t){var R=t(0);I.exports=function(I,E,t,C){I["E-I-A-----"]=[t["AC.IC.CRIMINAL.CIVIL DISTURBANCE"]],I["E-I-AC----"]=[t["ST.IC.GROUP"],t["AC.M1.RIOT"]],I["E-I-B-----"]=[t["AC.IC.CRIMINAL.ACTIVITY.INCIDENT"]],I["E-I-BA----"]=[t["ST.IC.BOMB"],t["AC.M1.THREAT"]],I["E-I-BC----"]=[t["ST.IC.EXPLOSION"],R._scale(.6,t["ST.IC.BOMB"])],I["E-I-BD----"]=[t["ST.IC.GROUP"],t["ST.M1.LOOT"]],I["E-I-BF----"]=[t["AC.IC.SHOOTING"]],I["E-I-C-----"]=[t["AC.IC.FIRE EVENT"]],I["E-I-CA----"]=[t["AC.IC.HOT SPOT"]],I["E-I-CB----"]=[t["AC.IC.NON-REsIdENTIAL FIRE"]],I["E-I-CC----"]=[t["AC.IC.FIRE ORIGIN"]],I["E-I-CD----"]=[t["AC.IC.REsIdENTIAL FIRE"]],I["E-I-CE----"]=[t["AC.IC.SCHOOL FIRE"]],I["E-I-CF----"]=[t["AC.IC.SMOKE"]],I["E-I-CG----"]=[t["AC.IC.SPECIAL NEEDS FIRE"]],I["E-I-CH----"]=[t["AC.IC.WILD FIRE"]],I["E-I-D-----"]=[t["AC.IC.HAZARDOUS MATERIALS INCIDENT"]],I["E-I-DA----"]=[t["AC.IC.CHEMICAL AGENT"]],I["E-I-DB----"]=[t["AC.IC.CORROSIVE MATERIAL"]],I["E-I-DC----"]=[t["AC.IC.HAZARDOUS WHEN WET"]],I["E-I-DD----"]=[t["AC.IC.EXPLOSIVE MATERIAL"]],I["E-I-DE----"]=[t["AC.IC.FLAMMABLE GAS"]],I["E-I-DF----"]=[t["AC.IC.FLAMMABLE LIQUID"]],I["E-I-DG----"]=[t["AC.IC.FLAMMABLE SOLID"]],I["E-I-DH----"]=[t["AC.IC.NON-FLAMMABLE GAS"]],I["E-I-DI----"]=[t["AC.IC.ORGANIC PEROXIDE"]],I["E-I-DJ----"]=[t["AC.IC.OXIDIZER"]],I["E-I-DK----"]=[t["AC.IC.RADIOACTIVE MATERIAL"]],I["E-I-DL----"]=[t["AC.IC.SPONTANEOUSLY COMBUSTIBLE MATERIAL"]],I["E-I-DM----"]=[t["AC.IC.TOXIC GAS"]],I["E-I-DN----"]=[t["AC.IC.TOXIC INFECTIOUS MATERIAL"]],I["E-I-DO----"]=[t["AC.IC.UNEXPLODED ORDNANCE"]],I["E-I-E-----"]=[t["ST.M1.INCIDENT"],t["ST.IC.HIJACKING (AIRPLANE)"]],I["E-I-EA----"]=[t["ST.M1.ACCIDENT"],t["ST.IC.HIJACKING (AIRPLANE)"]],I["E-I-F-----"]=[t["ST.M1.INCIDENT"],t["ST.IC.HIJACKING (BOAT)"]],I["E-I-FA----"]=[t["ST.M1.ACCIDENT"],t["ST.IC.HIJACKING (BOAT)"]],I["E-I-G-----"]=[t["ST.M1.INCIDENT"],t["GR.EQ.TRAIN LOCOMOTIVE"]],I["E-I-GA----"]=[t["ST.M1.ACCIDENT"],t["GR.EQ.TRAIN LOCOMOTIVE"]],I["E-I-GB----"]=[t["GR.EQ.TRAIN LOCOMOTIVE"],t["ST.M1.HIJACKING/HIJACKED"]],I["E-I-H-----"]=[t["ST.M1.INCIDENT"],t["ST.IC.KNOWN INSURGENT VEHICLE"]],I["E-I-HA----"]=[t["ST.M1.ACCIDENT"],t["ST.IC.KNOWN INSURGENT VEHICLE"]],I["E-N-AA----"]=[t["AC.IC.AFTERSHOCK"]],I["E-N-AB----"]=[t["AC.IC.AVALANCHE"]],I["E-N-AC----"]=[t["AC.IC.EARTHQUAKE EPICENTER"]],I["E-N-AD----"]=[t["AC.IC.LANDSLIDE"]],I["E-N-AE----"]=[t["AC.IC.SUBSIDENCE"]],I["W-S-WSVE--"]=[t["AC.IC.VOLCANIC ERUPTION"]],I["E-N-AG----"]=[t["AC.IC.VOLCANIC THREAT"]],I["W-S-WSD-LI"]=[t["ATMOSPHERIC.IC.DRIZZLE.INTERMITTENT LIGHT"]],I["E-N-BB----"]=[t["AC.IC.DROUGHT"]],I["E-N-BC----"]=[t["AC.IC.FLOOD"]],I["W-S-WSFGSO"]=[t["ATMOSPHERIC.IC.FOG.SKY OBSCURED"]],I["W-S-WSGRL-"]=[t["ATMOSPHERIC.IC.HAIL.LIGHT NOT ASSOCIATED WITH THUNDER"]],I["E-N-BF----"]=[t["AC.IC.INVERSION"]],I["W-S-WSR-LI"]=[t["ATMOSPHERIC.IC.RAIN.INTERMITTENT LIGHT"]],I["W-S-WSDSLM"]=[t["ATMOSPHERIC.IC.DUST OR SAND.LIGHT TO MODERATE"]],I["W-S-WSS-LI"]=[t["ATMOSPHERIC.IC.SNOW.INTERMITTENT LIGHT"]],I["W-S-WSTMH-"]=[t["ATMOSPHERIC.IC.STORMS.THUNDERSTORM LIGHT TO MODERATE - WITH HAIL"]],I["W-S-WST-FC"]=[t["ATMOSPHERIC.IC.STORMS.FUNNEL CLOUD (TORNADO/WATERSPOUT)"]],I["W-S-WSTSS-"]=[t["ATMOSPHERIC.IC.TROPICAL STORM SYSTEMS.TROPICAL STORM"]],I["E-N-BM----"]=[t["AC.IC.TSUNAMI"]],I["E-N-CA----"]=[t["AC.IC.BIRD"]],I["E-N-CB----"]=[t["AC.IC.INSECT"]],I["E-N-CC----"]=[t["AC.IC.MICROBIAL"]],I["E-N-CD----"]=[t["AC.IC.REPTILE"]],I["E-N-CE----"]=[t["AC.IC.RODENT"]],I["E-O-A-----"]=I["E-O-AA----"]=I["E-O-AB----"]=I["E-O-AC----"]=I["E-O-AD----"]=[t["GR.IC.EMERGENCY MEDICAL OPERATION"]],I["E-O-AE----"]=[t["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],t["GR.M1.MEDEVAC"]],I["E-O-AF----"]=[R._translate(0,10,R._scale(.8,t["AR.I.FF.CIVILIAN ROTARY WING"])),t["GR.M1.MEDEVAC"]],I["E-O-AG----"]=[t["AC.IC.HEALTH DEPARTMENT FACILITY"]],I["E-O-AJ----"]=[t["AC.IC.MEDICAL FACILITIES OUTPATIENT"]],I["E-O-AK----"]=[t["AC.IC.OPERATION/EMERGENCY MEDICAL OPERATION"]],I["E-O-AL----"]=[t["AC.IC.PHARMACY"]],I["E-O-AM----"]=[t["AC.IC.TRIAGE"]],I["E-O-B-----"]=I["E-O-BA----"]=I["E-O-BB----"]=I["E-O-BC----"]=[t["GR.IC.FF.EMERGENCY OPERATION"]],I["E-O-BD----"]=[R._scale(.7,t["GR.IC.FF.EMERGENCY OPERATION"]),t["AC.M1.EMERGENCY COLLECTION EVACUATION POINT"]],I["E-O-BE----"]=[R._scale(.7,t["GR.IC.FF.EMERGENCY OPERATION"]),t["AC.M1.EMERGENCY INCIDENT COMMAND CENTER"]],I["E-O-BF----"]=[R._scale(.7,t["GR.IC.FF.EMERGENCY OPERATION"]),t["AC.M1.EMERGENCY OPERATIONS CENTER"]],I["E-O-BG----"]=[t["AC.IC.EMERGENCY PUBLIC INFORMATION CENTER"]],I["E-O-BH----"]=[R._scale(.7,t["GR.IC.FF.EMERGENCY OPERATION"]),t["AC.M1.EMERGENCY SHELTER"]],I["E-O-BI----"]=[R._scale(.7,t["GR.IC.FF.EMERGENCY OPERATION"]),t["AC.M1.EMERGENCY STAGING AREA"]],I["E-O-BJ----"]=[t["GR.IC.FF.EMERGENCY OPERATION"]],I["E-O-BK----"]=I["S-G-USSW--"],I["E-O-BL----"]=[t["ST.IC.FOOD DISTRIBUTION"],t["AC.M1.EMERGENCY"]],I["E-O-C-----"]=I["E-O-CA----"]=I["E-O-CB----"]=I["E-O-CE----"]=[t["GR.IC.FIRE PROTECTION"]],I["E-O-CC----"]=[t["AC.IC.FIRE HYDRANT"]],I["E-O-CD----"]=[t["AC.IC.OTHER WATER SUPPLY LOCATION"]],I["E-O-D-----"]=I["E-O-DA----"]=I["E-O-DB----"]=I["E-O-DC----"]=[t["GR.IC.FF.LAW ENFORCEMENT"]],I["E-O-DD----"]=I["E-O-DDA---"]=I["E-O-DDB---"]=I["E-O-DDC---"]=[t["GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"]],I["E-O-DE----"]=I["E-O-DEA---"]=I["E-O-DEB---"]=I["E-O-DEC---"]=[t["GR.IC.FF.BORDER PATROL"]],I["E-O-DF----"]=I["E-O-DFA---"]=I["E-O-DFB---"]=I["E-O-DFC---"]=[t["GR.IC.FF.CUSTOMS SERVICE"]],I["E-O-DG----"]=I["E-O-DGA---"]=I["E-O-DGB---"]=I["E-O-DGC---"]=[t["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]],I["E-O-DH----"]=I["E-O-DHA---"]=I["E-O-DHB---"]=I["E-O-DHC---"]=[t["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]],I["E-O-DI----"]=I["E-O-DIA---"]=I["E-O-DIB---"]=I["E-O-DIC---"]=[t["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]],I["E-O-DJ----"]=I["E-O-DJB---"]=I["E-O-DJC---"]=[t["GR.IC.LAW ENFORCEMENT"]],I["E-O-DK----"]=[t["GR.IC.FF.PRISON"]],I["E-O-DL----"]=I["E-O-DLA---"]=I["E-O-DLB---"]=I["E-O-DLC---"]=[t["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]],I["E-O-DM----"]=I["E-O-DMA---"]=I["E-O-DMB---"]=I["E-O-DMC---"]=[t["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]],I["E-O-DN----"]=I["E-O-DNA---"]=I["E-O-DNC---"]=[t["SE.IC.LAW ENFORCEMENT VESSEL"]],I["E-O-DO----"]=I["E-O-DOA---"]=I["E-O-DOB---"]=I["E-O-DOC---"]=[t["GR.IC.FF.US MARSHALS SERVICE"]],I["E-O-EA----"]=[R._scale(.6,t["GR.EQ.SENSOR"]),t["GR.M1.BIOLOGICAL"]],I["E-O-EB----"]=[R._scale(.6,t["GR.EQ.SENSOR"]),t["GR.M1.CHEMICAL"]],I["E-O-EC----"]=[R._scale(.6,t["GR.EQ.SENSOR"]),t["GR.M1.INTRUSION"]],I["E-O-ED----"]=[R._scale(.6,t["GR.EQ.SENSOR"]),t["GR.M1.NUCLEAR"]],I["E-O-EE----"]=[R._scale(.6,t["GR.EQ.SENSOR"]),t["GR.M1.RADIOLOGICAL"]],I["E-F-A-----"]=[t["GR.IN.IC.AGRICULTURE AND FOOD INFRASTRUCTURE"]],I["E-F-AA----"]=[t["GR.IN.IC.AGRICULTURAL LABORATORY"]],I["E-F-AB----"]=[t["GR.IN.IC.ANIMAL FEEDLOT"]],I["E-F-AC----"]=[t["ST.IC.FOOD DISTRIBUTION"],t["AC.M1.COMMERCIAL"]],I["E-F-AD----"]=[t["GR.IN.IC.FARM/RANCH"]],I["E-F-AE----"]=[t["ST.IC.FOOD DISTRIBUTION"],t["AC.M1.PRODUCTION"]],I["E-F-AF----"]=[t["ST.IC.FOOD DISTRIBUTION"],t["AC.M1.RETAIL"]],I["E-F-AG----"]=[t["GR.IN.IC.GRAIN STORAGE"]],I["E-F-B-----"]=[t["AC.IC.BANKING FINANCE AND INSURANCE INFRASTRUCTURE"]],I["E-F-BA----"]=[t["GR.IN.IC.ATM"]],I["E-F-BB----"]=[t["GR.IN.IC.BANK"]],I["E-F-BC----"]=[t["GR.IN.IC.BULLION STORAGE"]],I["E-F-BD----"]=[t["GR.IN.IC.FEDERAL RESERVE BANK"]],I["E-F-BE----"]=[t["GR.IN.IC.FINANCIAL EXCHANGE"]],I["E-F-BF----"]=[t["GR.IN.IC.FINANCIAL SERVICES, OTHER"]],I["E-F-C-----"]=[t["GR.IN.IC.COMMERCIAL INFRASTRUCTURE"]],I["E-F-CA----"]=[t["GR.IN.IC.CHEMICAL PLANT"]],I["E-F-CB----"]=[t["GR.IN.IC.FIREARMS MANUFACTURER"]],I["E-F-CC----"]=[t["GR.IN.IC.FIREARMS RETAILER"]],I["E-F-CD----"]=[t["GR.IN.IC.HAZARDOUS MATERIAL PRODUCTION"]],I["E-F-CE----"]=[t["GR.IN.IC.HAZARDOUS MATERIAL STORAGE"]],I["E-F-CF----"]=[t["GR.IN.IC.INDUSTRIAL SITE"]],I["E-F-CG----"]=[t["GR.IN.IC.LANDFILL"]],I["E-F-CH----"]=[t["GR.IN.IC.PHARMACEUTICAL MANUFACTURER"]],I["E-F-CI----"]=[t["GR.IN.IC.CONTAMINATED HAZARDOUS WASTE SITE"]],I["E-F-CJ----"]=[t["GR.IN.IC.TOXIC RELEASE INVENTORY"]],I["E-F-D-----"]=[t["GR.IN.IC.EDUCATIONAL FACILITIES INFRASTRUCTURE"]],I["E-F-DA----"]=[t["GR.IN.IC.COLLEGE/UNIVERSITY"]],I["E-F-DB----"]=[t["GR.IN.IC.SCHOOL"]],I["E-F-EA----"]=[t["GR.IN.IC.ELECTRIC POWER"],t["AC.M1.GENERATION STATION"]],I["E-F-EB----"]=[t["GR.IN.IC.NATURAL GAS FACILITY"]],I["E-F-EE----"]=[t["GR.IN.IC.PROPANE FACILITY"]],I["E-F-F-----"]=[t["GR.IN.IC.GOVERNMENT SITE INFRASTRUCTURE"]],I["E-F-G-----"]=[t["GR.IN.IC.MILITARY INFRASTRUCTURE"]],I["E-F-GA----"]=[t["GR.IN.IC.BASE"],t["AC.M1.MILITARY ARMORY"]],I["E-F-H-----"]=[t["GR.IN.IC.POSTAL SERVICE INFRASTRUCTURE"]],I["E-F-HA----"]=[t["GR.IN.IC.POSTAL DISTRIBUTION CENTER"]],I["E-F-HB----"]=[t["GR.IN.IC.POST OFFICE"]],I["E-F-I-----"]=[t["GR.IN.IC.PUBLIC VENUES INFRASTRUCTURE"]],I["E-F-IA----"]=[t["GR.IN.IC.ENCLOSED FACITLITY (PUBLIC VENUE)"]],I["E-F-IB----"]=[t["GR.IN.IC.OPEN FACILITY (OPEN VENUE)"]],I["E-F-IC----"]=[t["GR.IN.IC.RECREATIONAL AREA"]],I["E-F-ID----"]=[t["GR.IN.IC.RELIGIOUS INSTITUTION"]],I["E-F-J-----"]=[t["GR.IN.IC.SPECIAL NEEDS INFRASTRUCTURE"]],I["E-F-JA----"]=[t["GR.IN.IC.ADULT DAY CARE"]],I["E-F-JB----"]=[t["GR.IN.IC.CHILD DAY CARE"]],I["E-F-JC----"]=[t["GR.IN.IC.ELDER CARE"]],I["E-F-K-----"]=[t["GR.IN.IC.TELECOMMUNICATIONS INFRASTRUCTURE"]],I["E-F-KB----"]=[t["GR.IN.IC.TELECOMMUNICATIONS TOWER"]],I["E-F-LA----"]=[t["GR.IN.IC.AIR TRAFFIC CONTROL FACILITY"]],I["G-M-BCB---"]=[t["GR.IN.IC.BRIDGE"]],E["G-M-BCB---"]={x1:50,x2:150,y1:50,y2:150},I["E-F-LD----"]=[t["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]],I["E-F-LE----"]=[t["SE.IC.FERRY"]],I["E-F-LF----"]=[t["GR.IN.IC.HELICOPTER LANDING SITE"]],I["W-S-ML----"]=[t["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE LOCK"]],I["E-F-LH----"]=[t["GR.IC.MAINTENANCE"]],I["E-F-LJ----"]=[t["GR.IC.RAILHEAD"]],I["E-F-LK----"]=[t["GR.IN.IC.REST STOP"]],I["W-S-HPBA--"]=[t["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE SHIP ANCHORAGE"]],I["E-F-LM----"]=[t["GR.IN.IC.TOLL FACILITY"]],I["G-S-PO----"]=[t["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE.TRAFFIC CONTROL POINT"]],I["E-F-LO----"]=[t["GR.IN.IC.TRAFFIC INSPECTION FACILITY"]],I["E-F-LP----"]=[t["GR.IN.IC.TUNNEL"]],I["E-F-MA----"]=[t["GR.IN.IC.CONTROL VALVE"]],I["E-F-MB----"]=[t["GR.IN.IC.DAM"]],I["E-F-MC----"]=[t["GR.IN.IC.DISCHARGE OUTFALL"]],I["E-F-MD----"]=[t["GR.IN.IC.GROUND WATER WELL"]],I["E-F-ME----"]=[t["GR.IN.IC.PUMPING STATION"]],I["E-F-MF----"]=[t["GR.IN.IC.RESERVOIR"]],I["E-F-MG----"]=[t["GR.IN.IC.STORAGE TOWER"]],I["E-F-MH----"]=[t["GR.IN.IC.SURFACE WATER INTAKE"]],I["E-F-MI----"]=[t["GR.IN.IC.WASTEWATER TREATMENT FACILITY"]]}},function(I,E,t){var R=t(0);I.exports=function(I,E,t,C){I["S-G-E-----"]=[],I["S-G-EWM---"]=[t["GR.EQ.MISSILE LAUNCHER"]],I["S-G-EWMA--"]=[t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"]],I["S-G-EWMAS-"]=[t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],t["GR.EQ.SHORT RANGE"]],I["S-G-EWMASR"]=[t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],t["GR.EQ.SHORT RANGE"],t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]],I["S-G-EWMASE"]=[t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],t["GR.EQ.SHORT RANGE"],t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]],I["S-G-EWMAI-"]=[t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],t["GR.EQ.INTERMEDIATE RANGE"]],I["S-G-EWMAIR"]=[t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],t["GR.EQ.INTERMEDIATE RANGE"],t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]],I["S-G-EWMAIE"]=[t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],t["GR.EQ.INTERMEDIATE RANGE"],t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]],I["S-G-EWMAL-"]=[t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],t["GR.EQ.LONG RANGE"]],I["S-G-EWMALR"]=[t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],t["GR.EQ.LONG RANGE"],t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]],I["S-G-EWMALE"]=[t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],t["GR.EQ.LONG RANGE"],t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]],I["S-G-EWMAT-"]=[R._translate(0,-15,R._scale(.7,t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"])),t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE"]],I["S-G-EWMATR"]=[R._translate(0,-15,R._scale(.7,t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"])),t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE"],t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]],I["S-G-EWMATE"]=[R._translate(0,-15,R._scale(.7,t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"])),t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE"],t["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]],I["S-G-EWMS--"]=[t["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"]],I["S-G-EWMSS-"]=[t["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],t["GR.EQ.SHORT RANGE"]],I["S-G-EWMSI-"]=[t["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],t["GR.EQ.INTERMEDIATE RANGE"]],I["S-G-EWMSL-"]=[t["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],t["GR.EQ.LONG RANGE"]],I["S-G-EWMT--"]=[t["GR.EQ.ANTITANK MISSILE LAUNCHER"]],I["S-G-EWMTL-"]=[t["GR.EQ.ANTITANK MISSILE LAUNCHER"],t["GR.EQ.SHORT RANGE"]],I["S-G-EWMTM-"]=[t["GR.EQ.ANTITANK MISSILE LAUNCHER"],t["GR.EQ.INTERMEDIATE RANGE"]],I["S-G-EWMTH-"]=[t["GR.EQ.ANTITANK MISSILE LAUNCHER"],t["GR.EQ.LONG RANGE"]],I["S-G-EWS---"]=[t["GR.EQ.SINGLE ROCKET LAUNCHER"]],I["S-G-EWSL--"]=[t["GR.EQ.SINGLE ROCKET LAUNCHER"],t["GR.EQ.SHORT RANGE"]],I["S-G-EWSM--"]=[t["GR.EQ.SINGLE ROCKET LAUNCHER"],t["GR.EQ.INTERMEDIATE RANGE"]],I["S-G-EWSH--"]=[t["GR.EQ.SINGLE ROCKET LAUNCHER"],t["GR.EQ.LONG RANGE"]],I["S-G-EWX---"]=[t["GR.EQ.MULTIPLE ROCKET LAUNCHER"]],I["S-G-EWXL--"]=[t["GR.EQ.MULTIPLE ROCKET LAUNCHER"],R._translate(0,10,t["GR.EQ.SHORT RANGE"])],I["S-G-EWXM--"]=[t["GR.EQ.MULTIPLE ROCKET LAUNCHER"],R._translate(0,10,t["GR.EQ.INTERMEDIATE RANGE"])],I["S-G-EWXH--"]=[t["GR.EQ.MULTIPLE ROCKET LAUNCHER"],R._translate(0,10,t["GR.EQ.LONG RANGE"])],I["S-G-EWT---"]=[t["GR.EQ.ANTITANK ROCKET LAUNCHER"]],I["S-G-EWTL--"]=[t["GR.EQ.ANTITANK ROCKET LAUNCHER"],t["GR.EQ.SHORT RANGE"]],I["S-G-EWTM--"]=[t["GR.EQ.ANTITANK ROCKET LAUNCHER"],t["GR.EQ.INTERMEDIATE RANGE"]],I["S-G-EWTH--"]=[t["GR.EQ.ANTITANK ROCKET LAUNCHER"],t["GR.EQ.LONG RANGE"]],I["S-G-EWR---"]=[t["GR.EQ.RIFLE"]],I["S-G-EWRR--"]=[t["GR.EQ.RIFLE"],t["GR.EQ.SHORT RANGE"]],I["S-G-EWRL--"]=[t["GR.EQ.RIFLE"],t["GR.EQ.INTERMEDIATE RANGE"]],I["S-G-EWRH--"]=[t["GR.EQ.RIFLE"],t["GR.EQ.LONG RANGE"]],I["S-G-EWZ---"]=[t["GR.EQ.GRENADE LAUNCHER"]],I["S-G-EWZL--"]=[t["GR.EQ.GRENADE LAUNCHER"],R._translate(0,20,t["GR.EQ.SHORT RANGE"])],I["S-G-EWZM--"]=[t["GR.EQ.GRENADE LAUNCHER"],R._translate(0,20,t["GR.EQ.INTERMEDIATE RANGE"])],I["S-G-EWZH--"]=[t["GR.EQ.GRENADE LAUNCHER"],R._translate(0,20,t["GR.EQ.LONG RANGE"])],I["S-G-EWO---"]=[t["GR.EQ.MORTAR"]],I["S-G-EWOL--"]=[t["GR.EQ.MORTAR"],t["GR.EQ.SHORT RANGE"]],I["S-G-EWOM--"]=[t["GR.EQ.MORTAR"],t["GR.EQ.INTERMEDIATE RANGE"]],I["S-G-EWOH--"]=[t["GR.EQ.MORTAR"],t["GR.EQ.LONG RANGE"]],I["S-G-EWH---"]=[t["GR.EQ.HOWITZER"]],I["S-G-EWHL--"]=[t["GR.EQ.HOWITZER"],t["GR.EQ.SHORT RANGE"]],I["S-G-EWHLS-"]=[R._translate(0,-15,R._scale(.8,[t["GR.EQ.HOWITZER"],t["GR.EQ.SHORT RANGE"]])),t["GR.EQ.HOWITZER TRACKED"]],I["S-G-EWHM--"]=[t["GR.EQ.HOWITZER"],t["GR.EQ.INTERMEDIATE RANGE"]],I["S-G-EWHMS-"]=[R._translate(0,-15,R._scale(.8,[t["GR.EQ.HOWITZER"],t["GR.EQ.INTERMEDIATE RANGE"]])),t["GR.EQ.HOWITZER TRACKED"]],I["S-G-EWHH--"]=[t["GR.EQ.HOWITZER"],t["GR.EQ.LONG RANGE"]],I["S-G-EWHHS-"]=[R._translate(0,-15,R._scale(.8,[t["GR.EQ.HOWITZER"],t["GR.EQ.LONG RANGE"]])),t["GR.EQ.HOWITZER TRACKED"]],I["S-G-EWG---"]=[t["GR.EQ.ANTITANK GUN"]],I["S-G-EWGL--"]=[t["GR.EQ.ANTITANK GUN"],t["GR.EQ.SHORT RANGE"]],I["S-G-EWGM--"]=[t["GR.EQ.ANTITANK GUN"],t["GR.EQ.INTERMEDIATE RANGE"]],I["S-G-EWGH--"]=[t["GR.EQ.ANTITANK GUN"],t["GR.EQ.LONG RANGE"]],I["S-G-EWGR--"]=[t["GR.EQ.RECOILLESS GUN"]],I["S-G-EWD---"]=[t["GR.EQ.DIRECT FIRE GUN"]],I["S-G-EWDL--"]=[t["GR.EQ.DIRECT FIRE GUN"],t["GR.EQ.SHORT RANGE"]],I["S-G-EWDLS-"]=[R._translate(0,-15,R._scale(.8,[t["GR.EQ.DIRECT FIRE GUN"],t["GR.EQ.SHORT RANGE"]])),t["GR.EQ.HOWITZER TRACKED"]],I["S-G-EWDM--"]=[t["GR.EQ.DIRECT FIRE GUN"],t["GR.EQ.INTERMEDIATE RANGE"]],I["S-G-EWDMS-"]=[R._translate(0,-15,R._scale(.8,[t["GR.EQ.DIRECT FIRE GUN"],t["GR.EQ.INTERMEDIATE RANGE"]])),t["GR.EQ.HOWITZER TRACKED"]],I["S-G-EWDH--"]=[t["GR.EQ.DIRECT FIRE GUN"],t["GR.EQ.LONG RANGE"]],I["S-G-EWDHS-"]=[R._translate(0,-15,R._scale(.8,[t["GR.EQ.DIRECT FIRE GUN"],t["GR.EQ.LONG RANGE"]])),t["GR.EQ.HOWITZER TRACKED"]],I["S-G-EWA---"]=[t["GR.EQ.AIR DEFENCE GUN"]],I["S-G-EWAL--"]=[t["GR.EQ.AIR DEFENCE GUN"],t["GR.EQ.SHORT RANGE"]],I["S-G-EWAM--"]=[t["GR.EQ.AIR DEFENCE GUN"],t["GR.EQ.INTERMEDIATE RANGE"]],I["S-G-EWAH--"]=[t["GR.EQ.AIR DEFENCE GUN"],t["GR.EQ.LONG RANGE"]],I["S-G-EV----"]=[t["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"]],I["S-G-EVA---"]=[t["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],t["GR.EQ.ARMOURED VEHICLE"]],I["S-G-EVAT--"]=[t["GR.EQ.TANK"]],I["S-G-EVATL-"]=[t["GR.EQ.TANK"],t["GR.EQ.LIGHT TANK"]],I["S-G-EVATLR"]=I["S-G-EVATW-"]=[t["GR.EQ.TANK"],t["GR.EQ.LIGHT TANK"],t["GR.EQ.TANK RECOVERY VEHICLE"]],I["S-G-EVATM-"]=[t["GR.EQ.TANK"],t["GR.EQ.MEDIUM TANK"]],I["S-G-EVATMR"]=I["S-G-EVATX-"]=[t["GR.EQ.TANK"],t["GR.EQ.MEDIUM TANK"],t["GR.EQ.TANK RECOVERY VEHICLE"]],I["S-G-EVATH-"]=[t["GR.EQ.TANK"],t["GR.EQ.HEAVY TANK"]],I["S-G-EVATHR"]=I["S-G-EVATY-"]=[t["GR.EQ.TANK"],t["GR.EQ.HEAVY TANK"],t["GR.EQ.TANK RECOVERY VEHICLE"]],I["S-G-EVAA--"]=[t["GR.EQ.ARMOURED PERSONNEL CARRIER"]],I["S-G-EVAAR-"]=[t["GR.EQ.ARMOURED PERSONNEL CARRIER"],t["GR.EQ.TANK RECOVERY VEHICLE"]],I["S-G-EVAI--"]=[t["GR.EQ.ARMOURED FIGHTING VEHICLE"]],I["S-G-EVAC--"]=[t["GR.EQ.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL"]],I["S-G-EVAS--"]=[t["GR.EQ.ARMOURED PERSONNEL CARRIER COMBAT SERVICE SUPPORT VEHICLE"]],I["S-G-EVAL--"]=[t["GR.EQ.ARMOURED FIGHTING VEHICLE"],t["GR.EQ.CROSS-COUNTRY"]],I["S-G-EVU---"]=[t["GR.EQ.UTILITY VEHICLE"]],I["S-G-EVUB--"]=[t["GR.EQ.BUS"]],I["S-G-EVUS--"]=[t["GR.EQ.SEMI-TRAILER TRUCK"]],I["S-G-EVUSL-"]=[t["GR.EQ.SEMI-TRAILER TRUCK"],t["GR.EQ.UTILITY VEHICLE LIGHT"]],I["S-G-EVUSM-"]=[t["GR.EQ.SEMI-TRAILER TRUCK"],t["GR.EQ.UTILITY VEHICLE MEDIUM"]],I["S-G-EVUSH-"]=[t["GR.EQ.SEMI-TRAILER TRUCK"],t["GR.EQ.UTILITY VEHICLE HEAVY"]],I["S-G-EVUL--"]=[t["GR.EQ.UTILITY VEHICLE"],t["GR.EQ.LIMITED CROSS-COUNTRY"]],I["S-G-EVUX--"]=[t["GR.EQ.UTILITY VEHICLE"],t["GR.EQ.CROSS-COUNTRY"]],I["S-G-EVUR--"]=[t["GR.EQ.WATER VEHICLE"]],I["S-G-EVUT--"]=[t["GR.EQ.UTILITY VEHICLE"],t["GR.EQ.UTILITY VEHICLE.TOW TRUCK"]],I["S-G-EVUTL-"]=[t["GR.EQ.UTILITY VEHICLE"],t["GR.EQ.UTILITY VEHICLE.TOW TRUCK"],t["GR.EQ.UTILITY VEHICLE.TOW TRUCK.LIGHT"]],I["S-G-EVUTH-"]=[t["GR.EQ.UTILITY VEHICLE"],t["GR.EQ.UTILITY VEHICLE.TOW TRUCK"],t["GR.EQ.UTILITY VEHICLE.TOW TRUCK.HEAVY"]],I["S-G-EVUA--"]=[t["GR.EQ.UTILITY VEHICLE"],t["GR.EQ.MEDICAL EVACUATION"]],I["S-G-EVUAA-"]=[t["GR.EQ.ARMOURED PERSONNEL CARRIER"],t["GR.EQ.MEDICAL EVACUATION"]],I["S-G-EVE---"]=[t["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],R._scale(.7,t["GR.IC.ENGINEER"])],I["S-G-EVEB--"]=[t["GR.EQ.BRIDGE"]],I["S-G-EVEE--"]=[t["GR.EQ.EARTHMOVER"]],I["S-G-EVEC--"]=[t["GR.EQ.UTILITY VEHICLE"],t["GR.EQ.LIMITED CROSS-COUNTRY"],R._scale(.6,t["GR.IC.ENGINEER"])],I["S-G-EVEM--"]=[t["GR.EQ.UTILITY VEHICLE"],t["GR.EQ.MINE LAYING VEHICLE"]],I["S-G-EVEMA-"]=[t["GR.EQ.MINE CLEARING EQUIPMENT"],t["GR.EQ.TANK"]],I["S-G-EVEMV-"]=[t["GR.EQ.ARMOURED PERSONNEL CARRIER"],t["GR.EQ.ARMORED CARRIER WITH VOLCANO"]],I["S-G-EVEMT-"]=[t["GR.EQ.MINE CLEARING EQUIPMENT"],R._translate(0,-10,t["GR.EQ.LIMITED CROSS-COUNTRY"])],I["S-G-EVEML-"]=[t["GR.EQ.UTILITY VEHICLE"],t["GR.EQ.LIMITED CROSS-COUNTRY"],t["GR.EQ.ARMORED CARRIER WITH VOLCANO"]],I["S-G-EVEA--"]=[t["GR.EQ.MINE CLEARING EQUIPMENT"]],I["S-G-EVEAA-"]=[t["GR.EQ.MINE CLEARING EQUIPMENT"],t["GR.EQ.TANK"]],I["S-G-EVEAT-"]=[t["GR.EQ.MINE CLEARING EQUIPMENT"],R._translate(0,-10,t["GR.EQ.LIMITED CROSS-COUNTRY"])],I["S-G-EVEMSM"]=[t["GR.EQ.ARMOURED PERSONNEL CARRIER"],t["GR.EQ.MINE SCATTERABLE"]],I["S-G-EVED--"]=[t["GR.EQ.DOZER"]],I["S-G-EVEDA-"]=[t["GR.EQ.DOZER ARMORED"]],I["S-G-EVES--"]=[t["GR.EQ.ARMOURED PERSONNEL CARRIER"],R._scale(.6,t["GR.IC.ENGINEER"])],I["S-G-EVER--"]=[t["GR.EQ.ARMOURED PERSONNEL CARRIER"],R._scale(.6,t["GR.IC.ENGINEER"]),t["GR.EQ.ARMOURED PERSONNEL CARRIER ENGINEER RECON VEHICLE"]],I["S-G-EVEH--"]=[t["GR.EQ.UTILITY VEHICLE"],t["GR.EQ.LIMITED CROSS-COUNTRY"],t["GR.EQ.UTILITY VEHICLE BACKHOE"]],I["S-G-EVEF--"]=[t["GR.EQ.UTILITY VEHICLE"],t["GR.EQ.CROSS-COUNTRY"],t["GR.EQ.UTILITY VEHICLE FERRY TRANSPORTER"]],I["S-G-EVD---"]=[t["GR.EQ.UTILITY VEHICLE"],t["GR.EQ.CROSS-COUNTRY"],R._scale(.7,t["GR.IC.DRILLING"])],I["S-G-EVT---"]=[t["GR.EQ.TRAIN LOCOMOTIVE"]],I["S-G-EVC---"]=[t["AR.I.CIVILIAN"]],I["S-G-EVCA--"]=[t["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"]],I["S-G-EVCAL-"]=[t["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],t["GR.EQ.CIVILIAN VEHICLE.LIGHT"]],I["S-G-EVCAM-"]=[t["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],t["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]],I["S-G-EVCAH-"]=[t["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],t["GR.EQ.CIVILIAN VEHICLE.HEAVY"]],I["S-G-EVCO--"]=[t["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"]],I["S-G-EVCOL-"]=[t["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],t["GR.EQ.CIVILIAN VEHICLE.LIGHT"]],I["S-G-EVCOM-"]=[t["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],t["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]],I["S-G-EVCOH-"]=[t["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],t["GR.EQ.CIVILIAN VEHICLE.HEAVY"]],I["S-G-EVCM--"]=[t["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]],I["S-G-EVCML-"]=[t["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.LIGHT"]],I["S-G-EVCMM-"]=[t["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]],I["S-G-EVCMH-"]=[t["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.HEAVY"]],I["S-G-EVCU--"]=[t["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"]],I["S-G-EVCUL-"]=[t["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.LIGHT"]],I["S-G-EVCUM-"]=[t["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]],I["S-G-EVCUH-"]=[t["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.HEAVY"]],I["S-G-EVCJ--"]=[t["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"]],I["S-G-EVCJL-"]=[t["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.LIGHT"]],I["S-G-EVCJM-"]=[t["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]],I["S-G-EVCJH-"]=[t["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.HEAVY"]],I["S-G-EVCT--"]=[t["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I["S-G-EVCTL-"]=[t["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.LIGHT"],t["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I["S-G-EVCTM-"]=[t["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.MEDIUM"],t["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I["S-G-EVCTH-"]=[t["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],t["GR.EQ.CIVILIAN VEHICLE.HEAVY"],t["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I["S-G-EVCF--"]=[t["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],t["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I["S-G-EVCFL-"]=[t["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],t["GR.EQ.CIVILIAN VEHICLE.LIGHT"],t["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I["S-G-EVCFM-"]=[t["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],t["GR.EQ.CIVILIAN VEHICLE.MEDIUM"],t["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I["S-G-EVCFH-"]=[t["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],t["GR.EQ.CIVILIAN VEHICLE.HEAVY"],t["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I["S-G-EVM---"]=[t["GR.EQ.PACK ANIMAL"]],I["S-G-EVS---"]=[t["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],t["GR.EQ.MISSILE SUPPORT"]],I["S-G-EVST--"]=[t["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],t["GR.EQ.MISSILE TRANSLOADER"]],I["S-G-EVSR--"]=[t["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],t["GR.EQ.MISSILE TRANSPORTER"]],I["S-G-EVSC--"]=[t["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],t["GR.EQ.MISSILE CRANE/LOADING DEVICE"]],I["S-G-EVSP--"]=[t["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],t["GR.EQ.MISSILE PROPELLANT TRANSPORTER"]],I["S-G-EVSW--"]=[t["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],t["GR.EQ.MISSILE WARHEAD TRANSPORTER"]],I["S-G-ES----"]=[t["GR.EQ.SENSOR"]],I["S-G-ESR---"]=[t["GR.EQ.RADAR"]],I["S-G-ESE---"]=[t["GR.EQ.SENSOR EMPLACED"]],I["S-G-EXI---"]=[t["GR.EQ.IMPROVISED EXPLOSIVE DEVICE"]],I["S-G-EXL---"]=[t["GR.EQ.LASER"]],I["S-G-EXN---"]=[t["GR.EQ.CBRN EQUIPMENT"]],I["S-G-EXF---"]=[t["GR.EQ.FLAME THROWER"]],I["S-G-EXM---"]=[t["GR.EQ.LAND MINES"]],I["S-G-EXMC--"]=[t["GR.EQ.ANTIPERSONNEL LAND MINE"]],I["S-G-EXML--"]=[t["GR.EQ.ANTIPERSONNEL LAND MINE LESS THAN LETHAL"]];var A={"E-----":0,"EWM---":140,"EWMA--":140,"EWMAS-":140,EWMASR:140,EWMASE:140,"EWMAI-":140,EWMAIR:140,EWMAIE:140,"EWMAL-":140,EWMALR:140,EWMALE:140,"EWMAT-":153,EWMATR:153,EWMATE:153,"EWMS--":140,"EWMSS-":140,"EWMSI-":140,"EWMSL-":140,"EWMT--":140,"EWMTL-":140,"EWMTM-":140,"EWMTH-":140,"EWS---":140,"EWSL--":140,"EWSM--":140,"EWSH--":140,"EWX---":140,"EWXL--":140,"EWXM--":140,"EWXH--":140,"EWT---":140,"EWTL--":140,"EWTM--":140,"EWTH--":140,"EWR---":140,"EWRL--":140,"EWRM--":140,"EWRH--":140,"EWZ---":140,"EWZL--":140,"EWZM--":140,"EWZH--":140,"EWO---":140,"EWOL--":140,"EWOM--":140,"EWOH--":140,"EWH---":140,"EWHL--":140,"EWHLS-":130,"EWHM--":140,"EWHMS-":130,"EWHH--":140,"EWHHS-":130,"EWG---":140,"EWGL--":140,"EWGM--":140,"EWGH--":140,"EWGR--":140,"EWD---":140,"EWDL--":140,"EWDLS-":130,"EWDM--":140,"EWDMS-":130,"EWDH--":140,"EWDHS-":130,"EWA---":140,"EWAL--":140,"EWAM--":140,"EWAH--":140,"EV----":129,"EVA---":129,"EVAT--":130,"EVATL-":130,EVATLR:130,"EVATM-":130,EVATMR:130,"EVATH-":130,EVATHR:130,"EVAA--":130,"EVAAR-":130,"EVAI--":130,"EVAC--":130,"EVAS--":130,"EVAL--":140,"EVU---":130,"EVAB--":130,"EVUS--":140,"EVUSL-":140,"EVUSM-":140,"EVUSH-":140,"EVUL--":140,"EVUX--":140,"EVUR--":130,"EVUTL-":130,"EVUTH-":130,"EVUA--":130,"EVUAA-":130,"EVE---":129,"EVEB--":130,"EVEE--":130,"EVEC--":140,"EVEM--":130,"EVEMA-":130,"EVEMV-":130,"EVEMT-":130,"EVEML-":140,"EVEA--":120,"EVEAA-":130,"EVEAT-":130,EVEMSM:130,"EVED--":130,"EVEDA-":130,"EVES--":130,"EVER--":130,"EVEH--":140,"EVEF--":140,"EVD---":140,"EVT--":130,"EVC---":119,"EVCA--":132.5,"EVCAL-":132.5,"EVCAM-":132.5,"EVCAH-":132.5,"EVCO--":132.5,"EVCOL-":132.5,"EVCOM-":132.5,"EVCOH-":132.5,"EVCM--":132.5,"EVCML-":132.5,"EVCMM-":132.5,"EVCMH-":132.5,"EVCU--":132.5,"EVCUL-":132.5,"EVCUM-":132.5,"EVCUH-":132.5,"EVCJ--":132.5,"EVCJL-":132.5,"EVCJM-":132.5,"EVCJH-":132.5,"EVCT--":132.5,"EVCTL-":132.5,"EVCTM-":132.5,"EVCTH-":132.5,"EVCF--":132.5,"EVCFL-":132.5,"EVCFM-":132.5,"EVCFH-":132.5,"EVM---":125,"EVS---":129,"EVST--":129,"EVSR--":129,"EVSC--":129,"EVSP--":129,"EVSW--":129,"ES----":140,"ESR---":120,"ESE---":136,"EXI---":119,"EXL---":145,"EXN---":140,"EXF---":135,"EXM---":130,"EXMC--":122,"EXML--":122};for(var e in A)A.hasOwnProperty(e)&&(E["S-G-"+e]={x1:50,x2:150,y1:50,y2:A[e]})}},function(I,E,t){var R=t(0);I.exports=function(I,E,t,C){I["S-G-------"]=[],I["S-G-U-----"]=[],I["S-G-UC----"]=[t["GR.IC.COMBAT"]],I["S-G-UCD---"]=[t["GR.IC.FF.AIR DEFENCE"]],I["S-G-UCDS--"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE SHORT RANGE"]],I["S-G-UCDSC-"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE MISSILE"],t["GR.IC.AIR DEFENSE CHAPARRAL"]],I["S-G-UCDSS-"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE MISSILE"],t["GR.IC.AIR DEFENSE STINGER"]],I["S-G-UCDSV-"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.FF.MAIN GUN SYSTEM"],t["GR.IC.AIR DEFENSE VULCAN"]],I["S-G-UCDM--"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE MISSILE"]],I["S-G-UCDML-"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE MISSILE"],t["GR.IC.MISSILE.LIGHT"]],I["S-G-UCDMLA"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE MISSILE"],t["GR.IC.FF.MOTORIZED"]],I["S-G-UCDMM-"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE MISSILE"],t["GR.IC.MISSILE.MEDIUM"]],I["S-G-UCDMH-"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE MISSILE"],t["GR.IC.MISSILE.HEAVY"]],I["S-G-UCDH--"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE H/MAD"]],I["S-G-UCDHH-"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE MISSILE"],t["GR.IC.AIR DEFENSE H/MAD HAWK"]],I["S-G-UCDHP-"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE MISSILE"],t["GR.IC.AIR DEFENSE H/MAD PATRIOT"]],I["S-G-UCDG--"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE GUN UNIT"]],I["S-G-UCDC--"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE COMPOSITE"]],I["S-G-UCDT--"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE TARGETING UNIT"]],I["S-G-UCDO--"]=[t["GR.IC.FF.AIR DEFENCE"],t["GR.IC.AIR DEFENSE THEATER MISSILE DEFENSE UNIT"]],I["S-G-UCA---"]=[t["GR.IC.ARMOUR"]],I["S-G-UCAT--"]=[t["GR.IC.ARMOUR"]],I["S-G-UCATA-"]=[t["GR.IC.ARMOUR"],t["GR.M2.AIRBORNE"]],I["S-G-UCATW-"]=[t["GR.IC.ARMOUR"],t["GR.IC.FF.AMPHIBIOUS"]],I["S-G-UCATWR"]=[t["GR.IC.ARMOUR"],t["GR.IC.FF.AMPHIBIOUS"],t["GR.M2.RECOVERY (MAINTENANCE)"]],I["S-G-UCATL-"]=[t["GR.IC.ARMOUR"],t["GR.M2.LIGHT"]],I["S-G-UCATM-"]=[t["GR.IC.ARMOUR"],t["GR.M2.MEDIUM"]],I["S-G-UCATH-"]=[t["GR.IC.ARMOUR"],t["GR.M2.HEAVY"]],I["S-G-UCATR-"]=[t["GR.IC.ARMOUR"],t["GR.M2.RECOVERY (MAINTENANCE)"]],I["S-G-UCAW--"]=[t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"]],I["S-G-UCAWS-"]=[t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"],t["GR.M1.AIRMOBILE/AIR ASSAULT"]],I["S-G-UCAWA-"]=[t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"],t["GR.M2.AIRBORNE"]],I["S-G-UCAWW-"]=[t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"],t["GR.IC.FF.AMPHIBIOUS"]],I["S-G-UCAWWR"]=[t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"],t["GR.IC.FF.AMPHIBIOUS"],t["GR.M2.RECOVERY (MAINTENANCE)"]],I["S-G-UCAWL-"]=[t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"],t["GR.M2.LIGHT"]],I["S-G-UCAWM-"]=[t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"],t["GR.M2.MEDIUM"]],I["S-G-UCAWH-"]=[t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"],t["GR.M2.HEAVY"]],I["S-G-UCAWR-"]=[t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"],t["GR.M2.RECOVERY (MAINTENANCE)"]],I["S-G-UCAA--"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"]],I["S-G-UCAAD-"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"]],I["S-G-UCAAL-"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"],t["GR.M2.LIGHT"]],I["S-G-UCAAM-"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"],t["GR.M2.AIRBORNE"]],I["S-G-UCAAS-"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"],t["GR.M1.AIRMOBILE/AIR ASSAULT"]],I["S-G-UCAAU-"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"],t["GR.M2.MOUNTAIN"]],I["S-G-UCAAC-"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"],t["GR.M2.ARCTIC"]],I["S-G-UCAAA-"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"],t["GR.IC.ARMOUR"]],I["S-G-UCAAAT"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"],t["GR.IC.ARMOUR"]],I["S-G-UCAAAW"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"],t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"]],I["S-G-UCAAAS"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"],t["GR.IC.ARMOUR"],t["GR.M1.AIRMOBILE/AIR ASSAULT"]],I["S-G-UCAAO-"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"],t["GR.IC.FF.MOTORIZED"]],I["S-G-UCAAOS"]=[t["GR.IC.FF.ANTITANK/ANTIARMOUR"],t["GR.IC.FF.MOTORIZED"],t["GR.M1.AIRMOBILE/AIR ASSAULT"]],I["S-G-UCV---"]=[t["GR.IC.AVIATION ROTARY WING"]],I["S-G-UCVF--"]=[t["GR.IC.AVIATION FIXED WING"]],I["S-G-UCVFU-"]=[t["GR.IC.AVIATION FIXED WING"],t["GR.M1.UTILITY"]],I["S-G-UCVFA-"]=[t["GR.IC.AVIATION FIXED WING"],t["GR.M1.ATTACK"]],I["S-G-UCVUTP"]=[t["GR.IC.AVIATION TACTICAL AIR CONTROL PARTY"]],I["S-G-UCVUFC"]=[t["GR.IC.AVIATION FORWARD AIR CONTROLLER"]],I["S-G-UCVFR-"]=[t["GR.IC.AVIATION FIXED WING"],t["GR.M1.RECON"]],I["S-G-UCVR--"]=[t["GR.IC.AVIATION ROTARY WING"]],C&&I["S-G-UCVR--"].push({type:"path",d:"M100,100 L100,140"}),I["S-G-UCVRA-"]=[t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.ATTACK"]],I["S-G-UCVRS-"]=[t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.RECON"]],I["S-G-UCVRW-"]=[t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.ANTISUBMARINE WARFARE"]],I["S-G-UCVRU-"]=[t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.UTILITY"]],I["S-G-UCVRUL"]=[t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.UTILITY"],t["GR.M2.LIGHT"]],I["S-G-UCVRUM"]=[t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.UTILITY"],t["GR.M2.MEDIUM"]],I["S-G-UCVRUH"]=[t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.UTILITY"],t["GR.M2.HEAVY"]],I["S-G-UCVRUC"]=[t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.COMMAND AND CONTROL"]],I["S-G-UCVRUE"]=[t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.MEDEVAC"]],I["S-G-UCVRM-"]=[t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.MINE COUNTERMEASURE"]],I["S-G-UCVS--"]=[t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.PERSONNEL RECOVERY"]],I["S-G-UCVC--"]=[t["GR.IC.AVIATION COMPOSITE"]],I["S-G-UCVV--"]=[t["GR.IC.AVIATION FIXED WING"],t["GR.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING "]],I["S-G-UCVU--"]=[t["GR.IC.UNMANNED SYSTEMS"]],I["S-G-UCVUF-"]=[t["GR.IC.AVIATION FIXED WING"],t["GR.M1.UNMANNED AERIAL VEHICLE"]],I["S-G-UCVUR-"]=[t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.UNMANNED AERIAL VEHICLE"]],I["S-G-UCI---"]=[t["GR.IC.FF.INFANTRY"]],I["S-G-UCIL--"]=[t["GR.IC.FF.INFANTRY"],t["GR.M2.LIGHT"]],I["S-G-UCIM--"]=[t["GR.IC.FF.INFANTRY"],t["GR.IC.FF.MOTORIZED"]],I["S-G-UCIO--"]=[t["GR.IC.FF.INFANTRY"],t["GR.M2.MOUNTAIN"]],I["S-G-UCIA--"]=[t["GR.IC.FF.INFANTRY"],t["GR.M2.AIRBORNE"]],I["S-G-UCIS--"]=[t["GR.IC.FF.INFANTRY"],t["GR.M1.AIRMOBILE/AIR ASSAULT"]],I["S-G-UCIZ--"]=[t["GR.IC.FF.INFANTRY"],t["GR.IC.ARMOUR"]],I["S-G-UCIN--"]=[t["GR.IC.FF.INFANTRY"],t["GR.IC.FF.NAVAL"]],I["S-G-UCII--"]=[t["GR.IC.FF.INFANTRY"],t["GR.IC.ARMOUR"],t["GR.IC.FF.MAIN GUN SYSTEM"]],I["S-G-UCIC--"]=[t["GR.IC.FF.INFANTRY"],t["GR.M2.ARCTIC"]],I["S-G-UCE---"]=[t["GR.IC.ENGINEER"]],I["S-G-UCEC--"]=[t["GR.IC.ENGINEER"],t["GR.M1.COMBAT"]],I["S-G-UCECS-"]=[t["GR.IC.ENGINEER"],t["GR.M1.AIRMOBILE/AIR ASSAULT"]],I["S-G-UCECA-"]=[t["GR.IC.ENGINEER"],t["GR.M2.AIRBORNE"]],I["S-G-UCECC-"]=[t["GR.IC.ENGINEER"],t["GR.M2.ARCTIC"]],I["S-G-UCECL-"]=[t["GR.IC.ENGINEER"],t["GR.M1.COMBAT"],t["GR.M2.LIGHT"]],I["S-G-UCECM-"]=[t["GR.IC.ENGINEER"],t["GR.M1.COMBAT"],t["GR.M2.MEDIUM"]],I["S-G-UCECH-"]=[t["GR.IC.ENGINEER"],t["GR.M1.COMBAT"],t["GR.M2.HEAVY"]],I["S-G-UCECT-"]=[R._scale(.7,t["GR.IC.ENGINEER"]),t["GR.IC.ARMOUR"]],I["S-G-UCECW-"]=[t["GR.IC.ENGINEER"],t["GR.IC.FF.MOTORIZED"]],I["S-G-UCECO-"]=[t["GR.IC.ENGINEER"],t["GR.M2.MOUNTAIN"]],I["S-G-UCECR-"]=[t["GR.IC.ENGINEER"],t["GR.IC.FF.RECONNAISSANCE"]],I["S-G-UCEN--"]=[t["GR.IC.ENGINEER"],t["GR.M1.CONSTRUCTION"]],I["S-G-UCENN-"]=[t["GR.IC.ENGINEER"],t["GR.M1.NAVAL"]],I["S-G-UCF---"]=[t["GR.IC.FIELD ARTILLERY"]],I["S-G-UCFH--"]=[t["GR.IC.FIELD ARTILLERY"]],I["S-G-UCFHE-"]=[R._scale(.8,t["GR.IC.FIELD ARTILLERY"]),t["GR.IC.ARMOUR"]],I["S-G-UCFHS-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M1.AIRMOBILE/AIR ASSAULT"]],I["S-G-UCFHA-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M2.AIRBORNE"]],I["S-G-UCFHC-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M2.ARCTIC"]],I["S-G-UCFHO-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M2.MOUNTAIN"]],I["S-G-UCFHL-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M2.LIGHT"]],I["S-G-UCFHM-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M2.MEDIUM"]],I["S-G-UCFHH-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M2.HEAVY"]],I["S-G-UCFHX-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.IC.FF.AMPHIBIOUS"]],I["S-G-UCFR--"]=[t["GR.IC.FF.FIELD ARTILLERY ROCKET"]],I["S-G-UCFRS-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M1.SINGLE ROCKET LAUNCHER"]],I["S-G-UCFRS-"]=[R._scale(.8,t["GR.IC.FIELD ARTILLERY"]),t["GR.M1.SINGLE ROCKET LAUNCHER"],C?[]:t["GR.IC.ARMOUR"]],I["S-G-UCFRSS"]=[R._scale(.8,t["GR.IC.FIELD ARTILLERY"]),t["GR.M1.SINGLE ROCKET LAUNCHER"],t["GR.IC.ARMOUR"]],I["S-G-UCFRSR"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M1.SINGLE ROCKET LAUNCHER"],t["GR.M2.TRUCK"]],I["S-G-UCFRST"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M1.SINGLE ROCKET LAUNCHER"],t["GR.M2.TOWED"]],I["S-G-UCFRM-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M1.MULTIPLE ROCKET LAUNCHER"],C?"":t["GR.M2.CROSS-COUNTRY TRUCK"]],I["S-G-UCFRMS"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M1.MULTIPLE ROCKET LAUNCHER"],t["GR.IC.ARMOUR"]],I["S-G-UCFRMR"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M1.MULTIPLE ROCKET LAUNCHER"],t["GR.M2.TRUCK"]],I["S-G-UCFRMT"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M1.MULTIPLE ROCKET LAUNCHER"],t["GR.M2.TOWED"]],I["S-G-UCFT--"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M2.TARGET ACQUISITION"]],I["S-G-UCFTR-"]=[R._translate(-30,10,R._scale(.6,t["GR.IC.FIELD ARTILLERY"])),t["GR.IC.RADAR"]],I["S-G-UCFTS-"]=[R._translate(0,30,R._scale(.7,t["GR.IC.FIELD ARTILLERY"])),t["GR.IC.FF.SOUND"]],I["S-G-UCFTF-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.M1.OPTICAL"],t["GR.M2.TARGET ACQUISITION"]],I["S-G-UCFTC-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.IC.FF.MOTORIZED"],t["GR.IC.FF.RECONNAISSANCE"]],I["S-G-UCFTCD"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.IC.FF.RECONNAISSANCE"]],I["S-G-UCFTCM"]=[R._scale(.8,t["GR.IC.FIELD ARTILLERY"]),t["GR.IC.FF.RECONNAISSANCE"],t["GR.IC.ARMOUR"]],I["S-G-UCFTA-"]=[t["GR.IC.FIELD ARTILLERY"],t["GR.IC.FF.RECONNAISSANCE"],t["GR.IC.AVIATION ROTARY WING"],t["GR.M1.NAVAL"]],I["S-G-UCFM--"]=[t["GR.IC.MORTAR"]],I["S-G-UCFMS-"]=[t["GR.IC.MORTAR"],t["GR.M2.TRACKED"]],I["S-G-UCFMW-"]=I["S-G-UCFMSW"]=[t["GR.IC.MORTAR"],t["GR.M2.TRUCK"]],I["S-G-UCFMT-"]=[t["GR.IC.MORTAR"],t["GR.M2.TOWED"]],I["S-G-UCFMTA"]=[t["GR.IC.MORTAR"],t["GR.M2.TOWED"],t["GR.M2.AIRBORNE"]],I["S-G-UCFMTS"]=[t["GR.IC.MORTAR"],t["GR.M2.TOWED"],t["GR.M1.AIRMOBILE/AIR ASSAULT"]],I["S-G-UCFMTC"]=[t["GR.IC.MORTAR"],t["GR.M2.ARCTIC"]],I["S-G-UCFMTO"]=[t["GR.IC.MORTAR"],t["GR.M2.TOWED"],t["GR.M2.MOUNTAIN"]],I["S-G-UCFML-"]=[R._translate(0,-20,t["GR.IC.MORTAR"]),t["GR.IC.FF.AMPHIBIOUS"]],I["S-G-UCFS--"]=[t["GR.IC.SURVEY"]],I["S-G-UCFSS-"]=[t["GR.IC.SURVEY"],t["GR.M1.AIRMOBILE/AIR ASSAULT"]],I["S-G-UCFSA-"]=[t["GR.IC.SURVEY"],t["GR.M2.AIRBORNE"]],I["S-G-UCFSL-"]=[t["GR.IC.SURVEY"],t["GR.M2.LIGHT"]],I["S-G-UCFSO-"]=[t["GR.IC.SURVEY"],t["GR.M2.MOUNTAIN"]],I["S-G-UCFO--"]=[t["GR.IC.METEOROLOGICAL"]],I["S-G-UCFOS-"]=[t["GR.IC.METEOROLOGICAL"],t["GR.M1.AIRMOBILE/AIR ASSAULT"]],I["S-G-UCFOA-"]=[t["GR.IC.METEOROLOGICAL"],t["GR.M2.AIRBORNE"]],I["S-G-UCFOL-"]=[t["GR.IC.METEOROLOGICAL"],t["GR.M2.LIGHT"]],I["S-G-UCFOO-"]=[t["GR.IC.METEOROLOGICAL"],t["GR.M2.MOUNTAIN"]],I["S-G-UCR---"]=[t["GR.IC.FF.RECONNAISSANCE"]],I["S-G-UCRH--"]=[t["GR.IC.FF.HORSE"]],I["S-G-UCRV--"]=[t["GR.IC.FF.RECONNAISSANCE"],C?t["GR.M2.CAVALRY"]:[]],I["S-G-UCRVA-"]=[t["GR.IC.FF.RECONNAISSANCE"],t["GR.IC.ARMOUR"]],I["S-G-UCRVM-"]=[t["GR.IC.FF.RECONNAISSANCE"],t["GR.IC.FF.MOTORIZED"]],I["S-G-UCRVG-"]=[t["GR.IC.FF.RECONNAISSANCE"]],I["S-G-UCRVO-"]=[t["GR.IC.FF.RECONNAISSANCE"],t["GR.IC.AVIATION ROTARY WING"]],I["S-G-UCRC--"]=[t["GR.IC.FF.RECONNAISSANCE"],t["GR.M2.ARCTIC"]],I["S-G-UCRS--"]=[t["GR.IC.FF.RECONNAISSANCE"],t["GR.M1.AIRMOBILE/AIR ASSAULT"]],I["S-G-UCRA--"]=[t["GR.IC.FF.RECONNAISSANCE"],t["GR.M2.AIRBORNE"]],I["S-G-UCRO--"]=[t["GR.IC.FF.RECONNAISSANCE"],t["GR.M2.MOUNTAIN"]],I["S-G-UCRL--"]=I["S-G-UCRLL-"]=[t["GR.IC.FF.RECONNAISSANCE"],t["GR.M2.LIGHT"]],I["S-G-UCRR--"]=[t["GR.IC.FF.RECONNAISSANCE"],t["GR.IC.FF.AMPHIBIOUS"]],I["S-G-UCRRD-"]=[t["GR.IC.FF.RECONNAISSANCE"],t["GR.IC.FF.AMPHIBIOUS"],C?t["GR.M1.DIVISION"]:[]],I["S-G-UCRRF-"]=[t["GR.IC.FF.RECONNAISSANCE"],t["GR.IC.FF.AMPHIBIOUS"],t["GR.M1.FORCE"]],I["S-G-UCRRL-"]=[t["GR.IC.FF.RECONNAISSANCE"],t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"]],I["S-G-UCRX--"]=[t["GR.IC.FF.RECONNAISSANCE"],C?t["GR.M2.LONG RANGE SURVEILLANCE"]:[R._translate(0,-20,t["GR.M2.MOUNTAIN"]),t["GR.M2.LONG RANGE"]]],I["S-G-UCM---"]=[t["GR.IC.MISSILE"]],I["S-G-UCMT--"]=[t["GR.IC.MISSILE"],t["GR.M2.TACTICAL MISSILE"]],I["S-G-UCMS--"]=[t["GR.IC.MISSILE"],t["GR.M2.STRATEGIC MISSILE"]],I["S-G-UCS---"]=[t["GR.IC.SECURITY"]],I["S-G-UCSW--"]=[R._translate(0,-20,t["GR.IC.SECURITY"]),t["GR.IC.FF.AMPHIBIOUS"]],I["S-G-UCSG--"]=[t["GR.IC.SECURITY"]],I["S-G-UCSGD-"]=[t["GR.IC.SECURITY"],t["GR.IC.FF.INFANTRY"]],I["S-G-UCSGM-"]=[t["GR.IC.SECURITY"],t["GR.IC.FF.MOTORIZED"]],I["S-G-UCSGA-"]=[t["GR.IC.SECURITY"],t["GR.IC.ARMOUR"]],I["S-G-UCSM--"]=[t["GR.IC.SECURITY"],t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"]],I["S-G-UCSR--"]=[t["GR.IC.SECURITY"],t["GR.M2.RAILROAD"]],I["S-G-UCSA--"]=[R._translate(0,-20,t["GR.IC.SECURITY"]),t["GR.IC.AVIATION ROTARY WING"]],I["S-G-F-S---"]=t["GR.IC.SURVEILLANCE"],I["S-G-UU----"]=[t["GR.IC.COMBAT SUPPORT"]],I["S-G-UUA---"]=[t["GR.IC.CBRN"]],I["S-G-UUAC--"]=[t["GR.IC.CBRN"],t["GR.M1.CHEMICAL"]],I["S-G-UUACC-"]=[t["GR.IC.CBRN"],t["GR.M1.SMOKE/DECON"]],I["S-G-UUACCK"]=[t["GR.IC.CBRN"],t["GR.M1.SMOKE/DECON"],t["GR.IC.ARMOUR"]],I["S-G-UUACCM"]=[t["GR.IC.CBRN"],t["GR.M1.SMOKE/DECON"],t["GR.IC.FF.MOTORIZED"]],I["S-G-UUACS-"]=[t["GR.IC.CBRN"],t["GR.M1.SMOKE"]],I["S-G-UUACSM"]=[t["GR.IC.CBRN"],t["GR.M1.SMOKE"],t["GR.IC.FF.MOTORIZED"]],I["S-G-UUACSA"]=[t["GR.IC.CBRN"],t["GR.M1.SMOKE"],t["GR.IC.ARMOUR"]],I["S-G-UUACR-"]=[t["GR.IC.CBRN"],t["GR.M1.CHEMICAL"],t["GR.IC.FF.RECONNAISSANCE"]],I["S-G-UUACRW"]=[t["GR.IC.CBRN"],t["GR.IC.FF.RECONNAISSANCE"],t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"]],I["S-G-UUACRS"]=[t["GR.IC.CBRN"],t["GR.IC.FF.RECONNAISSANCE"],t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"],C?t["GR.M1.CHEMICAL SURVEILLANCE"]:[]],I["S-G-UUAN--"]=[t["GR.IC.CBRN"],t["GR.M1.NUCLEAR"]],I["S-G-UUAB--"]=[t["GR.IC.CBRN"],t["GR.M1.BIOLOGICAL"]],I["S-G-UUABR-"]=[t["GR.IC.CBRN"],t["GR.M1.BIOLOGICAL"],t["GR.IC.FF.MOTORIZED"],t["GR.IC.FF.RECONNAISSANCE"]],I["S-G-UUAD--"]=[t["GR.IC.CBRN"],t["GR.M1.DECONTAMINATION"]],I["S-G-UUADT-"]=[t["GR.IC.CBRN"],t["GR.M1.DECONTAMINATION"],t["GR.M2.TROOP"]],I["S-G-UUADE-"]=[t["GR.IC.CBRN"],t["GR.M1.DECONTAMINATION"],t["GR.M2.EQUIPMENT"]],I["S-G-UUADET"]=[t["GR.IC.CBRN"],t["GR.M1.DECONTAMINATION"],t["GR.M2.EQUIMENT/TROOP"]],I["S-G-UUAL--"]=[t["GR.IC.CBRN"],t["GR.M2.LABORATORY"]],I["S-G-UUM---"]=[t["GR.IC.MILITARY INTELLIGENCE"]],I["S-G-UUMA--"]=[t["GR.IC.MILITARY INTELLIGENCE"],t["GR.M1.UNMANNED AERIAL VEHICLE"]];I["S-G-UUMS--"]=[R._translate(-25,0,t["GR.IC.MILITARY INTELLIGENCE"]),t["GR.IC.RADIO"]],I["S-G-UUMSE-"]=[t["GR.IC.ELECTRONIC WARFARE"]],I["S-G-UUMSEA"]=[t["GR.IC.ELECTRONIC WARFARE"],t["GR.IC.FF.RECONNAISSANCE"],t["GR.IC.ARMOUR"],t["GR.M2.WHEELED"]],I["S-G-UUMSED"]=[t["GR.IC.ELECTRONIC WARFARE"],t["GR.IC.FF.DIRECTION FINDING"]],I["S-G-UUMSEI"]=[t["GR.IC.ELECTRONIC WARFARE"],t["GR.IC.FF.INTERCEPT"]],I["S-G-UUMSEJ"]=[t["GR.IC.ELECTRONIC WARFARE"],t["GR.IC.FF.JAMMING"]],I["S-G-UUMSET"]=[t["GR.IC.ELECTRONIC WARFARE"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-UUMSEC"]=[t["GR.IC.ELECTRONIC WARFARE"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-UUMC--"]=[t["GR.IC.COUNTER-INTELLIGENCE"]],I["S-G-UUMR--"]=[t["GR.IC.MILITARY INTELLIGENCE"]],I["S-G-UUMRG-"]=[t["GR.IC.MILITARY INTELLIGENCE"],t["GR.M1.RADAR"]],I["S-G-UUMRS-"]=[R._translate(0,30,R._scale(.8,t["GR.IC.MILITARY INTELLIGENCE"])),t["GR.IC.FF.SENSOR"]],I["S-G-UUMRSS"]=[R._translate(0,30,R._scale(.8,t["GR.IC.MILITARY INTELLIGENCE"])),t["GR.IC.FF.SENSOR"],t["GR.M1.SENSOR CONTROL MODULE"]],I["S-G-UUMRX-"]=[t["GR.IC.MILITARY INTELLIGENCE"],t["GR.M1.GROUND STATION MODULE"]],I["S-G-UUMMO-"]=[t["GR.IC.MILITARY INTELLIGENCE"],t["GR.M1.METEOROLOGICAL"]],I["S-G-UUMO--"]=[t["GR.IC.MILITARY INTELLIGENCE"],t["GR.M1.OPERATIONS"]],I["S-G-UUMT--"]=[t["GR.IC.MILITARY INTELLIGENCE"],t["GR.M1.TACTICAL EXPLOITATION"]],I["S-G-UUMQ--"]=[t["GR.IC.INTERROGATION"]],I["S-G-UUMJ--"]=[t["GR.IC.JOINT INTELLIGENCE CENTRE"]],I["S-G-UUL---"]=[t["GR.IC.FF.MILITARY POLICE"],t["GR.IC.MILITARY POLICE"]],I["S-G-UULS--"]=[t["GR.IC.SHORE PATROL"]],I["S-G-UULM--"]=[t["GR.IC.MILITARY POLICE"]],I["S-G-UULC--"]=[t["GR.IC.LAW ENFORCEMENT"]],I["S-G-UULF--"]=[R._translate(0,-20,t["GR.IC.SHORE PATROL"]),t["GR.IC.AVIATION FIXED WING"]],I["S-G-UULD--"]=[t["GR.IC.CRIMINAL INVESTIGATION DIVISION"]],I["S-G-UUS---"]=[t["GR.IC.FF.SIGNAL"]],I["S-G-UUSA--"]=[t["GR.IC.FF.SIGNAL"],t["GR.M1.AREA"]],I["S-G-UUSC--"]=[t["GR.IC.FF.SIGNAL"],t["GR.M1.COMMUNICATIONS CONTINGENCY PACKAGE"]],I["S-G-UUSCL-"]=[t["GR.IC.FF.SIGNAL"],t["GR.M1.LARGE COMMUNICATIONS CONTINGENCY PACKAGE"],t["GR.M2.AIRBORNE"]],I["S-G-UUSO--"]=[t["GR.IC.FF.SIGNAL"],t["GR.M1.OPERATIONS"]],I["S-G-UUSF--"]=[t["GR.IC.FF.SIGNAL"],t["GR.M1.FORWARD"]],I["S-G-UUSM--"]=[t["GR.IC.FF.SIGNAL"],t["GR.M1.MOBILE SUBSCRIBER EQUIPMENT"]],I["S-G-UUSMS-"]=[t["GR.IC.FF.SIGNAL"],t["GR.M1.SMALL EXTENSION NODE"]],I["S-G-UUSML-"]=[t["GR.IC.FF.SIGNAL"],t["GR.M1.LARGE EXTENSION NODE"]],I["S-G-UUSMN-"]=[t["GR.IC.FF.SIGNAL"],t["GR.M1.NODE CENTRE"]],I["S-G-UUSR--"]=[t["GR.IC.FF.SIGNAL"],t["GR.IC.RADIO"]],I["S-G-UUSRS-"]=[t["GR.IC.FF.SIGNAL"],t["SP.I.FF.SATELLITE"]],I["S-G-UUSRT-"]=[t["GR.IC.FF.SIGNAL"],t["GR.IC.RADIO TELETYPE CENTRE"]],I["S-G-UUSRW-"]=[t["GR.IC.FF.SIGNAL"],t["GR.IC.RADIO RELAY"]],I["S-G-UUSS--"]=[t["GR.IC.FF.SIGNAL"],t["GR.M1.SIGNAL SUPPORT"]],I["S-G-UUSW--"]=[t["GR.IC.FF.SIGNAL"],t["GR.IC.TELEPHONE SWITCH"]],I["S-G-UUSX--"]=[t["GR.IC.ELECTRONIC RANGING"]],I["S-G-UUI---"]=[t["GR.IC.INFORMATION OPERATIONS"]],I["S-G-UUP---"]=I["S-G-UUX---"]=[t["GR.IC.FF.AMPHIBIOUS"],t["GR.M1.LANDING SUPPORT"]],I["S-G-UUE---"]=[t["GR.IC.EXPLOSIVE ORDNANCE DISPOSAL"]],I["S-G-UUT---"]=[t["GR.IC.TOPOGRAPHIC"]],I["S-G-UUD---"]=[t["GR.IC.DRILLING"]],I["S-G-US----"]=[t["GR.IC.COMBAT SERVICE SUPPORT"]],I["S-G-USA---"]=[t["GR.IC.ADMINISTRATIVE"]],I["S-G-USAT--"]=[t["GR.IC.ADMINISTRATIVE"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USAC--"]=[t["GR.IC.ADMINISTRATIVE"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAJ--"]=[t["GR.IC.JUDGE ADVOCATE GENERAL"]],I["S-G-USAJT-"]=[t["GR.IC.JUDGE ADVOCATE GENERAL"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USAJC-"]=[t["GR.IC.JUDGE ADVOCATE GENERAL"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAO--"]=[t["GR.IC.POSTAL"]],I["S-G-USAOT-"]=[t["GR.IC.POSTAL"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USAOC-"]=[t["GR.IC.POSTAL"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAF--"]=[t["GR.IC.FINANCE"]],I["S-G-USAFT-"]=[t["GR.IC.FINANCE"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USAFC-"]=[t["GR.IC.FINANCE"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAS--"]=[t["GR.IC.PERSONNEL SERVICES"]],I["S-G-USAST-"]=[t["GR.IC.PERSONNEL SERVICES"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USASC-"]=[t["GR.IC.PERSONNEL SERVICES"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAM--"]=[t["GR.IC.MORTUARY AFFAIRS"]],I["S-G-USAMT-"]=[t["GR.IC.MORTUARY AFFAIRS"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USAMC-"]=[t["GR.IC.MORTUARY AFFAIRS"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAR--"]=[t["GR.IC.RELIGIOUS SUPPORT"]],I["S-G-USART-"]=[t["GR.IC.RELIGIOUS SUPPORT"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USARC-"]=[t["GR.IC.RELIGIOUS SUPPORT"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAP--"]=[t["GR.IC.PUBLIC AFFAIRS"]],I["S-G-USAPT-"]=[t["GR.IC.PUBLIC AFFAIRS"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USAPC-"]=[t["GR.IC.PUBLIC AFFAIRS"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAPB-"]=[t["GR.IC.PUBLIC AFFAIRS BROADCAST"]],I["S-G-USAPBT"]=[t["GR.IC.PUBLIC AFFAIRS BROADCAST"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USAPBC"]=[t["GR.IC.PUBLIC AFFAIRS BROADCAST"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAPM-"]=[t["GR.IC.JOINT INFORMATION BUREAU"]],I["S-G-USAPMT"]=[t["GR.IC.JOINT INFORMATION BUREAU"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USAPMC"]=[t["GR.IC.JOINT INFORMATION BUREAU"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAX--"]=[t["GR.IC.REPLACEMENT HOLDING UNIT"]],I["S-G-USAXT-"]=[t["GR.IC.REPLACEMENT HOLDING UNIT"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USAXC-"]=[t["GR.IC.REPLACEMENT HOLDING UNIT"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAL--"]=[t["GR.IC.LABOUR"]],I["S-G-USALT-"]=[t["GR.IC.LABOUR"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USALC-"]=[t["GR.IC.LABOUR"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAW--"]=[t["GR.IC.MORALE, WELFARE, AND RECREATION"]],I["S-G-USAWT-"]=[t["GR.IC.MORALE, WELFARE, AND RECREATION"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USAWC-"]=[t["GR.IC.MORALE, WELFARE, AND RECREATION"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USAQ--"]=[t["GR.IC.QUARTERMASTER"]],I["S-G-USAQT-"]=[t["GR.IC.QUARTERMASTER"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USAQC-"]=[t["GR.IC.QUARTERMASTER"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USM---"]=[t["GR.IC.FF.MEDICAL"]],I["S-G-USMT--"]=[t["GR.IC.FF.MEDICAL THEATER"]],I["S-G-USMC--"]=[t["GR.IC.FF.MEDICAL CORPS"]],I["S-G-USMM--"]=[t["GR.IC.FF.MEDICAL"],t["GR.IC.FF.MEDICAL TREATMENT FACILITY"]],I["S-G-USMMT-"]=[t["GR.IC.FF.MEDICAL THEATER"],t["GR.IC.FF.MEDICAL TREATMENT FACILITY"]],I["S-G-USMMC-"]=[t["GR.IC.FF.MEDICAL CORPS"],t["GR.IC.FF.MEDICAL TREATMENT FACILITY"]],I["S-G-USMV--"]=[t["GR.IC.FF.MEDICAL"],t["GR.M2.VETERINARY"]],I["S-G-USMVT-"]=[t["GR.IC.FF.MEDICAL THEATER"],t["GR.M2.VETERINARY"]],I["S-G-USMVC-"]=[t["GR.IC.FF.MEDICAL CORPS"],t["GR.M2.VETERINARY"]],I["S-G-USMD--"]=[t["GR.IC.FF.MEDICAL"],t["GR.M2.DENTAL"]],I["S-G-USMDT-"]=[t["GR.IC.FF.MEDICAL THEATER"],t["GR.M2.DENTAL"]],I["S-G-USMDC-"]=[t["GR.IC.FF.MEDICAL CORPS"],t["GR.M2.DENTAL"]],I["S-G-USMP--"]=[t["GR.IC.FF.MEDICAL"],t["GR.M2.PSYCHOLOGICAL"]],I["S-G-USMPT-"]=[t["GR.IC.FF.MEDICAL THEATER"],t["GR.M2.PSYCHOLOGICAL"]],I["S-G-USMPC-"]=[t["GR.IC.FF.MEDICAL CORPS"],t["GR.M2.PSYCHOLOGICAL"]],I["S-G-USS---"]=[t["GR.IC.FF.SUPPLY"]],I["S-G-USST--"]=[t["GR.IC.FF.SUPPLY THEATER"]],I["S-G-USSC--"]=[t["GR.IC.FF.SUPPLY CORPS"]],I["S-G-USS1--"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.FF.CLASS I"]],I["S-G-USS1T-"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.FF.CLASS I"]],I["S-G-USS1C-"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.FF.CLASS I"]],I["S-G-USS2--"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.FF.CLASS II"]],I["S-G-USS2T-"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.FF.CLASS II"]],I["S-G-USS2C-"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.FF.CLASS II"]],I["S-G-USS3--"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.FF.CLASS III"]],I["S-G-USS3T-"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.FF.CLASS III"]],I["S-G-USS3C-"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.FF.CLASS III"]],I["S-G-USS3A-"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.FF.CLASS III"],R._translate(25,5,R._scale(.5,t["GR.IC.AVIATION ROTARY WING"]))],I["S-G-USS3AT"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.FF.CLASS III"],R._translate(25,5,R._scale(.5,t["GR.IC.AVIATION ROTARY WING"]))],I["S-G-USS3AC"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.FF.CLASS III"],R._translate(25,5,R._scale(.5,t["GR.IC.AVIATION ROTARY WING"]))],I["S-G-USS4--"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.FF.CLASS IV"]],I["S-G-USS4T-"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.FF.CLASS IV"]],I["S-G-USS4C-"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.FF.CLASS IV"]],I["S-G-USS5--"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.FF.CLASS V"]],I["S-G-USS5T-"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.FF.CLASS V"]],I["S-G-USS5C-"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.FF.CLASS V"]],I["S-G-USS6--"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.FF.CLASS VI"]],I["S-G-USS6T-"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.FF.CLASS VI"]],I["S-G-USS6C-"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.FF.CLASS VI"]],I["S-G-USS7--"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.FF.CLASS VII"]],I["S-G-USS7T-"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.FF.CLASS VII"]],I["S-G-USS7C-"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.FF.CLASS VII"]],I["S-G-USS8--"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.FF.CLASS VIII"]],I["S-G-USS8T-"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.FF.CLASS VIII"]],I["S-G-USS8C-"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.FF.CLASS VIII"]],I["S-G-USS9--"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.FF.CLASS IX"]],I["S-G-USS9T-"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.FF.CLASS IX"]],I["S-G-USS9C-"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.FF.CLASS IX"]],I["S-G-USSX--"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.FF.CLASS X"]],I["S-G-USSXT-"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.FF.CLASS X"]],I["S-G-USSXC-"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.FF.CLASS X"]],I["S-G-USSL--"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.LAUNDRY/BATH"]],I["S-G-USSLT-"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.LAUNDRY/BATH"]],I["S-G-USSLC-"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.LAUNDRY/BATH"]],I["S-G-USSW--"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.WATER"]],I["S-G-USSWT-"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.WATER"]],I["S-G-USSWC-"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.WATER"]],I["S-G-USSWP-"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.WATER PURIFICATION"]],I["S-G-USSWPT"]=[t["GR.IC.FF.SUPPLY THEATER"],t["GR.IC.WATER PURIFICATION"]],I["S-G-USSWPC"]=[t["GR.IC.FF.SUPPLY CORPS"],t["GR.IC.WATER PURIFICATION"]],I["S-G-UST---"]=[t["GR.IC.TRANSPORTATION"]],I["S-G-USTT--"]=[t["GR.IC.FF.THEATRE SUPPORT"],t["GR.IC.TRANSPORTATION"]],I["S-G-USTC--"]=[t["GR.IC.FF.CORPS SUPPORT"],t["GR.IC.TRANSPORTATION"]],I["S-G-USTM--"]=[t["GR.IC.TRANSPORTATION"],t["GR.M1.MOVEMENT CONTROL CENTRE"]],I["S-G-USTMT-"]=[t["GR.IC.FF.THEATRE SUPPORT"],t["GR.IC.TRANSPORTATION"],t["GR.M1.MOVEMENT CONTROL CENTRE"]],I["S-G-USTMC-"]=[t["GR.IC.FF.CORPS SUPPORT"],t["GR.IC.TRANSPORTATION"],t["GR.M1.MOVEMENT CONTROL CENTRE"]],I["S-G-USTR--"]=[t["GR.IC.TRANSPORTATION"],t["GR.M1.RAILROAD"]],I["S-G-USTRT-"]=[t["GR.IC.FF.THEATRE SUPPORT"],t["GR.IC.TRANSPORTATION"],t["GR.M1.RAILROAD"]],I["S-G-USTRC-"]=[t["GR.IC.FF.CORPS SUPPORT"],t["GR.IC.TRANSPORTATION"],t["GR.M1.RAILROAD"]],I["S-G-USTS--"]=[t["GR.IC.TRANSPORTATION"],t["GR.M1.NAVAL"]],I["S-G-USTST-"]=[t["GR.IC.FF.THEATRE SUPPORT"],t["GR.IC.TRANSPORTATION"],t["GR.M1.NAVAL"]],I["S-G-USTSC-"]=[t["GR.IC.FF.CORPS SUPPORT"],t["GR.IC.TRANSPORTATION"],t["GR.M1.NAVAL"]],I["S-G-USTA--"]=[t["GR.IC.TRANSPORTATION"],t["GR.IC.AIRPORT OF DEBARKATION"]],I["S-G-USTAT-"]=[t["GR.IC.FF.THEATRE SUPPORT"],t["GR.IC.TRANSPORTATION"],t["GR.IC.AIRPORT OF DEBARKATION"]],I["S-G-USTAC-"]=[t["GR.IC.FF.CORPS SUPPORT"],t["GR.IC.TRANSPORTATION"],t["GR.IC.AIRPORT OF DEBARKATION"]],I["S-G-USTI--"]=[t["GR.IC.TRANSPORTATION"],t["GR.M1.MISSILE"]],I["S-G-USTIT-"]=[t["GR.IC.FF.THEATRE SUPPORT"],t["GR.IC.TRANSPORTATION"],t["GR.M1.MISSILE"]],I["S-G-USTIC-"]=[t["GR.IC.FF.CORPS SUPPORT"],t["GR.IC.TRANSPORTATION"],t["GR.M1.MISSILE"]],I["S-G-USX---"]=[t["GR.IC.MAINTENANCE"]],I["S-G-USXT--"]=[t["GR.IC.MAINTENANCE"],t["GR.IC.FF.THEATRE SUPPORT"]],I["S-G-USXC--"]=[t["GR.IC.MAINTENANCE"],t["GR.IC.FF.CORPS SUPPORT"]],I["S-G-USXH--"]=[t["GR.IC.MAINTENANCE"],t["GR.M2.HEAVY"]],I["S-G-USXHT-"]=[t["GR.IC.MAINTENANCE"],t["GR.IC.FF.THEATRE SUPPORT"],t["GR.M2.HEAVY"]],I["S-G-USXHC-"]=[t["GR.IC.MAINTENANCE"],t["GR.IC.FF.CORPS SUPPORT"],t["GR.M2.HEAVY"]],I["S-G-USXR--"]=[t["GR.IC.MAINTENANCE"],t["GR.M2.RAILROAD"]],I["S-G-USXRT-"]=[t["GR.IC.MAINTENANCE"],t["GR.IC.FF.THEATRE SUPPORT"],t["GR.M2.RAILROAD"]],I["S-G-USXRC-"]=[t["GR.IC.MAINTENANCE"],t["GR.IC.FF.CORPS SUPPORT"],t["GR.M2.RAILROAD"]],I["S-G-USXO--"]=[t["GR.IC.MAINTENANCE"],t["GR.M1.AMMUNITION"]],I["S-G-USXOT-"]=[t["GR.IC.MAINTENANCE"],t["GR.IC.FF.THEATRE SUPPORT"],t["GR.M1.AMMUNITION"]],I["S-G-USXOC-"]=[t["GR.IC.MAINTENANCE"],t["GR.IC.FF.CORPS SUPPORT"],t["GR.M1.AMMUNITION"]],I["S-G-USXOM-"]=[t["GR.IC.MAINTENANCE"],t["GR.M1.MISSILE"]],I["S-G-USXOMT"]=[t["GR.IC.MAINTENANCE"],t["GR.IC.FF.THEATRE SUPPORT"],t["GR.M1.MISSILE"]],I["S-G-USXOMC"]=[t["GR.IC.MAINTENANCE"],t["GR.IC.FF.CORPS SUPPORT"],t["GR.M1.MISSILE"]],I["S-G-USXE--"]=[t["GR.IC.MAINTENANCE"],t["GR.M1.ELECTRO-OPTICAL"]],I["S-G-USXET-"]=[t["GR.IC.MAINTENANCE"],t["GR.IC.FF.THEATRE SUPPORT"],t["GR.M1.ELECTRO-OPTICAL"]],I["S-G-USXEC-"]=[t["GR.IC.MAINTENANCE"],t["GR.IC.FF.CORPS SUPPORT"],t["GR.M1.ELECTRO-OPTICAL"]],I["S-G-USXBDR"]=[t["GR.IC.MAINTENANCE"],t["GR.M2.BATTLE DAMAGE REPAIR"]],I["S-G-USXPM-"]=[t["GR.IC.MAINTENANCE"],t["GR.M2.PREVENTIVE MAINTENANCE"]],I["S-G-USXP--"]=[t["GR.IC.PIPELINE"]],I["S-G-USXEP-"]=[t["GR.IC.ENVIRONMENTAL PROTECTION"]],I["S-G-UH----"]=[],I["S-G-UH1---"]=[t["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"]],I["S-G-UH2---"]=[t["GR.IC.FF.SUPPLY"],t["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"]],I["S-G-UHGL--"]=I["S-G-GL----"]=[t["GR.IC.LIAISON"]]}},function(I,E,t){t(0);I.exports=function(I,E,t,R){I["S-G-I-----"]=[],I["S-G-IR----"]=[t["GR.IN.IC.RAW MATERIAL PRODUCTION/STORAGE"]],I["S-G-IRM---"]=[t["GR.IN.IC.MINE"]],I["S-G-IRP---"]=[t["GR.IC.FF.CLASS III"]],I["S-G-IRN---"]=[t["GR.IC.CBRN"]],I["S-G-IRNB--"]=[t["GR.IC.CBRN"],t["GR.M1.BIOLOGICAL"]],I["S-G-IRNC--"]=[t["GR.IC.CBRN"],t["GR.M1.CHEMICAL"]],I["S-G-IRNN--"]=[t["GR.IC.CBRN"],t["GR.M1.NUCLEAR"]],I["S-G-IP----"]=[t["GR.IN.IC.PROCESSING FACILITY"]],I["S-G-IPD---"]=[t["GR.IC.CBRN"],t["GR.M1.DECONTAMINATION"]],I["S-G-IE----"]=[t["GR.IC.FF.CLASS IX"]],I["S-G-IU----"]=[t["GR.IN.IC.UTILITY FACILITY"]],I["S-G-IUR---"]=[t["GR.IN.IC.RESEARCH"]],I["S-G-IUT---"]=[t["GR.IN.IC.TELECOMMUNICATIONS"]],I["S-G-IUE---"]=[t["GR.IN.IC.ELECTRIC POWER"]],I["S-G-IUEN--"]=[t["GR.IN.IC.ELECTRIC POWER"],t["GR.IN.IC.ELECTRIC POWER NUCLEAR"]],I["S-G-IUED--"]=[t["GR.IN.IC.ELECTRIC POWER"],t["GR.IN.IC.ELECTRIC POWER DAM"]],I["S-G-IUEF--"]=[t["GR.IN.IC.ELECTRIC POWER"],t["GR.IN.IC.ELECTRIC POWER FOSSIL"]],I["S-G-IUP---"]=[t["GR.IC.WATER"]],I["S-G-IMF---"]=[t["GR.IN.IC.ATOMIC ENERGY"]],I["S-G-IMFA--"]=[t["GR.IN.IC.ATOMIC ENERGY"],t["GR.IN.M2.ATOMIC ENERGY REACTOR"]],I["S-G-IMFP--"]=[t["GR.IN.IC.ATOMIC ENERGY"],t["GR.IN.M2.NUCLEAR MATERIAL PRODUCTION"]],I["S-G-IMFPW-"]=[t["GR.IN.IC.ATOMIC ENERGY WEAPONS GRADE"],t["GR.IN.M2.NUCLEAR MATERIAL PRODUCTION"]],I["S-G-IMFS--"]=[t["GR.IN.IC.ATOMIC ENERGY"],t["GR.IN.M2.NUCLEAR MATERIAL STORAGE"]],I["S-G-IMA---"]=[t["GR.IN.IC.AIRCRAFT PRODUCTION & ASSEMBLY"]],I["S-G-IME---"]=[t["GR.IC.FF.CLASS V"]],I["S-G-IMG---"]=[t["GR.EQ.TANK"]],I["S-G-IMV---"]=[t["GR.IC.MAINTENANCE"]],I["S-G-IMN---"]=[t["GR.EQ.DOZER"]],I["S-G-IMNB--"]=[t["GR.IN.IC.BRIDGE"]],I["S-G-IMC---"]=[t["GR.IC.CBRN"],t["GR.IN.M2.CHEMICAL & BIOLOGICAL WARFARE"]],I["S-G-IMS---"]=[t["GR.IC.NAVAL"],t["GR.IN.M2.SHIP CONSTRUCTION"]],I["S-G-IMM---"]=[t["GR.IC.MISSILE"]],I["S-G-IG----"]=[t["AR.I.GOVERNMENT"]],I["S-G-IB----"]=[t["GR.IN.IC.BASE"]],I["S-G-IBA---"]=[t["GR.IC.TRANSPORTATION"],t["GR.IC.AIRPORT OF DEBARKATION"]],I["S-G-IBN---"]=[t["GR.IC.NAVAL"]],I["S-G-IT----"]=[t["GR.IC.TRANSPORTATION"]],I["S-G-IX----"]=[t["GR.IC.FF.MEDICAL"]],I["S-G-IXH---"]=[t["GR.IC.FF.MEDICAL TREATMENT FACILITY"]],I["S-G-IRR---"]=I["S-G-IRSR--"]=[t["GR.IN.IC.SEA SURFACE INSTALLATION, OIL RIG/PLATFORM"]]}},function(I,E,t){t(0);I.exports=function(I,E,t,R){I["S-S-------"]=[],I["S-S-C-----"]=[t["SE.IC.COMBATANT"]],I["S-S-CL----"]=[t["SE.IC.SURFACE COMBATANT, LINE"]],I["S-S-CLCV--"]=[t["SE.IC.CARRIER"]],I["S-S-CLBB--"]=[t["SE.IC.BATTLESHIP"]],I["S-S-CLCC--"]=[t["SE.IC.CRUISER"]],I["S-S-CLDD--"]=[t["SE.IC.DESTROYER"]],I["S-S-CLFF--"]=[t["SE.IC.FRIGATE"]],I["S-S-CLLL--"]=[t["SE.IC.LITTORAL COMBATANT SHIP"]],I["S-S-CLLLAS"]=[t["SE.IC.LITTORAL COMBATANT SHIP"],t["SE.M1.ANTISUBMARINE WARFARE"]],I["S-S-CLLLMI"]=[t["SE.IC.LITTORAL COMBATANT SHIP"],t["SE.M1.MINE WARFARE"]],I["S-S-CLLLSU"]=[t["SE.IC.LITTORAL COMBATANT SHIP"],t["SE.M1.SURFACE WARFARE"]],I["S-S-CA----"]=[t["SE.IC.AMPHIBIOUS WARFARE SHIP"]],I["S-S-CALA--"]=[R?t["SE.IC.AMPHIBIOUS ASSAULT"]:t["SE.IC.AMPHIBIOUS ASSAULT SHIP, GENERAL"]],I["S-S-CALS--"]=[t["SE.IC.LANDING SHIP"]],I["S-S-CALSM-"]=[t["SE.IC.LANDING SHIP"],t["SE.M2.MEDIUM"]],I["S-S-CALST-"]=[t["SE.IC.LANDING SHIP"],t["SE.M2.TANK"]],I["S-S-CALC--"]=[t["SE.IC.LANDING CRAFT"]],I["S-S-CM----"]=[t["SE.IC.MINE WARFARE VESSEL"]],I["S-S-CMML--"]=[t["SE.IC.MINELAYER"]],I["S-S-CMMS--"]=[t["SE.IC.MINESWEEPER"]],I["S-S-CMMH--"]=[t["SE.IC.MINEHUNTER"]],I["S-S-CMMA--"]=[t["SE.IC.MINE COUNTER MEASURE SUPPORT SHIP"]],I["S-S-CMMD--"]=[t["SE.IC.MINESWEEPER, DRONE"]],I["S-S-CP----"]=[t["SE.IC.PATROL"]],I["S-S-CPSB--"]=[t["SE.IC.PATROL CRAFT"]],I["S-S-CPSU--"]=[t["SE.IC.PATROL ANTI SUBMARINE WARFARE"]],I["S-S-CPSUM-"]=[t["SE.IC.PATROL ANTISHIP MISSILE"]],I["S-S-CPSUT-"]=[t["SE.IC.PATROL TORPEDO"]],I["S-S-CPSUG-"]=[t["SE.IC.PATROL GUN"]],I["S-S-CH----"]=[t["SE.IC.HOVERCRAFT"]],I["S-S-G-----"]=[t["SE.IC.NAVY TASK ORGANIZATION UNIT"]],I["S-S-GF----"]=I["S-S-GT----"]=[t["SE.IC.NAVY TASK FORCE"]],I["S-S-GG----"]=[t["SE.IC.NAVY TASK GROUP"]],I["S-S-GU----"]=[t["SE.IC.NAVY TASK UNIT"]],I["S-S-GE----"]=[t["SE.IC.NAVY TASK ELEMENT"]],I["S-S-GC----"]=[t["SE.IC.CONVOY"]],I["S-S-CD----"]=[t["SE.IC.SEA SURFACE DECOY"]],I["S-S-CU----"]=[t["SE.IC.UNMANNED SURFACE WATER VEHICLE"]],I["S-S-CUM---"]=[t["SE.IC.UNMANNED SURFACE WATER VEHICLE"],t["SE.M1.MINE COUNTERMEASURES"]],I["S-S-CUS---"]=[t["SE.IC.UNMANNED SURFACE WATER VEHICLE"],t["SE.M1.ANTISUBMARINE WARFARE"]],I["S-S-CUN---"]=[t["SE.IC.UNMANNED SURFACE WATER VEHICLE"],t["SE.M1.SURFACE WARFARE"]],I["S-S-CUR---"]=[t["SE.IC.UNMANNED SURFACE WATER VEHICLE"],t["SE.M1.REMOTE MULTI-MISSION VEHIHLE"]],I["S-S-N-----"]=[t["SE.IC.NONCOMBATANT"]],I["S-S-NR----"]=[t["SE.IC.AUXILIARY SHIP"]],I["S-S-NRA---"]=[t["SE.IC.AMMUNITION SHIP"]],I["S-S-NRO---"]=[t["SE.IC.OILER, REPLENISHMENT"]],I["S-S-NF----"]=I["S-S-NFT---"]=[t["SE.IC.TUG, OCEAN GOING"]],I["S-S-NI----"]=[t["SE.IC.INTELLIGENCE COLLECTOR"]],I["S-S-NM----"]=[t["SE.IC.HOSPITAL SHIP"]],I["S-S-NS----"]=[t["SE.IC.SERVICE CRAFT, YARD, GENERAL"]],I["S-S-NR----"]=[t["SE.IC.REPAIR SHIP"]],I["S-S-NTS---"]=[t["SE.IC.SUBMARINE TENDER"]],I["S-S-NH----"]=[t["SE.IC.HOVERCRAFT NONCOMBATANT"]],I["S-S-NS----"]=[t["SE.IC.TUG, HARBOUR"]],I["S-S-XM----"]=[t["SE.IC.MERCHANT SHIP, GENERAL"]],I["S-S-XMC---"]=[t["SE.IC.CARGO, GENERAL"]],I["S-S-XME---"]=I["S-S-XMR---"]=[t["SE.IC.ROLL ON-ROLL OFF"]],I["S-S-XMO---"]=[t["SE.IC.OILER/TANKER"]],I["S-S-XMT---"]=I["S-S-XMTU--"]=[t["SE.IC.TUG, OCEAN GOING CIVILIAN"]],I["S-S-XMF---"]=[t["SE.IC.FERRY"]],I["S-S-XMP---"]=[t["SE.IC.PASSENGER SHIP"]],I["S-S-XMH---"]=[t["SE.IC.TRANSPORT SHIP, HAZARDOUS MATERIAL"]],I["S-S-XMD---"]=[t["SE.IC.DREDGE"]],I["S-S-XMTO--"]=[t["SE.IC.TOW"]],I["S-S-XF----"]=[t["SE.IC.FISHING VESSEL"]],I["S-S-XFDF--"]=[t["SE.IC.DRIFTER"]],I["S-S-XFTR--"]=[t["SE.IC.TRAWLER"]],I["S-S-XFDR--"]=[t["SE.IC.FISHING VESSEL DREDGE"]],I["S-S-XR----"]=[t["SE.IC.LEISURE CRAFT, SAILING BOAT"]],I["S-S-XL----"]=[t["SE.IC.LAW ENFORCEMENT VESSEL"]],I["S-S-XH----"]=[t["SE.IC.HOVERCRAFT CIVILIAN"]],I["S-S-XA----"]=[t["SE.IC.LEISURE CRAFT, MOTORIZED"]],I["S-S-XAR---"]=[t["SE.IC.LEISURE CRAFT, MOTORIZED, RIGID-HULL INFLATABLE BOAT"]],I["S-S-XAS---"]=[t["SE.IC.LEISURE CRAFT, MOTORIZED, SPEEDBOAT"]],I["S-S-XP----"]=[t["SE.IC.LEISURE CRAFT, JETSKI"]],I["S-S-O-----"]=[t["SE.IC.OWN SHIP"]],I["S-S-ED----"]=[t["SE.IC.DITCHED AIRCRAFT"]],I["S-S-EP----"]=[t["SE.IC.PERSON IN WATER"]],I["S-S-EV----"]=[t["SE.IC.DISTRESSED VESSEL"]],I["S-S-ZM----"]=[t["SE.IC.SEA MINELIKE"]],I["S-S-ZN----"]=[t["SE.IC.NAVIGATIONAL"]],I["S-S-ZI----"]=[t["SE.IC.ICEBERG"]]}},function(I,E,t){t(0);I.exports=function(I,E,t,R){I["I-P-SCD---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.SIERRA"],t["SI.M2.DELTA"],t["SI.M3.SPACE"]],I["I-P-SRD---"]=[t["SI.IC.RADAR"],t["SI.M1.DELTA"],t["SI.M2.TANGO"],t["SI.M3.SPACE"]],I["I-P-SRE---"]=[t["SI.IC.RADAR"],t["SI.M1.ECHO"],t["SI.M2.SIERRA"],t["SI.M3.SPACE"]],I["I-P-SRI---"]=[t["SI.IC.RADAR"],t["SI.M1.INDY"],t["SI.M2.FOXTROT"],t["SI.M3.SPACE"]],I["I-P-SRM---"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.FOXTROT"],t["SI.M3.SPACE"]],I["I-P-SRT---"]=[t["SI.IC.RADAR"],t["SI.M1.TANGO"],t["SI.M2.ALPHA"],t["SI.M3.SPACE"]],I["I-P-SRS---"]=[t["SI.IC.RADAR"],t["SI.M1.SIERRA"],t["SI.M2.PAPA"],t["SI.M3.SPACE"]],I["I-P-SRU---"]=[t["SI.IC.RADAR"],t["SI.M1.UNIFORM"],t["SI.M2.NOVEMBER"],t["SI.M3.SPACE"]],I["I-A-SCC---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.CHARLIE"],t["SI.M2.MIKE"]],I["I-A-SCO---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.OSCAR"],t["SI.M2.LIMA"]],I["I-A-SCP---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.PAPA"],t["SI.M2.PAPA"]],I["I-A-SCS---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.SIERRA"],t["SI.M2.UNIFORM"]],I["I-A-SRAI--"]=[t["SI.IC.RADAR"],t["SI.M1.ALPHA"],t["SI.M2.INDY"]],I["I-A-SRAS--"]=[t["SI.IC.RADAR"],t["SI.M1.ALPHA"],t["SI.M2.BRAVO"]],I["I-A-SRC---"]=[t["SI.IC.RADAR"],t["SI.M1.CHARLIE"],t["SI.M2.INDY"]],I["I-A-SRD---"]=[t["SI.IC.RADAR"],t["SI.M1.DELTA"],t["SI.M2.TANGO"]],I["I-A-SRE---"]=[t["SI.IC.RADAR"],t["SI.M1.ECHO"],t["SI.M2.WHISKEY"]],I["I-A-SRF---"]=[t["SI.IC.RADAR"],t["SI.M1.FOXTROT"],t["SI.M2.CHARLIE"]],I["I-A-SRI---"]=[t["SI.IC.RADAR"],t["SI.M1.INDY"],t["SI.M2.FOXTROT"]],I["I-A-SRMA--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.ALPHA"]],I["I-A-SRMD--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.DELTA"]],I["I-A-SRMG--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.GOLF"]],I["I-A-SRMT--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.TANGO"]],I["I-A-SRMF--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.FOXTROT"]],I["I-A-SRTI--"]=[t["SI.IC.RADAR"],t["SI.M1.TANGO"],t["SI.M2.INDY"]],I["I-A-SRTA--"]=[t["SI.IC.RADAR"],t["SI.M1.TANGO"],t["SI.M2.ALPHA"]],I["I-A-SRTT--"]=[t["SI.IC.RADAR"],t["SI.M1.TANGO"],t["SI.M2.TANGO"]],I["I-A-SRU---"]=[t["SI.IC.RADAR"],t["SI.M1.UNIFORM"],t["SI.M2.NOVEMBER"]],I["I-G-SCC---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.CHARLIE"],t["SI.M2.MIKE"],t["SI.M3.GROUND"]],I["I-G-SCO---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.OSCAR"],t["SI.M2.LIMA"],t["SI.M3.GROUND"]],I["I-G-SCP---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.PAPA"],t["SI.M2.PAPA"],t["SI.M3.GROUND"]],I["I-G-SCS---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.SIERRA"],t["SI.M2.UNIFORM"],t["SI.M3.GROUND"]],I["I-G-SCT---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.TANGO"],t["SI.M2.SIERRA"],t["SI.M3.GROUND"]],I["I-G-SRAT--"]=[t["SI.IC.RADAR"],t["SI.M1.ALPHA"],t["SI.M2.TANGO"],t["SI.M3.GROUND"]],I["I-G-SRAA--"]=[t["SI.IC.RADAR"],t["SI.M1.ALPHA"],t["SI.M2.ALPHA"],t["SI.M3.GROUND"]],I["I-G-SRB---"]=[t["SI.IC.RADAR"],t["SI.M1.BRAVO"],t["SI.M2.SIERRA"],t["SI.M3.GROUND"]],I["I-G-SRCS--"]=[t["SI.IC.RADAR"],t["SI.M1.CHARLIE"],t["SI.M2.SIERRA"],t["SI.M3.GROUND"]],I["I-G-SRCA--"]=[t["SI.IC.RADAR"],t["SI.M1.CHARLIE"],t["SI.M2.ALPHA"],t["SI.M3.GROUND"]],I["I-G-SRD---"]=[t["SI.IC.RADAR"],t["SI.M1.DELTA"],t["SI.M2.TANGO"],t["SI.M3.GROUND"]],I["I-G-SRE---"]=[t["SI.IC.RADAR"],t["SI.M1.ECHO"],t["SI.M2.WHISKEY"],t["SI.M3.GROUND"]],I["I-G-SRF---"]=[t["SI.IC.RADAR"],t["SI.M1.FOXTROT"],t["SI.M2.CHARLIE"],t["SI.M3.GROUND"]],I["I-G-SRH---"]=[t["SI.IC.RADAR"],t["SI.M1.HOTEL"],t["SI.M2.FOXTROT"],t["SI.M3.GROUND"]],I["I-G-SRI---"]=[t["SI.IC.RADAR"],t["SI.M1.INDY"],t["SI.M2.FOXTROT"],t["SI.M3.GROUND"]],I["I-G-SRMM--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.ECHO"],t["SI.M3.GROUND"]],I["I-G-SRMA--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.ALPHA"],t["SI.M3.GROUND"]],I["I-G-SRMG--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.GOLF"],t["SI.M3.GROUND"]],I["I-G-SRMT--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.TANGO"],t["SI.M3.GROUND"]],I["I-G-SRMF--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.FOXTROT"],t["SI.M3.GROUND"]],I["I-G-SRS---"]=[t["SI.IC.RADAR"],t["SI.M1.SIERRA"],t["SI.M2.TANGO"],t["SI.M3.GROUND"]],I["I-G-SRTA--"]=[t["SI.IC.RADAR"],t["SI.M1.TANGO"],t["SI.M2.ALPHA"],t["SI.M3.GROUND"]],I["I-G-SRTI--"]=[t["SI.IC.RADAR"],t["SI.M1.TANGO"],t["SI.M2.INDY"],t["SI.M3.GROUND"]],I["I-G-SRTT--"]=[t["SI.IC.RADAR"],t["SI.M1.TANGO"],t["SI.M2.TANGO"],t["SI.M3.GROUND"]],I["I-G-SRU---"]=[t["SI.IC.RADAR"],t["SI.M1.UNIFORM"],t["SI.M2.NOVEMBER"],t["SI.M3.GROUND"]],I["I-S-SCC---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.CHARLIE"],t["SI.M2.MIKE"]],I["I-S-SCO---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.OSCAR"],t["SI.M2.LIMA"]],I["I-S-SCP---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.PAPA"],t["SI.M2.PAPA"]],I["I-S-SCS---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.SIERRA"],t["SI.M2.UNIFORM"]],I["I-S-SRAT--"]=[t["SI.IC.RADAR"],t["SI.M1.ALPHA"],t["SI.M2.TANGO"]],I["I-S-SRAA--"]=[t["SI.IC.RADAR"],t["SI.M1.ALPHA"],t["SI.M2.ALPHA"]],I["I-S-SRCA--"]=[t["SI.IC.RADAR"],t["SI.M1.CHARLIE"],t["SI.M2.ALPHA"]],I["I-S-SRCI--"]=[t["SI.IC.RADAR"],t["SI.M1.CHARLIE"],t["SI.M2.INDY"]],I["I-S-SRD---"]=[t["SI.IC.RADAR"],t["SI.M1.DELTA"],t["SI.M2.TANGO"]],I["I-S-SRE---"]=[t["SI.IC.RADAR"],t["SI.M1.ECHO"],t["SI.M2.WHISKEY"]],I["I-S-SRF---"]=[t["SI.IC.RADAR"],t["SI.M1.FOXTROT"],t["SI.M2.CHARLIE"]],I["I-S-SRH---"]=[t["SI.IC.RADAR"],t["SI.M1.HOTEL"],t["SI.M2.FOXTROT"]],I["I-S-SRI---"]=[t["SI.IC.RADAR"],t["SI.M1.INDY"],t["SI.M2.FOXTROT"]],I["I-S-SRMM--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.ECHO"]],I["I-S-SRMA--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.ALPHA"]],I["I-S-SRMG--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.GOLF"]],I["I-S-SRMT--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.TANGO"]],I["I-S-SRMF--"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.FOXTROT"]],I["I-S-SRS---"]=[t["SI.IC.RADAR"],t["SI.M1.SIERRA"],t["SI.M2.SIERRA"]],I["I-S-SRTA--"]=[t["SI.IC.RADAR"],t["SI.M1.TANGO"],t["SI.M2.ALPHA"]],I["I-S-SRTI--"]=[t["SI.IC.RADAR"],t["SI.M1.TANGO"],t["SI.M2.INDY"]],I["I-S-SRTT--"]=[t["SI.IC.RADAR"],t["SI.M1.TANGO"],t["SI.M2.TANGO"]],I["I-S-SRU---"]=[t["SI.IC.RADAR"],t["SI.M1.UNIFORM"],t["SI.M2.NOVEMBER"]],I["I-U-SCO---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.OSCAR"],t["SI.M2.LIMA"]],I["I-U-SCP---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.PAPA"],t["SI.M2.PAPA"]],I["I-U-SCS---"]=[t["SI.IC.COMMUNICATIONS"],t["SI.M1.SIERRA"],t["SI.M2.UNIFORM"]],I["I-U-SRD---"]=[t["SI.IC.RADAR"],t["SI.M1.DELTA"],t["SI.M2.TANGO"]],I["I-U-SRE---"]=[t["SI.IC.RADAR"],t["SI.M1.ECHO"],t["SI.M2.WHISKY"]],I["I-U-SRM---"]=[t["SI.IC.RADAR"],t["SI.M1.MIKE"],t["SI.M2.FOXTROT"]],I["I-U-SRS---"]=[t["SI.IC.RADAR"],t["SI.M1.SIERRA"],t["SI.M2.SIERRA"]],I["I-U-SRT---"]=[t["SI.IC.RADAR"],t["SI.M1.TANGO"],t["SI.M2.ALPHA"]],I["I-U-SRU---"]=[t["SI.IC.RADAR"],t["SI.M1.UNIFORM"],t["SI.M2.NOVEMBER"]]}},function(I,E,t){var R=t(0);I.exports=function(I,E,t,C){I["S-F-------"]=[t["AR.I.SPECIAL OPERATIONS FORCES"]],I["S-F-A-----"]=[t["AR.I.MILITARY ROTARY WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"]],I["S-F-AF----"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"]],I["S-F-AFA---"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["SOF.M2.ATTACK"]],I["S-F-AFK---"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["SOF.M2.REFUEL"]],I["S-F-AFU---"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["SOF.M2.UTILITY"]],I["S-F-AFUL--"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["AIR.M2.LIGHT"]],I["S-F-AFUM--"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["AIR.M2.MEDIUM"]],I["S-F-AFUH--"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["AIR.M2.HEAVY"]],I["S-F-AV----"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["SOF.M2.VSTOL"]],I["S-F-AH----"]=[t["GR.IC.AVIATION ROTARY WING"],C?'<line x1="100" y1="100" x2="100" y2="140" />':"",t["AIR.M1.SPECIAL OPERATIONS FORCES"]],I["S-F-AHH---"]=[t["GR.IC.AVIATION ROTARY WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["SOF.M2.COMBAT SEARCH AND RESCUE"]],I["S-F-AHA---"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["SOF.M2.ATTACK"]],I["S-F-AHU---"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["SOF.M2.UTILITY"]],I["S-F-AHUL--"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["AIR.M2.LIGHT"]],I["S-F-AHUM--"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["AIR.M2.MEDIUM"]],I["S-F-AHUH--"]=[t["AR.I.MILITARY FIXED WING"],t["AIR.M1.SPECIAL OPERATIONS FORCES"],t["AIR.M2.HEAVY"]],I["S-F-SN----"]=I["S-F-N-----"]=[t["GR.IC.NAVAL"],t["AIR.M1.SPECIAL OPERATIONS FORCES"]],I["S-F-SNS---"]=I["S-F-NS----"]=[t["GR.IC.SEA-AIR-LAND"]],I["S-F-SNU---"]=I["S-F-NU----"]=[t["SOF.IC.UNDERWATER DEMOLITION TEAM"]],I["S-F-SNB---"]=I["S-F-NB----"]=[t["SE.IC.COMBATANT"],t["AIR.M1.SPECIAL OPERATIONS FORCES"]],I["S-F-SNN---"]=I["S-F-NN----"]=[t["SU.IC.SUBMARINE NUCLEAR PROPULSION"],t["AIR.M1.SPECIAL OPERATIONS FORCES"]],I["S-F-G-----"]=[t["GR.IC.FF.INFANTRY"],t["AR.I.SPECIAL OPERATIONS FORCES"]],I["S-F-GS----"]=[t["GR.IC.SPECIAL FORCES"]],I["S-F-GR----"]=I["S-F-GSR---"]=[t["GR.IC.FF.INFANTRY"],t["AIR.M1.RECONNAISSANCE"],t["GR.M2.AIRBORNE"]],I["S-F-GP----"]=I["S-F-GSP---"]=[t["GR.EQ.PSYCHOLOGICAL OPERATIONS EQUIPMENT"]],I["S-F-GPA---"]=I["S-F-GSPA--"]=[t["GR.EQ.PSYCHOLOGICAL OPERATIONS EQUIPMENT"],R._translate(0,-30,R._scale(.7,t["AR.I.MILITARY FIXED WING"]))],I["S-F-GC----"]=I["S-F-GCA---"]=[t["GR.IC.CIVIL AFFAIRS"]],I["S-F-GB----"]=I["S-F-B-----"]=[t["AR.I.SPECIAL OPERATIONS FORCES"],t["GR.M2.SUPPORT"]]}},function(I,E,t){t(0);I.exports=function(I,E,t,R){I["S-P-------"]=[],I["S-P-S-----"]=[t["SP.I.FF.SATELLITE"]],I["S-P-V-----"]=[t["SP.I.FF.CREWED SPACE VEHICLE"]],I["S-P-T-----"]=[t["SP.I.FF.SPACE STATION"]],I["S-P-L-----"]=[t["SP.I.SPACE LAUNCH VEHICLE"]]}},function(I,E,t){t(0);I.exports=function(I,E,t,R){I["O-V-A-----"]=[t["ST.IC.ARSON/FIRE"]],I["O-V-M-----"]=[t["ST.IC.KILLING VICTIM"]],I["O-V-MA----"]=[t["ST.IC.KILLING VICTIM"],t["ST.M1.MURDER"]],I["O-V-MB----"]=[t["ST.IC.KILLING VICTIM"],t["ST.M1.EXECUTION (WRONGFUL KILLING)"]],I["O-V-MC----"]=[t["ST.IC.KILLING VICTIM"],t["ST.M1.ASSASSINATION"]],I["O-V-B-----"]=[t["ST.IC.BOMB"]],I["O-V-Y-----"]=[t["ST.IC.BOOBY TRAP"]],I["O-V-D-----"]=[t["ST.IC.DRIVE-BY SHOOTING"]],I["O-V-S-----"]=[t["ST.IC.SNIPING"]],I["O-V-P-----"]=[t["ST.IC.POISONING"]],I["O-V-E-----"]=[t["ST.IC.EXPLOSION"]],I["O-V-EI----"]=[t["ST.IC.EXPLOSION"],t["ST.IC.IED"]],I["O-L-B-----"]=[t["ST.IC.BLACK LIST LOCATION"]],I["O-L-G-----"]=[t["ST.IC.GRAY LIST LOCATION"]],I["O-L-W-----"]=[t["ST.IC.WHITE LIST LOCATION"]],I["O-L-M-----"]=[t["ST.IC.MASS GRAVE LOCATION"]],I["O-O-P-----"]=[t["ST.IC.PATROLLING"]],I["O-O-RW----"]=[t["ST.IC.INDIVIDUAL"],t["ST.M1.WILLING"]],I["O-O-RC----"]=[t["ST.IC.INDIVIDUAL"],t["ST.M1.COERCED/IMPRESSED"]],I["O-O-D-----"]=[t["ST.IC.DEMONSTRATION"]],I["O-O-M-----"]=[t["ST.IC.MINE LAYING"]],I["O-O-Y-----"]=[t["ST.IC.PSYCHOLOGICAL OPERATIONS"]],I["O-O-YT----"]=[t["ST.IC.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS"]],I["O-O-YW----"]=[t["ST.IC.PSYCHOLOGICAL OPERATIONS"],t["ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS"]],I["O-O-YH----"]=[t["ST.IC.PSYCHOLOGICAL OPERATIONS"],t["ST.M1.HOUSE-TO-HOUSE"]],I["O-O-F-----"]=[t["ST.IC.SEARCHING"]],I["O-O-S-----"]=[t["ST.IC.SPY"]],I["O-O-O-----"]=[t["ST.IC.FOOD DISTRIBUTION"]],I["O-O-E-----"]=[t["ST.IC.EXTORTION"]],I["O-O-HT----"]=[t["ST.IC.KNOWN INSURGENT VEHICLE"],t["ST.M1.HIJACKING/HIJACKED"]],I["O-O-HA----"]=[t["ST.IC.HIJACKING (AIRPLANE)"],t["ST.M1.HIJACKING/HIJACKED"]],I["O-O-HV----"]=[t["ST.IC.HIJACKING (BOAT)"],t["ST.M1.HIJACKING/HIJACKED"]],I["O-O-K-----"]=[t["ST.IC.INDIVIDUAL"],t["ST.M1.KIDNAPPING"]],I["O-O-KA----"]=[t["ST.IC.INDIVIDUAL"],t["ST.M1.KIDNAPPING"],t["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]],I["O-O-A-----"]=[t["ST.IC.ARREST"]],I["O-O-U-----"]=[t["ST.IC.DRUG RELATED ACTIVITIES"]],I["O-O-C-----"]=[t["ST.IC.COMPOSITE LOSS"]],I["O-O-CA----"]=[t["ST.IC.COMPOSITE LOSS"],t["ST.M1.COMBAT"]],I["O-O-CB----"]=[t["ST.IC.COMPOSITE LOSS"],t["ST.M1.ACCIDENT"]],I["O-O-CC----"]=[t["ST.IC.COMPOSITE LOSS"],t["ST.M1.OTHER"]],I["O-I-R-----"]=[t["ST.IC.GROUP"]],I["O-I-S-----"]=[t["ST.IC.SAFE HOUSE"]],I["O-I-G-----"]=[t["ST.IC.GRAFFITI"]],I["O-I-V-----"]=[t["ST.IC.VANDALISM/LOOT/RANSACK/PLUNDER/SACK"]],I["O-I-I-----"]=[t["ST.IC.KNOWN INSURGENT VEHICLE"]],I["O-I-D-----"]=[t["ST.IC.KNOWN INSURGENT VEHICLE"],t["ST.M1.DRUG"]],I["O-I-F-----"]=[t["ST.IC.INTERNAL SECURITY FORCE"]],I["O-P-------"]=[t["ST.IC.INDIVIDUAL"]],I["O-P-A-----"]=[t["ST.IC.INDIVIDUAL"],t["ST.M1.LEADER"]],I["O-P-B-----"]=[t["ST.IC.INDIVIDUAL"],t["ST.M1.TARGETED"]],I["O-P-C-----"]=[t["ST.IC.INDIVIDUAL"],t["ST.M1.TERRORIST"]],I["O-G-------"]=[t["ST.IC.GROUP"]],I["O-G-A-----"]=[t["ST.IC.GROUP"],t["ST.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES"]],I["O-G-B-----"]=[t["ST.IC.GROUP"],t["ST.M1.NONGOVERNMENTAL ORGANIZATION (NGO)"]],I["O-G-C-----"]=[t["ST.IC.GROUP"],t["ST.M1.TERRORIST"]],I["O-G-D-----"]=[t["ST.IC.GROUP"],t["ST.M1.RELIGIOUS"]],I["O-G-E-----"]=[t["ST.IC.GROUP"],t["ST.M1.FOREIGN FIGHTERS"]],I["O-G-F-----"]=[t["ST.IC.GROUP"],t["ST.M1.GANG"]],I["O-R-------"]=[t["ST.IC.INDIVIDUAL"],t["ST.M1.RAPE"]],I["O-R-A-----"]=[t["ST.IC.INDIVIDUAL"],t["ST.M1.RAPE"],t["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]]}},function(I,E,t){t(0);I.exports=function(I,E,t,R){I["S-U-------"]=[],I["S-U-S-----"]=[t["SU.IC.SUBMARINE"]],I["S-U-SF----"]=[t["SU.IC.SUBMARINE, SURFACED"]],I["S-U-SB----"]=[t["SU.IC.SUBMARINE, BOTTOMED"]],I["S-U-SR----"]=[t["SU.IC.SUBMARINE"],t["SU.M2.CERTSUB"]],I["S-U-SX----"]=[t["SU.IC.NON-SUBMARINE"]],I["S-U-SN----"]=[t["SU.IC.SUBMARINE NUCLEAR PROPULSION"]],I["S-U-SNF---"]=[t["SU.IC.SUBMARINE NUCLEAR PROPULSION, SURFACED"]],I["S-U-SNA---"]=[t["SU.IC.SUBMARINE NUCLEAR PROPULSION"],t["SU.IC.SUBMARINE ATTACK (SSN)"]],I["S-U-SNM---"]=[t["SU.IC.SUBMARINE NUCLEAR PROPULSION"],t["SU.IC.SUBMARINE MISSILE (TYPE UNKNOWN)"]],I["S-U-SNG---"]=[t["SU.IC.SUBMARINE NUCLEAR PROPULSION"],t["SU.IC.SUBMARINE GUIDED MISSILE (SSGN)"]],I["S-U-SNB---"]=[t["SU.IC.SUBMARINE NUCLEAR PROPULSION"],t["SU.IC.SUBMARINE BALLISTIC MISSILE (SSBN)"]],I["S-U-SC----"]=[t["SU.IC.SUBMARINE CONVENTIONAL PROPULSION"]],I["S-U-SCF---"]=[t["SU.IC.SUBMARINE CONVENTIONAL PROPULSION, SURFACED"]],I["S-U-SCA---"]=[t["SU.IC.SUBMARINE CONVENTIONAL PROPULSION"],t["SU.IC.SUBMARINE ATTACK (SSN)"]],I["S-U-SCM---"]=[t["SU.IC.SUBMARINE CONVENTIONAL PROPULSION"],t["SU.IC.SUBMARINE MISSILE (TYPE UNKNOWN)"]],I["S-U-SCG---"]=[t["SU.IC.SUBMARINE CONVENTIONAL PROPULSION"],t["SU.IC.SUBMARINE GUIDED MISSILE (SSGN)"]],I["S-U-SCB---"]=[t["SU.IC.SUBMARINE CONVENTIONAL PROPULSION"],t["SU.IC.SUBMARINE BALLISTIC MISSILE (SSBN)"]],I["S-U-SO----"]=[t["SU.IC.OTHER SUBMERSIBLE"]],I["S-U-SOF---"]=[t["SU.IC.OTHER SUBMERSIBLE, SURFACED"]],I["S-U-SU----"]=[t["SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"]],I["S-U-SUM---"]=[t["SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"],t["SU.M1.MINE COUNTERMEASURES"]],I["S-U-SUS---"]=[t["SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"],t["SU.M1.ANTISUBMARINE WARFARE"]],I["S-U-SUN---"]=[t["SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"],t["SU.M1.SURFACE WARFARE"]],I["S-U-S1----"]=[t["SU.IC.SUBMARINE"],t["SU.M1.POSSIBLE SUBMARINE - LOW 1"]],I["S-U-S2----"]=[t["SU.IC.SUBMARINE"],t["SU.M1.POSSIBLE SUBMARINE - LOW 2"]],I["S-U-S3----"]=[t["SU.IC.SUBMARINE"],t["SU.M1.POSSIBLE SUBMARINE - HIGH 3"]],I["S-U-S4----"]=[t["SU.IC.SUBMARINE"],t["SU.M1.POSSIBLE SUBMARINE - HIGH 4"]],I["S-U-SL----"]=[t["SU.IC.SUBMARINE"],t["SU.M1.PROBABLE SUBMARINE"]],I["S-U-SK----"]=[t["SU.IC.SUBMARINE, SNORKELING"]],I["S-U-W-----"]=[t["SU.IC.UNDERWATER WEAPON"]],I["S-U-WT----"]=[t["SU.IC.TORPEDO"]],I["S-U-WM----"]=[t["SU.IC.SEA MINE"]],I["S-U-WMD---"]=[t["SU.IC.SEA MINE NEUTRALIZED"]],I["S-U-WMG---"]=[t["SU.IC.SEA MINE - BOTTOM"]],I["S-U-WMGD--"]=[t["SU.IC.SEA MINE NEUTRALIZED - BOTTOM"]],I["S-U-WMGX--"]=[t["SU.IC.SEA MINE EXERCISE MINE - BOTTOM"]],I["S-U-WMGE--"]=[t["SU.IC.SEA MINE MILEC - BOTTOM"]],I["S-U-WMGC--"]=[t["SU.IC.SEA MINE MILCO - BOTTOM"]],I["S-U-WMGR--"]=[t["SU.IC.SEA MINE NEGATIVE REACQUISITION - BOTTOM"]],I["S-U-WMGO--"]=[t["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - BOTTOM"]],I["S-U-WMM---"]=[t["SU.IC.SEA MINE - MOORED"]],I["S-U-WMMD--"]=[t["SU.IC.SEA MINE NEUTRALIZED - MOORED"]],I["S-U-WMMX--"]=[t["SU.IC.SEA MINE EXERCISE MINE - MOORED"]],I["S-U-WMME--"]=[t["SU.IC.SEA MINE MILEC - MOORED"]],I["S-U-WMMC--"]=[t["SU.IC.SEA MINE MILCO - MOORED"]],I["S-U-WMMR--"]=[t["SU.IC.SEA MINE NEGATIVE REACQUISITION - MOORED"]],I["S-U-WMMO--"]=[t["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - MOORED"]],I["S-U-WMF---"]=[t["SU.IC.SEA MINE - FLOATING"]],I["S-U-WMFD--"]=[t["SU.IC.SEA MINE NEUTRALIZED - FLOATING"]],I["S-U-WMFX--"]=[t["SU.IC.SEA MINE EXERCISE MINE - FLOATING"]],I["S-U-WMFE--"]=[t["SU.IC.SEA MINE MILEC - FLOATING"]],I["S-U-WMFC--"]=[t["SU.IC.SEA MINE MILCO - FLOATING"]],I["S-U-WMFR--"]=[t["SU.IC.SEA MINE NEGATIVE REACQUISITION - FLOATING"]],I["S-U-WMFO--"]=[t["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - FLOATING"]],I["S-U-WMO---"]=[t["SU.IC.SEA MINE (IN OTHER POSITION)"]],I["S-U-WMOD--"]=[t["SU.IC.SEA MINE (IN OTHER POSITION) NEUTRALIZED"]],I["S-U-WMX---"]=[t["SU.IC.SEA MINE EXERCISE MINE"]],I["S-U-WME---"]=[t["SU.IC.SEA MINE MILEC"]],I["S-U-WMA---"]=[t["SU.IC.SEA MINE MINE ANCHOR"]],I["S-U-WMC---"]=[t["SU.IC.SEA MINE MILCO"]],I["S-U-WMR---"]=[t["SU.IC.SEA MINE NEGATIVE REACQUISITION"]],I["S-U-WMB---"]=[t["SU.IC.SEA MINE GENERAL OBSTRUCTOR"]],I["S-U-WMBD--"]=[t["SU.IC.SEA MINE GENERAL OBSTRUCTOR NEUTRALIZED"]],I["S-U-WMN---"]=[t["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"]],I["S-U-WMS---"]=[t["SU.IC.SEA MINE - RISING"]],I["S-U-WMSX--"]=[t["SU.IC.SEA MINE EXERCISE MINE - RISING"]],I["S-U-WMSD--"]=[t["SU.IC.SEA MINE NEUTRALIZED - RISING"]],I["S-U-WV----"]=[t["SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"]],I["S-U-WD----"]=[t["SU.IC.UNDERWATER DECOY"]],I["S-U-WDM---"]=[t["SU.IC.SEA MINE DECOY"]],I["S-U-WDMG--"]=[t["SU.IC.SEA MINE DECOY, BOTTOM/GROUND"]],I["S-U-WDMM--"]=[t["SU.IC.SEA MINE DECOY, MOORED"]],I["S-U-N-----"]=[t["SU.IC.NON-SUBMARINE"]],I["S-U-ND----"]=[t["SU.IC.DIVER, CIVILIAN"]],I["S-U-E-----"]=[t["SU.IC.ENVIRONMENTAL REPORT LOCATION"]],I["S-U-V-----"]=[t["SU.IC.DIVE REPORT LOCATION"]],I["S-U-X-----"]=[t["SU.IC.UNEXPLODED EXPLOSIVE ORDNANCE"]],I["S-U-NBS---"]=[t["SU.IC.SEABED INSTALLATION/MANMADE"]],I["S-U-NBR---"]=[t["SU.IC.SEABED ROCK/STONE, OBSTACLE, OTHER"]],I["S-U-NBW---"]=[t["SU.IC.WRECK"]],I["S-U-NM----"]=[t["SU.IC.MARINE LIFE"]],I["S-U-NA----"]=[t["SU.IC.SEA ANOMALY"]]}},function(I,E){I.exports=function(I,E,t,R){I["G-T-D-----"]=t["TP.DESTROY"],E["G-T-D-----"]={x1:0,x2:200,y1:40,y2:160},I["G-T-I-----"]=t["TP.INTERDICT"],E["G-T-I-----"]={x1:0,x2:200,y1:40,y2:160},I["G-T-N-----"]=t["TP.NEUTRALIZE"],E["G-T-N-----"]={x1:0,x2:200,y1:40,y2:160},I["G-G-GPUUD-"]=t["TP.DATUM"],E["G-G-GPUUD-"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPUUB-"]=t["TP.BRIEF CONTACT"],E["G-G-GPUUB-"]={x1:50,x2:150,y1:0,y2:100},I["G-G-GPUUL-"]=t["TP.LOST CONTACT"],E["G-G-GPUUL-"]={x1:50,x2:150,y1:0,y2:100},I["G-G-GPUUS-"]=t["TP.SINKER"],E["G-G-GPUUS-"]={x1:50,x2:150,y1:0,y2:100},I["G-G-GPUY--"]=t["TP.SONOBUOY"],E["G-G-GPUY--"]={x1:60,x2:140,y1:-10,y2:160},I["G-G-GPUYP-"]=t["TP.SONOBUOY PATTERN CENTER"],E["G-G-GPUYP-"]={x1:60,x2:140,y1:-10,y2:160},I["G-G-GPUYD-"]=t["TP.SONOBUOY DIFAR"],E["G-G-GPUYD-"]={x1:60,x2:140,y1:-10,y2:160},I["G-G-GPUYL-"]=t["TP.SONOBUOY LOFAR"],E["G-G-GPUYL-"]={x1:60,x2:140,y1:-10,y2:160},I["G-G-GPUYC-"]=t["TP.SONOBUOY CASS"],E["G-G-GPUYC-"]={x1:60,x2:140,y1:-10,y2:160},I["G-G-GPUYS-"]=t["TP.SONOBUOY DICASS"],E["G-G-GPUYS-"]={x1:60,x2:140,y1:-10,y2:160},I["G-G-GPUYB-"]=t["TP.SONOBUOY BT"],E["G-G-GPUYB-"]={x1:60,x2:140,y1:-10,y2:160},I["G-G-GPUYA-"]=t["TP.SONOBUOY ANM"],E["G-G-GPUYA-"]={x1:60,x2:140,y1:-10,y2:160},I["G-G-GPUYV-"]=t["TP.SONOBUOY VLAD"],E["G-G-GPUYV-"]={x1:60,x2:140,y1:-10,y2:160},I["G-G-GPUYT-"]=t["TP.SONOBUOY ATAC"],E["G-G-GPUYT-"]={x1:60,x2:140,y1:-10,y2:160},I["G-G-GPUYR-"]=t["TP.SONOBUOY RO"],E["G-G-GPUYR-"]={x1:60,x2:140,y1:-10,y2:160},I["G-G-GPUYK-"]=t["TP.SONOBUOY KINGPIN"],E["G-G-GPUYK-"]={x1:60,x2:140,y1:-10,y2:160},I["G-G-GPUYX-"]=t["TP.SONOBUOY EXPIRED"],E["G-G-GPUYX-"]={x1:40,x2:160,y1:-10,y2:160},I["G-G-GPUS--"]=t["TP.SEARCH"],E["G-G-GPUS--"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPUSA-"]=t["TP.SEARCH AREA"],E["G-G-GPUSA-"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPUSD-"]=t["TP.DIP POSITION"],E["G-G-GPUSD-"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPUSC-"]=t["TP.SEARCH CENTER"],E["G-G-GPUSC-"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPR---"]=t["TP.REFERENCE POINT"],E["G-G-GPR---"]={x1:40,x2:160,y1:40,y2:160},I["G-G-GPRN--"]=t["TP.NAVIGATIONAL REFERENCE"],E["G-G-GPRN--"]={x1:40,x2:160,y1:40,y2:160},I["G-G-GPRS--"]=t["TP.SPECIAL POINT"],E["G-G-GPRS--"]={x1:40,x2:160,y1:40,y2:160},I["G-G-GPRD--"]=t["TP.DLRP"],E["G-G-GPRD--"]={x1:40,x2:160,y1:40,y2:160},I["G-G-GPRP--"]=t["TP.POINT OF INTENDED MOVEMENT"],E["G-G-GPRP--"]={x1:40,x2:160,y1:40,y2:160},I["G-G-GPRM--"]=t["TP.MARSHALL POINT"],E["G-G-GPRM--"]={x1:40,x2:160,y1:40,y2:160},I["G-G-GPRW--"]=t["TP.REFERENCE POINT WAYPOINT"],E["G-G-GPRW--"]={x1:40,x2:160,y1:40,y2:160},I["G-G-GPRC--"]=t["TP.CORRIDOR TAB"],E["G-G-GPRC--"]={x1:40,x2:160,y1:40,y2:160},I["G-G-GPRI--"]=t["TP.POINT OF INTEREST"],E["G-G-GPRI--"]={x1:50,x2:150,y1:-25},I["G-G-GPWA--"]=t["TP.AIM POINT"],E["G-G-GPWA--"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPWD--"]=t["TP.DROP POINT"],E["G-G-GPWD--"]={x1:50,x2:150,y1:50,y2:120},I["G-G-GPWE--"]=t["TP.ENTRY POINT"],E["G-G-GPWE--"]={x1:50,x2:150,y1:50},I["G-G-GPWG--"]=t["TP.GROUND ZERO"],E["G-G-GPWG--"]={x1:50,x2:150,y1:30},I["G-G-GPWM--"]=t["TP.MSL DETECT POINT"],E["G-G-GPWM--"]={x1:50,x2:150,y1:30},I["G-G-GPWI--"]=t["TP.IMPACT POINT"],E["G-G-GPWI--"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPWP--"]=t["TP.PREDICTED IMPACT POINT"],E["G-G-GPWP--"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPF---"]=t["TP.FORMATION"],E["G-G-GPF---"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPH---"]=t["TP.HARBOR"],E["G-G-GPH---"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPHQ--"]=t["TP.HARBOR POINT Q"],E["G-G-GPHQ--"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPHA--"]=t["TP.HARBOR POINT A"],E["G-G-GPHA--"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPHY--"]=t["TP.HARBOR POINT Y"],E["G-G-GPHY--"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPHX--"]=t["TP.HARBOR POINT X"],E["G-G-GPHX--"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPO---"]=t["TP.ROUTE"],E["G-G-GPO---"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPOZ--"]=t["TP.ROUTE RENDEZVOUS"],E["G-G-GPOZ--"]={x1:30,x2:170,y1:60,y2:170},I["G-G-GPOD--"]=t["TP.ROUTE DIVERSIONS"],E["G-G-GPOD--"]={x1:30,x2:170,y1:60,y2:170},I["G-G-GPOW--"]=t["TP.ROUTE WAYPOINT"],E["G-G-GPOW--"]={x1:30,x2:170,y1:60,y2:170},I["G-G-GPOP--"]=t["TP.ROUTE PIM"],E["G-G-GPOP--"]={x1:30,x2:170,y1:60,y2:170},I["G-G-GPOR--"]=t["TP.ROUTE POINT R"],E["G-G-GPOR--"]={x1:30,x2:170,y1:60,y2:170},I["G-G-GPA---"]=t["TP.AIR CONTROL POINT"],E["G-G-GPA---"]={x1:60,x2:140,y1:40,y2:160},I["G-G-GPAP--"]=t["TP.COMBAT AIR PATROL (CAP)"],E["G-G-GPAP--"]={x1:60,x2:140,y1:40,y2:160},I["G-G-GPAW--"]=t["TP.AIRBORNE EARLY WARNING (AEW)"],E["G-G-GPAW--"]={x1:60,x2:140,y1:40,y2:160},I["G-G-GPAK--"]=t["TP.TANKING"],E["G-G-GPAK--"]={x1:60,x2:140,y1:40,y2:160},I["G-G-GPAA--"]=t["TP.FIXED WING"],E["G-G-GPAA--"]={x1:60,x2:140,y1:40,y2:160},I["G-G-GPAH--"]=t["TP.ROTARY WING"],E["G-G-GPAH--"]={x1:60,x2:140,y1:40,y2:160},I["G-G-GPAB--"]=t["TP.SUCAP - FIXED WING"],E["G-G-GPAB--"]={x1:60,x2:140,y1:40,y2:160},I["G-G-GPAC--"]=t["TP.SUCAP - ROTARY WING"],E["G-G-GPAC--"]={x1:60,x2:140,y1:40,y2:160},I["G-G-GPAD--"]=t["TP.MIW - FIXED WING"],E["G-G-GPAD--"]={x1:60,x2:140,y1:40,y2:160},I["G-G-GPAE--"]=t["TP.MIW - ROTARY WING"],E["G-G-GPAE--"]={x1:60,x2:140,y1:40,y2:160},I["G-G-GPAS--"]=t["TP.STRIKE IP"],E["G-G-GPAS--"]={x1:60,x2:140,y1:30,y2:170},I["G-G-GPAT--"]=t["TP.TACAN"],E["G-G-GPAT--"]={x1:60,x2:140,y1:30,y2:170},I["G-G-GPAO--"]=t["TP.TOMCAT"],E["G-G-GPAO--"]={x1:60,x2:140,y1:30,y2:170},I["G-G-GPAR--"]=t["TP.RESCUE"],E["G-G-GPAR--"]={x1:60,x2:140,y1:30,y2:170},I["G-G-GPAL--"]=t["TP.REPLENISH"],E["G-G-GPAL--"]={x1:60,x2:140,y1:30,y2:170},I["G-G-GPAF--"]=t["TP.UNMANNED AERIAL SYSTEM"],E["G-G-GPAF--"]={x1:60,x2:140,y1:30,y2:170},I["G-G-GPAG--"]=t["TP.VTUA"],E["G-G-GPAG--"]={x1:60,x2:140,y1:30,y2:170},I["G-G-GPAI--"]=t["TP.ORBIT"],E["G-G-GPAI--"]={x1:60,x2:140,y1:30,y2:170},I["G-G-GPAJ--"]=t["TP.ORBIT - FIGURE EIGHT"],E["G-G-GPAJ--"]={x1:60,x2:140,y1:30,y2:170},I["G-G-GPAM--"]=t["TP.ORBIT - RACE TRACK"],E["G-G-GPAM--"]={x1:60,x2:140,y1:30,y2:170},I["G-G-GPAN--"]=t["TP.ORBIT - RANDOM, CLOSED"],E["G-G-GPAN--"]={x1:60,x2:140,y1:30,y2:170},I["G-G-GPP---"]=t["TP.ACTION POINT"],E["G-G-GPP---"]={x1:60,x2:140,y1:-60},I["G-G-GPPK--"]=t["TP.ACTION CHECK POINT"],E["G-G-GPPK--"]={x1:60,x2:140,y1:-60},I["G-G-GPPC--"]=t["TP.CONTACT POINT"],E["G-G-GPPC--"]={x1:55,x2:145,y1:-10},I["G-G-GPPO--"]=t["TP.COORDINATION POINT"],E["G-G-GPPO--"]={x1:50,x2:150,y1:50,y2:150},I["G-G-GPPD--"]=t["TP.DECISION POINT"],E["G-G-GPPD--"]={x1:30,x2:170,y1:25,y2:160},I["G-G-GPPL--"]=t["TP.ACTION LINKUP POINT"],E["G-G-GPPL--"]={x1:60,x2:140,y1:-60},I["G-G-GPPP--"]=t["TP.ACTION PASSAGE POINT"],E["G-G-GPPP--"]={x1:60,x2:140,y1:-60},I["G-G-GPPR--"]=t["TP.ACTION RALLY POINT"],E["G-G-GPPR--"]={x1:60,x2:140,y1:-60},I["G-G-GPPE--"]=t["TP.ACTION RELEASE POINT"],E["G-G-GPPE--"]={x1:60,x2:140,y1:-60},I["G-G-GPPS--"]=t["TP.ACTION START POINT"],E["G-G-GPPS--"]={x1:60,x2:140,y1:-60},I["G-G-GPPA--"]=t["TP.ACTION AMNESTY POINT"],E["G-G-GPPA--"]={x1:60,x2:140,y1:-60},I["G-G-GPPW--"]=t["TP.WAYPOINT"],E["G-G-GPPW--"]={x1:60,x2:140,y1:60,y2:140},I["G-G-GPC---"]=t["TP.SEA SURFACE CONTROL STATION"],E["G-G-GPC---"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCU--"]=t["TP.(USV) CONTROL STATION"],E["G-G-GPCU--"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCUR-"]=t["TP.(RMV) USV CONTROL STATION"],E["G-G-GPCUR-"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCUA-"]=t["TP.USV - ASW CONTROL STATION"],E["G-G-GPCUA-"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCUS-"]=t["TP.USV - SUW CONTROL STATION"],E["G-G-GPCUS-"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCUM-"]=t["TP.USV - MIW CONTROL STATION"],E["G-G-GPCUM-"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCA--"]=t["TP.ASW CONTROL STATION"],E["G-G-GPCA--"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCS--"]=t["TP.SUW CONTROL STATION"],E["G-G-GPCS--"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCM--"]=t["TP.MIW CONTROL STATION"],E["G-G-GPCM--"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCP--"]=t["TP.PICKET CONTROL STATION"],E["G-G-GPCP--"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCR--"]=t["TP.RENDEZVOUS CONTROL POINT"],E["G-G-GPCR--"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCC--"]=t["TP.RESCUE CONTROL POINT"],E["G-G-GPCC--"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCE--"]=t["TP.REPLENISHMENT CONTROL POINT"],E["G-G-GPCE--"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPCN--"]=t["TP.NONCOMBATANT CONTROL STATION"],E["G-G-GPCN--"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPB---"]=t["TP.SUB SURFACE CONTROL STATION"],E["G-G-GPB---"]={x1:30,x2:170,y1:60,y2:140};I["G-G-GPBU--"]=t["TP.(UUV) CONTROL STATION"],E["G-G-GPBU--"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPBUA-"]=t["TP.UUV - ASW CONTROL STATION"],E["G-G-GPBUA-"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPBUS-"]=t["TP.UUV - SUW CONTROL STATION"],E["G-G-GPBUS-"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPBUM-"]=t["TP.UUV - MIW CONTROL STATION"],E["G-G-GPBUM-"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPBS--"]=t["TP.SUBMARINE CONTROL STATION"],E["G-G-GPBS--"]={x1:30,x2:170,y1:60,y2:140},I["G-G-GPBSA-"]=t["TP.ASW SUBMARINE CONTROL STATION"],E["G-G-GPBSA-"]={x1:30,x2:170,y1:60,y2:140},I["G-G-APP---"]=t["TP.AIR CONTROL POINT (ACP)"],E["G-G-APP---"]={x1:50,x2:150,y1:50,y2:150},I["G-G-APC---"]=t["TP.COMMUNICATIONS CHECKPOINT"],E["G-G-APC---"]={x1:50,x2:150,y1:50,y2:150},I["G-G-APU---"]=t["TP.PULL-UP POINT"],E["G-G-APU---"]={x1:50,x2:240,y1:50,y2:150},I["G-G-APD---"]=t["TP.DOWNED AIRCREW PICKUP POINT"],E["G-G-APD---"]={x1:60,x2:140,y1:-60},I["G-G-PN----"]=t["TP.DUMMY MINEFIELD"],E["G-G-PN----"]={x1:40,x2:160,y1:-10,y2:140},I["G-G-DPT---"]=t["TP.TARGET REFERENCE"],I["G-G-DPO---"]=t["TP.OBSERVATION POST/OUTPOST"],E["G-G-DPO---"]={x1:50,x2:150,y1:40,y2:150},I["G-G-DPOC--"]=t["TP.COMBAT OUTPOST"],E["G-G-DPOC--"]={x1:50,x2:150,y1:40,y2:150},I["G-G-DPOR--"]=t["TP.OBSERVATION POST/RECONNAISSANCE"],E["G-G-DPOR--"]={x1:50,x2:150,y1:40,y2:150},I["G-G-DPOF--"]=t["TP.FORWARD OBSERVER POSITION"],E["G-G-DPOF--"]={x1:50,x2:150,y1:40,y2:150},I["G-G-DPOS--"]=t["TP.SENSOR OUTPOST"],E["G-G-DPOS--"]={x1:50,x2:150,y1:40,y2:150},I["G-G-DPON--"]=t["TP.CBRN OBSERVATION POST"],E["G-G-DPON--"]={x1:50,x2:150,y1:40,y2:150},I["G-G-OPP---"]=t["TP.POINT OF DEPARTURE"],E["G-G-OPP---"]={x1:60,x2:140,y1:-60},I["G-M-OAOF--"]=t["TP.FIXED AND PREFABRICATED"],E["G-M-OAOF--"]={x1:60,x2:140,y1:30},I["G-M-OAOM--"]=t["TP.TETRAHEDRONS"],E["G-M-OAOM--"]={x1:60,x2:140,y1:30},I["G-M-OAOP--"]=t["TP.TETRAHEDRONS MOVABLE"],E["G-M-OAOP--"]={x1:60,x2:140,y1:30},I["G-M-OB----"]=t["TP.BOOBY TRAP"],I["G-M-OMU---"]=t["TP.UNSPECIFIED MINE"],I["G-M-OMT---"]=t["TP.ANTITANK MINE (AT)"],I["G-M-OMD---"]=t["TP.(AT) ANTIHANDLING DEVICE"],E["G-M-OMD---"]={x1:60,x2:140,y1:40,y2:195},I["G-M-OME---"]=t["TP.(AT) DIRECTIONAL"],E["G-M-OME---"]={x1:60,x2:140,y1:10,y2:140},I["G-M-OMP---"]=t["TP.ANTIPERSONNEL (AP) MINES"],I["G-M-OMW---"]=t["TP.WIDE AREA MINES"],I["G-M-OFS---"]=t["TP.MINEFIELDS STATIC"],E["G-M-OFS---"]={x1:40,x2:160,y1:60,y2:140},I["G-M-OHTL--"]=t["TP.TOWER LOW"],E["G-M-OHTL--"]={x1:50,x2:150,y1:30,y2:120},I["G-M-OHTH--"]=t["TP.TOWER HIGH"],E["G-M-OHTH--"]={x1:50,x2:150,y1:30,y2:120},I["G-M-BCP---"]=t["TP.ENGINEER REGULATING POINT"],E["G-M-BCP---"]={x1:60,x2:140,y1:-60},I["G-M-SE----"]=t["TP.EARTHWORK/FORTIFICATION"],I["G-M-SF----"]=t["TP.FORT"],I["G-M-SS----"]=t["TP.SURFACE SHELTER"],I["G-M-SU----"]=t["TP.UNDERGROUND SHELTER"],I["G-M-NZ----"]=t["TP.NUCLEAR DETONATIONS GROUND ZERO"],E["G-M-NZ----"]={x1:60,x2:140,y1:-20},I["G-M-NF----"]=t["TP.NUCLEAR FALLOUT PRODUCING"],E["G-M-NF----"]={x1:50,x2:150,y1:-20},I["G-M-NEB---"]=t["TP.RELEASE EVENTS BIOLOGICAL"],E["G-M-NEB---"]={x1:-10,x2:140,y1:-20},I["G-M-NEC---"]=t["TP.RELEASE EVENTS CHEMICAL"],E["G-M-NEC---"]={x1:-20,x2:140,y1:-20},I["G-M-NDP---"]=t["TP.DECON SITE/POINT"],E["G-M-NDP---"]={x1:60,x2:140,y1:-60},I["G-M-NDA---"]=t["TP.ALTERNATE DECON SITE/POINT"],E["G-M-NDA---"]={x1:60,x2:140,y1:-60},I["G-M-NDT---"]=t["TP.DECON SITE/POINT (TROOPS)"],E["G-M-NDT---"]={x1:60,x2:140,y1:-60},I["G-M-NDE---"]=t["TP.DECON SITE/POINT (EQUIPMENT)"],E["G-M-NDE---"]={x1:60,x2:140,y1:-60},I["G-M-NDB---"]=t["TP.DECON SITE/POINT (EQUIPMENT AND TROOPS)"],E["G-M-NDB---"]={x1:60,x2:140,y1:-60},I["G-M-NDO---"]=t["TP.DECON SITE/POINT (OPERATIONAL DECONTAMINATION)"],E["G-M-NDO---"]={x1:60,x2:140,y1:-60},I["G-M-NDD---"]=t["TP.DECON SITE/POINT (THOROUGH DECONTAMINATION)"],E["G-M-NDD---"]={x1:60,x2:140,y1:-60},I["G-F-PTS---"]=t["TP.POINT/SINGLE TARGET"],I["G-F-PTN---"]=t["TP.NUCLEAR TARGET"],I["G-F-PCF---"]=t["TP.FIRE SUPPORT STATION"],I["G-F-PCS---"]=t["TP.SURVEY CONTROL POINT"],E["G-F-PCS---"]={x1:60,x2:140,y1:-60},I["G-F-PCB---"]=t["TP.FIRING POINT"],E["G-F-PCB---"]={x1:60,x2:140,y1:-60},I["G-F-PCR---"]=t["TP.RELOAD POINT"],E["G-F-PCR---"]={x1:60,x2:140,y1:-60},I["G-F-PCH---"]=t["TP.HIDE POINT"],E["G-F-PCH---"]={x1:60,x2:140,y1:-60},I["G-F-PCL---"]=t["TP.LAUNCH POINT"],E["G-F-PCL---"]={x1:60,x2:140,y1:-60},I["G-S-PX----"]=t["TP.AMBULANCE EXCHANGE POINT"],E["G-S-PX----"]={x1:60,x2:140,y1:-60},I["G-S-PC----"]=t["TP.CANNIBALIZATION POINT"],E["G-S-PC----"]={x1:60,x2:140,y1:-60},I["G-S-PY----"]=t["TP.CASUALTY COLLECTION POINT"],E["G-S-PY----"]={x1:60,x2:140,y1:-60},I["G-S-PT----"]=t["TP.CIVILIAN COLLECTION POINT"],E["G-S-PT----"]={x1:60,x2:140,y1:-60},I["G-S-PD----"]=t["TP.DETAINEE COLLECTION POINT"],E["G-S-PD----"]={x1:60,x2:140,y1:-60},I["G-S-PE----"]=t["TP.EPW COLLECTION POINT"],E["G-S-PE----"]={x1:60,x2:140,y1:-60},I["G-S-PL----"]=t["TP.LOGISTICS RELEASE POINT"],E["G-S-PL----"]={x1:60,x2:140,y1:-60},I["G-S-PM----"]=t["TP.MAINTENANCE COLLECTION POINT"],E["G-S-PM----"]={x1:60,x2:140,y1:-60},I["G-S-PR----"]=t["TP.REARM, REFUEL AND RESUPPLY POINT"],E["G-S-PR----"]={x1:60,x2:140,y1:-60},I["G-S-PU----"]=t["TP.REFUEL ON THE MOVE POINT"],E["G-S-PU----"]={x1:60,x2:140,y1:-60},I["G-S-PO----"]=t["TP.TRAFFIC CONTROL POST"],E["G-S-PO----"]={x1:60,x2:140,y1:-60},I["G-S-PI----"]=t["TP.TRAILER TRANSFER POINT"],E["G-S-PI----"]={x1:60,x2:140,y1:-60},I["G-S-PN----"]=t["TP.UNIT MAINTENANCE COLLECTION POINT"],E["G-S-PN----"]={x1:60,x2:140,y1:-60},I["G-S-PSZ---"]=t["TP.SUPPLY POINT"],E["G-S-PSZ---"]={x1:60,x2:140,y1:-60},I["G-S-PSA---"]=t["TP.SP CLASS I"],E["G-S-PSA---"]={x1:60,x2:140,y1:-60},I["G-S-PSB---"]=t["TP.SP CLASS II"],E["G-S-PSB---"]={x1:60,x2:140,y1:-60},I["G-S-PSC---"]=t["TP.SP CLASS III"],E["G-S-PSC---"]={x1:60,x2:140,y1:-60},I["G-S-PSD---"]=t["TP.SP CLASS IV"],E["G-S-PSD---"]={x1:60,x2:140,y1:-60},I["G-S-PSE---"]=t["TP.SP CLASS V"],E["G-S-PSE---"]={x1:60,x2:140,y1:-60},I["G-S-PSF---"]=t["TP.SP CLASS VI"],E["G-S-PSF---"]={x1:60,x2:140,y1:-60},I["G-S-PSG---"]=t["TP.SP CLASS VII"],E["G-S-PSG---"]={x1:60,x2:140,y1:-60},I["G-S-PSH---"]=t["TP.SP CLASS VIII"],E["G-S-PSH---"]={x1:60,x2:140,y1:-60},I["G-S-PSI---"]=t["TP.SP CLASS IX"],E["G-S-PSI---"]={x1:60,x2:140,y1:-60},I["G-S-PSJ---"]=t["TP.SP CLASS X"],E["G-S-PSJ---"]={x1:60,x2:140,y1:-60},I["G-S-PAS---"]=t["TP.AMMUNITION SUPPLY POINT (ASP)"],E["G-S-PAS---"]={x1:60,x2:140,y1:-60},I["G-S-PAT---"]=t["TP.AMMUNITION TRANSFER POINT (ATP)"],E["G-S-PAT---"]={x1:60,x2:140,y1:-60},I["G-O-ED----"]=t["TP.DITCHED AIRCRAFT"],I["G-O-EP----"]=t["TP.PERSON IN WATER"],I["G-O-EV----"]=t["TP.DISTRESSED VESSEL"],I["G-O-HM----"]=t["TP.SEA MINELIKE"],E["G-O-HM----"]={x1:40,x2:160,y1:40,y2:150},I["G-O-HI----"]=t["TP.ICEBERG"],E["G-O-HI----"]={x1:50,x2:150,y1:50,y2:150},I["G-O-HO----"]=t["TP.OIL RIG/PLATFORM"],E["G-O-HO----"]={x1:30,x2:170,y1:60,y2:140},I["G-O-SB----"]=t["TP.BOTTOM RETURN"],E["G-O-SB----"]={x1:40,x2:160,y1:40,y2:100},I["G-O-SBM---"]=t["TP.INSTALLATION/MANMADE"],E["G-O-SBM---"]={x1:40,x2:160,y1:40,y2:100},I["G-O-SBN---"]=t["TP.BOTTOM RETURN"],E["G-O-SBN---"]={x1:40,x2:160,y1:40,y2:100},I["G-O-SBW---"]=t["TP.WRECK, NON DANGEROUS"],E["G-O-SBW---"]={x1:40,x2:160,y1:70,y2:130},I["G-O-SBX---"]=t["TP.WRECK, DANGEROUS"],E["G-O-SBX---"]={x1:40,x2:160,y1:70,y2:130},I["G-O-SM----"]=t["TP.MARINE LIFE"],E["G-O-SM----"]={x1:100,x2:220,y1:70,y2:130},I["G-O-SS----"]=t["TP.SEA ANOMALY"],E["G-O-SS----"]={x1:50,x2:150,y1:30,y2:120},I["G-O-FA----"]=t["TP.FIX ACOUSTIC"],I["G-O-FE----"]=t["TP.FIX ELECTRO-MAGNETIC"],I["G-O-FO----"]=t["TP.FIX ELECTRO-OPTICAL"]}},function(I,E){I.exports=function(I,E,t,R){I["G-T-GD----"]=t["TP.DESTROY"],E["G-T-GD----"]={x1:0,x2:200,y1:40,y2:160},I["G-T-GI----"]=t["TP.INTERDICT"],E["G-T-GI----"]={x1:0,x2:200,y1:40,y2:160},I["G-T-GN----"]=t["TP.NEUTRALIZE"],E["G-T-GN----"]={x1:0,x2:200,y1:40,y2:160},I["G-C-MGPFE-"]=t["TP.FIX ELECTRO-MAGNETIC"],I["G-C-MGPFA-"]=t["TP.FIX ACOUSTIC"],I["G-C-MGPFO-"]=t["TP.FIX ELECTRO-OPTICAL"],I["G-C-MGPI--"]=t["TP.POINT OF INTEREST"],E["G-C-MGPI--"]={x1:50,x2:150,y1:-25},I["G-C-MAAP--"]=t["TP.AIR CONTROL POINT (ACP)"],E["G-C-MAAP--"]={x1:50,x2:150,y1:50,y2:150},I["G-C-MAAC--"]=t["TP.COMMUNICATIONS CHECKPOINT"],E["G-C-MAAC--"]={x1:50,x2:150,y1:50,y2:150},I["G-C-MAAU--"]=t["TP.PULL-UP POINT"],E["G-C-MAAU--"]={x1:50,x2:240,y1:50,y2:150},I["G-C-MAAD--"]=t["TP.DOWNED AIRCREW PICKUP POINT"],E["G-C-MAAD--"]={x1:60,x2:140,y1:-60},I["G-C-MDN---"]=t["TP.DUMMY MINEFIELD"],E["G-C-MDN---"]={x1:40,x2:160,y1:-10,y2:140},I["G-C-MMPT--"]=t["TP.TARGET REFERENCE"],I["G-C-MMPO--"]=t["TP.OBSERVATION POST/OUTPOST"],E["G-C-MMPO--"]={x1:50,x2:150,y1:40,y2:150},I["G-C-MMPOC-"]=t["TP.COMBAT OUTPOST"],E["G-C-MMPOC-"]={x1:50,x2:150,y1:40,y2:150},I["G-C-MMPOR-"]=t["TP.OBSERVATION POST/RECONNAISSANCE"],E["G-C-MMPOR-"]={x1:50,x2:150,y1:40,y2:150},I["G-C-MMPOF-"]=t["TP.FORWARD OBSERVER POSITION"],E["G-C-MMPOF-"]={x1:50,x2:150,y1:40,y2:150},I["G-C-MMPOS-"]=t["TP.SENSOR OUTPOST"],E["G-C-MMPOS-"]={x1:50,x2:150,y1:40,y2:150},I["G-C-MMPON-"]=t["TP.CBRN OBSERVATION POST"],E["G-C-MMPON-"]={x1:50,x2:150,y1:40,y2:150},I["G-C-MOPD--"]=t["TP.POINT OF DEPARTURE"],E["G-C-MOPD--"]={x1:60,x2:140,y1:-60},I["G-C-BOATD-"]=t["TP.FIXED AND PREFABRICATED"],E["G-C-BOATD-"]={x1:60,x2:140,y1:30},I["G-C-BOAB--"]=t["TP.BOOBY TRAP"],I["G-C-BOAMA-"]=t["TP.ANTIPERSONNEL (AP) MINES"],I["G-C-BOAMT-"]=t["TP.ANTITANK MINE (AT)"],I["G-C-BOAMD-"]=t["TP.(AT) ANTIHANDLING DEVICE"],E["G-C-BOAMD-"]={x1:60,x2:140,y1:40,y2:195},I["G-C-BOAMC-"]=t["TP.(AT) DIRECTIONAL"],E["G-C-BOAMC-"]={x1:60,x2:140,y1:10,y2:140},I["G-C-BOAMU-"]=t["TP.UNSPECIFIED MINE"],I["G-C-BOAMW-"]=t["TP.WIDE AREA MINES"],I["G-C-BOAIP-"]=t["TP.PLANNED MINEFIELD"],E["G-C-BOAIP-"]={x1:40,x2:160,y1:60,y2:140},I["G-C-BOAIC-"]=t["TP.MINEFIELDS STATIC"],E["G-C-BOAIC-"]={x1:40,x2:160,y1:60,y2:140},I["G-C-BOAIN-"]=t["TP.ANTITANK (AT) MINEFIELD"],E["G-C-BOAIN-"]={x1:40,x2:160,y1:60,y2:140},I["G-C-BOAIS-"]=t["TP.SCATTERABLE MINES"],E["G-C-BOAIS-"]={x1:40,x2:160,y1:20,y2:140},I["G-C-BOAIH-"]=t["TP.ANTIPERSONNEL (AP) MINEFIELD"],E["G-C-BOAIH-"]={x1:40,x2:160,y1:20,y2:140},I["G-C-BOAID-"]=t["TP.SCATTERABLE MINEFIELD WITH SELF-DESTRUCT"],E["G-C-BOAID-"]={x1:40,x2:160,y1:20,y2:140},I["G-C-BOAV--"]=t["TP.VOLCANO MINEFIELD"],E["G-C-BOAV--"]={x1:40,x2:160,y1:20,y2:140},I["G-C-BYCG--"]=t["TP.ENGINEER REGULATING POINT"],E["G-C-BYCG--"]={x1:60,x2:140,y1:-60},I["G-C-BSE---"]=t["TP.EARTHWORK/FORTIFICATION"],I["G-C-BSF---"]=t["TP.FORT"],I["G-C-BSH---"]=t["TP.SURFACE SHELTER"],I["G-C-BSU---"]=t["TP.UNDERGROUND SHELTER"],I["G-C-BWN---"]=t["TP.NUCLEAR DETONATIONS GROUND ZERO"],E["G-C-BWN---"]={x1:60,x2:140,y1:-20},I["G-C-BWE---"]=t["TP.NUCLEAR DETONATIONS GROUND ZERO"],E["G-C-BWE---"]={x1:60,x2:140,y1:-20},I["G-C-BWI---"]=t["TP.NUCLEAR DETONATIONS GROUND ZERO PLANNED"],E["G-C-BWI---"]={x1:60,x2:140,y1:-20},I["G-C-BWF---"]=t["TP.NUCLEAR DETONATIONS GROUND ZERO PLANNED"],E["G-C-BWF---"]={x1:60,x2:140,y1:-20},I["G-C-BWP---"]=t["TP.NUCLEAR FALLOUT PRODUCING"],E["G-C-BWP---"]={x1:50,x2:150,y1:-20},I["G-C-BWDP--"]=t["TP.DECON SITE/POINT"],E["G-C-BWDP--"]={x1:60,x2:140,y1:-60},I["G-C-BWDA--"]=t["TP.ALTERNATE DECON SITE/POINT"],E["G-C-BWDA--"]={x1:60,x2:140,y1:-60},I["G-C-BWDT--"]=t["TP.DECON SITE/POINT (TROOPS)"],E["G-C-BWDT--"]={x1:60,x2:140,y1:-60},I["G-C-BWDE--"]=t["TP.DECON SITE/POINT (EQUIPMENT)"],E["G-C-BWDE--"]={x1:60,x2:140,y1:-60},I["G-C-BWDS--"]=t["TP.DECON SITE/POINT (EQUIPMENT AND TROOPS)"],E["G-C-BWDS--"]={x1:60,x2:140,y1:-60},I["G-C-BWDO--"]=t["TP.DECON SITE/POINT (OPERATIONAL DECONTAMINATION)"],E["G-C-BWDO--"]={x1:60,x2:140,y1:-60},I["G-C-BWDG--"]=t["TP.DECON SITE/POINT (THOROUGH DECONTAMINATION)"],E["G-C-BWDG--"]={x1:60,x2:140,y1:-60},I["G-C-BWDEM-"]=t["TP.DECON POINT (MAIN) EQUIPMENT"],E["G-C-BWDEM-"]={x1:60,x2:140,y1:-60},I["G-C-BWDTF-"]=t["TP.DECON POINT (FORWARD) TROOPS"],E["G-C-BWDTF-"]={x1:60,x2:140,y1:-60},I["G-C-FSTP--"]=t["TP.POINT/SINGLE TARGET"],I["G-C-FSS---"]=t["TP.FIRE SUPPORT STATION"],I["G-C-FAU---"]=t["TP.NUCLEAR TARGET"],I["G-C-SPA---"]=t["TP.AMBULANCE EXCHANGE POINT"],E["G-C-SPA---"]={x1:60,x2:140,y1:-60},I["G-C-SPC---"]=t["TP.CANNIBALIZATION POINT"],E["G-C-SPC---"]={x1:60,x2:140,y1:-60},I["G-C-SPY---"]=t["TP.CASUALTY COLLECTION POINT"],E["G-C-SPY---"]={x1:60,x2:140,y1:-60},I["G-C-SPT---"]=t["TP.CIVILIAN COLLECTION POINT"],E["G-C-SPT---"]={x1:60,x2:140,y1:-60},I["G-C-SPD---"]=t["TP.DETAINEE COLLECTION POINT"],E["G-C-SPD---"]={x1:60,x2:140,y1:-60},I["G-C-SPE---"]=t["TP.EPW COLLECTION POINT"],E["G-C-SPE---"]={x1:60,x2:140,y1:-60},I["G-C-SPL---"]=t["TP.LOGISTICS RELEASE POINT"],E["G-C-SPL---"]={x1:60,x2:140,y1:-60},I["G-C-SPM---"]=t["TP.MAINTENANCE COLLECTION POINT"],E["G-C-SPM---"]={x1:60,x2:140,y1:-60},I["G-C-SPR---"]=t["TP.REARM, REFUEL AND RESUPPLY POINT"],E["G-C-SPR---"]={x1:60,x2:140,y1:-60},I["G-C-SPU---"]=t["TP.REFUEL ON THE MOVE POINT"],E["G-C-SPU---"]={x1:60,x2:140,y1:-60},I["G-C-SPO---"]=t["TP.TRAFFIC CONTROL POST"],E["G-C-SPO---"]={x1:60,x2:140,y1:-60},I["G-C-SPI---"]=t["TP.TRAILER TRANSFER POINT"],E["G-C-SPI---"]={x1:60,x2:140,y1:-60},I["G-C-SPN---"]=t["TP.UNIT MAINTENANCE COLLECTION POINT"],E["G-C-SPN---"]={x1:60,x2:140,y1:-60},I["G-C-SPQT--"]=t["TP.SUPPLY POINT"],E["G-C-SPQT--"]={x1:60,x2:140,y1:-60},I["G-C-SPQA--"]=t["TP.SP CLASS I"],E["G-C-SPQA--"]={x1:60,x2:140,y1:-60},I["G-C-SPQB--"]=t["TP.SP CLASS II"],E["G-C-SPQB--"]={x1:60,x2:140,y1:-60},I["G-C-SPQC--"]=t["TP.SP CLASS III"],E["G-C-SPQC--"]={x1:60,x2:140,y1:-60},I["G-C-SPQD--"]=t["TP.SP CLASS IV"],E["G-C-SPQD--"]={x1:60,x2:140,y1:-60},I["G-C-SPQE--"]=t["TP.SP CLASS V"],E["G-C-SPQE--"]={x1:60,x2:140,y1:-60},I["G-C-SPQF--"]=t["TP.SP CLASS VI"],E["G-C-SPQF--"]={x1:60,x2:140,y1:-60},I["G-C-SPQG--"]=t["TP.SP CLASS VII"],E["G-C-SPQG--"]={x1:60,x2:140,y1:-60},I["G-C-SPQH--"]=t["TP.SP CLASS VIII"],E["G-C-SPQH--"]={x1:60,x2:140,y1:-60},I["G-C-SPQI--"]=t["TP.SP CLASS IX"],E["G-C-SPQI--"]={x1:60,x2:140,y1:-60},I["G-C-SPQJ--"]=t["TP.SP CLASS X"],E["G-C-SPQJ--"]={x1:60,x2:140,y1:-60},I["G-C-SPMA--"]=t["TP.AMMUNITION SUPPLY POINT (ASP)"],E["G-C-SPMA--"]={x1:60,x2:140,y1:-60},I["G-C-SPMT--"]=t["TP.AMMUNITION TRANSFER POINT (ATP)"],E["G-C-SPMT--"]={x1:60,x2:140,y1:-60},I["G-C-OX----"]=t["TP.SPECIAL POINT"],E["G-C-OX----"]={x1:40,x2:160,y1:40,y2:160},I["G-C-OXRN--"]=t["TP.NAVIGATIONAL REFERENCE"],E["G-C-OXRN--"]={x1:40,x2:160,y1:40,y2:160},I["G-C-OXUD--"]=t["TP.DATUM"],E["G-C-OXUD--"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OXUB--"]=t["TP.BRIEF CONTACT"],E["G-C-OXUB--"]={x1:50,x2:150,y1:0,y2:100},I["G-C-OXUL--"]=t["TP.LOST CONTACT"],E["G-C-OXUL--"]={x1:50,x2:150,y1:0,y2:100},I["G-C-OXUS--"]=t["TP.SINKER"],E["G-C-OXUS--"]={x1:50,x2:150,y1:0,y2:100},I["G-C-OXWA--"]=t["TP.AIM POINT"],E["G-C-OXWA--"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OXWD--"]=t["TP.DROP POINT"],E["G-C-OXWD--"]={x1:50,x2:150,y1:50,y2:120},I["G-C-OXWE--"]=t["TP.ENTRY POINT"],E["G-C-OXWE--"]={x1:50,x2:150,y1:50},I["G-C-OXWG--"]=t["TP.GROUND ZERO"],E["G-C-OXWG--"]={x1:50,x2:150,y1:30},I["G-C-OXWM--"]=t["TP.MSL DETECT POINT"],E["G-C-OXWM--"]={x1:50,x2:150,y1:30},I["G-C-OXWI--"]=t["TP.IMPACT POINT"],E["G-C-OXWI--"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OXWP--"]=t["TP.PREDICTED IMPACT POINT"],E["G-C-OXWP--"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OXY---"]=t["TP.SONOBUOY"],E["G-C-OXY---"]={x1:60,x2:140,y1:-10,y2:160},I["G-C-OXYP--"]=t["TP.SONOBUOY PATTERN CENTER"],E["G-C-OXYP--"]={x1:60,x2:140,y1:-10,y2:160},I["G-C-OXYD--"]=t["TP.SONOBUOY DIFAR"],E["G-C-OXYD--"]={x1:60,x2:140,y1:-10,y2:160},I["G-C-OXYL--"]=t["TP.SONOBUOY LOFAR"],E["G-C-OXYL--"]={x1:60,x2:140,y1:-10,y2:160},I["G-C-OXYC--"]=t["TP.SONOBUOY CASS"],E["G-C-OXYC--"]={x1:60,x2:140,y1:-10,y2:160},I["G-C-OXYS--"]=t["TP.SONOBUOY DICASS"],E["G-C-OXYS--"]={x1:60,x2:140,y1:-10,y2:160},I["G-C-OXYB--"]=t["TP.SONOBUOY BT"],E["G-C-OXYB--"]={x1:60,x2:140,y1:-10,y2:160},I["G-C-OXYA--"]=t["TP.SONOBUOY ANM"],E["G-C-OXYA--"]={x1:60,x2:140,y1:-10,y2:160},I["G-C-OXYV--"]=t["TP.SONOBUOY VLAD"],E["G-C-OXYV--"]={x1:60,x2:140,y1:-10,y2:160},I["G-C-OXYT--"]=t["TP.SONOBUOY ATAC"],E["G-C-OXYT--"]={x1:60,x2:140,y1:-10,y2:160},I["G-C-OXYR--"]=t["TP.SONOBUOY RO"],E["G-C-OXYR--"]={x1:60,x2:140,y1:-10,y2:160},I["G-C-OXYK--"]=t["TP.SONOBUOY KINGPIN"],E["G-C-OXYK--"]={x1:60,x2:140,y1:-10,y2:160};I["G-C-OXN---"]=t["TP.FORMATION"],E["G-C-OXN---"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OXH---"]=t["TP.HARBOR"],E["G-C-OXH---"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OXHQ--"]=t["TP.HARBOR POINT Q"],E["G-C-OXHQ--"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OXHA--"]=t["TP.HARBOR POINT A"],E["G-C-OXHA--"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OXHY--"]=t["TP.HARBOR POINT Y"],E["G-C-OXHY--"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OXHX--"]=t["TP.HARBOR POINT X"],E["G-C-OXHX--"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OXR---"]=t["TP.ROUTE"],E["G-C-OXR---"]={x1:30,x2:170,y1:60,y2:140},I["G-C-OXRR--"]=t["TP.ROUTE RENDEZVOUS"],E["G-C-OXRR--"]={x1:30,x2:170,y1:60,y2:170},I["G-C-OXRD--"]=t["TP.ROUTE DIVERSIONS"],E["G-C-OXRD--"]={x1:30,x2:170,y1:60,y2:170},I["G-C-OXRW--"]=t["TP.ROUTE WAYPOINT"],E["G-C-OXRW--"]={x1:30,x2:170,y1:60,y2:170},I["G-C-OXRP--"]=t["TP.ROUTE PIM"],E["G-C-OXRP--"]={x1:30,x2:170,y1:60,y2:170},I["G-C-OXRT--"]=t["TP.ROUTE POINT R"],E["G-C-OXRT--"]={x1:30,x2:170,y1:60,y2:170},I["G-C-OXSTC-"]=t["TP.COMBATANT STATION"],E["G-C-OXSTC-"]={x1:-15,x2:140,y1:60,y2:140},I["G-C-OXSTCP"]=t["TP.PICKET STATION"],E["G-C-OXSTCP"]={x1:-15,x2:140,y1:60,y2:140},I["G-C-OXSTCA"]=t["TP.ASW SHIP STATION"],E["G-C-OXSTCA"]={x1:-15,x2:140,y1:60,y2:140},I["G-C-OXSTR-"]=t["TP.REPLENISHMENT AT SEA (RAS) STATION"],E["G-C-OXSTR-"]={x1:-15,x2:140,y1:60,y2:140},I["G-C-OXSTH-"]=t["TP.RESCUE STATION"],E["G-C-OXSTH-"]={x1:-15,x2:140,y1:60,y2:140},I["G-C-OXSTS-"]=t["TP.SUBMARINE STATION"],E["G-C-OXSTS-"]={x1:-15,x2:140,y1:60,y2:140},I["G-C-OXSTSA"]=t["TP.ASW SUBMARINE STATION"],E["G-C-OXSTSA"]={x1:-115,x2:140,y1:60,y2:140},I["G-C-OXS---"]=t["TP.SEARCH"],E["G-C-OXS---"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OXSA--"]=t["TP.SEARCH AREA"],E["G-C-OXSA--"]={x1:20,x2:150,y1:50,y2:150},I["G-C-OXSD--"]=t["TP.DIP POSITION"],E["G-C-OXSD--"]={x1:10,x2:150,y1:50,y2:150},I["G-C-OXSC--"]=t["TP.SEARCH CENTER"],E["G-C-OXSC--"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OXAC--"]=t["TP.COMBAT AIR PATROL (CAP)"],E["G-C-OXAC--"]={x1:60,x2:140,y1:40,y2:160},I["G-C-OXAA--"]=t["TP.AIRBORNE EARLY WARNING (AEW)"],E["G-C-OXAA--"]={x1:60,x2:140,y1:40,y2:160},I["G-C-OXAT--"]=t["TP.TACAN"],E["G-C-OXAT--"]={x1:60,x2:140,y1:40,y2:160},I["G-C-OXAK--"]=t["TP.TANKING"],E["G-C-OXAK--"]={x1:60,x2:140,y1:40,y2:160},I["G-C-OXAF--"]=t["TP.FIXED WING"],E["G-C-OXAF--"]={x1:60,x2:140,y1:40,y2:160},I["G-C-OXAH--"]=t["TP.ROTARY WING"],E["G-C-OXAH--"]={x1:60,x2:140,y1:40,y2:160},I["G-C-OXAO--"]=t["TP.TOMCAT"],E["G-C-OXAO--"]={x1:60,x2:140,y1:40,y2:160},I["G-C-OXAR--"]=t["TP.RESCUE"],E["G-C-OXAR--"]={x1:60,x2:140,y1:40,y2:160},I["G-C-OXAP--"]=t["TP.REPLENISH"],E["G-C-OXAP--"]={x1:60,x2:140,y1:40,y2:160},I["G-C-OXAM--"]=t["TP.MARSHALL"],E["G-C-OXAM--"]={x1:60,x2:140,y1:40,y2:160},I["G-C-OXAS--"]=t["TP.STRIKE IP"],E["G-C-OXAS--"]={x1:60,x2:140,y1:40,y2:160},I["G-C-OXAD--"]=t["TP.CORRIDOR TAB POINT"],E["G-C-OXAD--"]={x1:60,x2:140,y1:40,y2:160},I["G-C-OG----"]=t["TP.ACTION POINT"],E["G-C-OG----"]={x1:60,x2:140,y1:-60},I["G-C-OGC---"]=t["TP.ACTION POINT"],E["G-C-OGC---"]={x1:60,x2:140,y1:-60},I["G-C-OGP---"]=t["TP.CONTACT POINT"],E["G-C-OGP---"]={x1:55,x2:145,y1:-10},I["G-C-OGT---"]=t["TP.COORDINATION POINT"],E["G-C-OGT---"]={x1:50,x2:150,y1:50,y2:150},I["G-C-OGD---"]=t["TP.DECISION POINT"],E["G-C-OGD---"]={x1:30,x2:170,y1:25,y2:160},I["G-C-OGL---"]=t["TP.ACTION LINKUP POINT"],E["G-C-OGL---"]={x1:60,x2:140,y1:-60},I["G-C-OGN---"]=t["TP.ACTION PASSAGE POINT"],E["G-C-OGN---"]={x1:60,x2:140,y1:-60},I["G-C-OGR---"]=t["TP.ACTION RALLY POINT"],E["G-C-OGR---"]={x1:60,x2:140,y1:-60},I["G-C-OGS---"]=t["TP.ACTION RELEASE POINT"],E["G-C-OGS---"]={x1:60,x2:140,y1:-60},I["G-C-OGI---"]=t["TP.ACTION START POINT"],E["G-C-OGI---"]={x1:60,x2:140,y1:-60},I["G-C-OGW---"]=t["TP.WAYPOINT"],E["G-C-OGW---"]={x1:60,x2:140,y1:60,y2:140},I["G-O-VA----"]=t["TP.FIRE"],I["G-O-VR----"]=t["GR.EQ.HOWITZER"],I["G-O-VE----"]=t["ST.IC.KILLING VICTIM"],I["G-O-VB----"]=t["AIR.MISSILE.IC.BOMB"],I["G-O-VY----"]=t["ST.IC.BOOBY TRAP"],I["G-O-VD----"]=t["ST.IC.DRIVE-BY SHOOTING"],I["G-O-VI----"]=t["TP.INDIRECT FIRE"],I["G-O-VM----"]=t["GR.EQ.MORTAR"],I["G-O-VK----"]=t["GR.EQ.MULTIPLE ROCKET LAUNCHER"],I["G-O-VS----"]=t["ST.IC.SNIPING"],I["G-O-VP----"]=t["ST.IC.POISONING"],I["G-O-VU----"]=t["TP.AMBUSH"],I["G-O-VC----"]=t["GR.IC.FF.CLASS V"],I["G-O-VH----"]=t["AR.I.FF.CIVILIAN ROTARY WING"],I["G-O-VF----"]=[t["GR.IC.FF.INFANTRY"],t["GR.IC.FF.MOTORIZED"]],I["G-O-VO----"]=t["GR.IC.FF.INFANTRY"],I["G-O-VL----"]=t["GR.IC.FF.RECONNAISSANCE"],I["G-O-VX----"]=t["GR.IC.FF.SIGNAL"],I["G-O-VZ----"]=t["GR.IC.FF.SUPPLY"],I["G-O-LB----"]=t["ST.IC.BLACK LIST LOCATION"],I["G-O-LG----"]=t["ST.IC.GRAY LIST LOCATION"],I["G-O-LW----"]=t["ST.IC.WHITE LIST LOCATION"],I["G-O-PR----"]=t["TP.ROAD BLOCK"],I["G-O-PRB---"]=t["TP.ROAD BLOCK (UNDER CONSTRUCTION)"],I["G-O-PT----"]=t["ST.IC.PATROLLING"],I["G-O-PC----"]=[t["ST.IC.INDIVIDUAL"],t["ST.M1.WILLING"]],I["G-O-PCU---"]=[t["ST.IC.INDIVIDUAL"],t["ST.M1.COERCED/IMPRESSED"]],I["G-O-PD----"]=t["ST.IC.DEMONSTRATION"],I["G-O-PM----"]=t["ST.IC.MINE LAYING"],I["G-O-PH----"]=t["ST.IC.PSYCHOLOGICAL OPERATIONS"],I["G-O-PHY---"]=t["ST.IC.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS"],I["G-O-PHW---"]=[t["ST.IC.PSYCHOLOGICAL OPERATIONS"],t["ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS"]],I["G-O-PHG---"]=[t["ST.IC.PSYCHOLOGICAL OPERATIONS"],t["ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS"]],I["G-O-PHT---"]=[t["ST.IC.PSYCHOLOGICAL OPERATIONS"],t["ST.M1.HOUSE-TO-HOUSE"]],I["G-O-PG----"]=t["ST.IC.SEARCHING"],I["G-O-PS----"]=t["ST.IC.SPY"],I["G-O-PF----"]=t["ST.IC.FOOD DISTRIBUTION"],I["G-O-PI----"]=t["GR.IC.FF.MEDICAL TREATMENT FACILITY"],I["G-O-PE----"]=[t["GR.IC.ELECTRONIC WARFARE"],t["GR.IC.FF.INTERCEPT"]],I["G-O-PX----"]=t["ST.IC.EXTORTION"],I["G-O-PJV---"]=[t["ST.IC.KNOWN INSURGENT VEHICLE"],t["ST.M1.HIJACKING/HIJACKED"]],I["G-O-PJA---"]=[t["ST.IC.HIJACKING (AIRPLANE)"],t["ST.M1.HIJACKING/HIJACKED"]],I["G-O-PJB---"]=[t["ST.IC.HIJACKING (BOAT)"],t["ST.M1.HIJACKING/HIJACKED"]],I["G-O-PK----"]=[t["ST.IC.INDIVIDUAL"],t["ST.M1.KIDNAPPING"]],I["G-O-PA----"]=t["ST.IC.ARREST"],I["G-O-PO----"]=t["ST.IC.DRUG RELATED ACTIVITIES"],I["G-O-IR----"]=t["ST.IC.GROUP"],I["G-O-IS----"]=t["ST.IC.SAFE HOUSE"],I["G-O-IG----"]=t["ST.IC.GRAFFITI"],I["G-O-IV----"]=t["ST.IC.VANDALISM/LOOT/RANSACK/PLUNDER/SACK"],I["G-O-IK----"]=t["ST.IC.KNOWN INSURGENT VEHICLE"],I["G-O-ID----"]=[t["ST.IC.KNOWN INSURGENT VEHICLE"],t["ST.M1.DRUG"]],I["G-O-IF----"]=t["ST.IC.INTERNAL SECURITY FORCE"]}},function(I,E,t){var R=t(0);I.exports=function(I,E){this.SIDC=this.SIDC.toUpperCase();var t=""!=this.SIDC.charAt(0)?this.SIDC.charAt(0):"-",C=""!=this.SIDC.charAt(1)?this.SIDC.charAt(1):"-",A=""!=this.SIDC.charAt(2)?this.SIDC.charAt(2):"-",e=""!=this.SIDC.charAt(3)?this.SIDC.charAt(3):"-",S=I.functionid=""!=this.SIDC.substr(4,6)?this.SIDC.substr(4,6):"------",T=""!=this.SIDC.charAt(10)?this.SIDC.charAt(10):"-",N=""!=this.SIDC.charAt(11)?this.SIDC.charAt(11):"-";""!=this.SIDC.substr(12,2)&&this.SIDC.substr(12,2),""!=this.SIDC.charAt(14)&&this.SIDC.charAt(14);return["H","S","J","K"].indexOf(C)>-1&&(I.affiliation=E.affiliation[0]),["F","A","D","M"].indexOf(C)>-1&&(I.affiliation=E.affiliation[1]),["N","L"].indexOf(C)>-1&&(I.affiliation=E.affiliation[2]),["P","U","G","W","O"].indexOf(C)>-1&&(I.affiliation=E.affiliation[3]),["P","A"].indexOf(A)>-1&&(I.dimension=E.dimension[0]),["G","Z","F","X"].indexOf(A)>-1&&(I.dimension=E.dimension[1]),["S"].indexOf(A)>-1&&(I.dimension=E.dimension[2]),["U"].indexOf(A)>-1&&(I.dimension=E.dimension[3]),"P"==A&&"O"!=t&&(I.space=!0),"O"==t&&["V","O","R"].indexOf(A)>-1&&(I.activity=!0),"H"==T&&(I.installation=!0),this.frame&&"A"==e&&(I.notpresent=R._dashArrays.anticipated),this.frame&&["P","A","S","G","M"].indexOf(C)>-1&&(I.notpresent=R._dashArrays.pending),"C"==e&&(I.condition=E.status[2]),"D"==e&&(I.condition=E.status[3]),"X"==e&&(I.condition=E.status[4]),"F"==e&&(I.condition=E.status[5]),["G","W","D","L","M","J","K"].indexOf(C)>-1&&(I.context=E.context[1]),"O"==t&&(I.dimension=E.dimension[1]),"E"==t&&(I.dimension=E.dimension[1]),I.baseDimension=I.dimension,I.baseAffilation=I.affiliation,"J"==C&&(I.joker=!0),"K"==C&&(I.faker=!0),(I.joker||I.faker)&&(I.affiliation=E.affiliation[1]),"S"==t&&"G"==A&&"E"==S.charAt(0)&&(I.dimension=E.dimension[2]),"I"==t&&"G"==A&&(I.dimension=E.dimension[2]),"E"==t&&("O"==A&&["AB----","AE----","AF----","BB----","CB----","CC----","DB----","DDB---","DEB---","DFB---","DGB---","DHB---","DIB---","DJB---","DLB---","DMB---","DOB---","EA----","EB----","EC----","ED----","EE----"].indexOf(S)>-1||"F"==A&&["BA----","MA----","MC----"].indexOf(S)>-1)&&(I.dimension=E.dimension[2]),(["F","G","C","D"].indexOf(T)>-1||"H"==T&&"B"==N)&&(I.feintDummy=!0),["A","B","C","D"].indexOf(T)>-1&&(I.headquarters=!0),["E","B","G","D"].indexOf(T)>-1&&(I.taskForce=!0),"A"==N&&(I.echelon=E.echelonMobility[11]),"B"==N&&"H"!=T&&(I.echelon=E.echelonMobility[12]),"C"==N&&(I.echelon=E.echelonMobility[13]),"D"==N&&(I.echelon=E.echelonMobility[14]),"E"==N&&(I.echelon=E.echelonMobility[15]),"F"==N&&(I.echelon=E.echelonMobility[16]),"G"==N&&(I.echelon=E.echelonMobility[17]),"H"==N&&(I.echelon=E.echelonMobility[18]),"I"==N&&(I.echelon=E.echelonMobility[21]),"J"==N&&(I.echelon=E.echelonMobility[22]),"K"==N&&(I.echelon=E.echelonMobility[23]),"L"==N&&"N"!=T&&(I.echelon=E.echelonMobility[24]),"M"==N&&(I.echelon=E.echelonMobility[25]),"N"==N&&(I.echelon=E.echelonMobility[26]),"M"==T&&("O"==N&&(I.mobility=E.echelonMobility[31]),"P"==N&&(I.mobility=E.echelonMobility[32]),"Q"==N&&(I.mobility=E.echelonMobility[33]),"R"==N&&(I.mobility=E.echelonMobility[34]),"S"==N&&(I.mobility=E.echelonMobility[35]),"T"==N&&(I.mobility=E.echelonMobility[36]),"U"==N&&(I.mobility=E.echelonMobility[41]),"V"==N&&(I.mobility=E.echelonMobility[42]),"W"==N&&(I.mobility=E.echelonMobility[37]),"Y"==N&&(I.mobility=E.echelonMobility[51]),"Z"==N&&(I.mobility=E.echelonMobility[52])),"N"==T&&("S"==N&&(I.mobility=E.echelonMobility[61]),"L"==N&&(I.mobility=E.echelonMobility[62])),("A"==A&&"C"==S.charAt(0)||"G"==A&&"EVC"==S.substring(0,3)||"S"==A&&"X"==S.charAt(0))&&(I.civilian=!0),"Z"!=A&&"X"!=A||(["P","U","F","N","H","A","S","G","W"].indexOf(C)>-1&&(I.dimensionUnknown=!0),["F","A"].indexOf(C)>-1&&(I.dimension="Sea"),["D","L","M","J","K"].indexOf(C)>-1&&(I.affiliation="none")),"S"==A&&["O-----","ED----","EP----","EV----","ZM----","ZN----","ZI----"].indexOf(S)>-1&&(I.frame=!1),"E"==t&&"N"==A&&["AA----","AB----","AC----","AD----","AE----","AG----","BB----","BC----","BF----","BM----","-C-----","CA----","CB----","CC----","CD----","CE----"].indexOf(S)>-1&&(I.frame=!1),"U"==A&&["WM----","WMD---","WMG---","WMGD--","WMGX--","WMGE--","WMGC--","WMGR--","WMGO--","WMM---","WMMD--","WMMX--","WMME--","WMMC--","WMMR--","WMMO--","WMF---","WMFD--","WMFX--","WMFE--","WMFC--","WMFR--","WMFO--","WMO---","WMOD--","WMX---","WME---","WMA---","WMC---","WMR---","WMB---","WMBD--","WMN---","WMS---","WMSX--","WMSD--","WD----","WDM---","WDMG--","WDMM--","ND----","E-----","V-----","X-----","NBS---","NBR---","NBW---","NM----","NA----"].indexOf(S)>-1&&(R._STD2525?(I.fill=!1,"WD----"==I.functionid&&(I.fill=!0),["ND----","NBS---","NBR---","NBW---","NM----","NA----"].indexOf(S)>-1&&(I.fill=!0,I.frame=!1)):(I.frame=!1,["E-----","V-----","X-----"].indexOf(S)>-1&&(I.fill=!1,I.frame=!1))),"WAS"!=this.SIDC.substr(0,3)&&"WOS"!=this.SIDC.substr(0,3)&&"G"!=t||(I.frame=!1),"G"==t&&"O"==A&&["V","L","P","I"].indexOf(S.charAt(0))>-1&&(I.frame=!0,I.dimension=E.dimension[1]),I}},function(I,E,t){t(0),I.exports=function(I,E){I.beginPath();var t,R,C,A,e,S,T,N=E.match(/([MCLHV][^MCLHV]*)/gi);for(C=0;C<N.length;C++){if("M"==N[C].charAt(0)){for(T=N[C].match(/[-\d].*[\d]/)[0].split(/[\s,]/g),t=parseFloat(T[0]),R=parseFloat(T[1]),e=t,S=R,I.moveTo(t,R),A=2;A<T.length;A+=2)t=parseFloat(T[A]),R=parseFloat(T[A+1]),I.lineTo(t,R);"Z"==N[C].replace(/\s/g,"").substr(-1,1).toUpperCase()&&(I.closePath(),t=e,R=S)}if("m"==N[C].charAt(0)){for(T=N[C].match(/[-\d].*[\d]/)[0].split(/[\s,]/g),t=t?t+parseFloat(T[0]):parseFloat(T[0]),R=R?R+parseFloat(T[1]):parseFloat(T[1]),e=t,S=R,I.moveTo(t,R),A=2;A<T.length;A+=2)t+=parseFloat(T[A]),R+=parseFloat(T[A+1]),I.lineTo(t,R);"Z"==N[C].replace(/\s/g,"").substr(-1,1).toUpperCase()&&(I.closePath(),t=e,R=S)}if("L"==N[C].charAt(0)){for(T=N[C].match(/[-\d].*[\d]/)[0].split(/[\s,]/g),A=0;A<T.length;A+=2)t=parseFloat(T[A]),R=parseFloat(T[A+1]),I.lineTo(t,R);"Z"==N[C].replace(/\s/g,"").substr(-1,1).toUpperCase()&&(I.closePath(),t=e,R=S)}if("l"==N[C].charAt(0)){for(T=N[C].match(/[-\d].*[\d]/)[0].split(/[\s,]/g),A=0;A<T.length;A+=2)t+=parseFloat(T[A]),R+=parseFloat(T[A+1]),I.lineTo(t,R);"Z"==N[C].replace(/\s/g,"").substr(-1,1).toUpperCase()&&I.closePath()}if("C"==N[C].charAt(0)){for(T=N[C].match(/[-\d].*[\d]/)[0].split(/[\s,]/g),A=0;A<T.length;A+=6)t=parseFloat(T[A+4]),R=parseFloat(T[A+5]),I.bezierCurveTo(T[A],T[A+1],T[A+2],T[A+3],T[A+4],T[A+5]);"Z"==N[C].replace(/\s/g,"").substr(-1,1).toUpperCase()&&I.closePath()}if("c"==N[C].charAt(0)){for(T=N[C].match(/[-\d].*[\d]/)[0].split(/[\s,]/g),A=0;A<T.length;A+=6){var G=t+parseFloat(T[A]),O=R+parseFloat(T[A+1]),M=t+parseFloat(T[A+2]),o=R+parseFloat(T[A+3]);t+=parseFloat(T[A+4]),R+=parseFloat(T[A+5]),I.bezierCurveTo(G,O,M,o,t,R)}"Z"==N[C].replace(/\s/g,"").substr(-1,1).toUpperCase()&&I.closePath()}if("H"==N[C].charAt(0)){for(T=N[C].match(/[-\d](.*[\d])?/)[0].split(/[\s,]/g),A=0;A<T.length;A++)t=parseFloat(T[A]),I.lineTo(t,R);"Z"==N[C].replace(/\s/g,"").substr(-1,1).toUpperCase()&&I.closePath()}if("h"==N[C].charAt(0)){for(T=N[C].match(/[-\d](.*[\d])?/)[0].split(/[\s,]/g),A=0;A<T.length;A++)t+=parseFloat(T[A]),I.lineTo(t,R);"Z"==N[C].replace(/\s/g,"").substr(-1,1).toUpperCase()&&I.closePath()}if("V"==N[C].charAt(0)){for(T=N[C].match(/[-\d](.*[\d])?/)[0].split(/[\s,]/g),A=0;A<T.length;A++)R=parseFloat(T[A]),I.lineTo(t,R);"Z"==N[C].replace(/\s/g,"").substr(-1,1).toUpperCase()&&I.closePath()}if("v"==N[C].charAt(0)){for(T=N[C].match(/[-\d](.*[\d])?/)[0].split(/[\s,]/g),A=0;A<T.length;A++)R+=parseFloat(T[A]),I.lineTo(t,R);"Z"==N[C].replace(/\s/g,"").substr(-1,1).toUpperCase()&&I.closePath()}}}},function(I,E,t){function R(I,E){"object"!=typeof I?this.SIDC=I:E=I,this.size=100,this.fill=!0,this.fillOpacity=1,this.frame=!0,this.strokeWidth=4,this.outlineColor="rgb(239, 239, 239)",this.outlineWidth=0,this.icon=!0,this.monoColor=!1,this.civilianColor=!0,this.colorMode=C.getColorMode("Light"),this.infoFields=!0,this.infoSize=40,this.alternateMedal=!1,this.quantity="",this.reinforcedReduced="",this.staffComments="",this.additionalInformation="",this.evaluationRating="",this.combatEffectiveness="",this.signatureEquipment="",this.higherFormation="",this.hostile="",this.iffSif="",this.direction="",this.sigint="",this.uniqueDesignation="",this.type="",this.dtg="",this.altitudeDepth="",this.location="",this.speed="",this.specialHeadquarters="",this.platformType="",this.equipmentTeardownTime="",this.commonIdentifier="",this.auxiliaryEquipmentIndicator="",this.headquartersElement="",this.bbox=new C.BBox,this.colors={},this._validIcon=!0,this.markerAnchor={x:50,y:50},this.octagonAnchor={x:50,y:50},this.properties={},this.setOptions.call(this,E)}var C=t(0);R.prototype.asCanvas=t(61),R.prototype.asDOM=function(){return parseXML(this.asSVG())},R.prototype.asSVG=t(62),R.prototype.getAnchor=function(){return this.markerAnchor},R.prototype.getColors=t(63),R.prototype.getOctagonAnchor=function(){return this.octagonAnchor},R.prototype.getProperties=t(64),R.prototype.getSize=t(65),R.prototype.isValid=function(){return this._validIcon},R.prototype.setOptions=t(66),R.prototype.toDataURL=function(){return"data:image/svg+xml;base64,"+btoa(this.asSVG())},R.prototype.asImage=function(){return console.warn("asImage() is deprecated and should not be used, use toDataURL() instead."),this.toDataURL.call(this)},R.prototype.getMarker=function(){return console.warn("getMarker() is deprecated and should not be used, in most cases its not needed and you can use setOptions() instead."),this.setOptions.call(this)},I.exports=R},function(I,E,t){var R=t(0);I.exports=function(I,E,t,C,A){function e(I){var E=42,t=115;return 1==I.length&&(E=45,t=115),3==I.length&&(E=35,t=110),I.length>=4&&(E=32,t=110),{type:"text",stroke:!1,textanchor:"middle",x:100,y:t,fontsize:E,text:I}}function S(I){var E=30;return 3==I.length&&(E=25),I.length>=4&&(E=22),{type:"text",stroke:!1,textanchor:"middle",x:100,y:77,fontsize:E,text:I}}function T(I){var E=30,t=145;return 3==I.length&&(E=25,t=140),I.length>=4&&(E=20,t=135),{type:"text",stroke:!1,textanchor:"middle",x:100,y:t,fontsize:E,text:I}}function N(I){if("object"==typeof I){if(Array.isArray(I)){for(var E=0;E<I.length;E++)N.call(this,I[E]);return}return I.icon=!0,"text"==I.type&&(I.hasOwnProperty("fontfamily")||(I.fontfamily="Arial"),I.hasOwnProperty("fontweight")||(I.fontweight="bold"),I.hasOwnProperty("textanchor")||(I.textanchor="middle"),I.hasOwnProperty("stroke")||(I.stroke=!1)),I.hasOwnProperty("fill")||(I.fill=i),void(I.hasOwnProperty("stroke")||(I.stroke=i))}}var G={},O=I.frame,M=I.affiliation||"Friend",o=I.baseGeometry,L=I.numberSIDC,i=(E.fillColor[M],E.iconColor[M]),s=E.iconFillColor[M],r=E.none[M],n=E.black[M],l=E.white[M];G["SP.I.FF.SATELLITE"]=[{type:"path",stroke:!1,d:"m 115,70 20,0 0,55 -20,0 z m -25,5 20,0 0,45 -20,0 z m -25,-5 20,0 0,55 -20,0 z"},{type:"path",fill:!1,d:"M80,135 c10,-10 30,-10 40,0 M100,127 L100,100 M70,100 L130,100"}],G["SP.I.FF.CREWED SPACE VEHICLE"]={type:"path",stroke:!1,d:"m 100.3,62.4 c -1.8,-0 -4.3,3.7 -4.5,5.4 -2.5,11.3 -3.4,23.1 -6.2,33.4 -2.9,6.7 -6.8,8.3 -9.9,12.1 -3,3.6 -8.5,10.4 -8.5,10.4 l 0,6.4 c 0,0 5.9,0.9 8.9,1.2 3,0.2 8.7,0.1 8.7,0.1 l 0.3,4.3 4.3,0.2 0.2,3.1 5.8,0 0.9,6.5 0.9,-6.4 5.8,0 0.2,-3.1 4.3,-0.2 0.3,-4.3 c 0,0 5.7,0.1 8.7,-0.1 3,-0.2 8.9,-1.2 8.9,-1.2 l 0,-6.4 c 0,0 -5.5,-6.7 -8.5,-10.3 -3.1,-3.8 -7,-5.4 -9.9,-12.1 -2.8,-10.4 -3.7,-22.2 -6.2,-33.4 -0.3,-2.9 -2.7,-5.5 -4.5,-5.5 z"},G["SP.I.FF.SPACE STATION"]=[{type:"path",d:"m 103.1,97.4 c -12.4,0.3 -25.7,0.1 -36.7,6.7 -4.1,2.1 -8.5,5.9 -7.8,11 0.2,3.7 0.3,7.4 0.5,11.1 6.2,7.8 16.6,10.4 26,11.8 14,1.8 28.5,1.2 42.1,-3 5.2,-1.7 10.4,-4.3 14.2,-8.3 0.3,-5.1 -0.3,-10.4 0.7,-15.3 -1.2,-4.3 -5.9,-6.4 -9.7,-8.2 -9.2,-4 -19.3,-5.4 -29.2,-5.6 z m -3.2,9.6 c 10.1,-0.2 20.5,1.9 29.1,7.4 -13,8.4 -29.6,9.7 -44.3,6.1 -4.9,-1.3 -9.7,-3.3 -13.7,-6.4 8.8,-4.9 18.9,-6.9 28.9,-7.2 z",fill:t?s:r},{type:"path",fill:!1,stroke:"black",d:"m 96.9,107 c 0.7,-8.1 1.4,-16.3 2.1,-24.4 M 89.3,121.8 c 3.1,-13.2 6.2,-26.3 9.3,-39.5 4.9,12.7 9.7,25.5 14.6,38.2 m 27.8,-5.3 c -0.1,3.9 -0.2,7.8 -0.3,11.6 M 58.6,113.3 c 0.2,4.5 0.3,9 0.5,13.5 m -0.5,-1.2 c 3.5,6.3 11,8.6 17.6,10.5 16.4,4.1 33.9,3.9 50.1,-0.8 5.5,-1.8 11.8,-4.3 14.7,-9.7 m 0.5,-13 c -0.5,5.4 -6.1,8.1 -10.5,10 -15.4,5.7 -32.4,6.1 -48.5,3.6 -7.9,-1.4 -16.3,-3.4 -22.2,-9.2 -3.6,-3.9 -0.9,-9.6 3.4,-11.7 8.3,-5.2 18.3,-6.6 27.9,-7.5 13.5,-1 27.5,0 40.2,5.1 4.2,1.8 9.3,4.6 9.7,9.7 z m -13.3,1.6 c -8.2,-5.9 -18.8,-6.8 -28.6,-7 -9.5,0.1 -19.5,1.2 -27.6,6.4 l -0.6,0.5 m 58.9,-2.6 c -0.8,4.8 -6.1,6.4 -10,7.8 -13.2,3.7 -27.4,3.7 -40.5,-0 -3.8,-1.2 -8.1,-2.8 -9.8,-6.7 -0.7,-4.9 5,-7.1 8.7,-8.5 12.7,-4 26.6,-4 39.5,-1 4.4,1.2 9.8,2.8 11.9,7.3 l 0.1,0.5 0,0.5 z"},{type:"path",fill:"black",stroke:!1,d:"M 75.2,93.1 C 88.9,87 102.6,80.8 116.3,74.7 c 2.3,1.3 4.7,2.6 7,3.9 -13.7,6 -27.3,12 -41,18 -2.4,-1.2 -4.8,-2.3 -7.2,-3.5 z"}],G["SP.I.SPACE LAUNCH VEHICLE"]=e("SLV"),G["SP.I.MILITARY"]=e("MIL"),G["SP.I.SPACE VEHICLE"]=e("SV"),G["SP.I.RE-ENTRY VEHICLE"]=e("RV"),G["SPACE.PLANET LANDER"]=e("PL"),G["SP.I.ORBITER SHUTTLE"]={type:"path",d:"m 89,115 6,-25 c 3,-12 7,-12 10,0 l 6,25 -10,0 -1,5 -1,-5 z"},G["SP.I.CAPSULE"]={type:"path",d:"m 85,115 c -2,5 32,5 30,0 l -5,-30 c -1,-5 -19,-5 -20,0 z"},G["SP.I.SATELLITE, GENERAL"]=e("SAT"),G["SP.I.SATELLITE"]={type:"path",d:"m 110,100 10,0 m -40,0 10,0 m -10,-10 -25,0 0,20 25,0 z m 40,0 0,20 25,0 0,-20 z m -30,0 0,20 20,0 0,-20 z"},G["SP.I.ANTISATELLITE WEAPON"]={type:"path",d:"m 100,110 0,9 m 0,-34 0,5 m 0,-9 -2,4 4,0 z m -10,9 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0"},G["SP.I.ASTRONOMICAL SATELLITE"]={type:"path",d:"m 97,90 -1,-9 8,0 -1,9 m -5,20 1,9 2,0 1,-9 m 8,-10 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"},G["SP.I.BIOSATELLITE"]={type:"path",d:"m 100,89 c 0,4.4 -3.6,8 -8,8 -4.4,0 -8,-3.6 -8,-8 0,-4.4 3.6,-8 8,-8 4.4,0 8,3.6 8,8 z m -10,10 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0 m -17,-25 17,10 -1,2 -14,-7"},G["SP.I.COMMUNICATIONS SATELLITE"]=[{type:"path",d:"m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"},{type:"path",fill:!1,d:"m 100,90 0,9 M 75,81 c 16,12 34,12 50,0"}],G["SP.I.EARTH OBSERVATION SATELLITE"]=[{type:"path",d:"m 107,113 c 0,3.9 -3.1,7 -7,7 -3.9,0 -7,-3.1 -7,-7 0,-3.9 3.1,-7 7,-7 3.9,0 7,3.1 7,7 z m -17,-33 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0"},{type:"path",fill:!1,d:"m 88,107 c 8,-9 16,-9 24,0"}],G["SP.I.MINIATURIZED SATELLITE"]=[{type:"path",d:"m 91.1,92 0,16 17.8,0 0,-16 z m 22.2,0 0,16 22.2,0 0,-16 z m -26.6,0 -22.2,0 0,16 22.2,0 z m 0,8 4.4,0 m 17.8,0 4.4,0"},{type:"path",fill:!1,d:"m 90,119 10,-9 10,9 m -20,-38 10,9 10,-9 m 35,9 -10,10 10,10 M 55,90 65,100 55,110"}],G["SP.I.NAVIGATIONAL SATELLITE"]=[{type:"path",d:"m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"},{type:"path",fill:!1,d:"m 88,87 c 8,6 16,6 24,0 m -20,8 8,-14 8,14"}],G["SP.I.RECONNAISSANCE SATELLITE"]={type:"path",d:"m 106,100 9,20 m -21,-20 -9,20 m 17,-20 3,20 m -7,-20 -3,20 m 15,-30 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"},G["SP.I.SPACE STATION"]={type:"path",d:"m 97.5,112.5 0,7.5 5,0 0,-7.5 z m 0,-32.5 5,0 0,26.4 -5,0 z m -0.3,7.6 C 83.3,88.2 72.5,93.5 72.5,100 c 0,6.9 12.3,12.5 27.5,12.5 15.2,0 27.5,-5.6 27.5,-12.5 0,-6.5 -11,-11.9 -25,-12.4 l 0,5.6 c 9.9,0.4 17.5,3.2 17.5,6.6 0,3.7 -8.9,6.7 -19.8,6.7 -10.9,0 -19.8,-3 -19.8,-6.7 0,-3.4 7.4,-6.1 17.1,-6.6 l 0,-5.6 c -0.1,0 -0.2,-0 -0.3,0 z"},G["SP.I.TETHERED SATELLITE"]={type:"path",d:"m 120,87 -20,12 m 33,-12 c 0,3.6 -2.9,6.5 -6.5,6.5 -3.6,0 -6.5,-2.9 -6.5,-6.5 0,-3.6 2.9,-6.5 6.5,-6.5 3.6,0 6.5,2.9 6.5,6.5 z m -23,22 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"},G["SP.I.WEATHER SATELLITE"]=[{type:"path",d:"m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:100,fontsize:25,text:"WX"}],G["SP.I.CIVILIAN ORBITER SHUTTLE"]={type:"path",fill:t?s:!O&&s,d:"m 89,115 6,-25 c 3,-12 7,-12 10,0 l 6,25 -10,0 -1,5 -1,-5 z"},G["SP.I.CIVILIAN CAPSULE"]={type:"path",fill:t?s:!O&&s,d:"m 85,115 c -2,5 32,5 30,0 l -5,-30 c -1,-5 -19,-5 -20,0 z"},G["SP.I.CIVILIAN SATELLITE"]={type:"path",fill:t?s:!O&&s,d:"m 110,100 10,0 m -40,0 10,0 m -10,-10 -25,0 0,20 25,0 z m 40,0 0,20 25,0 0,-20 z m -30,0 0,20 20,0 0,-20 z"},G["SP.I.CIVILIAN ASTRONOMICAL SATELLITE"]={type:"path",fill:t?s:!O&&s,d:"m 97,90 -1,-9 8,0 -1,9 m -5,20 1,9 2,0 1,-9 m 8,-10 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"},G["SP.I.CIVILIAN BIOSATELLITE"]={type:"path",fill:t?s:!O&&s,d:"m 100,89 c 0,4.4 -3.6,8 -8,8 -4.4,0 -8,-3.6 -8,-8 0,-4.4 3.6,-8 8,-8 4.4,0 8,3.6 8,8 z m -10,10 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0 m -17,-25 17,10 -1,2 -14,-7"},G["SP.I.CIVILIAN COMMUNICATIONS SATELLITE"]=[{type:"path",fill:t?s:!O&&s,d:"m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"},{type:"path",fill:!1,d:"m 100,90 0,9 M 75,81 c 16,12 34,12 50,0"}],G["SP.I.CIVILIAN EARTH OBSERVATION SATELLITE"]=[{type:"path",fill:t?s:!O&&s,d:"m 107,113 c 0,3.9 -3.1,7 -7,7 -3.9,0 -7,-3.1 -7,-7 0,-3.9 3.1,-7 7,-7 3.9,0 7,3.1 7,7 z m -17,-33 0,20 20,0 0,-20 z m 25,0 0,20 25,0 0,-20 z m -30,0 -25,0 0,20 25,0 z m 0,10 5,0 m 20,0 5,0"},{type:"path",fill:!1,d:"m 88,107 c 8,-9 16,-9 24,0"}],G["SP.I.CIVILIAN MINIATURIZED SATELLITE"]=[{type:"path",fill:t?s:!O&&s,d:"m 91.1,92 0,16 17.8,0 0,-16 z m 22.2,0 0,16 22.2,0 0,-16 z m -26.6,0 -22.2,0 0,16 22.2,0 z m 0,8 4.4,0 m 17.8,0 4.4,0"},{type:"path",fill:!1,d:"m 90,119 10,-9 10,9 m -20,-38 10,9 10,-9 m 35,9 -10,10 10,10 M 55,90 65,100 55,110"}],G["SP.I.CIVILIAN NAVIGATIONAL SATELLITE"]=[{type:"path",fill:t?s:!O&&s,d:"m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"},{type:"path",fill:!1,d:"m 88,87 c 8,6 16,6 24,0 m -20,8 8,-14 8,14"}],G["SP.I.CIVILIAN SPACE STATION"]={type:"path",fill:t?s:!O&&s,d:"m 97.5,112.5 0,7.5 5,0 0,-7.5 z m 0,-32.5 5,0 0,26.4 -5,0 z m -0.3,7.6 C 83.3,88.2 72.5,93.5 72.5,100 c 0,6.9 12.3,12.5 27.5,12.5 15.2,0 27.5,-5.6 27.5,-12.5 0,-6.5 -11,-11.9 -25,-12.4 l 0,5.6 c 9.9,0.4 17.5,3.2 17.5,6.6 0,3.7 -8.9,6.7 -19.8,6.7 -10.9,0 -19.8,-3 -19.8,-6.7 0,-3.4 7.4,-6.1 17.1,-6.6 l 0,-5.6 c -0.1,0 -0.2,-0 -0.3,0 z"},G["SP.I.CIVILIAN TETHERED SATELLITE"]={type:"path",fill:t?s:!O&&s,d:"m 120,87 -20,12 m 33,-12 c 0,3.6 -2.9,6.5 -6.5,6.5 -3.6,0 -6.5,-2.9 -6.5,-6.5 0,-3.6 2.9,-6.5 6.5,-6.5 3.6,0 6.5,2.9 6.5,6.5 z m -23,22 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"},G["SP.I.CIVILIAN WEATHER SATELLITE"]=[{type:"path",fill:t?s:!O&&s,d:"m 110,109 5,0 m -30,0 5,0 m -5,-10 -25,0 0,20 25,0 z m 30,0 0,20 25,0 0,-20 z m -25,0 0,20 20,0 0,-20 z"},{type:"text",stroke:!1,textanchor:"middle",x:100,y:95,fontsize:25,text:"WX"}],G["SP.I.MANUAL TRACK"]=e("MAN"),G["SP.M1.LOW EARTH ORBIT (LEO)"]=S("LEO"),G["SP.M1.MEDIUM EARTH ORBIT (MEO)"]=S("MEO"),G["SP.M1.HIGH EARTH ORBIT (HEO)"]=S("HEO"),G["SP.M1.GEOSYNCHRONOUS ORBIT (GSO)"]=S("GSO"),G["SP.M1.GEOSTATIONARY ORBIT (GO)"]=S("GO"),G["SP.M1.MOLNIYA ORBIT (MO)"]=S("MO"),G["SP.M2.OPTICAL"]=T("O"),G["SP.M2.INFRARED"]=T("IR"),G["SP.M2.RADAR"]=T("R"),G["SP.M2.SIGNALS INTELLIGENCE (SIGINT)"]=T("SI"),G["SPACE.MISSILE.M1.BALLISTIC"]={type:"text",stroke:!1,x:68,y:110,fontsize:30,text:"B"},G["SPACE.MISSILE.M1.SPACE"]=[{type:"text",stroke:!1,x:68,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:68,y:125,fontsize:30,text:"P"}],G["SPACE.MISSILE.M1.INTERCEPTOR"]={type:"text",stroke:!1,x:68,y:110,fontsize:30,text:"I"},G["SPACE.MISSILE.M2.SHORT RANGE"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"R"}],G["SPACE.MISSILE.M2.MEDIUM RANGE"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"M"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"R"}],G["SPACE.MISSILE.M2.INTERMEDIATE RANGE"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"I"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"R"}],G["SPACE.MISSILE.M2.LONG RANGE"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"L"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"R"}],G["SPACE.MISSILE.M2.INTERCONTINENTAL"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"I"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"C"}],G["SPACE.MISSILE.M2.ARROW"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"A"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"R"}],G["SPACE.MISSILE.M2.GROUND-BASED INTERCEPTOR (GBI)"]={type:"text",stroke:!1,x:132,y:110,fontsize:30,text:"G"},G["SPACE.MISSILE.M2.PATRIOT"]={type:"text",stroke:!1,x:132,y:110,fontsize:30,text:"P"},G["SPACE.MISSILE.M2.STANDARD MISSILE - TERMINAL PHASE (SM-T)"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"T"}],G["SPACE.MISSILE.M2.STANDARD MISSILE - 3 (SM-3)"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"3"}],G["SPACE.MISSILE.M2.TERMINAL HIGH-ALTITUDE AREA DEFENSE (THAAD)"]={type:"text",stroke:!1,x:132,y:110,fontsize:30,text:"T"},G["SPACE.MISSILE.M2.SPACE"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"P"}],G["AR.I.MILITARY"]=e("MIL"),G["AR.I.CIVILIAN"]=e("CIV"),G["AR.I.CIVILIAN"].fill=t?s:!O&&s,G["AR.I.CIVILIAN"].stroke=n,G["AR.I.CIVILIAN"].strokewidth=3,G["AR.I.MILITARY FIXED WING"]={type:"path",d:"M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z"},G["AR.I.CIVILIAN FIXED WING"]={type:"path",fill:!1,d:"M100,100 L130,88 c15,0 15,24 0,24 L100,100 70,112 c-15,0 -15,-24 0,-24 Z"},G["AR.I.FF.CIVILIAN FIXED WING"]={type:"path",stroke:n,d:"M62,80 l30,0 0,-10 16,0 0,10 30,0 0,15 -30,0 0,25 10,0 0,5 -36,0 0,-5 10,0 0,-25 -30,0 Z M95,70 l0,-5 10,0 0,5",fill:!!t&&s},G["AR.I.MILITARY ROTARY WING"]={type:"path",d:"M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z"},G["AR.I.CIVILIAN ROTARY WING"]={type:"path",fill:!!t&&s,stroke:n,d:"M60,85 l40,15 40,-15 0,30 -40,-15 -40,15 z"},G["AR.I.FF.CIVILIAN ROTARY WING"]=[{type:"path",stroke:n,d:"M80,70 l10,10 M120,110 l-10,-10 M80,110 l10,-10 M120,70 l-10,10 M100,115 l0,20 M95,135 l10,0",fill:!1},{type:"path",stroke:n,fill:!!t&&s,d:"m 113,90 c -0.3,8.8 -1.9,20.3 -10.8,24.6 -7.7,2 -12.3,-7.1 -13.8,-13.3 -2.6,-11.5 -2.3,-26 6.9,-34.6 6.0,-4.9 13.1,1.9 14.9,7.8 2,4.9 2.8,10.2 2.8,15.5 z"}],G["AR.I.MILITARY BALLOON"]=[{type:"circle",cx:100,cy:95,r:15},{type:"path",d:"M95,110 l0,10 10,0 0,-10 z"}],G["AR.I.FF.MILITARY BALLOON"]=[{type:"path",d:"M90,115 l20,0 0,20 -20,0 z"},{type:"circle",cx:100,cy:90,r:35}],G["AR.I.CIVILIAN BALLOON"]=[{type:"circle",fill:!!t&&s,stroke:n,cx:100,cy:95,r:15},{type:"path",fill:!!t&&s,stroke:n,d:"M95,110 l0,10 10,0 0,-10 z"}],G["AR.I.FF.CIVILIAN BALLOON"]=[{type:"path",fill:!!t&&s,stroke:n,d:"M90,125 l20,0 0,10 -20,0 z"},{type:"circle",fill:!!t&&s,stroke:n,cx:100,cy:90,r:35}],G["AR.I.MILITARY AIRSHIP"]={type:"path",d:"m 110,110 10,10 10,0 -5,-15 m 0,-10 5,-15 -10,0 -10,10 m 17.2,10 c 0,6.1 -12.2,11.1 -27.2,11.1 -15,0 -27.2,-5 -27.2,-11.1 0,-6.1 12.2,-11.1 27.2,-11.1 15,0 27.2,5 27.2,11.1 z"},G["AR.I.CIVILIAN AIRSHIP"]={type:"path",fill:!!t&&s,stroke:n,d:"m 110,110 10,10 10,0 -5,-15 m 0,-10 5,-15 -10,0 -10,10 m 17.2,10 c 0,6.1 -12.2,11.1 -27.2,11.1 -15,0 -27.2,-5 -27.2,-11.1 0,-6.1 12.2,-11.1 27.2,-11.1 15,0 27.2,5 27.2,11.1 z"},G["AR.I.UNMANNED AERIAL VEHICLE"]={type:"path",d:"M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z",stroke:!1},G["AR.I.AIR DECOY"]={type:"path",d:"M65,95 l15,-15 0,30 Z M92.5,95 l15,-15 0,30 Z M120,95 l15,-15 0,30 Z M65,120 l70,0 0,-5 -70,0 Z"},G["SU.IC.AIR DECOY DSymbol"]={type:"path",d:"M 85 81 L 65 98 L 85 119 L 85 81 z M 110 81 L 90 98 L 110 119 L 110 81 z M 135 81 L 115 98 L 135 119 L 135 81 z"},G["AR.I.MEDICAL EVACUATION"]={type:"path",d:"M93,83 l14,0 0,10 10,0 0,14 -10,0 0,10 -14,0 0,-10 -10,0 0,-14 10,0 Z"},G["AR.I.ATTACK/STRIKE"]=e("A"),G["AR.I.BOMBER"]=e("B"),G["AR.I.CARGO"]=e("C"),G["AR.I.ESCORT"]=e("E"),G["AR.I.FIGHTER"]=e("F"),G["AR.I.FIGHTER INTERCEPTOR"]=e("I"),G["AR.I.JAMMER / ELECTRONIC COUNTER-MEASURES"]=e("J"),G["AR.I.TANKER"]=e("K"),G["AR.I.PATROL"]=e("P"),G["AR.I.RECONNAISSANCE"]=e("R"),G["AR.I.2525 PHOTOGRAPHIC"]=e("P"),G["AR.I.TRAINER"]=e("T"),G["AR.I.UTILITY"]=e("U"),G["AR.I.VSTOL"]=e(t&&!L?"L":"V"),G["AR.I.AIRBORNE COMMAND POST"]=e(t&&!L?"D":"ACP"),G["AR.I.AIRBORNE EARLY WARNING"]=e(t&&!L?"W":"AEW"),G["AR.I.ANTISURFACE WARFARE"]=e(t&&!L?"N":"ASUW"),G["AR.I.ANTISUBMARINE WARFARE"]=e(t&&!L?"S":"ASW"),G["AR.I.COMMUNICATIONS"]=e(t&&!L?"Y":"COM"),G["AR.I.COMBAT SEARCH AND RESCUE"]=e("CSAR"),G["AR.I.ELECTRONIC SUPPORT MEASURES"]=e(t?"Z":"ESM"),G["AR.I.GOVERNMENT"]=e("GOV"),G["AR.I.MINE COUNTERMEASURES"]=e("MCM"),G["AR.I.PERSONNEL RECOVERY"]=e(t?"H":"PRO"),G["AR.I.PASSENGER"]=e("PX"),G["AR.I.SEARCH AND RESCUE"]=e("SAR"),G["AR.I.SUPRESSION OF ENEMY AIR DEFENCE"]=e("SEAD"),G["AR.I.SPECIAL OPERATIONS FORCES"]=e("SOF"),G["AR.I.ULTRA LIGHT"]=e("UL"),G["AR.I.VIP"]=e("VIP"),G["AR.I.FF.MILITARY FIXED WING"]={type:"path",d:"m 99.2,58.2 c -3,0.8 -2.5,5.8 -2.5,5.8 l -0.3,16 -37.2,36.5 1.3,4.6 L 96.7,96.6 97,128.6 l -8.5,8.2 0,4.6 9.3,-4.2 c 0.7,0.6 1.8,1.7 1.8,1.7 0,0 1.2,-1.1 1.9,-1.7 l 9.3,4.2 0,-4.6 -8.5,-8.2 0.3,-32 36.2,24.5 1.3,-4.6 -37.2,-36.5 -0.3,-16 c 0,0 0.5,-5 -2.5,-5.8 -0.4,-0.1 -0.7,-0.1 -1.1,0 z",stroke:!1},G["AR.I.FIXED-WING DSymbol"]={type:"path",d:"M 99.4 80.8 C 97.9 81.1 98.1 83.4 98.1 83.4 L 98 90.7 L 78.6 107.4 L 79.3 109.4 L 98.1 98.3 L 98.3 112.9 L 93.9 116.6 L 93.9 118.7 L 98.8 116.8 C 99.1 117 99.7 117.5 99.7 117.5 C 99.7 117.5 100.4 117 100.7 116.8 L 105.6 118.7 L 105.6 116.6 L 101.1 112.9 L 101.3 98.3 L 120.2 109.4 L 120.9 107.4 L 101.5 90.7 L 101.3 83.4 C 101.3 83.4 101.6 81.1 100 80.8 C 99.8 80.8 99.6 80.8 99.4 80.8 z"},G["AR.I.CIVILIAN FIXED-WING DSymbol"]={type:"path",fill:!!t&&s,stroke:n,d:"m 75.1,90.3 19.6,0 0,-6.5 10.5,0 0,6.5 19.6,0 0,9.7 -19.6,0 0,16.2 6.5,0 0,3.2 -23.6,0 0,-3.2 6.5,0 0,-16.2 -19.6,0 z m 21.6,-6.5 0,-3.2 6.5,0 0,3.2"},G["AR.I.FIGHTER/BOMBER"]=e("F/B"),G["AR.I.ELECTRONIC SUPPORT"]=e("ES"),G["AR.I.PERSONNEL RECOVERY DSymbol"]=e("PR"),G["AR.I.PHOTOGRAPHIC RECONNAISSANCE"]=e("PH"),G["AR.I.ELECTRONIC ATTACK (EA)"]=e("EA"),G["AR.I.VERTICAL-TAKEOFF UAV (VT-UAV)"]={type:"path",d:"m 70,85 30,10 30,-10 0,-5 -30,5 -30,-5 z m -10,5 40,15 40,-15 0,30 -40,-15 -40,15 z"},G["AR.I.TETHERED LIGHTER THAN AIR"]={type:"path",d:"M 75,110 85,95 m -5,20 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m 15,-6 0,11 10,0 0,-11 m 10,-14 c 0,8.3 -6.7,15 -15,15 -8.3,0 -15,-6.7 -15,-15 0,-8.3 6.7,-15 15,-15 8.3,0 15,6.7 15,15 z"},G["AR.I.CIVILIAN TETHERED LIGHTER THAN AIR"]={type:"path",fill:!!t&&s,stroke:n,d:"M 75,110 85,95 m -5,20 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m 15,-6 0,11 10,0 0,-11 m 10,-14 c 0,8.3 -6.7,15 -15,15 -8.3,0 -15,-6.7 -15,-15 0,-8.3 6.7,-15 15,-15 8.3,0 15,6.7 15,15 z"},G["AR.I.CIVILIAN UNMANNED AERIAL VEHICLE"]={type:"path",fill:!!t&&s,stroke:n,d:"M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z"},G["AR.I.WEAPON"]=e("WPN"),G["AR.I.UNDERWATER DECOY DSymbol"]={type:"path",d:"M 85 81 L 65 98 L 85 119 L 85 81 z M 110 81 L 90 98 L 110 119 L 110 81 z M 135 81 L 115 98 L 135 119 L 135 81 z"},G["AR.I.BOMB"]=e("BOMB"),G["AR.I.MANUAL TRACK"]=e("MAN"),G["AIR.M1.ATTACK"]=S("A"),G["AIR.M1.BOMBER"]=S("B"),G["AIR.M1.CARGO"]=S("C"),G["AIR.M1.FIGHTER"]=S("F"),G["AIR.M1.INTERCEPTOR"]=S("I"),G["AIR.M1.TANKER"]=S("K"),G["AIR.M1.UTILITY"]=S("U"),G["AIR.M1.VSTOL"]=S(t&&!L?"L":"V"),G["AIR.M1.PASSENGER"]=S("PX"),G["AIR.M1.ULTRA LIGHT"]=S("UL"),G["AIR.M1.AIRBORNE COMMAND POST"]=S(t&&!L?"D":"ACP"),G["AIR.M1.ANTISURFACE WARFARE"]=S(t&&!L?"N":"ASUW"),G["AIR.M1.AIRBORNE EARLY WARNING"]=S(t&&!L?"W":"AEW"),G["AIR.M1.GOVERNMENT"]=S("GOV"),G["AIR.M1.MEDEVAC"]={type:"path",stroke:!1,d:"M95.5,80 l9,0 0,-9 9,0 0,-9 -9,0 0,-9 -9,0 0,9 -9,0 0,9 9,0 Z"},G["AIR.M1.ESCORT"]=S("E"),G["AIR.M1.INTENSIVE CARE"]=S("IC"),G["AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES"]=S("J"),G["AIR.M1.PATROL"]=S("P"),G["AIR.M1.RECONNAISSANCE"]=S("R"),G["AIR.M1.TRAINER"]=S("T"),G["AIR.M1.PHOTOGRAPHIC"]=S(t&&!L?"X":"PH"),G["AIR.M1.PERSONNEL RECOVERY"]=S("PR"),G["AIR.M1.ANTISUBMARINE WARFARE"]=S(t&&!L?"S":"ASW"),G["AIR.M1.COMMUNICATIONS"]=S(t&&!L?"Y":"COM"),G["AIR.M1.ELECTRONIC SURVEILLANCE MEASURES"]=S(t?"Z":"ESM"),G["AIR.M1.MINE COUNTERMEASURES"]=S("MCM"),G["AIR.M1.SEARCH AND RESCUE"]=S("SAR"),G["AIR.M1.SPECIAL OPERATIONS FORCES"]=S("SOF"),G["AIR.M1.SURFACE WARFARE"]=S("SUW"),G["AIR.M1.VIP"]=S("VIP"),G["AIR.M1.COMBAT SEARCH AND RESCUE"]=S(t&&!L?"H":"CSAR"),G["AIR.M1.SUPRESSION OF ENEMY AIR DEFENCE"]=S("SEAD"),G["AIR.M1.UNMANNED AERIAL VEHICLE"]={type:"translate",x:20,y:-10,draw:[{type:"scale",factor:.8,draw:[G["AR.I.UNMANNED AERIAL VEHICLE"]]}]},G["AIR.M1.BOOM-ONLY"]=S("B"),G["AIR.M1.DROUGE-ONLY"]=S("D"),G["AIR.M1.ELECTRONIC SUPPORT (ES)"]=S("ES"),G["AIR.M1.FIGHTER/BOMBER"]=S("F/B"),G["AIR.M1.ELECTRONIC ATTACK (EA)"]=S("EA"),G["AIR.M1.MULTIMISSION"]=S("MM"),G["AIR.M1.HIJACKING"]=S("H"),G["AIR.M1.ASW HELO-LAMPS"]=S("LP"),G["AIR.M1.ASW HELO - SH-60R"]=S("60R"),G["AIR.M2.HEAVY"]=T("H"),G["AIR.M2.MEDIUM"]=T("M"),G["AIR.M2.LIGHT"]=T("L"),G["AIR.M2.BOOM-ONLY"]=T("B"),G["AIR.M2.DROUGE-ONLY"]=T("D"),G["AIR.M2.BOOM AND DROUGE"]=T("B/D"),G["AIR.M2.CLOSE RANGE"]=T("CR"),G["AIR.M2.SHORT RANGE"]=T("SR"),G["AIR.M2.MEDIUM RANGE"]=T("MR"),G["AIR.M2.LONG RANGE"]=T("LR"),G["AIR.M2.PHOTOGRAPHIC"]=T("P"),G["AIR.M2.DOWNLINKED"]={type:"text",stroke:!1,x:100,y:140,fontsize:25,text:"DL"},G["AIR.MISSILE.ICON"]={type:"path",d:"M90,135 l0,-10 5,-5 0,-55 5,-5 5,5 0,55 5,5 0,10 -10,-10 z"},t&&(G["AIR.MISSILE.ICON"].fill=O?E.fillColor.Unknown:E.iconFillColor.Unknown),G["AIR.MISSILE.IC.ANTIBALLISTIC MISSILE"]={type:"text",stroke:!1,x:100,y:110,fontsize:25,text:"ABM"},G["AIR.MISSILE.IC.BOMB"]={type:"text",stroke:!1,x:100,y:110,fontsize:25,text:"BOMB"},G["AIR.MISSILE.M1.AIR"]={type:"text",stroke:!1,x:68,y:110,fontsize:30,text:"A"},G["AIR.MISSILE.M1.SURFACE"]={type:"text",stroke:!1,x:68,y:110,fontsize:30,text:"S"},G["AIR.MISSILE.M1.SUBSURFACE"]=[{type:"text",stroke:!1,x:68,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:68,y:125,fontsize:30,text:"U"}],G["AIR.MISSILE.M1.SPACE"]=[{type:"text",stroke:!1,x:68,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:68,y:125,fontsize:30,text:"P"}],G["AIR.MISSILE.M1.ANTI-BALLISTIC"]=[{type:"text",stroke:!1,x:68,y:95,fontsize:30,text:"A"},{type:"text",stroke:!1,x:68,y:125,fontsize:30,text:"B"}],G["AIR.MISSILE.M1.BALLISTIC"]={type:"text",stroke:!1,x:68,y:110,fontsize:30,text:"B"},G["AIR.MISSILE.M1.CRUISE"]={type:"text",stroke:!1,x:68,y:110,fontsize:30,text:"C"},G["AIR.MISSILE.M1.LAND"]={type:"text",stroke:!1,x:68,y:110,fontsize:30,text:"L"},G["AIR.MISSILE.M1.INTERCEPTOR"]={type:"text",stroke:!1,x:68,y:110,fontsize:30,text:"I"},G["AIR.MISSILE.M2.AIR"]={type:"text",stroke:!1,x:132,y:110,fontsize:30,text:"A"},G["AIR.MISSILE.M2.SURFACE"]={type:"text",stroke:!1,x:132,y:110,fontsize:30,text:"S"},G["AIR.MISSILE.M2.SUBSURFACE"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"U"}],G["AIR.MISSILE.M2.SPACE"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"P"}];G["AIR.MISSILE.M2.LAUNCHED"]={type:"text",stroke:!1,x:132,y:110,fontsize:30,text:"L"},G["AIR.MISSILE.M2.MISSILE"]={type:"text",stroke:!1,x:132,y:110,fontsize:30,text:"M"},G["AIR.MISSILE.M2.PATRIOT"]={type:"text",stroke:!1,x:132,y:110,fontsize:30,text:"P"},G["AIR.MISSILE.M2.STANDARD MISSILE - 2 (SM-2)"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"2"}],G["AIR.MISSILE.M2.STANDARD MISSILE - 6 (SM-6)"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"6"}],G["AIR.MISSILE.M2.EVOLVED SEA SPARROW MISSILE (ESSM)"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"S"}],G["AIR.MISSILE.M2.ROLLING AIRFRAME MISSILE (RAM)"]={type:"text",stroke:!1,x:132,y:110,fontsize:30,text:"R"},G["AIR.MISSILE.M2.SHORT RANGE"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"S"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"R"}],G["AIR.MISSILE.M2.MEDIUM RANGE"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"M"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"R"}],G["AIR.MISSILE.M2.INTERMEDIATE RANGE"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"I"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"R"}],G["AIR.MISSILE.M2.LONG RANGE"]=[{type:"text",stroke:!1,x:132,y:95,fontsize:30,text:"L"},{type:"text",stroke:!1,x:132,y:125,fontsize:30,text:"R"}],G["AIR.MISSILE.M2.INTERCONTINENTAL"]={type:"text",stroke:!1,x:132,y:110,fontsize:30,text:"I"},G["GR.IC.ADMINISTRATIVE"]=e("ADM"),G["GR.IC.AIR DEFENSE CHAPARRAL"]=[{type:"path",fill:!1,d:"m 85,80 30,0 c 5.54,0 10,4.46 10,10 l 0,5 c 0,5.54 -4.46,10 -10,10 l -30,0 c -5.54,0 -10,-4.46 -10,-10 l 0,-5 c 0,-5.54 4.46,-10 10,-10 z"},{type:"text",stroke:!1,x:100,y:101,fontsize:20,text:"C"}],G["GR.IC.AIR DEFENSE COMPOSITE"]={type:"path",d:"M85,120 C85,110 115,110 115,120 M90,115 L90,90 C90,80 110,80 110,90 L110,115 M100,112 l0,-30",fill:!1},G["GR.IC.AIR DEFENSE H/MAD"]=e("HMD"),G["GR.IC.AIR DEFENSE H/MAD HAWK"]={type:"text",stroke:!1,x:100,y:101,fontsize:20,text:"H"},G["GR.IC.AIR DEFENSE H/MAD PATRIOT"]={type:"text",stroke:!1,x:100,y:101,fontsize:20,text:"P"},G["GR.IC.AIR DEFENSE MISSILE"]={type:"path",d:"M90,120 L90,90 C90,80 110,80 110,90 L110,120",fill:!1},G["GR.IC.AIR DEFENSE TARGETING UNIT"]=[{type:"path",d:"M80,100 l20,-15 0,15 20,-15 M75,80 C75,100 85,115 105,115",fill:!1},{type:"circle",cx:75,cy:110,r:5}],G["GR.IC.AIR DEFENSE THEATER MISSILE DEFENSE UNIT"]=e("TMD"),G["GR.IC.AIR DEFENSE SHORT RANGE"]=e("SRD"),G["GR.IC.AIR DEFENSE STINGER"]=[{type:"path",fill:!1,d:"m 85,80 30,0 c 5.54,0 10,4.46 10,10 l 0,5 c 0,5.54 -4.46,10 -10,10 l -30,0 c -5.54,0 -10,-4.46 -10,-10 l 0,-5 c 0,-5.54 4.46,-10 10,-10 z"},{type:"text",stroke:!1,x:100,y:101,fontsize:20,text:"S"}],G["GR.IC.AIR DEFENSE VULCAN"]=[{type:"path",fill:!1,d:"m 85,80 30,0 c 5.54,0 10,4.46 10,10 l 0,5 c 0,5.54 -4.46,10 -10,10 l -30,0 c -5.54,0 -10,-4.46 -10,-10 l 0,-5 c 0,-5.54 4.46,-10 10,-10 z"},{type:"text",stroke:!1,x:100,y:101,fontsize:20,text:"V"}],G["GR.IC.AIR DEFENSE GUN UNIT"]={type:"path",d:"M100,80 L100,120 M92,90 l0,20 M108,90 l0,20",fill:!1},G["GR.IC.AIR TRAFFIC SERVICES"]={type:"path",d:"m 100,95 0,25 m 7.5,-32.5 c 0,4.1 -3.4,7.5 -7.5,7.5 -4.1,0 -7.5,-3.4 -7.5,-7.5 0,-4.1 3.4,-7.5 7.5,-7.5 4.1,0 7.5,3.4 7.5,7.5 z M 60,85 l 40,15 40,-15 0,30 -40,-15 -40,15 z"},G["GR.IC.AIRPORT OF DEBARKATION"]=[{type:"path",fill:!1,d:"M80,70 l40,0 M80,80 l25,-25 M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19"},{type:"circle",cx:100,cy:100,r:20,fill:!1}],G["GR.IC.ALLIED COMMAND EUROPE RAPID REACTION CORPS (ARRC)"]=e("ARRC"),G["GR.IC.ALLIED COMMAND OPERATIONS"]=e("ACO"),G["GR.IC.AMMUNITION"]={type:"path",d:"m 90,117 0,-25 c 0,-15 20,-15 20,0 l 0,25 m -25,0 30,0",fill:!1},G["GR.IC.ARMOUR"]={type:"path",d:"M125,80 C150,80 150,120 125,120 L75,120 C50,120 50,80 75,80 Z",fill:!1},G["GR.IC.AVIATION ROTARY WING"]=G["AR.I.MILITARY ROTARY WING"],G["GR.IC.AVIATION FIXED WING"]=G["AR.I.MILITARY FIXED WING"],G["GR.IC.AVIATION COMPOSITE"]=[R._scale(.5,[G["GR.IC.AVIATION FIXED WING"],{type:"rotate",degree:90,x:100,y:100,draw:[G["GR.IC.AVIATION ROTARY WING"]]}])],G["GR.IC.AVIATION TACTICAL AIR CONTROL PARTY"]=e("TACP"),G["GR.IC.AVIATION FORWARD AIR CONTROLLER"]=e("FAC"),G["GR.IC.BAND"]=e("BAND"),G["GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"]=e("ATF"),G["GR.IC.CBRN"]=[{type:"path",d:"M80,120 c0,-20 10,-40 50,-43 m-10,43 c0,-20 -10,-40 -50,-43",fill:!1},{type:"circle",cx:70,cy:85,r:8},{type:"circle",cx:130,cy:85,r:8}],G["GR.IC.CIVIL AFFAIRS"]=e("CA"),G["GR.IC.CIVIL-MILITARY-COOPERATION"]={type:"path",d:"m 60,80 80,0 0,20 c 0,25 -80,25 -80,0 z",fill:!1},G["GR.IC.COMMAND AND CONTROL"]=e("C2"),G["GR.IC.COMBAT"]=e("CBT"),G["GR.IC.COMBAT SERVICE SUPPORT"]=e("CSS"),G["GR.IC.COMBAT SUPPORT"]=e("CS"),G["GR.IC.COMBAT SUPPORT (MANOEUVRE ENHANCEMENT)"]={type:"path",d:"m 85,80 0,25 15,15 15,-15 0,-25 z"},G["GR.IC.COMBINED ARMS"]={type:"path",d:"m 70,80 60,40 m 0,-40 -60,40 m 55,-40 c 25,0 25,40 0,40 l -50,0 C 50,120 50,80 75,80 z",fill:!1},G["GR.IC.COUNTER-INTELLIGENCE"]=e("CI"),G["GR.IC.CRIMINAL INVESTIGATION DIVISION"]=e("CID"),G["GR.IC.DIVING"]=[],G["GR.IC.DOG"]=e("DOG"),G["GR.IC.DRILLING"]={type:"path",d:"m 85,80 5,40 20,0 5,-40 z"},G["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]=e("DEA"),G["GR.IC.ELECTRONIC RANGING"]={type:"path",d:"M120,130 c-40,20 -80,-45 -40,-70 z M100,95 L140,75",fill:!!t&&s},G["GR.IC.ELECTRONIC WARFARE"]=e("EW"),G["GR.IC.EMERGENCY MEDICAL OPERATION"]={type:"path",d:"m 90,60 0,22.7 -19.7,-11.3 -10,17.3 L 80,100 l -19.7,11.3 10,17.3 L 90,117.3 90,140 l 20,0 0,-22.7 19.7,11.3 10,-17.3 L 120,100 l 19.7,-11.3 -10,-17.3 L 110,82.7 110,60 90,60 z"},G["GR.IC.ENGINEER"]={type:"path",fill:!1,d:"M60,120 L60,80 140,80 140,120 M100,80 L100,110"},G["GR.IC.ENVIRONMENTAL PROTECTION"]={type:"path",d:"m 100,80 -10,15 5,0 -10,10 5,0 -10,10 15,0 0,5 10,0 0,-5 15,0 -10,-10 5,0 -10,-10 5,0 z",fill:!1},G["GR.IC.EXPLOSIVE ORDNANCE DISPOSAL"]=e("EOD"),G["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]=e("FBI"),G["GR.IC.FIELD ARTILLERY"]={type:"circle",cx:100,cy:100,r:15},G["GR.IC.FIELD ARTILLERY OBSERVER"]=[{type:"circle",cx:100,cy:108,r:5},{type:"path",d:"m 80,120 30,-20 m -30,20 20,-40 20,40 z",fill:!1}],G["GR.IC.FIELD CAMP CONSTRUCTION"]=[G["GR.IC.ENGINEER"],{type:"text",stroke:!1,x:100,y:77,fontsize:25,text:"CAMP"}],G["GR.IC.FINANCE"]={type:"path",d:"m 80,95 10,-10 20,0 10,10 m -40,0 0,20 40,0 0,-20 z",fill:!1},G["GR.IC.FIRE PROTECTION"]={type:"path",d:"m 120,90 -5,5 -10,-10 5,-5 -20,0 5,5 -10,10 -5,-5 0,20 5,-5 10,10 -5,5 20,0 -5,-5 10,-10 5,5 z"},G["GR.IC.FIXED WING MISO"]=[{type:"path",fill:!!t&&s,stroke:n,d:"M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0"},{type:"path",d:"M 78.8 61.5 C 68.1 61.5 68.1 78.5 78.8 78.5 L 100 70 L 78.8 61.5 z M 100 70 L 121.3 78.5 C 131.9 78.5 131.9 61.5 121.3 61.5 L 100 70 z"}],G["GR.IC.GEOSPATIAL SUPPORT"]=e("GEO"),G["GR.IC.GOVERNMENT ORGANIZATION"]=e("GO"),G["GR.IC.INFORMATION OPERATIONS"]=e(t?"IW":"IO"),G["GR.IC.INTERNATIONAL SECURITY ASSISTANCE FORCE (ISAF)"]=e("ISAF"),G["GR.IC.INTERROGATION"]=e("IPW"),G["GR.IC.JOINT FIRE SUPPORT"]=e("JFS"),G["GR.IC.JOINT INFORMATION BUREAU"]=e("JIB"),G["GR.IC.JOINT INTELLIGENCE CENTRE"]=e("JIC"),G["GR.IC.JUDGE ADVOCATE GENERAL"]=e("JAG"),G["GR.IC.LABOUR"]={type:"path",d:"m 90,85 20,0 m -10,0 0,25 -10,0 10,10 10,-10 -10,0",fill:!1},G["GR.IC.LAUNDRY/BATH"]={type:"path",d:"m 95,80 10,10 0,30 m 0,-30 -10,0 m 10,0 -10,10",fill:!1},G["GR.IC.LAW ENFORCEMENT"]={type:"path",d:"M 100,118 C 76,109 85,95 82,82 c 6,7 12,7 18,0 6,7 12,7 18,0 -3,13 6,27 -18,36 z",fill:!1},G["GR.IC.LIAISON"]=e("LO"),G["GR.IC.MAINTENANCE"]={type:"path",d:"M70,90 c10,0 10,20 0,20 m10,-10 l40,0 m10,-10 c-10,0 -10,20 0,20",fill:!1},G["GR.IC.MATERIEL"]=e("MAT"),G["GR.IC.MESSENGER"]=e("M"),G["GR.IC.METEOROLOGICAL"]=e("MET"),G["GR.IC.MILITARY INFORMATION SUPPORT OPERATIONS (MISO)"]={type:"path",d:"M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0"},G["GR.IC.MILITARY INTELLIGENCE"]=e("MI"),G["GR.IC.MILITARY POLICE"]=e("MP"),G["GR.IC.MINE"]={type:"path",d:"m 120,100 c 0,5.5 -9,10 -20,10 -11,0 -20,-4.5 -20,-10 0,-5.5 9,-10 20,-10 11,0 20,4.5 20,10 z m -5,-20 -30,40 m 0,-40 30,40 m -15,-40 0,40"},G["GR.IC.MINE CLEARING"]=[G["GR.IC.MINE"],{type:"text",stroke:!1,x:100,y:77,fontsize:25,text:"CLR"}],G["GR.IC.MINE LAUNCHING"]=[G["GR.IC.MINE"],{type:"path",d:"m 80,125 0,10 40,0 0,-10 z"}],G["GR.IC.MINE LAYING"]=[G["GR.IC.MINE"],{type:"path",d:"m 80,65 0,10 40,0 0,-10 z"}],G["GR.IC.MISSILE"]={type:"path",d:"M90,120 L90,90 C90,80 110,80 110,90 L110,120 M100,120 L100,80",fill:!1},G["GR.IC.MISSILE.LIGHT"]={type:"path",d:"M90,90 L110,90"},G["GR.IC.MISSILE.MEDIUM"]={type:"path",d:"M90,90 L110,90 M90,97 L110,97"},G["GR.IC.MISSILE.HEAVY"]={type:"path",d:"M90,90 L110,90 M90,97 L110,97 M90,104 L110,104"},G["GR.IC.MORALE, WELFARE, AND RECREATION"]={type:"text",stroke:!1,x:100,y:110,fontsize:30,text:"MWR"},G["GR.IC.MORTAR"]=[{type:"circle",cx:100,cy:115,r:5,fill:!1},{type:"path",d:"M100,111 l0,-30 M90,90 l10,-10 10,10",fill:!1}],G["GR.IC.MORTUARY AFFAIRS"]={type:"path",d:"m 90,95 20,0 m -10,-10 0,30 m -15,-35 30,0 0,40 -30,0 z",fill:!1},G["GR.IC.MULTINATIONAL (MN)"]=e("MN"),G["GR.IC.NAVAL"]=[{type:"path",d:"m 105,85 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -20,5 30,0 m -15,0 0,30",fill:!1},{type:"path",d:"M 82.3 102.6 C 82.3 113.9 84.2 115.9 84.2 115.9 L 86.5 114.1 C 90.2 117.8 94.8 120.8 99.9 120.9 L 100.5 120.9 L 101 120.9 C 106.2 120.8 110.8 117.8 114.4 114.1 L 116.7 115.9 C 116.7 115.9 118.6 113.9 118.7 102.6 C 113.9 106.8 108.9 109 108.9 109 L 110.9 110.7 C 110.9 110.7 106.8 115.2 100.5 115.2 L 100.5 115.2 C 100.5 115.2 100.4 115.2 100.4 115.2 C 94.2 115.2 90 110.7 90 110.7 L 92 109 C 92 109 87 106.8 82.3 102.6 z",stroke:!1}],G["GR.IC.OBSERVER/OBSERVATION"]={type:"path",d:"m 100,80 -25,40 50,0 z",fill:!1},G["GR.IC.ORDNANCE"]={type:"path",d:"M 90,97 83,83 m 27,14 7,-14 M 95,95 90,81 m 15,14 5,-14 m 10,26.5 c 0,6.9 -9,12.5 -20,12.5 -11,0 -20,-5.6 -20,-12.5 0,-6.9 9,-12.5 20,-12.5 11,0 20,5.6 20,12.5 z",fill:!1},G["GR.IC.PERSONNEL SERVICES"]=e("PS"),G["GR.IC.PETROLEUM OIL LUBRICANTS"]={type:"path",d:"m 100,119 0,-24 m 0,0 C 99,95 85,81 85,81 l 30,0 z",fill:!1},G["GR.IC.PIPELINE"]={type:"path",d:"m 115,110 15,0 m -15,-15 15,0 m -45,15 -15,0 M 85,95 70,95 m 30,-15 0,10 -15,0 0,25 30,0 0,-25 -15,0 m -10,-10 20,0",fill:!1},G["GR.IC.POSTAL"]={type:"path",d:"m 80,80 30,0 c -1.4,15.5 0,25 10,35 -20,0 -40,-20 -40,-35 z",fill:!1},G["GR.IC.PUBLIC AFFAIRS"]=e("PA"),G["GR.IC.PUBLIC AFFAIRS BROADCAST"]=e("BPAD"),G["GR.IC.PSYCHOLOGICAL OPERATIONS"]={type:"path",fill:!!t&&s,stroke:n,d:"M70,85 l40,0 10,-10 0,50 -10,-10 -40,0 z M120,85 l10,0 M120,95 l10,0 M120,105 l10,0 M120,115 l10,0"},G["GR.IC.QUARTERMASTER"]={type:"path",fill:!1,d:"m 115,95 c 0,15 15,15 15,0 0,-15 -15,-15 -15,0 z m 0,0 -45,0 0,10 10,0 0,-10"},G["GR.IC.RADAR"]={type:"path",d:"M72,95 l30,-25 0,25 30,-25 M70,70 c0,35 15,50 50,50",fill:!1},G["GR.IC.RADIO"]=[{type:"circle",cx:100,cy:130,r:10,fill:!1},{type:"path",fill:!1,d:"M100,120 l0,-60 M70,70 l10,-10 10,10 10,-10 10,10 10,-10 10,10"}],G["GR.IC.RADIO RELAY"]=[{type:"circle",cx:100,cy:130,r:10,fill:!1},{type:"path",fill:!1,d:"M100,120 l-15,-40 15,0 0,-20 M70,60 l60,0"}],G["GR.IC.RADIO TELETYPE CENTRE"]=[{type:"text",stroke:!1,x:100,y:135,fontsize:30,text:"C"},{type:"path",fill:!1,d:"M100,140 l0,-80  M70,60 l60,0 M80,70 l40,0"}],G["GR.IC.RAILHEAD"]=[{type:"path",fill:!1,d:"M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19"},{type:"circle",cx:100,cy:100,r:20,fill:!1},R._translate(0,-50,[{type:"path",d:"M60,120 l80,0",fill:!1},{type:"circle",fill:!1,cx:65,cy:125,r:5},{type:"circle",fill:!1,cx:75,cy:125,r:5},{type:"circle",fill:!1,cx:125,cy:125,r:5},{type:"circle",fill:!1,cx:135,cy:125,r:5}])],G["GR.IC.RELIGIOUS SUPPORT"]=e("REL"),G["GR.IC.REPLACEMENT HOLDING UNIT"]=e("RHU"),G["GR.IC.SEA-AIR-LAND"]=e("SEAL"),G["GR.IC.SEAPORT OF DEBARKATION"]=[{type:"path",fill:!1,d:"M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19"},{type:"circle",cx:100,cy:100,r:20,fill:!1},R._translate(0,-35,R._scale(.6,G["GR.IC.NAVAL"]))],G["GR.IC.SECURITY"]=e("SEC"),G["GR.IC.SECURITY POLICE (AIR)"]=[e("SP"),{type:"path",d:"M 78.8 121.5 C 68.1 121.5 68.1 138.5 78.8 138.5 L 100 130 L 78.8 121.5 z M 100 130 L 121.3 138.5 C 131.9 138.5 131.9 121.5 121.3 121.5 L 100 130 z"}],G["GR.IC.SENSOR"]={type:"path",d:"m 100,60 c 0,15 25,40 40,40 -15,0 -40,25 -40,40 0,-15 -25,-40 -40,-40 15,0 40,-25 40,-40 z"},G["GR.IC.SHORE PATROL"]=e("SP"),G["GR.IC.SNIPER"]={type:"path",fill:!1,d:"M 60 85 L 90 85 L 60 85 z M 110 85 L 140 85 L 110 85 z M 100 90 L 100 115 L 100 90 z"},G["GR.IC.SPECIAL FORCES"]=e("SF"),G["GR.IC.SPECIAL OPERATIONS FORCES"]=G["AR.I.SPECIAL OPERATIONS FORCES"],G["GR.IC.SURVEILLANCE"]={type:"path",d:"m 100,80 -25,40 50,0 z"},G["GR.IC.SURVEY"]=[{type:"path",d:"M85,120 l15,-15 15,15 ",fill:!1},{type:"path",d:"M100,105 l0,-25 20,12.5 z",fill:!!t&&s}],G["GR.IC.SUSTAINMENT"]=e("SUST"),G["GR.IC.TELEPHONE SWITCH"]=[{type:"text",stroke:!1,x:100,y:135,fontsize:30,text:"C"},{type:"path",fill:!1,d:"M100,140 l0,-80  M70,60 l60,0"}],G["GR.IC.TOPOGRAPHIC"]={type:"path",fill:!1,d:"m 85,105 c 10,5 20,5 30,0 m -15,-15 15,30 m -30,0 15,-30 0,-10"},G["GR.IC.TRANSPORTATION"]=[{type:"path",fill:!1,d:"M100,80 l0,40 M81,90.5 l38,19 M81,109.5 l38,-19"},{type:"circle",cx:100,cy:100,r:20,fill:!1}],G["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]=e("TSA"),G["GR.IC.UNMANNED SYSTEMS"]=G["AR.I.UNMANNED AERIAL VEHICLE"],G["GR.IC.VIDEO IMAGERY"]={type:"path",fill:!1,d:"m 140,110 -26,0 m 7,-20 19,0 m -15,-10 -65,0 0,40 50,0 z m 15,5 0,30"},G["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]=e("USSS"),G["GR.IC.WATER"]={type:"path",d:"m 65,90 50,0 c 10,0 20,10 20,20 m -40,-30 20,0 m -10,0 0,10",fill:!1},G["GR.IC.WATER PURIFICATION"]=[G["GR.IC.WATER"],{type:"text",stroke:!1,x:90,y:110,fontsize:20,text:"PURE"}],G["GR.IC.FF.AIR ASSAULT WITH ORGANIC LIFT"]={Unknown:{type:"path",d:"M35,120 L 90,120 l10,10 10,-10 L165,120",fill:!1},Friend:{type:"path",d:"M25,120 L 90,120 l10,10 10,-10 L175,120",fill:!1},Neutral:{type:"path",d:"M45,120 L 90,120 l10,10 10,-10 L155,120",fill:!1},Hostile:{type:"path",d:"M50,120 L 90,120 l10,10 10,-10 L150,120",fill:!1}}[M],G["GR.IC.FF.AIR DEFENCE"]={Unknown:{type:"path",d:"M65,140 C65,115 135,115 135,140",fill:!1},Friend:{type:"path",d:"M25,150 C25,110 175,110 175,150",fill:!1},Neutral:{type:"path",d:"M45,150 C45,110 155,110 155,150",fill:!1},Hostile:{type:"path",d:"M70,140 C70,115 130,115 130,140",fill:!1}}[M],G["GR.IC.FF.AIR AND NAVAL GUNFIRE LIAISON COMPANY"]=[],G["GR.IC.FF.AMPHIBIOUS"]={Unknown:{type:"path",d:"M30,105 c10,0 0,-15 13.5,-15  c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c13.5,0 3.5,15 13.5,15",fill:!1},Friend:{type:"path",d:"M25,110 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 20,20",fill:!1},Neutral:{type:"path",d:"M45,90 c18.8,0 0,20 18,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18,-20",fill:!1},Hostile:{type:"path",d:"M32,105 c10,0 0,-15 11.5,-15  c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c18.8,0 0,20 18.8,20 c18.8,0 0,-20 18.8,-20 c11.5,0 1.5,15 11.5,15",fill:!1}}[M],G["GR.IC.FF.ANALYSIS"]={type:"path",d:"m 100,120 0,-65 m 0,90 -30,-25 60,0 z",fill:!1},G["GR.IC.FF.ANTITANK/ANTIARMOUR"]={Unknown:{type:"path",fill:!1,d:"M55,135 L100,33 145,135"},Friend:{type:"path",fill:!1,d:"M25,150 L100,52 175,150"},Neutral:{type:"path",fill:!1,d:"M45,150 L100,47 155,150"},Hostile:{type:"path",fill:!1,d:"M60,132 L100,30 140,132"}}[M],G["GR.IC.FF.BORDER PATROL"]=[{type:"path",stroke:!1,d:"M 122.8 66.8 C 119.9 66.8 117.4 68.6 117.4 71.6 L 117.4 73.1 L 128.7 73.1 L 128.7 72.4 C 128.7 68.8 126.5 66.8 122.8 66.8 z M 108.6 74.8 L 108.6 76 L 117.6 76 L 117.5 77.5 L 118 80.8 C 119.1 81.5 118.9 82.5 120.8 83.5 C 122.1 84.1 124 84 125.2 83.4 C 127.5 82.4 129 79.2 128.3 76 L 137.5 76 L 137.5 74.8 L 108.6 74.8 z M 94.8 82.1 C 93.3 82.1 92 83.5 92 85 L 92 85.2 C 92 86.6 96 91.3 97 92.6 C 98.2 94.3 100.8 98.8 103.2 98.8 C 104.5 98.8 111.1 93.7 112.6 92.8 L 112.6 106.2 L 126.4 85.6 C 123 85.6 114.9 85.2 112.2 85.9 C 110.2 86.4 105 91.6 103.6 91.7 C 103.4 91 100.6 87.5 100 86.5 C 99.2 85.4 97.2 82.1 95.6 82.1 L 94.8 82.1 z M 130.4 85.6 C 129.6 85.6 117.5 104.1 116.3 106.2 L 128.1 106.2 L 128.1 110.6 L 112.5 110.6 L 112.5 133.2 L 120.7 133.2 L 122 117.5 L 124.3 117.5 L 125.6 133.2 L 133.5 133.2 L 133.5 87.9 C 133.5 87.2 131.2 85.6 130.4 85.6 z M 66.9 90.7 C 66.5 91.4 62.5 96.9 62.5 96.9 C 62.5 97.8 76.7 107.2 78.5 108.3 C 81.4 110.2 83.9 112.1 86.7 114 C 88.2 115 89.4 115.9 90.8 116.8 C 92.1 117.7 94.1 118.5 94.1 120.4 L 94.1 133.2 L 105.5 133.2 L 105.5 121.7 C 105.5 120.6 107.2 119 107.2 118.8 C 107.2 117.6 106.1 118.6 105.6 116.9 C 105.2 115.4 105.4 115.6 104.5 114.5 C 103.5 113.1 101.9 112 99.8 112 C 96.8 112 97.6 111.8 95.3 110.3 C 93.9 109.3 92.5 108.4 91.2 107.4 C 88.7 105.5 85.8 103.5 83.2 101.8 C 80.9 100.3 68.2 91 66.9 90.7 z M 67.9 92.6 L 72.7 95.7 L 72.8 103 L 67.9 99.9 L 67.9 92.6 z M 77.8 99.3 L 82.6 102.6 L 82.6 110 L 77.8 106.6 L 77.8 99.3 z M 87.4 106.2 L 92.5 109.5 L 92.4 116.9 L 87.4 113.5 L 87.4 106.2 z"},{type:"path",fill:!!t&&s,stroke:!1,d:"M 117.4 73.1 L 117.4 74.8 L 128.7 74.8 L 128.7 73.1 L 117.4 73.1 z M 126.4 85.6 L 112.6 106.2 L 112.6 110.6 L 128.1 110.6 L 128.1 106.2 L 116.4 106.2 C 117.5 104.1 129.6 85.6 130.4 85.6 L 126.4 85.6 z M 67.9 92.6 L 67.9 99.9 L 72.8 103 L 72.7 95.7 L 67.9 92.6 z M 77.8 99.3 L 77.8 106.6 L 82.6 110 L 82.6 102.6 L 77.8 99.3 z M 87.4 106.2 L 87.4 113.5 L 92.4 116.9 L 92.5 109.5 L 87.4 106.2 z "}],G["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]={type:"path",fill:!1,d:"m 80,60 20,20 20,-20 m -20,0 0,80"},G["GR.IC.FF.CORPS SUPPORT"]={Unknown:{type:"path",d:"M160,75 l-15,25 15,25",fill:!1},Friend:{type:"path",d:"M175,50 l-30,50 30,50",fill:!1},Neutral:{type:"path",d:"M155,50 l-20,50 20,50",fill:!1},Hostile:{type:"path",d:"M150,80 l-15,20 15,20",fill:!1}}[M],G["GR.IC.FF.CUSTOMS SERVICE"]=[{type:"path",stroke:!1,d:"M 115.5 69.8 C 115.8 70.4 116.9 72.9 117.5 72.9 L 128.3 72.9 L 128.3 69.8 L 115.5 69.8 z M 117.3 74.7 C 116.8 74.7 116 75.7 115.8 76.1 L 117.2 76.1 L 117.2 76.8 C 117.2 79.6 119.8 81.8 122.8 81.8 C 126.5 81.8 128.3 78.6 128.3 74.7 L 117.3 74.7 z M 111.3 83.6 C 110.5 83.6 99.4 91.8 97.8 92.9 C 95.6 94.4 93 96.1 91 97.7 C 89.1 99.2 85.4 100.5 85.4 103.6 L 85.4 104 C 85.4 104.7 87.1 106.7 88.2 106.7 L 88.8 106.7 C 90.2 106.7 108 93.4 111.3 91.7 L 111.3 105.3 L 126 83.6 L 111.3 83.6 z M 75.3 83.6 C 74.5 83.6 73.4 84.4 73.4 85 L 73.4 108.9 C 73.4 109.8 73.9 110.2 74.4 110.5 L 78.5 110.5 L 78.5 83.6 L 75.3 83.6 z M 78.5 110.5 L 78.5 135.2 L 105.6 135.2 L 105.6 110.5 L 78.5 110.5 z M 130.5 83.6 C 129.6 83.6 123.8 92.9 122.9 94.2 C 121.9 95.7 115.7 104.5 115.5 105.3 L 127.6 105.3 L 127.6 110.3 L 111.5 110.3 L 111.5 134.8 L 119.6 134.8 C 120.6 134.8 121.1 127.9 121.3 126.6 C 121.7 123.9 122.4 120.4 122.6 117.8 L 122.9 117.8 L 125.4 134.8 L 133.9 134.8 L 133.9 86.7 C 133.9 85.6 131.9 83.6 130.7 83.6 L 130.5 83.6"},{type:"path",fill:!!t&&s,stroke:!1,d:"M 117.5 72.9 L 117.3 74.7 L 128.3 74.7 L 128.3 72.9 L 117.5 72.9 z M 126 83.7 L 111.3 105.3 L 111.5 110.3 L 127.7 110.3 L 127.7 105.3 L 115.5 105.3 C 115.7 104.5 121.9 95.7 122.9 94.3 C 123.8 92.9 129.6 83.7 130.5 83.7 L 126 83.7 z "}],G["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]={type:"path",stroke:!1,d:"M 100.2 62.3 C 100.1 63.2 99 66.3 98.7 67.4 C 97.8 69.9 99.4 70 99.4 72.3 L 99.4 73 C 99.4 73.7 98.9 73.5 98.3 73.8 C 96.6 72.4 94.2 71 91.3 71 L 90 71 C 84.2 71 80 75.5 74.6 75.5 L 73.9 75.5 C 72.3 75.5 71.5 74.1 71.3 75.8 L 74.3 77.2 C 71.8 82.4 69.9 89.7 67.5 95.5 C 66.3 98.6 65.3 101.6 64.1 104.7 C 63.5 106.3 63.1 107.7 62.5 109.3 C 62 110.5 61.8 113.1 60.2 113.2 C 62.4 116.4 68 120.5 73.3 120.5 L 76 120.5 C 81.6 120.5 87.3 116.6 89.5 113.2 L 88.2 113.2 L 75.4 77.2 L 74.5 77.2 L 74.5 77 L 75.4 77.2 L 78.6 77.7 L 79.3 77.7 L 89.3 76.2 L 90.4 76.3 C 93.7 76.3 93.8 80.2 94.7 80.2 L 97.7 80.2 L 97.7 129.2 L 86.1 129.2 L 86.1 131.5 L 81.4 131.5 L 81.4 134.1 L 77.5 134.1 L 77.5 138.2 L 123.3 138.2 L 123.3 133.9 L 119.3 133.9 L 119.3 131.6 L 114.5 131.6 L 114.5 129.2 L 102.6 129.2 L 102.6 80.2 L 106 80.2 C 107 80.2 106.6 76.4 110.7 76.4 L 111.3 76.4 L 121.2 77.7 L 122.2 77.7 L 125.4 77.3 C 124.3 79.7 123.1 83.8 122.1 86.4 C 120.9 89.6 119.9 92.6 118.7 95.8 C 117.5 98.9 116.6 101.9 115.4 105 C 114.9 106.4 114.2 108.1 113.7 109.6 C 113.4 110.4 113.1 111.1 112.9 111.9 C 112.5 113.2 112.8 113.2 111.2 113.2 C 113.3 116.4 119.2 120.5 124.6 120.5 L 127.2 120.5 C 132.6 120.5 138.8 116.4 140.9 113.2 L 139.8 113.2 L 126.4 77.1 C 127.4 76.9 129.3 76.2 129.3 75.3 C 129.3 74.5 127.8 75.5 126.7 75.5 L 126.3 75.5 C 120.8 75.5 116.6 71 110.9 71 L 109.6 71 C 106.7 71 104.2 72.4 102.6 73.8 C 101.8 73.4 101.3 73.6 101.3 72.3 C 101.3 71.9 102.4 68.8 102.5 68.5 L 100.6 62.3 L 100.2 62.3 z M 126.1 80.8 L 137.8 113.2 L 114.1 113.2 L 126.1 80.8 z M 74.8 80.8 L 86.5 113.2 L 63.1 113.1 L 74.8 80.8 z"},G["GR.IC.FF.DIRECTION FINDING"]={type:"path",d:"M100,140 l0,-80 M80,80 l20,-20 20,20",fill:!1},G["GR.IC.FF.DIVISION AND BELOW SUPPORT"]={Unknown:{type:"path",d:"M40,75 l15,25 -15,25",fill:!1},Friend:{type:"path",d:"M25,50 l30,50 -30,50",fill:!1},Neutral:{type:"path",d:"M45,50 l20,50 -20,50",fill:!1},Hostile:{type:"path",d:"M50,80 l15,20 -15,20",fill:!1}}[M],G["GR.IC.FF.EMERGENCY OPERATION"]=[{type:"path",d:"M 100 65 L 115.2 91.3 L 130.3 117.5 C 133.3 112.4 135 106.4 135 100 C 135 80.7 119.3 65 100 65 z M 100 65 C 80.7 65 65 80.7 65 100 C 65 106.4 66.7 112.4 69.7 117.5 L 84.8 91.3 L 100 65 z M 69.7 117.5 C 75.7 128 87 135 100 135 C 113 135 124.3 128 130.3 117.5 L 100 117.5 L 69.7 117.5 z"},{type:"path",fill:!!t&&s,stroke:!1,d:"M 69.7,117.5 100,65 l 30.3,52.5 z"}],G["GR.IC.FF.FIELD ARTILLERY ROCKET"]={type:"path",d:"M100,150 l0,-97 M85,130 l0,-50 M115,130 l0,-50 M85,73 l15,-20 15,20",fill:!1},G["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"]={Unknown:{type:"path",d:"M35,80 l130,0 ",fill:!1},Friend:{type:"path",d:"M25,80 l150,0 ",fill:!1},Neutral:{type:"path",d:"M45,80 l110,0 ",fill:!1},Hostile:{type:"path",d:"M50,80 l100,0 ",fill:!1}}[M],G["GR.IC.FF.HORSE"]={type:"path",d:"m 129,72.8 c 0,0 -6.3,2 -9,2.6 -3.4,0.7 -4.9,1.8 -7.7,3.1 -4.2,1.9 -6.8,3.6 -11.3,4.3 -3.3,0.5 -7.7,1.7 -11,1 -3.9,-0.9 -6.1,-2.9 -10.1,-2.9 -3.7,-0 -7.4,-0.6 -10.6,1.3 -2.6,1.6 -4.7,4.2 -5.8,7.1 -2.3,5.4 -0.8,12.5 -1.2,18.4 -0.2,3.1 -0.4,9.3 -0.6,10.2 0,0 1.6,-0 3.4,-2.5 0.9,-1.2 1.7,-3.4 1.9,-4.9 0.5,-3.1 -0.7,-7.5 -0.4,-10 1.1,-0.3 2.4,2.8 2.6,4.7 0.2,2 -1,3.3 -1.4,5.2 -0.5,3 0.3,5 0.6,8.3 0.1,1.6 0.8,3.9 0.5,6 -0.2,2 -0.2,4.3 -0.2,4.3 l 6.9,0 -0.4,-3.8 c 0,0 -1.8,-2.5 -2.1,-4.3 -0.5,-2.7 -0.5,-5.4 0.2,-8 0.5,-2 3.1,-4.3 4.1,-6.1 1.8,-3.1 3.1,-7.1 3.1,-7.1 0,0 5.1,3.4 9.1,4.2 3.8,0.8 11.6,1.4 11.6,1.4 0,0 -0.2,7.3 0.1,12.4 -0,0.1 0.3,3.9 0.3,3.1 -1.4,3.2 -0,8.2 -0,8.2 0,0 2.9,0 6.3,-0 l -0.3,-3.4 c 0,0 -1.5,-3.5 -1.5,-5.3 0,-3.1 0.1,-5.9 0.9,-8.9 0.4,-1.2 0.7,-2.9 1.3,-4 1.4,-2.2 3.1,-3.8 4.2,-6.1 1.1,-2.6 2.3,-5.3 3.6,-7.9 1.6,-3.3 7.8,-7.3 7.8,-7.3 0,0 5,2.9 8.4,4.9 1.2,0.7 3,0.1 3.7,-1 0.7,-1.1 0.8,-2.2 0.3,-3.3 -3.2,-6.7 -7.8,-9.4 -7.8,-9.4 z",stroke:!1},G["GR.IC.FF.INFANTRY"]={Unknown:{type:"path",d:"M50,65L150,135M50,135L150,65"},Friend:{type:"path",d:"M25,50 L175,150 M25,150 L175,50"},Neutral:{type:"path",d:"M45,45L155,155M45,155L155,45"},Hostile:{type:"path",d:"M60,70L140,130M60,130L140,70"}}[M],G["GR.IC.FF.INFANTRY DISMOUNTED"]={Unknown:{type:"path",d:"M 55.7,75.8 148.2,126.3 M 52,126.1 144.4,75.7"},Friend:{type:"path",d:"m 45,70 110,60 M 45,130 155,70"},Neutral:{type:"path",d:"m 45,70 110,60 M 45,130 155,70"},Hostile:{type:"path",d:"M 51.7,73.6 144.3,124.1 m -88.4,0 92.6,-50.5"}}[M],G["GR.IC.FF.INTERCEPT"]={type:"path",d:"M100,120 l0,-60 M80,120 l20,20 20,-20"},G["GR.IC.FF.JAMMING"]={Unknown:{type:"path",d:"M63,60 c10,0 0,10 7,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 7,-10 M40,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10",fill:!1},Friend:{type:"path",d:"M25,60 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 M25,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10",fill:!1},Neutral:{type:"path",d:"M45,60 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10  M45,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10",fill:!1},Hostile:{type:"path",d:"M67,60 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 13,10   M52,75 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 10,-10 c10,0 0,10 10,10 c10,0 0,-10 7,-10",fill:!1}}[M],G["GR.IC.FF.LAW ENFORCEMENT"]={type:"path",d:"m 99.6,51 c -2.8,0 -5,2.3 -5,5.3 0,2.1 1.2,3.9 2.8,4.7 L 87.8,78.3 69.5,78.4 c -0.1,-2.8 -2.3,-5.1 -5,-5.1 -2.8,0 -5,2.3 -5,5.3 0,2.9 2.2,5.3 5,5.3 0.7,0 1.4,-0.2 2,-0.4 l 9.2,16.8 -9.4,17.2 c -0.6,-0.2 -1.2,-0.4 -1.8,-0.4 -2.8,0 -5,2.4 -5,5.3 0,2.9 2.2,5.3 5,5.3 2.8,0 5,-2.3 5,-5.3 0,-0.1 -0,-0.2 -0,-0.3 l 18.3,0.1 9.5,17.1 c -1.6,0.9 -2.7,2.6 -2.7,4.6 0,2.9 2.3,5.3 5,5.3 2.8,0 5,-2.3 5,-5.3 0,-1.9 -0.9,-3.5 -2.3,-4.4 l 9.6,-17.3 18.7,-0.1 c -0,0.1 -0,0.2 -0,0.3 0,2.9 2.3,5.3 5,5.3 2.8,0 5,-2.3 5,-5.3 0,-2.9 -2.2,-5.3 -5,-5.3 -0.8,0 -1.5,0.2 -2.1,0.5 l -9.5,-17.4 9.5,-17.4 c 0.6,0.3 1.4,0.5 2.1,0.5 2.8,0 5,-2.4 5,-5.3 0,-2.9 -2.2,-5.3 -5,-5.3 -2.8,0 -5,2.3 -5,5.3 0,0.1 0,0.2 0,0.3 L 111.8,78.3 102.1,60.8 c 1.5,-0.9 2.5,-2.6 2.5,-4.5 0,-2.9 -2.2,-5.3 -5,-5.3 z"},G["GR.IC.FF.MAIN GUN SYSTEM"]={Unknown:{type:"path",d:"M55,65L55,135"},Friend:{type:"path",d:"M55,50L55,150"},Neutral:{type:"path",d:"M55,45L55,155"},Hostile:{type:"path",d:"M55,72L55,128"}}[M],G["GR.IC.FF.MEDICAL"]={type:"path",d:"M100,"+o.bbox.y1+"L100,"+o.bbox.y2+"M"+o.bbox.x1+",100L"+o.bbox.x2+",100"},G["GR.IC.FF.MEDICAL DISMOUNTED"]={Unknown:{type:"path",d:"m 47.9,100 104,0 M 100,49.1 100,162"},Friend:{type:"path",d:"m 45,100 110,0 m -55,-55 0,110"},Neutral:{type:"path",d:"m 45,100 110,0 m -55,-55 0,110"},Hostile:{type:"path",d:"m 48.1,100 103.7,0 M 100,37.8 100,150.5"}}[M],G["GR.IC.FF.MEDICAL THEATER"]={Unknown:{type:"path",d:"M100,170 l0,-140 M40,75 l15,25 -15,25 M160,75 l-15,25 15,25 M55,100 l90,0",fill:!1},Friend:{type:"path",d:"M100,150 l0,-100 M25,50 l30,50 -30,50 M175,50 l-30,50 30,50 M55,100 l90,0",fill:!1},Neutral:{type:"path",d:"M100,155 l0,-110  M45,50 l20,50 -20,50 M155,50 l-20,50 20,50 M65,100 l70,0",fill:!1},Hostile:{type:"path",d:"M100,172 l0,-144 M50,80 l15,20 -15,20 M150,80 l-15,20 15,20 M65,100 l70,0",fill:!1}}[M],G["GR.IC.FF.MEDICAL CORPS"]={Unknown:{type:"path",d:"M100,170 l0,-140 M160,75 l-15,25 15,25 M30,100 l115,0",fill:!1},Friend:{type:"path",d:"M100,150 l0,-100  M175,50 l-30,50 30,50 M25,100 l120,0",fill:!1},Neutral:{type:"path",d:"M100,155 l0,-110 M155,50 l-20,50 20,50 M45,100 l90,0",fill:!1},Hostile:{type:"path",d:"M100,172 l0,-144  M150,80 l-15,20 15,20 M28,100 l110,0",fill:!1}}[M],G["GR.IC.FF.MEDICAL TREATMENT FACILITY"]=[G["GR.IC.FF.MEDICAL"],{type:"path",fill:!1,d:"M70,90 l0,20  M130,90 l0,20"}],G["GR.IC.FF.MILITARY POLICE"]={type:"path",d:"M 100,140 C 53.7465,122.654 71.0916,95.6737 65.3099,70.6197 c 11.5634,13.4906 23.1267,13.4906 34.6901,0 11.564,13.4906 23.126,13.4906 34.69,0 C 128.908,95.6737 146.254,122.654 100,140 Z",fill:!1},G["GR.IC.FF.MOTORIZED"]={type:"path",d:"M100,"+o.bbox.y1+"L100,"+o.bbox.y2},G["GR.IC.FF.NAVAL"]=[{type:"path",d:"M 100,145 100,65",fill:!1},{type:"path",d:"m 70,70 60,0",fill:!1},{type:"path",d:"m 57.8,105.5 c -2.2,0.1 1.3,20.6 2.8,22.1 0.8,0.8 3.5,-3.8 4.6,-2.6 17.4,20.2 33,19.7 34.7,19.6 0,0 0.2,-0 0.3,0 1.7,0.1 17.3,0.5 34.7,-19.6 1,-1.2 3.7,3.4 4.6,2.6 1.4,-1.5 4.9,-21.9 2.8,-22.1 -2.2,-0.1 -4,4.2 -6.7,6.4 -3,2.4 -7.5,3.4 -7.7,4.5 -0.1,0.8 4.9,3.5 3.9,4.9 -5.1,6.3 -15.1,16.6 -31.3,17 l -0.3,4.3 -0.3,-4.3 c -16.2,-0.4 -26.3,-10.7 -31.3,-17 -1.1,-1.3 4,-4.1 3.9,-4.9 -0.2,-1 -4.7,-2 -7.7,-4.5 -2.7,-2.3 -4.5,-6.6 -6.7,-6.4 z",stroke:!1},{type:"circle",cx:100,cy:60,r:5,fill:!1}],G["GR.IC.FF.PRISON"]={type:"path",stroke:!1,d:"M 62.5 67.9 L 62.5 73.4 L 69.9 73.4 L 69.9 106 C 66.8 106.7 64.4 109.6 64.4 113.4 C 64.4 116 65.8 116.9 65.9 118.4 C 66 120.4 65.6 122.5 65.6 124.7 L 65.6 126.6 L 62.5 126.6 L 62.5 132.1 L 137.5 132.1 L 137.5 126.6 L 136 126.6 L 135.6 117.5 C 138.3 113.4 135.8 107 131.5 106 L 131.5 73.4 L 137.5 73.4 L 137.5 67.9 L 62.5 67.9 z M 74.5 73.4 L 87.2 73.4 L 87.2 108.4 C 87.2 109.2 84.8 109.7 83.9 110.6 C 83.1 111.3 82.2 112.7 81.6 113.6 C 80.5 115.2 78.6 118.7 78.6 121.1 L 76.1 117 C 76.5 116.4 76.9 114.6 76.9 113.7 L 76.9 112.2 C 76.9 109.5 74.5 107.9 74.5 106.5 L 74.5 73.4 z M 91.5 73.4 L 110.2 73.4 L 110.2 90.9 C 109 89.6 108.8 87.8 106.8 85.7 C 105.4 84.3 103.5 83 100.8 83 L 100.3 83 C 98.2 83 96.1 83.6 94.9 84.5 C 94.3 85 93.6 85.4 93.1 86 C 92.4 86.6 92.2 87.3 91.5 87.8 L 91.5 73.4 z M 114.3 73.4 L 127.2 73.4 L 127.2 106.5 C 127.2 106.9 124.8 109.2 124.4 111.1 C 123.7 114.2 124.5 114.6 125 117 L 123.3 120.2 C 122.7 118.3 120.7 115 119.7 113.5 C 118.3 111.4 117.3 109.1 114.3 108.9 L 114.3 73.4 z M 99.7 84.9 L 100.6 84.9 C 104.8 84.9 108.5 90.4 108.5 94.7 L 108.5 96.4 C 108.5 100.4 105 106.2 101.3 106.2 L 99.4 106.2 C 94.9 106.2 91.4 100.2 91.6 95.5 C 91.8 90.7 94.9 84.9 99.7 84.9 z M 110.3 100.5 L 110.2 106.9 L 106.7 106.3 L 110.3 100.5 z M 91.5 103.6 L 94.3 106.8 L 91.5 107.4 L 91.5 103.6 z M 70.7 107.9 C 72.9 107.9 74.7 110.4 74.7 112.7 L 74.7 113.4 C 74.7 117.9 70 120.2 67.6 116.7 C 65.7 113.8 66.9 107.9 70.7 107.9 z M 130.6 107.9 C 132.8 107.9 134.4 110.8 134.4 113.2 L 134.4 113.4 C 134.4 116.7 133 116.7 132 118.2 L 128.9 118.3 L 126.7 115.4 L 126.5 113.2 C 126.1 111 128.2 107.9 130.6 107.9 z M 105.9 108.2 C 107.2 108.2 108.9 109 110.2 109.3 L 110.2 126.6 L 91.5 126.6 L 91.5 110.1 C 91.5 108.6 96.6 108.9 98.4 108.9 C 101.1 108.9 104 108.2 105.9 108.2 z M 114.3 110.8 C 117.2 112.3 117.4 113.4 119 116.4 C 120.1 118.5 121.7 120.9 121.7 124 C 121.9 124.2 122.3 124.9 122.7 124.9 C 124 124.9 125.5 119.8 126.7 118.9 L 126.7 119.4 L 127.2 119.4 L 127.2 126.6 L 114.3 126.6 L 114.3 110.8 z M 87.2 111.3 L 87.2 126.6 L 74.5 126.6 L 74.5 118.9 C 75.8 119.4 77.4 125.4 78.6 125.4 C 80.6 125.4 80.7 119.6 81.9 117.5 C 83.2 115.3 84.4 111.9 87.2 111.3 z M 133.6 119.7 L 133.9 126.6 L 131.5 126.6 L 131.5 120.4 L 133.6 119.7 z M 68.1 119.9 C 68.6 120.1 69.9 120.3 69.9 121.1 L 69.9 126.6 L 67.7 126.6 L 68.1 119.9 z"},G["GR.IC.FF.JAIL BREAK"]=[G["GR.IC.FF.PRISON"],{type:"path",strokewidth:5,d:"m 70,130 L130,70",fill:!1}],G["GR.IC.FF.RECONNAISSANCE"]={Unknown:{type:"path",d:"M50,135L150,65"},Friend:{type:"path",d:"M25,150L175,50"},Neutral:{type:"path",d:"M45,155L155,45"},Hostile:{type:"path",d:"M60,130L140,70"}}[M],G["GR.IC.FF.RECONNAISSANCE DISMOUNTED"]={Unknown:{type:"path",d:"M 52,126.1 144.4,75.7"},Friend:{type:"path",d:"M 45,130 155,70"},Neutral:{type:"path",d:"M 45,130 155,70"},Hostile:{type:"path",d:"M 54,126.1 148.5,73.5"}}[M],G["GR.IC.FF.SEARCH"]={type:"path",d:"m 100,145 0,-90 m 30,65 -30,25 -30,-25",fill:!1},G["GR.IC.FF.SENSOR"]=[{type:"path",d:"M"+o.bbox.x1+",100 L75,100 M"+(200-o.bbox.x1)+",100 L125,100"},{type:"path",d:"M65,85 l70,0 -15,30 -40,0 z",fill:!!t&&s}],G["GR.IC.FF.SIGNAL"]={Unknown:{type:"path",fill:!1,d:"M50,65 100,110 100,90 150,135"},Friend:{type:"path",fill:!1,d:"M25,50 100,110 100,90 175,150"},Neutral:{type:"path",fill:!1,d:"M45,45 100,110 100,90 155,155"},Hostile:{type:"path",fill:!1,d:"M57,70 100,110 100,90 143,130"}}[M],G["GR.IC.FF.SIGNAL DISMOUNTED"]={Unknown:{type:"path",fill:!1,d:"M 57.1,71.4 100,110 l 0,-20 43.8,39.5"},Friend:{type:"path",fill:!1,d:"M 52,66.8 100,110 l 0,-20 47.9,43.1"},Neutral:{type:"path",fill:!1,d:"M 52,66.8 100,110 l 0,-20 47.9,43.1"},Hostile:{type:"path",fill:!1,d:"M 56,70.4 100,110 l 0,-20 42.9,38.6"}}[M],G["GR.IC.FF.SOUND"]=[{type:"path",d:"M"+o.bbox.x1+",100 L75,100 M"+(200-o.bbox.x1)+",100 L125,100"},{type:"path",d:"M65,85 l70,0 -15,30 -40,0 z",fill:!!t&&s},{type:"text",stroke:!1,x:100,y:110,fontsize:25,text:"S"}],G["GR.IC.FF.SUPPLY"]={Unknown:{type:"path",d:"M35,120 l130,0 ",fill:!1},Friend:{type:"path",d:"M25,120 l150,0",fill:!1},Neutral:{type:"path",d:"M45,120 l110,0",fill:!1},Hostile:{type:"path",d:"M50,120 l100,0 ",fill:!1}}[M],G["GR.IC.FF.SUPPLY CORPS"]={Unknown:{type:"path",d:"M160,75 l-15,25 15,25 M35,120 l120,0",fill:!1},Friend:{type:"path",d:"M175,50 l-30,50 30,50 M25,120 l135,0",fill:!1},Neutral:{type:"path",d:"M155,50 l-20,50 20,50 M45,120 l100,0",fill:!1},Hostile:{type:"path",d:"M150,80 l-15,20 15,20 M50,120 l100,0",fill:!1}}[M],G["GR.IC.FF.SUPPLY DIVISION AND BELOW"]={Unknown:{type:"path",d:"m 45,120 120,0 M 40,75 55,100 40,125",fill:!1},Friend:{type:"path",d:"m 45,120 130,0 M 25,50 55,100 25,150",fill:!1},Neutral:{type:"path",d:"m 57,120 98,0 M 45,50 65,100 45,150",fill:!1},Hostile:{type:"path",d:"m 50,120 100,0 M 50,80 65,100 50,120",fill:!1}}[M],G["GR.IC.FF.SUPPLY THEATER"]={Unknown:{type:"path",d:"M40,75 l15,25 -15,25 M160,75 l-15,25 15,25 M45,120 l110,0 ",fill:!1},Friend:{type:"path",d:"M25,50 l30,50 -30,50 M175,50 l-30,50 30,50 M40,120 l120,0 ",fill:!1},Neutral:{type:"path",d:" M45,50 l20,50 -20,50 M155,50 l-20,50 20,50 M55,120 l90,0 ",fill:!1},Hostile:{type:"path",d:"M50,80 l15,20 -15,20 M150,80 l-15,20 15,20 M50,120 l100,0",fill:!1}}[M],G["GR.IC.FF.CLASS ALL"]={type:"text",stroke:!1,x:100,y:110,fontsize:30,text:"ALL"},G["GR.IC.FF.CLASS MULTIPLE"]={type:"text",stroke:!1,x:100,y:110,fontsize:30,text:"MULT"},G["GR.IC.FF.CLASS I"]={type:"path",d:"m 105,85 c -5,10 -5,20 0,30 m 0,-30 c -20,0 -20,30 0,30",fill:!1},G["GR.IC.FF.NATO SUPPLY CLASS I"]=e("I"),G["GR.IC.FF.CLASS II"]=G["GR.IC.QUARTERMASTER"],G["GR.IC.FF.NATO SUPPLY CLASS II"]=e("II"),G["GR.IC.FF.CLASS III"]={type:"path",d:"m 100,120 0,-20 -15,-20 30,0 -15,20 ",fill:!1},G["GR.IC.FF.CLASS IV"]=G["GR.IC.ENGINEER"],G["GR.IC.FF.NATO SUPPLY CLASS IV"]=e("IV"),G["GR.IC.FF.CLASS V"]={type:"path",d:"m 90,115 0,-25 c 0,-10 20,-10 20,0 l 0,25 m -25,0 30,0",fill:!1},G["GR.IC.FF.CLASS VI"]=[{type:"circle",cx:100,cy:85,r:5,fill:!1},{type:"path",d:"m 85,95 30,0 m -15,15 0,-20 m -10,30 10,-10 10,10",fill:!1}],G["GR.IC.FF.CLASS VII"]=[{type:"circle",cx:75,cy:100,r:7},{type:"circle",cx:125,cy:100,r:7},{type:"path",d:"M75,100 c0,-20 50,-20 50,0",fill:!1}],G["GR.IC.FF.CLASS VIII"]={Unknown:{type:"path",fill:!1,d:"M100,120 l0,-90 M165,80 l-130,0"},Friend:{type:"path",fill:!1,d:"M100,120 l0,-70 M175,80 l-150,0"},Neutral:{type:"path",fill:!1,d:"M100,120 l0,-75 M155,80 l-110,0"},Hostile:{type:"path",fill:!1,d:"M100,120 l0,-92 M153,80 l-106,0"}}[M],G["GR.IC.FF.CLASS VIII.THEATER"]={Unknown:{type:"path",fill:!1,d:"M100,120 l0,-90 M155,80 l-110,0"},Friend:{type:"path",fill:!1,d:"M100,120 l0,-70 M155,80 l-110,0"},Neutral:{type:"path",fill:!1,d:"M100,120 l0,-75 M145,80 l-90,0"},Hostile:{type:"path",fill:!1,d:"M100,120 l0,-92 M153,80 l-106,0"}}[M],G["GR.IC.FF.CLASS VIII.CORPS"]={Unknown:{type:"path",fill:!1,d:"M100,120 l0,-90 M155,80 l-120,0"},Friend:{type:"path",fill:!1,d:"M100,120 l0,-70 M155,80 l-130,0"},Neutral:{type:"path",fill:!1,d:"M100,120 l0,-75 M145,80 l-100,0"},Hostile:{type:"path",fill:!1,d:"M100,120 l0,-92 M153,80 l-106,0"}}[M],G["GR.IC.FF.CLASS IX"]=[{type:"circle",cx:100,cy:100,r:10,fill:!1},{type:"path",d:"m 100,110 0,10 m 0,-30 0,-10 m 8.7,14.2 8.4,-4.8 m -8.4,15.9 8,5.4 m -25.4,-5.4 -8.2,5.4 m 8.2,-16.3 -8,-5.4",fill:!1}],G["GR.IC.FF.CLASS X"]={type:"text",stroke:!1,x:100,y:110,fontsize:30,text:"CA"},G["GR.IC.FF.THEATRE SUPPORT"]={Unknown:{type:"path",d:"M40,75 l15,25 -15,25 M160,75 l-15,25 15,25",fill:!1},Friend:{type:"path",d:"M25,50 l30,50 -30,50 M175,50 l-30,50 30,50",fill:!1},Neutral:{type:"path",d:"M45,50 l20,50 -20,50 M155,50 l-20,50 20,50",fill:!1},Hostile:{type:"path",d:"M50,80 l15,20 -15,20 M150,80 l-15,20 15,20",fill:!1}}[M],G["GR.IC.FF.US MARSHALS SERVICE"]={type:"path",d:"m 100,70 7.1,20.3 21.5,0.4 -17.1,13 6.2,20.6 L 100,112 82.4,124.3 88.6,103.7 71.5,90.7 92.9,90.3 z m 0,-5 c -19.3,0 -35,15.7 -35,35 0,19.3 15.7,35 35,35 19.3,0 35,-15.7 35,-35 0,-19.3 -15.7,-35 -35,-35 z m 0,5 c 16.6,0 30,13.4 30,30 0,16.6 -13.4,30 -30,30 -16.6,0 -30,-13.4 -30,-30 0,-16.6 13.4,-30 30,-30 z"};G["GR.M1.ACCIDENT"]=S("ACC"),G["GR.M1.AIRMOBILE/AIR ASSAULT"]={type:"path",fill:!1,d:"M85,55 L100,75 115,55"},G["GR.M1.AMMUNITION"]={type:"path",d:"M95,75 L95,60 C95,55 105,55 105,60 L105,75 M90,75 L110,75",fill:!1},G["GR.M1.ANTISUBMARINE WARFARE"]=S("P"),G["GR.M1.AREA"]=S("AREA"),G["GR.M1.ATTACK"]=S("A"),G["GR.M1.AVIATION"]={type:"path",d:"m 75,60 0,15 50,-15 0,15 z"},G["GR.M1.BATTALION"]=S("II"),G["GR.M1.BIOLOGICAL"]=S("B"),G["GR.M1.BORDER"]=S("BOR"),G["GR.M1.BRIDGING"]={type:"path",fill:!1,d:"m 80,80 5,-5 30,0 5,5 m -40,-20 5,5 30,0 5,-5"},G["GR.M1.BRIGADE"]=S("X"),G["GR.M1.CHEMICAL"]=S("C"),G["GR.M1.INTRUSION"]=S("I"),G["GR.M1.CHEMICAL SURVEILLANCE"]=S("RS"),G["GR.M1.CIVILIAN"]=S("CIV"),G["GR.M1.CLOSE PROTECTION"]=S("CLP"),G["GR.M1.COMBAT"]=S("CBT"),G["GR.M1.COMMAND AND CONTROL"]=S(t?"Y":"C2"),G["GR.M1.COMMUNICATIONS CONTINGENCY PACKAGE"]=S("CCP"),G["GR.M1.CONSTRUCTION"]={type:"text",stroke:!1,x:100,y:75,fontsize:20,text:"CONST"},G["GR.M1.COMPANY"]=S("I"),G["GR.M1.CROSS CULTURAL COMMUNICATION"]=S("CCC"),G["GR.M1.CROWD AND RIOT CONTROL"]=S("CRC"),G["GR.M1.DECONTAMINATION"]=S("D"),G["GR.M1.DETENTION"]=S("DET"),G["GR.M1.DEPUTY"]=S("DEP"),G["GR.M1.DIRECT COMMUNICATIONS"]={type:"path",fill:!1,d:"m 95,65 -5,5 5,5 m 10,-10 5,5 -5,5 M 90,70 c 20,0 20,0 20,0 m 15,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -40,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z"},G["GR.M1.DIVING"]={type:"path",fill:!1,d:"m 104.6,64.8 c 0,2.7 -2.1,4.8 -4.6,4.8 -2.5,0 -4.6,-2.2 -4.6,-4.8 0,-2.7 2.1,-4.8 4.6,-4.8 2.5,0 4.6,2.2 4.6,4.8 z m 0,8.7 4.6,4.8 -18.3,0 4.6,-4.8 M 108.3,60 l 4.6,0 0,9.6 -4.6,0 m -16.5,0 -4.6,0 0,-9.6 4.6,0 m 17.4,4.8 c 0,5.3 -4.1,9.6 -9.2,9.6 -5.1,0 -9.2,-4.3 -9.2,-9.6 0,-5.3 4.1,-9.6 9.2,-9.6 5.1,0 9.2,4.3 9.2,9.6 z"},G["GR.M1.DIVISION"]=S("XX"),G["GR.M1.DOG"]=S("DOG"),G["GR.M1.DRILLING"]={type:"path",d:"m 90,60 5,15 10,0 5,-15 z"},G["GR.M1.ELECTRO-OPTICAL"]=S("EO"),G["GR.M1.ENHANCED"]=S("ENH"),G["GR.M1.EXPLOSIVE ORDNANCE DISPOSAL"]=S("EOD"),G["GR.M1.EARLY WARNING RADAR"]=S("EWR"),G["GR.M1.FIRE DIRECTION CENTRE"]=S("FDC"),G["GR.M1.FORCE"]=S("F"),G["GR.M1.FORWARD"]=S("FWD"),G["GR.M1.GROUND STATION MODULE"]=S("GSM"),G["GR.M1.INTRUSION"]=S("I"),G["GR.M1.J1"]=S("J1"),G["GR.M1.J2"]=S("J2"),G["GR.M1.J3"]=S("J3"),G["GR.M1.J4"]=S("J4"),G["GR.M1.J5"]=S("J5"),G["GR.M1.J6"]=S("J6"),G["GR.M1.J7"]=S("J7"),G["GR.M1.J8"]=S("J8"),G["GR.M1.J9"]=S("J9"),G["GR.M1.LANDING SUPPORT"]=S("LS"),G["GR.M1.LARGE COMMUNICATIONS CONTINGENCY PACKAGE"]=S("LCCP"),G["GR.M1.LARGE EXTENSION NODE"]=S("LEN"),G["GR.M1.MAINTENANCE"]={type:"path",fill:!1,d:"m 84,70 32,0 m 4,-5 c -5,0 -5,10 0,10 M 80,65 c 5,0 5,10 0,10"},G["GR.M1.MEDEVAC"]=G["AIR.M1.MEDEVAC"],G["GR.M1.METEOROLOGICAL"]=S("MET"),G["GR.M1.MINE COUNTERMEASURE"]=S("MCM"),G["GR.M1.MISSILE"]={type:"path",d:"M95,80 L95,60 C95,55 105,55 105,60 L105,80 M100,80 L100,55",fill:!1},G["GR.M1.(MOBILE) ADVISOR AND SUPPORT"]={type:"path",d:"m 105,65 5,5 -5,5 M 90,70 c 20,0 20,0 20,0 m 15,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -40,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z",fill:!1},G["GR.M1.MOBILE SUBSCRIBER EQUIPMENT"]=S("MSE"),G["GR.M1.MOBILITY SUPPORT"]=S("MS"),G["GR.M1.MOVEMENT CONTROL CENTRE"]=S("MCC"),G["GR.M1.MULTINATIONAL"]=S("MN"),G["GR.M1.MULTINATIONAL SPECIALIZED UNIT"]=S("MSU"),G["GR.M1.MULTIPLE ROCKET LAUNCHER"]={type:"path",d:"M85,75 l15,-15 15,15 M85,67 l15,-15 15,15",fill:!1},G["GR.M1.NATO MEDICAL ROLE 1"]={type:"text",stroke:!1,x:120,y:77,fontsize:25,text:"1"},G["GR.M1.NATO MEDICAL ROLE 2"]={type:"text",stroke:!1,x:120,y:77,fontsize:25,text:"2"},G["GR.M1.NATO MEDICAL ROLE 3"]={type:"text",stroke:!1,x:120,y:77,fontsize:25,text:"3"},G["GR.M1.NATO MEDICAL ROLE 4"]={type:"text",stroke:!1,x:120,y:77,fontsize:25,text:"4"},G["GR.M1.NAVAL"]=R._translate(0,-35,R._scale(.6,G["GR.IC.NAVAL"])),G["GR.M1.NODE CENTRE"]=S("NC"),G["GR.M1.NUCLEAR"]=S("N"),G["GR.M1.OF-1"]=S("OF-1"),G["GR.M1.OF-2"]=S("OF-2"),G["GR.M1.OF-3"]=S("OF-3"),G["GR.M1.OF-4"]=S("OF-4"),G["GR.M1.OF-5"]=S("OF-5"),G["GR.M1.OF-6"]=S("OF-6"),G["GR.M1.OF-7"]=S("OF-7"),G["GR.M1.OF-8"]=S("OF-8"),G["GR.M1.OF-9"]=S("OF-9"),G["GR.M1.OF-10"]=S("OF-10"),G["GR.M1.OF-D"]=S("OF-D"),G["GR.M1.OPERATIONS"]=S("OPS"),G["GR.M1.OPTICAL"]=S("OPT"),G["GR.M1.OR-1"]=S("OR-1"),G["GR.M1.OR-2"]=S("OR-2"),G["GR.M1.OR-3"]=S("OR-3"),G["GR.M1.OR-4"]=S("OR-4"),G["GR.M1.OR-5"]=S("OR-5"),G["GR.M1.OR-6"]=S("OR-6"),G["GR.M1.OR-7"]=S("OR-7"),G["GR.M1.OR-8"]=S("OR-8"),G["GR.M1.OR-9"]=S("OR-9"),G["GR.M1.OTHER"]=S("OTH"),G["GR.M1.PERSONNEL RECOVERY"]=S("H"),G["GR.M1.PLATOON"]=[{type:"circle",stroke:!1,cx:80,cy:68,r:8},{type:"circle",stroke:!1,cx:100,cy:68,r:8},{type:"circle",stroke:!1,cx:120,cy:68,r:8}],G["GR.M1.RADAR"]={type:"path",fill:!1,d:"m 85,55 c 0.1,21.4 11.7,24.6 25,25 M 116,55 101,67.5 101,55 86.6,66.9"},G["GR.M1.RADIO FREQUENCY IDENTIFICATION (RFID) INTERROGATOR/ SENSOR"]=S("RF"),G["GR.M1.RAILROAD"]=R._translate(0,-50,[{type:"path",d:"M60,120 l80,0",fill:!1},{type:"circle",fill:!1,cx:65,cy:125,r:5},{type:"circle",fill:!1,cx:75,cy:125,r:5},{type:"circle",fill:!1,cx:125,cy:125,r:5},{type:"circle",fill:!1,cx:135,cy:125,r:5}]),G["GR.M1.RADIOLOGICAL"]=S("RAD"),G["GR.M1.RANGER"]=S("RGR"),G["GR.M1.RECON"]=S("R"),G["GR.M1.REGIMENT"]=S("III"),G["GR.M1.SEARCH AND RESCUE"]=S("SAR"),G["GR.M1.SECTION"]=[{type:"circle",stroke:!1,cx:90,cy:68,r:8},{type:"circle",stroke:!1,cx:110,cy:68,r:8}],G["GR.M1.SECURITY"]=S("SEC"),G["GR.M1.SENSOR"]={type:"path",d:"m 100,55 c -2,5 -5,8 -10,10 5,2 8,5 10,10 2,-5 5,-8 10,-10 -5,-2 -8,-5 -10,-10 z"},G["GR.M1.SENSOR CONTROL MODULE"]=S("SCM"),G["GR.M1.SIGNALS INTELLIGENCE"]={type:"path",fill:!1,d:"m 100,55 0,23 m -15,-18 5,-5 5,5 5,-5 5,5 5,-5 5,5"},G["GR.M1.SIGNAL SUPPORT"]=S("SPT"),G["GR.M1.SINGLE SHELTER SWITCH"]=S("SSS"),G["GR.M1.SINGLE ROCKET LAUNCHER"]={type:"path",d:"M85,75 l15,-15 15,15",fill:!1},G["GR.M1.SMALL EXTENSION NODE"]=S("SEN"),G["GR.M1.SMOKE"]=S("S"),G["GR.M1.SMOKE/DECON"]=S("SD"),G["GR.M1.SNIPER"]={type:"path",d:"M75,60 l20,0 M100,80 l0,-20 M125,60 l-20,0",fill:!1},G["GR.M1.SOUND RANGING"]=S("SDR"),G["GR.M1.SPECIAL OPERATIONS FORCES (SOF)"]=S("SOF"),G["GR.M1.SPECIAL WEAPONS AND TACTICS"]={type:"text",stroke:!1,x:100,y:77,fontsize:23,text:"SWAT"},G["GR.M1.SQUAD"]={type:"circle",stroke:!1,cx:100,cy:68,r:8},G["GR.M1.SUPPORT"]=S("SPT"),G["GR.M1.SURVEY"]={type:"path",d:"m 108,78 -8,-8 m 0,0 -8,8 m 8,-8 0,-15 15,8 z"},G["GR.M1.TACTICAL EXPLOITATION"]=S("TE"),G["GR.M1.TARGET ACQUISITION"]=S("TA"),G["GR.M1.TEAM"]=[{type:"circle",fill:!1,cx:100,cy:65,r:10},{type:"path",d:"m 90,75 l20,-20"}],G["GR.M1.TOPOGRAPHIC"]={type:"path",fill:!1,d:"m 92,65 c 6,3 10,3 16,0 m -18,13 10,-23 10,23"},G["GR.M1.TRAINING CAMP"]=S("TNG"),G["GR.M1.UNMANNED AERIAL VEHICLE"]=G["AIR.M1.UNMANNED AERIAL VEHICLE"],G["GR.M1.UPGRADED EARLY WARNING RADAR"]=S("UEW"),G["GR.M1.UTILITY"]=S("U"),G["GR.M1.VIDEO IMAGERY"]={type:"path",fill:!1,d:"m 120,65 -11,0 m 11,10 -14,0 m 4,-14 -30,0 0,18 25,0 z m 10,2 0,14"},G["GR.M1.WO-1"]=S("WO-1"),G["GR.M1.WO-2"]=S("WO-2"),G["GR.M1.WO-3"]=S("WO-3"),G["GR.M1.WO-4"]=S("WO-4"),G["GR.M1.WO-5"]=S("WO-5"),G["GR.M1.YARD"]=S("YRD"),G["GR.M2.AIRBORNE"]={type:"path",d:"M75,140 C75,125 100,125 100,140 C100,125 125,125 125,140",fill:!1},G["GR.M2.ARCTIC"]={type:"path",d:"M115,125 C125,125 125,135 115,135 L85,135 C75,135 75,125 85,125",fill:!1},G["GR.M2.ATTACK"]=T("A"),G["GR.M2.BATTLE DAMAGE REPAIR"]=T("BDR"),G["GR.M2.BICYCLE EQUIPPED"]={type:"circle",cx:100,cy:132,r:11,fill:!1},G["GR.M2.CASUALTY STAGING"]=T("CS"),G["GR.M2.CLEARING"]=T("CLR"),G["GR.M2.CLOSE RANGE"]=T("CR"),G["GR.M2.COMBAT SEARCH AND RESCUE"]=T("CSAR"),G["GR.M2.CONTROL"]={type:"path",d:"m 98,130 2,-4 2,4 m -8,8 -4,-2 4,-2 m 8,8 -2,4 -2,-4 m 8,-8 4,2 -4,2 m -14,-2 16,0 m -8,-8 0,16",fill:!1},G["GR.M2.CROSS-COUNTRY TRUCK"]=[{type:"path",d:"M60,120 l80,0",fill:!1},{type:"circle",fill:!1,cx:65,cy:125,r:5},{type:"circle",fill:!1,cx:100,cy:125,r:5},{type:"circle",fill:!1,cx:135,cy:125,r:5}],G["GR.M2.CAVALRY"]={type:"text",stroke:!1,x:110,y:140,fontsize:25,text:"CAV"},G["GR.M2.DECONTAMINATION"]=T("D"),G["GR.M2.DEMOLITION"]=T("DEM"),G["GR.M2.DENTAL"]={type:"text",stroke:!1,x:115,y:133,fontsize:25,text:"D"},G["GR.M2.DIGITAL"]=T("DIG"),G["GR.M2.ENHANCED POSITION LOCATION REPORTING SYSTEM"]={type:"path",d:"m 87,142 13,-12 13,12 m -13,-20 0,20 0,0",fill:!1},G["GR.M2.EQUIPMENT"]=T("E"),G["GR.M2.EQUIMENT/TROOP"]=T("E/T"),G["GR.M2.HEAVY"]=T("H"),G["GR.M2.HIGH ALTITUDE"]=T("HA"),G["GR.M2.HIGH TO MEDIUM ALTITUDE"]=T("HMA"),G["GR.M2.HIGH TO LOW ALTITUDE"]=T("HLA"),G["GR.M2.INTERMODAL"]={type:"path",d:"m 80,125 40,0 0,-4 8,9 -8,9 0,-4 -40,0 0,4 -8,-9 8,-9 z",fill:!1},G["GR.M2.INTENSIVE CARE"]=T("IC"),G["GR.M2.J1"]=T("J1"),G["GR.M2.J2"]=T("J2"),G["GR.M2.J3"]=T("J3"),G["GR.M2.J4"]=T("J4"),G["GR.M2.J5"]=T("J5"),G["GR.M2.J6"]=T("J6"),G["GR.M2.J7"]=T("J7"),G["GR.M2.J8"]=T("J8"),G["GR.M2.J9"]=T("J9"),G["GR.M2.LIGHT"]=T("L"),G["GR.M2.LABORATORY"]=T("LAB"),G["GR.M2.LAUNCHER"]={type:"path",fill:!1,d:"M80,140 L115,120 120,140"},G["GR.M2.LONG RANGE"]=T("LR"),G["GR.M2.LONG RANGE SURVEILLANCE"]={type:"text",stroke:!1,x:110,y:140,fontsize:25,text:"LRS"},G["GR.M2.LOW ALTITUDE"]=T("LA"),G["GR.M2.MEDIUM"]=T("M"),G["GR.M2.MEDIUM ALTITUDE"]=T("MA"),G["GR.M2.MEDIUM TO LOW ALTITUDE"]=T("MLA"),G["GR.M2.MEDIUM RANGE"]=T("MR"),G["GR.M2.MOUNTAIN"]={type:"path",stroke:!1,d:"M90,140 L100,120 110,140"},G["GR.M2.MULTIPLE ALTITUDES"]=T("H/MA"),G["GR.M2.MULTI-CHANNEL"]=T("MC"),G["GR.M2.OF-1"]=T("OF-1"),G["GR.M2.OF-2"]=T("OF-2"),G["GR.M2.OF-3"]=T("OF-3"),G["GR.M2.OF-4"]=T("OF-4"),G["GR.M2.OF-5"]=T("OF-5"),G["GR.M2.OF-6"]=T("OF-6"),G["GR.M2.OF-7"]=T("OF-7"),G["GR.M2.OF-8"]=T("OF-8"),G["GR.M2.OF-9"]=T("OF-9"),G["GR.M2.OF-10"]=T("OF-10"),G["GR.M2.OF-D"]=T("OF-D"),G["GR.M2.OPTICAL"]=T("OPT"),G["GR.M2.OR-1"]=T("OR-1"),G["GR.M2.OR-2"]=T("OR-2"),G["GR.M2.OR-3"]=T("OR-3");G["GR.M2.OR-4"]=T("OR-4"),G["GR.M2.OR-5"]=T("OR-5"),G["GR.M2.OR-6"]=T("OR-6"),G["GR.M2.OR-7"]=T("OR-7"),G["GR.M2.OR-8"]=T("OR-8"),G["GR.M2.OR-9"]=T("OR-9"),G["GR.M2.PACK ANIMAL"]={type:"path",d:"m 84,140 9,-15 7,15 7,-15 9,15",fill:!1},G["GR.M2.PATIENT EVACUATION COORDINATION"]=T("PEC"),G["GR.M2.PREVENTIVE MAINTENANCE"]=T("PM"),G["GR.M2.PSYCHOLOGICAL"]={type:"text",stroke:!1,x:115,y:133,fontsize:25,text:"P"},G["GR.M2.RADIO RELAY LINE OF SIGHT"]=[{type:"circle",cx:100,cy:132,r:11,fill:!1},{type:"path",d:"M 90.8 128.2 C 90.3 129.3 90 130.6 90 132 C 90 133.4 90.3 134.7 90.8 135.8 L 100 132 L 90.8 128.2 z M 100 132 L 109.3 135.8 C 109.7 134.7 110 133.4 110 132 C 110 130.6 109.7 129.3 109.3 128.2 L 100 132 z"}],G["GR.M2.RAILROAD"]=[{type:"path",d:"M60,120 l80,0",fill:!1},{type:"circle",fill:!1,cx:65,cy:125,r:5},{type:"circle",fill:!1,cx:75,cy:125,r:5},{type:"circle",fill:!1,cx:125,cy:125,r:5},{type:"circle",fill:!1,cx:135,cy:125,r:5}],G["GR.M2.RECOVERY (UNMANNED SYSTEMS)"]={type:"path",d:"m 70,125 c0,20 60,20 60,0",fill:!1},G["GR.M2.RECOVERY (MAINTENANCE)"]={type:"path",fill:!1,d:"M75,125 c8,0 8,16 0,16 m8,-8 l35,0 m8,-8 c-8,0 -8,16 0,16"},G["GR.M2.REFUEL"]=T("K"),G["GR.M2.RESCUE COORDINATION CENTRE"]=T("RCC"),G["GR.M2.RIVERINE"]={type:"path",d:"m 80,125 c 0,10 40,10 40,0 z",fill:!1},G["GR.M2.SINGLE CHANNEL"]=T("SC"),G["GR.M2.SKI"]={type:"path",d:"m 95,145 -9,-8 m 28,0 -9,8 m -15,-24 20,20 m 0,-20 -20,20",fill:!1},G["GR.M2.SHORT RANGE"]=T("SR"),G["GR.M2.STRATEGIC"]=T("STR"),G["GR.M2.STRATEGIC MISSILE"]=T("S"),G["GR.M2.SUPPORT"]=T("SPT"),G["GR.M2.TACTICAL"]=T("TAC"),G["GR.M2.TACTICAL MISSILE"]=T("T"),G["GR.M2.TARGET ACQUISITION"]=T("TA"),G["GR.M2.TOWED"]=[{type:"path",d:"M70,120 l60,0",fill:!1},{type:"circle",fill:!1,cx:65,cy:120,r:5},{type:"circle",fill:!1,cx:135,cy:120,r:5}],G["GR.M2.TROOP"]=T("T"),G["GR.M2.TRACKED"]={type:"path",d:"M 70,120 l 60,0 c10,0 10,10 0,10 l -60,0 c-10,0 -10,-10 0,-10",fill:!1},G["GR.M2.TRUCK"]=[{type:"path",d:"M60,120 l80,0",fill:!1},{type:"circle",fill:!1,cx:65,cy:125,r:5},{type:"circle",fill:!1,cx:135,cy:125,r:5}],G["GR.M2.UTILITY"]=T("U"),G["GR.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING "]={type:"text",stroke:!1,x:100,y:135,fontsize:20,text:"VSTOL"},G["GR.M2.VETERINARY"]={type:"text",stroke:!1,x:115,y:133,fontsize:25,text:"V"},G["GR.M2.WHEELED"]=[{type:"circle",cx:70,cy:125,r:5,fill:!1},{type:"circle",cx:100,cy:125,r:5,fill:!1},{type:"circle",cx:130,cy:125,r:5,fill:!1}],G["GR.M2.WHEELED LIMITED"]=[{type:"circle",cx:70,cy:125,r:5,fill:!1},{type:"circle",cx:130,cy:125,r:5,fill:!1}],G["GR.M2.WO-1"]=T("WO-1"),G["GR.M2.WO-2"]=T("WO-2"),G["GR.M2.WO-3"]=T("WO-3"),G["GR.M2.WO-4"]=T("WO-4"),G["GR.M2.WO-5"]=T("WO-5"),G["GR.EQ.SHORT RANGE"]={type:"path",d:"m 85,100 30,0",fill:!1},G["GR.EQ.INTERMEDIATE RANGE"]={type:"path",d:"m 85,105 30,0 m -30,-10 30,0",fill:!1},G["GR.EQ.LONG RANGE"]={type:"path",d:"m 85,110 30,0 m -30,-20 30,0 m -30,10 30,0",fill:!1},G["GR.EQ.WEAPON"]={type:"path",d:"m 100,60 0,80",fill:!1},G["GR.EQ.RIFLE"]={type:"path",d:"m 100,60 0,80 M 85,75 100,60 115,75",fill:!1},G["GR.EQ.RIFLE DISMOUNTED1"]={type:"path",d:"m 90,90 10,-10 10,10 m -10,-10 0,40",fill:!1},G["GR.EQ.MACHINE GUN"]={type:"path",d:"m 100,60 0,80 M 85,75 100,60 115,75 M 80,140 120,140",fill:!1},G["GR.EQ.GRENADE LAUNCHER"]=[G["GR.EQ.RIFLE"],{type:"circle",cx:100,cy:90,r:15,fill:!1}],G["GR.EQ.FLAME THROWER"]={type:"path",fill:!1,d:"m 90,135 0,-70 c 0,-15 20,-15 20,0"},G["GR.EQ.AIR DEFENCE GUN"]=[{type:"path",d:"m 85,140 30,0 c 0,-20 -30,-20 -30,0 z m 15,-80 0,65 m 15,-45 0,40 m -30,-40 0,40",fill:!1}],t||G["GR.EQ.AIR DEFENCE GUN"].push({type:"path",d:"M 85,75 100,60 115,75",fill:!1}),G["GR.EQ.ANTITANK GUN"]={type:"path",d:"m 85,140 15,-15 15,15 m -15,-80 0,65 m -15,-45 0,40 m 30,-40 0,40",fill:!1},G["GR.EQ.DIRECT FIRE GUN"]={type:"path",d:"m 100,60 0,80 m 15,-60 0,40 m -30,-40 0,40",fill:!1},G["GR.EQ.RECOILLESS GUN"]={type:"path",d:"m 85,75 15,-15 15,15 m 0,5 0,40 m -30,-40 0,40 m 15,-60 0,80",fill:!1},G["GR.EQ.HOWITZER"]=[{type:"circle",cx:100,cy:130,r:10,fill:!1},{type:"path",d:"m 115,80 0,40 m -30,-40 0,40 m 15,-60 0,60",fill:!1}],t||G["GR.EQ.HOWITZER"].push({type:"path",d:"M 85,75 100,60 115,75",fill:!1}),G["GR.EQ.HOWITZER TRACKED"]={type:"path",d:"M 70,120 l 60,0 c10,0 10,10 0,10 l -60,0 c-10,0 -10,-10 0,-10",fill:!1},G["GR.EQ.MISSILE LAUNCHER"]={type:"path",d:"m 100,140 0,-80 m -15,80 0,-65 c 0,-20 30,-20 30,0 l 0,65",fill:!1},G["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"]={type:"path",d:"m 85,140 30,0 c 0,-20 -30,-20 -30,0 z m 15,-15 0,-65 m -15,80 0,-65 c 0,-20 30,-20 30,0 l 0,65",fill:!1},G["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"R"},G["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]=[{type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"E"},{type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"R"}],G["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR THEATRE"]={type:"text",stroke:!1,x:100,y:145,fontsize:30,text:"T"},G["GR.EQ.ANTITANK MISSILE LAUNCHER"]={type:"path",d:"m 85,140 15,-15 15,15 M 85,130 85,75 c 0,-20 30,-20 30,0 l 0,55 m -15,-5 0,-65",fill:!1},G["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"]=[G["GR.EQ.MISSILE LAUNCHER"]],t&&G["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"].push({type:"path",d:"m 85,140 30,0",fill:!1}),G["GR.EQ.MORTAR"]=[{type:"path",d:"m 100,60 0,60 M 85,75 100,60 115,75",fill:!1},{type:"circle",cx:100,cy:130,r:10,fill:!1}],G["GR.EQ.SINGLE ROCKET LAUNCHER"]={type:"path",d:"m 85,75 15,-15 15,15 m -15,-5 0,70 M 85,85 100,70 115,85",fill:!1},G["GR.EQ.MULTIPLE ROCKET LAUNCHER"]={type:"path",d:"m 115,90 0,40 m -30,-40 0,40 m 0,-55 15,-15 15,15 m -15,-5 0,70 M 85,85 100,70 115,85",fill:!1},G["GR.EQ.ANTITANK ROCKET LAUNCHER"]={type:"path",d:"m 85,140 15,-15 15,15 M 85,85 100,70 115,85 m -15,-15 0,55 M 85,75 100,60 115,75",fill:!1},G["GR.EQ.NON-LETHAL WEAPON"]={type:"path",d:"m 100,60 0,80 M 80,60 l40,0",fill:!1},G["GR.EQ.NON-LETHAL GRENADE LAUNCHER"]=[G["GR.EQ.NON-LETHAL WEAPON"],{type:"circle",cx:100,cy:90,r:15,fill:!1}],G["GR.EQ.TASER"]=[G["GR.EQ.NON-LETHAL WEAPON"],e("Z")],G["GR.EQ.WATER CANNON"]=[G["GR.EQ.NON-LETHAL WEAPON"],e("W")],G["GR.EQ.LIMITED CROSS-COUNTRY"]=[{type:"path",d:"m 70,130 60,0",fill:!1},{type:"circle",cx:75,cy:135,r:5,fill:!1},{type:"circle",cx:125,cy:135,r:5,fill:!1}],G["GR.EQ.CROSS-COUNTRY"]=[{type:"path",d:"m 70,130 60,0",fill:!1},{type:"circle",cx:75,cy:135,r:5,fill:!1},{type:"circle",cx:100,cy:135,r:5,fill:!1},{type:"circle",cx:125,cy:135,r:5,fill:!1}],G["GR.EQ.ARMOURED FIGHTING VEHICLE"]={type:"path",d:"m 70,100 30,-30 30,30 -30,30 z m 60,-30 0,60 m -60,-60 0,60 0,0",fill:!1},G["GR.EQ.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL"]=[G["GR.EQ.ARMOURED FIGHTING VEHICLE"]],L?G["GR.EQ.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL"].push({type:"text",stroke:!1,x:100,y:110,fontsize:30,text:"C2"}):G["GR.EQ.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL"].push({type:"path",d:"m 80,90 20,15 0,-10 20,15",fill:!1}),G["GR.EQ.ARMOURED PERSONNEL CARRIER"]={type:"path",fill:!1,d:"m 70,80 30,-10 30,10 0,0 m -60,50 60,0 m 0,-60 0,60 m -60,-60 0,60 0,0"},G["GR.EQ.ARMOURED PERSONNEL CARRIER COMBAT SERVICE SUPPORT VEHICLE"]=[G["GR.EQ.ARMOURED PERSONNEL CARRIER"],{type:"path",d:"m 70,120 60,0",fill:!1}],G["GR.EQ.ARMOURED PERSONNEL CARRIER ENGINEER RECON VEHICLE"]={type:"path",fill:!1,d:"M 130,80 70,130"},G["GR.EQ.COMBAT SERVICE SUPPORT VEHICLE"]={type:"path",fill:!1,d:"M 70,120 130,120"},G["GR.EQ.ARMOURED MEDICAL PERSONNEL CARRIER"]={type:"path",fill:!1,d:"m 70,100 60,0 m -30,-30 0,60"},G["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"]=[G["GR.IC.ARMOUR"],G["GR.M2.WHEELED LIMITED"]],G["GR.EQ.ARMOURED VEHICLE"]=e("A"),G["GR.EQ.ARMORED CARRIER WITH VOLCANO"]=e("V"),G["GR.EQ.TANK"]={type:"path",fill:!1,d:"m 70,80 60,0 m -60,40 60,0 m -60,-50 0,60 0,0 m 60,-60 0,60"},G["GR.EQ.LIGHT TANK"]={type:"path",fill:!1,d:"m 100,80 0,40"},G["GR.EQ.MEDIUM TANK"]={type:"path",fill:!1,d:"m 105,80 0,40 m -10,-40 0,40"},G["GR.EQ.HEAVY TANK"]={type:"path",fill:!1,d:"m 110,80 0,40 m -20,-40 0,40 m 10,-40 0,40"},G["GR.EQ.TANK RECOVERY VEHICLE"]={type:"path",fill:!1,d:"m 85,100 30,0 m 10,-10 c -13.1,0 -12.4,20 0,20 M 75,90 c 12.7,0.3 12.7,20.3 0,20"},G["GR.EQ.BRIDGE"]={type:"path",d:"m 115,75 -10,10 0,30 10,10 m -30,-50 10,10 0,30 -10,10 m -15,-55 60,0 0,60 -60,0 0,-60",fill:!1},G["GR.EQ.FIXED BRIDGE"]={type:"path",d:"M 100,70 100,130",fill:!1},G["GR.EQ.FOLDING GIRDER BRIDGE"]={type:"path",d:"M 110, 80 90,80 90,120 110,120",fill:!1},G["GR.EQ.HOLLOW DECK BRIDGE"]={type:"path",d:"M 110, 80 90,80 90,120 110,120 z",fill:!1},G["GR.EQ.DRILL"]=G["GR.IC.DRILLING"],G["GR.EQ.DOZER"]={type:"path",d:"m 90,60 20,0 m -10,0 0,20 m -30,0 60,0 m -60,-10 0,60 0,0 m 60,-60 0,60 m -60,-10 60,0",fill:!1},G["GR.EQ.DOZER ARMORED"]={type:"path",d:"m 70,130 60,0 m -30,-70 0,10 m -30,10 30,-10 30,10 m 0,-10 0,60 m -60,-60 0,60 0,0 m 20,-70 20,0",fill:!1},G["GR.EQ.EARTHMOVER"]={type:"path",d:"m 100,60 0,20 m -25,-15 5,-5 40,0 5,5 m -55,15 60,0 m -60,40 60,0 m 0,-50 0,60 m -60,-60 0,60 0,0",fill:!1},G["GR.EQ.MULTIFUNCTIONAL EARTHMOVER/DIGGER"]=[G["GR.EQ.EARTHMOVER"],e("MF")],G["GR.EQ.MINE CLEARING EQUIPMENT"]={type:"path",d:"m 100,80 0,15 -30,25 60,0 -30,-25",fill:!1},G["GR.EQ.MINE LAYING VEHICLE"]=[{type:"path",d:"m 90,85 20,30 m 0,-30 -20,30 m 10,-30 0,30",fill:!1},{type:"circle",cx:100,cy:100,r:10}],G["GR.EQ.MINE SCATTERABLE"]=[e("S"),{type:"circle",cx:85,cy:115,r:5,fill:!1},{type:"circle",cx:100,cy:115,r:5,fill:!1},{type:"circle",cx:115,cy:115,r:5,fill:!1}],G["GR.EQ.UTILITY VEHICLE"]={type:"path",fill:!1,d:"m 70,65 c 0,15 60,15 60,0 l 0,65 -60,0 z"},G["GR.EQ.UTILITY VEHICLE BACKHOE"]=[{type:"path",fill:!1,d:"M 130,130 100,80 75,95 75,95"},{type:"path",d:"M 75,105 85,95 75,95 z"}],G["GR.EQ.UTILITY VEHICLE FERRY TRANSPORTER"]={type:"path",fill:!1,d:"m 75,100 c 15,15 35,15 50,0 z"},G["GR.EQ.UTILITY VEHICLE LIGHT"]={type:"path",fill:!1,d:"M 100,78.3 100,130"},G["GR.EQ.UTILITY VEHICLE MEDIUM"]={type:"path",fill:!1,d:"m 105,130 0,-52 M 95,130 l0,-52"},G["GR.EQ.UTILITY VEHICLE HEAVY"]={type:"path",fill:!1,d:"m 110,130 0,-53 m -20,50 0,-53 m 10,1.3 0,52"},G["GR.EQ.UTILITY VEHICLE.TOW TRUCK"]={type:"path",fill:!1,d:"m 130,130 -40,-40 0,25 c 0,5 -10,5 -10,0"},G["GR.EQ.UTILITY VEHICLE.TOW TRUCK.LIGHT"]={type:"path",fill:!1,d:"m 105,115 10,-10"},G["GR.EQ.UTILITY VEHICLE.TOW TRUCK.HEAVY"]={type:"path",fill:!1,d:"m 120,110 -10,10 m -10,-10 10,-10 m -5,15 10,-10"},G["GR.EQ.MEDICAL VEHICLE"]={type:"path",fill:!1,d:"m 70,100 l 60,0 M 100,78.3 100,130"},G["GR.EQ.MEDICAL EVACUATION"]={type:"path",d:"m 95,85 10,0 0,10 10,0 0,10 -10,0 0,10 -10,0 0,-10 -10,0 0,-10 10,0 z"},G["GR.EQ.MOBILE EMERGENCY PHYSICIAN"]={type:"path",fill:!1,d:"m 70,100 l 60,0 M 100,78.3 100,130 M 85,85 115,85"},G["GR.EQ.BUS"]=[G["GR.EQ.UTILITY VEHICLE"],e("B")],G["GR.EQ.SEMI-TRAILER TRUCK"]=[G["GR.EQ.UTILITY VEHICLE"],{type:"path",fill:!1,d:"m 140,90 0,20 m -10,-10 10,0"},{type:"circle",cx:75,cy:135,r:5,fill:!1},{type:"circle",cx:85,cy:135,r:5,fill:!1},{type:"circle",cx:125,cy:135,r:5,fill:!1}],G["GR.EQ.WATER VEHICLE"]=[G["GR.EQ.UTILITY VEHICLE"],{type:"path",fill:!1,d:"m 70,95 c 10,0 0,10 10,10 10,0 0,-10 10,-10 10,0 0,10 10,10 10,0 0,-10 10,-10 10,0 0,10 10,10 10,0 0,-10 10,-10"}],G["GR.EQ.TRAIN LOCOMOTIVE"]={type:"path",fill:!1,d:"m 70,70 0,60 60,0 0,-30 -30,0 0,-30 z"},G["GR.EQ.RAILCAR"]=[G["GR.EQ.UTILITY VEHICLE"],{type:"circle",fill:!1,cx:75,cy:135,r:5},{type:"circle",fill:!1,cx:85,cy:135,r:5},{type:"circle",fill:!1,cx:115,cy:135,r:5},{type:"circle",fill:!1,cx:125,cy:135,r:5}],G["GR.EQ.CBRN EQUIPMENT"]=[{type:"path",d:"M80,140 c0,-20 10,-60 50,-63 m-10,63 c0,-20 -10,-60 -50,-63 ",fill:!1},{type:"circle",cx:70,cy:85,r:8},{type:"circle",cx:130,cy:85,r:8}],G["GR.EQ.COMPUTER SYSTEM"]={type:"path",d:"m 100,132 0,-10 -35,0 0,-50 70,0 0,50 -35,0 m -25,10 50,0",fill:!1},G["GR.EQ.COMMAND LAUNCH EQUIPMENT (CLE)"]=e("CLE"),G["GR.EQ.GENERATOR SET"]=e("G"),G["GR.EQ.GROUND-BASED MIDCOURSE DEFENSE (GMD) FIRE CONTROL (GFC) CENTER"]=e("GFC"),G["GR.EQ.IN-FLIGHT INTERCEPTOR COMMUNICATIONS SYSTEM (IFICS) DATA TERMINAL (IDT)"]={type:"path",fill:!1,d:"m 80,82.4 45,-2 -4,37 m -6,-1 0,-35 -34,9 m 12,21 0,8 M 80,82.4 c 0,25 16,35 41,35"},G["GR.EQ.LASER"]={type:"path",fill:!1,d:"m 100,55 0,25 10,5 -20,5 20,5 -20,5 10,5 0,15 10,5 -20,5 20,5 -20,5 20,5 M 90,65 100,55 110,65"},G["GR.EQ.TENT"]={type:"path",fill:!1,d:"m 65,124.4 10,-37 25,-10 25,10 10,37 z"},G["GR.EQ.UNIT DEPLOYMENT SHIPMENTS"]=e("DPLY"),G["GR.EQ.CIVILIAN VEHICLE.LIGHT"]={type:"path",fill:!1,d:"m 100,125 0,-20"},G["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]={type:"path",fill:!1,d:"m 103,105 0,20 m -6,-20 0,20"},G["GR.EQ.CIVILIAN VEHICLE.HEAVY"]={type:"path",fill:!1,d:"m 106,105 0,20 m -12,-20 0,20 m 6,-20 0,20"},G["GR.EQ.CIVILIAN VEHICLE.TRAILER"]={type:"path",fill:!1,d:"m 140,105 0,20 m -10,-10 10,0"},G["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"]=[{type:"path",fill:!!t&&s,d:"m 90,125 20,0 m -20,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 35,0 5,0 0,-20 -20,0 0,-20 -20,0 0,20 -20,0 0,20 5,0 m 50,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z"},{type:"path",fill:!1,strokewidth:2,d:"m 95,90 0,15 10,0 0,-15 z"}],G["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"]=[{type:"path",fill:!!t&&s,d:"m 90,125 20,0 m -20,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 35,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 0,0 5,0 0,-20 -20,0 -20,0 0,-20 -20,0 0,20 0,20 5,0"},{type:"path",fill:!1,strokewidth:2,d:"m 75,90 0,15 10,0 0,-15 z"}],G["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]=[{type:"path",fill:!!t&&s,d:"m 90,125 20,0 m -20,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 35,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 0,0 5,0 0,-20 0,-20 -20,0 -20,0 -20,0 0,20 0,20 5,0"},{type:"path",fill:!1,strokewidth:2,d:"m 115,90 0,15 10,0 0,-15 z m -20,0 0,15 10,0 0,-15 z m -20,0 0,15 10,0 0,-15 z"}],G["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"]=[{type:"path",fill:!!t&&s,d:"m 90,125 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 35,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m -35,0 20,0 m 15,0 5,0 0,-20 0,-20 -20,0 -20,0 0,20 -20,0 0,20 5,0"},{type:"path",fill:!1,strokewidth:2,d:"m 95,90 0,15 10,0 0,-15 z"}],G["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"]={type:"path",fill:!!t&&s,d:"m 90,125 20,0 m -20,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 35,0 c 0,-4.1 -3.4,-7.5 -7.5,-7.5 -4.1,0 -7.5,3.4 -7.5,7.5 0,4.1 3.4,7.5 7.5,7.5 4.1,0 7.5,-3.4 7.5,-7.5 z m 0,0 5,0 0,-20 -60,0 0,20 5,0 m 15,-20 5,-15"},G["GR.EQ.PACK ANIMAL"]={type:"path",fill:!1,d:"m 70,125 15,-50 15,50 15,-50 15,50 "},G["GR.EQ.MISSILE SUPPORT"]=[{type:"text",stroke:!1,x:100,y:100,fontsize:20,text:"MSL"},{type:"text",stroke:!1,x:100,y:115,fontsize:20,text:"SPT"}],G["GR.EQ.MISSILE TRANSLOADER"]=[{type:"text",stroke:!1,x:100,y:110,fontsize:30,text:"MSL"},{type:"path",fill:!1,d:"m 75,70 50,0 m -25,10 c 0,-5 0,-10 0,-10"}],G["GR.EQ.MISSILE TRANSPORTER"]=[{type:"text",stroke:!1,x:100,y:110,fontsize:30,text:"MSL"},{type:"path",fill:!1,d:"m 55,85 90,0"}],G["GR.EQ.MISSILE CRANE/LOADING DEVICE"]=[{type:"text",stroke:!1,x:100,y:110,fontsize:30,text:"MSL"},{type:"path",fill:!1,d:"m 75,80 25,-20 c 0,0 0,15 0,15 l 5,0 0,-5"}],G["GR.EQ.MISSILE PROPELLANT TRANSPORTER"]=[{type:"text",stroke:!1,x:90,y:110,fontsize:20,text:"MSL"},{type:"path",fill:!1,d:"m 120,115 0,-15 -10,-10 20,0 -10,10"}],G["GR.EQ.MISSILE WARHEAD TRANSPORTER"]=[{type:"text",stroke:!1,x:100,y:100,fontsize:20,text:"MSL"},{type:"text",stroke:!1,x:100,y:115,fontsize:20,text:"WHD"}],G["GR.EQ.LAND MINE"]=L?{type:"circle",cx:100,cy:100,r:22,fill:!1}:[{type:"path",fill:!1,d:"m 70,65 60,0 -30,65 z"},{type:"text",stroke:!1,x:100,y:90,fontfamily:"Arial",fontsize:30,text:"M"}],G["GR.EQ.ANTIPERSONNEL LAND MINE"]=[{type:"circle",cx:100,cy:100,r:22},{type:"path",d:"M117,82 l20,-18 -18,25z M83,82 l-20,-18 18,25z",stroke:!1}],G["GR.EQ.ANTIPERSONNEL LAND MINE LESS THAN LETHAL"]=[{type:"circle",cx:100,cy:100,r:22,fill:!1},{type:"path",d:"M117,82 l20,-18 -18,25z M83,82 l-20,-18 18,25z",stroke:!1}],G["GR.EQ.ANTITANK MINE"]={type:"circle",cx:100,cy:100,r:22},G["GR.EQ.IMPROVISED EXPLOSIVE DEVICE"]=e("IED"),G["GR.EQ.LAND MINES"]=[{type:"text",stroke:!1,x:100,y:110,fontsize:30,text:"M"},{type:"path",fill:!1,d:t?"m 135,70 -70,0 35,70 z":"m 65,130 70,0 -35,-70 z"}],G["GR.EQ.SENSOR"]={type:"path",d:"m 100,60 c 0,15 25,40 40,40 -15,0 -40,25 -40,40 0,-15 -25,-40 -40,-40 15,0 40,-25 40,-40 z"},G["GR.EQ.SENSOR EMPLACED"]=[R._scale(.9,G["GR.EQ.SENSOR"]),{type:"path",fill:!1,d:"m 70,75 10,-15 10,15 10,-15 10,15 10,-15 10,15"}],G["GR.EQ.RADAR"]={type:"path",d:"M72,95 l30,-25 0,25 30,-25 M70,70 c0,35 15,50 50,50",fill:!1},G["GR.EQ.ANTENNAE"]=[],G["GR.EQ.PSYCHOLOGICAL OPERATIONS EQUIPMENT"]={type:"path",fill:!!t&&s,stroke:n,d:"m 110,95 10,0 m -10,10 10,0 m -10,10 10,0 m -10,-30 10,0 m -10,-5 -10,10 -30,0 0,20 30,0 10,10 z"},G["GR.IN.IC.ELDER CARE"]={type:"path",d:"m 120.1,119.1 c 0,-6.3 2.3,-8.2 3.9,-12.6 1,-2.6 1.6,-3.3 1.8,-6.5 0.2,-2.4 0.9,-4.7 0.9,-7.2 v -2.6 c 0,-2.6 -2.2,-8.9 -3.3,-10.5 -1.3,-2 -4.8,-5.4 -6.7,-6.9 -2.2,-1.8 -5.4,-4.6 -8.2,-5.6 -1.6,-0.5 -9.8,-2.4 -11.4,-2.3 l -5.7,0.6 v 0.8 c 0,0.8 2,2.7 2.4,3.3 0,3.3 0.8,6.8 -1.3,8.4 -2.2,1.6 -2.8,3.4 -3.8,6.3 -0.4,1 -0.9,3.1 -1,4 -0.2,1 -0.2,4 -0.4,4.6 -1.1,2.4 -2.6,4.2 -3.8,6.4 l -5.1,0.5 c -2.1,3.2 -4.6,4.1 -4.6,9.6 v 26.4 c 0.6,0.2 0.4,0.2 0.9,0.2 0.5,0 0.3,-0.1 0.9,-0.2 v -27.5 c 0,-0.7 0.8,-3 1.1,-3.5 0.4,0.2 0.8,0.6 1.3,0.6 0.3,0 1.1,-0.3 1.3,-0.4 l 2.6,0.9 0.8,-0.6 0.6,2.5 c 0.4,0.3 0.4,0.5 0.8,0.5 h 0.4 c 0.5,0 0.6,-0.2 0.6,-0.6 v -0.4 c 0,-1 -1.2,-3 -1.5,-3.7 1.2,-2.5 6.3,-2.6 8.2,-5.8 0.9,-1.6 1.8,-3 2.6,-4.5 0.4,-0.9 2.3,-4.1 2.4,-4.4 h 4.4 c 2.3,0 2.1,2.5 2.6,4.2 0.6,2 2,2 2,4.6 0,2.8 -2.9,7 -4,9 -0.3,0.7 -3.9,8.8 -3.9,8.9 v 2 c 0,3 2.6,9.1 2.6,11.2 v 2.2 c -1.2,0.3 -6.8,2.4 -6.8,3.5 0,0.3 0.4,0.6 0.9,0.6 h 6.8 c 2.3,0 4.5,-1 6.6,-1.1 v -3 c 0,-0.6 -1.1,-2.2 -1.1,-3.7 -0.9,-1.3 -1.8,-6 -1.8,-8.2 0,-3.2 1.2,-5.4 2.5,-7.4 2.5,-4 0.4,-2.3 4.6,-5.1 l 1.8,1.7 c -1,1.8 -2.3,3.7 -2.3,6.4 v 5.9 h 0.4 v 0.6 c 0,0.9 5,9 5.7,10.3 -1.5,2.3 -6.7,1.6 -6.8,5 h 7.5 c 1.2,0 3.3,-1 4.5,-1.4 1.6,-0.5 2.9,-1.1 2.9,-3 0,-0.7 -2.9,-4.6 -3.6,-5.7 -0.3,-0.4 -2.4,-6 -2.4,-6.6 v -0.4 z m -45.3,-47.9 v 0.6 c 0,4.3 3.7,7.9 8.1,7.9 h 0.2 c 3.7,0 7.7,-3.6 7.7,-7 v -2.2 c 0,-3.2 -3.9,-6.8 -7.5,-6.8 h -1.2 c -3.4,0 -7.3,4 -7.3,7.5 z",stroke:!1},G["GR.IN.IC.RAW MATERIAL PRODUCTION/STORAGE"]=[{type:"text",stroke:!1,x:100,y:90,fontsize:30,text:"PS"},{type:"text",stroke:!1,x:100,y:120,fontsize:30,text:"RM"}],G["GR.IN.IC.MINE"]={type:"path",d:"m 105,85 10,10 5,-5 c -5,-5 -10,-5 -15,-5 z M 95,85 85,95 80,90 c 5,-5 10,-5 15,-5 z m -5,5 30,30 m -40,0 30,-30"},G["GR.IN.IC.PROCESSING FACILITY"]=[{type:"text",stroke:!1,x:100,y:90,fontsize:30,text:"PROC"},{type:"text",stroke:!1,x:100,y:120,fontsize:30,text:"FAC"}],G["GR.IN.IC.UTILITY FACILITY"]={type:"text",stroke:!1,x:100,y:110,fontsize:30,text:"UTIL"},G["GR.IN.IC.RESEARCH"]={type:"text",stroke:!1,x:100,y:110,fontsize:30,text:"R&D"},G["GR.IN.IC.TELECOMMUNICATIONS"]={type:"path",d:"m 95,80 10,20 -10,0 10,20",fill:!1},G["GR.IN.IC.ELECTRIC POWER"]={type:"path",d:"M 100 80 C 91.7 80 85 86.7 85 95 C 85 101.5 89.2 107.1 95 109.1 L 95 119.1 C 96.6 119.7 98.2 120 100 120 C 101.8 120 103.4 119.7 105 119.1 L 105 109.1 C 110.8 107.1 115 101.5 115 95 C 115 86.7 108.3 80 100 80 z ",fill:!1},G["GR.IN.IC.ELECTRIC POWER NUCLEAR"]={type:"text",stroke:!1,x:100,y:103,fontsize:23,text:"N"},G["GR.IN.IC.ELECTRIC POWER DAM"]={type:"text",stroke:!1,x:100,y:103,fontsize:23,text:"H"},G["GR.IN.IC.ELECTRIC POWER FOSSIL"]={type:"text",stroke:!1,x:100,y:103,fontsize:23,text:"F"},G["GR.IN.IC.ATOMIC ENERGY"]={type:"path",d:t?"M 90.4,82.4 C 84.2,85.8 80,92.4 80,100 l 20,0 -9.6,-17.6 z m 19.3,0.1 L 100,100 l 20,0 c 0,-7.5 -4.2,-14.1 -10.3,-17.5 z M 100,100 89.7,117.1 C 92.7,118.9 96.2,120 100,120 c 3.8,0 7.3,-1.1 10.3,-2.9 L 100,100 z":"M 89.9,82.5 110,82.7 89.7,117.1 80,99.9 120.1,100 110,117.3 z",fill:!1},G["GR.IN.IC.ATOMIC ENERGY WEAPONS GRADE"]={type:"path",d:t?"M 90.4,82.4 C 84.2,85.8 80,92.4 80,100 l 20,0 -9.6,-17.6 z m 19.3,0.1 L 100,100 l 20,0 c 0,-7.5 -4.2,-14.1 -10.3,-17.5 z M 100,100 89.7,117.1 C 92.7,118.9 96.2,120 100,120 c 3.8,0 7.3,-1.1 10.3,-2.9 L 100,100 z":"M 89.9,82.5 110,82.7 89.7,117.1 80,99.9 120.1,100 110,117.3 z"},G["GR.IN.IC.AIRCRAFT PRODUCTION & ASSEMBLY"]={type:"path",stroke:!1,d:"m 95.1,109.3 c 0,0 -20.8,4.9 -30.1,6.7 -2.2,0.4 -5.7,0.2 -6.5,-2 -0.4,-1.1 3.3,-6.6 6.5,-7.3 8.7,-1.9 25.7,-5.5 25.7,-5.5 l 3.1,-16.1 4,-0.8 0.3,15.9 25.6,-5.8 6.5,-13.2 5.3,-1.4 -3.3,16.1 14,4.8 -4.3,1.2 -13.7,-2.8 -23.6,6.7 31.6,11.8 -5.5,2.5 z"},G["GR.IN.IC.BRIDGE"]={type:"path",d:"m 70,115 10,-10 40,0 10,10 m -60,-30 10,10 40,0 10,-10",fill:!1},G["GR.IN.IC.BASE"]={type:"path",d:"m 75,85 50,30 m -50,0 50,-30",fill:!1},G["GR.IN.IC.SEA SURFACE INSTALLATION, OIL RIG/PLATFORM"]=[{type:"path",d:"m 85,105 0,-40 m 25,40 0,15 m -35,0 0,-15 50,0 0,15",fill:!1},{type:"path",d:"m 85,90 15,0 0,15 -15,0 0,-15"}],G["GR.IN.IC.MILITARY/CIVILIAN.MATERIEL"]=e("MAT"),G["GR.IN.IC.MILITARY/CIVILIAN.PRINTED MEDIA"]=[{type:"circle",cx:100,cy:90,r:10,fill:!1},{type:"circle",cx:100,cy:110,r:10,fill:!1},{type:"path",d:"m 65,100 75,0",fill:!1}],G["GR.IN.IC.INFRASTRUCTURE.BANKING FINANCE AND INSURANCE  INFRASTRUCTURE.ECONOMIC INFRASTRUCTURE ASSET"]=e("ECON"),G["GR.IN.IC.INFRASTRUCTURE.TELECOMMUNICATIONS INFRASTRUCTURE.TELECOMMUNICATIONS"]={type:"path",d:"m 90,105 20,0 0,0 m -25,15 15,-30 15,30 m -55,-40 25,10 0,-10 15,10 15,-10 0,10 25,-10",fill:!1},G["GR.IN.M1.RADIOLOGICAL"]=S("R"),G["GR.IN.M1.COAL"]=S("CO"),G["GR.IN.M1.GEOTHERMAL"]=S("GT"),G["GR.IN.M1.HYDROELECTRIC"]=S("HY"),G["GR.IN.M1.NATURAL GAS"]=S("NG"),G["GR.IN.M1.PETROLEUM"]={type:"path",d:"m 100,75 0,-10 -6,-10 12,0 -6,10",fill:!1},G["GR.IN.M1.CIVILIAN"]=S("CIV"),G["GR.IN.M1.CIVILIAN TELEPHONE"]=S("T"),G["GR.IN.M1.CIVILIAN TELEVISION"]=S("TV"),G["GR.IN.M2.CHEMICAL WARFARE PRODUCTION"]=T("C"),G["GR.IN.M2.NUCLEAR WARFARE PRODUCTION"]=T("N"),G["GR.IN.M2.RADIOLOGICAL WARFARE PRODUCTION"]=T("R"),G["GR.IN.M2.ATOMIC ENERGY REACTOR"]=T("A"),G["GR.IN.M2.NUCLEAR MATERIAL PRODUCTION"]=T("P"),G["GR.IN.M2.NUCLEAR MATERIAL STORAGE"]=T("S"),G["GR.IN.M2.CHEMICAL & BIOLOGICAL WARFARE"]=T("B"),G["GR.IN.M2.SHIP CONSTRUCTION"]=T("YRD"),G["GR.IN.M2.WEAPONS GRADE PRODUCTION"]=T("W"),G["SE.IC.MILITARY"]=e("MIL"),G["SE.IC.COMBATANT"]=[{type:"path",d:"m 86.9,110 c -3.6,2 -7.2,3.9 -10.8,5.9 2.1,2.9 6.7,3.9 10,2.1 2.6,-0.9 4.7,-3.8 3.1,-6.1 -0.8,-0.6 -1.5,-1.3 -2.3,-1.9 z m 26.3,0.1 c 3.6,2 7.2,3.9 10.8,5.9 -2.1,2.9 -6.7,3.9 -10,2.1 -2.6,-0.9 -4.7,-3.8 -3.1,-6.1 0.8,-0.6 1.5,-1.3 2.3,-1.9 z",fill:!1},{type:"path",d:"m 112.9,110 c -5.6,-4 -11.3,-7.9 -16.1,-12.5 -4.2,-4.5 -7,-9.8 -9.2,-15.1 -0.8,4.4 -0.9,9.3 2.4,13.2 3.6,4.5 8.6,8.1 13.5,11.8 2.3,1.7 4.7,3.3 7.1,4.8 0.8,-0.7 1.5,-1.5 2.3,-2.2 m -25.7,0 c 5.6,-4 11.3,-7.9 16.1,-12.5 4.2,-4.5 7,-9.8 9.2,-15.1 0.8,4.4 0.9,9.3 -2.4,13.2 -3.6,4.5 -8.6,8.1 -13.5,11.8 -2.3,1.7 -4.7,3.3 -7.1,4.8 -0.8,-0.7 -1.5,-1.5 -2.3,-2.2",fill:l,strokewidth:2}],G["SE.IC.SURFACE COMBATANT, LINE"]={type:"path",d:"m 100,120 -25,-15 15,0 0,-10 5,0 0,-5 -15,0 0,-5 15,0 0,-5 10,0 0,5 15,0 0,5 -15,0 c 0,0 0,5 0,5 l 5,0 0,10 15,0 z"},G["SE.IC.CARRIER"]={type:"path",d:"m 80,100 20,20 20,-20 -20,0 0,-20 -20,0 z"},G["SE.IC.BATTLESHIP"]=e("BB");G["SE.IC.CRUISER"]=e("CC"),G["SE.IC.CRUISER, GUIDED MISSILE"]=e("CG"),G["SE.IC.DESTROYER"]=e("DD"),G["SE.IC.FRIGATE"]=e("FF"),G["SE.IC.CORVETTE"]=e("FS"),G["SE.IC.LITTORAL COMBATANT SHIP"]=e("LL"),G["SE.IC.AMPHIBIOUS WARFARE SHIP"]={type:"path",d:"m 100,120 20,0 m -20,0 -20,-20 10,0 0,-20 20,0 0,20 10,0 z"},G["SE.IC.AMPHIBIOUS FORCE FLAGSHIP"]=e("LCC"),G["SE.IC.AMPHIBIOUS ASSAULT"]=e("LA"),G["SE.IC.AMPHIBIOUS ASSAULT SHIP, GENERAL"]=e("LHA"),G["SE.IC.AMPHIBIOUS ASSAULT SHIP, MULTI-PURPOSE"]=e("LHD"),G["SE.IC.AMPHIBIOUS TRANSPORT, DOCK"]=e("LPD"),G["SE.IC.AMPHIBIOUS ASSAULT SHIP, HELICOPTER"]=e("LPH"),G["SE.IC.LANDING SHIP"]=e("LS"),G["SE.IC.LANDING CRAFT"]=e("LC"),G["SE.IC.MINE WARFARE VESSEL"]={type:"path",d:"M 98.3 81 L 98.3 85.1 C 95.9 85.4 93.7 86.5 91.9 88 L 88.4 84.5 L 86 86.9 L 89.6 90.5 C 89.6 90.5 89.6 90.5 89.6 90.5 C 88.3 92.5 87.5 94.9 87.5 97.5 C 87.5 98.4 87.6 99.2 87.8 100 L 80 100 L 100 120 L 120 100 L 112.3 100 C 112.4 99.2 112.5 98.4 112.5 97.5 C 112.5 94.8 111.6 92.3 110.2 90.3 L 113.8 86.6 L 111.5 84.2 L 107.9 87.8 C 106.1 86.4 104 85.4 101.7 85.1 L 101.7 81 L 98.3 81 z"},G["SE.IC.MINELAYER"]=e("ML"),G["SE.IC.MINESWEEPER"]=e("MS"),G["SE.IC.MINESWEEPER, DRONE"]=e("MSD"),G["SE.IC.MINEHUNTER"]=e("MH"),G["SE.IC.MINE COUNTER MEASURE SUPPORT SHIP"]=e(t?"MA":"MCS"),G["SE.IC.MINE COUNTERMEASURES"]=e("MCM"),G["SE.IC.SEA SURFACE DECOY"]={type:"path",d:"M 105,110 90,95 105,80 z M 85,110 70,95 85,80 z m 40,-30 -15,15 15,15 z m -55,40 0,-5 55,0 0,5 z"},G["SE.IC.PATROL"]={type:"path",d:"m 80,100 20,20 20,-20 -10,0 -10,-20 -10,20 z"},G["SE.IC.PATROL CRAFT"]=e("PC"),G["SE.IC.PATROL ANTI SUBMARINE WARFARE"]={type:"path",d:"m 100,120 -25,-25 5,-5 10,10 5,0 0,-20 10,0 0,20 5,0 10,-10 5,5 z"},G["SE.IC.PATROL ANTISHIP MISSILE"]=e("PM"),G["SE.IC.PATROL TORPEDO"]=e("PT"),G["SE.IC.PATROL GUN"]=e("PG"),G["SE.IC.PATROL SHIP"]=[],G["SE.IC.MILITARY SPEEDBOAT"]={type:"path",stroke:!1,d:"m 120,120 -40,0 -15,-25 15,0 5,-15 10,0 -5,15 45,0 z"},G["SE.IC.MILITARY SPEEDBOAT, RIGID-HULL INFLATABLE BOAT"]=[{type:"path",stroke:!1,d:"M 85 80 L 80 95 L 65 95 L 80 120 L 120 120 L 135 95 L 90 95 L 95 80 L 85 80 z M 87 100.7 L 93.1 100.7 C 94.6 100.7 95.7 100.8 96.4 101.1 C 97.1 101.3 97.7 101.8 98.1 102.4 C 98.5 103.1 98.7 103.8 98.7 104.7 C 98.7 105.8 98.4 106.7 97.8 107.4 C 97.1 108.1 96.2 108.5 94.9 108.7 C 95.6 109.1 96.1 109.4 96.5 109.9 C 96.9 110.3 97.4 111.1 98.1 112.2 L 99.9 115 L 96.4 115 L 94.3 111.9 C 93.6 110.8 93.1 110.1 92.8 109.8 C 92.5 109.5 92.2 109.3 91.9 109.2 C 91.6 109.1 91.2 109 90.5 109 L 89.9 109 L 89.9 115 L 87 115 L 87 100.7 z M 101.5 100.7 L 107.2 100.7 C 108.3 100.7 109.2 100.7 109.7 100.8 C 110.3 100.9 110.8 101.1 111.2 101.4 C 111.7 101.7 112 102.1 112.3 102.6 C 112.6 103.1 112.7 103.7 112.8 104.3 C 112.7 105 112.6 105.6 112.2 106.1 C 111.9 106.7 111.4 107.1 110.8 107.4 C 111.6 107.7 112.3 108.1 112.8 108.7 C 113.2 109.3 113.5 110 113.5 110.8 C 113.5 111.5 113.3 112.1 113 112.8 C 112.7 113.4 112.3 113.8 111.8 114.2 C 111.2 114.6 110.6 114.8 109.8 114.9 C 109.3 115 108.2 115 106.3 115 L 101.5 115 L 101.5 100.7 z M 104.3 103.1 L 104.3 106.4 L 106.3 106.4 C 107.4 106.4 108.1 106.3 108.3 106.3 C 108.8 106.3 109.2 106.1 109.5 105.8 C 109.8 105.5 109.9 105.1 109.9 104.7 C 109.9 104.2 109.8 103.9 109.6 103.6 C 109.3 103.3 109 103.2 108.5 103.1 C 108.2 103.1 107.4 103.1 106 103.1 L 104.3 103.1 z M 89.9 103.1 L 89.9 106.8 L 92 106.8 C 93.4 106.8 94.3 106.7 94.6 106.6 C 95 106.4 95.2 106.3 95.4 106 C 95.6 105.7 95.7 105.3 95.8 104.9 C 95.7 104.4 95.6 104 95.3 103.7 C 95.1 103.4 94.7 103.2 94.3 103.2 C 94 103.1 93.3 103.1 92.2 103.1 L 89.9 103.1 z M 104.3 108.8 L 104.3 112.6 L 107 112.6 C 108.1 112.6 108.7 112.6 109 112.5 C 109.4 112.4 109.8 112.2 110.1 111.9 C 110.3 111.6 110.5 111.2 110.5 110.7 C 110.5 110.3 110.4 109.9 110.2 109.6 C 109.9 109.3 109.6 109.1 109.3 109 C 108.9 108.8 108 108.8 106.7 108.8 L 104.3 108.8 z"},{type:"text",fill:t?s:!O&&s,stroke:!1,x:100,y:115,fontsize:20,text:"RB"}],G["SE.IC.MILITARY JETSKI"]={type:"path",stroke:!1,d:"m 135,105 0,15 -60,0 -10,-15 20,-25 10,0 0,10 -5,0 -5,15 z"},G["SE.IC.UNMANNED SURFACE WATER VEHICLE"]=G["AR.I.UNMANNED AERIAL VEHICLE"],G["SE.IC.NAVY TASK ORGANIZATION UNIT"]=[{type:"path",d:"m 110,80 15,15 0,25 M 90,80 75,95 l 0,25",fill:!1}],t&&G["SE.IC.NAVY TASK ORGANIZATION UNIT"].push({type:"path",d:"m 100,80 -15,15 0,25 30,0 0,-25 -15,-15"}),G["SE.IC.NAVY TASK FORCE"]=[G["SE.IC.NAVY TASK ORGANIZATION UNIT"],{type:"text",stroke:!1,x:100,y:t?150:120,fontsize:30,text:"TF"}],G["SE.IC.NAVY TASK GROUP"]=[G["SE.IC.NAVY TASK ORGANIZATION UNIT"],{type:"text",stroke:!1,x:100,y:t?150:120,fontsize:30,text:"TG"}],G["SE.IC.NAVY TASK UNIT"]=[G["SE.IC.NAVY TASK ORGANIZATION UNIT"],{type:"text",stroke:!1,x:100,y:t?150:120,fontsize:30,text:"TU"}],G["SE.IC.NAVY TASK ELEMENT"]=[G["SE.IC.NAVY TASK ORGANIZATION UNIT"],{type:"text",stroke:!1,x:100,y:t?150:120,fontsize:30,text:"TE"}],G["SE.IC.CONVOY"]={type:"path",d:"m 80,115 -20,0 0,-35 80,0 0,35 -20,0 0,-20 -40,0 z"},G["SE.IC.NONCOMBATANT"]={type:"path",d:"m 80,100 0,-20 40,0 0,20 15,0 0,20 -70,0 0,-20 z"},G["SE.IC.AUXILIARY SHIP"]=e(t?"AR":"AA"),G["SE.IC.AMMUNITION SHIP"]=e("AE"),G["SE.IC.STORES SHIP"]=e("AF"),G["SE.IC.AUXILIARY FLAG OR COMMAND SHIP"]=e("AGF"),G["SE.IC.INTELLIGENCE COLLECTOR"]=e(t?"JI":"AI"),G["SE.IC.OCEAN RESEARCH SHIP"]=e("AGO"),G["SE.IC.SURVEY SHIP"]=e("AGS"),G["SE.IC.HOSPITAL SHIP"]=e("AH"),G["SE.IC.CARGO SHIP"]=e("AK"),G["SE.IC.COMBAT SUPPORT SHIP, FAST"]=e("AOE"),G["SE.IC.OILER, REPLENISHMENT"]=e("AO"),G["SE.IC.REPAIR SHIP"]=e("AR"),G["SE.IC.SUBMARINE TENDER"]=e("AS"),G["SE.IC.TUG, OCEAN GOING"]=e(t?"AS":"AT"),G["SE.IC.SERVICE CRAFT, YARD, GENERAL"]=e("YY"),G["SE.IC.BARGE, NOT SELF-PROPELLED"]=e("YB"),G["SE.IC.BARGE, SELF-PROPELLED"]=e("YS"),G["SE.IC.TUG, HARBOUR"]=e("YT"),G["SE.IC.LAUNCH"]=e("YFT"),G["SE.IC.MERCHANT SHIP, GENERAL"]={type:"path",fill:t?s:!O&&s,d:"m 75,100 0,-35 50,0 0,35 20,0 -15,35 -60,0 -15,-35 z"},G["SE.IC.CARGO, GENERAL"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:t?"CA":"A"}],G["SE.IC.CONTAINER SHIP"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:"C"}],G["SE.IC.DREDGE"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:"D"}],G["SE.IC.ROLL ON-ROLL OFF"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:"30",text:t?"RO":"E"}],G["SE.IC.FERRY"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:t?"FE":"F"}],G["SE.IC.HEAVY LIFT"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:"H"}],G["SE.IC.HOVERCRAFT"]={type:"path",d:t?"m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z":"m 90,80 0,15.6 C 78.4,96.9 70,100.6 70,105 c 0,5.5 13.4,10 30,10 16.6,0 30,-4.5 30,-10 0,-4.4 -8.4,-8.1 -20,-9.4 L 110,80 90,80 z m -15,40 50,0"},G["SE.IC.HOVERCRAFT 2525D"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:"J"}],G["SE.IC.HOVERCRAFT CIVILIAN"]={type:"path",fill:t?s:!O&&s,d:t?"m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z":"m 90,80 0,15.6 C 78.4,96.9 70,100.6 70,105 c 0,5.5 13.4,10 30,10 16.6,0 30,-4.5 30,-10 0,-4.4 -8.4,-8.1 -20,-9.4 L 110,80 90,80 z m -15,40 50,0"},G["SE.IC.HOVERCRAFT NONCOMBATANT"]=[{type:"path",d:"m 65,100 0,-30 5,10 60,0 5,-10 0,30 10,0 -15,35 -60,0 -15,-35 z",strokewidth:!1},t?{type:"text",fill:l,stroke:!1,x:100,y:120,fontsize:30,text:"NC"}:[]],G["SE.IC.MERCHANT SHIP, LASH CARRIER (WITH BARGES)"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:"L"}],G["SE.IC.OILER/TANKER"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:t?"OT":"O"}],G["SE.IC.PASSENGER SHIP"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:t?"PA":"P"}],G["SE.IC.TUG, OCEAN GOING CIVILIAN"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:t?"TU":"T"}],G["SE.IC.TOW"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:"TW"}],G["SE.IC.TRANSPORT SHIP, HAZARDOUS MATERIAL"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:"HZ"}],G["SE.IC.JUNK/DHOW"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:"QJ"}],G["SE.IC.BARGE, NOT SELF-PROPELLED"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"text",stroke:!1,x:100,y:115,fontsize:30,text:"YB"}],G["SE.IC.HOSPITAL SHIP2"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"path",stroke:!1,d:"m 95,95 0,-15 10,0 0,15 15,0 0,10 -15,0 0,15 -10,0 0,-15 -15,0 0,-10 z"}],G["SE.IC.FISHING VESSEL"]={type:"path",fill:t?s:!O&&s,d:"m 75,100 0,-15 20,0 0,15 50,0 -15,35 -60,0 -15,-35 z M 105,57.4 105,100 m 30,-35 -30,35"},G["SE.IC.DRIFTER"]=[G["SE.IC.FISHING VESSEL"],{type:"text",stroke:!1,x:100,y:125,fontsize:30,text:"DF"}],G["SE.IC.TRAWLER"]=[G["SE.IC.FISHING VESSEL"],{type:"text",stroke:!1,x:100,y:125,fontsize:30,text:"TR"}],G["SE.IC.FISHING VESSEL DREDGE"]=[G["SE.IC.FISHING VESSEL"],{type:"text",stroke:!1,x:100,y:125,fontsize:30,text:"DR"}],G["SE.IC.LAW ENFORCEMENT VESSEL"]=[G["SE.IC.MERCHANT SHIP, GENERAL"],{type:"path",d:"m 135,100 -15,35 -10,0 15,-35 z"}],G["SE.IC.LEISURE CRAFT, SAILING BOAT"]={type:"path",fill:t?s:!O&&s,d:"m 105,55 0,40 35,0 z m -5,-5 0,50 m 45,0 -15,35 -60,0 -15,-35 z"},G["SE.IC.LEISURE CRAFT, MOTORIZED"]={type:"path",fill:t?s:!O&&s,d:"m 70,97.4 15,-30 10,0 -15,30 65,0 -15,35 -60,0 -15,-35 z"},G["SE.IC.LEISURE CRAFT, MOTORIZED, RIGID-HULL INFLATABLE BOAT"]=[G["SE.IC.LEISURE CRAFT, MOTORIZED"],{type:"text",stroke:!1,x:100,y:125,fontsize:30,text:"RB"}],G["SE.IC.LEISURE CRAFT, MOTORIZED, SPEEDBOAT"]=[G["SE.IC.LEISURE CRAFT, MOTORIZED"],{type:"text",stroke:!1,x:100,y:125,fontsize:30,text:"SP"}],G["SE.IC.LEISURE CRAFT, JETSKI"]={type:"path",fill:t?s:!O&&s,d:"m 85,60 -30,45 10,15 75,0 0,-20 -60,0 10,-30 5,0 0,-10 z"},G["SE.IC.UNMANNED SURFACE WATER VEHICLE (USV)"]=G["AR.I.CIVILIAN UNMANNED AERIAL VEHICLE"],G["SE.IC.OWN SHIP"]={type:"path",fill:!1,stroke:C?i:s,d:"m 50,100 100,0 m -50,-50 0,100 m 50,-50 c 0,27.6 -22.4,50 -50,50 -27.6,0 -50,-22.4 -50,-50 0,-27.6 22.4,-50 50,-50 27.6,0 50,22.4 50,50 z"},G["SE.IC.DITCHED AIRCRAFT"]={type:"path",fill:C?i:s,stroke:C?i:s,d:"m 145,120 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 10,10 25,-30 -10,-10 10,-10 20,20 -10,35 -15,-15 -15,15 z"},G["SE.IC.PERSON IN WATER"]={type:"path",fill:C?i:s,stroke:C?i:s,d:"m 105,110 10,-10 0,-15 5,0 0,20 -10,10 z m -10,0 -10,-10 0,-15 -5,0 0,20 10,10 z m 5,-5 0,-10 -5,0 -5,-5 0,-10 5,-5 10,0 5,5 0,10 -5,5 -5,0 m -15,25 15,-15 m 45,15 -15,-15 m -15,15 15,-15 m -75,15 15,-15 m 15,15 -15,-15 m 45,15 -15,-15"},G["SE.IC.DISTRESSED VESSEL"]={type:"path",fill:C?i:s,stroke:C?i:s,d:"m 120,65 -20,20 20,-20 m -5,55 -35,-35 0,-20 45,45 z m -30,0 -15,-15 m -15,15 15,-15 m 45,15 15,-15 m 15,15 -15,-15 m -45,15 15,-15"},G["SE.IC.SEA MINELIKE"]={type:"path",fill:C?i:s,stroke:C?i:s,d:"m 117.7,75 c 3.5,-3.5 7.1,-7.1 7.1,-7.1 l 7.1,7.1 -7.1,7.1 m -49.5,0 c -3.5,-3.5 -7.1,-7.1 -7.1,-7.1 l 7.1,-7.1 7.1,7.1 M 95,70 c 0,-5 0,-10 0,-10 l 10,0 0,10 m 25,30 c 0,16.6 -13.4,30 -30,30 -16.6,0 -30,-13.4 -30,-30 0,-16.6 13.4,-30 30,-30 16.6,0 30,13.4 30,30 z"},G["SE.IC.NAVIGATIONAL"]={type:"path",fill:!1,stroke:C?i:"red",d:"m 75,90 -10,10 70,0 -10,10"},G["SE.IC.ICEBERG"]={type:"path",fill:C?i:s,stroke:C?i:s,d:"m 75,100 25,-30 25,30 -5,15 -5,-5 -15,20 -15,-20 -5,5 z m -15,0 80,0"},G["SE.IC.FUSED TRACK"]=[e("?"),{type:"path",fill:!1,d:"m 70,65 10,35 -10,35 60,0 -10,-35 10,-35 z"}],G["SE.M1.OWN SHIP"]=S("OWN"),G["SE.M1.ANTIAIR WARFARE"]=S("AAW"),G["SE.M1.ANTISUBMARINE WARFARE"]=S("ASW"),G["SE.M1.ESCORT"]=S("E"),G["SE.M1.ELECTRONIC WARFARE"]=S("EW"),G["SE.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE"]=S("ISR"),G["SE.M1.MINE COUNTER MEASURES"]=S("MCM"),G["SE.M1.MISSILE DEFENSE"]=S("MD"),G["SE.M1.MEDICAL"]=S("ME"),G["SE.M1.MINE COUNTERMEASURES"]=S("MCM"),G["SE.M1.MINE WARFARE"]=S("MIW"),G["SE.M1.REMOTE MULTI-MISSION VEHIHLE"]=S("RMV"),G["SE.M1.SPECIAL OPERATIONS FORCE"]=S("SOF"),G["SE.M1.SURFACE WARFARE"]=S("SUW"),G["SE.M1.BALLISTIC MISSILE"]=S("B"),G["SE.M1.GUIDED MISSILE"]=S("G"),G["SE.M1.OTHER GUIDED MISSILE"]=S("M"),G["SE.M1.TORPEDO"]=S("T"),G["SE.M1.DRONE-EQUIPPED"]=G["AIR.M1.UNMANNED AERIAL VEHICLE"],G["SE.M1.HELICOPTER-EQUIPPED"]=S("H"),G["SE.M1.BALLISTIC MISSILE DEFENSE, SHOOTER"]=S("BM"),G["SE.M1.BALLISTIC MISSILE DEFENSE, LONG- RANGE SURVEILLANCE AND TRACK (LRS&T)"]=S("ST"),G["SE.M1.SEA-BASE X-BAND"]=S("SBX"),G["SE.M1.HIJACKING/HIJACKED"]=S("H"),G["SE.M2.NUCLEAR POWERED"]=T("N"),G["SE.M2.HEAVY"]=T("H"),G["SE.M2.LIGHT"]=T("L"),G["SE.M2.MEDIUM"]=T("M"),G["SE.M2.DOCK"]=T("D"),G["SE.M2.LOGISTICS"]=T("LOG"),G["SE.M2.TANK"]=T("T"),G["SE.M2.VEHICLE"]=T("V"),G["SE.M2.FAST"]=T("F"),G["SE.M2.AIR-CUSHIONED"]=T("J"),G["SE.M2.AIR-CUSHIONED (USA ONLY)"]=T("AC"),G["SE.M2.HYDROFOIL"]=T("K"),G["SE.M2.AUTONOMOUS CONTROL"]=T("AUT"),G["SE.M2.REMOTELY PILOTED"]=T("RP"),G["SE.M2.EXPENDABLE"]=T("EXP"),G["SU.IC.MILITARY"]=e("MIL"),G["SU.IC.SUBMARINE"]={type:"path",d:"m 75,85 50,0 15,15 -15,15 -50,0 -15,-15 z"},G["SU.IC.SUBMARINE CONVENTIONAL PROPULSION"]={type:"path",d:"m 75,110 -10,-10 10,-10 20,0 0,-10 10,0 0,10 20,0 10,10 -10,10 z"},G["SU.IC.SUBMARINE CONVENTIONAL PROPULSION, SURFACED"]=[{type:"path",d:"m 75,110 -10,-10 10,-10 20,0 0,-10 10,0 0,10 20,0 10,10 -10,10 z"},{type:"path",fill:!1,d:"m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"}],G["SU.IC.SUBMARINE NUCLEAR PROPULSION"]={type:"path",d:"m 75,110 -10,-10 10,-10 0,-10 50,0 0,10 10,10 -10,10 z"},G["SU.IC.SUBMARINE NUCLEAR PROPULSION, SURFACED"]=[{type:"path",d:"m 75,110 -10,-10 10,-10 0,-10 50,0 0,10 10,10 -10,10 z"},{type:"path",fill:!1,d:"m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"}],G["SU.IC.SUBMARINE ATTACK (SSN)"]={type:"text",fill:l,stroke:!1,x:100,y:110,fontsize:30,text:"A"},G["SU.IC.SUBMARINE MISSILE (TYPE UNKNOWN)"]={type:"text",fill:l,stroke:!1,x:100,y:110,fontsize:30,text:"M"},G["SU.IC.SUBMARINE GUIDED MISSILE (SSGN)"]={type:"text",fill:l,stroke:!1,x:100,y:110,fontsize:30,text:"G"},G["SU.IC.SUBMARINE BALLISTIC MISSILE (SSBN)"]={type:"text",fill:l,stroke:!1,x:100,y:110,fontsize:30,text:"B"},G["SU.IC.SUBMARINE, SURFACED"]=[{type:"path",d:"m 75,80 50,0 15,15 -15,15 -50,0 -15,-15 z"},{type:"path",fill:!1,d:"m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"}],G["SU.IC.SUBMARINE, BOTTOMED"]=[{type:"path",d:"m 75,80 50,0 15,15 -15,15 -50,0 -15,-15 z"},{type:"path",d:"m 70,120 0,-5 60,0 0,5 z"}],G["SU.IC.SUBMARINE, SNORKELING"]=[{type:"path",d:"m 75,120 -10,-10 10,-10 20,0 0,-20 10,0 0,20 20,0 10,10 -10,10 z"},{type:"path",fill:!1,d:"m 65,95 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"}],G["SU.IC.OTHER SUBMERSIBLE"]={type:"path",d:"m 85,90 0,-10 30,0 0,10 m 20,10 c 0,5.5 -15.7,10 -35,10 -19.3,0 -35,-4.5 -35,-10 0,-5.5 15.7,-10 35,-10 19.3,0 35,4.5 35,10 z"},G["SU.IC.OTHER SUBMERSIBLE, SURFACED"]=[G["SU.IC.OTHER SUBMERSIBLE"],{type:"path",fill:!1,d:"m 65,120 10,-10 10,10 10,-10 10,10 10,-10 10,10 10,-10"}],G["SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"]={type:"path",d:"M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z",stroke:!1},G["SU.IC.NON-SUBMARINE"]=t&&!L?{type:"text",stroke:!1,x:100,y:110,fontsize:35,text:"NON"}:[{type:"text",stroke:!1,x:100,y:100,fontsize:25,text:"NON"},{type:"text",stroke:!1,x:100,y:120,fontsize:25,text:"SUB"}],G["SU.IC.DIVER, MILITARY"]={type:"path",stroke:!1,d:"M 100 80 C 93.7 80 88.3 82.7 85.8 88.3 L 85.8 88.3 L 77.8 88.3 L 77.8 105 L 85.8 105 L 85.8 104.8 C 87.3 108.2 88.8 110 92 111.7 L 92.1 111.7 L 84.2 120 L 115.8 120 L 107.9 111.7 L 108 111.7 C 111.1 110 112.8 108.3 114.3 105 L 122.2 105 L 122.2 88.3 L 114.3 88.3 L 114.3 88.3 C 111.7 82.8 106.3 80 100 80 z M 100 86.6 C 105.4 86.6 109.8 91.1 109.8 96.6 C 109.8 102.1 105.4 106.6 100 106.6 C 94.6 106.6 90.1 102.1 90.1 96.6 C 90.1 91.1 94.6 86.6 100 86.6 z M 100 89.6 C 96.2 89.6 93.1 92.7 93.1 96.6 C 93.1 100.5 96.2 103.6 100 103.6 C 103.8 103.6 106.8 100.5 106.8 96.6 C 106.8 92.7 103.8 89.6 100 89.6 z"},G["SU.IC.SUBMERSIBLE, CIVILIAN"]={type:"path",fill:t?s:!O&&s,d:"m 85,90 0,-10 30,0 0,10 m 20,10 c 0,5.5 -15.7,10 -35,10 -19.3,0 -35,-4.5 -35,-10 0,-5.5 15.7,-10 35,-10 19.3,0 35,4.5 35,10 z"},G["SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV), CIVILIAN"]={type:"path",fill:t?s:!O&&s,d:"M60,90 l40,10 40,-10 0,8 -40,15 -40,-15 Z"},G["SU.IC.DIVER, CIVILIAN"]={type:"path",fill:s,d:"M 114.3,94 C 114.3,102.3 107.9,109 100,109 c -7.9,0 -14.2,-6.7 -14.2,-15 0,-8.3 6.4,-15 14.2,-15 7.9,0 14.3,6.7 14.3,15 z m 0,27 14.3,15 -57,0 14.3,-15 M 125.7,79 l 14.3,0 0,30 -14.3,0 m -51.3,0 -14.3,0 0,-30 14.3,0 m 54.2,15 c 0,16.6 -12.8,30 -28.5,30 -15.7,0 -28.5,-13.4 -28.5,-30 C 71.5,77.4 84.3,64 100,64 115.7,64 128.5,77.4 128.5,94 z"},G["SU.IC.UNDERWATER WEAPON"]=e("WPN"),G["SU.IC.TORPEDO"]={type:"path",d:"m 65,105 -5,-5 5,-5 60,0 c 0,0 5,5 5,5 l 5,-5 0,10 -5,-5 -5,5 z"},G["SU.IC.IMPROVISED EXPLOSIVE DEVICE (IED)"]=e("IED"),G["SU.IC.UNDERWATER DECOY"]={type:"path",stroke:n,d:t?"M 105,110 90,95 105,80 z M 85,110 70,95 85,80 z m 40,-30 -15,15 15,15 z m -55,40 0,-5 55,0 0,5 z":"M 105,120 90,105 105,90 z M 85,120 70,105 85,90 z m 40,-30 -15,15 15,15 z m -55,-5 0,-5 55,0 0,5 z",fill:t?i:s},G["SU.IC.UNDERWATER DECOY DSymbol"]={type:"path",d:"M 85 81 L 65 98 L 85 119 L 85 81 z M 110 81 L 90 98 L 110 119 L 110 81 z M 135 81 L 115 98 L 135 119 L 135 81 z"},G["SU.IC.ECHO TRACKER CLASSIFIER (ETC)/POSSIBLE CONTACT (POSCON)"]={type:"text",stroke:!1,x:100,y:130,fontsize:60,text:"?"},G["SU.IC.FUSED TRACK"]=[e("?"),{type:"path",fill:!1,d:"m 70,65 10,35 -10,35 60,0 -10,-35 10,-35"}],G["SU.IC.SEA MINE"]={type:"path",fill:t&&!C?E.iconColor.Hostile:s,stroke:t&&!C?n:i,d:"M 115.9,73 126.5,62.4 137.1,73 126.5,83.6 m -53,0 L 62.9,73 73.5,62.4 84.1,73 m 8.4,-3 0,-15 15,0 0,15 m 22.5,30 c 0,16.6 -13.4,30 -30,30 -16.6,0 -30,-13.4 -30,-30 0,-16.6 13.4,-30 30,-30 C 116.6,70 130,83.4 130,100 z"},G["SU.IC.SEA MINE - BOTTOM"]=[G["SU.IC.SEA MINE"],{type:"path",fill:t&&!C?E.iconColor.Hostile:s,stroke:t&&!C?n:i,d:"m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"}],G["SU.IC.SEA MINE - MOORED"]=[G["SU.IC.SEA MINE"],{type:"path",fill:t&&!C?E.iconColor.Hostile:s,stroke:t&&!C?n:i,d:"m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"}],G["SU.IC.SEA MINE - FLOATING"]=[G["SU.IC.SEA MINE"],{type:"path",fill:!1,stroke:t&&!C?n:i,d:"m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"}],G["SU.IC.SEA MINE - RISING"]=[G["SU.IC.SEA MINE"],{type:"path",fill:L&&A?"":t&&!C?E.iconColor.Hostile:s,stroke:t&&!C?n:i,d:"m 100,128 -10,15 20,0 z"}],G["SU.IC.SEA MINE (IN OTHER POSITION)"]=[G["SU.IC.SEA MINE"],{type:"path",fill:!1,stroke:t&&!C?n:i,d:"m 130,100 15,0 M 70,100 l -15,0"}],G["SU.IC.SEA MINE - KINGFISHER"]=[G["SU.IC.SEA MINE"],{type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:110,fontsize:35,text:"K"}],G["SU.IC.SEA MINE - SMALL OBJECT"]=[G["SU.IC.SEA MINE"],{type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:112,fontsize:30,text:"SO"}],G["SU.IC.SEA MINE EXERCISE MINE"]=[{type:"path",fill:t&&!C?A?n:"rgb(0, 130, 24)":s,stroke:t&&!C?n:i,d:"M 115.9,73 126.5,62.4 137.1,73 126.5,83.6 m -53,0 L 62.9,73 73.5,62.4 84.1,73 m 8.4,-3 0,-15 15,0 0,15 m 22.5,30 c 0,16.6 -13.4,30 -30,30 -16.6,0 -30,-13.4 -30,-30 0,-16.6 13.4,-30 30,-30 C 116.6,70 130,83.4 130,100 z"},{type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:112,fontsize:30,text:"EX"},L?[]:{type:"text",stroke:!1,fill:t&&!C?n:i,x:150,y:46,fontsize:40,text:"X"}],G["SU.IC.SEA MINE EXERCISE MINE - BOTTOM"]=[G["SU.IC.SEA MINE EXERCISE MINE"],{type:"path",fill:t&&!C?A?n:"rgb(0, 130, 24)":s,stroke:t&&!C?n:i,d:"m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"}],G["SU.IC.SEA MINE EXERCISE MINE - MOORED"]=[G["SU.IC.SEA MINE EXERCISE MINE"],{type:"path",fill:t&&!C?A?n:"rgb(0, 130, 24)":s,stroke:t&&!C?n:i,d:"m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"}],G["SU.IC.SEA MINE EXERCISE MINE - FLOATING"]=[G["SU.IC.SEA MINE EXERCISE MINE"],{type:"path",fill:!1,stroke:t&&!C?n:i,d:"m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"}],G["SU.IC.SEA MINE EXERCISE MINE - RISING"]=[G["SU.IC.SEA MINE EXERCISE MINE"],{type:"path",fill:t&&!C?A?n:"rgb(0, 130, 24)":s,stroke:t&&!C?n:i,d:"m 100,128 -10,15 20,0 z"}],G["SU.IC.SEA MINE DECOY"]={type:"path",fill:t&&!C?A?n:"rgb(0, 130, 24)":s,stroke:t&&!C?n:i,d:"m 106.6,101.6 0,26.3 -13.1,-13.1 z m -19.7,0 0,26.3 -13.1,-13.1 z m 39.4,0 0,26.3 -13.1,-13.1 13.1,-13.1 M 100,75.3 c -14.5,0 -26.3,11.8 -26.3,26.3 l 52.5,0 C 126.3,87.1 114.5,75.3 100,75.3 z m -6.6,0 0,-13.1 13.1,0 0,13.1 m -29.8,12.3 -9.3,-9.3 9.3,-9.3 9.3,9.3 m 27.9,0 9.3,-9.3 9.3,9.3 -9.3,9.3"},G["SU.IC.SEA MINE DECOY, BOTTOM/GROUND"]=[G["SU.IC.SEA MINE DECOY"],{type:"path",fill:t&&!C?A?n:"rgb(0, 130, 24)":s,stroke:t&&!C?n:i,d:"m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"}],G["SU.IC.SEA MINE DECOY, MOORED"]=[G["SU.IC.SEA MINE DECOY"],{type:"path",fill:t&&!C?A?n:"rgb(0, 130, 24)":s,stroke:t&&!C?n:i,d:"m 75,140 50,0 M 100,100 l 0,40"}],G["SU.IC.SEA MINE NEUTRALIZED"]=[{type:"path",fill:t&&!C?E.iconColor.Neutral:s,stroke:t&&!C?n:i,d:"M 115.9,73 126.5,62.4 137.1,73 126.5,83.6 m -53,0 L 62.9,73 73.5,62.4 84.1,73 m 8.4,-3 0,-15 15,0 0,15 m 22.5,30 c 0,16.6 -13.4,30 -30,30 -16.6,0 -30,-13.4 -30,-30 0,-16.6 13.4,-30 30,-30 C 116.6,70 130,83.4 130,100 z"},{type:"path",strokewidth:5,stroke:A?l:n,d:"m 135,65 -70,70 m 0,-70 70,70"}],G["SU.IC.SEA MINE NEUTRALIZED - BOTTOM"]=[G["SU.IC.SEA MINE NEUTRALIZED"],{type:"path",fill:t&&!C?E.iconColor.Neutral:s,stroke:t&&!C?n:i,d:"m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"}],G["SU.IC.SEA MINE NEUTRALIZED - MOORED"]=[G["SU.IC.SEA MINE NEUTRALIZED"],{type:"path",fill:t&&!C?E.iconColor.Neutral:s,stroke:t&&!C?n:i,d:"m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"}],G["SU.IC.SEA MINE NEUTRALIZED - FLOATING"]=[G["SU.IC.SEA MINE NEUTRALIZED"],{type:"path",fill:!1,stroke:t&&!C?n:i,d:"m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"}],G["SU.IC.SEA MINE NEUTRALIZED - RISING"]=[G["SU.IC.SEA MINE NEUTRALIZED"],{type:"path",fill:t&&!C?E.iconColor.Neutral:s,stroke:t&&!C?n:i,d:"m 100,128 -10,15 20,0 z"}],G["SU.IC.SEA MINE (IN OTHER POSITION) NEUTRALIZED"]=[G["SU.IC.SEA MINE NEUTRALIZED"],{type:"path",fill:!1,stroke:t&&!C?n:i,d:"m 130,100 15,0 M 70,100 l -15,0"}],G["SU.IC.SEA MINE MILEC"]=[{type:"path",fill:t&&!C?A?n:"rgb(255,255,0)":s,stroke:t&&!C?n:i,d:"m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"},{type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:112,fontsize:30,text:"E"}],G["SU.IC.SEA MINE MILEC - BOTTOM"]=[G["SU.IC.SEA MINE MILEC"],{type:"path",fill:t&&!C?A?n:"rgb(255,255,0)":s,stroke:t&&!C?n:i,d:"m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"}],G["SU.IC.SEA MINE MILEC - MOORED"]=[G["SU.IC.SEA MINE MILEC"],{type:"path",fill:t&&!C?A?n:"rgb(255,255,0)":s,stroke:t&&!C?n:i,d:"m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"}],G["SU.IC.SEA MINE MILEC - FLOATING"]=[G["SU.IC.SEA MINE MILEC"],{type:"path",fill:!1,stroke:t&&!C?n:i,d:"m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"}],G["SU.IC.SEA MINE MINE ANCHOR"]=[{type:"path",fill:t&&!C?A?n:"rgb(0, 130, 24)":s,stroke:!(!t||C)&&n,d:"m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"},{type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:105,fontsize:18,text:"ANCR"}],G["SU.IC.SEA MINE MILCO"]=[{type:"path",fill:t&&!C?A?n:"rgb(255,141,42)":s,stroke:t&&!C?n:i,d:"m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"},L?[]:{type:"text",stroke:!1,fill:t&&!C?n:i,x:100,y:112,fontsize:30,text:"#"}],G["SU.IC.SEA MINE MILCO - BOTTOM"]=[G["SU.IC.SEA MINE MILCO"],{type:"path",fill:t&&!C?A?n:"rgb(255,141,42)":s,stroke:t&&!C?n:i,d:"m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"}],G["SU.IC.SEA MINE MILCO - MOORED"]=[G["SU.IC.SEA MINE MILCO"],{type:"path",fill:t&&!C?A?n:"rgb(0, 130, 24)":s,stroke:t&&!C?n:i,d:"m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"}],G["SU.IC.SEA MINE MILCO - FLOATING"]=[G["SU.IC.SEA MINE MILCO"],{type:"path",fill:!1,stroke:t&&!C?n:i,d:"m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"}],G["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]={type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:110,fontsize:35,text:"1"},G["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]={type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:110,fontsize:35,text:"2"};G["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]={type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:110,fontsize:35,text:"3"},G["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]={type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:110,fontsize:35,text:"4"},G["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]={type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:110,fontsize:35,text:"5"},G["SU.IC.SEA MINE NEGATIVE REACQUISITION"]=[{type:"path",strokedasharray:"8,4",fill:t&&!C?A?n:"rgb(255,255,0)":s,stroke:t&&!C?n:i,d:"m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"},{type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:112,fontsize:30,text:"NR"}],G["SU.IC.SEA MINE NEGATIVE REACQUISITION - BOTTOM"]=[G["SU.IC.SEA MINE NEGATIVE REACQUISITION"],{type:"path",fill:t&&!C?A?n:"rgb(255,255,0)":s,stroke:t&&!C?n:i,d:"m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"}],G["SU.IC.SEA MINE NEGATIVE REACQUISITION - MOORED"]=[G["SU.IC.SEA MINE NEGATIVE REACQUISITION"],{type:"path",fill:t&&!C?A?n:"rgb(255,255,0)":s,stroke:t&&!C?n:i,d:"m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"}],G["SU.IC.SEA MINE NEGATIVE REACQUISITION - FLOATING"]=[G["SU.IC.SEA MINE NEGATIVE REACQUISITION"],{type:"path",fill:!1,stroke:t&&!C?n:i,d:"m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"}],G["SU.IC.SEA MINE GENERAL OBSTRUCTOR"]=[{type:"path",fill:t&&!C?A?n:"rgb(255,255,0)":s,stroke:t&&!C?n:i,d:"m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"},{type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:112,fontsize:30,text:"OB"}],G["SU.IC.SEA MINE GENERAL OBSTRUCTOR NEUTRALIZED"]=[{type:"path",fill:t&&!C?E.iconColor.Neutral:s,stroke:t&&!C?n:i,d:"m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"},{type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:112,fontsize:30,text:"OB"},{type:"path",strokewidth:5,stroke:A?l:n,d:"m 135,65 -70,70 m 0,-70 70,70"}],G["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"]=[{type:"path",fill:t&&!C?A?n:"rgb(0, 130, 24)":s,stroke:t&&!C?n:i,d:"m 113.8,127.6 -27.6,0 -13.8,-13.8 0,-27.6 13.8,-13.8 27.6,0 13.8,13.8 0,27.6 z"},{type:"text",stroke:!1,fill:!t||C||A?l:n,x:100,y:112,fontsize:30,text:"N"}],G["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - BOTTOM"]=[G["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"],{type:"path",fill:t&&!C?A?n:"rgb(0, 130, 24)":s,stroke:t&&!C?n:i,d:"m 74.8,125.2 50.4,0 0,12.6 -50.4,0 z"}],G["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - MOORED"]=[G["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"],{type:"path",fill:t&&!C?A?n:"rgb(0, 130, 24)":s,stroke:t&&!C?n:i,d:"m 75.5,136.8 49,0 M 100,124.5 l 0,12.3"}],G["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - FLOATING"]=[G["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"],{type:"path",fill:!1,stroke:t&&!C?n:i,d:"m 75,140 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10 5,-10 5,10"}],G["SU.IC.UNEXPLODED EXPLOSIVE ORDNANCE"]=[{type:"path",strokedasharray:"8,4",fill:!1,stroke:t&&!C?E.iconColor.Hostile:i,d:"m 85,65 30,0 20,20 0,30 -20,20 -30,0 -20,-20 0,-30 z"},{type:"text",stroke:!1,fill:t&&!C?E.iconColor.Hostile:i,x:100,y:110,fontsize:30,text:"UXO"}],G["SU.IC.ENVIRONMENTAL REPORT LOCATION"]=[{type:"path",fill:!1,stroke:t&&!C?E.iconColor.Neutral:i,d:"m 70,70 0,60 60,0 0,-60 z"},{type:"text",stroke:!1,fill:t&&!C?E.iconColor.Neutral:i,x:100,y:122,fontsize:60,text:"E"}],G["SU.IC.DIVE REPORT LOCATION"]=[{type:"path",fill:!1,stroke:t&&!C?E.iconColor.Neutral:i,d:"m 70,70 0,60 60,0 0,-60 z"},{type:"text",stroke:!1,fill:t&&!C?E.iconColor.Neutral:i,x:100,y:122,fontsize:60,text:"D"}],G["SU.IC.SEABED INSTALLATION/MANMADE"]={type:"path",fill:s,stroke:n,d:"m 140,125 -80,0 10,-30 10,20 20,-50 20,50 10,-25 z"},G["SU.IC.SEABED INSTALLATION, MAN-MADE, MILITARY"]={type:"path",d:"m 75,80 0,40 50,0 0,-15 -15,0 0,-10 -20,0 0,-15 z"},G["SU.IC.SEABED INSTALLATION, MAN-MADE, NON-MILITARY"]={type:"path",fill:s,d:"m 75,80 0,40 50,0 0,-15 -15,0 0,-10 -20,0 0,-15 z"},G["SU.IC.SEABED ROCK/STONE, OBSTACLE, OTHER"]={type:"path",d:"m 140,125 -80,0 10,-30 10,20 20,-50 20,50 10,-25 z"},G["SU.IC.WRECK"]={type:"path",d:"m 125,85 0,30 m -50,-30 0,30 m 25,-40 0,45 m -40,-20 80,0"},G["SU.IC.MARINE LIFE"]={type:"path",d:"m 60,100 20,-20 45,20 15,-10 0,20 -15,-10 -45,20 z"},G["SU.IC.SEA ANOMALY"]={type:"path",fill:!1,d:"m 65,100 15,-20 20,30 20,-30 15,20 m -70,10 15,-20 20,30 20,-30 15,20"},G["SU.M1.ANTISUBMARINE WARFARE"]=S("ASW"),G["SU.M1.AUXILIARY"]=S("AUX"),G["SU.M1.COMMAND AND CONTROL"]=S("C2"),G["SU.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE"]=S("ISR"),G["SU.M1.MINE COUNTERMEASURES"]=S("MCM"),G["SU.M1.MINE WARFARE"]=S("MIW"),G["SU.M1.SURFACE WARFARE"]=S("SUW"),G["SU.M1.ATTACK"]=S("A"),G["SU.M1.BALLISTIC MISSILE"]=S("B"),G["SU.M1.GUIDED MISSILE"]=S("G"),G["SU.M1.OTHER GUIDED MISSILES (POINT DEFENCE)"]=S("M"),G["SU.M1.SPECIAL OPERATIONS FORCE"]=S("SOF"),G["SU.M1.POSSIBLE SUBMARINE - LOW 1"]=S("P1"),G["SU.M1.POSSIBLE SUBMARINE - LOW 2"]=S("P2"),G["SU.M1.POSSIBLE SUBMARINE - HIGH 3"]=S("P3"),G["SU.M1.POSSIBLE SUBMARINE - HIGH 4"]=S("P4"),G["SU.M1.PROBABLE SUBMARINE"]=S("PB"),G["SU.M1.CERTAIN SUBMARINE"]=S("CT"),G["SU.M1.ANTI-TORPEDO TORPEDO"]=S("ATT"),G["SU.M1.HIJACKING/HIJACKED"]=S("H"),G["SU.M2.AIR INDEPENDENT PROPULSION"]=T("AI"),G["SU.M2.CERTSUB"]=T("CT"),G["SU.M2.DIESEL PROPULSION"]=T("D"),G["SU.M2.DIESEL - TYPE 1"]=T("D1"),G["SU.M2.DIESEL - TYPE 2"]=T("D2"),G["SU.M2.DIESEL - TYPE 3"]=T("D3"),G["SU.M2.NUCLEAR POWERED"]=T("N"),G["SU.M2.NUCLEAR - TYPE 1"]=T("N1"),G["SU.M2.NUCLEAR - TYPE 2"]=T("N2"),G["SU.M2.NUCLEAR - TYPE 3"]=T("N3"),G["SU.M2.NUCLEAR - TYPE 4"]=T("N4"),G["SU.M2.NUCLEAR - TYPE 5"]=T("N5"),G["SU.M2.NUCLEAR - TYPE 6"]=T("N6"),G["SU.M2.NUCLEAR - TYPE 7"]=T("N7"),G["SU.M2.AUTONOMOUS CONTROL"]=T("AUT"),G["SU.M2.REMOTELY PILOTED"]=T("RP"),G["SU.M2.EXPENDABLE"]=T("EXP"),G["SOF.IC.UNDERWATER DEMOLITION TEAM"]={type:"text",stroke:!1,x:100,y:110,fontsize:32,text:"UDT"},G["SOF.M2.ATTACK"]=T("A"),G["SOF.M2.REFUEL"]=T("K"),G["SOF.M2.UTILITY"]=T("U"),G["SOF.M2.VSTOL"]={type:"text",stroke:!1,x:100,y:135,fontsize:20,text:"VSTOL"},G["SOF.M2.COMBAT SEARCH AND RESCUE"]=T(t?"CSAR":"H"),G["SI.IC.COMMUNICATIONS"]={type:"path",d:"m 93,120 14,0 0,0 m -7,-27 0,27 m 2,-25 8,2 -5,5 13,3 m -20,-10 -8,2 5,5 -14,3 m 21,-13 8,-2 -5,-5 13,-3 m -37,0 14,3 -5,5 8,2",fill:!1},G["SI.IC.RADAR"]={type:"path",d:"m 115,90 -15,15 0,-15 -15,15 M 80,85 c 0,25 15,35 35,35",fill:!1},G["SI.M1.ANTI-AIRCRAFT FIRE CONTROL"]=S("AA"),G["SI.M1.AIRBORNE SEARCH AND BOMBING"]=S("AB"),G["SI.M1.AIRBORNE INTERCEPT"]=S("AI"),G["SI.M1.ALTIMETER"]=S("AL"),G["SI.M1.AIRBORNE RECONNAISSANCE AND MAPPING"]=S("AM"),G["SI.M1.AIR TRAFFIC CONTROL"]=S("AT"),G["SI.M1.BEACON TRANSPONDER (NOT IFF)"]=S("BN"),G["SI.M1.BATTLEFIELD SURVEILLANCE"]=S("BS"),G["SI.M1.CONTROLLED APPROACH"]=S("CA"),G["SI.M1.CONTROLLED INTERCEPT"]=S("CI"),G["SI.M1.CELLULAR/MOBILE"]=S("CM"),G["SI.M1.COASTAL SURVEILLANCE"]=S("CS"),G["SI.M1.DECOY/MIMIC"]=S("DC"),G["SI.M1.DATA TRANSMISSION"]=S("DT"),G["SI.M1.EARTH SURVEILLANCE"]=S("ES"),G["SI.M1.EARLY WARNING"]=S("EW"),G["SI.M1.FIRE CONTROL"]=S("FC"),G["SI.M1.GROUND MAPPING"]=S("GM"),G["SI.M1.HEIGHT FINDING"]=S("HF"),G["SI.M1.HARBOR SURVEILLANCE"]=S("HS"),G["SI.M1.IDENTIFICATION, FRIEND OR FOE (INTERROGATOR)"]=S("IF"),G["SI.M1.INSTRUMENT LANDING SYSTEM"]=S("IL"),G["SI.M1.IONOSPHERIC SOUNDING"]=S("IS"),G["SI.M1.IDENTIFICATION, FRIEND OR FOE (TRANSPONDER)"]=S("IT"),G["SI.M1.BARRAGE JAMMER"]=S("JB"),G["SI.M1.CLICK JAMMER"]=S("JC"),G["SI.M1.DECEPTIVE JAMMER"]=S("JD"),G["SI.M1.FREQUENCY SWEPT JAMMER"]=S("JF"),G["SI.M1.JAMMER (GENERAL)"]=S("JG"),G["SI.M1.NOISE JAMMER"]=S("JN"),G["SI.M1.PULSED JAMMER"]=S("JP"),G["SI.M1.REPEATER JAMMER"]=S("JR"),G["SI.M1.SPOT NOISE JAMMER"]=S("JS"),G["SI.M1.TRANSPONDER JAMMER"]=S("JT"),G["SI.M1.MISSILE ACQUISITION"]=S("MA"),G["SI.M1.MISSILE CONTROL"]=S("MC"),G["SI.M1.MISSILE DOWNLINK"]=S("MD"),G["SI.M1.METEOROLOGICAL"]=S("ME"),G["SI.M1.MULTI-FUNCTION"]=S("MF"),G["SI.M1.MISSILE GUIDANCE"]=S("MG"),G["SI.M1.MISSILE HOMING"]=S("MH"),G["SI.M1.MISSILE TRACKING"]=S("MT"),G["SI.M1.NAVIGATIONAL/GENERAL"]=S("NA"),G["SI.M1.NAVIGATIONAL/DISTANCE MEASURING EQUIPMENT"]=S("ND"),G["SI.M1.NAVIGATION/TERRAIN FOLLOWING"]=S("NT"),G["SI.M1.NAVIGATIONAL/WEATHER AVOIDANCE"]=S("NW"),G["SI.M1.OMNI-LINE OF SIGHT (LOS)"]=S("OL"),G["SI.M1.PROXIMITY USE"]=S("PF"),G["SI.M1.POINT-TO-POINT LINE OF SIGHT (LOS)"]=S("PP"),G["SI.M1.INSTRUMENTATION"]=S("RI"),G["SI.M1.RANGE ONLY"]=S("RO"),G["SI.M1.SONOBUOY"]=S("SB"),G["SI.M1.SATELLITE DOWNLINK"]=S("SD"),G["SI.M1.SPACE"]=S("SP"),G["SI.M1.SURFACE SEARCH"]=S("SS"),G["SI.M1.SHELL TRACKING"]=S("ST"),G["SI.M1.SATELLITE UPLINK"]=S("SU"),G["SI.M1.TARGET ACQUISITION"]=S("TA"),G["SI.M1.TARGET ILLUMINATION"]=S("TI"),G["SI.M1.TROPOSPHERIC SCATTER"]=S("TS"),G["SI.M1.TARGET TRACKING"]=S("TT"),G["SI.M1.UNKNOWN"]=S("UN"),G["SI.M1.VIDEO REMOTING"]=S("VR"),G["SI.M1.EXPERIMENTAL"]=S("XP"),G["SI.M1.ALPHA"]={type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"A"},G["SI.M1.CHARLIE"]={type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"C"},G["SI.M1.DELTA"]={type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"D"},G["SI.M1.ECHO"]={type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"E"},G["SI.M1.FOXTROT"]={type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"F"},G["SI.M1.INDY"]={type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"I"},G["SI.M1.MIKE"]={type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"M"},G["SI.M1.OSCAR"]={type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"O"},G["SI.M1.PAPA"]={type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"P"},G["SI.M1.SIERRA"]={type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"S"},G["SI.M1.TANGO"]={type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"T"},G["SI.M1.UNIFORM"]={type:"text",stroke:!1,x:68,y:110,fontsize:25,text:"U"},G["SI.M2.ALPHA"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"A"},G["SI.M2.BRAVO"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"B"},G["SI.M2.CHARLIE"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"C"},G["SI.M2.DELTA"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"D"},G["SI.M2.ECHO"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"E"},G["SI.M2.FOXTROT"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"F"},G["SI.M2.GOLF"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"G"},G["SI.M2.INDY"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"I"},G["SI.M2.LIMA"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"L"},G["SI.M2.MIKE"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"M"},G["SI.M2.NOVEMBER"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"N"},G["SI.M2.PAPA"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"P"},G["SI.M2.SIERRA"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"S"},G["SI.M2.TANGO"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"T"},G["SI.M2.UNIFORM"]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"U"},G["SI.M2.WHISKEY "]={type:"text",stroke:!1,x:132,y:110,fontsize:25,text:"W"},G["SI.M3.SPACE"]={type:"text",stroke:!1,x:100,y:75,fontsize:25,text:"S"},G["SI.M3.GROUND"]={type:"text",stroke:!1,x:100,y:75,fontsize:25,text:"G"},G["ST.IC.ARREST"]={type:"path",d:"m 92.5,100 15,0 m -2.5,-10 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -5,5 0,20 m 20,-15 c 0,11 -9,20 -20,20 -11,0 -20,-9 -20,-20 0,-11 9,-20 20,-20 11,0 20,9 20,20 z",fill:!1},G["ST.IC.ARSON/FIRE"]=t?[{type:"path",d:"m 84.6,101.6 c 1.3,23.1 31,23.2 30.7,-1.9 -1.5,2.1 -4.6,6.5 -8.1,7.3 1.9,-2.4 2.6,-8.5 2.4,-12.9 -1.7,3.4 -4,7.9 -7,7.8 1.7,-4.3 2.7,-9.4 -0.5,-13.7 -0.2,3 0.8,7.1 -1.9,7 -2.7,-0.1 -2.9,-4.4 -1.1,-10.8 -4,4.1 -6.2,9.8 -3.8,17.5 -1.9,-0.2 -4.4,-1.9 -7,-7.8 -1.5,4.9 1.2,9.6 3.2,13.7 -2.4,-1.1 -6,-3 -7,-6.2 z",stroke:!1},{type:"text",stroke:!1,x:100,y:75,fontsize:25,text:"ASN"}]:{type:"text",stroke:!1,x:100,y:110,fontsize:35,text:"FIRE"},G["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]={type:"path",d:"m 127,127 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5 m -15,-15 5,5",fill:!1},G["ST.IC.BLACK LIST LOCATION"]=e("BLK"),G["ST.IC.BLACK MARKETING"]=[{type:"text",stroke:!1,x:100,y:95,fontsize:30,text:"BLK"},{type:"text",stroke:!1,x:100,y:125,fontsize:30,text:"MKT"}],G["ST.IC.BOMB"]=e("BOMB"),G["ST.IC.BOOBY TRAP"]={type:"path",d:"m 85,105 15,-25 15,25 m -35,5 c 0,-10 40,-10 40,0 0,10 -40,10 -40,0 z",fill:!1},G["ST.IC.COMPOSITE LOSS"]={type:"path",d:"m 100,85 0,30 m -35,-15 45,0 m 20,0 c 0,5.5 -4.5,10 -10,10 -5.5,0 -10,-4.5 -10,-10 0,-5.5 4.5,-10 10,-10 5.5,0 10,4.5 10,10 z",fill:!1},G["ST.IC.DEMONSTRATION"]=e("MASS"),G["ST.IC.DRIVE-BY SHOOTING"]={type:"path",d:"m 95,85 5,-5 5,5 m -5,-5 0,30 m -15,0 30,0 m 5,5 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z m -30,0 c 0,2.8 -2.2,5 -5,5 -2.8,0 -5,-2.2 -5,-5 0,-2.8 2.2,-5 5,-5 2.8,0 5,2.2 5,5 z",fill:!1},G["ST.IC.DRUG RELATED ACTIVITIES"]=e("DRUG"),G["ST.IC.EXPLOSION"]={type:"path",d:"m 110,55 5,20 15,-10 0,15 15,5 -15,10 15,10 -15,5 5,15 -20,-5 -5,20 -10,-15 -10,20 -5,-25 -20,10 5,-15 L 55,105 70,95 60,85 70,80 70,65 85,75 90,55 100,70 z",fill:!1},G["ST.IC.EXTORTION"]={type:"text",stroke:!1,x:100,y:130,fontsize:80,text:"$"},G["ST.IC.FOOD DISTRIBUTION"]=[{type:"path",d:"m 105,85 c -5,10 -5,20 0,30 m 0,-30 c -20,0 -20,30 0,30",fill:!1},{Unknown:{type:"path",d:"M35,120 l130,0 ",fill:!1},Friend:{type:"path",d:"M25,120 l150,0 ",fill:!1},Neutral:{type:"path",d:"M45,120 l110,0 ",fill:!1},Hostile:{type:"path",d:"M50,120 l100,0 ",fill:!1}}[M]],G["ST.IC.GRAFFITI"]={type:"path",d:"m 110,80 c -10,0 -10,10 0,10 10,0 10,10 0,10 -10,0 -10,10 0,10 10,0 10,10 0,10 M 90,80 c -10,0 -10,10 0,10 10,0 10,10 0,10 -10,0 -10,10 0,10 10,0 10,10 0,10",fill:!1},G["ST.IC.GROUP"]={type:"path",d:"m 133,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m -52,-12.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m 23,-7.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0",fill:!1},G["ST.IC.HIJACKING (AIRPLANE)"]={type:"path",fill:!!t&&s,d:"m 70,95 0,10 65,0 0,-10 z m 55,10 0,10 5,0 0,-10 z m 0,-10 0,-10 5,0 0,10 z m -45,10 0,15 10,0 0,-15 z m 0,-10 0,-15 10,0 0,15 z"},G["ST.IC.HIJACKING (BOAT)"]={type:"path",fill:t?s:!O&&s,d:"m 105,80 0,20 20,0 z m -5,25 0,-25 m -30,25 10,15 40,0 10,-15 z"},G["ST.IC.GRAY LIST LOCATION"]=e("GRAY"),G["ST.IC.IED"]=e("IED"),G["ST.IC.INDIVIDUAL"]={type:"path",d:"m 108,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0",fill:!1},G["ST.IC.INTERNAL SECURITY FORCE"]=e("ISF"),G["ST.IC.KILLING VICTIM"]=[{type:"path",d:"m 108,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0",fill:!1},{Unknown:{type:"path",fill:!1,d:"M50,65 150,135"},Friend:{type:"path",fill:!1,d:"M25,50 175,150"},Neutral:{type:"path",fill:!1,d:"M45,45 155,155"},Hostile:{type:"path",fill:!1,d:"M57,70 143,130"}}[M]],G["ST.IC.KILLING VICTIMS"]=[{type:"path",d:"m 133,90 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m -52,-12.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0 m 23,-7.3 c 0,10 -15,10 -15,0 0,-10 15,-10 15,0 z m -8,7.3 0,25 m -10,-20 20,0",fill:!1},{Unknown:{type:"path",fill:!1,d:"M50,65 150,135"},Friend:{type:"path",fill:!1,d:"M25,50 175,150"},Neutral:{type:"path",fill:!1,d:"M45,45 155,155"},Hostile:{type:"path",fill:!1,d:"M57,70 143,130"}}[M]],G["ST.IC.KNOWN INSURGENT VEHICLE"]={type:"path",d:"m 65,95 70,0 m 0,10 c 0,5.5 -4.5,10 -10,10 -5.5,0 -10,-4.5 -10,-10 0,-5.5 4.5,-10 10,-10 5.5,0 10,4.5 10,10 z m -50,0 c 0,5.5 -4.5,10 -10,10 -5.5,0 -10,-4.5 -10,-10 0,-5.5 4.5,-10 10,-10 5.5,0 10,4.5 10,10 z",fill:!1},G["ST.IC.MASS GRAVE LOCATION"]={type:"path",d:"m 77.5,90 10,0 m -5,-5 0,15 m 7.5,-20 0,30 -15,0 0,-30 z m 22.5,10 10,0 m -5,-5 0,15 m -7.5,-20 0,30 15,0 0,-30 z m -15,20 10,0 m -5,-5 0,20 m -7.5,-25 15,0 0,30 -15,0 z",fill:!1},G["ST.IC.MINE LAYING"]=[{type:"path",d:"m 60,85 80,0 0,30 -80,0 z",fill:!1},{type:"path",d:"m 135,100 c 0,5.5 -4.5,10 -10,10 -5.5,0 -10,-4.5 -10,-10 0,-5.5 4.5,-10 10,-10 5.5,0 10,4.5 10,10 z m -25,0 c 0,5.5 -4.5,10 -10,10 -5.5,0 -10,-4.5 -10,-10 0,-5.5 4.5,-10 10,-10 5.5,0 10,4.5 10,10 z m -25,0 c 0,5.5 -4.5,10 -10,10 -5.5,0 -10,-4.5 -10,-10 0,-5.5 4.5,-10 10,-10 5.5,0 10,4.5 10,10 z",stroke:!1}],G["ST.IC.PATROLLING"]={type:"path",d:"m 131,97 0,-14 5,0 c 4,0 4,7 0,7 l -5,0 m -71,15 15,10 M 60,105 75,95 m -15,10 40,0 -15,-15 40,0",fill:!1},G["ST.IC.POISONING"]={type:"path",d:"m 85,95 c 0,-20 30,-20 30,0 0,20 -30,20 -30,0 z m -15,10 60,15 m -60,0 60,-15",fill:!1},G["ST.IC.PSYCHOLOGICAL OPERATIONS"]={type:"path",fill:!!t&&s,stroke:n,d:"m 110,95 10,0 m -10,10 10,0 m -10,10 10,0 m -10,-30 10,0 m -10,-5 -10,10 -30,0 0,20 30,0 10,10 z"},G["ST.IC.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS"]=[G["ST.IC.PSYCHOLOGICAL OPERATIONS"],{Unknown:{type:"path",fill:!1,d:"M50,65 100,110 100,90 150,135"},Friend:{type:"path",fill:!1,d:"M25,50 100,110 100,90 175,150"},Neutral:{type:"path",fill:!1,d:"M45,45 100,110 100,90 155,155"},Hostile:{type:"path",fill:!1,d:"M57,70 100,110 100,90 143,130"}}[M]],G["ST.IC.RIOT"]=e("RIOT"),G["ST.IC.SAFE HOUSE"]=e("SAFE"),G["ST.IC.SEARCHING"]={type:"path",d:"m 140,105 c -10,0 -5,0 -10,0 -15,0 -5,-15 -20,-15 -15,0 -5,20 -20,20 -15,0 -5,-20 -20,-20 -10,0 -10,10 -10,10 m 70,0 10,5 -10,5",fill:!1},G["ST.IC.SPY"]=e("SPY"),G["ST.IC.SNIPING"]=[{type:"path",d:"m 95,85 5,-5 5,5 m -5,-5 0,40",fill:!1},{type:"text",stroke:!1,x:100,y:75,fontsize:25,text:"S"}],G["ST.IC.VANDALISM/LOOT/RANSACK/PLUNDER/SACK"]={type:"path",d:"m 115,100 c 0,-5 5,-10 10,-10 M 85,100 C 85,95 80,90 75,90 m 5,25 c -0.5,-29.5 40,-30 40,0 z",fill:!1},G["ST.IC.WHITE LIST LOCATION"]=e("WHT");G["ST.IC.ROBBERY"]=e("ROB"),G["ST.IC.THEFT"]=e("THF"),G["ST.IC.BURGLARY"]=e("BUR"),G["ST.IC.SMUGGLING"]=e("SMGL"),G["ST.IC.SABOTAGE"]=e("SAB"),G["ST.IC.ILLEGAL DRUG OPERATION"]=e("DRUG"),G["ST.IC.SPY"]=e("SPY"),G["ST.IC.WARRANT SERVED"]=e("WNT"),G["ST.IC.POLLING PLACE/ELECTION"]=e("VOTE"),G["ST.IC.NATURAL EVENT"]=e("NAT"),G["ST.IC.GEOLOGIC"]=e("GEOL"),G["ST.IC.HYDRO-METEOROLOGICAL"]=e("HYDR"),G["ST.IC.INFESTATION"]=e("INFS"),G["ST.IC.GRENADE"]=e("G"),G["ST.IC.INCENDIARY"]=e("I"),G["ST.IC.MINE"]=e("M"),G["ST.IC.HOUSE"]={type:"path",fill:!!t&&s,d:"m 70,100 60,0 m -30,-20 -30,20 0,35 60,0 0,-35 -30,-20 z"},G["ST.IC.ROCK THROWING"]={type:"path",d:"m 90,60 25,25 M 70,65 95,90 M 60,80 80,100 m 45,-5 5,15 -5,15 -20,10 -20,-5 -5,-20 5,-5 10,0 5,-10 10,-5 15,5 z"},G["ST.M1.ACCIDENT"]=S("ACC"),G["ST.M1.ASSASSINATION"]=S("AS"),G["ST.M1.CIVILIAN"]=S("CIV"),G["ST.M1.COERCED/IMPRESSED"]=S("C"),G["ST.M1.COMBAT"]=S("CBT"),G["ST.M1.DEAD BODY"]=S("DB"),G["ST.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES"]=S("DPRE"),G["ST.M1.DRUG"]=S("DRUG"),G["ST.M1.EVICTION"]=S("EV"),G["ST.M1.EXECUTION (WRONGFUL KILLING)"]=S("EX"),G["ST.M1.EXFILTRATION"]=S("EXFL"),G["ST.M1.FOREIGN FIGHTERS"]=S("FF"),G["ST.M1.GANG"]=S("GANG"),G["ST.M1.GOVERNMENT ORGANIZATION"]=S("GO"),G["ST.M1.HIJACKING/HIJACKED"]=S("H"),G["ST.M1.HOUSE-TO-HOUSE"]={type:"path",fill:!!t&&s,d:"m 110,65 -20,0 0,15 20,0 z m -10,-10 -10,10 20,0 z"},G["ST.M1.IED"]=S("IED"),G["ST.M1.INCIDENT"]=S("INC"),G["ST.M1.INFILTRATION"]=S("INFL"),G["ST.M1.KIDNAPPING"]=S("K"),G["ST.M1.LABRATORY"]=S("LAB"),G["ST.M1.LEADER"]=S("LDR"),G["ST.M1.LOOT"]=S("LOOT"),G["ST.M1.MEETING"]=S("MTG"),G["ST.M1.MURDER"]=S("MU"),G["ST.M1.NONGOVERNMENTAL ORGANIZATION (NGO)"]=S("NGO"),G["ST.M1.OTHER"]=S("OTH"),G["ST.M1.PIRACY"]=S("PI"),G["ST.M1.PREMATURE"]=S("P"),G["ST.M1.RAID"]=S("RAID"),G["ST.M1.RAPE"]=S("RA"),G["ST.M1.RELIGIOUS"]=S("REL"),G["ST.M1.SPEAKER"]=S("SPK"),G["ST.M1.TARGETED"]=S("TGT"),G["ST.M1.TERRORIST"]=S("TER"),G["ST.M1.TRAFFICKING"]=S("TFK"),G["ST.M1.WILLING RECRUIT"]=S("WR"),G["ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS"]=G["ST.M1.WILLING"]=S("W"),G["ST.M1.FALSE"]=S("FAL"),G["ST.M1.FIND"]=S("FND"),G["ST.M1.FOUND AND CLEARED"]=S("CLR"),G["ST.M1.HOAX (DECOY)"]={type:"path",d:"M 90,75 80,67.5 90,60 90,75 Z m 15,0 -10,-7.5 10,-7.5 0,15 z m 15,0 -10,-7.5 10,-7.5 0,15 z"},G["ST.M1.ATTEMPTED"]=S("ATT"),G["ST.M1.ACCIDENT"]=S("ACC"),G["ST.M1.INCIDENT"]=S("INC"),G["ST.M1.THEFT"]=S("THF"),G["ST.M1.PIRATE"]=[{type:"circle",cx:100,cy:60,r:7,fill:!1},{type:"path",fill:!1,d:"m 82.5,75 35,-15 m 0,15 -35,-15 m 3,7 5,10 m 27,-10 -10,10"}],G["ST.M2.LEADER OR LEADERSHIP"]=T("LDR"),G["ST.M2.RELIGIOUS"]=T("REL"),G["AC.IC.CRIMINAL.ACTIVITY.INCIDENT"]=[{type:"path",stroke:!1,d:"m 98.7,66.7 c -3.2,0.7 -6.3,3.7 -6.4,7 0.3,3.6 5.3,2.8 7,0.6 2,-1.2 1.7,-4.5 4.5,-3.7 2.6,-0.6 3.2,3.2 5.9,3.2 1.6,1.5 4.4,-0.6 5.4,1.2 0.7,1.1 1.5,2.2 2.2,3.3 -2,3.1 -1.3,7.9 1.9,10 3.5,1.1 4.8,-3.5 4.1,-6.2 -0.2,-3 -2.5,-5 -5.1,-5.4 -1.5,-1.9 -2.7,-3.4 -1.6,-5.6 -1,-3.3 -5.1,-4.5 -8.2,-4.3 -2.2,0.3 -2.9,2.6 -5.3,1.9 -1.9,0.4 -1.9,-2.8 -4.3,-2 z m 0.2,1.3 c 2.7,0.5 0.9,0.6 -0.6,1.3 -0.5,2.2 3.8,0.4 1.4,2.9 -0.9,1.9 -5.8,4.7 -5.9,1.1 0.1,-2.5 2.7,-4.8 5.1,-5.2 z m 10.3,0.1 c 2.4,-0.5 7.1,2.3 5.6,3.7 -0.8,-2.1 -3,0 -1.2,1.2 -1.7,0.9 -7.4,-1.6 -5.7,-2.4 2.5,0.8 2.8,-2.7 -0,-1.9 -1.4,0.2 1.1,-0.8 1.3,-0.6 z M 81.9,71.6 c -1.8,1.9 -3.6,3.9 -5.5,5.8 -7.5,-0.1 -14,6.2 -15.7,13.2 -0.6,4.2 0.5,8.5 2.8,12 0.7,3.9 -3.2,6.7 -3,10.7 -0.8,7.4 4.8,14.5 11.7,16.8 2.3,-0.4 1.3,1.3 1.4,2 1.5,-0.4 3,-0.8 4.6,-1.2 -0.2,1.5 -0.1,2.7 1.4,1.2 0.9,-0.3 2.3,-2.2 2.9,-1.5 0.2,2.2 1.2,0.1 2,-0.7 0.8,-1.2 1.6,-2.3 2.4,-0.5 1.2,-2.4 4.1,-7.2 -0.8,-7.3 -3.4,2.3 -7.5,4.6 -11.8,3.5 -6.3,-1.5 -10.9,-8.8 -8.2,-14.9 0.4,-3.9 6.8,-3.4 5,-8.2 -1.8,-2.6 -5.7,-2.9 -5.7,-7 -1.5,-7.3 5.6,-14.7 13,-13.7 4.7,0.5 7.4,4.9 10.8,7.6 1.9,1.9 4.1,5.1 5.9,1.4 2.8,-2 4.3,-4.7 1.8,-7.6 C 94.8,79.7 90.9,77.3 88,74.4 86.3,72.9 83.9,72.6 81.9,71.6 z m 3.3,3.8 c 1.6,1.1 2.9,2.1 0.3,3.3 -0.9,3.7 -5.1,-0.5 -1.5,-1.5 0.4,-0.6 0.9,-1.1 1.2,-1.8 z m 34.2,3.1 c 3,1.4 3.9,6.4 1.4,8.8 -2.9,0.1 -3.6,-4.3 -3.1,-6.6 0.1,-2.9 2.5,2.7 2.5,-0.7 -0.2,-0.5 -0.5,-1 -0.8,-1.4 z M 127.3,90.2 c -4.3,0.4 -8.8,-0 -13.1,1 -2.1,1.1 -5.7,1.5 -4.6,4.5 0.1,1.8 0.2,3.6 0.4,5.4 -4.9,4.9 -5.5,13.3 -2.2,19.2 2.4,4.3 7,7 11.8,7.8 3.3,4.9 7.3,-1.3 11.2,-1.7 5.5,-2.5 8.9,-8.5 8.5,-14.5 0.2,-5 -2.4,-10.1 -6.7,-12.8 -0.1,-2.3 -0.2,-4.6 -0.3,-6.9 -1.6,-0.8 -3.4,-1.4 -5.1,-2.1 z M 127.8,92.5 c -0.9,1.7 0.6,3.8 -0.9,4.9 -2.3,0.7 -1.7,-2.4 -1.9,-3.8 -0.6,-1.7 1.9,-0.7 2.8,-1 z m -2.9,8.3 c 4.1,0.9 8,3.7 9.3,7.9 0.9,3.7 0.5,8 -2.3,10.9 -1.7,2 -5.3,4.3 -7.7,3.1 -3.1,-0.8 -5.8,2.1 -8.6,-0.5 -6.9,-4.2 -7.2,-16 0.2,-19.8 2.7,-1.6 6,-1.6 9.1,-1.6 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"M 85.1 75.3 C 85 75.8 84.2 76.7 83.9 77.1 C 83.6 77.6 82.4 77.9 82.4 78.6 L 82.4 79 C 82.4 79.4 83.3 80.1 83.6 80.1 L 83.8 80.1 C 84.8 80.1 85 79.1 85.4 78.6 C 85.7 78.2 86.7 77.4 87.2 77 L 85.1 75.3 z M 127.8 92.5 L 125 92.7 L 125.2 96.5 C 125.3 97.5 125.9 97.3 126.5 97.6 C 127.1 97.3 127.8 97.1 127.8 96.3 C 127.8 95.8 127.7 95.6 127.5 95.3 L 127.8 92.5 z"}],G["AC.IC.CRIMINAL.CIVIL DISTURBANCE"]={type:"path",stroke:!1,d:"m 110.6,142.4 0,-28.6 -7.1,0 0,28.6 z m -21.2,0 7.1,0 0,-28.6 -7.1,0 z m 7.1,-28.6 h 7.1 v -11.8 h 24.4 V 77.2 h -6.3 v 18.6 h -18 v -10.7 c 0,-0.9 2.1,-1.2 3,-1.7 0.8,-0.4 2.1,-1.4 2.7,-2 1.5,-1.4 3.2,-3.6 3.8,-5.9 1.6,-6.3 -0.2,-10.6 -3.8,-14.1 -3,-3.1 -9.2,-4.9 -14.3,-2.7 -3.6,1.6 -8.4,6.2 -8.4,11 v 3.2 c 0,2.8 1.9,6.2 3.3,7.7 1,1 1.8,1.7 3,2.5 1,0.6 3.6,1.3 3.6,2.2 v 10.7 H 78.4 v -18.6 h -6.3 v 24.9 h 24.4 v 11.8 h -0 z"},G["AC.IC.SHOOTING"]={type:"path",stroke:!1,d:"m 93.2,89.7 h 16.8 v 9.3 c -2.6,0 -7.3,1.6 -9,1 -2.3,-0.8 -5.4,-2 -7.8,-2.6 v -7.8 l 0,0 z m -30,0 h 26.1 v 9.6 c 0,0.9 4.1,2 5,2.3 1.9,0.6 3.6,1.4 5.5,2 2,0.7 3.4,0.4 6,-0.1 1.6,-0.3 5.7,-0.4 6.6,-0.9 0.6,2.7 4.6,14 4.6,15.2 0,1.6 -1.2,4 -1.3,5.7 l 21.5,0 -8.2,-25.9 7.8,-7.7 c -0.8,-1.6 -4.1,-13.4 -5.2,-13.4 h -68.4 v 13.2 l 0,0 z"},G["AC.IC.FIRE EVENT"]={type:"path",stroke:!1,d:"m 96.5,78.5 c 0,-5.1 4.1,-9.7 4.1,-13 v -0.4 c 0,-1.3 -0,-3.8 -1.1,-4.1 -1,4.5 -3.5,8 -5.9,11.2 -1.2,1.6 -2.4,3.3 -3.6,5 -1,1.4 -3.1,3.5 -3.1,5.5 0,1.4 6.1,17.7 3,17.7 -0.1,0 -3.8,-2.5 -4.2,-2.9 -1.4,-1 -2.4,-2.3 -3.3,-3.7 -3.1,-4.6 -2.4,-4.4 -3.8,-10.3 -1.5,0.4 -2.6,5 -2.9,6.9 -0.4,2.4 -0.3,6.6 0.2,9 0.6,2.8 1.4,5 2.5,7.3 0.6,1.2 3,5.5 3.1,6.5 -2.2,-0.5 -7,-4.6 -8.6,-6.2 -1.5,-1.5 -5.5,-8.3 -5.9,-8.6 0,9.9 5,22.8 9.8,27.6 3.1,3.1 6.3,6.4 10.2,8.6 2.4,1.5 10.5,4.3 14.3,4.3 h 2.4 c 2.8,0 10.8,-3 12.9,-4.2 3.4,-1.9 6.9,-4.7 9,-7.9 4.4,-6.5 8,-15 8,-25.8 v -1.3 l -0.4,-5.8 c -0.7,0.4 -2.2,4.4 -2.5,5.2 -0.5,1.3 -2,3.4 -2.9,4.6 -1.4,2.1 -5.2,6.3 -7.8,6.9 v -1.1 c 0,-4.4 2.8,-8.8 2.8,-12.4 v -1.9 l -1.3,-12.2 h -0.6 c -0.3,3.9 -1.6,7.9 -3.4,10.5 -1.3,2 -5.3,5.6 -7.7,6.2 -0.2,-0.4 -0.4,-0.6 -0.4,-1.3 v -2.3 c 0,-5.1 3,-8.9 3,-12.8 v -0.8 c 0,-1.5 -2.1,-3.9 -2.9,-5.2 -0.7,-1.1 -2.4,-4.3 -3.5,-4.6 v 1.3 c 0,6.2 -1.4,10.6 -5.6,12.6 -1.1,-1.7 -3.6,-3.2 -3.6,-6.2 v -1.9 l 0,0 z"},G["AC.IC.NON-REsIdENTIAL FIRE"]={type:"path",stroke:!1,d:"m 121.2,122.3 -6.2,0 0,5.9 6.2,0 z m -12.1,0 -6.1,0 0,5.9 6.1,0 z m -12.2,0 -5.9,0 0,5.9 5.9,0 z m -12.3,0 -5.7,0 0,5.9 5.7,0 z m 30.4,-4.8 h 6.1 v -6.2 h -2.5 c -1.2,0 -2.5,1.5 -3.6,1.8 v 4.4 z m -5.9,-6.2 -6.1,0 0,6.2 6.1,0 z m -12.2,0 -5.9,0 0,6.2 5.9,0 z m -12.3,0 -5.7,0 0,6.2 5.7,0 z m 25,-33.4 c 0,-3.4 3.4,-7.4 3.4,-9.1 0,-1.4 -0.8,-4.2 -1.8,-4.6 0,7.1 -8.6,12.8 -8.6,15.7 v 0.4 c 0,0.7 1.9,5.2 2.3,6.6 0.4,1.7 1.4,5.6 1.6,7.3 -6.2,-0.1 -7.3,-9.8 -10.3,-11.8 l -0.3,3 0,4.6 c 0,4.7 3.4,11.4 5.6,13.9 1,1.1 4.2,3.7 5.5,4.3 0.8,0.4 6.3,3 6.6,3 1.4,0 9.2,-7.2 10.5,-8.6 2.5,-2.5 4,-9.6 4,-14.8 v -0.7 l -0.7,-5.7 c -1,0.6 -2.1,5.6 -2.8,7 -1.5,3.2 -1.8,3.1 -5.4,4 -0.3,-12.2 6.7,-8.3 -2.7,-19.1 0,4.9 -0.9,7.9 -4.1,9.6 -1.4,-0.7 -3,-2.7 -3,-4.8 z m -14.8,26.4 h 3.6 c -0.1,-0.6 -0.3,-1.4 -1.1,-1.4 h -1.2 v -2.7 c 0,-0.9 -0.9,-2.4 -1.4,-3 v 7 z m -16.4,-28.6 h 3.9 v 28.6 h 8.9 v -28.6 h 3.6 v 5.4 c 0.3,-0.2 1.4,-1.4 1.4,-1.8 v -5 h -6.4 v 28.6 h -6.4 v -28.6 h -6.1 v 28.6 h -5.2 v 32.7 h 54.8 v -30.7 c -0.4,0.2 -1.1,1 -1.1,1.6 v 27.5 h -52.5 v -29.8 h 5.2 v -28.6 h -0 z"},G["AC.IC.REsIdENTIAL FIRE"]={type:"path",stroke:!1,d:"m 91.5,88.3 -0.7,-3 -30.1,25.2 15.6,0.1 v 25.6 h 50.5 v -25.6 h 12.4 c -0.4,-0.5 -7.6,-5.9 -8,-5.9 -0.3,0 -1.2,1.6 -1.4,1.9 l 1.4,1.4 h -2.4 c -0.7,0.5 -4.9,3.1 -4.9,3.8 v 22.3 h -18.3 v -12.9 h -8.7 v 12.9 h -18.1 v -23.5 h 22.6 l -2.2,-2.7 -30.7,-0.1 L 91.5,88.3 z m 27.6,28 -8.2,0 0,8.5 8.2,0 z m -27,0.2 -8.7,0 0,8.2 8.7,0 z m 11,-36.4 c 0,0.9 2.1,5.3 2.5,6.9 0.4,1.8 1.5,6.1 1.5,7.8 -7.1,-1.6 -6.9,-9.9 -10.3,-12.2 -1.7,7.5 0.8,15.1 3.7,19.5 2.4,3.6 2.6,3.4 6,6 0.4,0.4 7.9,4.3 7.9,4.3 2,0 9.6,-7.1 11.1,-8.6 1.8,-1.8 5.6,-10.8 5.6,-14.4 V 83.5 c 0,-1.9 -0.3,-3.2 -1.4,-4 0,2 -1.8,7 -2.6,8.4 -0.8,1.8 -4.3,4.2 -6.3,4.7 v -1.7 c 0,-4.4 2.4,-6.8 2.4,-10.1 0,-2 -4,-7.2 -5.2,-8 0,5.4 -0.7,8 -4.2,9.8 -1.2,-0.7 -3.1,-2.6 -3.1,-4.4 v -1 c 0,-1.5 1.8,-5.4 2.5,-6.6 2,-3.9 0.5,-3.8 -0.4,-7 h -0.4 c -1.3,5.5 -0.8,4.8 -3.8,8.9 -1,1.4 -5.4,5.9 -5.4,7.5 z"},G["AC.IC.SCHOOL FIRE"]={type:"path",stroke:!1,d:"m 131.3,73 c -4,-1 -17,-7.2 -19.8,-7.2 h -2.4 V 96 h -0.7 c 0,5.6 -3.8,15.3 -6.2,18.6 -2,2.7 -3.7,4.1 -6.2,6.2 -0.8,0.6 -7,4.9 -7,5.4 v 8 h 44.1 V 96 h -20.4 l 0,-14.8 18.8,-8.2 z m -49.2,11.8 c 0,-3 3.6,-8 3.6,-10 0,-1.8 -0.8,-3.9 -2,-4.6 -0.4,0.8 -0.4,3.6 -0.9,5 -0.3,0.7 -1.8,2.7 -2.3,3.5 -1.6,2.3 -3.4,4.2 -5.1,6.4 -2.2,2.8 0,5 1.1,8.2 0.8,2.2 1.4,7.9 2.1,9.4 C 71.9,102.4 70.6,91.8 67.6,89.9 l -0.6,7.6 0.1,0.2 c 0,5 3.6,12.3 5.9,15 1.1,1.3 4.3,3.6 5.9,4.6 1.1,0.7 2.5,1 3.7,1.6 0.4,0.2 3.2,1.9 3.2,1.9 2.1,0 9.9,-7.4 11.5,-9 1.8,-1.8 5.8,-11 5.8,-14.4 v -6.3 c 0,-2.1 -0.4,-2.6 -0.7,-4.2 h -0.8 c -0.2,1.9 -2.2,7.1 -3,8.7 -0.7,1.3 -6.3,5.7 -6.3,3.7 v -1.2 c 0,-3.8 2.4,-7.2 2.4,-10 v -0.8 c 0,-1.5 -4.3,-6.8 -5.4,-7.6 0,2.5 0.1,4.8 -0.8,6.5 -0.5,0.9 -2.5,3.5 -3.6,3.5 -1.1,0 -3.2,-3.4 -3.2,-5.1 z"},G["AC.IC.HOT SPOT"]=[{type:"path",stroke:!1,d:"m 96.3,78.5 c 0,-5.1 4.1,-9.7 4.1,-13 v -0.4 c 0,-1.3 -0,-3.8 -1.1,-4.1 -1,4.5 -3.5,8 -5.9,11.2 -1.3,1.6 -2.3,3.3 -3.6,4.9 -1,1.3 -3.1,3.4 -3.1,5.5 0,1.4 6.1,17.7 3,17.7 -0.1,0 -3.7,-2.5 -4.2,-2.9 -1.4,-1 -2.4,-2.3 -3.3,-3.7 -3.1,-4.6 -2.4,-4.4 -3.8,-10.3 -1.5,0.4 -2.6,5 -2.9,6.9 -0.4,2.4 -0.3,6.7 0.3,9 0.6,2.8 1.3,5 2.5,7.3 0.6,1.2 3.1,5.5 3.1,6.5 -2.2,-0.5 -7.1,-4.6 -8.6,-6.1 -1.5,-1.5 -5.5,-8.3 -5.9,-8.6 0,9.9 5,22.8 9.8,27.6 3.1,3.1 6.3,6.4 10.1,8.7 2.5,1.5 10.5,4.3 14.3,4.3 h 2.4 c 2.9,0 10.8,-3 12.9,-4.2 3.4,-1.9 6.9,-4.7 9,-7.9 4.4,-6.5 8,-15 8,-25.7 V 99.9 l -0.4,-5.8 c -0.7,0.4 -2.2,4.4 -2.5,5.2 -0.5,1.3 -2,3.4 -2.8,4.6 -1.4,2.1 -5.2,6.3 -7.9,6.9 v -1.1 c 0,-4.4 2.8,-8.8 2.8,-12.4 v -1.9 l -1.3,-12.2 -0.7,8e-4 c -0.3,3.9 -1.7,7.9 -3.4,10.5 -1.3,2 -5.3,5.6 -7.7,6.2 -0.2,-0.4 -0.4,-0.6 -0.4,-1.3 v -2.4 c 0,-5.1 3,-8.9 3,-12.8 V 82.6 c 0,-1.5 -2.1,-3.9 -2.9,-5.2 -0.7,-1.1 -2.4,-4.3 -3.5,-4.6 v 1.3 c 0,6.2 -1.4,10.6 -5.6,12.6 -1.1,-1.7 -3.6,-3.1 -3.6,-6.2 v -1.9 l 0,0 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 113,126.9 c 0,6.3 -5.1,11.4 -11.4,11.4 -6.3,0 -11.4,-5.1 -11.4,-11.4 0,-6.3 5.1,-11.4 11.4,-11.4 6.3,0 11.4,5.1 11.4,11.4 z"}],G["AC.IC.FIRE ORIGIN"]=[{type:"path",stroke:!1,d:"m 96.3,78.5 c 0,-5.1 4.1,-9.7 4.1,-13 v -0.4 c 0,-1.3 -0,-3.8 -1.1,-4.1 -1,4.5 -3.5,8 -5.9,11.2 -1.3,1.6 -2.3,3.3 -3.6,4.9 -1,1.3 -3.1,3.4 -3.1,5.5 0,1.4 6.1,17.7 3,17.7 -0.1,0 -3.7,-2.5 -4.2,-2.9 -1.4,-1 -2.4,-2.3 -3.3,-3.7 -3.1,-4.6 -2.4,-4.4 -3.8,-10.3 -1.5,0.4 -2.6,5 -2.9,6.9 -0.4,2.4 -0.3,6.7 0.3,9 0.6,2.8 1.3,5 2.5,7.3 0.6,1.2 3.1,5.5 3.1,6.5 -2.2,-0.5 -7.1,-4.6 -8.6,-6.1 -1.5,-1.5 -5.5,-8.3 -5.9,-8.6 0,9.9 5,22.8 9.8,27.6 3.1,3.1 6.3,6.4 10.1,8.7 2.5,1.5 10.5,4.3 14.3,4.3 h 2.4 c 2.9,0 10.8,-3 12.9,-4.2 3.4,-1.9 6.9,-4.7 9,-7.9 4.4,-6.5 8,-15 8,-25.7 V 99.9 l -0.4,-5.8 c -0.7,0.4 -2.2,4.4 -2.5,5.2 -0.5,1.3 -2,3.4 -2.8,4.6 -1.4,2.1 -5.2,6.3 -7.9,6.9 v -1.1 c 0,-4.4 2.8,-8.8 2.8,-12.4 v -1.9 l -1.3,-12.2 -0.7,8e-4 c -0.3,3.9 -1.7,7.9 -3.4,10.5 -1.3,2 -5.3,5.6 -7.7,6.2 -0.2,-0.4 -0.4,-0.6 -0.4,-1.3 v -2.4 c 0,-5.1 3,-8.9 3,-12.8 V 82.6 c 0,-1.5 -2.1,-3.9 -2.9,-5.2 -0.7,-1.1 -2.4,-4.3 -3.5,-4.6 v 1.3 c 0,6.2 -1.4,10.6 -5.6,12.6 -1.1,-1.7 -3.6,-3.1 -3.6,-6.2 v -1.9 l 0,0 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"M 99.6 105.9 C 93.3 105.9 88.2 111 88.2 117.3 C 88.2 123.6 93.3 128.7 99.6 128.7 C 105.9 128.7 111 123.6 111 117.3 C 111 111 105.9 105.9 99.6 105.9 z M 105 109.4 L 106.8 111 L 101.2 117.1 L 107.3 123.2 L 105.6 124.9 L 99.5 118.8 L 93.7 125.3 L 91.9 123.6 L 97.8 117.2 L 92.1 111.4 L 93.8 109.8 L 99.5 115.4 L 105 109.4 z"}],G["AC.IC.SMOKE"]=[{type:"path",stroke:!1,d:"m 99.3,69.2 c 0.2,-2.6 4.4,-5.5 7.2,-6 4.2,-0.8 6.9,1.2 9.1,3.3 1.1,1.1 1.9,2.7 2.4,4.3 0.6,2.2 1.9,1.3 4,2.5 2.4,1.4 4.9,4.4 5.6,7.4 5.3,0 10.3,4.8 10.3,9.9 v 1.3 c 0,3 -1.2,4.9 -2.8,6.5 -1.1,1.1 -1.2,1.2 -2.6,2.1 -1.3,0.8 -2.5,0.6 -2.7,2 -0.6,4.6 -4.2,9 -9.4,9 3.3,5 2.3,8.7 -0.6,13 0,4.8 -0.2,6.2 -2.8,8.8 -2.4,2.5 -4.5,2.4 -8.6,2.4 0.7,-1 1.2,-1 2,-2.4 0.6,-1.1 0.8,-1.7 1.4,-2.9 1,-2.2 1.8,-3.7 1.8,-6.8 v -2.1 c 0,-1.4 -0.2,-2.4 -0.8,-3.2 -1.2,5.2 -1.4,6.4 -5.7,8.6 0,-8.3 3.8,-6.8 -1.9,-13.4 0,3.8 -0.2,5.6 -2.7,6.9 -0.8,-0.5 -2.1,-1.7 -2.1,-2.9 v -0.4 c 0,-2 2.5,-5.2 2.5,-6.7 v -0.4 c 0,-1.1 -0.4,-2.1 -1,-2.5 0,2.9 -3.4,7.6 -4.9,9.2 -1.6,1.7 -1.1,2.8 -0.2,5 0.7,1.7 1.1,3.5 1.1,5.8 v 1 c -3.2,-0.3 -4.4,-6.2 -6.1,-8.2 0,3.4 -0.8,6.3 0.4,9.4 0.8,1.9 2.4,5.6 4.4,6.1 v 0.4 l -3.4,0.6 -0.2,-0.1 c -3.4,0 -6.4,-2.4 -7.8,-4.4 -0.8,-1.1 -1.5,-2.7 -1.7,-4.4 -0.3,-2.3 0.6,-3.6 0.6,-5 0,0 -5.1,-4.7 -4.4,-9 l 0.2,-1.7 c -0.4,-0.5 -1.4,-1.4 -2,-2.2 -0.6,-0.8 -1.1,-1.8 -1.6,-2.6 -1.4,0 -2,0.6 -3.2,0.6 h -0.6 c -5.4,0 -10.5,-5.2 -10.5,-10.5 v -0.8 c 0,-4.9 4.1,-9.2 9,-9.2 h 2.1 c 0.8,-3.2 5.7,-6.9 10.1,-5.9 -0.4,-1.5 -1,-2.7 -1,-4.8 v -0.4 c 0,-3.8 3.2,-7.8 6.1,-8.8 1.9,-0.7 3.9,-1 6.1,-0.4 2.3,0.6 3.7,2.2 4.8,2.5 l 0,0 z m -0.4,-1.9 c -1.3,-0.1 -2.9,-2.1 -5.9,-2.1 h -1.9 c -5,0 -10.6,5.8 -10,11.4 l 0.5,3.4 h -0.6 c -4.3,0 -7.1,3.2 -8.6,6.1 -2.3,-1.1 -6.8,1.2 -7.9,2.4 -1.6,1.6 -3.6,4.2 -3.6,7.3 v 1.5 c 0,3.6 2.4,7.3 4.5,8.9 1.8,1.3 2,1.6 4.4,2.4 2.7,0.9 3.7,0.1 5.9,0.2 l 3.1,3.7 c -0.6,1.3 0.4,4.9 0.9,6 0.5,1.2 0.7,1.4 1.4,2.4 0.2,0.4 1.7,2 1.7,2 0,1.1 -0.4,1.4 -0.4,2.7 v 0.2 c 0,6.3 4.8,12 10.7,12 2.1,0 3.6,-0.4 5,-1 2.6,1.4 7.1,3 9.2,-0.1 l 3.4,0.5 c 2.7,0.4 6.8,-2.2 7.9,-3.6 1,-1.4 3.7,-6 2.4,-8.8 1.1,-0.7 2.6,-3.7 2.7,-5.5 0.1,-1.7 0.2,-1.8 -0.1,-3.6 -0.2,-1.4 -0.9,-2.2 -1,-3.2 4,-0.3 8.4,-5.2 8.4,-9.7 2.5,-1.6 3.4,-1.2 5.6,-3.8 1.3,-1.4 2.6,-4.4 2.6,-7 0,-6.3 -4.7,-12 -10.7,-12 -0.9,-4 -4.8,-8.3 -9.2,-8.6 -0.4,-4.4 -5.7,-9.4 -10.7,-9.4 -4.1,-0 -8.9,2.7 -9.6,5.6 l 0,0 z m 15.8,38.4 c 0.5,0 1,0.1 1,-0.4 0,-3.1 -4.1,-6.7 -7.6,-6.7 h -1.9 c -0.6,0 -1,0.8 -0.6,1 0.4,0.2 1.6,0.1 2,0.1 1.2,0 2.6,0.5 3.4,1 2.1,1.6 2.8,2.1 3.5,5.1 z m -34.5,-12.6 v 1.7 c 0,1.4 0.6,2.2 0.6,3.2 0,0 -3.6,3.4 -3.8,5.4 l 0.6,0.2 c 1,-0.6 1.6,-2.6 3,-4 1,-0.9 3.1,-2.2 4.8,-2.2 h 0.6 c 1.3,0 3.6,1 3.6,-0.2 0,-0.9 -2.6,-1 -3.6,-1 h -0.2 c -1.6,0 -3,0.6 -4,1.3 -0.1,-1 -0.6,-1.9 -0.6,-3.2 0,-4.6 3.7,-8.6 8.4,-8.6 h 1 c 1,0 1.5,0.2 2.3,0.4 0.1,-0.2 0.4,-0.6 0.4,-0.7 0,-0.7 -1.8,-1 -2.5,-1 h -1.5 c -4.5,-8e-4 -9.2,4.4 -9.2,8.6 z m 19.1,-15.8 0.6,0.6 c 1.6,-0.9 3.4,-2.3 5.9,-2.3 h 1 c 5.5,0 10.1,4.4 10.1,9.7 v 0.6 c -1.5,-0 -2.6,-0.8 -4.6,-0.8 h -1 c -1.5,0 -4.1,0.3 -4.2,1.7 0.6,0.1 0.4,0.2 0.8,0.2 0.9,0 1.4,-0.6 3,-0.6 h 2.3 c 2.2,0 5.6,1.8 6.6,3.1 2,2.6 1.8,3.7 2.6,7.2 0.5,0 1,0.1 1,-0.4 0,-4 -2.6,-8.1 -5.2,-9.4 0,-6.9 -4.5,-12.4 -11.1,-12.4 h -1.3 c -2.3,0 -5.6,1.6 -6.5,2.9 z"}],G["AC.IC.SPECIAL NEEDS FIRE"]=[{type:"path",stroke:!1,d:"m 75.3,133.9 h 49.4 v -28.9 c -0.6,0.4 -2.4,1.2 -2.4,2 v 24.8 H 77.4 v -30 h -2.2 v 32.1 l 0,0 z M 93,129.1 h 2 c 4.2,0 7.6,-2.4 9.3,-5 l -1.3,-3.5 c -1.2,0.3 -2.1,5.2 -8.6,5.2 h -0.8 c -3.4,0 -6.3,-3.3 -7.2,-6 -0.6,-1.7 -0.6,-3.6 0,-5.4 0.8,-2.5 1.6,-2.4 2.6,-4 l -0.4,-3.4 c -3.2,0.8 -7.1,8 -5.7,12.8 1.2,4.1 5.4,9.2 10.2,9.2 z M 88.9,97.9 v 0.4 c 0,0.8 0.5,1.4 0.8,2 l 1.4,14.7 11.3,0 4.3,10.2 6.2,-2 -1,-3 -3.5,1 C 108,119.9 104.8,111.7 104,111.7 H 94.1 C 94,111 93.8,110.9 93.8,110.1 v -1.1 h 7.6 v -2.4 h -8 l -0.2,-3.7 v -2.2 c 3.4,-0.8 2.7,-6.2 -1.1,-6.2 -1.8,0 -3.2,1.4 -3.2,3.2 z m 19.9,-7.4 v 1 l -0.4,0.3 C 105.1,89.7 101,86.1 101,80.8 99.6,81.7 98.8,84.8 98.8,87.1 v 1.1 c 0,4.5 3,10.7 5,13.3 2.8,3.7 7.4,4.8 11.6,7 1.6,-0.8 9.3,-5.4 10,-6.3 1.3,-1.7 4.2,-9.8 4.2,-12.4 0,-1.9 -0.3,-8.2 -1.3,-8.8 -0.7,2.7 -0.8,4.7 -2.3,6.8 -1,1.4 -3.3,3.5 -5,4 l -0.2,-2.4 v -0.2 c 0,-3 2,-5.4 2,-8.8 0,-1 -3.4,-6.1 -4.1,-6.2 0,1.8 -0.2,4.1 -0.6,5.4 -0.3,1 -1.9,3.4 -2.9,3.4 h -0.6 c -0.4,-1.4 -1.9,-1.7 -1.9,-4.8 V 76.9 c 0,-2.3 2.6,-5.5 2.6,-7.8 l 0,-0.6 -0.3,-2.4 c -1,0.2 -1,1.9 -1.4,2.9 -0.4,1 -1,2 -1.6,2.9 -1.3,1.7 -2.6,3.4 -3.9,5.1 -2,2.8 -2.1,2.7 -1,6.1 0.6,2 1.7,4.8 1.7,7.4 z m 24.3,10.2 -3.3,-2 -1.2,1.9 3.5,2 z m -66.2,0 1,1.9 c 5,-2.7 11,-6.9 16,-10.1 2.7,-1.7 5.2,-3.4 7.8,-5.1 1.4,-0.9 2.6,-1.6 3.9,-2.6 1.8,-1.2 1.9,-1.9 2.4,-4.3 l -31.2,20.2 z"}],G["AC.IC.WILD FIRE"]=[{type:"path",stroke:!1,d:"m 110.8,139.5 c 0.2,-0.5 6.5,-6.2 7.4,-7 2.6,-2.6 5.6,-5.2 7.8,-8.1 3.9,-5.2 8,-15 8,-24 v -6.9 c 0,-1 0,-2.2 -0.8,-2.4 -0.8,3.4 -3.3,7.7 -5.1,10.1 -0.5,0.6 -7.9,8.7 -7.9,6.2 0,-4.7 2.5,-8.4 2.9,-13.4 0.2,-2.9 -0.8,-11.4 -1.4,-14.3 -0.9,0.7 -1.2,4.2 -1.7,5.7 -0.6,1.7 -1.2,3.6 -2.1,5 -0.7,1.1 -6.1,7.2 -7,7.2 -0.7,0 -1.6,-2.9 -1.6,-4.1 0,-4.7 3.3,-9.7 3.3,-13.4 v -0.6 c 0,-2.4 -1.9,-3.6 -3,-5.6 -0.6,-1 -2.7,-4.7 -3.7,-4.8 v 2.9 c 0,2.2 -0.5,5.6 -1.3,7.1 -0.4,0.8 -3.2,4.1 -4,4.1 -1,0 -3.9,-3.9 -3.9,-5.7 v -3.5 c 0,-4.1 4.1,-8.6 4.1,-12.6 v -0.2 c 0,-1.5 -0,-4 -1.4,-4.1 -0.7,8 -12.6,18.7 -12.6,21.8 0,4.4 3.9,9.2 3.9,15.9 v 2.2 c 0,0.7 -0.2,0.8 -0.2,1.4 -0.8,-0.2 -1.4,-1.3 -1.9,-2 -0.7,-0.8 -1.4,-1.1 -2.2,-1.7 -1.5,-1 -2.7,-2.3 -3.8,-3.7 -1.9,-2.5 -4.1,-6.7 -4.1,-10.9 -1.8,0.5 -3.3,6.3 -3.3,8.8 v 3.5 c 0,8.3 5.9,15.1 5.9,18.1 -3.2,-1.7 -6,-3.9 -8.5,-6.4 -1.2,-1.2 -5.5,-8.5 -6.2,-8.7 0,5.7 1.7,10.3 2.6,15.1 0.5,2.3 1.2,5.1 1.9,7.1 1,2.7 1.9,3.3 3.4,5.3 3,4 4.9,6 8.3,9.4 1.5,1.5 2.9,2.9 4.4,4.4 l 4.7,3.4 5.9,2.8 V 129.9 h -13 l 9.9,-11.5 -7.4,-0.1 9.8,-11.1 -6.6,-0.1 10.9,-17.3 0.1,-0.2 11.2,17.5 -6.1,-0 9.4,11 -7.6,0 10.1,11.7 -13.1,0.1 v 13 l 6,-3.4 z"}],G["AC.IC.HAZARDOUS MATERIALS INCIDENT"]=[{type:"path",stroke:!1,d:"m 60.7,100.6 78.5,-0 -39.3,39.2 -39.2,-39.2 z M 127.6,87.8 c 0.6,0.4 6.1,5.9 6.1,6.2 V 100 h -6.1 V 87.8 z M 115.3,75.5 c 0.6,0.4 6.1,5.9 6.1,6.2 V 100 h -6.1 V 75.5 z M 90.8,69.5 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 100 H 90.8 V 69.5 z m -12.2,12.2 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 100 H 78.6 V 81.7 z m -6.3,6 0,12.2 H 66.4 V 94.2 c 0,-0.3 -0,-0.3 -0.1,-0.4 l 6,-6 z m 30.8,-24.5 6.2,6.1 c -0.2,0.4 -0.1,-0.1 -0.1,0.4 V 100 h -6.1 V 63.3 z M 56.7,100 100,143.3 143.3,100 100,56.7 56.7,100 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 103.1,63.3 6.2,6.1 c -0.2,0.4 -0.1,-0.1 -0.1,0.4 V 100 h -6.1 V 63.3 z m -30.8,24.5 0,12.2 H 66.4 V 94.2 c 0,-0.3 -0,-0.3 -0.1,-0.4 l 6,-6 z m 6.3,-6 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 100 H 78.6 V 81.7 z m 12.2,-12.2 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 100 H 90.8 V 69.5 z m 24.5,6 c 0.6,0.4 6.1,5.9 6.1,6.2 V 100 h -6.1 V 75.5 z m 12.3,12.3 c 0.6,0.4 6.1,5.9 6.1,6.2 V 100 h -6.1 V 87.8 z m -66.9,12.8 78.5,-0 -39.3,39.2 -39.2,-39.2 z"}],G["AC.IC.CHEMICAL AGENT"]=[{type:"path",stroke:!1,d:"m 100.7,107.7 c -3.2,2e-5 -5.8,1 -7.6,3 -1.9,2 -2.8,4.7 -2.8,8.1 -2e-6,3.4 0.9,6.1 2.8,8.1 1.9,2 4.4,3 7.6,3 1.3,0 2.4,-0.2 3.6,-0.5 1.1,-0.3 2.2,-0.9 3.2,-1.5 l 0.1,-0.1 0,-0.1 0,-3 0,-0.5 -0.3,0.3 c -0.9,0.9 -1.9,1.5 -3,1.9 -1.1,0.4 -2.2,0.7 -3.4,0.7 -2.4,0 -4.1,-0.7 -5.3,-2.1 -1.2,-1.4 -1.9,-3.5 -1.9,-6.2 -4e-6,-2.7 0.6,-4.8 1.9,-6.2 1.2,-1.4 3,-2.1 5.3,-2.1 1.2,2e-5 2.3,0.2 3.4,0.6 1.1,0.4 2.1,1.1 3,1.9 l 0.3,0.3 0,-0.5 0,-3 -0.2,0 0.1,-0.2 c -1,-0.7 -2.1,-1.2 -3.2,-1.5 -1.1,-0.3 -2.3,-0.5 -3.6,-0.5 z M 92.7,64.2 h 14.7 v 33 c 0,8.2 12.9,9.6 12.4,21.8 -0.3,6.8 -7,18.6 -14.3,18.6 h -11 c -6.8,0 -14.6,-13.1 -14.3,-20 0.6,-10.6 12.4,-12.8 12.4,-20.4 v -33 z m -14.7,55 c 0,6.8 7.9,20.2 14.7,20.2 h 14.7 c 8.1,0 14.7,-13 14.7,-22 0,-11.8 -12.8,-13.6 -12.8,-22 V 60.6 H 90.8 V 95.4 c 0,7.8 -12.8,8.7 -12.8,23.9 l 0,0 z"},{type:"path",stroke:!1,fill:E.fillColor.Unknown,d:"m 92.7,64.2 0,33 c 0,7.6 -11.9,9.8 -12.4,20.4 C 79.9,124.5 87.7,137.6 94.5,137.6 l 11,0 c 7.2,0 14,-11.8 14.3,-18.6 0.5,-12.2 -12.4,-13.6 -12.4,-21.8 l 0,-33 -14.7,0 z M 100.7,107.7 c 1.3,2e-5 2.5,0.2 3.6,0.5 1.1,0.3 2.2,0.8 3.2,1.5 l -0.1,0.2 0.2,0 0,3 0,0.5 -0.3,-0.3 c -0.9,-0.9 -1.9,-1.5 -3,-1.9 -1.1,-0.4 -2.2,-0.6 -3.4,-0.6 -2.4,2e-5 -4.1,0.7 -5.3,2.1 -1.2,1.4 -1.9,3.5 -1.9,6.2 -4e-6,2.7 0.6,4.8 1.9,6.2 1.2,1.4 3,2.1 5.3,2.1 1.2,0 2.3,-0.2 3.4,-0.7 1.1,-0.4 2.1,-1.1 3,-1.9 l 0.3,-0.3 0,0.5 0,3 0,0.1 -0.1,0.1 c -1,0.7 -2.1,1.2 -3.2,1.5 -1.1,0.3 -2.3,0.5 -3.6,0.5 -3.2,0 -5.8,-1 -7.6,-3 -1.9,-2 -2.8,-4.7 -2.8,-8.1 -2e-6,-3.4 0.9,-6.1 2.8,-8.1 1.9,-2 4.4,-3 7.6,-3 z"}],G["AC.IC.CORROSIVE MATERIAL"]=[{type:"path",stroke:!1,d:"m 102.9,135.4 c 0.8,0 1.4,-0.8 1.4,-1.5 0,-0.7 -0.6,-1.5 -1.2,-1.5 H 102.3 c -0.5,0 -1.2,0.7 -1.2,1.4 v 0.3 c 0,0.8 0.6,1.4 1.4,1.4 H 102.9 z M 96.9,132.5 c 0,0.7 0.6,1.5 1.2,1.5 h 0.6 c 0.8,0 1.4,-0.8 1.4,-1.5 v -0.2 c 0,-0.7 -0.6,-1.5 -1.2,-1.5 H 98.1 c -0.6,0 -1.2,0.9 -1.2,1.5 v 0.2 z m 8.5,-0.9 c 1.3,0 2.2,-1.8 1.1,-2.8 -1,-1 -2.8,-0.2 -2.8,1.1 0,0.8 0.9,1.7 1.7,1.7 z m -6.2,-4.4 c 0,0.6 0.6,1.5 1.2,1.5 h 0.6 c 0.8,0 1.4,-0.6 1.4,-1.4 v -0.6 c 0,-0.5 -0.7,-1.2 -1.4,-1.2 h -0.3 c -0.8,0 -1.5,0.8 -1.5,1.6 z m -0.6,-4.1 c 0.6,0 1.2,-0.8 1.2,-1.5 0,-1 -0.7,-1.7 -1.7,-1.7 -0.6,0 -1.5,0.6 -1.5,1.2 v 0.6 c 0,0.7 0.7,1.4 1.2,1.4 h 0.8 V 123.1 z m 2.4,-2.7 c 0,0.6 0.7,1.5 1.2,1.5 h 0.8 c 0.4,0 1.2,-0.8 1.2,-1.2 v -0.8 c 0,-0.6 -0.8,-1.2 -1.5,-1.2 h -0.1 c -0.8,0 -1.5,0.8 -1.5,1.5 v 0.1 z m -2.7,-3.5 c 0.6,0 1.4,-0.8 1.4,-1.5 v -0.2 c 0,-2.2 -3.2,-1.8 -3.2,-0.3 v 0.8 c 0,0.7 1.1,1.2 1.8,1.2 z m 4.1,-3.6 c 0,2 3.3,1.9 3.2,-0.1 -0.1,-2.3 -3.2,-1.8 -3.2,-0.3 v 0.4 z m 4.7,-16.2 0,2.9 -3,-0.2 0.9,2.8 -1.1,0.1 -1.6,-0.9 -0.4,3 -1,-1.5 -3.3,1 -0.6,-3.2 -2,1.3 -0.6,-1.6 -2.5,0.4 1.5,-2.7 -0.6,-1.5 -22.2,0 0,12.4 59.2,0 0,-12.4 z M 94.3,85.2 v 1.4 c 0,4.4 2.1,8.7 5.7,9.4 3.7,0.8 7,-4.5 7,-8 v -1.5 c 0,-3 -2.1,-8.6 -3,-11.3 -0.5,-1.4 -3.1,-10.6 -3.9,-10.6 -0.8,0 -0.9,4.5 -1.1,5.4 -0.6,2.1 -0.9,3.2 -1.6,5.1 -0.8,2.3 -3.2,7.6 -3.2,10.1 l 0,0 z"}],G["AC.IC.HAZARDOUS WHEN WET"]=[{type:"path",stroke:!1,d:"m 60.6,100.5 78.8,-0 -39.4,39.4 L 60.6,100.5 z M 127.6,87.8 c 0.6,0.4 6.1,5.9 6.1,6.2 v 5.8 H 127.6 V 87.8 z M 115.3,75.5 c 0.6,0.4 6.1,5.9 6.1,6.2 v 18.1 h -6.1 V 75.5 z M 90.8,69.5 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 99.8 H 90.8 V 69.5 z M 78.6,81.7 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 99.8 H 78.6 V 81.7 z m -6.3,6 0,12.1 H 66.4 V 94.2 c 0,-0.3 -0,-0.3 -0.1,-0.4 l 6,-6 z m 30.8,-24.5 6.2,6.1 c -0.2,0.4 -0.1,-0.2 -0.1,0.4 v 30 h -6.1 V 63.3 z M 56.7,100 100,143.3 143.3,100 100,56.7 56.7,100 z m 41.2,25.3 c 0.2,1 0.6,1.6 1.6,1.8 l -0.8,0.6 c -1.3,-0.6 -1.3,-0.1 -1.7,-1.9 l 0.9,-0.4 z m -2.4,-1 c 0,2.9 1.3,4.9 4.2,4.9 h 0.9 c 1.9,0 3,-1 3.6,-2.3 0.9,-1.8 0.6,-3.1 -0.2,-4.6 -0.8,-1.4 -1.6,-2.3 -2.2,-3.8 -0.5,-1.2 -0.8,-3.8 -1.7,-4.4 C 99.6,118.1 95.5,122.5 95.5,124.2 z m -12.6,-9.4 c 0.4,0.9 0.4,1.4 1.5,1.7 l -0.6,0.6 C 82.2,116.7 82.6,116.5 82,115.3 l 0.9,-0.5 z m 1.6,3.8 H 86 c 2.3,0 3.7,-2.2 3.7,-4.6 0,-1.2 -1.9,-3.9 -2.6,-4.9 -0.9,-1.4 -1.2,-4.7 -2.2,-5.4 -0.2,3 -2.3,5.9 -3.6,8 -1.9,2.9 -0.4,6.9 3.1,6.9 z m 28.4,-3.8 c 0.2,1.6 0.9,1.1 1.5,2 l -0.8,0.3 c -1,-0.2 -1.7,-0.8 -1.8,-1.9 L 112.9,114.8 z m 2,-11.1 c -0.3,3.6 -2.2,5.6 -3.6,8.1 -1.7,3.1 -0.3,6.8 3.2,6.8 h 1.3 c 2.2,0 3.7,-1.7 3.7,-3.9 v -0.9 c 0,-1.4 -1.9,-3.8 -2.6,-4.9 -0.9,-1.4 -0.7,-4.4 -2,-5.2 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 112.9,114.8 c 0.2,1.6 0.9,1.1 1.5,2 l -0.8,0.3 c -1,-0.2 -1.7,-0.8 -1.8,-1.9 L 112.9,114.8 z m -30,0 c 0.4,0.9 0.4,1.4 1.5,1.7 l -0.6,0.6 C 82.2,116.7 82.6,116.5 82,115.3 l 0.9,-0.5 z m 15,10.4 c 0.2,1 0.6,1.6 1.6,1.8 l -0.8,0.6 c -1.3,-0.6 -1.3,-0.1 -1.7,-1.9 l 0.9,-0.4 z m 5.2,-62 6.2,6.1 c -0.2,0.4 -0.1,-0.2 -0.1,0.4 v 30 h -6.1 V 63.3 z m -30.8,24.5 0,12.1 H 66.4 V 94.2 c 0,-0.3 -0,-0.3 -0.1,-0.4 l 6,-6 z m 6.3,-6 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 99.8 H 78.6 V 81.7 z m 12.2,-12.2 c 0,-0.4 5.5,-5.8 6.1,-6.2 V 99.8 H 90.8 V 69.5 z m 24.5,6 c 0.6,0.4 6.1,5.9 6.1,6.2 v 18.1 h -6.1 V 75.5 z m 12.4,12.3 c 0.6,0.4 6.1,5.9 6.1,6.2 v 5.8 H 127.6 V 87.8 z m 11.7,12.6 -78.8,0 39.4,39.4 L 139.4,100.4 z M 85,103.7 c 1,0.7 1.3,4 2.2,5.4 0.6,1 2.6,3.6 2.6,4.9 0,2.4 -1.4,4.6 -3.7,4.6 l -1.5,0 c -3.5,0 -5,-4 -3.1,-6.9 1.3,-2.1 3.4,-5 3.6,-8 z m 29.8,0 c 1.3,0.9 1.2,3.8 2,5.2 0.7,1.1 2.6,3.5 2.6,4.9 l 0,0.9 c 0,2.2 -1.6,3.9 -3.7,3.9 l -1.3,0 c -3.5,0 -4.9,-3.7 -3.2,-6.8 1.4,-2.5 3.4,-4.5 3.7,-8.1 z M 100,114.1 c 0.8,0.6 1.2,3.1 1.7,4.3 0.6,1.5 1.5,2.4 2.2,3.8 0.8,1.5 1.2,2.7 0.3,4.6 -0.6,1.3 -1.7,2.3 -3.6,2.3 l -0.9,0 c -2.8,0 -4.2,-2 -4.2,-4.9 0,-1.7 4.1,-6.1 4.5,-10.1 z"}],G["AC.IC.EXPLOSIVE MATERIAL"]=[{type:"path",stroke:!1,d:"m 96.5,104.6 0,0.2 -0.2,0 0,4 0,0.2 0.2,0 3.2,0 0.2,0 0,-0.2 0,-4 0,-0.2 -0.2,0 -3.2,0 z m 2.3,-20 c -1.1,2.4e-5 -2.2,0.1 -3.2,0.5 -1,0.3 -2,0.8 -3,1.4 l -0.1,0.1 0,0.1 0,3 0,0.4 0.3,-0.2 c 1,-0.7 2,-1.2 2.9,-1.6 0.9,-0.4 1.8,-0.5 2.6,-0.5 1.1,2.1e-5 2,0.3 2.6,0.8 0.7,0.5 1,1.2 1,2.1 -10e-6,0.5 -0.1,1 -0.4,1.4 -0.2,0.5 -0.7,1 -1.3,1.5 l -0,0 -1.4,1.4 c -1,0.9 -1.6,1.7 -1.9,2.5 -0.3,0.7 -0.5,1.6 -0.5,2.7 l 0,2.4 0,0.2 0.2,0 3,0 0,-0.2 0.2,0 0,-1.9 c -8e-6,-0.5 0,-1 0,-1.3 0,-0.3 0.1,-0.6 0.1,-0.8 0.1,-0.2 0.2,-0.5 0.4,-0.8 0.2,-0.3 0.5,-0.7 1,-1.1 l 1.4,-1.4 c 1,-0.9 1.6,-1.7 2,-2.5 0.4,-0.8 0.6,-1.6 0.6,-2.4 -2e-5,-1.7 -0.6,-3.1 -1.8,-4.2 -1.2,-1.1 -2.8,-1.6 -4.8,-1.6 z m 4.8,-31.1 -1.5,4.5 -4.3,12.9 -4.5,-7 -1.6,-2.5 -0.3,2.9 -1.3,14.4 -9.5,-10.7 -2.8,-3.2 1.1,4.1 3.4,12.9 -13.1,-0.7 -0.7,-0 -0.3,0.6 -0.1,0.2 -0.4,0.8 0.7,0.5 11.3,8.1 -20.1,1.4 -5.6,0.4 5.4,1.6 18,5.3 -12.3,7.1 -0.8,0.4 0.3,0.8 0.1,0.2 0.3,0.7 0.8,-0.1 16.1,-2 -4.8,8.3 -1.5,2.6 2.7,-1.1 8.8,-3.7 -3.4,14.5 -1.1,4.5 2.8,-3.7 8.9,-11.6 5,19.2 0.2,0.8 0.8,0 0.4,0 0.9,0 0.1,-1 0.9,-18.7 9.2,11.2 2.6,3.2 -0.9,-4 -3.3,-15.2 10.6,5.9 4.7,2.6 -3.4,-4.1 -5.5,-6.6 15.6,4.4 4,1.2 -3.1,-2.9 -10.7,-9.9 13.7,-2.1 4.6,-0.7 -4.5,-1.2 -15.5,-4.3 18.9,-9.6 4.7,-2.4 -5.2,0.5 -17.1,1.6 6.7,-10.8 2,-3.2 -3.3,1.8 -14.6,7.9 5.2,-16.5 1.7,-5.5 -3.5,4.5 -10.6,14 -1.7,-18.8 -0.4,-4.8 z m -1.1,9.7 1.5,16.6 0.2,2.6 1.6,-2 8.7,-11.5 -4.2,13.4 -0.8,2.4 2.2,-1.2 13.4,-7.3 -5.8,9.3 -1.1,1.7 2,-0.2 13.9,-1.3 -16.5,8.4 -2.3,1.2 2.5,0.7 13.5,3.7 -11.2,1.7 -2,0.3 1.5,1.4 9.1,8.4 -14.6,-4.2 -3.1,-0.9 2.1,2.5 4.2,5 -7.8,-4.3 -1.9,-1.1 0.5,2.2 2.9,13.3 -8.2,-10 -1.6,-2 -0.1,2.6 -0.8,16.1 -4.2,-16.3 -0.5,-2 -1.2,1.6 -7.3,9.5 2.8,-11.9 0.4,-1.9 -1.8,0.7 -7.9,3.3 4.3,-7.4 1,-1.7 -2,0.2 -13.9,1.7 10.3,-6 0.5,-0.3 0,-0.6 0,-0.3 0,-0.8 -0.7,-0.2 -14.5,-4.2 17.3,-1.2 2.8,-0.2 -2.3,-1.6 -11,-8 11.5,0.6 1.4,0.1 -0.3,-1.3 -2.7,-10.1 8.2,9.3 1.5,1.8 0.2,-2.3 1.3,-13.8 4,6.3 1.1,1.8 0.7,-2 3.4,-10.3 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"M 102.5 63.2 L 99 73.5 L 98.4 75.5 L 97.3 73.7 L 93.2 67.4 L 91.9 81.3 L 91.7 83.6 L 90.2 81.8 L 82 72.5 L 84.7 82.7 L 85.1 84 L 83.7 83.9 L 72.2 83.4 L 83.2 91.3 L 85.5 93 L 82.7 93.2 L 65.4 94.3 L 79.9 98.5 L 80.7 98.8 L 80.7 99.5 L 80.7 99.8 L 80.7 100.3 L 80.2 100.7 L 69.8 106.6 L 83.8 104.9 L 85.8 104.7 L 84.8 106.4 L 80.4 113.8 L 88.3 110.6 L 90.1 109.8 L 89.7 111.7 L 86.9 123.6 L 94.2 114.1 L 95.5 112.5 L 96 114.4 L 100.2 130.8 L 101 114.6 L 101.2 112 L 102.8 114 L 111 124 L 108.1 110.7 L 107.6 108.5 L 109.6 109.6 L 117.3 113.9 L 113.2 108.9 L 111.1 106.4 L 114.3 107.3 L 128.9 111.5 L 119.7 103.1 L 118.2 101.7 L 120.3 101.3 L 131.4 99.6 L 117.9 95.9 L 115.4 95.2 L 117.8 94 L 134.3 85.6 L 120.3 86.9 L 118.3 87.1 L 119.4 85.4 L 125.2 76.1 L 111.8 83.3 L 109.6 84.5 L 110.3 82.2 L 114.5 68.8 L 105.8 80.3 L 104.3 82.3 L 104 79.8 L 102.5 63.2 z M 98.8 84.5 C 100.8 84.5 102.4 85.1 103.6 86.1 C 104.8 87.2 105.5 88.6 105.5 90.3 C 105.5 91.2 105.3 92 104.9 92.7 C 104.5 93.5 103.8 94.3 102.8 95.2 L 101.5 96.6 C 101 97.1 100.6 97.4 100.4 97.7 C 100.2 98 100.1 98.2 100 98.5 C 100 98.7 99.9 98.9 99.9 99.2 C 99.8 99.5 99.8 100 99.8 100.5 L 99.8 102.4 L 99.7 102.4 L 99.7 102.7 L 96.6 102.7 L 96.4 102.7 L 96.4 102.4 L 96.4 100 C 96.4 98.9 96.6 98 96.9 97.3 C 97.2 96.6 97.9 95.8 98.8 94.8 L 100.2 93.4 C 100.8 92.9 101.2 92.4 101.5 91.9 C 101.7 91.4 101.9 91 101.9 90.5 C 101.9 89.6 101.5 88.9 100.9 88.3 C 100.2 87.8 99.4 87.5 98.3 87.5 C 97.5 87.5 96.6 87.7 95.7 88.1 C 94.8 88.5 93.8 89 92.8 89.7 L 92.5 89.9 L 92.5 89.5 L 92.5 86.5 L 92.5 86.4 L 92.6 86.3 C 93.6 85.7 94.6 85.3 95.6 85 C 96.7 84.7 97.7 84.5 98.8 84.5 z M 96.5 104.6 L 99.8 104.6 L 99.9 104.6 L 99.9 104.8 L 99.9 108.8 L 99.9 109 L 99.8 109 L 96.5 109 L 96.3 109 L 96.3 108.8 L 96.3 104.8 L 96.5 104.8 L 96.5 104.6 z"}],G["AC.IC.FLAMMABLE GAS"]=[{type:"path",stroke:!1,d:"m 93.3,82.5 c 0,-4.3 13.8,-4.3 13.8,0 v 55.6 c 0,1.3 -4.4,1.2 -5.9,1.2 h -2 c -1.5,0 -5.9,0.1 -5.9,-1.2 V 82.5 l 4e-4,0 z m 5.3,-20.6 h -6.5 v 2.9 h 6.3 v 3.2 h -3.7 v 2 h 3.7 v 5.3 h -4.6 v 4.5 c -1.1,0.3 -2,1.6 -2,3 v 54.8 c 0,3.3 3.7,3.2 7.1,3.2 h 2.4 c 3.4,0 7.1,0.2 7.1,-3.2 V 83.1 c 0,-2.8 -1.8,-2.8 -1.8,-3.7 v -4.1 h -4.7 v -10.4 h 6.3 v -3 h -6.7 v -2.5 h -2.9 v 2.5 l 0,0 z m 21.8,32.3 v 0.6 c 0,2.2 2.3,5.1 1.6,8.1 -1.3,-0.3 -3.1,-2 -3.8,-3 -0.3,-0.4 -0.9,-1.7 -1.2,-2.2 -0.4,-0.9 -0.4,-2.3 -0.7,-2.8 -1.1,0.8 -1.6,3.5 -1.6,5.5 v 0.2 c 0,3.2 2.4,7.5 3.8,9.6 2,3 6.3,3.3 8.4,5.1 1.6,-0.9 6.9,-3.7 7.7,-4.9 0.9,-1.2 3.2,-7.4 3,-9.6 l -0.7,-5.9 h -0.4 c -0,3.2 -2.7,7.6 -5.5,7.9 v -2 c 0,-1.7 1.4,-4 1.4,-6.1 v -0.2 c 0,-0.9 -2.4,-4.4 -3.2,-4.7 0,3.4 -0.3,5.5 -2.5,6.7 -0.8,-0.7 -1.8,-1.6 -1.8,-3.1 v -1.2 c 0,-2.1 2,-4.1 2,-6.1 0,-0.9 -0.1,-1.6 -0.6,-2 -0.9,3.8 -5.9,8.9 -5.9,10.2 z m -52.7,0 v 0.4 c 0,1.2 1.8,4.3 1.8,6.1 v 2.2 c -2.4,-0.2 -5.7,-5 -5.7,-8.1 -1.7,1.1 -1.5,4.3 -1.4,6.7 0.1,2.4 1.3,4.7 2.2,6.3 1.3,2.6 1.6,2.9 4,4.5 0.6,0.4 5.3,2.8 5.9,2.8 1.2,0 6.8,-3.9 7.5,-4.7 0.9,-1 3.3,-7.3 3.1,-9.1 l -0.6,-6.5 h -0.4 c -0.5,2.3 -0.3,3.3 -1.6,5 -0.6,0.8 -2.7,2.7 -3.8,2.8 0,-0.9 -0.2,-0.7 -0.2,-1.4 0,-1.8 1.4,-4.3 1.7,-6.6 0.1,-1 -2.6,-4.6 -3.3,-5 0.4,2 -0.8,6.5 -2.4,6.5 h -0.2 c -0.9,0 -1.8,-2.2 -1.8,-3.4 0,-3.9 2.6,-4.5 1.6,-8.8 -0,0 -2.2,4.5 -2.9,5.4 -0.6,0.6 -3.5,4.3 -3.5,4.9 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 93.3,82.5 c 0,-4.3 13.8,-4.3 13.8,0 v 55.6 c 0,1.3 -4.4,1.2 -5.9,1.2 h -2 c -1.5,0 -5.9,0.1 -5.9,-1.2 V 82.5 l 4e-4,0 z"}],G["AC.IC.FLAMMABLE LIQUID"]=[{type:"path",stroke:!1,d:"m 100.1,135.4 c -7.4,0 -11.3,-5.4 -13.1,-11.1 -2.1,-6.7 -2.4,-14.4 0.8,-20.2 5.9,-10.6 10.7,-21.6 11.9,-36.7 4,4.6 3.6,17.4 6.3,23.9 2.6,6.5 8.9,13.4 8.9,21 v 1.7 c 0,10 -4.5,21.3 -14.2,21.3 h -0.7 v 0 z m -0.6,1.7 h 1.9 c 10.1,0 15.4,-11.7 15.4,-21.9 v -3 c 0,-9.5 -7.7,-15.8 -9.9,-24.1 -2.4,-8.9 -1.7,-21.2 -9.1,-25.1 0,8.6 -1.3,16 -3.6,22.4 -1.2,3.3 -2.4,6.2 -3.6,9.5 -1.2,2.7 -3.1,5.8 -4.5,8.6 -1.4,2.7 -3,6.1 -2.6,10.5 0.4,4.4 0.6,7.6 1.8,11.3 2,5.9 6.7,11.9 14.3,11.9 z M 122,87 v 0.2 c 0,2.3 2.4,5.5 1.7,8.6 -1.3,-0.1 -3.5,-2.2 -4.1,-3.2 -0.5,-0.9 -0.9,-1.3 -1.2,-2.4 -0.3,-0.7 -0.6,-2.6 -0.8,-3 -1.2,0.9 -1.7,4 -1.7,6.1 0,3.2 2.6,8.4 4,10.4 1,1.3 2.5,2.3 4.1,3.1 0.6,0.3 4.8,2.4 5,2.4 0.9,0 7.6,-4.4 8.2,-5.1 0.9,-1.1 3.5,-8 3.3,-10.1 l -0.7,-6.8 h -0.4 c -0.1,3.5 -2.8,8.2 -5.9,8.4 0,0 0.3,-3.5 0.5,-4.4 0.3,-1.3 1,-2.9 1,-4.3 V 86.8 c 0,-1 -2.7,-4.6 -3.4,-5.1 0,3.7 -0.2,6 -2.7,7.2 -0.7,-0.6 -1.9,-1.7 -1.9,-3 v -1.4 c 0,-2.3 2.1,-4.7 2.1,-6.5 l 0,-0.2 -0.3,-1.9 c -1,0.2 -1.1,2 -1.5,2.9 -0.5,0.9 -1.2,1.9 -1.8,2.6 -0.9,1.2 -3.5,4.1 -3.5,5.7 z m -56.6,0 c 0,1.3 1.9,4.7 1.9,7 v 1.9 c -2.6,-0.2 -6.1,-5.2 -6.1,-8.6 -3.4,2.4 -0.7,11.4 0.9,14.1 1.5,2.6 1.8,3 4.4,4.7 0.4,0.3 6.1,3.1 6.2,3.1 1.3,0 4.1,-2.5 5.3,-3.2 2.5,-1.2 2.9,-1.7 4.2,-4.3 0.4,-0.9 1.6,-5.4 1.9,-6.6 0.4,-2.1 -0.5,-5.8 -0.5,-7.9 h -0.5 c -0.3,3.5 -2.9,8.4 -5.9,8.4 -0,-0.9 -0.2,-0.5 -0.2,-1.2 0,-2 1.5,-4.9 1.8,-7.1 0.2,-1.2 -2.7,-5.2 -3.5,-5.4 1,2.1 -1.1,6.1 -2.7,7 -0.9,-0.6 -1.9,-2.2 -1.9,-3.6 v -0.4 c 0,-3.7 2.7,-4.6 1.7,-9.1 -0.5,0.4 -0.8,2 -1.4,3 -0.7,1 -1,1.7 -1.8,2.7 -0.8,1 -3.6,4.2 -3.6,5.5 l 0,0 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 100.1,135.4 c -7.4,0 -11.3,-5.4 -13.1,-11.1 -2.1,-6.7 -2.4,-14.4 0.8,-20.2 5.9,-10.6 10.7,-21.6 11.9,-36.7 4,4.6 3.6,17.4 6.3,23.9 2.6,6.5 8.9,13.4 8.9,21 v 1.7 c 0,10 -4.5,21.3 -14.2,21.3 h -0.7 v 0 z"}],G["AC.IC.FLAMMABLE SOLID"]=[{type:"path",stroke:!1,d:"m 68.6,102 c 0,-2 1.9,-4.2 1.9,-6.3 v -1.5 c 0,-0.6 -0.1,-0.4 -0.4,-0.7 -0.8,3.7 -6.1,9.1 -6.1,10.4 0,1.6 1.9,4.6 1.9,8.2 -2.6,-0.2 -5.9,-4.9 -5.9,-8 -0.8,0.9 -1.5,2.6 -1.5,4.3 0,4.4 1.7,8.1 3.5,10.6 0.8,1.2 7,5.2 8.7,5.2 1.1,0 6.7,-3.7 7.3,-4.4 0.9,-1.2 3.2,-6.8 3.2,-8.6 0,-1.6 -0,-6.6 -0.9,-7.2 -1.1,4.8 -1.5,5.9 -5.4,8.1 0,-4.3 1.3,-5.7 1.3,-8.2 v -0.4 c 0,-0.1 -2.8,-4.4 -3,-4.6 0,2.4 -0.7,6.7 -2.6,6.7 -1,8e-4 -2,-2.4 -2,-3.7 z m 60.3,-0.4 c 0,-1.7 2.2,-4.5 2.2,-6.3 0,-0.7 -0.2,-1.6 -0.7,-1.9 -0.9,3.7 -5.9,8.9 -5.9,10.2 v 0.4 c 0,1.9 1.5,3.7 1.5,6.1 v 2.2 c -2.3,-0.6 -5.6,-4.9 -5.7,-8 -1,0.7 -1.5,3 -1.5,4.8 v 1.1 c 0,2.8 2.5,7.7 3.8,9.5 2,2.7 6.4,3.1 8.4,4.8 2.1,-1.1 3.1,-1.8 5.1,-2.9 2.6,-1.6 2.2,-1.5 3.5,-4.3 0.7,-1.4 1.7,-4.5 1.8,-6.2 0.1,-1.5 -0.1,-6.4 -0.9,-7 -0.8,3.5 -2.1,7.1 -5.4,8 -0,-0.7 -0.2,-0.7 -0.2,-1.5 v -0.2 c 0,-1.8 1.7,-4.9 1.5,-6.4 -0.1,-0.8 -2.5,-4.8 -3,-5.1 0,2.8 -0.5,6.7 -3,6.7 -0.4,-1.3 -1.5,-1 -1.5,-3.9 z m -35.6,1.9 v -20 l 20,-0.4 v 19.4 l -20,1 z m -13.9,-7.6 0,-16.8 10.8,4 v 19.8 c -1.2,-0.7 -10.9,-6.2 -10.9,-7 z m 1.5,-18.4 c 5.7,0 11.4,0 17.2,0 2.1,0 12.1,3.1 13.2,3.9 l -3.7,0.3 H 92.6 c -0.9,0 -11.1,-3.7 -11.7,-4.1 z m -3.5,-1.5 0,14.7 -0.3,6.7 c 2.2,1.2 5.3,3 7.5,4.5 1.9,1.2 5.5,4 8.1,4 7.6,0 15.3,-1.1 23.1,-1.1 l -0,-23.6 c -1,-0.5 -14.8,-5.4 -15.2,-5.4 l -3.9,-0.1 -19.3,0.4 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 80.9,77.5 c 5.7,0 11.4,0 17.2,0 2.1,0 12.1,3.1 13.2,3.9 l -3.7,0.3 H 92.6 c -0.9,0 -11.1,-3.7 -11.7,-4.1 z m -1.5,18.4 0,-16.8 10.8,4 v 19.8 c -1.2,-0.7 -10.9,-6.2 -10.9,-7 z m 13.9,7.6 v -20 l 20,-0.4 v 19.4 l -20,1 z"}],G["AC.IC.NON-FLAMMABLE GAS"]=[{type:"path",stroke:!1,d:"m 92.7,81.3 c 0,-4.6 14.7,-4.6 14.7,0 v 59.4 c 0,1.4 -4.7,1.3 -6.3,1.3 h -2.1 c -1.6,0 -6.3,0.1 -6.3,-1.3 V 81.3 z m 5.7,-22 h -7 v 3.2 h 6.7 v 3.3 h -4 v 2.1 h 4 v 5.7 h -4.8 v 4.8 c -1.1,0.3 -2.1,1.7 -2.1,3.1 v 58.6 c 0,3.5 4,3.3 7.6,3.3 h 2.5 c 3.6,0 7.6,0.2 7.6,-3.3 V 81.9 c 0,-3 -1.9,-3 -1.9,-4 v -4.4 h -5 v -11.1 h 6.7 v -3.1 h -7.2 v -2.7 h -3.1 v 2.7 l -4e-4,0 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 92.7,81.3 c 0,-4.6 14.7,-4.6 14.7,0 v 59.4 c 0,1.4 -4.7,1.3 -6.3,1.3 h -2.1 c -1.6,0 -6.3,0.1 -6.3,-1.3 V 81.3 z"}],G["AC.IC.ORGANIC PEROXIDE"]=[{type:"path",stroke:!1,d:"m 132.1,128.2 v 6.2 l -36.6,2.2 v -6.7 l 0.6,0.1 36,-1.7 z m -63.8,-11.1 c 2.6,1.7 26.1,12.1 26.1,13.2 v 5.9 l -0.1,0.2 -26,-14.7 v -4.6 z m 61.1,10 c -4.7,0 -33,2.1 -34.6,1.5 -1.8,-0.7 -23.8,-11.4 -24.4,-12 3.8,0 7.5,0 11.3,0 2.9,0 8.8,-0.8 10,1.1 l -9,0.6 2.1,0.7 v 0.4 h -1.2 l -1.8,0.2 c 2,1.3 18.3,5.2 22.4,5.2 h 1.9 c 4.8,0 9.2,-1.3 13,-1.4 0.7,0 9.9,3.3 10.4,3.7 z m -25.4,-23.2 1.1,9.4 5.4,-6.8 -2.5,8.2 7.7,-4.3 -3.7,5.9 8.4,-0.8 -9.2,4.7 8.1,2.6 -14.4,1.7 c -3.3,0.2 -19,-3.7 -20.5,-4.8 l 10.3,-0.6 -6.2,-4.5 6.8,0.1 -1.7,-5.9 5.1,5.2 0.7,-7.5 2.6,3.9 2.1,-6.6 z m 0.7,-2.2 -0.1,-0.6 h -0.3 l -1.8,6.2 -0.4,-0 -2.4,-3.7 -0,2.1 -0.7,-1.1 -0.6,6.2 -4.9,-5.4 0.6,2.6 -1.5,-1.2 1.8,6.2 -2.5,0 -4,-0.2 1.5,1.1 -2.4,-0.1 1.5,1.4 h -21.3 c -0.1,0.5 -0.2,0.5 -0.2,1.1 v 5 c 0,1.6 4.8,3.7 6.2,4.4 2.3,1.3 4.6,2.4 6.9,3.8 4.4,2.7 9.2,5 13.7,7.6 1.8,1.1 6.8,0.5 9.6,0.2 2.8,-0.3 7.2,-0.2 9.9,-0.7 2.8,-0.5 7,-0.4 9.9,-0.7 2.7,-0.4 7.4,-0.6 10,-0.7 v -7.9 c 0,-0.9 -5.3,-2.4 -6.4,-2.8 -1.6,-0.5 -5.7,-1.9 -6.8,-2.6 l 2.9,-0.3 -8.4,-2.2 0,-0.4 9.2,-4.7 -1.5,0.2 1.7,-1.1 -10,1 3.9,-6.6 -8.1,4.7 2.9,-10 -6.4,8.4 -1.1,-11.1 -0.6,1.9 z m 1.1,-6.2 c -5.6,0 -9.6,-3.4 -9.6,-9 v -1.1 c 0,-4.8 9,-12.5 9,-21.1 2.8,3.2 2.2,7.6 4.3,11 1.2,1.9 5.3,7.8 5.3,9.9 v 1.1 c 0,5.3 -3.7,9.2 -9,9.2 z m -10.9,-10 v 1.1 c 0,13.7 21.1,13.2 21.1,0.8 v -2.1 c 0,-3.5 -4.5,-8.3 -5.9,-11.7 -2.2,-5.1 -1.1,-8.8 -6.2,-11.6 0,11.2 -9,17.6 -9,23.5 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 105.7,95.5 c -5.6,0 -9.6,-3.4 -9.6,-9 v -1.1 c 0,-4.8 9,-12.5 9,-21.1 2.8,3.2 2.2,7.6 4.3,11 1.2,1.9 5.3,7.8 5.3,9.9 v 1.1 c 0,5.3 -3.7,9.2 -9,9.2 z m -1.8,8.4 1.1,9.4 5.4,-6.8 -2.5,8.2 7.7,-4.3 -3.7,5.9 8.4,-0.8 -9.2,4.7 8.1,2.6 -14.4,1.7 c -3.3,0.2 -19,-3.7 -20.5,-4.8 l 10.3,-0.6 -6.2,-4.5 6.8,0.1 -1.7,-5.9 5.1,5.2 0.7,-7.5 2.6,3.9 2.1,-6.6 z m -35.6,13.2 c 2.6,1.7 26.1,12.1 26.1,13.2 v 5.9 l -0.1,0.2 -26,-14.7 v -4.6 z m 63.8,11.1 v 6.2 l -36.6,2.2 v -6.7 l 0.6,0.1 36,-1.7 z m -2.7,-1.1 c -4.7,0 -33,2.1 -34.6,1.5 -1.8,-0.7 -23.8,-11.4 -24.4,-12 3.8,0 7.5,0 11.3,0 2.9,0 8.8,-0.8 10,1.1 l -9,0.6 2.1,0.7 v 0.4 h -1.2 l -1.8,0.2 c 2,1.3 18.3,5.2 22.4,5.2 h 1.9 c 4.8,0 9.2,-1.3 13,-1.4 0.7,0 9.9,3.3 10.4,3.7 z"}],G["AC.IC.OXIDIZER"]=[{type:"path",stroke:!1,d:"m 80.9,135.3 0,0.2 0,4.2 0,0.2 0.2,0 40.7,0 0.2,0 0,-0.2 0,-4.2 0,-0.2 -0.2,0 -40.7,0 -0.2,0 z m 6.5,-20.7 c 0,-7.4 6.1,-14 13.4,-14 h 1.1 c 7.5,0 13.6,6.6 13.6,14 0,7.1 -6.2,13.9 -13.2,13.9 h -1.9 c -6.8,-0 -13,-6.8 -13,-13.9 z m 12.8,-35.9 c -0.7,0 -2.1,-2.1 -2.3,-2.9 -0.3,-1.2 -0.4,-3 0,-4.4 0.5,-2.1 2.8,-5.9 2.8,-7.5 0,-1.1 -0.1,-3 -1.3,-3.1 -1,4.4 -2.1,4.9 -4.1,8 -1,1.5 -4.7,5.8 -4.7,7.3 v 0.4 c 0,2.4 3.1,8.1 2.7,10.5 l -0.2,1.7 c -3.5,-0.8 -8.1,-7.3 -8.1,-12 -1.4,0.1 -2.5,4.4 -2.5,6.1 v 2.9 c 0,5.7 3.3,8.3 4.2,12 -2.7,-1.4 -4,-2.2 -5.9,-4.4 -1.1,-1.2 -3.7,-5.6 -4.1,-5.9 -1.1,2.4 1.7,10.3 2.4,12.1 0.7,1.7 1.4,3.5 2.3,5 1.1,1.8 2.2,2.6 3.2,4.1 0,1.7 -0.5,2.4 -0.6,4.7 -0,1.8 -0,2.6 0.2,4.6 0.2,2.1 2.1,6.1 3.2,7.3 2.4,2.6 2.4,2.8 5.6,4.8 2,1.3 4.9,2.2 8.1,2.2 h 0.6 c 6.4,0 11.4,-3.5 14.2,-7.2 3.8,-5.2 3.8,-9.9 2.2,-16.7 3.5,-6.6 5.9,-9.3 5.9,-19.7 v -0.4 l -0.4,-4 c -0.1,0 -3.3,6.2 -3.8,7 -1,1.5 -3.7,4.8 -5.7,5 0.1,-3.2 2.1,-6.2 2.1,-9.4 v -2.2 l -1.1,-8 c -1,0.7 -1.5,5.9 -3,7.7 -0.4,0.5 -5.6,5.5 -5.6,3.6 v -1.7 c 0,-3.1 2.1,-6.3 2.1,-9 v -1.3 c 0,-0.8 -3.9,-6.5 -4.6,-6.9 0,2.3 -0.2,4.4 -0.7,6.2 -0.3,1.1 -2,3.7 -3,3.7 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 87.4,114.5 c 0,-7.4 6.1,-14 13.4,-14 h 1.1 c 7.5,0 13.6,6.6 13.6,14 0,7.1 -6.2,13.9 -13.2,13.9 h -1.9 c -6.8,-0 -13,-6.8 -13,-13.9 z"}],G["AC.IC.RADIOACTIVE MATERIAL"]=[{type:"path",stroke:!1,d:"m 83.7,130.4 c -10.1,-5.6 -16.6,-17 -16.4,-28.5 l 17.8,-0 c -0.2,5 3.1,10.7 7.5,13.1 l -9,15.4 z m 49.1,-28.2 c 0.2,11.5 -6.4,22.9 -16.4,28.5 l -9,-15.4 c 4.4,-2.4 7.7,-8.1 7.6,-13.1 l 17.8,0 z M 83.5,73.8 c 9.9,-5.9 23,-5.9 32.9,0 l -8.9,15.5 c -4.3,-2.6 -10.9,-2.6 -15.1,0 l -8.9,-15.5 z m 26.5,28.5 c 0,5.5 -4.4,9.9 -9.9,9.9 -5.5,0 -9.9,-4.4 -9.9,-9.9 0,-5.5 4.4,-9.9 9.9,-9.9 5.5,0 9.9,4.4 9.9,9.9 z"}],G["AC.IC.SPONTANEOUSLY COMBUSTIBLE MATERIAL"]=[{type:"path",stroke:!1,d:"m 101.2,128.4 -2.1,0 0,12.6 2.1,0 z m 26.5,0.6 -8.7,-8.6 -1.2,1.2 8.7,8.7 z m -45,-7.5 -1.3,-1.3 -8.8,8.8 1.3,1.4 z m 55.5,-19.7 -12.2,0 0,1.9 12.2,0 z m -63.3,0 -13.1,0 0,1.9 12.8,0 z m 52.8,-25.3 -1.3,-1.2 -9,8.7 1.5,1.5 z m -46.1,9.1 1.4,-1.5 -9.3,-9.2 -0,0.2 -1.2,1.3 z m 19.5,-26.5 -2.1,0 0,9.7 2.1,0 z M 91.7,88 v 0.6 c 0,0.5 1.4,4.3 1.7,5.1 0.7,2.2 0.7,3.4 0.7,5.7 -1.2,-0.1 -4.4,-3 -5.1,-4 -1.7,-2.5 -1.7,-3.4 -2.5,-6.7 -0.9,0.7 -1.9,3.8 -1.9,5.5 v 2.3 c 0,5.6 3.6,8.4 3.8,11.1 -0.9,-0.2 -4.8,-3.2 -5.4,-3.8 -0.7,-0.8 -3.3,-5.3 -3.8,-5.4 0,3.9 1.1,6.9 2.1,9.7 0.6,1.5 1.2,2.9 1.7,4.2 0.8,2.2 1.4,2 2.6,3.5 2.9,3.6 9.4,8.3 15.7,8.3 h 0.8 c 2.2,0 6.4,-1.7 7.9,-2.6 2.4,-1.3 4.5,-2.7 6,-4.8 2.8,-3.8 5.3,-9.3 5.3,-16 v -2.7 l -0.2,-2.3 h -0.4 c -1.1,4.7 -4.2,8.4 -8,10.5 0,-3.6 1.3,-5.3 1.9,-8.4 0.4,-2.4 -1,-6.9 -1,-9.2 -0.4,0.3 -1.2,5.4 -2.5,7 -0.3,0.4 -5.1,5.2 -5.1,3.1 v -2.1 c 0,-3 1.9,-4.8 1.9,-8.2 0,-0.8 -3.5,-6 -4.1,-6.3 l 0.1,0.9 c 0,1.2 -0.4,4.1 -0.7,5 -0.2,0.5 -2.3,3 -2.6,3 -1.2,0 -2.5,-2.9 -2.5,-4.4 v -1.1 c 0,-2.9 2.8,-6.1 2.6,-8 l -0.5,-2.9 c -0.5,0.4 -1.2,3 -1.6,3.9 -0.6,1.3 -1.4,2.2 -2.2,3.2 C 95.4,82.4 91.7,87.1 91.7,88 z"}],G["AC.IC.UNEXPLODED ORDNANCE"]=e("UXO"),G["AC.IC.TOXIC INFECTIOUS MATERIAL"]=[{type:"path",stroke:!1,d:"m 104.6,116.2 c 0,-3.6 0.9,-4.6 1.5,-7.3 l -2.5,-1.2 c -2.4,2.1 -4.4,1.6 -6.8,0 l -2.5,1.4 c 0.2,2.6 2,3.9 1.5,8.7 -0.4,3.1 -1.1,5.8 -2.6,7.8 -2.9,3.9 -7,7.4 -13.7,7.4 h -1 c -4.7,0 -10.2,-3.2 -12,-6 l -1.2,0.6 c 3.3,4.9 11.4,10 19.8,10 h 0.2 c 6.4,0 10.9,-2.7 14.8,-5.3 3.7,2.5 7.6,5 13.8,5 h 3 c 3.8,0 8.2,-1.6 10.6,-3.2 1.8,-1.2 6.7,-4.5 7.2,-6.6 -1.1,-0.3 -0.5,-0.5 -1.3,-0.5 -0.5,0 -1.7,1.9 -2.2,2.3 -0.8,0.6 -1.8,1.1 -2.6,1.6 -1.4,0.9 -4.7,1.8 -7,1.8 h -1.8 c -7.9,0 -15.3,-7.7 -15.3,-15.8 v -0.8 z m 2.3,3.5 2.5,4.3 c 3.2,-0.8 7.7,-5.2 9.3,-7.8 2.2,-3.7 3.5,-7.8 3.5,-13.8 h -5.5 c 0.1,5.2 -0.1,7.2 -2.5,10.8 -1.2,1.8 -1.7,2.1 -3.2,3.6 -1,1 -3.6,2.2 -4.1,2.9 z m -28.6,-13.8 c 0,7.4 6.8,16.7 12.5,18 l 2.3,-4.5 c -6.5,-3.4 -9.5,-8 -9.5,-17.1 h -5.3 v 3.5 z m -2.5,-17 v 1 c 0,0.5 -5,3.2 -5.8,3.8 -1.6,1.1 -3.5,3.2 -4.7,4.8 -2.8,3.6 -4.8,8.1 -4.8,14.2 0,4.4 1,6 1.8,9.4 l 1.2,-0.6 c -0.1,-1.5 -0.8,-2.3 -0.8,-4 v -2 c 0,-7.8 7.9,-15.6 16,-15.6 h 1.8 c 2.6,0 5.9,1.3 7.5,2.2 2.2,1.3 3.6,3.6 5.3,4.8 l 2.3,-1 v -1.8 c 0,-2 1.6,-3.9 3.3,-4.3 v -3 c -7.6,-0.2 -15.3,-7.8 -15.3,-15.5 v -1.5 c 0,-4.1 2.1,-8.6 4.2,-10.6 1.3,-1.2 2.5,-2.3 4,-3.2 0.8,-0.5 5.1,-1.5 5.1,-2.5 v -1 c -6.6,1.6 -11.7,3.8 -15.4,8.5 -4.3,5.5 -5.7,9 -5.7,17.9 l 0,0 z m 27.6,-25.4 c 0,0.6 4.2,2.1 5,2.5 1.2,0.6 3.5,2.4 4.2,3.5 2.1,2.9 4.3,6 4.3,11 0,8.2 -7.4,16.3 -15.6,16.3 v 3 c 2.3,0.2 4.4,3.4 3.3,5.8 0.6,0.2 2.5,1.2 2.5,1.2 0.7,0 5,-7 14.3,-7 h 0.2 c 4.5,0 9,2.6 11.1,5 1.7,1.9 5.3,7.6 4.8,11.4 l -0.8,5.5 1.2,0.6 c 0.1,-0.9 0.8,-2.3 1.1,-3.6 0.3,-1.2 0.4,-3 0.4,-4.4 v -3.3 c 0,-8.4 -8.3,-18.8 -15,-20.3 0,-5 0.4,-6.4 -0.9,-10.9 -0.9,-2.8 -2.6,-6.4 -4.3,-8.3 -5.1,-5.3 -7.5,-7 -15.9,-9 v 1 l -4e-4,0 z m -15.8,22.6 2.8,4.8 c 3,-1.6 4.8,-3.3 9.5,-3.3 h 0.5 c 5.8,0 6.9,2.6 9.7,3.2 l 2.6,-4.7 c -9.5,-5 -15.7,-5 -25.1,0 z"}],G["AC.IC.TOXIC GAS"]=[{type:"path",stroke:!1,fill:!!t&&s,d:"m 90.2,102.3 c 0.6,-1.9 5.7,-1.9 11.3,-0 5.6,1.9 9.6,4.9 9,6.8 -0.6,1.9 -5.7,1.9 -11.3,0 -5.6,-1.9 -9.6,-4.9 -9,-6.8 z m 7.7,-22.2 c 10e-7,3.7 -1.7,6.7 -3.8,6.7 -2.1,-2e-6 -3.8,-3 -3.8,-6.7 2e-6,-3.7 1.7,-6.7 3.8,-6.7 2.1,0 3.8,3 3.8,6.7 z m 17,2.2 c 0,4.1 -2.8,7.3 -6.3,7.3 -3.5,2e-6 -6.3,-3.3 -6.3,-7.3 0,-4.1 2.8,-7.3 6.3,-7.3 3.5,0 6.3,3.3 6.3,7.3 z m -7.9,49.6 c -1,2.9 -8.5,2.9 -16.6,0 -8.2,-2.9 -13.9,-7.6 -12.9,-10.5 1,-2.9 8.5,-2.9 16.6,-0 8.2,2.9 13.9,7.6 12.9,10.5 z"},{type:"path",stroke:!1,d:"M 107.5 64.3 C 102.2 64.2 96.9 67.1 92.8 71.6 C 90.6 73.6 89.2 76.8 89.2 80.4 C 89.2 83 90 85.4 91.2 87.3 C 92.1 89.9 92.7 91.8 92.7 94.5 L 92.4 96.7 L 90.7 101.6 C 92.3 100.5 96.7 100.7 101.5 102.3 C 106.6 104 110.4 106.7 110.5 108.6 L 112 104.2 C 115.9 104 120.5 96.9 122.7 87.6 C 124.9 77.9 123.5 69.3 119.8 67.9 C 118.4 66.6 116.1 65.5 112.8 65.3 C 111.1 64.6 109.3 64.3 107.5 64.3 z M 94.1 73.4 C 94.4 73.4 94.6 73.4 94.8 73.5 C 95.1 73.6 95.3 73.8 95.6 73.9 C 96.2 74.4 96.8 75.3 97.2 76.3 C 97.5 77.1 97.7 77.9 97.8 78.7 C 97.9 79.2 97.9 79.6 97.9 80.1 C 97.9 80.5 97.9 81 97.8 81.4 C 97.7 82.3 97.5 83.1 97.2 83.8 C 96.9 84.7 96.4 85.4 95.9 85.9 C 95.6 86.2 95.2 86.5 94.8 86.6 C 94.7 86.6 94.6 86.7 94.5 86.7 C 94.3 86.7 94.2 86.7 94.1 86.7 C 93.8 86.7 93.6 86.7 93.3 86.6 C 93 86.5 92.6 86.2 92.3 85.9 C 92.2 85.8 92.1 85.7 92 85.6 C 91.6 85.1 91.2 84.5 91 83.8 C 90.8 83.4 90.7 83.1 90.6 82.7 C 90.4 81.9 90.3 81 90.3 80.1 C 90.3 79.1 90.4 78.3 90.6 77.5 C 90.7 77.1 90.8 76.7 91 76.3 C 91.2 75.6 91.6 75 92 74.5 C 92.2 74.3 92.4 74.1 92.6 73.9 C 92.9 73.8 93.1 73.6 93.3 73.5 C 93.6 73.4 93.8 73.4 94.1 73.4 z M 108.6 75 C 110.4 75 112.1 75.9 113.3 77.3 C 113.3 77.4 113.4 77.5 113.5 77.6 C 113.5 77.6 113.5 77.6 113.5 77.7 C 113.6 77.8 113.7 78 113.8 78.2 C 113.8 78.3 113.9 78.3 113.9 78.4 C 114 78.5 114 78.5 114 78.6 C 114.1 78.7 114.2 78.8 114.2 79 C 114.3 79.1 114.3 79.3 114.4 79.4 C 114.4 79.5 114.5 79.5 114.5 79.6 C 114.5 79.7 114.6 79.9 114.6 80 C 114.6 80.1 114.6 80.2 114.7 80.3 C 114.7 80.4 114.7 80.6 114.8 80.8 C 114.9 81.3 114.9 81.8 114.9 82.3 C 114.9 84.6 114 86.6 112.6 88 C 112 88.6 111.3 89 110.5 89.3 C 110.3 89.4 110.1 89.5 109.9 89.5 C 109.5 89.6 109 89.7 108.6 89.7 C 108.2 89.7 107.7 89.6 107.3 89.5 C 107.3 89.5 107.3 89.5 107.3 89.5 C 107.1 89.5 106.9 89.4 106.7 89.3 C 105.9 89 105.2 88.6 104.6 88 C 104 87.4 103.5 86.6 103.1 85.8 C 102.9 85.4 102.7 85 102.6 84.5 C 102.5 84.3 102.5 84 102.4 83.8 C 102.4 83.5 102.4 83.3 102.3 83.1 C 102.3 82.8 102.3 82.6 102.3 82.3 C 102.3 82 102.3 81.8 102.3 81.5 C 102.3 81.5 102.4 81.5 102.4 81.4 C 102.4 81 102.5 80.5 102.6 80.1 C 102.6 80.1 102.6 80.1 102.6 80 C 103.4 77.1 105.8 75 108.6 75 z M 88.8 104 C 86.6 104 84.8 104.4 83.9 105.2 L 83.8 105.2 L 83.7 105.3 C 83.4 105.6 83.2 105.9 83.1 106.2 C 83 106.5 83 106.8 83 107.2 L 78.1 120.5 C 80.2 118.5 86.9 118.7 94.2 121.3 C 101.2 123.8 106.4 127.7 107.1 130.6 L 111.8 117.8 C 112.2 117.5 112.5 117.2 112.7 116.8 C 113.7 113.8 107.9 109.1 99.8 106.2 C 95.7 104.8 91.8 104 88.8 104 z M 82 120.8 C 79 120.8 76.9 121.5 76.4 123 C 75.4 125.9 81.1 130.7 89.3 133.6 C 97.4 136.5 104.9 136.5 105.9 133.6 C 107 130.6 101.2 125.9 93 123 C 89 121.5 85 120.8 82 120.8 z M 86.1 125.6 C 87.4 125.5 89.4 125.9 91.5 126.6 C 94.8 127.8 97.2 129.6 96.9 130.6 C 96.5 131.6 93.5 131.5 90.1 130.3 C 86.8 129.1 84.4 127.3 84.7 126.3 C 84.9 125.9 85.4 125.7 86.1 125.6 z "}],G["AC.IC.AFTERSHOCK"]=[{type:"path",stroke:!1,d:"m 99,62.5 -0,0 -0,0 -0.9,0 -0,0 -0,0 -0.9,0.1 -0,0 -0,0 -0.9,0.1 -0,0 -0,0 -0.9,0.1 -0,0 -0,0 -0.9,0.1 -0,0 -0,0 -0.9,0.1 -0,0 -0,0 -0.9,0.2 -0,0 -0,0 -0.7,0.1 0.6,2.7 0.7,-0.1 0,-0 0.8,-0.1 0,-0 0.8,-0.1 0,0 0.8,-0.1 0,0 0.9,-0.1 0,0 0.9,-0.1 0,0 0.9,-0.1 0,0 0.9,-0 0,0 0.9,-0 0,0 0,0 0.9,0 0,0 0.9,0 0,0 0.1,0 0.2,-2.8 -0.1,-0 -0,0 -0,0 -0.9,-0 -0,0 -0,0 -1,-0 -0,0 -0,0 z m 8.8,3.6 0.2,0 0,0 0.8,0.2 0,0 0.8,0.2 0,0 0.8,0.2 0,0 0.8,0.3 0,0 0,0 0.8,0.3 0,0 0.8,0.3 0,0 0.8,0.3 0,0 0.8,0.3 0,0 0.8,0.3 0,0 0.8,0.4 0,0 0,0 0.7,0.4 0,0 0.1,0 1.3,-2.5 -0.1,-0.1 -0,-0 -0,0 -0.8,-0.4 -0,-0 -0,0 -0.8,-0.4 -0,0 -0,-0 -0.8,-0.4 -0,-0 -0,0 -0.8,-0.4 -0,0 -0,-0 -0.8,-0.3 -0,-0 -0,0 -0.8,-0.3 -0,-0 -0,0 -0.8,-0.3 -0,0 -0,-0 -0.9,-0.3 -0,0 -0,0 -0.9,-0.3 -0,0 -0,0 -0.9,-0.2 -0,0 -0,-0 -0.9,-0.2 -0,0 -0,0 -0.2,-0.1 z m -22.7,-0.7 -0,0 -0,0 -0.8,0.4 -0,0 -0,0 -0.8,0.4 -0,0 -0,0 -0.8,0.4 -0,0 -0,0 -0.8,0.4 -0,0 -0,0 -0.8,0.4 -0,0 -0,0 -0.8,0.5 -0,0 -0,0 -0.8,0.5 -0,0 -0,0 -0.7,0.5 -0,0 -0,0 -0.7,0.5 -0,0 -0,0 -0.7,0.5 -0,0 -0,0 -0.7,0.5 -0,0 -0,0 -0.1,0.1 1.7,2.2 0.1,-0.1 0,-0 0.7,-0.5 0,-0 0.7,-0.5 0,-0 0.7,-0.5 0,-0 0.7,-0.5 0,-0 0.7,-0.4 0,-0 0.7,-0.4 0,-0 0.7,-0.4 0,-0 0.7,-0.4 0,-0 0,0 0.8,-0.4 0,-0 0.8,-0.3 0,-0 0.8,-0.3 0,-0 0.3,-0.1 -1,-2.6 z m 36.9,7.3 0.6,0.5 0,0 0.6,0.5 0,0 0.6,0.5 0,0 0.6,0.5 0,0 0.6,0.6 0,0 0,0 0.6,0.6 0,0 0.6,0.6 0,0 0.5,0.6 0,0 0.5,0.6 0,0 0.5,0.6 0,0 0.5,0.6 0,0 0.4,0.5 2.3,-1.7 -0.4,-0.6 -0,-0 0,-0 -0.6,-0.7 -0,-0 0,-0 -0.6,-0.7 -0,-0 -0,-0 -0.6,-0.7 -0,-0 -0,-0 -0.6,-0.7 -0,-0 -0,-0 -0.6,-0.6 -0,-0 -0,-0 -0.6,-0.6 -0,-0 -0,-0 -0.6,-0.6 -0,-0 -0,0 -0.7,-0.6 -0,-0 -0,0 -0.7,-0.6 -0,-0 -0,-0 -0.7,-0.6 -0,-0 -0,-0 -0.6,-0.5 z m -51,2.7 -0,0 -0,0 -0.6,0.7 -0,0 -0,0 -0.6,0.7 0,0 -0,0 -0.6,0.7 0,0 -0,0 -0.5,0.7 -0,0 -0,0 -0.5,0.7 -0,0 -0,0 -0.5,0.7 -0,0 0,0 -0.5,0.7 -0,0 0,0 -0.5,0.8 0,0 -0,0 -0.4,0.8 -0,0 0,0 -0.4,0.8 0,0 -0,0 -0.3,0.6 2.5,1.3 0.3,-0.6 0,-0 0.4,-0.7 0,-0 0.4,-0.7 0,-0 0.4,-0.7 0,-0 0.4,-0.7 0,-0 0.5,-0.7 0,-0 0.5,-0.7 0,-0 0.5,-0.7 0,-0 0.5,-0.6 0,-0 0.5,-0.6 0,-0 0.5,-0.6 0,-0 0.5,-0.5 -2.1,-1.9 z m 60.9,9.4 0.1,0.1 0,0 0,0 0.3,0.7 0,0 0.3,0.7 0,0 0.3,0.8 0,0 0.3,0.8 0,0 0.3,0.8 0,0 0,0 0.3,0.8 0,0 0.2,0.8 0,0 0.2,0.8 0,0 0.2,0.8 0,0 0.2,0.8 0,0 0.2,0.8 0,0 0,0.2 2.8,-0.5 -0,-0.3 -0,-0 0,-0 -0.2,-0.9 0,-0 0,-0 -0.2,-0.9 0,-0 -0,-0 -0.2,-0.9 0,-0 -0,-0 -0.2,-0.9 0,-0 -0,-0 -0.3,-0.8 -0,-0 0,-0 -0.3,-0.8 0,-0 -0,-0 -0.3,-0.8 0,-0 -0,-0 -0.3,-0.8 -0,-0 0,-0 -0.3,-0.8 0,-0 -0,-0 -0.3,-0.8 -0,-0 -0,-0 -0.4,-0.8 -0,-0 0,-0 -0.1,-0.2 z m -68.8,4.9 -0,0 0,0 -0.2,0.9 -0,0 0,0 -0.2,0.9 -0,0 0,0 -0.2,0.9 0,0 0,0 -0.2,0.9 0,0 -0,0 -0.1,0.9 0,0 0,0 -0.1,0.9 -0,0 0,0 -0.1,0.9 0,0 -0,0 -0.1,0.9 0,0 0,0 -0.1,0.9 0,0 0,0 -0,0.9 0,0 0,0 -0,0.9 0,0 0,0 0,0 1.4,-0 0.3,0 1.1,0 0,-0 0,-0.9 0,-0 0,-0.9 -0,0 0.1,-0.8 0,-0 0.1,-0.9 -0,0 0.1,-0.9 0.1,-0.9 -0,0 0.1,-0.8 0,-0 0.2,-0.8 0,-0 0.2,-0.8 0,-0 0.2,-0.8 0,-0 0.2,-0.8 0,-0 0.1,-0.2 -2.7,-0.8 z m 73,10.3 -0.6,0 0,0 0,0 -0,0.9 0,0 -0,0.9 0,0 -0.1,0.8 0,0 -0.1,0.9 0,0 -0.1,0.9 -0.1,0.9 0,0 -0.1,0.8 0,0 -0.2,0.8 -0,0 -0.2,0.8 -0,0 -0.2,0.8 0,0 -0.2,0.8 -0,0 -0.1,0.2 2.7,0.8 0.1,-0.2 0,-0 0,-0 0.2,-0.9 0,-0 0,-0 0.2,-0.9 0,-0 0,-0 0.2,-0.9 0,-0 0,-0 0.2,-0.9 0,-0 0,-0 0.1,-0.9 0,-0 0,-0 0.1,-0.9 0,-0 0,-0 0.1,-0.9 0,-0 0,-0 0.1,-0.9 0,-0 0,-0 0.1,-0.9 0,-0 0,-0 0,-0.9 0,-0 0,-0 0,-0.9 -1.4,-0 1.4,-0 0,-0 z m -73.9,6.4 0,0.3 0,0 0,0 0.2,0.9 0,0 0,0 0.2,0.9 0,0 0,0 0.2,0.9 0,0 0,0 0.2,0.9 0,0 0,0 0.3,0.8 0,0 0,0 0.3,0.8 0,0 0,0 0.3,0.8 0,0 0,0 0.3,0.8 0,0 0,0 0.3,0.8 0,0 0,0 0.3,0.8 0,0 0,0 0.4,0.8 0,0 0,0 0.1,0.2 2.5,-1.3 -0.1,-0.1 -0,-0 -0.3,-0.7 -0,-0 -0.3,-0.7 -0,-0 -0.3,-0.8 -0,-0 -0.3,-0.8 -0,-0 -0.3,-0.8 -0,-0 0,-0 -0.3,-0.8 -0,-0 -0.2,-0.8 -0,-0 -0.2,-0.8 0,-0 -0.2,-0.8 -0,-0 -0.2,-0.8 -0,-0 -0.2,-0.8 0,-0 -0,-0.2 z m 69.4,9.4 -0,0 -0.4,0.7 -0,0 -0.4,0.7 -0,0 -0.4,0.7 -0,0 -0.4,0.7 -0,0 -0.5,0.7 -0,0 -0.5,0.7 -0,0 -0.5,0.7 -0,0 -0.5,0.6 -0,0 -0.5,0.6 -0,0 -0.5,0.6 -0,0 -0.5,0.6 2.1,1.9 0.5,-0.6 0,-0 0,-0 0.6,-0.7 0,-0 0,-0 0.6,-0.7 0,-0 0,-0 0.6,-0.7 0,-0 0,-0 0.5,-0.7 0,-0 0,-0 0.5,-0.7 0,-0 0,-0 0.5,-0.7 0,-0 0,-0 0.5,-0.7 0,-0 0,-0 0.5,-0.8 0,-0 0,-0 0.4,-0.8 0,-0 0,-0 0.4,-0.8 0,-0 0,-0 0.3,-0.6 -2.5,-1.3 z m -62.8,6.1 0.4,0.6 0,0 0,0 0.6,0.7 0,0 0,0 0.6,0.7 0,0 0,0 0.6,0.7 0,0 0,0 0.6,0.7 0,0 0,0 0.6,0.6 0,0 0,0 0.6,0.6 0,0 0,0 0.6,0.6 0,0 0,0 0.7,0.6 0,0 0,0 0.7,0.6 0,0 0,0 0.7,0.6 0,0 0,0 0.6,0.5 1.7,-2.2 -0.6,-0.5 -0,-0 -0.6,-0.5 -0,-0 -0.6,-0.5 -0,-0 -0.6,-0.5 -0,-0 -0.6,-0.6 -0,-0 -0,-0 -0.6,-0.6 -0,-0 -0.6,-0.6 -0,-0 -0.5,-0.6 -0,-0 -0.5,-0.6 -0,-0 -0.5,-0.6 -0,-0 -0.5,-0.6 -0,-0 -0.4,-0.5 z m 53.1,5.4 -0,0 -0.7,0.5 -0,0 -0.7,0.5 -0,0 -0.7,0.5 -0,0 -0.7,0.5 -0,0 -0.7,0.4 -0,0 -0.7,0.4 -0,0 -0.7,0.4 -0,0 -0.7,0.4 -0,0 -0,0 -0.8,0.4 -0,0 -0.8,0.3 -0,0 -0.8,0.3 -0,0 -0.3,0.1 1,2.6 0.4,-0.1 0,-0 0,0 0.8,-0.4 0,0 0,-0 0.8,-0.4 0,-0 0,0 0.8,-0.4 0,0 0,-0 0.8,-0.4 0,0 0,-0 0.8,-0.4 0,-0 0,0 0.8,-0.5 0,0 0,-0 0.8,-0.5 0,-0 0,0 0.7,-0.5 0,0 0,-0 0.7,-0.5 0,-0 0,0 0.7,-0.5 0,-0 0,-0 0.7,-0.5 0,-0 0,-0 0.1,-0.1 -1.7,-2.2 z m -40.4,5.6 0.1,0.1 0,0 0,0 0.8,0.4 0,0 0,0 0.8,0.4 0,0 0,0 0.8,0.4 0,0 0,0 0.8,0.4 0,0 0,0 0.8,0.3 0,0 0,0 0.8,0.3 0,0 0,0 0.8,0.3 0,0 0,0 0.9,0.3 0,0 0,0 0.9,0.3 0,0 0,0 0.9,0.2 0,0 0,0 0.9,0.2 0,0 0,0 0.2,0.1 0.6,-2.7 -0.2,-0 -0,-0 -0.8,-0.2 -0,-0 -0.8,-0.2 -0,-0 -0.8,-0.2 -0,-0 -0.8,-0.3 -0,-0 -0,0 -0.8,-0.3 0,-0 -0.8,-0.3 -0,-0 -0.8,-0.3 -0,-0 -0.8,-0.3 -0,-0 -0.8,-0.3 -0,-0 -0.8,-0.4 -0,0 -0,-0 -0.7,-0.4 -0,-0 -0.1,-0 z m 25.6,1.1 -0,0 -0.8,0.1 -0,0 -0.8,0.1 -0,0 -0.8,0.1 0,-0 -0.9,0.1 0,-0 -0.9,0.1 -0,0 -0.9,0.1 -0,0 -0.9,0 -0,0 -0.9,0 -0,0 -0,0 -0.9,-0 -0,0 -0.9,-0 -0,0 -0.1,0 -0.2,2.8 0.1,0 0,0 0,0 0.9,0 0,0 0,0 1,0 0,0 0,0 1,-0 0,0 0,0 0.9,-0 0,0 0,0 0.9,-0.1 0,0 0,0 0.9,-0.1 0,-0 0,0 0.9,-0.1 0,0 0,0 0.9,-0.1 0,-0 0,0 0.9,-0.1 0,0 0,0 0.9,-0.2 0,0 0,0 0.7,-0.1 -0.6,-2.7 z m -7.2,-58.9 -0,1.2 0.1,0 0,0 1.3,0 0,-0 1.3,0.1 1.1,0.1 0.1,0 0,0 1.1,0.2 0.1,0 0.7,0.1 0.7,-3.1 -0.7,-0.2 -0,0 -0,-0 -1.3,-0.2 -0,0 -0,-0 -1.3,-0.2 -0,0 -0,0 -1.3,-0.1 -0,0 -0.1,0 -1.3,-0 -0,0 -0,0 -0,0 z m -5.5,-1.4 -0,0 -0,0 -1.3,0.3 -0,0 -0,0 -1.2,0.3 -0,0 -0,0 -1.2,0.4 -0,0 -0,0 -0.9,0.3 1.1,3 0.8,-0.3 0.1,-0 0,0 1.1,-0.4 0,-0 1.1,-0.3 1.2,-0.3 0.1,-0 1.1,-0.2 -0.6,-3.1 z m 14.8,4.4 0.2,0.1 0.1,0 1.1,0.5 1,0.5 0.1,0 1,0.5 0,0 0,0 0.9,0.6 0.1,0 0.5,0.4 1.8,-2.6 -0.6,-0.4 -0,-0 -0,-0 -1.1,-0.7 -0,-0 -0,-0 -1.1,-0.6 -0,-0 -0,-0 -1.1,-0.6 -0,-0 -0,-0 -1.1,-0.5 -0,-0 -0,-0 -0.3,-0.1 z m -23.6,-1.1 -0,0 -0,0 -1.1,0.7 -0,0 -0,0 -1,0.7 -0,0 -0,0 -1,0.8 -0,0 -0,0 -0.9,0.8 -0,0 -0,0 -0.8,0.7 2.2,2.4 0.7,-0.7 0.1,-0.1 0.8,-0.7 0,-0 0,-0 0.9,-0.7 0.1,-0 0.9,-0.6 0.1,-0 0.9,-0.6 0,-0 0,-0 -0.4,-0.6 -1.2,-2.2 z m 31.5,6.2 0.1,0.1 0,0 0,0 0.8,0.8 0.1,0.1 0.7,0.8 0.1,0.1 0.7,0.8 0,0 0,0.1 0.6,0.9 0,0.1 0,0 0.5,0.7 2.7,-1.8 -0.5,-0.8 -0,-0 -0,-0 -0.7,-1 -0,-0 -0,-0 -0.8,-0.9 -0,-0 -0,-0 -0.8,-0.9 -0,-0 -0,-0 -0.9,-0.9 -0,-0 -0,-0 -0.1,-0.1 z m -40.1,1.8 -0,0 -0,0 -0.7,1 -0,0 -0,0 -0.6,1.1 -0,0 -0,0 -0.6,1.1 -0,0 -0,0 -0.5,1.1 -0,0 -0,0 -0,0.1 2.4,1 0.5,0.3 0,-0 0.5,-1 0,-0.1 0,-0 0.5,-0.9 0,-0.1 0.6,-0.9 0.6,-1 0,-0 0,-0.1 0.6,-0.8 -2.6,-1.9 z m 45.4,5.9 0.4,1.1 0,0.1 0.3,1 0,0.1 0.3,1.1 0.3,1.1 0.2,1 3.1,-0.6 -0.2,-1.1 0,-0 -0,-0 -0.3,-1.2 -0,-0 -0,-0.1 -0.3,-1.2 -0,-0 -0,-0 -0.4,-1.2 -0,-0 -0,-0 -0.5,-1.1 z m -49.6,3.8 -0,0 0,0 -0.2,1.3 0,0 -0,0 -0.2,1.3 -0,0 0,0 -0.1,1.3 0,0 0,0.1 -0,1.3 0,0 0,0 0,0 1.9,-0 1.3,0 0,-0.1 0,-0 0,-1.2 0.1,-1.1 0,0 0.1,-1.2 0,-0.1 0,-0 0.2,-1.1 0.2,-0.9 -3.1,-0.7 z m 52.8,5.5 -1.2,-0 0,0.1 0,0 -0,1.2 -0.1,1.1 -0,0 -0.1,1.2 0,0 -0,0.1 -0.2,1.1 -0.2,0.9 3.1,0.8 0.2,-0.9 0,-0 0,-0 0.2,-1.3 0,-0 0,-0 0.2,-1.3 0,-0 0,-0 0.1,-1.3 0,-0 0,-0.1 0,-1.3 -1.6,-0 1.6,-0 0,-0 z m -53,4.3 0.2,1.1 0,0 0,0 0.3,1.2 0,0 0,0.1 0.3,1.2 0,0 0,0 0.4,1.2 0,0 0,0 0.5,1.1 3,-1.2 -0.4,-1 -0,-0.1 -0.3,-1 -0,-0.1 -0.3,-1.1 -0.3,-1.1 -0.2,-1 z m 49.9,4.9 -0.5,1 -0,0.1 -0,0 -0.5,1 -0,0.1 -0.6,0.9 -0.6,1 -0,0 -0,0.1 -0.6,0.8 2.6,1.9 0.6,-0.9 0,-0 0,-0 0.7,-1 0,-0 0,-0 0.6,-1.1 0,-0 0,-0 0.6,-1.1 0,-0 0,-0 0.5,-1.1 0,-0 0,-0 0,-0 -2.2,-0.9 -0.8,-0.3 z m -46,5 0.5,0.8 0,0 0,0 0.7,1 0,0 0,0 0.8,0.9 0,0 0,0 0.8,0.9 0,0 0,0 0.9,0.9 0,0 0,0 0.1,0.1 2.2,-2.3 -0.1,-0.1 -0,-0 -0,-0 -0.8,-0.8 -0.1,-0.1 -0.7,-0.8 -0.1,-0.1 -0.7,-0.8 -0,-0 -0,-0.1 -0.6,-0.9 -0.1,-0.1 -0.5,-0.7 z m 40,3.3 -0.1,0.1 -0.8,0.7 -0,0 -0,0 -0.9,0.7 -0.1,0 -0.9,0.6 -0.1,0 -0.9,0.6 0,-0 -0.1,0 0,0 -0,0 0.3,0.4 1.3,2.4 0,-0 0,-0 0,-0 1.1,-0.7 0,-0 0,-0 1,-0.7 0,-0 0,-0 1,-0.8 0,-0 0,-0 0.9,-0.8 0,-0 0,-0 0.8,-0.7 -2.2,-2.4 z m -32.6,4.4 0.6,0.4 0,0 0,0 1.1,0.7 0,0 0,0 1.1,0.6 0,0 0,0 1.1,0.6 0,0 0,0 1.1,0.5 0,0 0,0 0.3,0.1 1.1,-3 -0.2,-0.1 -0.1,-0 -1.1,-0.5 -1,-0.5 -0.1,-0 -1,-0.6 0,0 -0.9,-0.6 -0.1,-0 -0.5,-0.4 z m 24.5,0.3 -0.1,0 -1.1,0.3 -0.1,0 -1.1,0.3 -1.2,0.3 -0.1,0 -1.1,0.2 0.6,3.1 1.2,-0.2 0,0 0,-0 1.3,-0.3 0,0 0,-0 1.2,-0.3 0,-0 0,-0 1.2,-0.4 0,-0 0,-0 0.9,-0.3 -1.1,-3 z m -14.8,3.9 0.7,0.2 0,0 0,0 1.3,0.2 0,0 0,0 1.3,0.2 0,0 0,0 1.3,0.1 0,0 0.1,0 1.3,0 0,0 0,0 0,0 -0.1,-1.6 0,-0.1 0,-1.5 -0.1,0 -1.3,-0 0,0 -1.3,-0.1 -1.1,-0.1 -0.1,-0 -0,0 -1.1,-0.2 -0.1,-0 -0.7,-0.1 z m 6.3,-43.1 -0.4,0 0.1,4 0.3,-0 0.1,0 0.1,0 0.6,0 0.1,0 0.6,0 0.1,0 0.6,0.1 0.1,0 0.6,0.1 0.7,0.1 0.1,0 0.1,0 0.6,0.2 0.5,0.2 0.1,0 0.5,0.2 0.1,0 0,0 0.5,0.2 0.1,0 0.4,0.2 1.8,-3.6 -0.5,-0.3 -0,-0 -0.1,-0 -0.7,-0.3 -0.1,-0 -0.1,-0 -0.7,-0.3 -0,-0 -0.1,-0 -0.7,-0.2 -0.1,-0 -0,-0 -0.7,-0.2 -0.1,-0 -0.1,-0 -0.7,-0.2 -0.1,-0 -0.1,-0 -0.8,-0.1 -0,-0 -0.1,-0 -0.8,-0.1 -0.1,-0 -0.1,0 -0.8,-0.1 -0.1,0 -0.1,0 -0.8,-0 -0.1,-0 z m -5.1,0.7 -0.1,0 -0,0 -0.7,0.2 -0.1,0 -0.1,0 -0.7,0.3 -0,0 -0.1,0 -0.7,0.3 -0.1,0 -0,0 -0.7,0.3 -0,0 -0,0 -0.7,0.4 -0,0 -0.1,0 -0.6,0.4 -0,0 -0,0 -0.6,0.4 -0,0 -0,0 -0.6,0.4 -0,0 -0,0 -0.6,0.5 -0,0 -0,0 -0.5,0.5 -0,0 -0,0 -0.2,0.2 2.9,2.8 0.1,-0.1 0.1,-0.1 0.4,-0.4 0.1,-0.1 0.4,-0.3 0,-0 0.1,-0.1 0.4,-0.3 0.5,-0.4 0.1,-0.1 0.6,-0.3 0,-0 0.5,-0.3 0.1,-0 0.5,-0.3 0.1,-0 0.5,-0.2 0,0 0.1,-0 0.6,-0.2 0,-0 0.5,-0.2 0.1,-0 0.1,-0 -1.1,-3.9 z m 14.2,6.7 0.4,0.3 0.5,0.5 0.1,0.1 0.3,0.4 0.1,0.1 0.3,0.4 0.1,0.1 0.3,0.4 0,0 0,0.1 0.3,0.4 0.1,0.1 0.3,0.5 0,0 0,0.1 0.3,0.5 0,0.1 0.2,0.5 0,0.1 0.2,0.5 0,0.1 0,0 0.2,0.6 3.8,-1.3 -0.2,-0.7 -0,-0.1 -0,-0.1 -0.3,-0.7 -0,-0.1 -0,-0 -0.3,-0.7 -0,-0.1 -0,-0 -0.3,-0.7 -0,-0.1 -0,-0 -0.4,-0.6 -0,-0 -0,-0.1 -0.4,-0.6 -0,-0 -0,-0.1 -0.4,-0.6 -0,-0.1 -0,-0 -0.5,-0.6 -0,-0 -0,-0 -0.5,-0.5 -0,-0 -0,-0 -0.5,-0.5 -0,-0 -0,-0 -0.5,-0.4 z m -24.4,1.4 -0,0 -0,0.1 -0.3,0.7 -0,0 -0,0.1 -0.3,0.7 -0,0 -0,0.1 -0.3,0.7 -0,0.1 -0,0.1 -0.2,0.7 -0,0.1 -0,0.1 -0.2,0.7 -0,0.1 0,0.1 -0.2,0.7 -0,0.1 -0,0.1 -0.1,0.7 -0,0.1 0,0.1 -0.1,0.8 0,0.1 -0,0.1 -0.1,0.8 0,0.1 0,0.1 -0,0.8 0,0.1 0,0.1 0,0.3 4,-0.1 -0,-0.2 0,-0.1 0,-0 0,-0.7 0,-0.6 0,-0.1 0,-0 0.1,-0.5 0.1,-0.6 0,-0.1 0.1,-0.5 0,-0 0,-0.1 0.1,-0.5 0.2,-0.6 0,-0.1 0,-0 0.2,-0.5 0.3,-0.6 0.1,-0.1 0.3,-0.5 0,-0.1 0,-0 0,-0 -3.5,-2 z m 28.7,7.6 0,0.5 0,0.1 0,0 -0,0.6 -0.1,0.7 -0,0.1 0,0.1 -0.1,0.6 -0.1,0.5 -0,0.1 -0.1,0.5 0,0 -0,0.1 -0.1,0.5 -0,0.1 -0.2,0.5 -0,0 -0,0.1 -0.2,0.5 -0,0 -0,0.1 -0.2,0.5 -0,0.1 -0.3,0.5 -0,0.1 -0,0 -0.2,0.3 3.5,2 0.2,-0.4 0,-0.1 0,-0 0.3,-0.7 0,-0 0,-0.1 0.3,-0.7 0,-0 0,-0.1 0.3,-0.7 0,-0.1 0,-0.1 0.2,-0.7 0,-0 0,-0.1 0.2,-0.7 0,-0.1 0,-0.1 0.2,-0.7 0,-0.1 0,-0.1 0.1,-0.7 0,-0.1 0,-0.1 0.1,-0.8 0,-0.1 0,-0.1 0.1,-0.8 0,-0.1 0,-0.1 0,-0.8 -2,-0.1 2,-0.1 -0,-0.6 z m -30.1,5.3 0.1,0.3 0,0.1 0,0 0.2,0.7 0,0.1 0,0.1 0.3,0.7 0,0.1 0,0 0.3,0.7 0,0.1 0,0 0.3,0.7 0,0 0,0.1 0.4,0.6 0,0 0,0.1 0.4,0.6 0,0 0,0 0.4,0.6 0,0 0,0 0.5,0.6 0,0 0,0 0.5,0.5 0,0 0,0 0.5,0.5 0,0 0,0 0.2,0.2 2.7,-2.9 -0.2,-0.1 -0.1,-0.1 -0,-0 -0.4,-0.4 -0.1,-0.1 -0.4,-0.4 -0,-0.1 -0,-0 -0.3,-0.4 -0.1,-0.1 -0.4,-0.5 -0.3,-0.4 -0.1,-0.1 -0.3,-0.5 -0,-0 -0,-0.1 -0.3,-0.5 -0.1,-0.1 -0.2,-0.5 -0,-0.1 -0,-0 -0.2,-0.5 -0,-0.1 -0,-0.1 -0.2,-0.6 -0,-0.1 z m 25.8,4.8 -0.1,0.1 -0.4,0.3 -0,0 -0.1,0.1 -0.4,0.3 -0.1,0.1 -0.5,0.3 -0,0 -0.1,0 -0.5,0.3 -0.1,0 -0,0 -0.6,0.3 -0.5,0.3 -0.1,0 -0.5,0.2 -0,0 -0.1,0 -0.5,0.2 -0.1,0 -0.5,0.2 -0.5,0.1 1.1,3.9 0.5,-0.1 0,-0 0.1,-0 0.7,-0.2 0.1,-0 0,-0 0.7,-0.3 0.1,-0 0.1,-0 0.7,-0.3 0.1,-0 0,-0 0.7,-0.3 0.1,-0 0,-0 0.7,-0.4 0,-0 0,-0 0.6,-0.4 0,-0 0.1,-0 0.6,-0.4 0,-0 0,-0 0.6,-0.5 0,-0 0,-0 0.6,-0.5 0,-0 0,-0 0.5,-0.5 -2.7,-2.9 z m -15.5,1.8 -1.9,3.5 0.1,0.1 0,0 0,0 0.7,0.3 0,0 0.1,0 0.7,0.3 0.1,0 0,0 0.7,0.3 0.1,0 0.1,0 0.7,0.2 0,0 0.1,0 0.7,0.2 0,0 0.1,0 0.8,0.2 0.1,0 0.1,0 0.8,0.1 0.1,0 0.1,0 0.8,0.1 0.1,0 0.1,0 0.8,0.1 0.1,0 0.1,0 0.8,0 0.1,0 0.1,0 0.1,0 -0.1,-4 -0.1,0 -0.1,0 -0.6,-0 -0.1,0 -0.6,-0 0,-0 -0.7,-0.1 -0,0 -0.1,-0 -0.6,-0.1 -0.1,-0 -0.6,-0.1 0,-0 -0.7,-0.2 -0.5,-0.2 0,-0 -0.6,-0.2 -0.1,-0 -0,0 -0.5,-0.2 -0.1,-0 -0.5,-0.3 -0.1,-0.1 z M 100,93.2 c -3.5,-4e-4 -6.7,2.9 -6.7,6.5 l 0,0.4 c 0,3.5 3,6.5 6.5,6.5 l 0.4,0 c 3.4,0 6.5,-3 6.5,-6.3 l 0,-0.9 c 0,-3.4 -3.3,-6.3 -6.8,-6.3 z"}],G["AC.IC.AVALANCHE"]=[{type:"path",stroke:!1,d:"m 115.7,87.3 -3.6,0.9 11,38 -4.6,1.5 9.6,9.2 3.1,-13 -4.6,1.4 z m 3,46.4 -8.5,-10 4.3,-1.2 -11.2,-40.6 -34.5,51.9 z m -12.1,-59.8 0,8.4 1.6,0 0,-8.3 7.1,4.3 0.8,-1.3 -7.4,-4.1 7.5,-4.4 -1,-1.2 -7,4 0,-8.2 -1.6,0 0,8.2 -7.4,-4 -0.6,1.1 7.2,4.4 -7.2,4.1 0.6,1.4 z"}],G["AC.IC.EARTHQUAKE EPICENTER"]=[{type:"path",stroke:!1,d:"m 62.8,99.8 c 0,-10.8 4.9,-20.2 10.3,-25.7 5.1,-5.1 14.8,-11.3 24.7,-11.3 h 4.1 c 4.9,0 10.5,1.9 13.9,3.6 5,2.5 6.4,4 10.4,7 4.6,3.6 11.1,15.4 11.1,23.8 v 5.3 c 0,17.4 -17.5,34.6 -35.1,34.6 h -4.6 c -10.3,0 -19.4,-6.2 -24.6,-11.4 -5.5,-5.4 -10.3,-15 -10.3,-25.8 z m 39.4,38.5 c 10.7,0 20,-6.3 25.5,-11.8 6.7,-6.7 9.9,-13.9 10.7,-26.5 1.3,-19.2 -17.7,-38.1 -36.2,-38.1 h -4.8 c -10.3,0 -20.1,6.6 -25.2,12.1 -3,3.2 -5.6,6.7 -7.5,11.1 -1.1,2.8 -3.5,11.3 -3,15.3 0.7,6.4 0.9,10.4 3.4,15.3 2.2,4.4 4,7.6 7.3,11 5,5.3 15.2,11.7 25.3,11.7 h 4.6 z m -3.9,-11.6 c -13.6,0 -24.7,-13.1 -25.2,-26.8 -0.5,-13.2 12.5,-26.4 25.4,-26.4 h 2.9 c 12.8,0 25.2,12.4 25.2,25.2 v 2.4 c 0,12.8 -12.4,25.7 -25.2,25.7 h -3.1 v -0 z m -27.1,-26.9 c 0,8.8 3.7,16 8.1,20.5 2.3,2.4 5.2,4.4 8.3,5.9 4.2,2.2 6.3,1.9 11.5,2.8 2.9,0.5 10,-1.3 12,-2.2 4.6,-2.2 5,-2.9 8.6,-5.6 4.3,-3.1 9.1,-12.3 9.1,-19.7 v -3.4 c 0,-13.7 -13.6,-26.8 -27.3,-26.8 h -3.2 c -14.5,-4e-4 -27.1,13.6 -27.1,28.5 z m 28.5,14.8 c -8.4,0 -13.5,-6.5 -14.4,-14.4 -0.7,-7.3 6.8,-14.6 13.9,-14.6 h 1.7 c 7.3,0 13.6,6.9 13.6,14.5 0,7.7 -6.2,14.5 -13.8,14.5 h -1 z m -18.6,-14.8 c 0,11.5 8,18.1 18.4,19.3 6.2,0.8 10.3,-2.9 13.6,-5.3 2.8,-2 5.8,-8.3 5.8,-13.3 V 99.8 c 0,-10.4 -8.3,-18.6 -18.6,-18.6 h -0.7 c -9.9,0 -18.4,8.6 -18.4,18.6 z m 10.9,0 v 0.2 c 0,3.7 3.5,7.7 7,7.7 h 1.7 c 3.9,0 7.3,-3.9 7.3,-7.7 0,-4 -3.5,-8 -7,-8 h -1.7 c -3.5,0 -7.3,4 -7.3,7.7 z"}],G["AC.IC.LANDSLIDE"]=[{type:"path",stroke:!1,d:"m 129.4,110.8 c -2.7,0 -6.2,4.1 -4.3,5.1 -1,1.5 -3.6,2 -3.6,4 0,1.8 2.6,4.7 3.4,6.2 1.1,2 3.2,3.2 6.2,3.2 h 1.8 c 2.7,0 4.6,-2.6 4.6,-5.3 v -1 c 0,-3.4 -1,-5 -2.1,-7.5 -1,-2.4 -1.6,-4.6 -4.9,-4.6 h -1 z m -22.2,-35 -5.3,-5.2 -39.3,58.3 55.8,0.1 v -1.2 c 0,-0.7 -1,-1.5 -1.5,-1.8 0,-2 -0.6,-1.6 -0.9,-2.9 -0.2,-0.9 -0.1,-2.7 -0.1,-3.7 0,-2.8 -0.1,-4.3 -1.7,-5.6 -2.2,-1.9 -1.3,-1.5 -4.3,-3.1 -2,-1 -1.5,-2.1 -5.2,-2.2 v -1.5 c 0,-1.9 -2,-3.6 -2.8,-4.8 0,-2.3 -0.5,-4.7 -0.5,-6.8 0,-1.6 -0.2,-2 -0.2,-3.3 -0.1,-1.7 -0.8,-1.5 -0.8,-2.8 v -0.2 c 0,-3 0.5,-4.5 2.1,-6 2.2,-2.1 0.9,-2.2 3.8,-3.9 l 0.8,-3.3 0,0 z m 9.7,34 c 0,3.6 6.1,2.8 6.1,-0.8 0,-4.2 -6.1,-1.9 -6.1,0.8 z m 2.8,-16.4 c -2.2,0 -7,6.4 -4,8.6 1.7,1.2 2.6,1.6 5.3,0.6 2,-0.8 2.8,-1.6 2.8,-4.3 4e-4,-2.4 -2,-4.8 -4,-4.8 z m -8.4,5.3 c 0.8,0 1,-0.7 1.3,-1.3 -0.6,-1.4 -0.5,-2.5 -2.6,-2.5 h -0.2 c -1,0 -2,0.6 -2,1.5 0,0.7 1.6,2.3 2.8,2.3 h 0.8 z m -3.3,-13.7 c -0.1,1 -0.3,0.6 -0.3,1.5 0,1 0.8,3 1.8,3 h 0.2 c 3.1,0 3.1,-0.2 4.8,-1.5 -1,-2.3 -0.4,-3.6 -4.2,-3.6 -1.1,0 -1.4,0.3 -2.3,0.5 z"}],G["AC.IC.SUBSIDENCE"]=[{type:"path",stroke:!1,d:"m 56.8,75.6 0,2 14.4,0 3.8,7.9 c -0.1,0.3 -0.3,0.7 -0.3,1.6 l 0,0.6 c 0,0.7 0.3,1.1 0.7,1.5 0.3,0.4 0.7,0.8 1.1,1.3 0.7,0.8 1.5,1.5 1.8,2 l -0.3,4.1 c -0.1,1 0.4,2 1,2.6 0.6,0.6 1.3,1.1 2,1.5 0.7,0.4 1.3,0.8 1.7,1.2 0.4,0.4 0.6,0.6 0.6,1 0,1.3 -0.5,2.2 -0.5,4.2 0,0.9 0.5,1.7 1.1,2.1 0.6,0.4 1.2,0.7 1.8,0.9 0.6,0.2 1.1,0.4 1.4,0.6 0.3,0.2 0.3,0.2 0.3,0.3 0,0.6 -0.1,0.8 -0.3,1.2 -0.2,0.3 -0.5,0.7 -0.5,1.5 l 0,0.6 c 0,1.8 1,2.9 1.9,3.5 0.8,0.6 1.3,0.8 1.5,1.3 0,0 0,0 0,0 0.2,0.8 0.3,2 0.7,3.1 0.2,0.6 0.5,1.2 1,1.6 0.5,0.5 1.2,0.7 2,0.7 l 0.3,0 c 1.1,0 1.9,-0 2.6,-0.2 0.7,-0.1 1.3,-0.4 1.7,-0.9 0.4,-0.5 0.5,-1.1 0.7,-1.7 0.1,-0.6 0.2,-1.3 0.3,-2.1 7.6e-4,-0 -7.6e-4,-0 0,-0 0.2,-1.4 0.7,-2.1 1.3,-2.8 0.5,-0.7 1.2,-1.7 1.2,-3.1 0,-0.6 -0.2,-1 -0.5,-1.3 -0.2,-0.3 -0.5,-0.7 -0.7,-1 -0.5,-0.7 -0.8,-1.5 -0.8,-2.4 l 0,-0.9 c 0,-0 -0,-0 0.1,-0.2 0.2,-0.2 0.5,-0.4 0.8,-0.6 0.4,-0.3 0.8,-0.5 1.1,-1 0.4,-0.4 0.7,-1.1 0.7,-1.8 0,-1.2 -0.5,-2.4 -0.9,-3.5 -0.4,-1.1 -0.8,-2.2 -0.8,-2.5 0,-0.5 0.2,-1 0.6,-1.6 0.4,-0.6 1,-1.3 1.5,-2.2 0.5,-0.8 0.9,-1.8 0.9,-3 -0,-1.1 -0.5,-2.4 -1.6,-3.6 l -0,-0 -0,0 c -0.3,-0.3 -0.7,-1.3 -0.8,-2.2 -0.1,-0.9 0.1,-1.9 0.4,-2.3 0.3,-0.5 0.9,-0.9 1.7,-1.4 0.7,-0.6 1.5,-1.6 1.5,-3 l 0,-1.4 38.1,0 0,-2 -40.1,0 -30.6,0 -0.6,0 -15,0 z"}],G["AC.IC.VOLCANIC ERUPTION"]=[{type:"path",stroke:!1,d:"m 122.2,66 -10.4,17.9 1.7,1 10.4,-17.9 -1.7,-1 z m -23.2,0.5 0,17.9 2,0 0,-17.9 -2,0 z m -19.5,-0.4 -1.8,0.8 8,17.9 1.8,-0.8 -8,-17.9 z M 99.3,120.8 c -1.7,-0 -3.3,0.8 -4.5,2 -1.2,1.2 -2,2.9 -2,4.5 l 0,1.9 c 0,1.7 0.8,3.3 2,4.5 1.2,1.2 2.8,2 4.5,2 l 1.3,0 c 1.7,0 3.3,-0.8 4.5,-2 1.2,-1.2 2,-2.8 2,-4.5 l 0,-1.9 c 0,-1.7 -0.8,-3.3 -2,-4.5 -1.2,-1.2 -2.8,-2 -4.5,-2 l -1.2,0 -0,0 z M 80.3,86.5 c -0.5,0 -0.9,0.3 -1.4,0.8 -0.4,0.5 -0.8,1.2 -1.3,2 -0.8,1.7 -1.6,3.9 -2.4,6.3 -1.5,4.7 -2.8,9.8 -3.4,11.4 l -0,0 c -2,7 -5.8,15.2 -7,21.6 l -0.1,0.2 0.2,0 20.9,0.6 0.2,0 0,-0.2 0,-1.9 0,-0.2 -0.2,-0 -17.6,-0.7 L 80.5,89.4 l 39.1,0 11.9,37.1 -17.5,0.7 -0.2,0 0,0.2 0,1.9 0,0.2 0.2,-0 20.9,-0.6 0.2,0 -0.1,-0.2 c -1.3,-6.4 -5.1,-14.7 -7,-21.6 L 128.1,107 c -0.6,-1.6 -1.9,-6.7 -3.4,-11.4 -0.8,-2.3 -1.6,-4.6 -2.4,-6.3 -0.4,-0.8 -0.8,-1.5 -1.3,-2 -0.4,-0.5 -0.9,-0.8 -1.4,-0.8 l -39.4,0 z"}],G["AC.IC.VOLCANIC THREAT"]=[{type:"path",stroke:!1,d:"m 80.3,85.6 c -0.5,0 -0.9,0.3 -1.4,0.8 -0.4,0.5 -0.8,1.2 -1.3,2 -0.8,1.7 -1.6,3.9 -2.4,6.3 -1.5,4.7 -2.8,9.8 -3.4,11.3 l 0,0 -0,0 c -2,7 -5.8,15.2 -7,21.6 l -0.1,0.2 0.2,0 20.9,0.6 0.2,0 0,-0.2 0,-1.9 0,-0.2 -0.2,-0 -17.6,-0.7 12,-37.1 39.1,0 11.9,37.1 -17.5,0.7 -0.2,0 0,0.2 0,1.9 0,0.2 0.2,0 20.9,-0.6 0.2,-0 -0.1,-0.2 c -1.3,-6.4 -5.1,-14.7 -7,-21.6 l -0,0 0,-0 c -0.6,-1.6 -1.9,-6.7 -3.4,-11.3 -0.8,-2.3 -1.6,-4.6 -2.4,-6.3 -0.4,-0.8 -0.8,-1.5 -1.3,-2 -0.4,-0.5 -0.9,-0.8 -1.4,-0.8 l -39.4,0 z M 99.3,120 c -1.7,-0 -3.3,0.8 -4.5,2 -1.2,1.2 -2,2.9 -2,4.5 l 0,1.9 c 0,1.7 0.8,3.3 2,4.5 1.2,1.2 2.8,2 4.5,2 l 1.3,0 c 1.7,0 3.3,-0.8 4.5,-2 1.2,-1.2 2,-2.8 2,-4.5 l 0,-1.9 c 0,-1.7 -0.8,-3.3 -2,-4.5 -1.2,-1.2 -2.8,-2 -4.5,-2 l -1.2,0 -0,0 z m -2.7,-42.1 0,0.2 -0.2,0 0,4.2 0,0.2 0.2,0 3.3,0 0.2,0 0,-0.2 0,-4.2 0,-0.2 -0.2,0 -3.3,0 z M 99,57.1 c -1.1,2.5e-5 -2.3,0.2 -3.3,0.5 -1.1,0.3 -2.1,0.8 -3.2,1.4 l -0.1,0.1 0,0.1 0,3.1 0,0.4 0.3,-0.2 c 1.1,-0.7 2,-1.3 3,-1.6 1,-0.4 1.9,-0.6 2.7,-0.6 1.1,2.2e-5 2,0.3 2.7,0.8 0.7,0.6 1,1.3 1,2.2 -1e-5,0.5 -0.1,1 -0.4,1.5 -0.3,0.5 -0.7,1 -1.3,1.6 l 0,0 -1.5,1.5 c -1,0.9 -1.7,1.8 -2,2.5 -0.3,0.7 -0.5,1.7 -0.5,2.8 l 0,2.5 0,0.2 0.2,0 3.1,0 0,-0.2 0.2,0 0,-2 c -10e-6,-0.6 0,-1 0.1,-1.3 0,-0.3 0.1,-0.6 0.1,-0.8 0.1,-0.2 0.2,-0.5 0.4,-0.8 0.2,-0.3 0.6,-0.7 1.1,-1.2 l 1.4,-1.4 c 1,-0.9 1.7,-1.8 2.1,-2.6 l 0,-0 c 0.4,-0.8 0.6,-1.6 0.6,-2.5 -2e-5,-1.8 -0.6,-3.3 -1.9,-4.3 -1.3,-1.1 -2.9,-1.6 -5,-1.6 z"}],G["AC.IC.CAVE ENTRANCE"]=[{type:"path",fill:!1,d:"m 55,100 55,0 30,-20 0,40 -30,-20"}],G["AC.IC.DROUGHT"]=[{type:"path",stroke:!1,d:"m 87.6,127.4 c 1.3,0.6 4.5,0 6.1,0 h 4.2 l -2,-5.9 -4.9,-0.3 c -5.7,10.8 -2.4,4.3 -3.4,6.2 z m -24.1,-7 c -0.6,1.9 17.6,6.9 20.5,7.4 2.7,-1.8 4.5,-2.4 4.8,-6.7 -4,0 -11.4,-0.8 -14.8,-1.7 -2.2,-0.6 -4.2,-1.2 -6.4,-1.7 -3.5,-0.9 -4.2,-1.5 -4.2,2.6 z m 35.9,6.1 6.7,-0.3 18.6,-1.7 c 1.5,-0.4 4.5,-0.4 6,-1.4 -1.3,-2.6 -2.4,-4.1 -3.7,-6.6 -1.4,-2.6 -1.9,-4.9 -3,-7.2 -3.7,0.8 -4.7,3.5 -6.3,4 -3.5,1.1 -4.8,0.4 -6.7,3.8 -1.7,3 -2.5,3.3 -5.3,5.2 -2.4,1.7 -3.6,2.8 -6.3,4.2 z m -2.8,-9 c 0,3.7 0.5,4.2 2.2,7.3 l 8.5,-7.1 -0.2,-0.2 c -1.7,-0.4 -2.4,-1.5 -4.8,-2.2 -1.6,-0.4 -4.1,-1.3 -5.8,-1.4 v 3.6 h 0.1 z m 37.6,0.5 c -0.9,0 -1,-0.2 -1.9,-0.2 l 1,2.4 2.7,-2.8 c -0.9,0.2 -0.8,0.5 -1.8,0.5 z m -51.3,-0.3 c -0.1,1.9 7.7,1.5 9.3,1.5 h 2.8 c 0,-1.7 -0.7,-2.8 -0.8,-4.4 -0.1,-2.5 -0.4,-1.8 -3.1,-2.1 -4,-0.4 -4.6,-2 -7.7,-2.8 l -0.6,7.7 z m -25.5,-12.6 3,12.1 c 0.7,-3 2.2,-4.5 2.8,-7.3 0.3,-1.8 0.1,-2.6 0.9,-4 0.4,-0.7 1.3,-2.8 1.5,-3.6 -1.4,-0.3 -6.9,-1.6 -8.6,-1.6 l 0.4,4.4 z m 69.9,-2.2 c -1,4.1 -0.7,3.5 1,7 1.2,2.4 2,4.4 3.1,6.6 5.8,-0.5 6.2,-0.5 9.4,-3.6 1.6,-1.6 1,-6.8 2,-8.3 -2.5,-1.2 -1.7,-0.6 -4.6,-1.3 -4.5,-1 -6.6,-0.4 -10.9,-0.3 z m -30.9,1.1 v 0.8 c 0,2.2 -0.1,3.3 0,5.4 0.1,3.3 -0.3,2.5 3.1,2.8 1.2,0.1 3.5,1 4.5,1.4 0.7,0.4 1.5,0.5 2,0.8 0.8,0.4 0.3,0.6 1.7,1.4 l -0.2,-0.2 5.6,-4.7 c 3.1,0 4.2,0.4 5.8,-1.3 2.4,-2.5 0.8,-1.4 4,-3.1 l 0.6,-3.1 c -2.5,0.6 -5.5,2.2 -8.2,1.1 -2.6,-1.1 -3.8,-2.8 -7.4,-2.8 l -1.6,-0.3 -9.9,1.8 z m -32.1,11.2 c 1.3,0 5.8,0.7 6.9,1 1.4,0.4 4.7,2.3 5.6,2.3 h 2.8 c 1,0 0.9,-0.3 1.7,-0.5 l 1.7,-8.3 -5.2,-4.5 -9,-2 c -0.4,1.7 -2.4,3 -3.1,5.1 -0.3,0.7 -1.5,6.3 -1.5,7 z m 41,-35.1 c 1,1.2 1.4,2.8 2.2,4.2 0.4,0.6 2.9,3.3 2.9,3.5 0,0.8 -0.9,2.3 -1.3,2.3 -2.7,0 -3.8,-6.7 -3.8,-10 z m -1.8,-1.2 c -0.3,1 -1.9,4.5 -2.5,5.6 -0.9,1.8 -1.9,3.5 -4.4,3.5 -0.5,0 -1,-0.4 -1,-0.8 0,-3.1 3.8,-5.8 5.2,-7.6 l 2.8,-0.8 z m 9.5,8.6 h -0.8 c -2.3,0 -6.9,-8 -6.9,-9.7 0,-0.1 0.3,-0.5 0.3,-0.5 1.7,0.5 7.9,6 7.9,8.7 -4e-4,0.5 -0.4,0.8 -0.5,1.5 z m 0.6,-6 c -0.7,-0.3 -1.7,-1 -2.4,-1.3 -1.4,-0.8 -3.5,-2.9 -4.7,-3.3 l 1.1,-1.3 c 3.1,1.5 10.1,1.3 10.1,5.7 0,0.3 -0.8,0.8 -1,1 -0.8,-0.3 -2,-0.4 -3.1,-0.8 z m -24.9,1.3 h -1 c 1,-2 -2.2,-6.7 -4.4,-7.2 -2.2,1.2 -4.2,0.6 -5.5,3.3 -0.4,1 -0.7,2.2 -1.5,2.8 -0.8,0.6 -2.4,0.8 -2.4,1.9 0,1.5 4.3,0.4 4.9,-0.2 1.2,-1.1 2.4,-2.1 4.5,-2.1 2,0 2.9,5.8 3.1,8.2 0.2,3.2 -2.3,7.7 -2.2,9.5 l 0.9,6.8 -4.4,-0.3 c 2.1,3.1 8.5,6 13.4,6.4 l -0.4,-7.7 -5.6,1.3 c 0,-4.4 -2,-5.5 -0.5,-9.5 0.6,-1.7 1,-2.2 1,-4.7 0,-1.1 0.2,-4.6 0.6,-5.3 1.5,-2.5 1.9,-5.6 3.1,-8.4 1.2,-2.8 5,-2.6 8.3,-3.5 l 1.2,1.3 -1,0.3 0.8,1.8 c -1.7,2 -2.9,2.9 -4.5,5 -0.8,1 -3.8,6.3 -0.6,6.3 h 1 c 3.9,0 5.1,-7.1 6.9,-9.2 0.4,4.4 1.2,9.5 4.4,11.2 1.7,-0.4 2.2,-1.1 2.6,-2.8 0.7,0.2 0.5,0.3 1,0.3 1.3,0 2,-1.1 2,-2.3 V 85.8 c 0,-2.1 -1.2,-2.4 -1.5,-3.8 0.8,0.4 2.2,1 3.3,1 h 0.5 c 1.2,0 1.3,-0.6 1.8,-1.3 -0.2,-2.5 -1.5,-3.9 -3.5,-4.6 -1.3,-0.4 -5.2,-1.7 -6.7,-1.7 l 0.5,-1 h -0.7 l 0.8,-1.6 -4.9,1 c -0.9,-0.6 -1.2,-1.5 -2.6,-1.5 h -1.8 C 92.3,72.2 88.7,75.8 88.7,82.9 l 0,0 z"}],G["AC.IC.FLOOD"]=[{type:"path",stroke:!1,d:"M77.2,92.9L77.3,92.8L99.3,72.5L99.7,72.1L100,72.1L100.4,72.5L122.4,92.8L123.5,93.9L122.4,93.9L122.4,115.902C123.023,115.106 123.657,114.5 124.4,114.5C125.454,114.199 124.857,116.712 125.5,117.6C125.988,118.273 126.805,118.721 127.609,118.928C130.146,119.58 132.747,117.303 134.5,116.2C135.043,115.859 136.356,115.26 136.4,115.9C136.652,119.558 136.526,123.235 136.4,126.9L63.7,126.9L63.7,114.9C64.819,117.943 66.835,120.948 70.637,119.05C72.357,118.192 73.209,115.745 75.1,115.4C75.464,115.334 76.266,116.335 77.1,117.278L77.1,93.9L76.2,93.9L77.1,93L77.1,92.9L77.2,92.9ZM121.2,117.544L121.2,94.1L78.3,94.1L78.3,118.49C78.521,118.667 78.727,118.795 78.911,118.845C83.407,120.084 82.345,116.009 86.9,115.5C87.588,115.423 90.549,119.114 91.583,119.536C95.694,121.215 95.826,116.694 98.9,115.9C100.074,115.597 100.538,118.237 100.9,118.5C101.86,119.198 103.028,119.651 104.2,119.837C109.33,120.655 108.685,117.216 111.9,114.9C112.848,114.217 113.556,116.602 113.563,116.613C115.1,119.229 115.092,120.273 118.659,119.606C119.666,119.418 120.465,118.529 121.2,117.544ZM99.75,73.846L99.8,73.8L99.7,73.8L99.75,73.846L79.3,92.7L120.2,92.7L99.75,73.846Z"}],G["AC.IC.INVERSION"]=[{type:"path",stroke:!1,d:"M 69.5,87.9 C 69.5,86.7 73.6,83.9 75.5,83.9 h 0.3 c 3.3,0 9,9.1 15.2,9.1 h 1.8 c 5.4,0 11.3,-9.1 14.9,-9.1 3.5,0 8.8,9.1 15.2,9.1 h 0.9 c 8.5,0 10.5,-4.4 15.5,-7 l -5.3,-6.4 c -3.4,1.8 -4.1,4.6 -9.5,5.3 -2.2,0.3 -6.6,-3.9 -8.3,-5.5 -8,-6.8 -13,-3 -19.4,2 -3.9,3.1 -3.9,5.3 -8.5,1.3 -2.2,-1.8 -5.6,-4.8 -8.2,-6 -3.8,-1.8 -8.6,-0.7 -11.4,1.2 -1.6,1 -7.3,5.2 -7.3,6.9 v 52.2 h 8.2 V 87.9 z m -9.4,-16.4 79.9,0 0,-8.5 -79.9,0 z"}],G["AC.IC.TSUNAMI"]=[{type:"path",stroke:!1,d:"m 63,122 39.5,-0.1 30.8,0.3 c -7.1,0 -12.8,-1.7 -16.9,-4.8 -3.7,-2.9 -7.7,-8 -7.7,-14.4 0,-9.1 6.9,-16.5 15.8,-16.5 h 0.7 c 6.5,0 8.2,2.8 11.8,5.3 -2,-8.6 -10.6,-14.2 -21.4,-14.2 h -0.2 c -18.2,0 -44.9,33 -52.4,44.3 l 0,0 0,0 z"}],G["AC.IC.BIRD"]=[{type:"path",stroke:!1,d:"m 81.6,92.5 -18.4,2.9 v 0.3 l 6.6,0.5 c -0.7,0.5 -3.3,1.1 -4.5,1.5 -2.6,0.9 -2,0.3 -3.5,2.4 l 3.4,0.1 -1,1 c 1.8,0 3.3,0.1 4.8,0.2 1.4,0.1 1.9,-1.3 3.5,-1.4 3,-0.2 5.7,0.2 9.3,0.3 l -0.8,0.5 c 0.6,0.1 0.7,0.2 1.4,0.2 h 1.6 l 0.1,0.9 2.9,1.2 1.6,-0.1 c 1.6,1.1 1.9,2.3 5.2,2.4 0.2,2.7 0.6,3.8 3,4.4 v 0.8 c 0,2.2 0.2,4.8 2.1,5 l 1.2,5.3 h -0.4 v 0.4 c -0.3,-0.3 -1.4,-1.2 -1.8,-1.2 h -0.2 c -0.5,0 -0.5,0.1 -1,0.2 0.6,0.8 2.7,1.7 3.1,2.7 0.5,1.6 0.1,3.8 0.2,5.3 l 0.9,0.6 0.8,-0.1 0.1,-0.8 -0.1,-2.7 c 0.7,0.5 2.7,3 3.3,3 h 1 c -0.5,-2 -1.8,-2.4 -2.7,-3.9 l 3.7,1.1 c -1,-1.5 -0.9,-1.8 -2.9,-2.3 -3.1,-0.8 -1.8,-1.9 -3.1,-2.2 l -1,-5.4 c 1,-0.2 1.4,-1 1.4,-2.2 l 0.1,-1.6 -0.3,-2.6 h 1 c 0.7,0 0.7,-0.2 1.4,-0.4 0.1,1.6 1.2,3.3 2.7,3.4 l 3.1,6.3 c -0.3,0.3 -0.4,0.3 -0.4,0.8 v 0.7 l -4.4,-0.9 v 0.2 c 0.8,0.7 3.7,1.7 5.1,2.8 1.1,0.8 1.2,0.6 2,1.9 0.3,0.5 1.3,2.2 1.9,2.2 h 0.8 l 0.2,-0.1 -1.7,-3.2 4.3,1.9 c -0.1,-2.1 -2.1,-1.5 -3.6,-2.8 h 3 c -1.3,-1.1 -1.6,-0.9 -3.5,-1.2 -1.6,-0.2 -1.7,-1.2 -2.7,-2.1 -1.1,-1.2 -2,-4.9 -2.9,-6.6 1.2,-1.8 1,-1.4 1,-4.4 4.8,-2.3 5.6,-2.1 9.3,-5.9 2.7,-2.7 3.9,-6.1 5.8,-9.7 0.9,-1.8 1.5,-3.3 2.2,-5.2 0.7,-1.8 0.7,-4.7 1.4,-6.3 2.3,-4.6 9,-3.2 10.3,-5.2 l -4.4,0.2 v -0.2 l 5,-0.6 c -2.2,-1.9 -4.8,-1.4 -8.3,-1.8 -2.1,-0.3 -2.9,0.7 -4.4,-0.3 -1.4,-1 -1.6,-1.2 -3.7,-1.5 -3.1,-0.5 -5.6,1.2 -7.4,2.5 -1.7,1.3 -3.2,5.2 -4.2,6.1 -0.3,0.2 -6.1,2.7 -7.1,3.2 -2.9,1.5 -3.5,2.5 -7.3,3.1 -6.3,1 -9.9,3.4 -14.2,6.3 l 0,0 z"}],G["AC.IC.INSECT"]=[{type:"path",stroke:!1,d:"m 77.4,88.8 0.1,-0.3 6.1,4.9 -0.1,0.2 c -2.2,1.5 -7.7,9 -10,9 l -1.6,-0.1 5.6,-13.7 z m 7.1,3.3 c -0.4,-1.7 -5,-6.4 -6.7,-7.2 -0.4,0.3 -1.8,1 -1.8,1.6 0,0.8 0.3,1 0.5,1.5 l -5.6,14.7 h -1 c 0.2,0.9 0.5,0.7 0.5,1 0,0.3 -3,7.8 -3.3,8.7 -0.6,1.4 -1,2.7 -1.6,4.2 -0.3,0.8 -0.6,1.6 -0.9,2.2 -0.5,1.1 -0.6,0.3 -1.4,1.7 l -1.3,0.3 c 0.3,0.5 1.8,0.5 2.5,0.4 1.2,-0.2 0.4,-1 0.8,-2.2 0.7,-1.8 1.4,-3.5 2.1,-5.4 0.5,-1.2 3.7,-10.3 4.6,-10.3 h 1.3 c 0.8,0 1,0.3 1.5,0.5 l 2.3,-2.8 c 2.7,1.8 8.5,4.6 12.8,4.6 h 0.7 l 0.2,-0.1 -3.5,-5 -9.9,-0.1 6.5,-6.3 c 4.3,2.9 11.7,16.9 14.9,16.9 h 0.3 c 1.4,0 1.3,-0.6 1.8,-1.6 -0.9,-3.7 -4.8,-6.3 -7.3,-8.5 -2.4,-2 -6.1,-6.5 -8.3,-7.9 1.2,-1.7 10.3,-10.8 12.2,-11.3 l 0.9,7.7 0.1,2.9 -1.2,7.4 h -1.8 l 5.2,4.4 7.2,-3.9 c -0.5,2.1 -0.3,2.5 -2.2,3.4 -0.6,0.3 -3.7,1.9 -3.7,2.3 0,0.5 0.7,1.7 0.7,3.1 0,2.9 -3.1,4.4 -5.8,3.3 -2.1,-1 -4.9,-5.1 -5.5,-5.1 h -1 c -4.6,0 -6.7,1.6 -10.5,1.6 h -0.5 c -1.9,0 -2.5,-0.7 -4.1,-0.7 h -0.5 c -0.6,0 -1,0.4 -1,1 0,3.2 12.3,4.7 16.9,4.6 l 13.1,-0.3 v 0.3 c -0.9,1.3 -5.8,4.8 -8,4.8 -0.1,0.2 -0.5,0.7 -0.5,0.8 0,0.7 0.1,0.7 0.3,1.3 0.7,0.1 0.5,0.3 1,0.3 0.5,0 0.5,-0.2 1,-0.5 v -1.3 l 7.7,-5.4 -1.6,6.1 c -0.9,0.1 -1.3,0.4 -1.3,1.3 0,0.9 0.5,0.7 1.4,1.2 l 1.2,-1.4 c 0,-0.2 -0.7,-1.3 -0.7,-1.4 0,-1.3 2.4,-7.6 2.8,-9.5 l 15.6,-0.5 1.2,8.4 -0.4,0.1 c 0.3,0.5 0.3,1 1,1 1,0 1.1,-0.3 1.6,-0.7 -0.5,-1 -0.5,-1.9 -1.7,-1.3 l -0.8,-6.7 4.8,5.5 -0.7,0.8 1.4,1.2 c 0.5,-0.3 1,-0.2 1,-1 v -0.5 c 0,-0.9 -0.9,-1 -1.6,-1.2 l -4.5,-5 0.3,-1 h -8.5 c 0,-5 2,-8.2 2.3,-12.4 l -9.2,0.4 -0.8,2.5 h -4.6 c -1.8,0 -2.8,-8 -2.9,-10.3 0,-2.4 -0.3,-4.1 -0.2,-6.4 0.1,-1.4 1,-5.1 -1,-5.1 h -0.7 c -1,0 -1.3,1 -1.6,1.8 -0.3,1 -1,1.4 -1.6,2 -1.2,1.3 -2.3,2.4 -3.5,3.6 -1.2,1.2 -6.2,6.7 -7.4,7 l 0,0 z m 37.9,8 c 0,-0.3 0.3,-0.5 0.7,-0.5 h 0.7 l 0.1,0.5 -0.3,1 h -1 c -0.1,-0.7 -0.3,-0.4 -0.3,-1 z m 3.6,-1.8 c -0.2,0 -1.6,-1.8 -3.3,-1.8 h -0.5 c -2,0 -2,2.2 -2.5,3.9 -0.5,1.4 -1.4,3.7 -1.4,5.4 0,0.6 0.4,1 1,1 2.4,0 6.4,-5.2 6.9,-7.4 3.9,0 11.1,-1.1 11.8,-3.9 -2.6,0.7 -2.9,2.4 -8,2.8 1.8,-1.6 5.6,-4.3 5.9,-7.2 h -0.5 c -0.8,3.1 -5.6,7.2 -9.5,7.2 z"}],G["AC.IC.MICROBIAL"]=[{type:"path",stroke:!1,d:"m 83.9,93.3 c -3.3,0 -6,2.7 -6,6 0,3.3 2.7,6 6,6 3.3,0 6,-2.7 6,-6 0,-3.3 -2.7,-6 -6,-6 z M 100,85.5 c -11.1,0 -21.2,1.5 -28.6,4.1 -3.7,1.3 -6.7,2.8 -8.8,4.5 -2.1,1.7 -3.4,3.7 -3.4,5.9 0,2.2 1.3,4.2 3.4,5.9 2.1,1.7 5.1,3.2 8.8,4.5 7.4,2.5 17.5,4.1 28.6,4.1 11.1,0 21.2,-1.5 28.6,-4.1 3.7,-1.3 6.7,-2.8 8.8,-4.5 2.1,-1.7 3.4,-3.7 3.4,-5.9 0,-2.2 -1.3,-4.2 -3.4,-5.9 -2.1,-1.7 -5.1,-3.2 -8.8,-4.5 C 121.2,87.1 111.1,85.5 100,85.5 z m 0,1.4 c 11,0 21,1.5 28.2,4 3.6,1.2 6.5,2.7 8.4,4.3 1.9,1.6 2.9,3.2 2.9,4.8 0,1.6 -1,3.3 -2.9,4.8 -1.9,1.6 -4.8,3 -8.4,4.3 -7.2,2.5 -17.1,4 -28.2,4 -11,0 -21,-1.5 -28.2,-4 -3.6,-1.2 -6.5,-2.7 -8.4,-4.3 -1.9,-1.6 -2.9,-3.2 -2.9,-4.8 0,-1.6 1,-3.3 2.9,-4.8 1.9,-1.6 4.8,-3 8.4,-4.3 7.2,-2.5 17.1,-4 28.2,-4 z"}],G["AC.IC.REPTILE"]=[{type:"path",stroke:!1,d:"m 93.5,82.3 c 0,-2 1.8,-2.7 1.8,-4.3 0,-1 -0.6,-1.5 -1.2,-2 -2.8,0.3 -6.5,0.6 -7.4,2.7 -0.5,1.2 -0.5,2.4 -1.2,3.9 -0.5,1 -1.2,2.4 -1.2,3.8 0,0.8 0.4,0.7 0.4,1.6 v 0.8 c 0,2.2 -2.4,3.5 -0.6,6.1 -0.2,0.3 -2,1.5 -2.4,1.7 -1.7,1 -1.8,-0.6 -2.6,-0.6 h -0.8 l -0.3,-1.2 c -0.5,-0.3 -1,-0.8 -1.7,-0.8 -0.8,0 -0.8,0.5 -0.6,1 l -2.1,0.4 -0.8,2.3 h 1 c 0.9,0 1.4,0.4 1.6,1.2 l -1.5,1.2 -0.1,0.4 c 2.8,0.3 4.6,-0.6 7.2,-1.2 1.5,-0.4 6.8,-0.6 7.3,-1 l 0.1,-2.2 c 1,0.3 2,1.3 3.1,1.7 1.2,0.4 1.7,0.8 3.1,1.2 2.4,0.6 4.5,1.2 7.7,1.2 h 0.6 l 6.1,-0.6 c 0,2.6 2.3,2.5 2.8,4.5 -1.3,-0.3 -2.3,-2 -3.5,-2 -0.1,0 -0.4,0.1 -0.6,0.2 l 0.3,1.2 -1.6,0.3 v 0.8 l 0.6,0.4 -0.9,0.6 1,1 c -0.2,0.8 -0.7,0.6 -0.7,1.3 0,0.4 0.1,0.6 0.6,0.6 0.6,0 1.6,-1 2.8,-1 1.9,0 8.3,0.8 8.3,-0.8 v -0.2 c 0,-1.5 -3.5,-1.6 -3.3,-5.5 5,2.6 9.3,7.4 4.5,13.6 -1.5,2 -4.1,3.6 -6.7,4.5 -1.4,0.5 -7.4,1.9 -9.3,1.5 -4.2,-0.8 -5.4,-0.8 -8.8,-2.4 -2.6,-1.2 -4.7,-2.5 -7,-4 -3.9,-2.4 -10,-6.1 -16.1,-6.1 -5,0 -11.4,3.1 -11.4,7.9 1.2,-0.6 1.3,-1.3 2.1,-2.2 0.5,-0.6 1.7,-1.3 2.4,-1.7 1.5,-1 3.9,-1.8 6.5,-1.8 h 1 c 4.4,0 11.6,4.7 14.5,6.7 4.5,3.1 8.1,5.5 14.7,6.7 7,1.2 12.7,-0.1 17.4,-2.8 1.9,-1.1 4.3,-3.3 5.5,-5.1 1,-1.6 2.9,-5.4 2.7,-8 l -0.3,-2.6 c 0.3,0.1 2.8,3.7 3.6,4.5 0.8,0.8 3.8,2.5 5.3,2.5 1,0 4.4,-2.2 4.7,-2.9 l -1.3,-0.6 1.2,-1 c -1.5,-1 -0.8,-0.6 -2.4,-0.6 h -1 c 0,-1.4 -0.3,-1.8 -1.3,-1.6 l 0.2,0.1 -1.7,3.4 c -1.4,0 -2.9,-0.9 -3.6,-1.8 0,-0.1 -1.3,-3.8 -1.3,-3.9 -0.6,-2 -0.6,-2.2 -1.8,-3.6 -1.2,-1.3 -1.9,-1.2 -3.4,-1.9 l -0.1,0.6 c -0.6,-1.8 -6.2,-6.5 -8.1,-7.4 -2.2,-1.2 -3.2,-1.2 -6,-1.7 -2.1,-0.3 -5.4,0.3 -7,-0.5 0.4,-1.5 1.6,-0.6 1.6,-2.2 0,-0.5 -0.7,-0.4 -1.2,-0.4 0.6,-1.2 -0.3,-1 -1.3,-1 0.1,-0.3 0.4,-0.6 0.4,-1 0,-0.3 -0.3,-0.4 -0.6,-0.4 -0.4,0 0,0.6 -1.3,0.6 -0.3,-1 -0.3,-1.3 -1.5,-1.4 v 1.6 h -1.3 v 0.6 c 0,0.8 0.6,1.5 1,2.2 -0.4,0.7 -0.3,2 -1.4,2 -0.6,0 -1.8,-1.5 -3.1,-1.9 -1.3,-0.4 -3,0.5 -3,-1.5 -0,-0.9 2.1,-2.5 2.8,-3.5 l 0,0 z"}],G["AC.IC.RODENT"]=[{type:"path",stroke:!1,d:"m 117.2,80.3 c 0.6,1.2 0.6,1.7 1.5,2.6 0.6,0.7 1.8,1.2 1.9,2.2 -2,-0.1 -4.2,-3.3 -4.4,-5.3 -2.1,-0.5 -8.4,-3.6 -10.9,-4.7 -3.1,-1.3 -8.3,-2.7 -12.7,-2.7 h -2.2 c -4,0 -9,2.5 -11.3,4.2 -3,2.2 -5.2,5.2 -5.2,10.4 v 0.7 c -4.6,1.1 -11.7,8.4 -11.7,13.9 v 2.4 c 0,6.2 7.7,10 11.8,12.7 2.5,1.7 4.7,3.3 7,5.1 2.2,1.7 4.7,4.2 6.7,5.5 -2.1,-9 -22.4,-12.7 -22.4,-25.1 0,-4.5 4.9,-9.3 8.5,-10.2 -0.1,0.6 -0.3,0.6 -0.3,1.3 v 0.5 c 0,4.5 7.8,4.1 11.5,3 5.1,-1.5 8.1,-2.2 13.6,-1.2 5.4,1.1 8.3,1.5 12.7,3.6 3.7,1.9 2,1.2 4.2,3.8 1.1,1.3 1,1.1 2.9,1.3 0.8,0.1 1.8,1 2.4,1.5 h 1.7 c -1.3,-2.6 -4.9,-2.9 -5.6,-5.8 0.8,-1.5 1.7,-1.7 3.9,-1.7 0.8,0 1,0.2 1.7,0.3 -0.3,-0.6 -0.6,-1.7 0.5,-1.7 h 1.9 c 4.5,0 9,2.5 12.7,0 0,-3 0.4,-2.2 -0.9,-4.9 -0.5,-0.8 -2.1,-2.7 -2.8,-3.4 -1.6,-1.5 -5.7,-4.1 -6.7,-5.5 0,-2.8 -0.4,-3.4 -2.7,-3.9 l -0.5,1 0.5,2.7 -1,0.3 v 0.9 h -0.8 c -0.2,-2.4 -1.2,-5.8 -3.6,-5.8 h -0.2 c -1.8,-4e-4 -1.5,1 -2,1.9 z m 9.5,24.6 h 1.2 c -0.2,-2.6 -5.1,-2.8 -5.4,-5.4 l -2.2,0.3 c 0.2,1.5 1.1,2.9 2.4,3.5 0.9,0.3 1.5,0 2.3,0.6 0.4,0.3 1.1,1 1.7,1 z m -45.1,-6.1 c 1.2,1.8 5.9,4.2 8.8,4.2 1,0 1.6,-0.8 1.9,-1.5 -0.9,-1.3 -2.9,-2.8 -4.7,-3.1 -3.7,-0.8 -2.9,0.1 -6,0.4 l 0,0 z m 9.5,-1.9 c 1.3,2 5,2.9 8.3,2.9 0.8,0 1.4,-0.4 1.9,-0.7 -2,-2.9 -6.1,-2.6 -10.2,-2.2 z"}],G["AC.IC.PHARMACY"]=[{type:"path",stroke:!1,d:"m 83.3,74.5 h 13.2 c 3,0 6.2,3.8 6,7.3 -0.1,3.6 -2.9,6.6 -6.5,6.6 H 83.3 V 74.5 z m -8.7,45.9 h 8.7 V 98 h 2.4 c 0.6,0 13.6,16.1 13.6,17.2 0,0.6 -13.6,16.6 -15,19.3 l 10.5,-0.1 10.3,-12.2 9.6,12.3 10.9,-0 -15.2,-19.3 14.4,-17.8 -10.2,-0.1 -9.7,10.8 -7.4,-10 c 8.5,-2 14.1,-6.8 14.1,-17.2 0,-8.1 -7,-15.3 -15,-15.3 H 74.6 v 54.8 z"}],G["GR.IN.IC.EDUCATIONAL FACILITIES INFRASTRUCTURE"]=[{type:"path",stroke:!1,d:"m 99.6,107.1 h -14.8 v 31.7 h 32 v -31.7 h -14.8 V 95.2 c 0,-0.6 6.5,-3 7.5,-3.4 1.3,-0.5 6.9,-3 7.9,-3 -0.3,-0.4 -14.7,-6.3 -15.7,-6.3 h -2.3 v 24.5 z m -3.1,-45 -5.6,14.8 1.7,0 1.3,-3.8 0.1,-0.1 0.1,0 6.8,0 0.1,0 0.1,0.1 1.3,3.8 1.7,0 -5.6,-14.8 -2.1,0 z m 0.8,1.8 0.2,0.1 0.2,-0.1 2.8,7.5 0.1,0.3 -0.3,0 -5.6,0 -0.3,0 0.1,-0.3 2.8,-7.5 z m -14.8,-1.8 8.3,0 0,1.3 -6.5,0 -0.2,0 0,0.2 0,4.5 0,0.2 0.2,0 5.8,0 0,1.3 -5.8,0 -0.2,0 0,0.2 0,7 -1.6,0 0,-14.8 z m 30.3,-0.3 c 0.9,1.5e-5 1.7,0.1 2.5,0.4 l 0,0 c 0.8,0.2 1.4,0.6 2.1,1 l 0,1.6 c -0.6,-0.5 -1.3,-0.9 -1.9,-1.2 -0.8,-0.3 -1.7,-0.5 -2.6,-0.5 -1.8,1.4e-5 -3.2,0.6 -4.1,1.7 -1,1.1 -1.4,2.7 -1.4,4.7 -1e-5,2 0.5,3.6 1.4,4.7 1,1.1 2.4,1.7 4.1,1.6 0.9,2e-6 1.8,-0.2 2.6,-0.5 0.7,-0.3 1.3,-0.7 1.9,-1.2 l 0,1.6 c -0.7,0.4 -1.4,0.8 -2.1,1 -0.8,0.2 -1.6,0.4 -2.5,0.4 -2.3,0 -4,-0.7 -5.3,-2 -1.3,-1.4 -1.9,-3.2 -1.9,-5.6 0,-2.4 0.6,-4.3 1.9,-5.6 1.3,-1.4 3,-2 5.3,-2 z"}],G["ATMOSPHERIC.IC.DRIZZLE.INTERMITTENT LIGHT"]=[{type:"path",stroke:!1,fill:"rgb(0, 128, 0)",d:"m 100,82.7 c -5.5,0 -10,4.5 -10,10 0,5.5 4.5,10 10,10 0.1,0 0.1,0 0.2,0 l -0.2,0.2 c 0.9,5 -8.4,14.4 -8.4,14.4 12.8,0.1 18.4,-13.4 18.3,-23.4 l -0,0 c 0,-0.4 0.1,-0.8 0.1,-1.2 0,-5.5 -4.5,-10 -10,-10 z"}],G["ATMOSPHERIC.IC.FOG.SKY OBSCURED"]=[{type:"path",stroke:!1,fill:"rgb(255, 247, 0)",d:"m 49.6,59.7 0,8 100.9,0 0,-8 -100.9,0 z m 0,71.6 0,8 100.9,0 0,-8 -100.9,0 z m 0,-35.6 0,8 100.9,0 0,-8 -100.9,0 z"}],G["ATMOSPHERIC.IC.HAIL.LIGHT NOT ASSOCIATED WITH THUNDER"]=[{type:"path",stroke:!1,fill:"rgb(198, 16, 33)",d:"m 100,45.5 -0.9,2.1 -16,36 -0.6,1.4 1.5,0 32,0 1.5,0 -0.6,-1.4 -16,-36 L 100,45.5 z m -21.4,46.7 0.4,1.3 20,60 0.9,2.9 0.9,-2.9 20,-60 0.4,-1.3 -1.4,0 -40,0 -1.4,0 z m 2.8,2 37.2,0 L 100,150 81.4,94.1 z"}],G["ATMOSPHERIC.IC.RAIN.INTERMITTENT LIGHT"]=[{type:"path",stroke:!1,fill:"rgb(0, 128, 0)",d:"m 100,79.8 c -11.2,0 -20.2,9 -20.2,20.2 0,11.2 9,20.2 20.2,20.2 11.2,0 20.2,-9 20.2,-20.2 0,-11.2 -9,-20.2 -20.2,-20.2 z"}],G["ATMOSPHERIC.IC.DUST OR SAND.LIGHT TO MODERATE"]=[{type:"path",stroke:!1,fill:"rgb(173, 105, 75)",d:"m 140.7,85 -2,2 13,13 -13,13 2,2 14,-14 1,-1 -1,-1 L 140.7,85 z m -93.5,13.6 0,2.8 106.5,0 0,-2.8 -106.5,0 z M 98.5,62.3 c -3.2,0 -6.4,0.8 -9.2,2.2 -3.7,1.8 -6.9,4.4 -9.3,7.3 -2.3,2.9 -3.9,6.1 -3.9,9.3 0,5.6 2.9,9.9 6.9,13.2 4,3.3 9,5.8 13.9,8.3 4.9,2.5 9.7,4.9 13.1,7.7 3.4,2.8 5.4,5.8 5.4,10.1 0,3.6 -4,9 -10,11.6 -6,2.6 -13.6,2.7 -20.9,-3.4 l -2.7,3.2 c 8.4,7.1 18,7.2 25.3,4 7.2,-3.1 12.5,-9.2 12.5,-15.4 0,-5.6 -2.9,-10 -6.9,-13.3 -4,-3.3 -9,-5.8 -13.9,-8.2 -4.9,-2.5 -9.7,-4.9 -13.1,-7.7 -3.4,-2.8 -5.4,-5.8 -5.4,-10 0,-1.7 1,-4.3 2.9,-6.7 1.9,-2.4 4.7,-4.7 7.8,-6.2 6.2,-3 13.5,-3.1 19.9,4.4 l 3.2,-2.7 C 109.5,64.4 103.9,62.3 98.5,62.3 z"}],G["ATMOSPHERIC.IC.SNOW.INTERMITTENT LIGHT"]=[{type:"path",stroke:!1,fill:"rgb(0, 128, 0)",d:"m 111.5,78.9 -26.4,40 3.3,2.2 26.4,-40 -3.3,-2.2 z m -23.1,0 -3.3,2.2 26.4,40 3.3,-2.2 -26.4,-40 z M 80,98 l 0,4 40,0 0,-4 -40,0 z"}],G["ATMOSPHERIC.IC.STORMS.THUNDERSTORM LIGHT TO MODERATE - WITH HAIL"]=[{type:"path",stroke:!1,fill:"rgb(198, 16, 33)",d:"M 101 51.9 L 99.7 54.4 L 85.8 82.3 L 84.8 84.3 L 87 84.3 L 114.9 84.3 L 117.2 84.3 L 116.2 82.3 L 102.2 54.4 L 101 51.9 z M 101 58.1 L 112.7 81.5 L 89.3 81.5 L 101 58.1 z M 78.3 87.7 L 78.3 90.5 L 83.9 90.5 L 83.9 145 L 86.7 145 L 86.7 90.5 L 117.8 90.5 L 102.8 116.4 L 102.4 117.1 L 102.9 117.8 L 117.8 140.9 L 111.2 136.8 L 109.8 139.2 L 120.9 146.2 L 123.3 147.7 L 123 144.9 L 121.7 130.9 L 118.9 131.2 L 119.6 138.6 L 105.7 117 L 121.5 89.8 L 122.7 87.7 L 120.3 87.7 L 78.3 87.7 z "}],G["ATMOSPHERIC.IC.STORMS.FUNNEL CLOUD (TORNADO/WATERSPOUT)"]=[{type:"path",stroke:!1,fill:"rgb(198, 16, 33)",d:"M 125.7,59.1 112.4,72.4 112,72.8 l 0,0.6 0,53.3 0,0.6 0.4,0.4 13.3,13.3 1.9,-1.9 -12.9,-12.9 0,-52.2 12.9,-12.9 -1.9,-1.9 z m -51.5,0 -1.9,1.9 12.9,12.9 0,52.2 L 72.4,139.1 74.3,140.9 87.6,127.6 88,127.2 l 0,-0.6 0,-53.3 0,-0.6 L 87.6,72.4 74.3,59.1 z"}],G["ATMOSPHERIC.IC.TROPICAL STORM SYSTEMS.TROPICAL STORM"]=[{type:"path",stroke:!1,fill:"rgb(198, 16, 33)",d:"M 112.1 55 C 96.9 59.9 76.7 81.8 82.2 101.4 C 82.9 110.6 90.6 117.9 100 117.9 C 100 117.9 100 117.9 100.1 117.9 C 99.3 128.2 87.9 145 87.9 145 C 103.1 140.1 123.3 118.2 117.8 98.6 C 117.1 89.4 109.4 82.1 100 82.1 C 100 82.1 100 82.1 99.9 82.1 C 100.7 71.8 112.1 55 112.1 55 z M 100 84.5 C 106.8 84.5 112.5 88.8 114.6 94.8 C 114.8 95.2 114.9 95.6 115 96 C 115 96.1 115 96.1 115 96.2 C 115.1 96.6 115.2 96.9 115.3 97.3 C 115.4 98.1 115.5 99.1 115.5 100 C 115.5 101.1 115.4 102.1 115.2 103.1 C 115 104.1 114.7 105 114.4 105.8 C 114.4 105.9 114.3 105.9 114.3 106 C 114.1 106.4 114 106.7 113.8 107.1 C 113.7 107.2 113.7 107.3 113.7 107.3 C 113.6 107.4 113.6 107.5 113.5 107.6 C 113.3 107.9 113.1 108.3 112.9 108.6 C 112.4 109.3 111.9 110 111.3 110.6 C 111.2 110.7 111.1 110.8 111.1 110.9 C 110.8 111.1 110.5 111.4 110.3 111.6 C 110.2 111.7 110.2 111.7 110.1 111.8 C 109.8 112 109.5 112.3 109.2 112.5 C 109.1 112.5 109.1 112.5 109.1 112.5 C 108.9 112.7 108.6 112.9 108.4 113 C 108.1 113.2 107.8 113.4 107.5 113.6 C 107.4 113.6 107.4 113.6 107.4 113.7 C 106.6 114.1 105.7 114.4 104.9 114.7 C 104.7 114.8 104.5 114.8 104.3 114.9 C 104 115 103.6 115.1 103.3 115.2 C 103.2 115.2 103.1 115.2 103.1 115.2 C 102.1 115.4 101.1 115.5 100 115.5 C 93.3 115.5 87.6 111.3 85.4 105.3 C 85.4 105.3 85.4 105.2 85.4 105.2 C 85.3 104.8 85.2 104.5 85.1 104.2 C 85 104 85 103.9 85 103.8 C 84.9 103.5 84.8 103.2 84.8 102.9 C 84.7 102.5 84.6 102 84.6 101.6 C 84.5 101.1 84.5 100.5 84.5 100 C 84.5 99 84.6 98 84.8 97 C 84.8 97 84.8 96.9 84.8 96.9 C 84.9 96.4 85 96 85.2 95.6 C 85.3 95.2 85.4 94.9 85.5 94.5 C 85.6 94.3 85.6 94.2 85.7 94 C 85.7 93.9 85.8 93.8 85.8 93.8 C 86 93.4 86.2 93 86.3 92.7 C 86.4 92.6 86.4 92.5 86.5 92.4 C 86.7 92.1 86.9 91.7 87.1 91.4 C 87.3 91.1 87.5 90.8 87.8 90.5 C 88 90.2 88.2 90 88.4 89.7 C 88.6 89.5 88.8 89.3 88.9 89.1 C 89 89 89.1 89 89.2 88.9 C 89.4 88.7 89.7 88.4 89.9 88.2 C 90.2 88 90.5 87.8 90.8 87.5 C 90.8 87.5 90.9 87.5 90.9 87.5 C 91.1 87.3 91.4 87.1 91.6 87 C 91.9 86.8 92.2 86.6 92.5 86.4 C 92.6 86.4 92.6 86.4 92.6 86.3 C 93.1 86.1 93.5 85.9 94 85.7 C 94.4 85.6 94.7 85.4 95.1 85.3 C 95.3 85.2 95.5 85.2 95.7 85.1 C 96 85 96.4 84.9 96.8 84.8 C 96.8 84.8 96.8 84.8 96.9 84.8 C 96.9 84.8 96.9 84.8 96.9 84.8 C 97.4 84.7 97.9 84.6 98.4 84.6 C 98.9 84.5 99.5 84.5 100 84.5 z "}],G["AC.IC.EMT STATION LOCATION"]=[{type:"path",stroke:!1,d:"M 100 55 L 70 80 L 75 80 L 75 125 L 125 125 L 125 80 L 130 80 L 100 55 z M 95 80 L 105 80 L 105 91.3 L 114.8 85.7 L 119.8 94.3 L 110 100 L 119.8 105.7 L 114.8 114.3 L 105 108.7 L 105 120 L 95 120 L 95 108.7 L 85.2 114.3 L 80.2 105.7 L 90 100 L 80.2 94.3 L 85.2 85.7 L 95 91.3 L 95 80 z "},{type:"path",stroke:!1,fill:!!t&&s,d:"M 95 80 L 95 91.3 L 85.2 85.7 L 80.2 94.3 L 90 100 L 80.2 105.7 L 85.2 114.3 L 95 108.7 L 95 120 L 105 120 L 105 108.7 L 114.8 114.3 L 119.8 105.7 L 110 100 L 119.8 94.3 L 114.8 85.7 L 105 91.3 L 105 80 L 95 80 z "}],G["AC.IC.HEALTH DEPARTMENT FACILITY"]=[{type:"path",stroke:!1,d:"M 131.4,83.6 100,68.4 68.5,83.5 z m -26.4,14.6 0,-9.7 -10.1,0 0,9.7 -9.5,0 0,10.4 9.5,0 0,9.5 10.1,0 0,-9.5 9.6,0 0,-10.4 z m -27.2,19.5 0,-27.8 1.4,0 0,-3.7 -7.3,0 0,3.7 1.2,0 0,27.8 -1.2,0 0,3.8 7.3,0 0,-3.8 z m 48.7,0 0,-27.8 1.4,0 0,-3.7 -7.3,0 0,3.7 1.2,0 0,27.8 -1.2,0 0,3.8 7.3,0 0,-3.8 z m -56.4,5.1 0,3 59.4,0 0,-3 z m -1.8,6.1 0,2.8 63.2,0 0,-2.8 z"}],G["AC.IC.MEDICAL FACILITIES OUTPATIENT"]=[{type:"path",stroke:!1,d:"m 81.8,63.6 26.6,9 0,63.9 -26.6,-9.1 v -63.8 l 0,0 z m -1.6,65 29.9,10.4 v -10.6 h 9.8 V 61 H 80.2 v 67.6 l 0,0 z m 21.4,-18.1 c 0,1.1 1,2.6 2.2,2.6 0.8,0 1.2,-0.8 1.2,-1.6 v -0.4 c 0,-1.2 -1.1,-3 -2,-3 -0.8,0 -1.4,0.8 -1.4,1.6 v 0.8 H 101.5 z M 85.9,90.9 c 0.9,0.1 5.3,1.8 5.3,2.4 v 7.1 l 5.7,2.2 v -7.5 l 5.5,1.9 V 89.1 C 101.5,88.8 96.9,87.2 96.9,86.6 V 79.5 L 91.2,77.6 v 7.4 l -5.3,-2 v 7.9 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"M 81.8 63.6 L 81.8 127.4 L 108.4 136.6 L 108.4 72.7 L 81.8 63.6 z M 91.2 77.6 L 96.9 79.5 L 96.9 86.6 C 96.9 87.2 101.5 88.9 102.3 89.1 L 102.3 97 L 96.8 95.2 L 96.8 102.6 L 91.1 100.4 L 91.1 93.3 C 91.1 92.6 86.8 91 85.9 90.9 L 85.9 83 L 91.2 85 L 91.2 77.6 z M 102.9 108.1 C 103.9 108.1 105 109.9 105 111.2 L 105 111.6 C 105 112.4 104.6 113.2 103.8 113.2 C 102.5 113.2 101.5 111.6 101.5 110.6 L 101.5 110.6 L 101.5 109.8 C 101.5 108.9 102.1 108.1 102.9 108.1 z "}],G["AC.IC.OPERATION/EMERGENCY MEDICAL OPERATION"]=[{type:"path",stroke:!1,d:"m 73.7,89.7 c 0.4,4.9 2.3,11.3 3.4,15.6 1.4,5.7 3.5,8.7 6.1,13.1 2.2,3.6 3.4,9.6 5.6,13.4 0.7,1.3 2.8,5.3 3.6,6 0.5,0.4 5.5,4 5.6,4 1.6,0 9.7,-0.4 10.4,-0.7 0.3,-0.1 4.1,-6.6 4.1,-7 v -3 h -7.8 c -2.7,0 -5.6,-1.3 -8.4,-1.3 V 112.6 c 0,-2.4 1.3,-17.3 2.1,-18 0.8,-0.7 11.4,-8.2 11.9,-8.3 l -1,-8.5 c -0.5,0.2 -5.6,1 -6,0.9 -1,-0.2 -4.7,-1.4 -5.5,-1.8 -1.9,1.1 -4.4,1.8 -6.5,2.7 -1.6,0.7 -3.5,2.7 -5.5,3.7 -2.4,1.2 -3.9,1.7 -6.7,2.5 -1.6,0.4 -2.4,0.4 -3.3,1.5 -0.7,0.8 -1.7,1.8 -2.2,2.5 z m 27.8,36.1 c 0,-8.1 2,-16.8 1.9,-24.8 0,-1.2 0.2,-1.9 0.2,-3.2 0,-1.4 0.4,-1.4 1.2,-2.2 1.2,-1.1 2.4,-2 3.6,-3 2.1,-1.7 5,-4.8 7.1,-6.1 0.3,0.1 0.3,0.2 0.9,0.2 h 4.9 c 0.2,0.8 4.9,6.4 5.8,7.4 2.6,3.1 3.8,3.9 2.9,9.6 -0.5,3.2 -0.7,8.6 -1,12 -0.3,4 -0.9,8.1 -0.9,12.2 l -26.7,-2.2 z m -1.7,1.3 29.8,2.2 2.4,-31.4 -9.8,-12.6 -7.2,-0.3 c -0.2,0 -6.9,5.9 -7.8,6.5 -1.4,1.1 -2.5,2.3 -3.9,3.2 -1.7,1.2 -1.2,3.3 -1.4,5.9 -0.6,8.4 -2.1,18.1 -2.1,26.5 z m 12.8,-9 0.2,0 c 2.3,0 6.5,2.8 8.1,2.8 h 3 V 119.4 H 121.4 c -0.6,0 -6.1,-2.3 -7.2,-2.7 -1.5,-0.6 -6.6,0.3 -8.6,0.3 v 1.3 l 7.1,-0.3 z m -5.6,-7.9 0.2,1.5 c 3.1,-0.7 5.6,-1.4 8.7,-0.8 1.3,0.3 2.8,0.6 4.2,0.9 2.5,0.6 2.8,1.2 3.3,-1 -1.3,0 -6.8,-1.3 -8.4,-1.7 -2.5,-0.7 -5.5,0.4 -8.1,1.1 z m -0.2,-8.1 0.5,1.4 5.7,-1.9 5,3.7 8,-1 -0.3,-1.7 -7.3,1 c -0.8,-0.6 -4.7,-3.6 -5.3,-3.6 -0.5,0 -5.6,1.9 -6.2,2.2 z m 10.7,-7.3 h 1.1 c 1.2,0 2.5,-1.3 2.5,-2.5 v -0.4 c 0,-1.4 -1.6,-2.5 -3,-2.5 -4.4,-0 -3.6,5.5 -0.6,5.5 z M 67.9,81.8 c 0,1.5 3.2,4.4 4.2,5.1 l 1.5,-1.6 -2.1,-4.7 h -2.2 c -0.5,0 -1.5,1.1 -1.5,1.2 z M 110.2,70.5 c 0.8,0.4 2.4,0.8 2.4,1.9 0,0.9 -0.5,1.4 -0.6,2.1 l -2.6,-0.4 c -1,-0.1 -4.2,0.6 -5.8,0.6 v 1.1 c 0,1.1 4,0 5.6,0 h 0.4 c 1.7,0 5.4,1.2 6.2,1.9 0.5,0.5 1.4,5.2 1.9,6.2 1.8,-0.9 1.3,-0.5 0.6,-3.2 -0.3,-0.9 -1.1,-3.1 -1.1,-4 l -3.9,-1.6 1.2,-2.3 c -1.1,-2.1 -0.8,-3.6 -4,-3.6 l -0.3,1.2 z m -36.5,6.6 c 0,0.9 2,4.6 2.2,6 0.3,0.1 1.1,0.4 1.1,0.4 0.3,0 2.1,-0.9 2.8,-1.1 -0.7,-3.1 -1.7,-6.6 -4.3,-7.9 -0.2,0.7 -1.7,2.3 -1.7,2.5 z m 5.9,-3.6 c 1.9,4.1 0.4,3.7 4.2,7 l 2.4,-1.2 v -3.8 c 0,-1.5 -1.2,-3.6 -1.3,-5.3 l -1.9,-0.2 h -1.7 l -1.6,3.7 z m 7.6,-2.8 2.5,5 3.9,-0.8 c 0,-1 0.6,-2.5 0.6,-3.4 0,-2.2 -1.1,-4.7 -1.1,-6.9 H 88.5 l -1.3,6 z M 97.8,62.8 c 0,0.6 0.2,7.2 0.3,7.4 0.3,1 3.7,2.6 5.5,2.4 0.9,-0.1 2.5,-0.3 3.5,-0.4 1.8,-0.2 1.2,-0.6 1.5,-2.6 0.2,-1.9 0.6,-4.9 1.1,-6.8 -0.4,-0.8 -2.4,-4.7 -3.2,-4.7 h -5.1 c -0.7,0 -3,4 -3.5,4.7 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"M 115.6 86.6 C 113.5 88 110.6 91 108.5 92.7 C 107.3 93.7 106 94.6 104.8 95.7 C 104 96.4 103.6 96.5 103.6 97.8 C 103.6 99.2 103.4 99.9 103.4 101.1 C 103.5 109.1 101.5 117.8 101.5 125.9 L 128.2 128 C 128.2 124 128.8 119.9 129.1 115.8 C 129.3 112.4 129.6 107.1 130.1 103.8 C 131 98.1 129.8 97.3 127.2 94.2 C 126.3 93.1 121.6 87.6 121.4 86.8 L 116.5 86.8 C 115.9 86.8 115.9 86.7 115.6 86.6 z M 118.2 89.3 C 119.5 89.3 121.1 90.4 121.1 91.9 L 121.1 92.3 C 121.1 93.6 119.8 94.9 118.6 94.9 L 117.5 94.9 C 114.5 94.9 113.8 89.3 118.2 89.3 z M 113.1 100 C 113.7 100 117.6 103.1 118.4 103.7 L 125.7 102.6 L 126 104.3 L 118 105.3 L 113 101.6 L 107.3 103.6 L 106.9 102.2 C 107.5 101.9 112.5 100 113.1 100 z M 113.2 109 C 113.9 109 114.5 109.1 115.2 109.2 C 116.7 109.6 122.2 110.9 123.5 110.9 C 123 113 122.7 112.4 120.2 111.8 C 118.8 111.5 117.3 111.2 116 110.9 C 112.8 110.3 110.4 111 107.3 111.8 L 107.1 110.3 C 109 109.8 111.2 109.1 113.2 109 z M 112.5 116.5 C 113.2 116.5 113.8 116.6 114.2 116.8 C 115.2 117.1 120.8 119.4 121.4 119.4 L 123.9 119.4 L 123.9 121 L 121 121 C 119.4 121 115.1 118.2 112.9 118.2 L 112.6 118.2 L 105.6 118.4 L 105.6 117.1 C 107.1 117.1 110.4 116.5 112.5 116.5 z"}],G["AC.IC.TRIAGE"]=[{type:"path",stroke:!1,d:"M 91.6 69 C 87.3 69 83.6 71.5 83.6 75.3 L 83.6 83.3 L 80.5 83.3 C 74 83.3 73.6 88.1 71.2 91.5 C 69.3 94.3 63 94.4 63 100.9 L 63 131 L 137 131 L 137 102.6 C 137 99.5 136.2 97.3 134.7 95.6 C 133.2 94 130.8 93.6 129.1 92 C 126 88.8 126.9 83.3 119.1 83.3 L 116.2 83.3 L 116.2 75.5 C 116.2 71.3 112.9 69 108.4 69 L 91.6 69 z M 89.9 76 L 110.1 76 L 110.1 83.3 L 89.9 83.3 L 89.9 76 z M 95.3 90.4 L 104.4 90.4 L 104.4 99.4 L 112.2 94.9 L 116.8 102.8 L 109.1 107.3 L 116.8 111.9 L 112.1 119.8 L 104.4 115.3 L 104.4 124.1 L 95.3 124.1 L 95.3 115.3 L 87.6 119.7 L 83 111.8 L 90.7 107.3 L 83 102.8 L 87.6 94.9 L 95.3 99.3 L 95.3 90.4 z "},{type:"path",stroke:!1,fill:!!t&&s,d:"m 112.1,119.8 4.6,-7.9 -7.6,-4.6 7.7,-4.5 -4.6,-7.9 -7.7,4.4 -0,-8.9 -9.1,0 0,8.9 -7.7,-4.4 -4.5,7.9 7.6,4.5 -7.6,4.5 4.5,7.9 7.7,-4.4 0,8.8 9.1,0 0,-8.8 z"}],G["AC.IC.EMERGENCY PUBLIC INFORMATION CENTER"]=[G["GR.IC.FF.EMERGENCY OPERATION"],e("i")],G["AC.IC.FIRE HYDRANT"]=[{type:"path",stroke:!1,d:"m 80,131.3 v -1 c 1.3,0.1 5.7,1.8 7.7,2.2 2.8,0.6 5.8,1 9.1,1 h 6.5 c 3.4,0 6.1,-0.4 8.9,-1 2,-0.4 6.5,-2.1 7.7,-2.2 v 1 c 0,2.9 -12.5,4.5 -16.6,4.5 h -6.4 c -4.1,0 -16.9,-1.6 -16.9,-4.5 l 0,0 z m 17.9,-43.4 4.5,0.1 12.4,0.4 v 8.3 h 6.3 v 11.9 h -6.3 v 17.4 l 4.5,1.3 c -1.2,1.6 -12.2,3.3 -15.8,3.3 h -6.4 c -3.5,0 -15,-1.8 -16,-3.2 l 4.6,-1.6 0.1,-17.2 h -6.3 V 96.7 h 6.3 v -8.3 l 12.4,-0.4 0,0 z m 25.7,5.9 h 3 v 6.7 h 3.2 v 3.9 h -3.2 v 6.7 h -3 V 93.8 z m -50,0 h 2.9 v 17.2 h -2.9 v -6.7 h -3.5 v -3.9 h 3.4 V 93.8 h 0.1 z m 26.1,-8.3 c -5.2,0 -9.7,0.2 -14.8,0.2 -4.4,0 -3.5,-2.6 -1.8,-2.8 2.1,-0.3 4.9,-0.1 6.9,-0.4 5.3,-0.8 23.6,-0.3 28.1,0.8 0.2,1.8 0.4,1.5 -1,2.4 l -15.8,-0.2 -1.6,0.1 z m -1,-21.1 h 2.9 v 3.8 h 2 v 1.8 c 3.2,0.7 5.3,1.1 7.4,3.1 1.3,1.3 3.5,4.3 3.7,6.7 l -10.4,-0.3 -9.9,0.1 0.2,-0.1 -9.1,0.5 c 0.4,-4.7 5.2,-9.7 10.4,-9.7 h 0.8 v -2 h 2 v -3.8 z m -2.6,1.2 h -2 v 2.2 c -5.7,0.5 -10.6,6.6 -11.1,12.5 -2.2,0.2 -2.3,1.3 -3.4,2.1 l -0.2,1.6 c -0.3,2.2 2,3.9 3.6,4.3 v 5.5 h -3.6 v -2.4 h -8.3 v 6.7 h -3.2 V 107 h 3.2 v 6.3 h 8.3 v -2.4 h 3.6 V 123.8 c -2.3,0.6 -5.5,2 -5.5,4.9 v 2 c 0,6.3 12.9,7.7 19.8,7.7 h 5.9 c 6.9,0 19.4,-1.2 19.4,-7.7 v -2 c 0,-2.8 -3,-4.3 -5.3,-4.9 v -12.9 h 3.6 v 2.4 h 8.1 V 107 h 3.2 v -9.1 h -3.2 v -6.4 h -8.1 v 2.4 h -3.6 v -5.5 c 1.6,-0.3 3.6,-1.8 3.6,-3.8 0,-2.2 -1.6,-3.9 -3.6,-4 -0.5,-5.9 -5.7,-12.1 -11.4,-12.6 v -2.2 h -2 V 61.6 h -7.9 v 4 z m 2.9,47.2 c -4,0 -8.3,-5 -8.1,-9.3 0.2,-4.4 4.2,-9 8.3,-9 h 2 c 4.2,0 8.3,4.7 8.3,9.1 0,4.3 -4,9.1 -8.1,9.1 h -2.4 l 0,0 z m -10.5,-9.9 v 1.8 c 0,5.2 5.4,10.8 10.5,10.8 h 2.4 c 5.6,0 10.8,-5.8 10.8,-11.8 0,-6 -5.3,-11.8 -10.9,-11.8 h -2.1 C 93.7,92 88.4,97.5 88.4,103 l 0,0 z m 9.5,0.8 c 0.3,-0.6 0.8,-1.8 1.4,-1.8 h 1.4 c 0.7,0 1.4,1.3 1.4,2 0,0.1 -0.9,1.6 -1.4,1.6 h -1.4 c -0.6,0.1 -1.1,-1.2 -1.4,-1.8 z m -2.9,0 2.2,4.3 h 5 c 0.7,0 2.4,-3.6 2.9,-4.3 l -2.4,-4.5 h -4.9 c -0.8,0.1 -2.5,3.7 -2.9,4.5 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 97.9,103.8 c 0.3,-0.6 0.8,-1.8 1.4,-1.8 h 1.4 c 0.7,0 1.4,1.3 1.4,2 0,0.1 -0.9,1.6 -1.4,1.6 h -1.4 c -0.6,0.1 -1.1,-1.2 -1.4,-1.8 z m 1.2,-9.1 c -4.1,0 -8.1,4.6 -8.3,9 -0.2,4.3 4.1,9.3 8.1,9.3 l 2.4,0 c 4,0 8.1,-4.9 8.1,-9.1 0,-4.4 -4.1,-9.1 -8.3,-9.1 l -2,0 z m -1.2,4.7 4.9,0 2.4,4.5 c -0.4,0.7 -2.1,4.3 -2.9,4.3 l -5,0 -2.3,-4.3 c 0.4,-0.8 2.1,-4.4 2.9,-4.5 z M 98.7,64.5 h 2.9 v 3.8 h 2 v 1.8 c 3.2,0.7 5.3,1.1 7.4,3.1 1.3,1.3 3.5,4.3 3.7,6.7 l -10.4,-0.3 -9.9,0.1 0.2,-0.1 -9.1,0.5 c 0.4,-4.7 5.2,-9.7 10.4,-9.7 h 0.8 v -2 h 2 v -3.8 z m 1,21.1 c -5.2,0 -9.7,0.2 -14.8,0.2 -4.4,0 -3.5,-2.6 -1.8,-2.8 2.1,-0.3 4.9,-0.1 6.9,-0.4 5.3,-0.8 23.6,-0.3 28.1,0.8 0.2,1.8 0.4,1.5 -1,2.4 l -15.8,-0.2 -1.6,0.1 z m -26.1,8.3 h 2.9 v 17.2 h -2.9 v -6.7 h -3.5 v -3.9 h 3.4 V 93.8 h 0.1 z m 50,0 h 3 v 6.7 h 3.2 v 3.9 h -3.2 v 6.7 h -3 V 93.8 z m -25.7,-5.9 -12.4,0.4 0,8.3 -6.3,0 0,11.9 6.3,0 -0.1,17.3 -4.6,1.6 c 1.1,1.5 12.5,3.3 16,3.3 l 6.4,0 c 3.6,0 14.7,-1.7 15.8,-3.3 l -4.5,-1.3 0,-17.4 6.3,0 0,-11.9 -6.3,0 0,-8.3 -12.4,-0.4 -4.5,-0.1 z m 1.2,4.2 2.1,0 c 5.7,0 10.9,5.8 10.9,11.8 0,5.9 -5.2,11.8 -10.8,11.8 l -2.4,0 c -5.2,0 -10.5,-5.6 -10.5,-10.8 l 0,-1.8 c 0,-5.5 5.3,-11 10.7,-10.9 z M 80,131.3 v -1 c 1.3,0.1 5.7,1.8 7.7,2.2 2.8,0.6 5.8,1 9.1,1 h 6.5 c 3.4,0 6.1,-0.4 8.9,-1 2,-0.4 6.5,-2.1 7.7,-2.2 v 1 c 0,2.9 -12.5,4.5 -16.6,4.5 h -6.4 c -4.1,0 -16.9,-1.6 -16.9,-4.5 l 0,0 z"}],G["AC.IC.OTHER WATER SUPPLY LOCATION"]=[{type:"path",stroke:!1,d:"m 113.2,116.5 c 0,-2.9 4.4,-9.3 5.8,-11.8 2.8,-5 3.1,-6.8 4.6,-13 2.1,1.4 2.2,4.3 3,7.1 0.8,2.8 1.6,4.8 2.9,7 2.2,3.8 6.7,8 5,14.1 -1.6,5.8 -5.2,7.8 -12.2,7.5 -5.8,-0.2 -9.1,-4.9 -9.1,-11 z m -1.2,-0.4 v 0.6 c 0,7.5 4.6,12.2 12,12.2 6.8,0 12,-4.6 12,-11 v -1.3 c 0,-5 -4.7,-10 -6.6,-13.8 -1.1,-2.2 -1.6,-5.5 -2.3,-8.1 -0.9,-3.3 -2.4,-4 -4.8,-5.6 0,13.6 -10.3,20 -10.3,26.8 z m 4.8,3.6 c 0,2.4 1.8,4.4 3.8,4.4 0.7,0 1.5,-0.6 1.7,-1.3 -1.6,-0.4 -3.2,-2.5 -3.4,-4.4 l -2.1,1.3 z M 89.2,73 v 15.8 h -2.1 v -15.8 l 0.6,-0.1 1.5,0.1 z m -10.4,2.3 h 6.6 v 11 H 78.8 v -11 z m 37.2,1.1 c 0,-0.5 0.2,-0.6 0.6,-0.6 h 1.5 c 0.5,0 0.6,0.2 0.6,0.6 v 9.1 h -2.8 v -9.1 z m -24.9,-1.3 22.8,2.4 v 6.5 l -22.8,1.9 v -10.7 z m -27,11.8 h 12.9 v 1 l 8.3,0.1 1.2,2.4 1.6,0.3 c 0.6,0.1 1,-0.2 1.8,-0.3 l 0.9,-0.6 0.2,-2.4 22.8,-1.6 c 1.2,2.5 4.2,1.6 6.6,1 0,-0.7 0.2,-0.8 0.2,-1.5 v -9.5 c 0,-1.5 -0.8,-2.1 -2.3,-2.1 h -2.1 c -3.8,0 0.2,2.5 -5,1.6 -2.1,-0.4 -4.6,-0.4 -6.7,-0.7 -3.3,-0.5 -10.4,-1.3 -13.5,-1.3 -0.1,-3.1 -5.6,-3.3 -5.7,0.4 h -8.4 v 0.6 h -13 l 0.1,12.4 0,0 z m 15.6,-4.8 0,1.9 4.6,0 0,-1.9 z m 0,-4.2 0,1.7 4.6,0 0,-1.7 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 91,75.1 22.8,2.4 v 6.5 l -22.8,1.9 v -10.7 z m 24.9,1.3 c 0,-0.5 0.2,-0.6 0.6,-0.6 h 1.5 c 0.5,0 0.6,0.2 0.6,0.6 v 9.1 h -2.8 v -9.1 z M 78.8,75.3 l 0,11 6.6,0 0,-11 -6.6,0 z m 0.8,2.6 4.7,0 0,1.7 -4.7,0 0,-1.7 z m 0,4.2 4.7,0 0,1.9 -4.7,0 0,-1.9 z M 123.5,91.8 c -1.4,6.2 -1.8,8 -4.6,13 -1.3,2.5 -5.8,8.9 -5.8,11.8 0,6.1 3.3,10.8 9.1,11 7,0.2 10.5,-1.7 12.2,-7.5 1.7,-6.1 -2.8,-10.3 -5,-14.1 -1.3,-2.2 -2,-4.3 -2.9,-7 -0.8,-2.8 -0.9,-5.7 -3,-7.1 z m -4.6,26.7 c 0.2,1.9 1.8,4 3.4,4.4 -0.2,0.6 -1,1.3 -1.7,1.3 -2,0 -3.8,-2.1 -3.8,-4.4 l 2.1,-1.3 z M 89.2,73 v 15.8 h -2.1 v -15.8 l 0.6,-0.1 1.5,0.1 z"}],G["AC.IC.BANKING FINANCE AND INSURANCE INFRASTRUCTURE"]=e("€$£"),G["GR.IN.IC.PUBLIC VENUES INFRASTRUCTURE"]=[{type:"path",stroke:!1,d:"m 87.9,87.3 c -3.2,0 -5.8,2.6 -5.8,5.8 0,2.8 2.1,5.2 4.8,5.7 l 0,3.3 -3.8,0 0,2 3.8,0 0,9.4 2,0 0,-9.4 3.8,0 0,-2 -3.8,0 0,-3.3 c 2.7,-0.5 4.8,-2.8 4.8,-5.7 0,-3.2 -2.6,-5.8 -5.8,-5.8 z m 24,0 c -3.2,0 -5.8,2.6 -5.8,5.8 0,2.8 2.1,5.2 4.8,5.7 l 0,3.3 -3.8,0 0,2 3.8,0 0,9.4 2,0 0,-9.4 3.8,0 0,-2 -3.8,0 0,-3.3 c 2.7,-0.5 4.8,-2.8 4.8,-5.7 0,-3.2 -2.6,-5.8 -5.8,-5.8 z m -24,2 c 2.1,0 3.8,1.7 3.8,3.8 0,2.1 -1.7,3.8 -3.8,3.8 -2.1,0 -3.8,-1.7 -3.8,-3.8 0,-2.1 1.7,-3.8 3.8,-3.8 z m 24,0 c 2.1,0 3.8,1.7 3.8,3.8 0,2.1 -1.7,3.8 -3.8,3.8 -2.1,0 -3.8,-1.7 -3.8,-3.8 0,-2.1 1.7,-3.8 3.8,-3.8 z m 24.2,37.8 0,-3 -72.1,0 0,3 z m -3,-6.2 0,-2.8 -66.2,0 0,2.8 z M 66.8,98.2 c 0,1.3 -0.7,2.6 -0.7,4.3 -0,1.8 -0.2,3.1 -0.2,5 v 3.2 l 0.6,3.6 h 2.7 l -0.8,-6.4 v -1.8 c 0,-8.1 5,-17.9 9.3,-21.5 5.6,-4.6 11.6,-9.1 21.7,-9.1 h 0.9 c 9,0 17.1,4.4 21.6,8.8 3.2,3.2 4.1,4.7 6.4,8.7 1.4,2.4 3.3,8.4 3.3,12 v 4.3 c 0,1.4 -0.7,3 -0.7,4.4 v 0.5 h 2.7 l 0.6,-6.4 v -3.8 c 0,-1.6 -1,-5.2 -1.4,-6.6 -0.8,-2.5 -1.3,-3.6 -2.3,-5.7 -1.8,-3.8 -3.8,-6.4 -6.7,-9.3 -4.6,-4.6 -13.6,-9.6 -22.6,-9.6 h -2.5 c -7.8,0 -16.6,4.1 -20.6,7.9 -2.8,2.7 -4.4,4.1 -6.7,7.5 -1.1,1.6 -1.5,3 -2.5,4.6 -0.9,1.6 -1.2,4 -2,5.2 z"}],G["GR.IN.IC.RECREATIONAL AREA"]=[{type:"path",stroke:!1,d:"m 96.4,78.8 8.1,-0 c 0.9,0 2.4,5.7 2.4,6.9 l 1.5,4.3 c 0,0.4 2,6.6 2,7 v 0.6 l -19.4,-0 5.4,-18.8 z m -19.9,-0 11.1,0 -3.5,11.2 c 0,1.7 -1.9,5.7 -1.9,6.9 v 0.6 h -20.8 v 7.2 l 18.5,0 -1.2,3 -0.1,0.8 -2.6,8.3 -3.6,11.5 c 1.1,0 9.3,0.1 9.7,-0.1 0.2,-0.1 2,-6.8 2.3,-7.7 0.5,-1.2 4.5,-15 4.5,-15.2 v -0.6 l 23.5,0 6.7,23.6 9.8,0 -1.4,-4.8 -0.7,-2.6 -2.4,-7.8 -0.9,-2.8 -1.7,-5.7 h 15.8 v -7.2 h -18.2 l -2.9,-8.9 -0.1,-0.8 -1,-3 -1.7,-6.2 h 10.6 v -7.2 h -47.9 v 7.2 l 0,0 0,0 z m 62.1,16.9 0,-6.1 -15.2,0 0,6.1 z m -62.3,0 0,-6.1 -14.9,0 0,6.1 z"}],G["GR.IN.IC.SPECIAL NEEDS INFRASTRUCTURE"]=[{type:"path",stroke:!1,d:"m 73.1,111.2 c 0,-3.8 1,-5.8 2.3,-8.4 1.4,-2.8 3.3,-3.8 4.6,-5.8 l -1.1,-8.2 c -2.6,0.7 -7.7,6.5 -9.2,9 -2.4,4.1 -3.8,7.9 -3.8,14.2 v 3.3 c 0,2.2 2.2,8.1 3.1,9.6 2,3.2 3,4.5 5.5,7.1 3.6,3.6 10.7,7.1 17.9,7.1 h 1 c 4.9,0 9.9,-1.6 13.1,-3.6 1.7,-1 8.5,-6.2 8.5,-7.8 0,-1.2 -3.1,-6.6 -3.5,-8.4 -1.2,1.5 -1.6,3 -3,4.8 -1.2,1.5 -2.3,2.7 -3.8,3.8 -2.6,2 -6.8,4 -11.3,4 h -1.2 c -10.2,0 -19.1,-9 -19.1,-19.3 v -1.4 l 0,0 z m 8.9,-37.9 c 0.5,0.4 0.5,2.9 0.5,4 L 85,106.8 l 25.4,0 10,23 c 1.5,-0.1 5.5,-1.5 7.1,-2.1 1.2,-0.4 6.5,-1.4 6.5,-2.6 v -0.2 c 0,-0.7 -1.9,-4.8 -2,-6.3 l -7.6,2.6 -9,-21.6 H 91.6 l -0.4,-6 h 17.3 v -5.4 H 90.8 l -1.1,-12.9 c 2.6,-0.2 5.2,-3.9 5.2,-6.7 v -2.2 h -0.5 v -0.8 c 0,-0.8 -2.1,-3.1 -2.7,-3.5 -1,-0.7 -3.3,-1.6 -4.8,-1.3 -2.2,0.4 -3.2,0.8 -4.4,2 -0.7,0.7 -2.2,3.2 -2.2,4.3 v 1.2 c 0,2.4 0.8,3.6 1.7,4.9 l 0,0 z m 0.5,4 c 0,-1.1 0,-3.6 -0.5,-4 0,1.1 -0,3.6 0.5,4 z"}],G["GR.IN.IC.ADULT DAY CARE"]=[{type:"path",stroke:!1,d:"m 107,118.3 v -0.2 c 0,-15.5 22.4,-14.7 22.4,-0.6 v 1.3 c 0,5.4 -5.3,10.4 -10.8,10.4 h -0.6 c -5.9,0 -11,-5.1 -11,-11 z m -1.6,-22.2 h 4.6 v 10 c 0,0 -3.2,3.3 -3.8,4.3 -0.5,0.8 -2.2,4.7 -2.2,5.8 v 2.3 c 0,6.8 6.6,13.7 13.3,13.7 h 1 c 5.8,0 10.8,-5 11,-5 h 7.1 v -1.9 h -3.2 c 0.2,-0.5 0.8,-1.3 0.8,-1.9 v -11 c 0,-1.9 -1,-3.3 -2.1,-4 h -3.3 l -0.8,-0.7 c 1.1,-0.3 2,-0.9 2,-2.2 v -0.4 c 0,-0.5 -1,-1.7 -1.6,-1.7 h -5 v -5.4 c 0,-2.7 -1.5,-4.2 -4.2,-4.2 h -2.1 c -5.9,0 -4.6,5.8 -4.6,11.6 l -0.6,0.4 V 94.7 c -0.4,-0.2 -0.4,-0.4 -0.8,-0.4 h -5.4 v 1.7 z m -22.6,1 c 0,-2.2 3.3,-4.8 4.5,-6.6 1.4,1 1.4,1.8 3.4,2.8 1.4,0.7 2.6,1.4 4,1.9 2.4,0.9 2.2,-0.1 4.3,1.9 0.9,0.9 1.8,2.5 3.5,2.5 0.4,0 0.8,-0.8 0.8,-1.3 v -1.1 c 0,-2.8 -3.3,-3.6 -5.3,-4.5 -2.3,-0.9 -5.3,-1.6 -6.1,-3.8 -0.8,-2.3 -2.2,-4.6 -2.9,-6.9 -0.7,-2.1 -1.9,-5.1 -4.6,-5.1 h -0.4 c -3,0 -7.4,7.5 -8.1,10.4 -0.6,2.3 -1.6,4.7 -2.1,7.2 -0.5,2.8 -0.6,5.2 -1.1,8 -0.3,1.8 0.1,2.3 -0.6,4 -0.4,1.2 -0.8,2.3 -1.2,3.4 -0.9,2.3 -1.7,4.6 -2.5,6.8 -0.8,2.1 -4.9,11.8 -4.9,13.5 0,2.6 6.2,1.3 7.7,1.1 -0,-1.9 -2.3,-1.6 -3.1,-2.7 2.1,-3.1 3.8,-6.3 5.8,-9.5 1,-1.7 4.6,-9.2 5.4,-9.8 0.6,0.4 3,3.1 3.8,3.9 1.9,1.9 2,1.8 2.8,4.8 1.1,4.2 1.9,7.7 1.9,13.1 l 1.7,0.2 4.2,-0 c 1.3,0 1.8,-0.2 2.3,-1 -0.6,-1 -3.1,-1.7 -4.6,-2.1 v -1.1 c 0,-0.4 -0.1,-0.4 -0.4,-0.8 v -12.1 c -1.5,-2.3 -2.9,-4.9 -4.6,-7.1 -1.1,-1.6 -3.8,-5.2 -3.8,-7.6 v -2.5 l 0,0 z m 30.3,-9.7 v 1.6 c 0,1.5 2.3,3.9 4.2,3.9 h 0.8 c 2.1,0 4.2,-2.3 4.2,-4.5 V 87.6 c 0,-2.2 -2.2,-4.2 -4.5,-4.2 h -0.1 c -2.3,-0 -4.6,2 -4.6,4 z m -28.4,-15.6 v 1.7 c 0,0.6 1,2.1 1.4,2.5 0.6,0.6 1.8,1.2 2.9,1.2 h 1 c 2,0 4.2,-2.2 4.2,-4 v -1.4 c 0,-1.6 -2.5,-3.9 -4.5,-3.9 h -0.7 c -1.8,0 -4.2,2.2 -4.2,3.9 z"}],G["GR.IN.IC.AGRICULTURE AND FOOD INFRASTRUCTURE"]=[{type:"path",stroke:!1,d:"m 79.5,127.9 h -7.8 v -21.4 c 0,-1 6.8,-13.3 7.4,-13.6 1,-0.6 13.9,-7.1 14.1,-7.1 0.5,0 13.2,6.3 14.4,7 0.4,0.3 7.7,13.1 7.7,13.7 v 21.4 h -7.6 V 110.4 H 79.5 v 17.5 z m 37.4,-39.4 h 15.4 v 39.8 h -12.1 v -18.8 h 2.6 c -0.5,-0.8 -5.8,-9.8 -5.8,-10 V 88.5 z m 0.2,-1.9 c 0,-4.4 2.9,-8.2 7.2,-8.2 h 0.4 c 4.5,0 7.6,3.7 7.6,8.2 h -15.2 v 0 z M 105.2,82.1 h 8.9 c -0.2,1.6 -0.9,2.5 -0.9,5 0,2 0,3.9 0,5.8 -1.4,-1 -0.9,-2.8 -3.2,-4 -1.2,-0.6 -3.8,-2 -4.8,-2.3 v -4.6 z m 0,-2.8 c 0,-2.8 3.8,-7.4 6.9,-7.4 h 0.6 c 3.1,0 5.5,1.8 6.7,3.7 -0.2,0.2 -4.8,4.3 -4.8,4.3 h -9.5 v -0.6 z m -11.9,1.5 c -3.2,1.7 -6.6,3.2 -9.9,4.8 -1.7,0.9 -3.3,1.5 -5,2.4 -2.8,1.4 -2.3,0.7 -4,3.1 -0.9,1.3 -1.8,3.2 -2.7,4.7 -0.9,1.6 -1.9,3 -2.8,4.6 -1.6,2.9 -3.6,6.5 -5.4,9.1 h 2.8 v 22.5 H 84 V 114.7 h 19 v 17.3 h 33.3 V 87.5 c 0,-7.5 -4.2,-13 -11.7,-13 h -1.7 c -0.8,-2.9 -5.9,-6.5 -10,-6.5 h -0.4 c -6.4,0 -11,5.9 -11,12.1 v 4.6 l -8.2,-3.9 0,0 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 79.5,110.4 h 28.1 v 17.5 h 7.6 v -21.4 c 0,-0.6 -7.2,-13.4 -7.7,-13.7 -1.1,-0.8 -13.8,-7.1 -14.4,-7.1 -0.1,0 -13,6.5 -14.1,7.1 -0.6,0.4 -7.3,12.6 -7.3,13.6 v 21.4 h 7.8 v -17.5 z m 37.4,-10.8 c 0,0.1 5.3,9.2 5.8,10 h -2.6 v 18.8 h 12.1 v -39.8 h -15.4 v 11 z m 0.2,-13 h 15.1 c 0,-4.6 -3,-8.2 -7.6,-8.2 h -0.4 c -4.2,-0 -7.2,3.8 -7.2,8.2 z m -11.9,0 c 1.1,0.2 3.6,1.7 4.8,2.3 2.2,1.1 1.7,3 3.2,3.9 0,-2 0,-3.9 0,-5.8 0,-2.5 0.7,-3.4 0.9,-5 h -8.9 v 4.6 z m 0,-7.4 v 0.6 h 9.5 c 0,0 4.6,-4.1 4.8,-4.3 -1.2,-1.8 -3.6,-3.7 -6.7,-3.7 h -0.6 c -3.1,0 -6.9,4.6 -6.9,7.4 z"}],G["GR.IN.IC.AGRICULTURAL LABORATORY"]=[{type:"path",stroke:!1,d:"m 98.4,77.9 -0.1,0.3 2.6,0.6 0,-0.3 z m 2.1,7.3 0.4,-3.2 -0.3,-0.1 -0.4,3.2 z m -3.8,-16.8 0.1,-0.2 -1.4,-0.3 1,-2.6 -0.4,-0.3 -1.7,5.7 0.1,0 0.3,-0.1 0.7,-2.4 z m -1,5.3 c 0.8,0 0.5,-1.7 0.8,-2.3 l -0.4,-0.1 -0.4,2.4 z m 1.4,-5.5 0.6,-2.6 -0.4,-0.1 -0.6,2.7 z m 0.2,-2.7 0.1,-0.3 -1,-0.2 -0.1,0.2 z m 11.8,65.6 0,5.6 3.3,0 c 1.1,0 1.9,-0.2 2.4,-0.7 0.5,-0.5 0.8,-1.2 0.8,-2.1 -10e-6,-0.9 -0.3,-1.6 -0.8,-2.1 -0.5,-0.5 -1.3,-0.7 -2.4,-0.7 l -3.3,0 m 0,-6.2 0,4.6 3,0 c 1,0 1.7,-0.2 2.2,-0.6 0.5,-0.4 0.7,-1 0.7,-1.7 -10e-6,-0.8 -0.2,-1.3 -0.7,-1.7 -0.5,-0.4 -1.2,-0.6 -2.2,-0.6 l -3,0 m -2.1,-1.7 5.2,0 c 1.6,1e-5 2.8,0.3 3.6,1 0.8,0.7 1.3,1.6 1.3,2.8 -2e-5,0.9 -0.2,1.7 -0.7,2.2 -0.4,0.5 -1.1,0.9 -1.9,1 1,0.2 1.8,0.7 2.3,1.4 0.6,0.7 0.8,1.5 0.8,2.6 -1e-5,1.4 -0.5,2.4 -1.4,3.1 -0.9,0.7 -2.2,1.1 -3.9,1.1 l -5.4,0 0,-15.2 m -9.2,2 -2.8,7.5 5.6,0 -2.8,-7.5 m -1.2,-2 2.3,0 5.8,15.2 -2.1,0 -1.4,-3.9 -6.8,0 -1.4,3.9 -2.2,0 5.8,-15.2 m -16,0 2.1,0 0,13.4 7.4,0 0,1.7 -9.4,0 0,-15.2 M 98.6,92.5 c 0.9,-0.2 0.8,-1.8 1.1,-2.6 l 0.9,0.4 -1.4,4.2 -0.6,-2 z m -0.2,-0.4 0.1,0.2 c -0.5,-0.1 -0.8,-1.3 -0.8,-1.9 l 0.4,0.6 -0.3,-2.2 1.6,0.8 c -0,0.7 -0.4,2.3 -0.9,2.4 z m -0.9,-2.3 -0.6,-1.4 c 0.4,0.1 0.6,0.3 0.6,0.9 v 0.5 z m 2.6,-4.4 -0.6,3.9 -1.7,-0.8 v -3.4 -0.3 l 2.3,0.6 z m -2.6,-1.1 0.4,0.1 v 0.4 h -0.4 v 3.5 l -0.8,-0.4 0.1,0.4 h -0.2 c 0,-0.9 -1.2,-2.8 -1.6,-3.5 0.1,-0.1 0.1,-0.1 0.1,-0.4 v -0.4 l 2.4,0.6 0,-0.4 z m 6.1,-1.7 2.5,0.6 v 0.4 c 0,0.2 0,0.2 0.1,0.3 -1.2,0 -1.9,0.4 -2.8,0.8 l 0.2,-2 z m -6.1,1.7 -2.4,-0.8 0.1,-1.8 v -1 l 2.4,0.5 -0.2,3 z m 8.6,-1.6 c -0.3,0 -2.3,-0.4 -2.4,-0.6 0,0 0.2,-2.3 0.2,-2.7 l 2.2,0.4 0.1,1.6 -0,1.2 z m -12.7,-2.4 c 0.4,0 0.7,0.2 1.1,0.2 0.8,0.2 0.4,0.1 0.4,0.7 v 2.1 c -0.3,-0 -0.7,-0.2 -1,-0.3 -0.7,-0.2 -0.5,0.1 -0.5,-0.4 v -2.4 z m 10.7,-4.2 1.7,0.4 0.3,3 -2.2,-0.4 0.2,-3 z m -6.4,5.2 v -0.4 l -2.4,-0.5 0.3,-2.8 2.4,0.5 -0.2,2.9 h 0.3 v 0.4 h -0.3 z m -4,-4.2 1.6,0.4 -0.3,2.9 -1.5,-0.4 0.2,-2.9 z m 7.6,1.4 0.3,-3.1 2.4,0.6 -0.3,3 -2.4,-0.5 z m -0.4,-0.1 0.4,0.1 v 0.4 c 0.4,0 2.3,0.4 2.4,0.6 0,0.1 -0.2,2.3 -0.2,2.6 -0.8,0 -1.6,-0.4 -2.3,-0.4 -0.2,0 -0.2,0.2 -0.2,0.4 l 2.4,0.5 -0.2,2.2 h 0.2 c -0.5,0.7 -1.1,1.6 -1.4,2.4 -0.3,0.8 -0.7,2.1 -1.1,2.8 l -0.9,-0.4 0.6,-4 h -0.2 l -0.2,-0.1 v -0.4 l -2.3,-0.7 0.2,-3 2.5,0.5 v -0.3 h 0.4 l 0.2,-2.8 h -0.3 l -0.3,2.7 -2.4,-0.4 0.2,-2.9 c -0.3,-0.1 -0.2,0 -0.3,-0.4 h 0.2 l 0.2,0.1 0.4,-3.2 2.4,0.6 -0.3,3.1 z m 3.2,-5.4 v -0.3 l 0.3,0.1 v 0.3 c 1,0.1 1.1,0.1 1.2,1 0,0.3 0.2,1.8 0.3,1.9 l -1.7,-0.3 v 0.4 h -0.3 v -0.5 l -2.4,-0.6 0.3,-2.5 2.3,0.4 z m 0.2,-0.2 0.2,-2.9 c 0.6,0.1 0.7,2.4 0.8,3.1 l -1,-0.2 z m -5.1,-0.9 2.4,0.5 -0.3,2.6 -2.4,-0.6 0.4,-2.5 z m 4.9,0.8 c -3.3,-0.8 -2,0 -2,-3.3 l 2.2,0.4 -0.2,2.9 z m -4.4,-3.8 c 3.2,0.8 1.9,-0.2 1.9,3.2 l -2.3,-0.5 0.4,-2.7 z m -2.5,-0.4 2.1,0.4 -0.4,2.7 -2.2,-0.4 0.4,-2.6 z m 7.1,1.3 v -0.4 l -2.2,-0.4 0.2,-2.6 c 0.3,0 0.7,0.1 1.1,0.2 0.6,0.1 0.5,0 0.7,0.6 0.3,1 0.3,0.9 0.3,2.2 l 0.3,0.4 -0.4,0.1 z m -4.1,-3.9 1.8,0.4 -0.2,2.6 -2.1,-0.4 0.4,-2.6 z m 2.3,-2.2 1.4,2.6 -1.5,-0.2 0.1,-2.4 z m -1.6,-1.6 0,-0.1 1.2,1.2 -0.1,0 c 0.3,-0.1 0.3,-0.1 0.4,0.3 l -0.2,-0.2 -0.2,2.6 -1.8,-0.4 0.7,-3.5 z m -2.9,3 c 0.5,-1.1 0.3,-3.4 1.9,-3.4 0.3,0 0.2,0 0.5,0.1 l -0.6,3.7 -1.8,-0.4 z m -0.4,-0.1 0.4,0.1 v 0.3 l 1.8,0.4 -0.4,2.6 -2.1,-0.4 v 0.2 l -0.1,0.2 -0.2,-0.1 h -0.2 l -0.5,2.6 -1.6,-0.3 v 0.3 c 0.5,0 1,0.3 1.4,0.3 0.2,0 0,-0.2 0.5,-0.2 v 0.4 l 2.2,0.4 -0.3,2.4 -2.4,-0.6 v 0.4 l 2.3,0.6 -0.3,3.1 -2.4,-0.6 0.4,-3.2 h -0.4 c -0,0.8 -0.3,1.7 -0.3,2.4 -0,0.8 -0,0.7 -0.7,0.5 -0.2,-0 -0.9,-0.1 -0.9,-0.3 -0,-0.3 0.2,-2 0.3,-2.4 0.2,-1.2 0.5,-0.4 1.7,-0.3 l 0.1,-0.3 c -0.2,-0.1 -1.6,-0.3 -1.6,-0.5 0,-0.8 0.4,-1.5 0.4,-2.3 -0.6,0.1 -0.7,2.3 -0.8,3 -0.1,0.8 -0.4,2.6 -0.4,3.3 0,0.8 -0.2,2.4 -0.2,3.5 0,1.3 -0.1,2.4 -0.1,3.8 h 0.3 v -0.9 l 1.5,0.4 v 1 l -3.4,-0.5 h -0.1 c -5,0 -8.8,9.7 -8.8,15.4 0,2.3 0.8,5.4 2,6.2 0.7,-1.4 1.3,-3.1 2,-4.6 0.8,-1.5 1.4,-3.1 2.1,-4.6 0.3,-0.7 0.7,-1.5 1,-2.2 0.4,-0.8 0.8,-1.5 1.8,-1.2 0.9,0.3 1.9,3.2 2.1,4.6 0.5,3.8 0,9 0.6,12.6 0.7,4 2.3,6.4 5.4,8 1,-0.4 2.5,-0.6 3.4,-1.2 0.9,-0.6 1.8,-1.2 2.4,-2.2 1.2,-1.8 2,-4.1 2,-7.2 l 0,-0.6 -0.3,-5.6 v -0.3 c 0,-2.7 0.5,-8.3 2.8,-8.3 h 0.1 c 1.4,0 2,0.6 2.6,1.4 0.6,0.8 1.2,1.4 1.8,2.2 1.2,1.5 2.6,2.9 2.6,5.5 v 0.6 l 0.4,0.1 c 0.4,-1.6 1.8,-2.8 1.8,-5.2 v -1.5 c 0,-3.5 -1.4,-6.2 -3,-8.3 -0.8,-1.1 -1.8,-2 -2.8,-2.8 -0.7,-0.5 -2.7,-1.9 -3.8,-1.9 l -0.8,-0 -2.3,0.4 c -0.2,-0.8 0.1,-2 -0.1,-3.1 -0.1,-0.8 -0.2,-2.5 -0.2,-3.3 -0.2,-2.1 -0.5,-4.2 -0.9,-6.1 -0.6,-3.3 -2,-8.2 -4.6,-9.4 v 0.3 l -0.4,-0.1 0.1,-0.3 -0.8,-0.1 c -0.9,-0.1 -1.9,0.8 -2.3,1.3 -0.2,0.3 -1.7,2 -0.8,2 0.2,-0.6 1.3,-2.2 1.8,-2.4 l -0.8,2.7 z m 3,20.4 1.6,0.5 0.2,-0 c -0.1,-0.5 -1.4,-0.6 -1.8,-0.8 v 0.4 z m 3.6,-9.8 0.2,-2.6 -0.2,-0.1 -0.2,2.6 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 98.6,92.5 0.6,2 1.4,-4.2 -0.9,-0.4 c -0.3,0.7 -0.2,2.3 -1.1,2.6 z m -0.6,-1.4 -0.3,-0.6 c 0,0.6 0.4,1.8 0.8,1.9 l -0.1,-0.2 c 0.6,-0.2 0.9,-1.8 1,-2.4 l -1.6,-0.8 0.2,2.2 z m 2.4,-5.9 c 0.4,0.2 1.7,0.3 1.8,0.8 l -0.2,0 -1.6,-0.5 -0.6,4 0.9,0.5 c 0.4,-0.7 0.8,-2 1.1,-2.8 0.4,-0.8 1,-1.7 1.4,-2.4 h -0.2 l 0.2,-2.3 -2.4,-0.5 -0.4,3.2 z m -1,4.1 0.6,-3.9 -2.3,-0.6 0,0.2 0,3.4 z m 0.6,-4.2 0.4,-3.2 -2.5,-0.5 -0.2,3 z m 0.7,-6.6 0.3,-3.1 -2.4,-0.6 -0.4,3.2 z m -5.1,-4.8 -0.1,0.3 c -1.2,-0 -1.5,-0.9 -1.7,0.3 -0.1,0.4 -0.3,2.1 -0.3,2.4 0,0.2 0.7,0.2 1,0.3 0.7,0.2 0.7,0.2 0.7,-0.5 0,-0.8 0.3,-1.7 0.4,-2.4 h 0.4 l -0.4,3.2 2.4,0.6 0.4,-3.2 -2.3,-0.5 v -0.4 l 2.3,0.6 0.3,-2.4 -2.2,-0.4 c -0.3,0.6 0,2.3 -0.8,2.3 z m 8.3,-1 0.2,-2.9 -2.2,-0.4 c 0,3.4 -1.3,2.6 2,3.3 z m -6.2,11.7 -0.4,-0.1 v 0.4 l -2.4,-0.6 v 0.4 c 0,0.2 -0,0.2 -0.1,0.4 0.4,0.7 1.6,2.6 1.6,3.5 h 0.2 l -0.1,-0.4 0.8,0.4 v -3.5 h 0.4 l -0,-0.4 0,0 z m -0.3,5.4 0,-0.6 c 0,-0.5 -0.2,-0.8 -0.6,-0.9 l 0.6,1.4 z m 2.6,-4.8 0,0.4 0.2,0.1 0.2,0 0,-0.3 z m 3.3,-0.4 c 0.8,-0.4 1.5,-0.8 2.8,-0.8 -0.1,-0.1 -0.1,-0.1 -0.1,-0.2 v -0.4 l -2.5,-0.6 -0.2,2 z m -8.3,-1.1 2.4,0.8 0.2,-3 -2.5,-0.5 0,1 z m -1.8,-0.8 c 0,0.5 -0.2,0.2 0.5,0.4 0.3,0.1 0.6,0.2 1,0.3 v -2.1 c 0,-0.7 0.4,-0.6 -0.4,-0.7 -0.4,-0.1 -0.7,-0.2 -1.1,-0.2 v 2.4 z m 7.5,-4 h 0.3 l -0.2,2.8 h -0.4 v 0.4 l 0.3,0.1 c 0,-0.2 0,-0.4 0.2,-0.4 0.7,0 1.6,0.4 2.3,0.4 0,-0.3 0.3,-2.5 0.2,-2.6 -0,-0.2 -2,-0.6 -2.3,-0.6 v -0.4 l -0.4,-0.1 v 0.3 z m 3.3,-8.9 0.4,-0 -0.3,-0.4 c 0,-1.3 -0,-1.2 -0.3,-2.2 -0.2,-0.6 -0,-0.5 -0.7,-0.6 -0.4,-0.1 -0.8,-0.2 -1.1,-0.2 l -0.2,2.6 2.2,0.4 v 0.4 z m -2.4,-0.9 0.2,-2.6 -1.8,-0.4 -0.4,2.6 z m 4.4,13.8 0,-1.2 -0.1,-1.6 -2.2,-0.4 c 0,0.4 -0.2,2.7 -0.2,2.7 0.1,0.2 2.2,0.6 2.4,0.6 z m -7.8,-4.6 -0.2,2.9 2.4,0.4 0.3,-2.7 z m -0.2,3.2 0,-0.4 -0.3,0 0.2,-2.9 -2.3,-0.5 -0.3,2.8 2.4,0.5 0,0.4 z m -3.1,-1 0.3,-2.9 -1.6,-0.4 -0.2,2.9 z m 11.1,-0.8 -0.3,-3 -1.7,-0.4 -0.2,3 z m -2,-6.6 -2.3,-0.4 -0.3,2.5 2.4,0.6 z m -0.4,6 0.2,-3 -2.4,-0.6 -0.2,3.1 z m -2.4,-4 0.3,-2.6 -2.3,-0.5 -0.3,2.5 z m -2.9,3.2 0.1,-0.3 -0.2,-0.1 h -0.2 c 0,0.4 -0.1,0.3 0.2,0.4 z m 5.8,-2.4 1.7,0.3 c -0.1,-0.2 -0.2,-1.6 -0.3,-1.9 -0.1,-1 -0.2,-1 -1.2,-1 l -0.2,2.6 z m 0,0.3 0,-0.3 -0.3,-0.1 0,0.4 z m 0.2,-3 0,-0.3 -0.2,-0.1 0,0.3 z m 0,-0.3 1,0.2 c -0.1,-0.6 -0.2,-3 -0.8,-3 l -0.2,2.9 z m -5.1,-1.1 2.3,0.5 c 0,-3.4 1.3,-2.5 -1.9,-3.2 l -0.4,2.7 z m -2.5,-0.6 2.2,0.4 0.4,-2.7 -2.1,-0.4 z m 1.1,-5.6 -0.6,2.6 2.1,0.4 0.4,-2.6 -1.8,-0.4 0,-0.3 -0.4,-0.1 -0.1,0.3 z m -0.6,2.8 0,-0.2 -0.4,0 -0.1,0.2 0.2,0 0.2,0.1 z m 0.2,-2.9 -1,-0.2 -1,2.6 1.4,0.3 z m 4.8,0.7 1.5,0.2 -1.4,-2.6 z m -2.1,-0.4 1.8,0.4 0.2,-2.6 0.2,0.2 c -0,-0.4 -0,-0.3 -0.4,-0.3 l 0.1,-0.1 -1.2,-1.1 -0.1,0.1 -0.7,3.5 z m -2.2,-0.4 1.8,0.4 0.6,-3.7 c -0.4,-0 -0.2,-0.1 -0.6,-0.1 -1.6,0 -1.4,2.3 -1.9,3.4 z"}],G["GR.IN.IC.ANIMAL FEEDLOT"]=[{type:"path",stroke:!1,d:"m 121.6,107.1 -0.4,-2.3 -0.2,-2 h 16.3 l -1.7,13.2 h -13 v -0.6 l -1,-8.2 z m 16.1,4.3 0.4,-2.3 0.9,-6.2 -0.1,-1.6 h -19.6 l 1.4,10.7 0.3,0.6 0.5,4.3 -0.1,0.6 h 15.7 v -1.6 l 0.6,-4.6 z M 123,82.6 c -3.3,-0.8 -4.6,0.4 -6.8,1.9 h -1.4 c -0.3,0.4 -0.6,1.2 -1.2,1.2 h -1 c -2.2,0 -3.9,-1.8 -5.8,-1.8 h -0.6 c -0.9,0 -2.1,0.8 -3.9,0.8 -5.1,0 -3.9,0.2 -8,1.5 -2,0.6 -6.2,0.8 -8.9,0.8 h -5.2 c -2.8,0 -5,-0.6 -7.2,-0.6 -2.6,0 -4.7,0.2 -7.4,0.2 -0.5,0 -0.5,-0.1 -0.8,-0.2 -2.4,1.2 -3.1,4.2 -3.1,7.8 0,3.6 -0.6,6.3 -0.6,10.1 v 0.2 c 0,0.6 0.1,0.6 0.2,1 l 1,-0.3 0,-0.5 h 0.4 l 0.2,-12.2 h 0.2 c 0,2 0.1,4.5 0.6,6 0.4,1.2 1.7,3.8 1.7,4.9 v 0.2 l -1.6,13.2 h 3.7 c 0,-1.4 -0.4,-1.1 -0.4,-2.1 v -2.1 c 0,-1.4 1,-4.2 2.3,-4.3 0.4,1.5 3.3,3.7 3.3,6.8 v 0.6 c 0,0.6 -0.1,0.6 -0.2,1 0.4,-0.1 0.5,-0.2 1,-0.2 1.2,0 3.5,0.7 3.5,-0.4 0,-0.3 -1.9,-3.2 -2.2,-3.5 -0.4,-0.5 -1.3,-3.6 -1.3,-4.3 v -0.2 c 0,-0.2 1.2,-2.3 1.2,-4.8 4,2.2 3.5,2.7 9.9,2.7 2.2,0 4.2,0.5 6,0.4 1,-0 3.3,-1.4 4.3,-1.9 0,1.2 0.4,2.4 0.2,3.3 l -1.2,8 c 1,0.3 1.6,0.6 2.8,0.6 h 0.6 -0.2 l 0.7,-11.3 c 0.6,0.4 2.8,7.1 2.6,8.4 l -0.3,2.3 c 0.8,0.4 1.5,0.6 2.6,0.6 h 1 l -1.2,-7.4 -0.1,-0.8 c 0,-0.9 1.6,-0.7 2.5,-1.2 0.6,-0.3 1.4,-1.2 1.8,-1.7 1.1,-1.5 2,-2.7 3,-4.2 3.9,-5.4 3.5,-2.4 10.2,-4 v -0.6 h 1.6 c 1,0 1.8,-0.8 1.8,-1.8 v -0.4 c 0,-2.4 -2.5,-2.5 -2.5,-5.6 l -3.3,-3.4 5.4,-2.9 z m 14.6,28.9 c 0.4,-0.4 0.4,-1.5 0.4,-2.3 l -0.4,2.3 z m -16.1,-4.3 c 0,-0.8 0,-1.9 -0.4,-2.3 l 0.4,2.3 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 121.2,104.9 c 0.4,0.4 0.4,1.5 0.4,2.3 l 1,8.2 v 0.6 h 13 l 1.7,-13.2 h -16.3 l 0.2,2.1 z"}],G["GR.IN.IC.FARM/RANCH"]=[{type:"path",stroke:!1,d:"m 119.9,119 v -0.2 c 0,-2 1.5,-3.7 3.5,-3.7 h 0.4 c 2.2,0 3.7,1.6 3.7,4 v 0.6 c 0,1.2 -2.1,2.8 -3.7,2.8 h -0.4 c -1.9,0 -3.5,-1.6 -3.5,-3.5 z m -52,-10.7 c 1.3,-2 1.1,-2.7 3.2,-4.4 1.3,-1 3.3,-1.9 5.5,-1.9 h 0.6 c 4.7,0 9,4.1 9,8.8 v 1.1 c 0,5 -4,9.2 -8.8,9.2 H 76.9 c -5.4,0 -9.4,-4.2 -9.4,-9.6 0,-1.4 0.4,-1.6 0.4,-3 l 0,0 z m 7.9,-20.2 c -0.8,0 -1.5,-4.4 -1.8,-5.3 -0.2,-1 -1.3,-4.6 -1.3,-5.5 h 24.1 c 0.5,0 1.3,-0.8 1.3,-1.3 v -2.2 c 0,-0.7 -0.8,-1.1 -1.5,-1.1 h -31.8 c -0.7,0 -1.5,0.4 -1.5,1.1 v 2.2 c 0,0.5 0.8,1.3 1.3,1.3 h 3.5 l 2.6,16 -6.8,2.5 2.8,3.4 c -1,1.3 -2.3,2.1 -3.6,4.2 -0.4,0.8 -1.9,4.4 -1.9,5.5 v 2.2 c 0,5.4 1.6,8.8 4.3,11.5 2.3,2.3 6.5,4.8 11,4.8 h 0.4 c 8.8,0 15.8,-7.4 15.8,-16 h 13.4 c 0.6,0 1.9,1.4 2.4,1.8 h 8.6 c -1.1,1.6 -2.2,2.9 -2.2,5.7 0,4.6 3.9,8.6 8.6,8.6 4.4,0 8.8,-3.8 8.8,-7.9 v -2 c 0,-1.2 -1.5,-3.4 -2,-4.4 h 7.2 l 1,-4.6 h -7.2 v -0.6 l 1.2,-8.1 -0.1,-3.3 c 0,-0.6 -1.7,-2.1 -2.2,-2.4 l -16,-0.5 V 78.2 c 0,-0.5 -0.4,-0.9 -0.9,-0.9 -0.5,0 -0.9,0.4 -0.9,0.9 v 15.4 c -2.2,-0.2 -6,-0.4 -8.1,-0.4 -1.3,0 -2.9,0.1 -4.2,0 -2.1,-0.1 -2,-1.3 -2.9,-1.3 h -4.6 l 2,12.3 H 91.1 V 98.6 C 91.1,97.8 87.1,94.4 86.1,94.4 H 78.7 V 89.8 L 77.5,88.1 75.8,88 z M 88.1,92 c 0,0.5 0.1,0.2 0.2,0.9 h 0.6 c 0.9,0 8.5,-6.4 10.1,-6.8 V 85.4 c 0,-0.5 -0.2,-0.6 -0.6,-0.6 h -0.4 C 97.5,84.7 88.1,91.6 88.1,92 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 119.9,119 c 0,1.9 1.6,3.5 3.5,3.5 h 0.4 c 1.6,0 3.7,-1.6 3.7,-2.8 v -0.7 c 0,-2.3 -1.5,-4 -3.7,-4 h -0.4 c -2,0 -3.5,1.7 -3.5,3.7 v 0.2 z m -52,-10.7 c 0,1.4 -0.4,1.7 -0.4,3.1 0,5.4 4.1,9.6 9.4,9.6 h 0.6 c 4.8,0 8.8,-4.3 8.8,-9.2 v -1.1 c 0,-4.7 -4.3,-8.8 -9,-8.8 h -0.6 c -2.2,0 -4.3,0.9 -5.5,1.9 -2.2,1.7 -1.9,2.4 -3.2,4.4 z"}],G["GR.IN.IC.GRAIN STORAGE"]=[{type:"path",stroke:!1,d:"m 122.8,69.6 c 0.4,0.1 0.9,0.5 1.3,1 0.4,0.5 0.8,1.2 1.3,2 l 2.1,4.1 -2.2,0 -1.9,-3.9 c -0.5,-1 -1,-1.7 -1.5,-2 -0.5,-0.3 -1.1,-0.5 -1.9,-0.5 l -2.2,0 0,6.4 -2.1,0 0,-15.2 4.6,0 c 1.7,1.5e-5 3,0.4 3.9,1.1 0.9,0.7 1.3,1.8 1.3,3.3 -1e-5,1 -0.2,1.7 -0.7,2.4 -0.4,0.6 -1.1,1.1 -1.9,1.3 m -5.1,-6.4 0,5.4 2.6,0 c 1,8e-6 1.7,-0.2 2.2,-0.7 0.5,-0.5 0.8,-1.1 0.8,-2 -1e-5,-0.9 -0.3,-1.6 -0.8,-2 -0.5,-0.5 -1.2,-0.7 -2.2,-0.7 l -2.6,0 m -12.3,-0.3 c -1.5,1.4e-5 -2.7,0.6 -3.6,1.7 -0.9,1.1 -1.3,2.6 -1.3,4.5 0,1.9 0.4,3.4 1.3,4.5 0.9,1.1 2.1,1.7 3.6,1.7 1.5,1e-6 2.7,-0.6 3.5,-1.7 0.9,-1.1 1.3,-2.6 1.3,-4.5 -2e-5,-1.9 -0.4,-3.4 -1.3,-4.5 -0.9,-1.1 -2,-1.7 -3.5,-1.7 m 0,-1.7 c 2.1,1.6e-5 3.8,0.7 5.1,2.1 1.3,1.4 1.9,3.3 1.9,5.7 -2e-5,2.4 -0.6,4.3 -1.9,5.7 -1.3,1.4 -3,2.1 -5.1,2.1 -2.1,0 -3.8,-0.7 -5.1,-2.1 -1.3,-1.4 -1.9,-3.3 -1.9,-5.7 -10e-7,-2.4 0.6,-4.3 1.9,-5.7 1.3,-1.4 3,-2.1 5.1,-2.1 m -21,0.3 12.8,0 0,1.7 -5.4,0 0,13.4 -2.1,0 0,-13.4 -5.4,0 0,-1.7 m -2,0.5 0,2 c -0.8,-0.4 -1.5,-0.6 -2.2,-0.8 -0.7,-0.2 -1.4,-0.3 -2,-0.3 -1.1,1.4e-5 -2,0.2 -2.6,0.7 -0.6,0.4 -0.9,1 -0.9,1.8 -4e-6,0.7 0.2,1.2 0.6,1.5 0.4,0.3 1.2,0.6 2.3,0.8 l 1.2,0.3 c 1.5,0.3 2.7,0.8 3.4,1.5 0.7,0.7 1.1,1.7 1.1,2.9 -1.2e-5,1.5 -0.5,2.6 -1.5,3.3 -1,0.8 -2.4,1.1 -4.3,1.1 -0.7,0 -1.5,-0.1 -2.3,-0.2 -0.8,-0.2 -1.6,-0.4 -2.5,-0.7 l 0,-2.1 c 0.8,0.5 1.6,0.8 2.4,1.1 0.8,0.2 1.6,0.4 2.4,0.4 1.2,1e-6 2.1,-0.2 2.7,-0.7 0.6,-0.5 1,-1.1 1,-2 -10e-6,-0.7 -0.2,-1.3 -0.7,-1.7 -0.5,-0.4 -1.2,-0.7 -2.2,-0.9 l -1.2,-0.2 c -1.5,-0.3 -2.6,-0.8 -3.3,-1.4 -0.7,-0.6 -1,-1.6 -1,-2.7 -10e-7,-1.3 0.5,-2.4 1.4,-3.2 0.9,-0.8 2.3,-1.2 3.9,-1.2 0.7,1.6e-5 1.4,0.1 2.2,0.2 0.7,0.1 1.5,0.3 2.3,0.6 m 24.4,48.1 -0.2,2.4 h 0.4 l -1.7,3 -1,-1.7 -0.1,2 0.5,0.6 -1.2,3 -1.5,-3 0.4,3.6 0.8,0.2 -3.1,9.7 -0.5,-4.2 0.1,-1.8 c 0,-1.5 0.8,-4.7 1,-6.3 0.3,-1.7 1.3,-4.5 1.4,-6 0.6,0.1 0.4,0.2 0.8,0.2 0.4,0 2.3,-1.5 2.6,-1.8 l -3,0.6 0.8,-2.7 c 0.6,0.1 0.4,0.2 0.8,0.2 0.4,0 2.6,-1.7 2.8,-2 l -3,0.8 0.7,-2.4 c 1.3,0 2.1,-0.8 2.8,-1.4 l -2.4,0.4 0.8,-2 c 1.1,-0 1.5,-0.9 1.8,-1.8 l -1.3,0.7 2.3,-6.1 -0.8,-0.1 -2.1,5.9 -0.3,0 -0.5,-2.1 -0.1,-0 c 0,1.5 -0.4,1.6 -0.4,2.4 0,0.5 0.2,0.5 0.6,0.6 l -0.9,2.1 -1,-1.4 c -0.1,1.6 -0.4,1.9 0.7,2.4 l -0.8,2.4 -1.7,-2.2 0.4,2.8 0.6,0.5 -0.5,2.7 -1.5,-1.9 0.2,2.4 0.9,0.5 c 0,0.4 -1,4.6 -1.2,6 -0.4,2.3 -0.9,3.5 -0.9,6.3 l -1.2,-3.6 0.6,-0.8 -0,-2 -1.2,1.2 -0.8,-2.8 0.6,-0.8 -0,-2 -1.1,1.2 -0.7,-1.7 c 1,-0.5 1,-1.6 1,-3.2 l -1.3,2.1 c -0.7,-0.2 -1.1,-1.4 -1.3,-2.3 0.3,-0.4 0.6,-0.5 0.6,-1 v -1.6 h -0.4 l -0.7,1.8 c -0.2,-0.2 -0.7,-0.7 -0.7,-1.2 0,-0.4 0.6,-0.3 0.6,-1 v -0.2 c 0,-1.1 -0.4,-1.1 -0.4,-2.4 l -0.7,2.3 -0.3,0 -2.8,-5.9 -0.4,0.2 2.5,5.7 -1.3,-0.7 1,1.9 1,0 0.6,1 -2.6,-0.4 c 0.4,0.4 1.7,1.4 2.4,1.4 0.1,0 0.4,-0.1 0.6,-0.2 l 1,2.2 -3.2,-0.6 c 1.1,1 2,1.7 3.6,1.6 l 1.1,2.7 -2.9,-0.4 c 0.7,1 1.7,1.3 3,1.5 0.4,0.1 1.1,2.8 1.2,3.5 l -3,-0.6 2.2,1.6 h 1 c 1.2,2.3 2.4,11.9 2.4,15.8 h 1.4 l -0.2,-2.2 0,-1 c 0,-4 2.9,-9.3 3.2,-12.3 0.8,0.1 0.5,0.2 1,0.2 0.2,0 2.9,-1.2 3.2,-1.4 l -3.6,0.3 1.2,-3.1 0.8,0.4 3,-1.3 -3.2,0.2 1.4,-2.8 c 0.4,0.1 0.4,0.2 1,0.2 0.3,0 2.1,-1 2.4,-1.2 l -2.8,0.2 1.4,-2 c 1.5,0.1 1.5,-0.4 2.4,-1.6 l -1.4,0.4 c 0.5,-1.1 1.2,-2.2 1.8,-3.2 0.4,-0.6 2,-2.7 0.8,-3 l 0.2,0.1 -3.4,5.8 -0.4,-2.3 h -0.2 c 0,1.4 -0.6,1.7 -0.6,2.2 0,0.3 0.3,0.7 0.4,1 l -1.5,2 -0.7,-1.9 z m -25.4,13.5 c 0,-3.7 0.1,-9.1 0.7,-12.4 0.4,-2 0.1,-4 0.6,-6 0.4,-1.7 0.4,-4.2 0.8,-5.8 2.8,-10.1 1,-11.8 14.3,-11.8 h 4.4 c 11.6,0 12.6,1.2 14.2,11.3 1.2,7.6 2,14.6 2,23.6 v 8.3 l -0.4,3.6 c -1.1,1.6 -2.1,3.4 -4.9,3.4 H 86.7 c -5.4,0 -5.3,-6.4 -5.3,-11.9 v -2.4 z m -5.8,-32.5 c 2.1,-0.6 0.4,-1.3 4.4,-1 2.4,0.2 3,0.3 5,0.8 -0.7,1.1 -4.6,3 -6.5,3 h -0.4 c -0.9,0 -2.4,-1.2 -2.4,-2 v -0.8 h -0 z m 43.2,-1.5 c 2.2,-0.2 4.8,0.9 4.8,3.1 v 0.6 c 0,0.6 -0.6,0.8 -1.2,0.8 h -0.6 c -1.8,0 -6.2,-2.7 -6.9,-3.9 l 4,-0.6 z m -36.6,-6.7 c 0,-1 1,-2.2 1.8,-2.2 h 0.6 c 0.6,0 1.4,1.6 1.4,2.2 v 4.2 c 0,1.3 -0.4,1.5 -0.4,2.8 -1,-0.3 -3.4,-4.3 -3.4,-5.5 v -1.4 h -0 z m 31.7,2.8 c 0,-2.8 -0,-5.2 2.8,-5.2 h 0.6 c 0.6,0 1,0.7 1,1.4 0,2 -3,6.8 -4.4,7.3 v -3.6 h -0 z m 1.4,3.8 c 0.5,-1.8 3.8,-5 3.8,-7.1 v -1.4 c -0.6,-0.3 -0.7,-1.2 -1.6,-1.2 h -0.6 c -2.6,0 -3.8,2 -3.8,4.5 v 4.2 c -2,-0.5 -2.3,-1 -5.2,-1.2 -2,-0.2 -3.7,-0.4 -6,-0.4 h -3.6 c -4.8,0 -8.9,0.3 -12.1,2 0.2,-0.7 0.4,-0.9 0.4,-1.8 v -3.4 c 0,-1.4 -1,-3.8 -2.2,-3.8 h -0.8 c -0.8,0 -2.6,1.9 -2.6,3 0,2 2.1,5.5 3,6.8 l -5.7,-0.5 c -1.2,0 -3.4,1.1 -3.4,2.1 v 0.6 c 0,1.3 1.7,2.8 3,2.8 h 0.2 c 2.9,0 4.5,-2 6.3,-2.4 -1.9,3.5 -3.8,22 -3.8,28.1 v 6 c 0,5.9 0.3,12.3 6.1,12.3 h 26.1 c 4.1,0 6.1,-3.8 6.1,-7.9 v -10.5 c 0,-2.3 -0.2,-5.5 -0.4,-7.7 -0.2,-1.8 -0.8,-5.7 -0.8,-7.4 0,-2.6 -0.7,-4.7 -1,-7.1 -0.2,-2.1 -1.3,-4.3 -1.8,-6.2 1.2,0.6 4.9,3 6.1,3 h 1.2 c 1,0 1.8,-0.8 1.8,-1.8 v -0.2 c 0,-2.2 -1.5,-3.8 -3.8,-3.8 h -2.6 l -2.8,0.4 z m -28.1,0.6 c 0.5,1.9 8.9,3.2 11.9,3.2 h 1 c 3.1,0 12.5,-1.4 12.7,-3.6 -4.1,-1 -6.5,-1.8 -11.9,-1.8 h -1.4 c -2.4,0 -4.4,0.4 -6.5,0.6 -2.9,0.4 -3.8,1.1 -5.8,1.6 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 105.3,110.1 c -0.3,0.3 -2.2,1.8 -2.6,1.8 -0.4,0 -0.2,-0.1 -0.8,-0.2 0,1.5 -1.1,4.3 -1.3,6 -0.3,1.6 -1,4.8 -1,6.3 l -0.1,1.8 0.5,4.2 3.1,-9.7 -0.8,-0.2 -0.4,-3.6 1.5,3 1.2,-3 -0.5,-0.6 0.1,-2 1,1.7 1.7,-3 h -0.4 l 0.2,-2.4 -0.3,-1.2 -1.2,1.2 z m 0,0 1.2,-1.2 0.3,1.2 0.7,1.9 1.5,-2 c -0.1,-0.3 -0.4,-0.7 -0.4,-1 0,-0.5 0.6,-0.8 0.6,-2.2 h 0.2 l 0.4,2.3 3.4,-5.7 -0.2,-0.1 c 1.3,0.4 -0.4,2.4 -0.8,3 -0.6,1 -1.3,2.1 -1.8,3.2 l 1.4,-0.4 c -0.8,1.2 -0.9,1.7 -2.4,1.6 l -1.4,2 2.8,-0.2 c -0.3,0.2 -2,1.2 -2.4,1.2 -0.5,0 -0.5,-0.1 -1,-0.2 l -1.4,2.8 3.2,-0.2 -3,1.3 -0.8,-0.4 -1.2,3.1 3.6,-0.4 c -0.3,0.2 -2.9,1.4 -3.2,1.4 -0.5,0 -0.2,-0.1 -1,-0.2 -0.3,2.9 -3.2,8.2 -3.2,12.3 l -0.1,1 0.3,2.2 h -1.4 c 0,-4 -1.2,-13.6 -2.4,-15.8 h -1 l -2.2,-1.6 3,0.6 c 0,-0.7 -0.8,-3.4 -1.2,-3.5 -1.3,-0.2 -2.3,-0.5 -3,-1.5 l 2.9,0.4 -1.1,-2.8 c -1.5,0.1 -2.5,-0.6 -3.6,-1.6 l 3.2,0.6 -1.1,-2.2 c -0.2,0.1 -0.5,0.2 -0.6,0.2 -0.7,0 -2,-1 -2.4,-1.4 l 2.6,0.4 -0.6,-1 h -1 l -1,-1.9 1.3,0.7 -2.5,-5.7 0.4,-0.2 2.8,5.9 0.3,-0 0.7,-2.4 c 0,1.3 0.4,1.2 0.4,2.4 v 0.2 c 0,0.7 -0.6,0.6 -0.6,1 0,0.4 0.5,1 0.7,1.2 l 0.7,-1.8 h 0.4 v 1.6 c 0,0.5 -0.3,0.6 -0.6,1 0.2,0.9 0.5,2.1 1.3,2.3 l 1.3,-2.1 c 0,1.5 0,2.6 -1,3.2 l 0.7,1.7 1.1,-1.2 0,2 -0.6,0.8 0.8,2.8 1.2,-1.2 0,2 -0.6,0.7 1.2,3.6 c 0,-2.8 0.4,-4 0.9,-6.2 0.3,-1.3 1.3,-5.6 1.2,-6 l -0.9,-0.5 -0.2,-2.5 1.5,1.9 0.5,-2.7 -0.6,-0.5 -0.4,-2.8 1.7,2.2 0.8,-2.4 c -1,-0.5 -0.8,-0.8 -0.7,-2.4 l 1,1.4 0.9,-2.1 c -0.4,-0.1 -0.6,-0 -0.6,-0.6 0,-0.8 0.4,-0.9 0.4,-2.4 l 0.1,0 0.5,2.1 0.3,-0 2.1,-5.9 0.8,0.1 -2.3,6.1 1.3,-0.7 c -0.2,0.9 -0.6,1.8 -1.8,1.8 l -0.8,2 2.4,-0.4 c -0.7,0.6 -1.5,1.4 -2.8,1.4 l -0.7,2.4 3,-0.8 c -0.2,0.3 -2.4,2 -2.8,2 -0.4,0 -0.2,-0.1 -0.8,-0.2 l -0.8,2.7 3,-0.5 z M 87.1,90.1 c 2,-0.5 2.9,-1.2 5.8,-1.6 2.1,-0.3 4.1,-0.6 6.5,-0.6 h 1.4 c 5.4,0 7.8,0.8 11.9,1.8 -0.2,2.2 -9.6,3.6 -12.7,3.6 h -1 c -3,0 -11.4,-1.3 -11.9,-3.2 z m -5.8,33.5 v 2.4 c 0,5.5 -0.1,11.9 5.3,11.9 h 26.4 c 2.8,0 3.8,-1.7 4.9,-3.4 l 0.4,-3.6 v -8.3 c 0,-9 -0.8,-15.9 -2,-23.6 -1.6,-10.1 -2.6,-11.3 -14.2,-11.3 h -4.4 c -13.3,0 -11.6,1.7 -14.3,11.8 -0.4,1.6 -0.4,4 -0.8,5.8 -0.5,2 -0.2,3.9 -0.6,6 -0.6,3.3 -0.7,8.6 -0.7,12.4 z M 114.8,90.2 c 0.7,1.2 5.2,3.9 6.9,3.9 h 0.6 c 0.6,0 1.2,-0.2 1.2,-0.8 v -0.6 c 0,-2.2 -2.6,-3.3 -4.8,-3.1 l -4,0.6 0,0 z m -39.2,0.9 v 0.8 c 0,0.8 1.4,2 2.4,2 h 0.4 c 2,0 5.8,-1.9 6.5,-3 -2,-0.4 -2.6,-0.6 -5,-0.8 -3.8,-0.3 -2.1,0.4 -4.3,1 z m 38.3,-5.3 v 3.6 c 1.3,-0.5 4.4,-5.3 4.4,-7.3 0,-0.7 -0.4,-1.4 -1,-1.4 h -0.6 c -2.8,-0 -2.8,2.4 -2.8,5.1 z m -31.7,-2.8 v 1.4 c 0,1.3 2.4,5.3 3.4,5.5 0,-1.3 0.4,-1.5 0.4,-2.8 v -4.2 c 0,-0.6 -0.8,-2.2 -1.4,-2.2 h -0.6 c -0.8,0 -1.8,1.3 -1.8,2.2 z"}],G["GR.IN.IC.ATM"]=[{type:"path",stroke:!1,d:"m 73.6,116.3 c 5.1,-0.1 15.8,-6.6 17,-6.6 0.4,0 7.4,3.8 8.9,4.2 -0.4,0.6 -5.1,4.6 -6.2,5.7 -1.2,1.2 -4.7,5.8 -5.5,6.4 -1.6,-0.8 -14,-8.9 -14.2,-9.6 z m -15.1,-6.2 11.9,-2.5 11.1,5.6 -9.6,3 16.2,10.7 -0,-0.2 6.4,-7.5 26.9,12.7 20.3,-46.8 -50.2,-17.2 c -0.6,2.2 -5.2,9.1 -6.5,11.8 -0.8,1.8 -2.3,4.4 -3.3,6 -1.2,1.8 -2.2,4.1 -3.3,6 -1.2,2 -2.1,3.8 -3.3,5.8 -1.2,1.9 -2.1,4.2 -3.3,6 -2.4,3.6 -0.2,2.7 -5.5,3.7 -2.6,0.5 -5.2,1 -7.7,1.6 m 62,21.5 -25.2,-11.8 4.8,-4 7.3,3.5 1.2,-2.4 -23.9,-11.7 v 0.2 l -1,2.2 6,2.9 -6.2,3.4 -11.8,-5.8 -0.2,0 20.7,-37 0.2,0.1 47.4,16.1 h 0.2 l -19.4,44.2 z m 7.8,-31.3 1.1,-2 -5.8,-2.3 -0.8,2.3 z m -2.7,5.2 1.2,-1.9 -5.6,-2.3 -0.8,2.2 z m -22,-7.3 c 0.6,0.4 2.1,1.4 2.1,2.1 v 2.4 c 0,0.8 -1.7,1.5 -2.6,1.5 h -0.2 c -0.8,0 -1,-0.2 -1.7,-0.4 l 2.4,-5.7 z m -3.4,-6.4 c 0,-2.2 1.1,-2.8 3.2,-2.8 h 0.2 c 0.7,0 1,0.2 1.5,0.4 l -2.2,5.1 c -0.9,-0 -2.8,-1.2 -2.8,-2.4 v -0.2 z m 5.6,-4.2 c -0.3,-0.1 -1.2,-0.5 -1.6,-0.5 h -1.9 c -0.7,0 -2.5,0.6 -2.9,0.9 -0.3,0.2 -1.4,2.1 -1.4,2.5 v 1.7 c 0,2.1 3.8,4.2 3.8,4.9 0,0.4 -2.2,4.6 -2.4,5.7 -0.6,-0.3 -2.5,-1.8 -2.5,-2.6 v -0.6 c 0,-0.8 0.6,-1.4 0.8,-2.1 -0.9,-0.2 -2,-1.1 -2.4,-1.2 -0.4,-0.1 -1,1.7 -1,2.3 v 0.4 c 0,2.7 4.2,5.4 4.2,5.7 0,0.6 -0.4,1.4 -0.5,2 l 1.7,0.8 0.6,-1.7 c 1.4,0 2,0.8 3.6,0.8 h 0.6 c 1.4,0 2.6,-0.5 3.2,-1.3 0.3,-0.4 1.5,-2.4 1.5,-3 v -0.4 c 0,-2.6 -2.8,-4.8 -4.4,-5.9 l 2.5,-5.6 h 0.4 c 0.4,1.2 1.5,0.6 1.5,3.6 l 2.8,1.2 v -1.7 c 0,-2 -2,-4.1 -3.8,-4.6 l 0.8,-2.1 -2.1,-0.5 -0.8,1.5 z m 13,18.4 -0.9,2 5.4,2.2 -0,-0.2 1.2,-1.8 z m -22.4,-25.2 26.1,9.5 -11,24.1 -26.7,-12.8 11.6,-20.8 z m -12.5,21.2 27.8,13.4 11.7,-25.7 c -1,-0.1 -11.8,-4.2 -13.4,-4.8 -1.2,-0.5 -13.3,-5 -13.5,-5 -0.9,0 -5.4,9.5 -6.4,10.8 -0.8,1.3 -5.9,10.3 -6.1,11.2 z m 31.7,11.2 5.4,2.2 -0.1,-0.2 1.3,-1.8 c -1.1,-0.2 -5,-2.2 -5.5,-2.2 -0.4,0 -1.1,1.6 -1.2,2.1 z m -25.8,0.6 4.3,2.9 -6,5.8 -6,-4.1 7.7,-4.6 z m -9.1,4.5 7.4,4.9 7.1,-6.6 c -0.5,-0.4 -5.3,-3.6 -5.4,-3.6 -1,0 -7.6,4.9 -9.1,5.3 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 115.7,111.8 c 0,-0.5 0.8,-2.1 1.2,-2.1 0.5,0 4.4,2 5.5,2.3 l -1.3,1.8 0.1,0.2 -5.4,-2.2 z m 3.2,-7.1 5.7,2.2 -1.2,1.8 0,0.2 -5.4,-2.2 0.9,-2 z m 2.4,-4.8 5.6,2.3 -1.2,1.9 -5.2,-2 0.8,-2.2 z m 2.5,-5.3 5.8,2.3 -1.1,2 -5.5,-2 0.8,-2.3 z m -39.7,6 c 0.2,-1 5.3,-10 6.1,-11.2 0.9,-1.4 5.4,-10.8 6.4,-10.8 0.2,0 12.3,4.5 13.5,5 1.7,0.7 12.5,4.8 13.5,4.8 l -11.7,25.7 -27.8,-13.4 z m 55.9,-14.6 h -0.2 l -47.4,-16.1 -0.2,-0.1 -20.7,37 0.2,-0 11.8,5.8 6.3,-3.4 -6,-2.9 1,-2.2 v -0.2 l 23.9,11.7 -1.2,2.4 -7.3,-3.5 -4.8,4 25.2,11.8 19.4,-44.2 0,0 z m -59.1,30.9 c 1.5,-0.4 8,-5.3 9.1,-5.3 0.2,0 4.9,3.2 5.5,3.6 l -7.2,6.6 -7.4,-4.9 z m -7.2,-0.6 c 0.2,0.8 12.6,8.8 14.2,9.6 0.8,-0.6 4.3,-5.2 5.5,-6.4 1.1,-1.1 5.8,-5.1 6.2,-5.7 -1.6,-0.3 -8.5,-4.1 -8.9,-4.1 -1.2,0 -11.9,6.5 -17,6.6 z m 26.6,-25.9 v 0.2 c 0,1.2 1.8,2.4 2.7,2.4 l 2.2,-5 c -0.4,-0.2 -0.8,-0.4 -1.5,-0.4 h -0.2 c -2.1,0 -3.2,0.7 -3.2,2.8 z m 0.9,12.1 c 0.7,0.2 0.9,0.4 1.7,0.4 h 0.2 c 1,0 2.6,-0.7 2.6,-1.5 v -2.4 c 0,-0.7 -1.6,-1.7 -2.1,-2.1 l -2.4,5.6 z m 5.5,-17.7 2.1,0.5 -0.8,2.1 c 1.8,0.4 3.8,2.5 3.8,4.6 v 1.7 l -2.8,-1.1 c 0,-3 -1.1,-2.4 -1.5,-3.6 h -0.4 l -2.5,5.6 c 1.6,1.1 4.4,3.3 4.4,5.9 v 0.4 c 0,0.6 -1.2,2.6 -1.5,3 -0.6,0.8 -1.8,1.3 -3.2,1.3 h -0.6 c -1.6,0 -2.2,-0.7 -3.6,-0.8 l -0.6,1.7 -1.7,-0.8 c 0.1,-0.6 0.5,-1.4 0.5,-2 0,-0.3 -4.2,-2.9 -4.2,-5.7 v -0.4 c 0,-0.6 0.6,-2.4 1,-2.4 0.4,0.1 1.4,1 2.4,1.2 -0.2,0.7 -0.7,1.3 -0.7,2.1 v 0.6 c 0,0.8 1.8,2.3 2.4,2.6 0.2,-1 2.4,-5.3 2.4,-5.7 0,-0.7 -3.8,-2.8 -3.8,-4.9 V 89.1 c 0,-0.4 1.1,-2.3 1.4,-2.5 0.4,-0.3 2.2,-0.9 2.9,-0.9 h 1.9 c 0.4,0 1.4,0.4 1.6,0.5 l 0.8,-1.4 z m -21.8,15.4 26.6,12.9 11,-24.1 -26,-9.5 -11.6,20.8 z m 5,12.1 -7.7,4.6 6,4.1 6,-5.8 z"}],G["GR.IN.IC.BANK"]=[{type:"path",stroke:!1,d:"m 100.8,110.6 c 2.4,0 5.3,1.9 5.3,4.4 v 0.7 c 0,3.1 -2.1,4.9 -5.3,4.9 v -9.9 z m -6.6,-8.8 c 0,-2.3 1.7,-4.4 4,-4.4 h 0.7 v 9 c -1.9,-0.4 -4.6,-1.6 -4.6,-3.7 v -0.9 z m 6.6,-4.4 c 2.2,0 4.6,1.6 4.6,3.5 v 0.9 h 3.5 c 0,-5.3 -3.7,-6.7 -8.1,-7.7 v -2.4 h -2 v 2.4 c -3.9,0 -8.2,3.5 -8.2,7 v 2.6 c 0,1.3 2,3.6 3,4.2 1,0.6 3.8,1.8 5.1,1.9 v 10.6 c -3.4,-0.1 -5.2,-2.6 -5.2,-6.1 h -3.3 l 0.2,3.5 c 1.1,1.7 0.9,2.8 2.9,4.1 1.3,0.8 3.4,1.6 5.5,1.6 v 4 h 2 v -3.9 c 4.9,0 9,-3.4 9,-8.1 v -1.8 c 0,-4.2 -5.4,-6 -9,-6.8 v -9.4 z m -25.3,15.2 v -2.4 c 0,-2.2 2.6,-7.4 3.1,-9.4 0.7,-2.7 3.1,-5.9 4.7,-8 3.5,-4.6 8.5,-8.9 16.5,-8.9 h 4.4 c 3.4,0 8.8,4.3 10.4,6.5 1.3,1.7 2.2,3.1 3.4,5 0.5,0.7 2.7,5.2 2.7,5.9 v 0.7 h 0.4 v 0.7 c 0,0.4 0.9,1.5 0.8,3.1 l 0.5,0.7 c 0,2 1.1,6.8 1.3,9 0.4,3.2 1.3,5.6 -0.7,8.5 0,2.4 -5.2,8.7 -6.2,8.8 l -9.2,-1.5 c -1.8,-0.3 -6.8,2 -9.2,2 -2,0 -5.6,-1.7 -7.5,-1.7 -1.6,0 -3.2,1.3 -5.5,1.3 h -0.6 c -1.9,0 -5.9,-6.1 -7,-7.7 -1.8,-2.6 -2.4,-8 -2.4,-12.3 z m 30.7,-31 -6.1,-1.1 c -0.8,-0.1 -5.2,1.1 -5.8,1.3 l -6.3,-11.5 1.7,0.5 v -2.9 l 8.9,3.4 0.3,-3.5 3.2,2.5 5.7,-2.6 v 2.6 l 7.5,-1.4 -9.3,13 0,0 z m 11.8,-14.5 -9.1,1.6 v -2.8 c -0.9,0.5 -5.7,2.9 -6.6,2.9 -0.1,0 -3.4,-2.6 -4,-2.9 l -0.7,4 -8.8,-3.6 v 2.9 l -3.1,-1 8.1,15.1 -0.2,0.1 c -4.6,1.1 -10.3,6.8 -12.7,10.4 -0.8,1.1 -1.3,2.6 -2,3.7 -1.4,1.8 -0.9,2.5 -1.7,4 -0.6,1.1 -2.9,7.2 -2.9,8.6 v 3.7 c 0,1 0.7,5.8 1,6.7 0.4,1.4 0.4,2 0.8,3.2 0.3,0.9 0.9,1.6 1.4,2.3 1.3,2 4.8,7.5 7.6,7.5 2.5,0 4.3,-1.3 5.7,-1.3 2.3,0 5.2,1.7 7.3,1.7 h 0.7 c 2,0 5.7,-1.4 8,-1.9 1.8,-0.3 5.9,1 8.5,1 h 1.7 c 1.7,0 4.8,-4.2 5.8,-5.5 1.1,-1.4 1.3,-2.2 1.7,-4 0.1,-0.4 1.1,-4.3 1.1,-4.4 0,-3 -0.9,-4.1 -1.1,-5.9 -0.2,-2.4 -0.4,-4 -0.7,-6.1 -0.2,-1.7 -2.8,-8.6 -3.6,-10.3 -2.4,-4.9 -7.7,-13.2 -14,-13.7 l 11.7,-16.2 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 100.8,120.4 c 3.2,0 5.3,-1.7 5.3,-4.9 v -0.6 c 0,-2.5 -2.9,-4.3 -5.3,-4.4 v 9.8 z m -6.6,-18.7 v 0.9 c 0,2.2 2.8,3.3 4.6,3.7 v -9 h -0.7 c -2.3,0 -4,2 -4,4.4 z m 6.6,5 c 3.6,0.8 9,2.6 9,6.8 v 1.7 c 0,4.7 -4.1,8.1 -9,8.1 v 4 h -2 v -3.9 c -2,0 -4.2,-0.7 -5.5,-1.6 -2,-1.3 -1.7,-2.5 -2.9,-4.2 l -0.2,-3.5 h 3.3 c 0,3.5 1.8,6.1 5.3,6.2 v -10.6 c -1.3,-0.1 -4.1,-1.3 -5.1,-2 -1,-0.6 -3,-3 -3,-4.2 v -2.6 c 0,-3.5 4.2,-7 8.1,-7 v -2.4 h 2 v 2.4 c 4.4,1 8.1,2.3 8.1,7.7 h -3.5 v -0.9 c 0,-1.9 -2.5,-3.5 -4.6,-3.5 v 9.5 l 0,0 z m -25.3,5.8 c 0,4.3 0.6,9.8 2.4,12.3 1.1,1.6 5.1,7.7 7,7.7 h 0.7 c 2.3,0 3.9,-1.3 5.5,-1.3 1.9,0 5.5,1.7 7.5,1.7 2.5,0 7.4,-2.3 9.2,-2 l 9.1,1.5 c 1,0 6.2,-6.4 6.2,-8.8 2,-2.9 1,-5.3 0.7,-8.6 -0.2,-2.2 -1.3,-6.9 -1.3,-9 l -0.5,-0.6 c 0.1,-1.6 -0.8,-2.7 -0.8,-3.1 v -0.7 h -0.4 v -0.7 c 0,-0.7 -2.2,-5.2 -2.7,-5.9 -1.1,-1.9 -2.1,-3.2 -3.4,-5 -1.6,-2.2 -7,-6.5 -10.4,-6.5 h -4.4 c -8,0 -13,4.4 -16.5,8.9 -1.6,2.1 -4,5.3 -4.7,8 -0.5,2 -3.1,7.2 -3.1,9.4 v 2.4 z m 40,-44 -7.4,1.5 v -2.6 l -5.8,2.6 -3.2,-2.4 -0.3,3.5 -8.9,-3.4 v 2.9 l -1.7,-0.5 6.3,11.5 c 0.5,-0.2 5,-1.4 5.8,-1.3 l 6.1,1.1 9.3,-13 0,0 z"}],G["GR.IN.IC.BULLION STORAGE"]=[{type:"path",stroke:!1,d:"m 123.1,77.9 c 0.4,0.1 0.9,0.5 1.3,1 0.4,0.5 0.8,1.2 1.3,2 l 2.1,4.1 -2.2,0 -1.9,-3.9 c -0.5,-1 -1,-1.7 -1.5,-2 -0.5,-0.3 -1.1,-0.5 -1.9,-0.5 l -2.2,0 0,6.4 -2.1,0 0,-15.2 4.6,0 c 1.7,1.5e-5 3,0.4 3.9,1.1 0.9,0.7 1.3,1.8 1.3,3.3 -1e-5,1 -0.2,1.7 -0.7,2.4 -0.4,0.6 -1.1,1.1 -1.9,1.3 m -5.1,-6.4 0,5.4 2.6,0 c 1,8e-6 1.7,-0.2 2.2,-0.7 0.5,-0.5 0.8,-1.1 0.8,-2 -1e-5,-0.9 -0.3,-1.6 -0.8,-2 -0.5,-0.5 -1.2,-0.7 -2.2,-0.7 l -2.6,0 m -12.3,-0.3 c -1.5,1.4e-5 -2.7,0.6 -3.6,1.7 -0.9,1.1 -1.3,2.6 -1.3,4.5 -10e-6,1.9 0.4,3.4 1.3,4.5 0.9,1.1 2.1,1.7 3.6,1.7 1.5,10e-7 2.7,-0.6 3.5,-1.7 0.9,-1.1 1.3,-2.6 1.3,-4.5 -1e-5,-1.9 -0.4,-3.4 -1.3,-4.5 -0.9,-1.1 -2,-1.7 -3.5,-1.7 m 0,-1.7 c 2.1,1.5e-5 3.8,0.7 5.1,2.1 1.3,1.4 1.9,3.3 1.9,5.7 -1e-5,2.4 -0.6,4.3 -1.9,5.7 -1.3,1.4 -3,2.1 -5.1,2.1 -2.1,0 -3.8,-0.7 -5.1,-2.1 -1.3,-1.4 -1.9,-3.3 -1.9,-5.7 -10e-7,-2.4 0.6,-4.3 1.9,-5.7 1.3,-1.4 3,-2.1 5.1,-2.1 m -21,0.3 12.8,0 0,1.7 -5.4,0 0,13.4 -2.1,0 0,-13.4 -5.4,0 0,-1.7 m -2,0.5 0,2 c -0.8,-0.4 -1.5,-0.6 -2.2,-0.8 -0.7,-0.2 -1.4,-0.3 -2,-0.3 -1.1,1.4e-5 -2,0.2 -2.6,0.7 -0.6,0.4 -0.9,1 -0.9,1.8 -3e-6,0.7 0.2,1.2 0.6,1.5 0.4,0.3 1.2,0.6 2.3,0.8 l 1.2,0.3 c 1.5,0.3 2.7,0.8 3.4,1.5 0.7,0.7 1.1,1.7 1.1,2.9 -1.2e-5,1.5 -0.5,2.6 -1.5,3.3 -1,0.8 -2.4,1.1 -4.3,1.1 -0.7,0 -1.5,-0.1 -2.3,-0.2 -0.8,-0.2 -1.6,-0.4 -2.5,-0.7 l 0,-2.1 c 0.8,0.5 1.6,0.8 2.4,1.1 0.8,0.2 1.6,0.4 2.4,0.4 1.2,10e-7 2.1,-0.2 2.7,-0.7 0.6,-0.5 1,-1.1 1,-2 -1e-5,-0.7 -0.2,-1.3 -0.7,-1.7 -0.5,-0.4 -1.2,-0.7 -2.2,-0.9 l -1.2,-0.2 c -1.5,-0.3 -2.6,-0.8 -3.3,-1.4 -0.7,-0.6 -1,-1.6 -1,-2.7 -2e-6,-1.3 0.5,-2.4 1.4,-3.2 0.9,-0.8 2.3,-1.2 3.9,-1.2 0.7,1.5e-5 1.4,0.1 2.2,0.2 0.7,0.1 1.5,0.3 2.3,0.6 M 103.6,119.3 h 9.6 c 0.4,0 9,9.2 9.6,10.1 H 95.6 c 0.2,-1 7.4,-10.1 8,-10.1 z m -29.2,0 h 9.9 c 0.6,0 8.2,9 8.9,10.1 H 65.9 c 0.3,-1 7.8,-10.1 8.4,-10.1 l 0,0 z m 11.5,0 h 15.4 l -6.9,9.9 -8.5,-9.9 z m -5.5,-1 c 0.7,-1.1 7.6,-9.4 8.4,-9.4 h 9.2 c 0.7,0 8.9,8.5 9.2,9.4 H 80.4 z m 43.7,10.8 -9.5,-10.4 10.4,-14.3 9.7,8.5 -10.7,16.1 0,0 z m -4.8,-24.8 4.8,-0 -10.5,14.1 -4.1,-0.1 9.8,-13.9 z m -31.1,-0.2 2.8,0.1 c -1.1,1.6 -4.6,4.9 -6.2,6.8 -1.7,2.1 -4.2,5.1 -5.6,7.2 l -4.2,-0.1 13.2,-14.1 z m 21.1,-8.6 c 0.9,0.6 9,8.2 9,8.5 0,0.1 -9.3,13.6 -9.9,14 l -8.9,-9.9 9.8,-12.6 z M 89.1,108 c 0.9,-1.3 11.4,-12.6 12.1,-12.6 h 6.8 l -9.5,12.5 -9.4,0 z m 2.9,-4.6 h -4.6 c -1.2,1.8 -4.3,4.9 -6,6.6 -2.1,2.1 -3.9,4.4 -6,6.5 -1.3,1.3 -11.2,12.8 -11.4,13.7 0.5,0.1 0.5,0.2 1.2,0.2 l 59.3,-0 11.6,-17.5 -0.3,0.1 -10.5,-9.6 h -5.8 c -1.5,-1 -9.6,-8.9 -10.4,-8.9 h -8.2 c -0.9,0 -7.6,8 -9,8.9 l 0,0 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 103.6,119.3 c -0.5,0 -7.7,9.2 -8,10.1 h 27.3 c -0.6,-1 -9.2,-10.1 -9.6,-10.1 h -9.6 z m -29.2,0 c -0.6,0 -8.2,9.1 -8.4,10.1 h 27.3 c -0.7,-1.1 -8.3,-10.1 -8.9,-10.1 H 74.3 l 0,0 z m 50.7,-14.7 -10.4,14.3 9.5,10.4 10.7,-16.1 z m -30.7,24.7 6.9,-9.9 -15.4,0 z m 5.1,-21.1 8.9,9.9 c 0.6,-0.4 9.9,-13.9 9.9,-14 0,-0.3 -8.1,-7.9 -9,-8.5 l -9.9,12.6 z m -19.1,10.2 h 26.8 c -0.2,-0.9 -8.5,-9.4 -9.2,-9.4 h -9.2 c -0.9,0 -7.7,8.3 -8.4,9.4 z m 33.2,0.1 10.5,-14.1 -4.8,0 -9.8,13.9 z m -38.6,-0.2 4.2,0.1 c 1.4,-2.1 3.9,-5.1 5.6,-7.2 1.6,-1.9 5.1,-5.2 6.2,-6.8 l -2.8,-0.1 -13.2,14.1 z m 14.1,-10.3 9.4,-0 9.5,-12.5 h -6.7 c -0.7,0 -11.2,11.2 -12.1,12.6 z"}],G["GR.IN.IC.FEDERAL RESERVE BANK"]=[{type:"path",stroke:!1,d:"m 65.6,125.4 h 68.8 v 4.4 H 65.6 v -4.4 z m 58.1,-31.3 h 5.3 v 29.9 h -5.3 v -29.9 z m -10.6,0 h 5.1 v 29.9 h -5.1 v -29.9 z m -31.3,0 h 5.3 v 29.9 H 81.8 v -29.9 z m -10.6,0 h 5.1 v 29.9 h -5.1 v -29.9 z m 27.7,1.5 h 2 v 1.4 h 0.5 c 2.9,0 6,2.3 6,5.3 l -2.9,0.4 c -0.2,-0 -1,-1.9 -1.4,-2.4 -0.4,-0.5 -1.5,-1.1 -2.3,-1.2 v 7.8 c 3,0.3 7.3,2.3 7.3,5.3 v 1.1 c 0,4 -3.4,6.7 -7.3,6.7 v 2.5 h -2 v -2.5 c -1.7,-0 -4.1,-0.8 -5.1,-1.7 -0.8,-0.7 -2.4,-2.8 -2.4,-4.1 v -0.9 l 3.1,-0.5 c 0,2.3 2,4.9 4.4,4.9 v -8.6 c -2.3,-0 -6.9,-2.5 -6.9,-5.1 v -1.8 c 0,-3 3.2,-5.3 6.2,-5.3 h 0.7 v -1.4 z m -33.3,-7.5 h 68.8 v 4.6 H 65.6 v -4.6 z M 100,70.3 c 0.7,0.6 6.5,3.4 7.9,4.1 2.7,1.4 5.2,2.7 7.9,4.1 2.7,1.3 5.3,2.7 7.9,4.1 1.1,0.6 7.7,3.6 8.1,4 H 68.5 l 31.5,-16.1 0,0 z m -35.9,17.1 v 6 c 0,0.4 0.3,0.7 0.7,0.7 h 4.9 v 29.9 h -5.6 v 7.4 h 71.7 v -7.4 h -5.5 v -29.9 h 4.9 c 0.4,0 0.5,-0.1 0.5,-0.5 v -6.7 c -2,-0.7 -6.7,-3.4 -8.9,-4.6 -3,-1.5 -5.9,-3 -8.9,-4.6 -1.7,-0.8 -17.8,-9.1 -17.9,-9.1 -0.4,0 -16.3,8.2 -18.1,9.2 -1.9,1 -17.8,8.7 -17.8,9.6 l 0,0 0,0 z m 36.7,30.4 c 1.7,0 4,-2 4,-3.5 v -1.4 c 0,-2.1 -2.3,-2.7 -4,-3.1 v 8 z m -5.6,-14 c 0,1.6 2.2,2.6 3.6,2.7 v -7.4 c -1.3,0.3 -3.6,1.4 -3.6,2.7 v 2 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 134.4,129.8 0,-4.4 -68.8,0 0,4.4 z m -5.5,-5.8 0,-29.9 -5.3,0 0,29.9 z m -10.8,0 0,-29.9 -5.1,0 0,29.9 z m -31.1,0 0,-29.9 -5.3,0 0,29.9 z m -10.7,0 0,-29.9 -5.1,0 0,29.9 z m -7.9,-37.5 63.3,0 c -0.4,-0.3 -6.9,-3.4 -8.1,-4 -2.7,-1.3 -5.2,-2.7 -7.9,-4.1 -2.7,-1.3 -5.2,-2.7 -7.9,-4.1 -1.4,-0.7 -7.2,-3.5 -7.9,-4.1 l -31.5,16.1 0,0 z m 65.9,6.2 0,-4.6 -68.8,0 0,4.6 z m -33.5,25.1 v -8 c 1.7,0.4 4,1 4,3.1 v 1.5 c 0,1.4 -2.2,3.5 -4,3.5 z m -5.6,-14 v -2 c 0,-1.3 2.4,-2.4 3.6,-2.7 v 7.4 c -1.5,-0.1 -3.6,-1.1 -3.6,-2.7 z m 3.6,-6.7 h -0.8 c -3,0 -6.2,2.3 -6.2,5.3 v 1.8 c 0,2.5 4.6,5.1 6.9,5.1 v 8.6 c -2.4,0 -4.4,-2.5 -4.4,-4.9 l -3.1,0.5 v 0.9 c 0,1.3 1.6,3.5 2.4,4.1 1,0.8 3.3,1.6 5.1,1.7 v 2.5 h 2 v -2.5 c 3.9,0 7.3,-2.7 7.3,-6.7 v -1.1 c 0,-3 -4.3,-5 -7.3,-5.3 v -7.8 c 0.8,0.1 1.9,0.6 2.3,1.2 0.3,0.5 1.1,2.3 1.4,2.4 l 2.9,-0.4 c 0,-3 -3.1,-5.3 -6,-5.3 h -0.6 v -1.4 h -2 v 1.4 z"}],G["GR.IN.IC.FINANCIAL EXCHANGE"]=[{type:"path",stroke:!1,d:"m 133.7,124.6 0,-1.4 -66.8,0 0.3,0 0,-47 -1,0 0,48.4 z m -29.5,-8.6 -9.8,-20.8 -5.9,14.4 -5.3,-6.5 -13.3,12.4 0.9,1 v 0.2 l 12.4,-11.3 5.5,7 h 0.3 c 0,-1 2.3,-5.6 2.8,-7 0.3,-1 1.1,-2.4 1.5,-3.4 0.3,-0.8 0.9,-3.1 1.5,-3.2 l 9.4,20.3 0.1,0.2 17.4,-27.4 0.2,0.1 8,15.6 1.4,-0.5 -9.4,-18 c -0.1,0.5 -7.7,12.1 -8.7,13.6 -1,1.6 -8.2,13.2 -8.9,13.4 z m 2.8,-19.4 V 89.2 c 2.1,0 4.1,1.4 4.1,3.6 v 0.2 c 0,2.1 -1.9,3.6 -4.1,3.6 z m -4.7,-13.6 c 0,-2 1,-3.4 3,-3.4 h 0.5 v 6.6 c -1.8,-0.1 -3.4,-1.3 -3.4,-3.2 z m 3.5,-5.6 h -1 c -2.6,0 -5.2,2.9 -5.2,5.6 v 1 c 0,1.1 1.3,2.8 2.1,3.4 1.1,0.8 2.5,1.2 4,1.5 v 7.8 c -2.6,-0.6 -4.1,-1.7 -4.1,-4.8 h -2.4 l 0.2,2.5 c 0.9,1.4 0.6,2.1 2.2,3.2 1.1,0.7 2.4,1.2 4.1,1.2 v 2.8 h 1.2 v -2.8 c 3,0 6.4,-2.3 6.4,-5 v -2.5 c 0,-2.9 -4,-4.3 -6.4,-4.8 v -6.9 c 2,0 3.4,1.4 3.4,3.3 h 2.7 c 0,-3.2 -2.8,-5.5 -6.1,-5.5 V 75.4 h -1.2 v 1.9 z"}],G["GR.IN.IC.FINANCIAL SERVICES, OTHER"]=[{type:"path",stroke:!1,d:"m 103.4,138.2 -2.7,0 -0,-8.2 c -1.9,-0 -3.8,-0.3 -5.7,-0.7 -1.9,-0.4 -3.8,-1 -5.8,-1.9 l 0,-4.9 c 1.9,1.2 3.7,2.1 5.6,2.7 1.9,0.6 3.9,0.9 5.9,0.9 l 0,-12.5 c -4,-0.7 -7,-1.8 -8.8,-3.3 -1.8,-1.6 -2.7,-3.7 -2.7,-6.5 -5e-6,-3 1,-5.3 3,-7 2,-1.7 4.8,-2.7 8.6,-3 l 0,-6.4 2.7,0 0,6.3 c 1.7,0.1 3.3,0.3 4.9,0.5 1.6,0.3 3.1,0.7 4.6,1.1 l 0,4.8 c -1.5,-0.8 -3.1,-1.4 -4.7,-1.8 -1.6,-0.4 -3.2,-0.7 -4.9,-0.7 l 0,11.7 c 4.1,0.6 7.2,1.8 9.1,3.4 2,1.6 2.9,3.9 2.9,6.7 -3e-5,3.1 -1,5.5 -3.1,7.3 -2.1,1.8 -5,2.8 -8.9,3.1 l 0,8.3 m -2.7,-29.3 0,-11.2 c -2.1,0.2 -3.7,0.8 -4.8,1.8 -1.1,1 -1.7,2.3 -1.7,3.9 -1e-5,1.6 0.5,2.8 1.5,3.7 1,0.9 2.7,1.5 5,1.9 m 2.7,5.3 0,11.8 c 2.3,-0.3 4.1,-1 5.2,-2 1.2,-1 1.8,-2.3 1.8,-4 -3e-5,-1.6 -0.6,-2.9 -1.7,-3.8 -1.1,-0.9 -2.9,-1.6 -5.3,-2.1 m 5.8,-52.2 2.1,0 0,6.2 7.5,0 0,-6.2 2.1,0 0,15.2 -2.1,0 0,-7.2 -7.5,0 0,7.2 -2.1,0 0,-15.2 m -14.8,0 12.8,0 0,1.7 -5.4,0 0,13.4 -2.1,0 0,-13.4 -5.4,0 0,-1.7 m -8.1,1.4 c -1.5,1.3e-5 -2.7,0.6 -3.6,1.7 -0.9,1.1 -1.3,2.6 -1.3,4.5 -3e-6,1.9 0.4,3.4 1.3,4.5 0.9,1.1 2.1,1.7 3.6,1.7 1.5,1e-6 2.7,-0.6 3.5,-1.7 0.9,-1.1 1.3,-2.6 1.3,-4.5 -1.3e-5,-1.9 -0.4,-3.4 -1.3,-4.5 -0.9,-1.1 -2,-1.7 -3.5,-1.7 m 0,-1.7 c 2.1,1.5e-5 3.8,0.7 5.1,2.1 1.3,1.4 1.9,3.3 1.9,5.7 -1.5e-5,2.4 -0.6,4.3 -1.9,5.7 -1.3,1.4 -3,2.1 -5.1,2.1 -2.1,-10e-7 -3.8,-0.7 -5.1,-2.1 -1.3,-1.4 -1.9,-3.3 -1.9,-5.7 -1e-6,-2.4 0.6,-4.3 1.9,-5.7 1.3,-1.4 3,-2.1 5.1,-2.1"}],G["GR.IN.IC.COMMERCIAL INFRASTRUCTURE"]=[{type:"path",stroke:!1,d:"m 101.9,123.3 -1.7,0 -0,-5 c -1.2,-0 -2.3,-0.2 -3.5,-0.4 -1.2,-0.3 -2.3,-0.6 -3.5,-1.1 l 0,-3 c 1.1,0.7 2.3,1.2 3.4,1.6 1.2,0.4 2.4,0.5 3.6,0.5 l 0,-7.6 c -2.4,-0.4 -4.2,-1.1 -5.3,-2 -1.1,-1 -1.7,-2.3 -1.7,-3.9 -2e-6,-1.8 0.6,-3.2 1.8,-4.3 1.2,-1 2.9,-1.6 5.2,-1.8 l 0,-3.9 1.7,0 0,3.9 c 1,0 2,0.2 3,0.3 1,0.2 1.9,0.4 2.8,0.7 l 0,2.9 c -0.9,-0.5 -1.9,-0.8 -2.8,-1.1 -1,-0.3 -2,-0.4 -3,-0.4 l 0,7.1 c 2.5,0.4 4.4,1.1 5.5,2.1 1.2,1 1.8,2.4 1.8,4.1 -2e-5,1.9 -0.6,3.3 -1.9,4.4 -1.3,1.1 -3.1,1.7 -5.4,1.9 l 0,5 m -1.7,-17.8 0,-6.8 c -1.3,0.1 -2.3,0.5 -2.9,1.1 -0.7,0.6 -1,1.4 -1,2.3 -6e-6,1 0.3,1.7 0.9,2.2 0.6,0.5 1.6,0.9 3,1.1 m 1.7,3.2 0,7.2 c 1.4,-0.2 2.5,-0.6 3.2,-1.2 0.7,-0.6 1.1,-1.4 1.1,-2.4 -1e-5,-1 -0.3,-1.7 -1,-2.3 -0.7,-0.6 -1.7,-1 -3.2,-1.3 M 104.5,74.8 h 4.5 v 13.4 h 9.9 V 74.8 h 4.5 v 13.4 h 6.7 v 37 H 70 V 88.2 h 34.6 l 4e-4,-13.4 0,0 z m -35.7,51.6 h 62.3 V 86.9 h -6.4 V 73.5 h -7.2 v 13.4 h -7.2 V 73.5 h -7.2 V 86.9 H 68.8 v 39.5 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 101.9,108.7 0,7.2 c 1.4,-0.2 2.5,-0.6 3.2,-1.2 0.7,-0.6 1.1,-1.4 1.1,-2.4 -1e-5,-1 -0.3,-1.7 -1,-2.3 -0.7,-0.6 -1.7,-1 -3.2,-1.3 m -1.7,-3.2 0,-6.8 c -1.3,0.1 -2.3,0.5 -2.9,1.1 -0.7,0.6 -1,1.4 -1,2.3 -6e-6,1 0.3,1.7 0.9,2.2 0.6,0.5 1.6,0.9 3,1.1 m 4.3,-30.7 0,13.4 -34.6,0 0,37 60.1,0 0,-37 -6.7,0 0,-13.4 -4.5,0 0,13.4 -9.9,0 0,-13.4 -4.5,0 z m -4.3,17.6 1.7,0 0,3.8 c 1,0 2,0.2 3,0.3 1,0.2 1.9,0.4 2.8,0.7 l 0,2.9 c -0.9,-0.5 -1.9,-0.8 -2.8,-1.1 -1,-0.3 -2,-0.4 -3,-0.5 l 0,7.1 c 2.5,0.4 4.3,1.1 5.5,2.1 1.2,1 1.8,2.4 1.8,4.1 -2e-5,1.9 -0.6,3.4 -1.9,4.4 -1.3,1.1 -3.1,1.7 -5.4,1.9 l 0,5 -1.7,0 -0,-5 c -1.2,-0 -2.3,-0.2 -3.5,-0.4 -1.2,-0.3 -2.3,-0.6 -3.5,-1.1 l 0,-3 c 1.1,0.7 2.3,1.3 3.4,1.6 1.2,0.4 2.4,0.5 3.6,0.5 l 0,-7.6 c -2.4,-0.4 -4.2,-1.1 -5.3,-2 -1.1,-1 -1.7,-2.2 -1.7,-3.9 -2e-6,-1.8 0.6,-3.2 1.8,-4.3 1.2,-1 3,-1.6 5.2,-1.8 l 0,-3.9 z"}],G["GR.IN.IC.CHEMICAL PLANT"]=[{type:"path",stroke:!1,d:"m 94.4,89.6 0,0.1 c -0.5,0.1 -1,0.3 -1.4,0.6 -0.5,0.5 -0.6,1.3 -0.5,1.9 0.2,0.8 0.8,1.5 1.7,1.8 -0,0.5 -0.1,1.7 0,3 l -0.1,0 c -0,2.7 -2.3,5.7 -4.9,8.8 -2.4,3 -5,6.4 -5.3,10.4 l -0.1,0 c 0,0.1 0,0.2 0,0.2 -0,0.1 -0,0.2 -0,0.3 l 0.1,0 c 0.2,2.4 1.7,4.2 3.7,5.3 2.1,1.2 4.6,1.7 6.8,1.6 l 0,-0 8.9,0 0,0.1 c 0.3,-0 0.5,-0 0.8,-0.1 l 0.5,0 0,-0.1 c 2.1,-0.2 4.2,-0.3 6,-1 1.1,-0.4 2.1,-1.1 2.8,-2.1 0.6,-0.9 0.9,-2.1 1.1,-3.6 l 0.2,0 c 0.2,-4.4 -2.1,-7.5 -4.5,-10.3 -2.3,-2.8 -4.7,-5.5 -5.4,-9.6 0,-1.3 0.1,-3 0.1,-3.3 0.2,-0.1 0.4,-0.2 0.6,-0.3 0.5,-0.4 0.9,-1 0.9,-1.7 -0,-0.7 -0.5,-1.3 -1.1,-1.6 -0.4,-0.2 -0.9,-0.3 -1.5,-0.4 l 0,-0.1 c -0.2,0 -0.4,-0 -0.6,0 -2.5,0 -7.2,0 -8.1,0 -0.1,-2.4e-4 -0.7,0 -0.7,0 z m 0.7,2 c 0.8,0 5.5,0 8.1,0 0.6,0 0.9,0.1 1.1,0.2 -0.2,0.1 -0.5,0.3 -0.9,0.4 l -8.1,0 c -0.4,-0.1 -0.7,-0.3 -0.7,-0.4 -0,-0.1 -0,-0.1 -0,-0.1 0,-0 0.1,-0.1 0.6,-0.1 z m 1.2,2.6 6.7,0 c -0,0.7 -0.1,1.9 -0.1,3.1 -0,0.1 -0,0.2 -0,0.3 l 0.1,0 c 0.9,4.5 3.5,7.6 5.8,10.3 2.2,2.7 4,5 4,8.4 l -0.1,0 c -0,1.4 -0.4,2.4 -0.8,3 -0.4,0.7 -1,1.1 -1.8,1.4 -1.4,0.6 -3.6,0.7 -5.8,0.9 l -10.3,0 0,0 c -1.6,0 -3.6,-0.4 -5.1,-1.3 -1.6,-0.9 -2.6,-2.2 -2.7,-3.9 0.1,-3.2 2.4,-6.3 4.9,-9.4 2.4,-3 5.1,-6.1 5.3,-9.6 l 0.1,-0 c -0.1,-1 -0.1,-2.7 -0,-3.3 z m -7,19.6 v 1.9 c 0,3.5 6,4.3 9.9,4.3 h 3.2 c 2.5,0 8,-2.2 8,-4.2 v -0.8 c 0,-3.2 -6.6,-9.4 -7.3,-12.4 h -7.5 c -0.6,2.5 -6.2,10 -6.2,11.2 z m 14.8,-39 h 4.5 v 13.4 h 9.9 V 74.8 h 4.5 v 13.4 h 6.7 v 37 H 69.6 V 88.2 h 34.6 l 4e-4,-13.4 0,0 z m -35.7,51.6 h 62.3 V 86.9 h -6.4 V 73.5 h -7.2 v 13.4 h -7.2 V 73.5 h -7.2 v 13.4 h -34.4 v 39.5 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"M 104.1 74.8 L 104.1 88.2 L 69.6 88.2 L 69.6 125.2 L 129.6 125.2 L 129.6 88.2 L 122.9 88.2 L 122.9 74.8 L 118.5 74.8 L 118.5 88.2 L 108.6 88.2 L 108.6 74.8 L 104.1 74.8 z M 94.4 89.6 C 94.4 89.6 95.1 89.6 95.2 89.6 C 96.1 89.6 100.8 89.6 103.3 89.6 C 103.5 89.6 103.8 89.6 103.9 89.6 L 103.9 89.7 C 104.5 89.8 105 89.9 105.4 90.1 C 106 90.4 106.5 91 106.5 91.7 C 106.5 92.4 106.1 93 105.6 93.4 C 105.4 93.5 105.2 93.6 105 93.8 C 105 94 104.9 95.7 104.9 97.1 C 105.6 101.1 108 103.8 110.3 106.7 C 112.6 109.5 114.9 112.6 114.7 117 L 114.6 116.9 C 114.4 118.4 114.1 119.6 113.5 120.5 C 112.8 121.5 111.8 122.2 110.8 122.7 C 108.9 123.4 106.8 123.5 104.8 123.7 L 104.8 123.7 L 104.3 123.7 C 104.1 123.7 103.8 123.8 103.5 123.8 L 103.5 123.7 L 94.6 123.7 L 94.6 123.8 C 92.4 123.9 89.9 123.4 87.8 122.2 C 85.9 121.1 84.3 119.2 84.1 116.8 L 84.1 116.8 C 84.1 116.7 84.1 116.6 84.1 116.5 C 84.1 116.4 84 116.4 84 116.3 L 84.1 116.3 C 84.3 112.3 86.9 109 89.4 105.9 C 91.9 102.7 94.2 99.8 94.3 97.1 L 94.3 97.1 C 94.2 95.7 94.3 94.6 94.3 94 C 93.5 93.7 92.8 93.1 92.6 92.3 C 92.4 91.6 92.6 90.9 93.1 90.4 C 93.4 90 93.9 89.8 94.4 89.7 L 94.4 89.6 z M 95.1 91.6 C 94.7 91.6 94.5 91.7 94.5 91.8 C 94.5 91.8 94.5 91.7 94.6 91.8 C 94.6 91.9 94.8 92.2 95.3 92.2 L 103.4 92.2 C 103.8 92.1 104.1 92 104.3 91.8 C 104.1 91.8 103.8 91.6 103.2 91.6 C 100.6 91.6 95.9 91.6 95.1 91.6 z M 96.3 94.2 C 96.2 94.9 96.2 96.5 96.3 97.5 L 96.2 97.6 C 96 101.1 93.4 104.2 90.9 107.2 C 88.5 110.3 86.2 113.3 86.1 116.6 C 86.2 118.3 87.2 119.5 88.8 120.5 C 90.3 121.3 92.3 121.8 93.9 121.8 L 93.9 121.7 L 104.2 121.7 C 106.5 121.5 108.6 121.4 110 120.8 C 110.8 120.5 111.4 120.1 111.8 119.4 C 112.3 118.8 112.6 117.8 112.7 116.4 L 112.7 116.4 C 112.7 113 110.9 110.6 108.7 107.9 C 106.5 105.2 103.8 102.1 103 97.6 L 102.8 97.6 C 102.8 97.5 102.9 97.4 102.9 97.3 C 102.9 96.1 102.9 94.9 103 94.2 L 96.3 94.2 z M 95.5 102.6 L 103 102.6 C 103.8 105.7 110.3 111.9 110.3 115.1 L 110.3 115.9 C 110.3 117.9 104.9 120 102.4 120 L 99.2 120 C 95.3 120 89.3 119.2 89.3 115.7 L 89.3 113.8 C 89.3 112.6 94.9 105.1 95.5 102.6 z "}],G["GR.IN.IC.FIREARMS MANUFACTURER"]=[{type:"path",stroke:!1,d:"m 104.1,74.8 h 4.5 v 13.4 h 9.9 V 74.8 h 4.5 v 13.4 h 6.7 v 37 H 69.6 V 88.2 h 34.6 l 4e-4,-13.4 0,0 z m -35.7,51.6 h 62.3 V 86.9 h -6.4 V 73.5 h -7.2 v 13.4 h -7.2 V 73.5 h -7.2 v 13.4 h -34.4 v 39.5 z m 25.8,-26.6 h 10.8 v 5.8 c -1.6,0 -4.7,1 -5.8,0.7 -1.2,-0.4 -3.8,-1.5 -5,-1.6 v -4.8 z m -19.2,0 h 16.6 v 6 c 0,0.6 3,1.4 3.7,1.7 0.4,0.1 3.9,1.4 3.9,1.5 l 7.2,-0.9 0.8,2.7 1.1,3.7 c 0.3,0.4 1,2.4 1,3.1 v 0.2 c 0,1.1 -0.6,1.9 -0.6,3.5 l 13.5,-0 -0.9,-3 -0.6,-1.7 -3,-10 c -0.2,-0.4 -0.5,-0.7 -0.5,-1.3 0,-1.3 3.9,-4.1 4.7,-5.3 l -2.7,-8.4 h -43.9 v 8.4 l 0,0 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 94.2,99.9 h 10.8 v 5.8 c -1.6,0 -4.7,1 -5.8,0.7 -1.2,-0.4 -3.8,-1.5 -5,-1.6 v -4.8 z m 9.9,-25.1 0,13.4 -34.6,0 0,37 60.1,0 0,-37 -6.7,0 0,-13.4 -4.5,0 0,13.4 -9.9,0 0,-13.4 -4.5,0 z m -29.1,16.7 43.9,0 2.7,8.4 c -0.8,1.2 -4.7,4.1 -4.7,5.3 0,0.6 0.2,0.9 0.5,1.3 l 3.1,10 0.6,1.8 0.9,3 -13.5,0 c 0,-1.6 0.7,-2.4 0.7,-3.6 l 0,-0.2 c 0,-0.7 -0.7,-2.7 -1,-3.1 L 107.2,110.8 106.4,108.1 99.2,109 c -0,-0.1 -3.6,-1.4 -3.9,-1.5 -0.7,-0.3 -3.7,-1.1 -3.7,-1.7 l 0,-5.9 -16.6,0 0,-8.4 z"}],G["GR.IN.IC.FIREARMS RETAILER"]=[{type:"path",stroke:!1,d:"m 85.1,123 -1.1,0 -0,-3.2 c -0.8,-0 -1.5,-0.1 -2.3,-0.3 -0.8,-0.2 -1.5,-0.4 -2.3,-0.7 l 0,-1.9 c 0.7,0.5 1.5,0.8 2.2,1 0.8,0.2 1.5,0.3 2.3,0.4 l 0,-4.9 c -1.6,-0.3 -2.7,-0.7 -3.5,-1.3 -0.7,-0.6 -1.1,-1.5 -1.1,-2.5 -2e-6,-1.2 0.4,-2.1 1.2,-2.8 0.8,-0.7 1.9,-1.1 3.4,-1.2 l 0,-2.5 1.1,0 0,2.5 c 0.7,0 1.3,0.1 1.9,0.2 0.6,0.1 1.2,0.3 1.8,0.5 l 0,1.9 c -0.6,-0.3 -1.2,-0.5 -1.8,-0.7 -0.6,-0.2 -1.3,-0.3 -1.9,-0.3 l 0,4.6 c 1.6,0.3 2.8,0.7 3.6,1.3 0.8,0.6 1.1,1.5 1.1,2.6 -1.2e-5,1.2 -0.4,2.2 -1.2,2.9 -0.8,0.7 -2,1.1 -3.5,1.2 l 0,3.3 m -1.1,-11.5 0,-4.4 c -0.8,0.1 -1.5,0.3 -1.9,0.7 -0.4,0.4 -0.7,0.9 -0.7,1.5 -4e-6,0.6 0.2,1.1 0.6,1.4 0.4,0.3 1.1,0.6 2,0.7 m 1.1,2.1 0,4.7 c 0.9,-0.1 1.6,-0.4 2.1,-0.8 0.5,-0.4 0.7,-0.9 0.7,-1.6 -1e-5,-0.6 -0.2,-1.1 -0.7,-1.5 -0.4,-0.4 -1.1,-0.6 -2.1,-0.8 m 22.6,-21.9 -8,20.8 0.8,0.3 8,-20.8 -0.8,-0.3 z m -43,6.5 0,0.8 0.3,26 0,0.8 0.8,0 32.2,-0.2 0.4,0 0.2,-0.3 7.3,-8.7 0.2,-0.2 -0,-0.3 -0.2,-10.1 0,-0.4 -0.3,-0.2 -8.4,-6.6 -0.2,-0.2 -0.3,0 -31.3,-0.4 -0.8,0 z m 1.6,1.6 30.2,0.3 7.9,6.2 0.2,9.4 -6.9,8.2 -31,0.2 -0.3,-24.3 z M 97.3,85.4 h 14.4 v 7.7 c -2.1,0 -6.2,1.4 -7.8,0.9 -1.6,-0.5 -5,-2.1 -6.6,-2.2 v -6.4 z m -25.5,0 h 22.1 v 7.9 c 0,0.8 4,1.9 4.8,2.2 0.5,0.2 5.2,1.9 5.2,2 l 9.6,-1.2 1,3.6 1.4,4.9 c 0.3,0.5 1.3,3.2 1.3,4.1 v 0.2 c 0,1.5 -0.9,2.5 -0.9,4.7 h 18 l -1.1,-3.9 -0.8,-2.4 -4,-13.4 c -0.3,-0.5 -0.6,-0.9 -0.6,-1.7 0,-1.7 5.2,-5.5 6.2,-7.1 l -3.6,-11.1 H 71.8 v 11.1 l 0,0 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 85.1,113.6 0,4.7 c 0.9,-0.1 1.6,-0.4 2.1,-0.8 0.5,-0.4 0.7,-0.9 0.7,-1.6 -1e-5,-0.6 -0.2,-1.1 -0.7,-1.5 -0.4,-0.4 -1.1,-0.6 -2.1,-0.8 m -1.1,-2.1 0,-4.4 c -0.8,0.1 -1.5,0.3 -1.9,0.7 -0.4,0.4 -0.7,0.9 -0.7,1.5 -4e-6,0.6 0.2,1.1 0.6,1.4 0.4,0.3 1.1,0.6 2,0.7 M 66.4,99.8 l 0.3,24.3 31,-0.2 6.9,-8.2 -0.2,-9.4 -7.9,-6.2 -30.2,-0.3 z m 17.7,3.3 1.1,0 0,2.5 c 0.7,0 1.3,0.1 1.9,0.2 0.6,0.1 1.2,0.2 1.8,0.4 l 0,1.9 c -0.6,-0.3 -1.2,-0.5 -1.8,-0.7 -0.6,-0.2 -1.3,-0.3 -1.9,-0.3 l 0,4.6 c 1.6,0.3 2.8,0.7 3.6,1.3 0.8,0.6 1.2,1.5 1.2,2.7 -1.2e-5,1.2 -0.4,2.2 -1.2,2.9 -0.8,0.7 -2,1.1 -3.5,1.2 l 0,3.3 -1.1,0 0,-3.2 c -0.8,-0 -1.5,-0.1 -2.3,-0.3 -0.8,-0.2 -1.5,-0.4 -2.3,-0.8 l 0,-1.9 c 0.7,0.5 1.5,0.8 2.2,1.1 0.8,0.2 1.5,0.3 2.3,0.3 l 0,-4.9 c -1.6,-0.3 -2.7,-0.7 -3.5,-1.3 -0.7,-0.6 -1.1,-1.5 -1.1,-2.5 -2e-6,-1.2 0.4,-2.1 1.2,-2.8 0.8,-0.7 1.9,-1.1 3.4,-1.2 l 0,-2.5 z"}],G["GR.IN.IC.HAZARDOUS MATERIAL PRODUCTION"]=[{type:"path",stroke:!1,d:"m 104.7,71.8 h 5 v 15 h 11.1 v -15 h 5 v 15 h 7.5 v 41.4 h -67.4 V 86.8 h 38.8 v -15 z m -40,57.9 h 69.8 V 85.5 h -7.1 v -15.2 h -8 v 15.2 h -8 v -15.2 h -8 v 15.2 h -38.6 v 44.1 l 0,0 z m 15.5,-21.8 h 38.6 l -19.3,18.6 -19.3,-18.6 z m 21.8,-16.8 c 0.5,0.4 4.3,3.8 4.3,4.3 v 12 h -4.3 V 91.1 z m -5,-0 0,16.3 h -4.3 l 0.1,-12.2 4.1,-4.1 0,0 z m -12.1,12 c 0,-0.4 3.1,-3.2 3.6,-3.6 v 7.8 h -3.6 v -4.3 z m 25.7,-3.6 3.7,3.4 c -0.2,0.4 -0.2,-0.2 -0.2,0.5 v 4 h -3.6 v -7.9 z m 9.4,8.2 -20.5,-20 -20.4,20 20.4,19.9 20.5,-19.9 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 99.5,126.5 19.3,-18.6 -38.6,0 z m 0,1 -20.4,-19.9 20.4,-20 20.5,20 -20.5,19.8 z m 5.2,-40.8 h -38.8 v 41.4 h 67.4 V 86.8 h -7.5 v -15 h -5 v 15 h -11.1 v -15 h -5 v 15 z m 5.9,20.6 h 3.6 v -4 c 0,-0.7 -0,-0.1 0.2,-0.5 l -3.7,-3.4 v 7.9 z m -8.6,0 h 4.3 v -12 c 0,-0.4 -3.8,-3.9 -4.3,-4.3 v 16.3 z m -9.3,0 4.3,0 -0,-16.3 -4.1,4.1 z m -7.8,-4.3 v 4.3 h 3.6 v -7.9 c -0.5,0.3 -3.6,3.2 -3.6,3.6 z"}],G["GR.IN.IC.HAZARDOUS MATERIAL STORAGE"]=[{type:"path",stroke:!1,d:"m 122.4,68.8 c 0.4,0.1 0.9,0.5 1.3,1 0.4,0.5 0.8,1.2 1.3,2 l 2.1,4.1 -2.2,0 -1.9,-3.9 c -0.5,-1 -1,-1.7 -1.5,-2 -0.5,-0.3 -1.1,-0.5 -1.9,-0.5 l -2.2,0 0,6.4 -2.1,0 0,-15.2 4.6,0 c 1.7,1.5e-5 3,0.4 3.9,1.1 0.9,0.7 1.3,1.8 1.3,3.3 -10e-6,1 -0.2,1.7 -0.7,2.4 -0.4,0.6 -1.1,1.1 -1.9,1.3 m -5.1,-6.4 0,5.4 2.6,0 c 1,8e-6 1.7,-0.2 2.2,-0.7 0.5,-0.5 0.8,-1.1 0.8,-2 -10e-6,-0.9 -0.3,-1.6 -0.8,-2 -0.5,-0.5 -1.2,-0.7 -2.2,-0.7 l -2.6,0 m -12.3,-0.3 c -1.5,1.4e-5 -2.7,0.6 -3.6,1.7 -0.9,1.1 -1.3,2.6 -1.3,4.5 -1e-5,1.9 0.4,3.4 1.3,4.5 0.9,1.1 2.1,1.7 3.6,1.7 1.5,1e-6 2.7,-0.6 3.5,-1.7 0.9,-1.1 1.3,-2.6 1.3,-4.5 -10e-6,-1.9 -0.4,-3.4 -1.3,-4.5 -0.9,-1.1 -2,-1.7 -3.5,-1.7 m 0,-1.7 c 2.1,1.5e-5 3.8,0.7 5.1,2.1 1.3,1.4 1.9,3.3 1.9,5.7 -10e-6,2.4 -0.6,4.3 -1.9,5.7 -1.3,1.4 -3,2.1 -5.1,2.1 -2.1,-10e-7 -3.8,-0.7 -5.1,-2.1 -1.3,-1.4 -1.9,-3.3 -1.9,-5.7 -2e-6,-2.4 0.6,-4.3 1.9,-5.7 1.3,-1.4 3,-2.1 5.1,-2.1 m -21,0.3 12.8,0 0,1.7 -5.4,0 0,13.4 -2.1,0 0,-13.4 -5.4,0 0,-1.7 m -2,0.5 0,2 c -0.8,-0.4 -1.5,-0.6 -2.2,-0.8 -0.7,-0.2 -1.4,-0.3 -2,-0.3 -1.1,1.4e-5 -2,0.2 -2.6,0.7 -0.6,0.4 -0.9,1 -0.9,1.8 -3e-6,0.7 0.2,1.2 0.6,1.5 0.4,0.3 1.2,0.6 2.3,0.8 l 1.2,0.3 c 1.5,0.3 2.7,0.8 3.4,1.5 0.7,0.7 1.1,1.7 1.1,2.9 -1.2e-5,1.5 -0.5,2.6 -1.5,3.3 -1,0.8 -2.4,1.1 -4.3,1.1 -0.7,-10e-7 -1.5,-0.1 -2.3,-0.2 -0.8,-0.2 -1.6,-0.4 -2.5,-0.7 l 0,-2.1 c 0.8,0.5 1.6,0.8 2.4,1.1 0.8,0.2 1.6,0.4 2.4,0.4 1.2,1e-6 2.1,-0.2 2.7,-0.7 0.6,-0.5 1,-1.1 1,-2 -1e-5,-0.7 -0.2,-1.3 -0.7,-1.7 -0.5,-0.4 -1.2,-0.7 -2.2,-0.9 l -1.2,-0.2 c -1.5,-0.3 -2.6,-0.8 -3.3,-1.4 -0.7,-0.6 -1,-1.6 -1,-2.7 -2e-6,-1.3 0.5,-2.4 1.4,-3.2 0.9,-0.8 2.3,-1.2 3.9,-1.2 0.7,1.5e-5 1.4,0.1 2.2,0.2 0.7,0.1 1.5,0.3 2.3,0.6 M 70.6,110 h 57.9 l -29,27.9 -28.9,-27.9 z m 32.8,-25.2 c 0.8,0.5 6.4,5.8 6.4,6.4 v 17.9 h -6.4 V 84.8 z m -7.6,-0.1 0.1,24.4 h -6.5 l 0.2,-18.3 6.2,-6.1 0,0 z m -18.2,18 c 0,-0.7 4.7,-4.9 5.3,-5.3 v 11.8 h -5.3 v -6.5 z m 38.6,-5.3 5.6,5.2 c -0.3,0.7 -0.2,-0.3 -0.2,0.7 v 5.9 h -5.3 V 97.4 z m 14.2,12.3 -30.7,-30.1 -30.7,30 30.7,29.9 30.8,-29.8 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 99.5,137.9 29,-27.9 -57.9,0 z m 16.7,-28.7 h 5.3 v -5.9 c 0,-1 -0.1,-0.1 0.2,-0.7 l -5.6,-5.2 v 11.8 z m -12.8,0 h 6.4 V 91.2 c 0,-0.7 -5.6,-5.9 -6.4,-6.4 v 24.4 z m -14,-10e-6 6.5,0 -0.1,-24.4 -6.2,6.1 z m -11.8,-6.4 v 6.4 h 5.3 V 97.4 c -0.7,0.5 -5.3,4.7 -5.3,5.3 z"}],G["GR.IN.IC.INDUSTRIAL SITE"]=[{type:"path",stroke:!1,d:"m 104.1,74.8 h 4.5 v 13.4 h 9.9 V 74.8 h 4.5 v 13.4 h 6.7 v 37 H 69.6 V 88.2 h 34.6 l 4e-4,-13.4 0,0 z m -35.7,51.6 h 62.3 V 86.9 h -6.4 V 73.5 h -7.2 v 13.4 h -7.2 V 73.5 h -7.2 v 13.4 h -34.4 v 39.5 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 104.1,74.8 h 4.5 v 13.4 h 9.9 V 74.8 h 4.5 v 13.4 h 6.7 v 37 H 69.6 V 88.2 h 34.6 l 4e-4,-13.4 0,0 z"}],G["GR.IN.IC.LANDFILL"]=[{type:"path",stroke:!1,d:"m 124.1,115.8 c 0,2.5 1.6,2.7 3,3.6 h -22.8 c 1.2,-0.7 2.8,-1.2 2.8,-3.3 v -1.2 c 0,-1.3 -1.9,-2.8 -3.6,-2.8 -1,0 -1.8,0.4 -2.3,0.9 -0.4,0.4 -1.1,1.6 -1.1,2.1 v 1.3 c 0,0.2 0.9,1.7 1,1.9 0.6,0.7 1.2,0.6 1.8,1 h -8.6 c 0.6,-0.4 1.3,-0.5 1.8,-1.1 0.4,-0.4 0.6,-1.4 1,-1.6 v -1.7 c 0,-0.4 -0.9,-1.8 -1.2,-2.1 -0.6,-0.6 -1.3,-0.9 -2.4,-0.9 h -0.1 c -1.7,0 -3.5,1.5 -3.5,3.1 v 1.3 c 0,1.5 2,2.2 2.8,2.8 h -8.7 c -0.1,-3.2 -2.5,-1.8 -3.1,-3 -1.1,-1.9 0.9,-2.2 -2.8,-3.1 -3.1,-0.8 -2,-0.3 -3.9,-2.2 -0.6,-0.7 -3,-1.8 -4.2,-1.8 h -0.1 c -1,0 -1.9,1.2 -2.7,1.5 -1.1,0.5 -2.3,0.4 -3.2,1.1 -1.1,0.8 -2.3,4.4 -2.3,6.2 v 0.6 h -0.4 v 2.2 h 72.1 4.9 v -1.5 h -9.5 c 0.8,-0.5 0.9,-0.2 1.8,-1 0.4,-0.4 0.9,-1.5 1.2,-1.6 v -1.6 c 0,-0.5 -0.9,-1.9 -1.3,-2.2 -0.7,-0.5 -1.4,-0.8 -2.5,-0.8 -1.9,0 -3.6,1.5 -3.6,3.5 v 0.2 h 0 z m -1,-17.6 h 3.5 c 0.5,0 4.2,4.8 4.6,5.4 h -8.1 v -5.4 z m -4.1,-17.8 -0.7,-1.3 -7,3.9 1.4,3.5 -32,14.5 c 0.8,0.4 2.1,4.3 2.6,5.3 0.2,0.4 2.3,5 2.3,5.1 0,0.5 -0.9,0.2 -0.8,0.6 l 0.5,3.1 h 3.4 c 0,-2.4 2,-4.8 4.3,-4.8 h 1 c 2.4,0 4.3,2.3 4.3,4.8 h 0.6 c 0,-2.4 0.6,-2.3 1.5,-3.6 l -2.1,-5.6 9.5,-4.3 4.2,9.9 -5.1,0 c 0.9,1.3 1.6,1.3 1.6,3.6 h 14.4 v -0.5 c 0,-2.1 2.5,-4.3 4.8,-4.3 h 0.5 c 2.6,0 4.6,2.2 4.6,4.8 h 2.6 v -3.1 h -1.2 v -7.4 c 0,-1.2 -5.8,-6.8 -6.1,-8.1 h -6.4 v 15 h -4.1 l -5.3,-12.1 5.5,-2.3 -4.3,-9.5 5.6,-7.4 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 123.1,103.6 h 8.1 c -0.5,-0.6 -4.2,-5.4 -4.6,-5.4 h -3.5 v 5.4 z"}],G["GR.IN.IC.PHARMACEUTICAL MANUFACTURER"]=[{type:"path",stroke:!1,d:"m 105.2,71.3 h 5.1 V 86.5 H 121.5 V 71.3 h 5.1 v 15.2 h 7.6 v 42.1 H 65.8 V 86.6 h 39.4 V 71.3 z M 64.5,130.1 h 71 V 85.3 h -7.3 V 69.9 h -8.2 V 85.3 h -8.2 V 69.9 H 103.7 V 85.3 H 64.5 v 44.8 z M 90.3,93.1 h 7.6 c 1.2,0 3.4,1.8 3.4,2.7 v 2.6 c 0,1.3 -2.4,2.9 -3.6,2.9 h -7.4 v -8.2 z m -4.9,26.5 h 4.9 v -13.1 l 1.7,0.1 7.6,10 -8.8,11 5.9,0.1 5.9,-7 c 1.2,0.3 4.2,5.9 5.6,6.9 h 6.2 c -0.9,-1.7 -8.4,-10.4 -8.4,-11 0,-0.3 7.4,-9.7 8.2,-10.4 l -6,-0.1 -5.6,6.2 -4.3,-5.7 c 5.2,-1.2 8.4,-3.3 8.4,-9.8 v -0.6 c 0,-2 -1.7,-4.7 -2.8,-5.8 -1,-1 -4.1,-2.4 -6.2,-2.4 H 85.4 v 31.6 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 85.4,88 h 12.4 c 2.1,0 5.1,1.4 6.1,2.4 1.1,1.1 2.8,3.8 2.8,5.8 v 0.6 c 0,6.5 -3.1,8.6 -8.4,9.8 l 4.3,5.7 5.6,-6.2 6.1,0.1 c -0.8,0.6 -8.2,10 -8.2,10.4 0,0.7 7.4,9.4 8.4,11.1 h -6.2 c -1.5,-1 -4.4,-6.6 -5.6,-6.9 l -5.9,6.9 -5.9,-0.1 8.8,-11 -7.6,-9.9 -1.8,-0.1 v 13.1 h -4.9 v -31.6 z m 19.8,-1.4 h -39.4 v 42.1 h 68.4 V 86.6 h -7.6 V 71.3 H 121.5 V 86.5 H 110.3 V 71.3 h -5.1 v 15.3 z m -14.9,14.7 h 7.4 c 1.2,0 3.6,-1.6 3.6,-2.9 v -2.5 c 0,-1 -2.2,-2.7 -3.4,-2.7 h -7.6 v 8.2 z"}],G["GR.IN.IC.CONTAMINATED HAZARDOUS WASTE SITE"]=[{type:"path",stroke:!1,d:"m 133.7,71.5 c -0.3,0 -0.7,0.1 -0.9,0.2 l -49.5,0 -0.7,0 0,0.1 c -0.7,0.3 -1.3,0.9 -1.8,1.7 -0.6,1 -1.2,2.5 -1.6,4.2 -0.9,3.5 -1.4,8.2 -1.4,13.4 0,4.8 0.5,9.2 1.2,12.6 -1,0.1 -2.1,0.5 -3,0.3 -1.2,-0.1 -2.5,-0.1 -3.8,-0.1 -1.3,0 -6.5,-0.9 -6.5,0.7 0,1.8 6,3.4 7.5,6.1 -0.8,1.5 -5.9,1.4 -8.1,1.8 -1.5,0.2 -3,0.2 -3.8,1.1 -1,1 0.2,2.3 1.1,2.7 1.7,0.9 6,1 8.2,1.5 1.3,0.3 2.6,0.7 3.1,1.9 0.4,1.1 0.6,2.6 2.2,2.6 l 0.1,0 c 2.1,0 5.1,-1.7 7.9,-1.7 l 1.1,0 c 6.2,0 6.8,7.4 12.3,7.7 3.5,0.2 5.3,-0.8 7.8,-1.9 1.6,-0.7 5.5,-2.8 7.3,-2.8 l 0.3,0 c 1.8,0 3.3,1.1 4.8,1.5 1.6,0.5 3.3,1 5.4,1 l 0.5,0 c 1.2,0 2.3,-0.2 3.2,-0.5 1.2,-0.4 1.1,-1 1.1,-2.4 -0.1,-1.9 -2.2,-3.3 -3.5,-4 -1.4,-0.9 -3.4,-1.8 -4.9,-2.6 -0.8,-0.4 -1.5,-0.9 -2.3,-1.4 -1.3,-1 -1,-0.6 -1.7,-2.1 1.2,-1.8 6.9,0.2 6.9,-1.9 0,-0.2 -0.3,-0.5 -0.7,-0.7 l 12.2,0 0.7,0 0,-0.4 c 0.7,-0.3 1.3,-0.9 1.8,-1.7 0.6,-1 1.2,-2.5 1.6,-4.2 0.9,-3.5 1.4,-8.2 1.4,-13.4 0,-5.2 -0.5,-9.9 -1.4,-13.4 -0.4,-1.7 -1,-3.2 -1.6,-4.2 -0.6,-1 -1.4,-1.8 -2.5,-1.8 z m 0.3,1.4 c 0.3,0 0.7,0.3 1.3,1.1 0.5,0.8 1,2.2 1.4,3.8 0.8,3.3 1.4,7.9 1.4,13.1 0,5.1 -0.5,9.8 -1.4,13.1 -0.4,1.7 -0.9,3 -1.4,3.8 -0.5,0.8 -1,1.1 -1.3,1.1 -0.2,0 -0.4,-0.1 -0.7,-0.4 l 0,0.7 -47.9,0 c 0.2,-0.2 0.4,-0.4 0.6,-0.8 0.6,-1 1.1,-2.3 1.5,-4 0.9,-3.4 1.4,-8.1 1.4,-13.2 0,-5.2 -0.5,-9.8 -1.4,-13.2 -0.4,-1.7 -0.9,-3.1 -1.5,-4 -0.2,-0.3 -0.4,-0.5 -0.6,-0.7 l 47.9,0 0,0.2 c 0.3,-0.3 0.5,-0.4 0.7,-0.4 z m -50.7,0.2 c 0.3,0 0.7,0.3 1.3,1.1 0.5,0.8 1,2.2 1.4,3.8 0.8,3.3 1.4,7.9 1.4,13.1 0,5.1 -0.5,9.8 -1.4,13.1 -0.4,1.7 -0.9,3 -1.4,3.8 -0.5,0.8 -1,1.1 -1.3,1.1 -0.3,0 -0.7,-0.3 -1.3,-1.1 -0.3,-0.5 -0.6,-1.1 -0.8,-1.8 0.4,1.7 1,3 1.7,3.5 l 8.3,-0.2 7.1,0.1 20.3,-0.1 c 0.5,0 1.5,0.5 2.3,1 l 0,0 c 0.5,0.3 0.8,0.6 1,0.7 -0.1,0.2 -0.4,0.3 -0.6,0.4 -0.2,0.1 -0.5,0.2 -0.8,0.2 -0.4,0.1 -0.9,0.1 -1.3,0.1 -0.2,-0 -0.5,-0 -0.7,-0 -0.4,-0 -0.9,-0 -1.2,-0 l -0.3,0 c -0.9,0 -1.7,0.5 -1.7,1.4 l 0,0.1 0,0.1 c 0,0.1 0,0.2 0,0.3 0.7,3 11.3,5.8 11.9,9.2 0,0.1 0,0.2 0,0.3 -0,0.1 -0,0.1 -0,0.1 -0.2,1.6 -2.9,2.2 -5.2,2.2 -0.7,0 -1.3,0 -1.8,-0.1 -2.6,-0.4 -5.4,-2.3 -7.3,-2.3 -5.3,0 -9.5,5.5 -15.2,4.8 -4.4,-0.6 -5.5,-7.9 -12.3,-7.9 l -1.3,0 c -3,0 -5.6,1.7 -8.4,1.7 -0.5,0 -0.7,-0.3 -0.9,-0.6 -0,-0 -0,-0.1 -0.1,-0.1 -0.2,-0.5 -0.3,-1.1 -0.6,-1.6 -0,-0 0,-0 0,-0 -0,-0.1 -0.1,-0.1 -0.1,-0.2 -0,-0 -0,-0.1 -0.1,-0.1 -0,-0.1 -0.1,-0.1 -0.1,-0.1 -0.1,-0.2 -0.3,-0.3 -0.4,-0.4 -1.2,-0.9 -2.3,-1.1 -4,-1.4 -1.9,-0.3 -5.8,-0.3 -7.3,-1.5 -0,-0 -0.1,-0.1 -0.1,-0.1 -0,-0 -0,-0 -0.1,-0.1 -0,-0 -0.1,-0.1 -0.1,-0.1 -0,-0 -0,-0 -0,-0.1 -0,-0 -0,-0 -0,-0 -0.2,-0.3 -0.4,-0.6 -0.4,-0.9 l 0,-0.3 c 0,-2.1 13.2,-0.9 13.2,-3.2 0,-0.3 -0.1,-0.6 -0.3,-0.8 -0,-0.1 -0.1,-0.1 -0.1,-0.2 -0,-0 -0,-0 -0.1,-0.1 -0.1,-0.1 -0.1,-0.1 -0.2,-0.2 -0,-0 -0,-0 -0.1,-0.1 -0.1,-0.1 -0.3,-0.3 -0.5,-0.4 -1.7,-1.3 -4.8,-2.7 -6.3,-3.9 -0.1,-0.1 -0.3,-0.2 -0.4,-0.3 -0,-0 -0,-0 -0.1,-0.1 -0,-0 -0.1,-0.1 -0.1,-0.1 -0,-0 -0,-0 -0.1,-0.1 -0,-0 -0.1,-0.1 -0.1,-0.1 -0.1,-0.1 -0.2,-0.2 -0.2,-0.4 0.3,-0.1 0.6,-0.3 1.1,-0.3 l 2.9,0 6.3,0.3 2.6,-0.3 c 9.4e-4,0 -9.4e-4,0 0,0 l 0.7,-0.1 0.8,0.1 c -0,-0 -0,-0 -0,-0 -0.8,-3.3 -1.4,-7.9 -1.4,-13.1 0,-5.1 0.5,-9.7 1.4,-13.1 0.4,-1.7 0.9,-3 1.4,-3.8 0.5,-0.8 1,-1.1 1.3,-1.1 z m 27.7,1.1 -17.4,17 17.4,16.9 17.4,-16.9 -17.4,-17 z m -2.2,2.9 0,13.8 -3.6,0 0.1,-10.4 3.5,-3.5 z m 4.3,0 c 0.4,0.3 3.6,3.3 3.6,3.7 l 0,10.2 -3.6,0 0,-13.8 z m 7.3,7.2 3.2,2.9 c -0.1,0.1 -0.1,0.1 -0.1,0.1 -0,-0 0,0 0,0.3 l 0,3.3 -3.1,0 0,-6.7 z m -18.8,0 0,6.7 -3,0 0,-3.7 c 0,-0.4 2.7,-2.8 3,-3 z m -7,7.1 32.8,0 -16.4,15.8 -16.4,-15.8 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 134,72.9 c -0.2,0 -0.4,0.1 -0.7,0.4 l 0,-0.2 -47.9,0 c 0.2,0.2 0.4,0.4 0.6,0.7 0.6,1 1.1,2.3 1.5,4 0.9,3.4 1.4,8.1 1.4,13.2 0,5.2 -0.5,9.8 -1.4,13.2 -0.4,1.7 -0.9,3.1 -1.5,4 -0.2,0.3 -0.4,0.5 -0.6,0.8 l 47.9,0 0,-0.7 c 0.3,0.3 0.5,0.4 0.7,0.4 0.3,0 0.7,-0.3 1.3,-1.1 0.5,-0.8 1,-2.2 1.4,-3.8 0.8,-3.3 1.4,-7.9 1.4,-13.1 0,-5.1 -0.5,-9.8 -1.4,-13.1 -0.4,-1.7 -0.9,-3 -1.4,-3.8 -0.5,-0.8 -1,-1.1 -1.3,-1.1 z m -50.7,0.2 c -0.3,0 -0.7,0.3 -1.3,1.1 -0.5,0.8 -1,2.2 -1.4,3.8 -0.8,3.3 -1.4,7.9 -1.4,13.1 0,5.1 0.5,9.8 1.4,13.1 0,0 0,0 0,0 l -0.8,-0.1 -3.3,0.4 -6.2,-0.3 -2.9,0 c -0.5,0 -0.8,0.1 -1.1,0.3 0.4,1.6 8.4,4.3 8.4,6.5 0,2.3 -13.2,1.1 -13.2,3.2 l 0,0.3 c 0,2.4 5.6,2.3 8,2.7 1.7,0.3 2.8,0.5 4,1.4 1.3,1 0.8,3.3 2.2,3.3 2.8,0 5.4,-1.7 8.4,-1.7 l 1.3,0 c 6.8,0 7.9,7.3 12.3,7.9 5.7,0.7 9.9,-4.8 15.2,-4.8 1.8,0 4.7,1.9 7.3,2.3 2.3,0.2 7,-0.2 7,-2.4 0,-3.6 -12,-6.5 -12,-9.8 l 0,-0.1 c 0,-0.9 0.9,-1.4 1.7,-1.4 l 0.3,0 c 1.4,0 3.9,0.3 4.7,-0.7 -0.3,-0.4 -2.5,-1.7 -3.2,-1.7 l -20.3,0.1 -7.1,-0.1 -8.3,0.2 c -0.7,-0.5 -1.3,-1.8 -1.7,-3.5 0.3,0.7 0.5,1.3 0.8,1.8 0.5,0.8 1,1.1 1.3,1.1 0.3,0 0.7,-0.3 1.3,-1.1 0.5,-0.8 1,-2.2 1.4,-3.8 0.8,-3.3 1.4,-7.9 1.4,-13.1 0,-5.1 -0.5,-9.7 -1.4,-13.1 -0.4,-1.7 -0.9,-3 -1.4,-3.8 -0.5,-0.8 -1,-1.1 -1.3,-1.1 z m 27.7,1.1 17.4,17 -17.4,16.9 -17.4,-16.9 17.4,-17 z m -2.2,2.9 -3.5,3.5 -0.1,10.4 3.6,0 -0,-13.8 z m 4.3,0 0,13.8 3.6,0 0,-10.2 c 0,-0.4 -3.2,-3.4 -3.6,-3.7 z m 7.3,7.2 0,6.7 3.1,0 0,-3.3 c 0,-0.3 -0,-0.3 -0,-0.3 0,0 0,0 0.1,-0.1 l -3.2,-2.9 z m -18.8,0 c -0.4,0.3 -3,2.7 -3,3 l 0,3.7 3,0 0,-6.7 z m -7,7.1 16.4,15.8 16.4,-15.8 -32.8,0 z"}],G["GR.IN.IC.TOXIC RELEASE INVENTORY"]=[{type:"path",stroke:!1,d:"m 81.8,61 0,15.2 2,0 0,-6.4 2.2,0 c 0.8,6e-6 1.5,0.2 1.9,0.5 0.5,0.3 1,1 1.5,2 l 1.9,3.9 2.2,0 -2.1,-4.2 c -0.4,-0.9 -0.8,-1.5 -1.3,-2 -0.4,-0.5 -0.8,-0.8 -1.3,-0.9 0.8,-0.2 1.5,-0.7 1.9,-1.3 0.4,-0.6 0.7,-1.4 0.7,-2.4 -2e-5,-1.5 -0.4,-2.6 -1.3,-3.3 -0.9,-0.7 -2.1,-1.1 -3.9,-1.1 l -4.6,0 z m 14.5,0 0,15.2 9.8,0 0,-1.7 -7.7,0 0,-5.5 7.2,0 0,-1.7 -7.2,0 0,-4.5 7.5,0 0,-1.7 -9.6,0 z m 13.2,0 0,15.2 9.4,0 0,-1.7 -7.4,0 0,-13.4 -2,0 z m -25.6,1.7 2.6,0 c 1,1.4e-5 1.7,0.2 2.2,0.7 0.5,0.4 0.8,1.1 0.8,2 -10e-6,0.9 -0.3,1.6 -0.8,2 -0.5,0.5 -1.2,0.7 -2.2,0.7 l -2.6,0 0,-5.4 z m 16,14.7 c -4.3,1.1e-5 -8.3,0.4 -11.2,1.2 -1.4,0.4 -2.6,0.8 -3.5,1.3 -0.7,0.4 -1.2,0.9 -1.4,1.5 l -0.1,0 0,0.6 c -3.1e-5,0 0,0 0,0 l 0,31.1 -0.2,-0.7 c -0.1,0 -1.1,0.1 -2.4,0 -1.2,-0.1 -2.7,-0.2 -4.2,-0.3 -1.5,-0.1 -2.9,-0.2 -4,-0.1 -0.6,0 -1.1,0 -1.5,0.1 -0.2,0 -0.4,0.1 -0.6,0.2 -0.2,0.1 -0.4,0.2 -0.6,0.5 -0.3,0.4 -0.4,0.9 -0.3,1.4 0.1,0.5 0.3,0.8 0.5,1.2 0.5,0.7 1.2,1.2 1.9,1.7 0.7,0.5 1.4,1 1.9,1.5 0.5,0.5 0.7,0.9 0.6,1.2 -0,0.1 -0,0.2 -0.2,0.3 -0.2,0.2 -0.6,0.3 -1,0.5 -0.9,0.3 -2.2,0.5 -3.5,0.7 -1.3,0.2 -2.7,0.3 -3.7,0.5 -0.5,0.1 -1,0.2 -1.4,0.4 -0.2,0.1 -0.4,0.2 -0.6,0.3 -0.2,0.2 -0.4,0.4 -0.4,0.7 -0.1,0.9 0.3,1.7 1,2.3 0.7,0.6 1.5,1.1 2.6,1.6 2.1,0.9 4.9,1.7 7.9,2.4 2.9,0.7 5.9,1.2 8.3,1.7 2.4,0.4 4.4,0.8 4.8,0.9 2,0.6 3.3,1.8 4.9,3.2 1.5,1.3 3.2,2.8 5.8,3.5 3,0.8 6.2,-0.6 9.4,-2 3.2,-1.4 6.4,-2.8 9.1,-2.5 0.1,0 1,0.2 1.9,0.5 1,0.3 2.2,0.6 3.4,0.8 1.2,0.3 2.4,0.5 3.5,0.6 1.1,0.1 2,0.2 2.7,-0.5 0.8,-0.7 1.3,-1.4 1.4,-2.1 0.2,-0.8 -0,-1.5 -0.4,-2.2 -0.8,-1.3 -2.2,-2.3 -3.9,-3.2 -1.6,-0.9 -3.5,-1.8 -5,-2.6 -1.5,-0.8 -2.7,-1.6 -3,-1.9 -0.2,-0.3 -0.2,-0.2 -0.1,-0.4 0.1,-0.1 0.3,-0.4 0.7,-0.7 0.8,-0.5 2.2,-1 3.2,-1.5 0.5,-0.3 1,-0.5 1.3,-1 0.2,-0.3 0.3,-0.7 0.2,-1 -0.1,-0.4 -0.3,-0.6 -0.6,-0.8 -0.5,-0.4 -1.2,-0.7 -2.3,-1.1 -1.1,-0.3 -2.6,-0.7 -4.6,-1.1 l -0.3,1.3 0,-35.4 0,-0.6 -0.1,0 c -0.2,-0.6 -0.7,-1.1 -1.4,-1.5 -0.9,-0.5 -2.1,-1 -3.5,-1.3 -2.9,-0.7 -6.8,-1.2 -11.2,-1.2 z m 0,1.2 c 4.3,-1.1e-5 8.1,0.4 10.9,1.1 1.4,0.4 2.5,0.8 3.2,1.2 0.3,0.2 0.4,0.3 0.6,0.5 0.1,0.1 0.2,0.2 0.3,0.3 0,0 0,0 0,0.1 0,0 0,0.1 0,0.1 0,0 0,0.1 0,0.1 0,0 -0,0.1 -0,0.1 -0,0 -0,0 -0,0 -0,0 -0,0 -0,0.1 -0,0 -0,0 -0,0.1 -0,0 -0,0 -0,0.1 -0,0 -0,0.1 -0.1,0.1 -0,0.1 -0.1,0.1 -0.1,0.2 -0,0 -0,0 -0,0 -0.1,0.1 -0.3,0.3 -0.6,0.5 -0.7,0.4 -1.8,0.8 -3.2,1.2 -2.8,0.7 -6.6,1.2 -10.9,1.2 -4.3,1.1e-5 -8.1,-0.4 -10.9,-1.1 -1.4,-0.4 -2.5,-0.8 -3.2,-1.2 -0.3,-0.2 -0.5,-0.3 -0.6,-0.5 -0,-0 -0.1,-0.1 -0.1,-0.1 -0,-0 -0,-0 -0,-0 -0,-0 -0,-0.1 -0.1,-0.1 -0,-0 -0,-0 -0,-0 -0,-0 -0,-0.1 -0.1,-0.1 -0,-0.1 -0.1,-0.1 -0.1,-0.2 0,-0 0,-0.1 0,-0.1 0.1,-0.2 0.3,-0.6 0.9,-0.9 0.7,-0.4 1.8,-0.8 3.2,-1.2 2.8,-0.7 6.6,-1.1 10.9,-1.1 z m 15,5.3 0,34.1 0,0 0,5.6 c 0.1,0.2 0.2,0.3 0.2,0.4 0,0.2 -0.2,0.6 -0.9,1.1 -0.7,0.4 -1.8,0.8 -3.2,1.2 -2.8,0.7 -6.6,1.1 -10.9,1.1 -4.3,1e-5 -8.1,-0.4 -10.9,-1.1 -1.4,-0.4 -2.5,-0.8 -3.2,-1.2 -0.6,-0.4 -0.9,-0.7 -0.9,-1 l -0,0 0,-0.1 0,-1.9 c -0.1,0.1 -0.1,0.1 -0.2,0.1 l 0,-38.4 c 0.1,0.1 0.2,0.1 0.3,0.2 0.9,0.5 2.1,1 3.5,1.3 2.9,0.7 6.8,1.2 11.2,1.2 4.3,-1.2e-5 8.3,-0.5 11.2,-1.2 1.4,-0.4 2.6,-0.8 3.5,-1.3 0.1,-0.1 0.2,-0.1 0.3,-0.2 z m -15.2,6.1 -14.6,14.2 14.2,13.8 0.8,0 14.2,-13.8 -14.6,-14.3 z m -1.8,2.4 0,11.6 -3.1,0 0.1,-8.7 3,-2.9 z m 3.6,0 c 0.4,0.3 3,2.7 3,3 l 0,8.5 -3,0 0,-11.6 z m -9.7,6 0,5.6 -2.5,0 0,-3.1 c 0,-0.3 2.2,-2.3 2.5,-2.5 z m 15.8,0 2.6,2.5 c -0.1,0.3 -0.1,-0.1 -0.1,0.3 l 0,2.8 -2.5,0 0,-5.6 z m -21.7,6 27.5,0 -13.8,13.3 -13.7,-13.3 z m -12.8,9.3 c 1.1,-0 2.5,0 3.9,0.1 1.4,0.1 2.9,0.2 4.2,0.3 1.1,0.1 1.9,0.1 2.6,-0 l 0,10 0,0.6 0.3,0 c 0.2,0.6 0.7,1.1 1.4,1.5 0.9,0.5 2.1,1 3.5,1.3 2.9,0.7 6.8,1.2 11.2,1.2 4.3,-1e-5 8.3,-0.4 11.2,-1.2 1.4,-0.4 2.6,-0.8 3.5,-1.3 0.9,-0.5 1.5,-1.2 1.5,-2.1 0,-0.3 -0.1,-0.5 -0.2,-0.8 l 0,-5.6 c 1.9,0.4 3.4,0.8 4.4,1.1 0.9,0.3 1.3,0.5 1.6,0.7 -0.1,0.1 -0.1,0.1 -0.4,0.3 -0.8,0.4 -2.2,0.9 -3.3,1.6 -0.5,0.3 -1,0.7 -1.3,1.3 -0.3,0.6 -0.2,1.4 0.2,2 0.7,1 2,1.6 3.5,2.4 1.6,0.8 3.4,1.6 4.9,2.5 1.5,0.9 2.8,1.9 3.3,2.7 0.2,0.4 0.3,0.7 0.2,1 -0.1,0.3 -0.3,0.8 -0.9,1.3 0,-0 -0.6,0.2 -1.5,0.1 -0.9,-0.1 -2.1,-0.3 -3.3,-0.6 -1.2,-0.3 -2.4,-0.6 -3.3,-0.8 -1,-0.3 -1.7,-0.5 -2.2,-0.5 -3.3,-0.3 -6.7,1.3 -9.9,2.7 -3.2,1.4 -6.1,2.5 -8.4,1.9 -2.3,-0.6 -3.7,-1.8 -5.2,-3.2 -1.5,-1.3 -3.1,-2.8 -5.5,-3.5 -0.8,-0.2 -2.5,-0.5 -5,-0.9 -2.4,-0.4 -5.4,-1 -8.3,-1.6 -2.9,-0.7 -5.6,-1.5 -7.6,-2.3 -1,-0.4 -1.7,-0.9 -2.2,-1.3 -0.3,-0.3 -0.4,-0.5 -0.5,-0.7 0.2,-0.1 0.6,-0.2 1.1,-0.3 1,-0.2 2.3,-0.3 3.6,-0.5 1.4,-0.2 2.7,-0.4 3.9,-0.8 0.6,-0.2 1.1,-0.4 1.5,-0.8 0.4,-0.3 0.8,-0.8 0.8,-1.4 0.1,-1 -0.4,-1.8 -1.1,-2.5 -0.6,-0.7 -1.4,-1.2 -2.1,-1.7 -0.7,-0.5 -1.3,-1 -1.6,-1.4 -0.1,-0.2 -0.2,-0.3 -0.2,-0.4 -0,-0.1 0,-0.1 0.1,-0.2 0,-0 0.1,-0 0.1,-0 0.3,-0 0.7,-0.1 1.2,-0.1 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 85.8,104.4 13.7,13.3 13.8,-13.3 z m 21.7,-0.4 h 2.5 v -2.8 c 0,-0.5 -0,-0.1 0.1,-0.4 l -2.7,-2.4 v 5.6 z m -6.1,0 h 3.1 v -8.5 c 0,-0.3 -2.7,-2.8 -3.1,-3.1 v 11.6 z m -6.6,-8.7 -0.1,8.7 3.1,0 -0,-11.6 z m -5.7,5.6 v 3.1 h 2.5 v -5.6 c -0.3,0.2 -2.5,2.2 -2.5,2.5 z M 99.8,85.4 c -4.3,1.2e-5 -8.1,-0.4 -10.9,-1.1 -1.4,-0.4 -2.5,-0.8 -3.2,-1.2 -0.7,-0.4 -0.9,-0.8 -0.9,-1 0,-0.2 0.2,-0.6 0.9,-1 0.7,-0.4 1.8,-0.8 3.2,-1.2 2.8,-0.7 6.6,-1.2 10.9,-1.2 4.3,-1.1e-5 8.1,0.4 10.9,1.1 1.4,0.4 2.5,0.8 3.2,1.2 0.7,0.4 0.9,0.8 0.9,1 0,0.2 -0.2,0.6 -0.9,1 -0.7,0.4 -1.8,0.8 -3.2,1.2 -2.8,0.7 -6.6,1.2 -10.9,1.2 z m -15,-1.5 0,38.4 c 0.1,-0.1 0.1,-0.1 0.2,-0.1 l 0,1.8 0,0.1 0,0 c 0,0.2 0.3,0.6 0.9,0.9 0.7,0.4 1.8,0.9 3.2,1.2 2.8,0.7 6.6,1.2 10.9,1.2 4.3,-1e-5 8.2,-0.5 10.9,-1.2 1.4,-0.4 2.4,-0.8 3.2,-1.2 0.7,-0.4 0.9,-0.8 0.9,-1 0,-0.1 -0,-0.2 -0.2,-0.4 l 0,-5.6 -0,0 0,-34.1 c -0.1,0.1 -0.2,0.1 -0.3,0.2 -0.9,0.5 -2.1,1 -3.5,1.3 -2.9,0.7 -6.8,1.2 -11.2,1.2 -4.3,1.1e-5 -8.3,-0.4 -11.2,-1.2 -1.4,-0.4 -2.6,-0.8 -3.5,-1.3 -0.1,-0.1 -0.2,-0.1 -0.3,-0.2 z m 14.8,6.1 14.6,14.3 -14.2,13.8 -0.8,0 L 85,104.2 99.6,90 z m -26.7,23.7 c 1.1,-0 2.5,0 3.9,0.1 1.4,0.1 2.9,0.2 4.2,0.3 1.1,0.1 1.9,0.1 2.6,-0 l 0,10 0,0.6 0.3,0 c 0.2,0.6 0.7,1.1 1.4,1.5 0.9,0.5 2.1,1 3.5,1.3 2.9,0.7 6.8,1.2 11.2,1.2 4.3,-1e-5 8.3,-0.4 11.2,-1.2 1.4,-0.4 2.6,-0.8 3.5,-1.3 0.9,-0.5 1.5,-1.2 1.5,-2.1 0,-0.3 -0.1,-0.5 -0.2,-0.8 l 0,-5.6 c 1.9,0.4 3.4,0.8 4.4,1.1 0.9,0.3 1.3,0.5 1.6,0.7 -0.1,0.1 -0.1,0.1 -0.4,0.3 -0.8,0.4 -2.2,0.9 -3.3,1.6 -0.5,0.3 -1,0.7 -1.3,1.3 -0.3,0.6 -0.2,1.4 0.2,2 0.7,1 2,1.6 3.5,2.4 1.6,0.8 3.4,1.6 4.9,2.5 1.5,0.9 2.8,1.9 3.3,2.7 0.2,0.4 0.3,0.7 0.2,1 -0.1,0.3 -0.3,0.8 -0.9,1.3 0,-0 -0.6,0.2 -1.5,0.1 -0.9,-0.1 -2.1,-0.3 -3.3,-0.6 -1.2,-0.3 -2.4,-0.6 -3.3,-0.8 -1,-0.3 -1.7,-0.5 -2.2,-0.5 -3.3,-0.3 -6.7,1.3 -9.9,2.7 -3.2,1.4 -6.1,2.5 -8.4,1.9 -2.3,-0.6 -3.7,-1.8 -5.2,-3.2 -1.5,-1.3 -3.1,-2.8 -5.5,-3.5 -0.8,-0.2 -2.5,-0.5 -5,-0.9 -2.4,-0.4 -5.4,-1 -8.3,-1.6 -2.9,-0.7 -5.6,-1.5 -7.6,-2.3 -1,-0.4 -1.7,-0.9 -2.2,-1.3 -0.3,-0.3 -0.4,-0.5 -0.5,-0.7 0.2,-0.1 0.6,-0.2 1.1,-0.3 1,-0.2 2.3,-0.3 3.6,-0.5 1.4,-0.2 2.7,-0.4 3.9,-0.8 0.6,-0.2 1.1,-0.4 1.5,-0.8 0.4,-0.3 0.8,-0.8 0.8,-1.4 0.1,-1 -0.4,-1.8 -1.1,-2.5 -0.6,-0.7 -1.4,-1.2 -2.1,-1.7 -0.7,-0.5 -1.3,-1 -1.6,-1.4 -0.1,-0.2 -0.2,-0.3 -0.2,-0.4 -0,-0.1 0,-0.1 0.1,-0.2 0,-0 0.1,-0 0.1,-0 0.3,-0 0.7,-0.1 1.2,-0.1 z"}],G["GR.IN.IC.COLLEGE/UNIVERSITY"]=[{type:"path",stroke:!1,d:"m 97.4,106.9 h -14.8 v 31.7 h 32 v -31.7 H 99.8 V 95.1 c 0,-0.6 6.5,-3 7.5,-3.4 1.3,-0.5 6.9,-3 7.9,-3 -0.3,-0.4 -14.7,-6.3 -15.7,-6.3 h -2.3 v 24.5 z m 23.3,-30.1 -9.6,0 0,-15.1 2,0 0,13.3 7.6,0 0,1.8 M 106,63.5 c 0.6,0.7 1.1,1.5 1.4,2.5 0.3,1 0.5,2.1 0.5,3.3 -1e-5,1.2 -0.2,2.4 -0.5,3.4 -0.3,1 -0.8,1.8 -1.4,2.5 -0.6,0.7 -1.4,1.2 -2.2,1.5 -0.8,0.3 -1.8,0.5 -2.9,0.5 -1.1,0 -2,-0.2 -2.9,-0.5 -0.9,-0.4 -1.6,-0.9 -2.2,-1.5 -0.6,-0.7 -1.1,-1.5 -1.4,-2.5 -0.3,-1 -0.5,-2.1 -0.5,-3.3 -10e-7,-1.2 0.2,-2.3 0.5,-3.3 0.3,-1 0.8,-1.8 1.4,-2.5 0.6,-0.7 1.3,-1.2 2.2,-1.5 0.9,-0.4 1.9,-0.5 2.9,-0.5 1.1,1.5e-5 2.1,0.2 2.9,0.5 0.9,0.4 1.6,0.9 2.2,1.5 m -0.2,5.8 c -2e-5,-2 -0.4,-3.5 -1.3,-4.5 -0.9,-1.1 -2.1,-1.6 -3.6,-1.6 -1.5,1.4e-5 -2.7,0.5 -3.6,1.6 -0.9,1.1 -1.3,2.6 -1.3,4.5 -3e-6,2 0.4,3.5 1.3,4.6 0.9,1 2.1,1.6 3.6,1.6 1.5,2e-6 2.7,-0.5 3.6,-1.6 0.9,-1.1 1.3,-2.6 1.3,-4.6 m -14,6.5 c -0.4,0.2 -0.7,0.3 -1,0.5 -0.3,0.1 -0.7,0.3 -1.2,0.4 -0.4,0.1 -0.9,0.2 -1.4,0.3 -0.5,0.1 -1,0.1 -1.6,0.1 -1.1,0 -2.1,-0.2 -3,-0.5 -0.9,-0.3 -1.7,-0.8 -2.3,-1.5 -0.7,-0.6 -1.2,-1.5 -1.5,-2.4 -0.4,-1 -0.5,-2.1 -0.5,-3.5 -10e-7,-1.2 0.2,-2.4 0.5,-3.3 0.4,-1 0.9,-1.8 1.5,-2.5 0.6,-0.7 1.4,-1.2 2.3,-1.5 0.9,-0.3 1.9,-0.5 3,-0.5 0.8,1.5e-5 1.6,0.1 2.4,0.3 0.8,0.2 1.7,0.5 2.7,1 l 0,2.4 -0.2,0 c -0.8,-0.7 -1.7,-1.2 -2.5,-1.5 -0.8,-0.3 -1.7,-0.5 -2.6,-0.5 -0.8,1.4e-5 -1.5,0.1 -2.1,0.4 -0.6,0.2 -1.2,0.6 -1.6,1.1 -0.5,0.5 -0.8,1.2 -1.1,1.9 -0.3,0.8 -0.4,1.7 -0.4,2.7 -3e-6,1.1 0.1,2 0.4,2.7 0.3,0.8 0.7,1.4 1.1,1.9 0.5,0.5 1,0.9 1.7,1.1 0.6,0.2 1.3,0.4 2,0.4 1,2e-6 1.9,-0.2 2.7,-0.5 0.8,-0.3 1.6,-0.8 2.4,-1.5 l 0.1,0 0,2.4"}],G["GR.IN.IC.SCHOOL"]=[{type:"path",stroke:!1,d:"M 98.4,96.4 H 83.7 v 31.7 h 32 V 96.4 H 100.9 V 84.6 c 0,-0.6 6.5,-3 7.5,-3.4 1.3,-0.5 6.9,-3 7.9,-3 -0.3,-0.4 -14.7,-6.3 -15.7,-6.3 H 98.4 V 96.4 z"}],G["GR.IN.IC.REST STOP"]=[{type:"path",stroke:!1,d:"m 108.4,89.6 v -0.4 l 0.6,-0.6 -0.4,1.4 -3.8,13.4 -0.2,0.8 -0.4,0.6 0,0.9 -2,6.7 7.2,0 v 19.7 h 5.2 v -19.7 h 2.7 v 19.7 h 5.2 v -19.7 h 7.1 l -1.3,-5.3 -0.2,-0.8 -4.8,-16.4 -0.5,-1.4 0.6,0.7 0.1,0.4 c 2.1,2.4 5.4,14.2 8.6,14.2 h 0.4 c 1.2,0 2.1,-1.1 2.1,-2.3 v -0.6 c 0,-0.5 -4.8,-10 -5.3,-11.6 -0.7,-2 -1.7,-4.2 -2.6,-6 -1,-2.1 -1.2,-3.8 -4.6,-3.8 h -12.4 c -3.4,0 -3.6,1.8 -4.7,3.9 -0.9,1.7 -1.9,4 -2.5,5.9 -0.6,1.6 -5.2,11.1 -5.2,11.6 v 0.6 c 0,1.3 0.6,2.3 1.9,2.3 h 0.8 c 2.4,0 6.4,-12.2 8.2,-14.2 z m 0.2,0.4 0.4,-1.5 -0.6,0.6 0,0.4 z m 15.1,-0.4 -0.1,-0.4 -0.6,-0.6 0.5,1.4 z M 69.6,88.8 h 2.3 v 43.6 h 6.1 v -25.6 h 2.7 v 25.6 h 5.9 v -43.6 h 2.3 v 16.4 h 4.6 V 86.3 l -0.3,-2.3 h -0.4 c 0,-2.3 -1.7,-4.4 -4,-4.4 H 69.6 c -3,0 -4.4,3.4 -4.4,6.5 v 19.1 h 4.4 V 88.8 z M 110.7,72.8 c 0,2.7 2.4,5.4 5,5.4 h 0.2 c 1.6,0 2.8,-0.6 3.6,-1.4 0.5,-0.4 1.8,-2.4 1.8,-3 v -1.6 c 0,-2.4 -2.8,-4.6 -5.4,-4.6 -3,-0 -5.2,2.4 -5.2,5.2 z m -36.7,1.1 c 0,2 2.8,4.4 5,4.4 h 0.2 c 4.2,0 4.3,-3.4 5.2,-3.8 V 71.6 c 0,-1.8 -2.8,-4 -5.2,-4 -2.3,0 -5.2,2.2 -5.2,4 v 2.3 z"}],G["GR.IN.IC.CONTROL VALVE"]=[{type:"path",stroke:!1,d:"m 114,114.5 h 15.7 v 4 h 9.1 v -23.6 h -9.1 V 98.8 H 114.4 c -0.4,0 -2.6,-2.6 -2.6,-3.4 v -5.6 h -9.9 v -8.2 h 12.3 v -3.6 h -28.2 v 3.6 h 12.1 v 8.3 H 89.2 v 6.6 l -0.2,-0.2 -1.8,2.4 -17.2,0.1 V 95 H 61.2 v 23.6 h 8.9 v -4 H 87 c 0.4,0 2,2.4 2.4,2.8 0.5,0.6 2.2,1.9 2.9,2.4 1.9,1.2 4.7,2.4 7.8,2.4 h 0.6 c 3.5,0 5.8,-1 8.1,-2.4 1.4,-0.8 4.8,-3.8 5.2,-5.3 z"}],G["GR.IN.IC.DAM"]=[{type:"path",stroke:!1,d:"m 68.3,89.1 c 2.3,0 3.2,-1.7 4.6,-2.6 1.1,0.8 2.2,2.6 4.4,2.6 h 0.2 c 2.6,0 3.3,-1.7 4.7,-2.6 1.4,0.9 2.2,2.6 4.7,2.6 2.4,0 3.3,-1.8 4.6,-2.6 0.6,0.4 1.1,1.1 1.9,1.6 0.4,0.2 2.2,0.9 2.2,1.3 v 6.8 C 94.1,95.8 91.8,93.8 91.5,92.6 h -0.3 c -0.3,1.1 -3,3.6 -4.5,3.6 -1.5,0 -4.1,-2.6 -4.4,-3.8 -1,0.6 -2.6,3.8 -4.6,3.8 h -0.4 c -1.2,0 -4,-2.7 -4.2,-3.7 -0.8,0.2 -2.6,3.7 -4.7,3.7 h -0.3 c -1.1,0 -1.7,-0.7 -2.4,-1.2 l -1,1.2 c 1,0.7 1.6,1.8 3.2,1.8 h 0.4 c 2.3,0 3.1,-1.8 4.6,-2.8 0.7,1.1 2.8,2.8 4.7,2.8 2.3,0 3.3,-2 4.6,-2.8 1.2,0.8 2.6,2.8 4.7,2.8 2.1,0 3.4,-2.1 4.7,-2.8 0.7,1 2.6,2.4 4,2.7 v 7 c -1.4,-0.1 -3.4,-2.4 -4,-3.5 -1.1,0.7 -2.5,3.6 -4.7,3.6 h -0.1 c -2.3,0 -4.1,-3.5 -4.7,-3.7 -0.3,1 -3,3.7 -4.1,3.7 h -0.4 c -2.2,0 -3.6,-2.9 -4.7,-3.7 -0.6,1 -2.8,3.7 -4.1,3.7 H 67.7 c -0.7,0 -1.7,-1 -2.2,-1.3 l -0.9,1.5 c 1.1,0.7 1.7,1.6 3.6,1.6 2.7,0 3.1,-1.8 4.7,-2.6 1.4,0.9 2,2.6 4.7,2.6 2.2,0 3.4,-1.8 4.6,-2.6 1.4,1 2.5,2.6 4.8,2.6 1.8,0 3.4,-2 4.4,-2.6 0.9,0.5 1,1 2,1.6 0.4,0.3 2.2,0.7 2.2,1.2 v 6.8 c -1.4,-0.3 -3.6,-2.2 -4,-3.5 -1.1,0.7 -2.5,3.8 -4.8,3.8 -1.4,0 -4.1,-2.6 -4.4,-3.8 -1.2,0.8 -2.6,3.8 -4.8,3.8 -2,0 -3.7,-3.2 -4.7,-3.8 -0.3,1 -3,3.8 -4.3,3.8 h -0.6 c -0.8,0 -1.8,-1 -2.4,-1.3 l -0.9,1.3 c 1.1,0.7 1.8,1.8 3.6,1.8 2.2,0 3.3,-1.8 4.7,-2.8 1.2,0.8 2.6,2.9 4.7,2.8 2.3,-0.1 3.3,-1.9 4.6,-2.8 1.2,0.8 2.7,2.8 4.7,2.8 1.9,0 3.4,-2 4.6,-2.8 1.6,1 1.8,2 4.1,2.5 v 5 h 17 l -1.4,-5.2 c 0.8,0.2 1,0.6 2.2,0.6 2,0 3.3,-1.9 4.6,-2.8 1.3,0.9 2.4,2.8 4.7,2.8 1.6,0 3.8,-1.8 4.4,-2.8 1.3,0.3 2.5,2.8 5.1,2.8 1.2,0 2.6,-1.4 3.4,-1.8 l -1,-1.3 c -0.7,0.4 -1.5,1.3 -2.6,1.3 -2.1,0 -3.7,-3.1 -4.7,-3.8 -0.7,1.4 -2.7,3.8 -4.7,3.8 -1.3,0 -4.3,-2.6 -4.4,-3.8 -1,0.7 -2.6,3.8 -4.7,3.8 h -0.2 c -1.1,0 -2.2,-0.9 -2.7,-1.5 -0.4,-0.4 -0.8,-2.5 -1.1,-3.2 -0.4,-1 -1.8,-5.6 -1.8,-6.6 l -0.3,-0.4 0,-0.6 -0.3,-0.4 v -0.6 l -0.3,-0.4 -5.3,-18.6 0.2,-0 -0.3,-0.4 0,-0.6 c -0.2,-0.3 -0.3,-0.3 -0.3,-0.6 v -0.4 h -5.6 v 7.8 c -1.4,-0.7 -1.2,-0.5 -2.4,-1.6 -0.1,-0.1 -1,-0.9 -1,-1 -0.4,-0.5 -0.1,-0.9 -0.8,-1.1 -0.1,1.2 -3.1,3.8 -4.3,3.8 h -0.2 c -2.5,0 -4.2,-3.6 -4.8,-3.8 -0.3,1.1 -3,3.8 -4.2,3.8 h -0.4 c -1.2,0 -4.2,-2.7 -4.2,-3.8 -0.5,0.1 -2.8,3.8 -4.4,3.8 H 67.7 c -0.7,0 -1.7,-1 -2.2,-1.3 l -0.9,1.3 c 1,0.7 1.6,1.6 3.4,1.6 h 0.3 v 0 z"}],G["GR.IN.IC.DISCHARGE OUTFALL"]=[{type:"path",stroke:!1,d:"m 63.2,111.4 v 13.4 h 73.6 V 111.7 l -3.1,0.5 -1.1,-0.1 c -2.2,0 -3.6,-0.7 -4.9,-1.6 -0.6,-0.4 -1.1,-1.1 -1.5,-1.8 -0.4,-0.6 -0.2,-2.1 -1,-2.1 h -0.4 c -0.8,0 -0.7,1.6 -1.2,2.2 -0.4,0.6 -0.9,1.2 -1.6,1.7 -1.3,1 -3,1.6 -5.1,1.6 h -0.9 c -3.2,0 -6.8,-2.1 -6.8,-5.1 -0.3,-0.2 -0.4,-0.4 -0.8,-0.4 h -0.3 c -0.7,0 -0.8,1.5 -1.1,2.1 -0.4,0.6 -1,1.4 -1.5,1.8 -1.2,1 -2.7,1.6 -4.8,1.6 h -0.9 c -3.5,0 -7.3,-2.1 -7.3,-5.4 -0.4,-0.1 -0.4,-0.2 -0.8,-0.2 h -0.3 c -0.6,0 -0.6,1.5 -1.1,2.2 -0.5,0.8 -0.7,1.1 -1.5,1.7 -1.3,1 -2.7,1.6 -4.8,1.6 H 82.9 c -3.5,0 -6.7,-2.2 -7,-5.4 -0.3,-0.1 -0.4,-0.2 -0.8,-0.2 h -0.1 c -0.7,0 -0.8,1.5 -1.2,2.2 -0.4,0.6 -0.9,1.2 -1.6,1.7 -1.4,1 -2.7,1.6 -5,1.6 h -1 c -1.2,0 -2.2,-0.4 -3,-0.8 l 0,0 z m 0,-21.6 19.5,0 0,1.2 2.7,0 0,-15.8 -2.7,0 0,1.2 -19.5,0 z M 89.7,80.9 v 0.1 c 8.1,0 16.2,1.2 20.6,4.9 2.8,2.4 3.1,4.5 3.1,9.6 0,4.1 0.5,8.3 4.5,8.3 h 0.8 c 1.7,0 2.8,-2.6 2.8,-4.3 v -0.9 c 0,-5.1 -3.3,-10.7 -5.9,-13.3 -1.6,-1.6 -3.6,-3 -6.1,-3.6 -2.2,-0.5 -6,-1.1 -8.6,-1.1 l -1.8,-0.1 -9.4,0.4 z"}],G["GR.IN.IC.GROUND WATER WELL"]=[{type:"path",stroke:!1,d:"M86,64L86,70L75,110L81,110L92,70L99,70L99,130L86,130L86,140L120,140L120,130L110,130L110,89L120,89L120,93L130,93L130,87C130,82.631 125.551,83 125.551,83L110,83L110,70L113.774,70L113.774,64L86,64Z"}],G["GR.IN.IC.TELECOMMUNICATIONS INFRASTRUCTURE"]=[{type:"path",stroke:!1,d:"m 109.7,116.6 4.1,13.4 -0.2,0.1 -12.2,-8.4 8.3,-5.2 z m -19.7,0 8,5.1 -12.1,8.4 4.1,-13.6 z m 9.8,-9.8 8.8,8.2 c -1.7,0.5 -8.1,5.6 -8.8,5.6 -0.2,0 -8.2,-5.4 -8.6,-5.8 l 8.5,-8.1 z m 5.3,-4.8 3.1,9.8 -6.9,-6.4 3.7,-3.4 z m -10.5,0.1 3.8,3.3 -6.9,6.4 3.1,-9.7 z m 2.1,-1 6.4,-0 -3.2,3.2 -3.2,-3.2 z M 99.2,84.8 C 99.1,85.4 99,85.5 99,86.1 v 2 h -3 c -0.5,0 -0.8,0.3 -0.8,0.8 0,0.5 0.1,0.5 0.2,1 0.4,0.1 0.4,0.2 1,0.2 h 2.6 v 2.8 h -4.5 c -0.6,0 -1.2,0.2 -1.2,0.8 0,0.5 0.3,0.8 0.8,0.8 h 4.9 v 4.9 h -4.5 c -0.5,0 -0.5,0.1 -0.9,0.2 l -2.5,7.9 -1,3.2 -4.1,13.3 -1.1,3.1 c 0,2 -1.4,3.5 -1.4,5.5 0,0.4 0.1,0.2 0.2,0.8 h 0.5 c 0.6,0 15.1,-10.3 15.4,-10.3 0.6,0 14.2,9.4 15.8,10.5 0.4,-0.2 1,-0.4 1,-1 v -0.6 c 0,-0 -1.5,-4.4 -1.7,-5 -0.4,-1.1 -1.4,-4.3 -1.5,-5.2 l -1,-3.2 -4.1,-13.2 -0.9,-3.4 c -1,-0.4 -0.3,-2.6 -1.6,-2.6 h -4.8 v -5 h 4.8 c 0.5,0 0.8,-0.3 0.8,-0.8 0,-0.5 -0.3,-0.8 -0.8,-0.8 H 100.8 V 90.1 h 2.4 c 0.7,0 1.4,-0.4 1.4,-1 v -0.2 c 0,-0.5 -0.3,-0.8 -0.8,-0.8 h -2.9 v -2.6 c 0,-0.4 -0.6,-1 -0.8,-1 -0,-0 -0.7,0.1 -0.8,0.2 z m 6.7,-15.7 c 7,1.6 10.9,4.6 15.1,8.9 3,3 7.3,11 7.3,16.9 v 4 c 0,2.1 -1.5,7.7 -2.2,9 -0.7,1.1 -1.2,2.4 -1.9,3.6 -0.3,0.4 -2.4,3.3 -2.4,3.4 0,0.7 1,1.6 1.2,2.6 1.7,-0.4 4.8,-6.3 5.7,-8.2 1.2,-2.5 2.7,-7.8 2.7,-11.4 V 94.3 c 0,-0.1 -0.9,-4.9 -1,-5.5 -0.3,-0.9 -1.4,-3.7 -1.8,-4.8 -0.9,-2.2 -3.7,-6.4 -5.2,-8 -3.6,-3.6 -10.6,-9.2 -16.9,-9.7 l -0.4,2.8 z m -1.6,10.7 c 6,0.5 13.3,9.2 13.3,16.1 v 2.2 c 0,1.5 -1.4,5.5 -1.4,5.5 0,0.2 1.2,2.9 1.4,3.2 l 0.2,0.1 1.6,-3.4 0.1,-0.6 0.7,-5.9 0.2,-0.4 -1,-5.9 c -0.7,-0.3 -0.6,-1.4 -1.1,-2.2 -0.4,-0.8 -0.8,-1.6 -1.3,-2.3 -1.1,-1.6 -1.8,-2.6 -3.2,-3.9 -2.2,-2.2 -5.8,-4.2 -9.2,-5 l -0.3,2.8 z M 68.7,95.2 v 5.1 c 0,4.2 5.4,16.3 7.9,17 0.1,-0.5 1,-2.2 1,-2.6 0,0 -2.1,-2.9 -2.3,-3.4 -0.7,-1.3 -1.3,-2.4 -1.9,-3.8 -1,-2.6 -1.8,-6 -1.8,-9.6 v -2.4 c 0,-8 3.3,-12.9 6.9,-17.5 1.4,-1.8 4.7,-4.4 6.7,-5.6 1.4,-0.8 2.5,-1.4 4.1,-2.1 0.5,-0.2 4.5,-1.3 4.5,-1.6 l -0.2,-2.6 c -2.4,0.1 -8,2.6 -9.6,3.7 -3.2,1.9 -4.8,3.6 -7.3,6.1 -3.6,3.6 -7.8,12 -7.8,19.1 l 0,0 z m 10.7,0 v 2.9 c 0,1.9 0.2,3.1 0.8,4.5 0.2,0.4 1.5,4 1.5,4 l 0.4,-0 1.5,-2.9 c -0.9,-1.2 -1.4,-4 -1.4,-6.2 v -1.8 c 0,-3.7 2.3,-8.3 4.2,-10.3 1.8,-1.8 5.9,-5.5 9.1,-5.6 L 95,77.1 C 88,77.6 79.4,87.3 79.4,95.2 z"}],G["GR.IN.IC.TELECOMMUNICATIONS TOWER"]=[{type:"path",stroke:!1,d:"m 102.5,119.2 12,-8 2.8,9.2 1.3,4 2.1,6.9 -18.2,-12 z m -23,12 3.4,-11.7 2,-5.9 0.8,-2.6 11.9,8.2 -18,12 z m 20.4,-34.6 13,12.2 c -1.5,1 -12.3,8.5 -13.1,8.5 -0.1,0 -11.6,-7.7 -12.7,-8.5 L 99.9,96.6 z m 7.7,-7.1 0.2,0.2 1.8,5.7 2.5,8.7 -10.1,-9.3 5.6,-5.2 0,0 z m -15.5,0.6 v -0.6 l 0.4,0.2 5.4,5 -10,9.4 2.6,-9 1.6,-5 z m 2.9,-1.7 9.8,-0 -5,4.4 -4.8,-4.4 z m 3.6,-23.1 v 3.6 h -4.4 c -0.5,0 -1,0.6 -1,1 v 0.6 c 0,0.7 0.8,1 1.5,1 h 4 v 4.2 h -7.2 c -0.5,0 -1,0.6 -1,1 v 0.2 c 0,1 0.5,1.5 1.5,1.5 h 6.8 v 7 h -6.8 c -0.8,0 -1,0.3 -1.3,0.7 l -0.6,2 -4.9,15.6 -3,9.6 -3.1,9.4 -0.1,0.8 -2.9,8.7 -0.1,0.8 -0.5,2.2 c 1,0.2 0.5,0.6 1.3,0.6 h 0.2 c 0.8,0 20.1,-13.7 23.1,-15.2 2.5,1.7 22.4,15.2 23.5,15.2 0.6,0 1,-0.7 1,-1.3 0,-0.1 -1.4,-4 -1.5,-4.2 l -0.1,-0.8 -3.1,-9.7 -2.9,-9.3 -4.7,-15.7 c -0.6,-0.8 -1.4,-3.8 -1.8,-5 -0.6,-1.8 -0.5,-4.3 -2.5,-4.3 h -6.8 v -7 h 7.2 c 0.5,0 1,-0.6 1,-1 v -0.4 c 0,-0.6 -0.2,-1.3 -0.8,-1.3 h -7.4 v -4.2 h 4 c 0.7,0 1.5,-0.4 1.5,-1 v -0.6 c 0,-0.7 -0.8,-1 -1.5,-1 h -4 v -4 c 0,-0.6 -0.7,-1 -1.3,-1 -0.8,-0 -1.3,0.6 -1.3,1.4 l 0,0 z m -6.6,24.8 0.4,-0.4 -0.4,-0.2 z"}],G["GR.IN.IC.AIR TRAFFIC CONTROL FACILITY"]=e("ATC"),G["GR.IN.IC.PROPANE FACILITY"]=[{type:"path",stroke:!1,d:"m 98.7,73.1 v 0.2 c 0,1 0.5,1.5 1.5,1.5 0.5,0 1.1,-0.6 1.1,-1.1 0,-0.8 -0.2,-0.8 -0.2,-1.5 -0.5,-0.1 -0.5,-0.2 -1.1,-0.2 h -0.2 c -0.5,0 -1.1,0.6 -1.1,1.1 z m -12.6,58.5 h 28.4 v 3.3 h -28.4 v -3.3 z M 75.8,119 h 48.5 v 3.3 c 0,2 -8.8,7.8 -9.8,7.8 H 85.8 c -1,0 -10,-5.8 -10,-7.6 v -3.5 l 0,0 z m 0,-27.5 c 0,-1.1 7.2,-5.8 8.5,-6.6 2.6,-1.5 7.4,-3.7 11.4,-3.7 h 8.5 c 4.1,0 9.1,2 11.6,3.7 1.3,0.9 8.5,5.4 8.5,6.6 v 4.2 H 75.8 V 91.5 l 0,0 z M 98.2,77.1 c 0.7,0 0.8,0.2 1.5,0.2 h 0.4 c 0.8,0 0.8,-0.2 1.5,-0.2 v 1.8 l 1.2,0.8 -5.5,0 c 0.3,-0.5 0.9,-0.8 0.9,-1.3 l -0,-1.3 0,0 z m -1.1,-4 c 0,-1.4 1.4,-2.4 2.8,-2.4 1.3,0 2.8,0.9 2.8,2 v 1.1 c 0,1.4 -1.6,2.4 -3,2.4 -1,0 -2.6,-1.2 -2.6,-2.4 v -0.7 h -0 z m 12.2,-8.1 h 3.5 v 3.5 h -1.8 v 6.8 c 0.7,0 2.4,0.6 2.4,1.3 v 3.7 H 109.4 V 65.1 z m -22.7,0 h 4.2 V 80.3 H 85.8 v -4.1 c 0.8,-0.2 3.1,-0.8 3.1,-1.5 v -6.1 h -2.2 v -3.5 z m 5.7,0 h 15.5 v 15.3 c -1.6,-0.4 -4.8,-0.9 -4.8,-2.6 v -0.9 c 0,-1.5 0.9,-2.1 0.9,-2.6 v -1.1 c 0,-3.2 -3,-3.2 -3.3,-4.4 h 4.2 v -1.5 h -9.6 v 1.5 h 4.2 v 0.6 c -1.9,0.1 -3.1,1.9 -3.1,4 v 0.6 c 0,1 0.9,2 0.9,2.4 v 1.3 c 0,1.4 -3.4,2.3 -4.8,2.6 V 65.1 l 0,0 z m -7.2,4.8 h 2.2 v 4 c 0,0.8 -2.1,1.2 -2.8,1.3 v 6.8 h 3 c -0.6,0.4 -2.7,1.2 -3.6,1.8 -1.2,0.7 -2.2,1.4 -3.4,2.1 -0.9,0.6 -6.1,4.7 -6.3,4.8 v 31.6 c 0,1.9 3.2,4.4 4.5,5.3 1,0.6 5.8,3.3 5.8,4.1 v 4.8 h 31.2 v -4.8 c 0,-1.6 10,-4.6 10,-10 V 91.1 c 0,-0.9 -5,-4.4 -6,-5.1 -1.2,-0.8 -2.1,-1.4 -3.3,-2.1 -0.9,-0.6 -3.2,-1.4 -3.7,-1.9 h 2.4 v -6.8 c -0.7,-0.2 -2.6,-0.5 -2.6,-1.3 v -4 h 2 V 63.5 H 85.2 v 6.3 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 114.4,134.9 0,-3.3 -28.4,0 0,3.3 z M 75.8,122.5 c 0,1.9 9,7.6 10,7.6 h 28.6 c 1,0 9.8,-5.9 9.8,-7.8 v -3.3 H 75.8 v 3.5 l 0,0 z m 0,-31 v 4.2 h 48.5 V 91.5 c 0,-1.2 -7.2,-5.7 -8.5,-6.6 -2.5,-1.7 -7.5,-3.7 -11.6,-3.7 h -8.5 c -3.9,0 -8.8,2.2 -11.4,3.7 -1.3,0.8 -8.5,5.4 -8.5,6.6 l 0,0 z M 109.4,80.3 h 4.2 v -3.7 c 0,-0.8 -1.7,-1.2 -2.4,-1.3 v -6.8 h 1.8 V 65.1 H 109.4 V 80.3 z M 86.7,68.6 h 2.2 v 6.1 c 0,0.8 -2.3,1.4 -3,1.5 v 4.2 h 5 V 65.1 h -4.2 v 3.5 z m 11.6,9.8 c 0,0.6 -0.6,0.8 -0.9,1.3 l 5.5,-0.1 -1.1,-0.8 V 77.1 c -0.7,0 -0.8,0.2 -1.5,0.2 H 99.8 c -0.8,0 -0.8,-0.2 -1.5,-0.2 l -0,1.3 0,0 z m 2.8,-6.1 c 0.1,0.7 0.2,0.8 0.2,1.6 0,0.5 -0.6,1.1 -1.1,1.1 -1,0 -1.5,-0.5 -1.5,-1.5 v -0.2 c 0,-0.5 0.6,-1.1 1.1,-1.1 h 0.2 c 0.6,0 0.6,0.1 1.1,0.2 z m -3.9,0.9 v 0.7 c 0,1.2 1.6,2.4 2.6,2.4 1.4,0 3,-1 3,-2.4 V 72.7 c 0,-1 -1.6,-2 -2.8,-2 -1.4,0 -2.8,1 -2.8,2.4 z"}],G["GR.IN.IC.GOVERNMENT SITE INFRASTRUCTURE"]=[{type:"path",stroke:!1,d:"M 100,67.3 C 90.1122,72.1037 79.3336,77.3992 70,82 c -1.2,0.6 -3.8,1.3 -3.8,2.8 l -0.1,0 0,0.4 c 0,0.6 0.1,0.6 0.2,1.1 0.5,0.1 0.5,0.2 1.1,0.2 l 65,0 c 0.7,0 1.7,-0.6 1.7,-1.1 0,-2.2 -1.7,-2.4 -3.2,-3 C 119.391,76.7575 109.17,71.7941 100,67.3 Z m -0.1,3.4 c 0.2,0 24.5,12 25.9,13 l -51.6,0 0,-0.1 C 75,83 99.7,70.7 99.9,70.7 Z m 31.6,55.6 0,-3 -63.3,0 0,3 z m 2.3,6.4 0,-3 -67.7,0 0,3 z m -6.2,-40.7 2.4,0 0,-3.2 -7.9,0 0,3.2 2.1,0 -0.6,25.5 -1.5,0 0,3.8 7.9,0 0,-3.8 -1.5,0 z m -14.6,-3.2 -7.6,0 0,3.2 2.2,0 -0.9,25.4 -1.3,0 0,3.8 7.6,0 0,-3.8 -1.4,0 -0.7,-25.5 2.1,0 z m -20.8,3.1 2.3,0 0,-3.2 -7.8,0 0,3.2 2.3,0 -0.8,25.4 -1.5,0 0,3.8 7.8,0 0,-3.8 -1.7,0 z m -22.5,25.5 0,3.8 8,0 0,-3.8 -1.5,0 -0.8,-25.5 2.3,0 0,-3.2 -8,0 0,3.2 2.4,0 -0.9,25.5 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 74.1,83.6 h 51.6 C 124.3,82.7 100,70.7 99.8,70.7 99.6,70.7 74.9,83 74.1,83.6 l 0,0 z"}],G["GR.IN.IC.MILITARY INFRASTRUCTURE"]=[{type:"path",stroke:!1,d:"m 65.2,93.1 c 0,-0.5 15.6,-11.5 17.3,-12.8 1.5,-1.2 17.3,-12.6 17.4,-12.6 0.6,0 15.9,11.2 17.6,12.5 1.7,1.3 17.3,12.4 17.3,12.9 0,0 -6.1,18.6 -6.7,20.3 -1.2,3.4 -2.2,6.8 -3.4,10.3 -1,3 -2.7,7.2 -3.3,10 H 78.4 c -0.1,-1.7 -5.6,-18 -6.5,-20.4 -0.6,-1.4 -6.6,-20.1 -6.6,-20.1 z m 8.4,38.5 2,6.1 49,0 8.4,-26.4 6.6,-20.5 -39.7,-28.7 -39.6,28.8 13.3,40.6 0,0 z M 100,76.2 c 2.7,2.4 26.6,18.7 26.6,19.6 0,0.8 -4.1,12.7 -4.5,13.4 l -5.6,17.4 -32.5,0 c -0.9,0 -3,-7.4 -3.5,-8.7 -0.6,-1.8 -2.9,-7.8 -2.9,-9.4 L 74.3,98.9 73.5,95.5 100,76.2 z m 30.5,18 c -3.1,-2.1 -30,-22.2 -30.7,-22.2 -0.1,0 -13.8,10.1 -15.2,11.1 -2,1.4 -14.3,10.7 -15.2,10.9 v 0.7 c 0,1 2.9,7 2.9,9.3 l 8.7,26.3 37.7,0 5,-15.7 6.6,-20.4 z m -50.4,3.2 c 0.8,-0.2 8.6,-6.1 10,-7 1.2,-0.8 9.5,-7.1 10,-7.1 0,0 9,6.5 10,7.2 1.2,0.8 9.7,6.5 9.7,7.3 0,1.2 -0.4,2 -0.9,2.7 0,1.6 -2.6,8.7 -3.3,10.6 -0.5,1.4 -2.8,10.1 -3.7,10.1 H 88.1 c -0.7,0 -1.8,-4 -2,-4.8 -0.6,-1.7 -1.2,-3.3 -1.7,-5.1 -0.6,-2.1 -3.1,-8.7 -3.1,-10.3 l -0.3,0.1 -0.9,-3.7 z m -3.2,-0.7 8.8,27 28.2,-0 8.7,-27.2 c -3.2,-1.7 -21.7,-16.3 -22.9,-16.3 -0.3,0 -20.6,15 -22.9,16.6 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 77,96.8 c 2.3,-1.5 22.6,-16.6 22.9,-16.6 1.2,0 19.7,14.6 22.9,16.3 l -8.7,27.2 -28.3,0 -8.8,-27 z m -3.6,-1.3 0.9,3.4 3.4,9.7 c 0,1.5 2.3,7.6 2.9,9.4 0.4,1.3 2.5,8.7 3.5,8.7 l 32.5,-0 5.5,-17.4 c 0.4,-0.6 4.5,-12.6 4.5,-13.4 0,-1 -23.9,-17.2 -26.6,-19.6 L 73.5,95.5 z m 6.7,2 0.9,3.7 0.3,-0.1 c 0,1.6 2.4,8.2 3.1,10.3 0.5,1.8 1.1,3.4 1.7,5.1 0.2,0.8 1.3,4.8 2,4.8 h 23.8 c 1,0 3.3,-8.6 3.7,-10.1 0.6,-1.9 3.3,-9 3.3,-10.6 0.5,-0.7 1,-1.5 1,-2.7 0,-0.8 -8.5,-6.5 -9.7,-7.3 -1,-0.7 -9.9,-7.2 -10,-7.2 -0.5,0 -8.8,6.2 -10,7 -1.3,1 -9.2,6.8 -10,7.1 z m 43.8,17.1 -5,15.7 -37.7,-0 -8.7,-26.3 c 0,-2.3 -2.9,-8.3 -2.9,-9.3 v -0.7 c 1,-0.2 13.2,-9.5 15.2,-10.9 1.4,-1 15.1,-11.1 15.2,-11.1 0.7,0 27.6,20 30.7,22.2 l -6.6,20.4 z M 65.2,93.1 c 0,0 6,18.7 6.6,20.1 1,2.4 6.4,18.7 6.5,20.4 h 43.1 c 0.6,-2.8 2.3,-7 3.3,-10 1.2,-3.5 2.1,-6.8 3.4,-10.3 0.6,-1.7 6.7,-20.2 6.7,-20.3 0,-0.5 -15.6,-11.5 -17.3,-12.9 C 115.8,79 100.5,67.7 99.9,67.7 99.8,67.7 84.1,79.2 82.5,80.3 80.8,81.6 65.2,92.7 65.2,93.1 z"}],G["GR.IN.IC.POSTAL SERVICE INFRASTRUCTURE"]=[{type:"path",stroke:!1,d:"M 64.3,86.6 99.9,102.1 135.7,86.6 v 31.8 H 64.3 v -31.8 l 0,0 z m 62.5,1.9 c -3.1,1.2 -5.9,2.6 -9,3.9 -2.2,0.9 -17.1,7.7 -18,7.7 -0.5,0 -15.8,-7 -17.8,-7.8 -3,-1.2 -5.9,-2.8 -8.8,-3.9 -2.3,-0.9 -6.8,-3.4 -8.8,-3.8 v -3.2 h 71.5 v 3.2 c -2.1,0.4 -6.6,2.9 -9,3.9 z m -64.1,31.7 h 74.7 V 79.8 H 62.7 v 40.4 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 64.3,86.6 0,31.8 71.5,0 0,-31.8 -35.8,15.5 z m 0,-2 c 2,0.5 6.5,3 8.8,3.8 2.9,1.1 5.8,2.7 8.8,3.9 2,0.8 17.3,7.8 17.8,7.8 0.9,0 15.9,-6.8 18,-7.7 3.1,-1.3 5.9,-2.6 9,-3.9 2.4,-1 6.9,-3.4 9,-3.9 V 81.4 H 64.3 v 3.2 l 0,0 z"}],G["GR.IN.IC.POSTAL DISTRIBUTION CENTER"]=[{type:"path",stroke:!1,d:"M 64.3,94.6 99.9,110.1 135.7,94.6 V 126.4 H 64.3 l 4e-4,-31.8 0,0 z m 62.5,1.9 c -3.1,1.2 -5.9,2.6 -9,3.9 -2.2,0.9 -17.1,7.7 -18.1,7.7 -0.5,0 -15.7,-6.9 -17.8,-7.8 -3,-1.2 -5.9,-2.8 -8.8,-3.9 -2.3,-0.9 -6.8,-3.4 -8.8,-3.9 v -3.2 h 71.5 v 3.2 c -2.1,0.5 -6.6,2.9 -9,3.9 z M 62.7,128.2 h 74.7 V 87.8 H 62.7 v 40.5 z m 66.1,-54.4 -5.4,0 0,13.3 -2,0 0,-13.3 -5.4,0 0,-1.8 12.8,0 0,1.8 m -14,9 c -1e-5,0.6 -0.1,1.2 -0.4,1.7 -0.3,0.6 -0.7,1.1 -1.1,1.5 -0.5,0.4 -1.2,0.8 -1.9,1 -0.7,0.2 -1.6,0.4 -2.6,0.4 -1.1,0 -2.1,-0.1 -2.9,-0.3 -0.9,-0.2 -1.8,-0.5 -2.7,-0.9 l 0,-2.5 0.1,0 c 0.8,0.6 1.6,1.1 2.7,1.5 1,0.3 1.9,0.5 2.8,0.5 1.2,10e-7 2.2,-0.2 2.9,-0.7 0.7,-0.5 1,-1.1 1,-1.9 -1e-5,-0.7 -0.2,-1.2 -0.5,-1.5 -0.3,-0.3 -0.8,-0.6 -1.5,-0.7 -0.5,-0.1 -1.1,-0.2 -1.7,-0.3 -0.6,-0.1 -1.2,-0.2 -1.9,-0.3 -1.3,-0.3 -2.3,-0.8 -3,-1.5 -0.6,-0.7 -1,-1.6 -1,-2.7 0,-1.3 0.5,-2.3 1.6,-3.1 1.1,-0.8 2.4,-1.2 4.1,-1.2 1.1,1.6e-5 2,0.1 2.9,0.3 0.9,0.2 1.7,0.5 2.4,0.8 l 0,2.4 -0.1,0 c -0.6,-0.5 -1.3,-0.9 -2.3,-1.2 -0.9,-0.3 -1.9,-0.5 -2.9,-0.5 -1.1,1.3e-5 -1.9,0.2 -2.6,0.7 -0.7,0.4 -1,1 -1,1.7 -1e-5,0.6 0.2,1.1 0.5,1.5 0.3,0.4 0.9,0.6 1.7,0.8 0.4,0.1 1,0.2 1.8,0.3 0.8,0.1 1.5,0.3 2,0.4 1.1,0.3 2,0.7 2.5,1.4 0.6,0.6 0.9,1.4 0.9,2.5 m -14.4,4.3 -6,0 0,-1.5 2,0 0,-12 -2,0 0,-1.5 6,0 0,1.5 -2,0 0,12 2,0 0,1.5 m -8.6,-7.5 c -1.5e-5,1.4 -0.3,2.6 -0.9,3.7 -0.6,1.1 -1.4,2 -2.4,2.6 -0.7,0.4 -1.5,0.7 -2.3,0.9 -0.8,0.2 -2,0.3 -3.4,0.3 l -3.8,0 0,-15.1 3.8,0 c 1.5,1.5e-5 2.6,0.1 3.5,0.3 0.9,0.2 1.6,0.5 2.2,0.9 1,0.6 1.8,1.5 2.4,2.6 0.6,1.1 0.9,2.3 0.9,3.8 m -2.1,-0 c -1.2e-5,-1.2 -0.2,-2.2 -0.6,-3 -0.4,-0.8 -1,-1.5 -1.8,-1.9 -0.6,-0.3 -1.2,-0.6 -1.9,-0.7 -0.7,-0.1 -1.5,-0.2 -2.4,-0.2 l -1.9,0 0,11.7 1.9,0 c 1,2e-6 1.8,-0.1 2.5,-0.2 0.7,-0.1 1.4,-0.4 2,-0.8 0.8,-0.5 1.3,-1.1 1.7,-1.9 0.4,-0.8 0.6,-1.8 0.6,-2.9"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 126.8,96.5 c -3.1,1.2 -5.9,2.6 -9,3.9 -2.2,0.9 -17.1,7.7 -18.1,7.7 -0.5,0 -15.7,-6.9 -17.8,-7.8 -3,-1.2 -5.9,-2.8 -8.8,-3.9 -2.3,-0.9 -6.8,-3.4 -8.8,-3.9 v -3.2 h 71.5 v 3.2 c -2.1,0.5 -6.6,2.9 -9,3.9 z m -62.5,-1.9 35.6,15.5 35.8,-15.5 V 126.4 H 64.3 l 4e-4,-31.8 0,0 z"}],G["GR.IN.IC.POST OFFICE"]=[{type:"path",stroke:!1,d:"m 74.7,92.8 24.9,10.8 L 124.7,92.8 V 115.1 H 74.7 V 92.8 l 0,0 z m 43.7,1.3 c -2.2,0.9 -4.1,1.8 -6.3,2.7 -1.5,0.6 -12,5.4 -12.6,5.4 -0.4,0 -11,-4.9 -12.5,-5.4 -2.1,-0.8 -4.1,-1.9 -6.2,-2.7 -1.6,-0.6 -4.8,-2.4 -6.2,-2.7 v -2.2 h 50 v 2.3 c -1.5,0.3 -4.6,2 -6.3,2.7 z M 73.6,116.4 H 125.8 V 88.1 H 73.6 V 116.4 z M 99.8,64.3 c 0.2,0 35.5,19.8 37.1,21.2 h -4.8 v 38.6 h -63.9 v -38.6 h -4.9 c 1.6,-1.4 6.9,-4.1 9.1,-5.3 3.1,-1.8 6,-3.4 9.1,-5.3 1.6,-1 18.3,-10.6 18.4,-10.6 z m -43.3,23.1 9.9,-0.2 v 38.4 h 67.4 v -38.4 l 9.9,0.2 c -0.5,-0.6 -43.6,-25 -43.9,-25 -0,0 -19.5,11.4 -21.7,12.5 -3.5,1.8 -7.4,4.2 -10.9,6.2 -2.7,1.6 -8.8,4.6 -10.8,6.3 l 0,0 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"M 99.8,64.3 C 99.8,64.3 83.1,73.9 81.5,74.9 c -3,1.8 -6,3.5 -9.1,5.3 -2.2,1.2 -7.5,4 -9.1,5.3 l 4.9,0 0,38.6 63.9,0 0,-38.7 4.8,0 c -1.6,-1.4 -36.9,-21.2 -37.1,-21.2 z M 73.6,88.1 l 52.3,0 0,28.3 -52.3,0 0,-28.3 z m 44.9,6.1 c -2.2,0.9 -4.1,1.8 -6.3,2.7 -1.5,0.6 -12,5.4 -12.6,5.4 -0.4,0 -11,-4.9 -12.5,-5.4 -2.1,-0.8 -4.1,-1.9 -6.2,-2.7 -1.6,-0.6 -4.8,-2.4 -6.2,-2.7 v -2.2 h 50 v 2.3 c -1.5,0.3 -4.6,2 -6.3,2.7 z M 74.7,92.8 99.6,103.7 124.7,92.8 V 115.1 H 74.7 V 92.8 l 0,0 z"}],G["GR.IN.IC.ENCLOSED FACITLITY (PUBLIC VENUE)"]=[{type:"path",stroke:!1,d:"m 114.9,121.3 0,-1.2 -30.7,0 0,1.2 z m -31.9,-2.5 -10.4,-16.7 -1,0.4 10.6,16.6 z m 13,-13.8 h 7 c 0.6,0 4.4,-6 5,-6.8 H 91 c 0.6,0.9 4.4,6.8 5,6.8 z m 15.3,12 0,-1 -23.5,0 0,1 z m 2.4,-1.6 8.6,-13.6 -0.8,-0.4 -8.5,13.3 z M 76.8,101.9 c 0,0.3 3.7,5.9 4.2,6.7 0.4,0.6 4.2,6.7 4.3,6.7 0.4,0 0.5,-0.2 0.7,-0.5 l -8.5,-13.4 c -0.2,0.1 -0.7,0.2 -0.7,0.5 z m 31,10.8 0,-1 -16.5,0 0,1 z m -19.3,-1.2 0.7,-0.4 -6.7,-10.5 -0.7,0.4 z m 22.3,-0 6.4,-10.5 -0.8,-0.3 -6.6,10.5 z m -6.4,-3 0,-1 -9.7,0 0,1 z m 2.8,-1.8 c 0,0.6 0.3,0.6 0.7,0.6 l 4.2,-6.9 -0.6,-0.4 c -0.2,0.2 -4.3,6.6 -4.3,6.7 z m -20.3,-6.3 4.1,7 c 0.3,-0.1 0.8,-0.2 0.8,-0.5 0,-0.6 -3.7,-5.6 -4,-6.9 l -1,0.4 z m -19.7,18 0.3,-2.8 c 0.1,-3.9 2,-11.4 3,-14.6 1.6,-4.7 3.2,-8.3 5.6,-12 4.4,-6.5 12,-12.4 22.8,-12.4 h 1.1 c 9.6,0 17,4.8 21.3,10.2 1.2,1.5 2.3,2.8 3.2,4.6 0.5,0.9 1,1.6 1.4,2.6 0.4,0.9 0.7,1.9 1.1,2.7 0.8,1.4 3.6,10.3 3.6,12.1 v 0.6 h 0.3 v 1 l 1.2,10.8 -0.1,2.2 H 67 l 0.2,-5 0,0 z m -2.3,-4 -0.3,2.4 -0.4,5.6 v 3.8 h 70.9 v -1 c 0,-2 0.1,-6.4 -0.2,-8.1 -0.4,-2.4 -0.5,-5.2 -1,-7.5 -0.4,-2 -2.9,-12.7 -3.9,-13.1 0,-1.6 -3.5,-7.6 -4.3,-8.8 -1.8,-2.6 -3.8,-5 -6.2,-7 -4.9,-3.9 -10.5,-7 -19.3,-7 h -1 c -11.8,0 -19.6,5.9 -24.6,12.8 -1.4,1.9 -2.4,3.8 -3.5,5.9 -1.2,2.3 -1.7,4.2 -2.6,6.7 -1.2,3 -3.4,11.4 -3.5,15.3 l 0,0 z m 52.2,4.7 c 0.4,-1.3 4.2,-6.6 5.2,-8.3 0.6,-1 5.1,-7.9 5.1,-8.2 0,-0.3 -0.6,-0.4 -0.8,-0.5 l -10.6,16.6 1.1,0.4 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 84.2,120.1 h 30.7 v 1.2 H 84.2 v -1.2 z m 3.6,-4.2 h 23.5 v 1 H 87.8 v -1 z m 3.5,-4.2 h 16.5 v 1 H 91.4 v -1 z m 3.3,-4.2 h 9.7 v 1 h -9.7 v -1 z m 22.4,11.5 -1.1,-0.4 10.6,-16.6 c 0.3,0.1 0.8,0.2 0.8,0.5 0,0.3 -4.6,7.2 -5.1,8.2 -1,1.8 -4.9,7 -5.2,8.3 z m -45.4,-16.6 1,-0.4 10.4,16.7 -0.8,0.4 -10.6,-16.6 z m 13.7,12.8 c -0.2,0 -4,-6 -4.3,-6.7 -0.5,-0.8 -4.2,-6.3 -4.2,-6.6 0,-0.3 0.4,-0.4 0.7,-0.5 l 8.5,13.3 c -0.2,0.3 -0.2,0.5 -0.7,0.5 z m 36.2,-13.8 0.8,0.4 -8.6,13.6 -0.8,-0.6 8.6,-13.4 z m -5.1,-0.6 0.8,0.3 -6.4,10.5 -1,-0.3 6.6,-10.5 z m -33.9,-0 6.7,10.5 -0.7,0.4 -6.7,-10.5 0.7,-0.4 z m 24.7,6 c 0,-0.1 4.1,-6.5 4.3,-6.7 l 0.6,0.4 -4.2,6.9 c -0.4,0 -0.7,-0.1 -0.7,-0.6 z m -19.4,-6.7 c 0.3,1.3 4,6.3 4,6.9 0,0.3 -0.6,0.4 -0.8,0.5 l -4.1,-7 1,-0.4 z m 8.2,4.9 c -0.6,0 -4.4,-6 -5,-6.8 h 17 c -0.6,0.8 -4.4,6.8 -5,6.8 h -7 z m -28.5,10.7 c 0,0.5 -0,2.8 -0.3,2.8 l -0.2,5 h 65.2 l 0.1,-2.2 -1.2,-10.8 v -1 h -0.3 v -0.6 c 0,-1.8 -2.8,-10.6 -3.6,-12.1 -0.4,-0.8 -0.7,-1.8 -1.1,-2.7 -0.5,-1 -1,-1.6 -1.5,-2.6 -0.9,-1.8 -2,-3.1 -3.2,-4.6 -4.2,-5.4 -11.6,-10.2 -21.3,-10.2 h -1 c -10.8,0 -18.5,5.8 -22.8,12.4 -2.5,3.8 -4.1,7.4 -5.7,12 -1.1,3.2 -3,10.7 -3,14.6 l 0,0 z"}],G["GR.IN.IC.OPEN FACILITY (OPEN VENUE)"]=[{type:"path",stroke:!1,d:"m 122.4,117.1 0,-1.5 -45.1,0 0,1.5 z M 74.5,114 75.6,113.4 59.8,88.8 58.8,89.4 z m 49.6,-0.6 c 0.2,0.1 1,0.5 1.3,0.5 0.2,0 14.4,-22.4 15.9,-24.6 l -1.5,-0.5 -15.7,24.6 z m -6.6,-2.6 0,-1.7 -35,0 0,1.7 z m 2.4,-3.2 c 0,0.2 1,0.8 1.1,0.9 l 12.8,-20 h 0.2 l -1.6,-0.8 c -1.3,2.4 -12.6,19.3 -12.6,20 z m -41.1,0.9 1.4,-0.8 -12.7,-20.1 -1.3,0.8 z m 33.3,-3.9 0,-1.6 -24.4,0 0,1.6 z m 3.4,-2.8 c 0,0.6 0.6,0.7 1.1,0.9 l 9.6,-15.4 -1.2,-0.6 c -0.6,2 -9.4,14.5 -9.4,15.2 z m -32.2,1 1.4,-0.6 -9.7,-15.5 -1.3,0.8 z m 23.4,-4.5 0,-1.7 -13.8,0 0,1.7 z m 5.6,-1.7 6.4,-10.3 -1.2,-0.5 -6.6,10.2 z m -24.6,0.1 1.1,-0.8 -6.5,-10.2 -1.3,0.6 z m 6.6,-4 11,0.1 c 0.6,0 6.4,-8.9 7,-10 H 87.3 l 6.9,9.9 z"}],G["GR.IN.IC.RELIGIOUS INSTITUTION"]=[{type:"path",stroke:!1,d:"m 101.2,68.1 c 7.9,0 18,3.8 21.7,8 5,5.7 7,12.3 7,22.8 V 131.9 H 101.2 V 68.1 z M 70.1,96.3 c 0,-8.4 3.4,-16.4 7.7,-20.7 3.9,-3.9 13.2,-7.5 20.9,-7.5 v 63.9 H 70.1 V 96.3 z m -2.6,38.3 h 65 V 99.3 c 0,-10.8 -2.5,-19.7 -8.1,-25.2 -4.8,-4.8 -15,-8.7 -24.6,-8.7 -8.3,0 -19.4,3.7 -23.6,7.9 -3.2,3.3 -4.3,5 -6.2,9.5 -1,2.4 -2.5,10 -2.5,13.2 v 38.5 l 0,0 z M 105.1,97.6 v 12.5 c 0,0.5 0.6,1.1 1.1,1.1 h 0.4 c 0.7,0 1.1,-0.8 1.1,-1.5 V 97.8 c 0,-0.5 -0.6,-1.1 -1.1,-1.1 H 106 c -0.5,0 -0.9,0.4 -0.9,0.9 z m -11.2,13.6 c 0.8,0 0.9,-1 0.9,-1.7 V 97.6 c 0,-0.5 -0.4,-0.9 -0.9,-0.9 h -0.6 c -0.5,0 -0.9,0.4 -0.9,0.9 v 12.5 c 0,0.5 0.6,1.1 1.1,1.1 h 0.4 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 105.1,97.6 c 0,-0.5 0.4,-0.9 0.9,-0.9 h 0.7 c 0.5,0 1.1,0.6 1.1,1.1 v 11.8 c 0,0.7 -0.4,1.5 -1.1,1.5 h -0.5 c -0.5,0 -1.1,-0.6 -1.1,-1.1 V 97.6 h 0 z m -3.9,34.4 h 28.7 V 98.9 c 0,-10.5 -2,-17.1 -7,-22.8 C 119.2,71.9 109.1,68.1 101.2,68.1 v 63.9 z M 94,111.2 H 93.5 c -0.5,0 -1.1,-0.6 -1.1,-1.1 V 97.6 c 0,-0.5 0.4,-0.9 0.9,-0.9 h 0.7 c 0.5,0 0.9,0.4 0.9,0.9 v 11.8 c 0,0.8 -0.1,1.8 -0.9,1.8 z M 70.1,96.3 v 35.7 H 98.8 V 68.1 c -7.7,0 -17,3.6 -20.9,7.5 -4.3,4.3 -7.7,12.3 -7.7,20.7 z"}],G["GR.IN.IC.CHILD DAY CARE"]=[{type:"path",stroke:!1,d:"m 76.6,100.3 c 0,1.8 1.1,3.4 3,3.4 h 0.6 c 1.4,0 2.4,-1.5 2.4,-3 0,-4.3 -6,-4.2 -6,-0.4 z m 26.5,-11.9 v 0.4 c 0,1.5 1.4,3.2 2.8,3.2 h 0.4 c 1.6,0 3,-1.2 3,-2.8 V 87.8 c 0,-1 -1.6,-2 -2.8,-2 h -0.2 c -1.5,-0 -3.2,1.4 -3.2,2.6 z m -3.2,-16.8 35.4,21.7 c -1.3,0.2 -4.6,-0.3 -4.6,0.9 v 34.9 H 69.3 V 94.1 c 0,-1.2 -3.3,-0.8 -4.6,-0.9 l 35.2,-21.7 0,0 z m -39.8,22.4 c 0.2,0.8 0.3,1.3 1.3,1.3 h 6.2 v 34.6 c 0,0.5 0.1,0.5 0.2,0.9 h 64 c 0.4,0 0.8,-0.3 0.8,-0.8 V 95.2 h 6 c 0.8,0 1.3,-0.4 1.3,-1.1 0,-0.6 -17.8,-11.2 -19.8,-12.5 -1.6,-1 -20,-12.3 -20,-12.3 -0.2,0 -36.7,22.5 -40,24.7 l 0,0 z m 20.9,14.2 5.9,4.3 -0.1,0.1 -4.8,2.2 c -0.2,-0.8 -1,-1.9 -1,-2.5 v -4.1 z m 28.4,-8.8 c 0.5,-0.8 0.6,-2.9 1,-3.1 0.4,-0.2 2.4,0.8 2.9,0.9 v 3.6 l -4.4,1.7 v -0.6 c -0,-0.9 0.5,-1 0.5,-2.4 z m -3,2 c 0,0.9 0,1.1 -0.4,1.7 V 104 c -2.4,0.2 -15.4,7.5 -17,7.5 -0.5,0 -6.5,-6.7 -7.3,-6.7 h -4.3 c -0.5,0 -2.8,5.2 -2.8,5.6 v 4.7 c 0,0.9 1.8,1.4 2,2.4 l -4.1,1.7 1.3,2.6 6.2,-2.8 c 1.5,0.8 9.3,5.6 10.5,5.6 h 0.6 c 0.8,0 1.9,-0.8 1.9,-1.5 v -0.4 c 0,-0.9 -7.3,-4.8 -8.4,-5.8 l 14,-6.3 v 8.4 h -3 v 6.7 h 8.4 v -6.7 h -2.8 v -9.9 l 13.2,-5.8 c 0,1.6 0.2,3.7 0.4,5.1 0.2,1.8 -0.6,3.9 1.5,3.9 2.1,0 1.3,-2.5 1.3,-4.3 0,-1.9 -0.2,-3.5 -0.2,-5.6 v -0.6 l 9.1,-4 -1,-2.9 -6.2,2.8 c 0.3,-0.6 0.7,-0.8 1,-1.4 0.2,-0.7 0.4,-1.2 0.7,-1.8 0.5,-1 0.9,-2.6 1.4,-3.4 l -11.4,-1.6 c -0.6,0.5 -3.2,3.3 -3.2,4.2 v 0.6 h -0.4 l -1.1,7.1 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 81,112.2 c 0,0.6 0.8,1.7 1,2.5 l 4.8,-2.2 0.2,-0.1 -6,-4.3 v 4.1 z m 28.4,-12.9 c 0,1.4 -0.6,1.6 -0.6,2.4 v 0.6 l 4.5,-1.7 v -3.6 c -0.5,-0.1 -2.6,-1 -2.9,-0.9 -0.4,0.2 -0.5,2.4 -1,3.1 z m -32.9,0.9 c 0,-3.9 6,-4 6,0.4 0,1.4 -1.1,3 -2.4,3 h -0.5 c -1.8,0 -3,-1.6 -3,-3.4 z m 29.5,2.8 0.4,-1.7 1.1,-7.1 h 0.4 v -0.6 c 0,-0.8 2.6,-3.7 3.2,-4.2 l 11.4,1.6 c -0.5,0.8 -0.9,2.4 -1.4,3.4 -0.3,0.6 -0.4,1.1 -0.7,1.8 -0.3,0.7 -0.7,0.8 -1,1.4 l 6.2,-2.8 1,2.9 -9.1,4 v 0.6 c 0,2.1 0.2,3.7 0.2,5.6 0,1.8 0.8,4.3 -1.3,4.3 -2.1,0 -1.3,-2.2 -1.5,-3.9 -0.2,-1.4 -0.4,-3.5 -0.4,-5.1 l -13.2,5.8 v 9.9 h 2.8 v 6.7 h -8.4 v -6.7 h 3 v -8.4 l -14,6.3 c 1.1,0.9 8.4,4.9 8.4,5.8 v 0.4 c 0,0.7 -1,1.5 -1.9,1.5 H 90.6 c -1.2,0 -8.9,-4.8 -10.5,-5.6 l -6.2,2.8 -1.3,-2.6 4.1,-1.7 c -0.3,-1 -2,-1.5 -2,-2.4 v -4.6 c 0,-0.4 2.3,-5.6 2.8,-5.6 h 4.3 c 0.8,0 6.8,6.7 7.3,6.7 1.5,0 14.6,-7.3 17,-7.5 v -0.9 z m -3,-14.8 c 0,-1.2 1.7,-2.6 3.2,-2.6 h 0.2 c 1.2,0 2.8,1.1 2.8,2 v 1.3 c 0,1.6 -1.4,2.8 -3,2.8 h -0.4 c -1.4,0 -2.8,-1.7 -2.8,-3.2 v -0.4 z m -38.4,4.9 c 1.3,0.1 4.6,-0.3 4.6,0.8 v 34.9 h 61.4 V 94.1 c 0,-1.2 3.3,-0.8 4.6,-0.9 l -35.4,-21.7 -35.2,21.8 0,0 z"}],G["GR.IN.IC.HELICOPTER LANDING SITE"]=[G["AR.I.FF.CIVILIAN ROTARY WING"],{type:"circle",fill:!1,cx:100,cy:100,r:40}],G["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE LOCK"]=[{type:"path",fill:!1,d:"m 70,70 65,30 -65,30"}],G["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE SHIP ANCHORAGE"]=[{type:"path",fill:!1,stroke:"rgb(255, 0, 255)",d:"m 73.6,112.8 c 0.8,8 26.4,11.2 26.4,11.2 0,0 25.6,-3.2 26.4,-11.2 M 80,88 l 40,0 m -20,-12 0,48"}],G["GR.IN.IC.NATURAL GAS FACILITY"]=[{type:"path",stroke:!1,d:"M 99.5,57 C 82.9,56.8 69.7,69.5 65.9,84.4 62.1,99 67.7,115.9 87,124.3 l 0,12.8 c 0,1.6 1,2.4 1.9,2.9 0.8,0.6 1.8,1 2.9,1.3 1.6,0.6 3.5,0.9 5.3,1.2 l 0,0.5 2,0 c 0.4,0 0.6,-0 0.9,-0.1 0.1,0 0.2,-0 0.3,0 0.2,0 0.5,0.1 0.9,0.1 l 2,0 0,-0.5 c 1.8,-0.3 3.6,-0.6 5.3,-1.2 1.1,-0.4 2,-0.8 2.9,-1.3 0.8,-0.6 1.9,-1.4 1.9,-2.9 L 113,124.3 c 19.5,-8.4 25,-25.4 21.1,-40 -4,-14.9 -17.3,-27.6 -34,-27.2 -0,-6.4e-5 -0.1,0 -0.1,0 -0.1,-0 -0.1,-0 -0.4,-0 z m -0.1,4 C 99.5,61 99.6,61 99.9,61 l 0.1,0 0.1,0 c 14.7,-0.4 26.6,10.9 30.1,24.3 3.6,13.3 -0.9,28.3 -19.9,35.9 l -1.3,0.5 0,1.3 0,13.5 c -0,0 -0,0 -0.1,0.1 -0.4,0.3 -1.1,0.6 -2,0.9 -1.8,0.6 -4.2,1.1 -6.1,1.3 l -0.6,0.1 c -0,-0 -0,0 -0.1,0 l -0.1,0 -0.1,0 c -0,0 -0.1,-0 -0.1,0 l -0.6,-0.1 c -1.9,-0.2 -4.3,-0.7 -6.1,-1.3 -0.9,-0.3 -1.6,-0.7 -2,-0.9 -0.1,-0.1 -0.1,-0 -0.1,-0.1 l 0,-13.5 0,-1.3 -1.3,-0.5 C 70.8,113.6 66.3,98.7 69.8,85.4 73.2,72.1 85,60.8 99.5,61 z m 26.8,44.1 c -1.4,0.7 -3,1.2 -4.7,1.7 -1.7,0.5 -3.3,0.7 -4.9,0.7 -2,-10e-6 -3.9,-0.3 -5.6,-0.8 -1.7,-0.6 -3.1,-1.4 -4.3,-2.5 -1.2,-1.1 -2.1,-2.6 -2.8,-4.3 -0.7,-1.7 -1,-3.7 -1,-6 0,-4.2 1.2,-7.5 3.7,-9.9 2.4,-2.4 5.8,-3.6 10.1,-3.6 1.5,2.7e-5 3,0.2 4.6,0.5 1.6,0.4 3.2,1 5,1.8 l 0,4.1 -0.3,0 c -0.4,-0.3 -0.9,-0.7 -1.6,-1.1 -0.7,-0.5 -1.4,-0.8 -2,-1.1 -0.8,-0.4 -1.7,-0.7 -2.8,-0.9 -1,-0.2 -2.2,-0.4 -3.5,-0.4 -2.9,2.4e-5 -5.3,0.9 -7,2.8 -1.7,1.9 -2.5,4.4 -2.5,7.6 -1e-5,3.4 0.9,6 2.7,7.9 1.8,1.9 4.2,2.8 7.3,2.8 1.1,0 2.2,-0.1 3.4,-0.3 1.1,-0.2 2.1,-0.5 3,-0.9 l 0,-6.4 -7,0 0,-3.1 10.5,0 0,11.2 m -28.8,1.9 -4.3,0 -12.4,-23.4 0,23.4 -3.3,0 0,-26.2 5.4,0 11.3,21.4 0,-21.4 3.3,0 0,26.2"}],G["GR.IN.IC.TOLL FACILITY"]=[{type:"path",stroke:!1,d:"m 69.1,112.3 c 0,-0.7 0.8,-1.7 1.4,-1.7 h 0.5 c 0.8,0 1.5,0.8 1.5,1.5 v 1.2 c 0,0.5 -0.9,1.2 -1.5,1.2 h -0.2 c -0.8,0 -1.7,-0.8 -1.7,-1.4 v -0.9 l 0,0 z m -1.1,0.5 v 0.3 c 0,1.2 1.5,2.6 2.9,2.6 1.3,0 2.8,-1.5 2.8,-2.5 v -1 c 0,-1.2 -1.4,-2.6 -2.8,-2.6 -1.7,0 -2.9,1.6 -2.9,3.2 z m 27.6,-11.6 -2,-2.8 -2.3,0 4.3,2.8 z m -29.5,17.8 c 0,-0.5 0.8,-0.9 1.4,-0.9 H 99.1 c 0.8,0 1.3,0.6 1.4,1.4 -0.6,0.1 -1,0.3 -1.7,0.3 H 68 c -0.6,0 -1.8,0 -1.8,-0.6 v -0.2 z m 9.4,-10.2 15.1,0 8.2,0.2 c 0.5,0.9 2,3 1.8,4.3 l -0.2,2.6 c -0.5,0.2 -0.5,0.3 -1,0.3 H 67.1 c -0.6,0 -0.5,-0.2 -1.1,-0.3 -0.1,-0.7 -0.3,-1 -0.3,-1.8 v -0.6 c 0,-1.1 1.5,-3.5 2,-4.4 l 7.8,-0.2 z m -5.8,-2 c 0.1,-1.1 3.5,-7.1 4.3,-7.1 h 18.4 c 1,0 4,5.8 4.3,7.1 H 69.7 z m 21.7,-8.4 2.3,-0 2,2.8 -4.3,-2.8 z m 44.3,27.8 V 73.8 c -1,0.2 -10.3,6 -11.9,7 -1.3,0.8 -11.6,6.5 -11.6,7.2 0,0 1.3,2.1 1.4,2.3 l 4.9,-2.8 v 19.2 l -0.4,0.3 c -2.9,-2 -33.4,-22 -33.6,-22 -0.1,0 -3.9,5.6 -4,6.2 l 10.8,7 -18.3,0 c -0.9,1.4 -1.9,2.4 -2.8,3.8 -0.2,0.3 -2,4.4 -2,4.6 v 0.8 h -1.2 c -0.1,0.9 -2.6,4.6 -2.6,5.4 v 0.8 c 0,1.5 0.4,2.9 1.4,3.4 -0.2,0.3 -1,1.1 -1,1.6 v 0.9 c 0,1.1 1.5,1.5 2.6,1.5 v 2.3 l 0.2,2 c 0.5,0.2 0.3,0.5 1.2,0.6 0.6,0.1 1,0.2 1.7,0.2 h 1.1 l 1.7,-0.2 0.3,-0.3 0.2,-2 0,-2.5 h 19.1 v 3.1 c 0,0.8 0.3,1.2 0.6,1.7 l 1.4,0.2 1.2,-0 c 1.7,0 3.1,-0.1 3.1,-1.8 v -3.1 c 0.8,-0.2 2.6,-0.5 2.6,-1.4 v -1.7 c 0,-0.5 -0.5,-0.7 -0.9,-0.8 0.1,-0.5 1.2,-1.1 1.2,-2.5 v -2 c 0,-1.5 -2.1,-4.1 -2.5,-5.4 h -1.2 v -0.4 c 0,-1.1 -2.2,-4.8 -2.5,-5.8 l 19,12.5 c -0.4,1.6 -2,4 -2,5.2 v 7.2 h 22.9 l 0,0 z M 95.9,114.6 H 95.7 c -1.1,0 -1.8,-0.7 -1.8,-1.7 v -0.5 c 0,-1 0.6,-1.8 1.5,-1.8 h 0.5 c 1,0 1.5,1.1 1.5,2 0,1.1 -0.5,2 -1.5,2 z m -3.1,-2.5 v 1.1 c 0,1 1.6,2.5 2.9,2.5 1.4,0 2.6,-1.3 2.6,-2.8 v -0.8 c 0,-1.2 -1.3,-2.6 -2.5,-2.6 H 95.7 c -1.4,0 -2.9,1.4 -2.9,2.6 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 114.5,107.9 c 0,0.9 -0.8,1.6 -1.8,1.6 -1,0 -1.8,-0.7 -1.8,-1.6 0,-0.9 0.8,-1.6 1.8,-1.6 1,0 1.8,0.7 1.8,1.6 z m -11.2,-7.2 c 0,0.9 -0.8,1.6 -1.8,1.6 -1,0 -1.8,-0.7 -1.8,-1.6 0,-0.9 0.8,-1.6 1.8,-1.6 1,0 1.8,0.7 1.8,1.6 z m -5.5,-3.7 c 0,0.9 -0.8,1.6 -1.8,1.6 -1,0 -1.8,-0.7 -1.8,-1.6 0,-0.9 0.8,-1.6 1.8,-1.6 1,0 1.8,0.7 1.8,1.6 z M 108.9,104.5 c 0,0.9 -0.8,1.6 -1.8,1.6 -1,0 -1.8,-0.7 -1.8,-1.6 0,-0.9 0.8,-1.6 1.8,-1.6 1,0 1.8,0.7 1.8,1.6 z M 92.3,93.5 c 0,0.9 -0.8,1.6 -1.8,1.6 -1,0 -1.8,-0.7 -1.8,-1.6 0,-0.9 0.8,-1.6 1.8,-1.6 1,0 1.8,0.7 1.8,1.6 z M 86.5,89.8 c 0,0.9 -0.8,1.6 -1.8,1.6 -1,0 -1.8,-0.7 -1.8,-1.6 0,-0.9 0.8,-1.6 1.8,-1.6 1,0 1.8,0.7 1.8,1.6 z m 35.6,2.6 10.8,0 0,16.1 -10.8,0 z m -55.9,26.4 v 0.2 c 0,0.6 1.2,0.6 1.8,0.6 h 30.8 c 0.7,0 1.1,-0.2 1.7,-0.3 -0.1,-0.8 -0.6,-1.4 -1.4,-1.4 H 67.5 c -0.5,0 -1.4,0.4 -1.4,0.9 z m 26.6,-6.8 c 0,-1.2 1.5,-2.6 2.9,-2.6 h 0.2 c 1.2,0 2.5,1.4 2.5,2.6 v 0.8 c 0,1.4 -1.2,2.8 -2.6,2.8 -1.4,0 -2.9,-1.4 -2.9,-2.5 v -1 h -0 z m -24.8,0.6 c 0,-1.6 1.2,-3.2 2.9,-3.2 1.3,0 2.8,1.5 2.8,2.6 v 1.1 c 0,0.9 -1.4,2.5 -2.8,2.5 -1.4,0 -2.9,-1.4 -2.9,-2.6 v -0.3 z m -0.3,-3.8 c -0.5,1 -2,3.4 -2,4.4 v 0.6 c 0,0.9 0.2,1.1 0.3,1.8 0.5,0.1 0.5,0.3 1.1,0.3 h 32.3 c 0.6,0 0.5,-0.2 1,-0.3 l 0.2,-2.6 c 0.1,-1.2 -1.4,-3.4 -1.8,-4.3 l -8.2,-0.2 -15.1,-0 -7.8,0.2 z m 2,-2.2 h 27.1 c -0.4,-1.3 -3.3,-7.1 -4.3,-7.1 H 74 c -0.8,0 -4.2,6 -4.3,7.1 z m 26.2,7.8 c 1.1,0 1.5,-0.9 1.5,-2 0,-0.9 -0.6,-2 -1.5,-2 h -0.5 c -1,0 -1.5,0.8 -1.5,1.8 v 0.5 c 0,1 0.8,1.7 1.8,1.7 h 0.2 l 0,0 z M 69.1,112.3 v 0.9 c 0,0.6 1,1.4 1.7,1.4 h 0.2 c 0.6,0 1.5,-0.8 1.5,-1.2 v -1.2 c 0,-0.8 -0.8,-1.5 -1.5,-1.5 h -0.5 c -0.6,0 -1.4,1 -1.4,1.7 z"}],G["GR.IN.IC.TRAFFIC INSPECTION FACILITY"]=[{type:"path",stroke:!1,d:"m 121.4,81.7 h 1.1 v 0.6 c 0,0.6 0.8,2.1 1.2,2.4 0.5,0.4 1.9,0.9 2.7,0.9 2.6,0 3.9,-1.9 3.9,-4.5 v -0.5 h -7.4 c -0.5,0 -1.2,0.8 -1.4,1.1 z m -22.6,23.5 c 0,-1.7 1.7,-3 3.4,-3 1.7,0 3.1,1.4 3.1,3.1 v 0.6 c 0,1.3 -1.7,2.6 -3.1,2.6 -1.7,0 -3.4,-1.3 -3.4,-3 v -0.5 z m -29.7,0 c 0,-1.8 1.3,-3 3.1,-3 1.7,0 3.3,1.4 3.3,3.1 v 0.3 c 0,1.6 -1.6,3 -3.4,3 -1.5,0 -3,-1.2 -3,-2.6 v -0.8 z m 3.7,-7 c 0,-0.4 1.6,-4.2 1.9,-5 0.6,-1.7 0.9,-3.6 3.3,-3.6 H 96.5 c 2.8,0 2.2,1.8 3.2,3.6 0.2,0.4 1.8,4.5 1.8,4.9 H 72.8 z m -3.7,1 c -2.1,0 -3.7,1.5 -3.7,3.6 v 9.2 c 0,1 1.7,2.3 3.1,2.3 v 5.3 c 0,1.8 1.3,3.3 3.3,3.3 1.4,0 3.1,-1.6 3.1,-2.6 v -5.9 h 24.8 v 6.2 c 0,1 1.7,2.3 3,2.3 h 0.2 c 1.4,0 3.1,-1.3 3.1,-2.6 v -5.9 c 1.9,0 3.3,-1.4 3.3,-3.3 v -8.1 c 0,-2 -1.4,-3.3 -3.2,-3.7 -1.4,-0.2 -1.1,-0.8 -1.6,-1.9 -0.4,-0.8 -0.7,-1.6 -1,-2.4 -1.2,-2.6 -2.2,-8.2 -5.6,-8.2 h -21.2 c -2.9,0 -3.5,3.3 -4.5,5.5 -0.6,1.4 -2.7,5.8 -3,7 z m 56.5,20.2 0.3,-3.3 0.5,-6.2 h 1.7 l 0.8,12.9 h 5.8 V 88.9 c 0,-0.6 -1.2,-1.9 -2,-1.9 l -0.6,0.1 -9.9,14.6 h 8.4 v 3.6 h -11.2 v 17.6 h 6.1 l -0,-0.8 0.2,-2.6 z m -16.8,-30.8 c 0.2,-0.9 1,-1.5 2,-1.6 v 2.2 h -2 c 0,1.4 0.8,2.2 2.2,2.2 v -2 h 2 c -0,1.3 -0.8,1.4 -1.4,2 h 7.8 l 0,10.2 10,-14.3 -10.1,-0.2 h -6.4 v -7.6 c 0,-1.2 -0.8,-2.2 -1.9,-2.2 h -0.4 c -2.2,0 -2,2.4 -2,4.7 0,1.3 -0.4,5.8 0.2,6.6 z m 0,0 v 0.6 h 2 v -2.2 c -1.1,0 -1.8,0.7 -2,1.6 z m 2.2,2.8 h 0.6 c 0.6,-0.6 1.4,-0.7 1.4,-2 h -2 v 2 z m 19.3,-12 0,-2 -8.8,-0 1,2 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 130.3,79.4 -7.9,-0 0.4,1.3 7.5,0 z m -8.1,22.2 9.9,-14.6 0.6,-0.1 -3.1,0.2 -10,14.3 -0.1,3.7 11.2,0 0,-3.6 z m -23.3,3.6 v 0.5 c 0,1.7 1.7,3 3.4,3 1.4,0 3.1,-1.4 3.1,-2.6 v -0.6 c 0,-1.7 -1.4,-3.1 -3.1,-3.1 -1.8,0 -3.4,1.3 -3.4,3 z m -29.7,0 v 0.8 c 0,1.4 1.5,2.6 3,2.6 1.8,0 3.4,-1.3 3.4,-3 v -0.3 c 0,-1.6 -1.6,-3.1 -3.3,-3.1 -1.8,0 -3.1,1.2 -3.1,3 z m 3.7,-7 h 28.6 c 0,-0.5 -1.5,-4.5 -1.8,-4.9 -1,-1.8 -0.4,-3.6 -3.2,-3.6 H 77.9 c -2.4,0 -2.6,1.9 -3.3,3.6 -0.2,0.8 -1.8,4.6 -1.8,5 z"}],G["GR.IN.IC.TUNNEL"]=[{type:"path",stroke:!1,d:"m 94.4,116.8 c 0,-3.5 2.6,-7.2 5.9,-7.2 3.2,0 5.6,4 5.6,7.1 v 0.8 H 94.4 v -0.7 z m 27.2,-4.7 9,-4.2 c 0.2,1.7 0.8,3.2 1,5.2 0.3,1.8 0.6,3.3 0.6,5.6 v 0.5 h -10 l -0.7,-7.1 z m -43.5,4.9 0.1,2.2 H 68 c 0,-1.6 0.3,-3.8 0.6,-5.4 0.1,-0.7 0.2,-1.8 0.5,-2.4 0.1,-0.2 0.7,-2.2 0.7,-2.4 l 9.2,3.1 -0.8,4.9 z m 39,-16.8 6.2,-6.2 c 0.6,1 1.2,1.8 1.9,2.8 0.8,1.1 1.2,2 1.8,3.1 0.6,1 2.8,5.6 2.8,6.9 l -8.7,4.2 c -0.1,-2.5 -3,-9 -4,-10.6 z m -37.9,10.4 -9.1,-3 c 0.1,-1.2 2.4,-5.9 3,-7 1.2,-2.1 3,-4.2 4,-6 l 7.6,4.4 c -0.2,0.5 -2.6,4.3 -3,5.4 -0.8,1.7 -1.6,4.9 -2.4,6.2 z M 111.2,83.2 c 2.8,0.7 9.8,7.1 11.3,9.4 l -6.3,6.2 c -0.5,-1.8 -6,-6.9 -8.2,-7.4 l 3.2,-8.2 z M 78.1,93.4 C 79.7,91 88,83.8 91,83.1 L 94.9,91 c -2.6,0.6 -7.9,5 -9.2,6.9 l -7.6,-4.5 z M 92.6,82.4 c 2.6,-0.6 4.1,-1.8 7.8,-1.8 h 1.4 c 4,0 5.3,1.2 8.1,1.8 -0,1 -1.9,5.2 -2.3,6.3 -0.6,1.4 -0.4,2 -2.2,1.5 -1.1,-0.3 -2.4,-0.6 -3.6,-0.6 h -1 L 96.1,90.3 92.6,82.4 z M 66.5,119.8 H 60.4 c -0.4,0 -0.5,0.1 -0.5,0.5 v 0.2 c 0,0.4 0.1,0.5 0.5,0.5 h 79 c 0.3,0 0.7,-0.3 0.7,-0.5 0,-0.4 -0.3,-0.7 -0.7,-0.7 h -5.7 v -1.5 c 0,-10.1 -4.9,-20.4 -9.5,-25.9 C 119.8,87 111.6,79 102.2,79 h -2 c -9.7,0 -18.8,8.4 -23.6,13.7 -5,5.6 -10.1,16.6 -10.1,27.1 l 0,0 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 79,112 -9.3,-3.1 c -0,0.2 -0.6,2.2 -0.7,2.4 -0.2,0.6 -0.4,1.7 -0.5,2.4 -0.2,1.5 -0.5,3.8 -0.5,5.4 h 10.3 l -0.1,-2.2 0.8,-4.9 z m 15.5,5.4 h 11.4 v -0.8 c 0,-3.1 -2.4,-7.1 -5.6,-7.1 -3.3,0 -5.9,3.8 -5.9,7.2 v 0.7 z m 27.9,1.7 h 10 v -0.5 c 0,-2.3 -0.4,-3.8 -0.6,-5.6 -0.3,-2 -0.9,-3.5 -1,-5.2 l -9,4.2 0.7,7.1 z m -5.2,-19 c 1.1,1.6 4,8.1 4,10.6 l 8.7,-4.2 c 0,-1.2 -2.1,-5.8 -2.8,-6.8 -0.7,-1.1 -1.1,-2 -1.8,-3.1 -0.7,-1 -1.3,-1.8 -1.9,-2.8 l -6.2,6.2 z m -37.9,10.4 c 0.7,-1.4 1.6,-4.5 2.4,-6.2 0.5,-1.1 2.9,-4.9 3,-5.4 l -7.6,-4.4 c -1,1.8 -2.8,4 -4,6 -0.6,1.1 -2.9,5.8 -3,7 l 9.1,3 z m 28.8,-19.1 c 2.1,0.5 7.6,5.6 8.2,7.4 l 6.3,-6.1 c -1.5,-2.3 -8.5,-8.8 -11.3,-9.5 l -3.2,8.2 z m -30,2 7.6,4.6 C 87,96 92.3,91.6 94.9,91 l -3.8,-7.9 c -3.1,0.7 -11.4,7.9 -13,10.3 z M 92.6,82.4 l 3.5,7.9 4.6,-0.6 h 1 c 1.3,0 2.6,0.3 3.6,0.6 1.7,0.4 1.6,-0.1 2.2,-1.5 0.4,-1.1 2.3,-5.3 2.3,-6.3 -2.8,-0.6 -4,-1.9 -8.1,-1.9 h -1.4 c -3.6,0 -5.2,1.3 -7.7,1.9 z"}],G["GR.IN.IC.PUMPING STATION"]=[{type:"path",stroke:!1,d:"m 83.2,83.8 0,1.2 0,5.6 -11.3,0 0,-0 c -0.2,0 -0.3,0 -0.5,0 -0.1,6.6e-4 -0.1,-9.6e-4 -0.2,0 -2.7,0 -4.9,0.3 -6.5,1.7 -1.4,1.2 -2,3.3 -2.1,5.9 l -0.1,0 0,1.2 c 8e-6,0.1 -0,0.2 -0,0.3 l 0,0 0,14.1 -2.8,0 0,2.4 80.8,0 0,-2.4 -2.8,0 0,-14 0,-1.6 -0.1,0 c -0.1,-2.6 -0.5,-4.6 -1.8,-5.9 -1.5,-1.4 -3.8,-1.7 -6.8,-1.7 l 0,-0 -0.3,0 c -0.2,-5.6e-4 -0.3,-0 -0.4,-0 l 0,0 -11.3,0 0,-5.6 0,-1.2 -1.2,0 -31.2,0 -1.2,0 z m 2.4,2.4 28.8,0 0,27.2 -28.8,0 0,-27.2 z M 71.2,93 c 0.1,-0 0.1,0 0.2,0 l 11.8,0 0,8.4 -7.5,0 c -0.8,-0.1 -1.4,-0.1 -2,-0 -0,0 -0,0 -0.1,0 -0,0 -0,-0 -0,0 l 0,0 c -0.5,0.1 -1.2,0.3 -1.5,0.8 -0.4,0.5 -0.4,1.1 -0.4,1.6 -0,0.4 -0,0.8 0,1.2 l -0,0 0,8.8 -6.8,0 0,-14.5 c 0,-3 0.5,-4.5 1.4,-5.3 C 67.1,93.3 68.7,93.1 71.2,93 z m 45.6,0 11.8,0 c 0.1,9.7e-4 0.1,-0 0.2,0 2.8,0.1 4.5,0.4 5.2,1.1 0.8,0.7 1.2,2.3 1.2,5.2 l 0,14.5 -6.8,0 0,-8 0,0 c -0,-0.1 -0,-0.3 -0,-0.4 0,-0.9 0.2,-1.6 -0.1,-2.5 -0.1,-0.5 -0.6,-1.2 -1.2,-1.4 -0.2,-0.1 -0.5,-0 -0.7,-0 l 0,-0.1 -9.6,0 0,-8.4 z M 74,103.8 l 9.2,0 0,10 -9.2,0 0,-8.5 0,0 c 0,-0.6 -0,-1.1 -0,-1.4 0,-0.1 -0,-0 0,-0.1 z m 42.8,0 9.2,0 c 0,0.2 0,0.8 0,1.6 l -0,0 0,8.4 -9.2,0 0,-10 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 116.8,93 11.8,0 c 0.1,9.7e-4 0.1,-0 0.2,0 2.8,0.1 4.5,0.4 5.2,1.1 0.8,0.7 1.2,2.3 1.2,5.2 l 0,14.5 -6.8,0 0,-8 0,0 c -0,-0.1 -0,-0.3 -0,-0.4 0,-0.9 0.2,-1.6 -0.1,-2.5 -0.1,-0.5 -0.6,-1.2 -1.2,-1.4 -0.2,-0.1 -0.5,-0 -0.7,-0 l 0,-0.1 -9.6,0 0,-8.4 z m -45.6,0 c 0.1,-0 0.1,0 0.2,0 l 11.8,0 0,8.4 -7.5,0 c -0.8,-0.1 -1.4,-0.1 -2,-0 -0,0 -0,0 -0.1,0 -0,0 -0,-0 -0,0 l 0,0 c -0.5,0.1 -1.2,0.3 -1.5,0.8 -0.4,0.5 -0.4,1.1 -0.4,1.6 -0,0.4 -0,0.8 0,1.2 l -0,0 0,8.8 -6.8,0 0,-14.5 c 0,-3 0.5,-4.5 1.4,-5.3 C 67.1,93.3 68.7,93.1 71.2,93 z m 14.4,-6.8 28.8,0 0,27.2 -28.8,0 0,-27.2 z"}],G["GR.IN.IC.RESERVOIR"]=[{type:"path",stroke:!1,d:"M 127.3 69.1 C 127 69.1 126.7 69.2 126.4 69.2 C 123.4 69.5 120.8 71.9 118.4 74.5 C 115.9 77 113.5 79.7 111.5 80.9 C 108.9 82.4 105.5 82.5 101.9 82.6 C 98.3 82.7 94.7 82.9 91.8 84.9 C 89.7 86.5 88.6 88.5 87.5 90.3 C 86.4 92 85.2 93.4 82.7 94.2 C 79.4 95.3 72 96.4 66.9 98.8 C 64.3 100.1 62.1 101.7 61.5 104 C 60.8 106.3 61.7 109.1 64.7 112.3 L 65.1 111.9 L 65.1 120.1 L 84.3 120.1 L 84.3 129.7 L 86.7 129.7 L 86.7 120.1 L 97.9 120.1 L 97.9 129.7 L 100.3 129.7 L 100.3 120.1 L 117.1 120.1 L 117.1 112.5 C 117.4 112.2 117.7 111.9 118 111.5 C 119 110.1 119.3 108.5 119.5 106.9 C 119.8 103.7 119.5 100.5 121.7 97.7 C 123.1 95.9 126 95.4 129.1 94.7 C 132.1 94.1 135.4 93.3 137.2 90.4 C 139.4 86.7 139.1 81.3 137.2 76.8 C 136.3 74.5 134.9 72.5 133 71.1 C 131.4 69.9 129.5 69.1 127.3 69.1 z M 127.4 70.7 C 129.2 70.7 130.7 71.3 132.1 72.3 C 133.6 73.5 134.9 75.4 135.8 77.4 C 137.5 81.5 137.6 86.6 135.8 89.6 C 134.5 91.8 131.7 92.5 128.7 93.2 C 125.7 93.8 122.4 94.3 120.5 96.7 C 117.8 100 118.2 103.7 117.9 106.7 C 117.8 108.2 117.5 109.5 116.7 110.6 C 116.5 110.8 116.3 111.1 116.1 111.3 L 65.8 111.3 L 65.9 111.3 C 63.1 108.2 62.6 106.1 63 104.4 C 63.5 102.8 65.2 101.4 67.6 100.3 C 72.3 98 79.5 96.9 83.1 95.8 C 86.1 94.8 87.7 92.9 88.8 91.1 C 90 89.3 90.9 87.5 92.8 86.2 C 95.1 84.5 98.4 84.3 102 84.2 C 105.5 84.1 109.2 84.1 112.3 82.3 C 114.7 80.8 117.1 78.1 119.5 75.6 C 121.9 73.1 124.4 71 126.6 70.8 C 126.9 70.8 127.1 70.7 127.4 70.7 z "},{type:"path",stroke:!1,fill:!!t&&s,d:"m 127.4,70.7 c 1.8,-0 3.3,0.6 4.7,1.6 1.5,1.2 2.8,3 3.7,5.1 1.7,4.1 1.9,9.2 0.1,12.2 -1.3,2.2 -4.1,3 -7.1,3.6 -3,0.6 -6.3,1.1 -8.3,3.5 -2.6,3.3 -2.3,7.1 -2.6,10 -0.1,1.5 -0.4,2.8 -1.2,3.8 -0.2,0.2 -0.4,0.5 -0.6,0.7 l -50.2,0 0,-0 c -2.8,-3 -3.3,-5.2 -2.8,-6.8 0.5,-1.6 2.1,-3 4.5,-4.2 4.8,-2.3 11.9,-3.4 15.6,-4.5 3,-1 4.5,-2.8 5.7,-4.6 1.2,-1.8 2.1,-3.6 3.9,-4.9 2.3,-1.7 5.7,-1.9 9.2,-2 3.5,-0.1 7.3,-0.1 10.3,-1.9 2.5,-1.4 4.8,-4.2 7.2,-6.7 2.4,-2.5 4.9,-4.6 7.1,-4.8 0.3,-0 0.5,-0.1 0.8,-0.1 z m -41.9,49 13.6,0 0,10 -13.6,0 z"}],G["GR.IN.IC.STORAGE TOWER"]=[{type:"path",stroke:!1,d:"m 118.3,121 0.4,5.3 0.7,12.8 h 2.9 c 0,-6.1 -1.1,-12.6 -1.1,-18.6 0,-3.4 -0.4,-6.2 -0.4,-9.6 -0.1,-5.3 0.2,-3 2.6,-6.6 l -0.3,-3.1 0,-1.1 h -4.2 V 84 c -2.5,0.6 -5.2,1.8 -8.3,2.6 -2.6,0.6 -6.4,1.4 -9.4,1.4 h -2.4 c -7.6,0 -12.2,-2.6 -18,-4 v 16.2 h -4.2 v 0.7 l -0.3,3.7 3.2,3.7 -2,30.8 h 3.1 v -3.3 l 1.4,-21.7 c 0.5,0.4 2.1,2.7 3,3.6 0.9,0.9 2.4,2.2 3.5,2.9 2.2,1.5 5.6,3.8 8.7,4.1 v 14.4 h 5.6 v -14.4 c 3.7,-0.9 6.2,-2.2 8.8,-4.3 1.4,-1.1 2.2,-1.8 3.4,-3 0.7,-0.7 2.5,-3.2 3,-3.4 v 3.1 l 0.2,3.8 z M 99.7,85.2 c 7.4,0 23,-4.4 25.7,-8.4 -2.8,-1.5 -25.1,-16 -25.3,-16 -0.4,0 -24.9,15.4 -25.5,16.2 2.6,3.5 16.6,8.2 23.3,8.2 h 1.8 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 97.9,85.2 c -4.3,0 -11.7,-2 -17,-4.3 l -0,3.2 c 5.8,1.4 10.4,4 18,4 h 2.4 c 3,0 6.9,-0.8 9.4,-1.4 3,-0.8 5.8,-2 8.3,-2.6 V 80.8 c -6,2.4 -14.4,4.4 -19.3,4.4 H 97.9 z"}],G["GR.IN.IC.SURFACE WATER INTAKE"]=[{type:"path",stroke:!1,d:"M 63.4 75.5 L 63.4 76.3 L 63.4 90.7 L 63.4 91.5 L 64.2 91.5 L 75.7 91.5 C 76.5 96.6 79.8 99.1 83.3 101 C 87.1 102.9 91.3 104.3 93.8 107.5 C 94.8 108.9 94.9 110.7 95.2 112.6 C 95.4 113.6 95.6 114.5 96.2 115.4 C 96.7 116.2 97.5 117 98.8 117.5 C 101.2 118.6 108.7 120.7 115.9 122.4 C 119.6 123.2 123.1 123.9 126 124.3 C 127.5 124.4 128.7 124.5 129.8 124.5 C 130.8 124.4 131.6 124.3 132.2 123.8 C 134.8 121.7 136.1 119.9 136.5 118.3 C 136.8 116.8 136.1 115.4 135 114.4 C 133.9 113.4 132.4 112.5 131 111.7 C 129.7 110.8 128.4 109.9 127.7 108.8 C 124.2 103.6 121 95.5 113.4 91.5 L 119 91.5 L 119.8 91.5 L 119.8 90.7 L 119.8 76.3 L 119.8 75.5 L 119 75.5 L 64.2 75.5 L 63.4 75.5 z M 65 77.1 L 118.2 77.1 L 118.2 89.9 L 109.4 89.9 L 109.4 81.1 L 73.8 81.1 L 73.8 89.9 L 65 89.9 L 65 77.1 z M 76.9 91.5 L 110.5 91.5 C 119.4 94.8 122.7 103.5 126.7 109.5 C 127.6 110.8 129 111.8 130.4 112.7 C 131.8 113.6 133.2 114.4 134.2 115.3 C 135.1 116.2 135.6 117 135.3 118.1 C 135.1 119.2 134 120.8 131.4 122.9 C 131.3 123 130.6 123.2 129.7 123.3 C 128.8 123.3 127.6 123.3 126.2 123.1 C 123.3 122.8 119.8 122.1 116.2 121.3 C 109 119.6 101.5 117.3 99.3 116.4 C 98.2 116 97.6 115.4 97.2 114.8 C 96.8 114.1 96.6 113.3 96.4 112.4 C 96.1 110.6 96 108.5 94.7 106.8 C 91.9 103.2 87.6 101.8 83.9 99.9 C 80.5 98.1 77.7 96.1 76.9 91.5 z "},{type:"path",stroke:!1,fill:!!t&&s,d:"m 76.9,91.5 33.6,0 c 8.9,3.3 12.2,12 16.2,18 0.9,1.3 2.3,2.3 3.7,3.2 1.4,0.9 2.8,1.7 3.8,2.6 0.9,0.9 1.4,1.7 1.2,2.8 -0.2,1.1 -1.3,2.7 -3.9,4.8 -0.2,0.1 -0.8,0.3 -1.7,0.4 -0.9,0 -2.2,-0 -3.6,-0.2 -2.8,-0.3 -6.4,-1 -10,-1.8 -7.2,-1.7 -14.7,-3.9 -16.9,-4.8 -1.1,-0.4 -1.6,-1 -2.1,-1.7 -0.4,-0.7 -0.6,-1.5 -0.8,-2.3 -0.3,-1.8 -0.4,-3.9 -1.7,-5.6 -2.8,-3.6 -7.1,-5 -10.8,-6.9 C 80.5,98.1 77.7,96.1 76.9,91.5 z m -11.9,-14.4 53.2,0 0,12.8 -8.8,0 0,-8.8 -35.6,0 0,8.8 -8.8,0 0,-12.8 z"}],G["GR.IN.IC.WAREHOUSE/STORAGE FACILITY"]=[{type:"text",stroke:!1,x:100,y:113,fontsize:23,text:"STOR"}],G["GR.IN.IC.WASTEWATER TREATMENT FACILITY"]=[{type:"path",stroke:!1,d:"m 107.2,114.8 c 1.9,0 3.9,-1 4.3,-2.4 1.5,1 1.7,2.4 4.6,2.4 h 0.4 c 1.8,0 3.8,-1.1 4.1,-2.4 h 0.4 c 0.4,1.4 2.5,2.4 4.5,2.4 h 0.4 c 2.7,0 3,-1.5 4.5,-2.4 0.4,1.4 2.6,2.4 4.5,2.4 v -1.5 c -2.2,0 -3.5,-1.6 -3.9,-3.4 h -1.5 c -0,1.8 -1.7,3.4 -3.6,3.4 h -0.4 c -2.2,0 -3.6,-1.4 -3.8,-3.4 h -1.7 l -0.2,1.3 c -1,0.7 -1.1,2 -3.3,2 h -0.4 c -3.3,0 -3.2,-3.4 -4.1,-3.4 h -1.3 c -0.2,2 -1.4,3.4 -3.6,3.4 v 1.5 z m -2.2,-33.3 h 32 v 37 h -32 V 81.5 z M 65.1,114.8 v -1.5 c 2,0 3.7,-1.6 3.8,-3.4 h 1.9 c 0,1.8 1.5,3.4 3.4,3.4 h 0.4 c 1.8,0 3.5,-1.6 3.6,-3.4 h 1.9 c 0,2 1.7,3.4 3.8,3.4 h 0.2 c 2.2,0 3.2,-1.6 3.6,-3.4 h 1.7 c 0,2 1.7,3.4 3.8,3.4 v 1.5 c -2,0 -4.1,-1 -4.5,-2.4 -1.4,0.9 -1.7,2.5 -4.6,2.5 h -0.6 c -2.9,0 -3.1,-1.5 -4.5,-2.4 -0.4,1.3 -2.4,2.4 -4.1,2.4 H 74.1 c -2.4,0 -3.4,-1.2 -4.5,-2.4 -0.4,1.4 -2.6,2.4 -4.5,2.4 l 0,0 z M 96.5,93.4 h 6.7 v 13.3 H 96.5 V 93.4 z m -31.4,7.9 c 2,0 3.6,-1.5 3.8,-3.4 h 1.9 c 0.2,1.8 1.4,3.4 3.4,3.4 h 0.4 c 1.8,0 3.5,-1.7 3.6,-3.4 h 1.9 c 0,2 1.7,3.4 3.8,3.4 h 0.2 c 1.5,0 3.4,-1.5 3.4,-2.6 v -0.8 h 1.9 c 0,1.9 1.8,3.4 3.8,3.4 v 1.5 c -3.6,0 -3.8,-2 -4.9,-2.2 -0.4,1.3 -2.5,2.2 -4.2,2.2 h -0.6 c -1.7,0 -3.8,-1 -4.1,-2.2 -1,0.3 -1.4,2.2 -4.5,2.2 H 74.1 c -2.7,0 -3,-1.3 -4.5,-2.2 -1,1.4 -2.2,2.2 -4.5,2.2 v -1.5 l 0,0 z m 0,-12 c 2,0 3.6,-1.5 3.8,-3.4 h 1.9 c 0.1,1.8 1.4,3.4 3.4,3.4 h 0.4 c 1.8,0 3.5,-1.7 3.6,-3.4 h 1.9 c 0,2 1.7,3.4 3.8,3.4 h 0.2 c 1.5,0 3.4,-1.5 3.4,-2.6 v -0.8 h 1.9 c 0,1.9 1.8,3.4 3.8,3.4 v 1.5 c -3.1,0 -3,-1 -4.7,-2 -1.4,1 -1.7,2.1 -4.4,2.1 h -0.6 c -2.7,0 -2.9,-1.1 -4.3,-2 -1.6,1 -1.6,2 -4.5,2 H 73.9 c -2.4,0 -2.9,-1.2 -4.1,-2 -1.6,1 -1.7,2 -4.7,2 v -1.5 l 0,0 z m 31.4,21.3 h 6.7 v 10.1 h 35.6 V 79.4 L 103.3,79.2 V 89.5 H 96.5 V 79.4 L 61.2,79.2 v 41.6 h 35.4 v -10.1 z m 14.2,-12.2 c 0,1.4 -1.8,2.8 -3.6,2.8 v 1.5 c 3.4,0 3.5,-1.9 4.7,-2.2 0.4,1.3 2.7,2.2 4.5,2.2 h 0.2 c 2.9,0 3,-1.3 4.3,-2.2 1.2,0.9 1.7,2.2 4.3,2.2 h 0.8 c 2.6,0 3,-1.3 4.3,-2.2 1.4,1 1.5,2.2 4.6,2.2 v -1.5 c -1.7,0 -3.8,-1.6 -3.8,-2.8 v -0.6 h -1.7 c -0.1,1.8 -1.6,3.4 -3.6,3.4 h -0.6 c -1.4,0 -3.4,-1.4 -3.4,-2.4 v -0.9 h -1.9 c 0,1.7 -1.7,3.4 -3.5,3.4 h -0.4 c -1.9,0 -3.5,-1.5 -3.6,-3.4 h -1.8 v 0.6 z m 0,-12 c 0,1.4 -1.8,2.8 -3.6,2.8 v 1.5 c 1.8,0 4,-0.9 4.3,-2.2 1.6,1.1 1.7,2.2 4.9,2.2 h 0.4 c 2.6,0 2.9,-1.3 4.3,-2.2 0.3,1.3 2.4,2.3 4.1,2.3 h 0.8 c 2.7,0 3,-1.3 4.5,-2.2 0.4,1.3 2.7,2.2 4.5,2.2 v -1.5 c -1.7,0 -3.8,-1.6 -3.8,-2.8 v -0.6 h -1.7 c -0.1,1.8 -1.6,3.4 -3.6,3.4 h -0.6 c -1.6,0 -3.4,-1.4 -3.4,-2.8 v -0.6 h -1.9 c 0,1.7 -1.7,3.4 -3.5,3.4 h -0.4 c -1.9,0 -3.5,-1.5 -3.6,-3.4 h -1.8 v 0.5 z"},{type:"path",stroke:!1,fill:!!t&&s,d:"m 65.1,114.8 c 1.9,0 4.1,-1 4.5,-2.4 1.1,1.2 2.2,2.4 4.5,2.4 h 0.6 c 1.8,0 3.8,-1.1 4.1,-2.4 1.4,1 1.6,2.4 4.5,2.4 h 0.6 c 2.8,0 3.2,-1.6 4.5,-2.4 0.4,1.4 2.5,2.4 4.5,2.4 v -1.5 c -2.1,0 -3.7,-1.4 -3.8,-3.4 h -1.6 c -0.4,1.8 -1.4,3.4 -3.6,3.4 h -0.2 c -2.1,0 -3.7,-1.4 -3.8,-3.4 h -1.8 c -0,1.8 -1.7,3.4 -3.6,3.4 H 74.1 c -1.8,0 -3.3,-1.6 -3.4,-3.4 h -1.9 c -0,1.8 -1.8,3.4 -3.8,3.4 v 1.5 l 0,0 z m 0,-13.5 v 1.5 c 2.3,0 3.6,-0.9 4.5,-2.2 1.4,1 1.8,2.2 4.5,2.2 h 0.6 c 3.1,0 3.5,-2 4.5,-2.2 0.4,1.3 2.4,2.2 4.1,2.2 h 0.6 c 1.7,0 3.8,-1 4.1,-2.2 1.1,0.3 1.2,2.2 4.9,2.2 v -1.5 c -2,0 -3.8,-1.4 -3.8,-3.4 h -1.9 v 0.8 c 0,1.2 -1.9,2.6 -3.4,2.6 h -0.2 c -2,0 -3.7,-1.4 -3.8,-3.4 h -1.8 c -0,1.6 -1.7,3.4 -3.6,3.4 H 74.1 c -2,0 -3.2,-1.5 -3.4,-3.4 h -1.9 c -0.2,1.8 -1.7,3.4 -3.8,3.4 l 0,0 z m 0,-12 v 1.5 c 3,0 3.1,-1 4.7,-2 1.2,0.9 1.7,2 4.1,2 h 0.6 c 2.9,0 2.9,-1 4.5,-2 1.4,0.9 1.6,2 4.3,2 h 0.6 c 2.7,0 2.9,-1.1 4.3,-2 1.6,1.1 1.6,2 4.7,2 v -1.5 c -2,0 -3.8,-1.4 -3.8,-3.4 h -1.9 v 0.8 c 0,1.2 -1.9,2.6 -3.4,2.6 h -0.2 c -2,0 -3.7,-1.4 -3.8,-3.4 h -1.8 c -0,1.7 -1.7,3.4 -3.6,3.4 H 74.1 c -2,0 -3.2,-1.5 -3.4,-3.4 h -1.9 c -0.2,1.8 -1.7,3.4 -3.8,3.4 l 0,0 z m 42.1,25.4 v -1.5 c 2.2,0 3.4,-1.4 3.6,-3.4 h 1.3 c 1,0 0.8,3.4 4.1,3.4 h 0.4 c 2.2,0 2.4,-1.4 3.3,-2.1 l 0.2,-1.3 h 1.7 c 0.2,2 1.6,3.4 3.8,3.4 h 0.4 c 1.8,0 3.5,-1.6 3.6,-3.4 h 1.5 c 0.4,1.8 1.7,3.4 3.9,3.4 v 1.5 c -1.9,0 -4.1,-1 -4.5,-2.4 -1.5,1 -1.8,2.5 -4.5,2.5 h -0.4 c -2,0 -4.1,-1 -4.5,-2.4 h -0.4 c -0.4,1.3 -2.3,2.4 -4.1,2.4 h -0.4 c -2.9,0 -3.1,-1.4 -4.7,-2.4 -0.4,1.4 -2.4,2.4 -4.3,2.4 z m 3.6,-16.8 h 1.9 c 0,1.8 1.6,3.4 3.5,3.4 h 0.4 c 1.8,0 3.5,-1.6 3.6,-3.4 h 1.9 v 0.9 c 0,1 2,2.4 3.4,2.4 h 0.6 c 1.9,0 3.4,-1.6 3.6,-3.4 h 1.7 v 0.6 c 0,1.2 2,2.8 3.8,2.8 v 1.5 c -3.1,0 -3.2,-1.2 -4.7,-2.2 -1.3,0.9 -1.7,2.2 -4.4,2.2 h -0.7 c -2.6,0 -3,-1.3 -4.3,-2.2 -1.3,1 -1.4,2.2 -4.3,2.2 h -0.2 c -1.8,0 -4.2,-1 -4.5,-2.2 -1.2,0.3 -1.2,2.2 -4.7,2.2 v -1.5 c 1.8,0 3.6,-1.4 3.6,-2.8 v -0.6 l 0,0 z m 0,-12 h 1.9 c 0,1.9 1.6,3.4 3.5,3.4 h 0.4 c 1.8,0 3.5,-1.6 3.6,-3.4 h 1.9 v 0.6 c 0,1.4 1.8,2.8 3.4,2.8 h 0.6 c 1.9,0 3.4,-1.6 3.6,-3.4 h 1.7 v 0.6 c 0,1.2 2,2.8 3.8,2.8 v 1.5 c -1.8,0 -4.2,-1 -4.5,-2.2 -1.5,1 -1.8,2.2 -4.6,2.2 h -0.7 c -1.7,0 -3.8,-1 -4.1,-2.2 -1.4,0.9 -1.7,2.2 -4.3,2.2 h -0.4 c -3.1,0 -3.2,-1.2 -4.9,-2.2 -0.4,1.3 -2.5,2.2 -4.3,2.2 v -1.5 c 1.8,0 3.6,-1.4 3.6,-2.8 v -0.6 z m -5.8,32.6 h 32 V 81.5 h -32 v 37 z m -1.7,-11.8 0,-13.3 -6.8,0 0,13.3 z"}],G["GR.IN.IC.TRANSPORTATION INFRASTRUCTURE.TRAFFIC CONTROL POINT"]=[{type:"path",stroke:!1,d:"m 85.5,81.3 0.5,0.7 13.7,18.2 0.3,0.5 0.3,-0.5 13.7,-18.2 0.5,-0.7 -0.9,0 -27.4,0 -0.9,0 z m 1.7,0.9 25.7,0 L 100,99.3 87.2,82.2 z M 106.7,50.7 c 0,0.2 -0,0.5 -0.1,0.7 -0.1,0.2 -0.2,0.4 -0.4,0.5 -0.2,0.2 -0.4,0.3 -0.7,0.4 -0.3,0.1 -0.6,0.1 -1,0.1 l -0.7,0 0,2.1 -0.7,0 0,-5.6 1.5,0 c 0.3,5e-6 0.6,0 0.9,0.1 0.2,0.1 0.4,0.1 0.6,0.3 0.2,0.1 0.4,0.3 0.5,0.5 0.1,0.2 0.2,0.5 0.2,0.8 m -0.8,0 c -1e-5,-0.2 -0,-0.4 -0.1,-0.5 -0.1,-0.1 -0.2,-0.3 -0.3,-0.3 -0.1,-0.1 -0.3,-0.1 -0.4,-0.2 -0.2,-0 -0.3,-0.1 -0.6,-0.1 l -0.7,0 0,2.2 0.6,0 c 0.3,3e-6 0.5,-0 0.7,-0.1 0.2,-0.1 0.3,-0.1 0.5,-0.3 0.1,-0.1 0.2,-0.2 0.2,-0.4 0.1,-0.1 0.1,-0.3 0.1,-0.4 m -3.9,3.5 c -0.1,0.1 -0.3,0.1 -0.4,0.2 -0.1,0.1 -0.3,0.1 -0.4,0.2 -0.2,0 -0.3,0.1 -0.5,0.1 -0.2,0 -0.4,0.1 -0.6,0.1 -0.4,0 -0.8,-0.1 -1.1,-0.2 -0.3,-0.1 -0.6,-0.3 -0.9,-0.5 -0.2,-0.2 -0.4,-0.5 -0.6,-0.9 -0.1,-0.4 -0.2,-0.8 -0.2,-1.3 0,-0.5 0.1,-0.9 0.2,-1.2 0.1,-0.4 0.3,-0.7 0.6,-0.9 0.2,-0.2 0.5,-0.4 0.9,-0.6 0.3,-0.1 0.7,-0.2 1.1,-0.2 0.3,6e-6 0.6,0 0.9,0.1 0.3,0.1 0.6,0.2 1,0.4 l 0,0.9 -0.1,0 c -0.3,-0.3 -0.6,-0.4 -0.9,-0.6 -0.3,-0.1 -0.6,-0.2 -1,-0.2 -0.3,5e-6 -0.5,0 -0.8,0.1 -0.2,0.1 -0.4,0.2 -0.6,0.4 -0.2,0.2 -0.3,0.4 -0.4,0.7 -0.1,0.3 -0.1,0.6 -0.1,1 -10e-7,0.4 0.1,0.7 0.2,1 0.1,0.3 0.2,0.5 0.4,0.7 0.2,0.2 0.4,0.3 0.6,0.4 0.2,0.1 0.5,0.1 0.7,0.1 0.4,10e-7 0.7,-0.1 1,-0.2 0.3,-0.1 0.6,-0.3 0.9,-0.6 l 0.1,0 0,0.9 m -5.1,-4.5 -2,0 0,4.9 -0.7,0 0,-4.9 -2,0 0,-0.7 4.7,0 0,0.7 M 85.9,44.6 l 0,0.4 0,36.5 0,0.4 0.4,0 27.4,0 0.4,0 0,-0.4 0,-36.5 0,-0.4 -0.4,0 -27.4,0 -0.4,0 z m 0.9,0.9 26.5,0 0,35.6 -26.5,0 0,-35.6 z"}],G["AC.M1.RIOT"]=S("RIOT"),G["AC.M1.THREAT"]=S("?"),G["AC.M1.EMERGENCY COLLECTION EVACUATION POINT"]=S("ECEP"),G["AC.M1.EMERGENCY INCIDENT COMMAND CENTER"]=S("EICC"),G["AC.M1.EMERGENCY OPERATIONS CENTER"]=S("EOC"),G["AC.M1.EMERGENCY SHELTER"]=S("ES"),G["AC.M1.EMERGENCY STAGING AREA"]=S("SA"),G["AC.M1.EMERGENCY"]=S("EMER");G["AC.M1.COMMERCIAL"]=S("COM"),G["AC.M1.PRODUCTION"]=S("PROD"),G["AC.M1.RETAIL"]=S("RTL"),G["AC.M1.MILITARY ARMORY"]=S("RES"),G["AC.M1.GENERATION STATION"]=S("GEN"),G["CY.IC.COMMAND AND CONTROL (C2)"]=e("BC2"),G["CY.IC.HERDER"]=e("HDR"),G["CY.IC.CALLBACK DOMAIN"]=e("CBD"),G["CY.IC.ZOMBIE"]=e("ZMB"),G["CY.IC.ADVANCED PERSISTENT THREAT (APT)"]=e("APT"),G["CY.IC.APT WITH C2"]=e("AC2"),G["CY.IC.APT WITH SELF PROPAGATION"]=e("ASP"),G["CY.IC.APT WITH C2 AND SELF PROPAGATION"]=e("ACS"),G["CY.IC.APT OTHER"]=e("AOT"),G["CY.IC.NON-ADVANCED PERSISTENT THREAT (NAPT)"]=e("NAPT"),G["CY.IC.NAPT WITH C2"]=e("NC2"),G["CY.IC.NAPT WITH SELF PROPAGATION"]=e("NSP"),G["CY.IC.NAPT WITH C2 AND SELF PROPAGATION"]=e("NCS"),G["CY.IC.NAPT OTHER"]=e("NOH"),G["CY.IC.NORMAL"]=e("ON"),G["CY.IC.NETWORK OUTAGE"]=e("OUT"),G["CY.IC.UNKNOWN"]=e("UNK"),G["CY.IC.IMPAIRED"]=e("IMP"),G["CY.IC.CORE ROUTER"]=e("CRT"),G["CY.IC.ROUTER"]=e("RTR"),G["CY.IC.CROSS DOMAIN SOLUTION"]=e("CDS"),G["CY.IC.MAIL SERVER"]=e("MSR"),G["CY.IC.WEB SERVER"]=e("WSR"),G["CY.IC.DOMAIN SERVER"]=e("DSR"),G["CY.IC.FILE SERVER"]=e("FSR"),G["CY.IC.PEER-TO-PEER NODE"]=e("P2P"),G["CY.IC.FIREW ALL"]=e("FWL"),G["CY.IC.SWITCH"]=e("SWT"),G["CY.IC.HOST"]=e("HST"),G["CY.IC.VIRTUAL PRIVATE NETWORK (VPN)"]=e("VPN"),G["CY.IC.DEPARTMENT OF DEFENSE (DOD)"]=e("DOD"),G["CY.IC.GOVERNMENT"]=e("GOV"),G["CY.IC.CONTRACTOR"]=e("CTR"),G["CY.IC.SUPERVISORY CONTROL AND DATA ACQUISITION (SCADA)"]=e("SCD"),G["CY.IC.NON-GOVERNMENT"]=e("NGD"),G["CY.IC.INFECTION"]=e("INF"),G["CY.IC.DEGRADATION"]=e("DGD"),G["CY.IC.DATA SPOOFING"]=e("SPF"),G["CY.IC.DATA MANIPULATION"]=e("MNP"),G["CY.IC.EXFILTRATION"]=e("XFL"),G["CY.IC.POWER OUTAGE"]=e("POT"),G["CY.IC.NETWORK OUTAGE"]=e("NOT"),G["CY.IC.SERVICE OUTAGE"]=e("SOT"),G["CY.IC.DEVICE OUTAGE"]=e("DOT");for(var c in R._iconParts)R._iconParts.hasOwnProperty(c)&&R._iconParts[c].call(this,G,I,E,t,C,A);for(var P in G)G.hasOwnProperty(P)&&N.call(this,G[P]);return G}},function(I,E,t){var R=t(0);I.exports={AirHostile:{g:{type:"path",d:"M 45,150 L45,70 100,20 155,70 155,150"},bbox:new R.BBox({x1:45,y1:20,x2:155,y2:150})},AirFriend:{g:{type:"path",d:"M 155,150 C 155,50 115,30 100,30 85,30 45,50 45,150"},bbox:new R.BBox({x1:45,y1:30,x2:155,y2:150})},AirNeutral:{g:{type:"path",d:"M 45,150 L 45,30,155,30,155,150"},bbox:new R.BBox({x1:45,y1:30,x2:155,y2:150})},AirUnknown:{g:{type:"path",d:"M 65,150 c -55,0 -50,-90 0,-90 0,-50 70,-50 70,0 50,0 55,90 0,90"},bbox:new R.BBox({x1:25,y1:20,x2:175,y2:150})},GroundHostile:{g:{type:"path",d:"M 100,28 L172,100 100,172 28,100 100,28 Z"},bbox:new R.BBox({x1:28,y1:28,x2:172,y2:172})},GroundFriend:{g:{type:"path",d:"M25,50 l150,0 0,100 -150,0 z"},bbox:new R.BBox({x1:25,y1:50,x2:175,y2:150})},GroundNeutral:{g:{type:"path",d:"M45,45 l110,0 0,110 -110,0 z"},bbox:new R.BBox({x1:45,y1:45,x2:155,y2:155})},GroundUnknown:{g:{type:"path",d:"M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z"},bbox:new R.BBox({x1:30.75,y1:30.75,x2:169.25,y2:169.25})},LandDismountedIndividualHostile:{g:{type:"path",d:"M 99.8,37.7 158,80.5 136.1,150.3 64.4,150.7 42,81 Z"},bbox:new R.BBox({x1:42,y1:38,x2:158,y2:151})},LandDismountedIndividualFriend:{g:{type:"path",d:"m 100,45 55,25 0,60 -55,25 -55,-25 0,-60 z"},bbox:new R.BBox({x1:45,y1:45,x2:155,y2:155})},LandDismountedIndividualNeutral:{g:{type:"path",d:"m 100,45 55,25 0,60 -55,25 -55,-25 0,-60 z M 42,156 158,156"},bbox:new R.BBox({x1:45,y1:45,x2:155,y2:155})},LandDismountedIndividualUnknown:{g:{type:"path",d:"M 99.8,162 158,119.1 136.1,49.3 64.4,49 42.0,118.6 Z M 42,162 158,162"},bbox:new R.BBox({x1:42,y1:49,x2:158,y2:162})},SeaHostile:{g:{type:"path",d:"M100,28 L172,100 100,172 28,100 100,28 Z"},bbox:new R.BBox({x1:28,y1:28,x2:172,y2:172})},SeaFriend:{g:{type:"circle",cx:100,cy:100,r:60},bbox:new R.BBox({x1:40,y1:40,x2:160,y2:160})},SeaNeutral:{g:{type:"path",d:"M45,45 l110,0 0,110 -110,0 z"},bbox:new R.BBox({x1:45,y1:45,x2:155,y2:155})},SeaUnknown:{g:{type:"path",d:"M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z"},bbox:new R.BBox({x1:30.75,y1:30.75,x2:169.25,y2:169.25})},SubsurfaceHostile:{g:{type:"path",d:"M45,50 L45,130 100,180 155,130 155,50"},bbox:new R.BBox({x1:45,y1:50,x2:155,y2:180})},SubsurfaceFriend:{g:{type:"path",d:"m 45,50 c 0,100 40,120 55,120 15,0 55,-20 55,-120"},bbox:new R.BBox({x1:45,y1:50,x2:155,y2:170})},SubsurfaceNeutral:{g:{type:"path",d:"M45,50 L45,170 155,170 155,50"},bbox:new R.BBox({x1:45,y1:50,x2:155,y2:170})},SubsurfaceUnknown:{g:{type:"path",d:"m 65,50 c -55,0 -50,90 0,90 0,50 70,50 70,0 50,0 55,-90 0,-90"},bbox:new R.BBox({x1:25,y1:50,x2:175,y2:180})},PositionMarker:{g:{type:"circle",cx:100,cy:100,r:15},bbox:new R.BBox({x1:85,y1:85,x2:115,y2:115})}}},function(I,E,t){var R=t(0);I.exports=function(I,E,t){var C={},A={},e={},S={};for(var T in R._numberSIDCicons)R._numberSIDCicons.hasOwnProperty(T)&&R._numberSIDCicons[T].call(this,C,A,e,S,I,E,t);return{icons:C,m1:A,m2:e,bbox:S}}},function(I,E,t){var R=t(0);I.exports=function(I,E,t,C,A,e,S){"40"==A&&(I[110100]=[e["AC.IC.CRIMINAL.ACTIVITY.INCIDENT"]],I[110101]=[R._scale(1.5,e["ST.IC.ARREST"])],I[110102]=[e["ST.IC.ARSON/FIRE"]],I[110103]=[e["ST.IC.INDIVIDUAL"],e["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]],I[110104]=[e["ST.IC.DRIVE-BY SHOOTING"]],I[110105]=[e["ST.IC.DRUG RELATED ACTIVITIES"]],I[110106]=[e["ST.IC.EXTORTION"]],I[110107]=[e["ST.IC.GRAFFITI"]],I[110108]=[e["ST.IC.KILLING VICTIM"]],I[110109]=[e["ST.IC.POISONING"]],I[110110]=[e["ST.IC.RIOT"]],I[110111]=[R._scale(1.5,e["ST.IC.BOOBY TRAP"])],I[110112]=[e["ST.IC.HOUSE"],e["ST.M1.EVICTION"]],I[110113]=[e["ST.IC.BLACK MARKETING"]],I[110114]=[e["ST.IC.VANDALISM/LOOT/RANSACK/PLUNDER/SACK"]],I[110115]=[e["GR.IC.FF.JAIL BREAK"]],I[110116]=[e["ST.IC.ROBBERY"]],I[110117]=[e["ST.IC.THEFT"]],I[110118]=[e["ST.IC.BURGLARY"]],I[110119]=[e["ST.IC.SMUGGLING"]],I[110120]=[e["ST.IC.ROCK THROWING"]],I[110121]=[e["ST.IC.COMPOSITE LOSS"],e["ST.M1.DEAD BODY"]],I[110122]=[e["ST.IC.SABOTAGE"]],I[110123]=[R._translate(0,10,R._scale(.8,e["AC.IC.CRIMINAL.ACTIVITY.INCIDENT"])),e["AC.M1.THREAT"]],I[110200]=[e["ST.IC.BOMB"]],I[110201]=[e["ST.IC.BOMB"],e["AC.M1.THREAT"]],I[110300]=[e["ST.IC.IED"]],I[110301]=[e["ST.IC.EXPLOSION"],e["ST.IC.IED"]],I[110302]=[R._translate(0,15,R._scale(.7,[e["ST.IC.EXPLOSION"],e["ST.IC.IED"]])),e["ST.M1.PREMATURE"]],I[110303]=[e["ST.IC.IED"],e["GR.IC.FF.SUPPLY"]],I[110304]=[e["ST.IC.INDIVIDUAL"],e["ST.M1.IED"]],I[110400]=[e["AC.IC.SHOOTING"]],I[110401]=[e["ST.IC.SNIPING"]],I[110500]=[e["ST.IC.ILLEGAL DRUG OPERATION"]],I[110501]=[e["ST.IC.ILLEGAL DRUG OPERATION"],e["ST.M1.TRAFFICKING"]],I[110502]=[e["ST.IC.ILLEGAL DRUG OPERATION"],e["ST.M1.LABRATORY"]],I[110600]=[e["ST.IC.EXPLOSION"]],I[110601]=[e["ST.IC.EXPLOSION"],e["ST.IC.GRENADE"]],I[110602]=[e["ST.IC.EXPLOSION"],e["ST.IC.INCENDIARY"]],I[110603]=[e["ST.IC.EXPLOSION"],e["ST.IC.MINE"]],I[110604]=[e["ST.IC.EXPLOSION"],R._scale(.6,e["GR.EQ.MORTAR"])],I[110605]=[e["ST.IC.EXPLOSION"],R._scale(.6,e["GR.EQ.SINGLE ROCKET LAUNCHER"])],I[110606]=[R._scale(.7,e["ST.IC.BOMB"]),e["ST.IC.EXPLOSION"]],I[12e4]=[e["AC.IC.CRIMINAL.CIVIL DISTURBANCE"]],I[120100]=[e["ST.IC.DEMONSTRATION"]],I[130100]=[e["ST.IC.PATROLLING"]],I[130200]=[e["ST.IC.PSYCHOLOGICAL OPERATIONS"]],I[130201]=[e["ST.IC.RADIO AND TELEVISION PSYCHOLOGICAL OPERATIONS"]],I[130300]=[e["ST.IC.SEARCHING"]],I[130401]=[e["ST.IC.INDIVIDUAL"],e["ST.M1.WILLING"]],I[130402]=[e["ST.IC.INDIVIDUAL"],e["ST.M1.COERCED/IMPRESSED"]],I[130500]=[e["ST.IC.MINE LAYING"]],I[130600]=[e["ST.IC.SPY"]],I[130700]=[e["ST.IC.WARRANT SERVED"]],I[130800]=[e["ST.IC.INDIVIDUAL"],e["ST.M1.EXFILTRATION"]],I[130900]=[e["ST.IC.INDIVIDUAL"],e["ST.M1.INFILTRATION"]],I[131e3]=[e["ST.IC.GROUP"],e["ST.M1.MEETING"]],I[131001]=[e["ST.IC.POLLING PLACE/ELECTION"]],I[131100]=[e["ST.IC.HOUSE"],e["ST.M1.RAID"]],I[131200]=[e["GR.IC.FF.EMERGENCY OPERATION"]],I[131201]=[R._scale(.7,e["GR.IC.FF.EMERGENCY OPERATION"]),e["AC.M1.EMERGENCY COLLECTION EVACUATION POINT"]],I[131202]=[e["ST.IC.FOOD DISTRIBUTION"]],I[131203]=[R._scale(.7,e["GR.IC.FF.EMERGENCY OPERATION"]),e["AC.M1.EMERGENCY INCIDENT COMMAND CENTER"]],I[131204]=[R._scale(.7,e["GR.IC.FF.EMERGENCY OPERATION"]),e["AC.M1.EMERGENCY OPERATIONS CENTER"]],I[131205]=[e["AC.IC.EMERGENCY PUBLIC INFORMATION CENTER"]],I[131206]=[R._scale(.7,e["GR.IC.FF.EMERGENCY OPERATION"]),e["AC.M1.EMERGENCY SHELTER"]],I[131207]=[R._scale(.7,e["GR.IC.FF.EMERGENCY OPERATION"]),e["AC.M1.EMERGENCY STAGING AREA"]],I[131208]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.WATER"]],I[131300]=[e["GR.IC.EMERGENCY MEDICAL OPERATION"]],I[131301]=[e["AC.IC.EMT STATION LOCATION"]],I[131302]=[e["AC.IC.HEALTH DEPARTMENT FACILITY"]],I[131303]=[e["AC.IC.MEDICAL FACILITIES OUTPATIENT"]],I[131304]=[e["AC.IC.OPERATION/EMERGENCY MEDICAL OPERATION"]],I[131305]=[e["AC.IC.PHARMACY"]],I[131306]=[e["AC.IC.TRIAGE"]],I[131400]=[e["GR.IC.FIRE PROTECTION"]],I[131401]=[e["AC.IC.FIRE HYDRANT"]],I[131402]=[R._scale(1.5,e["GR.IC.FIRE PROTECTION"])],I[131403]=[e["AC.IC.OTHER WATER SUPPLY LOCATION"]],I[131500]=[e["GR.IC.FF.LAW ENFORCEMENT"]],I[131501]=[e["GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"]],I[131502]=[e["GR.IC.FF.BORDER PATROL"]],I[131503]=[e["GR.IC.FF.CUSTOMS SERVICE"]],I[131504]=[e["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]],I[131505]=[e["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]],I[131506]=[e["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]],I[131507]=[e["GR.IC.LAW ENFORCEMENT"]],I[131508]=[e["GR.IC.FF.PRISON"]],I[131509]=[e["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]],I[131510]=[e["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]],I[131511]=[e["SE.IC.LAW ENFORCEMENT VESSEL"]],I[131512]=[e["GR.IC.FF.US MARSHALS SERVICE"]],I[131513]=[e["ST.IC.INTERNAL SECURITY FORCE"]],I[14e4]=[e["AC.IC.FIRE EVENT"]],I[140100]=[e["AC.IC.FIRE ORIGIN"]],I[140200]=[e["AC.IC.SMOKE"]],I[140300]=[e["AC.IC.HOT SPOT"]],I[140400]=[e["AC.IC.NON-REsIdENTIAL FIRE"]],I[140500]=[e["AC.IC.REsIdENTIAL FIRE"]],I[140600]=[e["AC.IC.SCHOOL FIRE"]],I[140700]=[e["AC.IC.SPECIAL NEEDS FIRE"]],I[140800]=[e["AC.IC.WILD FIRE"]],I[150100]=[e["AC.IC.HAZARDOUS MATERIALS INCIDENT"]],I[150101]=[e["AC.IC.CHEMICAL AGENT"]],I[150102]=[e["AC.IC.CORROSIVE MATERIAL"]],I[150103]=[e["AC.IC.HAZARDOUS WHEN WET"]],I[150104]=[e["AC.IC.EXPLOSIVE MATERIAL"]],I[150105]=[e["AC.IC.FLAMMABLE GAS"]],I[150106]=[e["AC.IC.FLAMMABLE LIQUID"]],I[150107]=[e["AC.IC.FLAMMABLE SOLID"]],I[150108]=[e["AC.IC.NON-FLAMMABLE GAS"]],I[150109]=[e["AC.IC.ORGANIC PEROXIDE"]],I[150110]=[e["AC.IC.OXIDIZER"]],I[150111]=[e["AC.IC.RADIOACTIVE MATERIAL"]],I[150112]=[e["AC.IC.SPONTANEOUSLY COMBUSTIBLE MATERIAL"]],I[150113]=[e["AC.IC.TOXIC GAS"]],I[150114]=[e["AC.IC.TOXIC INFECTIOUS MATERIAL"]],I[150115]=[e["AC.IC.UNEXPLODED ORDNANCE"]],I[16e4]=[e["GR.IC.TRANSPORTATION"]],I[160100]=[e["ST.IC.HIJACKING (AIRPLANE)"]],I[160200]=[e["ST.IC.HIJACKING (BOAT)"]],I[160300]=[e["GR.EQ.TRAIN LOCOMOTIVE"]],I[160400]=[e["ST.IC.KNOWN INSURGENT VEHICLE"]],I[160500]=[e["ST.IC.EXPLOSION"],R._scale(.7,e["ST.IC.KNOWN INSURGENT VEHICLE"])],I[17e4]=[e["ST.IC.NATURAL EVENT"]],I[170100]=[e["ST.IC.GEOLOGIC"]],I[170101]=[e["AC.IC.AFTERSHOCK"]],I[170102]=[e["AC.IC.AVALANCHE"]],I[170103]=[e["AC.IC.EARTHQUAKE EPICENTER"]],I[170104]=[e["AC.IC.LANDSLIDE"]],I[170105]=[e["AC.IC.SUBSIDENCE"]],I[170106]=[e["AC.IC.VOLCANIC ERUPTION"]],I[170107]=[e["AC.IC.VOLCANIC THREAT"]],I[170108]=[e["AC.IC.CAVE ENTRANCE"]],I[170200]=[e["ST.IC.HYDRO-METEOROLOGICAL"]],I[170201]=[e["AC.IC.DROUGHT"]],I[170202]=[e["AC.IC.FLOOD"]],I[170203]=[e["AC.IC.TSUNAMI"]],I[170300]=[e["ST.IC.INFESTATION"]],I[170301]=[e["AC.IC.BIRD"]],I[170302]=[e["AC.IC.INSECT"]],I[170303]=[e["AC.IC.MICROBIAL"]],I[170304]=[e["AC.IC.REPTILE"]],I[170305]=[e["AC.IC.RODENT"]],I[180100]=[e["ST.IC.INDIVIDUAL"],e["ST.M1.LEADER"],e["ST.M2.RELIGIOUS"]],I[180200]=[e["ST.IC.INDIVIDUAL"],e["ST.M1.SPEAKER"]],E["01"]=[e["ST.M1.ASSASSINATION"]],E["02"]=[e["ST.M1.EXECUTION (WRONGFUL KILLING)"]],E["03"]=[e["ST.M1.HIJACKING/HIJACKED"]],E["04"]=[e["ST.M1.HOUSE-TO-HOUSE"]],E["05"]=[e["ST.M1.KIDNAPPING"]],E["06"]=[e["ST.M1.MURDER"]],E["07"]=[e["ST.M1.PIRACY"]],E["08"]=[e["ST.M1.RAPE"]],E["09"]=[e["ST.M1.WRITTEN PSYCHOLOGICAL OPERATIONS"]],E[10]=[e["ST.M1.PIRATE"]],E[11]=[e["ST.M1.FALSE"]],E[12]=[e["ST.M1.FIND"]],E[13]=[e["ST.M1.FOUND AND CLEARED"]],E[14]=[e["ST.M1.HOAX (DECOY)"]],E[15]=[e["ST.M1.ATTEMPTED"]],E[16]=[e["ST.M1.ACCIDENT"]],E[17]=[e["ST.M1.INCIDENT"]],E[18]=[e["ST.M1.THEFT"]])}},function(I,E,t){t(0);I.exports=function(I,E,t,R,C,A,e){"01"==C&&(I[11e4]=[A["AR.I.MILITARY"]],I[110100]=[A["AR.I.FIXED-WING DSymbol"]],I[110101]=[A["AR.I.MEDICAL EVACUATION"]],I[110102]=[A["AR.I.ATTACK/STRIKE"]],I[110103]=[A["AR.I.BOMBER"]],I[110104]=[A["AR.I.FIGHTER"]],I[110105]=[A["AR.I.FIGHTER/BOMBER"]],I[110107]=[A["AR.I.CARGO"]],I[110108]=[A["AR.I.JAMMER / ELECTRONIC COUNTER-MEASURES"]],I[110109]=[A["AR.I.TANKER"]],I[110110]=[A["AR.I.PATROL"]],I[110111]=[A["AR.I.RECONNAISSANCE"]],I[110112]=[A["AR.I.TRAINER"]],I[110113]=[A["AR.I.UTILITY"]],I[110114]=[A["AR.I.VSTOL"]],I[110115]=[A["AR.I.AIRBORNE COMMAND POST"]],I[110116]=[A["AR.I.AIRBORNE EARLY WARNING"]],I[110117]=[A["AR.I.ANTISURFACE WARFARE"]],I[110118]=[A["AR.I.ANTISUBMARINE WARFARE"]],I[110119]=[A["AR.I.COMMUNICATIONS"]],I[110120]=[A["AR.I.COMBAT SEARCH AND RESCUE"]],I[110121]=[A["AR.I.ELECTRONIC SUPPORT"]],I[110122]=[A["AR.I.GOVERNMENT"]],I[110123]=[A["AR.I.MINE COUNTERMEASURES"]],I[110124]=[A["AR.I.PERSONNEL RECOVERY DSymbol"]],I[110125]=[A["AR.I.SEARCH AND RESCUE"]],I[110126]=[A["AR.I.SPECIAL OPERATIONS FORCES"]],I[110127]=[A["AR.I.ULTRA LIGHT"]],I[110128]=[A["AR.I.PHOTOGRAPHIC RECONNAISSANCE"]],I[110129]=[A["AR.I.VIP"]],I[110130]=[A["AR.I.SUPRESSION OF ENEMY AIR DEFENCE"]],I[110131]=[A["AR.I.PASSENGER"]],I[110132]=[A["AR.I.ESCORT"]],I[110133]=[A["AR.I.ELECTRONIC ATTACK (EA)"]],I[110200]=[A["AR.I.MILITARY ROTARY WING"]],I[110300]=[A["AR.I.UNMANNED AERIAL VEHICLE"]],I[110400]=[A["AR.I.VERTICAL-TAKEOFF UAV (VT-UAV)"]],I[110500]=[A["AR.I.MILITARY BALLOON"]],I[110600]=[A["AR.I.MILITARY AIRSHIP"]],I[110700]=[A["AR.I.TETHERED LIGHTER THAN AIR"]],I[12e4]=[A["AR.I.CIVILIAN"]],I[120100]=[A["AR.I.CIVILIAN FIXED-WING DSymbol"]],I[120200]=[A["AR.I.CIVILIAN ROTARY WING"]],I[120300]=[A["AR.I.CIVILIAN UNMANNED AERIAL VEHICLE"]],I[120400]=[A["AR.I.CIVILIAN BALLOON"]],I[120500]=[A["AR.I.CIVILIAN AIRSHIP"]],I[120600]=[A["AR.I.CIVILIAN TETHERED LIGHTER THAN AIR"]],I[13e4]=[A["AR.I.WEAPON"]],I[130100]=[A["AR.I.BOMB"]],I[130200]=[A["AR.I.UNDERWATER DECOY DSymbol"]],I[14e4]=[A["AR.I.MANUAL TRACK"]],E["01"]=[A["AIR.M1.ATTACK"]],E["02"]=[A["AIR.M1.BOMBER"]],E["03"]=[A["AIR.M1.CARGO"]],E["04"]=[A["AIR.M1.FIGHTER"]],E["05"]=[A["AIR.M1.INTERCEPTOR"]],E["06"]=[A["AIR.M1.TANKER"]],E["07"]=[A["AIR.M1.UTILITY"]],E["08"]=[A["AIR.M1.VSTOL"]],E["09"]=[A["AIR.M1.PASSENGER"]],E[10]=[A["AIR.M1.ULTRA LIGHT"]],E[11]=[A["AIR.M1.AIRBORNE COMMAND POST"]],E[12]=[A["AIR.M1.AIRBORNE EARLY WARNING"]],E[13]=[A["AIR.M1.GOVERNMENT"]],E[14]=[A["AIR.M1.MEDEVAC"]],E[15]=[A["AIR.M1.ESCORT"]],E[16]=[A["AIR.M1.JAMMER / ELECTRONIC COUNTER-MEASURES"]],E[17]=[A["AIR.M1.PATROL"]],E[18]=[A["AIR.M1.RECONNAISSANCE"]],E[19]=[A["AIR.M1.TRAINER"]],E[20]=[A["AIR.M1.PHOTOGRAPHIC"]],E[21]=[A["AIR.M1.PERSONNEL RECOVERY"]],E[22]=[A["AIR.M1.ANTISUBMARINE WARFARE"]],E[23]=[A["AIR.M1.COMMUNICATIONS"]],E[24]=[A["AIR.M1.ELECTRONIC SUPPORT (ES)"]],E[25]=[A["AIR.M1.MINE COUNTERMEASURES"]],E[26]=[A["AIR.M1.SEARCH AND RESCUE"]],E[27]=[A["AIR.M1.SPECIAL OPERATIONS FORCES"]],E[28]=[A["AIR.M1.SURFACE WARFARE"]],E[29]=[A["AIR.M1.VIP"]],E[30]=[A["AIR.M1.COMBAT SEARCH AND RESCUE"]],E[31]=[A["AIR.M1.SUPRESSION OF ENEMY AIR DEFENCE"]],E[32]=[A["AIR.M1.ANTISURFACE WARFARE"]],E[33]=[A["AIR.M1.FIGHTER/BOMBER"]],E[34]=[A["AIR.M1.INTENSIVE CARE"]],E[35]=[A["AIR.M1.ELECTRONIC ATTACK (EA)"]],E[36]=[A["AIR.M1.MULTIMISSION"]],E[37]=[A["AIR.M1.HIJACKING"]],E[38]=[A["AIR.M1.ASW HELO-LAMPS"]],E[39]=[A["AIR.M1.ASW HELO - SH-60R"]],t["01"]=[A["AIR.M2.HEAVY"]],t["02"]=[A["AIR.M2.MEDIUM"]],t["03"]=[A["AIR.M2.LIGHT"]],t["04"]=[A["AIR.M2.BOOM-ONLY"]],t["05"]=[A["AIR.M2.DROUGE-ONLY"]],t["06"]=[A["AIR.M2.BOOM AND DROUGE"]],t["07"]=[A["AIR.M2.CLOSE RANGE"]],t["08"]=[A["AIR.M2.SHORT RANGE"]],t["09"]=[A["AIR.M2.MEDIUM RANGE"]],t[10]=[A["AIR.M2.LONG RANGE"]],t[11]=[A["AIR.M2.DOWNLINKED"]])}},function(I,E,t){t(0);I.exports=function(I,E,t,R,C,A,e){"02"==C&&(I[11e4]=[A["AIR.MISSILE.ICON"]],E["01"]=[A["AIR.MISSILE.M1.AIR"]],E["02"]=[A["AIR.MISSILE.M1.SURFACE"]],E["03"]=[A["AIR.MISSILE.M1.SUBSURFACE"]],E["04"]=[A["AIR.MISSILE.M1.SPACE"]],E["05"]=[A["AIR.MISSILE.M1.ANTI-BALLISTIC"]],E["06"]=[A["AIR.MISSILE.M1.BALLISTIC"]],E["07"]=[A["AIR.MISSILE.M1.CRUISE"]],E["08"]=[A["AIR.MISSILE.M1.INTERCEPTOR"]],t["01"]=[A["AIR.MISSILE.M2.AIR"]],t["02"]=[A["AIR.MISSILE.M2.SURFACE"]],t["03"]=[A["AIR.MISSILE.M2.SUBSURFACE"]],t["04"]=[A["AIR.MISSILE.M2.SPACE"]],t["05"]=[A["AIR.MISSILE.M2.LAUNCHED"]],t["06"]=[A["AIR.MISSILE.M2.MISSILE"]],t["07"]=[A["AIR.MISSILE.M2.PATRIOT"]],t["08"]=[A["AIR.MISSILE.M2.STANDARD MISSILE - 2 (SM-2)"]],t["09"]=[A["AIR.MISSILE.M2.STANDARD MISSILE - 6 (SM-6)"]],t[10]=[A["AIR.MISSILE.M2.EVOLVED SEA SPARROW MISSILE (ESSM)"]],t[11]=[A["AIR.MISSILE.M2.ROLLING AIRFRAME MISSILE (RAM)"]],t[12]=[A["AIR.MISSILE.M2.SHORT RANGE"]],t[13]=[A["AIR.MISSILE.M2.MEDIUM RANGE"]],t[14]=[A["AIR.MISSILE.M2.INTERMEDIATE RANGE"]],t[15]=[A["AIR.MISSILE.M2.LONG RANGE"]],t[16]=[A["SPACE.MISSILE.M2.SPACE"]])}},function(I,E,t){t(0);I.exports=function(I,E,t,R,C,A,e){"60"==C&&(I[110100]=[A["CY.IC.COMMAND AND CONTROL (C2)"]],I[110200]=[A["CY.IC.HERDER"]],I[110300]=[A["CY.IC.CALLBACK DOMAIN"]],I[110400]=[A["CY.IC.ZOMBIE"]],I[120100]=[A["CY.IC.ADVANCED PERSISTENT THREAT (APT)"]],I[120101]=[A["CY.IC.APT WITH C2"]],I[120102]=[A["CY.IC.APT WITH SELF PROPAGATION"]],I[120103]=[A["CY.IC.APT WITH C2 AND SELF PROPAGATION"]],I[120104]=[A["CY.IC.APT OTHER"]],I[120200]=[A["CY.IC.NON-ADVANCED PERSISTENT THREAT (NAPT)"]],I[120201]=[A["CY.IC.NAPT WITH C2"]],I[120202]=[A["CY.IC.NAPT WITH SELF PROPAGATION"]],I[120203]=[A["CY.IC.NAPT WITH C2 AND SELF PROPAGATION"]],I[120204]=[A["CY.IC.NAPT OTHER"]],I[130100]=[A["CY.IC.NORMAL"]],I[130200]=[A["CY.IC.NETWORK OUTAGE"]],I[130300]=[A["CY.IC.UNKNOWN"]],I[130400]=[A["CY.IC.IMPAIRED"]],I[140100]=[A["CY.IC.CORE ROUTER"]],I[140200]=[A["CY.IC.ROUTER"]],I[140300]=[A["CY.IC.CROSS DOMAIN SOLUTION"]],I[140400]=[A["CY.IC.MAIL SERVER"]],I[140500]=[A["CY.IC.WEB SERVER"]],I[140600]=[A["CY.IC.DOMAIN SERVER"]],I[140700]=[A["CY.IC.FILE SERVER"]],I[140800]=[A["CY.IC.PEER-TO-PEER NODE"]],I[140900]=[A["CY.IC.FIREW ALL"]],I[141e3]=[A["CY.IC.SWITCH"]],I[141100]=[A["CY.IC.HOST"]],I[141200]=[A["CY.IC.VIRTUAL PRIVATE NETWORK (VPN)"]],I[150100]=[A["CY.IC.DEPARTMENT OF DEFENSE (DOD)"]],I[150200]=[A["CY.IC.GOVERNMENT"]],I[150300]=[A["CY.IC.CONTRACTOR"]],I[150400]=[A["CY.IC.SUPERVISORY CONTROL AND DATA ACQUISITION (SCADA)"]],I[150500]=[A["CY.IC.NON-GOVERNMENT"]],I[160100]=[A["CY.IC.INFECTION"]],I[160200]=[A["CY.IC.DEGRADATION"]],I[160300]=[A["CY.IC.DATA SPOOFING"]],I[160400]=[A["CY.IC.DATA MANIPULATION"]],I[160500]=[A["CY.IC.EXFILTRATION"]],I[160600]=[A["CY.IC.POWER OUTAGE"]],I[160700]=[A["CY.IC.NETWORK OUTAGE"]],I[160800]=[A["CY.IC.SERVICE OUTAGE"]],I[160900]=[A["CY.IC.DEVICE OUTAGE"]])}},function(I,E,t){t(0);I.exports=function(I,E,t,R,C,A,e){"11"==C&&(I[11e4]=[A["AR.I.CIVILIAN"]],I[110100]=[A["GR.IC.ENVIRONMENTAL PROTECTION"]],I[110200]=[A["GR.IC.GOVERNMENT ORGANIZATION"]],I[110300]=[A["ST.IC.INDIVIDUAL"]],I[110400]=[A["ST.IC.GROUP"]],I[110500]=[A["ST.IC.KILLING VICTIM"]],I[110600]=[A["ST.IC.KILLING VICTIMS"]],I[110700]=[A["ST.IC.INDIVIDUAL"],A["ST.IC.ATTEMPTED CRIMINAL ACTIVITY"]],I[110800]=[A["ST.IC.SPY"]],I[110900]=[A["ST.IC.COMPOSITE LOSS"]],I[111e3]=[A["GR.IC.EMERGENCY MEDICAL OPERATION"]],E["01"]=[A["ST.M1.ASSASSINATION"]],E["02"]=[A["ST.M1.EXECUTION (WRONGFUL KILLING)"]],E["03"]=[A["ST.M1.MURDER"]],E["04"]=[A["ST.M1.HIJACKING/HIJACKED"]],E["05"]=[A["ST.M1.KIDNAPPING"]],E["06"]=[A["ST.M1.PIRACY"]],E["07"]=[A["ST.M1.RAPE"]],E["08"]=[A["ST.M1.CIVILIAN"]],E["09"]=[A["ST.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES"]],E[10]=[A["ST.M1.FOREIGN FIGHTERS"]],E[11]=[A["ST.M1.GANG"]],E[12]=[A["ST.M1.GOVERNMENT ORGANIZATION"]],E[13]=[A["ST.M1.LEADER"]],E[14]=[A["ST.M1.NONGOVERNMENTAL ORGANIZATION (NGO)"]],E[15]=[A["ST.M1.COERCED/IMPRESSED"]],E[16]=[A["ST.M1.WILLING RECRUIT"]],E[17]=[A["ST.M1.RELIGIOUS"]],E[18]=[A["ST.M1.TARGETED"]],E[19]=[A["ST.M1.TERRORIST"]],E[20]=[A["ST.M1.SPEAKER"]],E[21]=[A["ST.M1.ACCIDENT"]],E[22]=[A["ST.M1.COMBAT"]],E[23]=[A["ST.M1.OTHER"]],E[24]=[A["ST.M1.LOOT"]],t["01"]=[A["ST.M2.LEADER OR LEADERSHIP"]])}},function(I,E,t){var R=t(0);I.exports=function(I,E,t,C,A,e,S){if("15"==A){I[11e4]=[e["GR.EQ.WEAPON"]],I[110100]=[e["GR.EQ.RIFLE"]],I[110101]=[e["GR.EQ.RIFLE"],e["GR.EQ.SHORT RANGE"]],I[110102]=[e["GR.EQ.RIFLE"],e["GR.EQ.INTERMEDIATE RANGE"]],I[110103]=[e["GR.EQ.RIFLE"],e["GR.EQ.LONG RANGE"]],I[110200]=[e["GR.EQ.MACHINE GUN"]],I[110201]=[e["GR.EQ.MACHINE GUN"],e["GR.EQ.SHORT RANGE"]],I[110202]=[e["GR.EQ.MACHINE GUN"],e["GR.EQ.INTERMEDIATE RANGE"]],I[110203]=[e["GR.EQ.MACHINE GUN"],e["GR.EQ.LONG RANGE"]],I[110300]=[e["GR.EQ.GRENADE LAUNCHER"]],I[110301]=[e["GR.EQ.GRENADE LAUNCHER"],R._translate(0,20,e["GR.EQ.SHORT RANGE"])],I[110302]=[e["GR.EQ.GRENADE LAUNCHER"],R._translate(0,20,e["GR.EQ.INTERMEDIATE RANGE"])],I[110303]=[e["GR.EQ.GRENADE LAUNCHER"],R._translate(0,20,e["GR.EQ.LONG RANGE"])],I[110400]=[e["GR.EQ.FLAME THROWER"]],I[110500]=[e["GR.EQ.AIR DEFENCE GUN"]],I[110501]=[e["GR.EQ.AIR DEFENCE GUN"],e["GR.EQ.SHORT RANGE"]],I[110502]=[e["GR.EQ.AIR DEFENCE GUN"],e["GR.EQ.INTERMEDIATE RANGE"]],I[110503]=[e["GR.EQ.AIR DEFENCE GUN"],e["GR.EQ.LONG RANGE"]],I[110600]=[e["GR.EQ.ANTITANK GUN"]],I[110601]=[e["GR.EQ.ANTITANK GUN"],e["GR.EQ.SHORT RANGE"]],I[110602]=[e["GR.EQ.ANTITANK GUN"],e["GR.EQ.INTERMEDIATE RANGE"]],I[110603]=[e["GR.EQ.ANTITANK GUN"],e["GR.EQ.LONG RANGE"]],I[110700]=[e["GR.EQ.DIRECT FIRE GUN"]],I[110701]=[e["GR.EQ.DIRECT FIRE GUN"],e["GR.EQ.SHORT RANGE"]],I[110702]=[e["GR.EQ.DIRECT FIRE GUN"],e["GR.EQ.INTERMEDIATE RANGE"]],I[110703]=[e["GR.EQ.DIRECT FIRE GUN"],e["GR.EQ.LONG RANGE"]],I[110800]=[e["GR.EQ.RECOILLESS GUN"]],I[110801]=[e["GR.EQ.RECOILLESS GUN"],e["GR.EQ.SHORT RANGE"]],I[110802]=[e["GR.EQ.RECOILLESS GUN"],e["GR.EQ.INTERMEDIATE RANGE"]],I[110803]=[e["GR.EQ.RECOILLESS GUN"],e["GR.EQ.LONG RANGE"]],I[110900]=[e["GR.EQ.HOWITZER"]],I[110901]=[e["GR.EQ.HOWITZER"],e["GR.EQ.SHORT RANGE"]],I[110902]=[e["GR.EQ.HOWITZER"],e["GR.EQ.INTERMEDIATE RANGE"]],I[110903]=[e["GR.EQ.HOWITZER"],e["GR.EQ.LONG RANGE"]],I[111e3]=[e["GR.EQ.MISSILE LAUNCHER"]],I[111001]=[e["GR.EQ.MISSILE LAUNCHER"],e["GR.EQ.SHORT RANGE"]],I[111002]=[e["GR.EQ.MISSILE LAUNCHER"],e["GR.EQ.INTERMEDIATE RANGE"]],I[111003]=[e["GR.EQ.MISSILE LAUNCHER"],e["GR.EQ.LONG RANGE"]],I[111100]=[e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"]],I[111101]=[e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],e["GR.EQ.SHORT RANGE"]],I[111102]=[e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],e["GR.EQ.SHORT RANGE"],e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]],I[111103]=[e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],e["GR.EQ.SHORT RANGE"],e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]],I[111104]=[e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],e["GR.EQ.INTERMEDIATE RANGE"]],I[111105]=[e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],e["GR.EQ.INTERMEDIATE RANGE"],e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]],I[111106]=[e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],e["GR.EQ.INTERMEDIATE RANGE"],e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]],I[111107]=[e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],e["GR.EQ.LONG RANGE"]],I[111108]=[e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],e["GR.EQ.LONG RANGE"],e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TLAR"]],I[111109]=[e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR"],e["GR.EQ.LONG RANGE"],e["GR.EQ.AIR DEFENCE MISSILE LAUNCHER SURFACE-TO-AIR TELAR"]],I[111200]=[e["GR.EQ.ANTITANK MISSILE LAUNCHER"]],I[111201]=[e["GR.EQ.ANTITANK MISSILE LAUNCHER"],e["GR.EQ.SHORT RANGE"]],I[111202]=[e["GR.EQ.ANTITANK MISSILE LAUNCHER"],e["GR.EQ.INTERMEDIATE RANGE"]],I[111203]=[e["GR.EQ.ANTITANK MISSILE LAUNCHER"],e["GR.EQ.LONG RANGE"]],I[111300]=[e["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"]],I[111301]=[e["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],e["GR.EQ.SHORT RANGE"]],I[111302]=[e["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],e["GR.EQ.INTERMEDIATE RANGE"]],I[111303]=[e["GR.EQ.SURFACE-TO-SURFACE MISSILE LAUNCHER"],e["GR.EQ.LONG RANGE"]],I[111400]=[e["GR.EQ.MORTAR"]],I[111401]=[e["GR.EQ.MORTAR"],e["GR.EQ.SHORT RANGE"]],I[111402]=[e["GR.EQ.MORTAR"],e["GR.EQ.INTERMEDIATE RANGE"]],I[111403]=[e["GR.EQ.MORTAR"],e["GR.EQ.LONG RANGE"]],I[111500]=[e["GR.EQ.SINGLE ROCKET LAUNCHER"]],I[111501]=[e["GR.EQ.SINGLE ROCKET LAUNCHER"],e["GR.EQ.SHORT RANGE"]],I[111502]=[e["GR.EQ.SINGLE ROCKET LAUNCHER"],e["GR.EQ.INTERMEDIATE RANGE"]],I[111503]=[e["GR.EQ.SINGLE ROCKET LAUNCHER"],e["GR.EQ.LONG RANGE"]],I[111600]=[e["GR.EQ.MULTIPLE ROCKET LAUNCHER"]],I[111601]=[e["GR.EQ.MULTIPLE ROCKET LAUNCHER"],R._translate(0,10,e["GR.EQ.SHORT RANGE"])],I[111602]=[e["GR.EQ.MULTIPLE ROCKET LAUNCHER"],R._translate(0,10,e["GR.EQ.INTERMEDIATE RANGE"])],I[111603]=[e["GR.EQ.MULTIPLE ROCKET LAUNCHER"],R._translate(0,10,e["GR.EQ.LONG RANGE"])],I[111700]=[e["GR.EQ.ANTITANK ROCKET LAUNCHER"]],I[111701]=[e["GR.EQ.ANTITANK ROCKET LAUNCHER"],e["GR.EQ.SHORT RANGE"]],I[111702]=[e["GR.EQ.ANTITANK ROCKET LAUNCHER"],e["GR.EQ.INTERMEDIATE RANGE"]],I[111703]=[e["GR.EQ.ANTITANK ROCKET LAUNCHER"],e["GR.EQ.LONG RANGE"]],I[111800]=[e["GR.EQ.NON-LETHAL WEAPON"]],I[111900]=[e["GR.EQ.TASER"]],I[112e3]=[e["GR.EQ.WATER CANNON"]],I[12e4]=[e["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"]],I[120100]=[e["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],e["GR.EQ.ARMOURED VEHICLE"]],I[120101]=[e["GR.EQ.ARMOURED FIGHTING VEHICLE"]],I[120102]=[e["GR.EQ.ARMOURED FIGHTING VEHICLE (AFV) COMMAND AND CONTROL"]],I[120103]=[e["GR.EQ.ARMOURED PERSONNEL CARRIER COMBAT SERVICE SUPPORT VEHICLE"]],I[120104]=[e["GR.EQ.ARMOURED PERSONNEL CARRIER"],e["GR.EQ.MEDICAL EVACUATION"]],I[120105]=[e["GR.IC.ARMOUR"]],I[120106]=[e["GR.IC.ARMOUR"],e["GR.EQ.TANK RECOVERY VEHICLE"]],I[120107]=[e["GR.IC.ARMOUR"],e["GR.EQ.MEDICAL EVACUATION"]],I[120108]=[e["GR.EQ.ARMOURED PERSONNEL CARRIER"],e["GR.EQ.TANK RECOVERY VEHICLE"]],I[120109]=[e["GR.EQ.ARMOURED PERSONNEL CARRIER"],e["GR.EQ.COMBAT SERVICE SUPPORT VEHICLE"]],I[120110]=[e["GR.EQ.ARMOURED FIGHTING VEHICLE"],e["GR.EQ.CROSS-COUNTRY"]],I[120200]=[e["GR.EQ.TANK"]],I[120201]=[e["GR.EQ.TANK"],e["GR.EQ.LIGHT TANK"]],I[120202]=[e["GR.EQ.TANK"],e["GR.EQ.MEDIUM TANK"]],I[120203]=[e["GR.EQ.TANK"],e["GR.EQ.HEAVY TANK"]],I[120300]=[e["GR.EQ.TANK"],e["GR.EQ.TANK RECOVERY VEHICLE"]],I[120301]=[e["GR.EQ.TANK"],e["GR.EQ.LIGHT TANK"],e["GR.EQ.TANK RECOVERY VEHICLE"]],I[120302]=[e["GR.EQ.TANK"],e["GR.EQ.MEDIUM TANK"],e["GR.EQ.TANK RECOVERY VEHICLE"]],I[120303]=[e["GR.EQ.TANK"],e["GR.EQ.HEAVY TANK"],e["GR.EQ.TANK RECOVERY VEHICLE"]],I[13e4]=[e["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],R._scale(.7,e["GR.IC.ENGINEER"])],I[130100]=[e["GR.IN.IC.BRIDGE"]],I[130200]=[e["GR.EQ.UTILITY VEHICLE"],R._scale(.8,e["GR.IN.IC.BRIDGE"])],I[130300]=[e["GR.IN.IC.BRIDGE"],e["GR.EQ.FIXED BRIDGE"]],I[130400]=[e["GR.IN.IC.BRIDGE"],e["GR.M2.RIVERINE"]],I[130500]=[e["GR.IN.IC.BRIDGE"],e["GR.EQ.FOLDING GIRDER BRIDGE"]],I[130600]=[e["GR.IN.IC.BRIDGE"],e["GR.EQ.HOLLOW DECK BRIDGE"]],I[130700]=[e["GR.IC.DRILLING"]],I[130701]=[R._scale(.7,e["GR.IC.DRILLING"]),e["GR.EQ.UTILITY VEHICLE"]],I[130800]=[e["GR.EQ.EARTHMOVER"]],I[130801]=[e["GR.EQ.MULTIFUNCTIONAL EARTHMOVER/DIGGER"]],I[130900]=[e["GR.EQ.MINE CLEARING EQUIPMENT"]],I[130901]=[e["GR.EQ.MINE CLEARING EQUIPMENT"],R._translate(0,-10,e["GR.EQ.LIMITED CROSS-COUNTRY"])],I[130902]=[e["GR.EQ.MINE CLEARING EQUIPMENT"],e["GR.EQ.TANK"]],I[131e3]=[e["GR.IC.MINE LAYING"]],I[131001]=[e["GR.EQ.UTILITY VEHICLE"],R._translate(0,10,R._scale(.7,e["GR.IC.MINE LAYING"]))],I[131002]=[e["GR.EQ.ARMOURED PERSONNEL CARRIER"],e["GR.EQ.ARMORED CARRIER WITH VOLCANO"]],I[131003]=[e["GR.EQ.UTILITY VEHICLE"],e["GR.EQ.LIMITED CROSS-COUNTRY"],e["GR.EQ.ARMORED CARRIER WITH VOLCANO"]],I[131100]=[e["GR.EQ.DOZER"]],I[131101]=[e["GR.EQ.DOZER ARMORED"]],I[131200]=[e["GR.EQ.ARMOURED PERSONNEL CARRIER"],R._scale(.6,e["GR.IC.ENGINEER"])],I[131300]=[e["GR.EQ.ARMOURED PERSONNEL CARRIER"],R._scale(.6,e["GR.IC.ENGINEER"]),e["GR.EQ.ARMOURED PERSONNEL CARRIER ENGINEER RECON VEHICLE"]],I[131400]=[e["GR.EQ.UTILITY VEHICLE"],e["GR.EQ.LIMITED CROSS-COUNTRY"],e["GR.EQ.UTILITY VEHICLE BACKHOE"]],I[131500]=[e["GR.EQ.UTILITY VEHICLE"],e["GR.EQ.LIMITED CROSS-COUNTRY"],R._scale(.6,e["GR.IC.ENGINEER"])],I[131600]=[e["GR.EQ.UTILITY VEHICLE"],e["GR.EQ.CROSS-COUNTRY"],e["GR.EQ.UTILITY VEHICLE FERRY TRANSPORTER"]],I[140100]=[e["GR.EQ.UTILITY VEHICLE"]],I[140200]=[e["GR.EQ.UTILITY VEHICLE"],e["GR.EQ.MEDICAL VEHICLE"]],I[140300]=[e["GR.EQ.UTILITY VEHICLE"],e["GR.EQ.MEDICAL EVACUATION"]],I[140400]=[e["GR.EQ.UTILITY VEHICLE"],e["GR.EQ.MOBILE EMERGENCY PHYSICIAN"]],I[140500]=[e["GR.EQ.BUS"]],I[140600]=[e["GR.EQ.SEMI-TRAILER TRUCK"]],I[140601]=[e["GR.EQ.SEMI-TRAILER TRUCK"],e["GR.EQ.UTILITY VEHICLE LIGHT"]],I[140602]=[e["GR.EQ.SEMI-TRAILER TRUCK"],e["GR.EQ.UTILITY VEHICLE MEDIUM"]],I[140603]=[e["GR.EQ.SEMI-TRAILER TRUCK"],e["GR.EQ.UTILITY VEHICLE HEAVY"]],I[140700]=[e["GR.EQ.UTILITY VEHICLE"],e["GR.EQ.LIMITED CROSS-COUNTRY"]],I[140800]=[e["GR.EQ.UTILITY VEHICLE"],e["GR.EQ.CROSS-COUNTRY"]],I[140900]=[e["GR.EQ.UTILITY VEHICLE"],R._scale(.8,e["GR.IC.FF.CLASS III"])],I[141e3]=[e["GR.EQ.UTILITY VEHICLE"],R._scale(.7,e["GR.IC.WATER"])],I[141100]=[e["GR.EQ.WATER VEHICLE"],e["GR.EQ.LIMITED CROSS-COUNTRY"]],I[141200]=[e["GR.EQ.UTILITY VEHICLE"],e["GR.EQ.UTILITY VEHICLE.TOW TRUCK"]],I[141201]=[e["GR.EQ.UTILITY VEHICLE"],e["GR.EQ.UTILITY VEHICLE.TOW TRUCK"],e["GR.EQ.UTILITY VEHICLE.TOW TRUCK.LIGHT"]],I[141202]=[e["GR.EQ.UTILITY VEHICLE"],e["GR.EQ.UTILITY VEHICLE.TOW TRUCK"],e["GR.EQ.UTILITY VEHICLE.TOW TRUCK.HEAVY"]],I[150100]=[e["GR.EQ.TRAIN LOCOMOTIVE"]],I[150200]=[e["GR.EQ.RAILCAR"]],I[160100]=[e["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"]],I[160101]=[e["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],e["GR.EQ.CIVILIAN VEHICLE.LIGHT"]],I[160102]=[e["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],e["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]],I[160103]=[e["GR.EQ.CIVILIAN VEHICLE.AUTOMOBILE"],e["GR.EQ.CIVILIAN VEHICLE.HEAVY"]],I[160200]=[e["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"]],I[160201]=[e["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],e["GR.EQ.CIVILIAN VEHICLE.LIGHT"]],I[160202]=[e["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],e["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]],I[160203]=[e["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],e["GR.EQ.CIVILIAN VEHICLE.HEAVY"]],I[160300]=[e["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]],I[160301]=[e["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.LIGHT"]],I[160302]=[e["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]],I[160303]=[e["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.HEAVY"]],I[160400]=[e["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"]],I[160401]=[e["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.LIGHT"]],I[160402]=[e["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]],I[160403]=[e["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.HEAVY"]],I[160500]=[e["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"]],I[160501]=[e["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.LIGHT"]],I[160502]=[e["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.MEDIUM"]],I[160503]=[e["GR.EQ.CIVILIAN VEHICLE.JEEP TYPE VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.HEAVY"]],I[160600]=[e["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I[160601]=[e["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.LIGHT"],e["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I[160602]=[e["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.MEDIUM"],e["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I[160603]=[e["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],e["GR.EQ.CIVILIAN VEHICLE.HEAVY"],e["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I[160700]=[e["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],e["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I[160701]=[e["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],e["GR.EQ.CIVILIAN VEHICLE.LIGHT"],e["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I[160702]=[e["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],e["GR.EQ.CIVILIAN VEHICLE.MEDIUM"],e["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I[160703]=[e["GR.EQ.CIVILIAN VEHICLE.OPEN-BED TRUCK"],e["GR.EQ.CIVILIAN VEHICLE.HEAVY"],e["GR.EQ.CIVILIAN VEHICLE.TRAILER"]],I[160800]=[e["ST.IC.KNOWN INSURGENT VEHICLE"]],I[160900]=[e["ST.IC.KNOWN INSURGENT VEHICLE"],e["ST.M1.DRUG"]],I[17e4]=[e["GR.IC.FF.LAW ENFORCEMENT"]],I[170100]=[e["GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"]],I[170200]=[e["GR.IC.FF.BORDER PATROL"]],I[170300]=[e["GR.IC.FF.CUSTOMS SERVICE"]],I[170400]=[e["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]],I[170500]=[e["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]],I[170600]=[e["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]],I[170700]=[e["GR.IC.MILITARY POLICE"]],I[170800]=[e["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]],I[170900]=[e["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]],I[171e3]=[e["SE.IC.LAW ENFORCEMENT VESSEL"]],I[171100]=[e["GR.IC.FF.US MARSHALS SERVICE"]],I[18e4]=[e["GR.EQ.PACK ANIMAL"]],I[19e4]=[e["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],e["GR.EQ.MISSILE SUPPORT"]],I[190100]=[e["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],e["GR.EQ.MISSILE TRANSLOADER"]],I[190200]=[e["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],e["GR.EQ.MISSILE TRANSPORTER"]],I[190300]=[e["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],e["GR.EQ.MISSILE CRANE/LOADING DEVICE"]],I[190400]=[e["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],e["GR.EQ.MISSILE PROPELLANT TRANSPORTER"]],I[190500]=[e["GR.EQ.ARMOURED PROTECTED VEHICLE WITH LIMITED CROSS COUNTRY MOBILITY"],e["GR.EQ.MISSILE WARHEAD TRANSPORTER"]],I[200100]=[e["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]],I[200200]=[e["ST.IC.BOMB"]],I[200300]=[e["ST.IC.BOOBY TRAP"]],I[200400]=[e["GR.EQ.CBRN EQUIPMENT"]],I[200500]=[e["GR.EQ.COMPUTER SYSTEM"]],I[200600]=[e["GR.EQ.COMMAND LAUNCH EQUIPMENT (CLE)"]],I[200700]=[e["GR.EQ.GENERATOR SET"]],I[200800]=[e["GR.EQ.GROUND-BASED MIDCOURSE DEFENSE (GMD) FIRE CONTROL (GFC) CENTER"]],I[200900]=[e["GR.EQ.IN-FLIGHT INTERCEPTOR COMMUNICATIONS SYSTEM (IFICS) DATA TERMINAL (IDT)"]],I[201e3]=[e["GR.EQ.LASER"]],I[201100]=[e["GR.EQ.PSYCHOLOGICAL OPERATIONS EQUIPMENT"]],I[201200]=[e["GR.IC.SUSTAINMENT"]];I[201300]=[e["GR.EQ.TENT"]],I[201400]=[e["GR.EQ.UNIT DEPLOYMENT SHIPMENTS"]],I[201500]=[e["GR.IC.EMERGENCY MEDICAL OPERATION"]],I[201501]=[e["AR.I.MILITARY ROTARY WING"],e["AIR.M1.MEDEVAC"]],I[210100]=[e["GR.EQ.LAND MINE"]],I[210200]=[e["GR.EQ.ANTIPERSONNEL LAND MINE"]],I[210300]=[e["GR.EQ.ANTITANK MINE"]],I[210400]=[e["GR.EQ.IMPROVISED EXPLOSIVE DEVICE"]],I[210500]=[e["GR.EQ.ANTIPERSONNEL LAND MINE LESS THAN LETHAL"]],I[220100]=[e["GR.EQ.SENSOR"]],I[220200]=[e["GR.EQ.SENSOR EMPLACED"]],I[220300]=[e["GR.EQ.RADAR"]],I[23e4]=[e["GR.IC.FF.EMERGENCY OPERATION"]],I[230100]=[e["GR.EQ.CIVILIAN VEHICLE.UTILITY VEHICLE"],e["GR.M1.MEDEVAC"]],I[230200]=[e["GR.IC.FIRE PROTECTION"]],I[24e4]=[e["SP.I.MANUAL TRACK"]],E["01"]=[e["GR.M1.BIOLOGICAL"]],E["02"]=[e["GR.M1.CHEMICAL"]],E["03"]=[e["GR.M1.EARLY WARNING RADAR"]],E["04"]=[e["GR.M1.INTRUSION"]],E["05"]=[e["GR.M1.NUCLEAR"]],E["06"]=[e["GR.M1.RADIOLOGICAL"]],E["07"]=[e["GR.M1.UPGRADED EARLY WARNING RADAR"]],E["08"]=[e["AIR.M1.HIJACKING"]],E["09"]=[e["GR.M1.CIVILIAN"]];var T={11e4:140,110100:140,110101:140,110102:140,110103:140,110200:140,110201:140,110202:140,110203:140,110300:140,110301:140,110302:140,110303:140,110400:135,110500:140,110501:140,110502:140,110503:140,110600:140,110601:140,110602:140,110603:140,110700:140,110701:140,110702:140,110703:140,110800:140,110801:140,110802:140,110803:140,110900:140,110901:140,110902:140,110903:140,111e3:140,111001:140,111002:140,111003:140,111100:140,111101:140,111102:140,111103:140,111104:140,111105:140,111106:140,111107:140,111108:140,111109:140,111200:140,111201:140,111202:140,111203:140,111300:140,111301:140,111302:140,111303:140,111400:140,111401:140,111402:140,111403:140,111500:140,111501:140,111502:140,111503:140,111600:140,111601:140,111602:140,111603:140,111701:140,111702:140,111703:140,111800:140,111900:140,112e3:140,12e4:129,120100:129,120101:130,120102:130,120103:130,120104:130,120105:120,120106:120,120107:120,120108:130,120109:130,120110:140,120200:130,120201:130,120202:130,120203:130,120300:130,120301:130,120302:130,120303:130,13e4:129,130100:115,130200:130,130300:130,130400:135,130500:120,130600:120,130700:120,130701:130,130800:130,130801:130,130900:120,130901:130,130902:130,131e3:115,131001:130,131002:130,131003:140,131100:130,131101:130,131200:130,131300:130,131400:140,131500:140,131600:140,140100:130,140200:130,140300:130,140400:130,140500:130,140600:140,140601:140,140602:140,140603:140,140700:140,140800:140,140900:130,141e3:130,141100:140,141200:130,141201:130,141202:130,150100:130,150200:140,160100:132.5,160101:132.5,160102:132.5,160103:132.5,160200:132.5,160201:132.5,160202:132.5,160203:132.5,160300:132.5,160301:132.5,160302:132.5,160303:132.5,160400:132.5,160401:132.5,160402:132.5,160403:132.5,160500:132.5,160501:132.5,160502:132.5,160503:132.5,160600:132.5,160601:132.5,160602:132.5,160603:132.5,160700:132.5,160701:132.5,160702:132.5,160703:132.5,160800:115,160900:115,17e4:149.03125,170100:118.75,170200:133.21875,170300:135.21875,170400:118.75,170500:138.1875,170600:118.75,170700:118.75,170800:118,170900:118,171e3:135,171100:135,18e4:125,19e4:129,190100:129,190200:129,190300:129,190400:129,190500:129,200100:140,200200:118.75,200300:120,200400:140,200500:132,200600:118.75,200700:118.75,200800:118.75,200900:119.36222839355469,201e3:145,201100:120,201200:118,201300:124.36222076416016,201400:118.75,201500:140,201501:115,210100:122,210200:122,210300:122,210400:118.75,210500:122,220100:140,220200:136,220300:120,23e4:135,230100:132.5,230200:120,24e4:118.75};for(var N in T)T.hasOwnProperty(N)&&(C[N]={y2:T[N]})}}},function(I,E,t){var R=t(0);I.exports=function(I,E,t,C,A,e,S){"20"==A&&(I[11e4]=[e["AR.I.MILITARY"]],I[110100]=[e["GR.IN.IC.AIRCRAFT PRODUCTION & ASSEMBLY"]],I[110200]=[R._scale(1.4,e["GR.IC.FF.CLASS V"])],I[110300]=[e["GR.IC.FF.CLASS V"],e["GR.IC.FF.SUPPLY"]],I[110400]=[e["GR.EQ.TANK"]],I[110500]=[e["ST.IC.BLACK LIST LOCATION"]],I[110600]=[e["GR.IC.CBRN"]],I[110700]=[e["GR.EQ.DOZER"]],I[110701]=[e["GR.IN.IC.BRIDGE"]],I[110800]=[R._scale(1.4,e["GR.IC.FF.CLASS IX"])],I[110900]=[e["AR.I.GOVERNMENT"]],I[111e3]=[e["ST.IC.GRAY LIST LOCATION"]],I[111100]=[e["ST.IC.MASS GRAVE LOCATION"]],I[111200]=[e["GR.IN.IC.MILITARY/CIVILIAN.MATERIEL"],e["GR.IC.FF.SUPPLY"]],I[111300]=[e["GR.IN.IC.MINE"]],I[111400]=[e["GR.EQ.MISSILE LAUNCHER"]],I[111500]=[R._scale(.8,e["AC.IC.RADIOACTIVE MATERIAL"])],I[111600]=[e["GR.IN.IC.MILITARY/CIVILIAN.PRINTED MEDIA"]],I[111700]=[e["ST.IC.SAFE HOUSE"]],I[111800]=[e["ST.IC.WHITE LIST LOCATION"]],I[111900]=[e["GR.EQ.TENT"]],I[111901]=[e["GR.EQ.TENT"],e["ST.M1.DISPLACED PERSONS, REFUGEES, AND EVACUEES"]],I[111902]=[e["GR.EQ.TENT"],e["GR.M1.TRAINING CAMP"]],I[112e3]=[e["GR.IN.IC.INDUSTRIAL SITE"],e["GR.IN.IC.WAREHOUSE/STORAGE FACILITY"]],I[112100]=[e["GR.IC.FF.LAW ENFORCEMENT"]],I[112101]=[e["GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"]],I[112102]=[e["GR.IC.FF.BORDER PATROL"]],I[112103]=[e["GR.IC.FF.CUSTOMS SERVICE"]],I[112104]=[e["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]],I[112105]=[e["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]],I[112106]=[e["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]],I[112107]=[e["GR.IC.LAW ENFORCEMENT"]],I[112108]=[e["GR.IC.FF.PRISON"]],I[112109]=[e["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]],I[112110]=[e["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]],I[112111]=[e["SE.IC.LAW ENFORCEMENT VESSEL"]],I[112112]=[e["GR.IC.FF.US MARSHALS SERVICE"]],I[112200]=[e["GR.IC.FF.EMERGENCY OPERATION"]],I[112201]=[e["GR.IC.FIRE PROTECTION"]],I[112202]=[e["GR.IC.EMERGENCY MEDICAL OPERATION"]],I[120100]=[e["GR.IN.IC.AGRICULTURE AND FOOD INFRASTRUCTURE"]],I[120101]=[e["GR.IN.IC.AGRICULTURAL LABORATORY"]],I[120102]=[e["GR.IN.IC.ANIMAL FEEDLOT"]],I[120103]=[e["ST.IC.FOOD DISTRIBUTION"],e["AC.M1.COMMERCIAL"]],I[120104]=[e["GR.IN.IC.FARM/RANCH"]],I[120105]=[e["ST.IC.FOOD DISTRIBUTION"]],I[120106]=[e["ST.IC.FOOD DISTRIBUTION"],e["AC.M1.PRODUCTION"]],I[120107]=[e["ST.IC.FOOD DISTRIBUTION"],e["AC.M1.RETAIL"]],I[120108]=[e["GR.IN.IC.GRAIN STORAGE"]],I[120200]=[e["AC.IC.BANKING FINANCE AND INSURANCE INFRASTRUCTURE"]],I[120201]=[e["GR.IN.IC.ATM"]],I[120202]=[e["GR.IN.IC.BANK"]],I[120203]=[e["GR.IN.IC.BULLION STORAGE"]],I[120204]=[e["GR.IN.IC.INFRASTRUCTURE.BANKING FINANCE AND INSURANCE  INFRASTRUCTURE.ECONOMIC INFRASTRUCTURE ASSET"]],I[120205]=[e["GR.IN.IC.FEDERAL RESERVE BANK"]],I[120206]=[e["GR.IN.IC.FINANCIAL EXCHANGE"]],I[120207]=[e["GR.IN.IC.FINANCIAL SERVICES, OTHER"]],I[120300]=[e["GR.IN.IC.COMMERCIAL INFRASTRUCTURE"]],I[120301]=[e["GR.IN.IC.CHEMICAL PLANT"]],I[120302]=[e["GR.IN.IC.FIREARMS MANUFACTURER"]],I[120303]=[e["GR.IN.IC.FIREARMS RETAILER"]],I[120304]=[e["GR.IN.IC.HAZARDOUS MATERIAL PRODUCTION"]],I[120305]=[e["GR.IN.IC.HAZARDOUS MATERIAL STORAGE"]],I[120306]=[e["GR.IN.IC.INDUSTRIAL SITE"]],I[120307]=[e["GR.IN.IC.LANDFILL"]],I[120308]=[e["GR.IN.IC.PHARMACEUTICAL MANUFACTURER"]],I[120309]=[e["GR.IN.IC.CONTAMINATED HAZARDOUS WASTE SITE"]],I[120310]=[e["GR.IN.IC.TOXIC RELEASE INVENTORY"]],I[120400]=[e["GR.IN.IC.EDUCATIONAL FACILITIES INFRASTRUCTURE"]],I[120401]=[e["GR.IN.IC.COLLEGE/UNIVERSITY"]],I[120402]=[e["GR.IN.IC.SCHOOL"]],I[120500]=[R._scale(1.5,e["GR.IN.IC.ELECTRIC POWER"])],I[120501]=[e["GR.IN.IC.ELECTRIC POWER"]],I[120502]=[e["GR.IN.IC.ELECTRIC POWER"],e["AC.M1.GENERATION STATION"]],I[120503]=[e["GR.IN.IC.NATURAL GAS FACILITY"]],I[120504]=[R._scale(1.5,e["GR.IC.FF.CLASS III"])],I[120505]=[e["GR.IC.FF.CLASS III"]],I[120506]=[e["GR.IN.IC.PROPANE FACILITY"]],I[120600]=[e["GR.IN.IC.GOVERNMENT SITE INFRASTRUCTURE"]],I[120701]=[e["GR.IC.FF.MEDICAL"]],I[120702]=[e["GR.IC.FF.MEDICAL"],e["GR.IC.FF.MEDICAL TREATMENT FACILITY"]],I[120800]=[e["GR.IN.IC.MILITARY INFRASTRUCTURE"]],I[120801]=[e["GR.IN.IC.BASE"],e["AC.M1.MILITARY ARMORY"]],I[120802]=[e["GR.IN.IC.BASE"]],I[120900]=[e["GR.IN.IC.POSTAL SERVICE INFRASTRUCTURE"]],I[120901]=[e["GR.IN.IC.POSTAL DISTRIBUTION CENTER"]],I[120902]=[e["GR.IN.IC.POST OFFICE"]],I[121e3]=[e["GR.IN.IC.PUBLIC VENUES INFRASTRUCTURE"]],I[121001]=[e["GR.IN.IC.ENCLOSED FACITLITY (PUBLIC VENUE)"]],I[121002]=[e["GR.IN.IC.OPEN FACILITY (OPEN VENUE)"]],I[121003]=[e["GR.IN.IC.RECREATIONAL AREA"]],I[121004]=[e["GR.IN.IC.RELIGIOUS INSTITUTION"]],I[121100]=[e["GR.IN.IC.SPECIAL NEEDS INFRASTRUCTURE"]],I[121101]=[e["GR.IN.IC.ADULT DAY CARE"]],I[121102]=[e["GR.IN.IC.CHILD DAY CARE"]],I[121103]=[e["GR.IN.IC.ELDER CARE"]],I[121200]=[e["GR.IN.IC.TELECOMMUNICATIONS INFRASTRUCTURE"]],I[121201]=[e["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]],I[121202]=[e["GR.IN.IC.INFRASTRUCTURE.TELECOMMUNICATIONS INFRASTRUCTURE.TELECOMMUNICATIONS"]],I[121203]=[e["GR.IN.IC.TELECOMMUNICATIONS TOWER"]],I[121300]=[R._scale(1.5,e["GR.IC.TRANSPORTATION"])],I[121301]=[e["GR.IC.TRANSPORTATION"],e["GR.IC.AIRPORT OF DEBARKATION"]],I[121302]=[e["GR.IN.IC.AIR TRAFFIC CONTROL FACILITY"]],I[121303]=[e["GR.EQ.CIVILIAN VEHICLE.MULTIPLE PASSENGER VEHICLE"]],I[121304]=[e["SE.IC.FERRY"]],I[121305]=[e["GR.IN.IC.HELICOPTER LANDING SITE"]],I[121306]=[e["GR.IC.MAINTENANCE"]],I[121307]=[e["GR.IC.RAILHEAD"]],I[121308]=[e["GR.IN.IC.REST STOP"]],I[121309]=[e["GR.IC.TRANSPORTATION"],e["GR.M1.NAVAL"]],I[121310]=[e["GR.IC.NAVAL"],e["GR.M1.YARD"]],I[121311]=[e["GR.IN.IC.TOLL FACILITY"]],I[121312]=[e["GR.IN.IC.TRAFFIC INSPECTION FACILITY"]],I[121313]=[e["GR.IN.IC.TUNNEL"]],I[121400]=[e["GR.IC.WATER"]],I[121401]=[e["GR.IN.IC.CONTROL VALVE"]],I[121402]=[e["GR.IN.IC.DAM"]],I[121403]=[e["GR.IN.IC.DISCHARGE OUTFALL"]],I[121404]=[e["GR.IN.IC.GROUND WATER WELL"]],I[121405]=[e["GR.IN.IC.PUMPING STATION"]],I[121406]=[e["GR.IN.IC.RESERVOIR"]],I[121407]=[e["GR.IN.IC.STORAGE TOWER"]],I[121408]=[e["GR.IN.IC.SURFACE WATER INTAKE"]],I[121409]=[e["GR.IN.IC.WASTEWATER TREATMENT FACILITY"]],I[121410]=[e["GR.IC.WATER"]],I[121411]=[e["GR.IC.WATER PURIFICATION"]],E["01"]=[e["GR.M1.BIOLOGICAL"]],E["02"]=[e["GR.M1.CHEMICAL"]],E["03"]=[e["GR.M1.NUCLEAR"]],E["04"]=[e["GR.IN.M1.RADIOLOGICAL"]],E["05"]=[e["GR.M1.DECONTAMINATION"]],E["06"]=[e["GR.IN.M1.COAL"]],E["07"]=[e["GR.IN.M1.GEOTHERMAL"]],E["08"]=[e["GR.IN.M1.HYDROELECTRIC"]],E["09"]=[e["GR.IN.M1.NATURAL GAS"]],E[10]=[e["GR.IN.M1.PETROLEUM"]],E[11]=[e["GR.IN.M1.CIVILIAN"]],E[12]=[e["GR.IN.M1.CIVILIAN TELEPHONE"]],E[13]=[e["GR.IN.M1.CIVILIAN TELEVISION"]],t["01"]=[e["GR.IN.M2.CHEMICAL & BIOLOGICAL WARFARE"]],t["02"]=[e["GR.IN.M2.CHEMICAL WARFARE PRODUCTION"]],t["03"]=[e["GR.IN.M2.NUCLEAR WARFARE PRODUCTION"]],t["04"]=[e["GR.IN.M2.RADIOLOGICAL WARFARE PRODUCTION"]],t["05"]=[e["GR.IN.M2.ATOMIC ENERGY REACTOR"]],t["06"]=[e["GR.IN.M2.NUCLEAR MATERIAL PRODUCTION"]],t["07"]=[e["GR.IN.M2.NUCLEAR MATERIAL STORAGE"]],t["08"]=[e["GR.IN.M2.WEAPONS GRADE PRODUCTION"]])}},function(I,E,t){var R=t(0);I.exports=function(I,E,t,C,A,e,S){if("10"==A){I[11e4]=[e["GR.IC.COMMAND AND CONTROL"]],I[110100]=[e["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]],I[110200]=[e["GR.IC.CIVIL AFFAIRS"]],I[110300]=[e["GR.IC.CIVIL-MILITARY-COOPERATION"]],I[110400]=[e["GR.IC.INFORMATION OPERATIONS"]],I[110500]=[e["GR.IC.LIAISON"]],I[110600]=[e["GR.IC.MILITARY INFORMATION SUPPORT OPERATIONS (MISO)"]],I[110601]=[e["GR.IC.MILITARY INFORMATION SUPPORT OPERATIONS (MISO)"],e["GR.IC.FF.BROADCAST TRANSMITTER ANTENNA"]],I[110700]=[e["GR.IC.RADIO"]],I[110800]=[e["GR.IC.RADIO RELAY"]],I[110900]=[e["GR.IC.RADIO TELETYPE CENTRE"]],I[111e3]=[e["GR.IC.FF.SIGNAL"]],I[111001]=[e["GR.IC.FF.SIGNAL"],e["GR.IC.RADIO"]],I[111002]=[e["GR.IC.FF.SIGNAL"],e["GR.IC.RADIO RELAY"]],I[111003]=[e["GR.IC.FF.SIGNAL"],e["GR.IC.RADIO TELETYPE CENTRE"]],I[111004]=[e["GR.IC.FF.SIGNAL"],e["SP.I.FF.SATELLITE"]],I[111005]=[e["GR.IC.FF.SIGNAL"],e["GR.IC.VIDEO IMAGERY"]],I[111100]=[e["SP.I.FF.SATELLITE"]],I[111200]=[e["GR.IC.VIDEO IMAGERY"]],I[120100]=[e["GR.IC.FF.AIR ASSAULT WITH ORGANIC LIFT"]],I[120200]=[e["GR.IC.AIR TRAFFIC SERVICES"]],I[120300]=[e["GR.IC.FF.AMPHIBIOUS"]],I[120400]=[e["GR.IC.FF.ANTITANK/ANTIARMOUR"]],I[120401]=[e["GR.IC.FF.ANTITANK/ANTIARMOUR"],e["GR.IC.ARMOUR"]],I[120402]=[e["GR.IC.FF.ANTITANK/ANTIARMOUR"],e["GR.IC.FF.MOTORIZED"]],I[120500]=[e["GR.IC.ARMOUR"]],I[120501]=[e["GR.IC.ARMOUR"],e["GR.IC.FF.RECONNAISSANCE"]],I[120502]=[e["GR.IC.ARMOUR"],e["GR.IC.FF.AMPHIBIOUS"]],I[120600]=[e["GR.IC.AVIATION ROTARY WING"]],I[120601]=[e["GR.IC.AVIATION ROTARY WING"],e["GR.IC.FF.RECONNAISSANCE"]],I[120700]=[e["GR.IC.AVIATION COMPOSITE"]],I[120800]=[e["GR.IC.AVIATION FIXED WING"]],I[120801]=[e["GR.IC.AVIATION FIXED WING"],e["GR.IC.FF.RECONNAISSANCE"]],I[120900]=[e["GR.IC.COMBAT"]],I[121e3]=[e["GR.IC.COMBINED ARMS"]],I[121100]=[e["GR.IC.FF.INFANTRY"]],I[121101]=[e["GR.IC.FF.INFANTRY"],e["GR.IC.FF.AMPHIBIOUS"]],I[121102]=[e["GR.IC.FF.INFANTRY"],e["GR.IC.ARMOUR"]],I[121103]=[e["GR.IC.FF.INFANTRY"],e["GR.IC.FF.MAIN GUN SYSTEM"]],I[121104]=[e["GR.IC.FF.INFANTRY"],e["GR.IC.FF.MOTORIZED"]],I[121105]=[e["GR.IC.FF.INFANTRY"],e["GR.IC.ARMOUR"],e["GR.IC.FF.MAIN GUN SYSTEM"]],I[121200]=[e["GR.IC.OBSERVER/OBSERVATION"]],I[121300]=[e["GR.IC.FF.RECONNAISSANCE"]],I[121301]=[e["GR.IC.FF.RECONNAISSANCE"],e["GR.IC.SURVEILLANCE"]],I[121302]=[e["GR.IC.FF.RECONNAISSANCE"],e["GR.IC.FF.AMPHIBIOUS"]],I[121303]=[e["GR.IC.FF.RECONNAISSANCE"],e["GR.IC.FF.MOTORIZED"]],I[121400]=[e["GR.IC.SEA-AIR-LAND"]],I[121500]=[e["GR.IC.SNIPER"]],I[121600]=[e["GR.IC.SURVEILLANCE"]],I[121700]=[e["GR.IC.SPECIAL FORCES"]],I[121800]=[e["GR.IC.SPECIAL OPERATIONS FORCES"]],I[121801]=[e["GR.IC.FIXED WING MISO"]],I[121802]=[e["GR.IC.SPECIAL OPERATIONS FORCES"],e["GR.IC.FF.INFANTRY"]],I[121803]=[e["SE.IC.COMBATANT"],e["GR.M1.SPECIAL OPERATIONS FORCES (SOF)"]],I[121804]=[e["SU.IC.SUBMARINE NUCLEAR PROPULSION"],e["GR.M1.SPECIAL OPERATIONS FORCES (SOF)"]],I[121805]=[e["SOF.IC.UNDERWATER DEMOLITION TEAM"]],I[121900]=[e["GR.IC.UNMANNED SYSTEMS"]],I[130100]=[e["GR.IC.FF.AIR DEFENCE"]],I[130101]=[e["GR.IC.FF.AIR DEFENCE"],e["GR.IC.FF.MAIN GUN SYSTEM"]],I[130102]=[e["GR.IC.FF.AIR DEFENCE"],e["GR.IC.AIR DEFENSE MISSILE"]],I[130200]=[e["GR.IC.FIELD ARTILLERY"],e["GR.IC.FF.RECONNAISSANCE"],e["GR.IC.AVIATION ROTARY WING"],e["GR.M1.NAVAL"]],I[130300]=[e["GR.IC.FIELD ARTILLERY"]],I[130301]=[R._scale(.8,e["GR.IC.FIELD ARTILLERY"]),e["GR.IC.ARMOUR"]],I[130302]=[R._scale(.8,e["GR.IC.FIELD ARTILLERY"]),e["GR.IC.ARMOUR"],e["GR.IC.FF.RECONNAISSANCE"]],I[130400]=[e["GR.IC.FIELD ARTILLERY OBSERVER"]],I[130500]=[e["GR.IC.JOINT FIRE SUPPORT"]],I[130600]=[e["GR.IC.METEOROLOGICAL"]],I[130700]=[e["GR.IC.MISSILE"]],I[130800]=[e["GR.IC.MORTAR"]],I[130801]=[e["GR.IC.MORTAR"],e["GR.M2.TRACKED"]],I[130802]=[e["GR.IC.MORTAR"],e["GR.M2.TRUCK"]],I[130803]=[e["GR.IC.MORTAR"],e["GR.M2.TOWED"]],I[130900]=[e["GR.IC.SURVEY"]],I[140100]=[e["GR.IC.CBRN"]],I[140101]=[e["GR.IC.CBRN"],e["GR.IC.ARMOUR"]],I[140102]=[e["GR.IC.CBRN"],e["GR.IC.FF.MOTORIZED"]],I[140103]=[e["GR.IC.CBRN"],e["GR.IC.FF.RECONNAISSANCE"]],I[140104]=[e["GR.IC.CBRN"],e["GR.IC.FF.RECONNAISSANCE"],e["GR.IC.ARMOUR"]],I[140105]=[e["GR.IC.CBRN"],e["GR.IC.FF.RECONNAISSANCE"],e["GR.IC.FF.MOTORIZED"]],I[140200]=[e["GR.IC.COMBAT SUPPORT (MANOEUVRE ENHANCEMENT)"]],I[140300]=[e["GR.IC.CRIMINAL INVESTIGATION DIVISION"]],I[140400]=[e["SU.IC.DIVER, CIVILIAN"]],I[140500]=[e["GR.IC.DOG"]],I[140600]=[e["GR.IC.DRILLING"]],I[140700]=[e["GR.IC.ENGINEER"]],I[140701]=[R._scale(.7,e["GR.IC.ENGINEER"]),e["GR.IC.ARMOUR"]],I[140702]=[e["GR.IC.ENGINEER"],e["GR.IC.FF.MOTORIZED"]],I[140703]=[e["GR.IC.ENGINEER"],e["GR.IC.FF.RECONNAISSANCE"]],I[140800]=[e["GR.IC.EXPLOSIVE ORDNANCE DISPOSAL"]],I[140900]=[e["GR.IC.FIELD CAMP CONSTRUCTION"]],I[141e3]=[e["GR.IC.FIRE PROTECTION"]],I[141100]=[e["GR.IC.GEOSPATIAL SUPPORT"]],I[141200]=[e["GR.IC.MILITARY POLICE"]],I[141300]=[e["GR.IC.MINE"]],I[141400]=[e["GR.IC.MINE CLEARING"]],I[141500]=[e["GR.IC.MINE LAUNCHING"]],I[141600]=[e["GR.IC.MINE LAYING"]],I[141700]=[e["GR.IC.SECURITY"]],I[141701]=[e["GR.IC.SECURITY"],e["GR.IC.ARMOUR"]],I[141702]=[e["GR.IC.SECURITY"],e["GR.IC.FF.MOTORIZED"]],I[141800]=[e["AR.I.SEARCH AND RESCUE"]],I[141900]=[e["GR.IC.SECURITY POLICE (AIR)"]],I[142e3]=[e["GR.IC.SHORE PATROL"]],I[142100]=[e["GR.IC.TOPOGRAPHIC"]],I[150100]=[e["GR.IC.FF.ANALYSIS"]],I[150200]=[e["GR.IC.COUNTER-INTELLIGENCE"]],I[150300]=[e["GR.IC.FF.DIRECTION FINDING"]],I[150400]=[e["GR.IC.ELECTRONIC RANGING"]],I[150500]=[e["GR.IC.ELECTRONIC WARFARE"]],I[150501]=[e["GR.IC.ELECTRONIC WARFARE"],e["GR.IC.FF.ANALYSIS"]],I[150502]=[e["GR.IC.ELECTRONIC WARFARE"],e["GR.IC.FF.DIRECTION FINDING"]],I[150503]=[e["GR.IC.ELECTRONIC WARFARE"],e["GR.IC.FF.INTERCEPT"]],I[150504]=[e["GR.IC.ELECTRONIC WARFARE"],e["GR.IC.FF.JAMMING"]],I[150505]=[e["GR.IC.ELECTRONIC WARFARE"],e["GR.IC.FF.SEARCH"]],I[150600]=[e["GR.IC.FF.INTERCEPT"]],I[150700]=[e["GR.IC.INTERROGATION"]],I[150800]=[e["GR.IC.FF.JAMMING"]],I[150900]=[e["GR.IC.JOINT INTELLIGENCE CENTRE"]],I[151e3]=[e["GR.IC.MILITARY INTELLIGENCE"]],I[151100]=[e["GR.IC.FF.SEARCH"]],I[151200]=[e["GR.IC.SENSOR"]],I[16e4]=[e["GR.IC.SUSTAINMENT"]],I[160100]=[e["GR.IC.ADMINISTRATIVE"]],I[160200]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS ALL"]],I[160300]=[e["GR.IC.TRANSPORTATION"],e["GR.IC.AIRPORT OF DEBARKATION"]],I[160400]=[e["GR.IC.AMMUNITION"]],I[160500]=[e["GR.IC.BAND"]],I[160600]=[e["GR.IC.COMBAT SERVICE SUPPORT"]],I[160700]=[e["GR.IC.FINANCE"]],I[160800]=[e["GR.IC.JUDGE ADVOCATE GENERAL"]],I[160900]=[e["GR.IC.LABOUR"]],I[161e3]=[e["GR.IC.LAUNDRY/BATH"]],I[161100]=[e["GR.IC.MAINTENANCE"]],I[161200]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.MATERIEL"]],I[161300]=[e["GR.IC.FF.MEDICAL"]],I[161400]=[e["GR.IC.FF.MEDICAL TREATMENT FACILITY"]],I[161500]=[e["GR.IC.MORALE, WELFARE, AND RECREATION"]],I[161600]=[e["GR.IC.MORTUARY AFFAIRS"]],I[161700]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS MULTIPLE"]],I[161800]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.NATO SUPPLY CLASS I"]],I[161900]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.NATO SUPPLY CLASS II"]],I[162e3]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS III"]],I[162100]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.NATO SUPPLY CLASS IV"]],I[162200]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS V"]],I[162300]=[e["GR.IC.ORDNANCE"]],I[162400]=[e["GR.IC.PERSONNEL SERVICES"]],I[162500]=[e["GR.IC.PETROLEUM OIL LUBRICANTS"]],I[162600]=[e["GR.IC.PIPELINE"]],I[162700]=[e["GR.IC.POSTAL"]],I[162800]=[e["GR.IC.PUBLIC AFFAIRS"]],I[162900]=[e["GR.IC.QUARTERMASTER"]],I[163e3]=[e["GR.IC.RAILHEAD"]],I[163100]=[e["GR.IC.RELIGIOUS SUPPORT"]],I[163200]=[e["GR.IC.REPLACEMENT HOLDING UNIT"]],I[163300]=[e["GR.IC.SEAPORT OF DEBARKATION"]],I[163400]=[e["GR.IC.FF.SUPPLY"]],I[163500]=[e["GR.IC.JOINT INFORMATION BUREAU"]],I[163600]=[e["GR.IC.TRANSPORTATION"]],I[163700]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS I"]],I[163800]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS II"]],I[163900]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS III"]],I[164e3]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS IV"]],I[164100]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS V"]],I[164200]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS VI"]],I[164300]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS VII"]],I[164400]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS VIII"]],I[164500]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS IX"]],I[164600]=[e["GR.IC.FF.SUPPLY"],e["GR.IC.FF.CLASS X"]],I[164700]=[e["GR.IC.WATER"]],I[164800]=[e["GR.IC.WATER PURIFICATION"]],I[164900]=[e["GR.IC.PUBLIC AFFAIRS BROADCAST"]],I[170100]=[e["GR.IC.NAVAL"]],I[180100]=[e["GR.IC.ALLIED COMMAND EUROPE RAPID REACTION CORPS (ARRC)"]],I[180200]=[e["GR.IC.ALLIED COMMAND OPERATIONS"]],I[180300]=[e["GR.IC.INTERNATIONAL SECURITY ASSISTANCE FORCE (ISAF)"]],I[180400]=[e["GR.IC.MULTINATIONAL (MN)"]],I[19e4]=[e["GR.IC.FF.EMERGENCY OPERATION"]],I[2e5]=[e["GR.IC.FF.LAW ENFORCEMENT"]],I[200100]=[e["GR.IC.BUREAU OF ALCOHOL, TOBACCO, FIREARMS AND EXPLOSIVES (ATF) (DEPARTMENT OF JUSTICE)"]],I[200200]=[e["GR.IC.FF.BORDER PATROL"]],I[200300]=[e["GR.IC.FF.CUSTOMS SERVICE"]],I[200400]=[e["GR.IC.DRUG ENFORCEMENT AGENCY (DEA)"]],I[200500]=[e["GR.IC.FF.DEPARTMENT OF JUSTICE (DOJ)"]],I[200600]=[e["GR.IC.FEDERAL BUREAU OF INVESTIGATION (FBI)"]],I[200700]=[e["GR.IC.LAW ENFORCEMENT"]],I[200800]=[e["GR.IC.FF.PRISON"]],I[200900]=[e["GR.IC.UNITED STATES SECRET SERVICE(TREAS) (USSS)"]],I[201e3]=[e["GR.IC.TRANSPORTATION SECURITY AGENCY (TSA)"]],I[201100]=[e["SE.IC.LAW ENFORCEMENT VESSEL"]],I[201200]=[e["GR.IC.FF.US MARSHALS SERVICE"]],I[201300]=[e["ST.IC.INTERNAL SECURITY FORCE"]],E["01"]=[e["GR.M1.AIRMOBILE/AIR ASSAULT"]],E["02"]=[e["GR.M1.AREA"]],E["03"]=[e["GR.M1.ATTACK"]],E["04"]=[e["GR.M1.BIOLOGICAL"]],E["05"]=[e["GR.M1.BORDER"]],E["06"]=[e["GR.M1.BRIDGING"]],E["07"]=[e["GR.M1.CHEMICAL"]],E["08"]=[e["GR.M1.CLOSE PROTECTION"]],E["09"]=[e["GR.M1.COMBAT"]];E[10]=[e["GR.M1.COMMAND AND CONTROL"]],E[11]=[e["GR.M1.COMMUNICATIONS CONTINGENCY PACKAGE"]],E[12]=[e["GR.M1.CONSTRUCTION"]],E[13]=[e["GR.M1.CROSS CULTURAL COMMUNICATION"]],E[14]=[e["GR.M1.CROWD AND RIOT CONTROL"]],E[15]=[e["GR.M1.DECONTAMINATION"]],E[16]=[e["GR.M1.DETENTION"]],E[17]=[e["GR.M1.DIRECT COMMUNICATIONS"]],E[18]=[e["GR.M1.DIVING"]],E[19]=[e["GR.M1.DIVISION"]],E[20]=[e["GR.M1.DOG"]],E[21]=[e["GR.M1.DRILLING"]],E[22]=[e["GR.M1.ELECTRO-OPTICAL"]],E[23]=[e["GR.M1.ENHANCED"]],E[24]=[e["GR.M1.EXPLOSIVE ORDNANCE DISPOSAL"]],E[25]=[e["GR.M1.FIRE DIRECTION CENTRE"]],E[26]=[e["GR.M1.FORCE"]],E[27]=[e["GR.M1.FORWARD"]],E[28]=[e["GR.M1.GROUND STATION MODULE"]],E[29]=[e["GR.M1.LANDING SUPPORT"]],E[30]=[e["GR.M1.LARGE EXTENSION NODE"]],E[31]=[e["GR.M1.MAINTENANCE"]],E[32]=[e["GR.M1.METEOROLOGICAL"]],E[33]=[e["GR.M1.MINE COUNTERMEASURE"]],E[34]=[e["GR.M1.MISSILE"]],E[35]=[e["GR.M1.(MOBILE) ADVISOR AND SUPPORT"]],E[36]=[e["GR.M1.MOBILE SUBSCRIBER EQUIPMENT"]],E[37]=[e["GR.M1.MOBILITY SUPPORT"]],E[38]=[e["GR.M1.MOVEMENT CONTROL CENTRE"]],E[39]=[e["GR.M1.MULTINATIONAL"]],E[40]=[e["GR.M1.MULTINATIONAL SPECIALIZED UNIT"]],E[41]=[e["GR.M1.MULTIPLE ROCKET LAUNCHER"]],E[42]=[e["GR.M1.NATO MEDICAL ROLE 1"]],E[43]=[e["GR.M1.NATO MEDICAL ROLE 2"]],E[44]=[e["GR.M1.NATO MEDICAL ROLE 3"]],E[45]=[e["GR.M1.NATO MEDICAL ROLE 4"]],E[46]=[e["GR.M1.NAVAL"]],E[47]=[e["GR.M1.NODE CENTRE"]],E[48]=[e["GR.M1.NUCLEAR"]],E[49]=[e["GR.M1.OPERATIONS"]],E[50]=[e["GR.M1.RADAR"]],E[51]=[e["GR.M1.RADIO FREQUENCY IDENTIFICATION (RFID) INTERROGATOR/ SENSOR"]],E[52]=[e["GR.M1.RADIOLOGICAL"]],E[53]=[e["GR.M1.SEARCH AND RESCUE"]],E[54]=[e["GR.M1.SECURITY"]],E[55]=[e["GR.M1.SENSOR"]],E[56]=[e["GR.M1.SENSOR CONTROL MODULE"]],E[57]=[e["GR.M1.SIGNALS INTELLIGENCE"]],E[58]=[e["GR.M1.SINGLE SHELTER SWITCH"]],E[59]=[e["GR.M1.SINGLE ROCKET LAUNCHER"]],E[60]=[e["GR.M1.SMOKE"]],E[61]=[e["GR.M1.SNIPER"]],E[62]=[e["GR.M1.SOUND RANGING"]],E[63]=[e["GR.M1.SPECIAL OPERATIONS FORCES (SOF)"]],E[64]=[e["GR.M1.SPECIAL WEAPONS AND TACTICS"]],E[65]=[e["GR.M1.SURVEY"]],E[66]=[e["GR.M1.TACTICAL EXPLOITATION"]],E[67]=[e["GR.M1.TARGET ACQUISITION"]],E[68]=[e["GR.M1.TOPOGRAPHIC"]],E[69]=[e["GR.M1.UTILITY"]],E[70]=[e["GR.M1.VIDEO IMAGERY"]],E[71]=[e["GR.M1.ACCIDENT"]],E[72]=[e["GR.M1.OTHER"]],E[73]=[e["GR.M1.CIVILIAN"]],E[74]=[e["GR.M1.ANTISUBMARINE WARFARE"]],E[75]=[e["GR.M1.MEDEVAC"]],E[76]=[e["GR.M1.RANGER"]],E[77]=[e["GR.M1.SUPPORT"]],E[78]=[e["GR.M1.AVIATION"]],t["01"]=[e["GR.M2.AIRBORNE"]],t["02"]=[e["GR.M2.ARCTIC"]],t["03"]=[e["GR.M2.BATTLE DAMAGE REPAIR"]],t["04"]=[e["GR.M2.BICYCLE EQUIPPED"]],t["05"]=[e["GR.M2.CASUALTY STAGING"]],t["06"]=[e["GR.M2.CLEARING"]],t["07"]=[e["GR.M2.CLOSE RANGE"]],t["08"]=[e["GR.M2.CONTROL"]],t["09"]=[e["GR.M2.DECONTAMINATION"]],t[10]=[e["GR.M2.DEMOLITION"]],t[11]=[e["GR.M2.DENTAL"]],t[12]=[e["GR.M2.DIGITAL"]],t[13]=[e["GR.M2.ENHANCED POSITION LOCATION REPORTING SYSTEM"]],t[14]=[e["GR.M2.EQUIPMENT"]],t[15]=[e["GR.M2.HEAVY"]],t[16]=[e["GR.M2.HIGH ALTITUDE"]],t[17]=[e["GR.M2.INTERMODAL"]],t[18]=[e["GR.M2.INTENSIVE CARE"]],t[19]=[e["GR.M2.LIGHT"]],t[20]=[e["GR.M2.LABORATORY"]],t[21]=[e["GR.M2.LAUNCHER"]],t[22]=[e["GR.M2.LONG RANGE"]],t[23]=[e["GR.M2.LOW ALTITUDE"]],t[24]=[e["GR.M2.MEDIUM"]],t[25]=[e["GR.M2.MEDIUM ALTITUDE"]],t[26]=[e["GR.M2.MEDIUM RANGE"]],t[27]=[e["GR.M2.MOUNTAIN"]],t[28]=[e["GR.M2.HIGH TO MEDIUM ALTITUDE"]],t[29]=[e["GR.M2.MULTI-CHANNEL"]],t[30]=[e["GR.M2.OPTICAL"]],t[31]=[e["GR.M2.PACK ANIMAL"]],t[32]=[e["GR.M2.PATIENT EVACUATION COORDINATION"]],t[33]=[e["GR.M2.PREVENTIVE MAINTENANCE"]],t[34]=[e["GR.M2.PSYCHOLOGICAL"]],t[35]=[e["GR.M2.RADIO RELAY LINE OF SIGHT"]],t[36]=[e["GR.M2.RAILROAD"]],t[37]=[e["GR.M2.RECOVERY (UNMANNED SYSTEMS)"]],t[38]=[e["GR.M2.RECOVERY (MAINTENANCE)"]],t[39]=[e["GR.M2.RESCUE COORDINATION CENTRE"]],t[40]=[e["GR.M2.RIVERINE"]],t[41]=[e["GR.M2.SINGLE CHANNEL"]],t[42]=[e["GR.M2.SKI"]],t[43]=[e["GR.M2.SHORT RANGE"]],t[44]=[e["GR.M2.STRATEGIC"]],t[45]=[e["GR.M2.SUPPORT"]],t[46]=[e["GR.M2.TACTICAL"]],t[47]=[e["GR.M2.TOWED"]],t[48]=[e["GR.M2.TROOP"]],t[49]=[e["GR.M2.VERTICAL OR SHORT TAKE-OFF AND LANDING "]],t[50]=[e["GR.M2.VETERINARY"]],t[51]=[e["GR.M2.WHEELED"]],t[52]=[e["GR.M2.HIGH TO LOW ALTITUDE"]],t[53]=[e["GR.M2.MEDIUM TO LOW ALTITUDE"]],t[54]=[e["GR.M2.ATTACK"]],t[55]=[e["GR.M2.REFUEL"]],t[56]=[e["GR.M2.UTILITY"]],t[57]=[e["GR.M2.COMBAT SEARCH AND RESCUE"]]}}},function(I,E,t){var R=t(0);I.exports=function(I,E,t,C,A,e,S){"36"==A&&(I[11e4]=[e["SU.IC.SEA MINE"]],I[110100]=[e["SU.IC.SEA MINE - BOTTOM"]],I[110200]=[e["SU.IC.SEA MINE - MOORED"]],I[110300]=[e["SU.IC.SEA MINE - FLOATING"]],I[110400]=[e["SU.IC.SEA MINE - RISING"]],I[110500]=[e["SU.IC.SEA MINE (IN OTHER POSITION)"]],I[110600]=[e["SU.IC.SEA MINE - KINGFISHER"]],I[110700]=[e["SU.IC.SEA MINE - SMALL OBJECT"]],I[110800]=[e["SU.IC.SEA MINE EXERCISE MINE"]],I[110801]=[e["SU.IC.SEA MINE EXERCISE MINE - BOTTOM"]],I[110802]=[e["SU.IC.SEA MINE EXERCISE MINE - MOORED"]],I[110803]=[e["SU.IC.SEA MINE EXERCISE MINE - FLOATING"]],I[110804]=[e["SU.IC.SEA MINE EXERCISE MINE - RISING"]],I[110900]=[e["SU.IC.SEA MINE NEUTRALIZED"]],I[110901]=[e["SU.IC.SEA MINE NEUTRALIZED - BOTTOM"]],I[110902]=[e["SU.IC.SEA MINE NEUTRALIZED - MOORED"]],I[110903]=[e["SU.IC.SEA MINE NEUTRALIZED - FLOATING"]],I[110904]=[e["SU.IC.SEA MINE NEUTRALIZED - RISING"]],I[110905]=[e["SU.IC.SEA MINE (IN OTHER POSITION) NEUTRALIZED"]],I[12e4]=[e["SU.IC.UNEXPLODED EXPLOSIVE ORDNANCE"]],I[13e4]=[e["SU.IC.SEA MINE DECOY"]],I[130100]=[e["SU.IC.SEA MINE DECOY, BOTTOM/GROUND"]],I[130200]=[e["SU.IC.SEA MINE DECOY, MOORED"]],I[140100]=[R._scale(1.3,e["SU.IC.SEA MINE MILCO"])],I[140101]=[R._scale(1.3,[e["SU.IC.SEA MINE MILCO"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]])],I[140102]=[R._scale(1.3,[e["SU.IC.SEA MINE MILCO"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]])],I[140103]=[R._scale(1.3,[e["SU.IC.SEA MINE MILCO"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]])],I[140104]=[R._scale(1.3,[e["SU.IC.SEA MINE MILCO"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]])],I[140105]=[R._scale(1.3,[e["SU.IC.SEA MINE MILCO"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]])],I[140200]=[e["SU.IC.SEA MINE MILCO - BOTTOM"]],I[140201]=[e["SU.IC.SEA MINE MILCO - BOTTOM"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]],I[140202]=[e["SU.IC.SEA MINE MILCO - BOTTOM"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]],I[140203]=[e["SU.IC.SEA MINE MILCO - BOTTOM"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]],I[140204]=[e["SU.IC.SEA MINE MILCO - BOTTOM"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]],I[140205]=[e["SU.IC.SEA MINE MILCO - BOTTOM"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]],I[140300]=[e["SU.IC.SEA MINE MILCO - MOORED"]],I[140301]=[e["SU.IC.SEA MINE MILCO - MOORED"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]],I[140302]=[e["SU.IC.SEA MINE MILCO - MOORED"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]],I[140303]=[e["SU.IC.SEA MINE MILCO - MOORED"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]],I[140304]=[e["SU.IC.SEA MINE MILCO - MOORED"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]],I[140305]=[e["SU.IC.SEA MINE MILCO - MOORED"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]],I[140400]=[e["SU.IC.SEA MINE MILCO - FLOATING"]],I[140401]=[e["SU.IC.SEA MINE MILCO - FLOATING"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 1"]],I[140402]=[e["SU.IC.SEA MINE MILCO - FLOATING"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 2"]],I[140403]=[e["SU.IC.SEA MINE MILCO - FLOATING"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 3"]],I[140404]=[e["SU.IC.SEA MINE MILCO - FLOATING"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 4"]],I[140405]=[e["SU.IC.SEA MINE MILCO - FLOATING"],e["SU.IC.SEA MINE MILCO - GENERAL, CONFIDENCE LEVEL 5"]],I[15e4]=[R._scale(1.3,e["SU.IC.SEA MINE MILEC"])],I[150100]=[e["SU.IC.SEA MINE MILEC - BOTTOM"]],I[150200]=[e["SU.IC.SEA MINE MILEC - MOORED"]],I[150300]=[e["SU.IC.SEA MINE MILEC - FLOATING"]],I[16e4]=[R._scale(1.3,e["SU.IC.SEA MINE NEGATIVE REACQUISITION"])],I[160100]=[e["SU.IC.SEA MINE NEGATIVE REACQUISITION - BOTTOM"]],I[160200]=[e["SU.IC.SEA MINE NEGATIVE REACQUISITION - MOORED"]],I[160300]=[e["SU.IC.SEA MINE NEGATIVE REACQUISITION - FLOATING"]],I[17e4]=[R._scale(1.3,e["SU.IC.SEA MINE GENERAL OBSTRUCTOR"])],I[170100]=[e["SU.IC.SEA MINE GENERAL OBSTRUCTOR NEUTRALIZED"]],I[18e4]=[R._scale(1.3,e["SU.IC.SEA MINE MINE ANCHOR"])],I[19e4]=[R._scale(1.3,e["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT"])],I[190100]=[e["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - BOTTOM"]],I[190200]=[e["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - MOORED"]],I[190300]=[e["SU.IC.SEA MINE NON-MINE MINE-LIKE CONTACT - FLOATING"]],I[2e5]=[e["SU.IC.ENVIRONMENTAL REPORT LOCATION"]],I[21e4]=[e["SU.IC.DIVE REPORT LOCATION"]])}},function(I,E,t){t(0);I.exports=function(I,E,t,R,C,A,e){"30"==C&&(I[11e4]=[A["SE.IC.MILITARY"]],I[12e4]=[A["SE.IC.COMBATANT"]],I[120100]=[A["SE.IC.CARRIER"]],I[120200]=[A["SE.IC.SURFACE COMBATANT, LINE"]],I[120201]=[A["SE.IC.BATTLESHIP"]],I[120202]=[A["SE.IC.CRUISER, GUIDED MISSILE"]],I[120203]=[A["SE.IC.DESTROYER"]],I[120204]=[A["SE.IC.FRIGATE"]],I[120205]=[A["SE.IC.CORVETTE"]],I[120206]=[A["SE.IC.LITTORAL COMBATANT SHIP"]],I[120300]=[A["SE.IC.AMPHIBIOUS WARFARE SHIP"]],I[120301]=[A["SE.IC.AMPHIBIOUS FORCE FLAGSHIP"]],I[120302]=[A["SE.IC.AMPHIBIOUS ASSAULT"]],I[120303]=[A["SE.IC.AMPHIBIOUS ASSAULT SHIP, GENERAL"]],I[120304]=[A["SE.IC.AMPHIBIOUS ASSAULT SHIP, MULTI-PURPOSE"]],I[120305]=[A["SE.IC.AMPHIBIOUS ASSAULT SHIP, HELICOPTER"]],I[120306]=[A["SE.IC.AMPHIBIOUS TRANSPORT, DOCK"]],I[120307]=[A["SE.IC.LANDING SHIP"]],I[120308]=[A["SE.IC.LANDING CRAFT"]],I[120400]=[A["SE.IC.MINE WARFARE VESSEL"]],I[120401]=[A["SE.IC.MINELAYER"]],I[120402]=[A["SE.IC.MINESWEEPER"]],I[120403]=[A["SE.IC.MINESWEEPER, DRONE"]],I[120404]=[A["SE.IC.MINEHUNTER"]],I[120405]=[A["SE.IC.MINE COUNTERMEASURES"]],I[120406]=[A["SE.IC.MINE COUNTER MEASURE SUPPORT SHIP"]],I[120500]=[A["SE.IC.PATROL"]],I[120501]=[A["SE.IC.PATROL CRAFT"]],I[120502]=[A["SE.IC.PATROL GUN"]],I[120600]=[A["SE.IC.SEA SURFACE DECOY"]],I[120700]=[A["SE.IC.UNMANNED SURFACE WATER VEHICLE"]],I[120800]=[A["SE.IC.MILITARY SPEEDBOAT"]],I[120801]=[A["SE.IC.MILITARY SPEEDBOAT, RIGID-HULL INFLATABLE BOAT"]],I[120900]=[A["SE.IC.MILITARY JETSKI"]],I[121e3]=[A["SE.IC.NAVY TASK ORGANIZATION UNIT"]],I[121001]=[A["SE.IC.NAVY TASK ELEMENT"]],I[121002]=[A["SE.IC.NAVY TASK FORCE"]],I[121003]=[A["SE.IC.NAVY TASK GROUP"]],I[121004]=[A["SE.IC.NAVY TASK UNIT"]],I[121005]=[A["SE.IC.CONVOY"]],I[121100]=[A["GR.IC.RADAR"]],I[13e4]=[A["SE.IC.NONCOMBATANT"]],I[130100]=[A["SE.IC.AUXILIARY SHIP"]],I[130101]=[A["SE.IC.AMMUNITION SHIP"]],I[130102]=[A["SE.IC.STORES SHIP"]],I[130103]=[A["SE.IC.AUXILIARY FLAG OR COMMAND SHIP"]],I[130104]=[A["SE.IC.INTELLIGENCE COLLECTOR"]],I[130105]=[A["SE.IC.OCEAN RESEARCH SHIP"]],I[130106]=[A["SE.IC.SURVEY SHIP"]],I[130107]=[A["SE.IC.HOSPITAL SHIP2"]],I[130108]=[A["SE.IC.CARGO SHIP"]],I[130109]=[A["SE.IC.COMBAT SUPPORT SHIP, FAST"]],I[130110]=[A["SE.IC.OILER, REPLENISHMENT"]],I[130111]=[A["SE.IC.REPAIR SHIP"]],I[130112]=[A["SE.IC.SUBMARINE TENDER"]],I[130113]=[A["SE.IC.TUG, OCEAN GOING"]],I[130200]=[A["SE.IC.SERVICE CRAFT, YARD, GENERAL"]],I[130201]=[A["SE.IC.BARGE, NOT SELF-PROPELLED"]],I[130202]=[A["SE.IC.BARGE, SELF-PROPELLED"]],I[130203]=[A["SE.IC.TUG, HARBOUR"]],I[130204]=[A["SE.IC.LAUNCH"]],I[14e4]=[A["AR.I.CIVILIAN"]],I[140100]=[A["SE.IC.MERCHANT SHIP, GENERAL"]],I[140101]=[A["SE.IC.CARGO, GENERAL"]],I[140102]=[A["SE.IC.CONTAINER SHIP"]],I[140103]=[A["SE.IC.DREDGE"]],I[140104]=[A["SE.IC.ROLL ON-ROLL OFF"]],I[140105]=[A["SE.IC.FERRY"]],I[140106]=[A["SE.IC.HEAVY LIFT"]],I[140107]=[A["SE.IC.HOVERCRAFT 2525D"]],I[140108]=[A["SE.IC.MERCHANT SHIP, LASH CARRIER (WITH BARGES)"]],I[140109]=[A["SE.IC.OILER/TANKER"]],I[140110]=[A["SE.IC.PASSENGER SHIP"]],I[140111]=[A["SE.IC.TUG, OCEAN GOING CIVILIAN"]],I[140112]=[A["SE.IC.TOW"]],I[140113]=[A["SE.IC.TRANSPORT SHIP, HAZARDOUS MATERIAL"]],I[140114]=[A["SE.IC.JUNK/DHOW"]],I[140115]=[A["SE.IC.BARGE, NOT SELF-PROPELLED"]],I[140116]=[A["SE.IC.HOSPITAL SHIP"]],I[140200]=[A["SE.IC.FISHING VESSEL"]],I[140201]=[A["SE.IC.DRIFTER"]],I[140202]=[A["SE.IC.TRAWLER"]],I[140203]=[A["SE.IC.FISHING VESSEL DREDGE"]],I[140300]=[A["SE.IC.LAW ENFORCEMENT VESSEL"]],I[140400]=[A["SE.IC.LEISURE CRAFT, SAILING BOAT"]],I[140500]=[A["SE.IC.LEISURE CRAFT, MOTORIZED"]],I[140501]=[A["SE.IC.LEISURE CRAFT, MOTORIZED, RIGID-HULL INFLATABLE BOAT"]],I[140502]=[A["SE.IC.LEISURE CRAFT, MOTORIZED, SPEEDBOAT"]],I[140600]=[A["SE.IC.LEISURE CRAFT, JETSKI"]],I[140700]=[A["SE.IC.UNMANNED SURFACE WATER VEHICLE (USV)"]],I[15e4]=[A["SE.IC.OWN SHIP"]],I[16e4]=[A["SE.IC.FUSED TRACK"]],I[17e4]=[A["SP.I.MANUAL TRACK"]],E["01"]=[A["SE.M1.OWN SHIP"]],E["02"]=[A["SE.M1.ANTIAIR WARFARE"]],E["03"]=[A["SE.M1.ANTISUBMARINE WARFARE"]],E["04"]=[A["SE.M1.ESCORT"]],E["05"]=[A["SE.M1.ELECTRONIC WARFARE"]],E["06"]=[A["SE.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE"]],E["07"]=[A["SE.M1.MINE COUNTER MEASURES"]],E["08"]=[A["SE.M1.MISSILE DEFENSE"]],E["09"]=[A["SE.M1.MEDICAL"]],E[10]=[A["SE.M1.MINE WARFARE"]],E[11]=[A["SE.M1.REMOTE MULTI-MISSION VEHIHLE"]],E[12]=[A["SE.M1.SPECIAL OPERATIONS FORCE"]],E[13]=[A["SE.M1.SURFACE WARFARE"]],E[14]=[A["SE.M1.BALLISTIC MISSILE"]],E[15]=[A["SE.M1.GUIDED MISSILE"]],E[16]=[A["SE.M1.OTHER GUIDED MISSILE"]],E[17]=[A["SE.M1.TORPEDO"]],E[18]=[A["SE.M1.DRONE-EQUIPPED"]],E[19]=[A["SE.M1.HELICOPTER-EQUIPPED"]],E[20]=[A["SE.M1.BALLISTIC MISSILE DEFENSE, SHOOTER"]],E[21]=[A["SE.M1.BALLISTIC MISSILE DEFENSE, LONG- RANGE SURVEILLANCE AND TRACK (LRS&T)"]],E[22]=[A["SE.M1.SEA-BASE X-BAND"]],E[23]=[A["SE.M1.HIJACKING/HIJACKED"]],t["01"]=[A["SE.M2.NUCLEAR POWERED"]],t["02"]=[A["SE.M2.HEAVY"]],t["03"]=[A["SE.M2.LIGHT"]],t["04"]=[A["SE.M2.MEDIUM"]],t["05"]=[A["SE.M2.DOCK"]],t["06"]=[A["SE.M2.LOGISTICS"]],t["07"]=[A["SE.M2.TANK"]],t["08"]=[A["SE.M2.VEHICLE"]],t["09"]=[A["SE.M2.FAST"]],t[10]=[A["SE.M2.AIR-CUSHIONED (USA ONLY)"]],t[11]=[A["SE.M2.AIR-CUSHIONED"]],t[12]=[A["SE.M2.HYDROFOIL"]],t[13]=[A["SE.M2.AUTONOMOUS CONTROL"]],t[14]=[A["SE.M2.REMOTELY PILOTED"]],t[15]=[A["SE.M2.EXPENDABLE"]])}},function(I,E,t){t(0);I.exports=function(I,E,t,R,C,A,e){"39"==C&&(I[11e4]=[A["SU.IC.SEABED INSTALLATION, MAN-MADE, MILITARY"]],I[12e4]=[A["SU.IC.SEABED INSTALLATION, MAN-MADE, NON-MILITARY"]])}},function(I,E,t){t(0);I.exports=function(I,E,t,R,C,A,e){"50"!=C&&"51"!=C&&"52"!=C&&"53"!=C&&"54"!=C||(I[110100]=[A["SI.IC.COMMUNICATIONS"]],I[110200]=[A["AR.I.JAMMER / ELECTRONIC COUNTER-MEASURES"]],I[110300]=[A["SI.IC.RADAR"]],E["01"]=[A["SI.M1.ANTI-AIRCRAFT FIRE CONTROL"]],E["02"]=[A["SI.M1.AIRBORNE SEARCH AND BOMBING"]],E["03"]=[A["SI.M1.AIRBORNE INTERCEPT"]],E["04"]=[A["SI.M1.ALTIMETER"]],E["05"]=[A["SI.M1.AIRBORNE RECONNAISSANCE AND MAPPING"]],E["06"]=[A["SI.M1.AIR TRAFFIC CONTROL"]],E["07"]=[A["SI.M1.BEACON TRANSPONDER (NOT IFF)"]],E["08"]=[A["SI.M1.BATTLEFIELD SURVEILLANCE"]],E["09"]=[A["SI.M1.CONTROLLED APPROACH"]],E[10]=[A["SI.M1.CONTROLLED INTERCEPT"]],E[11]=[A["SI.M1.CELLULAR/MOBILE"]],E[12]=[A["SI.M1.COASTAL SURVEILLANCE"]],E[13]=[A["SI.M1.DECOY/MIMIC"]],E[14]=[A["SI.M1.DATA TRANSMISSION"]],E[15]=[A["SI.M1.EARTH SURVEILLANCE"]],E[16]=[A["SI.M1.EARLY WARNING"]],E[17]=[A["SI.M1.FIRE CONTROL"]],E[18]=[A["SI.M1.GROUND MAPPING"]],E[19]=[A["SI.M1.HEIGHT FINDING"]],E[20]=[A["SI.M1.HARBOR SURVEILLANCE"]],E[21]=[A["SI.M1.IDENTIFICATION, FRIEND OR FOE (INTERROGATOR)"]],E[22]=[A["SI.M1.INSTRUMENT LANDING SYSTEM"]],E[23]=[A["SI.M1.IONOSPHERIC SOUNDING"]],E[24]=[A["SI.M1.IDENTIFICATION, FRIEND OR FOE (TRANSPONDER)"]],E[25]=[A["SI.M1.BARRAGE JAMMER"]],E[26]=[A["SI.M1.CLICK JAMMER"]],E[27]=[A["SI.M1.DECEPTIVE JAMMER"]],E[28]=[A["SI.M1.FREQUENCY SWEPT JAMMER"]],E[29]=[A["SI.M1.JAMMER (GENERAL)"]],E[30]=[A["SI.M1.NOISE JAMMER"]],E[31]=[A["SI.M1.PULSED JAMMER"]],E[32]=[A["SI.M1.REPEATER JAMMER"]],E[33]=[A["SI.M1.SPOT NOISE JAMMER"]],E[34]=[A["SI.M1.TRANSPONDER JAMMER"]],E[35]=[A["SI.M1.MISSILE ACQUISITION"]],E[36]=[A["SI.M1.MISSILE CONTROL"]],E[37]=[A["SI.M1.MISSILE DOWNLINK"]],E[38]=[A["SI.M1.METEOROLOGICAL"]],E[39]=[A["SI.M1.MULTI-FUNCTION"]],E[40]=[A["SI.M1.MISSILE GUIDANCE"]],E[41]=[A["SI.M1.MISSILE HOMING"]],E[42]=[A["SI.M1.MISSILE TRACKING"]],E[43]=[A["SI.M1.NAVIGATIONAL/GENERAL"]],E[44]=[A["SI.M1.NAVIGATIONAL/DISTANCE MEASURING EQUIPMENT"]],E[45]=[A["SI.M1.NAVIGATION/TERRAIN FOLLOWING"]],E[46]=[A["SI.M1.NAVIGATIONAL/WEATHER AVOIDANCE"]],E[47]=[A["SI.M1.OMNI-LINE OF SIGHT (LOS)"]],E[48]=[A["SI.M1.PROXIMITY USE"]],E[49]=[A["SI.M1.POINT-TO-POINT LINE OF SIGHT (LOS)"]],E[50]=[A["SI.M1.INSTRUMENTATION"]],E[51]=[A["SI.M1.RANGE ONLY"]],E[52]=[A["SI.M1.SONOBUOY"]],E[53]=[A["SI.M1.SATELLITE DOWNLINK"]],E[54]=[A["SI.M1.SPACE"]],E[55]=[A["SI.M1.SURFACE SEARCH"]],E[56]=[A["SI.M1.SHELL TRACKING"]],E[57]=[A["SI.M1.SATELLITE UPLINK"]],E[58]=[A["SI.M1.TARGET ACQUISITION"]],E[59]=[A["SI.M1.TARGET ILLUMINATION"]],E[60]=[A["SI.M1.TROPOSPHERIC SCATTER"]],E[61]=[A["SI.M1.TARGET TRACKING"]],E[62]=[A["SI.M1.UNKNOWN"]],E[63]=[A["SI.M1.VIDEO REMOTING"]],E[64]=[A["SI.M1.EXPERIMENTAL"]])}},function(I,E,t){t(0);I.exports=function(I,E,t,R,C,A,e){"05"==C&&(I[11e4]=[A["SP.I.MILITARY"]],I[110100]=[A["SP.I.SPACE VEHICLE"]],I[110200]=[A["SP.I.RE-ENTRY VEHICLE"]],I[110300]=[A["SPACE.PLANET LANDER"]],I[110400]=[A["SP.I.ORBITER SHUTTLE"]],I[110500]=[A["SP.I.CAPSULE"]],I[110600]=[A["SP.I.SATELLITE, GENERAL"]],I[110700]=[A["SP.I.SATELLITE"]],I[110800]=[A["SP.I.ANTISATELLITE WEAPON"]],I[110900]=[A["SP.I.ASTRONOMICAL SATELLITE"]],I[111e3]=[A["SP.I.BIOSATELLITE"]],I[111100]=[A["SP.I.COMMUNICATIONS SATELLITE"]],I[111200]=[A["SP.I.EARTH OBSERVATION SATELLITE"]],I[111300]=[A["SP.I.MINIATURIZED SATELLITE"]],I[111400]=[A["SP.I.NAVIGATIONAL SATELLITE"]],I[111500]=[A["SP.I.RECONNAISSANCE SATELLITE"]],I[111600]=[A["SP.I.SPACE STATION"]],I[111700]=[A["SP.I.TETHERED SATELLITE"]],I[111800]=[A["SP.I.WEATHER SATELLITE"]],I[111900]=[A["SP.I.SPACE LAUNCH VEHICLE"]],I[12e4]=[A["AR.I.CIVILIAN"]],I[120100]=[A["SP.I.CIVILIAN ORBITER SHUTTLE"]],I[120200]=[A["SP.I.CIVILIAN CAPSULE"]],I[120300]=[A["SP.I.CIVILIAN SATELLITE"]],I[120400]=[A["SP.I.CIVILIAN ASTRONOMICAL SATELLITE"]],I[120500]=[A["SP.I.CIVILIAN BIOSATELLITE"]],I[120600]=[A["SP.I.CIVILIAN COMMUNICATIONS SATELLITE"]],I[120700]=[A["SP.I.CIVILIAN EARTH OBSERVATION SATELLITE"]],I[120800]=[A["SP.I.CIVILIAN MINIATURIZED SATELLITE"]],I[120900]=[A["SP.I.CIVILIAN NAVIGATIONAL SATELLITE"]],I[121e3]=[A["SP.I.CIVILIAN SPACE STATION"]],I[121100]=[A["SP.I.CIVILIAN TETHERED SATELLITE"]],I[121200]=[A["SP.I.CIVILIAN WEATHER SATELLITE"]],I[13e4]=[A["SP.I.MANUAL TRACK"]],E["01"]=[A["SP.M1.LOW EARTH ORBIT (LEO)"]],E["02"]=[A["SP.M1.MEDIUM EARTH ORBIT (MEO)"]],E["03"]=[A["SP.M1.HIGH EARTH ORBIT (HEO)"]],E["04"]=[A["SP.M1.GEOSYNCHRONOUS ORBIT (GSO)"]],E["05"]=[A["SP.M1.GEOSTATIONARY ORBIT (GO)"]],E["06"]=[A["SP.M1.MOLNIYA ORBIT (MO)"]],t["01"]=[A["SP.M2.OPTICAL"]],t["02"]=[A["SP.M2.INFRARED"]],t["03"]=[A["SP.M2.RADAR"]],t["04"]=[A["SP.M2.SIGNALS INTELLIGENCE (SIGINT)"]])}},function(I,E,t){t(0);I.exports=function(I,E,t,R,C,A,e){"06"==C&&(I[11e4]=[A["AIR.MISSILE.ICON"]],E["01"]=[A["SPACE.MISSILE.M1.BALLISTIC"]],E["02"]=[A["SPACE.MISSILE.M1.SPACE"]],E["03"]=[A["SPACE.MISSILE.M1.INTERCEPTOR"]],t["01"]=[A["SPACE.MISSILE.M2.SHORT RANGE"]],t["02"]=[A["SPACE.MISSILE.M2.MEDIUM RANGE"]],t["03"]=[A["SPACE.MISSILE.M2.INTERMEDIATE RANGE"]],t["04"]=[A["SPACE.MISSILE.M2.LONG RANGE"]],t["05"]=[A["SPACE.MISSILE.M2.INTERCONTINENTAL"]],t["06"]=[A["SPACE.MISSILE.M2.ARROW"]],t["07"]=[A["SPACE.MISSILE.M2.GROUND-BASED INTERCEPTOR (GBI)"]],t["08"]=[A["SPACE.MISSILE.M2.PATRIOT"]],t["09"]=[A["SPACE.MISSILE.M2.STANDARD MISSILE - TERMINAL PHASE (SM-T)"]],t[10]=[A["SPACE.MISSILE.M2.STANDARD MISSILE - 3 (SM-3)"]],t[11]=[A["SPACE.MISSILE.M2.TERMINAL HIGH-ALTITUDE AREA DEFENSE (THAAD)"]],t[12]=[A["SPACE.MISSILE.M2.SPACE"]])}},function(I,E,t){t(0);I.exports=function(I,E,t,R,C,A,e){"35"==C&&(I[11e4]=[A["SU.IC.MILITARY"]],I[110100]=[A["SU.IC.SUBMARINE"]],I[110101]=[A["SU.IC.SUBMARINE, SURFACED"]],I[110102]=[A["SU.IC.SUBMARINE, SNORKELING"]],I[110103]=[A["SU.IC.SUBMARINE, BOTTOMED"]],I[110200]=[A["SU.IC.OTHER SUBMERSIBLE"]],I[110300]=[A["SU.IC.NON-SUBMARINE"]],I[110400]=[A["SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV)"]],I[110500]=[A["SU.IC.DIVER, MILITARY"]],I[12e4]=[A["AR.I.CIVILIAN"]],I[120100]=[A["SU.IC.SUBMERSIBLE, CIVILIAN"]],I[120200]=[A["SU.IC.AUTONOMOUS UNDERWATER VEHICLE/ UNMANNED UNDERWATER VEHICLE (AUV/UUV), CIVILIAN"]],I[120300]=[A["SU.IC.DIVER, CIVILIAN"]],I[13e4]=[A["SU.IC.UNDERWATER WEAPON"]],I[130100]=[A["SU.IC.TORPEDO"]],I[130200]=[A["SU.IC.IMPROVISED EXPLOSIVE DEVICE (IED)"]],I[130300]=[A["SU.IC.UNDERWATER DECOY DSymbol"]],I[14e4]=[A["SU.IC.ECHO TRACKER CLASSIFIER (ETC)/POSSIBLE CONTACT (POSCON)"]],I[15e4]=[A["SU.IC.FUSED TRACK"]],I[16e4]=[A["SP.I.MANUAL TRACK"]],E["01"]=[A["SU.M1.ANTISUBMARINE WARFARE"]],E["02"]=[A["SU.M1.AUXILIARY"]],E["03"]=[A["SU.M1.COMMAND AND CONTROL"]],E["04"]=[A["SU.M1.INTELLIGENCE, SURVEILLANCE, RECONNAISSANCE"]],E["05"]=[A["SU.M1.MINE COUNTERMEASURES"]],E["06"]=[A["SU.M1.MINE WARFARE"]],E["07"]=[A["SU.M1.SURFACE WARFARE"]],E["08"]=[A["SU.M1.ATTACK"]],E["09"]=[A["SU.M1.BALLISTIC MISSILE"]],E[10]=[A["SU.M1.GUIDED MISSILE"]],E[11]=[A["SU.M1.OTHER GUIDED MISSILES (POINT DEFENCE)"]],E[12]=[A["SU.M1.SPECIAL OPERATIONS FORCE"]],E[13]=[A["SU.M1.POSSIBLE SUBMARINE - LOW 1"]],E[14]=[A["SU.M1.POSSIBLE SUBMARINE - LOW 2"]],E[15]=[A["SU.M1.POSSIBLE SUBMARINE - HIGH 3"]],E[16]=[A["SU.M1.POSSIBLE SUBMARINE - HIGH 4"]],E[17]=[A["SU.M1.PROBABLE SUBMARINE"]],E[18]=[A["SU.M1.CERTAIN SUBMARINE"]],E[19]=[A["SU.M1.ANTI-TORPEDO TORPEDO"]],E[20]=[A["SU.M1.HIJACKING/HIJACKED"]],t["01"]=[A["SU.M2.AIR INDEPENDENT PROPULSION"]],t["02"]=[A["SU.M2.DIESEL PROPULSION"]],t["03"]=[A["SU.M2.DIESEL - TYPE 1"]],t["04"]=[A["SU.M2.DIESEL - TYPE 2"]],t["05"]=[A["SU.M2.DIESEL - TYPE 3"]],t["06"]=[A["SU.M2.NUCLEAR POWERED"]],t["07"]=[A["SU.M2.NUCLEAR - TYPE 1"]],t["08"]=[A["SU.M2.NUCLEAR - TYPE 2"]],t["09"]=[A["SU.M2.NUCLEAR - TYPE 3"]],t[10]=[A["SU.M2.NUCLEAR - TYPE 4"]],t[11]=[A["SU.M2.NUCLEAR - TYPE 5"]],t[12]=[A["SU.M2.NUCLEAR - TYPE 6"]],t[13]=[A["SU.M2.NUCLEAR - TYPE 7"]],t[14]=[A["SU.M2.AUTONOMOUS CONTROL"]],t[15]=[A["SU.M2.REMOTELY PILOTED"]],t[16]=[A["SU.M2.EXPENDABLE"]])}},function(I,E,t){var R=t(0);I.exports=function(I,E){var t=(this.SIDC.substr(0,2),this.SIDC.substr(2,1)),C=this.SIDC.substr(3,1),A=this.SIDC.substr(4,2),e=this.SIDC.substr(6,1),S=this.SIDC.substr(7,1),T=this.SIDC.substr(8,2),N={0:"Unknown",1:"Unknown",2:"Friend",3:"Friend",4:"Neutral",5:"Hostile",6:"Hostile"},G={"00":"Sea","01":"Air","02":"Air","05":"Air","06":"Air",10:"Ground",11:"Ground",12:"Ground",15:"Ground",20:"Ground",30:"Sea",35:"Subsurface",36:"Subsurface",39:"Subsurface",40:"Ground",50:"Air",51:"Air",52:"Ground",53:"Sea",54:"Subsurface",60:"Ground"},O=I.functionid=this.SIDC.substr(10,10);return I.context=E.context[parseInt(this.SIDC.substr(2,1))],I.affiliation=N[C],I.dimension=G[A],"05"!=A&&"06"!=A&&"50"!=A||(I.space=!0),"40"==A&&(I.activity=!0),"20"==A&&(I.installation=!0),"36"==A&&0==this.alternateMedal&&(I.fill=!1),"30"==A&&15e4==O.substr(0,6)&&(I.frame=!1),"1"==e&&(I.notpresent=R._dashArrays.anticipated),"0"!=C&&"2"!=C&&"5"!=C||(I.notpresent=R._dashArrays.pending),"30"==A&&16e4==O.substr(0,6)&&(I.notpresent=R._dashArrays.pending),"35"==A&&14e4==O.substr(0,6)&&(I.notpresent=R._dashArrays.pending),"35"==A&&15e4==O.substr(0,6)&&(I.notpresent=R._dashArrays.pending),"2"!=e&&"3"!=e&&"4"!=e&&"5"!=e||(I.condition=E.status[parseInt(e)]),I.baseDimension=I.dimension,I.baseAffilation=I.affiliation,"5"==C&&"1"==t&&(I.joker=!0),"6"==C&&"1"==t&&(I.faker=!0),(I.joker||I.faker)&&(I.affiliation=E.affiliation[1]),"00"==A&&(I.dimensionUnknown=!0),"00"==A&&"1"==t&&"Unknown"!=I.affiliation&&(I.affiliation=""),"12"==A&&(I.dimension="LandDismountedIndividual",I.dismounted=!0),"15"!=A&&"52"!=A||(I.dimension=E.dimension[2]),["1","3","5","7"].indexOf(S)>-1&&(I.feintDummy=!0),["2","3","6","7"].indexOf(S)>-1&&(I.headquarters=!0),["4","5","6","7"].indexOf(S)>-1&&(I.taskForce=!0),T<=30&&(I.echelon=E.echelonMobility[T]),T>=30&&T<70&&(I.mobility=E.echelonMobility[T]),T>=70&&T<80&&(I.leadership=E.echelonMobility[T]),("01"==A&&"12"==O.substring(0,2)||"05"==A&&"12"==O.substring(0,2)||"11"==A||"12"==A&&"12"==O.substring(0,2)||"15"==A&&"16"==O.substring(0,2)||"30"==A&&"14"==O.substring(0,2)||"35"==A&&"12"==O.substring(0,2))&&(I.civilian=!0),I}},function(I,E,t){var R=t(0);I.exports=function(){var I=[],E=[],t=this.properties.baseGeometry.bbox,C=this.colors.frameColor[this.properties.affiliation];if(this.properties.dimensionUnknown&&C&&E.push({type:"text",text:"?",x:100,y:127,fill:C,fontfamily:"Arial",fontsize:80,fontweight:"bold",textanchor:"middle"}),this.properties.baseGeometry.g&&C){var A=10;("Unknown"==this.properties.affiliation||"Hostile"==this.properties.affiliation&&"Subsurface"!=this.properties.dimension)&&(A=-10),"Exercise"==this.properties.context&&(this.properties.joker||this.properties.faker||E.push({type:"text",text:"X",x:t.x2+A,y:60,fill:C,fontfamily:"Arial",fontsize:35,fontweight:"bold",textanchor:"start"}),this.properties.joker&&E.push({type:"text",text:"J",x:t.x2+A,y:60,fill:C,fontfamily:"Arial",fontsize:35,fontweight:"bold",textanchor:"start"}),this.properties.faker&&E.push({type:"text",text:"K",x:t.x2+A,y:60,fill:C,fontfamily:"Arial",fontsize:35,fontweight:"bold",textanchor:"start"}),t={x2:t.x2+A+22,y1:35}),"Simulation"==this.properties.context&&(E.push({type:"text",text:"S",x:t.x2+A,y:60,fill:C,fontfamily:"Arial",fontsize:35,fontweight:"bold",textanchor:"start"}),t=new R.BBox({x2:t.x2+A+22,y1:35}))}return this.outlineWidth>0&&I.push(R.outline(E,this.outlineWidth,this.strokeWidth,this.outlineColor)),{pre:I,post:E,bbox:t}}},function(I,E,t){var R=t(0);I.exports=function(){var I,E=[],t=[],C=this.colors.frameColor[this.properties.affiliation];if(!this.properties.frame&&this.icon)return[];var A={type:this.properties.baseGeometry.g.type};switch(A.type){case"path":A.d=this.properties.baseGeometry.g.d;break;case"circle":A.cx=this.properties.baseGeometry.g.cx,A.cy=this.properties.baseGeometry.g.cy,A.r=this.properties.baseGeometry.g.r}if(A.fill=this.colors.fillColor[this.properties.affiliation],A.fillopacity=this.fillOpacity,A.stroke=C,A.strokewidth=this.size>=10?this.strokeWidth:10,this.frame&&this.outlineWidth>0&&("path"==A.type&&this.fill&&!this.monoColor?(outline={type:this.properties.baseGeometry.g.type},outline.d=this.properties.baseGeometry.g.d+" Z",outline.strokewidth=this.size>=10?this.strokeWidth:10):outline=A,E.push(R.outline(outline,this.outlineWidth,this.strokeWidth,this.outlineColor))),""==this.monoColor&&this.fill||!this.properties.notpresent||(A.strokedasharray=this.properties.notpresent),t.push(A),this.properties.dismounted&&(I={Neutral:{type:"path",stroke:!1,fill:C,d:"M 92.6 140.1 L 92.6 151.6 L 100 155 L 108 151.3 L 108 140.1 L 92.6 140.1 z "},Unknown:{type:"path",stroke:!1,fill:C,d:"M 92.5 147.1 L 92.5 156.5 L 99.8 162 L 107.5 156.3 L 107.5 147.1 L 92.5 147.1 z "}},I.hasOwnProperty(this.properties.affiliation)&&t.push(I[this.properties.affiliation])),this.properties.space&&(I={Friend:{type:"path",stroke:!1,fill:C,d:"M 100,30 C 90,30 80,35 68.65625,50 l 62.6875,0 C 120,35 110,30 100,30"},Hostile:{type:"path",stroke:!1,fill:C,d:"M67,50 L100,20 133,50 z"},Neutral:{type:"path",stroke:!1,fill:C,d:"M45,50 l0,-20 110,0 0,20 z"},Unknown:{type:"path",stroke:!1,fill:C,d:"M 100 22.5 C 85 22.5 70 31.669211 66 50 L 134 50 C 130 31.669204 115 22.5 100 22.5 z"}},t.push(I[this.properties.affiliation])),this.properties.activity&&(I={Friend:{type:"path",stroke:!1,fill:C,d:"m 160,135 0,15 15,0 0,-15 z m -135,0 15,0 0,15 -15,0 z m 135,-85 0,15 15,0 0,-15 z m -135,0 15,0 0,15 -15,0 z"},Hostile:{type:"path",stroke:!1,fill:C,d:"M 100 28 L 89.40625 38.59375 L 100 49.21875 L 110.59375 38.59375 L 100 28 z M 38.6875 89.3125 L 28.0625 99.9375 L 38.6875 110.53125 L 49.28125 99.9375 L 38.6875 89.3125 z M 161.40625 89.40625 L 150.78125 100 L 161.40625 110.59375 L 172 100 L 161.40625 89.40625 z M 99.9375 150.71875 L 89.3125 161.3125 L 99.9375 171.9375 L 110.53125 161.3125 L 99.9375 150.71875"},Neutral:{type:"path",stroke:!1,fill:C,d:"m 140,140 15,0 0,15 -15,0 z m -80,0 0,15 -15,0 0,-15 z m 80,-80 0,-15 15,0 0,15 z m -80,0 -15,0 0,-15 15,0 z"},Unknown:{type:"path",stroke:!1,fill:C,d:"M 107.96875 31.46875 L 92.03125 31.71875 L 92.03125 46.4375 L 107.71875 46.4375 L 107.96875 31.46875 z M 47.03125 92.5 L 31.09375 92.75 L 31.09375 107.5 L 46.78125 107.5 L 47.03125 92.5 z M 168.4375 92.5 L 152.5 92.75 L 152.5 107.5 L 168.1875 107.5 L 168.4375 92.5 z M 107.96875 153.5625 L 92.03125 153.8125 L 92.03125 168.53125 L 107.71875 168.53125 L 107.96875 153.5625 z"}},t.push(I[this.properties.affiliation])),this.fill&&this.frame&&this.properties.notpresent&&!this.properties.unframed){switch(A={type:this.properties.baseGeometry.g.type},A.type){case"path":A.d=this.properties.baseGeometry.g.d;break;case"circle":A.cx=this.properties.baseGeometry.g.cx,A.cy=this.properties.baseGeometry.g.cy,A.r=this.properties.baseGeometry.g.r}A.fill=!1,A.stroke=this.colors.white[this.properties.affiliation],A.strokewidth=parseFloat(this.strokeWidth)+1,A.strokedasharray=this.properties.notpresent,t.push(A)}return{pre:E,post:t,bbox:this.properties.baseGeometry.bbox}}},function(I,E,t){var R=t(0);I.exports=function(){var I=[],E=[],t=this.properties.baseGeometry.bbox;""==this.properties.baseGeometry.g&&(t=this.bbox);var C=new R.BBox,A=this.colors.iconColor[this.properties.affiliation]||this.colors.iconColor.Friend;if(this.infoFields&&this.direction&&""!=this.direction){var e=[{type:"rotate",degree:this.direction,x:100,y:100,draw:[{type:"path",fill:A,stroke:A,strokewidth:this.strokeWidth,d:"M100,100 l0,-75 -5,3 5,-15 5,15 -5,-3"}]}];C.y1=Math.min(100-95*Math.cos(this.direction/360*Math.PI*2),100),C.y2=Math.max(100-95*Math.cos(this.direction/360*Math.PI*2),100),C.x1=Math.min(100+95*Math.sin(this.direction/360*Math.PI*2),100),C.x2=Math.max(100+95*Math.sin(this.direction/360*Math.PI*2),100),"Ground"!=this.properties.baseDimension&&""!=this.properties.baseDimension||(e=[{type:"translate",x:0,y:t.y2,draw:e},{type:"path",fill:A,stroke:A,strokewidth:this.strokeWidth,d:"M 100,"+t.y2+"l0,100"}],C.y2+=t.y2+parseFloat(this.strokeWidth)),this.outlineWidth>0&&I.push(R.outline(e,this.outlineWidth,this.strokeWidth,this.outlineColor)),E.push(e)}return{pre:I,post:E,bbox:C}}},function(I,E,t){var R=t(0);I.exports=function(){var I,E,t=[],C=[],A=new R.BBox({x1:50,x2:150,y1:50,y2:150}),e=[],S=[],T=[],N=[];if(this.icon){var G=this.colors.fillColor[this.properties.affiliation],O=this.colors.fillColor.Neutral;E=this.colors.iconColor[this.properties.affiliation];var M=this.colors.iconFillColor[this.properties.affiliation],o=this.colors.none[this.properties.affiliation],L=this.colors.black[this.properties.affiliation],i=this.colors.white[this.properties.affiliation],s=(R._STD2525?"2525":"APP6")+","+this.properties.dimension+this.properties.affiliation+this.properties.notpresent+",frame:"+this.frame+",alternateMedal:"+this.alternateMedal+",colors:{fillcolor:"+G+",neutralColor"+O+",iconColor:"+E+",iconFillColor:"+M+",none:"+o+",black:"+L+",white:"+i+"}";if(R._iconCache.hasOwnProperty(s)?e=R._iconCache[s].iconParts:(R._iconCache[s]={},e=R._iconCache[s].iconParts=R._geticnParts(this.properties,this.colors,R._STD2525,this.monoColor,this.alternateMedal)),this.properties.numberSIDC||(-1!=["WMGX--","WMMX--","WMFX--","WMX---","WMSX--"].indexOf(this.properties.functionid)&&(A.y1=10,"Unknown"!=this.properties.affiliation&&(A.x2=this.properties.baseGeometry.bbox.x2+20)),R._iconCache[s].hasOwnProperty("letterSIDC")?(I=R._iconCache[s].letterSIDC.icons,N=R._iconCache[s].letterSIDC.bbox):"function"==typeof R._getLetterSIDCicn?(R._iconCache[s].letterSIDC=R._getLetterSIDCicn(e,R._STD2525),I=R._iconCache[s].letterSIDC.icons,N=R._iconCache[s].letterSIDC.bbox):console.warn("ms._getLetterSIDCicn() is not present, you will need to load functionality for letter based SIDCs")),this.properties.numberSIDC){var r=String(this.SIDC).substr(4,2);R._iconCache[s].hasOwnProperty("numberSIDC")?R._iconCache[s].numberSIDC.symbolSet.hasOwnProperty(r)?(I=R._iconCache[s].numberSIDC.symbolSet[r].icons,S=R._iconCache[s].numberSIDC.symbolSet[r].m1,T=R._iconCache[s].numberSIDC.symbolSet[r].m2,N=R._iconCache[s].numberSIDC.symbolSet[r].bbox):"function"==typeof R._getNumberSIDCicn?(R._iconCache[s].numberSIDC.symbolSet[r]=R._getNumberSIDCicn(r,e,R._STD2525),I=R._iconCache[s].numberSIDC.symbolSet[r].icons,S=R._iconCache[s].numberSIDC.symbolSet[r].m1,T=R._iconCache[s].numberSIDC.symbolSet[r].m2,N=R._iconCache[s].numberSIDC.symbolSet[r].bbox):console.warn("ms._getNumberSIDCicn() is not present, you will need to load functionality for number based SIDCs"):(R._iconCache[s].numberSIDC={},R._iconCache[s].numberSIDC.symbolSet={},"function"==typeof R._getNumberSIDCicn?(R._iconCache[s].numberSIDC.symbolSet[r]=R._getNumberSIDCicn(r,e,R._STD2525),I=R._iconCache[s].numberSIDC.symbolSet[r].icons,S=R._iconCache[s].numberSIDC.symbolSet[r].m1,T=R._iconCache[s].numberSIDC.symbolSet[r].m2,N=R._iconCache[s].numberSIDC.symbolSet[r].bbox):console.warn("ms._getNumberSIDCicn() is not present, you will need to load functionality for number based SIDCs"))}E=this.colors.iconColor[this.properties.affiliation];var n=[{type:"path",stroke:!1,fill:E,d:"m 94.8206,78.1372 c -0.4542,6.8983 0.6532,14.323 5.3424,19.6985 4.509,5.6933 11.309,9.3573 14.98,15.7283 3.164,6.353 -0.09,14.245 -5.903,17.822 -7.268,4.817 -18.6219,2.785 -22.7328,-5.249 -1.5511,-2.796 -2.3828,-5.931 -2.8815,-9.071 -3.5048,0.416 -7.0093,0.835 -10.5142,1.252 0.8239,8.555 5.2263,17.287 13.2544,21.111 7.8232,3.736 17.1891,3.783 25.3291,1.052 8.846,-3.103 15.737,-11.958 15.171,-21.537 0.05,-6.951 -4.272,-12.85 -9.134,-17.403 -4.526,-4.6949 -11.048,-8.3862 -12.401,-15.2748 -1.215,-2.3639 -0.889,-8.129 -0.889,-8.129 z m -0.6253,-20.5177 0,11.6509 11.6527,0 0,-11.6509 z"}];if(this.properties.numberSIDC){var l=I[this.properties.functionid.substr(0,6)];void 0===l&&(l=I[this.properties.functionid.substr(0,4)+"00"]),void 0===l?"000000"!=this.properties.functionid.substr(0,6)&&""!=this.properties.functionid.substr(0,6)&&(C.push(n),this._validIcon=!1):C.push(l),N.hasOwnProperty(this.properties.functionid.substr(0,6))&&(A=new R.BBox(N[this.properties.functionid.substr(0,6)])),"95"==this.properties.functionid.substr(4,2)&&C.push(e["GR.IC.FF.HEADQUARTERS OR HEADQUARTERS ELEMENT"]),"96"==this.properties.functionid.substr(4,2)&&C.push(e["GR.IC.FF.DIVISION AND BELOW SUPPORT"]),"97"==this.properties.functionid.substr(4,2)&&C.push(e["GR.IC.FF.CORPS SUPPORT"]),"98"==this.properties.functionid.substr(4,2)&&C.push(e["GR.IC.FF.THEATRE SUPPORT"]),C.push("00"!=this.properties.functionid.substr(6,2)?S[this.properties.functionid.substr(6,2)]:[]),C.push("00"!=this.properties.functionid.substr(8,2)?T[this.properties.functionid.substr(8,2)]:[])}else{var c=this.SIDC.substr(0,1)+"-"+this.SIDC.substr(2,1)+"-"+this.SIDC.substr(4,6);I[c]?C.push(I[c]):"------"!=this.SIDC.substr(4,6)&&""!=this.SIDC.substr(4,6)&&(C.push(n),this._validIcon=!1),N[c]&&(A=new R.BBox(N[c]))}}return this.frame&&this.fill&&!this.monoColor||this.outlineWidth>0&&t.push(R.outline(C,this.outlineWidth,this.strokeWidth,this.outlineColor)),{pre:t,post:C,bbox:A}}},function(I,E,t){var R=t(0);I.exports=function(){var I,E=[],t=[],C=new R.BBox(this.properties.baseGeometry.bbox),A=new R.BBox;if(this.properties.headquarters){var e=100,S=this.hqStafLength||R._hqStafLength;["AirFriend","AirNeutral","GroundFriend","GroundNeutral","SeaNeutral","SubsurfaceNeutral"].indexOf(this.properties.dimension+this.properties.affiliation)>-1&&(e=C.y2),this.properties.dimensionType+this.properties.affiliationType=="SubsurfaceFriend"&&(e=C.y1),I={type:"path",d:"M"+C.x1+","+e+" L"+C.x1+","+(C.y2+S)},this.outlineWidth>0&&E.push(R.outline(I,this.outlineWidth,this.strokeWidth,this.outlineColor)),t.push(I),A.y2=C.y2+S}if(this.properties.taskForce&&(I={type:"path",d:"M55,"+C.y1+" L55,"+(C.y1-40)+" 145,"+(C.y1-40)+" 145,"+C.y1},this.outlineWidth>0&&E.push(R.outline(I,this.outlineWidth,this.strokeWidth,this.outlineColor)),t.push(I),A.y1=C.y1-40),this.properties.installation){var T=0;["AirHostile","GroundHostile","SeaHostile"].indexOf(this.properties.dimension+this.properties.affiliation)>-1&&(T=14),["AirUnknown","GroundUnknown","SeaUnknown","AirFriend","SeaFriend"].indexOf(this.properties.dimension+this.properties.affiliation)>-1&&(T=2),I={type:"path",fill:this.colors.frameColor[this.properties.affiliation],d:"M85,"+(C.y1+T-this.strokeWidth/2)+" 85,"+(C.y1-10)+" 115,"+(C.y1-10)+" 115,"+(C.y1+T-this.strokeWidth/2)+" 100,"+(C.y1-this.strokeWidth)+" Z"},this.outlineWidth>0&&E.push(R.outline(I,this.outlineWidth,this.strokeWidth,this.outlineColor)),t.push(I),A.merge({y1:C.y1-10})}if(this.properties.feintDummy){var N=C.y1-40-C.width()/2;I={type:"path",strokedasharray:R._dashArrays.feintDummy,d:"M100,"+N+" L"+C.x1+","+(C.y1-40)+" M100,"+N+" L"+C.x2+","+(C.y1-40)},this.outlineWidth>0&&E.push(R.outline(I,this.outlineWidth,this.strokeWidth,this.outlineColor)),t.push(I),A.merge({y1:N})}if(this.properties.echelon){var G=this.properties.installation?15:0,O={"Team/Crew":{g:[{type:"circle",cx:100,cy:C.y1-20,r:15},{type:"path",d:"M80,"+(C.y1-10)+"L120,"+(C.y1-30)}],bbox:{y1:C.y1-40-G}},Squad:{g:[{type:"circle",fill:this.colors.frameColor[this.properties.affiliation],cx:100,cy:C.y1-20,r:7.5}],bbox:{y1:C.y1-20-7.5-G}},Section:{g:[{type:"circle",fill:this.colors.frameColor[this.properties.affiliation],cx:115,cy:C.y1-20,r:7.5},{type:"circle",fill:this.colors.frameColor[this.properties.affiliation],cx:85,cy:C.y1-20,r:7.5}],bbox:{y1:C.y1-20-7.5-G}},"Platoon/detachment":{g:[{type:"circle",fill:this.colors.frameColor[this.properties.affiliation],cx:100,cy:C.y1-20,r:7.5},{type:"circle",fill:this.colors.frameColor[this.properties.affiliation],cx:70,cy:C.y1-20,r:7.5},{type:"circle",fill:this.colors.frameColor[this.properties.affiliation],cx:130,cy:C.y1-20,r:7.5}],bbox:{y1:C.y1-20-7.5-G}},"Company/battery/troop":{g:[{type:"path",d:"M100,"+(C.y1-10)+"L100,"+(C.y1-35)}],bbox:{y1:C.y1-40-G}},"Battalion/squadron":{g:[{type:"path",d:"M90,"+(C.y1-10)+"L90,"+(C.y1-35)},{type:"path",d:"M110,"+(C.y1-10)+"L110,"+(C.y1-35)}],bbox:{y1:C.y1-40-G}},"Regiment/group":{g:[{type:"path",d:"M100,"+(C.y1-10)+"L100,"+(C.y1-35)},{type:"path",d:"M120,"+(C.y1-10)+"L120,"+(C.y1-35)},{type:"path",d:"M80,"+(C.y1-10)+"L80,"+(C.y1-35)}],bbox:{y1:C.y1-40-G}},Brigade:{g:[{type:"path",d:"M87.5,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25"}],bbox:{y1:C.y1-15-25-G}},Division:{g:[{type:"path",d:"M70,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25   M105,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25"}],bbox:{y1:C.y1-15-25-G,x1:70,x2:130}},"Corps/MEF":{g:[{type:"path",d:"M52.5,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25    M87.5,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25    M122.5,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25"}],bbox:{y1:C.y1-15-25-G,x1:52.5,x2:147.5}},Army:{g:[{type:"path",d:"M35,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25   M70,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25   M105,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25    M140,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25"}],bbox:{y1:C.y1-15-25-G,x1:35,x2:165}},"Army Group/front":{g:[{type:"path",d:"M17.5,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25    M52.5,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25    M87.5,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25    M122.5,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25       M157.5,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25"}],bbox:{y1:C.y1-15-25-G,x1:17.5,x2:182.5}},"Region/Theater":{g:[{type:"path",d:"M0,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25   M35,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25   M70,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25   M105,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25    M140,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25     M175,"+(C.y1-10)+" l25,-25 m0,25 l-25,-25"}],bbox:{y1:C.y1-15-25-G,x1:0,x2:200}},Command:{g:[{type:"path",d:"M70,"+(C.y1-22.5)+" l25,0 m-12.5,12.5 l0,-25   M105,"+(C.y1-22.5)+" l25,0 m-12.5,12.5 l0,-25"}],bbox:{y1:C.y1-15-25-G,x1:70,x2:130}}};O.hasOwnProperty(this.properties.echelon)&&(I=O[this.properties.echelon].g,this.outlineWidth>0&&E.push(R.outline({type:"translate",x:0,y:-G,draw:I},this.outlineWidth,this.strokeWidth,this.outlineColor)),t.push({type:"translate",x:0,y:-G,draw:I}),A.merge(O[this.properties.echelon].bbox))}if(this.properties.mobility){this.frame||(C.y2=this.bbox.y2),"Neutral"==this.properties.affiliation&&("Towed"!=this.properties.mobility&&"Short towed array"!=this.properties.mobility&&"Long towed Array"!=this.properties.mobility||(C.y2+=8),"Over snow (prime mover)"!=this.properties.mobility&&"Sled"!=this.properties.mobility||(C.y2+=13));var M={"Wheeled limited cross country":{g:[{type:"path",d:"M 50,1 l 100,0"},{type:"circle",cx:55,cy:8,r:8},{type:"circle",cx:145,cy:8,r:8}],bbox:{y2:C.y2+16}},"Wheeled cross country":{g:[{type:"path",d:"M 50,1 l 100,0"},{type:"circle",cx:55,cy:8,r:8},{type:"circle",cx:145,cy:8,r:8},{type:"circle",cx:100,cy:8,r:8}],bbox:{y2:C.y2+16}},Tracked:{g:[{type:"path",d:"M 50,1 l 100,0 c15,0 15,15 0,15 l -100,0 c-15,0 -15,-15 0,-15"}],bbox:{y2:C.y2+18,x1:42,x2:168}},"Wheeled and tracked combination":{g:[{type:"circle",cx:55,cy:8,r:8},{type:"path",d:"M 80,1 l 70,0 c15,0 15,15 0,15 l -70,0 c-15,0 -15,-15 0,-15"}],bbox:{y2:C.y2+16,x2:168}},Towed:{g:[{type:"path",d:"M 60,1 l 80,0"},{type:"circle",cx:55,cy:3,r:8},{type:"circle",cx:145,cy:3,r:8}],bbox:{y2:C.y2+10}},Rail:{g:[{type:"path",d:"M 50,1 l 100,0"},{type:"circle",cx:55,cy:8,r:8},{type:"circle",cx:70,cy:8,r:8},{type:"circle",cx:130,cy:8,r:8},{type:"circle",cx:145,cy:8,r:8}],bbox:{y2:C.y2+16}},"Over snow (prime mover)":{g:[{type:"path",d:"M 50,-9 l10,10 90,0"}],bbox:{y2:C.y2+9}},Sled:{g:[{type:"path",d:"M 145,-12  c15,0 15,15 0,15 l -90,0 c-15,0 -15,-15 0,-15"}],bbox:{y2:C.y2+15,x1:42,x2:168}},"Pack animals":{g:[{type:"path",d:"M 80,20 l 10,-20 10,20 10,-20 10,20"}],bbox:{y2:C.y2+20}},Barge:{g:[{type:"path",d:"M 50,1 l 100,0 c0,10 -100,10 -100,0"}],bbox:{y2:C.y2+10}},Amphibious:{g:[{type:"path",d:"M 65,10 c 0,-10 10,-10 10,0 0,10 10,10 10,0\t0,-10 10,-10 10,0 0,10 10,10 10,0\t0,-10 10,-10 10,0 0,10 10,10 10,0\t0,-10 10,-10 10,0"}],bbox:{y2:C.y2+20}},"Short towed array":{g:[{type:"path",fill:this.colors.frameColor[this.properties.affiliation],d:"M 50,5 l 100,0 M50,0 l10,0 0,10 -10,0 z M150,0 l-10,0 0,10 10,0 z M100,0 l5,5 -5,5 -5,-5 z"}],bbox:{y2:C.y2+10}},"Long towed Array":{g:[{type:"path",fill:this.colors.frameColor[this.properties.affiliation],d:"M 50,5 l 100,0 M50,0 l10,0 0,10 -10,0 z M150,0 l-10,0 0,10 10,0 z M105,0 l-10,0 0,10 10,0 z M75,0 l5,5 -5,5 -5,-5 z  M125,0 l5,5 -5,5 -5,-5 z"}],bbox:{y2:C.y2+10}}};M.hasOwnProperty(this.properties.mobility)&&(I=M[this.properties.mobility].g,this.outlineWidth>0&&E.push(R.outline({type:"translate",x:0,y:C.y2,draw:I},this.outlineWidth,this.strokeWidth,this.outlineColor)),t.push({type:"translate",x:0,y:C.y2,draw:I}),A.merge(M[this.properties.mobility].bbox))}if(this.properties.leadership){var o={Friend:{type:"path",d:"m 45,60 55,-25 55,25"},Neutral:{type:"path",d:"m 45,60 55,-25 55,25"},Hostile:{type:"path",d:"m 42,71 57.8,-43.3 58.2,42.8"},Unknown:{type:"path",d:"m 50,60 10,-20 80,0 10,20"}}[this.properties.affiliation];"Deputy Individual"==this.properties.leadership&&(o.strokedasharray=R._dashArrays.feintDummy),E.push(o),A.merge({y1:A.y1-20})}for(var L=0;L<E.length;L++)E[L].hasOwnProperty("fill")||(E[L].fill=!1),E[L].hasOwnProperty("stroke")||(E[L].stroke=this.colors.iconColor[this.properties.affiliation]),E[L].hasOwnProperty("strokewidth")||(E[L].strokewidth=this.strokeWidth);for(var L=0;L<t.length;L++)t[L].hasOwnProperty("fill")||(t[L].fill=!1),t[L].hasOwnProperty("stroke")||(t[L].stroke=this.colors.iconColor[this.properties.affiliation]),t[L].hasOwnProperty("strokewidth")||(t[L].strokewidth=this.strokeWidth);return{pre:E,post:t,bbox:A}}},function(I,E,t){var R=t(0);I.exports=function(){var I=[],E=[],t=this.properties.baseGeometry.bbox,C=t.y1,A=t.y2;if(this.properties.condition)if(this.properties.fill&&""===this.monoColor){var e={FullyCapable:"rgb(0,255,0)",Damaged:"rgb(255,255,0)",Destroyed:"rgb(255,0,0)",FullToCapacity:"rgb(0, 180, 240)"};!this.properties.frame&&this.properties.iconBottom&&(A=this.properties.iconBottom),A+=this.properties.mobility?25:5,E.push({type:"path",strokewidth:this.strokeWidth,fill:e[this.properties.condition],stroke:this.colors.frameColor[this.properties.affiliation],d:"M"+t.x1+","+A+" l"+t.width()+",0 0,15 -"+t.width()+",0 z"}),A+=15,this.outlineWidth>0&&I.push(R.outline(E,this.outlineWidth,this.strokeWidth,this.outlineColor))}else"Damaged"!=this.properties.condition&&"Destroyed"!=this.properties.condition||(E.push({type:"path",d:"M150,20 L50,180",strokewidth:2*this.strokeWidth,stroke:this.colors.frameColor[this.properties.affiliation]}),C=20,A=180),"Destroyed"==this.properties.condition&&E.push({type:"path",d:"M50,20 L150,180",strokewidth:2*this.strokeWidth,stroke:this.colors.frameColor[this.properties.affiliation]}),this.outlineWidth>0&&I.push(R.outline(E,this.outlineWidth,this.strokeWidth,this.outlineColor));return{pre:I,post:E,bbox:{y1:C,y2:A}}}},function(I,E,t){var R=t(0);I.exports=function(){function I(I){if(0==I.length)return 0;for(var E={" ":9,"!":10,'"':15,"#":17,$:17,"%":27,"&":22,"'":8,"(":10,")":10,"*":12,"+":18,",":9,"-":10,".":9,"/":9,0:17,1:17,2:17,3:17,4:17,5:17,6:17,7:17,8:17,9:17,":":10,";":10,"<":18,"=":18,">":18,"?":19,"@":30,A:22,B:22,C:22,D:22,E:21,F:19,G:24,H:22,I:9,J:17,K:22,L:19,M:25,N:22,O:24,P:21,Q:24,R:22,S:21,T:19,U:22,V:21,W:29,X:21,Y:21,Z:19,"[":10,"]":10,"^":18,_:17,"`":10,a:17,b:19,c:17,d:19,e:17,f:10,g:19,h:19,i:9,j:9,k:17,l:9,m:27,n:19,o:19,p:19,q:19,r:12,s:17,t:10,u:19,v:17,w:24,x:17,y:17,z:15,"{":12,"|":9,"}":12,"~":18},t=0,R=0;R<I.length;R++)t+=T/30*(E[I[R]]?E[I[R]]:28.5);return t+=G}function E(E){var t=[];for(var R in E)if(this.hasOwnProperty(R)&&""!=this[R]){if(!E.hasOwnProperty(R))continue;for(var C=0;C<(E[R].length||1);C++){var A;if(A=Array.isArray(E[R])?E[R][C]:E[R],labelbox={y2:A.y,y1:A.y-A.fontsize},"start"==A.textanchor&&(labelbox.x1=A.x,labelbox.x2=A.x+I(this[R])*(A.fontsize/T)),"middle"==A.textanchor){var G=I(this[R])*(A.fontsize/T);labelbox.x1=A.x-G/2,labelbox.x2=A.x+G/2}"end"==A.textanchor&&(labelbox.x1=A.x-I(this[R])*(A.fontsize/T),labelbox.x2=A.x),N.merge(labelbox);var O={type:"text",fontfamily:S,fill:e};A.hasOwnProperty("stroke")&&(O.stroke=A.stroke),A.hasOwnProperty("textanchor")&&(O.textanchor=A.textanchor),A.hasOwnProperty("fontsize")&&(O.fontsize=A.fontsize),A.hasOwnProperty("fontweight")&&(O.fontweight=A.fontweight),O.x=A.x,O.y=A.y,O.text=this[R],t.push(O)}}return t}var t=[],C=[],A=this.properties.baseGeometry.bbox,e=this.infoColor||this.colors.iconColor[this.properties.affiliation]||this.colors.iconColor.Friend,S="Arial",T=this.infoSize,N=new R.BBox,G=20;if(this.properties.numberSIDC){String(this.SIDC).substr(4,2)}else{if(!R._labelCache.hasOwnProperty("letter")){R._labelCache.letter={};for(var O in R._labelOverrides.letter)R._labelOverrides.letter.hasOwnProperty(O)&&R._labelOverrides.letter[O].call(this,R._labelCache.letter)}var M=this.SIDC.substr(0,1)+"-"+this.SIDC.substr(2,1)+"-"+this.SIDC.substr(4,6);if(R._labelCache.letter.hasOwnProperty(M))return C.push(E.call(this,R._labelCache.letter[M])),this.outlineWidth>0&&t.push(R.outline(C,this.outlineWidth,this.strokeWidth,this.outlineColor)),{pre:t,post:C,bbox:N}}var o=this.quantity||this.reinforcedReduced||this.staffComments||this.additionalInformation||this.evaluationRating||this.combatEffectiveness||this.signatureEquipment||this.higherFormation||this.hostile||this.iffSif||this.sigint||this.uniqueDesignation||this.type||this.dtg||this.altitudeDepth||this.location||this.speed||this.specialHeadquarters||this.platformType||this.equipmentTeardownTime||this.commonIdentifier||this.auxiliaryEquipmentIndicator||this.headquartersElement;if(this.infoFields&&o){this.specialHeadquarters&&C.push(function(I){var E=42,t=115;return 1==I.length&&(E=45,t=115),3==I.length&&(E=35,t=110),I.length>=4&&(E=32,t=110),{type:"text",text:I,x:100,y:t,textanchor:"middle",fontsize:E,fontfamily:S,fill:e,stroke:!1,fontweight:"bold"}}(this.specialHeadquarters)),this.quantity&&(C.push({type:"text",text:this.quantity,x:100,y:A.y1-10,textanchor:"middle",fontsize:T,fontfamily:S,fill:e,stroke:!1}),N.y1=A.y1-10-T),this.headquartersElement&&(this.properties.condition&&this.properties.fill&&""==this.monoColor&&(A.y2+=15),C.push({type:"text",text:this.headquartersElement,x:100,y:A.y2+35,textanchor:"middle",fontsize:35,fontfamily:S,fontweight:"bold",fill:e,stroke:!1}),N.y2=A.y2+35);var L,i={L1:"",L2:"",L3:"",L4:"",L5:"",R1:"",R2:"",R3:"",R4:"",R5:""};isNaN(this.SIDC)||"Air"!=this.properties.dimension||(i.R1=this.uniqueDesignation,i.R2=this.iffSif,i.R3=this.type,(this.speed||this.altitudeDepth)&&(L=[],this.speed&&L.push(this.speed),this.location&&L.push(this.altitudeDepth),i.R4=L.join(" ")),(this.staffComments||this.location)&&(L=[],this.staffComments&&L.push(this.staffComments),this.additionalInformation&&L.push(this.additionalInformation),i.R5=L.join(" "))),(isNaN(this.SIDC)||"Ground"==this.properties.baseDimension)&&(i.L1=this.dtg,(this.altitudeDepth||this.location)&&(L=[],this.altitudeDepth&&L.push(this.altitudeDepth),this.location&&L.push(this.location),i.L2=L.join(" ")),(this.type||this.platformType||this.commonIdentifier)&&(L=[],this.type&&L.push(this.type),this.platformType&&L.push(this.platformType),this.commonIdentifier&&L.push(this.commonIdentifier),i.L3=L.join(" ")),i.L4=this.uniqueDesignation,i.L5=this.speed,i.R1=this.reinforcedReduced,i.R2=this.staffComments,(this.additionalInformation||this.equipmentTeardownTime)&&(L=[],this.additionalInformation&&L.push(this.additionalInformation),this.equipmentTeardownTime&&L.push(this.equipmentTeardownTime),i.R3=L.join(" ")),i.R4=this.higherFormation,(this.evaluationRating||this.combatEffectiveness||this.signatureEquipment||this.hostile||this.iffSif)&&(L=[],this.evaluationRating&&L.push(this.evaluationRating),this.combatEffectiveness&&L.push(this.combatEffectiveness),this.signatureEquipment&&L.push(this.signatureEquipment),this.hostile&&L.push(this.hostile),this.iffSif&&L.push(this.iffSif),i.R5=L.join(" "))),isNaN(this.SIDC)||"Sea"!=this.properties.dimension||(i.R1=this.uniqueDesignation,i.R2=this.type,i.R3=this.iffSif,(this.staffComments||this.location)&&(L=[],this.staffComments&&L.push(this.staffComments),this.additionalInformation&&L.push(this.additionalInformation),i.R4=L.join(" ")),(this.location||this.speed)&&(L=[],this.location&&L.push(this.location),this.speed&&L.push(this.speed),i.R5=L.join(" "))),isNaN(this.SIDC)||"Subsurface"!=this.properties.dimension||(i.R1=this.uniqueDesignation,i.R2=this.type,i.R3=this.altitudeDepth,i.R4=this.staffComments,i.R5=this.additionalInformation),N.x1=A.x1-Math.max(this.specialHeadquarters?(I(this.specialHeadquarters)-this.properties.baseGeometry.bbox.width())/2:0,I(i.L1),I(i.L2),I(i.L3),I(i.L4),I(i.L5)),N.x2=A.x2+Math.max(this.specialHeadquarters?(I(this.specialHeadquarters)-this.properties.baseGeometry.bbox.width())/2:0,I(i.R1),I(i.R2),I(i.R3),I(i.R4),I(i.R5)),(i.L1||i.R1)&&(N.y1=Math.min(N.y1,100-2.5*T)),(i.L2||i.R2)&&(N.y1=Math.min(N.y1,100-1.5*T)),(i.L4||i.R4)&&(N.y2=Math.max(N.y2,100+1.7*T)),(i.L5||i.R5)&&(N.y2=Math.max(N.y2,100+2.7*T)),i.L1&&C.push({type:"text",text:i.L1,x:A.x1-G,y:100-1.5*T,textanchor:"end",fontsize:T,fontfamily:S,fill:e,stroke:!1}),i.L2&&C.push({type:"text",text:i.L2,x:A.x1-G,y:100-.5*T,textanchor:"end",fontsize:T,fontfamily:S,fill:e,stroke:!1}),i.L3&&C.push({type:"text",text:i.L3,x:A.x1-G,y:100+.5*T,textanchor:"end",fontsize:T,fontfamily:S,fill:e,stroke:!1}),i.L4&&C.push({type:"text",text:i.L4,x:A.x1-G,y:100+1.5*T,textanchor:"end",fontsize:T,fontfamily:S,fill:e,stroke:!1}),i.L5&&C.push({type:"text",text:i.L5,x:A.x1-G,y:100+2.5*T,textanchor:"end",fontsize:T,fontfamily:S,fill:e,stroke:!1}),i.R1&&C.push({type:"text",text:i.R1,x:A.x2+G,y:100-1.5*T,textanchor:"start",fontsize:T,fontfamily:S,fill:e,stroke:!1}),i.R2&&C.push({type:"text",text:i.R2,x:A.x2+G,y:100-.5*T,textanchor:"start",fontsize:T,fontfamily:S,fill:e,stroke:!1}),i.R3&&C.push({type:"text",text:i.R3,x:A.x2+G,y:100+.5*T,textanchor:"start",fontsize:T,fontfamily:S,fill:e,stroke:!1}),i.R4&&C.push({type:"text",text:i.R4,x:A.x2+G,y:100+1.5*T,textanchor:"start",fontsize:T,fontfamily:S,fill:e,stroke:!1}),i.R5&&C.push({type:"text",text:i.R5,x:A.x2+G,y:100+2.5*T,textanchor:"start",fontsize:T,fontfamily:S,fill:e,stroke:!1}),this.outlineWidth>0&&t.push(R.outline(C,this.outlineWidth,this.strokeWidth,this.outlineColor))}return{pre:t,post:C,bbox:N}}},function(I,E,t){var R=t(0);R._geticnParts=t(32),R._symbolGeometries=t(33),R.Symbol=t(31),R.symbol=R.Symbol,R.setColorMode("Light",t(5)),R.setColorMode("Medium",t(6)),R.setColorMode("Dark",t(2)),R.setColorMode("FrameColor",t(3)),R.setColorMode("IconColor",t(4)),R.setColorMode("Black",t(1)),R.setColorMode("White",t(9)),R.setColorMode("OffWhite",t(8)),R.setColorMode("None",t(7)),R._getLetterProperties=t(29),R._getLetterSIDCicn=t(14),R.addSIDCicons(t(24),"letter"),R.addSIDCicons(t(16),"letter"),R.addSIDCicons(t(19),"letter"),R.addSIDCicons(t(18),"letter"),R.addSIDCicons(t(20),"letter"),R.addSIDCicons(t(21),"letter"),R.addSIDCicons(t(26),"letter"),R.addSIDCicons(t(23),"letter"),R.addSIDCicons(t(22),"letter"),R.addSIDCicons(t(25),"letter"),R.addSIDCicons(t(17),"letter"),R.addIconParts(t(10)),R.addSIDCicons(t(15),"letter"),R.addIconParts(t(11)),R.addSIDCicons(t(27),"letter"),R.addLabelOverrides(t(12),"letter"),R.addSIDCicons(t(28),"letter"),R.addLabelOverrides(t(13),"letter"),R._getNumberProperties=t(50),R._getNumberSIDCicn=t(34),R.addSIDCicons(t(36),"number"),R.addSIDCicons(t(37),"number"),R.addSIDCicons(t(47),"number"),R.addSIDCicons(t(48),"number"),R.addSIDCicons(t(42),"number"),R.addSIDCicons(t(39),"number"),R.addSIDCicons(t(40),"number"),R.addSIDCicons(t(41),"number"),R.addSIDCicons(t(44),"number"),R.addSIDCicons(t(49),"number"),R.addSIDCicons(t(43),"number"),R.addSIDCicons(t(45),"number"),R.addSIDCicons(t(35),"number"),R.addSIDCicons(t(46),"number"),R.addSIDCicons(t(38),"number"),R.addSymbolPart(t(52)),R.addSymbolPart(t(54)),R.addSymbolPart(t(55)),R.addSymbolPart(t(56)),R.addSymbolPart(t(51)),R.addSymbolPart(t(57)),R.addSymbolPart(t(53)),R._Path2D=t(30),I.exports=R},function(I,E){I.exports=function(I){return void 0===I&&(I={}),{x1:void 0!==I.x1?I.x1:100,y1:void 0!==I.y1?I.y1:100,x2:void 0!==I.x2?I.x2:100,y2:void 0!==I.y2?I.y2:100,width:function(){return this.x2-this.x1},height:function(){return this.y2-this.y1},getSize:function(){return{height:this.y2-this.y1,width:this.x2-this.x1}},merge:function(I){return this.x1=I.x1<=this.x1?I.x1:this.x1,this.y1=I.y1<=this.y1?I.y1:this.y1,this.x2=I.x2>=this.x2?I.x2:this.x2,this.y2=I.y2>=this.y2?I.y2:this.y2,this}}}},function(I,E){I.exports=function(I){return"2525"==I?(this._STD2525=!0,!0):"APP6"==I&&(this._STD2525=!1,!0)}},function(I,E,t){var R=t(0);I.exports=function(I){function E(I,t){for(var C=0;C<I.length;C++)if(Array.isArray(I[C]))I[C].length&&E.call(this,I[C],t);else if("object"==typeof I[C]){switch(t.lineWidth=I[C].strokewidth||this.strokeWidth,void 0!==I[C].stroke&&(I[C].stroke?t.strokeStyle=I[C].stroke:t.strokeStyle="rgba(0,0,0,0)"),I[C].strokedasharray?t.setLineDash(I[C].strokedasharray.split(",")):0!=t.getLineDash().length&&t.setLineDash([]),I[C].linecap&&(t.lineCap=I[C].linecap,t.lineJoin=I[C].linecap),I[C].fill&&(t.fillStyle=I[C].fill),I[C].fill||(t.fillStyle="rgba(0,0,0,0)"),void 0!==I[C].fillopacity&&(t.globalAlpha=I[C].fillopacity),I[C].type){case"path":if("undefined"!=typeof Path2D){var A=new Path2D(I[C].d);(void 0===I[C].fill||void 0!==I[C].fill&&I[C].fill)&&t.fill(A),(void 0===I[C].stroke||void 0!==I[C].stroke&&I[C].stroke)&&t.stroke(A)}else"function"==typeof R._Path2D?(R._Path2D(t,I[C].d),(void 0===I[C].fill||void 0!==I[C].fill&&I[C].fill)&&t.fill(),(void 0===I[C].stroke||void 0!==I[C].stroke&&I[C].stroke)&&t.stroke()):console.warn("ms._Path2D() is not present, you will need to load functionality for using Canvas in older version of Internet Explorer.");break;case"circle":t.beginPath(),t.arc(I[C].cx,I[C].cy,I[C].r,0,2*Math.PI,!1),(void 0===I[C].fill||void 0!==I[C].fill&&I[C].fill)&&t.fill(),(void 0===I[C].stroke||void 0!==I[C].stroke&&I[C].stroke)&&t.stroke();break;case"text":t.font=(void 0!==I[C].fontweight?I[C].fontweight+" ":"")+I[C].fontsize+"px "+I[C].fontfamily,t.textAlign="middle"==I[C].textanchor?"center":I[C].textanchor,t.fillText(I[C].text,I[C].x,I[C].y),I[C].stroke&&t.strokeText(I[C].text,I[C].x,I[C].y);break;case"translate":t.save(),t.translate(I[C].x,I[C].y),E.call(this,I[C].draw,t),t.restore();break;case"rotate":var e=I[C].x,S=I[C].y;t.save(),t.translate(e,S),t.rotate(I[C].degree*Math.PI/180),t.translate(-e,-S),E.call(this,I[C].draw,t),t.restore();break;case"scale":t.save(),t.scale(I[C].factor,I[C].factor),E.call(this,I[C].draw,t),t.restore()}I[C].linecap&&(t.lineCap="butt",t.lineJoin="miter"),void 0!==I[C].fillopacity&&(t.globalAlpha=1)}}var t=document.createElement("canvas");I=I||1,t.width=this.width*I,t.height=this.height*I;var C=t.getContext("2d");C.scale(I*this.size/100,I*this.size/100),C.translate(-(this.bbox.x1-this.strokeWidth-this.outlineWidth),-(this.bbox.y1-this.strokeWidth-this.outlineWidth));for(var A=0;A<this.drawInstructions.length;A++)E.call(this,this.drawInstructions[A],C);return t}},function(I,E,t){var R=t(0);I.exports=function(){function I(E){for(var t="",R=0;R<E.length;R++)if(Array.isArray(E[R]))E[R].length&&(t+=I.call(this,E[R]));else if("object"==typeof E[R]){var C;if("svg"==E[R].type)C=E[R].svg;else{switch(E[R].type){case"path":C='<path d="'+E[R].d+'" ';break;case"circle":C='<circle cx="'+E[R].cx+'" cy="'+E[R].cy+'" r="'+E[R].r+'" ';break;case"text":C='<text x="'+E[R].x+'" y="'+E[R].y+'" text-anchor="'+E[R].textanchor+'" font-size="'+E[R].fontsize+'" font-family="'+E[R].fontfamily+'" ',E[R].fontweight&&(C+='font-weight="'+E[R].fontweight+'" ');break;case"translate":C='<g transform="translate('+E[R].x+","+E[R].y+')" ';break;case"rotate":C='<g transform="rotate('+E[R].degree+","+E[R].x+","+E[R].y+')" ';break;case"scale":C='<g transform="scale('+E[R].factor+')" '}switch(void 0!==E[R].stroke&&(C+='stroke-width="'+(E[R].strokewidth||this.strokeWidth)+'" ',E[R].strokedasharray&&(C+='stroke-dasharray="'+E[R].strokedasharray+'" '),E[R].linecap&&(C+='stroke-linecap="'+E[R].linecap+'" ',C+='stroke-linejoin="'+E[R].linecap+'" '),E[R].stroke?C+='stroke="'+E[R].stroke+'" ':C+='stroke="none" '),void 0!==E[R].fill&&(C+='fill="'+(E[R].fill?E[R].fill:"none")+'" '),void 0!==E[R].fillopacity&&(C+='fill-opacity="'+E[R].fillopacity+'" '),C+=">",E[R].type){case"path":C+="</path>";break;case"circle":C+="</circle>";break;case"text":C+=E[R].text+"</text>";break;case"translate":case"rotate":case"scale":C+=I.call(this,E[R].draw),C+="</g>"}}t+=C}return t}for(var E='<svg xmlns="'+R._svgNS+'" version="1.2" baseProfile="tiny" width="'+this.width+'" height="'+this.height+'" viewBox="'+(this.bbox.x1-this.strokeWidth-this.outlineWidth)+" "+(this.bbox.y1-this.strokeWidth-this.outlineWidth)+" "+this.baseWidth+" "+this.baseHeight+'">',t=0;t<this.drawInstructions.length;t++)E+=I.call(this,this.drawInstructions[t]);return E+="</svg>",this.XML=E,E}},function(I,E,t){var R=t(0);I.exports=function(){var I="object"==typeof this.colorMode?this.colorMode:R.getColorMode(this.colorMode),E=R.getColorMode("FrameColor"),t=R.getColorMode("IconColor"),C=I,A=R.getColorMode("Black"),e=R.getColorMode("White"),S=R.getColorMode("OffWhite"),T=R.getColorMode("None");this.civilianColor&&this.properties.civilian&&(I.Friend=I.Neutral=I.Unknown=I.Civilian,E.Friend=E.Neutral=E.Unknown=E.Civilian,t.Friend=t.Neutral=t.Unknown=t.Civilian),(this.properties.joker||this.properties.faker)&&(I.Friend=I.Hostile,E.Friend=E.Hostile,t.Friend=t.Hostile),""!=this.monoColor&&(E.Friend=E.Neutral=E.Hostile=E.Unknown=E.Civilian=this.monoColor,A=E,e=I=T);var N={fillColor:I,frameColor:E,iconColor:t,iconFillColor:C,none:T,black:A,white:e};return this.properties.frame?N.frameColor=A:N.frameColor=T,this.properties.fill?(N.fillColor=this.properties.frame||!this.properties.frame&&!this.icon?I:T,N.iconColor=A,N.iconFillColor=this.properties.frame?S:I,N.white=S):(N.fillColor=T,N.frameColor=this.properties.frame?E:T,N.iconColor=E,N.iconFillColor=T,this.properties.frame||this.properties.fill||this.icon||(N.frameColor=A,N.fillColor=A)),N}},function(I,E,t){var R=t(0);I.exports=function(){var I={activity:!1,affiliation:"",baseAffilation:"",baseDimension:"",baseGeometry:{g:"",bbox:{}},civilian:!1,condition:"",context:"",dimension:"",dimensionUnknown:!1,echelon:"",faker:!1,fenintDummy:!1,fill:this.fill,frame:this.frame,functionid:"",headquarters:!1,installation:!1,joker:!1,mobility:"",notpresent:"",numberSIDC:!1,space:!1,taskForce:!1},E={};return E.context=["Reality","Exercise","Simulation"],E.status=["Present","Planned","FullyCapable","Damaged","Destroyed","FullToCapacity"],E.echelonMobility={11:"Team/Crew",12:"Squad",13:"Section",14:"Platoon/detachment",15:"Company/battery/troop",16:"Battalion/squadron",17:"Regiment/group",18:"Brigade",21:"Division",22:"Corps/MEF",23:"Army",24:"Army Group/front",25:"Region/Theater",26:"Command",31:"Wheeled limited cross country",32:"Wheeled cross country",33:"Tracked",34:"Wheeled and tracked combination",35:"Towed",36:"Rail",37:"Pack animals",41:"Over snow (prime mover)",42:"Sled",51:"Barge",52:"Amphibious",61:"Short towed array",62:"Long towed Array",71:"Leader Individual",72:"Deputy Individual"},E.affiliation=["Hostile","Friend","Neutral","Unknown"],E.dimension=["Air","Ground","Sea","Subsurface"],I.context=E.context[0],""!=this.monoColor&&(I.fill=!1),this.SIDC=String(this.SIDC).replace(/\*/g,"-").replace(/ /g,""),I.numberSIDC=!isNaN(this.SIDC),I.numberSIDC?"function"==typeof R._getNumberProperties?I=R._getNumberProperties.call(this,I,E):console.warn("ms._getNumberProperties() is not present, you will need to load functionality for letter based SIDCs"):"function"==typeof R._getLetterProperties?I=R._getLetterProperties.call(this,I,E):console.warn("ms._getNumberProperties() is not present, you will need to load functionality for letter based SIDCs"),R._symbolGeometries.hasOwnProperty(I.dimension+I.affiliation)?I.baseGeometry=R._symbolGeometries[I.dimension+I.affiliation]:I.baseGeometry.bbox=new R.BBox,this.frame||this.icon||(I.baseGeometry=R._symbolGeometries.PositionMarker),I}},function(I,E){I.exports=function(){return void 0!==this.width&&void 0!==this.height||this.updateSymbol(),{width:this.width,height:this.height}}},function(I,E,t){var R=t(0);I.exports=function(I){if("object"==typeof I)for(var E in I)I.hasOwnProperty(E)&&("sidc"!==E?this[E]=I[E]:this.SIDC=I[E]);this._validIcon=!0,this.properties=this.getProperties(),this.colors=this.getColors(),this.drawInstructions=[],this.bbox=new R.BBox;for(var t in R._symbolParts)if(R._symbolParts.hasOwnProperty(t)){var C=R._symbolParts[t].call(this);C.pre&&(C.pre.length&&this.drawInstructions.unshift(C.pre),C.post.length&&this.drawInstructions.push(C.post),C.bbox&&this.bbox.merge(C.bbox))}this.baseWidth=this.bbox.width()+Number(2*this.strokeWidth)+Number(2*this.outlineWidth),this.baseHeight=this.bbox.height()+Number(2*this.strokeWidth)+Number(2*this.outlineWidth),this.width=this.baseWidth*this.size/100,this.height=this.baseHeight*this.size/100;var A={x:100,y:100};if(this.octagonAnchor={x:(A.x-this.bbox.x1+parseFloat(this.strokeWidth)+parseFloat(this.outlineWidth))*this.size/100,y:(A.y-this.bbox.y1+parseFloat(this.strokeWidth)+parseFloat(this.outlineWidth))*this.size/100},this.properties.headquarters){var e=this.hqStafLength||R._hqStafLength;A={x:this.properties.baseGeometry.bbox.x1,y:this.properties.baseGeometry.bbox.y2+e}}return this.markerAnchor={x:(A.x-this.bbox.x1+parseFloat(this.strokeWidth)+parseFloat(this.outlineWidth))*this.size/100,y:(A.y-this.bbox.y1+parseFloat(this.strokeWidth)+parseFloat(this.outlineWidth))*this.size/100},R.autoSVG&&this.asSVG(),this}}])});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var format = {};

format.ArmyXML = __webpack_require__(13);
format.GeoJSON = __webpack_require__(14);
format.NVG = __webpack_require__(15);
format.SLF = __webpack_require__(16);

module.exports = format;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var geometry = {};

geometry.bearingBetween = __webpack_require__(17);
geometry.circle = __webpack_require__(18);
geometry.circleCorridorPolygon = __webpack_require__(19);
geometry.corridor = __webpack_require__(20);
geometry.distanceBetween = __webpack_require__(21);
geometry.pointBetween = __webpack_require__(22);
geometry.rectangle = __webpack_require__(23);
geometry.toDistanceBearing = __webpack_require__(24);

module.exports = geometry;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var geometryConverter = {};

geometryConverter[
  "AIRSPACE COORDINATION AREA"
] = __webpack_require__(25);
geometryConverter["AMBUSH"] = __webpack_require__(26);
geometryConverter[
  "ARTILLERY TARGET INTELLIGENCE ZONE"
] = __webpack_require__(27);
geometryConverter["BLOCK"] = __webpack_require__(28);
geometryConverter["BREACH"] = __webpack_require__(29);
geometryConverter["BYPASS"] = __webpack_require__(30);
geometryConverter[
  "CALL FOR FIRE ZONE"
] = __webpack_require__(31);
geometryConverter["CANALIZE"] = __webpack_require__(32);
geometryConverter[
  "CENSOR ZONE"
] = __webpack_require__(33);
//geometryConverter.circle = require("./geometryconverter/circle.js");
geometryConverter["CLEAR"] = __webpack_require__(34);
geometryConverter.corridor = __webpack_require__(35);
geometryConverter.cover = __webpack_require__(36);
geometryConverter[
  "CRITICAL FRIENDLY ZONE"
] = __webpack_require__(37);
geometryConverter[
  "DEAD SPACE AREA"
] = __webpack_require__(38);
geometryConverter["DELAY"] = __webpack_require__(39);
geometryConverter[
  "FIRE SUPPORT AREA"
] = __webpack_require__(40);
geometryConverter["FIX"] = __webpack_require__(41);
geometryConverter[
  "FREE FIRE AREA"
] = __webpack_require__(42);
geometryConverter.guard = __webpack_require__(43);
geometryConverter["ISOLATE"] = __webpack_require__(44);
geometryConverter[
  "MAIN ATTACK"
] = __webpack_require__(45);
geometryConverter[
  "NAMED AREA OF INTEREST"
] = __webpack_require__(46);
geometryConverter.occupy = __webpack_require__(47);
geometryConverter[
  "RESTRICTIVE FIRE AREA"
] = __webpack_require__(48);
geometryConverter.searchArea = __webpack_require__(49);
geometryConverter[
  "SENSOR ZONE"
] = __webpack_require__(50);
geometryConverter[
  "SUPPORTING ATTACK"
] = __webpack_require__(51);
geometryConverter[
  "TARGET BUILD-UP AREA"
] = __webpack_require__(52);
geometryConverter[
  "TARGET VALUE AREA"
] = __webpack_require__(53);
geometryConverter[
  "TARGETED AREA OF INTEREST"
] = __webpack_require__(54);
geometryConverter[
  "TERMINALLY GUIDED MUNITION FOOTPRINT"
] = __webpack_require__(55);
geometryConverter[
  "ZONE OF RESPONSIBILITY"
] = __webpack_require__(56);

module.exports = geometryConverter;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

function graphic(feature) {
  this.SIDC = feature.properties.sidc;
  this.converted = false;
  this.geometry = feature.geometry;
  this.properties = this.getProperties();

  if (this.properties.graphic) {
    // If we don't have a graphics cache, create one
    if (typeof ms._graphicCache === "undefined") {
      ms._graphicCache = {};
    }

    // Letter based SIDC.
    if (!this.properties.numberSIDC) {
      if (
        !ms._graphicCache.hasOwnProperty("letter-" + this.properties.numberSIDC)
      ) {
        var sidc = {};
        ms._getLetterSIDCgraphic(sidc, this.properties.numberSIDC);
        ms._graphicCache["letter-" + this.properties.numberSIDC] = sidc;
      }
      var graphics = ms._graphicCache["letter-" + this.properties.numberSIDC];
      var genericSIDC =
        this.SIDC.substr(0, 1) +
        "-" +
        this.SIDC.substr(2, 1) +
        "-" +
        this.SIDC.substr(4, 6);
      if (graphics[genericSIDC]) {
        var graphicObject = graphics[genericSIDC].call(this, feature);
        this.geometry = graphicObject.geometry;
        this.annotations = graphicObject.annotations;
        this.converted = true;
      } else {
        if (this.geometry.type != "Point") {
          // Points is likely symbols, remove this when everything is implemented.
          console.log(
            "Did not find graphic converter for: " +
              this.SIDC +
              " (" +
              this.geometry.type +
              ")"
          );
        }
      }
    } else {
      // Number based SIDC
      console.log("TODO number sidc stuff");
    }
  }
}

graphic.prototype.getProperties = __webpack_require__(57);
graphic.prototype.isConverted = function() {
  return this.converted;
};

module.exports = graphic;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

function GraphicsLayer(data) {
  this.data = data;
  for (var i = 0; i < this.data.features.length; i++) {
    var feature = this.data.features[i];

    feature.graphic = new ms.Graphic(feature);
    feature.geometry = feature.graphic.geometry;

    if (feature.geometry && feature.geometry.type == "Point") {
      var properties = feature.properties;
      properties.size = properties.size || 30; //TODO set default size value from setting
      if (properties.sidc.charAt(0) != "X") {
        //Skip SitaWare custom graphics for now
        feature.symbol = new ms.Symbol(properties);
      }
    }
  }
}

GraphicsLayer.prototype.asCesium = __webpack_require__(58);

GraphicsLayer.prototype.asOpenLayers = __webpack_require__(59);

module.exports = GraphicsLayer;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

module.exports = function(sidc, STD2525) {
  // We modify sidc directly in the called functions so we don't need to return anything.
  // Might change this later since it adds complexity to understand the code.
  for (var i in ms._letterSIDCgraphics) {
    if (!ms._letterSIDCgraphics.hasOwnProperty(i)) continue;
    ms._letterSIDCgraphics[i].call(this, sidc, STD2525);
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

module.exports = function(properties, mapping) {
  this.SIDC = this.SIDC.toUpperCase();

  var codingscheme = this.SIDC.charAt(0) != "" ? this.SIDC.charAt(0) : "-";
  var affiliation = this.SIDC.charAt(1) != "" ? this.SIDC.charAt(1) : "-";
  var battledimension = this.SIDC.charAt(2) != "" ? this.SIDC.charAt(2) : "-";
  var status = this.SIDC.charAt(3) != "" ? this.SIDC.charAt(3) : "-";
  var functionid = (properties.functionid = this.SIDC.substr(4, 6) != ""
    ? this.SIDC.substr(4, 6)
    : "------");
  var symbolmodifier11 = this.SIDC.charAt(10) != ""
    ? this.SIDC.charAt(10)
    : "-";
  var symbolmodifier12 = this.SIDC.charAt(11) != ""
    ? this.SIDC.charAt(11)
    : "-";
  var countrycode = this.SIDC.substr(12, 2) != ""
    ? this.SIDC.substr(12, 2)
    : "--";
  var orderofbattle = this.SIDC.charAt(14) != "" ? this.SIDC.charAt(14) : "-";

  if (["H", "S", "J", "K"].indexOf(affiliation) > -1)
    properties.affiliation = mapping.affiliation[0];
  if (["F", "A", "D", "M"].indexOf(affiliation) > -1)
    properties.affiliation = mapping.affiliation[1];
  if (["N", "L"].indexOf(affiliation) > -1)
    properties.affiliation = mapping.affiliation[2];
  if (["P", "U", "G", "W", "O"].indexOf(affiliation) > -1)
    properties.affiliation = mapping.affiliation[3];

  if (["P", "A"].indexOf(battledimension) > -1)
    properties.dimension = mapping.dimension[0];
  if (["G", "Z", "F", "X"].indexOf(battledimension) > -1)
    properties.dimension = mapping.dimension[1];
  if (["S"].indexOf(battledimension) > -1)
    properties.dimension = mapping.dimension[2];
  if (["U"].indexOf(battledimension) > -1)
    properties.dimension = mapping.dimension[3];

  //Planned/Anticipated/Suspect symbols should have a dashed outline
  if (status == "A") {
    properties.notpresent = ms._dashArrays.anticipated;
  }
  if (["P", "A", "S", "G", "M"].indexOf(affiliation) > -1) {
    properties.notpresent = ms._dashArrays.pending;
  }

  if (orderofbattle == "X") {
    properties.graphic = true;
  }

  // Army XML compability
  //sidc['CIRCLE----'] = ms.geometryConverter.circle;

  // Systematic SitaWare compatibility
  var genericSIDC =
    this.SIDC.substr(0, 1) +
    "-" +
    this.SIDC.substr(2, 1) +
    "-" +
    this.SIDC.substr(4, 6);
  if (["X---C-----", "X---I-----", "X---A-----"].indexOf(genericSIDC) != -1) {
    properties.graphic = true;
  }

  return properties;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Tactical graphics in 2525C + some extra
module.exports = function tacticalPoints(sidc, std2525) {
  sidc["G-T-B-----"] = ms.geometryConverter["BLOCK"]; //TACGRP.TSK.BLK
  sidc["G-T-H-----"] = ms.geometryConverter["BREACH"]; //TACGRP.TSK.BRH
  sidc["G-T-Y-----"] = ms.geometryConverter["BYPASS"]; //TACGRP.TSK.BYS
  sidc["G-T-C-----"] = ms.geometryConverter["CANALIZE"]; //TACGRP.TSK.CNZ
  sidc["G-T-X-----"] = ms.geometryConverter["CLEAR"]; //TACGRP.TSK.CLR
  //sidc['G-T-J-----'] = [];//TACGRP.TSK.CNT
  //sidc['G-T-K-----'] = [];//TACGRP.TSK.CATK
  //sidc['G-T-KF----'] = [];//TACGRP.TSK.CATK.CATKF
  sidc["G-T-L-----"] = ms.geometryConverter["DELAY"]; //TACGRP.TSK.DLY
  //sidc['G-T-T-----'] = [];//TACGRP.TSK.DRT
  sidc["G-T-F-----"] = ms.geometryConverter["FIX"]; //TACGRP.TSK.FIX
  //sidc['G-T-A-----'] = [];//TACGRP.TSK.FLWASS
  //sidc['G-T-AS----'] = [];//TACGRP.TSK.FLWASS.FLWSUP
  sidc["G-T-E-----"] = ms.geometryConverter["ISOLATE"]; //TACGRP.TSK.ISL
  sidc["G-T-O-----"] = ms.geometryConverter.occupy; //TACGRP.TSK.OCC
  //sidc['G-T-P-----'] = [];//TACGRP.TSK.PNE
  //sidc['G-T-R-----'] = [];//TACGRP.TSK.RIP
  //sidc['G-T-Q-----'] = [];//TACGRP.TSK.RTN
  //sidc["G-T-M-----"] = ms.geometryConverter.delay; //TACGRP.TSK.RTM
  //sidc['G-T-S-----'] = [];//TACGRP.TSK.SCE
  //sidc['G-T-U-----'] = [];//TACGRP.TSK.SEC
  //sidc['G-T-US----'] = [];//TACGRP.TSK.SEC.SCN
  sidc["G-T-UG----"] = ms.geometryConverter.guard; //TACGRP.TSK.SEC.GUD
  sidc["G-T-UC----"] = ms.geometryConverter.cover; //TACGRP.TSK.SEC.COV
  //sidc['G-T-Z-----'] = [];//TACGRP.TSK.SZE
  //sidc['G-T-W-----'] = [];//TACGRP.TSK.WDR
  //sidc['G-T-WP----'] = [];//TACGRP.TSK.WDR.WDRUP
  //sidc['G-G-------'] = [];//TACGRP.C2GM
  //sidc['G-G-G-----'] = [];//TACGRP.C2GM.GNL
  //sidc['G-G-GP----'] = [];//TACGRP.C2GM.GNL.PNT
  //sidc['G-G-GPU---'] = [];//TACGRP.C2GM.GNL.PNT.USW
  //sidc['G-G-GPUU--'] = [];//TACGRP.C2GM.GNL.PNT.USW.UH2
  //sidc['G-G-GPW---'] = [];//TACGRP.C2GM.GNL.PNT.WPN
  //sidc['G-G-GL----'] = [];//TACGRP.C2GM.GNL.LNE
  //sidc['G-G-GLB---'] = [];//TACGRP.C2GM.GNL.LNE.BNDS
  //sidc['G-G-GLF---'] = [];//TACGRP.C2GM.GNL.LNE.FLOT
  //sidc['G-G-GLC---'] = [];//TACGRP.C2GM.GNL.LNE.LOC
  //sidc['G-G-GLP---'] = [];//TACGRP.C2GM.GNL.LNE.PHELNE
  //sidc['G-G-GLL---'] = [];//TACGRP.C2GM.GNL.LNE.LITLNE
  //sidc['G-G-GA----'] = [];//TACGRP.C2GM.GNL.ARS
  //sidc['G-G-GAG---'] = [];//TACGRP.C2GM.GNL.ARS.GENARA
  //sidc['G-G-GAA---'] = [];//TACGRP.C2GM.GNL.ARS.ABYARA
  //sidc['G-G-GAE---'] = [];//TACGRP.C2GM.GNL.ARS.EMTARA
  //sidc['G-G-GAF---'] = [];//TACGRP.C2GM.GNL.ARS.FTFDAR
  //sidc['G-G-GAD---'] = [];//TACGRP.C2GM.GNL.ARS.DRPZ
  //sidc['G-G-GAX---'] = [];//TACGRP.C2GM.GNL.ARS.EZ
  //sidc['G-G-GAL---'] = [];//TACGRP.C2GM.GNL.ARS.LZ
  //sidc['G-G-GAP---'] = [];//TACGRP.C2GM.GNL.ARS.PZ
  //sidc['G-G-GAS---'] = [];//TACGRP.C2GM.GNL.ARS.SRHARA
  //sidc['G-G-GAY---'] = [];//TACGRP.C2GM.GNL.ARS.LAARA
  //sidc['G-G-GAZ---'] = [];//TACGRP.C2GM.GNL.ARS.AIRFZ
  //sidc['G-G-A-----'] = [];//TACGRP.C2GM.AVN
  //sidc['G-G-AP----'] = [];//TACGRP.C2GM.AVN.PNT
  //sidc['G-G-AL----'] = [];//TACGRP.C2GM.AVN.LNE
  //sidc['G-G-ALC---'] = [];//TACGRP.C2GM.AVN.LNE.ACDR
  //sidc['G-G-ALM---'] = [];//TACGRP.C2GM.AVN.LNE.MRR
  //sidc['G-G-ALS---'] = [];//TACGRP.C2GM.AVN.LNE.SAAFR
  //sidc['G-G-ALU---'] = [];//TACGRP.C2GM.AVN.LNE.UAR
  //sidc['G-G-ALL---'] = [];//TACGRP.C2GM.AVN.LNE.LLTR
  //sidc['G-G-AA----'] = [];//TACGRP.C2GM.AVN.ARS
  //sidc['G-G-AAR---'] = [];//TACGRP.C2GM.AVN.ARS.ROZ
  //sidc['G-G-AAF---'] = [];//TACGRP.C2GM.AVN.ARS.SHRDEZ
  //sidc['G-G-AAH---'] = [];//TACGRP.C2GM.AVN.ARS.HIDACZ
  //sidc['G-G-AAM---'] = [];//TACGRP.C2GM.AVN.ARS.MEZ
  //sidc['G-G-AAML--'] = [];//TACGRP.C2GM.AVN.ARS.MEZ.LAMEZ
  //sidc['G-G-AAMH--'] = [];//TACGRP.C2GM.AVN.ARS.MEZ.HAMEZ
  //sidc['G-G-AAW---'] = [];//TACGRP.C2GM.AVN.ARS.WFZ
  //sidc['G-G-P-----'] = [];//TACGRP.C2GM.DCPN
  //sidc['G-G-PD----'] = [];//TACGRP.C2GM.DCPN.DMY
  //sidc['G-G-PA----'] = [];//TACGRP.C2GM.DCPN.AAFF
  //sidc['G-G-PF----'] = [];//TACGRP.C2GM.DCPN.DAFF
  //sidc['G-G-PM----'] = [];//TACGRP.C2GM.DCPN.DMA
  //sidc['G-G-PY----'] = [];//TACGRP.C2GM.DCPN.DMAF
  //sidc['G-G-PC----'] = [];//ACGRP.C2GM.DCPN.DMYMD
  //sidc['G-G-D-----'] = [];//TACGRP.C2GM.DEF
  //sidc['G-G-DP----'] = [];//TACGRP.C2GM.DEF.PNT
  //sidc['G-G-DL----'] = [];//TACGRP.C2GM.DEF.LNE
  //sidc['G-G-DLF---'] = [];//TACGRP.C2GM.DEF.LNE.FEBA
  //sidc['G-G-DLP---'] = [];//TACGRP.C2GM.DEF.LNE.PDF
  //sidc['G-G-DA----'] = [];//TACGRP.C2GM.DEF.ARS
  //sidc['G-G-DAB---'] = [];//TACGRP.C2GM.DEF.ARS.BTLPSN
  //sidc['G-G-DABP--'] = [];//TACGRP.C2GM.DEF.ARS.BTLPSN.PBNO
  //sidc['G-G-DAE---'] = [];//TACGRP.C2GM.DEF.ARS.EMTARA
  //sidc['G-G-O-----'] = [];//TACGRP.C2GM.OFF
  //sidc['G-G-OP----'] = [];//TACGRP.C2GM.OFF.PNT
  //sidc['G-G-OL----'] = [];//TACGRP.C2GM.OFF.LNE
  //sidc['G-G-OLA---'] = [];//TACGRP.C2GM.OFF.LNE.AXSADV
  //sidc['G-G-OLAV--'] = [];//TACGRP.C2GM.OFF.LNE.AXSADV.AVN
  //sidc['G-G-OLAA--'] = [];//TACGRP.C2GM.OFF.LNE.AXSADV.ABN
  //sidc['G-G-OLAR--'] = [];//TACGRP.C2GM.OFF.LNE.AXSADV.ATK
  //sidc['G-G-OLAG--'] = [];//TACGRP.C2GM.OFF.LNE.AXSADV.GRD
  sidc["G-G-OLAGM-"] = ms.geometryConverter["MAIN ATTACK"]; //TACGRP.C2GM.OFF.LNE.AXSADV.GRD.MANATK
  sidc["G-G-OLAGS-"] = ms.geometryConverter["SUPPORTING ATTACK"]; //TACGRP.C2GM.OFF.LNE.AXSADV.GRD.SUPATK
  //sidc['G-G-OLK---'] = [];//TACGRP.C2GM.OFF.LNE.DIRATK
  //sidc['G-G-OLKA--'] = [];//TACGRP.C2GM.OFF.LNE.DIRATK.AVN
  //sidc['G-G-OLKG--'] = [];//TACGRP.C2GM.OFF.LNE.DIRATK.GRD
  //sidc['G-G-OLKGM-'] = [];//TACGRP.C2GM.OFF.LNE.DIRATK.GRD.MANATK
  //sidc['G-G-OLKGS-'] = [];//TACGRP.C2GM.OFF.LNE.DIRATK.GRD.SUPATK
  //sidc['G-G-OLF---'] = [];//TACGRP.C2GM.OFF.LNE.FCL
  //sidc['G-G-OLI---'] = [];//TACGRP.C2GM.OFF.LNE.INFNLE
  //sidc['G-G-OLL---'] = [];//TACGRP.C2GM.OFF.LNE.LMTADV
  //sidc['G-G-OLT---'] = [];//TACGRP.C2GM.OFF.LNE.LD
  //sidc['G-G-OLC---'] = [];//TACGRP.C2GM.OFF.LNE.LDLC
  //sidc['G-G-OLP---'] = [];//TACGRP.C2GM.OFF.LNE.PLD
  //sidc['G-G-OA----'] = [];//TACGRP.C2GM.OFF.ARS
  //sidc['G-G-OAA---'] = [];//TACGRP.C2GM.OFF.ARS.ASTPSN
  //sidc['G-G-OAK---'] = [];//TACGRP.C2GM.OFF.ARS.ATKPSN
  //sidc['G-G-OAF---'] = [];//TACGRP.C2GM.OFF.ARS.AFP
  //sidc['G-G-OAS---'] = [];//TACGRP.C2GM.OFF.ARS.SFP
  //sidc['G-G-OAO---'] = [];//TACGRP.C2GM.OFF.ARS.OBJ
  //sidc['G-G-OAP---'] = [];//TACGRP.C2GM.OFF.ARS.PBX
  //sidc['G-G-S-----'] = [];//TACGRP.C2GM.SPL
  //sidc['G-G-SL----'] = [];//TACGRP.C2GM.SPL.LNE
  sidc["G-G-SLA---"] = ms.geometryConverter["AMBUSH"]; //TACGRP.C2GM.SPL.LNE.AMB
  //sidc['G-G-SLH---'] = [];//TACGRP.C2GM.SPL.LNE.HGL
  //sidc['G-G-SLR---'] = [];//TACGRP.C2GM.SPL.LNE.REL
  //sidc['G-G-SLB---'] = [];//TACGRP.C2GM.SPL.LNE.BRGH
  //sidc['G-G-SA----'] = [];//TACGRP.C2GM.SPL.ARA
  //sidc['G-G-SAO---'] = [];//TACGRP.C2GM.SPL.ARA.AOO
  //sidc['G-G-SAA---'] = [];//TACGRP.C2GM.SPL.ARA.AHD
  //sidc['G-G-SAE---'] = [];//TACGRP.C2GM.SPL.ARA.ENCMT
  sidc["G-G-SAN---"] = ms.geometryConverter["NAMED AREA OF INTEREST"]; //TACGRP.C2GM.SPL.ARA.NAI
  sidc["G-G-SAT---"] = ms.geometryConverter["TARGETED AREA OF INTEREST"]; //TACGRP.C2GM.SPL.ARA.TAIS
  //sidc['G-M-------'] = [];//TACGRP.MOBSU
  //sidc['G-M-O-----'] = [];//TACGRP.MOBSU.OBST
  //sidc['G-M-OG----'] = [];//TACGRP.MOBSU.OBST.GNL
  //sidc['G-M-OGB---'] = [];//TACGRP.MOBSU.OBST.GNL.BLT
  //sidc['G-M-OGL---'] = [];//TACGRP.MOBSU.OBST.GNL.LNE
  //sidc['G-M-OGZ---'] = [];//TACGRP.MOBSU.OBST.GNL.Z
  //sidc['G-M-OGF---'] = [];//TACGRP.MOBSU.OBST.GNL.OFA
  //sidc['G-M-OGR---'] = [];//TACGRP.MOBSU.OBST.GNL.ORA
  //sidc['G-M-OS----'] = [];//TACGRP.MOBSU.OBST.ABS
  //sidc['G-M-OA----'] = [];//TACGRP.MOBSU.OBST.ATO
  //sidc['G-M-OAD---'] = [];//TACGRP.MOBSU.OBST.ATO.ATD
  //sidc['G-M-OADU--'] = [];//TACGRP.MOBSU.OBST.ATO.ATD.ATDUC
  //sidc['G-M-OADC--'] = [];//TACGRP.MOBSU.OBST.ATO.ATD.ATDC
  //sidc['G-M-OAR---'] = [];//TACGRP.MOBSU.OBST.ATO.ATDATM
  //sidc['G-M-OAO---'] = [];//TACGRP.MOBSU.OBST.ATO.TDTSM
  //sidc['G-M-OAW---'] = [];//TACGRP.MOBSU.OBST.ATO.ATW
  //sidc['G-M-OM----'] = [];//TACGRP.MOBSU.OBST.MNE
  //sidc['G-M-OMC---'] = [];//TACGRP.MOBSU.OBST.MNE.MCLST
  //sidc['G-M-OF----'] = [];//TACGRP.MOBSU.OBST.MNEFLD
  //sidc['G-M-OFD---'] = [];//TACGRP.MOBSU.OBST.MNEFLD.DYN
  //sidc['G-M-OFG---'] = [];//TACGRP.MOBSU.OBST.MNEFLD.GAP
  //sidc['G-M-OFA---'] = [];//TACGRP.MOBSU.OBST.MNEFLD.MNDARA
  //sidc['G-M-OE----'] = [];//TACGRP.MOBSU.OBST.OBSEFT
  //sidc['G-M-OEB---'] = [];//TACGRP.MOBSU.OBST.OBSEFT.BLK
  //sidc['G-M-OEF---'] = [];//TACGRP.MOBSU.OBST.OBSEFT.FIX
  //sidc['G-M-OET---'] = [];//TACGRP.MOBSU.OBST.OBSEFT.TUR
  //sidc['G-M-OED---'] = [];//TACGRP.MOBSU.OBST.OBSEFT.DRT
  //sidc['G-M-OU----'] = [];//TACGRP.MOBSU.OBST.UXO
  //sidc['G-M-OR----'] = [];//TACGRP.MOBSU.OBST.RCBB
  //sidc['G-M-ORP---'] = [];//TACGRP.MOBSU.OBST.RCBB.PLND
  //sidc['G-M-ORS---'] = [];//TACGRP.MOBSU.OBST.RCBB.SAFE
  //sidc['G-M-ORA---'] = [];//TACGRP.MOBSU.OBST.RCBB.ABP
  //sidc['G-M-ORC---'] = [];//TACGRP.MOBSU.OBST.RCBB.EXCD
  //sidc['G-M-OT----'] = [];//TACGRP.MOBSU.OBST.TRIPWR
  //sidc['G-M-OW----'] = [];//TACGRP.MOBSU.OBST.WREOBS
  //sidc['G-M-OWU---'] = [];//TACGRP.MOBSU.OBST.WREOBS.USP
  //sidc['G-M-OWS---'] = [];//TACGRP.MOBSU.OBST.WREOBS.SNGFNC
  //sidc['G-M-OWD---'] = [];//TACGRP.MOBSU.OBST.WREOBS.DBLFNC
  //sidc['G-M-OWA---'] = [];//TACGRP.MOBSU.OBST.WREOBS.DAFNC
  //sidc['G-M-OWL---'] = [];//TACGRP.MOBSU.OBST.WREOBS.LWFNC
  //sidc['G-M-OWH---'] = [];//TACGRP.MOBSU.OBST.WREOBS.HWFNC
  //sidc['G-M-OWC---'] = [];//TACGRP.MOBSU.OBST.WREOBS.CCTA
  //sidc['G-M-OWCS--'] = [];//TACGRP.MOBSU.OBST.WREOBS.CCTA.SNG
  //sidc['G-M-OWCD--'] = [];//TACGRP.MOBSU.OBST.WREOBS.CCTA.DBLSTD
  //sidc['G-M-OWCT--'] = [];//TACGRP.MOBSU.OBST.WREOBS.CCTA.TRISTD
  //sidc['G-M-OH----'] = [];//TACGRP.MOBSU.OBST.AVN
  //sidc['G-M-OHT---'] = [];//TACGRP.MOBSU.OBST.AVN.TWR
  //sidc['G-M-OHO---'] = [];//TACGRP.MOBSU.OBST.AVN.OHWIRE
  //sidc['G-M-B-----'] = [];//TACGRP.MOBSU.OBSTBP
  //sidc['G-M-BD----'] = [];//TACGRP.MOBSU.OBSTBP.DFTY
  //sidc['G-M-BDE---'] = [];//TACGRP.MOBSU.OBSTBP.DFTY.ESY
  //sidc['G-M-BDD---'] = [];//TACGRP.MOBSU.OBSTBP.DFTY.DFT
  //sidc['G-M-BDI---'] = [];//TACGRP.MOBSU.OBSTBP.DFTY.IMP
  //sidc['G-M-BC----'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE
  //sidc['G-M-BCA---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.ASTCA
  //sidc['G-M-BCB---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.BRG
  //sidc['G-M-BCF---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.FRY
  //sidc['G-M-BCE---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.FRDESY
  //sidc['G-M-BCD---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.FRDDFT
  //sidc['G-M-BCL---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.LANE
  //sidc['G-M-BCR---'] = [];//TACGRP.MOBSU.OBSTBP.CSGSTE.RFT
  //sidc['G-M-S-----'] = [];//TACGRP.MOBSU.SU
  //sidc['G-M-SL----'] = [];//TACGRP.MOBSU.SU.FTFDLN
  //sidc['G-M-SW----'] = [];//TACGRP.MOBSU.SU.FEWS
  //sidc['G-M-SP----'] = [];//TACGRP.MOBSU.SU.STRGPT
  //sidc['G-M-N-----'] = [];//TACGRP.MOBSU.CBRN
  //sidc['G-M-NM----'] = [];//TACGRP.MOBSU.CBRN.MSDZ
  //sidc['G-M-NR----'] = [];//TACGRP.MOBSU.CBRN.RADA
  //sidc['G-M-NB----'] = [];//TACGRP.MOBSU.CBRN.BIOCA
  //sidc['G-M-NC----'] = [];//TACGRP.MOBSU.CBRN.CMLCA
  //sidc['G-M-NE----'] = [];//TACGRP.MOBSU.CBRN.REEVNT
  //sidc['G-M-ND----'] = [];//TACGRP.MOBSU.CBRN.DECONP
  //sidc['G-M-NL----'] = [];//TACGRP.MOBSU.CBRN.DRCL
  //sidc['G-F-------'] = [];//TACGRP.FSUPP
  //sidc['G-F-P-----'] = [];//TACGRP.FSUPP.PNT
  //sidc['G-F-PT----'] = [];//TACGRP.FSUPP.PNT.TGT
  //sidc['G-F-PC----'] = [];//TACGRP.FSUPP.PNT.C2PNT
  //sidc['G-F-L-----'] = [];//TACGRP.FSUPP.LNE
  //sidc['G-F-LT----'] = [];//TACGRP.FSUPP.LNE.LNRTGT
  //sidc['G-F-LTS---'] = [];//TACGRP.FSUPP.LNE.LNRTGT.LSTGT
  //sidc['G-F-LTF---'] = [];//TACGRP.FSUPP.LNE.LNRTGT.FPF
  //sidc['G-F-LC----'] = [];//TACGRP.FSUPP.LNE.C2LNE
  //sidc['G-F-LCF---'] = [];//TACGRP.FSUPP.LNE.C2LNE.FSCL
  //sidc['G-F-LCC---'] = [];//TACGRP.FSUPP.LNE.C2LNE.CFL
  //sidc['G-F-LCN---'] = [];//TACGRP.FSUPP.LNE.C2LNE.NFL
  //sidc['G-F-LCR---'] = [];//TACGRP.FSUPP.LNE.C2LNE.RFL
  //sidc['G-F-LCM---'] = [];//TACGRP.FSUPP.LNE.C2LNE.MFP
  //sidc['G-F-A-----'] = [];//TACGRP.FSUPP.ARS
  //sidc['G-F-AT----'] = [];//TACGRP.FSUPP.ARS.ARATGT
  //sidc['G-F-ATG---'] = [];//TACGRP.FSUPP.ARS.ARATGT.SGTGT
  //sidc['G-F-ATS---'] = [];//TACGRP.FSUPP.ARS.ARATGT.SMK
  //sidc['G-F-ATB---'] = [];//TACGRP.FSUPP.ARS.ARATGT.BMARA
  //sidc['G-F-AC----'] = [];//TACGRP.FSUPP.ARS.C2ARS
  //TACGRP.FSUPP.ARS.C2ARS.FSA
  sidc["G-F-ACSI--"] = ms.geometryConverter["FIRE SUPPORT AREA"]; //TACGRP.FSUPP.ARS.C2ARS.FSA.IRR
  sidc["G-F-ACSR--"] = ms.geometryConverter["FIRE SUPPORT AREA"]; //TACGRP.FSUPP.ARS.C2ARS.FSA.RTG
  sidc["G-F-ACSC--"] = ms.geometryConverter["FIRE SUPPORT AREA"]; //TACGRP.FSUPP.ARS.C2ARS.FSA.CIRCLR
  //sidc['G-F-ACA---'] = [];//TACGRP.FSUPP.ARS.C2ARS.ACA
  sidc["G-F-ACAI--"] = ms.geometryConverter["AIRSPACE COORDINATION AREA"]; //TACGRP.FSUPP.ARS.C2ARS.ACA.IRR
  sidc["G-F-ACAR--"] = ms.geometryConverter["AIRSPACE COORDINATION AREA"]; //TACGRP.FSUPP.ARS.C2ARS.ACA.RTG
  sidc["G-F-ACAC--"] = ms.geometryConverter["AIRSPACE COORDINATION AREA"]; //TACGRP.FSUPP.ARS.C2ARS.ACA.CIRCLR
  //TACGRP.FSUPP.ARS.C2ARS.FFA
  sidc["G-F-ACFI--"] = ms.geometryConverter["FREE FIRE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.FFA.IRR
  sidc["G-F-ACFR--"] = ms.geometryConverter["FREE FIRE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.FFA.RTG
  sidc["G-F-ACFC--"] = ms.geometryConverter["FREE FIRE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.FFA.CIRCLR
  //sidc['G-F-ACN---'] = [];//TACGRP.FSUPP.ARS.C2ARS.NFA
  //sidc['G-F-ACNI--'] = [];//TACGRP.FSUPP.ARS.C2ARS.NFA.IRR
  //sidc['G-F-ACNR--'] = [];//TACGRP.FSUPP.ARS.C2ARS.NFA.RTG
  //sidc["G-F-ACNC--"] = []; //TACGRP.FSUPP.ARS.C2ARS.NFA.CIRCLR
  //TACGRP.FSUPP.ARS.C2ARS.RFA
  sidc["G-F-ACRI--"] = ms.geometryConverter["RESTRICTIVE FIRE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.RFA.IRR
  sidc["G-F-ACRR--"] = ms.geometryConverter["RESTRICTIVE FIRE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.RFA.RTG
  sidc["G-F-ACRC--"] = ms.geometryConverter["RESTRICTIVE FIRE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.RFA.CIRCLR
  //sidc['G-F-ACP---'] = [];//TACGRP.FSUPP.ARS.C2ARS.PAA
  //sidc['G-F-ACPR--'] = [];//TACGRP.FSUPP.ARS.C2ARS.PAA.RTG
  //sidc["G-F-ACPC--"] = []; //TACGRP.FSUPP.ARS.C2ARS.PAA.CIRCLR
  //TACGRP.FSUPP.ARS.C2ARS.SNSZ
  sidc["G-F-ACEI--"] = ms.geometryConverter["SENSOR ZONE"]; //TACGRP.FSUPP.ARS.C2ARS.SNSZ.IRR
  sidc["G-F-ACER--"] = ms.geometryConverter["SENSOR ZONE"]; //TACGRP.FSUPP.ARS.C2ARS.SNSZ.RTG
  sidc["G-F-ACEC--"] = ms.geometryConverter["SENSOR ZONE"]; //TACGRP.FSUPP.ARS.C2ARS.SNSZ.CIRCLR
  //TACGRP.FSUPP.ARS.C2ARS.DA
  sidc["G-F-ACDI--"] = ms.geometryConverter["DEAD SPACE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.DA.IRR
  sidc["G-F-ACDR--"] = ms.geometryConverter["DEAD SPACE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.DA.RTG
  sidc["G-F-ACDC--"] = ms.geometryConverter["DEAD SPACE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.DA.CIRCLR
  //TACGRP.FSUPP.ARS.C2ARS.ZOR
  sidc["G-F-ACZI--"] = ms.geometryConverter["ZONE OF RESPONSIBILITY"]; //TACGRP.FSUPP.ARS.C2ARS.ZOR.IRR
  sidc["G-F-ACZR--"] = ms.geometryConverter["ZONE OF RESPONSIBILITY"]; //TACGRP.FSUPP.ARS.C2ARS.ZOR.RTG
  sidc["G-F-ACZC--"] = ms.geometryConverter["ZONE OF RESPONSIBILITY"]; //TACGRP.FSUPP.ARS.C2ARS.ZOR.CIRCLR
  //TACGRP.FSUPP.ARS.C2ARS.TBA
  sidc["G-F-ACBI--"] = ms.geometryConverter["TARGET BUILD-UP AREA"]; //TACGRP.FSUPP.ARS.C2ARS.TBA.IRR
  sidc["G-F-ACBR--"] = ms.geometryConverter["TARGET BUILD-UP AREA"]; //TACGRP.FSUPP.ARS.C2ARS.TBA.RTG
  sidc["G-F-ACBC--"] = ms.geometryConverter["TARGET BUILD-UP AREA"]; //TACGRP.FSUPP.ARS.C2ARS.TBA.CIRCLR
  //TACGRP.FSUPP.ARS.C2ARS.TVAR
  sidc["G-F-ACVI--"] = ms.geometryConverter["TARGET VALUE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.TVAR.IRR
  sidc["G-F-ACVR--"] = ms.geometryConverter["TARGET VALUE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.TVAR.RTG
  sidc["G-F-ACVC--"] = ms.geometryConverter["TARGET VALUE AREA"]; //TACGRP.FSUPP.ARS.C2ARS.TVAR.CIRCLR
  sidc["G-F-ACT---"] =
    ms.geometryConverter["TERMINALLY GUIDED MUNITION FOOTPRINT"]; //TACGRP.FSUPP.ARS.C2ARS.TGMF
  //sidc['G-F-AZ----'] = [];//TACGRP.FSUPP.ARS.TGTAQZ
  //TACGRP.FSUPP.ARS.TGTAQZ.ATIZ
  sidc["G-F-AZII--"] =
    ms.geometryConverter["ARTILLERY TARGET INTELLIGENCE ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.ATIZ.IRR
  sidc["G-F-AZIR--"] =
    ms.geometryConverter["ARTILLERY TARGET INTELLIGENCE ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.ATIZ.RTG
  //TACGRP.FSUPP.ARS.TGTAQZ.CFFZ
  sidc["G-F-AZXI--"] = ms.geometryConverter["CALL FOR FIRE ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.CFFZ.IRR
  sidc["G-F-AZXR--"] = ms.geometryConverter["CALL FOR FIRE ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.CFFZ.RTG
  //TACGRP.FSUPP.ARS.TGTAQZ.CNS
  sidc["G-F-AZCI--"] = ms.geometryConverter["CENSOR ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.CNS.IRR
  sidc["G-F-AZCR--"] = ms.geometryConverter["CENSOR ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.CNS.RTG
  //TACGRP.FSUPP.ARS.TGTAQZ.CFZ
  sidc["G-F-AZFI--"] = ms.geometryConverter["CRITICAL FRIENDLY ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.CFZ.IRR
  sidc["G-F-AZFR--"] = ms.geometryConverter["CRITICAL FRIENDLY ZONE"]; //TACGRP.FSUPP.ARS.TGTAQZ.CFZ.RTG
  //sidc['G-F-AX----'] = [];//TACGRP.FSUPP.ARS.WPNRF
  //sidc["G-F-AXC---"] = []; //ms.geometryConverter.circle;//TACGRP.FSUPP.ARS.WPNRF.CIRCLR
  //sidc['G-F-AXS---'] = [];//TACGRP.FSUPP.ARS.WPNRF.SCR
  //sidc['G-F-AK----'] = [];//TACGRP.FSUPP.ARS.KLBOX
  //sidc['G-F-AKB---'] = [];//TACGRP.FSUPP.ARS.KLBOX.BLUE
  //sidc["G-F-AKBC--"] = []; //ms.geometryConverter.circle;//TACGRP.FSUPP.ARS.KLBOX.BLUE.CIRCLR
  //sidc['G-F-AKBI--'] = [];//TACGRP.FSUPP.ARS.KLBOX.BLUE.IRR
  //sidc['G-F-AKBR--'] = [];//TACGRP.FSUPP.ARS.KLBOX.BLUE.RTG
  //sidc['G-F-AKP---'] = [];//TACGRP.FSUPP.ARS.KLBOX.PURPLE
  //sidc["G-F-AKPC--"] = []; //ms.geometryConverter.circle;//TACGRP.FSUPP.ARS.KLBOX.PURPLE.CIRCLR
  //sidc['G-F-AKPI--'] = [];//TACGRP.FSUPP.ARS.KLBOX.PURPLE.IRR
  //sidc['G-F-AKPR--'] = [];//TACGRP.FSUPP.ARS.KLBOX.PURPLE.RTG
  //sidc['G-S-------'] = [];//TACGRP.CSS
  //sidc['G-S-P-----'] = [];//TACGRP.CSS.PNT
  //sidc['G-S-L-----'] = [];//TACGRP.CSS.LNE
  //sidc['G-S-LC----'] = [];//TACGRP.CSS.LNE.CNY
  //sidc['G-S-LCM---'] = [];//TACGRP.CSS.LNE.CNY.MCNY
  //sidc['G-S-LCH---'] = [];//TACGRP.CSS.LNE.CNY.HCNY
  //sidc['G-S-LR----'] = [];//TACGRP.CSS.LNE.SLPRUT
  //sidc['G-S-LRM---'] = [];//TACGRP.CSS.LNE.SLPRUT.MSRUT
  //sidc['G-S-LRA---'] = [];//TACGRP.CSS.LNE.SLPRUT.ASRUT
  //sidc['G-S-LRO---'] = [];//TACGRP.CSS.LNE.SLPRUT.1WTRFF
  //sidc['G-S-LRT---'] = [];//TACGRP.CSS.LNE.SLPRUT.ATRFF
  //sidc['G-S-LRW---'] = [];//TACGRP.CSS.LNE.SLPRUT.2WTRFF
  //sidc['G-S-A-----'] = [];//TACGRP.CSS.ARA
  //sidc['G-S-AD----'] = [];//TACGRP.CSS.ARA.DHA
  //sidc['G-S-AE----'] = [];//TACGRP.CSS.ARA.EPWHA
  //sidc['G-S-AR----'] = [];//TACGRP.CSS.ARA.FARP
  //sidc['G-S-AH----'] = [];//TACGRP.CSS.ARA.RHA
  //sidc['G-S-AS----'] = [];//TACGRP.CSS.ARA.SUPARS
  //sidc['G-S-ASB---'] = [];//TACGRP.CSS.ARA.SUPARS.BSA
  //sidc['G-S-ASD---'] = [];//TACGRP.CSS.ARA.SUPARS.DSA
  //sidc['G-S-ASR---'] = [];//TACGRP.CSS.ARA.SUPARS.RSA
  //sidc['G-O-------'] = [];//TACGRP.OTH
  //sidc['G-O-E-----'] = [];//TACGRP.OTH.ER
  //sidc['G-O-H-----'] = [];//TACGRP.OTH.HAZ
  //sidc['G-O-HN----'] = [];//TACGRP.OTH.HAZ.NVGL
  //sidc['G-O-S-----'] = [];//TACGRP.OTH.SSUBSR
  //sidc['G-O-B-----'] = [];//TACGRP.OTH.BERLNE
  //sidc['G-O-BE----'] = [];//TACGRP.OTH.BERLNE.ELC
  //sidc['G-O-BA----'] = [];//TACGRP.OTH.BERLNE.ACU
  //sidc['G-O-BT----'] = [];//TACGRP.OTH.BERLNE.TPD
  //sidc['G-O-BO----'] = [];//TACGRP.OTH.BERLNE.EOPI
  //sidc['G-O-F-----'] = [];//TACGRP.OTH.FIX

  //2525B compatibility
  //sidc["G-F-ATC---"] = []; //ms.geometryConverter.circle;
  //sidc["G-F-AZIC--"] = []; //ms.geometryConverter.circle;

  // Army XML compability
  sidc["C-R-LE----"] = ms.geometry.circle;

  // Systematic SitaWare compatibility
  sidc["X---C-----"] = ms.geometryConverter.corridor;
  sidc["X---I-----"] = ms.geometry.circle;
  sidc["X---A-----"] = ms.geometryConverter["SUPPORTING ATTACK"];
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// Tactical graphics in APP6-B
module.exportS = function tacticalPoints(sidc, std2525) {
  //sidc['G---------'] = [];//2.X
  //sidc['G-T-------'] = [];//2.X.1
  //sidc['G-T-G-----'] = [];//2.X.1.1
  sidc["G-T-GB----"] = ms.geometryConverter["BLOCK"]; //2.X.1.1.1
  sidc["G-T-GH----"] = ms.geometryConverter["BYPASS"]; //2.X.1.1.2
  sidc["G-T-GY----"] = ms.geometryConverter["BYPASS"]; //2.X.1.1.3
  sidc["G-T-GC----"] = ms.geometryConverter["CANALIZE"]; //2.X.1.1.4
  sidc["G-T-GX----"] = ms.geometryConverter["CLEAR"]; //2.X.1.1.5
  //sidc['G-T-GJ----'] = [];//2.X.1.1.6
  //sidc['G-T-GK----'] = [];//2.X.1.1.7
  //sidc['G-T-GKF---'] = [];//2.X.1.1.7.1
  sidc["G-T-GL----"] = ms.geometryConverter["DELAY"]; //2.X.1.1.8
  //sidc['G-T-GLT---'] = [];//2.X.1.1.8.1
  //sidc['G-T-GT----'] = [];//2.X.1.1.10
  sidc["G-T-GF----"] = ms.geometryConverter["FIX"]; //2.X.1.1.11
  //sidc['G-T-GA----'] = [];//2.X.1.1.12
  //sidc['G-T-GAS---'] = [];//2.X.1.1.12.1
  sidc["G-T-GE----"] = ms.geometryConverter["ISOLATE"]; //2.X.1.1.14
  //sidc['G-T-GO----'] = [];//2.X.1.1.16
  //sidc['G-T-GP----'] = [];//2.X.1.1.17
  //sidc['G-T-GR----'] = [];//2.X.1.1.18
  //sidc['G-T-GQ----'] = [];//2.X.1.1.19
  //sidc['G-T-GM----'] = [];//2.X.1.1.20
  //sidc['G-T-GS----'] = [];//2.X.1.1.21
  //sidc['G-T-GSS---'] = [];//2.X.1.1.21.1
  //sidc['G-T-GSG---'] = [];//2.X.1.1.21.2
  //sidc['G-T-GSC---'] = [];//2.X.1.1.21.3
  //sidc['G-T-GZ----'] = [];//2.X.1.1.22
  //sidc['G-T-GW----'] = [];//2.X.1.1.23
  //sidc['G-T-GWP---'] = [];//2.X.1.1.23.1
  //sidc['G-C-------'] = [];//2.X.2
  //sidc['G-C-M-----'] = [];//2.X.2.1
  //sidc['G-C-MG----'] = [];//2.X.2.1.1
  //sidc['G-C-MGP---'] = [];//2.X.2.1.1.1
  //sidc['G-C-MGPF--'] = [];//2.X.2.1.1.1.1
  //sidc['G-C-MGL---'] = [];//2.X.2.1.1.2
  //sidc['G-C-MGLB--'] = [];//2.X.2.1.1.2.1
  //sidc['G-C-MGLBG-'] = [];//2.X.2.1.1.2.1.1
  //sidc['G-C-MGLBGF'] = [];//2.X.2.1.1.2.1.1.1
  //sidc['G-C-MGLBGO'] = [];//2.X.2.1.1.2.1.1.2
  //sidc['G-C-MGLBGK'] = [];//2.X.2.1.1.2.1.1.3
  //sidc['G-C-MGLBGS'] = [];//2.X.2.1.1.2.1.1.4
  //sidc['G-C-MGLBL-'] = [];//2.X.2.1.1.2.1.2
  //sidc['G-C-MGLBF-'] = [];//2.X.2.1.1.2.1.3
  //sidc['G-C-MGLBR-'] = [];//2.X.2.1.1.2.1.4
  //sidc['G-C-MGLF--'] = [];//2.X.2.1.1.2.2
  //sidc['G-C-MGLL--'] = [];//2.X.2.1.1.2.3
  //sidc['G-C-MGLP--'] = [];//2.X.2.1.1.2.4
  //sidc['G-C-MGLE--'] = [];//2.X.2.1.1.2.5
  //sidc['G-C-MGLEE-'] = [];//2.X.2.1.1.2.5.1
  //sidc['G-C-MGLEA-'] = [];//2.X.2.1.1.2.5.2
  //sidc['G-C-MGLET-'] = [];//2.X.2.1.1.2.5.3
  //sidc['G-C-MGLEO-'] = [];//2.X.2.1.1.2.5.4
  //sidc['G-C-MGA---'] = [];//2.X.2.1.1.3
  //sidc['G-C-MGAU--'] = [];//2.X.2.1.1.3.1
  //sidc['G-C-MGAUA-'] = [];//2.X.2.1.1.3.1.1
  //sidc['G-C-MGAUAF'] = [];//2.X.2.1.1.3.1.1.1
  //sidc['G-C-MGAUAP'] = [];//2.X.2.1.1.3.1.1.2
  //sidc['G-C-MGAUAE'] = [];//2.X.2.1.1.3.1.1.3
  //sidc['G-C-MGAUAS'] = [];//2.X.2.1.1.3.1.1.4
  //sidc['G-C-MGAUB-'] = [];//2.X.2.1.1.3.1.2
  //sidc['G-C-MGAUBO'] = [];//2.X.2.1.1.3.1.2.1
  //sidc['G-C-MGAUBM'] = [];//2.X.2.1.1.3.1.2.2
  //sidc['G-C-MGAUBR'] = [];//2.X.2.1.1.3.1.2.3
  //sidc['G-C-MGAS--'] = [];//2.X.2.1.1.3.2
  //sidc['G-C-MGASD-'] = [];//2.X.2.1.1.3.2.1
  //sidc['G-C-MGASE-'] = [];//2.X.2.1.1.3.2.2
  //sidc['G-C-MGASL-'] = [];//2.X.2.1.1.3.2.3
  //sidc['G-C-MGASP-'] = [];//2.X.2.1.1.3.2.4
  //sidc['G-C-MGASS-'] = [];//2.X.2.1.1.3.2.5
  //sidc['G-C-MGASM-'] = [];//2.X.2.1.1.3.2.6
  //sidc['G-C-MGASG-'] = [];//2.X.2.1.1.3.2.7
  //sidc['G-C-MGASF-'] = [];//2.X.2.1.1.3.2.8
  //sidc['G-C-MGAST-'] = [];//2.X.2.1.1.3.2.9
  //sidc['G-C-MA----'] = [];//2.X.2.1.2
  //sidc['G-C-MAA---'] = [];//2.X.2.1.2.1
  //sidc['G-C-MAL---'] = [];//2.X.2.1.2.2
  //sidc['G-C-MALC--'] = [];//2.X.2.1.2.2.1
  //sidc['G-C-MALM--'] = [];//2.X.2.1.2.2.2
  //sidc['G-C-MALS--'] = [];//2.X.2.1.2.2.3
  //sidc['G-C-MALU--'] = [];//2.X.2.1.2.2.4
  //sidc['G-C-MALL--'] = [];//2.X.2.1.2.2.5
  //sidc['G-C-MALIN-'] = [];//2.X.2.1.2.2.6
  //sidc['G-C-MALIF-'] = [];//2.X.2.1.2.2.7
  //sidc['G-C-MAV---'] = [];//2.X.2.1.2.3
  //sidc['G-C-MAVR--'] = [];//2.X.2.1.2.3.1
  //sidc['G-C-MAVF--'] = [];//2.X.2.1.2.3.2
  //sidc['G-C-MAVH--'] = [];//2.X.2.1.2.3.3
  //sidc['G-C-MAVM--'] = [];//2.X.2.1.2.3.4
  //sidc['G-C-MAVML-'] = [];//2.X.2.1.2.3.4.1
  //sidc['G-C-MAVMH-'] = [];//2.X.2.1.2.3.4.2
  //sidc['G-C-MAVW--'] = [];//2.X.2.1.2.3.5
  //sidc['G-C-MD----'] = [];//2.X.2.1.3
  //sidc['G-C-MDD---'] = [];//2.X.2.1.3.1
  //sidc['G-C-MDA---'] = [];//2.X.2.1.3.2
  //sidc['G-C-MDF---'] = [];//2.X.2.1.3.3
  //sidc['G-C-MDM---'] = [];//2.X.2.1.3.4
  //sidc['G-C-MDY---'] = [];//2.X.2.1.3.5
  //sidc['G-C-MM----'] = [];//2.X.2.1.4
  //sidc['G-C-MMP---'] = [];//2.X.2.1.4.1
  //sidc['G-C-MMPB--'] = [];//2.X.2.1.4.1.2
  //sidc['G-C-MMPBO-'] = [];//2.X.2.1.4.1.2.1
  //sidc['G-C-MMPBP-'] = [];//2.X.2.1.4.1.2.2
  //sidc['G-C-MMPBL-'] = [];//2.X.2.1.4.1.2.3
  //sidc['G-C-*'] = [];//2.X.2.1.4.1.3
  //sidc['G-C-MMPSF-'] = [];//2.X.2.1.4.1.3.1
  //sidc['G-C-MMPSE-'] = [];//2.X.2.1.4.1.3.2
  //sidc['G-C-MMD---'] = [];//2.X.2.1.4.2
  //sidc['G-C-MMDF--'] = [];//2.X.2.1.4.2.1
  //sidc['G-C-MMDFA-'] = [];//2.X.2.1.4.2.1.1
  //sidc['G-C-MMDFP-'] = [];//2.X.2.1.4.2.1.2
  //sidc['G-C-MMDP--'] = [];//2.X.2.1.4.2.2
  //sidc['G-C-MMA---'] = [];//2.X.2.1.4.3
  //sidc['G-C-MMAE--'] = [];//2.X.2.1.4.3.1
  //sidc['G-C-MO----'] = [];//2.X.2.1.5
  //sidc['G-C-MOP---'] = [];//2.X.2.1.5.1
  //sidc['G-C-MOL---'] = [];//2.X.2.1.5.2
  //sidc['G-C-MOLA--'] = [];//2.X.2.1.5.2.1
  //sidc['G-C-MOLAF-'] = [];//2.X.2.1.5.2.1.1
  //sidc['G-C-MOLAA-'] = [];//2.X.2.1.5.2.1.2
  //sidc['G-C-MOLAH-'] = [];//2.X.2.1.5.2.1.3
  sidc["G-C-MOLAS-"] = ms.geometryConverter["SUPPORTING ATTACK"]; //2.X.2.1.5.2.1.4
  sidc["G-C-MOLAM-"] = ms.geometryConverter["MAIN ATTACK"]; //2.X.2.1.5.2.1.5
  //sidc['G-C-MOLAO-'] = [];//2.X.2.1.5.2.1.6
  //sidc['G-C-MOLAE-'] = [];//2.X.2.1.5.2.1.7
  //sidc['G-C-MOLAT-'] = [];//2.X.2.1.5.2.1.8
  //sidc['G-C-MOLD--'] = [];//2.X.2.1.5.2.2
  //sidc['G-C-MOLDF-'] = [];//2.X.2.1.5.2.2.1
  //sidc['G-C-MOLDY-'] = [];//2.X.2.1.5.2.2.2
  //sidc['G-C-MOLDE-'] = [];//2.X.2.1.5.2.2.3
  //sidc['G-C-MOLDT-'] = [];//2.X.2.1.5.2.2.4
  //sidc['G-C-MOLDG-'] = [];//2.X.2.1.5.2.2.5
  //sidc['G-C-MOLDR-'] = [];//2.X.2.1.5.2.2.6
  //sidc['G-C-MOLDS-'] = [];//2.X.2.1.5.2.2.7
  //sidc['G-C-MOLDM-'] = [];//2.X.2.1.5.2.2.8
  //sidc['G-C-MOLDO-'] = [];//2.X.2.1.5.2.2.9
  //sidc['G-C-MOLF--'] = [];//2.X.2.1.5.2.3
  //sidc['G-C-MOLI--'] = [];//2.X.2.1.5.2.4
  //sidc['G-C-MOLL--'] = [];//2.X.2.1.5.2.5
  //sidc['G-C-MOLT--'] = [];//2.X.2.1.5.2.6
  //sidc['G-C-MOLC--'] = [];//2.X.2.1.5.2.7
  //sidc['G-C-MOLP--'] = [];//2.X.2.1.5.2.8
  //sidc['G-C-MOLR--'] = [];//2.X.2.1.5.2.9
  //sidc['G-C-MOO---'] = [];//2.X.2.1.5.3
  //sidc['G-C-MOOA--'] = [];//2.X.2.1.5.3.1
  //sidc['G-C-MOOT--'] = [];//2.X.2.1.5.3.2
  //sidc['G-C-MOOTF-'] = [];//2.X.2.1.5.3.2.1
  //sidc['G-C-MOOTC-'] = [];//2.X.2.1.5.3.2.2
  //sidc['G-C-MOOTP-'] = [];//2.X.2.1.5.3.2.3
  //sidc['G-C-MOOP--'] = [];//2.X.2.1.5.3.3
  //sidc['G-C-MOOS--'] = [];//2.X.2.1.5.3.4
  //sidc['G-C-MOOJ--'] = [];//2.X.2.1.5.3.5
  //sidc['G-C-MOOX--'] = [];//2.X.2.1.5.3.6
  //sidc['G-C-MOOR--'] = [];//2.X.2.1.5.3.7
  //sidc['G-C-MS----'] = [];//2.X.2.1.6
  //sidc['G-C-MSG---'] = [];//2.X.2.1.6.1
  //sidc['G-C-MSGE--'] = [];//2.X.2.1.6.1.1
  //sidc['G-C-MSGEF-'] = [];//2.X.2.1.6.1.1.1
  //sidc['G-C-MSGEY-'] = [];//2.X.2.1.6.1.1.2
  sidc["G-C-MSGA--"] = ms.geometryConverter["AMBUSH"]; //2.X.2.1.6.1.2
  //sidc['G-C-MSL---'] = [];//2.X.2.1.6.2
  //sidc['G-C-MSLA--'] = [];//2.X.2.1.6.2.1
  //sidc['G-C-MSLB--'] = [];//2.X.2.1.6.2.2
  //sidc['G-C-MSLH--'] = [];//2.X.2.1.6.2.3
  //sidc['G-C-MSLR--'] = [];//2.X.2.1.6.2.4
  //sidc['G-C-MSA---'] = [];//2.X.2.1.6.3
  //sidc['G-C-MSAO--'] = [];//2.X.2.1.6.3.1
  sidc["G-C-MSAN--"] = ms.geometryConverter["NAMED AREA OF INTEREST"]; //2.X.2.1.6.3.2
  sidc["G-C-MSAT--"] = ms.geometryConverter["TARGETED AREA OF INTEREST"]; //2.X.2.1.6.3.3
  //sidc['G-C-B-----'] = [];//2.X.2.2
  //sidc['G-C-BO----'] = [];//2.X.2.2.1
  //sidc['G-C-BOG---'] = [];//2.X.2.2.1.1
  //sidc['G-C-BOGB--'] = [];//2.X.2.2.1.1.1
  //sidc['G-C-BOGL--'] = [];//2.X.2.2.1.1.2
  //sidc['G-C-BOGZ--'] = [];//2.X.2.2.1.1.3
  //sidc['G-C-BOA---'] = [];//2.X.2.2.1.2
  //sidc['G-C-BOAT--'] = [];//2.X.2.2.1.3
  //sidc['G-C-BOATO-'] = [];//2.X.2.2.1.3.1
  //sidc['G-C-BOATM-'] = [];//2.X.2.2.1.3.2
  //sidc['G-C-BOATW-'] = [];//2.X.2.2.1.3.4
  //sidc['G-C-BOAM--'] = [];//2.X.2.2.1.5
  //sidc['G-C-BOAMW-'] = [];//2.X.2.2.1.5.7
  //sidc['G-C-BOAI--'] = [];//2.X.2.2.1.6
  //sidc['G-C-BOAIL-'] = [];//2.X.2.2.1.6.3
  //sidc['G-C-BOAIG-'] = [];//2.X.2.2.1.6.4
  //sidc['G-C-BOAIM-'] = [];//2.X.2.2.1.6.9
  //sidc['G-C-BOAV--'] = [];//2.X.2.2.1.7
  //sidc['G-C-BOAE--'] = [];//2.X.2.2.1.8
  //sidc['G-C-BOAEB-'] = [];//2.X.2.2.1.8.1
  //sidc['G-C-BOAEF-'] = [];//2.X.2.2.1.8.2
  //sidc['G-C-BOAET-'] = [];//2.X.2.2.1.8.3
  //sidc['G-C-BOAED-'] = [];//2.X.2.2.1.8.4
  //sidc['G-C-BOAF--'] = [];//2.X.2.2.1.9
  //sidc['G-C-BOAFR-'] = [];//2.X.2.2.1.9.1
  //sidc['G-C-BOAU--'] = [];//2.X.2.2.1.10
  //sidc['G-C-BOAR--'] = [];//2.X.2.2.1.11
  //sidc['G-C-BOARP-'] = [];//2.X.2.2.1.11.1
  //sidc['G-C-BOARE-'] = [];//2.X.2.2.1.11.2
  //sidc['G-C-BOARS-'] = [];//2.X.2.2.1.11.3
  //sidc['G-C-BOARC-'] = [];//2.X.2.2.1.11.4
  //sidc['G-C-BOAP--'] = [];//2.X.2.2.1.12
  //sidc['G-C-BOAW--'] = [];//2.X.2.2.1.13
  //sidc['G-C-BOAWU-'] = [];//2.X.2.2.1.13.1
  //sidc['G-C-BOAWS-'] = [];//2.X.2.2.1.13.2
  //sidc['G-C-BOAWD-'] = [];//2.X.2.2.1.13.3
  //sidc['G-C-BOAWA-'] = [];//2.X.2.2.1.13.4
  //sidc['G-C-BOAWL-'] = [];//2.X.2.2.1.13.5
  //sidc['G-C-BOAWH-'] = [];//2.X.2.2.1.13.6
  //sidc['G-C-BOAWC-'] = [];//2.X.2.2.1.13.7
  //sidc['G-C-BOAWB-'] = [];//2.X.2.2.1.13.8
  //sidc['G-C-BOAWR-'] = [];//2.X.2.2.1.13.9
  //sidc['G-C-BY----'] = [];//2.X.2.2.2
  //sidc['G-C-BYO---'] = [];//2.X.2.2.2.1
  //sidc['G-C-BYOE--'] = [];//2.X.2.2.2.1.1
  //sidc['G-C-BYOD--'] = [];//2.X.2.2.2.1.2
  //sidc['G-C-BYOI--'] = [];//2.X.2.2.2.1.3
  //sidc['G-C-BYC---'] = [];//2.X.2.2.2.2
  //sidc['G-C-BYCA--'] = [];//2.X.2.2.2.2.1
  //sidc['G-C-BYCB--'] = [];//2.X.2.2.2.2.2
  //sidc['G-C-BYCF--'] = [];//2.X.2.2.2.2.3
  //sidc['G-C-BYCE--'] = [];//2.X.2.2.2.2.4
  //sidc['G-C-BYCD--'] = [];//2.X.2.2.2.2.5
  //sidc['G-C-BYCL--'] = [];//2.X.2.2.2.2.6
  //sidc['G-C-BYCR--'] = [];//2.X.2.2.2.2.7
  //sidc['G-C-BS----'] = [];//2.X.2.2.3
  //sidc['G-C-BSL---'] = [];//2.X.2.2.3.3
  //sidc['G-C-BSW---'] = [];//2.X.2.2.3.4
  //sidc['G-C-BSP---'] = [];//2.X.2.2.3.5
  //sidc['G-C-BW----'] = [];//2.X.2.2.4
  //sidc['G-C-BWM---'] = [];//2.X.2.2.4.1
  //sidc['G-C-BWA---'] = [];//2.X.2.2.4.7
  //sidc['G-C-BWC---'] = [];//2.X.2.2.4.8
  //sidc['G-C-BWH---'] = [];//2.X.2.2.4.9
  //sidc['G-C-BWK---'] = [];//2.X.2.2.4.10
  //sidc['G-C-BWD---'] = [];//2.X.2.2.4.11
  //sidc['G-C-BWR---'] = [];//2.X.2.2.4.12
  //sidc['G-C-F-----'] = [];//2.X.2.3
  //sidc['G-C-FS----'] = [];//2.X.2.3.1
  //sidc['G-C-FST---'] = [];//2.X.2.3.1.1
  //sidc['G-C-FSTC--'] = [];//2.X.2.3.1.1.2
  //sidc['G-C-FL----'] = [];//2.X.2.3.2
  //sidc['G-C-FLC---'] = [];//2.X.2.3.2.1
  //sidc['G-C-FLF---'] = [];//2.X.2.3.2.2
  //sidc['G-C-FLT---'] = [];//2.X.2.3.2.3
  //sidc['G-C-FLTP--'] = [];//2.X.2.3.2.3.1
  //sidc['G-C-FLK---'] = [];//2.X.2.3.2.4
  //sidc['G-C-FLKP--'] = [];//2.X.2.3.2.4.1
  //sidc['G-C-FLKS--'] = [];//2.X.2.3.2.4.2
  //sidc['G-C-FLKT--'] = [];//2.X.2.3.2.4.3
  //sidc['G-C-FLN---'] = [];//2.X.2.3.2.5
  //sidc['G-C-FLR---'] = [];//2.X.2.3.2.6
  //sidc['G-C-FA----'] = [];//2.X.2.3.3
  sidc["G-C-FAS---"] = ms.geometryConverter["FIRE SUPPORT AREA"]; //2.X.2.3.3.1
  sidc["G-C-FAC---"] = ms.geometryConverter["AIRSPACE COORDINATION AREA"]; //2.X.2.3.3.2
  //sidc['G-C-FAT---'] = [];//2.X.2.3.3.3
  //sidc['G-C-FAR---'] = [];//2.X.2.3.3.4
  //sidc['G-C-FARS--'] = [];//2.X.2.3.3.4.1
  //sidc['G-C-FARU--'] = [];//2.X.2.3.3.4.2
  //sidc['G-C-FAB---'] = [];//2.X.2.3.3.5
  sidc["G-C-FAI---"] = ms.geometryConverter["FREE FIRE AREA"]; //2.X.2.3.3.6
  //sidc['G-C-FAZ---'] = [];//2.X.2.3.3.7
  //sidc['G-C-FAZT--'] = [];//2.X.2.3.3.7.1
  //sidc['G-C-FAZU--'] = [];//2.X.2.3.3.7.2
  //sidc['G-C-FAN---'] = [];//2.X.2.3.3.8
  //sidc['G-C-FAD---'] = [];//2.X.2.3.3.10
  //sidc['G-C-FAP---'] = [];//2.X.2.3.3.11
  //sidc['G-C-FATA--'] = [];//2.X.2.3.3.12
  //sidc['*-*-*'] = [];//G
  //sidc['G-C-SP----'] = [];//2.X.2.4.1
  //sidc['G-C-SPQ---'] = [];//2.X.2.4.1.14
  //sidc['G-C-SPM---'] = [];//2.X.2.4.1.15
  //sidc['G-C-SL----'] = [];//2.X.2.4.2
  //sidc['G-C-SLC---'] = [];//2.X.2.4.2.1
  //sidc['G-C-SLCM--'] = [];//2.X.2.4.2.1.1
  //sidc['G-C-SLCH--'] = [];//2.X.2.4.2.1.2
  //sidc['G-C-SLR---'] = [];//2.X.2.4.2.2
  //sidc['G-C-SLRM--'] = [];//2.X.2.4.2.2.1
  //sidc['G-C-SLRA--'] = [];//2.X.2.4.2.2.2
  //sidc['G-C-SLRO--'] = [];//2.X.2.4.2.2.3
  //sidc['G-C-SLRT--'] = [];//2.X.2.4.2.2.4
  //sidc['G-C-SLRW--'] = [];//2.X.2.4.2.2.5
  //sidc['G-C-SA----'] = [];//2.X.2.4.3
  //sidc['G-C-SAD---'] = [];//2.X.2.4.3.1
  //sidc['G-C-SAP---'] = [];//2.X.2.4.3.2
  //sidc['G-C-SAR---'] = [];//2.X.2.4.3.3
  //sidc['G-C-SAH---'] = [];//2.X.2.4.3.4
  //sidc['G-C-SAT---'] = [];//2.X.2.4.3.5
  //sidc['G-C-SATB--'] = [];//2.X.2.4.3.5.1
  //sidc['G-C-SATD--'] = [];//2.X.2.4.3.5.2
  //sidc['G-C-SATR--'] = [];//2.X.2.4.3.5.3
  //sidc['G-C-SARR--'] = [];//2.X.2.4.3.6
  //sidc['G-C-O-----'] = [];//2.X.2.5
  //sidc['G-C-OXE---'] = [];//2.X.2.5.1.1
  //sidc['G-C-OXU---'] = [];//2.X.2.5.1.2
  //sidc['G-C-OXW---'] = [];//2.X.2.5.1.3
  //sidc['G-C-OXST--'] = [];//2.X.2.5.1.8
  //sidc['G-C-OXA---'] = [];//2.X.2.5.1.10
  //sidc['G-C-OL----'] = [];//2.X.2.5.3
  //sidc['*-*-*'] = [];//G
  //sidc['*-*-*'] = [];//G
  //sidc['*-*-*'] = [];//G
  //sidc['*-*-*'] = [];//G
  //sidc['G-O-------'] = [];//2.X.3
  //sidc['G-O-V-----'] = [];//2.X.3.1
  //sidc['G-O-L-----'] = [];//2.X.3.2
  //sidc['G-O-P-----'] = [];//2.X.3.3
  //sidc['G-O-PJ----'] = [];//2.X.3.3.13
  //sidc['G-O-I-----'] = [];//2.X.3.4
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var addSIDCgraphics = function(parts, type) {
  if (typeof parts === "function") {
    if (typeof this["_" + type + "SIDCgraphics"] === "undefined") {
      this["_" + type + "SIDCgraphics"] = [];
    }
    this["_" + type + "SIDCgraphics"] = this[
      "_" + type + "SIDCgraphics"
    ].concat(parts);
  }
  return this;
};

module.exports = addSIDCgraphics;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

module.exports = function(properties, mapping) {
  var version = this.SIDC.substr(0, 2);
  var standardIdentity1 = this.SIDC.substr(2, 1);
  var standardIdentity2 = this.SIDC.substr(3, 1);
  var symbolSet = this.SIDC.substr(4, 2);
  var status = this.SIDC.substr(6, 1);
  var headquartersTaskForceDummy = this.SIDC.substr(7, 1);
  var echelonMobility = this.SIDC.substr(8, 2);

  var affiliationMapping = {
    "0": "Unknown",
    "1": "Unknown",
    "2": "Friend",
    "3": "Friend",
    "4": "Neutral",
    "5": "Hostile",
    "6": "Hostile"
  };

  var dimensionMapping = {
    "00": "Sea",
    "01": "Air",
    "02": "Air",
    "05": "Air",
    "06": "Air",
    "10": "Ground",
    "11": "Ground",
    "12": "Ground",
    "15": "Ground",
    "20": "Ground",
    "30": "Sea",
    "35": "Subsurface",
    "36": "Subsurface",
    "39": "Subsurface",
    "40": "Ground",
    "50": "Air",
    "51": "Air",
    "52": "Ground",
    "53": "Sea",
    "54": "Subsurface",
    "60": "Ground"
  };

  var functionid = (properties.functionid = this.SIDC.substr(10, 10));

  properties.context = mapping.context[parseInt(this.SIDC.substr(2, 1))];
  properties.affiliation = affiliationMapping[standardIdentity2];
  properties.dimension = dimensionMapping[symbolSet];

  //Planned/Anticipated/Suspect symbols should have a dashed outline
  if (status == "1") properties.notpresent = ms._dashArrays.anticipated;
  if (
    standardIdentity2 == "0" ||
    standardIdentity2 == "2" ||
    standardIdentity2 == "5"
  )
    properties.notpresent = ms._dashArrays.pending;

  if (echelonMobility >= 70 && echelonMobility < 80) {
    properties.leadership = mapping.echelonMobility[echelonMobility];
  }

  return properties;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

function ArmyXML(xml) {
  var features = [];
  /*  
  function parseSIDC(sidc) {
    for (var i in sidc.childNodes){
      if (sidc.childNodes[i].nodeName == 'SymbolCodeString'){
        return sidc.childNodes[i].textContent;
      }
    }
  }
  */
  function parseArea(area) {
    var coordinates = [];
    area = area.getElementsByTagName(ns + "Point");
    for (var i in area) {
      if (area[i].nodeName == ns + "Point") {
        var point = area[i];
        var coord = [];
        coord[0] = parseFloat(point.getAttribute("Longitude"));
        coord[1] = parseFloat(point.getAttribute("Latitude"));
        if (point.getAttribute("Elevation")) {
          coord[2] = parseFloat(point.getAttribute("Elevation"));
        }
        coordinates.push(coord);
      }
    }
    coordinates.push(coordinates[0]); //close ring
    return coordinates;
  }

  /*
  function parseArrow(arrow) {
    var coordinates = [];
    var arrowHead = [];
    for (var i in arrow.childNodes){
      if (arrow.childNodes[i].nodeName == 'Arrowhead'){
        arrowHead = parsePoint(arrow.childNodes[i]);
      }
      if (arrow.childNodes[i].nodeName == 'Points'){
        for (var j in arrow.childNodes[i].childNodes){
          if (arrow.childNodes[i].childNodes[j].nodeName == 'Point'){
            coordinates.unshift( parsePoint(arrow.childNodes[i].childNodes[j]) );
          }
        }
      }
    }
    coordinates.push(arrowHead);//Add arrow head last in multipoint
    return coordinates;
  }
*/
  /*   
  function parseCircle(line) {
    var coordinates = [0,0];
    for (var i in line.childNodes){
      if (line.childNodes[i].nodeName == 'CenterPoint'){
        coordinates[0] = parsePoint(line.childNodes[i]);
      }
      if (line.childNodes[i].nodeName == 'PerimeterPoint'){
        coordinates[1] = parsePoint(line.childNodes[i]);
      }
    }
    return coordinates;
  }
*/
  /*
  function parseCorridor(corridor) {
    var coordinates = [];
    var width = 0;
    for (var i in corridor.childNodes){
      if (corridor.childNodes[i].nodeName == 'Width'){
        width = corridor.childNodes[i].textContent;
      }
      if (corridor.childNodes[i].nodeName == 'Points'){
        for (var j in corridor.childNodes[i].childNodes){
          if (corridor.childNodes[i].childNodes[j].nodeName == 'Point'){
            coordinates.push( parsePoint(corridor.childNodes[i].childNodes[j]) );
          }
        }
      }
    }
    coordinates.push(width);//Add width last in array, we fix this later
    return coordinates;
  }
*/

  function parseLine(line) {
    var coordinates = [];
    line = line.getElementsByTagName(ns + "Point");
    for (var i in line) {
      if (line[i].nodeName == ns + "Point") {
        var point = line[i];
        var coord = [];
        coord[0] = parseFloat(point.getAttribute("Longitude"));
        coord[1] = parseFloat(point.getAttribute("Latitude"));
        if (point.getAttribute("Elevation")) {
          coord[2] = parseFloat(point.getAttribute("Elevation"));
        }
        coordinates.push(coord);
      }
    }
    return coordinates;
  }

  /*
  function parseTwoPointArrow(arrow) {
    var coordinates = [0,0,0];
    for (var i in arrow.childNodes){
      if (arrow.childNodes[i].nodeName == 'StartPoint'){
        coordinates[1] = parsePoint(arrow.childNodes[i]);
      }
      if (arrow.childNodes[i].nodeName == 'EndPoint' || arrow.childNodes[i].nodeName == 'Endpoint'){
        coordinates[0] = parsePoint(arrow.childNodes[i]);
      }
      if (arrow.childNodes[i].nodeName == 'Arrowhead' || arrow.childNodes[i].nodeName == 'ArrowHead'){
        coordinates[2] = parsePoint(arrow.childNodes[i]);
      }
    }
    console.log(coordinates)
    return coordinates;
  }
*/
  /*
  function parseTwoPointCorridor(line) {
    var coordinates = [0,0,0];
    for (var i in line.childNodes){
      if (line.childNodes[i].nodeName == 'StartPoint'){
        coordinates[0] = parsePoint(line.childNodes[i]);
      }
      if (line.childNodes[i].nodeName == 'EndPoint' || line.childNodes[i].nodeName == 'Endpoint'){
        coordinates[1] = parsePoint(line.childNodes[i]);
      }
      if (line.childNodes[i].nodeName == 'Width'){
        coordinates[2] = line.childNodes[i].textContent;
      }
    }
    return coordinates;
  }
*/
  /*
  function parseTwoPointLine(line) {
    var coordinates = [0,0];
    for (var i in line.childNodes){
      if (line.childNodes[i].nodeName == 'StartPoint'){
        //we reverse them because MIR vs 2525
        coordinates[1] = parsePoint(line.childNodes[i]);
      }
      if (line.childNodes[i].nodeName == 'EndPoint' || line.childNodes[i].nodeName == 'Endpoint'){
        coordinates[0] = parsePoint(line.childNodes[i]);
      }
    }
    return coordinates;
  }
*/

  function parsePoint(point) {
    var coordinates = [0, 0];
    point = point.getElementsByTagName(ns + "Point")[0];
    coordinates[0] = parseFloat(point.getAttribute("Longitude"));
    coordinates[1] = parseFloat(point.getAttribute("Latitude"));
    if (point.getAttribute("Elevation")) {
      coordinates[2] = parseFloat(point.getAttribute("Elevation"));
    }
    return coordinates;
  }

  function parseSymbol(symbol) {
    var feature = { type: "Feature", properties: {} };

    var symbolNodes = {};
    for (var i in symbol.childNodes) {
      symbolNodes[symbol.childNodes[i].nodeName] = symbol.childNodes[i];
    }

    var symbolDefinition = symbolNodes[ns + "Symbol_Definition"];
    for (i in symbolDefinition.childNodes) {
      var nodeName = symbolDefinition.childNodes[i].nodeName;
      if (nodeName == "#text" || typeof nodeName === "undefined") continue;
      if (nodeName.indexOf(":") != -1) nodeName = nodeName.split(":")[1];
      feature.properties[nodeName] = symbolDefinition.childNodes[i].textContent;
    }

    var operationalAttributes = symbolNodes[ns + "Operational_Attributes"];
    for (i in operationalAttributes.childNodes) {
      nodeName = operationalAttributes.childNodes[i].nodeName;
      if (nodeName == "#text" || typeof nodeName === "undefined") continue;
      if (nodeName.indexOf(":") != -1) nodeName = nodeName.split(":")[1];
      feature.properties[nodeName] =
        operationalAttributes.childNodes[i].textContent;
    }

    var displayAttributes = symbolNodes[ns + "Display_Attributes"];
    for (i in displayAttributes.childNodes) {
      nodeName = displayAttributes.childNodes[i].nodeName;
      if (nodeName == "#text" || typeof nodeName === "undefined") continue;
      if (nodeName.indexOf(":") != -1) nodeName = nodeName.split(":")[1];
      feature.properties[nodeName] =
        displayAttributes.childNodes[i].textContent;
    }

    switch (feature.properties["Symbol_Category"]) {
      case "AREA":
        feature.geometry = {
          type: "Polygon",
          coordinates: [parseArea(symbolNodes[ns + "Symbol_Points"])]
        };
        break;
      case "BIOCHEM":
        if (
          symbolNodes[ns + "Symbol_Points"].getElementsByTagName(ns + "Point")
            .length == 1
        ) {
          feature.geometry = {
            type: "Point",
            coordinates: parsePoint(symbolNodes[ns + "Symbol_Points"])
          };
        } else {
          feature.geometry = {
            type: "Polygon",
            coordinates: [parseArea(symbolNodes[ns + "Symbol_Points"])]
          };
        }
        break;
      //BOUNDARY,
      case "EQUIPMENT":
        feature.geometry = {
          type: "Point",
          coordinates: parsePoint(symbolNodes[ns + "Symbol_Points"])
        };
        break;
      //GROUP ,
      case "INSTALLATION":
        feature.geometry = {
          type: "Point",
          coordinates: parsePoint(symbolNodes[ns + "Symbol_Points"])
        };
        break;
      case "LINE":
        feature.geometry = {
          type: "LineString",
          coordinates: parseLine(symbolNodes[ns + "Symbol_Points"])
        };
        break;
      case "MINE":
        if (
          symbolNodes[ns + "Symbol_Points"].getElementsByTagName(ns + "Point")
            .length == 1
        ) {
          feature.geometry = {
            type: "Point",
            coordinates: parsePoint(symbolNodes[ns + "Symbol_Points"])
          };
        } else {
          feature.geometry = {
            type: "Polygon",
            coordinates: [parseArea(symbolNodes[ns + "Symbol_Points"])]
          };
        }
        break;
      case "MOOTW":
        feature.geometry = {
          type: "Point",
          coordinates: parsePoint(symbolNodes[ns + "Symbol_Points"])
        };
        break;
      case "NOT_SPECIFIED":
        if (
          symbolNodes[ns + "Symbol_Points"].getElementsByTagName(ns + "Point")
            .length == 1
        ) {
          feature.geometry = {
            type: "Point",
            coordinates: parsePoint(symbolNodes[ns + "Symbol_Points"])
          };
        } else {
          console.warn(
            "cannot handle Symbol_Category: " +
              feature.properties["Symbol_Category"]
          );
          console.warn(feature.properties["Symbol_Name"]);
          console.warn(symbol);
        }
        break;
      case "NUCLEAR":
        if (
          symbolNodes[ns + "Symbol_Points"].getElementsByTagName(ns + "Point")
            .length == 1
        ) {
          feature.geometry = {
            type: "Point",
            coordinates: parsePoint(symbolNodes[ns + "Symbol_Points"])
          };
        } else {
          feature.geometry = {
            type: "Polygon",
            coordinates: [parseArea(symbolNodes[ns + "Symbol_Points"])]
          };
        }
        break;
      case "OBSTACLE":
        if (
          symbolNodes[ns + "Symbol_Points"].getElementsByTagName(ns + "Point")
            .length == 1
        ) {
          feature.geometry = {
            type: "Point",
            coordinates: parsePoint(symbolNodes[ns + "Symbol_Points"])
          };
        } else {
          console.warn(
            "cannot handle Symbol_Category: " +
              feature.properties["Symbol_Category"]
          );
          console.warn(symbol);
        }
        break;
      case "POINT":
        if (
          symbolNodes[ns + "Symbol_Points"].getElementsByTagName(ns + "Point")
            .length == 1
        ) {
          feature.geometry = {
            type: "Point",
            coordinates: parsePoint(symbolNodes[ns + "Symbol_Points"])
          };
        } else {
          // OK this is bonkers, but i found some errors in some of my sample files...
          feature.geometry = {
            type: "LineString",
            coordinates: parseLine(symbolNodes[ns + "Symbol_Points"])
          };
        }
        break;
      case "SIG_INT":
        if (
          symbolNodes[ns + "Symbol_Points"].getElementsByTagName(ns + "Point")
            .length == 1
        ) {
          feature.geometry = {
            type: "Point",
            coordinates: parsePoint(symbolNodes[ns + "Symbol_Points"])
          };
        } else {
          console.warn(
            "cannot handle Symbol_Category: " +
              feature.properties["Symbol_Category"]
          );
          console.warn(symbol);
        }
        break;
      case "TARGET":
        if (
          symbolNodes[ns + "Symbol_Points"].getElementsByTagName(ns + "Point")
            .length == 1
        ) {
          feature.geometry = {
            type: "Point",
            coordinates: parsePoint(symbolNodes[ns + "Symbol_Points"])
          };
        } else {
          feature.geometry = {
            type: "Polygon",
            coordinates: [parseArea(symbolNodes[ns + "Symbol_Points"])]
          };
        }
        break;
      case "UNIT":
        feature.geometry = {
          type: "Point",
          coordinates: parsePoint(symbolNodes[ns + "Symbol_Points"])
        };
        break;
      default:
        console.warn(
          "cannot handle Symbol_Category: " +
            feature.properties["Symbol_Category"]
        );
        console.warn(symbol);
    }
    return feature;
  }

  if (typeof xml == "string") {
    xml = new DOMParser().parseFromString(xml, "text/xml");
  }
  var ns = "";
  if (xml.firstChild.nodeName.indexOf(":") != -1) {
    ns = xml.firstChild.nodeName.split(":")[0] + ":";
  }

  var symbols = xml.getElementsByTagName(ns + "Symbol");
  for (var sym in symbols) {
    if (symbols[sym].nodeName) {
      features = features.concat(parseSymbol(symbols[sym]));
    }
  }

  var rawGeoJSON = { type: "FeatureCollection", features: features };
  return ms.format.GeoJSON(rawGeoJSON, {
    Additional_Info1: "additionalInformation",
    Additional_Info2: "additionalInformation1",
    Additional_Info3: "additionalInformation1",
    Common_Identifier: "commonIdentifier",
    Higher_Formation: "higherFormation",
    Unique_Designator1: "uniqueDesignation",
    Unique_Designator2: "uniqueDesignation1",
    Staff_Comments: "staffComments",
    Symbol_Code: "sidc",
    DTG_1: "dtg",
    DTG_2: "dtg1",
    //Speed: 'speed',
    //Direction: 'direction',
    //Altitude_Depth: 'altitudeDepth',
    Reinforced_or_Reduced: "reinforcedReduced",
    Quantity: "quantity",
    //Combat_Effectiveness: 'combatEffectiveness',
    Signature_Equipment: "signatureEquipment",
    IFF_SIF: "iffSif",
    Special_C2HQ: "specialHeadquarters"
  });
}

if (true) {
  module.exports = ArmyXML;
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

function GeoJSON(data, mapping) {
  if (typeof mapping == "undefined") {
    mapping = {};
  }
  // If input is a string, parse it to JSON
  if (typeof data == "string") {
    data = JSON.parse(data);
    for (var key in data) {
      this[key] = data[key];
    }
  }

  // Parse and clone the JSON
  var feature_copy = [];
  for (var i = 0; i < data.features.length; i++) {
    var feature = data.features[i];
    var f = { type: "Feature", properties: {} };
    if (feature.geometry) {
      f.geometry = {
        type: feature.geometry.type,
        coordinates: feature.geometry.coordinates
      };
    }
    for (key in feature.properties) {
      if (mapping.hasOwnProperty(key)) {
        f.properties[mapping[key]] = feature.properties[key];
      } else {
        f.properties[key] = feature.properties[key];
      }
    }
    feature_copy.push(f);
  }
  return { type: "FeatureCollection", features: feature_copy };
}

module.exports = GeoJSON;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

function NVG(data) {
  var _ = {};
  _.document = "nvg";
  _.items = [];
  _.version = "2.0.2";
  if (Array.isArray(data)) {
    _.items = data;
  }
  if (typeof data == "object" && !Array.isArray(data)) {
    _.items.push(data);
  }
  if (typeof data == "string") {
    //do stuff with input object
    try {
      data = JSON.parse(data);
      for (var key in data) {
        _[key] = data[key];
      }
    } catch (e) {
      //So parse as JSON failed, try to parse it as xml
      parseXML(data);
    }
  }

  function parseXML(xml) {
    //parse XML string to JSON
    function tagAttributes(nodes, current) {
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var nodeName = node.nodeName.split(":");
        if (nodeName[0] == "dc" || nodeName[0] == "dcterms") {
          nodeName = nodeName[0];
        } else {
          nodeName = nodeName[1];
        }
        if (node.nodeType == 1 && nodeName) {
          nodeName = nodeName.toLowerCase();
          switch (nodeName) {
            case "begin":
              current[nodeName] = node.textContent;
              break;
            case "end":
              current[nodeName] = node.textContent;
              break;
            case "dc":
            case "dcterms":
              current[node.nodeName] = node.textContent;
              break;
            case "content":
              current[nodeName] = node.textContent;
              break;
            case "exclude":
              if (!current.hasOwnProperty(nodeName)) {
                current.exclusion = [];
              }
              tagAttributes(node.childNodes, current.exclusion);
              break;
            case "extendeddata":
              if (!current.hasOwnProperty(nodeName)) {
                current[nodeName] = {};
                current[nodeName].simpledata = [];
              }
              nodeAttibutes(node, current[nodeName]);
              parseSubNodes(node.childNodes, current[nodeName]);
              break;
            case "extension":
              console.warn("TODO tagAttributes: " + nodeName);
              // TODO How to handle extended data
              current[nodeName] = []; //this is for node
              break;
            case "metadata":
              current[nodeName] = {};
              tagAttributes(node.childNodes, current[nodeName]);
              break;
            case "textinfo":
              current[nodeName] = node.textContent;
              break;
            case "timespan":
              current[nodeName] = {};
              tagAttributes(node.childNodes, current[nodeName]);
              break;
            case "timestamp":
              current[nodeName] = node.textContent;
              break;
            case "simplefield":
              if (!current.hasOwnProperty(nodeName)) {
                current[nodeName] = [];
              }
              var field = {};
              nodeAttibutes(node, field);
              current[nodeName].push(field);
              break;
            case "arcband-ring":
            case "circular-ring":
            case "elliptic-ring":
            case "linear-ring":
            case "rect-ring":
              var exclude = {};
              exclude.ring = nodeName.replace("-", "");
              nodeAttibutes(node, exclude);
              current.push(exclude);
              break;
            default:
              //Debug logging, remove later
              if (
                [
                  "arc",
                  "arcband",
                  "arrow",
                  "circle",
                  "composite",
                  "content-item",
                  "corridor",
                  "ellipse",
                  "g",
                  "multipoint",
                  "orbit",
                  "point",
                  "polygon",
                  "polyline",
                  "rect",
                  "text"
                ].lastIndexOf(nodeName) == -1
              ) {
                console.warn("TODO tagAttributes default: " + nodeName);
              }
          }
        }
      }
    }
    function nodeAttibutes(node, current) {
      Array.prototype.slice.call(node.attributes).forEach(function(attr) {
        if (attr.name == "modifiers" || attr.name == "style") {
          current[attr.name] = {};
          var attr_list = attr.value.trim().split(";");
          for (var j = 0; j < attr_list.length; j++) {
            if (attr_list[j]) {
              var s = attr_list[j].split(":");
              if (s[0] && s[1])
                current[attr.name][s[0].trim()] = isNaN(Number(s[1].trim()))
                  ? s[1].trim()
                  : Number(s[1].trim());
            }
          }
          return;
        }
        if (attr.name == "points") {
          current[attr.name] = [];
          attr_list = attr.value.trim().split(" ");
          for (j = 0; j < attr_list.length; j++) {
            if (attr_list[j]) {
              s = attr_list[j].split(",");
              if (s[0] && s[1])
                current[attr.name].push([Number(s[0]), Number(s[1])]);
            }
          }
          return;
        }
        current[attr.name] = isNaN(Number(attr.value))
          ? attr.value
          : Number(attr.value);
      });
    }
    function parseSubNodes(nodes, current) {
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.nodeType == 1) {
          var nodeName = node.nodeName.split(":")[1] || node.nodeName;
          nodeName = nodeName.toLowerCase();
          var item = {};
          if (
            [
              "extendeddata",
              "extension",
              "metadata",
              "schema",
              "section",
              "simpledata",
              "simplefield"
            ].lastIndexOf(nodeName) != -1
          ) {
            switch (nodeName) {
              case "extendeddata":
                current[nodeName] = item;
                nodeAttibutes(node, item);
                tagAttributes(node.childNodes, item);
                break;
              case "extension":
                console.warn("TODO parsesubnodes: " + nodeName);
                // TODO How to handle extended data
                current[nodeName] = []; //this is for root level
                break;
              case "metadata":
                console.warn("TODO parsesubnodes: " + nodeName);
                // TODO How to handle metadata data
                current[nodeName] = item;
                break;
              case "schema":
                if (!current.hasOwnProperty(nodeName)) {
                  current[nodeName] = [];
                }
                current[nodeName].push(item);
                nodeAttibutes(node, item);
                tagAttributes(node.childNodes, item);
                break;
              case "section":
                if (!current.hasOwnProperty("simpledatasection")) {
                  current.simpledatasection = [];
                }
                current.simpledatasection.push(item);
                nodeAttibutes(node, item);
                item.simpledata = [];
                parseSubNodes(node.childNodes, item);
                break;
              case "simpledata":
                nodeAttibutes(node, item);
                item.value = node.textContent;
                current.simpledata.push(item);
                tagAttributes(node.childNodes, item);
                break;
              case "simplefield":
                current[nodeName] = item;
                nodeAttibutes(node, item);
                tagAttributes(node.childNodes, item);
                break;
              default:
                console.warn("TODO parsesubnodes default: " + nodeName);
            }
          } else {
            //This is all drawables
            nodeAttibutes(node, item);
            item.drawable = nodeName;

            if (node.childNodes.length) {
              tagAttributes(node.childNodes, item);
            }
            if (item.drawable == "g" || item.drawable == "composite") {
              item.items = [];
              parseSubNodes(node.childNodes, item);
            }
            if (item.drawable == "a") {
              //This is for handling the old A element
              parseSubNodes(node.childNodes, current);
            } else {
              // otherwise just add featuers
              current.items.push(item);
            }
          }
        }
      }
    }

    xml = new DOMParser().parseFromString(xml, "text/xml");
    if (
      xml.firstChild.nodeName == "nvg" ||
      xml.firstChild.nodeName.split(":")[1] == "nvg"
    ) {
      //check that we actually are parsing NVG but ignore namespace
      _.version = xml.firstChild.getAttribute("version");
      _.items = [];
      var nodes = xml.firstChild.childNodes;
      parseSubNodes(nodes, _);
    }
  }
  function toGeoJSON() {
    function bearing(p1, p2) {
      var l1 = p1[0] * (Math.PI / 180);
      var l2 = p2[0] * (Math.PI / 180);
      var f1 = p1[1] * (Math.PI / 180);
      var f2 = p2[1] * (Math.PI / 180);
      var y = Math.sin(l2 - l1) * Math.cos(f2);
      var x =
        Math.cos(f1) * Math.sin(f2) -
        Math.sin(f1) * Math.cos(f2) * Math.cos(l2 - l1);
      return Math.atan2(y, x) / (Math.PI / 180);
    }
    function distBearing(point, dist, bearing) {
      var angularDist = dist / 6371e3;
      bearing = bearing * (Math.PI / 180);
      var lng = point[0] * (Math.PI / 180);
      var lat = point[1] * (Math.PI / 180);
      var lat2 = Math.asin(
        Math.sin(lat) * Math.cos(angularDist) +
          Math.cos(lat) * Math.sin(angularDist) * Math.cos(bearing)
      );
      var lng2 =
        lng +
        Math.atan2(
          Math.sin(bearing) * Math.sin(angularDist) * Math.cos(lat),
          Math.cos(angularDist) - Math.sin(lat) * Math.sin(lat2)
        );
      lat2 = lat2 / (Math.PI / 180);
      lng2 = (lng2 / (Math.PI / 180) + 540) % 360 - 180;
      return [lng2, lat2];
    }
    function exclusions(exclusion) {
      var exclude = [];
      switch (exclusion.ring) {
        case "arcbandring":
          var startangle = exclusion.startangle;
          var endangle = exclusion.endangle;
          if (startangle > endangle) endangle += 360;
          for (var j = startangle; j <= endangle; j += 2) {
            exclude.push(
              distBearing([exclusion.cx, exclusion.cy], exclusion.minr, j)
            );
          }
          for (j = endangle; j >= startangle; j -= 2) {
            exclude.push(
              distBearing([exclusion.cx, exclusion.cy], exclusion.maxr, j)
            );
          }
          exclude.push(
            distBearing(
              [exclusion.cx, exclusion.cy],
              exclusion.minr,
              startangle
            )
          );
          break;
        case "ellipticalring":
          for (j = 360; j >= 0; j -= 2) {
            var radius =
              exclusion.ry *
              exclusion.rx /
              Math.sqrt(
                Math.pow(exclusion.rx * Math.cos(j * (Math.PI / 180)), 2) +
                  Math.pow(exclusion.ry * Math.sin(j * (Math.PI / 180)), 2)
              );
            exclude.push(
              distBearing(
                [exclusion.cx, exclusion.cy],
                radius,
                j - (exclusion.rotation || 0)
              )
            );
          }
          break;
        case "linearring":
          exclude = exclusion.points;
          exclude.push(exclusion.points[0]);
          break;
        case "rectangularring":
          var diagonalRadius = Math.sqrt(
            Math.pow(exclusion.rx, 2) + Math.pow(exclusion.rx, 2)
          );
          var angle;
          angle =
            (Math.PI / 2 - Math.atan2(exclusion.ry, exclusion.rx)) /
            (Math.PI / 180);
          exclude.push(
            distBearing(
              [exclusion.cx, exclusion.cy],
              diagonalRadius,
              exclusion.rotation ? angle - exclusion.rotation : angle
            )
          );
          angle =
            (Math.PI / 2 - Math.atan2(-exclusion.ry, exclusion.rx)) /
            (Math.PI / 180);
          exclude.push(
            distBearing(
              [exclusion.cx, exclusion.cy],
              diagonalRadius,
              exclusion.rotation ? angle - exclusion.rotation : angle
            )
          );
          angle =
            (Math.PI / 2 - Math.atan2(-exclusion.ry, -exclusion.rx)) /
            (Math.PI / 180);
          exclude.push(
            distBearing(
              [exclusion.cx, exclusion.cy],
              diagonalRadius,
              exclusion.rotation ? angle - exclusion.rotation : angle
            )
          );
          angle =
            (Math.PI / 2 - Math.atan2(exclusion.ry, -exclusion.rx)) /
            (Math.PI / 180);
          exclude.push(
            distBearing(
              [exclusion.cx, exclusion.cy],
              diagonalRadius,
              exclusion.rotation ? angle - exclusion.rotation : angle
            )
          );
          angle =
            (Math.PI / 2 - Math.atan2(exclusion.ry, exclusion.rx)) /
            (Math.PI / 180);
          exclude.push(
            distBearing(
              [exclusion.cx, exclusion.cy],
              diagonalRadius,
              exclusion.rotation ? angle - exclusion.rotation : angle
            )
          );
          break;
        default:
          console.warn("TODO parse item default: " + exclusion.ring);
      }
      return exclude;
    }
    function items2features(items, geometrycollection) {
      var features = [];
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var feature = { type: "Feature", properties: {} };
        for (var key in item) {
          if (key == "uri") {
            feature.id = item.uri;
          } else {
            feature.properties[key] = item[key];
          }
          if (
            key == "symbol" &&
            (item[key].substring(0, 4) == "app6" ||
              item[key].substring(0, 4) == "2525")
          ) {
            feature.properties["sidc"] = item[key].split(":")[1];
          }
          if (key == "modifiers") {
            var modifiers = item[key];
            for (var mod in modifiers) {
              feature.properties[mod] = modifiers[mod];
            }
          }
        }
        switch (item.drawable) {
          case "arc":
            feature.geometry = { type: "LineString" };
            feature.geometry.coordinates = [];
            var startangle = item.startangle;
            var endangle = item.endangle;
            if (startangle > endangle) endangle += 360;
            for (var j = startangle; j <= endangle; j += 2) {
              var radius =
                item.ry *
                item.rx /
                Math.sqrt(
                  Math.pow(item.rx * Math.cos(j * (Math.PI / 180)), 2) +
                    Math.pow(item.ry * Math.sin(j * (Math.PI / 180)), 2)
                );
              feature.geometry.coordinates.push(
                distBearing(
                  [item.cx, item.cy],
                  radius,
                  item.rotation ? j - item.rotation : j
                )
              );
            }
            break;
          case "arcband":
            feature.geometry = { type: "Polygon" };
            feature.geometry.coordinates = [[]];
            startangle = item.startangle;
            endangle = item.endangle;
            if (startangle > endangle) endangle += 360;
            for (j = startangle; j <= endangle; j += 2) {
              feature.geometry.coordinates[0].push(
                distBearing([item.cx, item.cy], item.minr, j)
              );
            }
            for (j = endangle; j >= startangle; j -= 2) {
              feature.geometry.coordinates[0].push(
                distBearing([item.cx, item.cy], item.maxr, j)
              );
            }
            feature.geometry.coordinates[0].push(
              distBearing([item.cx, item.cy], item.minr, startangle)
            );
            break;
          case "arrow":
            var direction;
            feature.geometry = { type: "LineString" };
            feature.geometry.coordinates = [];
            direction = (bearing(item.points[0], item.points[1]) + 360) % 360;
            feature.geometry.coordinates.push(
              distBearing(item.points[0], item.width / 2, direction - 90)
            );
            for (j = 1; j < item.points.length - 1; j++) {
              var direction1 =
                (bearing(item.points[j], item.points[j - 1]) + 360) % 360;
              var direction2 =
                (bearing(item.points[j], item.points[j + 1]) + 360) % 360;
              var factor =
                1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
              feature.geometry.coordinates.push(
                distBearing(
                  item.points[j],
                  item.width / 2 * factor,
                  (direction1 + direction2) / 2
                )
              );
            }
            direction =
              (bearing(
                item.points[item.points.length - 1],
                item.points[item.points.length - 2]
              ) +
                180) %
              360;

            //Arrowhead
            var point = distBearing(
              item.points[item.points.length - 1],
              item.width,
              direction + 180
            );
            feature.geometry.coordinates.push(
              distBearing(point, item.width / 2, direction - 90)
            );
            feature.geometry.coordinates.push(
              distBearing(point, item.width, direction - 90)
            );
            feature.geometry.coordinates.push(
              item.points[item.points.length - 1]
            );
            feature.geometry.coordinates.push(
              distBearing(point, item.width, direction + 90)
            );
            feature.geometry.coordinates.push(
              distBearing(point, item.width / 2, direction + 90)
            );

            for (j = item.points.length - 2; j > 0; j--) {
              direction1 =
                (bearing(item.points[j], item.points[j - 1]) + 360) % 360;
              direction2 =
                (bearing(item.points[j], item.points[j + 1]) + 360) % 360;
              factor =
                1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
              feature.geometry.coordinates.push(
                distBearing(
                  item.points[j],
                  -(item.width / 2) * factor,
                  (direction1 + direction2) / 2
                )
              );
            }

            direction = (bearing(item.points[0], item.points[1]) + 360) % 360;
            feature.geometry.coordinates.push(
              distBearing(item.points[0], item.width / 2, direction + 90)
            );
            break;
          case "circle":
            feature.geometry = { type: "Polygon" };
            feature.geometry.coordinates = [[]];
            for (j = 360; j >= 0; j -= 5) {
              feature.geometry.coordinates[0].push(
                distBearing([item.cx, item.cy], item.r, j)
              );
            }
            break;
          case "composite":
            //Flatten composites at the moment
            var subfeatures = items2features(item.items, true);
            for (key in subfeatures) {
              subfeatures[key].properties.parent = {}; //feature.properties;
              if (item.uri) subfeatures[key].properties.parent.uri = item.uri;
              features.push(subfeatures[key]);
            }
            break;
          case "corridor":
            feature.geometry = { type: "Polygon" };
            feature.geometry.coordinates = [[]];
            direction = (bearing(item.points[0], item.points[1]) + 360) % 360;
            feature.geometry.coordinates[0].push(
              distBearing(item.points[0], item.width / 2, direction - 90)
            );
            for (j = 1; j < item.points.length - 1; j++) {
              direction1 =
                (bearing(item.points[j], item.points[j - 1]) + 360) % 360;
              direction2 =
                (bearing(item.points[j], item.points[j + 1]) + 360) % 360;
              factor =
                1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
              feature.geometry.coordinates[0].push(
                distBearing(
                  item.points[j],
                  item.width / 2 * factor,
                  (direction1 + direction2) / 2
                )
              );
            }

            direction =
              (bearing(
                item.points[item.points.length - 1],
                item.points[item.points.length - 2]
              ) +
                180) %
              360;
            feature.geometry.coordinates[0].push(
              distBearing(
                item.points[item.points.length - 1],
                item.width / 2,
                direction - 90
              )
            );
            feature.geometry.coordinates[0].push(
              distBearing(
                item.points[item.points.length - 1],
                item.width / 2,
                direction + 90
              )
            );

            for (j = item.points.length - 2; j > 0; j--) {
              direction1 =
                (bearing(item.points[j], item.points[j - 1]) + 360) % 360;
              direction2 =
                (bearing(item.points[j], item.points[j + 1]) + 360) % 360;
              factor =
                1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
              feature.geometry.coordinates[0].push(
                distBearing(
                  item.points[j],
                  -(item.width / 2) * factor,
                  (direction1 + direction2) / 2
                )
              );
            }

            direction = (bearing(item.points[0], item.points[1]) + 360) % 360;
            feature.geometry.coordinates[0].push(
              distBearing(item.points[0], item.width / 2, direction + 90)
            );
            feature.geometry.coordinates[0].push(
              distBearing(item.points[0], item.width / 2, direction - 90)
            ); //Close line

            break;
          case "ellipse":
            feature.geometry = { type: "Polygon" };
            feature.geometry.coordinates = [[]];
            for (j = 360; j >= 0; j -= 2) {
              radius =
                item.ry *
                item.rx /
                Math.sqrt(
                  Math.pow(item.rx * Math.cos(j * (Math.PI / 180)), 2) +
                    Math.pow(item.ry * Math.sin(j * (Math.PI / 180)), 2)
                );
              feature.geometry.coordinates[0].push(
                distBearing(
                  [item.cx, item.cy],
                  radius,
                  j - (item.rotation || 0)
                )
              );
            }
            break;
          case "g":
            //Flatten groups
            subfeatures = items2features(item.items, true);
            for (key in subfeatures) {
              subfeatures[key].properties.parent = {}; //feature.properties;
              if (item.uri) subfeatures[key].properties.parent.uri = item.uri;
              features.push(subfeatures[key]);
            }
            break;
          case "multipoint":
            feature.geometry = { type: "MultiPoint" };
            feature.geometry.coordinates = item.points;
            delete feature.properties.points;
            break;
          case "orbit":
            feature.geometry = { type: "Polygon" };
            feature.geometry.coordinates = [[]];
            direction =
              (Math.atan2(
                item.points[1][0] - item.points[0][0],
                item.points[1][1] - item.points[0][1]
              ) -
                Math.PI / 2) /
              (Math.PI / 180);
            feature.geometry.coordinates[0].push(
              distBearing(item.points[0], item.width / 2, direction)
            );
            for (j = 0; j <= 180; j += 2) {
              feature.geometry.coordinates[0].push(
                distBearing(item.points[1], item.width / 2, direction + j)
              );
            }

            direction =
              (Math.atan2(
                item.points[0][0] - item.points[1][0],
                item.points[0][1] - item.points[1][1]
              ) -
                Math.PI / 2) /
              (Math.PI / 180);
            feature.geometry.coordinates[0].push(
              distBearing(
                item.points[item.points.length - 1],
                item.width / 2,
                direction
              )
            );
            for (j = 0; j <= 180; j += 2) {
              feature.geometry.coordinates[0].push(
                distBearing(item.points[0], item.width / 2, direction + j)
              );
            }

            direction =
              (Math.atan2(
                item.points[1][0] - item.points[0][0],
                item.points[1][1] - item.points[0][1]
              ) -
                Math.PI / 2) /
              (Math.PI / 180);
            feature.geometry.coordinates[0].push(
              distBearing(item.points[0], item.width / 2, direction)
            );
            break;
          case "point":
            feature.geometry = { type: "Point" };
            feature.geometry.coordinates = [item.x, item.y];
            break;
          case "polygon":
            feature.geometry = { type: "Polygon" };
            feature.geometry.coordinates = [item.points];
            feature.geometry.coordinates[0].push(item.points[0]);
            delete feature.properties.points;
            break;
          case "polyline":
            feature.geometry = { type: "LineString" };
            feature.geometry.coordinates = item.points;
            delete feature.properties.points;
            break;
          case "rect":
            feature.geometry = { type: "Polygon" };
            feature.geometry.coordinates = [[]];
            var diagonalRadius = Math.sqrt(
              Math.pow(item.rx, 2) + Math.pow(item.rx, 2)
            );
            var angle;
            angle =
              (Math.PI / 2 - Math.atan2(item.ry, item.rx)) / (Math.PI / 180);
            feature.geometry.coordinates[0].push(
              distBearing(
                [item.cx, item.cy],
                diagonalRadius,
                item.rotation ? angle - item.rotation : angle
              )
            );
            angle =
              (Math.PI / 2 - Math.atan2(-item.ry, item.rx)) / (Math.PI / 180);
            feature.geometry.coordinates[0].push(
              distBearing(
                [item.cx, item.cy],
                diagonalRadius,
                item.rotation ? angle - item.rotation : angle
              )
            );
            angle =
              (Math.PI / 2 - Math.atan2(-item.ry, -item.rx)) / (Math.PI / 180);
            feature.geometry.coordinates[0].push(
              distBearing(
                [item.cx, item.cy],
                diagonalRadius,
                item.rotation ? angle - item.rotation : angle
              )
            );
            angle =
              (Math.PI / 2 - Math.atan2(item.ry, -item.rx)) / (Math.PI / 180);
            feature.geometry.coordinates[0].push(
              distBearing(
                [item.cx, item.cy],
                diagonalRadius,
                item.rotation ? angle - item.rotation : angle
              )
            );
            angle =
              (Math.PI / 2 - Math.atan2(item.ry, item.rx)) / (Math.PI / 180);
            feature.geometry.coordinates[0].push(
              distBearing(
                [item.cx, item.cy],
                diagonalRadius,
                item.rotation ? angle - item.rotation : angle
              )
            );
            break;
          case "text":
            feature.geometry = { type: "Point" };
            feature.geometry.coordinates = [item.x, item.y];
            break;
          default:
            console.warn("TODO parse item default: " + item.drawable);
        }

        if (item.hasOwnProperty("exclusion")) {
          for (var e = 0; e < item.exclusion.length; e++) {
            feature.geometry.coordinates.push(exclusions(item.exclusion[e]));
          }
        }
        if (feature.geometry) {
          features.push(feature);
        }
      }
      return features;
    }
    var geoJSON = {};
    geoJSON.type = "FeatureCollection";
    for (var key in _) {
      if (key == "items") {
        geoJSON.features = items2features(_.items, false);
      } else {
        geoJSON[key] = _[key];
      }
    }
    return geoJSON;
  }

  return toGeoJSON();
}

module.exports = NVG;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

function SLF(xml) {
  var features = [];

  function parseSIDC(sidc) {
    for (var i in sidc.childNodes) {
      if (sidc.childNodes[i].nodeName == "SymbolCodeString") {
        return sidc.childNodes[i].textContent;
      }
    }
  }

  function parseArea(area) {
    var coordinates = [];
    for (var i in area.childNodes) {
      if (area.childNodes[i].nodeName == "Points") {
        for (var j in area.childNodes[i].childNodes) {
          if (area.childNodes[i].childNodes[j].nodeName == "Point") {
            coordinates.push(parsePoint(area.childNodes[i].childNodes[j]));
          }
        }
      }
    }
    coordinates.push(coordinates[0]); //close ring
    return coordinates;
  }

  function parseArrow(arrow) {
    var coordinates = [];
    var arrowHead = [];
    for (var i in arrow.childNodes) {
      if (arrow.childNodes[i].nodeName == "Arrowhead") {
        arrowHead = parsePoint(arrow.childNodes[i]);
      }
      if (arrow.childNodes[i].nodeName == "Points") {
        for (var j in arrow.childNodes[i].childNodes) {
          if (arrow.childNodes[i].childNodes[j].nodeName == "Point") {
            coordinates.unshift(parsePoint(arrow.childNodes[i].childNodes[j]));
          }
        }
      }
    }
    coordinates.push(arrowHead); //Add arrow head last in multipoint
    return coordinates;
  }

  function parseCircle(line) {
    var coordinates = [0, 0];
    for (var i in line.childNodes) {
      if (line.childNodes[i].nodeName == "CenterPoint") {
        coordinates[0] = parsePoint(line.childNodes[i]);
      }
      if (line.childNodes[i].nodeName == "PerimeterPoint") {
        coordinates[1] = parsePoint(line.childNodes[i]);
      }
    }
    return coordinates;
  }

  function parseCorridor(corridor) {
    var coordinates = [];
    var width = 0;
    for (var i in corridor.childNodes) {
      if (corridor.childNodes[i].nodeName == "Width") {
        width = corridor.childNodes[i].textContent;
      }
      if (corridor.childNodes[i].nodeName == "Points") {
        for (var j in corridor.childNodes[i].childNodes) {
          if (corridor.childNodes[i].childNodes[j].nodeName == "Point") {
            coordinates.push(parsePoint(corridor.childNodes[i].childNodes[j]));
          }
        }
      }
    }
    coordinates.push(width); //Add width last in array, we fix this later
    return coordinates;
  }

  function parseLine(line) {
    var coordinates = [];
    for (var i in line.childNodes) {
      if (line.childNodes[i].nodeName == "Points") {
        for (var j in line.childNodes[i].childNodes) {
          if (line.childNodes[i].childNodes[j].nodeName == "Point") {
            coordinates.push(parsePoint(line.childNodes[i].childNodes[j]));
          }
        }
      }
    }
    return coordinates;
  }

  function parseTwoPointArrow(arrow) {
    var coordinates = [0, 0, 0];
    for (var i in arrow.childNodes) {
      if (arrow.childNodes[i].nodeName == "StartPoint") {
        coordinates[1] = parsePoint(arrow.childNodes[i]);
      }
      if (
        arrow.childNodes[i].nodeName == "EndPoint" ||
        arrow.childNodes[i].nodeName == "Endpoint"
      ) {
        coordinates[0] = parsePoint(arrow.childNodes[i]);
      }
      if (
        arrow.childNodes[i].nodeName == "Arrowhead" ||
        arrow.childNodes[i].nodeName == "ArrowHead"
      ) {
        coordinates[2] = parsePoint(arrow.childNodes[i]);
      }
    }
    console.warn(coordinates);
    return coordinates;
  }

  function parseTwoPointCorridor(line) {
    var coordinates = [0, 0, 0];
    for (var i in line.childNodes) {
      if (line.childNodes[i].nodeName == "StartPoint") {
        coordinates[0] = parsePoint(line.childNodes[i]);
      }
      if (
        line.childNodes[i].nodeName == "EndPoint" ||
        line.childNodes[i].nodeName == "Endpoint"
      ) {
        coordinates[1] = parsePoint(line.childNodes[i]);
      }
      if (line.childNodes[i].nodeName == "Width") {
        coordinates[2] = line.childNodes[i].textContent;
      }
    }
    return coordinates;
  }

  function parseTwoPointLine(line) {
    var coordinates = [0, 0];
    for (var i in line.childNodes) {
      if (line.childNodes[i].nodeName == "StartPoint") {
        //we reverse them because MIR vs 2525
        coordinates[1] = parsePoint(line.childNodes[i]);
      }
      if (
        line.childNodes[i].nodeName == "EndPoint" ||
        line.childNodes[i].nodeName == "Endpoint"
      ) {
        coordinates[0] = parsePoint(line.childNodes[i]);
      }
    }
    return coordinates;
  }

  function parsePoint(point) {
    var coordinates = [0, 0];
    for (var i in point.childNodes) {
      if (point.childNodes[i].nodeName == "Longitude") {
        coordinates[0] = parseFloat(point.childNodes[i].textContent);
      }
      if (point.childNodes[i].nodeName == "Latitude") {
        coordinates[1] = parseFloat(point.childNodes[i].textContent);
      }
    }
    return coordinates;
  }

  function parseLocation(location) {
    var locationType = location.getAttribute("xsi:type");
    switch (locationType) {
      case "Area":
        return { type: "Polygon", coordinates: [parseArea(location)] };
        //break;
      case "Arrow":
        return { type: "LineString", coordinates: parseArrow(location) };
        //break;
      case "Circle":
        return { type: "LineString", coordinates: parseCircle(location) };
        //break;
      case "Corridor":
        return { type: "Corridor", coordinates: parseCorridor(location) }; // We fix Corridors later
        //break;
      case "Line":
        return { type: "LineString", coordinates: parseLine(location) };
        //break;
      case "Point":
        return { type: "Point", coordinates: parsePoint(location) };
        //break;
      case "PolyPoint":
        return { type: "LineString", coordinates: parseLine(location) }; //I know this isn't a line but they are stored in the same way.
        //break;
      case "Rectangle":
        return {
          type: "Rectangle",
          coordinates: parseTwoPointCorridor(location)
        }; // We will fix TwoPointCorridor later
        //break;
      case "TwoPointArrow":
        return {
          type: "LineString",
          coordinates: parseTwoPointArrow(location)
        };
        //break;
      case "TwoPointCorridor":
        return {
          type: "TwoPointCorridor",
          coordinates: parseTwoPointCorridor(location)
        }; // We will fix TwoPointCorridor later
        //break;
      case "TwoPointLine":
        return { type: "LineString", coordinates: parseTwoPointLine(location) };
        //break;
      default:
        console.warn(
          "SitaWare Layer File: TODO parse location type " + locationType
        );
    }
  }

  function parseSymbols(symbols) {
    var features = [];
    for (var i in symbols.childNodes) {
      if (symbols.childNodes[i].nodeName == "Symbol") {
        var symbol = symbols.childNodes[i];
        var symbolType = symbol.getAttribute("xsi:type");
        var feature = { type: "Feature", properties: {} };

        if (
          [
            "Aviation",
            "BattlePosition",
            "BoundaryLine",
            "Equipment",
            "GenericShape",
            "Incident",
            "Installation",
            "Minefield",
            "TacticalGraphic",
            "TextArea",
            "Unit"
          ].indexOf(symbolType) != -1
        ) {
          for (var j in symbol.childNodes) {
            var nodeName = symbol.childNodes[j].nodeName;
            if (typeof nodeName === "undefined") continue;
            switch (nodeName) {
              case "Location":
                feature.geometry = parseLocation(symbol.childNodes[j]);
                if (feature.geometry && feature.geometry.type == "Corridor") {
                  var points = feature.geometry.coordinates;
                  feature.properties.distance = points[points.length - 1];
                  points.pop();
                  feature.geometry = {
                    type: "LineString",
                    coordinates: points
                  };
                }
                if (feature.geometry && feature.geometry.type == "Rectangle") {
                  points = feature.geometry.coordinates;
                  feature.properties.distance = points[points.length - 1];
                  points.pop();
                  feature.geometry = {
                    type: "LineString",
                    coordinates: points
                  };
                }
                if (
                  feature.geometry &&
                  feature.geometry.type == "TwoPointCorridor"
                ) {
                  //TODO make sure that we are drawing this in the right direction
                  points = feature.geometry.coordinates;
                  var coordinates = [points[0], points[1]];
                  var width = points[2];
                  var bearing = ms.geometry.bearingBetween(
                    points[1],
                    points[0]
                  );
                  coordinates.push(
                    ms.geometry.toDistanceBearing(
                      ms.geometry.pointBetween(points[0], points[1], 0.5),
                      width / 2,
                      bearing - 90
                    )
                  );
                  //coordinates.push( ms.geometry.toDistanceBearing(points[1],width/2,bearing-90));
                  //coordinates.push(points[0]);

                  feature.geometry = {
                    type: "LineString",
                    coordinates: coordinates
                  };
                }
                break;
              case "SymbolCode":
                feature.properties.SymbolCode = parseSIDC(symbol.childNodes[j]);
                break;
              case "#text":
                break;
              default:
                feature.properties[nodeName] = symbol.childNodes[j].textContent;
            }
          }
          if (typeof feature.geometry !== "undefined") {
            features.push(feature);
          }
        } else {
          console.warn(
            "SitaWare Layer File: TODO parse symbol type " + symbolType
          );
        }
      }
    }
    return features;
  }

  function parseLayer(layer) {
    var features = [];
    for (var i in layer.childNodes) {
      if (layer.childNodes[i].nodeName == "Name") {
        //console.log('LAYER: ' + layer.childNodes[i].textContent);
      }
      if (layer.childNodes[i].nodeName == "Symbols") {
        //console.log(parseSymbols( layer.childNodes[i] ))
        features = features.concat(parseSymbols(layer.childNodes[i]));
      }
    }
    return features;
  }

  if (typeof xml == "string") {
    xml = new DOMParser().parseFromString(xml, "text/xml");
  }

  var layers = xml.getElementsByTagName("Layer"); // For SLF files
  for (var lyr in layers) {
    features = features.concat(parseLayer(layers[lyr]));
  }
  layers = xml.getElementsByTagName("Overlay"); // For SPF files
  for (lyr in layers) {
    features = features.concat(parseLayer(layers[lyr]));
  }

  // Fix circles
  for (var f in features) {
    var sidc = features[f].properties.SymbolCode;
    var genericSIDC =
      sidc.substr(0, 1) + "-" + sidc.substr(2, 1) + "-" + sidc.substr(4, 6);
    if (
      [
        "G-F-ATC---",
        "G-F-ACSC--",
        "G-F-ACAC--",
        "G-F-ACFC--",
        "G-F-ACNC--",
        "G-F-ACRC--",
        "G-F-ACPC--",
        "G-F-AZIC--",
        "G-F-AZXC--",
        "G-F-AZSC--",
        "G-F-AZCC--",
        "G-F-AZDC--",
        "G-F-AZFC--",
        "G-F-AZZC--",
        "G-F-AZBC--",
        "G-F-AZVC--",
        "X---I-----"
      ].indexOf(genericSIDC) != -1
    ) {
      var points = features[f].geometry.coordinates;
      features[f].properties.distance = ms.geometry.distanceBetween(
        points[0],
        points[1]
      );
      features[f].geometry = { type: "Point", coordinates: points[0] };
    }
  }

  var rawGeoJSON = { type: "FeatureCollection", features: features };
  return ms.format.GeoJSON(rawGeoJSON, {
    Aliases: "commonIdentifier",
    Name: "uniqueDesignation",
    StaffComments: "staffComments",
    SymbolCode: "sidc",
    Timestamp: "dtg"
  });
}

if (true) {
  module.exports = SLF;
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// Calculates the bearing between two points in meter
function bearingBetween(p1, p2) {
  var l1 = p1[0] * (Math.PI / 180);
  var l2 = p2[0] * (Math.PI / 180);
  var f1 = p1[1] * (Math.PI / 180);
  var f2 = p2[1] * (Math.PI / 180);
  var y = Math.sin(l2 - l1) * Math.cos(f2);
  var x =
    Math.cos(f1) * Math.sin(f2) -
    Math.sin(f1) * Math.cos(f2) * Math.cos(l2 - l1);
  return Math.atan2(y, x) / (Math.PI / 180);
}

module.exports = bearingBetween;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a circle withe a radius in meters
module.exports = function(feature) {
  var p = feature.geometry.coordinates;
  var r = feature.properties.distance;
  var geometry = { type: "Polygon" };
  geometry.coordinates = [[]];
  for (var direction = 360; direction >= 0; direction -= 5) {
    geometry.coordinates[0].push(
      ms.geometry.toDistanceBearing(p, r, direction)
    );
  }
  return { geometry: geometry };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

module.exports = function(feature) {
  var annotation = {};
  var geometry;
  annotation.geometry = { type: "Point" };

  switch (feature.geometry.type) {
    case "Point":
      geometry = ms.geometry.circle(feature).geometry;
      annotation.geometry.coordinates = feature.geometry.coordinates;
      break;
    case "LineString":
      geometry = ms.geometry.rectangle(feature).geometry;
      annotation.geometry.coordinates = ms.geometry.pointBetween(
        feature.geometry.coordinates[0],
        feature.geometry.coordinates[1],
        0.5
      );
      break;
    case "Polygon":
      geometry = { type: feature.geometry.type };
      geometry.coordinates = feature.geometry.coordinates;
      // add annotation geometry
      break;
    default:
      console.warn("Invalid feature type in SIDC: " + feature.properties.sidc);
  }

  return { annotation: annotation, geometry: geometry };
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a corridor with a widht in meters
function corridor(feature) {
  var direction;
  var points = feature.geometry.coordinates;
  var width = feature.properties.distance;
  var geometry = { type: "Polygon" };
  geometry.coordinates = [[]];
  direction = (ms.geometry.bearingBetween(points[0], points[1]) + 360) % 360;
  geometry.coordinates[0].push(
    ms.geometry.toDistanceBearing(points[0], width / 2, direction - 90)
  );
  for (var j = 1; j < points.length - 1; j++) {
    var direction1 =
      (ms.geometry.bearingBetween(points[j], points[j - 1]) + 360) % 360;
    var direction2 =
      (ms.geometry.bearingBetween(points[j], points[j + 1]) + 360) % 360;
    var factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
    geometry.coordinates[0].push(
      ms.geometry.toDistanceBearing(
        points[j],
        width / 2 * factor,
        (direction1 + direction2) / 2
      )
    );
  }

  direction =
    (ms.geometry.bearingBetween(
      points[points.length - 1],
      points[points.length - 2]
    ) +
      180) %
    360;
  geometry.coordinates[0].push(
    ms.geometry.toDistanceBearing(
      points[points.length - 1],
      width / 2,
      direction - 90
    )
  );
  geometry.coordinates[0].push(
    ms.geometry.toDistanceBearing(
      points[points.length - 1],
      width / 2,
      direction + 90
    )
  );

  for (j = points.length - 2; j > 0; j--) {
    direction1 =
      (ms.geometry.bearingBetween(points[j], points[j - 1]) + 360) % 360;
    direction2 =
      (ms.geometry.bearingBetween(points[j], points[j + 1]) + 360) % 360;
    factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
    geometry.coordinates[0].push(
      ms.geometry.toDistanceBearing(
        points[j],
        -(width / 2) * factor,
        (direction1 + direction2) / 2
      )
    );
  }

  direction = (ms.geometry.bearingBetween(points[0], points[1]) + 360) % 360;
  geometry.coordinates[0].push(
    ms.geometry.toDistanceBearing(points[0], width / 2, direction + 90)
  );
  geometry.coordinates[0].push(
    ms.geometry.toDistanceBearing(points[0], width / 2, direction - 90)
  ); //Close line
  return { geometry: geometry };
}

module.exports = corridor;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// Calculates the great circle distance between two points in meter
function distanceBetween(p1, p2) {
  var lng1 = p1[0];
  var lng2 = p2[0];
  var lat1 = p1[1];
  var lat2 = p2[1];

  var latRad1 = lat1 * (Math.PI / 180);
  var latRad2 = lat2 * (Math.PI / 180);
  var deltaLat = (lat2 - lat1) * (Math.PI / 180);
  var delataLng = (lng2 - lng1) * (Math.PI / 180);

  var a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(latRad1) *
      Math.cos(latRad2) *
      Math.sin(delataLng / 2) *
      Math.sin(delataLng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (6371e3 * c).toFixed(1); // we don't expect more precision than this...
}

module.exports = distanceBetween;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// Calculates a point between two other points at any fractional distance f between them
function pointBetween(p1, p2, f) {
  var lng1 = p1[0];
  var lng2 = p2[0];
  var lat1 = p1[1];
  var lat2 = p2[1];

  var lngRad1 = lng1 * (Math.PI / 180);
  var lngRad2 = lng2 * (Math.PI / 180);
  var latRad1 = lat1 * (Math.PI / 180);
  var latRad2 = lat2 * (Math.PI / 180);

  var deltaLat = (lat2 - lat1) * (Math.PI / 180);
  var delataLng = (lng2 - lng1) * (Math.PI / 180);
  var a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(latRad1) *
      Math.cos(latRad2) *
      Math.sin(delataLng / 2) *
      Math.sin(delataLng / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // Angular distance

  var A = Math.sin((1 - f) * c) / Math.sin(c);
  var B = Math.sin(f * c) / Math.sin(c);

  var x =
    A * Math.cos(latRad1) * Math.cos(lngRad1) +
    B * Math.cos(latRad2) * Math.cos(lngRad2);
  var y =
    A * Math.cos(latRad1) * Math.sin(lngRad1) +
    B * Math.cos(latRad2) * Math.sin(lngRad2);
  var z = A * Math.sin(latRad1) + B * Math.sin(latRad2);

  var lng3 = Math.atan2(y, x) / (Math.PI / 180);
  var lat3 =
    (Math.atan2(z, Math.sqrt(x * x + y * y)) / (Math.PI / 180) + 540) % 360 -
    180;

  return [lng3, lat3];
}

module.exports = pointBetween;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws rectangle from input feature
module.exports = function(feature) {
  // A rectangle is just a two point corridor
  return ms.geometry.corridor(feature);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// Calculates the bearing between two points in meter
function toDistanceBearing(point, dist, bearing) {
  var angularDist = dist / 6371e3;
  bearing = bearing * (Math.PI / 180);
  var lng = point[0] * (Math.PI / 180);
  var lat = point[1] * (Math.PI / 180);
  var lat2 = Math.asin(
    Math.sin(lat) * Math.cos(angularDist) +
      Math.cos(lat) * Math.sin(angularDist) * Math.cos(bearing)
  );
  var lng2 =
    lng +
    Math.atan2(
      Math.sin(bearing) * Math.sin(angularDist) * Math.cos(lat),
      Math.cos(angularDist) - Math.sin(lat) * Math.sin(lat2)
    );
  lat2 = lat2 / (Math.PI / 180);
  lng2 = (lng2 / (Math.PI / 180) + 540) % 360 - 180;
  return [lng2, lat2];
}

module.exports = toDistanceBearing;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a NAI
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "ACA";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.altitudeDepth)
    annotations[0].properties.text +=
      "\nMIN ALT: " + feature.properties.altitudeDepth;
  if (feature.properties.altitudeDepth1)
    annotations[0].properties.text +=
      "\nMAX ALT: " + feature.properties.altitudeDepth1;
  if (feature.properties.additionalInformation1)
    annotations[0].properties.text +=
      "\nGrids " + feature.properties.additionalInformation1;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\nEFF: " + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n- " + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

function block(feature) {
  var geom;
  var points = feature.geometry.coordinates;
  var geometry = { type: "MultiLineString" };
  geometry.coordinates = [];

  var midpoint = ms.geometry.pointBetween(points[1], points[2], 0.5);
  var bearing1 = (ms.geometry.bearingBetween(points[1], points[2]) + 360) % 360;
  var bearing2 = (ms.geometry.bearingBetween(points[1], points[0]) + 360) % 360;

  var distance =
    Math.sin((bearing1 - bearing2) * (Math.PI / 180)) *
    ms.geometry.distanceBetween(points[0], points[1]);
  if (distance < 0) {
    // Wrong order in input
    points = [points[0], points[2], points[1]];
    bearing1 = (ms.geometry.bearingBetween(points[1], points[2]) + 360) % 360;
    bearing2 = (ms.geometry.bearingBetween(points[1], points[0]) + 360) % 360;
    distance = -distance;
  }
  var rotationpoint = ms.geometry.toDistanceBearing(
    midpoint,
    distance,
    bearing1 + 90
  );
  var radius = ms.geometry.distanceBetween(rotationpoint, points[1]);
  var b1 = (ms.geometry.bearingBetween(rotationpoint, points[1]) + 360) % 360;
  var b2 = (ms.geometry.bearingBetween(rotationpoint, points[2]) + 360) % 360;
  if (b1 > b2) {
    b2 = b2 + 360;
  }
  var midAngle = (b1 + b2) / 2;
  var tip = ms.geometry.toDistanceBearing(
    rotationpoint,
    distance * 2,
    midAngle
  );
  var b3 = (ms.geometry.bearingBetween(tip, rotationpoint) + 360) % 360;

  // Arc
  geom = [];
  geom.push(points[1]);

  for (var i = b1; i <= b2; i += 5) {
    geom.push(ms.geometry.toDistanceBearing(rotationpoint, radius, i));
  }
  geom.push(points[2]);
  geometry.coordinates.push(geom);

  // Lines
  var diff = (b2 - b1) / 7;
  var p1, p2;
  for (i = 1; i <= 6; i++) {
    geom = [];
    p1 = ms.geometry.toDistanceBearing(rotationpoint, radius, b1 + diff * i);
    p2 = ms.geometry.toDistanceBearing(p1, distance * 0.3, b3);
    geom.push(p1, p2);
    geometry.coordinates.push(geom);
  }

  // Arrow
  geom = [];
  geom.push(ms.geometry.toDistanceBearing(rotationpoint, radius, midAngle));
  geom.push(
    ms.geometry.toDistanceBearing(rotationpoint, distance * 2, midAngle)
  );
  geometry.coordinates.push(geom);

  // Arrow head
  geom = [];
  geom.push(ms.geometry.toDistanceBearing(tip, distance * 0.2, b3 + 45));
  geom.push(tip);
  geom.push(ms.geometry.toDistanceBearing(tip, distance * 0.2, b3 - 45));
  geometry.coordinates.push(geom);

  return { geometry: geometry };
}

module.exports = block;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "ATI ZONE";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  /*if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;*/

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

function block(feature) {
  //var direction, width;
  var annotations = [{}];
  var points = feature.geometry.coordinates;

  var geometry = { type: "MultiLineString" };
  geometry.coordinates = [];

  var geometry1 = [];
  geometry1.push(points[0], points[1]);

  var geometry2 = [];
  var midpoint = ms.geometry.pointBetween(points[0], points[1], 0.5);
  geometry2.push(points[2], midpoint);

  geometry.coordinates = [geometry1, geometry2];

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "B";
  annotations[0].geometry.coordinates = ms.geometry.pointBetween(
    midpoint,
    points[2],
    0.5
  );

  return { geometry: geometry, annotations: annotations };
}

module.exports = block;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

function canalize(feature) {
  //var direction, width;
  var annotations = [{}];

  var points = feature.geometry.coordinates;
  var geometry = { type: "MultiLineString" };
  var scale = ms.geometry.distanceBetween(points[0], points[1]);
  var pMid = ms.geometry.pointBetween(points[0], points[1], 0.5);
  var length = ms.geometry.distanceBetween(pMid, points[2]);
  var bearing = ms.geometry.bearingBetween(points[0], points[1]);

  geometry.coordinates = [];

  var geom = [points[0]];
  geom.push(ms.geometry.toDistanceBearing(points[0], length, bearing + 90));
  geom.push(ms.geometry.toDistanceBearing(points[1], length, bearing + 90));
  geom.push(points[1]);
  geometry.coordinates.push(geom);

  geom = [];
  geom.push(
    ms.geometry.toDistanceBearing(points[0], scale * 0.2, bearing - 45)
  );
  geom.push(
    ms.geometry.toDistanceBearing(points[0], scale * 0.2, bearing - 45 + 180)
  );
  geometry.coordinates.push(geom);

  geom = [];
  geom.push(
    ms.geometry.toDistanceBearing(points[1], scale * 0.2, bearing + 45)
  );
  geom.push(
    ms.geometry.toDistanceBearing(points[1], scale * 0.2, bearing + 45 + 180)
  );
  geometry.coordinates.push(geom);

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "B";
  annotations[0].geometry.coordinates = points[2];

  return { geometry: geometry, annotations: annotations };
}

module.exports = canalize;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

function bypass(feature) {
  //var direction, width;
  var annotations = [{}];

  var points = feature.geometry.coordinates;
  var geometry = { type: "MultiLineString" };
  var scale = ms.geometry.distanceBetween(points[0], points[1]);
  var pMid = ms.geometry.pointBetween(points[0], points[1], 0.5);
  var length = ms.geometry.distanceBetween(pMid, points[2]);
  var bearing = ms.geometry.bearingBetween(points[0], points[1]);

  geometry.coordinates = [];

  var geom = [points[0]];
  geom.push(ms.geometry.toDistanceBearing(points[0], length, bearing + 90));
  geom.push(ms.geometry.toDistanceBearing(points[1], length, bearing + 90));
  geom.push(points[1]);
  geometry.coordinates.push(geom);

  geom = [];
  geom.push(
    ms.geometry.toDistanceBearing(points[0], scale * 0.2, bearing + 90 - 30)
  );
  geom.push(points[0]);
  geom.push(
    ms.geometry.toDistanceBearing(points[0], scale * 0.2, bearing + 90 + 30)
  );
  geometry.coordinates.push(geom);

  geom = [];
  geom.push(
    ms.geometry.toDistanceBearing(points[1], scale * 0.2, bearing + 90 - 30)
  );
  geom.push(points[1]);
  geom.push(
    ms.geometry.toDistanceBearing(points[1], scale * 0.2, bearing + 90 + 30)
  );
  geometry.coordinates.push(geom);

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "B";
  annotations[0].geometry.coordinates = points[2];

  return { geometry: geometry, annotations: annotations };
}

module.exports = bypass;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "CFF ZONE";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  /*if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;*/

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

function canalize(feature) {
  //var direction, width;
  var annotations = [{}];

  var points = feature.geometry.coordinates;
  var geometry = { type: "MultiLineString" };
  var scale = ms.geometry.distanceBetween(points[0], points[1]);
  var pMid = ms.geometry.pointBetween(points[0], points[1], 0.5);
  var length = ms.geometry.distanceBetween(pMid, points[2]);
  var bearing = ms.geometry.bearingBetween(points[0], points[1]);

  geometry.coordinates = [];

  var geom = [points[0]];
  geom.push(ms.geometry.toDistanceBearing(points[0], length, bearing + 90));
  geom.push(ms.geometry.toDistanceBearing(points[1], length, bearing + 90));
  geom.push(points[1]);
  geometry.coordinates.push(geom);

  geom = [];
  geom.push(
    ms.geometry.toDistanceBearing(points[0], scale * 0.2, bearing + 45)
  );
  geom.push(
    ms.geometry.toDistanceBearing(points[0], scale * 0.2, bearing + 45 + 180)
  );
  geometry.coordinates.push(geom);

  geom = [];
  geom.push(
    ms.geometry.toDistanceBearing(points[1], scale * 0.2, bearing - 45)
  );
  geom.push(
    ms.geometry.toDistanceBearing(points[1], scale * 0.2, bearing - 45 + 180)
  );
  geometry.coordinates.push(geom);

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "C";
  annotations[0].geometry.coordinates = points[2];

  return { geometry: geometry, annotations: annotations };
}

module.exports = canalize;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "CENSOR ZONE";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

function clear(feature) {
  //var direction, width;
  var annotations = [{}];

  var points = feature.geometry.coordinates;
  var geometry = { type: "MultiLineString" };
  var scale = ms.geometry.distanceBetween(points[0], points[1]);

  geometry.coordinates = [];

  var geom = [points[0], points[1]];
  geometry.coordinates.push(geom);

  var pMid = ms.geometry.pointBetween(points[0], points[1], 0.5);
  var length = ms.geometry.distanceBetween(pMid, points[2]);
  var bearing = ms.geometry.bearingBetween(points[0], points[1]);

  geom = [pMid, ms.geometry.toDistanceBearing(pMid, length, bearing + 90)];
  geometry.coordinates.push(geom);

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "C";
  annotations[0].geometry.coordinates = ms.geometry.pointBetween(
    pMid,
    geom[1],
    0.5
  );

  geom = [];
  geom.push(ms.geometry.toDistanceBearing(pMid, scale * 0.15, bearing + 60));
  geom.push(pMid);
  geom.push(
    ms.geometry.toDistanceBearing(pMid, scale * 0.15, bearing + 60 + 60)
  );
  geometry.coordinates.push(geom);

  pMid = ms.geometry.pointBetween(points[0], points[1], 0.2);
  geom = [pMid, ms.geometry.toDistanceBearing(pMid, length, bearing + 90)];
  geometry.coordinates.push(geom);

  geom = [];
  geom.push(ms.geometry.toDistanceBearing(pMid, scale * 0.15, bearing + 60));
  geom.push(pMid);
  geom.push(
    ms.geometry.toDistanceBearing(pMid, scale * 0.15, bearing + 60 + 60)
  );
  geometry.coordinates.push(geom);

  pMid = ms.geometry.pointBetween(points[0], points[1], 0.8);
  geom = [pMid, ms.geometry.toDistanceBearing(pMid, length, bearing + 90)];
  geometry.coordinates.push(geom);

  geom = [];
  geom.push(ms.geometry.toDistanceBearing(pMid, scale * 0.15, bearing + 60));
  geom.push(pMid);
  geom.push(
    ms.geometry.toDistanceBearing(pMid, scale * 0.15, bearing + 60 + 60)
  );
  geometry.coordinates.push(geom);

  return { geometry: geometry, annotations: annotations };
}

module.exports = clear;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a corridor with a widht in meters
function corridor(feature) {
  var direction;
  var points = feature.geometry.coordinates;
  var width = feature.properties.distance;
  var geometry = { type: "Polygon" };
  geometry.coordinates = [[]];
  direction = (ms.geometry.bearingBetween(points[0], points[1]) + 360) % 360;
  geometry.coordinates[0].push(
    ms.geometry.toDistanceBearing(points[0], width / 2, direction - 90)
  );
  for (var j = 1; j < points.length - 1; j++) {
    var direction1 =
      (ms.geometry.bearingBetween(points[j], points[j - 1]) + 360) % 360;
    var direction2 =
      (ms.geometry.bearingBetween(points[j], points[j + 1]) + 360) % 360;
    var factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
    geometry.coordinates[0].push(
      ms.geometry.toDistanceBearing(
        points[j],
        width / 2 * factor,
        (direction1 + direction2) / 2
      )
    );
  }

  direction =
    (ms.geometry.bearingBetween(
      points[points.length - 1],
      points[points.length - 2]
    ) +
      180) %
    360;
  geometry.coordinates[0].push(
    ms.geometry.toDistanceBearing(
      points[points.length - 1],
      width / 2,
      direction - 90
    )
  );
  geometry.coordinates[0].push(
    ms.geometry.toDistanceBearing(
      points[points.length - 1],
      width / 2,
      direction + 90
    )
  );

  for (j = points.length - 2; j > 0; j--) {
    direction1 =
      (ms.geometry.bearingBetween(points[j], points[j - 1]) + 360) % 360;
    direction2 =
      (ms.geometry.bearingBetween(points[j], points[j + 1]) + 360) % 360;
    factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
    geometry.coordinates[0].push(
      ms.geometry.toDistanceBearing(
        points[j],
        -(width / 2) * factor,
        (direction1 + direction2) / 2
      )
    );
  }

  direction = (ms.geometry.bearingBetween(points[0], points[1]) + 360) % 360;
  geometry.coordinates[0].push(
    ms.geometry.toDistanceBearing(points[0], width / 2, direction + 90)
  );
  geometry.coordinates[0].push(
    ms.geometry.toDistanceBearing(points[0], width / 2, direction - 90)
  ); //Close line
  return { geometry: geometry };
}

module.exports = corridor;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a circle withe a radius in meters
function cover(feature) {
  var p = feature.geometry.coordinates;
  var scale = Math.max(
    ms.geometry.distanceBetween(p[0], p[1]),
    ms.geometry.distanceBetween(p[0], p[2])
  );
  var geometry = { type: "MultiLineString" };
  geometry.coordinates = [[]];

  var geom = [];
  var pMid = ms.geometry.pointBetween(p[0], p[1], 0.5);
  var bearing = ms.geometry.bearingBetween(p[0], p[1]);
  geom.push(p[0]);
  geom.push(
    ms.geometry.toDistanceBearing(pMid, scale * 0.05, bearing + (120 - 180))
  );
  var pMid2 = ms.geometry.toDistanceBearing(pMid, scale * 0.05, bearing + 120);
  geom.push(pMid2);
  geom.push(p[1]);
  geometry.coordinates.push(geom);

  geom = [];
  bearing = ms.geometry.bearingBetween(p[1], pMid2);
  geom.push(ms.geometry.toDistanceBearing(p[1], scale * 0.08, bearing - 45));
  geom.push(p[1]);
  geom.push(ms.geometry.toDistanceBearing(p[1], scale * 0.08, bearing + 45));
  geometry.coordinates.push(geom);

  geom = [];
  pMid = ms.geometry.pointBetween(p[0], p[2], 0.5);
  bearing = ms.geometry.bearingBetween(p[0], p[2]);
  geom.push(p[0]);
  geom.push(
    ms.geometry.toDistanceBearing(pMid, scale * 0.05, bearing + (120 - 180))
  );
  pMid2 = ms.geometry.toDistanceBearing(pMid, scale * 0.05, bearing + 120);
  geom.push(pMid2);
  geom.push(p[2]);
  geometry.coordinates.push(geom);

  geom = [];
  bearing = ms.geometry.bearingBetween(p[2], pMid2);
  geom.push(ms.geometry.toDistanceBearing(p[2], scale * 0.08, bearing - 45));
  geom.push(p[2]);
  geom.push(ms.geometry.toDistanceBearing(p[2], scale * 0.08, bearing + 45));
  geometry.coordinates.push(geom);

  return { geometry: geometry };
}

module.exports = cover;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "CF ZONE";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "DA";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

function delay(feature) {
  var annotations = [{}];
  var directionFactor = -1;
  var points = feature.geometry.coordinates;

  var width = ms.geometry.distanceBetween(points[1], points[2]);
  var bearing = ms.geometry.bearingBetween(points[0], points[1]);

  var geometry = { type: "MultiLineString" };

  geometry.coordinates = [];

  var geometry1 = [];
  geometry1.push(points[0]);
  geometry1.push(points[1]);
  //console.log('arrow bearing ' + bearing)
  //console.log('fjomp bearing ' + ms.geometry.bearingBetween(points[1],points[2]))

  var midpoint = ms.geometry.pointBetween(points[1], points[2], 0.5);
  var curveBearing = ms.geometry.bearingBetween(points[1], points[2]);
  if (curveBearing < 0 && bearing < 0) directionFactor = 1; // OK
  //if (curveBearing > 0 && bearing < 0)directionFactor = -1; // OK
  //if (curveBearing < 0 && bearing > 0)directionFactor = -1; // OK
  //if (curveBearing > 0 && bearing > 0)directionFactor = -1; // OK
  //var directionFactor = (Math.abs(curveBearing)/curveBearing)*(Math.abs(bearing)/bearing);

  for (var i = 10; i < 180; i += 10) {
    geometry1.push(
      ms.geometry.toDistanceBearing(
        midpoint,
        width / 2,
        curveBearing + i * directionFactor + 180
      )
    );
  }

  geometry1.push(points[2]);

  var geometry2 = [];
  geometry2.push(
    ms.geometry.toDistanceBearing(points[0], width * 0.4, bearing + 45)
  );
  geometry2.push(points[0]);
  geometry2.push(
    ms.geometry.toDistanceBearing(points[0], width * 0.4, bearing - 45)
  );

  geometry.coordinates = [geometry1, geometry2];

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = feature.properties.dtg
    ? feature.properties.dtg + "\n"
    : "";
  annotations[0].properties.text += "D";
  annotations[0].geometry.coordinates = ms.geometry.pointBetween(
    points[0],
    points[1],
    0.5
  );

  return { geometry: geometry, annotations: annotations };
}

module.exports = delay;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text =
    "FSA " + (feature.properties.uniqueDesignation || "");
  if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

function fix(feature) {
  //var direction, width;
  var points = feature.geometry.coordinates;

  var length = ms.geometry.distanceBetween(points[0], points[1]);
  var bearing = ms.geometry.bearingBetween(points[0], points[1]);
  var widht = length * 0.10;

  var geometry = { type: "MultiLineString" };

  geometry.coordinates = [];

  var geometry1 = [];

  geometry1.push(points[0]);

  geometry1.push(ms.geometry.pointBetween(points[0], points[1], 0.2));

  geometry1.push(
    ms.geometry.toDistanceBearing(
      ms.geometry.pointBetween(points[0], points[1], 0.25),
      widht,
      bearing + 90
    )
  );
  geometry1.push(
    ms.geometry.toDistanceBearing(
      ms.geometry.pointBetween(points[0], points[1], 0.3),
      widht,
      bearing - 90
    )
  );
  geometry1.push(
    ms.geometry.toDistanceBearing(
      ms.geometry.pointBetween(points[0], points[1], 0.35),
      widht,
      bearing + 90
    )
  );
  geometry1.push(
    ms.geometry.toDistanceBearing(
      ms.geometry.pointBetween(points[0], points[1], 0.4),
      widht,
      bearing - 90
    )
  );
  geometry1.push(
    ms.geometry.toDistanceBearing(
      ms.geometry.pointBetween(points[0], points[1], 0.45),
      widht,
      bearing + 90
    )
  );
  geometry1.push(
    ms.geometry.toDistanceBearing(
      ms.geometry.pointBetween(points[0], points[1], 0.5),
      widht,
      bearing - 90
    )
  );
  geometry1.push(
    ms.geometry.toDistanceBearing(
      ms.geometry.pointBetween(points[0], points[1], 0.55),
      widht,
      bearing + 90
    )
  );
  geometry1.push(
    ms.geometry.toDistanceBearing(
      ms.geometry.pointBetween(points[0], points[1], 0.6),
      widht,
      bearing - 90
    )
  );
  geometry1.push(
    ms.geometry.toDistanceBearing(
      ms.geometry.pointBetween(points[0], points[1], 0.65),
      widht,
      bearing + 90
    )
  );
  geometry1.push(
    ms.geometry.toDistanceBearing(
      ms.geometry.pointBetween(points[0], points[1], 0.7),
      widht,
      bearing - 90
    )
  );
  geometry1.push(
    ms.geometry.toDistanceBearing(
      ms.geometry.pointBetween(points[0], points[1], 0.75),
      widht,
      bearing + 90
    )
  );

  geometry1.push(ms.geometry.pointBetween(points[0], points[1], 0.8));

  geometry1.push(points[1]);

  var geometry2 = [];
  geometry2.push(
    ms.geometry.toDistanceBearing(points[0], widht * 1.5, bearing + 45)
  );
  geometry2.push(points[0]);
  geometry2.push(
    ms.geometry.toDistanceBearing(points[0], widht * 1.5, bearing - 45)
  );

  geometry.coordinates = [geometry1, geometry2];
  return { geometry: geometry };
}

module.exports = fix;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "FFA";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// Draws a circle withe a radius in meters
function guard(feature) {}

module.exports = guard;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a circle withe a radius in meters
function isolate(feature) {
  var p = feature.geometry.coordinates;
  var r = ms.geometry.distanceBetween(p[0], p[1]);
  var bearing = ms.geometry.bearingBetween(p[0], p[1]);

  var geometry = { type: "MultiLineString" };
  geometry.coordinates = [[]];
  for (var d = 0; d <= 340; d += 5) {
    geometry.coordinates[0].push(
      ms.geometry.toDistanceBearing(p[0], r, d + bearing)
    );
  }

  for (d = 20; d <= 320; d += 40) {
    var geom = [];
    geom.push(ms.geometry.toDistanceBearing(p[0], r, d + bearing));
    geom.push(ms.geometry.toDistanceBearing(p[0], r * 0.7, 10 + d + bearing));
    geom.push(ms.geometry.toDistanceBearing(p[0], r, 20 + d + bearing));
    geometry.coordinates.push(geom);
  }

  geom = [];
  var pEnd = ms.geometry.toDistanceBearing(p[0], r, 340 + bearing);
  geom.push(
    ms.geometry.toDistanceBearing(pEnd, r * 0.2, 320 + bearing - (90 - 15) + 45)
  );
  geom.push(pEnd);
  geom.push(
    ms.geometry.toDistanceBearing(pEnd, r * 0.2, 320 + bearing - (90 - 15) - 45)
  );
  geometry.coordinates.push(geom);

  return { geometry: geometry };
}

module.exports = isolate;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a corridor with a widht in meters
function mainAttack(feature) {
  var direction, width;
  var points = feature.geometry.coordinates;
  var arrowHead = points.pop();
  var widthHeadRatio = 0.7;

  var geometry = { type: "MultiLineString" };
  geometry.coordinates = [];

  var geometry1 = [];
  var geometry2 = [];

  // Width of the arrow
  direction = ms.geometry.bearingBetween(points[0], points[1]);
  var deltaDirection =
    direction - ms.geometry.bearingBetween(points[0], arrowHead);
  //console.log(deltaDirection)
  var distance = ms.geometry.distanceBetween(points[0], arrowHead);
  var arrowHead2 = ms.geometry.toDistanceBearing(
    points[0],
    distance,
    direction + deltaDirection
  );
  width = ms.geometry.distanceBetween(arrowHead, arrowHead2) / 2;

  direction =
    (ms.geometry.bearingBetween(
      points[points.length - 1],
      points[points.length - 2]
    ) +
      360) %
    360;
  geometry1.push(
    ms.geometry.toDistanceBearing(
      points[points.length - 1],
      width * widthHeadRatio,
      direction - 90
    )
  );

  for (var j = points.length - 2; j > 0; j--) {
    var direction1 =
      (ms.geometry.bearingBetween(points[j], points[j + 1]) + 360) % 360;
    var direction2 =
      (ms.geometry.bearingBetween(points[j], points[j - 1]) + 360) % 360;
    var factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
    geometry1.push(
      ms.geometry.toDistanceBearing(
        points[j],
        width * widthHeadRatio * factor,
        (direction1 + direction2) / 2
      )
    );
  }

  // Arrowhead
  direction = (ms.geometry.bearingBetween(points[0], points[1]) + 180) % 360;
  geometry1.push(
    ms.geometry.toDistanceBearing(
      arrowHead,
      width * (1 - widthHeadRatio),
      direction + 90
    )
  );
  geometry1.push(arrowHead);
  geometry1.push(points[0]);
  geometry1.push(arrowHead2);
  geometry1.push(
    ms.geometry.toDistanceBearing(
      arrowHead2,
      width * (1 - widthHeadRatio),
      direction - 90
    )
  );

  geometry2.push(
    ms.geometry.toDistanceBearing(
      arrowHead,
      width * (1 - widthHeadRatio),
      direction + 90
    )
  );
  geometry2.push(
    ms.geometry.toDistanceBearing(
      points[0],
      width *
        (1 - widthHeadRatio) *
        Math.abs(1 / Math.tan(deltaDirection * (Math.PI / 180))),
      direction - 180
    )
  );
  geometry2.push(
    ms.geometry.toDistanceBearing(
      arrowHead2,
      width * (1 - widthHeadRatio),
      direction - 90
    )
  );

  for (j = 1; j < points.length - 1; j++) {
    direction1 =
      (ms.geometry.bearingBetween(points[j], points[j + 1]) + 360) % 360;
    direction2 =
      (ms.geometry.bearingBetween(points[j], points[j - 1]) + 360) % 360;
    factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
    geometry1.push(
      ms.geometry.toDistanceBearing(
        points[j],
        -(width * widthHeadRatio) * factor,
        (direction1 + direction2) / 2
      )
    );
  }

  direction =
    (ms.geometry.bearingBetween(
      points[points.length - 1],
      points[points.length - 2]
    ) +
      360) %
    360;
  geometry1.push(
    ms.geometry.toDistanceBearing(
      points[points.length - 1],
      width * widthHeadRatio,
      direction + 90
    )
  );

  geometry.coordinates = [geometry1, geometry2];
  return { geometry: geometry };
}

module.exports = mainAttack;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a NAI
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "NAI";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a circle withe a radius in meters
function occupy(feature) {
  var p = feature.geometry.coordinates;
  var r = ms.geometry.distanceBetween(p[0], p[1]);
  var bearing = ms.geometry.bearingBetween(p[0], p[1]);

  var geometry = { type: "MultiLineString" };
  geometry.coordinates = [[]];
  for (var d = 0; d <= 340; d += 5) {
    geometry.coordinates[0].push(
      ms.geometry.toDistanceBearing(p[0], r, d + bearing)
    );
  }

  var geom = [];
  var pEnd = ms.geometry.toDistanceBearing(p[0], r, 340 + bearing);
  geom.push(
    ms.geometry.toDistanceBearing(pEnd, r * 0.2, 320 + bearing - (90 - 15) + 45)
  );
  geom.push(pEnd);
  geom.push(
    ms.geometry.toDistanceBearing(pEnd, r * 0.2, 320 + bearing - (90 - 15) - 45)
  );
  geometry.coordinates.push(geom);

  geom = [];
  pEnd = ms.geometry.toDistanceBearing(p[0], r, 340 + bearing);
  geom.push(
    ms.geometry.toDistanceBearing(pEnd, r * 0.2, 320 + bearing + (90 + 15) + 45)
  );
  geom.push(pEnd);
  geom.push(
    ms.geometry.toDistanceBearing(pEnd, r * 0.2, 320 + bearing + (90 + 15) - 45)
  );
  geometry.coordinates.push(geom);

  return { geometry: geometry };
}

module.exports = occupy;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "RFA";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

// Draws a circle withe a radius in meters
function searchArea(feature) {}

module.exports = searchArea;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "SENSOR ZONE";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);
// Draws a corridor with a widht in meters
function supportingAttack(feature) {
  var direction, width;
  var points = feature.geometry.coordinates;
  var arrowHead = points.pop();
  var widthHeadRatio = 0.7;

  var geometry = { type: "LineString" };
  geometry.coordinates = [];

  var geometry1 = [];

  // Width of the arrow
  direction = ms.geometry.bearingBetween(points[0], points[1]);
  var deltaDirection =
    direction - ms.geometry.bearingBetween(points[0], arrowHead);
  //console.log(deltaDirection)
  var distance = ms.geometry.distanceBetween(points[0], arrowHead);
  var arrowHead2 = ms.geometry.toDistanceBearing(
    points[0],
    distance,
    direction + deltaDirection
  );
  width = ms.geometry.distanceBetween(arrowHead, arrowHead2) / 2;

  direction =
    (ms.geometry.bearingBetween(
      points[points.length - 1],
      points[points.length - 2]
    ) +
      360) %
    360;
  geometry1.push(
    ms.geometry.toDistanceBearing(
      points[points.length - 1],
      width * widthHeadRatio,
      direction - 90
    )
  );

  for (var j = points.length - 2; j > 0; j--) {
    var direction1 =
      (ms.geometry.bearingBetween(points[j], points[j + 1]) + 360) % 360;
    var direction2 =
      (ms.geometry.bearingBetween(points[j], points[j - 1]) + 360) % 360;
    var factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
    geometry1.push(
      ms.geometry.toDistanceBearing(
        points[j],
        width * widthHeadRatio * factor,
        (direction1 + direction2) / 2
      )
    );
  }

  // Arrowhead
  direction = (ms.geometry.bearingBetween(points[0], points[1]) + 180) % 360;
  geometry1.push(
    ms.geometry.toDistanceBearing(
      arrowHead,
      width * (1 - widthHeadRatio),
      direction + 90
    )
  );
  geometry1.push(arrowHead);
  geometry1.push(points[0]);
  geometry1.push(arrowHead2);
  geometry1.push(
    ms.geometry.toDistanceBearing(
      arrowHead2,
      width * (1 - widthHeadRatio),
      direction - 90
    )
  );

  for (j = 1; j < points.length - 1; j++) {
    direction1 =
      (ms.geometry.bearingBetween(points[j], points[j + 1]) + 360) % 360;
    direction2 =
      (ms.geometry.bearingBetween(points[j], points[j - 1]) + 360) % 360;
    factor = 1 / Math.sin((direction2 - direction1) / 2 * (Math.PI / 180));
    geometry1.push(
      ms.geometry.toDistanceBearing(
        points[j],
        -(width * widthHeadRatio) * factor,
        (direction1 + direction2) / 2
      )
    );
  }

  direction =
    (ms.geometry.bearingBetween(
      points[points.length - 1],
      points[points.length - 2]
    ) +
      360) %
    360;
  geometry1.push(
    ms.geometry.toDistanceBearing(
      points[points.length - 1],
      width * widthHeadRatio,
      direction + 90
    )
  );

  geometry.coordinates = geometry1;
  return { geometry: geometry };
}

module.exports = supportingAttack;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "TBA";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "TVAR";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a NAI
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "TAI";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "TGMF";
  /*if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;*/

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

// Draws a Fire Support Area
module.exports = function(feature) {
  var annotations = [{}];
  var geometry;

  annotations[0].geometry = { type: "Point" };
  annotations[0].properties = {};
  annotations[0].properties.text = "ZOR";
  if (feature.properties.uniqueDesignation)
    annotations[0].properties.text +=
      "\n" + feature.properties.uniqueDesignation;
  if (feature.properties.dtg)
    annotations[0].properties.text += "\n" + feature.properties.dtg;
  if (feature.properties.dtg1)
    annotations[0].properties.text += "\n" + feature.properties.dtg1;

  var polygon = ms.geometry.circleCorridorPolygon(feature);
  geometry = polygon.geometry;
  if (polygon.annotation.hasOwnProperty("geometry")) {
    annotations[0].geometry = polygon.annotation.geometry;
  }

  return { geometry: geometry, annotations: annotations };
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var ms = __webpack_require__(0);

module.exports = function() {
  var properties = {
    //    "activity"			: false,	//Is it an Activity
    affiliation: "", //Affiliation it is shown as (Friend/Hostile...)
    //    "baseAffilation"		: "",		//Affiliation it belongs to (Friend/Hostile...)
    //    "baseDimension" 	: "",		//Dimension it belongs to (Air/Ground...)
    //    "baseGeometry"		: {g:"",bbox:{}},		//Geometry is a combination of dimension and affiliation (AirFriend/GroundHostile...)
    //    "civilian"			: false,	//Is it Civilian
    //    "condition"		: "",		//What condition is it in
    context: "", //Context of the symbol (Reality/Exercise...)
    dimension: "", //Dimension it is shown as (Air/Ground...)
    dimensionUnknown: false, //Is the dimension unknown
    echelon: "", //What echelon (Platoon/Company...)
    faker: false, //Is it a Faker
    fenintDummy: false, //Is it a feint/dummy
    //    "fill"				: this.fill,		//Standard says it should be filled
    //    "frame"			: this.frame,		//Standard says it should be framed
    functionid: "", //Part of SIDC referring to the icon.
    //    "headquarters"		: false,	//Is it a Headquarters
    //    "installation" 		: false,	//Is it an Instalation
    joker: false, //Is it a Joker
    //    "mobility"			: "",		//What mobility (Tracked/Sled)
    notpresent: "", //Is it Anticipated or Pending
    numberSIDC: false, //Is the SIDC number based
    //    "space"			: false,	//Is it in Space
    //    "taskForce"		: false		//Is it a task force
    graphic: false
  };
  var mapping = {};
  mapping.context = ["Reality", "Exercise", "Simulation"];
  mapping.status = [
    "Present",
    "Planned",
    "FullyCapable",
    "Damaged",
    "Destroyed",
    "FullToCapacity"
  ];
  mapping.affiliation = ["Hostile", "Friend", "Neutral", "Unknown"];
  mapping.dimension = ["Air", "Ground", "Sea", "Subsurface"];

  properties.context = mapping.context[0];

  if (this.monoColor != "") {
    properties.fill = false;
  }
  this.SIDC = String(this.SIDC).replace(/\*/g, "-").replace(/ /g, "");

  properties.numberSIDC = !isNaN(this.SIDC);
  if (properties.numberSIDC) {
    //This is for new number based SIDCs

    if (typeof ms._getNumberProperties === "function") {
      properties = ms._getNumberPropertiesGraphic.call(
        this,
        properties,
        mapping
      );
    } else {
      console.warn(
        "ms._getNumberPropertiesGraphic() is not present, you will need to load functionality for letter based SIDCs"
      );
    }
  } else {
    //This would be old letter based SIDCs

    if (typeof ms._getLetterProperties === "function") {
      properties = ms._getLetterPropertiesGraphic.call(
        this,
        properties,
        mapping
      );
    } else {
      console.warn(
        "ms._getLetterPropertiesGraphic() is not present, you will need to load functionality for letter based SIDCs"
      );
    }
  }

  return properties;
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

function asCesium() {
  var ratio = window.devicePixelRatio || 1;
  var entities = new Cesium.EntityCollection();

  for (var i = 0; i < this.data.features.length; i++) {
    var feature = this.data.features[i];

    if (feature.geometry.type == "Point") {
      console.info("point");
      var properties = feature.properties;
      if (properties.sidc.charAt(0) != "X") {
        //TODO handle sitaware custom graphics
        var milsymbol = feature.symbol;
        var ctx = milsymbol.asCanvas(ratio);
        var entity = {
          position: Cesium.Cartesian3.fromDegrees(
            feature.geometry.coordinates[0],
            feature.geometry.coordinates[1]
          ), //Cesium.Cartesian3.fromArray( feature.geometry.coordinates ),
          billboard: {
            horizontalOrigin: Cesium.HorizontalOrigin.LEFT, // default
            verticalOrigin: Cesium.VerticalOrigin.TOP,
            image: ctx,
            imageSubRegion: new Cesium.BoundingRectangle(
              0,
              0,
              ctx.width + 2,
              ctx.height + 2
            ),
            height: milsymbol.getSize().height,
            width: milsymbol.getSize().width,
            pixelOffset: new Cesium.Cartesian2(
              -milsymbol.getAnchor().x,
              -milsymbol.getAnchor().y
            ) // default: (0, 0)
          }
        };
        entities.add(entity);
      }
    }

    if (
      feature.graphic.isConverted() &&
      (feature.geometry.type == "LineString" ||
        feature.geometry.type == "MultiLineString")
    ) {
      //console.log('line')
      var lineparts;
      if (feature.geometry.type == "LineString") {
        lineparts = [feature.geometry.coordinates]; // Make linestring to a sort of multiline
      } else {
        lineparts = feature.geometry.coordinates;
      }

      for (var key in lineparts) {
        var coordinates = lineparts[key];
        var positions = [];
        for (var c in coordinates) {
          positions.push(
            Cesium.Cartesian3.fromDegrees(
              coordinates[c][0],
              coordinates[c][1],
              coordinates[c][2]
            )
          );
        }

        entity = new Cesium.Entity({
          polyline: new Cesium.PolylineGraphics({
            positions: positions,
            material: Cesium.Color.BLACK,
            width: 1.5
          })
        });

        entities.add(entity);
      }
    }

    if (feature.graphic.isConverted() && feature.geometry.type == "Polygon") {
      coordinates = feature.geometry.coordinates[0];
      positions = [];
      for (c in coordinates) {
        positions.push(
          Cesium.Cartesian3.fromDegrees(
            coordinates[c][0],
            coordinates[c][1],
            coordinates[c][2]
          )
        );
      }

      /*var entity = new Cesium.Entity({
          polygon: new Cesium.PolygonGraphics({
            hierarchy: new Cesium.PolygonHierarchy(positions),
            fill: false,
            outline: true,
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 3
          })
        });*/

      entity = new Cesium.Entity({
        polyline: new Cesium.PolylineGraphics({
          positions: positions,
          material: Cesium.Color.BLACK,
          width: 1.5
        })
      });

      entities.add(entity);
    }
  }

  return entities;
}

module.exports = asCesium;


/***/ }),
/* 59 */
/***/ (function(module, exports) {

function asOpenLayers(crs) {
  crs = crs || "EPSG:3857";
  //var ua = window.navigator.userAgent;
  //var isIE = ( ua.indexOf('MSIE ') > 0 || ua.indexOf('Trident/') > 0 || ua.indexOf('Edge/')  > 0) ? true : false;
  var ratio = window.devicePixelRatio || 1;
  var geoJSON = new ol.format.GeoJSON();
  var features = [];

  for (var i = 0; i < this.data.features.length; i++) {
    var feature = this.data.features[i];
    var olFeature = geoJSON.readFeature(feature, {
      featureProjection: ol.proj.get(crs)
    });

    if (
      olFeature.getGeometry() &&
      olFeature.getGeometry().getType() == "Point"
    ) {
      var properties = olFeature.getProperties();
      if (properties.sidc.charAt(0) != "X") {
        //TODO handle sitaware custom graphics
        var milsymbol = this.data.features[i].symbol;
        //var image = isIE ? mysymbol.asCanvas() : mysymbol.toDataURL();
        olFeature.setStyle(
          new ol.style.Style({
            image: new ol.style.Icon({
              scale: 1 / ratio,
              anchor: [
                milsymbol.getAnchor().x * ratio,
                milsymbol.getAnchor().y * ratio
              ],
              anchorXUnits: "pixels",
              anchorYUnits: "pixels",
              imgSize: [
                Math.floor(milsymbol.getSize().width * ratio),
                Math.floor(milsymbol.getSize().height * ratio)
              ],
              img: milsymbol.asCanvas(ratio)
            })
          })
        );
      }
    }

    if (
      feature.graphic.isConverted() &&
      (olFeature.getGeometry().getType() == "LineString" ||
        olFeature.getGeometry().getType() == "MultiLineString")
    ) {
      var styles = [
        new ol.style.Style({
          stroke: new ol.style.Stroke({
            lineCap: "butt",
            color: "#000000",
            width: 2
          })
        })
      ];
      if (feature.graphic.annotations) {
        var labelgeom = geoJSON
          .readFeature(feature.graphic.annotations[0].geometry, {
            featureProjection: ol.proj.get(crs)
          })
          .getGeometry();
        styles.push(
          new ol.style.Style({
            text: new ol.style.Text({
              fill: new ol.style.Fill({ color: "black" }),
              font: "bold 16px sans-serif",
              stroke: new ol.style.Stroke({
                color: "rgb(239, 239, 239)", // off-white
                width: 4
              }),
              text: feature.graphic.annotations[0].properties.text
            }),
            geometry: labelgeom
          })
        );
      }
      olFeature.setStyle(styles);
    }

    if (
      feature.graphic.isConverted() &&
      olFeature.getGeometry().getType() == "Polygon"
    ) {
      style = new ol.style.Style({
        stroke: new ol.style.Stroke({
          lineCap: "butt",
          color: "#000000",
          width: 2
        }),
        fill: new ol.style.Fill({ color: "rgba(0,0,0,0)" }),
        text: new ol.style.Text({
          fill: new ol.style.Fill({ color: "black" }),
          font: "bold 16px sans-serif",
          stroke: new ol.style.Stroke({
            color: "rgb(239, 239, 239)", // off-white
            width: 4
          }),
          text: feature.graphic.annotations
            ? feature.graphic.annotations[0].properties.text
            : ""
        })
      });
      olFeature.setStyle(style);
    }

    features.push(olFeature);
  }

  return features;
}

module.exports = asOpenLayers;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

/* ***************************************************************************************
Creating the base of milgraphics by importing milsymbol
*************************************************************************************** */
var ms = __webpack_require__(0);

ms.addSIDCgraphics = __webpack_require__(10);

ms.format = __webpack_require__(1);
ms.geometry = __webpack_require__(2);
ms.geometryConverter = __webpack_require__(3);

ms.Graphic = __webpack_require__(4);

ms.GraphicsLayer = __webpack_require__(5);

/* ***************************************************************************************
Letter based SIDC
*************************************************************************************** */
ms._getLetterPropertiesGraphic = __webpack_require__(7);

ms._getLetterSIDCgraphic = __webpack_require__(6);
ms.addSIDCgraphics(__webpack_require__(8), "letter");
ms.addSIDCgraphics(__webpack_require__(9), "letter");
/* ***************************************************************************************
Number based SIDC
*************************************************************************************** */
ms._getNumberPropertiesGraphic = __webpack_require__(11);

/* ***************************************************************************************
Export ms to the world
*************************************************************************************** */
module.exports = ms;


/***/ })
/******/ ]);
});