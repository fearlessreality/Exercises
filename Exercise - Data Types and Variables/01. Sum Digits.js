function sumDigits(input) {
  let stringInput = input.toString();
  let sum = 0;
  // Ако е число се събират, ако е стринг се конкатенират.
  for (let i = 0; i < stringInput.length; i++) {
    sum += Number(stringInput[i]);
  }
  console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);
