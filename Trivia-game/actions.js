var number = 30;

var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;

  $(".timer").html("<h2>" + number + "</h2>");

  if (number === 0) {
    stop();

    alert("Time Up!");
  }
}

function stop() {
  clearInterval(intervalId);
}

run();
//_____________________________________________________________________

function userGuess() {
  alert("You lose!");
}
$("<td>").on("click", userGuess);
