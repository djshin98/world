var { dom, get, post } = require("../util/comm");

var { JusoSearch } = require("../section/juso_search");
const { cache } = require("ejs");
const { $$ } = require("../core/e");

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
                document.getElementById(this.options.handle.id).onclick = (e) => {
                    this.toggleView();
                };
            }
        }
        this.loading();
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
    loadPage(content) {
        get({
            url: content.page,
            success: (status, statusText, data) => {
                //console.log("loading a section page :" + content.page);
                let tv = dom.$(this.path.sidebar)[0];
                tv.innerHTML += "<a class='item' onclick='app.section.select(this,\"" + content.name + "\")'>" +
                    "<i class='" + content.icon + " icon'></i>" + content.name + "</a>";
                let sv = dom.$(this.path.view)[0];
                let tabNode = document.createElement("div");
                tabNode.setAttribute("data-content", content.name);
                tabNode.classList.add("tab");
                sv.appendChild(tabNode);
                try {
                    $$(tabNode).append(data);
                } catch (e) {
                    console.error("error loading section page : " + content.page);
                    console.error(e.message);
                }
                /*
                try {
                    this.onload ? ((parent, html) => {
                        let children = this.onload.call(this.app, parent, html);
                    })(tabNode, data) : (tabNode.innerHTML = data);
                } catch (e) {
                    console.error("error loading section page : " + content.page);
                    console.error(e.message);
                }*/

                content.complete = true;
                this.options.contents.every((d) => { return d.complete ? true : false; }) && this._loadComplete();
            }
        });
    }
    loading() {
        this.promiseLoadingPage = this.options.contents.map((content) => {
            return new Promise((resolve, reject) => {
                resolve(content);
            });
        });
    }
    load() {
        this.promiseLoadingPage.forEach(promise => {
            promise.then(page => {
                this.loadPage(page);
            });
        })
    }
    _loadComplete() {
        !(this.options.contents.length > 0) || (i => {
            this.app.section.select(dom.$(this.path.sidebar + ">a:nth-child(" + (i + 1) + ")")[0], this.options.contents[i].name);

            dom.$(this.path.sidebar + ">a").forEach(d => { d.classList.remove("active"); });
            dom.$(this.path.sidebar + ">a:nth-child(" + (i + 1) + ")")[0].classList.add("active");
        })(0);
        this.oncomplete && this.oncomplete.call(this.app);
    }
    select(tag, name) {
        let c = this.options.contents.find((c) => { return name == c.name ? true : false; });
        !c || (() => {
            dom.$(this.path.sidebar + " a.item").forEach(function(d) { d.classList.remove("active"); });
            tag.classList.add("active");
            dom.$(this.path.view + ">.tab").forEach(function(d) { d.classList.remove("active"); });
            dom.$(this.path.view + ">.tab[data-content='" + name + "']")[0].classList.add("active");
            this.showView(true);
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
            //$(".section-head>a>img").attr("src", "img/logo.png");
            $(".section-head>a").html("<img src='img/logo.png' style='width:50px'/> MapX Client 5.0 API");
            if ($(".section-view").is(":visible")) {
                $(".section-view").transition('pulse');
            } else {
                $(".section-view").transition('fade right');
            }

        } else {
            $(".section-head>a>b").hide();
            $(".section-head>a>img").attr("src", "img/logo.png");
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