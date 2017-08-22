'use strict';

describe('Puzzle', function() {
  var puzzle;

  beforeEach(function(){
    puzzle = new Puzzle(3,5);
  })

  it('to require two beakers on initiation', function(){
    expect(puzzle.beaker1).toBeDefined();
    expect(puzzle.beaker2).toBeDefined();
  })

});
