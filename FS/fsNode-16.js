const fs = require('node:fs');
const path = './FileTXT/file.txt';
const uid = 1001;
const gid = 1001;
fs.chown(path, uid, gid, (e) =>{
    if(e){ console.log('Error changing ownership: ', e); return ;};
    console.log('Ownership changed successfully!');
});
