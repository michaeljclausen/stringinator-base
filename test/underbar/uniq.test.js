const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const arr = [1, 0, 1, 1, 0, 1];
    expect(_.uniq(arr)).toEqual([1, 0]);
  });
});