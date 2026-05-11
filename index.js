import arrayBack from 'array-back'
import { isIterable } from 'typical'

/**
 * Returns an array containing the initial items which all supplied iterables have in common.
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
 * @param a {Array} - first iterable to compare
 * @param b {Array} - second iterable to compare
 * @param ...n {Array} - nth iterable to compare
 * @returns {Array}
 * @alias module:common-sequence
 */
function commonSequence () {
  const args = arrayBack(arguments)
  if (args.length === 0) {
    return []
  } else if (!args.every(a => isIterable(a))) {
    throw new Error('Every arg supplied to commonSequence() must be an iterable')
  }
  const result = []
  const allInputs = args.map(arg => Array.from(arg))
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
