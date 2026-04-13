// error handling middleware

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     throw new Error('something went wrong')
// });

// app.use((err, req, res, next) => {
//     console.log("error handling middleware");

//     res.status(err.status || 500).json({
//         success: false,
//         message: err.message
//     })
// })

// app.listen(3000, () => console.log('server running on port 3000'));

// application level middleware

// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//     console.log("middle ware works here")
//     next()
// })
// app.get('/',(req, res) => {
//     res.send("heyoo")
// })

// app.listen('3000', console.log("app running on 3000"))

// create an app level middleware and show the date in sever side

const express = require('express');
const app = express();

app.use((req, res, next)=> {
    const date = new Date();
    console.log(date.toString());
    req.body = date
    next();
})

app.get('/',(req, res, next) => {
    res.send(req.body.toString())
})

app.listen('3000', console.log("app running on 3000"))