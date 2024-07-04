const fs = require('node:fs');
const path = './FS/File-TXT/two.txt';
fs.exists(path, (exists) =>{
    (exists) ? console.log('The file exists.') : console.log('the file does not exist.');
});