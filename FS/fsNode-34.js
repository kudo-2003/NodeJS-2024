const fs = require('fs');
try{
    const fd = fs.openSync('./FS/File-TXT/two.txt', 'r+');
    fs.fdatasyncSync(fd);
    console.log('Data synchronized successfully');
    fs.closeSync(fd);
    console.log('File closed successfully💩');
}catch(e){
    console.error('Failed to synchronize data or close file💩: ', e);
}