var CTX = {
    viewer: null,
    debug: false,
    terrain: true,
    ne: function(str) {
        let index = str.indexOf("N");
        if (index == 0) {
            let e = str.indexOf("E");
            if (e > 0) {
                let longitude = parseFloat(str.substr(1, e));
                let latitude = parseFloat(str.substr(e + 1));
                return new Cesium.Cartographic(longitude, latitude, 0);
            }
        }
    },
    en: function(str) { //127.55555E38.30576N
        if (str) {
            let nidx = str.indexOf("N");
            let eidx = str.indexOf("E");
            if (nidx > 0 && eidx > 0) {
                return {
                    longitude: parseFloat(str.substr(0, eidx)),
                    latitude: parseFloat(str.substr(eidx + 1, nidx - eidx - 1))
                };
            }
        }
    },
    distanceD: function(a, b) { let a1 = CTX.d2c(a); let b1 = CTX.d2c(b); return (!a1 || !b1) ? 0 : Cesium.Cartesian3.distance(a1, b1); },
    distanceR: function(a, b) { let a1 = CTX.r2c(a); let b1 = CTX.r2c(b); return (!a1 || !b1) ? 0 : Cesium.Cartesian3.distance(a1, b1); },
    distance: function(a, b) { return (!a || !b) ? 0 : Cesium.Cartesian3.distance(a, b); },
    llh: function(longitude, latitude, height) { return { longitude: longitude, latitude: latitude, height: height }; },
    degree: function(longitude, latitude, height) { return new Cesium.Cartographic(longitude, latitude, height); },
    radian: function(longitude, latitude, height) { return Cesium.Cartographic.fromDegrees(longitude, latitude, height); },
    cartesian: function(longitude, latitude, height) { return Cesium.Cartesian3.fromDegrees(longitude, latitude, height); },
    c: function(x, y, z) { return new Cesium.Cartesian3(x, y, z); },
    r: function(x, y, z) { return new Cesium.Cartographic(x, y, z); },
    r2d: function(r) {
        if (CTX.debug) {
            console.log("r2d : ");
            console.dir(r);
        }
        return !r ? r : new Cesium.Cartographic(r.longitude * Cesium.Math.DEGREES_PER_RADIAN, r.latitude * Cesium.Math.DEGREES_PER_RADIAN, r.height);
    },
    r2dA: function(rs) { return rs.map(r => { return CTX.r2d(r); }); },
    r2c: function(r) {
        if (CTX.debug) {
            console.log("r2c : ");
            console.dir(r);
        }
        return !r ? r : Cesium.Cartesian3.fromRadians(r.longitude, r.latitude, r.height);
    },
    r2cA: function(rs) { return rs.map(r => { return CTX.r2c(r); }); },
    r2w: function(r) {
        if (CTX.debug) {
            console.log("r2w : ");
            console.dir(r);
        }
        return !r ? r : CTX.c2w(CTX.r2c(r));
    },
    d2r: function(d) {
        if (CTX.debug) {
            console.log("d2r : ");
            console.dir(d);
        }
        return !d ? d : new Cesium.Cartographic(d.longitude / Cesium.Math.DEGREES_PER_RADIAN, d.latitude / Cesium.Math.DEGREES_PER_RADIAN, d.height);
    },
    d2c: function(d) {
        if (CTX.debug) {
            console.log("d2c : ");
            console.dir(d);
        }
        return !d ? d : CTX.r2c(CTX.d2r(d));
    },
    d2cA: function(ds) { return ds.map(d => { return CTX.r2c(CTX.d2r(d)); }); },
    d2w: function(d) {
        if (CTX.debug) {
            console.log("d2w : ");
            console.dir(d);
        }
        return !d ? d : CTX.c2w(Cesium.Cartesian3.fromDegrees(d.longitude, d.latitude));
    },
    c2r: function(c) {
        if (CTX.debug) {
            console.log("c2r : ");
            console.dir(c);
        }
        return !c ? c : Cesium.Cartographic.fromCartesian(c);
    },
    c2rA: function(cs) { return cs.map(c => { return CTX.c2r(c) }); },
    c2d: function(c) {
        if (CTX.debug) {
            console.log("c2d : ");
            console.dir(c);
        }
        return !c ? c : CTX.r2d(CTX.c2r(c));
    },
    c2dA: function(cs) { return cs.map(c => { return CTX.c2d(c) }); },
    c2w: function(c) {
        if (CTX.debug) {
            console.log("c2w : ");
            console.dir(c);
        }
        return !c ? c : Cesium.SceneTransforms.wgs84ToWindowCoordinates(CTX.viewer.scene, c);
    },
    w2r: function(x, y) {
        if (CTX.debug) {
            console.log("w2r : ");
            console.log("x=" + x + " ,y=" + y);
        }
        return CTX.c2r(CTX.w2c(x, y));
    },
    w2d: function(x, y) {
        if (CTX.debug) {
            console.log("w2d : ");
            console.log("x=" + x + " ,y=" + y);
        }
        return CTX.r2d(CTX.w2r(x, y));
    },
    w2c: function(x, y) {
        if (CTX.debug) {
            console.log("w2c : ");
            console.log("x=" + x + " ,y=" + y);
        }
        let t = CTX.viewer.scene.pickPosition(new Cesium.Cartesian2(x, y));
        if (!t) { t = CTX.viewer.camera.pickEllipsoid(new Cesium.Cartesian3(x, y), CTX.viewer.scene.globe.ellipsoid); }
        return t;
        //return CTX.viewer.camera.pickEllipsoid(new Cesium.Cartesian3(x, y), CTX.viewer.scene.globe.ellipsoid);
        //return CTX.terrain ? CTX.viewer.scene.pickPosition(new Cesium.Cartesian2(x, y)) : CTX.viewer.camera.pickEllipsoid(new Cesium.Cartesian3(x, y), CTX.viewer.scene.globe.ellipsoid);
    },
    θ: function(c, s, e) {
        let v1 = CTX.c(s.x - c.x, s.y - c.y, s.z - c.z);
        let v2 = CTX.c(e.x - c.x, e.y - c.y, e.z - c.z);
        Cesium.Cartesian3.normalize(v1, v1);
        Cesium.Cartesian3.normalize(v2, v2);
        let radian = Math.acos(Cesium.Cartesian3.dot(v1, v2));
        let degree = radian * (180 / Math.PI);
        return degree;
    },
    radian2degree(r) { return r * (180 / Math.PI); },

    ca: function(x, y) {
        let result = Cesium.Cartesian3.add(x, y, {})
        return result;
    },
    displayMeter: function(f, d) {
        if (f >= 1000) {
            return (f / 1000).toFixed(d) + " km";
        }
        return f.toFixed(d) + "m";
    }
}

/*
baseLayerPicker true or false 따라 가져오는 함수가 다르다? 
var cartesian = this.map.viewOption.baseLayerPicker ? this.map.viewer3d.scene.pickPosition(new Cesium.Cartesian2(pos.x, pos.y)) :
                        this.map.viewer3d.camera.pickEllipsoid(new Cesium.Cartesian3(pos.x, pos.y), this.map.viewer3d.scene.globe.ellipsoid);                  
*/
module.exports = { CTX: CTX };
global.CTX = CTX;