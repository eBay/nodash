'use strict';

const execSync = require('child_process').execSync;

// run babel
execSync('./node_modules/.bin/babel src --out-dir ./ --copy-files');
