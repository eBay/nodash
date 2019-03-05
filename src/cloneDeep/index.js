/*************************************************************
Copyright 2018-2019 eBay Inc.
Author/Developer: Scott Davis

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
************************************************************/

'use strict';

const cloneDeep = (obj, clone = Array.isArray(obj) ? [] : {}) => {
    if (obj != null && typeof obj === 'object') { // eslint-disable-line eqeqeq
        for (const [key, val] of Object.entries(obj)) {
            clone[key] = cloneDeep(val);
        }
    } else {
        clone = obj; // eslint-disable-line no-param-reassign
    }

    return clone;
};

module.exports = cloneDeep;
