function init(){
	document.getElementById("attach").addEventListener("click", function(){
		var input=document.createElement("input");
		input.setAttribute("type", "file");
		input.setAttribute("placeholder", "Attach a file");
		document.getElementById("contenedor").appendChild(input);
	});
	document.getElementById("submit").addEventListener("click", function(){
		console.log(document.querySelectorAll("input"));
	});
}

window.onload=function(){
	init();
};