const fs = require('fs');
const filePath = './FileTXT';
const buffer1 = Buffer.from('This is One\n');
const buffer2 = Buffer.from('This is Two\n');
fs.open(filePath, 'w', (err, fd) =>{
    const buffers = [buffer1, buffer2];
    if(err){ console.error(err); return; };
    fs.writev(fd, buffers, (e, bytesWritten, buffers ) =>{
        if(e){console.log(e); return;};
        console.log(`${bytesWritten} bytes da duoc ghi`);
        fs.close(fd, (e) =>{ console.log('loi khi dong tep: ', e); return ; });
        console.log('Tep da dong');
        fs.stat(filePath, (e, stats) =>{
            if(e){ console.log(e); return; };
            console.log('Thông tin tệp tin:');
            console.log(`Kích thước tệp tin: ${stats.size} bytes`);
            console.log(`Ngày tạo tệp tin: ${stats.birthtime}`);
            console.log(`Ngày chỉnh sửa cuối cùng: ${stats.mtime}`);
            console.log(`Là tệp tin: ${stats.isFile()}`);
            console.log(`Là thư mục: ${stats.isDirectory()}`);
            console.log(`Là khối thiết bị: ${stats.isBlockDevice()}`);
            console.log(`Là thiết bị ký tự: ${stats.isCharacterDevice()}`);
            console.log(`Là FIFO: ${stats.isFIFO()}`);
            console.log(`Là socket: ${stats.isSocket()}`);
            console.log(`Là symbolic link: ${stats.isSymbolicLink()}`);
        });
    });
});
