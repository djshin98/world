"use strict";
/* eslint-disable */
/* ***************************************************************************************
Creating the base of milsymbol
*************************************************************************************** */
const { ms } = require("./ms");
//ms.reset();

const { Symbol } = require("./ms/symbol");

ms.Symbol = Symbol;

const { app6b, std2525b, std2525c } = require("./lettersidc");
const { app6d, std2525d } = require("./numbersidc");
const path2d = require("./ms/path2d").draw;
//ms.addIcons(app6b);
//ms.addIcons(std2525b);
ms.addIcons(std2525c);
//ms.addIcons(app6d);
//ms.addIcons(std2525d);
ms.Path2D = path2d;

/* ***************************************************************************************
Export ms to the world
*************************************************************************************** */

global.ms = ms;
module.exports = { ms };