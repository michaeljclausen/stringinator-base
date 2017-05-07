const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3];
    const square = function (num) {
      return num * num;
    }
    let result = _.map(arr, square);
    expect(result).toEqual([1, 4, 9]);
  });
});