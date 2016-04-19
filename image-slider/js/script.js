$(document).ready(function() {

	// Config
	var width = 720,
			speed = 1000,
			duration = 3000;
			currentSlide = 1;

	// Prevent jquery from requerying the dom for the element
	var $slider = $('#slider');
			$slideContainer = $slider.find('.slides');
			$slides = $slideContainer.find('.slide');

	// Set an interval
	setInterval(function() {
		$slideContainer.animate({'margin-left': '-=' + width}, speed, function() {
			currentSlide++;
			if(currentSlide === $slides.length) {
				currentSlide = 1;
				$slideContainer.css('margin-left', 0);
			}
		});
	}, duration);
	
	// On mouse-enter, pause the animation
	// Resume the animation after the mouse-leave
})