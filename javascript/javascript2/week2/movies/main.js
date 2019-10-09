console.log(movies.length); // 6527 movies


const shortNameMovies = movies.filter(movie => movie.title.length <= 10);
console.log(shortNameMovies); // 2132 movies


const longNameMovies = movies.filter(movie => movie.title.length > 10);
console.log(longNameMovies); // 4395 movies


const moviesFromEighties = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989);
console.log(moviesFromEighties); // 638 movies


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


const moviesRatingsArr = movies.filter(movie => movie.rating > 6).map(movie => movie.rating)
console.log(moviesRatingsArr); // 4904 movies ratings

