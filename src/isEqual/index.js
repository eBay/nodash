/** ***********************************************************
Copyright 2018-2019 eBay Inc.
Author/Developer: Scott Davis

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
************************************************************/

'use strict';

// NOTE this method only does a SHALLOW comparison, as opposed to lodash's implementation which does a deep comparison.
// This is because we only need a shallow comparison in our app.

const isEqual = (obj, comparison) => {
    // not the same number of keys, obviously not equal
    if (Object.keys(obj).length !== Object.keys(comparison).length) return false;

    // these have the same number of keys, so ensure they all equal each other
    return Object.keys(obj).every(prop => {
        return obj[prop] === comparison[prop];
    });
};

module.exports = isEqual;
