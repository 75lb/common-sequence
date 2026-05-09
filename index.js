/**
 * Returns an array containing the initial elements which all supplied iterables have in common.
 *
 * For example, it could tell you that the common ancestor path between `'/Users/lloyd/75lb/dmd'` and `'/Users/lloyd/75lb/array-tools'` is `'/Users/lloyd/75lb'`. Or that the common identation across a series of lines is four spaces.
 *
 * ```js
 * > commonSequence = require('common-sequence');
 *
 * > pathA = '/Users/lloyd/Documents/75lb/dmd'.split('/');
 * > pathB = '/Users/lloyd/Documents/75lb/array-tools'.split('/');
 *
 * > commonSequence(pathA, pathB).join('/');
 * '/Users/lloyd/Documents/75lb'
 * ```
 *
 * or a more trivial example:
 * ```js
 * > a.commonSequence([ 1, 2, 3 ], [ 1, 2, 4 ])
 * [ 1, 2 ]
 * ```
 * @module common-sequence
 */


/**
 * Returns the initial elements which both input iterables have in common
 * @param {Array} - first iterable to compare
 * @param {Array} - second iterable to compare
 * @returns {Array}
 * @alias module:common-sequence
 */
function commonSequence () {
  const result = []
  const allInputs = Array.from(arguments).map(arg => Array.from(arg))
  const first = allInputs[0]
  const smallestInput = Math.min(...allInputs.map(i => i.length))
  for (var i = 0; i < smallestInput; i++) {
    if (allInputs.every(arr => arr[i] === first[i])) {
      result.push(first[i])
    } else {
      break
    }
  }
  return result
}

export default commonSequence
