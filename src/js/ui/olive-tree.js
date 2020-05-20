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
        });

        $(this.selector + " li>input[type='radio']").change(function() {
            let type = ($(this).hasClass('file')) ? 'file' : 'folder';
            if (_this.options.onChecked) { _this.options.onChecked($(this).is(":checked"), type, $(this).next(), _this); }
        });
    }
    
    _toHtmlAttribute(v) {
        return Object.keys(v).reduce(function(prev, key) { if(v[key]){return prev + "data-" + key + "='" + v[key] + "' ";} return prev; }, " ");
    }

    _makeTree(arr, options) {
        let _this = this;
        let str = '';
        arr.forEach(d => {
            let attr = options.onAttribute ? options.onAttribute(d) : "";
            let text = options.onText ? options.onText(d) : "";
            let idstr = ""; //(d.id)?'id="' + d.id + '" ':"";
            let classstr = (d.children && d.children.length > 0)?' class="folder" ':' class="file" ';
            let groupstr = (d.group)?' name="'+d.group+'" ':' ';
            if( d.type && d.type == "check" ){
                str += '<li><input type="checkbox" ' + idstr + '/><div'+classstr+ _this._toHtmlAttribute(attr) + '>' + text + '</div>';
            }else if( d.type && d.type == "radio" ){
                str += '<li><input type="radio" ' + groupstr + idstr + '/><div'+classstr+ _this._toHtmlAttribute(attr) + '>' + text + '</div>';
            }else{
                str += '<li><div'+classstr+ idstr + _this._toHtmlAttribute(attr) + '>' + text + '</div>';
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