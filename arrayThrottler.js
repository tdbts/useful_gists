function arrayThrottler(arr, amount, action) {

	if (!arr.length) return; 

	action(arr.splice(0, amount)); 

	return function () {
		arrayThrottler(arr, amount, action); 
	};
}

// EXAMPLE USAGE
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 

// var th = arrayThrottler(arr, 2, console.log.bind(console)); 
// th(); 
// th(); 
// th(); ...
// => WORKS!  [1, 2]...[3, 4]......[11]...<nothing> 
