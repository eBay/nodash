'use strict';

/** ***********************************************************
Copyright 2018-2019 eBay Inc.

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
************************************************************/

const castArray = (...args) => {
    if (!args.length) return [];

    const value = args[0];
    return Array.isArray(value) ? value : [value];
};

module.exports = castArray;
