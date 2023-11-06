function movies(arr) {
  let movieObject = {};
  arr.forEach((element) => {
    if (element.includes("addMovie")) {
      let movie = element.split("addMovie ")[1];
      movieObject[movie] = { name: movie };
    }
    if (element.includes("directedBy")) {
      let [movie, director] = element.split(" directedBy ");
      movieObject[movie] = {
        ...movieObject[movie],
        director: director,
      };
    }
    if (element.includes(" onDate ")) {
      let [movie, date] = element.split(" onDate ");
      movieObject[movie] = { ...movieObject[movie], date: date };
    }
  });
  let movieArr = Object.values(movieObject);
  let filteredArr = movieArr.filter(
    (movie) =>
      movie.hasOwnProperty("name") &&
      movie.hasOwnProperty("director") &&
      movie.hasOwnProperty("date")
  );
  for (let movie of filteredArr) {
    console.log(JSON.stringify(movie));
  }
}
movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
