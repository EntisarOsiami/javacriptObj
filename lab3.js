
const movies = [
    {
      title: "The Matrix",
      director: "Wachowski Brothers",
      year: 1999,
      rating: 8.7,
    },
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      rating: 8.8,
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      rating: 8.6,
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      rating: 9.2,
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      rating: 9.0,
    },
    { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
  ];

  let firstMovie = movies.find ((movie) => movie.year > 2000);
  console.log(firstMovie.title);


let movieRating9 = movies.find ((movie) => movie.rating >= 9);
console.log(movieRating9.title);

let NolanMovies = movies.filter((movie) => movie.director === "Christopher Nolan").map ((movie) => movie.title);
console.log(NolanMovies);

let moviesAfter2010 = movies.filter ((movie) => movie.year < 2010).map ((movie) => movie.title);
console.log(moviesAfter2010);

let moviesTitle = movies.map((movie) => movie.title);
console.log(moviesTitle);

let moviesRating =movies.reduce((acc, movie) => acc + movie.rating, 0) / movies.length;
console.log(moviesRating);

let moviesSorted = movies.toSorted((a, b) => a.year - b.year);
console.log(moviesSorted);

let moviesSortedByRating = movies.toSorted((a, b) => b.rating - a.rating);
console.log(moviesSortedByRating);

let movieCheck = movies.every((movie) => movie.rating > 8);
console.log(movieCheck);

let movieDateCheck = movies.some((movie) => movie.year < 1999);
console.log(movieDateCheck);

let movieDirectorCheck = movies.every((movie) => movie.director === "Christopher Nolan");
console.log(movieDirectorCheck);

let movieCheck8 = movies.some((movie) => movie.rating < 8.5);
console.log(movieCheck8);