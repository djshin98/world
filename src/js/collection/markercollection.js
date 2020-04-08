//let {Cesium} = require('cesium/Cesium');
let { OliveEntityCollection } = require('../map3d/entity_collection');

var pinBuilder = new Cesium.PinBuilder();

class MarkerCollection extends OliveEntityCollection {
    constructor(map) {
        super(map);
    }
    add(cartesian, opt) {
        var options = Object.assign({
            name:'test',
            type:'color',
            color:Cesium.Color.ROYALBLUE,
            text:'?',
            icon:'hospital',
            url:'',
            size:48,
        },opt);

        if( typeof(color) == "string" ){
            options.color = Cesium.Color.fromCssColorString(color);
        }
        switch(options.type){
            case 'color':{
                this.viewer.entities.add({
                    name : options.name,
                    position : cartesian,
                    billboard : {
                        image : pinBuilder.fromColor(options.color, options.size).toDataURL(),
                        verticalOrigin : Cesium.VerticalOrigin.BOTTOM
                    }
                });
            }
            break;
            case 'text':{
                this.viewer.entities.add({
                    name : options.name,
                    position : cartesian,
                    billboard : {
                        image : pinBuilder.fromText(options.text, options.color, options.size).toDataURL(),
                        verticalOrigin : Cesium.VerticalOrigin.BOTTOM
                    }
                });
            }
            break;
            case 'icon':{
                Cesium.when(pinBuilder.fromMakiIconId(options.icon, options.color, options.size), function(canvas) {
                    return viewer.entities.add({
                        name : options.name,
                        position : cartesian,
                        billboard : {
                            image : canvas.toDataURL(),
                            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
                        }
                    });
                });
            }
            break;
            case 'image':{
                var url = Cesium.buildModuleUrl(options.url);
                Cesium.when(pinBuilder.fromUrl(url, options.color, options.size), function(canvas) {
                    return viewer.entities.add({
                        name : options.name,
                        position : cartesian,
                        billboard : {
                            image : canvas.toDataURL(),
                            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
                        }
                    });
                });
            }
            break;
        }
    }
    open(entities) {
        this.close();
        let _this = this;
        if (entities) {
            let cartesians = [];
            entities.forEach(d => {
                if (d.options.category == "MARKER") {
                    let cartesian = new Cesium.Cartesian3(d.cartesian.x, d.cartesian.y, d.cartesian.z);
                    _this.add(cartesian,d.options);
                    cartesians.push(cartesian);
                }
            });

            let rect = Cesium.Rectangle.fromCartesianArray(cartesians);
            //this.map.oliveCamera.flyToRectangle(rect);
        }
    }


};

module.exports = {
    MarkerCollection: MarkerCollection
}