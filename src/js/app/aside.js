const { get } = require("../util/comm");
const { OliveAttributes } = require("../ui/olive-attributes");
const { Eventable } = require("../core/eventable");
class Aside {
    constructor(app, options) {
        this.app = app;
        this.options = Object.assign({}, options);

        document.getElementById(this.options.handle.id).addEventListener("click", () => {
            this.toggleView();
        });

        this.attributes = new OliveAttributes({ id: this.options.id, caption: "제목" });
        /*
                let test = {
                    General: [
                        { key: "Target Platform", value: "WindowsWindowsWindowsWindowsWindows" },
                        { key: "Configuration Type", value: "Application(.exe)" }
                    ],
                    "Project Defaults": [
                        { key: "Target Platform", value: "WindowsWindowsWindowsWindowsWindows" }
                    ]
                };
                this.attributes.set(test);
        */
        this.attributeEvent = Eventable.listenEventAnywhere("attributes", (v) => {
            if (v) {
                this.setAttributes(v);
            } else {
                this.setAttributes({});
            }
        });

        this.showView();
        this.load();
    }
    setAttributes(attrs) {
        if (this.attributes) {
            this.attributes.set(attrs);
        }
    }
    load() {
        var _this = this;
        get({
            url: "aside/first.html",
            success: function(status, statusText, data) {
                document.getElementById(_this.options.id).innerHTML = data;
            }
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
        if (this.attributes) {
            this.attributes.resize(0, 0, w, h);
        }
    }
    showView(bshow) {

        var contents = document.getElementById(this.options.id).innerHTML;

        if (contents == "") {
            bshow = false;
        }

        if (bshow) {
            $("#" + this.options.id).show();
            $("#" + this.options.handle.id + ">i").removeClass("left");
            $("#" + this.options.handle.id + ">i").addClass("right");
            $("#" + this.options.handle.id).addClass("down");

            /*
            if ($(".section-view").is(":visible")) {
                $(".section-view").transition('pulse');
            } else {
                $(".section-view").transition('fade right');
            }*/

        } else {
            $("#" + this.options.id).hide();
            $("#" + this.options.handle.id + ">i").removeClass("right");
            $("#" + this.options.handle.id + ">i").addClass("left");

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