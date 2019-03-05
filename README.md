# nodash
Replacement for subset of lodash, with fraction of the size.

## Why?

Often, consumers of lodash use just a handful of the methods. Lodash makes this convenient by only requiring what you need:
```js
const get = require('lodash/get'); // or require('lodash.get') if installed
```
However, Lodash is optimized as an entire library, which is to say it makes heavy reuse of its own methods. So using `get` may require `baseGet`, which requires `castPath` and `toKey`, which then requires `isKey`, `stringToPath`, and `isSymbol`... and so forth. It keeps going for many more levels.

This ends up with a bundle size of over 7kb just for using `get`. While that becomes cheaper the more you use Lodash, if all you use is `get`, it remains quite expensive. The Nodash version of the same method weighs in at ~500b for comparison.

As such, this library is targeted for just those users that need a small subset of Lodash, and not the whole library. **It is not intended to be a replacement for Lodash**.

## Methods

Most methods are identical to Lodash. Some methods have partial support, to shed off edge cases for the sake of saving size. The API for all are otherwise identical to Lodash and can be a drop-in replacement in most cases.

Name | Same as Lodash? | Notes
--- | --- | ---
`get` | yes | `get(obj, 'path.to[0].value', defaultValue)`
`set` | yes | `set(obj, 'path.to[0].value', value)`
`has` | yes | `has(obj, 'path.to[0].value')`
`cloneDeep` | yes | `cloneDeep(obj)`
`isEmpty` | no | does not support TypedArray or Buffers. `isEmpty(value)`
`isEqual` | no | only does shallow comparison
`partial` | yes | `partial(func, param1, param2)`
`partialRight` | yes | `partialRight(func, param1, param2)`
`throttle` | no | does not support trailing call `throttle(func, 200)`

## License

Copyright 2018-2019 eBay Inc. <BR>
Author/Developer: Scott Davis

Use of this source code is governed by an MIT-style license that can be found in the LICENSE file or at https://opensource.org/licenses/MIT.

## Third Party Code Attribution and Licenses

This software contains code licensed by third parties.  In particular, see :
https://github.com/lodash/lodash/blob/master/LICENSE

Copyright JS Foundation and other contributors <https://js.foundation/>

Based on Underscore.js, copyright Jeremy Ashkenas,
DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>

This software consists of voluntary contributions made by many
individuals. For exact contribution history, see the revision history
available at https://github.com/lodash/lodash