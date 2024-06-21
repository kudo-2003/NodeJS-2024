const url = require('url');

const myUrl = new url.URL('http://wwwgoogle.com/p/a/t/h?query=string#hash');
myUrl.searchParams.append('newParam', 'value');
console.log(myUrl.href);
const parsedUrl = url.parse(myUrl.href, true);
console.log(parsedUrl.query);
const formattedurl = url.format(parsedUrl);
console.log(formattedurl);