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

    // Reset the screen
    $('button').click(function() {
        history.go(0);
        /* There's a better solution here than just reloading the page
        but I'm tired so this will have to work for now */

    });
});