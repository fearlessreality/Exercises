// function inventory(arr) {
//   let register = {};
//   arr.forEach((element) => {
//     let arrEl = element.slice();
//     // console.log(arrEl);
//     let name = arrEl.split(" / ")[0];
//     // console.log(name);
//     register[name] = { Hero: name };
//     let level = arrEl.split(" / ")[1];
//     register[name] = { ...register[name], level: Number(level) };
//     // console.log(level);
//     let items = arrEl.split(" / ")[2];
//     register[name] = { ...register[name], Items: items };
//     // console.log(items);
//   });
//   //   console.log(register);
//   let objArr = Object.values(register);
//   objArr.sort((a, b) => {
//     return a.level - b.level;
//   });
// }
// inventory([
//   "Isacc / 25 / Apple, GravityGun",
//   "Derek / 12 / BarrelVest, DestructionSword",
//   "Hes / 1 / Desolator, Sentinel, Antara",
// ]);
// Look at the cases where you might not receive three elements in the input:
function createHeroRegister(heroData) {
  let heroes = heroData.map((data) => {
    const parts = data.split(" / ");
    // console.log(data);
    // console.log(parts);
    const hero = {
      Hero: parts[0],
      level: parseInt(parts[1]),
    };
    // console.log(hero);

    if (parts.length > 2) {
      hero.items = parts[2];
    } else {
      hero.items = [];
    }
    // console.log(hero);

    return hero; // we put return to have the objects stored in the variable heroes.
  });
  heroes.sort((a, b) => a.level - b.level);
  //   console.log(heroes);

  heroes.forEach((hero) => {
    console.log(`Hero: ${hero.Hero}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  });
}

createHeroRegister([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
