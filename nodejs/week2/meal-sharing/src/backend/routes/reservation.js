const express = require('express');
const app = express();
const fs = require("fs");

const meals = JSON.parse(fs.readFileSync(__dirname + "/../data/meals.json"));
const reservations = JSON.parse(fs.readFileSync(__dirname + "/../data/reservations.json"));

app.get("/reservation", (req, res) => {
  let random = Math.ceil(Math.random() * (reservations.length));
  res.json(reservations[random]);
});

module.exports = app;