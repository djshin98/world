var { DrawObject } = require('./drawobject');

const SVGAlert = require('./svg/alert');
const alertImages = [];

const activeColor = "#ff0000";
const disableColor = "#dddddd";

let options = {
    width: 54,
    height: 54,
    images: [
        [{
            r: 5,
            fill: activeColor
        }, {
            r: 10,
            stroke: activeColor,
            "stroke-width": 3
        }, {
            r: 15,
            stroke: disableColor,
            "stroke-width": 1
        }, {
            r: 20,
            stroke: disableColor,
            "stroke-width": 1
        }, {
            r: 23,
            stroke: disableColor,
            "stroke-width": 1
        }],
        [{
            r: 5,
            fill: activeColor
        }, {
            r: 10,
            stroke: disableColor,
            "stroke-width": 1
        }, {
            r: 15,
            stroke: activeColor,
            "stroke-width": 3
        }, {
            r: 20,
            stroke: disableColor,
            "stroke-width": 1
        }, {
            r: 23,
            stroke: disableColor,
            "stroke-width": 1
        }],
        [{
            r: 5,
            fill: activeColor
        }, {
            r: 10,
            stroke: disableColor,
            "stroke-width": 1
        }, {
            r: 15,
            stroke: disableColor,
            "stroke-width": 1
        }, {
            r: 20,
            stroke: activeColor,
            "stroke-width": 3
        }, {
            r: 23,
            stroke: disableColor,
            "stroke-width": 1
        }],
        [{
            r: 5,
            fill: activeColor
        }, {
            r: 10,
            stroke: disableColor,
            "stroke-width": 1
        }, {
            r: 15,
            stroke: disableColor,
            "stroke-width": 1
        }, {
            r: 20,
            stroke: disableColor,
            "stroke-width": 1
        }, {
            r: 23,
            stroke: activeColor,
            "stroke-width": 3
        }],
    ]
};
options.images.forEach((d, i) => {
    let opt = {
        width: options.width,
        height: options.height,
        //index: i,
        data: d
    }
    alertImages.push(new SVGAlert.Alert(opt).image());
});


class Alert extends DrawObject {
    constructor() {
        super(1, 1);
    }
    create(collection, points, viewModel) {
        if (this.isReadyToCallbackVariable()) {

        } else {
            let createTime = new Date().getTime();
            return collection.add(this.index, {
                position: points[0],

                billboard: {
                    height: alertImages[0].height,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
                    width: alertImages[0].width,
                    image: new Cesium.CallbackProperty(function() {
                            let currentTime = new Date().getTime();
                            let index = (parseInt((currentTime - createTime) / 100)) % alertImages.length;
                            return alertImages[index].img;
                        }, true)
                        //position: (0.0, 0.0, 0.0)
                }
            });
        }
        /*
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
            }, 100)

        }*/
    }
}

module.exports = { Alert: Alert };