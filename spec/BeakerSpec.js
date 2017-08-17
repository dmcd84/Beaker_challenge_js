'use strict';

describe('Beaker', function() {
  var beaker;

  beforeEach( function() {
    beaker = new Beaker();
  });

  it('starts being empty', function(){
    expect(beaker.currentVolume).toEqual(0);
  });
});
