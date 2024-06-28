const http2 = require('node:http2');
const fs = require('node:fs');
const server = http2.createSecureServer({
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt')
});
server.on('stream', (stream, headers) => {
    stream.respond({
        'content-type': 'text/html',
        ':status': 200
    });
    stream.end('<h1>HELLO HUNG</h1>');
});

server.listen(8443, () =>{
    console.log('HTTP/2 server listening on port 8443');
});