const fs = require('fs');
fs.lutimes('./FS/FileTXT00/one.txt', new Date(), new Date(), (e) =>{
    if(e) {console.error('Error updating times: ', e); return ; };
    console.log('Symlik times updated!✔');
});
try{
    fs.lutimesSync('./FS/FileTXT00/one.txt', new Date(), new Date());
    console.log('Symlik times updated!✔');
}catch(e){
    console.error('Error updating times: ', e);
}