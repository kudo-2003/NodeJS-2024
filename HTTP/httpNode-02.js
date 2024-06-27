/* This code snippet is creating a simple HTTP server using Node.js. Here's a breakdown of what it
does: */
const http = require('http');
/* This code snippet is creating a simple HTTP server using Node.js. The `http.createServer()` method
is used to create an HTTP server object. It takes a callback function with two parameters, `req`
(request) and `res` (response). */

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello Everyone ');
    } else if (req.url === '/about') {
        res.end('Xin Chao Moi Nguoi');
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
            `);
    }
});
console.log(5000)
server.listen(5000);