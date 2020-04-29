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

var targetRefs;
var targetExtras;
var targetAirCollision;
var targetAlignRefs;
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
            det: function(data) {
                return new Dialog({
                    title: '표적탐지',
                    url: "dialog/detect.html",
                    width: "350px",
                    height: "300px",
                    show: true,
                    data: data,
                    onset: function(obj, body, data) {
                        if (data) {
                            $(body).find("[data-key=org_image]").text(data.org_image);

                            if (data.longitude) { $(body).find("[data-key=longitude]").text("" + data.longitude); }
                            if (data.latitude) { $(body).find("[data-key=latitude]").text("" + data.latitude); }

                            if (data.act == "del") {
                                $(body).find("[data-key=base64]").text("");
                            } else if (data.base64) {
                                var symbol = new ms.Symbol("SPZP----------G", {});
                                var src = symbol.toDataURL();
                                $(body).find("[data-key=base64]").html("<img width='100' src='" + src + "' />");
                            }
                            obj.setVariable("org_image", data.org_image);
                            obj.setVariable("longitude", data.longitude);
                            obj.setVariable("latitude", data.latitude);

                            if (data.longitude && data.latitude) {
                                _this.addEntity(_this.map.collection("KMILSYMBOL"), data.longitude, data.latitude,
                                    "SPZP----------G", (entity) => {
                                        obj.setVariable("token", entity.id);
                                    }, true
                                );
                            }
                        }
                    },
                    onclose: function() {
                        _this.dialog.det = undefined;
                    },
                    oninit: function(obj, body) {
                        let req = $(body).find("button[data-key=req]");
                        req.unbind('click');
                        req.bind('click', function() {
                            //{"cmd":"REQ_TIA", "token":"유니크한 값", "org_image":"D:\mapx\ccai\tia\org_images\1586832548849_blob.png"} 
                            //cmd  : REQ_TIA 고정  
                            //token : 요청에 대한 유니크한 값 
                            //org_image : 요청 이미지 full path  
                            let msg = {
                                cmd: "REQ_TIA",
                                token: obj.getVariable("token"),
                                org_image: obj.getVariable("org_image"),
                                longitude: obj.getVariable("longitude"),
                                latitude: obj.getVariable("latitude")
                            };

                            let entity = obj.getVariable("entity");
                            if (entity) { msg.entity = entity.id }

                            _this.websocket.send('TIA.HANDLER', msg);
                        });
                        let cancel = $(body).find("button[data-key=cancel]");
                        cancel.unbind('click');
                        cancel.bind('click', function() {
                            obj.destroy();
                            _this.dialog.det = undefined;
                        });
                    },
                })
            },
            tia: function(data) {
                return new Dialog({
                    title: '표적식별',
                    url: "dialog/detect_res.html",
                    width: "490px",
                    height: "610px",
                    show: true,
                    data: data,
                    onset: function(obj, body, data) {
                        if (data && data.results && data.results.length > 0) {
                            let d = data.results[0];
                            $(body).find("[data-key=org_image]").text(d.mil_image);

                            if (data.longitude) { $(body).find("[data-key=longitude]").text("" + data.longitude); }
                            if (data.latitude) { $(body).find("[data-key=latitude]").text("" + data.latitude); }

                            if (d.base64) {
                                $(body).find("[data-key=base64]").html("<img width='400' src='" + d.base64 + "' />");
                            } else {
                                $(body).find("[data-key=base64]").text("");
                            }

                            $(body).find("td[data-token=" + data.token + "]").css("background-color", "");

                            if (d.sidc) {
                                var symbol = new ms.Symbol(d.sidc, {});
                                var src = symbol.toDataURL();
                                $(body).find("[data-key=symbol]").html("<img width='40' src='" + src + "' />");
                                $(body).find("[data-key=sidc]").text(d.sidc);
                            }
                            $(body).find("[data-key=type]").text(d.type);
                            $(body).find("[data-key=name]").text(d.name);
                            $(body).find("[data-key=width]").text(d.width);
                            $(body).find("[data-key=length]").text(d.length);
                            $(body).find("[data-key=height]").text(d.height);
                            $(body).find("[data-key=equ_id]").text(d.equ_id);

                            let col = _this.map.collection("KMILSYMBOL");
                            if (col) {
                                if (data.token) {
                                    col.remove(data.token);
                                } else if (_this.dialog.det) {
                                    let entity = _this.dialog.det.getVariable("entity");
                                    if (entity) {
                                        col.remove(entity.id);
                                    }
                                }
                                _this.addEntity(col, data.longitude, data.latitude, d.sidc,
                                    (entity) => {
                                        _this.dialog.det.setVariable("entity", { id: entity.id });
                                    }, true
                                );
                            }
                        }
                    },
                    onclose: function() { _this.dialog.tia = undefined; },
                    oninit: function(obj, body) {
                        /*
                    ["req0","req1","req2","req3","req4"].forEach((key,i)=>{
                        let req = $(body).find("button[data-key="+key+"]");
                        req.unbind('click');
                        req.bind('click', function(){
                            let msg = {
                                cmd:"REQ_WAA",
                                type:i,
                                token: obj.getVariable("token"),
                                longitude: obj.getVariable("longitude"),
                                latitude: obj.getVariable("latitude")
                            };
    
                            let entity = obj.getVariable( "entity");
                            if( entity ){ msg.entity=entity.id }
    
                            _this.websocket.send('WAA.HANDLER',msg);
                        });
                    });
                    */
                        let cancel = $(body).find("button[data-key=cancel]");
                        cancel.unbind('click');
                        cancel.bind('click', function() {
                            alert('cancel');
                        });
                    },
                })
            },
            waa0: function(data) {
                return new Dialog({
                    title: '시한성 전략 표적',
                    url: "dialog/target0.html",
                    width: "730px",
                    height: "350px",
                    show: true,
                    data: data,
                    onset: function(obj, body, data) {
                        if (data) {
                            let str = ""; //makeTable(data);

                            if (data.data) {
                                data.data.forEach(row => {
                                    if (!Cesium.defined(row.t_id) || row.t_id.length == 0) {
                                        if (row.lon && row.lat) {
                                            _this.addEntity(_this.map.collection("KMILSYMBOL"), parseFloat(row.lon), parseFloat(row.lat),
                                                "SPZP----------G", (entity) => {
                                                    let ustr = "<tr onclick=\"map.oliveCamera.flyOver(" + row.lon + "," + row.lat + ")\">";
                                                    ustr += "<td class='tdata'>" + row.dt + "</td>";
                                                    ustr += "<td class='tdata' data-token='" + entity.id + "' onclick=\"app.reqUnknown('" + entity.id + "'," + row.lon + "," + row.lat + ")\" style='background-color:red;'>미확인</td>";
                                                    ustr += "<td class='tdata' >" + row.lon + "</td>";
                                                    ustr += "<td class='tdata' >" + row.lat + "</td>";
                                                    ustr += "<td class='tdata'>" + row.wt + "</td>";
                                                    ustr += "<td class='tdata'><button onclick=\"app.popupTarget('" + row.t_id + "');\">무장추천</button></td>";
                                                    ustr += "<td class='tdata'><button onclick=\"app.popupTargetAlign('" + row.t_id + "');\">무장할당</button></td>";
                                                    ustr += "</tr>";
                                                    $(body).find("tbody").append(ustr);
                                                }, false
                                            );
                                        }
                                    } else {
                                        str += "<tr onclick=\"app.popupTarget('" + row.t_id + "');map.oliveCamera.flyOver(" + row.lon + "," + row.lat + ");\">";
                                        str += "<td class='tdata'>" + row.dt + "</td>";
                                        str += "<td class='tdata'>" + row.t_id + "</td>";
                                        str += "<td class='tdata' >" + row.lon + "</td>";
                                        str += "<td class='tdata' >" + row.lat + "</td>";
                                        str += "<td class='tdata'>" + row.wt + "</td>";
                                        str += "<td class='tdata'><button onclick=\"app.popupTarget('" + row.t_id + "');\">무장추천</button></td>";
                                        str += "<td class='tdata'><button onclick=\"app.popupTargetAlign('" + row.t_id + "');\">무장할당</button></td>";
                                        str += "</tr>";

                                        if (row.lon && row.lat) {
                                            _this.addEntity(_this.map.collection("KMILSYMBOL"), parseFloat(row.lon), parseFloat(row.lat), row.code,
                                                (entity) => {}, false);
                                        }

                                    }
                                });
                            }
                            $(body).find("tbody").html(str);
                        }
                    },
                    onclose: function() { _this.dialog.waa = undefined; },
                    oninit: function(obj, body) {
                        let req = $(body).find("button[data-key=req]");
                        req.unbind('click');
                        req.bind('click', function() {
                            alert('req');
                        });
                        let cancel = $(body).find("button[data-key=cancel]");
                        cancel.unbind('click');
                        cancel.bind('click', function() {
                            alert('cancel');
                        });
                    },
                })
            },
            waa1: function(data) {
                return new Dialog({
                    title: '무장 추천',
                    url: "dialog/target1.html",
                    width: "490px",
                    height: "220px",
                    show: true,
                    data: data,
                    onset: function(obj, body, data) {
                        if (data) {
                            let str = ""; //makeTable(data);

                            if (data.data) {
                                data.data.forEach(row => {
                                    str += "<tr onclick=\"map.oliveCamera.flyOver(" + row.lon + "," + row.lat + ")\">";
                                    str += "<td class='tdata'>" + row.t_id + "</td>";
                                    str += "<td class='tdata'>" + row.weapon + "</td>";
                                    str += "<td class='tdata' >" + row.unit + "</td>";
                                    str += "<td class='tdata' >" + row.rank + "</td>";
                                    str += "</tr>";
                                });
                            }
                            $(body).find("tbody").html(str);
                        }
                    },
                    onclose: function() { _this.dialog.waa = undefined; },
                    oninit: function(obj, body) {
                        let req = $(body).find("button[data-key=req]");
                        req.unbind('click');
                        req.bind('click', function() {
                            alert('req');
                        });
                        let cancel = $(body).find("button[data-key=cancel]");
                        cancel.unbind('click');
                        cancel.bind('click', function() {
                            alert('cancel');
                        });
                    },
                })
            },
            waa2: function(data) {
                return new Dialog({
                    title: '부수적 피해평가 결과',
                    url: "dialog/target2.html",
                    width: "520px",
                    height: "620px",
                    show: true,
                    data: data,
                    onset: function(obj, body, data) {
                        if (data) {
                            let str = ""; //makeTable(data);
                            if (data.data) {

                                data.data.forEach(row => {
                                    str += "<tr onclick=\"map.oliveCamera.flyOver(" + row.lon + "," + row.lat + ")\">";
                                    str += "<td class='tdata'>" + row.t_id + "</td>";
                                    str += "<td class='tdata'>" + row.weapon + "</td>";
                                    str += "<td class='tdata'>" + row.unit + "</td>";
                                    str += "<td class='tdata'>" + row.rank + "</td>";
                                    str += "<td class='tdata'>" + row.result + "</td>";
                                    str += "</tr>";

                                    _this.drawRad(parseFloat(row.lon), parseFloat(row.lat), row.result, parseFloat(row.rad));
                                });

                            }
                            $(body).find("tbody").html(str);
                        }
                    },
                    onclose: function() { _this.dialog.waa = undefined; },
                    oninit: function(obj, body) {
                        let req = $(body).find("button[data-key=req]");
                        req.unbind('click');
                        req.bind('click', function() {
                            alert('req');
                        });
                        let cancel = $(body).find("button[data-key=cancel]");
                        cancel.unbind('click');
                        cancel.bind('click', function() {
                            alert('cancel');
                        });
                    },
                })
            },
            waa3: function(data) {
                return new Dialog({
                    title: '공역 충돌',
                    url: "dialog/target3.html",
                    width: "580px",
                    height: "700px",
                    show: true,
                    data: data,
                    onset: function(obj, body, data) {
                        if (data) {
                            let str = ""; //makeTable(data);
                            if (data.data) {

                                data.data.forEach(row => {
                                    str += "<tr>";
                                    str += "<td class='tdata'>" + row.t_id + "</td>";
                                    str += "<td class='tdata'>" + row.weapon + "</td>";
                                    str += "<td class='tdata'>" + row.unit + "</td>";
                                    str += "<td class='tdata'>" + row.ac_cal + "</td>";
                                    str += "<td class='tdata'>" + row.rank + "</td>";
                                    str += "</tr>";
                                });
                            }
                            $(body).find("tbody").html(str);
                        }
                    },
                    onclose: function() { _this.dialog.waa = undefined; },
                    oninit: function(obj, body) {
                        let req = $(body).find("button[data-key=req]");
                        req.unbind('click');
                        req.bind('click', function() {
                            alert('req');
                        });
                        let cancel = $(body).find("button[data-key=cancel]");
                        cancel.unbind('click');
                        cancel.bind('click', function() {
                            alert('cancel');
                        });
                    },
                })
            },
            waa4: function(data) {
                return new Dialog({
                    title: '무장 할당 결과',
                    url: "dialog/target4.html",
                    width: "390px",
                    height: "300px",
                    show: true,
                    data: data,
                    onset: function(obj, body, data) {
                        if (data) {
                            let str = ""; //makeTable(data);
                            if (data.data) {

                                data.data.forEach(row => {
                                    str += "<tr>";
                                    str += "<td class='tdata'>" + row.t_id + "</td>";
                                    str += "<td class='tdata'>" + row.weapon + "</td>";
                                    str += "<td class='tdata'>" + row.unit + "</td>";
                                    str += "</tr>";
                                });
                            }
                            $(body).find("tbody").html(str);
                        }
                    },
                    onclose: function() { _this.dialog.waa = undefined; },
                    oninit: function(obj, body) {
                        let req = $(body).find("button[data-key=req]");
                        req.unbind('click');
                        req.bind('click', function() {
                            alert('req');
                        });
                        let cancel = $(body).find("button[data-key=cancel]");
                        cancel.unbind('click');
                        cancel.bind('click', function() {
                            alert('cancel');
                        });
                    },
                })
            },
            waa5: function(data) {
                return new Dialog({
                    title: '무장 할당',
                    url: "dialog/target5.html",
                    width: "390px",
                    height: "220px",
                    show: true,
                    data: data,
                    onset: function(obj, body, data) {
                        if (data) {
                            let str = ""; //makeTable(data);

                            if (data.data) {
                                data.data.forEach(row => {
                                    str += "<tr onclick=\"map.oliveCamera.flyOver(" + row.lon + "," + row.lat + ")\">";
                                    str += "<td class='tdata'>" + row.t_id + "</td>";
                                    str += "<td class='tdata'>" + row.weapon + "</td>";
                                    str += "<td class='tdata' >" + row.unit + "</td>";
                                    str += "</tr>";
                                });
                            }
                            $(body).find("tbody").html(str);
                        }
                    },
                    onclose: function() { _this.dialog.waa = undefined; },
                    oninit: function(obj, body) {
                        let req = $(body).find("button[data-key=req]");
                        req.unbind('click');
                        req.bind('click', function() {
                            alert('req');
                        });
                        let cancel = $(body).find("button[data-key=cancel]");
                        cancel.unbind('click');
                        cancel.bind('click', function() {
                            alert('cancel');
                        });
                    },
                })
            },
            dsw: function(data) {
                return new Dialog({
                    title: '무장 추천 결과값',
                    url: "dialog/weoponRecom.html",
                    width: "300px",
                    height: "200px",
                    show: true,
                    data: data,
                    onset: function(obj, body, data) {
                        if (data) {
                            $(body).find("[data-key=org_image]").text(data.org_image);

                            if (data.longitude) { $(body).find("[data-key=longitude]").text("" + data.longitude); }
                            if (data.latitude) { $(body).find("[data-key=latitude]").text("" + data.latitude); }

                            if (data.act == "del") {
                                $(body).find("[data-key=base64]").text("");
                            } else if (data.base64) {
                                $(body).find("[data-key=base64]").html("<img width='400' src='" + data.base64 + "' />");
                            }
                        }
                    },
                    onclose: function() { _this.dialog.dsw = undefined; },
                    oninit: function(obj, body) {
                        let req = $(body).find("button[data-key=req]");
                        req.unbind('click');
                        req.bind('click', function() {
                            alert('req');
                        });
                        let cancel = $(body).find("button[data-key=cancel]");
                        cancel.unbind('click');
                        cancel.bind('click', function() {
                            alert('cancel');
                        });
                    },
                })
            }
        }

        dom.$("#door-handle")[0].onclick = function(e) {
            _this.section.showView(!_this.windowLayout.section.view.visible);
        };

        this.map = new MilMap(options);
        this.websocket = new WebSocketBroker({
            host: config.WebSocket.host,
            port: config.WebSocket.port,
            uri: '',
            onclose: function() {

            },
            onmessage: function(data) {

                if (data && data.topic) {
                    let jsonMessage = (typeof(data.message) == "object") ? data.message : JSON.parse(data.message);
                    switch (data.topic) {
                        case 'TIA.HANDLER': //표적식별
                            if (jsonMessage.cmd == "RES_TIA") {
                                if (!Cesium.defined(_this.dialog.tia)) {
                                    _this.dialog.tia = _this.dialogFunc.tia(jsonMessage);
                                } else {
                                    let dlg = _this.dialog.tia;
                                    dlg.set(jsonMessage);
                                    dlg.front();
                                }
                            } else if (jsonMessage.cmd == "DET_TIA") {
                                if (jsonMessage.act && jsonMessage.act != "del") {
                                    if (!Cesium.defined(_this.dialog.det)) {
                                        _this.dialog.det = _this.dialogFunc.det(jsonMessage);
                                    } else {
                                        let dlg = _this.dialog.det;
                                        dlg.set(jsonMessage);
                                        dlg.front();
                                    }
                                }
                            }
                            break;
                        case 'WAA.HANDLER': //무장할당 
                            if (Cesium.defined(jsonMessage.type) && jsonMessage.type != null) {
                                let type = jsonMessage.type;
                                if (type == 0) {

                                    serverAdapter.get('type0', {}, function(resultdata) {
                                        var addCollection = map.collection("type0");
                                        if (!Cesium.defined(addCollection)) {
                                            addCollection = map.createCollection("type0", "Draw");
                                        }
                                        addCollection.removeAll();
                                        var viewdata = resultdata.bmoa;
                                        if (viewdata) {
                                            viewdata.forEach(row => {
                                                row.degree = { longitude: row.geocd_lngt, latitude: row.geocd_ltd };
                                                app.drawObject("bmoa").type1(addCollection, row.bmoa_id, row.degree, row.bmoa_rads * 1000, {
                                                    faceColor: "#ffffff",
                                                    faceTransparent: 0.5,
                                                    lineColor: "#ff0000",
                                                    lineTransparent: 1
                                                });
                                            });
                                        }

                                        var airCollection = map.collection("type0:air");
                                        if (!Cesium.defined(airCollection)) {
                                            airCollection = map.createCollection("type0:air", "KMilSymbol");
                                        }
                                        airCollection.removeAll();

                                        viewdata = resultdata.aircraft;
                                        if (viewdata) {
                                            viewdata.forEach(d => {
                                                d.degree = {
                                                    longitude: d.lng,
                                                    latitude: d.lat
                                                };
                                            })
                                            airCollection.terrianFromDegrees(viewdata, function(d) {
                                                d.size = 30;
                                                let entity = airCollection.add(CTX.degree(d.degree.longitude, d.degree.latitude, parseFloat(d.height) * 1000), d);
                                                //console.dir(entity);
                                                //let ele = $("#toshow-view [data-id=" + d.id + "]");
                                                //ele.data("id", entity.id);
                                            });
                                        }

                                    });
                                }

                                if (type == 1) {
                                    targetRefs = jsonMessage;
                                } else if (type == 2) {
                                    targetExtras = jsonMessage;

                                    if (targetExtras && targetExtras.data) {
                                        targetExtras.data.sort((a, b) => { return b.rad - a.rad; });
                                        targetExtras.data.forEach(row => {
                                            _this.drawRad(parseFloat(row.lon), parseFloat(row.lat), row.result, parseFloat(row.rad));
                                        });
                                    }

                                } else if (type == 3) {
                                    targetAirCollision = jsonMessage;

                                    if (targetAirCollision && targetAirCollision.data) {

                                        var aaCollection = map.collection("type3:aa");
                                        if (!Cesium.defined(aaCollection)) {
                                            aaCollection = map.createCollection("type3:aa", "Draw");
                                        }
                                        aaCollection.removeAll();

                                        targetAirCollision.data.forEach(row => {
                                            if (row.ac) {
                                                row.ac.forEach(d => {
                                                    d.degree = {
                                                        lb: _this.parseEN(d.lb),
                                                        lu: _this.parseEN(d.lu),
                                                        rb: _this.parseEN(d.rb),
                                                        ru: _this.parseEN(d.ru)
                                                    }
                                                    _this.drawObject("aa_box").type1(aaCollection, d.name, d.degree, parseFloat(d.min) * 1000, parseFloat(d.max) * 1000, {
                                                        faceColor: "#ffffff",
                                                        faceTransparent: 0.5,
                                                        lineColor: "#954045",
                                                        lineTransparent: 1
                                                    });
                                                });
                                            }
                                            //_this.drawRad(parseFloat(row.lon), parseFloat(row.lat), row.result,parseFloat(row.rad) );
                                        });
                                    }

                                } else if (type == 4) {
                                    targetAlignRefs = jsonMessage;
                                } else {
                                    let dlgkey = "waa" + type;
                                    if (!Cesium.defined(_this.dialog[dlgkey])) {
                                        _this.dialog[dlgkey] = _this.dialogFunc[dlgkey](jsonMessage);
                                    } else {
                                        let dlg = _this.dialog[dlgkey];
                                        dlg.set(jsonMessage);
                                        dlg.front();
                                    }
                                }

                            } else {
                                alert("invalid message \n" + data);
                            }
                            //console.log( data.topic + "> " + jsonMessage );
                            break;
                        case 'DSW.HANDLER': //시연용
                            if (!Cesium.defined(_this.dialog.dsw)) {
                                _this.dialog.dsw = _this.dialogFunc.dsw(jsonMessage);
                            } else {
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
        this.map.createCollection("MARKER", "Marker");
        this.map.createCollection("EXTRA", "Draw");

        this.favorite = new JsonByFolder("favorite", this.map.collection("KMILSYMBOL"));

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
    drawList() {
        return this.drawModel.getHandlerList();
    }
    drawObject(name) {
        return this.drawModel.getHandler(name);
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

        if (sectionView) {
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
    drawRad(lon, lat, result, rad) {
        let transparent = 0.6;
        let color = Cesium.Color.LIME.withAlpha(transparent);
        if (result == "1L") { color = Cesium.Color.LIME.withAlpha(transparent); } else if (result == "2L") { color = Cesium.Color.AQUAMARINE.withAlpha(transparent); } else if (result == "3L") { color = Cesium.Color.AQUA.withAlpha(transparent); } else if (result == "4L") { color = Cesium.Color.MEDIUMPURPLE.withAlpha(transparent); } else if (result == "5L") { color = Cesium.Color.FUCHSIA.withAlpha(transparent); } else if (result == "5H") { color = Cesium.Color.CRIMSON.withAlpha(transparent); }
        let col = this.map.collection("EXTRA");
        if (col) {
            if (rad > 0) {

                col.add(1, {
                    position: CTX.d2c(CTX.degree(lon, lat, 0)),
                    ellipse: {
                        semiMinorAxis: rad,
                        semiMajorAxis: rad,
                        //hierarchy: positionData,
                        fill: true,
                        outline: true,
                        outlineColor: Cesium.Color.WHITE,
                        outlineWidth: 1,
                        material: new Cesium.ColorMaterialProperty(color),
                        //extrudedHeight: 100,
                        heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
                    }
                });
                /*
                let distance = rad;
                col.add(1, {
                    position: CTX.d2c(CTX.degree(lon, lat, 0)),
                    ellipsoid: {
                        radii: new Cesium.Cartesian3(distance, distance, distance),
                        outline: true,
                        outlineColor: Cesium.Color.WHITE,
                        material: new Cesium.ColorMaterialProperty(color),
                        heightReference: Cesium.HeightReference.NONE
                    }
                });*/
            }
        }
    }
    popupTarget(tid) {
        if (targetRefs && targetRefs.data) {
            let _this = this;
            let type = 1;
            let dlgkey = "waa" + type;
            let jsonMessage = Object.assign({}, targetRefs);
            jsonMessage.data = jsonMessage.data.filter((d) => { return d.t_id == tid ? true : false; });
            if (!Cesium.defined(_this.dialog[dlgkey])) {
                _this.dialog[dlgkey] = _this.dialogFunc[dlgkey](jsonMessage);
            } else {
                let dlg = _this.dialog[dlgkey];
                dlg.set(jsonMessage);
                dlg.front();
            }
        }
    }
    popupTargetAlign(tid) {
        if (targetAlignRefs && targetAlignRefs.data) {
            let _this = this;
            let type = 1;
            let dlgkey = "waa5";
            let jsonMessage = Object.assign({}, targetAlignRefs);
            jsonMessage.data = jsonMessage.data.filter((d) => { return d.t_id == tid ? true : false; });
            if (!Cesium.defined(_this.dialog[dlgkey])) {
                _this.dialog[dlgkey] = _this.dialogFunc[dlgkey](jsonMessage);
            } else {
                let dlg = _this.dialog[dlgkey];
                dlg.set(jsonMessage);
                dlg.front();
            }
        }
    }
    reqUnknown(token, longitude, latitude) {
        let msg = {
            cmd: "REQ_TIA",
            token: token,
            org_image: "D:\\mapx\\ccai\\tia\\org_images\\47.jpg",
            longitude: longitude,
            latitude: latitude
        };
        this.websocket.send('TIA.HANDLER', msg);
    }
    addEntity(col, longitude, latitude, sic, callback, bfly) {
        let _this = this;
        if (col) {
            col.terrianFromDegrees([{
                degree: {
                    longitude: longitude,
                    latitude: latitude
                },
                sic: sic
            }], function(d, collection) {
                d.size = 30;
                let entity = collection.add(CTX.degree(d.degree.longitude, d.degree.latitude, d.degree.height), d);
                if (entity) {
                    if (callback) {
                        callback(entity);
                    }
                    if (bfly && bfly == true) {
                        _this.map.oliveCamera.flyOverEntity(collection, entity.id);
                    }
                }
            });
        }
    }
    parseEN(s) {
        if (s) {
            let nidx = s.indexOf("N");
            let eidx = s.indexOf("E");
            if (nidx > 0 && eidx > 0) {
                return {
                    longitude: parseFloat(s.substr(0, eidx)),
                    latitude: parseFloat(s.substr(eidx + 1, nidx - eidx - 1))
                };
            }
        }
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