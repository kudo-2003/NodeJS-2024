const http = require('http');
const url = require('url');
const maxHeaderSize = 8192;
function handleGetRequest(req, res){
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'GET request received', query: query }));
};

function handlePostRequest(req, res){
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    res.on('end', () => {
        try{
            const data = JSON.parse(body);
            res.writeHead(200, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify({ message: 'POST request received', data: data }));
        }catch(e){
            res.writeHead(400, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify({ error: 'Invalid JSON' }));
        };
    });
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    res.setHeader('Content-Type', 'application/json');
    if(req.method === 'GET'){
        handleGetRequest(req, res);
    }else if(req.method === 'POST'){
        handlePostRequest(req, res);
    }else{
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    };
});
server.listen(3000, () => console.log('Server is running on port 3000'));