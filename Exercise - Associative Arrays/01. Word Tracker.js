function wordTracker(arr) {
  let firstWords = arr[0].split(" ");
  //   console.log(firstWords);
  let counts = {};
  firstWords.forEach((word) => {
    counts[word] = 0;
    // console.log(counts);
  });
  for (i = 1; i < arr.length; i++) {
    firstWords.forEach((word) => {
      if (arr[i] === word) {
        counts[word]++;
      }
    });
    // console.log(counts);
  }
  Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([word, count]) => {
      console.log(`${word} - ${count}`);
    });
  //   console.log(counts);
}
wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
