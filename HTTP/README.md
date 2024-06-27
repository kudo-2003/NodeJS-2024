
  _connectionListener: [Function: connectionListener],🚩
  METHODS: [
    'ACL',🚩         'BIND',🚩       'CHECKOUT',🚩
    'CONNECT',🚩     'COPY',🚩       'DELETE',🚩
    'GET',🚩         'HEAD',🚩       'LINK',🚩
    'LOCK',🚩        'M-SEARCH',🚩   'MERGE',🚩
    'MKACTIVITY',🚩  'MKCALENDAR',🚩 'MKCOL',🚩
    'MOVE',🚩        'NOTIFY',🚩     'OPTIONS',🚩
    'PATCH',🚩       'POST',🚩       'PROPFIND',🚩
    'PROPPATCH',🚩   'PURGE',🚩      'PUT',🚩
    'REBIND',      'REPORT',     'SEARCH',
    'SOURCE',      'SUBSCRIBE',  'TRACE',
    'UNBIND',      'UNLINK',     'UNLOCK',
    'UNSUBSCRIBE'
  ],
  STATUS_CODES: {
    '100': 'Continue(Tiếp tục)',🚩
    '101': 'Switching Protocols(Giao thức chuyển đổi)',🚩
    '102': 'Processing(Xử lý)',🚩
    '103': 'Early Hints(Gợi ý sớm)',🚩
    '200': 'OK(Được)', 🚩
    '201': 'Created(Tạo)', 🚩
    '202': 'Accepted(Đã được chấp nhận)',🚩
    '203': 'Non-Authoritative Information(Thông tin không có thẩm quyền)',🚩
    '204': 'No Content(Không có nội dung)',🚩
    '205': 'Reset Content(Đặt lại nội dung)',🚩
    '206': 'Partial Content(Nội dung một phần)',🚩
    '207': 'Multi-Status(Nhiều trạng thái)',🚩
    '208': 'Already Reported(Đã báo cáo)',🚩
    '226': 'IM Used(IM đã sử dụng)',
    '300': 'Multiple Choices(Nhiều lựa chọn)',
    '301': 'Moved Permanently(Đã di chuyển vĩnh viễn)',
    '302': 'Found(Thành lập)',
    '303': 'See Other(Xem Khác)',
    '304': 'Not Modified(Không sửa đổi)',
    '305': 'Use Proxy(Sử dụng Proxy)',
    '307': 'Temporary Redirect(Chuyển hướng tạm thời)',
    '308': 'Permanent Redirect(Chuyển hướng vĩnh viễn)',
    '400': 'Bad Request(Yêu cầu không hợp lệ)',🚩
    '401': 'Unauthorized(Không được phép)',🚩
    '402': 'Payment Required(yêu cầu thanh toán)',
    '403': 'Forbidden(Cấm)',🚩
    '404': 'Not Found(Không tìm thấy)',🚩
    '405': 'Method Not Allowed(Phương pháp không được phép)', 🚩
    '406': 'Not Acceptable(Không thể chấp nhận)',
    '407': 'Proxy Authentication Required(Yêu cầu xác thực proxy)',
    '408': 'Request Timeout(Hết thời gian yêu cầu)',
    '409': 'Conflict(Xung đột)',
    '410': 'Gone(Đi mất)',
    '411': 'Length Required(Chiều dài yêu cầu)',
    '412': 'Precondition Failed(Điều kiện tiên quyết không thành công)',
    '413': 'Payload Too Large(Tải trọng quá lớn)',
    '414': 'URI Too Long(URI quá dài)',
    '415': 'Unsupported Media Type(Loại phương tiện không được hỗ trợ)',
    '416': 'Range Not Satisfiable(Phạm vi không thỏa mãn)',
    '417': 'Expectation Failed(Kỳ vọng thất bại)',
    '418': "I'm a Teapot(Tôi là một ấm trà)",
    '421': 'Misdirected Request(Yêu cầu sai hướng)',
    '422': 'Unprocessable Entity(Thực thể không thể xử lý)',
    '423': 'Locked(Đã khóa)',
    '424': 'Failed Dependency(Phụ thuộc không thành công)',
    '425': 'Too Early(Quá sớm)',
    '426': 'Upgrade Required(Yêu cầu nâng cấp)',
    '428': 'Precondition Required(Điều kiện tiên quyết bắt buộc)',
    '429': 'Too Many Requests(Quá nhiều yêu cầu)',
    '431': 'Request Header Fields Too Large(Yêu cầu trường tiêu đề quá lớn)',
    '451': 'Unavailable For Legal Reasons(Không khả dụng vì lý do pháp lý)',
    '500': 'Internal Server Error(Lỗi máy chủ nội bộ)', 🚩
    '501': 'Not Implemented(Không được thực hiện)',
    '502': 'Bad Gateway(Cổng xấu)',
    '503': 'Service Unavailable(dịch vụ Không sẵn có)',
    '504': 'Gateway Timeout(Cổng Time-out)',
    '505': 'HTTP Version Not Supported(Phiên bản HTTP không được hỗ trợ)',
    '506': 'Variant Also Negotiates(Biến thể cũng đàm phán)',
    '507': 'Insufficient Storage(Không đủ dung lượng lưu trữ)',
    '508': 'Loop Detected(Vòng lặp được phát hiện)',
    '509': 'Bandwidth Limit Exceeded(Giới hạn băng thông vượt quá)',
    '510': 'Not Extended(Không mở rộng)',
    '511': 'Network Authentication Required(Yêu cầu xác thực mạng)'
  },
  Agent: [Function: Agent] { defaultMaxSockets: Infinity }, 🚩
  ClientRequest: [Function: ClientRequest], 🚩
  IncomingMessage: [Function: IncomingMessage],🚩
  OutgoingMessage: [Function: OutgoingMessage],
  Server: [Function: Server], 🚩
  ServerResponse: [Function: ServerResponse], 🚩
  createServer: [Function: createServer], 🚩
  validateHeaderName: [Function: wrappedFn] { withoutStackTrace: [Function (anonymous)] }, 🚩
  validateHeaderValue: [Function: wrappedFn] { withoutStackTrace: [Function (anonymous)] }, 🚩
  get: [Function: get], 🚩
  request: [Function: request],
  setMaxIdleHTTPParsers: [Function: setMaxIdleHTTPParsers], 🚩
  maxHeaderSize: [Getter], 🚩
  globalAgent: [Getter/Setter] 🚩


[
  req.on[
    end, data, close, error, resume, readable, pause
  ],
  server.on[
    checkContinue, checkExpectation, close, connect, connection, dropRequest, error, listening, request, upgrade
  ],
  res.on[
    close, data, end, error, pause, readable, resume 
  ]
  res.setEncoding[
    ascii, base64, base46, base46url, binary, hex, latin1, ucs-2, ucs2, utf-16le, utf-8, utf16le, utf8,
  ]
]