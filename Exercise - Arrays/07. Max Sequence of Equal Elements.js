function maxSequence(array) {
  for (let i = 0; i < array.length; i++) {
    j = i;
    while (j < array.length && array[j] == array[i]) {
      //loop stops when array[j] isn't equal to array[i]
      //this is a check for the sequence.
      j++; //We don't know how many times it will iterate - while loops.
    }
  }
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]); //2 2 2
// maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequence([4, 4, 4, 4]);
// maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
