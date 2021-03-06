const express = require('express');
const app = express();
const fs = require("fs");

const meals = JSON.parse(fs.readFileSync(__dirname + "/../data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/../data/reviews.json"));

app.get("/cheap-meals", (req, res) => {
	const cheapMeals = 
  meals.filter(meal => meal.price < 80);
  cheapMeals.map(meal => {
    meal.reviews = [];
    reviews.forEach(review => {
      if (review.mealId === meal.id) {
        meal.reviews.push(review);
      }
    });
  });
  res.json(cheapMeals);
});

module.exports = app;