function applyFuncToProps(obj, action) {
	var prop; 

	for (prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			action(obj[prop], prop); 
		}
	}
}
