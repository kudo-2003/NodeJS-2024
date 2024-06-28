// server.js
const http2 = require('node:http2');
const { constants } = http2;
const customConstants = require('./constants');

const server = http2.createServer();

server.on('stream', (stream, headers) => {
  console.log('Stream state:', constants.NGHTTP2_STREAM_STATE_OPEN);

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

server.listen(8080, () => {
  console.log('HTTP/2 server listening on port 8080');
});
