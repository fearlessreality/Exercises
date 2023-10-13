//determines if there exists an element in the array of numbers
// that the sum of the elements on its left
// is equal to the sum of the elements on its right.

// if NO elements to the left/right, their sum is 0.

// Print the index in between OR
// Print "no" if no such index.

function equalSums(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = i - 1; j >= 0; j--) {
      leftSum += arr[j];
    }
    for (let y = i + 1; y < arr.length; y++) {
      rightSum += arr[y];
    }
    if (leftSum == rightSum) {
      console.log(i);
      return;
    }
  }
  console.log("no");
}
equalSums([1, 2, 3, 3]); //2
equalSums([1, 2]); //no
equalSums([1]); //0
equalSums([1, 2, 3]); //no
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]); //3
