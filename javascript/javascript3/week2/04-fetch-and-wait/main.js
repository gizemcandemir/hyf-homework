// Fetch some data from an api.
// After that data has been fetched, wait 3 seconds
// Log out the data from the api
// Optional Now do all of these things using chaining

fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
	.then(response => response.json())
	.then(data => setTimeout(() => console.log(data), 3 * 1000));
