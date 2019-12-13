const express = require("express");
const app = express();

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

const mealsRouter = require('./routes/meals.js');
app.get('/meals', mealsRouter);
app.get('/meals/:id', mealsRouter);
app.get('/api/meals/?', mealsRouter);

const cheapMealsRouter = require('./routes/cheap-meals.js');
app.get('/cheap-meals', cheapMealsRouter);

const largeMealsRouter = require('./routes/large-meals.js');
app.get('/large-meals', largeMealsRouter);

const randomMealRouter = require('./routes/meal.js');
app.get('/meal', randomMealRouter);

const reservationsRouter = require('./routes/reservations.js');
app.get('/reservations', reservationsRouter);
app.get('/reservations/:id', reservationsRouter);

const randomReservationRouter = require('./routes/reservation.js');
app.get('/reservation', randomReservationRouter);

const reviewsRouter = require('./routes/reviews.js');
app.get('/reviews', reviewsRouter);
app.get('/reviews/:id', reviewsRouter);

app.listen(3000, () => console.log("Server started!"));