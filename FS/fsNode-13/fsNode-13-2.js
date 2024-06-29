const fs = require('node:fs');
const path = require('node:path');
const filePath = path.join(__dirname, '../FileTXT/hello.txt');
const writeStream = fs.createWriteStream(filePath, { encoding: 'utf-8'});
const dataChunks = [
    'This is One. \n',
    'this is two. \n',
];
dataChunks.forEach(chunk => writeStream.write(chunk));
writeStream.end(() => console.log('Hoang Thanh'));
writeStream.on('error', (e) => console.log('Loi: ', e.message));