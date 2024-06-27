const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');
const jwt = require('jsonwebtoken');
const secretKey = 'b3d9d3e8338e8b2c7e2a01234f569b2f8651d2458d7d6ef9c5ab1e84c32a45c7';
const logRequest = (req, res, next) =>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};
const parseBody = (req, res, next) =>{
    if(req.method === 'POST' || req.method === 'PUT'){
        let body = '';
        const decoder = new StringDecoder('utf-8');
        req.on('data', (chunk) =>{
            body += decoder.write(chunk);
        });
        req.on('end', () =>{
            req.body = body;
            try{
                req.body = JSON.parse(body);
            }catch (e) {
                req.body = {};
            };
            next();
        });
    }else{
        next();
    };
};
const authenticate = (req, res, next) =>{
    const authHeader = req.headers['authorization'];
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token, secretKey, (err, user) =>{
            if(err){
                res.writeHead(403, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Forbidden'}));
            }else{
                req.user = user;
                next();
            };
        });
    }else{
        res.writeHead(401, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'Unauthorized'}));
    };
};

const router = {
    'GET': {
        '/hello': (req, res) =>{
            res.writeHead(200, { 'Content-Type': 'text/json'});
            res.end(JSON.stringify({ message: 'Hello, world!'}));
        }
    },
    'POST': {
        '/login': async(req, res) =>{
            const { username, password } = req.body;
            if(username === 'user' && password === 'password'){
                const token = jwt.sign({ username }, secretKey, { expiresIn: '1h'});
                res.writeHead(200, { 'Content-Type': 'application/json'});
                res.end(JSON.stringify({ token }));
            }else{
                res.writeHead(401, { 'Content-Type': 'application/json'});
                res.end(JSON.stringify({ message: 'Unauthorized'}));
            };
        },
        'data': async(req, res) =>{
            authenticate(req, res, () =>{
                res.writeHead(200, { 'Content-Type': 'application/json'});
                res.end(JSON.stringify({ message: 'Data received', data: req.body, user:req.user}));
            });
        }
    },
    'default': (req, res) =>{
        res.writeHead(404, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'Not Found'}));
    }
};

const server = http.createServer((req, res) =>{
    const middleware = [logRequest, parseBody];
    let i = 0;
    const next = () =>{
        const middleware = middleware[i];
        i++;
        if(middleware){
            middleware(req, res, next);
        }else{
            handleRequest(req, res);
        };
    };
});

const handleRequest = (req, res) =>{
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method.toUpperCase();
    const chosenHandler = (router[method] && router[method][path]) ? router[method][path] : router['default'];
    chosenHandler(req, res);
};
const PORT = 3000;
server.listen(PORT, () => console.log(`Server ${PORT}`));