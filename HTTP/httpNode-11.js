const http = require('node:http');
const url = require('node:url');

let database = {};

const jsonParser = (req, res, next) =>{
    if(req.headers['content-type'] === 'application/json'){
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try{
                req.body = JSON.parse(body);
                next();
            }catch(e){
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            };
        });
    }else{
        next();
    };
};
const createHandler = (statusCode, contentType, content) => (req, res) => {
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(content);
};
const handlePatch = (req, res) => {
    const { id, ...data } = req.body;
    if(database[id]){
        database[id] = {...database[id], ...data };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Resource updated successfully', data: database[id] }));
    }else{
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('Resource not found\n');
    };
};
const handlePropfind = createHandler(207, 'application/xml', '<response><propstat><status>HTTP/1.1 207 Multi-Status</status><prop><displayname>Example resource</displayname></prop></propstat></response>');
const handleProppatch = createHandler(207, 'application/xml', '<response><propstat><status>HTTP/1.1 207 Multi-Status</status><prop><displayname>Updated resource</displayname></prop></propstat></response>');
const handlePurge = createHandler(200, 'text/plain', 'Cache purged\n');
const handleStatus = {
    202: createHandler(202, 'text/plain', 'Accepted\n'),
    203: createHandler(203, 'text/plain', 'Non-Authoritative Information\n'),
    204: createHandler(204, 'text/plain', ''),
    205: createHandler(205, 'text/plain', 'Reset Content\n'),
    206: createHandler(206, 'text/plain', 'Partial Content\n'),
    207: createHandler(207, 'application/xml', '<response><propstat><status>HTTP/1.1 207 Multi-Status</status><prop><displayname>Multi-Status response</displayname></prop></propstat></response>'),
    208: createHandler(208, 'application/xml', '<response><propstat><status>HTTP/1.1 208 Already Reported</status><prop><displayname>Already Reported response</displayname></prop></propstat></response>')
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
    const method = req.method.toUpperCase();
    const routes = {
        PATCH: {
            resource: handlePatch
        },
        PROPFIND:{
            properties: handlePropfind
        },
        PROPPATCH:{
            properties: handleProppatch
        },
        PURGE:{
            cache: handlePurge
        },
        GET: {
            'status-202': handleStatus[202],
            'status-203': handleStatus[203],
            'status-204': handleStatus[204],
            'status-205': handleStatus[205],
            'status-206': handleStatus[206],
            'status-207': handleStatus[207],
            'status-208': handleStatus[208]
        }
    };
    const notFoundHandler = createHandler(404, 'text/plain', 'Route not found\n');
    const middlewareChain = [jsonParser];
    let index = 0;
    const next = () => {
        if(index < middlewareChain.length){
            middlewareChain[index++](req, res, next);
        }else{
            const routeHandler = routes[method] && routes[method][path];
            (routeHandler || notFoundHandler)(req, res);
        };
    };
    next();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on XXXXXXXXXXXXXXXX:${PORT}`);
});