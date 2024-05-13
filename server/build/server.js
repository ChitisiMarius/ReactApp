"use strict";

var express = require('express');
var cors = require('cors');
var app = express();
var port = 5000;

// Configurația CORS să permită doar anumite origini
var corsOptions = {
  origin: 'https://chitisimarius.com',
  // Adresa ta publică
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.get('/', function (req, res) {
  res.json({
    message: 'Serverul este activ!'
  });
});
app.listen(port, function () {
  console.log("Serverul ruleaz\u0103 pe http://localhost:".concat(port));
});