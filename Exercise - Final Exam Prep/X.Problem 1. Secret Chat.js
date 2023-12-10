function secretChat(input) {
  let concealedMessage = input.shift();
  //   console.log(concealedMessage);
  //   console.log(input);

  for (let line of input) {
    let [command, token1, token2] = line.split(":|:");
    // console.log(command);
    // console.log(token1);
    // console.log(token2);
    switch (command) {
      case "InsertSpace":
        let index = token1;
        concealedMessage =
          concealedMessage.slice(0, index) +
          " " +
          concealedMessage.slice(index, concealedMessage.length);
        console.log(concealedMessage);
        break;
      case "Reverse":
        let substring = token1;
        // console.log(substringReverse);

        if (concealedMessage.includes(substring)) {
          concealedMessage = concealedMessage.replace(substring, "");
          let reversed = substring.split("").reverse().join("");
          //   console.log(reversed);
          concealedMessage = concealedMessage.concat(reversed);
          console.log(concealedMessage);
        } else {
          console.log("error");
        }
        break;
      case "ChangeAll":
        let substr = token1;
        let replacement = token2;
        // console.log(substr);
        // console.log(replacement);
        //RegEx to look for patterns, "g" means global and looks for all instances of substr in order to replace them.
        concealedMessage = concealedMessage.replace(
          new RegExp(substr, "g"),
          replacement
        );
        console.log(concealedMessage);
        break;
      case "Reveal":
        console.log(`You have a new text message: ${concealedMessage}`);
        break;
    }

    continue;
  }
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
