window.onload = function(){ 
	document.getElementById("loading").style.display = "none"
}

$(document).ready(function() {

	$('nav li a').hover(
		function() {
			$(this).parent().css('background-color', '#ffcccc');
			$(this).css('color','#3377ff')
		},
		function(){
			$(this).parent().css('background-color', '#e6e6e6');
			$(this).css('color','black')
		}
	);
});
