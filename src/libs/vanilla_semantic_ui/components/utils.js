/*!
 * # Vanilla Semantic UI 0.0.1 - Utils
 * http://github.com/morganbarrett/vanilla-semantic-ui/
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

ui.checkTarget = function(event, test){			
	return event.target.matches(test);
}

ui.isPlainObject = function(obj){
	if (typeof (obj) !== 'object' || obj.nodeType || obj !== null && obj !== undefined && obj === obj.window) {
		return false;
	}

	if (obj.constructor && !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
		return false;
	}

	return true;
}

ui.extend = function(){
	var extended = {};
	var deep = false;
	var i = 0;
	var length = arguments.length;

	if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
		deep = arguments[0];
		i++;
	}

	var merge = function (obj) {
		for ( var prop in obj ) {
			if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
				if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
					extended[prop] = ui.extend( true, extended[prop], obj[prop] );
				} else {
					extended[prop] = obj[prop];
				}
			}
		}
	};

	for ( ; i < length; i++ ) {
		var obj = arguments[i];
		merge(obj);
	}

	return extended;
}

ui.isVisible = function(e){
	return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
}

ui.prevAll = function(elem, func){
	while(elem = elem.previousElementSibling){
		func(elem);
	}
}

ui.nextAll = function(elem, func){
	while(elem = elem.nextElementSibling){
		func(elem);
	}
}

ui.fadeIn = function(elem, opts){
	elem.style.opacity = 0;
	elem.style.display = opts.display || "block";

	var to = opts.to ? opts.to : 1;

	(function fade(){
		var val = parseFloat(elem.style.opacity) + .1;
		
		if(val <= to){
			elem.style.opacity = val;
			requestAnimationFrame(fade);
		} else {
			if(typeof opts.ondone == "function"){
				opts.ondone();
			}
		}
	})();
}

ui.fadeOut = function(elem, opts){
	elem.style.opacity = 1;

	(function fade() {
		if ((elem.style.opacity -= .1) < 0) {
			elem.style.display = "none";

			if(typeof opts.ondone == "function"){
				opts.ondone(elem);
			}
		} else {
			requestAnimationFrame(fade);
		}
	})();
}
