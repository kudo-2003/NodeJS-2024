const fs = require('node:fs');
fs.copyFile('FS/File-TXT/one.txt', 'FS/File-TXT/two.txt', (e) =>{ // vị trí copy one.txt và vị trí lưu two.txt
    if(e) { console.log('Failed to copy file: ', e); return ;};
    console.log('File copied successfully');
});