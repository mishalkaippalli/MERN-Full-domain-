//child process.

// const {exec} = require("child_process");
// const { stderr } = require("process");

// exec("dir",(err, stdout, stderr) => {
//     console.log(stdout)
// })

// const {execFile} = require("child_process");
// execFile("python", ["pythonscript.py"], (err, stdout, sdterr) => {
//     console.log(stdout)
// })
// const {spawn} = require('child_process');

// const child = spawn('python', ["pythonscript.py"])

// child.stdout.on("data", (data) => {
//     console.log(data.toString())
// });

const {fork} = require("child_process")


const worker = fork("./worker.js")
worker.send(5)

worker.on("message", (data) =>{
    console.log(data.toString())
})

