// -----THE BASICS WAY-------------------------
// function solve(input) {
//   let num1 = input[0];
//   let num2 = input[1];
//   let num3 = input[2];
//   let descending = "";
//   for (let i = 0; i < input.length; i++) {
//     const desOrd = input[i];
//     console.log(desOrd);
//   }
//   if (num1<num2&& num1<num3) {
//   descending+=
//   }
// }
// solve([2, 1, 3]);
// solve(1);
// solve(3);
// ------INCORRECT PROBABLY---------------------

function ages(years) {
  if (years >= 0 && years <= 2) {
    console.log("baby");
  } else if (years >= 3 && years <= 13) {
    console.log("child");
  } else if (years >= 14 && years <= 19) {
    console.log("teenager");
  } else if (years >= 20 && years <= 65) {
    console.log("adult");
  } else if (years >= 66) {
    console.log("elder");
  } else {
    console.log("out of bounds");
  }
  console.log("-----------------------");
}
ages(20);
ages(1);
ages(100);
ages(-1);

// а можем да си направим празен стринг, на който да му подадем  стойности и накрая само да принтираме.
// console.log("-----------------------");

function ages(years) {
  let result = "";

  if (years < 0) {
    result = "out of bounds";
  } else if (years <= 2) {
    result = "baby";
  } else if (years <= 13) {
    result = "child";
  } else if (years <= 19) {
    result = "teenager";
  } else if (years <= 65) {
    result = "adult";
  } else {
    result = "elder";
  }
  console.log(result);
}
ages(20);
ages(1);
ages(100);
ages(-1);
