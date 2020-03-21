import { IxDatabase } from "./db";
var { dom, get, post } = require("./comm");
var { Section } = require("./section");
var { MilMap } = require("./milmap");

global.dom = dom;
global.tx = { get: get, post: post };

class Application {
    constructor() {
        this.windowLayout = {
            header: {
                height: 0
            },
            section: {
                getWidth: function() {
                    if (app.windowLayout.section.visible) {
                        if (app.windowLayout.section.view.visible) {
                            return app.windowLayout.section.width;
                        }
                        return app.windowLayout.section.width - app.windowLayout.section.view.width;
                    } else {
                        return 0;
                    }
                },
                width: 300,
                visible: true,
                view: {
                    width: 225,
                    visible: true
                },
                handle: {
                    height: 50
                }
            }
        }
        this.favorite = new IxDatabase(1, "favorite");
        this.favoriteJson = [];
        this.section = this.createSection();
        window.onresize = this.onResize;

        //window.onresize();
        this.init();
    }
    guid() {
        function s4() {
          return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
    init() {
        var _this = this;
        dom.$("#door-handle")[0].onclick = function(e) {
            _this.section.showView(!_this.windowLayout.section.view.visible);
        };
    }
    sectionShowStatus(bshow) {
        this.windowLayout.section.view.visible = bshow;
    }
    createSection() {
        return new Section(this, {
            contents: [
                { name: "Home", icon: "home", page: "section/home.html" },
                { name: "즐겨찾기", icon: "map marker alternate", page: "section/favorite.html" },
                { name: "위치검색", icon: "search", page: "section/search.html" },
                { name: "3d Map", icon: "map", page: "section/map.html" },
                { name: "공역", icon: "fighter jet", page: "section/flight-area.html" },
                { name: "군대부호", icon: "object ungroup", page: "section/milsymbol.html" },
                { name: "인공위성", icon: "space shuttle", page: "section/sat.html" },
                { name: "animation", icon: "file video", page: "section/animation.html" }
            ],
            onload: function(parentNode, data) {
                $(data).each(function(i, d) {
                    $(parentNode).append(d);
                });
            },
            oncomplete:function(){
               
            }
        });
    }
    onResize() {
        let windowLayout = app.windowLayout;
        var width = windowLayout.section.getWidth();
        var headerHeight = windowLayout.header.height;
        var sectionHeaderHeight = 40;
        var handleHeight = windowLayout.section.handle.height;

        var sectionView = dom.$("section")[0];
        var sectionHandle = dom.$("#door-handle")[0];
        var article = dom.$("article")[0];
        //var header = dom.$("header")[0];
        var mapEle = dom.$("#map3d")[0];
        var viewWidth = window.innerWidth;
        var viewHeight = window.innerHeight;
        var bodyHeight = viewHeight - headerHeight;
        /*
            header.style.top = "0px";
            header.style.width = viewWidth + "px";
            header.style.height = headerHeight + "px";
        */
        sectionView.style.top = headerHeight + "px";
        sectionView.style.width = width + "px";
        sectionView.style.height = bodyHeight + "px";

        sectionHandle.style.top = ((bodyHeight / 2) - (handleHeight / 2)) + "px";

        article.style.top = headerHeight + "px";
        article.style.left = width + "px";
        article.style.width = (viewWidth - width) + "px";
        article.style.height = bodyHeight + "px";

        mapEle.style.height = bodyHeight + "px";

        if (windowLayout.section.view.visible) {
            app.section.resize(width, bodyHeight);
        }
    }
    getFavoriteList(callback){
        let _this = this;
        this.favorite.get("favorite","list",function(result){
            if( result && result.value ){
                callback( result.value );
                _this.favoriteJson = result.value;
            }else{
                callback( [] );
            }
        });
    }
    saveFavorite(path,callback){
        var paths = path.split("/");
        let len = paths.length;
        let _this = this;
        let obj = paths.reduce(function(prev,curr,i){
            let obj = prev.find(function(d){ return d.name == curr ? true : false; });
            if( !obj ){
                obj = { name : curr , id : _this.guid() };   
                prev.push( obj );
            }
            if( len == i+1 ){
                obj.type = "file";
                return obj;
            }else{
                obj.type = "folder";
                if(!obj.children){obj.children = [];}
                return obj.children;
            }
            
        },this.favoriteJson);

        this.favorite.set("item",obj.id,["a","b"]); 

        this.favorite.set("favorite","list",this.favoriteJson);

        this.getFavoriteList(callback);
    }
    newFavorite(path,callback){
    }
    deleteFavorite(path,callback){
    }
    openFavorite(path){
        
    }
}

global.app = new Application();
app.onResize();

global.map = new MilMap({
    map3: {
        id: "map3d",
        mapServiceMode:"internet", //"internet offline"
        offlineOption:{
            proxy : "/GVS/proxy.jsp",
            map : "http://192.168.0.153:8180/Map/World_TMS/", //""http://192.168.0.153:8180/Map/World_TMS/", //'Assets/Textures/World_TMS'
            terrain : "http://192.168.0.153:38080/tilesets/srtm/"
        },
        offlineBaseLayers:[
            { url:'http://192.168.0.153:8180/Map/Hwasung_TMS/'},
            { url:'http://192.168.0.153:8180/Map/Seoul_TMS/'},
            { url:'http://192.168.0.153:8180/Map/Daejon_TMS/'}
        ]
        
    }
});

//var { load, pos } = require('./sample.js');
//global.pos = pos;


//const commandOpts = {};
//commandOpts.enableDistanceLegend = false;
//viewer.extend(Cesium.viewerCesiumNavigationMixin, commandOpts);
/*
var container = '<a href="http://www.bing.com"><img src="img/facility.png" title="Bing Imagery"/></a>';
var credit = new Cesium.CreditDisplay(container, ' • ');
var credit = new Cesium.Credit('Title', 'img/facility.png', 'http://www.cesiumjs.org');
viewer.scene.frameState.creditDisplay.addDefaultCredit(credit)
viewer.scene.frameState.creditDisplay.addCredit(new Cesium.Credit({ text: 'my other credit text' }));
*/

//load(viewer);