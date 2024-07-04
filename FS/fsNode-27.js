const fs = require('node:fs');
const path = './FS/File-TXT/two.txt'
if(fs.existsSync(path)){
    console.log('the File exists');
}else{
    console.log('the File does not exists');
}