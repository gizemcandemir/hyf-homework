const express = require('express');
const app = express();
const fs = require("fs");

const meals = JSON.parse(fs.readFileSync(__dirname + "/../data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/../data/reviews.json"));

app.get("/meal", (req, res) => {
  let random = Math.ceil(Math.random() * (meals.length))
  const randomMeal = 
  meals.filter(meal => meal.id === random);
  randomMeal.map(meal => {
    meal.reviews = [];
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].mealId === meal.id) {
        meal.reviews.push(reviews[i]);
      }
    }
  });
  res.json(randomMeal);
});

module.exports = app;