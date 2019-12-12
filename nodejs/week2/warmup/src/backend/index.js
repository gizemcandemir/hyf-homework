const express = require("express");
const fs = require("fs");

const port = process.env.port || 3000;
const route = express();

route.get("/numbers/add", (req, res) => {
	const x = parseInt(req.query.first);
	console.log(typeof x);
	const y = parseInt(req.query.second);
	res.send(`${x}+${y}=${x + y}`);
});

route.get("/numbers/multiply/:first/:second", (req, res) => {
	const x = parseInt(req.params.first);
	const y = parseInt(req.params.second);
	res.send(`${x}*${y}=${x*y}`);
});

route.listen(port, () => console.log(`Server start at port ${port}`));
