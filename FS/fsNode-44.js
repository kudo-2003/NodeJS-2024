const fs = require('node:fs');
try{
    fs.lchownSync('./FS/FileTXT/one.txt', 1000, 1000);
    console.log('File ownership changed successfully');
}catch(e){
    console.log('Error: ', e);
}