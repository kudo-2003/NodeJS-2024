const url = require('url');
const idnDomain = 'munchen.de';
const asciiDomain = url.domainToASCII(idnDomain);
console.log(asciiDomain);