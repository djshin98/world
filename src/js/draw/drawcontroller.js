"use strict";

class DrawController {
    constructor(map) {
        this.map = map;
        this.viewer = map.getView();
        this.viewModel = {
            mode: 'view',
            enableStyle: false,
            lineWidth: 1,
            lineColor: Cesium.Color.WHITE,
            lineTransparent: 1,
            lineStyle: 'line',
            size: 5,
            faceColor: Cesium.Color.WHITE,
            faceTransparent: 1,
            frameEnable: false,
            frameColor: Cesium.Color.WHITE,
            shapeStyle: 'point',
            shapeColor: Cesium.Color.WHITE,
            shapeSize: 5,
            uri: ""
        };
    }

    init() {
        window.alert('draw does not supported init().');
    }
    update(viewModel) {}
    getHandler(key) {
        window.alert('draw does not supported getHandler().');
    }
    getHandlerList() {
        window.alert('draw does not supported getHandlerList().');
    }
    terminateShape() {}
}
module.exports = { DrawController: DrawController };