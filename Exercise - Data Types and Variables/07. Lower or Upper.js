function lowerOrUpper(char) {
  if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
    console.log("upper-case");
  } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
    console.log("lower-case");
  }
}
lowerOrUpper("L");
lowerOrUpper("f");
console.log("--------------------");
// ------------------------------ Both are valid------------------
function lowerOrUpper(char) {
  char.charCodeAt() >= 65 && char.charCodeAt() <= 90
    ? console.log("upper-case")
    : console.log("lower-case");
}
lowerOrUpper("L");
lowerOrUpper("f");
