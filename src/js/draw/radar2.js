var { DrawObject } = require('./drawobject');
var { CTX } = require('../map3d/ctx');

class Radar2 extends DrawObject {
    constructor() {
        super(3);
    }
    findHeightFromCartensian(c) {
        return CTX.c2r(c).height;
    }
    setHeightCartensian(c, height) {
        let r = CTX.c2r(c);
        r.height = height;
        return CTX.r2c(r);
    }
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {
            let center = points[0];
            let p1 = points[1];
            let p2 = points[2];
            let radianCone = (CTX.θ(center, p1, p2)) * (Cesium.Math.PI / 180);

            let centerHeight = this.findHeightFromCartensian(center);
            p1 = this.setHeightCartensian(p1, centerHeight);
            p2 = this.setHeightCartensian(p2, centerHeight);

            let m = CTX.cmidpoint(p1, p2);

            //center부터 동쪽으로 뻗어있는 수평선으로 부터 p1과 p2의 중심점 m의 각도를 구하기 위해 다음과 같이 horizen을 구한다
            let horizenVector = Object.assign({}, center);
            horizenVector = CTX.c2r(horizenVector);
            horizenVector.longitude += 0.02;
            horizenVector = CTX.r2c(horizenVector);

            //center를 기준으로 p1 과 p2의 중심점 m이 위에 있는지 아래에 있는지 판별하기 위해 다음과 같이 사용한다
            let laPoint = Object.assign(center);
            laPoint = CTX.c2r(laPoint);
            let laPoint2 = Object.assign(m);
            laPoint2 = CTX.c2r(laPoint2);

            //ellipsoid 가 서쪽을 바라보고 생성되기 때문에 180도 회전하고(동쪽으로) 각도에 따라 더하고 뺸다
            let degree = (laPoint.latitude < laPoint2.latitude) ? 180.0 - (CTX.θ(center, horizenVector, m)) : 180.0 + (CTX.θ(center, horizenVector, m));

            let hpr = new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(degree), Cesium.Math.toRadians(30.0), Cesium.Math.toRadians(0.0));
            let orientation = Cesium.Transforms.headingPitchRollQuaternion(
                center,
                hpr
            );


            this.templateEntity.position = points[0];
            this.templateEntity.ellipsoid.maximumCone = radianCone;
            this.templateEntity.ellipsoid.orientation = orientation;
        } else {
            let center = points[0];
            let p1 = points[1];
            let p2 = points[2];
            let radianCone = (CTX.θ(center, p1, p2)) * (Cesium.Math.PI / 180);

            let centerHeight = this.findHeightFromCartensian(center);
            p1 = this.setHeightCartensian(p1, centerHeight);
            p2 = this.setHeightCartensian(p2, centerHeight);

            let m = CTX.cmidpoint(p1, p2);

            //center부터 동쪽으로 뻗어있는 수평선으로 부터 p1과 p2의 중심점 m의 각도를 구하기 위해 다음과 같이 horizen을 구한다
            let horizenVector = Object.assign({}, center);
            horizenVector = CTX.c2r(horizenVector);
            horizenVector.longitude += 0.02;
            horizenVector = CTX.r2c(horizenVector);

            //center를 기준으로 p1 과 p2의 중심점 m이 위에 있는지 아래에 있는지 판별하기 위해 다음과 같이 사용한다
            let laPoint = Object.assign(center);
            laPoint = CTX.c2r(laPoint);
            let laPoint2 = Object.assign(m);
            laPoint2 = CTX.c2r(laPoint2);

            //ellipsoid 가 서쪽을 바라보고 생성되기 때문에 180도 회전하고(동쪽으로) 각도에 따라 더하고 뺸다
            let degree = (laPoint.latitude < laPoint2.latitude) ? 180.0 - (CTX.θ(center, horizenVector, m)) : 180.0 + (CTX.θ(center, horizenVector, m));

            let hpr = new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(degree), Cesium.Math.toRadians(30.0), Cesium.Math.toRadians(0.0));
            let orientation = Cesium.Transforms.headingPitchRollQuaternion(
                center,
                hpr
            );

            let distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1]);
            if (distance > 0) {
                return collection.add(this.index, {
                    position: points[0],
                    orientation: this.callbackValue(orientation),
                    ellipsoid: {
                        radii: new Cesium.Cartesian3(distance, distance, distance),
                        innerRadii: new Cesium.Cartesian3(1, 1, 1),
                        stackPartitions: 64,
                        slicePartitions: 64,
                        subdivisions: 64,
                        maximumCone: this.callbackValue(radianCone),
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        material: viewModel.faceColor,
                    }
                });
            }
        }
        /*
        if (this.isValidPoints(points)) {

            let center = points[0];
            let p1 = points[1];
            let p2 = points[2];
            var radianCone = (CTX.θ(center, p1, p2)) * (Cesium.Math.PI / 180);

            let centerHeight = this.findHeightFromCartensian(center);
            p1 = this.setHeightCartensian(p1, centerHeight);
            p2 = this.setHeightCartensian(p2, centerHeight);

            let m = CTX.cmidpoint(p1, p2);

            //center부터 동쪽으로 뻗어있는 수평선으로 부터 p1과 p2의 중심점 m의 각도를 구하기 위해 다음과 같이 horizen을 구한다
            let horizenVector = Object.assign({}, center);
            horizenVector = CTX.c2r(horizenVector);
            horizenVector.longitude += 0.02;
            horizenVector = CTX.r2c(horizenVector);

            //center를 기준으로 p1 과 p2의 중심점 m이 위에 있는지 아래에 있는지 판별하기 위해 다음과 같이 사용한다
            let laPoint = Object.assign(center);
            laPoint = CTX.c2r(laPoint);
            let laPoint2 = Object.assign(m);
            laPoint2 = CTX.c2r(laPoint2);

            //ellipsoid 가 서쪽을 바라보고 생성되기 때문에 180도 회전하고(동쪽으로) 각도에 따라 더하고 뺸다
            let degree = (laPoint.latitude < laPoint2.latitude) ? 180.0 - (CTX.θ(center, horizenVector, m)) : 180.0 + (CTX.θ(center, horizenVector, m));

            var hpr = new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(degree), Cesium.Math.toRadians(30.0), Cesium.Math.toRadians(0.0));
            var orientation = Cesium.Transforms.headingPitchRollQuaternion(
                center,
                hpr
            );

            var distance = Cesium.Cartesian3.distance(points[0], points[points.length - 1]);
            if (distance > 0) {
                return collection.add(this.index, {
                    position: points[0],
                    orientation: orientation,
                    ellipsoid: {
                        radii: new Cesium.Cartesian3(distance, distance, distance),
                        innerRadii: new Cesium.Cartesian3(1, 1, 1),
                        stackPartitions: 64,
                        slicePartitions: 64,
                        subdivisions: 64,
                        maximumCone: radianCone,
                        outline: true,
                        outlineColor: viewModel.lineColor,
                        material: viewModel.faceColor,
                    }
                });
            }
        }
        */
    }
}
module.exports = { Radar2: Radar2 };