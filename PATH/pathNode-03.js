const fs = require('fs');
const path = require('path');
function copyFile(src, dest){
    const readStream = fs.createReadStream(src);
    const writeStream = fs.createWriteStream(dest);
    readStream.on('error', handleError);
    writeStream.on('error', handleError);
    readStream.on('close', function S(){
        fs.unlink(src, handleError)
    });
    readStream.pipe(writeStream);
};
function moveFile(src, dest){
    fs.rename(src, dest, (e) =>{
        if(e){
            if(e.code === 'EXDEV'){
                copyFile(src, dest);
            }else {
                handleError(e);
            };
        };
    });
};
function deleteFile(filePath){
    fs.unlink(filePath, (e) =>{
        (e) ? handleError(e) : console.log(`Deleted file: ${filePath}`);
    });
};
function listFilesRecursive(dirPath){
    fs.readdir(dirPath, { withFileTypes: true }, (err, files) =>{
        if(err){
            handleError(err);
            return ;
        };
    });
    files.forEach(file =>{
        const fullPath = path.join(dirPath, file.name);
        if(file.isDirectory()){
            listFilesRecursive(fullPath);
        }else{
            console.log(fullPath);
        };
    });
};
function handleError(e){ console.error('Error: ', e.message); }
const examplePaths = [
    'V:\\File\\NodeJS -Project\\test.txt',
    'V:\\File\\NodeJS -Project\\subdir\\example.txt',
    'V:\\File\\NodeJS -Project\\anotherdir\\sample.txt',
    'V:\\File\\NodeJS -Project\\..\\relative\\path\\to\\file.txt'
];
function advancedPathOperations(filePaths){
    filePaths.forEach(filePath => {
        console.log(`Processing: ${filePath}`);
        const dirName = path.dirname(filePath);
        console.log(`Directory Name: ${dirName}`);
        const baseName = path.basename(filePath);
        console.log(`Base Name: ${baseName}`);
        const extension = path.extname(filePath);
        console.log(`Extension: ${extension}`);
        const isAbs = path.isAbsolute(filePath);
        console.log(`Is Absolute: ${isAbs}`);
        const parsedPath = path.parse(filePath);
        console.log('Parsed Path:', parsedPath);
        const normalizedPath = path.normalize(filePath);
        console.log(`Normalized Path: ${normalizedPath}`);
        const joinedPath = path.join(dirName, 'joined_dir', baseName);
        console.log(`Joined Path: ${joinedPath}`);
        const resolvedPath = path.resolve(dirName, '..', 'resolved_dir', baseName);
        console.log(`Resolved Path: ${resolvedPath}`);
        console.log('---');
    });
};
advancedPathOperations(examplePaths);
function createDirectories(dirPath){
    fs.mkdir(dirPath, { recursive: true }, (e) =>{
        (e) ? handleError(e) : console.log(`Created directory: ${dirPath}`);
    });
};
function readFile(filePath){
    fs.readFile(filePath, 'utf8', (e, data) =>{
        (e) ? handleError(e) : console.log(`File content of ${filePath} : ${data}`);
    });
};
function writeFile(filePath, content){
    fs.writeFile(filePath, content, 'utf8', (e) =>{
        if(e){
            handleError(e);
        }else{
            console.log(`Writen to file: ${filePath}`);
        };
    });
};
const dirPath = path.join('V:\\File\\NodeJS -Project', 'example_dir');
createDirectories(dirPath);
const filePath = path.join(dirPath, 'example.txt');
writeFile(filePath, 'This is an example content.');
readFile(filePath);
listFilesRecursive('V:\\File\\NodeJS -Project');