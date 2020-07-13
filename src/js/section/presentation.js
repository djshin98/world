var { KMilSymbolCollection } = require("../collection/kmilsymbolcollection");
class Presentation {
    constructor(map) {
        this.onclick;

        this.targetingDialog = [];
        this.WeoponRecomDialog = [];
        this.WeoponAssignDialog = [];

    }
    test() {
        alert("test");
    }
    ShowEnemyUnit() {


    }
    ShowUnit() {

    }
    ShowEnemyOperationLine() {

    }
    ShowUnitOperationLine() {

    }
    ShowUnknownTgt() {

    }
    RequestUnknownTgt() {

    }

    ShowTgtInfo() {
        //ShowTgtInfo()	식별된 표적의 정보를 도시한다.
        var _this = this;
        serverAdapter.get('target', {}, function(resultdata) {
            var resultdata = resultdata;
            _this.targetingDialog.push(new Dialog({
                title: '표적식별',
                url: "dialog/target.html",
                width: "300px",
                onset: function(obj, tag) {
                    var $tbody = $('.targetPro');
                    resultdata.tgt_info.forEach(function(d, i) {
                        if (i < 5) $tbody.append("<tr><td class='thead'>제원" + i + "</td><td class='tdata'>" + d.wp_name + "</td></tr>");
                    });
                }
            }));
        });

    }
    ResponseTgtInfoDisplay() {

    }
    ShowTgtListDisplay() {

    }

    ShowWeoponRecomDisplay() {
        //무장추천결과값을 조회하여 도시한다.
        var _this = this;
        serverAdapter.get('wpRecom', {}, function(resultdata) {
            var resultdata = resultdata;
            _this.targetingDialog.push(new Dialog({
                title: '무장 추천 결과값',
                url: "dialog/weoponRecom.html",
                width: "300px",
                onset: function(obj, tag, data) {
                    var $tbody = $('.weopon');
                    resultdata.wp_recom.forEach(function(d, i) {
                        if (i < 5) $tbody.append("<tr><td>" + d.sequence_id + "</td><td>" + d.unit_name + "</td><td>" + d.wp_name + "</td></tr>");
                    });
                }
            }));
        });
    }
    ShowColleDamageDisplay() {}
    ShowACCollisionDisplay() {

    }
    ShowWeaponAssigmentDisplay() {
        this.WeoponAssignDialog.push(new Dialog({ title: '무장 할당 결과값', url: "dialog/weoponAssign.html", width: "300px" }));
    }

    addData() {
        // 넘어온 데이터 처리가능 대신 dialog가 로딩이 끝난뒤 콜백받아서 추가해줘야 된다 $test 못찾음....
        var $test = $(this.targetingDialog[0].instance.$body);
        $($test[0].childNodes[2]).append("<tr><td class='thead'>제원1</td><td class='tdata'>제원1 값</td></tr>");
    }
}

global.Presentation = Presentation;