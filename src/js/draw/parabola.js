var { DrawObject } = require('./drawobject');
class Parabola extends DrawObject {
    constructor() {
        super(2);
    }
    create(collection, points, viewModel) {
        if (points && points.length && points.length >= this.minPointCount) {

            var earth = Cesium.Ellipsoid.WGS84;
            var startPoint = points[1]; //earth.cartographicToCartesian(Cesium.Cartographic.fromDegrees(pointA[0][0], pointA[0][1], 0.0));
            var endPoint = points[2]; //earth.cartographicToCartesian(Cesium.Cartographic.fromDegrees(pointB[0][0], pointB[0][1], 0.0));
            let result = points[1];
            var midpointCartesian = Cesium.Cartesian3.midpoint(startPoint, endPoint, result);
            //var midpointCartesian = startPoint.add(endPoint).divideByScalar(2.0);
            earth.scaleToGeodeticSurface(midpointCartesian);
            var midpointCartographic = earth.cartesianToCartographic(midpointCartesian);
            midpointCartographic.height = 1000;
            midpointCartesian = earth.cartographicToCartesian(midpointCartographic);
    
            var hermiteSpline = new Cesium.CatmullRomSpline({
                times : [ 0.0, 0.5, 1.0],
                points : [startPoint,midpointCartesian,endPoint],
            });

            var polylinePoints = [];
    
            for(var i=0; i<20; ++i) {
                polylinePoints.push(hermiteSpline.evaluate(i/20));
            }

            return collection.add(this.index, {
                polyline: {
                    positions : polylinePoints,
                    //clampToGround : true,
                    color : viewModel.lineColor,
                    width : viewModel.lineWidth,
                    material : viewModel.lineColor
                }
                /*
                    hierarchy: points,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    fill: true,
                    outline: true,
                    outlineColor: viewModel.lineColor,
                    outlineWidth: viewModel.lineWidth,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    height: 10000,
                    extrudedHeight: 30000,
                    extrudedHeightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }*/
            });
        }
    }
    type1(collection, name, degree, minHeight, maxHeight, _viewModel) {
        if (collection) {
            let points = [CTX.d2c(degree.lb), CTX.d2c(degree.lu), CTX.d2c(degree.ru), CTX.d2c(degree.rb)];
            let viewModel = this.setViewModel({
                faceColor: Cesium.Color.WHITE,
                faceTransparent: 0.6,
                lineColor: Cesium.Color.YELLOW,
                lineTransparent: 0.6
            }, _viewModel);

            let option = {
                position: points[0],
                name: name,
                polygon: {
                    hierarchy: points,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    fill: true,
                    outline: true,
                    outlineColor: viewModel.lineColor,
                    outlineWidth: viewModel.lineWidth,
                    material: new Cesium.ColorMaterialProperty(viewModel.faceColor),
                    height: minHeight,
                    extrudedHeight: maxHeight,
                    extrudedHeightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }
            };

            if (Cesium.defined(name) && name.length > 0) {
                option.label = {
                    text: name,
                    fillColor: viewModel.lineColor,
                    //pixelOffset : new Cesium.Cartesian2(0, -20),
                    //eyeOffset : CTX.c(0,minHeight+maxHeight+1000,-200),
                    height: maxHeight,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND
                }
            }

            return collection.add(this.index, option);
        }
    }
}


function addLines(pointA,pointB){
            var earth = Cesium.Ellipsoid.WGS84;
    
            // start and end points on the surface of the earth
    
            var startPoint = earth.cartographicToCartesian(Cesium.Cartographic.fromDegrees(pointA[0][0], pointA[0][1], 0.0));
    
            var endPoint = earth.cartographicToCartesian(Cesium.Cartographic.fromDegrees(pointB[0][0], pointB[0][1], 0.0));
    
           
    
            // determine the midpoint (point will be inside the earth)
    
            var midpointCartesian = startPoint.add(endPoint).divideByScalar(2.0);
    
           
    
            // move the midpoint to the surface of the earth
    
            earth.scaleToGeodeticSurface(midpointCartesian);
    
           
    
            // add some altitude if you want (1000 km in this case)
    
            var midpointCartographic = earth.cartesianToCartographic(midpointCartesian);
    
            midpointCartographic.height = 1000000;
    
            midpointCartesian = earth.cartographicToCartesian(midpointCartographic);
    
           
    
            // create a hermite spline that goes through these three points
    
            var hermiteSpline = new Cesium.HermiteSpline( [
    
                {point: startPoint, time: 0.0},
    
                {point: midpointCartesian, time: 0.5},
    
                {point: endPoint, time: 1.0}
    
            ]);
    
           
    
            // create a 20 point polyline that follows the spline
    
            var polylinePoints = [];
    
            for(var i=0; i<20; ++i) {
    
                polylinePoints.push(hermiteSpline.evaluate(i/20));
    
            }
    
            var polylineCollection = new Cesium.PolylineCollection();
    
            var polyline = polylineCollection.add();
    
            polyline.setPositions(polylinePoints);
    
           
    
            var primitives = widget.scene.getPrimitives();
    
            primitives.add(polylineCollection);
}

module.exports = { Parabola: Parabola };
