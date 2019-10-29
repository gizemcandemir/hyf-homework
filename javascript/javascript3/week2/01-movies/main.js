const url =
	"https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

fetch(url)
	.then(value => value.json())
	.then(movies => {
		const badMovies = movies.filter(movie => movie.rating < 4);
		return badMovies;
	})
	.then(movies => {
		const badMoviesSince2000 = movies.filter(movie => movie.year >= 2000);
		return badMoviesSince2000;
	})
	.then(movies => {
		const badMovieTitlesSince2000 = movies.map(movie => movie.title);
		console.log(badMovieTitlesSince2000);
		return badMovieTitlesSince2000;
	});
	