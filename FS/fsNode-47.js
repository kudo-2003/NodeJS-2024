const fs = require('fs');
fs.lstat('./FS/FileTXT00/one.txt', (e, stats) =>{
    if(e) { console.error('Error reading stats: ', e); return };
    console.log('File stats: ', stats);
});
try{
    const stats = fs.lstatSync('./FS/FileTXT00/one.txt');
    console.log('File stats: ', stats);
}catch(e){
    console.error('Error reading stats: ', e);
}