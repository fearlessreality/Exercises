// function storeProvisions(arr1, arr2) {
//arr1 = curStock
//arr2 = ordered
//even index = names arr?
// odd index = qunatity of strings!!!
// if arr2 contains products from arr1 old + new quantity
// else push in array of quantity arr?
// object product and quantity
//   let objectProduct = {};
//   for (let i = 0; i < arr1.length; i += 2) {
//     let names = arr1[i];
//     let quantity = parseInt(arr1[i + 1]);
//     if (objectProduct[names]) {
//       objectProduct[names] += quantity;
//     } else {
//       objectProduct[names] = quantity;
//     }
//   }
//   for (let j = 0; j < arr2.length; j += 2) {
//     let names = arr2[j];
//     let quantity = parseInt(arr2[j + 1]);
//     if (objectProduct[names]) {
//       objectProduct[names] += quantity;
//     } else {
//       objectProduct[names] = quantity;
//     }
//   }
//   Object.entries(objectProduct).forEach(([key, value]) => {
//     console.log(`${key} -> ${value}`);
//   });
// }
// storeProvisions(
//   ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
//   ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
// );
storeProvisions(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
function storeProvisions(arr1, arr2) {
  let objectProduct = {};
  arr1.forEach((value, index) => {
    if (index % 2 == 0) {
      let product = value;
      let quantity = parseInt(arr1[index + 1]); //Convert the next value to an integer
      if (objectProduct[product]) {
        objectProduct[product] += quantity;
      } else {
        objectProduct[product] = quantity;
      }
    }
  });
  arr2.forEach((value, index) => {
    if (index % 2 == 0) {
      let product = value;
      let quantity = parseInt(arr2[index + 1]);
      if (objectProduct[product]) {
        objectProduct[product] += quantity;
      } else {
        objectProduct[product] = quantity;
      }
    }
  });
  for (let [product, quantity] of Object.entries(objectProduct)) {
    console.log(`${product} -> ${quantity}`);
  }
}
