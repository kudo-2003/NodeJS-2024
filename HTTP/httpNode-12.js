const http = require('http');
const https = require('https');
const fs = require('fs');
const httpAgent = new http.Agent({
    keepAlive: true,
    timeout: 5000,
    maxSockets: 10,
});

const httpsAgent = new https.Agent({
    keepAlive: true,
    timeout: 5000,
    maxSockets: 10,
    rejectUnauthorized: false,
});

http.globalAgent = httpAgent;
https.globalAgent = httpsAgent;

function logRequest(options, res) {
    const Log = {
        request: {
            hostname: options.hostname,
            path: options.path,
            method: options.method,
            headers: options.headers,
        },
        response: {
            statusCode: res.statusCode,
            headers: res.headers,
        }
    };
    fs.appendFileSync('request_log.json', JSON.stringify(Log, null, 2) + '\n');
};

function makeRequest(options, retryCount = 3){
    const req = http.request(options, (res) => {
        logRequest(options, res);
        console.log(`STATUS: ${res.statusCode}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () =>{
            console.log('No more data in response.');
        });
    });
    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
        if(retryCount > 0){
            console.log(`Retrying... (${3 - retryCount + 1})`);
            makeRequest(options, retryCount - 1);
        };
    });

    req.setTimeout(2000, () => {
        console.log('Request timed out');
        req.abort();
    });
    req.end();
};

const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/',
    method: 'GET',
    agent: http.globalAgent,
    headers: {
        'User-Agent': 'Node.js HTTP Client',
    },
};
makeRequest(options);