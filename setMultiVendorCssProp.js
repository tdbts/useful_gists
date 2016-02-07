/**
 *
 * setMultiVendorCssProp() 
 *
 * @param element - { DOM element } 
 * @param property - { string -- 'transition' | 'transform' }  
 * @value - { string } 
 * 
 */

function setMultiVendorCssProp(element, property, value) {
	var vendors = ['Webkit', 'Moz', 'O', 'Ms']; 

	element.style[property] = value; 

	property = property.substring(0, 1).toUpperCase() + property.substring(1); 

	vendors.forEach(function (vendor) {
		element.style[vendor + property] = value; 
	}); 
} 
