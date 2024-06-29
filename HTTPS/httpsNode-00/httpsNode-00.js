const https = require('node:https');
const fs = require('node:fs');
const options = {
    hostname: 'www.google.com',
    port: 443,
    path: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer <YOUR_ACCESS_TOKEN_HERE>',
    },
    key: fs.readFileSync('./client-key.pem'),
    cert: fs.readFileSync('./client-cert.pem'),
    ca: fs.readFileSync('./server-cert.pem'),
};
const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) =>{
        data += chunk;
    });
    res.on('end', () =>{
        console.log('Response status: ', res.statusCode);
        console.log('Response data: ', res.headers);
        console.log('Response data: ', data);
    });
});
req.on('error', (error) => {
    console.error('Request error: ', error);
});
req.end();
