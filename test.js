import commonSequence from 'common-sequence'
import { strict as a } from 'assert'

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('two arrays, matches', function () {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [1, 2, 4, 5]
  const expected = [1, 2]
  const result = commonSequence(arr1, arr2)
  a.deepEqual(result, expected)
})

test.set('two arrays, no matches', function () {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [0, 2, 3, 4]
  const expected = []
  const result = commonSequence(arr1, arr2)
  a.deepEqual(result, expected)
})

test.set('two iterables, matches', function () {
  const arr1 = new Set([1, 2, 3, 4])
  const arr2 = new Set([1, 2, 4, 5])
  const expected = [1, 2]
  const result = commonSequence(arr1, arr2)
  a.deepEqual(result, expected)
})

test.set('two iterables, no matches', function () {
  const arr1 = new Set([1, 2, 3, 4])
  const arr2 = new Set([0, 2, 3, 4])
  const expected = []
  const result = commonSequence(arr1, arr2)
  a.deepEqual(result, expected)
})

test.set('four strings, matches', function () {
  const expected = [' ', ' ']
  const result = commonSequence('  one', '      two', '  three', '    f  o  u  r')
  a.deepEqual(result, expected)
})

export { test, only, skip }
