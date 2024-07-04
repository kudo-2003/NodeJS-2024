const fs = require('node:fs');
const { COPYFILE_EXCL } = require('node:fs').constants;
fs.copyFile('FS/File-TXT/one.txt', 'FS/File-TXT/copy.txt', COPYFILE_EXCL, (err) => {
    if (err) throw err;
    console.log('File copied successfully');
});
try{
    fs.copyFileSync('FS/File-TXT/one.txt', 'FS/File-TXT/copySync.txt', COPYFILE_EXCL);
    console.log('File copied successfully');
}catch(e){
    console.log('Error: ', e);
};