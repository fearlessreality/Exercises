// function movies(arr) {
//   let movieObject = {};
//   arr.forEach((element) => {
//     if (element.includes("addMovie")) {
//       let movie = element.split("addMovie ")[1];
//       movieObject[movie] = { name: movie };
//     }
//     if (element.includes("directedBy")) {
//       let [movie, director] = element.split(" directedBy ");
//       movieObject[movie] = {
//         ...movieObject[movie],
//         director: director,
//       };
//     }
//     if (element.includes(" onDate ")) {
//       let [movie, date] = element.split(" onDate ");
//       movieObject[movie] = { ...movieObject[movie], date: date };
//     }
//   });
//   console.log(movieObject);

//   let movieArr = Object.values(movieObject);
//   console.log(movieArr);
//   let filteredArr = movieArr.filter(
//     (movie) =>
//       movie.hasOwnProperty("name") &&
//       movie.hasOwnProperty("director") &&
//       movie.hasOwnProperty("date")
//   );
//   for (let movie of filteredArr) {
//     console.log(JSON.stringify(movie));
//   }
// }
// movies([
//   "addMovie Fast and Furious",
//   "addMovie Godfather",
//   "Inception directedBy Christopher Nolan",
//   "Godfather directedBy Francis Ford Coppola",
//   "Godfather onDate 29.07.2018",
//   "Fast and Furious onDate 30.07.2018",
//   "Batman onDate 01.08.2018",
//   "Fast and Furious directedBy Rob Cohen",
// ]);
function movies(arr) {
  let objInfo = {};

  arr.forEach((element) => {
    if (element.includes("addMovie")) {
      let name = element.split("addMovie ")[1];
      if (!objInfo[name]) {
        objInfo[name] = { name: name }; // We can write this as {name}
      }
    } else if (element.includes("directedBy")) {
      let [name, director] = element.split(" directedBy ");
      if (objInfo[name]) {
        objInfo[name].director = director; // the object with a key name has a key director with value director.
      }
    } else if (element.includes("onDate")) {
      let [name, date] = element.split(" onDate ");
      if (objInfo[name]) {
        objInfo[name].date = date;
      }
    }
  });
  // console.log(objInfo);
  let arrInfo = Object.values(objInfo).filter((element) => {
    return element.name && element.director && element.date; // we need the movie that has a director and a date only
  });
  // console.log(arrInfo);
  arrInfo.forEach((element) => {
    console.log(JSON.stringify(element));
  }); //It's only one element, so we stringify the object element.
  // console.log(JSON.stringify(arrInfo));//here we stringify the whole array.
}

movies([
  "addMovie The Avengers",
  "addMovie Superman",
  "The Avengers directedBy Anthony Russo",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
]);
