var { DrawObject } = require('./drawobject');
var { CTX } = require('../map3d/ctx');
class Spline extends DrawObject {
    constructor() {
        super(3);
    }
    create(collection, points, viewModel) {
        if (this.isValidPoints(points)) {
            var distances = [0.0];
            points.reduce((prev, curr) => {
                distances.push(CTX.distance(prev, curr));
                return curr;
            });
            var total = distances.reduce((prev, curr) => { return prev + curr; });
            var times = distances.reduce((prev, curr) => {
                if (prev.length > 0) { prev.push(prev[prev.length - 1] + curr); } else { prev.push(curr); }
                return prev;
            }, []);
            times = times.map(d => {
                return (d / total) * 100;
            });
            var spline = new Cesium.CatmullRomSpline({
                times: times,
                points: points
            });
            let splinePoints = new Array(101).fill(1).map((d, i) => { return spline.evaluate(i); });
            //var p0 = spline.evaluate(times[i]); // equal to positions[i]
            //var p1 = spline.evaluate(times[i] + delta); // interpolated value when delta < times[i + 1] - times[i]

            let option = {
                positions: splinePoints,
                clampToGround: true,
                color: viewModel.lineColor,
                width: viewModel.lineWidth,
                material: this.lineMaterial(viewModel.lineStyle, viewModel.lineColor, viewModel.lineWidth)
            };
            return collection.add(this.index, {
                polyline: option
            });
        }
    }
}
module.exports = { Spline: Spline };