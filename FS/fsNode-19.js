const fs = require('node:fs');
const path = require('node:path');
const chmodRecursive = (dir, mode, callback) => {
  fs.stat(dir, (err, stats) => {
    if (err) return callback(err);
    if (stats.isDirectory()) {
      fs.readdir(dir, { withFileTypes: true }, (err, files) => {
        if (err) return callback(err);
        let count = files.length;
        if (count === 0) {
          return fs.chmod(dir, mode, callback);
        }
        files.forEach((file) => {
          const fullPath = path.join(dir, file.name);
          if (file.isDirectory()) {
            chmodRecursive(fullPath, mode, (err) => {
              if (err) return callback(err);
              count--;
              if (count === 0) callback(null);
            });
          } else {
            fs.chmod(fullPath, mode, (err) => {
              if (err) return callback(err);
              count--;
              if (count === 0) callback(null);
            });
          }
        });
      });
    } else {
      fs.chmod(dir, mode, callback);
    }
  });
};

chmodRecursive('./FileTXT', 0o775, (err) => {
  if (err) {
    console.error(`Error changing permissions: ${err.message}`);
  } else {
    console.log('Permissions changed successfully for all files and directories');
  }
});
