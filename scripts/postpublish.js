'use strict';

const del = require('del');

const files = [
    'index.js',
    'getPathArray.js'
];

const directories = [
    'cloneDeep',
    'get',
    'has',
    'isEmpty',
    'isEqual',
    'partial',
    'partialRight',
    'set',
    'throttle'
];

const pathPrefix = `${ __dirname }/..`;

del.sync(files.map(file => `${pathPrefix}/${ file }`));
del.sync(directories.map(dir => `${pathPrefix}/${ dir }`));
