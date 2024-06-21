const url = require('url');
const http = require('http');
const https = require('https');
const urlStr = 'https://website.com/a/b/file.html';
const uri = new URL(urlStr);
const protocol = (uri.protocol === 'https:') ? https : http;
const options = url.urlToHttpOptions(uri);
protocol.get(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log('Dữ liệu từ máy chủ:', data);
    });
    res.on('error', (err) => {
        console.error('Lỗi khi gửi yêu cầu:', err);
    });
});
