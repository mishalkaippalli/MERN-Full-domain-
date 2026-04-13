const express = require("express");

const app = express();
//app level middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log("app level middleware");
     next();
})

//roter level middleware
app.get("/sum", (req, res, next) => {
    console.log("router level middleware");
    next();
}, (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    let sum = num1 + num2;
    res.send(`sum of ${num1} and ${num2} is ${sum}`)
})

app.get("/about", (req, res) => {
    res.send("at about page")
})
app.get("/home", (req, res) => {
    res.send("at home page")
})
//query params
// app.get("/sum", (req, res) => {
//     const num1 = Number(req.query.num1)
//     const num2 = Number(req.query.num2)

//     let sum = num1 + num2;
//     res.send(`sum of ${num1} and ${num2} is ${sum}`)
// })
//path params
app.get("/user/:id", (req, res) => {
    const id = req.params.id
    res.json(`user id is ${id}`)
})


app.listen(3000, () => console.log("app running on port 3000"));