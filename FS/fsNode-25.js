const fs = require('node:fs');
fs.cp('one', 'three', { recursive: true}, e => {
    if(e){ console.log('Failed to copy: ', e); return ; }
    console.log('Copied successfully');
});
fs.promises.cp('FS/File-TXT/one', 'File-TXT/two', { recursive: true }).then(() => console.log('Copied successfully🐮')).catch(e =>{
    console.log('Failed to copy: ', e);
});