function vacation(group, type, dayOfWeek) {
  let totalPrice = 0;
  if (dayOfWeek == "Friday") {
    if (type == "Students") {
      totalPrice = 8.45 * group;
    } else if (type == "Business") {
      totalPrice = 10.9 * group;
    } else if (type == "Regular") {
      totalPrice = 15 * group;
    }
  } else if (dayOfWeek == "Saturday") {
    if (type == "Students") {
      totalPrice = 9.8 * group;
    } else if (type == "Business") {
      totalPrice = 15.6 * group;
    } else if (type == "Regular") {
      totalPrice = 20 * group;
    }
  } else if (dayOfWeek == "Sunday") {
    if (type == "Students") {
      totalPrice = 10.46 * group;
    } else if (type == "Business") {
      totalPrice = 16 * group;
    } else if (type == "Regular") {
      totalPrice += 22.5 * group;
    }
  }
  if (type == "Students" && group >= 30) {
    totalPrice *= 1 - 0.15;
  } else if (type == "Business" && group >= 100) {
    let singularPrice = totalPrice / group;
    let newGroup = totalPrice / singularPrice - 10;
    totalPrice = singularPrice * newGroup;
    // Не става с totalPrice само
    // трябва singularPrice да участва във формулата на totalPrice,
    // където трябва да махнем десетина души от групата,
    // иначе totalPrice вече е записано с подадения брой в групата от горе.
    // Само един тест ми се провали, преди да напиша втория по-тромав начин и да се върна на този.
    // този начин е със значително по-малко редове код
  } else if (type == "Regular" && group >= 10 && group <= 20) {
    totalPrice *= 1 - 0.05;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");

// function vacationNew(count, typeOfgroup, dayOfWeek) {
//   let singlePersonPrice = 0;

//   if (typeOfgroup == "Students") {
//     switch (dayOfWeek) {
//       case "Friday":
//         singlePersonPrice = 8.45;
//         break;
//       case "Saturday":
//         singlePersonPrice = 9.8;
//         break;
//       case "Sunday":
//         singlePersonPrice = 10.46;
//         break;
//     }
//   } else if (typeOfgroup == "Business") {
//     switch (dayOfWeek) {
//       case "Friday":
//         singlePersonPrice = 10.9;
//         break;
//       case "Saturday":
//         singlePersonPrice = 15.6;
//         break;
//       case "Sunday":
//         singlePersonPrice = 16;
//         break;
//     }
//   } else if (typeOfgroup == "Regular") {
//     switch (dayOfWeek) {
//       case "Friday":
//         singlePersonPrice = 15;
//         break;
//       case "Saturday":
//         singlePersonPrice = 20;
//         break;
//       case "Sunday":
//         singlePersonPrice = 22.5;
//         break;
//     }
//   }
//   let totalPrice = count * singlePersonPrice;
//   // Discount:
//   if (typeOfgroup == "Students" && count >= 30) {
//     totalPrice *= 1 - 0.15;
//   } else if (typeOfgroup == "Business" && count >= 100) {
//     totalPrice = singlePersonPrice * (count - 10);
//   } else if (typeOfgroup == "Regular" && count >= 10 && count <= 20) {
//     totalPrice *= 1 - 0.05;
//   }
//   console.log(`Total price: ${totalPrice.toFixed(2)}`);
// }
// vacationNew(30, "Students", "Sunday");
// vacationNew(40, "Regular", "Saturday");
