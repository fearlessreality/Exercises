// function smallestOfThreeNumbers(num1, num2, num3) {
//   let min = Math.min(num1, num2, num3);
//   console.log(min);
// }
// smallestOfThreeNumbers(2, 5, 3);
// smallestOfThreeNumbers(600, 342, 123);
// smallestOfThreeNumbers(25, 21, 4);
// smallestOfThreeNumbers(2, 2, 2);

let min = (num1, num2, num3) => Math.min(num1, num2, num3);
console.log(min(2, 5, 3));
console.log(min(600, 342, 123));
console.log(min(25, 21, 4));
console.log(min(2, 2, 2));
