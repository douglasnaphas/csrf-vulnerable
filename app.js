var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.get("/cookie",
  function(req, res, next) {
    res.cookie("CSRF-Token", (() => {
      let cook = '';
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for(let i = 0; i < 6; i++) {
        cook += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
      }
      return cook;
    })());
    next();
  },
  function(req, res) {
    res.send({"Output": "You have received a cookie"});
  }
)


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
