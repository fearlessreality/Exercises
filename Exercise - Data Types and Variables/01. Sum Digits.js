function sumDigits(input) {
  let stringInput = input.toString();
  let sum = 0;
  for (let i = 0; i < stringInput.length; i++) {
    sum += Number(stringInput[i]);
  }
  console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);
