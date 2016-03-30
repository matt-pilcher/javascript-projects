$(document).ready(function() {
	// Creates a grid of divs for the screen
    for(var x = 0; x < 60; x++) {
        for(var y = 0; y < 40; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#screen');
        }
    }
    // Changes the color of the each unit when the mouse passes over
    $('.unit').mouseenter(function() {
    	$(this).css('background', '#666');
    });

    $('button').click(function() {
        $('.unit').css('background', '#fff');
    });
});