function myFunc(resolveAfter) {
	const newPromise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`I am called asynchronously after ${resolveAfter} seconds`);
		}, resolveAfter * 1000);
	});
	
	return newPromise.then(value => (console.log(value)));
}

myFunc(3);
myFunc(6);