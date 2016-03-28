// Select all of the needed elements after the html is finished loading
window.onload = function () {
  var buttons = document.getElementsByTagName('span'),
      result = document.querySelectorAll('.result')[0],
      clear = document.getElementsByClassName('clear')[0];
  
  for (var i = 0; i < buttons.length; i++) {
    // Loop through the buttons and add a value or calculate the total
     
    if (buttons[i].innerHTML === '=') {
      buttons[i].addEventListener("click", calculate(i));
    } else {
      buttons[i].addEventListener("click", addValue(i));
    }
  }
  // Clear the results
  clear.onclick = function () {
    result.innerHTML = '';
  };  
  
  function addValue(i) {
    return function () {
      // Replace the '÷' and 'x' symbols with calculable values
      
      if (buttons[i].innerHTML === '÷') {
         result.innerHTML  += '/';
      } else if (buttons[i].innerHTML === 'x') {
         result.innerHTML  += '*';
      } else {
					result.innerHTML += buttons[i].innerHTML;
			}
    };
  }
  
  function calculate(i) {
    return function () {
			var total = result.innerHTML;
			// Should I use 'eval' here?
      result.innerHTML = eval(total);
    };
  }
};