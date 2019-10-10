// console.log(movies.length); // 6527 movies

const shortNameMovies = movies.filter(movie => movie.title.length <= 10);
// console.log(shortNameMovies); // 2132 movies

const longNameMovies = movies.filter(movie => movie.title.length > 10);
// console.log(longNameMovies); // 4395 movies

const moviesFromEighties = movies.filter(
	movie => movie.year >= 1980 && movie.year <= 1989
);
// console.log(moviesFromEighties); // 638 movies

const newKeyTag = movies.map(movie => {
	if (movie.rating >= 7) {
		movie.tag = "Good";
	} else if (movie.rating < 7 && movie.rating >= 4) {
		movie.tag = "Average";
	} else {
		movie.tag = "Bad";
	}
});
// console.log(movies); // all array with the new tag for each movie object

const moviesRatingsArr = movies
	.filter(movie => movie.rating > 6)
	.map(movie => movie.rating);
// console.log(moviesRatingsArr); // 4904 movies ratings

const keywords = ["Surfer", "Alien", "Benjamin"];

const moviesWithKeywordsInTitle = movies.filter(movie =>
	doesItHaveKeyword(movie.title)
);

function doesItHaveKeyword(title) {
	let keywordTitle = false;
	keywords.forEach(keyword => {
		if (title.toLowerCase().includes(keyword.toLowerCase())) {
			return (keywordTitle = true);
		}
	});
	return keywordTitle;
}

// console.log(moviesWithKeywordsInTitle); // 19 movies

const titlesWithDuplicateWords = [];

movies
	.map(movie => movie.title.split(" "))
	.forEach(titleWord =>
		titleWord.filter((word, index) =>
			titleWord.indexOf(word) != index
				? titlesWithDuplicateWords.push(titleWord)
				: false
		)
	);

// console.log(titlesWithDuplicateWords); // 124 movies

let wordCounts = [];

movies
	.map(movie => movie.title)
	.forEach(title => {
		title.split(" ").forEach(word => {
			let pos = wordCounts
				.map(e => e.word.toLowerCase())
				.indexOf(word.toLowerCase());
			if (pos !== -1) {
				wordCounts[pos].count += 1;
			} else {
				wordCounts.push({ word: word.toLowerCase(), count: 1 });
			}
		});
	});

wordCounts.sort((a, b) => b.count - a.count);

console.log(
	`The most duplicated word is "${wordCounts[0].word}". It's duplicated ${wordCounts[0].count} times.`
);


// Calculate the average rating of all the movies using reduce. Optional

