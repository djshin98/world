/* eslint-disable */

const { IxDatabase } = require('../indexeddb/db');
const basic = require("../milsymbol/mil_basic");
const emergency = require("../milsymbol/mil_emergency");
const operAct = require("../milsymbol/mil_operAct");
const safe = require("../milsymbol/mil_safe");
const signal = require("../milsymbol/mil_signal");
const weather = require("../milsymbol/mil_weather");
const { kms } = require("../kmilsymbol/milsymbol");

var codeTypes = [
    { code: "S", desc: "S:기본군대부호", standard: basic },
    { code: "G", desc: "G:작전활동부호", standard: operAct },
    { code: "W", desc: "W:기상 및 해양부호", standard: weather },
    { code: "I", desc: "I:신호정보부호", standard: signal },
    { code: "O", desc: "O:안정화작전부호", standard: safe },
    { code: "E", desc: "E:비상관리부호", standard: emergency }
];


//{ id: "1.6.4", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "B-----", desc_kor: "특수작전지원부대", desc_eng: "Sof,unit,support" },

class ViewModel_KMilSymbol {
    constructor(opt, onchange) {
        this.activeType;
        this.options = Object.assign({}, {
            view: {
                CODETYPE: "codetype",
                AFFILIATION: "affiliation",
                BATTLEFIELD: "battlefield",
                STATUS: "status",
                FI: "function-indentifier",
                UNIT: "unit",
                MISSION: "mission",
                SIDC: "sidc",
                RESULT: "sidc-img",
                option: {
                    FILL: "mil-option-fill",
                    FRAME: "mil-option-frame",
                    ICON: "mil-option-icon",
                    SIZE: "mil-option-size",
                    DESC: "mil-option-label"
                }
            }
        }, opt);
        this.db = new IxDatabase(1);
        this.dataset = {};
        this.onchange = onchange;
        this.symbolTest = new SymbolTest(this, this.options.view.RESULT);
        this.init();
    }
    init() {
        let ele = document.querySelector("#" + this.options.view.CODETYPE);

        this.symbolTest.viewModels.push(new ViewModelElement(this, { dataKey: "size", id: this.options.view.option.SIZE, type: "input", dataType: "number", dataDefault: 30 }));
        this.symbolTest.viewModels.push(new ViewModelElement(this, { dataKey: "SIDC", id: this.options.view.SIDC, type: "input", dataType: "text" }));
        this.symbolTest.viewModels.push(new ViewModelElement(this, { dataKey: "uniqueDesignation", id: this.options.view.option.DESC, type: "input", dataType: "text" }));
        this.symbolTest.viewModels.push(new ViewModelElement(this, { dataKey: "fill", id: this.options.view.option.FILL, type: "select", dataType: "bool" }));
        this.symbolTest.viewModels.push(new ViewModelElement(this, { dataKey: "frame", id: this.options.view.option.FRAME, type: "select", dataType: "bool" }));
        //this.symbolTest.viewModels.push(new ViewModelElement(this, { dataKey: "monoColor", id: this.options.view.option.COLOR, type: "select", dataType: "text", dataUndefined: "none" }));
        this.symbolTest.viewModels.push(new ViewModelElement(this, { dataKey: "icon", id: this.options.view.option.ICON, type: "select", dataType: "bool" }));

        let str;
        codeTypes.forEach(d => {
            str += '<option value="' + d.code + '">' + d.desc + '</option>';
        });
        ele.innerHTML = str;

        ele.onchange = () => {
            document.getElementById(this.options.view.SIDC).value = "";
            this.activeType = codeTypes.find(d => { return d.code == ele.value ? true : false; });

            if (this.activeType) {
                this.db.set(this.options.id, this.options.view.CODETYPE, this.activeType.code);
                if (this.activeType.code != "W") {
                    document.getElementById(this.options.view.MISSION).hidden = false;
                    document.getElementById(this.options.view.UNIT).hidden = false;

                    this.makeSIDCSelect(this.options.view.AFFILIATION, "affiliation", this.activeType.standard.affiliation);
                    this.makeSIDCSelect(this.options.view.BATTLEFIELD, "battlefield", this.activeType.standard.battlefield);
                    this.makeSIDCSelect(this.options.view.STATUS, "status", this.activeType.standard.status);
                    this.makeSIDCSelect(this.options.view.MISSION, "mission", this.activeType.standard.mission);
                    this.makeSIDCTree(this.options.view.FI, "modifier",
                        this.makeModifierTreeJson(this.options.view.FI, this.activeType.standard.identifier),
                        (type, tag, obj) => {
                            if (type == "file") {
                                let id = tag.getAttribute("data-id");
                                let idf = this.findFunctionIdentifier(id);
                                if (idf) {
                                    this.changeModifier(idf.modifier, idf.type, idf.affiliation, idf.battlefield, idf.status);
                                    this.db.set(this.activeType.code + ":" + this.options.view.FI, "modifier", id);
                                }
                            }
                        });
                    this.makeSIDCTree(this.options.view.UNIT, "echelon",
                        this.makeUnitTreeJson(this.options.view.UNIT, this.activeType.standard.unit),
                        (type, tag, obj) => {
                            if (type == "file") {
                                let id = tag.getAttribute("data-id");
                                let idf = this.findUnit(id);
                                if (idf) {
                                    this.changeMobility(idf.code);
                                    this.db.set(this.activeType.code + ":" + this.options.view.UNIT, "echelon", id);
                                }
                            }
                        });
                    //this.dataset[this.options.view.FI] = this.makeModifierTreeJson(this.options.view.FI, this.activeType.standard.identifier);
                    //this.dataset[this.options.view.UNIT] = this.makeUnitTreeJson(this.options.view.UNIT, this.activeType.standard.unit);

                } else {
                    this.makeSIDCSelect(this.options.view.AFFILIATION, "pos", this.activeType.standard.pos);
                    this.makeSIDCSelect(this.options.view.BATTLEFIELD, "fix", this.activeType.standard.fix);
                    this.makeSIDCSelect(this.options.view.STATUS, "graphic", this.activeType.standard.graphic);
                    //this.dataset[this.options.view.FI] = this.makeModifierTreeJson(this.options.view.FI, this.activeType.standard.identifier);
                    this.makeSIDCTree(this.options.view.FI, "modifier",
                        this.makeModifierTreeJson(this.options.view.FI, this.activeType.standard.identifier),
                        (type, tag, obj) => {
                            if (type == "file") {
                                let id = tag.getAttribute("data-id");
                                let idf = this.findFunctionIdentifier(id);
                                if (idf) {
                                    this.changeModifier(idf.modifier, idf.type, idf.pos, idf.fix, idf.graphic);
                                    this.db.set(this.activeType.code + ":" + this.options.view.FI, "modifier", id);
                                }
                            }
                        });
                    document.getElementById(this.options.view.MISSION).hidden = true;
                    document.getElementById(this.options.view.UNIT).hidden = true;

                }
                if (this.onchange) {
                    this.onchange(this);
                }

            }
        };
        this.db.get(this.options.id, this.options.view.CODETYPE, (result) => {
            if (result && result.value) {
                $$("#" + this.options.id + " #" + this.options.view.CODETYPE).value(result.value);
            }
            ele.onchange();
        });

    }
    descriptionFromSIDC(sidc) {
        if (!sidc || sidc.length < 1) {
            return {};
        }
        let code = new SIDC(sidc[0], sidc);
        return code.toDescription();
    }

    _findFunctionIdentifier(root, id) {
        let findObj;
        //console.log( this.tab() + " searching " + this.id );
        if (root.id == id) {
            //console.log( this.tab() + id + " : finded to " + this.id );
            findObj = root;
        } else if (id.indexOf(root.id) == 0 && root.children) {
            root.children.some((d) => {
                findObj = this._findFunctionIdentifier(d, id);
                return findObj ? true : false;
            });
        }
        return findObj;
    }
    findFunctionIdentifier(id) {
        let findObj;
        this.activeType.standard.identifier.some(d => {
            findObj = this._findFunctionIdentifier(d, id);
            return findObj ? true : false;
        })
        return findObj;
    }
    findUnit(code) {
        let findObj;
        Object.keys(this.activeType.standard.unit).some(d => {
            let list = this.activeType.standard.unit[d];
            list.some(v => {
                if (v.code == code) {
                    findObj = v;
                    return true;
                }
                return false;
            });
        });
        return findObj;
    }
    changeMobility(code) {
        let ele = document.getElementById(this.options.view.SIDC);
        let sidc = new SIDC(this.activeType.code, ele.value);
        sidc.codeType = this.activeType.code;
        sidc.echelon = code;
        ele.value = sidc.toCode();
        this.symbolTest.try();
    }

    changeModifier(code, type, affiliation, battlefield, status) {
        let ele = document.getElementById(this.options.view.SIDC);
        let val = ele.value;
        let sidc = new SIDC(this.activeType.code, val);
        sidc.codeType = type;
        if (type != '' && type != '*' && type != '-') document.getElementById(this.options.view.CODETYPE).value = sidc.codeType;

        if (this.activeType.code != "W") {
            sidc.affiliation = affiliation;
            if (affiliation != '' && affiliation != '*' && affiliation != '-') {
                document.getElementById(this.options.view.AFFILIATION).value = sidc.affiliation;
            } else {
                sidc.affiliation = document.getElementById(this.options.view.AFFILIATION).value;
            }
            sidc.battlefield = battlefield;
            if (battlefield != '' && battlefield != '*' && battlefield != '-') {
                document.getElementById(this.options.view.BATTLEFIELD).value = sidc.battlefield;
            } else {
                sidc.battlefield = document.getElementById(this.options.view.BATTLEFIELD).value;
            }
            sidc.status = status;
            if (status != '' && status != '*' && status != '-') {
                document.getElementById(this.options.view.STATUS).value = sidc.status;
            } else {
                sidc.status = document.getElementById(this.options.view.STATUS).value;
            }
        } else {
            sidc.pos = affiliation;
            if (affiliation != '' && affiliation != '*' && affiliation != '-') {
                document.getElementById(this.options.view.AFFILIATION).value = sidc.pos;
            } else {
                sidc.pos = document.getElementById(this.options.view.AFFILIATION).value;
            }
            sidc.fix = battlefield;
            if (battlefield != '' && battlefield != '*' && battlefield != '-') {
                document.getElementById(this.options.view.BATTLEFIELD).value = sidc.fix;
            } else {
                sidc.fix = document.getElementById(this.options.view.BATTLEFIELD).value;
            }
            sidc.graphic = status;
            if (status != '' && status != '*' && status != '-') {
                document.getElementById(this.options.view.STATUS).value = sidc.graphic;
            } else {
                sidc.graphic = document.getElementById(this.options.view.STATUS).value;
            }
        }
        sidc.modifier = code;
        ele.value = sidc.toCode();
        this.symbolTest.try();
    }

    makeSIDCSelect(id, field, obj) {
        let a = document.getElementById(id);
        let txt = "";
        obj.forEach(d => {
            txt += '<option value="' + d.code + '">' + d.desc + '</option>';
        });
        a.innerHTML = txt;
        this.db.get(this.activeType.code + ":" + id, field, (result) => {
            if (result && result.value) {
                $$("#" + this.options.id + " #" + id).value(result.value);
            }
        });
        document.getElementById(id).onchange = (e) => {
            let val = document.getElementById(id).value;
            let ele = document.getElementById(this.options.view.SIDC);
            let sidc = new SIDC(this.activeType.code, ele.value);
            sidc.codeType = this.activeType.code;
            sidc[field] = val;
            ele.value = sidc.toCode();
            this.symbolTest.try();
            this.db.set(this.activeType.code + ":" + id, field, val);
        }
    }
    makeSIDCTree(id, field, dataset, selectCallback) {
        this.db.get(this.activeType.code + ":" + id, field, (result) => {
            let selectedValue;
            if (Q.isValid(result) && Q.isValid(result.value)) {
                selectedValue = result.value;
            }
            new OliveTree("#" + this.options.id + " #" + id, dataset, {
                onSelect: selectCallback,
                selected: selectedValue
            });
        });

    }
    tooltipModifier(d) {
        if (this.activeType.code != "W") {
            return d.type + d.affiliation + d.battlefield + d.status;
        } else {
            return d.type + d.pos + d.fix + d.graphic;
        }
    }
    _makeModifierTreeJson(id, arr) {
        let json = [];
        arr.forEach(d => {
            if (d.children && d.children.length > 0) {
                json.push({
                    name: d.desc_kor,
                    id: d.id,
                    class: "functionIndentfierClickable",
                    children: this._makeModifierTreeJson(id, d.children)
                });
            } else {
                json.push({
                    name: d.desc_kor,
                    id: d.id,
                    class: "functionIndentfierClickable"
                });
            }
        });
        return json;
    }

    makeModifierTreeJson(id, arr) {
        return this._makeModifierTreeJson(id, arr);
    }

    makeUnitTreeJson(id, arr) {

        let json = [];
        Object.keys(arr).forEach(d => {
            let obj = { name: d };
            json.push(obj);
            if (Q.isValid(arr[d]) && arr[d].length > 0) {
                obj.children = arr[d].map(item => {
                    return { name: item.desc, id: item.code };
                });
            }
        });
        return json;
    }

}
class SIDC {
    constructor(codeStyle, sidc) {
        this.codeStyle = codeStyle;
        this.extra = "";
        if (!sidc || sidc.length == 0) { sidc = "---------------"; } else if (sidc.length < 15) {
            sidc += "-".repeat(15 - sidc.length);
        } else if (sidc.length > 15) {
            this.extra = sidc.substring(15);
            sidc = sidc.substring(0, 15);
        }
        this.codeType = sidc[0];
        if (this.codeType != "W") {
            this.affiliation = sidc[1];
            this.battlefield = sidc[2];
            this.status = sidc[3];
            this.modifier = sidc.substring(4, 10); //6
            this.echelon = sidc.substring(10, 12); //2
            this.nation = sidc.substring(12, 14);
            this.mission = sidc[14];
        } else {
            this.pos = sidc[1];
            this.fix = sidc.substring(2, 4);
            this.modifier = sidc.substring(4, 10); //6
            this.graphic = sidc.substring(10, 13); //2
            this.last = "--";
        }

    }
    toCode() {
        if (this.codeStyle != "W") {
            return this.codeType + this.affiliation + this.battlefield +
                this.status + this.modifier + this.echelon + this.nation + this.mission;
        } else {
            return this.codeType + this.pos + this.fix + this.modifier + this.graphic + this.last;
        }
    }
    _getDesc(code, arr) {
        let obj = arr.find(d => { return (code == d.code) ? true : false; });
        if (obj) {
            return obj.desc;
        }
        return "?";
    }
    _getDesc2(code, arr) {
        let obj;
        Object.keys(arr).some(d => {
            if (d == code[0]) {
                obj = arr[d].find(d => { return (code == d.code) ? true : false; });
                if (obj) {
                    return true;
                }
            }
            return false;
        });

        if (obj) {
            return obj.desc;
        }
        return "?";
    }
    _getNodeOnTree(code, tree) {
        let obj;
        tree.some(d => {
            if (d.modifier == code) { obj = d; return true; } else if (d.children) {
                obj = this._getNodeOnTree(code, d.children);
                if (obj) {
                    return true;
                }
            }
            return false;
        });
        return obj;
    }
    _getDescOnTree(code, tree) {
        let obj = this._getNodeOnTree(code, tree);
        if (obj) {
            return obj.desc_kor;
        }
        return "";
    }
    toDescription() {
        let desc = [];
        let item = {};
        let activeType = codeTypes.find(d => { return d.code == this.codeType ? true : false; });
        if (activeType.code != "W") {
            desc.push({ name: "파아구분", key: "affiliation", value: this._getDesc(this.affiliation, activeType.standard.affiliation) });
            desc.push({ name: "전장", key: "battlefield", value: this._getDesc(this.battlefield, activeType.standard.battlefield) });
            desc.push({ name: "상태", key: "status", value: this._getDesc(this.status, activeType.standard.status) });
            desc.push({ name: "기능", key: "modifier", value: this._getDescOnTree(this.modifier, activeType.standard.identifier) });
            desc.push({ name: "부대", key: "echelon", value: this._getDesc2(this.echelon, activeType.standard.unit) });
            desc.push({ name: "국가", key: "nation", value: "" }); //this._getDesc( this.nation , activeType.standard.nation );
            desc.push({ name: "임무", key: "mission", value: this._getDesc(this.mission, activeType.standard.mission) });
        } else {
            desc.push({ name: "위치", key: "pos", value: this._getDesc(this.pos, activeType.standard.pos) });
            desc.push({ name: "상태", key: "fix", value: this._getDesc(this.fix, activeType.standard.fix) });
            desc.push({ name: "형식", key: "modifier", value: this._getDesc(this.modifier, activeType.standard.graphic) });
            desc.push({ name: "기능", key: "graphic", value: this._getDescOnTree(this.graphic, activeType.standard.identifier) });
        }
        return desc;
    }
}

class ViewModelElement {
    constructor(container, options) {
        this.options = Object.assign({}, options);
        let ele = document.querySelector("#" + this.options.id);

        //container.call

        if (this.options.type == "input") {
            ele.addEventListener('keyup', function() {
                container.symbolTest.try();
            });
        } else {
            ele.addEventListener('change', function() {
                container.symbolTest.try();
            });
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
class SymbolTest {
    constructor(container, resId) {
        this.container = container;
        this.resultId = resId;
        this.viewModels = [];
        this.db = new IxDatabase(1);
    }
    create() {
        var sel = this.viewModels.filter(d => { let v = d.val(); return (v != undefined && v != "") ? true : false; });
        var option = sel.reduce((prev, curr) => { prev[curr.dataKey()] = curr.val(); return prev }, {});
        if (option.SIDC && option.SIDC.length > 0) {
            option.SIDC = option.SIDC.trim();

            let m = app.articles.getOpenedMap();
            if (Q.isValid(m)) {
                var graphic = kms.Graphics(option);
                if (!graphic.isIcon()) {
                    m.addGraphics(graphic.modular);
                } else {
                    option.code = graphic.toDataURL();
                    return this.template(option);
                }
            }
        }
    }
    template(option) {
        let imgData = option.code;
        option.category = "KMILSYMBOL";
        option.code = "";
        option.description = this.container.descriptionFromSIDC(option.SIDC);
        return '<img class="symbol-sm" data-option="' + encodeURIComponent(JSON.stringify(option)) + '" ondragstart="app.dragger().drag(event)" src="' + imgData + '"/>';
    }
    try () {
        let output = this.create();
        if (output) {
            let div = document.querySelector("#" + this.resultId);
            div.innerHTML = output;
        }
    }
};

module.exports = { SIDC: SIDC }
global.ViewModel_KMilSymbol = ViewModel_KMilSymbol;