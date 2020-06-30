import { HungryBear } from './../src/hungry-bear.js';

describe('HungryBear', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy");
    fuzzy.setHunger();
    fuzzy.setMood();
    fuzzy.setHug();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    // after 1000 miliseconds fuzzy.foodLevel minus 1
    expect(fuzzy.foodLevel).toEqual(7);
  });

  test('should get very hungry if the food level drops below zero', () => {
    fuzzy.foodLevel = 0;
    // set up the conditions for our expect statement to run properly
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 10 seconds pass without feeding', () => {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', () => {
    jest.advanceTimersByTime(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test('should have a mood level of 20', () => {
    expect(fuzzy.moodLevel).toEqual(20);
  });

  test('should have a mood level of 17 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.moodLevel).toEqual(17);
  });

  test('should get very angry if mood level drops to zero', () => {
    fuzzy.moodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should have a mood level of 20 if it is happy', () => {
    jest.advanceTimersByTime(9001);
    fuzzy.scratch();
    expect(fuzzy.moodLevel).toEqual(20);
  });

  test('should get a hug level drops to zero', () => {
    fuzzy.hugLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });
  
  test('should have a hug level of 30 after 4001 milleseconds', () => {
    jest.advanceTimersByTime(4001);
    expect(fuzzy.hugLevel).toEqual(26);
  });

});
