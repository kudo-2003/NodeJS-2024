const fs = require('node:fs');
const path = require('node:path');
const filePath = path.join(__dirname, '../FileTXT/hello.txt');
const readStream = fs.createReadStream(filePath, { encoding: 'utf-8', highWaterMark: 16 * 1024 });
readStream.on('data', (chunk) => { console.log('Nhan du lieu mot khoi: ', chunk)});
readStream.on('end', () => { console.log('Hoang Thanh viet doc file.')});
readStream.on('error', (e) => console.log('Loi: ', e.message));