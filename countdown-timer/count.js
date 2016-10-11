// Change this date to the prefered deadline
var date = '2016-11-01';


function remainingTime(deadline) {
  var total = Date.parse(deadline) - Date.parse(new Date()); // Parse method returns milliseconds since 1970-01-01
  var seconds = Math.floor( (total/1000) % 60 ); // Don't want the total amount of seconds just the remainder. Use modulo
  var minutes = Math.floor( (total/1000/60) % 60 );
  var hours = Math.floor( (total/(1000*60*60)) % 24 );
  var days = Math.floor( total/(1000*60*60*24) );

  return {
    'total': total,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds,
  };
}

function initializeCounter(id, deadline) {
  var counterDiv = document.getElementById(id); // This var keeps the function from repeatedly querying the dom
  var timer = setInterval(function() {
    var n = remainingTime(deadline);
    counterDiv.innerHTML = 'Days: ' + n.days + '<br>' +
                        'Hours: '+ n.hours + '<br>' +
                        'Minutes: ' + n.minutes + '<br>' +
                        'Seconds: ' + n.seconds;
    // Stop the timer after reaching the date
    if(n.total <= 0) {
      clearInterval(timer);
    }
  },1000); // 1000 milliseconds == 1 second
}

initializeCounter('counter', date);
