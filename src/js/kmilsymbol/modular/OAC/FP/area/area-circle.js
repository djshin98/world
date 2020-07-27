    const { calc, rect } = require("../../../../graphics/math");

    const akey = {
        "G-F-ACSC": "acsc", // 화력지원지역(FSA)(원형)
    }

    function areaCircle(turnPlane, properties, bcompleted) {
        return turnPlane.reduce((prev, p, i, buffer) => {
            let pVar = properties.variables;
            let a = properties.annotations;
            let ret = [];
            ret = ret.concat(calc.arc(0, Math.PI * 2, pVar.AM));
            let s = p[0];
            let aname = akey[properties.log];
            if (properties.log == "G-F-ACAC") {


            } else if (properties.log == "G-F-ACSC") {

            }

            if (properties.log == "G-F-ACSC") {
                ret.push(calc.annotation(a, "w", { x: 0, y: -(a.w.width) - pVar.AM }));
                ret.push(calc.annotation(a, "w1", { x: a.w.height / 2 + a.w1.height / 2, y: -(a.w1.width / 2) - pVar.AM }));
                ret.push({
                    type: "polyline",
                    geometry: [{ x: 0, y: -(a.w.width / 2) - pVar.AM }, { x: 0, y: -pVar.AM }]
                });


                let t = calc.annotation(a, aname, s);
                ret.push(t);
            }

            return ret;
        }).end();
    }



    module.exports = {
        modular: areaCircle,
        minPointCount: 2,
        maxPointCount: 2,
        properties: {
            annotations: {
                acsc: {
                    value: "FST\n{T}",
                    anchor: { x: 0, y: 0 }
                },
                w: {
                    filter: ["G-F-ACSC"],
                    value: "{W}",
                    anchor: { x: 0, y: 0 }
                },
                w1: {
                    filter: ["G-F-ACSC"],
                    value: "{W1}",
                    anchor: { x: 0, y: 0 }
                }
            },
            variables: {
                N: "이름",
                T: "코드",
                X: 1000,
                X1: 3000,
                H2: 30,
                W: 1000,
                W1: 2000,
                AN: 1000,
                AM1: 2000,
                AM: 1000,
            }
        },

    };