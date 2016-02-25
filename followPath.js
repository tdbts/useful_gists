function followPath(path, obj) {
	var result; 

	if (path.length === 0) {
		result = obj; 
	} else {
		result = followPath(path.slice(1), obj[path[0]]);
	}

	return result; 
}

/* 
Example use: 

var myObj = {
	prop1: {
		propA: {
			propOne: "you found me", 
			propTwo: false
		}	
	}, 
	prop2: "nope"
};

followPath(['prop1', 'propA', 'propOne'], myObj); // ==> "you found me"
*/
