var { CTX } = require("../map3d/ctx");

var SurfaceUtil = {
    height: function(lon, lat, height) {
        var earth = Cesium.Ellipsoid.WGS84;
        let result = CTX.cartesian(0, 0, 0);
        let c = earth.scaleToGeodeticSurface(CTX.cartesian(lon, lat, height), result);
        let degree = CTX.c2d(result);
        return degree.height;
    }
}
var LineUtil = {
    divide: function(start, end, split) {
        let polyline = [];
        let lon = (end.longitude - start.longitude) / split;
        let lat = (end.latitude - start.latitude) / split;
        for (var i = 0; i < split; i++) {
            polyline.push(CTX.llh(start.longitude + lon * i, start.latitude + lat * i, start.height));
        }
        return polyline;
    },
    rotate: function(center, end, theta) {
        x = end.longitude - center.longitude;
        y = end.latitude - center.latitude;
        x1 = x * Math.cos(theta) - y * Math.sin(theta);
        y1 = x * Math.sin(theta) + y * Math.cos(theta);
        return CTX.llh(center.longitude + x1, center.latitude + y1, end.height);
    }
};
var ParabolaUtil = {
    sin: function(degrees, angles, divide, height, terrian, inverse, irepeat) {
        if (divide > 0 && height > 0) {
            if (degrees && degrees.start && degrees.end && angles) {
                if (terrian == true) {
                    if (degrees.start.height > degrees.end.height) {
                        let inverseDegree = {
                            start: degrees.end,
                            end: degrees.start
                        }
                        return ParabolaUtil.sin(inverseDegree, angles, divide, height, terrian, false);
                    }
                }

                let ratio = 180 / divide;
                var deltaLon = (degrees.end.longitude - degrees.start.longitude) / divide; //경도 방향 이동량
                var deltaLat = (degrees.end.latitude - degrees.start.latitude) / divide; //위도 방향 이동량
                let maxHeight = height - degrees.start.height;
                var lon = degrees.start.longitude;
                var lat = degrees.start.latitude;

                var points = [];
                console.log("parabola : ");
                for (var i = angles.start; i <= (angles.end + ratio); i += ratio) {
                    lon += deltaLon;
                    lat += deltaLat;
                    let h = maxHeight * Math.sin(Cesium.Math.toRadians(i)) + degrees.start.height;

                    let d = CTX.distanceD(degrees.end, CTX.degree(lon, lat, h));
                    if (terrian == true && i > 90) {
                        console.log("angle : " + i);
                        if (irepeat > 0 && h < degrees.end.height) {
                            console.log("distance : " + d + " , height(" + degrees.end.height + ") : " + h + " , angle : " + i);
                            if (Math.abs(d) > 15) {

                                let incDegree = {
                                    start: degrees.start,
                                    end: {
                                        longitude: (degrees.end.longitude + (deltaLon * (angles.end - i))),
                                        latitude: (degrees.end.latitude + (deltaLat * (angles.end - i))),
                                        height: degrees.end.height
                                    }
                                }
                                angles.end = i;
                                return ParabolaUtil.sin(incDegree, angles, divide, height, terrian, inverse, irepeat - 1);
                            }
                            break;
                        }
                    }

                    points.push(CTX.cartesian(lon, lat, h));
                }
                if (Cesium.defined(inverse) && inverse == false) {
                    return points.reverse();
                } else {
                    return points;
                }
            }
        }
    },

    quadratic: function(degrees, divide, height) {
        let q = height;
        let x0 = 0;
        let y0 = 0;
        let x1 = 0;
        let y1 = 0;

        let deltaLon = (degrees.end.longitude - degrees.start.longitude) / divide; //경도 방향 단위
        let deltaLat = (degrees.end.latitude - degrees.start.latitude) / divide; //위도 방향 단위

        var points = [];
        let maxHeight = 0;
        let brefLongitude = true;
        if (Math.abs(deltaLon) > Math.abs(deltaLat)) {
            x0 = degrees.start.longitude;
            y0 = degrees.start.height;
            x1 = degrees.end.longitude;
            y1 = degrees.end.height;

        } else {
            brefLongitude = false;
            x0 = degrees.start.latitude;
            y0 = degrees.start.height;
            x1 = degrees.end.latitude;
            y1 = degrees.end.height;
        }
        let distance = x1 - x0;
        let r = Math.sqrt(q - y0) / Math.sqrt(q - y1);
        let p0 = (distance * r) / (1 + r);
        let p = x0 + p0;
        let a = (y0 - q) / Math.pow(x0 - p, 2);
        let cratio = p0 / distance;

        let clng = 0; //degrees.start.longitude + (distance * cratio);
        let clat = 0; //degrees.start.latitude + (distance * cratio);
        if (brefLongitude) {
            clng = degrees.start.longitude + (distance * cratio);
            let distance1 = degrees.end.latitude - degrees.start.latitude;
            clat = degrees.start.latitude + (distance1 * cratio);
        } else {
            clat = degrees.start.latitude + (distance * cratio);
            let distance1 = degrees.end.longitude - degrees.start.longitude;
            clng = degrees.start.longitude + (distance1 * cratio);
        }
        let center = [
            ParabolaUtil.cartesianSurfaceHeight(clng, clat),
            CTX.cartesian(clng, clat, q)
        ];

        for (var i = 0; i <= divide; i++) {
            let lon = degrees.start.longitude + (deltaLon * i);
            let lat = degrees.start.latitude + (deltaLat * i);
            let val = brefLongitude ? lon : lat;
            let h = a * Math.pow(val - p, 2) + q;
            maxHeight = Math.max(maxHeight, h);
            points.push(CTX.cartesian(lon, lat, h));
        }
        console.log("q:" + height);
        console.log("s:" + degrees.start.height + " , e:" + degrees.end.height + ", max:" + maxHeight);

        return { points: points, center: center };
    },
    quadraticHalf: function(degrees, divide) {

        let x0 = 0;
        let y0 = 0;
        let x1 = 0;
        let y1 = 0;
        //let ratio = 180 / divide;
        let deltaLon = (degrees.end.longitude - degrees.start.longitude) / divide; //경도 방향 이동량
        let deltaLat = (degrees.end.latitude - degrees.start.latitude) / divide; //위도 방향 이동량

        var points = [];
        let p = 0;
        let brefLongitude = true;
        if (Math.abs(deltaLon) > Math.abs(deltaLat)) {
            x0 = degrees.start.longitude;
            y0 = degrees.start.height;
            x1 = degrees.end.longitude;
            y1 = degrees.end.height;
            p = degrees.start.longitude;
        } else {
            brefLongitude = false;
            x0 = degrees.start.latitude;
            y0 = degrees.start.height;
            x1 = degrees.end.latitude;
            y1 = degrees.end.height;
            p = degrees.start.latitude;
        }
        q = degrees.start.height;
        if (degrees.start.longitude == degrees.end.longitude && degrees.start.latitude == degrees.end.latitude) {
            points.push(CTX.cartesian(degrees.start.longitude, degrees.start.latitude, degrees.start.height));
            points.push(CTX.cartesian(degrees.end.longitude, degrees.end.latitude, degrees.end.height));
        } else {
            //let a = (y0 - q) / Math.pow(x0 - p, 2);
            let a = (y1 - q) / Math.pow(x1 - p, 2);
            for (var i = 0; i <= divide; i++) {
                let lon = degrees.start.longitude + (deltaLon * i);
                let lat = degrees.start.latitude + (deltaLat * i);
                let val = brefLongitude ? lon : lat;
                let h = a * Math.pow(val - p, 2) + q;
                points.push(CTX.cartesian(lon, lat, h));
            }
        }
        return points;
    },
    cartesianSurfaceHeight: function(lng, lat) {
        var earth = Cesium.Ellipsoid.WGS84;
        let result = CTX.cartesian(0, 0, 0);
        let h = earth.scaleToGeodeticSurface(CTX.cartesian(lng, lat, 0), result);
        return h;
    }
};

var VisibilityUtil = {
    arc: function(center, end, deg, options) {
        options = Object.assign({
            height: 1,
            divide: 10,
            degree: 10,
            terrian: false
        }, options);
        let polylines = [];

        center.height += options.height;
        //let center = CTX.cartesian(center.longitude, center.latitude, center.height);

        let THETA = Math.PI / 180;
        if (deg > 0) {
            for (var i = 0; i < deg; i += options.degree) {
                let r = LineUtil.rotate(center, end, THETA * i);

                //let polyline = LineUtil.divide(center, r, options.divide);
                //if (options.terrian == true) {
                //    VisibilityUtil.terrianEI(polyline);
                //}
                //polyline = CTX.d2cA(polyline);
                polylines.push(r);
            }
        } else {
            for (var i = 0; i > deg; i -= options.degree) {
                let r = LineUtil.rotate(center, end, THETA * i);

                //let polyline = LineUtil.divide(center, r, options.divide);
                //if (options.terrian == true) {
                //    VisibilityUtil.terrianEI(polyline);
                //}
                //polyline = CTX.d2cA(polyline);
                polylines.push(r);
            }
        }

        return polylines;
    },
    radiation: function(center, end, options) {
        options = Object.assign({
            height: 1,
            divide: 10,
            degree: 10,
            terrian: false
        }, options);
        let polylines = [];

        center.height += options.height;
        //let center = CTX.cartesian(center.longitude, center.latitude, center.height);

        let THETA = Math.PI / 180;
        for (var i = 0; i < 360; i += options.degree) {
            let r = LineUtil.rotate(center, end, THETA * i);

            let polyline = LineUtil.divide(center, r, options.divide);
            //if (options.terrian == true) {
            //    VisibilityUtil.terrianEI(polyline);
            //}
            //polyline = CTX.d2cA(polyline);
            polylines.push(polyline);
        }
        return polylines;
    },
    // ★ 최초의 정점의 높이는 고정시키고, 다른 정점들중 tanθ 값이 제일 큰 값으로 변경한다. 
    terrianEI: function(polyline, options) {
        options = Object.assign({ margin: 0 }, options);

        let len = polyline.length;
        if (len > 1) {
            let distance = CTX.distanceR(polyline[0], polyline[len - 1]);
            let distanceUnit = distance / (len - 1);
            let maxTheta = -Infinity;
            polyline.forEach((point, i) => {
                if (i > 0) {
                    maxTheta = Math.max(maxTheta, ((options.margin + point.height) - polyline[0].height) / (distanceUnit * i));
                }
            });
            polyline[len - 1].height = maxTheta * distance + polyline[0].height;
            let theta = Math.atan(maxTheta);
            let ratio = 1 - (polyline[len - 1].height * Math.sin(theta)) / distance;

            let p = [CTX.r2c(polyline[0]), CTX.r2c(polyline[len - 1])];
            //p[1].x *= ratio;
            //p[1].y *= ratio;
            //p[1].z *= ratio;
            /*
            polyline.forEach((point, i) => {
                if (i > 0) {
                    point.height = maxTheta * (distanceUnit * i) + polyline[0].height;
                }
            });
            let theta = Math.atan(maxTheta); //*180/(Math.PI);
            let longitudeD = polyline[len - 1].longitude - polyline[0].longitude;
            longitudeD = (1 - ((polyline[len - 1].height * Math.sin(theta)) / longitudeD));
            polyline[len - 1].longitude = polyline[0].longitude + longitudeD;

            let latitudeD = polyline[len - 1].latitude - polyline[0].latitude;
            latitudeD = (1 - ((polyline[len - 1].height * Math.sin(theta)) / latitudeD));
            polyline[len - 1].latitude = polyline[0].latitude + latitudeD;

            polyline[len - 1].height = maxTheta * distance + polyline[0].height;*/
            return p;
        }
    },
    callbackTerrianEI: function(center, updatedPositions, divide, options, callback) {
        let outline = [];
        do {
            let ps = updatedPositions.splice(divide);
            let polyline = [center].concat(updatedPositions);
            if (Cesium.defined(callback)) {
                let terrianPolyline = VisibilityUtil.terrianEI(polyline, options);
                outline.push(terrianPolyline[terrianPolyline.length - 1]);
                callback(terrianPolyline);
            }
            updatedPositions = ps;
        } while (updatedPositions.length > 0);
        if (Cesium.defined(callback)) {
            callback(outline);
        }
    }
};

//console.log("height : " + ParabolaUtil.height(126.94089, 38.66589));
/*
let degrees = {
    start: { longitude: 100, latitude: 100, height: 0 },
    end: { longitude: 0, latitude: 50, height: 10 },
}
let height = 200;
let points = ParabolaUtil.quadratic(degrees, 10, height);
points.forEach(d => {
    console.log("p:" + d.longitude + " , h:" + d.height);
});
*/
module.exports = { SurfaceUtil: SurfaceUtil, LineUtil: LineUtil, ParabolaUtil: ParabolaUtil, VisibilityUtil: VisibilityUtil };