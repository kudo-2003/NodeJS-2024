const fs = require('node:fs');
fs.mkdir('./FS/FileTXT/one.txt', { recursive: true }, (e) =>{
    if(e){ console.log('Error creating directory: ', e); return ; };
    console.log('Directory created');
});
try{
    fs.mkdirSync('./FS/FileTXT/two.txt', { recursive: true });
    console.log('Directory created');
}catch(e){
    console.log('Error creating directory: ', e);
};