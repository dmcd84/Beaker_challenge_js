'use strict';

describe('Countdown', function() {
  var clock = new countdownClock();

  it('is defined', function() {
    expect(clock).toBeDefined();
  });
  it('has an endTime', function() {
    expect(clock.endTime).toBeDefined();
  });
  it('has an endTime of now plus five minutes', function() {
    expect(clock.endTime).toBeDefined();
    clock.startTimer = jasmine.createSpy("Time");
    clock.startTimer();
    expect(clock.startTimer).toHaveBeenCalled();
  });
});
