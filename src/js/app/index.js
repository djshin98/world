import { IxDatabase } from "../repository/db";
var { dom, get, post } = require("../util/comm");
var { Section } = require("../section/section");
var { MilMap } = require("../map3d/milmap");
var { KMilSymbolCollection } = require("../collection/kmilsymbolcollection");
var { JsonByFolder } = require("../repository/json-by-folder");
var { DrawInCesium } = require("../draw/base");
require("../util/ServerAdapter");
require("../ui/olive-input");
require("../ui/olive-tree");
require("../ui/olive-dialog");
global.axios = require('axios');
global.dom = dom;
global.tx = { get: get, post: post };

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
        this.section = this.createSection();

        this.collections = {};
        window.onresize = this.onResize;

        //window.onresize();
        this.init(options);

        if (options.success) {
            options.success(this.map);
        }

    }
    init(options) {
        var _this = this;
        dom.$("#door-handle")[0].onclick = function(e) {
            _this.section.showView(!_this.windowLayout.section.view.visible);
        };

        this.map = new MilMap(options);
        /*
        {
            map3: {
                id: "map3d",
                mapServiceMode:"internet", //"internet offline"
                offlineOption:{
                    proxy : "/GVS/proxy.jsp",
                    map : "http://192.168.0.153:8080/Map/World_TMS/", //""http://192.168.0.153:8180/Map/World_TMS/", //'Assets/Textures/World_TMS'
                    terrain : "http://192.168.0.153:38080/tilesets/srtm/"
                },
                offlineBaseLayers:[
                    { url:'http://192.168.0.153:8080/Map/Hwasung_TMS/'},
                    { url:'http://192.168.0.153:8080/Map/Seoul_TMS/'},
                    { url:'http://192.168.0.153:8080/Map/Daejon_TMS/'}
                ]

            }
        });
        */
        this.collections["KMILSYMBOL"] = new KMilSymbolCollection(this.map);
        this.collections["ALLY"] = new KMilSymbolCollection(this.map);
        this.collections["BOMA"] = new KMilSymbolCollection(this.map);
        this.collections["ENEMY"] = new KMilSymbolCollection(this.map);
        this.favorite = new JsonByFolder("favorite", this.collections["KMILSYMBOL"]);

        this.drawInCesium = new DrawInCesium(this.map.viewer3d, this.map.viewOption.baseLayerPicker);
        this.workStatus("map3d", true);

        this.onResize();

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
        this.drawInCesium.draw(mode);
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
                /*{ name: "위치검색", icon: "search", page: "section/search.html" },*/
                { name: "3d Map", icon: "map", page: "section/map.html" },
                { name: "공역", icon: "fighter jet", page: "section/flight-area.html" },
                { name: "군대부호", icon: "object ungroup", page: "section/milsymbol.html" },
                { name: "인공위성", icon: "space shuttle", page: "section/sat.html" },
                { name: "Draw", icon: "edit", page: "section/draw.html" },
                { name: "Entities", icon: "sitemap", page: "section/entities.html" },
                { name: "도시요소", icon: "users", page: "section/toshow.html" }
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
            application.section.resize(width, bodyHeight);
        }
    }
    getCollection(name) {
        return this.collections[name];
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