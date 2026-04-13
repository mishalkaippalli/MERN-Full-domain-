// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"content-type": "text/plain"})
//     res.end("hello world");
// })

// server.listen(3000, () => console.log("server running on port 3000"));

const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req, res) => {
    res.send('hello world');
})

app.get('/about', (req, res) => {
    res.send('at about page')
})

app.listen(3000, () => console.log('server running at 3000'));
