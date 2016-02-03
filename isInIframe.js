// SOURCE: http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
function isInIframe(window) {
	try {
		return window.self !== window.top; 
	} catch (e) {
		return true; 
	}
} 
