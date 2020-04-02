

class OliveTree{
    constructor(selector, arr, option){
        this.selector = selector;
        this.options = Object.assign({},option);
        if( arr ){
            $(this.selector).html( this._makeTree(arr, this.options) );
        }
        //document.getElementById(id).innerHTML = this._makeTree(id, arr, options);

        let _this = this;
        $(this.selector).treeview({
            collapsed: false
        });
        $(this.selector+" li>div.folder").unbind();
        $(this.selector+" li>div.file").unbind();

        $(this.selector+" li>div.folder").bind('click', function(){
            _this.toggleFolder(this);
            if( _this.options.onSelect ){
                _this.options.onSelect('folder', this , _this);
            }
        });

        $(this.selector+" li>div.file").bind('click', function(){
            $('.clicked').removeClass('clicked');
            $(this).addClass('clicked');
            if( $(this).hasClass('file') ){
                if( _this.options.onSelect ){
                    _this.options.onSelect('file', this , _this);
                }
            }           
        });
    }
    _toHtmlAttribute(v){
        return Object.keys(v).reduce(function(prev,key){ return prev + "data-" + key +"='"+v[key]+"' "; }, " ");
    }
    _makeTree(arr, options) {
        let _this = this;
        let str = '';
        arr.forEach(d => {
            let attr = options.onAttribute ? options.onAttribute(d) : "";
            let text = options.onText ? options.onText(d) : "";

            if (d.children && d.children.length > 0) {
    
                str += '<li><div class="folder"' + _this._toHtmlAttribute(attr) + '>' + text + '</div>';
                str += '<ul>';
                str += _this._makeTree(d.children, options);
                str += '</ul>';
                str += '</li>';
            } else {
                str += '<li><div class="file"' + _this._toHtmlAttribute(attr) + '>' + text + '</li>';
            }
        });
        return str;
    }
    toggleFolder(t){
            
        let p = $(t).parent().eq(0); //.toggler();
        p.find('ul').eq(0).toggle();
        let prev = $(t).prev();
        if( p.hasClass('expandable') ){
            p.swapClass('expandable','collapsable');
            prev.swapClass('expandable-hitarea','collapsable-hitarea');
        }else{
            p.swapClass('collapsable','expandable');
            prev.swapClass('collapsable-hitarea','expandable-hitarea');
        }
    }
}
global.OliveTree = OliveTree;