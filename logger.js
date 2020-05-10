const EventEmitter = require('events');
const uuid = require('uuid'); // Create random id's
const fs = require('fs');
const path = require('path');

// console.log(uuid.v4());

class Logger extends EventEmitter {
	log (msg) {
		// Call event
		let id = uuid.v4();
		this.emit('message', { id: id, msg }); // equivalent to this.emit('message', { id: uuid.v4(), msg: msg });

		// Log to file
		fs.appendFile(
			path.join(__dirname, '/reference/test', 'log.txt'), 
			(`${id}: ${msg} \n`),
		    err => {
				if (err) throw err;
				console.log('Message written to log file.');
		});
	}
}

module.exports = Logger;

// const Logger = require('./logger');

// const logger = new Logger();
// logger.on('message', (data) => console.log('Called listener: ', data));

// logger.log('Test message');
// logger.log('Another message');
// logger.log('What is this!');
