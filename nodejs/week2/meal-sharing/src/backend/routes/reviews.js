const express = require('express');
const app = express();
const fs = require("fs");

const meals = JSON.parse(fs.readFileSync(__dirname + "/../data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/../data/reviews.json"));

app.get("/reviews", (req, res) => {
  res.json(reviews);
});

app.get('/reviews/:id', (req, res) => {
  const { id } = req.params;
  const review = reviews.filter(review => {
    return review.id === parseInt(id)
  });
  res.send(review);
});

module.exports = app;