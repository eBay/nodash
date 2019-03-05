/*************************************************************
Copyright 2018-2019 eBay Inc.
Author/Developer: Scott Davis

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
************************************************************/

'use strict';

// most of this is copied/altered from lodash

// NOTE for simplicity, we only built this to support what we need. It does not support:
// - Buffers
// - TypedArrays

const isPrototype = value => {
    const Ctor = value && value.constructor;
    const proto = (typeof Ctor === 'function' && Ctor.prototype) || Object.prototype;

    return value === proto;
};

const isEmpty = value => {
    // type coercion, so includes undefined, etc.
    if (value == null) { // eslint-disable-line eqeqeq
        return true;
    }

    if (typeof value !== 'function' && typeof value.length === 'number') {
        return !value.length;
    }

    if (typeof value.size === 'number') {
        return !value.size;
    }

    if (isPrototype(value)) {
        return !Object.keys(value).length;
    }

    for (const key in value) {
        if (hasOwnProperty.call(value, key)) {
            return false;
        }
    }

    return true;
};

module.exports = isEmpty;
