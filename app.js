var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/src/index.html");
});

app.get('/contato/', function (req, res) {
  res.send('Contato!');
});

app.get('/receitas/', function (req, res) {
  res.send('Espaço para as receitas da Flávia!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

