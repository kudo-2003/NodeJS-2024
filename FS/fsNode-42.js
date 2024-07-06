const fs = require('fs');
try{
    const fd = fs.openSync('./FS/FileTXT00/one.txt', 'r+');
    fs.ftruncateSync(fd, 10);
    console.log('File truncated successfully');
    fs.closeSync(fd);
}catch(e){
    console.error('Error:', e);
}