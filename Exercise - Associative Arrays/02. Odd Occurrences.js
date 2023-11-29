// function oddOccurrences(string) {
//   let arr = string.toLowerCase().split(" ");
//   // console.log(arr);
//   let counts = {};
//   arr.forEach((word) => {
//     counts[word] = (counts[word] || 0) + 1;
//   });
//   let toExtract = Object.entries(counts)
//     .filter(([, value]) => value % 2 !== 0)
//     .map(([key]) => key)
//     .join(" "); // filter creates an array with the values that meet the condition
//   // map creates a new array with the given elements from the first array
//   console.log(toExtract);
// }
// oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");

function oddOccurrences(string) {
  let arr = string.toLowerCase().split(" ");
  // console.log(arr);
  let counts = {};
  arr.forEach((word) => {
    counts[word] = (counts[word] || 0) + 1;
  });
  let toExtract = Object.entries(counts)
    .filter(([, value]) => {
      return value % 2 !== 0; // Added return statement here
    })
    .map(([key]) => key)
    .join(" "); // filter creates an array with the values that meet the condition
  // map creates a new array with the given elements from the first array
  console.log(toExtract);
}
oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");
