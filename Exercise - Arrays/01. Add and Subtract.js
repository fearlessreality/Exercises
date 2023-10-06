function addAndSubtract(array) {
  let modified = [];
  let sum = 0;
  let sumModified = 0;
  for (let i = 0; i < array.length; i++) {
    // array[i] % 2 == 0 ? even : odd;
    if (array[i] % 2 == 0) {
      let even = array[i] + i;
      modified.push(even);
    } else {
      let odd = array[i] - i;
      modified.push(odd);
    }
    sumModified += modified[i];
  }
  for (let j = 0; j < array.length; j++) {
    sum += array[j];
  }
  console.log(modified);
  console.log(sum);
  console.log(sumModified);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);
