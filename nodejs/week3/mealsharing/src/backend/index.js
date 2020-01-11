const express = require("express");
const app = express();
const router = express.Router();
const mealsRouter = require("./api/meals");

const port = process.env.PORT || 5000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use("/api/meals", mealsRouter);
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Mealsharing");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
