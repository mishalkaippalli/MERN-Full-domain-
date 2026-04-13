const fs = require("fs");

fs.writeFile("file.txt", "yoo its me mishal",() => {
    console.log("writed on the file.txt")
})
fs.readFile("file.txt", 'utf-8',(err, data) => {
    console.log(data)
})

