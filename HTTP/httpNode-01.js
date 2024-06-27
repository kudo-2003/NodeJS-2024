/* This JavaScript code snippet is creating a simple HTTP server using Node.js. Here's a breakdown of
what each part of the code is doing: */
/* `const http = require('http');` is importing the built-in Node.js module 'http' and assigning it to
the constant variable `http`. This allows the code to use the functionalities provided by the 'http'
module to create an HTTP server. */
const http = require('http');

/* `const server = http.createServer();` is creating a new HTTP server instance using the
`createServer()` method provided by the 'http' module in Node.js. This method returns a new instance
of an HTTP server which can be used to handle incoming HTTP requests and send responses back to
clients. */
const server = http.createServer();

/* The code `server.on('request', (req, res) => { res.end('Xin Chao'); });` is setting up an event
listener on the HTTP server instance (`server`). When a new HTTP request is received by the server,
this listener will trigger the provided callback function. */
server.on('request', (req, res) => {
    res.end('Xin Chao');
});
console.log('5000')

/* The `server.listen(5000);` code is instructing the HTTP server instance (`server`) to start
listening for incoming HTTP requests on port 5000. By calling the `listen()` method with the port
number as an argument, the server will be bound to that specific port and will be able to handle
incoming requests from clients on that port. */
server.listen(5000);