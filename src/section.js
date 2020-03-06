var { dom, get, post } = require("./comm");

var { JusoSearch } = require("./juso_search");

class Section {
    constructor(app, options) {
        this.app = app;
        this.options = Object.assign({}, options);
        this.plugin = [];
        this.path = {
            sidebar: "section>.section-body>div.sidebar",
            view: "section>.section-body>.section-view"
        }
        this.load();
    }
    load() {
        var _this = this;
        this.options.contents.forEach(function(content) {
            get({
                url: content.page,
                success: function(status, statusText, data) {
                    let tv = dom.$(_this.path.sidebar)[0];
                    tv.innerHTML += "<a class='item' onclick='app.section.select(this,\"" + content.name + "\")'>" +
                        "<i class='" + content.icon + " icon'></i>" + content.name + "</a>";
                    let sv = dom.$(_this.path.view)[0];
                    let tabNode = document.createElement("div");
                    tabNode.setAttribute("data-content", content.name);
                    tabNode.classList.add("tab");
                    sv.appendChild(tabNode);

                    _this.options.onload ? (function(parent, html) {
                        let children = _this.options.onload(parent, html);
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

        this.options.oncomplete && this.options.oncomplete();
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
        })();
    }
    resize(w, h) {
        let tw = 80;
        let sv = dom.$(this.path.view)[0];
        sv.style.width = (w - tw) + "px";
        sv.style.height = h + "px";
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
            //$(".section-view").show();
            $(".section-head>a>b").show();

            if ($(".section-view").is(":visible")) {
                $(".section-view").transition('bounce');
            } else {
                $(".section-view").transition('fade right');
            }

        } else {
            //$(".section-view").hide();
            $(".section-head>a>b").hide();

            if ($(".section-view").is(":visible")) {
                $(".section-view").transition('fade right');

            } else {
                $(".section-view").transition('bounce');
            }
        }


        this.app.sectionShowStatus(bshow);
        this.app.onResize();
    }
}
module.exports = {
    Section: Section
}