function addCss(css, top){ 
    var win = top ? window.top : window; 
    var head = win.document.getElementsByTagName("head")[0];
    var styleElement = win.document.createElement("style");

    styleElement.setAttribute("type", "text/css");

    if (styleElement.styleSheet) {   // IE
        styleElement.styleSheet.cssText = css;
    } else {                // the world
        styleElement.appendChild(win.document.createTextNode(css));
    }

    head.appendChild(styleElement);
}   
