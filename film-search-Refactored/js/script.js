var movieList = {
	movies: [],

	init: function() {
		// request = this.request;
		// test = this.request;
		// this.apiCall();

	},

	apiCall: function() {
		let request, test;

		request = new XMLHttpRequest();
		request.open('GET', 'https://www.omdbapi.com/?s=lion+king&apikey=6e2e4f34', false);
		request.send();
		test = JSON.parse(request.response);
		this.movies.push(test.Search);
	}

}

var movieController = {
	init: function() {
		movieList.apiCall();
	},

	getMovies: function() {
		return movieList.movies;
	}
}

var movieView = {

	displayMovies: function() {
		let json, i, temp

		temp = movieController.getMovies();
		json = temp[0]

		for (i = 0; i < json.length; i++) { 
    	this.viewTest(json[i].Title, json[i].Year)
		}
	},

	viewTest: function(Title, Year) {
		document.write(Title);
		document.write(Year);
	}

}


movieController.init();