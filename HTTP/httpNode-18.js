const http = require('http');
const server = http.createServer((req, res) =>{
    if(req instanceof http.IncomingMessage){
        const { method, url, headers } = req;
        console.log(`Received ${method} request for ${url}`);
        if(method === 'GET'){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello, World!');
        }else if(method === 'POST'){
            let body = '';
            req.on('data', (chunk) =>{
                body += chunk.toString();
            });
            req.on('end', () =>{
                console.log(body);
                res.writeHead(200, { 'Content-Type': 'application/json'});
                res.end(JSON.stringify({ messgae: 'Data received',  data: body}));
            });
        }else{
            res.writeHead(405, { 'Content-Type': 'text/plain'});
            res.end('Method Not Allowed');
        }
    }
});

const PORT = 3000;
server.listen(PORT, () => console.log('server 3000'));