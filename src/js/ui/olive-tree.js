const { $$ } = require('../core/e');

class OliveTree {
    constructor(selector, arr, option) {
        this.selector = selector;
        this.options = Object.assign({ collapsed: true }, option);
        if (arr) {
            $(this.selector).html(this._makeTree(arr, this.options));
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
                _this.options.onSelect('folder', this, _this);
            }
        });

        $(this.selector + " li>div.file").bind('click', function() {
            $('.clicked').removeClass('clicked');
            $(this).addClass('clicked');
            if ($(this).hasClass('file')) {
                if (_this.options.onSelect) {
                    let url = this.innerText;
                    $(this.parentElement).parents("li").each((i, ele) => {
                        let p = $(ele).children("div.folder");
                        if (p.length > 0) {
                            url = p[0].innerText + "/" + url;
                        }
                    });
                    _this.options.onSelect('file', this, _this, url);
                }
            }
        });

        $(this.selector + " li>input[type='checkbox']").change(function() {
            let type = ($(this).hasClass('file')) ? 'file' : 'folder';
            if (_this.options.onChecked) { _this.options.onChecked($(this).is(":checked"), type, $(this).next(), _this); }

            // if ($("#checkBoxId").is(":checked")) {
            //     alert("체크박스 체크했음!");
            // } else {
            //     alert("체크박스 체크 해제!");
            // }
        });
    }
    _toHtmlAttribute(v) {
        return Object.keys(v).reduce(function(prev, key) { return prev + "data-" + key + "='" + v[key] + "' "; }, " ");
    }
    _makeTree(arr, options) {
        let _this = this;
        let str = '';
        arr.forEach(d => {
            let attr = options.onAttribute ? options.onAttribute(d) : "";
            let text = options.onText ? options.onText(d) : "";

            if (d.children && d.children.length > 0) {
                if (_this.selector === "#toshow-view") {
                    str += '<li><input type="checkbox" id="' + d.id + '"/>';
                    str += '<div class="folder"' + _this._toHtmlAttribute(attr) + 'style="display: inline-block;">' + text + '</div>';
                    str += '<ul>';
                    str += _this._makeTree(d.children, options);
                    str += '</ul>';
                    str += '</li>';
                } else {
                    str += '<li><div class="folder"' + _this._toHtmlAttribute(attr) + '>' + text + '</div>';
                    str += '<ul>';
                    str += _this._makeTree(d.children, options);
                    str += '</ul>';
                    str += '</li>';
                }
            } else {
                str += '<li><div class="file"' + _this._toHtmlAttribute(attr) + '>' + text + '</li>';
            }
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