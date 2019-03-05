/*************************************************************
Copyright 2018-2019 eBay Inc.
Author/Developer: Scott Davis

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
************************************************************/

'use strict';

const { getPathArray } = require('../getPathArray');

const has = function(obj, path) {
    if (!path || !obj) return false;

    const paths = getPathArray(path);

    for (let i = 0; i < paths.length; i++) {
        if (!obj.hasOwnProperty(paths[i])) {
            return false;
        }

        obj = obj[paths[i]]; // eslint-disable-line no-param-reassign
    }

    return true;
};

module.exports = has;
