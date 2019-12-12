const express = require('express');
const app = express();
const fs = require("fs");

const reservations = JSON.parse(fs.readFileSync(__dirname + "/../data/reservations.json"));

app.get("/reservations", (req, res) => {
  res.json(reservations);
});

module.exports = app;