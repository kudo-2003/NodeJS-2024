const http = require('http');
const url = require('url');

http.setMaxIdleHTTPParsers(20);
const logRequest = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
};
const parseJSON = (req, res, next) => {
    if(req.method === 'POST' && req.headers['content-type'] === 'application/json'){
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => { req.body = JSON.parse(body); next(); });
    }else{ next(); }
};

const routeHandler = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    if(pathname === '/' && req.method === 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n');
    }else{
        res.statusCode = 404; 
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found\n');
    };
};
const errorHandler = (err, req, res) => {
    console.error(err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error\n');
};

const serverHandler = (req, res) => {
    try {
      logRequest(req, res, () => {
        parseJSON(req, res, () => {
          routeHandler(req, res);
        });
      });
    } catch (err) {
      errorHandler(err, req, res);
    }
};

const server = http.createServer(serverHandler);
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at XXXXXXXXXXXXXXXX:${PORT}/`);
});