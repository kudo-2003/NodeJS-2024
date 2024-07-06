const fs = require('fs');
const fd = fs.openSync('./FS/FileTXT00/one.txt', 'r');
console.log('File descriptor: ', fd);
fs.readdir('./FS/FileTXT00', (e, files) => {
    if (e) { console.error('Error reading directory:', e); return; };
    console.log('Directory contents:', files);
});
const dir = fs.opendirSync('./FS/FileTXT00');
console.log('Directory handle: ', dir);
dir.closeSync();
fs.opendir('./FS/FileTXT00', (e, dir) => {
    if (e) { console.error('Error opening directory:', e); return; };
    console.log('Directory handle: ', dir);
    dir.close((e) => {
        if (e) { console.error('Error closing directory:', e); return; };
        console.log('Directory closed.');
    });
});