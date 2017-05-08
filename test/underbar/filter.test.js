const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(_.filter(arr, num => num % 2 === 1)).toEqual([1, 3, 5]);
  });

  it('filters an object to only numeric values', () => {
    const obj = {1: 'bannana', 2: 2, 3: 3, 4: 'toothpaste'};
    expect(_.filter(obj, value => typeof value === 'number')).toEqual([2, 3]);
  });
});