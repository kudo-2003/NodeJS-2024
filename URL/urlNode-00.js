/* `const http = require('http');` is importing the Node.js built-in module 'http'. This module allows
you to create an HTTP server and handle HTTP requests and responses in your Node.js application. In
this code snippet, it is used to create an HTTP server that listens for incoming requests on a
specified port (in this case, port 3000). */
const http = require('http');
/* `const url = require('url');` is importing the Node.js built-in module 'url'. This module provides
utilities for URL resolution and parsing. In this code snippet, it is used to parse the URL from the
incoming request in order to extract query parameters. */
const url = require('url');
const server = http.createServer((req, res) => {
    if (
        /* `req.method === 'GET'` is a conditional check that is evaluating whether the HTTP method of
            the incoming request is a GET method. In HTTP, GET is one of the standard request methods
            used to retrieve data from a specified resource. */
        req.method === 'GET') {
        /* `const parseUrl = url.parse(req.url, true);` is parsing the URL from the incoming request.
        The `url.parse()` method is used to parse the URL string into components such as protocol,
        host, port, pathname, search, query parameters, and hash. In this case, the second argument
        `true` indicates that the query parameters should be parsed into an object. The parsed URL
        object is stored in the `parseUrl` constant for further processing. */
        const parseUrl = url.parse(req.url, true);
        /* `const queryParameters = parseUrl.query;` is extracting the query parameters from the parsed
        URL object `parseUrl`. The `url.parse()` method parses the URL from the incoming request and
        stores the parsed components in the `parseUrl` object. By accessing the `query` property of
        the `parseUrl` object, we can retrieve the query parameters as an object. These query
        parameters are then stored in the `queryParameters` constant for further processing or
        response generation. */
        const queryParameters = parseUrl.query;
        /* `res.writeHead(200, { 'Content-Type': 'application/json' });` is setting the response header
        for the HTTP response. */
        res.writeHead(200, { 'Content-Type': 'application/json' });
        /* The `res.end(JSON.stringify({ message: 'This is the response to your GET request', queryParameters
        }));` code snippet is constructing the response body for the HTTP response to a GET request. Here's
        a breakdown of what it does: */
        res.end(JSON.stringify({
            message: 'This is the response to your GET request',
            queryParameters
        }));
    } else {
        /* The code snippet `res.writable(405); res.end(`${req.method} is not allowed on this server.`);` is
        attempting to send an HTTP response with status code 405 (Method Not Allowed) when the incoming
        request method is not a GET method. However, there is a mistake in the code. */
        res.writable(405);
        res.end(`${req.method} is not allowed on this server.`);
    }
});
/* The `server.listen(3000, () => { console.log('Server is running on port 3000'); });` code snippet is
setting up the HTTP server to listen for incoming requests on port 3000. When the server starts
listening on port 3000, the callback function `() => { console.log('Server is running on port
3000'); }` is executed, which simply logs a message to the console indicating that the server is
running on port 3000. This is a common practice to provide feedback to the developer that the server
has started successfully and is ready to handle incoming requests. */
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});