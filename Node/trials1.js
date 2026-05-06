// Create a custom middleware.

// Requirements:

// Log method, URL, and timestamp
// Apply globally

const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    console.log(new Date);

    next();
})

app.get("/home", (req, res) => {
   res.send("home")
})

app.listen(3000, () => console.log("App runnning on 3000"));