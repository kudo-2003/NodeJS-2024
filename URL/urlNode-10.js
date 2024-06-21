const url = require('url');
const path = require('path');
const fs = require('fs').promises;

const filePath = path.join(__dirname, './FileTXT/example.txt');
const fileUrl = url.pathToFileURL(filePath);
console.log(fileUrl.href);
async function readFileFromUrl(fileUrl){
    try {
        const content = await fs.readFile(fileUrl, { encoding: 'utf8' });
        return content;
    }catch (error){
        console.log('Error reading file: ', error);
    };
};
readFileFromUrl(fileUrl).then(content => console.log(content));
