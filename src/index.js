/*************************************************************
Copyright 2018-2019 eBay Inc.
Author/Developer: Scott Davis

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
************************************************************/

'use strict';

const get = require('./get');
const set = require('./set');
const has = require('./has');
const throttle = require('./throttle');
const partial = require('./partial');
const partialRight = require('./partialRight');
const isEqual = require('./isEqual');
const cloneDeep = require('./cloneDeep');

module.exports = {
    get,
    set,
    has,
    throttle,
    partial,
    partialRight,
    isEqual,
    cloneDeep
};
