var { PinMarkers } = require('../../collection/drawcollection');
var drawIndex = 1;
class DrawObject{
    constructor(minPointCount){
        this.index = drawIndex++;
        this.minPointCount = minPointCount;
    }
    pniStart(){
        return PinMarkers.start;
    }
    pinVia(){
        return PinMarkers.via;
    }
    pinEnd(){
        return PinMarkers.end;
    }
    pin(pointLength){
        if( pointLength == 0 ){
            return this.pniStart();
        }else if( pointLength == this.minPointCount-1 ){
            return this.pinEnd();
        }
        return this.pinVia();
    }
    create(collection,points,viewModel){

    }
    dashPatternFromString(str,width){
        if( str == "line"){
            return parseInt('11111111111', 2);
        }else if( str == "dot"){
            return parseInt('1'.repeat(width), 2);
        }else if( str == "long-dot"){
            return parseInt('1'.repeat(width*2), 2);
        }else if( str == "dot-dot-line"){
            return parseInt('1'.repeat(width) + '0'.repeat(width), 2);
        }
        return parseInt('11111111111', 2);
    }
    
}
module.exports = { DrawObject:DrawObject };