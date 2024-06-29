const fs = require('fs');
const path = require('path');
function readAndProcessDirectory(dirPath){
    let dir;
    try{
        dir = fs.opendirSync(dirPath);
    }catch (err){
        console.error(err);
        return ;
    };
    const aggregatedFilePath = path.join(dirPath, 'Three.txt');
    const aggregatedFileDescriptor = fs.openSync(aggregatedFilePath, 'w');
    let entry;
    while((entry = dir.readSync()) !== null){
        const fullPath = path.join(dirPath, entry.name);
        if(entry.isDirectory()){
            console.log(`Directory: ${entry.name}`);
            readAndProcessDirectory(fullPath);
        }else if(entry.isFile()){
            console.log(`File: ${entry.name}`);
            try{
                const content = fs.readFileSync(fullPath, 'utf8');
                fs.writeSync(aggregatedFileDescriptor, `Content of ${fullPath}: \n ${content}\n\n`);
            }catch(err){
                console.error(err);
            };
        };
    };
    dir.closeSync();
    fs.closeSync(aggregatedFileDescriptor);
    console.log(`Aggregated content written to ${aggregatedFilePath}`);
};
const directoryPath = './FS/FileTXT';
readAndProcessDirectory(directoryPath);