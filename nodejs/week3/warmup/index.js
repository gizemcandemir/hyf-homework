const express = require('express');
// const { PORT } = process.env || 5000;
const PORT = 3000;

const app = express();

app.get('/calculator', (req, res) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	res.send(`Query params: ${data}`);
});

app.get('/calculator/add', (req, res) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	console.log(queryData);
	console.log(data);
	const result = data.reduce((sum, value) => (sum = sum + value), 0);
	res.send(`Query params: ${queryData} and the result is: ${result}`);
})

app.get('/calculator/subtract', (req, res) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	console.log(queryData);
	console.log(data);
	const result = data.reduce((sum, value) => (sum = - sum - value), 0 );
	res.send(`Query params: ${queryData} and the result is: ${result}`);
})

app.get('/calculator/multiply', (req, res) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	console.log(queryData);
	console.log(data);
	const result = data.reduce((sum, value) => (sum = sum * value), 1);
	res.send(`Query params: ${queryData} and the result is: ${result}`);
})

app.get('/calculator/divide', (req, res) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	console.log(queryData);
	console.log(data);
	const result = data.reduce((sum, value) => (sum = sum / value), 1);
	res.send(`Query params: ${queryData} and the result is: ${result}`);
})

app.listen(PORT, ()=> console.log(`Server started at ${PORT}`));