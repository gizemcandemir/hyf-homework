const express = require('express');
const bodyParser = require('body-parser');
// const { PORT } = process.env || 5000;
const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/calculator', (req, res) => {
	const paramsFromQuery = Object.values(req.body);
	res.send(`${calculate(paramsFromQuery)}`);
});

// {	"num1": 1,	"num2": 2,	"num3": 4,	"method": "division" }
function calculate(numberParams) {
	const method = numberParams[numberParams.length-1];
	numberParams.pop();
	if (method === "addition") {
		return numberParams.reduce((sum, value) => (sum = sum + value), 0);
	} else if (method === "subtraction") {
		return numberParams.reduce((sum, value) => (sum = sum - value), 0);
	} else if (method === "multiplication") {
		return numberParams.reduce((sum, value) => (sum = sum * value), 1);
	} else if (method === "division") {
		return numberParams.reduce((sum, value) => (sum = sum / value), 1);
	} else {
		return `Method is not recognized`;
	}
}

// calculator/add?firstParam=1&secondParam=2
app.get('/calculator/add', (req, res) => {
	const paramsFromQuery = [].concat.apply([], Object.values(req.query));
	const numbersToCalculate = paramsFromQuery.map(Number);
	const calculationResult = numbersToCalculate.reduce((sum, value) => (sum = sum + value), 0);
	res.send(`Query params: ${paramsFromQuery} and the result is: ${calculationResult}`);
})

// calculator/subtract?firstParam=1&secondParam=2
app.get('/calculator/subtract', (req, res) => {
	const paramsFromQuery = [].concat.apply([], Object.values(req.query));
	const numbersToCalculate = paramsFromQuery.map(Number);
	console.log(numbersToCalculate[0]);
	const calculationResult = numbersToCalculate.reduce((sum, value) => (sum = sum - value));
	res.send(`Query params: ${paramsFromQuery} and the result is: ${calculationResult}`);
})

// calculator/multiply?firstParam=1&secondParam=2&secondParam=4
app.get('/calculator/multiply', (req, res) => {
	const paramsFromQuery = [].concat.apply([], Object.values(req.query));
	const numbersToCalculate = paramsFromQuery.map(Number);
	const calculationResult = numbersToCalculate.reduce((sum, value) => (sum = sum * value), 1);
	res.send(`Query params: ${paramsFromQuery} and the result is: ${calculationResult}`);
})

// calculator/divide?firstParam=1&secondParam=2&secondParam=4
app.get('/calculator/divide', (req, res) => {
	const paramsFromQuery = [].concat.apply([], Object.values(req.query));
	const numbersToCalculate = paramsFromQuery.map(Number);
	const calculationResult = numbersToCalculate.reduce((sum, value) => (sum = sum / value), 1);
	res.send(`Query params: ${paramsFromQuery} and the result is: ${calculationResult}`);
})

app.listen(PORT, ()=> console.log(`Server started at ${PORT}`));