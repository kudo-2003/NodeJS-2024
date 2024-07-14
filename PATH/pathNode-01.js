const path = require('path');
const filePath = '/user/local/bin/test.txt';
const base = path.basename(filePath);
console.log(base); // Output: 'test.txt'
// Extract filename without extension
const baseWithoutExt = path.basename(filePath, '.txt');
console.log(baseWithoutExt); // Output: 'test'
const dir = path.dirname(filePath);
console.log(dir); // Output: '/user/local/bin'
const ext = path.extname(filePath);
console.log(ext); // Output: '.txt'
const pathObject = {
    dir: '/user/local/bin',
    base: 'test.txt'
};

const formattedPath = path.format(pathObject);
console.log(formattedPath); // Output: '/user/local/bin/test.txt'
const isAbs = path.isAbsolute(filePath);
console.log(isAbs); // Output: true
const joinedPath = path.join('/user', 'local', 'bin', 'test.txt');
console.log(joinedPath); // Output: '/user/local/bin/test.txt'
const abnormalPath = '/user//local/bin/../test.txt';
const normalizedPath = path.normalize(abnormalPath);
console.log(normalizedPath); // Output: '/user/local/test.txt'
const parsedPath = path.parse(filePath);
console.log(parsedPath);
// POSIX example
const posixPath = path.posix.join('/user', 'local', 'bin');
console.log(posixPath); // Output: '/user/local/bin'

// Windows example
const winPath = path.win32.join('C:\\', 'user', 'local', 'bin');
console.log(winPath); // Output: 'C:\user\local\bin'
const fromPath = '/user/local/bin';
const toPath = '/user/local/test.txt';

const relativePath = path.relative(fromPath, toPath);
console.log(relativePath); // Output: '../test.txt'
const resolvedPath = path.resolve('/user', 'local', 'bin', '..', 'test.txt');
console.log(resolvedPath); // Output: '/user/local/test.txt'
console.log(path.sep); // Output: '/' on POSIX, '\' on Windows
const namespacedPath = path.toNamespacedPath('C:\\user\\local\\bin');
console.log(namespacedPath); // Output: '\\?\\C:\\user\\local\\bin'
