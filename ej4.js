function init(){
	
	document.getElementById("nuevaEntrada").addEventListener("click", function(){
		var li=document.createElement("li");
		document.getElementById("ul").appendChild(li);
		var newList = document.querySelectorAll("li");
		console.log(newList);
	});

}
window.onload=function(){
	init();
};