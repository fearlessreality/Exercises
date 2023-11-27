function oddOccurrences(string) {
  let sentence = string.toLowerCase().split(" ");
  //   console.log(sentence);
  let counts = {};
  sentence.forEach((word) => {
    counts[word] = (counts[word] || 0) + 1;
  });
  let filtered = Object.entries(counts)
    .filter(([, value]) => value % 2 !== 0)
    .map(([k]) => k)
    .join(" "); // map creates a new array with the given elements from the first array
  console.log(filtered);
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
