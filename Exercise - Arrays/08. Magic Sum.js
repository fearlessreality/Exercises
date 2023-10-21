function magicSum(array, num) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == num && j < array.length) {
        console.log(array[i], array[j]); //I first tried with a string interpolation but the space was too big.
      }
    }
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
console.log("-----------------");
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log("-----------------");
magicSum([1, 2, 3, 4, 5, 6], 6);
