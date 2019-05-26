const express = require('express');
const fs = require('fs');

let app = express();

app.get('/api/code', (req, res) => {
  res.send('html/code.html');
});

app.get('/api/cv', (req, res) => {
  res.send('html/cv.html');
});

app.get('/api/music', (req, res) => {
  res.send('html/music.html');
});

app.get('/api/art', (req, res) => {
  res.sendFile('html/art.html', {root: __dirname });
});

app.get('/api/back', (req, res) => {
  res.sendFile('index.html', {root: __dirname });
});


var server = app.listen(5000, function () {
  console.log('Node server is running..');
});
