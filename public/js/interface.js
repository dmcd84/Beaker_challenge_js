$(document).ready(function(){
  $("#start-game").on('click', function() {
    console.log("New Game started");
     let puzzle = new Puzzle($("#beaker1input").val(),$("#beaker2input").val(),$("#target-input").val());
     $("#beaker1capacity").text(puzzle.beaker1.currentVolume);
     $("#beaker2capacity").text(puzzle.beaker2.currentVolume);
     
     $("#fill-1").on('click', function() {
       console.log("Filling beaker 1");
       puzzle.beaker1.fillBeaker();
       $("#beaker1capacity").text(puzzle.beaker1.currentVolume);
       $("#beaker2capacity").text(puzzle.beaker2.currentVolume);
     });

     $("#fill-2").on('click', function() {
       console.log("Filling beaker 2");
       puzzle.beaker2.fillBeaker();
       $("#beaker1capacity").text(puzzle.beaker1.currentVolume);
       $("#beaker2capacity").text(puzzle.beaker2.currentVolume);
     });

     $("#empty-1").on('click', function() {
       console.log("Emptying beaker 1");
       puzzle.beaker1.emptyBeaker();
       $("#beaker1capacity").text(puzzle.beaker1.currentVolume);
       $("#beaker2capacity").text(puzzle.beaker2.currentVolume);
     });

     $("#empty-2").on('click', function() {
       console.log("Emptying beaker 2");
       puzzle.beaker2.emptyBeaker();
       $("#beaker1capacity").text(puzzle.beaker1.currentVolume);
       $("#beaker2capacity").text(puzzle.beaker2.currentVolume);
     });

     $("#pour-into-1").on('click', function() {
       console.log("Pouring beaker 2 into beaker 1");
       puzzle.pour(puzzle.beaker2, puzzle.beaker1);
       $("#beaker1capacity").text(puzzle.beaker1.currentVolume);
       $("#beaker2capacity").text(puzzle.beaker2.currentVolume);
     });

     $("#pour-into-2").on('click', function() {
       console.log("Pouring beaker 1 into beaker 2");
       puzzle.pour(puzzle.beaker1, puzzle.beaker2);
       $("#beaker1capacity").text(puzzle.beaker1.currentVolume);
       $("#beaker2capacity").text(puzzle.beaker2.currentVolume);
     });
   });

})
