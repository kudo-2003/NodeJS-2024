const http2 = require('node:http2');
const fs = require('node:fs');
const serverOptions ={
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt'),
    allowHTTP1: true,
    settings: {
        initialWindowSize: 65535,
        maxConcurrentStreams: 100,
        maxHeaderListSize: 16384,
        enableConnectProtocol: true
    }
};
const server = http2.createSecureServer(serverOptions);
server.on('request', (req, res) =>{
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('Hello, HTTP/2 World!');
});

server.listen(8443, () => {
    console.log('HTTP/2 server is running on https://localhost:8443');
});