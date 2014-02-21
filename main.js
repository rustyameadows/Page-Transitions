$(document).ready(function() {
	$('#holder').toggleClass("visible");

	$('a.link').click(function(event) {
		// Over-rides the link
		event.preventDefault();
		// Sets the new destination to the href of the link
		newLocation = this.href;
		color = $(this).data("color");
		$('body').css('background-color', color );
		$('#holder').css('opacity','0' );
		// Delays action
		window.setTimeout(function() {
		    // Redirects to new destination
				window.location = newLocation;
		}, 250);
	});

	$('h1').click(function(event) {
		$('#holder').toggleClass("visible");
	});

});