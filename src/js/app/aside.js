class Aside {
    constructor(app, options) {
        this.app = app;
        this.options = Object.assign({}, options);

        let _this = this;
        document.getElementById(this.options.handle.id).addEventListener("click", function() {
            _this.toggleView();
        });

    }
    getWidth() {
        if (this.options.visible) {
            return this.options.width;
        } else {
            return 0;
        }
    }
    getHandleHeight() {
        return this.options.handle.height;
    }
    toggleView() {
        this.showView(!this.options.visible);
    }
    resize(left, top, w, h) {
        var view = document.getElementById(this.options.id);
        var sectionHandle = document.getElementById(this.options.handle.id);
        if (view) {
            view.style.top = top + "px";
            view.style.left = left + "px";
            view.style.width = this.getWidth() + "px";
            view.style.height = h + "px";
        }
        if (sectionHandle) {
            sectionHandle.style.top = 0 + "px";
        }
        /*
        let tw = 80;
        let sv = dom.$(this.path.view)[0];
        sv.style.width = (w - tw) + "px";
        sv.style.height = h + "px";
        let sectionContentHeight = h - 70 - 10;
        dom.$(".section-content").forEach(function(d) {
            d.style.height = sectionContentHeight + "px";
        });
        */
    }
    showView(bshow) {
        if (bshow) {
            $("#" + this.options.id).show();
            /*
            if ($(".section-view").is(":visible")) {
                $(".section-view").transition('pulse');
            } else {
                $(".section-view").transition('fade right');
            }*/

        } else {
            $("#" + this.options.id).hide();
            /*
            if ($(".section-view").is(":visible")) {
                $(".section-view").transition('fade right');

            } else {
                $(".section-view").transition('bounce');
            }*/
        }
        this.options.visible = bshow;
        this.app.onResize();
    }
};

module.exports = {
    Aside: Aside
}