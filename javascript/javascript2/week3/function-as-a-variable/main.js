const array = [
	(a) => a + 1,
	(a) => a - 1,
	(a) => a * 1,
];

for (i = 0; i < array.length; i++) {
	console.log(array[i](3));
}

// -- * -- //

const plusOne = (a) => a + 1;

function minusOne(a) {
	return a - 1;
}

console.log(plusOne(3));

console.log(minusOne(3));

// -- * -- //

const test = {
	name: (a) => a * 1,
}

console.log(test.name(3));