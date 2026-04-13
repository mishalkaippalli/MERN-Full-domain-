const {spawn} = require('child_process');

const child = spawn('python', ["pythonscript.py"])

child.stdout.on("data", (data) => {
    console.log(data.toString())
});
