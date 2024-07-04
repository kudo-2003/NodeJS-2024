const fs = require('node:fs');
try{
    const fd = fs.openSync('FS/File-TXT/one.txt', 'r');
    console.log('File opened successfully: ', fd);
    fs.closeSync(fd);
    console.log('File closed successfully');
}catch(e){
    console.log('Error: ', e);
}