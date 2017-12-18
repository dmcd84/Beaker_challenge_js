function Beaker(capacity) {
  this.currentVolume = 0;
  this.capacity = parseInt(capacity);
}

Beaker.prototype.fillBeaker = function(){
  this.currentVolume = this.capacity
}

Beaker.prototype.emptyBeaker = function(){
  this.currentVolume = 0;
}

// module.exports = Beaker;
