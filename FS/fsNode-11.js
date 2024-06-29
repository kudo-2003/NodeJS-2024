const fs = require('fs');
const path = require('node:path');
async function processDirectory(dirPath){
    const dir = await fs.promises.opendir(dirPath);
    console.log(`Opened directory: ${dirPath}`);
    for await (const dirent of dir){
        const fullPath = path.join(dirPath, dirent.name);
        if(dirent.isDirectory()){
            console.log(`Directory: directory: ${fullPath}`);
            await processDirectory(fullPath);
        }else if(dirent.isFile()){
            console.log(`File: ${fullPath}`);
            await processFile(fullPath);
        };
    };
};
async function processFile(filePath){
    try{
        const content = await fs.promises.readFile(filePath, 'utf8');
        console.log(`Read file: ${filePath}, Content: ${content}`);
    }catch(e){
        console.error(`Error reading file ${filePath}: ${e.message}`);};
};
const directoryPath = './FS/FileTXT';
processDirectory(directoryPath).then(() => console.log('Directory processing complete')).catch(e => console.error(e));