const fs = require('node:fs');
const path = require('node:path');

function readDirectory(dirPath){
    let dir;
    let fileCount = 0;
    let filesByExtension = {};
    let entry;
    try{
        dir = fs.opendirSync(dirPath);
    }catch (err){
        console.error(err);
        return;
    };
    while((entry = dir.readSync()) !== null){
        const fullPath = path.join(dirPath, entry.name);
        if(entry.isDirectory()){
            console.log(`Directory:  ${fullPath}`);
            readDirectory(fullPath);
        }else if(entry.isFile()){
            console.log(`File: ${fullPath}`);
            fileCount++;
            const ext = path.extname(entry.name).toLowerCase();
            if(!filesByExtension[ext]){ filesByExtension[ext] = []; };
            filesByExtension[ext].push(fullPath);
        };
    };
    dir.closeSync();
    console.log(`Total files: ${fileCount}`);
    for(const [ext, files] of Object.entries(filesByExtension)){
        console.log(`Files with extension ${ext} :`);
        files.forEach(file => console.log(` - ${file}`));
    };
};

function processFile(filePath){
    try{
        const content = fs.readFileSync(filePath, 'utf-8');
        console.log(`Content of ${filePath} : \n ${content}`);
    }catch(e){
        console.error(e);
    };
};
const directoryPath = './FS/FileTXT';
readDirectory(directoryPath);
const specificFilePath = './FS/FileTXT/two.txt';
processFile(specificFilePath);