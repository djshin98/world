"use strict";

var { DrawObject } = require('../draw/drawobject');
var d3 = require('d3');
const { CTX } = require('../map3d/ctx');
const {ArcUtil} = require('../draw/util');


class Delay extends DrawObject {
    constructor() {
        super(2, 3);
    }
    create(collection, points, viewModel) {
        let p = points;

       let pt1 =  [p[0], p[1]];
        let arc = ArcUtil.arcPoints2c(CTX.math.mid(p[1], p[2]), p[1], p[2], 180);
        let result = [];

        if(this.isReadyToCallbackVariable()) {
            if(p.length == 3) {
                result = pt1.concat(arc.ArcUtil.arcPoints2c(CTX.math.mid(p[1], p[2]), p[1], p[2], 180));
            } 
        }
        else{
            if (this.isComplete()) {
                return collection.add(this.index, {
                position: p[0],
                polyline: {
                    positions: result,
                    clampToGround: true,
                    width: viewModel.lineWidth,
                    material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
                }
            });
        }

        }
        return result;

    }

}
module.exports = { Delay: Delay };