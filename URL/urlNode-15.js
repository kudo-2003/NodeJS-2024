const { URL } = require('node:url');
const link = new URL('/foo', 'https://www.google.com/');
console.log(link.href);
console.log(link.toJSON);
console.log(link.pathname);
console.log(link.username);