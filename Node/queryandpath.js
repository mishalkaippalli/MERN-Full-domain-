const express = require("express");

const app = express()

app.get('/sum', (req, res) =>{
    
    let num1 = Number(req.query.a);
    let num2 = Number(req.query.b);

    if(isNaN(num1) || isNaN(num2)){
        return res.status(400).json({error: "not a number"})
    }
    let sum = num1 + num2

    res.json({num1, num2, sum})
})



app.listen(3000, () => console.log("app running at 3000"))