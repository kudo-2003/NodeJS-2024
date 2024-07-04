const fs = require('node:fs');
try{
    const fd = fs.openSync('./FS/File-TXT/one.txt', 'r');
    fs.fchownSync(fd, 1000, 1000);
    console.log('File permission changed successfully');
    fs.fchmodSync(fd, 0o644);
    console.log('File permission changed successfully');
    fs.closeSync(fd);
}catch(e){
    console.log('Failed to change file permission: ', e);
}