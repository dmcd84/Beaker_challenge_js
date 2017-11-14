function Puzzle(beaker1, beaker2, target){
  this.beaker1 = new Beaker(beaker1);
  this.beaker2 = new Beaker(beaker2);
  this.target = target;
}

Puzzle.prototype.pour = function(from, into){
  var vol_spare = into.capacity - into.currentVolume;
  if (from.currentVolume > vol_spare) {
    from.currentVolume -= vol_spare
    into.currentVolume += vol_spare
  } else {
    into.currentVolume += from.currentVolume
    from.emptyBeaker();
  }
}

Puzzle.prototype.matchTargetCheck = function(beaker){
  return beaker.currentVolume == this.target ? true : false;
}
