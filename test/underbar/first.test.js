const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    const arr = [1, 2, 3];
    expect(_.first(arr)).toBe(1);
  });

  it('returns the first 2 elements of an array', () => {
    const arr = [1, 2, 3];
    expect(_.first(arr, 2)).toEqual([1, 2]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const arr = [1, 2, 3];
    expect(_.first(arr, 10)).toEqual([1, 2, 3]);
  });
});