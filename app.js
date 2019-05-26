const express = require('express');
const fs = require('fs');

let app = express();


app.get('/hello', function (req, res) {
  res.send('<html><body><h1>Hello World</h1></body></html>');
});

app.get('/api/color', (req, res) => {
  res.sendFile('html/color.html', {root: __dirname });
});

app.get('/api/code', (req, res) => {
  res.send('Code');
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
