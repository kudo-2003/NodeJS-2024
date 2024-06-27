const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { method, headers } = req;
  const pathname = parsedUrl.pathname;
  switch (method) {
    case 'GET':
      handleGet(req, res, pathname, headers);
      break;
    case 'HEAD':
      handleHead(req, res, pathname, headers);
      break;
    case 'LINK':
      handleLink(req, res, pathname, headers);
      break;
    case 'LOCK':
      handleLock(req, res, pathname, headers);
      break;
    case 'M-SEARCH':
      handleMSearch(req, res, pathname, headers);
      break;
    default:
      handleNotSupported(req, res, method);
      break;
  };
});
const handleGet = (req, res, pathname, headers) => {
  if (pathname === '/api/data') {
    const data = {
      message: 'This is some data from the API', };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`GET request received\nPath: ${pathname}\nHeaders: ${JSON.stringify(headers, null, 2)}`);
  }
};

const handleHead = (req, res, pathname, headers) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(); 
};
const handleLink = (req, res, pathname, headers) => {
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'application/link-format' });
    res.end(`LINK request received\nPath: ${pathname}\nHeaders: ${JSON.stringify(headers, null, 2)}\nBody: ${body}`);
  });
};
const handleLock = (req, res, pathname, headers) => {
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`LOCK request received\nPath: ${pathname}\nHeaders: ${JSON.stringify(headers, null, 2)}\nBody: ${body}`);
  });
};
const handleMSearch = (req, res, pathname, headers) => {
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`M-SEARCH request received\nPath: ${pathname}\nHeaders: ${JSON.stringify(headers, null, 2)}\nBody: ${body}`);
  });
};
const handleNotSupported = (req, res, method) => {
  res.writeHead(405, { 'Content-Type': 'text/plain' });
  res.end(`Method ${method} not supported`);
};
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
