$(document).ready(function() {
  
  // Need to set vars for the interval function
  
	// Set an interval
	setInterval(function() {
		$('#slider .slides').animate({'margin-left': '-=720px'}, 1000); // Animate margin-left
	}, 3000);
	
	// On the last slide, go to position 1
	
	// On mouse-enter, pause the animation
	// Resume the animation after the mouse-leave

})