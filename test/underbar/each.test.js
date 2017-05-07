const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = [1, 2, 3];
    let count = 0;
    const callback = function(element, index, array) {
       expect(element).toBe(array[index]);
       count++;
    }
    _.each(arr, callback);
    expect(count).toBe(3);

  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const obj = {1: 1, 2: 2, length: 3};
    let count = 0;
    const callback = function(element, index, obj) {
       expect(element).toBe(obj[index]);
       count++;
    }
    _.each(obj, callback);
    expect(count).toBe(3);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {1: 1, 2: 2, 3: 3};
    let count = 0;
    const callback = function(element, key, obj) {
       expect(element).toBe(obj[key]);
       count++;
    }
    _.each(obj, callback);
    expect(count).toBe(3);
  });
});

