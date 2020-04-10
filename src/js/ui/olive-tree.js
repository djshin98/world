class OliveTree {
    constructor(selector, arr, option) {
        this.selector = selector;
        this.options = Object.assign({}, option);
        if (arr) {
            $(this.selector).html(this._makeTree(arr, this.options));
        }
        //document.getElementById(id).innerHTML = this._makeTree(id, arr, options);
        //this.arr = arr;
        let _this = this;
        $(this.selector).treeview({
            collapsed: false
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
                    _this.options.onSelect('file', this, _this);
                }
<<<<<<< HEAD
                if (_this.selector === "#toshow-view") {
                    var __this = this;
                    var findData;
                    if ($(this).closest('.collapsable').children('.folder')[0].textContent === "아군부대") {
                        findData = app.collections["ALLY"].objects.find(function(d) {
                            return (__this.textContent === d.options.name) ? true : false;
                        });
                    } else if ($(this).closest('.collapsable').children('.folder')[0].textContent === "적부대") {
                        findData = app.collections["ENEMY"].objects.find(function(d) {
                            return (__this.textContent === d.options.name) ? true : false;
                        });
                    }

                    //  Math.tan(-(map.viewer3d.camera.pitch * Cesium.Math.DEGREES_PER_RADIAN) * (Math.PI / 180))//tangent 값
                    // map.oliveCamera.distance / Math.tan(-(map.viewer3d.camera.pitch * Cesium.Math.DEGREES_PER_RADIAN) * (Math.PI / 180))
                    //   위도거리는 어디서나 1도=111Km
                    if( findData && findData.cartesian ){
                        var carto = Cesium.Ellipsoid.WGS84.cartesianToCartographic(findData.cartesian);
                        var lon = Cesium.Math.toDegrees(carto.longitude);
                        var lat = Cesium.Math.toDegrees(carto.latitude);
                        var calcresult = {};
                        calcresult = map.oliveCamera.cameraFocus(lon, lat);
                        map.oliveCamera.flyTo(calcresult.lon, calcresult.lat);
                    }
                }
=======
                
>>>>>>> 52d7e9927e4abb18b628ebce5906de11c84b8dfe
            }
        });

        $(this.selector + " li>input[type='checkbox']").change(function() {
            let type = ($(this).hasClass('file')) ? 'file' : 'folder';
            if (_this.options.onChecked) {_this.options.onChecked( $(this).is(":checked"), type, $(this).next(), _this ); }
            
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
                    str += '<li><input type="checkbox" class="' + d.id + '"/>';
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