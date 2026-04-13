const {fork} = require("child_process");

const worker = fork('worker.js');
worker.send(5)

worker.on("message", (result) => {
    console.log("main result recived : ",result)
});

