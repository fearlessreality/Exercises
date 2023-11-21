// function makeDictionary(arr) {
//   let object = {};
//   arr.forEach((element) => {
//     let parsedObject = JSON.parse(element);
//     // console.log(parsedObject);
//     Object.entries(parsedObject).forEach(([key, value]) => {
//       object[key] = value;
//     });
//   });
//   // console.log(object);
//   let objArr = Object.entries(object)
//     .sort()
//     .forEach(([term, definition]) => {
//       console.log(`Term: ${term} => Definition: ${definition}`);
//     });
//   // `Term: ${term} => Definition: ${definition}`
// }
// makeDictionary([
//   '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
//   '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
//   '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
//   '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
//   '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
// ]);

// function makeDictionary(arr) {
//   let oneObject = {};
//   let toObj = arr.forEach((string) => {// we don't need to store it in a variable
//     let parced = JSON.parse(string);
//     // console.log(string);
//     // console.log(parced);
//     // console.log(typeof string);
//     Object.entries(parced).forEach(([key, value]) => {
//       oneObject[key] = value;
//       // console.log(Object.entries(parced));
//     });
//     // console.log(typeof parced);
//   });
//   // console.log(oneObject);
//   Object.entries(oneObject)// create a const sortedKeys = Object.keys(dictionary).sort()
//     .sort()
//     .forEach(([term, definition]) => {
//       console.log(`Term: ${term} => Definition: ${definition}`);
//     });
// }

// makeDictionary([
//   '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
//   '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
//   '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
//   '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
//   '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',
// ]);
function makeDictionary(arr) {
  const dictionary = {};

  arr.forEach((jsonString) => {
    const parsedObject = JSON.parse(jsonString);
    Object.entries(parsedObject).forEach(([key, value]) => {
      dictionary[key] = value;
    });
  });

  const sortedKeys = Object.keys(dictionary).sort();
  // console.log(sortedKeys);
  sortedKeys.forEach((key) => {
    console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
  });
}

makeDictionary([
  '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
  '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."}',
  '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."}',
  '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."}',
  '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."}',
]);
