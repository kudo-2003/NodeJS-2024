const fs = require('node:fs');
fs.open('FS/File-TXT/one.txt', 'r', (err, fd) =>{
    if(err) {console.log('Failed to open file: ', err); return ;};
    console.log('File opened successfully');
    fs.close(fd, (e) =>{ if(e){ console.log('Failed to close file: ', e); return ;}
        console.log('File closed successfully');
    });
})