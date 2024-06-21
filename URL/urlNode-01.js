// API url http
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) =>{
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    if(pathname === '/api/users'){
        if(req.method === 'GET'){
            const users = getUsers(query);
            res.writeHead(200, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(users));
        }else{
            res.writeHead(404);
            res.end(`${req.method} is not allowed for this endpoint.`);
        }
    }else{
        res.writeHead(404);
        res.end('Not Found');
    }
});

function getUsers(query){
    return [
        { id: 1, name: 'Hung Dep Trai', age: 30},
        {id: 2, name: 'Huyen Yeu', age: 29}
    ];
}

server.listen(3000, () =>{
    console.log('Server is running on port 3000');
});