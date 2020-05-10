const path = require('path');

// Base file name
console.log(__filename); // entire path and then file name
console.log(path.basename(__filename)); // only file name

// Directory name
console.log(path.dirname(__filename));

// File Extension
console.log(path.extname(__filename));

// Create object with differnet part of the path
console.log(path.parse(__filename));
console.log(path.parse(__filename).base); // Access parts

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
