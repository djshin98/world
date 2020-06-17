function isValid(a) { return ((typeof(a) == "undefined") || (a == null)) ? false : true; }

function isFunction(a) { return (typeof(a) == "function") ? true : false; }

function isArray(a) { return (isValid(a) && a instanceof Array) ? true : false; }

class Block {
    constructor(options) {
        this.variables = Object.assign({}, options);
    }
    destroy() {
        this.variables = undefined;
    }
    setVariable(key, data) {
        this.variables[key] = data;
    }
    getVariable(key) {
        if (key) {
            let uri = key.split(".");
            return uri.reduce((prev, curr) => { return prev[curr]; }, this.variables);
        }
    }
}

module.exports = { Block: Block, isValid: isValid };