function sum(num1, num2) {
  let store = "";
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    // store += i + " ";
    store += `${i} `;
    sum += i;
  }
  console.log(store);
  console.log(`Sum: ${sum}`);
}
// sum(5, 10);
// sum(0, 26);
sum(50, 60);
