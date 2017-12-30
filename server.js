const express = require('express');
const app = express();
const path = require('path');
// const PORT = process.env.PORT

app.use(express.static('client/public'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});


const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
