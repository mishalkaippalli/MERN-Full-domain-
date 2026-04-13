// const {exec} = require("child_process");

// exec("dir", (error, stdout, stderr) => {
//     console.log(stdout)
// })

// const {execFile} = require("child_process")

// execFile("node", ["--version"] , (error, stdout, stderr) => {
//     console.log(stdout)
// })

// const {spawn} = require("child_process");

// const child = spawn("python", ["pythonscript.py"])

// child.stdout.on("data", (data) => {
//     console.log(data.toString())
// })

const {fork} = require("child_process");

const child = fork("child.js")

child.send("data from parent");

child.on("message", (msg) =>{
    console.log("message from child", msg)
})