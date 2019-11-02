// Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises. So instead of using setTimeout and navigator.geolocation.getCurrentPosition with callbacks, use it as a promise.

function setTimeoutPromise(miliseconds) {
	return new Promise(resolve => {
		setTimeout(() => resolve(), miliseconds);
	});
}

setTimeoutPromise(3000).then(() => {
	console.log(`Called after 3 seconds`);
});

function getCurrentLocation() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	})
}		

getCurrentLocation()
	.then(position => {
		// called when the users position is found
		console.log(position);
	})
	.catch(error => {
		// called if there was an error getting the users location
		console.log(error);
	});
