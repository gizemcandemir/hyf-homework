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
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].mealId === meal.id) {
        meal.reviews.push(reviews[i]);
      }
    }
  });
  res.json(largeMeals);
});

module.exports = app;