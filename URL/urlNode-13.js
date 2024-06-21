const { URL } = require('node:url');

const link = new URL('https://www.google.com');
link.pathname = 'hung/kudo';
link.search = '?d=e';
link.hash = '#fgh';
console.log(link.href);