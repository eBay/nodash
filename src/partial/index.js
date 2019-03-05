/*************************************************************
Copyright 2018-2019 eBay Inc.
Author/Developer: Scott Davis

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
************************************************************/

'use strict';

const partial = (func, ...partialArgs) => {
    return (...args) => func(...partialArgs, ...args);
};

module.exports = partial;
