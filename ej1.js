function links(){
	var l= document.querySelectorAll("a");
	var google= document.querySelectorAll("a[href='http://www.google.es']");
	var enlaces= document.querySelectorAll("p.second a");

	document.getElementById("text").innerHTML=`Hay ${l.length} enlaces.`;
	document.getElementById("text1").innerHTML=`El penúltimo enlace es ${l[l.length-2].href}.`;
	document.getElementById("text2").innerHTML=`${google.length} enlaces enlazan a Google.`;
	document.getElementById("text3").innerHTML=`Hay ${enlaces.length} enlaces.`;
}

window.onload=function(){
	links();
};