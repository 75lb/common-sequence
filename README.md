[![view on npm](https://badgen.net/npm/v/common-sequence)](https://www.npmjs.org/package/common-sequence)
[![npm module downloads](https://badgen.net/npm/dt/common-sequence)](https://www.npmjs.org/package/common-sequence)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/common-sequence)](https://github.com/75lb/common-sequence/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/common-sequence)](https://github.com/75lb/common-sequence/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/75lb/common-sequence/actions/workflows/node.js.yml/badge.svg)](https://github.com/75lb/common-sequence/actions/workflows/node.js.yml)

<a name="module_common-sequence"></a>

## common-sequence
Returns an array containing the initial items which all supplied iterables have in common.

For example, it could tell you that the common ancestor path between `'/Users/lloyd/75lb/dmd'` and `'/Users/lloyd/75lb/array-tools'` is `'/Users/lloyd/75lb'`. Or that the common identation across a series of lines is four spaces.

```js
> commonSequence = require('common-sequence');

> pathA = '/Users/lloyd/Documents/75lb/dmd'.split('/');
> pathB = '/Users/lloyd/Documents/75lb/array-tools'.split('/');

> commonSequence(pathA, pathB).join('/');
'/Users/lloyd/Documents/75lb'
```

or a more trivial example:
```js
> a.commonSequence([ 1, 2, 3 ], [ 1, 2, 4 ])
[ 1, 2 ]
```

<a name="exp_module_common-sequence--commonSequence"></a>

### commonSequence(a, b) ⇒ <code>Array</code> ⏏
Returns the initial elements which both input iterables have in common

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array</code> | first iterable to compare |
| b | <code>Array</code> | second iterable to compare |
| ...n | <code>Array</code> | nth iterable to compare |


### Load anywhere

This library is compatible with Node.js and the Web. It can be loaded anywhere, natively without transpilation.

Node.js CommonJS:

```js
const commonSequence = require('common-sequence')
```

Node.js ECMAScript Module:

```js
import commonSequence from 'common-sequence'
```

Within an modern browser ECMAScript Module:

```js
import commonSequence from './node_modules/common-sequence/index.js'
```

* * *

&copy; 2015-26 Lloyd Brookes \<opensource@75lb.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
