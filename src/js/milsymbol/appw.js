/* eslint-disable */

var weather = require("./mil_weather");

var codeTypes = [
    { code: "W", desc: "W:기상 및 해양부호", standard: weather }
]

function makeSIDCSelect(id, field, obj) {
    let a = document.getElementById(id);
    let txt = "";
    obj.forEach(d => {
        txt += '<option value="' + d.code + '">' + d.desc + '</option>';
    });
    a.innerHTML = txt;
    document.getElementById(id).onchange = (e) => {
        let val = document.getElementById(id).value;
        let ele = document.getElementById("symbolCode");
        let sidc = new SIDC(ele.value);
        sidc.codeType = global.selectedCodeType;
        sidc[field] = val;
        ele.value = sidc.toCode();
        symbolTest.try();
    }
}

global.changeModifier = function(code, type, pos, fix, graphic) {
        let ele = document.getElementById("symbolCode");
        let val = ele.value;
        let sidc = new SIDC(val);
        sidc.codeType = type;
        if (type != '' && type != '*' && type != '-') document.getElementById("codetype").value = sidc.codeType;
        sidc.pos = pos;
        if (pos != '' && pos != '*' && pos != '-') {
            document.getElementById("pos").value = sidc.pos;
        } else {
            sidc.pos = document.getElementById("pos").value;
        }
        sidc.fix = fix;
        if (fix != '' && fix != '***' && fix != '---') {
            document.getElementById("fix").value = sidc.fix;
        } else {
            sidc.fix = document.getElementById("fix").value;
        }
        sidc.graphic = graphic;
        if (graphic != '' && graphic != '*' && graphic != '-') {
            document.getElementById("graphic").value = sidc.graphic;
        } else {
            sidc.graphic = document.getElementById("graphic").value;
        }
        sidc.modifier = code;
        ele.value = sidc.toCode();
        symbolTest.try();
    }
    //{ id: "1.6.4", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "B-----", desc_kor: "특수작전지원부대", desc_eng: "Sof,unit,support" },
function tooltipModifier(d) {
    return d.type + d.pos + d.fix + d.graphic;
}

function _makeModifierTree(id, arr) {
    let str = '<ul class="tree-wrapper">';
    arr.forEach(d => {
        let param = '\'' + d.modifier + '\',\'' + d.type + '\',\'' + d.pos + '\',\'' + d.fix + '\',\'' + d.graphic + '\'';
        if (d.children && d.children.length > 0) {
            str += '<li ><span class="caret"><div class="tooltip" onclick="changeModifier(' + param + ')">' + d.desc_kor + '<span class="tooltiptext">' + tooltipModifier(d) + '</span></div></span>';
            str += '<ul class="nested">';
            str += _makeModifierTree(id, d.children);
            str += '</ul>';
            str += '</li>';
        } else {
            str += '<li ><div class="tooltip" onclick="changeModifier(' + param + ')">' + d.desc_kor + '<span class="tooltiptext">' + tooltipModifier(d) + '</span></div></li>';
        }
    });
    str += "</ul>";
    return str;
}

function makeModifierTree(id, arr) {

    document.getElementById(id).innerHTML = _makeModifierTree(id, arr);
}

class CodeType {
    constructor(opt) {
        this.activeType;
        this.init(opt.id);
    }
    init(id) {
        let ele = document.querySelector("#" + id);
        let str;
        codeTypes.forEach(d => {
            str += '<option value="' + d.code + '">' + d.desc + '</option>';
        });
        ele.innerHTML = str;
        ele.onchange = function() {
            let codeType = codeTypes.find(d => { return d.code == ele.value ? true : false; });
            if (codeType) {
                makeSIDCSelect("pos", "pos", codeType.standard.pos);
                makeSIDCSelect("fix", "fix", codeType.standard.fix);
                makeSIDCSelect("graphic", "graphic", codeType.standard.graphic);
                makeModifierTree("treeModifier", codeType.standard.identifier);

                var toggler = document.getElementsByClassName("caret");
                Array.from(toggler).forEach((d) => {
                    d.addEventListener("click", function() {
                        this.parentElement.querySelector(".nested").classList.toggle("active");
                        this.classList.toggle("caret-down");
                    });
                });

                global.selectedCodeType = codeType.code;
            }
        };
        ele.onchange();
    }
}
class SIDC {
    constructor(sidc) {
        this.extra = "";
        if (!sidc || sidc.length == 0) { sidc = "---------------"; } else if (sidc.length < 15) {
            sidc += "-".repeat(15 - sidc.length);
        } else if (sidc.length > 15) {
            this.extra = sidc.substring(15);
            sidc = sidc.substring(0, 15);
        }
        this.codeType = sidc[0];
        this.pos = sidc[1];
        this.fix = sidc.substring(2, 4);
        this.modifier = sidc.substring(4, 10); //6
        this.graphic = sidc.substring(10, 13); //2
        this.last = "--";
    }
    toCode() {
        return this.codeType + this.pos + this.fix + this.modifier + this.graphic + this.last;
    }
}

class ViewModelElement {
    constructor(options) {
        this.options = Object.assign({}, options);
        let ele = document.querySelector("#" + this.options.id);

        ele.onchange = symbolTest.try;
        if (this.options.type == "input") {
            ele.onkeyup = symbolTest.try;
        }
    }
    dataKey() {
        return this.options.dataKey;
    }
    val(v) {
        if (v) {
            let ele = document.querySelector("#" + this.options.id);
            ele.value = v;
        } else {
            let val = undefined;
            let ele = document.querySelector("#" + this.options.id);
            if (["text", "string"].indexOf(this.options.dataType) >= 0) {
                val = ele.value;
            } else if (["bool", "boolean"].indexOf(this.options.dataType) >= 0) {
                if (ele.value) {
                    let bv = ele.value.toLowerCase();
                    if (bv == "true") val = true;
                    if (bv == "false") val = false;
                }

            } else if (["number"].indexOf(this.options.dataType) >= 0) {
                val = parseFloat(ele.value);
                if (isNaN(val)) val = undefined;
            }

            if (val == undefined && this.options.dataDefault != undefined) {

                return this.options.dataDefault;
            } else {
                if (this.options.dataUndefined && this.options.dataUndefined == val) {
                    return undefined;
                }
                return val;
            }
        }
    }
}
var symbolTest = {
    viewModels: [],
    create: function() {
        var sel = this.viewModels.filter(d => { let v = d.val(); return v != undefined ? true : false; });
        var option = sel.reduce((prev, curr) => { prev[curr.dataKey()] = curr.val(); return prev }, {});
        if (option.sic && option.sic.length > 0) {
            var symbol = new ms.Symbol(option.sic, option);

            option.code = symbol.toDataURL();
            return symbolTest.template(option.code);
        }
    },
    template: function(result) {
        return '<img class="symbol-sm" src="' + result + '"/>';
    },
    try: function() {
        let output = symbolTest.create();
        if (output) {
            let div = document.querySelector("#symbolResult");
            div.innerHTML = output;
        }
    }
};


window.onload = function() {
    symbolTest.viewModels.push(new ViewModelElement({ dataKey: "size", id: "symbolSize", type: "input", dataType: "number", dataDefault: 50 }));
    symbolTest.viewModels.push(new ViewModelElement({ dataKey: "sic", id: "symbolCode", type: "input", dataType: "text" }));
    symbolTest.viewModels.push(new ViewModelElement({ dataKey: "uniqueDesignation", id: "symbolLabel", type: "input", dataType: "text" }));
    symbolTest.viewModels.push(new ViewModelElement({ dataKey: "fill", id: "symbolFill", type: "select", dataType: "bool" }));
    symbolTest.viewModels.push(new ViewModelElement({ dataKey: "frame", id: "symbolFrame", type: "select", dataType: "bool" }));
    symbolTest.viewModels.push(new ViewModelElement({ dataKey: "monoColor", id: "symbolMonoColor", type: "select", dataType: "text", dataUndefined: "none" }));
    symbolTest.viewModels.push(new ViewModelElement({ dataKey: "icon", id: "symbolIcon", type: "select", dataType: "bool" }));

    global.selectedCodeTypeObj = new CodeType({ id: "codetype" });




}