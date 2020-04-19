var { dom, get, post } = require("../util/comm");

var descriptionUrl = "";
var descriptionHtmls = {

};
function urlCallback(time,result){
    return descriptionHtmls[descriptionUrl];
}
var kmilsymbolDescription;
function oliveDescription(){
    if( !Cesium.defined(kmilsymbolDescription) ){
        kmilsymbolDescription = new OliveKMilSymbolDescription();
    }
    return kmilsymbolDescription;
}

class OliveKMilSymbolDescription extends Cesium.CallbackProperty{
    constructor(entityOptions){
        super(urlCallback,true);
        this.options = Object.assign({},entityOptions);
        descriptionUrl = "dialog/description.html";
        this.getResource("dialog/description.html");

        this.update();
    }
    update(){
        this.attr("icon","src",this.options.icon);
        this.text("longitude", this.options.degree.longitude);
        this.text("latitude", this.options.degree.latitude);
        this.text("height", this.options.degree.height);
        this.text("sidc", this.options.sic);
        this.text("unit-name", this.options.name);
        this.text("modifier", this.options.desc.modifier);
        
    }
    text(key,value){
        let body = $(".cesium-infoBox-description");
        $(body).find("[data-key="+key+"]").text(value);
    }
    html(key,value){
        let body = $(".cesium-infoBox-description");
        $(body).find("[data-key="+key+"]").html(value);
    }
    attr(key,name,value){
        let body = $(".cesium-infoBox-description");
        $(body).find("[data-key="+key+"]").attr(name,value);
    }
    getResource(url){
        if( !Cesium.defined(descriptionHtmls[url]) ){
            descriptionHtmls[url] = "";
            get({
                url : url,
                success : function(status, statusText, response){
                    descriptionHtmls[url] = response;
                }
            });
        }
    }
}



module.exports = { oliveDescription : oliveDescription };