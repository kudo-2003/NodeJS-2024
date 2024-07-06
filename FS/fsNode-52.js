const fs = require('fs');
const fd = fs.openSync('./FS/FileTXT00/one.txt', 'r');
const buffers = [Buffer.alloc(10), Buffer.alloc(10)];
fs.readv(fd, buffers, 0, (e, bytesRead, buffers) =>{
    if(e) { console.log("Error", e); return ; };
    console.log("Bytes read: ", bytesRead);
    console.log('Buffer contents: ', buffers.map(buf => buf.toString()));
    fs.closeSync(fd);
});