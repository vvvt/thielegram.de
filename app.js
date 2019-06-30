const express = require('express');
const fs = require('fs');

let app = express();

app.get('/api/code', (req, res) => {
  res.sendFile('html/code.html', {root: __dirname });
});

app.get('/api/cv', (req, res) => {
  res.sendFile('html/cv.html', {root: __dirname });
});

app.get('/api/music', (req, res) => {
  res.sendFile('html/music.html', {root: __dirname });
});

app.get('/api/art', (req, res) => {
  res.sendFile('html/art.html', {root: __dirname });
});

app.get('/api/home', (req, res) => {
  res.sendFile('html/home.html', {root: __dirname });
});

app.get('/api/imprint', (req, res) => {
  res.sendFile('html/imprint.html', {root: __dirname });
});


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 5000);
console.log("LISTEN ON ",process.env.PORT || 5000);