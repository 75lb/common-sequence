const Tom = require('test-runner').Tom
const commonSequence = require('./')
const a = require('assert').strict

const tom = module.exports = new Tom('test')

tom.test('.commonSequence()', function () {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [1, 2, 4, 5]
  const expected = [1, 2]
  const result = commonSequence(arr1, arr2)
  a.deepEqual(result, expected)
})

tom.test('.commonSequence() 2', function () {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [0, 2, 3, 4]
  const expected = []
  const result = commonSequence(arr1, arr2)
  a.deepEqual(result, expected)
})
