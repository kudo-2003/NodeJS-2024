const http = require('node:http');
const url = require('node:url');

let database = {};
const routes = {
    'MKACTIVITY': { path: '/activity', handler: handleMKActivity },
    'MKCALENDAR': { path: '/calendar', handler: handleMKCalender },
    'MKCOL': { path: '/collection', handler: handleMKCol },
    'MOVE': { path: '/move', handler: handleMove },
    'NOTIFY': { path: '/notify', handler: handleNotify },
    'OPTIONS': { path: '/options', handler: handleOptions },
    'GET': [
        { path: 'status', statusCode: 100, handler: handleStatus100 },
        { path: 'status', statusCode: 101, handler: handleStatus102 },
        { path: 'status', statusCode: 103, handler: handleStatus103 },
    ],
};

const server = http.createServer((req, res) => {
    const { method, url: reqUrl, headers } = req;
    const parsedUrl = url.parse(reqUrl, true);
    const path = parsedUrl.pathname.replace(/^\/+|\/+$/g, '');
    const route = routes[method];
    if(route){
        if(Array.isArray(route)){
            const matchedRoute = route.find(r => r.path === path);
            if(matchedRoute){
                matchedRoute.handler(req, res);
            }else{
                notFound(res);
            };
        }else if(route.path === path){
            route.handler(req, res);
        }else{
            notFound(res);
        };
    }else{
        notFound(res);
    };
});

function handleMKActivity(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('MKACTIVITY request received');
};

function handleMKCalender(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('MKCALENDAR request received');
};

function handleMKCol(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('MKCOL request received');
};
function handleMove(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('MOVE request received');
};
function handleNotify(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('NOTIFY request received');
};

function handleOptions(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end('OPTIONS request handled\n');
};
function handleStatus100(req, res) {
    res.writeHead(100, { 'Content-Type': 'text/plain' });
    res.end('Continue');
};
function handleStatus102(req, res) {
    res.writeHead(102, { 'Content-Type': 'text/plain' });
    res.end('Processing');
};
function handleStatus103(req, res) {
    res.writeHead(103, { 'Content-Type': 'text/plain',
        'Link': '</styles.css>; as=style; rel=preload',
     });
    res.end('Processing');
};
function notFound(res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
};
server.on('error', (error) => console.log('Server error: ', error));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));