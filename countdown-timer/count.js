// Change this date to the prefered deadline
var date = '2016-10-24';

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
  var counter = document.getElementById(id); // This var keeps the function from repeatedly querying the dom

  var days = counter.querySelector('.days');
  var hours = counter.querySelector('.hours');
  var minutes = counter.querySelector('.minutes');
  var seconds = counter.querySelector('.seconds');


  function updateCounter() {
    var n = remainingTime(deadline);

    days.innerHTML = n.days;
    hours.innerHTML = n.hours;
    minutes.innerHTML = n.minutes;
    seconds.innerHTML = n.seconds;

    // Stop the timer after reaching the date
    if(n.total <= 0) {
      clearInterval(timer);
    }
  }

  updateCounter(); 
  var timer = setInterval(updateCounter,1000);
}

initializeCounter('counter', date);