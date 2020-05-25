var { dom, get, post } = require("../util/comm");

var { JusoSearch } = require("../section/juso_search");

class Section {
    constructor(app, opt) {
        this.app = app;
        this.options = Object.assign({}, opt.options);
        this.onload = opt.onload;
        this.oncomplete = opt.oncomplete;
        this.plugin = [];
        this.path = {
            sidebar: "section>.section-body>div.sidebar",
            view: "section>.section-body>.section-view"
        }
        if (this.options.handle) {
            if (this.options.handle.id) {
                let _this = this;
                document.getElementById(this.options.handle.id).onclick = function(e) {
                    _this.toggleView();
                };
            }
        }
        this.load();
    }
    getWidth() {
        if (this.options.visible) {
            if (this.options.view.visible) {
                return this.options.width;
            }
            return this.options.width - this.options.view.width;
        } else {
            return 0;
        }
    }
    getHandleHeight() {
        return this.options.handle.height;
    }
    load() {
        var _this = this;
        this.options.contents.forEach(function(content) {
            get({
                url: content.page,
                success: function(status, statusText, data) {
                    console.log("loading a section page :" + content.page);
                    let tv = dom.$(_this.path.sidebar)[0];
                    tv.innerHTML += "<a class='item' onclick='app.section.select(this,\"" + content.name + "\")'>" +
                        "<i class='" + content.icon + " icon'></i>" + content.name + "</a>";
                    let sv = dom.$(_this.path.view)[0];
                    let tabNode = document.createElement("div");
                    tabNode.setAttribute("data-content", content.name);
                    tabNode.classList.add("tab");
                    sv.appendChild(tabNode);

                    _this.onload ? (function(parent, html) {
                        let children = _this.onload.call(_this.app, parent, html);
                    })(tabNode, data) : (tabNode.innerHTML = data);
                    content.complete = true;
                    _this.options.contents.every((d) => { return d.complete ? true : false; }) && _this._loadComplete();
                }
            });
        });
    }
    _loadComplete() {
        let _this = this;
        !(this.options.contents.length > 0) || (i => {
            this.app.section.select(dom.$(_this.path.sidebar + ">a:nth-child(" + (i + 1) + ")")[0], this.options.contents[i].name);

            dom.$(_this.path.sidebar + ">a").forEach(d => { d.classList.remove("active"); });
            dom.$(_this.path.sidebar + ">a:nth-child(" + (i + 1) + ")")[0].classList.add("active");
        })(0);
        this.oncomplete && this.oncomplete.call(this.app);
    }
    select(tag, name) {
        let _this = this;
        let c = this.options.contents.find(function(c) { return name == c.name ? true : false; });
        !c || (function() {
            dom.$(_this.path.sidebar + " a.item").forEach(function(d) { d.classList.remove("active"); });
            tag.classList.add("active");
            dom.$(_this.path.view + ">.tab").forEach(function(d) { d.classList.remove("active"); });
            dom.$(_this.path.view + ">.tab[data-content='" + name + "']")[0].classList.add("active");
            _this.showView(true);

            /*
            let attrs = {
                "tag": [{ tag: name }]
            };

            app.aside.setAttributes(attrs);
            */
        })();
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
    addPlugin(name, options) {
        if (name == "JusoSearch") {
            this.plugin[name] = new JusoSearch(options);
        }
    }
    getPlugin(name) {
        return this.plugin[name];
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
}
module.exports = {
    Section: Section
}