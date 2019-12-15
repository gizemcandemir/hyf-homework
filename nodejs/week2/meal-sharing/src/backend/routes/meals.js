const express = require("express");
const app = express();
const fs = require("fs");

const meals = JSON.parse(fs.readFileSync(__dirname + "/../data/meals.json"));
const reviews = JSON.parse(
	fs.readFileSync(__dirname + "/../data/reviews.json")
);

app.get("/meals", (req, res) => {
	meals.map(meal => {
		meal.reviews = [];
		reviews.forEach(review => {
			if (review.mealId === meal.id) {
				meal.reviews.push(review);
			}
		});
	});
	res.json(meals);
});

app.get("/meals/:id", (req, res) => {
	const { id } = req.params;
	const meal = meals.filter(meal => {
		return meal.id === parseInt(id);
	});
	if (meal.length > 0) {
		res.send(meal);
	} else if (!isNaN(id)) {
		res.status(404);
		res.send(`Error:
Status Code: ${res.statusCode}
No meal found with id:${id}`);
	} else if (isNaN(id)) {
		res.status(400);
		res.send(`Error:
Status Code: ${res.statusCode}
'id' is supposed to be a number`);
	}
});

// Get meals that has a price smaller than maxPrice
// example: /meals?maxPrice=90
app.get("/api/meals?", (req,res)=> {
  const { maxPrice } = req.query;
  const mealsLowerThanMaxPrice = meals.filter(meal => {
   if (meal.price <= maxPrice) {
     return meal;
   };
  });
  res.send(mealsLowerThanMaxPrice);
});


// app.get("/api/meals?", (req,res)=> {
//   const { title } = req.query;
//   const mealsIncludingTitleQuery = meals.filter(meal => {
//     return meal.title.toLowerCase().includes(title.toLowerCase());
//   });
//   res.send(mealsIncludingTitleQuery);
// });

// Get meals that has been created after the date
// example: api/meals?createdAfter=2019-12-07
// app.get("/api/meals?", (req, res) => {
//   const { createdAfter } = req.query;
// 	const mealsCreatedAfterQuery = meals.filter(meal => {
// 		if (new Date(meal.createdAt) > new Date (createdAfter)) {
//       return meal;
// 		}
// 	});
// 	res.send(mealsCreatedAfterQuery);
// });

// Only specific number of meals
// example: api/meals?limit=2
// app.get("/api/meals?", (req, res) => {
//   const { limit } = req.query;
//   const limitedMeals = meals.slice(0, parseInt(limit));
//   res.send(limitedMeals);
// });

module.exports = app;
