function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    //Middle of an array - swapping items is a two-way process.
    //for each element from the start there is a correspodning element at the end. By the time I reach the middle the elements would've been swapped.
    let oldElement = arr[i]; //stores the element to be swapped later.

    let previousIndex = arr.length - 1 - i; // the index of the item from the opposite end (instead of a nested loop)
    //arr.length - 1 (index of last element - i meaning the flow goes from the last to the first element)
    arr[i] = arr[previousIndex]; // SWAPPING HAPPENS, презаписване, end to beginning
    arr[previousIndex] = oldElement; // Swapping 2 - beginning to end.
  }
  console.log(arr.join(" "));
}
reverse(["a", "b", "c", "d", "e"]);
