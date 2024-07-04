const fs = require('node:fs');
fs.open('./FS/File-TXT/one.txt', 'r+', (err, fd) => {
  if (err) {
    console.error('Failed to open file:', err);
    return;
  }
  fs.fsync(fd, (err) => {
    if (err) {
      console.error('Failed to synchronize file:', err);
      return;
    }

    console.log('File synchronized successfully');
    
    fs.close(fd, (err) => {
      if (err) {
        console.error('Failed to close file:', err);
        return;
      }
      console.log('File closed successfully');
    });
  });
});
try {
  const fd = fs.openSync('example.txt', 'r+');
  fs.fsyncSync(fd);
  console.log('File synchronized successfully');

  fs.closeSync(fd);
  console.log('File closed successfully');
} catch (err) {
  console.error('Failed to synchronize or close file:', err);
}
