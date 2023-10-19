function computerStore() {
  let priceNoTax = 0;
  let command = arr.shift();
  while (command != "special" && command != "regular") {
    let price = Number(command);
    if (price <= 0) {
      console.log("Invalid price!");
      command = arr.shift();
      continue;
    }
    priceNoTax += price;

    command = arr.shift();
  }
  if (priceNoTax == 0) {
    console.log("Invalid order!");
  } else {
    let tax = 0.2 * priceNoTax;
    let;
  }
}
computerStore();
computerStore();
