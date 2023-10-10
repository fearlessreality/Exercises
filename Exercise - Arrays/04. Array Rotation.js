function arrRot(arr, rotations) {
  let lastEl = 0;
  for (let i = 0; i < rotations; i++) {
    lastEl = arr[i];
    arr.push(lastEl);
  }
  for (let i = 0; i < rotations; i++) {
    arr.shift();
  }

  console.log(arr.join(" "));
}
arrRot([51, 47, 32, 61, 21], 2);
// 32 61 21 51 47
console.log("-------------------------------------");
arrRot([32, 21, 61, 1], 4);
console.log("-------------------------------------");
arrRot([2, 4, 15, 31], 5);
