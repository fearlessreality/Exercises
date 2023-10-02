function rounding(rounded, precision) {
  if (precision > 15) {
    precision = 15;
  }
  let newRound = rounded.toFixed(precision);
  console.log(parseFloat(newRound));
}
rounding(3.1415926535897932384626433832795, 2);
rounding(10.5, 3);
