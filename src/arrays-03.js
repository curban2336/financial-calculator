
/*
 * arrays-03.js
 * Language: javascript
 * Test: tests/arrays-03.test.js
 * Path: src/arrays-03.js
 *
 * Description: Challenges using various array methods.
 *
 * Concepts:
 *  - Utilizes forEach, map, filter, find, sort, join, reverse, and concat.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * Returns the sum of all numbers in an array.
 * @param {Array<number>} arr - An array of numbers.
 * @returns {number} The sum.
 */
function addUpArrayElements(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
  // HINT: Use a loop (for or forEach) to sum the elements.
}

/**
 * Returns a new array with each number squared.
 * @param {Array<number>} arr - An array of numbers.
 * @returns {Array<number>} A new array with squared values.
 */
function makeSquareNumbers(arr) {
  let array = arr.map(item => item * item);
  return array;
  // HINT: Use the map() method.
}

/**
 * Filters an array of words, returning only those longer than a given length.
 * @param {Array<string>} arr - An array of words.
 * @param {number} length - The minimum length.
 * @returns {Array<string>} The filtered array.
 */
function filterForLargeWords(arr, length) {
  let array = arr.filter(item => item.length > length);
  return array;
}

/**
 * Returns the first even number found in an array.
 * @param {Array<number>} arr - An array of numbers.
 * @returns {number|undefined} The first even number or undefined.
 */
function findTheFirstEvenNumber(arr) {
  let array = arr.filter(item => item % 2 === 0);
  return array[0];
}

/**
 * Sorts an array of words in ascending, case-sensitive order.
 * @param {Array<string>} arr - An array of words.
 * @returns {Array<string>} The sorted array.
 */
function sortCaseSensitive(arr) {
  let array = [...arr];
  return array.sort();
  // HINT: Create a shallow copy and then use sort().
}

/**
 * Joins an array of words into a string using a specified separator.
 * @param {Array} arr - The array of words.
 * @param {string} separator - The separator.
 * @returns {string} The resulting string.
 */
function makeTheString(arr, separator) {
  return arr.join(separator);
}

/**
 * Returns a new array with the elements reversed.
 * @param {Array} arr - The original array.
 * @returns {Array} The reversed array.
 */
function reverseTheArray(arr) {
  let array = [...arr];
  array = array.reverse();
  return array;
}

/**
 * Creates a mirror array by appending a reversed copy of the original array.
 * For example, [1, 2, 3] becomes [1, 2, 3, 2, 1].
 * @param {Array} arr - The original array.
 * @returns {Array} The mirror array.
 */
function makeMirrorArray(arr) {
  let array = [...arr];
  array = array.splice(0, array.length - 1);
  array = array.concat(arr.reverse());
  return array;
  // HINT: Use slice (exclude the last element), reverse it, then concat.
}

/**
 * Creates a new array by dropping the last n elements.
 * @param {Array} arr - The original array.
 * @param {number} n - Number of elements to drop.
 * @returns {Array} The resulting array.
 */
function dropRight(arr, n) {
  if (n > arr.length) {
    return [];
  }
  else {
    return arr.slice(0, arr.length - n);
  }
}

/**
 * Creates a new array by dropping the first n elements.
 * @param {Array} arr - The original array.
 * @param {number} n - Number of elements to drop.
 * @returns {Array} The resulting array.
 */
function dropLeft(arr, n) {
  return arr.slice(n, arr.length);
  // HINT: Use slice() starting at index n.
}

/**
 * Checks whether an array contains a specific value.
 * @param {Array} arr - The array.
 * @param {*} val - The value to search for.
 * @returns {boolean} True if found, false otherwise.
 */
function checkArrayForValue(arr, val) {
  let array = arr.filter(item => item === val);
  if (array.length > 0) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = {
  addUpArrayElements,
  makeSquareNumbers,
  filterForLargeWords,
  findTheFirstEvenNumber,
  sortCaseSensitive,
  makeTheString,
  reverseTheArray,
  makeMirrorArray,
  dropRight,
  dropLeft,
  checkArrayForValue,
};
