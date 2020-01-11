function accum(s) {
  const newArray = s.split("");
  const changedArray = newArray.map(function(letter, index) {
    const newCaps = letter.toUpperCase();
    const repeats = letter.toLowerCase().repeat(index);
    return newCaps + repeats;
  });
  return changedArray.join("-");
}
