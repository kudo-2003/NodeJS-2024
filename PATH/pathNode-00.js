const http = require('node:http');
const { readFileSync } = require('node:fs');
const path = require('node:path');

const homePagePath = path.join(__dirname, 'File/public-00/index.html');
const homeStylesPath = path.join(__dirname, 'File/public-00/styles.css');
const homeImagePath = path.join(__dirname, 'File/public-00/logo.svg');
const homeLogicPath = path.join(__dirname, 'File/public-00/app.js');

console.log('Home Page Path:', homePagePath);
console.log('Home Styles Path:', homeStylesPath);
console.log('Home Image Path:', homeImagePath);
console.log('Home Logic Path:', homeLogicPath);

const homePage = readFileSync(homePagePath);
const homeStyles = readFileSync(homeStylesPath);
const homeImage = readFileSync(homeImagePath);
const homeLogic = readFileSync(homeLogicPath);

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('<h1>About Page </h1>');
        res.end();
    } else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homeStyles);
        res.end();
    } else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'text/svg+xml' });
        res.write(homeImage);
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
