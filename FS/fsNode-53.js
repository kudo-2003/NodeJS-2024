const fs = require('fs');
const fd = fs.openSync('./FS/FileTXT00/one.txt', 'r');
const buffer = [Buffer.alloc(10), Buffer.alloc(10)];
try{
    const bytesRead = fs.readvSync(fd, buffer, 0);
    console.log('Bytes read: ', bytesRead);
    console.log('Buffer contents: ', buffer.map(buf => buf.toString()));
}catch(e){
    console.log('Error: ', e);
}finally{
    fs.closeSync(fd);
}

