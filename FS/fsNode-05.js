/* The line `const { writeFileSync } = require('fs');` in JavaScript is using destructuring assignment
to extract the `writeFileSync` function from the `fs` module in Node.js. This allows you to directly
use the `writeFileSync` function without having to reference `fs.writeFileSync` every time. It
simplifies the code and makes it more concise. */
const { writeFileSync } = require('fs');
for (let i = 0; i < 20; i++) {
    writeFileSync('./FileTXT/big.txt', `Hello Hung ${i}\n`,
        /* The `{ flag: 'a' }` option in the
           `writeFileSync` method is specifying the
           flag to indicate how the file should be
           opened. In this case, the flag `'a'`
           stands for append mode. When a file is
           opened in append mode, new data is
           written to the end of the file without
           overwriting the existing content. This
           means that each time the `writeFileSync`
           function is called with this flag, it
           will add the new content to the existing
           content in the file without deleting the
           previous content. */
        { flag: 'a' });
}