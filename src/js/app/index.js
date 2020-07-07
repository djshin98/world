const { IxDatabase } = require("../indexeddb/db");
const { dom, get, post } = require("../util/comm");

const { Section } = require("./section");
const { Aside } = require("./aside");
const { ArticleDirector } = require("./articledirector");

const { JsonByFolder } = require("../indexeddb/json-by-folder");

const { OliveDragger } = require("../ui/olive-dragger");
require("../util/serveradapter");
require("../ui/olive-input");
require("../ui/olive-tree");
require("../ui/olive-dialog");

const { OliveVideo } = require("../ui/olive-video");
global.OliveVideo = OliveVideo;

require("../viewmodel/marker");

require("../ui/olive-gltf");

global.axios = require('axios');
global.dom = dom;
global.tx = { get: get, post: post };

const { WebSocketBroker } = require("../ws/websocket_broker");
const config = require("../../conf/server.json");
const { $$ } = require("../core/e");

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

        this.articles = new ArticleDirector(this, options.article);

        this.favorite = new JsonByFolder(this, "favorite");

        this.workStatus("map3d", true);
        //});

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
            options.success(this.articles, this.section, this.aside);
        }

        if (Q.isValid(options.websocket)) {
            let websocketConfig = options.websocket;
            this.websocket = new WebSocketBroker({
                host: config.WebSocket.host,
                port: config.WebSocket.port,
                uri: '',
                reconnectable: (Q.isValid(websocketConfig.reconnectable) && websocketConfig.reconnectable == true) ? true : false,
                onreconnected: (websockerbroker) => {
                    this.websocket = websockerbroker;
                },
                onclose: () => {},
                onmessage: (data) => {}
            });
        }
    }

    setAttributes(attrs) {
        if (this.aside) {
            this.aside.setAttributes(attrs);
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
    load() {
        if (Q.isValid(this.section)) {
            this.section.load();
        }
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
                this.workStatus("section", true);
                //let _this = this;
                this.readyFunctions.forEach(d => {
                    d(this, this.articles.getOpenedMap());
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

        if (Q.isValid(application)) {
            var hh = application.getHeaderHeight();
            var height = window.innerHeight - hh;
            var sectionWidth = (application.section) ? application.section.getWidth() : 0;
            var asideWidth = (application.aside) ? application.aside.getWidth() : 0;

            let articleWidth = (window.innerWidth - sectionWidth - asideWidth);
            if (application.articles) {
                application.articles.resize(sectionWidth, hh, articleWidth, height);
            }
            if (application.section) {
                application.section.resize(0, hh, sectionWidth, height);
            }
            if (application.aside) {
                application.aside.resize(window.innerWidth - asideWidth, hh, asideWidth, height);
            }
        }
    }
    dragger() {
        if (!Q.isValid(this.oliveDragger)) {
            this.oliveDragger = new OliveDragger(this);
        }
        return this.oliveDragger;
    }

};

global.Application = Application;