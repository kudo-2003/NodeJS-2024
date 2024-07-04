const fs = require('fs');

// Hàm đọc dữ liệu từ file
function readFromFile(filePath, bytesToRead) {
  fs.open(filePath, 'r', (err, fd) => {
    if (err) {
      console.error('Không thể mở file:', err);
      return;
    }

    const buffer = Buffer.alloc(bytesToRead); // Cấp phát bộ nhớ để chứa dữ liệu đọc được
    const offset = 0; // Bắt đầu ghi tại vị trí đầu của buffer
    const position = null; // Bắt đầu đọc từ vị trí đầu của file

    // Đọc dữ liệu từ file
    fs.read(fd, buffer, offset, bytesToRead, position, (err, bytesRead, buffer) => {
      if (err) {
        console.error('Không thể đọc file:', err);
        return;
      }

      console.log(`Đã đọc ${bytesRead} byte từ file`);
      console.log('Dữ liệu:', buffer.toString());

      // Đóng file descriptor
      fs.close(fd, (err) => {
        if (err) {
          console.error('Không thể đóng file:', err);
          return;
        }
        console.log('Đã đóng file thành công');
      });
    });
  });
}

// Ví dụ sử dụng
const filePath = './FS/File-TXT/one.txt';
const bytesToRead = 100; // Số byte cần đọc từ file

readFromFile(filePath, bytesToRead);
