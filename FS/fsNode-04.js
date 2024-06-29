/* This JavaScript code is using Node.js's built-in 'fs' module to read a file named 'big.txt' located
in the 'FileTXT' directory. */
/* This line of code is importing the `createReadStream` function from the Node.js built-in 'fs'
module. The `createReadStream` function is used to create a readable stream to read data from a file
asynchronously. In this case, it is being used to read the file named 'big.txt' located in the
'FileTXT' directory. */
const { createReadStream } = require('fs');
/* The line `const stream = createReadStream('./FileTXT/big.txt');` is creating a readable stream using
Node.js's built-in `fs` module to read data from the file named 'big.txt' located in the 'FileTXT'
directory. The `createReadStream` function is used to asynchronously read the contents of the file
and store it in the `stream` variable. This allows the program to process the file's data in chunks
as it becomes available, rather than loading the entire file into memory at once. */
const stream = createReadStream('./FileTXT/big.txt');
/* The code `stream.on('data', (result) => { console.log(result); });` is setting up an event listener
on the `stream` object. Specifically, it is listening for the 'data' event which is emitted when new
data is available to be read from the file being streamed. */
stream.on('data', (result) => {
    console.log(result);
});
/* The line `stream.on('error', (err) => console.log(err));` is setting up an event listener on the
`stream` object to handle any errors that may occur during the reading of the file. */
stream.on('error', (err) => console.log(err));