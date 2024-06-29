const fs = require('node:fs');
const path = './FileTXT/file.txt';
const uid = 1001;
const gid = 1001;
try{
    fs.chownSync(path, uid, gid);
    console.log('Ownership changed successfully');
}catch(e){
    console.error('Error changing ownership:', e);
};
