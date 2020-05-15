var { IxDatabase } = require("../repository/db");
var { dom, get, post } = require("../util/comm");

var { Section } = require("../section/section");
var { MilMap } = require("../map3d/milmap");

var { JsonByFolder } = require("../repository/json-by-folder");
var { Draw } = require("../viewmodel/draw");
var { OliveDragger } = require("../ui/olive-dragger");
require("../util/serveradapter");
require("../ui/olive-input");
require("../ui/olive-tree");
require("../ui/olive-dialog");

var { CTX } = require("../map3d/ctx");
var { OliveVideo } = require("../ui/olive-video");
global.OliveVideo = OliveVideo;

require("../viewmodel/Marker");

require("../ui/olive-gltf");

global.axios = require('axios');
global.dom = dom;
global.tx = { get: get, post: post };

function makeTable(data) {
    let str = "";
    Object.keys(data).forEach(key => {
        var sub = data[key];
        if (typeof(sub) == "object") {
            let tbl = "";

            sub.forEach(subitem => {
                tbl += "<table><tbody>";
                tbl += makeTable(subitem);
                tbl += "</tbody></table>";
            });
            str += "<tr><td class='thead'>" + key + "</td><td >" + tbl + "</td></tr>";
        } else {
            str += "<tr><td class='thead'>" + key + "</td><td class='tdata'>" + data[key] + "</td></tr>";
        }
    });
    return str;
}


class Application {
    constructor(options) {

        this.header = Object.assign({ height: 0 }, options.header);

        this.readyFunctions = [];

        window.onresize = this.onResize;

        this.workStatus("map3d", false);

        this.map = new MilMap(options.map3);
        this.map.createCollection("KMILSYMBOL", "KMilSymbol");
        this.map.createCollection("MARKER", "Marker");
        this.map.createCollection("EXTRA", "Draw");

        this.favorite = new JsonByFolder("favorite", this.map.collection("KMILSYMBOL"));
        this.drawModel = new Draw(this.map, this.map.viewOption.baseLayerPicker);
        global.map = this.map;

        this.init(options, () => {
            $("input[data-olive-widget=animation]").prop("checked", this.map.viewOption.animation);
            $("input[data-olive-widget=timeline]").prop("checked", this.map.viewOption.timeline);
            $("input[data-olive-widget=fullscreen]").prop("checked", this.map.viewOption.fullscreenButton);
            $("input[data-olive-widget=fps]").prop("checked", this.map.viewOption.fps);
            $("input[data-olive-widget=toolbar]").prop("checked", this.map.viewOption.baseLayerPicker);
            $("input[data-olive-widget=credits]").prop("checked", this.map.viewOption.creditsDisplay);
            $("input[data-olive-widget=navigation]").prop("checked", this.map.viewOption.navigation);
            $("input[data-olive-widget=distance]").prop("checked", this.map.viewOption.distance);
            this.map.show('credits', false);
            this.map.show('toolbar', false);
            this.map.show('fps', false);
            this.map.show('distance', false);
            this.workStatus("map3d", true);
        });

        if (options.section) {
            if (options.section.visible == true) {
                this.workStatus("section", false);
                this.section = this.createSection(options.section);
                document.getElementById(options.section.id).style.display = "";
                document.getElementById(options.section.handle.id).style.display = "";
            } else {
                document.getElementById(options.section.id).style.display = "none";
                document.getElementById(options.section.handle.id).style.display = "none";
            }
        }

        if (options.aside) {
            if (options.aside.visible == true) {
                this.workStatus("aside", false);
                this.aside = this.createAside(options.aside);
                this.workStatus("aside", true);
                document.getElementById(options.aside.id).style.display = "";
                document.getElementById(options.aside.handle.id).style.display = "";
            } else {
                document.getElementById(options.aside.id).style.display = "none";
                document.getElementById(options.aside.handle.id).style.display = "none";
            }
        }

        this.onResize();

        if (options.success) {
            options.success(this.map);
        }

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
    drawList() {
        return this.drawModel.getHandlerList();
    }
    drawObject(name) {
        return this.drawModel.getHandler(name);
    }
    createAside(options) {
        return new Aside(this, options);
    }
    createSection(options) {
        return new Section(this, {
            options: options,
            onload: function(parentNode, data) {
                $(data).each(function(i, d) {
                    $(parentNode).append(d);
                });
            },
            oncomplete: function() {
                this.map.oliveCamera.widget(function(obj) {
                    var carto = Cesium.Cartographic.fromCartesian(obj.position);
                    //Number(Cesium.Math.toDegrees(viewer.camera.positionCartographic.longitude).toFixed(10))
                    document.getElementById("center-longitude").innerText = Number(Cesium.Math.toDegrees(carto.longitude).toFixed(5));
                    document.getElementById("center-latitude").innerText = Number(Cesium.Math.toDegrees(carto.latitude).toFixed(5));
                    document.getElementById("center-distance").innerText = _this.map.oliveCamera.distanceFromCenter().toFixed(2) + " m";
                });
                this.map.oliveCursor.widget(function(obj) {
                    document.getElementById("cursor-longitude").innerText = obj.longitude;
                    document.getElementById("cursor-latitude").innerText = obj.latitude;

                });

                this.workStatus("section", true);
                let _this = this;
                this.readyFunctions.forEach(d => {
                    d(_this, _this.map);
                });
                //_this.map.viewer3d.scene.debugShowFramesPerSecond = false;
            }
        });
    }
    getHeaderHeight() {
        return this.header.height;
    }
    onResize() {
        let application = (typeof(app) == "undefined") ? this : app;

        var height = window.innerHeight - application.getHeaderHeight();
        var sectionWidth = (application.section) ? application.section.getWidth() : 0;
        var asideWidth = (application.aside) ? application.aside.getWidth() : 0;

        var article = dom.$("article")[0];
        if (article) {
            article.style.top = application.getHeaderHeight() + "px";
            article.style.left = sectionWidth + "px";
            article.style.width = (window.innerWidth - sectionWidth - asideWidth) + "px";
            article.style.height = height + "px";
            if (application.map) {
                dom.$("#" + application.map.getId())[0].style.height = height + "px";
            }
        }
        if (application.section) {
            application.section.resize(0, application.header.height, sectionWidth, height);
        }
        if (application.aside) {
            application.aside.resize(window.innerWidth - sectionWidth, application.header.height, asideWidth, height);
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