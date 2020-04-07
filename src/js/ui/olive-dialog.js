
var { dom, get, post } = require("../util/comm");

var oliveDialog = 1;
var oliveLastPosition = {x:10,y:10};
function increasePosition(incX,incY,maxX,maxY){
    oliveLastPosition.x += incX;
    oliveLastPosition.y += incY;

    if( oliveLastPosition.x > maxX ){ oliveLastPosition.x = 10; }
    if( oliveLastPosition.y > maxY ){ oliveLastPosition.y = 10; }
    return oliveLastPosition;
}
class Dialog{
    constructor(options){
        this.options = Object.assign({
            parent:"body",
            title:"no title",
            width:"fit-content",
            height:"fit-content",
            position:increasePosition(20,20,400,600),
            url: "README.html"
        },options);
        
        var response = {data:"sample"};
        this.id = "olive-dialog-" + (oliveDialog++);
        let html = "<div id='"+this.id+"' class='panel panel-default'>" + "<div class='panel-heading'>" 
         + "<div class='panel-title'><h4>"+this.options.title+"</h4></div>"
         + "</div><div class='panel-body'>"+response.data+"</div></div>";

        $(this.options.parent).append(html);
        
        $("#"+this.id).lobiPanel({
            /*
            reload: {icon: 'fa fa-refresh'},
            editTitle: {icon: 'fa fa-edit',icon2: 'fa fa-save'},
            unpin: {icon: 'fa fa-arrows'},
            */
            reload:false,
            editTitle:false,
            unpin:false,
            close: { icon: 'fa fa-times-circle' },
            expand: { icon: 'fa fa-expand',icon2: 'fa fa-compress' }
        });
        this.instance = $("#"+this.id).data("lobiPanel");
        this.instance.unpin();
        this.instance.setPosition(this.options.position.x, this.options.position.y);
        if( this.options.width !="fit-content" ){
            this.instance.setWidth(this.options.width);
        }
        if( this.options.height !="fit-content" ){
            this.instance.setHeight(this.options.height);
        }
        
        this.instance.disableTooltips();
        this.load( this.options.url );

        let _this = this;
        $("#"+this.id).on('resizeStop.lobiPanel', function(ev, lobiPanel){
            let w = _this.instance.getWidth();
                let h = _this.instance.getHeight();
            window.console.log("size : " + w + " , " + h);
        });

        $("#"+this.id).on('loaded.lobiPanel', function(ev, lobiPanel){
            let w = _this.instance.getWidth();
                let h = _this.instance.getHeight();
            window.console.log("l size : " + w + " , " + h);
        });
    }
    destroy(){
        if( this.instance ){
            this.instance.destroy();
            this.instance = undefined;
        }
        $( "#"+this.id ).remove();
    }
    minimize(){ if( this.instance ) this.instance.minimize(); }
    maximize(){ if( this.instance ) this.instance.maximize(); }
    fullscreen(){if( this.instance ) this.instance.toFullScreen(); }
    bringToFront(){if( this.instance ) this.instance.bringToFront(); }
    load(url,callback){
        let _this = this;
        get({
            url: this.options.url,
            success: function(status, statusText, data) {
                let $data = $(data);
                $("#"+_this.id + ">.panel-body").html("");
                $("#"+_this.id + ">.panel-body").append($data);
                if( callback ){
                    callback(_this,$("#"+_this.id + ">.panel-body"));
                }
                let w = _this.instance.getWidth();
                let h = _this.instance.getHeight();
                if(_this.options.height == "fit-content"){
                    //let height = $("#"+_this.id + ">.panel-body").height();
                    let height = $("#"+_this.id + ">.panel-body").height() + $("#"+_this.id + ">.panel-heading").height() + 30;
                    $("#"+_this.id).height(height);
                }
                if(_this.options.width =="fit-content"){
                    let cwidth = $data.width();
                    let width = $("#"+_this.id + ">.panel-body").width() + 30;
                    $("#"+_this.id).width(_this.options.width);
                    $("#"+_this.id + ">.panel-body").width(_this.options.width);
                }
                
            }
        });
    }
    data(url,callback){
        let _this = this;
        get({
            url: this.options.url,
            success: function(status, statusText, data) {
                if( callback ){
                    callback(_this,$("#"+_this.id + ">.panel-body"));
                }
            }
        });
    }
}

global.Dialog = Dialog;