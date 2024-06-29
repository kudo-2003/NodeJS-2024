const fs = require('fs');
const path = require('path');
const sourceFilePath = path.join(__dirname, './FileTXT/hello.txt');
const destinationFilePath = path.join(__dirname, './FileTXT/hello-copy.txt');
const readStream = new fs.ReadStream(sourceFilePath, { encoding: 'utf8', highWaterMark: 16 * 1024 });
const writeStream = new fs.WriteStream(destinationFilePath, { encoding: 'utf8' });
readStream.on('data', (chunk) => {
    console.log('Da doc duoc du lieu: ', chunk);
    const canWrite = writeStream.write(chunk);
    if(!canWrite){
        console.log('Stream da bi gioi han');
        readStream.pause();
    };
});
writeStream.on('drain', () => {
    console.log('Stream da bi day');
    readStream.resume();
});
readStream.on('end', () => { console.log('Da doc xong tep nguon'); writeStream.end(); });
writeStream.on('error', (e) => console.log(`error: ${e.message}`));
readStream.on('error', (e) => console.log(`error: ${e.message}`));