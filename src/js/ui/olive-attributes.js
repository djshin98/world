var { $$ } = require('../core/e');

function _toggleAttributeDisplay(tag) {
    let table = tag.parentElement.parentElement.parentElement;
    let trs = table.getElementsByClassName("pair");
    let target = table.getElementsByClassName("fa");
    Object.keys(trs).forEach(key => {
        let tr = trs[key];
        if (tr.style.display == "none") {
            tr.style.display = "";
            target[0].className = "fa fa-arrow-circle-right";
        } else {
            tr.style.display = "none";
            //target.className = "fa fa-arrow-circle-right"
            target[0].className = "fa fa-arrow-circle-down";
        }
    });

}


global.toggleAttributeDisplay = _toggleAttributeDisplay;
class OliveAttributes {
    constructor(options) {
        //this.map = map;
        this.options = Object.assign({}, options);
        //let _this = this;
        //this.selectedEvent = this.map.oliveCursor.listenEvent("selected", (v) => {
        //    _this.set(v);
        //});
    }
    set(attrs) {
        let str = "<div><p>" + this.options.caption + "</p>";
        Object.keys(attrs).forEach(key => {
            str += '<table><tr><th colspan="2" onclick="toggleAttributeDisplay(this);" ><i class="fa fa-arrow-circle-right" aria-hidden="true"></i>' + key + '</th></tr>';
            attrs[key].forEach(pair => {
                str += '<tr class="pair" ><td class="key">' + pair.key + '</td><td class="value">' + pair.value + '</td></tr>';
            });
            str += '</table>';
        });
        str += "<div>";
        document.getElementById(this.options.id).innerHTML = str;
    }
    resize(x, y, widht, height) {

    }
}

module.exports = { OliveAttributes: OliveAttributes };