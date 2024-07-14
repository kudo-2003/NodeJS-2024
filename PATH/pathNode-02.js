const { basename, dirname, extname, isAbsolute, parse } = require('path');
function ProcessFilePath(filePaths){
    filePaths.forEach(filePath => {
        console.log(`Processing: ${filePath}`);
        console.log(`Directory Name: ${dirname(filePath)}`);
        console.log(`Base Name: ${basename(filePath)}`);
        console.log(`Extension: ${extname(filePath)}`);
        console.log(`Is Absolute: ${isAbsolute(filePath)}`);
        console.log(`Parsed path: ${parse(filePath)}`)
        console.log('......... con nhieu');
    });
}
const filePaths = [
    '/user/local/bin/test.txt',
    'C:\\user\\local\\bin\\test.txt',
    '../relative/path/to/file.txt',
    './another/relative/path/file.txt'
];

ProcessFilePath(filePaths);