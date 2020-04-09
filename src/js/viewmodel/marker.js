var pinBuilder = new Cesium.PinBuilder();
class Marker{
    constructor(options){
        this.options = Object.assign({},options);
        this.viewModel = {
            type: 'color',
            text:'',
            size: 48,
            height:0,
            color: "#ffffff",
            icon:'hostpital',
            url: "",
            };
    }
    update(viewModel) {
        let options = Object.assign(this.viewModel,viewModel);
        this.viewModel = options;
        let image;
        let _this = this;
        let colorObj;
        if( typeof(options.color) == "string" ){
            colorObj = Cesium.Color.fromCssColorString(options.color);
        }else{
            colorObj = options.color;
        }

        switch(options.type){
            case 'color':{
                image = pinBuilder.fromColor(colorObj, options.size).toDataURL();
                $(this.options.selector).html(this.template(image,options));
            }
            break;
            case 'text':{
                image = pinBuilder.fromText(options.text, colorObj, options.size).toDataURL();
                $(this.options.selector).html(this.template(image,options));
            }
            break;
            case 'icon':{
                Cesium.when(pinBuilder.fromMakiIconId(options.icon, colorObj, options.size), function(canvas) {
                    image = canvas.toDataURL();
                    $(_this.options.selector).html(_this.template(image,options));
                });
            }
            break;
            case 'image':{
                var url = Cesium.buildModuleUrl(options.url);
                Cesium.when(pinBuilder.fromUrl(url, colorObj, options.size), function(canvas) {
                    image = canvas.toDataURL();
                    $(_this.options.selector).html(_this.template(image,options));
                });
            }
            break;
        }
    }
    template(image,option) {
        option.category = "MARKER";
        return '<img class="symbol-sm" data-option="'+encodeURIComponent(JSON.stringify(option))+'" ondragstart="app.dragger().drag(event)" src="' + image + '"/>';
    }
}
global.ViewModel_Marker = Marker;