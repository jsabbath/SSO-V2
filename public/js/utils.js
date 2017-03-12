function print(s){

	console.log (s);

}

function validate(data){
	
	console.log('este dato es '+typeof data)
}

function elementdom (selector){

	var selector = document.querySelectorAll(selector);
	console.log(selector);
}

function applyStyle(element, style){
    
    Object.keys(style).forEach(function(key){
        element.style[key] = style[key];
    });
}