const fs = require('node:fs');
fs.open('./FS/File-TXT/one.txt', (e, fd) =>{
    if(e){ console.log('Failed to open file: ', e); return; }
    fs.fchown(fd, 1000, 1000, (e) => {
        if(e){ console.log('Failed to change ownership: ', e); return; };
        console.log('ownership changed successfully');
        fs.close(fd, (e) => {
            if(e){console.log('Failed to close file: ', e); return; };
            console.log('File closed successfully');
        });
    });
});