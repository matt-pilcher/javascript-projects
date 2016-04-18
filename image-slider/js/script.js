$(document).ready(function() {

	// Config
	var width = 720,
			speed = 1000,
			duration = 3000;

	// Prevent jquery from requerying the dom for the element
	var $slider = $('#slider');
			$slideContainer = $slider.find('.slides');
			$slides = $slideContainer.find('.slide');

	// Set an interval
	setInterval(function() {
		$slideContainer.animate({'margin-left': '-=' + width}, speed); // Animate margin-left
	}, duration);
	// On the last slide, go to position 1. Add a callback
	// On mouse-enter, pause the animation
	// Resume the animation after the mouse-leave
})