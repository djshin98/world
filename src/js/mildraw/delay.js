"use strict";
<<<<<<< HEAD
const { DrawObject } = require('../map3d/draw/drawobject');
const { ArcUtil } = require('../map3d/draw/util');
//const { Plane } = require('../map3d/plane');
=======

var { DrawObject } = require('../draw/drawobject');
const {ArcUtil} = require('../draw/util');
const { Plane } = require('../map3d/tangent/plane');
>>>>>>> ec38823819add51820e6419781c832ece09e1e07


class Delay extends DrawObject {
    constructor() {
        super(3, 3);
    }
    create(collection, points, viewModel) {
<<<<<<< HEAD



=======
        let p = points;
        if (this.isReadyToCallbackVariable()) {
            let result = [];

            var plane = new Plane(p[0]);
            let mp = CTX.math.mid(p[1], p[2]);
            p.push(mp);
            
            let pts = plane.input(p);
            let width = plane.distance(pts[0], pts[1]);

            let height = 0;
            if (pts[2])
                height = plane.distance(pts[0], pts[2]);
            result = plane.delay(width, pts);

            result = plane.output(result);
            result = CTX.split.polyline(result, 10);
            //result.reverse();
            this.sketch(collection, result);
            
        } else {
            
            if (this.isComplete()) {
               
                let result = [];

                var plane = new Plane(p[0]);
                let mp = CTX.math.mid(p[1], p[2]);
                p.push(mp);
                
                let pts = plane.input(p);
                let width = plane.distance(pts[0], pts[1]);

                let height = 0;
                if (pts[2])
                    height = plane.distance(pts[0], pts[2]);
                result = plane.delay(width, pts);
                result = plane.output(result);
                
                return collection.add(this.index, {
                    position: points[0],
                    polyline: {
                        positions: result,
                        clampToGround: true,
                        color: viewModel.lineColor,
                        width: viewModel.lineWidth,
                        material: this.isComplete() ? this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth) : this.callbackColor("lineColor", viewModel)
                    },
                });
            }
            return [];

        /*
>>>>>>> ec38823819add51820e6419781c832ece09e1e07
        let p = points;
        let pt1 = [p[0], p[1]];

        let arc = ArcUtil.arcPoints2c(CTX.math.mid(p[1], p[2]), p[1], p[2], 180);
        let result = [];

        let startAngle = 360;
        let endAngle = 90;


        if (this.isReadyToCallbackVariable()) {
            if (p.length == 3) {
                result = pt1.concat(arc);


                for (let i = 0; i < 2; i++) {
                    if (startAngle < 0) {
                        startAngle = 360;
                    }
                    if (endAngle < 0) {
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

<<<<<<< HEAD
                    }

                });
            }

        }
        return result;

    }


=======
    }*/
        return result;

    }
}
    
>>>>>>> ec38823819add51820e6419781c832ece09e1e07
}

module.exports = { Delay: Delay };