/* `const http = require('http');` is importing the built-in Node.js `http` module. This module
provides functionality to create HTTP servers and make HTTP requests. By requiring the `http`
module, you can use its methods and properties in your code, such as creating an HTTP server using
`http.createServer()`. */
const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1> Hello Friend </h1>');
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1> Hello Kudo Shinichi </h1>');
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1> Hello Error');
        res.end();
    };
});

server.listen(3000, console.log('Here Url 3000'));