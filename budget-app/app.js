/* 

This will be a small budget application built 
with the module design pattern

*/

var budgetController = (function () {

	// Private Variable
	var x = 24;

	// Private Method
	var add = function(a) {
		return x + a;
	}

	return {
		// Public Method
		calculate: function(b) {
			return add(b);
		}
	}

})();

var viewController = (function() {



})();

var appController = (function(budgetC, viewC) {

	var addItem = function() {
		console.log("testing")

	}

	document.querySelector('.addItem').addEventListener('click', addItem);

	document.addEventListener('keypress', function(event) {
		if (event.keyCode === 13) {
			addItem()
		}

	});


})(budgetController, viewController);