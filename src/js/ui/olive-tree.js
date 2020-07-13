'use strict';
const { $$, Q } = require('../core/e');

class OliveTree {
    constructor(selector, arr, option) {
        this.selector = selector;
        this.options = Object.assign({ collapsed: true }, option);
        this.data = Object.assign([], arr);
        this.issuance(this.data, "");
        if (this.data) {
            $(this.selector).html(this._makeTree(this.data, this.options));
        }
        //document.getElementById(id).innerHTML = this._makeTree(id, arr, options);
        //this.arr = arr;
        let _this = this;
        $(this.selector).treeview({
            collapsed: this.options.collapsed
        });
        $(this.selector + " li>div.folder").unbind();
        $(this.selector + " li>div.file").unbind();

        $(this.selector + " li>div.folder").bind('click', function() {
            _this.toggleFolder(this);
            if (_this.options.onSelect) {
                _this.options.onSelect('folder', this, _this.get($(this).data('issuance')));
            }
        });

        $(this.selector + " li>div.file").bind('click', function() {
            $('.clicked').removeClass('clicked');
            let $this = $(this);
            $this.addClass('clicked');
            if ($this.hasClass('file')) {
                if (_this.options.onSelect) {
                    let url = this.innerText;
                    $(this.parentElement).parents("li").each((i, ele) => {
                        let p = $(ele).children("div.folder");
                        if (p.length > 0) {
                            url = p[0].innerText + "/" + url;
                        }
                    });
                    _this.options.onSelect('file', this, _this.get($this.data('issuance')), url);
                }
            }
        });

        $(this.selector + " li>input[type='checkbox']").change(function() {
            let $this = $(this);
            let filetype = ($(this).hasClass('file')) ? 'file' : 'folder';
            if (_this.options.onChecked) { _this.options.onChecked("checkbox", $(this).is(":checked"), filetype, $(this).next(), _this.get($this.data('issuance'))); }
        });

        $(this.selector + " li>input[type='radio']").change(function() {
            let $this = $(this);
            let filetype = ($(this).hasClass('file')) ? 'file' : 'folder';
            if (_this.options.onChecked) { _this.options.onChecked("radio", $(this).is(":checked"), filetype, $(this).next(), _this.get($this.data('issuance'))); }
        });
    }

    _toHtmlAttribute(v) {
        return Object.keys(v).reduce(function(prev, key) { if (v[key]) { return prev + "data-" + key + "='" + v[key] + "' "; } return prev; }, " ");
    }
    issuance(arr, parentId) {
        let _this = this;
        arr.forEach((d, i) => {
            d.issuanceId = parentId + "." + (i + 1);
            if (d.children && d.children.length > 0) {
                _this.issuance(d.children, d.issuanceId);
            }
        });
    }
    _get(arr, issuanceId) {
        let _this = this;
        let issuanceObject = undefined;
        arr.some((d, i) => {
            if (d.issuanceId == issuanceId) {
                issuanceObject = d;
                return true;
            }
            if (d.children && d.children.length > 0) {
                issuanceObject = _this._get(d.children, issuanceId);
                if (issuanceObject) { return true; }
            }
            return false;
        });
        return issuanceObject;
    }
    get(issuanceId) {
        return this._get(this.data, issuanceId);
    }
    _classStr(d) {
        if (d.children) {
            if (Q.isValid(d.class)) {
                return ' class="folder ' + d.class + '" ';
            }
            return ' class="folder" ';
        }

        if (Q.isValid(d.class)) {
            return ' class="file ' + d.class + '" ';
        }
        return ' class="file" ';
    }
    _makeTree(arr, options) {
        let _this = this;
        let str = '';
        arr.forEach((d, i) => {
            d.order = i;
            let attr = options.onAttribute ? options.onAttribute(d, i) : "";
            let text = options.onText ? options.onText(d) : (Q.isValid(d.name) ? d.name : "");
            let idstr = Q.isValid(d.id) ? 'data-id="' + d.id + '" ' : "";
            let classstr = this._classStr(d);
            let groupstr = (d.group) ? ' name="' + d.group + '" ' : ' ';
            let issuanceStr = (d.issuanceId) ? ' data-issuance="' + d.issuanceId + '" ' : ' ';
            if (Q.isValid(d.type)) {
                let typestr = "";
                Q.splits(d.type, "|", type => {
                    let checkedstr = "";
                    if (type == "check") {
                        if (Q.isValid(this.options.onQueryChecked) && this.options.onQueryChecked("checkbox", d)) { checkedstr = ' checked="checked" '; }
                        typestr += '<input type="checkbox" ' + issuanceStr + checkedstr + '/>';
                    } else if (type == "radio") {
                        if (Q.isValid(this.options.onQueryChecked) && this.options.onQueryChecked("radio", d)) { checkedstr = ' checked="checked" '; }
                        typestr += '<input type="radio" ' + groupstr + issuanceStr + checkedstr + '/>';
                    }
                });
                str += '<li>' + typestr + '<div' + classstr + issuanceStr + _this._toHtmlAttribute(attr) + '>' + text + '</div>';
            } else {
                str += '<li><div' + classstr + idstr + issuanceStr + _this._toHtmlAttribute(attr) + '>' + text + '</div>';
            }
            if (d.children && d.children.length > 0) {
                str += '<ul>';
                str += _this._makeTree(d.children, options);
                str += '</ul>';
            }
            str += '</li>';
        });
        return str;
    }

    toggleFolder(t) {
        let p = $(t).parent().eq(0); //.toggler();
        p.find('ul').eq(0).toggle();
        let prev = $(t).prev();
        if (p.hasClass('expandable')) {
            p.swapClass('expandable', 'collapsable');
            prev.swapClass('expandable-hitarea', 'collapsable-hitarea');
        } else {
            p.swapClass('collapsable', 'expandable');
            prev.swapClass('collapsable-hitarea', 'expandable-hitarea');
        }
    }
}
global.OliveTree = OliveTree;