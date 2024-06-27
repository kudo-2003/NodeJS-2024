const http = require('node:http');
const headerName = 'Content-Type';
try{
    http.validateHeaderName(headerName);
    console.log('Header name is valid.');
}catch(e){
    console.error('Invalid header name:', e.message);
};
const headerValue = 'application/json';
try{
    http.validateHeaderValue(headerName, headerValue);
    console.log('Header value is valid.');
}catch(e){
    console.error('Invalid header value:', e.message);
};
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader(headerName, headerValue);
    res.end('Hello, world!\n');
});
const PORT = 3000;
const HOST = '127.0.0.1';

server.on('error', (e) =>{
    if(e.code === 'EADDRINUSE'){
        console.error('Address in use, retrying...');
        setTimeout(() => {
            server.close();
            server.listen(PORT, HOST);
        }, 4000);
    };
});
server.listen(PORT, HOST, () =>{
    console.log(`Server running at http://${HOST}:${PORT}`);
});

