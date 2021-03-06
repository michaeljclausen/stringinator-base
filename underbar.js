// Returns the given value. Seems pointless perhaps but see its use below for providing a default, no-op callback.
const identity = function(val) {
  return val;
};

// Returns the first n elements of the given array.
const first = function(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
};

// Returns the last n elements of the given array.
const last = function(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(array.length - n, array.length);
};

// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
const indexOf = function(array, target, fromIndex=0) {
  for (let i = fromIndex; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

const isArrayLike = function(obj) {
  if (Array.isArray(obj)) return true;
  return obj.hasOwnProperty('length') && obj.length >= 0;
};

// The cornerstone of a functional library -- iterate all elements, pass each to a callback function.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const each = function(obj, callback=identity) {
  if (isArrayLike(obj)) {
    for (let index = 0; index < obj.length; index++) {
      callback(obj[index], index, obj);
    }
  } else {
    for (let key in obj) {
      callback(obj[key], key, obj);
    }
  }
};

// Return the results of applying the callback to each element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const map = function(obj, callback=identity) {
  let result = [];
  each(obj, function(element, index, obj) {
    result.push(callback(element, index, obj));
  });
  return result;
};

// Return an array of the values of a certain property in the collection.
// E.g. given an array of people objects, return an array of just their ages.
const pluck = function(obj, key) {
  return map(obj, item => item[key]);
};

// Reduces collection to a value which is the accumulated result of running
// each element through the callback, where each successive
// invocation is supplied the return value of the previous invocation. If `accumulator`
// is not given, the first element of the collection is used as the initial
// value. The callback is invoked with four arguments:
// (accumulator, value, index|key, collection).
const reduce = function(obj, callback=identity, initialValue) {
  let accumulator = initialValue;
  let initialize = accumulator === undefined; 
  each(obj, function(element, index, obj){
    if (initialize) {
      accumulator = element;
      initialize = false;
    } else {
      accumulator = callback(accumulator, element, index, obj);
    }
  });
  return accumulator;
};

// Return true if the object contains the target.

const contains = function(obj, target) {
  return reduce(obj, (wasFound, element) => {
    return wasFound || element === target;
  }, false);
};

// Return true if all the elements / object values are accepted by the callback.
const every = function(obj, callback=identity) {
  return reduce(obj, (allPassed, element) => {
    return allPassed && !!callback(element);
  }, true);
};

// Return true if even 1 element / object value is accepted by the callback.
const some = function(obj, callback=identity) {
  return reduce(obj, (allPassed, element) => {
    return allPassed || !!callback(element);
  }, false);
};

// Return an array with all elements / object values that are accepted by the callback.
const filter = function(obj, callback=identity) {
  let results = [];
  each(obj, element => {
    if (callback(element)) {
      results.push(element);
    }
  });
  return results;
};

// Return object without the elements / object values that were rejected by the callback.
const reject = function(obj, callback=identity) {
  let results = [];
  each(obj, element => {
    if (!callback(element)) {
      results.push(element);
    }
  });
  return results;
};

// De-duplicates (de-dups) the elements / object values.
const uniq = function(obj) {
  const foundItems = {};
  return filter(obj, item => {
    return !(item in foundItems) && (foundItems[item] = true);
  });
};



module.exports = {
  contains: contains,
  each: each,
  every: every,
  filter: filter,
  first: first,
  identity: identity,
  indexOf: indexOf,
  isArrayLike,
  last: last,
  map: map,
  pluck: pluck,
  reduce: reduce,
  reject: reject,
  some: some,
  uniq: uniq
};
