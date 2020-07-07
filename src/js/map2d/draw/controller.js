"use strict";
const Cesium = require('cesium/Cesium');
const { DrawController } = require("../../draw/drawcontroller");
const { Q } = require("../../core/e");


const drawLinker = {

}

function registryHandler(key, name, createfunc) {
    if (Q.isValid(drawLinker[key])) {
        console.error("이미 등록된 모듈 : " + key + "( " + name + " )");
        return false;
    }
    drawLinker[key] = { name: name, createFunc: createfunc };
    return true;
}
// widget 에 대한 표준을 만든다.

class DrawController2 extends DrawController {
    constructor(map, baseLayerPicker) {
        super(map);
        this.index = 1;
        this.activeShapePoints = [];
        this.floatingPoint;
        this.handler = null;
    }

    init() {


    }
    appendPoint(earthPosition, bappend) {
        if (Q.isValid(earthPosition)) {
            let points;
            if (bappend) {
                this.floatingPoint = this.createPoint(earthPosition);
                this.activeShapePoints.push(earthPosition);
                points = this.activeShapePoints;
            } else {
                points = this.activeShapePoints.concat(earthPosition);
            }
            this.drawShape(points, bappend);
        }
    }
    update(viewModel) {
        let currentMode = this.viewModel.mode;

        this.viewModel = setDrawViewModel(this.viewModel, viewModel);

        if (this.viewModel.mode == "view") {

        } else if (currentMode != this.viewModel.mode) {
            this.init();
            this.terminateShape();

            this.activeDrawHandler = this.getHandler(this.viewModel.mode);
            if (Q.isValid(this.activeDrawHandler)) {
                this.activeDrawHandler.ready();
            }
        }
    }
    getHandler(key) {
        if (Q.isValid(drawLinker[key])) {
            return drawLinker[key].createFunc();
        }
    }
    getHandlerList() {
        return Object.keys(drawLinker).map(key => {
            return { key: key, name: drawLinker[key].name };
        });
    }
    createPoint(worldPosition) {
        if (Q.isValid(this.activeDrawHandler)) {
            let pin = this.activeDrawHandler.pin(this.activeShapePoints.length);

            //{ name: 'start', type: 'text', text: 'S', color: Cesium.Color.NAVY, size: 48 }
            //this.markerCollection.add(CTX.c2d(worldPosition), pin);
            return worldPosition;
        }
    }
    drawShape(positionData, bappend) {
        if (Q.isValid(this.activeDrawHandler)) {
            if (bappend && this.activeDrawHandler.isCompletePoints(positionData)) {
                this.terminateShape();
                return;
            }
            return this.activeDrawHandler.createShape(this.drawCollection, positionData, this.viewModel, bappend);
        }
    }
    drawModel(positionData) {
        this.activeDrawHandler = this.getHandler("drawModel");
        if (Q.isValid(this.activeDrawHandler)) {
            return this.activeDrawHandler.create(this.drawCollection, positionData, this.viewModel);
        }
    }

    terminateShape() {
        if (Q.isValid(this.activeDrawHandler)) { this.activeDrawHandler.complete(); }

        if (Q.isValid(this.activeDrawHandler)) {
            this.activeDrawHandler.createShape(this.drawCollection, this.activeShapePoints, this.viewModel, true);
        }

        if (Q.isValid(this.activeDrawHandler)) {
            this.activeDrawHandler.ready();
        }

        //this.drawCollection.remove(this.floatingPoint);
        this.floatingPoint = undefined;
        this.activeShapePoints = [];
        this.index++;
        //this.markerCollection.removeAll();
    }
}
module.exports = { DrawController2: DrawController2, registryHandler: registryHandler };