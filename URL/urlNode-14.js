const { URL } = require('node:url');
const pathname = '/hung/kudo';
const search = '?d=e';
const hash = '#fgh';
const link = new URL(`https://www.google.com${pathname}${search}${hash}`);
console.log(link)