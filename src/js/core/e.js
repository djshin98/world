function elements(heles) {
    this.elements = heles;
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
        this.elements.forEach(ele => {
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
    this.style = function(name, value) {
        this.elements.forEach(ele => {
            ele.style = ele.style + ";" + name + ":" + value;
        })
        return this;
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
                        eval(x.textContent);
                    }
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

global.$$ = $$;
module.exports = { $$: $$ };