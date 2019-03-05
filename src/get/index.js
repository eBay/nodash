/** ***********************************************************
Copyright 2018-2019 eBay Inc.
Author/Developer: Scott Davis

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
************************************************************/

'use strict';

const { getPathArray } = require('../getPathArray');

const get = function(obj, path, defaultValue) {
    if (!path) return defaultValue;

    const paths = getPathArray(path);

    for (let i = 0; i < paths.length; i++) {
        try {
            if (obj[paths[i]] === undefined) {
                obj = defaultValue; // eslint-disable-line no-param-reassign
                break;
            }
        } catch (e) {
            obj = defaultValue; // eslint-disable-line no-param-reassign
            break;
        }

        obj = obj[paths[i]]; // eslint-disable-line no-param-reassign
    }

    return obj;
};

module.exports = get;
