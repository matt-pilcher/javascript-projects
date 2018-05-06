var movieList = {
	movies: [],

	apiCall: function() {
		request = new XMLHttpRequest();
		request.open('GET', 'https://www.omdbapi.com/?s=lion+king&apikey=6e2e4f34', false);
		request.send();
		test = JSON.parse(request.response);
		this.movies.push(test.Search);
	},

	displayMovies: function() {
		json = this.movies[0];
		for (i = 0; i < json.length; i++) { 
    	this.viewTest(json[i].Title, json[i].Year)
		}
	},

	viewTest: function(Title, Year) {
		document.write(Title);
		document.write(Year);
	}

}