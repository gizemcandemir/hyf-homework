const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("method: " + req.method);
  console.log("date: " + Date.now());
  next();
});

app.get("/", (req, res) => {
	res.send("hello world!");
});

const mealsRouter = require('./routes/meals.js');
app.get('/meals', mealsRouter);

const cheapMealsRouter = require('./routes/cheap-meals.js');
app.get('/cheap-meals', cheapMealsRouter);

const largeMealsRouter = require('./routes/large-meals.js');
app.get('/large-meals', largeMealsRouter);

const randomMealRouter = require('./routes/meal.js');
app.get('/meal', randomMealRouter);

const reservationsRouter = require('./routes/reservations.js');
app.get('/reservations', reservationsRouter);

const randomReservationRouter = require('./routes/reservation.js');
app.get('/reservation', randomReservationRouter);

app.listen(3000, () => console.log("Server started!"));