$(document).ready(function() {

	// Config
	var width = 720,
			speed = 1000,
			duration = 3000,
			currentSlide = 1;

	// Prevent jquery from requerying the dom for the element
	var $slider = $('#slider'),
			$slideContainer = $slider.find('.slides'),
			$slides = $slideContainer.find('.slide'),

			interval; // Defining this here so I can use in both functions

	// Set an interval
	function startSlider() {
		interval = setInterval(function() {
			$slideContainer.animate({'margin-left': '-=' + width}, speed, function() {
				currentSlide++;
				if (currentSlide === $slides.length) {
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, duration);
	}
	
	function stopSlider() {
		clearInterval(interval);
	}

	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

	startSlider();
});