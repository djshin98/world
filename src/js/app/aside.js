class Aside {
    constructor(app, options) {
        this.app = app;
        this.options = Object.assign({}, options);
    }
    toggleView() {
        this.showView(!this.options.view.visible);
    }
    resize(left, top, w, h) {
        var sectionView = document.getElementById(this.options.id);
        var sectionHandle = document.getElementById(this.options.handle.id);
        if (sectionView) {
            sectionView.style.top = top + "px";
            sectionView.style.width = this.getWidth() + "px";
            sectionView.style.height = h + "px";
        }
        if (sectionHandle) {
            sectionHandle.style.top = ((h / 2) - (this.getHandleHeight() / 2)) + "px";
        }

        let tw = 80;
        let sv = dom.$(this.path.view)[0];
        sv.style.width = (w - tw) + "px";
        sv.style.height = h + "px";
        let sectionContentHeight = h - 70 - 10;
        dom.$(".section-content").forEach(function(d) {
            d.style.height = sectionContentHeight + "px";
        });
    }
    showView(bshow) {
        if (bshow) {
            $(".section-head>a>b").show();
            $(".section-head>a>img").attr("src", "img/logo.png");
            if ($(".section-view").is(":visible")) {
                $(".section-view").transition('pulse');
            } else {
                $(".section-view").transition('fade right');
            }

        } else {
            $(".section-head>a>b").hide();
            $(".section-head>a>img").attr("src", "img/logom.png");
            if ($(".section-view").is(":visible")) {
                $(".section-view").transition('fade right');

            } else {
                $(".section-view").transition('bounce');
            }
        }
        this.options.view.visible = bshow;
        this.app.onResize();
    }
};

module.exports = {
    Aside: Aside
}