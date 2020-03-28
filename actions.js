$(document).ready(function() {
  // timer
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
  // answer check
  var userGuess = "";
  var correct = "Correct!";
  var wrong = "Wrong!";
  var answer = $("#right");
  $(".choice").click(function() {
    userGuess = $(this).attr("id");
    console.log(userGuess);
    if (userGuess === "right") {
      $("#answer").text(correct);
    } else {
      $("#answer").text(wrong);
    }
  });
  // $("#a1").click(function() {
  //   $("#answer").text(correct);
  // });
  // $("#w1").click(function() {
  //   $("#answer").text(wrong);
  // });
  // $("#a2").click(function() {
  //   $("#answer2").text(correct);
  // });
  // $("#w2").click(function() {
  //   $("#answer2").text(wrong);
  // });
  // $("#a3").click(function() {
  //   $("#answer3").text(correct);
  // });
  // $("#w3").click(function() {
  //   $("#answer3").text(wrong);
  // });
});
