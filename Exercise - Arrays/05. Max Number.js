// // bigger than all the elements to its right.
// function maxNum(arr) {
//   let manNumArr = [];

//   for (i = 0; i < arr.length; i++) {
//     let isTop = true;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] <= arr[j]) {
//         //Това ми е проверка за изключенията, в които isTop ще е false.
//         isTop = false;
//         break;
//       }
//     }
//     if (isTop) {
//       manNumArr.push(arr[i]); //Tова няма как да е в първия цикъл, защото той се използва за проверка на неверните
//       //стойности, а тази проверка е за съвсем друго нещо, което е за дали isTop е още вярно.
//     }
//   }
//   console.log(manNumArr.join(" "));
// }
// maxNum([1, 4, 3, 2]);
// // 4 3 2

// maxNum([14, 24, 3, 19, 15, 17]);

// maxNum([41, 41, 34, 20]);

// maxNum([27, 19, 42, 2, 13, 45, 48]);

function maxNumber(arr) {
  let allTopInt = [];
  for (let i = 0; i < arr.length; i++) {
    let firstNum = arr[i];
    let statement = true;
    for (let j = i + 1; j < arr.length; j++) {
      //това е начин да достъпим числата след първото и да ги проверим.
      let currNum = arr[j];
      // console.log(currNum); //4 3 2 3 2 2 - 3 итерации при firstNum = 1,
      // 2 итерации при firstNum = 4 и една итерация с 3.
      if (firstNum <= currNum) {
        statement = false;
        break; //вътрешният цикъл спира по-рано и външният продължава със следващото число.
      }
      // console.log(firstNum); //без if-a принтираме стойностите на firstNum (1 1 1 4 4 3),
      // //докато вторият цикъл се извършва, до където стигнат итерациите (стигат до 3, заради условието за дължина).
      // console.log(firstNum); //4 4 3 - 4 > 3, 4 > 2; 3 > 2 и за толкова ни стига дължината (до последния елемент без него)
      // ако горе имаше i/j <= arr.length със = , щеше да се отпечата и двойката.
      // console.log(currNum); //3 2 2 - в случаите, когато 4 > 3 и 4 >2, 3 > 2.

      // allTopInt.push(currNum);
      // console.log(allTopInt);
      // // [3]
      // // [(3, 2)] // същото като горе. Проверката е завършена.
      // // [(3, 2, 2)];
    }
    // console.log(firstNum); // 1 4 3 2, а currNum е било 3, 2, 2.
    if (statement) {
      // ако все пак statement е true, сложи ми числата зад i,
      //  които отговарят на условието true в масив, т.е. условията са true, когато не са false :D, т.е.
      //когато statement = false и когато числото зад i > числата зад j.
      //Това ще рече случаите, в които 4 > 3, 4 > 2 (две итерации с 4), когато 3 > 2
      //и когато 2 > от несъществуващото следващо число.
      allTopInt.push(firstNum); //Тука сме извън scope-а на currNum, където има j.
      // console.log(allTopInt);//Тук още се въртят, защото сме в обхвата на външния for цикъл.
      // [4]
      // [(4, 3)]
      // [(4, 3, 2)];
    }
    // console.log(currNum); //ReferenceError: currNum is not defined
  }
  console.log(allTopInt.join(" "));
}
maxNumber([1, 4, 3, 2]);
// 4 3 2
