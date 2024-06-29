const https = require('https');
const agent = new https.Agent({
    keepAlive: true,
    maxSockets: 30,
    maxFreeSockets: 10,
    timeout: 60000
});
https.globalAgent = agent;
https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(JSON.parse(data));
    });

}).on('error', (e) =>{
    console.log(e);
});

