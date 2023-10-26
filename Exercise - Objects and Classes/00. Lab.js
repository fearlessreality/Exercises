// 01.Person Info
function personInfo(firstName, lastName, age) {
  let person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  return person;
}

personInfo("Peter", "Pan", "20");
personInfo("George", "Smith", "18");
