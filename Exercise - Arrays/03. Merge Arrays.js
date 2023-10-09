function mergeArrays(strArr1, strArr2) {
  let mergedArr = [];
  for (let i = 0; i < strArr1.length; i++) {
    if (i % 2 == 0) {
      let sum = Number(strArr1[i]) + Number(strArr2[i]);
      mergedArr[i] = sum;
    } else {
      mergedArr[i] = strArr1[i] + strArr2[i];
    }
  }
  console.log(mergedArr.join(" - "));
}
mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
// mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
