const fs = require('node:fs');
fs.open('./FS/File-TXT/one.txt', 'r', (e, fd) =>{
    if(e){ console.log('Failed to open file: ', e); return ; };
    fs.fchmod(fd, 0o644, (e) =>{
        if(e){ console.log('Failed to change permissions: ', e); return ; };
        console.log('Permissions changed successfully');
        fs.close(fd, (e) =>{
            if(e){ console.log('Faile to close file: ', e); return; }
            console.log('File closed successfully');
        });
    });

})