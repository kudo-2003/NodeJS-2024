const fs = require('node:fs');
const path = require('node:path');
const changeOwnershipRecursively = (dirPath, uid, gid) =>{
    try{
        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
            const fullPath = path.join(dirPath, file);
            const stats = fs.statSync(fullPath);
            if(stats.isDirectory()){
                fs.chownSync(fullPath, uid, gid)
                changeOwnershipRecursively(fullPath, uid, gid);
            }else{
                fs.chownSync(fullPath, uid, gid);
            };
        });
        fs.chownSync(dirPath, uid, gid);
        console.log('Ownership changed successfully ', dirPath);
    }catch(e){
        console.error('Error changing ownership: ', e);
    };
};
const targetDir = './FileTXT';
const uid = 1001;
const gid = 1001;
changeOwnershipRecursively(targetDir, uid, gid);