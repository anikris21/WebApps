const http = require('http')

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
let counter=0;
let cnt=0;

const testEvent = (args) => {
    args=args + cnt++;
    console.log('event fired with args - ', args);
    eventEmitter.emit('start', args);
}

eventEmitter.on('start', (args)=> {
    console.log(' => event start - args -', args);

});



const port = 4242;
const server = http.createServer((req, res) => {
    res.end('Hello World!\n');
});

server.listen(port, () => {
    console.log(`server running at ${port}...`);

    //it sets initial val of counter
    setInterval(testEvent, 5*1000, counter++);
})