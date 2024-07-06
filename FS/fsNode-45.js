const fs = require('node:fs');
fs.chmod('./FS/FileTXT00/one.txt', 0o777, (e) =>{
    if(e) throw e;
    console.log('Permissions changed!🐶');
});
try{
    fs.chownSync('./FS/FileTXT00/one.txt', 1000, 1000);
    console.log('Owner changed!���');
}catch(e){
    console.log(e);
}