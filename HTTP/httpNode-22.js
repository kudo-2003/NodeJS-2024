const http = require('http');

// Kiểm tra tên và giá trị tiêu đề
const headerName = 'Content-Type';
const headerValue = 'application/json';
try {
  http.validateHeaderName(headerName);
  console.log('Header name is valid.');
} catch (e) {
  console.error('Invalid header name:', e.message);
}

try {
  http.validateHeaderValue(headerName, headerValue);
  console.log('Header value is valid.');
} catch (e) {
  console.error('Invalid header value:', e.message);
}

// Tạo máy chủ HTTP
const PORT = 3000;
const HOST = '127.0.0.1';

const server = http.createServer((req, res) => {
  req.setEncoding('utf8');  // Đặt mã hóa cho luồng đọc của yêu cầu

  req.on('data', chunk => {
    console.log('Request data:', chunk);
  });

  req.on('end', () => {
    console.log('Request end.');
    res.end('Hello, world!\n');
  });

  req.on('close', () => {
    console.log('Request closed.');
  });

  req.on('error', err => {
    console.error('Request error:', err.message);
  });

  req.on('resume', () => {
    console.log('Request resumed.');
  });

  req.on('readable', () => {
    console.log('Request readable.');
  });

  req.on('pause', () => {
    console.log('Request paused.');
  });

  res.on('close', () => {
    console.log('Response closed.');
  });

  res.on('finish', () => {
    console.log('Response finished.');
  });

  res.on('error', err => {
    console.error('Response error:', err.message);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

server.on('checkContinue', (req, res) => {
  console.log('Server checkContinue event.');
  res.writeContinue();
});

server.on('checkExpectation', (req, res) => {
  console.log('Server checkExpectation event.');
  res.writeContinue();
});

server.on('close', () => {
  console.log('Server closed.');
});

server.on('connect', (req, socket, head) => {
  console.log('Server connect event.');
  socket.write('HTTP/1.1 200 Connection Established\r\n\r\n');
  socket.end();
});

server.on('connection', (socket) => {
  console.log('Server connection event.');
});

server.on('dropRequest', (req, socket) => {
  console.log('Server dropRequest event.');
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.error('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  } else {
    console.error('Server error:', e.message);
  }
});

server.on('listening', () => {
  console.log('Server listening.');
});

server.on('request', (req, res) => {
  console.log('Server request event.');
});

server.on('upgrade', (req, socket, head) => {
  console.log('Server upgrade event.');
  socket.write('HTTP/1.1 101 Switching Protocols\r\n' +
               'Upgrade: websocket\r\n' +
               'Connection: Upgrade\r\n' +
               '\r\n');
  socket.pipe(socket);
});
