// server.js
const http2 = require('node:http2');
const fs = require('fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('path/to/your/server.key'),
  cert: fs.readFileSync('path/to/your/server.crt')
});

server.on('stream', (stream, headers) => {
  if (headers[':path'] === '/') {
    stream.pushStream({ ':path': '/style.css' }, (err, pushStream) => {
      if (err) throw err;
      pushStream.respond({ ':status': 200 });
      pushStream.end('body { background: green; }');
    });

    stream.respond({ 'content-type': 'text/html', ':status': 200 });
    stream.end('<link rel="stylesheet" href="/style.css"><h1>Hello HTTP/2 with Server Push!</h1>');
  }
});

server.listen(8443, () => {
  console.log('HTTP/2 server listening on port 8443');
});
