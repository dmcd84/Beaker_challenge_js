function Beaker(capacity) {
  this.currentVolume = 0;
  this.capacity = capacity;
}

Beaker.prototype.fillBeaker = function(){
  this.currentVolume = this.capacity
}
