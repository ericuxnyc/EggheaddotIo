const express = require('express');
const app = express();
const port = 3000;

app.get('/', 
    (req, res) => res.send('Hello World from express'));

app.get('/yo', (req, res)=> res.send("YO!"))
app.listen(3000, () => console.log('Example app listening on port 3000!'));