/** ***********************************************************
Copyright 2018-2019 eBay Inc.
Author/Developer: Scott Davis

Use of this source code is governed by an MIT-style
license that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
************************************************************/

'use strict';

// will invoke the callback no more than once every threshold. Does NOT do a "trailing" call, where the last invocation will
// get executed after the threshold, even though the function is not being triggered anymore. For example, if throttling
// scroll event for 500ms, after you stop scrolling, it would fire one more time after 500ms has passed.
module.exports = (callback, threshhold = 250) => {
    let last;
    return (...args) => {
        const now = Date.now();
        if (!last || now > last + threshhold) {
            // threshold has passed
            last = now;
            callback(...args);
        }
    };
};
