const fs = require('fs');
fs.open('./FS/File-TXT/one.txt', 'r+', (e, fd) =>{
    if(e) { console.log(e.message); return; }
    fs.ftruncate(fd, 10, (e) =>{
        (e) ? console.error('Error truncating file: ', e) : console.log('File truncated successfully');
        fs.close(fd,  (e) =>{
            if(e) console.error('Error closing file: ', e);
        });
    });
});