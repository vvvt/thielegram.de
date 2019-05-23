const express = require('express');
const fs = require('fs');

let app = express();


app.get('/hello', function (req, res) {
  res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.get('/color', (req, res) => {
  res.send('<html><body><h1>Color Widget</h1></body></html>');
});

app.get('/api/prog', (req, res) => {
  res.send('Programming');
});

app.get('/api/cv', (req, res) => {
  res.send('CV');
});

app.get('/api/music', (req, res) => {
  res.send('Music');
});

app.get('/api/art', (req, res) => {
  res.send('Art');
});

app.get('/api/back', (req, res) => {
  res.send('Test');
});


var server = app.listen(5000, function () {
  console.log('Node server is running..');
});
