const EventEmitter = require('events');

class MyEmitter extends EventEmitter {  }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!')); // Listener with callback

// Init event
myEmitter.emit('event');
myEmitter.emit('event');