const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const arr = [5, 2, 3];
    expect(_.contains(arr, 2)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const arr = [1, 2, 3];
    expect(_.contains(arr, 477294729)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const obj = {1:1, 2:2, 3:3};
    expect(_.contains(obj, 2)).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
     const obj = {1:1, 2:2, 3:3};
    expect(_.contains(obj, 11)).toBe(false);
  });

});