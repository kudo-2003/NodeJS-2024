const fs = require('node:fs');

// Asynchronous copy with options and callback
fs.cp('source', 'destination', { recursive: true, force: true }, (err) => {
  if (err) {
    console.error('Failed to copy:', err);
    return;
  }
  console.log('Copied successfully with options');
});

// Synchronous copy with options
try {
  fs.cpSync('source', 'destination', { recursive: true, force: true });
  console.log('Copied successfully with options');
} catch (err) {
  console.error('Failed to copy:', err);
}
