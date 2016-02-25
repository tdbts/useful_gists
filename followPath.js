function followPath(path, obj, upsert) {
	var result, 
		prop; 

	if (path.length === 0) {
		result = obj; 
	} else {
		prop = path[0]; 

		if (getType(obj) === 'object') {
			if (!(prop in obj)) {
				if (upsert) {
					obj[prop] = {}; 
				} else {
					throw new ReferenceError("The property " + prop + " does not exist in the object " + obj); 
				}
			}
		} else {
			throw new Error("The path " + path + " is invalid for the entity " + obj); 
		}

		result = followPath(path.slice(1), obj[prop], upsert); 
	}
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

Another Example: 

var obj = {
	hey: 'ho', 
	lets: {
		go: {
			'home': 32
		}
	}
}; 

followPath(['lets', 'go', 'now'], obj, true);

console.log("JSON.stringify(obj):", JSON.stringify(obj)); 

// ==>
{ 
	"hey": "ho", 
	"lets": { 
		"go": { 
			"home": 32, 
			"now": {} 
		} 
	} 
}
*/
