function elements(heles) {
    this.elements = heles;
    this.on = function(event, callback) {
        this.elements.forEach(ele => {
            !callback || ele.addEventListener(event, callback);
        });
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
                    l.push(parent);
                }
                parent = parent.parentElement;
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
    this.style = function() {
        return this;
    };
    this.hasClass = function() {};
    this.addClass = function() {
        return this;
    };
    this.removeClass = function() {};
    this.id = function() {
        let id = "";
        this.attr("id", undefined, (ele, name, val) => {
            id = val;
        });
        return id;
    };
    this.attr = function(name, val, callback) {
        !name || this.elements.forEach(ele => {
            !val || ele.setAttribute(name, val);
            !callback || callback(ele, name, ele.getAttribute(name));
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
        this.elements.forEach((ele) => {
            ele.innerText = t;
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
    this.h2e = function(html) {
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    }
}

function e(a) {
    if (typeof(a) == "string") {
        return e(document.querySelectorAll(a));
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

global.e = e;
module.exports = { e: e };