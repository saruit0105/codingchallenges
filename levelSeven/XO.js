function XO(str) {
  const newXO = str.toLowerCase();
  const newArray = newXO.split("");
  let numX = 0;
  let numO = 0;
  newArray.forEach(function(letter) {
    if (letter === "x") {
      ++numX;
    } else if (letter === "o") {
      ++numO;
    } else return letter;
  });
  return numX == numO;
}
