/* This JavaScript code snippet is creating a simple HTTP server using Node.js. Here's a breakdown of
what the code is doing: */
/* The line `const http = require('http');` in the JavaScript code snippet is importing the built-in
Node.js module 'http'. This module provides functionality to create HTTP servers and clients in
Node.js. By requiring the 'http' module, the code gains access to methods and properties that allow
it to create an HTTP server using Node.js. */
const http = require('http');
/* This code snippet is creating a simple HTTP server using Node.js. The `http.createServer()` method
is used to create an HTTP server object. Inside the callback function passed to
`http.createServer()`, the code checks the `req.url` property of the request object to determine the
URL path that the client is requesting. */
const server = http.createServer((req, res) => {
    /* The code snippet `if (req.url === '/') {
            res.end('Hello Home Page');
            return;
        };` is checking if the URL path requested by the client is the root path ("/"). If the URL path
    is "/", it sends the response "Hello Home Page" to the client using `res.end()`, which ends the
    response process. The `return;` statement is used to exit the callback function and prevent further
    execution of code for other URL paths. */
    if (req.url === '/') {
        /* The code `res.end('Hello Home Page'); return;` is sending the response "Hello Home Page" to
        the client and then immediately exiting the callback function. The `res.end()` method is
        used to send the response data to the client, and the `return;` statement is used to exit
        the callback function and prevent further execution of code for other URL paths. */
        res.end('Hello Home Page');
        return;
    };
    /* The code block `if (req.url === '/shop') { ... }` is checking if the URL path requested by the
    client is "/shop". If the condition is true, the code inside the block is executed. */
    if (req.url === '/shop') {
        /* The code snippet `for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                console.log(` `);
            }
        }` is a nested loop that iterates over two variables `i` and `j`. */
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end('Shop Page');
        return;
    }
    res.end('Error Page');
});

/* The `server.listen(5000, () => { console.log('Server 5000'); });` code snippet is setting up the
HTTP server to listen on port 5000. When the server is successfully started and listening on port
5000, the callback function `() => { console.log('Server 5000'); }` is executed, which logs the
message 'Server 5000' to the console. This message serves as an indication that the server has
started and is listening on port 5000. */
server.listen(5000, () => {
    console.log('Server 5000');
});