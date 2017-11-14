$(document).ready(function() {
  $("#start-game").on('click', function() {
    console.log("New Game started");
    let puzzle = new Puzzle($("#beaker1input").val(), $("#beaker2input").val(), $("#target-input").val());

    $.fn.updateBeakerVolume = function() {
      console.log('in update fn');
      $("#beaker1volume").text("Beaker 1 Current Volume:" + " " + puzzle.beaker1.currentVolume);
      $("#beaker2volume").text("Beaker 2 Current Volume:" + " " + puzzle.beaker2.currentVolume);
      $.fn.winState();
    };

    $.fn.winState = function() {
      var win = (puzzle.matchTargetCheck(puzzle.beaker1) == true || puzzle.matchTargetCheck(puzzle.beaker2) == true) ? true : false;
      $("body").css("background", (win == true) ? "lightgreen" : "yellow");
    }


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
  });
})
