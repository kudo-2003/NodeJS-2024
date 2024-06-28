// client.js
const http2 = require('node:http2');
const { constants } = http2;
const customConstants = require('./constants');

const client = http2.connect('http://localhost:8080');

const req = client.request({ ':path': '/' });

req.on('response', (headers, flags) => {
  console.log('Stream state:', constants.NGHTTP2_STREAM_STATE_OPEN);
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`);
  }
});

req.setEncoding('utf8');
let data = '';
req.on('data', (chunk) => { data += chunk; });
req.on('end', () => {
  console.log(`\n${data}`);
  client.close();
});
req.end();
