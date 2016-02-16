// SOURCE: https://remysharp.com/2010/07/21/throttling-function-calls 
function throttle(fn, threshold, scope) {
	threshold = threshold || 250; 

	var last, 
		deferTimer; 

	return function () {
		var context = scope || this, 
			now = +new Date, 
			args = arguments; 

		if (last && now < last + threshold) {
			// hold onto it 
			clearTimeout(deferTimer); 

			deferTimer = setTimeout(function() {
				last = now; 
				fn.apply(context, args); 
			}, threshold);
		
		} else {
			last = now; 
			fn.apply(context, args); 
		}
	};
} 
