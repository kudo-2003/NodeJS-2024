const fs = require('node:fs');
const path = require('node:path');
const filePath = path.join(__dirname, 'hello.txt');
function checkFileAccess(filePath){
    try{
        fs.accessSync(filePath, fs.constants.R_OK);
        console.log(`File ${filePath} is readable`);
    }catch(e){
        if(e.code === 'ENOENT'){
            console.log('File does not exist');
        }else if(e.code === 'EACCES'){
            console.log('File not readable');
        }else{
            console.log('Error occurred while checking file access', e);
        };
    };
};

function appendToFile(filePath, content){
    fs.appendFile(filePath, content, (e) =>{
        (e) ? console.log(e) : console.log('File appended successfully');
    });
};

checkFileAccess(filePath);
const contentToAdd = 'This is new content being appended.\n';
appendToFile(filePath, contentToAdd);
checkFileAccess(filePath);