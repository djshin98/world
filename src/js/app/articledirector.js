"use strict";
const ARTICLE_EVENT_OPENED = "opened";
const ARTICLE_EVENT_CLOSED = "closed";
const ARTICLE_EVENT_UPDATED = "updated";

const { m2 } = require('../map2d/m2');
const { m3 } = require('../map3d/m3');
const { Setting, MapContent } = require('./article');

class ArticleDirector {
    constructor(app, options) {
        this.loaded = false;
        this.parent = app;
        this.left = 0;
        this.top = 0;
        this.width = 0;
        this.height = 0;
        this.articles = {};
        this.eventList = {
            opened: [],
            closed: [],
            updated: []
        };
        if (Q.isValid(options.map3)) { this.createArticle(new m3(this, "m3", options.map3)); }
        if (Q.isValid(options.map2)) { this.createArticle(new m2(this, "m2", options.map2)); }
        if (Q.isValid(options.setting)) { this.createArticle(new Setting(this, "setting", options.setting)); }

        if (Q.isValid(options.map3) && options.map3.show === true) {
            this.switch("m3");
        } else if (Q.isValid(options.map2) && options.map2.show === true) {
            this.switch("m2");
        } else if (Q.isValid(options.setting) && options.setting.show === true) {
            this.switch("setting");
        } else {
            this.switch("m3");
        }
        this.loaded = true;
    }
    createArticle(articleContent) {
        this.articles[articleContent.getName()] = articleContent;
        return articleContent;
    }
    current() {
        return Q.findByKey(this.articles, (key, obj) => {
            return (obj.isVisible()) ? true : false;
        });
    }
    switch (name, mode) {
        if (Q.isValid(name)) {
            if (Q.isValid(this.articles[name])) {
                if (!this.loaded || this.current() !== this.articles[name]) {
                    Q.keys(this.articles, (key, value) => {
                        if (key == name) { value.show(); } else { value.hide(); }
                    })
                    this.resize(this.left, this.top, this.width, this.height);

                    this.fire(ARTICLE_EVENT_OPENED, this.articles[name]);
                }
                if (Q.isValid(mode)) {
                    this.articles[name].setMode(mode);
                }
            }
        }
    }
    getMap(dimension) {
        if (dimension == 2) {
            if (Q.isValid(this.articles["m2"])) {
                return this.articles["m2"];
            }
        } else if (dimension == 3) {
            if (Q.isValid(this.articles["m3"])) {
                return this.articles["m3"];
            }
        }
    }
    fire(event, article) {
        if (Q.isValid(this.eventList[event])) {
            this.eventList[event].forEach(c => {
                if (Q.isValid(c.callback)) {
                    if (Q.isValid(article) && Q.isValid(c.obj) && c.obj === article) {
                        c.callback(article.json());
                    } else if (!Q.isValid(c.obj)) {
                        c.callback(article.json());
                    }
                    return c.callback;
                }
            });
        }
    }
    off(event, callback) {
        if (Q.isValid(this.eventList[event])) {
            this.eventList[event] = this.eventList[event].filter(c => {
                if (c.callback == callback) {
                    return false;
                }
                return true;
            });
        }
    }
    on(events, obj, callback, bfirst) {
        let ret;
        let fired = [];
        Q.splits(events, "|", event => {
            if (Q.isValid(this.eventList[event])) {
                if (!this.eventList[event].some(c => { return (c.callback == callback) ? true : false; })) {
                    this.eventList[event].push({ obj: obj, callback: callback });
                    let article = this.current();
                    if (bfirst === true) {
                        if (article.isVisible() && (event === ARTICLE_EVENT_OPENED || event === ARTICLE_EVENT_UPDATED)) {
                            if (!fired.some(c => { return (c.callback == callback) ? true : false; })) { fired.push(this.fire(event, article)); }
                        } else if (!article.isVisible() && event === ARTICLE_EVENT_CLOSED) {
                            if (!fired.some(c => { return (c.callback == callback) ? true : false; })) { fired.push(this.fire(event, article)); }
                        }
                    }
                    ret = callback;
                }
            }
        });
        return ret;
    }
    getOpenedMap() {
        let map = this.current();
        if (map instanceof MapContent) {
            return map;
        }
    }
    resize(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        let ele = $$("article");
        if (Q.isValid(ele)) {
            ele.style("left", left + "px");
            ele.style("top", top + "px");
            ele.style("width", width + "px");
            ele.style("height", height + "px");
        }
        let article = this.current();
        if (Q.isValid(article)) {
            article.resize(left, top, width, height);
        }
    }
}

module.exports = {
    ArticleDirector: ArticleDirector
};