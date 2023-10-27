function employees(arr) {
  //we have multiple employees - multiple objects = for loop
  let employeesObjects = [];
  for (let i = 0; i < arr.length; i++) {
    let employee = {
      name: arr[i],
      personalNum: arr[i].length,
    };
    employeesObjects.push(employee);
  }
  for (let curEmployee of employeesObjects) {
    // curEmployee == employee in a single iteration at this point
    console.log(
      `Name: ${curEmployee.name} -- Personal Number: ${curEmployee.personalNum}`
    );
  }
}

// employees([
//   "Silas Butler",
//   "Adnaan Buckley",
//   "Juan Peterson",
//   "Brendan Villarreal",
// ]);
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
