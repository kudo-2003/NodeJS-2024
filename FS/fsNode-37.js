const fs = require('node:fs');
fs.open('./FS/File-TXT/one.txt', 'r', (e, fd) =>{
    if(e) { console.error('Failed to open file: ', e); return ; };
    fs.fstat(fd, (e, stats) =>{
        if(e) {console.error('Failed to get file stats: ', e); return ; };
        console.log(`File size: ${stats.size} bytes`);
        console.log(`Is file: ${stats.isFile()}`)
        console.log(`Is directory: ${stats.isDirectory()}`);
        console.log(`Last modified: ${stats.mtime}`);
        fs.close(fd, (e) =>{ 
            if(e){
            console.error('Failed to close file: ',  e); return ; }
            console.log('File closed successfully');
        })
    });

});