// function charInRange(char1, char2) {
//   let first = char1.charCodeAt(0);
//   let last = char2.charCodeAt(0);
//   let range = ""; // it  has to be a string, not an array
//   if (first < last) {
//     for (let i = first + 1; i < last; i++) {
//       range += String.fromCharCode(i) + " ";
//     }
//   } else {
//     for (let j = last + 1; j < first; j++) {
//       // last + 1, not -1; j < first, not last; also j++, not j--.
//       //   range += String.fromCharCode(j + " ");
//       range += String.fromCharCode(j) + " ";
//     }
//   }

//   console.log(range);
//   //   console.log(first); //67
//   //   console.log(last); //35
// }
charInRange("a", "d");
console.log("--------------------");
charInRange("#", ":");
console.log("--------------------");
charInRange("C", "#");

//------------------------------------------------- We can also do it like that:
// function charInRange(char1, char2) {
//   let first = char1.charCodeAt(0);
//   let last = char2.charCodeAt(0);
//   let range = "";
//   let min = Math.min(first, last);
//   let max = Math.max(first, last);

//   for (let i = min + 1; i < max; i++) {
//     range += String.fromCharCode(i) + " ";
//   }

//   console.log(range);
// }
//BOOM!
//------------------------------------------------- We can ALSO do it like that:
function charInRange(char1, char2) {
  let first = char1.charCodeAt(0);
  let last = char2.charCodeAt(0);
  let min = Math.min(first, last);
  let max = Math.max(first, last);
  //
  printResult(min, max); //!!!!!!!!!!!
  //
  function printResult(start, end) {
    //(start = min, end = max) Names in the function don't matter. When I call it I will put the parameters.
    let range = "";
    for (let i = min + 1; i < max; i++) {
      range += String.fromCharCode(i) + " ";
    }

    console.log(range);
  }
}
