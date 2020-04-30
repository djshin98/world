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
    quadratic: function(degrees, maxHeight) {
        let q = maxHeight;
        //let p = 
        //let height = a * Math.pow(x - p) + q;
    }
}

module.exports = { ParabolaUtil: ParabolaUtil };