const fs = require('node:fs');
const path = require('node:path');
const chmodRecursiveSync = (dir, mode)=>{
    const files = fs.readdirSync(dir);
    files.forEach((file) =>{
        const filePath = path.join(dir, file.name);
        (file.isDirectory()) ? chmodRecursiveSync(filePath, mode) : fs.chmodSync(filePath, mode);
    });
    fs.chmodSync(dir, mode);
};
try{
    chmodRecursiveSync('./Nice', 0o755);
    console.log('Permissions changed successfully');
}catch(e){
    console.error('Error changing permissions recursively:', e.message);
}