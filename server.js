const express = require('express');
const transform = require('./json-path-transform');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.post('/transform', (req, res) => {
    const { data, template } = req.body;

    res.send(transform(data, template));
});

app.listen(PORT, HOST);
console.log("Running");