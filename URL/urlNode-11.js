const url = require('url');
const fs = require('fs').promises; 
const fileUrl = new url.URL('file:///v:/File/NodeJS-Project/commetURL/FileTXT/example.txt');
const filePath = url.fileURLToPath(fileUrl);
console.log(filePath);

async function readFileFromPath(filePath){
    try{
        const content = await fs.readFile(filePath, { encoding: 'utf8' });
        return content;
    }catch (error){
        console.error('Error reading file: ', error);
    };
};

readFileFromPath(filePath).then(content => console.log(content));
