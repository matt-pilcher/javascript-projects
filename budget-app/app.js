/* 

This will be a small budget application built 
with the module design pattern

*/

var budgetController = (function () {

	
})();

var viewController = (function() {

	// Adding all class names to this object
	var classList = {
		inputType: '.fund-type',
		inputDescription: '.fund-description',
		inputValue: '.fund-amount',
		inputSubmit: '.addFunds'
	};

	return {
		
		// Retrieve user input
		getInput: function() {
			return {
				fundType: document.querySelector(classList.inputType).value,
				fundDescription: document.querySelector(classList.inputDescription).value,
				fundValue: document.querySelector(classList.inputValue).value
			} 

		},

		// Makes the class list available to all controllers
		getClassList: function() {
			return classList;

		}
	}

})();

var appController = (function(budgetC, viewC) {
	
	// Retrieve class list from the view controller
	var classes = viewC.getClassList()
	
	// Retrieve input data from the view controller
	var addItem = function() {
		var input = viewC.getInput();
		console.log(input);
	}

	document.querySelector(classes.inputSubmit).addEventListener('click', addItem);

	document.addEventListener('keypress', function(event) {
		if (event.keyCode === 13) {
			addItem()
		}


	});


})(budgetController, viewController);