'use strict';

function elements(heles) {
    this.elements = heles;
    this.value = function(v) {
        if (v) {
            this.elements.forEach(ele => {
                ele.value = v;
            });
        } else {
            let l = [];
            this.elements.forEach(ele => {
                l.push(ele.value);
            });
            return l;
        }
        return this;
    }
    this.length = function() {
        return this.elements.length;
    }
    this.on = function(event, callback, savedCallback) {
        this.elements.forEach(ele => {
            !callback || ele.addEventListener(event, callback);
            !savedCallback || savedCallback(callback);
        });
        return this;
    }
    this.off = function(event, callback) {
        if (event && callback) {
            this.elements.forEach(ele => {
                !callback || ele.removeEventListener(event, callback);
            });
        } else {
            function recreateNode(el, withChildren) {
                if (withChildren) {
                    let newEl = el.cloneNode(true);
                    el.parentNode.replaceChild(el.cloneNode(true), el);
                    return newEl;
                } else {
                    let newEl = el.cloneNode(false);
                    while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
                    el.parentNode.replaceChild(newEl, el);
                    return newEl;
                }
            }
            let l = [];
            this.elements.forEach(ele => {
                !callback || l.push(recreateNode(ele, true));
            });
            return new elements(l);
        }
        return this;
    }
    this.get = function(i) {
        if (this.elements && i >= 0 && i < this.elements.length) {
            return new elements([this.elements[i]]);
        }
        return new elements([]);
    }
    this.prev = function() {
        let l = [];
        this.elements.forEach(ele => {
            if (ele.previousElementSibling) {
                l.push(ele.previousElementSibling);
            }
        });
        return new elements(l);
    }
    this.next = function() {
        let l = [];
        this.elements.forEach(ele => {
            if (ele.nextElementSibling) {
                l.push(ele.nextElementSibling);
            }
        });
        return new elements(l);
    }
    this.select = function(s) {
        let l = [];
        this.elements.forEach(ele => {
            let a = ele.querySelectorAll(s);
            if (a instanceof NodeList) {
                a.forEach(i => {
                    l.push(i);
                });
            } else if (a instanceof HTMLElement) {
                l.push(a);
            }
        })
        return new elements(l);
    }
    this.pselect = function(s) {
        let l = [];
        this.elements.map(ele => {
            let parent = ele.parentElement;
            while (parent) {
                if (parent.matches(s) === true) {
                    if (l.every((e) => {
                            return (e != parent) ? true : false;
                        })) {
                        l.push(parent);
                    }
                }
                parent = parent.parentElement;
            }
        })
        return new elements(l);
    }
    this.parent = function() {
        let l = [];
        this.elements.map(ele => {
            let parent = ele.parentElement;
            if (parent) {
                if (l.every((e) => {
                        return (e != parent) ? true : false;
                    })) {
                    l.push(parent);
                }
            }
        })
        return new elements(l);
    }
    this.children = function() {
        let l = [];
        this.elements.forEach(ele => {
            let children = ele.children;
            if (children && children.length > 0) {
                for (let i = 0; i < children.length; i++) {
                    l.push(children[i]);
                }
            }
        })
        return new elements(l);
    }
    this.destroy = function() {
        this.elements.forEach(ele => {
            ele = null;
        });
        this.elements = [];
    }
    this._styleList = function(ele, key, value) {
        let styles = [];
        return ele.getAttribute("style").split(";").filter(seg => {
            let kv = seg.split(":");
            if (kv.length == 2) {
                if (key && key == kv[0]) {
                    if (value && value.length > 0) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return true;
                }
            }
            return false;
        }).map(seg => {
            let kv = seg.split(":");
            if (key && key == kv[0]) {
                return [kv[0], value];
            } else {
                return [kv[0], kv[1]];
            }
        });
    }
    this.style = function(name, value, callback) {
        if (Q.isValid(value)) {
            this.elements.forEach(ele => {
                let styles = [];
                let bfind = false;
                let str = ele.getAttribute("style");
                if (Q.isValid(str)) {
                    Q.splitsByPair(str, ";", ":", (key, v) => {
                        if (key == name) {
                            styles.push(key + ":" + value);
                            bfind = true;
                        } else {
                            styles.push(key + ":" + v);
                        }
                    });
                }
                if (!bfind) {
                    styles.push(name + ":" + value);
                }
                ele.style = styles.join(";");

                if (callback) {
                    let v = callback(ele, name, value);
                    if (v) ele.style(name, v);
                }
            });
        } else {
            let list = [];
            this.elements.forEach(ele => {
                let style = ele.getAttribute("style");
                if (Q.isValid(style)) {
                    if (!style.split(";").map(v => { return v.trim(); }).some(seg => {
                            let kv = seg.split(":");
                            if (kv[0].trim() == name && kv.length == 2) {
                                list.push(kv[1].trim());
                                return true;
                            }
                            return false;
                        })) { list.push(""); }
                } else {
                    list.push("");
                }
                //list.push(ele.getAttribute("style"));
            });
            return list;
        }

        return this;
    };

    this.width = function(value, callback) {
        return this.style("width", value ? (value + "px") : undefined, callback);
    }

    this.height = function(value, callback) {
        return this.style("height", value ? (value + "px") : undefined, callback);
    }

    this.innerWidth = function() {
        let a = [];
        this.elements.forEach(ele => {
            a.push(ele.clientWidth);
        });
        return a;
    }

    this.innerHeight = function() {
        let a = [];
        this.elements.forEach(ele => {
            a.push(ele.clientHeight);
        });
        return a;
    }

    this.outerWidth = function() {
        let b = [];
        this.elements.forEach(ele => {
            b.push(ele.offsetWidth);
        });
        return b;
    }

    this.outerHeight = function() {
        let a = [];
        this.elements.forEach(ele => {
            a.push(ele.offsetHeight);
        });
        return a;
    }

    this.hide = function() {
        return this.style("display", "none");
    };

    this.show = function() {
        return this.style("display", "");
    };

    this.isVisible = function() {
        let ret = this.style("display");
        if (Q.isValid(ret) && ret.length > 0) {
            return ret.some(d => {
                return (d === "") ? true : false;
            });
        }
        return false;
    };

    this.hasClass = function() {
        let l = [];
        this.elements.forEach(ele => {
            let has = false;
            ele.classList.forEach(c => {
                if (c == cls) {
                    has = true;
                }
            });
            if (has) {
                l.push(ele);
            }
        });
        return new elements(l);
    }
    this.addClass = function(cls) {
        this.elements.forEach(ele => {
            let newClassList = [];
            ele.classList.forEach(c => {
                if (c != cls) {
                    newClassList.push(c);
                }
            });
            newClassList.push(cls);
            ele.setAttribute("class", newClassList.reduce((prev, curr) => {
                return prev + " " + curr;
            }, "").trim());
        });
        return this;
    };
    this.removeClass = function(cls) {
        this.elements.forEach(ele => {
            let newClassList = [];
            ele.classList.forEach(c => {
                if (c != cls) {
                    newClassList.push(c);
                }
            });
            ele.setAttribute("class", newClassList.reduce((prev, curr) => {
                return prev + " " + curr;
            }, "").trim());
        });
        return this;
    };
    this.id = function(sid) {
        if (sid) {
            this.elements.some(ele => {
                ele.setAttribute("id", sid);
                return true;
            });
            return this;
        } else {
            let id = "";
            this.elements.some(ele => {
                id = ele.getAttribute("id");
                return true;
            });
            return id;
        }
    };
    this.attr = function(name, val, callback) {
        !name || this.elements.forEach(ele => {
            !val || ele.setAttribute(name, val);
            if (callback) {
                let v = callback(ele, name, ele.getAttribute(name));
                if (v) ele.setAttribute(name, v);
            }
        });
        return this;
    }
    this.data = function(name, val, callback) {
        !name || this.elements.forEach(ele => {
            !val || ele.setAttribute("data-" + name, val);
            if (callback) {
                let v = callback(ele, name, ele.getAttribute("data-" + name));
                if (v) ele.setAttribute("data-" + name, v);
            }
        });
        return this;
    }
    this.removeAttr = function(name) {
        this.elements.forEach(ele => {
            ele.removeAttribute(name);
        });
        return this;
    }
    this.remove = function() {
        this.elements.forEach(ele => {
            ele.remove();
        });
        return this;
    }
    this.text = function(t) {
        !!t || (t = "");
        this.elements.forEach((ele, i) => {
            if (typeof(t) == "function") {
                let v = t(ele, i, ele.innerText);
                if (v) {
                    ele.innerText = v;
                }
            } else {
                ele.innerText = t;
            }
        });
        return this;
    }
    this.add = function(a, callback) {
        if (typeof(a) == "string") {
            this.add(this.h2e(a), callback);

        } else if (typeof(a) == "object") {
            if (a instanceof NodeList) {
                a.forEach(i => {
                    this.add(i, callback);
                });
            } else if (a instanceof HTMLElement) {
                this.elements.forEach(ele => {
                    let x = a.cloneNode(true);
                    !callback || callback(ele, x);
                    if (x.tagName.toUpperCase() === "SCRIPT") {
                        x.textContent = x.textContent.replace(/["]/g, "\"");
                        window.eval(x.textContent.trim());
                    }
                    /*else if (x.tagName.toUpperCase() === "STYLE") {
                                           x.textContent = x.textContent.replace(/["]/g, "\"");
                                           window.eval(x.textContent.trim());
                                       }*/
                });
            }
        }
        return this;
    }
    this.append = function(a) {
        return this.add(a, function(ele, addEle) {
            ele.append(addEle);
        });
        return this;
    }
    this.prepend = function(a) {
        return this.add(a, function(ele, addEle) {
            ele.prepend(addEle);
        });
        return this;
    }
    this.empty = function() {
        this.elements.forEach(ele => {
            ele.innerHTML = "";
        });
        return this;
    }
    this.html = function(a) {
        return this.empty().append(a);
    }
    this.h2e = function(html) {
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    }
}

function $$(a) {
    if (typeof(a) == "string") {
        return $$(document.querySelectorAll(a));
    } else if (typeof(a) == "object") {
        if (a instanceof NodeList) {
            let l = [];
            a.forEach(i => {
                l.push(i);
            });
            return new elements(l);
        } else if (a instanceof HTMLElement) {
            return new elements([a]);
        }
    }
}

class Q {
    static isValid(a) { return ((typeof(a) == "undefined") || (a == null)) ? false : true; }

    static isFunction(a) { return (typeof(a) == "function") ? true : false; }

    static isArray(a) { return (Q.isValid(a) && a instanceof Array) ? true : false; }

    static splits(a, div, callback) {
        a.split(div).map(t => { return t.trim(); }).filter(t => { return t.length > 0 ? true : false; }).forEach((t, i) => { callback(t, i); });
    }
    static splitsByPair(a, div, pairDiv, callback) {
        if (Q.isValid(callback)) {
            Q.splits(a, div, (seg, i) => {
                let kv = seg.split(pairDiv).map(t => { return t.trim(); });
                if (kv.length == 2) {
                    callback(kv[0], kv[1]);
                }
            });
        }
    }
    static keys(a, callback) {
        if (Q.isValid(a) && Q.isValid(callback)) {
            Object.keys(a).forEach(key => {
                callback(key, a[key]);
            });
        }
    }
    static findByKey(a, callback) {
        if (Q.isValid(a) && Q.isValid(callback)) {
            let key = Object.keys(a).find(key => {
                return callback(key, a[key]);
            });
            if (Q.isValid(key)) {
                return a[key];
            }
        }
    }
}
global.$$ = $$;
global.Q = Q;
module.exports = { $$: $$, Q: Q };