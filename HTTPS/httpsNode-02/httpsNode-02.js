const https = require('https');
const fs = require('fs');
const path = require('path');
const serverOptions = {
    key: fs.readFileSync(path.join(__dirname, 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'server.crt'))
};
https.createServer(serverOptions, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Secure World!\n');
}).listen(443, () => {
    console.log('Server running on port 443');
});