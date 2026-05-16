const express = require("express");
const app = express();
app.listen(3000, () => console.log("app running on 3000"));


// Write a Node.js/Express API endpoint that takes two numbers as path parameters (e.g., /divide/:num1/:num2),
//  divides the first by the second, and returns the result. 
// How would you handle the scenario where the second number is zero?

// const express = require('express');
// const app = express();

// app.get("/divide/:num1/:num2", (req, res) => {
//     const n1 = parseFloat(req.params.num1);
//     const n2 = parseFloat(req.params.num2);

//     if (n2 === 0) {
//         return res.status(400).json({ error: "Division by zero is not allowed" });
//     }
    
//     res.json({ result: n1 / n2 });
// });


// app.listen(3000, () => console.log("app running on 3000"));

// Question 2:
// The Excel file mentions "Create a middleware to validate custom headers".

// The Task: Write a custom Express middleware function that checks if a request contains a header named x-api-key.

// If the header is missing or does not match a secret string (e.g., "secret123"), return a 401 Unauthorized response.

// If it matches, allow the request to proceed to the next route.

// app.use("/home", (req, res, next) => {
//     if(!req.header.x-api-key || req.header.x-api-key !== "secret123"){
//         return res.status(403).json({"Unauthorized res"})
//     }
//     next();
// })

// const express = require("express");
// const app = express();

// Custom middleware
// function validateApiKey(req, res, next) {
//     const apiKey = req.headers["x-api-key"];

//     if (!apiKey || apiKey !== "secret123") {
//         return res.status(401).json({
//             error: "Unauthorized: Invalid or missing API key"
//         });
//     }

//     next(); // move to next middleware or route
// }

// // Protected route
// app.get("/dashboard", validateApiKey, (req, res) => {
//     res.json({
//         message: "Welcome to the protected dashboard"
//     });
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// const fs = require("fs");

// const readStream = fs.createReadStream("./input.txt");

// // Create writable stream
// const writeStream = fs.createWriteStream("./output.txt");
// readStream.pipe(writeStream)

// Question 6 (Express Basics):
// The analysis mentions "path param", "query", and "express.json".

// The Scenario:
// Imagine you have an Express route defined as:
// app.post('/user/:id', (req, res) => { ... })

// A client makes a request to: http://localhost:3000/user/101?status=active
// And the request Body (JSON) is: { "role": "admin" }

// The Task:
// Inside the route handler, how do you access:

// The ID (101)?

// The Status (active)?

// The Role (admin)?
// (Note: Mention if any specific middleware is needed for the Body).
// app.use(express.json())
// app.get("/user/:id", (req, res) => {
//     const id = req.params.id
//     const status = req.query.status;
//     const role = req.body.role
    
//     res.send({ id, status, role })

//     console.log("id", id, "status", status, "role", role)
// })

//route params
// app.get("/profile/:id", (req, res) => {

//     const id = req.params.id;

//     res.send(`Profile ID: ${id}`);
// });
//query params
// app.get("/profile", (req, res) => {

//     const product = req.query.product;

//     res.send(`Product: ${product}`);
// });

//router level middleware implementation
const express = require("express");

const router = express.Router();


// Router-level middleware
// router.use((req, res, next) => {

//     console.log("Router middleware executed");

//     next();
// });


// // Routes
// router.get("/profile", (req, res) => {

//     res.send("User Profile");
// });

// router.get("/settings", (req, res) => {

//     res.send("User Settings");
// });


// module.exports = router;

//server.js
// const express = require("express");

// const app = express();

// const userRoutes = require("./routes/userRoutes");


// // Using router
// app.use("/user", userRoutes);


// app.listen(3000, () => {

//     console.log("Server running on port 3000");
// });

//readStream
const fs = require("fs");


// Create read stream
const readStream = fs.createReadStream("input.txt", "utf-8");


// Listen for data
readStream.on("data", (chunk) => {

    console.log("Chunk received:");
    console.log(chunk);
});


// Stream end
readStream.on("end", () => {

    console.log("Reading completed");
});


// Error handling
readStream.on("error", (error) => {

    console.log(error);
});

//writeStream
const fs = require("fs");


// Create write stream
const writeStream = fs.createWriteStream("output.txt");


// Write data
writeStream.write("Hello from Write Stream\n");

writeStream.write("Node.js Streams are efficient\n");


// End stream
writeStream.end();


// Finish event
writeStream.on("finish", () => {

    console.log("Writing completed");
});


// Error handling
writeStream.on("error", (error) => {

    console.log(error);
});


//3. Read Stream + Write Stream (Pipe)
const fs = require("fs");


// Create streams
const readStream = fs.createReadStream("input.txt");

const writeStream = fs.createWriteStream("copy.txt");


// Pipe data
readStream.pipe(writeStream);


console.log("File copied successfully");