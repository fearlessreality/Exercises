function towns(arr) {
  for (let el of arr) {
    let elements = el.split(" | ");

    let columns = {
      town: elements[0],
      latitude: Number(elements[1]).toFixed(2),
      longitude: Number(elements[2]).toFixed(2),
    };
    console.log(columns);
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
towns(["Plovdiv | 136.45 | 812.575"]);
