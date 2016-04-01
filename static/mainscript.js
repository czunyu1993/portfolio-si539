
$(document).ready(function() {

	$( "html" ).removeClass( "loading" );
	$('nav li a').hover(
		function() {
			$(this).parent().css('background-color', '#d9d9d9');
			$(this).css('color','#000000')
		},
		function(){
			$(this).parent().css('background-color', '#737373');
			$(this).css('color','white')
		}
	);
});
