const http = require('http');
const url = require('node:url');
const getRequestData = (req) => {
    return new Promise((resolve, rejects) => {
        let body = '';
        req.on('data', chunk =>{
            body += chunk.toString();
        });
        req.on('end', () => {
            resolve(body);
        });
        req.on('error', err => {
            rejects(err);
        });
    });
};

const handleAclRequest = async (req, res) =>{
    const data = await getRequestData(req);
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({method: 'ACL', data: data}));
};

const handleBindRequest = async (req, res) =>{
    const data = await getRequestData(req);
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({method: 'BIND', data: data}));
};

const handleCheckoutRequest = async (req, res) =>{
    const data = await getRequestData(req);
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({method: 'CHECKOUT', data: data}));
};

const handleConnectRequest = async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({method: 'CONNECT', message: 'CONNECT request received'}));
};

const handleCopyRequest = async (req, res) => {
    const data = await getRequestData(req);
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({method: 'COPY', data: data}));
};

const handleDeleteRequest = async (req, res) =>{
    const data = await getRequestData(req);
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({method: 'DELETE', data: data}));
};

const handleGetRequest = async (req, res) =>{
    const parsedUrl = url.parse(req.url, true);
    const response = { method: 'GET', query: parsedUrl.query};
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(response));
};

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname.toLowerCase();
    if (pathname === '/method/acl' && req.method === 'ACL') {
        await handleAclRequest(req, res);
    } else if (pathname === '/method/bind' && req.method === 'BIND') {
        await handleBindRequest(req, res);
    } else if (pathname === '/method/checkout' && req.method === 'CHECKOUT') {
        await handleCheckoutRequest(req, res);
    } else if (pathname === '/method/connect' && req.method === 'CONNECT') {
        handleConnectRequest(req, res);
    } else if (pathname === '/method/copy' && req.method === 'COPY') {
        await handleCopyRequest(req, res);
    } else if (pathname === '/method/delete' && req.method === 'DELETE') {
        await handleDeleteRequest(req, res);
    } else if (pathname === '/method/get' && req.method === 'GET') {
        handleGetRequest(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});