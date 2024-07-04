const fs = require('node:fs');
try{
    const fd = fs.openSync('./FS/File-TXT/one.txt', 'r');
    fs.fchownSync(fd, 1000, 1000);
    console.log('Ownership changed successfully');
    fs.closeSync(fd);
    console.log('File closed successfully');
}catch(e){
    console.error('Failed to change ownership or close file: ', e);
}