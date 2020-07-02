if (!Cesium.defined($)) {
    alert('jquery unsupported in OliveDragger');
}
class OliveDragger {
    constructor(app) {
        this.app = app;
    }
    enter(event) {
        event.preventDefault();
        return true;
    }
    over(event) {
        event.preventDefault();
    }
    drag(event) {
        event.dataTransfer.setData("option", event.target.getAttribute("data-option"));
    }
    drop(event) {
        let omap_ = this.app.getOpenedMap();
        if (Q.isValid(omap_)) {
            let mpos = $("#" + omap_.getId()).position();
            let moffset = $("#" + omap_.getId()).offset();

            let pos = { x: event.clientX - (mpos.left + moffset.left), y: event.clientY - (mpos.top + moffset.top) };

            var options = JSON.parse(decodeURIComponent(event.dataTransfer.getData("option")));
            if (Cesium.defined(options) && Cesium.defined(options.category)) {
                omap_.add(pos.x, pos.y, options);

            }
        }

    }
}

module.exports = { OliveDragger: OliveDragger };