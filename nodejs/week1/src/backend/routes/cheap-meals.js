const express = require('express');
const app = express();
const fs = require("fs");

const meals = JSON.parse(fs.readFileSync(__dirname + "/../data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/../data/reviews.json"));

app.get("/cheap-meals", (req, res) => {
	const cheapMeals = 
  meals.filter(meal => meal.price < 80);
  cheapMeals.map(meal => {
    meal.reviews = reviews.filter(review => review.mealId === meal.id);
  });
  res.json(cheapMeals);
});

module.exports = app;