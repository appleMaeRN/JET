const express = require('express');
const path = require('path');
const jsonData = require('./jsonData');
const xmlData = require('./xmlData');

const app = express();
const port = 3000;

app.get('/api/json', (req, res) => {
    res.json(jsonData);
});

// XML Endpoint
app.get('/api/xml', (req, res) => {
    res.set('Content-Type', 'text/xml');
    res.send(xmlData);
});

// Start the server
app.listen(port, () => {
    console.log(`Microservice running at http://localhost:${port}`);
});