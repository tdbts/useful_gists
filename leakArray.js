function leakArray(arr, numberToLeak) {

	var leak = [];

	return function () {
		
		leak = leak.concat(arr.splice(0, numberToLeak)); 
		
		return leak; 
	};
}


// EXAMPLE
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; 
// var leaker = leakArray(arr, 2); 
// console.log(leaker()); //=> [1, 2]
// console.log(leaker()); //=> [1, 2, 3, 4] 
// console.log(leaker()); //=> [1, 2, 3, 4, 5, 6]
// ...

// Another awesome example 
// var obj = {
	// key: "value", 
	// anotherKey: 3, 
	// myKey: [1, 2, 3, 4, 5, 6, 7, 8, 9]
// }; 
// 
// obj.myKey = leakArray(obj.myKey, 2); 
// 
// obj.myKey(); 
// => [1, 2] 
// obj.myKey() 
// => [1, 2, 3, 4]
// ....
