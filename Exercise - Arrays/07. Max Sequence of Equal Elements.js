// function maxSequence(array) {
//   let maxLength = 0;
//   let longestStart = 0;

//   for (let i = 0; i < array.length; i++) {
//     let j = i;
//     while (j < array.length && array[j] === array[i]) {
//       j++;
//     } // a nested loop that checks the length of the sequence starting from the current element in the primary loop.
//     // Otherwise, we have to have multiple conditional ckecks.

//     if (j - i > maxLength) {
//       // j-i being the number of elements (the length stored as a number in a variable)
//       maxLength = j - i; //current longest sequence, the length
//       longestStart = i; //the start of the longest sequence. We need it to start the slice method later.
//     }
//     //So, it basically means: If the length > 0 (a sequence exists) - set the length to j-i.
//     // And the start of the longest sequence is i.

//     // Skip the rest of the sequence
//     i = j - 1; // we move the index to the last element of the sequence because i is about to be incremented by the for loop.
//   }

//   let longestSequence = array.slice(longestStart, longestStart + maxLength); // slice me a piece from longestStart included to before the last element of maxLength.
//   // we include longestStart in the equasion because otherwise the method will slice one element before maxLength.
//   console.log(longestSequence.join(" "));
// }
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); //2 2 2
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([4, 4, 4, 4]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);

function maxSequence(arr) {
  let startSequence = 0;
  let maxLength = 0;
  for (let i = 0; i < arr.length; i++) {
    j = i;
    while (j < arr.length && arr[i] == arr[j]) {
      j++;
    }
    if (j - i > maxLength) {
      maxLength = j - i;
      startSequence = i;
    }
    i = j - 1;
  }
  let maxSequence = arr.slice(startSequence, startSequence + maxLength);
  console.log(maxSequence.join(" "));
}
