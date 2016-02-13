function bufferWhileReturnsTrue(action, buffer) {

	var actionResult = action(); 

	if (!actionResult) return; 

	return (function() {
	
		setTimeout(function() {
			bufferWhileReturnsTrue(actionResult, buffer); 
		}, buffer);
	
	})();
 
}

// EXAMPLE USAGE
// var arr = [1, 2, 3, 4, 5]; 

// function actionFunc(arr) {

// 	if (!arr.length) return false; 

// 	return function () {
// 		console.log("Meow.");
// 		return actionFunc(arr.slice(1)); 
// 	}
// } 

// bufferWhileReturnsTrue(actionFunc(arr), 1000); 
// => Meow....Meow....Meow......
