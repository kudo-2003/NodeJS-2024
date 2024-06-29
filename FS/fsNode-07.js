const fs = require('fs');
const EventEmitter = require('events');
class FileManager extends EventEmitter{
    constructor(logFile){
        super();
        this.logFile = logFile;
        this.initLogger();
    };
    initLogger(){
        fs.writeFileSync(this.logFile, '', 'utf8');
    };
    log(message){
        const timestamp = new Date().toISOString();
        fs.appendFileSync(this.logFile, `${timestamp} - ${message}\n`, 'utf8');
    };
    checkFileAccess(path){
        try{
            fs.accessSync(path, fs.constants.F_OK | fs.constants.R_OK);
            this.emit('fileReadable', path);
            this.log(`${path} is readable`);
            fs.accessSync(path, fs.constants.W_OK);
            this.emit('fileWritable', path);
            this.log(`${path} is writable`);
        }catch (err){
            if(err.code === 'ENOENT'){
                this.emit('fileNotFound', path);
                this.log(`${path} does not exist`);
            }else if(err.code === 'EACCES'){
                this.emit('permissionDenied', path);
                this.log(`Permission denied for ${path}`);
            }else{
                this.emit('error', err);
                this.log(`An error occurred: ${err.message}`);
            };
        };
    };
    //API
    async readFile(path){
        this.checkFileAccess(path);
        try{
            const data = await fs.promises.readFile(path, 'utf8');
            this.emit('fileRead', path, data);
            this.log(`Content of ${path} has been read`);
            return data;
        }catch(err){
            this.emit('error', err);
            this.log(`Error reading ${path}: ${err.message}`);
        };
    };
    //API
    async writeFile(path, data){
        this.checkFileAccess(path);
        try{
            await fs.promises.writeFile(path, data, 'utf8');
            this.emit('fileWritten', path);
            this.log(`New content written to ${path}`);
        }catch(err){
            this.emit('error', err);
            this.log(`Error writing to ${path}: ${err.message}`);
        };
    };
};
const fileManager = new FileManager('file_operations.log');
fileManager.on('fileReadable', (path) => console.log(`${path} is readable`));
fileManager.on('fileWritable', (path) => console.log(`${path} is writable`));
fileManager.on('fileNotFound', (path) => console.log(`${path} does not exist`));
fileManager.on('permissionDenied', (path) => console.log(`Permission denied for ${path}`));
fileManager.on('fileRead', (path, data) => console.log(`Content of ${path}:\n${data}`));
fileManager.on('fileWritten', (path) => console.log(`New content written to ${path}`));
fileManager.on('error', (err) => console.error(`An error occurred: ${err.message}`));
(async () => {
    const filePath = './FS/FileTXT/one.txt';
    const newData = 'This is some new content. \n';
    await fileManager.readFile(filePath);
    await fileManager.writeFile(filePath, newData);
})();


