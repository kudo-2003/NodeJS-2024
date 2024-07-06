const fs = require('fs');
fs.link('./FS/FileTXT00/one.txt', './FS/FileTXT00/Test.txt', (e) =>{
    if(e) throw e;
    console.log('File linked successfully');
});
try{
    fs.lchownSync('./FS/FileTXT00/one.txt', './FS/FileTXT00/three.txt');
    console.log('File ownership changed successfully');
}catch(e){
    console.log('Error: ', e);
}