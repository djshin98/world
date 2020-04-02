class OliveInput{
    constructor(selector){
        this.formElement = $(selector);
    }
    boolean(name){
        return this._selectorByName(name)
            .then(function(ele,type){
                if( type == "checkbox" || type == "radio"){
                    return $(ele).prop("checked");
                }else if( type == "text"){
                    return $(ele).val().toLowerCase() == "true" ? true : false;
                }else if( type == "number"){
                    return $(ele).val() > "0" ? true : false;
                }
                return false;
            });
    }
    number(name){
        let ele = $(this.formElement).find("input[name="+name+"]");
        if( ele ){
            let type = $(ele).attr("type");
            if( type == "checkbox" || type == "radio"){
                return $(ele).prop("checked") ? 1 : 0;
            }else if( type == "text"){
                return parseInt($(ele).val());
            }else if( type == "number"){
                return parseInt($(ele).val());
            }else if( type == "range"){
                let max = parseInt($(ele).attr("max"));
                let min = parseInt($(ele).attr("min"));

                let val = parseInt($(ele).val());
                return (val - min ) / (max - min );
            }
        }
        return 0;
    }
    color(name, transparentName){
        let ele = $(this.formElement).find("input[name="+name+"]");
        if( ele ){
            let type = $(ele).attr("type");
            if( type == "color"){
                let v = $(ele).val();
                let data = v.match(/[A-Za-z0-9]{2}/g).map(function(v) { return parseInt(v, 16) });
                if( transparentName ) data.push(this.number(transparentName)); else { data.push(1); }
                return new Cesium.Color( data[0],data[1],data[2],data[3] );                
            }
        }
        return Cesium.Color.WHITE;
    }
    _selectorByName(n){
        let ele = $(this.formElement).find("input[name="+n+"]");
        if( ele ){
            let type = $(ele).attr("type");
            return { then : function(fn){ return fn(ele,type); } };
        }
        return { then : function(fn){ return fn(undefined,"unknown"); } };
    }
}

global.OliveInput = OliveInput;