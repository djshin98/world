var { dom, get, post } = require("./comm");

var { JusoSearch } = require("./juso_search");

class Section {
    constructor(options) {
        this.options = Object.assign({}, options);
        this.plugin = [];
        this.load();
    }
    load() {
        var _this = this;
        this.options.contents.forEach(function(content) {
            get({
                url: content.page,
                success: function(status, statusText, data) {
                    let tv = dom.$("section>div.sidebar")[0];
                    tv.innerHTML += "<a class='item' onclick='section.select(this,\"" + content.name + "\")'>" +
                        "<i class='" + content.icon + " icon'></i>" + content.name + "</a>";
                    let sv = dom.$(".section-view")[0];
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
        !(this.options.contents.length > 0) || (i => {
            section.select(dom.$("section>div.sidebar>a:nth-child(" + (i + 1) + ")")[0], this.options.contents[i].name);
            dom.$("section>div.sidebar>a").forEach(d => { d.classList.remove("active"); });
            dom.$("section>div.sidebar>a:nth-child(" + (i + 1) + ")")[0].classList.add("active");
        })(0);

        this.options.oncomplete && this.options.oncomplete();
    }
    select(tag, name) {
        let c = this.options.contents.find(function(c) { return name == c.name ? true : false; });
        !c || (function() {
            dom.$("section>div.sidebar a.item").forEach(function(d) { d.classList.remove("active"); });
            tag.classList.add("active");
            dom.$("section .section-view>.tab").forEach(function(d) { d.classList.remove("active"); });
            dom.$("section .section-view>.tab[data-content='" + name + "']")[0].classList.add("active");
        })();
    }
    resize(w, h) {
        let tw = 75;
        let sv = dom.$(".section-view")[0];
        sv.style.width = (w - tw) + "px";
        sv.style.height = h + "px";
    }
    addPlugin(name, options) {
        if (name == "JusoSearch") {
            this.plugin[name] = new JusoSearch(options);
        }
    }
}
module.exports = {
    Section: Section
}