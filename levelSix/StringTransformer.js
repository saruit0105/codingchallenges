function stringTransformer(str) {
  const newString = str.split("");
  const oppositeString = newString.map(eachLetter =>
    eachLetter === eachLetter.toUpperCase() ? eachLetter.toLowerCase() : eachLetter.toUpperCase()
  );
  return oppositeString
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
}
