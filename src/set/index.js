/** ***********************************************************
Copyright 2018-2019 eBay Inc.
Author/Developer: Scott Davis

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
************************************************************/

'use strict';

const { getPathArray } = require('../getPathArray');

// where path is an array of property names
const set = function(obj, path, value) {
    const paths = getPathArray(path);
    let i;
    // loop till last value in the path array
    for (i = 0; i < paths.length - 1; i++) {
        if (!obj.hasOwnProperty(paths[i])) {
            obj[paths[i]] = typeof paths[i] === 'number' ? [] : {};
        }

        obj = obj[paths[i]]; // eslint-disable-line no-param-reassign
    }

    // once we have the last path value, we use it to set the value
    obj[paths[i]] = value;
};

module.exports = set;
