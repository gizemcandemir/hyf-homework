const express = require('express');
const app = express();
const fs = require("fs");

const reservations = JSON.parse(fs.readFileSync(__dirname + "/../data/reservations.json"));

app.get("/reservations", (req, res) => {
  res.json(reservations);
});

app.get('/reservations/:id', (req, res) => {
  const { id } = req.params;
  const reservation = reservations.filter(reservation => {
    return reservation.id === parseInt(id)
  });
  res.send(reservation);
});

module.exports = app;