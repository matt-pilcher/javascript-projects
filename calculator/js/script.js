window.onload = function () {
  var buttons = document.getElementsByTagName('span'),
      result = document.querySelectorAll('.result')[0],
      clear = document.getElementsByClassName('clear')[0];
};

for (var i = 0; i < buttons.length; i += 1) {
  // Loop through all the buttons to add onclick-event
 
  if (buttons[i].innerHTML === '=') {
    buttons[i].addEventListener("click", calculate(i));
  } else {
    buttons[i].addEventListener("click", addValue(i));
  }
};

function addValue(i) {
  return function () {
    // Replace the '÷' and 'x' symbols with calculable values
 
    if (buttons[i].innerHTML === '÷') {
       result.innerHTML  += '/';
    } else if (buttons[i].innerHTML === 'x') {
       result.innerHTML  += '*';
    } else {
       result.innerHTML  += buttons[i].innerHTML; 
    }
  };
}