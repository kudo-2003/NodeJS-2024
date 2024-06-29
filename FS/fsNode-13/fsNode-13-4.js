const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');
const inputFilePath = path.join(__dirname, '../FileTXT/six.txt');
const outputFilePath = path.join(__dirname, '../FileTXT/seven.txt');
const stransformStream = new Transform({
    transform(chunk, encoding, callback){
        const transformedChunk = chunk.toString().toUpperCase();
        callback(null, transformedChunk);
    }
});
const readStream = fs.createReadStream(inputFilePath, {encoding: 'utf8'});
const writeStream = fs.createWriteStream(outputFilePath, {encoding: 'utf8'});
readStream.pipe(stransformStream).pipe(writeStream);
writeStream.on('finish', () => console.log('Hoang Thanh'));
writeStream.on('error', (e) => console.log(e));
readStream.on('error', (e) => console.log(e));