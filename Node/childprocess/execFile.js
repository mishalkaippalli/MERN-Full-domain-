const { execFile } = require('child_process');

// run a node file directly
execFile('node', ['script.js'], (error, stdout, stderr) => {
  if (error) {
    console.log(`Error: ${error.message}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});