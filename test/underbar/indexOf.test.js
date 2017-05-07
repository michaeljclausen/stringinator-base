const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = [1, 2, 3];
    expect(_.indexOf(arr, 1, 0)).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = [1, 2, 3];
    expect(_.indexOf(arr, 3, 0)).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    const arr = [1, 2, 3];
    expect(_.indexOf(arr, -11, 0)).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = [1, 2, 2];
    expect(_.indexOf(arr, 2, 0)).toBe(1);
  });

  it('starts searching at the given offset', () => {
    const arr = [1, 1, 1];
    expect(_.indexOf(arr, 1, 1)).toBe(1);
  });

});