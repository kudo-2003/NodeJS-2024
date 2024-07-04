const fs = require('node:fs');
fs.open('./FS/File-TXT/one.txt', 'r+', (e, fd) =>{
    if(e){console.log('Faoled to open file: ', e); return ;};
    fs.fdatasync(fd, (e) =>{
        if(e) { console.log('Failed to synchronize data: ', e); return ; };
        console.log('Data synchroized successfully');
        fs.close(fd, (e) =>{
            if(e) { console.log('Failed to close file: ', e); return ; };
            console.log('File closed successfully! 🙄');
        });
    });
});