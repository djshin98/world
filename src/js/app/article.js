const { Eventable } = require('../core/eventable');

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
        ele.style("left", x + "px");
        ele.style("top", y + "px");
        ele.style("width", width + "px");
        ele.style("height", height + "px");

        this.width = parseInt(width);
        this.height = parseInt(height);
        if (Q.isValid(this.dashboard)) {
            this.dashboard.resize(x, y, width, height);
        }
    }
    center() {
        return { x: this.width / 2, y: this.height / 2 };
    }
    show() {
        $$("#" + this.getId()).show();
    }
    hide() {
        $$("#" + this.getId()).hide();
    }
    isVisible() {
        return $$("#" + this.getId()).isVisible();
    }
    add(windowX, windowY, options) {
        console.warn("unsupported add : " + windowX + "," + windowY);
    }
}

class MapCentent extends ArticleContent {
    constructor(name, options) {
        super(name, options);
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
}
module.exports = { ArticleContent: ArticleContent, MapCentent: MapCentent };