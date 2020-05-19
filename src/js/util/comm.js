var dom = {
    $: function(a) { return document.querySelectorAll(a); },
    e: function(a) { return document.querySelector(a); },
    trueOrundef: function(a) { return ((!a && a != false) || a == true) ? true : false; },
    guid: function() {
        function s4() { return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1); }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}

function elements(heles) {
    this.elements = hele;
    this.select = function(s) {
        let l = [];
        this.elements.map(ele=>{
            let a = ele.querySelectorAll(s);
            if (a instanceof NodeList) {
                a.forEach(i => { l.push(i); });
            } else if (a instanceof HTMLElement) {
                l.push(a);
            }
        })
        return new elements(l);
    }
    this.pselect = function(s){
        let l = [];
        this.elements.map(ele=>{
            let parent = ele.parentElement;
            while( parent ){
                if( parent.matches(s) === true ){
                    l.push(ele.p);
                }
                parent = parent.parentElement;
            }
        })
        return new elements(l);
    }
    this.attr = function(name,val,callback){
        if( name ){
            this.elements.forEach(ele=>{
                if( val ){
                    ele.setAttribute(name,val);
                }else{
                    callback(ele,name,ele.getAttribute(name));
                }
                
            });
        }
        return this;
    }
    this.remove = function(){
        this.elements.forEach(ele=>{
            ele.remove();
        });
        return this;
    }
    this.append = function(s){
        
    }
    this.h2e = function(html) {
        var template = document.createElement('template');
        template.innerHTML = html;
        return template.content.childNodes;
    }
}

function e(a) {
    if (typeof(a) == "string") {
        return e(document.querySelectorAll(a));
    } else if (typeof(a) == "object") {
        if (a instanceof NodeList) {
            let l = [];
            a.forEach(i => { l.push(i); });
            return new elements(l);
        } else if (a instanceof HTMLElement) {
            return new elements([a]);
        }
    }
}
global.e = e;
var tx = {
    send: function(options) {
        var xhr = new XMLHttpRequest();
        var _options = Object.assign({}, options, {
            type: options.type || 'POST',
            dataType: options.dataType || "text",
            async: options.async || true,
            data: options.data || null
        });

        if (_options.progress) {
            xhr.addEventListener("progress", function(evt) {
                _options.progress(evt);
            });
        }
        if (_options.success || _options.error) {
            xhr.addEventListener("load", function(evt) {
                if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status <= 299) {
                    !_options.success || _options.success(xhr.status, xhr.statusText, xhr.response);
                } else {
                    !_options.error || _options.error(xhr.status, xhr.statusText, evt);
                }
            });
        }
        if (_options.error) {
            xhr.addEventListener("error", function(evt) {
                _options.error(xhr.status, xhr.statusText, evt);
            });
        }
        if (_options.abort) {
            xhr.addEventListener("abort", function(evt) {
                _options.abort(xhr.status, xhr.statusText, evt);
            });
        }
        xhr.open(_options.type, _options.url, _options.async);
        !_options.headers || Object.keys(_options.headers).forEach(function(header) {
            xhr.setRequestHeader(header, _options.headers[header]);
        });
        xhr.responseType = _options.dataType;
        xhr.send(options.data);
        return 0;
    },
    post: function(options) { return tx.send(Object.assign({}, options, { type: 'POST' })); },
    get: function(options) { return tx.send(Object.assign({}, options, { type: 'GET' })); }
}

module.exports = { dom: dom, get: tx.get, post: tx.post, e: e };