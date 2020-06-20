var { DrawObject } = require('./drawobject');
class Alert extends DrawObject {
    constructor() {
        super(1, 1);
    }
    create(collection, points, viewModel) {

        if (this.isValidPoints(points)) {

            //var al = new Cesium.Ellipsoid.fromCartesian3(points[0], points[1]);

            let distance = viewModel.imageUrlArray;
            let lastSec = 0;

            //let lastColor = viewModel.lineColor;
            let imageUrlArray = [];
            imageUrlArray.push("./img/point1.png");
            imageUrlArray.push("./img/point2.png");
            imageUrlArray.push("./img/point3.png");

            //distance *= i + 1;
            var pos1_entity = collection.add(this.index, {
                position: points[0],

                billboard: {
                    height: 100,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                    width: 100,
                    image: imageUrlArray[0],
                    //position: (0.0, 0.0, 0.0)
                }



                /*point: {
                    pixelSize: 10,
                    fill: false,
                    outline: true,
                    outlineColor: new Cesium.CallbackProperty(function(time, result) {
                        let sec = new Date().getSeconds();
                        if (lastSec != sec) {
                            let color = (sec % 2 == 0) ? new Cesium.Color(255, 0, 0) : new Cesium.Color(0, 0, 255);
                            lastColor = color;
                            lastSec = sec;
                        }
                        return lastColor;
                    }, false),

                     //outlineWidth: viewModel.lineWidth,

                //heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                    */



            });

            var pos2_entity = collection.add(this.index, {
                position: points[0],

                billboard: {
                    height: 100,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                    width: 100,
                    image: imageUrlArray[1],
                    //position: (0.0, 0.0, 0.0)
                }

            });



            var pos3_entity = collection.add(this.index, {
                position: points[0],

                billboard: {
                    height: 100,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                    width: 100,
                    image: imageUrlArray[2],
                    //position: (0.0, 0.0, 0.0)
                }

            });




            setInterval(() => {
                let sec = new Date().getSeconds();
                if (sec % 3 == 0) {
                    pos2_entity.show = false;
                    pos3_entity.show = false;
                } else if (sec % 3 == 1) {
                    pos2_entity.show = true;
                } else {
                    pos3_entity.show = true;
                }
            }, 1000)

            /*
            var temp = new Cesium.CallbackProperty(function(time, result) {
                let sec = new Date().getSeconds();
                if (sec % 2 == 0) {
                    //pos2.png 숨김
                    _this.pos2_entity.show = false;
                    //pos3.png 숨김
                    _this.pos3_entity.show = false;
                } else if (sec % 2 == 1) {
                    //pos2.png 나타남
                    _this.pos2_entity.show = true;
                    //pos3.png 숨김
                }
                return 0;

            }, false);
            */
        }
    }
}

module.exports = { Alert: Alert };