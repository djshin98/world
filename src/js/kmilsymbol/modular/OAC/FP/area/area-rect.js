const { calc, rect } = require("../../../../graphics/math");    
const akey = {
        "G-F-ACAR": "b",
        "G-F-ACDR": "c",
        "G-F-ACZR": "d",
        "G-F-AZIR": "e",
        "G-F-AZXR": "f",
        "G-F-AZCR": "g",
        "G-F-AZFR": "h",
        "G-F-ACSR": "i",
        "G-F-AZFR": "j",
        "G-F-AZFR": "k",
    }
    function areaRect(turnPlane, properties, bcompleted) {        
            let a = properties.annotations;
            let aname = akey[properties.log];
                return turnPlane.map((prev, p, i, buffer) => {
                    if (i == 0) {
                        p.push(p[0]);
                        let ret = [];

                        let height =  a[akey].height;
                        let p1 = {x: -height/2, y: 0};
                        let p2 = {x: height/2, y: 0};
                        let p3 = {x: -height/2, y: p[1].y};
                        let p4 = {x: height/2, y: p[1].y};

                        let s = calc.avg(p);

                        let t = calc.annotation(a, aname, s);
                        ret.push(t)

                        ret.push({ 
                            type: "polyline", 
                            geometry: [p1, p2]
                            }, {
                            type: "polyline", 
                            geometry: [p3, p4]
                            }, {
                            type: "polyline", 
                            geometry: [p2, p4]
                            }, {
                            type: "polyline", 
                            geometry: [p1, p3]
                            });
                                
                                return ret;
                            }
                        
                    else if(properties.log == "G-F-ATR") {
                            if (i == 0) {
                                let a = properties.annotations;
                                    p.push(p[0]);
                                        
                                    let height =  a["i"].height;
                                    let p1 = {x: -height/2, y: 0};
                                    let p2 = {x: height/2, y: 0};
                                    let p3 = {x: -height/2, y: p[1].y};
                                    let p4 = {x: height/2, y: p[1].y};
                    
                                    let distance = calc.distance(p[0], p[1]);
                                        
                                        if(distance < 200 && height < 200) {
                                            distance = 200;
                                            height = 200;
                                        }
                    
                                        let s = calc.avg(p);
                    
                                        let ret = [];
                                        let t = calc.annotation(a, "i", s);
                                        ret.push(t)
                                        ret.push({ 
                                            type: "polyline", 
                                            geometry: [p1, p2]
                                        }, {
                                            type: "polyline", 
                                            geometry: [p3, p4]
                                        }, {
                                            type: "polyline", 
                                            geometry: [p2, p4]
                                        }, {
                                            type: "polyline", 
                                            geometry: [p1, p3]
                                        });
                                        
                                        return ret;
                                    }
                                
                                
                                }

                    }).end();
                }

                module.exports = {
                    modular: areaRect,
                    minPointCount: 1,
                    maxPointCount: 2,
                    properties: {
                        annotations: {
                            b: {
                                value: "{N}\nACA \n{T} \nMIN ALT: {X}  \nMIX ALT: {X1} \nGrids : {H2} \nEFF: {W} \n{W1}",
                                anchor: { x: 0, y: 0 }
                            },
                            c: {
                                value: "{N}\nDA \n{T}",
                                anchor: { x: 0, y: 0 }
                            },
                            d: {
                                value: "{N}\nZOR \n{T}",
                                anchor: { x: 0, y: 0 }
                            },
                            e: {
                                value: "{N}\nATI ZONE \n{T}",
                                anchor: { x: 0, y: 0 }
                            },
                            f: {
                                value: "{N}\nCFF ZONE \n{T}",
                                anchor: { x: 0, y: 0 }
                            },
                            g: {
                                value: "{N}\nCENSOR ZONE \n{T}",
                                anchor: { x: 0, y: 0 }
                            },
                            h: {
                                value: "{N}\nCF ZONE \n{T}",
                                anchor: { x: 0, y: 0 }
                            },
                            i: {
                                value: "\n{T}",
                                anchor: { x: 0, y: 0 }
                            },
                            j: {
                                value: "{N}\nFSA \n{T}",
                                anchor: { x: 0, y: 0 }
                            },
                            k: {
                                value: "{N}\nFFA \n{T} \n{W} \n{W1}",
                                anchor: { x: 0, y: 0 }
                            },
                            variables: {
                                N: "이름",
                                T: "코드",
                                X: 1000,
                                X1: 3000,
                                H2: 30,
                                W: 10,
                                W1: 20
                            }
                        }
                    }
                };