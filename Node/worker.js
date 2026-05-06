process.on("message", (data) => {
    console.log("child", data.toString());
    process.send("data from child")
});
