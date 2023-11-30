function piccolo(arr) {
  //itereate through arr, object car
  //  destructure
  let parkingLot = {};
  arr.forEach((el) => {
    let [direction, carNumber] = el.split(", ");
    // console.log(direction);
    // console.log(carNumber);
    //if "out" =>
    if (direction === "IN") {
      parkingLot[carNumber] = true;
    } else if (direction === "OUT") {
      delete parkingLot[carNumber];
    }
  });
  //   console.log(parkingLot);
  let parkedCars = Object.keys(parkingLot);
  //   console.log(parkedCars);
  //edge case: if empty:  "Parking Lot is Empty"
  // if it's empty = if there are no elements in the array
  if (parkedCars.length === 0) {
    console.log("Parking Lot is Empty");
    //sort ascending
  } else {
    parkedCars.sort().forEach((car) => console.log(car));
  }
}
piccolo([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
