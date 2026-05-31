import arrayBack from 'array-back'
import { isIterable } from 'typical'

/*☭
## common-sequence

Returns an array containing the initial items which all supplied iterables have in common.

For example, it could tell you that the common ancestor path between `'/Users/lloyd/75lb/dmd'` and `'/Users/lloyd/75lb/array-tools'` is `'/Users/lloyd/75lb'`. Or that the common identation across a series of lines is four spaces.

#### Examples

```js
> pathA = '/Users/lloyd/Documents/75lb/dmd'.split('/');
> pathB = '/Users/lloyd/Documents/75lb/array-tools'.split('/');
> commonSequence(pathA, pathB).join('/');
'/Users/lloyd/Documents/75lb'
```

or a more trivial example:

```js
> commonSequence([ 1, 2, 3 ], [ 1, 2, 4 ])
[ 1, 2 ]
```

- **Type:** Package
- **Supported runtimes:** Node.Js >= v12
- **Module type:** JavaScript
- **Exports:** One synchronous function

*/

/*☭
### commonSequence

Returns the initial elements which both input iterables have in common.

- **Type:** `function`
- **Returns:** `Array`

¬
  Param
  Type
  Description
¬
  a
  `Iterable`
  first iterable to compare
¬
  b
  `Iterable`
  second iterable to compare
¬
  ...n
  `Iterable`
  nth iterable to compare
¬
*/

function commonSequence () {
  const iterables = arrayBack(arguments)
  if (!iterables.every(a => isIterable(a))) {
    throw new Error('Every arg supplied to commonSequence() must be an iterable')
  } else if (iterables.length <= 1) {
    return []
  }
  const result = []
  const allInputs = iterables.map(arg => Array.from(arg))
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
