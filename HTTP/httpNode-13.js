const http = require('http');
const url = require('url');

const postData = JSON.stringify({
  'msg': 'Hello World!'
});

const options = {
  hostname: 'example.com',
  port: 80,
  path: '/path',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  },
  timeout: 5000  
};

const req = new http.ClientRequest(options);

req.on('response', (res) => {
  let data = '';

  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

  res.setEncoding('utf8');

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      const redirectUrl = url.resolve(options.hostname, res.headers.location);
      console.log(`Redirecting to: ${redirectUrl}`);
      const redirectOptions = {
        ...options,
        path: url.parse(redirectUrl).path
      };
      const redirectReq = new http.ClientRequest(redirectOptions);

      redirectReq.on('response', (redirectRes) => {
        let redirectData = '';

        redirectRes.on('data', (chunk) => {
          redirectData += chunk;
        });

        redirectRes.on('end', () => {
          console.log('Redirected response received:', redirectData);
        });
      });

      redirectReq.on('error', (e) => {
        console.error(`Problem with redirect request: ${e.message}`);
      });

      redirectReq.end();
    } else {
      console.log('Response received:', data);
    }
  });
});

req.on('timeout', () => {
  console.error('Request timed out');
  req.abort();
});

req.on('error', (e) => {
  if (e.code === 'ECONNRESET') {
    console.error('Request timeout');
  } else {
    console.error(`Problem with request: ${e.message}`);
  }
});

req.write(postData);
req.end();
