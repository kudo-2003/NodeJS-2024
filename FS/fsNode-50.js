const fs = require('fs');
fs.mkdtemp('./FS/FileTXT00', (e, folder) =>{
    if(e) { console.log('Error creating temp directory: ', e); return ; };
    console.log('Temp directory created: ', folder);
});
try{
    const folder = fs.mkdtempSync('./FS/FileTXT00');
    console.log('Good');
}catch(e){
    console.error('Error creating temp directory: ', e);
}