// Returns the type for any passed entitity.  
// NaN actually evaluates to 'NaN', not "number" as per Javascript quirkiness. 
function getType(item) { 
	
	return item !== item ? 'NaN' : Object.prototype.toString.call(item).slice(8, -1).toLowerCase();
}
