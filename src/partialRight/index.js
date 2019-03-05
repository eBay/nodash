/** ***********************************************************
Copyright 2018-2019 eBay Inc.
Author/Developer: Scott Davis

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
************************************************************/

'use strict';

const partialRight = (func, ...partialArgs) => {
    return (...args) => func(...args, ...partialArgs);
};

module.exports = partialRight;
