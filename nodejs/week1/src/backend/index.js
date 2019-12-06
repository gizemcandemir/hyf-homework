const express = require("express");
const fs = require("fs");

const app = express();

const meals = JSON.parse(fs.readFileSync(__dirname + "/data/meals.json"));
const reviews = JSON.parse(fs.readFileSync(__dirname + "/data/reviews.json"));
const reservations = JSON.parse(fs.readFileSync(__dirname + "/data/reservations.json"));

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

app.get("/", (req, res) => {
	res.send("hello world!");
});

app.get("/meals", (req, res) => {
	meals.map(meal => {
    meal.reviews = [];
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].mealId === meal.id) {
        meal.reviews.push(reviews[i]);
      }
    }
  });
  res.json(meals);
});

app.get("/cheap-meals", (req, res) => {
	const cheapMeals = 
  meals.filter(meal => meal.price < 80);
  cheapMeals.map(meal => {
    meal.reviews = [];
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].mealId === meal.id) {
        meal.reviews.push(reviews[i]);
      }
    }
  });
  res.json(cheapMeals);
});

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

app.get("/reservations", (req, res) => {
  res.json(reservations);
});

app.get("/reservation", (req, res) => {
  let random = Math.ceil(Math.random() * (meals.length))
  const randomReservation = 
  reservations.filter(reservation => reservation.id === random);
  res.json(randomReservation);
});

app.listen(3000, () => console.log("Server started!"));
