const express = require("express");
const fs = require("fs");

const port = process.env.port || 3000;
const route = express();

route.get("/numbers/add", (req, res) => {
	const num1 = parseInt(req.query.first);
	console.log(typeof num1);
	const num2= parseInt(req.query.second);
	res.send(`${num1}+${num2}=${num1 + num2}`);
});

route.get("/numbers/multiply/:first/:second", (req, res) => {
	const num1 = parseInt(req.params.first);
	const num2 = parseInt(req.params.second);
	res.send(`${num1}*${num2}=${num1*num2}`);
});

route.listen(port, () => console.log(`Server start at port ${port}`));
