
$(document).ready(function() {

	$( "html" ).removeClass( "loading" );
	$("#large-nav-home > a, #large-nav-project > a, #large-nav-hobby > a, #large-nav-contact > a").hover(
		
		function() {
			$(this).parent().css('background-color', '#d9d9d9');
			$(this).css('color','#000000')
		},
		function(){
			var fsize = $(this).parent().css('font-size');
			if (fsize == '14px') {
				$(this).parent().css('background-color', '#737373');
				$(this).css('color','white')
			} else {
				$(this).parent().css('background-color', '#4d4d4d');
				$(this).css('color','white')
			}
		}
	);

	$(".hobbyimg").mouseenter(function() {
		$(this).css('opacity', '0.3');
		$(this).siblings(".imginfo").show();
	});
	$(".hobbyimg").mouseleave(function() {
		$(this).css('opacity', '1');
		$(this).siblings(".imginfo").hide();
	});

});


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("dropdownbtn").classList.toggle("movedropbtn");
}
