// Create a new list item when clicking on the "Add" button
$(document).ready(function () {
	$('#addBtn').bind('click', function() {
var inputValue = jQuery('input#myInput').val();

if(!inputValue)
{
 alert("You must write something!");
} else {
	 $('#myUL').append('<li>'+inputValue+'</li>');
}
jQuery('input#myInput').val("");
	});
});
