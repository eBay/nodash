/*************************************************************
Copyright 2018-2019 eBay Inc.
Author/Developer: Scott Davis

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
************************************************************/

'use strict';

const cache = {};

const getPathArray = (path) => {
    if (cache[path]) return cache[path];

    let pathArray;
    if (typeof path === 'string') {
        pathArray = path.split('.').reduce((acc, el) => {
            // '['0'].foo[4]'
            // [ '[0]', 'foo[4]'    ]
            // [ '0]',  'foo', '4]' ]
            // [ '0',   'foo', '4'  ]
            return acc.concat(el.replace(/["']/g, "").split('[').filter(i => i !== '').map(i => i.replace(']', '')));
        }, []);
    }

    // also memoize for better performance
    return cache[path] = pathArray || path;
};

module.exports = {
    getPathArray,
    privates: {
        cache
    }
};
