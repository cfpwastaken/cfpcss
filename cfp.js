//
// ==============
// CfpCSS Library
// ==============
// 
// If you are searching for something specific. Look in DEFINITIONS.MD
// 

function $(elmnt) {
    return document.querySelector(elmnt);
}

function hide(elmnt) {
    document.querySelector(elmnt).style.display = 'none';
}

function show(elmnt) {
    document.querySelector(elmnt).style.display = '';
}