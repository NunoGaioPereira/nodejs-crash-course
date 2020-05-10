const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
// 	if (err) throw err;
// 	console.log('Folder created...');
// }); // asynchronous by default, takes a callback


// Create and write to file
// second parameter is content you want to write
// fs.writeFile(
// 	path.join(__dirname, '/test', 'hello.txt'), 
// 	'Hello World!',
//     err => {
// 		if (err) throw err;
// 		console.log('File written to');

// 		// Append to file without overdifing
// 		fs.appendFile(
// 			path.join(__dirname, '/test', 'hello.txt'), 
// 			' Yes!',
// 		    err => {
// 				if (err) throw err;
// 				console.log('File written to');
// 		});
// });

// Read
// Second parameter is encoding
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// }); 


// Rename file
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hellobob.txt'), (err) => {
// 	if (err) throw err;
// 	console.log("File renamed.");
// }); 