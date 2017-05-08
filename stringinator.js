const _ = require('./underbar');

const first = function(str, n) {
  let result = _.first(str.split(''), n);
  return result.length > 1 ? result.join('') : result;
};

const last = function(str, n) {
  let result = _.last(str.split(''), n);
  return result.length > 1 ? result.join('') : result;
};

const removeChar = function(str, target) {
  let result = _.reject(str.split(''), letter => letter === target);
  return result.length > 1 ? result.join('') : result;
};

const hasChar = function(str, target) {
  return _.some(str.split(''), letter => letter === target);
};

const isOnlyDigits = function(str) {
  return _.every(str.split(''), character => character.charCodeAt(0) >= 48 && character.charCodeAt(0) <= 57);
};

const filterToOnlyDigits = function(str) {
  let result =  _.filter(str.split(''), character => character.charCodeAt(0) >= 48 && character.charCodeAt(0) <= 57);
  return result.join('');
};

const truncateString = function(val, maxLength) {
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  let results = [];
  _.each(obj, item => {
    results.push(truncateString(item, maxLength));
  });
  return results;
};

const countChars = function(str) {
  let results = {};
  let chars = str.split('');
  _.each(chars, letter => {
    results.hasOwnProperty(letter) ? results[letter]++ : results[letter] = 1;
  });
  return results;
};

const dedup = function(str) {
  // Your code goes here
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};