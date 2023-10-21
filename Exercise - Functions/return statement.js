function readFullName(firstName, lastName) {
  return firstName + " " + lastName; //immediately stop the function's execution and RETURNS the specified value to the caller
}
const fullName = readFullName("John", "Smith"); //we write the name into a variable; const - cannot be reassigned
console.log(fullName);
