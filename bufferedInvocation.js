function bufferedInvocation(arr, action, buffer) {

	arr.forEach(function (item, index) {
		setTimeout(function() {
			return action(item); 
		}, buffer * index);
	}); 
} 


// TEST 
// var arr = ["hey", "ho", "let's", "go"]; 

// bufferedInvocation(arr, console.log.bind(console), 1000); 
// hey...ho...let's...go...
