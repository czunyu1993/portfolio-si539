
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
});


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("dropdownbtn").classList.toggle("movedropbtn");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}