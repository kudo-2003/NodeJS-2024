const https = require('https');
const fs = require('fs');
const path = require('path');

// Đường dẫn tới các file chứng chỉ SSL
const clientOptions = {
  hostname: 'localhost',
  port: 8443,
  path: '/',
  method: 'GET',
  ca: fs.readFileSync(path.join(__dirname, 'server-cert.pem')) // Đảm bảo client tin tưởng vào chứng chỉ tự ký của server
};

// Gửi request GET tới server
const req = https.request(clientOptions, (res) => {
  console.log(`Status Code: ${res.statusCode}`);

  res.on('data', (chunk) => {
    console.log(`Body: ${chunk}`);
  });

  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

// Kết thúc request
req.end();
