const http = require('http');
const url = require('url');

const handlers = {
    'GET': {
        '/api/users': getUsers,
        '/api/posts': getPosts
    },
    'POST': {
        '/api/users': createUser,
        '/api/posts': createPost
    }
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = '/' + path.replace(/^\/+|\/+$/g, '');
    const routeHandler = handlers[req.method] && handlers[req.method][trimmedPath];
    if(routeHandler){
        routeHandler(req, res);
    }else{
        res.writeHead(404);
        res.end('Not Found');
    };
});

function getUsers(req, res){
    const users = [
        { id: 1, name: 'Hung kudo'},
        { id: 2, name: 'huyen yeu'}
    ];
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(users));
};

function createUser(req, res){
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () =>{
        const newUser = JSON.parse(body);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User created successfully', user: newUser }));
    });
};

function getPosts(req, res){
    const posts = [
        { id: 1, title: 'Test One', content: 'This is the first post.'},
        { id: 2, title: 'Test Two', content: 'This is the Two post.'}
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(posts));
};

function createPost(req, res){
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () =>{
        const newPost = JSON.parse(body);
        res.writeHead(201, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Post created successfully', post: newPost }));
    });
};

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name":"Hung kudo","email":"johndoe@example.com"}'

