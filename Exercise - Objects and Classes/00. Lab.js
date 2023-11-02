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
//------------------------------------------------------
let myArr = [
  ["polly", 26],
  ["chris", 32],
];

myArr.forEach(([name, age], index) => {
  console.log(name, age, index);
});

const anotherArr = ["polly", 26];

let [name, age] = anotherArr;
//------------------------------------------------------
