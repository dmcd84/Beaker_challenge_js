'use strict';

describe('Puzzle', function() {
  var puzzle;

  beforeEach(function(){
    puzzle = new Puzzle(3,5,4);
  })

  it('to require two beakers on initiation', function(){
    expect(puzzle.beaker1).toBeDefined();
    expect(puzzle.beaker2).toBeDefined();
  })

  it('will have a target volume on initiation', function(){
    expect(puzzle.target).toBeDefined();
  })

  it('can pour from beaker one into beaker two', function(){
    puzzle.beaker1.fillBeaker();
    puzzle.pour(puzzle.beaker1, puzzle.beaker2)
    expect(puzzle.beaker2.currentVolume).toEqual(3);
    expect(puzzle.beaker1.currentVolume).toEqual(0);
  })

  it('can pour back into beaker two into beaker one', function(){
    puzzle.beaker1.fillBeaker();
    puzzle.pour(puzzle.beaker1, puzzle.beaker2)
    puzzle.pour(puzzle.beaker2, puzzle.beaker1)
    expect(puzzle.beaker2.currentVolume).toEqual(0);
    expect(puzzle.beaker1.currentVolume).toEqual(3);
  })

  it('can check volume of beakers against target', function(){
    puzzle.beaker1.fillBeaker();
    puzzle.pour(puzzle.beaker1, puzzle.beaker2)
    puzzle.pour(puzzle.beaker2, puzzle.beaker1)
    expect(puzzle.matchTargetCheck(puzzle.beaker1)).toEqual(false);
    expect(puzzle.matchTargetCheck(puzzle.beaker2)).toEqual(false);
  })
});
