'use strict';

describe('Beaker', function() {
  var beaker;

  beforeEach(function() {
    beaker = new Beaker(5);
  });

  it('starts being empty', function(){
    expect(beaker.currentVolume).toEqual(0);
  });

  it('takes a capacity on initiation', function(){
    expect(beaker.capacity).toEqual(5);
  });

  it('can be filled', function(){
    beaker.fillBeaker();
    expect(beaker.currentVolume).toEqual(5);
  })
});
