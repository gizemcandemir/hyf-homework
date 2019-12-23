const express = require('express');
const bodyParser = require('body-parser');
// const { PORT } = process.env || 5000;
const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/calculator', (req, res) => {
	const queryData = Object.values(req.body);
	res.send(`${calculate(queryData)}`);
});

// {	"num1": 1,	"num2": 2,	"num3": 4,	"method": "division" }
function calculate(data) {
	const method = data[data.length-1];
	data.pop();
	if (method === "addition") {
		return data.reduce((sum, value) => (sum = sum + value), 0);
	} else if (method === "subtraction") {
		return data.reduce((sum, value) => (sum = sum - value), 0);
	} else if (method === "multiplication") {
		return data.reduce((sum, value) => (sum = sum * value), 1);
	} else if (method === "division") {
		return data.reduce((sum, value) => (sum = sum / value), 1);
	} else {
		return `Method is not recognized`;
	}
}

// calculator/add?firstParam=1&secondParam=2
app.get('/calculator/add', (req, res) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	const result = data.reduce((sum, value) => (sum = sum + value), 0);
	res.send(`Query params: ${queryData} and the result is: ${result}`);
})

// calculator/subtract?firstParam=1&secondParam=2
app.get('/calculator/subtract', (req, res) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	console.log(data[0]);
	const result = data.reduce((sum, value) => (sum = sum - value));
	res.send(`Query params: ${queryData} and the result is: ${result}`);
})

// calculator/multiply?firstParam=1&secondParam=2&secondParam=4
app.get('/calculator/multiply', (req, res) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	const result = data.reduce((sum, value) => (sum = sum * value), 1);
	res.send(`Query params: ${queryData} and the result is: ${result}`);
})

// calculator/divide?firstParam=1&secondParam=2&secondParam=4
app.get('/calculator/divide', (req, res) => {
	const queryData = [].concat.apply([], Object.values(req.query));
	const data = queryData.map(Number);
	const result = data.reduce((sum, value) => (sum = sum / value), 1);
	res.send(`Query params: ${queryData} and the result is: ${result}`);
})

app.listen(PORT, ()=> console.log(`Server started at ${PORT}`));