const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([1, 2])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const obj = {1: 1, length: 2};
    expect(_.isArrayLike(obj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const obj = {1: 1, 2: 2};
    expect(_.isArrayLike(obj)).toBe(false);
  });
});
