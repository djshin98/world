const { Q } = require("../../core/e");

class Graphics {
    constructor(ms) {
        this.graphicCache = {};
        this.graphicModulars = {};
        this.sidcRoot = {};
    }
    ready() {
        Q.keys(this.graphicCache, (key, value) => {
            let list = key.split('');
            let index = list.reverse().findIndex((a) => { return a !== "-" ? true : false });
            list.reverse();
            if (index > 0) {
                list.splice(-index);
            }
            let lastNode = list.reduce((children, c, i) => {
                if (!Q.isValid(children[c])) {
                    children[c] = { children: {} };
                }
                if (i == (list.length - 1)) {
                    return children[c];
                }
                return children[c].children;
            }, this.sidcRoot);
            lastNode.modular = value;
        });
    }
    find(sidc, log) {
        let list = sidc.split('');
        let index = list.reverse().findIndex((a) => { return a !== "-" ? true : false });
        list.reverse();
        if (index > 0) { list.splice(-index); }
        let findNode;
        let node = this.sidcRoot;
        if (list.some((c, i) => {
                if (Q.isValid(node)) {
                    if (Q.isValid(node[c])) {
                        log.push(c);
                        if (i == (list.length - 1)) {
                            findNode = node[c];
                            return true;
                        } else if (!Q.isValid(node[c].children)) {
                            findNode = node[c];
                            return true;
                        } else {
                            node = node[c].children;

                            return false;
                        }
                    } else if (Q.isValid(node["-"])) {
                        log.push("-");
                        if (i == (list.length - 1)) {
                            return true;
                        } else if (!Q.isValid(node["-"].children)) {
                            return true;
                        } else {
                            node = node["-"].children;
                            return false;
                        }
                    } else {
                        return true;
                    }
                }
                return false;
            })) {
            return findNode;
        }
    }
    addGraphics(f) {
        if (Q.isValid(f)) {
            f(this.graphicCache, this.graphicModulars);
        }
    }
    addModular(f) {
        if (Q.isValid(f)) {
            f(this.graphicModulars);
        }
    }
    get(SIDC) {
        let log = [];
        let node = this.find(SIDC, log);
        if (Q.isValid(node)) {
            node.isIcon = fisIcon;
            if (Q.isValid(node.modular)) {
                if (!Q.isValid(node.modular.properties)) {
                    node.modular.properties = {};
                }
                node.modular.properties.log = log.join('');

            }
            return node;
        }
    }
}

function fisIcon() {
    return false;
}
module.exports = { Graphics: Graphics };