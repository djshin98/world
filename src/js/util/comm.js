var dom = {
    $: function(a) { return document.querySelectorAll(a); },
    e: function(a) { return document.querySelector(a); },
    trueOrundef: function(a) { return ((!a && a != false) || a == true) ? true : false; },
    guid: function() {
        function s4() { return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1); }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}
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

module.exports = { dom: dom, get: tx.get, post: tx.post };