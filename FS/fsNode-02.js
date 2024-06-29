/* This JavaScript code snippet is reading the contents of a file named 'first.txt' located in the
'./FileTXT' directory using the Node.js `fs` module. */
/* The line `const { readFile } = require('fs');` is importing the `readFile` function from the Node.js
core module `fs`. This function is used to read the contents of a file asynchronously. By using
object destructuring, the `readFile` function is extracted directly from the `fs` module and
assigned to the variable `readFile`, making it available for use in the code snippet. */
const { readFile } = require('fs');
/**
 * The `getText` function reads a file asynchronously and returns a promise that resolves with the
 * file's content in UTF-8 encoding.
 * @param path - The `path` parameter in the `getText` function is a string that represents the file
 * path from which you want to read the text data.
 * @returns A Promise is being returned.
 */
const getText = (path) => {
    return new Promise((resolve, reject) => {
        /* The `readFile(path, 'utf8', (err, data) => { ... });` code snippet is using the `readFile`
        function from the Node.js `fs` module to read the contents of a file asynchronously. Here's
        a breakdown of what it does: */
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            };
        });
    });
};
/* The line `getText('./FileTXT/first.txt').then((result) => console.log(result)).catch((err) =>
console.log(err));` is executing the `getText` function with the file path './FileTXT/first.txt'. */
getText('./FileTXT/first.txt').then((result) => console.log(result)).catch((err) => console.log(err));