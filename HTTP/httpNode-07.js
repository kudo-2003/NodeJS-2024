const http = require('node:http');
const { parse } = require('node:querystring');
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        if(req.method === 'GET'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello, Node.js!✔');
        }else{
            res.statusCode = 405;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Method Not Allowed');
        };
    }else if(req.url === '/about'){
        if(req.method === 'GET'){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('This is about page!✔');
        }else{
            res.statusCode = 405;
            res.setHeader('Content-Type', 'Text/plain');
            res.end('Method Not Allowed');
        };
    }else if(req.url === '/api/data'){
        if(req.method === 'POST'){
            let body = '';
            req.on('data', chunk => {body += chunk.toString();});
            req.on('end', () => {
                const data = parse(body);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({message: 'Data sent: ', data}));
            });
        }else{
            res.statusCode = 405;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Method Not Allowed');
        };
    };
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});