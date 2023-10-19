function treasureHunt(array) {
  let loot = array.shift().split("|");
  let command = array.shift();

  while (command != "Yohoho!") {
    let totalGain = 0;
    let tokens = command.split(" ");
    let action = tokens.shift();
    if (action == "Loot") {
      //   let items = //
      tokens
        .filter((item) => !loot.includes(item))
        .forEach((item) => loot.unshift(item));
      //   for (let item of items) {
      //       loot.unshift(item);

      //   }
    } else if (action == "Drop") {
      let idx = Number(tokens.shift());
      if (idx >= 0 && idx < loot.length) {
        let removedItem = loot.splice(idx, 1).shift();
        loot.push(removedItem);
      } else if (action == "Steal") {
        let count = Number(tokens.shift());
        let stolenItems = loot.splice(-count); //Ако в този масиц count е -2 ги брои отзад - напред)
        console.log(stolenItems.join(","));
      }
    }
    command = array.shift();
  }
}
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
