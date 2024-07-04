const fs = require('node:fs');
fs.open('./FS/File-TXT/one.txt', 'r', (e, fd) =>{
    if(e) { console.error(e); return ; };
    fs.fstat(fd, (e, stats) =>{
        if(e) { console.error('Failed to get file stats: ', e); return ; }; 
        console.log('File Stats: ', stats);
        fs.close(fd, (e) =>{
            if(e) { console.error('Failed to close file: ', e); return ; };
            console.log('File closed successfully👎');
        });
    });
});