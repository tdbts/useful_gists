import getType from './getType'; 
import isType from './isType'; 

/**
 *
 * @name followPath() 
 *
 * @desc Returns the entity located at the terminus of the 
 *     given path within the given object of nested objects.
 *
 * @param { string[] } path - Array of strings delineating 
 *     the path to follow.  
 * @param { object } obj - The object where the path will be  
 *     followed. 
 * @param { object } options - An object for setting options.
 *     - @prop { boolean } upsert - If true, in cases where the 
 *         property does not exist within the current object, an 
 *         empty object will be created at that property. 
 *     - @prop { function } terminus - A function that will be 
 *         called in order to set the value of the property 
 *         located at the terminus of the given path.     
 * 
 * @returns { any }
 *
 */

const followPath = (path, obj, options) => {
	let result;  
	let prop; 

	if (path.length === 0) {
		result = obj; 
	
	} else {
		prop = path[0]; 

		if ('object' === getType(obj)) {
			if (!(prop in obj)) {

				if ((path.length === 1) && ('terminus' in options) && (isType('function', options.terminus))) {
					obj[prop] = options.terminus(prop); 
				
				} else if (('upsert' in options) && options.upsert) {
					obj[prop] = {}; 
				
				} else {
					throw new ReferenceError(`The property ${prop} does not exist in the object ${JSON.stringify(obj)}`); 
				}
			}
		
		} else {
			throw new Error(`The path ${path} is invalid for the entity ${JSON.stringify(obj)}`); 
		}

		result = followPath(path.slice(1), obj[prop], options); 
	}

	return result; 
};

export default followPath; 

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