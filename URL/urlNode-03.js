const http = require('http');
const url = require('node:url'); //or const url = require('url');
const server = http.createServer((req, res) =>{
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const pathSegments = trimmedPath.split('/');
    if(pathSegments.length === 3 && pathSegments[0] === 'api' && pathSegments[1] === 'items'){
        const itemId = pathSegments[2];
        // http://localhost:3000/api/items/22
        switch(req.method){
            case 'GET':
                const item = getItemById(itemId);
                res.writeHead(200, { 'Content-Type': 'application/json'});
                res.end(JSON.stringify(item));
                break;
            case 'DELETE':
                const deleteionResult = deleteItemById(itemId);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(deleteionResult));
                break;
            default: 
                res.writeHead(405);
                res.end('Method Not Allowed');
        };
    }else{
        res.writeHead(404);
        res.end('Not Found');
    };
});

function getItemById(id){
    return{
        id,
        name: 'Sample Item',
        description: 'This is a sample item for demonstration purposes.'
    };
};

function deleteItemById(id){
    return{
        id,
        message: `Item with ID ${id} has been deleted successfully.`
    };
};

server.listen(3000, () =>{
    console.log('Server is running on port 3000');
});

