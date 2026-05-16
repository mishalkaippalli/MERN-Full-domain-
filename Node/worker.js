// process.on("message", (data) => {
//     console.log("child", data.toString());
//     process.send("data from child")
// });
process.on("message" , (number) => {
    let result = number*10000
    process.send(result)
})
