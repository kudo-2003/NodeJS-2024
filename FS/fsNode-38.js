const fs = require('node:fs');
try{
    const fd = fs.openSync('./FS/File-TXT/two.txt', 'r+');
    fs.fsyncSync(fd);
    console.log('File synchronized successfully');
    fs.closeSync(fd);
    console.log('File closed successfully');
}catch(e){
    console.log('Failed to synchronize file; ', e);
}