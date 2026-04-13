process.on("message", (msg) => {
    console.log("mesaage recieved from parent", msg);
    process.send("data from child");
})
