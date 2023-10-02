function triangle(maxRow) {
  for (let i = 1; i <= maxRow; i++) {
    let row = `${i} `;
    // console.log(row);

    for (let j = 1; j < i; j++) {
      //   console.log(j);
      row += `${i} `;
    }

    console.log(row);
  }
}
triangle(3);
// triangle(5);
// triangle(6);
// ---------------------------------------------------------------------------------
function triangle(maxRow) {
  let row = "";
  for (let i = 1; i <= maxRow; i++) {
    row = `${i} `;
    // console.log(row);

    for (let j = 1; j < i; j++) {
      // 1 не е < от 1, затова не печата нищо на първия ред, но инкрементира.
      //   console.log(j);
      row += `${i} `;
    }

    console.log(row);
  }
}
triangle(3);
// triangle(5);
// triangle(6);
// ---------------------------------------------------------------------------------

function triangle(num) {
  let line = "";
  for (let start = 1; start <= num; start++) {
    line = `${start} `;
    for (let secondStart = 1; secondStart < start; secondStart++) {
      // line += `${secondStart} `;
      line += `${start} `; //пак го обърках. НО РАЗБРАХ!
      // При изпълнение на втория цикъл ако печатаме първия се записва той
    }
    console.log(line);
  }
}
triangle(3);
// ---------------------------------------------------------------------------------

function triangle(maxRow) {
  for (let num = 1; num <= maxRow; num++) {
    console.log(`${num} `.repeat(num));
    // .repeat(x) работи със стрингове, а не с числа. \
    // Затова само с num.repeat(num) ми даваше грешка.^^
  }
}
triangle(3);
