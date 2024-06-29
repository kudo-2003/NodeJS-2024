const fs = require('fs');
const path = require('path');
class DirectoryProcessor {
  constructor(directoryPath) {
    this.directoryPath = directoryPath;
    this.logFilePath = path.join(directoryPath, 'four.txt');
    this.logFileDescriptor = null;
  };
  init() {
    this.logFileDescriptor = fs.openSync(this.logFilePath, 'w');
    this.processDirectory(this.directoryPath);
    fs.closeSync(this.logFileDescriptor);
    console.log(`Aggregated log written to ${this.logFilePath}`);
  };
  processDirectory(dirPath) {
    let dir;
    try {
      dir = fs.opendirSync(dirPath);
    } catch (err) {
      console.error(`Error opening directory: ${err.message}`);
      return;
    };
    let entry;
    while ((entry = dir.readSync()) !== null) {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        console.log(`Directory: ${fullPath}`);
        this.processDirectory(fullPath); // Recursive call to process subdirectory
      } else if (entry.isFile()) {
        console.log(`File: ${fullPath}`);
        this.processFile(fullPath);
      };
    }; dir.closeSync();
  };
  processFile(filePath) {
    try {
      const fileDescriptor = fs.openSync(filePath, 'r');
      const stats = fs.fstatSync(fileDescriptor);
      const buffer = Buffer.alloc(stats.size);
      fs.readSync(fileDescriptor, buffer, 0, stats.size, 0);
      fs.closeSync(fileDescriptor);
      const fileContent = buffer.toString('utf8');
      fs.writeSync(this.logFileDescriptor, `Content of ${filePath}:\n${fileContent}\n\n`);
    } catch (err) { console.error(`Error processing file ${filePath}: ${err.message}`); };
  };
}; 
const directoryPath = './FS/FileTXT';
const directoryProcessor = new DirectoryProcessor(directoryPath);
directoryProcessor.init();
