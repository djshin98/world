"use strict";

var { DrawObject } = require('../draw/drawobject');
const {ArcUtil} = require('../draw/util');
const { Plane } = require('../map3d/plane');


class Delay extends DrawObject {
    constructor() {
        super(3, 3);
    }
    create(collection, points, viewModel) {
        

        /*
        let p = points;
        let pt1 =  [p[0], p[1]];
        
        let arc = ArcUtil.arcPoints2c(CTX.math.mid(p[1], p[2]), p[1], p[2], 180);
        let result = [];

        let startAngle = 360;
        let endAngle = 90;


        if(this.isReadyToCallbackVariable()) {
            if(p.length == 3) {
                result = pt1.concat(arc);

            
        for(let i = 0; i < 2; i++){
            if(startAngle < 0){
                startAngle = 360;
            }
            if(endAngle < 0){
                endAngle = 90;
            }
          
            //arc = (startAngle * Math.PI / 180, endAngle * Math.PI / 180);

            }    
        } 
            } else {

            if (this.isComplete()) {
                result = pt1.concat(arc);

                return collection.add(this.index, {
                position: p,
                polyline: {
                    positions: result,
                    clampToGround: true,
                    width: viewModel.lineWidth,
                    //material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
                    
                }
                
            });
        }

    }*/
        return result;

    }
    
    
}

module.exports = { Delay: Delay };