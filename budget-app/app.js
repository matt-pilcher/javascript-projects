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
			console.log(add(b));
		}
	}

})();