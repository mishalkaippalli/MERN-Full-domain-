const {exec} = require('child_process');
const { error } = require('console');
const { stdout, stderr } = require('process');

exec('dir', (error, stdout, stderr)=> {
    console.log(stdout)
});

// syntax exec(command, options, callback)