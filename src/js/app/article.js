"use strict";

const { Eventable } = require('../core/eventable');
const { get } = require("../util/comm");
const { $$ } = require('../core/e');

class ArticleContent extends Eventable {
    constructor(name, options) {
        super();
        this.name = name;
        this.options = Object.assign({}, options);
        this.width = 0;
        this.height = 0;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.options.id;
    }
    resize(x, y, width, height) {
        let ele = $$("#" + this.getId());
        ele.style("left", "0px");
        ele.style("top", "0px");
        ele.style("width", width + "px");
        ele.style("height", height + "px");

        this.width = parseInt(width);
        this.height = parseInt(height);
    }
    center() {
        return { x: this.width / 2, y: this.height / 2 };
    }
    show() {
        this.options.show = true;
        $$("#" + this.getId()).show();
    }
    hide() {
        this.options.show = false;
        $$("#" + this.getId()).hide();
    }
    isVisible() {
        if (this.options.show === true) {
            return true;
        }
        return false;
        //return $$("#" + this.getId()).isVisible();
    }
    json() {
        return this.options;
    }
};

class MapContent extends ArticleContent {
    constructor(name, options) {
        super(name, options);
    }
    getLayerDirector() {
        console.warn("unsupported getLayerDirector() : " + this.constructor.name);
    }
    setDrawMode(mode) {
        console.warn("unsupported map setDrawMode() : " + this.constructor.name);
    }
    getDrawList() {
        console.warn("unsupported map getDrawList() : " + this.constructor.name);
    }
    getDrawModel(name) {
        console.warn("unsupported map getDrawModule() : " + this.constructor.name);
    }
    add(position, options) {
        console.warn("unsupported add() : " + this.constructor.name);
    }
    addGraphics(options) {
        console.warn("unsupported addGraphics() : " + this.constructor.name);
    }
};

class Setting extends ArticleContent {
    constructor(director, name, options) {
        super(name, options);
        if (Q.isValid(this.options.page)) {
            get({
                url: this.options.page,
                success: (status, statusText, data) => {
                    $$("#" + this.getId()).append(data);
                }
            });
        }
    }
};



module.exports = {
    ArticleContent: ArticleContent,
    MapContent: MapContent,
    Setting: Setting
};