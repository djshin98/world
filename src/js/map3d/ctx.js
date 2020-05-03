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
        distanceD: function(a, b) { return Cesium.Cartesian3.distance(CTX.d2c(a), CTX.d2c(b)); },
        distanceR: function(a, b) { return Cesium.Cartesian3.distance(CTX.r2c(a), CTX.r2c(b)); },
        distance: function(a, b) { return Cesium.Cartesian3.distance(a, b); },
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
            return new Cesium.Cartographic(r.longitude * Cesium.Math.DEGREES_PER_RADIAN, r.latitude * Cesium.Math.DEGREES_PER_RADIAN, r.height);
        },
        r2dA: function(rs) { return rs.map(r => { return CTX.r2d(r); }); },
        r2c: function(r) {
            if (CTX.debug) {
                console.log("r2c : ");
                console.dir(r);
            }
            return Cesium.Cartesian3.fromRadians(r.longitude, r.latitude, r.height);
        },
        r2cA: function(rs) { return rs.map(r => { return CTX.r2c(r); }); },
        r2w: function(r) {
            if (CTX.debug) {
                console.log("r2w : ");
                console.dir(r);
            }
            return CTX.c2w(CTX.r2c(r));
        },
        d2r: function(d) {
            if (CTX.debug) {
                console.log("d2r : ");
                console.dir(d);
            }
            return new Cesium.Cartographic(d.longitude / Cesium.Math.DEGREES_PER_RADIAN, d.latitude / Cesium.Math.DEGREES_PER_RADIAN, d.height);
        },
        d2c: function(d) {
            if (CTX.debug) {
                console.log("d2c : ");
                console.dir(d);
            }
            return CTX.r2c(CTX.d2r(d));
        },
        d2cA: function(ds) { return ds.map(d => { return CTX.r2c(CTX.d2r(d)); }); },
        d2w: function(d) {
            if (CTX.debug) {
                console.log("d2w : ");
                console.dir(d);
            }
            return CTX.c2w(Cesium.Cartesian3.fromDegrees(d.longitude, d.latitude));
        },
        c2r: function(c) {
            if (CTX.debug) {
                console.log("c2r : ");
                console.dir(c);
            }
            return Cesium.Cartographic.fromCartesian(c);
        },
        c2rA: function(cs) { return cs.map(c => { return CTX.c2r(c) }); },
        c2d: function(c) {
            if (CTX.debug) {
                console.log("c2d : ");
                console.dir(c);
            }
            return CTX.r2d(CTX.c2r(c));
        },
        c2w: function(c) {
            if (CTX.debug) {
                console.log("c2w : ");
                console.dir(c);
            }
            return Cesium.SceneTransforms.wgs84ToWindowCoordinates(CTX.viewer.scene, c);
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
            return CTX.terrain ? CTX.viewer.scene.pickPosition(new Cesium.Cartesian2(x, y)) : CTX.viewer.camera.pickEllipsoid(new Cesium.Cartesian3(x, y), CTX.viewer.scene.globe.ellipsoid);
        },
    }
    /*
    baseLayerPicker true or false 따라 가져오는 함수가 다르다? 
    var cartesian = this.map.viewOption.baseLayerPicker ? this.map.viewer3d.scene.pickPosition(new Cesium.Cartesian2(pos.x, pos.y)) :
                            this.map.viewer3d.camera.pickEllipsoid(new Cesium.Cartesian3(pos.x, pos.y), this.map.viewer3d.scene.globe.ellipsoid);                  
    */
module.exports = { CTX: CTX };
global.CTX = CTX;