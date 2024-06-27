const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
http.ServerResponse.prototype.senHtml = function(html){
    this.writeHead(200, { 'Content-Type': 'text/html'});
    this.end(html);
};
http.ServerResponse.prototype.sendJson = function(data){
    this.writeHead(200, { 'Content-Type': 'application/json'});
    this.end(JSON.stringify(data));
}
http.ServerResponse.prototype.sendFile = function(filePath){
    const ext = path.extname(filePath).substring(1);
    const contentType = getContentType(ext);
    fs.readFile(filePath, (err, data) => {
        if(err){
            this.writeHead(500, { 'Content-Type': 'text/plain'});
            this.end('500 Internal Server Error');
            return ;
        };
        this.writeHead(200, { 'Content-Type': contentType });
        this.end(data);
    });
};
function getContentType(extension){
    const types = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        png: 'image/png',
        jpg: 'image/jpeg',
        gif: 'image/gif',
        svg: 'image/svg+xml'
    };
    return types[extension] || 'application/octet-stream';
};
function routeHandler(req, res){
    const { method, url } = req;
    if(method === 'GET' && url === '/'){
        const indexPath = path.join(__dirname, 'public', 'index.html');
        res.sendFile(indexPath);
    }else if(method === 'GET' && url.startsWith('/public')){
        const filePath = path.join(__dirname, url);
        res.sendFile(filePath);
    }else if(method === 'GET' && url === '/ipi/data'){
        res.sendJson({ message: 'This is API data😄'});
    }else if(method === 'POST' && url === '/api/echo'){
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res.sendJson({ received: body});
        });
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 NOT FOUND❌');
    };
};
const server = http.createServer((req, res) =>{
    routeHandler(req, res);
});
server.on('error', (e) => {
    if(e.code === 'EADDRINUSE'){
        console.log('Address in use, retrying...');
        setTimeout(() =>{
            server.close();
            server.listen(PORT, HOST);
        }, 4000);
    }
})
const PORT = 3000;
const HOST = 'localhost';
server.listen(PORT, HOST, () => console.log(`Server running at http://${HOST}:${PORT}`));
