const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
// 	if (err) throw err;
// 	console.log('Folder created...');
// }); // asynchronous by default, takes a callback

// Create and write to file
fs.writeFile(
	path.join(__dirname, '/test', 'hello.txt'), 
	'Hello World!',
    err => {
		if (err) throw err;
		console.log('File written to');

		// Append to file without overdifing
		fs.appendFile(
			path.join(__dirname, '/test', 'hello.txt'), 
			' Yes!',
		    err => {
				if (err) throw err;
				console.log('File written to');
		});
});
