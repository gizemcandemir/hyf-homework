console.log(movies.length); // 6527 movies

// 1. Create an array of movies containing the movies with a short title (you define what short means)

const shortNameMovies = movies.filter(movie => movie.title.length <= 10);

console.log(shortNameMovies); // 2132 movies

// 2. Create an array of movie titles with long movie titles

const longNameMovies = movies.filter(movie => movie.title.length > 10);

console.log(longNameMovies); // 4395 movies

// 3. Count the number of movies made between 1980-1989 (including both the years)

const moviesFromEighties = movies.filter(
	movie => movie.year >= 1980 && movie.year <= 1989
);

console.log(moviesFromEighties); // 638 movies

// 4. Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const newKeyTag = movies.map(movie => {
	if (movie.rating >= 7) {
		movie.tag = "Good";
	} else if (movie.rating < 7 && movie.rating >= 4) {
		movie.tag = "Average";
	} else {
		movie.tag = "Bad";
	}
});

console.log(movies); // all array with the new tag for each movie object

// 5. Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies.

const moviesRatedAbove6 = movies
	.filter(movie => movie.rating > 6)
	.map(movie => movie.rating);

console.log(moviesRatedAbove6); // There are 4904 movies rated above 6.

// 6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?

const keywords = ["Surfer", "Alien", "Benjamin"];

const moviesWithKeywords = movies.filter(movie =>
	keywords.some(keyword =>
		movie.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
	)
);

console.log(`The count of movies which contain the ${keywords} is ${moviesWithKeywords.length}`);

// const moviesWithKeywordsInTitle = movies.filter(movie =>
// 	doesItHaveKeyword(movie.title)
// );

// function doesItHaveKeyword(title) {
// 	let keywordTitle = false;
// 	keywords.forEach(keyword => {
// 		if (title.toLowerCase().includes(keyword.toLowerCase())) {
// 			return (keywordTitle = true);
// 		}
// 	});
// 	return keywordTitle;
// }

// console.log(moviesWithKeywordsInTitle); // 19 movies with keywords in their title.

// 7. Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated.

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

console.log(titlesWithDuplicateWords); // 124 movies with duplicate words.

// 8. Find the word that is mostly duplicated using sort Optional

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

// 9. Calculate the average rating of all the movies using reduce. Optional

const averageRating = (
	movies.reduce((acc, movie) => acc + movie.rating, 0) / movies.length
).toFixed(2);

console.log(`The average rating of the movies is: ${averageRating}.`); //6.63

// 10. Count the total number of Good, Average and Bad movies using reduce. Optional

const tagCount = movies.reduce(
	(acc, m) => {
		acc[m.tag] += 1;

		return { ...acc };
	},
	{ Good: 0, Average: 0, Bad: 0 }
);

console.log(tagCount);




// the rest is just earlier code I want to keep in my file for comparing. I hope you don't mind. 

// const goodMovies = movies.map(movie => movie.tag === "Good");
// const averageMovies = movies.map(movie => movie.tag === "Average");
// const badMovies = movies.map(movie => movie.tag === "Bad");

// const goodMoviesCount = goodMovies.reduce((acc, movie) => acc + movie);
// const averageMoviesCount = averageMovies.reduce((acc, movie) => acc + movie);
// const badMoviesCount = badMovies.reduce((acc, movie) => acc + movie);

// console.log(
// 	`There are ${goodMoviesCount} good movies, ${averageMoviesCount} average movies and ${badMoviesCount} bad movies in the movies array.`
// ); // There are 2602 good movies, 3837 average movies and 88 bad movies in the movies array.

// [{}, {}, ...]
// => {good: 23, bad: 234, average: 900}

// const tagCount = movies.reduce(
// 	(acc, m) => {
// 		if (m.tag === "Good") {
// 			acc["good"] += 1;
// 		} else if (m.tag === "Average") {
// 			acc.average += 1;
// 		} else {
// 			acc.bad += 1;
// 		}

// 		return { ...acc };
// 	},
// 	{ good: 0, bad: 0, average: 0 }
// );

// console.log(tagCount);
