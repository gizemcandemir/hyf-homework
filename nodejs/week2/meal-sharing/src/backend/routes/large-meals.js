const express = require('express');
const app = express();
const fs = require("fs");

const meals = JSON.parse(fs.readFileSync(__dirname + "/../data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/../data/reviews.json"));

app.get("/large-meals", (req, res) => {
	const largeMeals = 
  meals.filter(meal => meal.maxNumberOfGuests > 4);
  largeMeals.map(meal => {
    meal.reviews = [];
    reviews.forEach(review => {
      if (review.mealId === meal.id) {
        meal.reviews.push(review);
      }
    });
  });
  res.json(largeMeals);
});

module.exports = app;