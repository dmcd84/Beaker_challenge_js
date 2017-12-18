$(document).ready(function() {
  $("#start-game").on('click', function() {
    console.log("New Game started");
    let puzzle = new Puzzle($("#beaker1input").val(), $("#beaker2input").val(), $("#target-input").val());
    // let clock = new countdownClock();

    $.fn.updateBeakerVolume = function() {
      $("#beaker-vol-1").text(puzzle.beaker1.currentVolume);
      $("#beaker-vol-2").text(puzzle.beaker2.currentVolume);
      $.fn.winState();
    };

    $.fn.winState = function() {
      var win = (puzzle.matchTargetCheck(puzzle.beaker1) == true || puzzle.matchTargetCheck(puzzle.beaker2) == true) ? true : false;
      $("body").css("background", (win == true) ? "lightgreen" : "yellow");
      if (win == true){
        $('#winner').toggle();
        $(this).addClass('open');
        return false;
      }
    };

    $("#fill-1").on('click', function() {
      console.log("Filling beaker 1");
      puzzle.beaker1.fillBeaker();
      $.fn.updateBeakerVolume();
    });

    $("#fill-2").on('click', function() {
      console.log("Filling beaker 2");
      puzzle.beaker2.fillBeaker();
      $.fn.updateBeakerVolume();
    });

    $("#empty-1").on('click', function() {
      console.log("Emptying beaker 1");
      puzzle.beaker1.emptyBeaker();
      $.fn.updateBeakerVolume();
    });

    $("#empty-2").on('click', function() {
      console.log("Emptying beaker 2");
      puzzle.beaker2.emptyBeaker();
      $.fn.updateBeakerVolume();
    });

    $("#pour-into-1").on('click', function() {
      console.log("Pouring beaker 2 into beaker 1");
      puzzle.pour(puzzle.beaker2, puzzle.beaker1);
      $.fn.updateBeakerVolume();
    });

    $("#pour-into-2").on('click', function() {
      console.log("Pouring beaker 1 into beaker 2");
      puzzle.pour(puzzle.beaker1, puzzle.beaker2);
      $.fn.updateBeakerVolume();
    });
    // $("#minutes").html(minutes + "<span>Minutes</span>");
    // $("#seconds").html(seconds + "<span>Seconds</span>");
    // document.getElementById('timer').innerHTML = clock.setTimer();
    // clock.setTimer()
    // console.log(clock.endTime);
    // console.log(Date.parse(clock.timeleft));
  });
})
