process.on("message" , (number) => {
    console.log("worker recieved ", number)
    const result = number * 1000;
    process.send(result)
})