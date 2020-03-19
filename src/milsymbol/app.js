/* eslint-disable */

var {dom} = require("../comm");
var basic = require("./mil_basic");
var emergency = require("./mil_emergency");
var operAct = require("./mil_operAct");
var safe = require("./mil_safe");
var signal = require("./mil_signal");
var weather = require("./mil_weather");

var codeTypes = [
    { code: "S", desc: "S:기본군대부호", standard: basic },
    { code: "G", desc: "G:작전활동부호", standard: operAct },
    { code: "W", desc: "W:기상 및 해양부호", standard: weather },
    { code: "I", desc: "I:신호정보부호", standard: signal },
    { code: "O", desc: "O:안정화작전부호", standard: safe },
    { code: "E", desc: "E:비상관리부호", standard: emergency }
]


    //{ id: "1.6.4", type: "S", affiliation: "*", battlefield: "F", status: "*", modifier: "B-----", desc_kor: "특수작전지원부대", desc_eng: "Sof,unit,support" },
function tooltipModifier(d) {
    return d.type + d.affiliation + d.battlefield + d.status;
}

class ViewModel_KMilSymbol {
    constructor(opt,onchange) {
        this.activeType;
        this.options = Object.assign({},{
            view:{
                CODETYPE:"codetype",
                AFFILIATION:"affiliation",
                BATTLEFIELD:"battlefield",
                STATUS:"status",
                FI:"function-indentifier",
                UNIT:"unit",
                MISSION:"mission",
                SIDC:"sidc",
                RESULT:"sidc-img",
                option : {
                    FILL:"mil-option-fill",
                    FRAME:"mil-option-frame",
                    ICON:"mil-option-icon",
                    SIZE:"mil-option-size",
                    DESC:"mil-option-label"
                }
            }
        },opt);
        this.onchange = onchange;
        this.symbolTest = new SymbolTest(this,this.options.view.RESULT);
        this.init();
    }
    init() {
        let ele = document.querySelector("#" + this.options.view.CODETYPE);

        this.symbolTest.viewModels.push(new ViewModelElement(this, { dataKey: "size", id: this.options.view.option.SIZE, type: "input", dataType: "number", dataDefault: 50 }));
        this.symbolTest.viewModels.push(new ViewModelElement(this, { dataKey: "sic", id: this.options.view.SIDC, type: "input", dataType: "text" }));
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
        var _this = this;
        ele.onchange = function() {
            _this.activeType = codeTypes.find(d => { return d.code == ele.value ? true : false; });
            
            if (_this.activeType) {
                if( _this.activeType.code != "W" ){
                    document.getElementById(_this.options.view.MISSION).hidden = false;
                    document.getElementById(_this.options.view.UNIT).hidden = false;

                    _this.makeSIDCSelect(_this.options.view.AFFILIATION, "affiliation", _this.activeType.standard.affiliation);
                    _this.makeSIDCSelect(_this.options.view.BATTLEFIELD, "battlefield", _this.activeType.standard.battlefield);
                    _this.makeSIDCSelect(_this.options.view.STATUS, "status", _this.activeType.standard.status);
                    _this.makeSIDCSelect(_this.options.view.MISSION, "mission", _this.activeType.standard.mission);
                    _this.makeModifierTree(_this.options.view.FI, _this.activeType.standard.identifier);
                    _this.makeUnitTree(_this.options.view.UNIT, _this.activeType.standard.unit);
                
                    dom.$( ".functionIndentfierClickable").forEach(d=>{
                        d.addEventListener("click",()=>{
                            let id = d.getAttribute("data-id");
                            let idf = _this.findFunctionIdentifier(id);
                            if( idf ){
                                _this.changeModifier( idf.modifier , idf.type, idf.affiliation , idf.battlefield, idf.status );
                            }
                        });
                    });
    
                    dom.$( ".unitClickable").forEach(d=>{
                        d.addEventListener("click",()=>{
                            let id = d.getAttribute("data-id");
                            let idf = _this.findUnit(id);
                            if( idf ){
                                _this.changeMobility( idf.code);
                            }
                        });
                    });
                }else{
                    _this.makeSIDCSelect(_this.options.view.AFFILIATION, "pos", _this.activeType.standard.pos);
                    _this.makeSIDCSelect(_this.options.view.BATTLEFIELD, "fix", _this.activeType.standard.fix);
                    _this.makeSIDCSelect(_this.options.view.STATUS, "graphic", _this.activeType.standard.graphic);
                    _this.makeModifierTree(_this.options.view.FI, _this.activeType.standard.identifier);

                    document.getElementById(_this.options.view.MISSION).hidden = true;
                    document.getElementById(_this.options.view.UNIT).hidden = true;

                    dom.$( ".functionIndentfierClickable").forEach(d=>{
                        d.addEventListener("click",()=>{
                            let id = this.getAttribute("data-id");
                            let idf = _this.findFunctionIdentifier(id);
                            if( idf ){
                                _this.changeModifier( idf.modifier , idf.type, idf.pos , idf.fix, idf.graphic );
                            }
                        });
                    });
                }
                if( _this.onchange ){
                    _this.onchange();
                }
                    
            }
        };
        ele.onchange();
    }
   
    
    _findFunctionIdentifier(root, id){
        let findObj;
        //console.log( this.tab() + " searching " + this.id );
        if( root.id == id ){
            //console.log( this.tab() + id + " : finded to " + this.id );
            findObj= root;
        } else if( id.indexOf(root.id) == 0 && root.children ){
            root.children.some((d)=>{
                findObj = this._findFunctionIdentifier(d,id);
                return findObj ? true : false;
            });
        }
        return findObj;
    }
    findFunctionIdentifier(id){
        let findObj;
        this.activeType.standard.identifier.some(d=>{
            findObj = this._findFunctionIdentifier(d,id);
            return findObj ? true : false;
        })
        return findObj;
    }
    findUnit(code){
        let findObj;
        Object.keys(this.activeType.standard.unit).some(d=>{
            let list = this.activeType.standard.unit[d];
            list.some(v=>{
                if( v.code == code ){
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
        let sidc = new SIDC(ele.value);
        sidc.codeType = this.activeType.code;
        sidc.echelon = code;
        ele.value = sidc.toCode();
        this.symbolTest.try();
    }

    changeModifier(code, type, affiliation, battlefield, status) {
        let ele = document.getElementById(this.options.view.SIDC);
        let val = ele.value;
        let sidc = new SIDC(val);
        sidc.codeType = type;
        if (type != '' && type != '*' && type != '-') document.getElementById(this.options.view.CODETYPE).value = sidc.codeType;
        
        if( this.activeType.code != "W"){
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
        }else{
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
        var _this = this;
        document.getElementById(id).onchange = (e) => {
            let val = document.getElementById(id).value;
            let ele = document.getElementById(_this.options.view.SIDC);
            let sidc = new SIDC(ele.value);
            sidc.codeType = _this.activeType.code;
            sidc[field] = val;
            ele.value = sidc.toCode();
            this.symbolTest.try();
        }
    }     
    _makeModifierTree(id, arr) {
        let str = '';
        var _this = this;
        arr.forEach(d => {
            if (d.children && d.children.length > 0) {
                str += '<li><div class="folder tooltip functionIndentfierClickable" data-id="' + d.id + '">' + d.desc_kor + '<span class="tooltiptext">' + tooltipModifier(d) + '</span></div>';
                str += '<ul>';
                str += _this._makeModifierTree(id, d.children);
                str += '</ul>';
                str += '</li>';
            } else {
                str += '<li><div class="file tooltip functionIndentfierClickable" data-id="' + d.id + '">' + d.desc_kor + '<span class="tooltiptext">' + tooltipModifier(d) + '</span></div></li>';
            }
        });
        return str;
    }

    makeModifierTree(id, arr) {
        document.getElementById(id).innerHTML = this._makeModifierTree(id, arr);
    }

    makeUnitTree(id, arr) {

        let str = '';
        Object.keys(arr).forEach(d => {
            str += '<li><span class="folder">' + d + '</span>';
            str += '<ul>';
            arr[d].forEach(item => {
                str += '<li><span class="file unitClickable" data-id="' + item.code + '" >' + item.desc + '</span></li>';
            });
            str += '</ul>';
            str += '</li>';
        });

        document.getElementById(id).innerHTML = str;
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
        if( this.codeType != "W" ){
            this.affiliation = sidc[1];
            this.battlefield = sidc[2];
            this.status = sidc[3];
            this.modifier = sidc.substring(4, 10); //6
            this.echelon = sidc.substring(10, 12); //2
            this.nation = sidc.substring(12, 14);
            this.mission = sidc[14];
        }else{
            this.pos = sidc[1];
            this.fix = sidc.substring(2, 4);
            this.modifier = sidc.substring(4, 10); //6
            this.graphic = sidc.substring(10, 13); //2
            this.last = "--";
        }
        
    }
    toCode() {
        if( this.codeType != "W" ){
            return this.codeType + this.affiliation + this.battlefield +
                this.status + this.modifier + this.echelon + this.nation + this.mission;
        }else{
            return this.codeType + this.pos + this.fix + this.modifier + this.graphic + this.last;
        }
    }
}

class ViewModelElement {
    constructor(container,options) {
        this.options = Object.assign({}, options);
        let ele = document.querySelector("#" + this.options.id);

        container.call
        ele.addEventListener('change',function(){
            container.symbolTest.try();
        });
        if (this.options.type == "input") {
            ele.addEventListener('keyup',function(){
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
    constructor(container,resId){
        this.container = container;
        this.resultId = resId;
        this.viewModels = [];
    }
    create() {
        var sel = this.viewModels.filter(d => { let v = d.val(); return v != undefined ? true : false; });
        var option = sel.reduce((prev, curr) => { prev[curr.dataKey()] = curr.val(); return prev }, {});
        if (option.sic && option.sic.length > 0) {
            var symbol = new ms.Symbol(option.sic, option);

            option.code = symbol.toDataURL();
            return this.template(option.code);
        }
    }
    template(result) {
        return '<img class="symbol-sm" src="' + result + '"/>';
    }
    try() {
        let output = this.create();
        if (output) {
            let div = document.querySelector("#"+this.resultId);
            div.innerHTML = output;
        }
    }
};

global.ViewModel_KMilSymbol = ViewModel_KMilSymbol;