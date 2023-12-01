function partyTime(arr) {
  let commandIndex = arr.indexOf("PARTY");
  //   console.log(commandIndex);
  let vipGuests = []; //cannot sort - mixes up the order
  let regularGuests = [];

  // Separate VIP and regular guests
  for (let i = 0; i < commandIndex; i++) {
    if (!isNaN(parseInt(arr[i][0]))) {
      vipGuests.push(arr[i]);
    } else {
      regularGuests.push(arr[i]);
    }
  }
  // console.log(vipGuests);
  // console.log(regularGuests);

  // Process guests who arrive
  for (let i = commandIndex + 1; i < arr.length; i++) {
    let guestIndex = vipGuests.indexOf(arr[i]); //we need the index for splice() later
    if (guestIndex !== -1) {
      // meaning it is present (-1 means it's not present)
      vipGuests.splice(guestIndex, 1);
      continue; //jump over that el and proceed to the next iteration
    }
    // console.log(vipGuests);

    guestIndex = regularGuests.indexOf(arr[i]); //I can "recycle" the variable
    if (guestIndex !== -1) {
      regularGuests.splice(guestIndex, 1);
    }
    // console.log(regularGuests);
  }
  let absentGuests = vipGuests.concat(regularGuests); //merges two or more arr. we start with vip, so we concatinate to it the regulars
  // console.log(absentGuests);
  console.log(absentGuests.length);
  console.log(absentGuests.join("\n")); //join them with a new line in between
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
