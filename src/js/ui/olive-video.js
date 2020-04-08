var olivevideoInstance = 1;
class OliveVideo{
    constructor(map,options){
        this.viewer = map.viewer3d;
        this.id = "olive-video" + (olivevideoInstance++);
        this.url = (options && options.url) ? options.url : "img/file_example_MOV_640_800kB.mov";
        let html = "<video id='"+this.id+"' width='420' muted='' autoplay='' loop='' crossorigin='' controls='' style='display:none;position:absolute;left:10px;top:10px;'>"
            +"<source src='"+this.url+"' type='video/quicktime'>"
            +"Your browser does not support the <code>video</code> element."
            +"</video>";

        $("#" + map.options.map3.id ).append($(html));
        this.element = document.getElementById(this.id);
        this.element.playbackRate = 1.0;
    }
    play(){
        /*
        if (Cesium.defined(this.synchronizer)) {
            this.synchronizer = this.synchronizer.destroy();
            this.element.playbackRate = 1.0;
            return;
        }
    
        this.synchronizer = new Cesium.VideoSynchronizer({
            clock : this.viewer.clock,
            element : this.element
        });
        */
        this.element.style.display = '';
        this.element.play(); 
    }
    pause(){
        this.element.pause(); 
    }
    destory(){
        $("#"+this.id).remove();
    }
}
/*
{
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        0.0,
        -0.4
      ]
    },
    "properties": {
      "title": "circle",
      "marker-symbol": "circle",
      "marker-color": "#9FF73A"
    }
  },
  */
module.exports = { OliveVideo : OliveVideo };