var { CTX } = require("../map3d/ctx");

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

        //degrees.start.height
        //degrees.end.height
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
}

var VisibilityUtil = {
    circle: function(start, end, height) {
        let polylines = [];

        start.height += height;
        let split = 10;


        let center = CTX.cartesian(start.longitude, start.latitude, start.height);

        let THETA = Math.PI / 180;
        for (var i = 0; i < 360; i += 2) {
            let polyline = [];
            theta = THETA * i;
            let r = VisibilityUtil.rotate(start, end, theta);
            polylines.push(VisibilityUtil.divide(start, r, split));
            //polyline.push(center);
            //polyline.push(CTX.cartesian(r.longitude, r.latitude, r.height));
            //polylines.push(polyline);
        }
        return polylines;
    },
    divide: function(start, end, split) {
        let polyline = [];
        let lon = (end.longitude - start.longitude) / split;
        let lat = (end.latitude - start.latitude) / split;
        for (var i = 0; i < split; i++) {
            polyline.push(CTX.cartesian(start.longitude + lon * i, start.latitude + lat * i, start.height));
        }
        return polyline;
    },
    rotate: function(start, end, theta) {
        x = end.longitude - start.longitude;
        y = end.latitude - start.latitude;
        x1 = x * Math.cos(theta) - y * Math.sin(theta);
        y1 = x * Math.sin(theta) + y * Math.cos(theta);
        return { longitude: start.longitude + x1, latitude: start.latitude + y1, height: end.height };
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
module.exports = { ParabolaUtil: ParabolaUtil, VisibilityUtil: VisibilityUtil };