/*  
    I have removed the movie posters temporarily. The posters display fine when loading locally
    however when I run this site from a server, I recieve a 403 (forbidden) error. I'm assuming this
    is because IMDB blocks the direct linking of images from their site on other sites. 
*/

// Global var for content views
const head = '<div class="col-md-4 col-md-offset-4 well movie"><section>'
const foot = '</section></div>'

// Initializes variables to detect if continue to scroll and load
var results = 0;
var totalresults = 0;

// Initializes the hiding and displaying of the loading picture
$(document).ready(function () {
	var searching = false;

	// Displays and hides the loading div with loading pic based on ajax calls
	$('.loading').hide();
	$(document)
	    .ajaxStart(function() {
	    	searching = true;
	        $('.loading').show();
	    })
	    .ajaxStop(function() {
	    	searching = false;
	        $('.loading').hide();
	    });

	// Load the rest of the query after scrolling
	$(document).scroll(function(){
		if(scrolling(".movie:last-child")){
			console.log(results);
			if(results < totalresults){
				var title = document.getElementById('movietitle').value;
				ajaxInfo(title);
			}
		}
	});
});

// Detect when user scrolls to the bottom of the page
function scrolling(element){
	var docTop = $(window).scrollTop();
	var docBottom = docTop + $(window).height();

	var elemTop = $(element).offset().top;
	var elemBottom = elemTop + $(element).height();

	return((elemBottom <= docBottom) && (elemTop >= docTop));
}

// Search that will create the entries
function ajaxSearch(id){

	$.ajax({
 
    	// Request URL
    	url: "http://www.omdbapi.com/?i=" + id + "&r=json&apikey=6e2e4f34",
 
    	// Determine POST or GET request
    	type: "GET",
 
    	// Expected data
    	dataType : "json",
 
    	// Response is passed to the function
    	success: function(json) {
			createEntry(json); 	    	
    	},
 
    	// If request fails status codes are passed to the function
    	error: function( xhr, status, errorThrown ) {
    	    alert( "Sorry, there was a problem!" );
    	    console.log( "Error: " + errorThrown );
    	    console.log( "Status: " + status );
    	    console.dir( xhr );
    	},
 
    	// Regardless of success or failure
    	complete: function( xhr, status ) {
    	    console.log( "The request is complete!" );
    	}
	});
};

// Collect the title ids from the json request
function ajaxInfo(title){

	$.ajax({
 
    	url: "http://www.omdbapi.com/?s=" + title + "&type=movie&r=json",
    	type: "GET",
    	dataType : "json",

    	success: function(json) {
    	    console.log(json);
			if(json.Response == "False"){
    			var response = '<p>No movies found</p>';
    			$('.content').append(head + response + foot);
			}
			else {
				if(json.Search.length - results > 5)
					var max = 5;
				else
					var max = json.Search.length;
				

				for(var i= results; i < max; i++){
					console.log(json.Search[i]);
					ajaxSearch(json.Search[i].imdbID);
				}
				totalresults = json.Search.length;
				results = max;
			}

    	},
 
    	error: function( xhr, status, errorThrown ) {
    	    alert( "Sorry, there was a problem!" );
    	    console.log( "Error: " + errorThrown );
    	    console.log( "Status: " + status );
    	    console.dir( xhr );
    	},
 
    	complete: function( xhr, status ) {
    	    console.log( "The request is complete!" );
    	}
	});
};

// Data for appending to the body
function createEntry(data){
	var title = data.Title;
	var year = data.Year;
	var rating = data.Rated;
	var runtime = data.Runtime;
	var genre = data.Genre;
	var plot = data.Plot;
	var language = data.Language;
	var awards = data.Awards;
	var rating = data.imdbRating;
	if (data.Poster == 'N/A')
		var poster = "img/NA.jpg";
	else
		var poster = data.Poster;


	// Title and general information
    var header = '<header class="content-header">' + 
    				'<h2>' + title + '</h2>' + 
    				'<hr>' + 
    				'<p class="col-md-4"><strong>Year: </strong> <em>' + year + '</em></p>' + 
    				'<p class="col-md-4"><strong>Time:</strong> <em>' + runtime + '</em></p>' + 
    				'<p class="col-md-4"><strong>Rating: </strong> <em>' + rating + '</em></p>' +
    			'</header>';

    
    /* I have removed the movie posters temporarily. The posters display fine when loading locally
    however when I run this site from a server, I recieve a 403 (forbidden) error. I'm assuming this
    is because IMDB doesn't allow sites to hotlink. */
    var aside = '<div">' + 
    				'<aside class="temp removed">' + 
    				'</aside>';
    
    // Main body of the div in aside
    var body = '<div class="text-left">' + 
    		   		'<p><strong>Plot: </strong>' + plot + '</p>' +
       	       		'<p><strong>Genre: </strong>' + genre + '</p>' +
       	       		'<p><strong>Language: </strong>' + language + '</p>' +
       	       		'<p><strong>Awards: </strong>' + awards + '</p>' +
       	       '</div>'
       	     '</div>'
    
    $('.content').append(head + header + aside + body + foot);    	
};

// Start the search 
$('#moviesearch').submit(function(){
	$('.content').empty();
	results = 0;
	totalresults = 0;
	var title = document.getElementById('movietitle').value;
	ajaxInfo(title);
	return false;
});