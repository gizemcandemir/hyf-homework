const express = require('express');
const app = express();
const fs = require("fs");

const meals = JSON.parse(fs.readFileSync(__dirname + "/../data/meals.json"));
const reservations = JSON.parse(fs.readFileSync(__dirname + "/../data/reservations.json"));

app.get("/reservation", (req, res) => {
  let random = Math.ceil(Math.random() * (meals.length))
  const randomReservation = 
  reservations.filter(reservation => reservation.id === random);
  res.json(randomReservation);
});

module.exports = app;