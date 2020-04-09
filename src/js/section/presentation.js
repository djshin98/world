var { KMilSymbolCollection } = require("../collection/kmilsymbolcollection");
class Presentation {
    constructor() {
        this.onclick;
        this.init();
    }
    test() {
        alert("test");
    }
    init() {
        app.collections["ALLY_PRES"] = new KMilSymbolCollection(app.map);
        app.collections["ENEMY_PRES"] = new KMilSymbolCollection(app.map);
    }
    ShowEnemyUnit() {
        if (app.collections["ENEMY_PRES"].objects.length === 0) {
            let collection = app.getCollection("ENEMY_PRES");
            serverAdapter.get('enemyPre', {}, function(resultdata) {
                var datas = resultdata.enemyPres.reduce(function(prev, curr) {
                    var cartesian = Cesium.Cartesian3.fromDegrees(curr.geocd_lngt, curr.geocd_ltd, 0);
                    prev.push({ name: curr.unit_name, cartesianVal: cartesian, sic: curr.unit_sbl_cd });
                    return prev
                }, []);
                datas.forEach(function(d) {
                    d.size = 30;
                    collection.add(d.cartesianVal, d);
                });
            });
        } else {
            app.collections["ENEMY_PRES"].removeCollection();
        }

    }
    ShowUnit() {
        if (app.collections["ALLY_PRES"].objects.length === 0) {
            let collection = app.getCollection("ALLY_PRES");
            serverAdapter.get('allyPre', {}, function(resultdata) {
                var datas = resultdata.allyPres.reduce(function(prev, curr) {
                    var cartesian = Cesium.Cartesian3.fromDegrees(curr.geocd_lngt, curr.geocd_ltd, 0);
                    prev.push({ name: curr.unit_name, cartesianVal: cartesian, sic: curr.unit_sbl_cd });
                    return prev
                }, []);
                datas.forEach(function(d) {
                    d.size = 30;
                    collection.add(d.cartesianVal, d);
                });
            });
        } else {
            app.collections["ALLY_PRES"].removeCollection();
        }
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

    }
    ResponseTgtInfoDisplay() {

    }
    ShowTgtListDisplay() {

    }
    ShowWeoponRecomDisplay() {

    }
    ShowColleDamageDisplay() {

    }
    ShowACCollisionDisplay() {

    }
    ShowWeaponAssigmentDisplay() {

    }
}

module.exports = {
    Presentation: Presentation
}