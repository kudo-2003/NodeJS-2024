const fs = require('node:fs');
const fd = fs.openSync('./FS/FileTXT00/one.txt', 'w');
const buffers = [Buffer.from('Hello'), Buffer.from('world!')];
fs.writev(fd, buffers, 0, (e, bytesWritten, buffers) =>{
    if(e) { console.error('Error: ', e); return ; };
    console.log('Bytes written: ', bytesWritten);
    fs.closeSync(fd);
});
fs.readdir('./FS/FileTXT00', { withFileTypes: true }, (e, dirents) =>{
    if(e) { console.error('Error: ', e); return ; };
    dirents.forEach(dirent =>{
        console.log('Name: ', dirent.name);
        console.log('Is directory: ', e);
        console.log('Is file: ', dirent.isFile());
    });
});