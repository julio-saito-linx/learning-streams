'use strict';

// var fs = require('fs');
// var filePath = process.argv[2];
// var from = fs.createReadStream(filePath);

var from = process.stdin;

var destination = process.stdout;

from.pipe(destination);
