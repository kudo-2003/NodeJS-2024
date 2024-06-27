const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
function requestLogger(req, res, next){
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
}
function routeHandler(req, res, next){
    const { method, url } = req;
    if(method === 'GET' && url === '/'){
        serverStaticFile(res, 'index.html', 'text/html');
    }else if(method === 'GET' && url.startsWith('/public')){
        const filePath = url.split('/public')[1];
        const fileType = path.extname(filePath).substring(1);
        serverStaticFile(res, filePath, getContentType(fileType));
    }else if(method === 'GET' && url === '/api/data'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'HELLO HUNG API '}));
    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found');
    };
};

function serverStaticFile(res, filePath, contentType){
    const fullPath = path.join(__dirname,'public', filePath);
    fs.readFile(fullPath, (err, data) => {
        if(err){
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('500 Internal Server Error');
            return ;
        };
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
};
function getContentType(fileType){
    const types = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        png: 'image/png',
        jpg: 'image/jpeg',
        gif: 'image/gif',
        svg: 'image/svg+xml',
        json: 'application/json',
    };
    return types[fileType] || 'text/plain';
}
const server = new http.Server((req, res) =>{
    requestLogger(req, res, () =>{
        routeHandler(req, res);
    });
});
const PORT = 3000;
server.listen(PORT, () => console.log('Server 3000'));
