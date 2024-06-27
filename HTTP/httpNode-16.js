const http = require('http');
const querystring = require('querystring');

function httpGet(url, params = {}, timeout = 5000) {
    const queryString = querystring.stringify(params);
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    return new Promise((resolve, reject) => {
        const timeoutError = new Error('Request Timeout');
        timeoutError.code = 'ETIMEDOUT';
        const req = http.get(fullUrl, { timeout }, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Request Failed. Status Code: ${response.statusCode}`));
                return;
            }
            let data = '';
            response.on('data', (chunk) => { data += chunk; });
            response.on('end', () => { resolve(data); });
        });
        req.on('timeout', () => { req.abort(); reject(timeoutError); });
        req.on('error', (error) => { reject(error); });
    });
};

async function fetchData() {
    const url = 'http://localhost:3000/data'; // Fixed typo in the URL
    const params = { key: 'value' };
    try {
        const data = await httpGet(url, params);
        console.log('Received data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    };
};

fetchData();
