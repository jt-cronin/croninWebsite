window.addEventListener('load', function(){

	debugger
	var dropDownContent = document.getElementsByClassName('hideShow')[0];
	var dropDownMenu = document.getElementById('drowDown');

	dropDownMenu.addEventListener('click', function(){
		dropDownContent.style.display = "block";
	});

});