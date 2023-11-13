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

let polly = {
  name: { firstName: "Paola", middleName: "Veselinova", lastName: "Tosheva" },
  age: 26,
  height: { cm: 165, mm: 1165, inches: 345 },
  eyes: { count: 2, colour: "brown", type: "hooded" },
};
let chris = {
  name: {
    firstName: "Christian",
    middleName: "Sergeev",
    lastName: "Sergienko",
  },
  age: 32,
  height: { cm: 174, mm: 1174, inches: 555 },
  eyes: { count: 2, colour: "blue", type: "hooded" },
};
// let arr = [polly, chris];
let obj = { polly, chris };
let arr = Object.values(obj);
function sortByHeight(a, b) {
  return b.height.cm - a.height.cm;
}
arr.sort(sortByHeight);
function printName({ firstName, middleName, lastName }) {
  console.log(`The tallest person is: ${firstName} ${middleName} ${lastName}.`);
}
printName(arr[0].name);
