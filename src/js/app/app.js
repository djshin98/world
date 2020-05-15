var targetRefs;
var targetExtras;
var targetAirCollision;
var targetAlignRefs;

function init(callback) {
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
                            _this.addEntity(_this.map.collection("KMILSYMBOL"), data.longitude, data.latitude, { sic: "SPZP----------G" }, (entity) => {
                                obj.setVariable("token", entity.id);
                            }, true);
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

                        _this.map.websocket.send('TIA.HANDLER', msg);
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
                            _this.addEntity(col, data.longitude, data.latitude, { sic: d.sidc },
                                (entity) => {
                                    _this.dialog.det.setVariable("entity", { id: entity.id });
                                }, true
                            );
                        }
                    }
                },
                onclose: function() { _this.dialog.tia = undefined; },
                oninit: function(obj, body) {
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
                width: "750px",
                height: "400px",
                show: true,
                data: data,
                onset: function(obj, body, data) {
                    if (data) {
                        let str = ""; //makeTable(data);

                        if (data.data) {
                            data.data.forEach(row => {
                                if (!Cesium.defined(row.t_id) || row.t_id.length == 0) {
                                    if (row.lon && row.lat) {
                                        _this.addEntity(_this.map.collection("KMILSYMBOL"), parseFloat(row.lon), parseFloat(row.lat), { sic: "SPZP----------G", name: row.t_name, id: row.t_id }, (entity) => {
                                            let ustr = "<tr onclick=\"map.oliveCamera.flyOver(" + row.lon + "," + row.lat + ")\">";
                                            ustr += "<td class='tdata'>" + row.dt + "</td>";
                                            ustr += "<td class='tdata' data-token='" + entity.id + "' onclick=\"app.reqUnknown('" + entity.id + "'," + row.lon + "," + row.lat + ")\" style='background-color:red;'>미확인</td>";
                                            ustr += "<td class='tdata' >" + row.lon + "</td>";
                                            ustr += "<td class='tdata' >" + row.lat + "</td>";
                                            ustr += "<td class='tdata'>" + row.wt + "</td>";
                                            ustr += "<td class='tdata'><button type='button' class='btn btn-warning' data-token='ref' disabled disabled onclick=\"app.popupTarget('" + row.t_id + "');\">무장추천</button></td>";
                                            ustr += "<td class='tdata'><button type='button' class='btn btn-primary' data-token='align' disabled onclick=\"app.popupTargetAlign('" + row.t_id + "');\">무장할당</button></td>";
                                            ustr += "</tr>";
                                            $(body).find("tbody").append(ustr);
                                        }, false);
                                    }
                                } else {
                                    str += "<tr onclick=\"map.oliveCamera.flyOver(" + row.lon + "," + row.lat + ");\">";
                                    str += "<td class='tdata'>" + row.dt + "</td>";
                                    str += "<td class='tdata'>" + row.t_id + "</td>";
                                    str += "<td class='tdata' >" + row.lon + "</td>";
                                    str += "<td class='tdata' >" + row.lat + "</td>";
                                    str += "<td class='tdata'>" + row.wt + "</td>";
                                    str += "<td class='tdata'><button type='button' class='btn btn-warning' data-token='ref' disabled onclick=\"app.popupTarget('" + row.t_id + "');\">무장추천</button></td>";
                                    str += "<td class='tdata'><button type='button' class='btn btn-primary' data-token='align' disabled onclick=\"app.popupTargetAlign('" + row.t_id + "');\">무장할당</button></td>";
                                    str += "</tr>";

                                    if (row.lon && row.lat) {
                                        _this.addEntity(_this.map.collection("KMILSYMBOL"), parseFloat(row.lon), parseFloat(row.lat), { sic: row.code, name: row.t_name, id: row.t_id },
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
                                str += "<td class='tdata' >" + row.unit_name + "</td>";
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

    this.map.websocket.onmessage('TIA.HANDLER', function(jsonMessage) {
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
    });
    this.map.websocket.onmessage('WAA.HANDLER', function(jsonMessage) {
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
                $("button[data-token=ref]").prop('disabled', false);
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
                                    lb: CTX.en(d.lb),
                                    lu: CTX.en(d.lu),
                                    rb: CTX.en(d.rb),
                                    ru: CTX.en(d.ru)
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
                $("button[data-token=align]").prop('disabled', false);
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
    });
    this.map.websocket.onmessage('DSW.HANDLER', function(jsonMessage) {
        if (!Cesium.defined(_this.dialog.dsw)) {
            _this.dialog.dsw = _this.dialogFunc.dsw(jsonMessage);
        } else {
            let dlg = _this.dialog.dsw;
            dlg.set(jsonMessage);
            dlg.front();
        }
    });

    if (callback) {
        callback.apply(this);
    }
}

function drawRad(lon, lat, result, rad) {
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

function popupTarget(tid) {
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

function popupTargetAlign(tid) {
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

function reqUnknown(token, longitude, latitude) {
    let msg = {
        cmd: "REQ_TIA",
        token: token,
        org_image: "D:\\mapx\\ccai\\tia\\org_images\\47.jpg",
        longitude: longitude,
        latitude: latitude
    };
    this.map.websocket.send('TIA.HANDLER', msg);
}

function addEntity(col, longitude, latitude, options, callback, bfly) {
    let _this = this;
    if (col) {
        col.terrianFromDegrees([{
            degree: {
                longitude: longitude,
                latitude: latitude
            },
            sic: options.sic,
            id: options.t_id,
            name: options.t_name
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