var { IxDatabase } = require("../repository/db");
var { dom, get, post } = require("../util/comm");
var { WebSocketBroker } = require("../ws/websocket_broker");
var { Section } = require("../section/section");
var { MilMap } = require("../map3d/milmap");

var { Presentation } = require("../section/presentation");
var { JsonByFolder } = require("../repository/json-by-folder");
var { Draw } = require("../viewmodel/draw");
var { OliveDragger } = require("../ui/olive-dragger");
require("../util/serveradapter");
require("../ui/olive-input");
require("../ui/olive-tree");
require("../ui/olive-dialog");

var { OliveVideo } = require("../ui/olive-video");
global.OliveVideo = OliveVideo;

require("../viewmodel/Marker");

require("../ui/olive-gltf");

global.axios = require('axios');
global.dom = dom;
global.tx = { get: get, post: post };

const config = require("../../conf/server.json");

class Application {
    constructor(options) {
        this.workStatus("section", false);
        this.workStatus("map3d", false);
        let _this = this;
        this.windowLayout = {
            header: {
                height: 0
            },
            section: {
                getWidth: function() {
                    if (_this.windowLayout.section.visible) {
                        if (_this.windowLayout.section.view.visible) {
                            return _this.windowLayout.section.width;
                        }
                        return _this.windowLayout.section.width - _this.windowLayout.section.view.width;
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
        this.readyFunctions = [];
        
        window.onresize = this.onResize;

        
        //window.onresize();
        
        this.init(options);

        this.section = this.createSection();

        this.onResize();

        if (options.success) {
            options.success(this.map);
        }

    }
    init(options) {
        var _this = this;

        _this.dialog = {};
        _this.dialogFunc = {
            det : function(data){ return new Dialog({ title: '표적탐지', url: "dialog/detect.html", width: "300px",height: "160px", show:true, data:data }, function(obj,body,data) {
                if( data ){
                    $(body).find("[data-key=org_image]").text(data.org_image);

                    let index = data.org_image.indexOf("N");
                    let lastIndex = data.org_image.lastIndexOf(".");
                    if( index >= 0 && lastIndex > 0 && index < lastIndex ){
                        let str = data.org_image.substr( index, lastIndex);
                        let coord = CTX.NEstr2d(str);
                        $(body).find("[data-key=longitude]").text(coord.longitude);
                        $(body).find("[data-key=latitude]").text(coord.latitude);
                    }
                }

                $(body).find("[data-key=base64]").html( "<img src='" + data.base64 + "' />");
                let buttons = $(body).find("button");

                //resultdata.tgtInfo.forEach(function(d, i) {
                //    if (i < 5) $tbody.append("<tr><td class='thead'>제원" + i + "</td><td class='tdata'>" + d.wp_name + "</td></tr>");
                //})
            },function(){_this.dialog.det = undefined; }) },
            tia : function(data){ return new Dialog({ title: '표적식별', url: "dialog/target.html", width: "300px",height: "160px", show:true, data:data }, function(obj,body,data) {
                if( data ){
                    $(body).find("[data-key=test]").text('msg');
                    $(body).find("[data-key=value]").text(data);
                }
                var $tbody = $('.targetPro');
                //resultdata.tgtInfo.forEach(function(d, i) {
                //    if (i < 5) $tbody.append("<tr><td class='thead'>제원" + i + "</td><td class='tdata'>" + d.wp_name + "</td></tr>");
                //})
            },function(){_this.dialog.tia = undefined; }) },
            waa : function(data){ return new Dialog({ title: '무장 할당 결과값', url: "dialog/weoponAssign.html", width: "300px",height: "200px", show:true, data:data }, function(obj,body,data) {
                if( data ){
                    
                }
            },function(){_this.dialog.waa = undefined; }) },
            dsw : function(data){ return new Dialog({ title: '무장 추천 결과값', url: "dialog/weoponRecom.html", width: "300px",height: "200px", show:true, data:data }, function(obj,body,data) {
                if( data ){
                    
                }
                var $tbody = $('.weopon');
                //resultdata.wpRecom.forEach(function(d, i) {
                //    if (i < 5) $tbody.append("<tr><td>" + d.sequence_id + "</td><td>" + d.unit_name + "</td><td>" + d.wp_name + "</td></tr>");
                //})
            },function(){_this.dialog.dsw = undefined; }) }
        }

        dom.$("#door-handle")[0].onclick = function(e) {
            _this.section.showView(!_this.windowLayout.section.view.visible);
        };

        this.map = new MilMap(options);
        this.websocket = new WebSocketBroker({
            host : config.WebSocket.host,
            port : config.WebSocket.port,
            uri : '',
            onclose : function(){

            },
            onmessage : function(data){
                
                if( data && data.topic ){
                    let jsonMessage = JSON.parse( data.message );
                    switch(data.topic){
                        case 'TIA.HANDLER': //표적식별
                            if( jsonMessage.cmd == "REQ_TIA"){
                                if( !Cesium.defined(_this.dialog.tia) ){
                                    _this.dialog.tia = _this.dialogFunc.tia(jsonMessage);
                                }else{
                                    let dlg = _this.dialog.tia;
                                    dlg.set(jsonMessage);
                                    dlg.front();
                                }
                            }else if( jsonMessage.cmd == "DET_TIA"){
                                if( !Cesium.defined(_this.dialog.det) ){
                                    _this.dialog.det = _this.dialogFunc.det(jsonMessage);
                                }else{
                                    let dlg = _this.dialog.det;
                                    dlg.set(jsonMessage);
                                    dlg.front();
                                }
                            }
                        break;
                        case 'WAA.HANDLER': //무장할당 
                            if( !Cesium.defined(_this.dialog.waa) ){
                                _this.dialog.waa = _this.dialogFunc.waa(jsonMessage);
                            }else{
                                let dlg = _this.dialog.waa;
                                dlg.set(jsonMessage);
                                dlg.front();
                            }
                            
                            //console.log( data.topic + "> " + jsonMessage );
                        break;
                        case 'DSW.HANDLER': //시연용
                            if( !Cesium.defined(_this.dialog.dsw) ){
                                _this.dialog.dsw = _this.dialogFunc.dsw(jsonMessage);
                            }else{
                                let dlg = _this.dialog.dsw;
                                dlg.set(jsonMessage);
                                dlg.front();
                            }
                            
                            //console.log( data.topic + "> " + data.message );
                        break;
                    }
                }
            }
        });

        this.map.createCollection("KMILSYMBOL", "KMilSymbol");
        this.map.createCollection("ALLY", "KMilSymbol");
        this.map.createCollection("BOMA", "KMilSymbol");
        this.map.createCollection("ENEMY", "KMilSymbol");
        this.map.createCollection("MARKER", "Marker");

        this.favorite = new JsonByFolder("favorite", this.map.collection("KMILSYMBOL") );

        this.drawModel = new Draw(this.map, this.map.viewOption.baseLayerPicker);
        this.workStatus("map3d", true);

        global.map = this.map;
    }
    workStatus(name, bcomplete) {
        if (!this._workStatus) { this._workStatus = {}; }
        this._workStatus[name] = bcomplete;
    }
    isComplete() {
        if (!this._workStatus) {
            return true;
        } else {
            let _this = this;
            return Object.keys(this._workStatus).every(key => {
                return _this._workStatus[key];
            })
        }
    }
    onReady(readyFunc) {
        if (readyFunc) {
            this.readyFunctions.push(readyFunc);
        }
    }
    draw(mode) {
        this.drawModel.update(mode);
    }
    sectionShowStatus(bshow) {
        this.windowLayout.section.view.visible = bshow;
    }
    createSection() {
        let _this = this;
        return new Section(this, {
            contents: [
                { name: "Home", icon: "home", page: "section/home.html" },
                
                { name: "즐겨찾기", icon: "map marker alternate", page: "section/favorite.html" },
                //{ name: "위치검색", icon: "search", page: "section/search.html" },
                { name: "3D Map", icon: "map", page: "section/map.html" },
                { name: "3D 모델", icon: "fighter jet", page: "section/flight-area.html" },
                { name: "군대부호", icon: "object ungroup", page: "section/milsymbol.html" },
                //{ name: "인공위성", icon: "space shuttle", page: "section/sat.html" },
                { name: "시연용", icon: "play", page: "section/presentation.html" },
                { name: "Draw", icon: "edit", page: "section/draw.html" },
                { name: "Entities", icon: "sitemap", page: "section/entities.html" },
                { name: "도시요소", icon: "eye", page: "section/toshow.html" }
                //{ name: "animation", icon: "file video", page: "section/animation.html" }
                
            ],
            onload: function(parentNode, data) {
                $(data).each(function(i, d) {
                    $(parentNode).append(d);
                });
            },
            oncomplete: function() {
                
                _this.map.oliveCamera.widget(function(obj) {
                    var carto = Cesium.Cartographic.fromCartesian(obj.position);
                    //Number(Cesium.Math.toDegrees(viewer.camera.positionCartographic.longitude).toFixed(10))
                    document.getElementById("center-longitude").innerText = Number(Cesium.Math.toDegrees(carto.longitude).toFixed(5));
                    document.getElementById("center-latitude").innerText = Number(Cesium.Math.toDegrees(carto.latitude).toFixed(5));
                });
                _this.map.oliveCursor.widget(function(obj) {
                    document.getElementById("cursor-longitude").innerText = obj.longitude;
                    document.getElementById("cursor-latitude").innerText = obj.latitude;
                });

                _this.workStatus("section", true);

                $("input[data-olive-widget=animation]").prop("checked", _this.map.viewOption.animation);
                $("input[data-olive-widget=timeline]").prop("checked", _this.map.viewOption.timeline);
                $("input[data-olive-widget=fullscreen]").prop("checked", _this.map.viewOption.fullscreenButton);
                $("input[data-olive-widget=fps]").prop("checked", _this.map.viewOption.fps);
                $("input[data-olive-widget=toolbar]").prop("checked", _this.map.viewOption.baseLayerPicker);
                $("input[data-olive-widget=credits]").prop("checked", _this.map.viewOption.creditsDisplay);
                $("input[data-olive-widget=navigation]").prop("checked", _this.map.viewOption.navigation);
                $("input[data-olive-widget=distance]").prop("checked", _this.map.viewOption.distance);
                _this.map.show('credits', false);
                _this.map.show('toolbar', false);
                _this.map.show('fps', false);
                _this.map.show('distance', false);
                
                //_this.map.viewer3d.scene.debugShowFramesPerSecond = false;
            }
        });
    }
    onResize() {
        let application = (typeof(app) == "undefined") ? this : app;
        let windowLayout = application.windowLayout;
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
       
       if( sectionView ){
        sectionView.style.top = headerHeight + "px";
        sectionView.style.width = width + "px";
        sectionView.style.height = bodyHeight + "px";
       }
        sectionHandle.style.top = ((bodyHeight / 2) - (handleHeight / 2)) + "px";

        article.style.top = headerHeight + "px";
        article.style.left = width + "px";
        article.style.width = (viewWidth - width) + "px";
        article.style.height = bodyHeight + "px";

        mapEle.style.height = bodyHeight + "px";

        if (windowLayout.section.view.visible && application.section) {
            application.section.resize(width, bodyHeight);
        }
        
    }
    dragger() {
        if (!Cesium.defined(this.oliveDragger)) {
            this.oliveDragger = new OliveDragger(this);
        }
        return this.oliveDragger;
    }
    
};

global.Application = Application;

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

//load(app.map.viewer3d);