/* This JavaScript code snippet is using the `fs` module to read content from two text files
(`first.txt` and `second.txt`) and then write a new file (`testWiteFile.txt`) with the combined
content of the two files. */
/* The line `const { readFile, writeFile } = require('fs').promises` is importing the `readFile` and
`writeFile` functions from the `fs` module in Node.js. The `.promises` property is used to access
the promise-based versions of these functions, which return promises that can be handled using
`async/await` syntax for better readability and error handling. This allows you to read and write
files asynchronously in a more modern and efficient way. */
const { readFile, writeFile } = require('fs').promises
    /**
     * The function `start` reads the contents of two text files, concatenates them with a message, and
     * writes the result to a new text file while also logging the contents of the two files.
     */
const start = async() => {
    /* This code snippet is using asynchronous file operations in Node.js to read the contents of two text
    files (`first.txt` and `second.txt`), concatenate them with a message, and then write the result to
    a new text file (`testWiteFile.txt`). Here's a breakdown of what the code is doing: */
    try {
        /* The code snippet you provided is performing the following tasks: */
        const first = await readFile('./FileTXT/first.txt', 'utf8')
        const second = await readFile('./FileTXT/second.txt', 'utf8')
        await writeFile('./FileTXT/testWiteFile.txt', `This is awesome: ${first} ${second}`, { flag: 'a' })
        console.log(`${first} and ${second}`);
    } catch (error) {
        console.log(error);
    };
};
/* The `start();` function call is invoking the `start` function defined earlier in the code. This
function is responsible for reading the contents of two text files (`first.txt` and `second.txt`),
concatenating them with a message, and then writing the result to a new text file
(`testWiteFile.txt`). By calling `start();`, the asynchronous file operations defined within the
`start` function will be executed, ultimately achieving the desired file manipulation tasks. */
start();