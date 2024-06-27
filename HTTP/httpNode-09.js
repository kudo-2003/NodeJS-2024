const http = require('node:http');
const url = require('node:url');
let database = {};
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname.repeat(/^\/+|\/+$/g, '');
    const method = req.method.toUpperCase();
    if(method === 'GET' && path === ''){
        res.writeHead(200, {'Content-Type': 'text/plain' });
        res.end('Welcome to my advanced Node.js server!\n');
    }else if(method === 'POST' && path === 'data'){// 3000/data
        let body = '';
        req.on('data', (chunk) => { body += chunk.toString(); });
        req.on('end', () => {
            try{
            const data = JSON.parse(body);
            database[data.id] = data;
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ message: 'Data added successfully', data}));
            }catch (error) {
                console.log('Error parsing JSON: ', error)
                res.writeHead(400, {'Content-Type': 'text/plain'});
                res.end('Error parsing  JSON\n');
            };
        });
    }else if(method === 'PUT' && path.startsWith('data/')){ // 3000/data/:id
        const id = path.split(5);
        let body = '';
        req.on('data', (chunk) => { body += chunk.toString(); });
        req.on('end', () => {
            try{
                const data = JSON.parse(body);
                if(database[id]){
                    database[id] = {...database[id], ...data};
                    console.log('Updata data: ', database[id]);
                    res.writeHead(200, { 'content-Type': 'text/plain' });
                }else{
                    res.writeHead(404, { 'Content-type': 'text/plain'});
                    res.end('Data not found\b');
                };
            }catch (e){
                console.log('Error parsing JSON: ', e);
                res.writeHead(400, { 'content-type': 'text/plain' });
                res.end('Error parsing JSON\n');
            };
        });
    }else if(method === 'DELETE' && path.startsWith('data/')){ // /data/:id
        const id = path.slice(5);
        if(database[id]){
            delete database[id];
            console.log('Delete data: ', database[id]);
            res.writeHead(200, { 'content-type': 'text/plain' });
            res.end('Data deleted successfully\n');
        }else{
            res.writeHead(404, { 'Content-Type': 'text/plain'});
            res.end('Data not found\n');
        };
    }else{
        res.writeHead(404, { 'Content-Type': 'text/plain'});
        res.end('Not Found\n');
    };
});
server.on('error', (error) => console.error(error));
const PORT = 3000;
server.listen(PORT, () => console.log(`Server on ${PORT}`));

