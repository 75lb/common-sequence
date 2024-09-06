import commonSequence from 'common-sequence'
import { strict as a } from 'assert'

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('.commonSequence()', function () {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [1, 2, 4, 5]
  const expected = [1, 2]
  const result = commonSequence(arr1, arr2)
  a.deepEqual(result, expected)
})

test.set('.commonSequence() 2', function () {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [0, 2, 3, 4]
  const expected = []
  const result = commonSequence(arr1, arr2)
  a.deepEqual(result, expected)
})

export { test, only, skip }
