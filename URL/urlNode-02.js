const http = require('http');
const url = require('url');

const server = http.createServer((req, res) =>{
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    switch(pathname){
        case '/api/produsts':
            handleProducts(req, res);
            break;
        case '/api/orders':
            handleOrders(req, res)
            break;
        default: 
            res.writeHead(404);
            res.end('API endpoint not found');
    };
});

function handleProducts(req, res){
    if(req.method === 'GET'){
        const products = getProducts();
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
    };
};

function handleOrders(req, res){
    if(req.method === 'POST'){
        let body = '';
        req.on('data', chunk =>{
            body += chunk.toString();
        });
        req.on('end', () =>{
            const orderDetails = JSON.parse(body);
            const orderConfirmation = createOrder(orderDetails);
            res.writeHead(201, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(orderConfirmation));
        });
    }else{
        res.writeHead(405);
        res.end('Method Not Allowed');
    };
};

function getProducts(){
    return [
        { id: 1, name: 'Hinh A', price: 100},
        { id: 2, name: 'hinh B', price: 200},
    ];
};
function createOrder(orderDetails){
    return{
        orderId: Math.floor(Math.random() * 1000),
        status: 'confirmed',
        orderDetails
    };
};

server.listen(3000, () =>{
    console.log('Server is running on port 3000');
});