$(document).ready(function() {
		//Creates a grid of divs for the screen
    for(var x = 0; x < 40; x++) {
        for(var y = 0; y < 40; y++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('#screen');
        }
    }
});