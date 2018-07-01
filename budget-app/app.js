/* 

This will be a small budget application built 
with the module design pattern.

*** Still need to add a method for appending values to the dom. The app controller
needs refactoring. I don't like the event listener setup. Need to complete the
design of the app as well. ***

*/

/*

// Initialize the app controller which calls the budget and view controllers
// The eventInit function asks the view to return the class list from the html and then adds an event listener to the button
// The view returns the user input values and the appController sends the data to the budget controller
// Function constructors create new objects from the user input
// The object is inserted into an array based on type
// The data object is private and stores all of the values

*/

var budgetController = (function () {

	var data = {
		itemList: {
			expense: [],
			income: []
		},

		results: {
			expense: 0,
			income: 0
		}
	}

	// Adding prototypes for these methods later

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;

	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;

	};

	return {
		addItem: function(type, des, val) {
			var newItem, ID;

			// Create a unique id for each item
			if (data.itemList[type].length > 0) {
				// Create new id based on the last in the array
				ID = data.itemList[type][data.itemList[type].length -1].id + 1;
			} else {
				ID = 0;
			}
			

			// Determine fund type
			if (type === 'expense') {
				newItem = new Expense(ID, des, val)
			} else if (type === 'income') {
				newItem = new Income(ID, des, val)
			}

			data.itemList[type].push(newItem)
			return newItem;

			
		},

		test: function() {
			console.log(data);
		}
	}
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

			// The query selector refrences the classList object
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

	var eventInit = function() {

		// Retrieve class list from the view controller
		var classes = viewC.getClassList()

		// Need to refactor this
		document.querySelector(classes.inputSubmit).addEventListener('click', addItem);
		document.addEventListener('keypress', function(event) {
			if (event.keyCode === 13) {
				addItem()
			}
		});
	}
	
	
	// Retrieve input data from the view controller
	var addItem = function() {
		var input, newItem;

		// Stores user input values
		input = viewC.getInput();
		
		newItem = budgetC.addItem(input.fundType, input.fundDescription, input.fundValue)
	}

	return {
		init: function() {
			console.log('Initializing');
			eventInit();
		}
	}
})(budgetController, viewController);

appController.init();

