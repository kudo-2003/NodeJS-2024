const fs = require('fs');
fs.lchown('./FS/FileXTX00/one.txt', 1000, 1000, (e) =>{
    (e) ? console.log(e) : console.log('Done');
})