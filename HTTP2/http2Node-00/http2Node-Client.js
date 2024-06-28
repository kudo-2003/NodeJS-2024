const http2 = require('node:http2');
const fs = require('node:fs');
const client = http2.connect('https:/localhost:8443', {
    ca: fs.readFileSync('./server.crt'),
});
const req = client.request({ ':path': '/'});
req.en('resqonse', (headers, flage) =>{
    for(const name in headers){
        console.log(`${name}: ${headers[name]}`);
    };
});
req.setEncoding('utf-8');
let data = '';
req.on('data', (chunk) => { data += chunk; });
req.on('end', () =>{
    console.log(`\n${data}`);
    client.close();
});
req.end();