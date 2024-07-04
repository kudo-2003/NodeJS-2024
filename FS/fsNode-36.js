const fs = require('node:fs');
try{
    const fd = fs.openSync('./FS/File-TXT/two.txt', 'r');
    const stats = fs.fstatSync(fd);
    console.log('File Stats: ', stats);
    fs.closeSync(fd);
    console.log('File closed successfully���');
}catch(e){
    console.error('Failed to get file stats or close file: ', e);
}