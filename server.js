const express = require('express');
const parser = require('body-parser');
const server = express();
const path = require('path');
// const PORT = process.env.PORT

const MongoClient = require('mongodb').MongoClient;

server.use(express.static('client/public'));
server.use(parser.urlencoded({extended: true}));
server.use(parser.json());

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if(err) {
    console.log(err);
    return;
  }

  server.get('/', function (req, res) {
    res.sendFile('index.html');
  });

  const db = client.db('resume');
  console.log('connect to database');

  server.post('/api/resume', function(req, res) {
    db.collection('resume').insert(req.body, function(err, result) {
      if(err) {
        console.log(err);
        res.status(500);
        res.send();
        return;
      }
      res.json(result);
    });
  });

  server.get('/api/resume', function(req, res) {
    db.collection('resume').find().toArray(function(err, result) {
      if(err) {
        console.log(err);
        res.status(500);
        res.send();
        return;
      }
      res.json(result);
    });
  });

  server.delete('/api/resume', function(req, res) {
    db.collection('resume').remove({}, function(err, result) {
      if(err) {
        console.log(err);
        res.status(500);
        res.send();
        return;
      }
      res.status(204);
      res.send();
    });
  });




  server.listen(3000, function () {
    // const host = server.address().address;
    // const port = server.address().port;
    console.log('Example server listening at http://localhost:3000');
  });
});
